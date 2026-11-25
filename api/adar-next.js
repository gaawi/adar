// Recibe una candidatura de ADAR NEXT y abre el pago de la cuota en Stripe.
//
// El formulario vive en la web (página /es/adar-next/ cuando se publique) y
// envía aquí un JSON. Esta función:
//   1. valida lo que llega, porque del navegador no se fía uno;
//   2. fija el importe AQUÍ, nunca desde el cliente;
//   3. crea una sesión de Stripe Checkout con la candidatura en `metadata`;
//   4. devuelve la URL de pago para que el navegador vaya allí.
//
// Stripe se encarga de la tarjeta, del 3D Secure, del IVA y del recibo. Aquí
// no se guarda ni se ve ningún número de tarjeta.
//
// Por qué la candidatura va en `metadata` y no en una base de datos: para
// empezar a funcionar sin montar nada más. Cada candidatura pagada aparece en
// el panel de Stripe con todos sus datos y se puede exportar a CSV. Cuando se
// decida el back office (Airtable o lo que sea), se añade aquí la escritura y
// el formulario no cambia.
//
// Variable de entorno necesaria en Vercel:
//   STRIPE_SECRET_KEY   (sk_test_… para pruebas, sk_live_… cuando se abra)

const CUOTA_CENTIMOS = 2000; // 20,00 € por proyecto. No se toca desde fuera.
const MAX_CAMPO = 2000; // tope por campo antes de recortar
const MAX_CUERPO = 60 * 1024; // 60 KB de JSON como mucho

// Los campos del formulario. `req` marca los obligatorios; `largo` los que
// pueden pasar de 500 caracteres y hay que partir para que quepan en metadata.
const CAMPOS = [
  { k: 'nombre', req: true },
  { k: 'email', req: true },
  { k: 'telefono', req: false },
  { k: 'pais', req: true },
  { k: 'formacion', req: true },
  { k: 'personas', req: true },
  { k: 'web', req: false },
  { k: 'titulo', req: true },
  { k: 'estado_obra', req: true },
  { k: 'duracion', req: false },
  { k: 'grabaciones', req: true, largo: true },
  { k: 'proyecto', req: true, largo: true },
  { k: 'tecnica', req: false, largo: true },
  { k: 'como', req: false },
];

function limpia(v) {
  if (typeof v !== 'string') return '';
  // Sin caracteres de control: acaban en el panel de Stripe y en un CSV.
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, MAX_CAMPO);
}

function emailValido(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) && v.length <= 254;
}

// Stripe admite 50 claves de metadata y 500 caracteres por valor. Los campos
// largos se parten en varias claves numeradas en vez de recortarse.
function aMetadata(datos) {
  const meta = {};
  for (const { k, largo } of CAMPOS) {
    const v = datos[k] || '';
    if (!v) continue;
    if (!largo || v.length <= 500) {
      meta[k] = v.slice(0, 500);
      continue;
    }
    const trozos = v.match(/[\s\S]{1,500}/g) || [];
    trozos.slice(0, 4).forEach((t, i) => {
      meta[i === 0 ? k : `${k}_${i + 1}`] = t;
    });
  }
  meta.convocatoria = 'ADAR NEXT 2027';
  meta.recibida = new Date().toISOString();
  return meta;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido.' });
    return;
  }

  const clave = process.env.STRIPE_SECRET_KEY;
  if (!clave) {
    res.status(500).json({ error: 'Falta STRIPE_SECRET_KEY en las variables de entorno de Vercel.' });
    return;
  }

  // Vercel ya entrega el JSON parseado cuando el Content-Type es correcto;
  // si no, se lee el cuerpo a mano con un tope de tamaño.
  let cuerpo = req.body;
  if (!cuerpo || typeof cuerpo !== 'object') {
    try {
      const trozos = [];
      let total = 0;
      for await (const t of req) {
        total += t.length;
        if (total > MAX_CUERPO) {
          res.status(413).json({ error: 'Envío demasiado grande.' });
          return;
        }
        trozos.push(t);
      }
      cuerpo = JSON.parse(Buffer.concat(trozos).toString('utf8') || '{}');
    } catch {
      res.status(400).json({ error: 'No se pudo leer el formulario.' });
      return;
    }
  }

  // Trampa para robots: un campo oculto que una persona nunca rellena.
  if (limpia(cuerpo.web_empresa)) {
    res.status(400).json({ error: 'Envío no válido.' });
    return;
  }

  const datos = {};
  const faltan = [];
  for (const { k, req: obligatorio } of CAMPOS) {
    datos[k] = limpia(cuerpo[k]);
    if (obligatorio && !datos[k]) faltan.push(k);
  }
  if (faltan.length) {
    res.status(400).json({ error: 'Faltan campos obligatorios.', campos: faltan });
    return;
  }
  if (!emailValido(datos.email)) {
    res.status(400).json({ error: 'La dirección de correo no es válida.', campos: ['email'] });
    return;
  }
  if (!/^https?:\/\//i.test(datos.grabaciones)) {
    res.status(400).json({ error: 'Las grabaciones tienen que ser un enlace que empiece por http.', campos: ['grabaciones'] });
    return;
  }
  if (cuerpo.acepta !== true) {
    res.status(400).json({ error: 'Hay que aceptar las condiciones de la convocatoria.', campos: ['acepta'] });
    return;
  }

  // Las direcciones de vuelta se arman con el propio origen de la petición,
  // así el mismo endpoint sirve para el borrador privado y para la página
  // pública sin tocar nada.
  const origen = `https://${req.headers['x-forwarded-host'] || req.headers.host}`;
  const vuelta = typeof cuerpo.vuelta === 'string' && /^\/[\w\-/]*\/$/.test(cuerpo.vuelta)
    ? cuerpo.vuelta
    : '/es/adar-next/';

  const form = new URLSearchParams();
  form.set('mode', 'payment');
  form.set('customer_email', datos.email);
  form.set('success_url', `${origen}${vuelta}?pago=ok&sesion={CHECKOUT_SESSION_ID}`);
  form.set('cancel_url', `${origen}${vuelta}?pago=cancelado`);
  form.set('line_items[0][quantity]', '1');
  form.set('line_items[0][price_data][currency]', 'eur');
  form.set('line_items[0][price_data][unit_amount]', String(CUOTA_CENTIMOS));
  form.set('line_items[0][price_data][product_data][name]', 'ADAR NEXT 2027 · cuota de inscripción');
  form.set(
    'line_items[0][price_data][product_data][description]',
    `Candidatura de ${datos.nombre}`.slice(0, 200)
  );
  // La misma información en la sesión y en el pago, para que se vea en las dos
  // pantallas del panel de Stripe.
  const meta = aMetadata(datos);
  for (const [k, v] of Object.entries(meta)) {
    form.set(`metadata[${k}]`, v);
    form.set(`payment_intent_data[metadata][${k}]`, v);
  }

  try {
    const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${clave}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    });
    const sesion = await r.json();
    if (!r.ok || !sesion.url) {
      // El detalle de Stripe se queda en el registro del servidor; al artista
      // se le da un mensaje que pueda entender.
      console.error('Stripe:', sesion && sesion.error ? sesion.error : sesion);
      res.status(502).json({ error: 'No se pudo abrir la pasarela de pago. Inténtalo de nuevo en un momento.' });
      return;
    }
    res.status(200).json({ url: sesion.url });
  } catch (e) {
    console.error('Stripe (red):', e);
    res.status(502).json({ error: 'No se pudo contactar con la pasarela de pago.' });
  }
}

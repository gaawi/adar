// Kit de redes · definición de marcas.
//
// El kit es un único motor (components/KitRedes.astro) que se pinta con la
// identidad que se le pase. Aquí viven las dos marcas y el material de origen
// se convierte a la forma que consume el motor.
//
// Añadir una marca nueva = añadir una entrada en BRANDS y KITS, más una página
// de dos líneas en src/pages/.

export interface KitBrand {
  /** Identificador corto; se usa en los nombres de archivo descargados. */
  id: string;
  /** Nombre de la organización, para la interfaz. */
  org: string;
  /** Rótulo que se dibuja sobre las imágenes. En mayúsculas. */
  stamp: string;
  /** Dominio que firma el pie de las imágenes. */
  site: string;
  /** Idioma de los textos que acaban en las imágenes y los pies de foto. */
  copyLang: 'es' | 'en';

  /** 'dark' invierte la interfaz del kit; 'light' la deja sobre papel. */
  theme: 'light' | 'dark';
  /** Radio de los botones: ADAR es de píldora, CreArtBox es recto. */
  radius: string;

  // ── Color ──────────────────────────────────────────────────────────────
  /** Fondo oscuro de las imágenes (y de la interfaz si theme === 'dark'). */
  ink: string;
  /** Tinta clara sobre fondo oscuro (y fondo de la interfaz si es 'light'). */
  paper: string;
  /** La señal: un único acento por imagen. */
  accent: string;
  /** Tinta que se pone encima de la señal. */
  onAccent: string;
  /** Tinta de los titulares que van sobre una foto. */
  overPhotoInk: string;
  /** Tinta del titular de la diapositiva de cierre. */
  ctaInk: string;
  /** Tinta secundaria. */
  inkSoft: string;
  /** Tinta terciaria, para rótulos y metadatos. */
  muted: string;
  /** Filetes y separadores. */
  line: string;
  /** Superficie elevada de la interfaz: tarjetas, campos, modal. */
  card: string;
  /** Fondo de la columna de previsualización. */
  stage: string;

  // ── Paleta de las diapositivas de texto (estilos cinta y marco) ────────
  textBg: string;
  textTitle: string;
  textBody: string;
  textFoot: string;

  // ── Tipografía ─────────────────────────────────────────────────────────
  fontsHref: string;
  /** Familias para canvas (con comillas) y para CSS. */
  display: string;
  ui: string;
  label: string;
  /** Peso de los rótulos pequeños: ADAR 500 (mono), CreArtBox 600. */
  labelWeight: string;
  /** Peso de los titulares. */
  titleWeight: string;
  /** Fuentes a precargar antes de pintar, para que el canvas no use fallback. */
  fontLoads: string[];

  // ── Textos ─────────────────────────────────────────────────────────────
  /** Entradilla de la cabecera del kit. */
  lede: string;
  /** Cómo se llama una ficha: «artículo» en ADAR, «nota» en CreArtBox. */
  unit: { one: string; many: string };
  baseTags: string[];
  ctaTitle: string;
  ctaBody: string;
  captionTail: string;
  captionLead: string;
  newSlide: { title: string; body: string };
  newQuote: { title: string; body: string };
  statusLabels: { publish: string; draft: string };
  /** Aviso en las fichas que aún no tienen URL pública. */
  draftNote: string;
}

const ADAR_FONTS =
  'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&family=Chivo:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,700&family=Chivo+Mono:wght@400;500&display=swap';

const CREARTBOX_FONTS =
  'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;0,7..72,700;1,7..72,400&display=swap';

export const BRANDS: Record<string, KitBrand> = {
  // ── Festival ADAR · Manual de Marca v2.0 ───────────────────────────────
  adar: {
    id: 'adar',
    org: 'Festival ADAR',
    stamp: 'FESTIVAL ADAR',
    site: 'festivaladar.com',
    copyLang: 'es',
    theme: 'light',
    radius: '999px',

    ink: '#0a0907',
    paper: '#f6f4ee',
    accent: '#f5d72f',
    onAccent: '#0a0907',
    overPhotoInk: '#ffffff',
    ctaInk: '#f5d72f', // la señal: es el titular que se quiere leer primero
    inkSoft: '#1c1a16',
    muted: '#6e6a5c',
    line: 'rgba(10, 9, 7, 0.14)',
    card: '#ffffff',
    stage: '#ece9e0',

    textBg: '#f6f4ee',
    textTitle: '#0a0907',
    textBody: '#1c1a16',
    textFoot: '#6e6a5c',

    fontsHref: ADAR_FONTS,
    display: '"Alegreya", Georgia, serif',
    ui: '"Chivo", system-ui, sans-serif',
    label: '"Chivo Mono", ui-monospace, monospace',
    labelWeight: '500',
    titleWeight: '700',
    fontLoads: ['700 64px "Alegreya"', '400 32px "Chivo"', '700 32px "Chivo"', '500 24px "Chivo Mono"'],

    lede:
      'Convierte cada artículo del blog en un post listo para subir tú mismo. «Adaptar a Instagram» lo transforma en un carrusel de varias imágenes que puedes editar antes de descargar. Todo se genera aquí, en tu navegador.',
    unit: { one: 'artículo', many: 'artículos' },
    baseTags: ['FestivalADAR', 'Asturias', 'MúsicaClásica', 'MedioRural'],
    ctaTitle: 'Léelo entero',
    ctaBody: 'Artículo completo en festivaladar.com · enlace en la bio',
    captionTail: 'Artículo completo en el enlace de la bio ↗',
    captionLead: 'Lo contamos entero aquí: ',
    newSlide: { title: 'Nuevo titular', body: 'Escribe aquí el texto de esta diapositiva.' },
    newQuote: { title: 'Cita', body: 'Una frase que resuma la idea.' },
    statusLabels: { publish: 'Publicado', draft: 'Borrador' },
    draftNote: 'Es un borrador: el enlace aún no existe. Publícalo antes de citar la URL.',
  },

  // ── CreArtBox · Brand guidelines (creartbox.nyc/brand.html) ────────────
  // Cuatro superficies, tinta hueso en cinco pesos y un único ámbar por
  // pantalla. Nada redondeado, ni los botones.
  creartbox: {
    id: 'creartbox',
    org: 'CreArtBox',
    stamp: 'CREARTBOX',
    site: 'creartbox.nyc',
    copyLang: 'en',
    theme: 'dark',
    radius: '0',

    ink: '#070706', // --sala
    paper: '#F2EFE8', // --papel
    accent: '#FFC403', // --senal
    onAccent: '#0B0705', // --sobre-senal
    overPhotoInk: '#F2EFE8', // --papel: su paleta no admite blanco puro
    // Una sola señal por pantalla: el filete ámbar. El titular va en papel.
    ctaInk: '#F2EFE8',
    inkSoft: '#C9C3B9', // --papel-medio
    muted: '#9C968C', // --papel-dim
    line: '#2B2825', // --filete
    card: '#100F0E', // --foso
    stage: '#0B0A09',

    // Su paleta no tiene superficie clara, así que las diapositivas de texto
    // usan --foso: se distinguen del fondo sin salirse de la marca.
    textBg: '#100F0E',
    textTitle: '#F2EFE8',
    textBody: '#C9C3B9',
    textFoot: '#9C968C',

    fontsHref: CREARTBOX_FONTS,
    display: '"Literata", Georgia, serif',
    ui: '"Archivo", Helvetica, Arial, sans-serif',
    label: '"Archivo", Helvetica, Arial, sans-serif',
    labelWeight: '600',
    titleWeight: '600',
    fontLoads: [
      '600 64px "Literata"',
      '400 32px "Archivo"',
      '600 32px "Archivo"',
      '700 32px "Archivo"',
    ],

    lede:
      'El mismo kit, con la identidad de CreArtBox: fondo sala, tinta hueso, un solo ámbar por imagen, Literata y Archivo, esquinas rectas. Los textos que van dentro de las imágenes están en inglés. El material sale de la nota de prensa de la temporada; se edita en src/data/kit-creartbox.ts hasta que la web tenga su propio panel.',
    unit: { one: 'nota', many: 'notas' },
    baseTags: ['CreArtBox', 'ChamberMusic', 'NewYork', 'NewMusic'],
    ctaTitle: 'Read the release',
    ctaBody: 'Full press release at creartbox.nyc · link in bio',
    captionTail: 'Full release at the link in bio ↗',
    captionLead: 'The whole thing here: ',
    newSlide: { title: 'New heading', body: 'Write the text for this slide here.' },
    newQuote: { title: 'Quote', body: 'One sentence that carries the idea.' },
    statusLabels: { publish: 'Nota de prensa', draft: 'Borrador' },
    draftNote: 'Aún no está publicado: el enlace no existe todavía.',
  },
};

/** Los dos kits, para el selector que aparece en la cabecera de ambos. */
export const KITS = [
  { id: 'adar', label: 'Festival ADAR', href: '/kit-redes/' },
  { id: 'creartbox', label: 'CreArtBox', href: '/kit-redes-creartbox/' },
];

// ── Preparación del material de origen ───────────────────────────────────

/** Limpia marcas de markdown para poder pintar el texto en un canvas. */
export function clean(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*|__|\*|_|`/g, '')
    .replace(/^>\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Recorta a un número de frases completas, sin pasarse de `maxChars`. */
export function sentences(text: string, maxChars: number): string {
  const parts = text.split(/(?<=[.!?…])\s+/);
  let out = '';
  for (const p of parts) {
    if (out && (out + ' ' + p).length > maxChars) break;
    out = out ? out + ' ' + p : p;
    if (out.length >= maxChars * 0.72) break;
  }
  if (!out) out = text.slice(0, maxChars);
  return out.trim();
}

/** Parte el cuerpo en secciones «## Titular» + su primer bloque de texto. */
function splitSections(raw: string): { h: string; p: string }[] {
  const out: { h: string; p: string[] }[] = [];
  let cur: { h: string; p: string[] } | null = null;
  for (const line of raw.split('\n')) {
    const m = line.match(/^##\s+(.*)/);
    if (m) {
      cur = { h: clean(m[1]), p: [] };
      out.push(cur);
    } else if (cur && line.trim() && !line.startsWith('#')) {
      cur.p.push(line.trim());
    }
  }
  return out
    .map((s) => ({ h: s.h, p: sentences(clean(s.p.join(' ')), 260) }))
    .filter((s) => s.h && s.p);
}

export interface KitSource {
  lang: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  status: string;
  date: string;
  tags: string[];
  /** Cuerpo en markdown; los «## » se convierten en diapositivas. */
  body: string;
  /** URL pública; si falta se compone con `urlBase`. */
  url?: string;
}

export interface KitPost extends Omit<KitSource, 'body' | 'url'> {
  url: string;
  slides: { type: string; title: string; body: string }[];
  plain: string;
  plainFull: string;
}

/** Convierte material de origen en la forma que consume el motor del kit. */
export function buildPost(src: KitSource, brand: KitBrand): KitPost {
  const raw = src.body.replace(/^---[\s\S]*?---\n/, '');
  const secs = splitSections(raw);

  const slides = [
    { type: 'cover', title: src.title, body: '' },
    ...secs.slice(0, 6).map((s) => ({ type: 'text', title: s.h, body: s.p })),
    { type: 'cta', title: brand.ctaTitle, body: brand.ctaBody },
  ];

  return {
    lang: src.lang,
    slug: src.slug,
    title: src.title,
    excerpt: src.excerpt,
    image: src.image,
    status: src.status,
    date: src.date,
    tags: src.tags,
    url: src.url || `https://${brand.site}/${src.lang}/blog/${src.slug}/`,
    slides,
    plain: clean(raw.replace(/^#{1,6}\s+/gm, '')).slice(0, 4000),
    plainFull: raw
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/\*\*|__|`/g, '')
      .trim(),
  };
}

/** Publicados primero, y dentro de cada grupo lo más reciente arriba. */
export function sortPosts(posts: KitPost[]): KitPost[] {
  return posts.sort((a, b) =>
    a.status === b.status ? (b.date > a.date ? 1 : -1) : a.status === 'publish' ? -1 : 1
  );
}

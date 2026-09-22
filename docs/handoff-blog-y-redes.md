# Traspaso · Blog y kit de redes sociales (de festivaladar.com a creartbox.nyc)

Escrito desde la sesión de **gaawi/adar** para la sesión de **gaawi/creartbox**.
Documenta todo lo construido en festivaladar.com sobre blog, panel de
aprobación, vistas previas y generación de imágenes para redes, con lo que hace
falta para replicarlo.

> **Lee esto antes de copiar nada.** Los dos sitios no comparten tecnología:
> festivaladar.com es **Astro sobre Vercel** (con build, funciones serverless y
> edge middleware); creartbox.nyc es **HTML estático a mano sobre GitHub Pages**
> (CNAME `creartbox.nyc`, sin `package.json`, sin build, sin Actions, con
> scripts auxiliares en `tools/`). Una parte se copia tal cual y otra **no puede
> funcionar** sin decidir antes dónde se aloja el sitio.

---

## 1. Qué se puede copiar y qué no

| Pieza | Fichero en gaawi/adar | Portabilidad a creartbox.nyc |
|---|---|---|
| **Kit de redes** (carrusel, 3 diseños, foco, foto propia) | `src/components/KitRedes.astro` + `src/data/kit-brands.ts` | **Alta.** El motor ya está separado de la marca y **la marca CreArtBox ya está definida**, tomada de creartbox.nyc/brand.html. Es una página autónoma con CSS y JS en línea y `<canvas>`; solo hay que cambiar de dónde saca los datos. |
| **Kit de redes ya montado con la identidad de CreArtBox** | `src/pages/kit-redes-creartbox.astro` + `src/data/kit-creartbox.ts` | **Inmediata.** Funciona hoy en `festivaladar.com/kit-redes-creartbox/` (interno, `noindex`) mientras creartbox.nyc no tenga panel. Al mover el sitio, esta página se copia tal cual. |
| **Botones de compartir** para lectores | `src/pages/[lang]/blog/[slug].astro` + bloque CSS `Blog · compartir en redes` | **Alta.** HTML + CSS + 20 líneas de JS. |
| **Blog** (listado + artículo) | `src/content.config.ts`, `src/pages/[lang]/blog/*` | **Media.** Depende de colecciones de contenido y rutas dinámicas de Astro. Sin build hay que decidir cómo se genera el HTML. |
| **Panel de aprobación** (Sveltia CMS) | `public/admin/index.html`, `public/admin/config.yml` | **Media.** El CMS es de cliente y escribe markdown en el repo, pero necesita OAuth y algo que convierta ese markdown en HTML. |
| **Relay OAuth de GitHub** | `api/auth.js`, `api/callback.js` | **Nula tal cual.** Son funciones serverless de Vercel. GitHub Pages no ejecuta código de servidor. |
| **Vista previa privada de borradores** | `middleware.js`, `src/pages/borradores/*` | **Nula tal cual.** Usa Edge Middleware de Vercel. |
| **Analítica de visitas** | script en `src/layouts/BaseLayout.astro` | **Nula tal cual.** Vercel Web Analytics exige alojar en Vercel. |

**La decisión que lo condiciona todo:** el blog con panel de aprobación
necesita (a) un paso de construcción que convierta markdown en HTML y (b) un
endpoint de servidor para el OAuth del CMS. Tres caminos:

1. **Mover creartbox.nyc a Vercel** (dominio incluido). Es lo que permite copiar
   el modelo entero de ADAR casi sin cambios. Recomendado si se quiere blog +
   panel + borradores + analítica.
2. **Seguir en GitHub Pages y añadir un GitHub Action** que construya el blog
   (Eleventy o Astro solo para `/blog`), más un **Cloudflare Worker** gratuito
   para el OAuth. Funciona, pero son dos piezas nuevas que mantener.
3. **Solo el kit de redes y los botones de compartir**, sin blog ni panel. No
   requiere tocar el alojamiento y se puede hacer hoy mismo.

Si no hay respuesta del usuario, **empieza por la opción 3**: es la que aporta
valor inmediato y no bloquea las otras dos.

---

## 2. Identidad visual: ya resuelta

El motor del kit **ya no tiene la marca dentro**. La identidad entra por
`src/data/kit-brands.ts`, donde están las dos: `BRANDS.adar` y
`BRANDS.creartbox`. La de CreArtBox está tomada del manual real
(<https://creartbox.nyc/brand.html>), no inferida de la hoja de estilos:

```
Superficies   --sala #070706 · --foso #100F0E · --filete #2B2825 · --filete-alto #3D3934
Tinta         --papel #F2EFE8 · --papel-medio #C9C3B9 · --papel-dim #9C968C
              --papel-tenue #8A847A · --papel-mudo #6B655D (solo filetes e iconos)
Señal         --senal #FFC403 · --sobre-senal #0B0705
Tipografía    Literata (titulares, citas) · Archivo (cuerpo, rótulos, tablas)
Esquinas      rectas, también en los botones
```

Reglas del manual que el kit respeta y hay que seguir respetando:

- **Una sola señal por pantalla.** En las imágenes el ámbar es el filete; el
  titular va en `--papel`. Por eso `ctaInk` de CreArtBox es `#F2EFE8` y no el
  ámbar (en ADAR sí es el acento).
- **Nada de blanco puro.** Los titulares sobre foto usan `--papel`
  (`overPhotoInk`), no `#ffffff`.
- **`--papel-mudo` nunca en texto**: baja de 4,5:1 sobre `--sala`.
- Las diapositivas de texto usan `--foso` como fondo, porque la paleta no
  tiene superficie clara.
- El ámbar **no se pone sobre tinta hueso** (no hay contraste). En la interfaz
  eso lo resuelve el token `--pop`.

Para añadir una marca nueva: una entrada en `BRANDS`, una en `KITS` y una
página de dos líneas en `src/pages/`. El motor no se toca.

Recuerda `await document.fonts.load(...)` antes de dibujar, o el canvas usará
la tipografía de reserva. Las fuentes a precargar están en `fontLoads` de cada
marca.

Las fotos deben servirse con `Access-Control-Allow-Origin`, o `canvas.toBlob()`
falla por lienzo contaminado. Comprobado: el CDN de Bunny y creartbox.nyc
mandan `*`.

---

## 3. El kit de redes, pieza por pieza

El motor vive en `src/components/KitRedes.astro`, con `noindex`, y recibe dos
props: `brand` (la identidad) y `posts` (el material). Las páginas
`src/pages/kit-redes.astro` y `src/pages/kit-redes-creartbox.astro` solo eligen
una y otra. Funciona **entero en el navegador**: no sube nada a ningún servidor.

### 3.1 Lo que hace

- **Botones rápidos por artículo**: descargar la portada recortada a
  Instagram 1:1 (1080×1080), Story/Reel 9:16 (1080×1920),
  Facebook·LinkedIn 1.91:1 (1200×630), X 16:9 (1600×900) y original.
- **Copiar texto** adaptado a cada red (Instagram con hashtags y aviso de
  enlace en la bio, Facebook, LinkedIn, X recortado, enlace) y descargar el
  artículo en `.txt`.
- **«Adaptar a Instagram»**: convierte el artículo en un **carrusel**. Lee los
  encabezados `##` del markdown y su primer párrafo, y genera portada +
  una diapositiva por sección + diapositiva de cierre.
- **Editor con vista previa en vivo**: reescribir titulares y textos, reordenar,
  eliminar, añadir diapositivas de texto o de cita, contador de caracteres.
- **Tres diseños a elegir**, con las tres miniaturas generadas en vivo:
  `cinta` (degradado inferior), `bloque` (franja sólida abajo) y `marco`
  (velo + filete perimetral). El estilo se aplica a todo el carrusel.
- **Foto de la portada**: botón para usar una imagen propia y dos deslizadores
  de encuadre (horizontal y vertical) que mueven el punto de la foto que queda
  centrado en el recorte.
- **Descarga numerada** (`…-01.jpg`, `…-02.jpg`) para subirlas en orden.

### 3.2 Funciones clave que conviene copiar literalmente

- `drawPhoto(ctx, src, x, y, w, h, fx, fy)` — recorte «cover» con punto focal.
  El desplazamiento **se limita al sobrante** (`Math.min(0, Math.max(w-dw, …))`)
  para que nunca aparezcan bordes vacíos.
- `fitLines(ctx, text, maxW, maxH, weight, family, start, min)` — reduce el
  cuerpo de letra hasta que el texto cabe en la caja. Imprescindible: los
  titulares varían mucho de longitud.
- `wrapText(ctx, text, maxW)` — partido de líneas por palabras en canvas.
- `drawSlide(canvas, post, slide, idx, total, fmt, withOverlay, style, opts)` —
  el dibujado, con una rama por tipo de diapositiva (`cover`, `text`, `quote`,
  `cta`) y por estilo.
- `sentences(text, maxChars)` (en el frontmatter) — recorta por **frases
  completas**, no a mitad de palabra.

### 3.3 Lo único que hay que reescribir

En ADAR los datos salen de `getCollection('blog')` en tiempo de build y se
serializan en `<script type="application/json" id="kit-data">`.

Para creartbox, sustitúyelo por un **JSON estático** con la misma forma, o
genéralo con un script en `tools/` (encaja con lo que ya hay allí) leyendo las
páginas de `archive/` o `press/`:

```json
[{ "slug": "…", "title": "…", "excerpt": "…", "image": "https://…",
   "url": "https://creartbox.nyc/…", "date": "2026-09-10", "tags": ["…"],
   "status": "publish",
   "slides": [ {"type":"cover","title":"…","body":""},
               {"type":"text","title":"…","body":"…"},
               {"type":"cta","title":"…","body":"…"} ],
   "plainFull": "…" }]
```

El resto del fichero funciona sin cambios.

---

## 4. Botones de compartir para lectores

Cinco enlaces (Facebook, LinkedIn, X, WhatsApp) más un botón de copiar enlace.
URLs de compartición usadas:

```
https://www.facebook.com/sharer/sharer.php?u=<url>
https://www.linkedin.com/sharing/share-offsite/?url=<url>
https://twitter.com/intent/tweet?url=<url>&text=<titulo>
https://wa.me/?text=<titulo>%20<url>
```

Instagram **no tiene** URL de compartición: ahí el flujo es descargar la imagen
del kit y pegar el pie de foto a mano.

El botón de copiar usa `navigator.clipboard.writeText` con reserva a
`document.execCommand('copy')` sobre un `<textarea>` oculto, porque el
portapapeles falla en contextos no seguros y en algunos navegadores móviles.

---

## 5. El blog y el panel de aprobación (si se eligen las opciones 1 o 2)

### 5.1 El modelo de aprobación

La clave es un campo `status` con dos valores, `draft` y `publish`, y que **el
generador solo construya página para los `publish`**. En ADAR:

```ts
status: z.enum(['draft','publish']).default('draft')
// y en getStaticPaths:
await getCollection('blog', (e) => e.data.status === 'publish')
```

Así un borrador no existe como URL: no es que esté oculto, es que **no se
publica**. Se eligió esto en vez del `editorial_workflow` de Decap porque ese
flujo depende de ramas y su soporte en Sveltia no estaba claro.

### 5.2 El panel

`public/admin/index.html` carga Sveltia CMS desde CDN y
`public/admin/config.yml` define el backend GitHub y las colecciones. El campo
de aprobación es un `select`:

```yaml
- name: status
  label: "Estado"
  hint: "Solo aparece en la web cuando está en «Publicado»."
  widget: select
  options:
    - { label: "Borrador (no visible)", value: draft }
    - { label: "Publicado (visible en la web)", value: publish }
  default: draft
```

### 5.3 El OAuth

`api/auth.js` redirige a GitHub con `client_id`, `redirect_uri`, `scope=repo` y
un `state` aleatorio guardado en cookie `HttpOnly` (protección CSRF).
`api/callback.js` verifica el `state`, canjea el código por token contra
`https://github.com/login/oauth/access_token` y devuelve una página que hace
`postMessage` con el formato que espera Decap/Sveltia:

```
authorization:github:success:{"token":"…","provider":"github"}
```

Requiere una OAuth App de GitHub y dos variables de entorno
(`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`). **En GitHub Pages esto no puede
vivir en el repo**: hay que ponerlo en un Cloudflare Worker o similar.

---

## 6. Trampas reales que costaron tiempo (no repetirlas)

1. **Astro encapsula el CSS.** Las diapositivas del editor se crean por
   JavaScript y no llevan el atributo de ámbito, así que con `<style>` normal
   se quedaban sin estilos. Solución: `<style is:global>`.
   *(En creartbox, con HTML plano, este problema no existe.)*
2. **CORS del CDN.** Para exportar un canvas con fotos externas el CDN debe
   enviar `Access-Control-Allow-Origin`, y la imagen cargarse con
   `crossOrigin = 'anonymous'`. Bunny lo envía (`*`); **verifícalo** para el CDN
   que use creartbox antes de construir nada, o el `toBlob()` fallará.
3. **Recorte centrado que corta cabezas.** Muchas fotos de prensa son
   apaisadas; al recortarlas a vertical el centro geométrico cae por debajo de
   la cara. En la web se resolvió con `object-position: 50% 28%`; en el canvas,
   con el punto focal ajustable.
4. **Cortes de media query al filo.** Los umbrales del menú responsive
   coincidían con el límite real y sobraban 2-4 px en anchos concretos. Deja
   holgura y **mide en muchos anchos**, no solo en los redondos.
5. **Deduplicar por URL pierde el rótulo.** Al agrupar el menú, un hijo con la
   misma URL que su grupo desaparecía y quedaba el nombre del grupo, así que
   la palabra «Blog» se perdía. Hay que conservar el título del hijo.
6. **Descargas múltiples.** Para bajar el carrusel entero se generan los
   ficheros en serie con ~320 ms entre uno y otro; el navegador pide permiso
   una vez para descargas múltiples.
7. **Autoplay.** El embed antiguo de vídeo llevaba `autoplay=true&muted=false`,
   que los navegadores bloquean y además molesta. Usar `autoplay=false`.

---

## 7. Orden de trabajo sugerido

1. Preguntar al usuario por la **decisión de alojamiento** (sección 1).
2. Mientras responde: portar el **kit de redes** con los tokens de CreArtBox y
   un JSON de datos generado desde `archive/`. Es autónomo y no depende de nada.
3. Añadir los **botones de compartir** a las páginas de `archive/`.
4. Solo entonces, y según la decisión, montar blog + panel + borradores.

## 8. Cómo ver el código original

El repo es público:

```
git clone --depth 1 https://github.com/gaawi/adar
```

Ficheros a leer, por orden de utilidad:
`src/pages/kit-redes.astro` · `src/content.config.ts` ·
`src/pages/[lang]/blog/index.astro` · `src/pages/[lang]/blog/[slug].astro` ·
`public/admin/config.yml` · `api/auth.js` · `api/callback.js` ·
`middleware.js` · `src/pages/borradores/index.astro`

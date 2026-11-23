// Fichas sociales de Festival ADAR escritas a mano: avisos, campañas y
// recuerdos. Los artículos del blog siguen saliendo de src/content/blog; esto
// es lo que no es un artículo (o lo que lo anuncia en redes).
//
// Mismo formato que kit-creartbox.ts. En castellano, porque es la lengua de
// la web y de las redes de ADAR. Nada de «link in bio»: siempre la web.
// Cada ficha lleva `porque` (por qué este post y ese día) y, si le falta algo
// para salir, `falta`.

import type { KitSource } from './kit-brands';

const WEB = 'https://festivaladar.com/es/';
// Fotos del archivo del festival: una carpeta por noche.
const A26 = 'https://creartbox-archive.b-cdn.net/adarimages/ADAR_Eventos/2026/';
const A25 = 'https://creartbox-archive.b-cdn.net/adarimages/ADAR_Eventos/2025/';
const RES = 'https://creartbox-media-cdn.b-cdn.net/adarimages/residency/';
const FX25 = 'https://creartbox-media-cdn.b-cdn.net/adarimages/adar25fx30/';
const IMG = 'https://raw.githubusercontent.com/gaawi/editorial-cola/main/imagenes/';
// Logos obligatorios: Braña Sonora (Ministerio de Cultura) y la residencia
// de Culture Moves Europe (Unión Europea y Goethe-Institut).
// Transparent, no plate: «claro» for light/yellow backgrounds, «oscuro» (white text) for photos.
const LOGO_MINISTERIO = `${IMG}logos-brana-sonora-claro.png`;
const LOGO_MINISTERIO_OSCURO = `${IMG}logos-brana-sonora-oscuro.png`;
const LOGO_UE = `${IMG}logos-ue-goethe-claro.png`;
const LOGO_UE_OSCURO = `${IMG}logos-ue-goethe-oscuro.png`;
const VIEJO = 'https://creartbox-media-cdn.b-cdn.net/adarimages/ADAR_Eventos/';
const f26 = (noche: string, n: number) =>
  `${A26}${noche}_Fotos/${noche}_WEB/${noche}_WEB_${n}.jpg`;
const f25 = (noche: string, n: number) =>
  `${A25}${noche}_Fotos/${noche}_WEB/${noche}_WEB_${n}.jpg`;

const LEIGUARDA_FINAL_26 = '26.08.16_Iglesia%20de%20Leiguarda%20Concierto%20Final';
const LEIGUARDA_26 = '26.08.15_Iglesia%20de%20Leiguarda';
const FIGAL_26 = '04.08.26_La%20Figal%20de%20Xugabolos';
const CORIAS_26 = '05.08.26_Parador%20de%20Corias';
const OSCOS_26 = '13.08.26_Villanueva%20de%20Oscos';
const CASONA_26 = '14.08.26_La%20casona%20de%20Belmonte';
const ECLIPSE_26 = '13.08.26_Eclipse';
const FRANCO_26 = '11.08.26_El%20Franco';
const WHALE_25 = '25.08.07_The%20Whale%20%C2%B7%20Monasterio%20S.%20Antol%C3%ADn%20de%20Bed%C3%B3n';
const OBONA_25 = '25.08.12_Monasterio%20de%20Obona';
const CRISTAL_25 = '25.08.17_Iglesia%20e%20invernadero%20de%20cristal';
const LEIGUARDA_25 = '25.08.16_Iglesia%20de%20Leiguarda';

// Recortadas a 4:5 (enteras son más anchas de lo que deja Instagram).
const CORIAS_25 = '25.08.15_Claustro%20del%20Parador%20de%20Corias';
const PASEO_AYALGAS = ['06', '10', '14'].map((n) => `${IMG}paseo-ayalgas-${n}-45.jpg`);

export const ADAR_SOURCES: KitSource[] = [
  // ── Noviembre y diciembre de 2026 ─────────────────────────────────────
  {
    lang: 'es',
    slug: 'santa-cecilia-2026',
    porque: 'El 22 es Santa Cecilia, el día de la música. Además rompe casi dos meses sin publicar: lo último fue la Open Call del 26 de septiembre.',
    kind: 'social',
    estilo: 'cielo',
    title: 'Feliz día de la música',
    excerpt: 'Feliz día de la música',
    image: f26(CASONA_26, 5),
    status: 'publish',
    date: '2026-11-22',
    url: WEB,
    tags: ['FestivalADAR', 'SantaCecilia'],
    pie: `Hoy es Santa Cecilia, el día de la música. 🎶

Y nos acordamos de las noches de este verano: iglesias, hórreos, monasterios y aldeas llenas de gente escuchando en silencio.

Gracias a quienes tocaron, a quienes abrieron sus pueblos y a quienes vinieron.

Ya estamos preparando la próxima edición.

#FestivalADAR #SantaCecilia #DíaDeLaMúsica #Asturias #MúsicaClásica`,
    body: 'Feliz día de la música',
  },
  {
    lang: 'es',
    slug: 'propuestas-artisticas-2027',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'propuestas-adar-2027',
    porque: 'Ya estamos programando la VII edición (agosto de 2027). Cuanto antes lleguen las propuestas, más donde elegir. Lo pidió Guillermo el 20 de noviembre.',
    kind: 'social',
    estilo: 'ambar',
    kicker: 'Propuestas 2027',
    title: '¿Quieres tocar en ADAR 2027?',
    excerpt: 'Estamos seleccionando propuestas para la VII edición.',
    image: f25(LEIGUARDA_25, 1),
    pegatinas: [{ texto: 'Agosto de 2027' }, { texto: 'Asturias rural' }, { texto: 'festivaladar.com', senal: true }],
    pegatinasMuro: true,
    status: 'publish',
    date: '2026-11-24',
    url: `${WEB}propuestas-artisticas/`,
    tags: ['FestivalADAR', 'Propuestas'],
    pie: `Estamos seleccionando propuestas para ADAR 2027. 🎻

La VII edición será en agosto de 2027, en iglesias, monasterios, hórreos y aldeas de Asturias.

Programamos música clásica y de cámara, música antigua, creación contemporánea, jazz, músicas tradicionales y proyectos interdisciplinares. Nos gustan especialmente las propuestas con una identidad clara, y las que traen estrenos, actividades educativas o algo que hacer con el territorio.

¿Cómo? Escríbenos a leiguardamusic@gmail.com con el asunto «PROPUESTA ADAR · nombre del artista o ensemble». Incluye biografía, programa, enlaces a grabaciones en directo, caché orientativo y disponibilidad en agosto de 2027.

Todos los detalles en festivaladar.com

Compártelo con quien creas que encaja. 🙌

#FestivalADAR #ConvocatoriaArtistas #MúsicaDeCámara #Asturias #ADAR2027`,
    body: '¿Quieres tocar en ADAR 2027?',
  },
  {
    lang: 'es',
    slug: 'ayuntamientos-y-espacios-2027',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'y-si-adar-suena-en-tu-pueblo',
    porque: 'Los ayuntamientos cierran presupuestos y agenda del año que viene en invierno. Es el momento de que un concejo o una sala piense en acoger un concierto en 2027. Lo pidió Guillermo el 20 de noviembre.',
    kind: 'social',
    estilo: 'cielo',
    title: '¿Y si ADAR suena en tu pueblo?',
    excerpt: 'Ayuntamientos, asociaciones y espacios que quieran unirse a ADAR 2027.',
    // 23 nov: the title sat on top of the violinist; this one has dark space above.
    image: f26(OSCOS_26, 3),
    pegatinas: [{ texto: 'Ayuntamientos y espacios' }, { texto: 'ADAR 2027' }, { texto: 'Escríbenos', senal: true }],
    pegatinasMuro: true,
    status: 'publish',
    date: '2026-11-26',
    url: `${WEB}sedes/`,
    tags: ['FestivalADAR', 'Sedes'],
    pie: `¿Y si ADAR suena en tu pueblo? 📍

Desde 2021 llevamos música a iglesias, monasterios, palacios, hórreos, mercados y campos de aldea de Asturias. Este verano sonó en el hórreo de La Figal, en el Parador de Corias y en el monasterio de Villanueva de Oscos.

Para 2027 buscamos ayuntamientos, asociaciones vecinales y culturales, propietarios de espacios patrimoniales y salas que quieran acoger un concierto o un paseo sonoro.

Si te apetece, escríbenos a leiguardamusic@gmail.com y lo hablamos.

Y si conoces a alguien en tu concejo a quien le pueda interesar, pásaselo.

Las sedes en festivaladar.com

#FestivalADAR #Asturias #MedioRural #PatrimonioAsturiano #CulturaRural`,
    body: '¿Y si ADAR suena en tu pueblo?',
  },
  {
    lang: 'es',
    slug: 'video-bach-en-leiguarda',
    porque: 'Él pidió vídeos de otros años. Este es el mejor que tenemos y su artículo del blog está en borrador: al aprobarlo, publico también el artículo en la web.',
    kind: 'social',
    estilo: 'limpia',
    title: 'Bach, rodado en Leiguarda',
    excerpt: 'Bach, rodado en Leiguarda',
    image: 'https://i.ytimg.com/vi/Xk_Qz361e0o/maxresdefault.jpg',
    status: 'publish',
    date: '2026-11-29',
    url: `${WEB}blog/bach-filmado-en-leiguarda/`,
    tags: ['FestivalADAR', 'Bach', 'Videoarte'],
    pie: `Un violonchelo, una aldea y Bach. 🎥

En agosto de 2023, mientras el festival ocurría, en Leiguarda se rodaba otra cosa: un videoarte sobre la Suite para violonchelo n.º 1 de Bach, con Natania Hoffman al violonchelo, dirigido y montado por Guillermo Ordás.

Es una obra pensada para la pantalla, con la piedra, la madera y la luz de la aldea.

El vídeo completo está en nuestro canal de YouTube, y te contamos cómo se hizo en el blog de festivaladar.com

#FestivalADAR #Bach #Violonchelo #Videoarte #Leiguarda #Asturias`,
    body: 'Bach, rodado en Leiguarda',
  },
  {
    lang: 'es',
    slug: 'amigos-giving-tuesday',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'por-que-adar-es-gratis',
    porque: 'El 1 de diciembre es el GivingTuesday, el día internacional de dar. Empieza la campaña de Amigos de cara a Navidad. Lo pidió Guillermo el 20 de noviembre.',
    kind: 'social',
    estilo: 'ambar',
    kicker: 'Amigos del Festival',
    title: 'Hazte Amigo de ADAR',
    excerpt: 'Desde 10 € al año.',
    image: f26(CORIAS_26, 3),
    pegatinas: [{ texto: 'Desde 10 € al año' }, { texto: 'Tu plaza asegurada' }, { texto: 'festivaladar.com', senal: true }],
    pegatinasMuro: true,
    status: 'publish',
    date: '2026-12-01',
    url: `${WEB}amigos-del-festival/`,
    tags: ['FestivalADAR', 'AmigosDelFestival', 'GivingTuesday'],
    pie: `Hoy es #GivingTuesday, el día de dar. 💛

Las entradas de ADAR son gratuitas, pero el aforo es pequeño y muchos conciertos se llenan el mismo día que se anuncian. Los Amigos del Festival tienen su plaza asegurada en cada edición.

Colaborador · 10 € al año: sostienes el festival, recibes el boletín y tu nombre va en el muro de Amigos.
Amigo · 30 € al año: además, reserva anticipada en todos los conciertos.
Amigo VIP · 50 € al año: además, asientos VIP, la celebración privada con los artistas residentes, grabaciones inéditas y la camiseta de edición limitada.

Cada aportación se queda en las aldeas: en conciertos gratuitos donde casi nunca llega la música en directo.

Hazte Amigo en festivaladar.com

#FestivalADAR #AmigosDelFestival #GivingTuesday #Asturias #CulturaRural`,
    body: 'Hazte Amigo de ADAR',
  },
  {
    lang: 'es',
    slug: 'recuerdo-2021-primer-concierto',
    porque: 'Él pidió fotos de otros años. Es la historia que mejor cuenta qué es ADAR, y su artículo está en borrador: al aprobarlo, publico también el artículo.',
    kind: 'social',
    title: 'Así empezó todo: 14 de agosto de 2021',
    excerpt: 'Así empezó todo',
    image: `${VIEJO}2021/14_Concierto_de_Inauguracion_en_Leiguarda/image71.jpg`,
    fotos: [
      `${VIEJO}2021/14_Concierto_de_Inauguracion_en_Leiguarda/image71.jpg`,
      `${VIEJO}2021/14_Concierto_de_Inauguracion_en_Leiguarda/image72.jpg`,
      `${VIEJO}2021/14_Concierto_de_Inauguracion_en_Leiguarda/image67.jpg`,
    ],
    fotosEnteras: true,
    status: 'publish',
    date: '2026-12-04',
    url: `${WEB}blog/el-orballo-del-primer-concierto/`,
    tags: ['FestivalADAR', 'Recuerdos'],
    pie: `Así empezó todo. 📸

14 de agosto de 2021, campo de la iglesia de Leiguarda. Primer concierto de ADAR.

Había hecho sol toda la semana y esa noche empezó a orbayar. Aun así vinieron más de 120 personas, en una aldea de apenas cien vecinos, y la música sonó entre la bruma.

Sonaron Mendelssohn, Haydn, Falla, John Harbison y una obra nueva escrita para esa noche: Atlantic, de Marcos Fernández.

La historia completa, en el blog de festivaladar.com

#FestivalADAR #Leiguarda #Asturias #2021 #Recuerdos`,
    body: 'Así empezó todo',
  },
  {
    lang: 'es',
    slug: 'como-suena-un-horreo',
    porque: 'Mantiene vivo el Concurso de Hórreos (el post de los ganadores de 2025 es el que más alcance ha tenido nunca) y avisa de que las bases de 2027 salen en marzo. Su artículo está en borrador: al aprobarlo, lo publico.',
    kind: 'social',
    estilo: 'cielo',
    title: 'Cómo suena un hórreo por dentro',
    excerpt: 'Cómo suena un hórreo por dentro',
    // Portada: el hórreo de La Figal encendido al anochecer (sugerencia del
    // 22 nov: mejor encuadre y más fotos). Detrás, el concierto por dentro.
    image: f26(FIGAL_26, 6),
    // 23 nov: «the last photo cuts the head off, better in their original aspect ratio»:
    // a landscape carousel, so the photos go whole.
    apaisado: true,
    fotosExtra: [2, 4, 5, 1].map((n) => f26(FIGAL_26, n)),
    status: 'publish',
    date: '2026-12-07',
    url: `${WEB}blog/el-horreo-como-sala-de-conciertos/`,
    tags: ['FestivalADAR', 'Hórreos'],
    pie: `¿Cómo suena un hórreo por dentro? 🌾

Una caja de madera sobre pegollos, con aire por debajo. Resulta que es casi un instrumento: la madera redondea el sonido y lo devuelve cálido y muy cercano. Caben poquísimas personas, y el público está a un metro de quien toca.

Por eso cada año buscamos hórreos y paneras de Asturias para convertirlos en salas de conciertos. Las bases del Concurso de Hórreos y Paneras 2027 se publican en marzo.

Lo contamos entero en el blog de festivaladar.com

#FestivalADAR #Hórreos #Paneras #PatrimonioAsturiano #Asturias`,
    body: 'Cómo suena un hórreo por dentro',
  },
  {
    lang: 'es',
    slug: 'dia-montanas-somiedo',
    porque: 'El 11 de diciembre es el Día Internacional de las Montañas. Somiedo, las brañas y la montaña preparan el terreno para Braña Sonora en enero. Su artículo está en borrador: al aprobarlo, lo publico.',
    kind: 'social',
    estilo: 'cinta',
    title: 'Música donde viven los osos',
    excerpt: 'Música donde viven los osos',
    image: `${VIEJO}2024/14_Concierto_en_el_Mercado_de_Pola_de_Somiedo/Pola_01_00_52_08.jpg`,
    status: 'publish',
    date: '2026-12-11',
    url: `${WEB}blog/somiedo-musica-donde-viven-los-osos/`,
    tags: ['FestivalADAR', 'Somiedo', 'DíaDeLasMontañas'],
    pie: `Hoy es el Día Internacional de las Montañas. ⛰️

El 14 de agosto de 2024 tocamos en el mercado de Pola de Somiedo: Parque Natural, Reserva de la Biosfera y el lugar con más osos pardos de España.

Un quinteto con Mozart, Debussy y Andrea Casarrubios, en el sitio donde el pueblo compra y se pone al día. El que quiso, entró.

La montaña asturiana tiene su propia música, y en 2027 vamos a escucharla más de cerca. Pronto os contamos.

Más en festivaladar.com

#FestivalADAR #Somiedo #DíaInternacionalDeLasMontañas #Asturias #MedioRural`,
    body: 'Música donde viven los osos',
  },
  {
    lang: 'es',
    slug: 'amigos-regalo-navidad',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'leiguarda-47-la-sede',
    porque: 'A diez días de Nochebuena. La web dice que la membresía se puede regalar: es un regalo sin envío, que llega a tiempo. Segunda ola de la campaña de Amigos.',
    kind: 'social',
    estilo: 'ambar',
    kicker: 'Regalo de Navidad',
    title: 'Regala ADAR esta Navidad',
    excerpt: 'Regala una plaza en ADAR 2027.',
    image: f25(CRISTAL_25, 3),
    pegatinas: [{ texto: 'Regala ADAR 2027' }, { texto: 'Desde 10 €' }, { texto: 'festivaladar.com', senal: true }],
    pegatinasMuro: true,
    status: 'publish',
    date: '2026-12-14',
    url: `${WEB}amigos-del-festival/`,
    tags: ['FestivalADAR', 'AmigosDelFestival', 'Navidad'],
    pie: `¿Buscas un regalo que no haya que envolver? 🎁

Regala ser Amigo del Festival ADAR: una plaza asegurada en los conciertos de agosto de 2027, en iglesias, monasterios y hórreos de Asturias.

Amigo · 30 € al año: reserva anticipada en todos los conciertos.
Amigo VIP · 50 € al año: asientos VIP, celebración privada con los artistas, grabaciones inéditas y la camiseta del festival.

Y un regalo especial: dos noches en la casa de ADAR en Leiguarda, una aldea de diez casas en la montaña asturiana. 🏡

Escríbenos a leiguardamusic@gmail.com y te contamos cómo regalarlo.

Todo sobre los Amigos en festivaladar.com

#FestivalADAR #AmigosDelFestival #RegalosDeNavidad #Asturias #MúsicaEnDirecto`,
    body: 'Regala ADAR esta Navidad',
    falta: 'La estancia de dos noches en la casa: precio, fechas en las que se puede usar y si incluye algo más (sugerencia del 22 de noviembre).',
  },
  {
    lang: 'es',
    slug: 'recuerdo-2025-la-ballena',
    porque: 'Él pidió fotos y vídeos del año pasado. La noche de The Whale es de las más especiales de 2025 y su artículo está en borrador: al aprobarlo, lo publico.',
    kind: 'social',
    title: 'Una ballena encima de una montaña',
    excerpt: 'Una ballena encima de una montaña',
    image: f25(WHALE_25, 4),
    fotos: [4, 2, 1, 3, 5, 6, 7].map((n) => f25(WHALE_25, n)),
    fotosEnteras: true,
    status: 'publish',
    date: '2026-12-17',
    url: `${WEB}blog/una-ballena-en-un-monasterio/`,
    tags: ['FestivalADAR', 'Ballarte', 'Recuerdos'],
    pie: `Un día, un pueblo se despierta y encuentra una ballena tendida en lo alto de una montaña. 🐋

Esa es la historia de The Whale, el espectáculo con el que el ensemble Ballarte cerró su semana de residencia en ADAR el 7 de agosto de 2025, en el monasterio de San Antolín de Bedón (Llanes).

Música antigua, electrónica, voz y proyecciones: Berta Ares (violín), María del Buey (visuales y voz), Nacho Laguna (tiorba, guitarras y electrónica) y Giulio Tanasini (viola da gamba), que además escribió el relato.

Lo contamos en el blog de festivaladar.com

#FestivalADAR #Ballarte #TheWhale #MúsicaAntigua #Llanes #Asturias`,
    body: 'Una ballena encima de una montaña',
  },
  {
    lang: 'es',
    slug: 'post-compositoras',
    porque: 'Un post de ideas, no de fechas, para la semana tranquila antes de Navidad. Su artículo está en borrador: al aprobarlo, lo publico.',
    kind: 'social',
    estilo: 'cinta',
    title: 'Las compositoras que programamos',
    excerpt: 'Las compositoras que programamos',
    image: `${FX25}C1970T01.jpg`,
    // Las fotos de prensa de sus webs oficiales, con el crédito en el pie.
    fotos: ['andrea-casarrubios', 'caroline-shaw', 'jessie-montgomery'].map((n) => `${IMG}compositora-${n}-45.jpg`),
    fotosEnteras: true,
    status: 'publish',
    date: '2026-12-20',
    url: `${WEB}blog/las-compositoras-que-programamos/`,
    tags: ['FestivalADAR', 'Compositoras'],
    pie: `Pulitzer, Grammy, Carnegie Hall. Así es la lista de compositoras que han sonado en ADAR. 🎼

Andrea Casarrubios, Caroline Shaw, Jessie Montgomery, Celeste Oram, Mizuko Kaji…

Sus obras son de lo mejor que se escribe hoy, y en cada edición el público lo nota.

Fotos: Andrea Casarrubios por Titilayo Ayangade, Caroline Shaw por Simon van Boxtel y Jessie Montgomery, de su web.

Lo contamos en el blog de festivaladar.com

#FestivalADAR #Compositoras #MujeresEnLaMúsica #MúsicaContemporánea #Asturias`,
    body: 'Las compositoras que programamos',
  },
  {
    lang: 'es',
    slug: 'felices-fiestas-2026',
    porque: 'Felicitación de Navidad. Mantiene la cuenta viva en las fiestas sin pedir nada.',
    kind: 'social',
    estilo: 'cielo',
    title: '¡Felices fiestas!',
    excerpt: 'Felices fiestas desde Leiguarda',
    // 23 nov: «something more Christmassy»: the lights of the night sound walk in Leiguarda.
    image: `${VIEJO}2025/09_Paseo_Sonoro_en_Leiguarda/C1927T01.jpg`,
    pegatinas: [{ texto: 'Leiguarda · Asturias' }, { texto: 'Nos vemos en 2027', senal: true }],
    pegatinasMuro: true,
    status: 'publish',
    date: '2026-12-23',
    url: WEB,
    tags: ['FestivalADAR', 'Navidad'],
    pie: `¡Felices fiestas desde Leiguarda! 🎄✨

Este año hubo luces en hórreos, iglesias y campos de aldea, y mucha gente escuchando a nuestro lado. Gracias por venir y por abrirnos vuestros pueblos.

Os deseamos una Navidad tranquila, con buena música y buena mesa. Nos vemos en 2027.

#FestivalADAR #FelicesFiestas #Navidad #FelizNavidad #Asturias #Leiguarda`,
    body: 'Felices fiestas desde Leiguarda',
  },
  {
    lang: 'es',
    slug: 'adar-2026-en-fotos',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'seis-ediciones-de-adar',
    porque: 'Resumen del año la última semana de diciembre, cuando todo el mundo mira atrás. Él pidió fotos de este año y de otros.',
    kind: 'social',
    title: 'ADAR 2026 en fotos',
    excerpt: 'ADAR 2026 en fotos',
    image: f26(ECLIPSE_26, 3),
    // Fotos del archivo de 2026 que no salieron como portada en Instagram
    // (comparadas con el historial el 22 de noviembre).
    fotos: [
      f26(ECLIPSE_26, 3),
      f26(FIGAL_26, 4),
      f26(CORIAS_26, 4),
      f26(FRANCO_26, 3),
      f26(CASONA_26, 2),
      f26(FIGAL_26, 3),
      f26(OSCOS_26, 3),
      f26(ECLIPSE_26, 4),
      f26(LEIGUARDA_26, 5),
      f26(LEIGUARDA_FINAL_26, 8),
    ],
    fotosEnteras: true,
    status: 'publish',
    date: '2026-12-29',
    url: WEB,
    tags: ['FestivalADAR', 'Resumen2026'],
    pie: `ADAR 2026, en fotos que todavía no habíamos enseñado. 📸

La VI edición, del 3 al 16 de agosto. Un hórreo en Salas, el Parador de Corias, El Franco, Villanueva de Oscos, el eclipse, la panera de La Casona de Belmonte y las dos noches finales en la iglesia de Leiguarda.

Gracias a los músicos, a los vecinos y a quienes vinieron.

¿Cuál fue tu noche?

#FestivalADAR #ADAR2026 #Asturias #MúsicaClásica #MedioRural`,
    body: 'ADAR 2026 en fotos',
  },

  // ── Enero de 2027: Braña Sonora y Orchestra Improvvisata ──────────────
  {
    lang: 'es',
    slug: 'brana-sonora-anuncio',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'brana-sonora',
    porque: 'En enero empieza Braña Sonora, el proyecto paralelo al festival con el apoyo del Ministerio de Cultura. Es la noticia más importante del invierno.',
    kind: 'social',
    estilo: 'cielo',
    kicker: 'Nuevo proyecto',
    title: 'Braña Sonora',
    excerpt: 'Archivo, transmisión y creación a partir del patrimonio inmaterial del medio rural asturiano.',
    fondoAmbar: true,
    diapositivas: 4,
    logo: { src: LOGO_MINISTERIO, srcOscuro: LOGO_MINISTERIO_OSCURO, diapositivas: [0, 3], historia: true },
    image: `${RES}IMG_2808.jpeg`,
    status: 'publish',
    date: '2027-01-08',
    url: WEB,
    tags: ['FestivalADAR', 'BrañaSonora'],
    pie: `Empezamos Braña Sonora. 🌿

Un proyecto de ADAR, paralelo al festival, para escuchar y guardar el patrimonio vivo del medio rural asturiano:

🐄 la cultura vaqueira de alzada y sus brañas,
🌾 el paisaje sonoro de los hórreos, las paneras y los oficios,
🎙️ la memoria oral musical, con la tonada asturiana.

Vamos a grabar en los concejos donde ya trabaja el festival, con las personas que guardan ese saber. Con ese archivo trabajarán compositoras y compositores residentes, y las obras nuevas se estrenarán en el Festival ADAR de agosto de 2027. También habrá materiales para escuelas rurales.

Braña Sonora cuenta con una ayuda del Ministerio de Cultura para proyectos de salvaguarda del Patrimonio Cultural Inmaterial, y dura de julio de 2026 a diciembre de 2027.

Desliza para saber más. 👉

Más en festivaladar.com

#BrañaSonora #FestivalADAR #PatrimonioInmaterial #Asturias #CulturaVaqueira #Tonada #MinisterioDeCultura`,
    body: `Braña Sonora

## Escuchar y guardar

Grabamos el paisaje sonoro de las brañas, los hórreos y los oficios, y la memoria de la tonada, con quienes la guardan.

## Transmitir y crear

Materiales para escuelas rurales y tres residencias de composición. Las obras nuevas se estrenan en el Festival ADAR de agosto de 2027.

## Con el apoyo del Ministerio de Cultura

Ayudas para proyectos de salvaguarda del Patrimonio Cultural Inmaterial. De julio de 2026 a diciembre de 2027.
`,
    falta: '¿Hay ya página de Braña Sonora en la web? Si no, el enlace va a la portada.',
  },
  {
    lang: 'es',
    slug: 'brana-sonora-vaqueiros',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'brana-sonora',
    // 22 nov: «no me convence». En Asturias nadie necesita que le expliquen
    // qué es una braña; mejor preguntar por los recuerdos de cada uno.
    porque: 'Segundo post de Braña Sonora. En vez de explicar qué es una braña (en Asturias se sabe), pregunta por los recuerdos de cada uno: da conversación y nos trae gente para el archivo.',
    kind: 'social',
    estilo: 'cielo',
    title: '¿Tú también subías a la braña?',
    excerpt: '¿Tú también subías a la braña?',
    logo: { src: LOGO_MINISTERIO, srcOscuro: LOGO_MINISTERIO_OSCURO, diapositivas: [0], historia: true },
    image: `${RES}IMG_2788.jpeg`,
    status: 'publish',
    date: '2027-01-12',
    url: WEB,
    tags: ['BrañaSonora', 'CulturaVaqueira'],
    pie: `¿Tú también subías a la braña? ⛰️

En Asturias la braña no hace falta explicarla. Es el verano de los abuelos con el ganado, la cabaña, el camino de subida en mayo y el de bajada en octubre. Y lo que se cantaba por el camino.

Con Braña Sonora queremos escuchar esas historias y guardarlas antes de que se pierdan.

Cuéntanos en los comentarios: ¿quién subía en tu familia? ¿A qué braña? ¿Qué se cantaba?

#BrañaSonora #FestivalADAR #CulturaVaqueira #Brañas #Asturias #PatrimonioInmaterial`,
    body: '¿Tú también subías a la braña?',
  },
  {
    lang: 'es',
    slug: 'brana-sonora-buscamos-portadores',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'brana-sonora',
    porque: 'El 17 es San Antón, patrón de los animales, con bendiciones de ganado por toda Asturias. Buen día para pedir que nos presenten a vaqueiros, cantadores y artesanos.',
    kind: 'social',
    estilo: 'cielo',
    kicker: 'Braña Sonora',
    title: '¿Conoces a quien guarda la memoria de tu pueblo?',
    excerpt: 'Buscamos a quienes guardan la memoria de su pueblo.',
    logo: { src: LOGO_MINISTERIO, srcOscuro: LOGO_MINISTERIO_OSCURO, diapositivas: [0], historia: true },
    image: `${FX25}C1981T01.jpg`,
    pegatinas: [{ texto: 'Braña Sonora' }, { texto: 'Vaqueiros · tonada · oficios' }, { texto: 'Escríbenos', senal: true }],
    pegatinasMuro: true,
    status: 'publish',
    date: '2027-01-17',
    url: WEB,
    tags: ['BrañaSonora', 'SanAntón'],
    pie: `Hoy es San Antón, y en muchos pueblos de Asturias se bendice al ganado. 🐄

Para Braña Sonora buscamos a las personas que guardan esa memoria: vaqueiros y vaqueiras, cantadores y cantadoras de tonada, constructores en piedra seca, panaderas, ferradores y otros oficios.

¿Tienes un abuelo que cantaba en la braña? ¿Una vecina que sabe cómo se hacía una panera? Escríbenos a leiguardamusic@gmail.com

Solo grabamos con permiso, y cada persona revisa lo suyo antes de que se publique.

Más en festivaladar.com

#BrañaSonora #FestivalADAR #SanAntón #CulturaVaqueira #Tonada #Asturias`,
    body: '¿Conoces a quien guarda la memoria de tu pueblo?',
    falta: 'Confirmar que leiguardamusic@gmail.com es el correo para Braña Sonora. Si tenéis fotos del trabajo de campo (brañas, vaqueiros, tonada), mejor que esta.',
  },
  {
    lang: 'es',
    slug: 'orchestra-improvvisata-anuncio',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'orchestra-improvvisata-en-leiguarda',
    porque: 'Anuncia la llegada de Orchestra Improvvisata a Leiguarda con Culture Moves Europe. Es la residencia que financia Culture Moves Europe (Unión Europea).',
    kind: 'social',
    estilo: 'cielo',
    kicker: 'Residencia',
    title: 'Llega Orchestra Improvvisata',
    excerpt: 'Una orquesta donde todos improvisan juntos.',
    // Fotos de su propio dossier (Orchestra Improvvisata, Roma).
    image: `${IMG}orchestra-improvvisata-ritmo.jpg`,
    logo: { src: LOGO_UE, srcOscuro: LOGO_UE_OSCURO, diapositivas: [0], historia: true },
    status: 'publish',
    date: '2027-01-20',
    url: `${WEB}financiacion-europea/`,
    tags: ['FestivalADAR', 'OrchestraImprovvisata', 'CultureMovesEurope'],
    pie: `Este invierno llega a Leiguarda Orchestra Improvvisata. 🇮🇹

Es un proyecto social italiano que, desde 2018, usa la improvisación musical para despertar la creatividad. Niños, adolescentes, personas con discapacidad, principiantes y músicos profesionales tocan juntos, sin partitura.

Lo hacen con el Ritmo con Señas, el lenguaje de gestos de Santiago Vázquez: una persona dirige con las manos y el grupo improvisa a partir de esas señas.

Su residencia en ADAR está financiada por la Unión Europea a través de Culture Moves Europe, el programa de movilidad de Europa Creativa, con el Goethe-Institut.

Más en festivaladar.com

#FestivalADAR #OrchestraImprovvisata #RitmoConSeñas #CultureMovesEurope #EuropaCreativa #Asturias`,
    body: 'Llega Orchestra Improvvisata',
    falta: 'Fechas de la residencia, si habrá actividad abierta (taller, ensayo abierto, concierto) y su cuenta de Instagram. La foto es de su dossier y tiene poca resolución: si tienen una mejor, la cambio.',
  },
  {
    lang: 'es',
    slug: 'dia-educacion-escuelas-rurales',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'brana-sonora',
    porque: 'El 24 de enero es el Día Internacional de la Educación. Braña Sonora tiene una parte para escuelas rurales y este es el día para pedir que se apunten.',
    kind: 'social',
    estilo: 'cielo',
    title: 'Escuelas rurales: la música de vuestro concejo',
    excerpt: 'Braña Sonora para escuelas rurales.',
    logo: { src: LOGO_MINISTERIO, srcOscuro: LOGO_MINISTERIO_OSCURO, diapositivas: [0], historia: true },
    image: f25(OBONA_25, 2),
    pegatinas: [{ texto: 'Escuelas rurales' }, { texto: 'Braña Sonora' }, { texto: 'Escríbenos', senal: true }],
    status: 'publish',
    date: '2027-01-24',
    url: WEB,
    tags: ['BrañaSonora', 'Educación'],
    pie: `Hoy es el Día Internacional de la Educación. 📚

Con Braña Sonora estamos preparando materiales para escuelas rurales de Asturias: grabaciones de la tonada, de las brañas y de los oficios de cada concejo, con propuestas para clase en castellano y en asturiano.

¿Das clase en una escuela rural del occidente asturiano? Escríbenos a leiguardamusic@gmail.com y te contamos cómo participar. Sin coste para el centro.

Más en festivaladar.com

#BrañaSonora #FestivalADAR #DíaInternacionalDeLaEducación #EscuelaRural #Asturias`,
    body: 'Escuelas rurales: la música de vuestro concejo',
    falta: 'Confirmar que en enero se puede invitar ya a los colegios (el plan dice portal en beta de enero a marzo).',
  },
  {
    lang: 'es',
    slug: 'ritmo-con-senas',
    // Su artículo del blog (se publica en la web el mismo día).
    blog: 'orchestra-improvvisata-en-leiguarda',
    porque: 'Explica el Ritmo con Señas en un carrusel antes de que llegue Orchestra Improvvisata: es lo que más curiosidad va a dar.',
    kind: 'social',
    estilo: 'cinta',
    fondoAmbar: true,
    diapositivas: 4,
    title: '¿Se puede dirigir una orquesta con señas?',
    excerpt: 'El Ritmo con Señas, explicado.',
    image: `${IMG}orchestra-improvvisata-collage.jpg`,
    logo: { src: LOGO_UE, srcOscuro: LOGO_UE_OSCURO, diapositivas: [3], historia: true },
    status: 'publish',
    date: '2027-01-27',
    url: `${WEB}financiacion-europea/`,
    tags: ['OrchestraImprovvisata', 'RitmoConSeñas'],
    pie: `¿Se puede dirigir una orquesta solo con señas? 👋

Sí. Es el Ritmo con Señas, creado por el argentino Santiago Vázquez. Él lo define así: «es un lenguaje, un juego y un sistema pedagógico».

Una persona dirige con las manos, los brazos y el cuerpo. Las demás improvisan, se escuchan y se contestan. Basta con escuchar, aunque no sepas leer música.

Es lo que trae a Leiguarda Orchestra Improvvisata.

Desliza. 👉

#FestivalADAR #OrchestraImprovvisata #RitmoConSeñas #Improvisación #CultureMovesEurope`,
    body: `¿Se puede dirigir una orquesta con señas?

## Un lenguaje

Señas con las manos, los brazos y el cuerpo para coordinar una improvisación en grupo. Lo creó Santiago Vázquez.

## Un juego

Hay quien dirige y hay quien improvisa. Cada uno trae sus ritmos y sus ideas, y el grupo se escucha.

## Para todos

Niños, adolescentes, personas con discapacidad, principiantes y profesionales tocan juntos. Así trabaja Orchestra Improvvisata.
`,
    falta: 'Fechas de la residencia de Orchestra Improvvisata.',
  },
  {
    lang: 'es',
    slug: 'post-paseo-sonoro',
    porque: 'Enlaza con Braña Sonora (escuchar el paisaje) y explica nuestro formato más querido. Su artículo está en borrador: al aprobarlo, lo publico.',
    kind: 'social',
    estilo: 'cinta',
    title: '¿Qué es un paseo sonoro?',
    excerpt: '¿Qué es un paseo sonoro?',
    image: f25(CORIAS_25, 4),
    // 23 nov: better photos, from the sound walk in the cloister of the Parador de Corias (2025), whole.
    fotos: [4, 2, 5, 7, 6].map((n) => f25(CORIAS_25, n)),
    fotosEnteras: true,
    status: 'publish',
    date: '2027-01-30',
    url: `${WEB}blog/que-es-un-paseo-sonoro/`,
    tags: ['FestivalADAR', 'PaseoSonoro'],
    pie: `En un paseo sonoro, decides tú. 🚶

Los músicos se reparten por un espacio y el público lo recorre: eliges el orden, la distancia y cuánto te quedas delante de cada cosa. Nadie sale con el mismo concierto.

El 15 de agosto de 2025 lo hicimos en el claustro del Parador de Corias (Cangas del Narcea): un violonchelo junto al seto, un violín bajo los arcos y el público paseando por el jardín.

Lo contamos en el blog de festivaladar.com

#FestivalADAR #PaseoSonoro #ParadorDeCorias #CangasDelNarcea #Asturias`,
    body: '¿Qué es un paseo sonoro?',
  },
];

// Todas las formas de entrar en ADAR, en un solo sitio.
//
// Esta lista es la fuente de la página /participa/, del carril de
// «convocatorias abiertas» de la página de residencias y del archivo de
// convocatorias pasadas. Cuando se abre o se cierra una convocatoria se toca
// AQUÍ y solo aquí: la web entera se entera sola.
//
// Para abrir una convocatoria: cambiar `estado` a 'abierta' y poner `cierra`.
// Para cerrarla: `estado: 'cerrada'` y rellenar `resultado` si lo hay. No hace
// falta tocar ninguna página.

import type { Lang } from '../i18n/strings.ts';

/**
 * - `permanente`: se puede solicitar cualquier día del año.
 * - `abierta`: convocatoria con plazo, dentro de plazo.
 * - `proxima`: anunciada pero todavía no abierta.
 * - `cerrada`: pasó el plazo. Va al archivo.
 */
export type Estado = 'permanente' | 'abierta' | 'proxima' | 'cerrada';

/**
 * Para agrupar en la página: cada vía es de una familia. La familia es el
 * «de qué va esto», y es lo primero que mira quien llega: se entra a tocar,
 * a trabajar una temporada, a poner un hórreo, a programar juntos o a
 * trabajar en el equipo. El estado (abierta, próxima, cerrada) va después.
 */
export type Familia =
  | 'programacion'
  | 'residencias'
  | 'territorio'
  | 'colaboracion'
  | 'equipo';

/** Orden en que se presentan las familias y cómo se llaman. */
export const FAMILIAS: {
  id: Familia;
  titulo: Record<Lang, string>;
  sub: Record<Lang, string>;
}[] = [
  {
    id: 'programacion',
    titulo: {
      es: 'Tocar en el festival',
      en: 'Playing at the festival',
      ast: 'Tocar nel festival',
    },
    sub: {
      es: 'Para artistas y grupos que quieran estar en la programación.',
      en: 'For artists and groups who want to be in the programme.',
      ast: 'Pa artistes y grupos que quieran tar na programación.',
    },
  },
  {
    id: 'residencias',
    titulo: {
      es: 'Venir a trabajar en residencia',
      en: 'Coming to work in residence',
      ast: 'Venir a trabayar en residencia',
    },
    sub: {
      es: 'Tiempo y espacio en Leiguarda para crear, investigar y ensayar.',
      en: 'Time and space in Leiguarda to create, research and rehearse.',
      ast: 'Tiempu y espaciu en Lleiguarda pa crear, investigar y ensayar.',
    },
  },
  {
    id: 'territorio',
    titulo: {
      es: 'Poner tu espacio',
      en: 'Offering your space',
      ast: 'Poner el to espaciu',
    },
    sub: {
      es: 'Para quien tenga un hórreo, una panera o un lugar donde pueda sonar música.',
      en: 'For anyone with an hórreo, a panera or a place where music can be played.',
      ast: 'Pa quien tenga un hórreu, una panera o un llugar onde pueda sonar música.',
    },
  },
  {
    id: 'colaboracion',
    titulo: {
      es: 'Programar juntos',
      en: 'Programming together',
      ast: 'Programar xuntos',
    },
    sub: {
      es: 'Festivales, salas, instituciones, agencias y patrocinadores.',
      en: 'Festivals, venues, institutions, agencies and sponsors.',
      ast: 'Festivales, sales, instituciones, axencies y patrocinadores.',
    },
  },
  {
    id: 'equipo',
    titulo: {
      es: 'Trabajar en ADAR',
      en: 'Working at ADAR',
      ast: 'Trabayar n’ADAR',
    },
    sub: {
      es: 'Prácticas y puestos en producción, comunicación y documentación.',
      en: 'Internships and roles in production, communication and documentation.',
      ast: 'Práutiques y puestos en producción, comunicación y documentación.',
    },
  },
];

/**
 * A quién va dirigido. Un artista y un programador de sala no buscan lo
 * mismo ni hablan el mismo idioma, así que cada público tiene su página y
 * /participa/ se queda como el reparto.
 *
 * `familias` dice qué secciones se llevan a cada página; entre todas cubren
 * las cinco, sin repetir ninguna.
 */
export const PUBLICOS: {
  slug: string;
  /** De qué familia toma el icono. */
  icono: Familia;
  familias: Familia[];
  titulo: Record<Lang, string>;
  /** «Eres…»: la línea de la tarjeta del reparto. */
  quien: Record<Lang, string>;
  lede: Record<Lang, string>;
}[] = [
  {
    slug: 'artistas',
    icono: 'programacion',
    familias: ['programacion', 'residencias'],
    titulo: { es: 'Artistas', en: 'Artists', ast: 'Artistes' },
    quien: {
      es: 'Músicos, ensembles, compositores, artistas visuales, danza, mánagers y agencias.',
      en: 'Musicians, ensembles, composers, visual artists, dance, managers and agencies.',
      ast: 'Músicos, ensembles, compositores, artistes visuales, danza, mánagers y axencies.',
    },
    lede: {
      es: 'Para tocar en el festival o para venir a trabajar una temporada en Leiguarda.',
      en: 'To play at the festival, or to come and work for a season in Leiguarda.',
      ast: 'Pa tocar nel festival o pa venir a trabayar una temporada en Lleiguarda.',
    },
  },
  {
    slug: 'salas',
    icono: 'colaboracion',
    familias: ['colaboracion'],
    titulo: {
      es: 'Salas, festivales e instituciones',
      en: 'Venues, festivals and institutions',
      ast: 'Sales, festivales ya instituciones',
    },
    quien: {
      es: 'Programadores, festivales, salas, instituciones culturales, agencias y patrocinadores.',
      en: 'Programmers, festivals, venues, cultural institutions, agencies and sponsors.',
      ast: 'Programadores, festivales, sales, instituciones culturales, axencies y patrocinadores.',
    },
    lede: {
      es: 'Para programar juntos: intercambios, coproducciones, residencias compartidas y patrocinio.',
      en: 'To programme together: exchanges, co-productions, shared residencies and sponsorship.',
      ast: 'Pa programar xuntos: intercambios, coproducciones, residencies compartíes y patrociniu.',
    },
  },
  {
    slug: 'espacios',
    icono: 'territorio',
    familias: ['territorio'],
    titulo: {
      es: 'Hórreos y espacios',
      en: 'Hórreos and spaces',
      ast: 'Hórreos y espacios',
    },
    quien: {
      es: 'Propietarios de hórreos, paneras y otros espacios de Asturias.',
      en: 'Owners of hórreos, paneras and other spaces in Asturias.',
      ast: 'Propietarios d’hórreos, paneres y otros espacios d’Asturies.',
    },
    lede: {
      es: 'Para que el festival suene dentro de un hórreo, una panera o un lugar con memoria.',
      en: 'So the festival can be played inside an hórreo, a panera or a place with memory.',
      ast: 'Pa que’l festival suene dientro d’un hórreu, una panera o un llugar con memoria.',
    },
  },
  {
    slug: 'equipo',
    icono: 'equipo',
    familias: ['equipo'],
    titulo: { es: 'Trabajar en ADAR', en: 'Working at ADAR', ast: 'Trabayar n’ADAR' },
    quien: {
      es: 'Estudiantes y profesionales de producción, comunicación y documentación.',
      en: 'Students and professionals in production, communication and documentation.',
      ast: 'Estudiantes y profesionales de producción, comunicación y documentación.',
    },
    lede: {
      es: 'Prácticas y puestos para sacar adelante el festival.',
      en: 'Internships and roles to make the festival happen.',
      ast: 'Práutiques y puestos pa sacar alantre’l festival.',
    },
  },
];

/** La página de cada público, por idioma. */
export function urlPublico(slug: string, lang: Lang): string {
  return `/${lang}/participa/${slug}/`;
}

/** En qué página vive una familia. */
export function publicoDeFamilia(familia: Familia) {
  return PUBLICOS.find((p) => p.familias.includes(familia));
}

export interface Convocatoria {
  id: string;
  familia: Familia;
  estado: Estado;
  /** Año o edición, para ordenar el archivo. */
  anio?: number;
  /** Fecha de cierre en ISO, solo si `estado` es 'abierta'. */
  cierraISO?: string;
  destacada?: boolean;
  titulo: Record<Lang, string>;
  /** Para quién es. Una línea, sin adornos. */
  paraQuien: Record<Lang, string>;
  /** Qué es, en dos o tres frases. */
  que: Record<Lang, string>;
  /** Cuándo: plazo, periodicidad o «se abre en…». */
  cuando: Record<Lang, string>;
  /** Dirección de la página con las bases. Vacío si todavía no hay. */
  href?: Partial<Record<Lang, string>>;
  /** Texto del enlace. Si falta, se usa uno genérico. */
  cta?: Record<Lang, string>;
  /** Solo en el archivo: cómo acabó. */
  resultado?: Record<Lang, string>;
}

export const CONVOCATORIAS: Convocatoria[] = [
  // ── ABIERTAS TODO EL AÑO ─────────────────────────────────────────────
  {
    id: 'propuestas-artisticas',
    familia: 'programacion',
    estado: 'permanente',
    destacada: true,
    titulo: {
      es: 'Propuestas artísticas',
      en: 'Artistic proposals',
      ast: 'Propuestes artístiques',
    },
    paraQuien: {
      es: 'Músicos, ensembles, mánagers y agencias.',
      en: 'Musicians, ensembles, managers and agencies.',
      ast: 'Músicos, ensembles, mánagers y axencies.',
    },
    que: {
      es: 'La vía general para proponer un programa o un grupo al festival. Gratuita y sin plazo. Se manda por correo con un asunto concreto, para que no se pierda entre lo demás.',
      en: 'The general route for proposing a programme or an ensemble to the festival. Free, no deadline. Sent by email with a set subject line so it does not get lost.',
      ast: 'La vía xeneral pa proponer un programa o un grupu al festival. De baldre y ensin plazu. Mándase per corréu con un asuntu concretu, pa que nun se pierda ente lo demás.',
    },
    cuando: {
      es: 'Abierta todo el año.',
      en: 'Open all year round.',
      ast: 'Abierta tol añu.',
    },
    href: {
      es: '/es/propuestas-artisticas/',
      en: '/en/submit-a-proposal/',
      ast: '/ast/propuestes-artistiques/',
    },
    cta: {
      es: 'Cómo enviar una propuesta',
      en: 'How to submit a proposal',
      ast: 'Cómo unviar una propuesta',
    },
  },
  {
    id: 'residencias-cofinanciadas',
    familia: 'residencias',
    estado: 'permanente',
    destacada: true,
    titulo: {
      es: 'Residencias cofinanciadas',
      en: 'Co-funded residencies',
      ast: 'Residencies cofinanciaes',
    },
    paraQuien: {
      es: 'Artistas y grupos que quieran venir a trabajar por su cuenta.',
      en: 'Artists and groups who want to come and work on their own initiative.',
      ast: 'Artistes y grupos que quieran venir a trabayar pela so cuenta.',
    },
    que: {
      es: 'Casa, espacio de trabajo y de ensayo en Leiguarda durante el tiempo que necesites. ADAR subvenciona una parte del coste real de la estancia y el resto lo aporta el artista.',
      en: 'A house, a workspace and a rehearsal space in Leiguarda for as long as you need. ADAR subsidises part of the real cost of the stay and the artist covers the rest.',
      ast: 'Casa, espaciu de trabayu y d’ensayu en Lleiguarda pel tiempu que faiga falta. ADAR subvenciona una parte del costu real de la estancia y el restu apúrrelu l’artista.',
    },
    cuando: {
      es: 'Solicitud abierta todo el año.',
      en: 'Applications open all year round.',
      ast: 'Solicitú abierta tol añu.',
    },
    href: {
      es: '/es/residencias-artisticas-adar/#cofinanciadas',
      en: '/en/adar-artistic-residencies/#cofinanciadas',
      ast: '/ast/residencias-artisticas-adar-2/#cofinanciadas',
    },
    cta: {
      es: 'Ver condiciones',
      en: 'See conditions',
      ast: 'Ver condiciones',
    },
  },
  {
    id: 'colaboraciones',
    familia: 'colaboracion',
    estado: 'permanente',
    titulo: {
      es: 'Colaboraciones e intercambios',
      en: 'Partnerships and exchanges',
      ast: 'Collaboraciones ya intercambios',
    },
    paraQuien: {
      es: 'Festivales, salas, instituciones, agencias y patrocinadores.',
      en: 'Festivals, venues, institutions, agencies and sponsors.',
      ast: 'Festivales, sales, instituciones, axencies y patrocinadores.',
    },
    que: {
      es: 'Intercambio entre festivales, coproducciones, residencias compartidas y patrocinio. El formato que mejor nos funciona y casi nadie propone: un grupo viene a tocar aquí y músicos del festival tocan en tu programación.',
      en: 'Exchange between festivals, co-productions, shared residencies and sponsorship. The format that works best for us and almost nobody proposes: a group comes to play here and festival musicians play in your programme.',
      ast: 'Intercambiu ente festivales, coproducciones, residencies compartíes y patrociniu. El formatu que meyor mos funciona y que casi naide propón: un grupu vien a tocar equí y músicos del festival toquen na to programación.',
    },
    cuando: {
      es: 'Abierta todo el año.',
      en: 'Open all year round.',
      ast: 'Abierta tol añu.',
    },
    // Absoluto y no un ancla suelta: esta tarjeta sale también en el carril
    // de la página de residencias, donde esa sección no existe.
    href: {
      es: '/es/participa/salas/#colaboraciones',
      en: '/en/participa/salas/#colaboraciones',
      ast: '/ast/participa/salas/#colaboraciones',
    },
    cta: {
      es: 'Cómo proponer una colaboración',
      en: 'How to propose a partnership',
      ast: 'Cómo proponer una collaboración',
    },
  },

  // ── PRÓXIMAS ─────────────────────────────────────────────────────────
  {
    id: 'adar-next',
    familia: 'programacion',
    estado: 'proxima',
    destacada: true,
    titulo: { es: 'ADAR NEXT', en: 'ADAR NEXT', ast: 'ADAR NEXT' },
    paraQuien: {
      es: 'Artistas de cualquier disciplina, nacionalidad, edad y trayectoria.',
      en: 'Artists of any discipline, nationality, age and career stage.',
      ast: 'Artistes de cualquier disciplina, nacionalidá, edá y trayeutoria.',
    },
    que: {
      es: 'Convocatoria internacional con evaluación individual garantizada y honorarios para los proyectos seleccionados, que se presentan en la edición de verano del festival.',
      en: 'An international open call with guaranteed individual assessment and fees for the selected projects, which are presented at the festival’s summer edition.',
      ast: 'Convocatoria internacional con evaluación individual garantizada y honorarios pa los proyeutos escoyíos, que se presenten na edición de branu del festival.',
    },
    cuando: {
      es: 'La convocatoria se abre en diciembre de 2026.',
      en: 'The call opens in December 2026.',
      ast: 'La convocatoria ábrese en avientu de 2026.',
    },
    href: { es: '/es/adar-next/', en: '/en/adar-next/', ast: '/ast/adar-next/' },
    cta: {
      es: 'Conocer el proyecto',
      en: 'About the project',
      ast: 'Conocer el proyeutu',
    },
  },
  {
    id: 'residencias-financiadas',
    familia: 'residencias',
    estado: 'proxima',
    titulo: {
      es: 'Residencias financiadas',
      en: 'Fully funded residencies',
      ast: 'Residencies financiaes',
    },
    paraQuien: {
      es: 'Artistas y grupos seleccionados por convocatoria o por invitación.',
      en: 'Artists and groups selected by open call or by invitation.',
      ast: 'Artistes y grupos escoyíos per convocatoria o per invitación.',
    },
    que: {
      es: 'ADAR cubre íntegramente el coste de la residencia. Se abren según la financiación disponible en cada momento, así que no hay un plazo permanente: la que estuvo abierta en 2026 fue la de Culture Moves Europe.',
      en: 'ADAR covers the full cost of the residency. These open according to the funding available at the time, so there is no standing deadline: the one open in 2026 was the Culture Moves Europe call.',
      ast: 'ADAR cubre dafechu’l costu de la residencia. Ábrense según el financiamientu disponible en cada momentu, asina que nun hai un plazu permanente: la qu’estuvo abierta en 2026 foi la de Culture Moves Europe.',
    },
    cuando: {
      es: 'Sin convocatoria abierta ahora mismo.',
      en: 'No open call at the moment.',
      ast: 'Ensin convocatoria abierta agora mesmo.',
    },
    href: {
      es: '/es/residencias-artisticas-adar/#financiadas',
      en: '/en/adar-artistic-residencies/#financiadas',
      ast: '/ast/residencias-artisticas-adar-2/#financiadas',
    },
    cta: { es: 'Cómo funcionan', en: 'How they work', ast: 'Cómo funcionen' },
  },
  {
    id: 'horreos',
    familia: 'territorio',
    estado: 'proxima',
    titulo: {
      es: 'Concurso de Hórreos y Paneras',
      en: 'Hórreos and Paneras Competition',
      ast: 'Concursu d’Hórreos y Paneres',
    },
    paraQuien: {
      es: 'Propietarios de hórreos y paneras en Asturias.',
      en: 'Owners of hórreos and paneras in Asturias.',
      ast: 'Propietarios d’hórreos y paneres n’Asturies.',
    },
    que: {
      es: 'Cada año elegimos hórreos y paneras del Principado para celebrar en ellos conciertos gratuitos del festival. Cada espacio seleccionado recibe un premio de 300 € y figura en toda la comunicación del festival.',
      en: 'Every year we choose hórreos and paneras across Asturias to host free festival concerts. Each selected site receives a 300 € prize and appears in all the festival’s communication.',
      ast: 'Cada añu escoyemos hórreos y paneres del Principáu pa celebrar nellos conciertos de baldre del festival. Cada espaciu escoyíu recibe un premiu de 300 € y apaez en tola comunicación del festival.',
    },
    cuando: {
      es: 'Convocatoria anual. Las fechas de la próxima edición se anuncian aquí.',
      en: 'Annual competition. The dates of the next edition are announced here.',
      ast: 'Convocatoria añal. Les feches de la próxima edición anúnciense equí.',
    },
    href: {
      es: '/es/concurso-de-horreos-y-paneras/',
      en: '/en/horreos-and-paneras-competition/',
      ast: '/ast/concursu-dhorreos-y-paneres/',
    },
    cta: { es: 'Ver las bases', en: 'See the rules', ast: 'Ver les bases' },
  },
  {
    id: 'equipo-practicas',
    familia: 'equipo',
    estado: 'proxima',
    titulo: {
      es: 'Prácticas y puestos en el equipo',
      en: 'Internships and roles in the team',
      ast: 'Práutiques y puestos nel equipu',
    },
    paraQuien: {
      es: 'Estudiantes y profesionales de producción, comunicación y documentación.',
      en: 'Students and professionals in production, communication and documentation.',
      ast: 'Estudiantes y profesionales de producción, comunicación y documentación.',
    },
    que: {
      es: 'A lo largo del año abrimos plazas de prácticas y buscamos gente para producir el festival, llevar la comunicación y documentar lo que pasa. Cuando haya una plaza aparece aquí.',
      en: 'Over the year we open internship places and look for people to produce the festival, run its communication and document what happens. When there is a role it appears here.',
      ast: 'A lo llargo del añu abrimos places de práutiques y buscamos xente pa producir el festival, llevar la comunicación y documentar lo que pasa. Cuando haya una plaza apaez equí.',
    },
    cuando: {
      es: 'Sin plazas abiertas ahora mismo. Se puede mandar candidatura espontánea.',
      en: 'No places open at the moment. Spontaneous applications are welcome.',
      ast: 'Ensin places abiertes agora mesmo. Puede unviase candidatura espontánea.',
    },
    href: {
      es: '/es/participa/equipo/#trabajar',
      en: '/en/participa/equipo/#trabajar',
      ast: '/ast/participa/equipo/#trabajar',
    },
    cta: {
      es: 'Mandar candidatura',
      en: 'Send an application',
      ast: 'Unviar candidatura',
    },
  },

  // ── ARCHIVO ──────────────────────────────────────────────────────────
  {
    id: 'residencias-cme-2026-27',
    familia: 'residencias',
    estado: 'cerrada',
    anio: 2026,
    titulo: {
      es: 'Residencia artística · Convocatoria 2026–27',
      en: 'Artist residency · 2026–27 open call',
      ast: 'Residencia artística · Convocatoria 2026–27',
    },
    paraQuien: {
      es: 'Grupos de 4 o 5 artistas y profesionales de la cultura residentes en Europa.',
      en: 'Groups of 4 or 5 artists and cultural professionals based in Europe.',
      ast: 'Grupos de 4 o 5 artistes y profesionales de la cultura residentes n’Europa.',
    },
    que: {
      es: 'Residencia financiada de 21 a 30 días en Leiguarda, con alojamiento, 30 €/día y ayuda de viaje, con el apoyo de Culture Moves Europe.',
      en: 'A funded residency of 21 to 30 days in Leiguarda, with accommodation, 30 €/day and a travel grant, supported by Culture Moves Europe.',
      ast: 'Residencia financiada de 21 a 30 díes en Lleiguarda, con agospiamientu, 30 €/día y ayuda de viaxe, col sofitu de Culture Moves Europe.',
    },
    cuando: {
      es: 'Cerró el 28 de septiembre de 2026.',
      en: 'Closed on 28 September 2026.',
      ast: 'Zarró’l 28 de setiembre de 2026.',
    },
    href: {
      es: '/es/convocatoria-residencias-2026-27/',
      en: '/en/artist-residency-open-call-2026-27/',
      ast: '/es/convocatoria-residencias-2026-27/',
    },
    cta: { es: 'Ver las bases', en: 'See the call', ast: 'Ver les bases' },
  },
  {
    id: 'compositor-residente-2026',
    familia: 'programacion',
    estado: 'cerrada',
    anio: 2026,
    titulo: {
      es: 'Compositor/a en residencia · ADAR 2026',
      en: 'Composer in residence · ADAR 2026',
      ast: 'Compositor/a en residencia · ADAR 2026',
    },
    paraQuien: {
      es: 'Compositores de cualquier procedencia y trayectoria.',
      en: 'Composers of any background and career stage.',
      ast: 'Compositores de cualquier procedencia y trayeutoria.',
    },
    que: {
      es: 'Residencia de composición en formato flexible —presencial, híbrido o virtual— con estreno durante el festival.',
      en: 'A composition residency in a flexible format — in person, hybrid or remote — premiered during the festival.',
      ast: 'Residencia de composición en formatu flexible —presencial, híbridu o virtual— con estrenu demientres el festival.',
    },
    cuando: {
      es: 'Convocatoria de la edición 2026, ya cerrada.',
      en: 'Call for the 2026 edition, now closed.',
      ast: 'Convocatoria de la edición 2026, yá zarrada.',
    },
    href: {
      es: '/es/compositor-residente/',
      en: '/en/festival-adar-2026-composer-in-residence-open-call/',
      ast: '/ast/compositor-en-residencia/',
    },
    cta: { es: 'Ver las bases', en: 'See the call', ast: 'Ver les bases' },
  },
];

// ── Utilidades ─────────────────────────────────────────────────────────

const ORDEN: Record<Estado, number> = { abierta: 0, permanente: 1, proxima: 2, cerrada: 3 };

export function porEstado(...estados: Estado[]): Convocatoria[] {
  return CONVOCATORIAS.filter((c) => estados.includes(c.estado)).sort((a, b) => {
    const d = ORDEN[a.estado] - ORDEN[b.estado];
    if (d) return d;
    // Dentro del mismo estado, primero las destacadas.
    return Number(!!b.destacada) - Number(!!a.destacada);
  });
}

export function archivo(): Convocatoria[] {
  return CONVOCATORIAS.filter((c) => c.estado === 'cerrada').sort(
    (a, b) => (b.anio ?? 0) - (a.anio ?? 0),
  );
}

export function deFamilia(familia: Familia, ...estados: Estado[]): Convocatoria[] {
  const base = estados.length ? porEstado(...estados) : CONVOCATORIAS;
  return base.filter((c) => c.familia === familia);
}

/** Rótulo del estado, para la etiqueta de color de cada tarjeta. */
export const ETIQUETA: Record<Estado, Record<Lang, string>> = {
  permanente: { es: 'Abierta todo el año', en: 'Open all year', ast: 'Abierta tol añu' },
  abierta: { es: 'Convocatoria abierta', en: 'Open call', ast: 'Convocatoria abierta' },
  proxima: { es: 'Próximamente', en: 'Coming soon', ast: 'Próximamente' },
  cerrada: { es: 'Cerrada', en: 'Closed', ast: 'Zarrada' },
};

/** Días que quedan para el cierre, o null si no aplica. */
export function diasRestantes(c: Convocatoria, hoy = new Date()): number | null {
  if (c.estado !== 'abierta' || !c.cierraISO) return null;
  const ms = new Date(c.cierraISO).getTime() - hoy.getTime();
  return Math.ceil(ms / 86400000);
}

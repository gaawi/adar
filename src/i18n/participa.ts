// Textos de las páginas de participación. Viven aquí y no dentro de cada
// página porque los comparten el reparto (/participa/) y las cuatro páginas
// de público, y tener tres idiomas repetidos en dos sitios acaba mal.
import type { Lang } from './strings.ts';

export const EMAIL_ADAR = 'leiguardamusic@gmail.com';

export const PARTICIPA = {
  es: {
    title: 'Participa',
    eyebrow: 'Formas de entrar en ADAR',
    lede: 'Todas las convocatorias del festival, con su estado y su plazo. Si buscas la forma de trabajar con nosotros, empieza aquí.',
    intro1:
      'ADAR no tiene una única puerta. Se puede entrar proponiendo un concierto, pidiendo una residencia, cediendo un hórreo para que suene música dentro, o trayendo a tu festival a músicos de aquí. Cada vía tiene sus condiciones y su calendario.',
    quienEres: 'Quién eres',
    quienEresSub:
      'Cada público tiene su página, con sus convocatorias y sus condiciones. Elige la tuya.',
    verRuta: 'Ver convocatorias',
    volver: 'Todas las formas de participar',
    otrasVias: 'Si no eres a quien va dirigida esta página',

    colabH: 'Colaboraciones e intercambios',
    colabP1:
      'Este canal es para instituciones culturales, festivales, salas, agencias, patrocinadores y coproducciones.',
    colabP2:
      'El formato que mejor nos funciona y que casi nadie propone es el intercambio: un grupo viene a tocar a ADAR y, a cambio, músicos del festival tocan en tu sala, tu ciclo o tu festival. El viaje se reparte entre dos programaciones en vez de caer entero sobre una, y los dos abrimos circuito. Da igual dónde estéis.',
    colabP3: 'Escríbenos a',
    colabAsunto: 'con el asunto',
    colabSubject: 'COLABORACIÓN ADAR · Nombre de la entidad',
    colabNota:
      'El asunto no es un capricho: sirve para filtrar el correo y no perder nada entre lo demás.',

    trabajoP:
      'A lo largo del año abrimos plazas de prácticas y buscamos gente para producción, comunicación y documentación del festival. Cuando haya alguna plaza aparece en esta página.',
    trabajoP2:
      'Si quieres que te tengamos en cuenta antes de que salga nada, manda un correo a',
    trabajoAsunto: 'con el asunto',
    trabajoSubject: 'TRABAJAR EN ADAR · Tu nombre',

    archivoH: 'Convocatorias anteriores',
    archivoSub:
      'Cerradas. Las bases siguen publicadas para quien quiera ver cómo trabajamos.',
    archivoPub: 'Convocatorias anteriores de esta vía',

    dudasH: '¿Ninguna encaja?',
    dudasP: 'Escribe a',
    dudasP2:
      'y cuéntanos qué tienes en mente. Preferimos el correo al teléfono, y contestamos todo lo que podemos.',
  },

  en: {
    title: 'Take part',
    eyebrow: 'Ways into ADAR',
    lede: 'Every open call the festival runs, with its status and its deadline. If you are looking for a way to work with us, start here.',
    intro1:
      'ADAR does not have a single door. You can come in by proposing a concert, by asking for a residency, by lending an hórreo so that music can be played inside it, or by bringing musicians from here to your own festival. Each route has its own conditions and its own calendar.',
    quienEres: 'Who you are',
    quienEresSub:
      'Each audience has its own page, with its own calls and conditions. Pick yours.',
    verRuta: 'See the calls',
    volver: 'All the ways to take part',
    otrasVias: 'If this page is not addressed to you',

    colabH: 'Partnerships and exchanges',
    colabP1:
      'This channel is for cultural institutions, festivals, venues, agencies, sponsors and co-productions.',
    colabP2:
      'The format that works best for us, and that almost nobody proposes, is the exchange: a group comes to play at ADAR and, in return, festival musicians play at your venue, your series or your festival. The travel is shared between two programmes instead of falling on one, and both of us open up our circuit. It does not matter where you are.',
    colabP3: 'Write to us at',
    colabAsunto: 'with the subject line',
    colabSubject: 'PARTNERSHIP ADAR · Name of the organisation',
    colabNota:
      'The subject line is not a whim: it lets us filter the inbox and lose nothing among everything else.',

    trabajoP:
      'Over the year we open internship places and look for people for the festival’s production, communication and documentation. Whenever there is a place it appears on this page.',
    trabajoP2:
      'If you want us to keep you in mind before anything is published, send an email to',
    trabajoAsunto: 'with the subject line',
    trabajoSubject: 'WORKING AT ADAR · Your name',

    archivoH: 'Past open calls',
    archivoSub:
      'Closed. The guidelines stay published for anyone who wants to see how we work.',
    archivoPub: 'Past calls on this route',

    dudasH: 'None of these fit?',
    dudasP: 'Write to',
    dudasP2:
      'and tell us what you have in mind. We prefer email to the telephone, and we answer everything we can.',
  },

  ast: {
    title: 'Participa',
    eyebrow: 'Formes d’entrar n’ADAR',
    lede: 'Toles convocatories del festival, col so estáu y el so plazu. Si busques la manera de trabayar con nós, entama equí.',
    intro1:
      'ADAR nun tien una sola puerta. Puede entrase proponiendo un conciertu, pidiendo una residencia, dexando un hórreu pa que suene música dientro, o llevando al to festival músicos d’equí. Cada vía tien les sos condiciones y el so calendariu.',
    quienEres: 'Quién yes',
    quienEresSub:
      'Cada públicu tien la so páxina, coles sos convocatories y les sos condiciones. Escueyi la tuya.',
    verRuta: 'Ver convocatories',
    volver: 'Toles formes de participar',
    otrasVias: 'Si nun yes a quien va dirixida esta páxina',

    colabH: 'Collaboraciones ya intercambios',
    colabP1:
      'Esti canal ye pa instituciones culturales, festivales, sales, axencies, patrocinadores y coproducciones.',
    colabP2:
      'El formatu que meyor mos funciona y que casi naide propón ye l’intercambiu: un grupu vien a tocar a ADAR y, a cambiu, músicos del festival toquen na to sala, nel to ciclu o nel to festival. El viaxe repártese ente dos programaciones en cuenta de cayer enteru sobre una, y los dos abrimos circuitu. Da igual ónde téis.',
    colabP3: 'Escríbimos a',
    colabAsunto: 'col asuntu',
    colabSubject: 'COLLABORACIÓN ADAR · Nome de la entidá',
    colabNota:
      'L’asuntu nun ye un capricho: val pa filtrar el corréu y nun perder nada ente lo demás.',

    trabajoP:
      'A lo llargo del añu abrimos places de práutiques y buscamos xente pa producción, comunicación y documentación del festival. Cuando haya dalguna plaza apaez nesta páxina.',
    trabajoP2:
      'Si quies que te tengamos en cuenta enantes de que salga nada, manda un corréu a',
    trabajoAsunto: 'col asuntu',
    trabajoSubject: 'TRABAYAR N’ADAR · El to nome',

    archivoH: 'Convocatories anteriores',
    archivoSub:
      'Zarraes. Les bases sigan publicaes pa quien quiera ver cómo trabayamos.',
    archivoPub: 'Convocatories anteriores d’esta vía',

    dudasH: '¿Nenguna encaxa?',
    dudasP: 'Escribi a',
    dudasP2:
      'y cuéntamos qué tienes na cabeza. Preferimos el corréu al teléfonu, y contestamos too lo que podemos.',
  },
} as const;

export function copyParticipa(lang: Lang) {
  return PARTICIPA[lang];
}

export function mailto(asunto: string): string {
  return `mailto:${EMAIL_ADAR}?subject=${encodeURIComponent(asunto)}`;
}

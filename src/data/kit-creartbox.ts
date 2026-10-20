// Material de origen del kit de redes de CreArtBox.
//
// La web de CreArtBox todavía no tiene el panel montado, así que el kit lee de
// aquí en lugar de una colección de contenido. Los textos salen de la nota de
// prensa de la temporada 2026/27 (creartbox.nyc/press/season-2026-27.html) y
// están en inglés, porque es el idioma de esa web y de sus redes.
//
// Para añadir un post: copia un bloque, cambia los datos y escribe el cuerpo
// con «## Titular» por cada diapositiva que quieras en el carrusel.

import type { KitSource } from './kit-brands';

const PHOTO = 'https://creartbox.nyc/assets/press/photos/';
// Las de la web, que no se estaban usando y son las mejores que hay.
const IMG = 'https://creartbox.nyc/assets/img/';
// El archivo de la web: una carpeta por noche, nombrada por fecha. Es el
// fondo de verdad, cientos de fotos con su concierto detrás, y es lo que
// evita que la misma imagen salga cuatro veces en el muro.
//   20251017 = Beyond the Surface · 20251212 = Musica Ricercata
const ARCHIVO = 'https://creartbox.nyc/assets/img/archive/';
// Las fotos de Threshold (6 de febrero de 2026) están en el CDN del archivo,
// no en el sitio. Es de donde salen los retratos de Emilie-Anne.
const THRESHOLD =
  'https://creartbox-archive.b-cdn.net/archive-creartbox/2026-02-06-threshold-photos/web/';
const RELEASE = 'https://creartbox.nyc/press/season-2026-27.html';
const CALENDAR = 'https://creartbox.nyc/concerts.html';
const CURRENTS = 'https://creartbox.nyc/concerts/currents-2026.html';
const PROGRAMA = 'https://creartbox.nyc/programs/currents-2026.html';
// El mockup del cuadernillo vive en este repositorio, no en creartbox.nyc:
// al servirse desde el mismo dominio que el kit, el canvas lo puede pintar sin
// depender de los permisos de otro servidor.
const MOCKUP = '/kit/creartbox-currents-programa.jpg';
// Retrato de prensa de Eric Moe, foto de Mara Rago, descargado de su
// representante. Servido desde aquí para que el canvas pueda pintarlo.
const MOE = '/kit/eric-moe.jpg';
// La serie de entrevistas vive en la sección News de creartbox.nyc.
const ENTREVISTA_MOE = 'https://creartbox.nyc/news/eight-questions-for-eric-moe.html';
// Las entradas de Currents, que es a donde hay que llevar a la gente ahora.
const ENTRADAS = 'https://www.eventbrite.com/e/creartbox-nyc-season-schumann-brahms-clara-schumann-currents-tickets-2000173994260';

export const CREARTBOX_SOURCES: KitSource[] = [
  {
    lang: 'en',
    slug: 'season-2026-27',
    title: 'CreArtBox announces its twelfth season',
    excerpt:
      'Four productions at The DiMenna Center, eleven works from the open call, one world premiere, touring dates in Illinois, Kentucky and the Hudson Valley, a residency in Finland, and the seventh Festival ADAR in Asturias.',
    image: PHOTO + 'creartbox-ensemble.jpg',
    status: 'publish',
    date: '2026-09-10',
    url: RELEASE,
    tags: ['Season202627', 'DiMennaCenter', 'CallForScores', 'FestivalADAR'],
    body: `
Ten dates, from October 2026 to August 2027.

## Four nights at The DiMenna Center

The centre of the season is the New York Series: four productions at The DiMenna Center for Classical Music, each at 7:30 pm. Currents, Winterlight, Pressure and Release, Feverdream.

## Eleven works came through the open call

Eleven of the works this season reached the programme through CreArtBox's open call for scores, more than in any season before. In April an entire evening is given over to it.

## A world premiere in December

Winterlight opens with the world premiere of Hannah Selin's Tectonic Lullaby for piano quintet, and closes with Stravinsky's Petroushka in a chamber arrangement.

## On tour: Illinois, Kentucky, the Hudson Valley

The ensemble opens the Engelbach-Hart Music Festival at Illinois College with free admission, plays the Chamber Music Society of Louisville, and brings Masked Sounds to Saugerties.

## Five days in Kuopio

Guillermo Laporta and Josefina Urraca spend five days at the Kuopio Conservatory in Finland, giving masterclasses and a workshop on building a chamber piece on stage: working closer to the audience, drawing on design and other disciplines.

## The season ends in Asturias

The seventh Festival ADAR runs from 2 to 15 August 2027 across rural Asturias: residencies, micro-concerts and stops in small towns, played in churches, hórreos and mountain villages rather than concert halls.
`,
  },

  {
    lang: 'en',
    slug: 'currents',
    title: 'Currents opens the season',
    excerpt:
      'Built around one idea. Current: moving air, moving water, energy going from one place to another. 30 October 2026, The DiMenna Center, 7:30 pm.',
    image: PHOTO + 'creartbox-currents-dimenna.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: CALENDAR,
    tags: ['Currents', 'DiMennaCenter', 'NewYorkSeries'],
    body: `
The first of four New York Series productions.

## One idea, held all evening

Current: moving air, moving water, energy going from one place to another. Every work on the programme is a different way of carrying something across.

## New music beside Brahms and both Schumanns

Eric Moe's Laminar Flow in Upsidedown Creek and a new piece by the ensemble's flutist Guillermo Laporta sit alongside Brahms, Robert Schumann and Clara Schumann.

## Eric Moe

A Guggenheim fellow, honoured by the American Academy of Arts and Letters. His score reached the programme through the open call.

## Tickets

On sale now through Eventbrite. The DiMenna Center for Classical Music, 30 October 2026, 7:30 pm.
`,
  },

  {
    lang: 'en',
    slug: 'winterlight',
    title: 'Winterlight: a world premiere, and Petroushka',
    excerpt:
      "Hannah Selin's Tectonic Lullaby for piano quintet gets its first performance, and the evening closes with Stravinsky's Petroushka in a chamber arrangement. 11 December 2026.",
    // otra, para no repetir con la del paseo de entrada
    image: ARCHIVO + '20251212__MG_0071.jpg',
    status: 'publish',
    date: '2026-12-11',
    url: CALENDAR,
    tags: ['Winterlight', 'WorldPremiere', 'Stravinsky', 'NewYorkSeries'],
    body: `
The second New York Series production of the twelfth season.

## A first performance

The evening opens with the world premiere of Hannah Selin's Tectonic Lullaby, written for piano quintet.

## Petroushka, five players

It closes with Stravinsky's Petroushka in a chamber arrangement: the ballet reduced to the forces of the room, and the more exposed for it.

## December in New York

The DiMenna Center for Classical Music, 11 December 2026, 7:30 pm.
`,
  },

  {
    lang: 'en',
    slug: 'pressure-and-release',
    title: 'Pressure and Release: seven works, seven composers, one evening',
    excerpt:
      'An entire production given over to the open call, the first time CreArtBox has programmed a whole evening this way. 23 April 2027.',
    image: PHOTO + 'creartbox-fragile-form.jpg',
    status: 'publish',
    date: '2027-04-23',
    url: CALENDAR,
    tags: ['PressureAndRelease', 'CallForScores', 'NewMusic', 'NewYorkSeries'],
    body: `
The open call has become the spine of the season.

## Seven composers in one night

Yurui (Rain), Alex Burtzos, Luke Carlson, Gilad Cohen, Samantha Leigh Sack, Paul Novak and Sam Wu. Seven works, chosen from the open call, played in a single evening.

## Awarded before they reached us

Paul Novak and Sam Wu have both taken the ASCAP Foundation's Morton Gould Young Composer Award, Novak with the Leo Kaplan Award.

## Why a whole evening

Eleven of the works we play this year came through the open call, more than in any season before. In April we give it the stage on its own.

## Details

The DiMenna Center for Classical Music, 23 April 2027, 7:30 pm.
`,
  },

  {
    lang: 'en',
    slug: 'feverdream',
    title: 'Feverdream closes the twelfth season',
    excerpt:
      "Sibelius's Piano Quintet in G minor, and a score by Festival ADAR's composer in residence that reached New York through the open call. 7 May 2027.",
    image: PHOTO + 'creartbox-festival-adar.jpg',
    status: 'publish',
    date: '2027-05-07',
    url: CALENDAR,
    tags: ['Feverdream', 'Sibelius', 'NewYorkSeries', 'FestivalADAR'],
    body: `
The last of the four New York Series productions.

## Sibelius in G minor

The season closes with the Piano Quintet in G minor: early Sibelius, and rarely played.

## A score that travelled both ways

Zygmund de Somogyi is Festival ADAR's composer in residence. Their score reached CreArtBox through the open call, and it closes the season in New York.

## Royal Philharmonic Society, Fromm Foundation

De Somogyi is a Royal Philharmonic Society composer for 2025 and a Fromm Foundation fellow.

## Details

The DiMenna Center for Classical Music, 7 May 2027, 7:30 pm.
`,
  },

  // ── Currents · 30 de octubre de 2026 ─────────────────────────────────────
  // Los cinco siguientes son para empujar el próximo concierto. Todo lo que
  // dicen sale de creartbox.nyc/concerts/currents-2026.html y de about.html;
  // los precios, de la página de Eventbrite que enlaza la web.
  // Los dos últimos son solo para redes: no hay artículo detrás, llevan al
  // propio concierto, y por eso el carrusel es corto.


  {
    lang: 'en',
    slug: 'currents-joachim',
    estilo: 'cinta',
    title: 'Emilie-Anne plays two works that run back to the same man',
    excerpt:
      "Joseph Joachim received the dedication of Clara Schumann's Three Romances in 1853, and it was " +
      "Joachim who read the viola part of Brahms's A minor Trio in rehearsal. Both are on the " +
      'programme on 30 October.',
    pie: `Two of the works Emilie-Anne plays on the 30th run back to the same man, and he isn't on the programme.

Joseph Joachim was twenty-two in 1853 when Clara Schumann dedicated her Three Romances to him. The two of them toured the pieces around Germany and Britain.

Nearly forty years later it was Joachim again, on viola this time, who read through the alternative scoring of Brahms's A minor Trio before Simrock printed it. That's the version we play: viola instead of clarinet.

Two pieces, nearly four decades apart, and the same violinist standing behind both of them.

30 October at The DiMenna Center.

#CreArtBox #Brahms #ClaraSchumann`,
    // Emilie-Anne, en Threshold (6 de febrero de 2026, DiMenna): era la
    // única violinista de aquella noche, así que la foto es suya sin duda.
    image: THRESHOLD + '_MG_0013.jpg',
    status: 'publish',
    // El 27 y no el 30: el día del concierto toca decir «esta noche», no
    // contar quién era Joachim. Esta es una pieza de la cuesta de antes.
    date: '2026-10-27',
    url: CURRENTS,
    tags: ['Currents', 'ClaraSchumann', 'Brahms', 'DiMennaCenter'],
    body: `
Three of the five works on Currents run through the same small circle of people.

## 1853, a dedication

Clara Schumann's Three Romances, Op. 22 carry a dedication to the violinist Joseph Joachim.

## The trio, played with viola

It was Joachim who read the viola part of Brahms's Trio in A minor, Op. 114 in rehearsal. That is the scoring heard here: viola, cello and piano.

## 1844, Clara at the Gewandhaus

Clara Schumann gave the first public performance of her husband's Piano Quartet in E-flat major at the Leipzig Gewandhaus in 1844. It closes the evening, twenty-eight minutes of it.

## Details

Currents. 30 October 2026, 7:30 pm. The DiMenna Center, New York.
`,
  },

  {
    lang: 'en',
    slug: 'currents-laminar-flow',
    title: 'A title taken from fluid dynamics',
    excerpt:
      "Laminar flow is movement in smooth parallel layers, with no mixing between them. The opposite of turbulence. Eric Moe's Laminar Flow in Upsidedown Creek reached the season through the open call.",
    // los tubos de luz en capas paralelas, que es literalmente el flujo laminar
    image: ARCHIVO + '20251212__MG_0058.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: CURRENTS,
    tags: ['Currents', 'EricMoe', 'CallForScores', 'NewMusic'],
    body: `
Five minutes, and a title that explains itself once you know the term.

## Laminar flow

In fluid dynamics, movement in smooth parallel layers with no mixing between them. The opposite of turbulence.

## It came in through the open call

Eric Moe's score reached the season through CreArtBox's open Call for Scores, which has run since the ensemble's first season. Eleven works this season arrived the same way, more than in any season before.

## Eric Moe

A Guggenheim fellow, honoured by the American Academy of Arts and Letters.

## Details

Currents. 30 October 2026, 7:30 pm. The DiMenna Center, New York.
`,
  },


  // Solo redes, para la semana del concierto.
  {
    lang: 'en',
    slug: 'currents-the-night',
    // El orden de la noche, compuesto. Sale tal cual del cuadernillo
    // (downloads/currents-2026-program.pdf), duraciones incluidas.
    estilo: 'tabla',
    tabla: {
      rotulo: '30 October 2026 · 7:30 pm · The DiMenna Center',
      filas: [
        { quien: 'Guillermo Laporta', que: 'Brown Leaves Moving', cifra: '4′' },
        { quien: 'Johannes Brahms', que: 'Trio in A minor, Op. 114', cifra: '8′' },
        { quien: 'Eric Moe', que: 'Laminar Flow in Upsidedown Creek', cifra: '5′' },
        { quien: 'Clara Schumann', que: 'Three Romances, Op. 22', cifra: '11′' },
        { quien: 'Robert Schumann', que: 'Piano Quartet in E-flat major, Op. 47', cifra: '28′' },
      ],
      total: { que: 'Total playing time', cifra: '56′' },
    },
    kind: 'social',
    title: 'Sixty minutes, no interval',
    excerpt:
      'Currents runs about an hour, played straight through. Tickets from $15. The premium seats are the closest rows to the players, and come with a small treat on the night, usually chocolate.',
    // la sala con el público delante y el grupo tocando: es lo que se vende
    image: ARCHIVO + '20251212__DSC0350.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: CURRENTS,
    tags: ['Currents', 'Tickets', 'DiMennaCenter'],
    body: `
What the night looks like, in practical terms.

## The shape of it

Five works, about sixty minutes, played without intermission. The DiMenna Center for Classical Music, 450 W 37th St, 7:30 pm.

## Tickets

From $15, through Eventbrite. The premium tier is the closest rows to the players, and comes with a small treat on the night, usually chocolate.
`,
  },

  // Solo redes. La imagen es un mockup del cuadernillo abierto, montado con
  // sus dos páginas de verdad: la foto y el programa con los tiempos. Se
  // regenera con scratchpad/mockup.js si cambia el PDF.
  {
    lang: 'en',
    slug: 'currents-programme-online',
    kind: 'social',
    title: 'Read the program before the concert!',
    excerpt:
      'The printed booklet for Currents is on the site: all sixteen pages, the program with the timing of every work, and the notes. Turn the pages, zoom in, or download the PDF.',
    image: MOCKUP,
    status: 'publish',
    date: '2026-10-30',
    url: PROGRAMA,
    tags: ['Currents', 'ConcertProgramme', 'DiMennaCenter', 'NewYorkSeries'],
    body: `
Normally the program reaches you five minutes before the lights go down.

## New on the site

The printed booklet for Currents is online, all sixteen pages. Turn the pages, zoom in, read it full screen, or download the PDF.

## What is in it

The program with the timing of every work, fifty-six minutes of music in total. Notes on all five pieces. And the photographs from the series.

## Things you can find out before you come

Why Brown Leaves Moving begins with the players offstage. What laminar flow is. How Joseph Joachim ties together three of the five works.

## Details

Currents. 30 October 2026, 7:30 pm. The DiMenna Center, New York.
`,
  },

  // Escrito con sus respuestas del 2 de octubre. El retrato es su foto de
  // prensa oficial, descargada de su representante (stokar.com) y servida
  // desde este repositorio, porque el canvas necesita el mismo dominio.
  // El crédito «Photo: Mara Rago» va en la entradilla a propósito: así entra
  // en todos los pies de foto automáticos y no depende de que alguien se
  // acuerde de ponerlo.
  {
    lang: 'en',
    slug: 'eric-moe-interview',
    kind: 'entrevista',
    title: 'Eight questions for Eric Moe',
    excerpt:
      'The piece that opens our twelfth season is named after a stream in Montana. Its composer on laminar flow, a tango with three dancers, and what to listen for near the end. Photo: Mara Rago.',
    image: MOE,
    status: 'publish',
    date: '2026-10-02',
    url: ENTREVISTA_MOE,
    tags: ['EricMoe', 'Currents', 'CallForScores', 'NewMusic'],
    body: `
We have interviewed the composer Eric Moe because on 30 October we play his Laminar Flow in Upsidedown Creek at The DiMenna Center for Classical Music, in Currents, the first night of our twelfth season. The piece reached the programme through our open Call for Scores, and it sits that evening between Brahms and both Schumanns. Moe is a Guggenheim fellow, honoured by the American Academy of Arts and Letters, and co-directs Music on the Edge in Pittsburgh, which means he reads scores from the other side of the desk as well. Four weeks before the concert, we sent him eight questions.

Where did the title Laminar Flow in Upsidedown Creek come from?

“Laminar flow” is a term used to describe a fluid moving smoothly without eddies or turbulence. Upsidedown Creek is a short steep stream that dives off the Lake Plateau in the Beartooth Mountains of Montana into the Boulder River. (A hiking trail that ascends along the stream has a famous inverted sign at the trailhead). I admit that there’s not a lot of laminar flow in the actual Upsidedown Creek – I’ve been up and down the trail more than once – but my piece has a lot of quietly syncopated, gently flowing music with melodies that often turn upside down while re-examining themselves.

What was the initial idea or image behind the piece?

The visual idea of the piece came from looking at mountain streams and taking delight in the places where water sheets transparently over rocks and streambed. The kinetic idea of the piece came from performing and listening to suave tango-inspired compositions by Pablo Ortiz; a tango with three dancers.

What does “flow” mean to you musically?

“Flow” suggests more or less continual, more or less gentle rhythmic movement to me; a flow state is something I seek when writing music.

Is there something in the piece you would especially like listeners to notice or listen for?

It’s not essential to the enjoyment of the piece, but there’s a place near the end of the piece that I think is pretty cool. In the piece up to that point, there are essentially two melodic lines that the instruments take turns expressing. These two streams that have been flowing side by side – the soprano and bass lines – are finally joined by a third in a gentle apotheosis.

How does nature, science, or the physical world influence the way you think about music?

As the title suggests, I’m a nature-lover and a science-lover as well as a music-, art-, and literature-lover. I look to experience the sublime wherever I can find it in all its various forms and flavors.

What are some recent or upcoming projects you’re particularly excited about and would like to share?

My song cycle Girl Soup, a setting of surreal feminist poems by the poet Sawako Nakayasu, will be premiered on December 6 in New York by soprano Anna Elder and pianist Huizi Zhang (details forthcoming). A portrait CD, No Time Like The Present, including my new piano concerto has just been released by bmop/sound.

What are you most curious to hear in CreArtBox’s interpretation of the piece?

I’m very excited to hear what will be (as far as I know) only the second performance of the trio. The piece provides an intimate experience for the performers, who are (to an unusual degree) completing or echoing one another’s musical thoughts throughout. Additionally, I’m curious to hear Laminar Flow in the context of pieces I have loved and studied for many years (Schumann, Brahms).

You co-direct Music on the Edge and have been programming new music in Pittsburgh for years. From the other side of the desk: what makes you say yes to a score you have never heard of?

In considering new work for programming, in addition to pieces with engaging, unsurprising qualities – rhythmic interest (unrelated to tempo, btw), fresh musical ideas, dramatic pacing – I admire and favor pieces that will provide a rewarding experience for the performer. This doesn’t mean that the piece has to be easy or even idiomatically written for the instruments – after all, overcoming challenges is part of the joy of musicmaking. But if the performers are excited about the piece, then listeners are bound to be excited as well.
`,
  },

  // ── La tanda del 19 de octubre al 14 de noviembre ──────────────────────
  //
  // Estas llevan `pie`: el texto va escrito entero y a mano, y el compositor
  // de pies no lo toca. El plan venía de fuera y el registro es suyo; lo que
  // se ha hecho aquí es devolverle el detalle concreto, que es lo que lo
  // separa de un texto que podría haber escrito cualquiera. Cada dato está
  // comprobado contra creartbox.nyc o contra el cuadernillo; lo que no se ha
  // podido comprobar va dicho en `falta`, no publicado como si tal cosa.
  //
  // Casi todas son foto y pie, sin carrusel: son posts que se leen, no
  // piezas de diseño. Por eso `estilo: 'limpia'` y cuerpo de una línea.

  {
    lang: 'en',
    slug: 'kuopio-residency',
    kind: 'social',
    estilo: 'limpia',
    title: 'Five days in Kuopio',
    excerpt:
      'Kuopio Conservatory asked for a look at how we work rather than a recital, so we gave them ' +
      'a concert, a week of masterclasses, and a workshop that ended with a cellist playing alone ' +
      'in a darkened hall, surrounded by lamps and projections responding to her music.',
    image: IMG + 'kuopio/kuopio-workshop.jpg',
    // Las cinco de la noticia, en el orden en que se cuenta la semana:
    // el taller, el concierto, las clases, la charla y las preguntas.
    fotos: [
      IMG + 'kuopio/kuopio-workshop.jpg',
      IMG + 'kuopio/kuopio-concert.jpg',
      IMG + 'kuopio/kuopio-coaching.jpg',
      IMG + 'kuopio/kuopio-talk.jpg',
      IMG + 'kuopio/kuopio-questions.jpg',
    ],
    status: 'publish',
    date: '2026-10-19',
    url: 'https://creartbox.nyc/news/five-days-in-kuopio.html',
    tags: ['Kuopio', 'Finland', 'ChamberMusic'],
    pie: `Five days in Kuopio, Finland 🇫🇮

We were invited by Kuopio Conservatory to share something a little different. Not just a concert or masterclasses, but a look at how we work at CreArtBox, bringing music together with light, video, and other visual elements.

Guillermo and Josefina performed at the Kuopio Music Centre, with music by Lili Boulanger, Messiaen, Janáček, Debussy, Clara Schumann, Falla, and Frank Martin. We also spent the week teaching flute and piano masterclasses and talking with students about everything that goes into making a performance.

One of our favorite moments was the workshop. We experimented with how light, movement, and video can change the way we experience music. We looped a few bars of Falla, moved around the space, played with different lighting ideas, and ended up with a cellist playing alone in a darkened hall, surrounded by lamps and projections responding to her music.

It was great to see how quickly the students started coming up with their own ideas.

A big thank you to everyone at Kuopio Conservatory for inviting us and being so open to experimenting with us. We'd love to come back!

We wrote a little more about the experience (and shared some photos) on our website. Full story at the link in bio!

#CreArtBox #Kuopio #ChamberMusic`,
    body: `A five-day residency at the Kuopio Conservatory, Finland.`,
  },
  {
    lang: 'en',
    slug: 'currents-sketched-in-october',
    pegatinas: [{ texto: '184 years later' }, { texto: 'Tickets in bio', senal: true }],
    kind: 'social',
    estilo: 'duo',
    kicker: 'Did you know?',
    // Historia y no post: la coincidencia de fechas es buenísima para un
    // día y no para quedarse en la rejilla del perfil para siempre.
    formato: 'historia',
    // Mismo arreglo que las otras dos: sin pie, «sketched» a secas no dice
    // quién ni qué. La coincidencia de fechas tiene que caber igual.
    title: 'Schumann finished sketching his Piano Quartet on 30 October 1842. We play it 184 years later, to the day.',
    excerpt:
      'He sketched the Piano Quartet between 24 and 30 October 1842 and copied it out in November. ' +
      'We play it on 30 October, a hundred and eighty-four years to the day after he put the last ' +
      'sketch down.',
    image: ARCHIVO + '20251212__MG_0093.jpg',
    status: 'publish',
    date: '2026-10-20',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    tags: ['RobertSchumann', 'Currents', 'ChamberMusic'],
    pie: `We only noticed this while putting the programme notes together.

1842 was Schumann's chamber music year: three string quartets, the Piano Quintet, this Piano Quartet, and the trio that later became the Phantasiestücke.

He sketched the Quartet between 24 and 30 October, then spent most of November copying it out.

We play it on 30 October. A hundred and eighty-four years to the day after he put the last sketch down.

Nobody planned that. We just liked the piece.

30 October at The DiMenna Center. Tickets in bio.

#RobertSchumann #CreArtBox #ChamberMusic`,
    body: `Sketched 24 to 30 October 1842. Played 30 October 2026.`,
  },
  {
    lang: 'en',
    slug: 'currents-full-house',
    kind: 'social',
    estilo: 'limpia',
    title: 'Every one of the 240 seats was filled last year',
    excerpt:
      'Last year our season opening filled Mary Flagler Cary Hall, all two hundred and forty seats. ' +
      'On 30 October we open the twelfth season in the same room and we would love to do it again.',
    // La pide él: la primera fila esperando, con la luz cruzando el suelo.
    image: ARCHIVO + '20231114_001.jpg',
    status: 'publish',
    date: '2026-10-21',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    falta:
      'Un detalle por si te importa: la foto es de noviembre de 2023, no de la apertura del año ' +
      'pasado de la que habla el texto. El pie no la fecha, así que no dice nada falso, pero si ' +
      'tienes una de esa noche queda mejor.',
    tags: ['Currents', 'DiMennaCenter', 'NYCConcerts'],
    pie: `Last year, every single one of the 240 seats at The DiMenna Center was filled for our season opening. Can we do it again? 🤞

There's always something special about the first concert of the season. Seeing familiar faces again, meeting people who are coming for the first time, and finally sharing the music we've been working on for months.

On October 30, we're opening our 12th season at Mary Flagler Cary Hall, and we'd love to have you there.

Last year's opening was such a wonderful evening, and we're hoping to fill the hall again. So if you're planning to come, now is a good time to get your tickets!

📅 October 30 · 7:30 PM
📍 The DiMenna Center, NYC
🎟️ Tickets in bio!

#CreArtBox #DiMennaCenter #NYCConcerts #ChamberMusic`,
    body: `The room before it starts.`,
  },
  {
    lang: 'en',
    slug: 'currents-getting-ready',
    kind: 'social',
    estilo: 'limpia',
    title: 'Getting Currents ready',
    excerpt:
      'Rehearsals, scores, projections, lighting cues, and the small things that always take longer ' +
      'than anyone expects. Eight days to go.',
    // La elige él: el violín dejado en la silla en un descanso. Dice
    // «entre bastidores» mucho mejor que una foto de concierto.
    // La pide él: el grupo ensayando, ropa de calle y atriles. Cortada,
    // también a petición suya: en el plano general el grupo sale lejos.
    image: ARCHIVO + '20241211_DSC0103.jpg',
    encuadre: { x: 0.54, y: 0.56, zoom: 1.4 },
    status: 'publish',
    date: '2026-10-22',
    url: CURRENTS,
    falta:
      'La foto del ensayo de verdad llega el 28, cuatro días después de que salga esto, así que ' +
      'se queda con la que elegiste. Esa va al post del 28, que es el que gana con ser de ese día.',
    tags: ['Currents', 'ChamberMusic', 'DiMennaCenter'],
    pie: `Putting the 30th together.

Brahms, the Schumanns, a piece by Eric Moe that came in through the open call, and Guillermo's video running underneath all of it.

There's always more going on than the programme suggests. Rehearsals, yes, but also projection cues, lighting, and the little things that take three times as long as you planned for.

Eight days to go. See you at DiMenna.

#CreArtBox #Currents #ChamberMusic`,
    body: `What the week before a concert actually looks like.`,
  },
  {
    lang: 'en',
    slug: 'currents-brahms',
    pegatinas: [{ texto: '30 Oct · 7:30 pm' }, { texto: 'Tickets in bio', senal: true }],
    kind: 'social',
    estilo: 'duo',
    kicker: 'Did you know?',
    formato: 'historia',
    // Una historia no lleva pie: si el titular dice «he», no se sabe quién.
    title: 'Brahms had announced he was finished. Then he heard one clarinettist.',
    excerpt:
      'In December 1890 he told his publisher he was done composing. Then in March 1891 he heard a ' +
      'clarinettist in Meiningen, and that summer he wrote two more pieces. We play the first ' +
      'movement of one of them on 30 October.',
    image: ARCHIVO + '20251017__MG_0688.jpg',
    status: 'publish',
    date: '2026-10-23',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    tags: ['Brahms', 'Currents', 'ChamberMusic'],
    pie: `A small Brahms story.

By the end of 1890 he had written to his publisher saying he was finished composing. He meant it. He had put his affairs in order.

Then in March 1891 he heard Richard Mühlfeld, the principal clarinettist at the Meiningen court orchestra, and changed his mind. That summer at Bad Ischl he wrote two new pieces for him: the Clarinet Quintet and the A minor Trio.

Here's the part we like. When Simrock published the Trio in 1892, Brahms offered a viola part as an alternative to the clarinet, and both versions were tried out in rehearsal before it went to print, with Joachim on viola.

That's the version Matthew, Julia and Josefina play on the 30th.

Tickets in bio.

#Brahms #CreArtBox #ChamberMusic`,
    body: `One clarinettist changed his mind about retiring.`,
  },
  {
    lang: 'en',
    slug: 'currents-offstage',
    kind: 'social',
    estilo: 'marco',
    title: 'The concert starts before anyone is on stage',
    excerpt:
      'Brown Leaves Moving begins with the players offstage. They walk on as they play, over an ' +
      'electronic background, so the group assembles in front of you instead of waiting for you.',
    // La pide él: el público mirando al escenario todavía vacío, que es
    // exactamente el momento del que habla la pieza.
    image: ARCHIVO + '20241211_DSC0114.jpg',
    status: 'publish',
    date: '2026-10-24',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    tags: ['ContemporaryMusic', 'Currents', 'CreArtBox'],
    pie: `We open with a piece that starts before anyone is on stage.

Brown Leaves Moving is Guillermo's, from a suite first performed in Queens in 2018. The four players begin offstage and walk on while playing, over an electronic background, so the ensemble forms in front of the audience instead of sitting there waiting for it.

It's four minutes long. It's a strange way to begin a concert and we wouldn't start any other way.

30 October, The DiMenna Center.

#CreArtBox #ContemporaryMusic #Currents`,
    body: `The players walk on while already playing.`,
  },
  {
    lang: 'en',
    slug: 'currents-clara',
    pegatinas: [{ texto: '30 Oct · The DiMenna Center' }, { texto: 'Tickets in bio', senal: true }],
    kind: 'social',
    estilo: 'duo',
    kicker: 'Did you know?',
    formato: 'historia',
    // Ni «she» ni «these» se entienden sin pie, y una historia no lleva pie.
    title: 'Clara Schumann wrote her Three Romances in 1853. After 1854 she wrote almost nothing new.',
    excerpt:
      'She wrote the Three Romances in 1853 and dedicated them to Joachim. Brahms knocked on the ' +
      'door that September; Robert collapsed the following February. After that she wrote almost ' +
      'nothing new.',
    image: ARCHIVO + '20251017__MG_0620.jpg',
    status: 'publish',
    date: '2026-10-25',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    tags: ['ClaraSchumann', 'WomenComposers', 'Currents'],
    pie: `We've been working on Clara Schumann's Three Romances.

She wrote them in Düsseldorf in 1853 and dedicated them to Joseph Joachim, who was twenty-two at the time. The two of them toured the pieces around Germany and Britain, including a performance for King George V, who by Joachim's account loved them.

The dates are the part that stays with you. Brahms, twenty years old, arrived at the Schumanns' door on 30 September that same year. Robert collapsed the following February. From then on Clara wrote almost nothing new and gave her working life to performing and to editing his music.

These Romances are among the last original pieces she wrote. Eleven minutes, played by Emilie-Anne and Josefina.

30 October at DiMenna.

#ClaraSchumann #CreArtBox #WomenComposers`,
    body: `Three pieces from 1853, dedicated to Joachim.`,
  },
  {
    lang: 'en',
    slug: 'currents-schumann-quartet',
    pegatinas: [{ texto: '30 Oct · 7:30 pm' }, { texto: 'Tickets in bio', senal: true }],
    kind: 'social',
    estilo: 'duo',
    kicker: 'Did you know?',
    // Historia y no post, como Brahms y Clara: las cuatro curiosidades van
    // juntas a los circulitos y el muro se queda con lo que invita.
    formato: 'historia',
    // Lo pide la partitura, no la intérprete: nombrarla a ella lo convertía
    // en una manía suya cuando es una instrucción de Schumann.
    title: 'Schumann asks the cellist to retune mid-movement',
    excerpt:
      'The slow movement of the Piano Quartet ends on a low B flat the cello cannot reach, so ' +
      'Schumann has the player tune the bottom string down a whole step mid-movement, hold the ' +
      'note under the final bars, and tune it back up for the finale.',
    image: ARCHIVO + '20251212__MG_0047.jpg',
    status: 'publish',
    date: '2026-10-26',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    tags: ['RobertSchumann', 'Currents', 'ChamberMusic'],
    pie: `The piece we're most looking forward to, and a detail worth watching for.

Robert Schumann's Piano Quartet in E flat, Op. 47. Clara gave the public premiere at the Leipzig Gewandhaus on 8 December 1844, with Ferdinand David on violin and Niels Gade on viola. Almost two centuries later it closes our night.

The slow movement is the one. Schumann hands the melody to the cello, and then ends the movement underneath everything on a low B flat, a note the cello does not have.

So he writes in the fix. The cellist tunes the bottom C string down a whole step in the middle of the movement, holds that note under the final bars, and tunes it back up in time for the finale.

It serves the music and it inconveniences the cellist, and Schumann asked for it anyway.

Tickets in bio.

#RobertSchumann #CreArtBox #ChamberMusic`,
    body: `A note the instrument does not have.`,
  },
  {
    lang: 'en',
    slug: 'currents-two-days',
    kind: 'social',
    estilo: 'limpia',
    title: 'Two days to Currents',
    excerpt:
      'Friday 30 October, 7:30 pm, The DiMenna Center. Five works, about sixty minutes, no interval.',
    // la sala desde atrás, con público
    image: ARCHIVO + '20251212__DSC0352.jpg',
    status: 'publish',
    date: '2026-10-28',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    falta:
      'Esperando tu foto del ensayo del 28. Ahora lleva una de archivo; con una de ese mismo ' +
      'día, un «faltan dos días» pasa de anuncio a instantánea. Está programado, así que al ' +
      'cambiarla hay que rehacer la imagen y actualizarlo en Metricool.',
    tags: ['Currents', 'NYCConcerts', 'DiMennaCenter'],
    pie: `Two days to go.

Currents, this Friday at The DiMenna Center. Four players, five works, about an hour, straight through with no interval.

Brahms, Clara and Robert Schumann, Eric Moe, Guillermo Laporta. Video running the whole way.

The hall holds 240 and every seat was taken last year, so if you've been meaning to get a ticket this is the moment.

Friday 30 October, 7:30 pm. Tickets in bio.

#CreArtBox #NYCConcerts #Currents`,
    body: `Two days out.`,
  },
  {
    lang: 'en',
    slug: 'currents-tomorrow',
    kind: 'social',
    // Nota suya: «pon solo texto, diseña una especie de cartel», y luego
    // «más tipo el programa de mano con el trapecio amarillo». Es su propia
    // portada, medida del PDF del cuadernillo.
    estilo: 'programa',
    kicker: 'Tomorrow · Opening night',
    cartel: {
      lineas: [
        'Friday, October 30, 2026 · 7:30 pm',
        '450 W 37th St, New York',
        'Guillermo Laporta · Johannes Brahms · Eric Moe',
        'Clara Schumann · Robert Schumann',
      ],
    },
    trapecio: {
      rotulo: 'New York Series',
      sub: 'at The DiMenna Center for Classical Music',
      titulo: '12th season',
      pie: '2026 / 27',
    },
    title: 'Currents',
    excerpt:
      'Currents. Friday 30 October, 7:30 pm. The DiMenna Center, 450 W 37th Street. Tickets from $15.',
    image: '',
    status: 'publish',
    date: '2026-10-29',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    falta:
      'Cartel dibujado aquí, sin foto, como pediste. Si tenéis uno oficial y lo preferís, ' +
      'mándamelo y lo pongo en su lugar.',
    tags: ['Currents', 'NYC', 'DiMennaCenter'],
    pie: `Tomorrow.

Currents
Friday 30 October · 7:30 pm
The DiMenna Center, 450 W 37th Street

Our twelfth New York season starts here. Tickets from $15, and the cheapest seats are still the same room as the expensive ones.

If you've been thinking about it, we'd love to see you.

Tickets in bio.

#CreArtBox #Currents #NYC`,
    body: `The night before.`,
  },
  {
    lang: 'en',
    slug: 'currents-today',
    kind: 'social',
    // Nota suya: «no todo solo texto, bien diseñado». Se lee como que este
    // NO va en tipografía sola, así que mantiene la foto y gana titular:
    // antes era la foto pelada y sin una palabra encima.
    estilo: 'cinta',
    title: 'Tonight, 7:30, The DiMenna Center',
    excerpt:
      'Currents, tonight at 7:30 pm at The DiMenna Center. Doors at seven. Tickets on the door if ' +
      'there are any left.',
    image: ARCHIVO + '20251212__DSC0345.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: ENTRADAS,
    cta: 'Tickets at the link in bio ↗',
    falta:
      'Esta hay que hacerla el día: una foto de la prueba de sonido o de la sala vacía antes de ' +
      'abrir. Es la que más gana con ser de verdad de ese rato.',
    tags: ['Currents', 'NYCClassicalMusic', 'DiMennaCenter'],
    pie: `Concert day.

We're at The DiMenna Center tonight for Currents, the first New York night of the season. Sound check this afternoon, video cues after that, doors at seven.

Brahms, the Schumanns, a piece from our open call, and one of Guillermo's. An hour, no interval.

If you're in the city with nothing on tonight, come.

7:30 pm · 450 W 37th Street

Tickets in bio.

#CreArtBox #NYCClassicalMusic`,
    body: `Tonight at 7:30.`,
  },
  {
    lang: 'en',
    slug: 'currents-thanks',
    kind: 'social',
    estilo: 'limpia',
    title: 'Thank you for coming to Currents',
    excerpt: 'Photographs from Friday at The DiMenna Center.',
    image: ARCHIVO + '20251017__MG_0641.jpg',
    status: 'draft',
    date: '2026-11-01',
    url: CALENDAR,
    cta: 'More at creartbox.nyc ↗',
    falta:
      'Marcador de sitio. Hay que cambiar la foto por las del 30 y reescribir el pie con lo que ' +
      'pasó de verdad: no tiene sentido darlo por escrito antes de que ocurra.',
    tags: ['Currents', 'DiMennaCenter', 'ChamberMusic'],
    pie: `Thank you.

A few photographs from Friday at The DiMenna Center. We opened the twelfth New York season with Currents: Laporta, Brahms, Moe, Clara Schumann, Robert Schumann, straight through.

Thanks to everyone who came out, and to Josefina, Emilie-Anne, Matthew and Julia for the work that went into it.

Next stop: Illinois.

#CreArtBox #Currents #ChamberMusic`,
    body: `Write this one properly after the concert.`,
  },
  {
    lang: 'en',
    slug: 'illinois-preview',
    kind: 'social',
    estilo: 'limpia',
    title: 'Next stop: Illinois',
    excerpt:
      'Josefina Urraca, Emilie-Anne Gendron and guest cellist Ana Kim open the Engelbach-Hart ' +
      'Music Festival at Illinois College on 6 November. Admission is free.',
    image: ARCHIVO + '20250207_08.jpg',
    status: 'publish',
    date: '2026-11-03',
    url: 'https://creartbox.nyc/concerts/illinois-college-piano-trio-2026.html',
    cta: 'Details at creartbox.nyc ↗',
    falta:
      'Mejor una foto de las tres que van: Josefina, Emilie-Anne y Ana Kim. De Ana Kim no tengo ' +
      'ninguna en la web.',
    tags: ['IllinoisCollege', 'PianoTrio', 'ChamberMusic'],
    pie: `Next stop: Illinois.

On Friday Josefina, Emilie-Anne and guest cellist Ana Kim open the Engelbach-Hart Music Festival at Illinois College.

The programme is almost entirely early work. Lili Boulanger, Rachmaninoff and Shostakovich all wrote their pieces on it while they were still teenagers. Then Nadia Boulanger, Bloch, Kurtág, and Andrea Casarrubios's Silbo and 24 Mozas.

The festival was a gift from the Engelbach and Hart families to the town, so admission is free. You just reserve a seat.

6 November, 7:30 pm. Rammelkamp Chapel, Jacksonville.

#CreArtBox #IllinoisCollege #ChamberMusic`,
    body: `A piano trio programme of early works.`,
  },
  {
    lang: 'en',
    slug: 'illinois-today',
    kind: 'social',
    estilo: 'cifra',
    cifra: {
      rotulo: 'Rammelkamp Chapel · Illinois College',
      // 16: Shostakóvich nació en septiembre de 1906 y el Trío Op. 8 es de
      // 1923. Es el más joven de los tres y el único con fecha redonda.
      valor: '16',
      pie: 'was how old Shostakovich was when he wrote tonight’s piano trio. Most of this programme is teenage work.',
    },
    title: 'Most of tonight was written by teenagers',
    excerpt:
      'Lili Boulanger was eighteen when she wrote her Nocturne, Rachmaninoff eighteen for the ' +
      'Trio élégiaque, Shostakovich sixteen for his first piano trio. Tonight in Jacksonville, free.',
    image: ARCHIVO + '20250207_02.jpg',
    status: 'publish',
    date: '2026-11-06',
    url: 'https://creartbox.nyc/concerts/illinois-college-piano-trio-2026.html',
    cta: 'Details at creartbox.nyc ↗',
    tags: ['LiliBoulanger', 'IllinoisCollege', 'ChamberMusic'],
    pie: `We're in Jacksonville, Illinois today.

Something we only noticed putting this programme together: most of it was written by people who were barely out of school.

Lili Boulanger was eighteen when she wrote her Nocturne, in two days, in 1911. Rachmaninoff was eighteen for the Trio élégiaque. Shostakovich was sixteen for his first piano trio. Hearing them in one sitting is a strange and rather moving thing.

Josefina, Emilie-Anne and Ana play tonight at 7:30 at Rammelkamp Chapel. Admission is free.

#CreArtBox #IllinoisCollege #LiliBoulanger`,
    body: `Early works, played in one sitting.`,
  },
  {
    lang: 'en',
    slug: 'awave-tokyo',
    kind: 'social',
    estilo: 'limpia',
    title: 'A throwback to Tokyo',
    excerpt:
      'AWAVE premiered at the Ryogoku Concert Hall in 2019, our second collaboration with set and ' +
      'costume designer Mizuko Kaji.',
    image: IMG + 'awave-1.jpg',
    status: 'publish',
    date: '2026-11-08',
    url: CALENDAR,
    cta: 'More at creartbox.nyc ↗',
    tags: ['AWAVE', 'Tokyo', 'VisualConcert'],
    pie: `A throwback to Tokyo, 2019.

This is AWAVE at the Ryogoku Concert Hall: flute, piano, and a stage built with Mizuko Kaji, the set and costume designer we had already worked with once before.

It was a big thing to put together and a very good one. Brown Leaves Moving, which opens our concert in New York this season, comes from that same suite.

We'd bring it back given half a chance.

#CreArtBox #AWAVE #Tokyo`,
    body: `AWAVE at the Ryogoku Concert Hall, 2019.`,
  },
  {
    lang: 'en',
    slug: 'call-for-scores-reading',
    kind: 'social',
    estilo: 'bloque',
    title: 'We have been reading a lot of new music',
    excerpt:
      'Eleven works on this season came through the open Call for Scores, more than in any season ' +
      'before, and in April an entire evening goes to seven of those composers.',
    image: IMG + 'feat-circlenoir.jpg',
    status: 'publish',
    date: '2026-11-10',
    url: 'https://creartbox.nyc/concerts/pressure-and-release-2027.html',
    cta: 'More at creartbox.nyc ↗',
    tags: ['CallForScores', 'NewMusic', 'CreArtBox'],
    pie: `We've been reading a lot of new music.

Eleven works on this season came in through our open Call for Scores, more than any season before. One of them is Eric Moe's Laminar Flow in Upsidedown Creek, which we played on the 30th.

And on 23 April we're giving a whole evening to seven of them: Yurui (Rain), Alex Burtzos, Luke Carlson, Gilad Cohen, Samantha Leigh Sack, Paul Novak and Sam Wu. Seven premieres in one night.

Going through the submissions takes forever, and every year it turns up composers we'd never have found otherwise. Thank you to everyone who sent us something.

#CreArtBox #CallForScores #NewMusic`,
    body: `Eleven works this season came through the open call.`,
  },
  {
    lang: 'en',
    slug: 'libraries-queens',
    kind: 'social',
    estilo: 'limpia',
    title: 'Music where you do not need a ticket',
    excerpt:
      'Alongside the ticketed concerts we work with public libraries, schools and community ' +
      'institutions, and run subsidised tickets through the NYC Culture Pass and Queens Public Library.',
    image: ARCHIVO + '20251004_LNB_MUSICA_DE_CRISTAL_IVAN_MARTINEZ_7557.jpg',
    status: 'publish',
    date: '2026-11-12',
    url: 'https://creartbox.nyc/projects.html',
    cta: 'More at creartbox.nyc ↗',
    falta:
      'El plan decía «hemos tocado en varias sucursales de Queens» y «estamos cerrando fechas». Lo ' +
      'que la web documenta es el programa de bibliotecas y colegios y las entradas subvencionadas ' +
      'con la Queens Public Library, así que lo he escrito así. Si hay fechas cerradas, dímelas y ' +
      'lo concreto. Y la foto pide una de biblioteca de verdad.',
    tags: ['QueensPublicLibrary', 'Outreach', 'NYC'],
    pie: `Not everything we do needs a ticket.

Alongside the New York Series we work with public libraries, schools and community institutions, in New York and beyond. A library concert is a completely different thing from a hall: people walk in, sit down, and listen for half an hour without planning an evening around it.

And for the concerts that are ticketed, cost shouldn't be what stops you. We run subsidised seats through the NYC Culture Pass and with the Queens Public Library. Ticket revenue has never covered what a concert costs to put on, and donor support is what makes that possible.

If the price is the reason you're not coming, write to us at info@creartbox.nyc. Someone answers.

#CreArtBox #QueensPublicLibrary #NYC`,
    body: `Libraries, schools, and subsidised seats.`,
  },
  {
    lang: 'en',
    slug: 'winterlight-coming',
    kind: 'social',
    estilo: 'cinta',
    title: 'Winterlight is next',
    excerpt:
      'A world premiere by Hannah Selin, Ravel’s Ma Mère l’Oye, Oliver Caplan, and Petroushka in ' +
      'a chamber arrangement. 11 December at The DiMenna Center.',
    image: ARCHIVO + '20251212__MG_0124.jpg',
    status: 'publish',
    date: '2026-11-14',
    url: 'https://creartbox.nyc/concerts/tectonic-lullaby-2026.html',
    cta: 'Details at creartbox.nyc ↗',
    tags: ['Winterlight', 'HannahSelin', 'DiMennaCenter'],
    pie: `Already on to the next one.

Winterlight, 11 December at The DiMenna Center. It opens with the world premiere of Hannah Selin's Tectonic Lullaby for piano quintet, and finishes with Petroushka in a chamber arrangement.

In between: Ravel's Ma Mère l'Oye, and Oliver Caplan's Canciones de Monteverde for flute and string trio.

Petroushka with five of us is going to take some preparing. Quite a lot to learn before December.

More soon.

#CreArtBox #Winterlight #ChamberMusic`,
    body: `11 December, The DiMenna Center.`,
  },
];

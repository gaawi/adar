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
const RELEASE = 'https://creartbox.nyc/press/season-2026-27.html';
const CALENDAR = 'https://creartbox.nyc/concerts.html';
const CURRENTS = 'https://creartbox.nyc/concerts/currents-2026.html';
const PROGRAMA = 'https://creartbox.nyc/programs/currents-2026.html';
// Las páginas del programa se sirven sueltas, p01.jpg a p16.jpg, con
// Access-Control-Allow-Origin: *, así que el canvas del kit puede pintarlas.
const PAGINA = 'https://creartbox.nyc/assets/programs/currents-2026/';

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
    image: PHOTO + 'creartbox-in-performance.jpg',
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
    slug: 'currents-walk-on',
    title: 'The players walk on stage already playing',
    excerpt:
      'Currents opens with Brown Leaves Moving. The five musicians start offstage and walk on as they play, so the ensemble forms in front of the audience instead of waiting for it. 30 October, The DiMenna Center.',
    image: PHOTO + 'creartbox-in-performance.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: CURRENTS,
    tags: ['Currents', 'BrownLeavesMoving', 'DiMennaCenter', 'NewYorkSeries'],
    body: `
Most concerts begin with five people already seated.

## The stage is empty when the music starts

Brown Leaves Moving begins with the players offstage. They walk on as they play, over an electronic background, so the ensemble forms in front of the audience instead of waiting for it.

## Four minutes

It is the shortest work of the night and the first one. Guillermo Laporta wrote it in 2018, for the suite AWAVE, first performed in Queens that year.

## Why it opens

Currents assembles five works around a single idea: movement carried from one place to another. Two of them take the idea literally. This is the one that does it with the players themselves.

## Details

30 October 2026, 7:30 pm. The DiMenna Center for Classical Music, 450 W 37th St. About 60 minutes, played without intermission.
`,
  },

  {
    lang: 'en',
    slug: 'currents-joachim',
    title: 'One violinist connects three works on this programme',
    excerpt:
      "Joseph Joachim received the dedication of Clara Schumann's Three Romances in 1853, and it was Joachim who read the viola part of Brahms's A minor Trio in rehearsal. Both are on the programme on 30 October.",
    image: PHOTO + 'creartbox-currents-dimenna.jpg',
    status: 'publish',
    date: '2026-10-30',
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
    image: PHOTO + 'creartbox-ensemble.jpg',
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

  // Solo redes.
  {
    lang: 'en',
    slug: 'currents-who-plays',
    kind: 'social',
    title: 'Who is on stage on 30 October',
    excerpt:
      'Guillermo Laporta, flute. Josefina Urraca, piano. Emilie-Anne Gendron, violin. Matthew Cohen, viola. Julia Yang, cello.',
    image: PHOTO + 'creartbox-ensemble.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: CURRENTS,
    tags: ['Currents', 'DiMennaCenter', 'ChamberMusic'],
    body: `
Flute, piano, violin, viola and cello.

## The five

Guillermo Laporta, flute. Josefina Urraca, piano. Emilie-Anne Gendron, violin. Matthew Cohen, viola. Julia Yang, cello.

## Where they play the rest of the year

Gendron is a longtime member of the Momenta Quartet and one of the concertmasters of the Orpheus Chamber Orchestra. Cohen was a special prize winner at the Primrose International Viola Competition. Yang is a founding member of the Naumburg-winning Merz Trio.
`,
  },

  // Solo redes, para la semana del concierto.
  {
    lang: 'en',
    slug: 'currents-the-night',
    kind: 'social',
    title: 'Sixty minutes, no interval',
    excerpt:
      'Currents runs about an hour, played straight through. Tickets from $15. The premium seats are the closest rows to the players, and come with a small treat on the night, usually chocolate.',
    image: PHOTO + 'creartbox-currents-dimenna.jpg',
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

  // Solo redes. La imagen es la portada del propio programa. Dos avisos,
  // comprobados generando la imagen:
  //   · Quita «Portada con título y marca» en la barra. La portada ya trae su
  //     título, y el rótulo del kit cae justo encima del sello ámbar.
  //   · El 9:16 de Story es el que mejor le va: la página es 1080x1620, así
  //     que en 1:1 se pierde el pie con «12th season».
  {
    lang: 'en',
    slug: 'currents-programme-online',
    kind: 'social',
    title: 'You can read the programme before the concert',
    excerpt:
      'The printed booklet for Currents is on the site: all sixteen pages, the programme with the timing of every work, and the notes. Turn the pages, zoom in, or download the PDF.',
    image: PAGINA + 'p01.jpg',
    status: 'publish',
    date: '2026-10-30',
    url: PROGRAMA,
    tags: ['Currents', 'ConcertProgramme', 'DiMennaCenter', 'NewYorkSeries'],
    body: `
Normally the programme reaches you five minutes before the lights go down.

## New on the site

The printed booklet for Currents is online, all sixteen pages. Turn the pages, zoom in, read it full screen, or download the PDF.

## What is in it

The programme with the timing of every work, fifty-six minutes of music in total. Notes on all five pieces. And the photographs from the series.

## Things you can find out before you come

Why Brown Leaves Moving begins with the players offstage. What laminar flow is. How Joseph Joachim ties together three of the five works.

## Details

Currents. 30 October 2026, 7:30 pm. The DiMenna Center, New York.
`,
  },
];

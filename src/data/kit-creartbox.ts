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

Eleven of the works this season reached the programme through CreArtBox's open call for scores — more than in any season before. In April an entire evening is given over to it.

## A world premiere in December

Winterlight opens with the world premiere of Hannah Selin's Tectonic Lullaby for piano quintet, and closes with Stravinsky's Petroushka in a chamber arrangement.

## On tour: Illinois, Kentucky, the Hudson Valley

The ensemble opens the Engelbach-Hart Music Festival at Illinois College with free admission, plays the Chamber Music Society of Louisville, and brings Masked Sounds to Saugerties.

## Five days in Kuopio

Guillermo Laporta and Josefina Urraca spend five days at the Kuopio Conservatory in Finland, giving masterclasses and a workshop on building a chamber piece on stage — working closer to the audience, drawing on design and other disciplines.

## The season ends in Asturias

The seventh Festival ADAR runs from 2 to 15 August 2027 across rural Asturias: residencies, micro-concerts and stops in small towns, played in churches, hórreos and mountain villages rather than concert halls.
`,
  },

  {
    lang: 'en',
    slug: 'currents',
    title: 'Currents opens the season',
    excerpt:
      'Built around one idea — current: moving air, moving water, energy going from one place to another. 30 October 2026, The DiMenna Center, 7:30 pm.',
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

It closes with Stravinsky's Petroushka in a chamber arrangement — the ballet reduced to the forces of the room, and the more exposed for it.

## December in New York

The DiMenna Center for Classical Music, 11 December 2026, 7:30 pm.
`,
  },

  {
    lang: 'en',
    slug: 'pressure-and-release',
    title: 'Pressure and Release: seven works, seven composers, one evening',
    excerpt:
      'An entire production given over to the open call — the first time CreArtBox has programmed a whole evening this way. 23 April 2027.',
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

The season closes with the Piano Quintet in G minor — early Sibelius, and rarely played.

## A score that travelled both ways

Zygmund de Somogyi is Festival ADAR's composer in residence. Their score reached CreArtBox through the open call, and it closes the season in New York.

## Royal Philharmonic Society, Fromm Foundation

De Somogyi is a Royal Philharmonic Society composer for 2025 and a Fromm Foundation fellow.

## Details

The DiMenna Center for Classical Music, 7 May 2027, 7:30 pm.
`,
  },
];

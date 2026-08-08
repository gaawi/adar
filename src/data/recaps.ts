// Recuerdos por concierto ("cómo se vivió"): página propia en la web
// (archivo) + enlaces a redes de cada concierto ya celebrado. Clave =
// número de evento ("01", "02"...), la misma que usan EVENTS (programa) y
// ADAR26_ROWS (home): una única fuente de verdad para ambas superficies.
//
//   page      → slug de la página del concierto (misma en ES/EN/AST); el
//               enlace se construye como /{lang}/{page}/
//   instagram → reel/post concreto
//   youtube   → vídeo del concierto
//   photos    → álbum de fotos
export interface Recap {
  page?: string;
  instagram?: string;
  youtube?: string;
  photos?: string;
}

export const RECAPS: Record<string, Recap> = {
  // 01 · De danzas y sonatas (recital de clave · La Figal de Xugabolos)
  '01': {
    page: 'de-danzas-y-sonatas-la-figal-de-xugabolos',
    instagram: 'https://www.instagram.com/reel/Dbsb6HUIVE-/',
  },
  // 02 · La forma de la memoria (Parador de Corias)
  '02': {
    page: 'la-forma-de-la-memoria-parador-de-corias',
    instagram: 'https://www.instagram.com/reel/DbvDkAEoQrP/',
  },
  // 04 · Umbral Zero (Aula del Oro, Belmonte de Miranda)
  '04': {
    page: 'umbral-zero-aula-del-oro',
  },
};

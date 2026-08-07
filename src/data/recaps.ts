// Recuerdos por concierto ("cómo se vivió"): enlaces a redes de cada
// concierto ya celebrado. Clave = número de evento ("01", "02"...), la
// misma que usan EVENTS (programa) y ADAR26_ROWS (home), de modo que es una
// única fuente de verdad para ambas superficies.
//
// Rellena aquí cada concierto conforme se publiquen los contenidos:
//   instagram → enlace a un reel/post concreto
//   youtube   → enlace al vídeo del concierto
//   photos    → enlace a un álbum de fotos
export interface Recap {
  instagram?: string;
  youtube?: string;
  photos?: string;
}

export const RECAPS: Record<string, Recap> = {
  // 01 · De danzas y sonatas (recital de clave)
  '01': { instagram: 'https://www.instagram.com/reel/Dbsb6HUIVE-/' },
  // 02 · La forma de la memoria (Parador de Corias)
  '02': { instagram: 'https://www.instagram.com/reel/DbvDkAEoQrP/' },
};

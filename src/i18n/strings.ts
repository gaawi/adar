export type Lang = 'es' | 'en' | 'ast';

export const LANGS: Lang[] = ['es', 'en', 'ast'];

export const LANG_NAMES: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  ast: 'Asturianu',
};

export const HOME_SLUG: Record<Lang, string> = {
  es: 'adar',
  en: 'adar-festival',
  ast: 'festival-adar',
};

export const T = {
  read_more: { es: 'Leer más', en: 'Read more', ast: 'Lleer más' },
  all_actions: { es: 'Todas las acciones', en: 'All actions', ast: 'Toles aiciones' },
  tags: { es: 'Etiquetas', en: 'Tags', ast: 'Etiquetes' },
  categories: { es: 'Categorías', en: 'Categories', ast: 'Categoríes' },
  back: { es: 'Volver', en: 'Back', ast: 'Volver' },
  contact: { es: 'Contacto', en: 'Contact', ast: 'Contautu' },
  newsletter: { es: 'Newsletter', en: 'Newsletter', ast: 'Newsletter' },
} as const;

export function t(key: keyof typeof T, lang: Lang): string {
  return T[key][lang];
}

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// A photo alone in a paragraph becomes a figure with its caption (the alt
// text) underneath, so blog photos carry their captions (Nov 26).
function fotosConPie() {
  const esImg = (k) => k.type === 'element' && k.tagName === 'img';
  const vacio = (k) => k.type === 'text' && !k.value.trim();
  const recorrer = (nodo) => {
    if (!nodo.children) return;
    nodo.children = nodo.children.flatMap((c) => {
      if (c.type === 'element' && c.tagName === 'p') {
        const hijos = c.children.filter((k) => !vacio(k));
        if (hijos.length && hijos.every(esImg)) {
          return hijos.map((img) => ({
            type: 'element', tagName: 'figure', properties: { className: ['foto-pie'] },
            children: [img, ...(img.properties && img.properties.alt
              ? [{ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: String(img.properties.alt) }] }]
              : [])],
          }));
        }
      }
      recorrer(c);
      return [c];
    });
  };
  return (arbol) => recorrer(arbol);
}

export default defineConfig({
  markdown: { rehypePlugins: [fotosConPie] },
  site: 'https://festivaladar.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ast'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      // Fuera del sitemap: herramientas internas y vistas previas de borradores.
      filter: (page) => !/\/(borradores|kit-redes|plan-residencias)\//.test(page),
    }),
  ],
});

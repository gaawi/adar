// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
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
      filter: (page) => !/\/(borradores|kit-redes)\//.test(page),
    }),
  ],
});

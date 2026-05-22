# Festival ADAR

Sitio web del Festival ADAR, migrado desde WordPress a Astro + Markdown + Vercel.

## Estructura

```
src/
  pages/               # Rutas Astro
    index.astro        # redirect a /es/adar/
    [lang]/            # rutas por idioma (es | en | ast)
      index.astro      # redirect a la home del idioma
      [...slug].astro  # páginas y posts dinámicos
      category/[slug].astro
      tag/[slug].astro
    404.astro
  layouts/
    BaseLayout.astro   # header + main + footer
  components/
    Header.astro       # menú multiidioma (lee _menus.json)
    Footer.astro       # footer con info de contacto
  content/
    pages/{es,en,ast}/<slug>.md   # 38 páginas
    posts/{es,en,ast}/<slug>.md   # 114 posts
    _menus.json        # menús resueltos por idioma
    _categories.json   # categorías
    _tags.json         # tags
  styles/
    global.css         # CSS extraído del sitio en vivo (Inspiro + custom)
  i18n/strings.ts
  content.config.ts    # esquema de colecciones (Zod)

public/
  fonts/               # 22 woff2 (Inter, Cormorant, Josefin, Onest, Work Sans)

scripts/
  migrate-wp.py        # parsea WordPress XML → markdown
  resolve-menus.py     # resuelve títulos/URLs de los menús
  strip-md-indent.py   # quita whitespace inicial de HTML en markdown

vercel.json            # config de deploy + redirects legacy
```

## Desarrollo

```sh
npm install
npm run dev      # localhost:4321
npm run build    # genera ./dist/
npm run preview  # previsualiza el build
```

## Migración de contenido

El contenido viene de la exportación WordPress WXR. Para re-migrar:

```sh
python3 scripts/migrate-wp.py /ruta/al/export.xml
python3 scripts/resolve-menus.py
python3 scripts/strip-md-indent.py
```

## Deploy

Conectar el repo a Vercel. Framework auto-detectado como Astro. No requiere variables de entorno para el sitio estático.

## Editar contenido

Cada página/post es un archivo `.md` con frontmatter YAML y cuerpo HTML. Editar directamente y hacer push activa el deploy automático.

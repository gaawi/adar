# Notas para Claude

## Publicar

Guillermo pidió el 7 de octubre de 2026 que **cada cosa terminada vaya a
`main` sin preguntar**. `main` es lo que sirve festivaladar.com, así que
llegar a `main` es llegar a producción.

El trabajo se desarrolla en la rama de la sesión y, cuando está probado, se
lleva a `main` en avance directo:

```
git push -u origin <rama>
git fetch origin main
git merge-base --is-ancestor origin/main HEAD   # comprobar antes
git push origin HEAD:main
```

Si `main` se ha movido, **no** forzar: rebasar la rama encima y repetir.

Decírselo en el mensaje, sí; pararse a preguntar, no. Sigue haciendo falta
preguntar antes de deshacer algo que ya esté publicado.

## El proyecto

- Astro estático, `trailingSlash: 'always'`, se despliega en Vercel.
- `npm run build` compila a `dist/`. No hay `astro check` instalado.
- Las páginas internas —`/kit-redes`, `/kit-redes-creartbox`, `/calendario`,
  `/borradores`— van detrás de una cookie `adar_preview` firmada, que
  comprueba el middleware. Desde fuera devuelven 302, así que para probarlas
  hay que servir `dist/` en local.
- El CMS es Sveltia, en `/admin`.
- `src/styles/global.css` arrastra el tema antiguo de WordPress (unas 14.000
  líneas). Pelea por especificidad: antes de añadir `!important`, mirar qué
  regla está ganando con `CSS.getMatchedStylesForNode`.

## El kit de redes

- Un solo componente, `src/components/KitRedes.astro`, para las dos marcas.
- Los datos: `src/data/kit-brands.ts` (marcas), `src/data/kit-adar.ts` y
  `src/data/kit-creartbox.ts` (entradas).
- El estado editorial de cada entrada lo escribe él desde el panel y vive en
  `src/data/revisiones-*.json`. **No cambiar ahí `estado` ni `nota`**: eso lo
  decide él. El `titulo` sí es un reflejo del dato y se puede refrescar.
- Se usa casi siempre desde un iPhone 16 Pro con Brave o Chrome. Cualquier
  cambio se prueba a 402×874 antes de darlo por bueno.

## Cómo probar

Chromium está en `/opt/pw-browsers/chromium` y Playwright en
`/opt/node22/lib/node_modules/playwright`. El navegador de la caja **no sale
a internet**: las fotos y las fuentes se interceptan con `ctx.route()`.

Medir a ciegas engaña: si un elemento está fuera de la ventana,
`boundingBox()` y `elementFromPoint()` dan falsos negativos. Hacer captura y
mirarla.

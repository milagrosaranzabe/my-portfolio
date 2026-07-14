# Contrato: Marcado bilingüe (`data-lang`)

Convención que deben respetar todo el copy de `index.html` y `assets/js/i18n.js` (FR-012, FR-013, FR-014 de `001-site-structure`).

## Regla

Cada nodo de texto visible se declara dos veces, una por idioma, con un atributo `data-lang`:

```html
<p data-lang="es">Analista QA con experiencia en testing manual…</p>
<p data-lang="en">QA Analyst with experience in manual testing…</p>
```

`i18n.js` aplica la clase `.lang-hidden` a todo nodo cuyo `data-lang` no coincida con el idioma activo, y la retira del que sí coincide. Ningún nodo con `data-lang` puede depender de `display:none` inline ni del atributo `hidden` — solo de `.lang-hidden`, para que el toggle sea una única operación de `classList`.

## Garantías

- El idioma activo se guarda en `localStorage` (`clave: "lang"`, valores `"es"` \| `"en"`) y se aplica también como atributo `lang` en `<html>`.
- Cambiar de idioma NO dispara scroll al inicio: `i18n.js` solo alterna clases, nunca recarga ni reconstruye el DOM, así la posición de scroll se conserva de forma natural (FR-014).
- Todo elemento interactivo con texto (botones, enlaces, `alt` de imágenes) sigue esta misma convención — no solo los párrafos de copy.
- El selector de idioma en sí (los dos controles ES/EN) indica cuál está activo mediante `aria-pressed` (no solo estilo visual), cumpliendo FR-013 de `001-site-structure`.

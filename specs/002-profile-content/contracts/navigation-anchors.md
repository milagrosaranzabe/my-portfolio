# Contrato: Anclas de navegación

Convención que deben respetar tanto la barra de navegación (`assets/js/nav.js`) como cada `<section>` de `index.html`, para que el scroll a anclas (FR-011 de `001-site-structure`) y el resaltado de sección activa funcionen sin acoplar el JS a texto o posición.

## Regla

Cada sección de primer nivel expone un `id` estable en kebab-case que la navegación referencia por `href="#id"`.

| Sección | `id` |
|---|---|
| Hero / Inicio | `inicio` |
| Sobre mí | `sobre-mi` |
| Servicios | `servicios` |
| Proyecto destacado | `proyecto-destacado` |
| Habilidades técnicas | `habilidades` |
| Experiencia / Trayectoria | `experiencia` |
| Contacto | `contacto` |

## Garantías

- Los `id` de esta tabla son estables: no cambian aunque cambie el copy o el idioma activo.
- `nav.js` NO debe hardcodear los `id` dentro de la lógica de scroll — los lee de los `href` de los enlaces de navegación existentes en el DOM, para que agregar/quitar una sección solo requiera editar `index.html`.
- Al activar una sección (por scroll o por clic), `nav.js` marca el enlace correspondiente con `aria-current="location"` (no solo una clase visual, por el principio II — el estado debe ser perceptible también para tecnología asistiva).

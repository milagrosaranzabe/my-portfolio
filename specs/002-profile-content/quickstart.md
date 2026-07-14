# Quickstart: Validación de Contenido y Secciones del Perfil Profesional

Guía para levantar el sitio localmente y validarlo contra las specs `001-site-structure` y `002-profile-content` antes de publicar (checklist de dogfooding QA de la constitución).

## Prerrequisitos

- Un navegador moderno.
- Cualquier servidor estático simple (no hace falta build): por ejemplo `npx serve .` o `python -m http.server` desde la raíz del repo, para evitar restricciones de `file://` con `localStorage`/fetch.

## Levantar el sitio

```bash
npx serve .
# o
python -m http.server 8080
```

Abrir `http://localhost:PORT/index.html`.

## Validaciones funcionales (mapeadas a Success Criteria)

1. **Hero sin scroll** (`001-site-structure` SC-001, `002` SC-001): en desktop (≥1280px) y en móvil (375px), confirmar que el nombre y la frase de identificación son visibles sin hacer scroll.
2. **Navegación en 1 acción** (`001-site-structure` SC-002): desde cualquier sección, un clic en cada enlace de nav debe llevar a la sección correspondiente (ver `contracts/navigation-anchors.md` para los `id` esperados).
3. **Navegación 100% por teclado** (`001-site-structure` SC-003): recorrer todo el sitio solo con Tab/Shift+Tab/Enter — nav, selector de idioma, tarjetas de servicio/habilidad, enlaces de contacto y CV. Confirmar que el foco siempre es visible y que no hay trampas de foco.
4. **Proyecto destacado identificable** (`001-site-structure` SC-004): a simple vista, sin leer texto, confirmar que es evidente cuál es el proyecto destacado.
5. **Evidencia de QA visible sin salir de la sección** (`002` SC-003): confirmar que casos de prueba, bugs y evidencia de automatización están dentro de la sección Proyecto destacado, no solo enlazados.
6. **Distinción consolidado / en aprendizaje** (`002` SC-002, SC-006): en Servicios y Habilidades, confirmar que la etiqueta "en aprendizaje" es textual (no solo color) y que cada ítem en aprendizaje tiene evidencia asociada en el sitio.
7. **Selector de idioma** (`001-site-structure` FR-012–FR-014): cambiar de ES a EN estando a mitad de la sección Habilidades — confirmar que el contenido cambia de idioma y que la posición de scroll/sección se mantiene.
8. **Contacto funcional** (`002` SC-004, SC-005): confirmar que LinkedIn abre el perfil correcto, que el enlace de email abre el cliente de correo con la dirección correcta, y que "Descargar CV" descarga el PDF del idioma activo.
9. **CV no disponible** (edge case, FR-025): si el PDF de un idioma todavía no existe, confirmar que el enlace de descarga no se muestra roto (se oculta).

## Validaciones de calidad (checklist de dogfooding, constitución)

10. **Contraste AA**: verificar a mano (con una herramienta de contraste) cada combinación texto/fondo de la paleta (blanco, violeta, azul oscuro) — mínimo 4.5:1 texto normal, 3:1 texto grande/UI.
11. **Responsive en 3 anchos**: 375px (móvil), 768px (tablet), 1280px (desktop) — sin contenido cortado, oculto ni scroll horizontal no intencional.
12. **HTML semántico y válido**: pasar `index.html` por el W3C HTML Validator y confirmar el uso correcto de landmarks (`header`, `nav`, `main`, `section`, `footer`) y jerarquía de encabezados.
13. **Peso de página**: con las devtools del navegador (pestaña Network), confirmar que HTML+CSS+JS (sin contar imágenes) se mantiene por debajo de 100 KB.

## Resultado esperado

Todas las validaciones anteriores en verde antes de hacer deploy a GitHub Pages o Vercel.

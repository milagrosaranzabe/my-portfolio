# Research: Contenido y Secciones del Perfil Profesional

## 1. Arquitectura sin framework (vanilla JS)

**Decision**: HTML5 + CSS3 + JavaScript vanilla, sin framework de UI ni build step.

**Rationale**: La autora pidió explícitamente reforzar su propio aprendizaje de JS, y el principio V de la constitución exige justificar cualquier dependencia frente a la alternativa nativa. Un sitio de 7 secciones estáticas, sin estado complejo ni ruteo real, no tiene una necesidad concreta que un framework resuelva mejor que HTML/CSS/JS plano.

**Alternatives considered**:
- **React/Vue + build step (Vite)**: descartado — peso y complejidad de tooling no justificados por el alcance; contradice el objetivo de aprendizaje de JS puro y el principio V.
- **Framework CSS (Bootstrap/Tailwind)**: descartado — una paleta de 3 colores y un layout de 7 secciones se resuelve con CSS custom properties y flexbox/grid nativo sin heredar el peso de un framework completo.

## 2. Contenido bilingüe ES/EN sin recarga de página

**Decision**: Cada nodo de texto se marca dos veces en el HTML con `data-lang="es"` / `data-lang="en"`; `i18n.js` muestra/oculta según el idioma activo (guardado en `localStorage`), sin fetch ni recarga.

**Rationale**: Cumple FR-012/FR-013/FR-014 de `001-site-structure` (selector accesible, idioma persistente, conserva la sección/scroll actual al cambiar) sin agregar una librería de i18n ni una petición de red adicional — coherente con el principio V (liviano).

**Alternatives considered**:
- **Archivos JSON por idioma + `fetch`**: descartado — agrega una petición de red y complejidad de sincronización DOM/JSON para un volumen de copy que cabe perfectamente inline; también complica que el cambio de idioma conserve el scroll (FR-014).
- **Página separada por idioma (`/en/index.html`)**: descartado en la spec 001 (arquitectura ya resuelta como one-page); además rompe la persistencia de sección al cambiar de idioma.
- **Atributo `hidden` vs. `display:none` vía clase**: se usará una clase CSS (`.lang-hidden`) en vez de `hidden`, para que el toggle sea una sola operación de `classList` sin pelear con el atributo `hidden` nativo en elementos que también deban ocultarse por otras razones (p. ej. responsive).

## 3. Paleta y tipografía

**Decision**: 3 colores — blanco (`#FFFFFF`, fondo), violeta (`#6C4FD6` aprox., acento/CTA), azul oscuro (`#1A1F36` aprox., texto principal y header) — verificados a mano contra WCAG AA antes de fijarse en `variables.css`; tipografía del sistema (`system-ui` / una única web font liviana si se decide sumar una, con `font-display: swap`) para minimizar peso.

**Rationale**: Cumple el pedido de diseño "sobrio, 2-3 colores" y el principio II (contraste AA real, verificado manualmente, no solo con una herramienta automática). Los valores exactos (hex) se ajustan en implementación tras el chequeo de contraste real contra el fondo blanco y las combinaciones de texto/acento.

**Alternatives considered**:
- **Web font de terceros (Google Fonts) cargada por defecto**: se evalúa como opcional, no obligatoria — si se suma, debe autoalojarse o cargarse con `font-display: swap` para no bloquear el render ni sumar una dependencia de red no justificada (principio V).

## 4. Evidencia visual del proyecto destacado

**Decision**: Capturas de pantalla optimizadas (formato WebP con fallback JPEG si es necesario, o JPEG/PNG comprimido) embebidas directamente en la sección Proyecto destacado (FR-013), con `alt` descriptivo por imagen; enlace externo opcional a demo en vivo o video walkthrough (FR-013a) que abre en pestaña nueva.

**Rationale**: Ya decidido junto con el usuario en la spec (ver `002-profile-content/spec.md`, FR-013/FR-013a) priorizando los principios II y V frente a un iframe embebido.

**Alternatives considered**: iframe en vivo y video embebido — descartados por peso, dependencia de disponibilidad externa y complejidad de accesibilidad dentro del embed.

## 5. Despliegue

**Decision**: Sitio 100% estático sin funciones de servidor; rutas de assets relativas; sin configuración específica de plataforma requerida más allá de servir los archivos tal cual.

**Rationale**: Así el mismo repositorio se despliega sin cambios tanto en GitHub Pages (sirve `index.html` desde la raíz o `/docs`) como en Vercel (detecta sitio estático automáticamente), cumpliendo el pedido explícito del usuario de "fácil de deployar en ambos".

**Alternatives considered**: Generador de sitios estáticos (Eleventy, Astro) — descartado por el mismo motivo que el punto 1: no hay necesidad concreta que justifique la dependencia y el build step adicional para 7 secciones de contenido.

## 6. Verificación de calidad del sitio (dogfooding QA)

**Decision**: Checklist manual (constitución, sección "Proceso de Revisión") antes de cada publicación: navegación completa por teclado, contraste AA verificado a mano, comportamiento en 3 anchos de referencia (móvil/tablet/desktop), y validación de marcado con el W3C HTML Validator (herramienta externa, no dependencia del proyecto).

**Rationale**: Introducir un framework de testing automatizado (p. ej. Playwright) para un sitio de contenido estático sin lógica compleja no está justificado por el alcance actual; además, Playwright es explícitamente una habilidad "en aprendizaje activo" de la autora — usarlo prematuramente aquí contradicería el principio IV (no sobrevender capacidades en desarrollo) si no se documenta como evidencia real de aprendizaje. La verificación manual documentada es, en sí misma, la evidencia de proceso QA que exige el principio III para el sitio que la aloja.

**Alternatives considered**: Suite de pruebas E2E con Playwright — queda anotada como posible evolución futura (podría convertirse en su propia pieza de evidencia de automatización), pero fuera del alcance de esta feature.

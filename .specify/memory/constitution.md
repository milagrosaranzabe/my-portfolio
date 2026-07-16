<!--
Sync Impact Report
==================
Version change: 1.0.0 → 2.0.0
Rationale: MAJOR — redefines Principio III incompatibly. Previously required
QA evidence (casos de prueba, bugs, automatización) as inline first-level
content on the portfolio's Proyecto destacado section. Now allows that
evidence to live on the featured project's own live site (in its own
"Evidencia de QA" section/menu), as long as the portfolio links to it
prominently and the evidence is genuinely accessible — requested by the user
to avoid duplicating the same content in two places once the project has its
own deployed site.

Modified principles:
- III. Evidencia Visible de Proceso QA (Proyecto Destacado) — evidence may
  now live on the linked project site instead of only inline on the
  portfolio; the non-negotiable floor is "a live demo with zero visible
  trace of QA anywhere is not acceptable," not "evidence must be inline."

Added sections: none
Removed sections: none

Templates requiring updates:
- specs/002-profile-content/spec.md ⚠ pending — FR-010–FR-014, SC-003, Key
  Entities, Assumptions describe inline evidence; need rewrite to match.
- specs/002-profile-content/data-model.md ⚠ pending — CasoDePrueba/Bug
  subentities of Proyecto destacado need to move to "external, not stored in
  this repo."
- specs/002-profile-content/tasks.md ⚠ pending — US3 tasks build inline
  evidence HTML; need rework to build context + prominent external link.
- specs/002-profile-content/checklists/honesty-qa-evidence.md ⚠ pending —
  CHK001/CHK002 assumed inline minimums; note as superseded.
- index.html ⚠ pending — replace the inline test-case/bug/automation block
  in Proyecto destacado with a prominent link-out treatment.

Follow-up TODOs: apply the pending updates above in this same session.
-->

# Portfolio QA Constitution

## Core Principles

### I. Código Limpio y HTML Semántico

Todo el markup DEBE usar elementos HTML semánticos (`header`, `nav`, `main`,
`article`, `section`, `footer`, encabezados en jerarquía correcta, etc.) en
lugar de `div`/`span` genéricos cuando exista un elemento semántico
equivalente. El CSS y JS DEBEN mantenerse organizados, sin duplicación
evitable, y sin hacks que solo "funcionan" en un navegador. El código es en sí
mismo una pieza de evidencia profesional: cualquier persona que revise el
código fuente del portfolio (un reclutador técnico, un lead de QA) debe
encontrar una estructura legible y justificable.

**Rationale**: Este es un portfolio de QA — la calidad del propio sitio es
la primera prueba de las capacidades del autor. HTML semántico además es la
base de la accesibilidad y del SEO, no un extra.

### II. Accesibilidad Real

El sitio DEBE cumplir contraste de color suficiente (mínimo WCAG AA, 4.5:1
para texto normal y 3:1 para texto grande/UI) y DEBE ser completamente
navegable por teclado (tab order lógico, foco visible en todo elemento
interactivo, sin trampas de foco). Toda imagen informativa DEBE tener texto
alternativo. Ningún control interactivo puede depender exclusivamente del
color o del hover con mouse para comunicar estado o significado. La
accesibilidad se verifica manualmente (navegación real por teclado, revisión
de contraste) antes de dar por terminada cualquier página — no basta con que
"pase" una herramienta automática.

**Rationale**: Accesibilidad real, no checkbox de auditoría automática, es
parte del criterio de calidad que un QA defiende — el sitio debe practicar
el estándar que su autor promueve profesionalmente.

### III. Evidencia Visible de Proceso QA (Proyecto Destacado)

El proyecto destacado (Biblioteca de Películas y Series) NO puede presentarse
como un demo funcional aislado, ni como un enlace genérico sin contexto. El
portfolio DEBE mostrar el proyecto de forma prominente en su propia sección
(contexto, objetivo, funcionalidades clave) y un enlace claramente destacado
y etiquetado hacia su sitio en vivo. La evidencia detallada del proceso de QA
aplicado (casos de prueba documentados, bugs encontrados y su resolución,
resultados de automatización) DEBE existir y ser accesible en la práctica —
alojada en el propio sitio del proyecto, en una sección o menú dedicado
("Evidencia de QA" o equivalente) claramente enlazado desde el portfolio, o
directamente dentro del portfolio. No alcanza con un demo funcional sin
ningún rastro visible de proceso de QA en ningún lugar accesible.

**Rationale**: El valor diferencial de un portfolio de QA no es "funciona",
sino "así es como verifiqué que funciona". Ocultar el proceso detrás del
producto final desperdicia la prueba más fuerte de la habilidad del autor.
Permitir que la evidencia viva en el propio proyecto (en vez de duplicarse
en el portfolio) evita mantener el mismo contenido en dos lugares, siempre
que el camino hacia esa evidencia sea corto, prominente y explícito — la
línea que no se cruza es "demo sin ningún rastro de QA en ningún lado".

### IV. Honestidad en el Copy

El copy del sitio DEBE describir el nivel real de experiencia sin
sobreventa: seguridad y profundidad en testing manual y proceso de QA
(planificación de casos, exploración, reporte de bugs, criterios de
aceptación), y transparencia explícita sobre estar en transición activa
hacia automatización e IA aplicada a QA (herramientas o prácticas en las que
se está aprendiendo, no dominando). DEBE evitarse cualquier buzzword vacío
("experto en IA", "10x QA", "full-stack testing ninja") que no esté
respaldado por evidencia concreta en el propio sitio. Cuando se mencione una
habilidad en desarrollo, se declara como tal.

**Rationale**: Un reclutador o lead técnico detecta sobreventa rápido, y en
un rol de QA la precisión y la honestidad sobre el propio nivel son en sí
mismas la habilidad que se está demostrando.

### V. Rendimiento: Ligero y Responsive

El sitio DEBE funcionar correctamente en móvil, tablet y desktop
(verificado en los breakpoints reales usados, no solo redimensionando la
ventana del navegador de escritorio). DEBE mantenerse liviano: dependencias
externas minimizadas y justificadas, imágenes optimizadas, sin frameworks
pesados cuando HTML/CSS/JS plano resuelve el mismo problema. Toda dependencia
nueva (librería, framework, webfont, script de terceros) debe justificar su
costo de peso frente a la alternativa nativa.

**Rationale**: Un sitio lento o roto en móvil contradice el mensaje de
cuidado por la calidad que el portfolio busca transmitir, y un QA debería
notar ese contraste antes que nadie.

## Estándares Técnicos y de Performance

- El sitio se construye con HTML, CSS y JavaScript priorizando soluciones
  nativas del navegador; cualquier librería o framework se añade solo si
  resuelve un problema real que el código propio no resuelve razonablemente.
- Las imágenes y otros assets DEBEN optimizarse (formato y compresión
  apropiados) antes de publicarse.
- El layout DEBE adaptarse de forma fluida entre móvil, tablet y desktop;
  no se aceptan vistas rotas u ocultas "temporalmente" en algún breakpoint.

## Proceso de Revisión (Dogfooding de QA)

- Antes de publicar cualquier cambio visible, se aplica un checklist propio
  de QA sobre el sitio mismo: revisión funcional, navegación por teclado,
  contraste, y comportamiento responsive en al menos tres anchos de
  pantalla.
- La evidencia de este proceso (checklists, notas de testing, capturas)
  se conserva y, cuando sea relevante, se reutiliza como parte del contenido
  del proyecto destacado — el portfolio debe poder mostrarse a sí mismo como
  ejemplo de su propio principio III.

## Governance

Esta constitución prevalece sobre cualquier otra práctica o preferencia de
estilo ad hoc dentro de este proyecto. Toda propuesta de cambio, feature o
revisión de contenido del portfolio DEBE verificarse contra estos principios
antes de darse por terminada.

Las enmiendas a esta constitución requieren: documentar el cambio propuesto,
justificar su motivo, y actualizar el número de versión según semver
(MAJOR: eliminación o redefinición incompatible de un principio; MINOR:
principio o sección nueva, o expansión material de una guía existente;
PATCH: aclaraciones o correcciones de redacción sin cambio de sentido).
Cada enmienda actualiza `LAST_AMENDED_DATE` a la fecha del cambio.

Cualquier violación de un principio (por ejemplo, publicar una página sin
verificar contraste o navegación por teclado) debe corregirse antes de
considerar el trabajo completo, o quedar explícitamente justificada por
escrito si se decide una excepción puntual.

**Version**: 2.0.0 | **Ratified**: 2026-07-12 | **Last Amended**: 2026-07-16

# Feature Specification: Estructura General del Sitio

**Feature Branch**: `001-site-structure`

**Created**: 2026-07-13

**Status**: Draft

**Input**: User description: "Estructura general del portfolio QA personal: home/landing con presentación breve y honesta del autor (nivel real: fuerte en testing manual y proceso de QA, en transición activa hacia automatización e IA), navegación clara hacia las secciones principales (Sobre mí, Proyectos, Contacto), una sección de Proyectos que liste los proyectos con el proyecto destacado (Biblioteca de Películas y Series) en primer lugar y con más peso visual, y una sección de Contacto con al menos un medio de contacto real. Debe ser HTML semántico, accesible (contraste AA, navegable por teclado), responsive (móvil, tablet, desktop) y liviano (sin frameworks pesados innecesarios). No incluye todavía el detalle interno de la página del proyecto destacado (eso es una feature separada)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Presentación honesta en la home (Priority: P1)

Un visitante (reclutador, lead de QA, colega) llega a la home del portfolio y en segundos entiende quién es el autor y cuál es su nivel real: sólido en testing manual y proceso de QA, y en transición activa hacia automatización e IA — sin adjetivos vacíos ni afirmaciones que no puede respaldar.

**Why this priority**: Es la primera impresión y el filtro de honestidad que define todo el sitio (constitución, principio IV). Sin esto, el resto del sitio no tiene una base creíble.

**Independent Test**: Se puede probar sirviendo solo la home y verificando que el texto visible en el primer scroll comunica el nivel real (fortaleza en manual/QA + transición a automatización/IA) sin frases de autopromoción no verificable.

**Acceptance Scenarios**:

1. **Given** un visitante nuevo entra a la home, **When** lee el primer bloque de presentación, **Then** identifica que el autor tiene experiencia sólida en testing manual/proceso de QA y está en transición activa hacia automatización e IA.
2. **Given** el texto de presentación, **When** se revisa su contenido, **Then** no contiene buzzwords no respaldados (p. ej. "experto en IA", "ninja de testing") sin evidencia asociada en el sitio.

---

### User Story 2 - Navegación accesible a las secciones principales (Priority: P1)

Un visitante puede moverse entre todas las secciones del sitio (Inicio, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia y Contacto) desde cualquier punto del sitio, tanto con mouse/touch como exclusivamente con teclado.

**Why this priority**: Sin navegación confiable y accesible, el visitante no llega al contenido que sí importa (proyecto destacado, contacto). Es la base estructural del sitio.

**Independent Test**: Se puede probar de forma aislada recorriendo el sitio solo con teclado (Tab/Shift+Tab/Enter) y confirmando que se puede llegar a las 7 secciones y que el foco es siempre visible.

**Acceptance Scenarios**:

1. **Given** un visitante en cualquier página del sitio, **When** usa la navegación, **Then** puede llegar a Inicio, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia y Contacto.
2. **Given** un visitante que navega solo con teclado, **When** presiona Tab repetidamente, **Then** el orden de foco es lógico y el elemento enfocado siempre tiene un indicador visible.

---

### User Story 3 - Proyecto destacado con tratamiento visual prominente (Priority: P2)

Un visitante entra a la sección de Proyecto destacado (Biblioteca de Películas y Series) y de inmediato reconoce, por su tratamiento visual, que es el contenido central del portfolio — sin necesidad de leer el texto. (El contenido detallado de esta sección — casos de prueba, bugs, evidencia de automatización — se especifica en `002-profile-content`; esta historia cubre solo su tratamiento visual dentro de la estructura general del sitio.)

**Why this priority**: El proyecto destacado es la pieza central de evidencia de QA del portfolio (constitución, principio III); si no se distingue del resto de las secciones, se diluye su valor.

**Independent Test**: Se puede probar mostrando solo esa sección y verificando que su tratamiento visual (tamaño, color o posición) la distingue de las demás secciones del sitio, sin necesidad de leer el texto.

**Acceptance Scenarios**:

1. **Given** la sección de Proyecto destacado, **When** el visitante la mira sin leer texto, **Then** reconoce que es el contenido central del sitio en menos de 5 segundos.
2. **Given** el resto de las secciones del sitio, **When** se comparan visualmente entre sí, **Then** Proyecto destacado tiene un tratamiento visiblemente más prominente que las secciones de contenido secundario.

---

### User Story 4 - Sección de Contacto (Priority: P3)

Un visitante interesado encuentra al menos un medio de contacto real y funcional para comunicarse con el autor.

**Why this priority**: Es el paso de conversión final del portfolio, pero solo tiene valor si las secciones anteriores ya generaron interés — por eso es la de menor prioridad relativa.

**Independent Test**: Se puede probar de forma aislada visitando la sección de Contacto y confirmando que el medio de contacto listado es real y utilizable (por ejemplo, un enlace `mailto:` que abre el cliente de correo con la dirección correcta).

**Acceptance Scenarios**:

1. **Given** un visitante en la sección de Contacto, **When** hace clic/tap en el medio de contacto, **Then** se activa una acción real (por ejemplo, se abre el cliente de correo con la dirección del autor).

---

### Edge Cases

- ¿Qué pasa si el visitante tiene JavaScript deshabilitado? El contenido y la navegación esenciales deben seguir siendo usables solo con HTML/CSS.
- ¿Qué pasa en anchos de pantalla extremos (320px de ancho o pantallas ultra-anchas)? El layout no debe romperse, ocultar contenido ni producir scroll horizontal no intencional.
- ¿Qué pasa si el visitante usa modo de alto contraste o tiene el sistema en modo oscuro? El contenido debe seguir siendo legible y mantener el contraste mínimo requerido.
- ¿Qué pasa si un visitante navega solo con teclado y llega al final de la navegación? Debe poder continuar hacia el contenido principal sin quedar atrapado en el menú (sin "trampas de foco").
- ¿Qué pasa si el visitante cambia de idioma estando en medio de una sección ancla (por ejemplo, en Proyecto destacado)? Debe permanecer en la misma sección tras el cambio, no volver al inicio de la página.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La home MUST presentar, en el primer bloque visible (sin necesidad de scroll en desktop), una descripción honesta del autor que comunique fortaleza en testing manual/proceso de QA y transición activa hacia automatización e IA.
- **FR-002**: El copy del sitio MUST evitar afirmaciones de nivel de experiencia que no estén respaldadas por evidencia visible en el propio sitio (capturas, casos de prueba documentados, código o resultados de automatización, o enlaces verificables publicados en el sitio), alineado con el principio IV de la constitución. Esta regla se aplica de forma general: la lista de buzzwords de ejemplo de la constitución ("experto en IA", "10x QA", etc.) es ilustrativa, no exhaustiva — el criterio de cumplimiento es siempre "¿está esta afirmación respaldada por evidencia visible en el sitio?", no una lista cerrada de palabras prohibidas.
- **FR-003**: El sitio MUST ofrecer una navegación persistente (landmark `nav`) con enlaces a las secciones ancladas del sitio (Inicio, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia y Contacto — ver `002-profile-content` para el detalle de contenido de cada una), visible desde cualquier punto del sitio.
- **FR-004**: La navegación MUST ser completamente operable por teclado, con orden de foco lógico y un indicador de foco visible en todo momento.
- **FR-005**: El sitio MUST presentar el proyecto destacado (Biblioteca de Películas y Series) como caso de estudio central, con un tratamiento visualmente prominente (por tamaño, posición o tratamiento) frente al resto de las secciones de contenido secundario del sitio.
- **FR-006**: La sección de Contacto MUST incluir al menos un medio de contacto real y funcional (por ejemplo, un enlace `mailto:` a una dirección de correo válida del autor).
- **FR-007**: Todas las páginas MUST usar HTML semántico (landmarks como `header`, `nav`, `main`, `footer`, y jerarquía de encabezados correcta) en vez de contenedores genéricos sin significado.
- **FR-008**: El contraste de color de texto y componentes interactivos MUST cumplir como mínimo WCAG AA (4.5:1 para texto normal, 3:1 para texto grande y componentes de UI).
- **FR-009**: El layout MUST adaptarse sin contenido roto u oculto en al menos tres anchos de referencia: móvil, tablet y desktop.
- **FR-010**: El sitio MUST evitar frameworks o dependencias externas pesadas que no estén justificadas por una necesidad concreta no resuelta por HTML/CSS/JS nativo.
- **FR-011**: El sitio MUST estructurarse como una sola página (one-page) con las 7 secciones (Inicio, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia y Contacto) ancladas en la misma página; la navegación MUST desplazar (scroll) a cada ancla en lugar de cargar páginas separadas.
- **FR-012**: El contenido textual del sitio MUST estar disponible en español e inglés mediante un selector de idioma, con todo el copy (incluida la presentación honesta de FR-001 y el resto de las secciones) traducido de forma equivalente en ambos idiomas.
- **FR-013**: El selector de idioma MUST ser operable por teclado y MUST indicar con claridad cuál de los dos idiomas está activo en cada momento.
- **FR-014**: Un cambio de idioma MUST conservar la posición de scroll/sección en la que estaba el visitante, en vez de volver al inicio de la página.

### Key Entities

- **Enlace de navegación**: Representa un destino navegable del sitio (Inicio, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia, Contacto). Atributos clave: etiqueta visible, destino.

El proyecto destacado no es una lista de "Proyecto" genéricos — es un caso de estudio único cuyo modelo de contenido se define en `002-profile-content/data-model.md`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un visitante nuevo puede identificar el nivel real del autor (fortaleza en manual/QA + transición a automatización/IA) leyendo solo el primer bloque de la home, sin hacer scroll, tanto en desktop como en móvil.
- **SC-002**: Un visitante puede llegar a cualquiera de las 6 secciones principales (Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia, Contacto) desde cualquier otro punto del sitio en un máximo de 1 acción de navegación (clic o tap).
- **SC-003**: Un visitante que navega exclusivamente con teclado puede alcanzar y activar cada enlace de navegación y el proyecto destacado sin quedar bloqueado en ningún punto.
- **SC-004**: En una prueba de vistazo rápido recorriendo el sitio completo, el 90% de los observadores identifica correctamente cuál es la sección de proyecto destacado dentro de los primeros 5 segundos, sin necesidad de leer texto.
- **SC-005**: Cada página del sitio pasa una verificación manual de contraste (AA) y de navegación por teclado antes de considerarse terminada.
- **SC-006**: El peso total de cada página (HTML + CSS + JS, sin contar imágenes) se mantiene por debajo de 100 KB.

## Assumptions

- El sitio es estático (sin backend ni CMS); el contenido se edita directamente en los archivos fuente.
- La sección de proyecto destacado presenta un único caso de estudio (Biblioteca de Películas y Series), no una lista de proyectos con marcadores de posición; su modelo de contenido detallado se especifica en `002-profile-content`.
- Un único medio de contacto real (correo electrónico) es suficiente para cumplir el requisito de Contacto; enlaces adicionales (por ejemplo, LinkedIn) son opcionales y no bloquean esta feature.
- El detalle interno de la página del proyecto destacado (evidencia de QA, casos de prueba, etc.) es una feature separada y no se especifica aquí.
- La traducción al inglés no necesita ser palabra por palabra, pero MUST preservar las mismas distinciones de honestidad que la versión en español — en particular, qué habilidades están clasificadas `consolidado` vs. `en_aprendizaje` (ver `data-model.md` de `002-profile-content`) debe ser idéntico en ambos idiomas.
- El selector de idioma es un control simple (por ejemplo, dos enlaces/botones ES/EN); no se asume detección automática del idioma del navegador salvo que se pida más adelante.

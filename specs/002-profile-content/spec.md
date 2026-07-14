# Feature Specification: Contenido y Secciones del Perfil Profesional

**Feature Branch**: `002-profile-content`

**Created**: 2026-07-14

**Status**: Draft

**Input**: User description: "Soy Milagros A. Aranzabe Alonso, Analista QA con experiencia en testing manual (web y mobile), pruebas de API con Postman, validación de bases de datos SQL, y metodologías ágiles (Jira, Zephyr). Estoy en transición activa hacia un perfil de QA Automation + AI: aprendiendo JavaScript, Playwright con JavaScript, automatización de APIs, y herramientas de IA aplicadas a testing. Quiero un sitio portfolio que: me presente como profesional QA con experiencia real en testing manual; muestre evidencia concreta de mi transición hacia QA Automation + AI, no solo la intención; use mi proyecto 'Biblioteca de Películas y Series' (Login, Registro, Búsqueda, Favoritos) como proyecto integrador y caso de estudio central, con evidencia de testing manual y automatizado; esté pensado para reclutadores técnicos de empresas de producto (no consultoras de staffing) en Argentina y LATAM, búsqueda 100% remota. Secciones: Hero/Inicio, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia/Trayectoria, Contacto."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Identificación inmediata en el Hero (Priority: P1)

Un reclutador técnico de una empresa de producto llega al sitio y en pocos segundos identifica que Milagros es Analista QA, con foco actual en transición hacia Automation + AI.

**Why this priority**: Es el primer filtro de relevancia: si el reclutador no identifica el perfil correcto en segundos, abandona antes de ver el resto del contenido.

**Independent Test**: Se puede probar mostrando solo el Hero y verificando que un observador nuevo puede repetir, sin leer más contenido, quién es la autora y a qué se dedica.

**Acceptance Scenarios**:

1. **Given** un reclutador entra al sitio por primera vez, **When** ve el Hero, **Then** identifica el nombre de la autora y su perfil (Analista QA en transición hacia Automation + AI) sin necesidad de scroll en desktop.

---

### User Story 2 - Bio honesta en Sobre mí (Priority: P1)

Un reclutador lee Sobre mí y obtiene una descripción breve y honesta de la experiencia real de la autora, distinguiendo claramente lo consolidado (testing manual, APIs con Postman, SQL, ágil) de lo que está en aprendizaje activo (Automation + AI).

**Why this priority**: Sostiene la credibilidad del resto del sitio (constitución, principio IV); sin esta distinción clara el resto del contenido pierde peso.

**Independent Test**: Se puede probar mostrando solo Sobre mí y verificando que un lector puede separar, sin ambigüedad, qué es experiencia consolidada y qué es transición en curso.

**Acceptance Scenarios**:

1. **Given** el texto de Sobre mí, **When** un reclutador lo lee, **Then** puede nombrar al menos 3 áreas de experiencia consolidada y al menos 2 tecnologías en aprendizaje activo.
2. **Given** el texto de Sobre mí, **When** se revisa su contenido, **Then** no atribuye a la autora dominio de una tecnología que está explícitamente en aprendizaje (p. ej. Playwright).

---

### User Story 3 - Caso de estudio central: Proyecto destacado (Priority: P1)

Un reclutador entra a la sección de Proyecto destacado (Biblioteca de Películas y Series) y encuentra evidencia concreta y verificable del proceso de QA manual y de la automatización aplicada, no solo una descripción del producto.

**Why this priority**: Es la prueba central de la habilidad de la autora (constitución, principio III) y el elemento que más diferencia este portfolio de uno genérico.

**Independent Test**: Se puede probar mostrando solo esta sección y verificando que contiene, como mínimo, contexto del proyecto, casos de prueba documentados, bugs encontrados y evidencia de automatización — no únicamente un enlace al demo.

**Acceptance Scenarios**:

1. **Given** la sección de Proyecto destacado, **When** un reclutador la revisa, **Then** encuentra el contexto/objetivo del proyecto y sus funcionalidades clave (Login, Registro, Búsqueda, Favoritos).
2. **Given** la sección de Proyecto destacado, **When** un reclutador busca evidencia de QA, **Then** encuentra casos de prueba documentados y bugs encontrados con su resolución.
3. **Given** la sección de Proyecto destacado, **When** un reclutador busca evidencia de automatización, **Then** encuentra evidencia concreta (no solo la mención) de pruebas automatizadas aplicadas al proyecto.

---

### User Story 4 - Panorama de servicios ofrecidos (Priority: P2)

Un reclutador revisa la sección de Servicios y entiende qué tipo de trabajo de QA puede aportar la autora hoy.

**Why this priority**: Ayuda a un reclutador a mapear el perfil contra una posición concreta, pero es secundario frente a la identificación inicial y la evidencia del proyecto destacado.

**Independent Test**: Se puede probar mostrando solo la sección de Servicios y verificando que lista testing manual, testing de APIs, automatización con Playwright + JavaScript, y testing asistido por IA, cada uno distinguido según su nivel real (consolidado o en aprendizaje).

**Acceptance Scenarios**:

1. **Given** la sección de Servicios, **When** un reclutador la revisa, **Then** ve los cuatro servicios (testing manual, testing de APIs, automatización con Playwright + JavaScript, testing asistido por IA).
2. **Given** un servicio en aprendizaje activo, **When** un reclutador lo revisa, **Then** puede distinguirlo visualmente de un servicio con experiencia consolidada.

---

### User Story 5 - Mapa de habilidades técnicas por categoría (Priority: P2)

Un reclutador revisa Habilidades técnicas y encuentra las herramientas concretas de la autora organizadas por categoría, con una distinción clara entre lo consolidado y lo que está en aprendizaje.

**Why this priority**: Es información de referencia rápida que un reclutador técnico suele escanear para hacer match contra un puesto, pero depende de que ya haya interés generado por las secciones anteriores.

**Independent Test**: Se puede probar mostrando solo la sección de Habilidades y verificando que las herramientas están agrupadas por categoría y que cada una indica si es experiencia consolidada o en aprendizaje.

**Acceptance Scenarios**:

1. **Given** la sección de Habilidades técnicas, **When** un reclutador la revisa, **Then** encuentra las herramientas agrupadas por categoría (por ejemplo, Testing Manual, Testing de APIs, Automatización, Bases de Datos, Gestión Ágil, IA aplicada a testing).
2. **Given** una habilidad en aprendizaje activo, **When** un reclutador la revisa, **Then** puede distinguirla de una habilidad consolidada sin necesidad de leer texto adicional.

---

### User Story 6 - Trayectoria profesional verificable (Priority: P2)

Un reclutador revisa Experiencia / Trayectoria y entiende el recorrido profesional de la autora en orden cronológico.

**Why this priority**: Complementa la evidencia de las secciones anteriores con contexto temporal, pero no es lo primero que un reclutador necesita para decidir si sigue leyendo.

**Independent Test**: Se puede probar mostrando solo la sección de Experiencia y verificando que cada entrada tiene rol, contexto y período, ordenados del más reciente al más antiguo.

**Acceptance Scenarios**:

1. **Given** la sección de Experiencia, **When** un reclutador la revisa, **Then** ve las entradas ordenadas de la más reciente a la más antigua, cada una con rol, contexto y período.

---

### User Story 7 - Contacto y conversión (Priority: P1)

Un reclutador interesado contacta a la autora por LinkedIn o email, o descarga su CV, en el menor número de pasos posible.

**Why this priority**: Es el objetivo final del sitio: sin una conversión simple y confiable, el resto del contenido no genera resultado.

**Independent Test**: Se puede probar visitando solo la sección de Contacto y verificando que los tres medios (LinkedIn, email, CV) están presentes y funcionan.

**Acceptance Scenarios**:

1. **Given** un reclutador en Contacto, **When** hace clic en el enlace de LinkedIn, **Then** se abre el perfil de LinkedIn de la autora.
2. **Given** un reclutador en Contacto, **When** hace clic en el enlace de email, **Then** se abre su cliente de correo con la dirección de la autora precargada.
3. **Given** un reclutador en Contacto, **When** hace clic en "Descargar CV", **Then** se descarga un archivo PDF con el CV actualizado de la autora.

---

### Edge Cases

- ¿Qué pasa si una habilidad marcada como "en aprendizaje" no tiene ninguna evidencia asociada en el proyecto destacado ni en otra sección? No debe presentarse junto a las habilidades consolidadas sin esa distinción, para no sobrevender (principio IV de la constitución).
- ¿Qué pasa si el archivo de CV no está disponible en el momento de publicar? El enlace de descarga debe ocultarse en lugar de mostrar un enlace roto.
- ¿Qué pasa si un reclutador entra directo a una sección por un enlace ancla compartido (por ejemplo, `#proyecto-destacado`)? Debe llegar directo a esa sección sin perder la navegación general del sitio.
- ¿Qué pasa si la sección de Experiencia todavía tiene pocas o ninguna entrada de experiencia laboral formal en QA? Debe mostrarse igual con la información real disponible (formación, proyectos, prácticas) en lugar de quedar vacía o con contenido de relleno.
- ¿Qué pasa si un reclutador interactúa con una tarjeta de Servicio o Habilidad por teclado (sin mouse)? El contenido ampliado o la distinción visual de "en aprendizaje" debe ser accesible también por foco de teclado, no solo por hover de mouse.

## Requirements *(mandatory)*

<!--
  Los requisitos usan formato EARS (Easy Approach to Requirements Syntax).
  Patrón entre paréntesis al final de cada ítem: Ubicuo, Basado en evento,
  Basado en estado, Comportamiento no deseado, o Característica opcional.
-->

### Hero / Inicio

- **FR-001**: El sitio SHALL presentar en el Hero, sin necesidad de scroll en desktop, el nombre de la autora (Milagros A. Aranzabe Alonso) y una frase que la identifique como Analista QA en transición hacia QA Automation + AI. *(Ubicuo)*
- **FR-002**: CUANDO un visitante hace clic en el llamado a la acción del Hero, el sitio SHALL desplazar la vista hasta la sección de Proyecto destacado. *(Basado en evento)*
- **FR-003**: DONDE el visitante accede desde un dispositivo móvil, el Hero SHALL reorganizar su contenido en una sola columna sin recortar el nombre ni la frase de identificación. *(Característica opcional)*

### Sobre mí

- **FR-004**: El sitio SHALL presentar en Sobre mí una bio breve que describa la experiencia consolidada de la autora en testing manual (web y mobile), pruebas de API con Postman, validación de bases de datos SQL, y metodologías ágiles (Jira, Zephyr). *(Ubicuo)*
- **FR-005**: El sitio SHALL declarar en Sobre mí, de forma explícita y separada de la experiencia consolidada, que la autora está en transición activa hacia un perfil de QA Automation + AI, nombrando las tecnologías en aprendizaje (JavaScript, Playwright, automatización de APIs, herramientas de IA aplicadas a testing). *(Ubicuo)*
- **FR-006**: SI el copy de cualquier sección atribuye a la autora dominio consolidado de una tecnología declarada en aprendizaje activo (por ejemplo, Playwright), ENTONCES el sitio SHALL corregir el copy para reflejar el nivel real de transición. *(Comportamiento no deseado)*

### Servicios

- **FR-007**: El sitio SHALL listar en Servicios como mínimo: testing manual, testing de APIs, automatización con Playwright + JavaScript, y testing asistido por IA. *(Ubicuo)*
- **FR-008**: Para cada servicio construido sobre una habilidad en aprendizaje activo (automatización con Playwright + JavaScript, testing asistido por IA), el sitio SHALL indicar visualmente que se trata de una capacidad en desarrollo. *(Ubicuo)*
- **FR-009**: CUANDO un visitante hace hover o foco de teclado sobre una tarjeta de servicio, el sitio SHALL mostrar una descripción ampliada de ese servicio. *(Basado en evento)*

### Proyecto destacado — Biblioteca de Películas y Series

- **FR-010**: El sitio SHALL presentar en Proyecto destacado el contexto, el objetivo y las funcionalidades clave del proyecto (Login, Registro, Búsqueda, Favoritos). *(Ubicuo)*
- **FR-011**: El sitio SHALL mostrar en Proyecto destacado evidencia del proceso de QA manual aplicado, incluyendo casos de prueba representativos y bugs encontrados con su resolución. *(Ubicuo)*
- **FR-012**: El sitio SHALL mostrar en Proyecto destacado evidencia concreta de automatización aplicada al proyecto (por ejemplo, resultados o alcance de pruebas con Playwright), no solo la mención de que existe. *(Ubicuo)*
- **FR-013**: El sitio SHALL presentar la evidencia visual del proyecto destacado mediante capturas de pantalla optimizadas del flujo (Login, Registro, Búsqueda, Favoritos) y de la evidencia de testing, embebidas directamente en la página. *(Ubicuo)*
- **FR-013a**: DONDE exista un demo en vivo o un video walkthrough del proyecto destacado, el sitio SHALL enlazar a él como recurso externo en lugar de embeberlo directamente en la página. *(Característica opcional)*
- **FR-014**: DONDE exista evidencia detallada adicional fuera del sitio principal (repositorio de automatización, reporte de bugs completo), el sitio SHALL enlazar a ella desde la sección de Proyecto destacado. *(Característica opcional)*

### Habilidades técnicas

- **FR-015**: El sitio SHALL organizar las habilidades técnicas por categoría, agrupando como mínimo: Testing Manual, Testing de APIs, Automatización, Bases de Datos, Gestión Ágil, e IA aplicada a testing. *(Ubicuo)*
- **FR-016**: Dentro de cada categoría, el sitio SHALL listar las herramientas concretas asociadas (por ejemplo, Postman en Testing de APIs; SQL en Bases de Datos; Jira y Zephyr en Gestión Ágil; Playwright y JavaScript en Automatización). *(Ubicuo)*
- **FR-017**: DONDE una habilidad esté en aprendizaje activo y no sea experiencia consolidada, el sitio SHALL distinguirla visualmente (por ejemplo, con una etiqueta "en aprendizaje") de las habilidades consolidadas. *(Característica opcional)*

### Experiencia / Trayectoria

- **FR-018**: El sitio SHALL presentar la trayectoria profesional de la autora en orden cronológico, de la más reciente a la más antigua. *(Ubicuo)*
- **FR-019**: Cada entrada de Experiencia SHALL incluir como mínimo rol, contexto (organización o proyecto), período y responsabilidades o logros relevantes de QA. *(Ubicuo)*
- **FR-020**: SI una entrada de experiencia no tiene rol o período definido, ENTONCES el sitio SHALL omitir esa entrada en lugar de mostrarla con campos vacíos. *(Comportamiento no deseado)*

### Contacto

- **FR-021**: El sitio SHALL ofrecer en Contacto un enlace a LinkedIn, un enlace de correo (`mailto:`), y un enlace de descarga de CV. *(Ubicuo)*
- **FR-022**: El sitio SHALL indicar en Contacto o en Sobre mí que la autora busca posiciones de QA 100% remotas en empresas de producto de Argentina y LATAM. *(Ubicuo)*
- **FR-023**: CUANDO un visitante hace clic en el enlace de descarga de CV, el sitio SHALL iniciar la descarga de un archivo PDF con el CV actualizado de la autora. *(Basado en evento)*
- **FR-024**: CUANDO un visitante hace clic en el enlace de LinkedIn o en el de email, el sitio SHALL abrir el destino correspondiente sin perder el estado de la página actual del portfolio. *(Basado en evento)*
- **FR-025**: SI el archivo de CV no está disponible, ENTONCES el sitio SHALL ocultar el enlace de descarga en lugar de mostrar un enlace roto. *(Comportamiento no deseado)*

### Key Entities

- **Servicio**: Oferta de QA presentada en la sección Servicios. Atributos clave: nombre, descripción breve, descripción ampliada, nivel (consolidado / en aprendizaje).
- **Proyecto destacado**: El caso de estudio central (Biblioteca de Películas y Series). Atributos clave: contexto/objetivo, funcionalidades clave, casos de prueba representativos, bugs encontrados y resolución, evidencia de automatización, evidencia visual, enlaces a evidencia detallada externa.
- **Habilidad técnica**: Herramienta o tecnología concreta. Atributos clave: nombre, categoría, nivel (consolidada / en aprendizaje).
- **Entrada de experiencia**: Ítem de la trayectoria profesional. Atributos clave: rol, contexto/organización, período, logros o responsabilidades.
- **Enlace de contacto**: Medio de contacto listado en Contacto. Atributos clave: tipo (LinkedIn, email, CV), destino, disponibilidad.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un reclutador puede identificar el nombre y la especialidad de la autora (QA en transición hacia Automation + AI) en los primeros 5 segundos de ver el Hero.
- **SC-002**: El 100% de las habilidades o servicios marcados como "en aprendizaje" tienen al menos una pieza de evidencia concreta asociada visible en el sitio, no solo la mención de intención.
- **SC-003**: Un reclutador puede encontrar, dentro de la sección de Proyecto destacado, evidencia de QA manual y evidencia de automatización sin salir de esa sección.
- **SC-004**: Un reclutador puede iniciar contacto (LinkedIn, email o descarga de CV) en un máximo de 2 acciones desde cualquier punto del sitio.
- **SC-005**: El 100% de los enlaces de contacto (LinkedIn, email, CV) llevan a un destino válido y funcional, verificado antes de publicar.
- **SC-006**: Un reclutador puede distinguir, sin leer texto adicional, qué habilidades son experiencia consolidada y cuáles están en aprendizaje activo, en menos de 10 segundos de ver la sección de Habilidades.
- **SC-007**: Un reclutador identifica que la autora busca posiciones remotas en Argentina/LATAM sin necesidad de buscar esa información fuera de las secciones Sobre mí o Contacto.

## Assumptions

- Esta feature expande el contenido de la estructura general ya definida en `001-site-structure` (sitio de una sola página con anclas, selector de idioma ES/EN); no la reemplaza. Confirmado por el usuario el 2026-07-14: la sección genérica "Proyectos" de `001` se refina aquí como "Proyecto destacado" (caso de estudio único, no una lista), y se agregan las secciones Servicios, Habilidades técnicas y Experiencia que `001` no contemplaba.
- El CV descargable es un archivo PDF; si existen versiones en español e inglés, el enlace de descarga usa el idioma activo del selector de idioma del sitio.
- La evidencia exhaustiva del proyecto destacado (repositorio completo de casos de prueba, bug tracker completo, código de automatización) puede vivir fuera del sitio principal (por ejemplo, en un repositorio público); la sección de Proyecto destacado muestra una síntesis representativa y enlaza a esa evidencia ampliada cuando exista.
- "Servicios" describe capacidades ofrecidas por la autora como profesional QA en búsqueda de empleo, no un catálogo comercial con tarifas ni un formulario de cotización.
- La sección de Experiencia se completa con información real provista por la autora; si la experiencia laboral formal en QA es limitada, se documenta igual con lo que exista (formación, proyectos, prácticas) en vez de dejarse vacía.

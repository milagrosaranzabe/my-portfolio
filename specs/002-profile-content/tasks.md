---

description: "Task list for Contenido y Secciones del Perfil Profesional"
---

# Tasks: Contenido y Secciones del Perfil Profesional

**Input**: Design documents from `specs/002-profile-content/` (`plan.md`, `spec.md`, `data-model.md`, `contracts/`, `research.md`, `quickstart.md`), y `specs/001-site-structure/spec.md` para la estructura one-page/bilingüe que este contenido puebla.

**Tests**: No se generaron tareas de test automatizado — ni `spec.md` ni `plan.md` lo piden explícitamente. La verificación es manual (checklist de dogfooding QA de la constitución), reflejada como tareas de verificación al final de cada historia y en la fase de Polish.

**Organization**: Las tareas están agrupadas por historia de usuario (de `spec.md`) para poder implementar y probar cada una de forma independiente.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Puede ejecutarse en paralelo (archivo distinto, sin dependencias pendientes)
- **[Story]**: Historia de usuario a la que pertenece la tarea (US1...US7)

## Path Conventions

Sitio estático de un solo proyecto (`index.html` en la raíz + `assets/`), según `plan.md` → Project Structure.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inicialización del proyecto

- [ ] T001 Crear la estructura de carpetas del proyecto: `index.html` (vacío) y `assets/css/`, `assets/js/`, `assets/img/proyecto-destacado/`, `assets/cv/` en la raíz del repo, según `plan.md` → Project Structure
- [ ] T002 [P] Crear `assets/css/variables.css` con la paleta (blanco `#FFFFFF`, violeta, azul oscuro) y los tokens de tipografía, verificados a mano contra WCAG AA según `research.md` §3
- [ ] T003 [P] Crear `assets/css/base.css` con un reset ligero, tipografía base y estilos de `:focus-visible`, según constitución principio II

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Estructura compartida que TODAS las historias necesitan (shell HTML, navegación, selector de idioma)

**⚠️ CRITICAL**: Ninguna historia de usuario puede empezar hasta que esta fase esté completa

- [ ] T004 Crear el esqueleto de `index.html` con landmarks semánticos (`header`, `nav`, `main`, `footer`) y `<section id="...">` vacíos para las 7 secciones, usando los ids de `contracts/navigation-anchors.md`
- [ ] T005 [P] Crear `assets/css/layout.css` con grid/flex mobile-first para el shell de la página y los breakpoints móvil/tablet/desktop, apoyado en los tokens de `assets/css/variables.css`
- [ ] T006 [P] Crear `assets/js/nav.js`: lee los `href="#..."` de la navegación, hace scroll suave a la sección correspondiente y marca el enlace activo con `aria-current="location"`, según `contracts/navigation-anchors.md`
- [ ] T007 [P] Crear `assets/js/i18n.js`: alterna los nodos `data-lang` vía la clase `.lang-hidden`, persiste el idioma elegido en `localStorage` (clave `lang`) y setea `<html lang>`, según `contracts/content-i18n-contract.md`
- [ ] T008 Crear `assets/js/main.js` que inicializa `nav.js` e `i18n.js` en `DOMContentLoaded`, y enlazar los tres scripts y los CSS desde `index.html`
- [ ] T009 Construir la barra de navegación en el `header` de `index.html`: enlaces a las 7 secciones (con `data-lang` dual) más el selector de idioma ES/EN con `aria-pressed`, según `contracts/content-i18n-contract.md`

**Checkpoint**: El shell carga, la navegación y el selector de idioma funcionan de punta a punta con secciones vacías — recién ahora pueden empezar las historias de usuario.

---

## Phase 3: User Story 1 - Identificación inmediata en el Hero (Priority: P1) 🎯 MVP

**Goal**: Un reclutador identifica en segundos, sin scroll, quién es la autora y su perfil (Analista QA en transición hacia Automation + AI)

**Independent Test**: Servir solo el Hero y confirmar que un observador nuevo repite quién es la autora y a qué se dedica, sin leer más contenido

### Implementation for User Story 1

- [ ] T010 [US1] Construir el markup de `<section id="inicio">` en `index.html` con el nombre de la autora y la frase de identificación (`data-lang` ES/EN) según FR-001
- [ ] T011 [US1] Agregar el enlace de llamado a la acción del Hero apuntando a `#proyecto-destacado` según FR-002
- [ ] T012 [US1] Estilar la sección Hero en `assets/css/components.css`: layout de una columna en móvil sin recortar contenido, según FR-003
- [ ] T013 [US1] Verificar manualmente que el Hero es visible sin scroll a 1280px y a 375px (`quickstart.md` #1)

**Checkpoint**: US1 completa — el Hero identifica a la autora de forma independiente al resto del sitio.

---

## Phase 4: User Story 2 - Bio honesta en Sobre mí (Priority: P1)

**Goal**: Un reclutador distingue con claridad la experiencia consolidada de la autora de las tecnologías en aprendizaje activo

**Independent Test**: Mostrar solo Sobre mí y confirmar que un lector puede nombrar ≥3 áreas consolidadas y ≥2 tecnologías en aprendizaje, sin ambigüedad

### Implementation for User Story 2

- [ ] T014 [US2] Construir el markup de `<section id="sobre-mi">` en `index.html` con la bio de experiencia consolidada (testing manual, Postman, SQL, Jira/Zephyr; `data-lang` dual) según FR-004
- [ ] T015 [US2] Agregar el bloque explícito de transición nombrando JS, Playwright, automatización de APIs e IA como aprendizaje activo, distinguido visualmente de la bio consolidada sin depender solo del color, según FR-005 y principio II de la constitución
- [ ] T016 [US2] Estilar la sección Sobre mí (bio vs. bloque de transición) en `assets/css/components.css`
- [ ] T017 [US2] Revisar el copy de Sobre mí contra FR-006: confirmar que ninguna tecnología declarada "en aprendizaje" aparece descrita como dominada en otra parte del sitio

**Checkpoint**: US2 completa — Sobre mí se sostiene sola como bio honesta.

---

## Phase 5: User Story 3 - Caso de estudio central: Proyecto destacado (Priority: P1)

**Goal**: Un reclutador encuentra, dentro de Proyecto destacado, evidencia concreta de QA manual y de automatización — no solo una descripción del producto

**Independent Test**: Mostrar solo esta sección y confirmar que contiene contexto, casos de prueba, bugs y evidencia de automatización, no únicamente un enlace al demo

### Implementation for User Story 3

- [ ] T018 [US3] Construir el shell de `<section id="proyecto-destacado">` con contexto/objetivo y las funcionalidades clave (Login, Registro, Búsqueda, Favoritos) según FR-010
- [ ] T019 [US3] Agregar la subsección de casos de prueba (título, pasos, resultado esperado/obtenido, según `data-model.md`) según FR-011
- [ ] T020 [US3] Agregar la subsección de bugs encontrados (descripción, severidad, resolución, según `data-model.md`) según FR-011
- [ ] T021 [US3] Agregar la subsección de evidencia de automatización (texto + enlace opcional) según FR-012
- [ ] T022 [P] [US3] Optimizar y agregar las capturas a `assets/img/proyecto-destacado/` con `alt` descriptivo en ambos idiomas según FR-013
- [ ] T023 [US3] Agregar el enlace externo opcional a demo/video (se abre en pestaña nueva) según FR-013a
- [ ] T024 [US3] Agregar el enlace externo opcional a evidencia ampliada (repo de automatización / bug tracker completo) según FR-014
- [ ] T025 [US3] Estilar Proyecto destacado en `assets/css/components.css` con un tratamiento visualmente prominente que lo distinga, según FR-005 de `001-site-structure`

**Checkpoint**: US3 completa — Proyecto destacado funciona solo como caso de estudio de QA completo.

---

## Phase 6: User Story 4 - Panorama de servicios ofrecidos (Priority: P2)

**Goal**: Un reclutador entiende qué tipo de trabajo de QA puede aportar la autora hoy, distinguiendo lo consolidado de lo que está en desarrollo

**Independent Test**: Mostrar solo Servicios y confirmar los 4 servicios, cada uno marcado según su nivel real

### Implementation for User Story 4

- [ ] T026 [US4] Construir el markup de `<section id="servicios">` con las 4 tarjetas (testing manual, testing de APIs, automatización con Playwright + JavaScript, testing asistido por IA) según FR-007
- [ ] T027 [US4] Agregar el indicador textual "en desarrollo" a los dos servicios basados en habilidades en aprendizaje según FR-008
- [ ] T028 [US4] Implementar el comportamiento de descripción ampliada por hover/foco de teclado en `assets/js/main.js` y el markup correspondiente según FR-009
- [ ] T029 [US4] Estilar las tarjetas de Servicios en `assets/css/components.css`

**Checkpoint**: US4 completa.

---

## Phase 7: User Story 5 - Mapa de habilidades técnicas por categoría (Priority: P2)

**Goal**: Un reclutador encuentra las herramientas de la autora agrupadas por categoría, distinguiendo lo consolidado de lo que está en aprendizaje

**Independent Test**: Mostrar solo Habilidades y confirmar el agrupamiento por categoría y la distinción de nivel

### Implementation for User Story 5

- [ ] T030 [US5] Construir el markup de `<section id="habilidades">` agrupado por categoría (Testing Manual, Testing de APIs, Automatización, Bases de Datos, Gestión Ágil, IA aplicada a testing) según FR-015/FR-016
- [ ] T031 [US5] Agregar la etiqueta textual "en aprendizaje" a las habilidades no consolidadas según FR-017
- [ ] T032 [US5] Estilar la sección Habilidades (agrupamiento por categoría + distinción de nivel) en `assets/css/components.css`

**Checkpoint**: US5 completa.

---

## Phase 8: User Story 6 - Trayectoria profesional verificable (Priority: P2)

**Goal**: Un reclutador entiende el recorrido profesional de la autora en orden cronológico

**Independent Test**: Mostrar solo Experiencia y confirmar que cada entrada tiene rol, contexto y período, ordenadas de la más reciente a la más antigua

### Implementation for User Story 6

- [ ] T033 [US6] Construir el markup de `<section id="experiencia">` listando las entradas (rol, contexto, período, logros) ordenadas de la más reciente a la más antigua según FR-018/FR-019, omitiendo cualquier entrada sin rol o período según FR-020
- [ ] T034 [US6] Estilar la lista/timeline de Experiencia en `assets/css/components.css`

**Checkpoint**: US6 completa.

---

## Phase 9: User Story 7 - Contacto y conversión (Priority: P1)

**Goal**: Un reclutador interesado contacta a la autora por LinkedIn, email, o descarga su CV, en el mínimo de pasos

**Independent Test**: Visitar solo Contacto y confirmar que los tres medios están presentes y funcionan

### Implementation for User Story 7

- [ ] T035 [US7] Construir el markup de `<section id="contacto">` con el enlace a LinkedIn, el enlace `mailto:` y el enlace de descarga de CV según FR-021
- [ ] T036 [US7] Agregar la declaración de disponibilidad remota Argentina/LATAM en Contacto o Sobre mí según FR-022
- [ ] T037 [US7] Agregar los PDF de CV optimizados (ES/EN) a `assets/cv/` y conectar el enlace de descarga al archivo del idioma activo según FR-023
- [ ] T038 [US7] Estilar la sección Contacto en `assets/css/components.css`
- [ ] T039 [US7] Asegurar que el markup del enlace de descarga de CV solo se incluya cuando el PDF correspondiente exista, según FR-025 (sin enlaces rotos)

**Checkpoint**: US7 completa — con esto, las 4 historias P1 (US1, US2, US3, US7) están listas y el sitio es un MVP publicable.

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Verificación de calidad que abarca todas las historias (dogfooding QA, constitución)

- [ ] T040 [P] Correr el W3C HTML Validator sobre `index.html` y corregir cualquier error (`quickstart.md` #12)
- [ ] T041 [P] Verificar a mano el contraste AA de cada combinación texto/fondo de la paleta (`quickstart.md` #10)
- [ ] T042 [P] Verificar a mano la navegación completa por teclado (nav, selector de idioma, tarjetas de servicio/habilidad, enlaces de contacto) (`quickstart.md` #3)
- [ ] T043 [P] Verificar a mano el layout responsive a 375px/768px/1280px sin contenido roto ni oculto (`quickstart.md` #11)
- [ ] T044 [P] Verificar que el peso total de página (HTML+CSS+JS, sin imágenes) se mantiene bajo 100 KB con las devtools del navegador (`quickstart.md` #13)
- [ ] T045 Verificar que el selector de idioma conserva la posición de scroll al cambiar de idioma a mitad de sección (`quickstart.md` #7)
- [ ] T046 Correr el checklist completo de `quickstart.md` de punta a punta antes del deploy
- [ ] T047 Desplegar a GitHub Pages o Vercel según `plan.md` (sitio estático, sin cambios de configuración)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: sin dependencias — puede empezar de inmediato
- **Foundational (Phase 2)**: depende de Setup — BLOQUEA todas las historias de usuario
- **Historias de usuario (Phase 3-9)**: todas dependen de Foundational; entre sí son independientes y pueden hacerse en paralelo (por prioridad) o secuencialmente en orden P1 → P2
- **Polish (Phase 10)**: depende de que las historias que se quieran publicar estén completas

### User Story Dependencies

- **US1, US2, US3, US7 (P1)**: pueden empezar en cualquier orden tras Foundational; no dependen entre sí
- **US4, US5, US6 (P2)**: pueden empezar en cualquier orden tras Foundational; no dependen de las historias P1 ni entre sí

### Within Each User Story

- El markup de la sección va antes que su estilo específico (mismo componente, misma fuente de verdad)
- Los assets independientes (imágenes, PDFs) pueden prepararse en paralelo al markup
- La historia se da por completa cuando pasa su "Independent Test"

### Parallel Opportunities

- T002 y T003 en paralelo (archivos CSS distintos)
- T005, T006 y T007 en paralelo entre sí una vez terminado T004 (archivos distintos: `layout.css`, `nav.js`, `i18n.js`)
- Con Foundational completo, un desarrollador puede tomar US1+US2+US3+US7 (P1) mientras otro toma US4+US5+US6 (P2), en paralelo
- T022 (capturas del proyecto destacado) puede prepararse en paralelo al resto de US3 (archivo/artefacto distinto)
- T040-T044 en Polish son verificaciones independientes entre sí y pueden correrse en paralelo

---

## Parallel Example: Foundational

```bash
# Una vez creado el esqueleto de index.html (T004):
Task: "Crear assets/css/layout.css con grid/flex mobile-first"
Task: "Crear assets/js/nav.js con scroll a anclas y aria-current"
Task: "Crear assets/js/i18n.js con toggle data-lang y localStorage"
```

---

## Implementation Strategy

### MVP First (Historias P1: US1, US2, US3, US7)

1. Completar Phase 1: Setup
2. Completar Phase 2: Foundational (bloqueante)
3. Completar US1 (Hero), US2 (Sobre mí), US3 (Proyecto destacado), US7 (Contacto)
4. **STOP y VALIDAR**: correr `quickstart.md` sobre estas 4 secciones
5. Publicar: el sitio ya cumple la narrativa central (quién es la autora, evidencia de QA, cómo contactarla)

### Incremental Delivery

1. Setup + Foundational → shell navegable y bilingüe
2. Sumar US1 → validar → (opcional) publicar
3. Sumar US2, US3, US7 → validar → MVP completo
4. Sumar US4, US5, US6 (P2) → validar → sitio completo
5. Polish (Phase 10) → deploy final

---

## Notes

- [P] = archivos distintos, sin dependencias pendientes
- [Story] mapea la tarea a su historia de usuario para trazabilidad
- Cada historia debe quedar completable y verificable de forma independiente
- Commitear después de cada tarea o grupo lógico de tareas
- Evitar: tareas vagas, conflictos de mismo archivo marcados como [P], dependencias cruzadas entre historias que rompan su independencia

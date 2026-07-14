# Implementation Plan: Contenido y Secciones del Perfil Profesional

**Branch**: `002-profile-content` | **Date**: 2026-07-14 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/002-profile-content/spec.md`, junto con `specs/001-site-structure/spec.md` (estructura one-page bilingüe que este contenido puebla).

## Summary

Sitio portfolio QA de una sola página (one-page, anclas), bilingüe ES/EN con selector cliente, construido en HTML5 + CSS3 + JavaScript vanilla sin frameworks ni build step. Presenta a Milagros A. Aranzabe Alonso a reclutadores técnicos de producto en Argentina/LATAM (búsqueda remota) a través de 7 secciones (Hero, Sobre mí, Servicios, Proyecto destacado, Habilidades técnicas, Experiencia, Contacto), con el proyecto "Biblioteca de Películas y Series" como caso de estudio central con evidencia de QA manual y automatizada. Diseño minimalista con paleta de 3 colores (blanco, violeta, azul oscuro), mobile-first, desplegable sin cambios en GitHub Pages o Vercel.

## Technical Context

**Language/Version**: HTML5, CSS3 (custom properties, sin preprocesador), JavaScript ES2020+ vanilla (sin TypeScript, sin build step/bundler)

**Primary Dependencies**: Ninguna. Sin frameworks de UI (React/Vue/etc.), sin frameworks CSS (Bootstrap/Tailwind), sin librerías de i18n — todo resuelto con HTML/CSS/JS nativo, alineado con el objetivo de la autora de reforzar su propio aprendizaje de JS y con el principio V de la constitución.

**Storage**: N/A — sitio estático sin backend ni CMS; contenido vive directamente en los archivos fuente (heredado de la Assumption de `001-site-structure`).

**Testing**: Checklist de QA manual propio (dogfooding, constitución sección "Proceso de Revisión") sobre cada entrega: navegación por teclado, contraste AA, responsive en 3 anchos, validación HTML (W3C Validator). No se introduce un framework de testing automatizado para esta feature — sería una dependencia no justificada por el alcance actual de un sitio estático de contenido.

**Target Platform**: Navegadores web modernos de escritorio y móvil; hosting estático sin funciones de servidor (compatible sin cambios con GitHub Pages y Vercel).

**Project Type**: Sitio web estático de una sola página (single project — no hay separación frontend/backend).

**Performance Goals**: Carga rápida en conexiones móviles estándar; sin bloqueo de render por dependencias externas (fuentes/scripts de terceros minimizados o ausentes).

**Constraints**: Peso por página (HTML+CSS+JS, sin imágenes) por debajo de 100 KB (`001-site-structure` SC-006); mobile-first; el cambio de idioma y la navegación por anclas deben conservar la posición de scroll (FR-014 de `001-site-structure`); sin build step (los archivos que se editan son los que se despliegan).

**Scale/Scope**: Un único visitante-tipo (reclutador técnico), 7 secciones ancladas en una página, sin cuentas de usuario ni datos persistidos.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principio | Cómo lo cumple este plan |
|---|---|
| I. Código limpio y HTML semántico | Un único `index.html` con landmarks (`header`, `nav`, `main`, `section` por cada una de las 7 secciones, `footer`), jerarquía de encabezados `h1`→`h2` por sección, CSS organizado por capas (variables → base → layout → componentes) sin hacks de navegador. |
| II. Accesibilidad real | Paleta verificada a mano contra WCAG AA antes de fijarse (ver research.md); foco visible vía `:focus-visible`; nav y selector de idioma 100% operables por teclado; `alt` descriptivo en todas las capturas del proyecto destacado; ninguna distinción (p. ej. "en aprendizaje") depende solo del color. |
| III. Evidencia visible de proceso QA | La sección Proyecto destacado (FR-010 a FR-014 de `002-profile-content`) es contenido de primer nivel, no un enlace al final: contexto, casos de prueba, bugs, evidencia de automatización y capturas embebidas. |
| IV. Honestidad en el copy | El tono (primera persona, profesional, sin venta) y la distinción explícita "consolidado" vs. "en aprendizaje" se documentan como parte del data model de contenido (ver data-model.md) para aplicarse de forma consistente en Sobre mí, Servicios y Habilidades. |
| V. Rendimiento ligero y responsive | Sin frameworks ni dependencias externas; mobile-first con breakpoints móvil/tablet/desktop; presupuesto de peso de página heredado de `001-site-structure` (<100 KB sin imágenes); imágenes del proyecto destacado optimizadas antes de publicarse. |

Sin violaciones. No aplica la sección Complexity Tracking.

## Project Structure

### Documentation (this feature)

```text
specs/002-profile-content/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
index.html                     # Documento único: Hero, Sobre mí, Servicios,
                                # Proyecto destacado, Habilidades, Experiencia,
                                # Contacto — cada uno como <section id="...">
                                # con contenido dual data-lang="es"/"en"

assets/
├── css/
│   ├── variables.css          # Paleta (blanco, violeta, azul oscuro), tipografía, espaciado
│   ├── base.css                # Reset ligero, tipografía base, foco visible
│   ├── layout.css              # Grid/flex mobile-first, breakpoints tablet/desktop
│   └── components.css          # Nav, tarjetas de servicio/proyecto/habilidad, selector de idioma
├── js/
│   ├── nav.js                   # Scroll a anclas, estado activo de nav, sin trampas de foco
│   ├── i18n.js                  # Toggle ES/EN vía atributos data-lang + localStorage,
│   │                             # conserva sección/scroll actual al cambiar
│   └── main.js                  # Bootstrap: inicializa nav.js e i18n.js
├── img/
│   └── proyecto-destacado/      # Capturas optimizadas (Login, Registro, Búsqueda, Favoritos,
│                                 # evidencia de casos de prueba/automatización)
└── cv/
    ├── cv-milagros-aranzabe-es.pdf
    └── cv-milagros-aranzabe-en.pdf
```

**Structure Decision**: Proyecto de un solo archivo HTML (sin separación frontend/backend ni build step) con activos estáticos versionados junto al código. Es la estructura mínima que satisface FR-011 (`001-site-structure`, one-page) sin introducir un generador de sitios estáticos o bundler no justificado por el alcance (principio V).

## Complexity Tracking

*Sin violaciones a la constitución — sección no aplicable.*

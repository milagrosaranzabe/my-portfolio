# Data Model: Contenido y Secciones del Perfil Profesional

No hay base de datos: este "modelo de datos" describe la forma del contenido tal como vive en `index.html` (marcado semántico + atributos `data-lang`) y, cuando aplique, en pequeñas constantes de `assets/js/`. Cada entidad viene de `specs/002-profile-content/spec.md` (Key Entities) y de `specs/001-site-structure/spec.md`.

## Enlace de navegación

Representa un destino ancla del one-page (`001-site-structure` FR-003, FR-011).

| Campo | Tipo | Notas |
|---|---|---|
| `id` | string | Debe coincidir con el `id` del `<section>` destino (p. ej. `proyecto-destacado`) — ver `contracts/navigation-anchors.md` |
| `etiqueta_es` / `etiqueta_en` | string | Texto visible del enlace en cada idioma |
| `orden` | integer | Posición en la barra de navegación |

## Servicio

Oferta de QA en la sección Servicios (FR-007, FR-008, FR-009).

| Campo | Tipo | Notas |
|---|---|---|
| `nombre_es` / `nombre_en` | string | Ej.: "Testing manual" / "Manual testing" |
| `descripcion_breve_es` / `_en` | string | Visible siempre |
| `descripcion_ampliada_es` / `_en` | string | Mostrada en hover/foco (FR-009) |
| `nivel` | enum: `consolidado` \| `en_aprendizaje` | Determina la marca visual (FR-008) |

**Validación**: si `nivel = en_aprendizaje`, el elemento visual DEBE incluir la etiqueta textual "en aprendizaje" (no solo color, por principio II de la constitución), y DEBE tener evidencia asociada visible en el sitio o se omite (FR-026).

**Regla de clasificación de `nivel`** (aplica también a Habilidad técnica): `consolidado` si la autora aplicó la habilidad en más de un proyecto o contexto profesional/académico real; `en_aprendizaje` si está siendo estudiada o practicada activamente pero todavía no aplicada en más de un proyecto real (aunque exista evidencia parcial, como el proyecto destacado).

## Proyecto destacado

Caso de estudio central — instancia única (Biblioteca de Películas y Series). FR-010 a FR-014.

**Nota (enmienda a la constitución v2.0.0, 2026-07-16)**: la evidencia detallada de QA (casos de prueba, bugs, automatización) dejó de ser contenido de este portfolio — vive en el sitio del propio proyecto, en su sección "Evidencia de QA". Las subentidades `CasoDePrueba` y `Bug` que existían acá se retiraron de este modelo; quedan como referencia de qué debería contener esa sección externa (ver Assumptions de `spec.md`), pero no se construyen en este repositorio.

| Campo | Tipo | Notas |
|---|---|---|
| `contexto_objetivo_es` / `_en` | string (rich text) | Qué es el proyecto y por qué se hizo |
| `funcionalidades_clave` | string[] | Fijo: Login, Registro, Búsqueda, Favoritos |
| `url_proyecto` | URL | Enlace prominente al sitio en vivo, abre en pestaña nueva — FR-011, FR-014 |
| `capturas` | Captura[] | Opcionales e ilustrativas — FR-013 |

### Subentidad: Captura

| Campo | Tipo | Notas |
|---|---|---|
| `archivo` | path | En `assets/img/proyecto-destacado/` |
| `alt_es` / `alt_en` | string | Obligatorio, descriptivo (principio II) |

## Habilidad técnica

FR-015, FR-016, FR-017.

| Campo | Tipo | Notas |
|---|---|---|
| `nombre` | string | Ej.: "Postman", "SQL", "Playwright" |
| `categoria` | enum | `Testing Manual` \| `Testing de APIs` \| `Automatización` \| `Bases de Datos` \| `Gestión Ágil` \| `IA aplicada a testing` |
| `nivel` | enum: `consolidado` \| `en_aprendizaje` | Igual criterio que Servicio |

## Entrada de experiencia

FR-018, FR-019, FR-020.

| Campo | Tipo | Notas |
|---|---|---|
| `rol_es` / `_en` | string | Obligatorio |
| `contexto_es` / `_en` | string | Organización o proyecto — obligatorio |
| `periodo` | string | Obligatorio (p. ej. "2024 – presente") |
| `logros_es` / `_en` | string[] | Opcional pero recomendado |
| `orden` | integer | Determina el orden cronológico (más reciente primero) |

**Validación (FR-020)**: si falta `rol_es`/`rol_en` o `periodo`, la entrada se omite del render.

## Enlace de contacto

FR-021 a FR-025.

| Campo | Tipo | Notas |
|---|---|---|
| `tipo` | enum: `linkedin` \| `email` \| `cv` | |
| `destino` | URL \| `mailto:` \| path a PDF | Para `cv`, un path por idioma (ES/EN) |
| `disponible` | boolean | Si `false` (p. ej. CV no listo), el enlace no se renderiza (FR-025) |

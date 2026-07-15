# Honestidad del Copy y Evidencia QA Checklist: Contenido y Secciones del Perfil Profesional

**Purpose**: Validar, antes de implementar, que los requisitos que sostienen los principios III (Evidencia Visible de Proceso QA) y IV (Honestidad en el Copy) de la constitución están completos, son claros, consistentes y medibles — no si el sitio ya construido los cumple.
**Created**: 2026-07-14
**Feature**: [spec.md](../spec.md) (`002-profile-content`), con referencias cruzadas a [001-site-structure/spec.md](../../001-site-structure/spec.md)

**Note**: Generado por `/speckit-checklist`. Foco elegido: honestidad del copy y evidencia de QA. Momento: revisión pre-implementación. Cerrado el 2026-07-14 tras editar ambas specs y `data-model.md`.

## Requirement Completeness

- [x] CHK001 - ¿Está acotado con un mínimo/máximo el volumen de casos de prueba "representativos" exigido en FR-011, o queda sin cuantificar? [Completeness, Spec §FR-011] — **Resuelto**: FR-011 ahora exige mínimo 3 casos de prueba y 2 bugs.
- [x] CHK002 - ¿Se especifica qué cantidad o tipo de evidencia hace que la automatización sea "concreta" en FR-012, o cualquier evidencia mínima lo satisface? [Completeness, Spec §FR-012] — **Resuelto**: FR-012 ahora exige al menos una pieza tangible (script, captura de ejecución o resumen de alcance) y acota el alcance descripto al trabajo realmente completado.
- [x] CHK003 - ¿Están documentados en algún lugar los criterios que distinguen "consolidado" de "en_aprendizaje" (data-model.md), o queda librado al criterio subjetivo de la autora sin una regla verificable? [Gap, Completeness, data-model.md §Servicio/Habilidad técnica] — **Resuelto**: `data-model.md` ahora define la regla ("consolidado" = aplicado en más de un proyecto/contexto real; "en_aprendizaje" = practicado activamente pero no aplicado en más de un proyecto real).
- [x] CHK004 - El caso "una habilidad en aprendizaje sin evidencia asociada" está descrito como Edge Case — ¿existe también un requisito funcional exigible que lo cubra, o queda solo como nota sin FR asociado? [Gap, Spec §Edge Cases] — **Resuelto**: nuevo FR-026 (comportamiento no deseado) formaliza la regla; el edge case ahora referencia FR-026.
- [x] CHK005 - ¿Se define quién es responsable de revisar, antes de publicar, que ninguna sección sobrevende una habilidad declarada "en aprendizaje" (FR-006), o queda sin asignar? [Gap, Spec §FR-006] — **Resuelto**: nueva Assumption asigna la autorrevisión a la autora (sin proceso de aprobación externo).

## Requirement Clarity

- [x] CHK006 - ¿"Evidencia visible" (FR-002 de `001-site-structure`) está definida con ejemplos concretos de qué cuenta como suficiente, o el término queda abierto a interpretación? [Clarity, Spec §001-FR-002] — **Resuelto**: FR-002 de `001-site-structure` ahora lista ejemplos concretos (capturas, casos de prueba, código/resultados de automatización, enlaces verificables).
- [x] CHK007 - ¿"Síntesis representativa" (Assumptions, evidencia condensada del proyecto destacado) tiene algún límite medible (cantidad de ítems, extensión), o es puramente subjetivo? [Clarity, Spec §Assumptions] — **Resuelto**: nueva Assumption acota "síntesis representativa" a los mínimos de FR-011/FR-012 (3 casos de prueba, 2 bugs, 1 evidencia de automatización).
- [x] CHK008 - FR-008 exige "indicar visualmente" que un servicio está en desarrollo — ¿exige explícitamente que ese indicador sea textual (no solo color), o deja abierta una implementación que dependería solo del color y entraría en conflicto con el principio II? [Ambiguity, Spec §FR-008] — **Resuelto 2026-07-14**: FR-008 ahora exige explícitamente una etiqueta textual, no solo color (hallazgo C1 de `/speckit-analyze`).
- [x] CHK009 - FR-017 usa "por ejemplo, con una etiqueta 'en aprendizaje'" — ¿esa etiqueta textual es obligatoria, o el "por ejemplo" la deja como sugerencia no vinculante? [Ambiguity, Spec §FR-017] — **Resuelto 2026-07-14**: FR-017 ahora exige explícitamente una etiqueta textual, no solo color (hallazgo C1 de `/speckit-analyze`).
- [x] CHK010 - FR-006 dice que "el sitio SHALL corregir el copy" ante una atribución indebida — dado que es un sitio estático sin lógica de autocorrección, ¿queda claro que esto es un paso editorial/de revisión humana y no un comportamiento en tiempo de ejecución? [Clarity, Spec §FR-006] — **Resuelto**: FR-006 reescrito para aclarar que es revisión editorial previa a publicar, no corrección en tiempo de ejecución.

## Requirement Consistency

- [x] CHK011 - ¿El tratamiento visual/textual de "en aprendizaje" está especificado de forma consistente entre Sobre mí (FR-005), Servicios (FR-008) y Habilidades (FR-017), o cada sección podría implementarlo de forma distinta? [Consistency, Spec §FR-005/FR-008/FR-017] — **Resuelto**: nuevo FR-027 exige que las tres secciones reutilicen el mismo componente de indicador.
- [x] CHK012 - ¿La regla general de honestidad de `001-site-structure` (FR-002) está referenciada explícitamente desde las reglas más específicas de `002-profile-content` (FR-005, FR-006, FR-008, FR-017), o ambas specs podrían evolucionar por separado y desalinearse? [Traceability, Consistency] — **Resuelto**: nueva sección "Reglas transversales de honestidad" en `002` cita explícitamente FR-002 de `001`.

## Acceptance Criteria Quality

- [x] CHK013 - ¿Existe un criterio de éxito medible que verifique que FR-006 (ninguna habilidad sobrevendida) se cumple en todo el sitio publicado, o SC-002/SC-006 solo cubren presencia de evidencia y distinción visual, dejando sin verificar la ausencia de afirmaciones falsas? [Measurability, Gap] — **Resuelto**: nuevo SC-008 verifica consistencia del 100% de las menciones de tecnologías.
- [x] CHK014 - ¿"Al menos una pieza de evidencia concreta" (SC-002) puede verificarse objetivamente, o "pieza de evidencia" queda sin definir (p. ej., ¿alcanzaría una sola oración de intención?)? [Measurability, Spec §SC-002] — **Resuelto**: nueva Assumption define "pieza de evidencia concreta" con ejemplos concretos y excluye una sola oración de intención.

## Scenario Coverage / Edge Case Coverage

- [x] CHK015 - ¿Hay requisitos para el escenario en que la clasificación de una habilidad cambia con el tiempo (de "en aprendizaje" a "consolidado"), incluyendo quién actualiza el sitio y cómo se evita contenido desactualizado? [Gap, Coverage] — **Resuelto**: nueva Assumption asigna la revisión periódica de la clasificación a la autora (junto con cada actualización del CV).
- [x] CHK016 - ¿Hay algún requisito que exija revisar que el contenido del CV (un archivo externo, mantenido aparte) siga siendo consistente con las afirmaciones de honestidad hechas en el sitio? [Gap, Dependencies] — **Resuelto**: nueva Assumption asigna esa responsabilidad a la autora.

## Dependencies & Assumptions

- [x] CHK017 - La Assumption de `001-site-structure` ("la traducción al inglés no necesita ser palabra por palabra") — ¿se reconcilia con el requisito de honestidad, exigiendo que la versión EN preserve las mismas distinciones "consolidado vs. en aprendizaje" que la versión ES, o solo exige "el mismo mensaje honesto" en términos generales? [Consistency, Assumption] — **Resuelto**: Assumption de `001-site-structure` ahora exige explícitamente preservar esas distinciones en ambos idiomas.
- [x] CHK018 - La lista de buzzwords de ejemplo de la constitución ("experto en IA", "10x QA", "ninja") — ¿se trata como exhaustiva o solo ilustrativa, y esa ambigüedad queda resuelta en algún lugar de la spec para uso como criterio de revisión de copy? [Ambiguity, Gap] — **Resuelto**: FR-002 de `001-site-structure` aclara que la lista es ilustrativa y fija el criterio general de cumplimiento.

## Ambiguities & Conflicts

- [x] CHK019 - ¿Se define quién es responsable de la vigencia de las etiquetas "en aprendizaje" vs. "consolidado" después de la publicación inicial (cadencia de auto-revisión de la autora), o queda completamente sin abordar? [Gap, Assumption] — **Resuelto**: misma Assumption que CHK015.
- [x] CHK020 - ¿Existe una tensión entre exigir "evidencia concreta de automatización" (FR-012) y el nivel real declarado por la autora (explícitamente "en transición activa" hacia automatización) — es decir, la spec acota cuánta evidencia de automatización es honesto mostrar sin sobrevender la madurez real? [Conflict, Ambiguity] — **Resuelto**: FR-012 ahora exige que el alcance descripto corresponda exactamente al trabajo realmente completado, sin extrapolar.

## Notes

- Foco de este checklist: honestidad del copy y evidencia de QA (principios III/IV), sobre `002-profile-content`, para revisión pre-implementación.
- **Checklist cerrado (20/20) el 2026-07-14.** Ediciones aplicadas en `002-profile-content/spec.md` (FR-006, FR-011, FR-012, FR-026, FR-027, SC-008, Assumptions), `002-profile-content/data-model.md` (regla de clasificación `nivel`), y `001-site-structure/spec.md` (FR-002, Assumption de traducción).
- **Pendiente de seguimiento**: `tasks.md` fue generado antes de FR-026/FR-027/SC-008 — antes de `/speckit-implement` conviene revisar si necesita tareas nuevas (en particular FR-027, que exige un componente visual compartido para el indicador "en aprendizaje" entre Sobre mí, Servicios y Habilidades).

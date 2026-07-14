# Honestidad del Copy y Evidencia QA Checklist: Contenido y Secciones del Perfil Profesional

**Purpose**: Validar, antes de implementar, que los requisitos que sostienen los principios III (Evidencia Visible de Proceso QA) y IV (Honestidad en el Copy) de la constitución están completos, son claros, consistentes y medibles — no si el sitio ya construido los cumple.
**Created**: 2026-07-14
**Feature**: [spec.md](../spec.md) (`002-profile-content`), con referencias cruzadas a [001-site-structure/spec.md](../../001-site-structure/spec.md)

**Note**: Generado por `/speckit-checklist`. Foco elegido: honestidad del copy y evidencia de QA. Momento: revisión pre-implementación.

## Requirement Completeness

- [ ] CHK001 - ¿Está acotado con un mínimo/máximo el volumen de casos de prueba "representativos" exigido en FR-011, o queda sin cuantificar? [Completeness, Spec §FR-011]
- [ ] CHK002 - ¿Se especifica qué cantidad o tipo de evidencia hace que la automatización sea "concreta" en FR-012, o cualquier evidencia mínima lo satisface? [Completeness, Spec §FR-012]
- [ ] CHK003 - ¿Están documentados en algún lugar los criterios que distinguen "consolidado" de "en_aprendizaje" (data-model.md), o queda librado al criterio subjetivo de la autora sin una regla verificable? [Gap, Completeness, data-model.md §Servicio/Habilidad técnica]
- [ ] CHK004 - El caso "una habilidad en aprendizaje sin evidencia asociada" está descrito como Edge Case — ¿existe también un requisito funcional exigible que lo cubra, o queda solo como nota sin FR asociado? [Gap, Spec §Edge Cases]
- [ ] CHK005 - ¿Se define quién es responsable de revisar, antes de publicar, que ninguna sección sobrevende una habilidad declarada "en aprendizaje" (FR-006), o queda sin asignar? [Gap, Spec §FR-006]

## Requirement Clarity

- [ ] CHK006 - ¿"Evidencia visible" (FR-002 de `001-site-structure`) está definida con ejemplos concretos de qué cuenta como suficiente, o el término queda abierto a interpretación? [Clarity, Spec §001-FR-002]
- [ ] CHK007 - ¿"Síntesis representativa" (Assumptions, evidencia condensada del proyecto destacado) tiene algún límite medible (cantidad de ítems, extensión), o es puramente subjetivo? [Clarity, Spec §Assumptions]
- [ ] CHK008 - FR-008 exige "indicar visualmente" que un servicio está en desarrollo — ¿exige explícitamente que ese indicador sea textual (no solo color), o deja abierta una implementación que dependería solo del color y entraría en conflicto con el principio II? [Ambiguity, Spec §FR-008]
- [ ] CHK009 - FR-017 usa "por ejemplo, con una etiqueta 'en aprendizaje'" — ¿esa etiqueta textual es obligatoria, o el "por ejemplo" la deja como sugerencia no vinculante? [Ambiguity, Spec §FR-017]
- [ ] CHK010 - FR-006 dice que "el sitio SHALL corregir el copy" ante una atribución indebida — dado que es un sitio estático sin lógica de autocorrección, ¿queda claro que esto es un paso editorial/de revisión humana y no un comportamiento en tiempo de ejecución? [Clarity, Spec §FR-006]

## Requirement Consistency

- [ ] CHK011 - ¿El tratamiento visual/textual de "en aprendizaje" está especificado de forma consistente entre Sobre mí (FR-005), Servicios (FR-008) y Habilidades (FR-017), o cada sección podría implementarlo de forma distinta? [Consistency, Spec §FR-005/FR-008/FR-017]
- [ ] CHK012 - ¿La regla general de honestidad de `001-site-structure` (FR-002) está referenciada explícitamente desde las reglas más específicas de `002-profile-content` (FR-005, FR-006, FR-008, FR-017), o ambas specs podrían evolucionar por separado y desalinearse? [Traceability, Consistency]

## Acceptance Criteria Quality

- [ ] CHK013 - ¿Existe un criterio de éxito medible que verifique que FR-006 (ninguna habilidad sobrevendida) se cumple en todo el sitio publicado, o SC-002/SC-006 solo cubren presencia de evidencia y distinción visual, dejando sin verificar la ausencia de afirmaciones falsas? [Measurability, Gap]
- [ ] CHK014 - ¿"Al menos una pieza de evidencia concreta" (SC-002) puede verificarse objetivamente, o "pieza de evidencia" queda sin definir (p. ej., ¿alcanzaría una sola oración de intención?)? [Measurability, Spec §SC-002]

## Scenario Coverage / Edge Case Coverage

- [ ] CHK015 - ¿Hay requisitos para el escenario en que la clasificación de una habilidad cambia con el tiempo (de "en aprendizaje" a "consolidado"), incluyendo quién actualiza el sitio y cómo se evita contenido desactualizado? [Gap, Coverage]
- [ ] CHK016 - ¿Hay algún requisito que exija revisar que el contenido del CV (un archivo externo, mantenido aparte) siga siendo consistente con las afirmaciones de honestidad hechas en el sitio? [Gap, Dependencies]

## Dependencies & Assumptions

- [ ] CHK017 - La Assumption de `001-site-structure` ("la traducción al inglés no necesita ser palabra por palabra") — ¿se reconcilia con el requisito de honestidad, exigiendo que la versión EN preserve las mismas distinciones "consolidado vs. en aprendizaje" que la versión ES, o solo exige "el mismo mensaje honesto" en términos generales? [Consistency, Assumption]
- [ ] CHK018 - La lista de buzzwords de ejemplo de la constitución ("experto en IA", "10x QA", "ninja") — ¿se trata como exhaustiva o solo ilustrativa, y esa ambigüedad queda resuelta en algún lugar de la spec para uso como criterio de revisión de copy? [Ambiguity, Gap]

## Ambiguities & Conflicts

- [ ] CHK019 - ¿Se define quién es responsable de la vigencia de las etiquetas "en aprendizaje" vs. "consolidado" después de la publicación inicial (cadencia de auto-revisión de la autora), o queda completamente sin abordar? [Gap, Assumption]
- [ ] CHK020 - ¿Existe una tensión entre exigir "evidencia concreta de automatización" (FR-012) y el nivel real declarado por la autora (explícitamente "en transición activa" hacia automatización) — es decir, la spec acota cuánta evidencia de automatización es honesto mostrar sin sobrevender la madurez real? [Conflict, Ambiguity]

## Notes

- Foco de este checklist: honestidad del copy y evidencia de QA (principios III/IV), sobre `002-profile-content`, para revisión pre-implementación.
- Marcar los ítems como completados (`[x]`) a medida que cada ambigüedad se resuelve en la spec — no al verificar el sitio ya construido.
- Varios ítems (CHK003, CHK008, CHK009, CHK020) probablemente requieran una decisión explícita del usuario antes de `/speckit-implement`, no solo redacción.

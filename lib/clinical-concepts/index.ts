/**
 * Aggregator + helpers for the clinical concept registry per system map Section 1K.5.A.
 *
 * Composes per-domain registries into one ALL_CONCEPTS map keyed by concept_id.
 * Used by Phase 4 CI lint + runtime resolver to validate concept_id references in
 * intake module emissions.
 */

import { CONDITION_REGISTRY } from './condition';
import { SYMPTOM_REGISTRY } from './symptom';
import { FAMILY_HISTORY_REGISTRY } from './family_history';
import { INTENT_REGISTRY } from './intent';
import { TREATMENT_TARGET_REGISTRY } from './treatment-target';
import { FINDING_REGISTRY } from './finding';
import { MEDICATION_CONCEPT_REGISTRY } from './medication-concept';
import { ALLERGEN_REGISTRY } from './allergen';
import { IMMUNIZATION_CONCEPT_REGISTRY } from './immunization-concept';
import { PROCEDURE_REGISTRY } from './procedure';
import type { ClinicalConcept, ConceptRegistry, ConceptType } from './types';

export * from './types';
export { CONDITION_REGISTRY } from './condition';
export { SYMPTOM_REGISTRY } from './symptom';
export { FAMILY_HISTORY_REGISTRY } from './family_history';
export { INTENT_REGISTRY } from './intent';
export { TREATMENT_TARGET_REGISTRY } from './treatment-target';
export { FINDING_REGISTRY } from './finding';
export { MEDICATION_CONCEPT_REGISTRY } from './medication-concept';
export { ALLERGEN_REGISTRY } from './allergen';
export { IMMUNIZATION_CONCEPT_REGISTRY } from './immunization-concept';
export { PROCEDURE_REGISTRY } from './procedure';
export {
  VITAL_FIELD_NAMES,
  isValidVitalFieldName,
  type VitalFieldName,
} from './vital-field-names';

/**
 * Consolidated registry — every concept_id our system knows about, keyed by id.
 * Phase 4 CI lint walks every `Question.emissions[].payload.concept_id` against this.
 */
export const ALL_CONCEPTS: ConceptRegistry = {
  ...CONDITION_REGISTRY,
  ...SYMPTOM_REGISTRY,
  ...FAMILY_HISTORY_REGISTRY,
  ...INTENT_REGISTRY,
  ...TREATMENT_TARGET_REGISTRY,
  ...FINDING_REGISTRY,
  ...MEDICATION_CONCEPT_REGISTRY,
  ...ALLERGEN_REGISTRY,
  ...IMMUNIZATION_CONCEPT_REGISTRY,
  ...PROCEDURE_REGISTRY,
};

/** Look up a concept by id. Returns undefined if not registered. */
export function getConcept(conceptId: string): ClinicalConcept | undefined {
  return ALL_CONCEPTS[conceptId];
}

/** Strict lookup — throws if concept not registered. Use in runtime hot paths. */
export function requireConcept(conceptId: string): ClinicalConcept {
  const concept = ALL_CONCEPTS[conceptId];
  if (!concept) {
    throw new Error(`Unregistered concept_id: ${conceptId}. Add to lib/clinical-concepts/<domain>.ts.`);
  }
  return concept;
}

/** CI-lintable referential integrity check. */
export function isValidConceptId(conceptId: string): boolean {
  return Object.prototype.hasOwnProperty.call(ALL_CONCEPTS, conceptId);
}

/** Filter registry by concept_type. */
export function getConceptsByType(conceptType: ConceptType): ClinicalConcept[] {
  return Object.values(ALL_CONCEPTS).filter((c) => c.concept_type === conceptType);
}

/**
 * CI-lint helper for Section 1K.0.5.9: every intent + treatment_target concept must
 * have at least one consumer (rule or template) declared. Returns orphans.
 */
export function findOrphanIntentsAndTargets(): ClinicalConcept[] {
  return Object.values(ALL_CONCEPTS).filter((c) => {
    if (c.concept_type !== 'intent' && c.concept_type !== 'treatment_target') return false;
    const hasRule = (c.consumed_by_rules ?? []).length > 0;
    const hasTemplate = (c.consumed_by_templates ?? []).length > 0;
    return !hasRule && !hasTemplate;
  });
}

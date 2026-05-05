/**
 * Clinical concept registry types per system map Section 1K.5.A.
 *
 * Scope per Section 1K.0.5.3: clinical concepts apply to the CLAIM LEDGER
 * (`patient_clinical_assertions`) only. Reconciled clinical entities
 * (medications, allergies, immunizations, exam findings) have their own
 * structured types in `lib/entities/`.
 *
 * Concept_id naming convention: `<domain>.<name>` where `<domain>` is one of
 * the registered concept_type values. NO `atom.*` prefix (per Section 1K.0.5
 * anti-patterns).
 */

import type { ZodTypeAny } from 'zod';

/**
 * Concept type — derived from concept_id prefix at the DB layer (GENERATED column).
 * In TS-land, used as a discriminator on the registry.
 */
export const CONCEPT_TYPES = [
  'condition',
  'symptom',
  'family_history',
  'intent',
  'treatment_target',
  'finding',
  'medication',
  'allergy',
  'immunization',
  'procedure',
  'vital',
] as const;

export type ConceptType = (typeof CONCEPT_TYPES)[number];

export interface ClinicalConcept {
  /** Canonical concept_id, e.g., 'condition.pancreatitis_history'. */
  concept_id: string;
  /** Concept version (separate from registry version; pinned at write time per Section 1K.5.A). */
  concept_version: string;
  /** Domain prefix derived from concept_id; redundant but useful for type narrowing. */
  concept_type: ConceptType;
  /** Human-readable description. */
  description: string;
  /** Optional Zod schema validating the assertion's `metadata` jsonb payload. Phase 4 runtime enforces. */
  metadata_schema?: ZodTypeAny;
  /**
   * Cross-pathway consumer hints. CI lint validates that intent / treatment_target
   * concepts have at least one consumer per Section 1K.0.5.9.
   */
  consumed_by_rules?: string[];
  consumed_by_templates?: string[];
  /** Optional code-system mappings for future cross-system integrations. */
  codes?: {
    snomed?: string[];
    icd10?: string[];
    rxnorm?: string[];
    cvx?: string[];
    loinc?: string[];
  };
}

export type ConceptRegistry = Record<string, ClinicalConcept>;

/**
 * Validate that a concept_id is registered in the consolidated registry.
 * Aggregator (`index.ts`) provides the runtime helper.
 */
export function isValidConceptId(registry: ConceptRegistry, conceptId: string): boolean {
  return Object.prototype.hasOwnProperty.call(registry, conceptId);
}

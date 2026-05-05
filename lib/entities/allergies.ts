/**
 * Allergy entity types — `patient_allergies` table.
 * Reconciled allergy list per Section 1K.0.5.3.
 */

import type { ReconciledEntityBase } from './types';

export const ALLERGY_REACTION_TYPES = [
  'rash',
  'anaphylaxis',
  'swelling',
  'gi',
  'respiratory',
  'other',
  'unknown',
] as const;
export type AllergyReactionType = (typeof ALLERGY_REACTION_TYPES)[number];

export const ALLERGY_SEVERITY_VALUES = [
  'mild',
  'moderate',
  'severe',
  'life_threatening',
  'unknown',
] as const;
export type AllergySeverity = (typeof ALLERGY_SEVERITY_VALUES)[number];

export interface PatientAllergy extends ReconciledEntityBase {
  /** Concept_id from allergen registry. */
  allergen_concept_id: string;
  reaction_type: AllergyReactionType;
  severity: AllergySeverity;
  onset_age?: number;
  onset_date?: string;
  last_reaction_date?: string;
  verified_by_user_id?: string;
  clinical_visit_id?: string;
}

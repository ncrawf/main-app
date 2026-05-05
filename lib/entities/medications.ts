/**
 * Medication entity types — `patient_medications` table.
 * Reconciled med list per Section 1K.0.5.3.
 */

import type { ReconciledEntityBase } from './types';

export const MEDICATION_STATUS_VALUES = ['proposed', 'active', 'discontinued', 'on_hold'] as const;
export type MedicationStatus = (typeof MEDICATION_STATUS_VALUES)[number];

export const MEDICATION_ROUTE_VALUES = [
  'PO', 'IM', 'SQ', 'IV', 'topical', 'inhaled', 'sublingual', 'transdermal',
  'rectal', 'vaginal', 'ophthalmic', 'otic', 'nasal', 'other',
] as const;
export type MedicationRoute = (typeof MEDICATION_ROUTE_VALUES)[number];

export interface PatientMedication extends ReconciledEntityBase {
  /** Concept_id from medication-concept registry (claim-side label). */
  medication_concept_id: string;
  /** Canonical normalized name (RxNorm-derived when available). */
  name_normalized: string;
  /** Patient's free-text rendition (preserved as captured). */
  name_as_reported?: string;

  // Dose + administration
  dose_value?: number;
  dose_units?: string;
  frequency?: string;
  route?: MedicationRoute;
  prn_indication?: string;

  // Prescriber linkage
  prescribed_by_user_id?: string;
  prescribed_by_external_provider_id?: string;
  prescribing_clinical_visit_id?: string;
  treatment_order_id?: string;

  // Lifecycle
  start_date?: string;
  end_date?: string;
  status: MedicationStatus;

  // Reconciled overrides ReconciledEntityBase optionals
  // (kept here as the entity's primary state machine fields).
}

/**
 * Reconciliation status enum for reconciled clinical entity tables per system map
 * Section 1K.0.5.4 two-stage flow (claim → reconciliation → entity).
 *
 * Applies to: patient_medications, patient_allergies, patient_immunizations,
 * patient_exam_findings.
 *
 * Distinct from `assertion_status` which applies to `patient_clinical_assertions` only.
 */

export const RECONCILIATION_STATUS_VALUES = [
  'unreconciled',
  'reconciled',
  'conflict',
  'declined_to_reconcile',
  'superseded',
] as const;

export type ReconciliationStatus = (typeof RECONCILIATION_STATUS_VALUES)[number];

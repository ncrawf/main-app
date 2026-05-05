/**
 * Authored-by enum for `patient_clinical_assertions.authored_by` per system map Section 1K.5.A.
 *
 * Authority_rank is computed from this enum as a STORED generated column in the DB:
 *   provider_confirmed=100 > provider_assessed=90 > lab_derived=70 > document_extracted=60
 *   > patient_self_correction=50 > patient_reported=40 > third_party_reported=30
 *   > ai_suggested=20 > system_derived=10
 *
 * Authority_rank is a CLAIM LEDGER read-time default per Section 1K.0.5.10. It does NOT
 * apply to reconciled entity rows (`patient_medications`, `patient_allergies`, etc.) which
 * use the `reconciliation_status` enum instead.
 *
 * For `concept_type = 'intent'`, `provider_rejected` status is nonsensical (provider can't
 * overrule patient on patient's own values). Patient revisions after counseling write a
 * new row with `authored_by: 'patient_self_correction'` + metadata.counseled_by_provider_user_id.
 */

export const AUTHORED_BY_VALUES = [
  'patient_reported',
  'patient_self_correction',
  'provider_assessed',
  'provider_confirmed',
  'document_extracted',
  'lab_derived',
  'third_party_reported',
  'ai_suggested',
  'system_derived',
] as const;

export type AuthoredBy = (typeof AUTHORED_BY_VALUES)[number];

export const AUTHORITY_RANK: Record<AuthoredBy, number> = {
  provider_confirmed: 100,
  provider_assessed: 90,
  lab_derived: 70,
  document_extracted: 60,
  patient_self_correction: 50,
  patient_reported: 40,
  third_party_reported: 30,
  ai_suggested: 20,
  system_derived: 10,
};

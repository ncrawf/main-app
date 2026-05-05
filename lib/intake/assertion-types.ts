/**
 * Assertion-type, status, confidence, and severity enums for `patient_clinical_assertions`
 * per system map Section 1K.5.A.
 *
 * Scope per Section 1K.0.5.3: this table is the canonical clinical claim ledger
 * for claim-shaped data only. Identity / consent / commerce / observation / decision /
 * telemetry data lives elsewhere per the data routing discipline.
 */

/**
 * Assertion type — the kind of clinical claim being made.
 * Extended slightly beyond the original 11 values to accommodate `signed`, `selected`,
 * `captured` for first-contact claim rows that feed reconciled entities (e.g.,
 * "patient says they take metformin" claim → patient_medications entity).
 */
export const ASSERTION_TYPE_VALUES = [
  'present',
  'absent',
  'history_of',
  'suspected',
  'ruled_out',
  'active_problem',
  'resolved',
  'family_history',
  'risk_factor',
  'exposure',
  'use',
  'allergy_reaction',
  'signed',
  'selected',
  'captured',
] as const;

export type AssertionType = (typeof ASSERTION_TYPE_VALUES)[number];

/**
 * Status — the workflow state of a claim ledger row.
 * Distinct from `reconciliation_status` which applies to reconciled entity tables only.
 */
export const ASSERTION_STATUS_VALUES = [
  'unconfirmed',
  'provider_confirmed',
  'provider_rejected',
  'provider_resolved',
  'provider_refined',
  'retracted',
  'superseded',
] as const;

export type AssertionStatus = (typeof ASSERTION_STATUS_VALUES)[number];

/**
 * Confidence — source's self-reported reliability. Orthogonal to `status`.
 */
export const CONFIDENCE_VALUES = ['low', 'moderate', 'high', 'definitive'] as const;

export type Confidence = (typeof CONFIDENCE_VALUES)[number];

/**
 * Severity — clinical severity scale.
 */
export const SEVERITY_VALUES = ['none', 'mild', 'moderate', 'severe', 'very_severe'] as const;

export type Severity = (typeof SEVERITY_VALUES)[number];

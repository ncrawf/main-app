/**
 * Intake session status enum + metadata flag types per system map Section 1K.13 + 1K.19.7.
 *
 * Status enum supports the full lifecycle including identity-uplift sub-states and
 * supersession references for re-entry per Section 1K.13 Modes A-J.
 *
 * In-office encounter interstitial uses `metadata.awaiting_in_person_encounter` flag
 * (lightweight pattern; avoids enum migration) per Section 1Q.23 Patch G6.
 */

export const INTAKE_SESSION_STATUS_VALUES = [
  'in_progress',
  'submitted',
  'closed_ineligible',
  'abandoned',
  'superseded',
  'identity_uplift_in_progress',
  'identity_uplift_pending_retry',
  'identity_uplift_cancelled',
  'identity_uplift_refreshed',
] as const;

export type IntakeSessionStatus = (typeof INTAKE_SESSION_STATUS_VALUES)[number];

/**
 * Optional metadata flags on `intake_sessions.metadata` jsonb. All optional; rows may
 * have any subset depending on flow state.
 */
export interface IntakeSessionMetadataFlags {
  /** True between Module 3 identity_verification completion and Module 26 checkout in in-office mode. */
  awaiting_in_person_encounter?: boolean;
  /** Timestamp when in-office encounter handoff occurred (after Module 3, before live encounter). */
  in_office_handoff_at?: string;
  /** Timestamp when provider opened the patient in exam-room workspace per Section 1Q.23 Patch G6. */
  encounter_opened_at?: string;
  /** True after provider authors clinical_visits row at encounter close. */
  encounter_resolved?: boolean;
  /** Provider's encounter decision: approved | denied | deferred_for_labs. */
  encounter_decision?: 'approved' | 'denied' | 'deferred_for_labs';
  /** Path A or B per Section 1Q.23 Patch G5 in-office checkout discipline. */
  checkout_path?: 'deep_link' | 'staff_captured';
  /** Timestamp when checkout deep link was sent to patient (Path A only). */
  checkout_link_sent_at?: string;
  /** Free-form key/value bag for ad-hoc flow state. */
  [key: string]: unknown;
}

export const SESSION_CLOSED_REASON_CODES = [
  'denied_contraindication_absolute',
  'denied_state_ineligibility',
  'denied_age_ineligibility',
  'denied_bmi_threshold',
  'denied_pregnancy_contraindication',
  'closed_clarification_unanswered',
  'closed_safety_clarification_unanswered',
  'patient_self_closed',
  'admin_closed',
  'superseded_by_new_session',
] as const;

export type SessionClosedReasonCode = (typeof SESSION_CLOSED_REASON_CODES)[number];

/**
 * Phase 4H-templates-discipline commit 3 — awaiting_clinical_review parity migration.
 *
 * Fourth typed Rule overall; second in the clinical_decision domain
 * (sibling to case_approved_v1). System-authority status acknowledgment,
 * NOT a provider authority statement. Distinct from case_approved on
 * three axes:
 *   - tier_1 (vs tier_2)
 *   - authority_floor='system' (vs 'provider')
 *   - recall_severity='operational' (vs 'clinical_significant')
 *   - message_intent='operational' (vs 'clinical')
 *
 * FIRST Rule with a 2-status OR producer gate: the legacy
 * PATIENT_NOTIFY_BY_STATUS map routed BOTH `under_review:` and
 * `pending_approval:` transitions to the same `awaiting_clinical_review`
 * notification. The typed Rule preserves this — the producer-side
 * gate at lib/internal/patient-case/impl.ts fires
 * dispatchRuleTriggerEvent on transitions to either status.
 *
 * Migrates the v0 awaiting_clinical_review notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS BOTH
 * map entries + `lib/notifications/patientMessages.ts`
 * case 'awaiting_clinical_review' arms) per Section 1Q.4 + 1Q.5 + ADR
 * Section 7.5 + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Per Section 1Q.13 module taxonomy: this is `clinical_decision` —
 * the precursor status to a clinical decision (case_approved or
 * future case_denied). Grouped in the same module/folder for
 * semantic coherence.
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls within
 * the commit-5 approved set (no new orchestrator boundary required).
 *
 * Per the same axis-separation reasoning that locked
 * transactional_critical: false on case_approved_v1 (binding):
 * cadence-bypass is a separate axis from operational/clinical
 * importance. A status acknowledgment is NOT cadence-bypass critical;
 * future safety-window suppression should be allowed to honor itself
 * for this notification.
 *
 * `pathway_scope: undefined` (binding for this commit): the producer-
 * site filters at lib/internal/patient-case/impl.ts already gate to
 * glp1_primary treatment_items + weight_loss care_programs (preserving
 * legacy behavior); the Rule layer does not double-filter.
 * pathway_sensitivity stays null on enqueue — correct for tier_1 (the
 * disclosure-policy clamp does not read it).
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 1 (existence_only).
 *   Honest tier survey: legacy body says "Your visit is now in clinical
 *   review. We will send another update as soon as your clinician has
 *   a decision." References "visit" + "case" + "clinician" + "decision"
 *   without naming protocol, dose, condition, or pathway. tier_1 =
 *   existence_only per Section 1Q.17.
 */

import type { Rule } from '../types'

export const awaitingClinicalReviewV1: Rule = {
  rule_id: 'rule.clinical_decision.awaiting_clinical_review_v1',
  rule_version: '1.0.0',
  domain: 'clinical_decision',
  trigger: {
    kind: 'event',
    event_type: 'patient.case_under_review',
  },
  preconditions: [],
  required_inputs: [
    { source: 'treatment_items', field: 'id' },
    { source: 'care_programs', field: 'id' },
    { source: 'patients', field: 'email' },
    { source: 'patients', field: 'first_name' },
    { source: 'patients', field: 'phone' },
    { source: 'brands', field: 'slug' },
    { source: 'audit_events', field: 'id' },
  ],
  authority_floor: 'system',
  action: {
    kind: 'notify',
    channels: ['email', 'sms'],
    send_policy_class: 'transactional_operational',
    intended_privacy_exposure_level: 1,
    message_intent: 'operational',
  },
  priority: 'standard',
  blocking: false,
  template_key: 'tmpl.clinical_decision.awaiting_clinical_review_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'care_programs', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.clinical_decision.awaiting_clinical_review_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Fourth parity proof of the v0 -> 1Q cutover. Second clinical_decision ' +
    'domain Rule. FIRST with a 2-status OR producer gate: BOTH ' +
    "`under_review:` AND `pending_approval:` PATIENT_NOTIFY_BY_STATUS " +
    'map entries route to this single typed Rule, preserving legacy ' +
    'behavior where each genuine status transition into either status ' +
    'fires a fresh notification. tier_1 existence_only operational ' +
    'intent (vs case_approved tier_2 clinical); system-authority ' +
    'status ack (vs case_approved provider-authority decision); ' +
    'recall_severity operational (vs clinical_significant). Pathway-' +
    'agnostic. Producer-site filters at lib/internal/patient-case/' +
    'impl.ts gate to glp1_primary / weight_loss (preserves legacy). ' +
    'Idempotency keyed on the underlying status-transition audit_event_id ' +
    '(so a case bouncing pending -> under_review -> pending_approval ' +
    "-> under_review fires one notification per genuine transition). " +
    'transactional_critical: false on the Template per the same axis-' +
    'separation reasoning that locked it false on case_approved_v1 — ' +
    'cadence-bypass and operational/clinical importance are separate ' +
    'axes. Wording diff log per ADR Section 7.5 lives in the commit ' +
    'message body.',
  recall_severity: 'operational',
}

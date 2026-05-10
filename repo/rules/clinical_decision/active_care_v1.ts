/**
 * Phase 4H-templates-discipline commit 5 — active_care parity migration.
 *
 * Sixth typed Rule overall; third in the clinical_decision domain
 * (siblings: case_approved_v1, awaiting_clinical_review_v1).
 * System-authority status acknowledgment, NOT a provider authority
 * statement. Same shape as awaiting_clinical_review_v1:
 *   - tier_1 existence_only
 *   - authority_floor='system' (vs case_approved 'provider')
 *   - recall_severity='operational'
 *   - message_intent='operational'
 *
 * Migrates the v0 active_care notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * `active: 'active_care'` map entry + `lib/notifications/
 * patientMessages.ts` case 'active_care' arms) per Section 1Q.4 +
 * 1Q.5 + ADR Section 7.5 + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Per Section 1Q.13 module taxonomy: this is `clinical_decision` —
 * the active-status acknowledgment that follows provider approval
 * and treatment activation. Grouped in the same module/folder for
 * semantic coherence with the other clinical-decision-shaped status
 * acks.
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls within
 * the commit-5 approved set (no new orchestrator boundary required).
 *
 * Per the same axis-separation reasoning that locked
 * transactional_critical: false on the prior clinical_decision
 * Templates: cadence-bypass is a separate axis from operational/
 * clinical importance. An active-care welcome is informational; if
 * Step 4 safety orchestration ever suppresses normal traffic during
 * an active safety window, this notification SHOULD honor the
 * suppression.
 *
 * `pathway_scope: undefined` (binding for this commit): the producer-
 * site filters at lib/internal/patient-case/impl.ts already gate to
 * glp1_primary treatment_items + weight_loss care_programs (preserving
 * legacy behavior); the Rule layer does not double-filter.
 * pathway_sensitivity stays null on enqueue — correct for tier_1
 * (the disclosure-policy clamp does not read it).
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 1 (existence_only).
 *   Honest tier survey: legacy body says "You are now in active care
 *   with MAIN. Your dashboard includes your current plan, check-ins,
 *   and next steps." References "active care" + "current plan" +
 *   "check-ins" + "next steps" without naming protocol, dose,
 *   condition, or pathway. tier_1 = existence_only per Section 1Q.17.
 */

import type { Rule } from '../types'

export const activeCareV1: Rule = {
  rule_id: 'rule.clinical_decision.active_care_v1',
  rule_version: '1.0.0',
  domain: 'clinical_decision',
  trigger: {
    kind: 'event',
    event_type: 'patient.case_active',
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
  template_key: 'tmpl.clinical_decision.active_care_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'care_programs', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.clinical_decision.active_care_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Sixth parity proof of the v0 -> 1Q cutover. Third clinical_decision ' +
    'domain Rule (siblings: case_approved_v1, awaiting_clinical_review_v1). ' +
    'Same shape as awaiting_clinical_review_v1: system-authority status ' +
    'ack, tier_1 existence_only, operational intent, recall_severity ' +
    'operational. Migrates the v0 active_care case (PATIENT_NOTIFY_BY_STATUS ' +
    "`active: 'active_care'` map entry + lib/notifications/" +
    "patientMessages.ts case 'active_care' arms). Pathway-agnostic. " +
    'Producer-site filters at lib/internal/patient-case/impl.ts gate to ' +
    'glp1_primary / weight_loss (preserves legacy). Idempotency keyed on ' +
    'the underlying status-transition audit_event_id (so a treatment_item ' +
    'bouncing approved -> active -> stopped -> active fires one ' +
    'notification per genuine transition into active). transactional_' +
    'critical: false on the Template per the same axis-separation ' +
    'reasoning that locked it false on the prior clinical_decision ' +
    'Templates. Wording diff log per ADR Section 7.5 lives in the commit ' +
    'message body.',
  recall_severity: 'operational',
}

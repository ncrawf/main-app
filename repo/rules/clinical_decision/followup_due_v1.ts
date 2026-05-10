/**
 * Phase 4H-templates-discipline commit 6 — followup_due parity migration.
 *
 * Seventh typed Rule overall; fourth in the clinical_decision domain
 * (siblings: case_approved_v1, awaiting_clinical_review_v1, active_care_v1).
 * System-authority status acknowledgment, NOT a provider authority
 * statement. Same shape as awaiting_clinical_review_v1 + active_care_v1:
 *   - tier_1 existence_only
 *   - authority_floor='system'
 *   - recall_severity='operational'
 *   - message_intent='operational'
 *
 * Migrates the v0 followup_due notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * `refill_due: 'followup_due'` map entry + `lib/notifications/
 * patientMessages.ts` case 'followup_due' arms) per Section 1Q.4 +
 * 1Q.5 + ADR Section 7.5 + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * FIRST clinical_decision rule with a SINGLE producer surface
 * (treatment_items only). Prior 3 clinical_decision rules
 * (case_approved, case_under_review, active_care) all fire from
 * BOTH `updateTreatmentItemStatus` and `updateCareProgramStatus`.
 * `refill_due` is not a valid care_programs.status, so the producer-
 * side gate only adds a dispatch block to updateTreatmentItemStatus.
 * The Rule layer is producer-agnostic (does not double-filter); the
 * dispatcher handles single- and dual-producer rules identically.
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls within
 * the commit-5 approved set (no new orchestrator boundary required).
 *
 * Per the same axis-separation reasoning that locked
 * transactional_critical: false on the prior clinical_decision
 * Templates: cadence-bypass is a separate axis from operational
 * importance. A check-in reminder is informational; if Step 4 safety
 * orchestration ever suppresses normal traffic during an active
 * safety window, this notification SHOULD honor the suppression.
 *
 * `pathway_scope: undefined` (binding for this commit): the producer-
 * site filter at lib/internal/patient-case/impl.ts already gates to
 * glp1_primary treatment_items (preserving legacy behavior); the
 * Rule layer does not double-filter. pathway_sensitivity stays null
 * on enqueue — correct for tier_1.
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 1 (existence_only).
 *   Honest tier survey: legacy body says "Time for your check-in. /
 *   It is time for your next follow-up. / Please complete any due
 *   tasks in your dashboard." References "check-in", "follow-up",
 *   "due tasks", "dashboard" without naming protocol, dose,
 *   condition, or pathway. tier_1 = existence_only per Section 1Q.17.
 */

import type { Rule } from '../types'

export const followupDueV1: Rule = {
  rule_id: 'rule.clinical_decision.followup_due_v1',
  rule_version: '1.0.0',
  domain: 'clinical_decision',
  trigger: {
    kind: 'event',
    event_type: 'patient.case_followup_due',
  },
  preconditions: [],
  required_inputs: [
    { source: 'treatment_items', field: 'id' },
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
  template_key: 'tmpl.clinical_decision.followup_due_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.clinical_decision.followup_due_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Seventh parity proof of the v0 -> 1Q cutover. Fourth clinical_decision ' +
    'domain Rule (siblings: case_approved_v1, awaiting_clinical_review_v1, ' +
    'active_care_v1). FIRST clinical_decision rule with a SINGLE producer ' +
    'surface (treatment_items only; refill_due is not a care_programs ' +
    'status). Migrates the v0 followup_due case (PATIENT_NOTIFY_BY_STATUS ' +
    "`refill_due: 'followup_due'` map entry + lib/notifications/" +
    "patientMessages.ts case 'followup_due' arms). tier_1 existence_only " +
    'operational intent. Pathway-agnostic. Producer-site filters at ' +
    'lib/internal/patient-case/impl.ts gate to glp1_primary (preserves ' +
    'legacy). Idempotency keyed on the underlying status-transition ' +
    'audit_event_id (so a treatment_item bouncing active -> refill_due ' +
    '-> active -> refill_due fires one notification per genuine ' +
    'transition into refill_due). transactional_critical: false on the ' +
    'Template per the same axis-separation reasoning that locked it ' +
    'false on the prior clinical_decision Templates. Wording diff log ' +
    'per ADR Section 7.5 lives in the commit message body.',
  recall_severity: 'operational',
}

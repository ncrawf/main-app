/**
 * Phase 4H-templates-discipline commit 7 — followup_needed parity migration.
 *
 * Eighth typed Rule overall; fifth in the clinical_decision domain
 * (siblings: case_approved_v1, awaiting_clinical_review_v1,
 * active_care_v1, followup_due_v1).
 *
 * FIRST migration with ASYMMETRIC producer-side status gates. Prior
 * multi-status OR rule (awaiting_clinical_review_v1) had identical
 * 2-status OR ('under_review' | 'pending_approval') on both producer
 * surfaces. c7's gates differ per producer:
 *   - updateTreatmentItemStatus: ('paused' | 'stopped')
 *     (treatment_items has no 'completed'/'cancelled' status)
 *   - updateCareProgramStatus: ('paused' | 'completed' | 'cancelled')
 *     (care_programs has no 'stopped' status)
 *
 * The Rule layer is producer-agnostic. Each producer-side filter
 * independently determines whether to fire. The payload's `next_status`
 * field carries which status fired for audit lineage.
 *
 * Collapses 4 legacy `PATIENT_NOTIFY_BY_STATUS` map entries (paused,
 * completed, cancelled, stopped → followup_needed) into one typed
 * Rule.
 *
 * Migrates the v0 followup_needed notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS 4
 * map entries + `lib/notifications/patientMessages.ts` case
 * 'followup_needed' arms) per Section 1Q.4 + 1Q.5 + ADR Section 7.5
 * + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Same architectural shape as awaiting_clinical_review_v1 +
 * active_care_v1 + followup_due_v1 (system-authority status ack,
 * tier_1 existence_only, operational intent).
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 1 (existence_only).
 *   Legacy body: "We need a little more information before we can move
 *   forward. / Please complete the requested steps in your dashboard."
 *   References "info needed", "case moving", "steps in dashboard"
 *   without naming protocol, dose, condition, or pathway. tier_1 =
 *   existence_only per Section 1Q.17.
 */

import type { Rule } from '../types'

export const followupNeededV1: Rule = {
  rule_id: 'rule.clinical_decision.followup_needed_v1',
  rule_version: '1.0.0',
  domain: 'clinical_decision',
  trigger: {
    kind: 'event',
    event_type: 'patient.case_followup_needed',
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
  template_key: 'tmpl.clinical_decision.followup_needed_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'care_programs', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.clinical_decision.followup_needed_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Eighth parity proof of the v0 -> 1Q cutover. Fifth clinical_decision ' +
    'domain Rule (siblings: case_approved_v1, awaiting_clinical_review_v1, ' +
    'active_care_v1, followup_due_v1). FIRST with asymmetric producer-side ' +
    'status gates: treatment_items (paused | stopped) vs care_programs ' +
    '(paused | completed | cancelled). Collapses 4 legacy ' +
    'PATIENT_NOTIFY_BY_STATUS map entries (paused, completed, cancelled, ' +
    'stopped) into one typed Rule. tier_1 existence_only operational ' +
    'intent. Pathway-agnostic. Producer-site filters at lib/internal/' +
    'patient-case/impl.ts gate to glp1_primary / weight_loss (preserves ' +
    'legacy). Idempotency keyed on the underlying status-transition ' +
    'audit_event_id. transactional_critical: false on the Template per ' +
    'the same axis-separation reasoning that locked it false on the ' +
    'prior clinical_decision Templates. Wording diff log per ADR Section ' +
    '7.5 lives in the commit message body.',
  recall_severity: 'operational',
}

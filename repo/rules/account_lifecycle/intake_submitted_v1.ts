/**
 * Phase 4H-templates-discipline commit 1 — intake_submitted parity migration.
 *
 * Second typed Rule. Migrates the v0 `intake_submitted` notification
 * (legacy `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * + `lib/notifications/patientMessages.ts`) to the typed Rule + Template
 * shape per system map Section 1Q.4 + 1Q.5. The legacy v0 case deletes
 * in the same PR per Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Per Section 1Q.13 module taxonomy: this is Module 1 `account_lifecycle`
 * — patient-onboarding ack ("we received your intake"), not Module 2
 * `patient_clarification` (which is structured clinical follow-up).
 *
 * Per Section 1Q.5: tier_1 existence_only + intent `account` +
 * pathway-agnostic. The body confirms a transaction (intake submitted)
 * exists; it does not name the pathway, reveal clinical content, or
 * promise a specific outcome.
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls within
 * the commit-5 approved set (no new orchestrator boundary required).
 */

import type { Rule } from '../types'

export const intakeSubmittedV1: Rule = {
  rule_id: 'rule.account_lifecycle.intake_submitted_v1',
  rule_version: '1.0.0',
  domain: 'account_lifecycle',
  trigger: {
    kind: 'event',
    event_type: 'patient.intake_submitted',
  },
  preconditions: [],
  required_inputs: [
    { source: 'form_submissions', field: 'id' },
    { source: 'patients', field: 'email' },
    { source: 'patients', field: 'first_name' },
    { source: 'patients', field: 'phone' },
    { source: 'brands', field: 'slug' },
  ],
  authority_floor: 'system',
  action: {
    kind: 'notify',
    channels: ['email', 'sms'],
    send_policy_class: 'transactional_account',
    intended_privacy_exposure_level: 1,
    message_intent: 'account',
  },
  priority: 'standard',
  blocking: false,
  template_key: 'tmpl.account_lifecycle.intake_submitted_v1',
  evidence_refs_required: [
    { source_kind: 'form_submissions', required: true },
  ],
  audit_event_type: 'rule.fired.account_lifecycle.intake_submitted_v1',
  status: 'active',
  effective_at: '2026-05-08T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Second parity proof of the v0 -> 1Q cutover per Phase 4H-pre commit ' +
    '5 pattern. Replaces the v0 intake_submitted case (PATIENT_NOTIFY_BY_STATUS ' +
    'map entry + lib/notifications/patientMessages.ts email + SMS cases). ' +
    'tier_1 existence_only account intent; pathway-agnostic. Per Section ' +
    '1Q.13 Module 1 (account_lifecycle): patient-onboarding ack. ' +
    'Idempotency keyed on form_submissions.id (per-submission); legacy ' +
    'was per-patient with the static null->intake_submitted transition ' +
    'key, which incidentally produced one ack per patient ever — for the ' +
    'GLP-1 intake flow that is functionally equivalent (intake is ' +
    'submitted once per care episode), but per-submission semantics are ' +
    'structurally honest and match the Stripe-event-id idempotency in ' +
    'commit 5. Documented in the commit 6 wording diff log per ADR ' +
    'Section 7.5.',
  recall_severity: 'operational',
}

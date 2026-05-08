/**
 * Phase 4H-pre commit 5 — first typed Rule.
 *
 * The `payment_received` parity proof migrating the v0 notification path
 * (`lib/workflows/notificationRules.ts` `payment_received` case +
 * `lib/notifications/patientMessages.ts` cases) to a typed Rule + Template
 * per Section 1Q.4. The legacy v0 cases delete in the same commit.
 *
 * Why payment_received as the first parity proof: lowest clinical
 * surface area (tier_1 existence_only, billing intent, no PHI). If the
 * cutover discipline holds for this flow, it generalizes to the
 * remaining 10 NotificationTemplateKey cases per the per-PR
 * DELETE-AFTER-PARITY directive in system map Section 1Q.12.
 *
 * Per ADR Section 7.6 (binding): this Rule's action is one of the two
 * approved orchestrator-mediated actions for Phase 4H-pre commit 5
 * (`enqueue outbound_jobs` via `enqueue_outbound_job`). The dispatcher
 * at lib/rules/runtime/dispatcher.ts enforces the approved set
 * structurally via its import allowlist.
 */

import type { Rule } from '../types'

export const paymentReceivedV1: Rule = {
  rule_id: 'rule.billing.payment_received_v1',
  rule_version: '1.0.0',
  domain: 'billing_subscription',
  trigger: {
    kind: 'event',
    event_type: 'commerce.checkout.session_completed',
  },
  preconditions: [],
  required_inputs: [
    { source: 'commerce_orders', field: 'id' },
    { source: 'patients', field: 'email' },
    { source: 'patients', field: 'first_name' },
    { source: 'patients', field: 'phone' },
    { source: 'brands', field: 'slug' },
    { source: 'brands', field: 'display_name' },
  ],
  authority_floor: 'system',
  action: {
    kind: 'notify',
    channels: ['email', 'sms'],
    send_policy_class: 'transactional_billing',
    intended_privacy_exposure_level: 1,
    message_intent: 'billing',
  },
  priority: 'standard',
  blocking: false,
  template_key: 'tmpl.billing.payment_received_v1',
  evidence_refs_required: [
    { source_kind: 'commerce_orders', required: true },
    { source_kind: 'stripe_checkout_session', required: true },
  ],
  audit_event_type: 'rule.fired.billing.payment_received_v1',
  status: 'active',
  effective_at: '2026-05-08T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'First parity proof of the v0 → 1Q cutover per Phase 4H-pre commit 5. ' +
    'Replaces lib/workflows/notificationRules.ts payment_received case + ' +
    'lib/notifications/patientMessages.ts payment_received email + SMS cases. ' +
    'Tier_1 existence_only billing intent; transactional_critical so ' +
    'cadence rules per Section 1Q.21 do not suppress billing-critical sends. ' +
    'Brand sourced from typed multi-tenant primitives (brands table per ' +
    'Phase 4C-pre); no hardcoded MAIN: prefix carried forward per ADR ' +
    'Section 7.5 cutover discipline. Free-form paymentSummary string ' +
    'replaced with typed required_variables { payment_amount: integer_cents; ' +
    'payment_currency: ISO4217 } per Section 1Q.5 typed slot requirement.',
  recall_severity: 'operational',
}

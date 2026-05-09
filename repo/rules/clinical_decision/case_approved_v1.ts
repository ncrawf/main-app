/**
 * Phase 4H-templates-discipline commit 2 — case_approved parity migration.
 *
 * Third typed Rule. FIRST clinical + provider-authority Rule in the
 * registry — the existing two (payment_received billing,
 * intake_submitted account) are system-authority. This Rule is the
 * first that ships:
 *   - `domain: 'clinical_decision'` (vs billing_subscription / account_lifecycle)
 *   - `authority_floor: 'provider'` (vs 'system')
 *   - `action.message_intent: 'clinical'` (vs 'billing' / 'account')
 *   - `recall_severity: 'clinical_significant'` (vs 'operational')
 *
 * Migrates the v0 `case_approved` notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS +
 * `lib/notifications/patientMessages.ts` case_approved arms) per
 * Section 1Q.4 + 1Q.5 + ADR Section 7.5 + Section 1Q.12
 * DELETE-AFTER-PARITY.
 *
 * Per Section 1Q.13 module taxonomy: this is `clinical_decision` —
 * a provider's authoritative determination on a care case. Distinct
 * from `account_lifecycle` (intake submitted, account created) and
 * `billing_subscription` (payment received, plan changes).
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls within
 * the commit-5 approved set (no new orchestrator boundary required).
 *
 * Per pre-execution refinement #3 (binding): clinical authority
 * semantics are carried by THIS file's `authority_floor: 'provider'`
 * + `recall_severity: 'clinical_significant'` + the action's
 * `message_intent: 'clinical'`. Cadence-bypass is a separate axis
 * and lives on the Template (`transactional_critical: false` for this
 * Rule's Template — cadence-bypass is NOT defensible for case approval;
 * future safety-window suppression should be allowed to honor itself
 * for this notification while a provider re-reviews).
 *
 * `pathway_scope: undefined` (binding for this commit): the Rule fires
 * for any patient regardless of pathway. The producer-site filters at
 * lib/internal/patient-case/impl.ts already gate to glp1_primary
 * treatment_items + weight_loss care_programs (preserving legacy
 * behavior); the Rule layer does not double-filter. `pathway_sensitivity`
 * stays null on enqueue, which is correct for tier_2 (the
 * disclosure-policy clamp does not read it). Future per-pathway case-
 * approved wording variants (e.g., HRT-specific) would either split
 * into pathway-scoped rules or wait for the patient-pathway resolver.
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 2 (low_context_phi).
 *   Honest tier survey: legacy body says "Your clinician has approved
 *   your case. Next steps are ready in your dashboard." References
 *   "clinician" + "case" + "next steps" without naming protocol, dose,
 *   condition, or pathway. tier_2 = low_context_phi per Section 1Q.17.
 */

import type { Rule } from '../types'

export const caseApprovedV1: Rule = {
  rule_id: 'rule.clinical_decision.case_approved_v1',
  rule_version: '1.0.0',
  domain: 'clinical_decision',
  trigger: {
    kind: 'event',
    event_type: 'patient.case_approved',
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
  authority_floor: 'provider',
  action: {
    kind: 'notify',
    channels: ['email', 'sms'],
    send_policy_class: 'transactional_clinical',
    intended_privacy_exposure_level: 2,
    message_intent: 'clinical',
  },
  priority: 'standard',
  blocking: false,
  template_key: 'tmpl.clinical_decision.case_approved_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'care_programs', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.clinical_decision.case_approved_v1',
  status: 'active',
  effective_at: '2026-05-09T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Third parity proof of the v0 -> 1Q cutover. FIRST clinical + ' +
    'provider-authority Rule in the registry; introduces ' +
    'domain=clinical_decision + authority_floor=provider + ' +
    'message_intent=clinical + recall_severity=clinical_significant ' +
    'as live values (the existing two rules are system-authority ' +
    'billing/account). Replaces the v0 case_approved case ' +
    "(PATIENT_NOTIFY_BY_STATUS map entry + lib/notifications/" +
    'patientMessages.ts email + SMS arms). tier_2 low_context_phi ' +
    'pathway-agnostic. Producer-site filters at lib/internal/' +
    "patient-case/impl.ts gate to glp1_primary treatment_items + " +
    'weight_loss care_programs (preserving legacy behavior); the Rule ' +
    'layer does not double-filter, so pathway_scope is undefined and ' +
    'pathway_sensitivity is null on enqueue (correct for tier_2; the ' +
    'disclosure-policy clamp does not read it). Idempotency keyed on ' +
    'the underlying status-transition audit_event_id (so a case ' +
    'bouncing approved -> denied -> approved emits a fresh notification ' +
    'on each genuine re-approval). transactional_critical: false on the ' +
    'Template per pre-execution refinement #3 — cadence-bypass is a ' +
    'separate axis from clinical authority. Wording diff log per ADR ' +
    'Section 7.5 lives in the commit message body.',
  recall_severity: 'clinical_significant',
}

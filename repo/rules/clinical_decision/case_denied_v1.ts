/**
 * Phase 4H-templates-discipline commit 9 — case_denied parity migration.
 * FINAL legacy v0 notification migration; closes the 4H-templates-
 * discipline series.
 *
 * Eleventh typed Rule overall; sixth in the clinical_decision domain
 * (siblings: case_approved_v1, awaiting_clinical_review_v1,
 * active_care_v1, followup_due_v1, followup_needed_v1).
 *
 * Migrates the v0 case_denied notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * `denied: 'case_denied'` map entry + `lib/notifications/
 * patientMessages.ts` `case 'case_denied'` arms) per Section 1Q.4 +
 * 1Q.5 + ADR Section 7.5 + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * The legacy notification files (`notificationRules.ts` +
 * `patientMessages.ts`) DELETE in this same commit. The legacy
 * workflow-event hook SHRINKS to chart.ai_review-only (its
 * non-notification responsibility stays).
 *
 * Architectural shape: same as awaiting_clinical_review_v1 +
 * active_care_v1 + followup_due_v1 + followup_needed_v1 — system-
 * authority status ack, tier_1 existence_only, operational intent,
 * dual-producer (treatment_item + care_program).
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls
 * within the commit-5 approved set (no new orchestrator boundary
 * required).
 *
 * `pathway_scope: undefined` (binding for this commit): producer-
 * site filters at `lib/internal/patient-case/impl.ts` already gate
 * to glp1_primary / weight_loss (preserving legacy behavior); the
 * Rule layer does not double-filter.
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 1 (existence_only).
 *   Honest tier survey: legacy body says "Update on your visit." +
 *   "There is an update on your visit request." + "Please review
 *   details and next steps in your dashboard." References "visit"
 *   + "update" + "dashboard" without naming protocol, dose,
 *   condition, or pathway. Genuinely tier_1 existence_only —
 *   notably, NO denial reason text appears in the legacy body
 *   (NO `denial_reason` field exists on `treatment_items` /
 *   `care_programs` today; the only `denial_reason` in the
 *   codebase is in lib/auth/capabilities.ts for capability-
 *   denial audit metadata, unrelated to clinical case denial).
 *   So this migration is not a privacy correction; it is a
 *   typing migration.
 *
 * ============================================================
 * DENIED SEMANTIC SCOPE (anti-overload binding — pinned reference)
 * ============================================================
 *
 * The English word "denied" is structurally overloaded across
 * healthcare operations. As future siblings activate (billing,
 * revenue_cycle, prior_auth, payer integrations), the same
 * English word will surface in operationally distinct contexts.
 *
 * THIS Rule (`case_denied_v1`) IS:
 *   a provider-issued denial of a clinical case request
 *   (treatment_item or care_program), where a licensed clinician
 *   reviewed the request and decided no.
 *
 * THIS Rule is NOT (and MUST NOT be extended to cover):
 *   - Payer adjudication / claim denial — future revenue_cycle/
 *     sibling, future `claim_event_kind` discriminant.
 *   - Prior authorization denial — future authorization_lifecycle/
 *     sibling, future `auth_event_kind` discriminant.
 *   - Refill denial by provider — pharmacy_lifecycle/ sibling,
 *     `pharmacy_event_kind: 'refill_denied_by_provider'` already
 *     reserved per c8 commit 8.
 *   - Refill denial by pharmacy / insurance — pharmacy_lifecycle/
 *     or revenue_cycle/, resolves when that producer activates.
 *   - Identity-verification denial — account_lifecycle/ sibling.
 *   - Capability/permission denial — already on
 *     lib/auth/capabilities.ts as audit metadata, NOT a
 *     notification.
 *
 * Architectural enforcement: the `case_kind` discriminant on this
 * Rule's payload is bound to `clinical_decision/` per scaffold
 * lint check 5 (sibling-discriminant alignment). Future "denied"
 * events MUST get their own discriminant + sibling folder.
 * Reusing `case_kind` for a payer-denial event would be the
 * canonization-of-wrong-ontology error that v1 pressure-test radar
 * zone 27 exists to prevent.
 *
 * Pinned references for this binding live in:
 *   - PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_case_denied.md §1A
 *   - This file's rationale_note
 *   - repo/templates/clinical_decision/case_denied_v1.ts rationale_note
 *   - lib/internal/patient-case/impl.ts producer-site dispatch block comment
 * ============================================================
 */

import type { Rule } from '../types'

export const caseDeniedV1: Rule = {
  rule_id: 'rule.clinical_decision.case_denied_v1',
  rule_version: '1.0.0',
  domain: 'clinical_decision',
  trigger: {
    kind: 'event',
    event_type: 'patient.case_denied',
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
  template_key: 'tmpl.clinical_decision.case_denied_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'care_programs', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.clinical_decision.case_denied_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'FINAL parity proof of the v0 -> 1Q cutover; eleventh typed ' +
    'Rule overall; sixth clinical_decision domain Rule. Closes the ' +
    '4H-templates-discipline series. SCOPE BINDING: this Rule is ' +
    'a PROVIDER clinical-decision denial only (treatment_item or ' +
    'care_program request denied by licensed clinician). It is ' +
    'NOT a payer adjudication, NOT a prior authorization denial, ' +
    'NOT a refill denial (by provider OR pharmacy), NOT an ' +
    'identity-verification denial, NOT a capability/permission ' +
    'audit denial. Each of those will eventually live in its own ' +
    'sibling-domain folder with its own discriminant when those ' +
    'producers activate (revenue_cycle/, authorization_lifecycle/, ' +
    "pharmacy_lifecycle/, account_lifecycle/). Reusing case_kind " +
    'or extending case_denied_v1 across that ontology seam would ' +
    'be the canonization-of-wrong-ontology error v1 pressure-test ' +
    'radar zone 27 exists to prevent. See file header DENIED ' +
    'SEMANTIC SCOPE block + PREFLIGHT_2026-05-10_phase_4h_templates_' +
    'discipline_c9_case_denied.md §1A for the full binding. ' +
    'tier_1 existence_only operational intent; pathway-agnostic. ' +
    'Producer-site filters at lib/internal/patient-case/impl.ts ' +
    'gate to glp1_primary / weight_loss (preserves legacy ' +
    'behavior). Idempotency keyed on the underlying status-' +
    'transition audit_event_id. transactional_critical: false on ' +
    'the Template per the same axis-separation reasoning that ' +
    'locked it false on every prior 4H Template. Wording diff log ' +
    'per ADR Section 7.5 lives in the commit message body. With ' +
    'this commit, lib/workflows/notificationRules.ts and lib/' +
    'notifications/patientMessages.ts delete entirely; the legacy ' +
    'workflow-event hook shrinks to chart.ai_review-only.',
  recall_severity: 'operational',
}

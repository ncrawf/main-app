/**
 * Module 26 membership_checkout per `conversion_funnel_modules_v1.md`.
 * Submit fires THREE consent rows + subscription + treatment_order via composite assertion_group_id.
 */
import type { Question } from '../../types';

export const membershipCheckoutQuestions: Question[] = [
  {
    question_id: 'qb.universal.checkout.plan_picker_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'plan_selection',
    requiredness: 'required_to_continue',
    answer_role: 'commercial_confidence',
    intent_of_answer_set: 'commercial_commit',
    entity_kind: 'single_value',
    atom_kind: 'commerce',
    downstream_effect: 'personalization',
    render_when: null,
    prompt: 'Choose your membership plan',
    emissions: [
      { target: 'subscription', payload: { pricing_profile_id: '', pricing_profile_version: '', pathway_code: '', plan_id: '', status: 'pending', psp: 'stripe', cancellation_window_days: 2 } },
    ],
  },
  {
    question_id: 'qb.universal.checkout.payment_commit_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'payment_commit_with_consent',
    requiredness: 'required_to_continue',
    answer_role: 'commercial_confidence',
    intent_of_answer_set: 'commercial_commit',
    entity_kind: 'composite',
    atom_kind: 'commerce',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'Submit to provider',
    helper: 'Three-row consent emit via assertion_group_id: universal.membership_checkout_composite.',
    emissions: [
      { target: 'consent', payload: { type: 'membership_service_agreement', version_hash: '', legal_text_snapshot_id: '', source_surface: 'checkout_subscription', captured_by: 'patient', assertion_group_id: 'universal.membership_checkout_composite' } },
      { target: 'consent', payload: { type: 'subscription_auto_renew', version_hash: '', legal_text_snapshot_id: '', source_surface: 'checkout_subscription', captured_by: 'patient', assertion_group_id: 'universal.membership_checkout_composite' } },
      { target: 'consent', payload: { type: 'prescription_order_acceptance', version_hash: '', legal_text_snapshot_id: '', source_surface: 'checkout_subscription', captured_by: 'patient', assertion_group_id: 'universal.membership_checkout_composite' } },
      { target: 'treatment_order', payload: { pathway_code: '', status: 'pending_clinical_review', intake_session_id: '' } },
      { target: 'audit_event_only', payload: { action: 'commerce.submit_to_provider_triggered', resource_type: 'treatment_order' } },
    ],
  },
];

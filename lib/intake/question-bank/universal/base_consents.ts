/**
 * Universal Module 2 base_consents per `universal_modules_v1.md`.
 * Q2.1 emits THREE consent rows via composite assertion_group_id.
 */
import type { Question } from '../../types';

export const baseConsentsQuestions: Question[] = [
  {
    question_id: 'qb.universal.base_consents.telehealth_terms_privacy_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'acknowledgment',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'operational',
    intent_of_answer_set: 'forced_classification',
    entity_kind: 'composite',
    atom_kind: 'consent',
    downstream_effect: 'hard_stop',
    render_when: null,
    prompt: 'Before we continue, please confirm you agree to our terms.',
    helper: "By continuing, you agree to MAIN's Telehealth Consent, Terms & Conditions, and acknowledge the Privacy Policy.",
    emissions: [
      { target: 'consent', payload: { type: 'telehealth_consent', version_hash: '', legal_text_snapshot_id: '', source_surface: 'intake_account_creation', captured_by: 'patient', assertion_group_id: 'universal.base_consents_composite' } },
      { target: 'consent', payload: { type: 'terms_and_conditions', version_hash: '', legal_text_snapshot_id: '', source_surface: 'intake_account_creation', captured_by: 'patient', assertion_group_id: 'universal.base_consents_composite' } },
      { target: 'consent', payload: { type: 'privacy_policy_acknowledgment', version_hash: '', legal_text_snapshot_id: '', source_surface: 'intake_account_creation', captured_by: 'patient', assertion_group_id: 'universal.base_consents_composite' } },
    ],
  },
];

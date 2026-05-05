import type { Question } from '../../../types';

export const weightLossAttemptsQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.weight_loss_attempts.has_attempted_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    atom_kind: 'clinical_history',
    downstream_effect: 'personalization',
    render_when: null,
    prompt: 'Have you tried to lose weight before?',
    choices: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'intent.has_prior_weight_loss_attempts', concept_version: '1.0.0', assertion_type: 'selected', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'definitive', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

import type { Question } from '../../../types';

export const eatingDisorderScreenQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.eating_disorder_screen.symptom_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'multi_select',
    selection_cardinality: 'zero_or_more',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'safety_screening',
    entity_kind: 'multi_instance',
    atom_kind: 'clinical_history',
    downstream_effect: 'hard_stop',
    render_when: null,
    prompt: 'Have you experienced any of the following?',
    helper: 'Hard-stop on AN diagnosis per Section 1Q.15.',
    choices: [
      { value: 'binge_eating', label: 'Episodes of eating large amounts with loss of control' },
      { value: 'purging', label: 'Compensatory purging (vomiting, laxatives)' },
      { value: 'restrictive', label: 'Severely restrictive eating' },
      { value: 'none', label: 'None of these', excludes_others: true },
    ],
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'condition.eating_disorder_history', concept_version: '1.0.0', assertion_type: 'present', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'definitive', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

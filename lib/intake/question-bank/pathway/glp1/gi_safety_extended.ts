import type { Question } from '../../../types';

export const giSafetyExtendedQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.gi_safety_extended.personal_history_v1',
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
    prompt: 'Have you been diagnosed with any of these digestive problems?',
    helper: 'This helps our providers understand if GLP-1 is safe for you.',
    choices: [
      { value: 'pancreatitis', label: 'Pancreatitis' },
      { value: 'gallbladder_disease', label: 'Gallstones or gallbladder disease' },
      { value: 'gastroparesis', label: 'Gastroparesis' },
      { value: 'none', label: 'None of these', excludes_others: true },
    ],
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'condition.pancreatitis_history', concept_version: '1.0.0', assertion_type: 'history_of', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'definitive', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

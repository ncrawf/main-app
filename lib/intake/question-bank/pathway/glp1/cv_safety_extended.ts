import type { Question } from '../../../types';

export const cvSafetyExtendedQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.cv_safety_extended.personal_history_v1',
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
    prompt: 'Have you ever been diagnosed with any of these conditions?',
    helper: 'Some conditions affect which medications are safe.',
    choices: [
      { value: 'mtc', label: 'Medullary thyroid cancer' },
      { value: 'men2', label: 'MEN-2 (Multiple Endocrine Neoplasia type 2)' },
      { value: 'long_qt', label: 'Long QT syndrome' },
      { value: 'none', label: 'None of these', excludes_others: true },
    ],
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'condition.medullary_thyroid_carcinoma_history', concept_version: '1.0.0', assertion_type: 'present', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'definitive', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

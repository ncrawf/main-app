import type { Question } from '../../types';

export const allergyHistoryQuestions: Question[] = [
  {
    question_id: 'qb.clinical_core.allergy_history.allergy_entry_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'multi_select',
    selection_cardinality: 'zero_or_more',
    requiredness: 'optional',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'safety_screening',
    entity_kind: 'multi_instance',
    multi_instance_context_key_field: 'allergen_concept_id',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'List any allergies and the reaction each causes.',
    emissions: [
      { target: 'clinical_assertion', payload: { concept_id: 'allergy.other', concept_version: '1.0.0', assertion_type: 'allergy_reaction', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'moderate', evidence_refs: [], context: {}, context_key: '' } },
      { target: 'allergy', payload: { allergen_concept_id: '', reaction_type: 'unknown', severity: 'unknown', reconciliation_status: 'unreconciled' } },
    ],
  },
];

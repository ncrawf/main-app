import type { Question } from '../../types';

export const surgeryHistoryQuestions: Question[] = [
  {
    question_id: 'qb.clinical_core.surgery_history.surgery_entry_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'multi_select',
    selection_cardinality: 'zero_or_more',
    requiredness: 'optional',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'multi_instance',
    multi_instance_context_key_field: 'procedure_concept_id',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'Have you had any surgeries?',
    helper: 'Select any that apply.',
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'procedure.surgery_other_history', concept_version: '1.0.0', assertion_type: 'history_of', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'moderate', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

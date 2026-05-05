import type { Question } from '../../types';

export const lifestyleQuestions: Question[] = [
  {
    question_id: 'qb.domain.lifestyle.baseline_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'multi_select',
    selection_cardinality: 'zero_or_more',
    requiredness: 'optional',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'multi_instance',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'lifestyle baseline history',
    helper: 'Module lifestyle per domain_modules_v1.md; full question content per spec.',
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'condition.hypertension_history', concept_version: '1.0.0', assertion_type: 'history_of', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'moderate', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

/**
 * Module 15 prior_glp1_use per glp1_pathway_modules_v1.md.
 * Q15.2-Q15.8 emit DUAL targets per Section 1K.0.5.4: clinical_assertion + medication entity.
 */
import type { Question } from '../../../types';

export const priorGlp1UseQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'Have you used a GLP-1 medication?',
    choices: [
      { value: 'currently', label: 'Currently using' },
      { value: 'past', label: 'Used in the past' },
      { value: 'never', label: 'Never' },
    ],
    emissions: [
      { target: 'clinical_assertion', payload: { concept_id: 'medication.glp1_use_status', concept_version: '1.0.0', assertion_type: 'use', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'definitive', evidence_refs: [], context: {}, context_key: '' } },
      { target: 'medication', payload: { medication_concept_id: '', name_normalized: '', status: 'active', reconciliation_status: 'unreconciled' } },
    ],
  },
];

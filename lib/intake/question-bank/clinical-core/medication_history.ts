/**
 * Module 5 medication_history per `clinical_core_modules_v1.md`.
 * Per Section 1K.0.5.4 dual emission: each med entry → claim ledger row + reconciled entity row.
 */
import type { Question } from '../../types';

export const medicationHistoryQuestions: Question[] = [
  {
    question_id: 'qb.clinical_core.medication_history.med_entry_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'text',
    requiredness: 'optional',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'multi_instance',
    multi_instance_context_key_field: 'medication_concept_id',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'List any medications you currently take.',
    helper: 'Include over-the-counter, vitamins, and supplements if relevant.',
    emissions: [
      { target: 'clinical_assertion', payload: { concept_id: 'medication.glp1_other', concept_version: '1.0.0', assertion_type: 'use', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'moderate', evidence_refs: [], context: {}, context_key: '' } },
      { target: 'medication', payload: { medication_concept_id: '', name_normalized: '', status: 'active', reconciliation_status: 'unreconciled' } },
    ],
  },
];

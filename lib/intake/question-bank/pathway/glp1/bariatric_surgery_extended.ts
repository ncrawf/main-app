import type { Question } from '../../../types';

export const bariatricSurgeryExtendedQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.bariatric_surgery_extended.surgery_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'multi_select',
    selection_cardinality: 'zero_or_more',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'safety_screening',
    entity_kind: 'multi_instance',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'Have you had any of these weight-loss surgeries or procedures?',
    choices: [
      { value: 'gastric_bypass_rygb', label: 'Gastric bypass (Roux-en-Y)' },
      { value: 'gastric_sleeve', label: 'Gastric sleeve' },
      { value: 'lap_band', label: 'Lap band' },
      { value: 'duodenal_switch', label: 'Duodenal switch' },
      { value: 'intestinal_surgery', label: 'Intestinal / bowel surgery' },
      { value: 'none', label: 'None', excludes_others: true },
    ],
    emissions: [{ target: 'clinical_assertion', payload: { concept_id: 'procedure.gastric_bypass_rygb_history', concept_version: '1.0.0', assertion_type: 'history_of', status: 'unconfirmed', authored_by: 'patient_reported', confidence: 'moderate', evidence_refs: [], context: {}, context_key: '' } }],
  },
];

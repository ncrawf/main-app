/**
 * Module 15 prior_glp1_use per glp1_pathway_modules_v1.md.
 *
 * Per Phase 3 pressure-test Gap 1 fix (Phase 4A Commit 1):
 * - Q15.1 status_v1 emits ONLY clinical_assertion (medication entity emit removed;
 *   no specific drug yet at this question — empty medication_concept_id was
 *   creating empty placeholder rows).
 * - Q15.2 which_drug_v1 (NEW) is where the medication entity emit lives — it captures
 *   the specific GLP-1 drug name and emits the dual claim+entity per Section 1K.0.5.4
 *   two-stage flow.
 *
 * Section 1K.0.5.4 binding: entity emissions require non-empty source data (e.g.,
 * medication_concept_id must be present); empty payloads are forbidden.
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
      {
        target: 'clinical_assertion',
        payload: {
          concept_id: 'medication.glp1_use_status',
          concept_version: '1.0.0',
          assertion_type: 'use',
          status: 'unconfirmed',
          authored_by: 'patient_reported',
          confidence: 'definitive',
          evidence_refs: [],
          context: {},
          context_key: '',
        },
      },
    ],
  },
  {
    question_id: 'qb.pathway.glp1.prior_glp1_use.which_drug_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'conditionally_required',
    answer_role: 'clinical_safety',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    atom_kind: 'clinical_history',
    downstream_effect: 'provider_review',
    render_when: {
      kind: 'response',
      question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
      operator: 'in',
      values: ['currently', 'past'],
    },
    prompt: 'Which GLP-1 medication?',
    helper: 'If you have used more than one, pick the most recent.',
    choices: [
      { value: 'medication.semaglutide_compounded', label: 'Compounded semaglutide' },
      { value: 'medication.wegovy', label: 'Wegovy (semaglutide; FDA-approved for weight loss)' },
      { value: 'medication.ozempic', label: 'Ozempic (semaglutide; FDA-approved for T2DM)' },
      { value: 'medication.zepbound', label: 'Zepbound (tirzepatide; FDA-approved for weight loss)' },
      { value: 'medication.mounjaro', label: 'Mounjaro (tirzepatide; FDA-approved for T2DM)' },
      { value: 'medication.foundayo', label: 'Foundayo (orforglipron)' },
      { value: 'medication.liraglutide', label: 'Liraglutide (Saxenda / Victoza)' },
      { value: 'medication.glp1_other', label: 'Other GLP-1' },
    ],
    emissions: [
      {
        target: 'clinical_assertion',
        payload: {
          concept_id: '', // resolved at runtime from selected choice value
          concept_version: '1.0.0',
          assertion_type: 'use',
          status: 'unconfirmed',
          authored_by: 'patient_reported',
          confidence: 'definitive',
          evidence_refs: [],
          context: {},
          context_key: '',
        },
      },
      {
        target: 'medication',
        payload: {
          medication_concept_id: '', // resolved at runtime from selected choice value
          name_normalized: '',        // resolved at runtime
          status: 'active',           // overridden to 'discontinued' when status_v1 = 'past' (runtime resolution)
          reconciliation_status: 'unreconciled',
        },
      },
    ],
  },
];

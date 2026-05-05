/**
 * GLP-1 Module 13 weight history questions per `glp1_pathway_modules_v1.md`.
 *
 * Routing per Section 1K.0.5:
 * - Q13.1/13.2 (height/weight) → `observation` target (vital field_names)
 * - Q13.3 (goal band) → `clinical_assertion` target (concept_id: intent.glp1_weight_loss_goal_band)
 * - Q13.4 (max weight Y/N) → `clinical_assertion` target (concept_id: intent.has_higher_max_weight_history)
 * - Q13.5 (max weight value) → `observation` target (vital.weight_max_kg)
 *
 * The atom.pathway.glp1.* prefix from earlier draft is DROPPED per Section 1K.0.5
 * anti-patterns; canonical naming uses intent.* concept_type.
 */

import type { Question } from '../../../types';

export const weightHistoryQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.weight_history.height_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'numeric',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'How tall are you?',
    helper: 'We use this to calculate BMI.',
    emissions: [
      {
        target: 'observation',
        payload: {
          field_name: 'vital.height_cm',
          value: null,
          value_units: 'cm',
          observed_at: '',
          source: 'patient_self_reported',
        },
      },
    ],
  },
  {
    question_id: 'qb.pathway.glp1.weight_history.weight_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'numeric',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'What do you currently weigh?',
    emissions: [
      {
        target: 'observation',
        payload: {
          field_name: 'vital.weight_kg',
          value: null,
          value_units: 'kg',
          observed_at: '',
          source: 'patient_self_reported',
        },
      },
    ],
  },
  {
    question_id: 'qb.pathway.glp1.weight_history.weight_loss_goal_band_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'banded_numeric',
    requiredness: 'required_to_continue',
    answer_role: 'preference',
    intent_of_answer_set: 'preference_capture',
    entity_kind: 'single_value',
    downstream_effect: 'personalization',
    render_when: null,
    prompt: "What's your weight loss goal?",
    helper: 'A rough target helps us tailor your plan. Pick the closest range.',
    choices: [
      { value: '5_to_15_lbs', label: '5–15 lbs' },
      { value: '15_to_25_lbs', label: '15–25 lbs' },
      { value: '25_to_50_lbs', label: '25–50 lbs' },
      { value: 'more_than_50_lbs', label: 'More than 50 lbs' },
      { value: 'no_specific_number', label: "I don't have a specific number" },
    ],
    emissions: [
      {
        target: 'clinical_assertion',
        payload: {
          concept_id: 'intent.glp1_weight_loss_goal_band',
          concept_version: '1.0.0',
          assertion_type: 'selected',
          status: 'unconfirmed',
          authored_by: 'patient_reported',
          confidence: 'definitive',
          evidence_refs: [],
          context: {},
          context_key: '',
        },
      },
    ],
    consumed_by_rules: ['rule.glp1.dose.target_weight_aware'],
    consumed_by_templates: ['template.glp1.dose_recommendation'],
  },
  {
    question_id: 'qb.pathway.glp1.weight_history.has_higher_max_weight_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'Have you ever weighed more than you do now?',
    choices: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    emissions: [
      {
        target: 'clinical_assertion',
        payload: {
          concept_id: 'intent.has_higher_max_weight_history',
          concept_version: '1.0.0',
          assertion_type: 'selected',
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
    question_id: 'qb.pathway.glp1.weight_history.max_weight_value_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'numeric',
    requiredness: 'conditionally_required',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    downstream_effect: 'provider_review',
    render_when: {
      kind: 'response',
      question_id: 'qb.pathway.glp1.weight_history.has_higher_max_weight_v1',
      operator: 'equals',
      value: 'yes',
    },
    prompt: 'About what was your highest weight?',
    helper: "An estimate is fine — we don't need to be exact.",
    emissions: [
      {
        target: 'observation',
        payload: {
          field_name: 'vital.weight_max_kg',
          value: null,
          value_units: 'kg',
          observed_at: '',
          source: 'patient_self_reported',
        },
      },
    ],
  },
];

/**
 * Universal demographics questions per `universal_modules_v1.md` Module 1.
 *
 * Per Section 1K.0.5 routing: identity / contact data goes to `patient_column`
 * targets, NOT clinical_assertion. No atom.universal.* prefix.
 */

import type { Question } from '../../types';

export const demographicsQuestions: Question[] = [
  {
    question_id: 'qb.universal.demographics.dob_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'date',
    requiredness: 'required_to_continue',
    answer_role: 'operational',
    intent_of_answer_set: 'forced_classification',
    entity_kind: 'single_value',
    atom_kind: 'identity',
    downstream_effect: 'personalization',
    render_when: null,
    prompt: "What's your date of birth?",
    helper: 'We use this to verify eligibility and personalize your care.',
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'date_of_birth', value: null }, // value resolved at submit time
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.biological_sex_at_birth_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'forced_classification',
    entity_kind: 'single_value',
    atom_kind: 'identity',
    downstream_effect: 'provider_review',
    render_when: null,
    prompt: 'What was your biological sex assigned at birth?',
    helper: 'We ask this separately from gender identity. Some clinical decisions depend on biology.',
    choices: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'biological_sex_at_birth', value: null },
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.gender_alignment_with_birth_sex_v1',
    question_version: '1.0.0',
    tier: 2,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'preference',
    intent_of_answer_set: 'forced_classification',
    entity_kind: 'single_value',
    atom_kind: 'identity',
    downstream_effect: 'personalization',
    render_when: {
      kind: 'response',
      question_id: 'qb.universal.demographics.biological_sex_at_birth_v1',
      operator: 'in',
      values: ['male', 'female'],
    },
    prompt: 'Do you identify as a man or woman matching your sex at birth?',
    helper: "Most people identify with the sex assigned at birth. If you don't, that's fine — we'll ask a couple of follow-up questions next.",
    choices: [
      { value: 'aligned', label: 'Yes' },
      { value: 'not_aligned', label: 'No' },
    ],
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'gender_alignment_with_birth_sex', value: null },
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.gender_identity_explicit_v1',
    question_version: '1.0.0',
    tier: 3,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'preference',
    intent_of_answer_set: 'preference_capture',
    entity_kind: 'single_value',
    atom_kind: 'identity',
    downstream_effect: 'personalization',
    render_when: {
      kind: 'response',
      question_id: 'qb.universal.demographics.gender_alignment_with_birth_sex_v1',
      operator: 'equals',
      value: 'not_aligned',
    },
    prompt: 'How do you identify?',
    helper: 'Pick the closest match. Optional.',
    // Asymmetric choices resolved at render-time by interaction with biological_sex_at_birth
    asymmetric_choices: [
      {
        when: {
          kind: 'response',
          question_id: 'qb.universal.demographics.biological_sex_at_birth_v1',
          operator: 'equals',
          value: 'male',
        },
        choices: [
          { value: 'woman', label: 'Woman' },
          { value: 'trans_woman', label: 'Trans woman' },
          { value: 'non_binary', label: 'Non-binary' },
          { value: 'another', label: 'Another identity' },
          { value: 'prefer_not_to_say', label: 'Prefer not to say' },
        ],
      },
      {
        when: {
          kind: 'response',
          question_id: 'qb.universal.demographics.biological_sex_at_birth_v1',
          operator: 'equals',
          value: 'female',
        },
        choices: [
          { value: 'man', label: 'Man' },
          { value: 'trans_man', label: 'Trans man' },
          { value: 'non_binary', label: 'Non-binary' },
          { value: 'another', label: 'Another identity' },
          { value: 'prefer_not_to_say', label: 'Prefer not to say' },
        ],
      },
    ],
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'gender_identity', value: null },
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.pronouns_v1',
    question_version: '1.0.0',
    tier: 3,
    answer_type: 'single_select',
    selection_cardinality: 'optional_blank_allowed',
    requiredness: 'optional',
    answer_role: 'preference',
    intent_of_answer_set: 'preference_capture',
    entity_kind: 'single_value',
    atom_kind: 'identity',
    downstream_effect: 'personalization',
    render_when: {
      kind: 'response',
      question_id: 'qb.universal.demographics.gender_alignment_with_birth_sex_v1',
      operator: 'equals',
      value: 'not_aligned',
    },
    prompt: 'What pronouns should we use?',
    helper: 'Optional. We use this in messages and visit notes.',
    choices: [
      { value: 'he_him', label: 'he/him' },
      { value: 'she_her', label: 'she/her' },
      { value: 'they_them', label: 'they/them' },
      { value: 'other', label: 'other (free-text)' },
      { value: 'prefer_not_to_say', label: 'prefer not to say' },
    ],
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'pronouns', value: null },
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.residence_state_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'operational',
    intent_of_answer_set: 'forced_classification',
    entity_kind: 'single_value',
    atom_kind: 'identity',
    downstream_effect: 'hard_stop',
    render_when: null,
    prompt: 'What state do you live in?',
    helper: "We use this to verify telehealth eligibility and (if you're prescribed) ship to the right place.",
    // Choices resolved by US state code allowlist; render-time resolver populates 51 entries.
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'residence_state', value: null },
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.shipping_state_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'single_select',
    selection_cardinality: 'exactly_one',
    requiredness: 'required_to_continue',
    answer_role: 'operational',
    intent_of_answer_set: 'forced_classification',
    entity_kind: 'single_value',
    atom_kind: 'operational',
    downstream_effect: 'hard_stop',
    render_when: null,
    prompt: 'Same state for shipping?',
    helper: 'We need to ship medications to the same state you live in for telehealth compliance. If different, let us know.',
    emissions: [
      {
        target: 'patient_address',
        payload: {
          street: '',
          city: '',
          state: '',
          zip: '',
          country: 'US',
        },
      },
    ],
  },
  {
    question_id: 'qb.universal.demographics.ethnicity_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'multi_select',
    selection_cardinality: 'zero_or_more',
    requiredness: 'optional',
    answer_role: 'clinical_context',
    intent_of_answer_set: 'clinical_history',
    entity_kind: 'single_value',
    atom_kind: 'clinical_history',
    downstream_effect: 'personalization',
    render_when: null,
    prompt: 'How would you describe your ethnicity?',
    helper: 'Optional. Some treatments and lab references vary by ethnicity. Select all that apply.',
    choices: [
      { value: 'asian', label: 'Asian' },
      { value: 'east_asian', label: 'East Asian (Japanese, Chinese, Korean)' },
      { value: 'south_asian', label: 'South Asian' },
      { value: 'black_african_american', label: 'Black or African American' },
      { value: 'hispanic_latino', label: 'Hispanic or Latino' },
      { value: 'native_american', label: 'Native American or Alaska Native' },
      { value: 'pacific_islander', label: 'Pacific Islander' },
      { value: 'white_caucasian', label: 'White or Caucasian' },
      { value: 'other', label: 'Other (free-text)' },
    ],
    emissions: [
      {
        target: 'patient_column',
        payload: { column: 'ethnicity', value: null },
      },
    ],
  },
];

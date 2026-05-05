/**
 * Core intake types: Module, Question, Pathway.
 *
 * Per system map Section 1K.3 + 1K.4 + 1K.0.5 (data routing discipline).
 *
 * Phase 3 declares these types as code-as-config. Phase 4 runtime consumes them
 * to render questions, route emissions, and persist responses.
 */

import type { AnswerType } from './answer-types';
import type { Emission, EmissionTarget } from './targets';
import type { Predicate } from './branching';

/** Tier per Section 1K.4: 1 = required for safety; 2 = should ask; 3 = nice to have. */
export type Tier = 1 | 2 | 3;

export type Requiredness =
  | 'required_to_continue'
  | 'conditionally_required'
  | 'optional'
  | 'not_applicable'
  | 'required_blank_not_allowed'
  | 'optional_blank_allowed';

export type SelectionCardinality =
  | 'exactly_one'
  | 'zero_or_more'
  | 'one_or_more'
  | 'required_blank_not_allowed'
  | 'optional_blank_allowed';

export type AnswerRole =
  | 'operational'
  | 'clinical_safety'
  | 'clinical_context'
  | 'preference'
  | 'commercial_confidence'
  | 'educational_trust';

export type IntentOfAnswerSet =
  | 'forced_classification'
  | 'preference_capture'
  | 'safety_screening'
  | 'clinical_history'
  | 'conversion_support'
  | 'progress_indication'
  | 'result_display'
  | 'trust_building'
  | 'commercial_commit';

export type AtomKind =
  | 'identity'
  | 'clinical_history'
  | 'operational'
  | 'consent'
  | 'commerce'
  | 'candidacy_result';

export type DownstreamEffect = 'personalization' | 'provider_review' | 'hard_stop' | 'none';

export type EntityKind = 'single_value' | 'composite' | 'multi_instance';

/** Choice option for select-type questions. */
export interface ChoiceOption {
  value: string;
  label: string;
  /**
   * For multi_select with `none_logic: 'exclusive_with_other_choices'`,
   * the "none of these" option marks itself with `excludes_others: true`.
   */
  excludes_others?: boolean;
}

/**
 * Question — a single intake question (or non-question screen for educational types).
 * Carries declarative emissions per Section 1K.0.5; runtime uses these to route writes.
 */
export interface Question {
  question_id: string;
  question_version: string;
  tier: Tier;
  answer_type: AnswerType;
  selection_cardinality?: SelectionCardinality;
  requiredness: Requiredness;
  answer_role: AnswerRole;
  intent_of_answer_set: IntentOfAnswerSet;
  entity_kind: EntityKind;
  atom_kind?: AtomKind;
  downstream_effect: DownstreamEffect;
  /** Predicate gating render; null = always render once reached. */
  render_when: Predicate | null;
  /** Patient-facing prompt copy. May reference `prompt_template_refs` for dynamic substitution. */
  prompt: string;
  helper?: string;
  choices?: ChoiceOption[];
  /** Choices for asymmetric answer sets resolved at render time per a prior atom value. */
  asymmetric_choices?: Array<{
    when: Predicate;
    choices: ChoiceOption[];
  }>;
  prompt_template_refs?: Array<{ ref: string; resolves_to: string | object }>;
  /** Multi-instance discipline per Section 1K.5.A — multi_instance questions emit per-instance. */
  multi_instance_context_key_field?: string;
  /** Declarative emissions per Section 1K.0.5. Multi-target emissions execute in one DB transaction. */
  emissions: Emission[];
  /** Optional CI-lint hint: which Section 1Q rules / templates consume this question's atoms. */
  consumed_by_rules?: string[];
  consumed_by_templates?: string[];
}

/**
 * Module — a collection of questions sharing a common module_id + version + scope.
 * Per Section 1K.3 4-layer taxonomy: universal | clinical_core | domain | pathway.
 */
export interface Module {
  module_id: string;
  module_version: string;
  kind: 'clinical' | 'non-clinical' | 'commercial';
  layer: 'A_universal' | 'B_clinical_core' | 'C_domain' | 'D_pathway' | 'conversion_funnel';
  pathways: 'all' | string[];
  required_for: Array<'eligibility' | 'identity' | 'fulfillment' | 'payment' | 'submission' | 'session_continuation' | 'none'>;
  assertion_group_emit_trigger?: 'module_complete' | 'per_question' | 'none';
  assertion_group_id?: string;
  questions: Question[];
  /** Optional render condition for the entire module. */
  render_when?: Predicate | null;
  /** Module-level emissions fired at module_complete (e.g., composite consent emit per Module 2). */
  module_complete_emissions?: Emission[];
}

/**
 * Pathway — composes modules into a runtime pathway definition.
 * Per Section 1K.2: pathway-level metadata (sensitivity, jurisdiction); composition order;
 * rule + template references per Section 1Q.
 */
export interface Pathway {
  pathway_code: string;
  pathway_version: string;
  sensitivity_level: 'low' | 'moderate' | 'high' | 'extreme';
  jurisdiction_eligibility: {
    included_states: string[];
    excluded_states: string[];
  };
  composition: Array<{
    module_id: string;
    module_version: string;
    order: number;
    when?: Predicate;
  }>;
  rules_ref: string[];
  templates_ref: string[];
  pricing_profile_id: string;
  metadata?: Record<string, unknown>;
}

/** Re-export for convenience. */
export type { Emission, EmissionTarget };

/**
 * Intent concept registry per system map Section 1K.0.5.9.
 *
 * Intent = patient-stated goals, motivations, or preferences about their own care
 * that INFORM CLINICAL DECISION-MAKING. Patient is authority on own intent.
 * Distinct from `treatment_target` (provider-authored clinical targets).
 *
 * CI-lint rule (binding): every intent concept here MUST be referenced by at least one
 * `rule.*.required_inputs` OR `template.*.variables` per Section 1Q.15. Orphan intents
 * are reclassified or removed.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const i = (
  conceptId: string,
  description: string,
  consumers: { rules?: string[]; templates?: string[] } = {}
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'intent',
  description,
  consumed_by_rules: consumers.rules,
  consumed_by_templates: consumers.templates,
});

export const INTENT_REGISTRY: ConceptRegistry = {
  // GLP-1 weight loss intent (Module 13 + Module 16)
  'intent.glp1_weight_loss_goal_band': i(
    'intent.glp1_weight_loss_goal_band',
    'Patient-stated weight loss goal as banded value (e.g., "5-15 lbs", "15-25 lbs", "more than 25 lbs", "I do not have a specific number").',
    { rules: ['rule.glp1.dose.target_weight_aware'], templates: ['template.glp1.dose_recommendation'] }
  ),
  'intent.has_higher_max_weight_history': i(
    'intent.has_higher_max_weight_history',
    "Patient indicates a max-weight value higher than current weight (Y/N).",
    { rules: ['rule.glp1.weight_history_review'] }
  ),
  'intent.weight_loss_motivation': i(
    'intent.weight_loss_motivation',
    'Primary motivation for weight loss (health, appearance, confidence, fertility, mobility, etc.).',
    { templates: ['template.glp1.personalization_motivation'] }
  ),
  'intent.treatment_priority': i(
    'intent.treatment_priority',
    'Patient-stated treatment priority (effectiveness, affordability, side-effect profile, dosing convenience).',
    { rules: ['rule.glp1.treatment_selection'], templates: ['template.glp1.rx_recommendation'] }
  ),
  'intent.glp1_treatment_preference': i(
    'intent.glp1_treatment_preference',
    'Patient-stated preference for specific GLP-1 medication (e.g., Wegovy, Zepbound, open to provider recommendation).',
    { templates: ['template.glp1.rx_recommendation'] }
  ),
  'intent.weight_loss_goal_benefit_health': i('intent.weight_loss_goal_benefit_health', 'Patient cited improved health as goal benefit.', { templates: ['template.glp1.goal_celebration_comms'] }),
  'intent.weight_loss_goal_benefit_appearance': i('intent.weight_loss_goal_benefit_appearance', 'Patient cited appearance as goal benefit.', { templates: ['template.glp1.goal_celebration_comms'] }),
  'intent.weight_loss_goal_benefit_energy': i('intent.weight_loss_goal_benefit_energy', 'Patient cited energy as goal benefit.', { templates: ['template.glp1.goal_celebration_comms'] }),
  'intent.weight_loss_goal_benefit_confidence': i('intent.weight_loss_goal_benefit_confidence', 'Patient cited confidence as goal benefit.', { templates: ['template.glp1.goal_celebration_comms'] }),
  'intent.weight_loss_goal_benefit_mobility': i('intent.weight_loss_goal_benefit_mobility', 'Patient cited mobility as goal benefit.', { templates: ['template.glp1.goal_celebration_comms'] }),
  'intent.weight_loss_goal_benefit_fertility': i('intent.weight_loss_goal_benefit_fertility', 'Patient cited fertility as goal benefit.', { templates: ['template.glp1.goal_celebration_comms'] }),
  'intent.weight_loss_goal_benefit_other': i('intent.weight_loss_goal_benefit_other', 'Patient cited other goal benefit (free-text in metadata).', { templates: ['template.glp1.goal_celebration_comms'] }),

  // Prior weight loss attempt methods (Module 14; multi-instance per Section 1K.5.A)
  'intent.has_prior_weight_loss_attempts': i('intent.has_prior_weight_loss_attempts', 'Patient indicates prior weight loss attempt(s) (Y/N).', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
  'intent.prior_weight_loss_method_diet': i('intent.prior_weight_loss_method_diet', 'Prior method: structured diet (keto, paleo, calorie restriction, etc.).', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
  'intent.prior_weight_loss_method_exercise': i('intent.prior_weight_loss_method_exercise', 'Prior method: exercise program.', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
  'intent.prior_weight_loss_method_program': i('intent.prior_weight_loss_method_program', 'Prior method: commercial weight-loss program (WW, Noom, etc.).', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
  'intent.prior_weight_loss_method_medication': i('intent.prior_weight_loss_method_medication', 'Prior method: weight-loss medication other than GLP-1.', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
  'intent.prior_weight_loss_method_glp1': i('intent.prior_weight_loss_method_glp1', 'Prior method: GLP-1 (specifics captured separately in Module 15).', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
  'intent.prior_weight_loss_method_bariatric_surgery': i('intent.prior_weight_loss_method_bariatric_surgery', 'Prior method: bariatric surgery.', { rules: ['rule.glp1.safety.prior_attempt_history_review', 'rule.glp1.safety.post_bariatric_review'] }),
  'intent.prior_weight_loss_method_other': i('intent.prior_weight_loss_method_other', 'Prior method: other (free-text in metadata).', { rules: ['rule.glp1.safety.prior_attempt_history_review'] }),
};

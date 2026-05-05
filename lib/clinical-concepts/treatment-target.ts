/**
 * Treatment target concept registry per system map Section 1K.0.5.9.
 *
 * Treatment_target = provider-stated CLINICAL targets (weight loss target in clinical
 * terms, BP systolic target, A1c target). Distinct from `intent` (patient-authored).
 * Coexists with patient `intent.*` rows on the same patient — both valid simultaneously;
 * rules read both for shared-decision-making logic.
 *
 * Authority: provider authored (`authored_by: 'provider_assessed'` or `'provider_confirmed'`).
 *
 * CI-lint rule (binding): every treatment_target concept MUST be referenced by at least one
 * rule or template per Section 1Q.15.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const tt = (
  conceptId: string,
  description: string,
  consumers: { rules?: string[]; templates?: string[] } = {}
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'treatment_target',
  description,
  consumed_by_rules: consumers.rules,
  consumed_by_templates: consumers.templates,
});

export const TREATMENT_TARGET_REGISTRY: ConceptRegistry = {
  // GLP-1 weight loss target
  'treatment_target.weight_loss_target_kg': tt(
    'treatment_target.weight_loss_target_kg',
    'Provider-stated weight loss target in kg (clinical target; coexists with patient intent.glp1_weight_loss_goal_band).',
    { rules: ['rule.glp1.dose.target_weight_aware', 'rule.glp1.monitoring.weight_trajectory_review'] }
  ),
  'treatment_target.weight_loss_target_pct_body_weight': tt(
    'treatment_target.weight_loss_target_pct_body_weight',
    'Provider-stated target as percentage of starting body weight (e.g., 10-15%).',
    { rules: ['rule.glp1.dose.target_weight_aware'] }
  ),

  // Cardiometabolic targets
  'treatment_target.bp_systolic_target_mmhg': tt(
    'treatment_target.bp_systolic_target_mmhg',
    'Provider-stated systolic BP target in mmHg.',
    { rules: ['rule.cardiometabolic.bp_target_review'] }
  ),
  'treatment_target.bp_diastolic_target_mmhg': tt(
    'treatment_target.bp_diastolic_target_mmhg',
    'Provider-stated diastolic BP target in mmHg.',
    { rules: ['rule.cardiometabolic.bp_target_review'] }
  ),
  'treatment_target.a1c_target_pct': tt(
    'treatment_target.a1c_target_pct',
    'Provider-stated A1c target as percentage (e.g., 6.5, 7.0).',
    { rules: ['rule.diabetes.a1c_target_review'] }
  ),
  'treatment_target.ldl_target_mg_dl': tt(
    'treatment_target.ldl_target_mg_dl',
    'Provider-stated LDL target in mg/dL.',
    { rules: ['rule.lipid.ldl_target_review'] }
  ),
};

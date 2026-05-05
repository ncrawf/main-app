/**
 * GLP-1 pathway composition per `glp1_pathway_modules_v1.md` Phase 3.
 *
 * Wires Layer A (universal) + Layer B (clinical core) + Layer C (domain baselines) +
 * Layer D (pathway-specific Modules 13-20) + conversion funnel (Modules 22-26 +
 * existing Module 3 identity_verification) into one runtime pathway definition.
 *
 * Composition order matches `glp1_pathway_modules_v1.md` Phase 3 next deliverable.
 */

import type { Pathway } from '../types';

export const glp1Pathway: Pathway = {
  pathway_code: 'glp1',
  pathway_version: '1.0.0',
  sensitivity_level: 'moderate',
  jurisdiction_eligibility: {
    // Phase 3 placeholder; finalized per launch-state safety defaults
    included_states: [],
    excluded_states: ['AK', 'HI'],
  },
  composition: [
    // Layer A — universal
    { module_id: 'mod.universal.demographics_v1', module_version: '1.0.0', order: 10 },
    { module_id: 'mod.universal.base_consents_v1', module_version: '1.0.0', order: 20 },

    // Layer B — clinical core
    { module_id: 'mod.clinical_core.medication_history_v1', module_version: '1.0.0', order: 30 },
    { module_id: 'mod.clinical_core.allergy_history_v1', module_version: '1.0.0', order: 40 },
    { module_id: 'mod.clinical_core.surgery_history_v1', module_version: '1.0.0', order: 50 },

    // Layer C — domain baselines
    { module_id: 'mod.domain.cardiometabolic.baseline_history_v1', module_version: '1.0.0', order: 60 },
    { module_id: 'mod.domain.gastrointestinal.baseline_history_v1', module_version: '1.0.0', order: 70 },
    {
      module_id: 'mod.domain.reproductive.baseline_history_v1',
      module_version: '1.0.0',
      order: 80,
      // Female-only conditional rendering
      when: {
        kind: 'response',
        question_id: 'qb.universal.demographics.biological_sex_at_birth_v1',
        operator: 'equals',
        value: 'female',
      },
    },
    { module_id: 'mod.domain.mental_health.baseline_history_v1', module_version: '1.0.0', order: 90 },
    { module_id: 'mod.domain.lifestyle.baseline_history_v1', module_version: '1.0.0', order: 100 },

    // Layer D — GLP-1 pathway-specific Modules 13-20
    { module_id: 'mod.pathway.glp1.weight_history_v1', module_version: '1.0.0', order: 130 },
    { module_id: 'mod.pathway.glp1.weight_loss_attempts_v1', module_version: '1.0.0', order: 140 },
    { module_id: 'mod.pathway.glp1.prior_glp1_use_v1', module_version: '1.0.0', order: 150 },
    { module_id: 'mod.pathway.glp1.motivation_and_goals_v1', module_version: '1.0.0', order: 160 },
    { module_id: 'mod.pathway.glp1.eating_disorder_screen_v1', module_version: '1.0.0', order: 170 },
    { module_id: 'mod.pathway.glp1.cv_safety_extended_v1', module_version: '1.0.0', order: 180 },
    { module_id: 'mod.pathway.glp1.bariatric_surgery_extended_v1', module_version: '1.0.0', order: 190 },
    { module_id: 'mod.pathway.glp1.gi_safety_extended_v1', module_version: '1.0.0', order: 200 },

    // Conversion funnel — Modules 22-26 (Module 21 deferred per glp1_pathway_modules_v1.md Deferred scope)
    { module_id: 'mod.universal.smart_loading_v1', module_version: '1.0.0', order: 220 },
    { module_id: 'mod.universal.candidacy_result_v1', module_version: '1.0.0', order: 230 },
    { module_id: 'mod.pathway.glp1.treatment_preview_v1', module_version: '1.0.0', order: 240 },
    { module_id: 'mod.universal.profile_hard_commit_v1', module_version: '1.0.0', order: 250 },
    { module_id: 'mod.universal.identity_verification_v1', module_version: '1.0.0', order: 260 }, // Module 3 reused
    { module_id: 'mod.universal.membership_checkout_v1', module_version: '1.0.0', order: 270 },

    // Module 4 insurance_payment_readiness composed when payment surface needs it (Phase 4 decides exact placement)
    { module_id: 'mod.universal.insurance_payment_readiness_v1', module_version: '1.0.0', order: 280 },
  ],
  rules_ref: [
    // Per Section 1Q.15 GLP-1 vertical slice (24 rules total)
    'rule.glp1.eligibility.contraindication_men2',
    'rule.glp1.eligibility.contraindication_thyroid_cancer',
    'rule.glp1.safety.contraindication_pancreatitis_personal_history',
    'rule.glp1.safety.contraindication_anorexia_nervosa',
    'rule.glp1.safety.bmi_threshold',
    'rule.glp1.safety.pregnancy_block',
    'rule.glp1.safety.prior_attempt_history_review',
    'rule.glp1.safety.post_bariatric_review',
    'rule.glp1.dose.adherence_aware',
    'rule.glp1.dose.target_weight_aware',
    'rule.glp1.treatment_selection',
    'rule.glp1.monitoring.weight_trajectory_review',
    // ...remaining rules per Section 1Q.15
  ],
  templates_ref: [
    // Per Section 1Q.15 GLP-1 vertical slice (25 templates total)
    'template.glp1.dose_recommendation',
    'template.glp1.rx_recommendation',
    'template.glp1.personalization_motivation',
    'template.glp1.goal_celebration_comms',
    // ...remaining templates per Section 1Q.15
  ],
  pricing_profile_id: 'pricing.glp1.v1',
  metadata: {
    deferred_scope: 'Module 21 pharmacologic acknowledgments deferred to future Rx Confirmation flow per glp1_pathway_modules_v1.md',
    architecture_pin: 'Section 1K.0.5 + 1K.5.A + 1K.11 + 1Q.15',
  },
};

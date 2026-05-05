/**
 * Medication concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * CLAIM-SIDE medication concepts — used for `patient_clinical_assertions` rows
 * with `concept_type: 'medication'` (e.g., "patient says they take metformin").
 *
 * The reconciled `patient_medications` entity table uses RxNorm/NDC for canonical
 * naming when available. Naming spaces are intentionally distinct: claim ledger uses
 * `medication.<lowercase_simple_name>` for free-text-ish capture; entity uses
 * structured columns + RxNorm. A future cross-walk helper resolves between layers.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const m = (
  conceptId: string,
  description: string,
  rxnorm?: string[]
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'medication',
  description,
  codes: rxnorm ? { rxnorm } : undefined,
});

export const MEDICATION_CONCEPT_REGISTRY: ConceptRegistry = {
  // GLP-1 receptor agonists (Module 15)
  'medication.semaglutide': m('medication.semaglutide', 'Semaglutide (any formulation).'),
  'medication.semaglutide_compounded': m('medication.semaglutide_compounded', 'Compounded semaglutide.'),
  'medication.wegovy': m('medication.wegovy', 'Wegovy (semaglutide; FDA-approved for weight loss).'),
  'medication.ozempic': m('medication.ozempic', 'Ozempic (semaglutide; FDA-approved for T2DM).'),
  'medication.tirzepatide': m('medication.tirzepatide', 'Tirzepatide (any formulation).'),
  'medication.mounjaro': m('medication.mounjaro', 'Mounjaro (tirzepatide; FDA-approved for T2DM).'),
  'medication.zepbound': m('medication.zepbound', 'Zepbound (tirzepatide; FDA-approved for weight loss).'),
  'medication.foundayo': m('medication.foundayo', 'Foundayo (orforglipron; FDA-approved for weight loss).'),
  'medication.liraglutide': m('medication.liraglutide', 'Liraglutide (Saxenda / Victoza).'),
  'medication.glp1_other': m('medication.glp1_other', 'Other GLP-1 agonist not separately listed.'),

  // Aggregate concept used by Q15.1 status capture
  'medication.glp1_use_status': m('medication.glp1_use_status', 'Patient GLP-1 use status (currently / past / never). Metadata.value carries the value.'),

  // Other diabetes / metabolic meds
  'medication.metformin': m('medication.metformin', 'Metformin.'),
  'medication.insulin': m('medication.insulin', 'Insulin (any formulation).'),
  'medication.sulfonylurea': m('medication.sulfonylurea', 'Sulfonylurea class (glipizide, glyburide, glimepiride).'),
  'medication.sglt2_inhibitor': m('medication.sglt2_inhibitor', 'SGLT2 inhibitor class.'),

  // GLP-1 side-effect course concepts (Q15.6)
  'medication.glp1_side_effect_nausea': m('medication.glp1_side_effect_nausea', 'GLP-1 side effect: nausea course.'),
  'medication.glp1_side_effect_vomiting': m('medication.glp1_side_effect_vomiting', 'GLP-1 side effect: vomiting course.'),
  'medication.glp1_side_effect_diarrhea': m('medication.glp1_side_effect_diarrhea', 'GLP-1 side effect: diarrhea course.'),
  'medication.glp1_side_effect_constipation': m('medication.glp1_side_effect_constipation', 'GLP-1 side effect: constipation course.'),
  'medication.glp1_side_effect_severe_abdominal_pain': m('medication.glp1_side_effect_severe_abdominal_pain', 'GLP-1 side effect: severe abdominal pain (flag for pancreatitis review).'),
  'medication.glp1_side_effect_injection_site_reaction': m('medication.glp1_side_effect_injection_site_reaction', 'GLP-1 side effect: injection site reaction.'),
  'medication.glp1_side_effect_other': m('medication.glp1_side_effect_other', 'GLP-1 side effect: other (free-text in metadata).'),
};

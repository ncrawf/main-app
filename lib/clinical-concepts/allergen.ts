/**
 * Allergen concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * Used by claim-side `patient_clinical_assertions` rows with `concept_type: 'allergy'`
 * AND by reconciled `patient_allergies` entity rows.
 *
 * Phase 3 ships a baseline of common allergens; future pathways extend.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const a = (
  conceptId: string,
  description: string
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'allergy',
  description,
});

export const ALLERGEN_REGISTRY: ConceptRegistry = {
  // Drug allergens
  'allergy.penicillin': a('allergy.penicillin', 'Penicillin allergy.'),
  'allergy.sulfa': a('allergy.sulfa', 'Sulfa drug allergy.'),
  'allergy.cephalosporin': a('allergy.cephalosporin', 'Cephalosporin allergy.'),
  'allergy.nsaid': a('allergy.nsaid', 'NSAID allergy.'),
  'allergy.aspirin': a('allergy.aspirin', 'Aspirin allergy.'),
  'allergy.codeine': a('allergy.codeine', 'Codeine allergy.'),
  'allergy.morphine': a('allergy.morphine', 'Morphine allergy.'),
  'allergy.glp1_agonist': a('allergy.glp1_agonist', 'GLP-1 agonist class allergy / hypersensitivity.'),
  'allergy.semaglutide': a('allergy.semaglutide', 'Semaglutide-specific hypersensitivity.'),
  'allergy.tirzepatide': a('allergy.tirzepatide', 'Tirzepatide-specific hypersensitivity.'),
  'allergy.metformin': a('allergy.metformin', 'Metformin allergy / intolerance.'),

  // Food allergens
  'allergy.peanut': a('allergy.peanut', 'Peanut allergy.'),
  'allergy.tree_nut': a('allergy.tree_nut', 'Tree nut allergy.'),
  'allergy.shellfish': a('allergy.shellfish', 'Shellfish allergy.'),
  'allergy.fish': a('allergy.fish', 'Fish allergy.'),
  'allergy.egg': a('allergy.egg', 'Egg allergy.'),
  'allergy.milk': a('allergy.milk', 'Milk / dairy allergy.'),
  'allergy.soy': a('allergy.soy', 'Soy allergy.'),
  'allergy.wheat_gluten': a('allergy.wheat_gluten', 'Wheat / gluten allergy or intolerance.'),

  // Environmental
  'allergy.latex': a('allergy.latex', 'Latex allergy.'),
  'allergy.iodine_contrast': a('allergy.iodine_contrast', 'Iodine / radiocontrast allergy.'),
  'allergy.bee_sting': a('allergy.bee_sting', 'Bee sting / Hymenoptera allergy.'),
  'allergy.pollen': a('allergy.pollen', 'Pollen allergy / seasonal allergic rhinitis.'),
  'allergy.dust_mites': a('allergy.dust_mites', 'Dust mite allergy.'),

  // Catch-all
  'allergy.other': a('allergy.other', 'Other allergy (allergen captured in metadata.allergen_text).'),
  'allergy.no_known_allergies': a('allergy.no_known_allergies', 'No known drug or food allergies (NKDA).'),
};

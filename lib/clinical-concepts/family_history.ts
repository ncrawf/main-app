/**
 * Family history concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * Family history claims live in the claim ledger with `assertion_type: 'family_history'`.
 * Metadata captures relationship (mother, father, sibling, etc.) per the assertion's
 * context jsonb shape.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const fh = (
  conceptId: string,
  description: string,
  extras: Partial<ClinicalConcept> = {}
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'family_history',
  description,
  ...extras,
});

export const FAMILY_HISTORY_REGISTRY: ConceptRegistry = {
  // Endocrine / cancer (Module 18 CV safety)
  'family_history.medullary_thyroid_carcinoma': fh('family_history.medullary_thyroid_carcinoma', 'Family history of MTC. FDA boxed-warning territory for GLP-1.'),
  'family_history.men2': fh('family_history.men2', 'Family history of MEN-2 syndrome.'),
  'family_history.long_qt_syndrome': fh('family_history.long_qt_syndrome', 'Family history of long QT syndrome.'),
  'family_history.sudden_death_under_40': fh('family_history.sudden_death_under_40', 'Family history of sudden death in a relative under age 40.'),
  'family_history.sudden_death_under_40_cardiac_related': fh('family_history.sudden_death_under_40_cardiac_related', 'Sudden death under 40 confirmed cardiac-related (vs accidental / non-cardiac). Drives hereditary-cardiac screening.'),

  // Cardiovascular
  'family_history.coronary_artery_disease': fh('family_history.coronary_artery_disease', 'Family history of CAD / early MI.'),
  'family_history.stroke': fh('family_history.stroke', 'Family history of CVA / stroke.'),
  'family_history.hypertension': fh('family_history.hypertension', 'Family history of hypertension.'),

  // Cancer
  'family_history.breast_cancer': fh('family_history.breast_cancer', 'Family history of breast cancer.'),
  'family_history.colon_cancer': fh('family_history.colon_cancer', 'Family history of colon / colorectal cancer.'),
  'family_history.prostate_cancer': fh('family_history.prostate_cancer', 'Family history of prostate cancer.'),

  // Metabolic
  'family_history.diabetes_type_2': fh('family_history.diabetes_type_2', 'Family history of type 2 diabetes.'),
  'family_history.obesity': fh('family_history.obesity', 'Family history of obesity / metabolic syndrome.'),
};

/**
 * Condition concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * Conditions live in the claim ledger (`patient_clinical_assertions`). The
 * problem list is a DERIVED VIEW over this ledger (see lib/intake/views/problem-list.ts);
 * no dedicated `patient_problems` table in Phase 3.
 *
 * Coverage: concepts referenced by GLP-1 V1 + Layer A-D specs. Future pathway
 * additions extend this file.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const c = (
  conceptId: string,
  description: string,
  extras: Partial<ClinicalConcept> = {}
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'condition',
  description,
  ...extras,
});

export const CONDITION_REGISTRY: ConceptRegistry = {
  // Cardiometabolic
  'condition.hypertension_history': c('condition.hypertension_history', 'History of hypertension (HTN).'),
  'condition.diabetes_type_2_history': c('condition.diabetes_type_2_history', 'History of type 2 diabetes mellitus.'),
  'condition.diabetes_type_1_history': c('condition.diabetes_type_1_history', 'History of type 1 diabetes mellitus.'),
  'condition.hyperlipidemia_history': c('condition.hyperlipidemia_history', 'History of hyperlipidemia / dyslipidemia.'),
  'condition.coronary_artery_disease_history': c('condition.coronary_artery_disease_history', 'History of CAD / ischemic heart disease.'),
  'condition.heart_failure_history': c('condition.heart_failure_history', 'History of heart failure (HFrEF or HFpEF).'),
  'condition.myocardial_infarction_history': c('condition.myocardial_infarction_history', 'History of MI.'),
  'condition.stroke_history': c('condition.stroke_history', 'History of CVA / stroke.'),
  'condition.long_qt_syndrome_history': c('condition.long_qt_syndrome_history', 'History of long QT syndrome (personal).'),

  // Endocrine
  'condition.medullary_thyroid_carcinoma_history': c('condition.medullary_thyroid_carcinoma_history', 'History of MTC; FDA boxed warning concept for GLP-1 agonists.'),
  'condition.men2_history': c('condition.men2_history', 'History of MEN-2 syndrome (Multiple Endocrine Neoplasia type 2).'),
  'condition.thyroid_disease_history': c('condition.thyroid_disease_history', 'History of hypothyroidism / hyperthyroidism / goiter.'),
  'condition.diabetic_retinopathy_history': c('condition.diabetic_retinopathy_history', 'History of diabetic retinopathy; semaglutide label caution.'),

  // Gastrointestinal
  'condition.pancreatitis_history': c('condition.pancreatitis_history', 'History of pancreatitis (acute or chronic). FDA-warning concept for GLP-1.'),
  'condition.gallbladder_disease_history': c('condition.gallbladder_disease_history', 'History of gallbladder disease (cholelithiasis, cholecystitis, etc.).'),
  'condition.gastroparesis_history': c('condition.gastroparesis_history', 'History of gastroparesis (delayed gastric emptying).'),
  'condition.ibs_history': c('condition.ibs_history', 'History of irritable bowel syndrome.'),
  'condition.crohns_disease_history': c('condition.crohns_disease_history', 'History of Crohn disease.'),
  'condition.ulcerative_colitis_history': c('condition.ulcerative_colitis_history', 'History of ulcerative colitis.'),

  // Mental health
  'condition.eating_disorder_history': c('condition.eating_disorder_history', 'Generic eating disorder history (parent concept).'),
  'condition.anorexia_nervosa_history': c('condition.anorexia_nervosa_history', 'History of anorexia nervosa. Hard-stop for GLP-1 per Section 1Q.15.'),
  'condition.bulimia_nervosa_history': c('condition.bulimia_nervosa_history', 'History of bulimia nervosa. Flag cohort for GLP-1.'),
  'condition.binge_eating_disorder_history': c('condition.binge_eating_disorder_history', 'History of binge eating disorder. Distinct flag cohort with emerging positive-indication evidence.'),
  'condition.depression_history': c('condition.depression_history', 'History of major depressive disorder.'),
  'condition.anxiety_history': c('condition.anxiety_history', 'History of anxiety disorder (GAD, panic, etc.).'),
  'condition.bipolar_disorder_history': c('condition.bipolar_disorder_history', 'History of bipolar disorder.'),
  'condition.psychosis_history': c('condition.psychosis_history', 'History of psychotic disorder (schizophrenia, schizoaffective).'),
  'condition.suicidal_ideation_history': c('condition.suicidal_ideation_history', 'History of suicidal ideation or attempts.'),
};

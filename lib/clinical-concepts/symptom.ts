/**
 * Symptom concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * Symptoms live in the claim ledger (`patient_clinical_assertions`). Distinct
 * from `finding` concepts (provider-observed signs) which live in
 * `patient_exam_findings` entity table.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const s = (
  conceptId: string,
  description: string,
  extras: Partial<ClinicalConcept> = {}
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'symptom',
  description,
  ...extras,
});

export const SYMPTOM_REGISTRY: ConceptRegistry = {
  // GI side effects (relevant to GLP-1 prior-use Q15.6)
  'symptom.nausea': s('symptom.nausea', 'Patient-reported nausea.'),
  'symptom.vomiting': s('symptom.vomiting', 'Patient-reported vomiting.'),
  'symptom.diarrhea': s('symptom.diarrhea', 'Patient-reported diarrhea.'),
  'symptom.constipation': s('symptom.constipation', 'Patient-reported constipation.'),
  'symptom.abdominal_pain': s('symptom.abdominal_pain', 'Patient-reported abdominal pain.'),
  'symptom.severe_abdominal_pain': s('symptom.severe_abdominal_pain', 'Severe abdominal pain; may flag for pancreatitis review per Section 1Q.15.'),
  'symptom.heartburn': s('symptom.heartburn', 'Patient-reported heartburn / GERD symptoms.'),
  'symptom.bloating': s('symptom.bloating', 'Patient-reported bloating.'),
  'symptom.early_satiety': s('symptom.early_satiety', 'Patient-reported early satiety.'),

  // ED screen symptoms (Module 17)
  'symptom.binge_eating_episodes': s('symptom.binge_eating_episodes', 'Recurrent episodes of eating large amounts in a short time with loss of control.'),
  'symptom.purging_behavior': s('symptom.purging_behavior', 'Compensatory purging behavior (vomiting, laxatives, etc.).'),
  'symptom.restrictive_eating': s('symptom.restrictive_eating', 'Severely restrictive eating pattern.'),
  'symptom.body_image_concerns': s('symptom.body_image_concerns', 'Significant body image distress.'),

  // Cardiovascular
  'symptom.chest_pain': s('symptom.chest_pain', 'Patient-reported chest pain.'),
  'symptom.shortness_of_breath': s('symptom.shortness_of_breath', 'Patient-reported dyspnea / SOB.'),
  'symptom.palpitations': s('symptom.palpitations', 'Patient-reported palpitations.'),
  'symptom.syncope': s('symptom.syncope', 'Patient-reported syncope or near-syncope.'),

  // Mental health
  'symptom.depressed_mood': s('symptom.depressed_mood', 'Patient-reported depressed mood (PHQ item; symptom-level).'),
  'symptom.anxiety_symptoms': s('symptom.anxiety_symptoms', 'Patient-reported anxiety symptoms.'),
  'symptom.suicidal_thoughts': s('symptom.suicidal_thoughts', 'Patient-reported active suicidal thoughts. Triggers Section 1G.3 emergency orchestration.'),
};

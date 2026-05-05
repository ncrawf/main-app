/**
 * Immunization concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * Used by claim-side `patient_clinical_assertions` rows with `concept_type: 'immunization'`
 * AND by reconciled `patient_immunizations` entity rows. Reconciled rows carry CVX codes
 * in dedicated columns; claim-side concept_id is for free-text-ish capture.
 *
 * Phase 3 ships baseline; not heavily used by GLP-1 V1 but foundational for general clinical
 * infrastructure (per surgical-pivot test).
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const im = (
  conceptId: string,
  description: string,
  cvx?: string[]
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'immunization',
  description,
  codes: cvx ? { cvx } : undefined,
});

export const IMMUNIZATION_CONCEPT_REGISTRY: ConceptRegistry = {
  'immunization.influenza': im('immunization.influenza', 'Influenza vaccine (any formulation).'),
  'immunization.tdap': im('immunization.tdap', 'Tdap (tetanus, diphtheria, acellular pertussis).'),
  'immunization.td': im('immunization.td', 'Td booster.'),
  'immunization.mmr': im('immunization.mmr', 'Measles, mumps, rubella.'),
  'immunization.varicella': im('immunization.varicella', 'Varicella (chickenpox) vaccine.'),
  'immunization.zoster': im('immunization.zoster', 'Shingles / zoster vaccine.'),
  'immunization.pneumococcal': im('immunization.pneumococcal', 'Pneumococcal vaccine.'),
  'immunization.hpv': im('immunization.hpv', 'HPV vaccine.'),
  'immunization.hepatitis_a': im('immunization.hepatitis_a', 'Hepatitis A vaccine.'),
  'immunization.hepatitis_b': im('immunization.hepatitis_b', 'Hepatitis B vaccine.'),
  'immunization.covid_19': im('immunization.covid_19', 'COVID-19 vaccine (any formulation).'),
  'immunization.rsv': im('immunization.rsv', 'RSV vaccine.'),
  'immunization.meningococcal': im('immunization.meningococcal', 'Meningococcal vaccine.'),
  'immunization.other': im('immunization.other', 'Other immunization (free-text in metadata).'),
};

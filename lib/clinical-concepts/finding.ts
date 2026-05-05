/**
 * Exam finding concept registry per system map Section 1K.0.5.3.
 *
 * Exam findings are PROVIDER-OBSERVED clinical signs (e.g., thyroid enlargement,
 * abdominal tenderness, edema). Not patient self-reportable — provider-only path.
 *
 * Findings live in dedicated `patient_exam_findings` table (NOT in claim ledger)
 * with severity/location/laterality structured fields. Concept_id here labels
 * the finding kind; severity + laterality + anatomic site are columns on the entity row.
 *
 * Phase 3 ships a minimal skeleton; Phase 4+ when in-person exam workflows mature
 * will expand the catalog.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const f = (
  conceptId: string,
  description: string
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'finding',
  description,
});

export const FINDING_REGISTRY: ConceptRegistry = {
  // Endocrine exam (relevant to GLP-1 if in-person workflow ships)
  'finding.thyroid_enlargement': f('finding.thyroid_enlargement', 'Thyroid gland enlargement on palpation; supports MTC differential consideration.'),
  'finding.thyroid_nodule': f('finding.thyroid_nodule', 'Palpable thyroid nodule.'),

  // Cardiovascular exam
  'finding.heart_murmur': f('finding.heart_murmur', 'Cardiac murmur on auscultation.'),
  'finding.peripheral_edema': f('finding.peripheral_edema', 'Peripheral edema (severity captured in entity row severity column).'),
  'finding.jugular_venous_distention': f('finding.jugular_venous_distention', 'JVD on exam.'),

  // Abdominal exam
  'finding.abdominal_tenderness': f('finding.abdominal_tenderness', 'Abdominal tenderness on palpation (location + severity captured on entity row).'),
  'finding.hepatomegaly': f('finding.hepatomegaly', 'Hepatomegaly on exam.'),
  'finding.splenomegaly': f('finding.splenomegaly', 'Splenomegaly on exam.'),
  'finding.murphy_sign': f('finding.murphy_sign', "Positive Murphy's sign (gallbladder pathology indicator)."),

  // Skin
  'finding.injection_site_reaction': f('finding.injection_site_reaction', 'Injection site reaction (relevant for GLP-1 administration).'),
  'finding.acanthosis_nigricans': f('finding.acanthosis_nigricans', 'Acanthosis nigricans (insulin-resistance marker).'),
};

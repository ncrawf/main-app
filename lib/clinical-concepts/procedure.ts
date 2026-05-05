/**
 * Procedure concept registry per system map Section 1K.5.A + Section 1K.0.5.3.
 *
 * Procedures live in the claim ledger (`patient_clinical_assertions` with
 * `concept_type: 'procedure'`, `assertion_type: 'history_of'`). NO dedicated
 * `patient_surgical_history` entity table in Phase 3 — promoted later if surgical
 * workflows mature per Section 1K.14 promotion-trigger discipline.
 */

import type { ClinicalConcept, ConceptRegistry } from './types';

const p = (
  conceptId: string,
  description: string
): ClinicalConcept => ({
  concept_id: conceptId,
  concept_version: '1.0.0',
  concept_type: 'procedure',
  description,
});

export const PROCEDURE_REGISTRY: ConceptRegistry = {
  // Bariatric surgeries (Module 19)
  'procedure.gastric_bypass_rygb_history': p('procedure.gastric_bypass_rygb_history', 'History of Roux-en-Y gastric bypass.'),
  'procedure.duodenal_switch_history': p('procedure.duodenal_switch_history', 'History of duodenal switch / biliopancreatic diversion.'),
  'procedure.lap_band_history': p('procedure.lap_band_history', 'History of laparoscopic adjustable gastric band.'),
  'procedure.gastric_sleeve_history': p('procedure.gastric_sleeve_history', 'History of sleeve gastrectomy.'),
  'procedure.intestinal_surgery_history': p('procedure.intestinal_surgery_history', 'History of intestinal / bowel resection or other intestinal surgery.'),
  'procedure.bariatric_surgery_other_history': p('procedure.bariatric_surgery_other_history', 'History of other bariatric procedure (free-text in metadata).'),

  // GI surgeries
  'procedure.cholecystectomy_history': p('procedure.cholecystectomy_history', 'History of cholecystectomy (gallbladder removal).'),
  'procedure.appendectomy_history': p('procedure.appendectomy_history', 'History of appendectomy.'),

  // Endocrine
  'procedure.thyroidectomy_history': p('procedure.thyroidectomy_history', 'History of thyroidectomy (partial or total).'),

  // Reproductive
  'procedure.hysterectomy_history': p('procedure.hysterectomy_history', 'History of hysterectomy.'),
  'procedure.tubal_ligation_history': p('procedure.tubal_ligation_history', 'History of tubal ligation.'),
  'procedure.cesarean_section_history': p('procedure.cesarean_section_history', 'History of C-section.'),

  // General
  'procedure.surgery_other_history': p('procedure.surgery_other_history', 'History of other surgical procedure (free-text in metadata).'),
};

import type { Module } from '../../../types';
import { treatmentPreviewQuestions } from '../../../question-bank/pathway/glp1/treatment_preview';

export const treatmentpreviewModule: Module = {
  module_id: 'mod.pathway.glp1.treatment_preview_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: treatmentPreviewQuestions,
};

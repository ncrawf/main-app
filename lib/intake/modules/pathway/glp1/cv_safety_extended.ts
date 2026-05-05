import type { Module } from '../../../types';
import { cvSafetyExtendedQuestions } from '../../../question-bank/pathway/glp1/cv_safety_extended';

export const cvsafetyextendedModule: Module = {
  module_id: 'mod.pathway.glp1.cv_safety_extended_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: cvSafetyExtendedQuestions,
};

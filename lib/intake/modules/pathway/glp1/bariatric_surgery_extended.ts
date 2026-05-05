import type { Module } from '../../../types';
import { bariatricSurgeryExtendedQuestions } from '../../../question-bank/pathway/glp1/bariatric_surgery_extended';

export const bariatricsurgeryextendedModule: Module = {
  module_id: 'mod.pathway.glp1.bariatric_surgery_extended_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: bariatricSurgeryExtendedQuestions,
};

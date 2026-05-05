import type { Module } from '../../../types';
import { giSafetyExtendedQuestions } from '../../../question-bank/pathway/glp1/gi_safety_extended';

export const gisafetyextendedModule: Module = {
  module_id: 'mod.pathway.glp1.gi_safety_extended_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: giSafetyExtendedQuestions,
};

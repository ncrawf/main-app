import type { Module } from '../../../types';
import { eatingDisorderScreenQuestions } from '../../../question-bank/pathway/glp1/eating_disorder_screen';

export const eatingdisorderscreenModule: Module = {
  module_id: 'mod.pathway.glp1.eating_disorder_screen_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: eatingDisorderScreenQuestions,
};

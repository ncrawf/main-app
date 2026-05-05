import type { Module } from '../../../types';
import { weightLossAttemptsQuestions } from '../../../question-bank/pathway/glp1/weight_loss_attempts';

export const weightlossattemptsModule: Module = {
  module_id: 'mod.pathway.glp1.weight_loss_attempts_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: weightLossAttemptsQuestions,
};

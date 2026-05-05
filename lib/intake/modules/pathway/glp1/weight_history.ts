import type { Module } from '../../../types';
import { weightHistoryQuestions } from '../../../question-bank/pathway/glp1/weight_history';

export const weighthistoryModule: Module = {
  module_id: 'mod.pathway.glp1.weight_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'D_pathway',
  pathways: ['glp1'],
  required_for: ['eligibility'],
  questions: weightHistoryQuestions,
};

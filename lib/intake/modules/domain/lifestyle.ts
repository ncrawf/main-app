import type { Module } from '../../types';
import { lifestyleQuestions } from '../../question-bank/domain/lifestyle';

export const lifestyleModule: Module = {
  module_id: 'mod.domain.lifestyle.baseline_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'C_domain',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: lifestyleQuestions,
};

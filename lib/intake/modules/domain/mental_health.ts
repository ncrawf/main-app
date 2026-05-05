import type { Module } from '../../types';
import { mental_healthQuestions } from '../../question-bank/domain/mental_health';

export const mental_healthModule: Module = {
  module_id: 'mod.domain.mental_health.baseline_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'C_domain',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: mental_healthQuestions,
};

import type { Module } from '../../types';
import { cardiometabolicQuestions } from '../../question-bank/domain/cardiometabolic';

export const cardiometabolicModule: Module = {
  module_id: 'mod.domain.cardiometabolic.baseline_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'C_domain',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: cardiometabolicQuestions,
};

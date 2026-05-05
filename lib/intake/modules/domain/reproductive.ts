import type { Module } from '../../types';
import { reproductiveQuestions } from '../../question-bank/domain/reproductive';

export const reproductiveModule: Module = {
  module_id: 'mod.domain.reproductive.baseline_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'C_domain',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: reproductiveQuestions,
};

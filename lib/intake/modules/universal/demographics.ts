import type { Module } from '../../types';
import { demographicsQuestions } from '../../question-bank/universal/demographics';

export const demographicsModule: Module = {
  module_id: 'mod.universal.demographics_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'A_universal',
  pathways: 'all',
  required_for: ['eligibility', 'identity', 'fulfillment'],
  questions: demographicsQuestions,
};

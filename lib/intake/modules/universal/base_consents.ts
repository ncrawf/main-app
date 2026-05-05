import type { Module } from '../../types';
import { baseConsentsQuestions } from '../../question-bank/universal/base_consents';

export const baseConsentsModule: Module = {
  module_id: 'mod.universal.base_consents_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'A_universal',
  pathways: 'all',
  required_for: ['submission', 'eligibility'],
  assertion_group_emit_trigger: 'module_complete',
  assertion_group_id: 'universal.base_consents_composite',
  questions: baseConsentsQuestions,
};

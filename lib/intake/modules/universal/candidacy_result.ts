import type { Module } from '../../types';
import { candidacyResultQuestions } from '../../question-bank/universal/candidacy_result';

export const candidacyResultModule: Module = {
  module_id: 'mod.universal.candidacy_result_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'conversion_funnel',
  pathways: 'all',
  required_for: ['session_continuation'],
  assertion_group_emit_trigger: 'module_complete',
  questions: candidacyResultQuestions,
};

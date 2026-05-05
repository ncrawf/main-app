import type { Module } from '../../types';
import { profileHardCommitQuestions } from '../../question-bank/universal/profile_hard_commit';

export const profileHardCommitModule: Module = {
  module_id: 'mod.universal.profile_hard_commit_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'conversion_funnel',
  pathways: 'all',
  required_for: ['fulfillment', 'identity'],
  assertion_group_emit_trigger: 'module_complete',
  assertion_group_id: 'universal.profile_hard_commit_composite',
  questions: profileHardCommitQuestions,
};

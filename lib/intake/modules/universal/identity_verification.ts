import type { Module } from '../../types';
import { identityVerificationQuestions } from '../../question-bank/universal/identity_verification';

export const identityVerificationModule: Module = {
  module_id: 'mod.universal.identity_verification_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'A_universal',
  pathways: 'all',
  required_for: ['identity'],
  assertion_group_emit_trigger: 'module_complete',
  questions: identityVerificationQuestions,
};

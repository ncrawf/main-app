import type { Module } from '../../types';
import { smartLoadingQuestions } from '../../question-bank/universal/smart_loading';

export const smartLoadingModule: Module = {
  module_id: 'mod.universal.smart_loading_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'conversion_funnel',
  pathways: 'all',
  required_for: ['none'],
  questions: smartLoadingQuestions,
};

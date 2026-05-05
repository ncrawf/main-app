import type { Module } from '../../types';
import { surgeryHistoryQuestions } from '../../question-bank/clinical-core/surgery_history';

export const surgeryHistoryModule: Module = {
  module_id: 'mod.clinical_core.surgery_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'B_clinical_core',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: surgeryHistoryQuestions,
};

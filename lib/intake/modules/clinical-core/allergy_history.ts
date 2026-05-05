import type { Module } from '../../types';
import { allergyHistoryQuestions } from '../../question-bank/clinical-core/allergy_history';

export const allergyHistoryModule: Module = {
  module_id: 'mod.clinical_core.allergy_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'B_clinical_core',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: allergyHistoryQuestions,
};

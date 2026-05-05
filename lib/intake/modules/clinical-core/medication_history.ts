import type { Module } from '../../types';
import { medicationHistoryQuestions } from '../../question-bank/clinical-core/medication_history';

export const medicationHistoryModule: Module = {
  module_id: 'mod.clinical_core.medication_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'B_clinical_core',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: medicationHistoryQuestions,
};

import type { Module } from '../../types';
import { gastrointestinalQuestions } from '../../question-bank/domain/gastrointestinal';

export const gastrointestinalModule: Module = {
  module_id: 'mod.domain.gastrointestinal.baseline_history_v1',
  module_version: '1.0.0',
  kind: 'clinical',
  layer: 'C_domain',
  pathways: 'all',
  required_for: ['eligibility'],
  questions: gastrointestinalQuestions,
};

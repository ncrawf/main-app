import type { Module } from '../../types';
import { insurancePaymentReadinessQuestions } from '../../question-bank/universal/insurance_payment_readiness';

export const insurancePaymentReadinessModule: Module = {
  module_id: 'mod.universal.insurance_payment_readiness_v1',
  module_version: '1.0.0',
  kind: 'non-clinical',
  layer: 'A_universal',
  pathways: 'all',
  required_for: ['payment'],
  questions: insurancePaymentReadinessQuestions,
};

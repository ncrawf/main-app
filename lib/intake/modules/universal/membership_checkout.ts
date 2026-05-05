import type { Module } from '../../types';
import { membershipCheckoutQuestions } from '../../question-bank/universal/membership_checkout';

export const membershipCheckoutModule: Module = {
  module_id: 'mod.universal.membership_checkout_v1',
  module_version: '1.0.0',
  kind: 'commercial',
  layer: 'conversion_funnel',
  pathways: 'all',
  required_for: ['submission', 'payment'],
  assertion_group_emit_trigger: 'module_complete',
  assertion_group_id: 'universal.membership_checkout_composite',
  questions: membershipCheckoutQuestions,
};

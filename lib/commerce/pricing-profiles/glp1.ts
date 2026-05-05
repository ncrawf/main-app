/**
 * GLP-1 V1 default pricing profile per `conversion_funnel_modules_v1.md`.
 *
 * Hims-placeholder values; flagged `pricing_source: 'hims_placeholder'` so production-launch
 * CI gate blocks until product/finance approval per Section 1K.19.3 change-control.
 *
 * Single-rail per user direction (medication bundled into membership). GLP-1 V1 ships
 * with one flat monthly plan; multi-duration support is in the schema for future use.
 */

import type { MembershipPricingProfileV1 } from '../pricing-profile-schema';

export const glp1PricingProfileV1: MembershipPricingProfileV1 = {
  profile_id: 'pricing.glp1.v1',
  profile_version: '1.0.0',
  pathway_code: 'glp1',
  rail_model: 'single',
  primary_plans: [
    {
      plan_id: 'plan.glp1.flat_monthly',
      duration_months: 1,
      monthly_price_cents: 14900, // $149/mo Hims placeholder
      total_cents: 14900,
      first_month_price_cents: 3900, // $39 first month promo Hims placeholder
      promo_code: 'GLP1_FIRST_MONTH',
      savings_copy: null as unknown as undefined, // explicit nullability marker
      display_label: 'Monthly membership',
    },
  ],
  qualifier_charge: null,
  inclusions: [
    'Provider review to determine eligibility',
    'Rx prescription with a tailored plan, if eligible',
    'Medication included — shipped to you monthly',
    'Access to 24/7 messaging with providers',
    'Monthly follow-ups with your Care Team',
    'Dosage adjustments as needed',
  ],
  indicative_pricing_preview: {
    copy_template:
      'Plans start at ${{first_month_price}} for your first month, then ${{monthly_price}}/month. Cancel anytime. Full refund if not eligible.',
  },
  cta_text: 'Submit to provider',
  legal_block_ref: 'legal.membership_service_agreement.glp1.v1',
  refund_policy_ref: 'legal.refund_policy.glp1.v1',
  cancellation_window_days: 2,
  billing_frequency: 'monthly',
  dual_rail_medication_plan: null,
  pricing_source: 'hims_placeholder',
  pricing_blocked_on: ['product_owner', 'founder_clinical_codeowner'],
  created_at: '2026-05-04T00:00:00Z',
  last_modified_at: '2026-05-04T00:00:00Z',
  last_modified_by: 'founder',
};

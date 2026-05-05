/**
 * MembershipPricingProfileV1 schema per `conversion_funnel_modules_v1.md` +
 * system map Section 1K.0.5 + 1I.
 *
 * Each pathway declares its own pricing profile instance.
 * GLP-1 V1 instance lives at `lib/commerce/pricing-profiles/glp1.ts`.
 */

export const RAIL_MODEL_VALUES = ['single', 'dual'] as const;
export type RailModel = (typeof RAIL_MODEL_VALUES)[number];

export const PRICING_SOURCE_VALUES = ['finance_approved', 'hims_placeholder', 'legacy_imported'] as const;
export type PricingSource = (typeof PRICING_SOURCE_VALUES)[number];

export const BILLING_FREQUENCY_VALUES = ['monthly', 'quarterly', 'annual'] as const;
export type BillingFrequency = (typeof BILLING_FREQUENCY_VALUES)[number];

export interface DurationPlan {
  plan_id: string;
  duration_months: number;
  monthly_price_cents: number;
  total_cents: number;
  first_month_price_cents?: number;
  promo_code?: string;
  savings_copy?: string;
  display_label: string;
}

export interface QualifierCharge {
  price_cents: number;
  label: string;
  /** When true, refunded as Rx credit if provider approves. */
  credit_to_rx_on_approval: boolean;
  refund_policy_ref: string;
}

export interface DualRailMedicationPlan {
  psp_product_id: string;
  capture_timing: 'on_rx_approval' | 'on_ship';
  /** True when drug cost varies by Rx decision (e.g., branded vs compounded). */
  variable_pricing: boolean;
  pricing_resolution_source: 'provider_decision' | 'pharmacy_dispense' | 'static';
}

export interface MembershipPricingProfileV1 {
  profile_id: string;
  profile_version: string;
  pathway_code: string;
  rail_model: RailModel;
  /** 1..N duration plans; patient picks one in Module 26 Screen 1. */
  primary_plans: DurationPlan[];
  /** Optional qualifier charge (TRT-style lab-kit pattern; null for GLP-1 V1). */
  qualifier_charge: QualifierCharge | null;
  /** Bullet points rendered on pricing card. */
  inclusions: string[];
  /** Used by Module 24 in-office Screen C pricing-preview rendering. */
  indicative_pricing_preview: {
    copy_template: string;
  };
  /** "Submit to provider" default; "Submit" for no-review pathways. */
  cta_text: string;
  /** Pointer to versioned Membership T&C document. */
  legal_block_ref: string;
  refund_policy_ref: string;
  cancellation_window_days: number;
  billing_frequency: BillingFrequency;
  /** Only present when rail_model === 'dual'. */
  dual_rail_medication_plan: DualRailMedicationPlan | null;
  pricing_source: PricingSource;
  /** Non-null when pricing_source === 'hims_placeholder'; production-launch CI gate blocks until empty. */
  pricing_blocked_on: string[] | null;
  created_at: string;
  last_modified_at: string;
  last_modified_by: string;
}

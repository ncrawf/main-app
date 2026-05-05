/**
 * Commerce types per system map Section 1I + Section 1K.0.5.3.
 *
 * Subscription, TreatmentOrder, CommerceOrder shapes. Stripe integration is
 * stubbed in Phase 3; Phase 4 wires Stripe Subscriptions + webhook handlers.
 */

export const SUBSCRIPTION_STATUS_VALUES = [
  'pending',
  'active',
  'paused',
  'cancelled',
  'expired',
] as const;
export type SubscriptionStatus = (typeof SUBSCRIPTION_STATUS_VALUES)[number];

export const PSP_VALUES = ['stripe'] as const;
export type Psp = (typeof PSP_VALUES)[number];

export interface Subscription {
  id: string;
  patient_id: string;
  pricing_profile_id: string;
  pricing_profile_version: string;
  pathway_code: string;
  plan_id: string;
  status: SubscriptionStatus;
  psp: Psp;
  stripe_subscription_id?: string;
  stripe_price_id?: string;
  stripe_customer_id?: string;
  started_at?: string;
  current_period_start?: string;
  current_period_end?: string;
  cancellation_window_days: number;
  cancelled_at?: string;
  cancellation_reason?: string;
  metadata?: Record<string, unknown>;
}

export const TREATMENT_ORDER_STATUS_VALUES = [
  'pending_clinical_review',
  'approved',
  'denied',
  'cancelled',
  'fulfilled',
] as const;
export type TreatmentOrderStatus = (typeof TREATMENT_ORDER_STATUS_VALUES)[number];

/**
 * Subset of treatment_orders shape Phase 3 cares about.
 * The actual treatment_orders table predates this spec and has additional columns
 * (existing migration 20260422010000_care_programs_treatment_items_v1.sql).
 * Phase 3 may need to ALTER add columns per Commit 8 pre-migration verification.
 */
export interface TreatmentOrderIntakeView {
  id: string;
  patient_id: string;
  pathway_code: string;
  status: TreatmentOrderStatus;
  intake_session_id: string;
  interaction_context: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

export const COMMERCE_ORDER_KIND_VALUES = ['retail_in_clinic', 'retail_online'] as const;
export type CommerceOrderKind = (typeof COMMERCE_ORDER_KIND_VALUES)[number];

export interface CommerceOrder {
  id: string;
  patient_id: string;
  order_kind: CommerceOrderKind;
  line_items: Array<Record<string, unknown>>;
  total_cents: number;
  currency: string;
  psp_payment_intent_id?: string;
  /** Per Section 1Q.23 Patch G5: in-clinic retail rail carries staff + location context. */
  interaction_context: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

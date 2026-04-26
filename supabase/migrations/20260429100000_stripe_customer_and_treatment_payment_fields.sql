-- Stripe payment method + off-session charge plumbing for orders-lifecycle-v1.
--
-- Product contract (matches Hims behavior, confirmed with Option A):
--   1. At intake the patient completes a Stripe SetupIntent in a Checkout Session
--      (mode=setup, usage=off_session) so we tokenize + store their payment method
--      without creating any charge. `treatment_orders` rows already exist and
--      remain at amount_paid_cents=0.
--   2. When a clinician approves a treatment_order, the server creates a
--      PaymentIntent off_session against the stored payment method. On
--      payment_intent.succeeded we set amount_paid_cents and advance
--      approved_fulfillment_pending -> preparing via the existing transitions
--      table. On failure we land in payment_failed for retry.
--   3. Denials short-circuit to `cancelled` without ever creating a charge.
--
-- This migration only encodes schema + indexes; state advancement is handled
-- by the webhook handler and the clinician-approval endpoint.

-- ---------------------------------------------------------------------------
-- patients: stored Stripe customer + default payment method
-- ---------------------------------------------------------------------------
alter table public.patients
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_default_payment_method_id text,
  add column if not exists payment_method_brand text,
  add column if not exists payment_method_last4 text,
  add column if not exists payment_method_added_at timestamptz;

create unique index if not exists patients_stripe_customer_id_key
  on public.patients (stripe_customer_id)
  where stripe_customer_id is not null;

-- ---------------------------------------------------------------------------
-- treatment_orders: link to the off-session PaymentIntent + surfacing failures
-- ---------------------------------------------------------------------------
alter table public.treatment_orders
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_payment_intent_id text,
  add column if not exists stripe_payment_method_id text,
  add column if not exists payment_attempted_at timestamptz,
  add column if not exists payment_succeeded_at timestamptz,
  add column if not exists payment_failure_message text,
  add column if not exists approved_by_user_id uuid
    references auth.users(id) on delete set null,
  add column if not exists approved_at timestamptz;

create index if not exists treatment_orders_stripe_payment_intent_id_idx
  on public.treatment_orders (stripe_payment_intent_id)
  where stripe_payment_intent_id is not null;

create index if not exists treatment_orders_pending_review_idx
  on public.treatment_orders (created_at desc)
  where status = 'pending_clinician_review';

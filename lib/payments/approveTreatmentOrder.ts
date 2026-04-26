import type { SupabaseClient } from '@supabase/supabase-js'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe/server'
import { getOrCreateStripeCustomerForPatient } from './stripeCustomer'

type PatientPaymentRow = {
  id: string
  stripe_customer_id: string | null
  stripe_default_payment_method_id: string | null
}

type TreatmentOrderRow = {
  id: string
  order_number: string
  patient_id: string
  status: string
  amount_cents: number | null
  currency: string | null
  stripe_payment_intent_id: string | null
  approved_at: string | null
}

export type ApproveTreatmentOrderResult =
  | {
      ok: true
      orderNumber: string
      status: 'approved_fulfillment_pending' | 'preparing' | 'payment_failed'
      paymentIntentId: string | null
      paymentFailureMessage?: string
    }
  | { ok: false; status: number; error: string }

/**
 * Server-side clinician approval for a treatment_order.
 *
 * This owns the charge separation contract:
 *   - Order must be in `pending_clinician_review`.
 *   - Transition to `approved_fulfillment_pending`.
 *   - Attempt an off-session PaymentIntent against the patient's saved
 *     payment method. If Stripe confirms synchronously -> jump to
 *     `preparing`. If it fails -> `payment_failed`. Async
 *     success is handled by the Stripe webhook.
 */
export async function approveTreatmentOrder(
  supabase: SupabaseClient,
  args: { orderNumber: string; actorStaffUserId: string }
): Promise<ApproveTreatmentOrderResult> {
  const { data: order, error: loadErr } = await supabase
    .from('treatment_orders')
    .select(
      'id, order_number, patient_id, status, amount_cents, currency, stripe_payment_intent_id, approved_at'
    )
    .eq('order_number', args.orderNumber)
    .maybeSingle<TreatmentOrderRow>()

  if (loadErr) {
    console.error('approveTreatmentOrder.load', loadErr)
    return { ok: false, status: 500, error: 'Failed to load order' }
  }
  if (!order) return { ok: false, status: 404, error: 'Order not found' }

  if (order.status !== 'pending_clinician_review') {
    return {
      ok: false,
      status: 409,
      error: `Order is ${order.status}; only pending_clinician_review can be approved.`,
    }
  }

  if (!order.amount_cents || order.amount_cents <= 0) {
    return {
      ok: false,
      status: 422,
      error: 'Order has no amount_cents set. Configure pricing before approving.',
    }
  }

  const { data: patient, error: patErr } = await supabase
    .from('patients')
    .select('id, stripe_customer_id, stripe_default_payment_method_id')
    .eq('id', order.patient_id)
    .maybeSingle<PatientPaymentRow>()

  if (patErr || !patient) {
    return { ok: false, status: 500, error: 'Failed to load patient' }
  }

  const customerResult = await getOrCreateStripeCustomerForPatient(supabase, order.patient_id)
  if ('error' in customerResult) {
    return { ok: false, status: customerResult.status, error: customerResult.error }
  }

  if (!patient.stripe_default_payment_method_id) {
    return {
      ok: false,
      status: 409,
      error:
        'Patient has no saved payment method. They must add a card before the clinician can approve.',
    }
  }

  // Step 1: transition to approved_fulfillment_pending. The DB trigger enforces the state graph.
  const approvedAt = new Date().toISOString()
  const { error: approveErr } = await supabase
    .from('treatment_orders')
    .update({
      status: 'approved_fulfillment_pending',
      approved_by_user_id: args.actorStaffUserId,
      approved_at: approvedAt,
      stripe_customer_id: customerResult.stripeCustomerId,
      stripe_payment_method_id: patient.stripe_default_payment_method_id,
      payment_attempted_at: approvedAt,
      updated_at: approvedAt,
    })
    .eq('id', order.id)
    .eq('status', 'pending_clinician_review')

  if (approveErr) {
    console.error('approveTreatmentOrder.transition', approveErr)
    return { ok: false, status: 500, error: approveErr.message || 'Approval transition failed' }
  }

  // Step 2: off-session PaymentIntent.
  let pi: Stripe.PaymentIntent
  try {
    pi = await getStripe().paymentIntents.create(
      {
        amount: order.amount_cents,
        currency: (order.currency ?? 'usd').toLowerCase(),
        customer: customerResult.stripeCustomerId,
        payment_method: patient.stripe_default_payment_method_id,
        off_session: true,
        confirm: true,
        description: `MAIN Rx order ${order.order_number}`,
        metadata: {
          patient_id: order.patient_id,
          treatment_order_id: order.id,
          order_number: order.order_number,
          purpose: 'treatment_order_capture_on_approval',
        },
      },
      {
        // PaymentIntents are not idempotent by default; scope to the order so
        // retries of this handler don't double-charge.
        idempotencyKey: `treatment_order:${order.id}:approval_charge`,
      }
    )
  } catch (err) {
    const stripeErr = err as Stripe.errors.StripeError
    const message = stripeErr?.message || 'Payment failed'
    const paymentIntentId = (stripeErr?.payment_intent?.id as string | undefined) ?? null

    await supabase
      .from('treatment_orders')
      .update({
        status: 'payment_failed',
        stripe_payment_intent_id: paymentIntentId,
        payment_failure_message: message,
        updated_at: new Date().toISOString(),
      })
      .eq('id', order.id)

    await supabase.from('patient_timeline_events').insert({
      patient_id: order.patient_id,
      event_type: 'treatment_order_payment_failed',
      body: `Charge failed for order ${order.order_number}: ${message}`,
      payload: {
        order_number: order.order_number,
        treatment_order_id: order.id,
        stripe_payment_intent_id: paymentIntentId,
        message,
      },
      actor_user_id: args.actorStaffUserId,
    })

    return {
      ok: true,
      orderNumber: order.order_number,
      status: 'payment_failed',
      paymentIntentId,
      paymentFailureMessage: message,
    }
  }

  // Step 3: reflect synchronous outcome.
  if (pi.status === 'succeeded') {
    await supabase
      .from('treatment_orders')
      .update({
        status: 'preparing',
        stripe_payment_intent_id: pi.id,
        amount_paid_cents: order.amount_cents,
        payment_succeeded_at: new Date().toISOString(),
        payment_failure_message: null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', order.id)

    await supabase.from('patient_timeline_events').insert({
      patient_id: order.patient_id,
      event_type: 'treatment_order_charged',
      body: `Charged ${(order.amount_cents / 100).toFixed(2)} ${(order.currency ?? 'USD').toUpperCase()} for order ${order.order_number}`,
      payload: {
        order_number: order.order_number,
        treatment_order_id: order.id,
        stripe_payment_intent_id: pi.id,
      },
      actor_user_id: args.actorStaffUserId,
    })

    return {
      ok: true,
      orderNumber: order.order_number,
      status: 'preparing',
      paymentIntentId: pi.id,
    }
  }

  // Still requires async confirmation (3DS fallback or processing).
  await supabase
    .from('treatment_orders')
    .update({
      stripe_payment_intent_id: pi.id,
      updated_at: new Date().toISOString(),
    })
    .eq('id', order.id)

  await supabase.from('patient_timeline_events').insert({
    patient_id: order.patient_id,
    event_type: 'treatment_order_approved',
    body: `Order ${order.order_number} approved; awaiting charge confirmation.`,
    payload: {
      order_number: order.order_number,
      treatment_order_id: order.id,
      stripe_payment_intent_id: pi.id,
      stripe_status: pi.status,
    },
    actor_user_id: args.actorStaffUserId,
  })

  return {
    ok: true,
    orderNumber: order.order_number,
    status: 'approved_fulfillment_pending',
    paymentIntentId: pi.id,
  }
}

export async function denyTreatmentOrder(
  supabase: SupabaseClient,
  args: { orderNumber: string; actorStaffUserId: string; reason?: string }
): Promise<
  { ok: true; orderNumber: string } | { ok: false; status: number; error: string }
> {
  const { data: order, error: loadErr } = await supabase
    .from('treatment_orders')
    .select('id, order_number, patient_id, status')
    .eq('order_number', args.orderNumber)
    .maybeSingle<{ id: string; order_number: string; patient_id: string; status: string }>()

  if (loadErr) {
    console.error('denyTreatmentOrder.load', loadErr)
    return { ok: false, status: 500, error: 'Failed to load order' }
  }
  if (!order) return { ok: false, status: 404, error: 'Order not found' }
  if (order.status !== 'pending_clinician_review') {
    return {
      ok: false,
      status: 409,
      error: `Order is ${order.status}; only pending_clinician_review can be denied.`,
    }
  }

  const { error: upErr } = await supabase
    .from('treatment_orders')
    .update({
      status: 'cancelled',
      closed_at: new Date().toISOString(),
      internal_notes: args.reason ?? null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', order.id)
    .eq('status', 'pending_clinician_review')

  if (upErr) {
    console.error('denyTreatmentOrder.update', upErr)
    return { ok: false, status: 500, error: upErr.message || 'Deny failed' }
  }

  await supabase.from('patient_timeline_events').insert({
    patient_id: order.patient_id,
    event_type: 'treatment_order_denied',
    body: `Order ${order.order_number} denied by clinician.`,
    payload: {
      order_number: order.order_number,
      treatment_order_id: order.id,
      reason: args.reason ?? null,
    },
    actor_user_id: args.actorStaffUserId,
  })

  return { ok: true, orderNumber: order.order_number }
}

import type Stripe from 'stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import { getStripe } from '@/lib/stripe/server'

/**
 * Persists the saved payment method from a `mode=setup` checkout session back
 * onto the patient row, so future clinician approvals can charge off-session.
 */
export async function handleSetupIntentCheckoutCompleted(
  session: Stripe.Checkout.Session
): Promise<void> {
  if (session.mode !== 'setup') return
  const patientId =
    typeof session.metadata?.patient_id === 'string' ? session.metadata.patient_id : null
  if (!patientId) {
    console.warn('handleSetupIntentCheckoutCompleted: missing patient_id metadata', session.id)
    return
  }

  const setupIntentId =
    typeof session.setup_intent === 'string'
      ? session.setup_intent
      : session.setup_intent?.id ?? null
  if (!setupIntentId) {
    console.warn('handleSetupIntentCheckoutCompleted: missing setup_intent', session.id)
    return
  }

  const setupIntent = await getStripe().setupIntents.retrieve(setupIntentId)
  const paymentMethodId =
    typeof setupIntent.payment_method === 'string'
      ? setupIntent.payment_method
      : setupIntent.payment_method?.id ?? null
  const customerId =
    typeof setupIntent.customer === 'string'
      ? setupIntent.customer
      : setupIntent.customer?.id ?? null

  if (!paymentMethodId) {
    console.warn('handleSetupIntentCheckoutCompleted: missing payment_method', setupIntentId)
    return
  }

  const admin = createAdminClient()

  // Load brand/last4 so the patient UI can confirm "Card ending 4242".
  let brand: string | null = null
  let last4: string | null = null
  try {
    const pm = await getStripe().paymentMethods.retrieve(paymentMethodId)
    brand = pm.card?.brand ?? null
    last4 = pm.card?.last4 ?? null
  } catch (e) {
    console.error('handleSetupIntentCheckoutCompleted.paymentMethods.retrieve', e)
  }

  // Set as the default payment_method on the customer so future PaymentIntents
  // use it without needing to specify it each time (also helps in Stripe UI).
  if (customerId) {
    try {
      await getStripe().customers.update(customerId, {
        invoice_settings: { default_payment_method: paymentMethodId },
      })
    } catch (e) {
      console.error('handleSetupIntentCheckoutCompleted.customers.update', e)
    }
  }

  const { error: upErr } = await admin
    .from('patients')
    .update({
      stripe_customer_id: customerId ?? undefined,
      stripe_default_payment_method_id: paymentMethodId,
      payment_method_brand: brand,
      payment_method_last4: last4,
      payment_method_added_at: new Date().toISOString(),
    })
    .eq('id', patientId)
  if (upErr) {
    console.error('handleSetupIntentCheckoutCompleted.updatePatient', upErr)
    return
  }

  await admin.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'payment_method_added',
    body: brand && last4 ? `Payment method saved (${brand} · ${last4})` : 'Payment method saved',
    payload: {
      stripe_setup_intent_id: setupIntentId,
      stripe_payment_method_id: paymentMethodId,
      brand,
      last4,
    },
  })
}

/**
 * Reacts to a successful off-session PaymentIntent for a treatment_order.
 * Advances the order from `approved_fulfillment_pending` -> `preparing`
 * and records `amount_paid_cents`. Safe to call multiple times; idempotent
 * because we only update when status is still `approved_fulfillment_pending`
 * or `payment_failed`.
 */
export async function handleTreatmentOrderPaymentSucceeded(
  paymentIntent: Stripe.PaymentIntent
): Promise<void> {
  const orderId =
    typeof paymentIntent.metadata?.treatment_order_id === 'string'
      ? paymentIntent.metadata.treatment_order_id
      : null
  if (!orderId) return

  const admin = createAdminClient()
  const { data: order, error: loadErr } = await admin
    .from('treatment_orders')
    .select('id, order_number, patient_id, status, amount_paid_cents')
    .eq('id', orderId)
    .maybeSingle<{
      id: string
      order_number: string
      patient_id: string
      status: string
      amount_paid_cents: number | null
    }>()

  if (loadErr || !order) {
    console.error('handleTreatmentOrderPaymentSucceeded.load', loadErr ?? 'not found')
    return
  }

  // Short-circuit if already advanced past preparing. The status transition
  // table would reject a regression, and we also don't want to overwrite
  // amount_paid_cents if staff has already progressed the order manually.
  if (order.status === 'preparing' || order.status === 'rx_sent' || order.status === 'shipped'
    || order.status === 'fulfilled') {
    return
  }

  const nextStatus =
    order.status === 'approved_fulfillment_pending' || order.status === 'payment_failed'
      ? 'preparing'
      : order.status

  const amount = paymentIntent.amount_received ?? paymentIntent.amount ?? 0

  const { error: upErr } = await admin
    .from('treatment_orders')
    .update({
      status: nextStatus,
      amount_paid_cents: amount,
      stripe_payment_intent_id: paymentIntent.id,
      payment_succeeded_at: new Date().toISOString(),
      payment_failure_message: null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', order.id)

  if (upErr) {
    console.error('handleTreatmentOrderPaymentSucceeded.update', upErr)
    return
  }

  if (nextStatus !== order.status) {
    await admin.from('patient_timeline_events').insert({
      patient_id: order.patient_id,
      event_type: 'treatment_order_charged',
      body: `Payment confirmed for order ${order.order_number}.`,
      payload: {
        order_number: order.order_number,
        treatment_order_id: order.id,
        stripe_payment_intent_id: paymentIntent.id,
        amount_cents: amount,
      },
    })
  }
}

/**
 * Reacts to a failed off-session PaymentIntent. Advances the order to
 * `payment_failed` so staff can retry (or deny) via the clinician approval UI.
 */
export async function handleTreatmentOrderPaymentFailed(
  paymentIntent: Stripe.PaymentIntent
): Promise<void> {
  const orderId =
    typeof paymentIntent.metadata?.treatment_order_id === 'string'
      ? paymentIntent.metadata.treatment_order_id
      : null
  if (!orderId) return

  const admin = createAdminClient()
  const { data: order, error: loadErr } = await admin
    .from('treatment_orders')
    .select('id, order_number, patient_id, status')
    .eq('id', orderId)
    .maybeSingle<{ id: string; order_number: string; patient_id: string; status: string }>()

  if (loadErr || !order) {
    console.error('handleTreatmentOrderPaymentFailed.load', loadErr ?? 'not found')
    return
  }

  if (order.status !== 'approved_fulfillment_pending') return

  const message =
    paymentIntent.last_payment_error?.message ?? 'Payment was not successful.'

  const { error: upErr } = await admin
    .from('treatment_orders')
    .update({
      status: 'payment_failed',
      stripe_payment_intent_id: paymentIntent.id,
      payment_failure_message: message,
      updated_at: new Date().toISOString(),
    })
    .eq('id', order.id)

  if (upErr) {
    console.error('handleTreatmentOrderPaymentFailed.update', upErr)
    return
  }

  await admin.from('patient_timeline_events').insert({
    patient_id: order.patient_id,
    event_type: 'treatment_order_payment_failed',
    body: `Charge failed for order ${order.order_number}: ${message}`,
    payload: {
      order_number: order.order_number,
      treatment_order_id: order.id,
      stripe_payment_intent_id: paymentIntent.id,
      message,
    },
  })
}

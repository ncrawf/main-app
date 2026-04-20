import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { handleStripeCheckoutSessionCompleted } from '@/lib/payments/handleStripeCheckoutCompleted'
import { createAdminClient } from '@/lib/supabase/admin'
import { getStripe } from '@/lib/stripe/server'

export const runtime = 'nodejs'

/**
 * Stripe sends raw body; signature verification requires the exact bytes.
 * Configure this URL in Stripe Dashboard → Developers → Webhooks.
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  const rawBody = await request.text()
  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, secret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid payload'
    console.error('Stripe webhook signature:', message)
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 })
  }

  const admin = createAdminClient()

  const { data: seen } = await admin
    .from('stripe_webhook_events')
    .select('stripe_event_id')
    .eq('stripe_event_id', event.id)
    .maybeSingle()

  if (seen) {
    return NextResponse.json({ received: true, duplicate: true })
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      if (session.payment_status === 'paid') {
        await handleStripeCheckoutSessionCompleted(session)
      }
    }
  } catch (e) {
    console.error('Stripe webhook handler:', e)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }

  const { error: insErr } = await admin.from('stripe_webhook_events').insert({
    stripe_event_id: event.id,
    event_type: event.type,
  })

  if (insErr && insErr.code !== '23505') {
    console.error('stripe_webhook_events insert:', insErr)
  }

  return NextResponse.json({ received: true })
}

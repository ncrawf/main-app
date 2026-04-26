import { NextResponse } from 'next/server'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'
import { getOrCreateStripeCustomerForPatient } from '@/lib/payments/stripeCustomer'
import { createAdminClient } from '@/lib/supabase/admin'
import { getAppBaseUrl, getStripe } from '@/lib/stripe/server'

export const runtime = 'nodejs'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * Creates a Stripe Checkout Session in `mode: 'setup'` so the patient can
 * attach a payment method without being charged. On success the webhook
 * `checkout.session.completed` path persists the payment_method back to
 * `patients.stripe_default_payment_method_id`.
 *
 * Patient dashboard gate: this route requires either a valid patient-portal
 * session cookie or an authenticated staff session.
 *
 * Body: { patientId: string, returnTo?: string }
 */
export async function POST(request: Request) {
  let body: { patientId?: string; returnTo?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const patientId = body.patientId
  if (!patientId || !UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patientId' }, { status: 400 })
  }

  if (!(await assertPatientDashboardAccess(patientId))) {
    return NextResponse.json({ error: 'Not authorized' }, { status: 401 })
  }

  const admin = createAdminClient()
  const customer = await getOrCreateStripeCustomerForPatient(admin, patientId)
  if ('error' in customer) {
    return NextResponse.json({ error: customer.error }, { status: customer.status })
  }

  const base = getAppBaseUrl()
  const safeReturnTo =
    body.returnTo && body.returnTo.startsWith('/') ? body.returnTo : `/dashboard/${patientId}/orders`

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: 'setup',
      customer: customer.stripeCustomerId,
      payment_method_types: ['card'],
      // Tells Stripe to save with off_session usage so we can charge later without the patient present.
      payment_method_configuration: undefined,
      success_url: `${base}${safeReturnTo}?payment_method=saved`,
      cancel_url: `${base}${safeReturnTo}?payment_method=cancelled`,
      metadata: {
        patient_id: patientId,
        purpose: 'treatment_order_setup_intent',
      },
      setup_intent_data: {
        metadata: {
          patient_id: patientId,
          purpose: 'treatment_order_setup_intent',
        },
      },
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe did not return a URL' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error('Stripe setup-intent checkout.sessions.create:', e)
    const message = e instanceof Error ? e.message : 'Stripe error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

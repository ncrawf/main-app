import type { SupabaseClient } from '@supabase/supabase-js'
import { getStripe } from '@/lib/stripe/server'

type PatientContactRow = {
  id: string
  first_name: string | null
  last_name: string | null
  email: string | null
  phone_e164: string | null
  stripe_customer_id: string | null
}

/**
 * Returns (and lazily creates) a Stripe customer linked to this patient.
 * The customer id is cached on `patients.stripe_customer_id` so subsequent
 * SetupIntents and off-session PaymentIntents reuse it.
 */
export async function getOrCreateStripeCustomerForPatient(
  supabase: SupabaseClient,
  patientId: string
): Promise<{ stripeCustomerId: string } | { error: string; status: number }> {
  const { data: patient, error } = await supabase
    .from('patients')
    .select('id, first_name, last_name, email, phone_e164, stripe_customer_id')
    .eq('id', patientId)
    .maybeSingle<PatientContactRow>()

  if (error) {
    console.error('getOrCreateStripeCustomerForPatient.load', error)
    return { error: 'Failed to load patient', status: 500 }
  }
  if (!patient) {
    return { error: 'Patient not found', status: 404 }
  }

  if (patient.stripe_customer_id) {
    return { stripeCustomerId: patient.stripe_customer_id }
  }

  const name =
    [patient.first_name, patient.last_name].filter(Boolean).join(' ').trim() || undefined

  try {
    const customer = await getStripe().customers.create({
      email: patient.email ?? undefined,
      phone: patient.phone_e164 ?? undefined,
      name,
      metadata: { patient_id: patientId },
    })

    const { error: upErr } = await supabase
      .from('patients')
      .update({ stripe_customer_id: customer.id })
      .eq('id', patientId)

    if (upErr) {
      // Non-fatal: we still have a usable customer id this request. Surface for log review.
      console.error('getOrCreateStripeCustomerForPatient.persist', upErr)
    }

    return { stripeCustomerId: customer.id }
  } catch (e) {
    console.error('getOrCreateStripeCustomerForPatient.create', e)
    const message = e instanceof Error ? e.message : 'Stripe error'
    return { error: message, status: 500 }
  }
}

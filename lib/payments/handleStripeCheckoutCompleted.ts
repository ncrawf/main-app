import { logAuditEvent } from '@/lib/audit/logAuditEvent'
import { syncLegacyGlp1ToCareModel, type CareSyncResult } from '@/lib/care/syncLegacyGlp1ToCareModel'
import { createAdminClient } from '@/lib/supabase/admin'
import { onPatientWorkflowEvent } from '@/lib/workflows/onPatientWorkflowEvent'
import type Stripe from 'stripe'

/**
 * Called from the Stripe webhook after checkout.session.completed.
 * Idempotent per Stripe event id. Updates protocol state + timeline (service role).
 */
export async function handleStripeCheckoutSessionCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const patientId = session.metadata?.patient_id
  if (!patientId || typeof patientId !== 'string') {
    console.warn('stripe checkout: missing metadata.patient_id', session.id)
    return
  }

  const admin = createAdminClient()

  const { data: existingLines } = await admin
    .from('patient_timeline_events')
    .select('payload')
    .eq('patient_id', patientId)
    .eq('event_type', 'stripe_checkout_completed')

  const already = (existingLines ?? []).some(
    (row) => (row.payload as { stripe_checkout_session_id?: string })?.stripe_checkout_session_id === session.id
  )

  const { data: patient, error: pErr } = await admin.from('patients').select('id').eq('id', patientId).maybeSingle()
  if (pErr || !patient) {
    console.error('stripe checkout: patient not found', patientId, pErr)
    return
  }

  const amountTotal = session.amount_total
  const currency = session.currency

  const { data: manifestRow } = await admin
    .from('stripe_checkout_manifests')
    .select('payload')
    .eq('stripe_checkout_session_id', session.id)
    .maybeSingle()

  type CheckoutManifestItem = {
    kind?: 'consult_fee' | 'supplement'
    display_name?: string | null
    catalog_medication_id?: string | null
    quantity?: number
    price_id?: string
  }
  const manifestItems = Array.isArray((manifestRow?.payload as { items?: unknown[] } | null)?.items)
    ? (((manifestRow?.payload as { items: unknown[] }).items ?? []) as CheckoutManifestItem[])
    : []
  const hasConsult = manifestItems.length > 0 ? manifestItems.some((i) => i.kind === 'consult_fee') : true
  const hasSupplement = manifestItems.some((i) => i.kind === 'supplement')

  let statusChanged = false
  let careSync: CareSyncResult = { available: false, careProgramId: null, treatmentItemId: null }
  if (hasConsult) {
    careSync = await syncLegacyGlp1ToCareModel(admin, {
      patientId,
      legacyStatus: 'payment_completed',
      source: 'stripe',
    })
    statusChanged = true
  }

  const bodyParts = ['Payment received via Stripe']
  if (amountTotal != null && currency) {
    bodyParts.push(`${(amountTotal / 100).toFixed(2)} ${currency.toUpperCase()}`)
  }
  if (hasConsult && hasSupplement) bodyParts.push('consult + supplements')
  else if (hasSupplement) bodyParts.push('supplements')
  else if (hasConsult) bodyParts.push('consult')

  if (!already) {
    const timelineRow = {
      patient_id: patientId,
      event_type: 'stripe_checkout_completed',
      body: bodyParts.join(' · '),
      actor_user_id: null,
      payload: {
        stripe_checkout_session_id: session.id,
        payment_intent: session.payment_intent,
        amount_total: amountTotal,
        currency,
        has_consult: hasConsult,
        has_supplement: hasSupplement,
        status_updated: statusChanged,
      },
      ...(careSync.available
        ? {
            care_program_id: careSync.careProgramId,
            treatment_item_id: careSync.treatmentItemId,
          }
        : {}),
    }
    const { error: tErr } = await admin.from('patient_timeline_events').insert(timelineRow)
    if (tErr) {
      console.error('stripe checkout: timeline insert', tErr)
    }
  }

  await logAuditEvent({
    actorUserId: null,
    action: 'stripe.checkout.session_completed',
    resourceType: 'stripe_checkout_session',
    resourceId: session.id,
    patientId,
    metadata: {
      amount_total: amountTotal,
      currency,
      has_consult: hasConsult,
      has_supplement: hasSupplement,
    },
  })

  if (hasSupplement) {
    const { data: patientProfile } = await admin
      .from('patients')
      .select('id, first_name, last_name, phone, email, address_line1, address_line2, city, state, postal_code')
      .eq('id', patientId)
      .maybeSingle()

    const supplementItems = manifestItems
      .filter((i) => i.kind === 'supplement')
      .map((i) => ({
        kind: 'supplement',
        display_name: i.display_name ?? i.catalog_medication_id ?? i.price_id ?? 'Supplement',
        catalog_medication_id: i.catalog_medication_id ?? null,
        quantity: typeof i.quantity === 'number' ? i.quantity : 1,
        price_id: i.price_id ?? null,
      }))

    const missingShipping =
      !patientProfile?.phone ||
      !patientProfile?.address_line1 ||
      !patientProfile?.city ||
      !patientProfile?.state ||
      !patientProfile?.postal_code

    const shippingSnapshot = patientProfile
      ? {
          patient_name:
            [patientProfile.first_name, patientProfile.last_name].filter(Boolean).join(' ').trim() || patientProfile.id,
          phone: patientProfile.phone ?? null,
          email: patientProfile.email ?? null,
          address_line1: patientProfile.address_line1 ?? null,
          address_line2: patientProfile.address_line2 ?? null,
          city: patientProfile.city ?? null,
          state: patientProfile.state ?? null,
          postal_code: patientProfile.postal_code ?? null,
          captured_at: new Date().toISOString(),
          source: 'stripe_checkout_paid',
        }
      : { captured_at: new Date().toISOString(), source: 'stripe_checkout_paid' }

    const orderStatus = missingShipping ? 'blocked_missing_shipping' : 'queued'
    const { error: sfErr } = await admin.from('supplement_fulfillment_orders').upsert(
      {
        patient_id: patientId,
        stripe_checkout_session_id: session.id,
        status: orderStatus,
        shipping_snapshot: shippingSnapshot,
        items: supplementItems,
        metadata: {
          source: 'stripe_webhook_v2',
          payment_intent: session.payment_intent,
          amount_total: amountTotal,
          currency,
        },
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'stripe_checkout_session_id' }
    )
    if (sfErr) {
      console.error('stripe checkout: supplement_fulfillment_orders upsert', sfErr)
    } else if (!already) {
      const names = supplementItems.map((i) => i.display_name).slice(0, 4)
      const suffix = supplementItems.length > 4 ? ` +${supplementItems.length - 4} more` : ''
      const body = missingShipping
        ? `Supplement purchase recorded, but shipping profile is incomplete (${names.join(', ')}${suffix}).`
        : `Supplement purchase queued for fulfillment (${names.join(', ')}${suffix}).`
      const { error: sEvtErr } = await admin.from('patient_timeline_events').insert({
        patient_id: patientId,
        event_type: 'supplement_purchase_recorded',
        body,
        actor_user_id: null,
        payload: {
          stripe_checkout_session_id: session.id,
          fulfillment_status: orderStatus,
          item_count: supplementItems.length,
          missing_shipping: missingShipping,
        },
      })
      if (sEvtErr) console.error('stripe checkout: supplement timeline insert', sEvtErr)
    }
  }

  let paymentSummary: string | null = null
  if (amountTotal != null && currency) {
    paymentSummary = `${(amountTotal / 100).toFixed(2)} ${currency.toUpperCase()}`
  }
  if (hasConsult && statusChanged) {
    try {
      await onPatientWorkflowEvent({
        patientId,
        fromWorkflowStatus: null,
        toWorkflowStatus: 'payment_completed',
        source: 'stripe',
        stripeCheckoutSessionId: session.id,
        paymentSummary,
      })
    } catch (err) {
      console.error('stripe checkout: onPatientWorkflowEvent', err)
    }
  }
}

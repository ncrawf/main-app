import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { signPatientPortalBootstrapToken } from '@/lib/patient-portal/tokens'
import { getAppBaseUrl, getStripe } from '@/lib/stripe/server'

export const runtime = 'nodejs'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type CheckoutItemInput = {
  kind?: 'consult_fee' | 'supplement'
  priceId?: string
  quantity?: number
  catalogMedicationId?: string
  displayName?: string
}

type RefillCheckoutGateResult =
  | { ok: true }
  | { ok: false; status: number; error: string }

type NormalizedCheckoutItem = {
  kind: 'consult_fee' | 'supplement'
  priceId: string
  quantity: number
  catalogMedicationId: string | null
  displayName: string | null
}

function hasRefillCheckInForPayment(metadata: unknown): boolean {
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) return false
  const m = metadata as Record<string, unknown>
  const profile = typeof m.refill_check_in_profile === 'string' ? m.refill_check_in_profile : null
  if (!profile || profile === 'none') return true
  const checkIn = m.refill_check_in
  return !!checkIn && typeof checkIn === 'object' && !Array.isArray(checkIn)
}

async function gateRefillCheckout(
  admin: ReturnType<typeof createAdminClient>,
  patientId: string,
  refillRequestId: string
): Promise<RefillCheckoutGateResult> {
  const { data: refill, error: refillErr } = await admin
    .from('refill_requests')
    .select('id, patient_id, status, metadata')
    .eq('id', refillRequestId)
    .maybeSingle()

  if (refillErr || !refill) {
    return { ok: false, status: 404, error: 'Refill request not found.' }
  }
  if (refill.patient_id !== patientId) {
    return { ok: false, status: 403, error: 'Refill request does not match this patient.' }
  }
  if (!['requested', 'under_review', 'approved'].includes(refill.status)) {
    return { ok: false, status: 409, error: 'Refill is not in a payable state yet.' }
  }
  if (!hasRefillCheckInForPayment(refill.metadata)) {
    return {
      ok: false,
      status: 409,
      error:
        'Please complete your refill check-in questionnaire before checkout. Refresh and submit your refill request again if needed.',
    }
  }
  return { ok: true }
}

/**
 * Creates a Stripe Checkout Session for a visit payment.
 * Body: { patientId: string } — patient must exist (same model as capability URL on /dashboard).
 */
export async function POST(request: Request) {
  const priceId = process.env.STRIPE_PRICE_ID
  if (!priceId) {
    return NextResponse.json({ error: 'STRIPE_PRICE_ID is not configured' }, { status: 500 })
  }

  let body: { patientId?: string; items?: CheckoutItemInput[]; refillRequestId?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const patientId = body.patientId
  if (!patientId || !UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patientId' }, { status: 400 })
  }
  const refillRequestId = body.refillRequestId?.trim() || null
  if (refillRequestId && !UUID_RE.test(refillRequestId)) {
    return NextResponse.json({ error: 'Invalid refillRequestId' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { data: patient, error: pErr } = await admin.from('patients').select('id').eq('id', patientId).maybeSingle()
  if (pErr || !patient) {
    return NextResponse.json({ error: 'Patient not found' }, { status: 404 })
  }
  if (refillRequestId) {
    const gate = await gateRefillCheckout(admin, patientId, refillRequestId)
    if (!gate.ok) {
      return NextResponse.json({ error: gate.error }, { status: gate.status })
    }
  }

  const base = getAppBaseUrl()

  let normalizedItems: NormalizedCheckoutItem[] = []
  if (Array.isArray(body.items) && body.items.length > 0) {
    for (const raw of body.items) {
      const kind = raw.kind === 'supplement' ? 'supplement' : 'consult_fee'
      const resolvedPrice = (raw.priceId ?? '').trim() || (kind === 'consult_fee' ? priceId : '')
      if (!resolvedPrice) {
        return NextResponse.json(
          { error: `Missing priceId for ${kind === 'supplement' ? 'supplement' : 'consult'} item` },
          { status: 400 }
        )
      }
      const quantity = Number(raw.quantity ?? 1)
      if (!Number.isFinite(quantity) || quantity <= 0 || Math.floor(quantity) !== quantity) {
        return NextResponse.json({ error: 'Invalid item quantity' }, { status: 400 })
      }
      normalizedItems.push({
        kind,
        priceId: resolvedPrice,
        quantity,
        catalogMedicationId: raw.catalogMedicationId?.trim() || null,
        displayName: raw.displayName?.trim() || null,
      })
    }
  } else {
    normalizedItems = [
      {
        kind: 'consult_fee',
        priceId,
        quantity: 1,
        catalogMedicationId: null,
        displayName: 'GLP-1 consultation',
      },
    ]
  }

  const hasConsult = normalizedItems.some((i) => i.kind === 'consult_fee')
  const hasSupplement = normalizedItems.some((i) => i.kind === 'supplement')

  let portalToken: string
  try {
    portalToken = await signPatientPortalBootstrapToken(patientId)
  } catch (e) {
    console.error('checkout: patient portal bootstrap', e)
    return NextResponse.json({ error: 'Patient portal signing is not configured' }, { status: 500 })
  }

  const successNext = encodeURIComponent(`/dashboard/${patientId}?paid=1`)
  const cancelNext = encodeURIComponent(`/dashboard/${patientId}`)
  const exchange = `${base}/api/patient-portal/session?token=${encodeURIComponent(portalToken)}`

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: normalizedItems.map((i) => ({ price: i.priceId, quantity: i.quantity })),
      success_url: `${exchange}&next=${successNext}`,
      cancel_url: `${exchange}&next=${cancelNext}`,
      metadata: {
        patient_id: patientId,
        has_consult: hasConsult ? '1' : '0',
        has_supplement: hasSupplement ? '1' : '0',
        refill_request_id: refillRequestId ?? '',
      },
      payment_intent_data: {
        metadata: {
          patient_id: patientId,
          has_consult: hasConsult ? '1' : '0',
          has_supplement: hasSupplement ? '1' : '0',
          refill_request_id: refillRequestId ?? '',
        },
      },
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe did not return a URL' }, { status: 500 })
    }

    const { error: mErr } = await admin.from('stripe_checkout_manifests').insert({
      stripe_checkout_session_id: session.id,
      patient_id: patientId,
      payload: {
        items: normalizedItems.map((i) => ({
          kind: i.kind,
          price_id: i.priceId,
          quantity: i.quantity,
          catalog_medication_id: i.catalogMedicationId,
          display_name: i.displayName,
        })),
        has_consult: hasConsult,
        has_supplement: hasSupplement,
        refill_request_id: refillRequestId,
        source: 'api_stripe_checkout_v2',
      },
    })
    if (mErr) {
      console.error('checkout: stripe_checkout_manifests insert', mErr)
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error('Stripe checkout.sessions.create:', e)
    const message = e instanceof Error ? e.message : 'Stripe error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

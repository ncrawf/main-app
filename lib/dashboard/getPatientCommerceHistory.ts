import { createAdminClient } from '@/lib/supabase/admin'

export type PatientPaymentHistoryItem = {
  stripeCheckoutSessionId: string
  createdAt: string
  amountLabel: string | null
  checkoutType: 'consult' | 'supplements' | 'mixed' | 'unknown'
}

export type PatientOrderHistoryItem = {
  stripeCheckoutSessionId: string
  createdAt: string
  status: string
  itemSummary: string
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function amountLabel(amountTotal: unknown, currency: unknown): string | null {
  if (typeof amountTotal !== 'number' || typeof currency !== 'string' || !currency) return null
  return `${(amountTotal / 100).toFixed(2)} ${currency.toUpperCase()}`
}

function summarizeOrderItems(items: unknown): string {
  if (!Array.isArray(items) || items.length === 0) return 'Supplements'
  const names = items
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const row = item as Record<string, unknown>
      return (
        (typeof row.display_name === 'string' && row.display_name) ||
        (typeof row.catalog_medication_id === 'string' && row.catalog_medication_id) ||
        null
      )
    })
    .filter((v): v is string => Boolean(v))
  if (names.length === 0) return 'Supplements'
  const first = names.slice(0, 2).join(' · ')
  const extra = names.length > 2 ? ` +${names.length - 2} more` : ''
  return `${first}${extra}`
}

export async function getPatientCommerceHistory(patientId: string): Promise<{
  payments: PatientPaymentHistoryItem[]
  orders: PatientOrderHistoryItem[]
}> {
  const admin = createAdminClient()

  const { data: paymentEvents, error: pErr } = await admin
    .from('patient_timeline_events')
    .select('created_at, payload')
    .eq('patient_id', patientId)
    .eq('event_type', 'stripe_checkout_completed')
    .order('created_at', { ascending: false })
    .limit(50)

  const payments: PatientPaymentHistoryItem[] = []
  if (pErr && !isMissingRelationError(pErr)) {
    console.error('getPatientCommerceHistory.payments', pErr)
  } else {
    for (const event of paymentEvents ?? []) {
      const payload = ((event.payload as Record<string, unknown>) ?? {}) as Record<string, unknown>
      const sid =
        typeof payload.stripe_checkout_session_id === 'string' ? payload.stripe_checkout_session_id.trim() : ''
      if (!sid) continue
      const hasConsult = payload.has_consult === true
      const hasSupplement = payload.has_supplement === true
      const checkoutType: PatientPaymentHistoryItem['checkoutType'] = hasConsult
        ? hasSupplement
          ? 'mixed'
          : 'consult'
        : hasSupplement
          ? 'supplements'
          : 'unknown'
      payments.push({
        stripeCheckoutSessionId: sid,
        createdAt: event.created_at,
        amountLabel: amountLabel(payload.amount_total, payload.currency),
        checkoutType,
      })
    }
  }

  const { data: ordersRaw, error: oErr } = await admin
    .from('supplement_fulfillment_orders')
    .select('stripe_checkout_session_id, created_at, status, items')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
    .limit(50)

  const orders: PatientOrderHistoryItem[] = []
  if (oErr && !isMissingRelationError(oErr)) {
    console.error('getPatientCommerceHistory.orders', oErr)
  } else {
    for (const row of ordersRaw ?? []) {
      orders.push({
        stripeCheckoutSessionId: row.stripe_checkout_session_id as string,
        createdAt: row.created_at as string,
        status: (row.status as string) || 'queued',
        itemSummary: summarizeOrderItems(row.items),
      })
    }
  }

  return { payments, orders }
}


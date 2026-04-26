'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {
  orderNumber: string
  patientHasPaymentMethod: boolean
  paymentFailureMessage?: string | null
  canRetryCharge?: boolean
}

/**
 * Clinician-facing approve/deny control for treatment orders. Approval
 * triggers an off-session charge against the patient's saved card; denial
 * moves the order to `cancelled` without ever creating a charge.
 */
export function OrderApprovalPanel({
  orderNumber,
  patientHasPaymentMethod,
  paymentFailureMessage,
  canRetryCharge = false,
}: Props) {
  const router = useRouter()
  const [busy, setBusy] = useState<null | 'approve' | 'deny'>(null)
  const [error, setError] = useState<string | null>(null)
  const [reason, setReason] = useState('')

  async function send(decision: 'approve' | 'deny') {
    if (decision === 'deny' && !reason.trim()) {
      setError('Please include a reason for denial.')
      return
    }
    setBusy(decision)
    setError(null)
    try {
      const res = await fetch(
        `/api/internal/orders/${encodeURIComponent(orderNumber)}/approve`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ decision, reason: decision === 'deny' ? reason.trim() : null }),
        }
      )
      const data = (await res.json()) as {
        ok?: boolean
        error?: string
        status?: string
        paymentFailureMessage?: string
      }
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Request failed')
        setBusy(null)
        return
      }
      if (decision === 'approve' && data.status === 'payment_failed') {
        setError(
          data.paymentFailureMessage ??
            'Card declined. Ask the patient to update their payment method, then retry.'
        )
      }
      router.refresh()
      setBusy(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unexpected error')
      setBusy(null)
    }
  }

  return (
    <div className="space-y-3">
      {paymentFailureMessage ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <div className="font-semibold">Last charge failed</div>
          <div>{paymentFailureMessage}</div>
        </div>
      ) : null}

      {!patientHasPaymentMethod ? (
        <div className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700">
          Patient has no saved payment method yet. Approval will be blocked until they add a card
          from their dashboard.
        </div>
      ) : null}

      <div className="space-y-2">
        <label className="block text-xs font-medium text-neutral-600">
          Denial reason
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Required only when denying"
            rows={2}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm shadow-sm focus:border-neutral-500 focus:outline-none"
          />
        </label>
      </div>

      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
          {error}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => send('approve')}
          disabled={busy !== null || !patientHasPaymentMethod}
          className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-60"
        >
          {busy === 'approve'
            ? 'Charging…'
            : canRetryCharge
              ? 'Retry charge'
              : 'Approve & charge'}
        </button>
        <button
          type="button"
          onClick={() => send('deny')}
          disabled={busy !== null || canRetryCharge}
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50 disabled:opacity-60"
        >
          {busy === 'deny' ? 'Cancelling…' : 'Deny'}
        </button>
      </div>
    </div>
  )
}

'use client'
import { useState } from 'react'

type Props = {
  patientId: string
  returnTo?: string
  pendingOrderCount: number
}

export function AddPaymentMethodBanner({ patientId, returnTo, pendingOrderCount }: Props) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onAdd() {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/setup-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientId, returnTo }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok || !data.url) {
        setError(data.error ?? 'Could not start payment setup')
        setBusy(false)
        return
      }
      window.location.href = data.url
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unexpected error')
      setBusy(false)
    }
  }

  const copy =
    pendingOrderCount === 1
      ? 'You have 1 order pending clinician review. Save a payment method so we can charge automatically once your clinician approves.'
      : `You have ${pendingOrderCount} orders pending clinician review. Save a payment method so we can charge automatically once your clinician approves.`

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-amber-900">Add a payment method</p>
          <p className="mt-1 text-xs text-amber-800">{copy}</p>
          {error ? <p className="mt-2 text-xs font-medium text-red-700">{error}</p> : null}
        </div>
        <button
          type="button"
          onClick={onAdd}
          disabled={busy}
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-neutral-800 disabled:opacity-60"
        >
          {busy ? 'Redirecting…' : 'Add payment method'}
        </button>
      </div>
    </div>
  )
}

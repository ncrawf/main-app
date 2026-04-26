'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type OptionItem = { value: string; label: string }

export type FulfillmentPanelProps = {
  identifier: string
  currentStatus: string
  currentStatusLabel: string
  allowedNextStatuses: OptionItem[]
  initialTrackingNumber: string | null
  initialTrackingUrl: string | null
  initialCarrier?: string | null
  initialInternalNotes?: string | null
  initialExceptionReason?: string | null
  initialKitFulfillmentNotes?: string | null
  kind: 'treatment' | 'supplement' | 'lab_kit'
}

export function OrderFulfillmentPanel(props: FulfillmentPanelProps) {
  const router = useRouter()
  const [status, setStatus] = useState<string>('')
  const [trackingNumber, setTrackingNumber] = useState(props.initialTrackingNumber ?? '')
  const [trackingUrl, setTrackingUrl] = useState(props.initialTrackingUrl ?? '')
  const [carrier, setCarrier] = useState(props.initialCarrier ?? '')
  const [internalNotes, setInternalNotes] = useState(props.initialInternalNotes ?? '')
  const [exceptionReason, setExceptionReason] = useState(props.initialExceptionReason ?? '')
  const [kitNotes, setKitNotes] = useState(props.initialKitFulfillmentNotes ?? '')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)

    const body: Record<string, unknown> = {}
    if (status) body.status = status
    if (trackingNumber !== (props.initialTrackingNumber ?? '')) body.trackingNumber = trackingNumber
    if (trackingUrl !== (props.initialTrackingUrl ?? '')) body.trackingUrl = trackingUrl
    if (carrier !== (props.initialCarrier ?? '')) body.carrier = carrier
    if (props.kind === 'treatment') {
      if (internalNotes !== (props.initialInternalNotes ?? '')) body.internalNotes = internalNotes
      if (exceptionReason !== (props.initialExceptionReason ?? ''))
        body.exceptionReason = exceptionReason
    }
    if (props.kind === 'lab_kit' && kitNotes !== (props.initialKitFulfillmentNotes ?? '')) {
      body.kitFulfillmentNotes = kitNotes
    }

    if (Object.keys(body).length === 0) {
      setMessage({ kind: 'error', text: 'Nothing to update.' })
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch(
        `/api/internal/orders/${encodeURIComponent(props.identifier)}/fulfillment`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body),
        }
      )
      const payload = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean }
      if (!res.ok || !payload.ok) {
        setMessage({ kind: 'error', text: payload.error ?? 'Update failed.' })
      } else {
        setMessage({ kind: 'ok', text: 'Updated.' })
        setStatus('')
        router.refresh()
      }
    } catch (err) {
      setMessage({
        kind: 'error',
        text: err instanceof Error ? err.message : 'Network error.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const disabled = submitting

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Current status
        </div>
        <div className="mt-1 text-sm text-neutral-900">{props.currentStatusLabel}</div>
      </div>

      {props.allowedNextStatuses.length > 0 ? (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Move to
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={disabled}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
          >
            <option value="">— keep current —</option>
            {props.allowedNextStatuses.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
          No further transitions allowed from {props.currentStatusLabel.toLowerCase()}.
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Carrier
          </label>
          <input
            value={carrier}
            onChange={(e) => setCarrier(e.target.value)}
            disabled={disabled}
            placeholder="UPS, USPS, FedEx…"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Tracking number
          </label>
          <input
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            disabled={disabled}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-mono text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
          Tracking URL
        </label>
        <input
          value={trackingUrl}
          onChange={(e) => setTrackingUrl(e.target.value)}
          disabled={disabled}
          placeholder="https://…"
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
        />
      </div>

      {props.kind === 'treatment' ? (
        <>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Exception reason
            </label>
            <input
              value={exceptionReason}
              onChange={(e) => setExceptionReason(e.target.value)}
              disabled={disabled}
              placeholder="e.g. pharmacy stockout, patient info mismatch"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Internal notes
            </label>
            <textarea
              value={internalNotes}
              onChange={(e) => setInternalNotes(e.target.value)}
              disabled={disabled}
              rows={3}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
            />
          </div>
        </>
      ) : null}

      {props.kind === 'lab_kit' ? (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Kit fulfillment notes
          </label>
          <textarea
            value={kitNotes}
            onChange={(e) => setKitNotes(e.target.value)}
            disabled={disabled}
            rows={3}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none"
          />
        </div>
      ) : null}

      {message ? (
        <div
          className={
            message.kind === 'ok'
              ? 'rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800'
              : 'rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-800'
          }
        >
          {message.text}
        </div>
      ) : null}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={disabled}
          className="rounded-md bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Saving…' : 'Save changes'}
        </button>
      </div>
    </form>
  )
}

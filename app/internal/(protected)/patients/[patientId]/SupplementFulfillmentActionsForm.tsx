'use client'

import { useState, useTransition } from 'react'
import { labelSupplementFulfillmentStatus } from '@/lib/supplement/fulfillment'
import { updateSupplementFulfillmentStatus } from './actions'

export function SupplementFulfillmentActionsForm({
  patientId,
  fulfillmentOrderId,
  currentStatus,
  allowedNextStatuses,
}: {
  patientId: string
  fulfillmentOrderId: string
  currentStatus: string
  allowedNextStatuses: string[]
}) {
  const options = allowedNextStatuses.length > 0 ? allowedNextStatuses : []
  const [selected, setSelected] = useState(options[0] ?? '')
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingUrl, setTrackingUrl] = useState('')
  const [staffNote, setStaffNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  if (options.length === 0) {
    return (
      <p className="mt-3 text-xs text-neutral-500">
        Status is terminal ({labelSupplementFulfillmentStatus(currentStatus)}).
      </p>
    )
  }

  return (
    <div className="mt-3 space-y-2 rounded-md border border-neutral-200 bg-white px-3 py-3">
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          disabled={pending}
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs text-neutral-800"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {labelSupplementFulfillmentStatus(opt)}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={pending || !selected || selected === currentStatus}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await updateSupplementFulfillmentStatus(
                patientId,
                fulfillmentOrderId,
                selected,
                trackingNumber,
                trackingUrl,
                staffNote
              )
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setMsg('Saved')
              setStaffNote('')
            })
          }
          className="rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Saving…' : 'Apply'}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <input
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          disabled={pending}
          placeholder="Tracking number (optional)"
          className="rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
        />
        <input
          value={trackingUrl}
          onChange={(e) => setTrackingUrl(e.target.value)}
          disabled={pending}
          placeholder="Tracking URL (optional)"
          className="rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
        />
      </div>

      <textarea
        value={staffNote}
        onChange={(e) => setStaffNote(e.target.value)}
        disabled={pending}
        rows={2}
        placeholder="Optional internal note (included in timeline)..."
        className="w-full resize-y rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
      />
    </div>
  )
}


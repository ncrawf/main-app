'use client'

import { useState, useTransition } from 'react'
import { requestRefillForTreatmentItem } from './actions'

export function RequestRefillForm({
  patientId,
  treatmentItemId,
  displayName,
  currentStatus,
}: {
  patientId: string
  treatmentItemId: string
  displayName: string
  currentStatus: string
}) {
  const eligible = currentStatus === 'refill_due'
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  if (!eligible) return null

  return (
    <div className="mt-2 rounded-md border border-neutral-200 bg-white px-2 py-2">
      <p className="text-xs text-neutral-600">
        Submit a refill queue entry for <span className="font-medium text-neutral-900">{displayName}</span>. This moves
        the treatment to <span className="font-medium">Refill pending</span> and notifies the patient when GLP-1 is the
        primary treatment (legacy bridge).
      </p>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        disabled={pending}
        rows={2}
        placeholder="Optional note to attach to the refill request…"
        className="mt-2 w-full resize-y rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await requestRefillForTreatmentItem(patientId, treatmentItemId, note)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setMsg('Refill submitted')
              setNote('')
            })
          }
          className="rounded-md bg-emerald-800 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Submitting…' : 'Request refill'}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </div>
  )
}

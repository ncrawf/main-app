'use client'

import { useState, useTransition } from 'react'
import { prepareTreatmentForPharmacyDispatch } from './actions'

export function PreparePharmacyDispatchForm({
  patientId,
  treatmentItemId,
  displayName,
}: {
  patientId: string
  treatmentItemId: string
  displayName: string
}) {
  const [partnerNote, setPartnerNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  return (
    <div className="mt-2 rounded-md border border-neutral-200 bg-white p-2.5">
      <p className="text-xs font-medium text-neutral-800">Send to pharmacy payload (uses address on file)</p>
      <p className="mt-1 text-[11px] text-neutral-500">
        Creates a `treatment_order` payload snapshot with shipping from patient profile and fax destination 248-934-1307.
      </p>
      <textarea
        value={partnerNote}
        onChange={(e) => setPartnerNote(e.target.value)}
        placeholder="Optional note for pharmacy partner..."
        rows={2}
        disabled={pending}
        className="mt-2 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-xs"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await prepareTreatmentForPharmacyDispatch(patientId, treatmentItemId, partnerNote)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              const base = `Payload ready for ${displayName}. Order ${res.orderId.slice(0, 8)}…`
              setMsg(res.warning ? `${base} (${res.warning})` : base)
            })
          }
          className="rounded-md border border-neutral-300 bg-neutral-50 px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Preparing…' : 'Prepare send payload'}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </div>
  )
}


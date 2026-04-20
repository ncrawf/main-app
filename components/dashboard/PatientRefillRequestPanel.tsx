'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

type Item = { id: string; display_name: string }

export function PatientRefillRequestPanel({ patientId, items }: { patientId: string; items: Item[] }) {
  const router = useRouter()
  const [treatmentItemId, setTreatmentItemId] = useState(items[0]?.id ?? '')
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  if (items.length === 0) return null

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Request a refill</h3>
      <p className="mt-1 text-sm text-neutral-600">
        If a treatment is due for refill, you can submit a request here. Our team will review it and update your
        status.
      </p>
      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="refill-treatment" className="block text-xs font-medium text-neutral-700">
            Treatment
          </label>
          <select
            id="refill-treatment"
            value={treatmentItemId}
            onChange={(e) => setTreatmentItemId(e.target.value)}
            disabled={pending}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          >
            {items.map((it) => (
              <option key={it.id} value={it.id}>
                {it.display_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="refill-note" className="block text-xs font-medium text-neutral-700">
            Optional note
          </label>
          <textarea
            id="refill-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            disabled={pending}
            rows={3}
            placeholder="Anything we should know for this refill…"
            className="mt-1 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          />
        </div>
        <button
          type="button"
          disabled={pending || !treatmentItemId}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await fetch('/api/patient-portal/refill-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ patientId, treatmentItemId, note }),
              })
              const json: { error?: string; ok?: boolean } = await res.json().catch(() => ({}))
              if (!res.ok) {
                setMsg(json.error || 'Request failed')
                return
              }
              setMsg('Refill submitted. This page will refresh.')
              setNote('')
              router.refresh()
            })
          }
          className="rounded-md bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Submitting…' : 'Submit refill request'}
        </button>
        {msg ? <p className="text-sm text-neutral-700">{msg}</p> : null}
      </div>
    </section>
  )
}

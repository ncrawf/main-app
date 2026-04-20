'use client'

import { useState, useTransition } from 'react'
import { markLabOrderDispatched } from './actions'

export function LabOrderDispatchForm({
  patientId,
  labOrderId,
}: {
  patientId: string
  labOrderId: string
}) {
  const [pending, start] = useTransition()
  const [dispatchMode, setDispatchMode] = useState<'send_to_lab' | 'fax'>('send_to_lab')
  const [destination, setDestination] = useState('')
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')

  return (
    <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-2.5">
      <p className="text-xs font-medium text-neutral-800">Dispatch update</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
        <label className="inline-flex items-center gap-1">
          <input
            type="radio"
            checked={dispatchMode === 'send_to_lab'}
            onChange={() => setDispatchMode('send_to_lab')}
            disabled={pending}
          />
          Sent to lab
        </label>
        <label className="inline-flex items-center gap-1">
          <input
            type="radio"
            checked={dispatchMode === 'fax'}
            onChange={() => setDispatchMode('fax')}
            disabled={pending}
          />
          Faxed
        </label>
      </div>
      <input
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder={dispatchMode === 'fax' ? 'Fax number (optional)' : 'Lab name/location (optional)'}
        disabled={pending}
        className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs"
      />
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={2}
        placeholder="Optional dispatch note..."
        disabled={pending}
        className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await markLabOrderDispatched(patientId, labOrderId, dispatchMode, destination, note)
              setMsg(res.ok ? 'Dispatch state updated.' : res.error)
            })
          }
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100 disabled:opacity-60"
        >
          {pending ? 'Updating…' : 'Update dispatch'}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </div>
  )
}

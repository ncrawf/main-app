'use client'

import { useState, useTransition } from 'react'
import { updateRefillRequestStatus } from './actions'

function label(status: string): string {
  return status
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function RefillRequestActionsForm({
  patientId,
  refillRequestId,
  currentStatus,
  allowedNextStatuses,
  treatmentLabel,
}: {
  patientId: string
  refillRequestId: string
  currentStatus: string
  allowedNextStatuses: string[]
  treatmentLabel: string
}) {
  const options = allowedNextStatuses.length > 0 ? allowedNextStatuses : []
  const [selected, setSelected] = useState(options[0] ?? '')
  const [staffNote, setStaffNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  if (options.length === 0) {
    return (
      <p className="mt-2 text-xs text-neutral-500">
        {treatmentLabel} · <span className="font-medium text-neutral-700">{label(currentStatus)}</span> (closed)
      </p>
    )
  }

  return (
    <div className="mt-2 space-y-2 rounded-md border border-neutral-200 bg-white px-2 py-2">
      <p className="text-xs text-neutral-600">
        <span className="font-medium text-neutral-900">{treatmentLabel}</span> · Current:{' '}
        <span className="font-medium">{label(currentStatus)}</span>
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          disabled={pending}
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs text-neutral-800"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {label(opt)}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={pending || !selected || selected === currentStatus}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await updateRefillRequestStatus(patientId, refillRequestId, selected, staffNote)
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
      <textarea
        value={staffNote}
        onChange={(e) => setStaffNote(e.target.value)}
        disabled={pending}
        rows={2}
        placeholder="Optional staff note (appended to any existing note)…"
        className="w-full resize-y rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
      />
    </div>
  )
}

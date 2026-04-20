'use client'

import { useState, useTransition } from 'react'
import { updateCareProgramStatus } from './actions'

function label(status: string): string {
  return status
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function UpdateCareProgramStatusForm({
  patientId,
  careProgramId,
  currentStatus,
  allowedNextStatuses,
}: {
  patientId: string
  careProgramId: string
  currentStatus: string
  allowedNextStatuses: string[]
}) {
  const options = allowedNextStatuses.length > 0 ? allowedNextStatuses : [currentStatus]
  const [selected, setSelected] = useState(options[0] ?? currentStatus)
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
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
        disabled={pending || allowedNextStatuses.length === 0 || selected === currentStatus}
        onClick={() =>
          start(async () => {
            setMsg('')
            const res = await updateCareProgramStatus(patientId, careProgramId, selected)
            if (!res.ok) {
              setMsg(res.error)
              return
            }
            setMsg('Saved')
          })
        }
        className="rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? 'Saving…' : 'Save'}
      </button>
      {allowedNextStatuses.length === 0 ? (
        <span className="text-xs text-amber-700">No configured transitions from current state</span>
      ) : null}
      {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
    </div>
  )
}


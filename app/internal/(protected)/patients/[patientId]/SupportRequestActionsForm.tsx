'use client'

import { useMemo, useState, useTransition } from 'react'
import { updatePatientSupportRequestStatus } from './actions'

type SupportEventType = 'patient_message_submitted' | 'patient_callback_requested'
type SupportStatus = 'new' | 'acknowledged' | 'call_completed' | 'resolved'
type SupportAction = 'acknowledged' | 'call_completed' | 'resolved'

function label(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function SupportRequestActionsForm({
  patientId,
  eventId,
  eventType,
  currentStatus,
}: {
  patientId: string
  eventId: string
  eventType: SupportEventType
  currentStatus: SupportStatus
}) {
  const [selected, setSelected] = useState<SupportAction>('acknowledged')
  const [staffNote, setStaffNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  const allowed = useMemo(() => {
    if (currentStatus === 'resolved') return [] as SupportAction[]
    if (eventType === 'patient_message_submitted') {
      if (currentStatus === 'new') return ['acknowledged', 'resolved'] as SupportAction[]
      if (currentStatus === 'acknowledged') return ['resolved'] as SupportAction[]
      return ['resolved'] as SupportAction[]
    }
    if (currentStatus === 'new') return ['acknowledged', 'call_completed', 'resolved'] as SupportAction[]
    if (currentStatus === 'acknowledged') return ['call_completed', 'resolved'] as SupportAction[]
    if (currentStatus === 'call_completed') return ['resolved'] as SupportAction[]
    return [] as SupportAction[]
  }, [eventType, currentStatus])

  if (allowed.length === 0) {
    return <p className="mt-2 text-xs text-neutral-500">Support request is {label(currentStatus)}.</p>
  }

  return (
    <div className="mt-3 space-y-2 rounded-md border border-neutral-200 bg-white px-3 py-3">
      <p className="text-xs text-neutral-600">
        Support status: <span className="font-medium text-neutral-800">{label(currentStatus)}</span>
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value as SupportAction)}
          disabled={pending}
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs text-neutral-800"
        >
          {allowed.map((opt) => (
            <option key={opt} value={opt}>
              Mark {label(opt)}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={pending || !allowed.includes(selected)}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await updatePatientSupportRequestStatus(patientId, eventId, selected, staffNote)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setStaffNote('')
              setMsg('Saved')
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
        placeholder="Optional internal note..."
        className="w-full resize-y rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
      />
    </div>
  )
}


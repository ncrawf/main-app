'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { applyCaseUpdates } from './actions'

type StaffOption = { id: string; display_name: string | null }

export function CaseProtocolForm({
  patientId,
  initialAssignedTo,
  staffOptions,
}: {
  patientId: string
  initialAssignedTo: string | null
  staffOptions: StaffOption[]
}) {
  const router = useRouter()
  const [assignedTo, setAssignedTo] = useState<string>(initialAssignedTo ?? '')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setPending(true)
    const result = await applyCaseUpdates(patientId, assignedTo === '' ? null : assignedTo)
    setPending(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    router.refresh()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
    >
      <h2 className="text-sm font-semibold text-neutral-900">Case &amp; assignment</h2>
      <p className="text-xs text-neutral-500">
        Updates assignee. Changes are written to the timeline and audit log.
      </p>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-neutral-800">Assignee</span>
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
        >
          <option value="">Unassigned</option>
          {staffOptions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.display_name?.trim() || s.id.slice(0, 8) + '…'}
            </option>
          ))}
        </select>
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
      >
        {pending ? 'Saving…' : 'Save case'}
      </button>
    </form>
  )
}

'use client'

import { useMemo, useState, useTransition } from 'react'
import { requestRefillsForTreatmentItemsBulk } from './actions'

type Eligible = { id: string; displayName: string; careProgramId: string }

export function RequestBulkRefillsForm({ patientId, items }: { patientId: string; items: Eligible[] }) {
  const initial = useMemo(() => new Set(items.map((i) => i.id)), [items])
  const [selected, setSelected] = useState<Set<string>>(() => new Set(initial))
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  if (items.length === 0) return null

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function selectAll() {
    setSelected(new Set(items.map((i) => i.id)))
  }

  function clearAll() {
    setSelected(new Set())
  }

  return (
    <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Bulk refill requests</h3>
      <p className="mt-1 text-xs text-neutral-600">
        Select every treatment currently in <span className="font-medium">Refill due</span>, then submit once. Each
        line becomes its own refill request row.
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <button type="button" className="text-neutral-700 underline" onClick={selectAll}>
          Select all
        </button>
        <button type="button" className="text-neutral-700 underline" onClick={clearAll}>
          Clear
        </button>
      </div>

      <ul className="mt-3 max-h-48 space-y-2 overflow-y-auto rounded-md border border-neutral-200 bg-neutral-50 p-2">
        {items.map((it) => (
          <li key={it.id} className="flex items-start gap-2 text-xs">
            <input
              type="checkbox"
              className="mt-0.5"
              checked={selected.has(it.id)}
              onChange={() => toggle(it.id)}
              disabled={pending}
            />
            <span className="text-neutral-800">{it.displayName}</span>
          </li>
        ))}
      </ul>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        disabled={pending}
        rows={2}
        placeholder="Optional shared note for all selected refills…"
        className="mt-3 w-full resize-y rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
      />

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending || selected.size === 0}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await requestRefillsForTreatmentItemsBulk(patientId, [...selected], note)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setMsg(`Submitted ${res.submitted} refill(s)`)
            })
          }
          className="rounded-md bg-emerald-800 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Submitting…' : `Submit ${selected.size} refill(s)`}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </div>
  )
}

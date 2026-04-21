'use client'

import { useState, useTransition } from 'react'
import { reviewChartAiDraft } from './actions'

export function ChartAiReviewActionsForm({
  patientId,
  reviewId,
}: {
  patientId: string
  reviewId: string
}) {
  const [decision, setDecision] = useState<'reviewed_accepted' | 'reviewed_rejected'>('reviewed_accepted')
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  return (
    <div className="mt-3 rounded-md border border-neutral-200 bg-neutral-50 p-3">
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={decision}
          onChange={(e) => setDecision(e.target.value as 'reviewed_accepted' | 'reviewed_rejected')}
          disabled={pending}
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs text-neutral-800"
        >
          <option value="reviewed_accepted">Accept draft</option>
          <option value="reviewed_rejected">Reject draft</option>
        </select>
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await reviewChartAiDraft(patientId, reviewId, decision, note)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setNote('')
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
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={2}
        disabled={pending}
        placeholder="Optional clinician note..."
        className="mt-2 w-full resize-y rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-800"
      />
    </div>
  )
}

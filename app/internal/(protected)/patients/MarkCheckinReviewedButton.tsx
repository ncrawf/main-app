'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export function MarkCheckinReviewedButton({
  patientId,
  sourceEventId,
}: {
  patientId: string
  sourceEventId: string
}) {
  const router = useRouter()
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            setMsg('')
            const res = await fetch('/api/internal/checkin-review', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ patientId, sourceEventId }),
            })
            const json: { ok?: boolean; error?: string } = await res.json().catch(() => ({}))
            if (!res.ok || !json.ok) {
              setMsg(json.error || 'Could not mark reviewed.')
              return
            }
            setMsg('Reviewed')
            router.refresh()
          })
        }
        className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? 'Saving…' : 'Mark reviewed'}
      </button>
      {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
    </div>
  )
}


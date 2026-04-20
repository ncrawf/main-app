'use client'

import { useState, useTransition } from 'react'
import { createClinicalVisitAddendum } from './actions'

export function CreateClinicalVisitAddendumForm({
  patientId,
  clinicalVisitId,
  disabled,
}: {
  patientId: string
  clinicalVisitId: string
  disabled?: boolean
}) {
  const [pending, start] = useTransition()
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')

  const isDisabled = disabled || pending

  return (
    <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-2.5">
      <p className="text-xs font-medium text-neutral-700">Addendum</p>
      <p className="mt-0.5 text-xs text-neutral-500">
        Use addenda for post-signature updates once the visit note is locked.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        disabled={isDisabled}
        placeholder="Enter a dated addendum (e.g., adverse effect update, revised follow-up)."
        className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-xs"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={isDisabled}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await createClinicalVisitAddendum(patientId, clinicalVisitId, text)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setText('')
              setMsg('Addendum saved.')
            })
          }
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100 disabled:opacity-60"
        >
          {pending ? 'Saving...' : 'Save addendum'}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </div>
  )
}

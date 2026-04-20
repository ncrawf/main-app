'use client'

import { useState, useTransition } from 'react'
import { generateRxPdfForTreatment } from './actions'

export function GenerateRxPdfForm({
  patientId,
  treatmentItemId,
  displayName,
}: {
  patientId: string
  treatmentItemId: string
  displayName: string
}) {
  const [pending, start] = useTransition()
  const [msg, setMsg] = useState('')
  const [signedUrl, setSignedUrl] = useState<string | null>(null)

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            setMsg('')
            setSignedUrl(null)
            const res = await generateRxPdfForTreatment(patientId, treatmentItemId)
            if (!res.ok) {
              setMsg(res.error)
              return
            }
            setMsg(`PDF ready for ${displayName}. Signed URL valid for ~1 hour.`)
            setSignedUrl(res.signedUrl)
          })
        }
        className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? 'Generating PDF…' : 'Generate Rx PDF'}
      </button>
      {signedUrl ? (
        <a
          href={signedUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-neutral-800"
        >
          Download (staff only)
        </a>
      ) : null}
      {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
    </div>
  )
}


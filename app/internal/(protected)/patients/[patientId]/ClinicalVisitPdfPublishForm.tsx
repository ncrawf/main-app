'use client'

import { useState, useTransition } from 'react'
import { publishClinicalVisitPdf } from './actions'

export function ClinicalVisitPdfPublishForm({
  patientId,
  clinicalVisitId,
}: {
  patientId: string
  clinicalVisitId: string
}) {
  const [pending, start] = useTransition()
  const [notifyByEmail, setNotifyByEmail] = useState(true)
  const [msg, setMsg] = useState('')
  const [signedUrl, setSignedUrl] = useState<string | null>(null)

  return (
    <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-2.5">
      <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
        <input
          type="checkbox"
          checked={notifyByEmail}
          onChange={(e) => setNotifyByEmail(e.target.checked)}
          disabled={pending}
        />
        Notify patient by email
      </label>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              setMsg('')
              setSignedUrl(null)
              const res = await publishClinicalVisitPdf(patientId, clinicalVisitId, notifyByEmail)
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setMsg('Signed visit PDF published to patient portal.')
              setSignedUrl(res.signedUrl)
            })
          }
          className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100 disabled:opacity-60"
        >
          {pending ? 'Publishing…' : 'Publish signed PDF'}
        </button>
        {signedUrl ? (
          <a
            href={signedUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
          >
            Download PDF
          </a>
        ) : null}
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </div>
  )
}

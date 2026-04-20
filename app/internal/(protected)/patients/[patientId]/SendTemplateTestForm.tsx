'use client'

import { useState, useTransition } from 'react'
import { sendTemplateTestEmail } from './actions'

const TEMPLATE_OPTIONS = [
  'payment_received',
  'intake_submitted',
  'awaiting_clinical_review',
  'case_approved',
  'case_denied',
  'followup_needed',
  'rx_sent',
  'shipped',
  'active_care',
  'followup_due',
  'refill_pending',
] as const

type TemplateKey = (typeof TEMPLATE_OPTIONS)[number]

export function SendTemplateTestForm({ patientId }: { patientId: string }) {
  const [template, setTemplate] = useState<TemplateKey>('case_approved')
  const [msg, setMsg] = useState<string>('')
  const [pending, start] = useTransition()

  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Email template preview</h3>
      <p className="mt-1 text-xs text-neutral-500">
        Sends to your signed-in staff email only (for quick QA).
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <select
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          value={template}
          onChange={(e) => setTemplate(e.target.value as TemplateKey)}
          disabled={pending}
        >
          {TEMPLATE_OPTIONS.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await sendTemplateTestEmail(patientId, template)
              setMsg(res.ok ? `Preview sent to ${res.sentTo}` : res.error)
            })
          }
          disabled={pending}
          className="rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Send preview'}
        </button>
      </div>

      {msg ? <p className="mt-2 text-xs text-neutral-600">{msg}</p> : null}
    </section>
  )
}


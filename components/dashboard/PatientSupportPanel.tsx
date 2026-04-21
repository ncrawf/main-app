'use client'

import { useState, useTransition } from 'react'
import { toast } from 'sonner'

type SupportAction =
  | {
      type: 'message'
      recipient: 'team' | 'provider'
      message: string
    }
  | {
      type: 'callback'
      callbackFrom: 'team' | 'provider'
      timing: 'asap' | 'later_today' | 'within_24h'
      medium: 'phone' | 'video'
      note: string
    }

export function PatientSupportPanel({ patientId }: { patientId: string }) {
  const [recipient, setRecipient] = useState<'team' | 'provider'>('team')
  const [message, setMessage] = useState('')
  const [callFrom, setCallFrom] = useState<'team' | 'provider'>('team')
  const [timing, setTiming] = useState<'asap' | 'later_today' | 'within_24h'>('later_today')
  const [medium, setMedium] = useState<'phone' | 'video'>('phone')
  const [note, setNote] = useState('')
  const [msgState, setMsgState] = useState('')
  const [callState, setCallState] = useState('')
  const [pending, startTransition] = useTransition()

  async function postSupport(body: SupportAction): Promise<{ ok: true } | { ok: false; error: string }> {
    const res = await fetch('/api/patient-portal/support-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientId, ...body }),
    })
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || 'Could not submit request. Please try again.' }
    }
    return { ok: true }
  }

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Message your care team</h3>
      <p className="mt-1 text-sm text-neutral-600">
        Fastest path is an async message. For urgent concerns, request a callback below.
      </p>

      <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Send message</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <label className="text-xs text-neutral-600">Send to</label>
          <select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value as 'team' | 'provider')}
            disabled={pending}
            className="rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm text-neutral-900"
          >
            <option value="team">Clinical team</option>
            <option value="provider">Rx provider</option>
          </select>
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          maxLength={2000}
          placeholder="Type your question or update..."
          disabled={pending}
          className="mt-3 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
        />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-neutral-500">{message.length}/2000</span>
          <button
            type="button"
            disabled={pending || message.trim().length < 5}
            onClick={() =>
              startTransition(async () => {
                setMsgState('')
                const res = await postSupport({
                  type: 'message',
                  recipient,
                  message: message.trim(),
                })
                if (!res.ok) {
                  setMsgState(res.error)
                  toast.error(res.error)
                  return
                }
                setMessage('')
                setMsgState('Message sent. Your team will reply with an update in your dashboard.')
                toast.success('Message sent')
              })
            }
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? 'Sending…' : 'Send message'}
          </button>
        </div>
        {msgState ? <p className="mt-2 text-xs text-neutral-600">{msgState}</p> : null}
      </div>

      <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Request callback</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <label className="text-xs text-neutral-600">
            From
            <select
              value={callFrom}
              onChange={(e) => setCallFrom(e.target.value as 'team' | 'provider')}
              disabled={pending}
              className="mt-1 block w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm text-neutral-900"
            >
              <option value="team">Clinical team</option>
              <option value="provider">Rx provider</option>
            </select>
          </label>
          <label className="text-xs text-neutral-600">
            When
            <select
              value={timing}
              onChange={(e) => setTiming(e.target.value as 'asap' | 'later_today' | 'within_24h')}
              disabled={pending}
              className="mt-1 block w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm text-neutral-900"
            >
              <option value="asap">As soon as possible</option>
              <option value="later_today">Later today</option>
              <option value="within_24h">Within 24 hours</option>
            </select>
          </label>
          <label className="text-xs text-neutral-600 sm:col-span-2">
            Call type
            <select
              value={medium}
              onChange={(e) => setMedium(e.target.value as 'phone' | 'video')}
              disabled={pending}
              className="mt-1 block w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm text-neutral-900"
            >
              <option value="phone">Phone call</option>
              <option value="video">Video call (when available)</option>
            </select>
          </label>
        </div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          maxLength={1200}
          placeholder="Optional note for your team..."
          disabled={pending}
          className="mt-3 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
        />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-neutral-500">{note.length}/1200</span>
          <button
            type="button"
            disabled={pending}
            onClick={() =>
              startTransition(async () => {
                setCallState('')
                const res = await postSupport({
                  type: 'callback',
                  callbackFrom: callFrom,
                  timing,
                  medium,
                  note: note.trim(),
                })
                if (!res.ok) {
                  setCallState(res.error)
                  toast.error(res.error)
                  return
                }
                setNote('')
                setCallState('Callback request submitted. Your team will follow up.')
                toast.success('Callback requested')
              })
            }
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? 'Submitting…' : 'Request callback'}
          </button>
        </div>
        {callState ? <p className="mt-2 text-xs text-neutral-600">{callState}</p> : null}
      </div>
    </section>
  )
}


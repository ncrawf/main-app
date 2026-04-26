'use client'

import { useState, useTransition } from 'react'
import { toast } from 'sonner'

type Props = {
  patientId: string
  /** Thread identity (derived from program). Used to route message on the server. */
  threadId: string
  threadTitle: string
}

/**
 * Lean thread-scoped composer.
 *
 * The user never picks "who to message" — the active thread (program) determines routing.
 * On submit we post through the existing `/api/patient-portal/support-request` endpoint
 * with `recipient: 'team'` so no backend behavior changes. The thread identity is sent
 * along as `threadId` / `threadTitle` in case the backend wants to log it, but the API
 * remains the single source of truth.
 */
export function MessagesThreadComposer({ patientId, threadId, threadTitle }: Props) {
  const [message, setMessage] = useState('')
  const [pending, startTransition] = useTransition()

  const trimmed = message.trim()
  const canSend = trimmed.length >= 5 && !pending

  function submit() {
    if (trimmed.length < 5) return
    startTransition(async () => {
      const res = await fetch('/api/patient-portal/support-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId,
          type: 'message',
          recipient: 'team',
          message: `[${threadTitle}] ${trimmed}`,
          threadId,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        toast.error(data.error || 'Could not send. Please try again.')
        return
      }
      setMessage('')
      toast.success('Sent to your care team')
    })
  }

  return (
    <div className="sticky bottom-0 mt-6 border-t border-neutral-200 bg-white pt-3">
      <label htmlFor="messages-thread-reply" className="sr-only">
        Reply
      </label>
      <textarea
        id="messages-thread-reply"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        maxLength={2000}
        placeholder="Reply..."
        disabled={pending}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            submit()
          }
        }}
        className="w-full resize-none rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
      />
      <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
        <span>Press Return to send · Shift+Return for a new line.</span>
        <button
          type="button"
          onClick={submit}
          disabled={!canSend}
          className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Send'}
        </button>
      </div>
    </div>
  )
}

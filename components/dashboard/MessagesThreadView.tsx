'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

type MessageRow = {
  id: string
  thread_id: string
  care_program_id: string
  patient_id: string
  from_patient: boolean
  author_staff_id: string | null
  body: string
  classification: string | null
  clinical_required: boolean
  created_at: string
}

export type InitialChatView = {
  thread_id: string
  care_program_id: string
  messages: MessageRow[]
  patient_participant: {
    participant_id: string
    last_read_message_id: string | null
    last_read_at: string | null
  }
  unread_count: number
}

type ListResponse = {
  ok: true
  thread_id: string
  care_program_id: string
  messages: MessageRow[]
  patient_participant: {
    participant_id: string
    last_read_message_id: string | null
    last_read_at: string | null
  }
  unread_count: number
}

type Props = {
  patientId: string
  threadId: string
  threadTitle: string
  /** Server-component-fetched initial state. The client component avoids a
   * setState-in-effect cascade on mount by hydrating from this prop. */
  initialView: InitialChatView
}

const CLASSIFICATION_LABEL: Record<string, { label: string; tone: 'amber' | 'sky' | 'rose' | 'emerald' | 'neutral' }> = {
  prescribing_decision: { label: 'Prescribing decision', tone: 'sky' },
  lab_review: { label: 'Lab review', tone: 'emerald' },
  general: { label: 'General', tone: 'neutral' },
  safety_alert: { label: 'Safety alert', tone: 'rose' },
  billing: { label: 'Billing', tone: 'neutral' },
}

function classificationToneStyles(tone: 'amber' | 'sky' | 'rose' | 'emerald' | 'neutral'): string {
  switch (tone) {
    case 'amber':
      return 'bg-amber-100 text-amber-800'
    case 'sky':
      return 'bg-sky-100 text-sky-800'
    case 'rose':
      return 'bg-rose-100 text-rose-800'
    case 'emerald':
      return 'bg-emerald-100 text-emerald-800'
    case 'neutral':
    default:
      return 'bg-neutral-200 text-neutral-700'
  }
}

function formatTimestamp(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toLocaleString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

function generateClientMessageId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `cm-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export function MessagesThreadView({ patientId, threadId, threadTitle, initialView }: Props) {
  const [messages, setMessages] = useState<MessageRow[]>(initialView.messages)
  const [unreadCount, setUnreadCount] = useState(initialView.unread_count)
  const [error, setError] = useState<string | null>(null)
  const [composeBody, setComposeBody] = useState('')
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const markedReadKeyRef = useRef<string | null>(null)

  const refetch = useCallback(async (): Promise<void> => {
    setError(null)
    try {
      const res = await fetch(
        `/api/messages/${threadId}/messages?patientId=${encodeURIComponent(patientId)}`,
        { method: 'GET', cache: 'no-store' },
      )
      const json = (await res.json().catch(() => ({}))) as ListResponse | { error?: string }
      if (!res.ok || !('ok' in json) || !json.ok) {
        setError(('error' in json && json.error) || 'Could not load messages.')
        return
      }
      setMessages(json.messages)
      setUnreadCount(json.unread_count)
    } catch (e) {
      setError(`Could not load messages: ${(e as Error).message}`)
    }
  }, [patientId, threadId])

  // Mark thread read on mount + when the latest message id changes.
  // This effect synchronizes server state (read pointer) with the rendered
  // view; the local setUnreadCount(0) is the parallel optimistic update.
  // Guarded by markedReadKeyRef so re-renders don't fire repeated PATCHes.
  useEffect(() => {
    if (messages.length === 0) return
    const latest = messages[messages.length - 1]
    if (markedReadKeyRef.current === latest.id) return
    markedReadKeyRef.current = latest.id
    void (async () => {
      try {
        const res = await fetch(`/api/messages/${threadId}/read`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ patientId, message_id: latest.id }),
        })
        if (res.ok) {
          setUnreadCount(0)
        }
      } catch {
        // Non-blocking — read advance is best-effort.
      }
    })()
  }, [messages, patientId, threadId])

  // Auto-scroll to bottom when new messages arrive.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages.length])

  const trimmedCompose = composeBody.trim()
  const canSend = trimmedCompose.length >= 1 && trimmedCompose.length <= 8000 && !sending

  const onSend = useCallback(async () => {
    if (!canSend) return
    setSending(true)
    const clientMessageId = generateClientMessageId()
    try {
      const res = await fetch(`/api/messages/${threadId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId,
          body: trimmedCompose,
          client_message_id: clientMessageId,
        }),
      })
      const json = (await res.json().catch(() => ({}))) as
        | { ok: true; message_id: string; created_at: string; idempotent_replay: boolean }
        | { error: string; detail?: string }
      if (!res.ok || !('ok' in json) || !json.ok) {
        const errCode = ('error' in json && json.error) || 'unknown_error'
        toast.error(
          errCode === 'idempotency_key_reuse_mismatch'
            ? 'Could not send — please retry.'
            : ('detail' in json && json.detail) || 'Could not send. Please try again.',
        )
        return
      }
      setComposeBody('')
      await refetch()
    } finally {
      setSending(false)
    }
  }, [canSend, patientId, refetch, threadId, trimmedCompose])

  return (
    <div className="flex min-h-[60vh] flex-col">
      <header className="border-b border-neutral-200 pb-3">
        <h1 className="text-lg font-semibold text-neutral-900">{threadTitle}</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Chat with your care team about your treatment, medications, and labs.
        </p>
      </header>

      {error ? (
        <div className="mt-6 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">{error}</div>
      ) : null}

      <div ref={scrollRef} className="mt-4 flex-1 space-y-3 overflow-y-auto pr-1">
        {messages.length === 0 ? (
          <p className="rounded-md border border-dashed border-neutral-200 bg-neutral-50 px-3 py-4 text-sm text-neutral-600">
            No messages yet. Send a message and your care team will reply here.
          </p>
        ) : (
          messages.map((m) => <MessageBubble key={m.id} message={m} />)
        )}
      </div>

      {unreadCount > 0 ? <p className="mt-2 text-xs text-neutral-500">{unreadCount} unread</p> : null}

      <ComposeBox
        value={composeBody}
        onChange={setComposeBody}
        disabled={sending}
        canSend={canSend}
        onSend={onSend}
      />
    </div>
  )
}

function MessageBubble({ message }: { message: MessageRow }) {
  const isPatient = message.from_patient
  const classification = message.classification
  const classInfo = classification ? CLASSIFICATION_LABEL[classification] : null
  const clinicalRequired = !isPatient && message.clinical_required

  return (
    <div className={`flex items-start gap-3 ${isPatient ? 'flex-row-reverse' : ''}`}>
      <span
        aria-hidden
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
          isPatient ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-700'
        }`}
      >
        {isPatient ? 'You' : 'CT'}
      </span>
      <div
        className={`min-w-0 max-w-prose rounded-2xl px-4 py-3 ${
          isPatient ? 'rounded-tr-sm bg-neutral-900 text-white' : 'rounded-tl-sm bg-neutral-100 text-neutral-900'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <p
            className={`text-[11px] font-medium uppercase tracking-wider ${
              isPatient ? 'text-neutral-300' : 'text-neutral-500'
            }`}
          >
            {isPatient ? 'You' : 'Care team'}
          </p>
          {clinicalRequired ? (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
              Response needed
            </span>
          ) : null}
          {classInfo ? (
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${classificationToneStyles(classInfo.tone)}`}>
              {classInfo.label}
            </span>
          ) : null}
        </div>
        <p className="mt-1 whitespace-pre-line text-sm">{message.body}</p>
        <p className={`mt-2 text-[10px] ${isPatient ? 'text-neutral-400' : 'text-neutral-500'}`}>
          {formatTimestamp(message.created_at)}
        </p>
      </div>
    </div>
  )
}

function ComposeBox({
  value,
  onChange,
  disabled,
  canSend,
  onSend,
}: {
  value: string
  onChange: (v: string) => void
  disabled: boolean
  canSend: boolean
  onSend: () => void
}) {
  return (
    <div className="sticky bottom-0 mt-6 border-t border-neutral-200 bg-white pt-3">
      <label htmlFor="messages-thread-reply" className="sr-only">
        Reply
      </label>
      <textarea
        id="messages-thread-reply"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        maxLength={8000}
        placeholder="Reply..."
        disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSend()
          }
        }}
        className="w-full resize-none rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
      />
      <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
        <span>Press Return to send · Shift+Return for a new line.</span>
        <button
          type="button"
          onClick={onSend}
          disabled={!canSend}
          className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {disabled ? 'Sending…' : 'Send'}
        </button>
      </div>
    </div>
  )
}

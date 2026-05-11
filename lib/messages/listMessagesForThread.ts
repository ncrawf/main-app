/**
 * Phase 4H-communications c2 — listMessagesForThread.
 *
 * Server-side data fetcher for the chat thread view. Returns ordered
 * messages + the patient's participant pointer (so the UI can derive unread
 * count + read-state indicators).
 *
 * Authorization model: the API route layer calls `assertPatientDashboardAccess`
 * BEFORE calling this function. This function then verifies thread ownership
 * (the requested thread must belong to the requested patient) as a defense-
 * in-depth check. Caller-supplied patientId is NEVER authority on patient-
 * facing routes per the §4.5 security invariant.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'

export type MessageRow = {
  id: string
  thread_id: string
  care_program_id: string
  patient_id: string
  from_patient: boolean
  author_staff_id: string | null
  body: string
  classification: string | null
  clinical_required: boolean
  metadata: Record<string, unknown>
  created_at: string
}

export type PatientParticipantState = {
  participant_id: string
  last_read_message_id: string | null
  last_read_at: string | null
}

export type ListMessagesResult = {
  thread_id: string
  care_program_id: string
  messages: MessageRow[]
  patient_participant: PatientParticipantState
  /** Count of messages strictly later than the patient's pointer, by (created_at, id). */
  unread_count: number
}

export class ThreadAccessError extends Error {
  readonly code = 'thread_access_denied' as const
}
export class ThreadNotFoundError extends Error {
  readonly code = 'thread_not_found' as const
}

export async function listMessagesForThread(
  args: { patientId: string; threadId: string },
  supabase?: SupabaseClient,
): Promise<ListMessagesResult> {
  const sb = supabase ?? createAdminClient()

  // 1) Resolve thread + verify ownership.
  const { data: thread, error: threadErr } = await sb
    .from('message_threads')
    .select('id, care_program_id, patient_id')
    .eq('id', args.threadId)
    .maybeSingle()

  if (threadErr) {
    throw new Error(`listMessagesForThread: thread fetch failed: ${threadErr.message}`)
  }
  if (!thread) {
    throw new ThreadNotFoundError(`Thread ${args.threadId} not found`)
  }
  const t = thread as { id: string; care_program_id: string; patient_id: string }
  if (t.patient_id !== args.patientId) {
    throw new ThreadAccessError(
      `Patient ${args.patientId} does not own thread ${args.threadId}`,
    )
  }

  // 2) Fetch messages for the thread, ordered ascending so the UI renders
  // chronologically (oldest → newest). The (created_at, id) composite index
  // covers this read.
  const { data: messagesRaw, error: msgErr } = await sb
    .from('messages')
    .select(
      'id, message_thread_id, care_program_id, patient_id, from_patient, author_staff_id, body, classification, metadata, created_at',
    )
    .eq('message_thread_id', args.threadId)
    .order('created_at', { ascending: true })
    .order('id', { ascending: true })

  if (msgErr) {
    throw new Error(`listMessagesForThread: messages fetch failed: ${msgErr.message}`)
  }

  type MessageRowRaw = {
    id: string
    message_thread_id: string
    care_program_id: string
    patient_id: string
    from_patient: boolean
    author_staff_id: string | null
    body: string
    classification: string | null
    metadata: Record<string, unknown> | null
    created_at: string
  }
  const messages: MessageRow[] = ((messagesRaw ?? []) as MessageRowRaw[]).map((m) => {
    const md = m.metadata ?? {}
    const cr = md['clinical_required']
    return {
      id: m.id,
      thread_id: m.message_thread_id,
      care_program_id: m.care_program_id,
      patient_id: m.patient_id,
      from_patient: m.from_patient,
      author_staff_id: m.author_staff_id,
      body: m.body,
      classification: m.classification,
      clinical_required: cr === true,
      metadata: md,
      created_at: m.created_at,
    }
  })

  // 3) Fetch the patient's participant row (for the read pointer).
  const { data: participantRaw, error: partErr } = await sb
    .from('message_thread_participants')
    .select('id, last_read_message_id, last_read_at')
    .eq('message_thread_id', args.threadId)
    .eq('kind', 'patient')
    .eq('patient_id', args.patientId)
    .maybeSingle()

  if (partErr) {
    throw new Error(`listMessagesForThread: participant fetch failed: ${partErr.message}`)
  }

  if (!participantRaw) {
    // The migration backfilled patient participants for every existing thread;
    // a missing row means the thread was created after backfill without a
    // patient participant — a substrate invariant violation we surface loudly.
    throw new Error(
      `listMessagesForThread: no patient participant row for patient ${args.patientId} in thread ${args.threadId} (substrate invariant violation)`,
    )
  }
  const p = participantRaw as {
    id: string
    last_read_message_id: string | null
    last_read_at: string | null
  }

  // 4) Derive unread count using (created_at, id) tuple comparison.
  // Messages from the patient themselves never count as unread for the patient.
  let unread = 0
  if (p.last_read_message_id == null) {
    // Patient has read nothing → count all staff messages.
    unread = messages.filter((m) => !m.from_patient).length
  } else {
    const pointer = messages.find((m) => m.id === p.last_read_message_id)
    if (pointer) {
      const pointerKey = `${pointer.created_at}|${pointer.id}`
      unread = messages.filter((m) => {
        if (m.from_patient) return false
        const k = `${m.created_at}|${m.id}`
        return k > pointerKey
      }).length
    } else {
      // Pointer points to a message not in this list (shouldn't happen since
      // the FK is ON DELETE SET NULL, but defensive). Treat as "read nothing"
      // since the pointer is now meaningless.
      unread = messages.filter((m) => !m.from_patient).length
    }
  }

  return {
    thread_id: t.id,
    care_program_id: t.care_program_id,
    messages,
    patient_participant: {
      participant_id: p.id,
      last_read_message_id: p.last_read_message_id,
      last_read_at: p.last_read_at,
    },
    unread_count: unread,
  }
}

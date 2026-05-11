/**
 * Phase 4H-communications c2 — listMessageThreadsForPatient.
 *
 * Drives the `/dashboard/[patientId]/messages` thread-list page from the
 * `message_threads` SoT (per preflight §4.9), not from `careOverview.programs`.
 * Joined with `care_programs` for the display label.
 *
 * The current substrate enforces `message_threads.care_program_id NOT NULL
 * UNIQUE`, so today this is 1:1-equivalent with the program list — but
 * driving the list from the messaging substrate now means future thread
 * shapes (ops/support, post-procedure) will land in the patient view
 * automatically once the constraint is relaxed (future commit per
 * `communications_topology.md` §11).
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'

export type ThreadListEntry = {
  thread_id: string
  care_program_id: string
  patient_id: string
  /** From the linked care_programs row. */
  program_type: string
  program_title: string | null
  program_status: string
  program_updated_at: string
  /** Latest message timestamp, or thread.updated_at if no messages yet. */
  last_activity_at: string
  /** Patient's per-thread unread count (staff messages strictly later than pointer). */
  unread_count: number
}

export async function listMessageThreadsForPatient(
  args: { patientId: string },
  supabase?: SupabaseClient,
): Promise<ThreadListEntry[]> {
  const sb = supabase ?? createAdminClient()

  // 1) Threads for this patient + linked care_program (single join).
  const { data: threadsRaw, error: threadsErr } = await sb
    .from('message_threads')
    .select(
      `
      id,
      care_program_id,
      patient_id,
      updated_at,
      care_programs!inner (
        id,
        program_type,
        title,
        status,
        updated_at
      )
    `,
    )
    .eq('patient_id', args.patientId)

  if (threadsErr) {
    throw new Error(
      `listMessageThreadsForPatient: threads fetch failed: ${threadsErr.message}`,
    )
  }
  type CareProgramJoinedShape = {
    id: string
    program_type: string
    title: string | null
    status: string
    updated_at: string
  }
  type ThreadJoinedShape = {
    id: string
    care_program_id: string
    patient_id: string
    updated_at: string
    care_programs: CareProgramJoinedShape | CareProgramJoinedShape[]
  }
  const threads = (threadsRaw ?? []) as ThreadJoinedShape[]

  if (threads.length === 0) {
    return []
  }

  const threadIds = threads.map((t) => t.id)

  // 2) Patient participants (one per thread by migration backfill).
  const { data: participantsRaw, error: partsErr } = await sb
    .from('message_thread_participants')
    .select('message_thread_id, last_read_message_id')
    .eq('kind', 'patient')
    .eq('patient_id', args.patientId)
    .in('message_thread_id', threadIds)

  if (partsErr) {
    throw new Error(
      `listMessageThreadsForPatient: participants fetch failed: ${partsErr.message}`,
    )
  }
  type ParticipantShape = {
    message_thread_id: string
    last_read_message_id: string | null
  }
  const participantsByThread = new Map<string, ParticipantShape>()
  for (const p of (participantsRaw ?? []) as ParticipantShape[]) {
    participantsByThread.set(p.message_thread_id, p)
  }

  // 3) Per-thread aggregates: latest message timestamp + staff-only message rows
  // for unread counting. We pull all messages once and bucket by thread to
  // avoid N queries; thread counts on the patient portal are bounded (typically
  // <10 threads per patient) so this is cheap.
  const { data: messagesRaw, error: msgErr } = await sb
    .from('messages')
    .select('id, message_thread_id, from_patient, created_at')
    .in('message_thread_id', threadIds)
    .order('created_at', { ascending: true })
    .order('id', { ascending: true })

  if (msgErr) {
    throw new Error(
      `listMessageThreadsForPatient: messages fetch failed: ${msgErr.message}`,
    )
  }
  type MessageLite = {
    id: string
    message_thread_id: string
    from_patient: boolean
    created_at: string
  }
  const messagesByThread = new Map<string, MessageLite[]>()
  for (const m of (messagesRaw ?? []) as MessageLite[]) {
    const arr = messagesByThread.get(m.message_thread_id) ?? []
    arr.push(m)
    messagesByThread.set(m.message_thread_id, arr)
  }

  const result: ThreadListEntry[] = threads.map((t) => {
    const program = Array.isArray(t.care_programs) ? t.care_programs[0] : t.care_programs
    const messages = messagesByThread.get(t.id) ?? []
    const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null
    const lastActivityAt = lastMessage?.created_at ?? t.updated_at

    const participant = participantsByThread.get(t.id)
    const pointerId = participant?.last_read_message_id ?? null

    let unread = 0
    if (pointerId == null) {
      unread = messages.filter((m) => !m.from_patient).length
    } else {
      const pointer = messages.find((m) => m.id === pointerId)
      if (pointer) {
        const pointerKey = `${pointer.created_at}|${pointer.id}`
        unread = messages.filter((m) => {
          if (m.from_patient) return false
          const k = `${m.created_at}|${m.id}`
          return k > pointerKey
        }).length
      } else {
        unread = messages.filter((m) => !m.from_patient).length
      }
    }

    return {
      thread_id: t.id,
      care_program_id: t.care_program_id,
      patient_id: t.patient_id,
      program_type: program?.program_type ?? '',
      program_title: program?.title ?? null,
      program_status: program?.status ?? '',
      program_updated_at: program?.updated_at ?? t.updated_at,
      last_activity_at: lastActivityAt,
      unread_count: unread,
    }
  })

  // Sort: unread threads first (desc by unread count), then by last activity desc.
  result.sort((a, b) => {
    if (a.unread_count !== b.unread_count) return b.unread_count - a.unread_count
    return b.last_activity_at.localeCompare(a.last_activity_at)
  })

  return result
}

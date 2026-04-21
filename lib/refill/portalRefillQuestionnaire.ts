import type { RefillCheckInProfile } from '@/lib/refill/refillCheckInProfile'
import { parseGenericRefillPayload, type GenericRefillQuestionnairePayload } from '@/lib/refill/genericRefillQuestionnaire'
import {
  parseGlp1RefillQuestionnairePayload,
  type Glp1RefillQuestionnairePayload,
} from '@/lib/refill/glp1RefillQuestionnaire'

export type PortalRefillCheckInMetadata =
  | Glp1RefillQuestionnairePayload
  | GenericRefillQuestionnairePayload
  | null

export type BuildPortalRefillNotesResult =
  | {
      ok: true
      patientNote: string | null
      refillCheckIn: PortalRefillCheckInMetadata
    }
  | { ok: false; error: string }

const MAX_NOTE = 8000

function joinBlocks(block: string, free: string): string {
  const f = free.trim()
  if (!f) return block.trim()
  if (!block.trim()) return f
  return `${block.trim()}\n\n— Your note —\n${f}`
}

/**
 * Validates portal questionnaire when required for this medication profile and merges optional free-text note.
 */
export function buildPortalRefillNotes(
  profile: RefillCheckInProfile,
  questionnaireRaw: unknown,
  freeNote: string
): BuildPortalRefillNotesResult {
  const free = freeNote.trim()

  if (profile === 'none') {
    const combined = free
    if (combined.length > MAX_NOTE) {
      return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }
    }
    return { ok: true, patientNote: combined.length > 0 ? combined : null, refillCheckIn: null }
  }

  if (profile === 'glp1_weight_loss') {
    const parsed = parseGlp1RefillQuestionnairePayload(profile, questionnaireRaw)
    if (!parsed.ok) return parsed
    const combined = joinBlocks(parsed.noteBlock, free)
    if (combined.length > MAX_NOTE) {
      return { ok: false, error: `Combined check-in and note must be ${MAX_NOTE} characters or less.` }
    }
    return { ok: true, patientNote: combined, refillCheckIn: parsed.payload }
  }

  if (profile === 'generic_rx') {
    const parsed = parseGenericRefillPayload(profile, questionnaireRaw)
    if (!parsed.ok) return parsed
    const combined = joinBlocks(parsed.noteBlock, free)
    if (combined.length > MAX_NOTE) {
      return { ok: false, error: `Combined check-in and note must be ${MAX_NOTE} characters or less.` }
    }
    return { ok: true, patientNote: combined, refillCheckIn: parsed.payload }
  }

  return { ok: false, error: 'Unknown refill check-in profile.' }
}

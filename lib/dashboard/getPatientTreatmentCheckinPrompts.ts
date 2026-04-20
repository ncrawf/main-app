import { createAdminClient } from '@/lib/supabase/admin'

export type TreatmentCheckinPrompt = {
  treatmentItemId: string
  displayName: string
  treatmentKey: string
  promptTitle: string
  promptDescription: string
  startedAt: string
}

const DAY_MS = 24 * 60 * 60 * 1000
const FIRST_PROMPT_AFTER_DAYS = 14
const REPEAT_PROMPT_EVERY_DAYS = 14

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function isEdTreatment(treatmentKey: string, displayName: string): boolean {
  const v = `${treatmentKey} ${displayName}`.toLowerCase()
  return v.includes('cialis') || v.includes('tadalafil') || v.includes('sildenafil') || v.includes('ed')
}

function hasCheckinDue(startedAtIso: string, lastCheckinAtIso: string | null): boolean {
  const startedAt = new Date(startedAtIso)
  if (Number.isNaN(startedAt.getTime())) return false
  const now = Date.now()
  if (now - startedAt.getTime() < FIRST_PROMPT_AFTER_DAYS * DAY_MS) return false
  if (!lastCheckinAtIso) return true
  const last = new Date(lastCheckinAtIso)
  if (Number.isNaN(last.getTime())) return true
  return now - last.getTime() >= REPEAT_PROMPT_EVERY_DAYS * DAY_MS
}

export async function getPatientTreatmentCheckinPrompts(patientId: string): Promise<TreatmentCheckinPrompt[]> {
  try {
    const admin = createAdminClient()
    const { data: treatments, error: tErr } = await admin
      .from('treatment_items')
      .select('id, display_name, treatment_key, status, started_at, created_at')
      .eq('patient_id', patientId)
      .in('status', ['rx_sent', 'shipped', 'active', 'refill_due', 'refill_pending'])
      .order('updated_at', { ascending: false })

    if (tErr) {
      if (isMissingRelationError(tErr)) return []
      console.error('getPatientTreatmentCheckinPrompts.treatments', tErr)
      return []
    }
    const rows =
      (treatments as Array<{
        id: string
        display_name: string
        treatment_key: string
        status: string
        started_at: string | null
        created_at: string
      }>) ?? []
    if (rows.length === 0) return []

    const { data: events, error: eErr } = await admin
      .from('patient_timeline_events')
      .select('created_at, payload')
      .eq('patient_id', patientId)
      .eq('event_type', 'patient_treatment_checkin_submitted')
      .order('created_at', { ascending: false })

    if (eErr && !isMissingRelationError(eErr)) {
      console.error('getPatientTreatmentCheckinPrompts.events', eErr)
    }

    const latestCheckinByTreatment = new Map<string, string>()
    for (const ev of events ?? []) {
      const payload = ((ev.payload as Record<string, unknown>) ?? {}) as Record<string, unknown>
      const treatmentItemId = typeof payload.treatment_item_id === 'string' ? payload.treatment_item_id : null
      if (!treatmentItemId || latestCheckinByTreatment.has(treatmentItemId)) continue
      latestCheckinByTreatment.set(treatmentItemId, ev.created_at as string)
    }

    const prompts: TreatmentCheckinPrompt[] = []
    for (const row of rows) {
      const startedAt = row.started_at ?? row.created_at
      const lastCheckinAt = latestCheckinByTreatment.get(row.id) ?? null
      if (!hasCheckinDue(startedAt, lastCheckinAt)) continue
      const ed = isEdTreatment(row.treatment_key, row.display_name)
      prompts.push({
        treatmentItemId: row.id,
        displayName: row.display_name,
        treatmentKey: row.treatment_key,
        promptTitle: ed ? 'ED treatment check-in' : 'Treatment progress check-in',
        promptDescription: ed
          ? 'Help us tune your ED protocol: efficacy, duration, side effects, and dose fit.'
          : 'Update us on your progress, side effects, and whether your current dose feels appropriate.',
        startedAt,
      })
    }

    return prompts
  } catch (e) {
    console.error('getPatientTreatmentCheckinPrompts', e)
    return []
  }
}


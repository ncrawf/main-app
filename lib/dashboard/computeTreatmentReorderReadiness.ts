import { daysUntil, formatIsoDateUs } from '@/lib/dashboard/formatCarePatientView'
import type { PatientCareProgramCard, PatientCareTreatmentDetail } from '@/lib/dashboard/getPatientCareOverview'
import type { RefillEligibleTreatment } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import type { TreatmentCheckinPrompt } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import { OPEN_REFILL_REQUEST_STATUSES } from '@/lib/refill/refillRequestTransitions'

export type ReorderReadinessState =
  | 'reorder_ready'
  | 'reorder_window'
  | 'needs_checkin'
  | 'in_refill_review'
  | 'no_action'

export type TreatmentReorderReadinessRow = {
  treatmentItemId: string
  displayName: string
  careProgramId: string
  programType: string | null
  state: ReorderReadinessState
  headline: string
  detail: string
  href: string
  sortKey: number
}

export function programTypeByCareProgramId(programs: PatientCareProgramCard[]): Map<string, string> {
  const m = new Map<string, string>()
  for (const p of programs) {
    m.set(p.id, p.program_type)
  }
  return m
}

function isWeightLossProgram(programType: string | null): boolean {
  return programType === 'weight_loss'
}

/** Patient-facing copy for “refill due now” — med renews on its own; weight loss programs add program context. */
export function refillDueNowCopy(displayName: string, programType: string | null): { title: string; subtitle: string } {
  if (isWeightLossProgram(programType)) {
    return {
      title: `${displayName}: medication refill due now`,
      subtitle:
        'Weight loss program care often spans several medications—each one renews on its own timeline. Submit a refill when you are ready.',
    }
  }
  return {
    title: `Refill due now: ${displayName}`,
    subtitle: 'You can submit a refill request when you are ready.',
  }
}

/** Copy for metadata-driven refill window (not strict “due” until status catches up). */
export function refillWindowCopy(
  displayName: string,
  programType: string | null,
  day: number | null,
  dateLabel: string
): { title: string; subtitle: string } {
  const windowLine =
    day === null
      ? `Refill window: ${displayName}`
      : day < 0
        ? `Refill window passed for ${displayName} (${dateLabel})`
        : day === 0
          ? `Refill window: ${displayName} — today (${dateLabel})`
          : day === 1
            ? `Refill window opens in 1 day for ${displayName} (${dateLabel})`
            : `Refill window opens in ${day} days for ${displayName} (${dateLabel})`

  if (isWeightLossProgram(programType)) {
    const title = windowLine.includes('Refill window')
      ? windowLine.replace('Refill window', 'Program / medication window')
      : windowLine
    return {
      title,
      subtitle:
        'Your program may renew on a different rhythm than each medication—use dates here per medication.',
    }
  }
  return {
    title: windowLine,
    subtitle: 'You may be able to request a refill when your plan reaches this window.',
  }
}

function parseIsoDate(s: string): string | null {
  const t = new Date(s).getTime()
  if (Number.isNaN(t)) return null
  return new Date(s).toISOString().slice(0, 10)
}

/**
 * Per-treatment reorder surface: each medication is evaluated independently (multiple meds in one care plan).
 * Program type (e.g. weight_loss) only adjusts phrasing, not coupling of renewal dates.
 */
export function computeTreatmentReorderReadinessRows(input: {
  patientId: string
  treatmentsByProgramId: Record<string, PatientCareTreatmentDetail[]>
  programs: PatientCareProgramCard[]
  checkinPrompts: TreatmentCheckinPrompt[]
  refillEligible: RefillEligibleTreatment[]
}): TreatmentReorderReadinessRow[] {
  const { patientId, treatmentsByProgramId, programs, checkinPrompts, refillEligible } = input
  const base = `/dashboard/${patientId}`.replace(/\/$/, '')
  const ptMap = programTypeByCareProgramId(programs)
  const checkinIds = new Set(checkinPrompts.map((p) => p.treatmentItemId))
  const refillEligibleIds = new Set(refillEligible.map((r) => r.id))
  const treatments = Object.values(treatmentsByProgramId).flat()
  const rows: TreatmentReorderReadinessRow[] = []
  const openRefill = new Set(OPEN_REFILL_REQUEST_STATUSES as readonly string[])

  for (const t of treatments) {
    const programType = ptMap.get(t.care_program_id) ?? null
    const weight = isWeightLossProgram(programType)
    const href = `${base}/programs/${t.care_program_id}`
    const md = (t.metadata ?? {}) as Record<string, unknown>

    let state: ReorderReadinessState = 'no_action'
    let headline = ''
    let detail = ''
    let sortKey = 50

    const latest = t.latest_refill_status
    const inOpenRefill = latest ? openRefill.has(latest) : false

    if (checkinIds.has(t.id)) {
      state = 'needs_checkin'
      headline = weight
        ? `${t.display_name}: check-in for this medication`
        : `${t.display_name}: check-in due`
      detail = weight
        ? 'Each medication in your weight loss program can move on its own schedule—complete this check-in so we can clear your next step.'
        : 'A short check-in helps your team keep your refill path smooth.'
      sortKey = 1
    } else if (t.status === 'refill_due' || refillEligibleIds.has(t.id)) {
      state = 'reorder_ready'
      const c = refillDueNowCopy(t.display_name, programType)
      headline = c.title
      detail =
        c.subtitle +
        (weight
          ? ' Complete the short health check on this page before you submit your refill request.'
          : ' Complete the quick check-in on this page before you submit your refill request.')
      sortKey = 0
    } else if (inOpenRefill) {
      state = 'in_refill_review'
      headline = `Continuation in progress: ${t.display_name}`
      detail = weight
        ? 'Your team is reviewing this continuation step. Other medications in the program may still move independently.'
        : 'Your care team is reviewing this continuation step.'
      sortKey = 10
    } else {
      const refillAt = typeof md.next_refill_due_at === 'string' ? md.next_refill_due_at.trim() : ''
      if (refillAt && parseIsoDate(refillAt)) {
        state = 'reorder_window'
        const day = daysUntil(refillAt)
        const dateLabel = formatIsoDateUs(refillAt)
        const c = refillWindowCopy(t.display_name, programType, day, dateLabel)
        headline = c.title
        detail = c.subtitle
        sortKey = 20
      }
    }

    if (state === 'no_action') continue

    const hrefForRow =
      state === 'reorder_ready' || state === 'in_refill_review'
        ? `${base}#refill-request`
        : state === 'needs_checkin'
          ? `${base}#treatment-checkin`
          : href

    rows.push({
      treatmentItemId: t.id,
      displayName: t.display_name,
      careProgramId: t.care_program_id,
      programType,
      state,
      headline,
      detail,
      href: hrefForRow,
      sortKey,
    })
  }

  rows.sort((a, b) => {
    if (a.sortKey !== b.sortKey) return a.sortKey - b.sortKey
    return a.displayName.localeCompare(b.displayName)
  })
  return rows
}

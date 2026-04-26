import { labelLabTest } from '@/lib/labs/catalog'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  programTypeByCareProgramId,
  refillDueNowCopy,
  refillWindowCopy,
} from '@/lib/dashboard/computeTreatmentReorderReadiness'
import { daysUntil, formatIsoDateUs } from '@/lib/dashboard/formatCarePatientView'
import type { PatientCareProgramCard, PatientCareTreatmentDetail } from '@/lib/dashboard/getPatientCareOverview'
import { getPatientCareOverview } from '@/lib/dashboard/getPatientCareOverview'
import type { RefillEligibleTreatment } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import { getPatientRefillEligibleTreatments } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import type { TreatmentCheckinPrompt } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import { getPatientTreatmentCheckinPrompts } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'

export type UpcomingEventKind =
  | 'refill_window'
  | 'refill_due_now'
  | 'checkin_due'
  | 'visit_followup'
  | 'lab_order'
  /** Patient portal: outside labs / imaging PDFs — deep link to upload card */
  | 'portal_lab_upload'

export type PatientUpcomingEvent = {
  id: string
  kind: UpcomingEventKind
  title: string
  subtitle?: string
  /** ISO date for sorting; null means act now / no specific date */
  due_at: string | null
  urgency: 'info' | 'soon' | 'action'
  deepLinkHref: string
}

type LabOrderInput = {
  id: string
  orderDate: string
  tests: string[]
}

function parseIsoDate(s: string): string | null {
  const t = new Date(s).getTime()
  if (Number.isNaN(t)) return null
  return new Date(s).toISOString().slice(0, 10)
}

function urgencyForDate(iso: string | null): 'info' | 'soon' | 'action' {
  if (!iso) return 'action'
  const d = daysUntil(iso)
  if (d === null) return 'info'
  if (d < 0) return 'action'
  if (d <= 7) return 'soon'
  return 'info'
}

function flattenTreatments(
  treatmentsByProgramId: Record<string, PatientCareTreatmentDetail[]>
): PatientCareTreatmentDetail[] {
  return Object.values(treatmentsByProgramId).flat()
}

/**
 * Pure builder: merges refill state, check-in prompts, treatment metadata milestones, and lab orders
 * into a single sorted “upcoming actions” list (not a full calendar).
 */
export function buildPatientUpcomingEvents(input: {
  patientId: string
  treatmentsByProgramId: Record<string, PatientCareTreatmentDetail[]>
  refillEligible: RefillEligibleTreatment[]
  checkinPrompts: TreatmentCheckinPrompt[]
  labOrders: LabOrderInput[]
  /** When provided, refill titles use program-aware copy (e.g. weight_loss vs medication-only). */
  programs?: PatientCareProgramCard[]
  /** Defaults to `/dashboard/{patientId}`; use for tests or alternate bases */
  dashboardHrefBase?: string
  /** Base URL for lab-related anchors (defaults to `/dashboard/{patientId}/labs`). */
  labsHrefBase?: string
  /** When true (portal session + care tables), add a low-priority row linking to the document upload card */
  showPortalLabUploadHint?: boolean
}): PatientUpcomingEvent[] {
  const { patientId, treatmentsByProgramId, refillEligible, checkinPrompts, labOrders } = input
  const accountRoot = (input.dashboardHrefBase ?? `/dashboard/${patientId}`).replace(/\/$/, '')
  const programsHub = `${accountRoot}/programs`
  const messagesHub = `${accountRoot}/messages`
  const labsHub = (input.labsHrefBase ?? `${accountRoot}/labs`).replace(/\/$/, '')
  const events: PatientUpcomingEvent[] = []
  const refillDueIds = new Set(refillEligible.map((r) => r.id))
  const treatments = flattenTreatments(treatmentsByProgramId)
  const ptMap = programTypeByCareProgramId(input.programs ?? [])
  const treatmentById = new Map(treatments.map((t) => [t.id, t]))

  for (const r of refillEligible) {
    const t = treatmentById.get(r.id)
    const programType = t ? (ptMap.get(t.care_program_id) ?? null) : null
    const copy = refillDueNowCopy(r.display_name, programType)
    events.push({
      id: `refill-now-${r.id}`,
      kind: 'refill_due_now',
      title: copy.title,
      subtitle: copy.subtitle,
      due_at: null,
      urgency: 'action',
      deepLinkHref: `${programsHub}#refill-request`,
    })
  }

  for (const p of checkinPrompts) {
    events.push({
      id: `checkin-prompt-${p.treatmentItemId}`,
      kind: 'checkin_due',
      title: p.promptTitle,
      subtitle: p.promptDescription,
      due_at: null,
      urgency: 'action',
      deepLinkHref: `${programsHub}#treatment-checkin`,
    })
  }

  for (const t of treatments) {
    const md = (t.metadata ?? {}) as Record<string, unknown>
    const programHref = `${programsHub}/${t.care_program_id}`
    const programType = ptMap.get(t.care_program_id) ?? null

    const refillAt = typeof md.next_refill_due_at === 'string' ? md.next_refill_due_at.trim() : ''
    if (refillAt && parseIsoDate(refillAt) && !refillDueIds.has(t.id)) {
      const day = daysUntil(refillAt)
      const dateLabel = formatIsoDateUs(refillAt)
      const win = refillWindowCopy(t.display_name, programType, day, dateLabel)
      events.push({
        id: `refill-window-${t.id}`,
        kind: 'refill_window',
        title: win.title,
        subtitle: win.subtitle,
        due_at: parseIsoDate(refillAt),
        urgency: urgencyForDate(refillAt),
        deepLinkHref: programHref,
      })
    }

    const visitAt = typeof md.next_visit_at === 'string' ? md.next_visit_at.trim() : ''
    if (visitAt && parseIsoDate(visitAt)) {
      const day = daysUntil(visitAt)
      const dateLabel = formatIsoDateUs(visitAt)
      events.push({
        id: `visit-${t.id}`,
        kind: 'visit_followup',
        title:
          day === null
            ? `Follow-up visit: ${t.display_name}`
            : day < 0
              ? `Follow-up visit target passed (${dateLabel})`
              : day === 0
                ? `Follow-up visit: today (${dateLabel})`
                : day === 1
                  ? `Follow-up visit in 1 day (${dateLabel})`
                  : `Follow-up visit in ${day} days (${dateLabel})`,
        subtitle: 'Complete when you can; message your team if you need help scheduling.',
        due_at: parseIsoDate(visitAt),
        urgency: urgencyForDate(visitAt),
        deepLinkHref: `${messagesHub}#patient-support`,
      })
    }

    const checkinAt = typeof md.next_checkin_at === 'string' ? md.next_checkin_at.trim() : ''
    if (checkinAt && parseIsoDate(checkinAt)) {
      const day = daysUntil(checkinAt)
      const dateLabel = formatIsoDateUs(checkinAt)
      events.push({
        id: `scheduled-checkin-${t.id}`,
        kind: 'checkin_due',
        title:
          day === null
            ? `Check-in reminder: ${t.display_name}`
            : day < 0
              ? `Check-in reminder passed (${dateLabel})`
              : day === 0
                ? `Check-in reminder: today (${dateLabel})`
                : day === 1
                  ? `Check-in reminder in 1 day (${dateLabel})`
                  : `Check-in reminder in ${day} days (${dateLabel})`,
        subtitle: 'Share progress and side effects so your team can fine-tune your plan.',
        due_at: parseIsoDate(checkinAt),
        urgency: urgencyForDate(checkinAt),
        deepLinkHref: `${programsHub}#treatment-checkin`,
      })
    }
  }

  for (const lab of labOrders) {
    const anchor = lab.orderDate ? parseIsoDate(lab.orderDate) : null
    const tests = lab.tests.filter(Boolean).join(' · ') || 'Lab requisition'
    events.push({
      id: `lab-${lab.id}`,
      kind: 'lab_order',
      title: `Lab requisition on file: ${tests}`,
      subtitle: lab.orderDate
        ? `Order dated ${formatIsoDateUs(lab.orderDate)} — bring to the lab if your team instructed you to.`
        : 'Lab requisition available in your dashboard.',
      due_at: anchor,
      urgency: 'info',
      deepLinkHref: `${labsHub}#lab-requisitions`,
    })
  }

  if (input.showPortalLabUploadHint) {
    events.push({
      id: 'portal-lab-document-upload',
      kind: 'portal_lab_upload',
      title: 'Upload outside lab or imaging results',
      subtitle: 'PDF or photos from another lab or hospital — we will attach them to your chart.',
      due_at: '2099-12-31',
      urgency: 'info',
      deepLinkHref: `${labsHub}#lab-document-upload`,
    })
  }

  events.sort((a, b) => {
    const aNull = a.due_at === null ? 0 : 1
    const bNull = b.due_at === null ? 0 : 1
    if (aNull !== bNull) return aNull - bNull
    if (a.due_at && b.due_at) {
      const ta = new Date(a.due_at).getTime()
      const tb = new Date(b.due_at).getTime()
      if (ta !== tb) return ta - tb
    }
    return a.id.localeCompare(b.id)
  })

  return events
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

/** Published lab requisitions visible to the patient (existing `lab_orders` query). */
export async function getPublishedLabOrderSummariesForPatient(patientId: string): Promise<LabOrderInput[]> {
  try {
    const admin = createAdminClient()
    const { data, error } = await admin
      .from('lab_orders')
      .select('id, order_date, tests')
      .eq('patient_id', patientId)
      .not('published_to_patient_at', 'is', null)
      .order('created_at', { ascending: false })
    if (error) {
      if (isMissingRelationError(error)) return []
      console.error('fetchPublishedLabOrderSummaries', error)
      return []
    }
    const out: LabOrderInput[] = []
    for (const row of data ?? []) {
      const testsRaw = Array.isArray(row.tests) ? (row.tests as Array<Record<string, unknown>>) : []
      const tests = testsRaw.map((test) => {
        const label = typeof test.label === 'string' ? test.label : null
        const code = typeof test.code === 'string' ? test.code : ''
        return label || labelLabTest(code)
      })
      out.push({
        id: row.id as string,
        orderDate: typeof row.order_date === 'string' ? row.order_date : '',
        tests,
      })
    }
    return out
  } catch (e) {
    console.error('fetchPublishedLabOrderSummaries', e)
    return []
  }
}

/** Loads care, refill, check-in, and published lab data and returns merged upcoming events (internal tools, or when you do not already have dashboard payloads). */
export async function loadPatientUpcomingEvents(patientId: string): Promise<PatientUpcomingEvent[]> {
  const [careOverview, refillEligible, checkinPrompts, labOrders] = await Promise.all([
    getPatientCareOverview(patientId),
    getPatientRefillEligibleTreatments(patientId),
    getPatientTreatmentCheckinPrompts(patientId),
    getPublishedLabOrderSummariesForPatient(patientId),
  ])
  return buildPatientUpcomingEvents({
    patientId,
    treatmentsByProgramId: careOverview.treatmentsByProgramId,
    refillEligible,
    checkinPrompts,
    labOrders,
    programs: careOverview.programs,
  })
}

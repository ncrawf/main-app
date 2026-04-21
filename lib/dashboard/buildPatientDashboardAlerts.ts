import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'
import type { TreatmentReorderReadinessRow } from '@/lib/dashboard/computeTreatmentReorderReadiness'

export type PatientDashboardAlertKind =
  | 'reorder'
  | 'checkin'
  | 'lab'
  | 'refill_progress'
  | 'window'
  | 'visit'
  | 'other'

export type PatientDashboardAlert = {
  /** Stable id for dismiss + dedupe */
  key: string
  kind: PatientDashboardAlertKind
  title: string
  body: string
  href: string
  /** Lower sorts first (more urgent) */
  priority: number
  tone: 'default' | 'success' | 'warning' | 'info'
}

const KIND_PRIORITY: Record<PatientDashboardAlertKind, number> = {
  reorder: 0,
  checkin: 1,
  refill_progress: 2,
  lab: 3,
  window: 4,
  visit: 5,
  other: 8,
}

function kindFromReorderState(state: TreatmentReorderReadinessRow['state']): PatientDashboardAlertKind {
  switch (state) {
    case 'reorder_ready':
      return 'reorder'
    case 'needs_checkin':
      return 'checkin'
    case 'in_refill_review':
      return 'refill_progress'
    case 'reorder_window':
      return 'window'
    default:
      return 'other'
  }
}

function toneFromReorderState(state: TreatmentReorderReadinessRow['state']): PatientDashboardAlert['tone'] {
  switch (state) {
    case 'reorder_ready':
      return 'success'
    case 'needs_checkin':
      return 'warning'
    case 'in_refill_review':
      return 'info'
    case 'reorder_window':
      return 'default'
    default:
      return 'default'
  }
}

/**
 * Unified “Updates” surface: reorder strip rows + high-signal upcoming rows + published labs.
 * Caller filters `dismissedKeys` from DB for this patient.
 */
export function buildPatientDashboardAlerts(input: {
  reorderRows: TreatmentReorderReadinessRow[]
  /** Optional: fold in top upcoming events not already covered by reorder rows */
  upcomingEvents: PatientUpcomingEvent[]
  labOrders: Array<{ id: string; orderDate: string; tests: string[] }>
  dismissedKeys: Set<string>
  /** e.g. `/dashboard/{patientId}` for fragment links */
  dashboardHref: string
}): PatientDashboardAlert[] {
  const { reorderRows, upcomingEvents, labOrders, dismissedKeys } = input
  const base = input.dashboardHref.replace(/#$/, '').replace(/\/$/, '')
  const out: PatientDashboardAlert[] = []
  const coveredTreatments = new Set<string>()

  for (const row of reorderRows) {
    const kind = kindFromReorderState(row.state)
    const key = `readiness:${row.treatmentItemId}:${row.state}`
    if (dismissedKeys.has(key)) continue
    coveredTreatments.add(row.treatmentItemId)
    out.push({
      key,
      kind,
      title: row.headline,
      body: row.detail,
      href: row.href,
      priority: KIND_PRIORITY[kind] * 10 + row.sortKey,
      tone: toneFromReorderState(row.state),
    })
  }

  let labCount = 0
  const maxLabs = 5
  for (const lab of labOrders) {
    if (labCount >= maxLabs) break
    const key = `lab:${lab.id}`
    if (dismissedKeys.has(key)) continue
    labCount += 1
    const tests = lab.tests.filter(Boolean).join(' · ') || 'Lab requisition'
    out.push({
      key,
      kind: 'lab',
      title: 'New lab requisition',
      body: `${tests}${lab.orderDate ? ` · order dated ${lab.orderDate}` : ''}.`,
      href: `${base}#lab-requisitions`,
      priority: KIND_PRIORITY.lab * 10,
      tone: 'info',
    })
  }

  let upcomingAdded = 0
  const upcomingCap = 8
  for (const ev of upcomingEvents) {
    if (upcomingAdded >= upcomingCap) break
    if (ev.kind === 'refill_due_now' || ev.kind === 'refill_window') {
      const tid = ev.id.startsWith('refill-now-')
        ? ev.id.slice('refill-now-'.length)
        : ev.id.startsWith('refill-window-')
          ? ev.id.slice('refill-window-'.length)
          : null
      if (tid && coveredTreatments.has(tid)) continue
    }
    if (ev.kind === 'checkin_due' && ev.id.startsWith('checkin-prompt-')) {
      const tid = ev.id.slice('checkin-prompt-'.length)
      if (coveredTreatments.has(tid)) continue
    }
    const key = `upcoming:${ev.id}`
    if (dismissedKeys.has(key)) continue
    if (ev.kind === 'lab_order') continue

    const kind: PatientDashboardAlertKind =
      ev.kind === 'visit_followup'
        ? 'visit'
        : ev.kind === 'checkin_due'
          ? 'checkin'
          : ev.kind === 'portal_lab_upload'
            ? 'lab'
            : 'other'
    out.push({
      key,
      kind,
      title: ev.title,
      body: ev.subtitle ?? '',
      href: ev.deepLinkHref,
      priority: KIND_PRIORITY[kind] * 10 + 5 + (ev.urgency === 'action' ? 0 : ev.urgency === 'soon' ? 1 : 2),
      tone: ev.urgency === 'action' ? 'warning' : ev.urgency === 'soon' ? 'info' : 'default',
    })
    upcomingAdded += 1
  }

  out.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority
    return a.title.localeCompare(b.title)
  })
  return out
}

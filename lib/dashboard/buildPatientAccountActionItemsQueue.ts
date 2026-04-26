import type { PatientDashboardAlert } from '@/lib/dashboard/buildPatientDashboardAlerts'
import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'
import type { PatientCareProgramCard } from '@/lib/dashboard/getPatientCareOverview'
import type { TreatmentReorderReadinessRow } from '@/lib/dashboard/computeTreatmentReorderReadiness'

export type PatientAccountActionItemRow = PatientDashboardAlert & {
  programContext: string | null
}

function programTitle(programs: PatientCareProgramCard[], careProgramId: string): string | null {
  const p = programs.find((x) => x.id === careProgramId)
  if (!p) return null
  return p.title?.trim() || p.program_type.replace(/_/g, ' ')
}

function contextForAlert(
  alert: PatientDashboardAlert,
  programs: PatientCareProgramCard[],
  reorderRows: TreatmentReorderReadinessRow[],
  upcomingEvents: PatientUpcomingEvent[]
): string | null {
  if (alert.key.startsWith('readiness:')) {
    const parts = alert.key.split(':')
    const tid = parts[1]
    if (!tid) return null
    const row = reorderRows.find((r) => r.treatmentItemId === tid)
    if (!row) return null
    const pt = programTitle(programs, row.careProgramId)
    return pt ? `${row.displayName} · ${pt}` : row.displayName
  }
  if (alert.key.startsWith('upcoming:')) {
    const eid = alert.key.slice('upcoming:'.length)
    const ev = upcomingEvents.find((e) => e.id === eid)
    return ev?.title ?? null
  }
  if (alert.key.startsWith('lab:')) {
    return 'Lab requisition'
  }
  return null
}

/**
 * Canonical ordered queue of derived patient-facing actions (membership gate + `dashboardAlerts`).
 * Same source drives the account shell banner + Action Items tab via `resolvePatientActionSurfaces`.
 */
export function buildPatientAccountActionItemsQueue(input: {
  patientId: string
  membershipBlocksCare: boolean
  dashboardAlerts: PatientDashboardAlert[]
  reorderRows: TreatmentReorderReadinessRow[]
  upcomingEvents: PatientUpcomingEvent[]
  programs: PatientCareProgramCard[]
}): PatientAccountActionItemRow[] {
  const { patientId, membershipBlocksCare, dashboardAlerts, reorderRows, upcomingEvents, programs } = input
  const out: PatientAccountActionItemRow[] = []

  if (membershipBlocksCare) {
    out.push({
      key: 'membership:payment_issue',
      kind: 'other',
      title: 'Update payment to continue treatment',
      body: 'There is a billing issue affecting continuation access.',
      href: `/dashboard/${patientId}/profile`,
      priority: -1,
      tone: 'warning',
      programContext: 'Account & billing',
    })
  }

  for (const a of dashboardAlerts) {
    out.push({
      ...a,
      programContext: contextForAlert(a, programs, reorderRows, upcomingEvents),
    })
  }

  return out
}

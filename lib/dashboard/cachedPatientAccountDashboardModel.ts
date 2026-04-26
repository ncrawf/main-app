import { cache } from 'react'
import { buildPatientDashboardAlerts } from '@/lib/dashboard/buildPatientDashboardAlerts'
import {
  buildPatientUpcomingEvents,
  getPublishedLabOrderSummariesForPatient,
} from '@/lib/dashboard/buildPatientUpcomingEvents'
import { buildPatientAccountActionItemsQueue } from '@/lib/dashboard/buildPatientAccountActionItemsQueue'
import { buildPatientReorderReadinessSnapshot } from '@/lib/dashboard/patientReorderReadinessContract'
import { getPatientDashboardAlertDismissals } from '@/lib/dashboard/getPatientDashboardAlertDismissals'
import { getPatientCareOverview } from '@/lib/dashboard/getPatientCareOverview'
import { getPatientPlanMembership } from '@/lib/dashboard/getPatientPlanMembership'
import { getPatientRefillEligibleTreatments } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import { getPatientTreatmentCheckinPrompts } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import { selectPrimaryJourney } from '@/lib/dashboard/selectPrimaryJourney'
import { nextSignal } from '@/lib/dashboard/patientAccountDominantPresentation'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import type { PatientDashboardAlert } from '@/lib/dashboard/buildPatientDashboardAlerts'
import type { PatientAccountActionItemRow } from '@/lib/dashboard/buildPatientAccountActionItemsQueue'

export type PatientAccountDominantAction =
  | PatientDashboardAlert
  | {
      key: string
      kind: 'other'
      title: string
      body: string
      href: string
      priority: number
      tone: 'warning'
    }

export type CachedPatientAccountDashboardModel = {
  patientId: string
  portalSession: boolean
  careOverview: Awaited<ReturnType<typeof getPatientCareOverview>>
  refillEligible: Awaited<ReturnType<typeof getPatientRefillEligibleTreatments>>
  checkinPrompts: Awaited<ReturnType<typeof getPatientTreatmentCheckinPrompts>>
  dismissedAlertKeys: Awaited<ReturnType<typeof getPatientDashboardAlertDismissals>>
  upcomingEvents: ReturnType<typeof buildPatientUpcomingEvents>
  reorderSnapshot: ReturnType<typeof buildPatientReorderReadinessSnapshot>
  dashboardAlerts: ReturnType<typeof buildPatientDashboardAlerts>
  membership: Awaited<ReturnType<typeof getPatientPlanMembership>>
  /** Mirrors highest-priority derived action (membership gate or `dashboardAlerts[0]`). Prefer `actionItemsQueue[0]` for UI — same ordering as the Action Items queue. */
  dominant: PatientAccountDominantAction | null
  attentionPrograms: number
  journeySelection: ReturnType<typeof selectPrimaryJourney>
  additionalJourneyCount: number
  nextUp: string | null
  /** Membership + full `dashboardAlerts` list with display context for Action Items. */
  actionItemsQueue: PatientAccountActionItemRow[]
}

/**
 * Single request-scoped loader for the patient account shell + Home composition.
 * Uses React `cache()` so layout (banner) and `home/page` share one run per navigation.
 * All building blocks are existing dashboard modules — no new business rules.
 */
export const getCachedPatientAccountDashboardModel = cache(
  async (patientId: string): Promise<CachedPatientAccountDashboardModel> => {
    const portalSession = await assertPatientPortalSessionOnly(patientId)
    const careOverview = await getPatientCareOverview(patientId)

    const [refillEligible, checkinPrompts, dismissedAlertKeys, labOrderSummaries] = await Promise.all([
      portalSession ? getPatientRefillEligibleTreatments(patientId) : Promise.resolve([]),
      portalSession ? getPatientTreatmentCheckinPrompts(patientId) : Promise.resolve([]),
      getPatientDashboardAlertDismissals(patientId),
      getPublishedLabOrderSummariesForPatient(patientId),
    ])

    const accountRoot = `/dashboard/${patientId}`
    const programsHub = `${accountRoot}/programs`
    const labsHub = `${accountRoot}/labs`

    const upcomingEvents = buildPatientUpcomingEvents({
      patientId,
      treatmentsByProgramId: careOverview.treatmentsByProgramId,
      refillEligible,
      checkinPrompts,
      labOrders: labOrderSummaries,
      programs: careOverview.programs,
      showPortalLabUploadHint: portalSession,
      dashboardHrefBase: accountRoot,
      labsHrefBase: labsHub,
    })

    const reorderSnapshot = buildPatientReorderReadinessSnapshot({
      patientId,
      careOverview,
      portalSession,
      refillEligible,
      checkinPrompts,
    })

    const dashboardAlerts = buildPatientDashboardAlerts({
      reorderRows: reorderSnapshot.treatments,
      upcomingEvents,
      labOrders: labOrderSummaries,
      dismissedKeys: dismissedAlertKeys,
      dashboardHref: programsHub,
      labRequisitionsHrefBase: labsHub,
    })

    const membership = await getPatientPlanMembership(
      patientId,
      Array.from(new Set(careOverview.programs.map((program) => program.program_type)))
    )
    const membershipBlocksCare = membership.status === 'payment_issue'
    const dominant: PatientAccountDominantAction | null = membershipBlocksCare
      ? {
          key: 'membership:payment_issue',
          kind: 'other',
          title: 'Update payment to continue treatment',
          body: 'There is a billing issue affecting continuation access.',
          href: `/dashboard/${patientId}/profile`,
          priority: -1,
          tone: 'warning',
        }
      : (dashboardAlerts[0] ?? null)

    const attentionPrograms = careOverview.programs.filter((p) => p.needs_attention_now).length
    const journeySelection = selectPrimaryJourney({
      programs: careOverview.programs,
      upcomingEvents,
    })
    const additionalJourneyCount = journeySelection.additionalActiveLabels.length

    const nextUp = nextSignal(upcomingEvents)

    const actionItemsQueue = buildPatientAccountActionItemsQueue({
      patientId,
      membershipBlocksCare,
      dashboardAlerts,
      reorderRows: reorderSnapshot.treatments,
      upcomingEvents,
      programs: careOverview.programs,
    })

    return {
      patientId,
      portalSession,
      careOverview,
      refillEligible,
      checkinPrompts,
      dismissedAlertKeys,
      upcomingEvents,
      reorderSnapshot,
      dashboardAlerts,
      membership,
      dominant,
      attentionPrograms,
      journeySelection,
      additionalJourneyCount,
      nextUp,
      actionItemsQueue,
    }
  }
)

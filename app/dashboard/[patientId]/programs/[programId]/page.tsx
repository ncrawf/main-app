import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import {
  formatDosageForPatient,
  formatLatestRefillRequestStatus,
  formatSchedulingHintsFromMetadata,
  formatTenureLine,
  humanizeToken,
} from '@/lib/dashboard/formatCarePatientView'
import { getPatientCareProgramDetail } from '@/lib/dashboard/getPatientCareOverview'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'
import { parsePathwayDecisionCardsFromPayload, type PathwayDecisionCard } from '@/lib/pathways/decisionContract'
import { AI_GOVERNANCE_POLICY } from '@/lib/ai/governancePolicy'
import { PathwayDecisionCardView } from '@/components/dashboard/PathwayDecisionCardView'
import { PatientSupportPanel } from '@/components/dashboard/PatientSupportPanel'
import { PatientPortalDocumentUploadPanel } from '@/components/dashboard/PatientPortalDocumentUploadPanel'
import {
  PatientContinuationStateBlock,
  pickVisibleContinuationStatus,
} from '@/components/dashboard/PatientContinuationStateBlock'
import {
  buildPatientUpcomingEvents,
  type PatientUpcomingEvent,
} from '@/lib/dashboard/buildPatientUpcomingEvents'
import { getPatientRefillEligibleTreatments } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import { getPatientTreatmentCheckinPrompts } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import { getPatientCommerceHistory } from '@/lib/dashboard/getPatientCommerceHistory'

export const dynamic = 'force-dynamic'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type Props = {
  params: Promise<{ patientId: string; programId: string }>
}

type ReviewStatus = 'draft' | 'reviewed_accepted' | 'reviewed_rejected' | 'superseded'

type ProgramPathwayDecisionHistory = {
  reviewId: string
  status: ReviewStatus
  reviewedAt: string | null
  reviewedBy: string | null
  createdAt: string
  decision: PathwayDecisionCard
}

type WeightPoint = {
  date: string
  weightLb: number
}

type ActionBanner = {
  title: string
  detail: string
  href: string
  ctaLabel: string
}

function asReviewStatus(value: string): ReviewStatus {
  if (value === 'reviewed_accepted') return 'reviewed_accepted'
  if (value === 'reviewed_rejected') return 'reviewed_rejected'
  if (value === 'superseded') return 'superseded'
  return 'draft'
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function mapEventToCtaLabel(event: PatientUpcomingEvent): string {
  switch (event.kind) {
    case 'refill_due_now':
    case 'refill_window':
      return 'Open refill actions'
    case 'checkin_due':
      return 'Complete quick check-in'
    case 'lab_order':
    case 'portal_lab_upload':
      return 'Open labs & documents'
    case 'visit_followup':
      return 'Message your care team'
    default:
      return 'Open next step'
  }
}

function buildActionBanner(
  programStatus: string,
  upcoming: PatientUpcomingEvent[],
  patientId: string,
  programId: string
): ActionBanner {
  const topAction =
    upcoming.find((ev) => ev.urgency === 'action') ??
    upcoming.find((ev) => ev.urgency === 'soon') ??
    null
  if (topAction) {
    return {
      title: topAction.title,
      detail: topAction.subtitle ?? 'This is the highest-impact step to take right now.',
      href: topAction.deepLinkHref,
      ctaLabel: mapEventToCtaLabel(topAction),
    }
  }

  if (programStatus === 'pending_approval' || programStatus === 'under_review') {
    return {
      title: 'Your clinician is reviewing your plan',
      detail: 'You are in review now. Once approved, we move directly to prescription and shipment.',
      href: `/dashboard/${patientId}/programs/${programId}#your-plan`,
      ctaLabel: 'See review status',
    }
  }

  if (programStatus === 'approved' || programStatus === 'active') {
    return {
      title: 'You are on track',
      detail: 'Stay consistent this week. We will prompt you exactly when a refill or check-in is due.',
      href: `/dashboard/${patientId}/programs/${programId}#program-coming-up`,
      ctaLabel: 'View next steps',
    }
  }

  return {
    title: 'Your program is moving forward',
    detail: 'No immediate action right now. We will surface your next required step here.',
    href: `/dashboard/${patientId}/programs/${programId}#program-support`,
    ctaLabel: 'Contact support',
  }
}

function parseWeightPoint(rawCheckin: unknown, createdAt: string): WeightPoint | null {
  if (!rawCheckin || typeof rawCheckin !== 'object' || Array.isArray(rawCheckin)) return null
  const checkin = rawCheckin as Record<string, unknown>
  const weightRaw = checkin.weight_lb
  const weight = Number(weightRaw)
  if (!Number.isFinite(weight) || weight < 70 || weight > 700) return null
  const date = createdAt.slice(0, 10)
  return { date, weightLb: Math.round(weight) }
}

async function loadWeightPoints(patientId: string, treatmentItemIds: string[]): Promise<WeightPoint[]> {
  if (treatmentItemIds.length === 0) return []
  try {
    const admin = createAdminClient()
    const { data, error } = await admin
      .from('patient_treatment_checkins')
      .select('created_at, checkin, treatment_item_id')
      .eq('patient_id', patientId)
      .in('treatment_item_id', treatmentItemIds)
      .order('created_at', { ascending: false })
      .limit(50)
    if (error) {
      if (!isMissingRelationError(error)) {
        console.error('loadWeightPoints', error)
      }
      return []
    }
    const out = (data ?? [])
      .map((row) =>
        parseWeightPoint(
          row.checkin,
          typeof row.created_at === 'string' ? row.created_at : new Date().toISOString()
        )
      )
      .filter((v): v is WeightPoint => !!v)
    out.sort((a, b) => a.date.localeCompare(b.date))
    return out
  } catch (e) {
    console.error('loadWeightPoints', e)
    return []
  }
}

function weightTrendSummary(points: WeightPoint[]): { label: string; delta: number | null } {
  if (points.length < 2) return { label: 'Not enough data yet', delta: null }
  const prev = points[points.length - 2]!
  const last = points[points.length - 1]!
  const delta = Number((last.weightLb - prev.weightLb).toFixed(1))
  if (delta < 0) return { label: `${Math.abs(delta)} lb down since last check-in`, delta }
  if (delta > 0) return { label: `${delta} lb up since last check-in`, delta }
  return { label: 'No change since last check-in', delta: 0 }
}

function directionalStatusCopy(status: string): { state: string; expected: string; next: string } {
  switch (status) {
    case 'pending_approval':
    case 'under_review':
      return {
        state: 'Review in progress',
        expected: 'Usually completed within about 24 hours',
        next: 'Next milestone: prescription + shipment',
      }
    case 'approved':
      return {
        state: 'Approved',
        expected: 'Fulfillment updates should appear shortly',
        next: 'Next milestone: pharmacy handoff + tracking',
      }
    case 'active':
      return {
        state: 'Active',
        expected: 'Weekly progress rhythm',
        next: 'Next milestone: check-ins + refill windows',
      }
    case 'paused':
      return {
        state: 'Paused',
        expected: 'Provider follow-up needed',
        next: 'Next milestone: resolve hold reason and restart',
      }
    default:
      return {
        state: humanizeToken(status),
        expected: 'Status updates as your care team advances the plan',
        next: 'Next milestone appears in the action banner',
      }
  }
}

async function getProgramPathwayDecisionHistory(
  patientId: string,
  pathwayId: string
): Promise<ProgramPathwayDecisionHistory[]> {
  let admin
  try {
    admin = createAdminClient()
  } catch {
    return []
  }

  const visibilityStatus = AI_GOVERNANCE_POLICY.patientVisibilityRequiresReviewedAccepted
    ? 'reviewed_accepted'
    : null

  let q = admin
    .from('patient_chart_ai_reviews')
    .select('id, status, reviewed_at, reviewed_by_staff_id, output_payload, created_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
    .limit(25)
  if (visibilityStatus) q = q.eq('status', visibilityStatus)

  const { data, error } = await q
  if (error || !data) return []

  const reviewerIds = Array.from(
    new Set(
      data
        .map((r) => (typeof r.reviewed_by_staff_id === 'string' ? r.reviewed_by_staff_id : null))
        .filter((v): v is string => !!v)
    )
  )
  const reviewerNameById = new Map<string, string>()
  if (reviewerIds.length > 0) {
    const { data: staffRows } = await admin.from('staff_profiles').select('id, display_name').in('id', reviewerIds)
    for (const row of staffRows ?? []) {
      reviewerNameById.set(row.id, row.display_name?.trim() || row.id)
    }
  }

  const out: ProgramPathwayDecisionHistory[] = []
  for (const row of data) {
    const status = asReviewStatus(row.status)
    const cards = parsePathwayDecisionCardsFromPayload(
      row.output_payload,
      status,
      typeof row.reviewed_by_staff_id === 'string' ? reviewerNameById.get(row.reviewed_by_staff_id) ?? null : null,
      typeof row.reviewed_at === 'string' ? row.reviewed_at : null
    )
    for (const card of cards) {
      if (card.pathway_id !== pathwayId) continue
      out.push({
        reviewId: row.id,
        status,
        reviewedAt: typeof row.reviewed_at === 'string' ? row.reviewed_at : null,
        reviewedBy:
          typeof row.reviewed_by_staff_id === 'string' ? reviewerNameById.get(row.reviewed_by_staff_id) ?? null : null,
        createdAt: row.created_at,
        decision: card,
      })
    }
  }
  return out
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { patientId, programId } = await params
  if (!UUID_RE.test(patientId) || !UUID_RE.test(programId)) {
    return { title: 'Program | MAIN', robots: { index: false, follow: false } }
  }
  if (!(await assertPatientDashboardAccess(patientId))) {
    return { title: 'Program | MAIN', robots: { index: false, follow: false } }
  }
  const detail = await getPatientCareProgramDetail(patientId, programId)
  const title =
    detail.ok && detail.program.title?.trim()
      ? detail.program.title.trim()
      : detail.ok
        ? humanizeToken(detail.program.program_type)
        : 'Program'
  return {
    title: `${title} | MAIN`,
    description: 'Treatments and refill status for this program.',
    robots: { index: false, follow: false },
  }
}

export default async function PatientProgramDetailPage({ params }: Props) {
  const { patientId, programId } = await params

  if (!UUID_RE.test(patientId) || !UUID_RE.test(programId)) {
    notFound()
  }

  if (!(await assertPatientDashboardAccess(patientId))) {
    redirect('/dashboard?session=required')
  }

  const detail = await getPatientCareProgramDetail(patientId, programId)
  if (!detail.ok) {
    notFound()
  }

  const { program, treatments } = detail
  const [refillEligible, checkinPrompts, commerceHistory, weightPoints] = await Promise.all([
    getPatientRefillEligibleTreatments(patientId),
    getPatientTreatmentCheckinPrompts(patientId),
    getPatientCommerceHistory(patientId),
    loadWeightPoints(
      patientId,
      treatments.map((t) => t.id)
    ),
  ])
  const programTitle = program.title?.trim() || humanizeToken(program.program_type)
  const programTenure = formatTenureLine(program.started_at ?? program.created_at, 'Program started')
  const pathwayHistory = await getProgramPathwayDecisionHistory(patientId, program.program_type)
  const latestApproved = pathwayHistory.find((h) => h.status === 'reviewed_accepted') ?? null
  const historical = latestApproved ? pathwayHistory.filter((h) => h.reviewId !== latestApproved.reviewId) : pathwayHistory
  const treatmentById = new Set(treatments.map((t) => t.id))
  const scopedRefillEligible = refillEligible.filter((r) => treatmentById.has(r.id))
  const scopedCheckins = checkinPrompts.filter((p) => treatmentById.has(p.treatmentItemId))
  const upcomingEvents = buildPatientUpcomingEvents({
    patientId,
    treatmentsByProgramId: { [program.id]: treatments },
    refillEligible: scopedRefillEligible,
    checkinPrompts: scopedCheckins,
    labOrders: [],
    programs: [program],
  }).slice(0, 5)
  const actionBanner = buildActionBanner(program.status, upcomingEvents, patientId, programId)
  const statusCopy = directionalStatusCopy(program.status)
  const recentWeightPoints = weightPoints.slice(-6)
  const weightTrend = weightTrendSummary(recentWeightPoints)
  const latestWeight = recentWeightPoints[recentWeightPoints.length - 1] ?? null
  const continuationVisibilityStatus = pickVisibleContinuationStatus(treatments.map((t) => t.latest_refill_status))
  const continuationInsights: string[] = []
  if (continuationVisibilityStatus) {
    if (weightTrend.delta !== null) {
      if (weightTrend.delta < 0) {
        continuationInsights.push(`You are down ${Math.abs(weightTrend.delta)} lb since your last update.`)
      } else if (weightTrend.delta > 0) {
        continuationInsights.push(`You are up ${weightTrend.delta} lb since your last update.`)
      } else {
        continuationInsights.push('Your weight is steady since your last update.')
      }
    }
    if (recentWeightPoints.length >= 3) {
      continuationInsights.push('Recent check-ins are coming in consistently.')
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">MAIN</p>
            <h1 className="text-xl font-semibold tracking-tight">{programTitle}</h1>
            <p className="mt-1 text-sm text-neutral-600">
              {humanizeToken(program.program_type)} · {humanizeToken(program.status)}
            </p>
          </div>
          <Link
            href={`/dashboard/${patientId}`}
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-6 py-10">
        <section
          id="program-action"
          className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Do this now</p>
          <h2 className="mt-1 text-lg font-semibold text-emerald-950">{actionBanner.title}</h2>
          <p className="mt-2 text-sm text-emerald-900">{actionBanner.detail}</p>
          <div className="mt-4">
            <Link
              href={actionBanner.href}
              className="inline-flex rounded-md bg-emerald-900 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              {actionBanner.ctaLabel}
            </Link>
          </div>
        </section>

        <PatientContinuationStateBlock status={continuationVisibilityStatus} insights={continuationInsights} />

        <section id="your-plan" className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Your plan</h2>
          <p className="mt-1 text-sm text-neutral-700">{statusCopy.state}</p>
          <p className="mt-1 text-sm text-neutral-600">{statusCopy.expected}</p>
          <p className="mt-1 text-sm text-neutral-600">{statusCopy.next}</p>
        </section>

        <section id="program-progress" className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Progress</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Your momentum at a glance: latest weight, short trend, recent check-ins.
          </p>
          {latestWeight ? (
            <div className="mt-4 space-y-2">
              <p className="text-2xl font-semibold text-neutral-900">{latestWeight.weightLb} lb</p>
              <p className="text-sm text-neutral-700">{weightTrend.label}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {recentWeightPoints.map((point) => (
                  <li
                    key={`${point.date}-${point.weightLb}`}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs text-neutral-700"
                  >
                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(point.date))}:{' '}
                    {point.weightLb} lb
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-3 text-sm text-neutral-600">
              No weight check-ins yet. Submit your first quick check-in to start your trend line.
            </p>
          )}
        </section>

        <section id="program-coming-up" className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Coming up</h2>
          <p className="mt-1 text-sm text-neutral-600">Only the next 3-5 actions that matter most.</p>
          {upcomingEvents.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {upcomingEvents.map((ev) => (
                <li key={ev.id} className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-neutral-900">{ev.title}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        ev.urgency === 'action'
                          ? 'bg-amber-100 text-amber-800'
                          : ev.urgency === 'soon'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {ev.urgency === 'action' ? 'Action' : ev.urgency === 'soon' ? 'Soon' : 'Info'}
                    </span>
                  </div>
                  {ev.subtitle ? <p className="mt-1 text-sm text-neutral-700">{ev.subtitle}</p> : null}
                  <div className="mt-2">
                    <Link href={ev.deepLinkHref} className="text-xs font-medium text-neutral-700 underline">
                      Take this step
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-neutral-600">No urgent tasks right now. Stay consistent and check in weekly.</p>
          )}
        </section>

        {latestApproved ? (
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Current recommendation</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Clinician-approved pathway summary and next-step actions.
            </p>
            <p className="mt-2 text-xs text-neutral-600">
              Effective{' '}
              {latestApproved.reviewedAt
                ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(latestApproved.reviewedAt)
                  )
                : new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(latestApproved.createdAt)
                  )}
              {latestApproved.reviewedBy ? ` · Reviewed by ${latestApproved.reviewedBy}` : ''}
            </p>
            <PathwayDecisionCardView decision={latestApproved.decision} showPathwayLabel={false} className="mt-3" />
          </section>
        ) : null}

        {programTenure ? (
          <p className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800">
            {programTenure}
          </p>
        ) : null}

        {treatments.length === 0 ? (
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Treatments</h2>
            <p className="mt-2 text-sm text-neutral-600">
              No treatment rows are linked to this program yet. Your clinician will attach medications and plans here
              when they are ready.
            </p>
          </section>
        ) : (
          <section className="space-y-6">
            <h2 className="text-sm font-semibold text-neutral-900">Treatments & refills</h2>
            <p className="text-sm text-neutral-600">
              Read-only clinical record plus “what happens next” guidance for each medication.
            </p>
            <ul className="space-y-6">
              {treatments.map((t) => {
                const dosage = formatDosageForPatient(t.dosage, t.metadata)
                const tenure = formatTenureLine(t.started_at ?? t.created_at, 'Treatment started')
                const scheduleHints = formatSchedulingHintsFromMetadata(t.metadata)
                const refillLine = formatLatestRefillRequestStatus(t.latest_refill_status)
                const directional = directionalStatusCopy(t.status)
                const hasExactDosage =
                  !(
                    dosage.lines.length === 1 &&
                    dosage.lines[0]?.includes('Your clinician will confirm the exact medication')
                  ) && dosage.lines.length > 0
                return (
                  <li
                    key={t.id}
                    className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-neutral-900">{t.display_name}</h3>
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                        {directional.state}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-neutral-500">{t.treatment_key}</p>
                    {tenure ? <p className="mt-3 text-sm text-neutral-700">{tenure}</p> : null}
                    <p className="mt-3 text-sm text-neutral-700">{directional.expected}</p>
                    <p className="mt-1 text-sm text-neutral-600">{directional.next}</p>
                    <p className="mt-2 text-sm text-neutral-700">{t.tracking_hint}</p>
                    {scheduleHints.length > 0 ? (
                      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-800">
                        {scheduleHints.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                    {refillLine ? <p className="mt-3 text-sm text-neutral-700">{refillLine}</p> : null}
                    <div className="mt-6 border-t border-neutral-100 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{dosage.headline}</p>
                      {hasExactDosage ? (
                        <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                          {dosage.lines.map((line) => (
                            <li key={line} className="leading-relaxed">
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <dl className="mt-3 space-y-2 text-sm text-neutral-800">
                          <div className="flex flex-wrap gap-2">
                            <dt className="font-medium text-neutral-700">Medication:</dt>
                            <dd>{t.display_name}</dd>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <dt className="font-medium text-neutral-700">Dose:</dt>
                            <dd>Pending clinician confirmation</dd>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <dt className="font-medium text-neutral-700">Route:</dt>
                            <dd>Pending clinician confirmation</dd>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <dt className="font-medium text-neutral-700">Instructions:</dt>
                            <dd>Pending clinician confirmation</dd>
                          </div>
                        </dl>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        )}

        {historical.length > 0 ? (
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Decision history</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Prior pathway recommendations and signoff trail.
            </p>
            <ul className="mt-3 space-y-2">
              {historical.slice(0, 8).map((item) => (
                <li key={item.reviewId} className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-neutral-700">
                      {humanizeToken(item.status)}
                    </span>
                  </div>
                  <PathwayDecisionCardView
                    decision={item.decision}
                    showPathwayLabel={false}
                    showWhatChanged={false}
                    showWhy={false}
                    showActions={false}
                  />
                  <p className="mt-1 text-xs text-neutral-600">
                    {item.reviewedAt
                      ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                          new Date(item.reviewedAt)
                        )
                      : new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                          new Date(item.createdAt)
                        )}
                    {item.reviewedBy ? ` · ${item.reviewedBy}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section id="program-optional" className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Optional enhancements</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Extra options to optimize results. Optional, and never blockers for your core plan.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Supplements</p>
              <p className="mt-1 text-sm text-neutral-800">
                {commerceHistory.orders.length > 0
                  ? 'You have prior supplement orders. Reorder only when your clinician recommends.'
                  : 'Consider supplements later, once treatment is active and stable.'}
              </p>
              <Link href="/shop/coq10" className="mt-2 inline-block text-xs font-medium text-neutral-700 underline">
                Explore supplements
              </Link>
            </article>
            <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">DEXA / imaging</p>
              <p className="mt-1 text-sm text-neutral-800">
                DEXA/body-composition scans are optional. Upload reports here if your clinician requests them.
              </p>
              <Link
                href={`/dashboard/${patientId}#lab-document-upload`}
                className="mt-2 inline-block text-xs font-medium text-neutral-700 underline"
              >
                Upload DEXA or imaging
              </Link>
            </article>
            <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">GLP-1 tips</p>
              <p className="mt-1 text-sm text-neutral-800">
                Watch for persistent nausea, vomiting, dehydration, or severe abdominal pain — message early, not late.
              </p>
              <Link
                href={`/dashboard/${patientId}#patient-support`}
                className="mt-2 inline-block text-xs font-medium text-neutral-700 underline"
              >
                Report an issue
              </Link>
            </article>
          </div>
          <div className="mt-4">
            <PatientPortalDocumentUploadPanel
              patientId={patientId}
              treatmentOptions={treatments.map((t) => ({ id: t.id, display_name: t.display_name }))}
            />
          </div>
        </section>

        <section id="program-support" className="space-y-3">
          <h2 className="text-sm font-semibold text-neutral-900">Support + control</h2>
          <p className="text-sm text-neutral-600">
            Message your prescriber, report issues, or request a callback anytime.
          </p>
          <PatientSupportPanel patientId={patientId} />
        </section>
      </div>
    </main>
  )
}

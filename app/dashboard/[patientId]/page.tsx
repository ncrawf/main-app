import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { PatientPortalSignOut } from '@/components/dashboard/PatientPortalSignOut'
import { PatientPortalDocumentUploadPanel } from '@/components/dashboard/PatientPortalDocumentUploadPanel'
import { PatientRefillRequestPanel } from '@/components/dashboard/PatientRefillRequestPanel'
import { PatientTreatmentCheckinPanel } from '@/components/dashboard/PatientTreatmentCheckinPanel'
import { PatientHistoryTabs } from '@/components/dashboard/PatientHistoryTabs'
import { PayForVisitButton } from '@/components/dashboard/PayForVisitButton'
import { PatientSupportPanel } from '@/components/dashboard/PatientSupportPanel'
import { Glp1Pipeline } from '@/components/dashboard/Glp1Pipeline'
import { PathwayDecisionCardView } from '@/components/dashboard/PathwayDecisionCardView'
import { PatientDashboardAlertCenter } from '@/components/dashboard/PatientDashboardAlertCenter'
import { PatientReorderReadinessStrip } from '@/components/dashboard/PatientReorderReadinessStrip'
import { PatientUpcomingSection } from '@/components/dashboard/PatientUpcomingSection'
import {
  PatientContinuationStateBlock,
  pickVisibleContinuationStatus,
} from '@/components/dashboard/PatientContinuationStateBlock'
import { getGlp1DashboardCopy } from '@/lib/dashboard/glp1StatusCopy'
import { deriveWorkflowStatusFromCare } from '@/lib/dashboard/deriveWorkflowStatusFromCare'
import { getPatientRefillEligibleTreatments } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import { getPatientTreatmentCheckinPrompts } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import { getPatientCommerceHistory } from '@/lib/dashboard/getPatientCommerceHistory'
import { PatientCareProgramCards } from '@/components/dashboard/PatientCareProgramCards'
import { buildPatientDashboardAlerts } from '@/lib/dashboard/buildPatientDashboardAlerts'
import { buildPatientUpcomingEvents } from '@/lib/dashboard/buildPatientUpcomingEvents'
import { buildPatientReorderReadinessSnapshot } from '@/lib/dashboard/patientReorderReadinessContract'
import { getPatientDashboardAlertDismissals } from '@/lib/dashboard/getPatientDashboardAlertDismissals'
import { getPatientCareOverview } from '@/lib/dashboard/getPatientCareOverview'
import { getPatientDashboard } from '@/lib/dashboard/getPatientDashboard'
import { getPatientRefillHistory } from '@/lib/dashboard/getPatientRefillHistory'
import { formatAddressBlock, formatDobUs, patientDisplayName } from '@/lib/dashboard/formatPatientDisplay'
import { maskEmail, maskPhoneE164 } from '@/lib/dashboard/maskContact'
import { labelLabTest } from '@/lib/labs/catalog'
import { parsePathwayDecisionCardsFromPayload, type PathwayDecisionCard } from '@/lib/pathways/decisionContract'
import { AI_GOVERNANCE_POLICY } from '@/lib/ai/governancePolicy'
import { assertPatientDashboardAccess, assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const CARE_PATHWAYS: Array<{ id: string; title: string; blurb: string }> = [
  {
    id: 'weight_loss',
    title: 'Weight loss / metabolic health',
    blurb: 'GLP-1 care, metabolic optimization, and structured follow-up.',
  },
  {
    id: 'ed',
    title: 'Erectile dysfunction',
    blurb: 'ED-focused review, medication options, and response tracking.',
  },
  {
    id: 'hair',
    title: 'Hair restoration',
    blurb: 'Hair-loss evaluation and treatment options with ongoing support.',
  },
  {
    id: 'hormone_peptide',
    title: 'Hormone / peptide support',
    blurb: 'Protocol-based hormone and peptide care with clinician oversight.',
  },
  {
    id: 'general_wellness',
    title: 'General wellness / longevity',
    blurb: 'Preventive and performance-focused care planning.',
  },
]

type Props = {
  params: Promise<{ patientId: string }>
  searchParams: Promise<{ welcome?: string; paid?: string; intake?: string }>
}

type IntakeAttachmentView = {
  file_name: string
  size_bytes: number
  uploaded_at: string
  signed_url: string | null
}

type IntakeProfileSummary = {
  submittedAt: string | null
  primaryPathway: string | null
  heightIn: number | null
  weightLb: number | null
  sexAssignedAtBirth: string | null
  genderIdentity: string | null
  medicalHistoryConditions: string[]
  medicalHistoryNotes: string | null
  surgicalHistoryItems: string[]
  surgicalHistoryNotes: string | null
  tobaccoUse: string | null
  alcoholUse: string | null
  marijuanaUse: string | null
  illicitDrugUse: string | null
  allergies: string | null
  currentMedications: string | null
  currentSupplements: string | null
  familyHistory: string | null
  attachments: IntakeAttachmentView[]
}

type LabOrderPortalView = {
  id: string
  status: string
  orderDate: string
  publishedAt: string | null
  tests: string[]
  signedUrl: string | null
}

type ClinicalVisitPortalView = {
  id: string
  visitType: string
  visitAt: string
  diagnosisCodes: string[]
  signedUrl: string | null
}

type ApprovedPathwayPlan = {
  reviewedAt: string | null
  reviewedBy: string | null
  cards: PathwayDecisionCard[]
}

function asTokenLabel(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function asText(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

function asInt(value: unknown): number | null {
  const n = Number(value)
  if (!Number.isFinite(n)) return null
  return Math.round(n)
}

function asTokenArray(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value
    .map((v) => (typeof v === 'string' ? v.trim() : ''))
    .filter(Boolean)
}

async function getPatientIntakeSummary(patientId: string): Promise<IntakeProfileSummary | null> {
  let admin
  try {
    admin = createAdminClient()
  } catch {
    return null
  }

  const { data: form } = await admin
    .from('forms')
    .select('id')
    .eq('key', 'glp1-intake')
    .order('version', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (!form?.id) return null

  const { data: submission } = await admin
    .from('form_submissions')
    .select('submitted_at, answers')
    .eq('patient_id', patientId)
    .eq('form_id', form.id)
    .order('submitted_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (!submission) return null

  const answers = ((submission.answers as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const raw = Array.isArray(answers.labs_attachments) ? (answers.labs_attachments as unknown[]) : []

  const out: IntakeAttachmentView[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const a = item as Record<string, unknown>
    if (
      typeof a.bucket !== 'string' ||
      typeof a.object_path !== 'string' ||
      typeof a.file_name !== 'string' ||
      typeof a.size_bytes !== 'number' ||
      typeof a.uploaded_at !== 'string'
    ) {
      continue
    }
    const { data: signed } = await admin.storage.from(a.bucket).createSignedUrl(a.object_path, 3600)
    out.push({
      file_name: a.file_name,
      size_bytes: a.size_bytes,
      uploaded_at: a.uploaded_at,
      signed_url: signed?.signedUrl ?? null,
    })
  }

  return {
    submittedAt: typeof submission.submitted_at === 'string' ? submission.submitted_at : null,
    primaryPathway: asText(answers.primary_pathway),
    heightIn: asInt(answers.height_in),
    weightLb: asInt(answers.weight_lb),
    sexAssignedAtBirth: asText(answers.sex_assigned_at_birth),
    genderIdentity: asText(answers.gender_identity),
    medicalHistoryConditions: asTokenArray(answers.medical_history_conditions),
    medicalHistoryNotes: asText(answers.medical_history_notes),
    surgicalHistoryItems: asTokenArray(answers.surgical_history_items),
    surgicalHistoryNotes: asText(answers.surgical_history_notes),
    tobaccoUse: asText(answers.tobacco_use),
    alcoholUse: asText(answers.alcohol_use),
    marijuanaUse: asText(answers.marijuana_use),
    illicitDrugUse: asText(answers.illicit_drug_use),
    allergies: asText(answers.allergies),
    currentMedications: asText(answers.current_medications),
    currentSupplements: asText(answers.current_supplements),
    familyHistory: asText(answers.family_history),
    attachments: out,
  }
}

async function getPatientLabOrders(patientId: string): Promise<LabOrderPortalView[]> {
  let admin
  try {
    admin = createAdminClient()
  } catch {
    return []
  }

  const { data, error } = await admin
    .from('lab_orders')
    .select('id, status, order_date, published_to_patient_at, tests, pdf_artifact, created_at')
    .eq('patient_id', patientId)
    .not('published_to_patient_at', 'is', null)
    .order('created_at', { ascending: false })
  if (error) {
    return []
  }

  const out: LabOrderPortalView[] = []
  for (const row of data ?? []) {
    const testsRaw = Array.isArray(row.tests) ? (row.tests as Array<Record<string, unknown>>) : []
    const tests = testsRaw.map((test) => {
      const label = typeof test.label === 'string' ? test.label : null
      const code = typeof test.code === 'string' ? test.code : ''
      return label || labelLabTest(code)
    })
    const artifact = (row.pdf_artifact as Record<string, unknown> | null) ?? null
    const bucket = artifact && typeof artifact.bucket === 'string' ? artifact.bucket : null
    const objectPath = artifact && typeof artifact.object_path === 'string' ? artifact.object_path : null
    let signedUrl: string | null = null
    if (bucket && objectPath) {
      const { data: signed } = await admin.storage.from(bucket).createSignedUrl(objectPath, 3600)
      signedUrl = signed?.signedUrl ?? null
    }
    out.push({
      id: row.id,
      status: typeof row.status === 'string' ? row.status : 'published_to_portal',
      orderDate: typeof row.order_date === 'string' ? row.order_date : '',
      publishedAt: typeof row.published_to_patient_at === 'string' ? row.published_to_patient_at : null,
      tests,
      signedUrl,
    })
  }
  return out
}

async function getPatientClinicalVisitNotes(patientId: string): Promise<ClinicalVisitPortalView[]> {
  let admin
  try {
    admin = createAdminClient()
  } catch {
    return []
  }

  const { data, error } = await admin
    .from('clinical_visits')
    .select('id, visit_type, visit_at, diagnosis_codes, pdf_artifact, published_to_patient_at')
    .eq('patient_id', patientId)
    .not('published_to_patient_at', 'is', null)
    .order('visit_at', { ascending: false })
  if (error) return []

  const out: ClinicalVisitPortalView[] = []
  for (const row of data ?? []) {
    const diagnosisCodes = Array.isArray(row.diagnosis_codes)
      ? (row.diagnosis_codes as unknown[]).filter((v): v is string => typeof v === 'string')
      : []
    const artifact = (row.pdf_artifact as Record<string, unknown> | null) ?? null
    const bucket = artifact && typeof artifact.bucket === 'string' ? artifact.bucket : null
    const objectPath = artifact && typeof artifact.object_path === 'string' ? artifact.object_path : null
    let signedUrl: string | null = null
    if (bucket && objectPath) {
      const { data: signed } = await admin.storage.from(bucket).createSignedUrl(objectPath, 3600)
      signedUrl = signed?.signedUrl ?? null
    }
    out.push({
      id: row.id,
      visitType: typeof row.visit_type === 'string' ? row.visit_type : 'visit',
      visitAt: typeof row.visit_at === 'string' ? row.visit_at : '',
      diagnosisCodes,
      signedUrl,
    })
  }
  return out
}

async function getApprovedPathwayPlan(patientId: string): Promise<ApprovedPathwayPlan | null> {
  let admin
  try {
    admin = createAdminClient()
  } catch {
    return null
  }

  const { data: review, error } = await admin
    .from('patient_chart_ai_reviews')
    .select('id, output_payload, reviewed_at, reviewed_by_staff_id')
    .eq('patient_id', patientId)
    .eq(
      'status',
      AI_GOVERNANCE_POLICY.patientVisibilityRequiresReviewedAccepted ? 'reviewed_accepted' : 'draft'
    )
    .order('reviewed_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error || !review) return null

  let reviewedBy: string | null = null
  if (typeof review.reviewed_by_staff_id === 'string') {
    const { data: staff } = await admin
      .from('staff_profiles')
      .select('display_name')
      .eq('id', review.reviewed_by_staff_id)
      .maybeSingle()
    reviewedBy = staff?.display_name?.trim() || null
  }

  const cards = parsePathwayDecisionCardsFromPayload(
    review.output_payload,
    'reviewed_accepted',
    reviewedBy,
    typeof review.reviewed_at === 'string' ? review.reviewed_at : null
  )
  if (cards.length === 0) return null

  return {
    reviewedAt: typeof review.reviewed_at === 'string' ? review.reviewed_at : null,
    reviewedBy,
    cards,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  return {
    title: 'Your care | MAIN',
    description: 'Treatment status and next steps.',
    robots: { index: false, follow: false },
  }
}

export default async function PatientDashboardPage({ params, searchParams }: Props) {
  const { patientId } = await params
  const sp = await searchParams
  const intakeJustSubmitted = sp.intake === '1' || sp.intake === 'submitted'

  if (!UUID_RE.test(patientId)) {
    notFound()
  }

  if (!(await assertPatientDashboardAccess(patientId))) {
    redirect('/dashboard?session=required')
  }

  let data
  try {
    data = await getPatientDashboard(patientId)
  } catch {
    notFound()
  }

  if (!data) {
    notFound()
  }

  const { patient } = data

  const portalSession = await assertPatientPortalSessionOnly(patientId)
  const refillEligible = portalSession ? await getPatientRefillEligibleTreatments(patientId) : []
  const checkinPrompts = portalSession ? await getPatientTreatmentCheckinPrompts(patientId) : []

  const commerceHistory = await getPatientCommerceHistory(patientId)
  const careOverview = await getPatientCareOverview(patientId)
  const statusKey = deriveWorkflowStatusFromCare({
    primaryProgramStatus: careOverview.programs[0]?.status ?? null,
    treatmentStatuses: Object.values(careOverview.treatmentsByProgramId)
      .flat()
      .map((item) => item.status),
  })
  const copy = getGlp1DashboardCopy(statusKey)
  const refillHistory = await getPatientRefillHistory(patientId)
  const intakeSummary = await getPatientIntakeSummary(patientId)
  const [labOrders, dismissedAlertKeys] = await Promise.all([
    getPatientLabOrders(patientId),
    getPatientDashboardAlertDismissals(patientId),
  ])
  const upcomingEvents = buildPatientUpcomingEvents({
    patientId,
    treatmentsByProgramId: careOverview.treatmentsByProgramId,
    refillEligible,
    checkinPrompts,
    labOrders: labOrders.map((o) => ({ id: o.id, orderDate: o.orderDate, tests: o.tests })),
    programs: careOverview.programs,
    showPortalLabUploadHint: portalSession && careOverview.available,
  })
  const reorderSnapshot = buildPatientReorderReadinessSnapshot({
    patientId,
    careOverview,
    portalSession,
    refillEligible,
    checkinPrompts,
  })
  const reorderReadinessRows = reorderSnapshot.treatments
  const dashboardAlerts = buildPatientDashboardAlerts({
    reorderRows: reorderReadinessRows,
    upcomingEvents,
    labOrders: labOrders.map((o) => ({ id: o.id, orderDate: o.orderDate, tests: o.tests })),
    dismissedKeys: dismissedAlertKeys,
    dashboardHref: `/dashboard/${patientId}`,
  })
  const clinicalVisitNotes = await getPatientClinicalVisitNotes(patientId)
  const approvedPathwayPlan = await getApprovedPathwayPlan(patientId)
  const currentPathway = intakeSummary?.primaryPathway ?? null
  const additionalPathways = CARE_PATHWAYS.filter((pathway) => pathway.id !== currentPathway)

  const documentUploadTreatmentOptions =
    portalSession && careOverview.available
      ? Object.values(careOverview.treatmentsByProgramId)
          .flat()
          .filter((t) => t.status !== 'stopped')
          .map((t) => ({ id: t.id, display_name: t.display_name }))
      : []

  const hasConsultPayment = commerceHistory.payments.some(
    (payment) => payment.checkoutType === 'consult' || payment.checkoutType === 'mixed'
  )

  const showPayButton =
    !hasConsultPayment &&
    statusKey !== 'payment_completed' &&
    statusKey !== 'denied' &&
    statusKey !== 'rejected_followup' &&
    (statusKey === 'intake_submitted' ||
      statusKey === 'lead' ||
      statusKey === 'intake_started' ||
      statusKey === null ||
      statusKey === 'awaiting_review')

  const statusUpdated = careOverview.programs[0]?.updated_at
    ? new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(careOverview.programs[0].updated_at))
    : null
  const continuationVisibilityStatus = pickVisibleContinuationStatus(
    Object.values(careOverview.treatmentsByProgramId)
      .flat()
      .map((t) => t.latest_refill_status)
  )
  const continuationInsights: string[] = []
  if (continuationVisibilityStatus) {
    const latestRefillForVisibleState = refillHistory.find(
      (item) => item.status === continuationVisibilityStatus
    )
    if (latestRefillForVisibleState) {
      continuationInsights.push(
        `Most recent update: ${latestRefillForVisibleState.treatmentName} on ${new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
        }).format(new Date(latestRefillForVisibleState.requestedAt))}.`
      )
    }
    const activeTreatmentCount = Object.values(careOverview.treatmentsByProgramId)
      .flat()
      .filter((t) => t.status === 'active').length
    if (activeTreatmentCount > 0) {
      continuationInsights.push(
        activeTreatmentCount === 1
          ? 'Your treatment routine is staying on track.'
          : `${activeTreatmentCount} treatments are currently staying on track.`
      )
    }
  }

  const toneStyles = {
    neutral: 'border-neutral-200 bg-white',
    success: 'border-emerald-200 bg-emerald-50/60',
    warning: 'border-amber-200 bg-amber-50/60',
    danger: 'border-red-200 bg-red-50/50',
  } as const

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">MAIN</p>
            <h1 className="text-xl font-semibold tracking-tight">Your care</h1>
            {portalSession ? (
              <p className="mt-1.5 max-w-xl text-sm text-neutral-600">
                <span className="font-medium text-neutral-800">Reorders and renewals come first</span> here—the same
                priority we&apos;ll use in a mobile app: sign in, see what&apos;s ready for each medication, then act.
              </p>
            ) : null}
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            Home
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-6 py-10">
        {sp.welcome === '1' ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            You’re in. This page is your private status — bookmark it or save the URL. Don’t share it with others.
          </p>
        ) : null}

        {intakeJustSubmitted ? (
          <p className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-950">
            Intake received. Your <strong>Updates</strong> and reorder status below will fill in as the team processes
            your information—refresh if you don’t see changes right away.
          </p>
        ) : null}

        {sp.paid === '1' ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            Checkout complete. Your plan is now in clinician review, and this page will update with the next decision.
          </p>
        ) : null}

        {showPayButton ? (
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-neutral-900">Visit payment</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Complete payment for your visit when you’re ready. Your status will update automatically after Stripe confirms.
            </p>
            <div className="mt-4">
              <PayForVisitButton patientId={patientId} />
            </div>
          </section>
        ) : null}

        <PatientContinuationStateBlock status={continuationVisibilityStatus} insights={continuationInsights} />

        {dashboardAlerts.length > 0 ? (
          <PatientDashboardAlertCenter
            patientId={patientId}
            alerts={dashboardAlerts}
            allowDismiss={portalSession}
          />
        ) : null}

        {portalSession &&
        reorderReadinessRows.length > 0 &&
        !dashboardAlerts.some((a) => a.key.startsWith('readiness:')) ? (
          <PatientReorderReadinessStrip rows={reorderReadinessRows} />
        ) : null}

        <PatientUpcomingSection
          events={upcomingEvents}
          reorderStripAbove={portalSession && reorderReadinessRows.length > 0}
        />

        <div id="refill-request" className="scroll-mt-6">
          {portalSession && refillEligible.length > 0 ? (
            <PatientRefillRequestPanel patientId={patientId} items={refillEligible} />
          ) : null}
        </div>
        <div id="treatment-checkin" className="scroll-mt-6">
          {portalSession && checkinPrompts.length > 0 ? (
            <PatientTreatmentCheckinPanel patientId={patientId} prompts={checkinPrompts} />
          ) : null}
        </div>

        {portalSession && careOverview.available ? (
          <PatientPortalDocumentUploadPanel
            patientId={patientId}
            treatmentOptions={documentUploadTreatmentOptions}
          />
        ) : null}

        <PatientCareProgramCards
          patientId={patientId}
          programs={careOverview.programs}
          careTablesAvailable={careOverview.available}
        />

        {approvedPathwayPlan ? (
          <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Your pathway plan</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Clinician-approved summary and next steps. This updates after each chart review.
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Reviewed{' '}
                {approvedPathwayPlan.reviewedAt
                  ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                      new Date(approvedPathwayPlan.reviewedAt)
                    )
                  : 'recently'}
                {approvedPathwayPlan.reviewedBy ? ` · by ${approvedPathwayPlan.reviewedBy}` : ''}
              </p>
            </div>

            <div className="space-y-4">
              {approvedPathwayPlan.cards.map((card) => (
                <PathwayDecisionCardView key={card.pathway_id} decision={card} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Explore more care options</h3>
          <p className="mt-1 text-sm text-neutral-600">
            You can start another intake anytime to explore additional care tracks.
          </p>
          {currentPathway ? (
            <p className="mt-2 text-xs text-neutral-500">Current focus: {asTokenLabel(currentPathway)}</p>
          ) : null}
          <div className="mt-4 space-y-3">
            {additionalPathways.map((pathway) => (
              <div
                key={pathway.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-neutral-200 p-3"
              >
                <div>
                  <p className="font-medium text-neutral-900">{pathway.title}</p>
                  <p className="text-sm text-neutral-600">{pathway.blurb}</p>
                </div>
                <Link
                  href={`/forms/glp1-intake?pathway=${encodeURIComponent(pathway.id)}`}
                  className="inline-flex items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Start intake
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={`rounded-xl border p-6 shadow-sm ${toneStyles[copy.tone]}`}>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Current status</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">{copy.headline}</h2>
          <p className="mt-2 text-neutral-700">{copy.subline}</p>
          {statusKey ? (
            <p className="mt-4 font-mono text-xs text-neutral-500">
              Protocol: <span className="text-neutral-700">{statusKey}</span>
              {statusUpdated ? <span className="text-neutral-400"> · Updated {statusUpdated}</span> : null}
            </p>
          ) : (
            <p className="mt-4 text-sm text-neutral-500">Status will appear here after your intake is processed.</p>
          )}
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Where you are in the journey</h3>
          <p className="mt-1 text-sm text-neutral-600">
            Progress is illustrative; exact timing depends on your case and clinician review.
          </p>
          <div className="mt-6">
            <Glp1Pipeline activeIndex={copy.activePipelineIndex} />
          </div>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Next steps</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-neutral-700">
            {copy.nextSteps.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <div id="patient-support" className="scroll-mt-6">
          <PatientSupportPanel patientId={patientId} />
        </div>

        <PatientHistoryTabs
          payments={commerceHistory.payments}
          orders={commerceHistory.orders}
          refills={refillHistory}
          nowIso={new Date().toISOString()}
        />

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Your health profile</h3>
          {intakeSummary ? (
            <div className="mt-3 space-y-3 text-sm text-neutral-800">
              {intakeSummary.submittedAt ? (
                <p className="text-xs text-neutral-500">
                  Last updated{' '}
                  {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(intakeSummary.submittedAt)
                  )}
                </p>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                <p>
                  <span className="font-medium">Height:</span>{' '}
                  {typeof intakeSummary.heightIn === 'number' ? `${intakeSummary.heightIn} in` : 'Not provided'}
                </p>
                <p>
                  <span className="font-medium">Weight:</span>{' '}
                  {typeof intakeSummary.weightLb === 'number' ? `${intakeSummary.weightLb} lbs` : 'Not provided'}
                </p>
                <p>
                  <span className="font-medium">Sex assigned at birth:</span>{' '}
                  {intakeSummary.sexAssignedAtBirth ? asTokenLabel(intakeSummary.sexAssignedAtBirth) : 'Not provided'}
                </p>
                <p>
                  <span className="font-medium">Gender identity:</span>{' '}
                  {intakeSummary.genderIdentity ? asTokenLabel(intakeSummary.genderIdentity) : 'Not provided'}
                </p>
              </div>
              <p>
                <span className="font-medium">Medical history:</span>{' '}
                {intakeSummary.medicalHistoryConditions.length > 0
                  ? intakeSummary.medicalHistoryConditions.map(asTokenLabel).join(' · ')
                  : 'Not provided'}
              </p>
              {intakeSummary.medicalHistoryNotes ? (
                <p>
                  <span className="font-medium">Medical notes:</span> {intakeSummary.medicalHistoryNotes}
                </p>
              ) : null}
              <p>
                <span className="font-medium">Surgical/procedure history:</span>{' '}
                {intakeSummary.surgicalHistoryItems.length > 0
                  ? intakeSummary.surgicalHistoryItems.map(asTokenLabel).join(' · ')
                  : 'Not provided'}
              </p>
              {intakeSummary.surgicalHistoryNotes ? (
                <p>
                  <span className="font-medium">Surgical notes:</span> {intakeSummary.surgicalHistoryNotes}
                </p>
              ) : null}
              <p>
                <span className="font-medium">Social history:</span>{' '}
                {[
                  intakeSummary.tobaccoUse ? `Smoking/vaping: ${asTokenLabel(intakeSummary.tobaccoUse)}` : null,
                  intakeSummary.alcoholUse ? `Alcohol: ${asTokenLabel(intakeSummary.alcoholUse)}` : null,
                  intakeSummary.marijuanaUse ? `Marijuana: ${asTokenLabel(intakeSummary.marijuanaUse)}` : null,
                  intakeSummary.illicitDrugUse ? `Illicit: ${asTokenLabel(intakeSummary.illicitDrugUse)}` : null,
                ]
                  .filter(Boolean)
                  .join(' · ') || 'Not provided'}
              </p>
              <p>
                <span className="font-medium">Allergies:</span> {intakeSummary.allergies ?? 'Not provided'}
              </p>
              <p>
                <span className="font-medium">Current meds:</span>{' '}
                {intakeSummary.currentMedications ?? 'Not provided'}
              </p>
              <p>
                <span className="font-medium">Current supplements:</span>{' '}
                {intakeSummary.currentSupplements ?? 'Not provided'}
              </p>
              <p>
                <span className="font-medium">Family history:</span>{' '}
                {intakeSummary.familyHistory ?? 'Not provided'}
              </p>
            </div>
          ) : (
            <p className="mt-2 text-sm text-neutral-600">No intake profile submitted yet.</p>
          )}
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Your details</h3>
          <p className="mt-1 text-xs text-neutral-500">
            Shown with masking for privacy on shared screens. Full records are maintained for your care team.
          </p>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-neutral-500">Name</dt>
              <dd className="font-medium text-neutral-900">{patientDisplayName(patient)}</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Email</dt>
              <dd className="font-medium text-neutral-900">{maskEmail(patient.email)}</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Phone</dt>
              <dd className="font-medium text-neutral-900">{maskPhoneE164(patient.phone)}</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Date of birth</dt>
              <dd className="font-medium text-neutral-900">{formatDobUs(patient.dob)}</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Member since</dt>
              <dd className="font-medium text-neutral-900">
                {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(patient.created_at))}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-neutral-500">Mailing address</dt>
              <dd className="whitespace-pre-line font-medium text-neutral-900">{formatAddressBlock(patient)}</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Uploaded labs/documents</h3>
          {intakeSummary?.attachments.length ? (
            <ul className="mt-3 space-y-2 text-sm text-neutral-800">
              {intakeSummary.attachments.map((file) => (
                <li key={`${file.file_name}-${file.uploaded_at}`} className="flex flex-wrap items-center gap-2">
                  {file.signed_url ? (
                    <Link href={file.signed_url} target="_blank" rel="noreferrer" className="underline">
                      {file.file_name}
                    </Link>
                  ) : (
                    <span>{file.file_name}</span>
                  )}
                  <span className="text-xs text-neutral-500">
                    ({Math.ceil(file.size_bytes / 1024)} KB ·{' '}
                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(file.uploaded_at))})
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-neutral-600">No documents uploaded yet.</p>
          )}
        </section>

        <section id="lab-requisitions" className="scroll-mt-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Lab requisitions</h3>
          <p className="mt-1 text-xs text-neutral-500">
            Orders from your care team. Bring these PDFs to the lab if needed.
          </p>
          {labOrders.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600">No lab requisitions published yet.</p>
          ) : (
            <ul className="mt-3 space-y-3 text-sm text-neutral-800">
              {labOrders.map((order) => (
                <li key={order.id} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-neutral-900">
                      Order date {order.orderDate} · {asTokenLabel(order.status)}
                    </p>
                    {order.publishedAt ? (
                      <span className="text-xs text-neutral-500">
                        Published{' '}
                        {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(order.publishedAt))}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-neutral-600">{order.tests.join(' · ') || 'No tests listed'}</p>
                  {order.signedUrl ? (
                    <a
                      href={order.signedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
                    >
                      View / download PDF
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">Visit summaries</h3>
          <p className="mt-1 text-xs text-neutral-500">
            Signed progress notes from your clinical visits.
          </p>
          {clinicalVisitNotes.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600">No visit summaries published yet.</p>
          ) : (
            <ul className="mt-3 space-y-3 text-sm text-neutral-800">
              {clinicalVisitNotes.map((note) => (
                <li key={note.id} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-neutral-900">{asTokenLabel(note.visitType)}</p>
                    <span className="text-xs text-neutral-500">
                      {note.visitAt
                        ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(note.visitAt))
                        : ''}
                    </span>
                  </div>
                  {note.diagnosisCodes.length > 0 ? (
                    <p className="mt-1 text-xs text-neutral-600">Dx: {note.diagnosisCodes.join(', ')}</p>
                  ) : null}
                  {note.signedUrl ? (
                    <a
                      href={note.signedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
                    >
                      View / download PDF
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="flex flex-col items-center gap-2 text-center">
          <PatientPortalSignOut />
          <p className="text-xs text-neutral-400">
            This page is private to your device after you open a signed link. For medical emergencies, call 911. For
            account help, contact support when available.
          </p>
        </div>
      </div>
    </main>
  )
}

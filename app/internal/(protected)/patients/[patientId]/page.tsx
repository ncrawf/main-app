import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatE164UsDisplay } from '@/lib/admin/format'
import { buildPatientPortalExchangeUrl } from '@/lib/patient-portal/exchangeUrl'
import { allowedNextRefillRequestStatuses, isValidRefillRequestStatus } from '@/lib/refill/refillRequestTransitions'
import {
  allowedNextSupplementFulfillmentStatuses,
  labelSupplementFulfillmentStatus,
} from '@/lib/supplement/fulfillment'
import { listTimelineEvents } from '@/lib/timeline/listTimelineEvents'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { AddCatalogTreatmentForm } from './AddCatalogTreatmentForm'
import { AddNoteForm } from './AddNoteForm'
import { CaseProtocolForm } from './CaseProtocolForm'
import { ClinicalVisitPdfPublishForm } from './ClinicalVisitPdfPublishForm'
import { CreateClinicalVisitAddendumForm } from './CreateClinicalVisitAddendumForm'
import { CreateClinicalVisitForm } from './CreateClinicalVisitForm'
import { CreateLabOrderForm } from './CreateLabOrderForm'
import { LabOrderDispatchForm } from './LabOrderDispatchForm'
import { SendTemplateTestForm } from './SendTemplateTestForm'
import { AdminHistoryPanel } from './AdminHistoryPanel'
import { GenerateRxPdfForm } from './GenerateRxPdfForm'
import { PreparePharmacyDispatchForm } from './PreparePharmacyDispatchForm'
import { RefillRequestActionsForm } from './RefillRequestActionsForm'
import { RequestBulkRefillsForm } from './RequestBulkRefillsForm'
import { RequestRefillForm } from './RequestRefillForm'
import { SupportRequestActionsForm } from './SupportRequestActionsForm'
import { SupplementFulfillmentActionsForm } from './SupplementFulfillmentActionsForm'
import { UpdateCareProgramStatusForm } from './UpdateCareProgramStatusForm'
import { UpdateTreatmentStatusForm } from './UpdateTreatmentStatusForm'
import { formatDosageSummary } from '@/lib/care/medicationCatalog'
import { labelLabTest } from '@/lib/labs/catalog'
import { listProviders } from '@/lib/staff/listProviders'

export const dynamic = 'force-dynamic'

type CareProgramRow = {
  id: string
  program_type: string
  status: string
  title: string | null
  created_at: string
  updated_at: string
}

type TreatmentItemRow = {
  id: string
  care_program_id: string
  treatment_key: string
  display_name: string
  category: string | null
  status: string
  dosage: Record<string, unknown> | null
  metadata: Record<string, unknown> | null
  updated_at: string
}

type CareProgramsSnapshot = {
  available: boolean
  programs: CareProgramRow[]
  treatmentItems: TreatmentItemRow[]
}

type TransitionRow = {
  entity_type: 'care_program' | 'treatment_item'
  from_status: string | null
  to_status: string
}

type RefillRequestRow = {
  id: string
  treatment_item_id: string
  care_program_id: string | null
  status: string
  patient_note: string | null
  staff_note: string | null
  created_at: string
  updated_at: string
}

type SupplementFulfillmentOrderRow = {
  id: string
  stripe_checkout_session_id: string
  status: string
  shipping_snapshot: unknown
  items: unknown
  metadata: unknown
  created_at: string
  updated_at: string
}

type LabOrderRow = {
  id: string
  status: string
  order_date: string
  tests: unknown
  metadata: unknown
  pdf_artifact: unknown
  created_at: string
  published_to_patient_at: string | null
}

type ClinicalVisitRow = {
  id: string
  visit_type: string
  visit_at: string
  status: string
  diagnosis_codes: unknown
  note_text: string
  pdf_artifact: unknown
  published_to_patient_at: string | null
  created_at: string
  signed_at: string
}

type ClinicalVisitRxReviewRow = {
  id: string
  clinical_visit_id: string
  treatment_item_id: string
  decision: string
  indication: string | null
  risk_review: string | null
  monitoring_plan: string | null
}

type ClinicalVisitAddendumRow = {
  id: string
  clinical_visit_id: string
  addendum_text: string
  created_at: string
}

type ProviderOption = {
  id: string
  label: string
  credentials: string | null
  specialty: string | null
  npi: string | null
  stateLicenseNumber: string | null
  prescriptionLicenseNumber: string | null
  deaNumber: string | null
}

type IntakeAttachment = {
  bucket: string
  object_path: string
  file_name: string
  mime_type: string
  size_bytes: number
  uploaded_at: string
}

type IntakeSnapshot = {
  available: boolean
  submissionId: string | null
  submittedAt: string | null
  answers: Record<string, unknown>
  attachments: Array<IntakeAttachment & { signed_url: string | null }>
}

function formatDob(iso: string | null): string {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  if (!y || !m || !d) return iso
  return `${m}/${d}/${y}`
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function humanizeToken(v: string | null | undefined): string {
  if (!v) return '—'
  return v
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function amountLabel(amountTotal: unknown, currency: unknown): string | null {
  if (typeof amountTotal !== 'number' || typeof currency !== 'string' || !currency) return null
  return `${(amountTotal / 100).toFixed(2)} ${currency.toUpperCase()}`
}

function extractSupplyDurationDays(metadata: unknown): number | null {
  if (!metadata || typeof metadata !== 'object') return null
  const md = metadata as Record<string, unknown>
  const rxSupply = md.rx_supply
  if (!rxSupply || typeof rxSupply !== 'object') return null
  const duration = (rxSupply as Record<string, unknown>).duration_days
  if (typeof duration === 'number' && Number.isFinite(duration) && duration > 0) return Math.round(duration)
  return null
}

type SupportRequestStatus = 'new' | 'acknowledged' | 'call_completed' | 'resolved'

function supportStatusFromPayload(payload: Record<string, unknown>): SupportRequestStatus {
  const status = payload.support_status
  if (status === 'new' || status === 'acknowledged' || status === 'call_completed' || status === 'resolved') {
    return status
  }
  return 'new'
}

function firstLicenseNumber(licenses: Array<Record<string, unknown>>): string | null {
  const first = licenses[0]
  if (!first) return null
  const value = first.license_number
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null
}

async function loadCareProgramsSnapshot(supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>, patientId: string): Promise<CareProgramsSnapshot> {
  const { data: programs, error: programErr } = await supabase
    .from('care_programs')
    .select('id, program_type, status, title, created_at, updated_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (programErr) {
    if (isMissingRelationError(programErr)) {
      return { available: false, programs: [], treatmentItems: [] }
    }
    console.error('loadCareProgramsSnapshot.care_programs', programErr)
    return { available: true, programs: [], treatmentItems: [] }
  }

  const programRows = (programs ?? []) as CareProgramRow[]
  const programIds = programRows.map((p) => p.id)
  if (programIds.length === 0) {
    return { available: true, programs: programRows, treatmentItems: [] }
  }

  const { data: treatmentItems, error: itemErr } = await supabase
    .from('treatment_items')
    .select('id, care_program_id, treatment_key, display_name, category, status, dosage, metadata, updated_at')
    .in('care_program_id', programIds)
    .order('updated_at', { ascending: false })

  if (itemErr) {
    if (isMissingRelationError(itemErr)) {
      return { available: false, programs: [], treatmentItems: [] }
    }
    console.error('loadCareProgramsSnapshot.treatment_items', itemErr)
    return { available: true, programs: programRows, treatmentItems: [] }
  }

  return {
    available: true,
    programs: programRows,
    treatmentItems: (treatmentItems ?? []) as TreatmentItemRow[],
  }
}

async function loadTransitionRows(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>
): Promise<TransitionRow[]> {
  const { data, error } = await supabase
    .from('workflow_status_transitions')
    .select('entity_type, from_status, to_status')
    .in('entity_type', ['care_program', 'treatment_item'])
  if (error) {
    if (!isMissingRelationError(error)) console.error('loadTransitionRows', error)
    return []
  }
  return (data ?? []) as TransitionRow[]
}

function allowedNextStatuses(
  rows: TransitionRow[],
  entityType: 'care_program' | 'treatment_item',
  currentStatus: string
): string[] {
  const exact = rows.filter((r) => r.entity_type === entityType && r.from_status === currentStatus).map((r) => r.to_status)
  const wildcard = rows.filter((r) => r.entity_type === entityType && r.from_status === null).map((r) => r.to_status)
  const unique = [...new Set([...exact, ...wildcard])]
  return unique
}

async function loadRefillRequests(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientId: string
): Promise<{ available: boolean; rows: RefillRequestRow[] }> {
  const { data, error } = await supabase
    .from('refill_requests')
    .select('id, treatment_item_id, care_program_id, status, patient_note, staff_note, created_at, updated_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (error) {
    if (isMissingRelationError(error)) {
      return { available: false, rows: [] }
    }
    console.error('loadRefillRequests', error)
    return { available: true, rows: [] }
  }

  return { available: true, rows: (data ?? []) as RefillRequestRow[] }
}

async function loadSupplementFulfillmentOrders(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientId: string
): Promise<{ available: boolean; rows: SupplementFulfillmentOrderRow[] }> {
  const { data, error } = await supabase
    .from('supplement_fulfillment_orders')
    .select('id, stripe_checkout_session_id, status, shipping_snapshot, items, metadata, created_at, updated_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (error) {
    if (isMissingRelationError(error)) {
      return { available: false, rows: [] }
    }
    console.error('loadSupplementFulfillmentOrders', error)
    return { available: true, rows: [] }
  }

  return { available: true, rows: (data ?? []) as SupplementFulfillmentOrderRow[] }
}

async function loadLatestIntakeSnapshot(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientId: string
): Promise<IntakeSnapshot> {
  const { data: form } = await supabase
    .from('forms')
    .select('id')
    .eq('key', 'glp1-intake')
    .order('version', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!form?.id) {
    return { available: false, submissionId: null, submittedAt: null, answers: {}, attachments: [] }
  }

  const { data: submission, error } = await supabase
    .from('form_submissions')
    .select('id, submitted_at, answers')
    .eq('patient_id', patientId)
    .eq('form_id', form.id)
    .order('submitted_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('loadLatestIntakeSnapshot', error)
    return { available: true, submissionId: null, submittedAt: null, answers: {}, attachments: [] }
  }
  if (!submission) {
    return { available: true, submissionId: null, submittedAt: null, answers: {}, attachments: [] }
  }

  const answers = ((submission.answers as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const rawAttachments = Array.isArray(answers.labs_attachments) ? (answers.labs_attachments as unknown[]) : []
  const attachments = rawAttachments
    .filter((item): item is IntakeAttachment => {
      if (!item || typeof item !== 'object') return false
      const x = item as Record<string, unknown>
      return (
        typeof x.bucket === 'string' &&
        typeof x.object_path === 'string' &&
        typeof x.file_name === 'string' &&
        typeof x.mime_type === 'string' &&
        typeof x.size_bytes === 'number' &&
        typeof x.uploaded_at === 'string'
      )
    })
    .slice(0, 20)

  if (attachments.length === 0) {
    return {
      available: true,
      submissionId: submission.id,
      submittedAt: submission.submitted_at,
      answers,
      attachments: [],
    }
  }

  const admin = createAdminClient()
  const signedAttachments: Array<IntakeAttachment & { signed_url: string | null }> = []
  for (const attachment of attachments) {
    const { data: signed } = await admin.storage.from(attachment.bucket).createSignedUrl(attachment.object_path, 3600)
    signedAttachments.push({ ...attachment, signed_url: signed?.signedUrl ?? null })
  }

  return {
    available: true,
    submissionId: submission.id,
    submittedAt: submission.submitted_at,
    answers,
    attachments: signedAttachments,
  }
}

async function loadLabOrders(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientId: string
): Promise<{ available: boolean; rows: LabOrderRow[] }> {
  const { data, error } = await supabase
    .from('lab_orders')
    .select('id, status, order_date, tests, metadata, pdf_artifact, created_at, published_to_patient_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (error) {
    if (isMissingRelationError(error)) return { available: false, rows: [] }
    console.error('loadLabOrders', error)
    return { available: true, rows: [] }
  }
  return { available: true, rows: (data ?? []) as LabOrderRow[] }
}

async function loadClinicalVisits(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientId: string
): Promise<{
  available: boolean
  visits: ClinicalVisitRow[]
  reviews: ClinicalVisitRxReviewRow[]
  addenda: ClinicalVisitAddendumRow[]
}> {
  const { data: visits, error: visitErr } = await supabase
    .from('clinical_visits')
    .select('id, visit_type, visit_at, status, diagnosis_codes, note_text, pdf_artifact, published_to_patient_at, created_at, signed_at')
    .eq('patient_id', patientId)
    .order('visit_at', { ascending: false })

  if (visitErr) {
    if (isMissingRelationError(visitErr)) {
      return { available: false, visits: [], reviews: [], addenda: [] }
    }
    console.error('loadClinicalVisits.visits', visitErr)
    return { available: true, visits: [], reviews: [], addenda: [] }
  }

  const visitRows = (visits ?? []) as ClinicalVisitRow[]
  if (visitRows.length === 0) return { available: true, visits: [], reviews: [], addenda: [] }

  const { data: reviews, error: reviewErr } = await supabase
    .from('clinical_visit_rx_reviews')
    .select('id, clinical_visit_id, treatment_item_id, decision, indication, risk_review, monitoring_plan')
    .eq('patient_id', patientId)
    .in('clinical_visit_id', visitRows.map((visit) => visit.id))
    .order('created_at', { ascending: false })
  if (reviewErr) {
    console.error('loadClinicalVisits.reviews', reviewErr)
    return { available: true, visits: visitRows, reviews: [], addenda: [] }
  }

  const { data: addenda, error: addendaErr } = await supabase
    .from('clinical_visit_addenda')
    .select('id, clinical_visit_id, addendum_text, created_at')
    .eq('patient_id', patientId)
    .in('clinical_visit_id', visitRows.map((visit) => visit.id))
    .order('created_at', { ascending: false })

  if (addendaErr) {
    if (!isMissingRelationError(addendaErr)) {
      console.error('loadClinicalVisits.addenda', addendaErr)
    }
    return { available: true, visits: visitRows, reviews: (reviews ?? []) as ClinicalVisitRxReviewRow[], addenda: [] }
  }

  return {
    available: true,
    visits: visitRows,
    reviews: (reviews ?? []) as ClinicalVisitRxReviewRow[],
    addenda: (addenda ?? []) as ClinicalVisitAddendumRow[],
  }
}

export default async function InternalPatientCasePage({ params }: { params: Promise<{ patientId: string }> }) {
  const { patientId } = await params
  const supabase = await createSupabaseServerClient()

  const { data: patient, error } = await supabase
    .from('patients')
    .select('id, email, first_name, last_name, phone, dob, created_at')
    .eq('id', patientId)
    .maybeSingle()

  if (error) {
    console.error(error)
    notFound()
  }
  if (!patient) notFound()

  const [{ data: stateRow }, { data: staffRows }, events, care, transitions, refills, supplements, intake, labOrders, clinical, providers] =
    await Promise.all([
      supabase.from('patient_states').select('assigned_to').eq('patient_id', patientId).maybeSingle(),
      supabase.from('staff_profiles').select('id, display_name').order('display_name', { ascending: true }),
      listTimelineEvents(supabase, patientId),
      loadCareProgramsSnapshot(supabase, patientId),
      loadTransitionRows(supabase),
      loadRefillRequests(supabase, patientId),
      loadSupplementFulfillmentOrders(supabase, patientId),
      loadLatestIntakeSnapshot(supabase, patientId),
      loadLabOrders(supabase, patientId),
      loadClinicalVisits(supabase, patientId),
      listProviders(supabase),
    ])

  const catalogProgramPicks = care.programs.map((p) => ({
    id: p.id,
    label: p.title?.trim() || humanizeToken(p.program_type),
  }))
  const catalogTreatmentPicks = care.treatmentItems.map((i) => ({
    id: i.id,
    careProgramId: i.care_program_id,
    displayName: i.display_name,
    status: i.status,
  }))
  const providerOptions: ProviderOption[] = providers.map((provider) => {
    const labelParts = [
      provider.display_name?.trim() ||
        [provider.first_name, provider.last_name].filter(Boolean).join(' ').trim() ||
        provider.id,
      provider.credentials?.trim() ?? '',
    ].filter(Boolean)
    return {
      id: provider.id,
      label: labelParts.join(', '),
      credentials: provider.credentials,
      specialty: provider.specialty,
      npi: provider.npi,
      stateLicenseNumber: firstLicenseNumber(provider.state_licenses),
      prescriptionLicenseNumber: firstLicenseNumber(provider.prescription_licenses),
      deaNumber: provider.dea_number,
    }
  })

  const refillDueItems = care.available
    ? care.treatmentItems
        .filter((i) => i.status === 'refill_due')
        .map((i) => ({ id: i.id, displayName: i.display_name, careProgramId: i.care_program_id }))
    : []

  const treatmentNameById = new Map(care.treatmentItems.map((i) => [i.id, i.display_name]))
  const rxReviewsByVisitId = new Map<string, ClinicalVisitRxReviewRow[]>()
  for (const review of clinical.reviews) {
    const list = rxReviewsByVisitId.get(review.clinical_visit_id) ?? []
    list.push(review)
    rxReviewsByVisitId.set(review.clinical_visit_id, list)
  }
  const addendaByVisitId = new Map<string, ClinicalVisitAddendumRow[]>()
  for (const addendum of clinical.addenda) {
    const list = addendaByVisitId.get(addendum.clinical_visit_id) ?? []
    list.push(addendum)
    addendaByVisitId.set(addendum.clinical_visit_id, list)
  }
  const openSupportRequests = events.filter((ev) => {
    if (ev.event_type !== 'patient_message_submitted' && ev.event_type !== 'patient_callback_requested') {
      return false
    }
    return supportStatusFromPayload(ev.payload) !== 'resolved'
  })
  const checkinReviewedMetaBySourceId = new Map<
    string,
    { reviewer: string; reviewedAt: string }
  >()
  for (const ev of events) {
    if (ev.event_type !== 'patient_treatment_checkin_reviewed') continue
    const sourceEventId =
      typeof ev.payload.source_event_id === 'string' ? ev.payload.source_event_id : null
    if (!sourceEventId || checkinReviewedMetaBySourceId.has(sourceEventId)) continue
    checkinReviewedMetaBySourceId.set(sourceEventId, {
      reviewer: ev.actor_display_name ?? 'Staff',
      reviewedAt: ev.created_at,
    })
  }
  const paymentHistory = events
    .filter((ev) => ev.event_type === 'stripe_checkout_completed')
    .map((ev) => {
      const sid =
        typeof ev.payload.stripe_checkout_session_id === 'string' ? ev.payload.stripe_checkout_session_id : null
      const hasConsult = ev.payload.has_consult === true
      const hasSupplement = ev.payload.has_supplement === true
      const checkoutType = hasConsult
        ? hasSupplement
          ? 'Consult + supplements'
          : 'Consult'
        : hasSupplement
          ? 'Supplements'
          : 'Checkout'
      return {
        id: ev.id,
        stripeCheckoutSessionId: sid,
        createdAt: ev.created_at,
        amountLabel: amountLabel(ev.payload.amount_total, ev.payload.currency),
        checkoutType,
      }
    })
  const refillDurationByTreatment = new Map(
    care.treatmentItems.map((item) => [item.id, extractSupplyDurationDays(item.metadata)] as const)
  )
  const orderHistory = supplements.rows.map((row) => ({
    id: row.id,
    stripeCheckoutSessionId: row.stripe_checkout_session_id,
    createdAt: row.created_at,
    status: row.status,
  }))
  const refillHistory = refills.rows.map((row) => ({
    id: row.id,
    treatmentName:
      treatmentNameById.get(row.treatment_item_id) ?? `Treatment ${row.treatment_item_id.slice(0, 8)}…`,
    createdAt: row.created_at,
    status: row.status,
    supplyDurationDays: refillDurationByTreatment.get(row.treatment_item_id) ?? null,
  }))

  let patientViewHref = `/dashboard/${patient.id}`
  try {
    patientViewHref = await buildPatientPortalExchangeUrl(patient.id, `/dashboard/${patient.id}`)
  } catch (e) {
    console.error('patient portal exchange url', e)
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        <Link href="/internal/patients" className="text-neutral-600 hover:text-neutral-900 hover:underline">
          Patients
        </Link>
        <span className="mx-2 text-neutral-400">/</span>
        Case
      </p>
      <h1 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
        {[patient.first_name, patient.last_name].filter(Boolean).join(' ') || 'Patient'}
      </h1>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-neutral-500">Email</dt>
          <dd>{patient.email}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">Phone</dt>
          <dd className="font-mono text-xs">{formatE164UsDisplay(patient.phone)}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">DOB</dt>
          <dd>{formatDob(patient.dob)}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">Patient dashboard</dt>
          <dd>
            <Link href={patientViewHref} className="font-medium text-neutral-900 underline">
              Open patient view
            </Link>
          </dd>
        </div>
      </dl>

      <section className="mt-8">
        <CaseProtocolForm
          patientId={patientId}
          initialAssignedTo={stateRow?.assigned_to ?? null}
          staffOptions={staffRows ?? []}
        />
      </section>

      <section className="mt-4">
        <SendTemplateTestForm patientId={patientId} />
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Latest intake</h2>
        {!intake.available ? (
          <p className="mt-3 text-sm text-neutral-500">Intake form metadata is not available.</p>
        ) : !intake.submissionId ? (
          <p className="mt-3 text-sm text-neutral-500">No intake submission yet.</p>
        ) : (
          <div className="mt-3 space-y-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-neutral-500">
              Submitted{' '}
              {intake.submittedAt
                ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(intake.submittedAt)
                  )
                : '—'}
            </p>
            <p className="text-sm text-neutral-800">
              <span className="font-medium">Goals:</span>{' '}
              {typeof intake.answers.goals_summary === 'string' && intake.answers.goals_summary
                ? intake.answers.goals_summary
                : '—'}
            </p>
            <p className="text-sm text-neutral-800">
              <span className="font-medium">Questions/concerns:</span>{' '}
              {typeof intake.answers.questions_or_concerns === 'string' && intake.answers.questions_or_concerns
                ? intake.answers.questions_or_concerns
                : '—'}
            </p>
            {intake.attachments.length > 0 ? (
              <div className="pt-2">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Uploaded labs/docs</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {intake.attachments.map((a) => (
                    <li key={a.object_path}>
                      {a.signed_url ? (
                        <Link href={a.signed_url} target="_blank" rel="noreferrer" className="underline">
                          {a.file_name}
                        </Link>
                      ) : (
                        <span>{a.file_name}</span>
                      )}
                      <span className="ml-2 text-xs text-neutral-500">({Math.ceil(a.size_bytes / 1024)} KB)</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </section>

      <AdminHistoryPanel
        payments={paymentHistory}
        orders={orderHistory}
        refills={refillHistory}
        nowIso={new Date().toISOString()}
      />

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Care programs</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Program and treatment tracks for this patient.
        </p>
        {!care.available ? (
          <p className="mt-4 rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Care program tables are not available yet. Run migration{' '}
            <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">
              20260422010000_care_programs_treatment_items_v1.sql
            </code>{' '}
            to enable this section.
          </p>
        ) : care.programs.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center text-sm text-neutral-500">
            No care programs yet for this patient.
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {care.programs.map((program) => {
              const items = care.treatmentItems.filter((i) => i.care_program_id === program.id)
              return (
                <article key={program.id} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {program.title?.trim() || humanizeToken(program.program_type)}
                      </h3>
                      <p className="mt-0.5 text-xs text-neutral-500">
                        Type: {humanizeToken(program.program_type)} · Status: {humanizeToken(program.status)}
                      </p>
                      <UpdateCareProgramStatusForm
                        patientId={patientId}
                        careProgramId={program.id}
                        currentStatus={program.status}
                        allowedNextStatuses={allowedNextStatuses(transitions, 'care_program', program.status)}
                      />
                    </div>
                    <time className="text-xs text-neutral-500" dateTime={program.updated_at}>
                      Updated{' '}
                      {new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      }).format(new Date(program.updated_at))}
                    </time>
                  </div>

                  {items.length === 0 ? (
                    <p className="mt-3 text-xs text-neutral-500">No treatment items under this program yet.</p>
                  ) : (
                    <ul className="mt-3 space-y-2">
                      {items.map((item) => (
                        <li key={item.id} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                          <p className="text-sm font-medium text-neutral-900">{item.display_name}</p>
                          <p className="mt-0.5 text-xs text-neutral-600">
                            Key: <span className="font-mono">{item.treatment_key}</span>
                            {' · '}
                            Status: {humanizeToken(item.status)}
                            {item.category ? ` · Category: ${humanizeToken(item.category)}` : ''}
                          </p>
                          <p className="mt-1 text-xs text-neutral-700">
                            <span className="font-medium text-neutral-800">Dose:</span>{' '}
                            {formatDosageSummary(item.dosage, item.metadata)}
                          </p>
                          <UpdateTreatmentStatusForm
                            patientId={patientId}
                            treatmentItemId={item.id}
                            currentStatus={item.status}
                            allowedNextStatuses={allowedNextStatuses(transitions, 'treatment_item', item.status)}
                          />
                          <RequestRefillForm
                            patientId={patientId}
                            treatmentItemId={item.id}
                            displayName={item.display_name}
                            currentStatus={item.status}
                          />
                          <GenerateRxPdfForm
                            patientId={patientId}
                            treatmentItemId={item.id}
                            displayName={item.display_name}
                          />
                          <PreparePharmacyDispatchForm
                            patientId={patientId}
                            treatmentItemId={item.id}
                            displayName={item.display_name}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        )}
        {care.available && refillDueItems.length > 0 ? (
          <RequestBulkRefillsForm patientId={patientId} items={refillDueItems} />
        ) : null}
      </section>

      <AddCatalogTreatmentForm
        patientId={patientId}
        programs={catalogProgramPicks}
        treatmentItems={catalogTreatmentPicks}
        providerOptions={providerOptions}
        disabled={!care.available}
      />

      <CreateClinicalVisitForm
        patientId={patientId}
        treatmentOptions={care.treatmentItems.map((item) => ({
          id: item.id,
          displayName: item.display_name,
          status: item.status,
        }))}
        providerOptions={providerOptions}
      />

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Clinical visits / progress notes</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Visit-centric notes signed by providers with linked Rx safety addenda.
        </p>
        {!clinical.available ? (
          <p className="mt-4 rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Clinical visit tables are not available yet. Run migration{' '}
            <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">
              20260423170000_clinical_visits_and_rx_reviews.sql
            </code>
            .
          </p>
        ) : clinical.visits.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center text-sm text-neutral-500">
            No clinical visit notes yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {clinical.visits.map((visit) => {
              const diagnosisCodes = Array.isArray(visit.diagnosis_codes)
                ? (visit.diagnosis_codes as unknown[]).filter((v): v is string => typeof v === 'string')
                : []
              const reviews = rxReviewsByVisitId.get(visit.id) ?? []
              const addenda = addendaByVisitId.get(visit.id) ?? []
              const artifact = (visit.pdf_artifact as Record<string, unknown> | null) ?? null
              const objectPath =
                artifact && typeof artifact.object_path === 'string' ? artifact.object_path : null
              return (
                <li key={visit.id} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
                    <span className="font-medium text-neutral-800">{humanizeToken(visit.visit_type)}</span>
                    <time dateTime={visit.visit_at}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(visit.visit_at)
                      )}
                    </time>
                  </div>
                  {diagnosisCodes.length > 0 ? (
                    <p className="mt-1 text-xs text-neutral-600">Dx: {diagnosisCodes.join(', ')}</p>
                  ) : null}
                  <p className="mt-1 text-xs text-neutral-500">
                    {visit.published_to_patient_at
                      ? 'PDF published to patient portal'
                      : 'PDF not published to patient portal'}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Note state: {visit.status === 'locked' ? 'Locked' : 'Editable (not yet locked)'}
                  </p>
                  {objectPath ? <p className="mt-1 text-xs font-mono text-neutral-500">PDF: {objectPath}</p> : null}
                  <pre className="mt-2 max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-neutral-50 p-3 text-xs text-neutral-700">
                    {visit.note_text}
                  </pre>
                  {reviews.length > 0 ? (
                    <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-2.5">
                      <p className="text-xs font-medium text-neutral-700">Rx safety addenda</p>
                      <ul className="mt-1 space-y-1 text-xs text-neutral-700">
                        {reviews.map((review) => (
                          <li key={review.id}>
                            {treatmentNameById.get(review.treatment_item_id) ?? review.treatment_item_id}: {humanizeToken(review.decision)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {addenda.length > 0 ? (
                    <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-2.5">
                      <p className="text-xs font-medium text-neutral-700">Visit addenda</p>
                      <ul className="mt-1 space-y-2 text-xs text-neutral-700">
                        {addenda.map((addendum) => (
                          <li key={addendum.id} className="rounded border border-neutral-200 bg-white p-2">
                            <p className="text-[11px] text-neutral-500">
                              {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                                new Date(addendum.created_at)
                              )}
                            </p>
                            <p className="mt-1 whitespace-pre-wrap">{addendum.addendum_text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <ClinicalVisitPdfPublishForm patientId={patientId} clinicalVisitId={visit.id} />
                  <CreateClinicalVisitAddendumForm
                    patientId={patientId}
                    clinicalVisitId={visit.id}
                    disabled={visit.status !== 'locked'}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <CreateLabOrderForm
        patientId={patientId}
        patientDisplayName={[patient.first_name, patient.last_name].filter(Boolean).join(' ') || 'Patient'}
        providerOptions={providerOptions}
      />

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Lab requisitions</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Generated lab PDFs published to patient portal and available for staff download.
        </p>
        {!labOrders.available ? (
          <p className="mt-4 rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Lab order table is not available yet. Run migration{' '}
            <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">20260423150000_lab_orders_and_storage.sql</code>.
          </p>
        ) : labOrders.rows.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center text-sm text-neutral-500">
            No lab requisitions yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {labOrders.rows.map((order) => {
              const tests = Array.isArray(order.tests) ? (order.tests as Array<Record<string, unknown>>) : []
              const md = (order.metadata as Record<string, unknown> | null) ?? {}
              const diagnosisCodes = Array.isArray(md.diagnosis_codes)
                ? (md.diagnosis_codes as unknown[]).filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
                : []
              const testLabels = tests.map((test) => {
                const label = typeof test.label === 'string' ? test.label : null
                const code = typeof test.code === 'string' ? test.code : ''
                return label || labelLabTest(code)
              })
              const artifact = (order.pdf_artifact as Record<string, unknown> | null) ?? null
              const objectPath =
                artifact && typeof artifact.object_path === 'string' ? artifact.object_path : null
              return (
                <li key={order.id} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
                    <span className="font-medium text-neutral-800">
                      {humanizeToken(order.status)} · {order.order_date}
                    </span>
                    <time dateTime={order.created_at}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(order.created_at)
                      )}
                    </time>
                  </div>
                  <p className="mt-1 text-sm text-neutral-900">
                    {testLabels.length > 0 ? testLabels.join(' · ') : 'No tests attached'}
                  </p>
                  {diagnosisCodes.length > 0 ? (
                    <p className="mt-1 text-xs text-neutral-600">Dx: {diagnosisCodes.join(', ')}</p>
                  ) : null}
                  <p className="mt-1 text-xs text-neutral-500">
                    {order.published_to_patient_at ? 'Published to patient portal' : 'Not published yet'}
                  </p>
                  {objectPath ? <p className="mt-1 text-xs font-mono text-neutral-500">PDF: {objectPath}</p> : null}
                  <LabOrderDispatchForm patientId={patientId} labOrderId={order.id} />
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-neutral-900">Open support requests</h2>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
            {openSupportRequests.length}
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500">
          Recent patient messages and callback asks that still need follow-up.
        </p>
        {openSupportRequests.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-5 text-sm text-neutral-500">
            No open support requests.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {openSupportRequests.map((ev) => {
              const currentStatus = supportStatusFromPayload(ev.payload)
              const eventType =
                ev.event_type === 'patient_callback_requested'
                  ? 'patient_callback_requested'
                  : 'patient_message_submitted'
              const requestKind = eventType === 'patient_callback_requested' ? 'Callback request' : 'Message'
              return (
                <li key={ev.id} className="rounded-lg border border-amber-200 bg-amber-50/40 p-4 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
                    <span className="font-medium text-neutral-800">
                      {requestKind} · <span className="text-amber-800">{humanizeToken(currentStatus)}</span>
                    </span>
                    <time dateTime={ev.created_at}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(ev.created_at)
                      )}
                    </time>
                  </div>
                  {ev.body ? <p className="mt-2 whitespace-pre-wrap text-sm text-neutral-800">{ev.body}</p> : null}
                  <SupportRequestActionsForm
                    patientId={patientId}
                    eventId={ev.id}
                    eventType={eventType}
                    currentStatus={currentStatus}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Refill requests</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Queue for this patient. Approving keeps the treatment in refill pending until fulfilled (pharmacy/shipment).
          Denied, cancelled, or fulfilled updates the treatment when it is still refill pending.
        </p>
        {!refills.available ? (
          <p className="mt-4 rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Refill request table is not available yet. Run migration{' '}
            <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">20260422020000_refill_requests.sql</code>.
          </p>
        ) : refills.rows.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center text-sm text-neutral-500">
            No refill requests yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {refills.rows.map((rr) => {
              const treatmentLabel = treatmentNameById.get(rr.treatment_item_id) ?? `Treatment ${rr.treatment_item_id.slice(0, 8)}…`
              const nextOpts =
                isValidRefillRequestStatus(rr.status) ? allowedNextRefillRequestStatuses(rr.status) : []
              return (
                <li key={rr.id} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
                    <span className="font-medium text-neutral-800">{humanizeToken(rr.status)}</span>
                    <time dateTime={rr.created_at}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(rr.created_at)
                      )}
                    </time>
                  </div>
                  <p className="mt-1 text-sm text-neutral-900">{treatmentLabel}</p>
                  {rr.patient_note ? (
                    <p className="mt-2 text-xs text-neutral-600">
                      <span className="font-medium text-neutral-700">Request note:</span> {rr.patient_note}
                    </p>
                  ) : null}
                  {rr.staff_note ? (
                    <p className="mt-1 text-xs text-neutral-600 whitespace-pre-wrap">
                      <span className="font-medium text-neutral-700">Staff notes:</span> {rr.staff_note}
                    </p>
                  ) : null}
                  <RefillRequestActionsForm
                    patientId={patientId}
                    refillRequestId={rr.id}
                    currentStatus={rr.status}
                    allowedNextStatuses={nextOpts}
                    treatmentLabel={treatmentLabel}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Supplement fulfillment</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Auto-queued from Stripe supplement purchases. Prescriber review is not required for these rows.
        </p>
        {!supplements.available ? (
          <p className="mt-4 rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Supplement fulfillment table is not available yet. Run migration{' '}
            <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">
              20260422120000_supplement_checkout_routing.sql
            </code>
            .
          </p>
        ) : supplements.rows.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center text-sm text-neutral-500">
            No supplement fulfillment orders yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {supplements.rows.map((row) => {
              const items = Array.isArray(row.items) ? (row.items as Array<Record<string, unknown>>) : []
              const shipping = (row.shipping_snapshot as Record<string, unknown>) ?? {}
              const itemLines = items.map((it, idx) => {
                const name =
                  (typeof it.display_name === 'string' && it.display_name) ||
                  (typeof it.catalog_medication_id === 'string' && it.catalog_medication_id) ||
                  `Item ${idx + 1}`
                const qty = typeof it.quantity === 'number' ? it.quantity : 1
                return `${name} x${qty}`
              })
              const shipName = typeof shipping.patient_name === 'string' ? shipping.patient_name : '—'
              const shipPhone = typeof shipping.phone === 'string' ? shipping.phone : '—'
              const shipLine1 = typeof shipping.address_line1 === 'string' ? shipping.address_line1 : '—'
              const shipLine2 = typeof shipping.address_line2 === 'string' ? shipping.address_line2 : ''
              const shipCity = typeof shipping.city === 'string' ? shipping.city : ''
              const shipState = typeof shipping.state === 'string' ? shipping.state : ''
              const shipZip = typeof shipping.postal_code === 'string' ? shipping.postal_code : ''
              const cityStateZip = [shipCity, shipState, shipZip].filter(Boolean).join(', ')
              const allowedNext = allowedNextSupplementFulfillmentStatuses(row.status)
              return (
                <li key={row.id} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
                    <span className="font-medium text-neutral-800">{labelSupplementFulfillmentStatus(row.status)}</span>
                    <time dateTime={row.created_at}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(row.created_at)
                      )}
                    </time>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 font-mono">Checkout: {row.stripe_checkout_session_id}</p>
                  <p className="mt-2 text-sm text-neutral-900">
                    {itemLines.length > 0 ? itemLines.join(' · ') : 'No items'}
                  </p>
                  <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700">
                    <p className="font-medium text-neutral-800">Ship to (on file snapshot)</p>
                    <p className="mt-1">{shipName}</p>
                    <p>{shipPhone}</p>
                    <p>{shipLine1}</p>
                    {shipLine2 ? <p>{shipLine2}</p> : null}
                    <p>{cityStateZip || '—'}</p>
                  </div>
                  <SupplementFulfillmentActionsForm
                    patientId={patientId}
                    fulfillmentOrderId={row.id}
                    currentStatus={row.status}
                    allowedNextStatuses={allowedNext}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Timeline</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Status changes, notes, and assignment updates appear newest first.
        </p>

        <div className="mt-4 space-y-3">
          {events.length === 0 ? (
            <p className="rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-8 text-center text-sm text-neutral-500">
              No events yet. Add a note below.
            </p>
          ) : (
            <ul className="space-y-3">
              {events.map((ev) => (
                <li
                  key={ev.id}
                  className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
                    <span className="font-medium text-neutral-700">
                      {ev.event_type === 'staff_note'
                        ? 'Staff note'
                        : ev.event_type === 'status_changed'
                          ? 'Status changed'
                          : ev.event_type === 'assignee_changed'
                            ? 'Assignee updated'
                            : ev.event_type === 'stripe_checkout_completed'
                              ? 'Payment (Stripe)'
                              : ev.event_type === 'refill_requested'
                                ? 'Refill requested'
                                : ev.event_type === 'refill_request_status_changed'
                                  ? 'Refill request updated'
                                  : ev.event_type === 'supplement_purchase_recorded'
                                    ? 'Supplement purchase recorded'
                                  : ev.event_type === 'supplement_fulfillment_status_changed'
                                    ? 'Supplement fulfillment updated'
                                  : ev.event_type === 'patient_message_submitted'
                                    ? 'Patient message'
                                  : ev.event_type === 'patient_callback_requested'
                                    ? 'Patient callback request'
                                  : ev.event_type === 'patient_treatment_checkin_submitted'
                                    ? 'Patient treatment check-in'
                                  : ev.event_type === 'patient_treatment_checkin_reviewed'
                                    ? 'Check-in reviewed'
                                  : ev.event_type === 'support_request_status_updated'
                                    ? 'Support request updated'
                                  : ev.event_type === 'catalog_treatment_prescribed'
                                    ? 'Catalog treatment prescribed'
                                    : ev.event_type === 'clinical_visit_documented'
                                      ? 'Clinical visit documented'
                                      : ev.event_type === 'clinical_visit_pdf_published'
                                        ? 'Clinical visit PDF published'
                                      : ev.event_type === 'clinical_visit_addendum_created'
                                        ? 'Clinical visit addendum created'
                                    : ev.event_type === 'rx_pdf_generated'
                                      ? 'Rx PDF generated'
                                      : ev.event_type === 'lab_order_published'
                                        ? 'Lab requisition published'
                                      : ev.event_type === 'lab_order_dispatch_updated'
                                        ? 'Lab requisition dispatch updated'
                                      : ev.event_type === 'pharmacy_dispatch_prepared'
                                        ? 'Pharmacy dispatch prepared'
                                    : ev.event_type}
                      {ev.actor_display_name ? (
                        <span className="font-normal text-neutral-500"> · {ev.actor_display_name}</span>
                      ) : ev.actor_user_id === null && ev.event_type !== 'staff_note' ? (
                        <span className="font-normal text-neutral-500"> · System</span>
                      ) : null}
                    </span>
                    <time dateTime={ev.created_at}>
                      {new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      }).format(new Date(ev.created_at))}
                    </time>
                  </div>
                  {ev.body ? <p className="mt-2 whitespace-pre-wrap text-neutral-800">{ev.body}</p> : null}
                  {ev.event_type === 'patient_treatment_checkin_submitted' &&
                  checkinReviewedMetaBySourceId.has(ev.id) ? (
                    <p className="mt-2 text-xs text-emerald-700">
                      Reviewed by {checkinReviewedMetaBySourceId.get(ev.id)?.reviewer} on{' '}
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(checkinReviewedMetaBySourceId.get(ev.id)!.reviewedAt)
                      )}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="mt-8">
        <AddNoteForm patientId={patientId} />
      </section>
    </div>
  )
}

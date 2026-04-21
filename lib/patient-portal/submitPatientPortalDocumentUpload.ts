import { randomUUID } from 'crypto'
import type { SupabaseClient } from '@supabase/supabase-js'
import { logAuditEvent } from '@/lib/audit/logAuditEvent'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'

const BUCKET = 'intake_uploads'
const MAX_BYTES = 10 * 1024 * 1024

const ALLOWED_MIME = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
])

export type PortalDocumentKind = 'lab' | 'imaging' | 'pathology' | 'infectious' | 'other'

function sanitizeFileName(fileName: string): string {
  const cleaned = fileName.replace(/[^a-zA-Z0-9._-]/g, '_')
  return cleaned.length > 120 ? cleaned.slice(-120) : cleaned
}

export type SubmitPatientPortalDocumentUploadResult =
  | { ok: true; diagnosticReportId: string }
  | { ok: false; error: string; status: number }

/**
 * Patient portal: store a lab / imaging / other diagnostic file and create a chart row + timeline event.
 * Caller must verify portal session for `patientId` before invoking.
 */
export async function submitPatientPortalDocumentUpload(
  admin: SupabaseClient,
  patientId: string,
  input: {
    fileBytes: Uint8Array
    mimeType: string
    rawFileName: string
    diagnosticKind: PortalDocumentKind
    title?: string | null
    treatmentItemId?: string | null
  }
): Promise<SubmitPatientPortalDocumentUploadResult> {
  if (!ALLOWED_MIME.has(input.mimeType)) {
    return { ok: false, error: 'Unsupported file type. Use PDF, JPG, PNG, or WEBP.', status: 400 }
  }
  if (input.fileBytes.length === 0) {
    return { ok: false, error: 'File is empty.', status: 400 }
  }
  if (input.fileBytes.length > MAX_BYTES) {
    return { ok: false, error: 'File too large. Max 10MB.', status: 400 }
  }

  let careProgramId: string | null = null
  if (input.treatmentItemId) {
    const { data: ti, error: tiErr } = await admin
      .from('treatment_items')
      .select('id, patient_id, care_program_id')
      .eq('id', input.treatmentItemId)
      .maybeSingle()
    if (tiErr || !ti) {
      return { ok: false, error: 'Treatment not found.', status: 404 }
    }
    if (ti.patient_id !== patientId) {
      return { ok: false, error: 'Treatment does not belong to this account.', status: 403 }
    }
    careProgramId = typeof ti.care_program_id === 'string' ? ti.care_program_id : null
  }

  const safeName = sanitizeFileName(input.rawFileName || 'upload')
  const objectPath = `${patientId}/portal-documents/${Date.now()}-${randomUUID().slice(0, 8)}-${safeName}`

  const up = await admin.storage.from(BUCKET).upload(objectPath, input.fileBytes, {
    contentType: input.mimeType,
    upsert: false,
  })
  if (up.error) {
    console.error('submitPatientPortalDocumentUpload.storage', up.error)
    return { ok: false, error: 'Could not store file.', status: 500 }
  }

  const titleBase = (input.title ?? '').trim() || safeName
  const dedupeKey = `portal-doc:${patientId}:${randomUUID()}`
  const uploadedAt = new Date().toISOString()

  const metadata = {
    source: 'patient_portal' as const,
    upload: {
      bucket: BUCKET,
      object_path: objectPath,
      file_name: safeName,
      mime_type: input.mimeType,
      size_bytes: input.fileBytes.length,
      uploaded_at: uploadedAt,
    },
    treatment_item_id: input.treatmentItemId ?? null,
  }

  const { data: row, error: insErr } = await admin
    .from('patient_diagnostic_reports')
    .insert({
      patient_id: patientId,
      source_review_id: null,
      source_submission_id: null,
      source_attachment_path: objectPath,
      source_dedupe_key: dedupeKey,
      diagnostic_kind: input.diagnosticKind,
      modality: null,
      title: titleBase,
      body_site: null,
      performed_at: null,
      status: 'unknown',
      result_text: 'File uploaded from patient portal. Open the attachment to review.',
      impression_text: null,
      confidence: null,
      metadata,
    })
    .select('id')
    .maybeSingle()

  if (insErr || !row) {
    console.error('submitPatientPortalDocumentUpload.insert_report', insErr)
    await admin.storage.from(BUCKET).remove([objectPath])
    return { ok: false, error: 'Could not save document record.', status: 500 }
  }

  const reportId = row.id as string

  const body = `Uploaded ${input.diagnosticKind === 'lab' ? 'lab / lab report' : humanKind(input.diagnosticKind)}: ${titleBase}`

  const { error: tlErr } = await admin.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: careProgramId,
    treatment_item_id: input.treatmentItemId ?? null,
    event_type: 'patient_document_uploaded',
    body,
    actor_user_id: null,
    payload: {
      diagnostic_report_id: reportId,
      diagnostic_kind: input.diagnosticKind,
      file_name: safeName,
      mime_type: input.mimeType,
      bucket: BUCKET,
      object_path: objectPath,
      source: 'patient_portal',
    },
  })
  if (tlErr) console.error('submitPatientPortalDocumentUpload.timeline', tlErr)

  await logAuditEvent({
    actorUserId: null,
    action: 'patient_diagnostic.portal_upload',
    resourceType: 'patient_diagnostic_reports',
    resourceId: reportId,
    patientId,
    metadata: { diagnostic_kind: input.diagnosticKind, object_path: objectPath },
  })

  await enqueueChartAiReview(admin, {
    patientId,
    triggerEventType: 'patient_portal_document_uploaded',
    triggerRef: reportId,
  })

  return { ok: true, diagnosticReportId: reportId }
}

function humanKind(k: PortalDocumentKind): string {
  switch (k) {
    case 'imaging':
      return 'imaging / diagnostic image'
    case 'pathology':
      return 'pathology report'
    case 'infectious':
      return 'infectious disease report'
    case 'other':
      return 'document'
    default:
      return 'document'
  }
}

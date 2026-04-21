import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  submitPatientPortalDocumentUpload,
  type PortalDocumentKind,
} from '@/lib/patient-portal/submitPatientPortalDocumentUpload'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const KINDS = new Set<PortalDocumentKind>(['lab', 'imaging', 'pathology', 'infectious', 'other'])

function isKind(v: unknown): v is PortalDocumentKind {
  return typeof v === 'string' && KINDS.has(v as PortalDocumentKind)
}

export async function POST(request: Request) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const patientId = String(formData.get('patientId') ?? '').trim()
  const treatmentItemIdRaw = String(formData.get('treatmentItemId') ?? '').trim()
  const treatmentItemId = treatmentItemIdRaw && UUID_RE.test(treatmentItemIdRaw) ? treatmentItemIdRaw : null
  const title = String(formData.get('title') ?? '').trim() || null
  const diagnosticKindRaw = formData.get('diagnosticKind')
  const file = formData.get('file')

  if (!UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patient id.' }, { status: 400 })
  }
  if (!isKind(diagnosticKindRaw)) {
    return NextResponse.json({ error: 'Select a document type.' }, { status: 400 })
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'File is required.' }, { status: 400 })
  }

  const portalOk = await assertPatientPortalSessionOnly(patientId)
  if (!portalOk) {
    return NextResponse.json({ error: 'Sign in again using your secure dashboard link.' }, { status: 401 })
  }

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('patient-document-upload: admin client', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const fileBytes = new Uint8Array(arrayBuffer)

  const result = await submitPatientPortalDocumentUpload(admin, patientId, {
    fileBytes,
    mimeType: file.type,
    rawFileName: file.name,
    diagnosticKind: diagnosticKindRaw,
    title,
    treatmentItemId,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ ok: true, diagnosticReportId: result.diagnosticReportId })
}

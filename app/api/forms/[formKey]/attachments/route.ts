import { NextResponse } from 'next/server'
import { getLatestFormId } from '@/lib/forms/resolveFormId'
import { createAdminClient } from '@/lib/supabase/admin'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const ALLOWED_MIME = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
])

const MAX_BYTES = 10 * 1024 * 1024
const BUCKET = 'intake_uploads'

function sanitizeFileName(fileName: string): string {
  const cleaned = fileName.replace(/[^a-zA-Z0-9._-]/g, '_')
  return cleaned.length > 120 ? cleaned.slice(-120) : cleaned
}

type IntakeAttachment = {
  bucket: string
  object_path: string
  file_name: string
  mime_type: string
  size_bytes: number
  uploaded_at: string
}

export async function POST(request: Request, context: { params: Promise<{ formKey: string }> }) {
  const { formKey } = await context.params
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const patientId = String(formData.get('patientId') ?? '').trim()
  const submissionId = String(formData.get('submissionId') ?? '').trim()
  const fieldName = String(formData.get('fieldName') ?? '').trim() || 'attachments'
  const file = formData.get('file')

  if (!UUID_RE.test(patientId) || !UUID_RE.test(submissionId)) {
    return NextResponse.json({ error: 'Invalid patient or submission id.' }, { status: 400 })
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'File is required.' }, { status: 400 })
  }
  if (!ALLOWED_MIME.has(file.type)) {
    return NextResponse.json({ error: 'Unsupported file type. Use PDF, JPG, PNG, or WEBP.' }, { status: 400 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File too large. Max 10MB per file.' }, { status: 400 })
  }

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('forms attachments: admin client', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const formId = await getLatestFormId(admin, formKey)
  const { data: submission, error: subErr } = await admin
    .from('form_submissions')
    .select('id, patient_id, form_id, answers')
    .eq('id', submissionId)
    .eq('patient_id', patientId)
    .eq('form_id', formId)
    .maybeSingle()

  if (subErr || !submission) {
    return NextResponse.json({ error: 'Submission not found for upload.' }, { status: 404 })
  }

  const safeName = sanitizeFileName(file.name || 'upload')
  const objectPath = `${patientId}/${submissionId}/${Date.now()}-${safeName}`
  const arrayBuffer = await file.arrayBuffer()
  const bytes = new Uint8Array(arrayBuffer)

  const up = await admin.storage.from(BUCKET).upload(objectPath, bytes, {
    contentType: file.type,
    upsert: false,
  })
  if (up.error) {
    console.error('forms attachments: upload', up.error)
    return NextResponse.json({ error: 'Could not store file.' }, { status: 500 })
  }

  const uploadedAt = new Date().toISOString()
  const metadata: IntakeAttachment = {
    bucket: BUCKET,
    object_path: objectPath,
    file_name: safeName,
    mime_type: file.type,
    size_bytes: file.size,
    uploaded_at: uploadedAt,
  }

  const priorAnswers = ((submission.answers as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const priorArr = Array.isArray(priorAnswers[fieldName]) ? (priorAnswers[fieldName] as unknown[]) : []
  const nextAnswers: Record<string, unknown> = {
    ...priorAnswers,
    [fieldName]: [...priorArr, metadata],
  }

  const { error: updErr } = await admin
    .from('form_submissions')
    .update({ answers: nextAnswers })
    .eq('id', submissionId)
  if (updErr) {
    console.error('forms attachments: submission update', updErr)
    return NextResponse.json({ error: 'File uploaded, but failed to attach metadata.' }, { status: 500 })
  }

  await enqueueChartAiReview(admin, {
    patientId,
    triggerEventType: 'intake_attachment_uploaded',
    triggerRef: objectPath,
  })

  return NextResponse.json({ ok: true, attachment: metadata })
}


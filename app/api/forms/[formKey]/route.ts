import { NextResponse } from 'next/server'
import { getFormDefinition } from '@/lib/forms'
import { getLatestFormId } from '@/lib/forms/resolveFormId'
import { sanitizeAnswers, validateAnswers } from '@/lib/forms/validate'
import { deriveCanonicalState } from '@/lib/protocol/derive'
import { resolvePatientFromAnswers } from '@/lib/patients/resolvePatient'
import { signPatientPortalBootstrapToken } from '@/lib/patient-portal/tokens'
import { createAdminClient } from '@/lib/supabase/admin'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'

type PostBody = {
  answers?: Record<string, unknown>
}

export async function POST(request: Request, context: { params: Promise<{ formKey: string }> }) {
  const { formKey } = await context.params
  const def = getFormDefinition(formKey)

  if (!def) {
    return NextResponse.json({ error: 'Unknown form' }, { status: 404 })
  }

  let body: PostBody
  try {
    body = (await request.json()) as PostBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const answers = body.answers
  if (!answers || typeof answers !== 'object') {
    return NextResponse.json({ error: 'Expected { answers: { ... } }' }, { status: 400 })
  }

  const sanitizedAnswers = sanitizeAnswers(def, answers)
  const validationError = validateAnswers(def, sanitizedAnswers)
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 })
  }

  try {
    const supabase = createAdminClient()
    const { patientId } = await resolvePatientFromAnswers(supabase, sanitizedAnswers)
    const formId = await getLatestFormId(supabase, formKey)

    const { data: submission, error: subErr } = await supabase
      .from('form_submissions')
      .insert({
        form_id: formId,
        patient_id: patientId,
        answers: sanitizedAnswers,
      })
      .select('id')
      .single()

    if (subErr || !submission) {
      console.error(subErr)
      return NextResponse.json({ error: subErr?.message ?? 'Failed to save submission' }, { status: 500 })
    }

    await deriveCanonicalState({
      supabase,
      formKey,
      patientId,
      answers: sanitizedAnswers,
    })

    await enqueueChartAiReview(supabase, {
      patientId,
      triggerEventType: 'intake_submitted',
      triggerRef: submission.id,
    })

    let portalToken: string | null = null
    try {
      portalToken = await signPatientPortalBootstrapToken(patientId)
    } catch (e) {
      console.error('forms POST: patient portal bootstrap', e)
    }

    return NextResponse.json(
      {
        success: true,
        submissionId: submission.id,
        patientId,
        portalToken,
      },
      { status: 200 }
    )
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error'
    console.error(err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

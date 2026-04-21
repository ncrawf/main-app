import { createHash } from 'crypto'
import type { SupabaseClient } from '@supabase/supabase-js'
import { buildChartReviewDraft } from '@/lib/ai/chartReviewEngine'
import { AI_GOVERNANCE_POLICY, clampConfidence } from '@/lib/ai/governancePolicy'
import { loadChartReviewContext } from '@/lib/ai/chartReviewContext'

type ChartAiReviewJobPayload = {
  patient_id: string
  trigger_event_type: string
  trigger_ref?: string | null
}

function asPayload(raw: unknown): ChartAiReviewJobPayload | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const p = raw as Record<string, unknown>
  const patientId = typeof p.patient_id === 'string' ? p.patient_id : null
  const triggerEventType = typeof p.trigger_event_type === 'string' ? p.trigger_event_type : null
  const triggerRef = typeof p.trigger_ref === 'string' ? p.trigger_ref : null
  if (!patientId || !triggerEventType) return null
  return {
    patient_id: patientId,
    trigger_event_type: triggerEventType,
    trigger_ref: triggerRef,
  }
}

export async function processChartAiReviewJob(
  admin: SupabaseClient,
  rawPayload: unknown
): Promise<{ ok: true } | { ok: false; retryable: boolean; error: string }> {
  const payload = asPayload(rawPayload)
  if (!payload) return { ok: false, retryable: false, error: 'invalid chart.ai_review payload' }

  const context = await loadChartReviewContext(admin, payload.patient_id)
  if (!context) {
    return { ok: false, retryable: true, error: 'patient context unavailable' }
  }

  const draft = buildChartReviewDraft(context)
  const contextHash = createHash('sha256').update(JSON.stringify(context)).digest('hex')

  const { data: inserted, error: reviewErr } = await admin
    .from('patient_chart_ai_reviews')
    .insert({
      patient_id: payload.patient_id,
      trigger_event_type: payload.trigger_event_type,
      trigger_ref: payload.trigger_ref ?? null,
      status: 'draft',
      model_provider: 'internal',
      model_name: 'heuristic-v0',
      input_snapshot: {
        context_hash: contextHash,
        generated_at: new Date().toISOString(),
        context_overview: {
          has_intake_submission: !!context.latestIntake.submission_id,
          attachment_count: context.latestIntake.attachments.length,
          treatment_item_count: context.care.treatmentItems.length,
          open_support_requests: context.support.openSupportRequests,
          latest_refill_checkin_profile: context.care.latestRefillCheckIn.profile,
          latest_refill_request_id: context.care.latestRefillCheckIn.refill_request_id,
        },
      },
      output_summary: draft.summary,
      output_payload: {
        findings: draft.findings,
        risk_flags: draft.riskFlags,
        missing_info: draft.missingInfo,
        extracted_labs: draft.extractedLabs,
        extracted_diagnostics: draft.extractedDiagnostics,
        pathway_decisions: draft.pathwayDecisions,
        action_plan: draft.actionPlan,
        governance_policy: AI_GOVERNANCE_POLICY,
      },
      recommendation_draft: draft.recommendationDraft,
    })
    .select('id')
    .maybeSingle()

  if (reviewErr || !inserted) {
    const msg = reviewErr?.message ?? 'failed inserting patient_chart_ai_reviews'
    if (msg.includes('does not exist')) return { ok: false, retryable: false, error: msg }
    return { ok: false, retryable: true, error: msg }
  }

  if (draft.extractedLabs.length > 0) {
    const rows = draft.extractedLabs.map((obs) => {
      const dedupeKey = createHash('sha256')
        .update(`${payload.patient_id}|${obs.test_name}|${obs.observed_at ?? 'na'}|${obs.observed_value}`)
        .digest('hex')
      return {
        patient_id: payload.patient_id,
        source_review_id: inserted.id,
        source_submission_id: context.latestIntake.submission_id,
        source_dedupe_key: dedupeKey,
        test_name: obs.test_name,
        observed_value: obs.observed_value,
        value_numeric: obs.value_numeric,
        unit: obs.unit,
        observed_at: obs.observed_at,
        abnormal_flag: 'unknown',
        confidence: clampConfidence(obs.confidence),
        metadata: {
          extraction_source: 'intake_text',
          trigger_event_type: payload.trigger_event_type,
        },
      }
    })
    const { error: labErr } = await admin.from('patient_lab_observations').upsert(rows, {
      onConflict: 'source_dedupe_key',
      ignoreDuplicates: false,
    })
    if (labErr) console.error('processChartAiReviewJob.lab_upsert', labErr)
  }

  if (draft.extractedDiagnostics.length > 0) {
    const rows = draft.extractedDiagnostics.map((diag) => {
      const dedupeKey = createHash('sha256')
        .update(
          `${payload.patient_id}|${diag.diagnostic_kind}|${diag.modality ?? 'na'}|${diag.title}|${diag.performed_at ?? 'na'}|${diag.source_attachment_path ?? 'none'}`
        )
        .digest('hex')
      return {
        patient_id: payload.patient_id,
        source_review_id: inserted.id,
        source_submission_id: context.latestIntake.submission_id,
        source_attachment_path: diag.source_attachment_path,
        source_dedupe_key: dedupeKey,
        diagnostic_kind: diag.diagnostic_kind,
        modality: diag.modality,
        title: diag.title,
        body_site: diag.body_site,
        performed_at: diag.performed_at,
        status: 'unknown',
        result_text: diag.result_text,
        impression_text: diag.impression_text,
        confidence: clampConfidence(diag.confidence),
        metadata: {
          extraction_source: diag.source_attachment_path ? 'attachment_name_or_path' : 'intake_text',
          trigger_event_type: payload.trigger_event_type,
        },
      }
    })
    const { error: reportErr } = await admin.from('patient_diagnostic_reports').upsert(rows, {
      onConflict: 'source_dedupe_key',
      ignoreDuplicates: false,
    })
    if (reportErr) console.error('processChartAiReviewJob.diagnostic_upsert', reportErr)
  }

  return { ok: true }
}

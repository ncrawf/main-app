import type { ChartReviewContext } from '@/lib/ai/chartReviewContext'
import type { PathwayDecisionCard } from '@/lib/pathways/decisionContract'

type ExtractedLabObservationDraft = {
  test_name: string
  value_numeric: number
  observed_value: string
  unit: string | null
  observed_at: string | null
  confidence: number
}

type ExtractedDiagnosticReportDraft = {
  diagnostic_kind: 'lab' | 'imaging' | 'pathology' | 'infectious' | 'other'
  modality: string | null
  title: string
  body_site: string | null
  performed_at: string | null
  result_text: string | null
  impression_text: string | null
  confidence: number
  source_attachment_path: string | null
}

export type ChartReviewDraft = {
  summary: string
  recommendationDraft: string
  findings: string[]
  riskFlags: string[]
  missingInfo: string[]
  extractedLabs: ExtractedLabObservationDraft[]
  extractedDiagnostics: ExtractedDiagnosticReportDraft[]
  pathwayDecisions: Array<
    Pick<
      PathwayDecisionCard,
      | 'pathway_id'
      | 'state'
      | 'summary_readout'
      | 'what_changed'
      | 'why_this_step'
      | 'recommended_actions'
      | 'evidence_refs'
      | 'risk_flags'
    >
  >
  actionPlan: Array<{
    task_id: string
    title: string
    reason: string
    required_owner: 'provider' | 'care_team'
    required_due_state: 'before_treatment_action' | 'before_fulfillment'
    allowed_completion_actions: string[]
  }>
}

function summarizeRefillCheckIn(ctx: ChartReviewContext): string | null {
  const refill = ctx.care.latestRefillCheckIn
  if (!refill.refill_request_id) return null
  const parts: string[] = []
  if (refill.profile) parts.push(`profile=${refill.profile}`)
  if (refill.status) parts.push(`status=${refill.status}`)
  if (typeof refill.patient_note === 'string' && refill.patient_note.trim().length > 0) {
    parts.push(`note=${refill.patient_note.trim().slice(0, 320)}`)
  }
  return parts.length > 0 ? parts.join(' | ') : `refill_request=${refill.refill_request_id}`
}

function extractDateHint(text: string): string | null {
  const mdy = text.match(/\b(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})\b/)
  if (mdy) {
    const mm = mdy[1].padStart(2, '0')
    const dd = mdy[2].padStart(2, '0')
    const yyyy = mdy[3].length === 2 ? `20${mdy[3]}` : mdy[3]
    return `${yyyy}-${mm}-${dd}`
  }
  const my = text.match(/\b(\d{1,2})[\/-](\d{2,4})\b/)
  if (my) {
    const mm = my[1].padStart(2, '0')
    const yyyy = my[2].length === 2 ? `20${my[2]}` : my[2]
    return `${yyyy}-${mm}-01`
  }
  return null
}

function extractCommonLabsFromText(text: string): ExtractedLabObservationDraft[] {
  const analytes = [
    { name: 'TSH', pattern: /\bTSH\b[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)/gi, unit: 'uIU/mL' },
    { name: 'A1C', pattern: /\b(?:A1C|HbA1c)\b[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)/gi, unit: '%' },
    { name: 'Glucose', pattern: /\bGlucose\b[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)/gi, unit: 'mg/dL' },
    { name: 'LDL', pattern: /\bLDL\b[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)/gi, unit: 'mg/dL' },
    { name: 'Triglycerides', pattern: /\bTriglycerides?\b[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)/gi, unit: 'mg/dL' },
  ]

  const observedAt = extractDateHint(text)
  const out: ExtractedLabObservationDraft[] = []
  for (const analyte of analytes) {
    for (const m of text.matchAll(analyte.pattern)) {
      const rawValue = m[1]
      const n = Number(rawValue)
      if (!Number.isFinite(n)) continue
      out.push({
        test_name: analyte.name,
        value_numeric: n,
        observed_value: rawValue,
        unit: analyte.unit,
        observed_at: observedAt,
        confidence: 0.55,
      })
    }
  }
  return out
}

function classifyDiagnosticFromLabel(label: string): {
  diagnostic_kind: 'lab' | 'imaging' | 'pathology' | 'infectious' | 'other'
  modality: string | null
  title: string
  body_site: string | null
} | null {
  const lower = label.toLowerCase()
  if (lower.includes('xray') || lower.includes('x-ray')) {
    return { diagnostic_kind: 'imaging', modality: 'xray', title: 'X-ray report', body_site: null }
  }
  if (lower.includes('ct ')) {
    return { diagnostic_kind: 'imaging', modality: 'ct', title: 'CT report', body_site: null }
  }
  if (lower.includes('mri')) {
    return { diagnostic_kind: 'imaging', modality: 'mri', title: 'MRI report', body_site: null }
  }
  if (lower.includes('dexa') || lower.includes('dxa') || lower.includes('bone density')) {
    return { diagnostic_kind: 'imaging', modality: 'dexa', title: 'DEXA report', body_site: null }
  }
  if (
    lower.includes('covid') ||
    lower.includes('flu ') ||
    lower.includes('strep') ||
    lower.includes('hiv') ||
    lower.includes('hepatitis') ||
    lower.includes('infectious')
  ) {
    return { diagnostic_kind: 'infectious', modality: 'infectious_lab', title: 'Infectious disease test', body_site: null }
  }
  if (lower.includes('pathology') || lower.includes('biopsy')) {
    return { diagnostic_kind: 'pathology', modality: 'pathology', title: 'Pathology report', body_site: null }
  }
  if (lower.includes('lab') || lower.includes('panel') || lower.includes('cbc') || lower.includes('cmp')) {
    return { diagnostic_kind: 'lab', modality: 'lab_panel', title: 'Laboratory report', body_site: null }
  }
  return null
}

function extractDiagnosticHintsFromContext(ctx: ChartReviewContext): ExtractedDiagnosticReportDraft[] {
  const drafts: ExtractedDiagnosticReportDraft[] = []

  for (const att of ctx.latestIntake.attachments) {
    const detected = classifyDiagnosticFromLabel(att.file_name)
    if (!detected) continue
    drafts.push({
      ...detected,
      performed_at: extractDateHint(att.file_name) ?? null,
      result_text: `Detected from uploaded file name: ${att.file_name}`,
      impression_text: null,
      confidence: 0.45,
      source_attachment_path: att.object_path,
    })
  }

  const noteText =
    (typeof ctx.latestIntake.answers.labs_docs_note === 'string' ? ctx.latestIntake.answers.labs_docs_note : '') || ''
  if (noteText) {
    const detected = classifyDiagnosticFromLabel(noteText)
    if (detected) {
      drafts.push({
        ...detected,
        performed_at: extractDateHint(noteText),
        result_text: `Detected from intake note: ${noteText.slice(0, 240)}`,
        impression_text: null,
        confidence: 0.5,
        source_attachment_path: null,
      })
    }
  }

  return drafts
}

export function buildChartReviewDraft(ctx: ChartReviewContext): ChartReviewDraft {
  const findings: string[] = []
  const riskFlags: string[] = []
  const missingInfo: string[] = []

  const attachmentsCount = ctx.latestIntake.attachments.length
  const treatmentCount = ctx.care.treatmentItems.length
  const openRefills = ctx.care.refillRequests.filter((r) => r.status !== 'fulfilled' && r.status !== 'cancelled').length

  findings.push(`Intake attachments on file: ${attachmentsCount}.`)
  findings.push(`Active treatment items tracked: ${treatmentCount}.`)
  findings.push(`Open support requests: ${ctx.support.openSupportRequests}.`)
  findings.push(`Recent check-ins available: ${ctx.support.recentCheckins.length}.`)
  const refillCheckInSummary = summarizeRefillCheckIn(ctx)
  if (refillCheckInSummary) {
    findings.push(`Latest refill check-in captured: ${refillCheckInSummary}.`)
  }

  if (attachmentsCount === 0) {
    missingInfo.push('No lab/image attachments are currently linked to latest intake.')
  }
  if (ctx.latestIntake.submission_id === null) {
    missingInfo.push('No intake submission found for this patient.')
  }
  if (openRefills > 0) {
    riskFlags.push(`${openRefills} refill request(s) are still open and should be reconciled in treatment plan review.`)
  }
  if (ctx.care.latestRefillCheckIn.profile && ctx.care.latestRefillCheckIn.profile !== 'none') {
    riskFlags.push('Use latest refill questionnaire findings before finalizing dose/refill signoff.')
  }
  if (ctx.support.openSupportRequests > 0) {
    riskFlags.push('Patient has unresolved support communication that may affect adherence/safety.')
  }

  const labTextSources = [
    typeof ctx.latestIntake.answers.labs_docs_note === 'string' ? ctx.latestIntake.answers.labs_docs_note : '',
    typeof ctx.latestIntake.answers.questions_or_concerns === 'string' ? ctx.latestIntake.answers.questions_or_concerns : '',
    typeof ctx.latestIntake.answers.goals_summary === 'string' ? ctx.latestIntake.answers.goals_summary : '',
  ]
    .filter(Boolean)
    .join('\n')

  const extractedLabs = extractCommonLabsFromText(labTextSources)
  const extractedDiagnostics = extractDiagnosticHintsFromContext(ctx)
  if (extractedLabs.length > 0) {
    findings.push(`Extracted ${extractedLabs.length} potential lab value(s) from intake text for clinician verification.`)
  }
  if (extractedDiagnostics.length > 0) {
    findings.push(
      `Detected ${extractedDiagnostics.length} potential diagnostic report hint(s) (imaging/infectious/pathology/lab) for normalization.`
    )
  }

  const patientFirst = ctx.patient.first_name?.trim() || 'Patient'
  const summary = `${patientFirst} chart review draft generated from intake answers, attachments metadata, treatment/refill state, and support/check-in activity.`
  const recommendationDraft =
    `Draft clinical interpretation (requires clinician signoff):\n` +
    `- Reconcile latest reported labs against current treatment goals and active medication plan.\n` +
    `- Reconcile uploaded diagnostics (imaging/infectious/pathology) into the treatment narrative when clinically relevant.\n` +
    `- Incorporate latest refill check-in symptoms/adherence details into refill signoff and dosing rationale.\n` +
    `- Address open support/refill items before finalizing next treatment step.\n` +
    `- Confirm whether additional labs are needed to monitor safety/efficacy based on current regimen.`

  const primaryProgram = ctx.care.activePrograms[0] ?? null
  const pathwayId = primaryProgram?.program_type ?? 'general_wellness'
  const state: 'on_track' | 'needs_review' | 'action_needed' =
    ctx.support.openSupportRequests > 0 || openRefills > 0 ? 'action_needed' : attachmentsCount === 0 ? 'needs_review' : 'on_track'
  const nextLabsAction = extractedLabs.length > 0
    ? {
        id: 'verify_extracted_labs',
        title: 'Verify extracted labs and trend relevance',
        due_label: 'At next clinician review',
        owner: 'care_team' as const,
        reason: 'Intake text contains possible lab values requiring clinician confirmation.',
        success_criteria: 'Confirmed values mapped to chart and used in plan rationale.',
      }
    : {
        id: 'obtain_followup_labs',
        title: 'Order/collect follow-up labs',
        due_label: 'Within 2-4 weeks',
        owner: 'care_team' as const,
        reason: 'Current context lacks verified numeric lab observations for decision support.',
        success_criteria: 'At least one updated lab panel is available in structured chart data.',
      }
  const pathwayDecisions = [
    {
      pathway_id: pathwayId,
      state,
      summary_readout:
        state === 'action_needed'
          ? 'Action needed: review unresolved tasks before advancing treatment.'
          : state === 'needs_review'
            ? 'Needs review: gather/verify diagnostics and labs to tighten next-step decisions.'
            : 'On track: continue current pathway while monitoring trend checkpoints.',
      what_changed: `Latest chart context includes ${ctx.support.recentCheckins.length} recent check-in(s), ${openRefills} open refill item(s), and ${attachmentsCount} intake attachment(s).`,
      why_this_step:
        'Next-step recommendations are tied to currently available intake, diagnostics, treatment status, and unresolved patient communication.',
      recommended_actions: [
        {
          id: 'continue_current_pathway',
          title: `Continue ${pathwayId.replaceAll('_', ' ')} pathway plan with clinician review`,
          due_label: 'Now',
          owner: 'care_team' as const,
          reason: 'Keeps treatment continuity while pending items are reconciled.',
          success_criteria: 'Updated clinician-reviewed plan is published to patient dashboard.',
        },
        nextLabsAction,
        {
          id: 'patient_checkin_update',
          title: 'Collect/confirm patient progress and symptom update',
          due_label: 'Before next dose decision',
          owner: 'patient' as const,
          reason: 'Improves interpretation quality for dose and monitoring changes.',
          success_criteria: 'Current progress metrics documented in timeline/check-in.',
        },
      ],
      evidence_refs: [
        `intake_submission:${ctx.latestIntake.submission_id ?? 'none'}`,
        `support_open:${ctx.support.openSupportRequests}`,
        `refill_open:${openRefills}`,
        `checkins_recent:${ctx.support.recentCheckins.length}`,
      ],
      risk_flags: riskFlags,
    },
  ]

  const actionPlan = pathwayDecisions.map((decision) => ({
    task_id: `diagnostic-review-${decision.pathway_id}`,
    title: `Review diagnostic findings for ${decision.pathway_id.replaceAll('_', ' ')}`,
    reason:
      decision.risk_flags[0] ??
      'Accepted diagnostic interpretation must be acknowledged before treatment state changes.',
    required_owner: 'provider' as const,
    required_due_state: 'before_treatment_action' as const,
    allowed_completion_actions: ['refill_approved', 'treatment_activated'],
  }))

  return {
    summary,
    recommendationDraft,
    findings,
    riskFlags,
    missingInfo,
    extractedLabs,
    extractedDiagnostics,
    pathwayDecisions,
    actionPlan,
  }
}

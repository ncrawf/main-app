export type PathwayActionCard = {
  id: string
  title: string
  due_label: string | null
  owner: 'patient' | 'care_team'
  reason: string
  success_criteria: string
}

export type PathwayDecisionCard = {
  pathway_id: string
  state: 'on_track' | 'needs_review' | 'action_needed'
  summary_readout: string
  what_changed: string
  why_this_step: string
  recommended_actions: PathwayActionCard[]
  evidence_refs: string[]
  risk_flags: string[]
  review_status: 'draft' | 'reviewed_accepted' | 'reviewed_rejected' | 'superseded'
  reviewed_by: string | null
  reviewed_at: string | null
}

export type DiagnosticActionPlanTask = {
  task_id: string
  title: string
  reason: string
  required_owner: 'provider' | 'care_team'
  required_due_state: 'before_treatment_action' | 'before_fulfillment'
  allowed_completion_actions: string[]
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null
}

function asString(v: unknown): string | null {
  return typeof v === 'string' && v.trim().length > 0 ? v : null
}

function parseAction(input: unknown): PathwayActionCard | null {
  const r = asRecord(input)
  if (!r) return null
  const id = asString(r.id)
  const title = asString(r.title)
  const owner = r.owner === 'patient' || r.owner === 'care_team' ? r.owner : null
  const reason = asString(r.reason)
  const success = asString(r.success_criteria)
  if (!id || !title || !owner || !reason || !success) return null
  return {
    id,
    title,
    due_label: asString(r.due_label),
    owner,
    reason,
    success_criteria: success,
  }
}

export function parsePathwayDecisionCardsFromPayload(
  payload: unknown,
  reviewStatus: PathwayDecisionCard['review_status'],
  reviewedBy: string | null,
  reviewedAt: string | null
): PathwayDecisionCard[] {
  const p = asRecord(payload)
  if (!p) return []
  const raw = Array.isArray(p.pathway_decisions) ? p.pathway_decisions : []
  const out: PathwayDecisionCard[] = []

  for (const item of raw) {
    const r = asRecord(item)
    if (!r) continue
    const pathwayId = asString(r.pathway_id)
    const state =
      r.state === 'on_track' || r.state === 'needs_review' || r.state === 'action_needed' ? r.state : null
    const summaryReadout = asString(r.summary_readout)
    const whatChanged = asString(r.what_changed)
    const whyThisStep = asString(r.why_this_step)
    if (!pathwayId || !state || !summaryReadout || !whatChanged || !whyThisStep) continue

    const actions = Array.isArray(r.recommended_actions)
      ? (r.recommended_actions.map(parseAction).filter((v): v is PathwayActionCard => !!v) as PathwayActionCard[])
      : []
    const evidenceRefs = Array.isArray(r.evidence_refs)
      ? r.evidence_refs.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
      : []
    const riskFlags = Array.isArray(r.risk_flags)
      ? r.risk_flags.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
      : []

    out.push({
      pathway_id: pathwayId,
      state,
      summary_readout: summaryReadout,
      what_changed: whatChanged,
      why_this_step: whyThisStep,
      recommended_actions: actions,
      evidence_refs: evidenceRefs,
      risk_flags: riskFlags,
      review_status: reviewStatus,
      reviewed_by: reviewedBy,
      reviewed_at: reviewedAt,
    })
  }

  return out
}

export function parseActionPlanTasksFromPayload(payload: unknown): DiagnosticActionPlanTask[] {
  const p = asRecord(payload)
  if (!p) return []
  const raw = Array.isArray(p.action_plan) ? p.action_plan : []
  const out: DiagnosticActionPlanTask[] = []
  for (const item of raw) {
    const r = asRecord(item)
    if (!r) continue
    const taskId = asString(r.task_id)
    const title = asString(r.title)
    const reason = asString(r.reason)
    const requiredOwner = r.required_owner === 'provider' || r.required_owner === 'care_team' ? r.required_owner : null
    const requiredDueState =
      r.required_due_state === 'before_treatment_action' || r.required_due_state === 'before_fulfillment'
        ? r.required_due_state
        : null
    const allowedCompletionActions = Array.isArray(r.allowed_completion_actions)
      ? r.allowed_completion_actions.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
      : []
    if (!taskId || !title || !reason || !requiredOwner || !requiredDueState || allowedCompletionActions.length === 0) continue
    out.push({
      task_id: taskId,
      title,
      reason,
      required_owner: requiredOwner,
      required_due_state: requiredDueState,
      allowed_completion_actions: allowedCompletionActions,
    })
  }
  return out
}

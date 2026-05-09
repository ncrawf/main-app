/**
 * Phase 4H-disclosure-policy commit 1 — async runtime wrapper for
 * the disclosure-policy gate.
 *
 * Per system map Section 1G.3 + Section 1Q.17 + ADR Section 7.5.
 *
 * RESPONSIBILITY:
 *   - Read patient_consents from the DB (reduces to ConsentSnapshot).
 *   - Read Template metadata from the typed registry (by template_key).
 *   - Call the pure-function evaluator at lib/disclosure-policy/evaluator.ts.
 *   - On non-pass decisions: call the SECURITY DEFINER function
 *     `mark_outbound_job_suppressed_by_disclosure_policy` to atomically
 *     transition + audit. On pass decisions: emit the
 *     `notification.privacy_exposure_check` audit row directly via
 *     `insertAuditEvent` (the row already passed; no state transition
 *     needed).
 *
 * STRUCTURAL NOTE (per ADR Section 7.6):
 *   This module is INVOKED BY the worker dispatcher at
 *   `lib/outbound/dispatch.ts` `runDispatcherTick`, not by rule
 *   runtime at `lib/rules/runtime/`. Section 7.6's import allowlist
 *   + approved action set govern rule runtime; the worker dispatcher
 *   is structurally a separate concern. This module's writes (audit
 *   events + outbound_jobs status transitions) are worker-side
 *   policy enforcement, not rule-runtime mutation.
 *
 * ARCHITECTURAL FRAMING:
 *   This is the runtime engine for Section 1G.3's "send-policy gate"
 *   as applied to outbound notifications. The same evaluator at
 *   lib/disclosure-policy/evaluator.ts is reused by future surfaces
 *   (AI summarization visibility, provider-facing disclosure, exports,
 *   transcription, support tooling). Each surface gets its own
 *   thin runtime wrapper that calls the shared evaluator + maps the
 *   decision to the surface's appropriate suppress / pass behavior.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import { insertAuditEvent } from '@/lib/events'
import { findTemplateByKey } from '@/repo/templates'
import type { OutboundJobRow } from '@/lib/outbound/dispatch'
import {
  evaluateDisclosurePolicy,
  suppressionReasonForDecision,
  auditActionForDecision,
  type ConsentSnapshot,
  type DisclosurePolicyDecision,
  type DisclosurePolicyInput,
  type MessageIntent,
  type TemplateMetadata,
} from './evaluator'
import type {
  DisclosureChannel,
  PathwaySensitivity,
  PrivacyExposureLevel,
} from './channel-defaults'

// =====================================================================
// Public types
// =====================================================================

export interface DisclosurePolicyRuntimeResult {
  /** The pure-function decision (for logging + tests). */
  decision: DisclosurePolicyDecision
  /**
   * True when the runtime called the SECURITY DEFINER suppression
   * function and the row transitioned to 'suppressed'. False on pass
   * decisions (no transition; no-op on already-terminal rows).
   */
  transitioned: boolean
  /**
   * The audit_events row id emitted (whether by the SECURITY DEFINER
   * function on suppression OR by insertAuditEvent on pass).
   * Null when the audit emission itself failed (gate continues but
   * observability is degraded; logged via console.error).
   */
  audit_event_id: string | null
}

// =====================================================================
// Public entry point
// =====================================================================

/**
 * Apply the disclosure-policy gate to a single outbound_jobs row that
 * has been claimed by the worker. Called from
 * lib/outbound/dispatch.ts runDispatcherTick after the
 * data_environment gate passes.
 *
 * Always emits the typed `notification.privacy_exposure_check` audit
 * event per Section 1G.3 step 5 (audit is never silent). On non-pass
 * decisions, additionally transitions outbound_jobs.status to
 * 'suppressed' via the atomic SECURITY DEFINER function.
 */
export async function applyDisclosurePolicy(
  job: OutboundJobRow,
  supabase?: SupabaseClient,
): Promise<DisclosurePolicyRuntimeResult> {
  const sb = supabase ?? createAdminClient()

  // ---------------------------------------------------------------
  // Resolve template metadata from the typed registry.
  // ---------------------------------------------------------------
  const template = resolveTemplate(job)

  // ---------------------------------------------------------------
  // Read patient consents (snapshot at evaluation time).
  // ---------------------------------------------------------------
  const consents = await readPatientConsents(sb, job.patient_id)

  // ---------------------------------------------------------------
  // Build the evaluator input + run the pure function.
  // ---------------------------------------------------------------
  const input: DisclosurePolicyInput = {
    channel: (job.channel as DisclosureChannel) ?? 'in_app',
    intended_privacy_exposure_level:
      (job.intended_privacy_exposure_level as PrivacyExposureLevel | null) ?? undefined,
    message_intent: (job.message_intent as MessageIntent | null) ?? undefined,
    template,
    pathway_sensitivity: (job.pathway_sensitivity as PathwaySensitivity | null) ?? null,
    consents,
  }
  const decision = evaluateDisclosurePolicy(input)

  // ---------------------------------------------------------------
  // Always emit notification.privacy_exposure_check (step 5 audit).
  // Per Section 1G.3 line 636: audit is never silent.
  //
  // For non-pass decisions, the SECURITY DEFINER function will emit
  // its own audit (with the decision-specific action like
  // notification.dispatch_blocked_by_privacy_check). The privacy_-
  // exposure_check audit fires here BEFORE the suppression so we get
  // both: the universal observability row + the decision-specific
  // row.
  // ---------------------------------------------------------------
  const universalAudit = await insertAuditEvent(
    {
      action: 'notification.privacy_exposure_check',
      resourceType: 'outbound_jobs',
      resourceId: job.id,
      patientId: job.patient_id ?? undefined,
      actorKind: 'system',
      orgId: job.org_id,
      metadata: buildPrivacyExposureCheckMetadata(job, decision),
    },
    sb,
  )

  const universalAuditId = universalAudit.ok ? universalAudit.audit_event_id : null

  // ---------------------------------------------------------------
  // Pass: no row transition needed; return.
  // ---------------------------------------------------------------
  if (decision.decision === 'pass') {
    return {
      decision,
      transitioned: false,
      audit_event_id: universalAuditId,
    }
  }

  // ---------------------------------------------------------------
  // Non-pass: call SECURITY DEFINER suppression. Atomic transition +
  // decision-specific audit emission.
  // ---------------------------------------------------------------
  const suppressionReason = suppressionReasonForDecision(decision)
  const auditAction = auditActionForDecision(decision)
  const extraMetadata = buildSuppressionMetadata(decision)

  const { data, error } = await sb.rpc(
    'mark_outbound_job_suppressed_by_disclosure_policy',
    {
      p_outbound_job_id: job.id,
      p_suppression_reason: suppressionReason,
      p_audit_action: auditAction,
      p_extra_metadata: extraMetadata,
    },
  )

  if (error) {
    throw new Error(
      `applyDisclosurePolicy: mark_outbound_job_suppressed_by_disclosure_policy RPC failed for outbound_job_id=${job.id}: ${error.message} (code: ${error.code ?? 'unknown'})`,
    )
  }

  const row = (data ?? {}) as {
    transitioned: boolean
    audit_event_id: string | null
    suppressed_status?: string
    reason?: string
  }

  return {
    decision,
    transitioned: row.transitioned === true,
    // Prefer the SECURITY DEFINER audit event id when available; the
    // universal privacy_exposure_check id is also emitted but the
    // decision-specific id is more useful for downstream lineage.
    audit_event_id: row.audit_event_id ?? universalAuditId,
  }
}

// =====================================================================
// Internal helpers
// =====================================================================

function resolveTemplate(job: OutboundJobRow): TemplateMetadata | undefined {
  if (!job.template_key) return undefined
  const t = findTemplateByKey(job.template_key)
  if (!t) return undefined
  // Map the full Template object shape down to the evaluator's needs.
  return {
    template_key: t.template_key,
    template_version: t.template_version,
    privacy_exposure_level: t.privacy_exposure_level,
    message_intent: t.message_intent as MessageIntent,
    safety_critical_override_allowed: t.safety_critical_override_allowed,
    transactional_critical: t.transactional_critical,
    requires_consent_for_exposure_level: t.requires_consent_for_exposure_level,
    requires_consent_for_intent: t.requires_consent_for_intent,
  }
}

async function readPatientConsents(
  supabase: SupabaseClient,
  patientId: string | null,
): Promise<ConsentSnapshot> {
  if (!patientId) {
    return { active_types: new Set<string>() }
  }
  const { data, error } = await supabase
    .from('patient_consents')
    .select('type, revoked_at')
    .eq('patient_id', patientId)
    .is('revoked_at', null)
  if (error) {
    // Fail-closed posture for consent read errors: empty snapshot
    // means no opt-in privileges are recognized, which is the
    // conservative default.
    console.error(
      `[disclosure-policy] patient_consents read failed for patient_id=${patientId}: ${error.message}`,
    )
    return { active_types: new Set<string>() }
  }
  const types = new Set<string>(
    (data ?? []).map((r) => (r as { type: string }).type),
  )
  return { active_types: types }
}

function buildPrivacyExposureCheckMetadata(
  job: OutboundJobRow,
  decision: DisclosurePolicyDecision,
): Record<string, unknown> {
  // Per Section 1Q.7 audit shape: the privacy_exposure_check row
  // carries the decision + reason + computed channel max + lineage.
  const base: Record<string, unknown> = {
    decision: decision.decision,
    fail_safety_posture: decision.fail_safety_posture,
    channel: job.channel,
    template_key: job.template_key,
    template_version: job.template_version,
    rule_id: job.rule_id,
    rule_version: job.rule_version,
    intended_privacy_exposure_level: job.intended_privacy_exposure_level,
    declared_privacy_exposure_level: job.declared_privacy_exposure_level,
    message_intent: job.message_intent,
    pathway_sensitivity: job.pathway_sensitivity,
    pathway_code: job.pathway_code,
    decision_outcome_reason: job.decision_outcome_reason,
  }

  if (decision.decision === 'pass') {
    base.computed_channel_max = decision.computed_channel_max
  } else if (decision.decision === 'consent_uplift_required') {
    base.computed_channel_max = decision.computed_channel_max
    base.uplift_reason = decision.reason
    base.missing_consent_types = [...decision.missing_consent_types]
  } else if (decision.decision === 'block') {
    base.computed_channel_max = decision.computed_channel_max
    base.block_reason = decision.reason
  } else {
    // failsafe_action_template_mismatch
    base.failsafe_reason = decision.reason
  }

  return base
}

function buildSuppressionMetadata(
  decision: Exclude<DisclosurePolicyDecision, { decision: 'pass' }>,
): Record<string, unknown> {
  // The SECURITY DEFINER function itself populates the canonical
  // observability fields (template_key, rule_id, etc.). This builder
  // adds the decision-specific extras that aren't in the row.
  if (decision.decision === 'consent_uplift_required') {
    return {
      decision: 'consent_uplift_required',
      fail_safety_posture: decision.fail_safety_posture,
      uplift_reason: decision.reason,
      missing_consent_types: [...decision.missing_consent_types],
      computed_channel_max: decision.computed_channel_max,
    }
  }
  if (decision.decision === 'failsafe_action_template_mismatch') {
    return {
      decision: 'failsafe_action_template_mismatch',
      fail_safety_posture: decision.fail_safety_posture,
      failsafe_reason: decision.reason,
    }
  }
  // block
  return {
    decision: 'block',
    fail_safety_posture: decision.fail_safety_posture,
    block_reason: decision.reason,
    computed_channel_max: decision.computed_channel_max,
  }
}

/**
 * Phase 4E outbound jobs typed registry per Section 1G.3 + primitives addendum #6.
 *
 * Source of truth for canonical enums; mirrored in
 * supabase/migrations/20260509120000_phase_4e_outbound_jobs_reconciliation.sql
 * CHECK constraints. CI lint will enforce parity in a future phase.
 */

import { z } from 'zod';

// =====================================================================
// Job kinds (canonical 21-value enum)
// =====================================================================

export const JOB_KINDS = [
  // Patient-facing notifications (1G.3)
  'send_email',
  'send_sms',
  'send_push',
  'send_in_app',

  // External rails (1I.4-1I.5 + 1L.14 + 1L.23.3)
  'stripe_charge',
  'stripe_refund',
  'stripe_subscription_op',
  'pharmacy_send_rx',
  'pharmacy_cancel_rx',
  'lab_send_order',
  'lab_kit_ship',

  // Async processing (1G AI / 1N + 1O)
  'ai_extraction',
  'document_ocr',
  'ai_drafting',

  // Schedules + reminders (1G.3 stale + T1-T3)
  'scheduled_reminder',
  'reengagement_nudge',

  // Cross-thread + escalation (1G.5 + 1G.7.5b)
  'escalation_to_provider',
  'escalation_to_ops',

  // Governance / compliance (1V SAR + RTBF; 4H runtime)
  'sar_export',
  'rtbf_apply',

  // Misc / catch-all
  'misc_internal',
] as const;

export type JobKind = (typeof JOB_KINDS)[number];

// =====================================================================
// Status state machine
// =====================================================================

export const JOB_STATUSES = [
  'queued',                       // initial; awaiting dispatcher pickup
  'dispatching',                  // worker locked the row + is calling external system
  'succeeded',                    // terminal happy path
  'failed',                       // last attempt errored; retry scheduled per backoff
  'dead',                         // terminal — exhausted max_attempts; ops triage required
  'cancelled',                    // caller / staff cancelled before dispatch
  'suppressed',                   // 1G.3 send-policy gate blocked (privacy + consent + channel pref)
  'superseded',                   // replaced by a newer job
  'suppressed_data_environment',  // Phase 4H-pre: data_environment dispatch gate blocked non-production row
                                  // (primitives addendum #4 binding terminal state; the gate ships in commit 2)
] as const;

export type JobStatus = (typeof JOB_STATUSES)[number];

/**
 * State transitions allowed from each status. Used by CI lint + runtime
 * guards (mark_outbound_job_dispatch RPC enforces the same).
 *
 * `suppressed_data_environment` is a terminal state per primitives
 * addendum #4 — once the dispatch gate suppresses a non-production row,
 * it does not re-enter the queue. To send the same intent in a different
 * env, a new outbound_jobs row is enqueued.
 */
export const ALLOWED_STATUS_TRANSITIONS: Record<JobStatus, JobStatus[]> = {
  queued: ['dispatching', 'cancelled', 'suppressed', 'suppressed_data_environment', 'superseded'],
  dispatching: ['succeeded', 'failed', 'dead', 'queued'],       // queued = retry after exponential backoff
  succeeded: [],                                                  // terminal
  failed: ['queued', 'dead'],                                     // retryable → re-queued; max_attempts → dead
  dead: [],                                                       // terminal
  cancelled: [],                                                  // terminal
  suppressed: ['superseded'],                                     // can be replaced by a newer job
  superseded: [],                                                 // terminal
  suppressed_data_environment: [],                                // terminal — env gate is structural, not retryable
};

// =====================================================================
// Channel enum
// =====================================================================

export const JOB_CHANNELS = [
  'email', 'sms', 'push', 'in_app', 'phone', 'mail',
  'staff_baa', 'staff_non_baa', 'vendor',
] as const;

export type JobChannel = (typeof JOB_CHANNELS)[number];

// =====================================================================
// Section 1Q.5 send-policy gate metadata enums
// =====================================================================

export const PATHWAY_SENSITIVITY_LEVELS = ['low', 'moderate', 'high', 'extreme'] as const;
export type PathwaySensitivity = (typeof PATHWAY_SENSITIVITY_LEVELS)[number];

export const MESSAGE_INTENTS = [
  'account', 'operational', 'clinical', 'safety', 'billing',
  'support', 'marketing', 'education', 'vendor', 'internal',
] as const;
export type MessageIntent = (typeof MESSAGE_INTENTS)[number];

export const PRIORITY_HINTS = ['urgent_clinical', 'standard', 'low'] as const;
export type PriorityHint = (typeof PRIORITY_HINTS)[number];

// =====================================================================
// Suppression reasons (Section 1G.3 5-step gate outcomes)
// =====================================================================

export const SUPPRESSION_REASONS = [
  'pathway_sensitivity_block',
  'channel_ceiling_exceeded',
  'missing_consent',
  'patient_preference_tightened',
  'safety_window_active',
  'in_person_recent_interaction',
  'contact_info_stale',
  'jurisdiction_unavailable',
  'data_environment_non_production',
  'campaign_recall',
  'manual_staff_suppression',
] as const;
export type SuppressionReason = (typeof SUPPRESSION_REASONS)[number];

// =====================================================================
// Queued-by kind (per primitives addendum #1)
// =====================================================================

export const QUEUED_BY_KINDS = [
  'rule_engine',
  'staff_user',
  'system_cron',
  'ai_assistant_with_human_approval',
] as const;
export type QueuedByKind = (typeof QUEUED_BY_KINDS)[number];

// =====================================================================
// Zod schemas for the enqueue API
// =====================================================================

export const EnqueueOutboundJobArgs = z.object({
  kind: z.enum(JOB_KINDS),
  payload: z.record(z.string(), z.unknown()).default({}),

  // Patient back-pointer (optional — pre-account / system jobs may have none).
  patient_id: z.string().uuid().optional(),

  // Channel + delivery target.
  channel: z.enum(JOB_CHANNELS).optional(),

  // Idempotency (per primitives addendum #3).
  idempotency_key: z.string().optional(),
  external_system_name: z.string().optional(),
  external_system_id: z.string().optional(),
  external_inbound_event_id: z.string().optional(),

  // Send-policy gate metadata (per Section 1Q.5).
  rule_id: z.string().optional(),
  rule_version: z.string().optional(),
  template_key: z.string().optional(),
  template_version: z.string().optional(),
  pathway_code: z.string().optional(),
  pathway_sensitivity: z.enum(PATHWAY_SENSITIVITY_LEVELS).optional(),
  message_intent: z.enum(MESSAGE_INTENTS).optional(),
  priority_hint: z.enum(PRIORITY_HINTS).default('standard'),

  // Privacy primitives (per Section 1Q.4 + 1Q.7 audit shape extension).
  // Both persist on outbound_jobs so a future replay can verify the
  // template.privacy_exposure_level <= action.intended_privacy_exposure_level
  // invariant was respected at dispatch time.
  declared_privacy_exposure_level: z.number().int().min(0).max(5).optional(),
  intended_privacy_exposure_level: z.number().int().min(0).max(5).optional(),

  // Decision outcome (per Section 1K.12 / 1Q.7 controlled vocabulary).
  // Free-form by design; vocabulary is extensible per-domain by PR +
  // CODEOWNERS per 1K.0. NOT validated as enum here; validation lives in
  // per-domain decision-code registries when those land.
  decision_outcome_reason: z.string().optional(),

  // Source/provenance (per primitives addendum #2).
  source_kind: z.enum([
    'intake', 'message', 'webhook', 'partner_adapter', 'document_extraction',
    'provider_decision', 'system_inference', 'staff_manual', 'patient_self', 'lab_feed',
    'rule_engine',
  ]).optional(),
  source_id: z.string().optional(),

  // Scheduling.
  scheduled_for: z.string().datetime().optional(),
  run_after: z.string().datetime().optional(),
  max_attempts: z.number().int().positive().default(12),

  // Provenance (per primitives addendum #1).
  queued_by_kind: z.enum(QUEUED_BY_KINDS).default('rule_engine'),

  // Multi-tenant + env primitives (per primitives addendum #4).
  org_id: z.string().uuid().optional(),
  data_environment: z.enum(['production', 'staging', 'internal_qa', 'synthetic']).optional(),
  actor_kind: z.enum([
    'patient', 'staff_user', 'provider_user', 'system', 'cron',
    'webhook', 'partner_adapter', 'ai_engine',
  ]).optional(),

  metadata: z.record(z.string(), z.unknown()).default({}),
});

export type EnqueueOutboundJobArgs = z.infer<typeof EnqueueOutboundJobArgs>;

export interface EnqueueOutboundJobResult {
  outbound_job_id: string;
  audit_event_id: string | null;
  /** True when an existing job was returned (idempotency_key matched). */
  idempotent_replay: boolean;
  /**
   * Phase 4H-pre commit 2 — true when the data_environment gate
   * suppressed this row immediately after enqueue (non-production
   * row + external-rail kind → terminal 'suppressed_data_environment'
   * status + 'notification.dispatch_blocked_by_privacy_check' audit).
   * False for production rows, internal-only kinds, and idempotent
   * replays.
   */
  suppressed_by_data_environment: boolean;
  /**
   * Phase 4H-pre commit 2 — the audit_events row id emitted when the
   * gate suppressed the row. Null when the gate passed or when
   * suppression was a no-op (race condition: row already terminal).
   */
  suppression_audit_event_id: string | null;
}

// =====================================================================
// Dispatcher result types
// =====================================================================

export const DISPATCH_OUTCOMES = ['succeeded', 'failed_retryable', 'failed_terminal'] as const;
export type DispatchOutcome = (typeof DISPATCH_OUTCOMES)[number];

export interface DispatchResultArgs {
  outbound_job_id: string;
  attempt: number;
  status: DispatchOutcome;
  channel: JobChannel;
  provider: string;
  provider_message_id?: string;
  error_message?: string;
  error_code?: string;
  error_payload?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

export interface DispatchResultResponse {
  dispatch_id: string;
  audit_event_id: string;
  new_job_status: JobStatus;
}

/**
 * Validate a status transition. Throws on invalid; returns void on valid.
 * Used by the dispatcher worker before calling mark_outbound_job_dispatch.
 */
export function assertValidStatusTransition(from: JobStatus, to: JobStatus): void {
  const allowed = ALLOWED_STATUS_TRANSITIONS[from];
  if (!allowed.includes(to)) {
    throw new Error(
      `outbound_jobs invalid status transition: ${from} → ${to}. ` +
        `Allowed from '${from}': ${allowed.length === 0 ? '(terminal)' : allowed.join(', ')}.`
    );
  }
}

/**
 * Pure helper: is this job_kind a "real outbound" that touches an external
 * provider (Stripe, Twilio, Resend, pharmacy, lab)? Used by the dispatcher's
 * data_environment gate to decide whether non-production can proceed.
 *
 * Internal-only kinds (sar_export, rtbf_apply, ai_extraction, etc.) MAY
 * run in non-production envs since they don't reach external rails.
 */
export function isExternalRailJobKind(kind: JobKind): boolean {
  switch (kind) {
    case 'send_email':
    case 'send_sms':
    case 'send_push':
    case 'stripe_charge':
    case 'stripe_refund':
    case 'stripe_subscription_op':
    case 'pharmacy_send_rx':
    case 'pharmacy_cancel_rx':
    case 'lab_send_order':
    case 'lab_kit_ship':
      return true;
    case 'send_in_app':
    case 'ai_extraction':
    case 'document_ocr':
    case 'ai_drafting':
    case 'scheduled_reminder':
    case 'reengagement_nudge':
    case 'escalation_to_provider':
    case 'escalation_to_ops':
    case 'sar_export':
    case 'rtbf_apply':
    case 'misc_internal':
      return false;
    default: {
      const exhaustive: never = kind;
      throw new Error(`isExternalRailJobKind: unhandled kind: ${JSON.stringify(exhaustive)}`);
    }
  }
}

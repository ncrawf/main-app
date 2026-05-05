/**
 * Intake audit_events catalog per system map Section 1K.19.9.
 *
 * Each event_type defined here is an `action` value written to the existing
 * `audit_events` table (created in `20260419210000_staff_audit_rls.sql` —
 * shape: id, actor_user_id, action, resource_type, resource_id, patient_id,
 * metadata jsonb, created_at). The metadata jsonb on each row carries the
 * typed payload defined here.
 *
 * CI lint rule (binding per Section 1K.19.9): every state-mutating intake-runtime
 * write MUST emit the corresponding audit_events row in the same DB transaction.
 *
 * Phase 3 declares the typed catalog. Phase 4 runtime enforces transactional
 * pairing in the per-target write handlers (lib/intake/write/*).
 */

import { z } from 'zod';
import { InteractionContextSchema } from './interaction-context';

export const INTAKE_EVENT_ACTIONS = [
  'intake.session.started',
  'intake.question.rendered',
  'intake.question.answered',
  'intake.question.skipped',
  'intake.branch.triggered',
  'intake.branch.completed',
  'intake.branch.capped',
  'intake.branch.stop_early',
  'intake.session.abandoned',
  'intake.session.submitted',
  'intake.atom.emitted',
  'intake.atom.consumed',
  'intake.educational_screen.continued',
  'intake.smart_loading.shown',
  'intake.smart_loading.completed',
  'intake.smart_loading.timeout_fallback',
  'intake.smart_loading.staff_skipped',
  'intake.candidacy_result.rendered',
  'intake.candidacy_result.continued',
  'intake.candidacy_result.session_closed',
  'intake.in_office_handoff_ready',
  'commerce.membership_plan_selected',
  'commerce.payment_method_added',
  'commerce.submit_to_provider_triggered',
  'commerce.checkout_link_sent',
] as const;

export type IntakeEventAction = (typeof INTAKE_EVENT_ACTIONS)[number];

const SkippedReason = z.enum([
  'predicate_false',
  'branch_cap',
  'stop_early',
  'disabled',
  'shadow_only',
  'pathway_branch_unmatched',
  'render_when_atom_missing',
  'educational_screen_continued',
]);

export const SessionStartedPayload = z.object({
  session_id: z.string().uuid(),
  pre_account_session_id: z.string().uuid().optional(),
  funnel_slug: z.string(),
  funnel_version: z.string(),
  pathway_codes: z.array(z.string()),
  pathway_versions: z.record(z.string(), z.string()),
  engine_version: z.string(),
  safety_ruleset_version: z.string(),
  interaction_context: InteractionContextSchema,
  started_at: z.string().datetime(),
  cohort_assignments: z.array(z.string()).optional(),
  acquisition_source: z.record(z.string(), z.unknown()).optional(),
});

export const QuestionRenderedPayload = z.object({
  session_id: z.string().uuid(),
  question_id: z.string(),
  question_version: z.string(),
  module_id: z.string(),
  module_version: z.string(),
  branch_id: z.string().optional(),
  branch_version: z.string().optional(),
  branch_path_token: z.string(),
  rendered_at: z.string().datetime(),
  server_compute_time_ms: z.number().int().nonnegative().optional(),
});

export const QuestionAnsweredPayload = z.object({
  session_id: z.string().uuid(),
  question_id: z.string(),
  question_version: z.string(),
  answer_value: z.unknown(), // PHI; subject to standard PHI access controls
  answered_at: z.string().datetime(),
  response_time_ms: z.number().int().nonnegative().optional(),
  branch_path_token: z.string().optional(),
  intake_response_id: z.string().uuid(),
  client_idempotency_key: z.string().optional(),
});

export const QuestionSkippedPayload = z.object({
  session_id: z.string().uuid(),
  question_id: z.string(),
  question_version: z.string(),
  skipped_at: z.string().datetime(),
  skipped_reason: SkippedReason,
  skipped_reason_detail: z.string().optional(),
});

export const BranchTriggeredPayload = z.object({
  session_id: z.string().uuid(),
  branch_id: z.string(),
  branch_version: z.string(),
  branch_tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  trigger_question_id: z.string(),
  trigger_question_version: z.string(),
  triggering_answer_value: z.unknown(),
  triggered_at: z.string().datetime(),
});

export const SessionSubmittedPayload = z.object({
  session_id: z.string().uuid(),
  submitted_at: z.string().datetime(),
  total_questions_answered: z.number().int().nonnegative(),
  total_branches_triggered: z.number().int().nonnegative(),
  total_atoms_emitted: z.number().int().nonnegative(),
  total_hard_stop_atoms: z.number().int().nonnegative(),
  total_provider_review_atoms: z.number().int().nonnegative(),
  time_to_complete_ms: z.number().int().nonnegative(),
});

export const AtomEmittedPayload = z.object({
  session_id: z.string().uuid(),
  intake_response_id: z.string().uuid(),
  concept_id: z.string(),
  concept_version: z.string(),
  context_key: z.string().optional(),
  atom_kind: z.string(),
  downstream_effect: z.enum(['personalization', 'provider_review', 'hard_stop', 'none']),
  authored_by: z.string(),
  emitted_at: z.string().datetime(),
  atom_mapping_version: z.string(),
});

/**
 * Helper: build the `audit_events` row payload for any intake event.
 * The runtime (Phase 4) writes this row in the same DB transaction as the
 * underlying state mutation per Section 1Q.7 CI lint rule.
 */
export type IntakeAuditEventRow = {
  action: IntakeEventAction;
  resource_type: string;
  resource_id?: string;
  patient_id?: string;
  actor_user_id?: string;
  metadata: Record<string, unknown>;
};

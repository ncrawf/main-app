-- =====================================================================
-- Phase 4H-disclosure-policy commit 1 — atomic suppress-by-disclosure-policy
-- SECURITY DEFINER orchestrator.
--
-- Per system map Section 1G.3 (send-policy gate; the application of
-- disclosure-policy to the outbound notifications surface) + Section
-- 1Q.7 audit shape: the disclosure-policy gate fires inside the worker
-- dispatcher AFTER pickup. When it suppresses a row, the state
-- transition + audit emission must be atomic (partial state where
-- suppression succeeds without audit, or audit succeeds without
-- suppression, is a HIPAA-grade compliance gap).
--
-- This migration adds the SECURITY DEFINER function that performs the
-- atomic pair. Same shape as Phase 4H-pre commit 2's
-- `mark_outbound_job_suppressed_by_env`, but for the disclosure-policy
-- gate (different terminal status, different audit metadata vocabulary,
-- and idempotency keyed on `'dispatching'` rather than `'queued'`
-- because the disclosure-policy gate fires after the worker has
-- claimed the row).
--
-- ARCHITECTURAL FRAMING:
--   The implementation directory at lib/disclosure-policy/ is named
--   `disclosure-policy` (not `send-policy`) because the underlying
--   evaluator generalizes beyond outbound notifications. Future
--   surfaces using the same evaluator: AI summarization visibility,
--   provider-facing disclosure, external integrations, data exports,
--   transcription visibility, support tooling. Section 1G.3 in the
--   binding map remains named "send-policy gate" — that is the
--   *application* of disclosure-policy to outbound notifications.
--
--   This SECURITY DEFINER is scoped to the outbound_jobs surface
--   (it only suppresses outbound_jobs rows). When future surfaces
--   ride the same evaluator, they will get their own equivalent
--   atomic-suppress functions for THEIR domain tables, not via this
--   one.
--
-- ADR Section 7.6 status:
--   The disclosure-policy gate runs in lib/outbound/dispatch.ts
--   (worker code), NOT in lib/rules/runtime/. Section 7.6's import
--   allowlist + approved action set govern rule runtime; the worker
--   dispatcher is structurally a separate concern. No ADR amendment
--   is required for this commit.
-- =====================================================================

create or replace function public.mark_outbound_job_suppressed_by_disclosure_policy(
  p_outbound_job_id uuid,
  p_suppression_reason text,
  p_audit_action text,
  p_extra_metadata jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_job record;
  v_audit_id uuid;
  v_metadata jsonb;
begin
  -- Validate suppression_reason against the existing CHECK vocabulary.
  -- (The CHECK on outbound_jobs.suppression_reason will reject invalid
  -- values too, but failing fast here gives a clearer error.)
  if p_suppression_reason is null or p_suppression_reason not in (
    'pathway_sensitivity_block',
    'channel_ceiling_exceeded',
    'missing_consent',
    'patient_preference_tightened',
    'safety_window_active',
    'in_person_recent_interaction',
    'contact_info_stale',
    'jurisdiction_unavailable',
    'campaign_recall',
    'manual_staff_suppression'
  ) then
    raise exception 'mark_outbound_job_suppressed_by_disclosure_policy: invalid suppression_reason=%', p_suppression_reason
      using errcode = 'invalid_parameter_value',
            hint = 'Use one of the values in outbound_jobs_suppression_reason_check; the disclosure-policy gate cannot use data_environment_non_production (that is reserved for the env gate).';
  end if;

  -- Validate audit_action is in the typed RULE_AND_NOTIFICATION_AUDIT_ACTIONS
  -- vocabulary. This check duplicates the lib/events/audit-actions.ts
  -- catalog; runtime enforcement is the failsafe.
  if p_audit_action is null or p_audit_action not in (
    'notification.action_template_intent_mismatch',
    'notification.dispatch_blocked_by_privacy_check',
    'notification.consent_uplift_required',
    'notification.privacy_exposure_check',
    'notification.suppressed_during_safety_window'
  ) then
    raise exception 'mark_outbound_job_suppressed_by_disclosure_policy: invalid audit_action=%', p_audit_action
      using errcode = 'invalid_parameter_value',
            hint = 'Use a notification.* action drawn from RULE_AND_NOTIFICATION_AUDIT_ACTIONS in lib/events/audit-actions.ts.';
  end if;

  -- Lock the row + read its lineage for the audit metadata.
  select id, kind, channel, patient_id, org_id, data_environment, status,
         template_key, template_version, rule_id, rule_version,
         message_intent, pathway_code, pathway_sensitivity,
         intended_privacy_exposure_level, declared_privacy_exposure_level,
         decision_outcome_reason
    into v_job
    from outbound_jobs
    where id = p_outbound_job_id
    for update;

  if v_job.id is null then
    raise exception 'mark_outbound_job_suppressed_by_disclosure_policy: outbound_job_id=% not found', p_outbound_job_id
      using errcode = 'no_data_found';
  end if;

  -- Idempotency: the disclosure-policy gate fires AFTER the worker has
  -- claimed the row, so the row is in 'dispatching' status when the
  -- gate runs. If the row is already in a terminal state (succeeded /
  -- failed / dead / suppressed / suppressed_data_environment / cancelled
  -- / superseded), this is a no-op replay.
  if v_job.status not in ('queued', 'dispatching') then
    return jsonb_build_object(
      'transitioned', false,
      'reason', 'not_active',
      'current_status', v_job.status,
      'audit_event_id', null
    );
  end if;

  -- Atomic transition to 'suppressed' (distinct from
  -- 'suppressed_data_environment' which is the env gate's terminal).
  update outbound_jobs
    set status = 'suppressed',
        suppressed_at = now(),
        suppression_reason = p_suppression_reason,
        locked_at = null
    where id = p_outbound_job_id;

  -- Build the audit metadata with the row's full lineage so the audit
  -- replay is reconstruction-grade per Section 1Q.7.
  v_metadata := jsonb_build_object(
    'suppression_reason', p_suppression_reason,
    'gate_call_site', 'disclosure_policy',
    'data_environment', v_job.data_environment,
    'kind', v_job.kind,
    'channel', v_job.channel,
    'template_key', v_job.template_key,
    'template_version', v_job.template_version,
    'rule_id', v_job.rule_id,
    'rule_version', v_job.rule_version,
    'message_intent', v_job.message_intent,
    'pathway_code', v_job.pathway_code,
    'pathway_sensitivity', v_job.pathway_sensitivity,
    'intended_privacy_exposure_level', v_job.intended_privacy_exposure_level,
    'declared_privacy_exposure_level', v_job.declared_privacy_exposure_level,
    'decision_outcome_reason', v_job.decision_outcome_reason
  ) || coalesce(p_extra_metadata, '{}'::jsonb);

  -- Atomic audit insert.
  insert into audit_events (
    action, resource_type, resource_id,
    patient_id, actor_kind, org_id, metadata
  ) values (
    p_audit_action,
    'outbound_jobs',
    v_job.id::text,
    v_job.patient_id,
    'system',
    v_job.org_id,
    v_metadata
  ) returning id into v_audit_id;

  return jsonb_build_object(
    'transitioned', true,
    'audit_event_id', v_audit_id,
    'suppressed_status', 'suppressed',
    'suppression_reason', p_suppression_reason
  );
end;
$$;

comment on function public.mark_outbound_job_suppressed_by_disclosure_policy(uuid, text, text, jsonb) is
  'Phase 4H-disclosure-policy commit 1: atomically transition an outbound_jobs row to the suppressed terminal status (existing enum value, distinct from suppressed_data_environment) + emit one notification.* audit event with the caller-provided metadata. Idempotent: only transitions from queued or dispatching. Caller (lib/disclosure-policy/runtime.ts) decides which suppression reason + audit action to use based on the gate decision (block / consent_uplift_required / failsafe_action_template_mismatch). Per system map Section 1Q.7 audit shape + Section 1G.3 send-policy gate spec.';

grant execute on function public.mark_outbound_job_suppressed_by_disclosure_policy(uuid, text, text, jsonb) to service_role;

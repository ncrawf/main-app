-- =====================================================================
-- Phase 4H-pre commit 5 — extend enqueue_outbound_job orchestrator with
-- the two Phase 4H-pre commit 1 columns the rules engine needs to
-- persist on outbound_jobs rows.
--
-- Per Phase 4H-pre commit 1 deferred discipline ("the orchestrator
-- function signature was NOT updated; deferred to when the rules engine
-- first wires through; the columns can be populated via INSERT/UPDATE
-- in the meantime"). Commit 5 is the first real caller — the rule
-- dispatcher at lib/rules/runtime/dispatcher.ts populates both columns
-- on every rule firing, so the orchestrator now accepts them.
--
-- New parameters (appended to the existing 27-parameter list to keep
-- existing callers compatible):
--   p_intended_privacy_exposure_level int default null
--     (rule-action-declared cap per Section 1Q.4)
--   p_decision_outcome_reason text default null
--     (controlled vocabulary code per Section 1K.12 / 1Q.7)
--
-- Audit metadata extended to include the two new fields when present.
--
-- DROP + CREATE used because Postgres requires it when the parameter
-- list changes. Existing GRANTs are reissued under the new signature.
-- =====================================================================

drop function if exists public.enqueue_outbound_job(
  text, jsonb, uuid, text, text, text, text, text, text, text, text, text,
  text, text, text, text, int, timestamptz, timestamptz, int, text, text,
  text, uuid, text, text, jsonb
);

create or replace function public.enqueue_outbound_job(
  p_kind text,
  p_payload jsonb,
  p_patient_id uuid default null,
  p_channel text default null,
  p_idempotency_key text default null,
  p_external_system_name text default null,
  p_external_system_id text default null,
  p_external_inbound_event_id text default null,
  p_rule_id text default null,
  p_rule_version text default null,
  p_template_key text default null,
  p_template_version text default null,
  p_pathway_code text default null,
  p_pathway_sensitivity text default null,
  p_message_intent text default null,
  p_priority_hint text default 'standard',
  p_declared_privacy_exposure_level int default null,
  p_scheduled_for timestamptz default null,
  p_run_after timestamptz default null,
  p_max_attempts int default 12,
  p_source_kind text default null,
  p_source_id text default null,
  p_queued_by_kind text default 'rule_engine',
  p_org_id uuid default null,
  p_data_environment text default null,
  p_actor_kind text default null,
  p_metadata jsonb default '{}'::jsonb,
  -- Phase 4H-pre commit 5 extension:
  p_intended_privacy_exposure_level int default null,
  p_decision_outcome_reason text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_org_id uuid;
  v_data_env text;
  v_actor_kind text;
  v_patient_org_id uuid;
  v_patient_data_env text;
  v_job_id uuid;
  v_audit_id uuid;
  v_existing_id uuid;
begin
  if p_patient_id is not null then
    select org_id, data_environment into v_patient_org_id, v_patient_data_env
      from patients where id = p_patient_id;
  end if;

  if p_org_id is not null then
    if v_patient_org_id is not null and v_patient_org_id <> p_org_id then
      raise exception 'Cross-org enqueue rejected: caller passed org_id=% but patient %.org_id=%',
        p_org_id, p_patient_id, v_patient_org_id
        using errcode = 'insufficient_privilege',
              hint = 'Per Section 1U: outbound jobs never cross org_id.';
    end if;
    v_org_id := p_org_id;
  elsif v_patient_org_id is not null then
    v_org_id := v_patient_org_id;
  else
    v_org_id := '00000000-0000-0000-0000-000000000001'::uuid;
  end if;

  v_data_env := coalesce(p_data_environment, v_patient_data_env, 'production');
  v_actor_kind := coalesce(p_actor_kind, 'system');

  perform set_config('app.current_org_id', v_org_id::text, true);
  perform set_config('app.current_data_env', v_data_env, true);

  if p_idempotency_key is not null then
    select id into v_existing_id
      from outbound_jobs
      where idempotency_key = p_idempotency_key
      limit 1;
    if v_existing_id is not null then
      return jsonb_build_object(
        'outbound_job_id', v_existing_id,
        'audit_event_id', null,
        'idempotent_replay', true
      );
    end if;
  end if;

  insert into outbound_jobs (
    kind, payload, status, run_after, scheduled_for, max_attempts,
    patient_id, channel, idempotency_key, external_system_name,
    external_system_id, external_inbound_event_id,
    rule_id, rule_version, template_key, template_version,
    pathway_code, pathway_sensitivity, message_intent, priority_hint,
    declared_privacy_exposure_level, source_kind, source_id, queued_by_kind,
    -- Phase 4H-pre commit 5 extension:
    intended_privacy_exposure_level, decision_outcome_reason
  ) values (
    p_kind, p_payload, 'queued',
    coalesce(p_run_after, p_scheduled_for, now()),
    p_scheduled_for, p_max_attempts,
    p_patient_id, p_channel, p_idempotency_key, p_external_system_name,
    p_external_system_id, p_external_inbound_event_id,
    p_rule_id, p_rule_version, p_template_key, p_template_version,
    p_pathway_code, p_pathway_sensitivity, p_message_intent, p_priority_hint,
    p_declared_privacy_exposure_level, p_source_kind, p_source_id, p_queued_by_kind,
    p_intended_privacy_exposure_level, p_decision_outcome_reason
  ) returning id into v_job_id;

  insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
    values (
      'outbound_job.enqueued',
      'outbound_jobs',
      v_job_id::text,
      p_patient_id,
      v_actor_kind,
      v_org_id,
      jsonb_build_object(
        'kind', p_kind,
        'channel', p_channel,
        'template_key', p_template_key,
        'template_version', p_template_version,
        'rule_id', p_rule_id,
        'rule_version', p_rule_version,
        'idempotency_key', p_idempotency_key,
        'data_environment', v_data_env,
        'priority_hint', p_priority_hint,
        'message_intent', p_message_intent,
        'intended_privacy_exposure_level', p_intended_privacy_exposure_level,
        'decision_outcome_reason', p_decision_outcome_reason
      )
    ) returning id into v_audit_id;

  return jsonb_build_object(
    'outbound_job_id', v_job_id,
    'audit_event_id', v_audit_id,
    'idempotent_replay', false
  );
end;
$$;

comment on function public.enqueue_outbound_job(
  text, jsonb, uuid, text, text, text, text, text, text, text, text, text,
  text, text, text, text, int, timestamptz, timestamptz, int, text, text,
  text, uuid, text, text, jsonb, int, text
) is
  'Phase 4E canonical enqueue entry for outbound work + Phase 4H-pre commit 5 extension (intended_privacy_exposure_level + decision_outcome_reason). Atomic outbound_jobs INSERT + audit_events row. Idempotent on idempotency_key. Cross-org rejection per Section 1U. Caller (lib/outbound/enqueue.ts) handles Zod validation + capability gating before invoking.';

grant execute on function public.enqueue_outbound_job(
  text, jsonb, uuid, text, text, text, text, text, text, text, text, text,
  text, text, text, text, int, timestamptz, timestamptz, int, text, text,
  text, uuid, text, text, jsonb, int, text
) to authenticated;

grant execute on function public.enqueue_outbound_job(
  text, jsonb, uuid, text, text, text, text, text, text, text, text, text,
  text, text, text, text, int, timestamptz, timestamptz, int, text, text,
  text, uuid, text, text, jsonb, int, text
) to service_role;

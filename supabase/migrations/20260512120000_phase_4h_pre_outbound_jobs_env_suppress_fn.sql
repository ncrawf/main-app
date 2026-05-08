-- =====================================================================
-- Phase 4H-pre commit 2 — data_environment dispatch gate (SQL side).
--
-- Per docs/architecture/phase_4h_target_first_decision_record.md
-- Section 6 commit 2 + system map primitives addendum #4 (line 123).
-- This migration adds the SECURITY DEFINER function that atomically
-- transitions an outbound_jobs row to the 'suppressed_data_environment'
-- terminal status (added in Phase 4H-pre commit 1) AND emits one
-- 'notification.dispatch_blocked_by_privacy_check' audit_events row
-- with metadata.suppression_reason = 'data_environment'.
--
-- Why a dedicated SECURITY DEFINER function (and not a TS-side
-- two-step UPDATE + audit insert):
--
--   Partial state (suppressed without audit, or audit without
--   suppression) is a HIPAA-grade compliance gap. The pair must be
--   atomic. Atomicity in app code requires either an RPC that does
--   both, or distributed-transaction discipline that supabase-js does
--   not provide. The SECURITY DEFINER function is the canonical
--   pattern for atomic state transition + audit emission used
--   throughout the orchestrator layer (see Phase 4E
--   mark_outbound_job_dispatch + Phase 4A
--   record_intake_emissions_batch).
--
-- Why the gate logic lives in TS, not SQL:
--
--   The kind partition (external rail vs internal-only) is encoded in
--   lib/outbound/types.ts isExternalRailJobKind(). Mirroring that
--   partition in SQL would create a parallel maintenance burden and
--   drift risk. The TS gate decides WHEN to call this function; the
--   function trusts the caller and only does the atomic transition.
--   Idempotency (only transition from 'queued') is enforced at the SQL
--   layer so callers cannot double-suppress.
--
-- What this migration does NOT do (deferred):
-- - The Section 1G.3 5-step send-policy gate runtime (privacy gate,
--   channel pref, in-person window, pre-send revalidation, contact
--   freshness): ships in Phase 4H-rules-runtime.
-- - The existing runSendPolicyGate stub in lib/outbound/dispatch.ts
--   stays in place; this migration is layered above it. The
--   data_environment gate runs FIRST in dispatch order; the
--   send-policy gate runs second.
-- =====================================================================

create or replace function public.mark_outbound_job_suppressed_by_env(
  p_outbound_job_id uuid,
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
  -- Lock the row for the duration of this transaction so concurrent
  -- callers cannot double-transition + double-audit.
  select id, kind, channel, patient_id, org_id, data_environment, status,
         template_key, template_version, rule_id, rule_version,
         message_intent, pathway_code, pathway_sensitivity
    into v_job
    from outbound_jobs
    where id = p_outbound_job_id
    for update;

  if v_job.id is null then
    raise exception 'mark_outbound_job_suppressed_by_env: outbound_job_id=% not found', p_outbound_job_id
      using errcode = 'no_data_found';
  end if;

  -- Idempotency: only transition from 'queued'. If the row has already
  -- been picked up (dispatching), succeeded/failed/dead, or already
  -- suppressed, return without mutating + without emitting an audit event.
  if v_job.status != 'queued' then
    return jsonb_build_object(
      'transitioned', false,
      'reason', 'not_queued',
      'current_status', v_job.status,
      'audit_event_id', null
    );
  end if;

  -- Atomic transition. The locked_at = null clause clears any worker
  -- hold; suppressed rows do not need a worker.
  update outbound_jobs
    set status = 'suppressed_data_environment',
        suppressed_at = now(),
        suppression_reason = 'data_environment_non_production',
        locked_at = null
    where id = p_outbound_job_id;

  -- Build the audit metadata. The 'suppression_reason' = 'data_environment'
  -- field is the canonical observability shape locked at primitives
  -- addendum #4 (system map line 123). Other fields are observability
  -- sugar pulled from the row + caller-provided extras (which override
  -- the row defaults if the caller has fresher info, e.g., the
  -- dispatcher's source identifier).
  v_metadata := jsonb_build_object(
    'suppression_reason', 'data_environment',
    'data_environment', v_job.data_environment,
    'kind', v_job.kind,
    'channel', v_job.channel,
    'template_key', v_job.template_key,
    'template_version', v_job.template_version,
    'rule_id', v_job.rule_id,
    'rule_version', v_job.rule_version,
    'message_intent', v_job.message_intent,
    'pathway_code', v_job.pathway_code,
    'pathway_sensitivity', v_job.pathway_sensitivity
  ) || coalesce(p_extra_metadata, '{}'::jsonb);

  -- Atomic audit insert. The action is registered in
  -- lib/events/audit-actions.ts under RULE_AND_NOTIFICATION_AUDIT_ACTIONS
  -- per Phase 4F LANDED.
  insert into audit_events (
    action, resource_type, resource_id,
    patient_id, actor_kind, org_id, metadata
  ) values (
    'notification.dispatch_blocked_by_privacy_check',
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
    'suppressed_status', 'suppressed_data_environment'
  );
end;
$$;

comment on function public.mark_outbound_job_suppressed_by_env(uuid, jsonb) is
  'Phase 4H-pre commit 2: atomically transition an outbound_jobs row to the suppressed_data_environment terminal status + emit one notification.dispatch_blocked_by_privacy_check audit event with metadata.suppression_reason = data_environment. Idempotent: only transitions from queued status. Caller (lib/outbound/dataEnvironmentGate.ts) decides when suppression is warranted; this function does the atomic transition. Per system map primitives addendum #4 (line 123 binding observability shape).';

grant execute on function public.mark_outbound_job_suppressed_by_env(uuid, jsonb) to service_role;

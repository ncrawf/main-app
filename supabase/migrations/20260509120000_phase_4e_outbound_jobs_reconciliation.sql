-- =====================================================================
-- Phase 4E — outbound_jobs reconciliation per Section 1G.3 + 1H.2 + 1H.3
-- + 1Q.7 + system primitives addendum.
--
-- Augments the early `outbound_jobs` table to the canonical Section 1G.3
-- shape (queue + send-policy gate inputs + idempotency + provenance);
-- creates `outbound_job_dispatches` sub-table for delivery receipts (which
-- supersedes the legacy `patient_notification_deliveries` pattern);
-- introduces SECURITY DEFINER `enqueue_outbound_job` orchestrator with
-- the same primitive-injection + cross-org guard pattern as Phase 4C-pre.
--
-- Per companion doc data_layers_reconciliation_v1.md early migration audit:
-- - outbound_jobs (KEEP-with-shape-audit) → augmented in place (no
--   production data; column adds + status enum expansion are safe).
-- - patient_notification_deliveries (RECONCILE) → marked deprecated;
--   future receipts go through outbound_job_dispatches with
--   outbound_job_id FK; legacy table remains for legacy reads only.
--
-- What this migration does NOT do (deferred to later phases):
-- - Section 1G.3 5-step send-policy gate (privacy gate, channel pref,
--   in-person window, pre-send revalidation, contact freshness):
--   inputs are wired in this migration (template_key, template_version,
--   pathway_code, pathway_sensitivity, message_intent, declared_privacy_-
--   exposure_level, etc.); the gate runtime ships in Phase 4H with the
--   rules + templates engine.
-- - Actual Stripe / Twilio / Resend / pharmacy SDK calls — Phase 4H +
--   per-adapter modules.
-- - Worker process for picking up queued jobs — out of scope of this
--   migration; ships separately in lib/outbound/worker.ts when first
--   dispatch flow goes live.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Rename outbound_jobs.job_type → kind (semantic clarity)
-- ---------------------------------------------------------------------

do $$
begin
  if exists (select 1 from information_schema.columns
             where table_schema = 'public'
               and table_name = 'outbound_jobs'
               and column_name = 'job_type') then
    execute 'alter table public.outbound_jobs rename column job_type to kind';
  end if;
end;
$$;

-- ---------------------------------------------------------------------
-- 2. Expand outbound_jobs status enum: 4 values → 8 values
--    (no production data; safe to update existing rows)
-- ---------------------------------------------------------------------

-- Update any legacy values to canonical names.
update public.outbound_jobs set status = 'queued' where status = 'pending';
update public.outbound_jobs set status = 'dispatching' where status = 'processing';
update public.outbound_jobs set status = 'succeeded' where status = 'completed';
-- 'dead' stays as-is (canonical terminal state for retry-exhausted).

alter table public.outbound_jobs drop constraint if exists outbound_jobs_status_check;
alter table public.outbound_jobs alter column status set default 'queued';
alter table public.outbound_jobs
  add constraint outbound_jobs_status_check check (status in (
    'queued',         -- initial; awaiting dispatcher pickup
    'dispatching',    -- worker has locked the row + is calling the external system
    'succeeded',      -- terminal happy path
    'failed',         -- last attempt errored; retry scheduled per backoff
    'dead',           -- terminal — exhausted max_attempts; ops triage required (1H.2)
    'cancelled',      -- caller / staff cancelled before dispatch
    'suppressed',     -- send-policy gate (1G.3) blocked; documented in suppression_reason
    'superseded'      -- replaced by a newer job (e.g., contact info changed)
  ));

-- ---------------------------------------------------------------------
-- 3. ADD canonical columns to outbound_jobs
--    (all additive; defaults safe; existing rows tolerate)
-- ---------------------------------------------------------------------

alter table public.outbound_jobs
  -- Patient back-pointer per Section 1G.3 send-policy gate (consent +
  -- env + recent-interaction-window all read against the patient row).
  add column if not exists patient_id uuid references public.patients (id) on delete set null,

  -- Channel enum per primitives addendum #6 (enum-as-code-as-config).
  add column if not exists channel text check (channel is null or channel in (
    'email', 'sms', 'push', 'in_app', 'phone', 'mail',
    'staff_baa', 'staff_non_baa', 'vendor'
  )),

  -- Outbound idempotency keys per primitives addendum #3.
  add column if not exists idempotency_key text,
  add column if not exists external_system_name text,
  add column if not exists external_system_id text,
  add column if not exists external_inbound_event_id text,

  -- Send-policy gate inputs (Section 1G.3 + Section 1Q.5 template metadata).
  -- Populated by the 1Q rules engine when a rule fires; null when enqueued
  -- directly by app code (rare; ops manual sends, etc.).
  add column if not exists rule_id text,
  add column if not exists rule_version text,
  add column if not exists template_key text,
  add column if not exists template_version text,
  add column if not exists pathway_code text,
  add column if not exists pathway_sensitivity text check (pathway_sensitivity is null or pathway_sensitivity in (
    'low', 'moderate', 'high', 'extreme'
  )),
  add column if not exists message_intent text check (message_intent is null or message_intent in (
    'account', 'operational', 'clinical', 'safety', 'billing',
    'support', 'marketing', 'education', 'vendor', 'internal'
  )),
  add column if not exists priority_hint text default 'standard' check (priority_hint is null or priority_hint in (
    'urgent_clinical', 'standard', 'low'
  )),
  add column if not exists declared_privacy_exposure_level int check (
    declared_privacy_exposure_level is null
    or (declared_privacy_exposure_level >= 0 and declared_privacy_exposure_level <= 5)
  ),

  -- Source / provenance per primitives addendum #2 (non-clinical pattern).
  add column if not exists source_kind text check (source_kind is null or source_kind in (
    'intake', 'message', 'webhook', 'partner_adapter', 'document_extraction',
    'provider_decision', 'system_inference', 'staff_manual', 'patient_self', 'lab_feed',
    'rule_engine'
  )),
  add column if not exists source_id text,

  -- Timing fields. run_after exists from the early migration; add the
  -- distinction between "intended dispatch time" (scheduled_for) and
  -- "next retry attempt" (run_after).
  add column if not exists scheduled_for timestamptz,
  add column if not exists dispatched_at timestamptz,
  add column if not exists completed_at timestamptz,
  add column if not exists cancelled_at timestamptz,
  add column if not exists suppressed_at timestamptz,
  add column if not exists suppression_reason text check (suppression_reason is null or suppression_reason in (
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
    'manual_staff_suppression'
  )),
  add column if not exists supersedes_outbound_job_id uuid references public.outbound_jobs (id),

  -- Pre-send revalidation snapshot per Section 1G.3 step (binding;
  -- revalidate at dispatch time, after privacy gate, before SDK call).
  add column if not exists revalidation_snapshot jsonb;

-- Idempotency uniqueness — partial unique to allow null when not provided.
create unique index if not exists outbound_jobs_idempotency_uniq
  on public.outbound_jobs (idempotency_key)
  where idempotency_key is not null;

-- Inbound dedupe (one row per inbound event).
create unique index if not exists outbound_jobs_inbound_event_uniq
  on public.outbound_jobs (external_system_name, external_inbound_event_id)
  where external_inbound_event_id is not null;

-- Partition-key + dispatcher pickup index (Section 1S streaming readiness +
-- 1H.2 worker SLA).
create index if not exists outbound_jobs_pickup_idx
  on public.outbound_jobs (status, run_after, priority_hint, created_at)
  where status = 'queued';

create index if not exists outbound_jobs_patient_kind_status_idx
  on public.outbound_jobs (patient_id, kind, status, created_at desc);

create index if not exists outbound_jobs_template_idx
  on public.outbound_jobs (template_key, template_version, created_at)
  where template_key is not null;

-- Canonical kind vocabulary — additive CHECK constraint (parity with
-- lib/outbound/types.ts; CI lint will enforce in a future phase).
alter table public.outbound_jobs drop constraint if exists outbound_jobs_kind_check;
alter table public.outbound_jobs
  add constraint outbound_jobs_kind_check check (kind in (
    -- Patient-facing notifications (1G.3)
    'send_email',
    'send_sms',
    'send_push',
    'send_in_app',
    -- External rails (1I.4-1I.5 + 1L.14 + 1L.23.3)
    'stripe_charge',
    'stripe_refund',
    'stripe_subscription_op',
    'pharmacy_send_rx',
    'pharmacy_cancel_rx',
    'lab_send_order',
    'lab_kit_ship',
    -- Async processing (1G AI / 1N + 1O)
    'ai_extraction',
    'document_ocr',
    'ai_drafting',
    -- Schedules + reminders (1G.3 stale + T1-T3)
    'scheduled_reminder',
    'reengagement_nudge',
    -- Cross-thread + escalation (1G.5 + 1G.7.5b)
    'escalation_to_provider',
    'escalation_to_ops',
    -- Governance / compliance (1V SAR + RTBF; 4H runtime)
    'sar_export',
    'rtbf_apply',
    -- Misc / catch-all
    'misc_internal'
  ));

-- ---------------------------------------------------------------------
-- 4. outbound_job_dispatches sub-table (per-attempt receipts;
--    supersedes patient_notification_deliveries pattern)
-- ---------------------------------------------------------------------

create table if not exists public.outbound_job_dispatches (
  id uuid primary key default gen_random_uuid(),

  -- Multi-tenant + env primitives.
  org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict,
  data_environment text not null default public.current_data_env()
    check (data_environment in ('production', 'staging', 'internal_qa', 'synthetic')),

  -- Back-pointer to the queued job. One outbound_job → many dispatches
  -- (one per attempt; retries land here, not as separate jobs).
  outbound_job_id uuid not null references public.outbound_jobs (id) on delete cascade,
  attempt int not null check (attempt >= 1),

  -- Dispatch result.
  status text not null check (status in (
    'in_flight',          -- worker is mid-dispatch
    'succeeded',
    'failed_retryable',
    'failed_terminal'     -- e.g., invalid recipient; do not retry
  )),

  -- Channel-specific provider receipt.
  channel text not null check (channel in (
    'email', 'sms', 'push', 'in_app', 'phone', 'mail',
    'staff_baa', 'staff_non_baa', 'vendor'
  )),
  provider text,                                              -- 'twilio', 'resend', 'stripe', 'pharmacy_x', etc.
  provider_message_id text,                                   -- e.g., twilio_message_sid, resend_email_id, stripe_charge_id

  -- Error capture on failure.
  error_message text,
  error_code text,
  error_payload jsonb,

  -- Dispatch timing.
  dispatched_at timestamptz not null default now(),
  completed_at timestamptz,

  metadata jsonb not null default '{}'::jsonb
);

create index if not exists outbound_job_dispatches_job_attempt_idx
  on public.outbound_job_dispatches (outbound_job_id, attempt);

create index if not exists outbound_job_dispatches_provider_msg_idx
  on public.outbound_job_dispatches (provider, provider_message_id)
  where provider_message_id is not null;

create index if not exists outbound_job_dispatches_status_dispatched_idx
  on public.outbound_job_dispatches (status, dispatched_at desc);

-- One successful receipt per (job, attempt) — caller cannot double-record.
create unique index if not exists outbound_job_dispatches_job_attempt_uniq
  on public.outbound_job_dispatches (outbound_job_id, attempt);

alter table public.outbound_job_dispatches enable row level security;

drop policy if exists ojd_select_staff on public.outbound_job_dispatches;
create policy ojd_select_staff on public.outbound_job_dispatches
  for select to authenticated
  using (public.is_staff_user(auth.uid()));

revoke insert, update, delete on public.outbound_job_dispatches from authenticated;
revoke insert, update, delete on public.outbound_job_dispatches from anon;

comment on table public.outbound_job_dispatches is
  'Per-attempt delivery receipt for outbound_jobs. One row per dispatch attempt; replaces patient_notification_deliveries pattern. Append-only; updates only via SECURITY DEFINER markDispatchResult function.';

-- ---------------------------------------------------------------------
-- 5. Deprecate patient_notification_deliveries
-- ---------------------------------------------------------------------

comment on table public.patient_notification_deliveries is
  'DEPRECATED (Phase 4E). Future delivery receipts MUST be written to outbound_job_dispatches with outbound_job_id FK. This table remains for legacy reads only; no new writes per Phase 4E reconciliation. See companion doc data_layers_reconciliation_v1.md early migration audit.';

-- ---------------------------------------------------------------------
-- 6. SECURITY DEFINER orchestrator: enqueue_outbound_job
--
-- Single canonical entry point for queueing outbound work. Mirrors the
-- record_intake_emissions_batch pattern from Phase 4C-pre:
--   - Resolves org_id + data_environment from explicit override OR patient
--     lookup OR fallback.
--   - Cross-org write rejection.
--   - Sets session context so DEFAULTs propagate.
--   - Inserts the outbound_jobs row + audit_events row in one transaction.
-- ---------------------------------------------------------------------

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
  p_metadata jsonb default '{}'::jsonb
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
  -- Resolve primitives (mirror record_intake_emissions_batch).
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

  -- Idempotency check: if a job with this idempotency_key already exists,
  -- return its id without inserting a duplicate.
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

  -- Insert the job row. Defaults pick up org_id + data_environment via
  -- column DEFAULTs from current_org_id() / current_data_env() helpers.
  insert into outbound_jobs (
    kind, payload, status, run_after, scheduled_for, max_attempts,
    patient_id, channel, idempotency_key, external_system_name,
    external_system_id, external_inbound_event_id,
    rule_id, rule_version, template_key, template_version,
    pathway_code, pathway_sensitivity, message_intent, priority_hint,
    declared_privacy_exposure_level, source_kind, source_id, queued_by_kind
  ) values (
    p_kind, p_payload, 'queued',
    coalesce(p_run_after, p_scheduled_for, now()),
    p_scheduled_for, p_max_attempts,
    p_patient_id, p_channel, p_idempotency_key, p_external_system_name,
    p_external_system_id, p_external_inbound_event_id,
    p_rule_id, p_rule_version, p_template_key, p_template_version,
    p_pathway_code, p_pathway_sensitivity, p_message_intent, p_priority_hint,
    p_declared_privacy_exposure_level, p_source_kind, p_source_id, p_queued_by_kind
  ) returning id into v_job_id;

  -- Audit row per primitives addendum + Section 1Q.7.
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
        'message_intent', p_message_intent
      )
    ) returning id into v_audit_id;

  return jsonb_build_object(
    'outbound_job_id', v_job_id,
    'audit_event_id', v_audit_id,
    'idempotent_replay', false
  );
end;
$$;

comment on function public.enqueue_outbound_job(text, jsonb, uuid, text, text, text, text, text, text, text, text, text, text, text, text, text, text, int, timestamptz, timestamptz, int, text, text, text, uuid, text, text, jsonb) is
  'Phase 4E canonical enqueue entry for outbound work. Atomic outbound_jobs INSERT + audit_events row. Idempotent on idempotency_key. Cross-org rejection per Section 1U. Caller (lib/outbound/enqueue.ts) handles Zod validation + capability gating before invoking.';

grant execute on function public.enqueue_outbound_job(text, jsonb, uuid, text, text, text, text, text, text, text, text, text, text, text, text, text, text, int, timestamptz, timestamptz, int, text, text, text, uuid, text, text, jsonb) to authenticated;
grant execute on function public.enqueue_outbound_job(text, jsonb, uuid, text, text, text, text, text, text, text, text, text, text, text, text, text, text, int, timestamptz, timestamptz, int, text, text, text, uuid, text, text, jsonb) to service_role;

-- ---------------------------------------------------------------------
-- 7. Dispatch helpers — pickNextOutboundJob + markDispatchResult
--
-- These are the worker-facing primitives. The actual SDK calls (Twilio,
-- Resend, Stripe, pharmacy adapters) live in app code; this layer
-- handles the queue + receipt mechanics atomically.
-- ---------------------------------------------------------------------

create or replace function public.pick_next_outbound_job()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_job outbound_jobs;
begin
  -- Atomic claim: lock the row to prevent two workers picking the same job.
  -- Skips synthetic / non-production rows by default per primitives addendum #4
  -- (the data_environment dispatch gate; structural lock).
  with picked as (
    select id from outbound_jobs
    where status = 'queued'
      and run_after <= now()
      and data_environment = 'production'
      and (locked_at is null or locked_at < now() - interval '5 minutes')
    order by
      case priority_hint when 'urgent_clinical' then 0 when 'standard' then 1 else 2 end,
      run_after,
      created_at
    limit 1
    for update skip locked
  )
  update outbound_jobs
  set status = 'dispatching',
      locked_at = now(),
      attempts = attempts + 1
  from picked
  where outbound_jobs.id = picked.id
  returning outbound_jobs.* into v_job;

  if v_job.id is null then
    return null;
  end if;

  return to_jsonb(v_job);
end;
$$;

comment on function public.pick_next_outbound_job() is
  'Atomically pick the highest-priority queued job, mark it dispatching, return its row. data_environment=production only — synthetic/staging/internal_qa rows never dispatched per primitives addendum #4 structural lock. Worker calls this; if no job available, returns null.';

grant execute on function public.pick_next_outbound_job() to service_role;

-- ---------------------------------------------------------------------
-- 8. Dispatch result recording
-- ---------------------------------------------------------------------

create or replace function public.mark_outbound_job_dispatch(
  p_outbound_job_id uuid,
  p_attempt int,
  p_status text,                                       -- 'succeeded' | 'failed_retryable' | 'failed_terminal'
  p_channel text,
  p_provider text,
  p_provider_message_id text,
  p_error_message text default null,
  p_error_code text default null,
  p_error_payload jsonb default null,
  p_metadata jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_dispatch_id uuid;
  v_audit_id uuid;
  v_job_kind text;
  v_patient_id uuid;
  v_org_id uuid;
  v_attempts int;
  v_max_attempts int;
  v_new_status text;
begin
  -- Resolve job context for audit.
  select kind, patient_id, org_id, attempts, max_attempts
    into v_job_kind, v_patient_id, v_org_id, v_attempts, v_max_attempts
  from outbound_jobs where id = p_outbound_job_id;

  if v_job_kind is null then
    raise exception 'mark_outbound_job_dispatch: outbound_job_id=% not found', p_outbound_job_id
      using errcode = 'no_data_found';
  end if;

  -- Insert dispatch receipt.
  insert into outbound_job_dispatches (
    outbound_job_id, attempt, status, channel, provider, provider_message_id,
    error_message, error_code, error_payload, completed_at, metadata
  ) values (
    p_outbound_job_id, p_attempt, p_status, p_channel, p_provider, p_provider_message_id,
    p_error_message, p_error_code, p_error_payload, now(), p_metadata
  ) returning id into v_dispatch_id;

  -- Update outbound_jobs status based on dispatch outcome.
  if p_status = 'succeeded' then
    v_new_status := 'succeeded';
    update outbound_jobs
      set status = v_new_status, completed_at = now(), locked_at = null, last_error = null
      where id = p_outbound_job_id;
  elsif p_status = 'failed_terminal' then
    v_new_status := 'dead';
    update outbound_jobs
      set status = v_new_status, locked_at = null, last_error = p_error_message
      where id = p_outbound_job_id;
  elsif p_status = 'failed_retryable' then
    if v_attempts >= v_max_attempts then
      v_new_status := 'dead';
      update outbound_jobs
        set status = v_new_status, locked_at = null, last_error = p_error_message
        where id = p_outbound_job_id;
    else
      v_new_status := 'queued';
      update outbound_jobs
        set status = v_new_status,
            locked_at = null,
            last_error = p_error_message,
            -- Exponential backoff: 30s * 2^attempts capped at 6h.
            run_after = now() + (least(power(2, v_attempts) * 30, 21600))::int * interval '1 second'
        where id = p_outbound_job_id;
    end if;
  else
    raise exception 'mark_outbound_job_dispatch: invalid status %', p_status
      using errcode = 'invalid_parameter_value';
  end if;

  -- Audit.
  insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
    values (
      case p_status
        when 'succeeded' then 'outbound_job.dispatched'
        when 'failed_terminal' then 'outbound_job.dead'
        else 'outbound_job.failed'
      end,
      'outbound_jobs',
      p_outbound_job_id::text,
      v_patient_id,
      'system',
      v_org_id,
      jsonb_build_object(
        'kind', v_job_kind,
        'attempt', p_attempt,
        'channel', p_channel,
        'provider', p_provider,
        'provider_message_id', p_provider_message_id,
        'new_status', v_new_status,
        'error_message', p_error_message
      )
    ) returning id into v_audit_id;

  return jsonb_build_object(
    'dispatch_id', v_dispatch_id,
    'audit_event_id', v_audit_id,
    'new_job_status', v_new_status
  );
end;
$$;

comment on function public.mark_outbound_job_dispatch(uuid, int, text, text, text, text, text, text, jsonb, jsonb) is
  'Record a dispatch attempt result. Updates outbound_jobs.status atomically with the receipt insert. Exponential backoff on retryable failures. dead status on max_attempts exhaustion or failed_terminal.';

grant execute on function public.mark_outbound_job_dispatch(uuid, int, text, text, text, text, text, text, jsonb, jsonb) to service_role;

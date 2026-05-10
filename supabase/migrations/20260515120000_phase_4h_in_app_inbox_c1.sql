-- =====================================================================
-- Phase 4H-in-app-inbox commit 1 — patient_inbox_messages substrate
-- channel + record_inbox_message SECURITY DEFINER orchestrator.
--
-- Per system-map `## Platform operational model` doctrine (binding
-- 2026-05-10): Communications/inbox is a first-class operational
-- sibling under Patient. This migration ships the SUBSTRATE piece of
-- that sibling — a one-way system→patient governance-tracked
-- notification storage table + the orchestrator that writes to it.
--
-- It does NOT activate `repo/rules/communications_lifecycle/` (no
-- typed rule changes; that folder activates only when the first rule
-- whose trigger is itself a communications event lands in a future
-- commit). It does NOT upgrade any existing rule's `channels` array
-- (the 5 typed rules still fire email + sms only). It does NOT
-- introduce dual-fan-out at the disclosure-policy gate (deferred).
--
-- DISTINCT FROM `messages` table (per-care_program two-way
-- patient↔staff conversation transcript) introduced in
-- 20260430120000_system_map_v1_messaging_labs_jurisdiction.sql:
--   - `messages` models conversational, threaded, two-way exchanges.
--   - `patient_inbox_messages` models one-way governance-tracked
--     system-emitted notifications with full rule + template lineage.
--   - Forcing both into one table either pollutes the chat
--     transcript with rule-fired notifications or strips governance
--     lineage. Two tables, both inside the communications/inbox
--     sibling per the doctrine.
--
-- NAMING DRIFT FLAG (per c1 review): "messages" may eventually feel
-- like a misnomer as inbox content evolves toward AI care nudges,
-- action cards, lab review requests, escalations — non-message-shaped
-- artifacts. v1 keeps `messages` per industry-standard inbox
-- vocabulary (Gmail, etc.); renaming to `inbox_artifacts` or similar
-- is a future concern if the conceptual drift becomes load-bearing.
--
-- Refs:
--   - .cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md
--   - System map `## Platform operational model` (lines 7-25)
--   - ADR `docs/architecture/phase_4h_target_first_decision_record.md` §7.6
--   - Phase 4C-pre primitives discipline (org_id + brand_id + data_environment)
--   - Phase 4E `outbound_jobs.message_intent` CHECK constraint (10-value enum)
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. patient_inbox_messages table
-- ---------------------------------------------------------------------

create table if not exists public.patient_inbox_messages (
  id uuid primary key default gen_random_uuid(),

  -- Primitives (system primitives addendum; non-negotiable for new tables)
  org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict,
  brand_id uuid references public.brands (id) on delete set null,
  data_environment text not null default public.current_data_env()
    check (data_environment in ('production', 'staging', 'internal_qa', 'synthetic')),

  -- Patient back-pointer
  patient_id uuid not null references public.patients (id) on delete cascade,

  -- Idempotency anchor + governance lineage back to the outbound_job
  -- that produced this message. UNIQUE makes replay safe (the dispatcher
  -- runs `record_inbox_message` for the same outbound_job_id at most
  -- once per terminal-success; ON CONFLICT in the orchestrator returns
  -- the existing row's id without inserting).
  outbound_job_id uuid not null unique references public.outbound_jobs (id) on delete restrict,

  -- Governance lineage captured at write time. Nullable because some
  -- operational kinds (system-cron-emitted alerts, ops manual sends)
  -- may not have a typed rule. When set, these mirror the values on
  -- the source outbound_jobs row.
  rule_id text,
  rule_version text,
  template_key text,
  template_version text,

  -- Privacy lineage (Section 1Q.17). NOT NULL because every governed
  -- delivery must declare them; lets downstream queries answer
  -- "show me every tier_3+ message delivered to patient X" without
  -- joining to outbound_jobs.
  intended_privacy_exposure_level smallint not null
    check (intended_privacy_exposure_level between 0 and 5),
  message_intent text not null check (message_intent in (
    'account', 'operational', 'clinical', 'safety', 'billing',
    'support', 'marketing', 'education', 'vendor', 'internal'
  )),

  -- Rendered output. Mirrors `outbound_jobs.payload.rendered_email`
  -- shape so the future patient portal can display either email-shaped
  -- or in_app-shaped messages with the same render pipeline.
  subject text not null,
  body_html text not null,
  body_text text not null,

  -- Forward-compat flexible context. Empty-object default keeps c1
  -- simple; future commits write CTA references, deep links, structured
  -- attachments, semantic tags, expiration semantics, AI summaries,
  -- structured inbox-card variants. When patterns crystallize across
  -- multiple consumers, individual fields can be promoted to typed
  -- columns. Standard codebase convention (mirrors message_threads.
  -- metadata, messages.metadata, audit_events.metadata, outbound_jobs.
  -- metadata).
  metadata jsonb not null default '{}'::jsonb,

  -- Read state. Null = unread; set = patient has acknowledged via UI.
  -- Unread-count queries use `WHERE read_at IS NULL` (indexed below).
  read_at timestamptz,

  -- Soft archival seam. Null = active in inbox; non-null = archived.
  -- Cheap forward-compat: inbox tables grow large fast and `read_at`
  -- alone becomes insufficient (a read message is not the same as an
  -- archived message). Adding the field at table creation costs zero
  -- now; retrofitting after the table grows is much more expensive.
  -- Future archival jobs / patient cleanup / retention runtime / AI
  -- context exclusion / provider-side filtering all use this field.
  -- No archival logic ships in c1; field is reserved.
  archived_at timestamptz,

  -- Effective vs recorded time discipline (primitives addendum).
  -- effective_at = the time the event happened (= source outbound_jobs.
  --   effective_at; differs on backfill from now()).
  -- created_at = the time this row was inserted (= dispatcher run).
  effective_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- 2. Comments (binding for governance + future-us context)
-- ---------------------------------------------------------------------

comment on table public.patient_inbox_messages is
  'Phase 4H-in-app-inbox c1. Durable artifact of one-way system→patient ' ||
  'governance-tracked notifications. Distinct from messages (per-care_program ' ||
  'two-way patient↔staff conversation transcript). Both inside the ' ||
  'communications/inbox sibling per system-map ## Platform operational ' ||
  'model doctrine. Naming drift flag: "messages" may feel like a misnomer ' ||
  'as inbox content evolves toward AI care nudges, action cards, lab review ' ||
  'requests, escalations. v1 keeps messages per industry-standard inbox ' ||
  'vocabulary; renaming is a future concern.';

comment on column public.patient_inbox_messages.outbound_job_id is
  'FK back to the outbound_jobs row that produced this message. UNIQUE = ' ||
  'idempotency anchor (replay never creates duplicates). ON DELETE RESTRICT ' ||
  'preserves governance lineage even under outbound_jobs cleanup.';

comment on column public.patient_inbox_messages.metadata is
  'Forward-compat flexible context (CTA references, deep links, structured ' ||
  'attachments, semantic tags, AI summaries, inbox-card variants). Promote ' ||
  'individual fields to typed columns when patterns crystallize across ' ||
  'consumers. Default {} for c1 callers that do not pass metadata.';

comment on column public.patient_inbox_messages.archived_at is
  'Soft archival seam. Null = active; non-null = archived. No archival ' ||
  'logic in c1; field reserved for future archival jobs / retention runtime ' ||
  '/ patient cleanup / provider-side filtering.';

comment on column public.patient_inbox_messages.intended_privacy_exposure_level is
  'Section 1Q.17 6-tier taxonomy (0=no_phi, 1=existence_only, 2=low_context_phi, ' ||
  '3=pathway_named_phi, 4=clinical_detail_phi, 5=sensitive_clinical_phi). ' ||
  'Captured at write time so historical governance queries do not require ' ||
  'joining to outbound_jobs.';

comment on column public.patient_inbox_messages.message_intent is
  'Section 1Q.17 message-intent enum; CHECK constrained to the same 10 values ' ||
  'as outbound_jobs.message_intent + TS-side MESSAGE_INTENTS at lib/outbound/' ||
  'types.ts. Dual-layer enforcement (TS enum + SQL CHECK) prevents freeform-' ||
  'text entropy long-term.';

comment on column public.patient_inbox_messages.read_at is
  'Null = unread; set = patient acknowledged via UI. UI ships in a future ' ||
  'commit; until then no rule writes to in_app and no production patients ' ||
  'see inbox messages.';

-- ---------------------------------------------------------------------
-- 3. Indexes
-- ---------------------------------------------------------------------

-- Unread-count queries: count(*) WHERE patient_id = $1 AND read_at IS NULL.
-- Partial index on null read_at keeps the index small (only unread rows).
create index if not exists patient_inbox_messages_unread_idx
  on public.patient_inbox_messages (patient_id)
  where read_at is null;

-- Inbox listing: SELECT WHERE patient_id = $1 ORDER BY created_at DESC.
create index if not exists patient_inbox_messages_patient_created_idx
  on public.patient_inbox_messages (patient_id, created_at desc);

-- Primitives partition discipline (org + env tenancy queries).
create index if not exists patient_inbox_messages_org_env_idx
  on public.patient_inbox_messages (org_id, data_environment);

-- (outbound_job_id index implied by UNIQUE constraint.)

-- ---------------------------------------------------------------------
-- 4. updated_at trigger
-- ---------------------------------------------------------------------

drop trigger if exists trg_patient_inbox_messages_updated_at on public.patient_inbox_messages;
create trigger trg_patient_inbox_messages_updated_at
  before update on public.patient_inbox_messages
  for each row
  execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 5. RLS — staff via is_staff_user; service role for orchestrator
--    writes; patient portal reads via service-role API (mirrors the
--    existing messages pattern; portal RLS hardening lands when the
--    UI ships)
-- ---------------------------------------------------------------------

alter table public.patient_inbox_messages enable row level security;

drop policy if exists "staff_select_patient_inbox_messages" on public.patient_inbox_messages;
create policy "staff_select_patient_inbox_messages"
  on public.patient_inbox_messages
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

-- No INSERT or UPDATE policy: writes only via the SECURITY DEFINER
-- orchestrator (which runs with elevated privileges and bypasses RLS).
-- Patient portal reads will go through service-role API in a future
-- commit when the UI ships.

-- ---------------------------------------------------------------------
-- 6. record_inbox_message SECURITY DEFINER orchestrator
-- ---------------------------------------------------------------------

create or replace function public.record_inbox_message(
  p_outbound_job_id uuid,
  p_patient_id uuid,
  p_org_id uuid,
  p_data_environment text,
  p_intended_privacy_exposure_level smallint,
  p_message_intent text,
  p_subject text,
  p_body_html text,
  p_body_text text,
  p_effective_at timestamptz,
  p_brand_id uuid default null,
  p_rule_id text default null,
  p_rule_version text default null,
  p_template_key text default null,
  p_template_version text default null,
  p_metadata jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_existing_id uuid;
  v_inserted_id uuid;
begin
  -- Defensive validation: required fields. (Defaults handle most
  -- cases at the column level, but explicit validation gives clearer
  -- errors when callers omit values.)
  if p_outbound_job_id is null then
    raise exception 'record_inbox_message: p_outbound_job_id is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_patient_id is null then
    raise exception 'record_inbox_message: p_patient_id is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_org_id is null then
    raise exception 'record_inbox_message: p_org_id is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_data_environment is null then
    raise exception 'record_inbox_message: p_data_environment is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_intended_privacy_exposure_level is null then
    raise exception 'record_inbox_message: p_intended_privacy_exposure_level is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_message_intent is null then
    raise exception 'record_inbox_message: p_message_intent is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_subject is null or p_body_html is null or p_body_text is null then
    raise exception 'record_inbox_message: rendered output (subject/body_html/body_text) is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_effective_at is null then
    raise exception 'record_inbox_message: p_effective_at is required'
      using errcode = 'invalid_parameter_value';
  end if;

  -- Idempotency: if a row already exists for this outbound_job_id,
  -- return its id without inserting. Mirrors enqueue_outbound_job's
  -- idempotency_key replay pattern.
  select id into v_existing_id
  from public.patient_inbox_messages
  where outbound_job_id = p_outbound_job_id;

  if v_existing_id is not null then
    return jsonb_build_object(
      'inbox_message_id', v_existing_id,
      'idempotent_replay', true
    );
  end if;

  -- Insert.
  insert into public.patient_inbox_messages (
    outbound_job_id,
    patient_id,
    org_id,
    brand_id,
    data_environment,
    rule_id,
    rule_version,
    template_key,
    template_version,
    intended_privacy_exposure_level,
    message_intent,
    subject,
    body_html,
    body_text,
    metadata,
    effective_at
  ) values (
    p_outbound_job_id,
    p_patient_id,
    p_org_id,
    p_brand_id,
    p_data_environment,
    p_rule_id,
    p_rule_version,
    p_template_key,
    p_template_version,
    p_intended_privacy_exposure_level,
    p_message_intent,
    p_subject,
    p_body_html,
    p_body_text,
    coalesce(p_metadata, '{}'::jsonb),
    p_effective_at
  )
  returning id into v_inserted_id;

  return jsonb_build_object(
    'inbox_message_id', v_inserted_id,
    'idempotent_replay', false
  );
end;
$$;

comment on function public.record_inbox_message is
  'Phase 4H-in-app-inbox c1. SECURITY DEFINER orchestrator for writes ' ||
  'to patient_inbox_messages. Idempotent on outbound_job_id (replay ' ||
  'returns existing id). Mirrors enqueue_outbound_job orchestrator ' ||
  'pattern. Direct INSERTs to patient_inbox_messages are forbidden by ' ||
  'RLS (no INSERT policy); this function is the only legitimate writer.';

-- Grants: the worker calls via service role (createAdminClient), which
-- already bypasses RLS. Authenticated callers do not call this function
-- directly. Explicit grant to authenticated would expose write surface
-- inappropriately; we leave it out.
revoke execute on function public.record_inbox_message(
  uuid, uuid, uuid, text, smallint, text, text, text, text, timestamptz, uuid, text, text, text, text, jsonb
) from public;
revoke execute on function public.record_inbox_message(
  uuid, uuid, uuid, text, smallint, text, text, text, text, timestamptz, uuid, text, text, text, text, jsonb
) from anon, authenticated;

-- =====================================================================
-- End of migration.
-- =====================================================================

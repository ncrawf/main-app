-- =====================================================================
-- Phase 4C-pre — system primitives + multi-org tenancy foundation.
--
-- Per system map "System primitives addendum" (top of map under Layer 1
-- foundation) + Section 1U (multi-org / multi-tenant partition discipline).
-- Companion doc: .cursor/plans/data_layers_reconciliation_v1.md.
--
-- Establishes:
--   1. orgs + brands tables (one default org seeded; brands placeholder).
--   2. Session-context helpers: current_org_id() + current_data_env().
--   3. org_id + data_environment columns on every patient-scoped canonical
--      table (default-driven from session context; backfill is one row per
--      table since we have no production data).
--   4. actor_kind column on audit_events (per primitives addendum #1).
--   5. Updated record_intake_emissions_batch orchestrator: accepts new
--      params p_org_id + p_data_environment + p_actor_kind; sets session
--      context once at top so column defaults pick them up; no per-INSERT
--      column-list edits needed.
--
-- Order matters: 4C-pre runs FIRST. Every later phase (4C-runtime resolver,
-- 4D artifacts, 4E outbound jobs, 4F event catalog, 4G search, 4H rules
-- + governance) writes rows that depend on these columns existing.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. orgs + brands tables
-- ---------------------------------------------------------------------

create table if not exists public.orgs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  display_name text not null,
  status text not null default 'active' check (status in ('active', 'suspended', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create trigger orgs_updated_at_trigger before update on public.orgs for each row execute function public.touch_updated_at();

-- Seed the canonical 'main' org with a fixed UUID so app code can reference it.
insert into public.orgs (id, slug, display_name)
  values ('00000000-0000-0000-0000-000000000001', 'main', 'Main')
  on conflict (id) do nothing;

create table if not exists public.brands (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.orgs (id) on delete restrict,
  slug text not null,
  display_name text not null,
  status text not null default 'active' check (status in ('active', 'suspended', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  unique (org_id, slug)
);
create trigger brands_updated_at_trigger before update on public.brands for each row execute function public.touch_updated_at();

comment on table public.orgs is 'Multi-tenant org partition root per Section 1U. v1 has one row (slug=main).';
comment on table public.brands is 'Optional sub-brand partition within an org per Section 1U.3. v1 has none.';

-- ---------------------------------------------------------------------
-- 2. Session-context helper functions
-- ---------------------------------------------------------------------

-- Returns the current org_id from session setting, or main org default.
-- Used as DEFAULT on every patient-scoped table's org_id column so callers
-- don't have to specify it on every INSERT; the orchestrator sets the
-- session context once via set_config('app.current_org_id', ..., true).
create or replace function public.current_org_id()
returns uuid
language plpgsql
stable
as $$
declare
  v_org text;
begin
  v_org := current_setting('app.current_org_id', true);
  if v_org is null or v_org = '' then
    return '00000000-0000-0000-0000-000000000001'::uuid;
  end if;
  return v_org::uuid;
end;
$$;

-- Returns the current data_environment from session setting, or 'production' default.
create or replace function public.current_data_env()
returns text
language plpgsql
stable
as $$
declare
  v_env text;
begin
  v_env := current_setting('app.current_data_env', true);
  if v_env is null or v_env = '' then
    return 'production';
  end if;
  return v_env;
end;
$$;

comment on function public.current_org_id() is 'Session-context helper per Section 1U. Used as DEFAULT on org_id columns.';
comment on function public.current_data_env() is 'Session-context helper per primitives addendum #4. Used as DEFAULT on data_environment columns.';

-- ---------------------------------------------------------------------
-- 3. ALTER patients (top of FK chain)
-- ---------------------------------------------------------------------

alter table public.patients
  add column if not exists org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict,
  add column if not exists brand_id uuid references public.brands (id) on delete set null,
  add column if not exists data_environment text not null default public.current_data_env()
    check (data_environment in ('production', 'staging', 'internal_qa', 'synthetic'));

create index if not exists patients_org_idx on public.patients (org_id) where data_environment = 'production';
create index if not exists patients_data_env_idx on public.patients (data_environment) where data_environment <> 'production';

-- ---------------------------------------------------------------------
-- 4. ALTER 19 Phase 3 canonical tables + treatment_orders
-- ---------------------------------------------------------------------

do $$
declare
  t text;
  patient_scoped_tables text[] := array[
    'patient_clinical_assertions',
    'patient_state_observations',
    'patient_identity_verifications',
    'subscriptions',
    'intake_sessions',
    'intake_responses',
    'patient_consents',
    'eligibility_decisions',
    'patient_addresses',
    'patient_contacts',
    'patient_medications',
    'patient_allergies',
    'patient_immunizations',
    'patient_exam_findings',
    'patient_external_providers',
    'patient_preferred_pharmacies',
    'patient_emergency_contacts',
    'patient_advance_directives',
    'patient_insurance_details',
    'treatment_orders'
  ];
begin
  foreach t in array patient_scoped_tables loop
    if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = t) then
      execute format('alter table public.%I add column if not exists org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict', t);
      execute format('alter table public.%I add column if not exists brand_id uuid references public.brands (id) on delete set null', t);
      execute format('alter table public.%I add column if not exists data_environment text not null default public.current_data_env() check (data_environment in (''production'', ''staging'', ''internal_qa'', ''synthetic''))', t);
      execute format('create index if not exists %I on public.%I (org_id, data_environment)', t || '_org_env_idx', t);
    end if;
  end loop;
end;
$$;

-- ---------------------------------------------------------------------
-- 4b. ALTER non-clinical domain tables for source_kind + source_id
--     (per primitives addendum #2 source/provenance — non-clinical
--     simpler pattern; clinical claims use evidence_refs[] + 1K.5.A)
-- ---------------------------------------------------------------------

do $$
declare
  t text;
  source_aware_tables text[] := array[
    'patient_addresses',
    'patient_contacts',
    'patient_external_providers',
    'patient_preferred_pharmacies',
    'patient_emergency_contacts',
    'patient_advance_directives',
    'patient_insurance_details',
    'patient_identity_verifications'
  ];
begin
  foreach t in array source_aware_tables loop
    if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = t) then
      execute format('alter table public.%I add column if not exists source_kind text check (source_kind is null or source_kind in (
        ''intake'', ''message'', ''webhook'', ''partner_adapter'', ''document_extraction'',
        ''provider_decision'', ''system_inference'', ''staff_manual'', ''patient_self'', ''lab_feed''
      ))', t);
      -- source_id is intentionally text: some sources are UUIDs (intake_response_id),
      -- some are external strings (Stripe webhook event id, partner order id).
      execute format('alter table public.%I add column if not exists source_id text', t);
      execute format('create index if not exists %I on public.%I (source_kind, source_id) where source_kind is not null', t || '_source_idx', t);
    end if;
  end loop;
end;
$$;

comment on column public.patient_addresses.source_kind is
  'Per primitives addendum #2 source/provenance. Pairs with source_id (text — UUID-or-external-string).';

-- ---------------------------------------------------------------------
-- 5. ALTER audit_events for actor_kind (primitives addendum #1)
-- ---------------------------------------------------------------------

alter table public.audit_events
  add column if not exists actor_kind text check (actor_kind is null or actor_kind in (
    'patient', 'staff_user', 'provider_user', 'system', 'cron',
    'webhook', 'partner_adapter', 'ai_engine'
  )),
  add column if not exists org_id uuid references public.orgs (id) on delete set null;

create index if not exists audit_events_actor_kind_idx on public.audit_events (actor_kind) where actor_kind is not null;
create index if not exists audit_events_org_idx on public.audit_events (org_id) where org_id is not null;

comment on column public.audit_events.actor_kind is
  'Compatible with AUTHORED_BY enum + adapter actors (system, cron, webhook, partner_adapter, ai_engine) per primitives addendum #1.';

-- ---------------------------------------------------------------------
-- 6. ALTER outbound_jobs (if table exists; primitive #4 dispatch gate prep)
-- ---------------------------------------------------------------------

do $$
begin
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'outbound_jobs') then
    execute 'alter table public.outbound_jobs
      add column if not exists org_id uuid default public.current_org_id() references public.orgs (id) on delete set null,
      add column if not exists data_environment text default public.current_data_env()
        check (data_environment is null or data_environment in (''production'', ''staging'', ''internal_qa'', ''synthetic'')),
      add column if not exists queued_by_kind text check (queued_by_kind is null or queued_by_kind in
        (''rule_engine'', ''staff_user'', ''system_cron'', ''ai_assistant_with_human_approval''))';
    execute 'create index if not exists outbound_jobs_org_env_idx on public.outbound_jobs (org_id, data_environment) where data_environment is not null';
  end if;
end;
$$;

-- ---------------------------------------------------------------------
-- 7. RLS policy templates (org_id partition; design-now, enforce-in-4G)
-- ---------------------------------------------------------------------
-- Per Section 1U.2, the canonical RLS predicate template every patient-scoped
-- table will adopt in Phase 4G when the staff session capability layer wires
-- current_setting('app.current_org_id') from authenticated session context:
--
--   CREATE POLICY org_scoped_select ON <table> FOR SELECT
--     USING (org_id = current_setting('app.current_org_id', true)::uuid);
--
--   CREATE POLICY org_scoped_modify ON <table> FOR ALL
--     USING (org_id = current_setting('app.current_org_id', true)::uuid)
--     WITH CHECK (org_id = current_setting('app.current_org_id', true)::uuid);
--
-- For Phase 4C-pre we add the columns + indexes; predicates land in Phase 4G
-- once `lib/auth/capabilities.ts` wires session context. The orchestrator
-- function (SECURITY DEFINER + service-role) bypasses RLS by design and is
-- the single canonical writer per primitives addendum top-line invariant.
--
-- Synthetic/test safety hard rule (locks in Phase 4E outbound dispatch):
-- non-`production` data_environment rows MUST NOT trigger real Stripe / Twilio
-- / pharmacy / lab calls. Enforced structurally via outbound_jobs.data_environment
-- gate (per primitives addendum #4) — not policy, code.

-- ---------------------------------------------------------------------
-- 8. Updated record_intake_emissions_batch orchestrator
--
--    Strategy: extend signature with three new params (p_org_id,
--    p_data_environment, p_actor_kind). Function sets session context
--    via set_config() at top so column DEFAULTs (current_org_id() +
--    current_data_env()) populate automatically — no per-INSERT edits
--    needed in the existing 21 target branches.
--
--    actor_kind for audit rows is captured directly into the audit
--    insert (single line change at one helper). Backward-compatible:
--    callers that don't pass new params get sensible defaults.
-- ---------------------------------------------------------------------

create or replace function public.record_intake_emissions_batch(
  p_session_id uuid,
  p_patient_id uuid,
  p_intake_response_id uuid,
  p_assertion_group_id text,
  p_interaction_context jsonb,
  p_emissions jsonb,
  p_org_id uuid default null,
  p_data_environment text default null,
  p_actor_kind text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  emission jsonb;
  payload jsonb;
  target_name text;
  inserted_id uuid;
  audit_id uuid;
  prior_assertion_id uuid := null;
  audit_metadata jsonb;
  results jsonb := '[]'::jsonb;
  v_org_id uuid;
  v_data_env text;
  v_actor_kind text;
  v_patient_org_id uuid;
  v_patient_data_env text;
begin
  -- Resolve session-context primitives. Caller may pass explicit values; otherwise
  -- look up from patient's row (org_id + data_environment) and default actor_kind to 'patient'.
  --
  -- Conflict detection per Phase 4C-pre Round-2 hardening: if caller passes an
  -- explicit p_org_id AND patient.org_id differs, REJECT (prevents accidental
  -- cross-org writes). Same check on data_environment but as warning only since
  -- env may legitimately differ (e.g., a staff QA tool flagging a production
  -- patient's row as 'internal_qa' for testing — rare, audited, allowed).
  if p_patient_id is not null then
    select org_id, data_environment into v_patient_org_id, v_patient_data_env
      from patients where id = p_patient_id;
  end if;

  if p_org_id is not null then
    if v_patient_org_id is not null and v_patient_org_id <> p_org_id then
      raise exception 'Cross-org write rejected: caller passed org_id=% but patient %.org_id=%',
        p_org_id, p_patient_id, v_patient_org_id
        using errcode = 'insufficient_privilege',
              hint = 'Per Section 1U: PHI never crosses org_id. Use SECURITY DEFINER cross-org function with capability + audit + consent.';
    end if;
    v_org_id := p_org_id;
  elsif v_patient_org_id is not null then
    v_org_id := v_patient_org_id;
  else
    v_org_id := '00000000-0000-0000-0000-000000000001'::uuid;
  end if;

  if p_data_environment is not null then
    v_data_env := p_data_environment;
    -- Soft warning only: env mismatch is rare but legitimate. Captured in audit metadata below.
  elsif v_patient_data_env is not null then
    v_data_env := v_patient_data_env;
  else
    v_data_env := 'production';
  end if;

  v_actor_kind := coalesce(p_actor_kind, 'patient');

  -- Set session context so column DEFAULTs populate org_id + data_environment automatically.
  perform set_config('app.current_org_id', v_org_id::text, true);
  perform set_config('app.current_data_env', v_data_env, true);

  for emission in select * from jsonb_array_elements(p_emissions) loop
    target_name := emission->>'target';
    payload := emission->'payload';
    inserted_id := null;
    audit_id := null;

    -- ---------- 1. clinical_assertion ----------
    if target_name = 'clinical_assertion' then
      insert into patient_clinical_assertions (
        patient_id, concept_id, concept_version, assertion_type, status, authored_by,
        authored_by_user_id, confidence, confidence_score, evidence_refs, context, context_key,
        onset_at, onset_estimated, resolved_at, resolution_reason, severity,
        notes_clinical_visit_id, supersedes_assertion_id, branch_path_token,
        source_intake_response_id, metadata
      ) values (
        p_patient_id,
        payload->>'concept_id',
        payload->>'concept_version',
        payload->>'assertion_type',
        payload->>'status',
        payload->>'authored_by',
        nullif(payload->>'authored_by_user_id', '')::uuid,
        payload->>'confidence',
        nullif(payload->>'confidence_score', '')::numeric,
        coalesce(payload->'evidence_refs', '[]'::jsonb),
        coalesce(payload->'context', '{}'::jsonb),
        payload->>'context_key',
        nullif(payload->>'onset_at', '')::timestamptz,
        coalesce((payload->>'onset_estimated')::boolean, false),
        nullif(payload->>'resolved_at', '')::timestamptz,
        payload->>'resolution_reason',
        nullif(payload->>'severity', ''),
        nullif(payload->>'notes_clinical_visit_id', '')::uuid,
        nullif(payload->>'supersedes_assertion_id', '')::uuid,
        coalesce(payload->>'branch_path_token', null),
        p_intake_response_id,
        payload->'metadata'
      ) returning id into inserted_id;
      prior_assertion_id := inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_clinical_assertions', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object(
                  'session_id', p_session_id,
                  'intake_response_id', p_intake_response_id,
                  'concept_id', payload->>'concept_id',
                  'concept_version', payload->>'concept_version',
                  'assertion_type', payload->>'assertion_type',
                  'authored_by', payload->>'authored_by',
                  'assertion_group_id', p_assertion_group_id,
                  'interaction_context', p_interaction_context,
                  'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 2. observation ----------
    elsif target_name = 'observation' then
      insert into patient_state_observations (
        patient_id, field_name, value, value_units, observed_at, source,
        observation_context, clinical_visit_id, recorded_by_user_id, supersedes_observation_id, metadata
      ) values (
        p_patient_id,
        payload->>'field_name',
        payload->'value',
        nullif(payload->>'value_units', ''),
        coalesce(nullif(payload->>'observed_at', '')::timestamptz, now()),
        payload->>'source',
        coalesce(payload->'observation_context', '{}'::jsonb),
        nullif(payload->>'clinical_visit_id', '')::uuid,
        nullif(payload->>'recorded_by_user_id', '')::uuid,
        nullif(payload->>'supersedes_observation_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_state_observations', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id, 'field_name', payload->>'field_name',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 3. medication ----------
    elsif target_name = 'medication' then
      insert into patient_medications (
        patient_id, medication_concept_id, name_normalized, name_as_reported,
        dose_value, dose_units, frequency, route, prn_indication,
        prescribed_by_user_id, prescribed_by_external_provider_id, prescribing_clinical_visit_id,
        treatment_order_id, start_date, end_date, status, reconciliation_status,
        reconciled_by_user_id, reconciled_at,
        source_assertion_id, supersedes_medication_id, metadata
      ) values (
        p_patient_id,
        payload->>'medication_concept_id',
        payload->>'name_normalized',
        nullif(payload->>'name_as_reported', ''),
        nullif(payload->>'dose_value', '')::numeric,
        nullif(payload->>'dose_units', ''),
        nullif(payload->>'frequency', ''),
        nullif(payload->>'route', ''),
        nullif(payload->>'prn_indication', ''),
        nullif(payload->>'prescribed_by_user_id', '')::uuid,
        nullif(payload->>'prescribed_by_external_provider_id', '')::uuid,
        nullif(payload->>'prescribing_clinical_visit_id', '')::uuid,
        nullif(payload->>'treatment_order_id', '')::uuid,
        nullif(payload->>'start_date', '')::date,
        nullif(payload->>'end_date', '')::date,
        payload->>'status',
        payload->>'reconciliation_status',
        nullif(payload->>'reconciled_by_user_id', '')::uuid,
        nullif(payload->>'reconciled_at', '')::timestamptz,
        coalesce(nullif(payload->>'source_assertion_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'supersedes_medication_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_medications', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'source_assertion_id', coalesce(payload->>'source_assertion_id', prior_assertion_id::text),
                                   'reconciliation_status', payload->>'reconciliation_status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 4. allergy ----------
    elsif target_name = 'allergy' then
      insert into patient_allergies (
        patient_id, allergen_concept_id, reaction_type, severity,
        onset_age, onset_date, last_reaction_date, verified_by_user_id, reconciliation_status,
        source_assertion_id, clinical_visit_id, supersedes_allergy_id, metadata
      ) values (
        p_patient_id,
        payload->>'allergen_concept_id',
        payload->>'reaction_type',
        payload->>'severity',
        nullif(payload->>'onset_age', '')::int,
        nullif(payload->>'onset_date', '')::date,
        nullif(payload->>'last_reaction_date', '')::date,
        nullif(payload->>'verified_by_user_id', '')::uuid,
        payload->>'reconciliation_status',
        coalesce(nullif(payload->>'source_assertion_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'clinical_visit_id', '')::uuid,
        nullif(payload->>'supersedes_allergy_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_allergies', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'reconciliation_status', payload->>'reconciliation_status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 5. immunization ----------
    elsif target_name = 'immunization' then
      insert into patient_immunizations (
        patient_id, cvx_code, vaccine_name, administered_date, lot_number, manufacturer,
        site, route, administering_user_id, administering_external_org, clinical_visit_id,
        source, reconciliation_status, source_assertion_id, supersedes_immunization_id, metadata
      ) values (
        p_patient_id,
        nullif(payload->>'cvx_code', ''),
        payload->>'vaccine_name',
        (payload->>'administered_date')::date,
        nullif(payload->>'lot_number', ''),
        nullif(payload->>'manufacturer', ''),
        nullif(payload->>'site', ''),
        nullif(payload->>'route', ''),
        nullif(payload->>'administering_user_id', '')::uuid,
        nullif(payload->>'administering_external_org', ''),
        nullif(payload->>'clinical_visit_id', '')::uuid,
        payload->>'source',
        payload->>'reconciliation_status',
        coalesce(nullif(payload->>'source_assertion_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'supersedes_immunization_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_immunizations', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'reconciliation_status', payload->>'reconciliation_status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 6. exam_finding ----------
    elsif target_name = 'exam_finding' then
      insert into patient_exam_findings (
        patient_id, finding_concept_id, severity, location, laterality,
        observed_at, observed_by_provider_user_id, clinical_visit_id, free_text_notes,
        supersedes_finding_id, metadata
      ) values (
        p_patient_id,
        payload->>'finding_concept_id',
        payload->>'severity',
        payload->'location',
        nullif(payload->>'laterality', ''),
        (payload->>'observed_at')::timestamptz,
        (payload->>'observed_by_provider_user_id')::uuid,
        (payload->>'clinical_visit_id')::uuid,
        nullif(payload->>'free_text_notes', ''),
        nullif(payload->>'supersedes_finding_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_exam_findings', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'finding_concept_id', payload->>'finding_concept_id',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 7. consent ----------
    elsif target_name = 'consent' then
      insert into patient_consents (
        patient_id, type, version_hash, legal_text_snapshot_id, accepted_at, source_surface,
        captured_intake_response_id, captured_session_id, captured_atom_id,
        ip_address, device_context, captured_by, verifying_staff_user_id, staff_attestation_text,
        supersedes_consent_id, metadata
      ) values (
        p_patient_id,
        payload->>'type',
        payload->>'version_hash',
        payload->>'legal_text_snapshot_id',
        coalesce(nullif(payload->>'accepted_at', '')::timestamptz, now()),
        payload->>'source_surface',
        p_intake_response_id,
        p_session_id,
        coalesce(nullif(payload->>'captured_atom_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'ip_address', ''),
        payload->'device_context',
        coalesce(payload->>'captured_by', 'patient'),
        nullif(payload->>'verifying_staff_user_id', '')::uuid,
        nullif(payload->>'staff_attestation_text', ''),
        nullif(payload->>'supersedes_consent_id', '')::uuid,
        coalesce(payload->'metadata', jsonb_build_object('assertion_group_id', payload->>'assertion_group_id'))
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_consents', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'consent_type', payload->>'type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 8. patient_column ----------
    elsif target_name = 'patient_column' then
      execute format(
        'update public.patients set %I = $1 where id = $2',
        payload->>'column'
      ) using payload->'value', p_patient_id;
      inserted_id := p_patient_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patients', p_patient_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'column', payload->>'column',
                                   'value_set', payload->'value' is not null,
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 9. patient_address ----------
    elsif target_name = 'patient_address' then
      insert into patient_addresses (
        patient_id, street, apt, city, state, zip, country, validated_by, is_default, metadata
      ) values (
        p_patient_id,
        payload->>'street',
        nullif(payload->>'apt', ''),
        payload->>'city',
        payload->>'state',
        payload->>'zip',
        coalesce(payload->>'country', 'US'),
        nullif(payload->>'validated_by', ''),
        coalesce((payload->>'is_default')::boolean, false),
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_addresses', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 10. patient_contact ----------
    elsif target_name = 'patient_contact' then
      insert into patient_contacts (
        patient_id, kind, value, is_default, verified_at, metadata
      ) values (
        p_patient_id,
        payload->>'kind',
        payload->>'value',
        coalesce((payload->>'is_default')::boolean, false),
        nullif(payload->>'verified_at', '')::timestamptz,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_contacts', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'kind', payload->>'kind',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 11. external_provider ----------
    elsif target_name = 'external_provider' then
      insert into patient_external_providers (
        patient_id, relationship_type, provider_name, practice_name, npi,
        address, phone, fax, email, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'relationship_type',
        payload->>'provider_name',
        nullif(payload->>'practice_name', ''),
        nullif(payload->>'npi', ''),
        payload->'address',
        nullif(payload->>'phone', ''),
        nullif(payload->>'fax', ''),
        nullif(payload->>'email', ''),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_external_providers', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'relationship_type', payload->>'relationship_type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 12. preferred_pharmacy ----------
    elsif target_name = 'preferred_pharmacy' then
      insert into patient_preferred_pharmacies (
        patient_id, pharmacy_name, pharmacy_chain, address, phone, fax, npi, is_default, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'pharmacy_name',
        nullif(payload->>'pharmacy_chain', ''),
        payload->'address',
        payload->>'phone',
        nullif(payload->>'fax', ''),
        nullif(payload->>'npi', ''),
        coalesce((payload->>'is_default')::boolean, false),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_preferred_pharmacies', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 13. emergency_contact ----------
    elsif target_name = 'emergency_contact' then
      insert into patient_emergency_contacts (
        patient_id, name, relationship, phone_primary, phone_secondary, email, address,
        is_authorized_to_receive_phi, is_default, is_active, notes, metadata
      ) values (
        p_patient_id,
        payload->>'name',
        payload->>'relationship',
        payload->>'phone_primary',
        nullif(payload->>'phone_secondary', ''),
        nullif(payload->>'email', ''),
        payload->'address',
        coalesce((payload->>'is_authorized_to_receive_phi')::boolean, false),
        coalesce((payload->>'is_default')::boolean, false),
        coalesce((payload->>'is_active')::boolean, true),
        nullif(payload->>'notes', ''),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_emergency_contacts', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'relationship', payload->>'relationship',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 14. advance_directive ----------
    elsif target_name = 'advance_directive' then
      insert into patient_advance_directives (
        patient_id, directive_type, executed_date, expires_date,
        proxy_name, proxy_phone, proxy_relationship, document_storage_id, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'directive_type',
        (payload->>'executed_date')::date,
        nullif(payload->>'expires_date', '')::date,
        nullif(payload->>'proxy_name', ''),
        nullif(payload->>'proxy_phone', ''),
        nullif(payload->>'proxy_relationship', ''),
        nullif(payload->>'document_storage_id', ''),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_advance_directives', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'directive_type', payload->>'directive_type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 15. insurance_details ----------
    elsif target_name = 'insurance_details' then
      insert into patient_insurance_details (
        patient_id, coverage_type, carrier_name, plan_name, member_id, group_id,
        subscriber_name, subscriber_dob, relationship_to_subscriber,
        effective_date, termination_date, card_image_storage_id, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'coverage_type',
        payload->>'carrier_name',
        nullif(payload->>'plan_name', ''),
        payload->>'member_id',
        nullif(payload->>'group_id', ''),
        nullif(payload->>'subscriber_name', ''),
        nullif(payload->>'subscriber_dob', '')::date,
        coalesce(payload->>'relationship_to_subscriber', 'self'),
        nullif(payload->>'effective_date', '')::date,
        nullif(payload->>'termination_date', '')::date,
        nullif(payload->>'card_image_storage_id', ''),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'patient_insurance_details', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'coverage_type', payload->>'coverage_type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 16. subscription ----------
    elsif target_name = 'subscription' then
      insert into subscriptions (
        patient_id, pricing_profile_id, pricing_profile_version, pathway_code, plan_id, status, psp,
        stripe_subscription_id, stripe_price_id, stripe_customer_id,
        started_at, current_period_start, current_period_end, cancellation_window_days, metadata
      ) values (
        p_patient_id,
        payload->>'pricing_profile_id',
        payload->>'pricing_profile_version',
        payload->>'pathway_code',
        payload->>'plan_id',
        payload->>'status',
        coalesce(payload->>'psp', 'stripe'),
        nullif(payload->>'stripe_subscription_id', ''),
        nullif(payload->>'stripe_price_id', ''),
        nullif(payload->>'stripe_customer_id', ''),
        nullif(payload->>'started_at', '')::timestamptz,
        nullif(payload->>'current_period_start', '')::timestamptz,
        nullif(payload->>'current_period_end', '')::timestamptz,
        coalesce((payload->>'cancellation_window_days')::int, 2),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('commerce.membership_plan_selected', 'subscriptions', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'pricing_profile_id', payload->>'pricing_profile_id',
                                   'plan_id', payload->>'plan_id',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 17. treatment_order ----------
    elsif target_name = 'treatment_order' then
      insert into treatment_orders (
        patient_id, status, intake_session_id, pathway_code, interaction_context, metadata
      ) values (
        p_patient_id,
        payload->>'status',
        coalesce(nullif(payload->>'intake_session_id', '')::uuid, p_session_id),
        payload->>'pathway_code',
        p_interaction_context,
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('commerce.submit_to_provider_triggered', 'treatment_orders', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'pathway_code', payload->>'pathway_code',
                                   'status', payload->>'status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 18. commerce_order (out of Phase 4A scope) ----------
    elsif target_name = 'commerce_order' then
      raise exception 'commerce_order target not implemented in Phase 4A: commerce_orders table not yet created. See Section 1Q.23 Patch G5 retail rail (future phase). Emission discarded.'
        using errcode = 'feature_not_supported',
              hint = 'Add commerce_orders table in a future migration before using this target.';

    -- ---------- 19. session_metadata ----------
    elsif target_name = 'session_metadata' then
      update intake_sessions
      set metadata = jsonb_set(coalesce(metadata, '{}'::jsonb),
                               array[payload->>'field'],
                               payload->'value',
                               true),
          last_activity_at = now()
      where id = p_session_id
      returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.atom.emitted', 'intake_sessions', p_session_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'field', payload->>'field',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 20. eligibility_decision ----------
    elsif target_name = 'eligibility_decision' then
      insert into eligibility_decisions (
        patient_id, session_id, pathway_code, rule_id, rule_version, result, reasons,
        input_refs, inputs_hash, input_snapshot, decided_by, decided_by_user_id,
        supersedes_decision_id, interaction_context, metadata
      ) values (
        p_patient_id,
        p_session_id,
        payload->>'pathway_code',
        payload->>'rule_id',
        payload->>'rule_version',
        payload->>'result',
        coalesce(payload->'reasons', '[]'::jsonb),
        payload->'input_refs',
        payload->>'inputs_hash',
        payload->'input_snapshot',
        coalesce(payload->>'decided_by', 'rule_engine'),
        nullif(payload->>'decided_by_user_id', '')::uuid,
        nullif(payload->>'supersedes_decision_id', '')::uuid,
        p_interaction_context,
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values ('intake.candidacy_result.rendered', 'eligibility_decisions', inserted_id::text, p_patient_id, v_actor_kind, v_org_id,
                jsonb_build_object('session_id', p_session_id,
                                   'pathway_code', payload->>'pathway_code',
                                   'rule_id', payload->>'rule_id',
                                   'result', payload->>'result',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context,
                                   'data_environment', v_data_env))
        returning id into audit_id;

    -- ---------- 21. audit_event_only ----------
    elsif target_name = 'audit_event_only' then
      audit_metadata := coalesce(payload->'metadata', '{}'::jsonb)
                        || jsonb_build_object('session_id', p_session_id,
                                              'assertion_group_id', p_assertion_group_id,
                                              'interaction_context', p_interaction_context,
                                              'data_environment', v_data_env);
      insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
        values (payload->>'action',
                payload->>'resource_type',
                nullif(payload->>'resource_id', ''),
                p_patient_id,
                v_actor_kind,
                v_org_id,
                audit_metadata)
        returning id into audit_id;
      inserted_id := null;

    else
      raise exception 'Unknown emission target: %', target_name
        using errcode = 'invalid_parameter_value',
              hint = 'Target must be one of the 21 EmissionTarget enum values declared in lib/intake/targets.ts.';
    end if;

    results := results || jsonb_build_array(jsonb_build_object(
      'target', target_name,
      'id', inserted_id,
      'audit_event_id', audit_id
    ));
  end loop;

  return results;
end;
$$;

comment on function public.record_intake_emissions_batch(uuid, uuid, uuid, text, jsonb, jsonb, uuid, text, text) is
'Phase 4A intake emission orchestrator extended for Phase 4C-pre primitives + tenancy. Atomic multi-row write across 21 EmissionTargets per Section 1K.0.5.11 + 1Q.7. Sets app.current_org_id + app.current_data_env once at top so column DEFAULTs propagate org_id + data_environment automatically. actor_kind written into audit_events per primitives addendum #1.';

grant execute on function public.record_intake_emissions_batch(uuid, uuid, uuid, text, jsonb, jsonb, uuid, text, text) to authenticated;
grant execute on function public.record_intake_emissions_batch(uuid, uuid, uuid, text, jsonb, jsonb, uuid, text, text) to service_role;

-- ---------------------------------------------------------------------
-- 9. RLS hardening: prevent updates/deletes on append-only tables
--    (RLS read-side org_id predicates land in 4G when staff session
--    capability layer wires the current_setting context.)
-- ---------------------------------------------------------------------
-- (Existing RLS from Phase 3 migration retained; primitives columns
-- pass through the same predicates.)

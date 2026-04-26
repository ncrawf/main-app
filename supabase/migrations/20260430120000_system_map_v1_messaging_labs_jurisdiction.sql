-- System map v1 (schema alignment): lab linkage + review, jurisdiction of care,
-- first-class in-app messaging (per care_program), clinical visit link to report.
-- Additive. Patient-portal / server uses service role where RLS is staff-only.

-- ---------------------------------------------------------------------------
-- 1) Jurisdiction of care
-- ---------------------------------------------------------------------------
alter table public.patients
  add column if not exists care_jurisdiction_state text;

comment on column public.patients.care_jurisdiction_state is
  'US state code (or org convention) for jurisdiction of care; not ship-to alone. See system map.';

-- ---------------------------------------------------------------------------
-- 2) Lab / diagnostic chain — order ↔ report ↔ observations
-- ---------------------------------------------------------------------------
alter table public.patient_diagnostic_reports
  add column if not exists lab_order_id uuid,
  add column if not exists reviewed_by_staff_id uuid,
  add column if not exists reviewed_at timestamptz,
  add column if not exists released_to_patient_at timestamptz;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'patient_diagnostic_reports_lab_order_id_fkey'
  ) then
    alter table public.patient_diagnostic_reports
      add constraint patient_diagnostic_reports_lab_order_id_fkey
      foreign key (lab_order_id) references public.lab_orders (id) on delete set null;
  end if;
  if not exists (
    select 1 from pg_constraint
    where conname = 'patient_diagnostic_reports_reviewed_by_fkey'
  ) then
    alter table public.patient_diagnostic_reports
      add constraint patient_diagnostic_reports_reviewed_by_fkey
      foreign key (reviewed_by_staff_id) references public.staff_profiles (id) on delete set null;
  end if;
end$$;

create index if not exists patient_diagnostic_reports_lab_order_idx
  on public.patient_diagnostic_reports (lab_order_id)
  where lab_order_id is not null;

comment on column public.patient_diagnostic_reports.lab_order_id is
  'Ingested result may link to requisition; null until known (reconciliation in metadata).';
comment on column public.patient_diagnostic_reports.reviewed_by_staff_id is
  'Provider (or delegate) who completed clinical review of this report.';
comment on column public.patient_diagnostic_reports.released_to_patient_at is
  'When patient may see result summary; not prescriber authorization for dosing.';

alter table public.patient_lab_observations
  add column if not exists diagnostic_report_id uuid;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'patient_lab_observations_diagnostic_report_fkey'
  ) then
    alter table public.patient_lab_observations
      add constraint patient_lab_observations_diagnostic_report_fkey
      foreign key (diagnostic_report_id) references public.patient_diagnostic_reports (id) on delete set null;
  end if;
end$$;

create index if not exists patient_lab_observations_report_idx
  on public.patient_lab_observations (diagnostic_report_id)
  where diagnostic_report_id is not null;

comment on column public.patient_lab_observations.diagnostic_report_id is
  'Parent report for analyte rows; visibility follows report per policy.';

alter table public.lab_orders
  add column if not exists first_result_ingested_at timestamptz;

comment on column public.lab_orders.first_result_ingested_at is
  'Set when any result is ingested and linked to this order.';

-- ---------------------------------------------------------------------------
-- 3) Clinical visit ↔ diagnostic report
-- ---------------------------------------------------------------------------
alter table public.clinical_visits
  add column if not exists diagnostic_report_id uuid;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'clinical_visits_diagnostic_report_fkey'
  ) then
    alter table public.clinical_visits
      add constraint clinical_visits_diagnostic_report_fkey
      foreign key (diagnostic_report_id) references public.patient_diagnostic_reports (id) on delete set null;
  end if;
end$$;

create index if not exists clinical_visits_diagnostic_report_idx
  on public.clinical_visits (diagnostic_report_id)
  where diagnostic_report_id is not null;

comment on column public.clinical_visits.diagnostic_report_id is
  'Optional: visit explicitly tied to a report (e.g. lab review visit).';

-- ---------------------------------------------------------------------------
-- 4) In-app messaging — SoT: message + message_thread (per care_program)
-- ---------------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'message_participant_kind') then
    create type public.message_participant_kind as enum (
      'patient',
      'staff',
      'provider'
    );
  end if;
end$$;

create table if not exists public.message_threads (
  id uuid primary key default gen_random_uuid(),
  care_program_id uuid not null unique references public.care_programs (id) on delete cascade,
  patient_id uuid not null references public.patients (id) on delete cascade,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.message_threads is
  'One in-app thread per care_program; chat SoT. Timeline = projection, not rehydration.';

create index if not exists message_threads_patient_idx
  on public.message_threads (patient_id, created_at desc);

create or replace function public.set_message_threads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_message_threads_updated_at on public.message_threads;
create trigger trg_message_threads_updated_at
  before update on public.message_threads
  for each row
  execute function public.set_message_threads_updated_at();

create table if not exists public.message_thread_participants (
  id uuid primary key default gen_random_uuid(),
  message_thread_id uuid not null references public.message_threads (id) on delete cascade,
  kind public.message_participant_kind not null,
  patient_id uuid references public.patients (id) on delete cascade,
  staff_profile_id uuid references public.staff_profiles (id) on delete set null,
  left_at timestamptz,
  joined_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  constraint message_thread_participants_shape check (
    (kind = 'patient' and patient_id is not null and staff_profile_id is null)
    or
    (kind in ('staff', 'provider') and staff_profile_id is not null and patient_id is null)
  )
);

comment on table public.message_thread_participants is
  'Join/leave: patient row uses patient_id; staff and provider use staff_profile_id.';

-- At most one patient row per thread.
create unique index if not exists message_thread_participants_one_patient
  on public.message_thread_participants (message_thread_id)
  where kind = 'patient';

create unique index if not exists message_thread_participants_thread_staff
  on public.message_thread_participants (message_thread_id, staff_profile_id)
  where staff_profile_id is not null;

create index if not exists message_thread_participants_thread_idx
  on public.message_thread_participants (message_thread_id, left_at);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  message_thread_id uuid not null references public.message_threads (id) on delete cascade,
  care_program_id uuid not null references public.care_programs (id) on delete cascade,
  patient_id uuid not null references public.patients (id) on delete cascade,
  from_patient boolean not null,
  author_staff_id uuid references public.staff_profiles (id) on delete set null,
  body text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint messages_author_consistency check (
    (from_patient = true and author_staff_id is null)
    or
    (from_patient = false and author_staff_id is not null)
  )
);

comment on table public.messages is
  'In-app message bodies (SoT for transcript). Staff includes prescribers; use metadata to label.';

create index if not exists messages_thread_created_idx
  on public.messages (message_thread_id, created_at desc);

create index if not exists messages_patient_idx
  on public.messages (patient_id, created_at desc);

-- ---------------------------------------------------------------------------
-- 5) RLS — staff; patient/portal: service role in API (same pattern as support)
-- ---------------------------------------------------------------------------
alter table public.message_threads enable row level security;
alter table public.message_thread_participants enable row level security;
alter table public.messages enable row level security;

drop policy if exists "staff_select_message_threads" on public.message_threads;
create policy "staff_select_message_threads"
  on public.message_threads
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_message_threads" on public.message_threads;
create policy "staff_insert_message_threads"
  on public.message_threads
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_message_threads" on public.message_threads;
create policy "staff_update_message_threads"
  on public.message_threads
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_all_message_thread_participants" on public.message_thread_participants;
create policy "staff_all_message_thread_participants"
  on public.message_thread_participants
  for all
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_messages" on public.messages;
create policy "staff_select_messages"
  on public.messages
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_messages" on public.messages;
create policy "staff_insert_messages"
  on public.messages
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and from_patient = false
    and author_staff_id = auth.uid()
  );

-- Patient-originated rows: app inserts with service role (bypasses RLS).

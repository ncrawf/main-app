-- Staff identity (ties to Supabase Auth), audit trail, queue assignment, and RLS for human sessions.
-- After migration: create Auth users in Supabase Dashboard, then insert matching staff_profiles rows (see docs/internal-rbac.md).

-- ---------------------------------------------------------------------------
-- Staff profiles (1:1 with auth.users)
-- ---------------------------------------------------------------------------
create table if not exists public.staff_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null check (role in (
    'clinical_reviewer',
    'prescriber',
    'pharmacy_ops',
    'customer_support',
    'billing',
    'compliance_auditor',
    'ops_admin',
    'super_admin'
  )),
  display_name text,
  timezone text not null default 'America/New_York',
  service_state_codes text[] not null default '{}',
  availability jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.staff_profiles is 'Internal operators; id matches auth.users. Enforced via RLS + app.';
comment on column public.staff_profiles.service_state_codes is 'US state codes this user covers for queue routing (e.g. MI, OH).';
comment on column public.staff_profiles.availability is 'Structured windows, e.g. {"weekdays":{"start":"09:00","end":"17:00"}} — app interprets.';

create index if not exists staff_profiles_role_idx on public.staff_profiles (role);

-- ---------------------------------------------------------------------------
-- Audit (append-style; prefer inserts via trusted server using service role or policy below)
-- ---------------------------------------------------------------------------
create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references auth.users (id) on delete set null,
  action text not null,
  resource_type text not null,
  resource_id text,
  patient_id uuid references public.patients (id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists audit_events_created_at_idx on public.audit_events (created_at desc);
create index if not exists audit_events_patient_idx on public.audit_events (patient_id);
create index if not exists audit_events_actor_idx on public.audit_events (actor_user_id);

comment on table public.audit_events is 'Security and workflow audit; immutable append.';

-- ---------------------------------------------------------------------------
-- Queue: optional assignee on protocol state (clinician queue)
-- ---------------------------------------------------------------------------
alter table public.patient_states
  add column if not exists assigned_to uuid references public.staff_profiles (id) on delete set null;

comment on column public.patient_states.assigned_to is 'Staff member responsible for this case in review queue.';

create index if not exists patient_states_assigned_to_idx on public.patient_states (assigned_to);

-- ---------------------------------------------------------------------------
-- Row Level Security (service role still bypasses — API routes unchanged)
-- ---------------------------------------------------------------------------
alter table public.patients enable row level security;
alter table public.patient_states enable row level security;
alter table public.form_submissions enable row level security;
alter table public.forms enable row level security;

alter table public.staff_profiles enable row level security;
alter table public.audit_events enable row level security;

drop policy if exists "staff_select_forms" on public.forms;
create policy "staff_select_forms"
  on public.forms
  for select
  to authenticated
  using (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
  );

-- Staff: any authenticated user who has a staff_profiles row may read all staff_profiles (small team / directory).
drop policy if exists "staff_directory_read" on public.staff_profiles;
create policy "staff_directory_read"
  on public.staff_profiles
  for select
  to authenticated
  using (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
  );

-- Patients: readable by any authenticated staff
drop policy if exists "staff_select_patients" on public.patients;
create policy "staff_select_patients"
  on public.patients
  for select
  to authenticated
  using (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
  );

-- Patient states + assignment
drop policy if exists "staff_select_patient_states" on public.patient_states;
create policy "staff_select_patient_states"
  on public.patient_states
  for select
  to authenticated
  using (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
  );

-- Submissions (clinical review)
drop policy if exists "staff_select_form_submissions" on public.form_submissions;
create policy "staff_select_form_submissions"
  on public.form_submissions
  for select
  to authenticated
  using (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
  );

-- Audit: insert only as self (server can use service role to bypass when needed)
drop policy if exists "staff_insert_audit_self" on public.audit_events;
create policy "staff_insert_audit_self"
  on public.audit_events
  for insert
  to authenticated
  with check (actor_user_id = auth.uid());

drop policy if exists "staff_select_audit_own" on public.audit_events;
create policy "staff_select_audit_own"
  on public.audit_events
  for select
  to authenticated
  using (
    actor_user_id = auth.uid()
    or exists (
      select 1 from public.staff_profiles sp
      where sp.id = auth.uid() and sp.role in ('compliance_auditor', 'ops_admin', 'super_admin')
    )
  );

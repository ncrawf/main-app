-- MAIN foundation: canonical tables + dynamic form submissions
-- Run via Supabase SQL editor or `supabase db push` if using CLI.

-- Patients (canonical identity; email is normalized lowercase for dedupe)
create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  phone text,
  dob date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint patients_email_unique unique (email)
);

create index if not exists patients_created_at_idx on public.patients (created_at desc);

-- Versioned form definitions (metadata; full UI config lives in app code for now)
create table if not exists public.forms (
  id uuid primary key default gen_random_uuid(),
  key text not null,
  version int not null default 1,
  label text not null,
  created_at timestamptz not null default now(),
  constraint forms_key_version_unique unique (key, version)
);

create index if not exists forms_key_idx on public.forms (key);

-- Raw JSON answers per submission (audit + flexibility)
create table if not exists public.form_submissions (
  id uuid primary key default gen_random_uuid(),
  form_id uuid not null references public.forms (id) on delete restrict,
  patient_id uuid references public.patients (id) on delete set null,
  answers jsonb not null default '{}'::jsonb,
  submitted_at timestamptz not null default now()
);

create index if not exists form_submissions_form_id_idx on public.form_submissions (form_id);
create index if not exists form_submissions_patient_id_idx on public.form_submissions (patient_id);
create index if not exists form_submissions_submitted_at_idx on public.form_submissions (submitted_at desc);

-- One row per patient for current GLP-1 protocol state (expand later per protocol)
create table if not exists public.patient_states (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  glp1_status text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint patient_states_patient_unique unique (patient_id)
);

-- Index only if legacy column exists (fresh DBs have it; production may have dropped it before re-running this file).
do $$
begin
  if exists (
    select 1
    from information_schema.columns c
    where c.table_schema = 'public'
      and c.table_name = 'patient_states'
      and c.column_name = 'glp1_status'
  ) then
    execute 'create index if not exists patient_states_glp1_status_idx on public.patient_states (glp1_status)';
  end if;
end$$;

-- Seed canonical form row for the app registry key `glp1-intake`
insert into public.forms (key, version, label)
values ('glp1-intake', 1, 'GLP-1 Intake')
on conflict (key, version) do nothing;

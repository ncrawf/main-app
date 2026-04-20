-- Refill requests: patient-initiated or staff-assisted queue for clinician/pharmacy fulfillment.

do $$
begin
  if not exists (select 1 from pg_type where typname = 'refill_request_status') then
    create type public.refill_request_status as enum (
      'requested',
      'under_review',
      'approved',
      'denied',
      'fulfilled',
      'cancelled'
    );
  end if;
end$$;

create table if not exists public.refill_requests (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  care_program_id uuid references public.care_programs (id) on delete set null,
  treatment_item_id uuid not null references public.treatment_items (id) on delete cascade,
  status public.refill_request_status not null default 'requested',
  requested_by_staff_id uuid references public.staff_profiles (id) on delete set null,
  patient_note text,
  staff_note text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists refill_requests_patient_idx
  on public.refill_requests (patient_id, created_at desc);

create index if not exists refill_requests_treatment_idx
  on public.refill_requests (treatment_item_id, created_at desc);

create index if not exists refill_requests_status_idx
  on public.refill_requests (status, created_at desc);

comment on table public.refill_requests is
  'One row per refill submission; ties to treatment_item and optional care_program.';

alter table public.refill_requests enable row level security;

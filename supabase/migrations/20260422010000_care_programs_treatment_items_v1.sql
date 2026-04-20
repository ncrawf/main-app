-- V1 multi-program architecture (additive, non-breaking)
-- Purpose: move from single-track glp1 status to patient -> care_program -> treatment_item model.
-- Existing `patient_states.glp1_status` remains for compatibility during migration.

-- 1) Enums
do $$
begin
  if not exists (select 1 from pg_type where typname = 'care_program_type') then
    create type public.care_program_type as enum (
      'weight_loss',
      'sexual_health_male',
      'sexual_health_female',
      'hair_growth',
      'energy_recovery',
      'longevity',
      'muscle_performance',
      'custom'
    );
  end if;
end$$;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'care_program_status') then
    create type public.care_program_status as enum (
      'intake_submitted',
      'under_review',
      'approved',
      'denied',
      'active',
      'paused',
      'completed',
      'cancelled'
    );
  end if;
end$$;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'treatment_item_status') then
    create type public.treatment_item_status as enum (
      'pending_approval',
      'approved',
      'denied',
      'rx_sent',
      'shipped',
      'active',
      'paused',
      'stopped',
      'refill_due',
      'refill_pending'
    );
  end if;
end$$;

-- 2) Program-level state (one patient can have multiple concurrent programs)
create table if not exists public.care_programs (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  program_type public.care_program_type not null,
  status public.care_program_status not null default 'intake_submitted',
  title text,
  complaint_summary text,
  metadata jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  ended_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists care_programs_patient_idx
  on public.care_programs (patient_id, created_at desc);

create index if not exists care_programs_status_idx
  on public.care_programs (status, updated_at desc);

create index if not exists care_programs_type_status_idx
  on public.care_programs (program_type, status, updated_at desc);

comment on table public.care_programs is
  'Patient program tracks (weight loss, hair, libido, etc.) with independent lifecycle.';

-- 3) Treatment-level state under a program (GLP-1, Cialis, Minoxidil, supplements, etc.)
create table if not exists public.treatment_items (
  id uuid primary key default gen_random_uuid(),
  care_program_id uuid not null references public.care_programs (id) on delete cascade,
  patient_id uuid not null references public.patients (id) on delete cascade,
  treatment_key text not null, -- e.g. glp1_semaglutide, tadalafil, minoxidil, b12
  display_name text not null,
  category text, -- e.g. rx, supplement, device
  status public.treatment_item_status not null default 'pending_approval',
  dosage jsonb not null default '{}'::jsonb,
  fulfillment jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  stopped_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists treatment_items_program_idx
  on public.treatment_items (care_program_id, created_at desc);

create index if not exists treatment_items_patient_status_idx
  on public.treatment_items (patient_id, status, updated_at desc);

create index if not exists treatment_items_key_idx
  on public.treatment_items (treatment_key);

comment on table public.treatment_items is
  'Independent treatment tracks inside a care program; supports multiple concurrent meds/supplements.';

-- 4) Optional order records linked to treatment item
create table if not exists public.treatment_orders (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  care_program_id uuid references public.care_programs (id) on delete set null,
  treatment_item_id uuid references public.treatment_items (id) on delete set null,
  order_ref text, -- pharmacy/external id
  status text not null default 'created', -- keep text flexible for external partner statuses
  amount_cents integer,
  currency text,
  tracking_number text,
  tracking_url text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists treatment_orders_patient_idx
  on public.treatment_orders (patient_id, created_at desc);

create index if not exists treatment_orders_treatment_idx
  on public.treatment_orders (treatment_item_id, created_at desc);

-- 5) Timeline scoping so "All activity" and "By program/treatment" views are possible
alter table public.patient_timeline_events
  add column if not exists care_program_id uuid references public.care_programs (id) on delete set null,
  add column if not exists treatment_item_id uuid references public.treatment_items (id) on delete set null;

create index if not exists patient_timeline_program_created_idx
  on public.patient_timeline_events (care_program_id, created_at desc);

create index if not exists patient_timeline_treatment_created_idx
  on public.patient_timeline_events (treatment_item_id, created_at desc);

-- 6) Transition rules (data-driven guards; enforced in app/service layer first)
create table if not exists public.workflow_status_transitions (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null check (entity_type in ('care_program', 'treatment_item')),
  from_status text,
  to_status text not null,
  created_at timestamptz not null default now(),
  unique (entity_type, from_status, to_status)
);

create index if not exists workflow_status_transitions_entity_idx
  on public.workflow_status_transitions (entity_type, from_status, to_status);

insert into public.workflow_status_transitions (entity_type, from_status, to_status) values
  ('care_program', 'intake_submitted', 'under_review'),
  ('care_program', 'under_review', 'approved'),
  ('care_program', 'under_review', 'denied'),
  ('care_program', 'approved', 'active'),
  ('care_program', 'active', 'paused'),
  ('care_program', 'paused', 'active'),
  ('care_program', 'active', 'completed'),
  ('care_program', 'denied', 'cancelled'),
  ('treatment_item', 'pending_approval', 'approved'),
  ('treatment_item', 'pending_approval', 'denied'),
  ('treatment_item', 'approved', 'rx_sent'),
  ('treatment_item', 'rx_sent', 'shipped'),
  ('treatment_item', 'shipped', 'active'),
  ('treatment_item', 'active', 'refill_due'),
  ('treatment_item', 'refill_due', 'refill_pending'),
  ('treatment_item', 'refill_pending', 'active'),
  ('treatment_item', 'active', 'paused'),
  ('treatment_item', 'paused', 'active'),
  ('treatment_item', 'active', 'stopped')
on conflict do nothing;

comment on table public.workflow_status_transitions is
  'Declarative allowed status moves; backend validates transitions against this list.';


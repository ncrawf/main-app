-- Append-only patient timeline (staff notes, future: integrations, status events).
-- actor must be a staff profile (same id as auth.users).

create table if not exists public.patient_timeline_events (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  event_type text not null,
  body text,
  payload jsonb not null default '{}'::jsonb,
  actor_user_id uuid not null references public.staff_profiles (id) on delete restrict,
  created_at timestamptz not null default now()
);

comment on table public.patient_timeline_events is 'Append-only timeline per patient (Shopify-style); event_type e.g. staff_note.';
comment on column public.patient_timeline_events.event_type is 'Stable code: staff_note, status_changed, …';
comment on column public.patient_timeline_events.body is 'Human-readable line for staff_note; optional for machine events.';

create index if not exists patient_timeline_events_patient_created_idx
  on public.patient_timeline_events (patient_id, created_at desc);

alter table public.patient_timeline_events enable row level security;

drop policy if exists "staff_select_timeline" on public.patient_timeline_events;
create policy "staff_select_timeline"
  on public.patient_timeline_events
  for select
  to authenticated
  using (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
  );

drop policy if exists "staff_insert_timeline" on public.patient_timeline_events;
create policy "staff_insert_timeline"
  on public.patient_timeline_events
  for insert
  to authenticated
  with check (
    exists (select 1 from public.staff_profiles sp where sp.id = auth.uid())
    and actor_user_id = auth.uid()
  );

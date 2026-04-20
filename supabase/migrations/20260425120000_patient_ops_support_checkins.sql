-- First-class operational rows for patient support requests and treatment check-ins.
-- Timeline events stay append-only narrative; workflow state lives here (not mutated on source timeline rows).

create table if not exists public.patient_support_requests (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  source_timeline_event_id uuid not null references public.patient_timeline_events (id) on delete cascade,
  request_kind text not null check (request_kind in ('message', 'callback')),
  status text not null default 'new' check (status in ('new', 'acknowledged', 'call_completed', 'resolved')),
  portal_payload jsonb not null default '{}'::jsonb,
  status_history jsonb not null default '[]'::jsonb,
  last_staff_note text,
  last_action_at timestamptz,
  last_action_by_staff_id uuid references public.staff_profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (source_timeline_event_id)
);

comment on table public.patient_support_requests is 'Operational queue for portal support threads; keyed to originating patient_timeline_events row.';
comment on column public.patient_support_requests.portal_payload is 'Immutable portal snapshot (recipient, timing, etc.); excludes staff workflow fields.';

create index if not exists patient_support_requests_patient_status_idx
  on public.patient_support_requests (patient_id, status, updated_at desc);

create or replace function public.set_patient_support_requests_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_patient_support_requests_updated_at on public.patient_support_requests;
create trigger trg_patient_support_requests_updated_at
  before update on public.patient_support_requests
  for each row
  execute function public.set_patient_support_requests_updated_at();

alter table public.patient_support_requests enable row level security;

drop policy if exists "staff_select_patient_support_requests" on public.patient_support_requests;
create policy "staff_select_patient_support_requests"
  on public.patient_support_requests
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_patient_support_requests" on public.patient_support_requests;
create policy "staff_insert_patient_support_requests"
  on public.patient_support_requests
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_patient_support_requests" on public.patient_support_requests;
create policy "staff_update_patient_support_requests"
  on public.patient_support_requests
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

-- ---------------------------------------------------------------------------
-- Treatment check-ins (structured answers + staff review state)

create table if not exists public.patient_treatment_checkins (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  treatment_item_id uuid not null references public.treatment_items (id) on delete cascade,
  source_timeline_event_id uuid not null references public.patient_timeline_events (id) on delete cascade,
  treatment_key text,
  display_name text,
  checkin jsonb not null default '{}'::jsonb,
  reviewed_at timestamptz,
  reviewed_by_staff_id uuid references public.staff_profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (source_timeline_event_id)
);

comment on table public.patient_treatment_checkins is 'Operational record for a patient_treatment_checkin_submitted timeline event; staff review fields live here.';

create index if not exists patient_treatment_checkins_patient_reviewed_idx
  on public.patient_treatment_checkins (patient_id, reviewed_at desc nulls first);

create index if not exists patient_treatment_checkins_treatment_created_idx
  on public.patient_treatment_checkins (treatment_item_id, created_at desc);

create or replace function public.set_patient_treatment_checkins_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_patient_treatment_checkins_updated_at on public.patient_treatment_checkins;
create trigger trg_patient_treatment_checkins_updated_at
  before update on public.patient_treatment_checkins
  for each row
  execute function public.set_patient_treatment_checkins_updated_at();

alter table public.patient_treatment_checkins enable row level security;

drop policy if exists "staff_select_patient_treatment_checkins" on public.patient_treatment_checkins;
create policy "staff_select_patient_treatment_checkins"
  on public.patient_treatment_checkins
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_patient_treatment_checkins" on public.patient_treatment_checkins;
create policy "staff_insert_patient_treatment_checkins"
  on public.patient_treatment_checkins
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
    and exists (select 1 from public.treatment_items ti where ti.id = treatment_item_id and ti.patient_id = patient_id)
  );

drop policy if exists "staff_update_patient_treatment_checkins" on public.patient_treatment_checkins;
create policy "staff_update_patient_treatment_checkins"
  on public.patient_treatment_checkins
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

-- ---------------------------------------------------------------------------
-- Backfill from existing timeline rows (idempotent)

insert into public.patient_support_requests (
  patient_id,
  source_timeline_event_id,
  request_kind,
  status,
  portal_payload,
  status_history,
  last_staff_note,
  last_action_at,
  last_action_by_staff_id,
  created_at,
  updated_at
)
select
  e.patient_id,
  e.id,
  case when e.event_type = 'patient_callback_requested' then 'callback' else 'message' end,
  case
    when (coalesce(e.payload, '{}'::jsonb)->>'support_status') in ('new', 'acknowledged', 'call_completed', 'resolved')
      then coalesce(e.payload, '{}'::jsonb)->>'support_status'
    else 'new'
  end,
  coalesce(
    coalesce(e.payload, '{}'::jsonb)
      - 'support_status'
      - 'support_status_history'
      - 'support_last_action'
      - 'support_last_action_at'
      - 'support_last_action_by'
      - 'support_last_note',
    '{}'::jsonb
  ),
  case
    when jsonb_typeof(coalesce(e.payload, '{}'::jsonb)->'support_status_history') = 'array'
      then coalesce(e.payload, '{}'::jsonb)->'support_status_history'
    else '[]'::jsonb
  end,
  nullif(trim(coalesce(e.payload, '{}'::jsonb)->>'support_last_note'), ''),
  case
    when nullif(trim(coalesce(e.payload, '{}'::jsonb)->>'support_last_action_at'), '') is null then null
    else (coalesce(e.payload, '{}'::jsonb)->>'support_last_action_at')::timestamptz
  end,
  case
    when nullif(trim(coalesce(e.payload, '{}'::jsonb)->>'support_last_action_by'), '') is null then null
    else (coalesce(e.payload, '{}'::jsonb)->>'support_last_action_by')::uuid
  end,
  e.created_at,
  coalesce(
    case
      when nullif(trim(coalesce(e.payload, '{}'::jsonb)->>'support_last_action_at'), '') is null then null
      else (coalesce(e.payload, '{}'::jsonb)->>'support_last_action_at')::timestamptz
    end,
    e.created_at
  )
from public.patient_timeline_events e
where e.event_type in ('patient_message_submitted', 'patient_callback_requested')
on conflict (source_timeline_event_id) do nothing;

insert into public.patient_treatment_checkins (
  patient_id,
  treatment_item_id,
  source_timeline_event_id,
  treatment_key,
  display_name,
  checkin,
  created_at,
  updated_at
)
select
  e.patient_id,
  coalesce(e.treatment_item_id, (nullif(coalesce(e.payload, '{}'::jsonb)->>'treatment_item_id', ''))::uuid),
  e.id,
  nullif(coalesce(e.payload, '{}'::jsonb)->>'treatment_key', ''),
  nullif(coalesce(e.payload, '{}'::jsonb)->>'display_name', ''),
  case
    when jsonb_typeof(coalesce(e.payload, '{}'::jsonb)->'checkin') = 'object'
      then coalesce(e.payload, '{}'::jsonb)->'checkin'
    else '{}'::jsonb
  end,
  e.created_at,
  e.created_at
from public.patient_timeline_events e
where e.event_type = 'patient_treatment_checkin_submitted'
  and coalesce(e.treatment_item_id, (nullif(coalesce(e.payload, '{}'::jsonb)->>'treatment_item_id', ''))::uuid) is not null
on conflict (source_timeline_event_id) do nothing;

with rev as (
  select distinct on ((payload->>'source_event_id'))
    (payload->>'source_event_id')::uuid as source_event_id,
    coalesce(
      nullif(trim(payload->>'reviewed_at'), '')::timestamptz,
      created_at
    ) as reviewed_at,
    case
      when nullif(trim(payload->>'reviewed_by'), '') is null then null
      else (payload->>'reviewed_by')::uuid
    end as reviewed_by_staff_id
  from public.patient_timeline_events
  where event_type = 'patient_treatment_checkin_reviewed'
    and payload->>'source_event_id' is not null
    and (payload->>'source_event_id')::uuid is not null
  order by (payload->>'source_event_id'), created_at desc
)
update public.patient_treatment_checkins c
set
  reviewed_at = rev.reviewed_at,
  reviewed_by_staff_id = rev.reviewed_by_staff_id,
  updated_at = now()
from rev
where c.source_timeline_event_id = rev.source_event_id;

-- Enforce allowed status transitions at the database layer for care_programs, treatment_items,
-- and refill_requests. Uses existing public.workflow_status_transitions for care/treatment;
-- refill_request_status_transitions mirrors lib/refill/refillRequestTransitions.ts (including
-- reverse edges so staff revert paths after failed side-effects remain valid).

-- ---------------------------------------------------------------------------
-- Refill request transition matrix (forward + reverse for revert safety)
-- ---------------------------------------------------------------------------
create table if not exists public.refill_request_status_transitions (
  id uuid primary key default gen_random_uuid(),
  from_status text not null,
  to_status text not null,
  created_at timestamptz not null default now(),
  unique (from_status, to_status)
);

create index if not exists refill_request_status_transitions_from_to_idx
  on public.refill_request_status_transitions (from_status, to_status);

comment on table public.refill_request_status_transitions is
  'Allowed refill_requests.status moves; kept in sync with REFILL_TRANSITIONS in application code.';

insert into public.refill_request_status_transitions (from_status, to_status) values
  ('requested', 'under_review'),
  ('under_review', 'requested'),
  ('requested', 'approved'),
  ('approved', 'requested'),
  ('requested', 'cancelled'),
  ('cancelled', 'requested'),
  ('under_review', 'approved'),
  ('approved', 'under_review'),
  ('under_review', 'denied'),
  ('denied', 'under_review'),
  ('under_review', 'cancelled'),
  ('cancelled', 'under_review'),
  ('approved', 'fulfilled'),
  ('fulfilled', 'approved'),
  ('approved', 'cancelled'),
  ('cancelled', 'approved')
on conflict do nothing;

alter table public.refill_request_status_transitions enable row level security;

drop policy if exists "staff_select_refill_request_status_transitions" on public.refill_request_status_transitions;
create policy "staff_select_refill_request_status_transitions"
  on public.refill_request_status_transitions
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

-- ---------------------------------------------------------------------------
-- Trigger helpers (SECURITY DEFINER: RLS on transition tables must not block checks)
-- ---------------------------------------------------------------------------
create or replace function public.enforce_care_program_status_transition()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op <> 'UPDATE' then
    return new;
  end if;
  if new.status is not distinct from old.status then
    return new;
  end if;

  if exists (
    select 1
    from public.workflow_status_transitions w
    where w.entity_type = 'care_program'
      and w.from_status = old.status::text
      and w.to_status = new.status::text
  ) then
    return new;
  end if;

  if exists (
    select 1
    from public.workflow_status_transitions w
    where w.entity_type = 'care_program'
      and w.from_status is null
      and w.to_status = new.status::text
  ) then
    return new;
  end if;

  raise exception 'Invalid care_program status transition: % -> %', old.status, new.status
    using errcode = '23514';
end;
$$;

create or replace function public.enforce_treatment_item_status_transition()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op <> 'UPDATE' then
    return new;
  end if;
  if new.status is not distinct from old.status then
    return new;
  end if;

  if exists (
    select 1
    from public.workflow_status_transitions w
    where w.entity_type = 'treatment_item'
      and w.from_status = old.status::text
      and w.to_status = new.status::text
  ) then
    return new;
  end if;

  if exists (
    select 1
    from public.workflow_status_transitions w
    where w.entity_type = 'treatment_item'
      and w.from_status is null
      and w.to_status = new.status::text
  ) then
    return new;
  end if;

  raise exception 'Invalid treatment_item status transition: % -> %', old.status, new.status
    using errcode = '23514';
end;
$$;

create or replace function public.enforce_refill_request_status_transition()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op <> 'UPDATE' then
    return new;
  end if;
  if new.status is not distinct from old.status then
    return new;
  end if;

  if exists (
    select 1
    from public.refill_request_status_transitions r
    where r.from_status = old.status::text
      and r.to_status = new.status::text
  ) then
    return new;
  end if;

  raise exception 'Invalid refill_request status transition: % -> %', old.status, new.status
    using errcode = '23514';
end;
$$;

revoke all on function public.enforce_care_program_status_transition() from public;
revoke all on function public.enforce_treatment_item_status_transition() from public;
revoke all on function public.enforce_refill_request_status_transition() from public;

drop trigger if exists trg_care_programs_status_transition on public.care_programs;
create trigger trg_care_programs_status_transition
  before update of status on public.care_programs
  for each row
  execute function public.enforce_care_program_status_transition();

drop trigger if exists trg_treatment_items_status_transition on public.treatment_items;
create trigger trg_treatment_items_status_transition
  before update of status on public.treatment_items
  for each row
  execute function public.enforce_treatment_item_status_transition();

drop trigger if exists trg_refill_requests_status_transition on public.refill_requests;
create trigger trg_refill_requests_status_transition
  before update of status on public.refill_requests
  for each row
  execute function public.enforce_refill_request_status_transition();

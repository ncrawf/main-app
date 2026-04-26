-- Orders lifecycle v1: first-class lifecycle on treatment_orders (Rx) and kit-fulfillment
-- tracking on lab_orders (Lab Kits). supplement_fulfillment_orders already has a workable
-- shape and is surfaced through projection only (no schema changes here).
--
-- Scope per plan orders-lifecycle-v1:
--   * treatment_orders: enum status, operational columns, order_number, transitions table + trigger
--   * lab_orders: kit fulfillment columns, separate transitions table + trigger
--
-- Charge separation is preserved: treatment_orders rows are created uncharged
-- (amount_paid_cents = 0) at intake and only advance past approved_fulfillment_pending
-- once a Stripe payment succeeds. That wiring lives in application code — this migration
-- only encodes the valid state graph.

-- ---------------------------------------------------------------------------
-- 1) treatment_order_status enum (existing column is text; widen then swap)
-- ---------------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'treatment_order_status') then
    create type public.treatment_order_status as enum (
      'pending_clinician_review',
      'approved_fulfillment_pending',
      'payment_failed',
      'preparing',
      'rx_sent',
      'shipped',
      'fulfilled',
      'exception',
      'refunded',
      'cancelled'
    );
  end if;
end$$;

-- Backfill legacy status values to the new enum domain before the type change.
-- Any pre-existing rows used text values like 'created'; map them to the closest
-- lifecycle node (pending_clinician_review) so the cast succeeds.
update public.treatment_orders
set status = 'pending_clinician_review'
where status is null
   or status not in (
     'pending_clinician_review',
     'approved_fulfillment_pending',
     'payment_failed',
     'preparing',
     'rx_sent',
     'shipped',
     'fulfilled',
     'exception',
     'refunded',
     'cancelled'
   );

alter table public.treatment_orders
  alter column status drop default;

alter table public.treatment_orders
  alter column status type public.treatment_order_status
  using status::public.treatment_order_status;

alter table public.treatment_orders
  alter column status set default 'pending_clinician_review'::public.treatment_order_status;

-- ---------------------------------------------------------------------------
-- 2) Operational columns on treatment_orders
-- ---------------------------------------------------------------------------
alter table public.treatment_orders
  add column if not exists order_number text,
  add column if not exists amount_paid_cents integer not null default 0,
  add column if not exists shipping_snapshot jsonb not null default '{}'::jsonb,
  add column if not exists exception_reason text,
  add column if not exists internal_notes text,
  add column if not exists opened_at timestamptz not null default now(),
  add column if not exists closed_at timestamptz;

comment on column public.treatment_orders.order_number is
  'Human-readable, Shopify-style identifier (e.g. RX-A3F9C2B1). Unique when set.';
comment on column public.treatment_orders.amount_paid_cents is
  'Cumulative successfully-captured amount. Remains 0 until post-approval charge succeeds.';
comment on column public.treatment_orders.shipping_snapshot is
  'Frozen shipping address/contact captured at approval time (independent of patient profile edits).';
comment on column public.treatment_orders.exception_reason is
  'Short machine/staff code describing why the order entered the exception state.';
comment on column public.treatment_orders.internal_notes is
  'Operational note surface for staff (not exposed to patient-facing order views).';

-- ---------------------------------------------------------------------------
-- 3) Order-number generator
-- ---------------------------------------------------------------------------
create or replace function public.generate_treatment_order_number()
returns trigger
language plpgsql
as $$
declare
  candidate text;
  attempts integer := 0;
begin
  if new.order_number is not null and length(trim(new.order_number)) > 0 then
    return new;
  end if;

  loop
    attempts := attempts + 1;
    candidate := 'RX-' || upper(substr(encode(gen_random_bytes(5), 'hex'), 1, 8));
    if not exists (
      select 1 from public.treatment_orders where order_number = candidate
    ) then
      new.order_number := candidate;
      return new;
    end if;
    if attempts > 10 then
      raise exception 'Could not allocate unique treatment_orders.order_number after 10 attempts';
    end if;
  end loop;
end;
$$;

drop trigger if exists trg_treatment_orders_order_number on public.treatment_orders;
create trigger trg_treatment_orders_order_number
  before insert on public.treatment_orders
  for each row
  execute function public.generate_treatment_order_number();

-- Backfill order_number for any existing rows.
update public.treatment_orders
set order_number = 'RX-' || upper(substr(encode(gen_random_bytes(5), 'hex'), 1, 8))
where order_number is null;

create unique index if not exists treatment_orders_order_number_key
  on public.treatment_orders (order_number)
  where order_number is not null;

create index if not exists treatment_orders_status_updated_idx
  on public.treatment_orders (status, updated_at desc);

-- ---------------------------------------------------------------------------
-- 4) Allowed status transitions for treatment_orders
-- ---------------------------------------------------------------------------
create table if not exists public.treatment_order_status_transitions (
  id uuid primary key default gen_random_uuid(),
  from_status public.treatment_order_status not null,
  to_status public.treatment_order_status not null,
  created_at timestamptz not null default now(),
  unique (from_status, to_status)
);

create index if not exists treatment_order_status_transitions_from_to_idx
  on public.treatment_order_status_transitions (from_status, to_status);

comment on table public.treatment_order_status_transitions is
  'Allowed treatment_orders.status moves; kept in sync with TREATMENT_ORDER_TRANSITIONS in application code.';

insert into public.treatment_order_status_transitions (from_status, to_status) values
  -- intake -> clinician decision
  ('pending_clinician_review', 'approved_fulfillment_pending'),
  ('pending_clinician_review', 'cancelled'),
  -- post-approval charge outcomes
  ('approved_fulfillment_pending', 'preparing'),
  ('approved_fulfillment_pending', 'payment_failed'),
  ('approved_fulfillment_pending', 'cancelled'),
  ('payment_failed', 'preparing'),
  ('payment_failed', 'cancelled'),
  ('payment_failed', 'approved_fulfillment_pending'),
  -- fulfillment lane
  ('preparing', 'rx_sent'),
  ('preparing', 'exception'),
  ('preparing', 'cancelled'),
  ('rx_sent', 'shipped'),
  ('rx_sent', 'exception'),
  ('rx_sent', 'cancelled'),
  ('shipped', 'fulfilled'),
  ('shipped', 'exception'),
  ('fulfilled', 'refunded'),
  -- exception recovery + terminal refund
  ('exception', 'preparing'),
  ('exception', 'rx_sent'),
  ('exception', 'shipped'),
  ('exception', 'cancelled'),
  ('exception', 'refunded')
on conflict do nothing;

alter table public.treatment_order_status_transitions enable row level security;

drop policy if exists "staff_select_treatment_order_status_transitions"
  on public.treatment_order_status_transitions;
create policy "staff_select_treatment_order_status_transitions"
  on public.treatment_order_status_transitions
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

-- Trigger that enforces the transition graph (mirrors refill_requests pattern).
create or replace function public.enforce_treatment_order_status_transition()
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
    from public.treatment_order_status_transitions t
    where t.from_status = old.status
      and t.to_status = new.status
  ) then
    -- Close out the order when it reaches a terminal node.
    if new.status in ('fulfilled', 'cancelled', 'refunded')
       and new.closed_at is null then
      new.closed_at := now();
    end if;
    return new;
  end if;

  raise exception 'Invalid treatment_order status transition: % -> %', old.status, new.status
    using errcode = '23514';
end;
$$;

revoke all on function public.enforce_treatment_order_status_transition() from public;

drop trigger if exists trg_treatment_orders_status_transition on public.treatment_orders;
create trigger trg_treatment_orders_status_transition
  before update of status on public.treatment_orders
  for each row
  execute function public.enforce_treatment_order_status_transition();

-- ---------------------------------------------------------------------------
-- 5) lab_orders: kit fulfillment tracking (Lab Kits tab, shipment only)
-- ---------------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'lab_kit_fulfillment_status') then
    create type public.lab_kit_fulfillment_status as enum (
      'not_shipping_kit',
      'kit_queued',
      'kit_shipped',
      'kit_delivered',
      'kit_returned',
      'kit_cancelled'
    );
  end if;
end$$;

alter table public.lab_orders
  add column if not exists kit_fulfillment_status public.lab_kit_fulfillment_status
    not null default 'not_shipping_kit',
  add column if not exists kit_carrier text,
  add column if not exists kit_tracking_number text,
  add column if not exists kit_tracking_url text,
  add column if not exists kit_shipped_at timestamptz,
  add column if not exists kit_delivered_at timestamptz,
  add column if not exists kit_fulfillment_notes text;

comment on column public.lab_orders.kit_fulfillment_status is
  'Kit shipping-only state. Distinct from lab requisition / results lifecycle.';
comment on column public.lab_orders.kit_tracking_number is
  'Carrier tracking number for at-home lab kits (Lab Kits tab).';

create index if not exists lab_orders_kit_fulfillment_idx
  on public.lab_orders (kit_fulfillment_status, updated_at desc);

create table if not exists public.lab_kit_fulfillment_transitions (
  id uuid primary key default gen_random_uuid(),
  from_status public.lab_kit_fulfillment_status not null,
  to_status public.lab_kit_fulfillment_status not null,
  created_at timestamptz not null default now(),
  unique (from_status, to_status)
);

create index if not exists lab_kit_fulfillment_transitions_from_to_idx
  on public.lab_kit_fulfillment_transitions (from_status, to_status);

comment on table public.lab_kit_fulfillment_transitions is
  'Allowed lab_orders.kit_fulfillment_status moves; shipping-only, not lab results.';

insert into public.lab_kit_fulfillment_transitions (from_status, to_status) values
  ('not_shipping_kit', 'kit_queued'),
  ('kit_queued', 'kit_shipped'),
  ('kit_queued', 'kit_cancelled'),
  ('kit_shipped', 'kit_delivered'),
  ('kit_shipped', 'kit_returned'),
  ('kit_shipped', 'kit_cancelled'),
  ('kit_delivered', 'kit_returned'),
  ('kit_returned', 'kit_queued'),
  ('kit_cancelled', 'kit_queued')
on conflict do nothing;

alter table public.lab_kit_fulfillment_transitions enable row level security;

drop policy if exists "staff_select_lab_kit_fulfillment_transitions"
  on public.lab_kit_fulfillment_transitions;
create policy "staff_select_lab_kit_fulfillment_transitions"
  on public.lab_kit_fulfillment_transitions
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

create or replace function public.enforce_lab_kit_fulfillment_transition()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op <> 'UPDATE' then
    return new;
  end if;
  if new.kit_fulfillment_status is not distinct from old.kit_fulfillment_status then
    return new;
  end if;

  if exists (
    select 1
    from public.lab_kit_fulfillment_transitions t
    where t.from_status = old.kit_fulfillment_status
      and t.to_status = new.kit_fulfillment_status
  ) then
    -- Stamp shipped_at / delivered_at if unset.
    if new.kit_fulfillment_status = 'kit_shipped' and new.kit_shipped_at is null then
      new.kit_shipped_at := now();
    end if;
    if new.kit_fulfillment_status = 'kit_delivered' and new.kit_delivered_at is null then
      new.kit_delivered_at := now();
    end if;
    return new;
  end if;

  raise exception 'Invalid lab_orders.kit_fulfillment_status transition: % -> %',
    old.kit_fulfillment_status, new.kit_fulfillment_status
    using errcode = '23514';
end;
$$;

revoke all on function public.enforce_lab_kit_fulfillment_transition() from public;

drop trigger if exists trg_lab_orders_kit_fulfillment_transition on public.lab_orders;
create trigger trg_lab_orders_kit_fulfillment_transition
  before update of kit_fulfillment_status on public.lab_orders
  for each row
  execute function public.enforce_lab_kit_fulfillment_transition();

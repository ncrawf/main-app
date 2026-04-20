-- Checkout routing tables for mixed carts (consult + supplements).
-- Purpose:
-- 1) Persist checkout item intent by Stripe session id.
-- 2) Queue non-Rx supplement fulfillment independent of prescriber actions.

create table if not exists public.stripe_checkout_manifests (
  id uuid primary key default gen_random_uuid(),
  stripe_checkout_session_id text not null unique,
  patient_id uuid not null references public.patients (id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists stripe_checkout_manifests_patient_idx
  on public.stripe_checkout_manifests (patient_id, created_at desc);

comment on table public.stripe_checkout_manifests is
  'Itemized checkout intent keyed by Stripe checkout session, used by webhook routing.';

create table if not exists public.supplement_fulfillment_orders (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  stripe_checkout_session_id text not null unique,
  status text not null default 'queued',
  shipping_snapshot jsonb not null default '{}'::jsonb,
  items jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists supplement_fulfillment_orders_patient_idx
  on public.supplement_fulfillment_orders (patient_id, created_at desc);

create index if not exists supplement_fulfillment_orders_status_idx
  on public.supplement_fulfillment_orders (status, updated_at desc);

comment on table public.supplement_fulfillment_orders is
  'Drop-ship / vendor queue for supplement purchases (non-prescriber fulfillment).';

alter table public.stripe_checkout_manifests enable row level security;
alter table public.supplement_fulfillment_orders enable row level security;

drop policy if exists "staff_select_stripe_checkout_manifests" on public.stripe_checkout_manifests;
create policy "staff_select_stripe_checkout_manifests"
  on public.stripe_checkout_manifests
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_stripe_checkout_manifests" on public.stripe_checkout_manifests;
create policy "staff_insert_stripe_checkout_manifests"
  on public.stripe_checkout_manifests
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_stripe_checkout_manifests" on public.stripe_checkout_manifests;
create policy "staff_update_stripe_checkout_manifests"
  on public.stripe_checkout_manifests
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_supplement_fulfillment_orders" on public.supplement_fulfillment_orders;
create policy "staff_select_supplement_fulfillment_orders"
  on public.supplement_fulfillment_orders
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_supplement_fulfillment_orders" on public.supplement_fulfillment_orders;
create policy "staff_insert_supplement_fulfillment_orders"
  on public.supplement_fulfillment_orders
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_supplement_fulfillment_orders" on public.supplement_fulfillment_orders;
create policy "staff_update_supplement_fulfillment_orders"
  on public.supplement_fulfillment_orders
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

-- Org-wide Rx / treatment presets for faster internal prescribing (catalog shortcuts).

create table if not exists public.org_rx_presets (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  label text not null,
  treatment_key text not null,
  dosage jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists org_rx_presets_treatment_key_idx on public.org_rx_presets (treatment_key);

comment on table public.org_rx_presets is
  'Reusable treatment + dosage templates; apply from internal flows (catalog, visit Rx).';

alter table public.org_rx_presets enable row level security;

drop policy if exists "staff_select_org_rx_presets" on public.org_rx_presets;
create policy "staff_select_org_rx_presets"
  on public.org_rx_presets
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_org_rx_presets" on public.org_rx_presets;
create policy "staff_insert_org_rx_presets"
  on public.org_rx_presets
  for insert
  to authenticated
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_update_org_rx_presets" on public.org_rx_presets;
create policy "staff_update_org_rx_presets"
  on public.org_rx_presets
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_delete_org_rx_presets" on public.org_rx_presets;
create policy "staff_delete_org_rx_presets"
  on public.org_rx_presets
  for delete
  to authenticated
  using (public.is_staff_user(auth.uid()));

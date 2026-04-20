-- Lab requisition orders (staff-generated PDF artifacts published to patient portal).

create table if not exists public.lab_orders (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  status text not null default 'draft',
  order_date date not null default current_date,
  ordering_provider_name text not null,
  ordering_provider_npi text,
  diagnosis_hint text,
  instructions text,
  tests jsonb not null default '[]'::jsonb,
  pdf_artifact jsonb,
  published_to_patient_at timestamptz,
  created_by_staff_id uuid references public.staff_profiles (id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists lab_orders_patient_created_idx
  on public.lab_orders (patient_id, created_at desc);

create index if not exists lab_orders_status_updated_idx
  on public.lab_orders (status, updated_at desc);

comment on table public.lab_orders is
  'Staff-authored lab requisitions and portal-published artifacts for patient care workflows.';

alter table public.lab_orders enable row level security;

drop policy if exists "staff_select_lab_orders" on public.lab_orders;
create policy "staff_select_lab_orders"
  on public.lab_orders
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_lab_orders" on public.lab_orders;
create policy "staff_insert_lab_orders"
  on public.lab_orders
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_lab_orders" on public.lab_orders;
create policy "staff_update_lab_orders"
  on public.lab_orders
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('lab_order_artifacts', 'lab_order_artifacts', false, 10485760, array['application/pdf']::text[])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "staff_select_lab_order_artifacts" on storage.objects;
create policy "staff_select_lab_order_artifacts"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'lab_order_artifacts'
    and public.is_staff_user(auth.uid())
  );

drop policy if exists "staff_insert_lab_order_artifacts" on storage.objects;
create policy "staff_insert_lab_order_artifacts"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'lab_order_artifacts'
    and public.is_staff_user(auth.uid())
  );

drop policy if exists "staff_update_lab_order_artifacts" on storage.objects;
create policy "staff_update_lab_order_artifacts"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'lab_order_artifacts'
    and public.is_staff_user(auth.uid())
  )
  with check (
    bucket_id = 'lab_order_artifacts'
    and public.is_staff_user(auth.uid())
  );

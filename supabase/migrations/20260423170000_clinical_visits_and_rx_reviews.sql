-- Clinical documentation: visit-centric progress notes with Rx safety reviews.

create table if not exists public.clinical_visits (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  visit_type text not null default 'async_intake_review',
  visit_at timestamptz not null default now(),
  status text not null default 'completed',
  diagnosis_codes jsonb not null default '[]'::jsonb,
  assessment text,
  plan text,
  counseling text,
  follow_up_plan text,
  note_text text not null,
  metadata jsonb not null default '{}'::jsonb,
  signed_by_staff_id uuid not null references public.staff_profiles (id) on delete restrict,
  signed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists clinical_visits_patient_idx
  on public.clinical_visits (patient_id, visit_at desc);

create index if not exists clinical_visits_signed_by_idx
  on public.clinical_visits (signed_by_staff_id, signed_at desc);

comment on table public.clinical_visits is
  'Visit-centric clinical documentation. note_text is immutable chart narrative for compliance/audit.';

create table if not exists public.clinical_visit_rx_reviews (
  id uuid primary key default gen_random_uuid(),
  clinical_visit_id uuid not null references public.clinical_visits (id) on delete cascade,
  patient_id uuid not null references public.patients (id) on delete cascade,
  treatment_item_id uuid not null references public.treatment_items (id) on delete cascade,
  indication text,
  risk_review text,
  monitoring_plan text,
  decision text not null default 'approved',
  metadata jsonb not null default '{}'::jsonb,
  created_by_staff_id uuid not null references public.staff_profiles (id) on delete restrict,
  created_at timestamptz not null default now()
);

create index if not exists clinical_visit_rx_reviews_visit_idx
  on public.clinical_visit_rx_reviews (clinical_visit_id, created_at desc);

create index if not exists clinical_visit_rx_reviews_patient_idx
  on public.clinical_visit_rx_reviews (patient_id, created_at desc);

comment on table public.clinical_visit_rx_reviews is
  'Medication-specific safety addenda linked to a clinical visit note.';

alter table public.clinical_visits enable row level security;
alter table public.clinical_visit_rx_reviews enable row level security;

drop policy if exists "staff_select_clinical_visits" on public.clinical_visits;
create policy "staff_select_clinical_visits"
  on public.clinical_visits
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_clinical_visits" on public.clinical_visits;
create policy "staff_insert_clinical_visits"
  on public.clinical_visits
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_clinical_visits" on public.clinical_visits;
create policy "staff_update_clinical_visits"
  on public.clinical_visits
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_clinical_visit_rx_reviews" on public.clinical_visit_rx_reviews;
create policy "staff_select_clinical_visit_rx_reviews"
  on public.clinical_visit_rx_reviews
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_clinical_visit_rx_reviews" on public.clinical_visit_rx_reviews;
create policy "staff_insert_clinical_visit_rx_reviews"
  on public.clinical_visit_rx_reviews
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
    and exists (
      select 1 from public.treatment_items ti
      where ti.id = treatment_item_id and ti.patient_id = patient_id
    )
  );

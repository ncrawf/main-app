-- HIPAA-first chart AI review artifacts.
-- Stores structured AI draft outputs + normalized lab observations for provider review.

create table if not exists public.patient_chart_ai_reviews (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  trigger_event_type text not null,
  trigger_ref text,
  status text not null default 'draft' check (status in ('draft', 'reviewed_accepted', 'reviewed_rejected', 'superseded')),
  model_provider text not null default 'internal',
  model_name text not null default 'heuristic-v0',
  input_snapshot jsonb not null default '{}'::jsonb,
  output_summary text not null,
  output_payload jsonb not null default '{}'::jsonb,
  recommendation_draft text,
  reviewed_by_staff_id uuid references public.staff_profiles (id) on delete set null,
  reviewed_at timestamptz,
  review_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.patient_chart_ai_reviews is 'AI-generated chart review drafts with clinician review/signoff lifecycle.';
comment on column public.patient_chart_ai_reviews.input_snapshot is 'Context hash + redacted structured context used to produce this draft.';
comment on column public.patient_chart_ai_reviews.output_payload is 'Structured machine output: findings, flags, evidence pointers, extraction details.';

create index if not exists patient_chart_ai_reviews_patient_created_idx
  on public.patient_chart_ai_reviews (patient_id, created_at desc);
create index if not exists patient_chart_ai_reviews_status_idx
  on public.patient_chart_ai_reviews (status, created_at desc);

create or replace function public.set_patient_chart_ai_reviews_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_patient_chart_ai_reviews_updated_at on public.patient_chart_ai_reviews;
create trigger trg_patient_chart_ai_reviews_updated_at
  before update on public.patient_chart_ai_reviews
  for each row
  execute function public.set_patient_chart_ai_reviews_updated_at();

create table if not exists public.patient_lab_observations (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  source_review_id uuid references public.patient_chart_ai_reviews (id) on delete set null,
  source_submission_id uuid references public.form_submissions (id) on delete set null,
  source_attachment_path text,
  source_dedupe_key text,
  test_code text,
  test_name text not null,
  observed_value text,
  value_numeric numeric,
  unit text,
  reference_range text,
  observed_at date,
  abnormal_flag text not null default 'unknown' check (abnormal_flag in ('low', 'high', 'critical', 'normal', 'unknown')),
  confidence numeric check (confidence is null or (confidence >= 0 and confidence <= 1)),
  metadata jsonb not null default '{}'::jsonb,
  extracted_at timestamptz not null default now()
);

comment on table public.patient_lab_observations is 'Normalized per-analyte observations extracted from uploads and intake context.';

create unique index if not exists patient_lab_observations_source_dedupe_idx
  on public.patient_lab_observations (source_dedupe_key)
  where source_dedupe_key is not null;

create index if not exists patient_lab_observations_patient_observed_idx
  on public.patient_lab_observations (patient_id, observed_at desc nulls last, extracted_at desc);

create table if not exists public.patient_diagnostic_reports (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  source_review_id uuid references public.patient_chart_ai_reviews (id) on delete set null,
  source_submission_id uuid references public.form_submissions (id) on delete set null,
  source_attachment_path text,
  source_dedupe_key text,
  diagnostic_kind text not null default 'other' check (diagnostic_kind in ('lab', 'imaging', 'pathology', 'infectious', 'other')),
  modality text,
  title text not null,
  body_site text,
  performed_at date,
  status text not null default 'unknown' check (status in ('preliminary', 'final', 'corrected', 'unknown')),
  result_text text,
  impression_text text,
  confidence numeric check (confidence is null or (confidence >= 0 and confidence <= 1)),
  metadata jsonb not null default '{}'::jsonb,
  extracted_at timestamptz not null default now()
);

comment on table public.patient_diagnostic_reports is 'Structured report-level diagnostic artifacts (imaging, infectious tests, pathology, and non-numeric diagnostics).';

create unique index if not exists patient_diagnostic_reports_source_dedupe_idx
  on public.patient_diagnostic_reports (source_dedupe_key)
  where source_dedupe_key is not null;

create index if not exists patient_diagnostic_reports_patient_performed_idx
  on public.patient_diagnostic_reports (patient_id, performed_at desc nulls last, extracted_at desc);

alter table public.patient_chart_ai_reviews enable row level security;
alter table public.patient_lab_observations enable row level security;
alter table public.patient_diagnostic_reports enable row level security;

drop policy if exists "staff_select_chart_ai_reviews" on public.patient_chart_ai_reviews;
create policy "staff_select_chart_ai_reviews"
  on public.patient_chart_ai_reviews
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_write_chart_ai_reviews" on public.patient_chart_ai_reviews;
create policy "staff_write_chart_ai_reviews"
  on public.patient_chart_ai_reviews
  for all
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_lab_observations" on public.patient_lab_observations;
create policy "staff_select_lab_observations"
  on public.patient_lab_observations
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_write_lab_observations" on public.patient_lab_observations;
create policy "staff_write_lab_observations"
  on public.patient_lab_observations
  for all
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_diagnostic_reports" on public.patient_diagnostic_reports;
create policy "staff_select_diagnostic_reports"
  on public.patient_diagnostic_reports
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_write_diagnostic_reports" on public.patient_diagnostic_reports;
create policy "staff_write_diagnostic_reports"
  on public.patient_diagnostic_reports
  for all
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

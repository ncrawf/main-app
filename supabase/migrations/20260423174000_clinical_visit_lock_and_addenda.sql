-- Lock signed clinical notes after PDF publish; use addenda for post-signature updates.

create table if not exists public.clinical_visit_addenda (
  id uuid primary key default gen_random_uuid(),
  clinical_visit_id uuid not null references public.clinical_visits (id) on delete cascade,
  patient_id uuid not null references public.patients (id) on delete cascade,
  addendum_text text not null,
  created_by_staff_id uuid not null references public.staff_profiles (id) on delete restrict,
  created_at timestamptz not null default now()
);

create index if not exists clinical_visit_addenda_visit_idx
  on public.clinical_visit_addenda (clinical_visit_id, created_at desc);

create index if not exists clinical_visit_addenda_patient_idx
  on public.clinical_visit_addenda (patient_id, created_at desc);

comment on table public.clinical_visit_addenda is
  'Post-signature amendments to locked clinical visit notes.';

alter table public.clinical_visit_addenda enable row level security;

drop policy if exists "staff_select_clinical_visit_addenda" on public.clinical_visit_addenda;
create policy "staff_select_clinical_visit_addenda"
  on public.clinical_visit_addenda
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_clinical_visit_addenda" on public.clinical_visit_addenda;
create policy "staff_insert_clinical_visit_addenda"
  on public.clinical_visit_addenda
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
    and exists (
      select 1 from public.clinical_visits cv
      where cv.id = clinical_visit_id and cv.patient_id = patient_id
    )
  );

create or replace function public.prevent_locked_clinical_visit_content_update()
returns trigger
language plpgsql
as $$
begin
  if old.status = 'locked' then
    if new.note_text is distinct from old.note_text
      or new.assessment is distinct from old.assessment
      or new.plan is distinct from old.plan
      or new.counseling is distinct from old.counseling
      or new.follow_up_plan is distinct from old.follow_up_plan
      or new.diagnosis_codes is distinct from old.diagnosis_codes
      or new.visit_type is distinct from old.visit_type
      or new.visit_at is distinct from old.visit_at
      or new.signed_by_staff_id is distinct from old.signed_by_staff_id
      or new.signed_at is distinct from old.signed_at
    then
      raise exception 'clinical_visits content is locked; use clinical_visit_addenda for amendments';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_prevent_locked_clinical_visit_content_update on public.clinical_visits;
create trigger trg_prevent_locked_clinical_visit_content_update
  before update on public.clinical_visits
  for each row
  execute function public.prevent_locked_clinical_visit_content_update();

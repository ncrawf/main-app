-- Add signed PDF artifacts for clinical visit notes (staff-generated, optional portal publish).

alter table public.clinical_visits
  add column if not exists pdf_artifact jsonb,
  add column if not exists published_to_patient_at timestamptz;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('clinical_note_artifacts', 'clinical_note_artifacts', false, 10485760, array['application/pdf']::text[])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "staff_select_clinical_note_artifacts" on storage.objects;
create policy "staff_select_clinical_note_artifacts"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'clinical_note_artifacts'
    and public.is_staff_user(auth.uid())
  );

drop policy if exists "staff_insert_clinical_note_artifacts" on storage.objects;
create policy "staff_insert_clinical_note_artifacts"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'clinical_note_artifacts'
    and public.is_staff_user(auth.uid())
  );

drop policy if exists "staff_update_clinical_note_artifacts" on storage.objects;
create policy "staff_update_clinical_note_artifacts"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'clinical_note_artifacts'
    and public.is_staff_user(auth.uid())
  )
  with check (
    bucket_id = 'clinical_note_artifacts'
    and public.is_staff_user(auth.uid())
  );

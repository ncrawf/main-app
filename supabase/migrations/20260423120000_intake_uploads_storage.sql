-- Storage bucket for patient intake uploads (labs/docs/screenshots).
-- Uploads are written by trusted server routes (service role), staff can read via signed URLs.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'intake_uploads',
  'intake_uploads',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']::text[]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "staff_select_intake_uploads" on storage.objects;
create policy "staff_select_intake_uploads"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'intake_uploads'
    and public.is_staff_user(auth.uid())
  );


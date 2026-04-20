-- Staff-only storage bucket for generated Rx PDFs (503A fax/chart artifacts).
-- Uses existing public.is_staff_user(auth.uid()) helper.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('rx_artifacts', 'rx_artifacts', false, 10485760, array['application/pdf']::text[])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "staff_select_rx_artifacts" on storage.objects;
create policy "staff_select_rx_artifacts"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'rx_artifacts'
    and public.is_staff_user(auth.uid())
  );

drop policy if exists "staff_insert_rx_artifacts" on storage.objects;
create policy "staff_insert_rx_artifacts"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'rx_artifacts'
    and public.is_staff_user(auth.uid())
  );

drop policy if exists "staff_update_rx_artifacts" on storage.objects;
create policy "staff_update_rx_artifacts"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'rx_artifacts'
    and public.is_staff_user(auth.uid())
  )
  with check (
    bucket_id = 'rx_artifacts'
    and public.is_staff_user(auth.uid())
  );

-- Staff RLS for refill_requests (patient-facing auth not wired yet).

drop policy if exists "staff_select_refill_requests" on public.refill_requests;
create policy "staff_select_refill_requests"
  on public.refill_requests
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_refill_requests" on public.refill_requests;
create policy "staff_insert_refill_requests"
  on public.refill_requests
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
    and exists (select 1 from public.treatment_items ti where ti.id = treatment_item_id and ti.patient_id = patient_id)
  );

drop policy if exists "staff_update_refill_requests" on public.refill_requests;
create policy "staff_update_refill_requests"
  on public.refill_requests
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

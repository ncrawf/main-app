-- Staff may insert/update patient_states for case management (requires public.is_staff_user from 20260420140000).

drop policy if exists "staff_insert_patient_states" on public.patient_states;
create policy "staff_insert_patient_states"
  on public.patient_states
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_patient_states" on public.patient_states;
create policy "staff_update_patient_states"
  on public.patient_states
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

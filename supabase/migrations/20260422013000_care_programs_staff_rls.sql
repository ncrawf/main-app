-- Staff RLS policies for new care-model tables.
-- Requires: 20260422010000_care_programs_treatment_items_v1.sql
-- Uses public.is_staff_user(uuid) from 20260420140000_fix_staff_profiles_rls_recursion.sql

alter table public.care_programs enable row level security;
alter table public.treatment_items enable row level security;
alter table public.treatment_orders enable row level security;
alter table public.workflow_status_transitions enable row level security;

-- Read access for internal staff
drop policy if exists "staff_select_care_programs" on public.care_programs;
create policy "staff_select_care_programs"
  on public.care_programs
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_treatment_items" on public.treatment_items;
create policy "staff_select_treatment_items"
  on public.treatment_items
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_treatment_orders" on public.treatment_orders;
create policy "staff_select_treatment_orders"
  on public.treatment_orders
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_select_workflow_status_transitions" on public.workflow_status_transitions;
create policy "staff_select_workflow_status_transitions"
  on public.workflow_status_transitions
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

-- Write access for internal staff actions (dual-write bridge currently uses this)
drop policy if exists "staff_insert_care_programs" on public.care_programs;
create policy "staff_insert_care_programs"
  on public.care_programs
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_care_programs" on public.care_programs;
create policy "staff_update_care_programs"
  on public.care_programs
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_treatment_items" on public.treatment_items;
create policy "staff_insert_treatment_items"
  on public.treatment_items
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
    and exists (select 1 from public.care_programs cp where cp.id = care_program_id)
  );

drop policy if exists "staff_update_treatment_items" on public.treatment_items;
create policy "staff_update_treatment_items"
  on public.treatment_items
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "staff_insert_treatment_orders" on public.treatment_orders;
create policy "staff_insert_treatment_orders"
  on public.treatment_orders
  for insert
  to authenticated
  with check (
    public.is_staff_user(auth.uid())
    and exists (select 1 from public.patients p where p.id = patient_id)
  );

drop policy if exists "staff_update_treatment_orders" on public.treatment_orders;
create policy "staff_update_treatment_orders"
  on public.treatment_orders
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));


-- Fix staff_profiles RLS recursion introduced by admin-write policy that queried
-- staff_profiles directly in its USING/WITH CHECK clauses.
--
-- Use SECURITY DEFINER role-check helper to avoid recursive policy evaluation.

create or replace function public.is_staff_admin(uid uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.staff_profiles
    where id = uid
      and role in ('ops_admin', 'super_admin')
  );
$$;

drop policy if exists "staff_directory_read" on public.staff_profiles;
create policy "staff_directory_read"
  on public.staff_profiles
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

drop policy if exists "staff_directory_admin_write" on public.staff_profiles;
create policy "staff_directory_admin_write"
  on public.staff_profiles
  for all
  to authenticated
  using (public.is_staff_admin(auth.uid()))
  with check (public.is_staff_admin(auth.uid()));

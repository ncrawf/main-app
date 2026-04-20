-- Fix infinite recursion on staff_profiles SELECT policy: the old policy referenced
-- staff_profiles inside a subquery, which re-triggered RLS. Use SECURITY DEFINER helper.

create or replace function public.is_staff_user(uid uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (select 1 from public.staff_profiles where id = uid);
$$;

comment on function public.is_staff_user(uuid) is 'RLS helper: staff check without recursive policy (bypasses RLS on staff_profiles).';

grant execute on function public.is_staff_user(uuid) to authenticated;

drop policy if exists "staff_directory_read" on public.staff_profiles;
create policy "staff_directory_read"
  on public.staff_profiles
  for select
  to authenticated
  using (public.is_staff_user(auth.uid()));

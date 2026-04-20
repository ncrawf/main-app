alter table public.staff_profiles
  add column if not exists first_name text,
  add column if not exists last_name text,
  add column if not exists credentials text,
  add column if not exists specialty text,
  add column if not exists board_certifications text[] not null default '{}',
  add column if not exists years_in_practice int,
  add column if not exists npi text,
  add column if not exists dea_number text,
  add column if not exists state_licenses jsonb not null default '[]'::jsonb,
  add column if not exists prescription_licenses jsonb not null default '[]'::jsonb;

comment on column public.staff_profiles.first_name is 'Legal/provider first name for signatures.';
comment on column public.staff_profiles.last_name is 'Legal/provider last name for signatures.';
comment on column public.staff_profiles.credentials is 'Provider credentials, e.g. MD, DO, NP.';
comment on column public.staff_profiles.specialty is 'Clinical specialty (free text).';
comment on column public.staff_profiles.board_certifications is 'Board certification labels (text list).';
comment on column public.staff_profiles.years_in_practice is 'Years in practice.';
comment on column public.staff_profiles.npi is '10-digit NPI for provider signatures.';
comment on column public.staff_profiles.dea_number is 'DEA identifier (optional).';
comment on column public.staff_profiles.state_licenses is 'Array of {state, license_number, expires_on}.';
comment on column public.staff_profiles.prescription_licenses is 'Array of {state, license_number, expires_on, type}.';

drop policy if exists "staff_directory_admin_write" on public.staff_profiles;
create policy "staff_directory_admin_write"
  on public.staff_profiles
  for all
  to authenticated
  using (
    exists (
      select 1 from public.staff_profiles me
      where me.id = auth.uid() and me.role in ('ops_admin', 'super_admin')
    )
  )
  with check (
    exists (
      select 1 from public.staff_profiles me
      where me.id = auth.uid() and me.role in ('ops_admin', 'super_admin')
    )
  );

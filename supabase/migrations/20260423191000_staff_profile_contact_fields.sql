alter table public.staff_profiles
  add column if not exists work_email text,
  add column if not exists phone_number text;

comment on column public.staff_profiles.work_email is 'Operational contact email for staff/provider directory and signatures.';
comment on column public.staff_profiles.phone_number is 'Operational contact phone number for staff/provider directory.';

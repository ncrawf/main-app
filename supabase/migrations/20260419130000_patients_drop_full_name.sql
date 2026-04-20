-- Single canonical name model: first_name + last_name only (no concatenated full_name column).
alter table public.patients
  drop column if exists full_name;

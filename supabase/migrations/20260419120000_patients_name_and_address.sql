-- Canonical name split + mailing address on patients (Stripe / shipping / ops)
alter table public.patients
  add column if not exists first_name text,
  add column if not exists last_name text,
  add column if not exists address_line1 text,
  add column if not exists address_line2 text,
  add column if not exists city text,
  add column if not exists state text,
  add column if not exists postal_code text;

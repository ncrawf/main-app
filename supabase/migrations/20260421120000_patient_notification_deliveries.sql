-- Idempotent outbound notifications (email/SMS) per logical dedupe key.
-- Written by service role from lib/workflows/onPatientWorkflowEvent.ts

create table if not exists public.patient_notification_deliveries (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  channel text not null check (channel in ('email', 'sms')),
  dedupe_key text not null,
  template_key text not null,
  provider_message_id text,
  created_at timestamptz not null default now(),
  unique (dedupe_key, channel)
);

create index if not exists patient_notification_deliveries_patient_idx
  on public.patient_notification_deliveries (patient_id, created_at desc);

comment on table public.patient_notification_deliveries is
  'One row per successful outbound notification; dedupe_key prevents duplicate sends on webhook retries.';

alter table public.patient_notification_deliveries enable row level security;

-- In-app dashboard alerts: patient-dismissed keys (DoorDash-style cards / updates feed).
-- Written only after patient-portal session verification (service role / admin client).

create table if not exists public.patient_dashboard_alert_dismissals (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  alert_key text not null,
  dismissed_at timestamptz not null default now(),
  unique (patient_id, alert_key)
);

create index if not exists patient_dashboard_alert_dismissals_patient_idx
  on public.patient_dashboard_alert_dismissals (patient_id, dismissed_at desc);

comment on table public.patient_dashboard_alert_dismissals is
  'Patient dismissed a dashboard alert card; alert_key is stable per logical item (see buildPatientDashboardAlerts).';

alter table public.patient_dashboard_alert_dismissals enable row level security;

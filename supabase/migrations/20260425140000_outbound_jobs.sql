-- Durable outbound work (email/SMS) processed by cron + service role — keeps HTTP paths fast.

create table if not exists public.outbound_jobs (
  id uuid primary key default gen_random_uuid(),
  job_type text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending', 'processing', 'completed', 'dead')),
  attempts int not null default 0,
  max_attempts int not null default 12,
  run_after timestamptz not null default now(),
  locked_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.outbound_jobs is 'Queued outbound notifications and similar side effects; processed by /api/cron/outbound-jobs using service role.';

create index if not exists outbound_jobs_pending_run_idx
  on public.outbound_jobs (status, run_after, created_at)
  where status = 'pending';

create or replace function public.set_outbound_jobs_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_outbound_jobs_updated_at on public.outbound_jobs;
create trigger trg_outbound_jobs_updated_at
  before update on public.outbound_jobs
  for each row
  execute function public.set_outbound_jobs_updated_at();

alter table public.outbound_jobs enable row level security;

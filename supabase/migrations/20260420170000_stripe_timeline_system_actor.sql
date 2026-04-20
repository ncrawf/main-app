-- System-generated timeline rows (e.g. Stripe) have no staff actor.
alter table public.patient_timeline_events
  alter column actor_user_id drop not null;

comment on column public.patient_timeline_events.actor_user_id is 'Staff profile id; null for system/integration events (e.g. Stripe).';

-- Idempotent Stripe webhook handling (service role bypasses RLS).
create table if not exists public.stripe_webhook_events (
  stripe_event_id text primary key,
  event_type text not null,
  received_at timestamptz not null default now()
);

create index if not exists stripe_webhook_events_received_idx on public.stripe_webhook_events (received_at desc);

alter table public.stripe_webhook_events enable row level security;

-- Allow rolling a treatment back to refill_due after accidental refill_pending (e.g. failed downstream insert).

insert into public.workflow_status_transitions (entity_type, from_status, to_status) values
  ('treatment_item', 'refill_pending', 'refill_due')
on conflict do nothing;

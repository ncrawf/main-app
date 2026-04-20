-- Allow staff to discontinue any treatment_item status -> stopped (e.g. dose change = new row, old row stopped).
-- Exact transitions (e.g. active -> stopped) remain; this wildcard covers refill_pending, pending_approval, etc.

insert into public.workflow_status_transitions (entity_type, from_status, to_status) values
  ('treatment_item', null, 'stopped')
on conflict do nothing;

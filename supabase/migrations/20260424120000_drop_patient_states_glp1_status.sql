-- Remove deprecated legacy status field now that workflow state is derived from care tables.
-- Keep patient_states table for assignment-only semantics (assigned_to, timestamps).

drop index if exists public.patient_states_glp1_status_idx;

alter table public.patient_states
  drop column if exists glp1_status;

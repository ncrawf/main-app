# Care Programs V1 (next architecture step)

This is the next structural move after intake + payment + timeline + notifications.

Goal: move from one patient-level `glp1_status` into a multi-track model that supports:

- multiple complaint categories (weight, hair, libido, etc.)
- multiple concurrent treatments per patient
- coherent timeline filtering by program or treatment
- independent approvals, orders, refill cycles

## Core model

1. `patients` (existing, canonical person)
2. `care_programs` (new, one row per active/archived program track)
3. `treatment_items` (new, one row per medication/supplement/device under a program)
4. `treatment_orders` (new, fulfillment records linked to treatment item)
5. `refill_requests` (new, queue row when a refill is submitted for a treatment item)
6. `patient_timeline_events` (existing, now optionally scoped by `care_program_id` + `treatment_item_id`)

`patient_states.glp1_status` remains temporarily for backward compatibility while UI/API migrate.

## New statuses

### Program status (`care_program_status`)

- `intake_submitted`
- `under_review`
- `approved`
- `denied`
- `active`
- `paused`
- `completed`
- `cancelled`

### Treatment item status (`treatment_item_status`)

- `pending_approval`
- `approved`
- `denied`
- `rx_sent`
- `shipped`
- `active`
- `paused`
- `stopped`
- `refill_due`
- `refill_pending`

### Refill request status (`refill_request_status`)

- `requested`
- `under_review`
- `approved`
- `denied`
- `fulfilled`
- `cancelled`

## Transition rules (data-driven)

`workflow_status_transitions` defines allowed moves for both entities.

Backend actions should check transitions before writing updates:

- staff update actions
- webhook handlers
- future cron/refill workers

## Migration file

SQL created at:

- `supabase/migrations/20260422010000_care_programs_treatment_items_v1.sql`
- `supabase/migrations/20260422013000_care_programs_staff_rls.sql` (staff read/write RLS policies)
- `supabase/migrations/20260422020000_refill_requests.sql`
- `supabase/migrations/20260422021000_refill_requests_staff_rls.sql`
- `supabase/migrations/20260422022000_treatment_refill_pending_to_refill_due.sql` (rollback transition)

It is additive and does not remove existing tables.

## Implementation status (living)

Done (so far):

- Draft schema + enums + indexes
- Transition rules table + seed rows
- Timeline scoping columns (`care_program_id`, `treatment_item_id`)
- Internal patient case UI: program cards + treatment rows + status actions (with transition guards)
- Dual-write bridge for selected program/treatment keys into legacy `patient_states` where needed
- Refill queue table + staff RLS + internal actions to submit refills from `refill_due` → `refill_pending`

Still to do:

1. patient-facing refill UX on `/dashboard/...` (needs a real patient auth/session story; today the dashboard is link-based)
2. pharmacy integration fields / webhooks on `refill_requests` (beyond status + notes)
3. notifications: resolve templates from treatment/program status directly (not only via legacy `glp1_status` bridge)

## Recommended rollout order

1. **Read-only first:** show program + treatment data in internal UI
2. **Dual-write:** update both old (`patient_states`) and new (`care_programs`/`treatment_items`) from status actions
3. **Cutover:** move dashboard + queue + notifications to new model
4. **Retire old:** remove `glp1_status` dependency once all flows are migrated


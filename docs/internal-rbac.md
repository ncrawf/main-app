# Internal access (staff): identity, roles, audit

MAIN uses **three layers** for internal tools:

1. **Identity** — Supabase Auth users (`auth.users`) for staff.
2. **Authorization** — `public.staff_profiles` (`role`, `service_state_codes`, `availability`) + **RLS** on patient data.
3. **Audit** — `public.audit_events` (append-only; wire `logAuditEvent` from trusted API routes).

## Routes

- **`/internal/login`** — email + password (Supabase Auth).
- **`/internal`** — overview (role, timezone, coverage, availability JSON).
- **`/internal/patients`** — patient list via **session + RLS** (not service role).
- **`/admin`** — legacy shared-password list (service role); keep until you migrate fully.

## Bootstrap a staff user

1. In **Supabase Dashboard → Authentication → Users**, create a user (email + password) or invite.
2. Copy the user’s **UUID** from the user detail view.
3. In **SQL Editor**, run (replace placeholders):

```sql
insert into public.staff_profiles (id, role, display_name, timezone, service_state_codes, availability)
values (
  'YOUR_AUTH_USER_UUID',
  'super_admin',
  'Your Name',
  'America/New_York',
  array['MI', 'OH']::text[],
  '{"weekdays": {"start": "09:00", "end": "17:00"}}'::jsonb
);
```

4. Sign in at **`/internal/login`**.

## Queue routing (planned)

- **`staff_profiles.service_state_codes`** — which US states this clinician covers.
- **`staff_profiles.availability`** — structured hours; app interprets later for “on shift” routing.
- **`patient_states.assigned_to`** — optional FK to `staff_profiles.id` for “this case is mine / queue.”

## RLS

Authenticated users **without** a `staff_profiles` row cannot read `patients` / `patient_states` / `form_submissions` under the new policies. The **service role** (API routes that use it) still bypasses RLS.

## Audit

Call `logAuditEvent` from server code after verifying the actor (e.g. after state transitions in Ticket 10).

# Ops Command Center — Surface Contract

Plane: **P5 Surface** · Type: `console` · Status: `stub` · Persona(s): ops/front-desk · Build priority: `day_1`
Source-of-truth relationship: references P1 truth via projections; commits via owning domains + RBAC. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
The day-of-operations surface: *keep the floor running* — today's schedule, check-ins, queues, follow-ups, no-shows/waitlist, inbound comms, fulfillment exceptions.

## §2 Persona(s) + access
ops / front-desk / coordinator. RBAC ops atoms; no clinical-write authority by default.

## §3 Reads from (references, owns none)
D3 (today's grid/waitlist) · D5 (in-progress occurrences) · CNS (queues, `patient_action_item`, exceptions) · BIZOPS (provider operational-state/availability) · Messaging (inbound) · OFC (orders/results pending) · D6 (checkout/POS context).

## §4 Projections used (P4)
`operating_metrics` (floor/day) · `workforce_operating_context` (who's available).

## §5 Writes / actions allowed (verbs → owning domain + RBAC atom)
check-in → D3/D5 · waitlist-promote → D3 · route/assign task → CNS · handle inbound/triage → Messaging/CNS · POS/checkout → D6. **No clinical adoption.**

## §6 Forbidden
Never alter clinical truth; never override provider competency-gate; never reassign solo-perform to an uncleared provider (D3 enforces); never store queue metrics as truth.

## §7 Metrics shown
Day-of operations (arrivals, waits, queue depth, no-shows, follow-up backlog) — `operating_metrics`.

## §8 Workflow states
Check-in flow, waitlist promotion, exception/escalation handoff (CNS), confirmation round-trips.

## §9 Recovered design / prior gems
*Deposit box: provider operational-state board (§1G.7 → BIZOPS); waitlist/no-show recovery (future_care_obligations task_kinds); Mindbody dashboard/appointments-grid (evidence).*

## §10 Source docs feeding this surface
CNS §9 (queues/exceptions) · D3 contract · BIZOPS §4 (operational-state) · Mindbody 04/05 (evidence).

## §11 Day-1 vs later
Day-1: schedule grid + check-in + queues + inbound. Later: predictive staffing (REV-174).

## §12 Open questions (→ `08`)
- Ops vs Admin boundary (real-time floor vs configuration) — confirm at build.

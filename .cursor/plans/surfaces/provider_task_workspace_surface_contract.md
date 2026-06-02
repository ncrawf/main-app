# Provider Task Workspace — Surface Contract

Plane: **P5 Surface** · Type: `workspace` · Status: `stub` · Persona(s): provider/staff · Build priority: `day_1`
Source-of-truth relationship: the work-queue surface over CNS `provider_task` + D5 care-state. References P1; commits via owning domains. Indexed in `OMNI_Surface_Map_vNext.md`. (Closely related to Provider Operating Profile §8 + Intake Review.)

---

## §1 Purpose / job-to-be-done
*Work the queue* — the prioritized list of what needs a human: reviews, lab results, message turns, follow-ups, exceptions — with safe prioritization and clear ownership.

## §2 Persona(s) + access
provider / clinical staff / coordinator. RBAC per task-type; fallback coverage pools.

## §3 Reads from (references, owns none)
CNS (`provider_task`/work-queue + deterministic prioritization buckets: ready-for-review/lab-review/message-turn/ops; tie-break safety→stale→age→depth→FIFO) · D5 (`care_state_view`, blockers) · Messaging (turns) · OFC (orders/results/obligations) · Observation/CM (review context).

## §4 Projections used (P4)
patient `context_packet` (per task) · `operating_metrics` (queue health).

## §5 Writes / actions allowed (verbs → owning domain)
claim/complete task → CNS · the underlying clinical action → owning domain (CM adopt / OFC order/release / Messaging reply) under RBAC. **CNS coordinates; domains commit.**

## §6 Forbidden
Never let a queue action bypass authority/consent/competency gates; never AI-clear a `clinical_required` turn; never store queue state as domain truth; UI prioritization ≠ enforcement.

## §7 Metrics shown
Queue depth/age by bucket, SLA status, backlog — `operating_metrics`.

## §8 Workflow states
Task lifecycle (proposed→active→in_progress→fulfilled/escalated); exception Stage 4/5 ownership + auditable closure (CNS §9).

## §9 Recovered design / prior gems
*Deposit box: legacy §1G.1/§1G.4-1G.8 worklist buckets + tie-break ordering; `patient_action_item` (1G.11) cross-episode pending-patient-input; exception/escalation (1G.5); the provider workspace UI = product surface over CNS `provider_task` (CNS §9 note: "workspace UI is a product surface over this, not a substrate object" — THIS is that surface).*

## §10 Source docs feeding this surface
CNS §9 (provider_task/prioritization/exceptions) + §10.1 (`clinical_required`) · D5 (`care_state_view`).

## §11 Day-1 vs later
Day-1 (core provider workflow).

## §12 Open questions (→ `08`)
- Relationship to Provider Operating Profile (§8 queue) + Intake Review Workspace — likely one workspace with task-type views; confirm at build (alias risk).

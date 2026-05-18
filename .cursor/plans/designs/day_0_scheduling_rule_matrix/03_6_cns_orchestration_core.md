# Round 3.6 Interlude — CNS Orchestration Core Parent Contract

**Status:** LOCKED parent contract (pre-Round 4.2)  
**Date:** 2026-05-18  
**Scope:** Define CNS as the first-class, source-agnostic orchestration core inherited by every domain slice (including Domain 4 scheduling confirmation/outbound).

---

## 1) CNS Charter (Plain English)

OMNI CNS is the event-driven orchestration brain for cross-domain care operations. It does not exist to "send reminders"; reminders are one possible output.

### CNS owns
- Receiving typed source events from any domain.
- Assembling decision-time context packets/state snapshots.
- Evaluating action candidates against policy, consent, coverage, load, risk, and guardrails.
- Resolving an execution decision (`send_now | defer | suppress | reroute | staff_review | clinical_escalation | no_op`).
- Emitting execution envelopes and routing to rails/queues/tasks/escalations.
- Running inbound/outcome feedback loops and writing decision records.

### CNS does not own
- Canonical domain truth or meaning of domain objects.
- Final canonical state commits for scheduling, encounter, commerce, Rx, labs, or documentation.
- Clinical authority sign-off decisions that require provider/legal authority.

Binding boundary: domains emit facts and candidates; CNS orchestrates; owning domains validate and commit canonical state transitions.

---

## 2) Parent Contract Stack

### 2.1 Source Event Contract
- Source events are typed, append-only facts (not direct commands).
- Events may originate from scheduling, intake, encounter, labs, Rx, commerce, billing, messaging, staff/provider workflows, supply/fulfillment/availability operations, and future domains.
- Direct rail bypass is disallowed except explicit whitelist policy.
- Bypass whitelist must be explicit and governed: every bypass path is named, justified, auditable, owner-assigned, and revalidation/expiry-bound.

### 2.2 Context Packet / State Snapshot Contract
- Resolver reasons from a typed, versioned, auditable context packet assembled at decision time.
- Minimum packet fields: `context_packet_id`, assembly timestamp, source event refs, actor/patient refs, applicable journey refs, included modules+versions, freshness markers, confidence markers, missing-context flags, risk hints, supersession state, policy-readable facts.
- Resolver decisions must cite the context packet version used.
- Missing/stale/contradictory/low-confidence context forces safe outcomes (`defer|reroute|suppress|staff_review`) over blind execution.

Context module extensibility note:
- Parent contract admits context-module extension when a new domain needs first-class policy-readable facts (for example future Supply & Fulfillment Context for stock/lot/lead-time/availability realities).

### 2.3 Action Candidate Contract
- Source domains emit canonical action candidates before execution.
- Candidate includes intent/action family, scope, target class, policy hooks, and correlation ids.
- Candidate lifecycle is universal:
  - `created -> eligible -> blocked|deferred|suppressed|resolved_to_envelope|expired|cancelled|superseded|failed_resolution`

### 2.4 Domain Ownership Contract
- Source domain owns event semantics and candidate emission.
- CNS owns policy resolution/orchestration/routing/suppression/escalation/audit.
- Owning domain validates and commits canonical domain state.

### 2.5 State Mutation Boundary Contract
- CNS can emit `state_transition_proposal`.
- Canonical state commit remains with owning domain unless explicitly delegated by policy.

### 2.6 Identity / Correlation Contract
- Inbound handling must evaluate identity confidence, proxy/guardian context, and thread/action correlation confidence.
- Low-confidence identity/correlation routes to `staff_review`.

### 2.7 Supersession / Revision Contract
- Execution and inbound mutation require revalidation against active revision/supersession context.
- Superseded candidates or stale replies cannot mutate canonical state without re-resolution.

### 2.8 Resolver Decision Record Minimum Contract
- Required record includes: source event/domain/candidate ids, context packet version, policy profile, delivery window and coverage resolution, consent/PII outcomes, resolved decision, AI role usage/denial rationale, chosen queue/channel/thread/escalation, and alternatives suppressed/deferred with rationale.

---

## 3) CNS Input Readiness Contract

A domain is CNS-ready only when critical facts are typed, granular, versioned, attributable, time-aware, ownership-clear, confidence-scored, policy-readable, and audit-linkable.

Minimum readiness requirements:
- Typed event emission
- Granular facts (not opaque blobs)
- Schema/content version references
- Actor/source attribution
- Timestamps + validity windows + supersession markers
- Canonical ownership clarity
- Confidence/verification markers
- Context-packet eligibility + extracted policy facts
- Audit lineage linkability

### Readiness scoring output (required)
- `ready`: facts satisfy contract and can drive allowed autonomous resolver outcomes.
- `conditional`: partial readiness; resolver allowed only under explicit guardrails (e.g., mandatory `staff_review` on low-confidence branches).
- `blocked`: fails minimum readiness; resolver must not rely on this input for autonomous execution.

---

## 4) Resolver and Envelope Contract

Resolver inputs:
- source event + action candidate + context packet
- policy profile + consent constraints + channel options
- coverage/ownership windows + queue/load posture
- legal/clinical guardrails + AI governance mode

Resolver outputs:
- decision: `send_now | defer | suppress | reroute | staff_review | clinical_escalation | no_op`
- resolved execution fields and explicit decision rationale

Execution envelope role:
- Envelope is produced only after resolver decision.
- Envelope may render to message, task, queue action, escalation, state proposal, suppression, or no-op.

Universal inbound loop:
- Replies/outcomes become source events and re-enter the same parent contract path.

---

## 5) CNS Platform Readiness Guardrails (Binding Parent Contracts)

1. Event ledger/replay/schema versioning  
2. Policy governance (versioned/effective-dated/dry-run/rollback/approval)  
3. Work queue + SLA  
4. Clinical risk severity  
5. Coverage window / response ownership  
6. Human authority / override  
7. Record boundary + retention  
8. AI governance  
9. Tenant capability / SaaS entitlement  
10. CNS observability metrics  
11. CNS simulation, autonomy, and feedback  
12. CNS oversight plane

Oversight plane boundary:
- Deterministic monitors handle continuous policy/safety/SLA checks.
- AI analysis assists within approved scope.
- Humans govern policy/risk exceptions and high-risk overrides.

---

## 6) Domain Inheritance Rule (Binding)

All domain rule slices inherit this parent contract.  
Domain 4 is explicitly one scheduling-originated candidate emitter into the shared resolver, not a separate messaging micro-core.

Round 5 remains frozen until:
- this parent contract is anchored in system map + index + ADR/history,
- conformance checkpoint is published,
- explicit user/Knox approval is granted for Round 4.2 text refactor.


# Longitudinal Intelligence CNS / Patient Operating Context (Doctrine)

> **⚠️ RECOVERED TO MAIN 2026-05-30 (Foundation vNext §A, `REV-148`).** Parked off-main on `wip/scheduling-cns-pre-thesis-snapshot-2026-05-23` (`d753a64`, `CNF-010`); now restored **as evidence / limited-use — NOT current binding doctrine.** It is 2026-05-19 vintage (pre-Tier-0-activation, pre-thesis-v2). LI is ratified for *limited Tier-1 routed use* per `D0W3C-REV-001` (CNS commit authority; D5/D6/D7 ownership boundaries preserved; LI informs/ranks/suppresses/escalates candidates only — never direct commit, per `D0W3C-GRD-001`). **Re-verify against the current Tier-0 stack + thesis v2 (esp. §7.5/§7.6/§9.1) before treating any claim as authority.** Three-layer reconciliation (per plan §1.5) happens in the CNS domain pass — this file is its primary evidence.

**Date:** 2026-05-19  
**Status:** DRAFT (detour doctrine, pre-propagation pressure-test required)  
**Scope:** Top-layer longitudinal patient/care intelligence thesis for OMNI CNS  
**Non-goal:** This file does not reopen Round 5 and does not start Round 6 authoring.

---

## 1) Purpose

This doctrine defines the top-level thesis that binds OMNI’s existing architecture into one operating model:

- intake is an input, not the decision substrate,
- labs are snapshots, not the whole story,
- telemetry is context, not automatic clinical truth,
- messages are feedback loops, not just outreach,
- provider decisions are authority commits, not AI side effects,
- CNS converts accumulated longitudinal signal into safe, auditable action candidates.

This file is the source-of-truth for that thesis before any system map/index/ADR propagation.

---

## 2) Canonical Framing

OMNI is a longitudinal intelligence operating system for patient/care context.

It is not a stack of disconnected features (scheduler + EMR + commerce + AI assistant).  
It is a coordinated system where each atomic event improves the next decision.

Future business operations (workforce/payroll/incentive layers) are valid and important, but they are a **sibling doctrine** and are not expanded in this file.

---

## 3) What This Layer Is / Is Not

### Is
- A top-level context-and-decisioning doctrine over time.
- A consistency contract across CNS, D5 occurrence/work-item, D6 commerce, D7 documentation.
- A way to ensure appointment and non-appointment (async/lab/Rx/message-driven) flows are first-class.

### Is Not
- A telemetry dashboard doctrine.
- An AI autonomous clinical decision doctrine.
- A replacement for clinical authority.
- An “all business ops” doctrine.
- A reason to collapse sibling truths (D5/D6/D7) into one layer.

---

## 4) Core Relationship Map

- **CNS parent contract:** source-agnostic orchestration remains central.
- **D5:** actualized care/service/review/procedure/session truth (`service_occurrence`, `service_occurrence_work_item`).
- **D6:** sale/refund/redeem/tender/entitlement truth.
- **D7:** evidence/documentation/materialization truth.
- **Input signal families:** intake, labs, Rx events, patient messages, provider/staff actions, telemetry, scheduling events, operational context.

This layer does not replace domain ownership; it aligns and coordinates it.

Coordination boundary (binding):
- longitudinal intelligence may inform care timing, routing, prioritization, suppression, and candidate quality, but it does not itself create `service_occurrence` rows, commerce events, or D7 record materializations without owning-domain create/commit rules.

---

## 5) Patient Agency, Consent, and Data Permission Boundary

Longitudinal intelligence must operate on consented, source-attributed signal.

Before any signal can influence CNS candidates, OMNI must preserve and evaluate:
- source permission scope,
- patient consent class,
- revocation/opt-out state,
- data provenance and attribution,
- visibility class.

Binding rule:
- no permission -> no candidate influence,
- revoked permission -> candidate influence removed except where legally required safety handling applies.

Identity-confidence gate (binding):
- candidate generation and context-packet materialization require identity confidence sufficient for the action context.
- unresolved identity confidence must route to deterministic reconciliation/review, not silent influence.

Delegated-recipient authority boundary (binding):
- minors/guardians/caregivers and other delegated actors must pass recipient-authority checks before clinically meaningful messaging or action routing.
- recipient visibility and action rights must be constrained by delegated authority scope.

Revocation/deletion and retention boundary (binding):
- revocation or deletion requests stop future candidate influence from affected signal classes.
- legally required audit lineage persists under retention policy with provenance-preserving retention/redaction handling.

Purpose-of-use access boundary (binding):
- longitudinal context access is purpose-limited and role-scoped, not open-by-role-default.
- access and policy enforcement outcomes must be auditable and sanctionable.

This doctrine is patient-impactful intelligence, not passive surveillance.

---

## 6) Signal Authority Ladder (Truth Boundaries)

1. **Raw signal**  
   Context archive only; never automatic clinical truth.

2. **Normalized observation**  
   Structured candidate fact with quality/provenance metadata.

3. **Trend**  
   Computed over time; contextual relevance depends on pathway and policy.

4. **Contextual interpretation**  
   Program/pathway-aware interpretation; still not an authority commit.

5. **CNS candidate**  
   Proposed action path (`no_op`, `insight`, `task`, `review`, `escalation`, etc.).

6. **Human/system action**  
   Resolver + owning-domain policy + authorized actor determine commit.

7. **Optional D7 record materialization**  
   Only when legal/clinical/documentation thresholds and authority requirements are met.

Binding boundary:
- Raw signal != clinical event
- Trend != diagnosis
- CNS candidate != committed truth

Baseline and delta doctrine (binding):
- prefer patient-specific baseline + change-over-time interpretation when available.
- raw thresholds alone are insufficient for action in most pathways.
- signal meaning is contextual to patient history, protocol, care phase, and prior response.

---

## 7) Inflection-Point Contact Discipline

The objective is not contact frequency.  
The objective is relevance at the right inflection point.

Patient touch cadence may be:
- multiple times daily in high-risk windows,
- daily during dose transitions,
- weekly/monthly during stable maintenance,
- or suppressed entirely when no meaningful action is warranted.

Binding principle:
- contact where it matters, when it matters, with context;
- suppress when it does not.

---

## 8) Daily-Message and Contact-Load Discipline

Any recurring or check-in style outreach must be generated through CNS arbitration rules:

- consent class,
- quiet-hour policy,
- care-program relevance,
- contact-load budget,
- suppression/composition logic,
- recipient safety/visibility boundaries.

“Good morning” style outreach is valid only as a composed care action when context justifies it.  
No cadence-maximized or notification-spam architecture is allowed by this doctrine.

---

## 9) Learning Feedback Boundary

OMNI may learn from:
- patient responses/non-responses,
- outcomes and trend changes,
- provider decisions,
- adherence behavior,
- escalation outcomes.

Learning may improve:
- context quality,
- candidate ranking,
- suppression/arbitration quality.

Learning must not:
- silently mutate approved clinical policy,
- silently change protocol authority,
- grant AI autonomous clinical commit power.

Authority remains with approved policy + owning domain + authorized human/system actor.

Feedback outcome loop (binding):
- every action candidate should feed an outcome state when available:
  - `ignored`
  - `acknowledged`
  - `resolved`
  - `escalated`
  - `overridden`
  - `clinically_acted_on`
  - `suppressed`
  - `false_positive`
- these outcomes improve context/candidate quality and suppression/arbitration quality.
- outcome learning must not silently mutate approved clinical policy.

Decision traceability (binding):
- candidate/action/no_op/suppression decisions require rationale trace.
- minimum trace set includes:
  - source signals used,
  - policy/model/schema version references in effect at decision time,
  - actor/authority path,
  - decision outcome state.

---

## 10) Canonical Signal-to-Action Pipeline

`raw_signal -> normalized_observation -> trend -> contextual_interpretation -> CNS_candidate -> action/no_op/review/escalation -> optional_D7_materialization`

This pipeline is source-agnostic and appointment-optional.

Absence-of-signal handling (binding):
- missing data, non-response, stale telemetry, and device dropout are context states.
- absence of signal is not proof of normality.
- candidate generation must treat silence and reassuring data as distinct states.

Action usefulness standard (binding):
- a CNS candidate should exist only when it can plausibly change one or more of:
  - timing
  - routing
  - prioritization
  - patient guidance
  - provider review
  - documentation/materialization path
  - suppression/no-op decision
- data presence alone is insufficient justification for candidate emission.

Async doctrine lock:
- async care is not appointmentless scheduling;
- it is service occurrence and longitudinal context flow without requiring synchronous appointment containers.

Adversarial-input boundary (binding):
- adversarial or prompt-injection-style input cannot bypass deterministic policy, authority, and commit gates.
- unsafe instruction text is treated as untrusted signal and routed through governed candidate evaluation.

Capacity and degraded-mode safety (binding):
- capacity-aware escalation and degraded routing are required safety behavior, not optional optimization.
- when model services are unavailable or degraded, routing falls back to deterministic/manual workflow; no silent unsafe automation is allowed.

Operational realism controls (binding):
- load-aware suppression/triage and downstream burden monitoring are doctrine-level safety controls.
- content governance must separate and jointly enforce:
  - clinical intent,
  - compliance constraints,
  - tone controls,
  - localization controls,
  - accessibility checks.

---

## 10.1) Temporary Coherence, Durability, and Decay (Binding)

Longitudinal context is a governed temporary arrangement, not automatic canonical truth.

For consequential decisions, OMNI must distinguish:
- source event/signal input,
- temporary composed context used for decisioning,
- authority-owned commit/materialized evidence,
- suppression/no-op/defer memory,
- reconstructable but non-canonical rationale,
- stale/expired context excluded from active composition,
- excluded-from-active-context noise.

Binding clarifications:
- temporary composed context != committed domain truth,
- excluded-from-active-context noise != automatic source deletion,
- retention/deletion remains source/legal/audit/domain-governed,
- cross-domain composition may inform ranking/routing/suppression/escalation but may not silently mutate sibling canonical truth,
- hard causal claims are not default; use influence/rationale/policy-basis unless causality is explicitly evidenced.

---

## 11) Anti-Patterns (Binding Rejections)

- 60-question intake as decision substrate.
- Telemetry dump to provider inbox or chart by default.
- Automatic AI clinical decisions from signal change alone.
- Collapsing D5/D6/D7 sibling truths into one mutable object.
- Treating message cadence as KPI independent of relevance.
- Reintroducing appointment-only dependency for longitudinal care.
- Treating missing signal as reassuring by default.
- Emitting candidates that cannot change any operational or clinical path.

---

## 12) Pressure-Test Rubric (Propagation Gate)

This doctrine is evaluated across eight rubric dimensions:

1. **Authority and commit boundary**  
   Candidate/draft never equals clinical/domain commit.
2. **Permission, identity, and visibility boundary**  
   Consent/revocation/provenance/role scope gate candidate influence and packet visibility.
3. **Signal integrity and uncertainty handling**  
   Missing/noisy/conflicting/stale signal is handled as uncertainty, not hidden certainty.
4. **Safety and degraded-mode behavior**  
   Safety-critical flows fail safe; emergency and outage conditions do not produce silent risk.
5. **Contact relevance and anti-spam discipline**  
   Contact is relevance-driven, composition/suppression-aware, and bounded by load/quiet-hour policy.
6. **Domain ownership separation (D5/D6/D7)**  
   Longitudinal layer coordinates and informs but does not collapse owning-domain truth.
7. **Auditability and explainability**  
   Candidate/action/no-op/suppression states are traceable to source, policy, and authority path.
8. **Operational realism at scale**  
   Doctrine remains safe under capacity limits, queue pressure, and organizational misuse pressure.

Scoring scale per dimension:
- `Pass` - no material contradiction found in pressure-test execution.
- `Conditional` - doctrine mostly holds but requires explicit amendment note or guard text.
- `Fail` - doctrine contradicts required behavior or permits unsafe ambiguity.

Propagation acceptance threshold:
- no `Fail` on dimensions 1-4,
- no more than two `Conditional` across all dimensions,
- every `Conditional` has a concrete amendment note before propagation.

The full 100-case pressure-test bank is maintained in `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`.
Execution method and scoring workflow are defined in `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_execution_protocol_2026-05-19.md`.

If contradictions are found, apply one revision cycle, then stop and re-evaluate.

---

## 13) Controlled Propagation Rule

After this draft is pressure-tested and accepted:

- Propagate by pointer only, in this order:
  1. system map (tiny anchor/pointer only),
  2. index pointer,
  3. ADR pointer,
  4. narrative pointer.

No duplicated doctrine blocks should be sprayed across architecture files.

---

## 14) Detour Exit Gate

This detour is complete only when:
- this doctrine is pressure-tested once,
- revised once if needed,
- accepted,
- and referenced minimally.

Then resume Round 6 opening discipline (read-receipt gate only; no D6 rule authoring until explicit approval).

---

## 15) Future Guardrails (Parking Lot, Non-Blocking)

This section is intentionally non-blocking for current doctrine acceptance and propagation.
It captures future-scale guardrails without expanding current scope.
These guardrails are reminders for future doctrine work and do not create Day 0 substrate requirements.

1. **Governance + replayability**
   - Candidate/action paths should remain reproducible using versioned policy/model/schema references.

2. **Economic discipline**
   - Signal/candidate generation should respect operational capacity and economics, not just data availability.

3. **Interoperability boundary**
   - External schemas may be ingested, but must not directly redefine OMNI canonical truth contracts.

4. **Human override accountability**
   - Overrides should be first-class with reason codes and outcome tracking (not silent/manual side paths).

5. **Degraded-mode safety**
   - Missing signal/model/routing capacity should degrade to deterministic safe behavior, not silent risk.

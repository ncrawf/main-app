# ADR: Source-Agnostic CNS Action Orchestration as the Scheduling-Rule-Matrix Binding

**Date:** 2026-05-17 (Round 3.5)
**Status:** Locked
**Round:** Round 3.5 doctrine lock — pre-Round-4 (Domain 4) pause
**Predecessor ADR:** [phase_4h_target_first_decision_record.md](phase_4h_target_first_decision_record.md)
**Decision commit:** `eb77de1` (Round 3.5 doctrine lock) + `3b85538` (Round Kickoff Reading Discipline scaffolding)
**Authors:** Opus + Knox + chat (multi-round dialogue 2026-05-17) + user
**Scope:** Day 0 Scheduling Rule Matrix — binding cross-cutting doctrine for Round 4 (Domain 4 — Confirmation / outbound round-trip rules) and inherited by Round 5/6/7 for action orchestration

---

## Pointer — Longitudinal Intelligence Doctrine

- Referenced doctrine (pointer only): `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
- Pressure-test support artifacts:
  - `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`
  - `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_execution_protocol_2026-05-19.md`
  - `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_result_2026-05-19.md`
- This ADR references that doctrine by pointer only; no doctrine restatement.

---

## §1 Context

OMNI's locked architecture across DL-14 / DL-15 / DL-16 / DL-18 / DL-20 / DL-21 / DL-22 + [communications_topology.md](communications_topology.md) + §1F + §1G + §1G.8 + §1G.11 + §1P + §1Q.23 + 8 weeks of prior phase work (4h rich-chat / action-items / inbound-classification builds) already establishes the CNS as decisioning engine, rails as outputs, AI-proposes-deterministic-validates-provider-signs authority gradient, source-agnostic event envelope, actor 4-tuple, 32-seed outbound trigger registry, episode catalog with recommended cadence, and `appointment_confirmation_event` substrate for CNS round-trip orchestration.

Despite all of this being LOCKED, the scheduling-rule-matrix (`.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md`) had no binding section forcing Round 4 (Domain 4 — Confirmation / outbound round-trip rules) author to honor the existing CNS doctrine. Without such binding, Round 4 was at significant risk of:

1. Being authored as a Mindbody-style "appointment confirmation / reminder engine" — undermining OMNI's whole thesis
2. Inventing new substrate for things already covered by existing locked DLs
3. Treating known pillars as discoveries (re-discovery anti-pattern)
4. Patient-only framing missing internal recipient orchestration (provider tasks / staff tasks / billing / clinical escalation / ops hospitality / care coordinator / vendor actions)
5. Appointment-first framing breaking Hims-style async care and lab/Rx/intake/commerce/refund/promo/membership/payment event sources
6. Allowing AI composition to invent clinical content without approved-module discipline

This decision record captures Round 3.5's resolution of those risks.

---

## §2 Decision

Lock **source-agnostic CNS action orchestration doctrine** in the scheduling-rule-matrix index (`00_index.md`) as 6 binding doctrine sections (§2.14 through §2.20) plus a binding round kickoff discipline (§2.21) before Round 4 authoring begins.

The 6 doctrine sections do NOT introduce new architecture. They CITE existing locked doctrine and make it BINDING on Round 4 author from the rule matrix. The one genuinely new substrate gap (Context Module content/version governance) is patched into §2.15.

### §2.1 Six doctrine sections locked (00_index.md §2.14 – §2.20)

| Section | Title | Purpose | Locks |
|---|---|---|---|
| **§2.14** | Source-agnostic CNS action orchestration doctrine (renamed per Correction 4 from "Longitudinal conversation doctrine") | CNS action orchestration is source-agnostic. Events from ANY OMNI substrate normalize into one unified pipeline. Appointment is OPTIONAL context. Scheduling alerts are ONE `action_kind=patient_message` branch. | 18+ event source taxonomy; Tesla-freeway unified pipeline; Hims-async pressure-test; 5 patient-facing communication classes; parallel internal action classes; 15 worked examples (6 patient + 9 internal/cross-source); 10 anti-pattern rejections |
| **§2.15** | Context Module Layer doctrine (renamed per Correction 4 from "Intervention Context Layer"; Intervention is ONE of 6 module types) | 6 Context Module types — Intervention / Product-SKU / Care Program / Entitlement / Order-Commerce / Patient Profile. Anti-brain naming binding per Correction 1. Content/version governance per Patch 7. | 6 module types table; 3-packet projection (CNS Action / Recipient Communication / Provider Clinical Context); `version` + `approved_by_actor` + `effective_from` + `effective_to` + `superseded_by_version` + `change_audit_lineage` per module; declarative protocol constraints permitted (NOT orchestration logic) |
| **§2.16** | CNS Action Envelope doctrine (renamed per Correction 4 from "Outbound Message Envelope") | 18-field envelope on every CNS action (not just outbound messages). action_kind discriminates the output type. Composition invariants binding. | 18 fields incl. action_kind (10 values) + reply_policy (7) + thread_policy (9) + recipient_class (8) + action_required (9); field applicability matrix; 8-tier arbitration priority; patient contact-load budget; 5-operation composition; 10 invariants (incl. cross-action_kind + cross-recipient-class split); Constraint 5 graceful degradation (basic reminders work without AI) |
| **§2.17** | Provider Clinical Context Packet forward-reference (Round 5/7 binding) | Round 4 does NOT author provider decisioning. Forward-reference locks principles for Round 5/7 substrate authors. | AI summarizes/proposes; deterministic validates+flags+blocks; provider signs where clinical authority required; charting-from-context anti-pattern; AI citation/trace requirement |
| **§2.18** | Round 4 mandatory pre-brief (Sections A–O) | Binding compliance sections that Round 4 must honor. | 15 sections covering: source-agnostic compliance / 5 + parallel comm classes / 2-lane architecture / Context Module Layer consumption / 18-field envelope / 7-value reply_policy / 9-value thread_policy / 10 composition invariants / arbitration + contact budget / graceful degradation / cross-domain seams / DL-16 amendment compliance / multi-recipient orchestration / source-agnostic action_kind / §2.19 Citation Map compliance |
| **§2.19** | Citation Map (NOT new architecture) | Binding citation of existing locked doctrine for 8 chat-flagged reliability guardrails. Round 4 cites; does NOT re-author. | 8-guardrail audit → existing-doctrine-citation map. 7 of 8 already locked across DL-14/15/16/18/20/21 + communications_topology + §1F/1G/1G.8/1G.11/1P/1Q.23 + 4h phase work. 1 (Context Module versioning) patched into §2.15. |
| **§2.20** | Amendment J candidate (4-part) | Substrate work flagged for Round 5/7 evaluation. | J(a) Context Module Layer substrate distribution; J(b) `orchestration_action` 18-field envelope extension + `queue` substrate; J(c) source-agnostic event normalization + arbitration + queue routing substrate; J(d) Provider Clinical Context Packet substrate |

### §2.2 §2.21 Round Kickoff Reading Discipline (drift-prevention)

Adds binding round kickoff discipline to prevent the Rounds 1-3.5 regression cycle from recurring. Every future round (4, 5, 6, 7, Final) MUST:
- Read 10 specific docs before authoring (system_map + 00_index full + post-mortem + preferences + 3-layer pattern + Volume 1 + Volume 2 narrative + communications_topology + this ADR + prior domain files + per-domain MUST READ list)
- Open with a written "read receipt + constraints honored" statement
- Close with a written "authored + verdicts + Amendment candidates + open decisions" statement

### §2.3 The one genuinely new substrate piece (§2.15 Context Module versioning)

Per chat 2026-05-17 reliability-guardrails audit (Patch 7), Context Module instances MUST carry: `version` STRING + `approved_by_actor` (DL-16 amendment 43 4-tuple) + `effective_from` TIMESTAMP + `effective_to` TIMESTAMP NULL + `superseded_by_version` STRING NULL + `change_audit_lineage` per DL-16 inv 30. Decision records capture WHICH versions consumed at decision time. If CoolPeel protocol updates from v3 → v4 after a message was sent referencing v3, audit shows v3 was what patient actually received.

All other reliability primitives (contact endpoint resolution / delivery lifecycle / live-state revalidation / idempotency / unsolicited inbound / internal task lifecycle / observability) already locked across existing DLs and prior phase work; §2.19 Citation Map binds Round 4 to cite, not re-author.

---

## §3 Decision History — Multi-round chat dialogue 2026-05-17

Round 3.5 was not a single doctrine drop. It went through 4 named corrections + 5 cleanup patches + Patch 7, surfacing failure patterns that are now captured in the post-mortem (Patterns 9 + 10).

### §3.1 Correction 1 — Anti-brain naming

Chat 2026-05-17: §2.15 layer must NEVER be named "Brain Layer" / "Knowledge Layer" / "Protocol Engine" / "Protocol Brain." Any framing that calls Context Module Layer "the brain" is REJECTED as a category error. CNS is the brain. Context Modules are structured input.

### §3.2 Correction 2 — 9-value thread_policy (symmetric with conversation_scope)

Chat 2026-05-17: The originally-proposed 7-value `thread_policy` ENUM was missing two values that `conversation_scope` already includes — `attach_to_entitlement_thread` (for "BH+ benefit expiring" messages) and `attach_to_general_patient_thread` (for "how's your lotion?" / "questions about exosomes?" messages without specific scope). Added both for symmetry.

### §3.3 Correction 3 — Multi-recipient orchestration

User direction 2026-05-17: *"yes the scheduling surface requires alot of outbound communication ... but we want like high level of granularity, at numerous touch points, through numerous channels."* Plus the rhinoplasty post-op example *"Dr Z, your patient had rhino last week, time to call them tomorrow."*

§2.16 expanded from 13 → 17 fields. Added `recipient_class` (8-value ENUM: patient / provider / front_desk / clinical_staff / billing_staff / ops_team / care_coordinator / external_vendor) + `audience_scope` + `action_required` (9-value ENUM) + `owning_queue`. Composition invariants extended with cross-recipient-class split (patient outbound + provider task NEVER ride together).

### §3.4 Correction 4 — Source-agnostic CNS Action Envelope (the biggest reframe)

User direction 2026-05-17: *"how about a retail purchase? how about a refund? how about a promo applied to account. etc etc. does our CNS architecture allow now for all those triggers to travel within it, be acted on, be ruled, governed, AI'd, provider responded, patient responded? does the scheduling alerts fit within that framework?"*

The earlier framing was too patient-centric and too narrow (outbound messages only). Correction 4 reframed §2.14 from "Longitudinal conversation doctrine" → **"Source-agnostic CNS action orchestration doctrine."** Reframed §2.15 from "Intervention Context Layer" → **"Context Module Layer"** (Intervention is ONE of 6 module types). Reframed §2.16 from "Outbound Message Envelope" → **"CNS Action Envelope."**

§2.16 expanded from 17 → 18 fields. Added `action_kind` ENUM as field #1 (10 values: patient_message / internal_notification / provider_task / staff_task / billing_task / clinical_escalation / scheduling_offer / state_transition_proposal / suppression / no_op + 3 reserved registry-extensions). Composition invariants extended with cross-action_kind split (patient_message + provider_task NEVER ride together).

`appointment_id` declared OPTIONAL context, NOT required. Hims-style async care must work without appointment.

### §3.5 Cleanup Patches 1-5

Chat 2026-05-17 lock-tightening pass:
- **Patch 1** — `acknowledge` is `action_required` not `reply_policy`. Fixed `internal_notification` action_kind to use `reply_policy=no_reply` with `action_required=acknowledge`.
- **Patch 2** — Renamed "Patient Communication Packet" → "Recipient Communication Packet" (supports patient AND internal recipient comms via per-recipient_class authority gradient).
- **Patch 3** — Softened "Context does not encode conditional logic." Context Modules MAY carry declarative protocol constraints (stop retinols 5 days before / follow up 48 hours after / spacing windows / red-flag thresholds / dose escalation intervals). They just don't decide actions / select channels / route replies / suppress.
- **Patch 4** — Removed duplicate 3-packet table in §2.15.
- **Patch 5** — Fixed stale labels (A-L → A-N → A-O for §2.18 pre-brief; Intervention Context substrate home → Context Module Layer substrate home; remaining "Outbound Message Envelope" stale references).

### §3.6 Patch 7 — Content / version governance per Context Module

Chat 2026-05-17 reliability audit identified 8 reliability guardrails. Audit confirmed 7 of 8 already locked across existing OMNI doctrine; 1 (Context Module content/version governance) genuinely missing. Patched into §2.15 with `version` + `approved_by_actor` + `effective_from` + `effective_to` + `superseded_by_version` + `change_audit_lineage` fields per module instance.

### §3.7 Round 3.5 commit history

| Commit | Description |
|---|---|
| `844e15a` | Round 3.4 doctrine lock (benefit stacking + conflict resolution) |
| `16f6eb7` | Round 3.4.5 `allow_stack` 7th conflict resolution strategy parity |
| `eb77de1` | Round 3.5 doctrine lock (6 doctrine sections §2.14-§2.20 + Phase 1 hardening v10 system_map entry) |
| `3b85538` | Round 3.5 scaffolding 1/3 — §2.21 Round Kickoff Reading Discipline + per-domain MUST-READ table |
| (this commit) | Round 3.5 scaffolding 2/3 — this ADR |

---

## §4 Rationale

### §4.1 Why a binding citation mechanism is needed

The CNS doctrine has been locked across DL-14 through DL-22 for 8+ weeks. Despite that, Rounds 1-3.5 repeatedly "re-discovered" pillars that were already locked (CNS bounded autopilot / 32-seed outbound trigger registry / actor 4-tuple / `appointment_confirmation_event` substrate / `communications_topology.md` 3 patient surfaces + 6 outbound channels + 5 inbound channels). This re-discovery cost ~12+ hours per pillar of unnecessary back-and-forth.

The scheduling-rule-matrix is its own binding document for substrate-slice authors. Without an explicit citation map in the matrix that BINDS Round 4 to honor existing CNS doctrine, regression to Mindbody-style "appointment reminders + AI" was the path of least resistance.

§2.19 Citation Map + §2.21 Round Kickoff Reading Discipline together form the binding mechanism: Round 4 author MUST cite existing doctrine; MUST NOT re-author; substrate gaps surface as Amendment J extensions instead of new architecture in Round 4 rules.

### §4.2 Why source-agnostic is the right framing (not "communications")

Per user direction 2026-05-17: *"how about a retail purchase? how about a refund? how about a promo applied to account. etc etc. does our CNS architecture allow now for all those triggers to travel within it?"*

The architecture has always been source-agnostic at the doctrine level (DL-14 inv 18-22 + DL-16 amendment 42 32-seed outbound trigger registry covers 8 buckets including marketing / lifecycle / billing / clinical / forms / scheduling). The matrix had not yet made this binding for Domain 4.

Framing Round 4 as "scheduling communications" would have:
1. Implied appointment-first architecture (breaking Hims async / lab / Rx / intake event sources)
2. Implied patient-only outbound (breaking provider task / billing task / clinical escalation routing)
3. Implied "message" as the core action_kind (breaking suppression / no-op / state-transition-proposal / scheduling-offer / context-update action_kinds)
4. Implied no cross-module context assembly (breaking retail-purchase + recent-treatment composition; CoolPeel + Lotion P50 spacing safety)

Framing Round 4 as "SCHEDULING-DOMAIN slice of source-agnostic CNS action orchestration" preserves all of the above while still keeping Round 4 scope tractable. Other domains (5/6/7/future) inherit the envelope when they author their own action orchestration rules.

### §4.3 Why Context Module Layer (not "Intervention Context Layer")

Per user direction 2026-05-17: *"how about a aptient purchase cream x during whatever visit. they also got botox, a hydrafacial and now its 1 week out. and then they went and boutgh ltion p50 off our website."*

The retail product example does NOT fit cleanly into "Intervention Context" (Lotion P50 usage instructions are not a CoolPeel protocol field). The right model is a Context Module Layer with multiple module types, of which Intervention is one. Other module types serve other event sources.

Chat 2026-05-17 Amazon analogy (lightly paraphrased): *"Amazon would not solve this by saying every product has a long description and the notification engine freestyle-generates messages from it. Amazon would have separate layers: product/catalog truth + order/event truth + recommendation/continuation truth + communication policy + support/thread handling. For OMNI, the answer is similar."*

§2.15's 6 module types (Intervention / Product-SKU / Care Program / Entitlement / Order-Commerce / Patient Profile) reflect this. Future module types (Vendor / Marketing / Compliance) extend via registry per DL-16 inv 5 + 9 + 29.

### §4.4 Why the anti-brain naming binding matters

Per chat 2026-05-17 Tesla analogy + Correction 1: *"Tesla would not treat the car as one blob of state. It would treat the car as a stream of typed signals, snapshots, predictions, policies, and actions."*

The Context Module Layer is the manual + map (operating manual) the CNS reads while driving. It is NOT the brain. The CNS is the brain. The patient state is the road. The event stream is the sensor feed. The pathway/protocol is the operating manual.

Without explicit anti-brain naming, future authors could re-introduce "intervention rules engine" / "protocol orchestrator" / "knowledge engine" framings that would re-centralize decision-making outside CNS — destroying the bounded-autopilot discipline locked in DL-14 inv 18-22.

### §4.5 Why graceful degradation is non-negotiable (Constraint 5)

Per chat 2026-05-17 final verdict pass: *"Basic appointment reminders must work without AI."* Core deterministic path (booked confirmation / day-before reminder / same-day reminder / cancellation / reschedule handling / inbound confirmation classification / staff ambiguity queue) MUST function with AI fully disabled. AI composition is an ENHANCEMENT layer, not a dependency.

This protects against a real failure mode: an AI-dependent reminders system that breaks scheduling reliability when AI is degraded or disabled. The basic deterministic path keeps appointment reliability intact regardless of AI state.

---

## §5 Consequences

### §5.1 What Round 4 (Domain 4) MUST do

- Open with §2.21 read receipt + constraints honored statement
- Author SCHEDULING-domain slice of source-agnostic CNS action orchestration
- Honor §2.18 pre-brief Sections A-O
- Cite §2.19 Citation Map for 8 reliability guardrails; do NOT re-author
- Honor 10 composition invariants per §2.16
- Honor 5 hard constraints (anti-AI-clinical-invention / one-reply_policy-per-action / explicit thread_policy / contact-load budget / graceful degradation)
- Author 32-38 estimated Day 0 rules across 2 lanes (Lane 1 confirmation round-trip per DL-20 inv 40 + Lane 2 protocol-aware comms)
- Flag substrate gaps as Amendment J extensions (NOT new architecture in Round 4 rules)
- Close with Round 4 closing statement per §2.21

### §5.2 What Round 5/6/7 inherits

- CNS Action Envelope binds cross-domain (Round 5 encounter / Round 6 commerce / Round 7 documentation inherit the 18-field envelope when authoring their own action orchestration rules)
- Context Module Layer (6 module types) feeds all 3 packet projections (CNS Action / Recipient Communication / Provider Clinical Context)
- Amendment J 4-part substrate work parked for Round 5/7 evaluation
- §2.17 Provider Clinical Context Packet doctrine forward-references Round 5/7 binding

### §5.3 Drift prevention going forward

- §2.21 Round Kickoff Reading Discipline binds every future round to mandatory pre-reading
- §6 domain status table MUST READ column makes per-domain reading specific
- Round opening + closing templates create audit lineage for what was read + what was authored
- Post-mortem Patterns 9 (known-pillars-as-discoveries) + 10 (narrow-framing-creep) named explicitly to prevent recurrence

### §5.4 Costs

- Round 3.5 added ~460 lines of doctrine to 00_index.md + ~40 lines to system_map. Significant but bounded.
- 7 hours of multi-round dialogue 2026-05-17 to reach the source-agnostic reframe. This is the painful cost of starting too narrow.
- Future rounds inherit binding scope checks (mandatory pre-reading + opening/closing templates). Slight overhead per round; significant drift-prevention dividend.

### §5.5 What was NOT decided in Round 3.5

- Context Module Layer substrate home (Amendment J(a)) — deferred to Round 5/7 substrate evaluation per user direction `defer_to_5_7`
- `orchestration_action` envelope substrate extension shape (Amendment J(b)) — Round 5/7 substrate-decides
- Source-agnostic event normalization + arbitration + queue routing substrate (Amendment J(c)) — Round 5/7 substrate-decides
- Provider Clinical Context Packet assembly substrate (Amendment J(d)) — Round 5/7 owns shape
- Round 4 (Domain 4) rule authoring — paused per user direction; commit cadence `pause_first`

---

## §6 Alternatives Considered

### §6.1 Alternative 1 — Single Round 4 commit (doctrine + 32-38 rules in one pass)

Rejected. Would have:
- Required the 4 corrections + 5 patches + Patch 7 to be applied to rules AND doctrine simultaneously
- Made review surface too large
- Risked landing 32-38 rules under doctrine that hadn't been validated

Instead: Round 3.5 doctrine-only commit (option `pause_first`).

### §6.2 Alternative 2 — Fold §2.19 Citation Map into §2.16 envelope section

Rejected. The Citation Map binds 8 reliability guardrails across DL-14/15/16/18/20/21 + communications_topology + §1F/1G/1G.8/1G.11/1P/1Q.23 + 4h phase work. Most are NOT envelope concerns (contact endpoint resolution / delivery lifecycle / live-state revalidation / unsolicited inbound / task lifecycle / observability are pipeline + infrastructure concerns). §2.19 needed its own section to make scope clear.

### §6.3 Alternative 3 — New DL-23 Context Module Layer doctrine document

Deferred (NOT rejected). User direction 2026-05-17 chose `defer_to_5_7` — substrate distribution decision happens in Round 5/7 substrate evaluation, not Round 3.5 doctrine lock. Amendment J(a) parks this question. If Round 5/7 chooses consolidated DL-23, that DL gets authored then.

### §6.4 Alternative 4 — Treat Round 3.5 as "minor cleanup" and skip ADR

Rejected. Round 3.5 took 7+ hours, surfaced 2 new failure patterns (Patterns 9 + 10), and introduced binding cross-domain doctrine (CNS Action Envelope + Context Module Layer + Citation Map + Round Kickoff Reading Discipline). Treating it as "minor cleanup" would have lost the decision history + the drift-prevention scaffolding.

---

## §7 References

### §7.1 Locked doctrine cited

- [system_map_three_layers_60706286.plan.md](../../.cursor/plans/system_map_three_layers_60706286.plan.md) — Phase 1 hardening v10 entry
- DL-14 inv 16-22 (CNS bounded autopilot + orchestration_action + AI proposes / deterministic validates)
- DL-15 inv 11 (booking live-state revalidation)
- DL-16 amendments 41-43 (21-event client alerts / 32-seed outbound trigger registry / actor 4-tuple)
- DL-16 inv 3-39 (event envelope / payload minimization / consistency / reconciliation)
- DL-18 inv 6 + 9 + 22 (staff_capability + attestation envelope + atom-based authorization)
- DL-20 inv 5 + 18 + 33 + 40 (episode_catalog + cadence engine + confirmation_state + appointment_confirmation_event)
- DL-21 (federation topology / on-call coverage patterns)

### §7.2 Companion documents

- [00_index.md §2.14 – §2.21](../../.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md)
- [communications_topology.md](communications_topology.md)
- [scheduling_foundation_post_mortem_2026-05-17.md](scheduling_foundation_post_mortem_2026-05-17.md) — 8 original patterns; Patterns 9 + 10 added in scaffolding 3/3
- [user_knox_preferences_locked_2026-05-17.md](../../.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md) — 18 preferences
- [coherent_omni_architecture_pattern_2026-05-17.md](../../.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md) — 3-layer pattern
- [evolution_narrative.md](evolution_narrative.md) — Volume 1 (Phases 1-4H-pre)
- evolution_narrative_volume_2_2026-05-17.md — Volume 2 (Phase B.5 + Day 0 Build Contract + Rule Matrix Rounds 1-3.5) — written in scaffolding 3/3

### §7.3 Round 3.5 dialogue evidence (verbatim user direction)

User 2026-05-17 (Correction 4 prompt):
> *"like, i don't know if chat can see our doctrine or system map atm. but we NEED these addressed, if not already, and if not addressed now, planned for in future. we did a TON of work already on messaging rules."*

User 2026-05-17 (post-Round-3.5 scaffolding direction):
> *"after that, we will save an ADR or whatever is GODDAM NEEDED for me to not have to re-explaing. update the narrative arc. update the future watch points. whatever you have to do man to make sure we don't keep drifting, ignoring our previous hard work. what happened to the previous goddam adr, narrative arc, future watch points, etc etc?? like you completely forgot about those or something."*

User 2026-05-17 (closing principle):
> *"we already did this work."*

This ADR is the response to that direction. §2.21 Round Kickoff Reading Discipline + this ADR + Volume 2 narrative + post-mortem Patterns 9 + 10 form the drift-prevention scaffolding so Round 4+ cannot regress.

---

## §8 Round 3.6 addendum (2026-05-18)

Round 3.6 extends this ADR from "source-agnostic action orchestration doctrine lock" to explicit **parent-contract architecture lock**:

- Parent artifact: [`03_6_cns_orchestration_core.md`](../../.cursor/plans/designs/day_0_scheduling_rule_matrix/03_6_cns_orchestration_core.md)
- Index binding: [00_index.md §2.23](../../.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md)
- System map binding: Phase 1 hardening v11 entry in [`system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md)

Round 3.6 lock clarifies that:
- CNS is a first-class parent contract for all domains, not an appointment/reminder module.
- D4 is one source-domain emitter into the shared CNS resolver.
- Source-event bypasses must be explicit/named/justified/audited.
- CNS input readiness must be scored `ready | conditional | blocked`.
- Round 5 stays frozen until parent-contract conformance checkpoint and explicit approval.

## §8.1 Round 4.2C closure addendum (2026-05-18)

Round 4 closed as an inheriting scheduling slice (not a standalone reminder engine):
- D4 accepted as scheduling-originated candidate emitter into shared CNS resolver.
- D4 ownership boundaries are explicit; non-owned domains remain explicit seams.
- D4 stress PASS is design-conformance only; assumptions are integration gates.
- `00_index.md` §2.24 now locks reusable domain-slice template so future domains inherit CNS relationship rather than copy D4-specific rules.

## §8.2 Round 5 pre-open ontology addendum (2026-05-18)

To avoid drift in Domain 5, a bounded pre-open ontology lock was added:
- parent object: `service_occurrence`
- primary classifier: `service_occurrence_kind`
- clinical/documentation/legal projection: `encounter_view` (derived, not parent identity)
- modality as segment axis (not parent type enum)

This addendum preserves prior container work while preventing a fresh fixed-modality encounter model from being introduced in Round 5.

---

## §9 Decision summary in one sentence

**Round 3.5 locks source-agnostic CNS action orchestration as the binding architecture for Day 0 Scheduling Rule Matrix Domain 4 authoring and inherited by all future domains, via 6 doctrine sections (§2.14-§2.20) + binding round kickoff reading discipline (§2.21) that cite existing OMNI doctrine (DL-14 / DL-15 / DL-16 / DL-18 / DL-20 / DL-21 / communications_topology.md / 4h phase work) rather than re-authoring it.**

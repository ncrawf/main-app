# FUTURE ARC — Prioritization / Attention Economics (escalation fatigue, queue poisoning, reminder ranking, SLA decay, AI prioritization, attention-economics doctrine)

**Status:** RESERVED FUTURE ARC — 2026-05-12 capture (post-R6 follow-up to e1 preflight)
**Type:** Future doctrine arc. Not a preflight. Not a design. Not active doctrine. Preserves a real operational question for whenever first OMNI customer at scale starts feeling inbox noise + alert fatigue.
**Likely DL designation when activated:** unclear — possibly a sibling-level concern (cross-cutting prioritization runtime) rather than DL-level. Naming TBD when arc activates.
**Origin:** R1+R6 follow-up conversation 2026-05-12 evening — ChatGPT identified seam 5 (escalation fatigue / queue poisoning) as "a real ops killer" that emerges at scale.
**Folds in:** seam 5 (escalation fatigue / queue poisoning) from R1+R6 follow-up.
**Doctrine NOT introduced (binding):** this document does NOT introduce doctrine; it captures a future arc that will introduce doctrine + a runtime when activated.
**Companion docs:**
- [FUTURE_ARC_2026-05-12_federation_permeability_topology.md](FUTURE_ARC_2026-05-12_federation_permeability_topology.md) (A1)
- [FUTURE_ARC_2026-05-12_phi_surface_governance.md](FUTURE_ARC_2026-05-12_phi_surface_governance.md) (A3)
- [PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md](PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md) (e1 §26 cross-reference origin)

---

## §1 Premise

The single sentence:

> Prioritization quality matters more than messaging capability.

Once OMNI ships messaging + queue + reminder + escalation + AI Response Assist + missed-call surfaces + cross-channel coordination, the bottleneck stops being "can we send a message" and starts being "**which of the 47 things I'm seeing should I do first?**"

That bottleneck is **attention economics**. It is the doctrine of how OMNI ranks operator work and what happens when the system gets noisy.

### §1.A The failure mode that triggers this arc

ChatGPT's framing of the seam:

> too many reminders → too many callback tasks → too many ambiguous conversations → everyone claims/unclaims → inbox becomes noisy → staff stop trusting urgency indicators.

The point is the last line. Once urgency indicators become unreliable, the WHOLE prioritization layer collapses. Real-life manifestations:

- Front desk ignores the "urgent" badge because 80% of conversations have it.
- Provider misses an actually-urgent safety message because it's buried in a 60-row queue.
- Callback reminders pile up; staff snooze them all; the actual critical callback expires unhandled.
- Multiple staff claim the same conversation; multiple unclaim it; nobody owns it; it ages without resolution.
- The action-items inbox has 200 items; the staff member sorts by created-at and works the top of the list because that's the only honest sort.
- AI prioritization fires alerts that nobody reads.

**The substrate can be perfect and operations can still drown in noise.** This is the seam.

### §1.B Why this is a doctrine arc and not just a UI feature

A naive answer is "add a priority field" or "let staff sort by urgency." That doesn't fix the underlying economics — it just reshuffles the deck.

The doctrine arc has to answer harder questions:

- **What is urgency, computationally?** Static priority enum? Dynamic score? Multi-dimensional vector (clinical, financial, legal, time-decay)?
- **What's the cost of marking something urgent that isn't?** (alert-fatigue cost). What's the cost of NOT marking something that is? (missed-safety cost). These are asymmetric and need encoded weights.
- **Who or what is allowed to set priority?** Staff manually? Rules engine? AI? Different actors with different audit and trust profiles?
- **How does priority decay over time?** A 4-day-old "urgent" item — still urgent? Or noise?
- **How does priority interact with staff workload?** Hannah has 12 claimed items, Bob has 2 — should new urgent items go to Bob automatically? Or wait for Hannah to free up?
- **How does priority interact with federation?** Cross-entity priority? Cross-jurisdiction priority? (Per A1 federation arc.)
- **What's the audit trail when priority is overridden?** (Per gate-override flow in e1 §9.4(b) — analogous pattern.)

These are doctrine questions. They don't admit a "just add a column" answer.

### §1.C Why this is post-e1

This arc cannot fire until:

- Queue substrate exists (e1 §6.11).
- Callback reminders exist (e1 §6.16).
- Per-staff unread tracking exists (e1 §6.10 `last_read_at`).
- Off-duty cascade exists (e1 §17.5).
- Override-rate metric exists (e1 §19.C).
- Status chip projection exists (e1 §12).
- AI Response Assist exists (post-e1; deferred from e1).

Most of these land in e1 itself. The attention-economics arc fires after e1 ships and operational signal arrives.

**Operational signal triggers:** staff complaints about "too noisy inbox"; queue items aging past SLA; urgency-indicator distrust reports; missed-safety incidents traceable to prioritization collapse; AI-alert ignore rate > threshold.

---

## §2 Failure modes (the concrete shape)

The arc must address each of these directly when activated.

### §2.A Reminder fatigue

Staff accumulates 50+ callback reminders / patient_action_items. Reminders fire as notifications throughout the day. Staff stops reading them. Critical reminders get lost in the noise.

**Symptoms:** notification ignore rate climbs; "snooze all" behavior; reminder accumulation > N per staff.

**Doctrine question:** is the reminder model push or pull? Should staff have to claim a reminder to get notified? Should reminders auto-decay if not actioned?

### §2.B Queue poisoning

Front desk queue has 200 ambiguous conversations (unknown numbers, no obvious resolution, mix of spam + legitimate). Staff stops working from queue top-down because top is full of low-value items.

**Symptoms:** queue depth grows; claim rate falls; staff works "their own" conversations rather than queue; queue becomes a graveyard.

**Doctrine question:** is queue first-in-first-out? Or priority-ranked? Or staff-pull-driven (staff specifies what they want to work on)? What's the cleanup pattern for queue rot?

### §2.C Claim / unclaim thrashing

Multiple staff claim and unclaim same conversation. Nobody truly owns. Conversation ages without resolution.

**Symptoms:** participant-row churn; conversation `last_event_at` grows old; queue state oscillates between `claimed_by_staff` and earlier states.

**Doctrine question:** can claims expire? Should there be a "minimum claim duration" before un-claim allowed? Should the system suggest "you claimed this 4 hours ago, can you complete it?"

### §2.D Ambiguous-conversation accumulation

Conversations with `ambiguity_status ∈ ('shared','typo_suspected','reassigned_suspected','ambiguous')` accumulate because nobody wants to be the one who resolves the ambiguity (it's work). They sit in the queue.

**Symptoms:** ambiguity-status conversations > N% of queue; resolution rate falls.

**Doctrine question:** does the system surface ambiguity resolution work as its own queue? Does it auto-route to a "resolution specialist" role? Does it apply pressure (SLA on ambiguity resolution)?

### §2.E Urgency-indicator devaluation

Too many conversations marked urgent. Staff sees red badges everywhere. Stops treating them as signal.

**Symptoms:** urgency-indicator click-through rate falls; staff manually filters AWAY from urgent (because everything is urgent so nothing is).

**Doctrine question:** what's the urgency budget? Should there be a cap on % of queue that can be urgent at once? Should urgency decay automatically over time?

### §2.F AI prioritization noise

If AI marks items as urgent (per AI Response Assist arc post-e1), AI can flood with false-positives. Staff loses trust.

**Symptoms:** AI-marked urgency clickthrough lower than human-marked; staff explicitly disables AI prioritization.

**Doctrine question:** what's AI's authority on priority? Per DL-13 invariant 4 (AI confirmation NOT a gate), AI doesn't authoritatively decide priority. But AI can SUGGEST priority. How are suggestions presented? What's the false-positive budget?

### §2.G Off-duty cascade cascade

When staff goes off-duty (per e1 §17.5), claimed conversations release back to queue. If 5 staff go off-duty simultaneously (end of shift), 30 conversations dump into queue. Day shift arrives to a wall of work with no prioritization signal.

**Symptoms:** queue spike at shift boundaries; new shift starts overwhelmed.

**Doctrine question:** does the off-duty cascade pre-prioritize before releasing? Is there a "shift handoff" UI that helps the next shift triage?

---

## §3 Dimensions of attention economics

When the doctrine arc fires, it must specify how OMNI handles each dimension.

### §3.A Priority computation

**Static priority** — staff or rule sets a priority enum (`low`/`medium`/`high`/`urgent`/`safety_critical`).

Pros: simple, predictable, auditable.
Cons: doesn't decay; doesn't reflect context; subject to inflation (everything becomes urgent).

**Dynamic priority score** — computed from multiple inputs (clinical state, financial state, time-since-last-action, patient relationship state, SLA proximity, etc.).

Pros: reflects context; can decay naturally.
Cons: harder to audit; staff has less direct control; tuning is hard.

**Hybrid** — staff/rule sets baseline; dynamic factors adjust within bounds.

Likely the right answer. Doctrine arc must specify the schema.

### §3.B Priority decay

Time-based decay function: priority decreases over time unless re-asserted.

- Linear decay (urgency drops 1 level per N hours).
- Exponential decay (half-life of urgency).
- Cliff decay (urgency stays high until SLA breach, then decays to "overdue" state).
- No decay (urgency persists; staff must explicitly resolve).

Doctrine question: which model fits which use case? Different decay functions for clinical vs billing vs marketing?

### §3.C Priority categories (multi-dimensional)

Single priority enum may collapse different concerns. Multi-dimensional:

- **Clinical urgency** — safety / Rx-critical / clinical-required / routine.
- **Financial urgency** — payment-overdue / billing-exception / routine.
- **Operational urgency** — SLA-near-breach / SLA-breached / routine.
- **Patient experience urgency** — VIP / standard / no-priority.
- **Legal/compliance urgency** — legal-hold / compliance-review / routine.

A given conversation can be high in multiple dimensions independently. UI surfaces the dominant dimension; analytics rolls up across all.

### §3.D SLA logic

Service-level agreements per intent class / queue / brand / endpoint. Tracks:

- Time-to-first-response.
- Time-to-resolution.
- Breach thresholds.
- Escalation triggers (escalate to manager / CMO / on-call when SLA breached).

Substrate today: `external_conversation_queue_state.sla_breach_at` admits this column; logic for setting + escalating is future.

### §3.E AI prioritization scope

Per DL-13 invariant 4 + §1N.9 + e1 §18 cut: AI is NEVER a participant; AI never authoritatively decides priority. But AI can:

- Suggest priority with `ai_confidence` score.
- Rank queue items for human triage view.
- Detect patterns (e.g., "this patient's last 3 messages went unanswered for 4 days; suggest priority bump").

Doctrine must specify:

- AI suggestion vs decision boundary.
- Audit trail for AI-suggested priority.
- Human override required for priority elevation above a threshold.
- AI false-positive budget.

### §3.F Per-staff workload balancing

Hannah has 12 claimed items. Bob has 2. New urgent item enters queue. Who gets it?

Options:
- Round-robin (fairness).
- Capacity-aware (Bob gets it).
- Skill-aware (Hannah specializes; she gets it despite higher load).
- Patient-relationship-aware (if patient has prior Hannah relationship, route to Hannah).
- Hybrid (priority of item, capacity of staff, skill match, relationship preservation — weighted).

Doctrine must specify the weighting + admit per-org tuning.

### §3.G Operational ranking algorithms

The actual sort order on the inbox / action-items / queue surfaces. Currently `last_event_at DESC` per e1 §17.2. Future:

- Priority-weighted sort (urgency score × time-since × SLA-proximity).
- Per-staff-tuned sort (Hannah prefers chronological; Bob prefers urgency-first).
- Mode-aware sort (during shift handoff, prioritize cleanup; during normal ops, prioritize fresh).

### §3.H Attention budget enforcement

If urgency-indicator devaluation is a real failure mode, the system must enforce caps:

- % of queue allowed to be urgent at once.
- Per-staff urgency-set rate limits.
- Auto-decay when urgency budget breached.
- Staff visibility into "you've marked 14 items urgent today; the org average is 3."

This is the "no everything-is-urgent" doctrine clause.

### §3.I Federation-aware prioritization

Cross-references A1 federation arc. Per-mode prioritization questions:

- Mode 1 (shared local market): cross-location queue prioritization.
- Mode 2 (shared national brand): regional priority pools; cross-region escalation paths.
- Mode 4 (franchise ecosystem): per-tenant queues; no cross-tenant prioritization unless opt-in.

Doctrine must specify per-mode behavior.

---

## §4 Substrate building blocks already present

OMNI is partially aligned for this arc.

Existing primitives:

- **`external_conversation_queue_state`** (e1 §6.11) — admits state machine (`delivered_to_queue` / `unread_by_queue` / `seen_by_queue_member` / `claimed_by_staff` / `completed` / `escalated` / `overdue`); admits `sla_breach_at` column; no priority field yet.
- **`patient_action_items`** (existing per §1G.11) — admits action item state; future extension via §6.16 callback reminders polymorphic target; no priority schema yet.
- **Per-staff `last_read_at`** (e1 §6.10) — admits per-staff unread tracking; enables "you have N unread" workload-awareness signal.
- **Override-rate metric** (e1 §19.C) — admits anomaly detection on override-frequency-per-staff; pattern extensible to priority-set-rate-per-staff.
- **DL-12 invariant 21** (patient notification preferences + criticality override) — admits criticality-override semantics already; future arc extends to operator-side prioritization.
- **DL-12 invariant 30** (queue-routed work state machine) — defines the state machine.
- **DL-13 invariant 3** (settings precedence six-level) — layer 2 (safety/clinical criticality) admits override of lower layers; foundational primitive for urgency-override semantics.
- **Primitive #11** (AI orchestration runtime) — reserved; admits AI prioritization when arc activates.
- **`audit_events`** — admits priority-change auditing.
- **External-line e1 gate-override flow** (§9.4(b)) — analogous pattern for "explicit reason + audit + anomaly detection" that priority elevation will mirror.

**Substrate is largely ready.** Priority column / score field would be a small addition. The work the future arc does is **doctrine + runtime + UI**, not substrate.

---

## §5 What this future arc must specify when it activates

### §5.A Priority schema

- Single enum vs multi-dimensional vector.
- Decay function per dimension.
- Permitted setters (staff / rule / AI suggestion → human decision).
- Audit trail for every priority change.

### §5.B SLA configuration

- Per-intent-class / per-queue / per-brand / per-endpoint SLA thresholds.
- Escalation chains (claimed-staff → queue manager → on-call → CMO).
- SLA breach reporting.

### §5.C AI prioritization runtime

- AI's role in prioritization (suggest, not decide).
- AI confidence threshold for visibility.
- Audit + false-positive feedback loop.

### §5.D Workload balancing algorithm

- Capacity-aware routing.
- Skill-aware overrides.
- Per-org tunability.
- Per-staff workload caps.

### §5.E Attention budget enforcement

- Urgency caps + auto-decay.
- Per-staff urgency-set rate limits.
- Operational ranking algorithms.

### §5.F Federation-aware prioritization

- Per-mode behavior (Mode 1 / 2 / 3 / 4 / 5).
- Cross-references A1 federation arc.

### §5.G UI surfaces

- Prioritized inbox / queue / action-items views.
- Shift handoff surfaces.
- "Why is this priority?" transparency.
- Staff-tuned sort preferences (within bounds).

---

## §6 What this future arc does NOT specify now

- No priority column added in e1.
- No SLA enforcement in e1.
- No AI prioritization in e1.
- No workload balancing in e1.
- No attention budget caps in e1.
- e1 ships flat-by-recency queue + ops triage UI with no smart ranking.

The substrate admits future addition without DDL contortion. The doctrine arc fires when scale operational signal arrives.

---

## §7 Activation triggers

When any of these arrives, the arc activates:

- First OMNI customer at scale reports inbox noise / alert fatigue.
- Queue depth / queue age metrics exceed thresholds for > N customers.
- Missed-safety incidents traceable to prioritization collapse.
- AI Response Assist arc lands and surfaces AI-prioritization-noise question.
- Federation arc (A1) lands and forces cross-mode prioritization design.
- Staff churn data correlates with inbox-overwhelm signal.

Until one of these hits, the arc stays reserved. **Do not pre-build.**

---

## §8 Operational scenarios that exercise this arc

### §8.A The 9pm overflow

End of day. Five staff go off-duty. Their claimed conversations (30 total) cascade back to queue per e1 §17.5. Day shift arrives at 7am to a queue with 30 stale items.

**Without prioritization runtime:** day shift works chronologically, takes hours to catch up, urgent items may sit for hours.

**With prioritization runtime:** items are pre-ranked. Day shift sees the urgent items at the top. Routine items can be worked in batch later.

### §8.B The Friday avalanche

Friday 5pm: weekly billing runs fire reminder messages. Friday 5:01pm: 200 callback reminders land in staff action-items inboxes. Most are routine; 3 are clinical-critical.

**Without prioritization:** clinical-critical items buried in 200-item list; staff workshops the top 20.

**With prioritization:** clinical-critical items surface visibly; routine billing reminders sort below.

### §8.C The new-staff overwhelm

Hannah joins. Day 1 she logs in and sees 47 conversations across her brand's queues. Doesn't know which to start with.

**Without prioritization:** Hannah works whatever is on top; misses urgent items.

**With prioritization + workload balancing:** system routes her starter set based on her training / capacity; explains why.

### §8.D The ambiguity backlog

Front desk queue has 80 conversations with ambiguity status (shared phones, suspected reassignment, unknown contacts). Nobody resolves them because resolution is work.

**Without prioritization:** ambiguity backlog grows; resolution rate is < 5% per day.

**With prioritization runtime:** ambiguity resolution surfaces as its own work category with SLA + claim pattern.

### §8.E The urgency inflation

Staff has been marking 60% of their conversations as "high priority" because it surfaces them better in their view. After 2 months, "high priority" is meaningless.

**Without enforcement:** the indicator dies.

**With attention budget:** staff is capped at 15% of their claimed conversations marked above-routine; system warns when approaching cap.

---

## §9 Cross-references

- **DL-12 invariant 21** — patient notification preferences + criticality override; doctrinal foundation for criticality semantics; future arc extends operator-side.
- **DL-12 invariant 30** — queue-routed work state machine; substrate primitive.
- **DL-13 invariant 3** — settings precedence layer 2 (safety/clinical criticality); doctrinal foundation for urgency-override.
- **DL-13 invariant 4** — AI confirmation NOT a gate; doctrinal foundation for AI-suggest-not-decide pattern.
- **Primitive #11** (AI orchestration runtime) — reserved; admits AI prioritization.
- **e1 preflight §6.11** — `external_conversation_queue_state` substrate.
- **e1 preflight §6.16** — callback reminders via `patient_action_items`.
- **e1 preflight §17.5** — off-duty cascade.
- **e1 preflight §19.C** — override-rate metric pattern (extensible to priority-set-rate).
- **MAIN §1G.6.2** — queue routing state machine doctrine.
- **MAIN §1G.11** — patient_action_items.
- **MAIN §1D.3** — staff notification preferences subordinate to capability + on-call + escalation.
- **A1 federation arc** — cross-mode prioritization.
- **A3 PHI surface governance arc** — notification preview content vs priority surfacing.
- **e1 preflight §26** — Operational seams cross-reference.

---

## §10 Future preflight named

When activation triggers (per §7), the future arc's preflight:

**Proposed filename when activated:** `.cursor/plans/PREFLIGHT_<future-date>_prioritization_attention_economics.md`

**Proposed structure:**

1. Substrate-reality audit (what's already landed since e1; queue + reminders + override-rate metric + AI runtime if any).
2. Doctrine inheritance (DL-12 + DL-13 binding).
3. Scope partition.
4. Out-of-scope.
5. Priority schema design.
6. SLA configuration.
7. AI prioritization runtime.
8. Workload balancing algorithm.
9. Attention budget enforcement.
10. Federation-aware prioritization (per A1 cross-reference).
11. UI surfaces.
12. Substrate migration sketches (priority column / score field / SLA config tables / etc.).
13. Migration sequencing.
14. Watch zones (urgency inflation, AI false positives, claim thrashing, ambiguity backlog).
15. Verification gates.
16. R-arc pressure-test plan.
17. Cross-references.

R-arc would attack:

- R1: priority schema sufficiency (does it admit clinical + financial + operational + patient-experience + legal axes?).
- R2: decay function correctness (each axis decays appropriately).
- R3: AI prioritization scope (suggest-not-decide boundary holds; false-positive budget enforced).
- R4: workload balancing fairness vs capacity vs skill weighting.
- R5: attention budget enforcement (urgency-set cap; auto-decay; staff visibility).
- R6: UI surfaces (transparency: "why is this priority?" answers).
- R7: federation-mode behavior (A1 cross-arc).
- R8+ — TBD.

---

## §11 Status note

This document is a **RESERVED FUTURE ARC** as of 2026-05-12. It captures the prioritization / attention economics question that emerged from R1+R6 follow-up on the e1 external-line preflight (seam 5 — escalation fatigue / queue poisoning). It is NOT:

- Active doctrine.
- A preflight.
- A binding design.
- A scope-creep target for e1.

It IS:

- A preserved question.
- A failure-mode catalog (queue poisoning, urgency-indicator devaluation, claim thrashing, AI prioritization noise).
- A list of substrate building blocks already aligned.
- A future preflight name + structure for activation.

**Activation trigger:** first OMNI customer at scale reports inbox noise / alert fatigue; OR queue depth / queue age metrics exceed thresholds; OR missed-safety incidents traceable to prioritization collapse; OR AI Response Assist arc surfaces AI-prioritization-noise question.

**Companion future arcs** captured the same evening (cross-references):

- [A1 — Federation / Permeability / Topology](FUTURE_ARC_2026-05-12_federation_permeability_topology.md)
- [A3 — PHI Surface Governance](FUTURE_ARC_2026-05-12_phi_surface_governance.md)

**End of A2 prioritization/attention-economics future arc capture.**

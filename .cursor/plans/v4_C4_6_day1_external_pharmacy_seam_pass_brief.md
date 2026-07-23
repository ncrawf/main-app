# v4 — C4.6 · Day-1 External Pharmacy Seam Pass — BRIEF (next operator-controlled pass)

Document type: `architecture_pressure_test` (bounded product-directed pass **brief** — a durable capture of the Day-1 build target so it does NOT live only in chat; NOT the pass itself, NOT a spine, NOT a contract, NOT a synthesis).
Authority: `analysis_nonbinding` (`GRD-036` — capture broad, promotion gated). **Binds nothing. Promotes nothing. Pre-spine / pre-v4.**
Status: `not_started · operator_controlled · does_not_auto_start · pending_G2A_closure` (Knox+Nick direction 2026-07-23 PM; this brief is a **durable capture of what Day-1 must build**, authored so the next agent boots into the concrete target instead of re-concocting it from an evaporated chat thread. It **does not authorize** starting G3 — the pass runs only on an explicit operator decision, after G2A closes.)
Owner (custody of the record): Opus · Reviewers: Nick (operator) + Knox (independent) · Direction author: Knox (relayed by Nick).
Parent: `v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md` (Gate-0 charter). Sibling evidence: `v4_C4_6_G2A_external_reality_map_2026-07-22.md` (external reality; the map this build target stands on).
Manifest action: `add_tier2` · Review gate: `user_knox_required` · Read-graph: sub-route #9m-b (added same-pass).

> **★ WHY THIS FILE EXISTS (read first).** The whole C4.6 arc mapped external reality (G2A) and the residual moat. The operator's standing fear: *"if the next agent still doesn't know what to build for Day 1, we were idiots — Knox's Day-1 instructions were given in a chat thread and will evaporate."* This file is the antidote. It converts Knox's Day-1 direction (2026-07-23 PM) into **durable repository memory**. A booting agent that reaches C4.6 should read this and know **exactly what the first shippable external-pharmacy product is** — without re-deriving it. Conversation is execution context, not canonical memory (`06` leak-at-pivots law); this file is the canonical memory.

> **★ THE FEAR ANSWERED (Knox, verbatim intent).** *"OMNI can work with an external pharmacy long before it becomes a pharmacy network."* The safeguards (no-god-domain, no-fake-acceptance, no-invisible-incentives, no-clinical-drift) do **not** prohibit Day-1 operation. They define what Day-1 must say **honestly** while it operates. **Architecture supports a real external pharmacy on Day 1: YES. Current build does it properly today: NO — build gap, not architectural prohibition** (repo still has a hardcoded fax `248-934-1307`, `pharmacy_send_rx` schema-only, no pharmacy counterparty model, no routing engine, thin notification events). The constitutional model is ahead of the implementation; this pass closes the gap for **one** seam.

---

## §1 — Keeper laws (do not flatten, do not violate)

- **N-pharmacy STRUCTURALLY from Day 1 — but NOT N deep integrations at launch.** The launch shape is `1 deep integration + 1 operational fallback + 2–3 governed manual bridges`. That is not cheating; it is how the product proves the **reusable seam** before pretending it has a network.
- **The "handcuffs" prevent bad software, not fast software.** Enforce all of:
  - no **ACK = acceptance** (transport receipt ≠ the pharmacy committing to fill);
  - no **timeout = refusal** (silence is not a decline);
  - no **automatic rerouting after silence** (reroute only on an authorized, explicit signal);
  - no **price = clinical recommendation** (cost/economics may inform routing, may NOT author the clinical decision);
  - no **payment = fulfillment** (money moving ≠ medication handled);
  - no **refund erases the original failure** (remedy does not delete the consequence record);
  - no **scalar "best pharmacy"** (no single quality number that collapses admissibility/safety distinctions);
  - no **patient marked complete while a known consequence remains** (no silent closure over an open harm/obligation).
- **The critical external seam is NOT an API. It is a bilateral definition of execution obligation (rung 5).** *A webhook may carry the evidence; the contract defines what the evidence means.*
- **No Pharmacy god-domain.** Do not build a central object that pretends to own clinical authorization + licensure + payment + fulfillment + delivery + monitoring + recalls + remedy. The pieces already exist (see §7); the counterparty profile tells those owners **how to compose**, it does not require a new empire before we ship.

---

## §2 — What Day-1 does and does NOT mean

**Day 1 does NOT mean:** a national pharmacy network · five deep API integrations · real-time inventory everywhere · autonomous pharmacy↔OMNI agents · a settled marketplace business model · contractual proof accepted by an industry · the 10BN network already existing.

**Day 1 MEANS:** *One practice can prescribe through OMNI to one real external pharmacy, manage the whole episode without losing the patient, and safely route to one fallback when necessary.* That is completely achievable.

---

## §3 — Correct Day-1 topology

**One primary pharmacy** — a bilateral partner with: a contract; a known operating channel; documented formulary/capability; defined billing mode; named contacts + escalation; response expectations; clarification/rejection/cancellation procedures; fulfillment + shipping status; and **evidence OMNI can ingest.** Connection MAY be: API · NCPDP/Surescripts · LifeFile or other portal · structured fax · **staff-mediated attested bridge.** *(G2A confirmed real pharmacy systems can expose API validation + workflow status — while correctly concluding those signals alone do NOT prove contractual custody.)*

**One fallback pharmacy** — not necessarily deeply integrated. Needs: known admissibility; a usable portal/fax/phone workflow; a defined fallback procedure; and a safe cancellation/reissue path.

**The other pharmacies** — OMNI is structurally N-pharmacy from the beginning, but does not need 4–5 deep integrations at launch. Launch = `1 deep + 1 operational fallback + 2–3 governed manual bridges`.

---

## §4 — The minimal Day-1 product (provider stays inside OMNI)

The provider should be able to, without leaving OMNI:
1. Select or confirm the clinically authorized medication + formulation.
2. See the admissible pharmacy route or configured default.
3. See relevant patient cost + practice economics **without those signals modifying the clinical decision**.
4. Sign the prescription.
5. Dispatch it through the available adapter.
6. See **distinct** states (see §5).
7. Respond to pharmacy clarification without opening unrelated systems.
8. See a **named owner + deadline** whenever the episode stalls.
9. Safely cancel and reroute **when authorized**.
10. Keep the patient informed with an **honest projection**.

**Pharmacy-side work need NOT be machine-native on Day 1.** A staff member may read a portal, take a call, or inspect a fax receipt and record: *what the pharmacy said · who said it · when · through which channel · what evidence supports the state change.* That is a **first-class attested bridge, not an embarrassing hack.** What OMNI may NOT do: translate "fax sent" → "pharmacy accepted", or "processing" → "the patient's medication is handled."

---

## §5 — The distinguishable lifecycle states (Day-1 must keep these distinct)

`dispatched` → `rail-delivered` → `accepted for review` → `clarification requested` → `patient-specific order accepted` → `processing` → `dispensed` → `shipped` → `delivered` → `monitoring/continuation due` → `exception/reopened`.

Transport acknowledgment, review, and **contractual acceptance** must remain **distinguishable** at all times. (This is the operational expression of the §1 handcuffs.)

---

## §6 — The ONE thing Day-1 needs contractually (rung 5)

The pharmacy agreement / operating addendum must answer (this **is** rung 5 — the bilateral execution-obligation definition):
- What constitutes **acceptance for review**?
- What constitutes **acceptance of the actual order**?
- May the pharmacy later **decline**?
- Which **exceptions** must be reported? Within what **period**?
- What happens if it **cannot fulfill**?
- How is a **clarification** requested?
- How does **cancellation** become effective?
- How are **partial fills** handled?
- How is a **shipment or pickup** evidenced?
- **Who remains responsible** for unresolved patient consequences?
- What **data and quality evidence** can OMNI rely on?
- What **ends the obligation**?

An **attested manual bridge** is an accepted **degraded adapter** when it preserves: **actor · time · source · evidence · authority · next obligation.**

---

## §7 — Existing architecture already provides the pieces (compose, don't mint)

- **OFC** — the fulfillment lifecycle (`fulfillment_order_kind = rx`).
- **Federation** — the external pharmacy relationship + authority.
- **D6** — pricing and money.
- **Settings** — definitions and policy.
- **CNS** — coordination.
- **D7** — evidence.
- **Care** — clinical meaning.
- **Accountability** — harm and remedy.

The **counterparty profile** tells those owners how to compose for a pharmacy. It does **not** require a new domain/empire before we ship. (Consistent with the C4.6 charter core hypothesis + G2A frozen-matrix claim 1: pharmacy is not a new truth-owning domain.)

---

## §8 — The Day-1 acceptance test (the first pharmacy pilot passes ONLY when…)

1. The provider performs routine work **without leaving OMNI**.
2. OMNI sends a **legally valid prescription** through the real rail.
3. Transport, review and **contractual acceptance remain distinguishable**.
4. Every clarification/exception creates a **named next actor + deadline**.
5. Cancellation + fallback do **not** create duplicate active prescriptions.
6. The patient sees an **honest status**.
7. **Payment and care status remain separate**.
8. **No known failed prescription becomes silently closed.**
9. Staff burden is **measured against** the current portal/fax/text workflow.
10. The pharmacy **confirms OMNI's representation matches what it actually did.**

*The first pilot does not need to prove a national acceptance network. It needs to prove a single external seam better than the current operating mess.*

---

## §9 — The sequencing law (1BN product ≠ 10BN network; they do not compete)

- **The 1BN product creates the transactions from which the 10BN network may emerge.**
- **1BN product** = the best care-and-business operating system for specialty + cash-pay practices, **including excellent external-pharmacy execution.**
- **10BN company** = an operated institution through which independently governed parties **accept, execute, repair and prove** consequential commitments **without becoming one organization.**
- The 10BN company is **NOT a prerequisite for Day 1.** It is the possible consequence of repeatedly delivering Day 1: *great product → real prescriptions → real external seam → accepted obligation → trusted proof → second pharmacy joins more cheaply → repeatable participation → network.*
- **Do NOT wait for G11, a national protocol, a neutral marketplace, or a complete institutional business model before making OMNI useful to a real partner practice.**

---

## §10 — The proposed pass (operator-controlled; DOES NOT auto-start)

**Name:** `C4.6 Day-1 External Pharmacy Seam Pass`. **The next substantive pharmacy work should be THIS — a product-directed pass — not more abstract market research.**

**Fixture (one concrete episode end-to-end):**
- one **named primary** pharmacy;
- one **fallback** pharmacy;
- one **legally unambiguous patient-specific prescription**;
- one **clinic-bill OR patient-bill** path;
- one **clarification**;
- one **rejection or stockout**;
- one **safe fallback**;
- one **delivery**;
- one **monitoring obligation**.

**Run G3–G7 as one bounded product package:**
- **G3** — actor / authority / custody map;
- **G4** — lifecycle + failure scenarios (operational failures, degraded modes);
- **G5** — minimum object / home decisions;
- **G6** — deterministic admissibility + route policy;
- **G7** — adapter + portal/fax/**manual-degradation** design.

**Then G8–G10 produce:**
- **G8** — Day-1 build slice (build impact);
- **G9** — contract / operating requirements (the §6 bilateral acceptance terms);
- **G10** — measured real-world pilot charter.

**No requirement to solve a national network before the first pharmacy works.**

---

## §11 — Closure sequence + guardrails (Knox direction 2026-07-23 PM)

**Sequence (operator + Knox controlled):**
1. G2A fidelity repair (F1–F3) complete + pushed — **DONE** (`analysis/c4-6-g2-external-reality-map`, `0ad1f05`, remote-verified).
2. Knox remote-verifies + **closes G2A**.
3. Merge accepted G2A branch to `main`.
4. Preserve the residual-moat thesis on the **separate strategy branch** as a `strategic_capture` addendum (NOT "doctrine" in title/status) — *see the note in §12; this is being handled on `strategy/omni-residual-moat-doctrine` by a separate agent and must not be forked.*
5. **STOP for Nick + Knox review.**
6. **Do NOT auto-start G3** — present this Day-1 Seam Pass as the recommended next **operator decision**.
7. Run **G2B** later as a **narrow temporal addendum** to the FDA post-meeting record — do NOT let it become another giant landscape pass.

**Hard stops for this brief:** no build, no schema, no contract authoring, no C5/spine/Reactor, no auto-start of any gate. This file is capture + proposal only.

---

## §12 — Cross-references + open routing note

- **External reality this stands on:** `v4_C4_6_G2A_external_reality_map_2026-07-22.md` (read-graph #9m-a) — incumbents robustly supply rungs 1–3 + variable rung-4; API docs reach rung 3–4/prov-4.5, not contractual rung-5; the seam OMNI must earn is portable custody + consequence-continuity + admissibility + credible neutrality.
- **Residual-moat thesis (separate, non-competing):** being captured on branch `strategy/omni-residual-moat-doctrine` (file currently `v4_C4_residual_moat_and_network_formation_doctrine.md`). **★ OPEN ROUTING ITEM:** Knox's 2026-07-23 PM direction is to **rename/downgrade** that artifact to `v4_C4_pre_strategic_bet_memo_rx_network_formation_addendum.md` (`strategic_capture` / `analysis_nonbinding` / `strategic_hypothesis_captured · pending_C4_6_G11_G12 · not_promoted`; parent `v4_C4_pre_strategic_bet_memo_ai_native_care.md`) and to preserve the thesis + the anti-flattening rule verbatim. That change must be applied **on the strategy branch by the agent that owns it** — it was NOT applied from the C4.6 branch to avoid forking live work.
- **Anti-flattening rule (carry verbatim into the strategy addendum — do not compress here either):** *"The candidate thesis is an operated cross-authority conformance, routing and continuity network for consequential care, seeded by a first-party vertical product and admitted only through external contractual reliance and measured operation."* Do NOT compress it into "pharmacy marketplace," "smart routing," "e-prescribing network," "neutral switch," "healthcare Palantir," or "agent-to-agent protocol."

---

<!--
Document identity (passport):
 type: architecture_pressure_test (Day-1 product-directed pass BRIEF — durable capture of the build target; not the pass, not a spine/contract/synthesis)
 authority: analysis_nonbinding (GRD-036 capture-broad-promotion-gated) · agent_read_rule: consult_if_routed · review_gate: user_knox_required
 status: not_started · operator_controlled · does_not_auto_start · pending_G2A_closure (Knox+Nick direction 2026-07-23 PM)
 parent: v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md (Gate-0 charter)
 sibling: v4_C4_6_G2A_external_reality_map_2026-07-22.md (external reality map, read-graph #9m-a)
 catalog row: .cursor/plans/doctrine/01_master_corpus_catalog.md (appended same-pass)
 read-graph: sub-route #9m-b (04_manifest_read_graph.md)
 hard-stops: no build/schema/contract/C5/spine/Reactor · no auto-start of G3 or any gate · capture + proposal only · subordinate to checkpoint #15
 purpose: convert Knox's 2026-07-23 Day-1 direction from evaporating chat into durable repository memory so the next agent boots into the concrete Day-1 build target
-->

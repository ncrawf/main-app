# v4 — INS-G2 — Operating Composition & Sufficiency — GATE-2 RESULT

Document type: `analysis` / `architecture_gate_result` (the Gate-2 output object under Gate-1b §13.3; **not** a contract, **not** a schema, **not** spine prose, **not** a new truth-owning domain)
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing. Proposes routing only.
Status: **ARTIFACT MATURITY ONLY** — `landed_on_branch · analysis_nonbinding · not_promoted · no_contract_mutation · no_shared_surface_written`. **Gate-2 execution and acceptance state live in the single state table below, which is this file's only current-state surface** (`D0CKPT-GRD-004`; `D0CKPT-GRD-003` intra-artifact specialization).
Domain(s): `insurance_payer_oop` · `d6_commerce` · `care_operating_model` · `clinical_memory` · `rbac_authority` · `federation` · `cns_coordination` · `accountability_architecture` · `architecture_governance` · `cross_cutting`. **No new domain is proposed.**
Lifecycle role: the Gate-2 result — the fourteen required outputs of Gate-1b §13.3, constructed against the accepted Gate-0 / Gate-1a / Gate-1b estate, with external-comparator pressure performed rather than routed.
Source-of-truth relationship: consumes the carried estate read-only. **Where this result and a source carrier differ, the carrier controls.** The Gate-1a **raws** control over the Gate-1a adjudication. Gate-1b §13.3 at blob `2e6a423cfae83203d4b4a1668224890043bfa12a` is the governing execution contract.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** — catalog row + read-graph disposition drafted at §17, **owed at the integrator transaction and NOT landed here** (`PRESPINE-PHASEA-INTEGRATOR` is vacant).
Review gate: `user_knox_required`

Read order: read-graph route `9p` (Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → Gate-1b carrier → Gate-2 brief) → **this**.

---

> ## ★ ONE CURRENT-STATE SURFACE — this table, and nowhere else
>
> | Field | Value |
> |---|---|
> | Gate-2 state | **`constructed · builder_verdict_issued · provisional_by_construction`** — the fourteen §13.3 outputs are produced |
> | Builder's verdict | **`SURVIVES_WITH_NAMED_RECONCILIATIONS`** — reconciliations enumerated at §15, in the vocabulary the brief §5 fixed in advance |
> | Why provisional | **C3.9 does not exist yet** (`shell_pending_population`, re-verified 2026-08-09). Per brief §6 Barrier 2 a Gate-2 result produced before C3.9 exists is provisional **by construction** and must say so in its §13.3 item-8 receipt — it does, at §8 |
> | Final-acceptance blockers | unchanged and owned by the **Gate-2 brief** state table: C3.9 populated → consumed → affected traces rerun or reconciled → **`E2` last, unweakened** |
> | `E2` | **not run.** It is a two-stage acceptance blocker, operator-controlled; the trigger creates a blocker, it does not auto-launch an agent |
> | Trace suite | **constructed and evaluated on paper against the architecture.** No software was executed, no fixture was run against an implementation. Gate-0's L1 limit still governs |
> | Shared control-plane surfaces | **0 touched.** All routing at §16/§17 is PROPOSED and integrator-owned |
> | Independent adversary | **none.** Single-author construction; §14's comparator claims are external-evidence-grade, not promotion-grade |
>
> **No other section in this file states current state.** If you find state asserted elsewhere here, it is a defect — correct it here and delete it there.

---

## §0 — Object, method and source posture

### §0.1 What this object is
The **result** object for `INS-G2-OPERATING-COMPOSITION-AND-SUFFICIENCY`. Gate-1b §13.3 (B) names fourteen required outputs; the Gate-2 brief carries them **by source pin rather than copy** and adds an acceptance floor at its §5. This file discharges the fourteen and reports against the floor. It does not restate the brief, does not re-derive the Gate-1b architecture kernel, and does not reopen the two-axis verdict.

### §0.2 Method, stated so it cannot be overread
Three activities were permitted at Barrier 1 and all three were performed: **architecture construction**, **comparator research**, **constructed-trace work** — plus kill-condition development and a provisional assessment. What was **not** performed: fixture execution against an implementation, `E2`, C3.9 consumption, any promotion, any contract or schema authorship.

**Trace semantics, exactly.** A trace here is a *constructed* scenario walked against the accepted architecture with its verdict criterion fixed **before** the walk (`M-706`). `NO_DEFECT` means *no defect was exposed by this construction* — never *the architecture is proven correct*. §16 of the Gate-1b carrier and Gate-0's L1 limit both still govern: **every claim in this arc remains paper until something is built and run.**

### §0.3 Source posture — strict depth labels
Depth vocabulary as Gate-1b §0.3: **read fully** · **read load-bearing sections** · **consulted** · **searched** · **not inspected**.

**READ FULLY:** `v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` (1,252 lines, at the pinned blob) · `v4_INS_G2_operating_composition_and_sufficiency_brief_2026-08-08.md` · `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md` · `AGENTS.md`.

**READ LOAD-BEARING SECTIONS:** `04_manifest_read_graph.md` Tier-0 + routes `9m`–`9q` · `06_guardrail_antipattern_digest.md` rows `D0CKPT-GRD-001`–`005` · `03_decision_extraction_ledger.md` `D0CKPT-DEC-009` · `05_supersession_conflict_ledger.md` `D0CKPT-SUP-002` · `agent_work_protocol.md` §5/§9 · `v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` §5/§6/§6.1/§7 · `future_work_registry.md` `FWREG-010/017/018/020` · `08_open_review_queue.md` `REV-159/160/185`.

**READ FULLY — implementation (SQL/TS bodies read directly):** `supabase/migrations/20260504120000_intake_foundation_v1.sql` §8 `eligibility_decisions` DDL L250–270 · `lib/entities/insurance-details.ts` (41 lines).

**SEARCHED (absence claims scoped to this radius):** `has_insurance|insurance_carrier|self_pay_willingness` across `supabase/` (**zero hits — unchanged from Gate-1b**) · `patient_insurance_details|payer_eligibility_documents` across `app/` (**zero hits**) · `is_active|eligibility_status` in the two insurance TS entities (**zero hits — no coverage-semantic consumer found**).

**EXTERNAL — primary sources fetched this pass (§14):** 14 CFR 121.533 · 121.557 · 121.601 · 121.627 · 121.663 (eCFR developer API, enhanced content, 2025-01-01 point-in-time) · JP 1 *Doctrine for the Armed Forces of the United States* (full text) · Palantir Foundry Ontology + Object-Backend platform documentation.

**NOT INSPECTED — named:** the three preserved Gate-0 subagent raws (route `9p-i`, conditional — no consuming question here required a primary submission) · Gate-0 carrier and Gate-1a raws in full **this pass** (their accepted results are consumed through the Gate-1b carrier and the brief's §1 kernel; where they differ the raws control and this result claims nothing against them) · C4.6 `C12` body · Accountability/GRR §§12–16 · off-repo `~/.cursor/plans/` controlling plan.

**Environment limitation (`D0OPER-DEC-004`).** `~/.cursor/plans/` **does not exist in this environment**. The off-repo controlling plan could not be inspected. Per `AGENTS.md`, this is reported rather than treated as verified coequal state; the in-repo `AGENTS.md` checkpoint-pointer block and read-graph Tier-0 #15 **agree** (structurally verified by `node scripts/check-checkpoint-pointer.mjs`, pass) and were relied on.

### §0.4 Activation freshness check (brief §6, required at activation)
Every named input re-verified against `main @ 9a6e7de`:

| Input | Maturity at Gate-1b | Maturity now | Δ |
|---|---|---|---|
| Gate-1b §13.3 contract | blob `2e6a423c…` | **byte-identical at HEAD** | none |
| C3.9 | `shell_pending_population` | `shell_pending_population` | none |
| C4.5 | `gate_0_charter_accepted · full_pass_not_started` | unchanged | none |
| C3.6C `source_authority_map` | `populated_G1_pending_review` | unchanged | none |
| `REV-160` / `REV-185` | update proposed | **INS-G1B carry LANDED in both rows** | ✅ carried |
| `INS-HAZ-COVSURF` | proposed, unlanded | **`FWREG-020` exists carrying clauses 1–6** | ✅ carried |
| Gate-2 parent open-review row | proposed | **`D0INS-REV-002` exists** | ✅ carried |
| Three coverage surfaces | 3 committed, none canonical | unchanged; **still zero `patients.*` insurance columns in `supabase/`**; **no coverage-semantic consumer found in `app/`** | none |
| PR #9 governance rule | may have landed | **not landed** — parked, still open | none |

**Consequence:** the Gate-1b cross-arc carry (§15.1 parts A–C) **did land**, so this result consumes carried state rather than proposed state. Nothing that Gate 2 relies on changed maturity. **No input required re-statement before reliance.**

### §0.5 One byte-level correction to the brief
The Gate-2 brief §2 and the Gate-1b §15 durability map both describe the residual ownership matrix as **"21 rows."** The matrix at Gate-1b §8.2 contains **23 rows** (carrier lines 626–648). §5 below drives all 23. `no_semantic_architecture_change`; recorded so the count is not propagated wrongly a third time.

---

## §1 — OUTPUT 1 · The care-financing operating-profile map

**What it is.** A **noncanonical composition and read contract** over native truths — the concrete form of Gate-1b §4.4 and §8.3. It is a *product architecture*, not a domain: it owns no source position and has no universal commit authority, and it is nevertheless first-class (`no domain ≠ no product`).

**The map has four planes and exactly one legal direction of authority.**

| Plane | Contents | Who owns it | Write direction |
|---|---|---|---|
| **P-SRC · source positions** | payer coverage/benefit/formulary positions · determinations · authorizations · guarantees · sponsorships · loan approvals · pharmacy availability and offers · patient consent/preference/affordability · D6 orders, entitlements, money-state, `financing_arrangement` · Care/CM clinical assertions | **native owners and external principals**, unchanged | each owner writes its own; **the profile never writes here** |
| **P-XCH · governed exchange** | crossing, identity, represented principal + capacity, delegated authority, consent/grant, returned-state classification (`evidence` · `observation` · `proposed-meaning` · `externally_committed_truth`) | **GCE** (ratified, `tier0_mandatory`, bidirectional, insurance an enumerated subfamily) | inbound classified, never OMNI-committed by arrival |
| **P-ASM · derived assessment** | the versioned mixed-financing assessment: composition rule identity + version, pinned inputs, validity, invalidation, recomputation, audience policy, issuance, lineage, proof | **A-Q12 owner — §2 below** | writes **only its own derived record**; supersedes, never mutates |
| **P-WRK · operating state** | attention, deadline, queue, work ownership, exception posture while unresolved, escalation, next-action-and-clock, redress coordination | **CNS** orchestration; obligations from a stance via **OFC**; conditional **Accountability** overlay above the §5.5 duty threshold | writes work state; **work state is never care state** |

**The direction law, stated once:** `P-SRC → P-XCH → P-ASM → P-WRK`. **No arrow returns.** Any proposal that requires `P-ASM` or `P-WRK` to write into `P-SRC` is rejected at the map, not at review.

**Twelve functions** — Gate-1b §8.3's governed continuity function, assigned per plane rather than restated: receive (P-XCH 1) · identify principal + capacity (P-XCH 2) · distinguish speech-act kind (P-XCH 3) · compose versioned audience-specific assessment (P-ASM 4) · explain known/predicted/conditional/disputed/unresolved with **`unknown` first-class** (P-ASM 5) · record material care-set effect separately from clinical truth (P-ASM 6 → Care/CNS, §12) · assign every next action and external dependency to a named owner with a clock (P-WRK 7) · preserve promises, deadlines, communications, correction lineage (P-ASM + D7 8) · coordinate appeal/remedy/closure without swallowing native truth (P-WRK 9) · maintain a person-portable non-captive longitudinal view (P-ASM 10, §3 layer 4) · let principals' agents interoperate under explicit authority (P-XCH 11) · learn without converting visibility into source authority (**constraint, not a function** — §11 criterion 10, 12).

**What the map deliberately does NOT contain:** a case object, an episode object, a negotiation object, a coverage object, a position store, a fourth graph, a universal Insurance state machine. **The "episode" remains a projection over distributed artifacts and commits** (C4.6 §4, inherited).

**Falsifier for output 1.** A required Insurance operating behaviour that cannot be expressed without either (a) a write from `P-ASM`/`P-WRK` into `P-SRC`, or (b) an owning object at `P-ASM` that holds a source position. None was constructed in §7; **that is not proof none exists.**

---

## §2 — OUTPUT 2 · Derived assessment ownership (A-Q12)

**The question:** who owns computation, rule version, source selection, validity, invalidation, recomputation, audience policy, retention, issuance, correction lineage and proof of a mixed-financing assessment.

**Repository-verified anchor — the pattern is already committed code, not a proposal.** `public.eligibility_decisions` (`20260504120000_intake_foundation_v1.sql` L250–270) ships exactly the versioned-derived-assessment shape Gate-1b §3-F5-E said to follow:

```sql
rule_id text not null, rule_version text not null,
result text not null check (result in ('eligible','review_required','blocked')),
reasons jsonb not null default '[]'::jsonb,
input_refs jsonb not null,
inputs_hash text not null,
input_snapshot jsonb,
decided_at timestamptz not null default now(),
decided_by text not null default 'rule_engine'
  check (decided_by in ('rule_engine','provider_override','system_derived')),
decided_by_user_id uuid references public.staff_profiles (id),
supersedes_decision_id uuid references public.eligibility_decisions (id),
interaction_context jsonb not null
```

**What that proves and what it does not.** It proves the estate already implements rule identity + version + pinned inputs + input hash + decision time + **typed decider** + **supersession chain** + interaction context for a derived decision that owns no source truth. It does **not** supply: validity period, invalidation trigger, recomputation policy, audience policy, retention, or issuance. **Those five are the real A-Q12 delta** — not the record shape, which exists.

**Disposition — ownership is SPLIT, and the split is the answer.**

| Function | Owner | Basis | Maturity |
|---|---|---|---|
| composition **rule definitions + versions** | **Settings/Catalog** (definition plane, temporal versioning) | Gate-1b §3-F5-D | `draft_for_ratification` |
| **computation, issuance, validity, invalidation, recomputation, audience policy, retention, lineage** of the assessment record | **D6 specialization** — the commercial-allocation/expected-burden assessment | Gate-1b §3-F5-D + §8.2 | **not contracted — the named gap** |
| **material effect on the feasible care set** | **REV-184/Care/CNS** extension, four levels (§12) | Gate-1b §3-F7-E | signed-off law; field-set at C5 |
| **issued artifact + delivery** | D7 + Messaging; **the communicative act itself remains unowned** (H-N3/G7) | Gate-1b §8.2 | gap |

**A-Q12 RESOLVED to owner-with-named-delta, not to a new owner.** No assessment-lifecycle domain is minted. The one thing that must be *written* is the composition rule's identity and version, and the committed pattern for that already exists.

**Named residual (routed, not closed):** the **communicative act** (H-N3/G7) still has no owner and it is the sharper half. An issued estimate is a promise; §10.A.5 makes it urgent the moment an OMNI operator is also the creditor. **Not resolved here.**

---

## §3 — OUTPUT 3 · Layered coverage scoping — the four scopes and how they compose

Gate-1b §7.5 established four scopes and that **the irreversible mistake is collapsing them.** Gate 2 owes the composition rule.

| # | Scope | Source-authoritative at | OMNI holds | Composition rule |
|---|---|---|---|---|
| **1** | **Coverage relationship identity** (person/beneficiary ↔ payer/program) | **external payer or program** | an **attributed projection** under GCE, never a canonical identity | supplies the *subject*; every other layer references it and **none may redefine it** |
| **2** | **Artifact + projection custody** (card image, extraction, stored copy) | **operator/tenant**, purpose- and visibility-controlled (D7 + Federation grants) | canonical for the **artifact**, never for the **coverage fact** | may *evidence* layer 1; **may never constitute it** — this is the exact fusion defect in `payer_eligibility_documents` |
| **3** | **Operator/provider/episode applicability** (network status, benefit interpretation, contract terms, site applicability) | **operator-scoped**: D6 + Federation + Settings | canonical for the operator's own position | **layer-3 truth is not portable** — it is deployment-relative by construction and must never be published as a property of the person |
| **4** | **Person-portable longitudinal view** | **nobody — noncanonical by definition** | a permissioned, source-preserving projection | composes 1+2+3 **read-only**, per-audience, with `as_of`; **acquires no write path and no gate role, ever** |

**The composition law, in one line:** *identity is referenced, custody is evidenced, applicability is operator-relative, portability is projected — and no layer may be promoted into the layer above it.*

**Two failure modes this makes detectable rather than arguable.**
1. **Upward promotion** — a layer-2 artifact (a card OCR) treated as layer-1 identity. Already committed: `payer_eligibility_documents` fuses an artifact with `payer_name NOT NULL`, `plan_id`, `member_id`, `group_id`. Contained by `FWREG-020` clause 2, **not** fixed.
2. **Sideways leakage** — a layer-3 operator applicability fact (this plan is in-network *here*) rendered in a layer-4 portable view as though it were a property of the person's coverage. **No existing control blocks this**; it is added to §10 as a kill-adjacent condition and to §16 routing.

**A-Q5 answer, bounded:** the stable identity of the coverage relationship is **external and referenced**, not owned. The four scopes compose **without global replication** because only layer 2 is copied (as an artifact, with custody), and **without tenant captivity** because layer 4 is a projection the person can carry and no operator can hold as a precondition. **Unproven:** that layer 4 can be assembled at all across changing counterparties without acquiring de-facto authority — that is `U11` and §11 criterion 10.

---

## §4 — OUTPUT 4 · Commitment taxonomy (A-Q1a / A-Q1b)

**Two axes, kept orthogonal** (Gate-1b §6): *epistemic/source-authority status* (GCE's returned-state classification) × *speech-act kind* (what act the principal performed). **Finer on one axis is never coverage of the other.**

**A-Q1a — accepted custody.** *Did a named party accept custody of a request, artifact, referral, submission or reconciliation obligation?* Carrier named **ABSENT** by C4.3 §4; candidates **Federation + RBAC**. Existing machinery: C4.3's ten-state external-custody ladder and **`O10 ACK ≠ accepted-custody`** (mutation-tested as `M04`, caught).

**A-Q1b — substantive commitment.** *Did a principal undertake a substantive obligation?* Seven distinct kinds, and **the taxonomy's whole point is that they are not one lifecycle**:

| Kind | Obligor | Expiry | Revocation | Breach consequence | Correction law |
|---|---|---|---|---|---|
| **authorization** | payer | dated/service-scoped | prospective; retroactive-invalidity is C4.3 **S20-B** | funding denied; **care unaffected** (Law 1) | effective-time reassignment |
| **guarantee of payment** | payer/sponsor/operator | until performance or lapse | conditional | financial | additive adjustment |
| **sponsorship** | sponsor | program period | program terms | financial + **sponsor ≠ payer boundary** (unowned, G6) | program-native |
| **loan approval** | lender | offer window | credit-policy | **obligor substitution**; refund destination becomes a legal question (`B-Q1`) | `financing_arrangement`-native |
| **network participation / rate terms** | payer ↔ operator, **bilateral** | term | notice | contractual | **no carrier — contested state unrepresentable** |
| **contractual obligation (other)** | any | instrument-specific | instrument-specific | contractual | instrument-specific |
| **coverage determination** | payer | as-of dated | supersession by payer only | none — it is a *determination*, not an undertaking | **OMNI never edits it** |

**The load-bearing separation:** *custody acceptance is not a coverage determination, an authorization, a payment guarantee, a sponsorship undertaking, a loan approval, or a contractual obligation.* Collapsing A-Q1a into A-Q1b is how a transport acknowledgement silently becomes a funding promise.

**Disposition.** **No universal Agreement object; no commitment domain.** A-Q1a routes to Federation + RBAC as a **carrier** question. A-Q1b's six undertaking kinds are **owner-native** — each belongs to the principal that made it, held under GCE as `externally_committed_truth`, except where an **OMNI operator is itself the committing party**, which is **H-N3/G7 and is not external at all** and must not be modelled through external-assertion machinery.

**Unresolved and stated as such:** the **bilateral, co-authored, contested** instrument (row 5) has no carrier in the radius, and **its transition authority is frequently outside OMNI entirely** (Gate-1b §5.2 item 8). Any future build must hold a state whose transition authority it does not own — see §14's military `establishing authority` finding, which is the first external mechanism located for exactly this.

---

## §5 — OUTPUT 5 · Residual owner map — all 23 rows driven to owner-or-named-gap

Vocabulary fixed: **`OWNED`** (an existing owner is identified and contracted or contract-adjacent) · **`OWNED-DELTA`** (owner identified; a named extension is owed inside it) · **`NAMED-GAP`** (no owner; the gap is stated, routed and owned by a named consuming gate) · **`EXTERNAL`** (source-authoritative outside OMNI by construction; OMNI holds a projection).

| # | Residual (Gate-1b §8.2) | Disposition | Owner / named gap |
|---|---|---|---|
| 1 | Coverage relationship identity | **EXTERNAL** | payer/program; OMNI holds an attributed projection (§3 layer 1) |
| 2 | Artifact + projection custody | **OWNED-DELTA** | D7 + Federation grants; delta = precedence between the three committed surfaces (`FWREG-020`) |
| 3 | Operator/episode applicability | **NAMED-GAP** | D6 + Federation + Settings participate; **no owner** — routed to C5/D6 |
| 4 | Person-portable longitudinal view | **OWNED-DELTA** | the profile at `P-ASM`, **noncanonical**; delta = it must never become truth or a gate (§11 criteria 3, 10) |
| 5 | Payer benefit/policy ruleset + version | **EXTERNAL** | payer truth; OMNI versioned projection follows the `eligibility_decisions` pattern (§2) |
| 6 | Network participation / contracted terms | **NAMED-GAP** | A-Q1b row 5; **contested state has no carrier** |
| 7 | Prior auth / guarantee / sponsorship / loan approval | **EXTERNAL** | the committing principal via GCE; typed at §4 |
| 8 | Accepted custody / responsibility | **NAMED-GAP** | A-Q1a; candidates Federation + RBAC; carrier absent (C4.3 §4) |
| 9 | Coding / clinical-to-financial representation | **NAMED-GAP** | CM read-only source; representation owner unresolved (G8) |
| 10 | Claim submission / adjudication | **NAMED-GAP** | D6/future RCM; `REV-204` unwired |
| 11 | Patient responsibility / multi-party allocation | **OWNED-DELTA** | **D6**; delta = D6's ledger presumes buyer = patient |
| 12 | Mixed-source composition | **OWNED-DELTA** | sources + Settings (rules) + **D6 assessment (§2)** + Care/CNS (care effect) + D7/Messaging (issuance); delta = the eleven mechanics at §3-F5-E |
| 13 | Consumer financing arrangement | **OWNED-DELTA** | **D6**, `DEC-027` shape, **principal-agnostic**; `REV-160` now carries it (verified landed) |
| 14 | Remittance / settlement / recoupment / finality | **OWNED-DELTA** | **D6** specialization; finality is an orthogonal axis (H-N1) |
| 15 | Estimate / guarantee / disclosure — the **communicative act** | **NAMED-GAP** | D6 calculates, D7 holds the artifact, Messaging delivers; **the act is unowned** (H-N3/G7) — urgent under §9.5 |
| 16 | Appeal / grievance / redress | **OWNED-DELTA** | native financing lifecycle + **conditional** Accountability above the §5.5 threshold |
| 17 | Provider enrollment / credentialing / payer participation | **OWNED-DELTA** | Federation owns `provider_credentialing`; **payer enrollment/contracting absent** |
| 18 | Guarantor (responsible party ≠ patient) | **NAMED-GAP** | none (G4) |
| 19 | Sponsor ≠ payer boundary | **NAMED-GAP** | none (G6); **identified clinical data must never reach a sponsor** |
| 20 | F3 resource incidence — 7 actor slices | **NAMED-GAP** | actor-decomposed: operator → OPECON (`downstream_consumption`); patient/credit → D6; five native/external. **Representation form unproven; A-Q13 open** |
| 21 | Sourcing selection | **OWNED** | **Sourcing — a distinct lifecycle** (C4.6 §9, accepted L2 doctrine). **Do not rebuild; the profile must not absorb it** — see §13(a) |
| 22 | Payer-constrained therapeutic alternatives + clinical recommit | **OWNED-DELTA** | Care/CM + payer + pharmacy; delta = **A-Q14a/b/c** relation representation + recommit seam (§12) |
| 23 | Economic-influence separation | **NAMED-GAP** | CNS Network-Governance proposed; **`REV-185` open; enforcement + audit spec OWED** (§6, §11) |

**Tally: 2 `OWNED` · 10 `OWNED-DELTA` · 8 `NAMED-GAP` · 3 `EXTERNAL`.**

**The finding that matters more than the tally.** **Not one row resolved to a new Insurance-owned truth object.** Every row landed on an existing owner, an external principal, or a named gap that belongs to generic physics above this arc (custody, commitment, communicative act, authority decomposition). **That is Axis 1 surviving a row-by-row drive, which is a stronger test than the reconciliation that produced it.** The eight `NAMED-GAP` rows are the honest cost, and six of them (3, 6, 8, 9, 15, 18/19) are **not financing-specific** — they are counterparty and communicative-act physics that Insurance merely exposed first.

---

## §6 — OUTPUT 6 · The §9 elevation

**Three laws, seven labels, one prescribed `elevation` not executed.** Gate-1b recovered the lineage; Gate 2 owes the elevation's *structure*, not a new name.

### §6.1 The naming reconciliation — mapping, not minting
| Existing label | Where it lives | Law | Disposition |
|---|---|---|---|
| `payment_care_firewall` | C3.5-F2 primitive **P17**; **EXISTS at D6 §8.1** | **LAW 1** | **This is the settled name. Keep it.** |
| "economically-blind recommendation/display engine / invariant / firewall" | C3.7 F row 31, G L15; `REV-185` | **LAW 2** | `REV-185` is the canonical carrier |
| "care-neutral fee firewall (Stark/AKS)" | spine watch list **WI8** | LAW 2 (regulatory facet) | **facet of `REV-185`, not a peer** |
| "C3.8 fee-firewall" | late-builder register **AR-C37** | LAW 2 | facet |
| "alpha-firewall" / `REV-193` | late-builder register row **L** | LAW 2 (data/alpha facet) | facet |
| "economic-firewalling" | spine watch list **WI2** | LAW 2 (aggregator facet) | facet |
| "Recommendation-integrity firewall" / "economic-pressure-can't-bend-presentation" | Care capture L170/L450 | LAW 2 | facet |
| *(unnamed)* | Gate-0 §J.0 corrected invariant + **F7** | **LAW 3 — feasibility legibility** | **DELIBERATELY LEFT UNNAMED — see §6.2** |

**Reconciliation rule proposed:** *one canonical carrier per law; every other label is registered as a **facet of** that carrier and stops being an independent name.* Law 1 → `payment_care_firewall` (D6 §8.1). Law 2 → `REV-185`, with WI2, WI8, AR-C37, `REV-193`, Care L170/L450 recorded as facets. Law 3 → **no carrier yet.**

### §6.2 Gate 2 declines to name Law 3, and the refusal is the finding
§9.3 forbids adding an eighth label to a seven-label scatter. **Minting a name for Law 3 here would be exactly that** — an Insurance gate naming a general care-economics law, without the dedup this estate requires, in an `analysis_nonbinding` artifact. **So it is not named.** What is recorded instead: Law 3 is real, normative, currently homeless, and its naming belongs to **row P's prescribed elevation** at spine §3b + §C, where it can be named once against Laws 1 and 2 together rather than in isolation.

### §6.3 The structural-enforcement question, routed to its owner
Law 2 is asserted as **structural and auditable, not policy** — *"the recommendation engine cannot read who/how-much pays OMNI."* **The mechanism and the audit spec are OWED** (`REV-185`, open since 2026-06-14; owner Nick + architecture_steward; proposed home CNS Network-Governance).

**Gate 2's contribution is to make the requirement precise enough to be built or refused.** Structural enforcement of Law 2 requires **three** things, and the estate currently has none of them named together:
1. **An input-visibility boundary** — a declared, inspectable set of facts the ranking/recommendation surface is *not permitted to read* (OMNI revenue, operator margin, sponsor accrual, manufacturer incentive, lender origination revenue, commission, retention, downstream capture). Note that this is **not** "economically blind": patient-side affordability, coverage and access **must** remain readable (Law 3). **The boundary is between whose economics, not between economics and not-economics.**
2. **An incentive-lineage obligation on any ordered output** — C4.6 §9's Sourcing selection **already ships this concept** (*"incentive lineage so operator-margin influence is inspectable"*). Law 2's enforcement should **reuse it, not re-invent it.** This is the single most reusable finding in §6.
3. **An audit surface** — `ai_decision_log` / `trace_lineage` (named at `REV-185`), answering *what did the ranking surface read, and could it have read a prohibited fact?*

**Insurance is the third dependent arc** (with C3.7 trial access and C3.8's data-value economy), and §7's seeded violation confirms the dependency is load-bearing rather than rhetorical. **Routed; not resolved. No eighth name minted.**

---

## §7 — OUTPUT 7 · The discriminating trace suite

### §7.1 Verdicts fixed BEFORE running (`M-706`)
Per-trace verdict vocabulary, fixed in advance and not amended after any walk:
**`NO_DEFECT`** · **`DEFECT_ARCHITECTURE`** (an accepted architecture claim fails) · **`DEFECT_IMPLEMENTATION_HAZARD`** (committed code violates a containment clause; architecture intact) · **`UNRESOLVED_OPEN_QUESTION`** (the trace cannot be walked to a conclusion because a named `A-Q` is open).

**Discrimination criterion, fixed in advance:** the suite is **informative** only if (i) the negative control returns `NO_DEFECT` at the architecture plane, **and** (ii) both seeded violations are caught, **and** (iii) at least one trace returns something other than `NO_DEFECT`. A suite that alarms on everything is indistinguishable from one that works.

### §7.2 The eleven required traces plus the required variants

| # | Trace | Discriminates | Verdict | What it exposed |
|---|---|---|---|---|
| **1** | **Pure self-pay / no financing** — *`M-508` NEGATIVE CONTROL, declared before running* | that absence is representable **as absence** (F1) and the profile does not manufacture a financing record so joins work | **`NO_DEFECT`** (architecture) · **`DEFECT_IMPLEMENTATION_HAZARD`** (implementation) | Architecture clean: Care's `not-applicable` per-plane value is exactly F1's requirement; D6 owns the order; no `P-ASM` record is created at all. **But the trace touches `patients.self_pay_willingness`** — a `FWREG-020` clause-6 surface. **The control did its job: it separated a clean architecture from a dirty implementation, which is precisely the discrimination a null control exists to provide.** |
| **2** | High-deductible commercial + denial + appeal + recoupment | Law 1 under load; retroactive reallocation | **`NO_DEFECT`** | Denial is a payer determination at `P-SRC`; the clinical order's existence is untouched (D6 §8.1, SUP-462). Recoupment is C4.3 **S20-B** — *authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively* — already a general class. Appeal admission is **threshold-based**, not noun-based (§5.5): a denial is **not** categorically outside Accountability. |
| **3** | Medicare + supplemental | concurrent sources under **statutory** authority; strict sequencing | **`NO_DEFECT`** | Composition is recomputed at `P-ASM`, never a stored total. Statutory constraint is not contract — it enters as an external authority whose supersession OMNI never edits. |
| **4** | Self-funded employer + TPA + stop-loss | **four principals, no one payer**; delegated administration ≠ risk assumption | **`UNRESOLVED_OPEN_QUESTION`** | The **capacity** separation works (GCE principal + capacity tuple). What does not: **sponsor ≠ payer boundary is residual 19, `NAMED-GAP`**, and identified clinical data must never reach the sponsor. The trace cannot be walked to a conclusion without that boundary. |
| **5** | Mixed cash + coverage + consumer credit | F2 anti-substitution at full force | **`NO_DEFECT`** | Four positions with four correction laws and four conservation postures coexist without a shared position store. `financing_arrangement` (principal-agnostic) is the only new lifecycle and it is D6-native. |
| **6** | Professional / facility / lab / pharmacy split | one episode → several financial representations | **`NO_DEFECT`** | The episode is a **projection**, not an owning object (C4.6 §4, inherited). Four counterparties, four claims, four independent corrections; the patient-facing single view is `P-ASM` layer-4 and canonical nowhere. |
| **7** | Provider or federation under capitation / credit risk | **payer inversion** — the operator becomes the risk bearer | **`UNRESOLVED_OPEN_QUESTION`** | The architecture survives inversion (nothing presumes payer→provider direction). But **no person-level amount need exist**, and reserve/risk position has **no owner** — F3's payer/risk slice lands on the operator and routes to OPECON as `downstream_consumption`. **Capacity separation becomes mandatory**, and §11 criterion 9 is at maximum stress here. |
| **8** | **`NICK-FIXTURE-VENDOR-FINANCING-01`** (§10.A) | vendor/loyalty/platform-originated financing | **`NO_DEFECT`** (architecture) with **one enumeration gap** | No eighth law. F2 strengthened, F6 exercised hard. **Confirmed gap:** C4.6 §11's loyalty-guard capacity enumeration lists supplier, pharmacy, fulfiller, quality-evidence issuer, loyalty/rewards operator and brand principal — **not financing origination.** That enumeration extension is owed to C4.6's own gate, not to Insurance. |
| **9** | **`NICK-FIXTURE-PAYER-CONSTRAINED-THERAPY-01`** (§10.B) — **REQUIRED**; decisive joint test of all three §9 laws | Laws 1+2+3 in one transaction; ten non-flattenable outcomes | **`UNRESOLVED_OPEN_QUESTION`** — **the load-bearing result of this gate** | Laws 1 and 3 are walkable: the denial does not erase the recommendation; the patient's affordability legitimately bounds the feasible set and is separately sourced. **Law 2 is not walkable to a conclusion**, because outcome 5 — *clinically acceptable but less-preferred alternative chosen for access/affordability, recorded with an honest `resource/access-driven` rationale* — requires (i) REV-184's **rationale-class field, which is a named gap with the field-set deferred to C5**, and (ii) A-Q14b's **relation-shaped equivalence representation, which does not exist.** **The fixture cannot currently be recorded honestly. That is the finding, and it is the same finding from two independent directions.** |
| **9v** | **Administrative-friction variant** (§10.B.9) — required variant | exhaustion as **effective control**, not authority | **`DEFECT_ARCHITECTURE`** | The six dimensions (authority · leverage · influence · **burden incidence** · default power · material care effect) must never collapse. **Burden incidence has no home in any contract** — nothing measures who bore the labour, delay and attention. Without it, de-facto control is invisible **by construction**, and the named anti-shadow failure at §10.B.9 (*"preserves formal authority while allowing unbounded administrative burden to become hidden de facto control"*) is **not currently detectable.** Not a hypothetical: `T-13` gives a *declared consequence of silence*, but nothing accumulates the cost of producing that silence. |
| **10** | Agent-mediated negotiation (2030/2035) | machine speed changes scale, not authority | **`NO_DEFECT`** | *"Ten payer bots = one payer principal"* (Care L271) governs multiplicity; `GRD-039` governs claim-to-represent; C4.6 §4 already refuses an `rx_negotiation` god-object. **The target is a typed authority-preserving resolution environment, not a fast negotiation chatbot.** |
| **11** | Simplified single-funder regime | survival under **removal** of complexity | **`NO_DEFECT`** | Most roles disappear; F1, F4, F6 remain; composition may vanish entirely. **A profile that requires complexity to justify itself would fail here — it does not**, because `P-ASM` produces nothing when there is nothing to compose. |
| **INV** | **Neutrality inversion trace** (§10.B.10, required) — OMNI operator as **provider · payer/risk bearer · creditor · manufacturer/sponsor** | which of the six neutrality dimensions survive each inversion | **`DEFECT_ARCHITECTURE`** | **Source-authority non-capture, governance and rail replaceability survive all four inversions.** **Capacity separation survives only if enforced** — and it is *declared*, not contracted (Federation inv 8 is the nearest analogue, not the control). **Clinical separation and compensation decoupling fail under operator-as-creditor and operator-as-risk-bearer**, because Law 2's structural enforcement does not exist (§6.3). **Neutrality is deployment-specific and currently unprovable for two of four inversions.** |

### §7.3 Seeded violations (`M-505`) — deliberately corrupted, MUST fail

**SEED-1 — *a payer's funding preference silently becomes clinical equivalence* (Law 2).**
Constructed as: a payer position asserting *"B is clinically equivalent to A for this patient"* is admitted and reaches clinical adoption.
**Caught — but for the wrong reason, and this is the most important result in §7.** The write is impossible today because **the relation has no representation at all**: Clinical Memory's substrate is `(patient, concept, context_key)` — unary — and *"B is equivalent to A for this patient"* is a **relation** (A-Q14b). So the corruption fails to land not because a control rejected it but because **there is nowhere to put it, for anyone**, including the treating clinician who legitimately should be able to assert it.
**Consequence, stated plainly:** *the architecture currently passes SEED-1 as an artifact of an unbuilt feature.* The moment A-Q14b is contracted, the pass evaporates unless the capacity control (`adoption_authority` per C3.6C, never reached by a payer position) is designed **into the relation's representation at authorship**, not bolted on after. **This must be a stated precondition on A-Q14b's design, and it is added to §16 routing and to `D0INS-REV-002`'s closure criteria.**

**SEED-2 — *the profile writes back into Care truth*.**
Constructed as: `P-WRK` sets an authorization-pending work state that a care surface reads as the clinical order not being active.
**Caught on one side only.** D6 §8.1's `payment state ≠ care state` is a **contracted** invariant and C3.5 SUP-462 is exact (*a pending prior-auth must not silently prevent the clinical order from existing*). But the corruption does not require a write into Care at all — the profile's **own legitimate operating state** can express a care-blocking posture. The catch therefore depends on the **Care-side symmetric statement, which is OWED (F1 disposition / A-Q6) and does not exist.**
**Consequence:** SEED-2 is caught by D6 and **not** caught by Care. The asymmetry Gate-1b named at §3-F1-D — *"enforcement runs from one direction"* — is **load-bearing, not cosmetic.**

### §7.4 Did the suite discriminate?
**Yes, on all three fixed criteria.** (i) The negative control returned `NO_DEFECT` at the architecture plane while correctly flagging an implementation hazard. (ii) Both seeded violations were caught — one of them for a reason that is itself a finding. (iii) Four traces returned something other than `NO_DEFECT` (4, 7, 9, 9v, INV). **The suite is not an alarm generator.**

### §7.5 Brief §5 acceptance-floor compliance
| Required | Method | Where discharged | State |
|---|---|---|---|
| composite incumbent test | `M-202` | §14.4 — attacked as a **stack**, not in isolation | **performed** |
| incumbent absorption | `M-606` | §10 kill condition 3 | **performed** |
| portability / exit | `M-607` | §3 layer 4 + §11 criterion 10 + §10 kill condition 6 | **performed** |
| ≥1 negative / null control | `M-508` | trace 1, **declared before running** | **performed** |
| ≥1 seeded violation that MUST fail | `M-505` | SEED-1, SEED-2 | **performed — both caught; one for the wrong reason** |
| verdicts set before running | `M-706` | §7.1 | **performed** |

**The floor was met. `E2` is a separate, later, mandatory blocker and is not satisfied by any of the above.**

---

## §8 — OUTPUT 8 · Task-D Input-State Receipt

**Maturity — three levels now, and the third is new.**
- **`READY_AS_GATE1B_OWNERSHIP_INPUT`** (unchanged, inherited)
- **`READY_AS_GATE2_PROVISIONAL_COMPOSITION_INPUT`** ← **this object**
- **`NOT_READY_AS_FINAL_INSURANCE_COMPOSITION_INPUT`** (unchanged — and `E2` plus C3.9 are what would change it)

**Provisional by construction, per brief §6 Barrier 2:** this result was produced before C3.9 exists. **Any C3.9 finding that contradicts a Gate-1b or Gate-2 arrival requires the affected traces to be rerun or explicitly reconciled**, and `E2` runs last, unweakened.

**No new receipt document is owed.** Per `D0THES-DEC-039`, Gate-1b §11 is the substantive version-pinned Input-State Receipt payload; this section **amends** it rather than replacing it. **Gate 2 is not an ex-ante prerequisite to Task-D entry or verdict** — it upgrades Insurance's input maturity, and its criticality is an **output** of Task-D.

**Task-D MAY additionally rely on (new at Gate 2):**
- the **four-plane operating-profile map and its one-directional authority law** (§1) as a *construct that survived eleven traces plus two seeded violations*, explicitly **not** as ratified architecture;
- **A-Q12 resolved to owner-with-named-delta** (§2) — Settings owns rule definition/version, D6 owns the assessment lifecycle, and **the record shape already exists in committed code** (`eligibility_decisions`);
- the **four-scope coverage composition law** (§3) and its two named failure modes;
- the **A-Q1a/A-Q1b commitment taxonomy** (§4) with seven undertaking kinds distinguished by obligor, expiry, revocation, breach and correction law;
- the **23-row residual drive** (§5) and its finding that **no row resolved to a new Insurance-owned truth object**;
- the **§9 elevation's structural requirements** (§6.3), including that Law 2's enforcement should **reuse C4.6 §9's incentive-lineage mechanism** rather than invent one;
- the **comparator results at §14**, at the evidence grade stated there and no higher.

**Task-D MUST NOT rely on:** everything in Gate-1b §11's prohibition list, **unchanged and carried forward in full**, plus five additions —
1. **the operating profile as proven** — it is constructed and paper-tested; **nothing was executed**;
2. **the ten anti-shadow criteria as satisfied** — **seven are demonstrated, three are conditional** on an enforcement mechanism that does not exist (§11);
3. **neutrality as established** — the inversion trace **fails two of four inversions** (§7.2 INV);
4. **`NICK-FIXTURE-PAYER-CONSTRAINED-THERAPY-01` as passing** — it returned `UNRESOLVED_OPEN_QUESTION`; its load-bearing outcome 5 **cannot currently be recorded honestly**;
5. **SEED-1's pass as evidence of a control** — it is an artifact of an unbuilt feature (§7.3).

**Task-D MUST remain free to falsify:** everything Gate-1b listed, plus — **that the four-plane map's no-return-arrow law is buildable at all** once `P-WRK` needs to drive real work; **that burden incidence can be measured without becoming surveillance** (`T-22`); and **that Law 2 can be enforced structurally rather than by policy** — which is the single claim on which Axis 2's honesty depends.

---

## §9 — OUTPUT 9 · Build / buy / wrap boundary

| Layer | Posture | Rationale |
|---|---|---|
| **The operating profile, its authority model, composition, proof, correction and redress** | **BUILD — OMNI-native, non-negotiable** | This is the governed middle. It is the only layer no single participant can legitimately own end-to-end, because each is one party to the interaction (§10.B.6) |
| **The `financing_arrangement` lifecycle inside D6** | **BUILD — native specialization** | Regime-specific, principal-agnostic, `DEC-027` shape; not a shared substrate |
| **Card OCR / document extraction** | **BUY** | Commodity; output enters as `evidence` at `P-XCH`, never as coverage identity (§3 layer 2) |
| **EDI / X12 / FHIR transport, clearinghouse** | **WRAP** | Rails. `GRD-033` replaceability applies. OMNI originates the *normalized representation, recognition rule and portable proof shape* — not the transport |
| **Eligibility / benefit inquiry** | **WRAP** | The payer is source-authoritative; OMNI holds an attributed, dated projection |
| **Lending, underwriting, servicing** | **BUY / partner** | `EXTERNAL_EVIDENCE_REQUIRED` on licensure (`B-Q3`); the lender is a principal, not a payment-method label |
| **Payment execution, settlement rails** | **WRAP** | External rail is ledger of record for movement; D6 is canonical for OMNI-side meaning |
| **Payer-system adjudication** | **NEVER BUILD** | It is the payer's determination. Building it is the payer-named-domain error `FWREG-017` and `GRD-026` already forbid |
| **Ranking / recommendation surfaces that read economics** | **BUILD, under Law 2** | Cannot be bought: the *whole value* is the visibility boundary (§6.3), and no vendor's ranking engine carries OMNI's firewall |

**The boundary rule in one line:** *buy the mechanics, wrap the rails, build the meaning — and never build another principal's determination.*

**Measured against the ratified test** (`GRD-034`): *"OMNI is NOT measured by number of integrations; it is measured by whether every exchange preserves identity, authority, consent, context, ownership, commit, and proof."*

---

## §10 — OUTPUT 10 · Kill conditions

Any **one** of these, if it holds, kills the first-class operating profile — not the two-axis verdict's Axis 1, which survives independently.

1. **The generic seam cannot carry required fields.** Falsifier: a care decision needing a financing-specific field the generic composition cannot carry — not source, authority, scope, time, uncertainty, material effect or rationale class. *Status after §7: none constructed. **But trace 9 came close** — the rationale class and the equivalence relation are both missing, and if either proves un-carryable by the generic mechanisms rather than merely uncontracted, this condition fires.*
2. **No actor will pay for the continuity** (Gate-0 **U11**). *Status: untested; the sharpest commercial attack; unchanged.*
3. **Incumbent configuration achieves equivalent cross-counterparty coherence** (`M-606`). *Status after §14.4: **not achieved by any inspected incumbent, and the reason is structural** — Epic's coherence is configuration-inside-one-enrollment, Palantir's is ontology-inside-one-enrollment. Neither is cross-sovereign. **This is the strongest surviving differentiation claim and it remains a claim.***
4. **Exception rate or human labour destroys the economics.** *Status after trace 9v: **elevated, not resolved.** Burden incidence has no home, so the exception cost is currently unmeasurable — which means this kill condition cannot be evaluated at all. **An unmeasurable kill condition is worse than a failing one.***
5. **The profile becomes a hidden source of truth** (raw 3's named risk). *Status after §11: contained by the no-return-arrow law and criteria 1–3, 5; **not** contained for criterion 10 (visibility → authority), which has no mechanism.*
6. **(R4) The party with the most leverage will not participate in a system whose purpose is to prevent it presenting funding preference as clinical merit** (§10.B.10 — the neutrality-versus-leverage falsifier). *Status: **unchanged and unaddressed by this gate.** §14.2's `establishing authority` mechanism is the first external analogue found for a **third-party escalation** that does not require the leveraged party's consent — but importing it presupposes an establishing authority healthcare does not have. **Named, not solved.***

**Proposed addition — kill condition 7 (this gate).** **Law 2 cannot be enforced structurally.** If the input-visibility boundary at §6.3 turns out to be unimplementable — because the ranking surface cannot function without reading a prohibited fact, or because the boundary cannot be audited — then Law 2 is a policy, neutrality is unprovable, and **Axis 2's product claim reduces to "a better-organized view."** This is not currently a listed kill condition and §7's INV trace and SEED-1 both point at it. **Proposed, not adopted — adoption belongs to the Gate-2 review gate.**

---

## §11 — OUTPUT 11 · The ten anti-shadow acceptance criteria

**The contract:** Gate 2 must **positively demonstrate** all ten. *"If the profile cannot satisfy all ten, Axis 2 is wrong and the correct answer reverts to seams and noncanonical projections only."*

Demonstration vocabulary, fixed: **`DEMONSTRATED`** (the map's construction makes the violation unrepresentable) · **`CONDITIONAL`** (satisfiable, but only via a mechanism that does not exist) · **`FAILED`**.

| # | Criterion | Verdict | Demonstration / condition |
|---|---|---|---|
| 1 | **Owns no source position** | **`DEMONSTRATED`** | `P-ASM` holds only derived assessments with pinned inputs; every position lives at `P-SRC` with its native owner. The 23-row drive (§5) found **no row** resolving to a profile-owned position |
| 2 | **No universal commit authority** | **`DEMONSTRATED`** | The profile has no commit verb. Every commit is an owning-domain commit reached through GCE's resolver (C4.6 plane 3) |
| 3 | **Cannot write back into payer, Care, pharmacy or D6 truth** | **`DEMONSTRATED`** by the no-return-arrow law (§1) — **with SEED-2's caveat recorded**: the profile can express a care-blocking *posture* without writing, and the Care-side symmetric statement that would catch it is owed |
| 4 | **Versions and invalidates every derived assessment** | **`DEMONSTRATED` for versioning · `CONDITIONAL` for invalidation** | `eligibility_decisions` ships `rule_id`+`rule_version`+`inputs_hash`+`input_snapshot`+`decided_at`+`decided_by`+`supersedes_decision_id` **in committed code**. **Validity period, invalidation trigger and recomputation policy are the named §2 delta and do not exist** |
| 5 | **Preserves each source position independently** | **`DEMONSTRATED`** | F5 is normative and inherited; composition is **recomputed, never stored as a total**; traces 3, 5, 6 exercised it |
| 6 | **Uses CNS orchestration rather than a universal Insurance-case god-object** | **`DEMONSTRATED`** | `P-WRK` is CNS work state. §1 explicitly mints no case, episode, negotiation or coverage object; the episode stays a projection |
| 7 | **Uses Accountability only after the duty threshold** (§5.5) | **`DEMONSTRATED`** | Admission is threshold-based, never by noun; trace 2 walked a denial through it correctly — ordinary forward flow stays native |
| 8 | **Cannot silently become a clinical gate** | **`CONDITIONAL`** | Law 1 is contracted **on the D6 side only**. SEED-2 is caught by D6 and **not** by Care. Condition: the **symmetric Care-side statement (A-Q6)** must exist |
| 9 | **Cannot rank options using an interested principal's economics as clinical merit** (Law 2) | **`CONDITIONAL`** | The profile satisfies this **by non-participation** — it has no ranking function. **But that is not the same as the criterion being met**: the profile *supplies inputs* to surfaces that do rank. Condition: **Law 2's structural enforcement (§6.3), which is owed** |
| 10 | **Cannot turn longitudinal visibility into authority** | **`CONDITIONAL`** | `GRD-034` and `T0-14` state the requirement; §3 layer 4 is noncanonical by construction. **No mechanism prevents accumulated visibility from becoming de-facto authority**, and trace 9v shows the adjacent failure (burden → de-facto control) is currently undetectable |

**Result: 7 `DEMONSTRATED` · 3 `CONDITIONAL` · 0 `FAILED`.**

### §11.1 The finding that changes how the criteria should be read
**All three `CONDITIONAL` criteria (8, 9, 10) share one property: they are not properties the profile can hold alone.** Criterion 8 requires a *Care-side* statement. Criterion 9 requires a *ranking-surface* boundary. Criterion 10 requires a constraint on *every consumer* of the longitudinal view. **They are properties of the assembly, not of the profile.**

**Consequence:** a Gate-2 result can never demonstrate them by constructing the profile well, **no matter how well it is constructed** — which means the acceptance contract as written cannot be discharged by this gate acting alone. That is not a defect in the contract; it is the contract correctly detecting that **three of the ten anti-shadow properties need an enforcement owner outside the profile.** That owner is exactly `REV-185` / A-Q8 / row P's elevation.

**Does 7-of-10 mean "Axis 2 is wrong"?** **No — and the distinction is the load-bearing judgement of this gate.** The contract's failure clause reads *"if the profile **cannot** satisfy all ten."* None of the three is shown unsatisfiable; each is shown **unsatisfiable-by-the-profile-alone and satisfiable-by-the-assembly**, with the missing mechanism named, owned and routed. **Axis 2 therefore stands, at `SURVIVES_WITH_NAMED_RECONCILIATIONS` and not at `SURVIVES`.** If the review gate reads the clause more strictly — that anything short of ten reverts to seams and noncanonical projections — **that reading is available on the text and this gate does not foreclose it.** It is flagged as the single highest-value question for `E2` and for Nick + Knox.

---

## §12 — OUTPUT 12 · Cross-authority option-resolution profile

**Requirement:** prove the profile can carry C4.6's existing typed multi-principal resolution pattern **without creating a universal negotiation or case object**, and classify every proposed change into exactly one of three branches.

### §12.1 Multi-axis typing — no single axis used alone
| Axis | Source | Maturity | Role here |
|---|---|---|---|
| **GCE principal + represented capacity** | GCE | **ratified** | **primary** — who is acting, in what capacity |
| **C4.6 plane** — authorized outbound command · inbound evidence/assertion · owning-domain commit | C4.6 §4 | accepted L2 doctrine | **primary** — what kind of move this is |
| **Speech-act kind** — assertion · observation · determination · proposal · clarification · refusal · consent · commitment | H-N2 family (§4) | **OPEN** | typed here at §4; **not closed** |
| **REV-184 stance + authority gate** | REV-184 / CNS / RBAC | signed-off; field-set at C5 | resolution posture |
| **`seam_kind` cross-loop effect** | Accountability | **candidate, unratified** | **admissible only where reuse is proven — and this gate did not prove it.** Used nowhere below |

**The three prohibitions, obeyed explicitly:**
- **Nothing here is typed by `seam_kind`.** Its reuse outside its native Care–Platform–Accountability loop remains unproven; Gate 2 was required to test the reuse rather than assume it, and **the honest result is that no trace required it** — every move in §7 typed cleanly on GCE capacity + C4.6 plane. *That is weak evidence against its necessity, not proof against its validity.*
- **A clinician recommit is NOT an accepted `custody_handoff`.** It produces a Care/CM commit, a new immutable artifact and an **outbound command**. **Submission ≠ acceptance**; execution custody transfers only when the pharmacy's acceptance evidence satisfies the applicable profile and the owning domain commits (`O10 ACK ≠ accepted-custody`).
- **A pharmacy substituting inside an already-authorized envelope is a professional/execution commit, NOT a `control_request`.** It becomes a request only when the pharmacy asks another authority to decide.

### §12.2 The three branches — the classification every proposed change must land in exactly once
| Branch | Test | Authority required | Care effect |
|---|---|---|---|
| **(a) clerical / operational reroute** | no clinical reinterpretation; **operationally equivalent** | executing principal within its own envelope | **no reopen** |
| **(b) permitted change inside an existing substitution/authority envelope** | within law and the authorization envelope; **authority basis recorded** | executing professional, within actual scope | **no reopen; basis recorded** |
| **(c) clinical reinterpretation** | ingredient/strength/dose/form/route/quantity/additives change requiring clinical judgement, or any change of therapeutic intent | **authorized clinical recommit** (treating clinician or properly delegated authority) | **`reopen_care`** |

**Inherited discriminator, not re-derived:** C4.6 L205 — *"Same active ingredient does NOT imply clinical or operational equivalence… A change requiring clinical reinterpretation routes back to Care (`reopen_care`); an operationally-equivalent reroute does NOT automatically reopen the clinical decision."* The runnable conformance test **`C12`** already FAILS when *"normalization and clinical change are indistinguishable"* or *"a permitted substitution lacks its authority basis."* **Attach to `C12`; do not rebuild it.**

**Every trace must preserve, separately attributable:** original intent and artifact · each source-attributed proposal or position · principal **and capacity** · patient preference and consent · operative posture while unresolved · the final recommit · execution · consequence · **rationale class** · correction lineage. *Trace 9 established that the rationale class is the element that currently cannot be preserved.*

### §12.3 The two named anti-shadow failures
- **Failure 1 — the profile becomes the authoritative owner of the resolution rather than a projection and orchestration over distributed commits.** **Not triggered.** `P-ASM` holds derived assessments; `P-WRK` holds work state; the resolution itself is REV-184/CNS-owned and the commits are owning-domain. **The profile never holds the resolution.**
- **Failure 2 — a fourth *authoritative* graph, duplicated lifecycle truth, or one graph silently owning another's lifecycle (A-Q15).** **Not triggered: this gate names no new graph.** The three existing graphs sit at three altitudes and **may legitimately coexist** — REV-184/CNS **process/lifecycle** (canonical for process state) · Accountability **`matter_graph`** (derived correlation) · Care **`resolution_participant_graph`** (projection, explicitly not truth). **Multiplicity is not the failure; duplicated authority is.**

**A-Q15 role reconciliation, performed:** *canonical* = CNS process/lifecycle state, and only that. *Derived* = Accountability's correlation, which may reference CNS nodes but **may not advance them**. *Projection* = Care's participant view, which **may reference and must not persist** lifecycle state. **Reference is by identifier, never by copied state** — the one rule that keeps three graphs from becoming three truths. **Pressured against Palantir at §14.1; the pressure changed the answer's justification, not the answer.**

---

## §13 — OUTPUT 13 · Sequencing, selection and burden

**The contract requires Gate 2 to state plainly which of these it resolved and which it only exposed.** Stated plainly below.

### §13(a) Sourcing selection and A-Q18 — **RESOLVED, narrowly**
C4.6 §9's selection output is **accepted L2 doctrine** and already composes: admissible set (licensure/jurisdiction/503A-503B/controlled-substance/quality, each `as_of`) · `failed`/`unknown`/`stale` candidates · alternatives · applicable **preference** (patient/provider/clinic) · **policy precedence** · the **objective** used · **incentive lineage so operator-margin influence is inspectable** · the **authorized selector** and authority basis. *"Routing is not a single deterministic owner and quality/availability/cost/reliability is never reduced to one authoritative scalar."*

**A-Q18 — is a payer-mandated pharmacy a preference, an admissibility criterion, or policy precedence?** **None of the three. It is a fourth thing: a funding condition.**

**Resolution proposed:** a **funding condition** is a constraint that (i) does **not** narrow the *admissible* set — the non-mandated pharmacy remains licensed, capable and clinically acceptable; (ii) is **not** a preference — no participant in the care relationship prefers it; (iii) is **not** policy precedence — it is not OMNI's or the operator's policy; and (iv) **attaches a financial consequence to selecting outside it**, which lands at `P-ASM` as an assessment input, **not** at Sourcing as an admissibility filter.

**Why the distinction is load-bearing and not pedantic:** collapsing a funding condition into "preference" converts a payer's economic constraint into an apparent **clinical or operator choice** — the §9 Law 2 violation, expressed as a taxonomy error. **The correct representation keeps the pharmacy admissible, records the funding condition as an economic fact with its source and `as_of`, and lets the patient's affordability (Law 3) determine the outcome — explicitly and recorded, never silently.**

**Owner: Sourcing + D6 + Settings.** **Proposed, not landed.** The profile **must not absorb Sourcing selection** — that is the shadow-domain failure §13.3 exists to prevent (residual 21).

### §13(b) Non-linear ordering and A-Q17 — **EXPOSED, NOT RESOLVED**
**Stated plainly: Gate 2 did not resolve A-Q17, and could not have.**

The existing shape is C4.5 **`T-21`**: *"No false total order; preserve the partial order, the source clock or temporal basis, and ordering confidence. **Exact chronology is a conclusion requiring evidence, not a display convenience**"* — plus `T-17` first-class temporal uncertainty and `T-13` (*time is neither actor nor authority*). **C4.5 is `gate_0_charter_accepted · full_pass_not_started`, re-verified unchanged 2026-08-09.** Applying a charter law to a use case is not the same as running the pass.

**What Gate 2 contributes instead of a resolution — the required trace dimension, specified:** every multi-principal trace must expose, per exchange, **ordering basis** (which clock: source-asserted, OMNI-received, OMNI-recorded, effective) · **ordering confidence** · **concurrency set** (which responses are genuinely unordered relative to each other) · **operative posture mid-flight** (what is true *while* payer, pharmacy, inventory and patient responses are outstanding) · **partial answers** and how they compose without implying a total order.

**The specific unsolved case, named:** payer, pharmacy, inventory and patient responses arriving **out of order and concurrently**, where the *display* order is the one thing a human will treat as causal. `T-21` forbids the false total order; **nothing in the estate produces the partial order.** **This remains the single largest genuinely-open item the fixture exposes** — unchanged from Gate 1b, now with a specified trace dimension rather than only a question. Routed to the **C4.5 full pass**, which cannot close without disposing of the Insurance partial-order fixture.

### §13(c) Burden incidence — **EXPOSED, and worse than Gate 1b recorded**
The six dimensions must never collapse: **authority · leverage · influence · burden incidence · default power · material care effect.**

**Gate 2's finding (trace 9v, `DEFECT_ARCHITECTURE`):** burden incidence has **no home in any contract**, and the consequence is stronger than "unmeasured." Because the named anti-shadow failure is *"the operating profile FAILS if it preserves formal authority while allowing unbounded administrative burden to become hidden de facto control,"* **and burden is unmeasurable, that failure is currently undetectable by construction.** An anti-shadow criterion that cannot be evaluated is not a weak control — it is **no control**.

**Minimum measurable set proposed** (specification, **not a schema**): issuing principal **and capacity** · request/proposal count and duplication · evidence demanded · response deadline · the actor **expected** to respond · elapsed labour and delay · **default consequence of silence** · accumulated burden **by actor** · abandonment or deferral reason · material effect on the feasible set · **whether agents reduced or increased the burden**.

**And its own guardrail, stated with the specification rather than after it:** measuring burden by actor is **one design decision away from surveillance of clinicians and staff.** `T-22` — *"Reconstructability is not surveillance authority"* — and `O17` bound it. **Any burden-incidence design that cannot satisfy `T-22` should not be built.** Owner: **unassigned.** Routed to `D0INS-REV-002` and, for the friction pathway, to `REV-185`.

---

## §14 — OUTPUT 14 · External-comparator pressure

**Discipline (`GRD-026`, Gate-0 §G.2/§G.3): mechanism only — never the hidden ownership, hierarchy or economic assumptions.** Every row below states **what transfers** and **what must be rejected**.

**Evidence grade, stated once and applying to all of §14:** primary sources were fetched and read this pass. These are **external claims** and remain **evidence-grade, not promotion-grade**, per `D0THES-GRD-036` — they inform routing and design; they bind nothing. No Evidence-Plane packet is created here.

### §14.1 Technology family — Palantir, and the A-Q15 pressure Gate 1b said had never been applied
**Primary source:** Palantir Foundry Ontology and Object-Backend platform documentation.

**Mechanism, as documented.** The Ontology is *"an operational layer for the organization"* that *"sits on top of the digital assets integrated into the platform"* and contains **semantic elements** (object types, properties, link types) and **kinetic elements** (action types, functions, dynamic security). **Action types are governed transactions** that edit objects, properties and links in one shot including side effects; the **Actions service** applies edits, enforces *"complex permissions and conditions"*, and produces *"a historical action log for analysis of user decisions."* The **Ontology Metadata Service** is the source of truth for structure. The **Object Data Funnel** *"orchestrates data writes into the Ontology… reads data from Foundry datasources **and user edits (from Actions)** and indexes these data into object databases."*

**What this answers for A-Q15 — and it is not what OMNI does.** Palantir resolves *canonical vs derived vs projection* by **collapsing them**: source-derived data and user edits are merged by the Funnel into **one operational object layer** which then serves as the organization's digital twin. **There is one authoritative graph, and the sources become upstream feeds.**

- **TAKE — the governed write path.** *Action types* are the strongest external validation of C4.6's plane-1/plane-3 separation: **a typed, permissioned, condition-checked transaction with declared side effects and a durable decision log is the ONLY way objects change.** OMNI's resolver + owning-domain commit is the same mechanism. **Also take the action log as a first-class artifact for analysing decisions** — not merely a change history.
- **REJECT — the merged object layer.** Palantir's model works because everything inside it is **inside one enrollment** with a shared schema and delegated write-back. OMNI's `P-SRC` principals are **sovereign, external, and not enrolled**: a payer does not accept OMNI's ontology as the operational layer over its determinations. Adopting the merged layer *is* raw 3's named hidden-coordinator failure and would violate anti-shadow criteria 1, 2, 3 and 5 simultaneously.
- **Net effect on A-Q15:** the answer at §12.3 is **unchanged, and its justification is now stronger** — three coexisting graphs at three altitudes is not an OMNI eccentricity to be tidied into one; it is the **necessary consequence of cross-sovereign truth**, and the single-graph alternative has a named owner (Palantir), a real mechanism, and a precisely-stated non-transfer. **Multiplicity is the price of sovereignty.**
- **Consistent with the accepted estate**, not a new finding against it: C4.6 G2A already concluded *"Palantir = federation-inside-one-enrollment/shared-schema/delegated-write-back, not cross-sovereign."* **This gate did not re-derive that; it pressured A-Q15 against it for the first time.**

**Adjacent technology mechanisms — carried at inherited maturity, not re-derived:** **AWS saga/compensation** — the carrier's R5 correction stands and is not reopened (*a proposal discloses expected tradeoffs and reversibility; a committed consequential transition declares its rollback/mitigation/reopen path where one exists and names the residual irreversible consequence where one does not*; **no compensating action may be claimed to restore lost care state**, per F6). **Anthropic/OpenAI-class agent platforms** — *approval enforced in the tool, not the prompt*, inherited from C4.6 L2 and directly supporting §6.3's input-visibility boundary being **structural** rather than instructional. **Epic** — configuration-as-truth is the named failure mode and is the reason kill condition 3 is about *cross-counterparty* coherence, not features. **Tesla** — closed-loop sense→act under degraded sensing; the transferable piece is **degraded-mode behaviour**, which §14.2 and §14.3 supply more precisely.

### §14.2 Military / joint command-and-control — the highest-value untried comparator for A-Q16
**Primary source:** JP 1, *Doctrine for the Armed Forces of the United States* (full text read; passages verified verbatim).

| Mechanism (verified) | What it says | Transfer to OMNI |
|---|---|---|
| **"Authority is never absolute; the extent of authority is specified by the establishing authority, directives, and law."** | authority is **scoped by instrument**, never held globally | **TAKE — direct A-Q16 support.** Authority is a scoped grant, not a property of a principal. This is the doctrine-level statement of *field-level, action-specific* authority |
| **TACON "does not provide organizational authority or authoritative direction for administrative and logistic support."** | a control authority **explicitly bounded to exclude other planes** | **TAKE — the strongest single A-Q16 finding.** A mature discipline enumerates what an authority does **not** reach. A payer's funding authority should be specified the same way: what it commits, and explicitly what it does not touch |
| **ADCON vs OPCON** | two orthogonal authority channels over the **same unit** simultaneously | **TAKE.** Administrative/financial authority and operational/clinical authority over the same act are **parallel, not ranked** — precisely what a single `authority_rank` ladder cannot express |
| **Support relationship + establishing directive** — specifies *"the purpose of the support relationship, the effect desired, the scope of action to be taken, and any shifts in the support relationship"* | a typed, purpose-scoped, explicitly-shifting relationship instrument | **TAKE — a candidate shape for A-Q1b's missing bilateral carrier**, and for the "operative posture while unresolved" gap (§5.2 item 6) |
| **"When a supporting commander cannot fulfill the needs of the supported commander, the establishing authority will be notified by either the supported commander or a supporting commander. The establishing authority is responsible for determining a solution."** | **non-fulfilment is a first-class declarable state**; **either party may escalate**; a **named third authority** resolves | **TAKE the structure, REJECT the presupposition.** This is the first external mechanism located for *"payer will not fund / pharmacy cannot supply"* that treats the supporting party as **neither obedient nor silent**. **But healthcare has no establishing authority** — which is exactly why kill condition 6 survives |
| **Coordinating authority** — *"a consultation relationship between commanders, **not an authority by which C2 may be exercised**… the commander exercising coordinating authority **does not have the authority to resolve disputes**"* | a **named relationship for "coordinates but cannot decide"** | **TAKE — the closest external name for what the operating profile IS.** Military doctrine has a term for a coordinator with no decision authority, **and explicitly bounds its use**. This is independent confirmation that Axis 2's shape is a real operating category, not a euphemism for a weak domain |
| **Multinational OPCON reservations** — an MNFC *"cannot change the mission or deploy US forces outside the operational area… nor may the MNFC separate units, divide their supplies, administer discipline"*; US commanders *"maintain the capability to report to higher US military authorities in addition to MNFCs"* | granting control **enumerates non-transferable reservations** and **preserves an independent reporting path** | **TAKE.** A payer may commit funding without acquiring clinical recommit authority, and the patient/clinician **retains an independent escalation channel that the funding relationship cannot close** |
| **Unity of effort vs unity of command** — operations of other departments and agencies *"are not under command of the Armed Forces"*; multinational unity of command *"may not be politically feasible"*; unity of effort is achieved via **decentralized execution of centralized intent, or mission command** | doctrine **has a named concept for the no-common-commander case** | **TAKE the concept, and note what it costs.** Military doctrine does not pretend coordination without a commander is the same as command; it names it differently and accepts weaker guarantees. **OMNI should do the same rather than implying the profile delivers command-grade coherence** |

**The three transfer limits — tested against the primary source rather than asserted.**
- **(i) Healthcare has no universal commander. — HOLDS, and the source proves it more sharply than the carrier claimed.** Military doctrine *ultimately* reconciles under a commander, and where it cannot (interagency, multinational) it **explicitly downgrades to unity of effort and coordinating authority**. The import is therefore **not** the command hierarchy but the **no-commander branch of the same doctrine** — which is a better and more honest fit than the carrier anticipated.
- **(ii) Logistics authority is independent, not subordinate. — HOLDS, and is now evidence-backed.** COCOM includes *"authoritative direction over all aspects of military operations, joint training, and **logistics**."* **Logistics IS subordinate in military doctrine.** That is exactly what must not transfer: OMNI's pharmacy, supply and facility actors are separate legal and commercial principals with genuine source authority over stock. **The limit is confirmed by the primary source, not merely stipulated.**
- **(iii) Mission economics do not transfer. — HOLDS, untested and untestable here.** Military planning accepts attrition against an objective. **No OMNI composition may trade a patient's care for throughput** (Laws 1–3). Nothing in the source contradicts the limit; nothing in it supports the import either.

### §14.3 Civil aviation — the joint-release question, ANSWERED against primary sources
**The carrier asserted this as a question, not a fact, and required primary-source verification before importing. Verification performed. The answer is yes.**

**Primary source: 14 CFR part 121, verbatim.**
- **§121.533(b):** *"The pilot in command and the aircraft dispatcher are **jointly responsible** for the preflight planning, delay, and dispatch release of a flight."*
- **§121.663:** *"The pilot in command and an authorized aircraft dispatcher shall sign the release **only if they both believe** that the flight can be made with safety."*
- **§121.533(c)(3):** the dispatcher is responsible for *"Cancelling or redispatching a flight if, in **his opinion or the opinion of the pilot in command**, the flight cannot operate or continue to operate safely."*
- **§121.533(d)–(e):** *"Each pilot in command… **during flight time**, [is] in command of the aircraft and crew"* with *"full control and authority… without limitation."*
- **§121.627(a):** no PIC may continue toward a destination if, in the opinion of **either** the PIC or dispatcher, it cannot be completed safely — *"unless, in the opinion of the pilot in command, there is no safer procedure. In that event, continuation… is an **emergency situation** as set forth in §121.557."*
- **§121.557(b):** in an in-flight emergency the dispatcher *"shall advise the pilot in command… shall **ascertain the decision** of the pilot in command, and shall **have the decision recorded**. If the aircraft dispatcher cannot communicate with the pilot, he shall **declare an emergency and take any action** that he considers necessary."*
- **§121.557(c):** whoever exercises emergency authority *"shall keep the appropriate ATC facility and dispatch centers fully informed"* and **shall send a written report within 10 days.**
- **§121.601:** the dispatcher has an affirmative, continuing **duty to provide information** — before and during flight — separate from any decision authority.

**Six mechanisms, and what transfers.**

1. **Conjunctive commit, disjunctive veto.** Departure requires **both** to concur; **either one's negative opinion alone** is sufficient to cancel. **TAKE — this is the mechanism OMNI has no name for**, and it is the exact shape of *"treating clinician and dispatching pharmacist both hold non-fungible authority over the same act."* It is also the shape of **A-Q1a/A-Q1b's missing bilateral state**: a commitment that exists only on dual concurrence and dissolves on either party's withdrawal. **The carrier's hypothesis is confirmed: joint release is real, and it is the closest operating analogue in any inspected industry.**
2. **Phase-dependent authority reallocation.** Joint before departure; **PIC has full authority during flight**; dispatcher retains monitoring and information duties throughout. **TAKE — authority is scoped by phase of the operation, not held statically.** Directly relevant to A-Q16: the same two principals hold *different* authority at different points in one transaction.
3. **Disagreement resolves by regime change, not by override.** When the PIC judges there is no safer procedure, the flight does not proceed under a defeated dispatcher's authority — **it becomes an emergency**, entering a different authority regime with different rules and **mandatory reporting**. **TAKE — this is the strongest single import in §14.** OMNI currently has no representation for *"the parties do not agree and neither can override"* other than escalation to a party who may not exist. Aviation's answer: **reclassify the transaction into a regime where unilateral action is permitted, bounded and expensive to use.**
4. **Degraded-communication fallback with a named unilateral actor.** If the dispatcher cannot reach the PIC, it declares an emergency and acts. **TAKE — degraded mode names *who* may act alone, in advance.** OMNI's equivalent question — *who acts when the payer does not respond?* — currently resolves to `T-13`'s declared consequence of silence, which is thinner: it declares a **consequence** but not an **actor**.
5. **Deviation is permitted but never silent.** Emergency authority is real **and** generates a mandatory written report within 10 days plus contemporaneous notification. **TAKE — the exception path produces a durable accountability artifact by construction.** This maps onto the Accountability admission threshold (§5.5) far better than the estate currently records, and it is a strong external validation of *"non-action-as-commit"* and *"silence is not closure."*
6. **Information duty separated from decision authority.** §121.601 obliges the dispatcher to supply weather, airport and facility information regardless of who decides. **TAKE — the duty to inform is not a share of the decision.** This is a clean external analogue for the payer's obligation to state policy, deadlines and evidence requirements **without** thereby acquiring clinical authority.

**Transfer limits for aviation, stated because the carrier required them and did not supply them for this family.**
- **REJECT the shared employer.** PIC and dispatcher work for **one certificate holder** under **one operations specification**, and the joint responsibility is created by a **regulator**. OMNI's clinician, pharmacist and payer are **separate principals with no common employer and no common regulator of the joint act**. The dual-concurrence *mechanism* transfers; **the institutional container that makes it enforceable does not.**
- **REJECT the symmetric safety objective.** Both aviation parties are bound to the same objective — *can this flight be made safely*. A payer is **not** bound to the patient's clinical objective; its authority is over funding. **A dual-concurrence model must never be used to give a payer a co-equal vote on a clinical act** — that would invert Law 2 while appearing to formalize it. **This is the most dangerous available misreading of §14.3 and it is named here so it cannot be adopted by accident.**
- **REJECT the single operational tempo.** Aviation's joint release is a discrete, bounded, minutes-to-hours decision. Payer/pharmacy/patient resolution runs for days to months, asynchronously, with the parties changing. **The concurrence mechanism must survive A-Q17's partial order before it can be imported** — which it has not, because A-Q17 is unresolved (§13(b)).

### §14.4 Composite incumbent test (`M-202`) — attacked as a stack, not in isolation
**The required attack:** Palantir ontology/actions **+** Epic distribution and configuration gravity **+** AWS rails **+** OpenAI/Anthropic-class agents **+** incumbent payer/clearinghouse rails, **together**.

**The stack's combined capability, stated at its strongest.** Epic supplies the clinical system of record and the distribution; Palantir supplies typed governed actions and an operational object layer over integrated data; AWS supplies durable orchestration and compensation; frontier agents supply the interaction; payer and clearinghouse rails supply adjudication and transport. **Assembled, this stack can do most of what §1's map describes — inside one enrollment.**

**Where the composite still does not reach, and why it is structural rather than a feature gap.** Every element of the stack presupposes an **enrollment boundary** — a customer who owns the deployment and grants the integrations. The moment the parties are **sovereign and adverse** (a payer that will not accept the provider's ontology; a pharmacy that is a separate commercial principal; a patient whose continuity must survive the operator changing), the stack's coherence is **delegated write-back inside one tenant**, not cross-sovereign preservation. **`GRD-034`'s measure is the discriminator: not how many integrations, but whether every exchange preserves identity, authority, consent, context, ownership, commit and proof — across parties none of whom owns the deployment.**

**The honest counter, recorded because `M-202` exists to find it.** *The composite does not need to reach.* If the buyer is the enterprise, enrollment-bounded coherence may be **commercially sufficient**, and the cross-sovereign residual may be an architecture nobody pays for — **which is Gate-0 U11 and kill condition 2, not a comparator result.** **The composite incumbent test does not kill Axis 2; it sharpens the commercial question and leaves it exactly where U11 left it.**

---

## §15 — Gate-2 verdict

**Verdict vocabulary is the one the brief §5 fixed in advance:** `SURVIVES` · `SURVIVES_WITH_NAMED_RECONCILIATIONS` · `BROKEN_AT_<named claim>`.

> ### BUILDER'S VERDICT
> ## `SURVIVES_WITH_NAMED_RECONCILIATIONS`
> **Axis 1 (`NO_SHARED_FINANCING_TRUTH_SUBSTRATE`) survived a 23-row residual drive without a single row resolving to a new Insurance-owned truth object, and survived the composite incumbent attack for a structural reason rather than a feature reason.**
> **Axis 2 (`FIRST_CLASS_MIXED_FINANCING_OPERATING_PROFILE REQUIRED`) stands at seven of ten anti-shadow criteria demonstrated and three conditional — where all three conditionals are properties of the assembly rather than of the profile, with the missing mechanism named, owned and routed in each case.**

**This verdict is the builder's, is offered for reconciliation against `E2`'s independent scoring, and is provisional by construction because C3.9 does not exist.**

### §15.1 The named reconciliations — six, each with its owner and consuming gate
| # | Reconciliation | Why it is required | Owner / consuming gate |
|---|---|---|---|
| **R-1** | **Law 2's structural enforcement mechanism + audit spec** | anti-shadow criteria 9 and 10 are conditional on it; the INV trace fails two of four inversions without it; proposed kill condition 7 turns on it | **`REV-185`** (Nick + architecture_steward) + row-P elevation; **reuse C4.6 §9 incentive lineage** |
| **R-2** | **The symmetric Care-side `payment state ≠ care state` statement (A-Q6)** | SEED-2 is caught by D6 and not by Care; criterion 8 is conditional on it | **C5 / Care contract** |
| **R-3** | **A-Q14b's relation-shaped equivalence representation — designed with the capacity control at authorship** | trace 9's load-bearing outcome 5 cannot be recorded honestly; SEED-1 passes only because the feature is unbuilt | **Care Response-Seam Audit**, after dedup against CM and Accountability §19 `governed_relation_assertion`. **`D0INS-REV-002` closure criteria** |
| **R-4** | **REV-184's rationale-class field-set, including `resource/access-driven`** | the same failure from the second direction: an access-driven compromise becomes indistinguishable from a clinical judgement | **C5 / REV-184** |
| **R-5** | **A-Q17's partial order** — exposed with a specified trace dimension, not resolved | the multi-principal exchange is not linear and nothing produces the partial order; §14.3's concurrence import cannot land until it does | **C4.5 full pass**, which cannot close without disposing of the Insurance partial-order fixture |
| **R-6** | **Burden-incidence measurement, with its `T-22` guardrail attached** | the §10.B.9 anti-shadow failure is currently undetectable by construction; kill condition 4 is unevaluable | **unassigned** — routed to `D0INS-REV-002` and `REV-185` |

**None of the six is an Insurance-owned problem.** R-1 is care economics, R-2 is Care, R-3/R-4 are clinical-authority physics, R-5 is temporal, R-6 is unowned. **That is the same finding Gate-1b reached from the other side** — Insurance keeps exposing general physics that is written down in several places under several names with nobody in the room at once.

---

## §16 — Proposed routing — PROPOSALS ONLY, nothing landed

**`PRESPINE-PHASEA-INTEGRATOR` is VACANT. All shared control-plane surfaces were treated as read-only and none was written.** Per Gate-1b §15.1's five-part carry, this object is **part A (payload)** only. Parts B–E are integrator-owned.

| Target | Proposed change | Part |
|---|---|---|
| `08` **`D0INS-REV-002`** (Gate-2 parent row) | record dispositions: **A-Q12 resolved-to-owner-with-delta** · **A-Q15 role-reconciled** · **A-Q18 resolved-narrowly (funding condition)** · **A-Q14a/b/c, A-Q16, A-Q17 remain open**; add **SEED-1's precondition** to closure criteria | B |
| `08` **`REV-185`** | add the **§6.3 three structural requirements** and the **incentive-lineage reuse** finding; add **administrative friction** as an economic-pressure pathway | B |
| `08` — **new row proposed** | **burden incidence has no owner** (R-6), with its `T-22` guardrail | B |
| `04` read graph | extend route **`9p`** to name this result as the current head of the chain | C |
| `01` catalog | one row — drafted verbatim at §17 | A/C |
| **C4.5 next-actions** | bounded inbound pointer: the **Insurance partial-order fixture** + the §13(b) trace dimension (`full_pass_not_started` — an open surface, landed only under C4.5's own owner/gate) | D |
| **C3.6C** | bounded inbound pointer: **A-Q16** + the §14.2 `establishing authority` / TACON-exclusion / ADCON findings as external pressure on `source_authority_map` | D |
| **C4.6** | **NO BODY EDIT** — accepted L2 doctrine. The **loyalty-guard capacity enumeration gap** (financing origination, trace 8) is raised **to C4.6's own gate**, not written into it | D |
| `05` conflicts | none proposed by this gate | — |
| `03` decisions | **none — nothing here is a decision** | — |
| `06` guardrails | **none minted.** Proposed kill condition 7 (§10) is a Gate-2 review-gate question, not a guardrail | — |

**Two hard constraints obeyed:** **no re-derivation** (each carry states the question, its ID, route and maturity) and **no status laundering** (`source_authority_map` stays `analysis_nonbinding`; `T-21` stays pre-pass; C4.6 stays accepted L2 doctrine; the §14 comparator claims stay evidence-grade).

---

## §17 — New Artifact Completion (AWP §5) — proposed, integrator-owned

**Passport:** present at the head of this file (type · authority · status · domains · lifecycle role · source-of-truth relationship · supersession · manifest action · review gate). **Artifact class:** `analysis` / `architecture_gate_result`. **Authority level:** `analysis_nonbinding`. **Lifecycle role:** Gate-2 output object.

**Catalog row — drafted for the integrator to land verbatim in `01_master_corpus_catalog.md`:**

> `.cursor/plans/v4_INS_G2_operating_composition_and_sufficiency_result_2026-08-09.md` | v4 — INS-G2 — Operating Composition & Sufficiency — GATE-2 RESULT | markdown_doc | architecture_reconciliation | insurance_payer_oop, d6_commerce, care_operating_model, clinical_memory, rbac_authority, federation, cns_coordination, accountability_architecture, architecture_governance, cross_cutting | analysis_nonbinding | active | consult_if_routed | the Gate-2 result under Gate-1b §13.3's fourteen required outputs; builder verdict `SURVIVES_WITH_NAMED_RECONCILIATIONS`; provisional by construction pending C3.9 and `E2`; nothing promoted

**Read-graph disposition:** **route update, not a new node.** Route `9p` already owns the Insurance chain and already carries its read order; this result is the **new head of that chain** and should be appended there. **A new Tier-2 node is explicitly NOT proposed** — Gate-1b §13.2 C53 established that a single node is found only by a reader who already knows the subject, and `9p` is the cold-entry path that already works.

**Provisional items** (§9 `new_artifact_provisional_items`): **catalog row** and **read-graph route update** — both drafted above, **neither landed**. Owner: **`PRESPINE-PHASEA-INTEGRATOR` (VACANT)**. Review gate: **`user_knox_required`**. Per Gate-1b §15.1 rule 2, until the integrator transaction happens the honest state is that this gate **produced its payload and did not route it**.

---

## §18 — STOP RECEIPT

| Field | Value |
|---|---|
| **Work package** | `INS-G2-OPERATING-SUFFICIENCY` — Gate-2 construction and pressure, the single authorization in the current checkpoint |
| **Branch** | `cursor/ins-g2-operating-sufficiency-30f4`, from `main @ 9a6e7decd53e88b911e2f1c7f52172af8008328e` |
| **Boot Freshness Check** | **PASS** — `AGENTS.md` checkpoint-pointer block and read-graph Tier-0 #15 both name `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md`; `node scripts/check-checkpoint-pointer.mjs` exit 0 |
| **Governing contract** | Gate-1b §13.3 at blob `2e6a423cfae83203d4b4a1668224890043bfa12a` — **verified byte-identical to the carrier at HEAD** |
| **Files added / modified / deleted** | **1** / 0 / 0 — this file only |
| **Shared control-plane surfaces** | **0 touched** (integrator vacant; §16 is proposals) |
| **Contracts / schemas / migrations / code** | **0 touched** |
| **Concepts, files, lanes, routes renamed** | **0** |
| **Minted** | **nothing** — no law, domain, owner, object, graph, lifecycle, negotiation object, vocabulary, guardrail or eighth firewall name |
| **PR #13 / PR #11** | untouched — parked evidence and superseded source history respectively |
| **PR #9** | untouched; `D0CKPT-DEC-008` not reused |
| **OPECON lane** | not started; `downstream_consumption` of Insurance, unchanged |
| **Gate state · C3.9 · `E2` · verdict** | **not restated here — owned by the state table at the head of this file** (`D0CKPT-GRD-003` intra-artifact single-source). This receipt carries transaction facts only |
| **Fourteen §13.3 outputs** | **14 / 14 produced** — §1 · §2 · §3 · §4 · §5 · §6 · §7 · §8 · §9 · §10 · §11 · §12 · §13 · §14 |
| **Brief §5 acceptance floor** | **6 / 6 methods discharged** (§7.5) |
| **Resolved vs exposed** *(output 13's explicit requirement)* | **Resolved:** A-Q12 (owner-with-delta) · A-Q15 (role reconciliation) · A-Q18 (funding condition, narrowly) · the four-scope composition law · the A-Q1a/A-Q1b taxonomy · the joint-release question (**answered: yes**). **Exposed, not resolved:** A-Q17 · A-Q14a/b/c · A-Q16 · burden incidence · Law 2's enforcement mechanism |
| **Deployment claims** | **NONE** |
| **External-evidence claims** | **NONE promotion-grade.** §14 is evidence-grade; primary sources named and quoted |
| **Independent adversary** | **NONE.** Single-author construction. `E2` is the required independent leg and has not run |
| **Unresolved** | R-1…R-6 (§15.1) · A-Q1a/1b, A-Q2, A-Q4–A-Q11, A-Q13 unchanged · B-Q1–B-Q5 `EXTERNAL_EVIDENCE_REQUIRED` · C3.9 consumption · the §11.1 strict-reading question |
| **Checkpoint tier** | **2** — a bounded gate output inside an existing arc; no gate/phase/arc is claimed closed, no checkpoint is repointed, no control-plane surface is written. Handoff carrier = this file's §15/§16/§18 |
| **Work posture (§2.1)** | **`durable_lane`** — `lane_key` `INS-G2-OPERATING-SUFFICIENCY` · `lane_branch_and_head` `cursor/ins-g2-operating-sufficiency-30f4` · `lane_owner_or_transfer` Opus (Cursor), no transfer · `lane_state` `review_ready_pending_integrator` · `reentry_source_ref` this file + the 2026-08-09 checkpoint · `worktree_path_posture` environment-local, recreatable, non-canonical. **Two-reference boot is NOT in effect** — control-plane and lane content both resolve at `main @ 9a6e7de`, so no base pin is emitted |
| **Integrator** | `integrator_role_key` **`PRESPINE-PHASEA-INTEGRATOR`** · `integrator_holder_or_transfer` **VACANT — no shared surface may be landed while vacant** |
| **Next gate** | **Operator-controlled. Nothing auto-starts.** Eligible next actions, in no implied order: Nick + Knox review of this result under its `user_knox_required` gate · the integrator transaction (§16/§17) · C3.9 population, which is the designated pre-Gate-2 vertical falsifier and this result's `blocks_close` · `E2`, which must run **last** |

**STOP: `gate_2_result_constructed_provisional_pending_c3_9_and_e2 · review_ready_pending_integrator`**

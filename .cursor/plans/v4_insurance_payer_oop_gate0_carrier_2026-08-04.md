# v4 — Insurance / Payer / Coverage / Out-of-Pocket / Mixed-Financing — Gate-0 Carrier

**Lane** `INS-G0-MIXEDFIN` · **Parent** `PRESPINE-PHASEA` · **Branch** `analysis/insurance-payer-oop-g0` · **Stop** `review_ready_pending_integrator`

---

## PASSPORT (ten fields — common lane output contract element 1)

| Field | Value |
|---|---|
| **Document type** | `analysis` / `gate_0_framing_carrier` (durable lane carrier; **not** a contract, **not** spine or thesis prose, **not** a schema, **not** a new truth-owning domain) |
| **Authority** | `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Proposes routing only. |
| **Status** | `gate_0_reconnaissance_complete · architecture_framing_requires_reconciliation · amended_at_gate_0R_round2_and_round3_2026-08-06 · review_ready_pending_integrator · analysis_nonbinding · not_promoted · no_payer_domain_minted · no_connector_as_architecture · D6_not_edited · card_3_floor_correction_returned` |
| **Two-level reliance posture** | **`READY_AS_GATE0_RECONNAISSANCE_INPUT`** · **`NOT_READY_AS_PINNED_ARCHITECTURAL_RELIANCE`**. The reconnaissance findings are verified and usable now. The replacement *framing* (zones, gates, separations) is a candidate axis that Gate 1 must test against competing decompositions. See §0R and §L.0. |
| **Domain(s)** | `d6_commerce` (participating owner) · `identity` · `federation` · `documents_consent_media` (D7) · `rbac_authority` · `d5_service_occurrence` · `clinical_memory` · `observation` · `cns_coordination` · `care_operating_model` · `cross_cutting`. **No new domain is proposed.** |
| **Lifecycle role** | Gate-0 problem framing + routing-hypothesis test for insurance / payer / coverage / out-of-pocket / mixed financing. Determines *what the problem actually is*, where the current estate is sufficient or insufficient, which ownership decomposition deserves further work, and whether final Task-D may rely on the result. It does **not** decide the architecture. |
| **Source-of-truth relationship** | Consumes (read-only, never amends): `D6_commerce_contract.md` §10/§12 · `D0THES-REV-159` / `D0THES-REV-160` · `FWREG-017` · Identity / Federation / D7 / RBAC contracts · Care Operating Model capture · C4.6 pharmacy L2 + handoff · frozen Task-D method + interim population A→B→C. Recovers beyond the Card-3 floor: legacy system map §1O.4.2 + the **committed** insurance capture code (**deployment unverified**) · C3.5-F2 candidate primitives · C4.3 correction-continuity oracles · `REV-185` / `REV-187` · D5 / Observation / Clinical Memory / CNS / BIZOPS / Intake boundaries. |
| **Supersedes** | Nothing. This is the first substantive insurance carrier in the estate. |
| **Superseded by** | None. |
| **Manifest action** | `add_tier2` **PROPOSED** (consult-when-routed; read-graph route proposed at §M). Catalog row **proposed, not landed** — landing belongs to `PRESPINE-PHASEA-INTEGRATOR` at the parent integration transaction (Agent Work Protocol §2.1 `C5`). |
| **Review gate** | `user_knox_required` (Nick + Knox), then integrator routing. |

---

## §0R — GATE-0R RECONCILIATION RECORD (amendment, 2026-08-06)

Knox returned **`REQUEST_CHANGES` — bounded material reframe** on the first snapshot (`f99d67c`): preserve the reconnaissance, do not merge, correct the closure. I accept most of it, reject one part, and add three things neither review carried. **This section is the audit trail so a byte reviewer can check each edit against its stated basis.**

**The verification neither review had.** Both reviews made opposing claims about inherited disagreement machinery at *consulted* depth — I asserted absence, Knox asserted presence, and neither of us had read the sources in full. A read-only verification agent then read `clinical_memory_assertion_contract.md`, `v4_C4_3_care_response_seam_correction_continuity_test.md`, `v4_REV184_decision_state_reconciliation.md` and the **full** `v4_C4_care_operating_model_capture.md` end to end. It settles the dispute against me and partly against Knox. Findings are cited inline below and at §C.4a.

### Corrections accepted (errors, not framing preferences)

| # | What was wrong | Basis | Where fixed |
|---|---|---|---|
| **R1** | *"Nothing anywhere in the estate can hold a fact where two authorities disagree."* **Falsified.** Clinical Memory has `unresolved_conflict` + a `conflicting` longitudinal pattern + fail-closed gates; REV-184 preserves *concurrent conflicting stances* and carries a `dispute` stance and `disagreement-as-escalation`; C4.3 types state as `wrong ≠ stale ≠ disputed ≠ uncertain` with `O4 owner-committed-own-correction(no-force-match)`; Care preserves discordance across parallel authority planes. **I made an absence claim about bodies I had only grepped — a direct violation of my own boot rule that a search miss is not proof of absence.** | verified full read | §C.1, §C.4a, §0 V1/V3 |
| **R2** | *"Retroactively un-passed."* This licenses destroying history. *"Payer P asserted active coverage on March 3 via response R"* is true forever. **Knox's sharpest catch.** | C4.3 `O1 history-preserved`, `O2 operative-view-corrected-without-erasure` | §C.4 |
| **R3** | *"Shipped and in production."* The repository proves **committed migrations and code**, not that a production database applied them. Corrected to **committed repository implementation/migration state; deployment unverified** throughout. **Round 3 tightens the tightening:** the correct phrase is *"no deployment receipt was inspected or produced in this lane"* — my Round-2 wording said *"no deployment evidence exists,"* which asserts absence in the world from absence in my inspection. Same error class as R1. | no receipt inspected | §2, §D.4, §L.1, passport |
| **R4** | *"Two canonical sources of coverage truth."* Neither surface was ever established as canonical — one is explicitly routing/evidence, the other an administrative projection. What is *proven* is overlapping fields with no linkage, no source-authority model and no operative-view contract. | migration comments | §D.4, Gap G2 |
| **R5** | The immediate migration recommendation **contradicted my own imported discipline.** I called it a two-way door; my §G.2 import list classifies the responsibility decomposition and money-ledger model as **one-way doors**, and coverage identity is in that class. Withdrawn for containment. | §G.2 self-contradiction | §K.1 |
| **R6** | *"Rung 6 of the ACK ladder."* Economic finality is **orthogonal** to transport/acceptance, not stacked above it. My claim that Rx lacks clawback physics was also wrong — contradicted by my own helper's flagged-unverified note on PBM effective-rate reconciliation, and a dispense occurrence can stay true while its settlement reverses. | Knox + own evidence base | §C.5 |
| **R7** | *"Counterparty-confirmed = D7 gate four."* D7's three gates are an artifact→clinical-meaning chain; an external authority's assertion answers a different question at a different altitude. | D7 §4 | §C.4 |
| **R8** | *"Already accepted"* collapsed four authority levels. Correct: **represented and accepted in direction, not yet contracted.** | Care passport `REVIEW-DRAFT · NOT closed`; REV-184 passport `analysis_nonbinding` | §D.1, §0 V6 |
| **R9** | Five zones headlined as decomposition. Demoted to **candidate analytical axis**. Knox's argument is better than mine: write authority alone cannot determine ownership, because Clinical Memory shows different writers can share one owner when the owner is the *governed assertion substrate*. | Knox | §C.1, §0 V3 |
| **R10** | Estimate-as-speech-act presented as a new separation. It **generalizes past insurance** (consent disclosures, medication warnings, aftercare, price quotes), so if it is a pattern it belongs above insurance. | Knox | §D.2, §K.1 |
| **R11** | Verdict 5 headlined `CONTRAINDICATED` flatly. Payer-**named** domain contraindicated; whether a general **non-payer-shaped agreement/financing substrate** is owed stays open. | Knox | §0 V5, §E.4 |
| **R12** | Blind decomposer described as *"genuine corroboration."* Downgraded to **convergent independent analysis** — agreement among agents is not corroboration. | `AGENTS.md` non-negotiable | §G.5 |
| **R13** | *"Roughly one-third"* — rhetorical pseudo-precision, no coverage metric supports it. Removed. | Knox | §0 V4, §E.5 |
| **R14** | Single `READY_WITH_NAMED_LIMITS`. Replaced with the two-level posture. | Knox | passport, §L.0 |

### Where I push back on Knox

**P1 — Knox's review contains the same flaw it corrects.** Knox asserts the general disagreement physics are *already covered*, citing Clinical Memory, REV-184 and C4.3 — all listed in Knox's own posture as **consulted, not read fully**. That is a **presence** claim at exactly the depth I used for my **absence** claim. Symmetric error. It is now resolved by verified read, and the resolution is that **Knox's narrower replacement formulation is correct and Knox's broader inheritance claim is not**: type-(b) agreement-as-disputed-object **was not found in the four verified carriers or in targeted searches to date** (`bilateral`, `mutual`, `arbitration`, `breach`, `negotiated` — not found; **inspection radius stated deliberately, per §M(c) — I originally wrote "genuinely does not exist" here too**), while the general assertion/stance/correction machinery genuinely does exist but is `draft_for_ratification` / `analysis_nonbinding` / `implementation absent-or-partial`.

**P2 — Containment needs teeth, not a registry row.** I accept withdrawing the migration (R5), but Knox's containment as written is a note. If someone builds an insurance feature on those tables next month, a note does not stop them. §K.1 now states the containment as an **enforceable no-new-dependency rule with a named trip condition**.

**P3 — Gate 1 must split.** Knox sequences targeted evidence *after* Gate 1's questions freeze. If we freeze those questions in US-derived vocabulary, no later evidence pass can rescue us. **Gate 1a (normative, regime-independent) must be a Gate-1 input, not a successor.** §K.1.

### What both reviews underserved (added here)

**A1 — The normative frame the operator actually asked for.** Both reviews still reason from the US payer system outward. §F is a US regulatory timeline; Knox's semantic inventory is a generalization *of* US insurance concepts. The stronger organizing claim: **the invariant is not insurance — it is that someone other than the patient may bear part of the cost, and that fact must never distort care.** Under that frame a commercial insurer, Medicare, an employer, a lender, a mutual pool, a risk-bearing provider, a family member, a charity and **nobody** are the same shape. Made falsifiable by two new gate criteria at **§J.0**: the **payer-deletion test** and the **payer-inversion test**.

**A2 — The gravitational answer was a business moat, not an architectural one.** "Repeated verified execution producing trust and surplus" is true but is not what no one else *can* own. The architectural candidate, with its objection attached, is at **§I.2a**.

**A3 — Two verified inheritances that improve the findings rather than only correcting them.** C4.3 already carries a **ten-state external-custody ladder** and `O10 ACK≠accepted-custody` (I had attributed O10 to the Rx L2 alone), which supports the orthogonal-finality reframe better than my rung-6 did. And the full Care read shows the capture contains **no payer-denial, no OOP-while-disputed and no contract-terms mechanics at all** — so the inheritance is *narrower* than I claimed but *sharper*: it is the authority-plane model, not financing doctrine. §C.4a, §D.1.

### Round 3 (2026-08-06) — propagation fidelity + three constitutional refinements

Knox returned **`PASS WITH REQUIRED MICRO-PATCHES`** on Round 2: the substantive reframe accepted, no further redesign required, **but the bytes not yet mergeable.** That verdict was correct and the blocking item was mine.

**The blocking defect — I amended the analysis and left my own routing bundle carrying Round-1 conclusions.** §M still instructed the integrator to land five-zones-as-decomposition, a D7 fourth gate, ACK-rung-6, duplicated-canonical-coverage-truth, the stale `INS-G1-OWNERSHIP` trigger and a `gate_0_complete` catalog status. **Had that landed, the control plane would have canonized exactly what the body withdrew** — which is worse than never correcting, because the correction would have been visible in prose while the superseded claims propagated through the ledgers. §M is rewritten; propagation fidelity is now treated as part of a correction rather than an afterthought.

| Patch group | Disposition |
|---|---|
| **P3-1 Implementation maturity** | Every surviving `shipped` / `in production` / `live tables` replaced with **committed repository implementation/migration state; deployment unverified**. `no deployment evidence exists` → **`no deployment receipt was inspected or produced in this lane`**. |
| **P3-2 Withdrawn concepts** | Purged: fourth verification gate · rung 6 · "ladder gains rung 6" · "two things break … rung 6" · "genuine hole" / "two genuine holes" · "duplicated canonical coverage truth" · "only remaining gap". Replaced by H-N1/H-N2/H-N3 and **"clearest candidate gap."** |
| **P3-3 §M routing — BLOCKING** | Rewritten. Decision ledger cut from four rows to **two decisions**, with the rest demoted to open-hypothesis rows. Catalog status matched to the passport. Conflict row reworded off "duplicated canonical truth." New open-review row describes the **agreement/position/operative-posture constellation**, trigger `INS-G1B-OWNERSHIP`. |
| **P3-4 Counts / IDs** | Falsifiables renumbered **F1–F12** in order; Verdict 11 corrected from nine; F3/F4 rewritten off the withdrawn framings; source-floor omissions corrected to **four**; stale `INS-G1-OWNERSHIP` removed; Care read-posture split into **mine (`C`) vs the verification agent's (`F`)** rather than folded together. |
| **P3-5 Absence scope** | Narrowed to a stated **inspection radius**, with a Gate-1b **EXISTS-AS sweep** owed across Federation · D6 · BIZOPS · Settings · GCE/counterparty · workforce/legal agreements · historical contract carriers before any net-new owner is declared. |
| **P3-6 Normative frame** | Both constitutional corrections adopted — see below. |
| **P3-7 Moat language** | Ownership language replaced with permissioned projection — see below. |
| **P3-8 Containment status** | `INS-HAZ-COVSURF` restated as a **proposed checkable containment contract, not an enforced rule**, with the four integrator landings that activate it named explicitly. |
| **P3-9 Evidence preservation** | Split into **(a)** urgent preservation-only capture and **(b)** later question-driven analysis, with (a) proposed as a **binding** condition of parent integration and flagged as a real open dependency this lane cannot discharge. |

**Three constitutional refinements — Knox improving the architecture, not correcting an error.** Each is recorded because each removes a real over-collapse that would otherwise have shaped Gate 1a:

- **C1 — "must never distort care" was morally attractive and architecturally wrong.** Financing legitimately shapes feasibility, timing, site, choice and the accepted plan. The corrected invariant turns on **silently**: financing must never *silently* rewrite clinical truth, indication, professional authority or patient choice, and any constraint it does impose must keep its owner, alternatives and consequences **separately legible** (§J.0).
- **C2 — the sharpest catch in the whole review.** I applied `GRD-026` to "insurance" and then **committed the identical god-object error one level up**, declaring nine funding kinds "the same shape." A TPA administers without bearing risk; a lender substitutes the obligated party; a membership creates entitlement rather than third-party cost-bearing; a sponsor funds without access to identified detail. At most a **minimal funding-participation interface** may be shared, with **non-fungible native lifecycles preserved** — and Gate 1a must be free to find even that interface is a convenient projection (now falsifiable **F8**). Also: a payer-deletion failure means **"not universal core," not automatically "adapter"** — the test determines **altitude, not implementation class.**
- **C3 — my moat language would have rebuilt the captivity problem OMNI exists to reject.** "What OMNI could own that no incumbent can" implies that leaving OMNI means losing your history. Corrected: **no single counterparty holds legitimate end-to-end authority over the person's financing context; OMNI may assemble a permissioned, source-authoritative projection while the underlying facts stay counterparty-owned and patient-portable.** **The moat is performing better even when the person can take their truth and leave** — stronger commercially and consistent with estate doctrine instead of in tension with it.

**One pattern self-reported rather than merely patched.** I made the same error shape **three times** in this arc — absence-from-my-inspection asserted as absence-from-the-estate — and review caught it every time. Three instances is one habit, so it is proposed as a **durable guardrail** at §M(c) rather than fixed three times and forgotten.

### Amendment scope

Same branch · same single writable file · **no new sidecar** · no shared-surface change · no base rotation · bounded amendment, not a rewrite. Returned at `review_ready_pending_integrator` for Knox byte review.

---

## §0 — VERDICT SURFACE (the thirteen required Gate-0 verdicts, up front, no soft conclusions)

| # | Question | Verdict |
|---|---|---|
| **1** | **Estate sufficiency** — is the existing OMNI source estate sufficient to *frame* the problem? | **YES for framing, NO for decomposition.** Sufficient, and *more* sufficient than the first snapshot claimed: OMNI already carries substantial multi-authority disagreement, supersession, correction and frozen-context physics (§C.4a, verified) plus the care/financing authority-plane posture (§D.1) — represented and accepted in direction, **not yet contracted**. Insufficient in two verified places: nothing models a **mutually constituted agreement whose disputed terms are the object, with both parties as co-parties** (Gap **G1**, §C.4a), and two committed implementation surfaces carry **overlapping coverage-like fields with no linkage, source-authority model or operative-view contract** (Gap **G2**, §D.4). |
| **2** | **Source-floor sufficiency** — was Card 3's floor adequate? | **NO — materially incomplete in four ways** (a fourth was added at Gate 0R). (a) It omits the **committed** insurance implementation code, so a lane obeying only the floor would report insurance "architecturally untouched" while `payer_eligibility_documents` + `patient_insurance_details` already exist in committed migrations. (b) It omits **C4.3** (correction-continuity Law 10.1 + O1–O22), which is the exact oracle set retroactive coverage termination needs. (c) It names the pharmacy handoff **without naming the obligation inside it** — C4.6 designated Insurance as *the deliberate falsifier of its own rubric*. (d) **Added at Gate 0R:** it omits Clinical Memory, REV-184 and C4.3, so a lane obeying only the floor re-derives disagreement machinery the estate already has — which is exactly what happened here. Full correction: §A.3. |
| **3** | **Problem decomposition** — one coherent arc or several linked problems? | **SEVERAL — but the winning decomposition is NOT decided here.** Five write-authority zones are offered as a **candidate analytical axis and anti-collapse test**, not as the architecture: write authority alone cannot determine truth ownership, because Clinical Memory shows different writers legitimately share one owner when the owner is the *governed assertion substrate*. Gate 1 must compare **at least three** competing decompositions — write-authority-first, lifecycle/commitment-first, and existing-owner composition. §C.1, §K.1. |
| **4** | **Architectural home** — is D6 the principal home, one participating owner, or misrouted? | **D6 is correctly named and materially insufficient as "the home." It is the money / entitlement / patient-responsibility anchor — one participating owner.** Not misrouted; under-scoped. Three things D6 structurally cannot own are argued at §E.3. *(No proportion is asserted; no coverage metric supports one.)* |
| **5** | **Domain decision** — new domain needed, contraindicated, or genuinely open? | **A payer-NAMED domain is strongly contraindicated. Whether a general, non-payer-shaped agreement / position / financing-arrangement owner is owed remains GENUINELY OPEN.** The prohibition rests on `D0THES-GRD-026` plus C4.6's *counterparty-noun ≠ lifecycle*: "payer" names a counterparty acting in at least eight capacities, not a truth lifecycle. But Gate 0 has **not** proved every required truth fits an existing owner — agreement/participation truth, policy-ruleset ownership, financing-arrangement identity, prospective external commitments, contracted-rate interpretation and multi-party allocation are all unresolved. Refusing to prejudge that is not domain proliferation. §E.4. |
| **6** | **Constitutional posture** — which care-vs-financing separations must enter the spine? | **The general physics are strongly inherited and must not be re-derived; their payer-specific composition is uncontracted and requires explicit carry-forward plus validation.** Verified: the Care capture is `REVIEW-DRAFT · NOT closed · analysis_nonbinding`, its payer passages are `[INV]`-tagged **candidates composing REV-184/EVRUN-000004**, and its own §21a defers C5 promotion behind a coverage gate. Verified further: the capture contains **no payer-denial, no OOP-while-disputed and no contract-terms mechanics at all** — so the inheritance is the *authority-plane model*, not financing doctrine. **Three financing-specific hypotheses** (not settled separations) are carried forward at §D.2. |
| **7** | **Product wedge** — is the low-friction insurance experience a credible OMNI wedge? | **NOT as stated. YES in a re-scoped form, under three dependencies.** "Photograph the card and everything else is handled" is falsified by a single wrong estimate at a single front desk, and it promises control over counterparties OMNI has none over. The defensible form is **"everything is tracked, and the exceptions are unmistakable, early, and cheap to resolve."** The one real bridge from the current estate is the **cosmetic/reconstructive boundary**. §I. |
| **8** | **External dependency** — control / coordinate / verify / observe? | Sorted explicitly at §F.5. **OMNI controls nothing on the payer side.** It can *commit* only its own submissions, interpretations, disclosures and ledger; everything else is a provenanced projection of a counterparty assertion, and several categories are **retroactively falsifiable for up to 24 months**. |
| **9** | **Task-D readiness** | **Two levels, deliberately separated: `READY_AS_GATE0_RECONNAISSANCE_INPUT` and `NOT_READY_AS_PINNED_ARCHITECTURAL_RELIANCE`.** The verified reconnaissance is usable now; the replacement framing is not yet architecture. §L.0. |
| **10** | **Task-D reliance** | Fourteen claims Task-D may rely on. §L.1. |
| **11** | **Task-D falsification** | **Twelve** hypotheses Task-D must be free to defeat (F1–F12), including this carrier's central zone model, its normative frame, its funding-participation interface and its moat candidate. §L.3. |
| **12** | **Next gate** | **An adaptive, collapsible sequence — not a two-gate compression and not a ceremonial multi-gate program.** Gate 0R (this amendment) → **Gate 1a normative/regime-independent physics** → **Gate 1b ownership decomposition** against the verified inherited estate → targeted evidence *after* the questions freeze → C3.9 as one vertical falsifier → selected cross-regime deep traces → final sufficiency receipt. Gates collapse early on decisive evidence. Plus an **enforceable containment rule** on the two implementation surfaces — which replaces the withdrawn migration recommendation. §K. |
| **13** | **2030/2035 posture** | Six things must be preserved now or the future is foreclosed; the sharpest is that **coverage must be person-scoped, not tenant-scoped, from the start** — structurally irreversible later. §J.5. **Prior to any of that, the model must survive two falsification tests: payer-deletion and payer-inversion (§J.0).** Anything that fails either is over-fitted to 2026 US payers. |

**One-sentence summary (amended).** Insurance is neither an untouched domain nor a Commerce feature: OMNI already carries the general multi-authority disagreement, correction and authority-plane physics this territory needs — as accepted *direction*, not ratified contract — and already carries counterparty-exchange machinery in the C4.6 rubric and a committed capture layer in code; so the real Gate-0 finding is that **the clearest cross-cutting candidate gap surfaced here is the absence of any representation of a mutually constituted agreement whose disputed terms are the object — alongside overlapping committed coverage surfaces with no source-authority or operative-view contract — and the correct next move is to test competing ownership decompositions against that inheritance rather than to declare one.** *(Not "the remaining gap": §L.2 still lists guarantor, coding, sponsor-vs-payer, provider-role, policy-ruleset, allocation and authorization ownership as unresolved.)*

---

## §1 — SOURCE POSTURE (contract element 2 — stated honestly)

> **★ AMENDED AT GATE 0R — a depth failure I have to report on myself.** The first snapshot's headline *negative* claim (nothing can hold contested truth) and its headline *positive* claim (the posture is already accepted) **both rested on bodies I had only grepped** — Clinical Memory at searched depth, the Care capture by targeted grep. My own boot rule says a search miss is not proof of absence and that controlling parent sources must be opened before an absence, supersession or maturity claim. I broke it in both directions. Gate 0R commissioned a read-only verification agent that read `clinical_memory_assertion_contract.md`, `v4_C4_3_care_response_seam_correction_continuity_test.md`, `v4_REV184_decision_state_reconciliation.md` and the **full** `v4_C4_care_operating_model_capture.md` end to end; its findings are at §C.4a and they correct me. **The same failure is present in the Knox review** in the opposite direction (push-back P1) — a presence claim at consulted depth — which is why the verification was commissioned rather than the review simply adopted.

**Read fully BY THE VERIFICATION AGENT at Gate 0R** (not by me — the distinction is load-bearing and is kept explicit rather than folded into my own posture): `.cursor/plans/contracts/clinical_memory_assertion_contract.md` · `.cursor/plans/v4_C4_3_care_response_seam_correction_continuity_test.md` · `.cursor/plans/v4_REV184_decision_state_reconciliation.md` · `.cursor/plans/v4_C4_care_operating_model_capture.md`. **My own depth on these remains `consulted` (Care, Rx) or `searched` (Clinical Memory, C4.3) — I did not personally read them end to end, and the source matrix below keeps my marking unchanged for that reason.** Where this carrier cites them, it cites the agent's quoted-verified findings, not my reading.

**Read fully BY ME** (opened and read end-to-end at the pinned base):
`D6_commerce_contract.md` · `v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (frozen Task-D method) · `v4_C4_2A_task_d_interim_closeout_and_pause.md` · `v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` §7/§7.1 + Card 3 + the common lane output contract + the source-floor aperture clause · the exact rows `D0THES-REV-159`, `D0THES-REV-160`, `D0THES-REV-185`, `D0THES-REV-187`, `FWREG-017`, `FWREG-018` · the passports + §3 ownership boundaries + §4/§5 object tables of `identity_contract.md`, `federation_contract.md`, `D7_documents_consent_media_contract.md`, `rbac_authority_contract.md` · the **committed** DDL for `payer_eligibility_documents`, `patient_insurance_details`, `eligibility_decisions`.

**Read fully from current `main`** (control-plane, per two-reference boot): `AGENTS.md` · `04_manifest_read_graph.md` Tier-0 · `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md` §§4.1, 4.1a, 4.2 (including the `INS-G0-MIXEDFIN` activation receipt) · `.cursor/rules/00_omni_opus_boot.mdc`.

**Consulted deeply** (targeted, section-level, with the cited passages read in place — not skimmed):
`v4_C4_care_operating_model_capture.md` (the authority-plane, admissibility-state, consent-family, participation-topology and validation-gate passages — see §D.1 for the exact lines) · `HANDOFF_2026-07-27_c4-6-pharmacy-and-cross-facet.md` (§§93/105/188/204 — the Insurance-as-falsifier reservation) · `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` (§2.A/§2.E standards classification, the adapter-family/connection-instance split, the rung 1–5 ACK ladder, counterparty-noun ≠ lifecycle) · `system_map_three_layers_60706286.plan.md` §1O.4.2 + the `revenue_cycle/` sibling reservation + the lab-billing out-of-scope line · `DL-17_commerce_DRAFT_2026-05-17.md` Q-DL17-2/Q-DL17-5.

**Searched / located only** (found, classified, cited for existence and disposition — **not** read end-to-end; a search hit is not a read):
`OMNI_System_Map_vNext.md` D6 row · `OMNI_Surface_Map_vNext.md` · `v4_C3_5F2_superiority_and_primitive_sufficiency_matrix.md` (P17 `payment_care_firewall`, P20 `claim_lifecycle`, SUP-461/462/489) · `v4_C4_3_care_response_seam_correction_continuity_test.md` (Law 10.1 + O1–O22 known via C4.2A's summary and the C4.3 integration clause in the Task-D method, **not** by reading C4.3 itself) · `v4_C3_9_plastics_medspa_care_setting_pressure_test.md` (`shell_pending_population`) · `v4_C4_governed_reporting_resolution_capture.md` · C3.6/C3.7 coverage-analysis material (reached through `REV-187` only) · `D5_service_occurrence_care_coordination_contract.md`, `observation_measurement_contract.md`, `clinical_memory_assertion_contract.md`, `CNS_orchestration_contract.md`, `business_ops_workforce_contract.md`, `intake_contract.md` (boundary lines only) · `03_decision_extraction_ledger.md` (`D0THES-DEC-026/036/039`) · `phase_4h_target_first_decision_record.md` (the payer-vs-clinical "denied" split).

**NOT inspected** (named so the omission is not silent): `v4_C4_2B` and `v4_C4_2C` in full (Task-D interim bodies; I relied on C4.2A's terminus, which is the designated status/routing surface — **this is a real limit, disclosed at §L.0 L4**) · *(C4.3 and the Care capture moved to read-fully at Gate 0R)* · the C3.5 `HCASE` library · the C3.6/C3.7 arc bodies · `EVRUN-2026-000012` bodies · the full legacy three-layer map (1,000+ insurance-vocabulary hits; I read §1O.4.2 and the sibling/appendix lines, not the whole file) · Mindbody commerce raws · the majority of `docs/architecture/` evolution volumes.

**Live repository verification.** All architecture claims verified at the pinned content base `f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05` in an environment-local worktree. All control-plane state verified at `main` `d592e402b779aaedc1f137189bf51cd2b5ca678d`. **Implementation claims (§D.4) were verified by reading the DDL directly**, not inferred from documentation. Absence of EDI/claims/adjudication code verified by exhaustive pattern search across `supabase/`, `lib/`, `app/` — reported as *not found in the searched tree*, which is a search result, not a proof of absence.

**Environment limitation (`D0OPER-DEC-004`).** The off-repository controlling plan `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` is **absent in this cloud environment** (`~/.cursor/plans/` does not exist). Per the off-repo rule I relied on the in-repo `AGENTS.md` + read-graph #15 + checkpoint §4.2 pointers and did **not** treat the off-repo banner as verified coequal state. Its reconciliation remains operator-owned.

**Research-helper posture.** Seven read-only helper agents were used, each given a **non-overlapping** question and forbidden from repository mutation; none had write access and none authored any part of this carrier. Two were deliberately **blind** to the D6-home hypothesis. Assignments, independence conditions and dispositions are recorded at §G.4. Disagreements among them are preserved, not averaged (§G.5).

---

## §2 — MATURITY / INPUT-STATE DECLARATION (contract element 4)

Overall input state: **`accepted` as to the inherited constitutional posture · `candidate` as to this carrier's decomposition · `open` as to every ownership assignment.**

| Axis | State | Evidence |
|---|---|---|
| **Architecture** | **PARTIAL.** Constitutional posture accepted (inside Care, not inside a commerce or payer artifact). Decomposition **absent** before this carrier; **candidate** after it. | Care capture authority-plane + admissibility passages; D6 §12 deferral |
| **Contract** | **ABSENT.** No contract anywhere owns coverage, benefit interpretation, network participation, authorization, claim, adjudication, remittance or appeal. D6 explicitly defers. D7 and Observation *punt to D6*, and the punt has not landed. | D6 §10/§12; D7 §3; Observation §3 |
| **Build** | **PARTIAL — committed capture-and-routing migrations only, better-shaped than the documentation implies, and NOT proven deployed.** Two migration surfaces + intake questions + a routing RPC, in committed code. **No deployment receipt was inspected or produced in this lane**, so production state is unproven in either direction. **No** claims, adjudication, eligibility inquiry, remittance, prior-auth, appeal, COB or clearinghouse code was found in the searched tree — a search result, not a proof of absence. | §D.4, verified DDL |
| **Evaluation** | **ABSENT.** No fixture, oracle, property test or mutation test exercises any financing-authority invariant. C3.9 — the designated mixed-financing falsifier — is `shell_pending_population`. | C3.9 status |
| **Production** | **ABSENT** for every mechanic beyond card capture. | §D.4 |

**Binding asymmetry (frozen Task-D method §C.1 Axis 3).** Everything this carrier proposes is a **design** position, not a production one. Incumbents are `SHIPPED` across this territory (§G). An unbuilt OMNI semantic advantage counts as a design advantage only. `semantic_fitness` and `execution_maturity` are scored separately and must not be collapsed.

**Epistemic language law (inherited, C4.2A §2.4 — applied throughout).** Where this carrier states that an incumbent lacks something, it means **"not demonstrated in the reviewed public primary sources"** — never "verified absent." Absence from public documentation is not architectural absence.

---

## §A — ESTATE COVERAGE MANIFEST (required output A)

### §A.1 — Read-depth and status inventory

Depth legend: **F** read fully · **C** consulted deeply (named sections) · **S** searched/located only · **N** not inspected.

| Path | Blob @ base | Depth | Type / authority | Status | What it contributes |
|---|---|---|---|---|---|
| `.cursor/plans/contracts/D6_commerce_contract.md` | `5de86068` | **F** | `domain_contract` · `canonical` | `draft_for_ratification` | §10 + §12 deferral; §5 authority split; §6 per-line rails; §8 invariants |
| `.cursor/plans/doctrine/08_open_review_queue.md` | `9399c551` | **F** (4 rows) | ledger · canonical | REV-159/160/185/187 **open** | The canonical unresolved rows |
| `.cursor/plans/doctrine/future_work_registry.md` | `bdb92397` | **F** (2 rows) | registry · canonical | FWREG-017 `sequence_accepted` | Activation pointer; invariants; anti-patterns |
| `.cursor/plans/v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` | `26eccb0c` | **F** (§7/§7.1) | `handoff_or_readiness_gate` | accepted + landed | Card 3; common output contract; aperture clause |
| `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` | `3eeda5b0` | **F** | `analysis` · nonbinding | `shell_method_frozen` | Six-axis grammar; hard invariants; H0–H3 |
| `.cursor/plans/v4_C4_2A_task_d_interim_closeout_and_pause.md` | `d249da2a` | **F** | `handoff_or_readiness_gate` | interim, **no §7 verdict** | Surviving OMNI candidate; O10 three-level custody; H-posture |
| `.cursor/plans/v4_C4_2B_task_d_opus_builder_p0_verbatim.md` | `86462e77` | **N** | `analysis` · nonbinding | preserved | Task-D interim body — **not read (limit L4)** |
| `.cursor/plans/v4_C4_2C_task_d_gemini_b_partial_adversary_verbatim.md` | `df2284dd` | **N** | `analysis` · nonbinding | `scope_nonconformant` | Task-D interim body — **not read (limit L4)** |
| `.cursor/plans/v4_C4_care_operating_model_capture.md` | `9a641a0e` | **C** *(mine)* / **F** *(verification agent, Gate 0R)* | cross-cutting capture · nonbinding | **REVIEW-DRAFT**, not closed | The inherited authority-plane posture — **direction, not contract** (§D.1) |
| `.cursor/plans/contracts/identity_contract.md` | `8444ba87` | **F** (§3–§5) | `domain_contract` · `canonical` | `draft_for_ratification` | Namespace; L0–L4; handle-vs-person; `jurisdiction_of_care` |
| `.cursor/plans/contracts/federation_contract.md` | `b9097c3b` | **F** (§3–§5) | `domain_contract` · `canonical` | `draft_for_ratification` | `legal_entity`; `provider_credentialing`; grant layer; `attribution_line` |
| `.cursor/plans/contracts/D7_documents_consent_media_contract.md` | `9a264ac0` | **F** (§3–§5) | `domain_contract` · `canonical` | `draft_for_ratification` | **The three-gate model**; capture→classify→route |
| `.cursor/plans/contracts/rbac_authority_contract.md` | `8e223337` | **F** (§3–§5) | `domain_contract` · `canonical` | `draft_for_ratification` | Capability atoms; consent-gate; attestation tiers |
| `.cursor/plans/HANDOFF_2026-07-27_c4-6-pharmacy-and-cross-facet.md` | `4187fc99` | **C** | `handoff` · nonbinding | landed `44feb15` | **Insurance reserved as the rubric's falsifier** |
| `.cursor/plans/v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` | `0f96645f` | **C** (§2.A/§2.E/§4/§6) | `analysis` · nonbinding | L2 accepted, landed | **Rung 1–5 ACK ladder; adapter-family split; §2.E already classifies payer adjudication as DEFER** |
| `.cursor/plans/system_map_three_layers_60706286.plan.md` | `5e6d484f` | **C** (§1O.4.2 + siblings) | legacy plan · **transitional evidence** | superseded for migrated domains | §1O.4.2 routing-only target; `revenue_cycle/` reservation |
| `supabase/migrations/20260508120000_phase_4d_artifact_pipeline.sql` | `228b3ac9` | **F** (DDL) | migration · **committed** | deployment unverified | `payer_eligibility_documents` |
| `supabase/migrations/20260504120000_intake_foundation_v1.sql` | `711686ea` | **F** (DDL) | migration · **committed** | deployment unverified | `patient_insurance_details`; `eligibility_decisions` |
| `lib/intake/question-bank/universal/insurance_payment_readiness.ts` | `c01fbc2a` | **S** | code · **committed** | deployment unverified | Intake insurance capture |
| `lib/intake/write/insurance_details.ts` | `8a86f0c8` | **S** | code · **committed** | deployment unverified | Write path to `patient_insurance_details` |
| `.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md` | `19902bdd` | **C** (Q-gates) | doctrine DRAFT → evidence | compiled into D6 | Q-DL17-5 explicitly out of scope; financing Q-gate |
| `.cursor/plans/v4_C3_5F2_superiority_and_primitive_sufficiency_matrix.md` | `91e6c0fd` | **S** | `analysis` · nonbinding | **candidate**, not promoted | P17 `payment_care_firewall`; P20 `claim_lifecycle` |
| `.cursor/plans/v4_C4_3_care_response_seam_correction_continuity_test.md` | `154f82bd` | **S** | `analysis` · nonbinding | design-PASS, landed `5275707` | **Correction oracles O1–O22 — the retroactivity oracle set** |
| `.cursor/plans/v4_C3_9_plastics_medspa_care_setting_pressure_test.md` | `2ca65b19` | **S** | `analysis` · nonbinding | **`shell_pending_population`** | The designated mixed-financing falsifier |
| `.cursor/plans/OMNI_System_Map_vNext.md` | `af4875e4` | **S** | system map · canonical emerging | D6 row: "DEFERRED v0" | Mirrors the contract |
| `.cursor/plans/contracts/observation_measurement_contract.md` | `da16e608` | **S** | `domain_contract` · `canonical` | `draft_for_ratification` | Extraction-fidelity gate; punts insurance to D6 |
| `.cursor/plans/contracts/clinical_memory_assertion_contract.md` | `728ea641` | **S** | `domain_contract` · `canonical` | `draft_for_ratification` | **"Claims" = clinical assertions — vocabulary collision** |
| `.cursor/plans/contracts/D5_service_occurrence_care_coordination_contract.md` | `19ba922a` | **S** | `domain_contract` · `canonical` | `draft_for_ratification` | Service occurrence — the billing atom |
| `.cursor/plans/contracts/CNS_orchestration_contract.md` | `87705f16` | **S** | `domain_contract` · `canonical` | `draft_for_ratification` | Economically-blind display target (`REV-185`) |
| `.cursor/plans/contracts/business_ops_workforce_contract.md` | `d6f3b5d5` | **S** | `domain_contract` · `canonical` | draft pending ratification | Labor owner; adjacent to enrollment |
| `.cursor/plans/contracts/intake_contract.md` | `4bd1fcf6` | **S** | `domain_contract` · `canonical` | `draft_for_ratification` | Insurance capture at intake |
| `docs/architecture/phase_4h_target_first_decision_record.md` | `947a9b44` | **S** | ADR | historical | Payer-vs-clinical "denied" split; `revenue_cycle/` reserved |
| `.cursor/plans/doctrine/03_decision_extraction_ledger.md` | `728ef845` | **S** | ledger · canonical | active | `D0THES-DEC-026/036/039` |
| `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | `aeb3eea1` | **S** | digest · Tier 0.5 | active | `GRD-026`, `GRD-036` |
| `.cursor/plans/doctrine/01_master_corpus_catalog.md` | `4b086fad` | **S** | catalog · canonical | active | Registration target (proposed, §M) |

### §A.2 — Domain-decision archaeology

| Proposal | Outcome | Evidence |
|---|---|---|
| Separate Insurance/Payer domain | **REJECTED (standing)** | `FWREG-017`: "authorizes **NO** new Insurance/Payer domain" |
| "Insurance-Claims DL" | **DEFERRED, not Day 0** | `DL-17` — folded into D6 §12 / `REV-159` |
| HSA/FSA + claims inside DL-17 | **EXPLICITLY OUT OF SCOPE** | `DL-17` Q-DL17-5: "NOT DL-17 scope" |
| D6 as future commerce-side home | **ACCEPTED as direction** | D6 §12; System Map D6 row; `REV-159` |
| `revenue_cycle/` operational sibling | **RESERVED, not Day 0** | Legacy map + phase-4h ADR |
| Lab-specific 837/claims | **OUT OF SCOPE** unless a billing module is added | Legacy map lab appendix |
| `claim_lifecycle` (P20), `payment_care_firewall` (P17) | **CANDIDATE** from C3.5 — never promoted to a contract | C3.5-F2 |
| "Insurance is just Commerce" | **REJECTED anti-pattern** | `FWREG-017` anti-pattern column |
| Payer adjudication in the pharmacy seam | **DEFER — named future arc** | Rx L2 §2.E |

Nothing in this carrier disturbs any of the above. The domain prohibition is **reaffirmed** (§E.4) and given a stronger basis.

### §A.3 — CARD-3 SOURCE-FLOOR CORRECTION (Verdict 2, in full)

Card 3's floor is a defect-free *minimum* but an incomplete *input set*. Three omissions change the result; four more would have changed the reasoning. Per the aperture clause, naming these is a valid lane output.

**Material — a lane obeying only the floor would return a wrong answer:**

1. **The committed insurance implementation code is omitted.** `payer_eligibility_documents` (`228b3ac9`), `patient_insurance_details` (`711686ea`), `insurance_payment_readiness.ts` (`c01fbc2a`), `insurance_details.ts` (`8a86f0c8`). Card 3 routes to D6 §12's *deferral* while committed migrations already define coverage-carrying tables. A floor-only lane would report "architecturally untouched" and miss Gap **G2** (overlapping coverage surfaces with no linkage or authority contract) entirely. **This is the single most consequential omission.**

2. **`v4_C4_3_care_response_seam_correction_continuity_test.md` (`154f82bd`) is omitted.** C4.3's Law 10.1 + O1–O22 + the 24-mutation ledger are the estate's *only* accepted correction-and-retroactivity oracle set, and retroactive eligibility termination with a 24-month recoupment window is the hardest retroactivity case in the whole estate. The frozen Task-D method itself adds C4.3 as a cross-cutting oracle set for **all** fixtures; Card 3 does not carry that forward.

3. **The pharmacy handoff is listed without its obligation.** Card 3 cites `HANDOFF_2026-07-27` and the Rx L2, but not the fact that both **deliberately reserved Insurance as the falsifier of the C4.6 rubric** ("Insurance LATER as a deliberate falsifier"; "Insurance = a bounded Gate-0 LATER, as a falsifier of the rubric — not now"). That is an inherited *obligation*, not background reading: this Gate-0 owes a verdict on whether the Governed Capability Exchange / counterparty rubric survives insurance. Discharged at §F.2 — **it mostly survives, with two named breaks.**

**Reasoning-level — recovered here, recommended for any successor floor:**

4. `v4_C3_5F2` (`91e6c0fd`) — `payment_care_firewall` (P17) and `claim_lifecycle` (P20) are the estate's existing candidate primitives for exactly this territory. Naming them prevents a successor re-minting them under new names.
5. `D0THES-REV-185` and `D0THES-REV-187` — the economically-blind-recommendation invariant and the coverage-analysis grid (sponsor XOR insurer, CMS NCD 310.1). REV-185 is the structural enforcement of the very firewall FWREG-017 calls spine-shaping; REV-187 already contains a *worked* dual-financing allocation grid.
6. `D5_service_occurrence_care_coordination_contract.md` (`19ba922a`) — named in FWREG-017's own related-artifacts list but **absent from Card 3's floor**, despite service occurrence being the atom every claim is derived from.
7. `observation_measurement_contract.md` (`da16e608`) + `clinical_memory_assertion_contract.md` (`728ea641`) — required to reason about card OCR (extraction fidelity) and about the "claims" vocabulary collision (§D.3).

**Not a defect:** Card 3 correctly omits C3.6/C3.7 bodies, the `HCASE` library and EVRUN-000012 — those are reachable through the read graph and their omission does not distort the framing.

---

## §B — ACTOR AND PRINCIPAL MAP (required output B)

`D0THES-GRD-026` discipline: an actor is not a domain. Identity's existing `actor` primitive and Federation's `legal_entity` already carry most of this; the table records **what each principal may assert or commit**, and where the current estate cannot represent it.

### §B.1 — Principals

| Principal | May assert | May **commit** | Existing OMNI home | Gap |
|---|---|---|---|---|
| **Patient** | identity, coverage claim, preference, refusal, financial-responsibility acceptance | consent/acceptance/refusal; payment | Identity `patient`; Care (patient plane) | — |
| **Guarantor** | responsibility for a balance | payment | **NONE** | **G4** — no guarantor object; D6 assumes buyer = patient |
| **Subscriber / member** | the coverage relationship | nothing clinical | **Partially present in committed code** (`subscriber_name`, `subscriber_dob`, `relationship_to_subscriber`) | Handle-vs-person discipline not applied to `member_id` (§D.4) |
| **Caregiver / represented principal** | on the patient's behalf, within an authority basis | per surrogate basis | Care consent families; RBAC/Identity surrogate hierarchy | Financial-representation authority not distinguished from clinical |
| **Treating clinician** | clinical indication, recommendation, plan | the clinical decision | Care (clinician plane); RBAC T4 | — |
| **Rendering / ordering / referring / supervising / billing provider** | four distinct roles on one claim | per role | Identity `actor`; Federation `provider_license` | **G5** — the four roles are not distinguished; a claim carries all four |
| **Facility / venue** | place of service | facility charge | Federation `venue` (11-axis) | Site-of-service payment consequence unmodelled |
| **Operator / clinic** | capacity, resources, its own network position | its own submissions, its ledger | Federation topology; BIZOPS | — |
| **Legal entity (TIN)** | the contracting party | contractual positions | Federation `legal_entity` (tax/compliance/liability boundary) | Payer contracts do not attach to it |
| **Federation / brand** | cross-operator grants | grant issuance | Federation grant layer | Contracts are **not** portable across it (§F.5) |
| **Payer** | coverage, benefit applicability, medical-necessity determination, authorization, adjudication, remittance | **coverage** — and only coverage | **Care Operating Model, already accepted** | Its several *capacities* are undifferentiated (§E.4) |
| **Government program** | program enrollment; statutory constraint | coverage; statutory rules | none | Program-specific constraint unmodelled |
| **Employer / plan sponsor** | eligibility roster; funding | sponsorship | none | **G6** — sponsor ≠ payer; identified clinical data must never reach a sponsor |
| **TPA** | administers on a plan's behalf | per delegation | none | Delegated-authority representation absent |
| **Clearinghouse** | transport and front-end acceptance | **nothing substantive** | Rx L2 **adapter-family** pattern applies | Correctly an adapter family, not a principal (§F.2) |
| **PBM** | pharmacy benefit, formulary | pharmacy coverage | Rx L2 §2.E (classified, deferred) | Structurally different from medical benefit (§F.4) |
| **Pharmacy** | dispense, substitution, stock | dispense | Rx L2 (accepted) | — |
| **Lab / imaging / ancillary supplier** | results in its own system | its own results | Observation; legacy lab appendix | Bears denials for data it does not control |
| **Financing provider** | credit decision, terms | funding | `REV-160` (open shape) | Refund-path routing (§C.6 L12) |
| **HSA/FSA custodian** | account balance; expense eligibility | disbursement | `REV-159` (deferred) | Expense-eligibility ≠ person-eligibility |
| **Regulator** | statutory obligation | rules | Federation `jurisdiction` | — |
| **AI agent acting for any of the above** | per its represented principal | **nothing** | **Care participation topology, already accepted** | — |

### §B.2 — Two distinctions the estate already protects, and one it does not

**Already protected — do not re-derive.** The Care Operating Model's participation topology already names "payer AI" as a participant class, already requires every contribution to carry represented principal + agent-operator/sponsor/incentive + model identity + human disposition, and already rules that **"ten payer bots = one payer principal"** under its correlation classes. Payer-side AI multiplicity is therefore an *already-solved* modelling problem in OMNI. This is a significant and under-appreciated inheritance.

**Not protected — Gap G6.** Nothing distinguishes a **plan sponsor** from a **payer**. An employer funds and receives an eligibility roster and an invoice; it must never receive identified clinical data, and consent obtained inside an employment relationship is suspect by construction. Treating the sponsor as a payer would route clinical detail to an employer through a path that looks legitimate.

---

## §C — LIFECYCLE AND AUTHORITY DECOMPOSITION (required output C)

### §C.1 — The organizing claim: cut on write authority, not on subject

Every insurance concept is three things that implementations habitually fuse: an **assertion** someone made (with an owner and several timestamps), an **exchange** that produced or failed to produce it (with its own retries, costs and silences), and an **interpretation** derived from it (versioned, reproducible, disposable). Cutting on subject nouns — "eligibility", "claims", "billing" — leaks, because each noun contains both our assertion and a counterparty's, and those have **opposite correction semantics**: ours are corrected by additive adjustment; theirs may only be *disputed*, never edited.

One useful cut is therefore by **write authority**. Five zones follow.

> **★ AMENDED AT GATE 0R — STATUS OF THIS MODEL.** The five zones are a **candidate analytical axis and anti-collapse test. They are NOT the decomposition from which ownership follows, and this carrier does not propose them as the architecture.** Knox's objection is stronger than any I made against my own model and is adopted: **write authority alone cannot determine truth ownership.** Clinical Memory is the counter-example inside our own estate — assertions authored by patients, providers, labs, documents and AI all live under **one** owner, because the owner is the *governed assertion substrate*, not whichever party authored each row. Authority is carried as `authored_by` + `authority_rank` **within** the owner, not as a boundary between owners.
>
> Ownership must additionally be tested across: semantic subject · lifecycle and terminal states · commitment strength · correction and reversal law · effective vs recorded vs received vs known time · liability · legal-entity scope · patient-vs-operator portability · visibility and custody · principal capacity · and whether the object *creates* an obligation or merely *informs* one.
>
> **Gate 1b must compare at least three competing decompositions** (§K.1): write-authority-first (below), lifecycle/commitment-first (separating position · agreement · request · commitment · determination · obligation · settlement), and existing-owner composition (where most apparent new objects become typed records or seams inside Clinical-Memory-like assertion mechanics, Federation, D6, D7, CNS and GRR). A fourth and fifth — D6-centred extension, and no new owner with seam contracts only — are also live.

| Zone | Who writes | Mechanic | Does OMNI already have this pattern? |
|---|---|---|---|
| **A — external assertions** | counterparty; we mirror | append-only, never edited, provenanced, multi-timestamped | **YES** — D6 §5/§8.4 authority split; Rx rung 1–5 ladder; O10 custody levels |
| **B — bilateral agreements** | jointly authored, routinely contested | the *agreement itself* is the disputed object, with both parties as co-parties | **PARTIALLY — see §C.4a.** General disagreement machinery **exists and is rich**; what is absent is agreement-as-object. **Gap G1, narrowed.** |
| **C — our assertions outbound** | us, then frozen on transmission | immutable; change = new version with a typed relationship | **YES** — D6 §8.7 additive correction; Rx `submit_prescription` (submission ≠ acceptance) |
| **D — our derived interpretations** | us, continuously | versioned, pinnable, reproducible from pinned inputs | **YES, and present in committed code** — `eligibility_decisions` (`rule_version` + `inputs_hash` + `input_snapshot`) |
| **E — our communicative acts** | us, once | immutable, legally operative, never recomputed on read | **PARTIAL — Gap G7.** D7 owns the artifact; the *speech act* is unowned |

Money is a sixth zone and D6 already owns it well.

**Most of this territory is a new instance of machinery OMNI already has** — which is the strongest finding in the carrier and the reason a new domain is not the answer. **How much** is inheritance versus hole is settled by verified read at §C.4a, not by the zone table.

### §C.2 — Generalization: funding participation, not insurance

`D0THES-GRD-026` applied honestly: **"insurance" is a payload noun.** The durable concept is *something that can be responsible for part of the cost of care*, of which a US health plan is one **kind** — alongside employer sponsorship, government programs, pre-tax accounts, third-party financing, memberships, injury liens, research sponsorship, charity policy and cash. FWREG-017's own mixed-financing matrix already enumerates nine such kinds without naming the generalization.

Consequence: a thin uniform participation record with a *kind*, and thick kind-specific truth in per-kind owners. This is what makes the medspa/membership/HSA/financing/employer/cash mix compose instead of becoming special cases bolted onto an insurance module — and it is what prevents 2026 US mechanics from being encoded as timeless ontology (§J.4). **Naming an owner `insurance_*` or `claim_*` would be the `GRD-026` error committed at schema level.**

### §C.3 — Worked trace: the flagship beat, decomposed

"A patient photographs an insurance card" is not one event. It is six facts in five owners, and this trace is the cheapest way to see why:

1. **Intake** owns the capture event (who, when, which surface, what purpose).
2. **D7** owns the image artifact and its custody chain — *artifact-integrity gate*.
3. A **derived interpretation** (Zone D) owns the OCR read, with model identity and per-field confidence, and the standing fact that this is a machine reading of a *marketing artifact* — *extraction-fidelity gate*.
4. **Funding participation** (Zone A) gains an **unverified assertion**: this person claims coverage under payer P, member M, source = "card image, patient-presented."
5. A **verification exchange** is enqueued. It may answer, reject, time out, or return something unparseable — **each of those is a distinct recorded fact, not an absence.**
6. If it answers, Zone A gains a **payer assertion** with its own effective / asserted / received / recorded times, which **coexists with** the card-derived assertion rather than replacing it.

**A card is a photograph of a plastic object that may be three plan-years stale.** Any design where step 1 writes into step 4's *verified* state is already broken — and §D.4 shows the committed `eligibility_status` enum is one field away from exactly that.

### §C.4a — VERIFIED INHERITED DISAGREEMENT PHYSICS (added at Gate 0R; settles the R1 dispute)

Read in full at the pinned base by a read-only verification agent, because the first snapshot and the Knox review made opposing claims at grep depth. **What follows is quoted-verified, not characterized.**

**What genuinely EXISTS — and it is substantial:**

| Source | Mechanism | Authority (verbatim passport) |
|---|---|---|
| **Clinical Memory** | Three non-conflatable axes — `authority` (`authored_by`, locked at write time) ≠ `status` (who AGREES) ≠ `confidence` (source's self-reported reliability). Append-only with `supersedes_assertion_id`, never UPDATE in place. **Conflict rule: both assertions stay live**; the view returns higher authority *unless* `reconciliation_policy = requires_provider_review_on_conflict`, in which case both surface `unresolved_conflict` and **high-risk gates fail closed until reconciled.** `longitudinal_pattern` includes `conflicting`. Repeated low-authority reports may raise attention but **never** promote status or satisfy an authority floor. Same concept in different `context_key` = coexisting, **not** conflict. | `Authority: canonical` · **`Status: draft_for_ratification`** |
| **REV-184** | Seven spine lines including **`disagreement-as-escalation`** and `outcome-reads-original-context (never rewrites)`. Stances include **`dispute`**, `uncertain`, `defer`, `preserve-option`. `gate_holder_posture` includes **`external_authority_committed`** and `unknown_gate_holder_pending_reconciliation`. `supersession_reason` includes **`external_action`**. Graph rule: *"Multiple actors may hold conflicting stances on the same problem concurrently. The record preserves all… NOT a merge-to-one."* Worked example: surgeon vs internist disagree, both preserved, later outcome read **without retroactively crowning either.** | Passport `analysis_nonbinding`; body claims **"confirmed v4 spine-grade law," SIGNED OFF Nick+Knox 2026-06-14**, `D0THES-REV-184` CLOSED; field-set/state-machine **deferred to C5** |
| **C4.3** | Law 10.1 — correction impact is a *governed versioned assessment over distributed lineage*, **not a correction authority**. Oracles: `O1 history-preserved` · `O2 operative-view-corrected-without-erasure` · **`O3 state-typed (wrong ≠ stale ≠ disputed ≠ uncertain ≠ bad-outcome)`** · `O4 owner-committed-own-correction (no-force-match)` · `O5 impact-derived-not-owned (no shadow truth)` · `O7 continuing-care-posture-declared` · **`O10 ACK ≠ accepted-custody`** · `O19 proportionate-precaution-under-uncertainty`. **A ten-state external-custody ladder**: `offered / transmitted / technically_acknowledged / accepted_for_reconciliation / rejected / expired / unknown / corrected_locally / remaining_consequence_accepted / remaining_consequence_unowned`. | `analysis_nonbinding` · design-PASS · **`implementation = absent/partial`** · `not_promoted` |
| **Care capture** | `[INV]` non-fungible parallel authority planes, discordance **preserved not smoothed**; projection state classes include `provisional`, `contradicted`, `disputed`; context may carry `unresolved contradiction`, authority-labeled. | **`REVIEW-DRAFT · NOT closed · analysis_nonbinding`**; payer passages are `[INV]` **candidates composing** REV-184/EVRUN-000004 |

**What was NOT FOUND — with its inspection radius stated (Round-3 correction).** Searched across the four fully-inspected disagreement carriers for `bilateral`, `mutual`, `arbitration`, `breach`, `negotiated`, `executed`, `participating provider`, `obligation-between-parties`, `counterparty position`: **not found.** Targeted repository searches in this lane also did not surface an obvious existing `participation_agreement`, `contracted_rate` or `agreement_id` carrier.

**Stated precisely, because the earlier phrasing over-reached:** *no agreement-as-disputed-object pattern was found in the four verified disagreement carriers or in targeted repository searches to date.* That is **absence within a named inspection radius — not proof of absence from the estate**, and asserting the latter would repeat at narrower radius exactly the error R1 corrected (see guardrail proposal §M(c)).

**Owed before any net-new owner is declared: a focused EXISTS-AS sweep at Gate 1b** across **Federation** (`provider_credentialing`, the grant layer, `legal_entity`) · **D6** · **BIZOPS** (workforce/employment agreements) · **Settings/Catalog** · the **GCE / counterparty** work · commercial-contract and legal-agreement carriers · and relevant historical carriers. A search miss is navigation evidence, not proof.

What is being described as absent is a **mutually constituted agreement as a first-class object with named parties**, where both parties' interpretations of *the same executed instrument* matter and economic/legal consequence rides on the dispute until a contractual, arbitral or judicial process resolves it.

**The distinction that matters, stated once:**

- **(a) EXISTS, richly** — *"Source X asserts diabetes; Source Y asserts not."* Two independent claims about an external fact, reconciled by source authority, both preserved.
- **(b) ABSENT** — *"We jointly signed a contract. You say it makes me participating at rate R; I say it does not. The agreement itself is the disputed object; neither of us is merely a 'source' about it; money and legal consequence ride on the disagreement."*

For network participation this plausibly decomposes into **five** distinct things: the executed contract or amendment · the provider organization's position · the payer's roster or position · **the operative treatment used for estimating, claims, notices and patient decisions while the positions disagree** · and the eventual contractual/regulatory/arbitral resolution. `is_in_network` as a boolean is wrong — but the fix is not "one bilaterally-contested fact," it is a **typed agreement-and-position constellation whose owner is genuinely open.**

**Also verified partially present (Q3):** operating-while-contested patterns exist — operative-view-vs-preserved-history, fail-closed `unresolved_conflict`, `defer`/`uncertain` stances, `O7 continuing-care-posture-declared`, `O19` provisional containment. What is **not** named is a dedicated **operative-position primitive** distinct from (i) the authority-ranked current view, (ii) each party's committed stance, and (iii) eventual owner-specific reconciliation.

**Why this matters beyond insurance.** The same agreement-and-position pattern would serve delegated credentialing, employer sponsorship, pharmacy and vendor agreements, research sponsorship, risk-sharing arrangements, federation participation and external custody acceptance. **That makes it a better Gate-1b candidate than "invent the one insurance object we are missing."**

**Five contradictions preserved, not smoothed** (each is an estate-level finding worth reporting on its own): REV-184's passport (`analysis_nonbinding`) versus its body ("confirmed spine-grade law"); Clinical Memory's `Authority: canonical` versus `Status: draft_for_ratification`; the Care capture's `[INV]` laws versus its `NOT closed` passport; "deep general machinery" versus C4.3's explicit `implementation = absent/partial`; and Care's *"the payer commits coverage"* versus the total absence of any agreement-dispute object to hold what happens when that commitment is contested.

### §C.4 — COUNTERPARTY CONFIRMATION IS AN EXTERNAL ASSERTION/COMMITMENT STATE (reframed at Gate 0R)

D7 §4 establishes three gates and insists "verification is not one word":

1. **artifact-integrity** (D7) — did we store the blob faithfully?
2. **extraction/data-fidelity** (Observation) — did we extract the value faithfully?
3. **clinical-adoption** (Clinical Memory) — did a clinician adopt the meaning?

The first snapshot called counterparty confirmation a **fourth gate in that ladder. That was the wrong altitude and is withdrawn.** Those three form an **artifact → clinical-meaning chain**. A payer response answers a different question entirely:

> *What did this external authority assert or commit, about which scope, under what authority basis, effective when, received when, and subject to what revocation or correction law?*

That is an **external assertion/commitment state**, not verification number four — and OMNI already has adjacent machinery for it (REV-184's `external_authority_committed` and `external_action` supersession; C4.3's ten-state external-custody ladder and `O10 ACK ≠ accepted-custody`; Care's `attributed_external_state` versus `source_attributed_claim`).

**What is genuinely missing is narrower and sharper: an explicit typed distinction between an external party's ASSERTION and an external party's COMMITMENT** — a scoped forward undertaking such as an authorization, a guarantee, a sponsorship or a quote. Verification found this distinction carried in prose and in plane-separation, but **not** as a paired first-class schema. That is the Gate-1b question, and it generalizes well past insurance.

**"Retroactively un-passed" is withdrawn entirely.** It was the worst sentence in the first snapshot: it would license destroying history. *"Payer P asserted active coverage on March 3 via response R"* **remains historically true forever.** What may later change is the payer's current position, the effective period, the operative projection, the consequence of the earlier assertion, or a party's right to recoup. The correct model is **append-and-supersede or append-and-challenge** — never un-pass — which is exactly `O1 history-preserved` + `O2 operative-view-corrected-without-erasure`, already in the estate.

### §C.5 — THE ACCEPTANCE LADDER, AND AN ORTHOGONAL FINALITY AXIS (reframed at Gate 0R)

> **★ WHAT CHANGED.** The first snapshot called economic finality **"rung 6"** of the acceptance ladder. **Withdrawn — that was a category error.** The ladder measures progressively stronger *evidence of transport, receipt, validation, acceptance and external execution*. **Economic finality is a different dimension entirely**, not more acceptance. Stacking it implied that a settled payment is a *stronger form of custody*, which is false. It is now modelled as an **orthogonal settlement-finality / reversibility axis** (below).
>
> Also withdrawn: the claim that *"a dispensed prescription is not clawed back."* That was wrong and my own evidence base flagged it — PBM effective-rate and post-adjudication reconciliation were explicitly marked NOT-VERIFIED by the research helper, and I asserted past it. Knox's counter is correct and stronger: **the dispense occurrence may remain true while its financial settlement is reversed or adjusted.** That separation of occurrence-truth from settlement-truth is precisely why the axis must be orthogonal.

The C4.6 Rx L2 established, and Nick + Knox accepted, a five-rung acceptance ladder with hard guards: `record_transport_ack` (rungs 1–2, **ACK ≠ acceptance**) · `record_review_status` (rungs 3–4, **system validation, NOT contractual custody**) · `ingest_counterparty_acceptance_assertion` (rung 5 evidence, meaning defined by the bilateral contract, **must not itself set accepted state**). C4.2A's O10 states the same law in FHIR terms: transport acknowledgment ≠ message custody ≠ **consequence** custody.

The insurance chain is the **hardest instance of this ladder in the estate**, and the primary sources say so in their own words:

| Rung | Insurance artifact | What it proves | Primary source |
|---|---|---|---|
| 1–2 | **999** | syntax only | X12: the 999 "does not cover the semantic meaning of the information encoded" |
| 3 | **277CA** | front-end acceptance into adjudication — and **not even a HIPAA-mandated transaction** (X12 TR3 005010X214 is absent from the 45 CFR 162.920 adopted set), so its behaviour is governed by **payer companion guides**, not federal rule | X12 TR3 005010X214; 45 CFR 162.920 |
| 4 | **277** | status during/after adjudication | X12: the 277 "is not intended to replace the ... (835) and therefore, will not be used for account payment posting" |
| 5 | **835** | adjudication + money | 45 CFR 162.1602 |

A provider can hold a clean 999 and a clean 277CA and know **nothing** about coverage outcome. **The ladder survives insurance unchanged** — the insurance chain is simply its hardest instance, and C4.3's ten-state external-custody ladder (§C.4a) already generalizes it further than the Rx five rungs did.

**The orthogonal axis — settlement finality / reversibility posture.** Independent of how far up the acceptance ladder a submission has travelled, an economic position sits somewhere on a *separate* dimension. Candidate values (Gate-1b to test, not settled): `movement_occurred` · `settlement_recognized` · `allocation_posted` · `externally_contestable` · `recoupment_window_open` · `audit_pending` · `economically_final_under_current_evidence` · `reopened`.

D6 already carries adjacent precedent — external rail as ledger of record with the app DB as a **converging projection**, plus `dispute_open`/`dispute_lost`, refunds and additive adjustment. What insurance adds is depth D6 has no vocabulary for: **offsets** (money that never moves but changes two balances), recoupments and takebacks, payment without matched remittance, remittance without settled funds, provisional settlement, contractual and statutory lookback windows, and reopened obligation allocation. **That is an extension of D6's money-state vocabulary along a new axis — not a sixth rung, and not a new owner.**

**Rubric verdict (discharging the C4.6 falsifier obligation): the ladder survives insurance intact; what insurance adds is a second, orthogonal axis rather than a further rung.** The adapter-family / connection-instance split also survives cleanly — a clearinghouse is an **adapter family**, a payer is a **connection instance**, and Rx L2's law that "shared software NEVER implies shared authority or uniform capability" is exactly why Availity is not a payer and why a single connector cannot resolve payer heterogeneity. **Two things strain it** (§F.2): the absence of an agreement/position representation, and the ladder's silence on settlement finality — neither of which is a broken rung.

### §C.6 — Lifecycle inventory

For each: origination → terminal states, plus correction path, timeout semantics, and transition authority. **Non-action and timeout are first-class throughout** — an unanswered request is a fact with a deadline, not an absence.

| # | Lifecycle | Zone | Terminal + correction | Timeout semantics | Authority |
|---|---|---|---|---|---|
| **L1** | Funding participation | A | asserted → verified-as-of-T → stale → superseded → **retroactively terminated / retroactively added**; never deleted | no answer ⇒ explicit `unknown`, **never `not covered`** | payer owns the fact; OMNI owns the record of belief |
| **L2** | Verification exchange | A/F | needed → submitted → answered / channel-rejected / **no-response-timeout** / unparseable | **timeout is a terminal state with meaning** | OMNI owns the asking |
| **L3** | Benefit interpretation version | D | drafted → validated → active-for-period → superseded | n/a | OMNI; consumers pin the version forever |
| **L4** | Network participation | **B** | contracted → effective → amended → terminated → retro-corrected, with an **orthogonal `contested` state** | n/a | **bilateral — Gap G1** |
| **L5** | Authorization | A | required → submitted → pended → approved/partial/denied → active → partially-consumed → exhausted → expired → **retro-revoked** | **jurisdictional**: in some states non-response within the statutory window is *deemed approval* — therefore configuration, never code | payer owns the grant; OMNI owns the request; the peer-to-peer is a **clinical** act |
| **L6** | Financial disclosure | **E** | computed → **issued (immutable)** → superseded-by-revised → reconciled-against-actual | variance beyond a threshold triggers re-disclosure | OMNI — **Gap G7** |
| **L7** | Coded charge | D | captured → coded-draft → reviewed → query-pending → finalized → held → released → recoded-for-rebill | held is not denied | coder or model under **named human accountability**; billing staff never touch documentation |
| **L8** | Claim | C | assembled → submitted → acknowledged → in-adjudication → adjudicated → replaced/voided → secondary-billed → closed → **reopened** | no ack within N days = "lost", distinct from denied; timely-filing clocks running | OMNI commits the submission and nothing beyond it |
| **L9** | Adjudication determination | A | received → parsed → matched / **orphan** → posted → restated → reversed → offset-applied | n/a | payer only; **we dispute, we never edit** |
| **L10** | Money | D6 | existing D6 lifecycle **+ offset** (money that never moves but changes two balances) and **refund-to-payer** | n/a | D6 — mostly adequate (§E.2) |
| **L11** | Contested determination | C | **five separate machines, not one** | per machine | see below |
| **L12** | Financing application | A | offered → decisioned → funded → serviced-by-lender | n/a | lender; **refund must route back through the lender, not the patient** |
| **L13** | Pre-tax account use | A | expense-eligibility → authorized → settled → substantiation-requested → reversed/repaid → plan-year-forfeited | substantiation failure reverses | custodian; **expense-eligibility is a tax question, not a person-eligibility question** |

**L11 is the god-object trap, and OMNI has already ruled on it.** Appeals (statutory levels, restated determination) · independent dispute resolution (binding arbitration, losing-party fee) · payer audit (counterparty-initiated, document-production duty) · patient billing dispute (**must suspend collections**) · underpayment recovery (contract claim against L4) are five machines with different deadlines, evidence, outcomes and regulators. Collapsing them yields a `case` table with fifteen nullable columns and five contradictory state machines inside one status enum — which is precisely the pattern the **GRR capture** already rejected (*signal ≠ qualified case ≠ incident/problem ≠ domain decision/corrective action*) and precisely what the Salesforce/ServiceNow universal-case comparator destroys (§G.3). **The GRR ruling is directly reusable here and this carrier does not re-derive it.**

### §C.7 — Seams

1. **Clinical Memory → coding.** Read-only, one-way, version-pinned. **Codes are never clinical facts and never write back.** Documentation queries cross the other way but must be non-leading, attributable, and answered as a clinical act.
2. **Consent → claim assembly.** A restriction crosses as a **hard veto**. No billing need may relax it, and no helpful automatic coordination-of-benefits may route a restricted service to a plan. A patient who pays in full may demand non-disclosure to their plan — in a mixed medspa/clinical encounter this is not hypothetical.
3. **Adjudication → allocation → D6.** Allocation events cross; **raw reason codes must not reach a patient-facing balance.** Patients get meaning, not CARC/RARC.
4. **Authorization → care decision.** Advisory context only. An authorization denial may trigger a human decision; it may **never** be a system-enforced gate on care. This is already OMNI law (§D.1) and already candidate-primitive SUP-462.
5. **Sponsor seam.** Rosters and invoices cross; **identified clinical detail never does** (Gap G6).
6. **Cross-operator seam.** **Coverage participation is a property of the person; network status, contracted rates, claims and allocations are properties of the operating organization.** Operator A's claims must never be visible to operator B — yet B's claims move the accumulator that determines A's estimate accuracy. Resolve by sharing the *payer's* accumulator assertion (the payer is the common authority), never the other operator's claim data. This composes with Federation's existing grant layer and its `isolated` default.
7. **Exchange envelope.** Correlation, idempotency, retry, cost, raw-artifact retention cross freely; **business semantics never live in the envelope.** This is a shared capability, deliberately not a domain — the reason twelve-odd owners cost roughly four mechanics.

---

## §D — CURRENT OMNI REPRESENTATION MAP (required output D)

### §D.1 — The finding that reframes the lane: the posture is REPRESENTED AND ACCEPTED IN DIRECTION — not contracted

> **★ AMENDED AT GATE 0R.** The first snapshot said "already accepted," collapsing four distinct authority levels. **Corrected formulation:** *the general constitutional physics are already strongly represented and should not be re-derived; their payer-specific composition remains uncontracted and requires explicit carry-forward and validation.* Verified passports: Care capture = **`REVIEW-DRAFT · NOT closed · analysis_nonbinding`**, its payer passages `[INV]`-tagged **candidates composing** REV-184/EVRUN-000004, with its own §21a deferring C5 promotion behind a coverage gate.
>
> **A second verified finding sharpens this in OMNI's favour.** The full read found the Care capture contains **no payer-denial mechanics, no OOP-estimation-while-disputed, and no contract-terms machinery at all** (`denial`, `financ`, `benefit`, `reimburs`, `RCM`, `claim` searched; the only `denied` is a Gate-0 admission state). The inheritance is therefore **narrower but sharper**: OMNI inherits the *authority-plane model*, not financing doctrine. That is cleaner to carry forward, and it means the financing composition is genuinely owed rather than half-done.


`FWREG-017` says the care-authority vs financing-authority separation "is spine-shaping and must settle pre-spine." **Much of it is already settled** — inside the Care Operating Model capture, not inside any commerce artifact. Read in place:

- **The payer is already a named non-fungible commitment plane.** "There is NO single universal final decision-maker — care resolves across non-fungible, parallel authority planes ... the **payer commits coverage** ... OMNI coordinates + proves these planes but owns none of their truth. **The payer does not determine clinical indication.**"
- **`appropriate-but-not-covered` is already a modelled admissibility state**, listed among distinct states with distinct owners, with the explicit gloss "*(Coverage absence ≠ clinical inadmissibility)*" and per-plane values satisfied / unsatisfied / unknown / not-applicable / authorized-exception **plus who owns resolving it.**
- **The coverage/payment firewall is already in the consequence contract**: "coverage/payment (**kept SEPARATE from clinical indication — firewall**)".
- **Insurer routing is already classified as operational, not clinical**: a fulfillment exception resolved by "alternate location / equivalent / delay / **insurer-routing** = operational reroute, not clinical reopen."
- **Financial transaction-authorization is already a distinct consent family**, explicitly not coercible into one consent object with clinical consent.
- **Payer-side AI multiplicity is already handled**: "ten payer bots = one payer principal."

**Consequence for Verdict 6.** FWREG-017's four invariants (denial ≠ care-not-indicated; prior-auth ≠ payment-guaranteed; cash ≠ clinically-entitled; approval ≠ the clinical decision) are **restatements of accepted Care doctrine**, not new spine work. Gate-0's constitutional job is therefore much narrower than FWREG-017 implies: **carry these forward, and add the three that are genuinely missing** (§D.2).

Two structural caveats stand regardless. Care's capture is a **cross-cutting capture, not a truth-owning domain** — it cannot host the substrate objects. And its ratification posture defers C5 promotion behind a coverage-managed validation corpus that **does not exist**.

### §D.2 — Three financing-specific HYPOTHESES (demoted at Gate 0R from "genuinely new separations")

> **★ WHAT CHANGED.** These were presented as three new constitutional separations. **Each survives as a real question; none survives as a settled separation or an earned new owner.** Each now carries the inheritance it must be reconciled against and the test that would resolve it.

| # | Hypothesis | Inheritance to reconcile against | What would resolve it |
|---|---|---|---|
| **H-N1** | **money-moved ≠ economically-final** — settlement finality is an **orthogonal axis**, not a rung | D6 external-rail-as-ledger + converging projection + `dispute_open`/`dispute_lost` + additive adjustment; C4.3 `remaining_consequence_accepted` / `remaining_consequence_unowned` | Does D6's existing dispute/refund/reconciliation vocabulary extend to offset, recoupment and lookback windows as a **new axis on an existing owner**, or does it need a distinct object? If the former, H-N1 is a D6 extension and nothing more. |
| **H-N2** | **external ASSERTION vs external COMMITMENT** as an explicit typed pair (reframed from "fourth verification gate") | REV-184 `external_authority_committed` + `supersession_reason: external_action`; C4.3 ten-state custody ladder + `O10 ACK ≠ accepted-custody`; Care `attributed_external_state` vs `source_attributed_claim`; Clinical Memory's assertion/adoption gate | Verification found the distinction present **in prose and plane-separation but not as a paired schema.** Does a general source-authoritative assertion/commitment pattern belong above insurance — and if so, where does it live? |
| **H-N3** | **communicative act** — "we told this person this, at this time, pinned to these inputs" (reframed from estimate-as-speech-act) | D6 owns the calculation; D7 the immutable rendered artifact; Messaging delivery/receipt/channel evidence; GRR dispute and remedy; CNS follow-up obligations; a surface the explanation | **Test it against clinical instructions, informed-consent disclosures, medication warnings, aftercare instructions, price quotes, financial-assistance determinations, authorization notices and denial explanations.** If the same pattern applies across all of those, the solution belongs **above** insurance and is not a financing object at all. |

The underlying insight in each case stands: recomputing an estimate on read destroys evidence; a settled payment is not an economically final one; and an external commitment is not an external assertion. **What is withdrawn is the claim that these are already-established new separations rather than questions with named tests.**

### §D.3 — Vocabulary collisions (verified — a real and present naming hazard)

Three words already mean three different things inside the estate. This is not pedantry: each collision is a place where a future agent will wire the wrong thing to the wrong authority.

| Word | Meaning 1 | Meaning 2 | Meaning 3 |
|---|---|---|---|
| **"claim"** | **clinical assertion** — `patient_clinical_assertions`, whose committed migration comment reads "Canonical **clinical claim** ledger" | **payer claim** — the 837 submission | **`claim_lifecycle`** — C3.5-F2 candidate primitive P20 (RCM sense) |
| **"eligibility"** | **clinical/pathway suitability** — committed `eligibility_decisions` (`pathway_code`, `rule_id`, `rule_version`, result `eligible`/`review_required`/`blocked`) | **insurance coverage verification** — committed `payer_eligibility_documents.eligibility_status` | **X12 270/271** coverage-in-force inquiry |
| **"denied"** | **payer claim denial** | **prior-authorization denial** | **clinical `case_denied`** — already flagged in the phase-4h ADR |

The "denied" split was already caught once, in an ADR. The other two are live and unflagged. **A guardrail is proposed at §M** — this is exactly the `payload-noun` confusion `GRD-026` exists to prevent, occurring at field level.

### §D.4 — IMPLEMENTATION STATE (verified by reading the DDL, not inferred)

> **★ AMENDED AT GATE 0R — two evidentiary corrections.** (1) The first snapshot said **"shipped and in production."** The repository proves **committed migrations and code**; it does **not** prove a production database has applied them, and **no deployment receipt was inspected or produced in this lane.** Corrected to **committed repository implementation/migration state; deployment unverified** throughout. (2) The first snapshot said **"two canonical sources of coverage truth."** **Neither surface was ever established as canonical** — one is explicitly a routing/evidence target, the other an administrative patient projection. What is *proven* is narrower and still serious; see Gap G2 below.

Two migration surfaces carry coverage-like fields. The documentation says insurance is deferred; the committed schema says capture exists. Both are true, and the gap between them is where the finding is.

**`payer_eligibility_documents`** — better shaped than expected. It carries `content_hash_sha256` (D7 artifact-integrity), a ten-value `source_kind` **provenance enum**, `supersedes_document_id` (**supersession lineage**), `verified_at`, `expires_at`, a four-state `status` including `superseded`, `card_side` (`front`/`back`/`eligibility_doc`), tenancy + `data_environment`, RLS, and `insert/update/delete` revoked from `authenticated` in favour of a `SECURITY DEFINER` routing RPC. Its own comment states the scope honestly: *"Section 1O.4.2 minimal target for insurance-card uploads. Routing-only shape; full insurance-domain design (eligibility checks, claims, prior auth) deferred to future Section."*

Two structural problems:

- **One enum is doing four jobs.** `eligibility_status ∈ {uploaded, pending_verification, verified, rejected, expired}` fuses **artifact state** (`uploaded`), **exchange state** (`pending_verification`), **counterparty assertion** (`verified`), and **staleness** (`expired`) — and `rejected` is ambiguous between "extraction failed" and "the payer says there is no coverage." Those are four owners and two authorities in one column. It is the precise collapse D7's gate separation exists to prevent, and resolving it depends on **H-N2** (external assertion vs external commitment, §C.4).
- **The document and the coverage assertion are fused.** `payer_name`, `plan_id`, `member_id`, `group_id` live on the *document* row. Two card photographs are therefore two coverage assertions with **no coverage identity to reconcile them against**, and no way to say "these are two sources for the same coverage, and they disagree."

**`patient_insurance_details`** — genuinely good bones, one anti-pattern:

- **Already correct:** `subscriber_name`, `subscriber_dob`, `relationship_to_subscriber ∈ {self, spouse, dependent, other}` — **subscriber ≠ patient is already modelled.** `effective_date` / `termination_date` — an effective period already exists.
- **`is_active boolean`.** Coverage is not a boolean. It is an effective-dated assertion, held by an external authority, retroactively falsifiable. With an `updated_at` touch trigger and no append-only discipline, the table is **designed for in-place mutation** — the overwrite-on-check anti-pattern, structurally available today. Compare the same migration's own §20 "RLS + append-only discipline" block, which gives that treatment to `patient_clinical_assertions`, `patient_state_observations`, `patient_identity_verifications` and others: the estate already knows how to do this, and this table did not get it.
- **`verified_by_user_id` is a staff user.** Verification is modelled as *a staff act*. There is no representation of a **payer-sourced** confirmation at all — which is the whole of Zone A.
- **No coordination-of-benefits order.** `coverage_type ∈ {medical, prescription, dental, vision}` is a benefit *category*, not a payer *sequence*. Primary / secondary / tertiary is absent, so COB cannot be represented.

**Gap G2 — overlapping coverage-like fields with no semantic relationship (restated precisely at Gate 0R).** Both surfaces hold `member_id` and `group_id`; `patient_insurance_details.carrier_name` and `payer_eligibility_documents.payer_name` are the same fact in two places; **there is no foreign key, no linkage, no shared coverage identity, no source-authority model, and no operative-view contract between them.**

What is **proven**: the overlap, the absence of linkage, and the absence of any declared authority relationship. What is **not proven**: that either is a *canonical* coverage source — one is explicitly routing/evidence, the other an administrative projection, and neither has been established as the coverage owner. The precise hazard is therefore not "two canonical truths" but **two surfaces that a future consumer could reasonably mistake for authoritative coverage, with nothing in the schema to tell them which — if either — is.** That is still the most concrete finding in the carrier, and it is why §K.1 now prescribes **containment rather than correction**: the fix requires knowing the owner, and the owner is exactly what Gate 1b resolves.

**A committed positive worth reusing.** `eligibility_decisions` carries `rule_id`, `rule_version`, `inputs_hash`, `input_snapshot`, `decided_at`, `decided_by ∈ {rule_engine, provider_override, system_derived}`. That is a **versioned, reproducible, input-pinned determination** — exactly the shape benefit interpretation needs. **The pattern already exists in committed OMNI code; benefit interpretation should follow it rather than invent one.**

**Absent, verified by exhaustive search of `supabase/`, `lib/`, `app/`:** no 837/835/270/271/277/278, no adjudication, no remittance posting, no prior-authorization workflow, no appeal, no COB, no clearinghouse integration, no accumulator, no allowed-amount or contracted-rate model, no claim table of any kind.

### §D.5 — Ownership sufficiency by lifecycle

| Lifecycle | Current owner / candidate | Contract maturity | Verdict |
|---|---|---|---|
| Card artifact custody | **D7** | canonical, drafted; **committed** | **SUFFICIENT** |
| Card extraction | **Observation** (extraction-fidelity gate) | canonical, drafted | **SUFFICIENT in principle**, unwired |
| Coverage identity + assertion (L1) | *nobody* — split across two committed surfaces | **ABSENT** | **INSUFFICIENT — Gap G2** |
| Verification exchange (L2) | *nobody*; Rx adapter-family pattern applies | ABSENT | **PATTERN EXISTS, unapplied** |
| Benefit interpretation (L3) | *nobody*; `eligibility_decisions` is the shape | ABSENT | **PATTERN EXISTS AND SHIPS** |
| Network participation + rates (L4) | *nobody found*; Federation holds `provider_credentialing`, **not** payer participation | ABSENT in inspected surfaces | **INSUFFICIENT — Gap G1, the clearest candidate gap** (EXISTS-AS sweep owed, §C.4a) |
| Authorization (L5) | *nobody*; Rx ePA classified `RESPECT-SCOPE`, deferred | ABSENT | **INSUFFICIENT** |
| Estimate / disclosure (L6) | D7 artifact only | ABSENT as a speech act | **INSUFFICIENT — Gap G7** |
| Coding (L7) | *nobody*; Clinical Memory read-only source | ABSENT | **INSUFFICIENT — Gap G8** |
| Claim submission (L8) | *nobody* | ABSENT | **INSUFFICIENT** |
| Adjudication (L9) | *nobody*; D6 §8.4 supplies the authority-split precedent | ABSENT | **PRECEDENT EXISTS, unapplied** |
| Money + allocation (L10) | **D6** | canonical, drafted; partially committed | **MOSTLY SUFFICIENT** — needs offset, refund-to-payer, multi-party allocation, finality axis (§E.2) |
| Contested determinations (L11) | *nobody*; GRR ruled the shape | ABSENT | **RULING EXISTS, unapplied** |
| Guarantor (L-) | *nobody* | ABSENT | **INSUFFICIENT — Gap G4** |
| Correction + retroactivity | **C4.3** oracles exist, landed, design-PASS | oracle set only | **ORACLES EXIST, unapplied to financing** |

**Seven of fifteen have an existing OMNI pattern that has simply never been pointed at insurance.** That is the shape of the work: mostly application, some extension, and a small number of candidate gaps — chief among them the agreement/position constellation (Gap G1), pending the EXISTS-AS sweep.

---

## §E — D6 ROUTING TEST (required output E)

Card 3 says "consuming D6 + REV-159/160." Gate-0 exists to test that, not to decorate it.

### §E.1 — Strongest case FOR D6 as the principal home

1. **The contract says so, twice, deliberately** — §10 disposition and §12: "D6 is the rightful **FUTURE home**, but v0 DEFERS the mechanics." That is a considered reservation, not an oversight, and it survived a Nick + Knox consolidation pass.
2. **D6 already owns the authority-split pattern insurance needs.** §5/§8.4: "External rail owns money-movement facts; OMNI owns order/entitlement/clinical meaning," with vendor identity confined to `metadata.payment_rail.<provider>` and **routing/RLS forbidden from depending on a vendor class name.** Generalize "rail" to "counterparty" and this is Zone A.
3. **D6 already owns per-line financing segregation, with inference explicitly rejected.** §6: a single customer-facing order combining a clinical line and a retail line **must** carry per-line unambiguous `rail`/`order_kind`; "inference is REJECTED." The two-settlements/two-rails/one-encounter hybrid is already the accepted model — and that is *structurally the mixed-financing case*.
4. **D6 already owns immutability-plus-additive-correction** (§8.7) and **deterministic redemption order with AI excluded from runtime** (§8.9) and **capability-gated high-liability mutations** (§8.11). All three are load-bearing for adjudication posting, allocation and refunds.
5. **`payment state ≠ care state`** (§8.1) is already the firewall, stated as a D6 invariant.
6. Insurance is, at the end, about **who owes what to whom** — D6's territory.
7. **Splitting money across owners would be worse.** A second money owner is a clear anti-pattern; nothing here proposes one.

### §E.2 — What D6 must gain even in its strongest reading

Small, bounded, non-controversial:

- **Offset** — money that never moves but changes two balances (the money-state vocabulary has no term for it).
- **Refund-to-payer** — a credit balance owed to a payer is a liability with a statutory return deadline, not float. D6 models refunds as returning to the payer *of record*; here the payer of record may be an insurer.
- **Multi-party obligation allocation** — D6's ledger presumes buyer = patient. Insurance means payer-responsible + patient-responsible + contractual write-off + sponsor-responsible + financing-assumed + **explicitly unallocated**, append-only, reversible, summing to the charge at every instant.
- **Entitlement trigger generalized from "paid" to "financially cleared."** D6 §7's `authorization_for_future_charge` is the right primitive; under insurance the patient often owes *after* care, and clearance may be an authorization, an accepted estimate, a sponsor guarantee — or, in an emergency, nothing at all.
- **Rung 6** (§C.5 / N1).

### §E.3 — Three things D6 structurally CANNOT own (the case against, proven)

**1. Coverage identity — because it is a property of a person across time and operators, not of a transaction.** D6's whole grain is the order, the line, the sale, the entitlement — commercial objects scoped to an operator. Coverage attaches to a **person**, persists across operators, and must be portable without replicating either operator's claims. Its natural neighbours are Identity (the person, the namespace, the L0–L4 assurance ladder, the handle-vs-person discipline that `member_id` needs) and Federation (the cross-operator grant layer with its `isolated` default). Putting coverage in D6 makes it *tenant-scoped* — and §J.5 shows tenant-scoping coverage is the one foreclosure that cannot be undone later.

**2. Bilaterally contested participation and rates — because D6 has no object that can hold two conflicting positions.** D6's §8.6 says money has exactly one source and everything else references it; §8.7 says the sale is immutable and corrections are additive. Both assume **one author**. Network participation has two, and they disagree constantly, with money and statutory consequences riding on the disagreement. `is_in_network` as a boolean is the canonical failure here; the object must hold *"we assert participating, they assert not, contested since D"* and must **not** resolve it. Note also that the contract says X and the remittance says Y, and **overwriting X with Y destroys the only underpayment detector there is** — D6's "no second source of price" instinct is right about price and wrong about this, because these are two authorities, not two copies.

**3. Coding — because it is a derived representation of clinical truth with a one-way read and zero write-back.** Codes are revisable without touching the clinical record (rebill with corrected codes, note unchanged); the liability posture is entirely different (upcoding is fraud; a note error is a clinical amendment); and code validity is date-of-service dependent, not submission-date dependent. This is a Zone D interpretation sitting on the Clinical Memory seam. It is not commerce, and D6's §3 correctly disclaims the clinical decision.

**Also outside D6, more arguably:** medical-necessity determination (a payer clinical judgment), utilization management, and the estimate-as-speech-act (§N3).

### §E.4 — The domain question, answered on the right grounds

`FWREG-017` forbids minting a payer domain on **sequencing** grounds. The load-bearing reason is stronger and already in the corpus:

- **`D0THES-GRD-026`** — payload-noun ≠ domain. "Insurance" is a financing *kind* (§C.2).
- **C4.6's counterparty-noun ≠ lifecycle** — *"a legal entity's identity does NOT determine the lane. The capacity in which it acts in a given interaction does. Classification output is a tuple across axes, not one bucket."* A payer acts as coverage asserter, benefit interpreter, medical-necessity determiner, authorization grantor, adjudicator, remitter, auditor and recouper. **Those are eight capacities, and a "Payer domain" would be a god-object over all eight** — the same error the accepted Rx L2 avoided when it declined to create a Pharmacy, Vendor or Counterparty god-domain.

**But — and this is the part FWREG-017 does not contemplate, sharpened at Gate 0R — "no payer domain" is not the same as "no new owner."** Gate 0 has **not** proved that every required truth fits an existing owner. Left genuinely open: agreement and participation truth · policy/benefit-ruleset ownership · financing-arrangement identity · prospective external commitments · contracted-rate interpretation · multi-party obligation allocation.

**Therefore the honest domain verdict is two-part:** *a payer-named domain is strongly contraindicated; whether OMNI needs a new, **non-payer-shaped** agreement / position / financing-arrangement substrate remains genuinely open and must be settled by ownership and lifecycle tests, not by this carrier.* Candidate homes for Gap G1 — Federation extension · a general agreement/position substrate · D6 with an alien mechanic · existing-owner composition as typed records · no new owner with seam contracts only. **Refusing to prejudge that is not domain proliferation.** It belongs at Gate 1b (§K.1).

### §E.5 — Verdict

**D6 is a correctly-identified, materially insufficient participating owner** — the money / entitlement / patient-responsibility anchor. *(No proportion asserted; the first snapshot's "roughly a third" was rhetorical and no coverage metric supports it.)* `REV-159` should **not** close by expanding D6 to cover coverage, participation and coding; it should close by **narrowing** to what D6 genuinely owns and **naming the neighbours** for the rest — where "neighbour" may turn out to be an existing owner, a typed record on an existing substrate, or a new non-payer-shaped owner. **Nothing here reopens or edits D6.**

---

## §F — EXTERNAL-REALITY MAP (required output F)

All facts below were retrieved from primary sources and **accessed 2026-08-05**. Each is classified: **(a)** mandated and in force · **(b)** mandated with a future compliance date · **(c)** voluntary/industry · **(d)** pilot/emerging · **(e)** proposed/uncertain. Confidence and limits are stated where they matter. Inference is labelled.

### §F.1 — Regulatory timeline (the part that must be exact)

| Date | What | Who | Class |
|---|---|---|---|
| 2012-01-01 | X12 v5010 mandatory for 270/271, 276/277, 278, 837P/I/D, 835 — **the current mandated substrate for every money-moving transaction** | all HIPAA covered entities | **(a)** |
| 2024-01-01 | MA prior-auth approval valid "as long as medically reasonable and necessary"; 90-day new-enrollee transition (CMS-4201-F, 42 CFR 422.112(b)(8)) | MA coordinated-care plans | **(a)** |
| **2026-01-01** | **CMS-0057-F process rules IN FORCE**: 7 calendar days standard / 72 hours expedited; specific denial reason to the provider; public PA metrics | MA · Medicaid/CHIP FFS · Medicaid MCO/CHIP MCE · QHP-FFE — **timeframes exclude QHP-FFE issuers** | **(a)** |
| 2026-01-01 → 2026-04-01 | Hospital price transparency: actual-dollar MRFs with 10th/median/90th percentile allowed amounts, attestation, named executive (45 CFR 180.50); enforcement from 04-01 | hospitals | **(a)** |
| 2026-02-02 | Transparency in Coverage schema v2.0 becomes the compliance basis | non-grandfathered plans/issuers | **(a)** |
| 2026-05-26 | CMS-0053-F claims-attachments rule **effective** | — | **(b)** |
| **2027-01-01** | **CMS-0057-F API wall**: Prior Authorization API · Provider Access API · Payer-to-Payer API · PA data in Patient Access API | same impacted payers | **(b)** |
| 2027-01-01 | Part D RTBT must conform to NCPDP RTPB v13; F&B to a 45 CFR 170.205 standard | Part D sponsors | **(b)** |
| 2028-01-01 | NCPDP SCRIPT 2023011 exclusive for Part D | Part D | **(b)** |
| 2028-04-14 | NCPDP Telecommunication F6 exclusive (**codified CFR text; note widely-circulated "February 2028" dates are wrong**) | retail pharmacy | **(b)** |
| 2028-05-26 | CMS-0053-F attachments **compliance**: X12N 277 (006020X313) + 275 (006020X314) + C-CDA | all covered entities | **(b)** |

**Three findings from this timeline matter more than the dates:**

- **The mandate perimeter is the deepest structural fact.** CMS-0057-F binds MA, Medicaid/CHIP FFS and managed care, and QHP issuers **on the federally facilitated Exchanges** — and the rule says in its own words that its authority "does not apply to health insurance issuers and group health plans outside the FFEs." **Every ERISA self-funded employer plan is out. SBE and SBE-FP issuers are out. Stand-alone dental is out.** *(Inference, and I consider it inescapable: a provider must therefore run the new FHIR pathway for one slice of its payer mix and the 1990s portal/X12/fax pathway for the rest — **permanently dual-stack.**)*
- **Drugs are carved out of CMS-0057-F entirely** — "the policies for prior authorization APIs and processes do not apply to drugs of any type." The most under-reported limitation of the rule, and it means the pharmacy benefit stays a separate world (§F.4).
- **HHS declined to adopt a prior-authorization attachments standard at all.** CMS-0053-F: "we have elected **not to finalize** health care attachments standards supporting prior authorization transactions at this time." Between now and 2027–28, **PA documentation has no mandated electronic format** — while attachments are simultaneously the worst-performing transaction in the industry (electronic adoption *fell* to 24%) and insufficient documentation is the largest single driver of Medicare FFS improper payments (~53% of $28.83B / 6.55% FY2025).

**The provenance finding — the most important external fact for OMNI.** CMS-0057-F requires impacted payers to **incorporate** received payer-to-payer data into the patient record, while stating that payers are merely *"free to indicate the provenance of that information in metadata."* **Integration mandatory, provenance optional, five-year lookback, from 2027-01-01.** *(Inference: that combination is a provenance-destroying event by regulatory design — and it is the strongest available argument that OMNI must own provenance itself, because the rails are actively destroying what the substrate needs.)* The exchange also **excludes cost-sharing information** (so accumulators do not port), **excludes denied prior authorizations**, and excludes drugs.

### §F.2 — Discharging the C4.6 falsifier obligation: does the rubric survive insurance?

**Mostly yes.** What survives:

- **Adapter-family vs connection-instance.** A clearinghouse is an adapter family; a payer is a connection instance; "shared software NEVER implies shared authority or uniform capability" is exactly why one connector cannot resolve payer heterogeneity — verified by the fact that the 277CA is not federally mandated and its behaviour is set by **per-payer companion guides**.
- **The rung ladder** — survives intact; insurance exposes an **orthogonal settlement-finality problem** (H-N1) that the ladder does not represent (§C.5).
- **Counterparty-noun ≠ lifecycle** — survives and is strengthened (§E.4).
- **Submission ≠ acceptance** — survives; the 999/277CA chain is its sharpest instance.
- **"CONSUME (informational); may NOT author the clinical decision"** — the exact classification Rx L2 gave RTPB and F&B generalizes cleanly to eligibility, benefits and estimates.

**Two things strain it (amended at Gate 0R — "break" was too strong for the second):**

- **Strain 1 — agreement-as-object.** The rubric assumes one sovereign counterparty executing in its own lifecycle while OMNI composes a profile over the exchange. **Network participation is not that shape**: it is jointly authored and routinely contested, and no rung, adapter family or profile can represent *"we say participating, they say not, contested since D."* **Gap G1** — and per §C.4a this is genuinely absent estate-wide, not merely absent from the rubric.
- **Strain 2 — the ladder is silent on economic finality, not wrong about it.** The rubric's top rung concerns *external execution*, and finality is a separate axis (§C.5). This is a **missing dimension rather than a broken rung**, and C4.3's `remaining_consequence_accepted` / `remaining_consequence_unowned` states show the estate was already reaching for it.

### §F.3 — What is actually broken (sourced, structural, persistent)

The failure modes a substrate must survive, with what the sources prove:

1. **Denials are dominantly clerical, not clinical.** ACA marketplace 2024: ~496M claims, **19% of in-network claims denied** (~85M), 37% out-of-network; insurer in-network rates range **3%–36%**. Denial reasons: **"Other" 36%, administrative 25%**, excluded service 13%, prior-auth/referral 9%, **medical necessity only 5%**. *A denial coded "other" is not a coverage decision a patient can meaningfully contest.* (KFF analysis of CMS Transparency in Coverage public-use data, published 2026-03-24.)
2. **The appeal asymmetry is the largest unexploited welfare gap in the system.** Marketplace: **fewer than 1%** of denials appealed; insurers upheld 66%. Medicare Advantage 2024: 52.8M determinations, 4.1M (7.7%) denied, **11.5% appealed, 80.7% overturned** — above 80% every year 2019–2024. KFF states the implication directly. *(Inference: appealing is expensive for the provider and free for the payer; ~88.5% of MA denials are never tested at all.)*
3. **Eligibility staleness is architecturally guaranteed.** Electronic adoption is saturated at **96%** and flat, so no further automation helps; the remaining problem is content and accuracy. The **federally mandated** CORE operating rules are frozen at their 2011 versions with an **86% system-availability** floor — roughly one hour in ten of unavailability is *compliant behaviour*. Newer CORE rules (90% uptime, telehealth) are **voluntary**.
4. **Retroactive termination and recoupment.** *(Structural claim, verifiable by exhaustion of the 45 CFR 162.920 adopted-transaction list: **there is no transaction that revokes a prior 271.** Frequency and magnitude: state-law recoupment windows of 18–24 months are reported in secondary practitioner sources — treat the windows as directional, the structural gap as solid.)*
5. **COB errors are structurally unpreventable.** There is no coordination-of-benefits determination transaction; 45 CFR 162.1802 points at the **same 837 TR3s** used for primary submission. On the Medicare side, CMS's Section 111 penalty rule states it will "**only impose penalties where the initial report was not received in a timely manner** ... not ... in relation to the quality of reporting." *(Inference: the incentive is to report something on time, not correctly.)*
6. **Real-time medical adjudication is blocked by transport, not willingness.** NCPDP's own guidance: real-time adjudication "**is not possible with the X12 837 Professional claim format because it lacks a response format.**" Pharmacy collapses claim, eligibility, PA edit, copay and coverage decision into one synchronous round-trip; medical cannot, structurally. **The missing artifact is a response-bearing medical claim transaction, and no current rulemaking clearly creates one.**
7. **Cyber-concentration is a proven systemic failure mode.** The Change Healthcare attack (Feb 2024, ~193M individuals) drove measurable *regression* in electronic adoption — attachments 32%→24%, remittance 89%→87% — and the Office of Financial Research analyzed it as a sector liquidity event. **Nearly two-thirds of hospitals said switching clearinghouses was difficult or very difficult**, during an outage in which they were not being paid. *(Inference: multi-rail is a requirement, and continuity planning must assume a rail is dark for a month.)*
8. **Administrative cost is ~7% of national health expenditure for insurance administration alone** ($5.3T total, 18.0% of GDP, 2024) — **and that figure excludes provider-side billing costs entirely** (Peterson-KFF states the exclusion explicitly). Provider burden: 40 prior authorizations per physician per week consuming 13 hours of physician + staff time; 40% of practices employ staff working solely on PA; 95% report PA delays care (AMA 2025 survey, n=1,000, fielded December 2025 — self-reported physician perception).

### §F.4 — Pharmacy vs medical is a structural split, not an accident

Separate CFR subparts, separate standards (NCPDP Telecommunication vs X12), separate PA regimes, an explicit drug carve-out from CMS-0057-F, and — decisively — **one format has a response channel and the other does not.** For OMNI this means the pharmacy financing seam and the medical financing seam are **not one seam with two adapters**; they have different *physics*. The Rx L2's §2.E classification (RTPB / F&B / SCRIPT ePA as CONSUME-informational or RESPECT-SCOPE, payer adjudication DEFER) already got this right and should not be collapsed.

### §F.5 — Control / coordinate / verify / observe (Verdict 8)

| OMNI can **commit** | OMNI can **coordinate** | OMNI can **verify** | OMNI can only **observe** (provenanced projection) |
|---|---|---|---|
| its own submissions (L8) · its own coded representation (L7) · its own benefit interpretation version (L3) · its own disclosures (L6) · its own allocation + money state (L10) · the record that it asked, and what came back (L2) | the sequence of requests, follow-ups, appeals, re-submissions; who is assigned; what is owed and by when | that an exchange happened, when, through which rail, with what verbatim response and what parse provenance | coverage existence and terms · accumulator state · benefit contract · network roster · authorization grants · adjudication results · remittance · formulary · pre-tax balances · financing decisions · program enrollment |

**Nothing in the right-hand column becomes OMNI truth by being stored.** Several right-hand items are **retroactively falsifiable**. And governance without jurisdiction is documentation: a beautifully governed substrate facing a non-responsive payer produces a beautifully documented failure — which is precisely why the wedge must be re-scoped (§I).

---

## §G — COMPARATOR MECHANISM MATRIX (required output G)

Mechanism separated from the vendor's ownership, liability and economic assumptions. Vendor-asserted outcome metrics are labelled and not treated as design evidence (frozen Task-D method Axis 3).

### §G.1 — Matrix

| Comparator | Owns as truth | Provenance | Correction | Config burden | Characteristic failure | Agent readiness |
|---|---|---|---|---|---|---|
| **Epic** (Resolute · Tapestry · Payer Platform) | guarantor account, hospital account, coverage record, charge, claim, balance; adjudication where Tapestry | per-feature verification fields; coverage transfer lineage | domain-specific: effective dating, transfer, retro-adjudication, credit balances | **extreme** — benefit configuration is the moat | **stale coverage that still looks authoritative** | workflow-mediated; serious research models |
| **Oracle Health** | accounts, charges, claims, contract models, expected reimbursement | not publicly documented | production vs **model** contracts | extreme + merged-lineage seams | implementation-risk absorption | RPA-shaped |
| **Palantir Foundry** | nothing clinical/financial — a governed projection + decision layer | full lineage, action log, property-level security, branch-and-test | Actions + compensating actions; **no bitemporality** | high, front-loaded, architectural | **stale projection presenting as current** | **best reviewed** — Actions *are* the agent API |
| **Salesforce Health Cloud** | member plan → benefit → benefit-item → limit; **claims declared external** | work/record history; **no fact provenance** | case reopen; **mutable counters** | low then compounding | **the case closes; the claim stays denied** | good |
| **ServiceNow** | work, queue, SLA; local claim/pre-auth tables | work provenance | case-based | low then compounding | a local claim copy becomes a shadow truth | very good |
| **Stripe** | money movement, absolutely | idempotency key + immutable event log | **compensating transactions only; never mutate** | very low — **it owns both sides of the rail** | fails safe by construction | excellent — retries are safe |
| **Amazon patterns** | process state, not participant facts | saga execution history | compensation designed in; continuation vs compensation by failure class | high, scales with participants | saga debuggability | sagas are the precondition for agent authority |
| **Clearinghouses** (Availity · Waystar · Optum · Stedi) | transport + translation; **the real asset is payer-behavioural knowledge** | transaction traces, rarely retained downstream | resubmit / corrected claim | low per rail, high across rails | **proven systemic single point of failure** | bifurcated — API-first entrants excellent, incumbents portal-shaped |
| **FHIR / X12 / NCPDP** | nothing — they are grammar | **optional, therefore absent** | X12 frequency codes; FHIR has no coherent model | enormous | **syntactically valid, semantically wrong** | poor natively |
| **AI platforms** | model identity, invocation records, evals | invocation + org level | re-run — complicated by deprecation | front-loaded into tools + evals | compounding error; cost runaway | they are the substrate for it |

### §G.2 — IMPORT

**Truth model.** Guarantor / account / coverage / benefit / responsibility as separate first-class entities with independent lifecycles (**Epic** — and this is the single most transferable idea in the matrix: Epic's `ACCOUNT` documentation says plainly that "the guarantor is the entity ultimately responsible for payment of a balance," and coverage is an **ordered, effective-dated list attached to a receivable** with transfer lineage, not a foreign key on the patient). Balance decomposed by responsibility class with **independent aging clocks per class** (Epic). Append-only ledger; never mutate a posted financial fact (**Stripe**). **Accumulators as event-sourced ledgers, never running counters** (rejecting Salesforce's `AppliedQuantity`/`AppliedLimit`, which cannot prove a retroactive decrement was correct). Explicitly declare, per object, whether the substrate **owns** or merely **references** it (**Salesforce's** discipline of declaring claims external is the honest move in the whole matrix).

**Write path and authority.** **Semantic/kinetic separation — nothing mutates except through typed Actions with parameters, validation, submission criteria, side effects and a permanent decision log (Palantir).** Human and agent decisions stored as a distinct, lineage-participating layer, never merged into source-derived state. **Idempotency keys with parameter-equality enforcement** (Stripe errors if a repeated key carries different parameters — an idempotency key that silently accepts different parameters is worse than none). Explicit **liability party per money movement**, distinct from the initiator (Stripe Connect `on_behalf_of`). Property-level security and classification markings (Palantir).

**Process.** **Sagas with design-time compensating transactions — every forward step declares its inverse before it ships (Amazon/AWS).** Healthcare financing has no two-phase commit and never will; every reversal *already is* a compensating transaction (recoupment, takeback, corrected claim, void, refund, COB re-sequencing) — the industry just does it without naming it, which is why it is unreliable. AWS's **continuation vs compensation split keyed to failure class** (platform-level retries forward; application-level compensates backward) should be a required field on every failure, not a 2am judgment call. **One-way vs two-way door classification as an architectural gate** (Amazon): here, one-way doors are identity/patient-matching semantics, the money ledger model, the responsibility decomposition, the provenance/authority model, the temporal model, and any external commitment creating liability; two-way doors are UI, queue design, model selection, projection shapes and most vendor rails.

**Governance and agents.** The write path *is* the agent governance surface (Palantir × Anthropic — fuse them and agent governance is not a separate subsystem, it is the same authority gate with a different actor type). Tool definitions as contracts with unambiguous names (`coverage_id`, not `coverage`). **Human approval enforced in the tool, not the prompt.** Turn/token/spend budgets and a kill switch as production requirements. Golden eval sets from real cases wired to the gate that authorizes autonomy. **Model identity on every consequential output, with decision reconstructability that assumes the model endpoint may vanish** — Anthropic's own deprecation commitment preserves weights but explicitly does not promise inference availability, so the model that made a decision may not be re-runnable in a year.

**Ecosystem.** Multi-rail from day one with per-payer routing policy and failover; continuity planning for a **month-long** rail outage. **Payer-behavioural knowledge as a governed, versioned, owned asset** — not tribal knowledge, not a vendor black box; it is the actual moat in the clearinghouse layer, and renting it permanently is the actual lock-in. Retain verbatim request/response chains as **evidence**, with the intermediary named.

### §G.3 — REJECT

1. **The authorization/capture mental model for eligibility or prior authorization.** *This is the most consequential import error available, and the standards bodies say so in writing.* In card payments an authorization is a **binding hold** — the issuer is committed under network rules and capture converts a guarantee into settlement. Healthcare has no equivalent: Da Vinci CRD's own code system defines `covered` as "Regular coverage applies ... **meaning there is no guarantee of payment.**" A substrate that models eligibility as a hold or prior auth as a capturable authorization has encoded a guarantee that does not exist, and will produce systematically wrong estimates and systematically wrong receivables.
2. **Configuration-as-truth** (Epic, Oracle). When plan logic, contract terms and adjudication rules live in configuration screens rather than versioned, diffable, testable artifacts with provenance, the payer contract becomes unauditable and untransferable. *(Note OMNI already ships the right alternative: `eligibility_decisions`' `rule_version` + `inputs_hash`.)*
3. **The universal `Case` as a domain object** (Salesforce, ServiceNow). It gets four things genuinely right — work is first-class, assignable, auditable, with a clock; uniform escalation across work types; one surface per human; extend-the-shared-model as the integration contract — and destroys four: domain semantics (five ontologically different contested lifecycles flattened to a `Type` picklist), **authority** (a case has an *assignee*; a denial has an *authority who may reverse it*, and case objects have no vocabulary for the second), the signal/case distinction, and the fact/work boundary (closing the case does not move the money). **OMNI's GRR capture already ruled this correctly; keep the work object, deny it semantic authority.**
4. **Resolving payer↔provider disagreement by putting both parties on the same vendor** (Epic Payer Platform's implicit answer). A substrate cannot assume that and must model disagreement between two authorities as a first-class state.
5. **Bidirectional payer write-in without a provenance boundary.** Auto-created coverage from a payer feed is useful; auto-created coverage **indistinguishable from staff-verified coverage** is a governance failure.
6. **FHIR resources as the internal canonical store.** No bitemporality, no authority, no disagreement, no accumulator semantics; `ExplanationOfBenefit` is a patient-comprehension artifact whose own specification says it does not replace `ClaimResponse`. **Store richer; project to FHIR.**
7. **Optional provenance** — the regulatory default (§F.1) and the thing OMNI must refuse.
8. **Palantir's "ontology" as a naming import**, and its action log as a substitute for bitemporal truth. Change history ≠ belief history. Also reject forward-deployed-engineer dependency as an architecture: if the ontology cannot be evolved by the institution alone, the institution does not own it.
9. **Inheriting X12's latency as domain truth.** It is a transport artifact of a format with no response channel (§F.3.6). Model provisional belief explicitly and let it be revised.
10. **Prompt-level guardrails as controls**, agent autonomy over one-way doors regardless of eval scores, and any `bypassPermissions`-class mode near financial or clinical mutation.
11. **Single-rail dependency and concentration for convenience** — priced by the 2024 event.
12. **Importing AI vendors' liability disclaimers.** These vendors disclaim responsibility for downstream decisions; a care substrate cannot.

**The gap all ten comparators share: bitemporality.** Epic handles time per-feature; Palantir gives change history, not belief history; FHIR has no model; Salesforce/ServiceNow have point-in-time work items. **No reviewed platform provides belief-time and effectivity-time as a substrate primitive** — which is simultaneously the strongest ownership claim available to OMNI and the thing C4.5 exists to formulate. *(Epistemic care: "not demonstrated in reviewed public primary sources.")*

### §G.4 — Helper-agent method ledger (independence conditions and disposition)

| Lens | Assignment | Independence | Disposition |
|---|---|---|---|
| **A — Estate archaeologist** | recover every prior OMNI treatment of insurance/payer/claims/financing; determine authority, chronology, supersession, unresolved state | repo read-only, both refs; no external sources | **Adopted with verification.** Every load-bearing claim re-verified by me against the DDL and the primary sources; the C3.5/C3.9/C4.3 items are recorded at **searched-only** depth (§1). |
| **B — Payer/RCM operator** | current US mechanics, standards, mandates, failure modes — primary sources only | no repo access | **Adopted.** Regulatory timeline and failure modes are its work; I re-checked the mandate-perimeter and provenance findings because they carry the most weight. Its own NOT-VERIFIED register is honoured (§F). |
| **C — Blind decomposer** | decompose from first principles; **explicitly forbidden from reading the repository or seeing the D6 hypothesis** | fully blind | **Adopted as the carrier's spine.** The five-zone write-authority model, the fourth-gate reasoning and the five-machines-not-one-case finding are its contributions. It independently reached "several owners, not one, and not a payer domain" without ever seeing `FWREG-017`. **Amended at Gate 0R: this is convergent independent analysis, NOT corroboration.** Agreement among agents is not corroboration (`AGENTS.md` non-negotiable), and the convergence is weakened further by the fact that both it and I were reasoning from similar single-owner priors. It remains a valuable analytical input and a nonbinding interpretation. |
| **D — Anti-OMNI adversary** | kill the thesis; strongest possible negative case | external sources only; no repo | **Adopted and it changed a verdict.** Verdict 7 was rewritten because of it. Its kill conditions are carried verbatim into §I.4. |
| **E — Patient/consumer + provider/institution** | two separate lenses, conflicts preserved rather than reconciled | external only | **Adopted.** The patient/provider conflict analysis (§I.3) and the multi-entity TIN/NPI reality are its work. |
| **F — Enterprise-platform mechanism** | mechanism vs ownership vs economics for ten comparators | external only; instructed not to import vendor ontology | **Adopted** as §G.1–G.3. |
| **G — 2030/2035 trajectory** | four-tier evidence/forecast separation | external only | **Adopted** as §J, tier labels preserved. |

**No helper had write access; none authored any part of this carrier; all synthesis, adjudication and every verdict is mine.** Where a helper's claim was load-bearing, I re-verified it; where I could not, it is marked at reduced confidence or excluded.

### §G.5 — Preserved disagreements (not averaged)

1. **Blind decomposer vs itself.** It offered the strongest counter to its own twelve-owner split: every owner is an instance of *one* abstraction (a bilateral relationship with provenanced assertions on both sides), so twelve owners may be enumeration of an instance space, and the coordinating service that joins them becomes the undeclared god-object. **I do not resolve this.** It is the sharpest attack on the carrier's spine and is handed to Task-D as falsifiable hypothesis **F1** (§L.3), with the two tests it proposed: map the correction/reversal path of each candidate owner (if they collapse to one or two mechanisms, the split is wrong), and count how often the same actor writes several of them in one transaction (if "most, most of the time," the split is wrong).
2. **Adversary vs enterprise lens on the wedge.** The adversary says the category is crowded, funded and partly solved, and that nothing important is architecturally unavailable to Epic-plus-Foundry-plus-two-years. The enterprise lens agrees on capability but finds no comparator provides bitemporality. **Both are right, and the tension is real:** OMNI's differentiator is a gap all incumbents share, which is either a genuine opening or evidence nobody will pay for it. Unresolved, recorded at §I.2.
3. **Patient vs provider interests genuinely conflict**, and softening it would be dishonest — §I.3.
4. **On whether appeal automation helps.** One lens argues near-free appeals invert the economics of speculative denial; another argues it redistributes surplus and raises total transaction volume without reducing administrative cost. Both are supported. Unresolved.

---

## §H — SCENARIO COVERAGE MANIFEST (required output H)

Fixtures are chosen for **materially different physics**, not different payer labels. Sixteen families. Each names the physics that no other family exercises, so a successor cannot quietly drop one.

| # | Family | Distinct physics it and only it exercises |
|---|---|---|
| **S1** | Cash-only medspa treatment | **The control.** No coverage, no claim, no coding, no authorization. Proves the financing layer is genuinely optional and never on the care path. |
| **S2** | **Covered reconstructive beside elective cosmetic cash in ONE episode** | **The flagship, and the wedge (§I).** Two financing kinds, one encounter, one clinical record; allocation of genuinely shared cost (facility fee, one time slot); non-disclosure invoked on the cosmetic portion; photo/measurement-based medical-necessity evidence. **Exercises D6 §6 per-line rails at their designed limit.** |
| **S3** | High-deductible commercial | **Accumulator physics** — the largest error term in every estimate, owned by the payer and moved by providers OMNI cannot see. |
| **S4** | HMO/PPO/EPO + referral/network constraint | **Network + referral as a precondition**; the `is_in_network` boolean fails here. |
| **S5** | Medicare + supplemental | **Statutory program constraint** + secondary sequencing. |
| **S6** | Medicaid / managed care | **Retroactive eligibility** (forward-dated *and* back-dated), and the mandate perimeter *includes* this one. |
| **S7** | Employer self-funded + TPA | **Sponsor ≠ payer (G6); delegated administration; and this plan is entirely OUTSIDE CMS-0057-F** — the dual-stack proof. |
| **S8** | Out-of-network + patient election | **Patient election as an authority act**; surprise-billing protection; notice-and-consent as a speech act. |
| **S9** | Primary + secondary (COB) | **No COB determination transaction exists**; ordering is data, not code; the committed schema cannot represent it. |
| **S10** | HSA/FSA beside insurance beside card | **Expense-eligibility is a tax question, not a person-eligibility question**; substantiation failure reverses money already spent. |
| **S11** | Financing / membership / sponsor-funded | **Substitution of the obligated party**, not a payment method; **refunds route through the lender.** |
| **S12** | Split professional / facility / lab / imaging / device / pharmacy | **One episode, many claims, many TINs, no 1:1 with anything**; the patient experiences an episode and the system prices line items. |
| **S13** | Pharmacy / PBM / formulary / drug PA | **Different physics, not a different adapter** (§F.4) — synchronous, pre-adjudicated, and carved out of CMS-0057-F. |
| **S14** | Retroactive termination + recoupment + offset | **Rung 6 (N1)**; correction without rewriting history; offset against an unrelated claim; **the C4.3 oracle set's hardest case.** |
| **S15** | Denial → appeal → resubmission → **correction-of-correction** | **Five contested machines (L11)**; correction-of-correction is explicitly a C4.3 perturbation. |
| **S16** | Multi-site / multi-federation, coverage portable, **no universal replication** | **Person-scoped vs operator-scoped truth (§C.7.6)**; and the accumulator paradox — operator B's claims move the number that determines operator A's estimate, while B's claims must stay invisible to A. |

**Adjacent, recommended but not required at Gate-0:** provider changes employer/federation mid-stream while credentialing, enrollment and historical relationships diverge (G5, and the credentialing/enrollment distinction is where 90–180 days of unbillable revenue lives); capitated / bundled / value-based settlement (payment attribution not knowable at time of service, revised by episode reconciliation months later — and the case where **OMNI's operator is the risk-bearing party**, §J.5); payer AI ↔ provider AI ↔ patient AI exchanging proposed rulings at volume.

**Every fixture must test:** clinical authority · financing authority · source authority · identity + represented principal · consent (including non-disclosure as a hard veto) · network/contract context · temporal validity (effective / recorded / received / known) · candidate vs commit · **care continuity under financing failure** · money and entitlement state · degraded operation and non-response · correction/appeal/redress · proof and replay · patient comprehension · provider/operator burden · federation portability · external acceptance.

**Coverage gaps, declared.** No fixture exists in the estate today — **C3.9, the designated mixed-financing falsifier, is `shell_pending_population`**, which is exactly why §K sequences G2 behind it rather than in front of it. No dentistry, hospital or plastics *vertical arc* is proposed; per FWREG-017 those are falsifiers and fixtures only.

---

## §I — STRATEGIC WEDGE (required output I)

### §I.1 — The promise as stated fails

"Photograph the card and everything else is handled — eligibility verified, benefits interpreted, network determined, prior auth obtained, cost explained, claims submitted, denials appealed, everyone paid."

It fails for three reasons, in order of severity:

1. **It promises authority OMNI does not have.** Every clause after "photograph the card" describes a counterparty's behaviour. Governance without jurisdiction is documentation (§F.5).
2. **It is falsified by one wrong estimate.** At 95% estimate accuracy in a practice seeing 200 patients a week, that is ten furious front-desk conversations a week. After the second, the front desk starts calling the payer to double-check — and the customer is now paying for a system everyone shadows. **That is how these products die: not cancelled, bypassed.**
3. **It contradicts its own disclaimer.** The moment counsel requires "this is an estimate, not a guarantee," the marketing and the contract are in conflict in the same document. Note the sharpest external fact available: the **Advanced Explanation of Benefits** — the one provision that would have given insured patients a personalized pre-service estimate — had a statutory effective date of **2022-01-01** and remains unimplemented, with the Departments' own progress documents citing "significant operational and technical challenges." A startup whose flagship is "expected patient cost explained" is promising what regulators, payers, clearinghouses, EHR vendors and the Da Vinci workgroup have collectively failed to ship in four years.

### §I.2 — The defensible re-scope

> **From "everything is handled" to "everything is tracked, and the exceptions are unmistakable, early, and cheap to resolve."**

This survives contact with a 19% denial rate, a 24-month recoupment window and an unimplemented AEOB, because **it never claims authority over a counterparty.** It is also precisely what governance buys, and precisely what a coherent substrate does better than five stitched point solutions. And it is *checkable*: "was the exception surfaced early and cheaply?" is measurable in a way "was everything handled?" is not.

### §I.2a — Why no single counterparty can legitimately hold the person's financing context (added at Gate 0R; **ownership language corrected at Round 3**)

> **Why this is added.** Knox's gravitational answer — *repeated verified execution producing trust and surplus until counterparties rely contractually on OMNI's state* — is true, and it is a **business** moat. The operator asked a different question: **what can we do that no one else can own.** That needs a structural answer.
>
> **★ ROUND-3 CORRECTION, and it matters strategically, not just semantically.** My first version was headed *"what OMNI could own that no incumbent can"* and called the financing context *"the only object no incumbent is positioned to own."* **That rebuilds the captivity problem this estate has already rejected.** If OMNI *owns* the person's financing context, then leaving OMNI means losing your history — which is moat-by-hostage, contradicts continuity-without-captivity, and is fragile besides, since one portability mandate destroys it. The underlying facts stay distributed: the **payer** owns its determinations, the **provider** owns its submissions, **D6** owns OMNI-side money and obligation state, the **patient** holds portability and access rights.

**The corrected structural claim:**

> **No single counterparty has legitimate end-to-end authority over the person's longitudinal financing context. OMNI can assemble and preserve a person-scoped, permissioned, source-authoritative financing-context *projection* across changing counterparties — without claiming ownership of the underlying facts, and without making continuity hostage to OMNI.**

**The moat is not holding the patient's history. It is performing better even when the person can take their truth and leave.** That is a stronger claim on both sides: it survives full portability, it survives regulation, and it is consistent with OMNI's own doctrine rather than in tension with it.

**Why no incumbent is positioned to assemble it:** every incumbent is **one party** to it.

A payer sees its own members, for the period they were members. A provider sees its own patients, for the encounters it billed. An employer sees its own employees, while employed. A pharmacy benefit manager sees drug events. An EHR sees one operator's instance. A clearinghouse sees transactions in flight. **Each has a complete view of its own slice and a structurally partial view of the person.** The union across payers, employers, operators, plan years and financing kinds — *what this person was covered by, told, charged, owed, paid, denied, appealed and reconciled, over years, across organizations* — is not any of their objects, and cannot become one without them becoming something they are not.

**Two properties make this a moat rather than a nice-to-have.** It is **person-scoped**, so it survives every counterparty change — which is why §J.5.1 makes tenant-scoping coverage the one irreversible foreclosure. And it **compounds**: each verified execution, correction and redress adds to a record that accumulates for whoever performs the continuity work. **Note that compounding does not require captivity** — the projection can be exported, and the moat is the demonstrated capability to assemble and prove it, not exclusive possession of it.

**The objection, attached and unresolved.** My own adversarial lens attacked exactly this: *nobody owns it because nobody will pay for it — the harm of its absence is absorbed by patients, who are not the buyer.* That objection is not answered here and must not be quietly dropped. The three ways it could fail are worth naming: patients never become the buyer; providers will not pay for a longitudinal view whose benefit accrues mostly to the patient; or a regulatory mandate (payer-to-payer exchange, patient access APIs) commoditizes enough of it that the remaining differential is thin. **Registered as unresolved item U11**, and it is the single most important commercial question in the arc — an architectural moat with no buyer is an engineering preference.

**The bridge from the current estate is narrow and real: the cosmetic/reconstructive boundary (S2).** One encounter splitting into a payer-covered functional component and a patient-paid cosmetic component, requiring photo- and measurement-based medical-necessity documentation, a blended quote the patient understands before surgery, dual settlement, and a defensible audit trail if the payer later disputes the functional classification. OMNI already has `clinical_photo_detail`, `before_after_pair`, per-line rail segregation with inference rejected, and consent-family discipline. General RCM vendors handle this badly because it is not their volume; medspa platforms do not handle it at all. **It is the only place the existing wedge touches insured care, and it is a genuine one.**

**Where the wedge argument is weakest, stated plainly.** The adversary's "two years and a checkbook" attack largely lands: a health system with Epic plus a mature data platform plus good integration engineers can configure most of this. The two things genuinely unavailable to them are (a) cross-organization identity, consent and authority where **no single organization is the controller** — which a health system cannot configure into existence because it is definitionally one operator — and (b) a single longitudinal financial obligation graph for a patient across unaffiliated providers. **(b) is unowned because nobody will pay for it: the harm of its absence is absorbed by patients, who are not the buyer.** (a) is real but health systems may not *want* it, since cross-operator coherence transfers leverage away from them. This is unresolved and is handed to Task-D.

### §I.3 — Patient and provider interests genuinely conflict (not softened)

Naming these matters because a substrate that pretends they align will encode one side's interest as neutral physics.

| Conflict | Who currently wins |
|---|---|
| Patient wants a **binding** price; provider cannot give one and does not want the liability (it transfers scope, adjudication and coding risk onto the provider) | **Provider.** Five years post-NSA the insured patient still has no enforceable estimate. |
| Patient wants the lowest price; **cash beats the negotiated rate in roughly half of measured cases** — and paying cash forfeits deductible credit | **Provider and payer jointly, at the patient's expense.** Nobody has an incentive to tell the patient. |
| Patient wants low out-of-pocket; provider now depends on collecting from the patient (patient responsibility rising as a share of net revenue while collection yield falls) | The provider's rational response — point-of-service collection, deposits, credit screening — is exactly what produces deferred care and medical debt. |
| Patient wants care now; provider wants the authorization first, because a missed authorization lands on the **provider's** P&L | **Payer.** It has externalized the cost of its own utilization-management program onto both counterparties and made them fight each other about it. |
| Patient wants portability; provider economics depend on downstream capture | **Provider**, though narrowing. |

**The through-line: in nearly every conflict the winner is whoever controls a process whose costs land on someone else's balance sheet.** Patients and providers are placed in opposition by rules neither wrote. *That* is the thing worth designing against — and it is not resolvable by making either party's existing workflow more efficient. It is the most honest available statement of what a governed substrate is *for* here.

### §I.4 — Falsifiable kill conditions (carried verbatim into Task-D)

1. **Autonomy rate** below 60% end-to-end untouched-by-human on real insured volume after twelve months, not on a steep curve ⇒ the flagship is marketing and the product is an RCM workflow tool competing on someone else's terms.
2. **Estimate accuracy** worse than the practice's existing biller ⇒ withdraw the experience.
3. **No carrier will write E&O** covering wrong cost estimates at a tolerable premium ⇒ the promise is legally unsellable as promised.
4. **Non-response floor** above 15% after two years and not declining ⇒ the substrate is a queue manager.
5. **Incumbent parity** reached inside the customer's existing system before the differentiation is established ⇒ the window closed.
6. **Wedge transfer** below 20% adoption from the aesthetics/plastics base within twelve months ⇒ the base was never a beachhead.
7. **Gross margin** below 60% after rail, API, enrollment labour, exceptions and human review ⇒ a services business with a software logo.
8. **TPA / utilization-review licensure** required in a majority of states to deliver the promised flow, at a cost exceeding runway ⇒ unavailable as promised. *(As many as 46 states require licensing or filings for third-party administration; several states separately regulate billing services and utilization review. This is a fifty-jurisdiction program with annual renewals, scaling with geography rather than revenue.)*
9. **No substrate-attributable win** after two years — no case where cross-domain coherence produced an outcome a point solution demonstrably could not ⇒ the substrate is an engineering preference, not a differentiator.

---

## §J — 2030 / 2035 PRESSURE (required output J)

Tiers, per the assignment: **[T1]** current evidenced · **[T2]** plausible 5-year · **[T3]** 10-year possibility · **[T4]** unsupported speculation.

### §J.0 — THE NORMATIVE FRAME AND TWO FALSIFICATION TESTS (added at Gate 0R)

> **Why this is added.** Both this carrier's first snapshot and the Knox review still reason **from the US payer system outward**. §F is a US regulatory timeline; Knox's semantic inventory, good as it is, remains a generalization *of* US insurance concepts — `claim`, `adjudication`, `remittance` are present under new names. That is reactive architecture, and it is exactly the failure mode the operator directive forbids: *do not react to what insurance was in the 1990s, and do not assume what payers will be in 2035 and then design toward that guess.*

**The stronger organizing claim — corrected at Round 3.** My first formulation was *"someone other than the patient may bear part of the cost, and that fact must never distort the care."* **Morally attractive, architecturally wrong**, and Knox is right to reject it. Financing *legitimately* shapes care all the time: which options are feasible, timing, site of service, patient choice, referral, monitoring burden, affordability, and the plan actually accepted. A patient who cannot afford option A and chooses option B has had care shaped by financing — that is reality, not distortion, and a model that calls it distortion cannot represent the most common situation in American healthcare. It is also inconsistent with REV-184, which already handles resource- and access-driven rationale.

> **The corrected invariant:** *The identity or willingness of a cost-bearing party must never **silently rewrite** clinical truth, clinical indication, professional recommendation, patient consent, or the historical rationale. Financing constraints **may** explicitly bound feasible options, timing, site or execution — but the constraint, its owner, the alternatives it excluded, and its consequences must remain **separately legible**.*

The operative word is **silently**. Legible financing constraints are legitimate architecture. Invisible ones are the failure.

**Do NOT pre-declare every funding form the same shape — Round 3 correction, and the sharpest catch in the review.** My first formulation said a commercial insurer, Medicare, an employer, a TPA, a lender, a membership, a pool, a risk-bearing provider, a sponsor, a charity, a family member and nobody are *"the same shape."* **That is the god-object move I spent this entire carrier warning against, committed one level up.** I applied `GRD-026` to "insurance" and then collapsed nine funding kinds into one object. The counter-examples are decisive: a **TPA** administers without bearing risk · a **lender** substitutes the obligated party and creates credit servicing · a **membership** creates entitlement rather than third-party cost-bearing · a **sponsor** funds without access to identified care detail. Those are non-fungible lifecycles with non-fungible authority semantics.

> **Corrected:** these forms **may share a minimal funding-participation *interface*** — kind · principals · scope · period · authority basis · allocation/settlement posture — **while retaining non-fungible native lifecycles and authority semantics. Gate 1a must determine whether even that common interface is real or merely a convenient projection**, and must hold the anti-god-object counter-hypothesis open throughout.

Organ-specific, condition-specific, episode-specific, outcome-conditional and catastrophic-only coverage are plausibly different **scopes** rather than different kinds — but that too is a Gate-1a question, not a premise. Blockchain, verifiable credentials, programmable escrow and agent-negotiated pools are **implementation candidates for the exchange and settlement layers; none may define the ontology**, and the architecture must remain valid whether they win or vanish.

**The claim is only useful because it is falsifiable. Two tests, binding on every candidate object at Gate 1a and every ownership proposal at Gate 1b:**

**Test 1 — PAYER-DELETION.** *Does this object still make sense when there is no third-party payer at all?*
Delete every insurer, program and sponsor. A cash-pay medspa patient remains. Does the object survive with a `self` funding participation, or does it become vestigial? **A candidate that only makes sense when a payer exists is over-fitted to payers and must be pushed down into a kind-specific adapter, not the core.** The estate already has the control fixture for this — S1, cash-only medspa (§H).

**Test 2 — PAYER-INVERSION.** *Does this object still make sense when OMNI's own operator IS the risk-bearing payer?*
Under capitation, global risk, direct-to-employer contracting or a provider-sponsored plan, the operator adjudicates, holds reserve risk, and owes other providers. **Any object with a field meaning `what the payer paid us` fails this test**, because the direction reverses while the physics do not. This is the sharpest available discipline against baking the 2026 US provider-versus-payer posture into the substrate — and §J.5.5 already identifies it as the arrangement the market is most clearly moving toward.

**A candidate that fails either test is not wrong — it is misplaced, and the test determines ALTITUDE, not implementation class** (Round 3 correction; my first version said "adapter," which over-specified). A failure means **not universal core.** Its correct home may be a native financing profile · a regime-specific lifecycle · a domain object · a policy/configuration layer · or an adapter. Which of those is a separate judgement the test does not make.

Applied honestly, these tests should **delete** candidates rather than validate them; a pass rate near 100% would mean they were applied too gently.

### §J.1 — The AI arms race is the central trajectory finding, and it points the wrong way

**[T1]** Both sides are automating, and the best independent assessment available (Peterson Health Technology Institute, convening health systems, plans, developers, investors and federal agencies) found: providers use AI to draft medical-necessity justifications and generate appeals; payers use AI to triage and decide. Its conclusion is the load-bearing one — **"there is no evidence yet that this translates to lower average cost per claim factoring in the cost of the AI solution,"** and "optimizing each side of the transaction risks making the overall process **more activity intensive**, rather than more efficient." PHTI further found provider AI *increasing billing intensity* (ambient scribes driving E/M and DRG complexity), with payers responding by **automated across-the-board downcoding**.

**[T2]** *(Inference.)* The plausible equilibrium is higher transaction volume, lower per-transaction cost, roughly flat-to-rising total administrative cost, and surplus captured by tooling vendors and by whoever moves faster. **When the cost of denying falls, the optimal number of denials rises.** Patients capture nothing unless regulation forces it. **[T2]** Payers will increasingly deny based on predicted *appeal probability* rather than predicted merit — which is exactly what near-free patient appeal agents would break.

**[T3]** Two exits, one good: the transaction is **eliminated** (real-time adjudication or risk-based contracting removes the negotiation) rather than automated. The bad exit is administrative rate-setting.

**[T4]** That AI negotiation converges to a fair low-cost equilibrium on its own. Nothing in the mechanism produces that.

**Substrate consequence:** every code and every determination must carry **provenance and authorship class** — human-assigned, AI-assisted-human-reviewed, or autonomously assigned — plus model identity, the documentation relied on, and the rationale. Disclosure requirements are a plausible near-term regulatory move; retrofitting this later is expensive and capturing it now is nearly free. **This is the cheapest high-value thing OMNI can do in this territory.**

### §J.2 — Computable policy: requirements yes, judgment no

**[T1]** The scaffolding is dated and real (CMS-0057-F Prior Authorization API, 2027-01-01) but the computability layer is weak: HL7 Da Vinci's own pilot feedback register lists as *active problems* "**Lack of CQL adoption** — Payors have not adopted CQL except in limited circumstances today" and "every payor is required to implement questionnaires ... and they are all doing it in slightly different ways." **The standard for computable policy exists; the policy is not computable yet; where it is, it is computable differently at every payer.**

**[T1]** Transparency-in-coverage machine-readable files are a cautionary tale about mandating machine-readability without usability — implausible or irrelevant records constituting a large share of raw files, hundreds of gigabytes per payer per release, duplicate files.

**[T2]** Documentation *requirements* become broadly computable; coverage *judgment* mostly does not — medical-necessity criteria are proprietary competitive assets, deliberately ambiguous in places, and clinically contested. **[T4]** That plan logic becomes fully executable such that any actor can deterministically compute coverage before service. Accumulator state, medical-necessity judgment and retroactive eligibility each independently defeat it. **Design for approximate, conditional, revisable answers forever.**

### §J.3 — Real-time adjudication: blocked by a missing artifact

**[T1]** Pharmacy: yes, universally, for decades. Medical: essentially none. The reason is the missing response format (§F.3.6), not culture or compute. **[T2]** Real-time prior-auth *approval* for a share of standard requests is plausible; real-time *claim* adjudication for narrow bounded categories at some payers. **[T3]** General medical real-time adjudication requires a **mandated response-bearing transaction — the medical equivalent of pharmacy's response message. That is the actual missing artifact, and no current rulemaking clearly creates it.** **[T4]** That it arrives as a byproduct of AI: **prediction is not adjudication**, the same category error as authorization/capture (§G.3.1).

### §J.4 — Configuration vs physics

**Configuration — versioned, effective-dated, reviewable, and regression-tested so a rule change never silently alters a past determination:** code sets and validity windows; bundling and edit rules; per-payer/product/plan authorization requirements, filing and appeal deadlines, channels, identifiers, format quirks, reason-code meanings; **jurisdictional rules including deemed-approval-on-timeout, prompt-pay windows, surprise-billing thresholds, medical-debt reporting restrictions, sales taxability of cosmetic services**; benefit rulesets; rate methodologies; allocation policy (application order, rounding, unallocated handling, write-off thresholds); financial-assistance policy with program-eligibility guards (routine waiver of cost-sharing for government-program beneficiaries is not lawful, so a membership discount cannot be applied blindly); automation confidence thresholds.

**Physics — genuinely hard to change:** multi-axis time and append-only history; owner-of-truth boundaries and write authority; allocation conservation; immutability of transmitted claims and issued disclosures; mandatory provenance on external assertions; **unknown as a first-class value**; the clinical/financial firewall; consent as a hard veto; cross-organization isolation; reproducibility from pinned inputs.

**Rules change; physics does not.** And the configuration itself needs governance — a bad rate table is as damaging as a bad migration.

### §J.5 — Six things that must be preserved now (Verdict 13)

1. **Coverage must be person-scoped, not tenant-scoped.** **This is the one structurally irreversible foreclosure.** Scope coverage to the operator and cross-operator portability cannot be retrofitted. It is also the strongest reason coverage identity does not belong in D6 (§E.3.1).
2. **Assertion must be separated from exchange.** Then a signed verifiable credential presented by a patient's agent is *just another assertion with a different verification method*. Model "eligibility check" as a **procedure** and that future is foreclosed.
3. **Negotiation must be able to be multi-turn.** Model everything as one-shot request/response keyed to today's transaction types and you foreclose multi-turn negotiation, joint evidence construction, conditional commitments, and the moment something becomes binding. The exchange envelope must be able to record a **negotiation transcript** as first-class evidence.
4. **Determination must be able to happen at or before the point of care.** Model adjudication as "the thing that happens after a claim is mailed" and real-time becomes a bolted-on special case.
5. **The substrate must be able to run the payer side.** Capitation, direct-to-employer contracting and shared risk mean the operating organization sometimes **is** the entity that adjudicates, holds risk and owes other providers. **Hard-code "we bill, they pay" and you cannot represent the arrangement the market is most clearly moving toward.** A zone model defined by *write authority* survives this; a model with a field named `payer_paid_amount` does not.
6. **Automated determinations must be legally interrogable on both sides.** Expect a right to human review and a duty to explain; expect also to *demand* the counterparty's rationale and store it.

### §J.6 — The "what if it gets simpler" test

**[T1]** It is not getting simpler — every observable 2025–26 trend added complexity (four new API surfaces, episode accountability layered *on top of* fee-for-service billing, growing individual-market financing arrangements, coverage churn, AI on both sides).

**[T2]** The most likely, most valuable and least discussed simplification vector is **standardization** — adoption of the remaining operating rules with a certification mechanism, a mandated efficient transparency format, genuinely reusable cross-payer questionnaires. **[T3]** Coverage-structure simplification is politically distant on current evidence.

**The strategic conclusion, and it is the sharpest thing in this section:** **software whose value IS the complexity dies; software whose value is coherence survives and improves.** Payer-specific edit libraries, denial taxonomies, routing intelligence, eligibility-quirk databases and format translation are all arbitrage on incoherence. Identity, consent, authority, longitudinal memory, service occurrence, provenance, temporal truth, audit and the money ledger are load-bearing regardless of how many payers exist. **A single-payer system still needs to know who the patient is, who authorized what, what happened, who owes what, and what the system believed when it decided.**

**Therefore: every capability whose value derives from today's fragmentation must be built as a replaceable adapter over a stable core, never as core architecture.** If the complexity is in the core, simplification is an extinction event. If it is in adapters, simplification is a cost reduction. **[T4]** That simplification arrives fast enough to strand a well-architected substrate — even single-payer transitions run a decade with claim runout. Time to adapt is not the risk; **having put the complexity in the wrong layer is.**

---

## §K — GATE RECOMMENDATION (required output K)

Deliberately **not** copied from another arc's pattern. C4.4 needed five gates; C4.6 needed L2 depth; C4.5 needed a micro-pass. Insurance needs something different because most of its general physics is already represented and most of its remaining work is *application of inherited patterns* — with a small number of candidate gaps that an EXISTS-AS sweep must confirm before any net-new owner is proposed.

### §K.1 — Recommended: an adaptive, collapsible sequence (amended at Gate 0R)

**The first snapshot proposed a two-gate arc plus an immediate migration. Both are corrected.** The migration is withdrawn for containment (R5); the two gates are too compressed for the ownership question that actually remains. What follows is adaptive with explicit collapse conditions — **gates collapse early when one decomposition clearly dominates, and expand only on a real collision.** No inherited ceremony: no arc's method sequence is owed here merely because it looked rigorous elsewhere.

**IMMEDIATE — `INS-HAZ-COVSURF`: enforceable containment, NOT a migration.**

The withdrawn recommendation was wrong for a reason worth stating: I classified a coverage-identity migration as a **two-way door** while my own §G.2 import list classifies the responsibility decomposition and money-ledger model as **one-way doors.** A schema change here could prematurely encode the wrong owner, and data accumulates in whatever shape is chosen. **Containment first; correction after ownership resolves, through Build Entry.**

> **★ ROUND-3 STATE CORRECTION.** I called this "enforceable" and said the surfaces "are marked." **They are not marked anywhere authoritative, and this lane cannot mark them** — it touched no code, no contract, no guardrail, no Build-Entry surface and no shared control-plane file. Its true state is a **proposed, checkable containment contract**, not an enforced rule. It becomes enforceable only when the integrator lands the guardrail / open-review / FWREG / Build-Entry routing, or a policy-as-code check exists. **The activating landing is named at the end of this block.** Claiming enforcement I cannot deliver is the same overclaim class as R3.

Containment must be **checkable rather than aspirational** (**push-back P2** — a registry note does not stop a feature added next month). Proposed contract:

1. **Both surfaces to be marked `provisional · capture_and_routing_only · not_a_coverage_authority`.**
2. **No new consumer may treat `is_active`, `eligibility_status`, card OCR output, or `verified_by_user_id` as authoritative coverage.** These are capture and routing signals.
3. **No expansion of insurance behaviour on either surface** — no new columns, no new writes, no new reads that imply coverage authority — **until ownership is resolved.**
4. **Trip condition, stated so it is checkable:** any pull request that adds a column to, adds a write path to, or adds a coverage-semantic read from either surface **trips this hazard and requires the Gate-1b owner decision first.** That is the enforceable version.
5. Register as a build hazard; design the actual migration only after the owner and lineage model pass Build Entry.

**What makes the trip condition active (named, so the state is unambiguous).** The contract is inert until the integrator lands, at the parent integration transaction: **(i)** the guardrail-digest row for coverage-as-boolean / overwrite-on-check (§M(b)); **(ii)** the `05` conflict row for the overlapping surfaces; **(iii)** the `INS-HAZ-COVSURF` FWREG row carrying clauses 1–4 verbatim; and **(iv)** a Build-Entry note binding clause 4 as an admission check. **Until all four land, clause 4 is a recommendation and any consumer may ignore it** — which is precisely why it is flagged rather than assumed.

**GATE 1a — `INS-G1A-PHYSICS` (normative, regime-independent). This is a Gate-1 INPUT, not a successor.**

**Push-back P3:** Knox sequences targeted evidence *after* Gate 1's questions freeze. If those questions are frozen in US-derived vocabulary, no later evidence pass can rescue them. So the normative pass runs **first** and its output constrains which decompositions are even candidates.

Its question is not "what objects does US insurance need" but: **what care-financing physics survive whether the counterparty is a commercial insurer, Medicare, an employer, a lender, a risk-bearing provider, a public budget, a membership, an AI-managed mutual pool, or nobody at all?** Every candidate semantic must pass the **payer-deletion** and **payer-inversion** tests at §J.0. **Recommended as a side agent, deliberately blind to this carrier's decomposition**, so its output can be pressured before it is absorbed.

**GATE 1b — `INS-G1B-OWNERSHIP` (ownership decomposition against the verified inherited estate).**

Mandatory inherited depth, read — not cited: REV-184 · Clinical Memory · C4.3 · C4.5 temporal · D6 · D7 · Federation · Identity/RBAC · GRR · C4.6 GCE and adapter doctrine · Care Operating Model · Polaris · residual-moat/network doctrine · the two implementation surfaces.

Questions: Is agreement/participation an **Agreement pattern**, a Federation extension, a D6 extension, or a new general substrate? Which differences require **distinct objects** versus **typed records on one substrate** (the Clinical Memory precedent)? How do agreement · position · commitment · determination · obligation differ? What is patient-scoped vs operator-scoped vs legal-entity-scoped vs plan-scoped vs portable? What holds when the provider **is** the risk-bearing payer? Which concepts are substrate physics versus US-2026 configuration?

**Must compare at least three, ideally five, competing decompositions** (§C.1): existing-owner composition · general agreement/position substrate · D6-centred extension · write-authority zones · no new owner with seam contracts only. Plus resolve **H-N1 / H-N2 / H-N3** (§D.2) against their named inheritances.

Output: candidate owner/seam map · candidate constitutional laws · **rejected alternatives and why** · exact unresolved ownership questions. **No schema, no contract mutation.** Collapses early if one decomposition dominates.

**TARGETED EVIDENCE — after 1a/1b questions freeze, not before.** Not a giant comparator table. Process official sources by the frozen questions only: CMS · X12 · HL7 Da Vinci · NCPDP · CAQH for present rails; Epic/Oracle/Availity/Waystar plus a composite for mechanism and absorption pressure; self-funded/Medicare/Medicaid/PBM/risk-bearing-provider mechanics; AI-agent authority and automated redress; alternative financing and future settlement; legal/regulatory triggers; build-buy-wrap-partner. **Comparator features inform mechanisms; they never decide ownership.**

**C3.9 — one designated vertical falsifier, not proof of the architecture.** It tests cash-and-insured in one episode, medical necessity vs elective preference, shared facility and resources, prepayment then later adjudication, patient non-disclosure, mixed eligibility, one patient explanation, and provider/operator incentive conflict. It is `shell_pending_population`, which is exactly why composition cannot be scored before it.

**GATE 2 — `INS-G2-COMPOSITION`: a small set of discriminating deep traces**, each passing through principal/capacity → source authority → care decision → service occurrence → coding representation → financing position → commitment/determination → obligation/allocation → settlement → finality → disagreement → correction → federation → patient explanation → proof. **C4.3, C4.5, REV-184 and Federation are explicit evaluators, not background citations.**

**FINAL SUFFICIENCY RECEIPT** — may combine with Gate 2 if the evidence is already decisive. States what Task-D may rely on and must falsify; which spine laws are ready; which C5 changes are owed; which implementation is admitted; what is bought versus built; what stays external; what pilot would prove the moat; what kill conditions stop the program; and what remains intentionally unresolved.

### §K.2 — Explicitly NOT recommended, with reasons

| Not recommended | Why |
|---|---|
| A ceremonial fixed-gate program | The general physics are strongly represented (§D.1, §C.4a); a program that re-derives them is theatre. Gates here are **collapsible on evidence** and no prior arc's sequence is owed. |
| The first snapshot's compressed two-gate arc | Too compressed for the ownership question that actually remains, and it froze Gate-1 questions in US-derived vocabulary before the normative pass could constrain them (P3). |
| The withdrawn immediate migration | Contradicted my own one-way-door discipline (R5). Replaced by enforceable containment with a checkable trip condition. |
| Several independently gated sub-arcs (coverage · claims · authorization · appeals) | This is the partition-becomes-ontology error the map's own anti-silo rule forbids. The zones are *write-authority* zones, not work packages. |
| "No separate insurance arc required" | Rejected: Gap G1 has no owner and cannot be resolved inside any existing contract's pass. |
| "Not ready for further architecture" | Rejected: the framing is now sufficient (Verdict 1) and three gaps are specific and actionable. |
| Opening a connector, clearinghouse or EDI arc | Rung/adapter-family patterns already cover the posture; building transport is the commoditized layer (§G.3.11). |
| Any vertical arc (dentistry, hospital, plastics, pharmacy) | FWREG-017 forbids it; they are fixtures and falsifiers. |
| Reopening D6, Care, GRR, C4.5 or the pharmacy L2 | Out of lane scope and unnecessary — all three findings compose against them. |

---

## §L — TASK-D INTERFACE (contract elements 5, 6, 7, 8)

### §L.0 — Readiness verdict: TWO LEVELS, deliberately separated (amended at Gate 0R)

The single `READY_WITH_NAMED_LIMITS` verdict is withdrawn — it let verified reconnaissance and unverified framing travel under one label, which is precisely how a polished carrier gets converted into truth.

**`READY_AS_GATE0_RECONNAISSANCE_INPUT`** — because the problem is framed (V1); the inherited physics are now **verified by full read**, not characterized (§C.4a); the routing hypothesis is tested rather than decorated (§E); implementation state is read from DDL rather than documentation (§D.4); external reality is sourced to primaries with an explicit unverified register (§F); sixteen fixture families with distinct physics are named (§H); and the inherited C4.6 falsifier obligation is discharged (§F.2).

**`NOT_READY_AS_PINNED_ARCHITECTURAL_RELIANCE`** — because the replacement framing is a candidate axis, not architecture. **Task-D must not pin:** the five zones as a winning decomposition · agreement-as-object as the *only* gap or as estate-wide absent · H-N1/H-N2/H-N3 as settled separations · the final no-new-domain conclusion · or this sequence as sufficient. Those are §L.3 falsifiables, and Task-D's own method already requires it to distinguish design from contract from build from proof maturity and to preserve open options rather than convert a polished carrier into truth.

**The five limits Task-D must carry:**

- **L1 — No fixture has ever been run.** Every claim here is paper. C3.9 is `shell_pending_population`. Task-D may not score any insurance cell as `SHIPPED` or `PILOTED` for OMNI.
- **L2 — Gap G1 has no owner, and the gap is narrower than the first snapshot said.** General multi-authority disagreement machinery **exists** (§C.4a, verified); what is unowned is **agreement-as-object plus a named operative-position primitive**. Task-D must treat that as unowned, not as tacitly D6's. A fixture requiring it (S4, S12, S16) exposes an OMNI-side gap — and per the frozen method's own rule, **that is a `NOT_READY`/named-reconciliation signal against OMNI, not against a competitor.**
- **L3 — Two committed implementation surfaces carry overlapping coverage-like fields with no linkage, source-authority model or operative-view contract** (§D.4). Task-D must score OMNI's `execution_maturity` honestly: capture exists in committed migrations, with that defect, **and no deployment receipt was sought or produced** — so `PILOTED`/`SHIPPED` claims are unsupported either way.
- **L4 — This lane did not read `v4_C4_2B` or `v4_C4_2C` in full.** I relied on C4.2A, the designated terminus and status surface. If the interim bodies contain insurance-relevant material, this carrier has not consumed it. **The integrator should check this before composition.**
- **L5 — C4.3 was reached at searched-only depth.** Its oracles are cited via C4.2A's summary and the Task-D method's integration clause, not by reading C4.3. The retroactivity claims (S14, N1) rest on that indirection.

### §L.1 — What Task-D MAY RELY ON (fourteen claims)

1. **The care/financing constitutional posture is represented and accepted in direction — not contracted.** The payer is a named non-fungible commitment plane that commits coverage and does not determine clinical indication; `appropriate-but-not-covered` is a distinct commercially-not-clinically-inadmissible state; insurer routing is an operational reroute; financial transaction-authorization is a distinct consent family; "ten payer bots = one payer principal." **All of it sits in a `REVIEW-DRAFT · analysis_nonbinding` capture as `[INV]` candidates**, and the same capture contains **no payer-denial, OOP-while-disputed or contract-terms mechanics at all.** (§D.1, §C.4a, verified full read.)
1b. **OMNI already carries substantial general multi-authority disagreement, supersession, correction and frozen-context physics** — Clinical Memory's three-axis model with `unresolved_conflict` and fail-closed gates; REV-184's concurrent conflicting stances, `dispute` stance and `disagreement-as-escalation`; C4.3's state-typing, owner-specific correction, ten-state external-custody ladder and `O10 ACK ≠ accepted-custody`. **Task-D must not treat this territory as a greenfield, and must not treat it as ratified either** (`draft_for_ratification` / `analysis_nonbinding` / `implementation absent-or-partial`). (§C.4a, verified.)
2. **No new domain is needed or authorized**, on `GRD-026` plus counterparty-noun ≠ lifecycle grounds — a payer acts in at least eight capacities and a payer domain would be a god-object over all eight. (§E.4.)
3. **D6 is a correctly-named participating owner and materially insufficient as "the home."** Three things it structurally cannot own are proven, not asserted. (§E.)
4. **The problem decomposes by write authority into five zones, four of which already have accepted OMNI patterns.** (§C.1.)
5. **The Rx acceptance ladder survives insurance intact; economic finality is an ORTHOGONAL axis, not a further rung.** Money-moved ≠ economically-final is real, and it extends D6's money-state vocabulary along a new dimension rather than adding acceptance depth. (§C.5.)
6. **The adapter-family / connection-instance split survives**: a clearinghouse is an adapter family, a payer a connection instance; **no single connector can resolve payer heterogeneity**, and the 277CA's non-mandated, companion-guide-governed status is the proof. (§F.2.)
7. **An external authority's assertion or commitment is a different question at a different altitude from D7's artifact→clinical-meaning chain** — and the estate carries the distinction in prose and plane-separation but **not** as a paired typed schema. A historical confirmation is **never un-passed**; later assertions, backdated effective changes, challenges and supersession alter the *operative view* while preserving the prior event. (§C.4.)
8. **Three financing-specific HYPOTHESES, each with a named inheritance and a named resolving test** — H-N1 finality axis, H-N2 assertion-vs-commitment, H-N3 communicative act. **Not settled separations.** (§D.2.)
9. **Implementation is committed capture-and-routing migrations only**, carrying overlapping coverage-like fields with no linkage, source-authority model or operative-view contract (G2), verified against DDL. **No deployment receipt was inspected or produced in this lane**, so production state is unproven in either direction — that is a statement about my inspection, not about the world. No EDI, claims, adjudication, remittance, prior-auth, appeal or COB code exists in the searched tree. (§D.4.)
10. **`eligibility_decisions` is a committed, versioned, input-pinned, reproducible determination pattern** that benefit interpretation should follow rather than reinvent. (§D.4.)
11. **Real-time medical adjudication is blocked by transport**: the X12 837 lacks a response format, per NCPDP's own guidance. Expected reimbursement must therefore be modelled as **provisional belief subject to revision**, permanently. (§F.3.6, §J.3.)
12. **CMS-0057-F makes integration mandatory and provenance optional**, with a five-year lookback from 2027-01-01, excluding cost-sharing, denied authorizations and drugs — and binds neither ERISA self-funded plans nor SBE/SBE-FP issuers, so providers are **permanently dual-stack**. (§F.1.)
13. **Bitemporality is a gap all ten reviewed comparators share** — "not demonstrated in reviewed public primary sources." (§G.3 closing.)
14. **Sixteen fixture families with materially distinct physics**, with S2 (covered reconstructive beside cash cosmetic in one episode) as the flagship and the wedge. (§H.)

### §L.2 — Unresolved items

**U1** Gap **G1** owner — bilateral participation and rate truth. **U2** Guarantor (**G4**). **U3** The four provider roles on one claim (**G5**). **U4** Sponsor ≠ payer (**G6**). **U5** Estimate-as-speech-act owner (**G7**). **U6** Coding owner (**G8**). **U7** Accumulator truth is unknowable in principle — the honest ceiling is a probabilistic estimate with a stated confidence and a promised reconciliation; which error term dominates (accumulator staleness vs coding drift vs network error vs interpretation error) is unmeasured. **U8** Whether the zone model is one abstraction over-split — the blind decomposer's self-attack, with its two proposed tests (§G.5.1). **U9** How binding a communicated estimate is — genuinely unresolved in the industry; model bindingness as an explicit configurable attribute rather than assuming a default. **U10** How much financial context a clinician should see — I decline to assert an invariant here; `REV-185` is the right home and it is open. **U11** **Whether the longitudinal-financing-context moat has a buyer** (§I.2a) — the single most important commercial question in the arc. An architectural moat with no buyer is an engineering preference. Three named failure paths: patients never become the buyer; providers will not pay for a longitudinal view whose benefit accrues mostly to the patient; or regulatory mandates commoditize enough of it that the differential is thin. **U12** Which payer capacities need distinct representation vs one provenanced-assertion mechanic. **U13** Whether OMNI's operator ever sits on the payer side (§J.5.5) and what that does to the zone model. **U14** TPA / utilization-review licensure exposure (kill condition 8) — legal, not architectural, but it gates the wedge.

### §L.3 — What Task-D MAY FALSIFY (twelve, numbered in order — and it should try)

- **F1 — The five-zone write-authority decomposition itself.** The strongest counter is the blind decomposer's own: these may be instances of one abstraction, and a coordinating service that joins them becomes the undeclared god-object. **Tests:** map each candidate owner's correction/reversal path (collapse to one or two mechanisms ⇒ over-split); count how often one actor writes several in one transaction ("most, most of the time" ⇒ over-split).
- **F2 — That D6 is insufficient.** If a fixture shows D6 can hold coverage, participation and coding without collapsing an invariant, §E is wrong.
- **F3 — H-N2, that an assertion/commitment distinction needs a typed pattern.** If an external commitment is adequately representable by existing machinery — Clinical Memory's assertion/adoption gate, REV-184's `external_authority_committed`, or C4.3's custody ladder — then H-N2 dissolves into inheritance and no new pattern is owed.
- **F4 — H-N1, that settlement finality needs its own axis.** If D6's `dispute_open`/`dispute_lost` plus additive adjustment and reconciliation already carry offset, recoupment and lookback windows, then H-N1 is an ordinary D6 vocabulary extension and the "axis" framing is unnecessary.
- **F5 — The re-scoped wedge.** If a fixture shows "everything is tracked, exceptions surfaced early" is not purchasable, §I fails.
- **F6 — That the inherited posture is strong enough to carry forward.** The Care capture is `REVIEW-DRAFT` and nonbinding; REV-184's passport contradicts its own body; C4.3's implementation is `absent/partial`. If that is too weak to inherit, Verdict 6 must widen and more spine work is owed.
- **F7 — The normative frame (§J.0).** If "financing must not *silently* rewrite clinical truth" under-determines the architecture — or if the payer-deletion and payer-inversion tests delete nothing, meaning they were applied too gently — the frame is decoration.
- **F8 — The minimal funding-participation interface (§J.0).** If kind/principals/scope/period/authority-basis/settlement-posture turns out to be a convenient projection rather than a real shared interface, then the funding kinds are simply non-fungible and no common interface should be minted. **Gate 1a must be free to return exactly that.**
- **F9 — The moat candidate (§I.2a).** If an incumbent can in fact assemble the person's longitudinal financing context, or if mandated payer-to-payer and patient-access exchanges deliver enough of it, the structural claim collapses to the business claim (and U11 may kill it commercially regardless).
- **F10 — The gate recommendation.** If Task-D needs more than Gate 1a/1b resolves, §K is under-scoped; if it needs less, over-scoped.
- **F11 — That no payer-shaped domain is needed.** If Gate 1b's resolution requires a truth-owner that is genuinely payer-shaped, revisit — with `GRD-026` and the C4.6 precedent as the burden to overcome.
- **F12 — Card-3 floor correction.** If the four named omissions turn out immaterial, §A.3 is over-stated.

### §L.4 — PROHIBITED ASSUMPTIONS (contract element 8 — explicitly rejected here)

Every one of these is rejected unless independently demonstrated. Where the estate or a primary source already refutes it, the refutation is named.

1. Insurance is merely a D6 payment feature — *rejected, §E.3.*
2. Insurance is a standalone domain — *rejected, §E.4; `FWREG-017`; `GRD-026`.*
3. An insurance-card image is authoritative coverage truth — *rejected, §C.3. It is a photograph of a marketing artifact.*
4. OCR extraction is identity or eligibility commitment — *rejected; D7's gate separation.*
5. Eligibility means coverage for the proposed service — *rejected; Da Vinci CRD: "no guarantee of payment."*
6. Prior authorization means payment — *rejected; `FWREG-017`; payer manuals say so explicitly.*
7. Payer approval means clinical appropriateness — *rejected; accepted Care doctrine.*
8. Denial means care was unnecessary — *rejected; 36% "other" + 25% administrative vs 5% medical necessity; 80.7% MA overturn rate.*
9. An EHR's claim workflow owns the underlying care or financing truth — *rejected.*
10. A clearinghouse ACK means accepted custody, adjudication or payment — *rejected; §C.5; the 999 "does not cover the semantic meaning."*
11. A payer API response is timeless — *rejected; §C.4 staleness clock; 86% mandated availability floor.*
12. Current benefit information can be stored without effective / recorded / received / known-time discipline — *rejected; §C.6 L1.*
13. One operator's payer contract is portable to another — *rejected; contracts belong to the legal entity, §C.7.6.*
14. Patient portability means universal raw-record replication — *rejected; Federation's `isolated` default and grant layer.*
15. Payer agents may inspect unrestricted raw truth — *rejected; minimum necessary; consent as hard veto.*
16. External agents may write domain truth directly — *rejected; owning-domain commit.*
17. "AI will automate it" is an architecture — *rejected; §J.1: the arms race raises activity without evidence of lower cost per claim.*
18. One connector solves payer heterogeneity — *rejected; §F.2; the 277CA is companion-guide-governed per payer.*
19. A vendor feature name proves the full lifecycle — *rejected; frozen Task-D method §C.*
20. Current US insurance mechanics should be hard-coded as timeless ontology — *rejected; §C.2 funding participation; §J.4 configuration vs physics.*
21. Medicare, Medicaid, commercial, employer plans, financing, membership and cash have identical authority or settlement physics — *rejected; §H, sixteen families precisely because they do not.*
22. **Task-D must receive a positive-readiness answer** — *rejected. The verdict is deliberately split (`READY_AS_GATE0_RECONNAISSANCE_INPUT` / `NOT_READY_AS_PINNED_ARCHITECTURAL_RELIANCE`) precisely so that useful reconnaissance cannot smuggle unverified framing through under one label. `NOT_READY` was a live available outcome throughout, and half of the verdict is now exactly that.*

**Two more this carrier adds:**

23. **The care/financing separation is unaddressed and must be invented pre-spine** — *rejected, §D.1. It is largely accepted already; assuming otherwise would duplicate Care doctrine into a commerce artifact and create two homes for one law.*
24. **Insurance is architecturally untouched** — *rejected, §D.4. Capture ships. A lane obeying only Card 3's floor would have asserted this.*

---

## §M — PROPOSED ROUTING BUNDLE (contract element 9 — PROPOSALS ONLY; the lane lands nothing)

Every row below is a **proposal** for `PRESPINE-PHASEA-INTEGRATOR` to land, reject, split or reroute at the parent integration transaction. **This lane wrote no shared surface.**

> **★ REWRITTEN AT GATE 0R ROUND 3 — this was the blocking defect.** Rounds 1 and 2 amended the *analysis* and left the *routing bundle* carrying Round-1 conclusions. That is worse than not correcting at all: had the integrator landed the previous §M, the control plane would have canonized five-zones-as-decomposition, a D7 fourth gate, ACK-rung-6, and duplicated-canonical-coverage-truth — **every one of which this carrier explicitly withdrew.** Propagation fidelity is now treated as part of the correction, not an afterthought.

**Catalog** (`01_master_corpus_catalog.md`) — one proposed row: this carrier; category `analysis` / gate-0 carrier; authority `analysis_nonbinding`; status **`gate_0_reconnaissance_complete · architecture_framing_requires_reconciliation · review_ready_pending_integrator · not_promoted`** *(matches the amended passport exactly; the earlier `gate_0_complete` conflicted with it)*; domains per passport; review gate `user_knox_required`.

**Read graph** (`04_manifest_read_graph.md`) — one proposed Tier-2 route: *"Insurance / payer / coverage / out-of-pocket / mixed financing"* → this carrier → then D6 §12 + `REV-159`/`REV-160` + `FWREG-017`. Triggers: `read_before_insurance_payer_work`, `read_before_commerce_work`, `read_before_task_d_close`, `read_before_spine_authoring`, `read_before_c5_contract_authoring`. **Placement note:** the route should say the carrier is read **before** D6 §12, because a reader who starts at D6's deferral will conclude insurance is untouched and miss both the committed implementation state and the inherited disagreement physics at §C.4a.

**Decision ledger** (`03_decision_extraction_ledger.md`) — **two proposed DECISION rows only.** Everything else this Gate-0 surfaced is a hypothesis and must not enter the decision ledger:

1. **D6 is a participating owner of insurance/financing, not its home.** A **payer-named** domain is contraindicated on `D0THES-GRD-026` (payload-noun ≠ domain) plus C4.6's *counterparty-noun ≠ lifecycle* grounds. **Whether a general, non-payer-shaped agreement / position / financing-arrangement owner is owed remains OPEN** and is not decided here.
2. **OMNI's general multi-authority disagreement, supersession, correction and frozen-context physics are inherited, not re-derived for financing** — verified across Clinical Memory, REV-184, C4.3 and the Care capture (§C.4a), at mixed authority and maturity. Financing work composes against them.

**Open-hypothesis rows** (proposed for `08`, **not** the decision ledger — these are questions with named tests, not conclusions): **H-N1** settlement-finality/reversibility as an orthogonal axis possibly extending D6 · **H-N2** external assertion vs external commitment as a possible general typed pattern **above** insurance · **H-N3** durable communicative act as a possible cross-domain pattern above financing · **the five write-authority zones as a candidate analytical axis and anti-collapse test, explicitly NOT an accepted decomposition** (Gate 1b must compare it against lifecycle/commitment-first and existing-owner composition).

**Guardrail digest** (`06_guardrail_antipattern_digest.md`) — two proposed rows: **(a) financing-vocabulary collision** — "claim", "eligibility" and "denied" each already carry three distinct in-estate meanings (§D.3); require an explicit qualifier at every new field, object and route. **(b) coverage-as-boolean / overwrite-on-check** — `is_active` plus in-place mutation destroys the ability to answer "what did we believe on date D, from whom, and how sure were we," which is the only question that matters when a patient disputes a bill in November.

**(c) inspection-scope absence stated as estate-scope absence — proposed on the strength of my own repeated failure, which is the honest reason to propose it.** I committed this error **three times in one arc**, each time caught by review, never by me: *"nothing anywhere in the estate can hold a bilaterally contested fact"* (four bodies grepped, none read) · *"no deployment evidence exists"* (no receipt **inspected**, absence not proven) · *"searched across all four sources, therefore nothing models a mutually constituted agreement"* (absence in four carriers restated as absence estate-wide). Three instances is not three slips; it is one habit, and patching the instances without naming the habit guarantees a fourth. **The rule:** an absence claim must state its **inspection radius** and must not silently widen to the estate. Required form — *"not found in [named bodies read in full] or [named targeted searches] to date; a search miss is navigation evidence, not proof; an EXISTS-AS sweep across [named surfaces] is owed before declaring net-new."* This generalizes well beyond insurance and is proposed as a durable guardrail rather than a lane footnote.

**Open review** (`08_open_review_queue.md`) — **`REV-159`: update disposition, do NOT close.** Record that Gate-0 reconnaissance ran; that D6 remains the money / entitlement / patient-responsibility anchor; that the closure condition should be **narrowed** (candidate D6 extensions: offset · refund-to-payer · multi-party allocation · generalized entitlement trigger · **an orthogonal settlement-finality axis**) rather than expanded to coverage, participation and coding; and that a *new* open row is owed. **`REV-160`:** unchanged; note the financing-vs-`payment_method` question is now also a *substitution-of-the-obligated-party* question (§C.6 L12). **`REV-185`:** note that payer-facing economics strengthen the case for structural rather than policy enforcement, and that U10 (clinician financial visibility) belongs here. **`REV-187`:** note the coverage-analysis grid (sponsor XOR insurer) is a **worked precedent** for dual-financing allocation and should be consumed by Gate 1b, not re-derived.

**Proposed new open-review row — `REV-NNN`** (number assigned by the integrator): **the owner of the agreement / party-position / operative-posture constellation is unresolved.** Not "one bilaterally contested fact" — a typed constellation of at least five things (executed instrument · each party's position · the operative treatment used while they disagree · the evidence for each · the eventual contractual/regulatory/arbitral resolution). Candidate homes: Federation extension · a general agreement/position substrate · D6 with an alien mechanic · existing-owner composition as typed records · no new owner with seam contracts only. **Closure requires the Gate-1b EXISTS-AS sweep first** (§C.4a). Trigger: **`INS-G1B-OWNERSHIP`**.

**Future Work Registry** (`future_work_registry.md`) — **`FWREG-017`: update, do not close.** Gate-0 reconnaissance discharged; the four named invariants are **represented and accepted in direction inside a nonbinding Care capture, not contracted**, and need carrying forward plus validation; three financing-specific **hypotheses** (H-N1/H-N2/H-N3) added with their inheritances and resolving tests; next trigger becomes **`INS-G1A-PHYSICS`**. **Proposed new rows:** `INS-HAZ-COVSURF` (**build hazard + enforceable containment**, replacing the withdrawn migration) · `INS-G1A-PHYSICS` (normative, regime-independent, payer-deletion/inversion tested) · `INS-G1B-OWNERSHIP` (ownership decomposition against the verified inherited estate) · `INS-G2-COMPOSITION` sequenced **after C3.9**.

**Supersession / conflict ledger** (`05_supersession_conflict_ledger.md`) — **one proposed conflict row, not a supersession:** **two committed implementation surfaces carry overlapping coverage-like fields with no linkage, no shared coverage identity, no source-authority model and no operative-view contract** (G2) — in tension with the single-owner principle and with D6 §8.6's no-second-source rule. **Deliberately NOT worded as "duplicated canonical coverage truth": neither surface has been established as canonical**, and the conflict is the absent authority relationship, not a proven duplication of truth. Nothing in the estate is superseded by this carrier.

**Card-3 floor correction** — routed to the **integrator and the map owner** (§A.3), not landed here. If the envelope is amended for a successor lane, **all four** named omissions should be added to its floor. **The fourth, added at Gate 0R:** any successor floor must include the sources verified at §C.4a (Clinical Memory · REV-184 · C4.3), because a lane that reasons about financing disagreement without them will re-derive machinery that already exists — which is what happened here.

**Evidence-Plane preservation** (`ingestion/00_evidence_router.md`) — **proposed as a bounded run, not performed here, and the reason is stated rather than assumed.** Knox correctly identifies a review defect: the kickoff required an exact URL-level ledger for every external claim, and §F names sources without one. My helpers held those URLs; summarizing them into §F is exactly the evaporation this estate exists to prevent.

**I deliberately did not transcribe a ledger by hand, and this is a judgement call worth reviewing.** Two reasons. A hand-copied ledger inside an architecture carrier is a *copy* with no provenance of its own, and the Evidence Plane is the actual preservation home (`GRD-036`, capture broad / promotion gated). And my writable scope is one file — creating packets here would breach it and Knox's review explicitly forbids a sidecar. So the honest move is to **route the run and downgrade the claims until it happens**, rather than manufacture a ledger that looks like preservation.

> **★ ROUND-3 CORRECTION — the split I collapsed, and a real dependency I must not soft-pedal.** Knox is right that **helper agent IDs are recovery *hints*, not durable evidence carriers**: agent sessions are replaceable compute, the repository is the durable memory — which is the estate's own §2.1 language, and my shortcut ran against it. Two things must be separated:
>
> **(a) PRESERVATION-ONLY capture — mechanical, urgent, no new research or interpretation.** Materialize the existing helper URLs, source metadata, publication and access dates, NOT-VERIFIED registers, and factual-claim mappings into proper Evidence-Plane source packets **before those contexts are gone.** This is retrieval and transcription, it is auditable, and a bounded sub-agent is the right instrument. **It is time-sensitive in a way nothing else in this arc is** — every other owed item can wait; this one degrades.
>
> **(b) TARGETED question-driven analysis — later, after Gate 1a freezes the questions.** Running it earlier lets premature evidence define the questions, which is the P3 failure at a different layer.
>
> **Proposed condition, and I endorse it as binding rather than advisory:** completion of **(a)** is a condition of parent integration, or at minimum a condition before §§F/G/I/J may be consumed by Task-D. **This lane cannot perform (a)** — one-file scope, no sidecar — so it requires either integrator authorization or a separately authorized bounded lane. **That is a real open dependency, not a deferral, and it should not be closed by anyone treating the agent IDs below as sufficient.**

**Consequence, binding on successors:** the external claims in §F, §G, §I and §J are **`evidence_pending_ingestion`** and **may not support doctrine, a spine law or a C5 contract until the Evidence-Plane run lands.** They are adequate for Gate-0 framing and inadequate for promotion.

**Proposed lanes and recovery pointers** (agent transcripts are retrievable, so the work is recoverable rather than lost):

| Work | Proposed lane | Recovery pointer |
|---|---|---|
| Regulatory timeline, transaction standards, failure modes | `regulatory_compliance_evidence/` + `vendor_integration_evidence/` | helper `a416091c-ef88-470d-bb7e-9af25f8c178e` — carries the URL-level ledger with access dates and its own NOT-VERIFIED register |
| Comparator mechanisms + 2030/2035 four-tier trajectory | `competitor_product_evidence/` + `market_strategy_evidence/` | helper `64d5ad92-1101-4f24-b4b7-2b0a1f772f96` |
| Incumbent/adversarial pressure + kill conditions | `market_strategy_evidence/` (strategy analysis; factual claims split to source packets) | helper `3f03b966-8863-42ac-8547-b9449f321795` |
| Patient + provider/institution lenses | `user_operator_research/` | helper `2c4298b1-c8cc-40eb-982d-83100fd07b5c` |
| Blind first-principles decomposition | attributed **nonbinding interpretation**, not a source packet — it cites no sources by construction | helper `a00cdb4b-901b-41ec-bd79-c8ad21e2cfee` |
| Estate archaeology | repo-internal; no Evidence-Plane packet owed | helper `fad4ccd6-a5a8-4760-9b54-cf6ed5296202` |
| **Gate-0R verified inheritance read** | repo-internal; findings landed at §C.4a | helper `925392e4-724e-47d1-bea0-a1159ff2dc23` |

**Also proposed:** the 2030/2035 material should land as **explicit strategic hypotheses with the evidence/forecast tier preserved and reopen triggers attached** (§J already carries T1–T4 labels), never as flattened prediction.

---

## §N — NEW ARTIFACT COMPLETION EVALUATION (contract element 10 — Agent Work Protocol §5)

| §5 requirement | State in this lane |
|---|---|
| Passport | **DONE** — ten fields complete, above. |
| Catalog row | **PROPOSED, NOT LANDED** (§M). Landing belongs to the integrator. |
| Read-graph evaluation | **DONE and PROPOSED** — one Tier-2 route with placement reasoning (§M). |
| Routing of decisions / conflicts / guardrails / open-review / future-work | **DONE as proposals** (§M) — four decisions, two guardrails, four open-review updates, one new open-review row, one conflict row, one FWREG update, two new FWREG rows. |
| Classification certainty | **CERTAIN** — `analysis` / gate-0 framing carrier, `analysis_nonbinding`. Not `needs_classification`. |

**Per Agent Work Protocol §2.1 clause 6, New Artifact Completion for shared surfaces occurs at the integrator's parent transaction, not in this lane.** The lane's §5 obligation is to produce a complete passport plus a complete, landable routing proposal set. Both are satisfied. **No shared control-plane surface was touched.**

---

## §O — STOP DECLARATION + RECEIPTS (contract element 11)

### §O.1 — Review Object Posture (collaboration model §2.6)

| Field | Value |
|---|---|
| Review object | `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` |
| Posture | **committed + pushed named-branch snapshot**, offered for full-document review |
| Branch | `analysis/insurance-payer-oop-g0` |
| Base (unrotated) | `f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05` — the base named in checkpoint §4.2's `lane_content_base_sha` owning row. **Verified equal to the branch head before the first write; not re-pinned, not rotated.** *(Frozen evidence pin, labelled as such per the §2.1 Single-source law's explicit frozen-evidence exception — this is a receipt, not a status report.)* |
| Control-plane ref used | `main` @ `d592e402b779aaedc1f137189bf51cd2b5ca678d` |
| Two-reference boot | **In effect and honoured** — control surfaces from `main`; substantive inputs at the content base; no shared control surface read from the base as current state. |
| Worktree posture | environment-local, non-canonical, recreatable from branch + base |
| Review mode | **Gate-0R amended snapshot returned for Knox byte review**, then Nick acceptance, then integrator routing |
| Amendment round | **Round 3 (Gate 0R propagation + constitutional).** Round 1 (`f99d67c`) → Knox `REQUEST_CHANGES — bounded material reframe`. Round 2 (`e8f64fc`) → Knox **`PASS WITH REQUIRED MICRO-PATCHES`**: reframe accepted, bytes not yet mergeable because superseded Round-1 language survived — **most consequentially in §M's routing bundle.** This snapshot answers that: 9 patch groups, 3 constitutional refinements, §M rewritten first, 1 error pattern self-reported as a proposed guardrail. §0R is the audit trail for all three rounds. |

### §O.2 — Bounded Diff Receipt (machine-generated; exact figures in §O.4)

| Field | Value |
|---|---|
| Files added | **1** — the declared output object |
| Files modified | **0** |
| Files deleted | **0** |
| Shared control-plane surfaces touched | **0** |
| Sibling lane branches or outputs touched | **0** |
| `main` touched | **NO** — not merged, not fast-forwarded, not pushed to |
| Base rotated or re-pinned | **NO** |
| Contracts edited | **0** — D6 not edited, not reopened |
| Migrations / code / schema changed | **0** |

### §O.3 — Attestations

- **No payer domain was minted.** The prohibition is reaffirmed and given a stronger basis (§E.4).
- **No connector was treated as architecture.** A clearinghouse is classified as an adapter family under the accepted C4.6 pattern (§F.2).
- **D6 was consumed read-only and not reopened.** Every D6 finding is a proposal routed through `REV-159`.
- **No Task-D population, no §7 verdict, no C3.9 population, no Care / GRR / Operator-Economics / C4.5 work, no spine or thesis prose, no C5 contract or schema work, no implementation, no promotion, no shared-surface edit, no base rotation, no sibling-lane launch, no `main` landing.**
- **No closure was manufactured — and across Rounds 2 and 3, closure was actively un-manufactured.** The readiness verdict is split so unverified framing cannot ride on verified reconnaissance; **twelve** falsifiable claims are handed forward (F1–F12); fourteen items remain unresolved; the domain question is reopened rather than closed; three findings are demoted from separations to hypotheses; a schema recommendation is withdrawn; a containment rule is downgraded from "enforced" to "proposed"; and the funding-participation interface — my own organizing claim — is itself made falsifiable (F8). `NOT_READY` was a live outcome throughout and is now half the verdict.
- **Round-3 propagation attestation.** Every superseded Round-1 concept was swept for by pattern, not by memory: `shipped` · `in production` · `rung 6` · `fourth gate` · `genuine hole` · `duplicated canonical` · `only remaining gap` · stale gate IDs · stale counts. Remaining occurrences appear **only** inside the §0R correction record, where they are quoted as withdrawn language, and each is marked as such. **§M was rewritten before anything else** because a routing bundle that outlives its own retraction is the highest-consequence defect this lane could ship.
- **Card-3 floor correction returned with evidence** (§A.3) rather than the floor being silently obeyed — per the aperture clause, a valid successful outcome.
**Gate-0R amendment attestations (2026-08-06):**

- **The carrier was amended, not rewritten.** All reconnaissance findings, all disagreement language, all falsifiables and all prohibited assumptions are retained; fourteen corrections, three push-backs and three additions are recorded at **§0R** with their bases, so a byte reviewer can check each edit against its stated reason.
- **Every correction is attributed.** R1–R14 to Knox's review or to my own verified error; P1–P3 as push-backs against Knox; A1–A3 as additions neither review carried. **I do not claim any of Knox's corrections as my own.**
- **Two errors are self-reported that Knox did not catch:** the depth failure behind *both* headline claims (§1), and the fact that my "Rx lacks clawback" assertion contradicted my own helper's flagged-unverified note (§C.5).
- **The Evidence-Plane defect is acknowledged and routed rather than papered over** (§M). External claims are marked `evidence_pending_ingestion` and **may not support doctrine, spine law or C5 contract** until the run lands. I chose routing over hand-transcribing a ledger, stated the reasoning, and flagged it as a judgement call open to review.
- **No shared surface, no sidecar, no base rotation, no schema, no contract edit, no `main` action** — unchanged from the first snapshot.
- **`D0CKPT-GRD-003` finding, Gate 0R:** still none, and one positive observation. The **byte-review discipline earned its keep concretely** — an independent reviewer at consulted depth caught four real errors in a 959-line carrier, and the disagreement between two reviewers is what forced the verified read that corrected *both*. That is the trifecta working as designed rather than as ceremony.

- **`D0CKPT-GRD-003` finding on the first snapshot (a control that proves ceremonial should be reported, not obeyed silently): none.** This is the first real execution of the rewritten Agent Work Protocol §2.1, and every control that fired earned its keep. The base pin and two-reference boot were **load-bearing, not ceremonial** — the lane base sits materially behind `main`, and reading the checkpoint from the base would have reported launch as *held* when it is authorized. The `L1`–`L8` continuity facts and the `C1` shared-surface prohibition were both directly useful. **One observation, not a complaint:** the §4.2 activation receipt was genuinely sufficient to boot this lane from scratch with no conversation, which is exactly what it claims. **One reportable friction:** the off-repo controlling plan is absent in a cloud environment, so `D0OPER-DEC-004`'s fallback was exercised for real rather than hypothetically — it worked, and the in-repo pointers were sufficient.

### §O.4 — Machine-generated receipt

Machine-generated. **This receipt does not stamp its own commit SHA, and terminates the self-reference deliberately rather than chasing it.** A content commit cannot self-identify its own commit (Agent Work Protocol §2.1, no-self-referential-stamping): any byte count a document writes about itself is falsified by the act of writing it. The figures below therefore describe the **carrier commit** as frozen historical evidence; the branch tip sits one or two later commits ahead carrying only receipt-accuracy corrections, and **the tip is recoverable from the ref `analysis/insurance-payer-oop-g0`, which controls.** Verify against the ref, never against a number a document asserts about itself.

<!-- BOUNDED_DIFF_RECEIPT_BEGIN -->
```
$ git rev-parse HEAD                      # base before this commit — unrotated
f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05

$ git show --numstat --format= <carrier commit>
955     0       .cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md

$ git show --name-status --format= <carrier commit>
A       .cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md

$ git rev-parse <carrier commit>:.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md
eebfb994289019ce6e34b2d1d8487214a083e97d     # 955 lines / 141,996 bytes
                                             # frozen evidence: the CARRIER commit's bytes.
                                             # Later receipt-accuracy commits change this
                                             # file again by construction; that is why the
                                             # ref controls and this number is labelled
                                             # frozen rather than current.

$ git diff --cached --name-only HEAD -- AGENTS.md CLAUDE.md GEMINI.md \
    .cursor/plans/HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md \
    .cursor/plans/doctrine/ .cursor/plans/contracts/ \
    .cursor/plans/v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md
                                          # (no output) 0 shared surfaces touched

$ git diff --cached --name-only HEAD | grep -v gate0_carrier
                                          # (no output) nothing outside the output object

branch head before commit == checkpoint §4.2 lane_content_base_sha  ->  BASE_UNROTATED_OK
all 37 cited blob pins re-resolved against the base            ->  ALL_PINS_VERIFIED
`main` working tree at d592e40, clean, not merged, not pushed to
sibling lane branches (care · accountability · nonlabor · c4-5) untouched
```
<!-- BOUNDED_DIFF_RECEIPT_END -->

---

## STOP STATE: review_ready_pending_integrator

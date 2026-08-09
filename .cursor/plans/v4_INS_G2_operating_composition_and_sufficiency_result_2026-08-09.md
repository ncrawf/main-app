# v4 — INS-G2 — Operating Composition & Sufficiency — GATE-2 RESULT (R3)

Document type: `analysis` / `architecture_gate_result` (the Gate-2 output object under Gate-1b §13.3; **not** a contract, **not** a schema, **not** spine prose, **not** a new truth-owning domain)
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing. Proposes routing only.
Status: **ARTIFACT MATURITY ONLY** — `R3 · landed_on_branch · analysis_nonbinding · not_promoted · no_contract_mutation · no_shared_surface_written`. **Gate-2 execution and acceptance state live in the single state table below, which is this file's only current-state surface** (`D0CKPT-GRD-004`; `D0CKPT-GRD-003` intra-artifact specialization).
Domain(s): `insurance_payer_oop` · `d6_commerce` · `care_operating_model` · `clinical_memory` · `rbac_authority` · `federation` · `cns_coordination` · `accountability_architecture` · `architecture_governance` · `cross_cutting`. **No new domain is proposed.**
Lifecycle role: the Gate-2 result — the fourteen required outputs of Gate-1b §13.3, constructed against the accepted Gate-0 / Gate-1a / Gate-1b estate, with external-comparator pressure performed rather than routed.
Source-of-truth relationship: consumes the carried estate read-only. **Where this result and a source carrier differ, the carrier controls.** The Gate-1a **raws** control over the Gate-1a adjudication. Gate-1b §13.3 at blob `2e6a423cfae83203d4b4a1668224890043bfa12a` is the governing execution contract.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** — catalog row + read-graph disposition drafted at §18, **owed at the integrator transaction and NOT landed here** (`PRESPINE-PHASEA-INTEGRATOR` is vacant).
Review gate: `user_knox_required`

Read order: read-graph route `9p` (Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → Gate-1b carrier → Gate-2 brief) → **this**.

> **★ REVISION HISTORY. R0 (`dd72771`)** produced the fourteen outputs, ran the trace suite on paper and performed the comparator research. **Knox's full-blob review returned `NOT ACCEPTED · STRONG R0 · REQUIRED R1 ARCHITECTURE REVISION`** with thirteen patches. **R1 (this) is a rewrite, not a patch set** — R1-01 and R1-02 move the architectural centre, and Gate-1b's own R5→R8 history is four consecutive rounds proving that correcting a claim only where it was introduced leaves the withdrawn version live elsewhere. Eleven of Knox's thirteen are accepted on verification; **two are corrected back** (§0.6). **R2 (this)** is the bounded correction pass Knox's second review required, plus the repair the operator demanded: **an estate-inheritance receipt (§0.7) and the cousin/homology finding (§20).** R2's dominant result is uncomfortable and is the point — **half of what R1 called new findings already existed in the Care capture, better decomposed**, and the cause is structural: the Gate-2 read floor routes the Insurance chain and nothing else, so the gate re-derived every cross-cutting law it needed and mistook each re-derivation for a discovery.

---

> ## ★ ONE CURRENT-STATE SURFACE — this table, and nowhere else
>
> | Field | Value |
> |---|---|
> | Gate-2 state | **`constructed · R3 · builder_verdict_issued · provisional_by_construction`** |
> | **Estate-inheritance debt** | **OPEN, and one item corrected.** Care §5b/§5b.1/§18/§19 and C4.6 §0.5/§12 consumed at R2; **`EVRUN-000008`'s terminus consumed at the R3-correction, which RETRACTED a false "proposed-BLOCKED" claim R3 had inferred from a stale `WI16` index row** (§20.3). **C3.8 G1b–G4, `EVRUN-000007 §I.13–§I.15` and Tier-0 #14 `coherent_omni_architecture_pattern_2026-05-17.md` remain named, load-bearing and NOT consumed** |
> | Builder's verdict | **`SURVIVES_WITH_NAMED_RECONCILIATIONS`** — unchanged from R0, **at lower confidence and with the discharge posture below** |
> | **Discharge posture** *(new at R1)* | **14 output sections present · trace and comparator discharge INCOMPLETE.** R0's "14/14 produced · 6/6 performed" is **withdrawn** as a completeness claim |
> | Why provisional | **C3.9 does not exist** (`shell_pending_population`, re-verified). A Gate-2 result produced before C3.9 is provisional **by construction** (brief §6 Barrier 2) |
> | Final-acceptance blockers | unchanged, owned by the **Gate-2 brief** state table: C3.9 populated → consumed → affected traces rerun or reconciled → **`E2` last, unweakened** |
> | `E2` | **not run.** Knox's review is **not** `E2` — it is builder-artifact review by the standing reviewer |
> | Trace suite | **constructed and evaluated on paper.** Four traces deep-run at R1; the remainder remain scenario dispositions and are labelled as such |
> | Shared control-plane surfaces | **0 touched.** §17 is a verbatim-ready landing packet, integrator-owned |
> | Independent adversary | **none.** `E2` is the required independent leg |
>
> **No other section states current state.** If you find state asserted elsewhere here, it is a defect — correct it here and delete it there.

---

## §0 — Object, method, source posture, correction receipt

### §0.1 What this object is
The **result** object for `INS-G2-OPERATING-COMPOSITION-AND-SUFFICIENCY`, discharging Gate-1b §13.3's fourteen required outputs against the brief §5 acceptance floor.

### §0.2 Method, stated so it cannot be overread
Permitted at Barrier 1 and performed: **architecture construction**, **comparator research**, **constructed-trace work**, kill-condition development, provisional assessment. Not performed: fixture execution against an implementation, `E2`, C3.9 consumption, promotion, contract or schema authorship.

**Trace semantics.** A trace is a *constructed* scenario walked against the accepted architecture with its verdict criterion fixed **before** the walk (`M-706`). `NO_DEFECT` means *no defect was exposed by this construction*, never *proven correct*. **R1 distinguishes deep-run traces (event-by-event, §7.2 schema) from scenario dispositions** — R0 did not, and presented both as though equally discharged.

### §0.3 Source posture — strict depth labels
**READ FULLY:** Gate-1b carrier (1,252 lines, at the pinned blob) · Gate-2 brief · the 2026-08-09 checkpoint · `AGENTS.md` · **C4.6 **§12** conformance test `C1`–`C16` in full (R1 — R0 relied on `C12` without opening it; Knox correctly caught this)** · `T0-15` in `00_doctrine_manifest.md` · the `comparator_analogy_registry.md` Palantir rows.

**READ LOAD-BEARING SECTIONS:** read graph Tier-0 + routes `9m`–`9q` · guardrail digest `D0CKPT-GRD-001`–`005` · `D0CKPT-DEC-009` · `D0CKPT-SUP-002` · AWP §5/§9 · pre-spine map §5/§6/§6.1/§7 · FWREG `010/017/018/020` · `08` `REV-159/160/185` + `D0INS-REV-002`.

**READ FULLY — implementation:** `20260504120000_intake_foundation_v1.sql` §8 `eligibility_decisions` DDL L250–270 · `lib/entities/insurance-details.ts`.

**SEARCHED (absence claims scoped to this radius):** `has_insurance|insurance_carrier|self_pay_willingness` across `supabase/` (**zero hits**) · the two insurance tables across `app/` (**zero hits**) · `is_active|eligibility_status` in the insurance TS entities (**zero hits**) · `hard projection|soft projection` across the Surface Map and `projections/` (**zero hits — the vocabulary lives in `00_doctrine_manifest.md` T0-15, not the Surface Map**).

**EXTERNAL — primary sources, pinned (§14):**

| Source | Exact identity | Currency | Grade |
|---|---|---|---|
| 14 CFR 121.533 · .557 · .601 · .627 · .663 | eCFR developer API, enhanced content, point-in-time `2025-01-01`, title 14 part 121 | current-as-of the pinned date | evidence-grade, quoted verbatim |
| **JP 1, *Doctrine for the Armed Forces of the United States*, Incorporating Change 1, 12 July 2017** | third-party mirror (`bits.de`), **not** `jcs.mil` | **SUPERSEDED** — replaced by **JP 1 Vol 1 *Joint Warfighting* (27 Aug 2023)** and **JP 1 Vol 2 *The Joint Force* (2020)**, the latter now carrying the C2-mechanisms material | **evidence-grade with a named currency caveat** (§14.2) |
| Palantir Foundry — Ontology overview · Object-Backend overview · **Peer Manager core concepts** · Palantir Developer Community thread on cross-ontology links | `palantir.com/docs` + `community.palantir.com` | current | evidence-grade |

**NOT INSPECTED — named:** the three Gate-0 subagent raws (route `9p-i`, conditional; no consuming question required a primary submission) · Gate-0 carrier and Gate-1a raws in full *this pass* (results consumed through the Gate-1b carrier; where they differ the raws control and this result claims nothing against them) · Accountability/GRR §§12–16 · **JP 1 Vol 1 (2023) and Vol 2 (2020) primary text — CAC-restricted on `jcs.mil`; not obtained** · the December-2025 DoD Dictionary terminology surface.

**Environment limitation (`D0OPER-DEC-004`).** `~/.cursor/plans/` does not exist here; the off-repo controlling plan could not be inspected. In-repo pointers agree and were relied on.

### §0.4 Activation freshness check (brief §6)
Re-verified against `main @ 9a6e7de`: Gate-1b §13.3 blob **byte-identical** · C3.9 `shell_pending_population` · C4.5 `full_pass_not_started` · C3.6C `populated_G1_pending_review` · `REV-160`/`REV-185` **carry landed** · `FWREG-020` carries `INS-HAZ` clauses 1–6 · `D0INS-REV-002` exists · three coverage surfaces unchanged, still zero `patients.*` insurance columns in `supabase/`, no coverage-semantic consumer in `app/` · PR #9 not landed. **No input changed maturity; none required re-statement before reliance.**

### §0.5 Correction receipt — R1-01…R1-13 (Knox) and O-1…O-8 (this pass)

| # | Defect | Status | Where |
|---|---|---|---|
| **R1-01** | Profile equated with the derived-assessment record, so criteria 8–10 were declared undemonstrable | **ACCEPTED, and re-based onto an accepted estate pattern rather than Knox's new category** | §1, §11 |
| **R1-02** | "No arrow returns" is wrong and self-contradictory (the result later relies on authorized outbound commands) | **ACCEPTED; replaced with a three-part law sharper than either version** | §1.2 |
| — | `P-SRC`/`P-XCH`/`P-ASM`/`P-WRK` collide with the canonical P0–P6 plane vocabulary | **ACCEPTED — renamed `MFP-1…MFP-4`, explicitly profile-local** | §1.1 |
| **R1-03** | A-Q12 overclosed to "D6 owns the assessment lifecycle"; `eligibility_decisions` is an **Intake** table and its semantics are not inheritable | **ACCEPTED — verified: the table is in `20260504120000_intake_foundation_v1.sql`, not D6** | §2 |
| **R1-04** | Three arithmetic defects | **ACCEPTED — all three verified against my own tables.** Residual tally is **1/9/10/3**, not 2/10/8/3; criterion 4 is split-verdict so the anti-shadow tally is **6/4/0**; discrimination count is **five** (4, 7, 9, 9v, INV), not four | §5, §11, §7.4 |
| **R1-05** | `DEFECT_ARCHITECTURE` used locally while the global verdict survived, with no stated relationship | **ACCEPTED — the label was wrong, not the verdict.** A fifth value `DEFECT_MISSING_MECHANISM` is added and 9v/INV are re-labelled | §7.1 |
| **R1-06** | Traces are scenario summaries; `C12` relied on but never opened; SEED-2 tested a different corruption than required; `M-607`/`M-202` cited rather than run | **ACCEPTED IN FULL.** `C12` opened. Event schema added. Four traces deep-run. Both seeds now present. Real exit trace and composite steelman run. Traces 5 and 8 downgraded | §7, §14.4 |
| **R1-07** | Palantir claim stale; JP 1 unpinned; aviation "regime change" overbroad; comparator families incomplete | **SPLIT — see §0.6.** JP 1 and aviation accepted; **the Palantir correction is itself corrected against primary sources** | §14 |
| **R1-08** | A-Q15's "reference by identifier, never copied state" is stricter than locked doctrine | **ACCEPTED — verified.** `T0-15` distinguishes *"Hard projections (durable, composed) vs soft projections (computed, ephemeral)… neither becomes a second source of truth."* My rule contradicted promoted Tier-0 doctrine | §12.3 |
| **R1-09** | `funding_condition` ownership stated loosely as "Sourcing + D6 + Settings" | **ACCEPTED** | §13(a) |
| **R1-10** | "NEVER BUILD payer adjudication" is wrong and contradicts this result's own trace 7 | **ACCEPTED — a genuine self-contradiction I own.** Replaced with *never impersonate another principal's determination*, and the single column replaced with a four-dimension matrix | §9 |
| **R1-11** | No product/experience layer, though Axis 2 is a product claim | **ACCEPTED, and raised from a persona list to a conformance surface** | §15 |
| **R1-12** | Kill condition 6 left passive | **ACCEPTED, and pressured — see O-4** | §10.7 |
| **R1-13** | Authority to command ≠ execution admissibility | **ACCEPTED, and generalized — see O-2/O-3** | §12.1 |
| **O-1** | **C4.6 `C6` — "Neutrality / incentive firewall · margin-only counterfactual test" — already ships the Law 2 proof shape.** R0 said the mechanism was absent; Knox independently *proposed* the same counterfactual as new | **RETAINED, MATURITY CORRECTED AT R2** — a proof *specification*, not built enforcement and not an owner. Row 23 reverted to `NAMED-GAP`; criterion 9 stays `CONDITIONAL` | §6.3, §5, §11 |
| **O-2** | Authority decomposes into three: fact · action · **execution admissibility** | **WITHDRAWN AS NEW AT R2.** Care **§5b** already carries it as *four* projections with an anti-collapse `[INV]`. Care's version is better; R1's collapsed two of its projections | §12.1, §0.7 |
| **O-3** | **Conjunctive admission** as the general form of the aviation import | **DEMOTED AT R2 to one enum value.** Care **§5b.1 `approval_requirement`** already enumerates `single_authority · cosign_required · **dual_control** · independent_verification · supervisory_review · committee/ethics_review`. Aviation corroborates one value; it is not a constitution | §12.2, §0.7 |
| **R2-01** | Palantir: R1's replacement claim is contested by Knox against a different documentation surface | **BOTH READINGS RECORDED; question left `OPEN`; R1's registry append WITHDRAWN and no replacement proposed.** The moat claim is re-anchored to Care §19's ratified `[INV]`, which is invariant to the answer | §14.1 |
| **R2-02** | `C6` overclaimed as built enforcement; conformance table cited as C4.6 §7 | **ACCEPTED — it is §12, corrected in four places; maturity corrected; row 23 and criterion 9 reverted** | §0.3, §6.3, §5, §11 |
| **R2-03** | Universal conjunctive admission; **payer funding and D6 settlement listed as universal execution predicates** | **ACCEPTED — the predicate defect contradicted F1, D6 §8.1 and Care's own `appropriate-but-not-covered`. Withdrawn** | §12.2 |
| **R2-04** | Responsibility continuity and the liability non-decision are absent | **ACCEPTED IN PRINCIPLE, DEBT RECORDED NOT DISCHARGED** — `EVRUN-000007 §02` / `EVRUN-000008` were not consumed, and skimming them would repeat §0.7's failure | §0.7, §20.3 |
| **R2-05** | No estate-inheritance receipt | **ACCEPTED AND EXCEEDED** — §0.7 adds the receipt *and* names the control-plane defect that caused the misses | §0.7 |
| **R2-06** | Adopt the two-stage anti-shadow reading | **ACCEPTED** | §11.1 |
| **R2-07** | "The profile owns conformance" over other domains | **ACCEPTED** — it carries composition-specific acceptance and proof obligations; existing owners enforce their own rules | §1.1, §11.1 |
| **R2-08** | "Not Insurance-owned" used as though it discharged Gate 2 | **ACCEPTED — a real conflation of truth ownership with gate responsibility** | §16.2 |
| **O-9** | **Insurance is a COUSIN of Pharmacy** — C4.6 §0.5 answered the identical question form, and Gate-1b's Axis 2 reached the same shape independently | **NEW — and it shrinks Gate 2's job rather than expanding it** | §20.1 |
| **O-10** | **The Homology Matrix (Care §19) + `U/C/A` law-scope crosswalk is the existing mechanism for cross-loop physics — and it has three columns while the estate has built at least five loops** | **NEW — the structural cause of the whole re-derivation pattern** | §20.3 |
| **O-4** | **Unilateral coherence *raises* anti-shadow risk** — the inverse of Knox's framing, and the condition that makes R1-12 safe rather than dangerous | **NEW** | §10.7 |
| **O-5** | Palantir **federates data, not the ontology**; peering presupposes platform symmetry and mutual configuration | **NEW — corrects both R0 and Knox** | §14.1 |
| **O-6** | `eligibility_decisions` is **pathway** eligibility. The name will be found by any future insurance work grepping "eligibility" and mis-wired | **NEW hazard** | §2.3 |
| **O-7** | Any dependency/correlation graph the profile holds must dedup against Accountability's `matter_graph` **before** it is proposed | **NEW — Knox proposed the graph without the dedup this estate requires** | §12.3 |
| **O-8** | Knox's A-Q12 answer blurs **contract** and **instance**: a projection *contract* may own invalidation semantics; the assessment *instance* needs a runtime owner deferred to C5 | **NEW — corrects Knox** | §2.2 |

### §0.6 Where R1 does not follow Knox

**(a) The Palantir "one enrollment is stale" correction is half right, and the half that is wrong matters more.** Knox states Palantir "now supports ontology peering across enrollments, including mapped objects/links, directional source-data synchronization, and bidirectional action-data peering," and concludes *"one enrollment is no longer a safe differentiator."* Verified against primary sources: **Peer Manager does peer object data across enrollments** — "you can peer Foundry objects, object sets configured in Object Explorer, and Gotham files," with the connection controlling "the types of data that may peer, the direction the data will peer, and the set of classification and other markings." **But Palantir's own developer community answers the link-type question directly: "At the moment, no there is no way to do this. But we are tracking this as a feature request,"** and the documented workaround is to **duplicate the object into each ontology** and fake the link by foreign-key filtering. **So data peers; the ontology does not.** R0's wording was stale and is withdrawn; Knox's replacement over-reads. The corrected finding is at §14.1 and is stronger than both.

**(b) Knox's "cross-plane conformance contract" is the right direction and the wrong provenance.** It is presented as a new architectural category. **The estate already has the pattern, landed and accepted:** C4.6 §12's `C1`–`C16` is precisely a conformance layer that owns no truth, commits nothing, and which every downstream build decision must pass with explicit yes-and-why. R1 therefore does **not** mint a conformance category — it **maps the profile's conformance obligations onto the existing gate pattern**, reuses eight of C4.6's sixteen gates directly, and adds a small financing-specific set. That is dedup-before-minting applied to Knox's own proposal, and it is the difference between a new governance object and an inherited discipline.

### §0.7 — Estate-inheritance receipt, and the control-plane defect that made it necessary (R2)

**The operator's charge, and it is upheld.** Nick's position is that the execution/authority material R1 presented as new was raised in prior passes, that a Palantir arc already ran, and that this arc keeps re-deriving basics from external analogies. **Verified. He is right on every count, and the mechanism is now identified.**

**Maturity discipline, applied to this section's own claims (Knox R3-01, accepted).** The Care capture is **`analysis_nonbinding` · REVIEW-DRAFT · explicitly not closed**, its `[INV]` markers are **candidate** invariants, and its §5b is self-labelled **`COMPOSES_EXISTING`** — a synthesis of scattered prior pieces, not a ratified constitutional object. **So the correct statement is not "Care already settled this."** It is: **Care §5b is the strongest current *candidate* decomposition, assembled from existing authoritative pieces, and it is still review-draft.** The same applies to §19's homology matrix and to its moat `[INV]`. Replacing ad-hoc reinvention with status laundering would be a worse failure than the one being corrected — *the point is that R1 did not know these existed, not that they are ratified.*

| What R0/R1 derived or re-derived | Where it already existed | Grade of the miss |
|---|---|---|
| "execution admissibility" as a **new** third authority layer (O-2) | **Care §5b** — *"the '10 things must align' physics; per-action-type, NOT one god-gate"*, four projections, each mapped to an owner, with an anti-collapse `[INV]` | **severe** — Care's version is better and R1 called it new |
| "conjunctive admission" as a **general law** (O-3) | **Care §5b.1 `approval_requirement`** — `dual_control` is one of six enumerated topologies | **severe** — a general law was minted from one enum value |
| Knox's ad-hoc "typed execution-admission policy" list (waiver, break-glass, default-on-silence, sequencing, non-waivable prohibition) | **Care §5b.1** — `authority_basis` incl. `emergency_authority`/`court_statutory_authority`, `authorization_evidence_form`, versioned `checkpoint_graph` with blocking semantics, fallback, reauthorization trigger, timeout/escalation | **severe** — and Care's header says the earlier single enums *"were malformed"*, i.e. this was already litigated once |
| "payer funding is an execution predicate" (R1 defect) | **Care §5b** `appropriate-but-not-covered` — *commercial, not clinical*; *"Coverage absence ≠ clinical inadmissibility"* | R1 contradicted a rule **Gate-1b itself cited** at its §2 estate matrix |
| the Palantir moat conclusion, drafted three times across R0/R1/Knox | **Care §19 `[INV]` moat framing** — *"a generic ontology can configure toward but not supply"* | **severe** — the ratified sentence is better than all three drafts |
| the five-typing-axes model (Gate-1b §10.B.8) | **Care §18** `seam_kind × interaction_kind`, with the GCE-dedup caveat already attached | moderate |
| "is Insurance a cousin?" | **C4.6 §0.5** answers the identical question form for pharmacy: *"cousin: shared substrate, specialized profile — neither a silo nor a twin"* | **severe** — §20 |

**The mechanism, stated so it is fixable rather than moralised.** This is not individual carelessness and it is not proof the work never happened. **The Gate-2 read floor is route `9p`, which routes the Insurance chain and nothing else.** Gate-1b's §2 estate matrix cites Care capture lines L170/L171/L191/L192 for exactly these facts — so Gate 1b *had* them — and route `9p` carries none of it forward. **A gate that inherits only its own arc will re-derive every cross-cutting law it needs, every time, and will believe each re-derivation is a discovery.** That is `GRD-043`'s unrouted-finding failure operating on *inheritance* rather than on *output*, and it is the same disease the Comparator Registry was created to cure for comparators only.

**Consumed at R2 (read this pass, not previously in the packet):** Care capture **§5b · §5b.1 · §18 · §19** (incl. the moat `[INV]` and the §1b U/C/A law-scope crosswalk) · **C4.6 §0.5** anti-silo constitution · **C4.6 §12** conformance table in full.

**Named and NOT consumed, with reason:** C3.8 G1b/G2/G3/**G4** Palantir/ontology arc and `EVRUN-2026-000007 §02` / `EVRUN-2026-000008` (multi-principal responsibility, authority/custody/liability) — **Knox names these and they are almost certainly load-bearing for §12 and for the liability question.** They are **not** consumed here because doing so properly is a second inheritance pass, not a paragraph, and R2 is bounded. **Recorded as an explicit debt at §20.3 rather than skimmed** — skimming them would reproduce the exact failure this section documents.

---

## §1 — OUTPUT 1 · The care-financing operating-profile map

### §1.1 What the profile is — corrected at R1
**The Mixed Financing Operating Profile is a governed cross-plane composition *and conformance* contract. The versioned derived assessment is one artifact produced under it, not the whole of it.**

R0 equated the profile with its assessment record, which forced the §11 conclusion that three anti-shadow criteria were undemonstrable. That conclusion was an artifact of the boundary, not of the architecture.

**It owns conformance. It owns no source truth, and it holds no commit authority.** Conformance operates at two altitudes and they must not be merged: **build-time** (gates a build must pass, modelled on C4.6 `C1`–`C16`) and **run-time** (invariants plus an audit surface — the Law 2 read-set boundary is the only genuinely run-time member, §6.3).

**Four strata, named profile-locally.** `MFP-` is deliberately not `P-`: the canonical **P0–P6** plane taxonomy is owned by the Surface Map header and these are not architecture planes.

| Stratum | Contents | Owner | Write posture |
|---|---|---|---|
| **`MFP-1` source** | payer coverage/benefit/formulary positions · determinations · authorizations · guarantees · sponsorships · loan approvals · pharmacy availability and offers · patient consent/preference/affordability · D6 orders, entitlements, money-state, `financing_arrangement` · Care/CM clinical assertions | **native owners and external principals**, unchanged | each owner writes its own |
| **`MFP-2` exchange** | crossing, identity, represented principal + capacity, delegated authority, consent/grant, returned-state classification (`evidence` · `observation` · `proposed-meaning` · `externally_committed_truth`) | **GCE** (ratified, `tier0_mandatory`, bidirectional, insurance an enumerated subfamily) | classifies; commits nothing by arrival |
| **`MFP-3` assessment** | the versioned mixed-financing assessment: rule identity + version, pinned inputs, dependency map, validity posture, dependency-scoped invalidation, recomputation, audience policy, issuance, lineage, proof | a **hard projection** under T0-15 — durable and composed, **never a second source of truth**; instance owner deferred to C5 (§2) | writes only its own derived record; supersedes, never mutates |
| **`MFP-4` operating** | attention, deadline, queue, work ownership, operative posture while unresolved, escalation, next-action-and-clock, redress coordination | **CNS** orchestration; obligations from a stance via **OFC**; conditional **Accountability** above the §5.5 duty threshold | writes work state; **work state is never care state** |

### §1.2 The direction law — three parts, replacing R0's single wrong sentence
R0 said *"no arrow returns."* That is false and this result contradicted it two sections later by relying on authorized outbound commands. Appeals, prior-authorization submissions, evidence responses, clinical recommits, financing applications and redress all require action to travel outward and consequence to return. Knox's replacement — *no direct reverse mutation* — is correct but under-determined: it does not say what stops "the profile originates work" from becoming "the profile acts."

**The law is three-part, and all three are load-bearing:**

1. **No reverse mutation.** Nothing at `MFP-3` or `MFP-4` writes into `MFP-1`. Ever.
2. **The profile may compose a command; it may never authorize one.** A proposal leaving `MFP-4` carries **no authority of its own**. Authority is supplied by a principal through RBAC/delegated capability at `MFP-2`, and the **commit is always the owning domain's**. This is the clause that prevents composition from manufacturing authority, and it is C4.6's `C5` (authority-bound action) and `C7` (command ≠ evidence ≠ commit) applied to financing.
3. **Evidence returns; it does not adopt.** A returning result re-enters at `MFP-2` **with its classification intact** and invalidates or recomputes `MFP-3`. Returning does not make it true, and it never reaches `adoption_authority` for a care fact.

**Knox's contribution and the correction to it, stated plainly:** Knox restored the return path, which R0 wrongly closed. Clause 2 is the addition — without it, "the profile may originate work and candidate actions" is one careless build away from the shadow authority Axis 1 exists to prevent.

### §1.3 What the map still does not contain
No case object, episode object, negotiation object, coverage object, position store, fourth authoritative graph, or universal Insurance state machine. **The episode remains a projection over distributed artifacts and commits** (C4.6 §4, inherited).

---

## §2 — OUTPUT 2 · Derived assessment ownership (A-Q12)

### §2.1 The pattern anchor, correctly scoped
`public.eligibility_decisions` (`20260504120000_intake_foundation_v1.sql` L250–270) ships a versioned-derived-record shape: `rule_id` + `rule_version` · `input_refs` · `inputs_hash` · `input_snapshot` · `decided_at` · typed `decided_by` · `decided_by_user_id` · `supersedes_decision_id` · `interaction_context`.

**R0 cited this as evidence for D6 ownership. It is not, and Knox is right.** The table is in the **Intake foundation** migration. It proves a **reusable record pattern**; it establishes no owner.

| Safe to inherit | Must NOT be inherited |
|---|---|
| rule/version pin · source/input pin · content hash · computation identity · assessment timestamp · supersession chain · interaction context | `result in ('eligible','review_required','blocked')` — **`blocked` is not a mixed-financing status** · `provider_override` as a universal assessment authority · pathway-eligibility semantics · **Intake or D6 ownership inferred from the existence of a similar table** |

### §2.2 The ownership decomposition — and the contract/instance split Knox blurred
**A-Q12 closes at the lifecycle-decomposition level only. Runtime placement is C5.**

| Responsibility | Owner |
|---|---|
| source positions | native domains and external principals |
| composition rule definitions + versions | **Settings/Catalog** |
| commercial allocation, patient responsibility, financing arithmetic | **D6** |
| admissible set and selection output | **Sourcing** (distinct lifecycle, C4.6 §9) |
| care-set effect, recommit rationale, reliance | **Care / REV-184 / CNS** |
| work, queues, clocks, escalation | **CNS** |
| issued artifact custody and delivery | **D7 + Messaging** |
| the communicative commitment itself | **still open — H-N3/G7** |
| **assessment conformance requirements** — identity, dependency map, validity posture, dependency-scoped invalidation, replay semantics | **the profile *contract*** |
| **the assessment *instance*** — who computes it, where it lives, who operates it | **deferred to C5** |

**O-8, correcting Knox.** Knox assigns "snapshot identity, dependency map, validity posture, replay/invalidation semantics" to the profile while also saying the profile "owns conformance, not truth." Both can be true only if **contract and instance are separated**: the contract owns the *requirements*, the instance owns the *record*. Collapsing them re-creates the coordinator by a quieter route. A-Q12 therefore closes as *resolved-at-decomposition*, and **not** as "the profile owns the assessment."

**Invalidation is dependency-scoped, not a global boolean** (Knox, accepted and adopted): a payer policy expiry invalidates the coverage-dependent claims without pretending a recorded loan repayment, a patient preference or a prior clinical recommendation disappeared.

### §2.3 O-6 — a naming hazard worth recording before it costs someone a week
`eligibility_decisions` is **pathway** eligibility — is a patient eligible for a care pathway. It is **not** payer eligibility. The two are unrelated, and the table is the first hit for any future insurance work that searches the estate for "eligibility." Combined with `payer_eligibility_documents.eligibility_status` — *"one enum doing four jobs"* — the word `eligibility` now means at least three different things across the committed estate. **Recorded as a hazard, routed to `FWREG-020`'s neighbourhood; no rename proposed and none authorized here.**

---

## §3 — OUTPUT 3 · Layered coverage scoping — the four scopes and how they compose

| # | Scope | Source-authoritative at | OMNI holds | Composition rule |
|---|---|---|---|---|
| **1** | **Coverage relationship identity** | **external payer or program** | an attributed projection under GCE | supplies the *subject*; every other layer references it and **none may redefine it** |
| **2** | **Artifact + projection custody** | **operator/tenant**, purpose- and visibility-controlled (D7 + Federation grants) | canonical for the **artifact**, never the **coverage fact** | may *evidence* layer 1; **may never constitute it** — the exact fusion defect in `payer_eligibility_documents` |
| **3** | **Operator/provider/episode applicability** | **operator-scoped**: D6 + Federation + Settings | canonical for the operator's own position | **layer-3 truth is not portable** — deployment-relative by construction, never published as a property of the person |
| **4** | **Person-portable longitudinal view** | **nobody — noncanonical by definition** | a permissioned, source-preserving **hard projection** (T0-15) | composes 1+2+3 read-only, per-audience, with `as_of`; **acquires no write path and no gate role** |

**The composition law:** *identity is referenced, custody is evidenced, applicability is operator-relative, portability is projected — and no layer may be promoted into the layer above it.*

**Two detectable failure modes.** **Upward promotion** — a layer-2 artifact treated as layer-1 identity; already committed in `payer_eligibility_documents`, contained by `FWREG-020` clause 2, not fixed. **Sideways leakage** — a layer-3 operator applicability fact rendered in a layer-4 portable view as a property of the person's coverage; **no existing control blocks this**, and §15's patient-experience invariant is the first place it becomes visible.

---

## §4 — OUTPUT 4 · Commitment taxonomy (A-Q1a / A-Q1b), plus constitution mode

**A-Q1a — accepted custody.** Named **ABSENT** by C4.3 §4; candidates Federation + RBAC. Existing machinery: the ten-state external-custody ladder and **`O10 ACK ≠ accepted-custody`** (mutation-tested `M04`, caught).

**A-Q1b — substantive commitment**, seven kinds distinguished by obligor, expiry, revocation, breach and correction law:

| Kind | Obligor | Expiry | Revocation | Breach | Correction law |
|---|---|---|---|---|---|
| authorization | payer | dated/service-scoped | prospective; retroactive-invalidity is C4.3 **S20-B** | funding denied; **care unaffected** (Law 1) | effective-time reassignment |
| guarantee of payment | payer/sponsor/operator | until performance or lapse | conditional | financial | additive adjustment |
| sponsorship | sponsor | program period | program terms | financial + **sponsor ≠ payer boundary (unowned, G6)** | program-native |
| loan approval | lender | offer window | credit-policy | **obligor substitution**; refund destination becomes legal (`B-Q1`) | `financing_arrangement`-native |
| network participation / rate terms | payer ↔ operator, **bilateral** | term | notice | contractual | **no carrier — contested state unrepresentable** |
| contractual obligation (other) | any | instrument-specific | instrument-specific | contractual | instrument-specific |
| coverage determination | payer | as-of dated | payer supersession only | none — a *determination*, not an undertaking | **OMNI never edits it** |

**Constitution mode — a second axis, adopted from Knox and credited.** *How was the obligation constituted?* — `unilateral_determination` · `unilateral_undertaking` · `bilateral_agreement` · `statutory_entitlement_or_duty` · `delegated_authorization` · `externally_imposed_directive` · `accepted_transfer_or_custody`. This is a real refinement: it explains why the military support relationship is **not** evidence of a bilateral carrier (it is constituted by an establishing authority, §14.2), and why row 5 remains the genuine gap. **Generic counterparty physics above Insurance; routed, not owned here.**

**Where OMNI's own operator is the committing party** — a guarantee, an accepted estimate, an in-house financing approval — it is **not external** and must not be modelled through external-assertion machinery. That is **H-N3/G7**, unowned, and §10.A.5 makes it urgent the moment the operator is also the creditor.

---

## §5 — OUTPUT 5 · Residual owner map — 23 rows

Vocabulary: **`OWNED`** · **`OWNED-DELTA`** · **`NAMED-GAP`** · **`EXTERNAL`**.

| # | Residual (Gate-1b §8.2) | Disposition | Owner / named gap |
|---|---|---|---|
| 1 | Coverage relationship identity | **EXTERNAL** | payer/program; OMNI projection (§3 layer 1) |
| 2 | Artifact + projection custody | **OWNED-DELTA** | D7 + Federation grants; delta = precedence between the three committed surfaces |
| 3 | Operator/episode applicability | **NAMED-GAP** | D6 + Federation + Settings participate; no owner |
| 4 | Person-portable longitudinal view | **OWNED-DELTA** | profile hard projection; delta = must never become truth or a gate |
| 5 | Payer benefit/policy ruleset + version | **EXTERNAL** | payer truth; OMNI versioned projection |
| 6 | Network participation / contracted terms | **NAMED-GAP** | A-Q1b row 5; contested state has no carrier |
| 7 | Prior auth / guarantee / sponsorship / loan approval | **EXTERNAL** | the committing principal via GCE |
| 8 | Accepted custody / responsibility | **NAMED-GAP** | A-Q1a; carrier absent |
| 9 | Coding / clinical-to-financial representation | **NAMED-GAP** | representation owner unresolved (G8) |
| 10 | Claim submission / adjudication | **NAMED-GAP** | D6/future RCM; `REV-204` unwired |
| 11 | Patient responsibility / multi-party allocation | **OWNED-DELTA** | **D6**; delta = ledger presumes buyer = patient |
| 12 | Mixed-source composition | **OWNED-DELTA** | sources + Settings + D6 + Care/CNS + D7/Messaging; delta = the eleven mechanics at §3-F5-E |
| 13 | Consumer financing arrangement | **OWNED-DELTA** | **D6**, `DEC-027` shape, principal-agnostic; `REV-160` carries it |
| 14 | Remittance / settlement / recoupment / finality | **OWNED-DELTA** | **D6**; finality orthogonal (H-N1) |
| 15 | Estimate / guarantee / disclosure — the **communicative act** | **NAMED-GAP** | the act is unowned (H-N3/G7) |
| 16 | Appeal / grievance / redress | **OWNED-DELTA** | native lifecycle + conditional Accountability |
| 17 | Provider enrollment / credentialing / payer participation | **OWNED-DELTA** | Federation owns credentialing; payer contracting absent |
| 18 | Guarantor | **NAMED-GAP** | none (G4) |
| 19 | Sponsor ≠ payer boundary | **NAMED-GAP** | none (G6) |
| 20 | F3 resource incidence — 7 actor slices | **NAMED-GAP** | operator → OPECON; patient/credit → D6; five native/external. Representation form unproven (A-Q13) |
| 21 | Sourcing selection | **OWNED** | **Sourcing**, distinct lifecycle (C4.6 §9). The profile **must not absorb it** |
| 22 | Payer-constrained therapeutic alternatives + recommit | **OWNED-DELTA** | Care/CM + payer + pharmacy; delta = A-Q14a/b/c |
| 23 | Economic-influence separation | **NAMED-GAP** *(R1 upgraded this to OWNED-DELTA on the `C6` finding; **reverted at R2** — a proof specification is not an owner)* | no enforcement owner; `REV-185` is a review row. **C4.6 `C6` is the strongest existing proof pattern** and is recorded as such (§6.3) |

**Tally — R0's, Knox's recount, and R1's, kept distinct because they are three different things:**

| | OWNED | OWNED-DELTA | NAMED-GAP | EXTERNAL |
|---|---|---|---|---|
| **R0 stated** | 2 | 10 | 8 | 3 |
| **Knox's recount of R0's rows — verified correct** | **1** | **9** | **10** | **3** |
| R1 stated *(row 23 upgraded on the `C6` finding)* | 1 | 10 | 9 | 3 |
| **R2 actual — row 23 REVERTED to NAMED-GAP** | **1** | **9** | **10** | **3** |

*R0's arithmetic was simply wrong. Knox's recount of R0's rows is correct and verified. R1 then moved row 23 to OWNED-DELTA on the `C6` finding; **R2 reverts it**, because a conformance-proof specification is not an owner (§6.3). The R2 tally therefore lands back on Knox's numbers — by a different route, and only after the `C6` maturity was corrected. **Two propagation defects were caught here by recounting rather than re-reading: R1's first draft failed to propagate the row-23 move, and R1's final failed to demote it when the `C6` maturity claim was itself overstated.***

**The finding, restated on the correct denominator and narrowed.** Not one row resolves to a new Insurance-owned truth object — Axis 1 surviving a row-by-row drive. **Of the ten `NAMED-GAP` rows, five are generic physics the estate itself places above this arc:** row 6 (bilateral contested agreement — Gate-1b §6 *"generic counterparty physics above Insurance"*), row 8 (accepted custody — carrier named absent by C4.3 §4), row 15 (the communicative act — *"generalizes past insurance"*), row 20 (F3 — *"GENERAL RESOURCE-INCIDENCE PHYSICS"*), row 23 (economic influence — three dependent arcs, row-P elevation). **The other five are financing-specific or financing-proximate** (3, 9, 10, 18, 19). *R0 claimed "six of eight," which was wrong on both numerator and denominator and flattered the result. **And "not Insurance-owned" does not discharge Gate 2 — see §16.2.***

---

## §6 — OUTPUT 6 · The §9 elevation

### §6.1 Naming reconciliation — mapping, not minting
Law 1 → **`payment_care_firewall`** (C3.5-F2 primitive P17; EXISTS at D6 §8.1). **This is the settled name; keep it.**
Law 2 → **`REV-185`** is the canonical carrier. WI2, WI8, AR-C37, `REV-193`, Care L170/L450 are registered as **facets of** it and stop being independent names.
Law 3 → **no carrier.**

**Rule proposed:** *one canonical carrier per law; every other label becomes a registered facet.*

### §6.2 Gate 2 declines to name Law 3, and the refusal is the finding
§9.3 forbids adding an eighth label to a seven-label scatter. Naming Law 3 here would be exactly that — an Insurance gate naming a general care-economics law, in an `analysis_nonbinding` artifact, without dedup. **Not named.** The naming belongs to row P's elevation at spine §3b + §C, where all three can be named against each other.

### §6.3 O-1 — the enforcement mechanism is not absent. It already exists, and both R0 and Knox missed it.
R0 said Law 2's structural enforcement was **OWED** and specified three requirements. Knox independently proposed a counterfactual test: *"mutate operator margin, lender origination revenue, manufacturer economics, or payer cost while holding clinical evidence fixed; the clinically ranked option set must remain invariant."*

**C4.6 §12 already ships it, verbatim, as an accepted conformance gate specification:**

> **`C6` | Neutrality / incentive firewall | margin-only counterfactual test | FAILS if changing operator margin changes clinical authorization, or hides incentive lineage in selection.**

This is not an analogy. It is a **runnable proof shape at accepted L2 build doctrine**, with a named fixture and a named failure condition, produced by the pharmacy arc for exactly this law. Two independent parties reasoned to the same mechanism without noticing the estate had landed it — **the estate's signature failure mode, reproduced by both reviewers of a gate whose own §16 names that failure mode.**

**What it is, and what it is NOT — corrected at R2 (Knox R2-02, accepted).** `C6` is an **accepted `analysis_nonbinding` conformance-gate *specification* with a named fixture and a named failure condition.** It is **not** built runtime enforcement, not an audit harness, not an input-visibility boundary, and **it does not establish an owner** — `REV-185` is a review row, not an architectural owner. R1's framing ("already built", "the mechanism is not absent") **overstated it and is withdrawn.** The accurate statement is narrower and still valuable: **the proof *family* exists and Insurance must extend it rather than invent one.** Accordingly residual row 23 **stays `NAMED-GAP`** and anti-shadow criterion 9 **stays `CONDITIONAL`**.

**The extension, precisely scoped:**

| `C6` today | Extension Insurance requires |
|---|---|
| tests **operator margin** | must test **any interested principal's economics** — payer · PBM · sponsor · manufacturer · lender · referral source · operator · **OMNI itself** (Law 2's R3 breadth correction) |
| asserts **incentive lineage** must not be hidden in selection | Sourcing already produces incentive lineage (C4.6 §9); the profile must **carry it through composition** into any ordered or recommended output |
| scoped to **clinical authorization** | must also cover **presentation** — an option set may be correctly authorized and still be *displayed* in an order that encodes an interested principal's preference |

**And the boundary Law 2 actually needs, stated precisely because "economically blind" is the dangerous over-read:** the prohibited read-set is *whose* economics, not *whether* economics. **Patient-side affordability, coverage, deductible exposure and access barriers must remain readable** — Law 3 requires it. What must be unreadable to clinical appropriateness is OMNI revenue, operator margin, sponsor accrual, manufacturer incentive, lender origination revenue, commission, retention and downstream capture. **`C6` extended is the test; `ai_decision_log`/`trace_lineage` is the audit surface; `REV-185` is the owner.**

---

## §7 — OUTPUT 7 · The discriminating trace suite

### §7.1 Verdicts fixed BEFORE running (`M-706`), with R1's added value
**`NO_DEFECT`** · **`DEFECT_ARCHITECTURE`** (an accepted claim is falsified) · **`DEFECT_MISSING_MECHANISM`** *(new at R1)* — the architecture is not falsified, but a named required mechanism does not exist, so the property cannot be enforced or even detected · **`DEFECT_IMPLEMENTATION_HAZARD`** · **`UNRESOLVED_OPEN_QUESTION`**.

**Why the fifth value, and why it is not softening (R1-05).** R0 labelled 9v and INV `DEFECT_ARCHITECTURE` — "an accepted architecture claim fails" — while returning a surviving global verdict, with no stated relationship. Tested honestly: 9v's anti-shadow failure is not *occurring* (nothing is built) but is *undetectable*; INV **confirms** the accepted claim that neutrality is a deployment-specific control objective rather than falsifying it, and shows the control absent. **Neither is a falsification. Both are missing mechanisms, and a missing mechanism for an anti-shadow criterion is a severe defect, not a soft one.** The label was wrong; the verdict was not.

**Discrimination criterion, fixed in advance:** informative only if (i) the negative control returns `NO_DEFECT` at the architecture plane, (ii) all seeded violations are caught, (iii) at least one trace returns something else.

### §7.2 Event-by-event trace schema (R1-06)
Every deep-run trace records, per event: **initial source positions · principal + represented capacity · speech-act kind · C4.6 plane · authority basis · execution admissibility predicates · source time and effective time · assessment revision · operative posture while unresolved · work owner + deadline · surface explanation per persona · owning-domain or external commit · correction/reversal · invalidation/replay · expected verdict · observed defect.**

### §7.3 The suite

| # | Trace | Depth | Verdict | Result |
|---|---|---|---|---|
| **1** | **Pure self-pay / no financing** — `M-508` NEGATIVE CONTROL, declared before running | deep-run | **`NO_DEFECT`** (architecture) · **`DEFECT_IMPLEMENTATION_HAZARD`** (implementation) | Architecture clean: Care's `not-applicable` per-plane value is F1's requirement; D6 owns the order; **no `MFP-3` record is created at all**. The trace touches `patients.self_pay_willingness`, a `FWREG-020` clause-6 surface. **The control did its job — it separated a clean architecture from a dirty implementation** |
| **2** | HDHP denial → appeal → recoupment | scenario | **`NO_DEFECT`** | Denial is a payer determination at `MFP-1`; the clinical order's existence is untouched (D6 §8.1, SUP-462). Recoupment is **S20-B**, a general class. Appeal admission is threshold-based, not noun-based |
| **3** | Medicare + supplemental | scenario | **`NO_DEFECT`** | Composition recomputed at `MFP-3`, never stored as a total. Statutory constraint enters as an external authority OMNI never edits |
| **4** | Self-funded employer + TPA + stop-loss | **deep-run at R1** | **`UNRESOLVED_OPEN_QUESTION`** | Capacity separation works (four principals, four capacities, no one payer). **Blocks at event 6:** the stop-loss attachment is an obligation *between sponsor and reinsurer* that changes nothing about the patient's position, yet the composed assessment must not leak it — and **residual 19, sponsor ≠ payer boundary, has no owner**, so nothing prevents identified clinical data reaching the sponsor. Cannot be walked to a conclusion |
| **5** | Mixed cash + coverage + consumer credit | **deep-run at R1** | **`UNRESOLVED_OPEN_QUESTION`** *(R0 said `NO_DEFECT` — overclosed; Knox correct)* | F2 anti-substitution holds and four correction laws coexist. **But three boundaries are uncontracted and the trace hits all three:** refund destination on a lender-funded reversal (`B-Q1`, `EXTERNAL_EVIDENCE_REQUIRED`); obligor substitution at the moment of loan funding; and the **issuance of the financing commitment itself**, which is H-N3/G7 and unowned. R0 counted the absence of a *contradiction* as absence of a *defect* |
| **6** | Professional / facility / lab / pharmacy split | scenario | **`NO_DEFECT`** | The episode is a projection. Four counterparties, four claims, four independent corrections; the patient-facing single view is a layer-4 hard projection, canonical nowhere |
| **7** | Provider or federation under capitation / credit risk | scenario | **`UNRESOLVED_OPEN_QUESTION`** | Architecture survives payer inversion; nothing presumes payer→provider direction. **No person-level amount need exist**, and reserve/risk position has no owner — F3's payer/risk slice lands on the operator. **Capacity separation becomes mandatory and criterion 9 is at maximum stress** |
| **8** | **`NICK-FIXTURE-VENDOR-FINANCING-01`** | scenario | **`DEFECT_MISSING_MECHANISM`** *(R0 said `NO_DEFECT` + one enumeration gap — underrepresented; Knox correct)* | No eighth law; F2 strengthened, F6 exercised hard. **But it crosses six open things, not one:** the C4.6 §11 loyalty-guard capacity enumeration omits **financing origination**; operator-as-creditor capacity separation is *declared, not contracted*; Law 2 enforcement is the extension at §6.3; **issuance (H-N3)**; refund routing (`B-Q1`); and sponsor/manufacturer data-use boundaries |
| **9** | **`NICK-FIXTURE-PAYER-CONSTRAINED-THERAPY-01`** — REQUIRED; decisive joint test of all three §9 laws | **deep-run at R1** | **`UNRESOLVED_OPEN_QUESTION`** — the load-bearing result | Laws 1 and 3 walk cleanly. **Law 2 blocks at the recording step,** because outcome 5 needs (i) REV-184's **rationale-class field**, a named gap with the field-set deferred to C5, and (ii) A-Q14b's **relation-shaped equivalence representation**, which does not exist. **The fixture cannot currently be recorded honestly** — the same finding from two independent directions. **Attaches to `C12`, now opened and read** (§7.5) |
| **9v** | **Administrative-friction variant** — required | **deep-run at R1** | **`DEFECT_MISSING_MECHANISM`** *(re-labelled from `DEFECT_ARCHITECTURE`)* | The six dimensions must never collapse. **Burden incidence has no home in any contract.** Because the named anti-shadow failure is *"preserves formal authority while allowing unbounded administrative burden to become hidden de facto control,"* **and burden is unmeasurable, that failure is undetectable by construction.** `T-13` supplies a declared consequence of silence; nothing accumulates the cost of producing it |
| **10** | Agent-mediated resolution | scenario | **`NO_DEFECT`** | *"Ten payer bots = one payer principal"*; `GRD-039` governs claim-to-represent; C4.6 §4 refuses an `rx_negotiation` god-object. **The 2035 target is a typed authority-preserving resolution environment, not a fast negotiation chatbot** |
| **11** | Simplified single-funder | scenario | **`NO_DEFECT`** | Most roles disappear; F1/F4/F6 remain. **A profile requiring complexity to justify itself would fail here — it does not**, because `MFP-3` produces nothing when there is nothing to compose |
| **INV** | Neutrality inversion — OMNI operator as provider · payer/risk bearer · creditor · manufacturer/sponsor | scenario | **`DEFECT_MISSING_MECHANISM`** *(re-labelled)* | Source-authority non-capture, governance and rail replaceability survive all four. **Capacity separation survives only if enforced** — declared, not contracted. **Clinical separation and compensation decoupling fail under operator-as-creditor and operator-as-risk-bearer** — now repairable by the §6.3 `C6` extension rather than by inventing enforcement |
| **EXIT** | **`M-607` portability / exit — deep-run at R1** *(R0 cited sections instead of running it; Knox correct)* | **deep-run** | **`DEFECT_MISSING_MECHANISM`** | Five exits walked: patient changes employer **and** payer · provider leaves one operator · **operator leaves OMNI** · a payer integration disappears · a lender relationship ends. **Survives:** the longitudinal assessment as source-pinned history, because `MFP-3` records pin inputs and never hold source positions. **Fails:** nothing marks **layer-3 operator applicability** as non-portable, so stale in-network applicability would survive an operator exit *as if it were current* — the §3 sideways-leakage mode, now demonstrated rather than hypothesized. **No control blocks it** |
| **SEED-1** | Payer preference silently becomes clinical equivalence (Law 2) | seeded | **CAUGHT — for the wrong reason** | Impossible today because **the relation has nowhere to be written at all**: CM's substrate is `(patient, concept, context_key)` — unary — and *"B is equivalent to A for this patient"* is a relation (A-Q14b). It fails to land not because a control rejected it but because there is nowhere to put it **for anyone**, including the treating clinician who legitimately should be able to assert it. **The pass is an artifact of an unbuilt feature and evaporates the moment A-Q14b is contracted**, unless the capacity control (`adoption_authority`, never reached by a payer position) is designed **into the relation's representation at authorship** |
| **SEED-2a** | **Direct unauthorized write/call into Care truth** — *the corruption §13.3 actually specified; R0 did not run it* | **seeded, new at R1** | **CAUGHT, by construction** | `MFP-3`/`MFP-4` have no write verb into `MFP-1`; every commit routes through the owning domain's capability gate (C4.6 `C5`/`C7`, direction law clause 2). A profile-originated call carries no authority of its own, so the write is refused at the gate, not at review. **This is the one place the architecture holds without depending on an unbuilt feature** |
| **SEED-2b** | **Valid profile state misrepresented by a surface as clinical state** — R0's substituted corruption, retained separately | seeded | **CAUGHT on one side only** | D6 §8.1 `payment state ≠ care state` is contracted and SUP-462 is exact. But the corruption needs no write: the profile's **legitimate** work state can express a care-blocking posture. The catch depends on the **Care-side symmetric statement (A-Q6), which is owed and does not exist.** The asymmetry Gate-1b named at §3-F1-D is load-bearing |

### §7.4 Did the suite discriminate?
**Yes, on all three fixed criteria.** The negative control returned `NO_DEFECT` at the architecture plane while flagging an implementation hazard. All three seeded violations were caught — one by construction, one for the wrong reason, one only half. **Eight traces returned something other than `NO_DEFECT`** (4, 5, 7, 8, 9, 9v, INV, EXIT). *R0 said "four" and then listed five; the corrected count on the corrected verdicts is eight.*

### §7.5 `C12`, now opened and read (R1-06)
R0 relied on `C12` while its own source posture said the body was not inspected. Opened. `C12` — *Prescription lineage integrity* — **FAILS if** "the original artifact is overwritten; **normalization and clinical change are indistinguishable**; a proposed change becomes effective without the authorized commit; **a permitted substitution lacks its authority basis**; or the pharmacy-executable instruction cannot be traced back to the prescriber artifact + intervening decisions."

**Attachment is now legitimate, and it is narrower than R0 implied.** `C12` tests **lineage and authority basis**. It does **not** test the payer/financing composition or the equivalence *relation*, which is exactly Gate-1b §15's warning that *"`C12` alone is INSUFFICIENT."* So trace 9 attaches to `C12` for the lineage half and remains blocked on A-Q14b for the equivalence half.

### §7.6 Brief §5 acceptance-floor compliance — honestly restated
| Required | Method | State |
|---|---|---|
| composite incumbent test | `M-202` | **run at R1** as an element-by-element steelman (§14.4). R0's version was largely a conclusion |
| incumbent absorption | `M-606` | run — kill condition 3 |
| portability / exit | `M-607` | **run at R1** as a five-exit deep trace. R0 cited sections |
| ≥1 negative / null control | `M-508` | run — trace 1, declared before running |
| ≥1 seeded violation | `M-505` | **three seeds at R1**, including the one §13.3 specified and R0 substituted away |
| verdicts before running | `M-706` | run |

**R0's claim of "6/6 performed" was true only in the sense that each method was addressed. Two were not actually run. That claim is withdrawn and replaced by the discharge posture in the state table.**

---

## §8 — OUTPUT 8 · Task-D Input-State Receipt

**Maturity — three levels:** `READY_AS_GATE1B_OWNERSHIP_INPUT` (inherited) · **`READY_AS_GATE2_PROVISIONAL_COMPOSITION_INPUT`** (this object) · `NOT_READY_AS_FINAL_INSURANCE_COMPOSITION_INPUT`.

**No new receipt document is owed** — per `D0THES-DEC-039` Gate-1b §11 is the version-pinned payload; this amends it. **Gate 2 is not an ex-ante prerequisite to Task-D entry or verdict.**

**Task-D MAY additionally rely on:** the **four-stratum map and the three-part direction law** (§1) as a construct that survived thirteen traces and three seeds, **not** as ratified architecture · **A-Q12 resolved at decomposition level with contract/instance separated** (§2) · the **four-scope composition law** (§3) · the **A-Q1b seven-kind taxonomy plus constitution mode** (§4) · the **23-row drive on the corrected tally** (§5) · **that Law 2's enforcement is an extension of an existing runnable gate (`C6`), not an invention** (§6.3) · the **three-part authority model and conjunctive admission** (§12) · **`funding_condition`** (§13a) · the comparator results at §14 **at the grades stated there**.

**Task-D MUST NOT rely on:** Gate-1b §11's prohibitions, carried forward in full, plus —
1. **the operating profile as proven** — constructed and paper-tested, nothing executed;
2. **the ten anti-shadow criteria as satisfied** — **6 demonstrated, 4 conditional**;
3. **neutrality as established** — INV fails two of four inversions;
4. **the payer-constrained-therapy fixture as passing** — `UNRESOLVED_OPEN_QUESTION`; outcome 5 cannot be recorded honestly;
5. **SEED-1's pass as evidence of a control** — artifact of an unbuilt feature;
6. **traces 2, 3, 6, 10, 11 as discharged** — scenario dispositions, not deep-run;
7. **the military comparator as current doctrine** — the pinned edition is **superseded** (§14.2);
8. **`C6` as already covering financing** — it tests operator margin; the breadth extension is owed.

**Task-D MUST remain free to falsify:** everything Gate-1b listed, plus — that the direction law's clause 2 (compose but never authorize) is buildable once `MFP-4` drives real work · that burden incidence can be measured without becoming surveillance (`T-22`) · that `C6` extends to *any interested principal* without becoming unrunnable · **and that unilateral coherence (§10.7) does not itself create the shadow source of truth it is designed to avoid.**

---

## §9 — OUTPUT 9 · Build / buy / wrap — replaced with a four-dimension matrix (R1-10)

R0's single column conflated **semantic ownership** with **implementation sourcing**, and produced a rule — *"payer adjudication: NEVER BUILD"* — that **contradicts this result's own trace 7**, where an OMNI federation is the risk-bearing principal. Owned as a self-contradiction.

**The corrected rule: *never author or impersonate another principal's determination.*** Whether OMNI builds adjudication depends on whether an OMNI-operated legal entity **is** the authorized payer, administrator, sponsor or risk bearer — which Gate-1b §8.4 and §10.A.5 explicitly contemplate.

| Concern | Semantic owner | Execution principal | Current sourcing posture | Replaceability / exit requirement |
|---|---|---|---|---|
| Operating profile, authority model, composition, proof, correction, redress | **OMNI** | OMNI | **build** | none — this is the governed middle |
| `financing_arrangement` lifecycle | **D6** | OMNI | build (native specialization) | n/a |
| Card OCR / document extraction | OMNI owns the *evidence classification* | vendor | **buy** | output enters as `evidence` at `MFP-2`; vendor swappable |
| EDI / X12 / FHIR transport, clearinghouse | the rail owns transport; **OMNI owns the normalized representation, recognition rule and portable proof shape** | rail | **wrap** | `GRD-033` replaceability; proof shape survives rail change |
| Eligibility / benefit inquiry | **payer** (source-authoritative) | payer/rail | **wrap** | OMNI holds an attributed, dated projection |
| Lending, underwriting, servicing | the lender | lender | **buy / partner — a current posture, not a timeless law**; an OMNI federation could later operate a licensed creditor | **permanent requirement is capacity + authority separation**, not the sourcing choice |
| Payment execution, settlement | external rail is ledger of record for movement; **D6 canonical for OMNI-side meaning** | PSP | **wrap** | rail swappable |
| **Adjudication** | **whoever is the authorized determining principal** | that principal | build **only** where an OMNI entity is that principal; otherwise never | **never impersonate another principal's determination** |
| Ranking / recommendation | **OMNI owns objective, permitted/prohibited inputs, authority boundaries, rationale requirements, counterfactual tests (`C6`), audit and the commit path** | may be a purchased model, engine or runtime | **build the contract, buy the engine** | model/engine swappable **without** changing the governing contract — that swappability is itself the proof |

**The rule in one line:** *buy the mechanics, wrap the rails, build the meaning — and never impersonate another principal's determination.* Measured by `GRD-034`.

---

## §10 — OUTPUT 10 · Kill conditions

1. **The generic seam cannot carry required fields.** *Status: none constructed; trace 9 came closest — rationale class and equivalence relation are missing. If either proves un-carryable rather than merely uncontracted, this fires.*
2. **No actor will pay for the continuity** (U11). *Untested; the sharpest commercial attack.*
3. **Incumbent configuration achieves equivalent cross-counterparty coherence** (`M-606`). *Status after §14.4: not achieved, for a **narrowed** structural reason — see §14.1. The differentiator is no longer "incumbents can't cross boundaries."*
4. **Exception rate or human labour destroys the economics.** *Status: **unevaluable** — burden incidence has no home, so the condition cannot be assessed at all. An unmeasurable kill condition is worse than a failing one.*
5. **The profile becomes a hidden source of truth.** *Contained by the three-part direction law and criteria 1–3, 5; **not** contained for criterion 10, and **raised** by unilateral coherence (§10.7).*
6. **The most leveraged party will not participate** — the neutrality-versus-leverage falsifier. *Answered strategically at §10.7 rather than left passive.*
7. **Law 2 cannot be enforced structurally.** *Proposed at R0. **Materially weakened as a threat at R1** — `C6` is a runnable gate, so the question is whether it extends to all interested principals, not whether enforcement is possible at all.*

### §10.7 The answer to kill condition 6 — and the risk Knox's version does not name
**Unilateral coherence → bilateral upgrade** (Knox, adopted). OMNI delivers provider/patient value **without payer adoption**, by ingesting source-attributed documents, eligibility responses, denial artifacts, portal outputs, clearinghouse events and human attestations, and by coordinating evidence, deadlines, explanation, burden and care consequence **without fabricating payer commitments**. Direct payer participation then adds real-time positions, commitments and correction loops as an **upgrade, not a prerequisite**. This is well-founded in the estate: GCE is explicitly bidirectional and ingests, and the ChatGPT-screenshot-then-confirm workaround in the Lens-A table is literally the unilateral behaviour OMNI displaces.

**O-4 — the risk that makes this safe or fatal, which Knox's framing omits.** **Unilateral coherence is precisely the mode in which the profile is most tempted to become a shadow source of truth.** When OMNI reconstructs payer positions from documents and portals with no payer participation, the derived assessment is the *only* coherent artifact in the room, and every product incentive pushes toward treating it as truth. **Kill condition 5 is therefore *raised*, not lowered, by the strategy that answers kill condition 6.**

**Three conditions make it survivable, and they are not optional:** every reconstructed position stays **attributed to its artifact and `as_of`**, never to OMNI · **`unknown` stays first-class and visible** rather than being smoothed into a confident estimate — in unilateral mode most payer facts are stale or unknown, and Law 3's feasibility legibility does its heaviest work here · and the profile **never presents a reconstruction as a payer commitment**, which is the A-Q1a/A-Q1b custody-versus-commitment distinction operating as a product safety rule rather than a taxonomy. *This is the strategic answer's price, and it should be stated wherever the strategy is.*

---

## §11 — OUTPUT 11 · The ten anti-shadow acceptance criteria

Vocabulary: **`DEMONSTRATED`** (the construction makes the violation unrepresentable) · **`CONDITIONAL`** (satisfiable, mechanism named but absent or unextended) · **`FAILED`**.

| # | Criterion | Verdict | Basis |
|---|---|---|---|
| 1 | Owns no source position | **`DEMONSTRATED`** | `MFP-3` holds only derived assessments with pinned inputs; the 23-row drive found no row resolving to a profile-owned position |
| 2 | No universal commit authority | **`DEMONSTRATED`** | the profile has no commit verb; direction-law clause 2 makes composition non-authorizing |
| 3 | Cannot write back into payer, Care, pharmacy or D6 truth | **`DEMONSTRATED`** | **SEED-2a caught by construction** — the one place the architecture holds without depending on an unbuilt feature. SEED-2b's posture leak is criterion 8, not 3 |
| 4 | Versions **and invalidates** every derived assessment | **`CONDITIONAL`** *(R0 counted this as demonstrated with a split verdict; under an atomic vocabulary that is not available — Knox correct)* | versioning is proven in committed code; **validity period, invalidation trigger and recomputation policy do not exist** and are the §2 delta |
| 5 | Preserves each source position independently | **`DEMONSTRATED`** | F5 normative and inherited; composition recomputed, never stored as a total; exercised by traces 3, 5, 6 |
| 6 | CNS orchestration rather than an Insurance-case god-object | **`DEMONSTRATED`** | `MFP-4` is CNS work state; no case, episode, negotiation or coverage object minted |
| 7 | Accountability only after the duty threshold | **`DEMONSTRATED`** | threshold-based admission; trace 2 walked a denial correctly |
| 8 | Cannot silently become a clinical gate | **`CONDITIONAL`** | SEED-2b caught by D6, **not** by Care. Condition: the **symmetric Care-side statement (A-Q6)** |
| 9 | Cannot rank options using an interested principal's economics as clinical merit | **`CONDITIONAL` — materially improved at R1** | **`C6` is a runnable gate with a named fixture and failure condition.** Condition is now the **breadth extension** (§6.3), not the existence of enforcement |
| 10 | Cannot turn longitudinal visibility into authority | **`CONDITIONAL`** | `GRD-034`/`T0-14` state the requirement; layer 4 is noncanonical by construction. **No mechanism**, and the EXIT trace demonstrates the adjacent failure (stale applicability surviving an operator exit) |

**Corrected tally: 6 `DEMONSTRATED` · 4 `CONDITIONAL` · 0 `FAILED`.**

### §11.1 The conformance-contract resolution — R0's dead end, removed
R0 concluded that criteria 8, 9 and 10 are properties of the *assembly*, not the profile, and therefore **could not be demonstrated by this gate at all**. That conclusion followed only from R0's too-narrow boundary.

**With the profile understood as a conformance contract (§1.1), the gate can and does demonstrate the thing that was actually owed: that the contract *requires* these properties, names their proof shape, and names their owner — without the profile owning Care, D6, Sourcing or CNS.** The demonstration is a conformance obligation, not a runtime capability, and the estate already supplies most of it:

| Criterion | Conformance gate | Provenance |
|---|---|---|
| 1, 2, 3 | inherit **`C5`** (authority-bound action), **`C7`** (command ≠ evidence ≠ commit), **`C8`** (rung-5 acceptance is contractual, resolver-gated) | C4.6, accepted L2 |
| 4 | inherit **`C11`**'s shape (temporal/jurisdictional admissibility is never a timeless boolean) → financing-specific extension for dependency-scoped invalidation | C4.6 + §2 delta |
| 5, 6 | inherit **`C10`** (no shadow god-domain — ownership matrix + schema review) and **`C4`** (no scalar-quality collapse) | C4.6 |
| 8 | **financing-specific gate owed** — the Care-side symmetric statement (A-Q6) | new, small |
| 9 | **`C6`**, extended to any interested principal and to presentation | C4.6 + §6.3 |
| 10 | **financing-specific gate owed** — portability without authority; the EXIT trace is its fixture | new, small |

**Seven of the ten (1, 2, 3, 4, 5, 6, 9) map onto existing accepted C4.6 gates; an eighth (criterion 7) maps onto the Accountability §5.5 threshold law, which is a rule rather than a gate; two (8, 10) are owed as small financing-specific gates.** That is a dramatically cheaper and more credible position than R0's, and it is the direct product of taking Knox's R1-01 seriously and then refusing to mint the category Knox proposed.

**Does 6-of-10 mean Axis 2 is wrong?** No. The clause reads *"if the profile **cannot** satisfy all ten."* None is shown unsatisfiable; each conditional has a named mechanism, six of which already exist. **Axis 2 stands at `SURVIVES_WITH_NAMED_RECONCILIATIONS`.** A stricter reading remains available on the text and this gate does not foreclose it — flagged for `E2` and for Nick + Knox.

---

## §12 — OUTPUT 12 · Cross-authority option-resolution profile

### §12.1 Authority decomposition — **R2: O-2 IS WITHDRAWN AS NEW. Care §5b already built it, better.**

R1 presented a three-layer model — fact authority · action authority · **execution admissibility** — as a new finding (O-2), derived from Nick's nuclear-command challenge and the aviation regulation. **That derivation was real and the conclusion was correct. It was also unnecessary, because `v4_C4_care_operating_model_capture.md` §5b already carries it, at greater fidelity, with an anti-collapse invariant R1 did not have.**

> **Care §5b — "Care-transition admissibility (the '10 things must align' physics; per-action-type, NOT one god-gate)."** *"Each proposed care transition DECLARES its own required predicates — a computed composition (Polaris-style), never one `eligible=true/false` boolean, and NOT one truth-owning admissibility object."* **Split into FOUR projections, each mapped to an existing owner.**

| Care §5b projection | Question | Owners named there |
|---|---|---|
| **1. Decision admissibility** | may this stance be authorized? | subject/identity · clinical appropriateness · **patient authority** (§5a) · professional authority (role/license/scope/privilege) · legal/jurisdictional policy · evidence sufficiency + **action-critical freshness** → CM/Observation · RBAC · §5a · policy |
| **2. Execution authorization** | may this actor/system **issue** the action? | action-type · role/scope/privilege/delegation · protocol · required co-approval → action-type contract (OPEN) · RBAC atoms · Polaris · P35 |
| **3. Execution readiness** | **can it happen now, here?** | capacity · staff · room · device · inventory · location · transport · monitoring · technical/agent health · external endpoint → D5/operational · Inventory · Runtime health |
| **4. Consequence + proof contract** | what must result / stay visible? | domain writes · occurrence evidence · communication · **coverage/payment (kept SEPARATE from clinical indication — firewall)** · monitoring · follow-up · compensation/retry · reassessment |

**R1's three layers map onto this and lose a projection.** R1's "fact authority" ≈ §5b projection 1's evidence/appropriateness inputs; "action authority" = projection 2 exactly; "execution admissibility" collapses projections 3 and 4 into one. **Care's decomposition is strictly better**, because separating *readiness* from *consequence contract* is what makes `technically-unavailable-but-manually-feasible` a **reroute rather than a denial**.

**The states Care §5b already enumerates — and every one of Nick's nuclear-launch scenarios lands on one of them:**

| Scenario as posed | Care §5b state |
|---|---|
| provider should act, and does | all four projections satisfied |
| provider declines; someone else acts | projection 2 — role/scope/delegation; §9a *contributions ≠ votes* |
| pharmacy removed the option **because it is dangerous** | projection 1 — professional/institutional prohibition, or `legally-prohibited` |
| pharmacy would allow it but has none in stock | **`indicated+accepted-but-operationally-unavailable` — READINESS, NOT INADMISSIBILITY** |
| provider does not know an attack occurred | **`unresolved-because-evidence-stale`** + *action-critical freshness* |
| provider is right and OMNI disagrees | §5b.1's automation axes — and **`[INV]` AI is NOT a Care-validity condition** |
| coverage denies it | **`appropriate-but-not-covered` — commercial, not clinical** |

**`[INV]` Do NOT collapse to one boolean; these compile into one transition VIEW but never one admissibility TRUTH-object.** Per plane: `satisfied · unsatisfied · unknown · not-applicable · authorized-exception` **plus who owns resolving it.** *"Coverage absence ≠ clinical inadmissibility; missing room ≠ inadmissible; unavailable AI ≠ inadmissible."*

**Insurance's actual contribution is much smaller than R1 claimed, and it is the right size:** the mixed-financing profile is a **consumer of Care §5b projection 4's coverage/payment slot and projection 3's readiness signals** — it supplies inputs, it does not own the admissibility model, and **it must not create a second one.**

### §12.2 Conjunctive admission — **R2: O-3 IS DEMOTED. It is one enum value in Care §5b.1, not a general law.**

Knox is right that conjunctive admission is one topology and not the constitution. **The estate is more precise than either of us:** Care §5b.1 already decomposes approval into orthogonal axes and enumerates the topologies —

> **`approval_requirement`** (approver cardinality + review topology): **`single_authority · cosign_required · dual_control · independent_verification · supervisory_review · committee/ethics_review`.**

**R1's "conjunctive admission" is `dual_control`.** The aviation joint release is a real, well-evidenced instance of that one value — and Care already carries five siblings R1's "general form" would have flattened. Care §5b.1 also supplies what Knox's ad-hoc list reached for: **`authority_basis`** (`patient_consent · surrogate_authority · advance_directive · clinician_order · protocol_delegation · operator_policy · **emergency_authority** · **court/statutory_authority**`), **`authorization_evidence_form`**, and a versioned **`checkpoint_graph`** carrying blocking semantics, fallback, **reauthorization trigger**, and timeout/escalation — i.e. break-glass, non-waivable prohibition, default-on-silence and sequencing, already typed.

**The defect R1 introduced, and Knox caught correctly.** R1's predicate table listed **payer funding** and **D6 money state** as predicates whose withholding prevents execution. **That is false and it contradicts inherited law in three places:** F1 (care does not entail a financing lifecycle), D6 §8.1 (`payment state ≠ care state`), and Care §5b's own `appropriate-but-not-covered` — *commercial, not clinical*. **A payer may withhold funding and D6 may report unsettled; neither renders execution inadmissible.** Funding belongs to projection 4's coverage/payment slot, explicitly firewalled from indication. **Withdrawn.**

**What survives, narrowly and usefully.** Aviation supplies well-evidenced external confirmation for **one** value of an existing OMNI enum: `dual_control` between two non-fungible professional authorities, with a **disjunctive veto** (either may withhold) and an **exceptional-regime transition** rather than an override. That is worth carrying to Care §5b.1 as external corroboration of a value it already has — **not worth a new law, and it never gives a payer a vote on clinical merit.**

### §12.3 Multi-axis typing, the three branches, and the two anti-shadow failures
**Typing axes:** GCE principal + represented capacity (**ratified, primary**) · C4.6 plane (**accepted L2, primary**) · speech-act kind (**OPEN**, typed at §4) · REV-184 stance + authority gate · `seam_kind` cross-loop effect (**candidate; admissible only where reuse is proven — used nowhere here, because no trace required it. Weak evidence against its necessity, not proof against its validity**).

**Prohibitions obeyed:** nothing typed by `seam_kind`; a clinician recommit is **not** an accepted `custody_handoff` (submission ≠ acceptance; `O10 ACK ≠ accepted-custody`); a pharmacy substituting inside an already-authorized envelope is a **professional/execution commit**, not a `control_request`.

**The three branches:** **(a)** clerical/operational reroute — operationally equivalent, executing principal within its envelope, **no reopen** · **(b)** permitted change inside an existing substitution/authority envelope, **authority basis recorded**, no reopen · **(c)** clinical reinterpretation — **authorized clinical recommit**, `reopen_care`. Discriminator inherited from C4.6 L205; **`C12` is the runnable gate and it fails when "normalization and clinical change are indistinguishable" or "a permitted substitution lacks its authority basis."**

**Failure 1 — the profile becomes the authoritative owner of the resolution.** Not triggered: `MFP-3` holds derived assessments, `MFP-4` holds work state, the resolution is REV-184/CNS-owned, commits are owning-domain.

**Failure 2 — A-Q15, a fourth *authoritative* graph.** Not triggered; this gate names no new graph. Three graphs coexist at three altitudes: CNS **process/lifecycle** (canonical for process state) · Accountability **`matter_graph`** (derived correlation) · Care **`resolution_participant_graph`** (projection).

**A-Q15 rule — corrected at R1 (R1-08).** R0 said projections may reference *"by identifier, never copied state."* **That contradicts locked Tier-0 doctrine.** `T0-15`: *"one substrate object, many surface projections. A projection is NEVER authority; canonical state is the single source of truth. **Hard projections (durable, composed) vs soft projections (computed, ephemeral)** are distinguished; neither becomes a second source of truth."* Corrected rule:

> A projection **may** materialize lifecycle-derived state, provided it carries source identifiers, source version and effective-time posture, derivation version, and invalidation rules — and holds **no independent transition authority**. The failure is not copied bytes. It is independent lifecycle progression · untraceable divergence · stale materialization presented as current · projection state used as authority · projection corrections bypassing the owner.

**O-7 — the dedup Knox skipped.** Knox proposes the profile hold "a derived dependency/correlation representation for computation and explanation." That may well be right — dependency-scoped invalidation needs a dependency map. **But Accountability §6b already owns a derived-correlation `matter_graph`, and Gate-1b's A-Q15 failure condition explicitly includes "duplicated lifecycle truth."** A financing dependency graph must therefore be **deduped against `matter_graph` before it is proposed**, on the same discipline this arc applies to every noun. Recorded as an obligation on the profile contract, not as a licence.

---

## §13 — OUTPUT 13 · Sequencing, selection and burden

### §13(a) Sourcing selection and A-Q18 — **RESOLVED, narrowly**
C4.6 §9's selection output composes: admissible set (each `as_of`) · `failed`/`unknown`/`stale` candidates · alternatives · preference · policy precedence · objective · **incentive lineage** · authorized selector and authority basis.

**A-Q18: a payer-mandated pharmacy is none of the three existing classes. It is a fourth — a `funding_condition`.** It (i) does **not** narrow the *admissible* set — the non-mandated pharmacy remains licensed, capable and clinically acceptable; (ii) is **not** a preference — no participant in the care relationship prefers it; (iii) is **not** policy precedence — it is not OMNI's or the operator's policy; and (iv) attaches a **financial consequence** to selecting outside it, which lands at `MFP-3` as an assessment input, never at Sourcing as an admissibility filter.

**Ownership, corrected (R1-09).** R0 said "Sourcing + D6 + Settings," which is loose to the point of being wrong.

| Function | Owner |
|---|---|
| the condition itself | **the payer** |
| carriage, attribution, version/`as_of` posture | **GCE** |
| preservation as a **non-admissibility** constraint attached to an option | **Sourcing** |
| financial consequence | **D6 / the profile** |
| OMNI's *interpretation/configuration* rule — never the condition | **Settings** |
| **must never read it as clinical merit** | **Care** |

*One fact participating in several functions without becoming jointly owned.* **Why it is load-bearing:** collapsing a funding condition into "preference" converts a payer's economic constraint into an apparent clinical or operator choice — a §9 Law 2 violation expressed as a taxonomy error, and the mechanism by which "not covered here" silently becomes "not an available therapeutic option."

### §13(b) Non-linear ordering and A-Q17 — **EXPOSED, NOT RESOLVED**
**Stated plainly: Gate 2 did not resolve A-Q17 and could not have.** `T-21` forbids the false total order; C4.5 is `full_pass_not_started`, re-verified unchanged.

**What R1 contributes instead of a resolution — the required trace dimension, specified.** Every multi-principal trace must expose, per exchange: **ordering basis** (which clock — source-asserted, OMNI-received, OMNI-recorded, effective) · **ordering confidence** · **concurrency set** (which responses are genuinely unordered relative to each other) · **causal relations** — `responds_to` · `depends_on` · `supersedes` · `triggered_by` (Knox, adopted; these are relations over events, **not** a new graph, and §12.3's dedup obligation applies) · **operative posture mid-flight** · **partial answers** and how they compose without implying a total order.

**A wall-clock sort is a presentation, not proof of chronology.** Routed to the C4.5 full pass, which cannot close without disposing of the Insurance partial-order fixture. **This remains the single largest genuinely-open item the fixture exposes.**

### §13(c) Burden incidence — **EXPOSED, and the worst-conditioned item in the gate**
Six dimensions must never collapse: **authority · leverage · influence · burden incidence · default power · material care effect.**

Because the anti-shadow failure is *"preserves formal authority while allowing unbounded administrative burden to become hidden de facto control,"* **and burden is unmeasurable, that failure is undetectable by construction.** An anti-shadow criterion that cannot be evaluated is not a weak control — it is no control, and it makes kill condition 4 unevaluable.

**Minimum measurable set** (specification, not a schema): issuing principal **and capacity** · request/proposal count and duplication · evidence demanded · response deadline · the actor **expected** to respond · elapsed labour and delay · **default consequence of silence** · accumulated burden **by actor** · abandonment or deferral reason · material effect on the feasible set · whether agents reduced or increased burden.

**Search native homes before proposing an object** (Knox, adopted — and it is the right instinct): staff labour → **BIZOPS** · work items, requests, deadlines → **CNS** · delay/elapsed → temporal/workflow sources · patient-reported burden → **Observation/Care** · money and patient cost → **D6** · material care effect → **Care/REV-184** · admitted duty → **Accountability**. **The cross-actor total is most likely a derived, purpose-limited, actor-scoped assessment — not a new source-truth owner.**

**Its guardrail travels with the specification, not after it.** Measuring burden by actor is one design decision away from surveillance of clinicians and staff. `T-22` — *"Reconstructability is not surveillance authority"* — and `O17` bound it. **Any burden-incidence design that cannot satisfy `T-22` should not be built.** Owner: unassigned.

---

## §14 — OUTPUT 14 · External-comparator pressure

**Discipline (`GRD-026`): mechanism only — never the hidden ownership, hierarchy or economic assumptions.** All of §14 is **evidence-grade, not promotion-grade** (`GRD-036`). Grades and currency per source are pinned at §0.3.

### §14.1 Palantir — O-5, correcting both R0 and Knox
**Consult `comparator_analogy_registry.md` first (Knox, right).** The registry already carries a substantial Palantir posture: **TAKE** executable objects/relationships/actions/dynamic-security; **REJECT** proprietary ontology gravity, semantic lock-in, and the claim that controlling the representation equals owning the domain. **The core negative transfer is not a new discovery**, and R0 should have cited the row rather than re-deriving it. What is new is the *application to A-Q15*.

**Verified mechanism, from primary docs.** The Ontology is *"an operational layer"* over integrated assets, with **semantic elements** (object/property/link types) and **kinetic elements** (action types, functions, dynamic security). **Action types are governed transactions** editing objects, properties and links in one shot including side effects; the **Actions service** enforces *"complex permissions and conditions"* and produces *"a historical action log for analysis of user decisions."* The **Object Data Funnel** *"reads data from Foundry datasources **and user edits (from Actions)** and indexes these data into object databases."*

**The peering question, verified — and this is where R0 and Knox are both wrong in opposite directions.**

- **R0's "inside one enrollment" is stale and is withdrawn.** **Peer Manager** establishes connections that "share data between distinct spaces across **two Foundry enrollments**," where the connection controls "the types of data that may peer, **the direction** the data will peer, and the set of classification and other markings that can peer." Peerable: "Foundry objects, object sets configured in Object Explorer, and Gotham files."
- **Knox's "Palantir now federates typed operational ontologies including mapped objects/links" over-reads.** Palantir's own developer community answers the cross-ontology link question directly: **"At the moment, no there is no way to do this. But we are tracking this as a feature request,"** with a documented workaround of **duplicating the object into each ontology** and faking the link by foreign-key filtering. Peer Manager itself notes other resources (e.g. Workshop applications) do not yet peer.

**R2 — the peering question is left OPEN, and the moat claim is re-anchored off it entirely.**

R1 concluded *"data peers; the ontology does not."* Knox's R2 asserts current official documentation supports peering of object **and link** types with bidirectional action-data synchronization, and instructs me to delete R1's registry append. **The two readings are not yet reconcilable from what either of us has produced**, and the record is:

| Reading | Exact support |
|---|---|
| **R1** | Peer Manager *Core concepts* — the canonical page for what peers — enumerates *"Foundry objects, object sets configured in Object Explorer, and Gotham files,"* and states other resources cannot yet peer. Palantir's developer community answers the cross-ontology link-type question *"no way to do this… tracking as a feature request,"* workaround = duplicate the object per ontology |
| **Knox R2** | a distinct Ontology-peering surface said to synchronize object **and link** types, distinguishing source-data from action-data peering, action data bidirectional in real time |
| **Agreed by both** | peering **requires counterpart configuration and mutual approval between two Foundry enrollments** — platform symmetry and mutual configuration are a real, undisputed limit |

**Disposition: `OPEN — EXTERNAL_EVIDENCE_REQUIRED`.** Both readings and their exact sources are recorded here; **R1's proposed registry append is WITHDRAWN and must not land**; **no replacement wording is proposed either**, because a comparator fact under active dispute between two reviewers is exactly what the Evidence Plane gate exists for. Routed to the Evidence Plane and to the C3.8 comparator arc's owner, **not** resolved inside the Insurance gate.

> **★ And the reason this is the right call rather than an evasion: the moat claim does not depend on the answer, and the estate settled it months ago on better ground.** Care capture §19 carries a ratified `[INV]`:
>
> ***"[INV] Moat framing (Palantir/SV lens — corrected: composition + enforcement, not any single concept): no single CARE-SPECIFIC row is a moat by itself… The differentiation is the native, enforced COMPOSITION — patient-as-represented-principal × scoped/revocable consent × multi-track ownership on one object × clinical adoption × non-fungible commit planes × longitudinal continuity × agent-influence lineage × proof — held as native normative operating law across care+ops+commerce+agents+operators+proof, which a generic ontology can configure toward but not supply. Defensibility = end-to-end enforcement + build + adoption + trusted relationships, not the markdown."***
>
> **`Configure toward but not supply` is the whole answer, and it is invariant to whether Palantir peers link types.** Whether the ontology crosses an enrollment boundary is a *capability* question; whether an ontology can *supply* enforced non-fungible authority, patient consent and refusal, clinical adoption and care-versus-financing separation is a *category* question. R0, R1 and Knox all spent this arc litigating the capability question — which is the wrong fight, and it was already won on the other axis. **Both R0's and Knox's proposed registry wordings are inferior to the `[INV]` that already exists.**

**Consequence for kill condition 3.** Its differentiator is restated on the ratified ground: not *"incumbents cannot cross boundaries"* — which may well be false — but *"a generic ontology can be configured toward this composition and cannot supply it as native enforced law."* That is falsifiable, it survives the peering dispute, and it is the estate's own sentence rather than a fresh one.

**A-Q15 pressure result:** the answer at §12.3 is unchanged and its justification is stronger. Three coexisting graphs is not an OMNI eccentricity to be tidied into one; it is the consequence of cross-sovereign truth. The single-graph alternative has a named owner, a real mechanism, and now a precisely-bounded reach. **Multiplicity is the price of sovereignty — and, per Knox, kill condition 3's differentiator must be restated on the corrected basis, which §10 does.**

**Adjacent technology mechanisms — carried at inherited maturity, explicitly not re-derived, and marked incomplete where they are.** **AWS saga/compensation:** the carrier's R5 correction stands — a *proposal* discloses expected tradeoffs and reversibility; a *committed consequential transition* declares its rollback/mitigation/reopen path where one exists and **names the residual irreversible consequence where one does not**; per F6 no compensating action may claim to restore lost care state. Corrections are **owner-native new commits plus assessment invalidation/replay, not one distributed rollback** (Knox, adopted). **Anthropic/OpenAI-class platforms:** *approval enforced in the tool, not the prompt* — capability-specific authorization **outside** the model layer, which is direct support for §6.3's read-set boundary being structural rather than instructional. **Tesla:** degraded sensing makes automation *unavailable* rather than letting the system pretend inputs are good — maps cleanly onto stale/unknown payer, benefit or availability evidence: **degrade the profile's automation and confidence, never the source truth** (Knox, adopted; a genuinely useful addition). **Epic:** configuration-as-truth, per-customer instances and customer-specific implementation — which is why kill condition 3 is about cross-counterparty coherence, not features. **These four are consulted at inherited/secondary depth, not independently re-verified this pass, and are marked incomplete accordingly.**

### §14.2 Military / joint C2 — pinned, and downgraded for currency
**Source pinned: JP 1, *Doctrine for the Armed Forces of the United States*, Incorporating Change 1, 12 July 2017**, obtained from a third-party mirror, **not** `jcs.mil`.

**Currency, stated because Knox was right to demand it: this edition is SUPERSEDED.** JP 1 was restructured into **JP 1 Volume 1, *Joint Warfighting* (27 Aug 2023)** and **JP 1 Volume 2, *The Joint Force* (2020)** — and Vol 2 is the volume that now carries the organization and **command-and-control mechanisms** material, i.e. exactly the passages quoted below. **Current JPs are CAC-restricted on `jcs.mil` and were not obtained;** terminology is canonically maintained in the DoD Dictionary, also not obtained. **These quotes are therefore evidence-grade with a named currency caveat and MUST NOT become acceptance-grade until re-verified against JP 1 Vol 2.** The mechanisms are long-standing and structural, which is why the *transfer* survives the caveat; the *citations* do not.

| Mechanism (verified in the 2017 edition) | Transfer |
|---|---|
| *"Authority is never absolute; the extent of authority is specified by the establishing authority, directives, and law."* | **TAKE — the doctrine-level statement of scoped, instrument-granted authority.** Direct A-Q16 support |
| *"TACON does not provide organizational authority or authoritative direction for administrative and logistic support."* | **TAKE — the strongest single A-Q16 finding.** A mature discipline enumerates what an authority does **not** reach. A payer's funding authority should be specified the same way |
| **ADCON vs OPCON** — two orthogonal authority channels over the same unit | **TAKE.** Administrative/financial and operational/clinical authority over the same act are **parallel, not ranked** — what a single `authority_rank` ladder cannot express |
| **Support relationship + establishing directive** — specifies *"the purpose… the effect desired, the scope of action to be taken, and any shifts in the support relationship"* | **TAKE the shape.** But per Knox: this is constituted by an **establishing authority**, so it is **not** evidence of a bilateral carrier. It supports the **constitution-mode axis** at §4 instead |
| *"When a supporting commander cannot fulfill the needs of the supported commander, the establishing authority will be notified by either the supported commander or a supporting commander. The establishing authority is responsible for determining a solution."* | **TAKE the structure, REJECT the presupposition.** Non-fulfilment is a **first-class declarable state**, **either party may escalate**, and a **named third authority** resolves. This is the first located mechanism for *"payer will not fund / pharmacy cannot supply"* that treats the supporting party as neither obedient nor silent — **but healthcare has no establishing authority**, which is why kill condition 6 survives |
| **Coordinating authority** — *"a consultation relationship between commanders, **not an authority by which C2 may be exercised**… does not have the authority to resolve disputes"* | **TAKE — the closest external name for what the operating profile is.** Independent confirmation that "coordinates, cannot decide" is a real operating category with bounded use, not a euphemism for a weak domain |
| **Multinational OPCON reservations** — an MNFC *"cannot change the mission… nor separate units, divide their supplies, administer discipline"*; US commanders *"maintain the capability to report to higher US military authorities in addition to MNFCs"* | **TAKE.** Granting control **enumerates non-transferable reservations** and **preserves an independent reporting path** — a payer may commit funding without acquiring clinical recommit authority, and the patient/clinician retains an escalation channel the funding relationship cannot close |
| **Unity of effort vs unity of command** — other departments' operations *"are not under command of the Armed Forces"*; multinational unity of command *"may not be politically feasible"* | **TAKE the concept and its cost.** Doctrine does not pretend coordination without a commander equals command; it names it differently and accepts weaker guarantees. **OMNI should do the same rather than implying the profile delivers command-grade coherence** |

**Transfer limits, tested rather than asserted.** **(i) No universal commander — HOLDS, more sharply than the carrier claimed:** doctrine's own no-common-commander branch is unity of effort + coordinating authority, which is a better fit than the command hierarchy. **(ii) Logistics authority is independent — HOLDS and is evidence-backed:** COCOM includes *"authoritative direction over all aspects of military operations, joint training, and **logistics**,"* so logistics **is** subordinate in military doctrine, and that is exactly what must not transfer. **(iii) Mission economics do not transfer — HOLDS, untested and untestable here.**

### §14.3 Civil aviation — the joint-release question answered, the tie-break claim narrowed
**Verified verbatim** (14 CFR part 121, pinned): **§121.533(b)** *"The pilot in command and the aircraft dispatcher are **jointly responsible** for the preflight planning, delay, and dispatch release."* **§121.663** *"…shall sign the release **only if they both believe** that the flight can be made with safety."* **§121.533(c)(3)** dispatcher cancels or redispatches *"if, in **his opinion or the opinion of the pilot in command**,"* the flight cannot operate safely. **§121.533(d)–(e)** in flight the PIC has *"full control and authority… without limitation."* **§121.627(a)** no continuation if either judges it unsafe, *"unless, in the opinion of the pilot in command, there is no safer procedure. In that event, continuation… is an **emergency situation** as set forth in §121.557."* **§121.557(b)** the dispatcher *"shall advise… shall **ascertain the decision** of the pilot in command, and shall **have the decision recorded**,"* and if it cannot communicate, *"shall declare an emergency and take any action that he considers necessary."* **§121.557(c)** a written report within **10 days**. **§121.601** an affirmative, continuing **duty to inform**, separate from decision authority.

**Six mechanisms.** **(1) Conjunctive commit, disjunctive veto** — generalized at §12.2 as **conjunctive admission**. **(2) Phase-dependent authority** — joint before departure, PIC dominant in flight; authority is scoped by phase, not held statically. **(3) Exceptional-regime transition — NARROWED at R1 (R1-07, Knox correct).** R0's framing, *"disagreement resolves by regime change, not override,"* is **too broad**: §§121.627/121.557 govern **unsafe continuation and emergencies**, not any disagreement, and emergency authority is bounded to situations *requiring immediate decision and action* and carries reporting duties. **The correct import is narrow: phase-bounded conjunctive admission over separate non-fungible commits, with explicit *exceptional-regime* transitions — not a universal tie-break and not one shared authority.** **(4) Degraded-communication fallback with a named unilateral actor** — degraded mode names *who* may act alone, in advance; OMNI's *"who acts when the payer does not respond?"* currently resolves only to `T-13`'s declared consequence, which names a consequence but not an actor. **(5) Deviation is permitted but never silent** — the exception path produces a durable accountability artifact by construction; strong external validation of *non-action-as-commit* and *silence is not closure*. **(6) Duty to inform ≠ share of the decision** — a clean analogue for the payer's obligation to state policy, deadlines and evidence requirements without acquiring clinical authority.

**Transfer limits.** **REJECT the shared employer** — PIC and dispatcher work for one certificate holder under one operations specification, and the joint responsibility is created by a **regulator**; OMNI's principals share neither. The mechanism transfers; **the institutional container that makes it enforceable does not.** **REJECT the symmetric safety objective** — both aviation parties are bound to *"can this flight be made safely"*; a payer is not bound to the patient's clinical objective (§12.2's named misreading). **REJECT the single operational tempo** — aviation's joint release is minutes-to-hours; payer/pharmacy/patient resolution runs for days to months, asynchronously, with parties changing. **The concurrence mechanism must survive A-Q17's partial order before it can be imported, and A-Q17 is unresolved.**

### §14.4 `M-202` composite incumbent — steelmanned element by element at R1
R0 asserted a conclusion. R1 runs the attack.

| Element | What it genuinely supplies | What it does not supply for this problem |
|---|---|---|
| **Palantir ontology + Actions + Peer Manager** | typed governed write path, permissions and conditions, decision log, **and real cross-enrollment data peering** | the **semantic layer does not peer** (no cross-ontology link types); peering requires **both sides on Foundry and mutual configuration** |
| **Epic distribution + configuration gravity** | the clinical system of record and the distribution that beats most challengers | per-customer instances and customer-specific configuration — **coherence is inside one enrollment's configuration**, and configuration-as-truth is the named failure mode |
| **Clearinghouse / payer rails** | adjudication and transport at national scale | transport, not meaning; they carry claims, not care consequence, rationale or reopening |
| **AWS saga/compensation** | durable orchestration, compensation by failure class | assumes symmetric rollbackability — **care already occurred, consent was already exercised** (F6) |
| **OpenAI/Anthropic-class agents** | the interaction layer, tool-as-contract, approval in the tool | agents are suppliers to every principal; **they do not adjudicate between principals**, and multiplicity does not change principal identity |

**Assembled, this stack can do most of §1's map — inside one enrollment, or between two enrollments that both run the same platform and jointly configure a connection.** What it does not reach is **asymmetric, non-consenting, non-co-platformed principals** — which is the actual condition of care financing. `GRD-034` is the discriminator: not how many integrations, but whether every exchange preserves identity, authority, consent, context, ownership, commit and proof **across parties none of whom owns the deployment**.

**The honest counter, recorded because `M-202` exists to find it.** *The composite may not need to reach.* If the buyer is the enterprise, enrollment-bounded coherence may be **commercially sufficient**, and the cross-sovereign residual may be an architecture nobody pays for — **which is U11 and kill condition 2, not a comparator result.** The composite does not kill Axis 2; it sharpens the commercial question and hands it to §10.7 and Task-D.

---

## §15 — The minimum human operating-experience contract (R1-11)

**Axis 2 is a product claim — `no domain ≠ no product`.** R0 demonstrated backend decomposition and no product, which is a real gap. **This is not a UI specification.** It is the **invariant human result**, and it is written as a **conformance surface**: every row is traceable to a law or gate, so it can be tested rather than admired.

### §15.1 Patient
| The patient must be able to distinguish | Enforced by |
|---|---|
| what was **clinically recommended** vs what is **funded**, and by whom | Law 1 · §12.2 predicates |
| whether an alternative is **clinically equivalent**, **acceptable with tradeoffs**, or **financially preferred** | **A-Q14b (missing)** · Law 2 · `C6` extended |
| what is **unknown or conditional**, distinctly from what is absent | `unknown` first-class · F1's `not-applicable` ≠ `unknown` |
| expected personal responsibility, and what would change it | D6 + `MFP-3` validity posture |
| what the patient **selected or refused**, preserved as theirs | consent predicate · patient acceptance ≠ clinical equivalence |
| what is being appealed, by whom, by when, and the **default consequence of silence** | `MFP-4` + `T-13` |
| who owns the next action | `MFP-4` work ownership |

### §15.2 Provider
| The provider must see | Enforced by |
|---|---|
| the **original recommendation preserved**, never rewritten by a later coverage-compatible plan | F4 · REV-184 line 5 · `C12` |
| payer position and patient affordability **separately attributed** | Law 2 · Law 3 |
| evidence already submitted and **reusable**, with duplicate requests visible | §13(c) burden set |
| the **precise conditions requiring clinical recommit** — and no requirement to re-decide care for an operational reroute | §12.3 branches (a)/(b)/(c) · C4.6 L205 |
| one clear owner for every outstanding action | `MFP-4` |

### §15.3 Operator / staff
One **deduplicated** work queue · source-specific deadlines · evidence sufficiency and reuse · payer/pharmacy/lender status **separated, not merged into a single "status"** · burden accumulation · default consequences · appeal and correction propagation · **explicit unknown and degraded states** (the Tesla import: degrade automation, never the truth).

### §15.4 Measures that decide whether Axis 2 created value
Time from clinical recommendation to executable and funded plan · staff and clinician minutes per resolution · duplicate evidence requests · appeal abandonment rate · **false clinical-gate rate** · patient surprise-cost rate · source-correction propagation time · unresolved-dependency age · access-driven plan-change rate · **percentage of plan changes carrying an honest rationale class**.

**The last measure is the one that matters most, and it is currently unmeasurable** — it depends on REV-184's rationale-class field, which does not exist. **Without §15, Axis 2 risks being an elegant data-composition layer rather than a care-friendly, provider-friendly operating product.**

---

## §16 — Gate-2 verdict

> ### BUILDER'S VERDICT (R3)
> ## `SURVIVES_WITH_NAMED_RECONCILIATIONS`
> **Axis 1** survived a 23-row residual drive with **no row resolving to a new Insurance-owned truth object**, and survived an element-by-element composite incumbent attack for a **narrowed but structural** reason.
> **Axis 2** stands at **6 of 10 anti-shadow criteria demonstrated, 4 conditional, 0 failed** — where **seven of the ten map onto existing accepted C4.6 conformance gates**, an eighth onto the Accountability threshold law, and only **two small financing-specific gates are owed**.

**Unchanged from R0 in name, materially different in basis.** R0's verdict rested partly on overclosed traces (5 and 8) and on a claim that enforcement of Law 2 was absent. R1 downgrades those traces, corrects three arithmetic defects, corrects a doctrine contradiction, corrects a self-contradiction in output 9 — **and finds that the most expensive named reconciliation was already half-built.** The verdict survives at **lower confidence on discharge** and **higher confidence on repairability**.

### §16.1 The named reconciliations
| # | Reconciliation | Owner / consuming gate | Change at R1 |
|---|---|---|---|
| **R-1** | **Extend `C6`** to any interested principal and to presentation; attach the audit surface | `REV-185` + row-P elevation | **was "invent enforcement"; now "extend a runnable gate"** |
| **R-2** | Symmetric Care-side `payment state ≠ care state` (A-Q6) | C5 / Care contract | unchanged |
| **R-3** | A-Q14b relation representation, **with the capacity control designed in at authorship** | Care Response-Seam Audit, after dedup vs CM and Accountability §19 | unchanged |
| **R-4** | REV-184 rationale-class field-set incl. `resource/access-driven` | C5 / REV-184 | **now also blocks §15.4's decisive measure** |
| **R-5** | A-Q17 partial order + causal relations | C4.5 full pass | trace dimension specified |
| **R-6** | Burden incidence, native homes searched first, `T-22` guardrail attached | unassigned | **now with a native-home decomposition** |
| **R-7** | **Portability: mark layer-3 applicability non-portable** | **new at R1 — from the EXIT trace** | criterion 10's first concrete mechanism |
| **R-8** | **Dedup any profile dependency graph against `matter_graph`** | **new at R1 (O-7)** | obligation, not licence |

### §16.2 "Not Insurance-owned" does NOT discharge Gate 2 (Knox R2-08, accepted — R1 conflated two things)
R1 repeatedly wrote that none of the reconciliations is Insurance-owned, in a tone that implied they were therefore somebody else's problem. **That conflates truth ownership with gate responsibility, and if left standing it lets Axis 2 survive by exporting every obligation it cannot meet.** Four distinct roles, kept apart:

| Role | Meaning | Example (R-1, Law 2) |
|---|---|---|
| **source-truth owner** | owns the fact | the interested principal owns its own economics |
| **mechanism owner** | owns the rule and its enforcement | `REV-185` / row-P elevation — **unassigned today** |
| **conformance-gate owner** | owns the runnable proof | C4.6 owns `C6`; the breadth extension is raised to C4.6's gate |
| **reconciliation carrier** | owns *proving the composition respects it* | **Insurance Gate 2 — and this one is ours** |

**Restated correctly:** Care owns its invariant, C4.5 owns the temporal law, Sourcing owns selection, D6 owns financial truth, Clinical Memory owns adoption — **and Gate 2 still owns demonstrating that the mixed-financing assembly violates none of them.** None of the eight reconciliations is Insurance's to *own*; **all eight are Insurance's to *satisfy* before Gate 2 can finally close.** *R1's phrasing is withdrawn.*

**What remains true and worth keeping:** every one of the eight is general physics that already existed somewhere in the estate under some name — and §0.7 now shows the same is true of half of what R1 called discoveries. **That is the arc's most durable output and it is not an Insurance finding at all** (§20).

---

## §17 — Landing packet — verbatim-ready, integrator-owned, NOT landed

**`PRESPINE-PHASEA-INTEGRATOR` is VACANT and all shared control-plane surfaces were treated as read-only.** Nick's instruction is that ideas reach durable homes; the maximum available under the vacancy is a **mechanically landable packet** rather than prose routing, so that landing requires no re-derivation. Part A (payload) is this file.

| Target | Verbatim-ready change | Part |
|---|---|---|
| **`comparator_analogy_registry.md`** — Palantir row | **NOTHING PROPOSED. R1's append is WITHDRAWN and must not land.** The peering fact is contested between two reviewers (§14.1) and belongs to the **Evidence Plane gate + the C3.8 comparator arc's owner**, not to an Insurance gate. Only the *withdrawal* of R0's stale "one enrollment" claim is carried | C |
| **`WI16` (spine watch list) + read-graph route `#9g` + `EVRUN-2026-000007`** | record **Insurance as the THIRD arc converging on the OMNI Reactor shape** (after the moat doctrine's noted adjacency), with the pointer that `admissibility-before-consequence` now has three independent statements. **No adoption, no population, no unblocking** — the estate's own rule is that convergence is a signal to TEST | B |
| **`comparator_analogy_registry.md`** — second gap | **FHIR/HL7 is carried as a payload-standards comparator only.** FHIR *profiling*, IHE integration profiles, SEI product-line variability and platform-plus-lenses are absent **as commonality/variability mechanisms**. Recorded as a named gap; **not authored here** — Reactor gate (2) already owns the standards-native comparison | C |
| **Care capture §19 homology matrix + §1b `U/C/A` crosswalk** | noted as the closest existing **Level-2** object and as **genuinely under-built** (three columns, Care-internal, review-draft). **No obligation minted, no column added, no name proposed** — §20.3 | C |
| **C3.8 G4 + `EVRUN-000007 §02` + `EVRUN-000008`** | **inheritance debt** — required before Insurance's homology column and before the responsibility-continuity/liability material can be written (§20.3) | D |
| `08` **`D0INS-REV-002`** | dispositions: **A-Q12 resolved-at-decomposition, contract/instance separated** · **A-Q15 role-reconciled, `T0-15`-conformant** · **A-Q18 resolved (`funding_condition`), ownership per §13(a)** · **A-Q14a/b/c, A-Q16, A-Q17 OPEN**; add **SEED-1's precondition** and **R-8's dedup** to closure criteria | B |
| `08` **`REV-185`** | add: **`C4.6 C6` is an existing runnable proof shape for Law 2**; the breadth extension owed (any interested principal + presentation); administrative friction as a fourth economic-pressure pathway | B |
| `08` — **new row** | **burden incidence has no owner** (R-6); native-home decomposition; `T-22` guardrail | B |
| `08` — **new row** | **layer-3 applicability portability** (R-7), from the EXIT trace | B |
| `04` read graph | extend route **`9p`** to name this result as the current head of the chain. **No new Tier-2 node** (Gate-1b C53) | C |
| `01` catalog | one row — §18 | A/C |
| **C4.5 next-actions** | bounded inbound pointer: Insurance partial-order fixture + §13(b) trace dimension | D |
| **C3.6C** | bounded inbound pointer: **A-Q16 + the three-part authority model (O-2) + conjunctive admission (O-3)** + the pinned military/aviation mechanisms **with their currency caveat** | D |
| **C4.6** | **NO BODY EDIT** — accepted L2 doctrine. Two items raised **to C4.6's own gate**: the `C6` breadth extension, and the §11 loyalty-guard capacity enumeration omitting **financing origination** | D |
| **Evidence Plane** | the §14 primary sources are recorded here with full identity, quotes, currency and grade so they can be lifted into a source packet **without re-fetching**. **No `ingestion/` file is created**, because that requires catalog and evidence rows this lane may not land | D |
| `05` / `03` / `06` | **none proposed.** Nothing here is a decision; no guardrail is minted; kill condition 7 is a review-gate question | — |

**Two hard constraints obeyed:** **no re-derivation** (each carry states the question, ID, route and maturity) and **no status laundering** (`source_authority_map` stays `analysis_nonbinding`; `T-21` stays pre-pass; C4.6 stays accepted L2; §14 stays evidence-grade; the military citations stay superseded-edition).

---

## §18 — New Artifact Completion (AWP §5) — proposed, integrator-owned

**Passport** at head. **Class** `analysis`/`architecture_gate_result`. **Authority** `analysis_nonbinding`. **Lifecycle role** Gate-2 output object.

**Catalog row, verbatim for `01_master_corpus_catalog.md`:**

> `.cursor/plans/v4_INS_G2_operating_composition_and_sufficiency_result_2026-08-09.md` | v4 — INS-G2 — Operating Composition & Sufficiency — GATE-2 RESULT (R1) | markdown_doc | architecture_reconciliation | insurance_payer_oop, d6_commerce, care_operating_model, clinical_memory, rbac_authority, federation, cns_coordination, accountability_architecture, architecture_governance, cross_cutting | analysis_nonbinding | active | consult_if_routed | Gate-2 result under Gate-1b §13.3's fourteen outputs; R1 after Knox NOT-ACCEPTED review; builder verdict `SURVIVES_WITH_NAMED_RECONCILIATIONS`; discharge incomplete; provisional pending C3.9 and `E2`; nothing promoted

**Read-graph disposition:** **route update to `9p`, not a new node.**

**Provisional items:** catalog row + read-graph update — drafted, **not landed**. Owner **`PRESPINE-PHASEA-INTEGRATOR` (VACANT)**; gate `user_knox_required`.

---

## §20 — Is Insurance a cousin? — the cross-cutting finding, and where it belongs (R2)

**This section exists because the operator asked a question the arc could not answer from inside itself, and the estate had already answered it twice without either arc noticing.**

### §20.1 The answer: yes, and the estate said so twice
**C4.6 §0.5** answers the identical question form for pharmacy, verbatim: *"is pharmacy just another version of fulfillment? is it distinct? a cousin of ordinary vendor supply?"* — **"the answer is cousin: shared substrate, specialized profile — neither a silo nor a twin."** Its stack: GCE (shared, ratified) → counterparty participation/capability profiles → distinct native lifecycles → adapter family + connection instance → projection owning no truth. Its ruling: *"Pharmacy is NOT a new OMNI-owned unified lifecycle or truth-owning domain… OMNI composes a profile over the shared exchange and does not absorb it."*

**Gate-1b's Axis 2 reached the same shape:** a **first-class composed operating profile** over source-native owners and generic GCE, owning no source truth.

**R3 correction (Knox R3-02, accepted).** R2 called this *"two arcs, no contact, identical verdict."* **That claim is withdrawn and it contradicted this file's own §0.7**, which records that Gate-1b's estate matrix cited the Care capture — so the Insurance arc had partial inheritance available. The accurate description is **cross-arc recurrence under incomplete propagation**. That is weaker as independence evidence and **stronger as an operational finding**: the estate can locate the right pattern and still fail to make it usable by the next builder.

**R3 correction (Knox R3-03, accepted).** R2 put Insurance, Pharmacy, labs/diagnostics, vendor supply and "any future external-counterparty loop" into **one** cousin family. **Too broad, and it would become the next god-model.** Cousinhood is dimension-specific, and one loop may instantiate several patterns at once: a lab is simultaneously an external counterparty, an evidence producer whose result may or may not reach clinical adoption, an order fulfiller, a professional interpreter and a regulated facility; a lender is an external counterparty and commitment issuer and **not** an evidence-to-adoption loop at all.

**What survives, narrowly:** **Insurance and Pharmacy are cousins on the external-principal-participation dimension** — shared substrate GCE + native lifecycles + adapter/connection + projection; specialized profile differing only in its authority/regulatory content (pharmacy: prescriber authority, prescription lineage, pharmacist refusal, substitution envelope, licensure, controlled substances · Insurance: coverage relationship identity, funding conditions, benefit interpretation, determination and appeal, financing arrangement, patient responsibility). **That single-dimension claim is what C4.6 §0.5 and Gate-1b's Axis 2 both support. The multi-dimension family taxonomy is NOT authored here** — it belongs to the work at §20.3 and would be exactly the kind of on-the-fly ontology this arc keeps producing.

**And note what is *not* a cousin family:** authority, consent, time and partial order, provenance, correction, uncertainty, portability, economic-influence separation, proof and responsibility lineage are **cross-cutting axes every profile passes through**, not another loop group. Two things appearing in one patient journey does not make them homologous.

**This still raises confidence in Axis 2 and shrinks Gate 2's job:** not *invent a mixed-financing architecture*, but *inherit the shared substrate and specify only the financing profile.* Most of §1's four strata are inherited substrate, not Insurance's invention — which is why §5's row drive found no new truth-owning object.

### §20.2 Why the underlying physics is worth finding at all — the operator's existential question, answered without mysticism
*Doesn't Palantir just ingest everything and link it up? Isn't that the pattern?*

**That is genuinely the pattern for legibility, and it is not the pattern for law.** An ontology makes a domain *representable and operable*. It does not tell you that a payer's equivalence claim may never reach clinical adoption, that a stock-out is a readiness state and not an inadmissibility, or that a coverage denial must not erase a recommendation. **Those are not derivable from the data model — they are invariants that must be supplied.** Care §19's ratified `[INV]` is exactly this: a generic ontology can *configure toward* the composition and cannot *supply* it.

So the physics buys three specific things, and they are the 1BN/10BN argument stated plainly:
1. **Loop N gets cheap.** If Insurance is a cousin, the fifth and fortieth external loop inherit the substrate and specify only a profile. **That is the compounding**, and it is why "is this a cousin?" is a commercial question, not a taxonomic one.
2. **Loop N gets safe.** A violation of a cross-loop invariant is *invisible in the schema* and *catastrophic in care*. Physics is what makes the violation detectable at build time — which is precisely what a conformance gate like `C6` or `C12` is for.
3. **The substrate survives substitution.** Models, rails, vendors and even ontologies change. What must remain true across all of them is the constitution. **That is the moat sentence the estate already ratified, and it is the one claim that does not depend on any incumbent's current capability.**

### §20.3 The mechanism is not missing and is not ours to mint — **it is OMNI Reactor, it is named, it is frozen, and its ratification run is BLOCKED**

**R2 proposed a "Homology Obligation." That proposal is WITHDRAWN. Knox independently proposed a two-level "cross-loop archetype registry + per-profile declaration" and named SEI product-line variability, FHIR profiling, IHE integration profiles and AWS lenses as the established disciplines. That is also a re-derivation.** The estate already carries the candidate, under a name, with ratification gates, and with a successor run chartered to test it.

**Verified at `04_manifest_read_graph.md` route `#9g` and spine watch item `WI16`:**

> **`OMNI Reactor` = `candidate_spine_doctrine` · named · non-ontological · UNPROMOTED · FROZEN** — OMNI's **risk-adaptive intent-to-consequence constitution**: **8 invariants** (beginning **`admissibility-before-consequence` · `domain-owned commitment` · `accepted custody`**) + **5-layer ownership** (*domain owns authoritative state · principal the duty · committer authority · actor custody · OMNI enforces continuity and proves the chain*) + care-first preamble + neighbor boundaries + **compiled-not-deployed** (*NOT a domain/plane/object — an overlay; do NOT mint `omni_reactor`*) + **firewall authority, NOT legislate liability** + **Reactor (doctrine) / plant (product) / grid (network)**.
> Home: `EVRUN-2026-000007` `_05 §I.13–§I.15` + closeout `_06`. *"THE DOC IS THE HOME — do NOT relitigate or re-expand"* (frozen 2026-07-16).

**Three things follow, and they are the reason this section exists.**

**(1) `admissibility-before-consequence` is Reactor invariant #1.** The same law is therefore written in **three** places: Reactor invariant 1, Care §5b's four-projection admissibility, and R1's re-derived "execution admissibility." **Three statements of one law, none aware of the others.** That is no longer a Care-inheritance story — it is the strongest available evidence that the constitutional layer is real and unrouted.

**(2) Reactor's ratification gate (2) already specifies the adversary Knox proposed from scratch.** Verbatim: *"an **independent standards-native adversary** (pre-registered rubric · **FHIR-Task/RequestOrchestration + NCPDP + TEFCA + Epic + workflow baseline** · Builder → independent-Adversary → separate-Adjudicator · **no predetermined OMNI-winning answer**)."* Six gates exist: doctrine dedup · the standards-native adversary · one runtime seam · three contrasting traces · measured operational outcomes · legal/governance review. *"Evidence — not eloquence — changes the candidate."*

**(3) ★ R3-CORRECTION (2026-08-09, factual — this claim was FALSE and is retracted).** R3 asserted that `EVRUN-2026-000008` was *"proposed-BLOCKED"* and that the operator decision was whether to **unblock** it. **That is wrong.** The claim was taken from spine watch item `WI16`'s index row and **not** from the run's own terminus. Verified at `EVRUN-2026-000008_04_final_closeout_and_handoff.md`:

> **`EVRUN-2026-000008` is `analysis_closed · adjudicated_nonbinding · R3 · NOT promoted`, closed 2026-07-18.** Builder (Opus) **63.2** / fresh incumbent-native Adversary (Gemini) **47.0**; **31/31 conformance fixture GREEN**, `tsc` and `eslint` clean. Verdict **R3 — cross-authority continuity residual**, survived a standards-native adversary. **R4 unavailable** (no external party has accepted or acted on the semantics). Reactor **strengthened and narrowed, not promoted**; naming gate **OPEN**.

**The ratification run RAN. There is nothing to unblock.** The recommendation built on that premise is withdrawn.

**Two findings survive the correction, and both are sharper than the error:**
- **`WI16` — the artifact that says *"this is the durable home so they are not trapped in `_06`"* — is itself carrying stale state about its own successor run**, three weeks out of date. A durable home with stale content is the `D0CKPT-GRD-004` failure class at the watch-list layer.
- **The terminus anticipated this exact mistake in its own header:** *"The next agent should read THIS terminus first, not infer closure from an index row."* I inferred from an index row. **The warning was written and unrouted, which is the same disease one level down.**

**And the estate has already ruled on what comes next — `EVRUN-000008 §10`, verbatim:** *"Do **NOT** reopen this conceptual arc to 'understand Reactor better.' … Absent one of those, the next move is not more Reactor analysis — **it is the outer v4 sequence**."* Reopen conditions are narrow: an external event breaking an invariant · the one-pharmacy-seam pilot producing measured results · an implementer objectifying Reactor · **or explicit Nick + Knox direction**. **§9 names the required next evidence: ONE external pharmacy seam** with a full failure-injection set and measured metrics. **§12: *"Reactor earned a stronger reason to exist, not permission to become a thing. The next proof must happen in the world."***

**So the honest state is:** the constitution was identified, named, frozen, adversarially tested and closed — **and then no arc routed to any of it**, so Pharmacy, the moat doctrine and Insurance each re-derived pieces. **Insurance is the third convergence.** The estate's rule remains *"a signal to TEST, not adopt"* — and the test it names is a real external seam, not another conceptual pass.

**What maps and what does not — stated precisely, because "Reactor covers it" would be the next overclaim.**

| Knox's level | Closest existing OMNI object | Honest maturity |
|---|---|---|
| **Level 1 — the shared constitution** (what recurs, what is invariant) | **OMNI Reactor** — 8 invariants + 5-layer ownership, non-ontological overlay | **exists · named · FROZEN · UNPROMOTED · 6 ratification gates unrun** |
| **Level 2 — per-profile inheritance/variance declaration** (what each loop inherits, specializes, refuses, leaves open) | **Care §19 homology matrix + §1b `U/C/A` crosswalk** — the closest thing, and it is an analytic table inside one loop's REVIEW-DRAFT capture with three columns | **thin · Care-internal · genuinely under-built** |

**Level 1 is not missing. Level 2 largely is.** That is a much smaller and more tractable statement than either R2's or Knox's, and it is the one supported by the repository.

**Naming.** The operator asked for a name that is memorable and owned. **It already exists and it is his: Reactor (doctrine) / plant (product) / grid (network).** No new name should be minted, and specifically not "Homology Obligation," "archetype registry" or "Pattern Inheritance and Variance Declaration" — that is the seven-labels failure at the constitutional layer.

**Home.** Knox guessed the architecture-memory control plane. **The repository already answers it differently:** Reactor's declared home is `EVRUN-000007 _05`, its routing is `#9g`, its surfacing obligation is `WI16` under the spine disposition gate, and its disposition preview is **`v4-spine-delta`**. **It lands in the spine.** That is also exactly what the operator said it was for.

**What Insurance does with this: nothing but record it.** Gate 2 does not adopt Reactor, does not populate Level 2, does not author an Insurance profile declaration, and does not unblock `EVRUN-000008`. **Insurance's entire contribution is to be counted as the third convergence signal and to say so where the next arc will see it.** Attempting the constitutional work inside an Insurance gate is precisely the *"strap it on backwards"* failure this section documents.

**The operator decision this surfaces — corrected.** It is **not** "unblock `EVRUN-000008`"; that run is closed. It is narrower and harder: **the estate's named next proof is one external pharmacy seam under failure injection (`EVRUN-000008 §9`), and its standing rule forbids another conceptual pass (`§10`) except by explicit Nick + Knox direction.** Any "kernel/profiles" foundation transaction is therefore an operator decision under `§10(d)` — permitted, but against the estate's own stated next move unless it is scoped to **instantiation** (a home, a name, routing, build-entry obligation) rather than **re-derivation**. **Not started, not authorized here, and explicitly not Insurance's to start.**

### §20.4 Why this recurred for six months, answered mechanically
Two independent routing defects, both verified:
- **Route `9p`** (the Gate-2 read floor) routes the Insurance chain only, so Care §5b never entered the packet.
- **Route `#9g`** (Reactor) is `consult_if_routed` and no arc's read floor routes to it — so the constitutional candidate is invisible unless you already know it exists.
**A frozen candidate with no inbound route is indistinguishable from a candidate that does not exist.** That is `GRD-043` at the constitutional layer, and it is the same disease as `D0CKPT-GRD-004` (boot surfaces) and the Comparator Registry's founding rationale — each solved for its own surface, none solved generally.

**One comparator gap worth recording rather than fixing here:** `comparator_analogy_registry.md` carries **FHIR/HL7/DICOM/LOINC as a payload-standards comparator** — *"standards alignment; structured lab/imaging ingestion."* **It does not carry FHIR *profiling* as a commonality/variability mechanism**, nor IHE integration profiles, nor SEI product-line variability, nor platform-plus-lenses. So the operator's *"we've mentioned FHIR numerous times"* is true and precisely explains the six months: **we compared against FHIR's content and never against FHIR's method.** Routed to the comparator registry as a named gap; **not authored here**, because the registry is a shared surface and Reactor gate (2) already owns the standards-native comparison.

### §20.4 What this does not license
No new domain, no new object, no new registry minted, no Insurance ownership of Care's admissibility model, no reopening of C4.6, and no change to the Gate-2 verdict. **§20 changes what Gate 2 claims to have discovered, not what Gate 2 concluded.**

---

## §21 — STOP RECEIPT

| Field | Value |
|---|---|
| **Work package** | `INS-G2-OPERATING-SUFFICIENCY` — Gate-2 construction and pressure |
| **Branch** | `cursor/ins-g2-operating-sufficiency-30f4`, R0 at `dd72771`, R1 this commit |
| **Boot Freshness Check** | **PASS** — both surfaces name the 2026-08-09 checkpoint; `check-checkpoint-pointer.mjs` exit 0 |
| **Governing contract** | Gate-1b §13.3 blob `2e6a423c…` — byte-identical at HEAD |
| **Files added / modified / deleted** | 0 / **1** / 0 — this file only |
| **Shared control-plane surfaces** | **0 touched** |
| **Contracts / schemas / migrations / code** | **0 touched** |
| **Minted** | **nothing** — no law, domain, owner, object, graph, lifecycle, vocabulary, guardrail or eighth firewall name. `MFP-1…4` are profile-local stratum labels, deliberately not architecture planes |
| **Knox R1 patches** | **11 accepted in full · 2 corrected back** (§0.6) — the Palantir replacement over-reads its own primary source; the conformance-contract category is re-based onto C4.6's existing gate pattern |
| **New findings this pass** | **O-1…O-8** (§0.5), of which `C6` (O-1) is the most consequential |
| **Fourteen §13.3 outputs** | 14 sections present; **discharge incomplete and labelled per trace** |
| **Deployment claims** | **NONE** |
| **External-evidence claims** | **NONE promotion-grade.** Military citations are from a **superseded** edition and say so |
| **Independent adversary** | **NONE.** Knox's review is standing-reviewer review, not `E2` |
| **Unresolved** | R-1…R-8 (§16.1) · A-Q14a/b/c, A-Q16, A-Q17 · burden incidence · B-Q1–B-Q5 · the §11.1 strict-reading question · JP 1 Vol 2 re-verification |
| **Checkpoint tier** | **2** |
| **Work posture (§2.1)** | `durable_lane` · `lane_key` `INS-G2-OPERATING-SUFFICIENCY` · `lane_owner_or_transfer` Opus (Cursor), no transfer · `lane_state` `review_ready_pending_integrator` · `reentry_source_ref` this file + the 2026-08-09 checkpoint · `worktree_path_posture` environment-local, recreatable, non-canonical. **Two-reference boot NOT in effect**; no base pin emitted |
| **Integrator** | `PRESPINE-PHASEA-INTEGRATOR` — **VACANT**; no shared surface landed |
| **Next gate** | **Operator-controlled. Nothing auto-starts.** Eligible: Nick + Knox review of R1 · the integrator transaction (§17/§18) · C3.9 population · `E2`, which runs **last** |

**STOP: `gate_2_result_r1_constructed_provisional_pending_c3_9_and_e2 · review_ready_pending_integrator`**

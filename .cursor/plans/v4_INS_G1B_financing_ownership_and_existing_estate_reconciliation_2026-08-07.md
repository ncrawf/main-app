# v4 — INS-G1B — Financing Ownership & Existing-Estate Reconciliation

Document type: `analysis` / `architecture_reconciliation` (Gate-1b ownership pass; **not** a contract, **not** a schema, **not** spine prose, **not** a new truth-owning domain)
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing. Proposes routing only.
Status: `gate_1b_analysis_reconciled_r2 · pending_nick_knox_review · not_promoted · not_integrated · no_contract_mutation · no_implementation · no_shared_surface_written · nothing_renamed`
Domain(s): `d6_commerce` · `federation` · `care_operating_model` · `clinical_memory` · `rbac_authority` · `identity` · `cns_coordination` · `bizops_workforce` · `settings_catalog` · `documents_consent_media` · `accountability_architecture` · `architecture_governance` · `cross_cutting`. **No new domain is proposed.**
Lifecycle role: reconciles the Gate-1a candidate laws `F1–F7` against the **actual committed OMNI estate** — who owns the authoritative writes, what dissolves, what needs a seam or policy, what remains unresolved, whether any shared financing **truth substrate** is justified, and what **operating composition** is nevertheless required.
Source-of-truth relationship: consumes read-only. Amends nothing. The Phase-B raw is **source**; the Gate-1a adjudication and handoff are **derivative interpretation**; where wording differs, **the raw wins** and this carrier cites the raw.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** (catalog row + read-graph evaluation owed at the integrator transaction — §13, **not landed here**).
Review gate: `user_knox_required`

Lane: `INS-G1B-OWNERSHIP` · Parent arc: `INS-G0-MIXEDFIN` · Read order: **Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → this**

> **★ REVISION HISTORY.** **R0 (`8c9d818`)** was authored before four commissioned reconnaissance reports returned and before four load-bearing primary sources were read. **R1 (`59cc477`)** applied Knox's first full-carrier byte review: eight blocking defects, four of them factual errors of mine, all verified and retracted (§0.5). **R2 (this)** applies Knox's second full-carrier review, which passed the factual reconciliation but **failed architectural sufficiency**: the carrier was turning *"no shared truth owner"* into *"no shared financing architecture,"* and under-modelled the positive thing OMNI must become. R2 splits the verdict onto **two axes**, decomposes F3/F4 by **actor capacity** rather than operator-only, restores **derived ≠ ownerless**, replaces the coverage-scope **binary with four layers**, splits **custody from substantive commitment**, makes Accountability admission **threshold-based rather than noun-based**, adds a **future-regime stress matrix**, rewrites the positive architecture as a **governed continuity function**, and — on operator recovery instruction — **recovers the economic-firewall lineage rather than minting an eighth name for it** (§9).

---

## §0 — REVIEW OBJECT POSTURE

### §0.1 The three refs — all verified, no mismatch

| Ref | Value | Verified | What it is |
|---|---|---|---|
| **CONTROL PLANE** | `main @ d592e402b779aaedc1f137189bf51cd2b5ca678d` | ✅ exact | Committed control-plane state. `AGENTS.md` and read-graph Tier-0 #15 both name `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`. **They agree. Internally consistent. NOT "fixed" by this lane.** |
| **GATE-0 WORKING INPUT** | PR #4, head `2aabed770eda9ec8164efaf0c5626816b85ca224` | ✅ exact | `v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` (1,245 lines) |
| **GATE-1A WORKING INPUT** | PR #5, head `671d120fd79c7b55325cf6e998646c02ead45f0f` | ✅ exact | protocol (898) · Phase-A raw (1,111) · Phase-B raw (1,007) · adjudication (171) · handoff (158) |

PR #5 branches directly from `main @ d592e40`; five added files, zero deletions. **PR #4 branches from `f70ff3c`, an older `main`**, so its diff against current `main` shows ~575 apparent deletions across doctrine surfaces — those are control-plane commits (`7da3b2a`, `d592e40`) that landed *after* PR #4 branched, **not proposed deletions**. PR #4's true contribution is one added file.

### §0.2 Current-state vs working-packet

`main` is committed control-plane state; at this ref the checkpoint still represents `INS-G0-MIXEDFIN` as the single active Phase-A lane, correct-as-of-`main` and not repointed here. PR #4/#5 are newer **unmerged** working inputs; newer ≠ promoted, canonical, landed or implemented. Older `main` does not invalidate them. **Gate 1a happened.** Everything remains `analysis_nonbinding`; this carrier inherits that posture.

### §0.3 Source posture — strict depth labels

Depth vocabulary: **read fully** (every line) · **read load-bearing sections** (named sections read in place; remainder not read) · **consulted** (specific passages verified in place) · **searched** (pattern-located) · **not inspected**.

Architecture reads used a pinned disposable worktree at `d592e40` with the PR packet at exact heads; code/migration reads used the working tree at branch head, where `supabase/` and `lib/` are identical to `d592e40`. The developer worktree carries ~22 pre-existing uncommitted modifications from an unrelated lane, all under `.cursor/plans/doctrine/` and `.cursor/plans/HANDOFF_*`; **those files were read via `git show d592e40:<path>`, never from the dirty tree, and were not modified by this lane.**

**READ FULLY — working packet:** Phase-B verbatim (1,007 lines, first action) · Phase-A verbatim · Gate-1a adjudication · Gate-1a handoff · Gate-0 carrier (1,245, three passes).

**READ FULLY — governing estate:** `doctrine/omni_enterprise_posture_2026-06-03.md` (the ratified GCE source; **Tier-0 boot-visible, `agent_read_rule: tier0_mandatory`**; R1) · `contracts/D6_commerce_contract.md` · `contracts/federation_contract.md` · `v4_C4_3_care_response_seam_correction_continuity_test.md` · `v4_C3_7F_disposition_gap_matrix.md` (R1).

**READ LOAD-BEARING SECTIONS:** `v4_C4_governed_reporting_resolution_capture.md` §0–§11, §17–§23 (**§§12–16 not read**) · `contracts/clinical_memory_assertion_contract.md` §1.5–§5.1 · `v4_REV184_...md` §0 + §1/§2 (read-order guard obeyed) · `v4_C4_6_..._2035_conformance.md` §0.5/§1/§4/§5/§6/§11 · `v4_C4_5_..._pass_plan.md` §0–§6 incl. T-01…T-22 · `v4_C4_residual_moat_..._doctrine.md` §11–§12 · `contracts/business_ops_workforce_contract.md` §3 · `contracts/settings_catalog_contract.md` §3 · `v4_pre_spine_sufficiency_..._2026-08-04.md` §1/§4.3/§7.1 Card 2/§11 · `v4_C4_spine_watch_list.md` disposition gate + WI2/WI8/WI14/WI15/WI17 (R2).

**READ FULLY — implementation (SQL and TS bodies read directly):** all five insurance-touching migrations end to end for the relevant blocks — `20260504120000` (`patient_insurance_details` DDL L484–500; §20 RLS/append-only L502–557) · `20260505120000` (`patient_column` L309–; insurance-details L478–) · `20260506120000` (`patient_scoped_tables` L136–152; `source_aware_tables` L167–183) · `20260507120000` (`patient_column` L351–357; insurance-details L545–) · `20260508120000` (`payer_eligibility_documents` DDL L322–390; routing RPC L486–555) · `lib/intake/question-bank/universal/insurance_payment_readiness.ts`.

**CONSULTED (R2 additions in bold):** `v4_C4_care_operating_model_capture.md` (L134/170/171/191/192/259/270/271/350/351/354/401/447/450/455/461/487, verified verbatim) · `v4_C3_7G_handoff_and_verdict.md` L15/24/56/59/76 · **`v4_C3_5F2_superiority_and_primitive_sufficiency_matrix.md` — the `payment_care_firewall` evidence set (SUP-012, 241, 301, 367, 452, 461, 462, 481, 489) + the **P17** primitive row L631** · **`v4_C4_late_builder_gap_register.md` rows L, P, V6, E4, AR-C37, PX9** · **`v4_C4_1_omni_polaris_product_surface_and_alignment_core.md` L64** · `01_master_corpus_catalog.md` · `future_work_registry.md` FWREG-009 · `03_decision_extraction_ledger.md` `DEC-036`/`DEC-027`/`DEC-028` · **`08_open_review_queue.md` REV-141/157/159/160/**185 in full**/187** · `05_supersession_conflict_ledger.md` (GCE↔GRR: **no row**) · `system_map_three_layers_60706286.plan.md` L1016/1090/1119/1124 · `omni_doctrine_reconciliation_map_v1_2026-05-25.md` §G2F Q-DL17.

**SEARCHED:** `financing_arrangement` · `CareCredit` · `Cherry` · `Allē` · `Aspire` · `GreenSky` · `lender` · `installment` · `sponsor_site_contract` · `participation_agreement` · `contracted_rate` · `agreement_id` · `mutual` · `bilateral` · `terms_version`; the two insurance tables across `supabase/`, `lib/`, `app/`; `has_insurance|insurance_carrier|self_pay_willingness` across `supabase/` (**zero hits**); `revoke update on public.patient_insurance_details` (**zero hits**); RLS policies on that table (**one, SELECT only**); **`payment_care_firewall|recommendation.integrity|economically.blind|econ.blind|accrual.blind|retention.blind|economic.*firewall` across `.cursor/plans/**` (R2 — 70 files hit; the lineage is at §9)**.

**NOT INSPECTED — named:** `v4_C3_7A–E` bodies (F read fully, G consulted) · Accountability/GRR **§§12–16** · `HANDOFF_2026-07-12_wave4_...` in full (GRR naming lineage verified through the capture passport, catalog row, FWREG-009, WI14, Card 2 instead) · `v4_C4_2B`/`2C` · `v4_C4_platform_loop_capture.md` beyond sibling-boundary refs · `v4_C3_8_G4_disposition_ledger_and_handoff.md` (the five data-value loops — **a real limit given §9**) · `contracts/CNS_orchestration_contract.md`, `identity_contract.md`, `rbac_authority_contract.md`, `D7_*`, `D5_*`, `observation_*`, `intake_contract.md`, `messaging_contract.md`, `ordered_fulfillment_contract.md` in full · `DL-17`/`DL-19`/`DL-21` · the full legacy three-layer map · `ingestion/` bodies except cited hits · the TS write paths line-by-line · off-repo `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`.

**Environment limitation (`D0OPER-DEC-004`).** Off-repo controlling plan not inspected; relied on in-repo `AGENTS.md` + read-graph #15, which agree. No claim about its contents.

### §0.4 Inspection radius

All absence claims are scoped to **`.cursor/plans/**`, `supabase/migrations/**`, `lib/**`, `app/**` at `d592e40` plus the two PR heads**, by the patterns in §0.3. "Not found" means *not found in that radius by those patterns*, never "does not exist in OMNI." **R0 violated this twice (§0.5 C1, C4); both retracted.**

### §0.5 — CORRECTION RECEIPT (R1 + R2)

**R1 corrections (all retained).**

| # | R0 claim | Status | Adjudicating primary source |
|---|---|---|---|
| **C1** | `patient_insurance_details` has no tenancy columns / is accidentally person-scoped | **FALSE — RETRACTED** | `20260506120000` L144 `patient_scoped_tables` adds `org_id`, `brand_id`, `data_environment` + index |
| **C2** | Provenance is weak — `verified_by_user_id` only | **FALSE — RETRACTED** | same L175 `source_aware_tables` adds the same 10-value `source_kind` + `source_id`; `20260507120000` L545–549 populates them |
| **C3** | Designed for in-place mutation, structurally available to `authenticated` | **HALF-FALSE — NARROWED** | RLS enabled; only policy is `pid_staff_read` (SELECT) → UPDATE denied by default. Absence from `revoke update` is a **design** signal, not an authority grant |
| **C4** | Routing RPC writes `source_kind='patient_self'` | **FALSE — RETRACTED** | `20260508120000` L554 hardcodes `'intake'` |
| **C5** | Two implementation surfaces | **INCOMPLETE** | a third exists: three `patient_column` emissions through a dynamic `UPDATE public.patients SET %I`; target columns absent from `supabase/` |
| **C6** | GCE's four-way classification is "strictly finer" than assertion-vs-commitment, so H-N2 closes | **CATEGORY ERROR — RETRACTED** | orthogonal axes: epistemic status vs speech-act kind |
| **C7** | GCE assumes OMNI initiated the exchange | **FALSE — RETRACTED** | ratified posture: "**emits to and ingests from** any actor/system — internal and external"; "**Two faces, one spine**"; subfamilies **name "administrative (insurance/prior-auth/billing/claims)"** |
| **C8** | F3 is a genuinely unowned authoritative lifecycle | **OVER-CLOSED — DEMOTED** | C4.3 Law 10.1 is itself a governed reconstruction that commits nothing |
| **C9** | F7 fully inherited; one rationale-class value | **OVER-COMPRESSED** | REV-184 §2 item 3 names it a **gap**, field-set deferred to C5 |
| **C10** | F5 is inherited projection discipline | **NARROWED** | no mixed-financing composition rule exists |
| **C11** | "No new domain, owner, object, lifecycle or interface" | **TOO BROAD — REPLACED** | the carrier's own exceptions contradicted it |
| **C12** | C3.7 unread; a bilateral-agreement carrier may hide there | **RESOLVED** | C3.7F §1 row 19 + §2.6 + §5; C3.7G L24 — `EXTEND` → D6 |
| **C13** | REV-184 passport contradicts its body | **RECLASSIFIED** | authority/maturity split |
| **C14/C15** | Accountability over-claim + "GRR retired" | **RETRACTED** (never entered `8c9d818`) | capture §3 scope invariant; §23 name not locked; FWREG-009/WI14/Card 2 still GRR |

**R2 corrections (this pass).**

| # | R1 claim | Status | Basis |
|---|---|---|---|
| **C16** | One-axis verdict `NO_SHARED_FINANCING_SUBSTRATE` | **SPLIT ONTO TWO AXES** | The R1 qualifier already listed six composing elements — that is an operating-composition verdict, not a truth-ownership one. §14 |
| **C17** | F1's "the common row would often be empty" as a load-bearing argument against a shared constitution | **DEMOTED to a side observation** | Sparse representations preserve absence by no-record, non-applicability, or no-active-projection. The decisive rejection is **correction/authority divergence**, which stands on its own. §3-F1-H, §4.1 |
| **C18** | F3/F4 incidence is "organization-owned, emphatically not person-following"; whole law routes to OPECON | **ACTOR-DECOMPOSED** | The raw says "**at least one actor's** resource position" — not the operator's. Patient, lender, payer/risk bearer, sponsor, public program and facility slices were lost. §3-F3, §3-F4 |
| **C19** | "The composed statement has no owner because it is not truth" | **WITHDRAWN** | Derived ≠ canonical, but derived ≠ **ownerless**. C4.3's own correction-impact assessment owns no source truth yet has a governed record, version, execution owner and lineage. §3-F5 |
| **C20** | Coverage identity is a person-scoped vs tenant-scoped binary | **REPLACED WITH FOUR LAYERS** | The foreclosure is **collapsing** the scopes, not picking a side. §7.5, §8.2 |
| **C21** | A-Q1 as one "accepted-custody / accepted-commitment carrier" gap | **SPLIT** | custody acceptance and substantive commitment have different authority, expiry, breach, reliance, remedy and correction laws. A-Q1a / A-Q1b |
| **C22** | Accountability table marking event types categorically "No" | **REPLACED WITH A THRESHOLD LAW** | No event is admitted by noun. A denial may itself carry a mandatory notice, appeal-right communication, deadline, continuity duty or remedy. §5.5 |
| **C23** | "The thing OMNI must own is preservation, not a better claims engine" | **UNDERPOWERED — REWRITTEN** | Preservation is necessary and is not a product. §8.3 states the governed continuity function, marked as a **Task-D hypothesis, not a proven moat** |
| **C24** | Residual matrix is 2026-transactional | **EXTENDED** | Ten future-regime rows added; the verdict was better proven against claims-era objects than against risk-bearing care. §8.4 |
| **C25** | `REV-185` treated as a "priority raise" | **RECOVERED AS LINEAGE, NOT MINTED AS A NEW LAW** | On operator instruction the firewall lineage was traced: **three distinct laws under seven labels**, and the late-builder gap register **row P** already prescribes `elevation`. Minting an eighth name would be the error. §9 |

**On the four reconnaissance reports.** Commissioned before authoring; **they have still not returned to me at R2.** Knox holds them. Every correction above was adjudicated against a primary repository source read directly — which is why C3, C5 and the whole of §9 came out sharper than any relay described. **No claim in this carrier rests on a helper report.**

**Standing self-finding.** `omni_enterprise_posture_2026-06-03.md` is `agent_read_rule: tier0_mandatory` and I did not read it at boot, reaching GCE through a nonbinding artifact instead. That boot-compliance failure is the root cause of C6 and C7.

---

## §1 — PHASE-B ANCHOR (source pointer + exact anchor; not a rewrite)

**Source:** `v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` @ `671d120`, fenced verbatim block, **"2. Final candidate physics"** (L304–618) and **"5. Final competing decompositions"** (L675–797). Read in full as this run's first action. **The raw is source; the adjudication table is derivative and loses precision on F1, F3 and F7.**

### §1.1 F1–F7 precise law + classification receipt (quoted)

| | Precise law (raw, verbatim) | Epistemic class | Normativity | Inheritance class | Altitude (raw) |
|---|---|---|---|---|---|
| **F1** | "The occurrence of care does not logically entail the prior or eventual existence of a financing entitlement, commitment, obligation, adjudication, transfer, settlement, or shared financing lifecycle." | Descriptive structural invariant | Structurally unavoidable within a scope including R12 and care-before-financing | **Genuinely new candidate** | Universal boundary physics |
| **F2** | "A willingness, entitlement, commitment, obligation, resource reservation, transfer, and settlement are not mutually substitutable merely because each may affect the same care option; any equivalence is regime-scoped rather than universal." | Descriptive structural invariant | Structurally unavoidable as non-identity; allowed equivalences constitutionally chosen | Financing-specific specialization | "Possible shared semantic constitution or seam; **not evidence of one shared lifecycle**" |
| **F3** | "When scarce care resources are consumed or irreversibly reserved before compensating resources arrive or responsibility closes, **at least one actor's** resource position or feasible alternatives change during that interval, regardless of later reassignment." | Descriptive structural invariant, **conditional on actual scarcity or counterfactual change** | Structurally unavoidable **if the antecedent holds** | "Genuinely new … **though it may ultimately belong to more general resource physics**" | **"Unresolved between universal care-resource physics and financing physics"** |
| **F4** | "A later reassignment, reimbursement, waiver, reversal, or settlement may change current legal or economic positions but cannot change **which actors** actually advanced resources or carried exposure at earlier times." | Descriptive structural invariant | Structurally unavoidable | Financing-specific specialization of inherited correction law | Universal physics |
| **F5** | "When several source positions are considered together, any combined statement of usable support or expected burden is valid only for a stated composition rule and time and does not extinguish the sources' distinct authority, scope, conditions, revocability, or history." | **Normative constitutional commitment** | **Constitutionally chosen.** Priority/compatibility/shortfall rules remain regime-specific or policy | Financing-specific specialization | "Projection/read model or regime-specific composition lifecycle. **Not proof of one shared financing interface.**" |
| **F6** | "Once a care-side event or irreversible resource commitment has occurred, a later financing change may alter future feasibility or economic and legal allocation but cannot erase the earlier care state, restore consumed resources, or recreate lost alternatives." | Descriptive structural invariant | Structurally unavoidable | Financing-specific specialization | Universal physics **at the care-financing seam** |
| **F7** | "When a care decision materially relies on a financing or resource assertion, the relied-on assertion and its source, authority, scope, relevant times, uncertainty, and material effect on the feasible care set must remain reconstructable separately from the care-side decision and rationale, subject to visibility rights." | **Normative constitutional commitment** | **Constitutionally chosen** | Financing-specific specialization | "Possible care-facing seam or decision projection; **not a financing lifecycle**" |

**Counterexamples and falsifiers** (condensed to the operative clause; full text at source lines). F1: a constitution where care necessarily creates an authoritative resource-allocation obligation / proof that "no financing lifecycle exists" is logically impossible. F2: fully atomic bilateral exchange under one authority / all regimes use one position with identical authority, time, correction, reliance and reversal semantics. F3: an unlimited instantaneous costless backstop / a case satisfying the antecedent where no actor's position differs from the no-care counterfactual. F4: complete retroactive indemnification with relation-back / a mechanism making the earlier actor's historical position identical to the no-advancement counterfactual. F5: several unrestricted simultaneous irrevocable independent transfers / all multi-source arrangements always unrestricted and independent. F6: reservation cancelled before any care decision or foregone alternative / a reversal restoring the prior care state and all lost alternatives. F7: an immediate exchange where no financing assertion affects care judgment / an arrangement preserving history, agency, conservation and accountability while letting a financing-induced feasibility change be indistinguishable from the care rationale.

**Regime × law matrix (raw §3).** F1 bends in 10 of 12 regimes (holds materially only in R2, R12). F2 bends in R1, R12. F3 bends in R1, **U in R5**. F5 is **S (regime-specific rule) in 10 of 12**. F7 bends in R1, R4, R12. The raw's gloss: *"even the surviving laws do not imply one common lifecycle, state machine, or interface."*

### §1.2 The three decompositions and their distinguishing burden (raw §5)

> **⚠ LETTERING HAZARD.** The raw labels them **1/2/3**; the Gate-1a adjudication **A/B/C**; the kickoff *verdict* menu **A/B/C in inverse order**. Below: the raw's numbering, always named by content. §4 restates the mapping.

1. **Minimal position-and-incidence constitution.** Gains support "**only if materially different regimes repeatedly require the same authoritative write, correction, and historical-incidence behavior rather than merely similar read projections**." Risk: a common position store begins interpreting rules, deciding equivalences, composing sources, assigning final responsibility.
2. **Source-native lifecycles with an attributed care-impact seam.** Gains support if care decisions consistently require a "**small, stable set of attributed assertions**" while source-native states remain unnecessary to the care actor. Risk: the seam becomes a universal care-access gate.
3. **No shared financing substrate.** Gains support if "**every surviving law can be enforced through general authority, resource, obligation, commerce, and care capabilities without any recurring shared authoritative write or stable care-impact interface**." Risk: the absent layer reappears as an analytics projection treated as truth, a manual exception process, a cross-domain workflow orchestrator, or an organisation that acquires de facto authority because it sees the most data.

### §1.3 Self-attack and invalidation condition (pointer; not paraphrased)

Phase-B **"10. Strongest final self-attack"** (L920–978): the laws may be **too abstract** (negative constraints that reject bad architectures without identifying a positive boundary — "constitutional review questions rather than 'physics'"); **over-unified**; may **merely rename familiar machinery**; may be **architecturally unnecessary**. **Invalidation condition (L979–986)** is two-sided: *too little commonality* eliminates care-financing physics as a distinct concern; *more commonality than found* means Phase-B was too minimal. **This gate tests the first limb; §4.3 records the result and its limits. R2 adds that the first limb can be satisfied for TRUTH OWNERSHIP while failing for OPERATING COMPOSITION — which is the two-axis result at §14.**

---

## §2 — ESTATE EXISTS-AS / AUTHORITY MATRIX

Maturity vocabulary used strictly: **ratified frame** · **signed-off nonbinding law** · **`draft_for_ratification` contract** · **REVIEW-DRAFT capture** · **design-validated analysis** · **candidate** · **committed implementation** · **deployment unverified**. Depth: **F** full · **LS** load-bearing sections · **C** consulted · **S** searched.

| Concept | Located object / lifecycle | Source | Authority (verbatim) | Maturity | Write owner | Correction owner | Projection vs canonical | Depth |
|---|---|---|---|---|---|---|---|---|
| **Cross-boundary exchange constitution (inbound + outbound, internal + external)** | **GCE** — `actor/represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned status classified (evidence \| observation \| proposed-meaning \| externally_committed_truth — committed in the SOURCE system, NOT OMNI-committed — BEFORE it counts)`. **"Two faces, one spine."** Subfamilies **explicitly include "administrative (insurance/prior-auth/billing/claims)."** | `doctrine/omni_enterprise_posture_2026-06-03.md` §GCE | **`governance_binding`** · **`ratified 2026-06-03`** · `D0THES-DEC-036` · `GRD-033`/`GRD-034` · **`tier0_mandatory`** | **ratified frame** (framing only; authors no schema) | external counterparty owns its own sovereign records; **OMNI owning domains commit OMNI consequence** | owning domain | "external systems are rails/processors/counterparties, **never source-of-truth owners**" | **F** |
| **Counterparty capacity separation** | counterparty-noun ≠ lifecycle; "the **capacity in which it acts**"; classification is a **tuple** | `v4_C4_6_...` §0.5 item 2 | **`proposed L2 keeper` — "NOT inherited ratified law"** | candidate | — | — | — | **LS** |
| **Composed-profile-not-domain precedent** | "**Pharmacy is NOT a new domain.** It is a composed profile across existing owners"; 13-row ownership matrix; **unified Vendor Loop rejection** | same §11 + §0.5 item 3 | `analysis_nonbinding` | design-validated analysis, L2 accepted + landed | — | — | — | **LS** |
| **What OMNI originates at an external seam** | "**The bilateral execution-obligation … is created by the parties under contract and applicable law — OMNI does NOT originate it.** What OMNI originates is narrow: the **normalized representation**, the **recognition rule**, and the **portable, canonical proof shape**." | same §6 | `analysis_nonbinding` | build-warrant hypothesis; differentiation **unproved** | — | — | — | **LS** |
| **Loyalty / brand-principal guard (Allē/Allergan, ASPIRE/Galderma)** | separate **capacity**; no data reuse without program identity/purpose/authority/consent/minimization/revocation; "Reward status … may **never** author clinical meaning … or patient eligibility"; "**No loyalty connector … is designed in this L2** — only the guard" | same §11 | `analysis_nonbinding` | guard accepted; **full loyalty/brand-permeability problem open** | — | — | — | **LS** |
| **Money, order/sale, entitlement, refund, adjustment, promo, tax, commission, attribution** | `commerce_order`/line · `entitlement` (5-state) · rail-agnostic money-state vocabulary · `commerce_order_adjustment` · promo wallet 4-layer · `authorization_for_future_charge` | `contracts/D6_commerce_contract.md` §3–§9 | `canonical` | **`draft_for_ratification`** | **D6** | D6, **additive only** (§8.7) | canonical for OMNI-side meaning; **external rail is ledger of record for movement**; app DB "a converging projection" | **F** |
| **`payment_care_firewall` — financial state never GATES a clinical act** | D6 §8.1 "Payment state ≠ care state"; C3.5-F2 primitive **P17** with nine SUP rows (012 · 241 · 301 · 367 · 452 · 461 · 462 · **481 breaker: "HOLDS; an invariant, not a setting"** · 489) | `D6` §8.1 + `v4_C3_5F2_...` L631, L68–587 | D6 `canonical`; C3.5-F2 `analysis_nonbinding` | **`covered-doctrine (invariant)`; primitive EXISTS at D6 §8.1** | D6/CNS | — | invariant | **F**/**C** |
| **Third-party payer / insurance / Medicare / HSA-FSA mechanics** | — | `D6` §10 + §12 | canonical contract, but the row is a **deferral** | **`defer (v0)`** | **none** | none | n/a | **F** |
| **Third-party consumer financing + rebate/loyalty labels** | `payment_method` = "tenant free-form label + loose `accounting_class` enum; **vendor names are LABELS**"; §2 names Allē/Aspire/Cherry/CareCredit as **tenant catalog rows** | `D6` §2/§9/§12 | canonical contract text | shape **unresolved** — `REV-160` open | D6 (as a label) | D6 | label only | **F** |
| ↳ *the more-resolved shape the open row omits* | financing = `payment_method` subtype **plus a REQUIRED `financing_arrangement`/`financing_authorization` detail object** (lender · application · approval · amounts · status · merchant fee · settlement · refunds · adapter) — "**NOT a bare `payment_method` + sub-state (too thin)**; **NOT a parallel commerce substrate**" | `omni_doctrine_reconciliation_map_v1` §G2F Q-DL17-2 (L4185/L4189), carried in **`D0THES-DEC-027`** | map `derived_nonbinding`; `DEC-027` a decision row | **candidate** — never in the D6 contract; `REV-160` unaware | — | — | — | **C** |
| **Topology, legal entity, jurisdiction, licensure, cross-operator grants** | 6-tier composite `tenant_id` · 11-axis `venue` · `legal_entity` (**liability boundary**) + `legal_entity_brand` M:N w/ `ownership_percent` · `provider_license`/`provider_credentialing` · `jurisdiction_admission_rule` · `patient_continuity_policy` · `federation_permeability_policy` · `shared_context_grant`/`visibility_grant`/`care_relationship` | `contracts/federation_contract.md` §3–§6 | `canonical` | **`draft_for_ratification`**; `REV-157` pending | **Federation** | Federation; permeability change needs **Tier-4 attestation** | canonical | **F** |
| ↳ *what Federation does not carry* | no obligor, no risk-bearing party, no reserve, no bilateral executed instrument, no contested-agreement state. Grants are **unilateral, issuer-owned, consent-gated, revocable within one deployment** | same | — | — | — | — | — | **F** |
| **Care-side truth, adoption, conflict** | concept registry · append-only `patient_clinical_assertions` · `authored_by` **locked at write** · 8-rank precedence · `status` ≠ `confidence` · `context_key` coexistence · `unresolved_conflict` · current-memory view | `contracts/clinical_memory_assertion_contract.md` §4/§5/§5.1 | `canonical` | **`draft_for_ratification`** | **Clinical Memory** (many producers, one owner) | CM; append-only, never UPDATE in place | canonical; chart columns a **projection trigger** | **LS** |
| **Care admissibility + coverage firewall** | `appropriate-but-not-covered` first-class — "**Coverage absence ≠ clinical inadmissibility**"; per plane `satisfied · unsatisfied · unknown · not-applicable · authorized-exception` **plus who owns resolving it**; "coverage/payment (**kept SEPARATE from clinical indication — firewall**)"; L170 "**Recommendation-integrity firewall (C3.7)** … structural, auditable, economically-blind, posture-invariant"; L450 "economic-pressure-can't-bend-presentation" | `v4_C4_care_operating_model_capture.md` L170/191/192/450 | `analysis_nonbinding` | **REVIEW-DRAFT capture — NOT closed**; `[INV]` candidates | capture is cross-cutting, **not a truth-owning domain** | — | — | **C** |
| **Non-fungible parallel authority planes** | "NO single universal 'final decision-maker' … the **payer** commits coverage … **OMNI coordinates + proves these planes but owns none of their truth** … **The payer does not determine clinical indication**" | same L171 | `analysis_nonbinding` | REVIEW-DRAFT | each plane's principal | — | — | **C** |
| **Obligation waiver / transfer authority** | "**waiver authority varies** … **transfer valid only on successor acceptance**" | same L354 | `analysis_nonbinding` | REVIEW-DRAFT | — | — | — | **C** |
| **Decision / stance / disagreement lifecycle** | **Governed Resolution Lifecycle** — 7 spine lines incl. **`disagreement-as-escalation`**, **`non-action-as-commit`**, **`outcome-reads-original-context`**, **`trust_horizon`**; `gate_holder_posture` incl. `external_authority_committed`; stances incl. `dispute`/`defer`/`preserve-option` | `v4_REV184_...` §0.1–§0.4 | passport `analysis_nonbinding`; body "**SIGNED OFF (Nick + Knox 2026-06-14) → `08` CLOSED**", "confirmed v4 spine-grade law" | **signed-off nonbinding law**; field-set + state-machine **deferred to C5**. Authority/maturity split, not a contradiction | **CNS** record/lifecycle/graph (**process-state, not truth**); **RBAC** gate; **CM** truth+commit; **OFC** obligations from a stance | owning authority | participant graph is a **projection** | **LS** |
| ↳ **honest rationale-class — the gap F7 lands on** | "**No field** distinguishing *why* a non-textbook-optimal action was chosen: clinical-optimal · patient-preference · **disposition/system-constraint** · futility-but-values · defensive · **resource/access-driven** · uncertainty-watchful … **ties to the firewall**" | same §2 item 3 | `analysis_nonbinding` in a signed-off law | **named delta; NOT realized** | — | — | — | **LS** |
| **Correction impact across distributed lineage** | candidate **Law 10.1** + **O1–O22** + ten-state external-custody ladder + 24/24 mutation catches | `v4_C4_3_...` §1/§5/§6/§7/§9 | `analysis_nonbinding` | **design-validated**; contract realization **OPEN**, **implementation absent/partial**, external acceptance **UNPROVEN** | each owning authority commits its own disposition | owning authority only | impact view is a **permissioned projection that commits nothing** | **F** |
| ↳ retroactive-invalidity class | **S20-B** + the §8 generalization "***authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively***", routed to C5 | same §8/§10 | `analysis_nonbinding` | design finding, **routed not minted** | — | — | — | **F** |
| ↳ named absent carriers | "external grant/operator boundary/**custody offer+acceptance** … **external accepted-custody carrier ABSENT**"; "charge/refund/adjustment/**claim** relation … **RCM/claim mechanics unwired**" (`REV-204`) | same §4 crosswalk | `analysis_nonbinding` | **gaps, named** | — | — | — | **F** |
| **Accepted duty arising from a failure** | **Accountability Loop (current working handle; legacy file/route label GRR)** — coordinator ≠ ledger · admission status ≠ disposition · **domain projection ≠ accountability overlay ≠ composed matter view** · `response_obligation` as the accountable unit with its own lifecycle + **terminal law** · optional `response_case` · multi-radius `recipient_scope` · custody/no-orphan/external-delegation laws · version-at-time · **independent closure horizons** · §17 "**Closure ≠ demonstrated prevention**" · §19 `governed_relation_assertion` **do-NOT-mint-yet** | `v4_C4_governed_reporting_resolution_capture.md` | `analysis_nonbinding`; cross-cutting **contract CANDIDATE**; "**not a truth-owning domain … not the universal task layer … not one universal object**" (§3) | **REVIEW-DRAFT capture — REVIEW-READY, provisionally stable, NOT closed.** §23 **"Do NOT lock yet: public/plane name + filename."** `GRR-TASKD-INPUT` **has not run** | Accountability owns the **overlay**; the domain keeps its own status | owning domain corrects its own truth | overlay + composed view; **owns no domain truth** | **LS** (§§12–16 unread) |
| **Temporal axes / as-of reconstruction** | **T-01…T-22**; `temporal_truth_pair` exists **in the LEGACY layer** (`REV-200`) | `v4_C4_5_...` §4/§5/§6 | `analysis_nonbinding`; all names "**PLANNING VOCABULARY**" | **`gate_0_charter_accepted · full_pass_not_started · not_promoted`** | domain history stays domain-owned (T-03) | owning domain | as-of reconstruction is a **FUNCTION, not an object** | **LS** |
| **Workforce / labor economics** | workforce, time-clock, shift, payroll/compensation, commission **payout**, **labor cost**; execution to an external embedded-payroll rail | `contracts/business_ops_workforce_contract.md` §3 | `canonical` | **`draft_for_ratification`** | **BIZOPS** | BIZOPS | canonical for the payout; D6 owns the commission **amount** | **LS** |
| ↳ *not owned by BIZOPS* | commerce sale truth + commission AMOUNT (D6); clinical truth; authority; identity; routing policy. **No receivables, liquidity, cash position, capacity-as-economic-resource, opportunity cost, or non-labor operator economics.** | same | — | — | **none found in radius** | — | — | **LS** |
| **Config / catalog / policy definition plane** | `setting` + registry + 4-tier scope inheritance; universal `catalog_item` (T0-15); `service_policy` definitions; hosted values of `federation_permeability_policy` | `contracts/settings_catalog_contract.md` §3 | `canonical` | **`draft_for_ratification`** | **Settings/Catalog** | Settings; temporal versioning | definition plane | **LS** |
| **Bilateral commercial agreement — one verified instance** | `sponsor_site_contract` / `payment_schedule` + sponsor-XOR-insurer coverage grid (CMS NCD 310.1) + double-billing prohibition | `v4_C3_7F` §1 row 19, §2.6, §5; `v4_C3_7G` L24 | `analysis_nonbinding` | **`EXTEND` → D6 candidate disposition.** Not a new Agreement owner; **not a contracted or implemented agreement lifecycle** | D6 (proposed) | D6 | — | **F**/**C** |
| **Bilateral, co-authored, CONTESTED agreement** | **Not found in radius.** Nearest: Federation grants (unilateral) · C4.6 `participation-agreement` as a **connection-instance configuration attribute** · C3.7's executed sponsor contract (**no contested state**) | see paths | — | — | — | — | — | **F**/**LS** |
| **Party-position disagreement machinery (generic)** | CM `unresolved_conflict` + fail-closed gates; REV-184 concurrent conflicting stances + `dispute` + `disagreement-as-escalation`; C4.3 `O3`/`O4`; Care discordance-preserved; Accountability §9 preserved conflict at classification level | multiple | mixed | mixed; **none contracted for financing** | per-source | per-source | — | **F**/**LS**/**C** |
| **Committed insurance implementation — THREE surfaces** | `payer_eligibility_documents` · `patient_insurance_details` · **`patients.has_insurance`/`insurance_carrier`/`self_pay_willingness` via generic `patient_column`** | §7 | migration comment: "**Routing-only shape**; full insurance-domain design … deferred" | **committed implementation; deployment unverified** | §7 | §7 | **none canonical** | **F** |
| **Economic-influence separation (the C3.7 invariant)** | "accrual/revenue/retention pressure must not bend what the patient sees as clinically appropriate … **STRUCTURAL, auditable** (the recommendation engine cannot read who/how-much pays OMNI), **not a policy** … **Generalizes `payment_care_firewall`**"; also covers the business-model constraint (OMNI may earn via SaaS/site-ops/sponsor-reporting/de-id analytics/FMV, **walled from ranking**) | `REV-185` (full row) · `v4_C3_7G` L15 · `v4_C3_7F` §1 row 31, §4 | `REV-185` **open**, owner Nick + architecture_steward | **INVARIANT asserted; "INVARIANT (not an object)"; enforcement mechanism + audit spec OWED at C4** | CNS Network-Governance (proposed) | — | structural property + audit (`ai_decision_log`/`trace_lineage`) | **C** |
| **Economics / value / incentive AXIS — the scatter diagnosis** | "who pays, who benefits, who's steered, who owns alpha, who monetizes which loop, **what incentives bend care**, what compounding is allowed … Trust (§A) + AI (§B) are named axes; **economics/value-flow is scattered even though adversaries attack it**" → carriers: C3.8 G4 5-loop data-value economy · care-neutral firewall (C3.7) · D6 · BIZOPS · WI8 · REV-201 → disposition **`elevation` (exists scattered; NOT first-class like Trust/AI)** → "spine §3b + §C cross-cutting thread (**like the time-axis**)" | `v4_C4_late_builder_gap_register.md` **row P** | `analysis_nonbinding` register | **`elevation` prescribed; not executed** | — | — | — | **C** |
| **Network formation / consortium economics** | formation ladder + **Counterparty Participation Economics Gate (Gate B)** + four N=1 bootstrap mechanisms + the "distribution-rich consortium" adversary | `v4_C4_residual_moat_...` §11/§12 | **CANDIDATE** | candidate; L0 arc | — | — | — | **LS** |

**Terminology rule.** First use: **"Accountability Loop (current working handle; legacy file/route label GRR)"**; thereafter **"Accountability/GRR capture."** The capture's internal sentence *"GRR / Response Fabric / Integrity Loop retired"* is **scoped to the working-handle comparison inside that capture** — §23 forbids locking the public/plane name, and **FWREG-009** (title and promotion target both GRR), **WI14** ("Governed Reporting & Resolution / Accountability Loop"), and pre-spine **Card 2 `GRR-TASKD-INPUT`** (output `v4_taskd_input_state_receipt_grr_2026-08-04.md`) all still carry GRR. **This carrier does not declare GRR retired and renames nothing.**

**Contradictions preserved.** (1) **`REV-160` is stale relative to `DEC-027`** — a claim that "OMNI has no financing-arrangement representation" is false; so is "OMNI has a `financing_arrangement` object." (2) **Accountability/GRR naming is inconsistent across accepted surfaces** — the catalog propagated the "retired" phrase while FWREG-009/WI14/Card 2 keep GRR, and Card 2 mixes both internally. Conflict row proposed at §13; **not an Insurance question.** (3) **`consequence_assessment_event` appears in two captures** (Accountability §6a and C4.3 §2/§10, the latter flagging dedup at C5). (4) **NEW (R2): the economic-firewall concept carries seven labels across the estate for three distinct laws** — §9.

---

## §3 — F1–F7 RECONCILIATION

### F1 — Care does not entail a financing lifecycle

**A.** Source law at §1.1. *(Raw precision: this is about the **existence** of a lifecycle, not financing being **unknown**; M15 adds "absent financing lifecycle vs unknown, deferred, or disputed.")*

**B. Inheritance.** Strongly represented; **contracted on one side only.** D6 §8.1 (`payment state ≠ care state`, and a payment failure "**NEVER by itself** ends/voids a `care_program`"); D6 §8.2 (`commerce ≠ care_commitment`); Care L192 with the **`not-applicable`** per-plane value — the exact representation F1 demands, distinct from `unknown`.

**C. Owners.** No single owner, correctly. Care owns occurrence and indication; D6 owns whether an order/entitlement/payment exists; **neither infers the other**, by contract invariant.

**D. Authoritative-write test.** **No new lifecycle.** F1 is a prohibition on inference. **Named asymmetry:** contracted D6 invariant, REVIEW-DRAFT capture on the Care side; enforcement runs from one direction. Owed at C5: a symmetric Care-side statement, and preservation of the `not-applicable`/`unknown`/`unsatisfied`/`authorized-exception` distinction against collapse into a nullable boolean.

**E. Correction.** Nothing to correct — no financing record exists to be wrong. The failure mode is the inverse: manufacturing a zero-valued financing row so joins work.

**F/G.** Atemporal; portability not implicated.

**H. Decomposition behaviour — CORRECTED (R2, C17).** R1 argued that raw 1's "most common row would be empty" in R12/R2 was a decisive objection. **Demoted to a side observation.** A sparse architecture represents absence perfectly well by no-record, an explicit non-applicability state, or no active projection. **F1's real force is narrower and still real: it forbids *inferring* a financing lifecycle from care occurrence, and it requires absence to be distinguishable from unknown/deferred/disputed.** It does not by itself defeat a shared read constitution, assessment grammar or composition profile. **The decisive rejection of a universal authoritative position owner is correction/authority divergence (§4.1), which stands without this argument.**

**I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`, with a named contracting asymmetry.**

### F2 — Care-relevant economic positions are not universally substitutable

**A.** Source law at §1.1.

**B. Inheritance.** Specializes existing law; the estate applies the same mechanism at two other altitudes — `GRD-026` (ratified) is the general form, C4.6's counterparty capacity tuple (**proposed L2 keeper, not ratified**) the counterparty form, F2 the position form. Clinical Memory §5's `authority` ≠ `status` ≠ `confidence` is the same discipline for assertions.

**C. Owners.** Distributed and correct: entitlement/order/money-state → **D6**; consent/authorization → **D7 + RBAC**; obligation-from-a-stance → **OFC**; obligation waiver/transfer → *no single owner* (Care L354, **transfer valid only on successor acceptance**); resource reservation → **D3/D5/Federation `venue`**; external commitments → the **external principal** via GCE.

**D. Authoritative-write test.** **No new owner.** A guardrail plus one D6 specialization.

> **The F2 hazard, precisely.** D6 §9 makes `payment_method` a tenant free-form label; §2 names Allē/Aspire/Cherry/CareCredit as one label class. Under F2 these are not one kind: a manufacturer **rebate** is a third-party price reduction creating no obligor; a **loyalty status** is a brand-relationship principal capacity (guarded at C4.6 §11); a **lender** substitutes the obligated party, creates credit servicing, and makes refund destination a legal question; a **revolving medical credit card** adds another reversal and merchant-fee lifecycle. **The precise statement is that `lender financing cannot be represented solely as a payment-method label`** — which is what `DEC-027` already concluded and `REV-160` still carries as open.

**E. Correction.** Four divergent laws with four conservation postures: a **transfer reverses under a conservation constraint** (D6 §8.7 + §8.8 sum-of-lines CHECK); an **obligation is discharged, waived or novated, transfer valid only on successor acceptance**; an **entitlement expires or is voided** (5-state); a **willingness is withdrawn with no record obligation at all**.

**F/G.** Per-position temporal shape (T-01 forbids collapse). Person-following: entitlements and obligations *of the person*. Organization-owned: contracted rates, claims, ledger. Viewable-not-copyable: a counterparty's position via GCE.

**H.** F2 is the only law reading as evidence *for* raw 1 — and the raw refuses the inference: "possible shared semantic **constitution or seam**; **not evidence of one shared lifecycle**."

**I. VERDICT — `CONFIGURATION / POLICY` (guardrail) **plus** `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION` (D6).** Guardrail candidate is **subject to dedup against `GRD-026` before minting** (§13).

### F3 — Unclosed resource advancement creates contemporaneous incidence

**A. Source law — the word that R1 lost.** "…**at least one actor's** resource position or feasible alternatives change during that interval." **Not the operator's.** Raw altitude: "**Unresolved between universal care-resource physics and financing physics**."

**B. Inheritance.** Not inherited in the inspected estate.

**C. Owners — none found in radius**, checked at both plausible homes. D6 owns money *movement* plus order/entitlement meaning — no receivable, no liquidity position, no aging-by-responsibility-class, no opportunity cost. BIZOPS owns workforce records, labor cost and payroll compute, and explicitly disclaims commerce sale truth. Federation owns `legal_entity` as a liability boundary but carries no economic position on it.

**D. Altitude test.** Delete every financing counterparty (Gate-0 §J.0 Test 1) and F3 still fires: net-30 inventory, an unsold slot, an absorbed cash-pay no-show, a shift below break-even. The antecedent is *scarcity plus an interval*, not *financing*.

**E. Actor/capacity decomposition — R2 CORRECTION (C18).** R1 declared incidence "organization-owned, emphatically not person-following" and routed the whole law to OPECON. **That lost five of seven slices.**

| Actor / capacity | Incidence it may carry | Likely home | Status |
|---|---|---|---|
| **Patient** | cash outlay, debt assumed, credit utilization, HSA/FSA depletion, foregone options, time | **D6** financing specialization + person-portable projection | not contracted |
| **Provider / operator** | labor, inventory, OR/room capacity, receivable, liquidity, opportunity cost | **OPECON** (non-labor operator economics) | no owner |
| **Lender** | principal advanced, default exposure, servicing cost | **the lender**, via GCE; represented in `financing_arrangement` | not modelled |
| **Payer / risk-bearing provider** | reserve position, expected liability, risk exposure | **the risk-bearing principal**; if the operator IS the risk bearer, OPECON + D6 | not modelled |
| **Employer / sponsor** | budget commitment or exposure | **the sponsor**, via GCE; sponsor ≠ payer boundary unowned (Gate-0 G6) | not modelled |
| **Public program** | appropriation / budget incidence | **the program authority**, external | not modelled |
| **Pharmacy / lab / facility** | inventory, fulfillment, facility exposure | **that counterparty** via GCE; C4.6 §11 already routes procurement/inventory as `REQUIRES_C5_DEDUP` | not modelled |

**F. Representation form is open (C8, retained).** C4.3's Law 10.1 is itself "*a governed, versioned assessment over distributed lineage and explicit uncertainty*" that **commits nothing and owns no truth** — the reconstruction alternative R0 asserted could not work without testing it. The four candidates: (i) native authoritative incidence state per actor; (ii) governed reconstruction over existing occurrence/capacity/resource/obligation/settlement truths; (iii) projection/assessment only; (iv) no independent object at all. **Distinguishing evidence:** whether the defining facts are reconstructable — they are partly *non-events* (money that did not arrive) and *counterfactuals* (capacity that could have been sold), which reconstruction handles badly — versus whether a small authoritative interval record per actor is required; plus frequency and materiality (Phase-B hard fork 2).

**G. Portability / visibility.** **Actor-scoped, not uniformly organization-owned.** The patient's own incidence is person-following and portable; the operator's is commercially sensitive and Federation-gated with an `isolated` default; a counterparty's stays that counterparty's.

**H.** F3 is the only law pressuring raw 3's burden — but it pressures the *wrong arc* if routed wholesale to financing.

**I. VERDICT — `GENERAL RESOURCE-INCIDENCE PHYSICS; NO UNIVERSAL OWNER OR REPRESENTATION FORM PROVEN.`** Operator slice → **OPECON-G0** as an open question. Patient/credit slice → **D6** financing specialization. Payer/risk/sponsor/program/facility slices → **native owners and external principals** via GCE. **Whether a common derived incidence assessment is needed across slices remains unresolved — and that question is the sharpest single unresolved item in this gate.** This decomposition *strengthens* the no-universal-owner verdict while preventing a new silo.

### F4 — Later allocation cannot rewrite historical incidence

**A.** "…cannot change **which actors** actually advanced resources or carried exposure at earlier times."

**B. Inheritance.** Substantially inherited, at four altitudes: C4.3 `O1`+`O2`+`O20`; C4.5 `T-02`/`T-08`/`T-19`; REV-184 spine line 5 **`outcome-reads-original-context (never rewrites)`**; D6 §8.7 additive-adjustment immutability.

**C/D.** Each owning domain corrects its own facts (`O4` no-force-match; `O5` impact-derived-not-owned). **No new lifecycle for the preservation half.** The financing-specific remainder the raw names — ultimate/backdated responsibility must remain **distinguishable from** historical liquidity, credit, capacity or opportunity incidence — is **F3's subject**, and therefore **actor-scoped too (R2)**. R1's "historical incidence is operator-owned" is corrected: it is owned per actor.

**E. Correction.** The hardest insurance case is already a general class: retroactive eligibility termination with a recoupment window is C4.3 **S20-B**, generalized to "***authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively***," routed to C5 RBAC/Federation/Consent.

**F.** effective ≠ recorded ≠ received ≠ known (T-01); `temporal_truth_pair` exists **in the legacy layer** (`REV-200`) and must be elevated — a C4.5/C5 obligation.

**G.** Care-side history is person-following; each actor's incidence history follows that actor. `O17` governs visibility.

**H/I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`** for preservation; the distinguishability half travels with F3 **per actor**.

### F5 — Composed support is derived and source-preserving

**A.** Source law at §1.1. **Epistemic class: `Normative constitutional commitment`. Unchanged by this gate.**

**B. Inheritance — necessary, not sufficient.** The *discipline* is inherited and strong: `D0THES-DEC-033`; C4.3 `O5` + `PROP-03` (mutation-tested); C4.5 `T-11`. **What is inherited is source preservation. What does not exist is the mixed-financing composition rule.**

**C. DERIVED ≠ OWNERLESS — R2 CORRECTION (C19).** R1 said "the composed statement has no owner because it is not truth." **Withdrawn.** A derived record owns no *source* truth but still requires an owner for **computation · rule version · source selection · validity period · invalidation · recomputation · audience policy · retention · issuance · correction lineage · proof.** C4.3's own correction-impact assessment is the estate's proof: derived, owning no underlying truth, yet with a **governed versioned record, an execution owner (`produced_by`), pinned inputs, an assessment-logic version and a supersession link.** The correct law is **derived ≠ canonical, but derived ≠ ownerless** — and it generalizes far past Insurance.

**D. Likely ownership split (adjudicated, not minted).**

| Function | Likely owner | Maturity |
|---|---|---|
| Source positions | native owners / external principals via GCE | existing |
| Composition rule definitions + versions | **Settings/Catalog** (definition plane, temporal versioning) | `draft_for_ratification` |
| Commercial allocation / expected-burden assessment | **D6** specialization | not contracted |
| Material effect on the feasible care set | **REV-184/Care/CNS** extension | signed-off law, field-set at C5 |
| Issued estimate / explanation artifact + delivery | **D7 + Messaging**; the *act* unowned (H-N3/G7) | gap |
| Appeal / remedy obligations | native redress + **conditional** Accountability/GRR | capture not closed |

**E. What is missing, named.** Source **compatibility · exclusivity · priority · sequencing · temporal validity · revocability · available amount · shortfall · patient remainder · refund destination · reversal routing.** The one thing that must be *written* is the composition rule's identity and version — and `eligibility_decisions` already ships exactly that pattern (`rule_id` + `rule_version` + `inputs_hash` + `input_snapshot` + `decided_at` + `decided_by`) in committed code. Follow it.

**F/G/H.** Recomputed, never corrected; a *communicated* prior statement is preserved as an artifact (H-N3). Time-bounded validity + `as_of` + pinned snapshot. Per-audience by construction, bounded by `O17`/`T-22`. F5 is **evidence against raw 1**: a minimal constitution that composes is one step from computing totals and assigning final responsibility.

**I. VERDICT — `SEAM / PROJECTION ONLY — FINANCING-SPECIFIC COMPOSITION EXTENSION REQUIRED; ASSESSMENT-LIFECYCLE OWNERSHIP UNRESOLVED; NO NEW SOURCE-TRUTH OWNER`. F5 REMAINS EXPLICITLY NORMATIVE.**

### F6 — Financing reversal is asymmetric with care and irreversible resource use

**A.** Source law at §1.1.

**B/C.** Care half: D6 §8.1 (contracted) + C4.3 `O22` ("**operational failure ≠ auto-invalidate clinical judgment**") + CM append-only supersession. Resource half: F3's subject, per actor. The *asymmetry* is in the estate as C4.3 **S12** and mutation **M05** ("refund treated as all remedy complete" — caught). The Accountability/GRR capture states it again for response duties: §17 **"Closure ≠ demonstrated prevention"**; a `response_case` may close for the recipient while recurrence monitoring stays open.

**D/E.** No new lifecycle. Money reverses additively and conservatively; care supersedes with history preserved; **neither propagates automatically** (`O22`; `M06` caught).

**F/G/H.** Two independent closure horizons on one episode (`O8`). Care history follows the person; the reversal is actor-scoped. F6 is the law raw 2 explains best — needing D6 §8.1 plus `O22`, both present, not a financing seam.

**I. VERDICT — `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION`.** **Named consequence:** `payment state ≠ care state` is presently a **D6-only contracted invariant**; a symmetric Care-side statement is owed at C5.

### F7 — Material care-time reliance on financing must remain attributable

**A.** Source law at §1.1. **Epistemic class: `Normative constitutional commitment`. Unchanged.**

**B. Ingredients, not a completed home.** REV-184 §2 item 3 names the mechanism as a **general gap** with **`resource/access-driven`** and **`disposition/system-constraint`** already in the enumeration — and explicitly "**ties to the firewall**." Financing is one member. But naming a gap inside a signed-off law is not a home: there is no first-class reliance or basis-of-decision object, the field-set is deferred to C5, and C4.3 declines to claim knowledge of human cognitive reliance.

**C. Owners of the ingredients.** **CNS** the resolution record (process-state); **Clinical Memory** the care-side assertion and adoption; **D7 + `trace_lineage`** proof; **RBAC** the gate; the financing assertion stays with its **external principal** under GCE. Every element has an owner; **the composition has no contracted home.**

**D. Authoritative-write test.** No new owner; **a bounded seam extension with an explicit home**. Candidates: REV-184/CNS, or a Care-contract extension. **The Care Response-Seam Audit named in Accountability/GRR §20 as the required next artifact is the natural decision point** — it already lists "care decision · service occurrence · observation · document · consent · fulfillment · **payment**" as the objects to test.

**E. Four-level hierarchy (retained from Knox; corrects R0's collapse).** **exposure** (provably available — `T-06`) · **reference/use** (provably selected or included) · **attested reliance** (recorded only where attested or otherwise evidenced) · **material effect** (how the feasible option set changed — separately recorded). `T-06` limits *unsupported* cognitive inference; it does not erase attested reliance from the source law.

**F/G/H.** REV-184 line 5 governs correction; `O12` frozen-context and `M22` (caught) bound the abuse. Decision-time replay with no hindsight leakage (`T-09`). Visibility bounded by `O17` and `T-22` ("**Reconstructability is not surveillance authority**"); `REV-185` and Gate-0 U10 leave open how much financial context a clinician should see, and F7 must not be read as licensing more.

**I. VERDICT — `EXISTING OWNER / SEAM EXTENSION — EXPLICIT REV-184/CARE/CNS HOME REQUIRED; NOT A FINANCING TRUTH OWNER`. F7 REMAINS EXPLICITLY NORMATIVE.**

### §3.8 Reconciliation summary

| Law | Verdict | Owner(s) | New universal lifecycle? | Regime-specific / bounded work owed |
|---|---|---|---|---|
| **F1** | INHERITED | D6 §8.1/§8.2 (contracted) + Care per-plane model (capture) | No | Symmetric Care-side statement at C5 |
| **F2** | CONFIG/POLICY guardrail **+** EXISTING OWNER specialization | guardrail digest + **D6** (`REV-160`/`DEC-027`) | No | **Yes — `financing_arrangement`, principal-agnostic** |
| **F3** | **GENERAL RESOURCE-INCIDENCE PHYSICS; no universal owner or form proven** | **actor-decomposed** (7 slices, §3-F3-E) | **Unproven** | Operator slice → OPECON; patient/credit → D6; others native |
| **F4** | INHERITED (preservation) / actor-scoped (distinguishability) | C4.3 + C4.5 + REV-184 + D6 §8.7 | No | No |
| **F5** | SEAM/PROJECTION ONLY — composition extension required — **normative** | sources severally + Settings (rules) + D6 (allocation) + Care/CNS (care effect) + D7/Messaging (issuance) | No | **Yes — composition rules + assessment-lifecycle owner** |
| **F6** | EXISTING OWNER — specialization | D6 (reversible) + Care/CM (irreversible) + C4.3 O8/O22 | No | Symmetric Care-side statement at C5 |
| **F7** | EXISTING OWNER / SEAM EXTENSION — home must be explicit — **normative** | CNS/REV-184 or Care extension; CM; D7; RBAC; external principal via GCE | No | **Yes — four-level reliance + material-effect recording** |

**No new universal lifecycle is required. Four laws require regime-specific or bounded extensions inside existing owners. One is general physics with no universal owner and an unresolved representation form.**

---

## §4 — THREE-DECOMPOSITION ADJUDICATION

| Phase-B raw §5 | Gate-1a adjudication | Kickoff §7 | Kickoff §14 verdict code |
|---|---|---|---|
| **1** Minimal position-and-incidence constitution | A | A | **C** `MINIMAL_SHARED_POSITION_INCIDENCE_CONSTITUTION` |
| **2** Source-native lifecycles + attributed care-impact seam | B | B | **B** `SOURCE_NATIVE_OWNERS_PLUS_ATTRIBUTED_CARE_IMPACT_SEAM` |
| **3** No shared financing substrate | C | C | **A** `NO_SHARED_FINANCING_SUBSTRATE` |

### §4.1 Minimal position-and-incidence constitution (raw 1) — REJECTED **as a truth owner**

**Steelmanned.** The serious reading, not previously stated in this arc: **Clinical Memory, but for care-relevant economic positions** — concept registry, append-only assertions with `authored_by` locked at write, authority-rank precedence, `context_key` coexistence, `unresolved_conflict` with fail-closed gates, current-view. A real contracted OMNI pattern, and the pattern Knox used at Gate-0R to refute the five-zone model.

**Evidence FOR.** F2 is a real non-identity law recurring across regimes. CM proves one owner with many producers need not become a coordinator. `authority_rank` is what reconciling a card-derived against a payer-derived coverage assertion would need. Gate-0's Gap G2 is literally what CM's design solves for clinical facts.

**Evidence AGAINST — decisive, on the raw's own burden.** **The analogy breaks on correction law.** CM works because every producer asserts the *same kind of proposition* normalized to one concept registry, so every correction is the *same operation*: append higher authority, supersede. Economic positions have **four** correction laws with four conservation postures, one of which is *no record at all* (§3-F2-E). **The burden is "the same authoritative write, correction, and historical-incidence behavior rather than merely similar read projections." The estate supplies the same read projection and four different writes.** F5 adds a second count: composition inside the shared layer is the raw's own named path to the prohibited coordinator.

**R2 narrowing (C17).** The "empty row" argument is **not** part of this rejection. Sparse representations handle absence fine.

**Falsifier.** Three materially different regimes in which *creation* and *correction* of a care-relevant economic position are the same operation with the same conservation posture and authority model.

**Disposition: REJECTED as a shared authoritative TRUTH owner. Explicitly NOT rejected as a shared read constitution, assessment grammar, or composition profile** — that is the operating-composition axis at §4.4.

### §4.2 Source-native + attributed care-impact seam (raw 2) — REASONING ACCEPTED; "MINT A NEW SEAM" REJECTED; REALIZATION WORK RETAINED

**Evidence FOR.** The estate has **ratified** this shape for the structurally identical problem. GCE is `governance_binding`, `ratified`, Tier-0 mandatory, bidirectional, and **explicitly enumerates administrative/insurance as a subfamily**. C4.6 §6 states the division of labour in one sentence. F6 and F7 are explained best by this shape.

**Evidence AGAINST a *new* seam object.** The seam raw 2 describes is substantially supplied by the composition of GCE's returned-state classification (**ratified**) + Care's per-plane admissibility (**REVIEW-DRAFT**) + REV-184's stance/`external_authority_committed`/rationale-class (**signed-off, field-set at C5**) + C4.3's `O10`/custody ladder/`O17`/`O18` (**design-validated, implementation absent/partial**) + C4.5's `T-06`/`T-20` (**charter, pass not started**). Minting a *financing* care-impact seam duplicates a generic one — `GRD-026` at the seam layer, with C4.6 §11 and the unified Vendor Loop rejection as precedents.

**The honest qualifier.** That composition is **semantic architecture at five different maturities, none contracted for financing**. "The seam already exists" is true of the *design* and false of the *realization*. **F5 and F7 name real extension work inside it, and R2 keeps that work visible rather than implying it is done.**

**Falsifier.** A care decision needing a financing-specific field the generic composition cannot carry — not source, authority, scope, time, uncertainty, material effect, or a rationale-class value. I could not construct one; that is not proof none exists.

**Disposition: reasoning accepted and retained as the realization shape. Raw 2 and raw 3 are not exclusive in OMNI and this carrier no longer treats them as such.**

### §4.3 No shared financing substrate (raw 3) — SELECTED **on the truth-ownership axis only**

**Burden:** every surviving law enforceable through general capabilities "without any recurring shared authoritative write or stable care-impact interface."

**Evidence FOR.** §3 discharges the *shared-authoritative-write* half for six of seven laws against named owners. C4.6 resolved the same class the same way. C4.3's central result generalizes: "**OMNI does not need a universal correction engine**; it needs owner-published proof, versioned impact reconstruction, selective reopening, independent obligations, honest uncertainty, and proof that the correction machinery itself cannot become a shadow source of truth."

**Evidence AGAINST.** (1) **F3 does not discharge the burden** — there may be a recurring authoritative write with no owner, and the *representation form* is unproven for all seven actor slices. (2) **The "stable care-impact interface" clause is satisfied by an interface that exists** — so the honest statement is *no financing-specific substrate and no financing-specific seam*, not *nothing is needed*. (3) **Raw 3's named hidden-coordinator risk is live**: Gate-0 §I.2a's longitudinal financing-context projection is exactly "an analytics projection treated as truth." (4) **Absence of a substrate has not prevented accumulation** — three committed surfaces already carry coverage-like fields with no owner.

**Falsifiers.** OPECON returns "financing-native"; a fixture needs a financing-specific field the generic seam cannot carry; three regimes show identical creation-and-correction; or the longitudinal projection acquires a write-back path or becomes a gate.

**Disposition: SELECTED for truth ownership. It does NOT settle operating composition.**

### §4.4 The second axis — operating composition (R2, C16)

The three raw decompositions all answer *"who owns the truth?"* **None of them answers *"what must OMNI assemble?"*** — and Phase-B never asked, because it was blind and forbidden from product conclusions.

The R1 verdict's own qualifier already listed six composing elements. **That is an operating-composition claim wearing a truth-ownership label.** Separating them:

**A first-class mixed-financing operating profile is required.** It composes coverage and benefit positions · commitments · network and contractual positions · financing arrangements · patient responsibility · estimates · authorization · claims · settlement · correction · care impact · communication · redress · exception custody. **It owns none of the underlying source truths.** It nevertheless has its **own** assessment lifecycle, views, work ownership, clocks, exception states, communication contracts, proof and measurable outcomes — exactly as C4.3's correction-impact assessment does (§3-F5-C).

**Three distinctions that must not be collapsed:**
- **no domain ≠ no product**
- **no truth owner ≠ no assessment/work lifecycle**
- **no universal position lifecycle ≠ no coherent end-to-end operating assembly**

**The failure mode this axis exists to prevent:** reading "Insurance is not a domain" as "Insurance does not deserve a first-class operating assembly." That would leave OMNI with correct physics and no product.

### §4.5 Cross-regime lifecycle test (truth-ownership axis)

| Case | Regime | Authoritative creation | Correction law | Conservation | Same lifecycle? |
|---|---|---|---|---|---|
| No financing lifecycle / uncompensated | R12 | **nothing is created** | n/a | n/a | **No — the object is absence** |
| Simple bilateral payment | R1 | one atomic act, one authority | additive adjustment; refund | conserved (§8.8) | Reference case |
| Third-party conditional support | R3 | external principal commits; OMNI holds `externally_committed_truth` | external supersession; OMNI never edits | none OMNI-side | **No — OMNI cannot create or correct it** |
| Provider/operator financial risk | R7 | no per-person object need exist | period reconciliation | aggregate | **No — no person-level row** |
| Layered concurrent sources | R11 | each source creates natively | each corrects natively; composition **recomputed** | per-source | **No — composition is derived** |
| Retrospective responsibility | R2/R4 | responsibility created *after* the resource fact | **effective-time** reassignment (S20-B) | reallocation | **No — time-separated** |
| Reversal after irreversible care | R1–R12 | reversal money-side only | additive; care untouched (`O22`) | asymmetric | **No — two clocks** |

**Fractures on six of seven. The only commonality is vocabulary** — which is not promoted into one owner.

---

## §5 — AGREEMENT / PARTY-POSITION CONSTELLATION

### §5.1 Inspected
Federation contract in full. C4.6 §0.5/§3/§6/§11. C4.3 §4 in full. REV-184 §0. CM §5/§5.1. Care L171/L354. **C3.7F in full, C3.7G at cited lines.** Accountability/GRR §0–11, 17–23. REV-141/157/159/160/185/187. The §0.3 pattern sweep.

### §5.2 Findings
1. **Unilateral assertion — EXISTS, richly owned.** CM for care facts; GCE `evidence`/`observation`/`proposed-meaning` for external inbound.
2. **External commitment — classification EXISTS, carrier ABSENT.** `externally_committed_truth` is ratified and precise; REV-184's `external_authority_committed` is the decision-side counterpart; C4.3 §4 names "**external accepted-custody carrier ABSENT**."
3. **Owner-native executed agreement — a candidate disposition exists (maturity exact, R2).** C3.7F §1 row 19 / §2.6 / §5 and C3.7G L24 route `sponsor_site_contract`/`payment_schedule` + the sponsor-XOR-insurer grid as **`EXTEND` → D6**. **This is an `analysis_nonbinding` candidate disposition. It is evidence for an owner-native pattern. It does NOT prove a contracted or implemented agreement lifecycle exists.**
4. **Mutually constituted, CONTESTED agreement — NOT FOUND in radius; C3.7 does not supply it.** The C3.7 instrument is *executed*, carries no contested state, no per-party interpretation, no operative posture while disputed. Federation grants are unilateral authorizations no counterparty can contest. C4.6 carries "participation-agreement" only as a connection-instance configuration attribute.
5. **Party positions and conflict — EXISTS, generically and substantially.** REV-184 `disagreement-as-escalation` + concurrent conflicting stances + `dispute`; CM `unresolved_conflict` + fail-closed gates; C4.3 `O3`/`O4`; Accountability §9 preserved conflict at classification level.
6. **Operative posture while unresolved — PARTIALLY EXISTS.** Present: `O2`, `O7`, `O19`, CM's authority-ranked view, REV-184 `defer`/`preserve-option`, Accountability's `coordination_status` overlay (explicitly not a mirror of domain status). Absent: a dedicated **operative-position primitive** distinct from the authority-ranked view, each party's committed stance, and eventual owner-specific reconciliation. **A distinctness gap.**
7. **Repudiation / effective-period / versioned terms.** Prospective revocation EXISTS (S20-A); retroactive invalidity EXISTS as a general class (S20-B); effective periods EXIST; versioned terms EXIST as a pattern (Settings; `eligibility_decisions.rule_version`; C4.6 per-posture `as_of`/`supersedes`/`reopen_trigger`) — but no versioned *bilateral instrument*.
8. **Transition authority.** Answered internally (RBAC + owning-domain commit + Tier-4 attestation). **Unanswered for the bilateral case — and honestly, in many real disputes nobody inside OMNI has the authority.** Whatever OMNI builds must hold a state whose transition authority is **outside OMNI**.

### §5.3 Generic or financing-specific? **Generic, decisively.** Every mechanism was built for clinical, custody, identity, consent, platform and counterparty cases with no financing involvement.

### §5.4 DISPOSITION
**No universal Agreement owner is established.** Some agreement forms are **owner-native extension candidates** (C3.7 → D6). The **network-participation and party-position/operative-posture constellation remains UNRESOLVED** as a generic cross-sovereign question, narrowed to:

- **A-Q1a — accepted custody / responsibility carrier.** Did a named party accept custody of a request, artifact, referral, submission or reconciliation obligation? Named absent by C4.3 §4. Candidates **Federation + RBAC**.
- **A-Q1b — substantive commitment profile/lifecycle.** Did a principal undertake **authorization · guarantee · sponsorship · loan approval · network participation · rate terms · another future obligation**? Different authority, expiry, breach, reliance, remedy and correction laws from A-Q1a. **R2 split (C21) — R1 conflated these.**
- **A-Q2 — operative-position primitive.** Candidates REV-184/CNS or C4.3.
- **A-Q3 — CLOSED (R1).** C3.7 read; candidate disposition recorded with exact maturity.

**Do not mint a universal Agreement object.** And **Accountability/GRR §19** already marks `governed_relation_assertion` a **do-NOT-mint-yet Task-D hinge** — any agreement-relation modelling must dedup against it first.

### §5.5 Accountability/GRR — a threshold law, not a noun table (R2, C22)

The Accountability/GRR capture is a **participating cross-cutting candidate architecture, not an owner of financing truth.** §3: it handles concerns "**for which OMNI accepts an accountable duty**"; "**ordinary forward-flow work stays in its own loop/domain**"; non-goals include "not a truth-owning domain · not the universal task layer · not one universal object." §22: it "participates **only** when remedy/disclosure/duty/corrective-follow-through is involved."

> **THE ADMISSION LAW (replaces R1's noun table).** **No financing event is admitted because of its noun.** Any event — eligibility response, benefit determination, claim, **denial**, appeal, recoupment, non-response — crosses **if and only if** a legal, contractual, policy, safety, communication or remedy duty is **accepted or triggered**. §5's six admit criteria are the test, any one sufficient: tracked action required · party owed loop-back · duty-to-act or regulatory clock · multiple owners must coordinate · possible meaningful harm/risk/degradation · investigation/verification must persist. Durable-learning potential may strengthen but is **not independently sufficient**.

**Consequence R1 got wrong: a denial is not categorically "No."** A denial may itself carry a mandatory notice, an appeal-right communication, a deadline, a continuity-of-care duty, or a patient remedy — any of which triggers admission. The native financing lifecycle keeps the determination, claim, appeal and recoupment truth throughout; Accountability adds an **overlay** only for the accepted duty.

**Scale mechanics, stated so they cannot be misread.** Ten thousand people calling about one wrong bill produce **ten thousand reporter-level communication obligations and receipts**, aggregated through **one cohort-scoped `response_case`** for the uniform notice, with individual cases only where individualized obligations arise (capture §7's worked 80k example). **That is not ten thousand independent investigations**, and §5's `duplicate` disposition is the mechanism: substantially the same occurrence, still owed separate communication.

**Detection without a reporter.** §5's proactive-disclosure `[INV]` — "***silence is not closure***" — means a detected mis-billing cohort or systematically missed appeals creates a **protected provisional obligation with no complainant**, becoming committed when an authorized owner confirms the duty or automatically where law makes the trigger deterministic.

**Mechanics that must not be collapsed:** coordinator ≠ ledger (out-of-band capable) · admission status ≠ disposition, `route_out` ≠ `reject` · domain projection ≠ overlay ≠ composed view, **status independent** · **obligation-first, not case-first** · the **terminal law** (`breached`/`overdue` nonterminal) · the **successor laws** · `withdrawn` = reporter **participation** only; institutional duty survives · **no-orphan custody** and "**vendor closure ≠ OMNI verification; delegation never discharges the obligation**" (§10 — the payer-non-response law) · **multi-radius** scope · **version-at-time** with a minimum-sufficient envelope, "**never a copied dossier**" · **preserved conflict** · **independent closure horizons** + §17 "**Closure ≠ demonstrated prevention**" · consequence assessment **informs, never decides** · `governed_relation_assertion` **do-not-mint-yet**.

---

## §6 — EXTERNAL ASSERTION vs EXTERNAL COMMITMENT (H-N2) — OPEN

**Two orthogonal axes.** GCE's returned-state classification answers *what **epistemic / source-authority status** does the returned thing have?* Assertion-vs-commitment answers *what **kind of act** did the principal perform?* — described a fact · issued a determination · acknowledged transport · **accepted custody** · authorized an activity · guaranteed payment · undertook sponsorship · approved credit · created a contractual obligation. An `externally_committed_truth` carries either *"the payer determined coverage active on D"* or *"the payer undertakes to fund S under C."* Different expiry, revocation, reliance, breach, remedy, transition authority. **Finer on one axis is not coverage of the other.**

**Inherited and load-bearing.** GCE is **ratified**, **bidirectional** ("emits to and ingests from … internal and external"; "Two faces, one spine"), and **explicitly enumerates administrative insurance/prior-auth/billing/claims.** **R0's claim that an unsolicited inbound commitment falls outside GCE is withdrawn:** unsolicited arrival raises admission, identity, consent, relationship and trust questions — it does not place the exchange outside GCE.

**What exists on the commitment axis, bounded.** C4.3's ten-state ladder and `O10 ACK ≠ accepted-custody` carry **custody** commitment, mutation-tested as **M04** and caught. **Custody acceptance is not a coverage determination, an authorization, a payment guarantee, a sponsorship undertaking, a loan approval, or a contractual obligation** — which is why A-Q1a and A-Q1b are now separate.

**Owner.** Not demonstrated. What is named absent is a **carrier** (C4.3 §4 → Federation + RBAC), not an owner.

**Where OMNI is the authoritative party.** When OMNI's own operator issues the commitment — a guarantee, an accepted estimate, an in-house financing approval, a sponsor undertaking — it is **not** external and must not be modelled through external-assertion machinery. That is **H-N3 / Gap G7**, unowned, generalizing past insurance, with D7 owning the artifact and the *act* unowned. **§9.5 makes it urgent.**

**DISPOSITION: `OPEN — GENERIC COUNTERPARTY PHYSICS ABOVE INSURANCE`.** No payer domain follows; the residue belongs above this arc.

---

## §7 — IMPLEMENTATION-SURFACE RECONCILIATION — THREE SURFACES

### §7.1 The two table surfaces, corrected

| Axis | `payer_eligibility_documents` | `patient_insurance_details` |
|---|---|---|
| **Stores** | an **artifact** (bucket/path/mime/size/`content_hash_sha256`) **fused with** coverage identity (`payer_name` NOT NULL, `plan_id`, `member_id`, `group_id`) + `card_side` | **structured administrative data**: `coverage_type`, `carrier_name`, `plan_name`, `member_id` NOT NULL, `group_id`, `subscriber_name`, `subscriber_dob`, `relationship_to_subscriber`, `effective_date`, `termination_date`, `card_image_storage_id` |
| **Tenancy** | `org_id` + `brand_id` + `data_environment` in the CREATE TABLE | **the same three, added by `20260506120000` `patient_scoped_tables` L144. Both are tenant/environment scoped. NO tenancy asymmetry** |
| **Provenance** | 10-value `source_kind` + `source_id` + `source_routing_id` FK + `content_hash_sha256` + `supersedes_document_id`, in the CREATE TABLE | **the same 10-value `source_kind` + `source_id`, added by `source_aware_tables` L175; populated by the intake write (`20260507120000` L545–549)**; also retains `verified_by_user_id` |
| **Write path** | insert/update/delete **revoked** from `authenticated` and `anon`; writes via `SECURITY DEFINER` routing RPC | via the `SECURITY DEFINER` intake-emission RPC. **RLS enabled with exactly one policy — `pid_staff_read` (SELECT). No UPDATE policy ⇒ RLS denies UPDATE. Absence from the `revoke update` block is a design signal, not an authority grant** |
| **Correction posture** | **append-and-supersede** — four-state `status` incl. `superseded` + `supersedes_document_id` | **mutable-by-design** — `is_active boolean` + `touch_updated_at` trigger + **no supersession chain.** *This is the real divergence* |
| **Verification semantics** | `eligibility_status` — **one enum doing four jobs**: `uploaded` (artifact), `pending_verification` (exchange), `verified` (counterparty assertion), `expired` (staleness); `rejected` ambiguous between extraction failure and "no coverage." **Four owners, two authorities, one column** | `verified_by_user_id` — **verification as a staff act; no payer-sourced confirmation representable at all** |
| **Classification** | artifact + coverage assertion fused; own comment: "**Routing-only shape**; full insurance-domain design … **deferred**" | administrative record; no authority claim |

**Overlap.** Both hold `member_id` and `group_id`; `payer_name` and `carrier_name` are the same fact under two names. **No FK, no shared coverage identity, no source-authority precedence, no operative-view contract.**

**Corrected worked example.** A patient photographs a card → the routing RPC writes `payer_eligibility_documents` with **`source_kind = 'intake'`** (hardcoded L554) and `payer_name` defaulted to `'unknown'` when absent → separately intake emission writes `patient_insurance_details` with its own `source_kind`/`source_id`. **Two rows, one real-world coverage fact, both `source_kind='intake'`, no link, different correction laws, and a `verified` marker meaning "staff or extraction said so," not "the payer said so."**

### §7.2 The third surface

`insurance_payment_readiness.ts` emits three `patient_column` writes: `patients.has_insurance` (self-reported coverage status), `patients.insurance_carrier` (payer identity, self-reported, conditional on `yes_commercial`), `patients.self_pay_willingness` (**commercial willingness to pay**). The generic execution path, identical across all three orchestrator migrations:

```sql
elsif target_name = 'patient_column' then
  execute format('update public.patients set %I = $1 where id = $2',
                 payload->>'column') using payload->'value', p_patient_id;
```

**A dynamic `UPDATE public.patients` with no column allowlist.** `%I` blocks injection; it does not constrain which column is written. **A sweep of `supabase/` for the three names returns zero hits.** Consequences at the right confidence: if the questions execute and the columns are genuinely absent, **the `execute format` raises and aborts the emission batch**; if the columns exist outside the migration estate, that is itself a governance problem; if the questions are never enabled, the surface is inert but committed.

Independently of the missing columns, this path places **coverage self-report, payer identity and commercial willingness onto the generic patient row** with no coverage authority, no effective period, no supersession, no source-precedence, and — **unlike every other emission branch — no `source_kind` write** (provenance for `patient_column` lives only in `audit_events`). **The most ungoverned of the three.**

### §7.3 Proven vs not proven

**Proven:** field overlap and absence of linkage; absence of any declared authority relationship; the **correction-posture** and **verification-semantics** asymmetries; the four-jobs enum; the third surface's dynamic path and the absence of its target columns.
**Not proven, no claim either way:** that any surface is canonical (**none is**); direct `authenticated` update authority (**RLS denies absent an UPDATE policy**); **deployment — no receipt inspected or produced.**

### §7.4 Disposition — containment, not architecture
Gate-0's **`INS-HAZ-COVSURF`** remains the right instrument and **remains unlanded and unenforced**. R0's tenancy-based clause 5 is **withdrawn**. Replacements:

> **Clause 5 (replacement).** No new consumer may treat `payer_eligibility_documents.eligibility_status`, `patient_insurance_details.is_active`, or any `patients.*` insurance column as an **operative coverage view** — no source-authority precedence rule exists between the surfaces and none has been established as canonical. **Trip condition extends to any PR adding a coverage-semantic read across two of the three surfaces.**
>
> **Clause 6 (new).** The generic `patient_column` target must not be used for coverage, payer-identity or commercial-willingness attributes until an allowlist and an authority/temporal model exist. **Trip condition:** any PR adding a `patient_column` emission whose column name is absent from the committed migration estate.

**No migration is recommended and none is written.** Coverage identity is a one-way door.

### §7.5 Coverage scoping is four layers, not a binary (R2, C20)

R0/R1 framed the foreclosure as *person-scoped vs tenant-scoped*. **That was itself an over-collapse.** At least four distinct scopes exist:

| Layer | What it scopes | Likely owner | Status |
|---|---|---|---|
| **1. Coverage relationship identity** | the person/beneficiary ↔ payer/program relationship; **source-authoritative at the payer or program** | external principal via GCE; OMNI holds an attributed projection | **no owner in OMNI** |
| **2. Artifact + projection custody** | the card image, the extraction, the operator's stored copy | **operator/tenant scoped**, purpose- and visibility-controlled (D7 + Federation grants) | partially present (`payer_eligibility_documents`) |
| **3. Operator/provider/episode applicability** | network status, benefit interpretation, contract terms, site/facility applicability | **operator-scoped**; D6 + Federation + Settings | **no owner** |
| **4. Person-portable longitudinal view** | permissioned, source-preserving projection across changing counterparties | **noncanonical projection**; must not become truth (raw 3's hidden-coordinator risk) | **candidate only** (Gate-0 §I.2a) |

**The irreversible mistake is collapsing these four into one row — not choosing the wrong side of a binary.** The Gate-1b question is therefore: *what is the stable identity of the coverage relationship, and how do source authority, operator custody, local applicability and person portability compose without global replication or tenant captivity?* **A-Q5 is rewritten accordingly.**

---

## §8 — FINAL OWNERSHIP DECOMPOSITION

### §8.1 Authoritative owners retained (no change proposed)
**D6** money/order/entitlement/refund/promo/tax/commission/attribution · **Clinical Memory** care assertions/adoption/precedence/conflict · **CNS** resolution record (process-state) · **RBAC** authority/blast-radius gate · **Federation** topology/legal entity/jurisdiction/licensure/grants · **D7** artifacts/consent/disclosure/proof lineage · **Settings/Catalog** definitions/policy values/config · **BIZOPS** workforce/labor cost/payroll compute · **OFC** fulfillment slice + obligations from a stance · **each external counterparty** its own commitments and determinations, held under **GCE** as `externally_committed_truth` · **Accountability/GRR** the *overlay* for accepted duties only. All `draft_for_ratification` except GCE (**ratified**) and the two captures (**REVIEW-DRAFT / candidate**).

### §8.2 RESIDUAL OWNERSHIP MATRIX

| Residual | Owner / participating owners | Maturity | Unresolved question |
|---|---|---|---|
| **Coverage relationship identity** | external payer/program; OMNI projection | **no owner** | Stable identity + how the four scopes compose (§7.5) |
| **Artifact + projection custody** | D7 + Federation grants; operator-scoped | partial (committed surfaces) | Precedence between surfaces |
| **Operator/episode applicability** | D6 + Federation + Settings | **no owner** | Network status, benefit interpretation, site applicability |
| **Person-portable longitudinal view** | noncanonical projection | candidate | Must not become truth or a gate |
| **Payer benefit / policy ruleset + version** | external payer truth; OMNI source-authoritative projection | absent | Where does versioned interpretation live? Follow `eligibility_decisions` |
| **Network participation / contracted terms** | Federation (identity/licensure) + D6 (rates) | **unresolved** | A-Q1b + A-Q2; contested state has no carrier |
| **Prior authorization / guarantee / sponsorship / loan approval** | external principal via GCE | **H-N2 OPEN** | Typed substantive-commitment lifecycle (A-Q1b) |
| **Accepted custody / responsibility** | Federation + RBAC | **carrier ABSENT** (C4.3 §4) | A-Q1a |
| **Coding / clinical-to-financial representation** | CM read-only source; representation owner unresolved | absent | Gate-0 G8; argued outside D6 |
| **Claim submission / adjudication** | D6 / future RCM | **unwired** (`REV-204`) | Submission lifecycle + adjudication representation |
| **Patient responsibility / multi-party allocation** | **D6** specialization | not contracted | D6's ledger presumes buyer = patient |
| **Mixed-source composition** | sources + Settings (rules) + D6 (allocation) + Care/CNS (care effect) + D7/Messaging (issuance) | **F5 extension; assessment-lifecycle owner unresolved** | Eleven mechanics at §3-F5-E |
| **Consumer financing arrangement** | **D6** | `DEC-027` shape exists; `REV-160` open; **not in the contract** | Must be **principal-agnostic** (§9.5) |
| **Remittance / settlement / recoupment / finality** | **D6** specialization | not contracted | Offset, refund-to-payer, lookback; finality is an orthogonal axis (H-N1) |
| **Estimate / guarantee / disclosure (communicative act)** | D6 calculation + D7 artifact + Messaging delivery; **the act unowned** | Gate-0 G7 / H-N3 | Generalizes past insurance; urgent under §9.5 |
| **Appeal / grievance / redress** | native financing lifecycle; **conditional** Accountability overlay | capture not closed | Threshold per §5.5 |
| **Provider enrollment / credentialing / payer participation** | Federation owns `provider_credentialing`; **payer enrollment/contracting absent** | partial | Gate-0 G5 adjacent |
| **Guarantor (responsible party ≠ patient)** | **none** | absent | Gate-0 G4 |
| **Sponsor ≠ payer boundary** | **none** | absent | Gate-0 G6; identified clinical data must never reach a sponsor |
| **F3 resource incidence — 7 actor slices** | actor-decomposed (§3-F3-E) | **unresolved** | Representation form; whether a common derived assessment is needed |
| **Economic-influence separation** | CNS Network-Governance (proposed) | **`REV-185` open; enforcement + audit spec OWED** | §9 |

### §8.3 The positive architecture — the governed continuity function (R2, C23)

R1 said the thing OMNI must own is *preservation*. **Preservation is necessary and is not a product.** What OMNI must own is the **governed continuity function from financing signal to care consequence**:

1. Receive source-authoritative positions and evidence across boundaries (**GCE**).
2. Identify **principal and capacity** — not just the legal entity (C4.6 capacity tuple).
3. Distinguish **assertion · determination · acknowledgement · accepted custody · authorization · guarantee · sponsorship · loan approval · obligation · settlement** (H-N2, A-Q1a/b).
4. Compose them into a **versioned, audience-specific financing assessment** that owns no source truth but has an owner, a rule version and a lineage (F5, §3-F5-C/D).
5. Explain what is **known · predicted · conditional · disputed · unresolved** — with `unknown` first-class.
6. Record **material effect on the feasible care set separately from clinical truth** (F7, four levels).
7. Assign **every next action and external dependency** to a named owner with a clock.
8. Preserve promises, deadlines, communications and **correction lineage** (F4, C4.3, T-08).
9. Coordinate **appeal, remedy and closure without swallowing native truth** (Accountability threshold law, §5.5).
10. Maintain a **person-portable longitudinal view without tenant captivity** (§7.5 layer 4).
11. Let patient, provider, payer, employer, lender, pharmacy and public-program **agents interoperate under explicit principal authority** (GCE + RBAC delegated authority).
12. **Learn from repeated execution without converting accumulated visibility into source authority** — the discipline that separates this from an extractive aggregator (`T0-14`, `GRD-034`, §9).

**The measure is already ratified.** `GRD-034`: *"OMNI is NOT measured by number of integrations; it is measured by whether every exchange preserves identity, authority, consent, context, ownership, commit, and proof."*

**The candidate Task-D claim, stated as a hypothesis and not a proven moat.** Epic can own an operator's workflows. A payer can own its determinations. A lender can own its loan. A clearinghouse can own transport. Palantir can model the data. **OMNI's candidate differentiation is keeping the care consequence, authority, explanation, obligation, redress and longitudinal continuity coherent across all of them without capturing their truth.** Unproven. **Task-D must try to kill it**, and Gate-0's U11 (does the longitudinal view have a buyer?) remains the sharpest commercial attack.

**Three pro-patient consequences that follow from this gate's own findings, not from ambition.** **F1** means the uninsured person is not an edge case — absence is representable as absence, so R12 and R2 are native rather than exception paths. **F6 plus `O22`** mean a payer changing its mind eighteen months later cannot retroactively un-treat a patient. **And §9's law** means the party that profits from volume cannot silently shape what appears clinically appropriate.

### §8.4 Future-regime stress matrix (R2, C24)

`NO_SHARED_FINANCING_TRUTH_SUBSTRATE` was better proven against claims-era objects than against risk-bearing care. Ten compact rows; **owner · commitment · composition · correction** tested per regime.

| Regime | Why it stresses the verdict | Owner test | Commitment test | Composition test | Correction test |
|---|---|---|---|---|---|
| **Self-funded employer + TPA + stop-loss** | sponsor, administrator, adjudicator and risk bearer are **four different parties** | four principals, no one payer | delegated administration ≠ risk assumption (A-Q1b) | sponsor XOR insurer; stop-loss attaches above | retro reallocation across layers |
| **Capitation / global budget / shared savings-loss** | **operator becomes the risk bearer**; payer→provider direction disappears | payer-inversion; F3 payer/risk slice lands on the operator | period commitment, not per-service | no person-level amount need exist (R6/R7) | period reconciliation |
| **Bundled / episode payment** | one commitment spans **many providers and events** | no single owner of the episode's money | one commitment, many executors | allocation across providers | episode reopen |
| **Medicare + supplemental + patient responsibility** | concurrent sources + **public authority** | statutory constraint, not contract | program entitlement ≠ commitment | strict sequencing | statutory lookback |
| **Coordination of benefits / secondary** | **priority and composition become first-class** | no COB determination transaction exists | none — pure composition | F5 at full force | re-sequencing retroactively |
| **PBM / pharmacy benefit** | pharmacy, plan, PBM and medical benefit **diverge** | C4.6 already rules pharmacy a composed profile | formulary ≠ coverage ≠ authorization | separate accumulators | post-adjudication reconciliation |
| **Professional + facility + lab + pharmacy split** | one episode → **several financial representations** | four counterparties, four claims | independent acceptances | patient sees one episode, system prices lines | independent corrections |
| **Direct-to-employer / federation risk pool** | **the network becomes sponsor and risk bearer** | §9.5 capacity separation is mandatory | operator-as-creditor / operator-as-insurer | in-house composition | reserve adequacy |
| **Simplified / single-funder regime** | architecture must **survive removal of complexity** | most roles disappear; F1/F4/F6 remain | entitlement replaces commitment | composition may vanish | statutory correction |
| **Patient / provider / payer AI agents** | principal, capacity, authority, commitment and proof become **machine-mediated** | "ten payer bots = one payer principal" (Care L271) | claim-to-represent needs delegation proof (`GRD-039`, WI9) | agent-composed views must not become truth | agent-initiated corrections need authority |

**Result: the truth-ownership verdict holds across all ten** — none of them produces a shared authoritative financing write. **Three of them (capitation, direct-to-employer/federation risk, AI agents) materially raise the operating-composition requirement and §9's law**, which is why the two axes must be separated.

---

## §9 — THE ECONOMIC-FIREWALL LINEAGE (recovered, not minted)

**Operator instruction for this pass:** the economic/pay firewall was worked in depth two or three times, a name was semi-settled, the mechanics exist, and the arc must not re-derive them. **Recovery performed. The instruction was correct, and the finding is larger than a naming question.**

### §9.1 Seven labels, three distinct laws

| Label found | Where | What it actually says |
|---|---|---|
| **`payment_care_firewall`** | **C3.5-F2 primitive P17** (`covered-doctrine (invariant)`); **EXISTS at D6 §8.1** | **LAW 1** |
| "economically-blind recommendation/display engine / invariant / firewall" | C3.7 (F row 31 "**INVARIANT (not an object)**"; G L15) · `REV-185` | **LAW 2** |
| "care-neutral fee firewall (Stark/AKS)" | spine watch list **WI8** | LAW 2 (regulatory facet) |
| "C3.8 fee-firewall" | late-builder register AR-C37 | LAW 2 |
| "alpha-firewall" / `REV-193` | late-builder register row L | LAW 2 (data/alpha facet) |
| "economic-firewalling" | spine watch list **WI2** (AI-aggregation / local-care-exchange) | LAW 2 (aggregator facet) |
| "Recommendation-integrity firewall" · "economic-pressure-can't-bend-presentation" | Care capture L170 / L450 | LAW 2 |

**LAW 1 — `payment_care_firewall`: financial state never GATES a clinical act.** Nine C3.5-F2 evidence rows: a financial hold cannot stop a clinical order (SUP-012) · documentation→charge is one-way and the bill never edits the order (SUP-241) · documentation→coding one-way (SUP-301) · self-pay confidentiality composes without gating (SUP-367) · death stops charges without gating pronouncement (SUP-452) · denials/auth are ops obligations that never gate care (SUP-461) · **a pending prior-auth never silently blocks a clinical order (SUP-462)** · **breaker SUP-481: "HOLDS; `payment_care_firewall` is an invariant, not a setting"** · payment path never changes the clinical act (SUP-489). **Status: `covered-doctrine`, primitive EXISTS at D6 §8.1. This is the name that was settled.**

**LAW 2 — economic-influence separation: the recommender's own economic interest never BENDS clinical appropriateness.** `REV-185` states it exactly and, critically, records the relationship: *"accrual/revenue/retention pressure must not bend what the patient sees as clinically appropriate. Must be a **STRUCTURAL, auditable** property (**the recommendation engine cannot read who/how-much pays OMNI**), not a policy. **Generalizes `payment_care_firewall` (C3.5/D6)**."* It also already carries the business-model constraint: OMNI may earn via SaaS/site-ops/sponsor-reporting/de-id analytics/FMV, **walled from ranking**. **Status: INVARIANT asserted; "not an object"; enforcement mechanism + audit spec OWED at C4; `REV-185` open since 2026-06-14.** **This is the law that was never given a settled name — which is very likely the source of the operator's frustration.**

**LAW 3 — feasibility legibility: the *patient's* economic reality MAY bound the feasible set, but must remain separately sourced and recorded.** This is Gate-0 §J.0's corrected invariant (financing "legitimately shapes feasibility, timing, site, choice and the accepted plan"; the operative word is **silently**) plus **F7**. **Status: normative candidate; no name; home not explicit (F7's disposition).**

**Why the conflation is dangerous.** "Economically blind" over-read collapses Laws 2 and 3. A clinically competent system **must** know patient-side affordability, coverage, deductible exposure, access barriers, travel burden and preferences — those legitimately alter the feasible set. What must be invisible to clinical appropriateness is a **different set**: OMNI revenue, operator margin, sponsor accrual incentive, manufacturer sales incentive, lender origination revenue, commission, retention, downstream capture, creditor self-interest. `REV-185`'s own wording already targets the right thing — *who/how-much pays **OMNI*** — and this gate's contribution is to state the three-way separation explicitly so no future reader flattens it.

### §9.2 The estate already diagnosed the scatter and prescribed the fix

**`v4_C4_late_builder_gap_register.md` row P** — verbatim: *"**Economics / value / incentive AXIS** — who pays, who benefits, who's steered, who owns alpha, who monetizes which loop, **what incentives bend care**, what compounding is allowed | Trust (§A) + AI (§B) are named axes; **economics/value-flow is scattered even though adversaries attack it** | C3.8 G4 5-loop data-value economy · care-neutral firewall (C3.7) · D6 · BIZOPS · WI8 · REV-201 | **`elevation` (exists scattered; not first-class like Trust/AI)** | spine §3b + §C cross-cutting thread (**like the time-axis**)."*

**That is the answer, already written down.** Trust/authority/permeability is a first-class axis (`DEC-035`). AI is a first-class axis (`DEC-034`). Temporal Integrity is a **candidate** third axis (C4.5, charter accepted, pass not started). **Economics/value/incentive is a candidate FOURTH axis whose prescribed disposition is `elevation`, and the elevation has not been executed.** Two supporting rows: **AR-C37** records C3.7's load-bearing finding as firewall-invariance "ties Polaris + C3.8 fee-firewall + *the alpha*"; **PX9** records the sibling hard law (budgets never authorize a patient-safety breach) as **`GENUINELY_NEW` and "spine-grade — a moat line."** And **V6** flags a direct-conflict tension set — **T39/45/46 RL-reward ↔ C3.7 firewall** — i.e. *when the system learns, what is it optimizing?* which is the 2030/2035 form of the same question.

### §9.3 Disposition — route the elevation; do not mint an eighth name

**This gate does NOT mint a new law.** Knox's proposed "Economic-Influence Separation and Feasibility Legibility" is substantively right and is **already the content of Law 2 + Law 3**; minting it as a new candidate would add an eighth label to a seven-label scatter — `GRD-026`/dedup discipline applied to the law itself.

**What this gate contributes, and it is durable rather than prose:**
1. **The three-law separation** (Law 1 gating · Law 2 influence · Law 3 feasibility legibility), with each law's existing carrier, name state and maturity named at §9.1.
2. **Insurance-arc evidence that row P's prescribed `elevation` is now owed**, because a **third independent arc** (Insurance/mixed financing, via `NICK-FIXTURE-VENDOR-FINANCING-01`) now depends on Law 2 — alongside C3.7 trial access and C3.8's data-value economy. **A candidate axis with three dependent arcs and no first-class home is exactly the "scattered even though adversaries attack it" condition row P describes.**
3. **A naming obligation**: the elevation must **reconcile the seven labels**, not add to them.
4. **Routing:** sharpen `REV-185` (do not duplicate it); attach the row-P elevation as its structural home question; carry `REV-193` (alpha) and WI2/WI8 as facets; flag T39/45/46 (RL-reward) as the learning-time form.

**Applied to:** C3.7 accrual · vendor-originated financing (§10) · operator-as-creditor (§10.5) · provider risk arrangements (§8.4) · payer incentives · AI ranking and reward functions.

**This is top-level OMNI physics candidate material, and it is the answer to the operator's question about whether the pattern across arcs is real. It is real, it is already diagnosed, and the owed action is elevation — not rediscovery.**

---

## §10 — NICK-FIXTURE-VENDOR-FINANCING-01

**Manufacturer / loyalty / platform-originated patient financing.**

### §10.1 Provenance and evidence classes (kept strictly separate)

| Class | Content | Status |
|---|---|---|
| **Operator-supplied strategic fixture** | Manufacturer consumer programs that began as loyalty/rebate are extending into patient financing originated in the vendor's own app and underwritten by a third-party lender; scheduling/payment platforms are positioned to originate the same offer from the booking surface | **Operator-introduced. The architecture tests below stand regardless of vendor specifics** |
| **Repository-derived** | D6 §2 names Allē/Aspire/Cherry/CareCredit as one label class; C4.6 §11 already guards Allē/Allergan + ASPIRE/Galderma as a separate **capacity**; `EVSRC-2026-000281` records the operator raising vendor-loyalty-to-federation linkage as a medspa pain point | **`analysis_nonbinding` capture / accepted L2 guard — cited as repository evidence** |
| **External product facts** | Specific current vendor financing offerings relayed into review from outside the repository | **NOT repository-verified. `EXTERNAL_EVIDENCE_REQUIRED`. No Evidence-Plane packet exists; not promotion-grade; supports no doctrine here** |
| **Legal / regulatory / economic** | Lending, licensing, disclosure, servicing, fair-credit, risk-capital, prevalence | **`EXTERNAL_EVIDENCE_REQUIRED` — architectural conclusions left unresolved at those points** |

### §10.2 Capacities that must remain distinguishable
manufacturer / supplier · brand or loyalty principal · rebate/promotion sponsor · **financing distribution surface** · lender / creditor / risk bearer · servicer · merchant / provider · operator / federation · patient / borrower · payment rail.

### §10.3 Required tests
F2 anti-substitution · F5 source-preserving composition · F7 material care-impact reliance · role unbundling · payer/funder inversion · **refund destination (lender vs patient)** · **merchant-fee ownership** · credit decision vs clinical recommendation · **§9 Law 2 recommendation/display separation** · self-preference and steering · principal/capacity identity · portability of approval and financing history · federation exit and non-captivity · **operator-as-provider vs operator-as-creditor** · multi-source purchase (reward + gift card + patient down payment + loan + possible insurance reimbursement).

### §10.4 Dispositions

**D1 — No eighth universal law.** F1, F2, F4, F6 hold unchanged. F2 is **strengthened** (rebate ≠ loan ≠ loyalty credit). F6 is **exercised hard** (reverse the financing after an irreversible injectable). **For a case that is genuinely novel commercially, producing no new physics is the finding: the novelty is topological and economic, not architectural.**

**D2 — The mechanism survives; two enumerations must extend.** C4.6's capacity tuple predicts one entity holding supplier, quality-evidence-issuer, brand-principal **and financing-originator** capacities — evidence *for* the frame. What must extend: (i) the C4.6 §11 loyalty-guard enumeration, which lists supplier, pharmacy, fulfiller, quality-evidence issuer, loyalty/rewards operator and brand principal but **not financing origination**; (ii) the D6 §2 sentence classing a lender with a rebate. **Precise statement: `lender financing cannot be represented solely as a payment-method label`.**

**D3 — A regime-specific financing lifecycle is required inside an existing owner.** `financing_arrangement` per `DEC-027`, in **D6**, **principal-agnostic** so the obligor may be an internal legal entity. Native specialization, not a shared substrate.

**D4 — §9 Law 2 is the load-bearing control, and the fixture is now its third dependent arc.** When the party supplying credit also profits from unit volume and the offer can surface adjacent to a clinical recommendation, `REV-185`'s structural requirement is what stands between OMNI and a credit funnel. It is currently policy. **Routed per §9.3.**

**D5 — Unsolicited external commitment (open).** GCE governs the crossing; admission, identity, consent, relationship and trust handling are real questions. **Generic counterparty physics; A-Q7.**

### §10.5 Can a federation offer in-house financing?
**Architecturally yes, with no new financing physics — and "architecturally possible" is not "commercially or legally advisable."** Requirements, all with existing owners: (i) `financing_arrangement` **principal-agnostic** (D6, `REV-160`); (ii) Federation owns `legal_entity` as the "tax/compliance/**liability** boundary" with `legal_entity_brand` M:N and `ownership_percent`, but carries **no risk-bearing or reserve concept** — that is **operator economics (F3's operator slice), not Insurance**; (iii) **capacity separation is mandatory and is the highest-risk item in the fixture** — "operator-as-care-provider" and "operator-as-creditor" must be distinguishable principals, or a clinical recommendation and a credit decision are made by one undifferentiated actor (Federation inv 8 operator-neutrality is the nearest existing analogue); (iv) **§9 Law 2 structural enforcement**; (v) **H-N3/G7** — a federation issuing its own credit approvals is issuing binding **communicative acts**, and that act is unowned. **This is the payer-inversion test applied to credit, and the estate passes it** — nothing in the surviving laws presumes a payer-to-provider direction. **Lending licensure, disclosure, servicing and risk-capital remain `EXTERNAL_EVIDENCE_REQUIRED`.**

### §10.6 Where the consortium question already lives
**Counterparty Participation Economics Gate (Gate B)** + the **formation ladder** + four N=1 bootstrap mechanisms + the "**distribution-rich consortium**" adversary, in `v4_C4_residual_moat_and_network_formation_doctrine.md` §11–§12 (**CANDIDATE**). Strategic, already framed, not to be re-derived inside Insurance.

**Net effect: the fixture strengthens both axes.** A manufacturer-originated, lender-underwritten, app-distributed financing offer is a **new counterparty capacity over a ratified constitution** — not a new financing truth substrate. It requires one regime-specific D6 lifecycle, extends two enumerations, adds one open ownership question, and **materially raises the operating-composition requirement and §9's law.**

---

## §11 — TASK-D RELIANCE BOUNDARY

**Posture — two levels.**
- **`READY_AS_GATE1B_OWNERSHIP_INPUT`**
- **`NOT_READY_AS_FINAL_INSURANCE_COMPOSITION_INPUT`**

**Task-D MAY rely on:** no payer- or insurance-named domain · **no universal shared financing truth substrate, owner, lifecycle or interface established** · the §3.8 per-law dispositions · **GCE inherited and ratified**, bidirectional, insurance an enumerated subfamily · C4.6 §11's composed-profile precedent and the unified Vendor Loop rejection (**accepted `analysis_nonbinding` build doctrine, not a ratified financing contract**) · **the correction-law argument against one universal position lifecycle** · **regime-specific native specialization is required, not optional** (at minimum `financing_arrangement`) · the §7 three-surface implementation reconciliation · the §8.2 residual matrix and §8.4 regime matrix · **the §9 three-law firewall separation and the row-P elevation finding** · the `REV-160`/`DEC-027` currency finding.

**Task-D MUST NOT rely on:** F1–F7 as settled spine laws · **F5 and F7 as binding** · **H-N2 as closed** · **F3 as a proven lifecycle, or as operator-only** · **F5 as implemented by generic projection doctrine** · **F7 as realized** · **agreement/party-position as solved** (one candidate owner-native disposition ≠ a contracted lifecycle) · **Accountability/GRR as ratified, as named, or as owning any financing truth** · **coverage identity ownership or scoping as decided** · claim/adjudication/patient-responsibility/coding/guarantor/sponsor-boundary mechanics as solved · **any R0/R1 claim retracted at §0.5** · any deployment inference · any external market or legal fact in §10 as promotion-grade · **the §8.3 continuity function as a proven moat.**

**Task-D MUST remain free to falsify:** the correction-law argument · that F3 decomposes cleanly by actor · that the generic seam suffices · that the GCE precedent transfers from pharmacy to financing · that six of seven inheritances survive contracting and building · **that the operating-composition axis is real and buildable** · and that "care-financing physics" is a useful architectural layer at all.

---

## §12 — OPEN QUESTIONS / EVIDENCE DEPENDENCIES

**A — Repository architecture.** **A-Q1a** accepted-custody/responsibility carrier (Federation + RBAC). **A-Q1b** substantive-commitment profile/lifecycle — authorization · guarantee · sponsorship · loan approval · network/rate undertaking · contractual obligation. **A-Q2** operative-position primitive (REV-184/CNS or C4.3). **A-Q3 CLOSED** (C3.7 → D6 candidate disposition). **A-Q4** `REV-160` reconciliation — carry `DEC-027`; principal-agnostic obligor. **A-Q5 (rewritten)** the stable identity of the coverage relationship, and how the **four scopes** (source relationship · tenant custody · operator applicability · portable person projection) compose without global replication or tenant captivity. **A-Q6** symmetric `payment state ≠ care state` on the Care side. **A-Q7** unsolicited inbound external commitment within GCE. **A-Q8** **§9 Law 2 structural-enforcement mechanism + audit spec** (`REV-185`; owner CNS/Network-Governance) **and the row-P economics-axis elevation** — three dependent arcs. **A-Q9** H-N3/G7 communicative act. **A-Q10** `consequence_assessment_event` dedup (Accountability §6a ↔ C4.3). **A-Q11** Accountability/GRR naming inconsistency (catalog / FWREG-009 / WI14 / Card 2) — **not an Insurance question**. **A-Q12 (new)** the **F5 assessment-lifecycle owner** — who owns computation, rule version, source selection, validity, invalidation, recomputation, audience policy, retention, issuance and proof of a mixed-financing assessment. **A-Q13 (new)** whether a **common derived incidence assessment** is needed across F3's seven actor slices.

**B — External, `EXTERNAL_EVIDENCE_REQUIRED`** (recorded, not answered, not filled from model memory). **B-Q1** whether a lender-originated obligation legally substitutes the obligated party such that refunds must route to the lender — *architectural conclusion left unresolved: refund destination as a `financing_arrangement` field vs a policy*. **B-Q2** whether a manufacturer program that funds a rebate **and** distributes a lender's credit offer creates one regulated relationship or several — *bears on §10.2*. **B-Q3** whether an operator/federation extending credit triggers lending, TPA or utilization-review licensure — *§10.5 feasibility unresolved*. **B-Q4** frequency and materiality of contemporaneous incidence (hard fork 2) — needed by OPECON. **B-Q5** whether care actors need a stable cross-regime assertion or only source-specific information (hard fork 3). Gate-0's `evidence_pending_ingestion` debt remains undischarged and is **not** a Gate-1b prerequisite.

**C — Implementation proof.** Deployment state of all three surfaces. Whether any consumer already reads `is_active`, `eligibility_status` or a `patients.*` insurance column as coverage authority. Whether the three `patient_column` target columns exist outside the migration estate. Whether the insurance question bank is enabled in any live configuration.

**D — Later contract (C5, not now).** `financing_arrangement` field set · rationale-class enumeration and home · accepted-custody and substantive-commitment carriers · elevation of `temporal_truth_pair` (`REV-200`) · coverage identity and the four scopes · mixed-source composition rules · the economics-axis elevation.

---

## §13 — RETAINED AND REJECTED ALTERNATIVES · PROPOSED ROUTING · NEXT GATE

### §13.1 Alternatives

| Alternative | Disposition | Why |
|---|---|---|
| Minimal position-and-incidence constitution **as a truth owner** | **Rejected** | Correction-law divergence: CM has one correction law because producers assert the same kind of proposition; economic positions have four, one being *no record*. Burden is same-write-and-correction; estate supplies same-read, four-writes |
| The same **as a shared read constitution / assessment grammar / composition profile** | **NOT rejected — this is the operating-composition axis** | §4.4 |
| Source-native + a **NEW** dedicated care-impact seam | **Reasoning retained; mint rejected** | The seam exists in **design** across five maturities; minting a financing-specific one is `GRD-026` at the seam layer. **Its realization extensions (F5, F7) are retained as owed work** |
| D6-centred extension as the whole answer | **Partially retained** | D6 absorbs `financing_arrangement`, patient responsibility, remittance/recoupment, the reversal half of F6 and the commercial-allocation assessment. It cannot absorb the coverage relationship identity or F3's non-patient slices |
| Write-authority five-zone decomposition | **Not adopted** | Demoted by Gate-0 at 0R |
| Funding-participation interface (**F8**) | **Rejected — F8 resolves against it** | GCE + capability profiles supply the function generically |
| A general Agreement / party-position substrate | **Not earned; narrowed to A-Q1a/A-Q1b/A-Q2** | One candidate owner-native disposition verified |
| H-N2 as closed | **REOPENED** | Orthogonal axes |
| F3 as a proven new lifecycle, or as operator-only | **DEMOTED and ACTOR-DECOMPOSED** | The raw says "at least one actor" |
| F5's composed statement as ownerless | **WITHDRAWN** | Derived ≠ canonical, but derived ≠ ownerless |
| Coverage scope as a person-vs-tenant binary | **REPLACED with four layers** | The foreclosure is collapse, not side-selection |
| Insurance as a payer-named domain | **Reaffirmed contraindicated** | `FWREG-017` + `GRD-026` + counterparty-noun ≠ lifecycle |
| Immediate migration on the coverage surfaces | **Rejected again** | One-way door |
| Vendor-originated financing as new physics | **Rejected** | No eighth law; two enumerations extend |
| Accountability/GRR as the home for financing disputes, or as event-type-triggered | **Rejected** | §3 scope invariant; §5.5 threshold law |
| Declaring GRR retired / renaming | **Rejected** | §23 name not locked; FWREG-009/WI14/Card 2 |
| **Minting a new economic-firewall law** | **Rejected (R2)** | Seven labels already exist for three laws; row P already prescribes `elevation`. Adding an eighth is the error. §9.3 |
| Starting OPECON here | **Rejected** | Operator-controlled sequencing |

### §13.2 Proposed routing — PROPOSALS ONLY, nothing landed
One catalog row · one Tier-2 read-graph route · **zero decision-ledger rows** (nothing here is a decision) · open-review updates to **`REV-159`** (ownership resolves to existing owners; closure narrows), **`REV-160`** (priority raise; carry `DEC-027`; principal-agnostic obligor; the lender-vs-rebate question), **`REV-185`** (**sharpen, do not duplicate**: record the three-law separation, the third dependent arc, and the row-P elevation as its structural home question), **`REV-193`**/**`REV-201`** (note as economics-axis facets), and the Gate-0 agreement row (**re-scope to A-Q1a + A-Q1b + A-Q2, all generic**) · one FWREG note routing **F3's operator slice** to OPECON as an open question · **one guardrail candidate, subject to dedup against `GRD-026` before minting** (financing kinds with different obligor, refund-destination and reversal physics must not be classed by a single vendor-name label) · **three conflict-ledger notes** (`REV-160`↔`DEC-027` currency; Accountability/GRR naming across catalog/FWREG-009/WI14/Card 2; **the seven-label economic-firewall scatter**) · one late-builder-register annotation recording Insurance as row P's third dependent arc. **Integrator owns all of it.**

### §13.3 Next steps — two different kinds of work (R2)

**(A) IMMEDIATE INTEGRATOR CONTAINMENT TRANSACTION — not an architecture gate.** Land the corrected `INS-HAZ-COVSURF` (Gate-0 §K.1 clauses 1–4 **plus §7.4's clauses 5 and 6**); prohibit authoritative coverage reads from all three surfaces; route `REV-160`; record the `REV-185`/row-P dependency.

**(B) NEXT ARCHITECTURE GATE — `INS-G2-OPERATING-COMPOSITION-AND-SUFFICIENCY`.** One bounded gate, not a program. Required output:
1. **Care-financing operating-profile map** — a noncanonical composition/read contract over native truths (§4.4, §8.3).
2. **Derived assessment ownership** — A-Q12: who owns computation, rule version, invalidation, issuance, replay.
3. **Layered coverage scoping** — the four scopes of §7.5 and how they compose.
4. **Commitment taxonomy** — A-Q1a custody separated from A-Q1b authorization/guarantee/sponsorship/loan-approval/contractual obligation.
5. **Residual owner map** — §8.2 driven to owner-or-named-gap.
6. **The §9 elevation** — three-law separation, naming reconciliation across seven labels, structural-enforcement question routed to its own owner.
7. **A small discriminating trace suite** — pure self-pay / no financing · high-deductible commercial with denial, appeal and recoupment · Medicare + supplemental · self-funded employer + TPA + stop-loss · mixed cash + coverage + consumer credit · professional/facility/lab/pharmacy split · provider or federation under capitation or credit risk · manufacturer-originated financing · agent-mediated negotiation · simplified single-funder.
8. **Task-D Input-State Receipt** — reliance, falsifiables, exact maturity.
9. **Build/buy/wrap boundary** — OMNI owns the profile, authority, composition, proof, correction and redress; external rails perform OCR, EDI/FHIR transport, clearinghouse, lending, payment and payer-system execution.
10. **Kill conditions** — the generic seam cannot carry required fields · no actor will pay for the continuity (Gate-0 U11) · incumbent configuration achieves equivalent cross-counterparty coherence · exception rate or human labour destroys the economics · **or the profile becomes a hidden source of truth** (raw 3's named risk).

**After (B), not before, Insurance produces its final Task-D sufficiency receipt.**

**Not authorized by this carrier:** schema · contract mutation · implementation · C5 · Task-D population · C3.9 population · promotion · any `main` landing · any start of OPECON · any rename of a concept/file/lane/route · any new external-research arc.

---

## §14 — STOP RECEIPT

| Field | Value |
|---|---|
| **Branch** | `cursor/ins-g1b-ownership-reconciliation`, from `d592e402b779aaedc1f137189bf51cd2b5ca678d` |
| **R0 head** | `8c9d8189798a8ba3ee66e9ee11b8efb4a949a922` · 692 lines |
| **R1 head (Knox-reviewed)** | `59cc4773112cb3b17c4e7e02228b57477117cf62` · blob `22468eb58a327832712e1571bcd77f0bc6303949` · 763 lines |
| **This commit** | one **material R2 architecture** commit |
| **Files added / modified / deleted** | 0 / **1** / 0 — only the Gate-1b carrier |
| **Shared control-plane surfaces** | **0 touched** |
| **Contracts / schemas / migrations / code** | **0 touched** |
| **Concepts, files, lanes, routes renamed** | **0** |
| **`main` / PR #4 / PR #5** | untouched (`d592e40` / `2aabed7` / `671d120`) |
| **OPECON lane** | not started |
| **Working-tree note** | ~22 pre-existing uncommitted modifications from an unrelated lane throughout; **not created, resolved, staged or committed by this lane.** Doctrine reads via `git show d592e40:<path>` |
| **Source depths** | §0.3, strict labels |
| **Correction receipt** | §0.5 — 25 items (C1–C15 R1, C16–C25 R2), each with its adjudicating primary source |
| **Helper dependence** | **NONE.** Four reconnaissance reports commissioned; **not returned at R0, R1 or R2.** Every correction adjudicated against a primary source read directly |
| **Deployment claims** | **NONE** |
| **External-evidence claims** | **NONE promotion-grade**; five `EXTERNAL_EVIDENCE_REQUIRED` at §12-B |
| **Unresolved** | A-Q1a/1b, A-Q2, A-Q4–A-Q13 · B-Q1–B-Q5 · C · D |
| **Exact review refs** | `d592e40` · `2aabed7` · `671d120` |

### PRIMARY GATE-1B VERDICT — TWO AXES

> ### AXIS 1 — TRUTH OWNERSHIP
> ## `NO_SHARED_FINANCING_TRUTH_SUBSTRATE`
> No universal shared financing truth substrate, payer-named domain, or universal financing truth owner is justified. Authoritative truths are **source-native**, held by existing OMNI owners and external principals, exchanged through the **ratified generic Governed Capability Exchange**.
>
> ### AXIS 2 — OPERATING COMPOSITION
> ## `FIRST_CLASS_MIXED_FINANCING_OPERATING_PROFILE REQUIRED`
> Over source-native owners and generic GCE, OMNI requires a **first-class composed operating profile** — native/regime-specific D6 financing lifecycles, derived source-preserving mixed-financing composition with a **named assessment owner**, explicit care-impact reliance recording, conditional Accountability/GRR response duties, and a person-portable non-captive longitudinal view. **It owns no source truth and is still a first-class product architecture.**

**The three distinctions this two-axis result exists to protect:** **no domain ≠ no product** · **no truth owner ≠ no assessment/work lifecycle** · **no universal position lifecycle ≠ no coherent end-to-end operating assembly.**

**Verdict-letter note:** Axis 1 is option **A** in the kickoff §14 menu = **decomposition 3** in the Phase-B raw = **decomposition C** in the Gate-1a adjudication. Axis 2 has no code in that menu **because the menu only offered truth-ownership options** — which is itself a finding about the kickoff, recorded here rather than forced into an ill-fitting letter.

**Withdrawn, explicitly:** every blanket claim equivalent to "no new object, no new lifecycle, no new interface," or "everything already exists."

**Named exceptions:**

| # | Exception | Disposition |
|---|---|---|
| **E1** | **F3 — contemporaneous resource incidence** | `GENERAL RESOURCE-INCIDENCE PHYSICS; no universal owner or representation form proven.` **Actor-decomposed (7 slices).** Operator slice → OPECON-G0; patient/credit → D6; others native. Not started here |
| **E2** | **F2 realization — `financing_arrangement`** | `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION` in **D6**; shape at `DEC-027`; `REV-160` open; **principal-agnostic** |
| **E3** | **F5 realization — mixed-source composition** | `SEAM/PROJECTION ONLY — composition extension required; assessment-lifecycle owner UNRESOLVED (A-Q12); no new source-truth owner` |
| **E4** | **F7 realization — care-impact reliance** | `EXISTING OWNER / SEAM EXTENSION — explicit REV-184/Care/CNS home required.` Four levels: exposure · reference/use · attested reliance · material effect |
| **E5** | **H-N2 — assertion vs commitment** | `OPEN — GENERIC COUNTERPARTY PHYSICS ABOVE INSURANCE`; split into A-Q1a custody / A-Q1b substantive commitment |
| **E6** | **Agreement / party-position** | `UNRESOLVED`. One candidate owner-native disposition verified (C3.7 → D6, `analysis_nonbinding`). Network participation, contracted rates, party interpretation, operative posture, amendment, breach and arbitration all open |
| **E7** | **Three committed coverage surfaces** | **Containment hazard, not architecture.** `INS-HAZ-COVSURF` unlanded; clauses 5 and 6 proposed |
| **E8** | **Coverage scoping** | **Four layers, not a binary.** The foreclosure is collapse. A-Q5 rewritten |
| **E9** | **F5 and F7 epistemic class** | Remain **explicitly normative constitutional commitments.** No basis here to reclassify |
| **E10** | **The economic-firewall axis (§9)** | **Three laws, seven labels, one prescribed `elevation` not executed.** Insurance is the **third dependent arc**. Routed as a sharpening of `REV-185` + the row-P elevation — **not a new law** |

**STOP: `review_ready_pending_nick_knox_gate1b`**

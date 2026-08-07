# v4 — INS-G1B — Financing Ownership & Existing-Estate Reconciliation

Document type: `analysis` / `architecture_reconciliation` (Gate-1b ownership pass; **not** a contract, **not** a schema, **not** spine prose, **not** a new truth-owning domain)
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing. Proposes routing only.
Status: `gate_1b_analysis_complete_pending_nick_knox_review · not_promoted · not_integrated · no_contract_mutation · no_implementation · no_shared_surface_written`
Domain(s): `d6_commerce` · `federation` · `care_operating_model` · `clinical_memory` · `rbac_authority` · `identity` · `cns_coordination` · `bizops_workforce` · `settings_catalog` · `documents_consent_media` · `architecture_governance` · `cross_cutting`. **No new domain is proposed.**
Lifecycle role: reconciles the Gate-1a candidate laws `F1–F7` against the **actual committed OMNI estate** — who already owns the authoritative writes, what dissolves, what needs only a seam or policy, and whether any coherent financing substrate remains. It does not decide the build.
Source-of-truth relationship: consumes read-only. Amends nothing. The Phase-B raw is **source**; the Gate-1a adjudication and handoff are **derivative interpretation**; where wording differs, **the raw wins** and this carrier cites the raw.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** (catalog row + read-graph evaluation owed at the integrator transaction — §11/§13 routing, **not landed here**).
Review gate: `user_knox_required`

Lane: `INS-G1B-OWNERSHIP` · Parent arc: `INS-G0-MIXEDFIN` · Read order: **Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → this**

---

## §0 — REVIEW OBJECT POSTURE

### §0.1 The three refs — all verified, no mismatch

| Ref | Value | Verified | What it is |
|---|---|---|---|
| **CONTROL PLANE** | `main @ d592e402b779aaedc1f137189bf51cd2b5ca678d` | ✅ `git rev-parse origin/main` matches exactly | Committed control-plane state. `AGENTS.md` and read-graph Tier-0 #15 both name `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`. **They agree. Internally consistent. NOT "fixed" by this lane.** |
| **GATE-0 WORKING INPUT** | PR #4, head `2aabed770eda9ec8164efaf0c5626816b85ca224` | ✅ `git rev-parse origin/analysis/insurance-payer-oop-g0` matches exactly | Primary object `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` (1,245 lines at this head). |
| **GATE-1A WORKING INPUT** | PR #5, head `671d120fd79c7b55325cf6e998646c02ead45f0f` | ✅ `git rev-parse origin/cursor/ins-g1a-preservation-caa7` matches exactly | Five-file packet: protocol (898) · Phase-A raw (1,111) · Phase-B raw (1,007) · adjudication (171) · handoff (158). |

**Two ref facts worth recording because they change how the diffs read.**

- **PR #5 branches directly from `main @ d592e40`** (`git merge-base` = `d592e40`). Its diff vs `main` is five added files, zero deletions. Clean.
- **PR #4 branches from `f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05`**, an *older* `main`. Its diff **against current `main`** therefore shows ~575 apparent deletions across doctrine surfaces (`agent_work_protocol.md`, `09`/`10` Build OS, catalog, read graph, `AGENTS.md`, Volume 9 narrative). **Those are not proposed deletions.** They are control-plane work that landed on `main` *after* PR #4 branched (`7da3b2a`, `d592e40`). PR #4's true contribution against its own base is exactly **one added file, 1,245 lines**. A reviewer diffing PR #4 against current `main` will otherwise read it as a control-plane rollback. It is not.

### §0.2 Current-state vs working-packet — stated so it cannot be misread

- `main` is the **committed control-plane state**. At this ref the checkpoint machinery still represents `INS-G0-MIXEDFIN` as the single active Phase-A lane. That is correct-as-of-`main` and this lane does not repoint it.
- PR #4 and PR #5 are **newer, unmerged Insurance working inputs**. Newer ≠ promoted, canonical, landed or implemented.
- Older `main` does **not** invalidate the supplied packet. **Gate 1a happened.** Its non-appearance on `main` is a landing fact, not an existence fact.
- Everything in the working packet remains `analysis_nonbinding` unless separately governed. This carrier inherits that posture.

### §0.3 Source posture — read fully / consulted / searched / not inspected

All reads were performed against a **pinned, disposable linked worktree at `d592e402b779aaedc1f137189bf51cd2b5ca678d`**, with the PR #4 / PR #5 packet files materialized at their exact heads. The developer worktree at the time of this run carried ~22 pre-existing uncommitted modifications from an unrelated lane; **it was not used for any read and was not modified by this lane** (see §14).

**READ FULLY, BY ME, THIS RUN — direct working packet:**
`v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` (all 1,007 lines, **first action**, before any estate work) · `v4_INS_G1A_phase_a_independent_derivation_verbatim_2026-08-07.md` · `v4_INS_G1A_adjudication_and_terminus_2026-08-07.md` · `HANDOFF_2026-08-07_ins_g1a_preserved_gate1b_ready.md` · `v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` (all 1,245 lines, in three passes) · `v4_INS_G1A_..._protocol_2026-08-07.md` §0/§1/§2-head/§4/§5/§6/§7/§8 **(§2 and §3 prompt bodies read at head + structure, not clause-by-clause — declared, see NOT-FULLY-INSPECTED)**.

**READ FULLY, BY ME, THIS RUN — governing / load-bearing estate:**
`AGENTS.md` · `contracts/D6_commerce_contract.md` (all 123 lines) · `contracts/federation_contract.md` (all 107 lines) · `v4_C4_3_care_response_seam_correction_continuity_test.md` (all 155 lines) · `contracts/clinical_memory_assertion_contract.md` §1.5–§5.1 · `v4_REV184_decision_state_reconciliation.md` §0 canonical output + §1/§2 (§3–§R3.12 are explicitly flagged in-file as superseded derivation; read-order guard obeyed) · `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` §0.5/§1/§4-invariants/§5/§6/§11 · `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` §0–§6 (incl. all of T-01…T-22) · `v4_C4_residual_moat_and_network_formation_doctrine.md` §11–§12 · `contracts/business_ops_workforce_contract.md` §3 · `contracts/settings_catalog_contract.md` §3 · `04_manifest_read_graph.md` Tier-0 #15 · `08_open_review_queue.md` rows REV-141/157/159/160/185/187 · `omni_doctrine_reconciliation_map_v1_2026-05-25.md` §G2F Q-DL17 rows.

**READ FULLY, BY ME, THIS RUN — implementation (DDL read directly, not inferred):**
`supabase/migrations/20260508120000_phase_4d_artifact_pipeline.sql` — the `payer_eligibility_documents` CREATE TABLE (L322–369), indexes, RLS, grants, table comment, and the routing-RPC branch (L486–541) · `supabase/migrations/20260504120000_intake_foundation_v1.sql` — the `patient_insurance_details` CREATE TABLE (L484–500), the §20 RLS-and-append-only block (L502–557).

**CONSULTED (targeted, sections read in place):** `v4_C4_care_operating_model_capture.md` (passport + L134/L170/L171/L191/L192/L259/L270/L271/L350/L351/L354/L401/L447/L450/L455/L461/L487) · `system_map_three_layers_60706286.plan.md` (L1016/L1090/L1119/L1124) · `01_master_corpus_catalog.md` (reconciliation-map row) · `contracts/ordered_fulfillment_contract.md` (referenced via C4.6 §0.5 + C4.3 §4; passport only).

**SEARCHED / LOCATED ONLY:** repository-wide pattern sweeps for `financing_arrangement` · `CareCredit` · `Cherry` · `Allē` · `Aspire` · `GreenSky` · `lender` · `installment` · `patient financing` · `sponsor_site_contract` · `participation_agreement` · `contracted_rate` · `agreement_id` · `mutual` · `bilateral` · `counterparty_agreement` · `terms_version`; and a full file-level sweep for `payer_eligibility_documents|patient_insurance_details` across `supabase/`, `lib/`, `app/` (8 files, listed at §7).

**NOT INSPECTED — named so the omission is not silent:**
`v4_C3_7*` trial-access bodies (A–G) in full — reached only through `REV-187`'s row, which is where `sponsor_site_contract` and the sponsor-XOR-insurer coverage grid are named; **a direct read of the C3.7 bodies is the single most likely place a genuine bilateral-agreement carrier is hiding, and I did not perform it** · `v4_C4_2B` / `v4_C4_2C` (Task-D interim bodies; same limit Gate-0 declared as L4) · `v4_C4_governed_reporting_resolution_capture.md` (GRR) beyond its Gate-0 characterization · `v4_C4_platform_loop_capture.md` · `contracts/CNS_orchestration_contract.md`, `identity_contract.md`, `rbac_authority_contract.md`, `D7_documents_consent_media_contract.md`, `D5_*`, `observation_*`, `intake_contract.md`, `messaging_contract.md` in full (each consulted only through other artifacts' quoted boundaries) · `DL-17` / `DL-19` / `DL-21` source drafts · the full legacy three-layer map · `ingestion/` evidence bodies except the four grep hits cited · `lib/entities/insurance-details.ts`, `lib/intake/write/insurance_details.ts`, `lib/intake/documents/types.ts` **line-by-line** (located and file-set bounded; the DDL, not the TS, carries the load-bearing claims in §7) · the three additional migrations touching the two surfaces (`20260505120000`, `20260506120000`, `20260507120000`) beyond confirming they reference them · off-repo `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`.

**Environment limitation (`D0OPER-DEC-004`).** The off-repository controlling plan was **not inspected in this run.** Per the off-repo rule I relied on in-repo `AGENTS.md` + read-graph #15, which agree. I do not treat the off-repo banner as verified coequal state, and I make no claim about its contents.

**Four parallel read-only reconnaissance agents were dispatched** over (1) care-truth + correction machinery, (2) commerce + economics ownership, (3) federation + counterparty + agreements, (4) the two implementation surfaces. **Their reports had not returned at the time this carrier was authored, and no claim in this document depends on them.** Every load-bearing claim below is verified against a primary source I personally read at the pinned ref, and each is cited to a path and, where it matters, a line. If those reports land and contradict anything here, the contradiction is a finding and this carrier is wrong, not the reports.

### §0.4 Inspection radius — stated once, and it does not silently widen

Every absence claim in this document is scoped to: **`.cursor/plans/**` (all `.md`, pattern-swept; ~45 files opened or section-read), `supabase/migrations/**`, `lib/**`, `app/**` (pattern-swept), at `d592e40` plus the two PR heads.** Where I say "not found," I mean *not found in that radius by the named patterns*. I do **not** convert that into "does not exist in OMNI." Gate-0 made that error three times (its own §8 failure-pattern record); the correction is not to repeat it at a narrower radius.

---

## §1 — PHASE-B ANCHOR (source pointer + exact anchor; not a rewrite)

**Source:** `.cursor/plans/v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` @ `671d120`, the fenced verbatim block, heading **"2. Final candidate physics"** (L304–L618) and **"5. Final competing decompositions"** (L675–L797). Read in full as this run's first action. **The raw is source; the adjudication table at `v4_INS_G1A_adjudication_and_terminus_2026-08-07.md` §2 is Knox's derivative wording and loses precision on F1, F3 and F7.**

### §1.1 — F1–F7 precise law + classification receipt (quoted from the raw)

| | Precise law (raw, verbatim) | Epistemic class | Normativity | Inheritance class | Altitude (raw) |
|---|---|---|---|---|---|
| **F1** | "The occurrence of care does not logically entail the prior or eventual existence of a financing entitlement, commitment, obligation, adjudication, transfer, settlement, or shared financing lifecycle." | Descriptive structural invariant | "Structurally unavoidable within a scope that includes R12 and care-before-financing cases" | **Genuinely new candidate** | Universal boundary physics |
| **F2** | "A willingness, entitlement, commitment, obligation, resource reservation, transfer, and settlement are not mutually substitutable merely because each may affect the same care option; any equivalence is regime-scoped rather than universal." | Descriptive structural invariant | Structurally unavoidable as a non-identity rule; allowed equivalences are constitutionally/legally chosen | Financing-specific specialization of inherited law | "Possible shared semantic constitution or seam; **not evidence of one shared lifecycle**" |
| **F3** | "When scarce care resources are consumed or irreversibly reserved before compensating resources arrive or responsibility closes, at least one actor's resource position or feasible alternatives change during that interval, regardless of later reassignment." | Descriptive structural invariant, **conditional on actual scarcity or counterfactual resource change** | Structurally unavoidable **if the antecedent is satisfied** | "Genuinely new candidate relative to the supplied substrate, **though it may ultimately belong to more general resource physics**" | **"Unresolved between universal care-resource physics and financing physics"** |
| **F4** | "A later reassignment, reimbursement, waiver, reversal, or settlement may change current legal or economic positions but cannot change which actors actually advanced resources or carried exposure at earlier times." | Descriptive structural invariant | Structurally unavoidable | Financing-specific specialization of inherited correction law | Universal physics |
| **F5** | "When several source positions are considered together, any combined statement of usable support or expected burden is valid only for a stated composition rule and time and does not extinguish the sources' distinct authority, scope, conditions, revocability, or history." | **Normative constitutional commitment** | **Constitutionally chosen.** "Actual priority, compatibility, and shortfall rules remain regime-specific or current policy." | Financing-specific specialization | "Projection/read model or regime-specific composition lifecycle. **It is not proof of one shared financing interface.**" |
| **F6** | "Once a care-side event or irreversible resource commitment has occurred, a later financing change may alter future feasibility or economic and legal allocation but cannot erase the earlier care state, restore consumed resources, or recreate lost alternatives." | Descriptive structural invariant | Structurally unavoidable | Financing-specific specialization of inherited correction and temporal law | Universal physics **at the care-financing seam** |
| **F7** | "When a care decision materially relies on a financing or resource assertion, the relied-on assertion and its source, authority, scope, relevant times, uncertainty, and material effect on the feasible care set must remain reconstructable separately from the care-side decision and rationale, subject to visibility rights." | **Normative constitutional commitment** | **Constitutionally chosen** | Financing-specific specialization of inherited authority, temporal and provenance law | "Possible care-facing seam or decision projection; **not a financing lifecycle**" |

**Counterexamples and falsifiers (raw, condensed to the operative clause — full text at the source lines).** F1 counterexample: a constitution where every act of care necessarily creates an authoritative resource-allocation obligation; falsifier: proof that "no financing lifecycle exists" is logically impossible rather than merely uncommon. F2 counterexample: fully atomic bilateral exchange under one authority; falsifier: all regimes use one position with the same authority/time/correction/reliance/reversal semantics. F3 counterexample: an unlimited, instantaneous, costless backstop; falsifier: a case satisfying the antecedent where no actor's position or feasible alternatives differ from the no-care counterfactual. F4 counterexample: complete retroactive indemnification with legal relation-back; falsifier: a mechanism making the earlier actor's historical position identical to the no-advancement counterfactual. F5 counterexample: several unrestricted, simultaneous, irrevocable, independent cash transfers; falsifier: all multi-source arrangements are always unrestricted/fungible/independent/simultaneous. F6 counterexample: reservation cancelled before any care decision or foregone alternative; falsifier: a reversal that restores the prior care state and all lost alternatives. F7 counterexample: an immediate exchange where no separate financing assertion affects care judgment; falsifier: an arrangement preserving care history, agency, conservation and accountability while letting a financing-induced feasibility change be indistinguishable from the care rationale.

**Regime × law matrix (raw §3), the part that matters most and is usually dropped:** F1 **bends in 10 of 12 regimes** (holds materially only in R2 and R12). F2 bends in R1 and R12. F3 bends in R1 and is **U (unresolved without evidence) in R5**. F5 is **S (regime-specific rule) in 10 of 12**. F7 bends in R1, R4 and R12. The raw's own gloss: *"The numerous B and S results are important: they show that even the surviving laws do not imply one common lifecycle, state machine, or interface."*

### §1.2 — The three final decomposition propositions and their distinguishing burden (raw §5)

> **⚠ LETTERING HAZARD, flagged because it will otherwise cause a review error.** The Phase-B raw labels its decompositions **1/2/3**; the Gate-1a adjudication relabels them **A/B/C**; the Gate-1b kickoff's *verdict* menu uses **A/B/C in the inverse order**. Below I use the raw's numbering and always name the content. §8 restates the mapping explicitly.

1. **Minimal position-and-incidence constitution** — a very small common constitution recognising non-substitutable positions, source attribution, contemporaneous incidence, historical non-retroactivity; each regime owns its own creation/adjudication/correction/closure. *Distinguishing evidence (raw): "gains support **only if materially different regimes repeatedly require the same authoritative write, correction, and historical-incidence behavior rather than merely similar read projections**."* Named hidden-coordinator risk: a common position store that begins interpreting rules, deciding equivalences, composing sources, assigning final responsibility.
2. **Source-native lifecycles with an attributed care-impact seam** — entitlements, commitments, obligations, budgets, credit, transfers, pooled allocations stay source-native; a narrow, time-bounded, **non-authoritative** seam communicates source · authority · scope · time · uncertainty · material care effect. *Distinguishing evidence (raw): "gains support if care decisions consistently require a **small, stable set of attributed assertions** while source-native states remain unnecessary to the care actor."* Named hidden-coordinator risk: the seam becomes a universal care-access gate.
3. **No shared financing substrate** — no autonomous financing substrate and **no mandatory dedicated financing seam**; rights stay rights, obligations stay obligations, credit/transfer/settlement stay commerce, care stays care, cross-domain projections are non-canonical. *Distinguishing evidence (raw): "gains support if **every surviving law can be enforced through general authority, resource, obligation, commerce, and care capabilities without any recurring shared authoritative write or stable care-impact interface**."* Named hidden-coordinator risk: the absent layer reappears as an analytics projection treated as truth, a manual exception process, a cross-domain workflow orchestrator, or an organisation that acquires de facto authority because it sees the most data.

### §1.3 — Self-attack and invalidation condition (pointer; deliberately not paraphrased)

Phase-B raw **"10. Strongest final self-attack"** (L920–978) argues four things in sequence: the final laws may be **too abstract** (F1/F2/F4/F6 are negative constraints that reject bad architectures without identifying a positive boundary; "they may be constitutional review questions rather than 'physics' capable of supporting ownership reconciliation"); the model may be **over-unified** (F2 places seven positions in one sentence and "the only thing they may share is that someone can use them while reasoning about care"); it may **merely rename familiar machinery** ("'commitment' can become authorization under a new name … 'care-impact assertion' can become a renamed financial clearance"); and it may be **architecturally unnecessary** ("the inherited substrate may already be sufficient").

**Invalidation condition (L979–986), two-sided.** *Too little commonality:* every surviving law dissolves completely into general authority/resource/obligation/commerce/temporal/care-continuity law or remains only a local projection, with no recurring authoritative cross-regime behaviour — **"the first result would eliminate care-financing physics as a distinct architectural concern."** *More commonality than found:* materially different regimes repeatedly require the same authoritative creation, correction, composition, incidence and closure lifecycle, and representing it once demonstrably preserves semantics better than source-native alternatives without creating a coordinator or god-object.

**Gate 1b is squarely a test of the first limb.** §8 records the result.

---

## §2 — ESTATE EXISTS-AS / AUTHORITY MATRIX

Depth key: **F** = read fully by me this run · **C** = consulted (named sections read in place) · **S** = searched/located.

| Concept the F-laws implicate | Located object / lifecycle | Source path | Authority (verbatim passport) | Maturity | Write owner | Correction owner | Projection vs canonical | Depth |
|---|---|---|---|---|---|---|---|---|
| **Money movement, entitlement, order/sale truth, refund, adjustment, promo, gift card, tax, commission, attribution** | `commerce_order`/line · `entitlement` (5-state) + redemption · rail-agnostic money-state vocabulary · `commerce_order_adjustment` · `authorization_for_future_charge` | `contracts/D6_commerce_contract.md` §3–§9 | `canonical` for commerce substrate + financial lifecycle + rail separation + entitlement | **`draft_for_ratification`** | **D6** | D6, **additive only** — §8.7 "Sale immutable post-close; correction = additive adjustment … never edit-in-place" | Canonical for OMNI-side meaning; the **external rail is ledger of record for money movement** and the app DB "a converging projection" (§5) | **F** |
| **Third-party payer / insurance / Medicare / HSA-FSA mechanics** | — | `D6_commerce_contract.md` §10 disposition row + §12 | canonical contract, but the row is a **deferral** | **`defer (v0)`** — "D6 is the rightful FUTURE home, but v0 DEFERS the mechanics" | **none** | none | n/a | **F** |
| **Third-party consumer financing (Cherry / CareCredit / GreenSky), rebate/loyalty labels (Allē / Aspire)** | `payment_method` = "tenant free-form label + loose `accounting_class` enum; **vendor names are LABELS not integrations**" (§9); §2 build-depth bar: "Payment-method labels (Allē/Aspire/Cherry/CareCredit) are **tenant catalog rows, NOT substrate enums**" | `D6_commerce_contract.md` §2/§9/§12 | canonical contract text | shape **unresolved** — `REV-160` open | D6 (as a label) | D6 | label only | **F** |
| ↳ *the more-resolved shape the open row does not carry* | "financing is a `payment_method` subtype/label at checkout **plus a REQUIRED `financing_arrangement` / `financing_authorization` detail object** … (lender_label, application_reference, approval_reference, amount_requested/approved/captured, financing_status, merchant_fee, settlement_status, refund_or_reversal_refs, external_adapter_id) … **NOT a parallel commerce substrate**" | `omni_doctrine_reconciliation_map_v1_2026-05-25.md` §G2F Q-DL17-2 (L4185, L4189) | **`derived_nonbinding` · `active` · `consult_if_routed`** (catalog row L250) | Nick+Knox-modified decision-packet position; **never carried into the D6 contract and not reflected in `REV-160`** | — | — | — | **F** (rows) |
| **Operator/tenant topology, legal entity, jurisdiction, licensure, cross-operator grant layer** | 6-tier composite `tenant_id` · 11-axis `venue` · `legal_entity` (tax/compliance/**liability boundary**) + `legal_entity_brand` M:N w/ `ownership_percent` · `provider_license` / `provider_credentialing` · `jurisdiction_admission_rule` · `patient_continuity_policy` · `federation_permeability_policy` · `shared_context_grant` / `visibility_grant` / `care_relationship` | `contracts/federation_contract.md` §3–§6 | `canonical` for topology + cross-operator permeability + jurisdiction/licensure | **`draft_for_ratification`**; `REV-157` closure pending ratification | **Federation** | Federation; permeability change requires **Tier-4 attestation** + red-severity event | Canonical | **F** |
| ↳ *what Federation does **not** carry* | No obligor, no risk-bearing party, no reserve, no bilateral executed instrument, no contested-agreement state. Grants are **unilateral, issuer-owned, consent-gated, revocable authorizations inside one deployment** — structurally different from a co-authored, externally-adjudicated, contested agreement. | `federation_contract.md` §3/§5/§6 (read in full) | — | — | — | — | — | **F** |
| **External counterparty interaction constitution** | **Governed Capability Exchange (GCE)** — one spine: `actor/represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned status classified (**evidence \| observation \| proposed-meaning \| externally_committed_truth**)` | `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` §0.5 item 1 | **RATIFIED** — `D0THES-DEC-036`, guardrails `GRD-033`/`GRD-034` (named as "the ratified shared external-interaction constitution") | ratified constitution; realization L3/C5 | external counterparty owns its own sovereign records; **OMNI owning domains commit OMNI consequence** | owning domain, via the §4 resolver | External state is preserved as evidence or `externally_committed_truth`; **"External systems never own OMNI-owned canonical truth"** | **F** |
| **Counterparty capacity separation** | "**Counterparty-noun ≠ lifecycle** … a legal entity's *identity* … does NOT determine the lane. The **capacity in which it acts** does. … Classification output is a **tuple** across axes, not one bucket." | same, §0.5 item 2 | **`proposed L2 keeper` — explicitly "a strong new frame authored inside this analysis-nonbinding artifact, NOT inherited ratified law"** | proposed | — | — | — | **F** |
| **Loyalty / rewards / brand-principal guard (names Allē/Allergan, ASPIRE/Galderma)** | Capacity separation + no-data-reuse-without-program-identity/purpose/authority/consent/minimization/revocation + "Reward status or promotional activity may **never** author clinical meaning, pharmacy acceptance, fulfillment state, or patient eligibility"; "**No loyalty connector, rewards ledger, or enrollment mechanism is designed in this L2** — only the guard" | same, §11 | `analysis_nonbinding`, C4.6 L2 accepted + landed (`main` `636147f` per read-graph #9m) | guard accepted; **full loyalty/brand-permeability problem is an open bounded future item** | — | — | — | **F** |
| **The one thing OMNI originates at an external seam** | "**The bilateral execution-obligation itself is created by the parties under contract and applicable law — OMNI does NOT originate it.** What OMNI originates is narrow: the **normalized representation** of that obligation, the **recognition rule**, and the **portable, canonical proof shape**." | same, §6 | `analysis_nonbinding`; G2A-grounded | build-warrant hypothesis; differentiation **unproved** | — | — | — | **F** |
| **Composed-profile-not-domain ruling (the structural precedent)** | "**Pharmacy is NOT a new domain.** It is a composed profile across existing owners. Any single object that claims to own clinical + commercial + fulfillment + quality + communication + remedy truth is a **shadow 'Pharmacy' god-domain and is rejected.**" + a 13-row ownership matrix + the **unified Vendor Loop rejection** (`EVRUN-000012 _07 §7.3 L7`) | same, §11 + §0.5 item 3 | `analysis_nonbinding` L2, accepted + landed | accepted at L2; L3 composition later | — | — | — | **F** |
| **Care-side truth, adoption, conflict** | `clinical_concepts` registry · append-only `patient_clinical_assertions` · `source_authority`/`authored_by` (**locked at write time**) · authority precedence (8-rank) · `status` (who AGREES) ≠ `confidence` · `context_key` coexistence · `unresolved_conflict` · current-memory view | `contracts/clinical_memory_assertion_contract.md` §4/§5/§5.1 | `canonical` for the clinical-memory substrate | **`draft_for_ratification`** | **Clinical Memory** (many producers, **one owner** — the governed assertion substrate) | CM; **append-only, `supersedes_assertion_id`, never UPDATE in place** | Canonical; `patients.*` chart columns are a **projection trigger** | **F** |
| **Care admissibility incl. the coverage firewall** | `appropriate-but-not-covered` as a first-class state — "**(Coverage absence ≠ clinical inadmissibility)**"; per plane `satisfied · unsatisfied · unknown · not-applicable · authorized-exception` **plus who owns resolving it**; "coverage/payment (**kept SEPARATE from clinical indication — firewall**)" | `v4_C4_care_operating_model_capture.md` L191–192 | `analysis_nonbinding` | **`REVIEW-DRAFT … NOT closed`**; `[INV]`-tagged candidates | Care capture is a **cross-cutting capture, not a truth-owning domain** | — | — | **C** (lines verified verbatim) |
| **Non-fungible parallel authority planes** | "There is NO single universal 'final decision-maker' … the **payer** commits coverage … **OMNI coordinates + proves these planes but owns none of their truth.** … **The payer does not determine clinical indication**" | same, L171 | `analysis_nonbinding` | REVIEW-DRAFT | each plane's principal | — | — | **C** (verified verbatim) |
| **Payer-side AI multiplicity** | "Five agents on one model ≠ five opinions; **ten payer bots = one payer principal**"; correlation classes | same, L271 | `analysis_nonbinding` | REVIEW-DRAFT | — | — | — | **C** (verified verbatim) |
| **Obligation waiver / transfer authority** | "**waiver authority varies** (patient/surrogate · clinical · legal/compliance · safety · **payer/operator** · policy); **transfer valid only on successor acceptance**" | same, L354 | `analysis_nonbinding` | REVIEW-DRAFT | — | — | — | **C** (verified verbatim) |
| **Decision/stance/disagreement lifecycle** | **Governed Resolution Lifecycle** — 7 spine lines incl. **`disagreement-as-escalation`**, **`non-action-as-commit`**, **`outcome-reads-original-context (never rewrites)`**, **`trust_horizon`**; `gate_holder_posture` incl. **`external_authority_committed`**; stances incl. `dispute` / `defer` / `preserve-option` | `v4_REV184_decision_state_reconciliation.md` §0.1–§0.4 | passport `analysis_nonbinding`; body records **"✅ SIGNED OFF (Nick + Knox, 2026-06-14) → `08` D0THES-REV-184 CLOSED"** and "confirmed v4 spine-grade law" | **signed-off law; field-set + state-machine explicitly deferred to C5** | **CNS** owns the resolution record/lifecycle/graph (**process-state, NOT truth**); **RBAC** owns the authority/blast-radius gate; **CM** owns truth+commit; **OFC** owns obligations resulting from a stance | owning authority per §0.4 | resolution record is process-state; the **participant graph is a projection, NOT truth** | **F** (§0), **C** (rounds; read-order guard flags them superseded) |
| ↳ **honest rationale-class — the named gap that F7 lands on** | "No field distinguishing *why* a non-textbook-optimal action was chosen: clinical-optimal · patient-preference · **disposition/system-constraint** · futility-but-values · defensive · **resource/access-driven** · uncertainty-watchful. … ties to the firewall (distinguishes an honest disposition tradeoff from incentive masquerading as clinical)." | same, §2 item 3 | `analysis_nonbinding`, inside a signed-off law | **named delta; not realized** | — | — | — | **F** |
| **Correction impact across distributed lineage** | Candidate **Law 10.1** + oracles **O1–O22** (incl. `O1 history-preserved` · `O2 operative-view-corrected-without-erasure` · `O3 state-typed (wrong≠stale≠disputed≠uncertain≠bad-outcome)` · `O4 owner-committed-own-correction (no-force-match)` · `O5 impact-derived-not-owned` · `O10 ACK≠accepted-custody` · `O17 minimum-necessary` · `O18 exposure≠causation` · `O20 temporal reproducibility` · `O22 selective reopening`) + a **ten-state external-custody ladder** + 24/24 mutation catches | `v4_C4_3_care_response_seam_correction_continuity_test.md` §1/§5/§6/§7/§9 | `analysis_nonbinding` (`GRD-036`) | **`analysis_closed` · `architecture_candidate_passed_design_validation`**; explicit maturity verdict: contract realization **OPEN**, **implementation absent/partial**, external acceptance **UNPROVEN** | each owning authority commits its own disposition; **"neither the assessment record nor its projection owns any underlying domain truth"** | owning authority only | impact view is a **permissioned projection that commits nothing** | **F** |
| ↳ **retroactive-invalidity class (the retroactive-termination case)** | **S20-B** "prior invalidity discovered later … evaluate authority basis by **effective time**, not recorded time"; generalized: "***authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively* — applying beyond consent/surrogate to any authorization later found invalid at time of action**"; routed to C5 RBAC/Federation/Consent | same, §8 + §10 item 6 | `analysis_nonbinding` | design finding, **routed not minted**; M25 explicitly **not** in the executed tally | — | — | — | **F** |
| ↳ **the named absent carrier** | "external grant/operator boundary/**custody offer+acceptance** \| Federation + RBAC \| current + EVRUN-008 R3 gap \| partial \| **external accepted-custody carrier ABSENT**" | same, §4 crosswalk | `analysis_nonbinding` | **gap, named and routed** | — | — | — | **F** |
| ↳ **the RCM/claim relation gap** | "charge/refund/adjustment/**claim** relation \| **D6 / future RCM** \| current (D6) + **REV-204 gap** \| partial \| **RCM/claim mechanics unwired**" | same, §4 crosswalk | `analysis_nonbinding` | gap, named | — | — | — | **F** |
| **Temporal axes / as-of reconstruction** | **T-01…T-22** incl. `T-02 later recording ≠ later occurrence` · `T-08 history preserved, operative views may change` · `T-11 governed as-of reconstruction owns nothing` · `T-13 predicted ≠ owed; **time is neither actor nor authority**` · `T-19 decision quality ≠ realized outcome` · `T-20 external temporal state is honestly incomplete` · `T-21 no false total order`; physical bitemporal `temporal_truth_pair` (effective+recorded) exists **in the LEGACY layer** (`D0THES-REV-200`) and must be elevated, not re-invented | `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` §4/§5/§6 | `analysis_nonbinding`; every name is "**PLANNING VOCABULARY — NOT a minted primitive**" | **`gate_0_charter_accepted · full_pass_not_started · not_promoted`** | domain history stays **domain-owned** (T-03) | owning domain | as-of reconstruction is a **spine-named FUNCTION, not an object/service** (T-11) | **F** |
| **Workforce / labor economics** | workforce records, provider operational-state, time-clock, shift scheduling, payroll/compensation, commission **payout**, **labor cost**; payroll **execution** handed to an external embedded-payroll rail (mirroring D6's money-rail doctrine) | `contracts/business_ops_workforce_contract.md` §3 | `canonical` for the business-operations / workforce substrate | **`draft_for_ratification`**; `REV-164` proposed-resolved, closure pending | **BIZOPS** | BIZOPS | canonical for the payout; D6 owns the commission **amount** | **F** (§3) |
| ↳ *what BIZOPS explicitly does not own* | "commerce sale truth + the commission AMOUNT (D6)"; clinical/care truth; authority; identity; routing policy. **No receivables, liquidity, cash position, capacity-as-economic-resource, opportunity cost, or non-labor operator economics.** | same | — | — | **none found in radius** | — | — | **F** |
| **Config / catalog / policy definition plane** | `setting` + `setting_registry` (≥200 paths, JSON-Schema-validated) + 4-tier scope inheritance; **universal `catalog_item`** (T0-15, "the ONE catalog"); `service_policy` + eligibility-gate **definitions**; **hosted values of `federation_permeability_policy`** (Federation defines the meaning) | `contracts/settings_catalog_contract.md` §3 | `canonical` for the settings-as-operating-system substrate | **`draft_for_ratification`** | **Settings/Catalog** | Settings; temporal versioning + change events | definition plane, distinct from the operational data plane | **F** (§3) |
| **Bilateral, co-authored, contested agreement with named parties** | **Not found in radius.** Nearest carriers: Federation's `legal_entity` + grant layer (unilateral, issuer-owned) · C4.6's `participation-agreement` as a **configuration attribute of a connection instance** (§3, L134) and "under what agreement" as a **profile attribute** (§0.5 item 2) · `REV-187`'s `sponsor_site_contract`/`payment_schedule` (trial-access, **C3.7 bodies not read — declared limit**) | see cited paths | — | — | — | — | — | **S** + **F** on Federation/C4.6 |
| **Party-position disagreement machinery (generic)** | **Exists and is substantial** — CM `unresolved_conflict` + `conflicting` longitudinal pattern + fail-closed high-risk gates; REV-184 concurrent conflicting stances + `dispute` stance + `disagreement-as-escalation`; C4.3 `O3` state-typing + `O4` owner-committed-own-correction; Care capture discordance-preserved-not-smoothed | CM §5/§5.1 · REV-184 §0.1/§0.2 · C4.3 §5 · Care L171 | mixed: `canonical`/`draft_for_ratification`, `analysis_nonbinding`-with-signoff, `analysis_nonbinding` | mixed; **none contracted for financing; C4.3 implementation absent/partial** | per-source | per-source | — | **F**/**C** |
| **Committed insurance/coverage implementation** | `payer_eligibility_documents` · `patient_insurance_details` · `eligibility_decisions` · intake question bank + write path | `supabase/migrations/20260508120000_*.sql`, `20260504120000_*.sql`, `lib/intake/write/insurance_details.ts`, `lib/entities/insurance-details.ts`, `lib/intake/documents/types.ts` (+3 migrations referencing) | migration comment: "**Routing-only shape; full insurance-domain design … deferred to future Section**" | **committed repository migration/code state; NO deployment receipt inspected or produced in this lane** | see §7 | see §7 | **neither established as canonical** | **F** (DDL) / **S** (TS) |
| **Economically-blind recommendation firewall** | "accrual/revenue/retention pressure must not bend clinically-appropriate presentation (**structural, auditable, economically-blind, posture-invariant**)"; **`REV-185` requires it be structural, "not a policy"** | Care capture L170/L447/L450 + `08` `REV-185` | Care capture `analysis_nonbinding`; `REV-185` **open** | **invariant asserted; enforcement mechanism not specified, not built** | CNS / Network-Governance (proposed) | — | — | **F** (row) / **C** (lines) |
| **Network formation / consortium economics** | formation ladder + **Counterparty Participation Economics Gate (Gate B)** + four N=1 bootstrap mechanisms + the "distribution-rich consortium" adversary | `v4_C4_residual_moat_and_network_formation_doctrine.md` §11/§12 | **CANDIDATE** (title carries `— CANDIDATE`) | candidate; L0 arc | — | — | — | **F** (§11–§12) |

**Two contradictions preserved rather than smoothed** (both are estate-level findings independent of Insurance):

1. **`REV-160` is stale relative to its own decision lineage.** The open row records financing-shape as "tentative"; the doctrine reconciliation map records a Nick+Knox-**modified** disposition (`payment_method` + a **required** `financing_arrangement` detail object, with a named field list, explicitly "NOT a parallel commerce substrate"). The D6 contract, authored six days later, does not carry it. A Gate-1b claim that "OMNI has no financing-arrangement representation" would therefore be **false**; a claim that "OMNI has a `financing_arrangement` object" would be **equally false**. The true state is: *a `derived_nonbinding` decision-packet shape exists, was never carried into the contract, and the open row does not know about it.*
2. **`REV-184`'s passport (`analysis_nonbinding`) contradicts its body ("confirmed v4 spine-grade law", "SIGNED OFF", "`08` CLOSED").** Gate-0 already flagged this. It recurs here because F7's disposition depends on how much weight REV-184 can carry.

---

## §3 — F1–F7 RECONCILIATION

Each law is answered against the §6 contract of the kickoff: source law · inheritance · current owner(s) · authoritative-write test · correction/reversal · temporal shape · portability/visibility · behaviour under all three decompositions · verdict.

### F1 — Care does not entail a financing lifecycle

**A. Source law.** "The occurrence of care does not logically entail the prior or eventual existence of a financing entitlement, commitment, obligation, adjudication, transfer, settlement, or shared financing lifecycle." Raw inheritance class: **genuinely new candidate**. *(Note the raw's precision, which the adjudication flattens: this is about the **existence** of a lifecycle, not about financing being **unknown**. The raw adds a matching distinction, M15: "absent financing lifecycle vs unknown, deferred, or disputed financing.")*

**B. Inheritance.** **Already exists as generic OMNI substrate law, and stronger than the raw could know.** D6 §8.1: "**Payment state ≠ care state** … a payment failure / subscription lapse / dispute **NEVER by itself** ends/voids a `care_program` or cancels `clinical_visits`. Program continuity is internal + clinical, not a funding webhook." D6 §8.2: "**Commerce ≠ care_commitment** … purchases + diagnostic orders do NOT auto-create care_commitments." Care capture L192: "`appropriate-but-not-covered` (commercial, not clinical)" and "*Coverage absence ≠ clinical inadmissibility*", with per-plane values including **`not-applicable`**. That last value is the exact representation F1 demands: a plane that *does not apply*, distinct from `unknown`.

**C. Current owner(s).** No single owner, correctly. Care owns whether care occurred and whether it was indicated; D6 owns whether an order/entitlement/payment exists; **neither infers the other**, by contract invariant.

**D. Authoritative-write test.** **No new lifecycle.** F1 is a *prohibition on inference*, not a fact anyone writes. Its enforcement surface is: the D6 §8.1/§8.2 invariants (contracted, `draft_for_ratification`), and the Care per-plane `not-applicable` value (nonbinding capture). What is **owed** is that the distinction between `not-applicable`, `unknown`, `unsatisfied` and `authorized-exception` survives into C5 and is not collapsed into a nullable boolean. That is a contract-authoring obligation, not an owner.

**E. Correction / reversal.** Nothing to correct — no financing record exists to be wrong. The failure mode is the inverse: a system that *manufactures* a zero-valued financing row for uncompensated care so its joins work. D6 §8.6 ("no second source of price") and `GRD-026` already argue against it; nothing enforces it.

**F. Temporal shape.** None required beyond what exists. F1 is atemporal.

**G. Portability / visibility.** Not implicated.

**H. Decomposition behaviour.** Under **1 (minimal constitution)** F1 is actively *hostile*: a common position layer that must represent "no position exists" is a layer whose most common row is empty, and R12/R2 make that the normal case in the wedge vertical. Under **2 (seam)** F1 is satisfiable but the seam must be allowed to be absent, not merely empty — which weakens the "small stable interface" claim. Under **3 (no substrate)** F1 is free: absence is represented by *nothing existing*, which is the cheapest possible representation.

**I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`.** Enforced today by D6 §8.1/§8.2 (contract-level) and the Care per-plane state model (capture-level). **F1 is the strongest single argument against decomposition 1 in the whole gate**, and the raw's own matrix agrees with that reading: F1 *bends* in ten of twelve regimes precisely because it only bites where financing is absent — and the absent case is the one a shared substrate handles worst.

### F2 — Care-relevant economic positions are not universally substitutable

**A. Source law.** "A willingness, entitlement, commitment, obligation, resource reservation, transfer, and settlement are not mutually substitutable merely because each may affect the same care option; any equivalence is regime-scoped rather than universal."

**B. Inheritance.** **Specializes existing law, and the estate already applies the identical mechanism one level up.** `GRD-026` (payload-noun ≠ domain, ratified) is the general form; C4.6's **counterparty-noun ≠ lifecycle** with a **capacity tuple** (proposed L2 keeper, *not* ratified) is the counterparty form; F2 is the *position* form. Clinical Memory §5's three-axis rule (`authority` ≠ `status` ≠ `confidence`) is the same discipline applied to assertions.

**C. Current owner(s).** Distributed and correct: entitlement + order + money-state → **D6**; consent/authorization → **D7 + RBAC**; obligation-from-a-stance → **OFC**; obligation waiver/transfer → *no single owner* ("waiver authority varies … **transfer valid only on successor acceptance**", Care L354); resource reservation (appointment slot, capacity) → **D3 / D5 / Federation `venue`**; external commitments → the **external principal**, held under GCE as `externally_committed_truth`.

**D. Authoritative-write test.** **No new lifecycle. This is a naming and modelling constraint, enforceable as a guardrail plus contract discipline.** The one place it needs teeth today is `payment_method` (§3-F2-hazard below).

> **The F2 hazard, verified: `payment_method` is currently a substitutability sink.** D6 §9 defines it as "tenant free-form label + loose `accounting_class` enum," and §2 explicitly names **Allē / Aspire / Cherry / CareCredit** as members of that label set, echoed by the legacy map (L1124) and by the striking of `Q-DL17-3` ("Allē = `payment_method.label` string, no substrate"). Those four are **not one kind**. A manufacturer rebate reduces price and is funded by a third party who never becomes an obligor. A manufacturer loyalty program is a *brand-relationship principal* capacity — already given its own guard in C4.6 §11. A lender **substitutes the obligated party**, creates a credit-servicing relationship, and makes refund destination a legal question (Gate-0 L12/S11: "refunds route through the lender"). A revolving medical credit card adds a different reversal and merchant-fee lifecycle again. **F2 says exactly that these cannot be one label**, and the estate's own more-resolved answer already exists but is stranded (`financing_arrangement` detail object, §2 row). This is the sharpest concrete consequence of F2 anywhere in the estate.

**E. Correction / reversal.** Divergent by design and that divergence is the law: a transfer reverses (D6 additive adjustment, conservation preserved); an entitlement expires or is voided (D6 5-state); an obligation is discharged, waived or novated (**successor acceptance required**); a willingness is simply withdrawn with no record obligation at all. **These are four different correction laws. There is no shared correction owner and F2 is the reason.**

**F. Temporal shape.** Per position, not shared: `effective`/`expiry` for entitlements; recorded + effective for obligations; settlement-time and reversal-time for transfers. T-01 already forbids collapsing them.

**G. Portability / visibility.** Person-following: entitlements and obligations *of the person*. Organization-owned: the operator's contracted rates, its claims, its ledger. Viewable-not-copyable: a counterparty's position, held as `externally_committed_truth` under GCE and never re-authored.

**H. Decomposition behaviour.** F2 is the **only** law that reads as evidence *for* decomposition 1 — and the raw itself refuses the inference: altitude "possible shared semantic **constitution or seam**; **not evidence of one shared lifecycle**." Under 2, F2 constrains what the seam may flatten. Under 3, F2 is a cross-cutting guardrail, which is where OMNI already puts its non-identity rules (`06_guardrail_antipattern_digest.md`).

**I. VERDICT — `CONFIGURATION / POLICY`**, specifically **a guardrail plus one D6 specialization**. Not a new owner. The D6 specialization is `REV-160`, whose shape already exists at `derived_nonbinding` and needs carrying forward, not inventing.

### F3 — Unclosed resource advancement creates contemporaneous incidence

**A. Source law.** "When scarce care resources are consumed or irreversibly reserved before compensating resources arrive or responsibility closes, at least one actor's resource position or feasible alternatives change during that interval, regardless of later reassignment." Raw altitude: **"Unresolved between universal care-resource physics and financing physics."** Raw inheritance class: "genuinely new candidate … **though it may ultimately belong to more general resource physics.**"

**B. Inheritance.** **Genuinely new to the inspected estate — and genuinely not financing.**

**C. Current owner(s).** **None found in radius, and I checked the two plausible homes directly.** D6 owns money *movement* facts (with the external rail as ledger of record) plus order/entitlement meaning; it has no receivable, no liquidity position, no aging-by-responsibility-class, no opportunity cost. BIZOPS owns workforce records, labor cost and payroll compute, and explicitly disclaims commerce sale truth; it has no non-labor operator economics. Federation owns `legal_entity` as a **liability boundary** but carries no economic position on it. Settings owns definitions. **Nobody writes "operator O advanced resources and carried exposure from T1 to T2."**

**D. Authoritative-write test.** **This is the one place in the whole gate where a genuinely unowned authoritative lifecycle appears.** It cannot be satisfied by a projection: you cannot reconstruct "who carried exposure between T1 and T2" from money-movement events alone, because the defining facts are *non-events* (money that did **not** arrive) and *counterfactuals* (capacity that could have been sold otherwise).

**E. The decisive altitude test — and it resolves against financing.** Delete every financing counterparty (Gate-0 §J.0 Test 1) and F3 still fires: an operator that buys inventory on net-30 terms, that holds an unsold appointment slot, that absorbs a cash-pay no-show, or that staffs a shift below break-even carries exactly the same contemporaneous incidence with **no** entitlement, commitment, obligation, adjudication, transfer or settlement anywhere in the picture. F3's antecedent is *scarcity plus an interval*, not *financing*. It is **operator economics**.

**F. Temporal shape.** Interval-valued, with effective ≠ recorded (T-02), and it must survive later reassignment without rewrite (that is F4's job, not F3's). C4.5's Minimum Temporal Envelope is adequate; no new temporal machinery.

**G. Portability / visibility.** **Organization-owned, emphatically not person-following.** An operator's exposure history is its own commercially sensitive position. Cross-operator visibility would be a Federation grant question, and the default is `isolated`.

**H. Decomposition behaviour.** F3 is the **only** law that puts real pressure on decomposition 3's burden, because it does require a recurring authoritative write that no existing owner has. But it puts that pressure on the *wrong arc*: routing it into a financing substrate would mint a financing owner for a fact that exists without financing — the `GRD-026` error, committed one level up, which Gate-0's own §0R C2 correction warns about.

**I. VERDICT — `GENUINELY UNOWNED AUTHORITATIVE LIFECYCLE — BUT NOT FINANCING; ROUTED OUT OF THIS ARC.`**

> **Routing (proposed, not landed).** The Aug-3 checkpoint already names a sibling Phase-A lane for exactly this: **`Non-Labor Operator-Economics + Counterparty Gate-0`** (`AGENTS.md` §OMNI Operating References; still `not_started`, still at the pinned base, still unauthorized). F3 belongs there. **Insurance must not absorb it, and the operator-economics lane must not be started by this carrier.**

### F4 — Later allocation cannot rewrite historical incidence

**A. Source law.** "A later reassignment, reimbursement, waiver, reversal, or settlement may change current legal or economic positions but cannot change which actors actually advanced resources or carried exposure at earlier times."

**B. Inheritance.** **Almost entirely inherited, and the inheritance is unusually exact.** C4.3 `O1 history-preserved` + `O2 operative-view-corrected-without-erasure` + `O20 temporal/assessment-reproducibility` are the same law, generically. C4.5 `T-02` ("Later recording ≠ later occurrence … must never pretend it was known/authorized at T1"), `T-08` ("History preserved; operative views may change") and `T-19` ("Decision quality ≠ realized outcome") are the same law again, temporally. REV-184 spine line 5, **`outcome-reads-original-context (never rewrites)`**, is the same law at the decision layer. D6 §8.7 ("sale immutable post-close; correction = **additive adjustment**, never edit-in-place") is the same law in money.

**C. Current owner(s).** Each owning domain corrects its own facts. C4.3 `O4`: **owner-committed-own-correction (no-force-match)**. C4.3 `O5`: the impact assessment is **derived-not-owned** and "commits nothing."

**D. Authoritative-write test.** **No new lifecycle for the *preservation* half.** The financing-specific *remainder* the raw names — "ultimate or legally backdated responsibility must remain **distinguishable from** historical liquidity, credit, capacity, or opportunity incidence" — is the *second* term of that sentence, and the second term is **F3's subject matter**, which has no owner. So F4 decomposes cleanly: *preservation* is inherited; *the thing being preserved* is F3's, and F3 is operator economics.

**E. Correction / reversal.** Fully specified already, and the hardest insurance case is already a **general** class. Retroactive eligibility termination with a recoupment window is precisely C4.3's **S20-B**, "prior invalidity discovered later … evaluate authority basis by **effective time**, not recorded time," generalized in §8 to "***authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively* … applying beyond consent/surrogate to any authorization later found invalid at time of action," and routed to C5 RBAC/Federation/Consent. Gate-0 called retroactive termination "the hardest retroactivity case in the whole estate." **It is an instance of an already-named general class, and it is already routed.**

**F. Temporal shape.** effective ≠ recorded ≠ received ≠ known (T-01); `temporal_truth_pair` exists physically but **in the legacy layer** (`REV-200`) and must be elevated to vNext, per C4.5 §6 L4. That elevation is a C4.5/C5 obligation, not an insurance one.

**G. Portability / visibility.** Historical incidence is operator-owned; the *care-side* history it must not rewrite is person-following. C4.3 `O17` (minimum-necessary, purpose-bound) governs who may see it.

**H. Decomposition behaviour.** Identical under all three: preservation is inherited in every case. F4 discriminates between nothing.

**I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`** for the preservation half; the distinguishability half is F3's and travels with it to operator economics.

### F5 — Composed support is derived and source-preserving

**A. Source law.** "When several source positions are considered together, any combined statement of usable support or expected burden is valid only for a stated composition rule and time and does not extinguish the sources' distinct authority, scope, conditions, revocability, or history." **Epistemic class in the raw: `Normative constitutional commitment`. This gate does not change that.**

**B. Inheritance.** **Inherited as projection discipline; the composition *rules* are regime-specific and are not physics.** `D0THES-DEC-033` (surfaces/projections own no canonical truth) is the general form. C4.3 `O5` (impact-derived-not-owned, no shadow truth) and `PROP-03` (no-central-corrector; the projection "commits nothing and owns no domain truth") are the enforced form, mutation-tested. C4.5 `T-11` is the same rule for temporal composition: "**Governed as-of reconstruction owns nothing** … Derivative materializations or caches are permitted only when purpose-scoped, versioned, invalidatable, reconstructable from domain-owned histories, and **incapable of becoming a canonical timeline or commit source**."

**C. Current owner(s).** The **sources**, severally. The composed statement has no owner because it is not truth. D6 already does this for one case: §4's **promo wallet 4-layer** (`patient_promo_claim` availability → `appointment_promo_intent` reservation → `commerce_order_line.applied_promo_claim_id` **truth**) is a worked, contracted example of "availability ≠ reservation ≠ applied," which is F5's shape in miniature. D6 §8.9 ("deterministic redemption/discount order; **AI never decides redemption order at runtime**") is the composition-rule-must-be-stated requirement, already contracted.

**D. Authoritative-write test.** **`SEAM / PROJECTION ONLY`.** No authoritative write. The one thing that must be *written* is the composition rule's **identity and version** so the composed statement is reproducible — and `eligibility_decisions` already ships that exact pattern in committed code (`rule_id` + `rule_version` + `inputs_hash` + `input_snapshot` + `decided_at` + `decided_by`). Gate-0 found this and was right: the pattern exists; it should be followed, not reinvented.

**E. Correction / reversal.** A composed statement is never corrected — it is **recomputed** from corrected sources, and the *prior* composed statement, if it was communicated, is preserved as a communication artifact (D7) rather than edited. That is F6/H-N3 territory, not F5's.

**F. Temporal shape.** Time-bounded validity on the composed statement; `as_of` + the pinned input snapshot. C4.5 T-11 covers it.

**G. Portability / visibility.** The composed view is per-audience by construction; C4.3 `O17` and C4.5 `T-22` bound it.

**H. Decomposition behaviour.** F5 is **the strongest evidence against decomposition 1**, not for it. A minimal position constitution that composes is one step from "computing totals" and "assigning final responsibility" — which is the raw's own named hidden-coordinator failure for decomposition 1. Under 3, F5 is exactly what a non-canonical projection is for.

**I. VERDICT — `SEAM / PROJECTION ONLY`. F5 REMAINS EXPLICITLY NORMATIVE.** This gate provides **no** basis for reclassifying it as structural, and I decline to. Its status is: an architectural commitment OMNI has already made generically (`DEC-033`, `O5`, `PROP-03`, `T-11`) and would be re-affirming, not discovering, for financing.

### F6 — Financing reversal is asymmetric with care and irreversible resource use

**A. Source law.** "Once a care-side event or irreversible resource commitment has occurred, a later financing change may alter future feasibility or economic and legal allocation but cannot erase the earlier care state, restore consumed resources, or recreate lost alternatives."

**B. Inheritance.** **Specializes existing law; both halves are present.** The care half is D6 §8.1 (`payment state ≠ care state`, contracted) plus C4.3 `O22` selective-reopening ("**operational failure ≠ auto-invalidate clinical judgment**") plus Clinical Memory's append-only supersession. The resource half is F3's subject and has no owner. The *asymmetry* itself — that one side is reversible and the other is not — is stated in the estate as C4.3's fixture **S12** ("double-charge while care continues: D6 additive refund/reversal; **care state untouched**; horizons separate"), mutation-tested as **M05** ("refund treated as all remedy complete") and caught unambiguously.

**C. Current owner(s).** D6 for the reversible side (refund/void/credit/adjustment/dispute, capability-gated per §8.11); Care/CM/D5 for the irreversible side; **C4.3's independent closure horizons (`O8`) for the fact that they close on different clocks**.

**D. Authoritative-write test.** **No new lifecycle.** The asymmetry is a relationship between two existing lifecycles, and the estate's mechanism for that relationship — selective reopening with independent obligations and independent closure horizons — is already designed and mutation-validated.

**E. Correction / reversal.** This *is* the correction question. Answer, already in the estate: money reverses additively and conservatively (D6 §8.7 + §8.8 sum-of-lines invariant); care does not reverse at all, it supersedes with history preserved; and **neither propagates automatically to the other** (`O22`, `M06` "technical repair without required Care reopen" — caught).

**F. Temporal shape.** Two independent closure horizons on one episode; C4.3 `O8`.

**G. Portability / visibility.** Care history follows the person; the financing reversal is operator/counterparty-scoped.

**H. Decomposition behaviour.** F6 is *the* law decomposition 2 explains best (the raw says so: decomposition 2 "explains well F1, F6, and F7"). But in OMNI the explanation does not require a *financing* seam — it requires D6 §8.1, which is already a contracted invariant, plus `O22`. So F6 supports decomposition 2's *reasoning* while its OMNI realization lands in decomposition 3's *shape*.

**I. VERDICT — `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION`.** The owners are D6 (reversible side) and Care/CM (irreversible side); the specialization is that the financing-reversal case must be added to the **existing** selective-reopening and closure-horizon machinery rather than modelled fresh. One named consequence: **`payment state ≠ care state` is currently a D6 invariant only.** It needs a symmetric statement on the Care side at C5, or it is enforced from one direction only.

### F7 — Material care-time reliance on financing must remain attributable

**A. Source law.** "When a care decision materially relies on a financing or resource assertion, the relied-on assertion and its source, authority, scope, relevant times, uncertainty, and material effect on the feasible care set must remain reconstructable separately from the care-side decision and rationale, subject to visibility rights." **Epistemic class in the raw: `Normative constitutional commitment`. This gate does not change that.**

**B. Inheritance.** **Inherited in principle, unrealized in fact — and, decisively, the inherited form is not financing-specific.** REV-184 §2 item 3 names the exact missing mechanism as a **general** gap: "No field distinguishing *why* a non-textbook-optimal action was chosen: clinical-optimal · patient-preference · **disposition/system-constraint** · futility-but-values · defensive · **resource/access-driven** · uncertainty-watchful. This is what makes grey-zone medicine legible without lying or auto-judging — and **ties to the firewall** (distinguishes an honest disposition tradeoff from incentive masquerading as clinical)." Financing is one member of that enumeration. It is not the enumeration.

**C. Current owner(s).** **CNS** owns the resolution record/lifecycle/graph as *process-state, not truth* (REV-184 §0.4). **Clinical Memory** owns the care-side assertion and its adoption. **D7 + `trace_lineage`** own proof. **RBAC** owns the authority gate. The financing assertion itself stays with its **external principal**, held under **GCE** as `evidence` / `observation` / `proposed-meaning` / `externally_committed_truth`. **Every element F7 asks for already has an owner.**

**D. Authoritative-write test.** **No new owner. One added value in an existing (candidate) enumeration, plus the linkage from a resolution record to the evidence it relied on.** REV-184 already has `evidence_refs`-style linkage inherited from `cns_decision` (§1: "triggers · context-snapshot · rule+model versions · **alternatives** · reason"). What F7 adds over what REV-184 already specifies is: nothing structural. What it adds *normatively* is a **requirement** that the reliance be recorded when material — and "material" is a threshold nobody has defined.

**E. Correction / reversal.** REV-184 spine line 5 governs it exactly: **outcome-reads-original-context, never rewrites.** C4.3 `O12` frozen-context (no auto-blame) and `M22` ("exposure treated as causation/blame" — caught) bound it against the obvious abuse.

**F. Temporal shape.** Decision-time replay with **no hindsight leakage** (C4.5 `T-09`), and the honest-exposure ladder (`T-06`: eligible → available → delivered → displayed → viewed → acknowledged → referenced → used → reliance → attested-understood, with "**no cognitive-knowledge claim without supporting evidence**"). **T-06 is a hard limit on F7 and should be stated as one:** OMNI can record that a financing assertion was *available and referenced*; it generally cannot record that a clinician *relied* on it. F7 as written says "materially relies," which is a cognitive claim. **The realizable form is exposure-and-reference, not reliance.**

**G. Portability / visibility.** F7's own text says "subject to visibility rights," and the estate supplies the bounds: C4.3 `O17` (minimum-necessary, purpose-bound; `M19` "raw PHI exposed through impact view" — caught) and C4.5 `T-22` ("**Reconstructability is not surveillance authority**"). `REV-185` and Gate-0's U10 both leave open *how much financial context a clinician should see*; F7 does not answer it and must not be read as licensing more visibility.

**H. Decomposition behaviour.** F7 is the load-bearing case for decomposition 2 — and it is the case where OMNI most clearly already has the seam, generically, without financing. Under 1, F7 is irrelevant (a position store does not record care rationale). Under 3, F7 is satisfied by existing seams.

**I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`, with one realization obligation and one correction to the law's own wording. F7 REMAINS EXPLICITLY NORMATIVE.** The realization obligation is a C5 field-set item on REV-184's rationale-class, not an insurance object. The wording correction is that `reliance` should be `exposure-and-reference` unless attested, per `T-06`.

### §3.8 — Reconciliation summary

| Law | Verdict | Owner(s) after reconciliation | New lifecycle? |
|---|---|---|---|
| **F1** | INHERITED — no financing-specific architecture | D6 §8.1/§8.2 + Care per-plane state model | No |
| **F2** | CONFIGURATION / POLICY (guardrail + one D6 specialization) | Guardrail digest + D6 (`REV-160`) | No |
| **F3** | **GENUINELY UNOWNED AUTHORITATIVE LIFECYCLE — but not financing** | **none today**; routed to `Non-Labor Operator-Economics` lane | **Yes — outside this arc** |
| **F4** | INHERITED (preservation) / travels with F3 (distinguishability) | C4.3 O1/O2/O20 + C4.5 T-02/T-08/T-19 + REV-184 line 5 + D6 §8.7 | No |
| **F5** | SEAM / PROJECTION ONLY — **remains normative** | sources severally; `DEC-033` + O5 + PROP-03 + T-11 | No |
| **F6** | EXISTING OWNER — financing-specific specialization | D6 (reversible) + Care/CM (irreversible) + C4.3 O8/O22 | No |
| **F7** | INHERITED — no financing-specific architecture — **remains normative** | CNS (record) + CM (truth) + D7 (proof) + RBAC (gate) + external principal (GCE) | No |

**Six of seven dissolve into, or specialize, existing owners. The seventh is real, unowned — and is not financing.**

---

## §4 — THREE-DECOMPOSITION ADJUDICATION

**Mapping, stated once so the two letterings cannot be confused:**

| Phase-B raw §5 | Gate-1a adjudication §4 | Gate-1b kickoff §7 | Gate-1b kickoff §14 verdict code |
|---|---|---|---|
| **1** Minimal position-and-incidence constitution | **A** | **A** | **C** `MINIMAL_SHARED_POSITION_INCIDENCE_CONSTITUTION` |
| **2** Source-native lifecycles + attributed care-impact seam | **B** | **B** | **B** `SOURCE_NATIVE_OWNERS_PLUS_ATTRIBUTED_CARE_IMPACT_SEAM` |
| **3** No shared financing substrate | **C** | **C** | **A** `NO_SHARED_FINANCING_SUBSTRATE` |

### §4.1 — Minimal position-and-incidence constitution (raw 1)

**Its strongest OMNI form, steelmanned properly.** The naive reading is "a position ledger," which the raw already kills. The *serious* reading, which nobody in this arc has yet stated, is: **Clinical Memory, but for care-relevant economic positions.** A concept registry over position kinds; an append-only assertion table with `authored_by` locked at write time; an authority-rank precedence; a `context_key` allowing coexisting positions; `unresolved_conflict` with fail-closed gates; a current-view. That is a real, working, contracted OMNI pattern with a `canonical` authority header — and it is precisely the pattern Knox invoked at Gate-0R to refute the five-zone model ("different writers can share one owner when the owner is the *governed assertion substrate*"). If the analogy holds, decomposition 1 is not a god-object; it is an existing OMNI shape reused.

**Evidence FOR.** F2 is genuinely a real non-identity law and it recurs across every regime. Clinical Memory proves OMNI can have one owner with many producers without that owner becoming a coordinator. `authority_rank` is exactly what you would need to reconcile a card-derived coverage assertion against a payer-derived one. And Gate-0's Gap G2 — two committed surfaces holding the same `member_id` with no way to say "these are two sources for the same coverage and they disagree" — is *literally* the problem Clinical Memory's design solves for clinical facts.

**Evidence AGAINST — and it is decisive.** **The analogy breaks on correction law, which is the exact burden the raw sets.** Clinical Memory works because every producer is asserting the *same kind of proposition* — "what is true about this patient" — normalized to one concept registry, and therefore every correction is the *same operation*: append a higher-authority assertion and supersede. Economic positions do not share that. A transfer does not supersede; it **reverses, under a conservation constraint** (D6 §8.8: sum-of-lines = subtotal exactly, "substrate CHECK not app-only"). An obligation does not supersede; it is **discharged, waived or novated, and transfer is valid only on successor acceptance** (Care L354). An entitlement does not supersede; it **expires or is voided through a 5-state lifecycle** (D6 §4). A willingness does not supersede; it is simply **withdrawn, with no record obligation at all** (raw R8: "a willingness can be withdrawn before commitment or transfer without necessarily breaching an obligation"). Four correction laws, four conservation postures, one of which is *no record at all*. **The raw's burden is "materially different regimes repeatedly require the same authoritative write, correction, and historical-incidence behavior rather than merely similar read projections." The estate's answer is that they require the same read projection and four different writes.**

Two further counts. F1 makes the substrate's most common row in the wedge vertical (R12 uncompensated / R2 care-first) *empty* — a constitution whose normal case is absence. And F5 under this decomposition puts composition inside the shared layer, which is the raw's own named path to the prohibited coordinator.

**Falsifier for this rejection.** Exhibit three materially different regimes in which the *creation* and the *correction* of a care-relevant economic position are the same operation with the same conservation posture and the same authority model. One would be interesting; three would defeat this.

**Disposition: REJECTED, with the reason preserved.** Not rejected as a god-object risk — rejected because the Clinical Memory analogy that makes it attractive is the same analogy that breaks it.

### §4.2 — Source-native lifecycles + attributed care-impact seam (raw 2)

**Evidence FOR.** This is the shape the estate has *already ratified* for the structurally identical problem. GCE is "the ratified shared external-interaction constitution" with a four-way classification of returned external state. C4.6 §6 states the division of labour in one sentence: "**The bilateral execution-obligation itself is created by the parties under contract and applicable law — OMNI does NOT originate it.** What OMNI originates is narrow: the **normalized representation** of that obligation, the **recognition rule**, and the **portable, canonical proof shape**." F6 and F7 are explained best by this shape. And Care already supplies the care-facing half: `appropriate-but-not-covered` with `who owns resolving it` per plane.

**Evidence AGAINST — and this is the finding that decides the gate.** **In OMNI, the seam is not a candidate to be built. It already exists, it is generic, and it is not financing-shaped.** The seam raw-2 describes — source · authority · scope · time · uncertainty · material care effect — is supplied today by the composition of: GCE's returned-state classification (ratified) + Care's per-plane admissibility values including `not-applicable` and `who owns resolving it` (capture) + REV-184's stance, `gate_holder_posture: external_authority_committed`, and rationale-class (signed-off law, C5 field-set) + C4.3's `O10 ACK≠accepted-custody`, ten-state custody ladder, `O17`, `O18` (design-validated) + C4.5's `T-06` exposure ladder and `T-20` external-state honesty (charter). **Minting a *financing* care-impact seam would therefore duplicate a generic seam for one payload noun — which is `GRD-026` at the seam layer.** C4.6 §11's ruling is the precedent verbatim: "Pharmacy is NOT a new domain. It is a composed profile across existing owners," and `EVRUN-000012 _07 §7.3 L7` records the **unified Vendor Loop rejection** for exactly this move.

**What survives from raw 2.** Its *reasoning* is correct and its burden is met. Its *architectural conclusion* — that a dedicated financing seam is needed — is falsified by the estate, because the seam is already there and already generic.

**Falsifier for this reading.** Show a care decision that needs a financing-specific field the generic composition cannot carry — something that is not source, authority, scope, time, uncertainty, material effect, or a rationale-class value. I could not construct one; that is not proof that none exists.

**Disposition: REASONING ACCEPTED, ARCHITECTURAL CONCLUSION REJECTED.** In OMNI, raw 2 collapses into raw 3 because the seam is inherited, not minted.

### §4.3 — No shared financing substrate (raw 3)

**Its burden:** "every surviving law can be enforced through general authority, resource, obligation, commerce, and care capabilities without any recurring shared authoritative write or stable care-impact interface."

**Evidence FOR.** §3 discharges it for six of seven laws, each against a named primary source with an owner. The estate's own precedent for the same class of problem (external sovereign counterparty with its own lifecycle, contested acceptance, asymmetric authority, evidence classification) resolved the same way at C4.6: composed profile, no new domain, no new owner. C4.3's central result generalizes cleanly: "**OMNI does not need a universal correction engine**; it needs owner-published proof, versioned impact reconstruction, selective reopening, independent obligations, honest uncertainty, and proof that the correction machinery itself cannot become a shadow source of truth." Replace "correction" with "financing" and the sentence stays true.

**Evidence AGAINST — stated fully, not softened.**
1. **F3 fails the burden as written.** There *is* a recurring authoritative write with no owner. My answer is that it is not financing — but that answer is a *routing* claim, and routing a hard problem to a lane that has not started is not the same as solving it. **If the operator-economics lane concludes contemporaneous incidence is financing-shaped after all, this verdict weakens materially.**
2. **The "stable care-impact interface" clause is satisfied by an interface that exists.** Raw 3 says "*without* a stable care-impact interface"; OMNI *has* one (generic). So OMNI technically satisfies raw 2's condition while landing in raw 3's shape. That is a real ambiguity in the raw's own dichotomy and I am not going to paper over it: **the honest statement is "no financing-specific substrate and no financing-specific seam, because the generic seam already exists."**
3. **Raw 3's named hidden-coordinator risk is live in OMNI right now.** "The absent layer may reappear as … an analytics projection treated as truth … or an organization that acquires de facto authority because it sees the most data." Gate-0 §I.2a's longitudinal-financing-context projection is *exactly* that shape. Gate-0 corrected the ownership language at Round 3; the structural risk is not removed by better wording. **This is the single most important thing to watch downstream of this verdict.**
4. **Two committed surfaces already carry coverage-like fields with no owner.** Absence of a substrate has not prevented accumulation. §7.

**Falsifier for the selected disposition.** Any of: (a) the operator-economics lane returns "contemporaneous incidence is financing-native"; (b) a fixture shows a care decision needing a financing-specific field the generic seam cannot carry; (c) three regimes exhibit identical creation-and-correction behaviour for economic positions; (d) the longitudinal financing projection acquires a write-back path or becomes a gate, at which point the absent layer has reappeared covertly and the verdict was wrong.

**Disposition: SELECTED, with named qualifications.**

### §4.4 — Cross-regime lifecycle test (the requirement that a shared owner demonstrate the same semantics)

Applied to the seven materially different cases the kickoff names. The question in each column is the one that matters: **is the authoritative creation-and-correction behaviour the same?**

| Case | Regime | Authoritative creation | Correction / reversal law | Conservation posture | Same lifecycle? |
|---|---|---|---|---|---|
| No financing lifecycle / uncompensated | R12 | **nothing is created** | n/a | n/a | **No — the object is absence** |
| Simple bilateral payment | R1 | one atomic act, one authority | additive adjustment; refund | value conserved (D6 §8.8) | Reference case |
| Third-party conditional support | R3 | external principal commits; OMNI holds `externally_committed_truth` | external supersession + `external_action`; OMNI never edits | none on OMNI side | **No — OMNI cannot create or correct it** |
| Provider/operator financial risk | R7 | no per-person object need exist; risk sits on a contract | period reconciliation | aggregate | **No — no person-level row** |
| Layered concurrent sources | R11 | each source creates natively | each source corrects natively; the composition is **recomputed, never corrected** | per-source | **No — composition is a projection** |
| Retrospective responsibility / recovery | R2/R4 | responsibility created *after* the resource fact | **effective-time** reassignment; history preserved (C4.3 S20-B) | reallocation, not creation | **No — creation and effect are time-separated** |
| Financing reversal after irreversible care | R1–R12 | reversal on the money side only | D6 additive reversal; care untouched (`O22`) | asymmetric by construction | **No — two lifecycles, two clocks** |

**Result: the lifecycle fractures on six of seven.** The only thing common across the column is *vocabulary*. Per the kickoff's own instruction, superficial common vocabulary is not promoted into one owner.

### §4.5 — The Nick fixture: vendor-originated patient financing (Allē × Cherry; platform-originated credit; federation in-house financing)

Run as an adversarial fixture rather than a coda, because it is the live 2026 case in the wedge vertical and because it is the one fact pattern in this arc where the estate's current text is demonstrably under-powered.

**The pattern.** A manufacturer-operated consumer program (Allē/Allergan; ASPIRE/Galderma) that began as loyalty and rebate is extending into **patient financing originated inside the vendor's own app, underwritten by a third-party lender** (Cherry-class). Adjacently, scheduling/payment platforms (Mindbody/Boulevard-class) are positioned to originate the same offer from the booking surface. The 2030/2035 question Nick asks is whether background parties — manufacturers, banks, platforms, and insurers — converge on funding patient demand, and whether a federation could or should offer credit itself.

**What the estate already anticipated — more than expected.**
- D6 §2 already names **Allē, Aspire, Cherry, CareCredit** together and rules them "**tenant catalog rows, NOT substrate enums**"; the legacy map (L1119/L1124) states the generic rule that vendor names must not become enum values.
- C4.6 §11 already carries a **loyalty / rewards / brand-permeability guard** naming **Allē/Allergan and ASPIRE/Galderma**, ruling that a loyalty/brand principal acts in a **separate capacity** and that "**Reward status or promotional activity may never author clinical meaning, pharmacy acceptance, fulfillment state, or patient eligibility**," while explicitly leaving "the full loyalty/brand-permeability problem" as an open bounded future item.
- The concern is captured as operator research: `EVSRC-2026-000281` records Nick asking "how does a vendor loyalty program like Alle or Aspire link up to a federation and/or a patient … (that's a major pain point in medspa land, the redundancy of it)". **`analysis_nonbinding` capture; not promoted.**
- `REV-160` is the open row that owns the financing shape, and a `derived_nonbinding` Nick+Knox-modified `financing_arrangement` detail-object shape already exists (§2).

**What is genuinely under-powered, and it is one specific sentence.** The four names in D6 §2 are being held as **one class** ("payment-method labels"). Under F2 they are at least four:

| Actual thing | Structural kind | Who bears cost | Obligor after the act | Refund destination | Reversal physics |
|---|---|---|---|---|---|
| Allē / Aspire **rebate** | third-party **price reduction** (R8-adjacent discretionary sponsorship) | manufacturer | nobody new | manufacturer program rules | claw-back against a program, not a person |
| Allē / Aspire **loyalty status** | **brand-relationship principal** capacity | nobody | nobody | n/a | already guarded, C4.6 §11 |
| Cherry / CareCredit **credit** | **R9 — substitution of the obligated party** | patient over time; lender bears default | **the patient owes the lender** | **the lender, not the patient** | credit servicing; merchant fee; independent of care |
| Vendor-app-originated financing | **all three at once, plus a distribution capacity** | mixed | patient/lender | lender | plus a data/consent relationship OMNI never mediated |

**Finding 1 — the mechanism survives; the enumeration must extend.** C4.6's capacity tuple predicts exactly this: one legal entity (Allergan) simultaneously holding supplier, quality-evidence-issuer, brand principal, **and now financing-offer distributor** capacities. That is evidence *for* the capacity-tuple frame, not against it. **What must change is the C4.6 §11 loyalty-guard enumeration (which lists supplier, pharmacy, fulfiller, quality-evidence issuer, loyalty/rewards operator, brand principal — and not financing origination) and the D6 §2 sentence that classes a lender with a rebate.** Neither is new physics.

**Finding 2 — no new F-law, and that is informative.** F1, F2, F4, F6 hold unchanged. F2 is *strengthened* (a rebate, a loan and a loyalty credit are the canonical non-substitutables). F6 is *exercised hard*: reverse the financing after the toxin is injected and the injection stays injected — Gate-0's S14 and C4.3's S12/M05 already cover the shape. **The fixture produces no eighth law.** For a case Nick correctly identifies as strategically novel, producing no new physics is a meaningful result: it says the novelty is commercial and topological, not architectural.

**Finding 3 — the real exposure is `REV-185`, and it is currently unenforced.** When the entity that profits from unit volume also supplies the credit that makes the volume affordable, and the offer can appear on a surface adjacent to a clinical recommendation, the **economically-blind recommendation invariant** is the load-bearing control. `REV-185` says it "must be a **STRUCTURAL, auditable property** (the recommendation engine cannot read who/how-much pays OMNI), **not a policy**." Today it is a policy — an open review row and an `[INV]` line in a REVIEW-DRAFT capture, with no named enforcement mechanism. **The vendor-financing trend raises `REV-185`'s priority more than it raises Insurance's.**

**Finding 4 — "could a large federation offer in-house financing?" Architecturally yes, and it needs no new financing physics; it needs four things that already have owners.** (i) `financing_arrangement` must be **principal-agnostic** — the obligor may be an internal legal entity, not only an external lender (`REV-160`, D6). (ii) Federation already owns `legal_entity` as the "tax/compliance/**liability** boundary" with `legal_entity_brand` M:N and `ownership_percent` — that is where a federation-level obligor would attach; Federation carries **no** risk-bearing or reserve concept and would need one, which is **operator economics (F3's home), not Insurance**. (iii) **Capacity separation is mandatory and is the single highest-risk item in the whole fixture**: "operator-as-care-provider" and "operator-as-creditor" must be distinguishable principals, or a clinical recommendation and a credit decision are made by one undifferentiated actor. Federation inv 8 (operator-neutrality, `T0-14`/`T0-16(a)`) already forbids a privileged OMNI tier; the same logic extends. (iv) `REV-185` structural enforcement, per Finding 3. **This is the payer-inversion test (Gate-0 §J.0 Test 2) applied to credit instead of insurance, and the estate passes it — because nothing in the surviving laws presumes a payer-to-provider direction** (raw F7: "The law does not presume a payer-to-provider direction").

**Finding 5 — one genuinely new *ownership* question, routed as open.** In the vendor-app case the financing application happens **entirely outside OMNI**, and OMNI learns of it as an inbound assertion it never solicited, about a person it does know, affecting a care option it is coordinating. GCE assumes OMNI initiated the exchange (`capability contract → … → context packet → consent/grant`). **An unsolicited external commitment arriving from a principal OMNI has no participation agreement with is not obviously in GCE's shape.** That is a real question, it is **generic counterparty physics rather than financing**, and it is recorded at §11 rather than answered here.

**Finding 6 — the consortium question has a home already.** "Why wouldn't a large federation band together and offer credit?" is the **Counterparty Participation Economics Gate (Gate B)** and the **formation ladder** in `v4_C4_residual_moat_and_network_formation_doctrine.md` §11 — including the four N=1 bootstrap mechanisms and the explicitly-named "**distribution-rich consortium**" adversary (§12). That artifact is a **CANDIDATE**, not doctrine. The question is strategic, it is already framed, and it should not be re-derived inside Insurance.

**Net effect on the gate.** The fixture **strengthens** the selected verdict. A manufacturer-originated, lender-underwritten, app-distributed financing offer is a new *counterparty capacity* over an existing ratified constitution (GCE) — not a new financing substrate. It changes two enumerations, raises the priority of two open rows (`REV-160`, `REV-185`), and adds one open ownership question. It creates no new owner.

---

## §5 — AGREEMENT / PARTY-POSITION CONSTELLATION — INDEPENDENT DISPOSITION

Adjudicated on its own terms, as instructed, and not treated as the arc's nucleus merely because Gate 0 thought it might be.

**What was inspected.** Federation contract in full (§3 ownership boundary, §4 canonical objects, §5 permeability mechanism, §6 invariants, §8 disposition, §9 open items). C4.6 §0.5/§3/§6/§11. C4.3 §4 crosswalk in full. REV-184 §0. Clinical Memory §5/§5.1. Care capture L171/L354. Open-review rows REV-141/157/159/160/185/187. Pattern sweep across `.cursor/plans/**` for `sponsor_site_contract`, `participation_agreement`, `contracted_rate`, `agreement_id`, `mutual`, `bilateral`, `counterparty_agreement`, `terms_version`.

**Findings, decomposed rather than lumped.**

1. **Unilateral assertion — EXISTS, richly owned.** Clinical Memory for care facts (`authored_by` locked at write, authority precedence, coexisting contexts, `unresolved_conflict`); GCE `evidence` / `observation` / `proposed-meaning` for external inbound.
2. **External commitment — EXISTS as a *classification*, ABSENT as a *carrier*.** GCE's fourth class, `externally_committed_truth`, is ratified and precise: committed in the **source** system, not OMNI-committed. REV-184's `gate_holder_posture: external_authority_committed` is the decision-side counterpart. But C4.3 §4 names the gap directly: "external grant/operator boundary/**custody offer+acceptance** | Federation + RBAC | current + EVRUN-008 R3 gap | partial | **external accepted-custody carrier ABSENT**." **The vocabulary is ratified; the row that holds an accepted external commitment is not built.**
3. **Mutually constituted agreement as a first-class contested object — NOT FOUND in the stated radius.** The nearest things, and why each is not it: Federation's grants are **unilateral, issuer-owned, consent-gated and revocable within one deployment** — they are authorizations, not bargains, and no counterparty can contest one; C4.6 carries "**participation-agreement**" only as a **configuration attribute of a connection instance** (§3 L134) and "under what agreement" as a **profile attribute** (§0.5 item 2) — the noun appears, the object does not; `REV-187` names `sponsor_site_contract` + `payment_schedule` for trial access, **and I did not read the C3.7 bodies** (declared limit — this is the most likely place a real carrier hides).
4. **Each party's current position, and conflicting positions — EXISTS, generically and substantially.** REV-184 spine line 4 is **`disagreement-as-escalation`**, its graph rule preserves concurrent conflicting stances rather than merging to one, and `dispute` is a first-class stance. Clinical Memory holds both assertions live with `unresolved_conflict` and fail-closed high-risk gates. C4.3 `O3` types the states (`wrong ≠ stale ≠ disputed ≠ uncertain ≠ bad-outcome`) and `O4` forbids force-matching one owner's correction onto another.
5. **Operative posture while unresolved — PARTIALLY EXISTS; the named residual is real.** Present: `O2` operative-view-corrected-without-erasure; `O7` continuing-care-posture-declared; `O19` proportionate precaution; CM's authority-ranked current view; REV-184's `defer` / `preserve-option`. Gate-0's precise formulation of what is missing survives my verification: there is no **operative-position primitive** distinct from (i) the authority-ranked current view, (ii) each party's committed stance, and (iii) eventual owner-specific reconciliation. Note carefully: this is a *distinctness* gap, not an absence.
6. **Repudiation / withdrawal / effective-period change / versioned terms.** Withdrawal and prospective revocation: **EXISTS** (C4.3 **S20-A**). Retroactive invalidity: **EXISTS as a generalized class** (**S20-B** + the §8 generalization, routed to C5). Effective-period change: **EXISTS** temporally (T-01/T-02, `effective_date`/`termination_date` even in the committed `patient_insurance_details`). Versioned terms: **EXISTS as a pattern** (Settings temporal versioning; `eligibility_decisions.rule_version`; C4.6's per-posture `as_of`/`supersedes`/`reopen_trigger`) — but no versioned *bilateral instrument*.
7. **Who may transition each state.** Fully answered for the OMNI-internal cases (RBAC capability + owning-domain commit + Federation Tier-4 attestation for permeability). **Unanswered for the bilateral case, and the honest answer is that in many real disputes nobody inside OMNI has the authority** — resolution is contractual, arbitral or judicial, external by construction. That is itself an architectural fact: whatever OMNI builds must be able to hold a state whose transition authority is outside OMNI entirely.

**Is disagreement generic or financing-specific?** **Generic, decisively.** Every mechanism above was built for clinical, custody, identity, consent and counterparty cases with no financing involvement. Gate-0 reached the same conclusion at §C.4a ("**Why this matters beyond insurance** … delegated credentialing, employer sponsorship, pharmacy and vendor agreements, research sponsorship, risk-sharing arrangements, federation participation and external custody acceptance"). My independent verification confirms it and adds that the *specific* named absences (accepted-custody carrier; operative-position primitive) both sit in **Federation + RBAC + C4.3** territory, not in a financing lane.

**DISPOSITION: `UNRESOLVED — MORE EVIDENCE REQUIRED`, narrowed to two specific, non-financing questions, and explicitly NOT a new domain.**

- **A-Q1 — the external accepted-custody / accepted-commitment carrier.** Named absent by C4.3 §4 and EVRUN-008 R3. Owner candidates: **Federation + RBAC** (C4.3's own attribution). This is generic counterparty physics. **Do not mint it in the Insurance arc.**
- **A-Q2 — the operative-position primitive.** Whether operating-while-contested needs a first-class primitive distinct from the authority-ranked view and each party's stance. Owner candidates: **REV-184 / CNS** (the resolution record already holds stance and posture) or **C4.3** (operative view). Also generic.
- **A-Q3 — declared, not answered.** The C3.7 bodies were not read. `sponsor_site_contract` may be a real bilateral carrier. **A claim that OMNI has no agreement object anywhere is not supported by my radius and I do not make it.**

**Do not mint a universal Agreement object.** Nothing in this gate earns one, and `GRD-026` plus C4.6's shadow-domain ruling both cut against it.

---

## §6 — EXTERNAL ASSERTION vs EXTERNAL COMMITMENT (H-N2) — INDEPENDENT DISPOSITION

Gate 0 surfaced H-N2 as "an explicit typed distinction … carried in prose and in plane-separation, but **not** as a paired first-class schema." Tested here against C4.3 / GCE / counterparty / authority doctrine rather than accepted.

**Does the distinction already exist under another name? YES — and it is ratified, which Gate 0 did not establish.** GCE classifies every returned external status into **`evidence` | `observation` | `proposed-meaning` | `externally_committed_truth`**, with the qualifier "committed in the SOURCE system, not OMNI-committed," under `D0THES-DEC-036` + `GRD-033`/`GRD-034`. That is a **four-way** distinction, strictly finer than H-N2's two-way one. Gate-0's framing understates what exists.

**Is it generic counterparty physics rather than financing? YES.** It was authored for pharmacy dispense events and carrier tracking scans. The C4.6 text is explicit that the seam "MUST be expressible for a **generic external vendor**, not just a pharmacy."

**Does a commitment have distinct creation / revocation / expiry / correction authority? YES, and the estate says so from three directions.** Creation: **the external principal, in its own sovereign system** — "External systems never own OMNI-owned canonical truth. They MAY be authoritative for facts committed within their own sovereign systems." Revocation/expiry: the ten-state external-custody ladder (`offered / transmitted / technically_acknowledged / accepted_for_reconciliation / rejected / expired / unknown / corrected_locally / remaining_consequence_accepted / remaining_consequence_unowned`) plus REV-184's `supersession_reason: external_action`. Correction: **not OMNI's** — `O4` owner-committed-own-correction, no force-match.

**Have confirmation / acknowledgement / acceptance / commitment been improperly collapsed? NOT in doctrine — and the estate treats the collapse as a *tested failure mode*.** `O10 ACK ≠ accepted-custody` is an oracle; **M04** ("transport ACK treated as custody") was executed by an adversary and **CAUGHT_UNAMBIGUOUSLY**; C4.6's rung ladder carries hard guards ("an ACK/receipt populates transport-ack ONLY … a counterparty-acceptance assertion … **MUST NOT itself set accepted state**"). **The collapse is not a doctrinal gap; it is a mutation the estate already detects.**

**Is a new owner needed? NO. What is missing is a carrier, not an owner** — the same absence as §5 A-Q1: "external accepted-custody carrier **ABSENT**," attributed by C4.3 to **Federation + RBAC**.

**Where OMNI is the authoritative party — the case that must not be lost.** When OMNI's own operator issues the commitment (a guarantee, an accepted estimate, an in-house financing approval, a sponsor undertaking), it is **not** an external commitment and **must not** be modelled through the external-assertion machinery. It is an OMNI-side speech act with its own liability, which is Gate-0's **H-N3** (communicative act) and Gap **G7**. Gate 0 already argued H-N3 generalizes past insurance (consent disclosures, medication warnings, aftercare, price quotes) and therefore belongs **above** insurance; my reading agrees and adds that D7 owns the artifact while the *act* is unowned. **The vendor-financing fixture makes this urgent** — a federation offering its own credit is issuing exactly this kind of binding speech act.

**DISPOSITION: `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`. H-N2 is substantially answered by ratified GCE doctrine and should be closed as a financing hypothesis.** Its true residue is one generic carrier gap (A-Q1, Federation + RBAC) and one adjacent unowned act (H-N3 / G7), both of which belong above the Insurance arc.

---

## §7 — IMPLEMENTATION-SURFACE RECONCILIATION

**Evidence basis: I read both `CREATE TABLE` statements, their indexes, RLS policies, grants, triggers and table comments directly in the migration files at `d592e40`.** File-set bounded by a sweep across `supabase/`, `lib/`, `app/`: exactly eight files reference either table — `supabase/migrations/{20260504120000_intake_foundation_v1, 20260505120000_intake_emission_orchestrator_v1, 20260506120000_phase_4c_pre_primitives_tenancy, 20260507120000_phase_4c_pre_source_wiring, 20260508120000_phase_4d_artifact_pipeline}.sql`, `lib/entities/insurance-details.ts`, `lib/intake/write/insurance_details.ts`, `lib/intake/documents/types.ts`. **The three middle migrations and the three TypeScript files were located and bounded but not read line-by-line — declared limit.**

| Axis | `payer_eligibility_documents` (`20260508120000`, L322–390) | `patient_insurance_details` (`20260504120000`, L484–500, 523, 543) |
|---|---|---|
| **What it stores** | An **artifact** (bucket/path/mime/size/`content_hash_sha256`) **fused with** coverage-identity fields (`payer_name` NOT NULL, `plan_id`, `member_id`, `group_id`) and a `card_side` discriminator | **Staff/intake-entered administrative coverage data**: `coverage_type`, `carrier_name`, `plan_name`, `member_id` NOT NULL, `group_id`, `subscriber_name`, `subscriber_dob`, `relationship_to_subscriber`, `effective_date`, `termination_date`, `card_image_storage_id` |
| **Who writes** | **Not `authenticated`** — `revoke insert, update, delete … from authenticated` and `from anon`; writes arrive through a `SECURITY DEFINER` routing RPC that maps `insurance_card_front`/`insurance_card_back`/`payer_eligibility_document` → this table (L486–541) | **`authenticated`, in place.** Present in the RLS-enable list and given `pid_staff_read` for SELECT, but **absent from the `revoke update` block** at L548–557, which covers ten sibling tables. A `touch_updated_at` trigger is attached |
| **Provenance** | Strong: 10-value `source_kind` enum, `source_id`, `source_routing_id` FK to `patient_document_routing`, `content_hash_sha256`, `supersedes_document_id` self-FK | Weak: `verified_by_user_id` only — **verification is modelled as a staff act; there is no representation of a payer-sourced confirmation at all** |
| **Temporal** | `uploaded_at`, `verified_at`, `expires_at`, four-state `status` incl. `superseded` + supersession chain | `effective_date`, `termination_date`, `created_at`, `updated_at` (mutated by trigger). **No supersession chain** |
| **Correction** | Append-and-supersede, enforced by grants | **In-place mutation, by construction.** `is_active boolean` + touch trigger + no revoke |
| **Tenancy** | `org_id` NOT NULL (defaults `current_org_id()`, FK to `orgs`), `brand_id`, `data_environment` 4-value CHECK; org+env index | **None.** No `org_id`, no `brand_id`, no `data_environment`. Tenancy is inherited only transitively through `patient_id` |
| **Linkage** | `patient_id` FK; `source_routing_id` FK | `patient_id` FK only |
| **Classification** | **Artifact + extracted/entered data fused.** Its own comment: "Section 1O.4.2 minimal target for insurance-card uploads. **Routing-only shape**; full insurance-domain design (eligibility checks, claims, prior auth) **deferred to future Section**" | **Administrative projection / staff-entered convenience.** No comment claiming authority |

**Overlap, stated exactly.** Both hold `member_id` and `group_id`; `payer_eligibility_documents.payer_name` and `patient_insurance_details.carrier_name` are the same real-world fact under two names. **There is no foreign key, no shared coverage identity, no source-authority relationship and no operative-view contract between them.** A concrete path by which one fact lands in both: a patient photographs a card at intake → the routing RPC writes `payer_eligibility_documents` with `source_kind='patient_self'` → a staff member separately keys the same carrier and member number into `patient_insurance_details` and sets `verified_by_user_id` to themselves. Two rows, same fact, different tenancy models, different mutability, no link, and the one carrying a "verified" marker is the one with **no** provenance model.

**The finding Gate 0 did not name, and it is the most consequential one here.** The two surfaces sit on **opposite sides of the one foreclosure Gate 0 identified as structurally irreversible.** Gate-0 §J.5.1: "Coverage must be **person-scoped, not tenant-scoped.** This is the one structurally irreversible foreclosure." `payer_eligibility_documents` is **explicitly tenant-scoped** (`org_id` + `brand_id` + `data_environment`). `patient_insurance_details` is **accidentally person-scoped** (no tenancy columns at all). Neither is a considered position on the question Gate 0 called irreversible — one inherits tenancy from a document pipeline, the other omits it from an intake table. **Whichever is later declared the coverage carrier silently decides the foreclosure**, and the decision would be made by a migration author, not by an architecture gate.

**What is proven vs not proven.**
- **Proven:** field overlap; absence of linkage; absence of any declared authority relationship; the mutability asymmetry; the provenance asymmetry; **the tenancy asymmetry**; the four-jobs-in-one-enum defect on `eligibility_status` (`uploaded` = artifact state, `pending_verification` = exchange state, `verified` = counterparty assertion, `expired` = staleness, with `rejected` ambiguous between extraction failure and "no coverage").
- **Not proven, and I make no claim either way:** that either surface is canonical (**neither is** — one is self-described routing-only, the other has no authority claim), and **deployment**. **No deployment receipt was inspected or produced in this lane.** Repository presence proves committed migrations, not an applied production database.

**Consequences of treating either as authoritative.** Treating `patient_insurance_details.is_active` as coverage truth means a boolean, mutable in place, with no supersession chain and no payer-sourced confirmation, answers "does this patient have coverage?" — and destroys the only question that matters in a November billing dispute: *what did we believe on date D, from whom, and how sure were we?* Treating `payer_eligibility_documents.eligibility_status = 'verified'` as coverage truth conflates a staff or extraction act with a counterparty assertion across four owners and two authorities in one column.

**Disposition.** This is a **containment hazard, not an architecture.** Gate-0's proposed `INS-HAZ-COVSURF` (four clauses + a checkable trip condition, inert until four integrator landings occur) remains the right instrument and **remains unlanded and unenforced**. My contribution is to add a fifth clause and to sharpen the trip condition:

> **Proposed clause 5 (new):** no migration may add tenancy columns to `patient_insurance_details`, nor remove them from `payer_eligibility_documents`, without the person-vs-tenant scoping decision being made explicitly at the owning gate. **The tenancy asymmetry is the live form of the one irreversible foreclosure.**

**No migration is recommended and none is written here** — for the reason Gate-0 gave itself at R5: coverage identity is a one-way door, and a schema change now would encode an owner this gate has deliberately not created.

---

## §8 — FINAL OWNERSHIP DECOMPOSITION

**Authoritative owners retained (no change proposed to any of them):**

| Truth | Owner | Authority / maturity |
|---|---|---|
| Money movement, order/sale, entitlement + redemption, refund/void/credit/adjustment, promo, tax, commission, attribution | **D6** | `canonical` · `draft_for_ratification` |
| Care-side assertions, adoption, authority precedence, conflict | **Clinical Memory** | `canonical` · `draft_for_ratification` |
| Resolution record / stance / disagreement / posture (process-state, not truth) | **CNS**, per REV-184 §0.4 | signed-off law; field-set at C5 |
| Authority, capability, blast-radius, autonomy gate | **RBAC** | `canonical` · `draft_for_ratification` |
| Topology, legal entity, jurisdiction, licensure, cross-operator grants | **Federation** | `canonical` · `draft_for_ratification` |
| Artifacts, consent artifacts, disclosure, proof lineage | **D7** | `canonical` · `draft_for_ratification` |
| Service/catalog definition, policy values, config | **Settings/Catalog** | `canonical` · `draft_for_ratification` |
| Workforce, labor cost, payroll compute | **BIZOPS** | `canonical` · `draft_for_ratification` |
| Fulfillment-state slice + obligations arising from a stance | **OFC** | `draft_for_ratification` |
| Any external counterparty's own commitments and determinations | **that counterparty**, held under **GCE** as `externally_committed_truth` | GCE ratified (`DEC-036`) |

**Seams / projections required (all pre-existing; none new):** GCE for every external financing counterparty (lender, payer, sponsor, manufacturer program, custodian) — **the exact same spine already ratified for pharmacy**; the Care per-plane admissibility model for `appropriate-but-not-covered` and its siblings; REV-184's resolution record + rationale-class for care-time reliance; C4.3's correction-impact projection (commits nothing, owns nothing) for retroactive changes; a non-canonical longitudinal financing-context projection **if** one is ever assembled, subject to the §4.3 watch condition.

**Genuinely new lifecycle:** **exactly one — contemporaneous resource incidence (F3) — and it is not financing.** Routed to `Non-Labor Operator-Economics + Counterparty Gate-0`.

**Genuinely new owner:** **none.**

**Proposed common vocabulary REJECTED, with the reason recorded:**
- *"Financing substrate" / "care-financing layer"* — no F-law requires it; six of seven dissolve into existing owners.
- *"Funding-participation object / interface"* (Gate-0 §C.2, falsifiable **F8**) — **F8 resolves against the interface.** Gate 1a declined to establish it; Gate 1b finds the estate already supplies the same function generically through GCE + capability profiles. Minting it would be `GRD-026` at the interface layer.
- *"Position ledger" / minimal position constitution* — rejected on correction-law divergence (§4.1).
- *"Dedicated care-impact seam"* — rejected as duplicative of an existing generic seam (§4.2).
- *"Payer domain"* — remains strongly contraindicated; reaffirmed, not re-argued.
- *"Universal Agreement object"* — not earned (§5).
- *"External assertion vs external commitment as a net-new typed pair"* — subsumed by GCE's ratified four-way classification (§6).

---

## §9 — CANDIDATE CONSTITUTIONAL / SPINE PROPOSITIONS

Only propositions **earned by this gate**. Each carries lineage, authority state, a falsifier, and an explicit inherited-vs-financing-specific mark. **None is promoted. All are `analysis_nonbinding` candidates.**

| # | Candidate proposition | Source lineage | Authority state | Falsifier | Inherited or financing-specific? |
|---|---|---|---|---|---|
| **P1** | Care occurrence entails no financing lifecycle; **absence must be representable as absence**, distinct from unknown, deferred and disputed. | Phase-B F1 + raw M15; D6 §8.1/§8.2; Care per-plane `not-applicable` | candidate; the D6 half is already contracted | A regime in which every care event necessarily creates at least one financing position | **Inherited** (D6 contract + Care capture) |
| **P2** | Care-relevant economic positions are non-substitutable; equivalence is regime-scoped and must be **declared**, never inferred. Vendor names are labels; **a lender is not a payment method**. | Phase-B F2; `GRD-026`; D6 §2/§9; `REV-160`; the stranded `financing_arrangement` shape | candidate guardrail + a **D6 specialization**, not a new owner | Three regimes where creation and correction of a position are the same operation with the same conservation posture | **Financing-specific specialization** of an inherited non-identity rule |
| **P3** | Later allocation cannot rewrite historical incidence; **effective-time invalidity ≠ prospective revocation**. | Phase-B F4; C4.3 O1/O2/O20 + **S20-B** generalization; C4.5 T-02/T-08/T-19; REV-184 line 5; D6 §8.7 | **already a design-validated general class**, routed to C5 | A mechanism making the earlier actor's historical position identical to the no-advancement counterfactual | **Inherited** — and the general class already exists |
| **P4** | Financing reversal and care/resource irreversibility close on **independent horizons**; neither propagates automatically to the other. | Phase-B F6; D6 §8.1; C4.3 O8/O22 + S12 + M05/M06 | candidate; the D6 half contracted, the Care half **not yet symmetric** | A reversal that restores the prior care state and all lost alternatives | **Financing-specific specialization** |
| **P5** | **NORMATIVE.** Composed support is derived, time-bounded, rule-versioned and source-preserving; the composed statement is never canonical. | Phase-B **F5 — normative constitutional commitment**; `D0THES-DEC-033`; C4.3 O5 + PROP-03; C4.5 T-11; `eligibility_decisions` committed pattern | **candidate — and explicitly NORMATIVE. This gate provides no basis for reclassifying it as structural and does not do so.** | All multi-source arrangements are unrestricted, fungible, independent and simultaneous | **Inherited projection discipline**, re-affirmed for financing |
| **P6** | **NORMATIVE.** Where a care decision is **materially affected** by a financing or resource assertion, the assertion's source, authority, scope, times, uncertainty and effect on the feasible set must remain reconstructable **separately from the care rationale**, subject to visibility rights — realized as one value in REV-184's rationale-class, **not** as a financing object. | Phase-B **F7 — normative constitutional commitment**; REV-184 §2 item 3 + spine line 5; C4.3 O12/O17/O18; C4.5 T-06/T-09/T-22 | **candidate — and explicitly NORMATIVE. This gate provides no basis for reclassifying it as structural and does not do so.** | An arrangement preserving care history, agency, conservation and accountability while letting a financing-induced feasibility change be indistinguishable from the care rationale | **Inherited** — the rationale-class is generic; financing is one member |
| **P7** | **Wording correction to F7, earned here.** F7 says "materially **relies**." `T-06` forbids a cognitive-reliance claim without supporting evidence. The realizable obligation is **exposure-and-reference**, escalating to reliance only where attested. | C4.5 `T-06`; C4.3 `O18` exposure≠causation + `M22` caught | candidate correction to a candidate law | Evidence that clinician reliance is directly and reliably observable | **Inherited limit** on a normative financing candidate |
| **P8** | An external principal's assertion or commitment stays that principal's truth. OMNI originates only the **normalized representation**, the **recognition rule**, and the **portable proof shape** — never the obligation. | C4.6 §6 verbatim; GCE `DEC-036` | GCE **ratified**; the C4.6 sentence `analysis_nonbinding` | A case where OMNI must originate a bilateral obligation to preserve coherence | **Inherited, ratified** — not a financing discovery |
| **P9** | **Counterparty capacity is a tuple.** A single legal entity may simultaneously be supplier, brand principal, loyalty operator, **financing originator** and quality-evidence issuer; capacities do not inherit each other's authority. | C4.6 §0.5 item 2 + §11 loyalty guard; **extended by the §4.5 vendor-financing fixture** | C4.6's counterparty-noun≠lifecycle is a **`proposed L2 keeper`, explicitly not inherited ratified law**; the financing-originator capacity is **new here** | A financing counterparty whose capacities cannot be separated without losing meaning | **Inherited mechanism; the enumeration extension is financing-specific** |
| **P10** | Where the party supplying financing also benefits from care volume, the **economically-blind recommendation invariant must be structural**, not policy. | `REV-185` (open, requires "STRUCTURAL, auditable … not a policy"); Care capture L170; §4.5 Finding 3 | candidate **priority-raise on an existing open row**, not a new proposition | Evidence that policy-level enforcement is sufficient in practice | **Inherited invariant; the vendor/federation-financing case raises its urgency** |

---

## §10 — TASK-D RELIANCE BOUNDARY

**Task-D MAY rely on:**
1. The **F1–F7 dispositions at §3.8** — six of seven inherited, specialized or projection-only; one genuinely unowned.
2. **No new financing domain, owner, object, lifecycle or interface is created by this gate**, and none is required by the surviving laws.
3. **GCE is the ratified constitution for every external financing counterparty** (`D0THES-DEC-036`; `GRD-033`/`GRD-034`), with its four-way classification of returned state.
4. **C4.6 §11's composed-profile-not-domain ruling is the governing structural precedent** for a sovereign external counterparty, and the **unified Vendor Loop rejection** is the governing precedent against a unified financing loop.
5. **F3 is routed out of the Insurance arc** to `Non-Labor Operator-Economics + Counterparty Gate-0` — as a **routing proposal pending Nick/Knox**, not a landed decision.
6. **H-N2 is substantially answered** by ratified GCE doctrine and should close as a financing hypothesis; its residue is a generic carrier gap.
7. **F5 and F7 remain normative constitutional commitments.** Nothing here reclassifies them.
8. The **implementation reconciliation at §7**, including the previously-unnamed **tenancy asymmetry**, all verified against DDL.
9. The **`REV-160` currency finding** — a `derived_nonbinding` `financing_arrangement` shape exists and was never carried into the D6 contract.
10. `REV-185` structural enforcement is **absent**, and the vendor/federation-financing trend raises its priority.

**Task-D MUST NOT rely on:**
1. F1–F7 as settled spine laws. They are candidates; §9 marks each.
2. **P5 or P6 as binding.** Both are normative and unaccepted.
3. Any claim that a concept is absent **from OMNI** rather than **from the §0.4 radius** — in particular the agreement-object question, where the C3.7 bodies were not read.
4. The F3 routing as landed. It is proposed.
5. Anything about **deployment** of the two implementation surfaces. No receipt was inspected.
6. Gate-0's five-zone model, its funding-participation interface, or its longitudinal-financing-context moat as decided. F8 is answered here **against** the interface; the moat is untouched by this gate and remains Gate-0 U11.
7. Any assumption that this gate read the whole estate. §0.3 lists what it did not.
8. The maturity of the inherited machinery. Care capture is **REVIEW-DRAFT, not closed**; C4.3 is **implementation absent/partial**; C4.5 is **charter-accepted, pass not started**; every contract cited is **`draft_for_ratification`**; C4.6's counterparty-noun≠lifecycle is a **proposed L2 keeper, not ratified law**.

**Task-D MUST remain free to falsify:**
1. That the verdict is right — specifically, that decomposition 1 fails on correction-law divergence (§4.1). That argument is mine and it is the load-bearing one.
2. That F3 is operator economics rather than financing.
3. That the generic seam suffices, i.e. that no financing-specific field is needed at the care boundary.
4. That "care-financing physics" is a useful architectural layer at all. The Phase-B invalidation condition's first limb is live and this gate finds substantially in its favour.
5. That the GCE precedent transfers from pharmacy to financing. The structural analogy is strong but it is an analogy.
6. That six of seven inheritances hold once the inherited machinery is actually contracted and built rather than designed.

---

## §11 — OPEN QUESTIONS / EVIDENCE DEPENDENCIES

**A — Repository architecture questions (answerable inside the estate):**
- **A-Q1** External accepted-custody / accepted-commitment carrier — named ABSENT by C4.3 §4; candidate owner Federation + RBAC. Generic, not financing.
- **A-Q2** Operative-position primitive — distinct from the authority-ranked view and each party's stance? Candidate owner REV-184/CNS or C4.3. Generic.
- **A-Q3** Does `sponsor_site_contract` (`REV-187` / C3.7) constitute a real bilateral agreement carrier? **The C3.7 bodies were not read.** This must be resolved before anyone asserts an estate-wide agreement gap.
- **A-Q4** `REV-160` reconciliation — carry the `derived_nonbinding` `financing_arrangement` shape into the open row and decide it; make the obligor **principal-agnostic** so an internal legal entity can be the creditor.
- **A-Q5** Person-vs-tenant scoping for coverage — the §7 tenancy asymmetry. **The one irreversible foreclosure, currently being decided by omission.**
- **A-Q6** Symmetric statement of `payment state ≠ care state` on the Care side (today it is a D6-only invariant).
- **A-Q7** Unsolicited external commitment — a financing commitment originated in a third-party surface, from a principal OMNI has no participation agreement with, arriving inbound. Is that in GCE's shape? (§4.5 Finding 5.) Generic counterparty physics.
- **A-Q8** `REV-185` enforcement mechanism — what makes economically-blind recommendation *structural*? Owner CNS/Network-Governance. Not an Insurance question, but the financing trend raises it.
- **A-Q9** H-N3 / Gap G7 — the communicative act (issued estimate, guarantee, financing approval). Unowned; generalizes past insurance; urgent if a federation issues its own credit offers.

**B — External empirical / legal / economic questions — `EXTERNAL_EVIDENCE_REQUIRED`.** Recorded, not answered, and **not filled from model memory**:
- **B-Q1** Whether a lender-originated obligation legally substitutes the obligated party such that refunds must route to the lender, and under which arrangements. *(Gate-0 asserts this at L12/S11; it is not promotion-grade in the repository.)* **Architectural conclusion left unresolved: whether refund-destination is a `financing_arrangement` field or a policy.**
- **B-Q2** Whether a manufacturer-operated program that both funds a rebate and distributes a lender's credit offer creates a single regulated relationship or several. **Bears directly on P9's enumeration; left unresolved.**
- **B-Q3** Whether an operator/federation extending credit to its own patients triggers lending, TPA or utilization-review licensure. *(Adjacent to Gate-0 kill-condition 8.)* **Feasibility of the federation-financing case left unresolved.**
- **B-Q4** Frequency and materiality of contemporaneous incidence — Phase-B hard fork 2. Needed by the operator-economics lane, not by this one.
- **B-Q5** Whether care actors need a stable cross-regime assertion or only source-specific information — Phase-B hard fork 3. Would falsify or confirm §4.2.
- Gate-0's `evidence_pending_ingestion` debt (§§F/G/I/J) is real, **remains undischarged**, and is **not** a Gate-1b prerequisite. No external market or regulatory claim in this carrier is offered as promotion-grade.

**C — Implementation-proof questions:** deployment state of both surfaces (no receipt); whether any consumer already reads `is_active` or `eligibility_status` as coverage authority (the three unread middle migrations and three TS files are where that would show); whether `patient_insurance_details` is in fact writable by `authenticated` at runtime given grants defined elsewhere.

**D — Later contract questions (C5, explicitly not now):** the `financing_arrangement` field set; the rationale-class enumeration; the accepted-custody carrier's fields; elevation of `temporal_truth_pair` (`REV-200`) out of legacy; the coverage-identity owner and its scoping.

---

## §12 — RETAINED AND REJECTED ALTERNATIVES

| Alternative | Disposition | Why it lost — preserved so it is not silently re-derived |
|---|---|---|
| **Minimal position-and-incidence constitution** (raw 1) | **Rejected** | The Clinical Memory analogy that makes it credible also breaks it: CM has **one** correction law because every producer asserts the same kind of proposition; economic positions have **four** (reverse-with-conservation / discharge-waive-novate-with-successor-acceptance / expire-or-void / silently-withdraw). Raw 1's own burden is *same authoritative write and correction*, and the estate supplies same-read, four-writes. F1 additionally makes its normal row empty in the wedge vertical. |
| **Source-native + dedicated attributed care-impact seam** (raw 2) | **Reasoning accepted; conclusion rejected** | The seam it proposes already exists in OMNI, generically, as GCE + Care per-plane admissibility + REV-184 rationale-class + C4.3 O10/O17/O18 + C4.5 T-06/T-20. Minting a financing-specific one is `GRD-026` at the seam layer, and C4.6 §11 + the unified-Vendor-Loop rejection are the direct precedents. **Retain its reasoning; it is why the generic seam must not be flattened.** |
| **D6-centred extension as the whole answer** | **Partially retained** | D6 legitimately absorbs the `financing_arrangement` specialization (`REV-160`) and the reversal half of F6. It cannot absorb coverage identity (person-scoped vs D6's operator-scoped grain — Gate-0 §E.3.1, and §7's tenancy asymmetry is the live instance), nor contemporaneous incidence (F3, which is not commerce). |
| **Write-authority five-zone decomposition** (Gate-0 §C.1) | **Not adopted** | Already demoted by Gate-0 itself at 0R on Knox's argument. This gate adds nothing in its favour and does not revive it. |
| **Funding-participation interface** (Gate-0 §C.2, falsifiable F8) | **Rejected — F8 resolves against it** | Gate 1a declined to establish it; Gate 1b finds GCE + capability profiles already supply the function generically. |
| **A general Agreement / party-position substrate** | **Not earned; narrowed to two generic questions** | Real machinery exists (§5.4). What is absent is narrower than "agreements": an accepted-custody carrier and possibly an operative-position primitive, both generic, both outside Insurance. And the C3.7 bodies were not read. |
| **H-N2 as a net-new typed pair** | **Closed as a financing hypothesis** | GCE's ratified four-way classification is strictly finer than the proposed two-way distinction. |
| **Insurance as a payer-named domain** | **Reaffirmed contraindicated** | Not re-litigated. `FWREG-017` + `GRD-026` + C4.6 counterparty-noun≠lifecycle. |
| **Immediate migration on the two coverage surfaces** | **Rejected again** | One-way door. Ownership is the input to the schema, not the output. Containment only. |
| **Treating vendor-originated financing as new physics** | **Rejected** | It produces no eighth law. It extends two enumerations and raises two open rows. See §4.5. |
| **Starting the operator-economics lane here** | **Rejected** | Out of scope, unauthorized, and the checkpoint says sequencing is operator-controlled. F3 is *routed*, not *started*. |

---

## §13 — SMALLEST NEXT GATE

**One narrow follow-up is enough. Do not manufacture a program.**

> **`INS-G2-CONTAINMENT-AND-SPECIALIZATION`** — a single bounded pass with two deliverables and no new architecture:
> 1. **Land `INS-HAZ-COVSURF`** (Gate-0 §K.1 clauses 1–4 **plus §7's new clause 5 on tenancy**) through the four integrator landings that make its trip condition active. Until they land, the hazard is a recommendation any consumer may ignore, and the two surfaces keep accumulating.
> 2. **Close `REV-160`** by carrying the already-existing `derived_nonbinding` `financing_arrangement` shape into the D6 open row, with the obligor made **principal-agnostic**, and with a decision on whether `payment_method` may continue to class a lender with a rebate.

**Everything else this gate surfaced is already someone else's routed work and should go there rather than into a new Insurance gate:** F3 → the `Non-Labor Operator-Economics + Counterparty Gate-0` lane · A-Q1/A-Q2 → Federation/RBAC + REV-184/C4.3 · A-Q5 → the coverage-identity owner decision, which is the input to any future schema work · A-Q8 (`REV-185`) and A-Q9 (H-N3/G7) → their own homes, above Insurance · A-Q3 → a fifteen-minute read of the C3.7 bodies that would close the agreement question one way or the other.

**Not authorized by this carrier:** schema, contract mutation, implementation, C5, Task-D population, C3.9 population, promotion, any `main` landing, and any start of the operator-economics lane.

**Proposed routing — PROPOSED ONLY, nothing landed** (shared control-plane surfaces are protected from this lane): one catalog row (`analysis`, `analysis_nonbinding`, status per this passport) · one Tier-2 read-graph route (*financing ownership* → this carrier → then Gate-0 carrier → D6 §12 + `REV-159`/`REV-160`) · **zero** decision-ledger rows (nothing here is a decision) · open-review updates to `REV-159` (Gate-1b ran; ownership resolved to existing owners; closure condition narrows further), `REV-160` (raise priority; carry the stranded shape; add the lender-vs-rebate question), `REV-185` (note the vendor/federation-financing pressure), and the Gate-0-proposed agreement row (**re-scope from "agreement constellation" to A-Q1 + A-Q2, both generic**) · one FWREG note routing **F3** to the operator-economics lane · one guardrail candidate (*a lender is not a payment method; vendor-name labels must not class structurally different financing kinds together*) · one conflict-ledger note on the **`REV-160` currency contradiction** (§2). **Integrator owns all of it.**

---

## §14 — STOP RECEIPT

| Field | Value |
|---|---|
| **Branch** | `cursor/ins-g1b-ownership-reconciliation`, created from `d592e402b779aaedc1f137189bf51cd2b5ca678d` |
| **Files added** | **1** — `.cursor/plans/v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` |
| **Files modified** | **0** |
| **Files deleted** | **0** |
| **Shared control-plane surfaces touched** | **0** — `AGENTS.md`, `01`/`03`/`04`/`05`/`06`/`08`, `future_work_registry.md`, the checkpoint handoff, `.cursor/rules/`, `CLAUDE.md`, `GEMINI.md`: all untouched |
| **Contracts touched** | **0** — D6, Federation, Clinical Memory, RBAC, Identity, D7, D5, D3, CNS, BIZOPS, Settings, OFC, Intake, Messaging, Observation all read-only |
| **Schemas / migrations / code touched** | **0** |
| **`main` touched** | **NO** — not merged, not fast-forwarded, not pushed to |
| **PR #4 touched** | **NO** — `analysis/insurance-payer-oop-g0` untouched at `2aabed7` |
| **PR #5 touched** | **NO** — `cursor/ins-g1a-preservation-caa7` untouched at `671d120` |
| **Sibling Phase-A lane branches** | untouched |
| **Working-tree note** | The developer worktree carried ~22 pre-existing uncommitted modifications from an unrelated lane when this run began. **They were not created, resolved, staged or committed by this lane.** All reads were performed in a disposable linked worktree pinned to `d592e40`, which is removed at stop. Only the one new file is staged. |
| **Source depths** | §0.3 — full/consulted/searched/not-inspected, itemized |
| **Inspection radius** | §0.4 — `.cursor/plans/**`, `supabase/migrations/**`, `lib/**`, `app/**` at `d592e40` + the two PR heads |
| **Deployment claims** | **NONE.** No deployment receipt inspected or produced |
| **External-evidence claims** | **NONE offered as promotion-grade.** Five `EXTERNAL_EVIDENCE_REQUIRED` items at §11-B, each leaving its architectural conclusion unresolved |
| **Subagent dependence** | **NONE.** Four reconnaissance agents were dispatched; their reports had not returned at authoring time and **no claim in this carrier depends on them** |
| **Unresolved claims** | A-Q1…A-Q9 · B-Q1…B-Q5 · C · D (§11); the C3.7 agreement-carrier question is the most likely to change a conclusion |
| **Exact review ref** | control plane `d592e402b779aaedc1f137189bf51cd2b5ca678d` · Gate-0 `2aabed770eda9ec8164efaf0c5626816b85ca224` · Gate-1a `671d120fd79c7b55325cf6e998646c02ead45f0f` |

### PRIMARY GATE-1B VERDICT

> ## `NO_SHARED_FINANCING_SUBSTRATE`
>
> **Qualified:** *existing owners plus already-generic seams are sufficient; the care-impact seam Phase-B posited is inherited, not minted; one surviving law requires a genuinely new authoritative lifecycle and it is operator economics, not financing.*

**Verdict-letter note:** this is option **A** in the kickoff §14 menu, which corresponds to **decomposition 3** in the Phase-B raw and **decomposition C** in the Gate-1a adjudication. The three letterings are not aligned; see §4's mapping table.

**Named exceptions, listed separately as instructed:**

| # | Exception | Disposition |
|---|---|---|
| **E1** | **F3 — contemporaneous resource incidence.** A genuinely unowned authoritative lifecycle. | `GENUINELY UNOWNED AUTHORITATIVE LIFECYCLE` — **routed out** to `Non-Labor Operator-Economics + Counterparty Gate-0`. Not financing. Not started here. |
| **E2** | **F2 realization — `REV-160` / `financing_arrangement`.** | `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION` in **D6**. Shape already exists at `derived_nonbinding` and is stranded. |
| **E3** | **Agreement / party-position (A-Q1, A-Q2).** | `UNRESOLVED — MORE EVIDENCE REQUIRED`, narrowed to two **generic** carrier questions in Federation/RBAC and REV-184/C4.3. Not financing. Not a domain. Radius limit declared (C3.7 unread). |
| **E4** | **The two committed coverage surfaces.** | **Containment hazard, not architecture.** `INS-HAZ-COVSURF` remains unlanded and unenforced; a fifth clause on the tenancy asymmetry is proposed. |
| **E5** | **F5 and F7.** | Remain **explicitly normative constitutional commitments**. This gate provides no basis for reclassifying them and does not. |

**STOP: `review_ready_pending_nick_knox_gate1b`**

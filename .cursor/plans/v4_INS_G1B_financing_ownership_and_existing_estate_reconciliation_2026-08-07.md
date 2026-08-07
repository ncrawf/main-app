# v4 — INS-G1B — Financing Ownership & Existing-Estate Reconciliation

Document type: `analysis` / `architecture_reconciliation` (Gate-1b ownership pass; **not** a contract, **not** a schema, **not** spine prose, **not** a new truth-owning domain)
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing. Proposes routing only.
Status: `gate_1b_analysis_reconciled_r1 · pending_nick_knox_review · not_promoted · not_integrated · no_contract_mutation · no_implementation · no_shared_surface_written`
Domain(s): `d6_commerce` · `federation` · `care_operating_model` · `clinical_memory` · `rbac_authority` · `identity` · `cns_coordination` · `bizops_workforce` · `settings_catalog` · `documents_consent_media` · `accountability_architecture` · `architecture_governance` · `cross_cutting`. **No new domain is proposed.**
Lifecycle role: reconciles the Gate-1a candidate laws `F1–F7` against the **actual committed OMNI estate** — who already owns the authoritative writes, what dissolves, what needs only a seam or policy, what remains genuinely unresolved, and whether any coherent shared financing substrate is justified. It does not decide the build.
Source-of-truth relationship: consumes read-only. Amends nothing. The Phase-B raw is **source**; the Gate-1a adjudication and handoff are **derivative interpretation**; where wording differs, **the raw wins** and this carrier cites the raw.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** (catalog row + read-graph evaluation owed at the integrator transaction — §13 routing, **not landed here**).
Review gate: `user_knox_required`

Lane: `INS-G1B-OWNERSHIP` · Parent arc: `INS-G0-MIXEDFIN` · Read order: **Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → this**

> **★ REVISION R1 — MATERIAL RECONCILIATION (this pass).** The first snapshot of this carrier (`8c9d818`) was authored **before four commissioned reconnaissance reports returned** and **before four load-bearing primary sources were read** (the ratified GCE posture, the C3.7 disposition bodies, the later insurance migrations, the Accountability/GRR capture). Knox then performed the first full-document byte review at remote head `8c9d818` and returned `REQUEST_CHANGES — PRIMARY VERDICT PROVISIONALLY RETAINED`, with eight blocking defects. **All eight are accepted; four rested on factual errors of mine, verified and retracted here.** The **primary verdict survives and is sharpened**; several of its supporting claims did not. §0.5 is the correction receipt.

---

## §0 — REVIEW OBJECT POSTURE

### §0.1 The three refs — all verified, no mismatch

| Ref | Value | Verified | What it is |
|---|---|---|---|
| **CONTROL PLANE** | `main @ d592e402b779aaedc1f137189bf51cd2b5ca678d` | ✅ exact match | Committed control-plane state. `AGENTS.md` and read-graph Tier-0 #15 both name `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`. **They agree. Internally consistent. NOT "fixed" by this lane.** |
| **GATE-0 WORKING INPUT** | PR #4, head `2aabed770eda9ec8164efaf0c5626816b85ca224` | ✅ exact match | `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` (1,245 lines at this head). |
| **GATE-1A WORKING INPUT** | PR #5, head `671d120fd79c7b55325cf6e998646c02ead45f0f` | ✅ exact match | Five-file packet: protocol (898) · Phase-A raw (1,111) · Phase-B raw (1,007) · adjudication (171) · handoff (158). |

**Two ref facts that change how the diffs read.** PR #5 branches directly from `main @ d592e40` (`merge-base` = `d592e40`); its diff is five added files, zero deletions. **PR #4 branches from `f70ff3c`, an older `main`**, so its diff against *current* `main` shows ~575 apparent deletions across doctrine surfaces — those are control-plane commits (`7da3b2a`, `d592e40`) that landed *after* PR #4 branched, **not proposed deletions**. PR #4's true contribution against its own base is one added file, 1,245 lines.

### §0.2 Current-state vs working-packet

`main` is the committed control-plane state; at this ref the checkpoint still represents `INS-G0-MIXEDFIN` as the single active Phase-A lane, which is correct-as-of-`main` and is not repointed here. PR #4 and PR #5 are newer **unmerged** working inputs; newer ≠ promoted, canonical, landed or implemented. Older `main` does not invalidate them. **Gate 1a happened**; its non-appearance on `main` is a landing fact, not an existence fact. Everything in the packet remains `analysis_nonbinding`, and this carrier inherits that posture.

### §0.3 Source posture — honest depth labels

Depth vocabulary, used strictly: **read fully** (every line) · **read load-bearing sections** (named sections read in place, remainder not read) · **consulted** (specific passages verified in place) · **searched** (pattern-located, not read) · **not inspected**.

All architecture reads were performed against a pinned, disposable linked worktree at `d592e40` with the PR packet materialized at exact heads; all code/migration reads in R1 were performed against the working tree at branch head, where `supabase/` and `lib/` are identical to `d592e40`. The developer worktree carries ~22 pre-existing uncommitted modifications from an unrelated lane, all under `.cursor/plans/doctrine/` and `.cursor/plans/HANDOFF_*`; **those files were read via `git show d592e40:<path>`, never from the dirty tree, and were not modified by this lane.**

**READ FULLY — direct working packet:** Phase-B verbatim (1,007 lines, **first action**, before any estate work) · Phase-A verbatim (1,111) · Gate-1a adjudication · Gate-1a handoff · Gate-0 carrier (1,245, three passes).

**READ FULLY — governing / load-bearing estate:** `doctrine/omni_enterprise_posture_2026-06-03.md` (**84 lines — the ratified GCE source; Tier-0 boot-visible, `agent_read_rule: tier0_mandatory`; R1 addition**) · `contracts/D6_commerce_contract.md` · `contracts/federation_contract.md` · `v4_C4_3_care_response_seam_correction_continuity_test.md` · `v4_C3_7F_disposition_gap_matrix.md` (**R1 addition**).

**READ LOAD-BEARING SECTIONS:** `v4_C4_governed_reporting_resolution_capture.md` — passport, §0, §1/§1a/§1b, §2/§2a, §3, §4, §5/§5a, §6/§6a/§6b, §7, §8, §9/§9a, §10, §11, §17, §18, §19, §20, §21, §22, §23 (**§§12–16 not read**; R1 addition) · `contracts/clinical_memory_assertion_contract.md` §1.5–§5.1 · `v4_REV184_decision_state_reconciliation.md` §0 canonical output + §1/§2 (§3–§R3.12 flagged in-file as superseded derivation; read-order guard obeyed) · `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` §0.5/§1/§4/§5/§6/§11 · `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` §0–§6 incl. all of T-01…T-22 · `v4_C4_residual_moat_and_network_formation_doctrine.md` §11–§12 · `contracts/business_ops_workforce_contract.md` §3 · `contracts/settings_catalog_contract.md` §3 · `v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` §1/§4.3/§7.1 Card 2/§11 lane table (**R1**) · `v4_C4_spine_watch_list.md` disposition gate + WI14/WI15/WI17 (**R1**).

**READ FULLY — implementation (DDL and RPC bodies read directly, not inferred; all R1-expanded):** `20260504120000_intake_foundation_v1.sql` (`patient_insurance_details` DDL L484–500; §20 RLS/append-only block L502–557) · `20260505120000_intake_emission_orchestrator_v1.sql` (`patient_column` branch L309–; insurance-details branch L478–) · `20260506120000_phase_4c_pre_primitives_tenancy.sql` (`patient_scoped_tables` L136–152; `source_aware_tables` L167–183; emission branches) · `20260507120000_phase_4c_pre_source_wiring.sql` (`patient_column` branch L351–357; insurance-details branch L545–) · `20260508120000_phase_4d_artifact_pipeline.sql` (`payer_eligibility_documents` DDL L322–390; routing RPC L486–555) · `lib/intake/question-bank/universal/insurance_payment_readiness.ts` (all emissions).

**CONSULTED:** `v4_C4_care_operating_model_capture.md` (passport + L134/L170/L171/L191/L192/L259/L270/L271/L350/L351/L354/L401/L455/L461/L487, each verified verbatim) · `v4_C3_7G_handoff_and_verdict.md` L15/L24/L56/L59/L76 (**R1**) · `01_master_corpus_catalog.md` capture row + reconciliation-map row · `future_work_registry.md` FWREG-009 (**R1**) · `03_decision_extraction_ledger.md` `DEC-036`/`DEC-027`/`DEC-028` · `08_open_review_queue.md` REV-141/157/159/160/185/187 · `05_supersession_conflict_ledger.md` (GCE↔GRR search: **no row**) · `system_map_three_layers_60706286.plan.md` L1016/L1090/L1119/L1124 · `omni_doctrine_reconciliation_map_v1_2026-05-25.md` §G2F Q-DL17 rows.

**SEARCHED:** repository-wide patterns for `financing_arrangement` · `CareCredit` · `Cherry` · `Allē` · `Aspire` · `GreenSky` · `lender` · `installment` · `sponsor_site_contract` · `participation_agreement` · `contracted_rate` · `agreement_id` · `mutual` · `bilateral` · `terms_version`; file-level sweep for the two insurance tables across `supabase/`, `lib/`, `app/`; `has_insurance|insurance_carrier|self_pay_willingness` across `supabase/` (**zero hits** — see §7); `revoke update on public.patient_insurance_details` across `supabase/` (**zero hits**); RLS policies on `patient_insurance_details` (**one, SELECT only**).

**NOT INSPECTED — named so the omission is not silent:** `v4_C3_7A/B/C/D/E` bodies (F and G read; the earlier artifacts not) · Accountability/GRR capture **§§12–16** · `HANDOFF_2026-07-12_wave4_closed_grr_pre_plastics_and_task_d.md` in full (the GRR naming lineage was verified through the capture passport, catalog row, FWREG-009, WI14 and Card 2 instead) · `v4_C4_2B`/`v4_C4_2C` (Task-D interim bodies; same limit Gate-0 declared as L4) · `v4_C4_platform_loop_capture.md` beyond its sibling-boundary references · `contracts/CNS_orchestration_contract.md`, `identity_contract.md`, `rbac_authority_contract.md`, `D7_documents_consent_media_contract.md`, `D5_*`, `observation_*`, `intake_contract.md`, `messaging_contract.md`, `ordered_fulfillment_contract.md` in full · `DL-17`/`DL-19`/`DL-21` source drafts · the full legacy three-layer map · `ingestion/` bodies except cited hits · `lib/entities/insurance-details.ts`, `lib/intake/write/insurance_details.ts`, `lib/intake/write/patient_column.ts`, `lib/intake/documents/types.ts` **line-by-line** (the SQL, not the TS, carries the load-bearing claims in §7) · off-repo `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`.

**Environment limitation (`D0OPER-DEC-004`).** The off-repository controlling plan was not inspected. Per the off-repo rule I relied on in-repo `AGENTS.md` + read-graph #15, which agree. No claim is made about its contents.

### §0.4 Inspection radius — stated once, and it does not silently widen

Every absence claim is scoped to **`.cursor/plans/**`, `supabase/migrations/**`, `lib/**`, `app/**` at `d592e40` plus the two PR heads**, by the patterns named in §0.3. "Not found" means *not found in that radius by those patterns*. It is never converted to "does not exist in OMNI." **In R0 I violated this rule twice (§0.5 C1, C4); both are retracted.**

### §0.5 — R1 CORRECTION RECEIPT (what changed, why, and on whose evidence)

| # | R0 claim | Status | Adjudicating primary source | Where fixed |
|---|---|---|---|---|
| **C1** | *"`patient_insurance_details` has no tenancy columns; it is accidentally person-scoped while `payer_eligibility_documents` is tenant-scoped."* | **FALSE — RETRACTED** | `20260506120000_phase_4c_pre_primitives_tenancy.sql` L144: the table is in `patient_scoped_tables`, which adds `org_id`, `brand_id`, `data_environment` + index | §7 rewritten; the tenancy-based containment clause is **withdrawn** |
| **C2** | *"Provenance is weak: `verified_by_user_id` only."* | **FALSE — RETRACTED** | same migration L175: the table is in `source_aware_tables`, adding `source_kind` (the same ten-value enum) + `source_id`; `20260507120000` L545–549 shows the intake write **populates them** | §7 rewritten |
| **C3** | *"The table is designed for in-place mutation, structurally available today [to `authenticated`]."* | **HALF-FALSE — NARROWED** | RLS is enabled and the only policy is `pid_staff_read` (SELECT). With RLS on and no UPDATE policy, UPDATE is denied by default. Absence from the `revoke update` block is a **design** signal, not an authority grant | §7: restated as a mutable-design posture, not an authority claim |
| **C4** | *"A patient photographs a card → the routing RPC writes `source_kind='patient_self'`."* | **FALSE — RETRACTED** | `20260508120000` L554: the routing RPC **hardcodes `'intake'`** | §7 worked example corrected |
| **C5** | *"Two implementation surfaces."* | **INCOMPLETE** | `lib/intake/question-bank/universal/insurance_payment_readiness.ts` emits three `patient_column` writes; the generic branch is a dynamic `UPDATE public.patients SET %I`; the three column names appear **nowhere** in `supabase/` | §7 rewritten around **three** surfaces |
| **C6** | *"GCE's four-way classification is strictly finer than assertion-vs-commitment, therefore H-N2 closes."* | **CATEGORY ERROR — RETRACTED** | GCE classifies **epistemic/source-authority status**; assertion-vs-commitment classifies **speech-act kind**. Orthogonal axes | §6: H-N2 **reopened** |
| **C7** | *"GCE assumes OMNI initiated the exchange, so an unsolicited external commitment may fall outside it."* | **FALSE — RETRACTED** | `omni_enterprise_posture_2026-06-03.md` §GCE: *"the universal pattern by which OMNI safely **emits to and ingests from** any actor/system — internal and external"*; **"Two faces, one spine"**; and the subfamily list **explicitly names "administrative (insurance/prior-auth/billing/claims)"** | §6 corrected; GCE now sourced from its ratified home, not through C4.6 |
| **C8** | *"F3 is a genuinely unowned authoritative lifecycle."* | **OVER-CLOSED — DEMOTED** | C4.3 Law 10.1 is itself *"a governed, versioned assessment over distributed lineage"* that commits nothing — the reconstruction alternative I asserted could not work, without testing it | §3-F3: `UNRESOLVED — ROUTE TO OPECON-G0` |
| **C9** | *"F7 is fully inherited; the only change is one rationale-class value."* | **OVER-COMPRESSED** | REV-184 §2 item 3 names the rationale-class as a **gap** with field-set deferred to C5; no first-class reliance or basis-of-decision object exists | §3-F7: `EXISTING OWNER / SEAM EXTENSION — home must be explicit` |
| **C10** | *"F5 is inherited projection discipline."* (true but incomplete) | **NARROWED** | Source preservation is necessary, not sufficient; no mixed-financing composition rule exists | §3-F5: `SEAM / PROJECTION ONLY — financing-specific composition extension required` |
| **C11** | *"No new domain, owner, object, lifecycle or interface."* | **TOO BROAD — REPLACED** | The carrier's own §8/§14 already named a financing-arrangement object, an accepted-custody gap, a communicative-act gap, and F3. The blanket wording swallowed its own exceptions | §8/§10/§14 rewritten; **universal vs regime-specific** distinction applied throughout |
| **C12** | *"A-Q3: the C3.7 bodies were not read; a bilateral-agreement carrier may be hiding there."* | **RESOLVED** | `v4_C3_7F` §1 row 19 + §2 verdict 6 + §5, and `v4_C3_7G` L24: `sponsor_site_contract`/`payment_schedule` + the sponsor-XOR-insurer coverage grid are dispositioned **`EXTEND` → D6**, not a new Agreement owner | §5 rewritten with the verified disposition |
| **C13** | *"REV-184's passport contradicts its body."* | **RECLASSIFIED** | Better reading: a signed-off spine-grade law inside an `analysis_nonbinding` artifact with C5 realization deferred — an **authority/maturity split**, not an operational contradiction | §2 contradiction list amended |
| **C14** | Accountability/GRR listed only as not-inspected; my relay commentary then over-claimed it as the home for financing disputes | **CORRECTED BEFORE ENTERING THE CARRIER** | The over-claim was made in chat and **never reached `8c9d818`**; the capture §3 scope invariant contradicts it | §2 row added; §5.5 added; terminology fixed |
| **C15** | Chat-only claim: *"GRR is retired vocabulary."* | **RETRACTED** | Capture §23: *"Do NOT lock yet: public/plane name + filename"*; FWREG-009, WI14 and Card 2 `GRR-TASKD-INPUT` all still GRR-labelled | terminology rule at §2 |

**On the four reconnaissance reports.** They were commissioned before authoring and **had still not returned to me at R1 authoring time.** Knox holds them and used them; I do not. Every correction above was therefore adjudicated against a primary repository source I read myself, which is the stronger posture and is what surfaced C3 and C5 beyond what the relay stated. **Where Knox's relay and a primary source could disagree, the primary source controls, and no claim in this carrier rests on a helper report.**

**One self-finding beyond Knox's list.** `omni_enterprise_posture_2026-06-03.md` carries `agent_read_rule: tier0_mandatory` and `add_tier0 (boot-visible)`. **It is a Tier-0 mandatory boot read and I did not read it at boot** — I reached GCE through C4.6, a nonbinding artifact. That is a boot-compliance failure, not merely a citation preference, and it is the root cause of C6 and C7.

---

## §1 — PHASE-B ANCHOR (source pointer + exact anchor; not a rewrite)

**Source:** `v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` @ `671d120`, fenced verbatim block, **"2. Final candidate physics"** (L304–618) and **"5. Final competing decompositions"** (L675–797). Read in full as this run's first action. **The raw is source; the adjudication §2 table is Knox's derivative wording and loses precision on F1, F3 and F7.**

### §1.1 F1–F7 precise law + classification receipt (quoted from the raw)

| | Precise law (raw, verbatim) | Epistemic class | Normativity | Inheritance class | Altitude (raw) |
|---|---|---|---|---|---|
| **F1** | "The occurrence of care does not logically entail the prior or eventual existence of a financing entitlement, commitment, obligation, adjudication, transfer, settlement, or shared financing lifecycle." | Descriptive structural invariant | "Structurally unavoidable within a scope that includes R12 and care-before-financing cases" | **Genuinely new candidate** | Universal boundary physics |
| **F2** | "A willingness, entitlement, commitment, obligation, resource reservation, transfer, and settlement are not mutually substitutable merely because each may affect the same care option; any equivalence is regime-scoped rather than universal." | Descriptive structural invariant | Structurally unavoidable as a non-identity rule; allowed equivalences constitutionally/legally chosen | Financing-specific specialization of inherited law | "Possible shared semantic constitution or seam; **not evidence of one shared lifecycle**" |
| **F3** | "When scarce care resources are consumed or irreversibly reserved before compensating resources arrive or responsibility closes, at least one actor's resource position or feasible alternatives change during that interval, regardless of later reassignment." | Descriptive structural invariant, **conditional on actual scarcity or counterfactual resource change** | Structurally unavoidable **if the antecedent is satisfied** | "Genuinely new candidate relative to the supplied substrate, **though it may ultimately belong to more general resource physics**" | **"Unresolved between universal care-resource physics and financing physics"** |
| **F4** | "A later reassignment, reimbursement, waiver, reversal, or settlement may change current legal or economic positions but cannot change which actors actually advanced resources or carried exposure at earlier times." | Descriptive structural invariant | Structurally unavoidable | Financing-specific specialization of inherited correction law | Universal physics |
| **F5** | "When several source positions are considered together, any combined statement of usable support or expected burden is valid only for a stated composition rule and time and does not extinguish the sources' distinct authority, scope, conditions, revocability, or history." | **Normative constitutional commitment** | **Constitutionally chosen.** "Actual priority, compatibility, and shortfall rules remain regime-specific or current policy." | Financing-specific specialization | "Projection/read model or regime-specific composition lifecycle. **It is not proof of one shared financing interface.**" |
| **F6** | "Once a care-side event or irreversible resource commitment has occurred, a later financing change may alter future feasibility or economic and legal allocation but cannot erase the earlier care state, restore consumed resources, or recreate lost alternatives." | Descriptive structural invariant | Structurally unavoidable | Financing-specific specialization of inherited correction and temporal law | Universal physics **at the care-financing seam** |
| **F7** | "When a care decision materially relies on a financing or resource assertion, the relied-on assertion and its source, authority, scope, relevant times, uncertainty, and material effect on the feasible care set must remain reconstructable separately from the care-side decision and rationale, subject to visibility rights." | **Normative constitutional commitment** | **Constitutionally chosen** | Financing-specific specialization of inherited authority, temporal and provenance law | "Possible care-facing seam or decision projection; **not a financing lifecycle**" |

**Counterexamples and falsifiers** (raw, condensed to the operative clause; full text at the source lines). F1 counterexample: a constitution where every act of care necessarily creates an authoritative resource-allocation obligation; falsifier: proof that "no financing lifecycle exists" is logically impossible rather than merely uncommon. F2 counterexample: fully atomic bilateral exchange under one authority; falsifier: all regimes use one position with the same authority/time/correction/reliance/reversal semantics. F3 counterexample: an unlimited, instantaneous, costless backstop; falsifier: a case satisfying the antecedent where no actor's position or feasible alternatives differ from the no-care counterfactual. F4 counterexample: complete retroactive indemnification with legal relation-back; falsifier: a mechanism making the earlier actor's historical position identical to the no-advancement counterfactual. F5 counterexample: several unrestricted, simultaneous, irrevocable, independent cash transfers; falsifier: all multi-source arrangements always unrestricted/fungible/independent/simultaneous. F6 counterexample: reservation cancelled before any care decision or foregone alternative; falsifier: a reversal that restores the prior care state and all lost alternatives. F7 counterexample: an immediate exchange where no separate financing assertion affects care judgment; falsifier: an arrangement preserving care history, agency, conservation and accountability while letting a financing-induced feasibility change be indistinguishable from the care rationale.

**Regime × law matrix (raw §3) — the part usually dropped.** F1 **bends in 10 of 12 regimes** (holds materially only in R2, R12). F2 bends in R1 and R12. F3 bends in R1, **U (unresolved without evidence) in R5**. F5 is **S (regime-specific rule) in 10 of 12**. F7 bends in R1, R4, R12. The raw's own gloss: *"The numerous B and S results are important: they show that even the surviving laws do not imply one common lifecycle, state machine, or interface."*

### §1.2 The three final decomposition propositions and their distinguishing burden (raw §5)

> **⚠ LETTERING HAZARD.** The Phase-B raw labels its decompositions **1/2/3**; the Gate-1a adjudication relabels them **A/B/C**; the Gate-1b kickoff's *verdict* menu uses **A/B/C in inverse order**. Below I use the raw's numbering and always name the content. §4 restates the mapping.

1. **Minimal position-and-incidence constitution.** *Distinguishing evidence (raw): gains support "**only if materially different regimes repeatedly require the same authoritative write, correction, and historical-incidence behavior rather than merely similar read projections**."* Hidden-coordinator risk: a common position store that begins interpreting rules, deciding equivalences, composing sources, assigning final responsibility.
2. **Source-native lifecycles with an attributed care-impact seam.** *Gains support if care decisions consistently require a "**small, stable set of attributed assertions**" while source-native states remain unnecessary to the care actor.* Risk: the seam becomes a universal care-access gate.
3. **No shared financing substrate.** *Gains support if "**every surviving law can be enforced through general authority, resource, obligation, commerce, and care capabilities without any recurring shared authoritative write or stable care-impact interface**."* Risk: the absent layer reappears as an analytics projection treated as truth, a manual exception process, a cross-domain workflow orchestrator, or an organisation that acquires de facto authority because it sees the most data.

### §1.3 Self-attack and invalidation condition (pointer; deliberately not paraphrased)

Phase-B **"10. Strongest final self-attack"** (L920–978) argues four things: the laws may be **too abstract** (negative constraints that reject bad architectures without identifying a positive boundary — "constitutional review questions rather than 'physics' capable of supporting ownership reconciliation"); **over-unified** (F2's seven positions may share only "that someone can use them while reasoning about care"); may **merely rename familiar machinery**; may be **architecturally unnecessary**.

**Invalidation condition (L979–986), two-sided.** *Too little commonality:* every surviving law dissolves completely into general law or remains a local projection with no recurring authoritative cross-regime behaviour — **"would eliminate care-financing physics as a distinct architectural concern."** *More commonality than found:* materially different regimes repeatedly require the same authoritative creation, correction, composition, incidence and closure lifecycle. **Gate 1b tests the first limb; §4.3 records the result and its limits.**

---

## §2 — ESTATE EXISTS-AS / AUTHORITY MATRIX

Maturity vocabulary, normalized and used strictly throughout: **ratified frame** · **signed-off nonbinding law** · **`draft_for_ratification` contract** · **REVIEW-DRAFT capture** · **design-validated analysis** · **candidate** · **committed implementation** · **deployment unverified**. Depth key: **F** read fully · **LS** load-bearing sections · **C** consulted · **S** searched.

| Concept the F-laws implicate | Located object / lifecycle | Source path | Authority (verbatim) | Maturity | Write owner | Correction owner | Projection vs canonical | Depth |
|---|---|---|---|---|---|---|---|---|
| **Cross-boundary exchange constitution (inbound AND outbound, internal AND external)** | **Governed Capability Exchange (GCE)** — `actor/represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned status classified (**evidence \| observation \| proposed-meaning \| externally_committed_truth** — committed in the SOURCE system, NOT OMNI-committed — BEFORE it counts)`. **"Two faces, one spine."** Subfamilies **explicitly include "administrative (insurance/prior-auth/billing/claims)."** | `doctrine/omni_enterprise_posture_2026-06-03.md` §GCE | **`governance_binding`** · **`Status: ratified 2026-06-03`** · `D0THES-DEC-036` · guardrails `GRD-033`/`GRD-034` · **`agent_read_rule: tier0_mandatory`** | **ratified frame** (framing authority only; authors no schema) | external counterparty owns its own sovereign records; **OMNI owning domains commit OMNI consequence** | owning domain | "**external systems are rails/processors/counterparties, never source-of-truth owners** (anti-corruption layer)" | **F** |
| **Counterparty capacity separation** | "**Counterparty-noun ≠ lifecycle** … the **capacity in which it acts** does. Classification output is a **tuple** across axes, not one bucket." | `v4_C4_6_..._2035_conformance.md` §0.5 item 2 | **`proposed L2 keeper` — explicitly "NOT inherited ratified law"** | candidate | — | — | — | **LS** |
| **Composed-profile-not-domain ruling (structural precedent)** | "**Pharmacy is NOT a new domain.** It is a composed profile across existing owners. Any single object that claims to own clinical + commercial + fulfillment + quality + communication + remedy truth is a **shadow 'Pharmacy' god-domain and is rejected.**" + 13-row ownership matrix + the **unified Vendor Loop rejection** (`EVRUN-000012 _07 §7.3 L7`) | same, §11 + §0.5 item 3 | `analysis_nonbinding` | **design-validated analysis**, C4.6 L2 accepted + landed | — | — | — | **LS** |
| **What OMNI originates at an external seam** | "**The bilateral execution-obligation itself is created by the parties under contract and applicable law — OMNI does NOT originate it.** What OMNI originates is narrow: the **normalized representation**, the **recognition rule**, and the **portable, canonical proof shape**." | same, §6 | `analysis_nonbinding` | build-warrant hypothesis; differentiation **unproved** | — | — | — | **LS** |
| **Loyalty / rewards / brand-principal guard (names Allē/Allergan, ASPIRE/Galderma)** | Capacity separation + no-data-reuse-without-program-identity/purpose/authority/consent/minimization/revocation; "Reward status or promotional activity may **never** author clinical meaning, pharmacy acceptance, fulfillment state, or patient eligibility"; "**No loyalty connector, rewards ledger, or enrollment mechanism is designed in this L2** — only the guard" | same, §11 | `analysis_nonbinding` | guard accepted; **full loyalty/brand-permeability problem is an open bounded future item** | — | — | — | **LS** |
| **Money movement, order/sale, entitlement, refund, adjustment, promo, tax, commission, attribution** | `commerce_order`/line · `entitlement` (5-state) + redemption · rail-agnostic money-state vocabulary · `commerce_order_adjustment` · promo wallet 4-layer · `authorization_for_future_charge` | `contracts/D6_commerce_contract.md` §3–§9 | `canonical` for commerce substrate + financial lifecycle + rail separation + entitlement | **`draft_for_ratification` contract** | **D6** | D6, **additive only** (§8.7 "never edit-in-place") | canonical for OMNI-side meaning; **external rail is ledger of record for money movement**, app DB "a converging projection" | **F** |
| **Third-party payer / insurance / Medicare / HSA-FSA mechanics** | — | `D6_commerce_contract.md` §10 + §12 | canonical contract, but the row is a **deferral** | **`defer (v0)`** — "D6 is the rightful FUTURE home, but v0 DEFERS the mechanics" | **none** | none | n/a | **F** |
| **Third-party consumer financing + rebate/loyalty labels** | `payment_method` = "tenant free-form label + loose `accounting_class` enum; **vendor names are LABELS not integrations**" (§9); §2: "Payment-method labels (Allē/Aspire/Cherry/CareCredit) are **tenant catalog rows, NOT substrate enums**" | `D6_commerce_contract.md` §2/§9/§12 | canonical contract text | shape **unresolved** — `REV-160` open | D6 (as a label) | D6 | label only | **F** |
| ↳ *the more-resolved shape the open row does not carry* | financing = `payment_method` subtype/label **plus a REQUIRED `financing_arrangement`/`financing_authorization` detail object** (lender · application · approval · amounts · status · merchant fee · settlement · refunds · adapter) — "**NOT a bare `payment_method` + sub-state (too thin)**; **NOT a parallel commerce substrate**" | `omni_doctrine_reconciliation_map_v1_2026-05-25.md` §G2F Q-DL17-2 (L4185, L4189), carried in decision row **`D0THES-DEC-027`** | reconciliation map `derived_nonbinding`; `DEC-027` is a **decision row** recording the Nick+Knox-modified disposition | **candidate** — never carried into the D6 contract; `REV-160` does not reflect it | — | — | — | **C** |
| **Operator/tenant topology, legal entity, jurisdiction, licensure, cross-operator grants** | 6-tier composite `tenant_id` · 11-axis `venue` · `legal_entity` (tax/compliance/**liability boundary**) + `legal_entity_brand` M:N w/ `ownership_percent` · `provider_license`/`provider_credentialing` · `jurisdiction_admission_rule` · `patient_continuity_policy` · `federation_permeability_policy` · `shared_context_grant`/`visibility_grant`/`care_relationship` | `contracts/federation_contract.md` §3–§6 | `canonical` for topology + permeability + jurisdiction/licensure | **`draft_for_ratification` contract**; `REV-157` closure pending | **Federation** | Federation; permeability change requires **Tier-4 attestation** | canonical | **F** |
| ↳ *what Federation does not carry* | No obligor, no risk-bearing party, no reserve, no bilateral executed instrument, no contested-agreement state. Grants are **unilateral, issuer-owned, consent-gated, revocable authorizations inside one deployment** — structurally different from a co-authored, externally-adjudicated, contested agreement. | same §3/§5/§6 | — | — | — | — | — | **F** |
| **Care-side truth, adoption, conflict** | `clinical_concepts` registry · append-only `patient_clinical_assertions` · `source_authority`/`authored_by` (**locked at write time**) · 8-rank authority precedence · `status` (who AGREES) ≠ `confidence` · `context_key` coexistence · `unresolved_conflict` · current-memory view | `contracts/clinical_memory_assertion_contract.md` §4/§5/§5.1 | `canonical` for the clinical-memory substrate | **`draft_for_ratification` contract** | **Clinical Memory** (many producers, **one owner** — the governed assertion substrate) | CM; **append-only, `supersedes_assertion_id`, never UPDATE in place** | canonical; `patients.*` chart columns are a **projection trigger** | **LS** |
| **Care admissibility incl. the coverage firewall** | `appropriate-but-not-covered` as a first-class state — "**(Coverage absence ≠ clinical inadmissibility)**"; per plane `satisfied · unsatisfied · unknown · not-applicable · authorized-exception` **plus who owns resolving it**; "coverage/payment (**kept SEPARATE from clinical indication — firewall**)" | `v4_C4_care_operating_model_capture.md` L191–192 | `analysis_nonbinding` | **REVIEW-DRAFT capture — NOT closed**; `[INV]`-tagged candidates | capture is **cross-cutting, not a truth-owning domain** | — | — | **C** |
| **Non-fungible parallel authority planes** | "There is NO single universal 'final decision-maker' … the **payer** commits coverage … **OMNI coordinates + proves these planes but owns none of their truth.** … **The payer does not determine clinical indication**" | same, L171 | `analysis_nonbinding` | REVIEW-DRAFT capture | each plane's principal | — | — | **C** |
| **Obligation waiver / transfer authority** | "**waiver authority varies** (patient/surrogate · clinical · legal/compliance · safety · **payer/operator** · policy); **transfer valid only on successor acceptance**" | same, L354 | `analysis_nonbinding` | REVIEW-DRAFT capture | — | — | — | **C** |
| **Decision/stance/disagreement lifecycle** | **Governed Resolution Lifecycle** — 7 spine lines incl. **`disagreement-as-escalation`**, **`non-action-as-commit`**, **`outcome-reads-original-context (never rewrites)`**, **`trust_horizon`**; `gate_holder_posture` incl. **`external_authority_committed`**; stances incl. `dispute`/`defer`/`preserve-option` | `v4_REV184_decision_state_reconciliation.md` §0.1–§0.4 | passport `analysis_nonbinding`; body: **"✅ SIGNED OFF (Nick + Knox, 2026-06-14) → `08` D0THES-REV-184 CLOSED"**, "confirmed v4 spine-grade law" | **signed-off nonbinding law**; field-set + state-machine **explicitly deferred to C5**. *(Authority/maturity split, not a contradiction — R1 reclassification, C13.)* | **CNS** owns record/lifecycle/graph (**process-state, NOT truth**); **RBAC** the authority gate; **CM** truth+commit; **OFC** obligations from a stance | owning authority per §0.4 | participant graph is a **projection, NOT truth** | **LS** |
| ↳ **honest rationale-class — the named gap F7 lands on** | "**No field** distinguishing *why* a non-textbook-optimal action was chosen: clinical-optimal · patient-preference · **disposition/system-constraint** · futility-but-values · defensive · **resource/access-driven** · uncertainty-watchful … **ties to the firewall**" | same, §2 item 3 | `analysis_nonbinding` inside a signed-off law | **named delta; NOT realized** | — | — | — | **LS** |
| **Correction impact across distributed lineage** | Candidate **Law 10.1** + oracles **O1–O22** (`O1 history-preserved` · `O2 operative-view-corrected-without-erasure` · `O3 state-typed` · `O4 owner-committed-own-correction` · `O5 impact-derived-not-owned` · `O10 ACK≠accepted-custody` · `O17 minimum-necessary` · `O18 exposure≠causation` · `O20 temporal reproducibility` · `O22 selective reopening`) + a **ten-state external-custody ladder** + 24/24 mutation catches | `v4_C4_3_care_response_seam_correction_continuity_test.md` §1/§5/§6/§7/§9 | `analysis_nonbinding` | **design-validated analysis**; explicit verdict: contract realization **OPEN**, **implementation absent/partial**, external acceptance **UNPROVEN** | each owning authority commits its own disposition | owning authority only | impact view is a **permissioned projection that commits nothing** | **F** |
| ↳ **retroactive-invalidity class** | **S20-B** "prior invalidity discovered later … evaluate authority basis by **effective time**, not recorded time"; generalized: "***authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively*** … applying beyond consent/surrogate to any authorization later found invalid at time of action"; routed to C5 | same, §8 + §10 item 6 | `analysis_nonbinding` | design finding, **routed not minted** | — | — | — | **F** |
| ↳ **the named absent carrier** | "external grant/operator boundary/**custody offer+acceptance** \| Federation + RBAC \| current + EVRUN-008 R3 gap \| partial \| **external accepted-custody carrier ABSENT**" | same, §4 crosswalk | `analysis_nonbinding` | **gap, named and routed** | — | — | — | **F** |
| ↳ **the RCM/claim relation gap** | "charge/refund/adjustment/**claim** relation \| **D6 / future RCM** \| current (D6) + **REV-204 gap** \| partial \| **RCM/claim mechanics unwired**" | same, §4 crosswalk | `analysis_nonbinding` | gap, named | — | — | — | **F** |
| **Accepted duty arising from a failure (incl. financing failures)** | **Accountability Loop (current working handle; legacy file/route label GRR)** — coordinator ≠ ledger · admission status ≠ disposition · **domain projection ≠ accountability overlay ≠ composed matter view** · `response_obligation` as the accountable unit with its own lifecycle and **terminal law** · optional `response_case` · multi-radius `recipient_scope` · custody/no-orphan/external-delegation laws · version-at-time · **independent closure horizons** | `v4_C4_governed_reporting_resolution_capture.md` | `analysis_nonbinding` (`GRD-036`); cross-cutting **contract CANDIDATE**; **"not a truth-owning domain … not the universal task layer … not one universal object"** (§3) | **REVIEW-DRAFT capture — REVIEW-READY, provisionally stable, NOT closed.** §23: **"Do NOT lock yet: public/plane name + filename."** `GRR-TASKD-INPUT` Input-State Receipt **has not run** | Accountability owns the **overlay**; **the domain keeps its own status** (§6) | owning domain corrects its own truth; **Accountability closure ≠ domain closure** (§17) | overlay + composed view; **owns no domain truth** | **LS** (§§12–16 unread) |
| **Temporal axes / as-of reconstruction** | **T-01…T-22** incl. `T-02` later recording ≠ later occurrence · `T-08` history preserved, operative views may change · `T-11` governed as-of reconstruction owns nothing · `T-13` **time is neither actor nor authority** · `T-19` decision quality ≠ realized outcome · `T-20` external temporal state is honestly incomplete; physical bitemporal `temporal_truth_pair` exists **in the LEGACY layer** (`D0THES-REV-200`), must be elevated | `v4_C4_5_..._pass_plan.md` §4/§5/§6 | `analysis_nonbinding`; every name is "**PLANNING VOCABULARY — NOT a minted primitive**" | **`gate_0_charter_accepted · full_pass_not_started · not_promoted`** | domain history stays **domain-owned** (T-03) | owning domain | as-of reconstruction is a **spine-named FUNCTION, not an object/service** | **LS** |
| **Workforce / labor economics** | workforce records, provider operational-state, time-clock, shift scheduling, payroll/compensation, commission **payout**, **labor cost**; payroll **execution** to an external embedded-payroll rail | `contracts/business_ops_workforce_contract.md` §3 | `canonical` for the business-operations/workforce substrate | **`draft_for_ratification` contract** | **BIZOPS** | BIZOPS | canonical for the payout; D6 owns the commission **amount** | **LS** |
| ↳ *what BIZOPS explicitly does not own* | commerce sale truth + the commission AMOUNT (D6); clinical/care truth; authority; identity; routing policy. **No receivables, liquidity, cash position, capacity-as-economic-resource, opportunity cost, or non-labor operator economics.** | same | — | — | **none found in radius** | — | — | **LS** |
| **Config / catalog / policy definition plane** | `setting` + `setting_registry` + 4-tier scope inheritance; **universal `catalog_item`** (T0-15, "the ONE catalog"); `service_policy` + eligibility-gate **definitions**; **hosted values of `federation_permeability_policy`** | `contracts/settings_catalog_contract.md` §3 | `canonical` for the settings-as-operating-system substrate | **`draft_for_ratification` contract** | **Settings/Catalog** | Settings; temporal versioning | definition plane, distinct from the operational data plane | **LS** |
| **Bilateral commercial agreement — one verified instance** | `sponsor_site_contract` / `payment_schedule` + sponsor-XOR-insurer coverage grid (CMS NCD 310.1) + double-billing prohibition | `v4_C3_7F_disposition_gap_matrix.md` §1 row 19, §2 verdict 6, §5; `v4_C3_7G` L24 | `analysis_nonbinding` | **`EXTEND` → D6 + coverage grid + `payment_care_firewall`.** Explicitly **not** a new Agreement owner | D6 (proposed) | D6 | — | **F** (F), **C** (G) |
| **Bilateral, co-authored, CONTESTED agreement with named parties** | **Not found in radius.** Nearest: Federation grants (unilateral, issuer-owned) · C4.6's `participation-agreement` as a **configuration attribute of a connection instance** (§3 L134) · C3.7's `sponsor_site_contract` (executed instrument, D6-routed, **not contested-state-bearing**) | see cited paths | — | — | — | — | — | **F**/**LS** |
| **Party-position disagreement machinery (generic)** | CM `unresolved_conflict` + `conflicting` pattern + fail-closed high-risk gates; REV-184 concurrent conflicting stances + `dispute` + `disagreement-as-escalation`; C4.3 `O3` state-typing + `O4`; Care discordance-preserved-not-smoothed | CM §5/§5.1 · REV-184 §0.1/§0.2 · C4.3 §5 · Care L171 | mixed | mixed; **none contracted for financing; C4.3 implementation absent/partial** | per-source | per-source | — | **F**/**LS**/**C** |
| **Committed insurance/coverage implementation — THREE surfaces** | `payer_eligibility_documents` · `patient_insurance_details` · **`patients.has_insurance` / `insurance_carrier` / `self_pay_willingness` via the generic `patient_column` path** | see §7 | migration comment: "**Routing-only shape**; full insurance-domain design … deferred to future Section" | **committed implementation; deployment unverified — no receipt inspected or produced** | see §7 | see §7 | **none established as canonical** | **F** |
| **Economically-blind recommendation firewall** | "accrual/revenue/retention pressure must not bend clinically-appropriate presentation (**structural, auditable, economically-blind, posture-invariant**)"; C3.7G: **"If that invariant holds, OMNI is the access *environment*; if it leaks, OMNI is lead-gen-for-pharma. Everything else composes."** — and it is **posture-invariant including OMNI's own economics** | Care L170 · `REV-185` · `v4_C3_7G` L15 · `v4_C3_7F` §4 | Care `analysis_nonbinding`; `REV-185` **open** | **invariant asserted; enforcement mechanism not specified, not built** | CNS / Network-Governance (proposed) | — | — | **C** |
| **Network formation / consortium economics** | formation ladder + **Counterparty Participation Economics Gate (Gate B)** + four N=1 bootstrap mechanisms + the "distribution-rich consortium" adversary | `v4_C4_residual_moat_..._doctrine.md` §11/§12 | **CANDIDATE** | candidate; L0 arc | — | — | — | **LS** |

**Terminology rule adopted for this carrier (R1).** First use: **"Accountability Loop (current working handle; legacy file/route label GRR)"**; thereafter **"Accountability/GRR capture."** The capture's internal sentence *"GRR / Response Fabric / Integrity Loop retired"* is **scoped to the working-handle comparison inside that capture** and is **not** an estate-wide retirement: §23 forbids locking the public/plane name, and **FWREG-009** (titled "Governed Reporting & Resolution (GRR)", promotion target `governed_reporting_resolution_contract.md`), **WI14** ("Governed Reporting & Resolution / Accountability Loop"), and pre-spine **Card 2 `GRR-TASKD-INPUT`** (output `v4_taskd_input_state_receipt_grr_2026-08-04.md`) all still carry GRR. **This carrier does not declare GRR retired and renames nothing.**

**Contradictions preserved rather than smoothed.**
1. **`REV-160` is stale relative to its own decision lineage** — the open row records financing shape as "tentative"; `D0THES-DEC-027` records the Nick+Knox-*modified* disposition (required `financing_arrangement` detail object with a named field list, "NOT a parallel commerce substrate"); the D6 contract, authored days later, carries neither. A claim that "OMNI has no financing-arrangement representation" is **false**; so is "OMNI has a `financing_arrangement` object."
2. **The Accountability/GRR naming is inconsistent across accepted surfaces** — the catalog row has propagated the capture's internal "retired" phrase while FWREG-009, WI14 and Card 2 keep GRR live, and Card 2 itself mixes both (`GRR-TASKD-INPUT` on branch `analysis/accountability-taskd-input-state`). **A conflict-ledger row is proposed at §13; it is not an Insurance question.**
3. **`consequence_assessment_event` appears in two captures** — Accountability/GRR §6a and C4.3 §2/§10 (the latter explicitly flagging dedup at C5). Two captures reaching for one object. **Dedup question, routed, not resolved here.**

---

## §3 — F1–F7 RECONCILIATION

Per the §6 contract of the kickoff: source law · inheritance · current owner(s) · authoritative-write test · correction/reversal · temporal shape · portability/visibility · behaviour under all three decompositions · verdict.

### F1 — Care does not entail a financing lifecycle

**A. Source law.** "The occurrence of care does not logically entail the prior or eventual existence of a financing entitlement, commitment, obligation, adjudication, transfer, settlement, or shared financing lifecycle." *(Raw precision the adjudication flattens: this is about the **existence** of a lifecycle, not financing being **unknown**. The raw adds M15: "absent financing lifecycle vs unknown, deferred, or disputed financing.")*

**B. Inheritance.** **Strongly represented as generic OMNI substrate law, and contracted on one side only.** D6 §8.1: "**Payment state ≠ care state** … a payment failure / subscription lapse / dispute **NEVER by itself** ends/voids a `care_program` or cancels `clinical_visits`." D6 §8.2: "**Commerce ≠ care_commitment**." Care L192: "`appropriate-but-not-covered` (commercial, not clinical)", "*Coverage absence ≠ clinical inadmissibility*", with per-plane values including **`not-applicable`** — the exact representation F1 demands, distinct from `unknown`.

**C. Current owner(s).** No single owner, correctly. Care owns whether care occurred and was indicated; D6 owns whether an order/entitlement/payment exists; **neither infers the other**, by contract invariant.

**D. Authoritative-write test.** **No new lifecycle.** F1 is a prohibition on inference, not a fact anyone writes. **Asymmetry to name (R1):** it is a **contracted D6 invariant** but only a **REVIEW-DRAFT capture** statement on the Care side. Enforcement therefore runs from one direction. What is owed at C5 is a symmetric Care-side statement and preservation of the `not-applicable`/`unknown`/`unsatisfied`/`authorized-exception` distinction against collapse into a nullable boolean.

**E. Correction / reversal.** Nothing to correct — no financing record exists to be wrong. The failure mode is the inverse: manufacturing a zero-valued financing row for uncompensated care so joins work. D6 §8.6 and `GRD-026` argue against it; nothing enforces it.

**F. Temporal shape.** None required. F1 is atemporal.

**G. Portability / visibility.** Not implicated.

**H. Decomposition behaviour.** Under **raw 1** F1 is actively hostile: a common position layer whose most frequent row in the wedge vertical (R12 uncompensated, R2 care-first) is *empty*. Under **raw 2** F1 is satisfiable only if the seam may be **absent**, not merely empty — which weakens the "small stable interface" claim. Under **raw 3** absence is represented by nothing existing, the cheapest possible representation.

**I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`, with a named contracting asymmetry.** F1 is the strongest single argument against raw 1 in this gate, and the raw's own matrix agrees: F1 bends in ten of twelve regimes precisely because it bites only where financing is absent — the case a shared substrate handles worst.

### F2 — Care-relevant economic positions are not universally substitutable

**A. Source law.** "A willingness, entitlement, commitment, obligation, resource reservation, transfer, and settlement are not mutually substitutable merely because each may affect the same care option; any equivalence is regime-scoped rather than universal."

**B. Inheritance.** **Specializes existing law; the estate applies the same mechanism at two other altitudes.** `GRD-026` (payload-noun ≠ domain, ratified) is the general form; C4.6's counterparty-noun ≠ lifecycle with a capacity tuple (**proposed L2 keeper, not ratified**) is the counterparty form; F2 is the position form. Clinical Memory §5's `authority` ≠ `status` ≠ `confidence` is the same discipline for assertions.

**C. Current owner(s).** Distributed and correct: entitlement/order/money-state → **D6**; consent and authorization → **D7 + RBAC**; obligation-from-a-stance → **OFC**; obligation waiver/transfer → *no single owner* ("waiver authority varies … **transfer valid only on successor acceptance**", Care L354); resource reservation → **D3/D5/Federation `venue`**; external commitments → the **external principal**, held under GCE as `externally_committed_truth`.

**D. Authoritative-write test.** **No new owner.** A guardrail plus one D6 specialization.

> **The F2 hazard, verified and restated precisely (R1).** D6 §9 defines `payment_method` as "tenant free-form label + loose `accounting_class` enum," and §2 names **Allē / Aspire / Cherry / CareCredit** together as members of that label set (echoed at legacy map L1124; `Q-DL17-3` was struck on the basis that "Allē = `payment_method.label` string, no substrate"). Under F2 those are **not one kind**: a manufacturer rebate is a third-party price reduction creating no obligor; a loyalty status is a brand-relationship principal capacity (already guarded at C4.6 §11); **a lender substitutes the obligated party**, creates credit servicing, and makes refund destination a legal question; a revolving medical credit card adds another reversal and merchant-fee lifecycle. **The precise finding is not "a lender is not a payment method" — it is that `lender financing cannot be represented solely as a payment-method label`**, which is exactly what `D0THES-DEC-027` already concluded and what `REV-160` still carries as open.

**E. Correction / reversal.** Divergent by design, and the divergence is the law: a transfer **reverses under a conservation constraint** (D6 §8.7 additive adjustment + §8.8 sum-of-lines CHECK); an obligation is **discharged, waived or novated, with transfer valid only on successor acceptance**; an entitlement **expires or is voided** through a 5-state lifecycle; a willingness is **withdrawn with no record obligation at all**. Four correction laws, four conservation postures, one of which is *no record*.

**F. Temporal shape.** Per position, not shared. T-01 already forbids collapsing them.

**G. Portability / visibility.** Person-following: entitlements and obligations *of the person*. Organization-owned: contracted rates, claims, ledger. Viewable-not-copyable: a counterparty's position, held under GCE and never re-authored.

**H. Decomposition behaviour.** F2 is the only law that reads as evidence *for* raw 1 — and the raw refuses the inference: altitude "possible shared semantic **constitution or seam**; **not evidence of one shared lifecycle**." Under raw 2 it constrains what the seam may flatten. Under raw 3 it is a cross-cutting guardrail, which is where OMNI already puts non-identity rules.

**I. VERDICT — `CONFIGURATION / POLICY` (guardrail) **plus** `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION` (D6).** No new owner. The specialization is `REV-160`/`DEC-027`, whose shape already exists and needs carrying forward, not inventing. **Guardrail proposal is subject to dedup against `GRD-026` before minting (§13).**

### F3 — Unclosed resource advancement creates contemporaneous incidence

**A. Source law.** "When scarce care resources are consumed or irreversibly reserved before compensating resources arrive or responsibility closes, at least one actor's resource position or feasible alternatives change during that interval, regardless of later reassignment." Raw altitude: **"Unresolved between universal care-resource physics and financing physics."**

**B. Inheritance.** **Not inherited in the inspected estate — and, on the altitude test, not financing.**

**C. Current owner(s).** **None found in radius**, checked directly at both plausible homes. D6 owns money *movement* facts (external rail as ledger of record) plus order/entitlement meaning — no receivable, no liquidity position, no aging-by-responsibility-class, no opportunity cost. BIZOPS owns workforce records, labor cost and payroll compute, and explicitly disclaims commerce sale truth — no non-labor operator economics. Federation owns `legal_entity` as a **liability boundary** but carries no economic position on it.

**D. Altitude test — resolves against financing.** Delete every financing counterparty (Gate-0 §J.0 Test 1) and F3 still fires: net-30 inventory, an unsold appointment slot, an absorbed cash-pay no-show, a shift staffed below break-even. The antecedent is *scarcity plus an interval*, not *financing*.

**E. Authoritative-write test — CORRECTED (R1, C8).** R0 asserted this "cannot be satisfied by a projection." **That was ahead of the evidence and is withdrawn.** C4.3's Law 10.1 is precisely *"a governed, versioned assessment over distributed lineage and explicit uncertainty"* that **commits nothing and owns no truth** — a reconstruction pattern I asserted could not work without testing it against the estate's own worked example. F3's representation form is therefore genuinely open between: (i) a native authoritative incidence state; (ii) a governed reconstruction over existing occurrence, capacity, resource, obligation and settlement truths; (iii) a projection/assessment only; or (iv) no independent object at all.

**F. Distinguishing evidence the OPECON lane must gather.** Whether the defining facts are reconstructable — they are partly *non-events* (money that did not arrive) and *counterfactuals* (capacity that could have been sold), which reconstruction handles badly — versus whether a small authoritative interval record is required. Frequency and materiality of the interval (Phase-B hard fork 2). Whether any existing owner already emits enough lineage for reconstruction under Law 10.1's coverage-contract model.

**G. Portability / visibility.** **Organization-owned, emphatically not person-following.** Cross-operator visibility would be a Federation grant question; default `isolated`.

**H. Decomposition behaviour.** F3 is the only law that pressures raw 3's burden, because it may require a recurring authoritative write no existing owner has. But it pressures the *wrong arc*: routing it to a financing substrate would mint a financing owner for a fact that exists without financing.

**I. VERDICT — `UNRESOLVED — ROUTE TO OPECON-G0; OWNER AND REPRESENTATION FORM NOT PROVEN.`**

> **Routing (proposed, not landed).** The Aug-3 checkpoint names the sibling lane **`Non-Labor Operator-Economics + Counterparty Gate-0`** (branch `analysis/nonlabor-operator-economics-counterparty-g0`, verified present at the pinned base, `not_started`, unauthorized). F3 belongs there as an **open question**, not a solved lifecycle. **Insurance must not absorb it; this carrier does not start that lane.**

### F4 — Later allocation cannot rewrite historical incidence

**A. Source law.** "A later reassignment, reimbursement, waiver, reversal, or settlement may change current legal or economic positions but cannot change which actors actually advanced resources or carried exposure at earlier times."

**B. Inheritance.** **Substantially inherited, unusually exactly.** C4.3 `O1` + `O2` + `O20`; C4.5 `T-02`, `T-08`, `T-19`; REV-184 spine line 5 **`outcome-reads-original-context (never rewrites)`**; D6 §8.7 additive-adjustment immutability. Four independent statements of one law at four altitudes.

**C. Current owner(s).** Each owning domain corrects its own facts — C4.3 `O4` **owner-committed-own-correction (no-force-match)**, `O5` **impact-derived-not-owned**.

**D. Authoritative-write test.** **No new lifecycle for the preservation half.** The financing-specific remainder the raw names — "ultimate or legally backdated responsibility must remain **distinguishable from** historical liquidity, credit, capacity, or opportunity incidence" — is the *second* term, and the second term is **F3's subject**. F4 therefore decomposes cleanly: preservation is inherited; the thing preserved travels with F3.

**E. Correction / reversal.** Fully specified, and the hardest insurance case is already a **general** class: retroactive eligibility termination with a recoupment window is C4.3 **S20-B**, generalized in §8 to "***authority-basis-invalid-as-of-effective-time ≠ authority-revoked-prospectively***," routed to C5 RBAC/Federation/Consent. Gate-0 called it "the hardest retroactivity case in the whole estate"; it is an instance of a named class and already routed.

**F. Temporal shape.** effective ≠ recorded ≠ received ≠ known (T-01); `temporal_truth_pair` exists physically but **in the legacy layer** (`REV-200`) and must be elevated — a C4.5/C5 obligation, not an Insurance one.

**G. Portability / visibility.** Historical incidence is operator-owned; the care-side history it must not rewrite is person-following. `O17` governs visibility.

**H. Decomposition behaviour.** Identical under all three. F4 discriminates between nothing.

**I. VERDICT — `INHERITED — NO FINANCING-SPECIFIC ARCHITECTURE`** for preservation; the distinguishability half travels with F3 to operator economics.

### F5 — Composed support is derived and source-preserving

**A. Source law.** Quoted at §1.1. **Epistemic class in the raw: `Normative constitutional commitment`. This gate does not change that.**

**B. Inheritance — necessary but NOT sufficient (R1 correction, C10).** The *discipline* is inherited and strong: `D0THES-DEC-033` (surfaces/projections own no canonical truth); C4.3 `O5` + `PROP-03` (mutation-tested: "the impact projection commits nothing and owns no domain truth"); C4.5 `T-11` ("**Governed as-of reconstruction owns nothing** … incapable of becoming a canonical timeline or commit source"). **What is inherited is source preservation. What does not exist is the mixed-financing composition rule.**

**C. Current owner(s).** The **sources**, severally. The composed statement has no owner because it is not truth. D6 already does this for one narrow case: the **promo wallet 4-layer** (`patient_promo_claim` availability → `appointment_promo_intent` reservation → `commerce_order_line.applied_promo_claim_id` **truth**) is F5's shape in miniature, and §8.9's deterministic redemption order with AI excluded at runtime is the composition-rule-must-be-stated requirement, contracted. **Neither covers multi-payer allocation.**

**D. What is missing, named.** Source **compatibility · exclusivity · priority · sequencing · temporal validity · revocability · available amount · shortfall · patient remainder · refund destination · reversal routing.** These may live as **policy/configuration** (`GRD-026`-safe; Settings-hosted, versioned), a **derived composition projection**, and **D6/native-source specializations**. They do **not** require a new truth owner.

**E. Authoritative-write test.** **`SEAM / PROJECTION ONLY`.** The one thing that must be written is the composition rule's **identity and version**, so the composed statement is reproducible — and `eligibility_decisions` already ships exactly that (`rule_id` + `rule_version` + `inputs_hash` + `input_snapshot` + `decided_at` + `decided_by`) in committed code. Follow it; do not reinvent it.

**F. Correction / reversal.** A composed statement is never corrected — it is **recomputed** from corrected sources. A prior composed statement that was *communicated* is preserved as a communication artifact (D7), which is H-N3 territory, not F5's.

**G. Temporal shape.** Time-bounded validity + `as_of` + pinned input snapshot. T-11 covers it.

**H. Portability / visibility.** Per-audience by construction; `O17` and `T-22` bound it.

**I. Decomposition behaviour.** F5 is **evidence against raw 1**, not for it: a minimal position constitution that composes is one step from "computing totals" and "assigning final responsibility" — the raw's own named hidden-coordinator failure for raw 1.

**J. VERDICT — `SEAM / PROJECTION ONLY — FINANCING-SPECIFIC COMPOSITION EXTENSION REQUIRED; NO NEW TRUTH OWNER`. F5 REMAINS EXPLICITLY NORMATIVE.** This gate provides no basis for reclassifying it as structural and does not.

### F6 — Financing reversal is asymmetric with care and irreversible resource use

**A. Source law.** Quoted at §1.1.

**B. Inheritance.** **Specializes existing law; both halves present.** Care half: D6 §8.1 (contracted) + C4.3 `O22` selective-reopening ("**operational failure ≠ auto-invalidate clinical judgment**") + Clinical Memory append-only supersession. Resource half: F3's subject, unowned. The *asymmetry itself* is in the estate as C4.3 fixture **S12** ("double-charge while care continues: D6 additive refund/reversal; **care state untouched**; horizons separate"), mutation-tested as **M05** ("refund treated as all remedy complete") and caught unambiguously.

**C. Current owner(s).** D6 for the reversible side (capability-gated per §8.11); Care/CM/D5 for the irreversible side; **C4.3 `O8` independent closure horizons** for the fact that they close on different clocks. **The Accountability/GRR capture states the same law again for response duties** (§17 [INV]: "**Closure ≠ demonstrated prevention**"; a `response_case` may close for the recipient while recurrence monitoring stays open elsewhere).

**D. Authoritative-write test.** **No new lifecycle.** The asymmetry is a relationship between existing lifecycles, and the estate's mechanism — selective reopening with independent obligations and independent closure horizons — is designed and mutation-validated.

**E. Correction / reversal.** Money reverses additively and conservatively (D6 §8.7 + §8.8); care does not reverse, it supersedes with history preserved; **neither propagates automatically** (`O22`; `M06` "technical repair without required Care reopen" — caught).

**F. Temporal shape.** Two independent closure horizons on one episode.

**G. Portability / visibility.** Care history follows the person; the financing reversal is operator/counterparty-scoped.

**H. Decomposition behaviour.** F6 is the law raw 2 explains best — but in OMNI the explanation needs D6 §8.1 plus `O22`, both already present, not a financing seam.

**I. VERDICT — `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION`.** Owners: D6 (reversible) and Care/CM (irreversible). The specialization is adding the financing-reversal case to **existing** selective-reopening and closure-horizon machinery. **Named consequence:** `payment state ≠ care state` is presently a **D6-only contracted invariant**; a symmetric Care-side statement is owed at C5, or it is enforced from one direction.

### F7 — Material care-time reliance on financing must remain attributable

**A. Source law.** Quoted at §1.1. **Epistemic class in the raw: `Normative constitutional commitment`. This gate does not change that.**

**B. Inheritance — ingredients, not a completed home (R1 correction, C9).** REV-184 §2 item 3 names the exact mechanism as a **general gap**: "**No field** distinguishing *why* a non-textbook-optimal action was chosen: clinical-optimal · patient-preference · **disposition/system-constraint** · futility-but-values · defensive · **resource/access-driven** · uncertainty-watchful … ties to the firewall." Financing is one member of that enumeration, not the enumeration. **But naming a gap inside a signed-off law is not the same as having a home**: there is no first-class reliance or basis-of-decision object, the REV-184 field-set is explicitly deferred to C5, and C4.3 declines to claim knowledge of human cognitive reliance.

**C. Current owner(s) of the ingredients.** **CNS** owns the resolution record as *process-state, not truth*; **Clinical Memory** the care-side assertion and its adoption; **D7 + `trace_lineage`** proof; **RBAC** the authority gate; the financing assertion stays with its **external principal** under GCE. Every *element* has an owner. The *composition* has no contracted home.

**D. Authoritative-write test.** **No new owner; a bounded seam extension with an explicit home.** The home candidates are REV-184/CNS (the resolution record already carries context-snapshot, alternatives and reason) or a Care-contract extension. **The Care Response-Seam Audit named as the required next artifact in the Accountability/GRR capture §20 is the natural place this gets decided** — it already lists "care decision · service occurrence · observation · document · consent · fulfillment · **payment**" as the objects to test.

**E. The four-level hierarchy the law needs (R1; corrects R0's over-simplification).** R0 proposed collapsing "reliance" to "exposure." That was too blunt. Preserve four distinct levels: **exposure** (the system can prove it was available — C4.5 `T-06`) · **reference/use** (provably selected or included) · **attested reliance** (recorded only where explicitly attested or otherwise evidenced) · **material effect** (how the feasible option set changed — separately recorded). `T-06`'s "no cognitive-knowledge claim without supporting evidence" limits *unsupported* inference; it does not erase attested reliance from the source law.

**F. Correction / reversal.** REV-184 spine line 5 governs exactly: **outcome-reads-original-context, never rewrites.** C4.3 `O12` frozen-context and `M22` ("exposure treated as causation/blame" — caught) bound the obvious abuse.

**G. Temporal shape.** Decision-time replay with **no hindsight leakage** (`T-09`); the exposure ladder (`T-06`).

**H. Portability / visibility.** "Subject to visibility rights" in the law's own text; bounded by `O17` (minimum-necessary; `M19` caught) and `T-22` ("**Reconstructability is not surveillance authority**"). `REV-185` and Gate-0 U10 leave open *how much financial context a clinician should see*; F7 does not answer it and must not be read as licensing more visibility.

**I. Decomposition behaviour.** F7 is raw 2's load-bearing case, and the place OMNI most nearly has the seam generically — but "nearly" is the operative word.

**J. VERDICT — `EXISTING OWNER / SEAM EXTENSION — EXPLICIT REV-184/CARE/CNS HOME REQUIRED; NOT A FINANCING TRUTH OWNER`. F7 REMAINS EXPLICITLY NORMATIVE.**

### §3.8 Reconciliation summary

| Law | Verdict | Owner(s) after reconciliation | New universal lifecycle? | Regime-specific work owed? |
|---|---|---|---|---|
| **F1** | INHERITED — no financing-specific architecture | D6 §8.1/§8.2 (contracted) + Care per-plane state model (capture) | No | Symmetric Care-side statement at C5 |
| **F2** | CONFIGURATION/POLICY guardrail **+** EXISTING OWNER specialization | guardrail digest + **D6** (`REV-160`/`DEC-027`) | No | **Yes — `financing_arrangement`** |
| **F3** | **UNRESOLVED — route to OPECON-G0; owner and form not proven** | **none today** | **Unproven** | Out of this arc |
| **F4** | INHERITED (preservation) / travels with F3 (distinguishability) | C4.3 O1/O2/O20 + C4.5 T-02/T-08/T-19 + REV-184 line 5 + D6 §8.7 | No | No |
| **F5** | SEAM/PROJECTION ONLY — **composition extension required** — **normative** | sources severally; `DEC-033` + O5 + PROP-03 + T-11 | No | **Yes — composition rules as policy/projection/D6 specialization** |
| **F6** | EXISTING OWNER — financing-specific specialization | D6 (reversible) + Care/CM (irreversible) + C4.3 O8/O22 | No | Symmetric Care-side statement at C5 |
| **F7** | EXISTING OWNER / SEAM EXTENSION — **home must be explicit** — **normative** | CNS/REV-184 or Care extension; CM truth; D7 proof; RBAC gate; external principal via GCE | No | **Yes — bounded reliance/material-effect recording** |

**Six of seven require no new universal lifecycle. Three require regime-specific or bounded extensions inside existing owners. One is unresolved and routes out of this arc.**

---

## §4 — THREE-DECOMPOSITION ADJUDICATION

**Mapping, stated once:**

| Phase-B raw §5 | Gate-1a adjudication | Kickoff §7 | Kickoff §14 verdict code |
|---|---|---|---|
| **1** Minimal position-and-incidence constitution | A | A | **C** `MINIMAL_SHARED_POSITION_INCIDENCE_CONSTITUTION` |
| **2** Source-native lifecycles + attributed care-impact seam | B | B | **B** `SOURCE_NATIVE_OWNERS_PLUS_ATTRIBUTED_CARE_IMPACT_SEAM` |
| **3** No shared financing substrate | C | C | **A** `NO_SHARED_FINANCING_SUBSTRATE` |

### §4.1 Minimal position-and-incidence constitution (raw 1) — REJECTED

**Steelmanned properly.** The naive reading is "a position ledger," which the raw already kills. The serious reading, not previously stated in this arc: **Clinical Memory, but for care-relevant economic positions** — a concept registry over position kinds, append-only assertions with `authored_by` locked at write, authority-rank precedence, `context_key` coexistence, `unresolved_conflict` with fail-closed gates, a current-view. A real contracted OMNI pattern with a `canonical` authority header, and precisely the pattern Knox invoked at Gate-0R to refute the five-zone model.

**Evidence FOR.** F2 is a real non-identity law recurring across every regime. Clinical Memory proves OMNI can have one owner with many producers without becoming a coordinator. `authority_rank` is exactly what reconciling a card-derived coverage assertion against a payer-derived one would need. And Gate-0's Gap G2 — two committed surfaces holding the same `member_id` with no way to say "two sources for the same coverage, and they disagree" — is literally what Clinical Memory's design solves for clinical facts.

**Evidence AGAINST — decisive, on the raw's own burden.** **The analogy breaks on correction law.** Clinical Memory works because every producer asserts the *same kind of proposition* normalized to one concept registry, so every correction is the *same operation*: append higher authority, supersede. Economic positions do not share that (§3-F2-E): four correction laws, four conservation postures, one of which is *no record at all*. **The burden is "the same authoritative write, correction, and historical-incidence behavior rather than merely similar read projections." The estate supplies the same read projection and four different writes.** Two further counts: F1 makes the substrate's most common wedge-vertical row empty; F5 under raw 1 puts composition inside the shared layer, the raw's own path to the prohibited coordinator.

**What would falsify this rejection.** Exhibit three materially different regimes in which *creation* and *correction* of a care-relevant economic position are the same operation with the same conservation posture and the same authority model. One would be interesting; three would defeat it.

**Disposition: REJECTED — not as a god-object risk, but because the analogy that makes it attractive is the same analogy that breaks it.**

### §4.2 Source-native lifecycles + attributed care-impact seam (raw 2) — REASONING ACCEPTED, "NEW SEAM" CONCLUSION REJECTED

**Evidence FOR.** This is the shape the estate has already **ratified** for the structurally identical problem. GCE is `governance_binding`, `ratified`, Tier-0 mandatory, covers **inbound and outbound**, and **explicitly enumerates "administrative (insurance/prior-auth/billing/claims)" as a subfamily.** C4.6 §6 states the division of labour in one sentence. F6 and F7 are explained best by this shape. Care already supplies the care-facing half.

**Evidence AGAINST a *new* seam.** The seam raw 2 describes — source · authority · scope · time · uncertainty · material care effect — is substantially supplied today by the composition of GCE's returned-state classification (**ratified**) + Care's per-plane admissibility values (**REVIEW-DRAFT capture**) + REV-184's stance, `external_authority_committed` and rationale-class (**signed-off law, field-set at C5**) + C4.3's `O10`, custody ladder, `O17`, `O18` (**design-validated, implementation absent/partial**) + C4.5's `T-06`/`T-20` (**charter, pass not started**). **Minting a *financing* care-impact seam would duplicate a generic seam for one payload noun — `GRD-026` at the seam layer**, and C4.6 §11 plus the unified Vendor Loop rejection are the direct precedents.

**But — the honest qualifier R0 lacked.** That composition is **semantic architecture at four different maturities, none of them contracted for financing**. "The seam already exists" is true of the *design* and false of the *realization*. F5 and F7 both name real extension work inside it. **So raw 2's reasoning is correct and its burden is met; what is rejected is only the inference that a new financing-specific seam object must be minted.**

**Falsifier.** Show a care decision needing a financing-specific field the generic composition cannot carry — something that is not source, authority, scope, time, uncertainty, material effect, or a rationale-class value. I could not construct one; that is not proof none exists.

**Disposition: reasoning accepted and retained as the realization shape; the mint-a-new-seam conclusion rejected. Raw 2 and raw 3 are not perfectly exclusive in OMNI, and this carrier no longer treats them as such.**

### §4.3 No shared financing substrate (raw 3) — SELECTED, WITH NAMED QUALIFICATIONS

**Its burden:** "every surviving law can be enforced through general authority, resource, obligation, commerce, and care capabilities without any recurring shared authoritative write or stable care-impact interface."

**Evidence FOR.** §3 discharges the *shared-authoritative-write* half for six of seven laws, each against a named owner. The estate's precedent for the same class of problem resolved the same way at C4.6: composed profile, no new domain, no new owner. C4.3's central result generalizes cleanly — "**OMNI does not need a universal correction engine**; it needs owner-published proof, versioned impact reconstruction, selective reopening, independent obligations, honest uncertainty, and proof that the correction machinery itself cannot become a shadow source of truth." Substitute "financing" for "correction" and the sentence holds.

**Evidence AGAINST — stated fully.**
1. **F3 does not discharge the burden.** There may be a recurring authoritative write with no owner. My answer is that it is not financing — a *routing* claim, and routing is not solving. **If OPECON returns "contemporaneous incidence is financing-native," this verdict weakens materially.**
2. **The "stable care-impact interface" clause is satisfied by an interface that exists.** OMNI *has* one, generically. The honest statement is therefore **"no financing-specific substrate and no financing-specific seam, because a generic seam already exists in design and needs bounded extension in realization"** — not "nothing is needed."
3. **Raw 3's named hidden-coordinator risk is live right now.** "The absent layer may reappear as … an analytics projection treated as truth … or an organization that acquires de facto authority because it sees the most data." Gate-0 §I.2a's longitudinal financing-context projection is exactly that shape. Better wording at Round 3 did not remove the structural risk. **This is the single most important thing to watch downstream.**
4. **Absence of a substrate has not prevented accumulation.** Three committed surfaces already carry coverage-like fields with no owner (§7).

**Falsifiers for the selected disposition.** (a) OPECON returns "financing-native"; (b) a fixture shows a care decision needing a financing-specific field the generic seam cannot carry; (c) three regimes exhibit identical creation-and-correction behaviour for economic positions; (d) the longitudinal financing projection acquires a write-back path or becomes a gate — at which point the absent layer has reappeared covertly and this verdict was wrong.

**Disposition: SELECTED, qualified.**

### §4.4 Cross-regime lifecycle test

| Case | Regime | Authoritative creation | Correction / reversal law | Conservation posture | Same lifecycle? |
|---|---|---|---|---|---|
| No financing lifecycle / uncompensated | R12 | **nothing is created** | n/a | n/a | **No — the object is absence** |
| Simple bilateral payment | R1 | one atomic act, one authority | additive adjustment; refund | value conserved (D6 §8.8) | Reference case |
| Third-party conditional support | R3 | external principal commits; OMNI holds `externally_committed_truth` | external supersession + `external_action`; OMNI never edits | none OMNI-side | **No — OMNI cannot create or correct it** |
| Provider/operator financial risk | R7 | no per-person object need exist | period reconciliation | aggregate | **No — no person-level row** |
| Layered concurrent sources | R11 | each source creates natively | each corrects natively; the composition is **recomputed, never corrected** | per-source | **No — composition is a projection** |
| Retrospective responsibility / recovery | R2/R4 | responsibility created *after* the resource fact | **effective-time** reassignment; history preserved (S20-B) | reallocation, not creation | **No — creation and effect time-separated** |
| Financing reversal after irreversible care | R1–R12 | reversal money-side only | D6 additive reversal; care untouched (`O22`) | asymmetric by construction | **No — two lifecycles, two clocks** |

**The lifecycle fractures on six of seven. The only commonality across the column is vocabulary**, and superficial common vocabulary is not promoted into one owner.

---

## §5 — AGREEMENT / PARTY-POSITION CONSTELLATION — INDEPENDENT DISPOSITION

### §5.1 What was inspected
Federation contract in full. C4.6 §0.5/§3/§6/§11. C4.3 §4 crosswalk in full. REV-184 §0. Clinical Memory §5/§5.1. Care L171/L354. **C3.7F in full and C3.7G at the cited lines (R1 addition — this closes R0's declared A-Q3 gap).** Accountability/GRR capture §§0–11, 17–23. Open-review rows REV-141/157/159/160/185/187. Repository-wide pattern sweep (§0.3).

### §5.2 Findings, decomposed

1. **Unilateral assertion — EXISTS, richly owned.** Clinical Memory for care facts; GCE `evidence`/`observation`/`proposed-meaning` for external inbound.
2. **External commitment — EXISTS as a *classification*, ABSENT as a *carrier*.** GCE's `externally_committed_truth` is ratified and precise (committed in the **source** system). REV-184's `external_authority_committed` is the decision-side counterpart. C4.3 §4 names the gap directly: **"external accepted-custody carrier ABSENT"** (Federation + RBAC, EVRUN-008 R3). **Vocabulary ratified; the row that holds an accepted external commitment is not built.** See §6.
3. **Owner-native executed agreement — EXISTS as a verified disposition (R1).** C3.7F §1 row 19 and §2 verdict 6 disposition `sponsor_site_contract`/`payment_schedule` + the sponsor-XOR-insurer coverage grid as **`EXTEND` → D6** + `payment_care_firewall`, with the double-billing prohibition routed to `08`. C3.7G L24 carries the same. **This is a real bilateral commercial agreement dispositioned to an existing owner, and it is evidence against a universal Agreement substrate.**
4. **Mutually constituted, CONTESTED agreement — NOT FOUND in radius, and C3.7 does not supply it.** The C3.7 instrument is an *executed* contract with a payment schedule routed to D6; it carries no contested-state, no per-party interpretation, and no operative-posture-while-disputed. Federation's grants are **unilateral, issuer-owned, consent-gated, revocable within one deployment** — authorizations, not bargains, and no counterparty can contest one. C4.6 carries "participation-agreement" only as a **configuration attribute of a connection instance**. The noun exists; the contested object does not.
5. **Each party's position, and conflicting positions — EXISTS, generically and substantially.** REV-184 spine line 4 **`disagreement-as-escalation`**, concurrent conflicting stances preserved rather than merged, `dispute` a first-class stance. CM holds both assertions live with `unresolved_conflict` and fail-closed high-risk gates. C4.3 `O3` types the states; `O4` forbids force-matching. Accountability/GRR §9 adds **preserved conflict at the classification level** ("safety 'serious' vs platform 'moderate' → both retained").
6. **Operative posture while unresolved — PARTIALLY EXISTS; the named residual is real.** Present: `O2`, `O7`, `O19`, CM's authority-ranked current view, REV-184's `defer`/`preserve-option`, and Accountability/GRR's `coordination_status` overlay which is **explicitly not a mirror of domain status**. Absent: a dedicated **operative-position primitive** distinct from (i) the authority-ranked current view, (ii) each party's committed stance, (iii) eventual owner-specific reconciliation. **A distinctness gap, not an absence.**
7. **Repudiation / withdrawal / effective-period / versioned terms.** Prospective revocation: **EXISTS** (C4.3 S20-A). Retroactive invalidity: **EXISTS as a generalized class** (S20-B + §8, routed to C5). Effective period: **EXISTS** temporally and even in the committed `patient_insurance_details`. Versioned terms: **EXISTS as a pattern** (Settings temporal versioning; `eligibility_decisions.rule_version`; C4.6 per-posture `as_of`/`supersedes`/`reopen_trigger`) — but no versioned *bilateral instrument*.
8. **Who may transition each state.** Answered for OMNI-internal cases (RBAC capability + owning-domain commit + Federation Tier-4 attestation). **Unanswered for the bilateral case — and the honest answer is that in many real disputes nobody inside OMNI has the authority**; resolution is contractual, arbitral or judicial. Whatever OMNI builds must hold a state whose transition authority is **outside OMNI entirely**.

### §5.3 Is disagreement generic or financing-specific?
**Generic, decisively.** Every mechanism above was built for clinical, custody, identity, consent, platform and counterparty cases with no financing involvement. Both named absences — the accepted-custody carrier and the operative-position primitive — sit in **Federation + RBAC + REV-184/C4.3** territory.

### §5.4 DISPOSITION
**No universal Agreement owner is established.** Some agreement forms are **owner-native extensions** (verified: C3.7's sponsor contract → D6). The **network-participation and party-position/operative-posture constellation remains UNRESOLVED** as a generic cross-sovereign question, narrowed to two non-financing questions:

- **A-Q1 — the external accepted-custody / accepted-commitment carrier.** Named absent by C4.3 §4. Candidates: **Federation + RBAC**. Generic. **Do not mint in the Insurance arc.**
- **A-Q2 — the operative-position primitive.** Candidates: **REV-184/CNS** or **C4.3**. Generic.
- **A-Q3 — CLOSED (R1).** The C3.7 bodies were read; the disposition is D6-extension, recorded above.

**Do not mint a universal Agreement object.** Nothing in this gate earns one; `GRD-026` and C4.6's shadow-domain ruling both cut against it. Note also **Accountability/GRR §19**: `governed_relation_assertion` is an explicit **do-NOT-mint-yet Task-D hinge**, and any agreement-relation modelling must dedup against it first.

### §5.5 Where Accountability/GRR sits relative to all of this (R1 addition)
The Accountability/GRR capture is a **participating cross-cutting candidate architecture, not an owner of financing truth, and not the automatic home for disputes.** Its §3 scope invariant is explicit: it handles concerns "**for which OMNI accepts an accountable duty** to investigate, contain, remedy, communicate, or learn," and "**ordinary forward-flow work stays in its own loop/domain**." Its non-goals include "not a truth-owning domain · not the universal task layer · not one universal object." §22 restates it: Accountability "participates **only** when remedy/disclosure/duty/corrective-follow-through is involved."

| Financing event | Native owner / lifecycle | GCE role | Accountability admission |
|---|---|---|---|
| Eligibility response · benefit determination · denial | payer's determination, held as `externally_committed_truth` | governs the exchange + classification | **No** |
| Claim submission | OMNI-side submission lifecycle + D6 | governs the outbound crossing | **No** |
| Ordinary appeal | native financing/redress lifecycle | governs the crossing | **Conditional** — only on an accepted response clock or owed loop-back |
| Recoupment demand | external obligation + D6 | governs inbound | **No, not automatically** |
| Patient billing grievance | D6 dispute stays native | n/a | **Usually yes** — party owed loop-back |
| Missed appeal deadline caused by operator failure | financing truth stays native | n/a | **Yes** — investigation + party owed |
| Incorrect bills to a cohort | D6 corrections stay native | n/a | **Yes** — §7 of the capture worked example is this exact shape: one cohort-scoped `response_case` for uniform notice, individual cases only where individualized obligations arise |
| Regulator notice | Federation/legal | governs the crossing | **Yes** — legal clock + evidence package + submission proof (§11) |
| Payer non-response | external dependency state; domain timeout | governs the unanswered exchange | **Conditional — with a named law**: §10 external-delegation, *"internal owner keeps the clock; vendor silence escalates; vendor closure ≠ OMNI verification; delegation never discharges the obligation"* |

**Two mechanics with direct financing consequence.** §5 `duplicate` "**may still carry new evidence AND still owes the reporter a separate communication obligation (law)**" — ten thousand people calling about one wrong bill are ten thousand duplicates and ten thousand communication obligations. And §5's proactive-disclosure `[INV]` — "***silence is not closure***" — means a detected mis-billing cohort or systematically missed appeals can create a **protected provisional obligation with no reporter at all**, becoming committed when an authorized owner confirms the duty or automatically where law makes the trigger deterministic.

**Load-bearing mechanics this carrier must not collapse:** coordinator ≠ ledger (and the coordinator must run out-of-band when CNS *or itself* is impaired) · admission status ≠ disposition, `route_out` ≠ `reject` · domain projection ≠ accountability overlay ≠ composed matter view, **status independent, not mirrored** · **obligation-first, not case-first** ("the obligation, not a vague case status, is the accountable unit") · the **terminal law** (`breached`/`overdue` are nonterminal; an obligation is never closed merely because its failure is known) · the **successor laws** · `withdrawn` applies to reporter **participation only** — institutional duty survives reporter withdrawal · **no-orphan custody** · **multi-radius** `recipient_scope` · **version-at-time** with a minimum-sufficient context envelope, *"immutable by reference … never a copied dossier"* · **preserved conflict** · **independent closure horizons** and §17 **"Closure ≠ demonstrated prevention"** · consequence assessment **informs, never decides** · `governed_relation_assertion` **do-not-mint-yet**.

---

## §6 — EXTERNAL ASSERTION vs EXTERNAL COMMITMENT (H-N2) — REOPENED

**R0 closed this on a category error (C6). Retracted.**

**Two orthogonal axes.** GCE's returned-state classification answers *what **epistemic / source-authority status** does the returned thing have?* — `evidence | observation | proposed-meaning | externally_committed_truth`. Assertion-vs-commitment answers *what **kind of act** did the principal perform?* — described a fact · issued a determination · acknowledged receipt · accepted custody · authorized an activity · guaranteed payment · undertook a sponsorship · approved a loan · created a contractual obligation. **An `externally_committed_truth` may carry either** *"the payer determined coverage was active on date D"* **or** *"the payer undertakes to fund service S under conditions C."* Those differ in expiry, revocation, reliance, breach, remedy and transition authority. **Finer on one axis is not coverage of the other.**

**What is genuinely inherited and load-bearing.** GCE is **ratified** (`governance_binding`, `D0THES-DEC-036`), covers **inbound and outbound**, internal and external — "**Two faces, one spine**" — and **explicitly enumerates administrative (insurance/prior-auth/billing/claims) as a subfamily.** **R0's claim that an unsolicited inbound commitment may fall outside GCE is withdrawn (C7):** unsolicited arrival may raise admission, identity, consent, relationship or trust questions, but does not by itself place the exchange outside GCE.

**What exists on the commitment axis, honestly bounded.** C4.3's ten-state external-custody ladder and `O10 ACK ≠ accepted-custody` carry **custody** commitment (did you accept what I sent?), mutation-tested as **M04** and caught unambiguously. **Custody acceptance is not the same as a coverage determination, an authorization, a payment guarantee, a sponsorship undertaking, a loan approval, or a contractual obligation.** R0 used the custody ladder as proof that all commitment semantics exist; that is withdrawn.

**Is a new owner needed? Not demonstrated.** What is named absent is a **carrier**, not an owner: C4.3 §4's "**external accepted-custody carrier ABSENT**," attributed to **Federation + RBAC**.

**Where OMNI is the authoritative party — must not be lost.** When OMNI's own operator issues the commitment (a guarantee, an accepted estimate, an in-house financing approval, a sponsor undertaking), it is **not** an external commitment and must not be modelled through external-assertion machinery. That is Gate-0's **H-N3** communicative act and Gap **G7** — unowned, generalizing past insurance (consent disclosures, medication warnings, aftercare, price quotes), with D7 owning the artifact and the *act* unowned. **The vendor/federation-financing fixture makes this urgent** (§9).

**DISPOSITION: `OPEN — GENERIC COUNTERPARTY PHYSICS ABOVE INSURANCE`.** GCE supplies source-authority and exchange classification and is inherited. Gate 1b has **not** established that the estate supplies a sufficiently typed external-commitment lifecycle or profile. **No payer domain follows from that conclusion**, and the residue belongs above the Insurance arc.

---

## §7 — IMPLEMENTATION-SURFACE RECONCILIATION — THREE SURFACES

**Evidence basis (R1).** All five insurance-touching migrations read directly, including the `patient_scoped_tables` and `source_aware_tables` blocks and all three `patient_column` branches; the question-bank emissions read in full; RLS policies and grants enumerated by pattern sweep. **R0's §7 rested on the CREATE TABLE statements alone and was wrong in four places (§0.5 C1–C4).**

### §7.1 The two table surfaces, corrected

| Axis | `payer_eligibility_documents` | `patient_insurance_details` |
|---|---|---|
| **What it stores** | An **artifact** (bucket/path/mime/size/`content_hash_sha256`) **fused with** coverage-identity fields (`payer_name` NOT NULL, `plan_id`, `member_id`, `group_id`) and a `card_side` discriminator | **Structured administrative coverage data**: `coverage_type`, `carrier_name`, `plan_name`, `member_id` NOT NULL, `group_id`, `subscriber_name`, `subscriber_dob`, `relationship_to_subscriber`, `effective_date`, `termination_date`, `card_image_storage_id` |
| **Tenancy** | `org_id` NOT NULL + `brand_id` + `data_environment` **in the CREATE TABLE** | **`org_id` + `brand_id` + `data_environment` + org/env index, added by `20260506120000` (`patient_scoped_tables`, L144).** **Both surfaces are tenant/environment scoped. There is no tenancy asymmetry.** |
| **Provenance** | 10-value `source_kind` enum + `source_id` + `source_routing_id` FK + `content_hash_sha256` + `supersedes_document_id` self-FK, **in the CREATE TABLE** | **The same 10-value `source_kind` enum + `source_id`, added by `20260506120000` (`source_aware_tables`, L175); the intake write path populates them (`20260507120000` L545–549).** Also retains `verified_by_user_id` (a staff act) |
| **Write path** | `revoke insert, update, delete … from authenticated` and `from anon`; writes arrive through a `SECURITY DEFINER` routing RPC | Written through the `SECURITY DEFINER` intake-emission RPC. **RLS enabled with exactly one policy — `pid_staff_read` (SELECT). No UPDATE policy exists, so RLS denies UPDATE by default; absence from the `revoke update` block is a design signal, not an authority grant.** |
| **Correction posture** | Append-and-supersede: four-state `status` including `superseded`, plus `supersedes_document_id` | **Mutable-by-design: `is_active boolean` + `touch_updated_at` trigger + no supersession chain.** This is the real divergence |
| **Temporal** | `uploaded_at`, `verified_at`, `expires_at` | `effective_date`, `termination_date`, `created_at`, `updated_at` (trigger-mutated) |
| **Verification semantics** | `eligibility_status` — **one enum doing four jobs**: `uploaded` (artifact state), `pending_verification` (exchange state), `verified` (counterparty assertion), `expired` (staleness), with `rejected` ambiguous between extraction failure and "the payer says there is no coverage." Four owners, two authorities, one column | `verified_by_user_id` — **verification modelled as a staff act; no representation of a payer-sourced confirmation** |
| **Classification** | **Artifact + coverage assertion fused.** Own comment: "Section 1O.4.2 minimal target for insurance-card uploads. **Routing-only shape**; full insurance-domain design … **deferred to future Section**" | **Administrative record.** No comment claiming authority |

**Overlap, stated exactly.** Both hold `member_id` and `group_id`; `payer_name` and `carrier_name` are the same real-world fact under two names. **No foreign key, no shared coverage identity, no source-authority precedence rule, no operative-view contract.**

**Corrected worked example (C4).** A patient photographs a card at intake → the routing RPC writes `payer_eligibility_documents` with **`source_kind = 'intake'`** (hardcoded, `20260508120000` L554) and `payer_name` defaulted to `'unknown'` when absent from metadata → separately, intake emission writes `patient_insurance_details` with its own `source_kind`/`source_id`. **Two rows, the same real-world coverage fact, both `source_kind='intake'`, no link between them, different correction laws, and a `verified` marker on one that means "a staff member or extraction said so," not "the payer said so."**

### §7.2 The third surface (R1 addition, C5)

`lib/intake/question-bank/universal/insurance_payment_readiness.ts` emits three `patient_column` writes:

| Emission | Column | What it is |
|---|---|---|
| `qb.universal.insurance.has_insurance_v1` | `patients.has_insurance` | patient **self-reported coverage status** |
| conditional on `yes_commercial` | `patients.insurance_carrier` | **payer identity**, self-reported |
| `qb.universal.insurance.self_pay_willingness_v1` | `patients.self_pay_willingness` | **commercial willingness to pay** |

The generic execution path (identical across all three orchestrator migrations; `20260507120000` L352–356) is:

```sql
elsif target_name = 'patient_column' then
  execute format('update public.patients set %I = $1 where id = $2',
                 payload->>'column') using payload->'value', p_patient_id;
```

**A dynamic `UPDATE public.patients` with no column allowlist.** `%I` blocks injection; it does not constrain which column may be written. **A repository-wide sweep of `supabase/` for `has_insurance`, `insurance_carrier` and `self_pay_willingness` returns zero hits** — the three target columns do not exist in any committed migration in the inspected radius. Consequences, stated at the right confidence: **if those questions execute and the columns are genuinely absent, the `execute format` raises and aborts the emission batch** (a latent runtime failure); if the columns exist outside the migration estate, that is itself a governance problem; if the questions are never enabled, the surface is inert but still committed.

Independent of the missing columns, this path places **coverage self-report, payer identity and commercial willingness directly onto the generic patient row** with **no coverage authority, no effective period, no supersession model, no source-precedence rule, and — unlike every other emission branch — no `source_kind` write** (provenance for `patient_column` lives only in `audit_events`). **This is the most ungoverned of the three surfaces and R0 missed it entirely.**

### §7.3 What is proven, what is not

**Proven:** field overlap and absence of linkage between the two tables; absence of any declared authority relationship; the **correction-posture** asymmetry (append-and-supersede vs mutable `is_active`); the **verification-semantics** asymmetry; the four-jobs-in-one-enum defect; the third surface's dynamic-column path and the absence of its target columns in the migration estate.

**Not proven, and no claim is made either way:** that any surface is canonical (**none is** — one is self-described routing-only, one has no authority claim, one is a generic column write); direct `authenticated` update authority on `patient_insurance_details` (**RLS denies it absent an UPDATE policy**); and **deployment — no receipt was inspected or produced in this lane.** Repository presence proves committed migrations, not an applied production database.

### §7.4 Disposition — containment, not architecture
Gate-0's proposed **`INS-HAZ-COVSURF`** (four clauses + a checkable trip condition, inert until four integrator landings) remains the right instrument and **remains unlanded and unenforced**. **R0's proposed fifth clause was based on the false tenancy asymmetry and is WITHDRAWN.** Replacements proposed:

> **Clause 5 (replacement).** No new consumer may treat `payer_eligibility_documents.eligibility_status`, `patient_insurance_details.is_active`, or any `patients.*` insurance column as an **operative coverage view**, because no source-authority precedence rule exists between the surfaces and neither table has been established as canonical. **The trip condition extends to any PR that adds a coverage-semantic read across two of the three surfaces.**
>
> **Clause 6 (new).** The generic `patient_column` emission target must not be used for coverage, payer-identity or commercial-willingness attributes until an allowlist and an authority/temporal model exist. **Trip condition:** any PR adding a `patient_column` emission whose column name is not present in the committed migration estate.

**No migration is recommended and none is written here.** Coverage identity is a one-way door; ownership is the input to schema, not the output.

---

## §8 — FINAL OWNERSHIP DECOMPOSITION

### §8.1 Authoritative owners retained (no change proposed to any)

| Truth | Owner | Maturity |
|---|---|---|
| Money movement, order/sale, entitlement + redemption, refund/void/credit/adjustment, promo, tax, commission, attribution | **D6** | `draft_for_ratification` contract |
| Care-side assertions, adoption, authority precedence, conflict | **Clinical Memory** | `draft_for_ratification` contract |
| Resolution record / stance / disagreement / posture (process-state, not truth) | **CNS** (REV-184 §0.4) | signed-off nonbinding law; field-set at C5 |
| Authority, capability, blast-radius, autonomy gate | **RBAC** | `draft_for_ratification` contract |
| Topology, legal entity, jurisdiction, licensure, cross-operator grants | **Federation** | `draft_for_ratification` contract |
| Artifacts, consent artifacts, disclosure, proof lineage | **D7** | `draft_for_ratification` contract |
| Service/catalog definition, policy values, config | **Settings/Catalog** | `draft_for_ratification` contract |
| Workforce, labor cost, payroll compute | **BIZOPS** | `draft_for_ratification` contract |
| Fulfillment-state slice + obligations arising from a stance | **OFC** | `draft_for_ratification` contract |
| Any external counterparty's own commitments and determinations | **that counterparty**, held under **GCE** as `externally_committed_truth` | **GCE ratified** (`DEC-036`) |
| Accepted duty arising from a failure (conditional admission only) | **Accountability Loop (working handle; legacy label GRR)** — overlay only | REVIEW-DRAFT capture, contract candidate, **not closed**, name not locked |

### §8.2 RESIDUAL OWNERSHIP MATRIX — what "no shared substrate" does *not* answer

**This matrix exists so `NO_SHARED_FINANCING_SUBSTRATE` cannot be read as "insurance is solved."**

| Residual | Owner / participating owners | Maturity | Unresolved question |
|---|---|---|---|
| **Coverage identity + operative coverage view** | **none established** | three committed surfaces, no canonical owner | Who owns it, and is it **person-scoped or tenant-scoped**? (Gate-0 §J.5.1 calls this the one irreversible foreclosure) |
| **Payer benefit / policy ruleset + version** | external payer truth; OMNI holds a source-authoritative **projection** | absent | Where does the versioned interpretation live? `eligibility_decisions` is the shape to follow |
| **Network participation / contracted terms** | Federation (identity/licensure) + D6 (rates) candidates | **unresolved** | A-Q1/A-Q2; contested-state has no carrier |
| **Prior authorization / guarantee / sponsorship commitment** | external principal via GCE | **H-N2 OPEN** | Typed external-commitment lifecycle not established |
| **Clinical-to-financial representation (coding)** | Clinical Memory read-only source; representation owner **unresolved** | absent | Gate-0 Gap G8; argued outside D6 |
| **Claim submission / adjudication** | D6 / future RCM | **unwired**; C4.3 §4 names `REV-204` gap | Submission lifecycle and adjudication representation |
| **Patient responsibility / multi-party obligation allocation** | **D6 specialization** | not contracted | D6's ledger presumes buyer = patient |
| **Mixed-source composition** | sources severally + policy/projection | **F5 extension required** | compatibility · exclusivity · priority · sequence · validity · revocability · amount · shortfall · remainder · refund routing |
| **Consumer financing arrangement (lender/installment)** | **D6** | `DEC-027` shape exists at decision-row level; `REV-160` open; **not in the contract** | Must be **principal-agnostic** so the obligor may be internal (§9) |
| **Remittance / settlement / recoupment / finality** | **D6** specialization | not contracted | Offset, refund-to-payer, lookback windows; settlement finality is an orthogonal axis (Gate-0 H-N1) |
| **Estimate / guarantee / disclosure (communicative act)** | D6 calculation + D7 artifact + Messaging delivery; **the act itself unowned** | Gate-0 Gap G7 / H-N3 | Generalizes past insurance; urgent if an operator issues its own credit |
| **Appeal / grievance / redress** | native financing lifecycle; **conditional** Accountability/GRR overlay | capture not closed | Duty threshold per §5.5 |
| **Provider enrollment / credentialing / payer participation** | Federation owns `provider_credentialing`; **payer enrollment/contracting absent** | partial | Gate-0 Gap G5 adjacent |
| **Guarantor (responsible party ≠ patient)** | **none** | absent | Gate-0 Gap G4 |
| **Sponsor ≠ payer boundary** | **none** | absent | Gate-0 Gap G6; identified clinical data must never reach a sponsor |
| **F3 contemporaneous resource incidence** | **none** | **unresolved** | Route to OPECON-G0; representation form unproven |

### §8.3 What this result buys care (earned, not decoration)

The constructive claim is not "nothing is needed." It is that **the thing OMNI must own is preservation, not a better claims engine** — and that is exactly how the ratified posture already measures itself: `GRD-034`, *"OMNI is NOT measured by number of integrations; it is measured by whether every exchange preserves identity, authority, consent, context, ownership, commit, and proof."*

Three consequences follow from this gate's own findings, each pro-patient by construction rather than by exception.

**F1 means the uninsured person is not an edge case.** Because care occurrence entails no financing lifecycle, and absence is representable as absence rather than as a null coverage row, the system works for R12 (uncompensated) and R2 (care-first) *natively*. Every incumbent architecture treats those as exception paths. This one cannot, because the substrate has nowhere to put a financing object that does not exist.

**F6 plus `O22` means money reversal cannot retroactively unmake care.** A denial, a recoupment, a retroactive termination changes economic allocation; it does not reopen the clinical record, and `payment state ≠ care state` is already a contracted D6 invariant. The patient does not become retroactively un-treated because a payer changed its mind eighteen months later.

**And the convergence worth naming:** C3.7's trial-access wedge and Nick's vendor-financing fixture stand or fall on **the same single invariant** — C3.7G L15, *"accrual / revenue / retention pressure must not bend what the patient sees as clinically appropriate … If that invariant holds, OMNI is the access environment; if it leaks, OMNI is lead-gen-for-pharma. Everything else composes."* — and it is **posture-invariant including OMNI's own economics.** That is `REV-185`, it is currently **policy rather than structure**, and two independent arcs now depend on it. **This gate's single most consequential cross-arc finding is that `REV-185` is load-bearing for more of the estate than its open-review row reflects.**

### §8.4 Proposed common vocabulary REJECTED, with reasons preserved
*"Financing substrate" / "care-financing layer"* — no F-law requires it. *"Funding-participation object/interface"* (Gate-0 §C.2, falsifiable **F8**) — **F8 resolves against the interface**; the estate supplies the function generically through GCE + capability profiles. *"Position ledger" / minimal position constitution* — rejected on correction-law divergence (§4.1). *"A new dedicated financing care-impact seam"* — rejected as duplicative of a generic seam that exists in design (§4.2), **while its realization extensions are retained as owed work**. *"Payer domain"* — strongly contraindicated; reaffirmed. *"Universal Agreement object"* — not earned (§5). *"External assertion vs commitment as a net-new financing pair"* — **reframed, not rejected**: the distinction is real and open, but generic (§6).

---

## §9 — NICK-FIXTURE-VENDOR-FINANCING-01

**Manufacturer / loyalty / platform-originated patient financing.**

### §9.1 Provenance and evidence classes (kept separate on purpose)

| Class | Content | Status |
|---|---|---|
| **Operator-supplied strategic fixture** | Manufacturer consumer programs that began as loyalty/rebate are extending into patient financing originated inside the vendor's own app and underwritten by a third-party lender; scheduling/payment platforms are positioned to originate the same offer from the booking surface | **Operator-introduced; the architecture tests below stand regardless of vendor specifics** |
| **Repository-derived** | D6 §2 names Allē/Aspire/Cherry/CareCredit as one label class; C4.6 §11 already guards Allē/Allergan and ASPIRE/Galderma as a separate **capacity**; `EVSRC-2026-000281` records the operator raising vendor-loyalty-to-federation linkage as a medspa pain point | **`analysis_nonbinding` capture / accepted L2 guard — cited as repository evidence** |
| **External product facts** | Specific current vendor financing offerings relayed into review from outside the repository | **NOT repository-verified. `EXTERNAL_EVIDENCE_REQUIRED`. No Evidence-Plane packet exists; not promotion-grade; supports no doctrine here** |
| **Legal / regulatory / economic** | Lending, licensing, disclosure, servicing, fair-credit, risk-capital and prevalence questions | **`EXTERNAL_EVIDENCE_REQUIRED` — architectural conclusions left unresolved at those points** |

### §9.2 Capacities that must remain distinguishable
manufacturer / supplier · brand or loyalty principal · rebate/promotion sponsor · **financing distribution surface** · lender / creditor / risk bearer · servicer · merchant / provider · operator / federation · patient / borrower · payment rail.

### §9.3 Required tests
F2 anti-substitution · F5 source-preserving composition · F7 material care-impact reliance · role unbundling · payer/funder inversion · **refund destination (lender vs patient)** · **merchant-fee ownership** · credit decision vs clinical recommendation · recommendation/display firewall (`REV-185`) · self-preference and steering · principal/capacity identity · portability of approval and financing history · federation exit and non-captivity · **operator-as-provider vs operator-as-creditor** · multi-source purchase (reward + gift card + patient down payment + loan + possible insurance reimbursement).

### §9.4 Dispositions

**D1 — No eighth universal law.** F1, F2, F4, F6 hold unchanged. F2 is **strengthened** (rebate ≠ loan ≠ loyalty credit is the canonical non-substitutable set). F6 is **exercised hard** (reverse the financing after an irreversible injectable; Gate-0 S14 and C4.3 S12/M05 already cover the shape). **For a case that is genuinely novel commercially, producing no new physics is the finding: the novelty is topological and economic, not architectural.**

**D2 — The mechanism survives; two enumerations must extend.** C4.6's capacity tuple predicts exactly one entity holding supplier, quality-evidence-issuer, brand-principal **and financing-originator** capacities — evidence *for* the frame. What must extend is (i) the C4.6 §11 loyalty-guard enumeration, which lists supplier, pharmacy, fulfiller, quality-evidence issuer, loyalty/rewards operator and brand principal but **not financing origination**; and (ii) the D6 §2 sentence classing a lender with a rebate. **Precise statement: `lender financing cannot be represented solely as a payment-method label`** — which is what `DEC-027` already concluded.

**D3 — A regime-specific financing lifecycle is required, inside an existing owner.** `financing_arrangement` per `DEC-027`, in **D6**, and it must be **principal-agnostic** so the obligor may be an internal legal entity (§9.5). This is a native specialization, not a shared substrate.

**D4 — `REV-185` priority rises, and not only for Insurance.** When the party supplying credit also profits from unit volume, and the offer can surface adjacent to a clinical recommendation, the economically-blind invariant is the load-bearing control. `REV-185` requires it be "**STRUCTURAL, auditable … not a policy**." It is currently a policy. §8.3 records that C3.7 depends on the same invariant.

**D5 — Unsolicited external commitment (open).** Where financing is applied for entirely outside OMNI and arrives as an inbound assertion OMNI never solicited, GCE governs the crossing (**C7 corrected: unsolicited ≠ outside GCE**), but admission, identity, consent, relationship and trust handling are real questions. **Generic counterparty physics; recorded at §11 A-Q7.**

### §9.5 Can a federation offer in-house financing?
**Architecturally yes, with no new financing physics — and "architecturally possible" is not "commercially or legally advisable."** Four requirements, all with existing owners: (i) `financing_arrangement` **principal-agnostic**, obligor may be internal (D6, `REV-160`); (ii) Federation already owns `legal_entity` as the "tax/compliance/**liability** boundary" with `legal_entity_brand` M:N and `ownership_percent` — but carries **no risk-bearing or reserve concept**, which is **operator economics (F3's home), not Insurance**; (iii) **capacity separation is mandatory and is the highest-risk item in the fixture** — "operator-as-care-provider" and "operator-as-creditor" must be distinguishable principals, or a clinical recommendation and a credit decision are made by one undifferentiated actor (Federation inv 8 operator-neutrality is the nearest existing analogue); (iv) `REV-185` structural enforcement per D4. **This is the payer-inversion test applied to credit instead of insurance, and the estate passes it** — nothing in the surviving laws presumes a payer-to-provider direction (raw F7: "The law does not presume a payer-to-provider direction"). **Lending licensure, disclosure, servicing and risk-capital remain `EXTERNAL_EVIDENCE_REQUIRED`.**

### §9.6 Where the consortium question already lives
"Why wouldn't a large federation band together and offer credit?" is the **Counterparty Participation Economics Gate (Gate B)** and the **formation ladder** in `v4_C4_residual_moat_and_network_formation_doctrine.md` §11, including the four N=1 bootstrap mechanisms and the explicitly-named "**distribution-rich consortium**" adversary (§12). That artifact is a **CANDIDATE**. The question is strategic, already framed, and should not be re-derived inside Insurance.

**Net effect: the fixture strengthens the primary verdict.** A manufacturer-originated, lender-underwritten, app-distributed financing offer is a **new counterparty capacity over a ratified constitution**, not a new financing substrate. It changes two enumerations, requires one regime-specific D6 lifecycle, raises two open rows, and adds one open ownership question. **It creates no new owner.**

---

## §10 — TASK-D RELIANCE BOUNDARY

**Task-D MAY rely on:**
1. **No payer- or insurance-named domain is justified** (`GRD-026` + counterparty-noun ≠ lifecycle; reaffirmed, not re-argued).
2. **No universal shared financing substrate, owner, lifecycle or interface is established** — and the §3.8 per-law dispositions supporting that.
3. **GCE is inherited and ratified** (`D0THES-DEC-036`, `governance_binding`, Tier-0 mandatory), covers **inbound and outbound**, and explicitly enumerates administrative/insurance as a subfamily.
4. **C4.6 §11's composed-profile-not-domain ruling** and the **unified Vendor Loop rejection** as governing structural precedent — noting C4.6 is **accepted `analysis_nonbinding` build doctrine, not a ratified financing contract**.
5. **The correction-law argument against one universal position lifecycle** (§4.1) — the strongest original contribution here.
6. **Regime-specific native specialization is required, not optional** — at minimum `financing_arrangement` in D6 (`DEC-027`/`REV-160`).
7. **The §7 implementation reconciliation across three surfaces**, all verified against SQL.
8. **The §8.2 residual ownership matrix** as the honest statement of what remains unowned.
9. **The `REV-160` currency finding** and the **`REV-185` cross-arc dependency** (§8.3).

**Task-D MUST NOT rely on:**
1. F1–F7 as settled spine laws; **F5 and F7 as binding** (both normative and unaccepted).
2. **H-N2 as closed.** It is open.
3. **F3 as a proven new lifecycle.** Owner and representation form are unproven.
4. **F5 as fully implemented by generic projection doctrine.** The composition rules do not exist.
5. **F7 as already realized.** The home is not explicit.
6. **Agreement / party-position as solved.** One owner-native instance is verified; network participation and contested terms are not.
7. **Accountability/GRR as ratified, as named, or as the owner of any financing truth.** Capture is REVIEW-DRAFT, not closed, name not locked, admission conditional.
8. **Coverage identity ownership or scoping as decided.**
9. **Claim, adjudication, patient-responsibility, coding, guarantor or sponsor-boundary mechanics as solved.**
10. **Any R0 claim retracted at §0.5** — in particular the tenancy asymmetry, the provenance asymmetry, the `patient_self` example, and the direct-update authority claim.
11. **Any deployment inference.** No receipt was inspected.
12. **Any external market or legal fact** in §9 as promotion-grade.

**Task-D MUST remain free to falsify:** that the correction-law argument holds; that F3 is operator economics; that the generic seam suffices; that the GCE precedent transfers from pharmacy to financing; that six of seven inheritances survive contracting and building; and that "care-financing physics" is a useful architectural layer at all — the Phase-B invalidation condition's first limb is live and this gate finds substantially, though not entirely, in its favour.

---

## §11 — OPEN QUESTIONS / EVIDENCE DEPENDENCIES

**A — Repository architecture questions.**
**A-Q1** External accepted-custody / accepted-commitment carrier — named ABSENT by C4.3 §4; candidates Federation + RBAC. Generic. **A-Q2** Operative-position primitive — candidates REV-184/CNS or C4.3. Generic. **A-Q3 CLOSED (R1)** — C3.7 routes `sponsor_site_contract`/`payment_schedule` as a D6 extension. **A-Q4** `REV-160` reconciliation — carry the `DEC-027` shape into the open row; make the obligor **principal-agnostic**. **A-Q5** Coverage identity owner **and person-vs-tenant scoping** — the one irreversible foreclosure, currently undecided across three surfaces. **A-Q6** Symmetric `payment state ≠ care state` on the Care side (today D6-only). **A-Q7** Unsolicited inbound external commitment — admission/identity/consent/trust handling within GCE. **A-Q8** `REV-185` structural enforcement mechanism — owner CNS/Network-Governance; **now load-bearing for two arcs**. **A-Q9** H-N3 / Gap G7 communicative act — unowned; urgent if an operator issues its own credit. **A-Q10** `consequence_assessment_event` dedup between the Accountability/GRR capture §6a and C4.3. **A-Q11** Accountability/GRR naming inconsistency across catalog / FWREG-009 / WI14 / Card 2 — **not an Insurance question**; conflict row proposed.

**B — External questions, `EXTERNAL_EVIDENCE_REQUIRED` (recorded, not answered, not filled from model memory).**
**B-Q1** Whether a lender-originated obligation legally substitutes the obligated party such that refunds must route to the lender. *Architectural conclusion left unresolved: whether refund destination is a `financing_arrangement` field or a policy.* **B-Q2** Whether a manufacturer program that funds a rebate **and** distributes a lender's credit offer creates one regulated relationship or several. *Bears on §9.2's capacity list; left unresolved.* **B-Q3** Whether an operator/federation extending credit triggers lending, TPA or utilization-review licensure. *Feasibility of §9.5 left unresolved.* **B-Q4** Frequency and materiality of contemporaneous incidence (Phase-B hard fork 2) — needed by OPECON. **B-Q5** Whether care actors need a stable cross-regime assertion or only source-specific information (hard fork 3) — would confirm or falsify §4.2. Gate-0's `evidence_pending_ingestion` debt remains undischarged and is **not** a Gate-1b prerequisite.

**C — Implementation-proof questions.** Deployment state of all three surfaces (no receipt). Whether any consumer already reads `is_active`, `eligibility_status` or a `patients.*` insurance column as coverage authority. Whether the three `patient_column` target columns exist outside the migration estate. Whether the insurance question bank is enabled in any live configuration.

**D — Later contract questions (C5, explicitly not now).** `financing_arrangement` field set; the rationale-class enumeration and its home; the accepted-custody carrier's fields; elevation of `temporal_truth_pair` (`REV-200`) out of legacy; coverage identity and scoping; mixed-source composition rules.

---

## §12 — RETAINED AND REJECTED ALTERNATIVES

| Alternative | Disposition | Why — preserved so it is not silently re-derived |
|---|---|---|
| **Minimal position-and-incidence constitution** (raw 1) | **Rejected** | The Clinical Memory analogy that makes it credible also breaks it: CM has one correction law because every producer asserts the same kind of proposition; economic positions have four, one of which is *no record at all*. The raw's burden is same-write-and-correction; the estate supplies same-read, four-writes. F1 additionally makes its normal wedge-vertical row empty. |
| **Source-native + a NEW dedicated care-impact seam** (raw 2) | **Reasoning accepted and retained; mint-a-new-seam rejected** | The seam exists **in design** as a generic composition (GCE + Care per-plane + REV-184 + C4.3 + C4.5) at four different maturities, **none contracted for financing**. Minting a financing-specific one is `GRD-026` at the seam layer. Its **realization extensions (F5, F7) are retained as owed work**, which R0 wrongly implied were already done. |
| **D6-centred extension as the whole answer** | **Partially retained** | D6 legitimately absorbs `financing_arrangement`, patient responsibility, remittance/recoupment and the reversal half of F6. It cannot absorb coverage identity (person-scoped vs D6's operator-scoped grain) or F3. |
| **Write-authority five-zone decomposition** (Gate-0 §C.1) | **Not adopted** | Already demoted by Gate-0 at 0R. Not revived. |
| **Funding-participation interface** (Gate-0 §C.2, **F8**) | **Rejected — F8 resolves against it** | GCE + capability profiles supply the function generically. |
| **A general Agreement / party-position substrate** | **Not earned; narrowed to two generic questions** | Real machinery exists (§5.2). One owner-native instance verified (C3.7 → D6). What is absent is narrower than "agreements": an accepted-custody carrier and possibly an operative-position primitive, both generic. |
| **H-N2 as a closed financing hypothesis** | **REOPENED (R1)** | Category error: GCE classifies epistemic status; assertion-vs-commitment classifies speech-act kind. Orthogonal. |
| **F3 as a proven new lifecycle** | **DEMOTED (R1)** | C4.3 Law 10.1 is the governed-reconstruction alternative I failed to test it against. |
| **Insurance as a payer-named domain** | **Reaffirmed contraindicated** | `FWREG-017` + `GRD-026` + counterparty-noun ≠ lifecycle. |
| **Immediate migration on the coverage surfaces** | **Rejected again** | One-way door. Ownership is the input to schema, not the output. Containment only. |
| **Treating vendor-originated financing as new physics** | **Rejected** | No eighth law. Two enumerations extend; one D6 lifecycle required; two open rows rise. |
| **Accountability/GRR as the home for financing disputes** | **Rejected** | Capture §3 scope invariant: ordinary forward-flow stays in its own domain; admission requires an **accepted duty**. |
| **Declaring GRR retired / renaming to Accountability Loop** | **Rejected** | §23 forbids locking the name; FWREG-009, WI14 and Card 2 still carry GRR. |
| **Starting the OPECON lane here** | **Rejected** | Out of scope, unauthorized, operator-controlled sequencing. F3 is *routed*, not *started*. |

---

## §13 — SMALLEST NEXT GATE (recomputed after correction)

The R0 two-item gate was computed before the residual matrix existed and before H-N2 reopened. **Recomputed, the smallest sufficient next step is still narrow, but it is three items, not two, and one of them is now the priority.**

> **`INS-G2-CONTAINMENT-AND-SPECIALIZATION`** — one bounded pass, no new architecture:
> 1. **Land `INS-HAZ-COVSURF`** with the corrected clause set (Gate-0 §K.1 clauses 1–4 **plus §7.4's replacement clauses 5 and 6 covering the operative-view rule and the generic `patient_column` path**). Until the four integrator landings occur, the hazard is a recommendation any consumer may ignore, and **three** surfaces keep accumulating.
> 2. **Close `REV-160`** by carrying the `D0THES-DEC-027` `financing_arrangement` shape into the D6 open row, **principal-agnostic**, with a decision on whether `payment_method` may continue to class a lender with a rebate.
> 3. **Route `REV-185` for structural-enforcement design.** This is the item the correction pass promoted: two independent arcs (C3.7 access wedge, Insurance vendor-financing) now depend on an invariant that exists only as policy. **It is not an Insurance deliverable and must not be built inside this arc — it needs its own owner (CNS/Network-Governance) and its own gate.**

**Everything else routes to an existing home rather than a new Insurance gate:** F3 → OPECON-G0 · A-Q1/A-Q2 → Federation/RBAC + REV-184/C4.3 · A-Q5 coverage-identity scoping → the input to any future schema work · A-Q9 (H-N3/G7) and A-Q10 (`consequence_assessment_event` dedup) → their own homes · A-Q11 naming inconsistency → the coordinated estate-sync pass · F5/F7 extensions → C5 contract authoring, informed by the **Care Response-Seam Audit** the Accountability/GRR capture §20 already names as the required next artifact.

**Not authorized by this carrier:** schema, contract mutation, implementation, C5, Task-D population, C3.9 population, promotion, any `main` landing, any start of the OPECON lane, any rename of a concept/file/lane/route.

**Proposed routing — PROPOSALS ONLY, nothing landed.** One catalog row · one Tier-2 read-graph route (*financing ownership* → this carrier → Gate-0 carrier → D6 §12 + `REV-159`/`REV-160`) · **zero decision-ledger rows** (nothing here is a decision) · open-review updates to `REV-159` (ownership resolves to existing owners; closure condition narrows), `REV-160` (**priority raise**; carry `DEC-027`; add the lender-vs-rebate question; principal-agnostic obligor), `REV-185` (**priority raise**; two-arc dependency; structural-enforcement owner owed), and the Gate-0-proposed agreement row (**re-scope to A-Q1 + A-Q2, both generic**) · one FWREG note routing **F3** to OPECON as an unresolved question · **one guardrail candidate, explicitly subject to dedup against `GRD-026` before minting** (*financing kinds with different obligor, refund-destination and reversal physics must not be classed by a single vendor-name label*) · **two conflict-ledger notes** (the `REV-160`/`DEC-027` currency contradiction; the Accountability/GRR naming inconsistency across catalog/FWREG-009/WI14/Card 2). **Integrator owns all of it.**

---

## §14 — STOP RECEIPT

| Field | Value |
|---|---|
| **Branch** | `cursor/ins-g1b-ownership-reconciliation`, from `d592e402b779aaedc1f137189bf51cd2b5ca678d` |
| **Prior head (reviewed by Knox)** | `8c9d8189798a8ba3ee66e9ee11b8efb4a949a922` · blob `89d925fd0cae4bc5d79989b621bf58bab93d68de` · 692 lines |
| **This commit** | one **material reconciliation** commit on top of `8c9d818` |
| **Files added / modified / deleted** | 0 / **1** / 0 — only `.cursor/plans/v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` |
| **Shared control-plane surfaces touched** | **0** — `AGENTS.md`, `01`/`03`/`04`/`05`/`06`/`08`, `future_work_registry.md`, checkpoint handoff, `.cursor/rules/`, `CLAUDE.md`, `GEMINI.md` all untouched |
| **Contracts touched** | **0** — all read-only |
| **Schemas / migrations / code touched** | **0** |
| **Concepts, files, lanes or routes renamed** | **0** |
| **`main` touched** | **NO** |
| **PR #4 / PR #5 touched** | **NO** — untouched at `2aabed7` / `671d120` |
| **Sibling Phase-A lane branches** | untouched; OPECON lane **not started** |
| **Working-tree note** | ~22 pre-existing uncommitted modifications from an unrelated lane were present throughout; **not created, resolved, staged or committed by this lane.** Doctrine files were read via `git show d592e40:<path>`, never from the dirty tree |
| **Source depths** | §0.3, with strict depth labels; **R0's "read fully" over-labelling corrected** |
| **Inspection radius** | §0.4 |
| **Correction receipt** | §0.5 — 15 items, each with its adjudicating primary source |
| **Helper dependence** | **NONE.** Four reconnaissance reports were commissioned; **they had not returned to me at R0 or R1 authoring time.** Every correction was adjudicated against a primary source read directly |
| **Deployment claims** | **NONE** |
| **External-evidence claims** | **NONE offered as promotion-grade**; five `EXTERNAL_EVIDENCE_REQUIRED` items at §11-B |
| **Unresolved claims** | A-Q1…A-Q11 · B-Q1…B-Q5 · C · D (§11) |
| **Exact review refs** | control plane `d592e402b779aaedc1f137189bf51cd2b5ca678d` · Gate-0 `2aabed770eda9ec8164efaf0c5626816b85ca224` · Gate-1a `671d120fd79c7b55325cf6e998646c02ead45f0f` |

### PRIMARY GATE-1B VERDICT

> ## `NO_SHARED_FINANCING_SUBSTRATE`
>
> **Qualified, in full:** *No universal shared financing substrate, payer-named domain, or universal financing owner is justified. OMNI's operative architecture is **source-native authoritative owners + the ratified generic Governed Capability Exchange + native/regime-specific D6 financing lifecycles + derived source-preserving mixed-financing composition + explicit care-impact reliance recording + a conditional Accountability/GRR response overlay.** Several owner and carrier questions remain unresolved.*

**Verdict-letter note:** this is option **A** in the kickoff §14 menu = **decomposition 3** in the Phase-B raw = **decomposition C** in the Gate-1a adjudication. The three letterings are not aligned; see §4's mapping table.

**What this verdict does NOT say (R1 — the R0 blanket claim is withdrawn):** it does **not** say "no new object, no new lifecycle, no new interface," and it does **not** say everything already exists. **No *universal shared* financing owner, lifecycle or interface is justified. Regime-specific native specializations and bounded generic extensions remain required or unresolved** — enumerated at §8.2.

**Named exceptions:**

| # | Exception | Disposition |
|---|---|---|
| **E1** | **F3 — contemporaneous resource incidence** | `UNRESOLVED — ROUTE TO OPECON-G0; owner and representation form not proven.` Not financing. Not started here |
| **E2** | **F2 realization — `financing_arrangement`** | `EXISTING OWNER — FINANCING-SPECIFIC SPECIALIZATION` in **D6**. Shape exists at `DEC-027`; `REV-160` open; must be **principal-agnostic** |
| **E3** | **F5 realization — mixed-source composition** | `SEAM / PROJECTION ONLY — financing-specific composition extension required; no new truth owner.` Mechanics enumerated at §3-F5-D |
| **E4** | **F7 realization — care-impact reliance** | `EXISTING OWNER / SEAM EXTENSION — explicit REV-184/Care/CNS home required.` Four-level hierarchy at §3-F7-E |
| **E5** | **H-N2 — external assertion vs commitment** | `OPEN — GENERIC COUNTERPARTY PHYSICS ABOVE INSURANCE` |
| **E6** | **Agreement / party-position (A-Q1, A-Q2)** | `UNRESOLVED`, narrowed to two **generic** carrier questions. One owner-native instance verified (C3.7 → D6) |
| **E7** | **Three committed coverage surfaces** | **Containment hazard, not architecture.** `INS-HAZ-COVSURF` unlanded and unenforced; corrected clauses 5 and 6 proposed |
| **E8** | **F5 and F7 epistemic class** | Remain **explicitly normative constitutional commitments.** This gate provides no basis for reclassifying them and does not |
| **E9** | **`REV-185`** | Structural enforcement **absent**; now load-bearing for two independent arcs. Routed to its own owner and gate |

**STOP: `review_ready_pending_nick_knox_gate1b`**

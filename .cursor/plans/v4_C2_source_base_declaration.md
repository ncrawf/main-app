# v4 — C2 Source Base Declaration (the gate that proves the full estate is loaded + named)

Document type: `plan_or_roadmap` (a Build-OS work-package gate artifact for the v4 authoring sequence; the C2 deliverable named in the controlling plan)
Authority: `analysis_nonbinding` — declares + reconciles the source base; binds nothing, promotes nothing (`GRD-036`). Disposition tags below cite each source's own authority; they do not re-confer it.
Status: `CLOSED / accepted` 2026-06-13 (Nick + Knox sign-off, relayed) — full-estate reconciliation DONE (all §2 categories accounted for incl. the surfaced Cat 9 `designs/`; supersession §6 resolved against the ledger; code/ADR lane enumerated with findings; owed governance rows in §8 done). The v4 source base is the accepted estate for C3.5/C4. (Living: the v4 Source Stack still grows as new captures land — `GRD-036`.)
Domain(s): `architecture_governance`
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` (HOME dir) → phase **C2**. Sequence: C2 (this) → C3 method recovery → C3.5 Care-Setting Expansion + Execution-Substrate Pressure Test → C4 v4 spine.
Inherits: `omni_thesis_v3_integrated_spine.md` **§0 — Canonical Source Stack** + its **"v4 carry-forward inputs — the v4 Source Stack"** block (this file is the gated, completeness-reconciled execution of that block — NOT a new stack).
Supersedes / Superseded by: none.
Review gate: `user_knox_required`.

---

> **★ THIS FILE IS THE CANONICAL REFERENT FOR "THE SOURCE BASE."** Whenever the controlling plan or any v4 doc says "source base" / "full estate" / "all sources," it means **the full 9-category estate enumerated here** (§2) — CLOSED/accepted 2026-06-13, current (EVRUN-000002 = 110/110), living per `GRD-036`. **The VIDEO CORPUS is in-base (Cat 6): EVSRC sources + §3 Review-001 (Knox) + §3 Review-003 (Opus) + EVRUN-000001/000002 registries + tension register + anchor ledger + coverage matrix.** C4 authoring must **actively MINE** it (the registry is the workbench), not merely cite the §2A summary — proven load-bearing twice in REV-184.

## §0 — Purpose + what "done" means

**Purpose.** Prove — not assert — that the full estate the v4 spine will be authored from is **loaded, named, and dispositioned**, so C3/C3.5/C4 cannot silently drop a load-bearing input or cite a dead one. This is the **same source base v3 authored from** (the spine §0 stack), reconciled for completeness against the canonical catalog, plus the post-v3 captures v3's own §0 already pre-declared, plus one new reality-check lane (shipped code/ADRs) per Nick's 2026-06-13 scope decision.

**This is an accounting + disposition pass over the EXISTING corpus. It invents no new framing and re-reads nothing for synthesis** (that is C3/C3.5/C4 work). It answers exactly four questions per source family: *is it loaded? · what is its authority (binding / evidence / historical / superseded)? · is it superseded (→ pointer)? · which v4 section(s) will consult it?*

**Anchored on the canonical indexes (per Nick's approval)** so the declaration is self-verifying rather than a hand-list that drifts:
- `doctrine/01_master_corpus_catalog.md` — canonical file inventory + classification ledger (`historical` / `supersedes` / `superseded_by` / `handling_state`). **The completeness proof = every active catalog row maps to a category row below or to an explicit exclusion.**
- `doctrine/00_architecture_artifact_index.md` — artifact roles (what holds what; what is FORBIDDEN in each).
- `doctrine/04_manifest_read_graph.md` — context-load routes.
- `ingestion/00_evidence_router.md` — evidence-plane lane router.
- `doctrine/05_supersession_conflict_ledger.md` — what replaced/contradicts what (so superseded docs aren't resurrected as live).

**Gate closes when (§7):** (a) every active catalog row is accounted for, (b) supersession checks (§6) are resolved, (c) the code/ADR lane is enumerated, (d) Nick (+ Knox) signs off. **No v4 spine prose before then.**

---

## §1 — Inheritance statement (the v3 stack, carried forward verbatim)

The v4 source base **starts as the v3 §0 Canonical Source Stack, unchanged.** Reproduced here as the spine of C2 (authority tags are v3's, not re-derived):

| v3 §0 # | Source | Path | Authority (v3's tag) |
|---|---|---|---|
| 1 | Thesis v2 | `omni_thesis_v2_2026-05-26.md` | superseded-but-source |
| 2 | Enterprise Posture | `doctrine/omni_enterprise_posture_2026-06-03.md` | governance_binding |
| 3 | AI-Substrate Frame | `doctrine/ai_substrate_frame_2026-06-03.md` | governance_binding |
| 4 | REV-176 routing spine + spring inventory | `ai_substrate_routing_spine_REV-176.md` + `ingestion/outside_learning/sources/2026-spring_ai_substrate/inventory/` | evidence_nonbinding |
| 5 | Two 06-03 pressure tests | `audits/2026-06-03_outward_omni_agentic_interop_pressure_test.md` + `audits/2026-06-03_federation_universal_trust_topology_pressure_test.md` | analysis_nonbinding |
| 6 | The v3 spine itself | `omni_thesis_v3_integrated_spine.md` | plan_nonbinding |
| 7 | Surface Map + surfaces/ + projections/ | `OMNI_Surface_Map_vNext.md`, `surfaces/*`, `projections/*` | P4/P5 contracts |
| 8 | System Map + contracts/ | `OMNI_System_Map_vNext.md`, `contracts/*` | P1 contracts |

**v3 §0's authoring safeguards are carried forward verbatim and remain binding on v4** ("the thesis is aware of the stack, it does not become the stack"; §7.7/§13 is the highest-watch P4/P5 bridge; Build-OS pointer = POSTURE not PRACTICE; exchange ≠ truth ownership; thesis-first then contracts).

---

## §2 — Category coverage (full-estate reconciliation; counts current as of 2026-06-13)

> **★ C2.0 — Co-primary v4 inputs (READ FIRST; peers, not a ranking):** (1) `omni_thesis_v3_integrated_spine.md` + `omni_thesis_v2_2026-05-26.md` (preservation source); (2) **`ORIENTATION-2026-06-10_…v4-refocus.md` §2 Method-Recovery Report** — the BROAD v4 move (execution substrate; loops; control-plane stack; Intelligence Foundry; build-vs-buy; OMNI-Core/Federation/CNS split; repo-as-OS); (3) `EVRUN-000001 §2A` + `EVRUN-000002` registry/§1/§2A/tension register (AI corpora = peer pressure); (4) `OMNI_System_Map_vNext` + live `contracts/`; (5) Build-OS + Architecture Memory + Evidence-Plane + Foundry lineage. Everything in §2 below is the full inventory the declaration still checks off — C2.0 is what you open first.
>
> Each row = a source family, its current file count, the v3 §0 entry it maps to, its disposition, and the v4 sections that consult it. `[ ]` = reconciliation against `01_master_corpus_catalog` still owed; `[x]` = confirmed loaded + named. The fresh post-v3 docs are emphasized but enter **as peers in their category**, never as a replacement spine.

### Cat 1 — Thesis lineage  (maps to v3 §0 #1, #6)
- [x] **Active authoring source:** `omni_thesis_v3_integrated_spine.md` (the weave map) + `omni_thesis_v3_integrated_2026-06-05.md`.
- [x] **Preservation source:** `omni_thesis_v2_2026-05-26.md` (+ `_founder_version`). `superseded-but-source` — preserve/sharpen/add/supersede base.
- [x] **Historical lineage (do NOT author from; supersession-marked per §6):** `omni_thesis_v0/_v1` (+ founder versions) = `historical`. NOTE: `omni_thesis_v3_2026-06-03` is NOT historical — it is `active_adopted_directional_v3` (`D0THES-SUP-003`); the integrated-spine is its weave map.

### Cat 2 — The planes (P0–P6)  (maps to v3 §0 #7, #8)
- [x] **System Map:** `OMNI_System_Map_vNext.md` (canonical, emerging) + legacy `system_map_three_layers_60706286.plan.md` (**transitional evidence** — authoritative only for un-migrated modules + appendices incl. the **deferred lab spec**; vNext wins on conflict).
- [x] **Surface Map + surface contracts:** `OMNI_Surface_Map_vNext.md` (7-plane header) + `surfaces/` (14 surface contracts + template + `_surface_inbox_unassigned`).
- [x] **Projection contracts:** `projections/` (5 projection contracts + template) — incl. `patient_context_packet_projection_contract.md` (the §13 P4/P5 bridge).
- Note: v3 §0 cited "17 surfaces / 4 projections"; current = 14 / 5. Drift reconciled at the catalog (additions/renames), not a loss.

### Cat 3 — Domain contracts + seams  (maps to v3 §0 #8)
- [x] **15 domain contracts:** identity · clinical_memory_assertion · observation_measurement · intake · CNS_orchestration · messaging · rbac_authority · D3_scheduling · D5_service_occurrence · D6_commerce · D7_documents_consent_media · ordered_fulfillment · business_ops_workforce · federation · settings_catalog.
- [x] **5 seam contracts:** `contracts/seams/` (D3→D5, D5→D7, D5→D6, ID→PT, INTK→CM).
- Disposition: P1 ownership boundaries the thesis MUST NOT contradict.

### Cat 4 — Doctrine spine  (maps to v3 §0 #2, #3; expands them to the full constitutional set)
- [x] **Governance core:** `00_omni_coordination_charter` · `00_architecture_memory_control_plane` · `00_document_governance_and_taxonomy_2026-05-19` · `00_architecture_artifact_index` · `00_doctrine_manifest` · `01_master_corpus_catalog`.
- [x] **Read graph + Build-OS:** `04_manifest_read_graph` · `09_omni_build_os_layer_model` · `10_omni_build_os_rollout_sequence` · `11_build_entry_gate_v0` · `agent_work_protocol`.
- [x] **Ledgers + guardrails:** `06_guardrail_antipattern_digest` (Tier-0.5) · `03_decision_extraction_ledger` · `02_authority_routing_map` · `05_supersession_conflict_ledger` · `07_evidence_ingestion_ledger` · `08_open_review_queue` · `comparator_analogy_registry` · `future_work_registry`.
- [x] **v4-load-bearing frames (binding/governance):** `ai_substrate_frame_2026-06-03` (#3) · `omni_enterprise_posture_2026-06-03` (#2) · `cns_and_knowledge_reservoirs_frontier_2026-06-06` (FWREG-007 reservoirs family) · `operator_context_and_collaboration_model`.
- [x] **Remaining doctrine (45 total):** longitudinal-intelligence pressure-test family (5 files — evidence/limited-use per §6 `D0THES-CNF-010`), DL-17–22 drafts (historical/superseded-into-contract per §6; DL-20 flagged), restructure/patch-spec + governance-audit files (`historical`). All dispositioned at §6 / catalog.

### Cat 5 — Audits / pressure tests  (maps to v3 §0 #5; full set, fresh + prior)
- [x] **v3 stack (binding-as-evidence):** `2026-06-03_outward_omni_agentic_interop_pressure_test` (the **agentic pressure test** Nick flagged) + `2026-06-03_federation_universal_trust_topology_pressure_test`.
- [x] **Post-v3 carry-forward (from v3 §0 v4 block):** `2026-06-07_federation_centralized_vs_decentralized_care_operator_read` · `2026-06-08_website_surfaces_public_content_operator_read` (**ACCOUNT, do NOT over-promote**) · `2026-06-12_care_lanes_pressure_test_…` (`raw_unprocessed` → **processed in C3.5**, not C2).
- [x] **Prior pressure-test corpus (do not lose):** `2026-05-02_hybrid_care_delivery_stress_test`, longitudinal-intelligence set, marketing/lifecycle, clinical-assertion, intake-coherence, GLP1/TRT/HRT first-slices, + the 04-27/04-30/05-01/05-10 audit bank (38 total). Disposition mostly `evidence_nonbinding` / `historical`; named so C3.5/C4 can pull any on demand.

### Cat 6 — Ingestion / Evidence Plane (the "old source process", in full)  (maps to v3 §0 #4)
- [x] **Process spine (the method itself):** `ingestion/00_evidence_router` · `outside_learning/00_pipeline_doctrine` · `_SOURCE_TEMPLATE` · `analysis/_RUN_TEMPLATE/*` · `_KNOX_STRATEGIC_READ_PROMPT` · `_OPUS_REVIEW_003_PROMPT` · `outside_learning/00_index` + the 8 lane `_lane.md` catalogs.
- [x] **EVRUN-000001** (42-video corpus + **§2A** net-new baseline): run · concept registry · coverage matrix · anchor ledger. The dedup/cumulative baseline EVRUN-000002 builds on.
- [x] **EVRUN-000002** (wave-2, **COMPLETE 110/110**, conformance-verified): run · registry · coverage matrix · anchor ledger. Built on **EVRUN-000001 §2A**. The AI corpora are rich, dense **Tier-2 pressure** (Knox authority hierarchy; `GRD-036`): they may strengthen, sharpen, reframe, OR add to any part of the spine — including the core backbone — but they enter as pressure to be reconciled through the spine, never as auto-canon, and they are not pre-ranked above or below any other input.
- [x] **Spring AI-substrate corpus:** `2026-spring_ai_substrate/` (videos v01–v47 + inventory clusters + `_MIGRATION_STATUS` + knox_strategy) — the REV-176 source.
- [x] **2026-06 bucket** (the 42 source captures behind EVRUN-000001).
- [x] **Competitor evidence (Lens-A):** `competitor_product_evidence/mindbody/*` + `hims/_pressure_test_main_vs_hims`.
- [x] **Orientation:** `ORIENTATION-2026-06-10_…v4-refocus` (★ high-yield, **pressure not canon**).

### Cat 7 — Repo / Foundry / future-build (the "repo plans")  (net-new vs v3 §0; same estate, declared for the gate)
- [x] `foundation_vnext_reconciliation.plan.md` + `HANDOFF_2026-05-30_foundation_vnext_pivot` (the vNext pivot that drives contract sequence).
- [x] `ai_substrate_routing_spine_REV-176.md` (also v3 §0 #4) · `future_work_registry` (FWREG family incl. **FWREG-007 Knowledge-Reservoirs**).
- [x] **Named C5 future gates (named-only, NOT yet authored):** `repo_taxonomy_derivation_plan` · `permanent_foundry_design_plan` (the Intelligence Foundry) · `control_plane_contract_plan` · `domain_contract_rewrite_plan`.

### Cat 8 — Handoff chain (continuity)
- [x] **Load-bearing recent:** `HANDOFF_2026-06-10` (boot) · `2026-06-06_evidence_plane_and_knowledge_reservoirs` · `2026-06-03_surface_plane_and_pre_ai_immersion` + `2026-06-03_ai_substrate_frame_ratified` · `2026-06-02_foundation_vnext_contracts_and_surface_projection_planes` · `2026-05-30_foundation_vnext_pivot`.
- [x] **Historical continuity:** the 05-xx phase-4h handoff chain (catalog disposition: `derived_nonbinding`, routed as continuity evidence). Named, not re-synthesized.

### Cat 9 — Design / build-arc evidence  (SURFACED by the 2026-06-13 reconciliation — was missing from the draft)
- [x] `.cursor/plans/designs/` (20 files): the **day-0 scheduling rule-matrix arc** (`day_0_scheduling_rule_matrix/` Rounds 1–5, CLOSED — the provenance behind D3/D5/CNS contracts; Round 5.3 closure verdict is the freshest authority that DL-20's stale body contradicts), the scheduling operating-model/architecture/pressure-test docs (2026-05-17), `2026-04-27` clinical-assertion + intake-construction designs, and `2026-05-16_mindbody_architecture_understanding`.
- Disposition: `evidence` / `historical` — the design reasoning that fed the live contracts. Named so C3 (method recovery) and C4 can trace contract provenance; not authored-from as canon.

---

## §3 — The ONLY deltas vs the v3 stack (all additive; nothing reinvented)
1. **EVRUN-000002 flips `once processed` → COMPLETE 110/110.** Same document v3 §0 named; now done.
2. **Completeness reconciliation.** v3 §0 was a per-section consult list; C2 additionally checks the *whole* estate off against `01_master_corpus_catalog` so nothing silently drops. No new sources — an accounting pass.
3. **NEW: code/ADR reality-check lane** (§4) — the single genuine addition, per Nick's scope decision.

---

## §4 — NEW reality-check lane: shipped code + ADRs (Nick 2026-06-13 scope decision)

A clearly-fenced lane so the v4 thesis is pressured against **shipped reality**, not only doctrine. **Authority = `reality_check_nonbinding`.** It informs/contradicts the doctrinal stack; it does **not** displace it (doctrine/contracts remain canonical; code is evidence of the current slice, not the 2035 target).
- [x] **ADRs + architecture narratives:** `docs/architecture/` (11 docs) — incl. `cns_action_orchestration_adr_2026-05-17`, `cns_taxonomy_reconciliation`, `communications_topology`, `operational_objects_under_patient`, `scheduling_foundation_post_mortem`, evolution-narrative vols 2/4/5, `phase_4h_target_first_decision_record`.
- [x] **Shipped schema reality:** `supabase/migrations/` (50 migrations) — the real objects/lifecycle/RLS currently in the ground (intake, orders, refills, clinical visits, outbound jobs, commerce, messaging, system-map-v1).
- [x] **Shipped behavior:** `app/` · `lib/` · `components/` (~412 TS/TSX) — consulted by *area on demand* (e.g. `lib/intake/*`, `lib/rules/*`, `lib/orders/*`), NOT read wholesale.
- **Reality-check findings already on record (carry into C4):**
  - **Scheduling spine is RESERVED on `main`, not built** (`D0THES-CNF-011`, `open_review`): Build Entry Gate WP-EXEC-002 claims `lib/scheduling/*` artifacts that live only on parking branch `wip/scheduling-cns-pre-thesis-snapshot-2026-05-23` (commit `d753a64`) — the gate doc overstates on-main build state. v4 must not assume a shipped scheduling substrate.
  - **Narratives ≠ authority** (`D0-CNF-004`): `docs/architecture/evolution_narrative*.md` are chronology/rationale consult only; the system map + ADRs are the winning binding authority.
- **Lane rule:** code/ADRs are a *reality-check against the thesis*, surfaced where the spine claims a capability — they never become a thesis pillar and never override a contract.

---

## §5 — Anti-laziness rules (binding on C2 close)
1. **Draw on ALL sources; rank by AUTHORITY, not by recency, density, or size.** v4 is authored from the FULL estate — existing hard-won doctrine, the AI corpora, the care-lane / EOUC / federation / website / planes inputs — and **any input may strengthen, sharpen, reframe, or add to the spine, INCLUDING the core backbone.** No input is pre-ranked: not the video corpora (rich but not the whole emphasis), not the Epic question, not any single audit, not even existing v2/v3 (directionally strong but not frozen). Reconciliation is by **Knox's authority hierarchy** — Tier 0 binding OMNI doctrine → Tier 1 implementation contracts → Tier 2 evidence/pressure (the corpora + audits) → Tier 3 brainstorm/handoff — where **external sources PRESSURE doctrine but do not outrank accepted doctrine unless routed + approved** (`GRD-036`). Nick's standing reminder (v3 authoring): drawing on *all* available sources is non-negotiable — do not collapse to "just the videos" or "just the system map."
2. **No silent drops of the prior estate.** Every active `01_master_corpus_catalog` row maps to a §2 category row or an explicit exclusion. The gate is not satisfied until the count reconciles.
3. **Supersession-checked.** Superseded docs (§6) are marked with their pointer so C3/C3.5/C4 never cite a dead doc as live.

---

## §6 — Supersession checks — RESOLVED against `05_supersession_conflict_ledger` (2026-06-13)
- [x] **Thesis lineage** (ledger `D0THES-SUP-001/002/003`): **v0 → v1 → v2 → v3 chain confirmed.** `v0`/`v1` = `historical` (SUP-001/002). **`v2` = `superseded_by_v3` BUT preserved + inherited VERBATIM** (v3 §0.3 inheritance manifest) — so v2 stays the legitimate **preservation source** for authoring (matches v3 §0). `omni_thesis_v3_2026-06-03` = `active_adopted_directional_v3` (SUP-003: a re-grounding, not a rewrite, 0 hard contradictions). `v3_integrated_2026-06-05` + `v3_integrated_spine` = the integrated weave/blueprint (the live authoring map). **Author from: v3-integrated-spine (map) + v2 (preservation source); never cite v0/v1 as live.**
- [x] **DL drafts vs live contracts:** **contracts/* are live; DL-17–22 are the dispositioned starting corpus (`historical`/superseded-into-contract).** DL-17 commerce → D6 route-ready (`D0D6-CNF-001`); DL-22 clinical-media reconciled (`D0W3E-CNF-002`). **⚠ DL-20 care-coordination carries a known UNRESOLVED intra-doc contradiction (`D0THES-CNF-012`, HIGH, `open_review`) — 3 stale chronological layers.** Live D5 model = `contracts/D5_service_occurrence_care_coordination_contract.md` (service_occurrence canonical). **Rule for C3.5/C4: cite the live D5 contract, NEVER DL-20's body.**
- [x] **System map** (`D0W2-CNF-001`): `OMNI_System_Map_vNext` = canonical; `system_map_three_layers` = transitional evidence (un-migrated appendices incl. deferred lab spec still authoritative); `proposed_system_map_doctrine_2026-05-10` = `historical` rationale (inserted, then superseded).
- [x] **Older system-map/ontology docs:** `data_layers_reconciliation_v1` = companion-subordinate to system map, `rationale_nonbinding` (`D0W2-CNF-002`); `shipped_ontology_analysis_2026-05-10` / `omni_doctrine_reconciliation_map_v1` = `historical` consult. No live residue overriding contracts/system-map.
- [x] **LI doctrine** (`D0THES-CNF-010`, resolved 2026-05-31): `longitudinal_intelligence_cns_patient_operating_context` recovered to `main` as **evidence / limited-use** (Foundation vNext §A); re-verify vs current Tier-0 before treating as authority.
- [x] **Reframes (not contradictions):** `ai_substrate_frame` (`D0THES-CNF-013`) + `omni_enterprise_posture` (`D0THES-CNF-014`) = `resolved_by_reframe` — prior framing incomplete, not wrong; durable primitives preserved. Both are live `governance_binding` (v3 §0 #2/#3).

---

## §7 — Gate-close criteria + what feeds the next phases
**C2 closes when:** §2 checkboxes all `[x]` (catalog reconciliation complete) · §4 code/ADR lane enumerated to area-level · §6 supersession resolved · Nick (+ Knox) sign-off.
**Then, in order (each its own gate):**
- **C3 method recovery** consumes: the v3 spine §0 safeguards + **the `ORIENTATION-2026-06-10` Knox strategic read (co-primary method input)** + this declared base → converges ONE recovered spine-first method (v3 method + Knox's section-rewrite-contract / authority-tiering / control-planes-before-domains / execution-physics frame), with Nick's 3 corrections (draw on ALL sources · no standalone "stale" deliverable · timeless output as a strong default — positioning is fine, but no dated arrival/journey narrative baked into the prose; before/pressure/after stays in the worktable).
- **C3.5 pressure-test** consumes: this FULL base (its stated prerequisite — "FULL current-OMNI understanding") + the `raw_unprocessed` care-lanes doc → the bounded matrix that stress-tests the clinical/business action loop as ONE core mechanism of the execution substrate (feeds C4; does not define v4).
- **C4 v4 spine** consumes: everything above → the spine, then thesis. **No v4 prose before C2+C3+C3.5 close.**

---

## §8 — Owed (New Artifact Completion Rule) + open decisions
- **Owed this pass — ✅ DONE 2026-06-13:** catalog row added to `01_master_corpus_catalog` (`work_package = v4_thesis_source_stack`, `reconciled_pending_signoff`) · read-graph route added to `04_manifest_read_graph` (Tier 2 Cross-Cutting Consult #7) · HOME controlling plan (`wave-2_source_scaffolding_654989a0.plan.md`) now points here from its CURRENT STATE banner + C2 todo. Mechanical wiring complete; only Nick (+ Knox) sign-off remains to close the gate.
- **Open decision for Nick/Knox:** does the code/ADR reality-check lane stay `reality_check_nonbinding` and area-on-demand (recommended), or should any shipped object be promoted to a named v4 input?
- **Location note:** filed in WORKSPACE `.cursor/plans/` (next to the thesis + estate, workspace-searchable) rather than the HOME controlling-plan dir, to avoid the home-dir discoverability trap; the controlling plan will point here.

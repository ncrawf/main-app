# HANDOFF — 2026-06-14 — C3.5 Hospital/EHR-Gravity arc COMPLETE (G4 + G4.1) + C3.6 Oncology/Trials Clinical-Substrate addendum COMPLETE (A–G) + both handoff-safe — pre-C4

Document type: `checkpoint_handoff` (continuity artifact; non-binding — binding decisions in `doctrine/03_decision_extraction_ledger.md`, open items in `doctrine/08_open_review_queue.md`, schemas in contracts/maps). Per Agent Work Protocol §8 (Tier 3 — major arc close, crosses C3.5→C4 phase boundary).
Created: 2026-06-14. **This is the CURRENT checkpoint.** Supersedes `HANDOFF_2026-06-13_v4_prep_through_c3_5_arc_setup.md` as the boot point (06-13 stays valid as historical detail for the v4-prep gates C2/C3/C3.1/C4.0 + the C3.5 arc setup; 06-10 + 06-06 remain historical).
Tier-3 narrative volume: `docs/architecture/evolution_narrative_volume_6_2026-06-14.md`.

> ## ★★ CONTROLLING PLAN + CURRENT STATE (2026-06-14 — DO NOT SKIP) ★★
> **Controlling plan = `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`** — lives in the **HOME `.cursor/plans/` dir, NOT the workspace tree** (glob/grep of `main-app/.cursor/plans/` will NOT find it). Phase-gate sequence: A/B scaffolds → C1 process-wave → C2 → C3 → C3.1 → **C3.5 pressure-test → C3.6 oncology addendum → C4 v4 spine → C5 downstream**.
> - **Gate state (2026-06-14):** C2 ✅ CLOSED · C3 ✅ PASSED · C3.1 ✅ PASSED · C4.0 ✅ ACCEPTED · **C3.5 ✅ COMPLETE (G1→G4 + G4.1 desk-check)** · **C3.6 oncology/trials addendum ✅ COMPLETE (G1→G4, A–G)**.
> - **C3.7 Oncology Trial-Access / Accrual Wedge addendum ✅ COMPLETE 2026-06-14** (G1–G4; `v4_C3_7A..G`; load-bearing finding = the economically-blind, posture-invariant recommendation/display firewall; surfaced the governed-decision primitive). **All three pressure-test arcs C3.5/C3.6/C3.7 now CLOSED.** **Open-review is POPULATED in `08_open_review_queue.md` (`D0THES-REV-184…190`)** — no longer deferred; the fresh agent loads it, does NOT re-derive ad hoc. **`REV-184` (the Governed Resolution Lifecycle) is ✅ CLOSED / SIGNED-OFF 2026-06-14 (Nick + Knox)** — a confirmed v4 spine-grade law (canonical §0 + 7 named spine lines in `v4_REV184_decision_state_reconciliation.md`; read §0 only). **CARRY the 7 lines into C4; field-set + lifecycle state-machine → C5 domain-contract-rewrite. `REV-185…190` remain open-review inputs.** **C4 plan-hygiene done** (canonical "source base" definition = C2, incl. the video corpus + "actively mine" discipline; C4 section labeled scaffold + full-estate-first; 5-doc package named). **THEN NEXT gated step = C4 readiness / v4 continuity** (NOT v4 prose). The continuity agent writes the real C4 authoring package (`v4_C4_spine_authoring_plan` · `v4_C4_spine_shape_plan` · `v4_C4_thesis_synthesis_plan` · `v4_C4_thesis_shape_plan` · `v4_C4_fresh_agent_readiness_prompt`) — authored from the FULL C2 source base + execution-substrate frame; C3.5/C3.6/C3.7/REV-184 = pressure inputs, NOT the frame/source-base/hierarchy — THEN a fresh v4 agent must pass the **C4 Author Readiness Note** (Nick+Knox review) before any spine prose. Lane preserved by `v4_C4_readiness_bridge.md`.
> - **Do NOT author v4 prose yet. Do NOT run more scenario batches** (convergence proven; corpora are harness seed, not coverage).

---

## 0. Boot in 60 seconds
OMNI = one governed care + business operating substrate (2035-grade thesis); Foundation vNext planes authored; **no production code yet**. Two v4-forming pressure-test arcs just closed:
- **C3.5 (Hospital/EHR-Gravity)** — does the substrate survive hospital-grade physics + beat a records-first EHR? **Verdict: survivability PASS · superiority PASS** (governed-loop ownership). 1,158-row corpus; "40 families" reduced to **~6 genuinely-net-new + 2 named extensions + ~17 extensions + ~15 confirmations** (G4.1 verified vs all 15 contracts). The substrate mostly held — that's the win.
- **C3.6 (Oncology/Trials Clinical-Substrate Readiness)** — is OMNI poised for the clinical-trial world (chemo/IP custody/blinding/protocol/AE/EDC/RWE/incumbent systems) as environment-of-work/proof without becoming middleware or corrupting truth planes? **Verdict: architecturally poised YES (bounded 10-item delta package); build- & regulatory-ready NO/UNTESTED; necessary-and-bounded ≠ sufficient.** 201-row corpus.

Both are `analysis_nonbinding` (`GRD-036`) — feed v4 thesis/contract shaping; nothing minted into contracts.

## 1. Operator + collaboration model
`doctrine/operator_context_and_collaboration_model.md`. **Nick** = operator/owner (full fidelity, tradeoffs, proof, genuine pushback; his coverage-anxiety is signal). **Knox** = ChatGPT review instance. Trifecta: Opus produces → Nick relays → Knox reviews → Nick relays → Opus refines. `knox = …` = relayed review (evaluate on merits, push back).

## 2. What C3.5 produced + where (do NOT graveyard — see G4 §11 Artifact Use Map)
- Arc: G1 (A/B/C) → G2 (D, 101 HCASE) → G3 (E 40 traces / F disposition) → G3.5 (F2 503 / F3 255 / F4 250 / F5 150 + convergence-check + topology-reconciliation) → **G4** → **G4.1** (verified desk-check, all 15 contracts).
- **Authority docs:** `v4_C3_5G4_handoff_and_verdict.md` (verdict + disposition ledger + §11 artifact-use map + §7 harness obligation + §10 wedge) · `v4_C3_5G4_1_contract_deskcheck_addendum.md` (FINAL verified dispositions — **cite this, not G4 alone, for contract work**).
- **Net-new (~6):** `external_capability`/`command_authority_boundary` (P35) · `patient_bedside_agent` (P18) · `trial_protocol` (P29) · `simulation_harness` (P39, Build-OS) · `ai_consent_scope`+`grievance_workflow` (P22) · `outcome_intelligence`/RWE (P28→`REV-174`). **+2 named extensions:** `movement_state`→D5, `administration_event`→OFC. Chains A–GG = relationship-pattern artifact.

## 3. What C3.6 produced + where (do NOT graveyard — see G §8.5 Artifact Use Map)
- Arc: G1 (A/B/C) → G2 (D, 201 rows) → G3 (E 28 traces / F disposition) → **G4** (`v4_C3_6G_handoff_and_verdict.md` — readiness verdict + §8.5 artifact-use map).
- **The 10-item delta package:** NET-NEW `source_authority_map` · `trial_protocol` (10-teeth core) · `knowledge_partition` · `chain_of_identity`; EXTEND `administration_event` · IP `custody_chain` · `outcome_intelligence`/RWE (REV-174) · coverage-analysis/billing-grid (D6) · `trial_subject` linkage; CONFIRM+posture P35 ownership-ladder.
- **Load-bearing proof:** D-135 (locked-DB endpoint vs later clinical correction → **no single record of truth**; field-level positional source authority is the only honest model). Regulatory backbone (ALCOA++/Part-11) = **reuse, not net-new**.

## 4. Settled decisions — do NOT re-litigate
- Hospital = stress-case of ONE substrate, not a bolt-on. Topology = existing Federation 6-tier canon (no parallel operator/node/setting vocabulary). External systems = P35 capability-modes + ownership ladder (anti-middleware).
- Anti-diminishment doctrine (binding for v4): OMNI = environment-of-work + environment-of-proof; incumbents are rungs, not the ceiling; the locked regulatory dataset is a **durable export-target ROLE (distinct plane), NOT a permanent vendor concession**.
- Corpora (1,158 + 201 rows) = **seed corpus for the Build-OS sim/eval/regression harness, NOT coverage** (narrowly framed: C3.5 contributes one requirement; reconcile with the existing Build-OS/native-AI workstream).
- Readiness honesty: architectural-readiness ≠ build-readiness ≠ regulatory-readiness; necessary-and-bounded ≠ sufficient.

## 5. OWED / deferred (explicitly tracked so nothing graveyards)
1. **Catalog (`01`) + read-graph (`04`) rows for the ~21 pressure-test artifacts** (C3.5 `A–G`, F2–F5, convergence-check, topology-reconciliation, G4.1; C3.6 `A–G`). The C3.5 plan row catalogued them as shells "owed on population" — now populated. **Owed**: a cataloging pass (or at promotion). NOT done here (Tier-3 closeout marks owed per §8 item 5).
2. **Open-review → `08`:** C3.5 G4 §8 + C3.6 G §7 items (degraded-mode authority, P35 owner, physical-automation, security-command owner, `trial_protocol` home, `source_authority_map` home, `knowledge_partition` owner, RWE placement, IP custody, coverage-analysis, locked-dataset plane, etc.). **Route to `08` at C3.5/C3.6 arc-acceptance** (mirrors C3.1→`REV-179..183` precedent; the items are enumerated in the two G4 docs so they are preserved, not lost).
3. **FWREG rows:** net-new objects + C5 deferrals are future-work candidates; add at build-entry retrieval per the registry's discipline (not pre-seeded).
4. **Promotion:** every net-new/extension goes through its domain's review gate (`GRD-036`); confirmed-canon items need only citation.

## 6. NEXT — C4 readiness / v4 continuity (the next lane)
Sequence: (1) this checkpoint → (2) v4 continuity agent writes the C4 authoring plans, folding in C3.5 (~6 net-new + chains) + C3.6 (10-item delta package) + the harness obligation → (3) fresh v4 agent passes the **C4 Author Readiness Note** (must now also prove it understands the C3.6 readiness finding — see `v4_C4_readiness_bridge.md`) → (4) v4 spine prose → C5. **Carry-forward inputs:** `v4_C4_readiness_bridge.md` §26 required-inputs (now includes `v4_C3_6A..G`) + both G4 artifact-use maps + the EVRUN-000001/000002 AI-corpus registry.

## 7. Pointers
- C3.5: `v4_C3_5G4_handoff_and_verdict.md` (+ §11 map) · `v4_C3_5G4_1_contract_deskcheck_addendum.md` (verified ledger) · `v4_C3_5A..F`, `F2–F5`, convergence-check, topology-reconciliation.
- C3.6: `v4_C3_6G_handoff_and_verdict.md` (+ §8.5 map) · `v4_C3_6A..F`.
- Bridge: `v4_C4_readiness_bridge.md`. Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` (HOME).
- Doctrine: `agent_work_protocol.md` (§1 Boot Freshness, §8 Closeout) · `01_master_corpus_catalog.md` · `04_manifest_read_graph.md` #15 · `06_guardrail_antipattern_digest.md` · `08_open_review_queue.md`. Narrative: `docs/architecture/evolution_narrative_volume_6_2026-06-14.md`.

## 8. Stop condition for this handoff
Superseded when the v4 continuity agent opens the C4 authoring lane (writes the first C4 authoring plan and/or routes the C3.5/C3.6 open-review items into `08`) and repoints the boot path to its own checkpoint. Until then this is the boot point.

End of handoff.

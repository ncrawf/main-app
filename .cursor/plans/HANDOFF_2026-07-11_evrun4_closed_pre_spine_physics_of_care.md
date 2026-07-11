# HANDOFF — 2026-07-11 — EVRUN-2026-000004 async-care crystallization CLOSED; **pre-spine physics-of-care continuation (NOT spine authoring yet)**

Document type: `checkpoint_handoff` (continuity artifact; **non-binding** — binding decisions live in `doctrine/03_decision_extraction_ledger.md`, open items in `08_open_review_queue.md`, schemas in contracts/maps; evidence non-binding until promoted `GRD-036`). Per Agent Work Protocol §8.
Created: 2026-07-11. **This is the CURRENT boot checkpoint.** Supersedes `HANDOFF_2026-07-08_wave3_video_set_complete_pre_reconciliation.md` (wave-3 sub-milestone) as the boot pointer; both it and `HANDOFF_2026-07-04_c3_8_complete_pre_spine.md` (C3.8 COMPLETE) **stay valid as historical detail.** Master gate-state unchanged.
Controlling plan (boot pointer): `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` (**HOME dir, not the workspace tree**).

> ## ★★ CURRENT STATE + NEXT ACTION (do not skip) ★★
> - **Gate state (unchanged):** C2 CLOSED · C3/C3.1 PASSED · C3.5/C3.6/C3.7 COMPLETE · REV-184 CLOSED · C4 runway ACCEPTED · Readiness PASSED · **C3.8 COMPLETE.** Enterprise-AI-OS pressure did NOT break core physics.
> - **NEW since wave-3 (07-08):** (a) **`EVSRC-2026-000251`** captured — the canonical TRT prospective-patient consult + parallel ChatGPT-screenshot loop (the live Lens-A workaround OMNI displaces; the async-care substrate specimen). (b) **`EVRUN-2026-000004`** authored + **trifecta-CLOSED** (4 rounds Nick+Knox+Opus; committed `49f3363`, pushed) — the async-care substrate **cross-arc crystallization**. Its **§0.5 SETTLED STATE** is the settled ontology/naming + 4-status disposition ledger; wired into read-graph #9a + Tier-2 #11, C2 source base, this controlling plan, the v4 spine-authoring plan, evidence-ledger `D0UOR-EVD-002`, and the lane index. `accepted_as_required_v4_spine_input`, `not_promoted`.
> - **★ NEXT ≠ v4 SPINE DRAFT 0 yet.** Operator directive (2026-07-11): insert a **pre-spine physics-of-care continuation** before spine authoring. *"We're not ready."* Three tasks (below), all **propose-only** — no spine/thesis/C5 authoring.
> - **HARD STOPS (unchanged):** no v4 spine/thesis prose; no C5 contract/schema edits; propose-only (`GRD-036`); dedup-before-minting; author-from-source not from anchor-ledger (`GRD-044`); §0.5 of EVRUN-000004 is the naming baseline (do NOT re-mint the retired terms).

---

## 0. Boot in 60 seconds
OMNI = one governed contextual care + business execution substrate; Foundation vNext planes authored; **no production spine/thesis yet.** We are on the C4 runway. Per the 2026-07-06 BUILD PLAN the sequence was ingestion-wave → v4 SPINE DRAFT 0 → pressure pass. **The operator has now inserted MORE pre-spine work** (additional care-physics specimens + a specific conversation-mechanic study + 3 more videos) before Draft 0. This handoff hands the next agent exactly that pre-spine work, with EVRUN-000004 §0.5 as the settled baseline it extends.

## 1. What just happened (this session, 07-09 → 07-11)
- Deep-studied `EVSRC-2026-000251` (the ~2k-line Nick↔Knox discussion, not just the surface) → authored `EVRUN-2026-000004` (cross-arc crystallization: M1–M6 mechanics vs the full estate).
- 4 trifecta rounds converged + **de-invented** the naming (retired Membrane Radii / Governed Crossing / Boundary Regime / Operational Emission-Decompression / wrapper nouns) → mapped to existing canon + standards (Party/FHIR).
- Closed the artifact (`§0.5` settled state + 4-status disposition ledger), fixed all internal contradictions, **wired it into the source list** so it can't leak at the pivot, and committed/pushed (`49f3363`).
- Also parked a **Build-OS taxonomy/file-types capture** (`build_os_taxonomy_and_filetypes_capture_2026-07-10.md`, `FWREG-008`) for the future C5 repo-taxonomy gate.

## 2. NEXT AGENT — the three pre-spine tasks (propose-only)

### Task A — Additional physics-of-care specimen (another real-world clinical example, nuanced)
- Capture + decompose another real clinical exchange with nuances, in the **`user_operator_research`** lane. **Id = `EVSRC-2026-000252` (RESERVED for this specimen)** — it was deliberately held back when the wave-4 video scaffolds were created (highest EVSRC across the Evidence Plane is now `000256`; `252` is the one reserved gap, noted in `outside_learning/00_index.md` + `user_operator_research/00_index.md`). Use `252`; do NOT reallocate it.
- Method: same as 251 — §0 metadata + §1 manifest + §2 verbatim (de-identified) + §3 Review 001 (Knox) + Review 003 (Opus physics decomposition). PHI: de-identify before any promotion.
- Fold genuinely-new mechanics into **`EVRUN-2026-000004`** (append; do NOT bloat the source §3). **§0.5 is the naming/ontology baseline — dedup, don't re-mint.**

### Task B — ★ The in-line chat / three-party conversation mechanic (NEW — beyond M1–M6)
The operator flagged a distinct mechanic not yet fully described: **how the AI SEES a conversation play out and reacts** in the **side-by-side clinician ↔ patient ↔ OMNI/AI** exchange. Specifically model, ontologically + architecturally + relationally + as governance:
- how the agent observes a conversation/thread unfold in real time and participates;
- the states of its contributions: **listened-to · ignored · not-listened-to · used-properly · used-improperly / mis-applied**;
- how it acknowledges/handles each (e.g. a provider ignores a correct nudge; a provider mis-uses an AI suggestion; the AI's input is acted on without review).
- **Why it matters:** 251 (provider ↔ ChatGPT-as-3rd-party loop), `EVSRC-000200` (Kyle: friend-as-advisor), `FIELD-001` (Alec) all *point at* this but none fully describes the three-party conversation dynamics + its governance.
- **Candidate label: "M7 — AI-in-the-loop conversation dynamics" (PROVISIONAL — dedup first).** Before minting anything, reconcile against existing canon: candidate≠commit + `authorized_action` (§7/§8) · §B AI-substrate (AI proposes, never commits) · `provider_nudge_with_authority_preserved` (251 Review 003) · `assumption_invalidation` (the 18→46 error) · the M2 communication-event fabric (view/use/send/commit as distinct events — the "used-by / relied-on / ignored" states may already live here) · `replayable_proof`. The likely finding: this is a SHARPENING of M2 + §B + candidate≠commit, not a new plane — but that must be *established*, not assumed. Describe it as a mechanic to carry into thesis/build; route into EVRUN-000004 (new § or a new mechanic row) or, if it grows, `EVRUN-2026-000005`.

### Task C — Ingest the additional videos  ·  **★ SCAFFOLDS ALREADY MADE (2026-07-11)**
- **✅ 4 wave-4 video scaffolds already created:** `EVSRC-2026-000253 · 000254 · 000255 · 000256` in `sources/2026-07_wave-4/` (provisional `_TK` slugs, `raw_dropped`, registered in `outside_learning/00_index.md` — checkpoint 2026-07-11 + Sources range-row). *(Operator said "3 additional videos," then "make 4 new video files" — 4 slots stand ready; if only 3 fill, leave the 4th as an empty scaffold or void it, operator's call.)* The next agent does NOT re-create these — just **normalize each** as Nick pastes transcript + Knox-read + URL per video.
- **`outside_learning`** lane; settled registry-first two-tier read (`ingestion/outside_learning/00_pipeline_doctrine.md` + the wave-3 method: §3 Review 001 Knox → §1 verbatim → §3 Review 003 Opus → fold to registry; two-axis `doctrine_status × build_status` reality-check).
- If they form a coherent wave, open **`EVRUN-2026-000005`** (the scaffolds already name it as the likely run); if they're a continuation of wave-3's themes, the operator may prefer folding into the `EVRUN-2026-000003` registry — **ask the operator** which.

## 3. Key artifacts for the next agent
- **`EVRUN-2026-000004` §0.5** — the settled ontology/naming + disposition ledger (the baseline everything new dedups against). §1–§9.9 = derivation.
- Specimens: `EVSRC-2026-000251` (canonical TRT/async) · `EVSRC-2026-000200` (Kyle) · `FIELD-001` (Alec, in `evidence/omni_field_cases.md`).
- Process: `ingestion/00_evidence_router.md` (front door) · `outside_learning/00_pipeline_doctrine.md` · `user_operator_research/_lane.md` + `00_index.md`.
- Boot: `AGENTS.md` + read-graph Tier-0 (+ #9a input set, #11 route) + `operator_context_and_collaboration_model.md` + this handoff + the HOME controlling plan.

## 4. Stop posture (governance)
Propose-only (`GRD-036`); no promotion; no spine/thesis/C5. **Next allowed action = the three pre-spine physics-of-care tasks above** (A: specimen `EVSRC-252` reserved · B: the conversation-mechanic study · C: normalize the 4 wave-4 video scaffolds `EVSRC-253…256` — **already created 2026-07-11**, awaiting Nick's per-video paste). Spine Draft 0 resumes only after the operator says the physics-of-care work is sufficient.

## 5. Boot-repoint (this closeout)
AGENTS `## OMNI Operating References` Current Checkpoint Handoff + read-graph Tier-0 #15 + HOME controlling-plan CURRENT STATE banner all repointed to THIS handoff in the same closeout commit (Protocol §8 Checkpoint Closeout Rule). Prior handoffs (07-08 wave-3, 07-04 C3.8) remain valid as historical detail. Boot Freshness Check: the three must name this file; if they disagree, STOP.

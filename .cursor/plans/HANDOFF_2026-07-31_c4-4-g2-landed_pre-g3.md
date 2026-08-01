# HANDOFF — C4.4 G1/G2 LANDED on `main`; pre-G3 (2026-07-31)

Document type: `handoff` (operational-state transfer / landing record — NOT an architecture essay)
Authority: `analysis_nonbinding` (`GRD-036`). Records a clerical curated landing; binds nothing; promotes nothing.
Status: `c4_4_G1_G2_MERGED_to_main · agent_runtime_bridge_accepted_bounded · G3_reference_architecture_AUTHORED_pending_Nick_Knox_review · G4_not_started · analysis_nonbinding · not_promoted · outer_checkpoint_UNCHANGED` — G1/G2 MERGED to `main` @ `fa98a34` (Knox PASS + Nick, 2026-08-01). **★ 2026-08-01 UPDATE: C4.4 G3 §R reference architecture AUTHORED (Nick + Knox authorized G3) on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305`, pushed, NOT merged — pending Nick + Knox G3 review. See §0-G3 addendum for exact branch/commit/blob. Next gate = Nick + Knox review G3 (NOT a merge or G4 decision).**
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation
Lifecycle role: the live next-agent boot packet for C4.4 after the G2 curated landing. Supersedes `v4_C4_4_G2_kickoff_handoff.md` as the C4.4 boot artifact (the kickoff handoff is a consumed historical packet preserved ONLY on the C4.4 analysis branch — it is NOT on `main` and is NOT the live handoff).
Source-of-truth relationship: points to the charter / G1 map / G2 constitution + the Agent-Runtime capture. Does NOT supersede the outer checkpoint (#15).
Supersedes: `v4_C4_4_G2_kickoff_handoff.md` (as the C4.4 boot pointer only; that packet is not landed on `main`)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph `9j` route updated same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0-G3 — LIVE ADDENDUM: C4.4 G3 §R reference architecture AUTHORED (2026-08-01, pending Nick + Knox review)

> This addendum is the **live** top-of-state for C4.4. The §1–§4 landing record below is preserved as the **historical** G1/G2 landing record (it remains accurate for the pre-G3 transaction). Where they differ on current state, this addendum wins.

- **What happened:** Nick + Knox authorized C4.4 G3; a fresh Opus agent authored the reserved technology-neutral **§R reference architecture + plug-point model** (R.0 orientation + R.1–R.17 + §R.CORPUS D7/corpus verdict + §R.FIX F0/F-Self/F-Inv design traces + §20 G3 completion ledger) inside `v4_C4_4_taxonomy_constitution_and_reference_architecture.md`, on top of the accepted G2 constitution (§§1–19 **not reopened**).
- **Branch:** `analysis/c4-4-g3-reference-architecture` (off `origin/main a87d305`, pushed, **NOT merged to `main`**, no force-push).
- **Commit SHA:** `13c3ec5cd14ba0f418038ebcdee1d96da2e112c1` (the G3 authoring commit; this line stamped by the immediately-following state-normalization commit).
- **G2/G3 artifact blob SHA (`…taxonomy_constitution_and_reference_architecture.md`):** `9ecf042fbd0b11423b2b37ee423070ec0950bf2e`.
- **Status:** `analysis_nonbinding` · **pending Nick + Knox G3 review** (NOT self-accepted) · G4 NOT authorized/started (G4 owns the frozen adversary + rubric) · nothing promoted · outer checkpoint #15 + AGENTS UNCHANGED · G1 + the Agent-Runtime bridge (`de5b9a1`) UNCHANGED.
- **Load-bearing G3 verdict (§R.CORPUS):** reuse D7 per-artifact custody physics **subject-agnostically** for the artifact primitive; add a **Source-Estate-owned S1 corpus/package layer ABOVE D7 artifacts** (membership by reference, not copy); corpus completeness/closure + operational/federation admission live in S1; the corpus-parent schema/table shape is deferred to C5. P1 (corpus inside D7) and P2 (new corpus domain) rejected.
- **Files touched on this G3 branch:** the taxonomy/reference-architecture artifact (§R + passport + §0 + §20); the charter status; this handoff; catalog row; read-graph #9j; FWREG-007. Nothing else.
- **Exact next action:** **Nick + Knox review G3.** G4 does not auto-start.

## §1 What this transaction did (the curated landing)

A curated, eight-file artifact landing was applied onto `main` via a clean integration branch (`integration/c4-4-g2-curated-landing @ fa98a34`, one commit above `c40630b`), then **fast-forward-merged into `main` @ `fa98a343565e35c4c6aba2aff7f8504e56e028af`** (Knox PASS + Nick authorization, 2026-08-01). It did NOT merge the C4.4 or runtime analysis branches wholesale; it applied only the accepted artifact content + surgical control-plane deltas.

**Landed:**
1. C4.4 Gate-0 charter — `v4_C4_4_knowledge_and_source_estate_formulation_plan.md` (substance preserved; stale stage banner normalized to G1 closed / G2 closed / G3 not started).
2. C4.4 G1 reality map — `v4_C4_4_prior_depth_and_july_2026_reality_map.md` (substance preserved; repository/state language normalized to closed + repository-durable/landed).
3. C4.4 G2 taxonomy constitution + reference architecture — `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` (accepted G2 body preserved verbatim; **§R remains RESERVED / unpopulated**).
4. Agent Runtime & Harness capture — `v4_C4_agent_runtime_and_harness_capture.md` (**exact accepted blob `de5b9a1`**; the prior over-claiming version was replaced).
5. This handoff.
6–8. Control-plane sync — `01_master_corpus_catalog.md`, `04_manifest_read_graph.md`, `future_work_registry.md`.

## §2 Current state (live)

- **C4.4 G1 and G2 are CLOSED** within the nonbinding pre-spine arc, and now repository-durable on `main`.
- **G2 constitution ACCEPTED** within the `analysis_nonbinding` arc (Nick operator + Knox reviewer). Nothing promoted.
- **The Agent-Runtime bridge was accepted ONLY as the C4.4-G2 consumption slice** — the bounded set of runtime-consumption boundaries G2 needed. It is NOT acceptance of the whole Agent Runtime doctrine.
- **The wider Agent Runtime / Harness formulation is OPEN.** `FWREG-010` is OPEN (bounded G2-consumption bridge accepted; full runtime formulation open; runtime BUILD deferred; promotion trigger unchanged).
- **Build OS is separate and UNCHANGED** by this transaction (`09`/`10`/`11` untouched).
- **G3 is AUTHORED, pending Nick + Knox review** (see §0-G3 addendum — supersedes the historical "G3 NOT started" language below). §R is populated on branch `analysis/c4-4-g3-reference-architecture` (not merged). **G4 is NOT started.**
- **No checkpoint repoint.** Outer checkpoint #15 + AGENTS UNCHANGED; no controlling-banner change. This is a parallel operator-activated pre-spine input, not a gate move.

## §3 Exact next action

**DONE: the eight-file curated landing is Knox-verified (PASS) and MERGED to `main` via fast-forward @ `fa98a343565e35c4c6aba2aff7f8504e56e028af` (Nick authorization, 2026-08-01), followed by this bounded two-file post-merge state-normalization commit. No further merge decision is pending.**

**★ SUPERSEDED 2026-08-01 (see §0-G3 addendum):** Nick + Knox DID authorize G3, and §R is now AUTHORED on `analysis/c4-4-g3-reference-architecture` (not merged). The ONLY authorized next architecture action is now: **Nick + Knox review C4.4 G3** (the authored §R). Historical pre-G3 text follows:

The ONLY authorized next architecture action is: **Nick + Knox explicitly authorize C4.4 G3.**

- **G3 scope** = populate the reserved technology-neutral **§R reference architecture + plug-point model** over the six G2 constitutional classes/roles (charter §8 G3 row; G2 §R outline R.1–R.17). Technology-neutral; no vendor picks; no schema; no build.
- **NOT next:** the Reservoir-family roster / partition deep dive (that is a spine §8 / later concern, not G3), any Build-OS work, any promotion, any C5 contract/schema/code.
- **After G3 review:** if Nick + Knox accept, G4 (frozen adversary + rubric scoring of F0/F-Self/F-Inv) becomes the next authorizable action; G4 is NOT authorized yet.

## §4 Hard stops carried

No AGENTS edit · no checkpoint #15 change · no controlling-banner change · no G3 authoring · no schema/code/services/folders/vendor picks · no Build-OS/Platform/Care/Pharmacy/Task-D/Time/Demand changes · no cross-facet worksheet changes · no promotion. `analysis_nonbinding` throughout.

# HANDOFF — 2026-07-02 — C3.8 (Enterprise-AI-OS Convergence Pass) charter ACCEPTED — pre-G1a

Document type: `checkpoint_handoff` (continuity artifact; non-binding — binding decisions in `doctrine/03_decision_extraction_ledger.md`, open items in `08_open_review_queue.md`, schemas in contracts/maps). Per Agent Work Protocol §8 (Tier 2 — a new gated pre-spine lane [C3.8] is inserted; boot NEXT changes).
Created: 2026-07-02. **This is the CURRENT checkpoint.** Supersedes `HANDOFF_2026-06-15_c4_runway_accepted_readiness_passed_pre_spine.md` as the boot point (06-15 stays valid for the C4-runway-accepted + readiness-passed detail; earlier handoffs remain historical).

> ## ★★ CONTROLLING PLAN + CURRENT STATE (2026-07-02 — DO NOT SKIP) ★★
> **Controlling plan = `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`** (HOME dir, NOT the workspace tree). Phase sequence now: … C3.5/C3.6/C3.7 → C4 runway (accepted) → readiness gate (passed) → **C3.8 Enterprise-AI-OS Convergence Pass (NEW, inserted pre-spine)** → v4 spine → C5.
> - **Gate state (2026-07-02):** C2 CLOSED · C3 PASSED · C3.1 PASSED · C4.0 ACCEPTED · C3.5/C3.6/C3.7 COMPLETE · REV-184 CLOSED · **C4 runway ACCEPTED · C4 Author Readiness Note PASSED** · **C3.8 charter ✅ ACCEPTED 2026-07-02 (Nick + Knox)**.
> - **Why C3.8 exists:** after a 2-week gap, Nick surfaced a real missing altitude — the enterprise-AI **operating-system** world (Palantir / Anthropic / OpenAI / Microsoft / Google / IBM + recent canonical papers) matured fast. C3.8 is a **bounded, gated pre-spine pressure/convergence pass** asking: *can OMNI survive AND explain itself as a serious governed execution substrate in the same room as the big boys* (data / ontology / memory / authority / agents / security / evaluation / platform ownership)? Pressure sources, not gods; not "become Palantir." Control = **route every finding** (6 disposition categories), NOT a magnitude cap. Charter: `v4_C3_8_enterprise_ai_os_convergence_pass_plan.md`.
> - **G1a ✅ APPROVED (Nick + Knox 2026-07-02, with 2 Knox patches: core #15 enterprise data-platform [Databricks/Snowflake]; #9/#10 BYOM/customer-managed-model explicit; +R4 Temporal reserve).** Approved shortlist = `v4_C3_8_G1a_source_shortlist_and_axis_coverage.md`. **NEXT (the only authorized next step): C3.8 / G1b — source ingestion by a SEPARATE execution agent, dispatched on Nick's explicit go** → then G2 (convergence matrix + Enterprise Translation Map) → G3 (doctrine breakers) → G4 (disposition ledger; route every finding). **The grounded / spine-author agent does NOT run G1b — it resumes from the G4 handoff. NO C4 edits, NO thesis/spine prose.**
> - **After G1a approval:** a **separate execution agent** runs G1b (ingest approved sources) → G2 (convergence matrix + enterprise translation map) → G3 (40–80 doctrine breakers vs pre-registered invariants) → G4 (disposition ledger; route every finding) → fold into C4 → then the grounded agent resumes as **v4 spine author**.

---

## 0. Boot in 60 seconds
OMNI = one governed care + business **execution** substrate atop preserved v2/v3 domain physics; planes authored; **no production code yet.** The pre-spine runway was cleared (C4 runway accepted + readiness gate passed, 06-15). Then a deliberate, gated insertion: **C3.8**, one enterprise-AI-OS convergence pass before the spine freezes. Charter accepted 07-02; the immediate task is **G1a only** (shortlist + plan), which stops for approval before any ingestion. Nothing else is authorized.

## 1. Operator + collaboration model
`doctrine/operator_context_and_collaboration_model.md`. Nick = operator/owner (full fidelity, pushback). Knox = ChatGPT review instance (no repo access — surface substance for relay). Trifecta default.

## 2. What just happened (delta vs 06-15)
- Nick returned after ~2 weeks and flagged the enterprise-AI-OS altitude gap. Nick + Knox + Opus converged on inserting **C3.8** as a bounded, gated pass — explicitly **not** "the final 5%" and **not** a magnitude-capped check; the control is **routing every finding** through 6 disposition categories.
- **C3.8 charter authored + accepted (Nick + Knox, 07-02):** `v4_C3_8_enterprise_ai_os_convergence_pass_plan.md`. Six pressure axes (ontology/semantic · **data/memory/model ownership at tenant scale = highest-risk** · policy/action governance · agent-runtime/P35/tools · eval/sim/deployment · security/zero-trust); §0.5 strategic posture (interface/compete/partner-not-middleware/acquisition-legible) + capital-allocator legibility lens; §2 common-sense ownership questions (plain-language-first); pre-registered OMNI invariants; universal-vs-procurement filter; Enterprise Translation/Equivalence Map; already-covered map; G1a/G1b split; completion = route-every-finding.
- **Execution split (decided):** grounded agent (this session) does **G1a** (best at seeding what's already in OMNI); a **separate agent** runs **G1b–G4** after shortlist approval (avoids enterprise-material hijacking the spine — same anti-hijack discipline as C3.5/6/7 + the readiness gate).

## 3. NEXT — C3.8 / G1b (ingestion by a SEPARATE execution agent), on Nick's go
**G1a is done + APPROVED** (`v4_C3_8_G1a_source_shortlist_and_axis_coverage.md`: 15 core sources + 4 reserve; already-covered map; axis-coverage plan). **NEXT = G1b, run MANUALLY by Nick in a fresh Opus session** (Nick-driven, gate-by-gate with a STOP + review after EACH of G1b/G2/G3/G4 — NOT auto-dispatched; an earlier background dispatch was aborted by Nick in favor of manual control). Its leash = `v4_C3_8_G1b_KICKOFF_PROMPT.md`. The manual agent ingests the approved shortlist (current primary/high-quality public sources) into the Evidence Plane (`GRD-036`), heaviest on **axis 2 (data/memory/model ownership — incl. the explicit BYOM/customer-managed-model hunt)** and **axis 6 (classic/zero-trust security — closes `REV-181`)**; agent-runtime concepts are validate-and-name (already deep). Then G2 (convergence matrix + Enterprise Translation Map) → G3 (40–80 doctrine breakers vs the pre-registered invariants) → G4 (disposition ledger — route every finding, 6 categories). **Dispatched on Nick's explicit go; the grounded/spine-author agent does NOT run it. NO C4 edits, NO spine/thesis prose.**

## 4. Required inputs (unchanged from 06-15; C3.8 adds the charter)
Source base = `v4_C2_source_base_declaration.md` (living, `GRD-036`). Method/frame = C3/C3.1/C4.0 + C4 runway (5 docs) + `ORIENTATION-2026-06-10` §2 + v3 spine §0. Pressure inputs = C3.5 `G4`§11 (+G4.1) · C3.6 `G`§8.5 · C3.7 `G`§7 · REV-184 §0. **New:** `v4_C3_8_enterprise_ai_os_convergence_pass_plan.md` (accepted charter). `08` REV-179…190.

## 5. REV-184 clarity (unchanged)
REV-184 CLOSED/signed off 2026-06-14; read §0 only; the round sections + the `08` row's trailing narrative are preserved derivation, not live status.

## 6. OWED / tracked (this closeout)
- Catalog row + read-graph route for the C3.8 charter + this handoff — done in this closeout pass.
- G1a artifact's own catalog/read-graph rows + the boot NEXT→G1b transition — owed at G1a-shortlist approval.
- C3.5/6/7 pressure-test spokes + C3.8 G-artifacts owe catalog/read-graph at their promotion.

## 7. Pointers
- C3.8: `v4_C3_8_enterprise_ai_os_convergence_pass_plan.md` (charter) → `v4_C3_8_G1a_source_shortlist_and_axis_coverage.md` (G1a, when produced).
- C4 runway + readiness: `v4_C4_spine_authoring_plan` · `…spine_shape_plan` · `…thesis_synthesis_plan` · `…thesis_shape_plan` · `…fresh_agent_readiness_prompt` · `v4_C4_author_readiness_note` (PASSED).
- Source base `v4_C2_source_base_declaration.md`; frame `ORIENTATION-2026-06-10` §2 + `omni_thesis_v3_integrated_spine` §0; REV-184 §0. Arcs: `v4_C3_5G4` (+`G4.1`) · `v4_C3_6G` · `v4_C3_7G`.
- Doctrine: `agent_work_protocol` (§1/§8) · `01_master_corpus_catalog` · `04_manifest_read_graph` #9/#10/#15 · `08_open_review_queue`. Controlling plan (HOME).

## 8. Stop condition for this handoff
Superseded when G1a is approved (source shortlist accepted) and the boot path repoints to a G1b-ingestion state — OR, if C3.8 is ever deferred, when the boot path repoints back to spine-draft-0. Until then this is the boot point and the only authorized forward work is **producing G1a** (no ingestion, no C4 edits, no spine prose).

## 9. Standing flags
- **git identity unset** — closeout edits are staged in the working tree; **no commit attempted.** The closeout commit (this handoff + the charter + catalog/read-graph edits + the boot repoint + `v4_C4_author_readiness_note.md` if still uncommitted from 06-15) is owed to Nick once identity is set.

End of handoff.

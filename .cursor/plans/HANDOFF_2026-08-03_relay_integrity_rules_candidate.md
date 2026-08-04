# HANDOFF — 2026-08-03 · Collaboration Relay-Integrity Rules (CANDIDATE)

Document type: `handoff_or_readiness_gate`
Authority: `derived_nonbinding`
Status: `candidate_pushed_pending_nick_knox_byte_review · not_landed · no_checkpoint_repoint`
Domain(s): `architecture_governance, operator_governance, agent_execution`
Lifecycle role: `bounded continuity and review handoff for the relay-integrity canonization candidate`
Source-of-truth relationship: `nonbinding continuity pointer to the canonical rules in operator_context_and_collaboration_model.md §§2.6–2.7; not doctrine and not the current checkpoint`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed`
Review gate: `user_knox_required`

> Continuity note (retained): `GRD-036` non-binding; Tier-4 canonization preservation satisfied proportionally per Agent Work Protocol §8 (bounded handoff + short Volume 8 + `D0OPER-DEC-005/006` + `D0OPER-GRD-002/003`).

> **This is NOT a checkpoint.** It does **not** repoint `AGENTS.md` / read-graph Tier-0 #15 / the controlling-plan banner. The current program checkpoint remains `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`. This handoff preserves continuity for one bounded, off-to-the-side collaboration-governance transaction that runs in parallel to (and does not change) the v4 gate state.

---

## §0 — What this transaction is

A bounded **Tier-4 collaboration-governance canonization**: it adds two relay-integrity rules to the canonical operator/collaboration model and echoes them pointer-only into the environment profiles. It changes **no** architecture, schema, code, product surface, domain, plane, or gate. It creates **no** Agent Runtime identity ontology and **no** universal boot file.

Two rules were authored:

1. **§2.6 Reviewable Repository Snapshots** — before a repository-connected remote collaborator (e.g. a GitHub-connected Knox/Gemini) is asked for full-document / byte / acceptance / freeze / landing review of a repo-backed document, the producing agent publishes a committed+pushed **named-branch snapshot** and relays its exact identity (Review Object Posture + Bounded Diff Receipt), unless Nick asks for local-packet review. The §2.5 working-packet law is preserved (local/uncommitted material stays a valid review object). Graduated ceremony; commit/push ≠ promotion; primary blob mandatory; text diff receipt durable; screenshots supplemental.

2. **§2.7 Relay Endpoint Integrity + Human-Facing Thread Labels** — separates the **work-first, seat-free visible thread title** (`<Friendly Arc> · <Specific Work>`) from the **formal in-conversation lock** (`THREAD LOCK` / `RELAY LOCK` carrying a semantic relay key + seat). A `RELAY LOCK MISMATCH` stops rather than absorbs. Nick's mediation stays flexible. Explicitly not an Agent Runtime registry.

## §1 — Why (the defect it closes)

- ~4 months of relayed document review where "verify the file" never disambiguated **which bytes** were under review (newest local / stale upload / pushed object), forcing repeated large copy-pastes and risking silent substitution of `main`/older bytes.
- At 5–10 concurrent ChatGPT/Cursor/Gemini workstreams with truncated sidebars, relays risk being pasted into the wrong thread, and there was no consistent human-visible naming to match relay targets.

The operator directive **overrode** Knox's first seat-forward title format (`KEY | SEAT | PURPOSE`): the seat is redundant on a single-platform sidebar and belongs in the formal lock, not the visible title. The human-title / formal-lock split is the load-bearing design decision.

## §2 — Exact scope (8 files) + branch

- **Base:** `main` @ `add46e282bb1eb9597e455c458c4e8fef4f7ba82`
- **Branch:** `governance/relay-integrity-rules` (pushed; NOT merged)

| # | File | Change |
|---|---|---|
| 1 | `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` | NEW §2.6 + §2.7; §6 enforcement-map rows; 2026-08-03 freshening note |
| 2 | `.cursor/rules/00_omni_opus_boot.mdc` | §5 pointer clause + §12 producer-receipt clause (pointer-only) |
| 3 | `GEMINI.md` | §5 pointer clause + §12 reviewer-side clause (pointer-only) |
| 4 | `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | `D0OPER-GRD-002` + `D0OPER-GRD-003` (collision-checked) |
| 5 | `.cursor/plans/doctrine/03_decision_extraction_ledger.md` | `D0OPER-DEC-005` + `D0OPER-DEC-006` (collision-checked) |
| 6 | `.cursor/plans/HANDOFF_2026-08-03_relay_integrity_rules_candidate.md` | NEW (this file) |
| 7 | `docs/architecture/evolution_narrative_volume_8_2026-08-03.md` | NEW (short bounded Tier-3 narrative) |
| 8 | `.cursor/plans/doctrine/01_master_corpus_catalog.md` | register #6 + #7 |

**Untouched (verify at review):** `AGENTS.md` · Agent Work Protocol · `04_manifest_read_graph.md` · current checkpoint · controlling plan · Future Work Registry · `.agents/rules/00_omni_gemini_boot.md` (thin hook) · Agent Runtime capture · all C4.4 artifacts · all code/schema/service/implementation.

## §3 — Settled decisions

- Canonical home = collaboration model §2.6/§2.7 (the existing §2.5 relay-integrity section is the right owner; verified — not chosen by taste).
- Echoes are **pointer-only** (anti-drift); the normative rule + receipt/lock schemas live once in §2.6/§2.7.
- Visible title work-first + seat-free; formal lock carries key + seat.
- `D0OPER-DEC-005` (snapshot rule) + `D0OPER-DEC-006` (endpoint/label convention); guardrails `D0OPER-GRD-002/003`.
- **No** Agent Work Protocol amendment this pass (later arcs decide if it generalizes beyond the trifecta relay). **No** Agent Runtime ontology. **No** universal boot file. No checkpoint or read-graph route change. Catalog impact is limited to registering the candidate handoff and Volume 8. No program-gate impact.

## §4 — Unresolved / deferred

- Whether §2.6/§2.7 should later be promoted into the Agent Work Protocol body — deferred until several arcs prove it applies beyond trifecta review.
- The external **Knox Project-source** mirror clause (review-snapshot + relay-endpoint pointers) is prepared for Nick to paste into `KNOX_II_FULL_OPERATING_INSTRUCTIONS_v3_UPDATED.md` **after** this branch lands; that file is **not** in `ncrawf/main-app` and is not created in-repo.

## §5 — New-artifact completion (Agent Work Protocol §5)

- This handoff + Volume 8 carry passports (type/authority/status) and catalog rows (file #8).
- **Read-graph disposition: `no_new_route_needed`.** Reason: the binding rule enters through Tier-0 collaboration-model route #16 (already mandatory at boot); the profiles load through existing environment routes; this handoff + Volume 8 are bounded historical continuity, not new boot nodes. No `04_manifest_read_graph.md` edit.

## §6 — Next gate / stop condition

- **STOP for Nick + Knox byte review** of the pushed branch (open the exact blobs from GitHub via the Review Object Posture + Bounded Diff Receipt in the Opus return).
- On acceptance: Opus fast-forwards `main` (no force, no merge commit); then Nick replaces the external Knox Project source with the mirrored clause.
- **No** substantive next arc starts from this transaction; sequencing remains operator-controlled per the current checkpoint.

## §7 — Source-of-truth load order (for a fresh agent picking this up)

`AGENTS.md` → current checkpoint (`HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`) → collaboration model §2.5→§2.7 (canonical rule) → `D0OPER-DEC-005/006` + `D0OPER-GRD-002/003` → this handoff (transaction continuity) → Volume 8 (rationale).

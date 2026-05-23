# Tier-0 Governance Document Quality Audit

Document type: `handoff_or_readiness_gate`
Authority: derived_nonbinding diagnostic audit
Status: active
Domain(s): architecture_governance
Lifecycle role: read-only diagnostic of Tier-0 governance documents; recommends per-file actions
Source-of-truth relationship: companion to the Coordination Charter / Agent Work Protocol stack; does not modify or supersede any audited document; recommendations require separate per-file approval before any patch
Supersedes: none
Superseded by: none
Manifest action: add_tier2
Review gate: user_knox_required

---

## Purpose

The framework is structurally installed (3 dogfood passes complete, Tier-0 Gravity Sweep clean). This audit answers a different question: **are the Tier-0 documents themselves elegant, balanced, and 1BN-grade-readable enough to carry the meta-OS forward without confusing future agents?**

This is read-only. No audited document is modified by this artifact. Each recommendation requires a separate execution gate.

---

## Audit Dimensions

For each Tier-0 doc:

1. **Role clarity** — does the doc clearly say what it owns and does not own?
2. **Current-state readability** — can a new agent find current truth without wading through historical addenda?
3. **Boot usability** — does it tell the agent what to do next?
4. **Balance** — is one past concern over-dominating the doc?
5. **Conflict/supersession clarity** — does it point to current authority when older sections conflict?
6. **1BN-grade compression** — is it crisp enough that serious engineers/agents would obey it?

---

## File 1: `AGENTS.md` (65 lines)

### Intended role
Concise boot pointer + enforcement reminder. The first thing every agent reads.

### Current strengths
- Points to: Architecture Memory Control Plane, Document Governance, Coordination Charter, Agent Work Protocol.
- Lists allowed document categories and required passport fields.
- Anti-shrouding correctly reduced to a one-liner pointer (no over-emphasis here).
- Build OS references included (layer model + rollout sequence).
- Capability/auth + scripts content is implementation-relevant and useful.

### Risks
- Reads as 4 stacked "Mandatory" sections back-to-back (Memory Control Plane, Document Governance, Coordination Charter+Protocol).
- No unifying decision tree from "agent arrives" → "what governs me" → "what proof must I return".
- Document categories appear twice (Document Governance section + passport context); light redundancy.
- No explicit "What kind of work am I doing?" router (governance vs implementation vs runtime/code).
- Stop-proof requirement is implied via Protocol §9 reference but not surfaced as a top-level callout.

### Over/under-emphasis
- Balanced overall. Next.js banner at top is implementation-relevant; **preserve**.
- Auth + scripts content is implementation-relevant; **preserve**.

### Missing current-state clarity
- No compact "Agent Arrival Decision Tree" so a fresh agent knows in 30 seconds which mandatory artifacts apply to their work.

### Recommended action: `surgical_patch` (P1 — highest leverage)
Add to top-of-file (above existing sections):
1. **Agent Arrival Decision Tree** (6-10 lines):
   - Architecture/doctrine/governance work → Coordination Charter + Agent Work Protocol + Control Plane.
   - Implementation lane work → Build Entry Gate + Protocol §6.
   - Runtime/code only → existing Next.js/auth/scripts conventions + Protocol §7 scope constraints.
   - Any new in-scope architecture/process doc → Protocol §5 New Artifact Completion Rule + Control Plane intake protocol.
2. **Stop Proof Required** callout (3-5 lines): every governance/architecture/build work package must produce a Protocol §9 stop report; failure to do so is non-compliant.
3. **Remove minor redundancy**: doc categories list appears in Document Governance section + passport context; consider one canonical list with a pointer.

Preserve all existing content (Next.js banner, auth, scripts, all 4 governance sections). The arrival tree sits **above** them as a router, not as a replacement.

---

## File 2: `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` (250 lines)

### Intended role
Canonical authority/schema spine + boot-rule source. The control plane that defines how every source file and durable decision is classified, routed, supersession-tracked, and read.

### Current strengths
- Explicit purpose statement.
- Mandatory Boot Sequence section.
- Coordination Charter Pointer (Non-Superseding) recently added.
- Enforcement Rules (6 rules).
- New-Document Intake Protocol (passport + catalog registration mandatory in same change set).
- Scope Discovery Rule.
- Control Plane Artifacts list (canonical ledger files).
- Schema Lock v0 with 7 enums (category, authority, status, manifest_action, review_gate, agent_read_rule, lifecycle_role).
- Boot-Path Synchronization Requirement.
- Drift Audit Requirement.

### Risks
- **Anti-shrouding occupies 3 dedicated sections** (Rule, Validation Gate, Stage-Entry Gate) + 2 policy sections (Prospective+Retrospective Application Policy + Retro Re-Scan Trigger Policy) ≈ ~70 lines of the 250-line doc.
- Reads as anti-shrouding-dominant when it should read as broad memory governance.
- **Lifecycle closure is missing from the control plane entirely** — currently it lives only in Charter Lifecycle Freshness Contract and Protocol §8. The authority spine should anchor it.
- No "what this layer owns vs does not own" section to mirror Charter Layer Model framing.
- Anti-shrouding sections don't explicitly mark themselves as "one guardrail family"; could be misread as the spine's primary job.

### Over/under-emphasis
- **Over**: anti-shrouding (5 sections including policy).
- **Under**: lifecycle closure (zero sections; entire concept absent here).
- **Under**: compact "owns / does not own" framing.

### Missing current-state clarity
- A new agent reading this doc would conclude "the control plane is mostly about anti-shrouding extraction discipline." That is wrong — anti-shrouding is one guardrail family within broader memory governance.

### Recommended action: `needs_restructure_patch_spec` (P1 — anti-shrouding rebalance + lifecycle gap)

Produce a patch-spec (no execution) proposing the following restructured outline:

1. Purpose + Boundaries — what this layer owns / does not own (mirror Charter Layer Model framing)
2. Mandatory Boot Sequence (existing)
3. Coordination Charter Pointer (Non-Superseding) (existing)
4. Enforcement Rules (existing)
5. New-Document Intake Protocol (existing)
6. Classification + Routing (NEW or expand) — catalog + authority routing schema overview
7. Decision/Evidence Preservation (NEW or expand) — ledger contracts
8. Supersession/Conflict + Open Review (NEW or expand)
9. **Lifecycle Closure (NEW — currently missing)** — touched-artifact disposition, anti-staleness, promotion/closure paths
10. Anti-Shrouding Guardrail Family (CONSOLIDATED) — preserve all current anti-shrouding content but contained in one consolidated section, explicitly framed as one guardrail family among many
11. Scope Discovery Rule (existing)
12. Control Plane Artifacts list (existing)
13. Schema Lock v0 (existing)
14. Boot-Path Synchronization Requirement (existing)
15. Drift Audit Requirement (existing)

No anti-shrouding content is deleted. It is consolidated and explicitly framed as "one guardrail family." Lifecycle closure becomes a first-class section.

---

## File 3: `.cursor/plans/doctrine/04_manifest_read_graph.md` (726 lines)

### Intended role
Routing engine — when/why agents must load which artifacts. Boot-sequence routing index for domain/workstream read requirements.

### Current strengths
- Boot Rule Link section.
- Current-State Truth Pointer (Binding) at lines 27-40.
- Tier Model (Tier 0 / 0.5 / 1 / 2).
- Domain Routing Table (Provisional v1) covering 7 workstreams.
- Charter + Protocol + Future Work Retrieval (Build-Entry Routing) block (recently added).
- D0-REV-004 Ratification Matrix.

### Risks
- ~600+ lines of historical wave debris: Wave 1, 2A, 3A, 3B, 3C, 3D, 3E, 4, 4A, 4B, 4C, 4C-beta/gamma/delta/epsilon/zeta/eta/theta + Wave 4C Consolidation Stages 1-5 + Post-Consolidation Audit + D6 Pre-Ratification Addendum.
- Useful provenance, but they crush current-state usability.
- A fresh agent at boot must somehow learn to ignore historical sections and focus on Domain Routing Table + Charter+Protocol+Future Work block + D0-REV-004 matrix.
- Status field says `Skeleton (Phase 0)` but the file is far past skeleton.

### Over/under-emphasis
- **Over**: wave extraction history (~80% of file).
- **Under**: current-state route discoverability (active routes are buried).

### Missing current-state clarity
- The Current-State Truth Pointer (lines 27-40) helps but does not shorten the file or make it scannable.
- A new agent cannot quickly find the active routes without explicit scroll-past instructions.

### Recommended action: `needs_restructure_patch_spec` (P2 — historical debris extraction)

Produce a patch-spec proposing:

1. **Keep current-state content** at the top of `04_manifest_read_graph.md`:
   - Passport
   - Boot Rule Link
   - Current-State Truth Pointer (Binding)
   - Tier Model
   - Domain Routing Table (Provisional v1)
   - Synchronization Check
   - Charter + Protocol + Future Work Retrieval (Build-Entry Routing)
   - D0-REV-004 Ratification Matrix (Wave 3 Gate)
   - Stage-Entry Checklist (Always-On)
   - Retro Trigger Checklist (Always-On)
   - Stage-Entry Record Template (Required)

2. **Extract historical wave content** into a sibling artifact:
   - Proposed path: `.cursor/plans/doctrine/04_manifest_read_graph_wave_history_2026-05-22.md`
   - Catalog as `historical_nonbinding` / consult-only.
   - Includes: all D0 Wave 1, 2A, 3A-E, 4, 4A-C, 4C-beta..theta, Consolidation Stages 1-5, Post-Consolidation Open Queue Audit, D6 Pre-Ratification Addendum.

3. **Update status** in read graph: `Skeleton (Phase 0)` → `active`.

4. **Cross-link** read graph to wave history file via a one-line "Historical wave appendix" pointer.

No content is lost. The current routing engine becomes scannable. Wave history remains intact and consult-only.

---

## File 4: `.cursor/plans/doctrine/00_omni_coordination_charter.md` (156 lines)

### Intended role
Top coordination doctrine. Layer boundaries, precedence, interface contracts.

### Current strengths
- Subtitle ("meta-layer that coordinates ...").
- Layer Model (5 layers; Build OS entry now carries GCI pointer).
- Precedence Contract.
- Catalog and Read-Graph Clarity Rule.
- Interface Contracts (5 layer pairs).
- Lifecycle Freshness Contract.
- Protocol Freshness Triggers.
- Non-Loss Rule.
- Relationship to Existing `00_architecture_memory_control_plane.md`.

### Risks
- "Next Gate" section at bottom is stale; refers to pre-dogfood state.
- Status is `draft_for_review` despite 3 dogfood passes and Tier-0 Gravity Sweep passing.

### Over/under-emphasis
- Balanced.

### Missing current-state clarity
- Stale Next Gate could confuse a future agent into thinking the protocol is still being drafted.

### Recommended action: `surgical_patch` (P3 — status refresh)
1. Refresh Status: `draft_for_review` → `active`.
2. Replace "Next Gate" content with current debt:
   - 5 remaining open-review IDs (`AWP-REV-BUILDOS-OVERVIEW-001`, `AWP-REV-CMDS-001`, `AWP-REV-TESTINV-001`, `AWP-REV-GLOSSARY-001`, `AWP-REV-RUNBOOK-001`)
   - 1 mapped_partial (`AWP-REV-CAT-RG-001`)
   - Coverage audit reference.

No other changes.

---

## File 5: `.cursor/plans/doctrine/agent_work_protocol.md` (~290 lines)

### Intended role
Mandatory agent runtime SOP inside Build OS.

### Current strengths
- 11 numbered sections forming the loop.
- Authority Boundary section (clarifies non-schema authority).
- Classification Decision Contract.
- Routing Decision Rules (ADR vs Doctrine, Narrative vs Binding, etc.).
- Narrative Handling Rule.
- Handoff Minimum Contract.
- Template/Schema Sources (canonical pointers).
- Future Work Registry Contract (item types + row fields + no-empty rule).
- Composition Discipline (Governed Temporary Coherence) Pointer.
- Future Work Lifecycle Rule.
- Open Review Gap Routing Rule.
- New Artifact Completion Rule (§5) + Stop-block enforcement (§9).
- Coverage and Gap Tracking Requirement (§11).

### Risks
- Status is `draft_for_review` despite passing 3 dogfood runs.
- §3 classification list and §5 routing classes have light overlap; could de-duplicate for crispness.

### Over/under-emphasis
- Balanced.

### Missing current-state clarity
- Minor: status field should reflect active operational state.

### Recommended action: `surgical_patch` (P3 — status refresh)
1. Refresh Status: `draft_for_review` → `active`.
2. Light §3/§5 de-duplication: keep §3 as classification list, keep §5 as routing destinations; remove minor wording overlap.

No structural change. No new mechanics.

---

## File 6: `.cursor/plans/doctrine/11_build_entry_gate_v0.md` (1022 lines)

### Intended role
D1 readiness gate for narrow-slice planning. Lane-admission gate.

### Current strengths
- Clear scope (D1 readiness only, narrow-slice planning).
- Governing read path.
- Foundational Composition Admission Checklist (Binding).
- Agent Work Protocol Admission (Binding) (recently added).
- Stop / Reroute Conditions.
- Slice-Specific Domain Contract (Pre-Build).
- Invariant Test Matrix (Pre-Build).
- Minimum Output Bundle for Step 3 admission.

### Risks
- 1022 lines is heavy. Lines ~552-1022 are WP-EXEC-001 / WP-EXEC-002 execution detail, status updates, checkpoint reports, scheduling authority surface decisions, file/interface plans.
- Gate verdict + admission criteria are clear at the top, but the full doc is hard to navigate end-to-end.
- Mixes gate doctrine with execution journal.

### Over/under-emphasis
- Gate content is balanced. WP-EXEC journal could live separately.

### Missing current-state clarity
- A fresh agent reading this doc needs to scroll past several hundred lines of WP-EXEC-specific status to find the next gate decision.

### Recommended action: `needs_restructure_patch_spec` OR `defer` (P4 — lower priority)

Propose a patch-spec extracting WP-EXEC-001 / WP-EXEC-002 execution journal sections into a separate execution log artifact (e.g. `wp_exec_001_002_execution_journal_2026-05-22.md`), leaving the gate doc focused on admission rules.

This is **lower priority** than (1), (2), (3). Build Entry Gate's binding text at the top works correctly as-is. Restructure can wait until the WP-EXEC work is fully closed and journal can be cleanly demoted.

---

## Summary Matrix

| # | file | recommended_action | priority | reason |
|---|---|---|---|---|
| 1 | `AGENTS.md` | surgical_patch | P1 | highest leverage; add arrival decision tree + stop-proof callout; preserve existing content |
| 2 | `00_architecture_memory_control_plane.md` | needs_restructure_patch_spec | P1 | anti-shrouding rebalance + lifecycle closure gap |
| 3 | `04_manifest_read_graph.md` | needs_restructure_patch_spec | P2 | extract wave history into sibling appendix; preserve current routing |
| 4 | `00_omni_coordination_charter.md` | surgical_patch | P3 | status + Next Gate refresh |
| 5 | `agent_work_protocol.md` | surgical_patch | P3 | status refresh; light §3/§5 de-duplication |
| 6 | `11_build_entry_gate_v0.md` | needs_restructure_patch_spec OR defer | P4 | extract WP-EXEC execution journal; can wait |

---

## What This Audit Does NOT Do

- Does NOT modify any audited document.
- Does NOT modify the Coordination Charter, Agent Work Protocol, Tag Taxonomy, Future Work Registry, or any matrix.
- Does NOT introduce new doctrine.
- Does NOT touch runtime/code/schema/migration files.

Each recommended action requires a separate approval gate.

---

## Recommended Next Sequence

1. Review this audit.
2. Authorize P1 surgical patch for `AGENTS.md` (Arrival Decision Tree + Stop Proof callout).
3. Authorize P1 patch-spec for `00_architecture_memory_control_plane.md` restructure (anti-shrouding consolidation + Lifecycle Closure section).
4. Authorize P2 patch-spec for `04_manifest_read_graph.md` (wave-history extraction).
5. Authorize P3 surgical patches for Charter + Protocol (status refresh).
6. Defer P4 (Build Entry Gate restructure) until WP-EXEC work closes.

Each authorization runs as its own Agent Work Protocol pass with New Artifact Completion Rule enforcement.

---

## Audit Artifact Stop Report (Per Protocol §9)

This audit artifact is itself a `new_artifacts_created` event. Completion proof applied in the same pass:

- **passport**: present (top of this document).
- **artifact class**: `handoff_or_readiness_gate`.
- **authority level**: `derived_nonbinding`.
- **lifecycle role**: read-only diagnostic; recommendations require separate approval.
- **catalog row**: added in `01_master_corpus_catalog.md` in this same pass.
- **read-graph impact**: `no-route-needed` (consult-only diagnostic artifact; existing wildcard handling for `handoff_or_readiness_gate` consult artifacts is sufficient).
- **open-review created if uncertain**: not required (no uncertainty; this is the audit itself).

`new_artifact_provisional_items`: none.

`schema_deviation`: none.

`runtime/code touch confirmation`: none.

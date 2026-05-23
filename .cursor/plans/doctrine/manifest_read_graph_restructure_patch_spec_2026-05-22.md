# Manifest Read Graph Restructure Patch Spec

Document type: `handoff_or_readiness_gate`
Authority: restructure + route-reconciliation patch-spec only (no edits executed in this artifact)
Status: archived
Domain(s): architecture_governance, read_routing
Lifecycle role: review-first restructure + reconciliation proposal for `04_manifest_read_graph.md`
Source-of-truth relationship: proposes a current-state vs wave-history split AND explicit route corrections sourced from `read_graph_route_reconciliation_audit_2026-05-22.md`; does not modify the audited document; recommendations require explicit approval before any execution
Supersedes: prior v3 of this same file (pure structural split scope)
Superseded by: none
Manifest action: add_tier2
Review gate: user_knox_required
Revision: v4.4 (v4-execution-ready) — v4 added Tier Semantics Reconciliation Rule, Tier 0 Universal Path, Tier 0.5 Boot-Visible Surface, Workstream Coverage Overlays, Catalog Review Items, Implementation-Lane Anchors. v4.1/v4.2 cleanup tightened Execution Contract / Preservation Contract / Out of Scope / doctrine-mechanics scope / Clinical Media. v4.3 added the **Archive Operating Contract** to the historical archive file (the archive is governed, not a graveyard) + main-file Read-Graph Operating Contract extension + filename rename. v4.4 cleanup pass: fixes archive passport status (`active` + `Volume state: open_for_append`), unifies appendix→archive terminology throughout, simplifies archive title, tightens Lifecycle Rule 3 (append-only with tail-entry promotion notes), adds stop-report disposition expectation for supersession cases, and adds Schema Lock v0 open-review row for `Volume state` codification. No conceptual changes; v4.4 is the consistency pass before execution.

---

## Execution Contract

- This file is **patch-spec only**.
- It does NOT execute any edit to `04_manifest_read_graph.md`.
- It does NOT delete, rewrite, or weaken any wave-history content; all wave content is preserved verbatim in a new sibling archive file.
- Existing current-state route content is preserved where not explicitly corrected by v4 route-reconciliation sections. v4 route corrections are limited to: Tier 0 Universal Path, Tier 0.5 Boot-Visible Surface, Workstream Coverage Overlays, Catalog Review Items, Implementation-Lane Anchors, tag-taxonomy load wording elevation in the existing Charter+Protocol+Future Work Retrieval section, and Tier 0 column normalization in the existing Domain Routing Table.
- It does NOT introduce new **domain** doctrine. It does add **read-routing governance rules** (Tier Semantics Reconciliation Rule, Read-Graph Operating Contract) derived from the reconciliation audit.
- It does NOT touch runtime/code/schema/migration files.

Approval to proceed requires explicit user authorization of the restructure + route-reconciliation execution as a separate gate.

---

## v4 Scope Expansion (P2-with-route-corrections — "Option A-prime")

v4 extends P2 from a pure structural split into a combined **structural split + route reconciliation** execution. Driven by findings in `.cursor/plans/doctrine/read_graph_route_reconciliation_audit_2026-05-22.md`.

v4 additions:
- Tier Semantics Reconciliation Rule (new section in main file)
- Tier 0 Universal Path (replaces per-workstream Tier 0 column duplication)
- Tier 0.5 Boot-Visible Surface (new section in main file)
- Implementation-Lane Anchors (new section: Build OS layer model, rollout sequence, Build Entry Gate v0)
- Tag Taxonomy Routing (added to Charter+Protocol+Future Work Retrieval block)
- Workstream Coverage Decision (overlays vs new workstreams for RBAC, settings, care_coordination, federation, AI governance)
- Catalog Review Items (open-review rows for catalog classification mismatches; **catalog corrections are NOT executed in this pass** — only flagged)

v4.3 additions (archive governance — closes the "graveyard doc" gap):
- Historical archive renamed from `_wave_history_` to `_history_archive_` (signals non-current status more loudly).
- **Archive Operating Contract** is a substantive section IN THE ARCHIVE FILE (not in the main read graph), defining: scope (read-graph-shape provenance only), entry format (mini-header for future entries), lifecycle rules (append-only, volume spawn at 1500 lines or phase close, no promotion in place, one-way cross-references, catalog+read-graph registration on volume spawn), and repeated non-authority emphasis.
- **Main file Read-Graph Operating Contract** gets a one-clause extension routing wave-history / route-change-provenance / superseded-routing rationale / closure-addenda-about-read-graph-state to the archive per its Archive Operating Contract.
- **Read-Graph Update Disposition** sub-section added to main file's Read-Graph Operating Contract: only updates that supersede / remove / replace current routing must declare disposition; pure additions are exempt. Disposition options enumerated. Local rule; does not amend Protocol §9 universally.
- Archive filename: `04_manifest_read_graph_history_archive_2026-05-22.md` (first volume; date-stamped per existing audit/matrix naming convention).

Pushbacks applied vs Knox's v4 brief:
- **Do NOT blindly elevate every catalog `add_tier0` doc to DRT Tier 0 universal path.** Catalog classification is not authoritative for runtime load order. Some catalog Tier 0 docs are domain-specific by content (e.g., CNS ADR, scheduling matrix) — these stay as Tier 1 binding for their domains and get flagged for catalog correction, not forced into universal path.
- **Define Tier 0 Universal Path once**, not per-workstream. Reduces line bloat; matches current de-facto pattern.
- **Verify before routing**: CLAUDE.md is a 1-line redirect (`@AGENTS.md`), not a Tier 0 boot artifact. Not added to universal path; flagged for catalog review.
- **Triggered workstreams over full workstreams** for partial-coverage domains. Open-review for each deferred full-workstream decision.

---

## Problem Statement (Why Restructure)

Tier-0 Document Quality Audit (`tier0_governance_document_quality_audit_2026-05-22.md` File 3) found:

- `04_manifest_read_graph.md` is 726 lines.
- Approximately 630 lines (~87%) are historical wave debris (D0 Wave 1, 2A, 3A-E, 4, 4A-C, 4C-beta..theta, Consolidation Stages 1-5, Post-Consolidation Open Queue Audit, multiple post-wave closure addenda, plus a Build OS Clarity Addendum from 2026-05-21).
- Current-state routing (~95 lines) is buried under wave-history content.
- A fresh agent at boot must scroll past hundreds of lines of historical addenda to find active routes.
- Status field still reads `Skeleton (Phase 0)` despite the file having grown far past skeleton state.

The audit recommendation: **extract wave-history into a sibling archive file (cataloged as `historical_nonbinding` / consult-only); preserve current-state routing at the top of the main file**. No content lost; main file becomes scannable.

---

## Current Outline (Baseline)

`.cursor/plans/doctrine/04_manifest_read_graph.md` as of 2026-05-22:

### Current-state sections (~95 lines)
1. Passport header (lines 1-12)
2. `## Boot Rule Link` (line 16)
3. `## Current-State Truth Pointer (Binding)` (line 27)
4. `## Tier Model (Skeleton)` (line 44)
5. `## Domain Routing Table (Provisional v1)` (line 60)
6. `## Synchronization Check` (line 74)
7. `## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)` (line 78)
8. `## D0-REV-004 Ratification Matrix (Wave 3 Gate)` (line 87)
9. `## Stage-Entry Checklist (Always-On)` (line 192)
10. `## Retro Trigger Checklist (Always-On)` (line 207)
11. `## Stage-Entry Record Template (Required)` (line 220)

### Wave-history sections (~630 lines, currently interleaved)
- `## D0 Wave 2A Routing Checkpoint (Provisional, Not Canonized)` (line 99)
- `## D0 Wave 1 Proposed Updates (Not Canonized)` (line 105)
- `## D0 Wave 3A Proposed Updates (Not Canonized)` (line 132)
- `## D0 Wave 3B Gate Verdict` (line 143)
- `## D0 Wave 3B Proposed Updates (Not Canonized)` (line 153)
- `## D0 Wave 3C Proposed Updates (Not Canonized)` (line 163)
- `## D0 Wave 3D Gate Verdict` (line 173)
- `## Wave 3D Extraction Checklist (Anti-Shrouding Mandatory)` (line 182)
- `## D0 Wave 3D Proposed Updates (Not Canonized)` (line 238)
- `## D0 Wave 4 Gate Verdict` (line 248)
- `## D0 Wave 3E Proposed Updates (Not Canonized)` (line 257)
- `## D0 Wave 3E Gate Verdict` (line 267)
- `## D0 Wave 4A Proposed Updates (Not Canonized)` (line 274)
- `## D0 Wave 4A Gate Verdict` (line 286)
- `## D0 Wave 4B Proposed Updates (Not Canonized)` (line 293)
- `## D0 Wave 4B Gate Verdict` (line 306)
- `## D0 Wave 4C Proposed Updates (Not Canonized)` (line 313)
- `## D0 Wave 4C Gate Verdict` (line 325)
- `## D0 Wave 4C-beta` through `4C-theta` (Proposed Updates + Gate Verdicts; lines 332-462)
- `## Wave 4C Consolidation Stage 1..5` (Proposed Updates + Gate Verdicts; lines 464-558)
- `## Post-Consolidation Open Queue Audit (Priority Order)` (line 561)
- `## D6 Pre-Ratification Addendum (2026-05-20)` (line 599)
- `## Wave 4 Hygiene Closure Addendum (2026-05-20)` (line 613)
- `## D6 Child-Set Closure Addendum (2026-05-20)` (line 625)
- `## D0W2 Proposal Closure Addendum (2026-05-20)` (line 643)
- `## D0-REV-008 Closure Addendum (2026-05-20)` (line 655)
- `## Retrospective Closure Addendum (2026-05-20)` (line 667)
- `## Guardrail Ratification Addendum (2026-05-21)` (line 678)
- `## Conflict Sweep Addendum (2026-05-21)` (line 691)
- `## LI Gate Closure Addendum (2026-05-20)` (line 705)
- `## Wave 5 Handoff/Transitions Completion Addendum (2026-05-21)` (line 712)
- `## Build OS Clarity Addendum (2026-05-21)` (line 718)

Total: 726 lines. Wave history ≈ 87% of file.

---

## Proposed Outline (Restructured)

### Main file: `04_manifest_read_graph.md` (~200 lines after v4 expansion)

Order (re-sequenced so current-state always-on checklists and template appear in coherent flow; new v4 route-correction sections inserted alongside structural sections):

1. Passport header (unchanged; status `Skeleton (Phase 0)` → `active`)
2. `## Boot Rule Link` (preserved verbatim)
3. `## Current-State Truth Pointer (Binding)` (preserved verbatim)
4. `## Current Routing Boundary` (NEW — explicit main-vs-archive authority)
5. `## Tier Semantics Reconciliation Rule` (NEW v4 — catalog vs DRT precedence)
6. `## Read-Graph Operating Contract` (NEW — when/how to update this file)
7. `## Tier Model` (rename: drop "Skeleton" — file is no longer skeleton)
8. `## Tier 0 Universal Path` (NEW v4 — replaces per-workstream Tier 0 column duplication)
9. `## Tier 0.5 Boot-Visible Surface` (NEW v4 — guardrail digest boot visibility)
10. `## Workstream Coverage Overlays` (NEW v4 — RBAC/Settings/Care Coord/Federation/AI Governance/Clinical Media overlays)
11. `## Catalog Review Items` (NEW v4 — open-review pointers for catalog classification mismatches)
12. `## Domain Routing Table (Provisional v1)` (preserved verbatim but Tier 0 column references Tier 0 Universal Path; no content change in workstream-specific Tier 1/Tier 2 columns)
13. `## Synchronization Check` (preserved verbatim)
14. `## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)` (preserved verbatim; tag taxonomy mandatory-load wording elevated)
15. `## Implementation-Lane Anchors` (NEW v4 — Build OS layer model + rollout sequence + Build Entry Gate v0 as Tier 1 anchors when implementation lane is entered)
16. `## D0-REV-004 Ratification Matrix (Wave 3 Gate)` (preserved verbatim)
17. `## Stage-Entry Checklist (Always-On)` (preserved verbatim)
18. `## Retro Trigger Checklist (Always-On)` (preserved verbatim)
19. `## Stage-Entry Record Template (Required)` (preserved verbatim)
20. `## Historical Read-Graph History Archive` (NEW one-line pointer to sibling file)

### New sibling file: `04_manifest_read_graph_history_archive_2026-05-22.md` (~720 lines after v4.3 contract addition)

The archive is a **governed artifact**, not a graveyard doc. It contains both:
1. A substantive `## Archive Operating Contract` section at the top (~80 lines, see below) defining scope, entry format, lifecycle, volume rules, and non-authority semantics.
2. All wave-history sections preserved verbatim (~640 lines) appended after the Operating Contract.

Wave-history content preserved verbatim:

- All D0 Wave 1, 2A, 3A, 3B, 3C, 3D, 3E, 4, 4A, 4B, 4C sections (Proposed Updates + Gate Verdicts)
- Wave 3D Extraction Checklist (Anti-Shrouding Mandatory)
- All D0 Wave 4C-beta through 4C-theta sections
- All Wave 4C Consolidation Stages 1-5
- Post-Consolidation Open Queue Audit
- All post-wave Closure Addenda (D6 Pre-Ratification, Wave 4 Hygiene, D6 Child-Set, D0W2 Proposal, D0-REV-008, Retrospective, Guardrail Ratification, Conflict Sweep, LI Gate, Wave 5 Handoff/Transitions, Build OS Clarity)

Sibling file passport (uses canonical Schema Lock v0 enums):
```markdown
# Manifest Read Graph — History Archive (Volume 1)

Document type: `manifest_or_catalog`
Authority: historical_nonbinding
Status: active
Volume state: open_for_append
Domain(s): architecture_governance, read_routing
Lifecycle role: historical_record
Source-of-truth relationship: derived from earlier states of `04_manifest_read_graph.md`; preserves wave proposal/gate/closure history and read-graph-shape provenance; current-state routing lives in `04_manifest_read_graph.md`
Supersedes: none
Superseded by: none
Manifest action: add_tier2
Review gate: architecture_steward_required

agent_read_rule: historical_only
Volume: 1
Spawned: 2026-05-22 (first extraction from `04_manifest_read_graph.md`)
Next volume: TBD (per Volume Spawn Rule in Archive Operating Contract below)

> **Note on passport semantics:** `Status: active` means the volume file itself is actively maintained (open for append). `Volume state: open_for_append` is the explicit volume marker. Archive CONTENT (the historical body below) is permanently historical-only and non-binding regardless of volume state. When this volume crosses 1500 lines or a major phase closes, `Status` becomes `archived`, `Volume state` becomes `closed`, and a next-volume pointer is added. The `Volume state` field is a passport extension proposed for codification in Schema Lock v0 (see `AWP-REV-SCHEMA-LOCK-VOLUME-STATE-001` in `08_open_review_queue.md`).

---

> **Non-Authority Notice (Binding)**
>
> This archive is historical-only. It cannot override, extend, or create current routing.
> Current routing lives only in `.cursor/plans/doctrine/04_manifest_read_graph.md`.
> If archive content conflicts with the main read graph, the main file wins.
> The Archive Operating Contract below governs what may be added; this archive is NOT a general "old stuff" bin.
```

### NEW substantive section in archive file: `## Archive Operating Contract` (v4.3)

Insert at the top of the archive file, immediately after the passport + Non-Authority Notice and BEFORE the verbatim wave-history content:

```markdown
## Archive Operating Contract

This archive is governed. Future agents MUST follow these rules when adding to, reading from, or referencing this archive.

### Scope: What This Archive Holds

This archive holds **read-graph-shape provenance only**:

- route changes over time (which routes existed when, which routes superseded which, when classifications changed);
- workstream-shape changes (which workstreams existed when, which were promoted from overlays, which were demoted);
- Tier classification changes (which docs were Tier 0 / Tier 0.5 / Tier 1 / Tier 2 when);
- wave-era proposal / ratification / consolidation material that shaped current routing;
- closure addenda specifically about read-graph state or read-graph processes.

### Scope: What This Archive Does NOT Hold

- general project history or meaning → narrative arc / evolution docs;
- durable decisions about non-routing topics → `03_decision_extraction_ledger.md` / ADRs;
- evidence detail → `07_evidence_ingestion_ledger.md`;
- supersession decisions about non-routing topics → `05_supersession_conflict_ledger.md`;
- handoff continuity → `HANDOFF_*.md` artifacts;
- future / parked scope → `future_work_registry.md`;
- active routing → `04_manifest_read_graph.md` (main file).

If material does not fit "read-graph-shape provenance," it does not belong here. Route to the canonical home above.

### Entry Format

Every NEW archive entry added after the 2026-05-22 initial extraction MUST use this mini-header:

```
### <YYYY-MM-DD> — <short title>

- **Source work package / gate:** <e.g., D0-REV-005, build_entry_gate_v0, AWP-DOGFOOD-007>
- **Summary of change:** <1-3 sentences>
- **Affected read-graph sections:** <e.g., Tier 0 Universal Path; Domain Routing Table D5 row; Workstream Coverage Overlays>
- **Current-routing destination or pointer:** <path to current routing in main file, or "no current-routing replacement (pure removal)">
- **Disposition:** <archived | superseded | promoted | split | removed_outright>
- **Related decision/evidence/open-review IDs:** <e.g., `D0-REV-005`, `EID-018`, `AWP-REV-WORKSTREAM-OVERLAY-001`>
- **Non-authority note:** <"This entry records past state for provenance only; does not authorize routing in the main file.">

<body of the historical content being archived, verbatim where possible>
```

The 2026-05-22 initial extraction (wave-history content below) is exempt from this header format because it predates the contract. All FUTURE entries must use the header.

### Lifecycle Rules

1. **Append-only by default.** Existing archived content is not edited or removed.
2. **Volume Spawn Rule.** When this volume exceeds **1500 lines** OR a major OMNI phase closes (D1 readiness, D2 cutover, post-Wave milestone) — whichever comes first — spawn a new dated volume: `04_manifest_read_graph_history_archive_<YYYY-MM-DD>.md` with `Volume: N`. The closing volume's tail must include a one-line "next volume: <path>" pointer.
3. **No promotion in place. Archived historical body is never modified.** If archived content ever becomes relevant to current routing, the relevant content is added to the main read graph as a new current-routing entry. The original archive entry is NOT edited. A separate **promotion-note entry** is added at the tail of the archive volume (or at the tail of the volume that was open at the time of promotion) referencing the original entry by date/title and pointing to the new main-file location. Format:
   ```
   ### <YYYY-MM-DD> — Promotion note: <original entry title>
   - **Promotes:** <original entry date/title>
   - **Promoted to:** <main read-graph section / path>
   - **Reason:** <1-2 sentences>
   - **Non-authority note:** This promotion note does not modify the original historical body above. The original entry remains historical-only.
   ```
4. **Cross-references one-way.** Main read graph may reference this archive for provenance; this archive may reference the main read graph for current-routing destination. The archive does NOT modify, override, or extend any main-file route.
5. **Catalog and read-graph registration on volume spawn.** Each new archive volume must be cataloged in `01_master_corpus_catalog.md` with canonical Schema Lock v0 enums (per the New Artifact Completion Rule); the main read graph `## Current Routing Boundary` section must be updated to list the new volume's path.

### Non-Authority (Repeated for Emphasis)

This archive cannot create or modify current routing. Any item brought back to current routing requires a main-file read-graph update; the archive entry stays where it is.
```

Enum justification (per Control Plane Schema Lock v0):
- `manifest_or_catalog` is the correct category — this artifact is a routing/read-graph historical record extracted from the read graph itself.
- `historical_nonbinding` is the correct authority level — content is historical, cannot be cited as binding routing.
- `archived` is the correct status — the schema lock does not include `archived_consult`; `archived` is canonical.
- `historical_record` is the correct lifecycle role — matches existing enum and the artifact's purpose.
- `historical_only` is the correct agent_read_rule — readers consult as provenance, not current routing authority. (Alternative: `consult_if_routed`. Chose `historical_only` because the archive has no current routing semantics; if any portion ever becomes current it must move back to the main file, not be promoted in place.)

### Main file: NEW `## Current Routing Boundary` section

Insert immediately after `## Current-State Truth Pointer (Binding)`:

```markdown
## Current Routing Boundary

- This file contains current routing only.
- Historical wave records, gate verdicts, consolidation stages, and post-wave closure addenda live in `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md`.
- The archive is consult-only and `historical_nonbinding`.
- If archive content conflicts with this main file, this main file wins.
- Promotion of any historical content back to current routing requires explicit doctrine update here, not in the archive.
```

### Main file: NEW `## Tier Semantics Reconciliation Rule` section (v4)

Insert immediately after `## Current Routing Boundary`. Explains how catalog fields map to DRT load order, resolving the audit's discovered ambiguity:

```markdown
## Tier Semantics Reconciliation Rule

The read graph and the master corpus catalog use related but distinct tier concepts:

- **Catalog `manifest_action`** (e.g., `add_tier0`, `add_tier1`, `add_tier2`) records governance intent for an artifact's place in the manifest hierarchy.
- **Catalog `agent_read_rule`** (e.g., `tier0_mandatory`, `tier05_visible`, `domain_mandatory`, `consult_if_routed`, `historical_only`, `do_not_treat_as_binding`) records runtime load semantics for agents.
- **DRT Tier path** (Tier 0 Universal Path, Tier 0.5 boot-visible surface, per-workstream Tier 1 binding sets, Tier 2 consult sets) records the actual load order for workstream entry.

Precedence at runtime:
1. **DRT Tier 0 Universal Path is the authoritative universal load list.** Every workstream loads it.
2. **Catalog `agent_read_rule: tier0_mandatory`** must appear in DRT Tier 0 Universal Path, or have an explicit documented exception below.
3. **Catalog `agent_read_rule: tier05_visible`** must appear in the Tier 0.5 Boot-Visible Surface below.
4. **Catalog `agent_read_rule: domain_mandatory`** must appear in at least one workstream's Tier 1 binding set.
5. **Catalog `manifest_action` alone does not determine runtime load.** If `manifest_action: add_tier0` is set on a doc that is domain-specific (e.g., an ADR or a domain rule slice), the read rule wins; the catalog `manifest_action` may need correction (see Catalog Review Items below).

When catalog and DRT conflict, do not silently honor only one. Open a review row to resolve in either direction.
```

### Main file: NEW `## Tier 0 Universal Path` section (v4)

Insert immediately after the Tier Model section, replacing the per-workstream Tier 0 column duplication in the Domain Routing Table:

```markdown
## Tier 0 Universal Path

Every workstream MUST load these artifacts at boot. The Domain Routing Table references this list rather than duplicating it per workstream.

1. `AGENTS.md`
2. `.cursor/plans/doctrine/00_omni_coordination_charter.md`
3. `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
4. `.cursor/plans/doctrine/agent_work_protocol.md`
5. `.cursor/plans/doctrine/00_doctrine_manifest.md`
6. `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`
7. `.cursor/plans/doctrine/01_master_corpus_catalog.md`
8. `.cursor/plans/doctrine/02_authority_routing_map.md`
9. `.cursor/plans/doctrine/03_decision_extraction_ledger.md`
10. `.cursor/plans/doctrine/04_manifest_read_graph.md` (self)
11. `.cursor/plans/doctrine/05_supersession_conflict_ledger.md`
12. `.cursor/plans/doctrine/08_open_review_queue.md`
13. `.cursor/plans/system_map_three_layers_60706286.plan.md`
14. `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md`

Documented exceptions (catalog `add_tier0` but not in Universal Path):
- `CLAUDE.md` — 1-line `@AGENTS.md` redirect; flagged for catalog correction.
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` — domain-specific rule slice (D3/D5/D7); kept in those workstreams' Tier 1 binding sets; flagged for catalog correction.
- `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` — single ADR; per Authority Routing Map ADRs are `domain_mandatory when routed`; kept in CNS/Messaging Tier 1 binding sets; flagged for catalog correction.
```

### Main file: NEW `## Tier 0.5 Boot-Visible Surface` section (v4)

Insert immediately after `## Tier 0 Universal Path`:

```markdown
## Tier 0.5 Boot-Visible Surface

Boot-visible consult artifacts. Agents do not full-load these by default, but they are visible at boot for anti-pattern recognition and guardrail awareness.

1. `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` — cross-cutting anti-pattern and non-repeatable failure mode memory; consult before routing decisions; does not override doctrine locks.

Tier 0.5 is consult-by-default-visible. Full-read is required only when the active workstream or guardrail trigger surfaces a row from this digest.
```

### Main file: NEW `## Implementation-Lane Anchors` section (v4)

Insert immediately after the Charter+Protocol+Future Work Retrieval section and before the D0-REV-004 Ratification Matrix. Anchors implementation lanes to Build OS and Build Entry Gate:

```markdown
## Implementation-Lane Anchors

Any work classified as "implementation lane" per Agent Work Protocol §6 MUST also load:

- `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` — permanent five-layer Build OS model.
- `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` — execution-order rollout sequence.
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md` — D1 readiness gate; lane admission contract.

These three artifacts are also referenced in Current-State Truth Pointer (Binding) and AGENTS Operating References. This section makes them explicit per-workstream Tier 1 anchors whenever an implementation lane is entered.

For governance-lane or doctrine-lane work that does not enter implementation, these three remain consult-routed (Tier 2 consult set), not Tier 1 mandatory.
```

### Main file: tag taxonomy added to Charter+Protocol+Future Work Retrieval section (v4)

The existing Charter+Protocol+Future Work Retrieval section already references `agent_work_protocol_tag_taxonomy.md`. v4 elevates the wording to make tag-taxonomy load mandatory for any work that touches tag-based retrieval (Future Work Registry, domain/lane/surface classification, build-entry retrieval, read-graph updates).

### Main file: NEW `## Read-Graph Operating Contract` section

Insert immediately after `## Current Routing Boundary` and before `## Tier Model`. Two sub-sections separate **when** to update from **how** to shape an entry:

```markdown
## Read-Graph Operating Contract

### Update Rule (When to Update)

Update this file only when current read-routing changes. Add, modify, or retire a route when:

- a document becomes mandatory or consult-required for a domain, lane, surface, build-entry gate, workstream, or agent boot path;
- Tier 0 / Tier 0.5 / Tier 1 / Tier 2 read rules change;
- a new artifact changes boot, build-entry, domain routing, or required context loading;
- an existing route becomes stale, superseded, historical-only, archive-only, or replaced by another canonical artifact.

Do not store directly in this file:
- narrative or rationale bodies (use narrative arc docs),
- evidence detail (use `07_evidence_ingestion_ledger.md`),
- handoff detail (use `HANDOFF_*.md` artifacts),
- future-work payloads (use `future_work_registry.md`),
- wave-history / route-change-provenance / superseded-routing rationale / closure-addenda about read-graph state (route to the Historical Read-Graph History Archive per the Archive Operating Contract in that file),
- closure narratives or summary reports about non-routing topics.

Route those to their canonical homes, and add only a routing pointer here if future agents must load them.

### Read-Graph Update Disposition (When Superseding Current Routing)

When a read-graph update **supersedes, removes, or replaces** prior current routing (not pure additions), the update's stop report must declare disposition for the displaced content. Disposition options:
- discarded (low-value, not retained anywhere),
- archived to Historical Read-Graph History Archive (read-graph-shape provenance),
- routed to narrative arc (meaning / evolution / lesson),
- routed to decision ledger / open review queue / supersession ledger (durable decision),
- routed to evidence ledger (evidence detail),
- routed to handoff doc (operational continuity),
- promoted to a different current routing surface.

Pure additions (new workstream, new Tier 1 binding, new overlay) do not require disposition declaration. This is a read-graph-local rule that piggybacks on Protocol §9; it does not amend Protocol §9 universally.

### Route Entry Contract (Shape of an Entry)

Every current route entry must preserve:
- route trigger (when to read: domain / lane / surface / workstream / build-entry gate / boot path),
- required artifact path,
- authority or read rule (per `agent_read_rule_enum` in Control Plane Schema Lock v0),
- domain / lane / surface / workstream tags when applicable (per `agent_work_protocol_tag_taxonomy.md`),
- lifecycle state (per `current_status_enum` in Control Plane Schema Lock v0),
- supersession or historical pointer if replacing older routing.

Entries that cannot satisfy this contract belong in `08_open_review_queue.md` until classification is resolved, not in this file.
```

### Main file: NEW `## Workstream Coverage Overlays` section (v4)

Insert before the Domain Routing Table (Provisional v1). Adds route overlays for domains that have Tier 1 doctrine but no full workstream in the DRT:

```markdown
## Workstream Coverage Overlays

Some Tier 1 doctrine exists for domains that are cross-cutting rather than workstream-scoped. Agents working in these domains MUST load the listed Tier 1 anchor in addition to whichever workstream(s) the work touches.

| overlay | trigger (when active) | Tier 1 anchor | notes |
|---|---|---|---|
| RBAC | any auth / capability / permission / role / access work | `.cursor/plans/doctrine/DL-18_rbac_DRAFT_2026-05-17.md` | extends `lib/auth/capabilities.ts` per DL-18 |
| Settings | any config / settings / governed-policy work | `.cursor/plans/doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md` | settings-as-OS substrate |
| Care Coordination | any care_episode / task / pending-input / patient-journey work | `.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md` | three-layer appointment/encounter/evidence model |
| Federation / Topology | any multi-tenant / multi-site / cross-entity / network-topology work | `.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md` | Day-0 activated per DL-21 |
| AI Governance | any AI/LLM-touching work involving clinical/patient surfaces, drafts, response-assist, or autonomous actions | `docs/ai-governance-policy.md` | clinician-assist-only boundary; reviewed_accepted gating |
| Clinical Media | any clinical photo/media/imaging work | `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md` | (already in D7 Tier 1; included here for cross-cutting visibility) |

Each overlay is per-trigger. Loading is required only when the trigger condition applies. If you cannot determine whether an overlay applies, default to loading it.

Deferred-to-workstream decisions (each requires explicit user/architecture_steward decision):
- Whether RBAC, Settings, Care Coordination, Federation/Topology, or AI Governance should be promoted from cross-cutting overlay to a full DRT workstream row. Tracked as open-review rows (see Catalog Review Items below).
- **Clinical Media is excluded from this deferred list**: it is already routed in the D7 workstream Tier 1 binding set, and the overlay row above exists only for cross-cutting visibility when non-D7 work touches clinical photo/media/imaging surfaces. No open-review row created for Clinical Media in this pass.
```

### Main file: NEW `## Catalog Review Items` section (v4)

Insert immediately after `## Workstream Coverage Overlays`. Captures catalog classifications that need correction (out of scope for this DRT execution):

```markdown
## Catalog Review Items

These items have catalog classifications that conflict with current DRT routing. The DRT routes them correctly per current usage; the catalog needs separate correction.

| catalog row | catalog `manifest_action` | catalog `agent_read_rule` | DRT placement | proposed catalog correction | open review id |
|---|---|---|---|---|---|
| `CLAUDE.md` | `add_tier0` | `tier0_mandatory` | not routed (1-line redirect to AGENTS) | `manifest_action: none`, `agent_read_rule: do_not_treat_as_binding` (redirect-only) | `AWP-REV-CLAUDE-MD-CLASSIFICATION-001` |
| `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` | `add_tier0` | `tier0_mandatory` | D3/D5/D7 Tier 1 binding (correct) | `manifest_action: add_tier1`, `agent_read_rule: domain_mandatory` | `AWP-REV-SCHEDULING-MATRIX-CLASSIFICATION-001` |
| `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | `add_tier0` | `tier0_mandatory` | CNS/Messaging Tier 1 binding (correct per Authority Routing Map) | `manifest_action: add_tier1`, `agent_read_rule: domain_mandatory` | `AWP-REV-CNS-ADR-CLASSIFICATION-001` |
| Each overlay-vs-workstream decision (RBAC, Settings, Care Coord, Federation, AI Governance) | varies | varies | overlay only in v4 | decision: keep overlay or promote to workstream | `AWP-REV-WORKSTREAM-OVERLAY-001..005` |

Catalog corrections are out of scope for this P2 v4 execution. The open-review rows above track them as separate governance decisions.
```

### Main file archive pointer (NEW section at end of main file)

```markdown
## Historical Read-Graph History Archive

Wave-by-wave routing proposals, gate verdicts, consolidation stages, and post-wave closure addenda are preserved verbatim in `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md` (consult-only, `historical_nonbinding`). The main file holds current-state routing only. See `## Current Routing Boundary` above.
```

---

## Before/After Map

| current section | restructured location | change |
|---|---|---|
| Passport (lines 1-12) | Main file passport | Status `Skeleton (Phase 0)` → `active`; all other fields preserved verbatim |
| `## Boot Rule Link` (line 16) | Main file | preserved verbatim |
| `## Current-State Truth Pointer (Binding)` (line 27) | Main file | preserved verbatim |
| `## Tier Model (Skeleton)` (line 44) | Main file | renamed `## Tier Model` (drop "(Skeleton)"); body preserved verbatim |
| `## Domain Routing Table (Provisional v1)` (line 60) | Main file | preserved verbatim |
| `## Synchronization Check` (line 74) | Main file | preserved verbatim |
| `## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)` (line 78) | Main file | preserved verbatim |
| `## D0-REV-004 Ratification Matrix (Wave 3 Gate)` (line 87) | Main file | preserved verbatim |
| `## D0 Wave 2A Routing Checkpoint (Provisional, Not Canonized)` (line 99) | Archive | preserved verbatim |
| `## D0 Wave 1 Proposed Updates (Not Canonized)` (line 105) | Archive | preserved verbatim |
| `## D0 Wave 3A Proposed Updates (Not Canonized)` (line 132) | Archive | preserved verbatim |
| `## D0 Wave 3B Gate Verdict` (line 143) | Archive | preserved verbatim |
| `## D0 Wave 3B Proposed Updates (Not Canonized)` (line 153) | Archive | preserved verbatim |
| `## D0 Wave 3C Proposed Updates (Not Canonized)` (line 163) | Archive | preserved verbatim |
| `## D0 Wave 3D Gate Verdict` (line 173) | Archive | preserved verbatim |
| `## Wave 3D Extraction Checklist (Anti-Shrouding Mandatory)` (line 182) | Archive | preserved verbatim (Wave-3D-specific; not always-on) |
| `## Stage-Entry Checklist (Always-On)` (line 192) | Main file | preserved verbatim (moved up; always-on) |
| `## Retro Trigger Checklist (Always-On)` (line 207) | Main file | preserved verbatim (moved up; always-on) |
| `## Stage-Entry Record Template (Required)` (line 220) | Main file | preserved verbatim (moved up; required) |
| `## D0 Wave 3D Proposed Updates (Not Canonized)` (line 238) | Archive | preserved verbatim |
| `## D0 Wave 4 Gate Verdict` (line 248) | Archive | preserved verbatim |
| `## D0 Wave 3E Proposed Updates (Not Canonized)` (line 257) | Archive | preserved verbatim |
| `## D0 Wave 3E Gate Verdict` (line 267) | Archive | preserved verbatim |
| `## D0 Wave 4A..C Proposed Updates + Gate Verdicts` (lines 274-326) | Archive | preserved verbatim |
| `## D0 Wave 4C-beta..theta Proposed Updates + Gate Verdicts` (lines 332-462) | Archive | preserved verbatim |
| `## Wave 4C Consolidation Stages 1-5 Proposed Updates + Gate Verdicts` (lines 464-558) | Archive | preserved verbatim |
| `## Post-Consolidation Open Queue Audit (Priority Order)` (line 561) | Archive | preserved verbatim |
| All post-wave Closure Addenda (lines 599-718) | Archive | preserved verbatim |
| (none) | Main file `## Current Routing Boundary` | NEW — main-vs-archive authority + conflict-resolution clause |
| (none) | Main file `## Tier Semantics Reconciliation Rule` | NEW v4 — catalog vs DRT precedence; resolves audit finding on tier classification mismatches |
| (none) | Main file `## Read-Graph Operating Contract` | NEW — when to update + route entry contract; prevents file from rotting back into junk drawer |
| (none) | Main file `## Tier 0 Universal Path` | NEW v4 — single Tier 0 universal load list; replaces per-workstream Tier 0 column duplication; resolves Tier 0 gap findings |
| (none) | Main file `## Tier 0.5 Boot-Visible Surface` | NEW v4 — boot-visible surface for `06_guardrail_antipattern_digest.md` |
| (none) | Main file `## Workstream Coverage Overlays` | NEW v4 — RBAC/Settings/Care Coord/Federation/AI Governance/Clinical Media overlays for cross-cutting domains |
| (none) | Main file `## Catalog Review Items` | NEW v4 — open-review pointers for catalog classification mismatches |
| (none) | Main file `## Implementation-Lane Anchors` | NEW v4 — Build OS layer model + rollout sequence + Build Entry Gate v0 routed as implementation-lane Tier 1 anchors |
| (modified) | Main file `## Domain Routing Table (Provisional v1)` | Tier 0 column references `## Tier 0 Universal Path` rather than duplicating 7 docs per row; Tier 1 / Tier 2 columns preserved verbatim |
| (modified) | Main file `## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)` | Existing tag taxonomy reference elevated to mandatory-load wording when tag retrieval is in scope |
| (none) | Main file `## Historical Read-Graph History Archive` | NEW one-line pointer to sibling file |

---

## Preservation Contract

The following are explicitly preserved:

- **All wave-history content**: preserved verbatim in `04_manifest_read_graph_history_archive_2026-05-22.md`. Every section title, paragraph, table row, bullet, and ratification verdict copied with no rewording. The 2026-05-22 initial extraction is appended under the Archive Operating Contract; the extraction is exempt from the future-entry mini-header format (predates the contract).
- **Archive Operating Contract** (v4.3): added as a substantive section at the top of the archive file. Governs scope, entry format, lifecycle, volume spawning, and non-authority. Without this contract, the archive would be a graveyard doc; with it, the archive is a governed stream artifact.
- **Current-state content preserved verbatim** in main `04_manifest_read_graph.md`: ratification matrix, sync check, Charter+Protocol+Future Work block body, stage-entry checklists, retro trigger checklist, stage-entry record template.
- **DRT Tier 1 / Tier 2 workstream-specific content**: preserved verbatim. **DRT Tier 0 column is normalized** to reference the new Tier 0 Universal Path section rather than duplicate 7 doc paths per row (column normalization only; no Tier 1/Tier 2 row content changes).
- **Charter+Protocol+Future Work Retrieval section body**: preserved verbatim, with tag-taxonomy load wording elevated from advisory to mandatory for any tag-touching work (single-clause elevation; no section restructure).
- **D0-REV-004 Ratification Matrix**: stays in main file (current-state binding routing per workstream).
- **Always-On checklists and templates** (Stage-Entry, Retro Trigger, Stage-Entry Record): stay in main file (current-state always-on).

The only changes:
1. Status field: `Skeleton (Phase 0)` → `active`.
2. `## Tier Model (Skeleton)` → `## Tier Model` (drop "(Skeleton)" suffix; body unchanged).
3. Wave-history sections physically relocated to sibling archive file.
4. New `## Current Routing Boundary` section added (main-vs-archive authority; conflict-resolution clause).
5. New `## Tier Semantics Reconciliation Rule` section added (v4 — catalog vs DRT precedence).
6. New `## Read-Graph Operating Contract` section added (Update Rule + Route Entry Contract sub-sections; prevents junk-drawer drift).
7. New `## Tier 0 Universal Path` section added (v4 — single universal load list).
8. New `## Tier 0.5 Boot-Visible Surface` section added (v4 — guardrail digest boot visibility).
9. New `## Workstream Coverage Overlays` section added (v4 — cross-cutting overlays).
10. New `## Catalog Review Items` section added (v4 — flag catalog classification mismatches).
11. New `## Implementation-Lane Anchors` section added (v4 — Build OS + Build Entry Gate v0 as implementation Tier 1).
12. Domain Routing Table (Provisional v1) Tier 0 column references the Tier 0 Universal Path rather than duplicating 7 docs per row. Tier 1 and Tier 2 columns unchanged.
13. Charter + Protocol + Future Work Retrieval section: tag taxonomy load wording elevated to mandatory for tag-touching work.
14. New one-line `## Historical Read-Graph History Archive` pointer at end of main file.
15. Main file always-on checklists/templates re-sequenced into coherent flow.

No wave content removed. No verbatim doctrine sentence rewritten. **Nine new sections** added (Current Routing Boundary, Tier Semantics Reconciliation Rule, Read-Graph Operating Contract, Tier 0 Universal Path, Tier 0.5 Boot-Visible Surface, Workstream Coverage Overlays, Catalog Review Items, Implementation-Lane Anchors, Historical Read-Graph History Archive pointer) to make the read graph correct + complete + self-maintaining.

---

## Non-Conflict Assertion

This restructure asserts:
- Control Plane still owns boot-rule semantics and schema discipline (read graph's Boot Rule Link still points to Control Plane).
- Charter still owns layer-coordination doctrine.
- Build OS / Build Entry Gate still own implementation-lane admission.
- Agent Work Protocol still owns runtime SOP.
- Read Graph still owns current routing.
- The wave-history archive is `historical_nonbinding` / consult-only; it cannot be cited as binding authority.

No layer boundary is violated. The split is structural; routing authority remains with the main file.

---

## Validation Checklist (Before Execution)

When approved to execute, verify:
- Main file size: ~200 lines (was ~726).
- Archive file size: ~720 lines (Archive Operating Contract ~80 + verbatim wave-history ~640).
- All current-state sections appear in the main file in this order: passport, Boot Rule Link, Current-State Truth Pointer, **Current Routing Boundary (NEW)**, **Tier Semantics Reconciliation Rule (NEW v4)**, **Read-Graph Operating Contract (NEW)**, Tier Model, **Tier 0 Universal Path (NEW v4)**, **Tier 0.5 Boot-Visible Surface (NEW v4)**, **Workstream Coverage Overlays (NEW v4)**, **Catalog Review Items (NEW v4)**, Domain Routing Table, Synchronization Check, Charter+Protocol+Future Work Retrieval, **Implementation-Lane Anchors (NEW v4)**, D0-REV-004 Ratification Matrix, Stage-Entry Checklist, Retro Trigger Checklist, Stage-Entry Record Template, Historical Read-Graph History Archive pointer.
- Tier Model heading drops "(Skeleton)" but body is unchanged.
- Status `Skeleton (Phase 0)` → `active`.
- Archive file contains all wave-history sections preserved verbatim, in their original order, appended after the Archive Operating Contract.
- Archive passport uses canonical Schema Lock v0 enums: `Document type: manifest_or_catalog`, `Authority: historical_nonbinding`, `Status: archived`, `Lifecycle role: historical_record`, `agent_read_rule: historical_only`. Volume marker (`Volume: 1`) and Spawned date are present.
- Archive Non-Authority Notice is present and explicit: archive cannot override/extend/create current routing; main file wins on conflict.
- Archive file is cataloged as a new row in `01_master_corpus_catalog.md` with the enums above.

Archive Operating Contract validation (v4.3):
- `## Archive Operating Contract` section is present at the top of the archive file, after the passport + Non-Authority Notice and before the verbatim wave-history.
- Contract has these sub-sections in order: Scope (what archive holds), Scope (what archive does NOT hold), Entry Format (mini-header for future entries), Lifecycle Rules (1-5: append-only / volume spawn / no promotion in place / one-way cross-references / catalog+read-graph registration on volume spawn), Non-Authority repeated.
- Scope explicitly enumerates "read-graph-shape provenance only" with positive list (route changes, workstream-shape changes, Tier classification changes, wave-era proposals, closure addenda about read-graph state) and negative list (narrative → narrative arc; decisions → decision ledger; evidence → evidence ledger; supersession non-routing → supersession ledger; handoff → handoff doc; future scope → future work registry; active routing → main read graph).
- Entry Format mini-header includes: date, source work package/gate, summary, affected read-graph sections, current-routing destination or pointer, disposition, related IDs, non-authority note.
- Volume Spawn Rule: threshold = 1500 lines OR major phase close, whichever comes first; spawn produces dated volume file; closing volume gets next-volume pointer in tail.
- Initial 2026-05-22 extraction is documented as exempt from the future-entry mini-header (predates contract).
- Main file's Read-Graph Operating Contract has the v4.3 one-clause extension routing wave-history / route-change-provenance / superseded-routing rationale / closure-addenda-about-read-graph-state to the archive.
- Main file's Read-Graph Operating Contract has the new `### Read-Graph Update Disposition (When Superseding Current Routing)` sub-section with disposition options enumerated.

Stop-report expectation (v4.4):
- If a read-graph update **supersedes, removes, or replaces** prior current routing, the Protocol §9 stop report must include a `Read-Graph Disposition:` line declaring one of: `archived` / `discarded` / `routed to narrative` / `routed to ledger` / `routed to handoff` / `promoted elsewhere`.
- Pure additions (new workstream, new Tier 1 binding, new overlay) are exempt from this disposition declaration.
- This is enforced by the Read-Graph Operating Contract; it does not amend Protocol §9 universally.

Route-correction validation (v4):
- Tier 0 Universal Path contains exactly the 14 enumerated docs.
- Tier 0 Universal Path does NOT contain `CLAUDE.md`, `00_index.md` (scheduling), `cns_action_orchestration_adr_2026-05-17.md`. Each has an explicit exception note in the section, with `Catalog Review Items` open-review row.
- Tier 0.5 Boot-Visible Surface contains `06_guardrail_antipattern_digest.md` with explicit consult-by-default-visible semantics.
- Domain Routing Table Tier 0 column references "Tier 0 Universal Path" rather than duplicating 7 doc paths per row.
- Domain Routing Table Tier 1 / Tier 2 columns preserved verbatim; no workstream-specific binding content changed.
- Workstream Coverage Overlays section includes RBAC, Settings, Care Coordination, Federation/Topology, AI Governance, Clinical Media with explicit trigger conditions.
- Implementation-Lane Anchors section names `09_omni_build_os_layer_model.md`, `10_omni_build_os_rollout_sequence.md`, `11_build_entry_gate_v0.md` with implementation-lane Tier 1 semantics.
- Charter+Protocol+Future Work Retrieval section tag-taxonomy reference reads as mandatory load for tag-touching work.
- Tier Semantics Reconciliation Rule documents precedence: DRT Tier path > catalog manifest_action; catalog agent_read_rule must align with DRT.
- Catalog Review Items section names the 4+ specific open-review rows for catalog classification corrections (CLAUDE.md, scheduling matrix, CNS ADR, workstream overlay decisions).

General (carried from v3):
- Main file `## Current Routing Boundary` section is present and includes the conflict-resolution clause (main file wins).
- Main file `## Read-Graph Operating Contract` section is present, with both `### Update Rule (When to Update)` and `### Route Entry Contract (Shape of an Entry)` sub-sections.
- Operating Contract Update Rule explicitly excludes narrative/evidence/handoff/future-work/wave-history/closure content from this file and routes those to canonical homes.
- Route Entry Contract requires: trigger, artifact path, authority/read rule, tags, lifecycle state, supersession/historical pointer.
- Main file `## Historical Read-Graph History Archive` section points to the archive path and references the Current Routing Boundary section.
- Build OS Clarity Addendum (2026-05-21) is in archive only; no main-file pointer required (content covered canonically in AGENTS / Charter / Build Entry Gate v0).
- Wave 5 Handoff/Transitions Completion Addendum (2026-05-21) is in archive only; no main-file pointer required (pure closure report).
- ReadLints clean on both files post-execution.
- No wave content lost.
- New Artifact Completion Rule applied for the new archive file (passport + catalog row + read-graph evaluation in same pass).
- 10 new open-review rows created in `08_open_review_queue.md`: 3 catalog-classification rows (CLAUDE.md, scheduling matrix, CNS ADR) + 5 workstream-overlay-vs-promotion decision rows (RBAC, Settings, Care Coord, Federation, AI Governance) + 1 NACR-extension row (`AWP-REV-NACR-EXTENSION-001`) + 1 Schema-Lock-Volume-state row (`AWP-REV-SCHEMA-LOCK-VOLUME-STATE-001`).

---

## Execution Plan (When Approved Later)

1. Create new archive file at `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md` with:
   - Canonical-enum passport (`Volume: 1`, `Spawned: 2026-05-22`).
   - Non-Authority Notice (binding).
   - **`## Archive Operating Contract` section** (Scope what holds + Scope what does NOT hold + Entry Format mini-header + Lifecycle Rules 1-5 + Non-Authority repeated).
   - Verbatim wave-history content appended after the Operating Contract (initial extraction exempt from future-entry mini-header format).
2. Apply New Artifact Completion Rule for the archive file:
   - passport present (canonical Schema Lock v0 enums).
   - catalog row added in `01_master_corpus_catalog.md`.
   - read-graph impact: archive is referenced via explicit pointer in main file `## Historical Read-Graph History Archive` section and is governed by its own Archive Operating Contract (`no-main-file-route-needed-beyond-explicit-pointer`).
3. Rewrite main `04_manifest_read_graph.md`:
   - Passport with status `active`.
   - Boot Rule Link verbatim.
   - Current-State Truth Pointer verbatim.
   - NEW `## Current Routing Boundary` section (5 bullets, conflict-resolution clause).
   - NEW `## Tier Semantics Reconciliation Rule` section (v4 — catalog vs DRT precedence).
   - NEW `## Read-Graph Operating Contract` section with `### Update Rule (When to Update)` + `### Route Entry Contract (Shape of an Entry)` + `### Read-Graph Update Disposition (When Superseding Current Routing)` sub-sections (v4.3 — Update Rule includes the archive-routing extension clause).
   - Tier Model (without "Skeleton") body verbatim.
   - NEW `## Tier 0 Universal Path` section (v4 — 14 docs, 3 exception notes).
   - NEW `## Tier 0.5 Boot-Visible Surface` section (v4 — guardrail digest).
   - NEW `## Workstream Coverage Overlays` section (v4 — RBAC, Settings, Care Coord, Federation, AI Governance, Clinical Media).
   - NEW `## Catalog Review Items` section (v4 — open-review row pointers).
   - Domain Routing Table: Tier 0 column references Tier 0 Universal Path; Tier 1 and Tier 2 columns verbatim.
   - Synchronization Check verbatim.
   - Charter+Protocol+Future Work Retrieval verbatim, with tag-taxonomy load wording elevated to mandatory for tag-touching work.
   - NEW `## Implementation-Lane Anchors` section (v4 — Build OS layer model + rollout sequence + Build Entry Gate v0).
   - D0-REV-004 Ratification Matrix verbatim.
   - Stage-Entry Checklist verbatim.
   - Retro Trigger Checklist verbatim.
   - Stage-Entry Record Template verbatim.
   - NEW `## Historical Read-Graph History Archive` pointer section.
4. Update `01_master_corpus_catalog.md` notes for `04_manifest_read_graph.md` row to reflect restructure (status + outline change). Add new catalog row for `04_manifest_read_graph_history_archive_2026-05-22.md`.
5. Open-review queue updates: add the following rows in `08_open_review_queue.md`:
   - `AWP-REV-CLAUDE-MD-CLASSIFICATION-001` — catalog correction for `CLAUDE.md` (1-line redirect; should be `manifest_action: none`, `agent_read_rule: do_not_treat_as_binding`).
   - `AWP-REV-SCHEDULING-MATRIX-CLASSIFICATION-001` — catalog correction for `00_index.md` (D0 scheduling rule matrix; should be `manifest_action: add_tier1`, `agent_read_rule: domain_mandatory`).
   - `AWP-REV-CNS-ADR-CLASSIFICATION-001` — catalog correction for CNS Action Orchestration ADR (ADRs are `domain_mandatory when routed` per Authority Routing Map).
   - `AWP-REV-WORKSTREAM-OVERLAY-001..005` — one per cross-cutting domain: decide overlay vs workstream-promotion for RBAC, Settings, Care Coordination, Federation/Topology, AI Governance.
   - `AWP-REV-NACR-EXTENSION-001` (v4.3 — broader observation) — extend the New Artifact Completion Rule: for governed-stream artifacts (ledgers, registries, archives), an Operating/Maintenance Contract is required in the same pass as the artifact's creation. This is the third loop of the same pattern (Future Work Registry → Architecture Artifact Routing Protocol → Read-Graph History Archive). Candidate for promotion to Architecture Memory Control Plane Rule 7. Not blocking P2 execution.
   - `AWP-REV-SCHEMA-LOCK-VOLUME-STATE-001` (v4.4 — schema codification) — codify `Volume state` as a recognized passport field in Schema Lock v0 for governed-stream artifacts that may spawn dated volumes. Valid values: `open_for_append`, `closed`. Companion field: `Next volume: <path | TBD>`. Currently introduced ad-hoc for the History Archive (Volume 1) passport; needs schema-level codification before other stream artifacts (Decision Ledger v2, Future Work Registry v2, etc.) reuse the pattern. Not blocking P2 execution.
6. Update coverage audit only if mechanic mapping changes (expected: no change; current-state routes preserved verbatim; v4 additions are net-new route additions, not mechanic-mapping changes).
7. Verify ReadLints clean on both files.
8. Return focused diffs and stop with proof per Protocol §9 — including Read-Graph Reconciliation Audit findings resolution table.

---

## Unresolved Assumptions

All three v1 unresolved assumptions are now resolved:

1. **Build OS Clarity Addendum (2026-05-21)** placement: **archive only, no main-file pointer**.
   - Inspected content: 3 rules — (a) model vs rollout separation; (b) candidate first steel slice gate-admission; (c) scope guard for provider/EMR/Shopify lane admission.
   - All three rules are now canonically covered elsewhere:
     - (a) is in `AGENTS.md` Non-Negotiables (Build OS bullet + OMNI Operating References listing both `09_omni_build_os_layer_model.md` and `10_omni_build_os_rollout_sequence.md`), Coordination Charter Layer Model, and Charter Catalog/Read-Graph Clarity Rule.
     - (b) is in `11_build_entry_gate_v0.md` (the gate itself enforces this).
     - (c) is in `11_build_entry_gate_v0.md` Scope section (explicitly: "does NOT authorize ... provider/EMR or Shopify lane expansion").
   - The 2026-05-21 addendum was a wave-era clarification recording when those rules were stated; the rules themselves are not unique to the read graph. Archive preserves the addendum verbatim as historical provenance.

2. **Wave 5 Handoff/Transitions Completion Addendum (2026-05-21)** placement: **archive only, no main-file pointer**.
   - Inspected content: pure closure report. States "Wave 5 handoff/transitions package is complete for `extraction_wave=wave_5_handoffs_and_transitions` + `work_package=handoff_processing`", "Queue posture update: 29/29 rows moved", "D1 routing/canonization posture: outcomes were routed as continuity evidence (`D0W5-EVD-001`, `D0W5-DEC-001`); no new doctrine lock was promoted."
   - No current routing instructions. Archive preserves verbatim as historical provenance.

3. **Archive filename**: confirmed as `04_manifest_read_graph_history_archive_2026-05-22.md` (with date stamp) to match audit/matrix/coverage naming pattern in the repo. The date stamp records when the extraction happened.

---

## Out of Scope

- Editing `04_manifest_read_graph.md` in this artifact (this file is patch-spec only).
- Editing AGENTS, Charter, Agent Work Protocol, Control Plane, Build Entry Gate, System Map, or any doctrine body content. v4 routes them but does not modify them.
- Editing catalog or open-review queue **except for the specific catalog row/notes and open-review rows required by this P2-v4 execution plan**: 1 new catalog row for the history archive file, 1 catalog notes update for the main read-graph row (status `Skeleton (Phase 0)` → `active`), and 10 new open-review rows (3 catalog-classification + 5 workstream-overlay-vs-promotion decisions + 1 NACR-extension candidate + 1 Schema-Lock-Volume-state codification candidate).
- Executing the catalog corrections themselves for the 3 flagged misclassifications (CLAUDE.md, scheduling matrix, CNS ADR). v4 only flags them as open-review rows; the actual catalog edits are a separate governance pass.
- Promoting any cross-cutting overlay (RBAC, Settings, Care Coordination, Federation/Topology, AI Governance) to a full DRT workstream row. v4 establishes overlays only; promotion is a separate decision per open-review row.
- Runtime/code/schema/migration files.
- New domain doctrine, runtime mechanics, product mechanics, or implementation mechanics. Read-routing governance mechanics explicitly listed in this patch-spec are in scope.
- Rewording or rewriting any wave-history content during extraction.

---

## New Artifact Completion Proof (Per Protocol §5)

This patch-spec artifact itself follows the New Artifact Completion Rule in the same pass as its creation:

- passport: present (top of this document).
- artifact class: `handoff_or_readiness_gate`.
- authority level: `derived_nonbinding` (patch-spec only).
- lifecycle role: review-first restructure proposal.
- catalog row: added in `01_master_corpus_catalog.md` in this same pass.
- read-graph impact: `no-route-needed` (consult-only patch-spec; existing handling for `handoff_or_readiness_gate` consult artifacts is sufficient).
- open-review created if uncertain: not required (this patch-spec exists to resolve audit findings, not introduce new uncertainty).

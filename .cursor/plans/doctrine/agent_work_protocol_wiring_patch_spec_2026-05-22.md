# Agent Work Protocol Wiring Patch Spec

Document type: `handoff_or_readiness_gate`
Authority: wiring-only patch-spec (no governance edits executed in this artifact)
Status: draft_for_review
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: review-first wiring package that points existing governance docs to Charter/Protocol artifacts
Source-of-truth relationship: derives from `00_omni_coordination_charter.md`, `agent_work_protocol.md`, `agent_work_protocol_compatibility_matrix_2026-05-22.md`, `agent_work_protocol_preservation_matrix_2026-05-22.md`, `agent_work_protocol_coverage_audit_2026-05-22.md`
Supersedes: none (prior `major_architecture_inflection_preservation_protocol_patch_spec_2026-05-22.md` retained as source material)
Superseded by: none
Manifest action: add_tier1
Review gate: user_knox_required

---

## Execution Contract

- This file is **wiring spec only**.
- It does NOT execute any AGENTS/control-plane/build-entry/read-graph edits.
- It does NOT duplicate full schemas; canonical schemas live in their existing homes.
- It does NOT subsume the Coordination Charter or Agent Work Protocol; it wires existing docs to them.
- It does NOT permit runtime/code/schema/migration edits.

Approval to proceed requires:
1. Charter and Protocol drafts reviewed.
2. Compatibility, preservation, and coverage matrices reviewed.
3. Unresolved gaps in coverage audit either mapped or tracked via explicit open-review IDs.

---

## Scope

This wiring patch installs the Charter/Protocol into existing governance surfaces with **minimum text** and **no schema duplication**.

Targets:
- `AGENTS.md`
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
- `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`
- `.cursor/plans/doctrine/02_authority_routing_map.md`
- `.cursor/plans/doctrine/04_manifest_read_graph.md`
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
- `.cursor/plans/doctrine/01_master_corpus_catalog.md`
- `.cursor/plans/doctrine/08_open_review_queue.md`
- New: `.cursor/plans/doctrine/future_work_registry.md`

---

## 1) AGENTS.md (pointer-only insertion)

### Placement
- Insert a short section immediately after `## Document Governance (Mandatory)`.

### Insertion text (concise; no schema duplication)
```markdown
## OMNI Coordination Charter and Agent Work Protocol (Mandatory)

- Top coordination doctrine: `.cursor/plans/doctrine/00_omni_coordination_charter.md`
- Mandatory agent runtime protocol: `.cursor/plans/doctrine/agent_work_protocol.md`
- Schemas remain canonical in control-plane files; do not duplicate them here.
- Every architecture/doctrine/build/work-package agent MUST run the Agent Work Protocol loop and report stop proof per its §9.
- Failure to run the protocol or produce its stop report is non-compliant.
```

Non-bloat requirement:
- Do not paste full protocol mechanics into AGENTS.
- AGENTS remains a boot pointer and enforcement reminder.

---

## 2) `00_architecture_memory_control_plane.md` (pointer + non-supersession clause)

### Placement
- Insert near top boot-rule section.

### Insertion text
```markdown
## Coordination Charter Pointer (Non-Superseding)

- Coordination Charter: `.cursor/plans/doctrine/00_omni_coordination_charter.md`.
- Agent Work Protocol: `.cursor/plans/doctrine/agent_work_protocol.md`.
- This Control Plane remains the canonical authority/schema spine.
- Charter coordinates layers; Protocol governs runtime behavior. Neither owns control-plane schemas.
```

Stop-rule reference (no duplication):
- Confirm Protocol §9 stop-rule fields apply to architecture/build work packages.

---

## 3) `00_document_governance_and_taxonomy_2026-05-19.md` (route to Protocol §5)

### Placement
- Insert a short pointer block in routing/templates area.

### Insertion text
```markdown
## Artifact Routing Pointer (Non-Schema)

For artifact classification, intake, routing decision rules, narrative arc/addendum behavior, ADR/handoff minimums, and template/schema source map, see:
- `.cursor/plans/doctrine/agent_work_protocol.md` §3, §5, §8, §9.

Schemas remain canonical in their existing homes:
- decisions, evidence, guardrails, supersession/conflict, open review, catalog, read-graph.
```

---

## 4) `02_authority_routing_map.md` (notes-only clarifications)

### Update
- Update notes for the `narrative_or_postmortem` row to reflect lifecycle statuses (`active_open` | `snapshot_locked` | `closed_superseded_by:*`) and arc-vs-addendum rule.

### Replacement notes cell text
```markdown
Useful context; non-binding unless promoted. Use narrative-arc-vs-addendum rule and lifecycle statuses (`active_open`, `snapshot_locked`, `closed_superseded_by:*`) to decide append vs new volume. See `agent_work_protocol.md` §5.
```

---

## 5) `04_manifest_read_graph.md` (route block; no schema text)

### Placement
- Insert between `## Synchronization Check` and `## D0-REV-004 Ratification Matrix (Wave 3 Gate)`.

### Insertion text
```markdown
## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)

- Coordination Charter: `.cursor/plans/doctrine/00_omni_coordination_charter.md`.
- Agent Work Protocol: `.cursor/plans/doctrine/agent_work_protocol.md`.
- For implementation-lane prep, agents MUST consult `.cursor/plans/doctrine/future_work_registry.md` using lane/domain/surface tags.
- Routing behavior, retrieval set, and stop conditions defined in `agent_work_protocol.md` §6.
- If no matching rows: explicit `Future Work Registry checked; no matching rows found.` line is required in pre-edit checkpoint output.
```

---

## 6) `11_build_entry_gate_v0.md` (pre-edit admission pointer)

### Placement
- Insert between `## Foundational Composition Admission Checklist (Binding)` and `## Stop / Reroute Conditions`.

### Insertion text
```markdown
## Agent Work Protocol Admission (Binding)

Before implementation-lane admission, an agent MUST satisfy:
- protocol §1 boot,
- protocol §2 gate/work-package declaration,
- protocol §3 work classification (with destinations and update/create decisions),
- protocol §4 context loading via read-graph,
- protocol §6 build-entry retrieval (future work + open reviews + guardrails + relevant ADR/doctrine/domain anchors),
- protocol §9 stop-rule proof requirements.

Lane admission is blocked if any of these are omitted or fail to produce required outputs.

Reference: `.cursor/plans/doctrine/agent_work_protocol.md`.
```

No schema duplication: do not restate Protocol mechanics here.

---

## 7) New file: `.cursor/plans/doctrine/future_work_registry.md`

### Action (wiring only)
- Create canonical index file for deferred future work.
- Seed initial rows from known high-value cataloged `future_or_parked_watch`/`FUTURE_ARC_*` artifacts in the same approved execution pass.
- If full seeding deferred, create explicit open-review row `FWREG-REV-001` capturing remaining backlog scope, owner, and closure gate.

### Initial template (matches Protocol §6 Future Work Registry Contract)
```markdown
# Future Work Registry

Document type: `future_or_parked_watch`
Authority: non-binding parked/watch index unless promoted
Status: active
Domain(s): architecture_governance
Lifecycle role: parked scope index + build-entry retrieval source
Source-of-truth relationship: indexes deferred seams/capabilities and links deep-dive artifacts
Supersedes: scattered implicit future-work memory
Superseded by: none
Manifest action: add_tier2
Review gate: domain_owner_required

| work_id | item_type | title | domain_tags | lane_tags | affected_surfaces | status | why_not_now | what_to_preserve_now | promotion_trigger | build_entry_trigger | risk_if_forgotten | risk_if_built_too_early | related_docs | owner_or_review_gate | last_reviewed_at | next_review_condition |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
```

---

## 8) `01_master_corpus_catalog.md` (explicit rows for new artifacts)

### Required new/updated rows (use existing enums/style)
- `00_omni_coordination_charter.md`
  - category: `doctrine`
  - authority_level: `governance_binding`
  - manifest_action: `add_tier0`
  - notes must explicitly state: coordinates layers; does NOT own control-plane schemas.
- `agent_work_protocol.md`
  - category: `doctrine`
  - authority_level: `governance_binding` (runtime; non-schema authority)
  - manifest_action: `add_tier0`
  - notes must explicitly state: runtime child of Charter; not schema authority.
- `future_work_registry.md`
  - category: `future_or_parked_watch`
  - manifest_action: `add_tier2`
  - agent_read_rule: `consult_if_routed`
  - notes must indicate canonical parked-scope index with build-entry retrieval contract.
- Companion artifacts as Tier1 references:
  - `agent_work_protocol_compatibility_matrix_2026-05-22.md`
  - `agent_work_protocol_preservation_matrix_2026-05-22.md`
  - `agent_work_protocol_coverage_audit_2026-05-22.md`

Forbid enum invention. Match existing catalog style.

---

## 9) `08_open_review_queue.md` (unresolved gap rows, if not already covered)

Add rows using existing queue schema:
- `FWREG-REV-001` — Future Work Registry seeding backlog debt.
- `AWP-REV-GTC-001` — Governed temporary coherence wiring continuity verification.
- `AWP-REV-TAGS-001` — Canonical lane/domain/surface tag taxonomy decision.
- `AWP-REV-BUILDOS-OVERVIEW-001` — Future Build OS overview consolidation decision.
- `AWP-REV-CMDS-001` — Commands/tooling layer plan.
- `AWP-REV-TESTINV-001` — Canonical home for test/invariant registry.
- `AWP-REV-GLOSSARY-001` — Canonical home for glossary/canonical terminology.
- `AWP-REV-RUNBOOK-001` — Canonical home for runbooks/operational procedures.
- `AWP-REV-CAT-RG-001` — Catalog/read-graph lifecycle update enforcement decision.
- `AWP-REV-GAPS-001` — Open-review routing for unresolved mechanics policy.

If equivalent rows already exist, link instead of duplicate.

---

## 10) Source Material (Retained, Not Executed)

The following remain as historical source material:
- `.cursor/plans/doctrine/major_architecture_inflection_preservation_protocol_patch_spec_2026-05-22.md`
- `.cursor/plans/doctrine/governed_composition_integrity_patch_spec_2026-05-22.md`

These are NOT to be executed directly. The current wiring patch-spec is the canonical wiring path. Any deviation requires explicit Charter/Protocol revision.

---

## Validation Checklist (Before Execution)

- AGENTS insertion is concise (pointer only, no schema duplication).
- Control-plane insertion explicitly states non-supersession.
- Taxonomy insertion is a pointer; no schema duplication.
- Authority routing map notes-cell update is minimal and accurate.
- Read-graph routing block is operational, not schema-defining.
- Build Entry Gate insertion is admission pointer to Protocol, not protocol restatement.
- Future Work Registry created/seeded or explicit `FWREG-REV-001` debt row opened.
- Catalog rows added with correct enums and notes.
- Open review rows added for unresolved gaps.
- Coverage audit will be updated post-execution to reflect statuses moving from `mapped_partial` / `unresolved_gap` to `mapped` or `tracked_open_review`.

---

## Execution Plan (When Approved Later)

1. Apply pointer-only AGENTS insertion.
2. Apply control-plane non-supersession clause.
3. Apply taxonomy + authority routing + read-graph pointers.
4. Apply Build Entry Gate admission pointer.
5. Create `future_work_registry.md`; seed or open `FWREG-REV-001`.
6. Insert catalog rows for Charter/Protocol/Registry/matrices/audit.
7. Insert/link open-review rows for unresolved gaps.
8. Update coverage audit statuses post-wiring.
9. Return diffs and stop with proof.

---

## Unresolved Assumptions

1. Final exact insertion anchors in each target doc to be confirmed during execution.
2. Whether some unresolved-gap rows already exist with equivalent scope (link vs new).
3. Exact format-equivalence with existing catalog enum variants to be verified pre-execution.
4. Whether any of the deferred items (tag taxonomy, runbook/glossary/test-invariant homes) should be created as stub artifacts during the same execution or stay as open-review only.

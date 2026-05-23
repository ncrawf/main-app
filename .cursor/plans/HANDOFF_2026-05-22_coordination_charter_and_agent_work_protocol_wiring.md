# HANDOFF — 2026-05-22 — Coordination Charter + Agent Work Protocol Wiring Installed

**Read this first when picking up where this session left off.** This handoff conforms to Agent Work Protocol §5.3 (Handoff Minimum Contents) and §9 (Stop Report).

---

## 1) State Snapshot and Scope Complete

The OMNI Coordination Charter + Agent Work Protocol framework was installed via the canonical wiring patch-spec. Prior scattered patch-spec content is retained as source material, not executed.

What is now live / authoritative by role:
- Coordination Charter at `.cursor/plans/doctrine/00_omni_coordination_charter.md` — Tier-0 coordination doctrine; governance-binding for layer boundaries and precedence; coordinates layers; does NOT own control-plane schemas.
- Agent Work Protocol at `.cursor/plans/doctrine/agent_work_protocol.md` — Tier-0 runtime SOP; governance-binding for agent execution behavior; NON-schema authority.
- Future Work Registry at `.cursor/plans/doctrine/future_work_registry.md` — Tier-2 canonical parked-scope index; rows remain non-binding parked/watch unless explicitly promoted; live as the retrieval target for build-entry tag-based lookup.
- Wiring patches landed in AGENTS, control plane, document governance taxonomy, authority routing map, read graph, and Build Entry Gate — all as pointer/enforcement insertions (no schema duplication).
- Catalog rows added for Charter, Protocol, Future Work Registry, compatibility matrix, preservation matrix, coverage audit, wiring patch-spec, and this handoff.
- Open Review Queue rows added for unresolved mechanics gaps.
- Coverage audit updated with post-wiring statuses.

What is NOT executed and remains source material:
- `.cursor/plans/doctrine/major_architecture_inflection_preservation_protocol_patch_spec_2026-05-22.md` (large prior patch-spec, retained as source only).
- `.cursor/plans/doctrine/governed_composition_integrity_patch_spec_2026-05-22.md` (retained as source only).

---

## 2) Files Changed (This Wiring Pass)

Edits (additive, pointer-only):
- `AGENTS.md` — added `## OMNI Coordination Charter and Agent Work Protocol (Mandatory)`.
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` — added `## Coordination Charter Pointer (Non-Superseding)` after `## Mandatory Boot Sequence`.
- `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md` — added `## 4.1) Artifact Routing Pointer (Non-Schema)` before round-close hygiene.
- `.cursor/plans/doctrine/02_authority_routing_map.md` — updated `narrative_or_postmortem` notes cell with lifecycle/arc rule + protocol §5 reference.
- `.cursor/plans/doctrine/04_manifest_read_graph.md` — added `## Charter + Protocol + Future Work Retrieval (Build-Entry Routing)`.
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md` — added `## Agent Work Protocol Admission (Binding)` between Foundational Composition Admission Checklist and Stop/Reroute Conditions.
- `.cursor/plans/doctrine/01_master_corpus_catalog.md` — added 8 catalog rows (Charter, Protocol, Future Work Registry, compatibility matrix, preservation matrix, coverage audit, wiring patch-spec, and this handoff).
- `.cursor/plans/doctrine/08_open_review_queue.md` — added 10 open-review rows.
- `.cursor/plans/doctrine/agent_work_protocol_coverage_audit_2026-05-22.md` — post-wiring status update.

New files:
- `.cursor/plans/doctrine/future_work_registry.md`
- `.cursor/plans/HANDOFF_2026-05-22_coordination_charter_and_agent_work_protocol_wiring.md` (this file)

Tier-0 + Tier-1 + Tier-2 charter/protocol artifacts created earlier in this arc:
- `.cursor/plans/doctrine/00_omni_coordination_charter.md`
- `.cursor/plans/doctrine/agent_work_protocol.md`
- `.cursor/plans/doctrine/agent_work_protocol_compatibility_matrix_2026-05-22.md`
- `.cursor/plans/doctrine/agent_work_protocol_preservation_matrix_2026-05-22.md`
- `.cursor/plans/doctrine/agent_work_protocol_coverage_audit_2026-05-22.md`
- `.cursor/plans/doctrine/agent_work_protocol_wiring_patch_spec_2026-05-22.md`

No runtime/code/schema/migration files were edited.

---

## 3) Verification / Proof Outputs Run

Integrity sweep performed (read-only):
- All artifact references resolve across:
  - AGENTS.md
  - control-plane
  - taxonomy
  - authority routing map
  - read graph
  - Build Entry Gate
  - catalog
  - open review queue
  - coverage audit
  - charter, protocol, registry
- All inserted open-review IDs (`FWREG-REV-001`, `AWP-REV-GTC-001`, `AWP-REV-TAGS-001`, `AWP-REV-BUILDOS-OVERVIEW-001`, `AWP-REV-CMDS-001`, `AWP-REV-TESTINV-001`, `AWP-REV-GLOSSARY-001`, `AWP-REV-RUNBOOK-001`, `AWP-REV-CAT-RG-001`, `AWP-REV-GAPS-001`) are present and queryable.
- `ReadLints` clean on all edited files.

Deferred proof (explicit):
- End-to-end agent dry-run against a live work package is deferred until next gate (proposed below). The framework is installed but has not been exercised by a real agent run yet.

---

## 4) Settled Decisions (Do NOT Re-Litigate)

These were settled across the multi-session arc and must not be reopened without explicit governance review.

| decision | settlement |
|---|---|
| Layer hierarchy | Coordination Charter > Control Plane (authority/schema) + Build OS (execution/gates) + Agent Work Protocol (runtime SOP) + AGENTS (boot pointer) + commands (ergonomic) |
| Charter vs Control Plane | Charter coordinates layers; does NOT supersede `00_architecture_memory_control_plane.md`; both Tier-0 with explicit non-supersession clause |
| Protocol authority | Governance-binding for runtime behavior; NON-schema authority; routes schema-governed ops to canonical control-plane artifacts |
| AGENTS shape | Concise pointer/enforcement only; no schema or full-protocol duplication |
| Future Work Registry name | `Future Work Registry` (covers seams + features/capabilities via `item_type`), not seam-only |
| No-empty registry rule | Seed initial high-value rows or open explicit debt row; empty registry is non-compliant |
| Build-entry retrieval set | Must include future work + open review + guardrail + ADR/doctrine/domain anchors by lane/domain/surface tags |
| Row-first / document-second | Default to updating existing row/section; new doc only when row/section insufficient or artifact is locked |
| Narrative behavior | Arc vs addendum + lifecycle statuses (`active_open` / `snapshot_locked` / `closed_superseded_by:*`); non-binding rationale only |
| Old patch-specs | Retained as source material; NOT to be executed directly |
| Coverage audit gate | Wiring may not proceed unless every mechanic is mapped, mapped_partial with tracking, or open-review tracked |

---

## 5) Unresolved Assumptions / Open Items

All open items are now tracked in `08_open_review_queue.md`:
- `FWREG-REV-001` — Future Work Registry initial seeding backlog (architecture_steward_required).
- `AWP-REV-GTC-001` — Governed temporary coherence wiring continuity verification.
- `AWP-REV-TAGS-001` — Canonical lane/domain/surface tag taxonomy decision.
- `AWP-REV-BUILDOS-OVERVIEW-001` — Future OMNI Build OS overview consolidation decision.
- `AWP-REV-CMDS-001` — Commands/tooling layer plan.
- `AWP-REV-TESTINV-001` — Canonical home for test/invariant registry.
- `AWP-REV-GLOSSARY-001` — Canonical home for glossary/canonical terminology.
- `AWP-REV-RUNBOOK-001` — Canonical home for runbooks/operational procedures.
- `AWP-REV-CAT-RG-001` — Catalog/read-graph lifecycle update enforcement decision.
- `AWP-REV-GAPS-001` — Open-review routing policy confirmation.

Charter-level deferred items:
- Build OS overview consolidation remains an emergent layer; current decomposition across `09_omni_build_os_layer_model.md`, `10_omni_build_os_rollout_sequence.md`, and `11_build_entry_gate_v0.md` continues until `AWP-REV-BUILDOS-OVERVIEW-001` closes.

---

## 6) Next Gate (Recommended Sequence)

The framework is installed. The next gate should be **validation by exercise**, not more conceptual work.

Recommended order:

1. **Dry-run validation pass** (priority).  
   Pick a small, real upcoming work package (e.g., the next narrow scheduling-adjacent slice or any small architecture decision in queue) and have an agent execute the Agent Work Protocol against it end-to-end. This validates:
   - boot reads the right docs,
   - gate/work package identification works,
   - classification + routing produce real artifact updates,
   - context loading by tag actually retrieves matching rows,
   - build-entry retrieval set is satisfied,
   - stop report fields are produced and complete.
   
   Output: a stop-report artifact that proves the loop ran, plus updates to coverage audit / open-review rows touched by the dry-run.

2. **Resolve `AWP-REV-TAGS-001` (canonical tag taxonomy)**.  
   Tag-based retrieval is load-bearing for build-entry; without canonical tag vocabulary, retrieval is unreliable. Resolve before broader workstream execution.

3. **Seed `FWREG-REV-001` (Future Work Registry backlog)** opportunistically as build-entry retrieval is exercised in the dry-run.

4. **Consider closing `AWP-REV-BUILDOS-OVERVIEW-001`** by deciding whether to consolidate Build OS into one overview artifact or keep the current decomposition with hardened cross-references.

5. Remaining open-reviews (commands/tooling, test/invariant, glossary, runbook) are deferred until concrete need surfaces from dry-run findings.

---

## 7) Explicit Stop Condition

This handoff itself is the stop artifact for the coordination-wiring phase.

Stopping now. No further governance/runtime edits without:
- explicit next-gate selection (default: dry-run validation), and
- approval to proceed with that gate.

---

## 8) Reference Map (For Next Agent)

Mandatory reads on resume:
1. `AGENTS.md` (boot pointer)
2. `.cursor/plans/doctrine/00_omni_coordination_charter.md` (coordination doctrine)
3. `.cursor/plans/doctrine/agent_work_protocol.md` (runtime SOP)
4. `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` (authority/schema spine; non-superseded)
5. `.cursor/plans/doctrine/04_manifest_read_graph.md` (load relevant lane/domain routes)
6. `.cursor/plans/doctrine/11_build_entry_gate_v0.md` (if work involves implementation lane admission)
7. `.cursor/plans/doctrine/agent_work_protocol_coverage_audit_2026-05-22.md` (open status)
8. `.cursor/plans/doctrine/08_open_review_queue.md` (active debt rows)
9. `.cursor/plans/doctrine/future_work_registry.md` (consult by tags when work has lane/domain/surface match)

Companion artifacts (consult if routed):
- `.cursor/plans/doctrine/agent_work_protocol_compatibility_matrix_2026-05-22.md`
- `.cursor/plans/doctrine/agent_work_protocol_preservation_matrix_2026-05-22.md`
- `.cursor/plans/doctrine/agent_work_protocol_wiring_patch_spec_2026-05-22.md`

Source material (do NOT execute):
- `.cursor/plans/doctrine/major_architecture_inflection_preservation_protocol_patch_spec_2026-05-22.md`
- `.cursor/plans/doctrine/governed_composition_integrity_patch_spec_2026-05-22.md`

---

## 9) Stop Report Fields (Per Agent Work Protocol §9)

- gate/work package declaration: coordination-wiring phase (no implementation lane).
- files changed: see §2 above.
- proof/tests run: integrity sweep + ReadLints (clean). End-to-end dry-run deferred per §6.
- artifact routing checklist results: pointer wiring + catalog/read-graph/open-review updates applied; no schema duplication; no parallel formats introduced.
- lifecycle updates applied: coverage audit transitioned mapped/mapped_partial/open-review-tracked counts; unresolved gaps routed.
- unresolved assumptions/risks: see §5 above.
- `template_schema_references_used`: AGENTS, control plane, taxonomy, authority routing map, read graph, build entry gate, catalog, open review queue (all canonical schema homes).
- `schema_deviation`: none.
- `legacy_row_compatibility_notes`: not applicable in this pass.
- next gate: dry-run validation against a real upcoming small work package (see §6).
- runtime/code touch confirmation: none.

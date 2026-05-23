# Agent Work Protocol Coverage Audit

Document type: `handoff_or_readiness_gate`
Authority: pre-wiring coverage audit (draft_for_review)
Status: draft_for_review
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: no-loss checkpoint before wiring execution
Source-of-truth relationship: verifies that charter/protocol mechanics are preserved and mapped to enforcement artifacts; tracks unresolved gaps before governance edits
Supersedes: none
Superseded by: none
Manifest action: add_tier1
Review gate: user_knox_required

---

## Contract

Wiring may proceed only if every mechanic below is either:
- fully mapped to destination + enforcement artifact, or
- explicitly deferred with open-review tracking and risk disclosure.

---

## Coverage Table

| source_mechanic | status | destination | enforcement_artifact | if_deferred_open_review_id | risk_if_omitted |
|---|---|---|---|---|---|
| governed temporary coherence / composition discipline | mapped | system map + Build Entry Gate + LI doctrine §10.1 + guardrail digest + decision/evidence ledgers + Charter Layer Model + Protocol §6 | doctrine intact across binding destinations; Charter + Protocol pointer patches added surgically | none (closed via AWP-DOGFOOD-003) | control-plane drift to atom-only/storage-only behavior |
| narrative arc vs addendum + lifecycle status | mapped | `agent_work_protocol.md` + wiring patch-spec | taxonomy pointer (4.1) + authority routing notes cell updated | none | narrative ambiguity / accidental authority drift |
| artifact intake gate | mapped | `agent_work_protocol.md` | AGENTS pointer + taxonomy pointer (4.1) | none | ad-hoc artifact creation and routing drift |
| row-first/document-second | mapped | `agent_work_protocol.md` | taxonomy pointer (4.1) | none | doc sprawl and memory fragmentation |
| ADR trigger + minimum sections | mapped | `agent_work_protocol.md` | taxonomy pointer (4.1) + ADR pattern references | none | decisions buried in narrative/notes |
| handoff minimum structure | mapped | `agent_work_protocol.md` | taxonomy pointer (4.1) + stop report checks | none | continuity loss and re-litigation |
| future work registry (seams + capabilities) | mapped | protocol + new registry artifact | `future_work_registry.md` created + read-graph + build-entry pointer | none (`FWREG-REV-001` tracks seeding backlog only) | deferred features/seams get lost |
| no-empty future work registry | mapped | protocol + new registry + closed open-review | registry seeded with FWREG-001..FWREG-004 from known parked artifacts; `FWREG-REV-001` closed; incremental additions tracked per Future Work Lifecycle Rule | none (closed via AWP-DOGFOOD-002) | false safety from empty registry |
| build-entry retrieval set (future/open-review/guardrail/ADR-doctrine-domain) | mapped | `agent_work_protocol.md`; compatibility matrix | build-entry gate admission pointer added; read-graph block added | none | lane admission without context proof |
| lifecycle anti-staleness (promote/close/reject/supersede/prune) | mapped | charter + protocol + Control Plane Lifecycle Closure section | control-plane Lifecycle Closure + protocol §8 + stop-report contract; role split explicit (Charter coordination / Protocol enforcement / Control Plane routing+schema) | none (closed via P1-B execution) | stale artifacts become pseudo-current truth |
| catalog/read-graph lifecycle updates | mapped | protocol §8 + Control Plane Lifecycle Closure section | Control Plane Lifecycle Closure section includes "Catalog / read graph: current vs stale routing/authority updates"; AWP-REV-CAT-RG-001 closed | none (closed via P1-B execution) | stale authority routing and onboarding confusion |
| open-review routing for unresolved mechanics | mapped | protocol §8 + open-review rows added | `08_open_review_queue.md` updated with `FWREG-REV-001` + `AWP-REV-*` | `AWP-REV-GAPS-001` (policy confirmation) | unresolved governance debt goes invisible |
| stop report proof/routing/lifecycle contract | mapped | protocol §9 | AGENTS pointer + control-plane stop-rule reference | none | silent incomplete closures |
| AGENTS concise pointer-only model | mapped | charter + AGENTS pointer-only insertion | AGENTS wiring complete (pointer block, no schema duplication) | none | AGENTS bloat and conflicting manuals |
| schema discipline (no parallel schema homes) | mapped | charter + protocol | control-plane non-supersession clause inserted | none | schema divergence across docs |
| tag taxonomy source for lane/domain/surface | mapped | `.cursor/plans/doctrine/agent_work_protocol_tag_taxonomy.md` | canonical vocabulary doc + read-graph pointer + closed `AWP-REV-TAGS-001` | none (closed via AWP-DOGFOOD-001) | inconsistent retrieval behavior |
| build OS overview consolidation (future) | unresolved_gap | open-review tracked | `AWP-REV-BUILDOS-OVERVIEW-001` open in `08_open_review_queue.md` | `AWP-REV-BUILDOS-OVERVIEW-001` | conceptual drift between rollout/gate/protocol docs |
| commands/tooling operationalization | unresolved_gap | open-review tracked | `AWP-REV-CMDS-001` open in `08_open_review_queue.md` | `AWP-REV-CMDS-001` | manual-only workflow, poor repeatability |
| test/invariant registry home | unresolved_gap | open-review tracked | `AWP-REV-TESTINV-001` open in `08_open_review_queue.md` | `AWP-REV-TESTINV-001` | proof obligations not discoverable |
| glossary/canonical terminology home | unresolved_gap | open-review tracked | `AWP-REV-GLOSSARY-001` open in `08_open_review_queue.md` | `AWP-REV-GLOSSARY-001` | naming drift and primitive confusion |
| runbook/operational procedure home | unresolved_gap | open-review tracked | `AWP-REV-RUNBOOK-001` open in `08_open_review_queue.md` | `AWP-REV-RUNBOOK-001` | procedural drift and brittle handoffs |

---

## Gate Outcome (Post-Wiring + Post-Dogfood 001 + 002 + 003 + P1-B Restructure)

- Mechanics mapped: 17 (+1 after `AWP-REV-CAT-RG-001` closure via Control Plane Lifecycle Closure section installation)
- Mapped partial: 0
- Unresolved gaps tracked via explicit open-review rows: 5
  - `AWP-REV-BUILDOS-OVERVIEW-001`
  - `AWP-REV-CMDS-001`
  - `AWP-REV-TESTINV-001`
  - `AWP-REV-GLOSSARY-001`
  - `AWP-REV-RUNBOOK-001`
  - (plus `AWP-REV-GAPS-001` confirming open-review routing policy)

Four open-review IDs now resolved:
- `AWP-REV-TAGS-001` closed via `AWP-DOGFOOD-001` (tag taxonomy published).
- `FWREG-REV-001` closed via `AWP-DOGFOOD-002` (registry seeded with 4 known parked artifacts).
- `AWP-REV-GTC-001` closed via `AWP-DOGFOOD-003` (GCI continuity verified; surgical Charter+Protocol pointers added).
- `AWP-REV-CAT-RG-001` closed via `P1-B execution` (Control Plane Lifecycle Closure section installed with explicit catalog/read-graph current-vs-stale clause and role split).

Reference:
- `.cursor/plans/doctrine/agent_work_protocol_wiring_patch_spec_2026-05-22.md`
- `.cursor/plans/doctrine/agent_work_protocol_tag_taxonomy.md`
- `.cursor/plans/doctrine/future_work_registry.md` (FWREG-001..FWREG-004 seeded)
- `.cursor/plans/doctrine/00_omni_coordination_charter.md` (Build OS layer entry includes GCI pointer)
- `.cursor/plans/doctrine/agent_work_protocol.md` §6 (Composition Discipline Pointer)
- `.cursor/plans/doctrine/architecture_memory_control_plane_restructure_patch_spec_2026-05-22.md` (P1-B v2)
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` (restructured 2026-05-22; Lifecycle Closure section installed)
- `.cursor/plans/HANDOFF_2026-05-22_coordination_charter_and_agent_work_protocol_wiring.md`

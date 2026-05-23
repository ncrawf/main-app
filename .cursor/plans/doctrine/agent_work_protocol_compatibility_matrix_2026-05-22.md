# Agent Work Protocol Compatibility Matrix

Document type: `handoff_or_readiness_gate`
Authority: proposed enforcement mapping (draft_for_review)
Status: draft_for_review
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: compatibility proof between protocol steps and enforcement homes
Source-of-truth relationship: companion to `00_omni_coordination_charter.md` and `agent_work_protocol.md`; does not override canonical schema or gate files
Supersedes: none
Superseded by: none
Manifest action: add_tier1
Review gate: user_knox_required

---

## Loop-Step Matrix (Load-Bearing)

| loop_step | protocol_section | enforcing_artifact(s) | enforcement_type | current_state | notes |
|---|---|---|---|---|---|
| Boot | `agent_work_protocol.md` §1 | `AGENTS.md`; `04_manifest_read_graph.md`; `00_omni_coordination_charter.md` | pointer + required load path | needs_wiring | AGENTS must stay concise while making protocol mandatory. |
| Identify current gate/work package | `agent_work_protocol.md` §2 | `11_build_entry_gate_v0.md`; Build OS rollout docs | gate declaration + lane targeting | partial | Wiring needed to make declaration explicit precondition. |
| Classify work | `agent_work_protocol.md` §3 | `00_document_governance_and_taxonomy_2026-05-19.md`; control-plane routing docs | classification discipline | partial | Needs explicit reference wiring for class-to-destination behavior. |
| Load context | `agent_work_protocol.md` §4 | `04_manifest_read_graph.md`; `02_authority_routing_map.md`; relevant Tier0/Tier1 routes | route enforcement | existing + needs_wiring | Retrieval set must include future work/open review/guardrail anchors. |
| Artifact intake/routing | `agent_work_protocol.md` §5 | control-plane ledgers/catalog + taxonomy + routing map | routing + schema discipline | draft + needs_wiring | No parallel schema formats rule must be enforced. |
| Build-entry checks | `agent_work_protocol.md` §6 | `11_build_entry_gate_v0.md`; future work registry; open review queue; guardrail digest | blocking admission checks | partial | Needs gate-level explicit retrieval requirement wiring. |
| Execute within scope | `agent_work_protocol.md` §7 | AGENTS scope constraints + gate conditions | scope control | partial | Harden with pointer enforcement and gate checks. |
| Lifecycle maintenance | `agent_work_protocol.md` §8 | control-plane lifecycle artifacts (`01/04/05/08` + future work registry) | post-work disposition | partial | Needs explicit closure obligations in wiring pass. |
| Proof/stop report | `agent_work_protocol.md` §9 | AGENTS + control-plane stop-rule references | completion proof | partial | Must be mandatory for architecture/build package closure. |
| Non-loss validation | `agent_work_protocol.md` §10 + preservation matrix | preservation matrix + review gate | anti-loss governance | draft | Prevents summary compression and silent mechanic drops. |
| Governed temporary coherence linkage | source doctrine + protocol/charter references | system map + build-entry + wiring patch-spec | doctrine/gate continuity | partial | Must remain explicit in wiring so composition discipline is not lost. |
| Protocol freshness triggers | `00_omni_coordination_charter.md` | charter review triggers + open-review handling | anti-staleness | draft | Ensures protocol stays current after gate/read-graph/schema changes. |
| Tag taxonomy source for lane/domain/surface | protocol context/build-entry steps | read-graph/build-entry/protocol canonicalization target | retrieval consistency | unresolved_gap | Requires explicit canonical tag vocabulary decision or tracked open-review item. |

## Layer Boundary Matrix

| layer | owning_artifact | owns | does_not_own |
|---|---|---|---|
| Coordination | `00_omni_coordination_charter.md` | layer boundaries, precedence, interface contracts | schema definitions, gate detail internals |
| Control Plane | `00_architecture_memory_control_plane.md` and linked ledgers/maps | authority, routing, schema homes, unresolved/supersession memory | runtime SOP sequencing |
| Build OS | rollout + build-entry artifacts | staged/gated execution, admission/proof expectations | authority schema ownership |
| Agent Runtime | `agent_work_protocol.md` | required agent loop | top-layer coordination doctrine authority |

---

## Non-Conflict Assertion

This matrix asserts:
- Charter coordinates layers,
- Control plane remains authority/schema spine,
- Build OS artifacts remain execution gate authorities,
- Agent Work Protocol remains runtime SOP,
- AGENTS remains concise pointer surface.

Any wiring edit that violates this split fails compatibility review.

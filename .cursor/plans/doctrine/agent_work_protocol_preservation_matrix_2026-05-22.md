# Agent Work Protocol Preservation Matrix

Document type: `handoff_or_readiness_gate`
Authority: non-loss validation matrix (draft_for_review)
Status: draft_for_review
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: preserved/deferred/demoted accounting for hard-won mechanics
Source-of-truth relationship: validates that Charter/Protocol drafts preserve accepted mechanics from source material; does not supersede canonical artifacts
Supersedes: none
Superseded by: none
Manifest action: add_tier1
Review gate: user_knox_required

---

## Matrix Contract

| mechanic | status | destination | reason | recovery_trigger |
|---|---|---|---|---|
| Artifact Intake Gate | preserved | `agent_work_protocol.md` §3, §5 | Runtime classification is required before write actions | n/a |
| Row-First, Document-Second | preserved | `agent_work_protocol.md` §5 | Prevents artifact sprawl and random standalone docs | n/a |
| Narrative arc vs addendum | preserved | `agent_work_protocol.md` §5 (routing class) + source for wiring phase | Kept as required routing class; detailed wiring remains next phase | Wiring patch-spec review gate |
| Narrative lifecycle statuses | preserved | `agent_work_protocol.md` §5 (Narrative Handling Rule) + wiring phase targets | Lifecycle statuses and arc decision now explicitly required in protocol draft | n/a |
| ADR trigger + minimum sections | preserved | `agent_work_protocol.md` §5 + source patch-spec | Preserved as routing requirement and retained source detail for wiring | n/a |
| Handoff minimum structure | preserved | `agent_work_protocol.md` §5, §9 + source patch-spec | Preserved as continuity routing + stop report expectations | n/a |
| Canonical schema discipline | preserved | `agent_work_protocol.md` §5 + charter precedence | No parallel schemas allowed; control-plane schema homes remain canonical | n/a |
| Future Work Registry (seams + capabilities) | preserved | `agent_work_protocol.md` §6/§8 + source patch-spec | Preserved explicitly as runtime retrieval/lifecycle domain | n/a |
| No empty Future Work Registry (seed or debt) | preserved | `agent_work_protocol.md` §6 (Future Work Registry Contract) + wiring phase targets | No-empty rule now explicit in protocol draft; enforcement wiring still pending | n/a |
| Build-entry retrieval set (future work + open review + guardrail + ADR/doctrine/domain anchors) | preserved | `agent_work_protocol.md` §6 | Explicitly preserved as pre-edit requirement | n/a |
| Lifecycle anti-staleness (promote/close/reject/supersede/prune) | preserved | charter lifecycle contract + `agent_work_protocol.md` §8 | Explicitly preserved as mandatory post-work disposition | n/a |
| Catalog + read-graph lifecycle updates | preserved | `agent_work_protocol.md` §8 + compatibility matrix rows | Preserved as lifecycle requirement; concrete wiring in next phase | `reframe-patch-spec` task completion |
| Open-review rows for unresolved mechanics gaps | preserved | `agent_work_protocol.md` §8 (Open Review Gap Routing Rule) + wiring phase targets | Protocol now requires explicit open-review routing when canonical-home gaps remain | n/a |
| Stop report with proof/routing/lifecycle/unresolved risk | preserved | `agent_work_protocol.md` §9 | Preserved with explicit required fields | n/a |
| AGENTS concise pointer-only enforcement | preserved | charter layer model + compatibility matrix | Preserved as explicit non-bloat principle | n/a |
| No runtime/governance edits without approval | preserved | charter purpose + protocol scope constraints | Maintained in drafting gate and compatibility notes | n/a |

---

## Source Material Anchors

Primary source inputs validated against this matrix:
- `.cursor/plans/doctrine/major_architecture_inflection_preservation_protocol_patch_spec_2026-05-22.md`
- `.cursor/plans/doctrine/governed_composition_integrity_patch_spec_2026-05-22.md`
- governed composition ratification mechanics and follow-on routing/gate hardening decisions

---

## Validation Result (Draft Phase)

- Preserved: 15
- Deferred: 0
- Demoted: 0

No items are deferred in this draft pass. Wiring/execution enforcement remains pending separately from preservation status. Any demotion in future drafts requires explicit row update with reason and recovery trigger.

Implementation and wiring-phase unresolved gaps are tracked separately in:
`.cursor/plans/doctrine/agent_work_protocol_coverage_audit_2026-05-22.md`.

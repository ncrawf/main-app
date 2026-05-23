# OMNI Authority Routing Map

Document type: `doctrine`
Authority: Binding map for category -> canonical home -> read/update/retirement behavior
Status: Skeleton (Phase 0)
Domain(s): architecture_governance
Lifecycle role: Routing and authority contract
Source-of-truth relationship: Determines permanent destination and authority semantics for classified files/decisions
Supersedes: ad-hoc routing assumptions
Superseded by: none
Manifest action: Tier 0 governance entrypoint
Review gate: User/Knox approval required before routing enforcement

---

## Routing Contract Table

| category | canonical_home | binding_allowed | read_rule | update_rule | retirement_rule | notes |
|---|---|---|---|---|---|---|
| manifest_or_catalog | designated control-plane/system-map artifacts | yes | tier0_mandatory or domain_mandatory per read-graph | update through control-plane governance | supersede with explicit pointer only | Includes catalog/read graph/supersession queue ledgers. |
| doctrine | doctrine files and lock anchors referenced by system map | yes | tier0_mandatory, tier05_visible, or domain_mandatory | requires review gate; update with supersession linkage | supersede with explicit `superseded_by` | Includes control-plane doctrine and domain doctrine. |
| adr | `docs/architecture/*adr*` (single decision records) | yes | domain_mandatory when routed | new ADR or amend via governance review | never silent retire; supersede by newer ADR | One major decision per ADR. |
| domain_rule_slice | per-domain rule files | yes | domain_mandatory | domain-owner + architecture review | supersede with domain successor pointer | Build-facing domain constraints. |
| canon_digest | derived companion docs | no (derived only) | consult_if_routed | citation-bound updates only | supersede when routed into canonical homes | Cannot originate new binding doctrine. |
| audit_or_pressure_test | audits, pressure tests, thought experiments | no by default | consult_if_routed | append or supersede with resolution links | historical/archive once routed | Can produce decisions; decisions must be routed out. |
| evidence_or_ingestion | ingestion/evidence files | no by default | consult_if_routed | evidence-ledger routing required | retire/archive after routing where appropriate | Evidence source, not direct doctrine. |
| narrative_or_postmortem | narratives/postmortems | no by default | historical_only or consult_if_routed | update as rationale/history only | historical retention with supersession notes | Useful context; non-binding unless promoted. Use narrative-arc-vs-addendum rule and lifecycle statuses (`active_open`, `snapshot_locked`, `closed_superseded_by:*`) to decide append vs new volume. See `agent_work_protocol.md` §5. |
| handoff_or_readiness_gate | handoffs/build contracts/readiness gates | conditional | consult_if_routed | process into catalog/decision/review ledgers | demote to history once processed | Handoffs are continuity, not canonical memory. |
| future_or_parked_watch | future watch/deferred docs | no by default | consult_if_routed | move to review queue when activated | archive with pointer if obsolete | Prevents accidental activation without review gate. |
| needs_classification | temporary unresolved category | no | do_not_treat_as_binding | must resolve before authority use | n/a | Explicitly provisional. |


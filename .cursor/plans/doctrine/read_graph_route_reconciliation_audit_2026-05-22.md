# Read Graph Route Reconciliation Audit

Document type: `handoff_or_readiness_gate`
Authority: read-only reconciliation audit (no edits executed in this artifact)
Status: active
Domain(s): architecture_governance, read_routing
Lifecycle role: read-only diagnostic of read-graph route content correctness; P2 execution prerequisite
Source-of-truth relationship: audits current `04_manifest_read_graph.md` route content against `01_master_corpus_catalog.md` tier classifications and current Tier-0 meta-OS artifacts; does not modify the audited document
Supersedes: none
Superseded by: none
Manifest action: add_tier2
Review gate: user_knox_required

---

## Purpose

The P2 patch-spec proposes a structural split of `04_manifest_read_graph.md` (current routing → main file; wave history → appendix). But the patch-spec **preserves current-state route content verbatim**, which means any **missing, stale, or broken route in the current Domain Routing Table will survive the split**.

This audit verifies whether the current route content is complete and correct **before** the split happens. The split is meant to clean the container; this audit checks the contents.

---

## Audit Inputs

- `.cursor/plans/doctrine/01_master_corpus_catalog.md` (all `add_tier0` + `add_tier1` rows)
- `.cursor/plans/doctrine/04_manifest_read_graph.md` (current Domain Routing Table v1, D0-REV-004 matrix, Charter+Protocol+Future Work Retrieval block, Current-State Truth Pointer)
- `AGENTS.md` (Non-Negotiables + OMNI Operating References)
- `.cursor/plans/doctrine/00_omni_coordination_charter.md` (Layer Model)
- `.cursor/plans/doctrine/agent_work_protocol.md` (boot artifact requirements §1)
- `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` (Boot-Path Synchronization Requirement)
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md` (Governing Read Path)
- `.cursor/plans/doctrine/future_work_registry.md` (retrieval contract)
- `.cursor/plans/doctrine/08_open_review_queue.md` (open review items affecting gates)

---

## Tier 0 Reconciliation (Catalog → Read Graph)

For each `add_tier0` row in catalog, verify whether it appears in the read graph's current routing surfaces (Domain Routing Table Tier 0 path, Current-State Truth Pointer, Charter+Protocol+Future Work block, Boot Rule Link, or per-workstream Tier 1 binding sets).

| catalog row | catalog tier | catalog read rule | in DRT Tier 0 path? | in CSP / pointer sections? | gap class |
|---|---|---|---|---|---|
| `AGENTS.md` | tier0_mandatory | tier0_mandatory | ✅ yes | n/a | none |
| `CLAUDE.md` | tier0_mandatory | tier0_mandatory | ❌ no | ❌ no | **missing** |
| `.cursor/plans/system_map_three_layers_60706286.plan.md` | tier0_mandatory | tier0_mandatory | ❌ no | ✅ Current-State Truth Pointer (as system-map binding anchor); referenced as Tier 1 in some workstream binding sets | **partial — not in Tier 0 path bundle** |
| `.cursor/plans/doctrine/00_omni_coordination_charter.md` | tier0_mandatory | tier0_mandatory | ❌ no | ✅ Charter+Protocol+Future Work Retrieval block | **partial — Charter is Tier 0 but DRT bundle excludes it** |
| `.cursor/plans/doctrine/agent_work_protocol.md` | tier0_mandatory | tier0_mandatory | ❌ no | ✅ Charter+Protocol+Future Work Retrieval block | **partial — Protocol is Tier 0 but DRT bundle excludes it** |
| `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` | tier0_mandatory | tier0_mandatory | ✅ yes | ✅ Boot Rule Link | none |
| `.cursor/plans/doctrine/00_doctrine_manifest.md` | tier0_mandatory | tier0_mandatory | ❌ no | ⚠️ appears in some workstream Tier 1 binding sets as `00_doctrine_manifest.md` | **misclassified — listed as Tier 1 binding in DRT despite being Tier 0 in catalog** |
| `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md` | tier0_mandatory | tier0_mandatory | ❌ no | ❌ no | **missing** |
| `.cursor/plans/doctrine/01_master_corpus_catalog.md` | tier0_mandatory | tier0_mandatory | ✅ yes | n/a | none |
| `.cursor/plans/doctrine/02_authority_routing_map.md` | tier0_mandatory | tier0_mandatory | ✅ yes | n/a | none |
| `.cursor/plans/doctrine/03_decision_extraction_ledger.md` | tier0_mandatory | tier0_mandatory | ❌ no | ❌ no | **missing** |
| `.cursor/plans/doctrine/04_manifest_read_graph.md` | tier0_mandatory | tier0_mandatory | ✅ yes (self) | n/a | none |
| `.cursor/plans/doctrine/05_supersession_conflict_ledger.md` | tier0_mandatory | tier0_mandatory | ✅ yes | n/a | none |
| `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | tier0_mandatory | tier05_visible | ❌ no | ❌ no — no explicit Tier 0.5 boot-visible routing in current DRT | **missing — no Tier 0.5 routing surface exists** |
| `.cursor/plans/doctrine/08_open_review_queue.md` | tier0_mandatory | tier0_mandatory | ✅ yes | n/a | none |
| `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md` | tier0_mandatory | tier0_mandatory | ❌ no | ❌ no | **missing entirely** |
| `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` | tier0_mandatory | tier0_mandatory | ❌ no | ⚠️ appears in D3/D5/D7 Tier 1 binding sets | **misclassified — Tier 0 in catalog but listed as Tier 1 in DRT** |
| `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | tier0_mandatory | tier0_mandatory | ❌ no | ⚠️ appears in CNS/Messaging Tier 1 binding sets | **misclassified — Tier 0 in catalog but listed as Tier 1 in DRT** |

### Tier 0 Gap Summary

- **Cleanly routed**: 7 of 18 (`AGENTS.md`, `00_architecture_memory_control_plane.md`, `01_master_corpus_catalog.md`, `02_authority_routing_map.md`, `04_manifest_read_graph.md`, `05_supersession_conflict_ledger.md`, `08_open_review_queue.md`).
- **Partial / not in DRT Tier 0 path bundle**: 3 (`system_map`, `Charter`, `Protocol`).
- **Misclassified — Tier 0 in catalog but routed as Tier 1**: 4 (`00_doctrine_manifest.md`, `00_index.md` scheduling matrix, `cns_action_orchestration_adr_2026-05-17.md`, plus arguably `06_guardrail_antipattern_digest.md` which is `tier05_visible` and has no Tier 0.5 surface).
- **Completely missing from read graph**: 4 (`CLAUDE.md`, `00_document_governance_and_taxonomy_2026-05-19.md`, `03_decision_extraction_ledger.md`, `coherent_omni_architecture_pattern_2026-05-17.md`).

---

## Tier 1 Reconciliation (Catalog → Read Graph)

For each `add_tier1` / `domain_mandatory` row in catalog, verify whether it appears in the appropriate workstream's Tier 1 binding set.

| catalog row | domain | in DRT Tier 1 binding set for that workstream? | gap class |
|---|---|---|---|
| `.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md` | d6_commerce | ⚠️ implicit — "review-gated D6 canonical docs per catalog routing" | **soft gap — not named directly** |
| `.cursor/plans/doctrine/DL-18_rbac_DRAFT_2026-05-17.md` | rbac / cross-cutting | ❌ no | **missing — RBAC has no workstream in DRT** |
| `.cursor/plans/doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md` | settings | ❌ no | **missing — settings has no workstream in DRT** |
| `.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md` | care coordination | ❌ no | **missing — care coordination has no workstream in DRT** |
| `.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md` | federation/topology | ❌ no | **missing — federation has no workstream in DRT (despite Day 0 activation per DL-21)** |
| `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md` | d7_documentation_evidence | ✅ yes — explicit in D7 Tier 1 binding set | none |
| `.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md` | care coordination (parked) | ❌ no | **missing — though noted as parked artifact** |
| `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` | longitudinal_intelligence | ✅ yes — covered by `longitudinal_intelligence_*.md` wildcard | none |
| `.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md` | cross-cutting preferences | ❌ no | **missing — but acceptable if treated as session-preference doc; flag for review** |
| `docs/ai-governance-policy.md` | ai_authority / cross-cutting | ❌ no | **missing — AI policy has no workstream in DRT** |
| `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` | build_os | ⚠️ Current-State Truth Pointer only | **partial — no per-workstream routing** |
| `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` | build_os | ⚠️ Current-State Truth Pointer only | **partial — no per-workstream routing** |
| `.cursor/plans/doctrine/11_build_entry_gate_v0.md` | build_entry_gate | ⚠️ Current-State Truth Pointer only | **partial — no per-workstream routing** |
| `.cursor/plans/doctrine/agent_work_protocol_tag_taxonomy.md` | architecture_governance | ⚠️ Charter+Protocol+Future Work Retrieval block only | **partial — should appear in per-workstream Tier 1 since it governs domain/lane/surface tags** |

### Tier 1 Gap Summary

- **Cleanly routed**: 2 (DL-22, LI doctrine via wildcard).
- **Soft gap (implicit)**: 1 (DL-17 D6 commerce).
- **Partial — referenced but not per-workstream**: 4 (Build OS layer model, rollout sequence, Build Entry Gate v0, Tag Taxonomy).
- **Completely missing from workstream routing**: 5+ (DL-18 rbac, DL-19 settings, DL-20 care coord, DL-21 federation, ai-governance-policy, future_care_obligations, user_knox_preferences).

The DRT has **7 workstreams** (CNS, D3, D5, D6, D7, Messaging, LI) but the corpus has explicit Tier 1 doctrine for **rbac, settings, care_coordination, federation, ai_governance**, none of which has a workstream in the DRT.

---

## Meta-OS Coverage (Newer Boot Layer)

Verify the Tier-0 meta-OS layer (Charter, Protocol, Build OS, Build Entry Gate, Future Work Registry, Tag Taxonomy) is fully represented in the read graph.

| meta-OS layer | catalog tier | in read graph? | gap class |
|---|---|---|---|
| Coordination Charter | tier0_mandatory | ⚠️ Charter+Protocol+Future Work Retrieval block only; **not** in Tier 0 path bundle of any workstream | **partial — needs Tier 0 path elevation** |
| Agent Work Protocol | tier0_mandatory | ⚠️ Charter+Protocol+Future Work Retrieval block only; **not** in Tier 0 path bundle of any workstream | **partial — needs Tier 0 path elevation** |
| OMNI Build OS (layer model) | add_tier1 / domain_mandatory | ⚠️ Current-State Truth Pointer only | **partial** |
| OMNI Build OS (rollout sequence) | add_tier1 / domain_mandatory | ⚠️ Current-State Truth Pointer only | **partial** |
| Build Entry Gate v0 | add_tier1 / domain_mandatory | ⚠️ Current-State Truth Pointer only | **partial — referenced in Charter+Protocol+Future Work block but not as per-workstream Tier 1 for implementation lanes** |
| Future Work Registry | add_tier2 / consult_if_routed | ✅ Charter+Protocol+Future Work Retrieval block + retrieval rule | none |
| Tag Taxonomy | add_tier1 / domain_mandatory | ⚠️ Charter+Protocol+Future Work Retrieval block only | **partial** |
| AGENTS.md restructure (Non-Negotiables, OMNI Operating References) | — | not explicitly routed (AGENTS itself is Tier 0) | none — AGENTS is already in every Tier 0 path bundle |

---

## Open Review Queue Routing

Verify whether unresolved open-review rows that could affect entry gates are visible in the read graph.

Currently open rows (per `08_open_review_queue.md` last verified state):
- `AWP-REV-BUILDOS-OVERVIEW-001`, `AWP-REV-CMDS-001`, `AWP-REV-TESTINV-001`, `AWP-REV-GLOSSARY-001`, `AWP-REV-RUNBOOK-001`, `AWP-REV-GAPS-001`.

Read graph routing: `08_open_review_queue.md` is in every workstream Tier 0 path bundle → all open rows are read-accessible by default. **No gap.**

---

## Stale / Broken Route Check

Verify all read-graph route entries point to existing, non-superseded documents.

| route entry path | exists? | superseded? | stale? |
|---|---|---|---|
| `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | ✅ | no | no |
| `.cursor/plans/system_map_three_layers_60706286.plan.md` | ✅ | no | no |
| `.cursor/plans/doctrine/00_doctrine_manifest.md` | ✅ | no | no |
| `.cursor/plans/doctrine/00_core_operating_physics_extraction_v0_2_2026-05-19.md` | ✅ | no | no |
| `docs/architecture/evolution_narrative*.md` (wildcard) | ✅ | partial (Volume 3 added) | no |
| `.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` | ✅ | no | no |
| `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` | ✅ | no | no |
| `.cursor/plans/doctrine/00_deep_memory_extraction_v0_2_2026-05-19.md` | ✅ | no | no |
| `.cursor/plans/THOUGHT_EXPERIMENT_2026-05-12_dl13_second_rail_stripe_adapter_sketch.md` | ✅ | no | no |
| `.cursor/plans/shipped_ontology_analysis_2026-05-10.md` | ✅ | no | no |
| `.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md` | ✅ | no | no |
| `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md` | ✅ | no | no |
| `.cursor/plans/doctrine/longitudinal_intelligence_*.md` (wildcard) | ✅ | no | no |

No broken route entries detected. All current routes resolve to existing files.

---

## Tier Misclassification (Catalog vs Read Graph)

Several catalog `add_tier0` docs are routed as Tier 1 (binding set) in the read graph workstream table. This is not necessarily wrong (catalog tier = manifest action; DRT tier = workstream-load-order), but the inconsistency should be acknowledged:

| doc | catalog | DRT placement | resolution required? |
|---|---|---|---|
| `00_doctrine_manifest.md` | add_tier0 / tier0_mandatory | Tier 1 binding set in multiple workstreams | yes — elevate to Tier 0 path bundle, or document why Tier 1 placement is correct |
| `00_index.md` (scheduling) | add_tier0 / tier0_mandatory | Tier 1 binding set in D3/D5/D7 | yes — clarify whether scheduling matrix is universal Tier 0 or domain Tier 1 |
| `cns_action_orchestration_adr_2026-05-17.md` | add_tier0 / tier0_mandatory | Tier 1 binding set in CNS/Messaging | yes — clarify whether CNS ADR is universal Tier 0 or domain Tier 1 |
| `06_guardrail_antipattern_digest.md` | add_tier0 / tier05_visible | nowhere | yes — add Tier 0.5 boot-visible routing surface |

Plausible reconciliation: **catalog `manifest_action: add_tier0` ≠ universal Tier 0 path load**. The catalog manifest action could mean "this doc deserves Tier 0 governance attention", while read graph Tier 0 path = "every workstream loads this at boot". If so, the read graph needs to explicitly document this distinction. Otherwise the inconsistency is a real bug.

---

## Findings Summary

### Critical (blocks clean P2 execution)
1. **Charter and Agent Work Protocol are not in any DRT Tier 0 path bundle.** They are Tier 0 in catalog, mandatory per AGENTS Non-Negotiables, and referenced only in the recently-added Charter+Protocol+Future Work Retrieval block. They should appear in the Tier 0 path of every workstream.
2. **CLAUDE.md is completely absent from the read graph** despite being `add_tier0` / `tier0_mandatory`.
3. **`00_document_governance_and_taxonomy_2026-05-19.md` is completely absent** despite being `add_tier0` / `tier0_mandatory`.
4. **`03_decision_extraction_ledger.md` is completely absent** despite being `add_tier0` / `tier0_mandatory`.
5. **`06_guardrail_antipattern_digest.md` has no Tier 0.5 boot-visible routing surface** despite being `tier05_visible`.
6. **`coherent_omni_architecture_pattern_2026-05-17.md` is completely absent** despite being `add_tier0` / `tier0_mandatory`.

### High (needs resolution before or during P2 execution)
7. **System map is referenced in Current-State Truth Pointer and some workstream Tier 1 sets, but not in any workstream Tier 0 path bundle.** Inconsistent treatment for what is universally the platform source of truth.
8. **Build OS layer model + rollout sequence + Build Entry Gate v0 are referenced in Current-State Truth Pointer only.** No per-workstream Tier 1 routing for implementation lanes.
9. **Tag Taxonomy is referenced in Charter+Protocol+Future Work Retrieval block only.** Should appear in per-workstream Tier 1 since it governs domain/lane/surface tag retrieval.
10. **DL-18 rbac, DL-19 settings, DL-20 care_coordination, DL-21 federation, ai-governance-policy, future_care_obligations** have no workstream in the DRT despite being `add_tier1` / `domain_mandatory`.
11. **Tier classification mismatch** between catalog `manifest_action: add_tier0` and DRT placement is undocumented. Need explicit reconciliation rule.

### Medium (note in execution plan, not blocking)
12. **`user_knox_preferences_locked_2026-05-17.md`** is `add_tier1` but not routed; acceptable if treated as session preference, flag for explicit review.

### No-issue
- All current route entries resolve to existing files (no broken paths).
- Open review queue is read-accessible from every Tier 0 path bundle.
- Future Work Registry retrieval rule is correctly installed.

---

## Recommendation for P2 Execution

**Do not execute P2 as written.** The current P2 patch-spec preserves Domain Routing Table content verbatim, which would preserve the gaps above.

Three options, in order of recommendation:

### Option A (Recommended): P2-with-route-corrections

Execute P2 as planned (current vs wave-history split), AND simultaneously update the Domain Routing Table to fix the critical gaps. Specifically:

1. Add `CLAUDE.md`, `00_doctrine_manifest.md`, `00_document_governance_and_taxonomy_2026-05-19.md`, `00_omni_coordination_charter.md`, `agent_work_protocol.md`, `03_decision_extraction_ledger.md`, `coherent_omni_architecture_pattern_2026-05-17.md` to every workstream Tier 0 path bundle.
2. Add a new Tier 0.5 routing surface that explicitly lists `06_guardrail_antipattern_digest.md` as boot-visible.
3. Resolve the tier-classification mismatch by documenting the rule (catalog `manifest_action` semantics vs DRT Tier path semantics).
4. Note Build OS files (09/10/11) + Tag Taxonomy as per-workstream Tier 1 anchors for implementation lanes.
5. Open review rows for missing workstreams (rbac, settings, care_coordination, federation, ai_governance).

### Option B: P2-then-route-corrections

Execute P2 split as written, then immediately run a P2.1 patch to fix the routing gaps. Cleaner separation but more total churn.

### Option C: Defer P2 until route corrections are made

Reverse order: fix the route table first, then split. Highest discipline but slowest.

### My recommendation
**Option A**, because the route corrections are obvious and self-contained, and combining them with the split means agents read a clean, correct file from day one. The risk of doing both at once is mitigated by the audit (this artifact): every change is enumerated.

---

## What Remains in Scope for User Decision

1. Tier-classification rule: **how should catalog `add_tier0` vs DRT Tier 0 path** be reconciled? (Are they the same concept? If not, document the difference explicitly in the read graph.)
2. Workstream additions: should the DRT add **rbac, settings, care_coordination, federation, ai_governance** as new workstreams, or treat them as cross-cutting? Open review rows for any deferred.
3. P2 execution shape: Option A, B, or C.

---

## New Artifact Completion Proof (Per Protocol §5)

This audit artifact itself follows the New Artifact Completion Rule in the same pass as its creation:

- passport: present (top of this document).
- artifact class: `handoff_or_readiness_gate`.
- authority level: `derived_nonbinding` (read-only diagnostic).
- lifecycle role: read-only reconciliation audit; P2 execution prerequisite.
- catalog row: added in `01_master_corpus_catalog.md` in this same pass.
- read-graph impact: `no-route-needed` (consult-only diagnostic; existing handoff_or_readiness_gate wildcard handling sufficient; findings will inform P2 execution which itself will update the read graph).
- open-review created if uncertain: see "What Remains in Scope for User Decision" above for explicit user-decision items.

---

## Out of Scope

- Modifying `04_manifest_read_graph.md` in this artifact.
- Executing P2 split.
- Modifying AGENTS, Charter, Protocol, Control Plane, Build Entry Gate, or any catalog/ledger artifact.
- Runtime/code/schema/migration files.
- New doctrine.

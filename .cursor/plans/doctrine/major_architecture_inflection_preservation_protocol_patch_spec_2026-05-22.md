# Architecture Artifact Routing Protocol — Patch Spec

Document type: `handoff_or_readiness_gate`  
Authority: patch-spec only (no governance edits executed in this artifact)  
Status: proposed  
Domain(s): architecture_governance, doctrine_memory  
Lifecycle role: review-first governance patch packet  
Source-of-truth relationship: proposes insertions into AGENTS + control-plane/governance docs  
Supersedes: none  
Superseded by: none  
Manifest action: add_tier1  
Review gate: user_knox_required

---

## Execution Contract

- This file is **spec only**.
- Do not apply AGENTS/control-plane/governance edits from this file without explicit approval.
- No runtime/code/schema/migration scope.

---

## Problem Statement (Why this protocol exists)

The repo already contains robust memory governance (boot sequence, routing, anti-shrouding, catalog/read-graph discipline). The recurring failure is non-automatic application at major inflection moments, especially around:
- deciding **new narrative volume vs addendum**,
- ensuring complete artifact bundle creation,
- preventing chat-only or handoff-only preservation.

This protocol installs deterministic routing so agents do not improvise what to preserve, where to preserve it, or what to report before stop.

---

## Protocol Scope

This protocol governs routing across:
- narrative/evolution arc records,
- ADRs,
- doctrine/system-map/rule-slice landings,
- Build gate/Build OS rule updates,
- decision/evidence/guardrail/supersession/open-review ledgers,
- catalog + read-graph updates,
- handoff continuity artifacts,
- future work registry / parked scope index (future seams + future features/capabilities).

---

## Target Files and Exact Insertions

## 1) `AGENTS.md`

### Placement
- Insert a new section after `## Document Governance (Mandatory)`.

### Insertion text
```markdown
## Architecture Arc Preservation (Mandatory)

When an architecture arc shift or major inflection occurs, the agent must execute the Architecture Arc Preservation Checklist before stopping.
Detailed schemas/templates remain canonical in control-plane doctrine files; AGENTS enforces execution of those rules rather than redefining schemas locally.

### Artifact Intake Gate (Mandatory, before create/update)
Before creating or updating any architecture/process/product artifact, classify payload into one or more classes:
- doctrine/binding rule,
- ADR/decision,
- future work item (architecture seam, product capability, surface feature, integration/business/clinical/infrastructure future),
- evidence/rationale,
- narrative/arc,
- handoff/continuity,
- guardrail/failure mode,
- supersession/conflict,
- open review,
- catalog/read-graph impact,
- test/invariant requirement,
- glossary/canonical terminology,
- runbook/operational procedure.

Output required before write:
- destination artifact class + canonical home,
- update-existing vs create-new decision,
- required ledger/catalog/read-graph side effects.

### Row-First, Document-Second Rule (Mandatory)
- Default to updating an existing registry row/section first.
- Create a new standalone document only when:
  - prior artifact is snapshot-locked/closed,
  - payload exceeds row/section capacity and needs coherent deep dive,
  - protocol explicitly requires standalone form,
  - no canonical home exists.
- New-doc creation without this check is non-compliant.

### Mandatory Arc Trigger
Run the checklist whenever any of the following materially changes:
- architectural premise,
- authority boundary,
- domain ownership boundary,
- cross-domain invariant,
- Build Entry Gate or execution-lane admission rule,
- CNS orchestration semantics,
- D3/D5/D6/D7 relationship,
- AI authority boundary,
- `source_event -> candidate -> resolver -> envelope -> commit` semantics,
- doctrine/governance process,
- major scheduling/readiness/longitudinal architecture direction,
- decision that future agents would otherwise need chat memory to understand,
- cluster of smaller changes that together move operating posture, expose a later issue, or materially change future-agent understanding.

If uncertain whether an inflection qualifies, run checklist lightweight mode and record `no_payload_with_reason` if no artifact is required.

### Narrative Arc vs Addendum Rule
- Narrative records preserve architecture/build arcs, not isolated events.
- Append to an existing narrative when that narrative is explicitly active/open and the added material belongs to the same arc.
- Create a new `evolution_narrative_volume_N_YYYY-MM-DD.md` when the prior narrative is snapshot-locked/closed, belongs to a prior arc, or new work would make the prior volume incoherent.
- Do not create a narrative volume for isolated minor implementation notes, local execution updates, or non-architectural changes.
- Do capture smaller supporting changes when they explain how operating state shifted, exposed a later issue, or changed future-agent understanding.
- Narrative remains non-binding and must point to binding destinations.

### Narrative Lifecycle Status Rule
Every narrative/evolution document must declare one of:
- `active_open`
- `snapshot_locked`
- `closed_superseded_by:<volume/path>`

Append behavior:
- append only to `active_open` narratives,
- do not append to `snapshot_locked` or `closed_superseded_by:*` narratives.

### Artifact Routing Trigger Matrix (Mandatory)
When meaningful work happens, route to required artifacts:
- **Specific architecture decision among alternatives** -> ADR (+ decision ledger row).
- **Binding rule/premise/invariant/boundary change** -> doctrine/system map/rule-slice/gate destination (+ decision ledger).
- **Repeatable failure mode discovered** -> guardrail digest row.
- **Old interpretation/doc displaced/narrowed/contradicted** -> supersession/conflict ledger row.
- **Unresolved material question or approval gate** -> open review queue row.
- **Source/rationale materially informs decision** -> evidence ledger row.
- **Operational continuity required across sessions/packages** -> handoff artifact.
- **Any architecture/process doc created or materially changed** -> catalog row/update.
- **Future read obligations changed** -> read-graph update.
- **Important deferred future work from current scope** -> Future Work Registry row (or explicit link to existing row).

When an artifact class already has canonical schema in control-plane files, agents must use that schema directly (no parallel row formats).

### Future Work Registry / Parked Scope Index (Mandatory)
Purpose:
- Preserve important deferred architecture seams, product capabilities, and expansion hooks without promoting them into current scope.

Authority:
- non-binding parked/watch unless promoted through ADR/doctrine/build-gate/work-package approval.

Required row fields:
- `work_id`
- `item_type` (`architecture_seam` | `product_capability` | `surface_feature` | `integration_future` | `business_ops_future` | `clinical_ops_future` | `infrastructure_future`)
- `title`
- `domain_tags`
- `lane_tags`
- `affected_surfaces`
- `status` (`parked` | `watch` | `candidate` | `promoted` | `rejected`)
- `why_not_now`
- `what_to_preserve_now`
- `promotion_trigger`
- `build_entry_trigger`
- `risk_if_forgotten`
- `risk_if_built_too_early`
- `related_docs`
- `owner_or_review_gate`
- `last_reviewed_at`
- `next_review_condition`

Seeding rule:
- On initial registry creation, seed from existing cataloged `future_or_parked_watch` and `FUTURE_ARC_*` sources where feasible.
- If full seeding is deferred, open explicit review-queue debt item documenting unseeded backlog scope.

No-browse-theater rule:
- Agents must not manually browse all rows by default.
- Build entry and work-package admission must load future work rows by matching tags/triggers.
```

---

## 2) `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`

### Placement
- Insert new section after `## Anti-Shrouding Stage-Entry Gate (Always-On)` and before `## Prospective + Retrospective Application Policy`.

### Insertion text
```markdown
## Architecture Arc Preservation Checklist (Always-On)

This checklist is mandatory whenever the arc trigger condition is met.

### A) Mandatory Artifact Bundle
For each triggered arc/inflection, classify and create/update required artifacts before stop:
1. narrative/evolution record (arc chronology, historical rationale, non-binding),
2. decision ledger row (durable routing record),
3. evidence ledger row (source/rationale evidence),
4. binding destination update (system map/doctrine/gate/ADR/rule-slice/guardrail as applicable),
5. guardrail digest row when repeatable anti-pattern is exposed,
6. supersession/conflict row when prior doctrine/docs are displaced or narrowed,
7. open-review row when unresolved/deferred decisions remain,
8. catalog row/update for each new or modified architecture/process doc,
9. read-graph update when future agent routing needs change.
10. future work registry row/update when deferred future architecture/product pressure is captured.
11. test/invariant record update when new proof obligation is introduced.
12. glossary/runbook update when canonical terms or operational procedure semantics change.

Artifact rows must use canonical existing schema columns in ledgers/catalog/read-graph; do not introduce parallel row formats.

### B) Anti-Burial Rule (Binding)
A major arc/inflection is not preserved if it exists only in chat, handoff, narrative, thought experiment, or evidence notes.

Preservation split is mandatory:
- narrative explains arc,
- decision/evidence ledgers preserve routing,
- binding docs hold authority,
- catalog/read-graph ensure findability,
- guardrail/supersession/review artifacts preserve recurrence memory and ambiguity handling.

### C) Stop Rule (Binding)
Agent may not stop after a major arc/inflection until reporting:
1. trigger classification,
2. arc classification decision (`same_arc_addendum` vs `new_volume`),
3. artifacts created/updated,
4. intentionally not-created artifacts with reason,
5. binding vs non-binding destinations,
6. catalog/read-graph impact,
7. unresolved assumptions,
8. template schema references used (`template_schema_references_used`),
9. schema deviation status (`schema_deviation:none|yes_with_reason`),
10. legacy row compatibility notes when applicable,
11. runtime/code touch confirmation (or explicit authorization if touched).

### D) Artifact-Routing Stop Rule Extension
For any meaningful architecture/process change (not only major arcs), agent must report:
1. routing checklist classes evaluated,
2. artifact classes created/updated,
3. artifact classes intentionally not created with reason,
4. unresolved routing items moved to open review queue (or explicit none).

### E) Build-Entry Future Work Retrieval Requirement
Before implementation lane admission, agent must:
1. declare lane/domain/surface tags for the work package,
2. load matching future work rows by `domain_tags`/`lane_tags`/`build_entry_trigger`,
3. load matching open-review rows, guardrail rows, and relevant ADR/doctrine/domain-contract anchors,
4. list future-work dispositions (`preserve_invariant_only` | `keep_parked` | `promote` | `open_review` | `reject_stale`),
5. report retrieval impact before edits.

If no future-work rows match, agent must explicitly state:
`Future Work Registry checked; no matching rows found.`

Lane admission is blocked if retrieval check is omitted.
```

---

## 3) `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`

### Placement
- Insert new subsection between `## 5) Round-Close Hygiene (Minimal)` and `## 6) Past-Doc Cleanup Strategy (Do Not Over-Refactor)`.

### Insertion text
```markdown
## 5.0) Artifact Intake Gate + Row-First Rule (Mandatory)

Before creating/updating any architecture/process/product artifact, agents must classify payload class and route destination first.

Mandatory classes to evaluate:
- doctrine/binding rule,
- ADR/decision,
- future work item,
- evidence/rationale,
- narrative/arc,
- handoff/continuity,
- guardrail/failure mode,
- supersession/conflict,
- open review,
- catalog/read-graph impact,
- test/invariant requirement,
- glossary/canonical terminology,
- runbook/operational procedure.

Row-first rule:
- Update existing registry row/section first.
- Create new standalone doc only when row/section is insufficient, existing artifact is snapshot-locked, or protocol explicitly requires new doc.

## 5.1) Narrative Arc vs Addendum Rule (Mandatory)

Narrative volumes are architectural chapter breaks, not daily logs.

- Append to current narrative only when:
  - the narrative is explicitly active/open, and
  - the new event belongs to the same architecture arc.
- Create a new narrative volume when:
  - prior narrative is snapshot-locked/closed, or
  - event belongs to a new arc, or
  - event is a major architecture inflection.
- Do not create narrative volumes for isolated minor implementation notes.
- Narrative may include smaller supporting implementation/control-plane changes when they explain state transitions, support a major shift, or expose later issues.

### Narrative lifecycle status (required)
Every narrative volume must declare:
- `active_open`,
- `snapshot_locked`, or
- `closed_superseded_by:<volume/path>`.

Append is allowed only for `active_open`.

Every new narrative volume must:
- be cataloged in `01_master_corpus_catalog.md` using existing narrative style/enums,
- be routed in `04_manifest_read_graph.md` only if existing narrative wildcard/pattern does not already cover it,
- remain non-binding and point to binding authority destinations.

## 5.2) ADR Trigger Rule (Mandatory)
Create or amend an ADR when:
- a concrete architecture decision selects one approach over alternatives, and
- future implementation must follow that decision.

Do not use narrative-only preservation for such decisions.
Use the existing ADR structure in `docs/architecture/*adr*.md` and keep ADRs as single-decision records per `02_authority_routing_map.md`.
Minimum ADR sections must include:
- context,
- decision,
- alternatives/rejections,
- authority boundary,
- canonical destination references.

## 5.3) Handoff Trigger + Minimum Contents (Mandatory)
Create/update handoff when work package/session is paused or completed and continuity is needed.

Minimum handoff contents:
- state snapshot and scope completed,
- changed artifacts/files/commits,
- verification/proof outputs run (or explicit deferred proof reason),
- settled decisions not to re-litigate,
- unresolved assumptions/questions,
- next gate and explicit stop condition.

Handoff structure must follow the existing corpus style in `.cursor/plans/HANDOFF_*.md` (state snapshot + evidence/proof + no-relitigation boundaries + next-gate path), and must not be treated as direct binding authority until routed.

## 5.4) Future Work Registry / Parked Scope Rule (Mandatory)
Use a canonical future work registry as index for deferred architecture and product pressure.

- Small deferred idea/seam/capability -> registry row.
- Large coherent future arc -> FUTURE_ARC deep dive + registry row link.
- Do not leave deferred future work only in narrative/handoff/chat.
- Initial registry pass must seed known high-value parked/future artifacts; if full backlog remains, create explicit open-review debt row with owner and closure gate.
- Review touched rows at phase close; do not require full-list browse unless explicitly requested.
```

---

## 4) `.cursor/plans/doctrine/02_authority_routing_map.md`

### Placement
- Update notes cell in `narrative_or_postmortem` row.

### Replacement text (notes cell only)
```markdown
Useful context; non-binding unless promoted. Use narrative-arc-vs-addendum rule and lifecycle statuses (`active_open`, `snapshot_locked`, `closed_superseded_by:*`) to decide append vs new volume.
```

---

## 5) `.cursor/plans/doctrine/11_build_entry_gate_v0.md`

### Placement
- Insert new subsection between:
  - `## Foundational Composition Admission Checklist (Binding)`
  - `## Stop / Reroute Conditions`

### Insertion text
```markdown
## Future Work Admission Check (Binding)

Before implementation-lane admission:
1. declare lane/domain/surface tags,
2. load matching Future Work Registry rows by `domain_tags` / `lane_tags` / `build_entry_trigger`,
3. load matching open-review rows, guardrail rows, and relevant ADR/doctrine/domain-contract anchors,
4. classify each future-work row:
   - preserve invariant only,
   - keep parked,
   - promote to ADR/doctrine/build plan,
   - open review,
   - reject stale,
5. include retrieval-impact note in pre-edit checkpoint report.

If no future-work rows match, report:
`Future Work Registry checked; no matching rows found.`

Lane admission is blocked if retrieval check is omitted.
```

---

## 6) `.cursor/plans/doctrine/04_manifest_read_graph.md`

### Placement
- Insert new subsection between:
  - `## Synchronization Check`
  - `## D0-REV-004 Ratification Matrix (Wave 3 Gate)`

### Insertion text
```markdown
## Future Work Retrieval Rule (Build-Entry Routing)

For implementation-lane preparation, agents must route through Future Work Registry rows using lane/domain/surface tags before planning/editing.

Routing behavior:
- retrieve only matching future-work rows by tags/`build_entry_trigger`,
- retrieve matching open-review rows and guardrail rows for the same tags,
- include relevant ADR/doctrine/domain-contract anchors for the declared lane/domain,
- avoid full-registry browsing by default,
- record future-work dispositions in lane checkpoint output,
- open review items for unresolved future-work promotions.
```

---

## 7) New file: `.cursor/plans/doctrine/future_work_registry.md`

### Action
- Create canonical index file for deferred future work.
- Seed initial rows from known high-value cataloged `future_or_parked_watch`/`FUTURE_ARC_*` artifacts in the same execution pass.
- If full corpus seeding cannot be completed in that pass, create explicit open-review debt row `FWREG-REV-001` with remaining backlog scope, owner, and closure gate.

### Initial template
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

## 8) Explicit catalog registration for new registry file

### Target
- `01_master_corpus_catalog.md`

### Required update
- Add explicit row for `.cursor/plans/doctrine/future_work_registry.md` in the same approved execution as file creation.
- Use existing enum/style conventions in `01_master_corpus_catalog.md` (no invented enum variants).
- `category` must be `future_or_parked_watch`.
- `agent_read_rule` should align with existing routed consult semantics for parked/future artifacts.

### Minimum row intent
- canonical_home: `.cursor/plans/doctrine/future_work_registry.md`
- manifest_action: `add_tier2`
- handling_state: routed or review_queue (if seeded backlog debt remains open)
- notes include: Future Work Registry created as canonical parked-scope index with build-entry retrieval contract.

---

## 9) Explicit read-graph routing for new registry file

### Target
- `04_manifest_read_graph.md`

### Required update
- Add explicit routing note/row in the build-entry retrieval section so future work registry loading is deterministic by lane/domain/surface tags.
- Ensure routing language is operational (when to load) rather than authority-promoting (registry remains non-binding by default).

### Minimum routing intent
- For implementation-lane prep, consult `.cursor/plans/doctrine/future_work_registry.md` using tag-based matching.
- If no matches: require explicit `no matching rows found` report line in pre-edit checkpoint.

---

## 10) Open review rows for unresolved mechanics gaps

### Target
- `08_open_review_queue.md`

### Required rows (unless already present with equivalent scope)
- `FWREG-REV-001`: Future Work Registry seeding backlog debt (if seeding is partial after initial pass).
- `FWGAP-REV-TESTINV`: Decide canonical home for test/invariant registry.
- `FWGAP-REV-GLOSSARY`: Decide canonical home for glossary/canonical terminology.
- `FWGAP-REV-RUNBOOK`: Decide canonical home for runbooks/operational procedures.
- `FWGAP-REV-EVIDENCE`: Legacy evidence-row density compatibility normalization policy.

### Row expectations
- use existing queue schema/format,
- include owner/reviewer gate,
- include closure criteria and canonical destination decision path.

---

## Validation Checklist for Execution (when approved later)

Before applying governance edits, verify:
- section headers still exist at target locations,
- inserted language does not conflict with existing enum schema lock,
- no runtime files included,
- wording preserves non-binding narrative semantics and lifecycle-status clarity.
- trigger matrix covers ADR/guardrail/handoff/read-graph decisions explicitly.
- future work registry + build-entry retrieval rules are installed in all required targets.
- insertion text references existing artifact schemas/templates instead of introducing parallel formats.
- artifact intake gate + row-first rule are present and deterministic.
- registry seeding rule is present (or open-review debt rule if deferred).
- explicit catalog row/update for `.cursor/plans/doctrine/future_work_registry.md` is included.
- explicit read-graph routing update for `.cursor/plans/doctrine/future_work_registry.md` is included.
- unresolved mechanics gaps are routed to open-review rows (or explicitly mapped to existing equivalent rows).

---

## Expected Outputs After Future Execution

When this protocol is approved/applied, agents must produce per-inflection output with:
- trigger classification,
- artifact bundle status,
- explicit no-artifact reasons,
- authority split (binding vs rationale/evidence),
- catalog/read-graph routing confirmation,
- stop-rule compliance.

---

## Unresolved Assumptions

1. Existing AGENTS section ordering remains stable enough for the insertion location.
2. `00_architecture_memory_control_plane.md` remains the canonical place for the stop-rule enforcement text.
3. `04_manifest_read_graph.md` wildcard routing for narratives continues as intended unless explicitly revised in future.

---

## Audit-First Template Pass (Repo-Derived, No New Governance Edits)

This section documents existing structures already present in-repo. The protocol must reference these structures directly, not invent parallel templates.

### A) Artifact Template Inventory (Existing Structures)

| artifact_type | canonical_file_or_pattern | purpose | authority_level | trigger | required_fields_or_sections | existing_schema_or_format | minimum_acceptable_contents | must_not_contain | catalog_requirement | read_graph_requirement | example_style_reference | stop_rule_reporting_requirement | hardening_needed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ADR | `docs/architecture/*adr*.md` (ex: `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`) | single architecture decision authority | binding when routed | specific decision among alternatives; implementation must obey | decision context, decision statement, boundaries, downstream implications, references | narrative-structured markdown (sectioned ADR) | one major decision with alternatives/constraints explicit | multi-decision bundling; treating narrative as ADR substitute | yes (catalog row if new/updated architecture doc) | route as domain mandatory when applicable | `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | report ADR created/amended or explicit reason not needed | low (add explicit ADR skeleton reference in governance text) |
| Handoff | `.cursor/plans/HANDOFF_*.md` | operational continuity across sessions/packages | continuity-only until routed | package pause/close, checkpoint transfer | live state snapshot, files/commits, verification evidence, settled decisions, next gates | structured markdown, no single strict schema; consistent recurring sections | enough operational detail for safe resume without re-litigating settled decisions | claiming binding authority; hiding unresolved assumptions | yes (already cataloged as `handoff_or_readiness_gate`) | consult routing only unless promoted | `.cursor/plans/HANDOFF_2026-05-06.md` | report handoff produced/updated + unresolved items routed | medium (define canonical minimum handoff skeleton in governance insertions) |
| Decision ledger row | `.cursor/plans/doctrine/03_decision_extraction_ledger.md` | durable decision routing record | governance/routing record | any durable decision or doctrine landing | `decision_id, source_file, decision_summary, domain, date_or_arc, canonical_destination, already_landed, needs_adr, needs_doctrine_lock, needs_human_review, status, notes` | strict table row contract | all columns populated with routing intent and destination | free-form decision memory not routable to canonical destination | n/a (ledger itself already cataloged) | update read graph only if route obligations changed | `03_decision_extraction_ledger.md` row contract + existing rows | report decision IDs added/updated and unresolved review flags | low |
| Evidence ledger row | `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md` | source/rationale evidence tracking | evidence only unless promoted | evidence materially informing decision/routing | `evidence_id, source_file, observed_feature_or_workflow, domain_implicated, omni_implication, decision_created, decision_target, anti_copy_warning, status, notes` | strict table row contract (with some legacy compact rows) | enough evidence context to support downstream routing | direct doctrine claims without promotion path | n/a | read graph change only if evidence routing obligations change | `07_evidence_ingestion_ledger.md` row contract | report evidence IDs and whether promoted or still consult-only | medium (normalize any compact legacy rows over time; no new schema) |
| Guardrail digest row | `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | anti-pattern recurrence prevention | guardrail/governance support | repeatable failure mode/anti-pattern discovered | `guardrail_id, anti_pattern, source_evidence, domain, severity, enforced_by, status, notes` | strict table contract + severity/enforcement addendum | anti-pattern + enforcement path explicit | converting guardrail row into binding doctrine without destination routing | n/a | read graph update only if mandatory-read behavior changes | `06_guardrail_antipattern_digest.md` rows + severity addendum | report guardrail IDs and enforcement destination | low |
| Supersession/conflict row | `.cursor/plans/doctrine/05_supersession_conflict_ledger.md` | conflict/supersession control | governance/control | prior interpretation displaced/narrowed/contradicted | `item_id, source_file, conflicting_with, conflict_type, winning_authority, resolution_status, superseded_by, review_gate, notes` | strict ledger table + closure policy lock | explicit winning authority and closure result | unresolved contradiction left implicit in narrative/handoff only | n/a | read graph update if winning authority path changes active routing | `05_supersession_conflict_ledger.md` + closure policy lock | report conflict IDs created/updated and closure status | low |
| Open review row | `.cursor/plans/doctrine/08_open_review_queue.md` | unresolved decision queue | governance/control | unresolved material issue or approval gate required | `review_id, source_file, issue_summary, domain, risk_if_unresolved, proposed_destination, required_reviewer, status, notes` | strict queue table + governance lock | explicit risk, destination, reviewer, and closure criteria | burying unresolved items in narrative/handoff/evidence only | n/a | read graph update if review item changes gate routing | `08_open_review_queue.md` + queue governance lock | report review IDs opened/closed/split | low |
| Catalog row | `.cursor/plans/doctrine/01_master_corpus_catalog.md` | file inventory + authority/routing metadata | governance/findability | every new/modified architecture/process doc | full catalog table columns including category/authority/status/routing/semantic obligations | strict, wide table schema | row with valid enum/style + anti-shrouding disposition metadata where required | uncataloged in-scope docs treated as authoritative | mandatory for new/modified in-scope docs | only indirect; read graph update evaluated separately | `01_master_corpus_catalog.md` header and existing rows | report catalog rows added/updated + enum style conformance | low |
| Read-graph route row/update | `.cursor/plans/doctrine/04_manifest_read_graph.md` | when/why agents must read artifacts | governance routing map | future read obligations changed for workstream/domain/lane | workstream tier routes + forbidden assumptions + caveats | table-driven route map and matrices | route and caveat updates tied to authority boundaries | broad “read everything” or route drift without caveats | n/a | this is the read graph artifact itself | `04_manifest_read_graph.md` domain routing/ratification tables | report exact route updates or explicit no-change reason | low |
| Document passport header | all new architecture/process markdown docs | document identity and lifecycle intent | governance metadata | any new in-scope architecture/process doc | `Document type, Authority, Status, Domain(s), Lifecycle role, Source-of-truth relationship, Supersedes, Superseded by, Manifest action, Review gate` | explicit template exists | full header present before authority use | missing passport on new in-scope docs | must be cataloged in same change set per control plane | read-graph update only if routing duties changed | `00_document_governance_and_taxonomy_2026-05-19.md` §3 template | report passport+catalog compliance for all new docs | low |
| Narrative arc | `docs/architecture/evolution_narrative*.md` | why-now arc and chronology | rationale non-binding | major arc/inflection or coherent architecture chapter | lifecycle status + why changed + rejected paths + binding destinations | sectioned narrative docs | enough detail for future agent understanding without chat replay | claiming binding authority | yes | only if wildcard/pattern route insufficient | existing evolution narrative volumes | report arc classification + lifecycle status decision | medium (codify lifecycle and append/new-volume rule; already in spec) |
| Future work registry | `.cursor/plans/doctrine/future_work_registry.md` (new canonical registry), existing `FUTURE_ARC_*` deep dives | deferred seam/capability preservation with build-entry triggers | non-binding parked/watch unless promoted | deferred high-value future work (seam/capability/feature/ops/integration) | `work_id, item_type, title, domain_tags, lane_tags, affected_surfaces, status, why_not_now, what_to_preserve_now, promotion_trigger, build_entry_trigger, risk_if_forgotten, risk_if_built_too_early, related_docs, owner_or_review_gate, last_reviewed_at, next_review_condition` | new canonical table (defined in this patch-spec) | row-level deferred item with triggerable retrieval metadata | registry-as-browse-theater; untyped future rows | yes | mandatory build-entry retrieval by tags/triggers + related review/guardrail/authority anchors | proposed `future_work_registry.md` template in this spec | report retrieval check/dispositions before lane admission | low |
| Test/invariant record | currently distributed in build gate + test scripts/docs (no single canonical registry yet) | proof obligation traceability | governance/support | new invariant/proof obligation introduced | invariant name, scope, required proof, verification command/result pointer, failure disposition | mixed current state (gap) | explicit proof path and owner | implicit “assumed verified” claims | yes when creating new doc; otherwise route through existing gate docs | read graph update if proof obligations become mandatory | `.cursor/plans/doctrine/11_build_entry_gate_v0.md`; `scripts/test-*.ts` references | report new/changed invariant proof obligations | medium (needs canonical home decision) |
| Glossary/canonical terminology | currently distributed in doctrine/system-map text (no dedicated glossary file found) | naming discipline | governance/support | new canonical term or term deprecation | term, definition, allowed synonyms, forbidden terms, authority source | mixed current state (gap) | explicit term semantics and destination authority | silent primitive creation/term drift | yes when standalone glossary artifact is created | read graph update if glossary becomes mandatory route input | `system_map_three_layers_60706286.plan.md` terminology anchors | report term additions/changes and authority destination | medium (needs canonical glossary artifact decision) |
| Runbook/operational procedure | currently distributed in handoffs/doctrine snippets (no dedicated runbook directory found) | repeatable operations execution | continuity/support | repeatable operational procedure emerges | objective, prerequisites, exact steps, rollback/failure path, owner | mixed current state (gap) | enough steps for deterministic repeatability | architecture authority claims without routing | yes when standalone runbook artifact is created | read graph update if runbook becomes required for lane/gate | existing handoff procedural sections | report operational procedure updates and unresolved risks | medium (needs canonical runbook home decision) |

### B) Existing Structures Confirmed

- ADRs already exist and follow a stable long-form single-decision style.
- Decision/evidence/guardrail/conflict/open-review/catalog/read-graph already have explicit table schemas in canonical doctrine files.
- Document passport template already exists and is explicit in `00_document_governance_and_taxonomy_2026-05-19.md`.
- Future-arc artifacts already exist (`FUTURE_ARC_*`) and are cataloged as `future_or_parked_watch`.

### C) Real Gaps (Not Invented)

1. **Evidence ledger has mixed row density** (some compact legacy rows), so protocol must preserve legacy compatibility while using canonical row contract for new updates.
2. **No single canonical test/invariant registry file exists yet** (currently distributed across build-gate docs and verification scripts).
3. **No dedicated glossary artifact is currently canonicalized** (terminology is distributed across doctrine/system-map artifacts).
4. **No dedicated runbook home is currently canonicalized** (procedural steps are distributed across handoffs/doctrine snippets).

### D) Operational Stop-Rule Addendum (Template Audit Proof)

Every inflection/major routing stop report must additionally include:
- `template_schema_references_used` (list canonical files/schemas used),
- `schema_deviation:none|yes_with_reason`,
- `legacy_row_compatibility_notes` (only when touching mixed-density evidence rows),
- `handoff_schema_compliance` (when handoff produced/updated).

# Architecture Memory Control Plane Restructure Patch Spec

Document type: `handoff_or_readiness_gate`
Authority: restructure patch-spec only (no edits executed in this artifact)
Status: archived
Domain(s): architecture_governance
Lifecycle role: review-first restructure proposal for `00_architecture_memory_control_plane.md`
Source-of-truth relationship: proposes a re-balanced outline for the canonical authority/schema spine; does not modify the audited document; recommendations require explicit approval before any execution
Supersedes: none
Superseded by: none
Manifest action: add_tier2
Review gate: user_knox_required

---

## Execution Contract

- This file is **patch-spec only**.
- It does NOT execute any edit to `00_architecture_memory_control_plane.md`.
- It does NOT alter, supersede, or weaken any existing anti-shrouding content; all anti-shrouding text is preserved (consolidated under one explicit guardrail-family section).
- It does NOT introduce new doctrine.
- It does NOT touch runtime/code/schema/migration files.

Approval to proceed requires explicit user authorization of the restructure execution as a separate gate.

---

## Problem Statement (Why Restructure)

Tier-0 Document Quality Audit (`.cursor/plans/doctrine/tier0_governance_document_quality_audit_2026-05-22.md` File 2) found:

- Anti-shrouding occupies 5 sections (~70 of 250 lines): Rule, Validation Gate, Stage-Entry Gate, Prospective+Retrospective Policy, Retro Re-Scan Trigger Policy.
- Reads as anti-shrouding-dominant when the doc should read as broad memory governance.
- **Lifecycle closure is entirely missing** from the control plane (only lives in Charter and Protocol).
- No "what this layer owns vs does not own" framing to mirror Charter Layer Model.
- Anti-shrouding sections are not explicitly framed as one guardrail family among many.

This restructure rebalances the doc into a balanced authority/spine artifact without removing anti-shrouding content.

---

## Current Outline (Baseline)

`.cursor/plans/doctrine/00_architecture_memory_control_plane.md` as of 2026-05-22:

1. Passport header
2. Purpose
3. Mandatory Boot Sequence
4. Coordination Charter Pointer (Non-Superseding)
5. Enforcement Rules
6. New-Document Intake Protocol (Always-On)
7. Anti-Shrouding Rule (Binding)
8. Anti-Shrouding Validation Gate (Blocking)
9. Anti-Shrouding Stage-Entry Gate (Always-On)
10. Prospective + Retrospective Application Policy (incl. Retro Re-Scan Trigger Policy)
11. Scope Discovery Rule
12. Control Plane Artifacts
13. Schema Lock v0
14. Boot-Path Synchronization Requirement
15. Drift Audit Requirement

Total: ~250 lines. Anti-shrouding ≈ 70 lines (~28% of file).

---

## Proposed Outline (Restructured)

1. Passport header (unchanged)
2. **Purpose + Boundaries (NEW)** — preserves original Purpose sentence verbatim at top; adds owns / does-not-own framing; mirrors Charter Layer Model
3. Mandatory Boot Sequence (preserved verbatim)
4. Coordination Charter Pointer (Non-Superseding) (preserved verbatim)
5. Enforcement Rules (preserved verbatim)
6. New-Document Intake Protocol (Always-On) (preserved verbatim)
7. **Classification + Routing (NEW)** — control-plane overview of catalog + authority routing schemas; one-paragraph summary + canonical-home pointers; no schema duplication
8. **Decision / Evidence Preservation (NEW)** — control-plane overview of decision + evidence ledger contracts; one-paragraph summary + canonical-home pointers
9. **Supersession / Conflict + Open Review (NEW)** — control-plane overview of supersession ledger + open review queue contracts; one-paragraph summary + canonical-home pointers
10. **Lifecycle Closure (NEW)** — anti-staleness contract for touched artifacts at work-package/phase close; cross-references Charter Lifecycle Freshness Contract + Protocol §8 + §9
11. **Guardrail Memory (NEW)** — overview pointer to `06_guardrail_antipattern_digest.md` as cross-cutting anti-pattern memory; explicitly frames anti-shrouding as one family within this broader memory
12. **Anti-Shrouding Guardrail Family (CONSOLIDATED)** — all anti-shrouding content preserved verbatim, consolidated into one section with sub-headings; explicitly framed as one guardrail family among many
13. Scope Discovery Rule (preserved verbatim)
14. Control Plane Artifacts (preserved verbatim)
15. Schema Lock v0 (preserved verbatim)
16. Boot-Path Synchronization Requirement (preserved verbatim)
17. Drift Audit Requirement (preserved verbatim)

Anti-shrouding share drops from ~28% to ~15-18% by consolidation, not deletion. All content preserved.

---

## Proposed Section Drafts

### 2) Purpose + Boundaries (NEW)

Replace the current `## Purpose` section with the following expanded text. **The original Purpose sentence is preserved verbatim at the top of the new section.**

```markdown
## Purpose + Boundaries

Prevent architecture drift by enforcing a control-plane mechanism where every source file and durable decision is:
- classified
- routed to a canonical home
- supersession-tracked
- read through a governed graph

This file is the **single canonical boot-rule source**.

### Owns

- file classification and authority routing
- catalog registration contract
- decision/evidence preservation routing
- supersession/conflict tracking
- open review and unresolved-question routing
- lifecycle/disposition routing and schema discipline
- guardrail memory and anti-shrouding guardrail family
- read-graph integration semantics
- schema lock for all governance enums
- drift audit obligation

### Does Not Own

- layer-coordination doctrine — lives in Coordination Charter
- lifecycle freshness at coordination level — lives in Coordination Charter
- agent runtime sequencing — lives in Agent Work Protocol
- lifecycle maintenance enforcement and stop proof — lives in Agent Work Protocol
- staged execution / gate / proof obligations — lives in Build OS
- implementation-lane admission rules — lives in Build Entry Gate v0
- runtime code/scope behavior — lives in Agent Work Protocol §7
```

### 7) Classification + Routing (NEW)

Insert after `## New-Document Intake Protocol (Always-On)`:

```markdown
## Classification + Routing

Every in-scope file is classified by category, authority, and routing semantics. Canonical schemas live in their own files; this section is the control-plane overview only.

- Category enum, authority enum, status enum, manifest_action enum, review_gate enum, agent_read_rule enum, lifecycle_role enum: see Schema Lock v0 below.
- File inventory + per-file classification: `01_master_corpus_catalog.md`.
- Category → canonical_home + read/update/retirement rules: `02_authority_routing_map.md`.
- Domain/workstream read routing: `04_manifest_read_graph.md`.

Routing principle: a file's category and authority determine where it lives, how it is read, and whether it can be cited as binding. Classification is mandatory before authority use.
```

### 8) Decision / Evidence Preservation (NEW)

Insert after Classification + Routing:

```markdown
## Decision / Evidence Preservation

Durable decisions and the evidence that informed them are preserved through dedicated ledgers; this section is the control-plane overview only.

- Decision routing record: `03_decision_extraction_ledger.md` (decision_id, source_file, decision_summary, domain, canonical_destination, status, notes).
- Evidence basis: `07_evidence_ingestion_ledger.md` (evidence_id, source_file, observed_feature, domain_implicated, decision_target, anti_copy_warning, status, notes).

Preservation principle: a decision that is not routed to a canonical destination is not preserved. Evidence informs routing; it does not auto-bind. Promotion of evidence to doctrine requires explicit decision/review closure.
```

### 9) Supersession / Conflict + Open Review (NEW)

Insert after Decision / Evidence Preservation:

```markdown
## Supersession / Conflict + Open Review

Replaced, narrowed, contradicted, or unresolved material is tracked through dedicated ledgers; this section is the control-plane overview only.

- Supersession / conflict ledger: `05_supersession_conflict_ledger.md` (item_id, conflicting_with, conflict_type, winning_authority, resolution_status, superseded_by, review_gate, notes).
- Open review queue: `08_open_review_queue.md` (review_id, source_file, issue_summary, domain, risk_if_unresolved, proposed_destination, required_reviewer, status, notes).

Resolution principle: a conflict is resolved only when winning authority is explicit; an open review is closed only when verdict + canonical destination + closure criteria are recorded per the Queue Governance Lock.
```

### 10) Lifecycle Closure (NEW — currently missing)

Insert after Supersession / Conflict + Open Review:

```markdown
## Lifecycle Closure

At work-package / phase / lane closure, touched artifacts require explicit disposition. Stale artifacts must not remain in an outdated state without explicit reason.

Required dispositions:
- Future work: `promoted` / `parked` / `watch` / `rejected` / `candidate` with reason.
- Open review: `closed` / `closed_split_to_children` / `open` with reviewer/gate state and closure criteria.
- Supersession / conflict: updated when interpretation is replaced, narrowed, or contradicted.
- Narrative: lifecycle status (`active_open` / `snapshot_locked` / `closed_superseded_by:*`) updated as arc progresses.
- Handoff: processed / routed / demoted as continuity artifact, not binding authority.
- Catalog / read graph: current vs stale routing/authority updates.

This contract is enforced operationally through:
- `00_omni_coordination_charter.md` Lifecycle Freshness Contract (coordination-level freshness),
- `agent_work_protocol.md` §8 Lifecycle Maintenance and §9 Stop Report (runtime enforcement),
- this Control Plane (lifecycle/disposition routing and schema discipline).

No touched artifact may remain stale, deferred, or ambiguously current without explicit disposition. No artifact remains perpetually deferred after implementation.
```

### 11) Guardrail Memory (NEW, immediately before Anti-Shrouding family)

Insert before the consolidated Anti-Shrouding section:

```markdown
## Guardrail Memory

Guardrail memory records cross-cutting anti-patterns and non-repeatable failure modes for routing/extraction discipline. It supports read-graph and routing decisions; it does not override doctrine locks.

- Canonical home: `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`.
- Row schema and severity/enforcement ratification semantics live in that file.
- Anti-shrouding is one guardrail family within this broader memory; its specific contracts follow below.
```

### 12) Anti-Shrouding Guardrail Family (CONSOLIDATED)

Replace the five existing anti-shrouding sections (`Anti-Shrouding Rule (Binding)`, `Anti-Shrouding Validation Gate (Blocking)`, `Anti-Shrouding Stage-Entry Gate (Always-On)`, `Prospective + Retrospective Application Policy`, `Retro Re-Scan Trigger Policy`) with one consolidated section.

**Preservation contract: body text of each sub-section is preserved verbatim from the existing doc, including original paragraph breaks. Heading text is preserved verbatim (the only structural change is demotion from `##` to `###`).**

```markdown
## Anti-Shrouding Guardrail Family

Anti-shrouding is one guardrail family within control-plane memory governance. It prevents durable intelligence from being hidden inside files whose category or authority labels would otherwise allow handling-state transitions without payload accounting.

### Anti-Shrouding Rule (Binding)

Category and authority labels control whether a file can be cited as binding authority.
They do not control whether a file can contain durable intelligence.

For any file with `semantic_read_required=yes`, extraction must check for:
- hidden decisions
- rationale and rejected alternatives
- pivots and guardrails
- stale/superseded language
- evidence relationships
- open questions

Non-binding means "cannot be cited as direct authority."
It does not mean "contains no valuable payload."

### Anti-Shrouding Validation Gate (Blocking)

A file may not be marked `routed`, `processed`, `demoted`, `archived`, or `deferred` unless `notes_or_extracted_decisions` states one of:
1. durable payload extracted and where it was routed, or
2. no durable payload found, with reason, or
3. deferred with explicit reason and review gate.

If the gate is not satisfied, handling-state transitions are invalid.

### Anti-Shrouding Stage-Entry Gate (Always-On)

Before any new extraction tranche/wave starts, the operator must record a stage-entry check that states:
1. active workstream and source set,
2. anti-shrouding disposition method to be used (`durable_payload_extracted` / `no_payload_with_reason` / `deferred_with_reason_and_gate`),
3. destination ledger(s) for routed payloads,
4. closure row contract fields that will be required at tranche close.

If this stage-entry check is missing, the tranche is considered non-compliant and should not proceed.

### Prospective + Retrospective Application Policy

- Prospective enforcement starts at Wave 3D and is mandatory for all subsequent extraction waves.
- Waves 1-3C are not reopened by default during gate installation.
- Retrospective anti-shrouding audit is tracked as a bounded backlog item and runs at a scheduled control-plane checkpoint unless a concrete missed critical payload is detected earlier.

#### Retro Re-Scan Trigger Policy (Always-On)

Do not re-run all prior waves by default. Trigger a targeted retrospective re-scan only when one of these occurs:
- contradiction between catalog/read-graph/review/conflict ledgers,
- newly introduced doctrine changes interpretation of previously routed evidence,
- closure row fails anti-shrouding contract fields,
- a concrete hidden critical payload is identified.

When triggered, run a bounded scope re-scan and record decision/evidence rows for the trigger and outcome.
```

All anti-shrouding sub-section body text above is preserved **truly verbatim** from the existing doc (line breaks and paragraph structure included). The only structural changes are:
1. `##` → `###` demotion for the four anti-shrouding sub-sections + their parent grouping under `## Anti-Shrouding Guardrail Family`,
2. `Retro Re-Scan Trigger Policy (Always-On)` moves from a `###` under `Prospective + Retrospective Application Policy` to a `####` under the same parent (it was already a sub-section in the original doc).

Heading text is preserved verbatim; no "Anti-Shrouding" prefix is dropped.

### Sections Preserved Verbatim (No Change)

- Section 1: Passport header
- Section 3: Mandatory Boot Sequence
- Section 4: Coordination Charter Pointer (Non-Superseding)
- Section 5: Enforcement Rules
- Section 6: New-Document Intake Protocol (Always-On)
- Section 12: Scope Discovery Rule
- Section 13: Control Plane Artifacts
- Section 14: Schema Lock v0 (all enums)
- Section 15: Boot-Path Synchronization Requirement
- Section 16: Drift Audit Requirement

---

## Before/After Map

| current section | restructured section | change |
|---|---|---|
| Passport header | Passport header | unchanged |
| Purpose | Purpose + Boundaries | original Purpose sentence preserved verbatim at top; owns / does-not-own framing added below |
| Mandatory Boot Sequence | Mandatory Boot Sequence | unchanged |
| Coordination Charter Pointer (Non-Superseding) | Coordination Charter Pointer (Non-Superseding) | unchanged |
| Enforcement Rules | Enforcement Rules | unchanged |
| New-Document Intake Protocol (Always-On) | New-Document Intake Protocol (Always-On) | unchanged |
| (none) | Classification + Routing | NEW — overview + pointers to canonical homes |
| (none) | Decision / Evidence Preservation | NEW — overview + pointers to canonical homes |
| (none) | Supersession / Conflict + Open Review | NEW — overview + pointers to canonical homes |
| (none — currently missing) | Lifecycle Closure | NEW — anti-staleness contract; cross-references Charter + Protocol §8 + §9 |
| (none — implicit only) | Guardrail Memory | NEW — overview pointer to `06_guardrail_antipattern_digest.md`; positions anti-shrouding as one family within broader guardrail memory |
| Anti-Shrouding Rule (Binding) | Anti-Shrouding Guardrail Family → `### Anti-Shrouding Rule (Binding)` | heading demoted `##` → `###`; heading text preserved verbatim; body text preserved verbatim with original paragraph breaks |
| Anti-Shrouding Validation Gate (Blocking) | Anti-Shrouding Guardrail Family → `### Anti-Shrouding Validation Gate (Blocking)` | heading demoted; heading text preserved verbatim; body text preserved verbatim |
| Anti-Shrouding Stage-Entry Gate (Always-On) | Anti-Shrouding Guardrail Family → `### Anti-Shrouding Stage-Entry Gate (Always-On)` | heading demoted; heading text preserved verbatim; body text preserved verbatim |
| Prospective + Retrospective Application Policy | Anti-Shrouding Guardrail Family → `### Prospective + Retrospective Application Policy` | heading demoted; heading text preserved verbatim; body text preserved verbatim |
| Retro Re-Scan Trigger Policy (Always-On) | Anti-Shrouding Guardrail Family → `#### Retro Re-Scan Trigger Policy (Always-On)` | heading demoted (already nested under Prospective+Retrospective in original; remains nested); heading text preserved verbatim; body text preserved verbatim |
| Scope Discovery Rule | Scope Discovery Rule | unchanged |
| Control Plane Artifacts | Control Plane Artifacts | unchanged |
| Schema Lock v0 | Schema Lock v0 | unchanged |
| Boot-Path Synchronization Requirement | Boot-Path Synchronization Requirement | unchanged |
| Drift Audit Requirement | Drift Audit Requirement | unchanged |

---

## Preservation Contract

The following are explicitly preserved:

- The original Purpose sentence is preserved **verbatim** at the top of the new Purpose + Boundaries section.
- All anti-shrouding sub-section heading text preserved verbatim (only `##` → `###` demotion under the new `## Anti-Shrouding Guardrail Family` parent).
- All anti-shrouding body text preserved verbatim, including original paragraph breaks and line breaks.
- All enum definitions in Schema Lock v0.
- All existing boot sequence steps.
- All existing enforcement rules.
- All control plane artifact references (the list now includes `06` via the new Guardrail Memory section).
- Drift audit obligations.
- Boot-path synchronization requirement.
- Scope discovery rule.
- New-document intake protocol.

No content is removed. The only allowed structural changes are:
1. Purpose → Purpose + Boundaries (original Purpose sentence preserved verbatim; owns/does-not-own framing added).
2. Five anti-shrouding `##` sections → one `## Anti-Shrouding Guardrail Family` parent with `###`/`####` sub-sections (text preserved verbatim).
3. New overview pointer sections (Classification + Routing, Decision/Evidence Preservation, Supersession/Conflict + Open Review, Lifecycle Closure, Guardrail Memory) added; pointers only, no schema duplication.

---

## Non-Conflict Assertion

This restructure asserts:
- Coordination Charter still owns layer-coordination doctrine and lifecycle freshness at coordination level.
- Build OS still owns staged execution.
- Agent Work Protocol still owns runtime SOP, lifecycle maintenance enforcement, and stop proof.
- Build Entry Gate still owns implementation lane admission.
- Control Plane owns: classification + routing + ledger/catalog/read-graph schema discipline + supersession + open review + lifecycle/disposition routing and schema discipline + guardrail memory + anti-shrouding guardrail family + scope discovery + boot-path synchronization + drift audit.

**Lifecycle closure is shared by role**:
- Charter defines lifecycle freshness at coordination level.
- Agent Work Protocol enforces lifecycle maintenance operationally and produces stop proof.
- Control Plane owns lifecycle/disposition routing and schema discipline (where state is recorded, what shape it takes).

No layer boundary is violated. The new sections (Classification + Routing, Decision/Evidence Preservation, Supersession/Conflict + Open Review, Lifecycle Closure, Guardrail Memory) are overview pointers, not schema redefinitions; canonical schemas remain in `01`/`02`/`03`/`04`/`05`/`06`/`07`/`08`.

---

## Validation Checklist (Before Execution)

When approved to execute, verify:
- All preserved-verbatim sections appear unchanged.
- The original Purpose sentence appears verbatim at the top of Purpose + Boundaries.
- Anti-shrouding consolidated section contains all 5 sub-sections in original order.
- Anti-shrouding sub-section heading text preserved verbatim (no "Anti-Shrouding" prefix dropped); only `##` → `###` demotion applied.
- Anti-shrouding sub-section body text preserved verbatim, including original paragraph/line breaks.
- Lifecycle Closure section cross-references Charter Lifecycle Freshness Contract + Protocol §8 + §9.
- Lifecycle Closure final sentence reads: "No touched artifact may remain stale, deferred, or ambiguously current without explicit disposition. No artifact remains perpetually deferred after implementation." (No "remains current without explicit reason" absolute.)
- Non-Conflict Assertion frames lifecycle closure as shared by role (Charter coordination-level freshness; Protocol runtime enforcement; Control Plane routing+schema discipline).
- Guardrail Memory section points to `06_guardrail_antipattern_digest.md` and frames anti-shrouding as one family within it.
- Classification + Routing, Decision/Evidence Preservation, Supersession/Conflict+Open Review, Guardrail Memory sections route to canonical homes without duplicating schemas.
- Purpose + Boundaries section uses owns / does-not-own framing and explicitly notes Charter ownership of lifecycle freshness and Protocol ownership of lifecycle maintenance enforcement.
- Total file length increases by ~70-100 lines (from ~250 → ~320-350). Anti-shrouding share decreases from ~28% to ~15-18%.
- ReadLints clean post-execution.
- Coverage audit updated to reflect lifecycle-closure mapping change (`AWP-REV-CAT-RG-001` may close partially or fully depending on Lifecycle Closure section sufficiency).

---

## Execution Plan (When Approved Later)

1. Replace Purpose section with Purpose + Boundaries; preserve original Purpose sentence verbatim at top.
2. Insert Classification + Routing section after New-Document Intake Protocol.
3. Insert Decision / Evidence Preservation section after Classification + Routing.
4. Insert Supersession / Conflict + Open Review section after Decision / Evidence Preservation.
5. Insert Lifecycle Closure section after Supersession / Conflict + Open Review.
6. Insert Guardrail Memory section after Lifecycle Closure (immediately before Anti-Shrouding Guardrail Family).
7. Demote five anti-shrouding sections into the consolidated Anti-Shrouding Guardrail Family section with verbatim body and heading text preservation.
8. Verify all preserved-verbatim sections are unchanged.
9. Run ReadLints.
10. Update `01_master_corpus_catalog.md` notes for `00_architecture_memory_control_plane.md` row (notes refresh; no enum changes).
11. Update read-graph only if pointer behavior changes (likely no change; pointer set unchanged).
12. Return focused diffs and stop with proof per Protocol §9.

---

## Unresolved Assumptions

1. Whether to additionally inline a one-line summary at the top of each new overview section (currently drafted with prose paragraphs).
2. Whether Classification + Routing / Decision-Evidence Preservation / Supersession-Conflict + Open Review / Guardrail Memory overview sections should each be ~5-8 lines (currently drafted) or expanded to ~12-15 lines with more context. Current draft favors crisp.
3. Whether to introduce additional cross-references from Lifecycle Closure back to specific Coverage Audit IDs (e.g., `AWP-REV-CAT-RG-001` for lifecycle enforcement). Default: no — keep Lifecycle Closure clean; audit IDs live in audit doc.
4. Whether `Retro Re-Scan Trigger Policy (Always-On)` should remain `#### nested under Prospective + Retrospective Application Policy` (current draft) or be elevated to `### sibling under Anti-Shrouding Guardrail Family`. Current draft preserves the original nesting structure.

---

## Out of Scope

- Editing `00_architecture_memory_control_plane.md` in this artifact.
- Editing AGENTS, Charter, Protocol, Read Graph, Build Entry Gate, or any catalog/ledger artifact.
- Runtime/code/schema/migration files.
- Doctrine theory or new mechanics.

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

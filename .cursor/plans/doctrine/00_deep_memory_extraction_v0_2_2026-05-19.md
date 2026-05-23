# Deep Memory Extraction v0.2

Document type: `canon_digest`
Authority: Stage 2 derived extraction from cited architecture/doctrine/design sources; does not originate new binding doctrine
Status: Draft for review (Stage 2 only)
Domain(s): cns_orchestration, scheduling, doctrine_governance, identity_relationship, messaging_surfaces, federation
Lifecycle role: History and rationale core extraction for memory recovery
Source-of-truth relationship: Derived compression and routing aid; binding authority remains cited source docs
Supersedes: none
Superseded by: none
Manifest action: Candidate routing updates only; no manifest mutation in this stage artifact
Review gate: User/Knox Stage 2 checkpoint approval before Stage 3

---

## 1) Stage 2 Scope and Method

- Stage objective: map doctrine hardening chronology, separate historical rationale from still-binding authority, and identify stale/superseded language with cleanup routing.
- Extraction method: full-read or relevant-section-read against Stage 2 corpus, then evidence-anchored unit extraction with explicit confidence/routing.
- Non-negotiables enforced in this artifact:
  - No D6 doctrine authoring.
  - No Round 6 opening.
  - No manifest patching inside Stage 2 artifact.
  - No filename-only promotion to binding lessons.

---

## 2) Chronology of Major Pivots (What changed, where, why)

1. **Feature-first implementation reframed into system architecture map**
   - What changed: project shifted from direct feature shipping to architecture-first with explicit system-map governance.
   - Where: `docs/architecture/evolution_narrative.md` ("Act II: From features to a system", "Act III: The pressure-test era").
   - Why it mattered: moved decisions from implicit code behavior into explicit architecture authority.

2. **Rules/templates became core governance substrate (not messaging utility)**
   - What changed: communication decisions moved from procedural hooks into governed rules/template discipline.
   - Where: `docs/architecture/evolution_narrative.md` ("Act IV: The governance discovery", "Act V: Stress-testing the engine").
   - Why it mattered: converted safety/privacy and operational consistency into deterministic architecture policy.

3. **Target-first replacement of implicit rules engine v0**
   - What changed: legacy workflow notification path was classified as DELETE-AFTER-PARITY rather than migration target.
   - Where: `docs/architecture/evolution_narrative.md` ("Act VIII: The 4H pressure-test").
   - Why it mattered: prevented lock-in of pre-governed notification behavior.

4. **Doctrine-reconciliation arc locked foundational architecture as explicit doctrine**
   - What changed: implicit substrate assumptions were elevated into named Doctrine locks and canonical map sections.
   - Where: `docs/architecture/evolution_narrative.md` ("Act X: The doctrine-reconciliation arc").
   - Why it mattered: reduced repeated rediscovery and made anti-drift boundaries auditable.

5. **Identity vs relationship separation formalized (DL-10)**
   - What changed: one identity substrate with relationship-scoped operational contexts across brands/entities.
   - Where: `docs/architecture/evolution_narrative.md` ("Act XI"), `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` (carry-forward references).
   - Why it mattered: prevented both hard silos and unsafe global auto-share.

6. **Three messaging surfaces formalized (DL-11)**
   - What changed: patient-facing chat, external-line communications, and internal collaboration became distinct architectural surfaces.
   - Where: `docs/architecture/evolution_narrative.md` ("Act XII"), `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` (Round 3.5 citation discipline references).
   - Why it mattered: stopped substrate conflation across patient, ops, and internal communication contexts.

7. **Cross-surface lifecycle and governance hardening (DL-12)**
   - What changed: thread/task/attachment/notification/retention rules were bound as cross-substrate discipline.
   - Where: `docs/architecture/evolution_narrative.md` ("Act XIII"), `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` (pattern formalization and anti-drift lessons).
   - Why it mattered: reduced hidden state transitions and non-auditable operational behavior.

8. **Rail-agnostic substrate discipline (DL-13)**
   - What changed: vendor-confined adapter pattern and deterministic outbound governance were locked.
   - Where: `docs/architecture/evolution_narrative.md` ("Act XIV").
   - Why it mattered: made provider integrations composable without substrate corruption.

9. **CNS center-of-gravity correction (DL-14)**
   - What changed: explicit top-level lock that OMNI is CNS orchestration, not a messaging/vendor/rules app.
   - Where: `docs/architecture/evolution_narrative.md` ("Act XV"), `.cursor/plans/system_map_three_layers_60706286.plan.md` (DL-14 anchor + doctrine lock section).
   - Why it mattered: stopped repeated narrow framing drift.

10. **Universal event grammar + scheduling specialization locks (DL-16 then DL-15)**
    - What changed: universal CNS envelope/taxonomy locked first; scheduling spine locked as first specialization.
    - Where: `docs/architecture/evolution_narrative.md` ("Act XVI part 1/2"), `.cursor/plans/system_map_three_layers_60706286.plan.md` (doctrine lock + Phase B.5 status references).
    - Why it mattered: established reusable cross-domain grammar before domain-specific expansion.

11. **Mindbody ingestion reframed as evidence, not template**
    - What changed: project recognized imported vendor semantics as anti-pattern and hardened anti-vendor, anti-specialty leakage.
    - Where: `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` ("Act IX", "Act X"), `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` (Patterns 1, 4, 5, 7).
    - Why it mattered: preserved OMNI generic substrate while keeping operational coverage.

12. **Round 3.5 widened to source-agnostic CNS action orchestration**
    - What changed: narrow "conversation/outbound-only" framing corrected to source-agnostic multi-actor action model.
    - Where: `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` ("Act XIII", sections 13.1-13.6).
    - Why it mattered: prevented repeated rediscovery and bounded future round scope discipline.

---

## 3) Binding-Hardening Transitions (Rationale -> Binding)

- **Transition A: Implicit event/action governance -> explicit doctrine locks**
  - Original rationale source: `docs/architecture/evolution_narrative.md` (Acts IV-VIII, implementation pressure narrative).
  - Binding lock source: `.cursor/plans/system_map_three_layers_60706286.plan.md` (Doctrine locks DL-10 through DL-16 sections).
  - Current authority: system map doctrine locks; narrative remains explanatory.

- **Transition B: "Messaging work" framing -> CNS orchestration framing**
  - Original rationale source: `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` ("Act XIII", "Act XIV").
  - Binding lock source: `.cursor/plans/system_map_three_layers_60706286.plan.md` (DL-14 anchor and lock body).
  - Current authority: DL-14 + dependent lock references.

- **Transition C: Mindbody pattern import -> anti-vendor/anti-specialty substrate policy**
  - Original rationale source: `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` (Patterns 1, 4, 5, 7).
  - Binding lock source: round doctrine and system-map cross-DL warning references in narrative volume 2.
  - Current authority: doctrine lock and map-level warnings; post-mortem remains rationale evidence.

- **Transition D: Round-by-round rediscovery -> mandatory reading/citation discipline**
  - Original rationale source: `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` ("13.3", "13.4", "13.6", "Lesson 6-8").
  - Binding lock source: day-0 rule matrix index sections cited in narrative (2.19 + 2.21).
  - Current authority: matrix doctrine sections + linked ADRs/system map references.

---

## 4) Historical-Only Rationale (Useful but Non-Binding Command Authority)

- The narrative play-by-play language and author-process commentary in:
  - `docs/architecture/evolution_narrative.md`
  - `docs/architecture/evolution_narrative_volume_2_2026-05-17.md`
- The post-mortem "cost accounting" and tactical process lessons:
  - `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` (`§8`, parts of `§6`)
- Design pressure-test option trees and temporary alternatives:
  - `.cursor/plans/designs/2026-05-17_omni_scheduling_architecture_pressure_test.md` (explicitly marked "NOT doctrine", "for review")
  - `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md` (explicitly "CONVERGENCE ARTIFACT", tentative resolution framing)
- Build-contract execution sequencing details are build authority, not top constitutional doctrine:
  - `.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md`

Interpretation rule: these files are high-value rationale and execution memory, but binding command authority should be traced to doctrine locks, ADRs, and canonical map sections they cite.

---

## 5) Stale/Superseded Language Map

1. **"Narrative as current authority" drift**
   - Older source: `docs/architecture/evolution_narrative.md` (historical framing).
   - Winning source: `.cursor/plans/system_map_three_layers_60706286.plan.md` (explicit lock authority) + ADR references.
   - Conflict summary: narratives are sometimes read as command source.
   - Cleanup action: annotate operational usage guidance in Stage 2 handoff (keep narrative as rationale only).

2. **"Convergence artifact as final doctrine" drift**
   - Older source: `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md` (tentative recommendations).
   - Winning source: doctrine locks and approved matrix/ADR artifacts.
   - Conflict summary: rich detail in design file can be mistaken for lock-level authority.
   - Cleanup action: maintain explicit "tentative/non-doctrine" status line and cross-link to winning lock source where promoted.

3. **"Build contract equals constitutional doctrine" drift**
   - Older source: `.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md`.
   - Winning source: doctrine + ADR for architecture truths; build contract governs delivery scope/sequence.
   - Conflict summary: implementation contract sometimes used as architecture source.
   - Cleanup action: preserve category boundary in manifest/corpus catalog notes.

4. **Potential sequencing ambiguity around Phase B.5 vs later hardening references**
   - Older source: narrative text that describes sequence snapshots.
   - Winning source: system-map lock sections + phase plan files currently controlling execution.
   - Conflict summary: timeline wording can appear contradictory when read outside snapshot context.
   - Cleanup action: add explicit snapshot-date caveat wherever needed in future narrative volumes.

---

## 6) Forgotten-but-Important Guardrail Candidates (For Routing Review)

1. **Guardrail candidate:** "Narrative/design/build docs are never primary binding authority unless promoted"
   - Evidence: recurring distinction language in both evolution narratives and pressure-test docs.
   - Confidence: high
   - Proposed routing: Tier2 (doctrine usage guidance) or human_review for promotion target.
   - Human review note: may belong in manifest usage section, not in doctrine lock text.

2. **Guardrail candidate:** "Every round must start with citation-read receipt and end with authored-verdict closure"
   - Evidence: Round 3.5 scaffolding in volume 2 (sections 13.4/13.6 and lessons).
   - Confidence: high
   - Proposed routing: Tier1 if not already canonized in operative round index; otherwise no-op with cross-link.
   - Human review note: verify no duplicate with existing `§2.21` lock.

3. **Guardrail candidate:** "No vendor/specialty enums in substrate primitives"
   - Evidence: post-mortem patterns + volume 2 corrections.
   - Confidence: high
   - Proposed routing: Tier1 (already likely represented; treat as coverage verification).
   - Human review note: confirm doctrine lock locus to avoid duplicate restatement.

4. **Guardrail candidate:** "Binding lessons cannot be extracted from filename-only inspection"
   - Evidence: Stage process and extraction constraints in recovery plan.
   - Confidence: high
   - Proposed routing: Tier0/Tier1 process doctrine only if not already codified.
   - Human review note: likely should remain manifest/process governance, not domain doctrine.

---

## 7) Stage 2 File Classification Ledger

- `docs/architecture/evolution_narrative.md`
  - document_type: `narrative_or_postmortem`
  - authority: historical orientation; points to system map/ADR as binding
  - status: snapshot
  - lifecycle_role: chronology context
  - supersession_note: coexists with volume 2 for later arc; not superseded as volume 1 snapshot
  - manifest_impact: rationale reference only

- `docs/architecture/evolution_narrative_volume_2_2026-05-17.md`
  - document_type: `narrative_or_postmortem`
  - authority: historical orientation for B.5 through Round 3.5
  - status: snapshot
  - lifecycle_role: chronology + rationale + anti-pattern memory
  - supersession_note: future volume expected for later inflection points
  - manifest_impact: rationale reference only

- `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`
  - document_type: `narrative_or_postmortem`
  - authority: forensic lessons and failure patterns
  - status: active retrospective reference
  - lifecycle_role: anti-pattern prevention memory
  - supersession_note: extensible with additional patterns; not command authority
  - manifest_impact: rationale reference only

- `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md`
  - document_type: `canon_digest`
  - authority: distilled cross-domain pattern reference
  - status: reference
  - lifecycle_role: reusable pattern memory
  - supersession_note: subordinate to cited lock sources
  - manifest_impact: companion/reference

- `.cursor/plans/designs/2026-05-17_omni_scheduling_architecture_pressure_test.md`
  - document_type: `audit_or_pressure_test`
  - authority: design-pressure artifact, explicitly non-doctrine
  - status: historical design analysis
  - lifecycle_role: tradeoff and unresolved-question record
  - supersession_note: downstream doctrine/build docs supersede tentative options
  - manifest_impact: evidence/rationale

- `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md`
  - document_type: `audit_or_pressure_test`
  - authority: convergence synthesis, explicitly non-doctrine
  - status: recommendation artifact
  - lifecycle_role: architecture-to-build bridge
  - supersession_note: lock-level authority supersedes recommendations
  - manifest_impact: evidence/rationale

- `.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md`
  - document_type: `handoff_or_readiness_gate`
  - authority: delivery contract scope/sequence
  - status: contract gate artifact
  - lifecycle_role: implementation readiness and ordering
  - supersession_note: can be superseded by later build contracts
  - manifest_impact: execution reference, not constitutional doctrine

- `.cursor/plans/system_map_three_layers_60706286.plan.md`
  - document_type: `manifest_or_catalog` (canonical architectural map)
  - authority: primary binding architecture map in this corpus
  - status: active source-of-truth
  - lifecycle_role: doctrine lock and canonical section authority
  - supersession_note: in-place evolving source-of-truth
  - manifest_impact: highest routing anchor

---

## 8) Extraction Units (Stage 2 Field Contract)

### Unit S2-01
- path: `docs/architecture/evolution_narrative.md`
- title_or_section: Act IV, Act VIII, Act X
- inspection_depth: `full_read`
- extracted_item: decision
- source_reference: governance discovery + target-first deletion pattern + doctrine-reconciliation arc
- date_or_phase: Phase 4 to doctrine reconciliation
- status: `historical`
- affected_domains_or_triggers: rules/templates governance, architecture codification
- represented_in_manifest: yes
- proposed_routing: `Tier2`
- lesson_confidence: `high`
- supersedes: none
- superseded_by: system-map lock authority for command use

### Unit S2-02
- path: `docs/architecture/evolution_narrative.md`
- title_or_section: Act XI
- inspection_depth: `full_read`
- extracted_item: decision
- source_reference: identity-vs-relationship scoping; DL-10 arc
- date_or_phase: doctrine arc May 11
- status: `binding` (via promoted lock)
- affected_domains_or_triggers: identity, messaging, multi-brand
- represented_in_manifest: yes
- proposed_routing: `Tier1`
- lesson_confidence: `high`
- supersedes: silo/global-share extremes
- superseded_by: none

### Unit S2-03
- path: `docs/architecture/evolution_narrative.md`
- title_or_section: Act XII-XIV
- inspection_depth: `full_read`
- extracted_item: guardrail
- source_reference: three messaging surfaces + DL-12/13 governance expansions
- date_or_phase: doctrine arcs May 11-12
- status: `binding` (via promoted locks)
- affected_domains_or_triggers: messaging, external-line, lifecycle governance
- represented_in_manifest: yes
- proposed_routing: `Tier1`
- lesson_confidence: `high`
- supersedes: mixed-surface substrate assumptions
- superseded_by: none

### Unit S2-04
- path: `docs/architecture/evolution_narrative.md`
- title_or_section: Act XV-XVI
- inspection_depth: `full_read`
- extracted_item: decision
- source_reference: DL-14 framing correction; DL-16 universal grammar; DL-15 specialization
- date_or_phase: doctrine arc May 13
- status: `binding` (via promoted locks)
- affected_domains_or_triggers: cns framing, event grammar, scheduling specialization
- represented_in_manifest: yes
- proposed_routing: `Tier0`
- lesson_confidence: `high`
- supersedes: narrow/reductive CNS framing and ad hoc event grammars
- superseded_by: none

### Unit S2-05
- path: `docs/architecture/evolution_narrative_volume_2_2026-05-17.md`
- title_or_section: Act X, Act XIII, Lessons 6-8
- inspection_depth: `full_read`
- extracted_item: anti-pattern
- source_reference: pattern 9 rediscovery + pattern 10 narrow framing + citation discipline
- date_or_phase: Phase B.5 through Round 3.5
- status: `historical`
- affected_domains_or_triggers: round startup discipline, scope widening, citation use
- represented_in_manifest: partial
- proposed_routing: `human_review`
- lesson_confidence: `high`
- supersedes: ad hoc round entry without read receipts
- superseded_by: round discipline sections where canonized

### Unit S2-06
- path: `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`
- title_or_section: Patterns 1-10
- inspection_depth: `full_read`
- extracted_item: risk
- source_reference: vendor-template import, doctrine inflation, compound enums, rediscovery loops
- date_or_phase: 2026-05-16/17 arc
- status: `historical`
- affected_domains_or_triggers: scheduling and future pillar doctrine drafting
- represented_in_manifest: indirect
- proposed_routing: `Tier2`
- lesson_confidence: `high`
- supersedes: none
- superseded_by: lock-level anti-pattern guardrails where promoted

### Unit S2-07
- path: `.cursor/plans/designs/2026-05-17_omni_scheduling_architecture_pressure_test.md`
- title_or_section: discipline locks + unresolved Q1-Q24 + options
- inspection_depth: `full_read`
- extracted_item: seam
- source_reference: explicit "not doctrine" and unresolved question framing
- date_or_phase: pre-lock pressure test
- status: `historical`
- affected_domains_or_triggers: design option memory, unresolved seam catalog
- represented_in_manifest: no
- proposed_routing: `parked`
- lesson_confidence: `high`
- supersedes: none
- superseded_by: later locks/contracts where accepted

### Unit S2-08
- path: `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md`
- title_or_section: convergence status + Q-ledger recommendations + phased scope
- inspection_depth: `read_relevant_sections`
- extracted_item: decision
- source_reference: recommendation set for Q1-Q24 and phased operating model
- date_or_phase: convergence pre-lock
- status: `draft`
- affected_domains_or_triggers: scheduling/domain architecture implementation planning
- represented_in_manifest: partial
- proposed_routing: `human_review`
- lesson_confidence: `medium`
- supersedes: earlier pressure-test options
- superseded_by: build contract + doctrine locks

### Unit S2-09
- path: `.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md`
- title_or_section: feature ledger + sequencing + signoff structure
- inspection_depth: `full_read`
- extracted_item: guardrail
- source_reference: build contract gates and execution discipline
- date_or_phase: day-0 contract freeze
- status: `draft`
- affected_domains_or_triggers: implementation sequence and operational readiness
- represented_in_manifest: no
- proposed_routing: `Tier3`
- lesson_confidence: `high`
- supersedes: free-form implementation ordering
- superseded_by: future approved build contracts

### Unit S2-10
- path: `.cursor/plans/system_map_three_layers_60706286.plan.md`
- title_or_section: doctrine locks + phase B.5 status block
- inspection_depth: `read_relevant_sections`
- extracted_item: decision
- source_reference: lock-level canonical authority and phase status references
- date_or_phase: current canonical map
- status: `binding`
- affected_domains_or_triggers: all architecture and doctrine routing
- represented_in_manifest: yes
- proposed_routing: `Tier0`
- lesson_confidence: `high`
- supersedes: any conflicting narrative/design phrasing
- superseded_by: in-place lock updates only

---

## 9) Stage 2 Confidence + Manifest Change Recommendation

- Stage 2 confidence: **high** for chronology and hardening transitions; **medium** for any lock-promotion assumptions that require explicit cross-file verification in later stages.
- Proposed manifest change: **no-change in Stage 2 artifact** (preserve freeze condition).
- Human-review queue:
  1. Confirm whether round read-receipt/citation discipline requires additional manifest routing note.
  2. Confirm whether "historical-only authority boundary" should be codified as explicit manifest usage guardrail.
  3. Confirm Tier routing for build-contract/process guardrails (Tier2 vs Tier3 boundary).

---

## 10) Explicit Non-Actions Confirmed (Stage 2)

- No D6 doctrine opened.
- No Round 6 opened.
- No Stage 3 work initiated.
- No manifest patch performed inside Stage 2.
- No filename-only binding promotions used.


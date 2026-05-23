# Governed Composition Integrity Patch Spec

Document type: `handoff_or_readiness_gate`  
Authority: Patch-spec only (no doctrine edits executed)  
Status: Proposed  
Date: 2026-05-22  
Scope: Surgical doctrine/control-plane insertions for governed temporary coherence

---

## Execution Contract

- This file is the artifact for review.
- No target doctrine files are edited by this spec itself.
- No runtime/schema/migration work.
- No new primitives.
- Narrative volume creation is proposed only.
- Flow remains: **ratify -> patch-spec -> approve -> edit -> prove -> stop**.

---

## Global Language Guardrail (Mandatory)

- In doctrine patches, default to: `source event`, `signal`, or `atomic input`.
- Do not introduce `normalized_atom` as canonical object language unless separately ratified.

---

## Patch Targets (File-Specific, Minimal)

## 1) `.cursor/plans/system_map_three_layers_60706286.plan.md`

### Placement
- Inside `## Platform operational model (binding platform premise — precedes Intent and every section below)`.
- Insert after the shared-substrate paragraph and before the anti-case/anti-intake-collapse paragraph.

### Insertion (exact text)
```markdown
**Governed temporary coherence (binding premise extension):**  
OMNI is not intelligent because it stores source events/signals/atomic inputs.  
OMNI becomes intelligent when those inputs are arranged over time into governed, reconstructable, authority-owned context that can drive action, suppression/no-op/defer, escalation, and memory.

**Temporary context is not canonical truth by default.**  
Composed context packets/read models are decision-time arrangements. Canonical truth is committed only through owning-domain commit paths; CNS coordinates arrangement and routing, but does not become universal truth owner.

**Required outcome classification for composed context:**
- authority-owned commit,
- D7 evidence/materialization,
- suppression/no-op/defer memory,
- reconstructable but non-canonical rationale,
- stale/expired context excluded from active composition,
- excluded-from-active-context noise.

Excluded-from-active-context noise does not imply automatic deletion. Retention/deletion remains governed by source retention, legal/audit requirements, and domain policy.
```

---

## 2) `.cursor/plans/doctrine/11_build_entry_gate_v0.md`

### Placement
- Insert new top-level section between:
  - `## Boundary Invariants and Tests (must hold)`
  - `## Stop / Reroute Conditions`

### Insertion (exact text)
```markdown
## Foundational Composition Admission Checklist (Binding)

This checklist is mandatory before implementation authorization for any lane.

### Consequential-composition threshold (must classify first)
A lane must classify consequential paths vs lightweight paths before admission.

Consequential paths are those that can influence:
- patient-facing action,
- provider/staff task routing,
- suppression/no-op/defer/escalation outcomes,
- owning-domain commit/materialization,
- entitlement/payment behavior,
- scheduling readiness/mutation,
- audit/compliance-relevant state.

If this classification is missing, lane admission is blocked.

### Required proof questions (all must be answered)
1. Which source events/signals/atomic inputs enter this slice?
2. Which domain owns each consequential commit?
3. What context is temporary arrangement vs durable committed truth?
4. What lineage is preserved at each boundary hop?
5. What temporal/freshness states apply (fresh/stale/expired/re-anchor)?
6. What policy/template/model/config versions are pinned for consequential resolver outcomes?
7. What suppression/no-op/defer lifecycle and re-entry conditions are defined?
8. What is strict replay vs reconstructability-only?
9. What can be excluded from active composition and how is retention governed?
10. What is explicitly forbidden from silent cross-domain mutation?

### Non-admission conditions
Implementation authorization is blocked if any of the following is unresolved:
- consequential-vs-lightweight classification,
- freshness/re-anchor/invalidation declarations,
- policy/version pinning for consequential outcomes,
- suppression/no-op/defer lifecycle semantics,
- ownership-preserving commit boundaries.
```

---

## 3) `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`

### Placement A
- Under `## Rollout Step 2: Build Entry Gate v0`, directly after `**Critical rule**`.

### Insertion A (exact text)
```markdown
**Foundational composition lock (additional critical rule):**
No lane is implementation-authorized until it proves:
- lineage continuity,
- temporal/freshness semantics,
- authority-owned commit boundaries,
- reconstructability + decision provenance,
- consequence-memory handling (including suppression/no-op/defer lifecycle and re-entry).
```

### Placement B
- Append one bullet under `### Step-2 gate status (D1 readiness only)`.

### Insertion B (exact text)
```markdown
- Composition-proof lock active: lane admission is blocked when consequential-composition classification or foundational composition proof obligations are missing.
```

---

## 4) `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`

### Placement
- Insert new subsection between:
  - `## 10) Canonical Signal-to-Action Pipeline`
  - `## 11) Anti-Patterns (Binding Rejections)`

### Insertion (exact text)
```markdown
## 10.1) Temporary Coherence, Durability, and Decay (Binding)

Longitudinal context is a governed temporary arrangement, not automatic canonical truth.

For consequential decisions, OMNI must distinguish:
- source event/signal input,
- temporary composed context used for decisioning,
- authority-owned commit/materialized evidence,
- suppression/no-op/defer memory,
- reconstructable but non-canonical rationale,
- stale/expired context excluded from active composition,
- excluded-from-active-context noise.

Binding clarifications:
- temporary composed context != committed domain truth,
- excluded-from-active-context noise != automatic source deletion,
- retention/deletion remains source/legal/audit/domain-governed,
- cross-domain composition may inform ranking/routing/suppression/escalation but may not silently mutate sibling canonical truth,
- hard causal claims are not default; use influence/rationale/policy-basis unless causality is explicitly evidenced.
```

---

## 5) `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`

### Placement
- Append rows to `## Digest Contract` table.
- Verified next IDs after existing `D0-GRD-012`: `D0-GRD-013` onward.

### Rows (exact text)
```markdown
| D0-GRD-013 | Data dust (atomization without governed composition over time) | governed composition ratification packet + system map premise extension | composition_governance | critical | Build-entry composition checklist + lane admission lock | active | Atomic inputs without temporal/authority/consequence handling are non-compliant for consequential lanes. |
| D0-GRD-014 | Universal context graph treated as canonical truth owner | governed composition ratification packet + system map premise extension | domain_seams | critical | Owning-domain commit boundaries + anti-blob rule | active | Composition is domain-bounded; CNS coordinates arrangement and routing, not universal truth ownership. |
| D0-GRD-015 | Temporary context interpreted as committed truth without owning-domain commit | build-entry composition checklist + LI temporary-coherence section | cns_orchestration | critical | Candidate->resolver->owning-domain commit boundary checks | active | Temporary context packets/read models are non-canonical unless committed by owner. |
| D0-GRD-016 | Hidden mutable interpretation state (non-reversible consequential interpretation) | build-entry composition checklist + LI traceability sections | auditability | high | provenance + reversibility + policy/version pinning checks | active | Consequential interpretations must be supersedable/reconstructable with versioned rationale. |
| D0-GRD-017 | Canonical wording drift creates unratified primitives | governed composition ratification packet language guardrail | doctrine_hygiene | high | review gate + terminology discipline | active | Use source event/signal/atomic input terms unless new primitive is explicitly ratified. |
```

---

## 6) `.cursor/plans/doctrine/03_decision_extraction_ledger.md`

### Placement
- Append one row in the existing decision table.
- Header verified:
  - `| decision_id | source_file | decision_summary | domain | date_or_arc | canonical_destination | already_landed | needs_adr | needs_doctrine_lock | needs_human_review | status | notes |`

### Row (exact text)
```markdown
| D0GCI-DEC-001 | `.cursor/plans/arrangement_engine_integration_0052e275.plan.md` | Governed temporary coherence ratification: OMNI value is not atom storage alone; consequential composition must preserve lineage, temporal/freshness truth, authority-owned commit boundaries, reconstructability/provenance, policy/version pinning, consequence-memory lifecycle, and cross-domain mutation discipline. | architecture_governance | 2026-05-22_gci_ratification | `.cursor/plans/system_map_three_layers_60706286.plan.md`; `.cursor/plans/doctrine/11_build_entry_gate_v0.md`; `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`; `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`; `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | no | no | yes | yes | active | Ratification decision only; patch-spec + explicit approval required before doctrine edits. Preserve existing terminology; no new primitive introduction. |
```

---

## 7) `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md`

### Placement
- Append one row in existing evidence table.
- Header verified:
  - `| evidence_id | source_file | observed_feature_or_workflow | domain_implicated | omni_implication | decision_created | decision_target | anti_copy_warning | status | notes |`

### Row (exact text)
```markdown
| D0GCI-EVD-001 | `.cursor/plans/arrangement_engine_integration_0052e275.plan.md` | User/Knox/assistant ratification exchange crystallized: atomization alone risks data dust; governed temporary coherence over time is required for consequential composition. | architecture_governance | Evidence basis for doctrine and gate hardening across system map, Build Entry Gate, Build OS rollout, LI doctrine, and guardrail digest. | yes | D0GCI-DEC-001 | Evidence is non-binding by itself; promote only through explicit doctrine insertions and review approval. | active | Preserve as rationale input; canonical authority remains destination doctrine files. |
```

---

## 8) `docs/architecture/evolution_narrative_volume_3_2026-05-22.md` (Proposed Only)

### Policy
- Existing narrative volumes are snapshot-style and instruct “write a new volume at next inflection.”
- This file creation is **proposed only** in this patch-spec.

### Proposed initial text (if approved later)
```markdown
# Evolution narrative — Volume 3: Governed temporary coherence inflection (2026-05-22)

> Snapshot version: written 2026-05-22.
> What this document is: historical rationale/context.
> What this document is not: binding doctrine authority.
> Binding authority lives in:
> - `.cursor/plans/system_map_three_layers_60706286.plan.md`
> - `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
> - `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`
> - `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
> - `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`

## Inflection summary
This inflection recognized that atomization alone can still produce data dust.
The architectural landing: OMNI must preserve governed temporary coherence over time for consequential decisions, with explicit ownership, temporal/freshness semantics, provenance/reconstructability, policy/version pinning, and consequence memory handling.
```

---

## 9) `.cursor/plans/doctrine/01_master_corpus_catalog.md` (Tightened)

### Exact rows to update (identified by `file_path`)
- `.cursor/plans/system_map_three_layers_60706286.plan.md`
- `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md`
- `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
- `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`
- `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`

### Exact note text to append to `notes_or_extracted_decisions`
```markdown
 Governed temporary coherence hardening routed via `D0GCI-DEC-001` and evidence linkage `D0GCI-EVD-001`; insertion preserves existing terminology and ownership boundaries, with no new primitive canonization.
```

### If and only if narrative volume 3 is approved and created
- Add a new row for `docs/architecture/evolution_narrative_volume_3_2026-05-22.md` with:
  - `category`: `narrative_or_postmortem`
  - `authority_level`: `rationale_nonbinding`
  - `agent_read_rule`: `consult_if_routed` (or existing narrative-consult pattern)
  - `notes_or_extracted_decisions`: explicit non-binding pointer to canonical doctrine destinations.

---

## 10) `.cursor/plans/doctrine/04_manifest_read_graph.md` (Tightened)

### Exact sections/rows to modify
1. **Domain Routing Table (Provisional v1)** row: `CNS/orchestration` (row beginning `| CNS/orchestration | ...`)
2. **Domain Routing Table (Provisional v1)** row: `Longitudinal intelligence` (row beginning `| Longitudinal intelligence | ...`)
3. **D0-REV-004 Ratification Matrix (Wave 3 Gate)** row: `CNS/orchestration`
4. **D0-REV-004 Ratification Matrix (Wave 3 Gate)** row: `Longitudinal intelligence`

### Exact caveat text to append in each row’s caution/caveat field
```markdown
 Governed temporary coherence caveat: temporary composed context is non-canonical by default; canonical truth requires owning-domain commit path; cross-domain composition may inform routing/suppression/escalation but may not silently mutate sibling truth; causal authority claims default to influence/rationale/policy basis unless explicitly evidenced.
```

---

## Unresolved Assumptions

1. Narrative volume 3 creation remains proposed only (not approved in this patch-spec).
2. Catalog `agent_read_rule` for new narrative row should mirror existing narrative rows in current file style at execution time.
3. Read-graph row-field formatting must respect current table wrapping style when applied.

---

## Next Proposed Gate

Gate: **Patch-spec approval for execution**  
If approved, apply only this spec to target files, then return:
- files changed,
- focused diff summary per file,
- ledger ID confirmations,
- unresolved assumptions (if any),
- stop.


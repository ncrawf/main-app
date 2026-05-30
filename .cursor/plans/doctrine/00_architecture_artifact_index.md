# OMNI Architecture Artifact Index

Document type: `doctrine` (governance index)
Authority: `governance_binding` artifact-role index (does NOT define schemas; routes to canonical homes)
Status: `active` (created 2026-05-30, Foundation vNext pivot; Nick + Knox ratified)
Domain(s): `architecture_governance`
Lifecycle role: boot-visible index of which artifact holds what, and what is FORBIDDEN in each
Source-of-truth relationship: **indexes + ratifies existing homes. Does NOT fork governance.** The binding taxonomy authority remains `00_document_governance_and_taxonomy_2026-05-19.md`; this file is the legible one-page map over it. Per `D0TIER0-GRD-004` (cite-don't-restate), this file points; it does not duplicate schema.
Supersedes: none (the bloated `system_map_three_layers_60706286.plan.md` is demoted to evidence by `OMNI_System_Map_vNext.md`, not by this file)
Superseded by: none
Manifest action: `add_tier0` (boot-visible; pending catalog row + read-graph route — owed, see stop report)
Review gate: `user_knox_required`

---

## Why this exists

The Foundation vNext pivot (2026-05-30) established one finding: **OMNI did not lack an artifact OS — it had one, but the System Map and the DLs drifted out of conformance with it.** This index makes the artifact roles legible so no artifact becomes a dumping ground again. **We are making the existing OMNI architecture OS enforceable, legible, and clean — not building a new one.**

## The artifact roles, their ONE job, what is FORBIDDEN, and their home

| Artifact | ONE job (what it answers) | FORBIDDEN in it | Canonical home |
|---|---|---|---|
| **System Map** | "What are the parts, who owns truth, how do they connect?" — the MAP. | fields, lifecycles, events detail, open-debt lists, UX, future ideas, rationale, history | `OMNI_System_Map_vNext.md` (replaces bloated `system_map_three_layers_60706286.plan.md` → evidence) |
| **Domain Contract** | "How does this domain actually work?" — the TERRITORY (objects, fields, lifecycle, events, invariants, projections, disposition table). | strategy/why (→ ADR), open seams as backlog (→ open review), cross-domain glue mechanics (→ seam contract) | `contracts/<domain>_contract.md` (starting corpus = the DL files, dispositioned) |
| **Seam / Event Contract** | "How does domain A hand off to domain B?" — the machine-checkable GLUE between silos. | domain-internal detail (→ that domain's contract) | `contracts/seams/<source_event>__to__<target>.md` |
| **Doctrine** | "What must NEVER be violated?" — constitutional invariants only. | domain object fields, domain lifecycles | `.cursor/plans/doctrine/` (charter, control plane, Tier-0 guardrails, operator context) |
| **Decisions / ADR** | "Why did we choose this over alternatives?" | open questions, doctrine restatement | `03_decision_extraction_ledger.md` + `docs/architecture/*adr*.md` |
| **Open Decisions / seams** | "What is unresolved — owner, trigger, what it blocks, what can still proceed?" | resolved decisions, vague future-work | `08_open_review_queue.md` |
| **Supersession / Conflict** | "What replaced/contradicts what?" | new doctrine | `05_supersession_conflict_ledger.md` |
| **Guardrails** | "What repeatable failure mode must not recur?" | one-off notes | `06_guardrail_antipattern_digest.md` |
| **Field cases** | "What real-world case must our architecture survive?" — concrete observed cases (patient/provider/operator examples, AI behavior, failures, edge cases, motivating moments). | doctrine (→ thesis/contracts); features (→ future work); decisions (→ `03`); obligations themselves (→ `08`) | `evidence/omni_field_cases.md` (ONE growable `FIELD-*` corpus; append, do not proliferate) |
| **Evidence / Workbench** | "What did we reconcile, and from what?" — provenance, NOT build-facing truth. | being treated as canonical/lockable | `07_evidence_ingestion_ledger.md` (off-main `d753a64`) + narratives + handoffs + Frankenstein/reconciliation passes (incl. DL-20 §0) |
| **Future arcs** | "What might we build later?" | anything build-binding now | `future_work_registry.md` |
| **Build OS** | "How do agents pick work, load context, gate, prove, stop?" | domain/doctrine content | `09/10/11` + `agent_work_protocol.md` |
| **Catalog / Read graph / Boot** | "What exists; in what order is it loaded?" | content | `01_master_corpus_catalog.md` + `04_manifest_read_graph.md` + `AGENTS.md` |

## Three binding rules for the vNext foundation pass

1. **DL disposition rule.** The existing DLs are the *starting corpus* for Domain Contracts — NOT automatic contracts. Each DL is dispositioned: `preserve` / `clean-into-contract` / `split` / `merge` / `supersede` / `demote-to-evidence`, with rationale. (Per Knox refinement, 2026-05-30.)
2. **Disposition-on-demotion rule (the missing safety mechanism).** Any old primitive that is demoted/renamed/split MUST carry a disposition row: `old primitive/function → disposition → new home → why → what breaks if omitted`. No primitive disappears without this row. This is constitutional and applies to every domain pass. (This is the rule whose absence caused the `encounter_profile_registry` scare.)
3. **No-orphan-drawer rule (anti-proliferation).** No new governed-stream drawer (ledger / registry / case corpus / queue / append-only index) may be created without its **Operating Contract in the same pass** — scope / what-belongs / what-does-NOT / entry format / lifecycle states / append+split+prune rules / authority / **catalog + read-graph routing** — per Control Plane Enforcement Rule 7 + `D0TIER0-GRD-002`. A drawer without "how future agents discover, read, append, and prune it" defined at creation is invalid. Prefer appending to an existing drawer (e.g., a new field case → `omni_field_cases.md` as `FIELD-NNN`) over creating a new file; split only by explicit `architecture_steward + Nick` decision. (This is the rule whose absence caused the `omni_field_cases` naming/wiring scare, 2026-05-30.)

### Domain-pass mandatory pull (anti-graveyard)

Every domain contract pass MUST, before drafting/ratifying, inventory + pull + check (and cite in the contract's "Evidence sources" section):
1. the relevant **DL(s)** (starting corpus, dispositioned);
2. the domain's **pressure-test / scenario / rule-matrix corpus** in `designs/` (e.g., `day_0_scheduling_rule_matrix/` + `05_domain_service_occurrence.md` §SO-34) and the **audit/pressure-test corpus** in `.cursor/plans/audits/` (e.g., intake coherence / free-text-intake / narrative-atomization / system / adversarial / hybrid-care-delivery suites) by domain tag;
3. the **field cases** (`omni_field_cases.md` `FIELD-*`) tagged to that domain;
4. the **open-review rows** (`08`) tagged to that domain.

This is what guarantees the existing scenario/pressure-test bodies (the "100+ cases") and stored field cases/obligations are actually consumed when a domain is built — not just that the files exist. A field case may be converted into one or more domain pressure-tests during the pass (e.g., `FIELD-001` → `LI-PT-*` / `CNS-PT-*`); the scenario suites are NOT moved into `omni_field_cases.md`.

## Seam / Event Contract spec (the glue — canonical, NOT notes)

Serious orgs call these **API / event / interface / integration / message contracts**. For OMNI they are arguably MORE important than domain prose, because OMNI's core physics IS seam logic: *source event → candidate → CNS/policy/authority → owning-domain commit → projection.* The seams are where the silos (intake, CNS, scheduling, messaging, commerce, …) either become one OS or stay silos. They are where systems break.

**Layering — who says what about a seam:**
- **System Map** names that the seam EXISTS + its `seam_id` (e.g., "Scheduling → Service Occurrence via appointment lifecycle events; `SC-D3-D5-001`").
- **Seam/Event Contract** DEFINES the seam (schema below).
- **Domain Contracts** define each side's internal truth.
- **ADR** explains why the seam is designed that way.
- **Tests/schemas** enforce it later (machine-checkable).

**Seam contract required fields:** `seam_id` · `source_event` + `emitted_by` · `consumed_by` · `payload_required` · `result` (candidate kind) · `owner_of_commit` (who writes canonical truth) · `who_may_commit` vs `who_may_only_propose` (candidate-vs-commit) · `authority_gate` · `idempotency_rule` · `audit_record_emitted` (envelope / cns_decision) · `failure_routing` · `downstream_must_not` (explicit prohibitions).

**Guardrail (Knox):** canonical seam contracts ONLY for *durable cross-domain boundaries* — NOT every internal call. Small implementation calls live in code/types/tests later.

**Canonical seam registry (Day-0 set; edges listed in System Map, contracts in `contracts/seams/`):** intake → CNS · CNS → provider task · CNS → outbound message · messaging → CNS · scheduling → service_occurrence · service_occurrence → commerce · service_occurrence → documentation · document/consent → clinical action · clinical adoption → patient record · identity/contact → patient/account linking.

## Domain pass output contract (every domain, then STOP)

Each domain pass produces exactly: (1) System Map entry · (2) Domain Contract · (3) Decision/ADR rows in `03` · (4) Open-decision rows in `08` (owner + trigger + blocks + what-can-proceed) · (5) seam contracts for its outward edges · (6) disposition table · (7) evidence links. Then stop for Nick + Knox.

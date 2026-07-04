# OMNI Field Cases

Document type: `evidence` (field case corpus / scenario library)
Authority: `derived_nonbinding` — concrete real-world cases; NOT doctrine; informs thesis / domain contracts / seam contracts / tests / build behavior via routing
Status: `active` (created 2026-05-30; **growable append-only corpus**)
Domain(s): `cross_domain`
Lifecycle role: the canonical, growable home for **real-world field cases** — observed patient/provider/operator examples, AI behavior cases, workflow failures, edge cases, and motivating operational situations — that should pressure-test and inform OMNI's thesis, domain contracts, and build behavior so they don't drift into abstraction.
Source-of-truth relationship: evidence-class per `00_architecture_artifact_index.md`. Cases carry *provenance + concrete reality*; the *meaning* of a case may also live in the thesis (e.g., FIELD-001 → thesis §7.3); the *obligation* a case creates lives in `08_open_review_queue.md`. Complements `07_evidence_ingestion_ledger.md` (vendor-doc ingestion ledger; off-main `d753a64`) — that holds ingested source-doc evidence; THIS holds observed field cases.
Supersedes: `evidence/longitudinal_care_signal_cases.md` (renamed/broadened 2026-05-30 — too narrow; this is the general field-case corpus)
Superseded by: none
Manifest action: `add_tier2` (consult-when-routed; catalog row + read-graph route added)
Review gate: `architecture_steward_required`

---

## Operating Contract (per Control Plane Enforcement Rule 7 + `D0TIER0-GRD-002`)

This is a **governed-stream artifact** (append-only corpus), so it ships with its operating contract in the same pass as creation. This contract is what makes the drawer *usable and durable*, not a graveyard.

1. **Purpose / scope.** Hold concrete real-world cases that should inform OMNI architecture/product/AI behavior. One corpus, many `case_type`s — NOT one file per case or per class.
2. **What belongs.** Observed field cases across any domain: longitudinal-signal situations, AI behavior examples/failures, provider workflow misses, patient/messaging cases, intake weirdness, care_commitment ambiguity, commerce/operator edge cases, motivating "this is why OMNI exists" moments.
3. **What does NOT belong.** Doctrine (→ thesis / domain contracts). Features to build later (→ `future_work_registry.md`). Architecture decisions (→ `03_decision_extraction_ledger.md`). The obligation itself (→ `08_open_review_queue.md`; field cases *link* to it). Ingested vendor-doc evidence (→ `07` when on main).
4. **Entry format.** Every case is a `FIELD-NNN` block with the schema below. No free-floating notes.
5. **Lifecycle states.** `active` → `resolved` (its linked obligation closed) → `superseded` → `archived`. Status is per-case.
6. **Append / split / prune rules.** Append new cases as `FIELD-NNN` (monotonic). **Do NOT create a new evidence file for a new case or case_type** — append here. A `case_type` may be split into its own file ONLY by an explicit `architecture_steward + Nick` decision when the class grows large enough to warrant it (recorded as a decision + this file noting the split). Prune by marking `archived` with reason; never silent-delete.
7. **Authority boundary.** Evidence, non-binding. Informs via routing; never authors doctrine; never commits care.
8. **Catalog / read-graph impact.** Cataloged in `01`; read-graph route in `04`: **every domain contract pass MUST check relevant `FIELD-*` cases by domain tag before drafting/ratifying**, plus when handling user-provided real-world examples/failures.
9. **Stop-report proof.** Creation + each append reported per Agent Work Protocol §9.

### Case schema

```
FIELD-NNN
  case_type:            one of { longitudinal_signal_case | ai_behavior_case |
                                 provider_workflow_case | patient_messaging_case |
                                 care_commitment_case | intake_failure_case |
                                 commerce_edge_case | operator_policy_case | ... (extensible) }
  source / provenance:  where it came from (artifacts, screenshots, observation date)
  summary:              what happened (concrete)
  why_it_matters:       the lesson / what OMNI must do
  thesis / domain relevance: which thesis sections + domains it bears on
  affected_domains:     domain tags (for read-graph routing)
  required_future_handling: what must be designed/solved
  linked_open_review:   D0THES-REV-* obligation row(s), if any
  status:               active | resolved | superseded | archived
```

---

## FIELD-001 — Alec Harris longitudinal-signal case

- **case_type:** `longitudinal_signal_case`
- **source / provenance:** provider iMessage thread, 2026-05; screenshots in `assets/Screen_Shot_2026-05-30_at_2.45.35_PM-*.png` … `2.46.19_PM-*.png` (5 images; last is the "Ageless AI" anti-pattern ad).
- **summary:** Peptide (CJC) patient messages provider; provider clarifies 1-month supply / 2nd vial / no charge. Patient reports — unprompted — dramatically improved sleep ("scores off the chart," wearable/3rd-party tracking), muscle gain, morning energy, resolved 2-month tennis elbow, **and dosing uncertainty** ("wasn't sure I wasn't taking too much"). Provider does a manual ad-hoc check-in ("how're you feeling? anything notable?"). A live opportunity to adjust care (dose/labs/cadence) existed — entirely dependent on the provider catching it in a text thread.
- **why_it_matters:** This is the founding motivating case for OMNI's longitudinal intelligence. Today providers must manually notice/ask/remember/act, every time, in unstructured channels — not safe or scalable at volume. OMNI must turn longitudinal operating context into a **governed care opportunity** (candidate → provider/policy review → care_commitment/action/no-op → patient-visible), **without** letting raw signal become clinical truth. *Help providers help patients; get it right every time.*
- **thesis / domain relevance:** thesis §7.3 (lived example — PRIMARY meaning home), §7.5.3 patient-source, §8 universal flow, §9/§12.8 substrate-vs-care, §7.7.5 AI-projection-not-authority (the Ageless contrast), §9.1 model_version_of_record.
- **affected_domains:** CNS, Intake/patient-source, Messaging, Longitudinal Intelligence, care_commitment, AI/model-lineage, Labs.
- **required_future_handling:** design the end-to-end signal→candidate→review→care_commitment→patient-visible loop across the affected domains.
- **linked_open_review:** `D0THES-REV-142` (the solve-obligation; cannot close until the loop is designed + buildable).
- **status:** `active`

## FIELD-002 — Clinical-note assertion propagation / carry-forward lineage (SNF H&P)

- **case_type:** `provider_workflow_case` (clinical-documentation / assertion-lineage)
- **source / provenance:** Nick's live observation while writing SNF H&Ps, 2026-07-04 (trifecta discussion; captured from practice, not a document).
- **summary:** A clinical assertion flows forward across documents and encounters and is re-owned at each hop. Concretely: hospital documents carry **Assessments + Plans** → the provider records an **HPI** from them → which becomes the provider's own **Assessment** (adopted as-is / modified / materially different / dropped entirely) → with an associated (updated) **Plan** → which then propagates into the **next note's HPI**, or straight into the next **Assessment** — and onward. **The note is a snapshot/projection at a moment in time; the assertions inside it have their own independent longitudinal life, and each hop is an act of adoption, transformation, or supersession — ideally carrying provenance so you can see where each line came from.**
- **why_it_matters:** This is the concrete, hand-done version of OMNI's core Clinical-Memory physics — **assertion adoption + supersession lineage over a longitudinal truth, with the note as a materialized projection, not the truth itself.** OMNI is well-equipped for it (see below), and its differentiator is **provenance-preserving carry-forward**: a downstream reader (or the AI) can see *"this HPI line was carried from the hospital d/c summary three notes ago and was never re-verified by the current author"* — versus the EMR anti-pattern of **copy-forward / note bloat** where blind copy-paste silently lets stale, unowned content masquerade as current truth. Ties directly to `carried-forward ≠ re-verified truth` (REV-184 world-model-honesty) and the semantic-reconciliation posture. **Useful comparisons for future-us:** (a) **git applied to clinical notes** — each note = a commit; a carried-forward HPI = a cherry-pick/rebase of prior assertions; adopting a dx = a merge; a differing assessment = an overriding commit; **amend-not-overwrite = append-only history; `git blame` = `source_authority`** (who asserted it, when, derived from where). (b) **W3C PROV-O provenance graph** — entity *derived-from* entity, *by* an agent, *via* an activity: the formal model for "same, modified, different, or not at all" with the chain preserved (PROV-O also surfaced in C3.8 G1b axis-1 ontology).
- **thesis / domain relevance:** Clinical Memory (`clinical_assertion` + `clinical_adoption_state` not_adopted→adopted/rejected/**superseded** + `source_authority` + evidence_refs; "provider assessment = another assertion at highest authority that supersedes lower") · **amend-not-overwrite + `trace_lineage`** (append-only chain) · the **three-gate separation** D7 (the note/document) vs Clinical Memory (the assertions) vs Observation (the measurements); the note = a materialized `encounter_view`/`record_materialization` · **`source_authority_map`** (C3.6, field-level positional provenance) · **REV-184** (Assessment→Plan decision lineage across actors + time; outcome-reads-original-context) · Longitudinal Intelligence.
- **affected_domains:** Clinical Memory, D7, Observation, D5 (encounter_view), CNS, Longitudinal Intelligence, AI/model-lineage.
- **required_future_handling:** the v4 spine + the Clinical Memory contract (C5) should NAME **provenance-preserving carry-forward** — carried assertions surface their adoption-state + source lineage (not blind copy) — as the OMNI answer to copy-forward bloat. Distinct from minting a new primitive; it composes on existing Clinical-Memory adoption/lineage + `source_authority_map`.
- **linked_open_review:** none minted; routes via `v4_C4_spine_watch_list.md` **WI6 (semantic reconciliation)** + the Clinical-Memory contract pass at C5. (Open a `D0THES-REV-*` row only if the spine author finds a genuine gap.)
- **status:** `active`

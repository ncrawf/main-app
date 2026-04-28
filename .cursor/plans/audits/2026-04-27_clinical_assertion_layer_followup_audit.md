# Clinical Assertion Layer Follow-Up Audit (cross-industry state-reconciliation lens)

**Date:** 2026-04-27
**Audited:** `1K.5.A` clinical concept + assertion layer (committed as `157a542`)
**Lens:** generalized state-reconciliation patterns from logistics, aviation, manufacturing, real estate; Amazon (event-driven, append-only, replayable, idempotent, strict interfaces); Apple (human-readable, trust-preserving, privacy/minimum necessary, clear provenance, AI assists but does not obscure judgment)
**Scope:** evaluation only — is this still the smallest safe model? overbuilding? underbuilding? missing patterns? safe-to-keep verdict?

---

# Framing

Yes, what we built IS a generalized state-reconciliation system applied to clinical data. That framing is correct and helpful. But "applied to clinical data" matters — healthcare has three properties the other domains don't:

1. **Patient lived experience cannot be eliminated as evidence even when objectively wrong.** A logistics system can throw out the customer's "my package is missing" claim when the GPS shows it on the porch. We can't do that with "I have nausea" — the patient's report is itself the assertion, even if labs/exam find no cause.
2. **Same concept can be true in multiple contexts simultaneously.** A package is in one location at a time. Nausea can be "general history" + "GLP-1 side effect" + "pregnancy hyperemesis" all true at once.
3. **The authority hierarchy includes professional judgment as a first-class layer**, not just a more-trusted sensor. Provider isn't a "better sensor"; they synthesize.

Our model handles all three. So the cross-industry pattern fits, and the healthcare wrinkles are addressed.

---

## A. Is the current build plan still the smallest safe model?

**Yes, with one removal that would make it slightly smaller, and three small additions that would make it slightly more correct.** No fundamentally better solution exists for the scale + domain.

**Smallest safe? Crosscheck:**

| Pattern axis | What we have | Could go smaller? |
|---|---|---|
| Concept registry | ~50 starter concepts, code-as-config | No — without it, cross-pathway normalization breaks (CHF vs heart failure problem) |
| Assertion table | One table, all clinical concept types | No — splitting into per-type tables creates the problem-list/allergy-list duplication we explicitly rejected |
| Context model | jsonb envelope on assertion | No — without context, the nausea-in-multiple-contexts case flattens |
| Authority precedence | 8-value `authored_by` enum + `authority_rank` generated column | Marginally — could collapse `provider_confirmed`/`provider_assessed` into one. But provider_assessed is "I noted this" vs provider_confirmed is "I'm certain" — clinically distinct |
| History preservation | Append-only + supersession chains | No — alternative is UPDATE-in-place which loses replay |
| Conflict surfacing | 3 reconciliation_policy enum values | No — concept-level policy is necessary because allergy semantics ≠ symptom semantics ≠ controlled-substance-dx semantics |
| Triggers | Two-stage (intake_response → emitter → assertions → patients.*) | No — one-stage was the prior design that broke; that's why we did the two-stage rework |

**Considered alternatives:**

- **Pure event sourcing (Amazon style)** — events as primary, projections derived. We're 80% there: the assertion table IS the projection; intake_response is the source event for intake-derived assertions. Going fully event-sourced would mean adding `IntakeAnswered`, `ProviderConfirmed`, `LabResultArrived`, `AIExtracted` typed events as a layer above. **Verdict: overbuild for our scale.** Event sourcing pays off when you have many distributed consumers and need replay across services. Single Postgres + RLS + triggers gives us replay without the boilerplate.
- **CRDT (conflict-free replicated data types)** — useful when many concurrent writers across distributed systems. Not relevant; Postgres is single source of truth.
- **Triple store / RDF / SNOMED-graph** — a knowledge-graph approach where assertions are subject-predicate-object triples linked to ontology nodes. Pays off for cross-vendor interop. **Verdict: overbuild for v1.** The `external_codes?` slot on concepts is the future-friendly path.
- **No assertion layer at all (the Hims status quo)** — we'd ship without it and retrofit. **Verdict: blocks the AI-native goal.** Already audited and rejected last round.

**Better solution?** No. The five-layer model with concept_id ⊕ field_name complementary vocabularies, authority precedence, context-keyed reconciliation, and append-only supersession is the right structure. The one structural simplification considered:

- **Drop `parent_concept_id` from v1.** Declared but no behavior; the "refines_to_concept_id" provider action that would use it is also deferred. Two unused fields. Add when refinement UI ships.

---

## B. Are we overbuilding anything that should be deferred?

**Net: minor overbuild only. One fixable item, two debatable, all 1-line removals.**

**Real overbuild (recommend removal):**

1. **`parent_concept_id` field on the concept registry.** No behavior in v1. The retirement-with-replaced_by path is enough for v1 lifecycle. Add `parent_concept_id` when refinement UI lands and you need a hierarchy for "narrow this assertion to a child concept."

**Debatable (recommend keep):**

2. **`confidence` enum AND `status` enum overlap.** A reader might ask: if `status = provider_confirmed`, does `confidence` add anything? Yes — `confidence` records the SOURCE's self-reported reliability ("the lab said low T at moderate confidence"); `status` records who AGREES ("provider confirmed it"). Different axes. Keep both, but the system map should be explicit about the distinction (current text is implicit).

3. **12-value `assertion_type` enum** (`present | absent | history_of | suspected | ruled_out | active_problem | resolved | family_history | risk_factor | exposure | use | allergy_reaction`). Some redundancy with `status` (active_problem ≈ provider_confirmed + condition; resolved ≈ provider_resolved). But the clinical semantics differ — "history_of nausea" is different from "currently has nausea" and both can be provider_confirmed. Keep, but worth a small note that assertion_type captures CLAIM CONTENT while status captures AGREEMENT.

**Not overbuild despite appearances:**

- **Two-stage trigger pipeline** — required to preserve Fix A guarantees. Single-stage is the alternative we rejected.
- **`authority_rank` STORED generated column** — performance; ORDER BY is in the hot path for the read view.
- **`external_codes?` slot empty in v1** — costs nothing, future-friendly.
- **`reconciliation_policy` 3-value enum** — different concepts genuinely need different conflict semantics.
- **JSONB context** — context is genuinely sparse (most fields NULL); a flat-columns table would have many empty columns.
- **RLS + capability discipline** — non-negotiable for clinical safety.

---

## C. Are we underbuilding anything required for safe labeled clinical data?

**Yes — three small additions plus one structural acknowledgment.**

**Real underbuild (recommend addition):**

1. **`confidence_score?: float (0-1)` for AI-sourced assertions.** AI models often produce probabilistic outputs ("60% probability of CHF based on evidence X, Y, Z"). The current `confidence` enum (`low | moderate | high | definitive`) is too coarse for AI training and downstream filtering. AI consumers (next-gen AI training, dashboards, decision-support) want probability thresholds. Small addition: optional float column or `metadata.confidence_score`. Apply only to `authored_by = ai_suggested` initially.

2. **Idempotency key on `recordClinicalAssertion`.** The Stage 1 emitter is idempotent on `(intake_response_id, concept_id, context_key)`. Provider writes via `recordClinicalAssertion` are NOT idempotent — a double-click on "confirm CHF" writes two rows. Add optional `client_idempotency_key: string` parameter; presence makes the write idempotent on `(patient_id, concept_id, context_key, authored_by, client_idempotency_key)`. This is the Amazon pattern and matches the existing `1K.0` "Answer submission idempotency keyed on `(session_id, question_id, question_version, client_idempotency_key)`" rule at line 2923.

3. **Allergy + medication domain-specific data via `metadata` jsonb extension pattern.** Real allergies have reaction type (anaphylaxis vs rash), route (oral vs IV), and confirmed-via (provoked vs reported). Real medications have current dose, frequency, route, start_date, stop_date, indication. Today these don't fit on the assertion table cleanly. Solution for v1: explicitly state these go in `metadata` jsonb until the table promotes them (same pattern as `1K.14` promotion-trigger). A 2-sentence note in 1K.5.A.

**Structural acknowledgment (not a schema add; a doc clarification):**

4. **DLQ semantics for assertion emitter failures.** When the Stage 1 trigger fails (concept_id not in registry, malformed context, RLS rejection), what happens? Today: same DB transaction → both INSERT fail (closed-fail). That's the right behavior for clinical safety, but the system map should state it explicitly so engineers don't add a try-catch that swallows the error. One sentence: "Assertion emitter failures abort the source intake_response INSERT in the same transaction; no DLQ; this is a fail-closed property aligned with Intent's 'failed audit blocks the mutation' rule."

**Other potential underbuilds — explicitly NOT recommended for now:**

- **Patient-facing assertion view** — UX concern, not schema. The patient portal needs to render "your active conditions, confirmed by Dr. X on date Y" eventually. Defer to UX design pass.
- **Inter-observer agreement** ("Dr. A and Dr. B both confirmed") — UI derivation, not schema.
- **Negative consent / refusal** ("patient declined to answer") — could be `assertion_type = declined_to_answer` later. Defer; rare in v1 pathways.
- **Differential diagnosis sets** — provider can write narrative in clinical_visits; structured sets later.
- **Concept split/merge operations** — beyond retire+replaced_by, more complex evolutions are rare; manual migration handles them in v1.
- **SPC / drift detection on trackables** — Section 1M's trend queries are read-only today; auto-flagging drift is a Section 1L.20 / 1M follow-up.

---

## D. Are any state-reconciliation patterns missing?

**Most are present. Two patterns are partially-missing; both have small fixes.**

**Pattern coverage check:**

| Cross-industry pattern | Source domain | Status in our model |
|---|---|---|
| Raw inputs preserved | All | PRESENT — intake_response, observations, documents, visits, AI reviews append-only |
| Concept normalization | All | PRESENT — clinical_concepts registry |
| Current state computed separately | All | PRESENT — patient_clinical_assertion_current view |
| Authority modeled | All | PRESENT — authored_by + authority_rank |
| History preserved | All | PRESENT — append-only + supersession |
| Conflicts surfaced | All | PRESENT — requires_provider_review_on_conflict + view metadata |
| Strict interfaces at boundary | Amazon | PRESENT — recordClinicalAssertion + EvidenceRef union + AssertionContext typed shape |
| Append-only event log | Amazon | PRESENT — both intake_response and patient_clinical_assertions append-only |
| Replayability | Amazon | PRESENT — branch_path_token + version pins per 1K.4 |
| Idempotency on consumers | Amazon | PARTIAL — Stage 1 emitter yes; provider writes no (see C2 above) |
| Trust-preserving provenance | Apple | PRESENT — evidence_refs + authored_by + asserted_at |
| AI assists not obscures | Apple | PRESENT — AI never auto-confirms, never satisfies authority floor |
| Privacy / minimum necessary | Apple | PRESENT — RLS, capability gates, no PHI in concept_id strings |
| Deferred-with-decay (MEL) | Aviation | PARTIAL — fail-closed for safety but no time-bound resolution clock |
| Statistical process control | Manufacturing | MISSING — trends queryable but not auto-flagged on drift |
| Negotiation as artifact | Real estate | PRESENT — supersession chain + provider authority IS the negotiation |
| Single-table design | Amazon | PRESENT — one assertion table for all concept types |
| Compensation / corrective tx (Saga) | Distributed systems | PRESENT — supersession is the corrective; no need for distributed Saga |

**Two partial gaps:**

1. **Deferred-with-decay (aviation MEL pattern).** Aviation: "this defect can be deferred for N flight cycles, then must be addressed." We have authority-floor fail-closed (can't refill until provider reconciles), but no time-bounded "you have N days to reconcile this." For clinical safety, fail-closed forever is arguably MORE correct than a countdown — clinical urgency varies and shouldn't be a fixed timer. **Verdict: keep as-is. Don't add MEL-style decay.** The fail-closed-until-resolved property is the right healthcare analog.

2. **Statistical Process Control on trackables.** Manufacturing: control charts auto-detect distribution drift. We have `patient_state_observations` for trends; queries are manual. Section 1L.20 has triage_version for per-result lab abnormality flagging, but that's per-row, not trend-based. **Verdict: defer to a Section 1M follow-up.** Adding SPC requires a separate trend-detection job; not assertion-layer work.

**One pattern explicitly NOT taken (Apple lens deviation):**

- **Patient-readable provenance UI.** Apple would push for "your chart shows: [condition]. Confirmed by Dr. X, January 15. Source: visit notes from your January appointment." We have the data; we don't have the UI design. Patient-facing view of clinical assertions is a real UX gap. Worth flagging for the patient portal roadmap. Not a schema concern.

---

## E. Verdict

**SAFE TO KEEP. NEEDS SMALL FIXES.**

Six 1-3 sentence patches close the real gaps. None require schema migration or architectural reshape:

| # | Fix | Type | Section to patch |
|---|---|---|---|
| 1 | Drop `parent_concept_id` from v1 (overbuild) | Removal | 1K.5.A clinical_concepts shape |
| 2 | Add `confidence_score?: numeric(3,2)` for AI-sourced assertions | Optional column addition | 1K.5.A patient_clinical_assertions schema |
| 3 | Add optional `client_idempotency_key` to `recordClinicalAssertion` | API addition | 1K.5.A recordClinicalAssertion contract |
| 4 | Domain-specific allergy/medication data lives in `metadata` jsonb until promoted | Doc clarification | 1K.5.A schema notes |
| 5 | DLQ-failure semantics: emitter failure aborts source INSERT (fail-closed) | Doc clarification | 1K.5.A two-stage trigger pipeline section |
| 6 | `confidence` (source self-report) vs `status` (agreement) distinction made explicit | Doc clarification | 1K.5.A enum descriptions |

**Defer (real but not yet):**
- Patient-facing assertion view (UX design pass)
- SPC / drift detection on trackables (1M follow-up)
- Inter-observer agreement, differential dx sets, negative consent (rare in v1 pathways)
- Concept split/merge beyond retire+replaced_by (manual migration handles v1)

**Don't add (would be overbuild):**
- Pure event sourcing
- CRDTs
- Triple store / RDF / SNOMED graph
- MEL-style countdown timers for clinical reconciliation
- Per-concept-type assertion sub-tables

---

## My honest read

What we built is the right pattern at the right scale. The cross-industry lens validates the structure: this is a textbook reconciliation system. The Amazon lens flags one real gap (provider write idempotency). The Apple lens flags one design gap (patient-facing view, UX not schema). Healthcare-specific concerns (context multiplicity, lived-experience preservation, professional judgment as authority layer) are all addressed.

The six small fixes are ~30 lines of patch text total. After they land, the assertion layer is foundational-complete and the question-bank seed can resume with confidence.

---

## Disposition

User approved on 2026-04-27. All six fixes applied to `1K.5.A` in the same checkpoint as this audit file (Fixes 2 and 6 fold into adjacent text on the schema block).

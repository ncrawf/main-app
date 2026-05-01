# Inbound narrative atomization — pressure test + foundational architecture

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** define how all inbound patient/customer/vendor narrative — across channels (intake free text, portal messages, inbound emails, phone transcripts, support notes, vendor messages, partner-webhook narrative) and across domains (clinical / ops / fulfillment / billing / subscription / support / safety / vendor accountability) — flows through a single coherent atomization pipeline with proper authority semantics, cross-source redundancy resolution, AI correction feedback loop, and consolidation discipline
**Verdict:** B with shared cross-channel + cross-domain atomization architecture; new Section 1P; one new shared table (`inbound_narrative_reviews` + companion `inbound_narrative_review_role_assignments`); 16 patches as a single multi-file checkpoint

---

# Part 1 — Cross-industry framing

The user explicitly asked: how would Amazon, Apple, Tesla handle this? Cross-industry validation of atomization as the right pattern at $1B-company scale:

- **Amazon CS:** customer contact (chat / email / phone / returns flow) → classified into multiple "intent vectors" (refund, order status, shipping, subscription, returns) → each vector routes to its native workflow → source preserved with shared `interaction_id`. Agents see whole interaction with all extracted intents in one view.
- **Apple HealthKit:** "Contributions to a record" — patient narrative note → AI proposes structured updates (medication, condition, symptom) → proposals live in a SEPARATE review queue (atomized candidates) → user explicitly accepts each → no clean digest auto-writes to chart.
- **Tesla service:** driver report → parsed into structured codes (alignment, brake, suspension, software, billing) → each is a CANDIDATE diagnosis until tech inspects → atoms are review queue items, not direct work orders.
- **Salesforce / Zendesk:** "Case" = inbound source narrative (immutable thread) → "Tasks" = derived action atoms across queues → atomization is the universal industry pattern.
- **Stripe:** chargeback dispute → atomized into transaction lookup, fulfillment proof, customer outreach, refund decision atoms → each independent atom in its workflow.
- **Epic / Cerner clinical NLP:** provider note → SNOMED-coded extraction → problem list / med list / allergy list curated as candidates → provider explicit acceptance per code → no direct chart write.

**Universal pattern: source preservation + atom extraction + native workflow routing + grouped human review.** What changes per channel: storage primitive for source, classifier sensitivity, default reviewer assignment. Pipeline shape is identical.

---

# Part 2 — Core purpose + core mantra

**Core purpose (1P.0 framing; this is a clinical intelligence + care delivery operating system, not a simple telehealth intake flow):** turn messy multi-source patient/customer/vendor input into structured, auditable, longitudinal understanding and routed work.

**Architecture flow:**

```
raw source input
  → immutable evidence (per channel's native SoT row)
  → classification + extraction (deterministic handlers for structured fields; AI atomization for narrative ONLY)
  → structured candidate atoms (in native workflow tables; OR direct writes for vendor-authoritative operational facts)
  → authority-aware review (parallel role-scoped reviewers for clinical/narrative; deterministic reconciliation for structured operational)
  → committed domain records (with proper authority semantics per domain)
  → derived current state (patient_clinical_assertion_current; commerce_orders state; subscription state; etc.)
  → safety preflight + provider packet + workflows + analytics + AI training
```

**Core mantra (1P.0; binding):**

- **Raw source is evidence** — preserved immutably in channel-native SoT.
- **Candidate atoms are suggestions / work items** — never authority on creation; never auto-promote.
- **Committed records are domain truth** — promoted via authority-aware review (human or deterministic reconciliation depending on domain).
- **Authority is domain-specific** — vendor authoritative for shipment status; provider authoritative for clinical assessment; patient authoritative for self-reported subjective state; AI never authoritative anywhere.
- **AI assists; rules and humans decide** — deterministic handlers always run first when structure exists; AI extracts candidates from narrative; humans (or rules) commit to native workflows.

---

# Part 3 — Mixed inbound stress tests (atom matrices)

## Stress test A — Patient voice/email: "package late, wrong dosage, stomach ache, cancel subscription"

| Atom | Domain | Native table | authored_by | Reviewer | Authority on accept |
|---|---|---|---|---|---|
| Package late | fulfillment | `commerce_exception_requests` (per `1G.5`) | n/a (ops claim) | ops | ops resolves; carrier follow-up |
| Wrong dosage shipped | fulfillment + clinical safety | `commerce_exception_requests` + `clinical_required` turn | safety scan + ai_suggested | ops + provider | ops fixes shipment; provider audits clinical impact |
| Stomach ache (post-dose) | clinical assertion + adverse event | `patient_clinical_assertions` candidate (`symptom.abdominal_pain` + `metadata.disease_state = side_effect_course_active` + `context.treatment_phase = onboarding`) + safety atom | `ai_suggested`, `confidence = moderate`, `evidence_refs = [patient_message]` | provider + safety | provider promotes to `provider_confirmed` or rejects via `recordClinicalAssertion` |
| Cancel subscription | subscription | `subscription_change_requests` (NEW; per Section 1I extension) | n/a (ops claim) | billing | billing processes per existing 1I refund/pause path |
| Adverse event signal (wrong dose + symptom) | safety + compliance | `clinical_required` urgent turn (`priority_hint = urgent_clinical`) + `1H.6.1E` exception classification | safety scan deterministic | provider + compliance | provider audits; compliance logs per FDA pharmacovigilance |

**Five atoms, one source row, one `inbound_narrative_review_id`.** Provider sees clinical+safety subset, ops sees fulfillment, billing sees subscription, compliance sees pattern-flagged events. All see source narrative (capability-gated PHI access).

## Stress test B — Vendor (operational only): "Patient A didn't get her labs filled, we charged her $49, please refund her. Please update her address"

This message contains only **vendor-authoritative operational claims** about events vendor controls — NO patient clinical claims. Atoms write directly with vendor as authoritative source, subject to deterministic validation + reconciliation + idempotency + conflict-detection; NO candidate stage; NO human review for clean reports.

| Atom | Domain | Native table | Authority | Reviewer |
|---|---|---|---|---|
| Lab order not fulfilled | lab/ops | `commerce_exception_requests` cross-linked to 1L lab order | vendor authoritative for fulfillment status; deterministic reconciliation against lab order state | lab ops auto-resolves; provider sees clinical impact (missing data → may pause refill per 1L.16) |
| Vendor charged $49 (refund request) | billing | 1I.4 refund request (existing path) | vendor authoritative for "we charged"; deterministic reconciliation against Stripe ledger; refund decision is ours | billing auto-reconciles charge, decides on refund |
| Patient communication: notify about refund + lab issue | support | `patient_action_items` of `support_communication_required` (NEW) | n/a (ops task) | support |
| Address update request | data correction | `partner_data_corrections` (NEW; auto-applied with audit when vendor authoritative per partner contract; otherwise routes to ops review) | vendor MAY be authoritative per partner contract | ops or auto |
| Vendor accountability signal | compliance | `vendor_partner_incidents_rollup` feed (DEFERRED v1.1) | n/a (system signal derived from atoms) | compliance / partnerships (when threshold crossed) |

**Five atoms across five workflows, one vendor message, one batch.** Notice: NO atom routes to `patient_clinical_assertions` — vendor isn't relaying patient clinical claims here.

## Stress test C — Vendor (clinical relay): "Patient B reports she's nauseated since starting tirzepatide last week, asking if she should stop"

Vendor relaying patient clinical claim. Uses NEW `third_party_reported` authority.

| Atom | Domain | Native table | Authority | Reviewer |
|---|---|---|---|---|
| Patient symptom: nausea (post-medication) | clinical assertion candidate | `patient_clinical_assertions` candidate | **`authored_by = third_party_reported`** + `evidence_refs.kind = vendor_message` + `metadata.vendor_id` + `metadata.relayed_originator = patient` + `status = unconfirmed` | provider; promotes to `provider_confirmed` via `recordClinicalAssertion` if appropriate, OR rejects, OR requests direct patient confirmation via Mode F system check-in |
| Patient question: should I stop tirzepatide? | clinical question | `patient_action_items` of `provider_question_pending` | n/a | provider responds via existing message_thread |
| Possible adverse event signal | safety | `clinical_required` urgent turn | safety scan deterministic | provider |

**Three atoms, one vendor message, one batch — DIFFERENT authority semantics from operational vendor case.** Clinical relay uses `third_party_reported` (NEW; rank 25, between `patient_reported` [30] and `ai_suggested` [20]). NEVER `patient_reported` (not first-person), NEVER `lab_derived` (no lab provenance), NEVER `ai_suggested` alone (the AI classified the relay; the human source is the vendor; the second-hand chain is the actual provenance). Provider review required for clinical promotion.

## Stress test D — Mixed-routing edge case: "We found her testosterone level — 350 ng/dL"

**Path A (structured payload — HL7/FHIR result with typed schema):**
- Routes through Section 1L lab pipeline FIRST (deterministic handler) → `patient_diagnostic_reports` + `patient_lab_observations` → `lab_derived` authority. **Bypasses Section 1P entirely** (deterministic mapping is available; no AI atomization needed).

**Path B (free-form email with informal mention, NO typed schema):**
- Routes through Section 1P narrative atomization → produces ONE atom: `patient_action_items` of `provider_question_pending` ("vendor delivered out-of-band lab via narrative — confirm intent, file appropriately"). Provider's options: (1) order through Section 1L Scenario A (writes `lab_derived` properly with full provenance), (2) accept as patient-history-style assertion (writes `third_party_reported` + `metadata.value_source = 'vendor_partner_reported'` + structured value), (3) reject as insufficient provenance.

**Path C (mixed message — both structured + free-form):**
- BOTH paths fire: structured rides 1L, narrative rides 1P. **Both share one `inbound_narrative_review_id`** so reviewer sees full source picture (lab on chart + narrative atom in review batch — linked).

**CI lint enforces:** `lab_derived` reserved exclusively for Section 1L pipeline; vendor narrative mentioning lab values uses `third_party_reported`; AI MUST NOT run atomization over typed-schema fields where deterministic handler exists.

---

# Part 4 — Twenty hard invariants

1. **Source narrative is immutable raw evidence** — preserved in its channel-native SoT; never mutated by atomization.
2. **Atomization fans out to existing native workflow tables** — no new per-domain queue tables; one new shared `inbound_narrative_reviews` batch entity (+ companion role-assignments table) is the only structural addition.
3. **AI extraction creates candidates, never authority** — `authored_by = ai_suggested`, `status = unconfirmed`, `confidence ∈ {low, moderate}` for AI-extracted clinical atoms from patient narrative.
4. **One source → many atoms across domains, grouped by `inbound_narrative_review_id`** — atoms link back via `metadata.inbound_narrative_review_id` so reviewers see the full source.
5. **Parallel role-scoped reviewers** — atoms route by domain to their role pool (provider / ops / billing / support / compliance); per-role SLA; batch fully reviewed only when all role-slices complete (or all atoms deterministically reconciled).
6. **All assigned reviewers see the source narrative** (capability-gated for PHI scoping per `1J.10` minimum guardrails); cross-domain context preserved.
7. **Provider/staff freehand bypasses the candidate stage** — provider IS authority; AI assistance inline in composer; atoms write `provider_assessed` / `provider_confirmed` directly on send/save; no `inbound_narrative_reviews` row for outbound provider/staff narrative.
8. **Vendor authority is DOMAIN-SCOPED (binding):** vendor IS authoritative for vendor-controlled operational facts. Vendor operational data bypasses AI extraction but MUST pass deterministic validation + reconciliation + idempotency + conflict-detection before commit. **No blind commits.** Schema/type validation; idempotency on `(vendor_id, vendor_event_id, vendor_event_kind)`; reconciliation against canonical internal record; conflict detection routes mismatches to ops review via `commerce_exception_requests` of `vendor_state_conflict`. Deterministic-validation-and-reconciliation is the gate (operational equivalent of human review for clinical candidates). NO AI extraction stage, NO human review for clean reports. Refund DECISIONS remain ours.
9. **Vendor is SECOND-HAND for patient clinical claims (binding):** vendor relays use `authored_by = third_party_reported` (NEW; rank 25) + `evidence_refs.kind = vendor_message` + `metadata.vendor_id` + `metadata.relayed_originator`. NEVER `patient_reported`, NEVER `lab_derived`, NEVER `ai_suggested` alone. Provider review required before clinical promotion. **Hard boundary:** `third_party_reported` is reserved EXCLUSIVELY for unstructured / narrative second-hand claims; FORBIDDEN for structured vendor data. Structured vendor data uses deterministic mappings (`lab_derived` per Section 1L; ops authority per Section 1I; `document_extracted` per 1O.14). CI lint enforces.
10. **Structured-first principle (binding; CI-enforced hard constraint):** deterministic handlers ALWAYS run FIRST on structured payload fields. AI atomization runs ONLY on unstructured / free-text / mixed-content portions. Any attempt to run AI extraction on structured, typed payload fields where deterministic mapping exists is invalid and MUST fail CI lint at PR time. Mixed messages route in two streams sharing one `inbound_narrative_review_id`.
11. **Cross-source redundancy resolved at the canonical assertion layer** — same `(concept_id, context_key)` from patient + vendor + repeated check-in dedupe per `1K.5.A` reconciliation policies; never per-channel deduplication; CI lint forbids per-channel dedupe.
12. **Pattern detection rides existing rollup views** — `patient_clinical_assertion_history_rollup` for clinical patterns; `vendor_partner_incidents_rollup` (DEFERRED v1.1) for vendor-quality patterns; `ai_correction_patterns_rollup` (DEFERRED v1.1) for AI quality patterns. No parallel narrative-frequency detector.
13. **Conversational skip is recorded, not silent** — `inbound_narrative_reviews` row created with `status = conversational_skip` even when no atoms are produced; AI classifier confidence threshold for skip is auditable + replayable.
14. **No parallel patient clinical truth system (binding):** all patient clinical truth flows through `patient_clinical_assertions` per `1K.5.A`. Section 1P creates candidates that promote into the canonical assertion layer. Operational atoms live in their native operational tables — those are NOT clinical truth.
15. **Authority precedence updated (binding):** the `authored_by` enum on `patient_clinical_assertions` becomes 9 values: `provider_confirmed > provider_assessed > lab_derived > document_extracted > patient_self_correction > patient_reported > third_party_reported > ai_suggested > system_derived`. Authority floor enforcement per `1J.10` reads the new enum.
16. **Authority ranking is precedence, not absolute reliability (binding):** the 9-value precedence ordering encodes WHO WINS when two assertions on the same `(concept_id, context_key)` conflict. It does NOT encode absolute reliability. Reliability is multi-dimensional (source-quality tier, evidence-strength, time-decay, prior track record, partner-quality rating). Source context + evidence MUST remain visible via `evidence_refs[]`, `metadata.relayed_originator`, `metadata.vendor_id`, `metadata.partner_quality_tier?`, `metadata.confidence_signals?`; reviewer judgment may override the precedence default by writing higher-authority assertion that supersedes.
17. **`third_party_reported` provider-review requirement (binding default; future-policy refinement allowable):** by default, every `third_party_reported` clinical assertion candidate requires provider review before promotion via `recordClinicalAssertion`. **Future policy-based auto-accept may be introduced ONLY when ALL of the following hold:** (a) source is a structured, trusted partner with declared payload contract and partner-quality-tier rating; (b) the data is structured (NOT narrative — narrative third-party relays NEVER auto-accept); (c) domain rules in pathway/concept registry explicitly enumerate auto-accept-allowed fields. Auto-accept rules code-as-config, clinical CODEOWNER gated, audited per `1J.10`. v1 ships with provider-review-always semantics universally.
18. **Section 1P consolidation discipline (binding; forward rule):** Section 1P MUST remain a coherent, consolidated architecture. Future modifications MUST be incorporated into Section 1P itself or its declared cross-link sections (`1K.5.A`, Section 1L, Section 1I, 1O, `1J.10`, `1G AI layer`). Audit files reference Section 1P; the section absorbs the binding rule. CI lint flags PRs that introduce inbound-atomization-related rules outside Section 1P or its declared cross-link homes. **No second narrative pipeline. No parallel atomization subsystem.**
19. **AI output is provisional; corrections preserve evidence (binding):** every AI extraction is provisional. Human corrections are append-only events that preserve the original AI output. Original AI atom rows are NEVER deleted/mutated. Every correction MUST carry stable `correction_reason` enum + pin `ai_model_version` + `ai_prompt_id` + `classifier_version`. Original AI output remains queryable for evaluation, regression tests, audit; correction event carries WHY.
20. **Safety-miss tracked as separate quality / safety event (binding):** corrections with `correction_reason ∈ {missed_safety_signal, misrouted_safety_to_nonclinical}` fire a `1H.6.1E` exception classification on top of the standard correction audit row. Routes to clinical CODEOWNER + compliance with **independent SLA + escalation** per `1G.5`. Aggregate rollup of safety-miss events feeds compliance dashboards + regulatory pharmacovigilance reporting per `1K.5.A` pregnancy worked example precedent. **Safety misses are NEVER buried in AI quality stats.**

---

# Part 5 — AI output correction / feedback discipline

## `correction_reason` enum (~20 values; code-as-config)

- **Routing / classification:** `misclassified_domain` | `misclassified_atom_type` | `wrong_urgency`
- **Atomization quality:** `over_atomized` | `under_atomized` | `spurious_extraction` | `redundant_with_prior`
- **Concept / assertion correctness:** `wrong_concept_mapping` | `wrong_assertion_type` | `wrong_context_key` | `confidence_too_high` | `confidence_too_low` | `wrong_authored_by` | `relayed_originator_wrong` | `provider_clarification` | `provider_rejected_clinically`
- **Safety (HARD; fire separate quality/safety event):** `missed_safety_signal` | `misrouted_safety_to_nonclinical`
- **Vendor / partner specific:** `vendor_data_conflict_unresolved` | `vendor_authority_misassigned`
- **Escape hatch:** `other_with_note` (REQUIRES bounded `metadata.correction_note`)

## Capture mechanism (no new table)

Corrections fire as append-only `audit_events` rows. Payload: `inbound_narrative_review_id`, `original_atom_id`, `original_atom_authored_by`, `ai_model_version`, `ai_prompt_id`, `classifier_version`, `corrected_atom_id?`, `correction_reason`, `correction_note?`, `corrected_by_user_id`, `corrected_by_role`, `corrected_at`. Original AI atom rows never deleted/mutated. Native-table supersession chain carries clinical-truth correction; correction event carries WHY.

## Ownership matrix

- **Reviewer tags `correction_reason`** at correction time (provider/ops/billing/support/compliance role from `inbound_narrative_review_role_assignments`).
- **Safety-miss exceptions** route to clinical CODEOWNER + compliance per `1H.6.1E` + `.github/CODEOWNERS`.
- **AI engineering** owns labeled feature dataset + classifier/prompt iteration on non-safety corrections; safety-relevant prompt/rule changes require clinical CODEOWNER approval per existing CODEOWNERS rules for `clinical-concepts/` and `system_map_three_layers_*`.
- **CI lint** enforces: every correction MUST carry `correction_reason`; no silent overwrites; safety-miss reasons MUST fire `1H.6.1E` channel.

---

# Part 6 — Provider/staff freehand carve-out

## Provider freehand

- Source rows: `clinical_visits.assessment` (signed clinical narrative), outbound `messages` from provider, `clinical_visits` addenda.
- AI runs INLINE in composer: drafting assistance + structured-action suggestions ("you wrote 'start tirzepatide 2.5mg weekly' — shall I create a `medication.tirzepatide` assertion at `provider_confirmed` + open the Rx flow?").
- Provider edits/accepts BEFORE sending/signing.
- On send/save: atoms write directly with `authored_by = provider_assessed` or `provider_confirmed`. **NO `inbound_narrative_reviews` row.**
- Source narrative IS audit-preserved (visit row, message row), but doesn't enter candidate-review pipeline.

## Staff freehand (support / ops / billing freehand)

- Source rows: staff-authored support notes, staff outbound emails to patient, staff-authored phone-call summaries.
- Same pattern: AI assists inline; staff edits/accepts; on send/save, atoms write directly with `authored_by = system_derived` (for ops/billing) or via `requireCapability` audit per `1D.1`.
- Outbound staff narrative does NOT enter Section 1P.

## Inbound staff-authored note ABOUT a patient interaction (e.g., staff documents a phone call)

- IS a Section 1P source kind (`staff_authored_support_note`).
- Staff is reporting what happened; structured atoms extracted are second-hand and require provider/ops review.
- Staff CAN pre-classify atoms during note-taking, fast-tracking acceptance.

---

# Part 7 — Sixteen-patch summary (single multi-file checkpoint)

| # | Patch | Anchor | Scope |
|---|---|---|---|
| 1 (PRIMARY) | NEW Section 1P "Inbound narrative atomization" | between Section 1O and closing sections | ~275 lines; 13 subsections (1P.0–1P.12); 20 invariants verbatim; channel taxonomy; atom routing matrix; new tables; freehand carve-out; vendor mixed-routing; redundancy reconciliation; cross-source safety scan; CI lint; correction discipline embedded in 1P.11 |
| 2 | `1K.14` schema list adds 2 rows | 1K.14 schema table | `inbound_narrative_reviews` + `inbound_narrative_review_role_assignments` |
| 3 | `1K.5.A` line 3307 narrative-evidence rule reframed | 1K.5.A binding paragraph at line 3307 | acdf7d9 paragraph reframed as Section 1P intake-channel specialization (two-sentence prepend; content unchanged) |
| 4 | `Section 1G AI layer` line 369 generalized | 1G AI layer "When it runs" enumeration | free-text intake extraction emitter generalized to inbound narrative atomization emitter; bullets for messages/emails/transcripts/support/vendor channels |
| 5 | `1G.5` ops/exception bullet | 1G.5 exception handling | fulfillment + ops atoms route to `commerce_exception_requests`; cross-link to 1H.6.1E |
| 6 | `Section 1I` subscription/refund/vendor billing atoms bullet | Section 1I | `subscription_change_requests` (NEW); refund atoms via 1I.4; vendor-billing atoms via 1I.X partner-billing flow |
| 7 | `1G.8.5` provider workspace batch review UI | 1G.8.5 workspace drawer/panel | one inbox item per `inbound_narrative_reviews` row; batch review screen with raw narrative + grouped atoms |
| 8 | `1G.11` action items extended types | 1G.11 action items | `support_communication_required` (NEW); `partner_data_correction_pending` (NEW); `ai_quality_improvement_pending` (NEW); `metadata.inbound_narrative_review_id` |
| 9 | `1J.10` line 2737 narrative safety-scan turns generalized | 1J.10 safety preflight | reads `clinical_required` turns with `event_type = inbound.narrative_safety_flag` regardless of source channel (was intake-only) |
| 10 | `1K.4` answer_type extension + in-app message routing | 1K.4 line 3002 question-bank entry shape | `free_text_long` answer_type (~20KB cap); >20KB auto-routes to Section 1O document pipeline; in-app message routing via Section 1P when AI-classified actionable |
| 11 | `Section 1L` structured lab carve-out + structured-first lint | Section 1L | HL7/FHIR/typed JSON ALWAYS rides 1L; `lab_derived` reserved; CI lint enforces structured-first; vendor narrative mentioning lab values uses `third_party_reported` |
| 12 | `Section 1O` structured document carve-out | Section 1O | typed schema rides 1O.14 (`document_extracted`); free-form rides 1P |
| 13 | `1H.6` vendor incidents rollup pointer (deferred view) | 1H.6 | `vendor_partner_incidents_rollup` keyed on `(vendor_id, atom_kind, time_window)`; v1.1 implementation; v1 captures via `vendor_id` on atoms |
| 14 | `Section 1N` AI training labeled features | Section 1N | atoms become labeled features on accept/reject; tuple includes `correction_reason`, `ai_model_version`, `ai_prompt_id`, `classifier_version` |
| 15 (FOUNDATIONAL) | `1K.5.A` authority enum extension — `third_party_reported` | 1K.5.A schema block + line 3287 + `1J.10` line 2738 | rank 25; CHECK constraint extension; `authority_rank` generated column; precedence string; floor enforcement; CI lint |
| 16 (FOUNDATIONAL) | AI output correction / feedback discipline | Section 1P 1P.11 sub-section + 1H.6.1E cross-link + Section 1N feed extension | structured `correction_reason` enum (~20 values); append-only `audit_events`; safety-miss carve-out; AI training feedback loop; ownership matrix; CI lint |

---

# Part 8 — Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30 with multiple precision-correction passes:
1. Domain-scoped vendor authority (operational deterministic, clinical relay second-hand)
2. Authority precedence vs reliability separation
3. Vendor clinical relay narrative-only boundary
4. Provider review default with future-policy refinement allowable
5. Structured-first CI-enforced hard constraint
6. Section 1P consolidation discipline forward rule
7. AI output correction / feedback discipline (structured `correction_reason` enum + safety-miss separate channel + AI training feedback loop)

Sixteen patches applied as a single multi-file checkpoint alongside this audit.

After landing: question-bank seeding for `repo/clinical-concepts/` continues; `repo/intake/safety-scan-rules/` is the natural code-as-config home for Section 1P deterministic safety scan rules; AI emitter implementation lands later (binding rules unblock deterministic engineering when wiring arrives). Section 1P consolidation discipline ensures future modifications go INTO the section, not as parallel sprawl.

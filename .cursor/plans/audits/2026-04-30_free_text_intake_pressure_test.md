# Free-text intake handling — pressure test + foundational binding rule

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** define how raw narrative intake answers (e.g., "Is there anything else you want your provider to know or ask?") flow through the system across pathways and time, including safety routing, AI extraction, longitudinal pattern detection, packet rendering, and Mode J interaction
**Verdict:** B — needs a binding narrative-evidence rule before free-text can safely drive extraction, safety routing, packet rendering, longitudinal signals, or AI features

---

# Part 1 — Framing flip: what the model already does correctly

The system map already stores raw narrative intake answers correctly:

- **Storage:** `intake_response` row with `answer_type = free-text-bounded` per [§1K.4 line 3002](../system_map_three_layers_60706286.plan.md). Same immutable, append-only, version-pinned discipline as every other answer (`question_id`, `question_version`, `module_version`, `engine_version`, `branch_path_function_version`, `branch_path_token`, `pathway_id`, `submitted_at`, `actor_user_id`).
- **Mode J:** patient self-correction supersession via `supersedes_response_id` chain works identically for narrative answers — the answer row itself is supersedable per `1K.13` Mode J discipline. Mode J does NOT override structured chart-memory assertions; narrative supersession applies only to the answer row itself, not to derivatives.
- **Stage 1 emitter no-op:** [1K.5.A line 3299](../system_map_three_layers_60706286.plan.md) explicitly says *"For questions WITHOUT a `concept_mapping` ... narrative free-text ... the Stage 1 emitter is a deliberate no-op."* — this correctly blocks dual-SoT and prevents narrative from minting unauthorized assertions.
- **No projection to chart:** legacy `1K.5` Fix A direct projection to `patients.*` chart columns is gated by `concept_mapping`; narrative answers correctly do not denormalize.

**The gap is the bridge.** Today the system map says only what does NOT happen with narrative. It does not yet say what DOES happen for: safety routing at write time, AI extraction emitter scope, assertion-vs-concern-vs-question disambiguation, mixed clinical/non-clinical splitting, longitudinal pattern detection, packet rendering of raw text + extracted candidates, or interaction with structured chart-memory supersession. Locking these foundationally now (before question-bank seeding and AI emitter wiring) keeps the bridge aligned with existing primitives and prevents drift toward a parallel narrative subsystem.

---

# Part 2 — Free-text intake vs portal messaging (same evidence class, different surface)

| dimension | portal message (`messages` row) | free-text intake (`intake_response` row, `answer_type = free-text-bounded`) |
|---|---|---|
| storage | `messages` row in `message_thread` (Layer 2 SoT per file head) | `intake_response` row, version-pinned, replayable |
| append-only | yes | yes |
| version-pinned | no | yes (`question_id`, `question_version`, `module_version`, `branch_path_token`) |
| bidirectional | yes (provider replies inline) | no — one-way patient input; provider replies via the existing `message_thread` if needed |
| triggers `clinical_required` | yes via `from_patient` reply or `1G.3` outbound rule | **NEW**: yes when deterministic safety scan or AI extraction surfaces critical signal |
| AI assistive layer | yes — Section 1G AI / `patient_chart_ai_reviews` for classification, drafting, triage | **NEW**: same emitter pattern as lab-derived (`1L.17`) and document-extracted (`1O.14`) |
| projection to clinical assertions | n/a — messages do not auto-extract assertions | **NEW**: AI-extracted candidates, `authored_by = ai_suggested`, `confidence ≤ moderate`, `status = unconfirmed`, `evidence_refs` back to source |
| projection to message_thread | n/a — IS the thread | **NO** — narrative stays in `intake_response`; no duplicate transcript; provider replies via existing message_thread for the program when warranted |
| timeline pointer | yes (projection per Layer 2 line 18) | yes — pointer-style `intake.narrative_received` event when present |

**Architectural answer:** free-text intake answers are **immutable raw evidence** that fan out to multiple existing downstream homes simultaneously (assertions, concerns, action items, `clinical_required`, packet rendering, ops triage). They never spawn a parallel narrative subsystem. The bridge from raw narrative to those homes is what this audit locks.

---

# Part 3 — 10-case behavior matrix

| # | Case | Storage | clinical_required | AI candidates | authored_by | evidence_refs | Provider review | Packet | Must NOT |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Nausea in narrative, no structured Q | `intake_response` | no (unless dose-escalation context flags it) | `symptom.nausea` candidate | `ai_suggested`, `confidence = moderate`, `status = unconfirmed` | `[intake_response]` | accept/reject/edit via `recordClinicalAssertion` | raw text + candidate side-by-side | auto-confirm; create `provider_confirmed` |
| 2 | "Worried about pancreatitis" | `intake_response` | no | **concern**, NOT condition assertion; `metadata.patient_concern_topic = 'pancreatitis'` | `ai_suggested` concern candidate (no `assertion_type = present`) | `[intake_response]` | provider answers concern via existing message_thread when engaging | raw text + concern label | extract as `condition.pancreatitis`; conflate worry with claim |
| 3 | Off-pathway provider question | `intake_response` | no | **question**, route to `patient_action_items` (`provider_question_pending`) | `ai_suggested` question candidate | `[intake_response]` | provider answers via existing message_thread when engaging | raw text + question marker | extract as clinical fact; auto-mint a new thread |
| 4 | Mixed paragraph (side effect + outside med + anxiety + billing) | `intake_response` (one row) | yes if any segment hits safety floor | per-segment candidates: `symptom.<x>` (side effect), `medication.<name>` (outside med), `condition.anxiety` or `symptom.anxious_mood`; billing → `patient_action_items` (`ops_triage_request`) per `1G.5`/`1G.11` | each candidate `ai_suggested`; billing not an assertion at all | each → `[intake_response]` | provider acts per candidate; ops handles billing | raw text + per-segment candidate list | merge segments into one assertion; route billing to clinical queue |
| 5 | Same concern × 8 over 12 mo | 8 separate `intake_response` rows | per-instance scan | each instance produces its own candidate via the AI emitter | repeated `ai_suggested` candidates per instance | each → its own `[intake_response]` | rollup view (`patient_clinical_assertion_history_rollup`, line 3287) detects pattern when extraction creates assertion | banner via `1K.12` per pattern banner rule | independently track repeated narrative without extraction (no parallel narrative-pattern engine — extraction is the bridge) |
| 6 | Free text contradicts prior structured | `intake_response` | yes if structured field has `time_sensitive_30d` floor; else no | candidate flagged `metadata.discrepancy_with_structured = true`; lower-authority candidate cannot supersede higher | `ai_suggested` (never authoritative) | `[intake_response, prior_assertion_id]` | provider reconciles via `recordClinicalAssertion` (`provider_confirmed` or `provider_rejected`) | banner: "Possible discrepancy with prior answer — review" | overwrite structured assertion; bypass authority floor |
| 7 | Urgent / safety-critical narrative | `intake_response` | **yes (mandatory)** — code-as-config keyword/regex scan per `1G.2` opens `clinical_required` in same DB transaction; queue `priority_hint = urgent_clinical` per `1G.7.6` | full extraction set + safety candidates | safety scan = deterministic; AI = `ai_suggested` secondary | `[intake_response]` + scan `rule_id` + `rule_version` | immediate CoR or on-call routing per `1G.9` | top-of-packet red banner | rely on AI alone for safety routing; bury safety-critical fact only in narrative; auto-mint `provider_confirmed` from a safety match |
| 8 | Vague language ("I feel off") | `intake_response` | no | `confidence = low` candidates only; possibly only `patient_concern_topic` (no claim) | `ai_suggested`, `confidence = low` | `[intake_response]` | low-priority review | raw text + low-confidence marker; sorted below confirmed | promote `confidence = low` to `present` claim; auto-create assertion |
| 9 | Mixed clinical + non-clinical | `intake_response` (one row) | only on clinical segments | per-segment classification; non-clinical → `patient_action_items` of `ops_triage_request` per `1G.11` | clinical: `ai_suggested`; non-clinical: not an assertion | `[intake_response]` | clinical → provider; non-clinical → ops | raw text + per-segment routing tags | route non-clinical to clinical queue; lose non-clinical content |
| 10 | Provider accepts one fact, rejects another | unchanged | unchanged | one `patient_clinical_assertions` row per AI candidate | each independently authored | each independently linked back to same `intake_response` | provider acts per row via `recordClinicalAssertion` | per-fact accepted/rejected badges | force all-or-nothing acceptance; lose per-fact provenance |

---

# Part 4 — Hard invariants (verbatim, locked into Patch 1)

1. **Raw free text is immutable source evidence** — append-only `intake_response` row; same version-pinning + supersession discipline as every other answer; Mode J supersession applies only to the answer row itself, never to AI-extracted derivatives.
2. **AI extraction is not clinical authority** — every AI-derived row is `authored_by = ai_suggested`, `status = unconfirmed`, `confidence ∈ {low, moderate}`; never satisfies authority floors per `1J.10`; never gates `clinical_required` (deterministic safety scan does that).
3. **Extracted clinical facts must become structured assertions with `evidence_refs` back to the raw response** — narrative → assertion bridge runs through `recordClinicalAssertion` with `evidence_refs = [{kind: 'intake_response', id, question_id, question_version}]`; never a parallel narrative store.
4. **Patient questions create / reuse message threads only when they need response workflow** — extracted question candidates land in `patient_action_items` of type `provider_question_pending`; the existing message_thread for the program is the response surface only when a provider engages; no auto-projection of narrative INTO `messages`.
5. **Mixed clinical / non-clinical content splits** — clinical segments → assertion / concern / question candidates; non-clinical (billing, shipping, account, scheduling) → `patient_action_items` of `ops_triage_request` per `1G.5` taxonomy; one `intake_response` row may emit candidates of mixed types in the same DB transaction.
6. **Repeated narrative concerns are longitudinally detectable** — only via the assertion bridge: per-instance AI extraction creates assertion candidates that accumulate in `patient_clinical_assertion_history_rollup`; there is no parallel narrative-frequency detector, no topic counter, no theme rollup outside the assertion + rollup pipeline.
7. **Urgent / safety-critical language can trigger routing, but never confirmed clinical truth** — deterministic keyword/regex scan opens `clinical_required` + queue priority elevation + CoR/on-call routing in same DB transaction; provider review is required to confirm any clinical fact derived from narrative (no auto-`provider_confirmed` from a safety match).
8. **No new tables, no new views, no new write APIs, no new subsystem** — every fan-out target already exists: `patient_clinical_assertions`, `patient_chart_ai_reviews`, `patient_action_items`, `clinical_required` (`1G`), `patient_timeline_events` pointer, message_thread (provider replies only).

---

# Part 5 — Patch summary

Five patches applied as a single checkpoint. No new subsections, no addendums, no Stage 1.6 sub-stage. The narrative-evidence rule sits as a peer binding rule among existing 1K.5.A binding rules.

| # | Patch | Anchor | Scope |
|---|---|---|---|
| 1 | **Narrative free-text intake evidence (binding; foundational)** | §1K.5.A — after Stage 1.5 paragraph (line 3303), before Partial-data semantics (line 3305) | ~30-line peer binding rule defining the three deterministic fan-outs (safety scan / AI extraction emitter / discrepancy detection), repeated-narrative pattern rule, and packet rendering rule; embeds 8 hard invariants |
| 2 | **Question-bank entry shape extension** | §1K.4 line 3002 | Adds `narrative_intent` (5-value enum, REQUIRED on `free-text-bounded`) and `safety_scan?: boolean` (default `true`; CI lint allowlist limited to `demographic_descriptor`; clinical CODEOWNER approval required for any other opt-out) |
| 3 | **Free-text intake extraction emitter** | Section 1G AI layer — line 365 area "When it runs (triggers, non-exhaustive)" enumeration | New bullet naming the emitter, same pattern as lab/document extraction; idempotent per `(intake_response_id)`; never auto-confirms |
| 4 | **Narrative safety-scan turns** | §1J.10 — line 2737 area "Time-sensitive clinical facts" paragraph | New sibling bullet: preflight reads open `clinical_required` turns with `event_type = intake.narrative_safety_flag`; blocks `prescribe_catalog`/`refill_approve` with reason code `paused_pending_narrative_safety_review`; explicitly names route-but-never-confirm rule |
| 5 | **Narrative answer rendering** | §1K.12 — alongside line 3315 partial-assertion rendering rule | Raw text verbatim + per-segment AI candidates as separately actionable rows; red banner on safety-scan match; yellow banner on discrepancy; "Patient questions for provider" sub-section; never silently dropped |

---

# Part 6 — What this preserves / gains / explicitly does NOT build

## Preserves

- No new tables, no new views, no new write APIs, no new subsystem.
- Raw narrative is immutable evidence — same discipline as every other `intake_response` row.
- Authority precedence (line 3285) intact — AI never auto-confirms, never satisfies floors.
- Existing primitives carry all fan-outs: `patient_clinical_assertions`, `patient_chart_ai_reviews`, `patient_action_items`, `clinical_required`, `patient_timeline_events`, message_thread (provider replies only — no narrative→thread projection).
- Repeated-narrative pattern detection rides on existing `patient_clinical_assertion_history_rollup` via extraction; no parallel narrative-pattern engine.
- Mode J discipline intact — narrative cannot bypass structured supersession.

## Gains

- Safety scan defined at write time (in same DB transaction as `intake_response` INSERT).
- AI extraction emitter scoped + bounded — same pattern as lab/document extraction.
- Concern vs question vs claim disambiguated structurally (`narrative_intent` field on question bank).
- Mixed clinical / non-clinical splitting routes through existing exception/triage paths.
- Repeated narrative becomes detectable longitudinally only via the assertion bridge (no parallel system).
- Packet rendering rule prevents safety-relevant narrative being buried.
- Forbidden-paths CI lint guards against future drift (no `narrative_*` rollup tables/views).

## Explicitly NOT building

- Narrative-pattern detector / topic-frequency counter / theme rollup outside the assertion pipeline.
- Auto-projection of narrative into `messages` / `message_thread` (would create dual transcript SoT).
- Auto-promotion of AI-extracted candidates without provider review.
- Mode J supersession from narrative content.
- AI-only safety routing (deterministic scan is the gate).
- New tables, new views, new write APIs.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30 with the framing flip ("raw narrative IS stored; gap is the bridge rule") and the no-Stage-1.6-sub-stage refinement ("weave the narrative pathway inside the existing 1K.5.A flow"). Five patches applied as a single checkpoint alongside this audit.

After landing: question-bank seeding for `repo/clinical-concepts/` proceeds with narrative-evidence discipline locked as foundational. AI extraction emitter implementation lands later (no rush; the binding rule is what unblocks deterministic engineering when it arrives).

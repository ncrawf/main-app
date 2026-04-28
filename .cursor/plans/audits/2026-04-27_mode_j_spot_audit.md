# Mode J Spot Audit — 2026-04-27

**Audit type:** focused single-pattern audit of Mode J (patient-initiated updates to static clinical facts), commissioned externally as a follow-on to the 2026-04-27 intake coherence pressure test.

**Scope (strict):** Mode J only. No re-analysis of the broader system. Verifies 9 named enforcement points; identifies missing fields, ambiguities, accidental misimplementation paths, and audit/reconstructability breaks.

**Scope of system map at time of audit:** `system_map_three_layers_60706286.plan.md` at commit `12f3468` (5,762 lines), containing the 15 intake-coherence patches plus the two follow-up fix-ups.

**Posture:** focused enforcement check against an externally-supplied 9-point checklist.

**Status:** findings adopted; 5 fix patches authorized; this file is the durable record of the audit + the planned patch set.

---

## Overall: PARTIAL (with one FAIL element)

Of 9 enforcement points: **5 PASS, 3 PARTIAL, 1 FAIL.** The FAIL is real and material — it would block clean implementation. ChatGPT's audit ask was substantive (assessment at the bottom).

---

## Point-by-point

### 1. Append-only writes to `intake_response` (no UPDATEs) — PASS

Forbidden in two places, reaffirmed in two more:
- `1K.5` line 3061: *"**Forbidden:** any UI path that UPDATEs the original `intake_response` row"*
- `1K.5` line 3062: *"Correction is a new row; it is never an `UPDATE` on the original answer"*
- `1K.13` Mode J row line 3385: *"Append to `intake_response` via `recordIntakeResponse`"*
- `1K.13` failure-modes block line 3395: *"`1K.5` append-only + `supersedes_response_id` chain"*

### 2. `correction_reason = patient_self_correction` — PARTIAL

Named correctly in three places (`1K.5` line 3061, Mode J row line 3385, `1K.14` schema line 3441 enum). **Weak point:** the schema declares `correction_reason?` as **nullable**, and the 1K.5 rule says *"Forbidden: ... bypasses the `correction_reason` field"* — but the **conditional requirement** ("`correction_reason` MUST be present when `supersedes_response_id` is set") is implied, not literally stated. An engineer reading `correction_reason?` could legitimately think it's optional even on supersession.

**Minimal fix:** in `1K.14` `intake_response` row, change the column phrasing from `correction_reason?` to `correction_reason? (REQUIRED when supersedes_response_id IS NOT NULL)`.

### 3. `authored_by = patient` — PARTIAL

Named in Mode J row + 1K.5 ownership matrix + parallel with provider clarification path. **Weak point:** the `intake_response.authored_by` enum values are **not formally declared in `1K.14`** — they're only implied by 1K.5 ownership matrix (`patient | system | provider | ops`) and parallel with `1M.3` `authored_by` enum (which is `patient | provider | system | ops | device`). An engineer reading 1K.14 alone doesn't see the allowed values.

**Minimal fix:** in `1K.14` `intake_response` row, change `authored_by` to `authored_by ENUM[patient, provider, system, ops]` (mirrors `1M.3` minus `device` since `intake_response` has no device source).

### 4. `supersedes_response_id` chaining — PASS

Named in `1K.5` line 3061, Mode J row line 3385, failure-modes block line 3395, and `1K.14` schema line 3441.

### 5. No modification of prior clinical decision evidence — PASS

Hard-ruled in `1K.5` line 3061: *"`1K.12` packet snapshot pinning and `1K.9` derived-value version pin preserve the row-as-of-decision-time on every prior `clinical_visits` decision."* Reinforced in Mode J row and failure-modes block.

### 6. Compatibility with Stage 2 forward-only commit (`1J.10`) — FAIL

This is the material defect. Three statements are in direct tension:

- **`1J.10` Stage 2 forward-only commit (line ~2739):** *"any subsequent write path that targets a prior `intake_response` row on this session is rejected unless it follows the `1K.5` append-only + `supersedes_response_id` path with `correction_reason = provider_clarification` (provider-authored corrections remain legitimate; **patient-initiated 'change my answer' is not**)."*
- **Mode J row "Entry stage" column (line 3385):** *"patient at any stage **≥ 1**"*
- **`1K.13` care_program 2→3 anchor (line 3353) + `1K.6` progressive session rule (line 3096):** the `progressive_intake_long_running` session — the *only* stated attachment point for Mode J writes — is **opened at Stage 2→3**, not earlier.

Three concrete failure paths an engineer would hit:

1. **Stage 1 patient triggers Mode J:** the row says "stage ≥ 1" is allowed, but no `progressive_intake_long_running` session exists yet (none opened until 2→3). Engineer either: (a) attaches the write to the active `in_progress` Stage 1 session — mixes corrections with primary flow writes, breaks `1K.4` `entry_moment` discipline; (b) creates a new session ad hoc — violates "No new `intake_sessions`"; (c) blocks the write — contradicts the row's "stage ≥ 1" claim.
2. **Stage 2 patient (identity_uplift_in_progress) triggers Mode J on a Stage 1 answer:** the `1J.10` rule explicitly rejects `patient_self_correction` during forward-only commit. Even if the write targets a *different* session, the rejection rule reads on the answer row, not the writing session. Engineer reads `1J.10` and concludes Mode J is blocked at Stage 2.
3. **Stage 2 patient triggers Mode J on a fact NOT under uplift snapshot** (e.g., adds a new allergy that wasn't asked in Stage 1 because no contraindication module asked it on this pathway): no clear rule says whether this is allowed. The `1J.10` rule is about prior `intake_response` rows on this session; a *new* fact has no prior row, so technically the supersession rule doesn't apply. But Mode J's only attachment point still doesn't exist.

**Minimal fix (one of two; pick one):**

- **(a) Restrict Mode J to Stage 3+:** edit Mode J row "Entry stage" cell from *"patient at any stage ≥ 1"* to *"patient at Stage 3+ on at least one care_program (Mode J writes attach to the `progressive_intake_long_running` session of the most relevant care_program; if patient is pre-Stage-3 globally, the Mode J affordance is hidden in product surfaces and the patient must use the active intake flow per Mode B for unsubmitted answers or the message thread for any other concern)."*
- **(b) Open `progressive_intake_long_running` earlier:** edit `1K.13` Stage 0.5→1 row to also open a `progressive_intake_long_running` session at Stage 1 (account creation) scoped to `(patient_id, NULL care_program_id, NULL pathway_code)` as a global addressable surface; care_program-scoped rows still open at 2→3. Adds a global addressable surface for cross-program facts.

Option (a) is simpler and matches the architectural reality (longitudinal care begins at Stage 3); option (b) is more permissive. The current text reads as if both are intended, which is the defect.

**Plus:** `1J.10` should add an explicit carve-out for Mode J — even with a fix to Mode J's stage applicability, the "patient-initiated 'change my answer' is not" clause in `1J.10` reads as a global rejection of patient corrections, which now contradicts Mode J's existence post-Stage-3. **Minimal fix:** in `1J.10` Stage 2 forward-only commit mechanics bullet 3, change *"patient-initiated 'change my answer' is not"* to *"patient-initiated 'change my answer' to a Stage 1 answer on this same session is not (Mode J corrections per `1K.13` write to a separate `progressive_intake_long_running` session and are governed by their own append-only discipline)."*

**Adopted resolution (per patch authorization):** option (a) — restrict Mode J to Stage 3+ — combined with the 1J.10 carve-out. Rationale: matches architectural reality (longitudinal care begins at Stage 3); avoids creating a global pre-Stage-3 `progressive_intake_long_running` session whose lifecycle would be ambiguous; pre-Stage-3 patients have other paths (active intake flow per Mode B, message thread) for the same intent.

### 7. Correct use of `progressive_intake_long_running` session (no new `intake_sessions`) — PARTIAL

Named correctly in two places. **Weak point:** `progressive_intake_long_running` is scoped per `(patient_id, care_program_id, pathway_code)`. A **global / cross-program clinical fact** like allergies (which apply to the whole patient regardless of which pathway they're enrolled in) has no obvious single attachment point when the patient has multiple care_programs (e.g., HRT + GLP-1 concurrently). Three plausible interpretations, none stated:

- (i) Write to all active `progressive_intake_long_running` sessions (denormalize) — wastes rows.
- (ii) Write to the contextually-active one (whichever care_program the patient was viewing) — arbitrary, breaks `field_name` global semantics.
- (iii) Have a single global `progressive_intake_long_running` session per patient with `care_program_id = NULL` for cross-program facts.

**Minimal fix:** in `1K.6` progressive session rule (line 3096), append: *"For global / cross-program clinical facts (allergies, medications, conditions, surgical history, family history), Mode J writes attach to a single global `progressive_intake_long_running` session per patient with `(care_program_id = NULL, pathway_code = NULL)`, opened at first transition to Stage 3 on any pathway and reused thereafter. Pathway-specific facts (e.g., GLP-1 dose tolerance, HRT symptom score) attach to the per-care_program session."*

### 8. Provider acknowledgment trigger when clinically required — PARTIAL

Named in Mode J row: *"if the question-bank entry has `requires_provider_acknowledgment = true`, a `clinical_required` turn per `1G.3` is opened to the care team."*

**Two weak points:**

- The `requires_provider_acknowledgment` flag is **not declared in `1K.4` question-bank schema**. An engineer building the question bank wouldn't know this field exists.
- The **default value is unspecified.** Safety-critical: if default is `false`, allergy corrections silently propagate without provider awareness; if default is `true`, the system gets noisy.

**Minimal fix:** in `1K.4` question-bank "every question has" bullet, append `requires_provider_acknowledgment` to the field list with the rule: *"`requires_provider_acknowledgment: boolean` (defaults to `true` for any field with `time_sensitive_30d` freshness profile per `1K.5`, for any field tagged as a contraindication input per `1K.7`, and for any field on the chart memory boundary — allergies, medications, conditions, surgical history, family history; defaults to `false` for trackable measurements where check-in cadence is the primary surface). Mode J writes per `1K.13` consult this flag on each correction to decide whether to open a `clinical_required` turn per `1G.3`."*

### 9. Proper routing through resolver + write API (no bypass paths) — PARTIAL

Named: *"via `recordIntakeResponse`"* (Mode J row + 1K.5). Hard rule per `1K.0` line 2881: *"the intake engine **never** reaches into domain tables."* Forbidden bypass per `1K.5` line 3061.

**Two weak points:**

- **No CI guardrail named for Mode J specifically.** `1J.10` minimum guardrails (line ~2820) names ESLint rules forbidding new route-handler paths writing directly to `intake_response` on `identity_uplift_*` sessions, but doesn't extend to gate Mode J writes (no rule like "patient-portal route writing to `intake_response` MUST go through `recordIntakeResponse` with `authored_by = patient` + `correction_reason = patient_self_correction`"). An engineer building a `/api/patient-portal/update-allergy` route could write directly without trip-wiring lint.
- **No capability / RLS discipline named for Mode J.** Mode E requires `can_record_provider_clarification`. Mode J's authorization model is implicit (presumably: patient can write their own rows via RLS), but isn't stated. An engineer might wire it without thinking through RLS scope on `progressive_intake_long_running`.

**Minimal fix:** in `1J.10` minimum guardrails (the ESLint section), add a sentence: *"Patient-portal `POST` routes that write to `intake_response` MUST funnel through `recordIntakeResponse` with `authored_by = patient` + `correction_reason = patient_self_correction` (Mode J per `1K.13`); direct route-handler INSERTs are forbidden by the same `no-restricted-imports` rule extended to the `intake_response` table writer module."* Plus in `1K.5` Mode J bullet, add: *"Mode J writes are authorized by patient-session RLS (patient writes their own rows) — no staff capability required; service-role bypass routes are forbidden per Intent / `1J.10` discipline."*

---

## Summary table

| # | Requirement | Verdict |
|---|---|---|
| 1 | Append-only writes to `intake_response` | PASS |
| 2 | `correction_reason = patient_self_correction` | PARTIAL (conditional-requirement not crisp) |
| 3 | `authored_by = patient` | PARTIAL (enum not formally declared in `1K.14`) |
| 4 | `supersedes_response_id` chaining | PASS |
| 5 | No modification of prior clinical decision evidence | PASS |
| 6 | Compatibility with Stage 2 forward-only commit (`1J.10`) | **FAIL** (real contradiction; needs decision + carve-out) |
| 7 | Correct use of `progressive_intake_long_running` (no new `intake_sessions`) | PARTIAL (global-fact attachment unspecified) |
| 8 | Provider acknowledgment trigger | PARTIAL (`requires_provider_acknowledgment` not declared in `1K.4`; default unspecified) |
| 9 | Routing through resolver + write API (no bypass) | PARTIAL (no Mode-J-specific CI guardrail; capability/RLS not named) |

---

## Was the ChatGPT audit ask useful?

**Useful — substantively useful, not blabbing.**

Honest take: ChatGPT surfaced a real defect missed in the prior verification pass. The Stage-2-compatibility issue (point 6) is a genuine contradiction in the system map — it would have stalled implementation when the first engineer wrote the Mode J handler and tried to figure out which session to attach to during identity_uplift_in_progress. The contradiction wasn't subtle; it just wasn't caught because the prior verification was structured around "did each gap's patch land," not "is the patch self-consistent against neighboring rules."

The other PARTIALs (#2, #3, #7, #8, #9) are real implementation-detail gaps that would manifest as "engineer makes plausible wrong assumption" — exactly the class of defect the audit was scoped to find.

The 9-point checklist is well-chosen: it covers the write contract (1, 2, 3, 4), the historical-integrity invariant (5), the architectural-compatibility boundary (6, 7), the safety loop (8), and the enforcement boundary (9). That's the right shape of audit for a single named pattern.

**One thing the ChatGPT ask missed:** it didn't ask about *idempotency* (what if patient submits the same correction twice in network-retry scenarios?) or *entry surface authentication* (what stops an attacker from triggering Mode J on someone else's chart via leaked session?). Both would have been useful additions; both are tracked as candidate items for the next round of focused single-pattern audits.

---

## Patch authorization

This audit has been adopted in full. All 5 fix patches (covering Findings #2, #3, #6 [FAIL], #7, #8, #9) are authorized for application in the same checkpoint.

**Constraint reaffirmed:** patches integrate into existing sections only; no new subsections; no rewrites of entire sections; preserve all existing detail.

**Adopted resolution for Finding #6:** Option (a) — restrict Mode J to Stage 3+ — combined with the 1J.10 carve-out for Mode J cross-session writes.

**Linked commits:** the patch commit will reference this audit file by path. Prior linked commits in the chain: `ba1e9db` (intake coherence audit), `e501b36` (15 intake patches), `12f3468` (2 fix-ups from verification pass).

# HANDOFF — 2026-05-08 (Phase 4H-pre complete)

**Read this when picking up work after Phase 4H-pre.** This is the post-completion checkpoint, not a mid-flight handoff.

This file does not start the next phase. It locks the state at the moment Phase 4H-pre concluded so the next session can begin from a known good baseline.

---

## 1. Status

Phase 4H-pre is complete. The first behavior-changing v0 → 1Q cutover (`payment_received`) shipped at commit `211eab2` and is parity-equivalent at the dispatch boundary per ADR Section 7.5.

The architectural foundation needed to migrate the remaining notification flows + run the full rules engine is in place. No phase 4H-pre decision is open.

---

## 2. Commit sequence

| # | Hash | Title |
|---|---|---|
| 1 | `0651d79` | Phase 4H-pre commit 1 — outbound_jobs rule lineage + privacy primitives + suppressed_data_environment terminal status |
| 2 | `93d99e3` | Phase 4H-pre commit 2 — data_environment dispatch gate |
| 3 | `52e2d25` | Phase 4H-pre commit 3 — repo/rules + repo/templates scaffold + governance lint |
| 4 | `3a4b6c7` | Phase 4H-pre — system-map amendments + target-first decision record |
| 5 | `211eab2` | Phase 4H-pre commit 5 — payment_received parity migration (FINAL) |

Sibling docs landed alongside the sequence: `67a836a` (evolution narrative Volume 1) + `46a86b4` (build pattern assessment).

`origin/main` is at `211eab2`.

---

## 3. What Phase 4H-pre proved

- **The target architecture from Section 1Q is buildable.** Typed Rule + typed Template + thin dispatcher fired the first parity cutover end-to-end with full lineage on `outbound_jobs` and `audit_events`.
- **DELETE-AFTER-PARITY discipline holds operationally.** The legacy `payment_received` case deleted from both `lib/workflows/notificationRules.ts` and `lib/notifications/patientMessages.ts` in the same PR that shipped its replacement. The anti-extension lint reports the migration in plain text (`"10 cases (baseline 11; 1 migrated + deleted: payment_received)"`).
- **Behavioral parity at the dispatch boundary is achievable without byte-identical wording.** The migrated Template renders byte-identical SMS / email output for the existing single-tenant deployment, while the underlying brand sourcing transitioned from hardcoded `MAIN:` to typed `brands.slug.toUpperCase()` — multi-tenant ready without a visible wording change.
- **Side-effect-bounded rule execution is enforceable structurally.** The dispatcher at [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) imports only from the allowlist; future Rules inherit the discipline; the ADR Section 7.6 extension procedure governs additions.
- **The data_environment dispatch gate composes correctly with the new Rule path.** Synthetic-patient Stripe events produced 2 outbound rows that immediately transitioned to `'suppressed_data_environment'` with the canonical privacy-check audit; production-patient events stayed `queued` with full lineage. Same gate, same audit shape, regardless of which path enqueued the row.
- **The orchestrator pattern absorbed an extension cleanly.** `enqueue_outbound_job` gained two parameters (`p_intended_privacy_exposure_level`, `p_decision_outcome_reason`) without breaking the 27-param baseline; existing callers that don't pass them get NULLs as designed.

---

## 4. Legacy v0 surface remaining

[`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) `NotificationTemplateKey` union holds **10 cases** awaiting per-PR migration. Each migrates following the commit-5 pattern (typed Rule + Template + render module + same-PR legacy deletion + wording diff log).

In rough complexity order (lowest first):

- `intake_submitted`
- `case_approved`
- `case_denied`
- `awaiting_clinical_review`
- `followup_needed`
- `active_care`
- `followup_due`
- `refill_pending`
- `rx_sent`
- `shipped`

Plus three v0 files awaiting full deletion when the last case migrates:
- [`lib/workflows/onPatientWorkflowEvent.ts`](../../lib/workflows/onPatientWorkflowEvent.ts) (still has 4 caller sites — see lint snapshot)
- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts)
- [`lib/workflows/types.ts`](../../lib/workflows/types.ts)
- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts)

The `chart.ai_review` enqueue path inside `onPatientWorkflowEvent` is a non-notification side effect; it migrates separately when the AI review surface itself ships through a typed Rule.

---

## 5. Architectural invariants now enforced

| Invariant | Enforcement |
|---|---|
| Tenancy: cross-org rejection at the orchestrator | `enqueue_outbound_job` SECURITY DEFINER (4E) |
| `data_environment` structural lock | `pick_next_outbound_job` SQL filter (4E) + `applyDataEnvironmentGateAfterEnqueue` (4H-pre commit 2) |
| Privacy tier enforced on every Rule firing | `intended_privacy_exposure_level` + `declared_privacy_exposure_level` columns on `outbound_jobs` (4H-pre commit 1); orchestrator extension to persist the cap (4H-pre commit 5) |
| Audit shape on every meaningful mutation | typed catalog at `lib/events/audit-actions.ts`; `lint-event-types.ts` rejects inline literals at write sites |
| Consolidation discipline (no v0 extension) | `lint-rules-templates-scaffold.ts` snapshot + System Map 1Q.0 invariant 12 |
| Rule execution side-effect bounded | ADR Section 7.6 + System Map 1Q.0 invariant 13; dispatcher import allowlist enforces structurally |
| Template registry the only source of automated patient-facing copy | Section 1Q.0 invariant 9 + scaffold CODEOWNERS gate + `repo/templates/` registry pattern |

---

## 6. Tests + lints guarding the system

**Pure-function tests (regression suite, all green at HEAD):**

| Script | Passes | Guards |
|---|---|---|
| [`test-outbound-jobs-types.ts`](../../scripts/test-outbound-jobs-types.ts) | 116 | JOB_KINDS / JOB_STATUSES / state machine / Zod schema / exhaustive `isExternalRailJobKind` partition |
| [`test-resolve-emissions.ts`](../../scripts/test-resolve-emissions.ts) | 21 | 4C-runtime emissions resolver |
| [`test-document-routing-matrix.ts`](../../scripts/test-document-routing-matrix.ts) | 91 | 4D Section 1O routing matrix |
| [`test-events-registry.ts`](../../scripts/test-events-registry.ts) | 29 | typed event catalog + lint smoke |
| [`test-data-environment-gate.ts`](../../scripts/test-data-environment-gate.ts) | 126 | 21 × 4 matrix of gate decisions |
| [`test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) | 25 | scaffold integrity + dual co-sign rule + payment_received_v1 anchor |

**Live-DB smoke tests (require `.env.local` + Supabase project):**

| Script | Passes | Guards |
|---|---|---|
| [`test-data-environment-gate-live.ts`](../../scripts/test-data-environment-gate-live.ts) | 28 | gate atomicity + idempotency in real DB |
| [`test-payment-received-parity.ts`](../../scripts/test-payment-received-parity.ts) | 53 | 5 scenarios verifying the cutover end-to-end |

**CI lints (run on every PR):**

| Script | What it blocks |
|---|---|
| [`lint-event-types.ts`](../../scripts/lint-event-types.ts) | inline string literals at typed-helper write sites |
| [`lint-direct-like-queries.ts`](../../scripts/lint-direct-like-queries.ts) | direct `.like()` / `.ilike()` outside `lib/search-entities/` |
| [`lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) | (a) CODEOWNERS regression on `/repo/rules/` + `/repo/templates/`; (b) extension of `NotificationTemplateKey` union beyond baseline 11; (c) new `onPatientWorkflowEvent` callers; (d) scaffold integrity |

---

## 7. Deferred items (intentional; do not start without explicit phase commit)

- **Full rules runtime.** `evaluateRules` walking the Section 1Q.6 seven-stage execution order; multi-rule fan-out; precondition evaluation; post-mutation event-bus mechanics; the typed `RuleTrigger.event_type` union narrowing in `repo/rules/types.ts`. The current dispatcher is a one-rule stub by design.
- **Remaining 10 template migrations.** Each follows the commit-5 pattern. The first one chosen sets the per-flow rhythm. None is started.
- **Send-policy runtime.** The Section 1G.3 five-step gate (privacy, channel pref, in-person window, contact freshness, pre-send revalidation). The `runSendPolicyGate` stub at [`lib/outbound/dispatch.ts`](../../lib/outbound/dispatch.ts) returns `{ decision: 'pass' }` today; the real implementation is its own phase.
- **Governance + RTBF runtime.** Section 1V retention schedules + soft/hard-delete typed helpers + SAR worker + RTBF stub + retention scan. Deferred to a dedicated phase.
- **Multi-tenant staff / capability hardening.** `org_id` on `staff_profiles`, per-org capability grants, RLS predicates that read `current_org_id()` from the authenticated session, second-org test. Deferred until a second tenant is real.
- **Decision support payload runtime.** `decision_support_payload` shape on `RuleAction.kind === 'route'` is declared in scaffold but the batch-review UI consumer is a future surface.
- **Recall propagation algorithm.** Section 1Q.10 is declared; the `mass_supersede` runtime + the `audit_events` query that walks in-flight jobs is unwritten.
- **AI refinement runtime.** `Template.ai_refinement_allowed` defaults `false`; nothing reads it yet. Lights up when the first `ai_refinement_allowed: true` template ships.

---

## 8. Recommended next phase options (one-line tradeoffs)

| Phase | Tradeoff |
|---|---|
| **4H-rules-runtime** | Highest leverage; unlocks all subsequent template migrations; biggest single phase by surface area; ships the engine that the scaffold has been waiting for. |
| **4H-templates-discipline** (incremental, one case per PR) | Lowest risk per PR; produces immediate user-facing parity wins; no engine work required (each migration runs through the commit-5 dispatcher); slower aggregate progress; pressure-tests the per-flow rhythm 10 more times. |
| **4H-send-policy** | High HIPAA value (closes the privacy gate runtime); independent of rules-runtime in scope; needs Section 1G.3 specifics worked out via pressure test before code. |
| **4I-governance** | High compliance value (retention + RTBF + SAR are required for HIPAA / GDPR / state privacy laws); independent of rules engine; benefits from soft-delete decisions being made early before more domain tables ship. |
| **4J-multi-tenant readiness** | Defer until a second tenant is on the horizon; current single-tenant runs without it; cheaper now than after more tables ship. |
| **4K-observability foundation** | Independent of all of the above; structured logger + per-mutation timing + outbound_jobs SLA timer + OpenTelemetry-shaped exports; useful at any time. |

The next phase choice is a sequencing decision, not an architectural one. All five paths are on the durable foundation Phase 4H-pre delivered.

---

## 9. Do not reopen Phase 4H-pre decisions

Per the build pattern's dated-snapshot convention: a Phase 4H-pre decision is reopened only when a future contradiction is found. None is currently open.

The decisions that are explicitly settled and should NOT be re-litigated:

- The five-commit Phase 4H-pre scope and sequencing.
- The target-first stance (legacy = parity test data, not migration target).
- The DELETE-AFTER-PARITY directive per Section 1Q.12.
- Section 1Q.4 + 1Q.5 verbatim shapes in `repo/rules/types.ts` + `repo/templates/types.ts`.
- The event-catalog layering (`stripe.checkout.session_completed` audit + `stripe_checkout_completed` timeline + `commerce.checkout.session_completed` rule trigger as separate concerns).
- Brand sourcing from `brands.slug.toUpperCase()` for SMS prefix + email logo.
- The cutover discipline at ADR Section 7.5 (parity = behavioral, not byte-for-byte; wording diff log mandatory in PR description).
- Side-effect-bounded rule execution at ADR Section 7.6 + System Map invariant 13.
- The single-tenant `'main'` brand seed migration (Phase 4C-pre comment "v1 has none" is now superseded; do not undo the seed).

If a future contradiction surfaces, write a follow-up ADR with a new dated record; do not edit the locked sections.

---

## 10. Cross-references

| Document | Purpose |
|---|---|
| [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) | First ADR; locked decision record + cutover discipline + side-effect-bounded constraint |
| [`docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md) | Volume 1 historical orientation through Phase 4H-pre commit 1 |
| [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) | Binding source of truth; Section 1Q.0 invariant 13 carries the rule-execution scope contract |
| [`.cursor/plans/audits/2026-05-07_build_pattern_assessment.md`](audits/2026-05-07_build_pattern_assessment.md) | Build pattern assessment (meta-level pressure test) |
| [`.cursor/plans/HANDOFF_2026-05-06.md`](HANDOFF_2026-05-06.md) | Prior handoff (mid-Phase-4 / pre-apply); now superseded by this one for the 4H-pre window |
| [`repo/rules/README.md`](../../repo/rules/README.md) | Rule registry discipline + how to author + forbidden patterns |
| [`repo/templates/README.md`](../../repo/templates/README.md) | Template registry discipline + privacy tier taxonomy + dual co-sign rule |

---

*End of HANDOFF — 2026-05-08. The architecture is right; the discipline holds; the next phase is a sequencing decision.*

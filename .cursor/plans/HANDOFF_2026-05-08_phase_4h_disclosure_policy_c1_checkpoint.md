# HANDOFF — 2026-05-08 (Phase 4H-disclosure-policy commit 1 checkpoint)

**Read this when picking up work after Phase 4H-disclosure-policy commit 1.** This is a single-commit architectural checkpoint, not a phase-completion handoff. Phase 4H-disclosure-policy commits 2+ are still ahead.

This document preserves the architectural assessment that immediately followed the commit so future contributors do not re-derive it from the diff. No new implementation is proposed here.

---

## 1. Status

Phase 4H-disclosure-policy commit 1 shipped at `7d2d63f` and is on `origin/main`. The companion preflight plan §8 wording fix landed alongside (graduated fail-safety binding; replaces the older "default to pass on null inputs" stance).

This is **commit 1 of N** for Phase 4H-disclosure-policy. The runtime engine is real and proven live; later commits will add deferred steps (see §5) and migrate additional rules onto the gate.

---

## 2. What materially changed

| Surface | Before commit 1 | After commit 1 |
|---|---|---|
| `runSendPolicyGate` in [`lib/outbound/dispatch.ts`](../../lib/outbound/dispatch.ts) | Stub returning `{ decision: 'pass' }` for all inputs | Real gate runtime backed by `[lib/disclosure-policy/](../../lib/disclosure-policy/)` |
| Worker-rail policy enforcement | One atomic gate (env) + one stub (send-policy) | Two atomic gates, each owning its own row transition + audit |
| Dispatcher contract on non-pass | Dispatcher called `markOutboundJobDispatch` with `status='failed_terminal'` | Gate runtime owns the transition via SECURITY DEFINER; dispatcher just early-returns |
| Audit emission shape | Optional + free-text on suppression | Universal `notification.privacy_exposure_check` on every claimed row + decision-specific audit on non-pass |
| Suppression terminal status | `failed_terminal` (loss-of-information) | `suppressed` (distinct from `suppressed_data_environment`; partition preserved) |
| Decision shape | Binary pass / non-pass | Four-way: `pass` / `consent_uplift_required` / `block` / `failsafe_action_template_mismatch` |

New SECURITY DEFINER: `mark_outbound_job_suppressed_by_disclosure_policy` ([20260514120000_phase_4h_disclosure_policy_suppress_fn.sql](../../supabase/migrations/20260514120000_phase_4h_disclosure_policy_suppress_fn.sql)). Mirrors the env-gate's atomic-suppress pattern from 4H-pre commit 2.

New module: [`lib/disclosure-policy/`](../../lib/disclosure-policy/) — `channel-defaults.ts` (typed ceiling registry + pathway-sensitivity clamps), `evaluator.ts` (pure function), `runtime.ts` (async wrapper + DB reads + SECURITY DEFINER call).

---

## 3. Invariants preserved

| Invariant | Enforcement |
|---|---|
| Atomic state-transition + audit emission | `mark_outbound_job_suppressed_by_disclosure_policy` SECURITY DEFINER (single SQL transaction; no mid-state row exists) |
| Typed audit-action vocabulary | Migration CHECK + runtime `auditActionForDecision` mapper only allow values from `RULE_AND_NOTIFICATION_AUDIT_ACTIONS` |
| Idempotency on terminal rows | `WHERE status IN ('queued','dispatching')` makes replay a no-op (verified live: scenario 5, no duplicate audit) |
| Side-effect-bounded rule runtime (ADR §7.6) | Gate runs in worker code, not in `lib/rules/runtime/`; the §7.6 import allowlist + approved action set were not extended |
| DELETE-AFTER-PARITY discipline | No new uses of [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts); legacy `NotificationTemplateKey` baseline (9 cases) still anchored by `[scripts/lint-rules-templates-scaffold.ts](../../scripts/lint-rules-templates-scaffold.ts)` |
| Cross-org safety | RPC inherits the existing `org_id` propagation; audit row carries the row's `org_id` from the SECURITY DEFINER's `SELECT … FOR UPDATE` |
| Fail-safety posture observability | Every audit row carries `fail_safety_posture` ∈ `{normal_decision, fail_open_tier_1, fail_closed_uncertain_high_tier}`; post-incident analysis can distinguish deliberate decisions from fail-safe activations |

---

## 4. Accidental coupling / watch items

Two real items, neither dangerous, both worth naming so future-us doesn't trip on them:

- **`[lib/disclosure-policy/runtime.ts](../../lib/disclosure-policy/runtime.ts)` imports `OutboundJobRow` from `[lib/outbound/dispatch.ts](../../lib/outbound/dispatch.ts)`.** The evaluator at [`lib/disclosure-policy/evaluator.ts`](../../lib/disclosure-policy/evaluator.ts) is genuinely surface-agnostic (pure types, pure decisions). The *runtime wrapper* is outbound-specific by design — each future surface (AI summarization, exports, transcription, support tooling) gets its own thin wrapper. The naming "disclosure-policy" was correct, but a careless reader could mistake `runtime.ts` for the generic engine. The file's own header calls this out; no architectural change needed.

- **`suppression_reason = 'manual_staff_suppression'` is now overloaded for two semantic categories.** Configuration governance failures (`unknown_template`, `invalid_template_tier`, `unknown_intent_high_tier`, `missing_action_metadata_high_tier`) reuse the same value as actual staff suppressions. The audit metadata distinguishes them via `block_reason` / `failsafe_reason`, and the existing CHECK constraint already accepted these values, but the column itself is lower-information than ideal. **Not a contradiction; just lower-information than ideal.** Drops out cleanly when a `'configuration_governance_failure'` enum value lands (likely Phase 4H-disclosure-policy commit 2 or 3).

No hidden writes were introduced. No new orchestrators were bypassed. No legacy code was extended.

---

## 5. Intentionally deferred seams

Each waits on its own primitive landing; none is a partial implementation:

- **Step 4 — safety emergency orchestration.** Vague-companion swap, suppression of normal traffic during safety windows. Needs companion templates + a `safety_window` primitive.
- **Step 5b — in-person redundancy.** Needs the `appointments` table.
- **Marketing exclusion windows.** Needs the campaign-engine primitive.
- **Contact-info freshness.** Needs `verified_at` columns on patient contact rows.
- **Refinement 5 — per-event-class channel preferences.** Needs the patient-preferences primitive.
- **`pathway_sensitivity` sourcing.** All currently-enqueued rows have `pathway_sensitivity = null`. The evaluator has the full clamp + hard-block logic (extreme + tier_3+ outside-secure → HARD block; high + tier_3+ outside-secure → consent uplift) but it doesn't fire today because no rule populates the field.
- **Consent-uplift surfacing.** The evaluator returns `consent_uplift_required`, the runtime suppresses the row, the audit emits — but no `patient_action_items` row of type `consent_uplift_offered` is created. Section 1G.3 step 3 spec'd it; the orchestrator ships when `patient_action_items` itself becomes runtime.

---

## 6. Convergence verdict

**Architecture is converging cleanly. No contradictions surfaced during implementation.**

Three signs of clean convergence specific to this commit:

- **The disclosure-policy migration mirrored the env-gate migration almost mechanically.** That's a sign the orchestrator/audit pattern (4H-pre commit 2) generalized correctly. We didn't have to invent a new shape; we instantiated an existing one.
- **The dispatcher got *simpler*, not more complex.** Removing the `markOutboundJobDispatch` call on non-pass shrank the dispatcher's contract — the worker no longer pretends to know about policy outcomes; the gate owns them. This is the right direction for a runtime migration seam (radar zone Tier 1).
- **The §8 contradiction got caught and fixed before code landed.** The graduated fail-safety posture and the rollback-safety question were misaligned in the preflight; flagging it took 30 seconds and changed nothing operationally because no code referenced the old wording. The real risk would've been if the contradiction had landed and *quiet drift* set in. It didn't.

**One signal worth watching, not flagging as contradiction:** the disclosure-policy runtime now emits **two** audit rows per non-pass evaluation — the universal `notification.privacy_exposure_check` from `runtime.ts`, then the decision-specific audit from the SECURITY DEFINER. This is correct per Section 1G.3 step 5 (audit is never silent) AND per Section 1Q.7 (decision-specific lineage is reconstructable), but it does double the audit volume on suppressed rows. **Not a problem yet.** Becomes a problem only at scale + only if audit retention costs become real. Tracked under [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) zone "audit signal decay" (Tier 1).

---

## 7. Single most important new capability

**The system can now distinguish a deliberate policy decision from a fail-safe activation, atomically, with reconstruction-grade audit lineage.**

Before this commit, the dispatcher treated every non-pass as a single category (`failed_terminal` with a free-text error). The disclosure-policy gate now produces a four-way decision (`pass | consent_uplift_required | block | failsafe_action_template_mismatch`), each with a `fail_safety_posture` field that tells you *why* the decision was made — was it a normal evaluation, was the system fail-opening on a known-safe tier, or was the system fail-closing on uncertainty?

That capability is the prerequisite for every future policy surface (AI summarization, exports, provider disclosure, support tooling). Each of those will need to answer the same question for its own surface: *did we make this decision deliberately, or did we fall back to a safe default?* The pattern is now established and proven live.

---

## 8. No new implementation proposed by this checkpoint

This document is preservation, not authorship. No new architectural decisions are made here; no system-map amendments are implied; no ADR is created.

The next phase choice — Phase 4H-disclosure-policy commit 2 (likely consent-uplift surfacing or `pathway_sensitivity` sourcing) vs. Phase 4H-templates-discipline commit 2 (next legacy notification migration) vs. some other Phase 4 branch — is open and unsequenced. All three are unblocked by this commit; none is started.

The decisions that this commit settled and should NOT be re-litigated:

- The graduated fail-safety posture (no blanket fail-open).
- The `lib/disclosure-policy/` naming (engine generalizes; "send-policy gate" is the §1G.3 application, not the implementation).
- The two-audit-row pattern on non-pass (universal `notification.privacy_exposure_check` + decision-specific audit).
- The dispatcher simplification on suppression (gate owns the row transition; dispatcher does not).
- The `mark_outbound_job_suppressed_by_disclosure_policy` SECURITY DEFINER pattern mirroring the env-gate pattern.

---

## Cross-references

| Document | Purpose |
|---|---|
| [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) | Phase 4H ADR; cutover discipline + side-effect-bounded constraint |
| [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) | Binding source of truth (Section 1G.3 send-policy gate + Section 1Q.17 privacy taxonomy) |
| [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) | Future drift zones (audit signal decay; runtime ownership; multi-runtime consistency) |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_pre_complete.md`](HANDOFF_2026-05-08_phase_4h_pre_complete.md) | Prior phase-completion handoff (Phase 4H-pre) |

---

*End of CHECKPOINT — 2026-05-08 commit `7d2d63f`. The gate is real; the seam is clean; no new work is proposed by this document.*

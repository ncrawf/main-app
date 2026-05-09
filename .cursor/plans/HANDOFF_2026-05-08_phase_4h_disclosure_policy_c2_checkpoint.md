# HANDOFF — 2026-05-08 (Phase 4H-disclosure-policy commit 2 checkpoint)

**Read this when picking up work after Phase 4H-disclosure-policy commit 2.** Single-commit architectural checkpoint, not a phase-completion handoff. Phase 4H-disclosure-policy commits 3+ are still ahead.

This document preserves the architectural assessment that immediately followed the commit so future contributors do not re-derive it from the diff. No new implementation is proposed here.

---

## 1. Status

Phase 4H-disclosure-policy commit 2 shipped at `ec0f265` and is on `origin/main`. Built directly on commit 1's runtime engine (`7d2d63f`). Both refinements raised in pre-execution review landed in the implementation:

- The CI lint blocks multi-element `pathway_scope` only for tier_3+ outside-secure rules (where the disclosure-policy clamp reads sensitivity), not globally. Multi-scope tier_2 or below passes — they don't read the field.
- No `case_approved`-as-tier_1 commitment baked in. The next-after migration choice is explicitly deferred to its own preflight.

---

## 2. What materially changed

| Surface | Before commit 2 | After commit 2 |
|---|---|---|
| Rule dispatcher's enqueue calls | Always omitted `pathway_code` + `pathway_sensitivity` | Resolves both fields from the rule's `pathway_scope` and propagates them on every `enqueueOutboundJob` call |
| `PathwayCode` type at [`repo/rules/types.ts`](../../repo/rules/types.ts) | `string` stub (`@stub-for-4H-runtime`) | Typed import from the registry; TS catches typos at compile time |
| Pathway sensitivity registry | Did not exist | New module at [`lib/pathways/sensitivity-registry.ts`](../../lib/pathways/sensitivity-registry.ts) — typed `PathwayCode` enum + `PATHWAY_SENSITIVITY_BY_CODE` map + `resolvePathwaySensitivity` (throws on unknown) + `isKnownPathwayCode` guard |
| CI lint scaffold | 3 checks (CODEOWNERS gate; legacy v0 anti-extension; scaffold integrity) | 4 checks; new Check 4 has two surgical assertions: pathway-code-resolves + tier-3+-outside-secure-must-scope-tightly |
| Test inventory | 7 pure suites + 5 live suites | 8 pure (+18 assertions on registry behavior) + 6 live (+6 assertions on end-to-end propagation) |

No schema migration. No system map amendment. No new SECURITY DEFINER. No new audit action. No new ADR.

---

## 3. Architectural pattern reinforced

**Wiring/propagation of established primitives, not invention of new doctrine.**

The pattern this phase exercised:

1. Discover that a primitive is already declared in schema — `outbound_jobs.pathway_code` + `.pathway_sensitivity` columns added in Phase 4H-pre commit 1.
2. Already typed in the Zod boundary at [`lib/outbound/types.ts`](../../lib/outbound/types.ts) lines 177-178.
3. Already accepted by the SECURITY DEFINER orchestrator (`enqueue_outbound_job`).
4. Already read by the disclosure-policy evaluator at [`lib/disclosure-policy/evaluator.ts`](../../lib/disclosure-policy/evaluator.ts).
5. ...but not yet populated by the producer (the rule dispatcher).
6. Close that one seam with a typed registry, a lint, and tests.

This pattern will repeat for `safety_window` propagation, jurisdiction propagation, contact-freshness propagation, and the consent-uplift orchestrator. Each one is a wiring closure, not an architectural decision.

**This is an important convergence signal.** The system is increasingly evolving through propagation of established primitives rather than invention of entirely new architectural doctrine. Earlier phases (4A-4G, 4H-pre) introduced the primitive vocabulary; later phases now connect declared-but-unpopulated fields to their producers. Each closure increases the system's structural coverage without expanding its architectural surface area.

The convergence is preserved here as a checkpoint observation, not promoted to binding doctrine — a single reinforcement is not yet doctrine. If the next 2-3 commits exercise the same pattern (and they likely will), the doctrine is worth recording.

---

## 4. What became unblocked

**The first tier_3+ outside-secure rule migration.**

Pre-this-commit: every `outbound_jobs` row had `pathway_sensitivity = null`, and the disclosure-policy evaluator's tier_3+ outside-secure clamp fail-closes on null sensitivity (`unresolved_pathway_sensitivity_high_tier`). No tier_3+ outside-secure rule could ship because every dispatch attempt would hit fail-closed.

Post-this-commit: a Rule with `pathway_scope: ['glp1']` resolves to `pathway_sensitivity: 'moderate'` at enqueue, the SECURITY DEFINER persists it, the gate reads it, and the moderate-pathway tier_3 outside-secure path returns `pass`. No further infrastructure is required to author a moderate-pathway tier_3 in_app + tier_1 outside-secure clinical rule.

What is still required to author such a rule (not infrastructure work, just rule authorship):
- A typed `Template` declaring `privacy_exposure_level: 3` and `message_intent: 'clinical'`.
- A typed `Rule` with `pathway_scope: ['glp1']` and a matching trigger event_type.
- An executor branch in the dispatcher (currently hardcoded to `payment_received` + `intake_submitted` until Phase 4H-rules-runtime ships the multi-rule fan-out).

---

## 5. Invariants preserved

| Invariant | Confirmation |
|---|---|
| Side-effect-bounded rule runtime (ADR §7.6) | Registry import is pure read-only constant lookup; no I/O, no side effects; allowlist extended without amendment per §7.6 extension procedure |
| Dispatcher return-type contract | Still `{ enqueued_outbound_job_ids: string[]; audit_event_id: string }`; no domain return values |
| Cross-org safety + idempotency + atomic state-transition + audit | Unchanged; `enqueue_outbound_job` SECURITY DEFINER still owns these |
| Typed audit-action vocabulary | Unchanged; no new actions added |
| Fail-safety-posture observability | Unchanged; commit 2 does not touch the disclosure-policy evaluator |
| DELETE-AFTER-PARITY discipline | Preserved; baseline lint reports `9 cases (baseline 11; 2 migrated + deleted: payment_received, intake_submitted)` |
| Existing migrated rule behavior | Verified: `test-payment-received-parity` 53/53 + `test-intake-submitted-parity` 48/48 byte-level wording assertions stayed green; both rules still write NULL for the new columns since they have no `pathway_scope` |

---

## 6. Accidental coupling / watch zones

Two named items, neither dangerous, both worth preserving so future-us doesn't trip on them:

- **Registry-vs-intake drift potential.** Today only `glp1` exists in both [`lib/pathways/sensitivity-registry.ts`](../../lib/pathways/sensitivity-registry.ts) and [`lib/intake/pathways/glp1.ts`](../../lib/intake/pathways/glp1.ts). The live test scenario 3 in [`scripts/test-pathway-sensitivity-propagation-live.ts`](../../scripts/test-pathway-sensitivity-propagation-live.ts) asserts the two values agree. When future pathways land in the intake layer (e.g., `female_hrt`, `trt`), there's no automated cross-layer assertion that their `sensitivity_level` matches the registry's `PATHWAY_SENSITIVITY_BY_CODE` value. **Drops out cleanly when** the registry-vs-intake-pathway alignment becomes a CI lint rather than a per-test assertion (likely a 10-line addition to the existing scaffold lint).

- **Resolver-throw vs lint-catch handoff.** `resolvePathwaySensitivity` throws on unknown codes — correct (loud failure on misconfiguration). The CI lint at [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) Check 4 catches typos at PR time. But if a Rule fixture lints clean today and the registry later removes a code (low-likelihood), the dispatcher will start throwing at runtime. **Mitigation today:** removing a code from the registry would also need to remove or migrate any Rule referencing it; the same lint catches the inconsistency in the same PR. Naming the watch zone is the only action needed.

No hidden writes. No new orchestrators bypassed. No legacy code extended.

---

## 7. Explicitly deferred seams

Each waits on its own primitive landing or its own architectural decision; none is a partial implementation:

- **Multi-pathway max-sensitivity reducer.** The CI lint blocks tier_3+ outside-secure rules from declaring multi-element `pathway_scope` until this reducer ships. Multi-scope tier_2 or below passes today — they don't read the field.
- **Patient-side current-pathway resolver.** A `current_active_pathway(patient_id)` SQL helper for unscoped rules wanting runtime pathway resolution.
- **Consent vocabulary extension** (`pathway_named_outside_secure_comm`, `clinical_detail_outside_secure_comm`, `sensitive_clinical_outside_secure_comm` not yet in `patient_consents.type` CHECK).
- **`patient_action_items` table + consent-uplift orchestrator.** The disclosure-policy evaluator returns `consent_uplift_required` already (commit 1) but no surface writes the `consent_uplift_offered` action item.
- **Step 4 safety orchestration** — needs companion templates + `safety_window` primitive.
- **Step 5b in-person redundancy** — needs `appointments` table.
- **Marketing exclusion windows** — needs the campaign-engine primitive.
- **Contact-info freshness** — needs `verified_at` columns on patient contact rows.
- **The actual first tier_3+ rule migration.** Now structurally unblocked by this commit; deferred to its own phase choice.

---

## 8. Convergence verdict + single most important new capability

**Verdict: clean.** No new architectural decisions surfaced during implementation. No ADR amendment required. No system map amendment. The pattern is now established (see §3) and will repeat across the remaining propagation seams.

**Single most important new capability:** the system can now ship a tier_3+ outside-secure rule that resolves its clinical posture from typed metadata at enqueue, with reconstruction-grade audit lineage on the row, a registry that fails loudly on misconfiguration, and a CI lint that catches drift at PR time. The dispatcher is now structurally aware of the rule's pathway scope and clinical sensitivity — that awareness propagates through the SECURITY DEFINER, the disclosure-policy evaluator, the audit metadata, and (eventually) downstream surfaces like AI summarization visibility, exports, and provider disclosure.

Pre-this-commit: pathway sensitivity was a declared field with no producer. Post: it's a fully wired primitive that any future Rule can opt into, with structural enforcement at three layers (TS type system, CI lint, runtime resolver throw).

---

## Cross-references

| Document | Purpose |
|---|---|
| [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) | Phase 4H ADR; cutover discipline + side-effect-bounded constraint + import-allowlist extension procedure under §7.6 |
| [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) | Binding source of truth (Section 1Q.4 Rule.pathway_scope + Section 1Q.17 privacy taxonomy + Section 1K.2 Pathway composition) |
| [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) | Future drift zones (registry-vs-intake alignment lives in the same neighborhood as "audit signal decay" Tier 1) |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_disclosure_policy_c1_checkpoint.md`](HANDOFF_2026-05-08_phase_4h_disclosure_policy_c1_checkpoint.md) | Prior commit 1 checkpoint (gate runtime + graduated fail-safety posture) |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_pre_complete.md`](HANDOFF_2026-05-08_phase_4h_pre_complete.md) | Phase 4H-pre completion handoff (the foundation this commit builds on) |

---

*End of CHECKPOINT — 2026-05-08 commit `ec0f265`. This phase wired primitives that already existed; the architecture is converging through propagation, not invention.*

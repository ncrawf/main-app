# HANDOFF — 2026-05-10 (Phase 4H-templates-discipline commit 3 checkpoint)

**Short checkpoint** for the awaiting_clinical_review migration. Fourth typed Rule + Template parity migration overall. Deliberately shorter than the c1/c2 disclosure-policy + c2 templates-discipline checkpoints because this commit is the fourth instance of an established pattern; the genuinely-new architectural information is bounded.

The commit body at `64729ef` carries the full mechanical detail. This file preserves only what's distinctly new at the architectural layer.

---

## 1. Status

`64729ef` on `origin/main`. Phase 4H-templates-discipline commit 3 (awaiting_clinical_review). All three pre-execution refinements carried forward from c2; three long-horizon watch zones preserved (case-centrality, dispatcher branch trajectory, notification-centric framing).

This is **propagation commit #2** of the "2-3 reinforcements before convergence-via-wiring becomes binding doctrine" trial named in the c2 disclosure-policy + c2 templates-discipline checkpoints. One more reinforcement and the framing earns its way from observation into doctrine.

---

## 2. What materially changed

- Fourth typed Rule + Template + render module + hardcoded executor branch (#4 in the dispatcher).
- Two producer-site wirings at the same `updateTreatmentItemStatus` + `updateCareProgramStatus` as case_approved (at the guardrail threshold of ≤2; no dispatcher generalization).
- DELETE-AFTER-PARITY: legacy v0 cases removed; anti-extension lint reports `7 cases (baseline 11; 4 migrated + deleted: payment_received, intake_submitted, awaiting_clinical_review, case_approved)`.
- 8 pure suites + 8 live suites green: 538 + 265 assertions including the new `test-awaiting-clinical-review-parity` 46/46.
- Wording verbatim from legacy; brand sourced from typed `brand_short_label` slot.

---

## 3. What's genuinely new in c3 (the load-bearing section)

### 3.1 The 2-status OR producer gate

First migration where MULTIPLE legacy transition targets route to ONE typed Rule. Legacy `PATIENT_NOTIFY_BY_STATUS` mapped both `under_review:` AND `pending_approval:` to the same `awaiting_clinical_review` template; the typed Rule preserves this via a producer-side gate (`nextStatus === 'under_review' || nextStatus === 'pending_approval'`). One Rule, one Template, one render module, one executor — but two trigger statuses share the producer-side gate.

**Design choice worth preserving for future migrations:** when N legacy transitions route to one notification, the typed migration models them as ONE Rule with N producer trigger conditions, NOT as N separate Rules. The producer-side gate carries the multi-status semantics; the Rule layer stays clean. The dispatcher does not branch on `next_status`; the Template wording is identical across branches.

**Watch zone derived from this design:** if a future case bounces `under_review` ↔ `pending_approval` over time, the patient gets multiple "case is in clinical review" notifications (one per genuine transition). This is preserved-legacy-behavior, not a design improvement. If product ever wants dedupe-across-statuses (one notification per case-review cycle), that's a separate semantic decision requiring its own preflight.

### 3.2 The clinical_decision domain now spans both authority levels

`case_approved` is provider-authority + tier_2 + clinical message_intent. `awaiting_clinical_review` is system-authority + tier_1 + operational message_intent. Both live in `repo/rules/clinical_decision/` + `repo/templates/clinical_decision/`. The domain is broader than "provider authority statements" — it's the entire clinical-decision lifecycle, including system-emitted status acks during the review queue.

Future case_denied (likely provider-authority) and any future under_clinical_hold-like status acks (system-authority) would both belong in `clinical_decision`. Worth naming so future migrations don't fork into separate `clinical_status_ack` vs `clinical_decision` domains based on authority alone.

---

## 4. What became unblocked

- The "multiple legacy statuses → one typed Rule" pattern is now established + tested. Future migrations of legacy cases that have multi-status fan-in (none remaining in the 7 unmigrated; plausible for future product flows) can lean on the same producer-side OR-gate pattern.

---

## 5. Invariants preserved

All invariants from prior commits hold. Three prior parity tests stayed byte-identical green (payment_received 53/53, intake_submitted 48/48, case_approved 53/53). Disclosure-policy gate untouched. Pathway sensitivity wiring untouched. Env gate untouched. Producer-site discipline at threshold (2 sites). No dispatcher generalization. DELETE-AFTER-PARITY discipline holds.

---

## 6. Watch zones (incremental)

Three long-horizon watch zones preserved verbatim from the c3 preflight §12 (and forward from the c2 templates-discipline checkpoint §6):

- Case-centrality risk in the system's ontology.
- Dispatcher branch trajectory (now 4 of the 4 → 7 → 12 → 20 sequence).
- Notification-centric framing (all 4 migrated rules ship `action.kind: 'notify'`).

One new watch zone specific to this commit:

- **Multi-status fan-in dedupe question.** Today, each genuine transition into either gate-status fires a fresh notification (preserves legacy `from→to` dedupe). If product wants one notification per case-review cycle (deduping across status flapping), it's a separate semantic decision — see §3.1 for the design choice.

---

## 7. Explicitly deferred seams

Same as the c2 templates-discipline checkpoint §7. No new architectural deferrals introduced by this commit beyond the dedupe-across-statuses question (which is product-driven, not architecture-driven).

---

## 8. Convergence verdict + new capability

**Verdict:** clean. Both ChatGPT pre-execution refinements correct and shipped. No new architectural decisions surfaced during execution.

**Single most important new capability:** the typed Rule registry can now model multi-status fan-in cleanly. The producer-side OR-gate pattern preserves legacy semantics without forking into per-status Rules. This is the third reinforcement (after c2 disclosure-policy + c2 templates-discipline) of the broader "wire established primitives, don't invent new doctrine" pattern.

**Trial count update:** propagation commit **#2** of the convergence-via-wiring trial. One more reinforcement and the framing earns its way from observation into binding doctrine.

---

## Cross-references

| Document | Purpose |
|---|---|
| [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) | Phase 4H ADR; cutover discipline + side-effect-bounded constraint |
| [`.cursor/plans/HANDOFF_2026-05-09_phase_4h_templates_discipline_c2_checkpoint.md`](HANDOFF_2026-05-09_phase_4h_templates_discipline_c2_checkpoint.md) | c2 case_approved checkpoint; cadence-bypass-vs-clinical-authority axis separation; convergence-via-wiring trial named |
| [`.cursor/plans/HANDOFF_2026-05-08_phase_4h_disclosure_policy_c2_checkpoint.md`](HANDOFF_2026-05-08_phase_4h_disclosure_policy_c2_checkpoint.md) | Convergence-via-wiring trial originated here |

---

*End of CHECKPOINT — 2026-05-10 commit `64729ef`. Fourth typed Rule + Template parity migration. First multi-status fan-in producer gate. clinical_decision domain confirmed to span both authority levels. Trial reinforcement #2 of 2-3.*

# HANDOFF 2026-08-23 — FAI G1 PAUSED BY OPERATOR

Document type: `handoff_or_readiness_gate` — **the current Tier-0 gate-setting checkpoint**
Authority: `derived_nonbinding`. **This checkpoint routes and records state. It hosts no schema and originates no doctrine.**
Status: **`CURRENT_TIER0_CHECKPOINT · fai_g1_paused_by_operator · authority_object_parked · method_pr19_accepted_at_review_not_landed`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: the checkpoint the next agent boots to. **Supersedes `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md` as the Tier-0 pointer** — that file's G0-acceptance and G1-startability content remains valid history; it is no longer current state, because G1 has since run and is now paused rather than merely startable.
Supersedes: `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md` **as the Tier-0 pointer only.**
Superseded by: `none`
Manifest action: `add_tier0` — **LANDED** in this transaction.
Review gate: `user_knox_required`

---

## §1 — Current state *(this section owns it; nothing else does)*

```
FAI G1 state:                 PAUSED BY OPERATOR
Active object lane:           none
Authority object:             parked
Selection Accountability:     stabilized candidate under acceptance hold
Method PR #19:                review accepted, pending landing
Next architecture act:        Q-DL18-4 — only on explicit operator resumption
Output-4 consolidation:       PROHIBITED until its named dependencies support it
Resume trigger:               explicit operator activation
```

**This is a pause, not a completion.** No gate closed. No verdict was issued on `§G1-AUTH`. Nothing here authorizes new architecture work.

## §2 — Pinned state

**Authority object (PR #17, branch `cursor/fai-g1-operating-model-4933`)**

**Three distinct references. Do not read any one of them as another** — conflating them is how a future agent reports false drift.

| reference | what it is |
|---|---|
| `75dcfbd6f9fbd8ed8bfd859118aa22dd2e8c73a9` | **frozen Authority-content revision** — the substantive object |
| `817b0fe0460c2e239588a493f80df4a932cc0f57` | **post-revert Authority-state head immediately before the pause closeout** |
| `594af947d5d35e4f704b342b82e98d81afa8eab0` | **the state-only pause-checkpoint closeout receipt** — where this file and the boot surfaces landed |
| `9835715ed8795a14df395d9f85c8b44fa3af88ea` | **carrier blob** — identical at all three heads |

**The carrier blob being identical across all of them is the proof the Authority object was never altered.** The heads differ because a method excursion was written onto this branch and removed by **additive revert commits — no amend, no force push**; the failed commits (`8ec1d82`, `bab7227`, `19084eb`) remain in history as immutable evidence.

**Later state-only corrections may advance the branch head past `594af94` without touching frozen Authority content.** Verify by carrier blob, never by head equality — a state receipt cannot stamp its own commit, so the head recorded here is the closeout, not necessarily the newest commit. **Authority content has drifted only if `9835715e` has changed.**

The method object distinguishes the same two things: **accepted method-content head `0fc47f1`** versus **method review-closeout receipt head** (later, state-only).

**`§G1-AUTH` state:** MANDATORY and PARTIALLY CONVERGED · Selection Accountability frozen as a completed candidate dependency under its acceptance hold · `Q-DL18-4` **not started** · `§E4b` scenarios 10 and 11 remain `PARTIAL` · Output 4 proposed, not accepted · Output 5 not started · the G0 holder receipt remains EFFECTIVE.

**Method object (PR #19, branch `cursor/method-bounded-interrupt-candidate-7cf3`, based on `main`)** — accepted at review at head `0fc47f1c6a1f854a9fae168e4f1482aaff978b6d`, **not landed and not active.** Its own terminus is `HANDOFF_2026-08-23_method_acceptance_boundary_reviewed_pending_landing.md`. **It is a separate change set with a separate acceptance path and does not land with this arc.**

## §3 — What a resuming agent loads

1. **This checkpoint** for state.
2. `v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md` (**R8**) — the arc's controlling plan; `§G1-AUTH` for the work package, `§4` for method law.
3. `v4_FAI_G1_operating_model_carrier_2026-08-10.md` at blob `9835715e` — `§4.16` boundaries · `§4.18.1` reliance discipline · `§4.18.4` the Selection Accountability candidate · `§4.18.3` row 13 · `§G1-CONTRACT`'s completion condition · `§4.15` residuals · `§E4c` the corrected derivation rule.
4. Route `9v` and the Tier-0 universal path.

**Do not reconstruct the Selection Accountability correction history.** It is in git and in the carrier's `§4.17`; re-anchoring a fresh seat on it wastes context and re-litigates settled corrections.

## §4 — Stabilized for inheritance in this work package; not promoted architecture

**Do not re-litigate on resumption — and do not read this as accepted System Architecture law.** Selection Accountability is a **completed candidate dependency under an acceptance hold**, not promoted architecture.

Selection Accountability's six settled boundaries and its three-layer non-collapse (`policy/mechanism ≠ applied shaping act ≠ burden incidence/material effect`) · the `§E4c` derivation-rule correction · the four-kind decomposition at `§4.11` · that `§G1-AUTH` is recovery rather than authoring · the physical separation of the method object from this change set.

## §5 — Next gate and stop condition

**Next architecture act, and only on explicit operator resumption:** `Q-DL18-4` — *at what grain is delegated authority granted (permission atom, action class, bounded operation, or a composition), and does human delegation differ from nonhuman delegation?* `§4.16` B-6 supplies the constraint it must satisfy.

**No successor-seat prompt is issued by this checkpoint.** Issuing one is the operator's act.

**Stop condition.** Superseded only when the operator explicitly resumes FAI G1 and authorizes the next named Authority action, or when a **landed** method change materially alters the inherited work protocol.

**Prohibited without fresh operator authorization:** starting `Q-DL18-4` · reopening Selection Accountability absent a concrete contradiction · Output-4 consolidation · merging PR #17 or PR #19 · treating the accepted-at-review method units as active law.

## §6 — Work admitted during the pause

**By the operator's pause instruction**, unrelated exploration (for example the robotics probe the operator has flagged) remains its **own evidence, comparator or bounded strategic object**. It does not reopen FAI, alter the Authority object, or become an architecture dependency **merely by being interesting**. **Any proposed impact on FAI requires explicit operator adjudication.**

**PR #19 may be consulted as an accepted-at-review, NONBINDING method candidate** for handling a consequential discovery — capture it, assess whether it actually invalidates FAI's next act or completion condition, then classify it as nonblocking evidence, a routed obligation, or a genuine interrupt. **It does not govern this checkpoint until landed**, and nothing in this checkpoint activates it. No fascination-driven reopening; no suppression of a real contradiction either.

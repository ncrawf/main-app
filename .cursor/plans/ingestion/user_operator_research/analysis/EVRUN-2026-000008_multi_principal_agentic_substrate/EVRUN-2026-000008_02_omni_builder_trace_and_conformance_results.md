# EVRUN-2026-000008 — §02 · OMNI Builder Trace + Conformance Results

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane · successor analysis run — Builder submission) · Authority: `analysis_nonbinding` (`GRD-036`). **Propose-only. Nothing promoted. Care freeze + 07-12 gate untouched. `OMNI Reactor` remains a frozen, named, non-ontological, unpromoted candidate — this run does not alter its definition, add an invariant, or promote it.**
Role: **Builder submission** (Opus, repo-native), per the quadrifecta model in `_00 §1`. Produced BLIND to the fresh Adversary submission (`_00 §1 V2` role purity). Owed run artifact named in `_00 §7` (`_02` deep-trace + conformance). Companion to the frozen Knox rubric `_00 §6A`.
Authored 2026-07-18 (Opus). Predecessors read: `_00` (charter + frozen rubric), EVRUN-000007 `_02/_05/_06` + concept registry, `EVSRC-2026-000251`, `EVSRC-2026-000279`, System Map vNext + 15 domain contracts, CNS/OFC/D6 contracts in full, Build Entry Gate v0, Accountability Loop capture, live migrations + `lib/orders/*` + `lib/dashboard/patientOrderCopy.ts`.

> **★ SELF-DISCIPLINE (this document obeys the run's own guards).** I am the Builder, **not the adjudicator** (`_00 §1`). I do **not** score this submission, do **not** compare it to any Adversary output, and do **not** assert that `OMNI Reactor` wins, survives, is proved, or should be promoted. I map evidence to each Knox rubric dimension and label every behavior's provenance so Knox can score it. Candidate Reactor prose is **not** treated as implemented behavior; implementation claims are verified against live code and grounded in committed bytes.

---

## §0 — What was built (one paragraph)

An executable, in-memory **conformance fixture** (`scripts/test-consequential-transition-conformance.ts`) that realizes the three contrasting traces from the frozen Knox rubric (`_00 §6A/§D`) over OMNI's live and contract-represented substrate, plus this artifact mapping the realization to each rubric dimension. The fixture reuses the **live** order/payment state machine carrier and stubs the **not-yet-built** continuity carriers (custody / patient-consequence / honest projection / bounded proof) as test-only state — because the repository preflight (`_00 §6`) found `custody = 0` and `obligation = 0` schema carriers, and minting them is C5 contract/schema work gated pre-spine. It runs green (31/31 checks; all 15 required assertions satisfied) with **no production schema, no contract edit, and no `reactor` identifier**.

---

## §1 — Source posture (V1 — `assignment_source_fidelity`)

Per `_00 §5` / `§6A V1`, the Builder must reconcile requested-source-IDs · opened-source-IDs · read depth · substitutions · completion-claim permission.

| requested source | opened? | depth |
|---|---|---|
| `EVRUN-2026-000008_00` (charter + **frozen Knox rubric §6A**) | ✅ | full read |
| `EVRUN-2026-000007_06` (closeout) | ✅ | full read |
| `EVRUN-2026-000007_05` (deep trace 2 — esp. §I.1–§I.15) | ✅ | full read |
| `EVRUN-2026-000007_02` (multi-principal reframe — esp. §10 / STH-02.*) | ✅ | §1–§4 + §10 STH-02 chain |
| EVRUN-000007 concept registry + routing map | ✅ | full read |
| `EVSRC-2026-000251` `_source.md` (preservation contract) | ✅ | §0–§1 + load-bearing physics finding (191k-char file; header + manifest + wrong-age specimen read; §2/§3 body sampled — disclosed) |
| `EVSRC-2026-000279` `_source.md` (preservation contract) | ✅ | full read |
| System Map vNext | ✅ | header + domain index (D3/D5/ID/CNS/MSG/CM/D7/OBS/D6/RBAC/SET + source-of-truth rules) |
| Live contracts: Identity, D7/Consent, Clinical Memory, Observation, CNS, OFC, D6, Messaging, Federation, RBAC, Accountability/GRR | ✅ | CNS + OFC + D6 read in FULL; others via System Map index rows + targeted grep (disclosed as index-depth, not full-body) |
| Build OS / Build Entry Gate v0 / Agent Runtime & Harness capture | ✅ | Build Entry Gate header + scope; Accountability Loop capture §0–§6; Agent Runtime capture referenced via `_00 §5` FWREG-010/013 routing (not full-body — disclosed) |
| Migrations / app code / tests (Rx/payment/pharmacy/fulfillment/comms/follow-up) | ✅ | `orders_lifecycle_v1.sql` full; `lib/orders/treatmentOrderTransitions.ts` + `types.ts` + `lib/commerce/types.ts` + `lib/dashboard/patientOrderCopy.ts` full; `scripts/test-*-parity.ts` convention sampled (rx-sent + payment-received) |

- **Substitutions:** none. The required longitudinal pair `EVSRC-251 + EVSRC-279` was used (I did **not** repeat the Gemini Round-1 251+252 substitution flagged in `_00 §2`).
- **Declared partial coverage (honest):** EVSRC-251 is a 191k-char file; I read its header, metadata spine, collection manifest, and the load-bearing wrong-age propagation specimen in full, and sampled §2/§3 body — sufficient for trace design, not a full-transcript read. Several domain contracts (Identity, D7, CM, OBS, Messaging, Federation, RBAC) were read at System-Map-index + targeted-grep depth rather than full-body; CNS, OFC, D6 were read in full because they own the continuity/ownership seams the traces exercise.
- **Tool-context leak check:** none — no tool/system-context displaced the substantive task.
- **Blind-protocol confirmation:** the fresh Adversary submission was **NOT read**. `_01` (prior Gemini Round-1/Round-2 reports) was present locally and was **deliberately NOT opened** to preserve Builder independence; its disposition was taken only from `_00 §2/§3` ("carried, not re-debated").

---

## §2 — Live implementation inventory (verified against code, not prose)

Grounded in committed bytes (the fixture re-verifies these at runtime — see §9 "LIVE-CARRIER FIDELITY CHECK").

**PRESENT / IMPLEMENTED (live carriers):**
- `treatment_order_status` enum (10 states) + `treatment_order_status_transitions` table + `enforce_treatment_order_status_transition()` **DB trigger** that raises on illegal moves — `supabase/migrations/20260428100000_orders_lifecycle_v1.sql`.
- Application mirror of the same graph — `lib/orders/treatmentOrderTransitions.ts` (`isTreatmentOrderTransitionAllowed`, `allowedNextTreatmentOrderStatuses`, `TERMINAL_TREATMENT_ORDER_STATUSES`).
- `amount_paid_cents` — "Cumulative successfully-captured amount … Remains 0 until post-approval charge succeeds" and is **never decremented on refund** (refund is a separate terminal state) — the live carrier for "compensation ≠ rollback".
- Lab-kit fulfillment state machine + trigger (parallel evidence of the pattern) — same migration.
- Patient-facing projection copy keyed on order status — `lib/dashboard/patientOrderCopy.ts` (`patientTreatmentOrderStatusView`).
- Rx/payment/pharmacy scaffolding named in `_00 §6`: `rx_artifacts_storage`, `clinical_visits_and_rx_reviews`, `org_rx_presets`, `stripe_customer_and_treatment_payment_fields`, `supplement_checkout_routing`, `lab_orders_and_storage`, outbound-jobs rail (`20260425140000_outbound_jobs.sql` + `lib/rules/runtime/dispatcher`).
- Idempotent outbound rail with `idempotency_key` (evidenced by `scripts/test-payment-received-parity.ts` scenario 3 + `scripts/test-rx-sent-parity.ts`).

**CONTRACT-REPRESENTED but UNWIRED (no schema/code carrier):**
- CNS custody/continuity coordination, `clinical_required` permit-gate (`CNS_orchestration_contract.md §10.1`), `trace_lineage` bounded-proof (§11), exception/escalation candidate (§9), safety orchestration (§10.2).
- OFC `care_obligation` + `fulfillment_order` lifecycle, release-gate-as-state (`ordered_fulfillment_contract.md §5/§6`), explicit expiration/escalation ownership (§7.7/§7.10).
- Accountability Loop `reported_concern`/`detected_finding` → admission → `response_case`/response-obligation, coordination-status-≠-domain-status (`v4_C4_governed_reporting_resolution_capture.md §5/§6`).

**ABSENT (confirmed 0 carriers — `_00 §6`):** `custody`, `obligation` (as dedicated continuity schema), honest-projection internal-evidence state, portable bounded-proof receipt.

---

## §3 — Existing carriers reused (by the fixture)

| carrier | how reused |
|---|---|
| `lib/orders/treatmentOrderTransitions.ts` (`isTreatmentOrderTransitionAllowed`, `allowedNextTreatmentOrderStatuses`, `TERMINAL_TREATMENT_ORDER_STATUSES`, `TREATMENT_ORDER_STATUS_VALUES`) | **imported directly**; drives Trace 2's order lifecycle (approve → pay → preparing → rx_sent → exception → refunded); the sanity block proves it rejects `pending_clinician_review → shipped` |
| `supabase/migrations/20260428100000_orders_lifecycle_v1.sql` | **read at runtime** by the fidelity check; grounds the IMPLEMENTED labels (enum, transitions, trigger, cumulative `amount_paid_cents`) in committed bytes |
| `lib/dashboard/patientOrderCopy.ts` | **read at runtime**; establishes that the live projection is status-keyed only (no internal-evidence input) — the exact honest-projection gap the invariant fills |
| D6 money-state vocabulary (`authorized/captured/settled/refund_settled`, `D6_commerce_contract.md §5`) | modeled as the append-only payment ledger; capture stays historical after refund |
| `scripts/test-*-parity.ts` convention | the fixture mirrors the `main()/pass/fail/assert/exitCode` harness + `npx tsx` runner exactly |

---

## §4 — Missing carriers (what would have to be built — C5 work, NOT built here)

Each maps to an existing owner (dedup-before-minting; no new domain, no `reactor` object):
1. **Accepted-custody record** — offer→accept handshake with acceptance evidence, states `unoffered/offered/accepted/rejected/expired/released/unknown`. Owner: **CNS** (coordination) + **OFC** (obligation lifecycle). Missing schema.
2. **Patient-level consequence continuity** — distinct from the rail obligation; visible until an authorized disposition. Owner: **OFC `care_obligation`** + **CNS** continuity projection. Missing schema.
3. **Honest-projection internal-evidence state** — `patient_visible_state` vs `internal_evidence_state` so a stale "processing" cannot be shown. Owner: **Surface/Projection** over **OFC/CNS** state. Live projection carrier exists but is status-only.
4. **Portable bounded-proof receipt** — `trace_lineage`-backed, excludes raw deliberation. Owner: **Evidence/Accountability** (`trace_lineage` CNS §11). Missing schema.
5. **Selective-reopening typing** — typed execution-exception → sourcing/commercial/clinical/accountability router. Owner: **REV-184** (clinical reopen) + **OFC/CNS** (sourcing) + **Accountability** (investigation). Missing wiring.
6. **Accountability `response_case` + response-obligation** — coordination-status distinct from domain-status. Owner: **Accountability Loop** (candidate cross-cutting contract). Missing schema.

---

## §5 — Architecture + ownership map (record_kind decomposition; EVRUN-000007 `_05 §I.1` + System Map vNext)

The episode is **one action episode; many domain-owned records joined by governed edges** — never one truth object. No record is owned by a "reactor"; the continuity invariants are an overlay across existing owners (System Map source-of-truth rules: one owner per fact; 4-way authority composition; projection ≠ authority; three distinct gates).

| record_kind | owning domain | live carrier | provenance in fixture |
|---|---|---|---|
| identity assurance | **Identity** | `patients` / identity_contract | represented |
| authorization / consent | **D7 / Consent** | `patient_consents` / D7 contract | represented |
| composed authority (credential·scope·jurisdiction·human-commit) | **RBAC + Federation + Clinical** | `lib/auth/capabilities.ts` seed; RBAC contract | represented |
| clinical commitment (+ adoption) | **Clinical Memory** | `clinical_visits_and_rx_reviews`; CM contract | represented |
| commercial term (price/waiver) | **D6** | `pricing_option`; D6 contract | represented |
| payment event(s) | **D6** | `treatment_orders.amount_paid_cents` + money-state vocab | **IMPLEMENTED (order) / represented (money-state)** |
| Rx command / order lifecycle | **clinical order rail** | `treatment_order_status` machine | **IMPLEMENTED** |
| counterparty commitment (pharmacy accept) | **Federation (pharmacy)** | — | **MOCKED** |
| dispensing / execution event | **Pharmacy** | — | **MOCKED** |
| fulfillment obligation | **OFC** | `treatment_orders` shipped + OFC contract | IMPLEMENTED_PARTIAL / represented |
| accepted custody continuity | **CNS + OFC** | — | **CONTRACT_UNWIRED → C5** |
| patient-level consequence | **OFC + CNS** | — | **CONTRACT_UNWIRED → C5** |
| honest patient projection | **Surface/Projection over OFC/CNS** | `patientTreatmentOrderStatusView` (status-only) | IMPLEMENTED_PARTIAL |
| bounded proof | **Evidence / Accountability** | `trace_lineage` (CNS §11, unwired) | CONTRACT_UNWIRED → C5 |
| accountability investigation | **Accountability Loop** | GRR capture (candidate) | CONTRACT_UNWIRED → C5 |

**Authority boundary held:** CNS coordinates continuity/timing/escalation/projection but does **not** inherit domain authority or obligation (CNS contract §4 anti-collapse invariants). External custody is **offered and acknowledged**, never declared by fiat (`_05 §I.13`). A patient projection may omit protected detail but may not fabricate closure.

---

## §6 — Exact state machines

**(a) Order lifecycle — LIVE (`treatment_order_status`; migration + lib + DB trigger):**
```
pending_clinician_review → approved_fulfillment_pending → {preparing | payment_failed | cancelled}
payment_failed → {preparing | approved_fulfillment_pending | cancelled}
preparing → {rx_sent | exception | cancelled}
rx_sent → {shipped | exception | cancelled}
shipped → {fulfilled | exception}
fulfilled → refunded
exception → {preparing | rx_sent | shipped | cancelled | refunded}
refunded → ∅   cancelled → ∅   (terminal)
```
Trace 2 path: `pending_clinician_review → approved_fulfillment_pending →(capture)→ preparing → rx_sent →(pharmacy fails)→ exception →(2A)→ refunded`. The machine structurally forbids skipping to `shipped` (sanity check passes).

**(b) Payment ledger — money-state vocab (D6 §5); append-only:**
```
authorized → captured → settled
captured → refund_requested → refund_settled   (NEW event; capture row persists)
```
`amount_paid_cents` cumulative-captured is never decremented (live comment) → "compensation ≠ rollback".

**(c) Custody — FIXTURE_ONLY/C5 (offer→accept; `_05 §I.13`):**
```
unoffered → offered → {accepted (requires acceptance evidence) | rejected | expired}
accepted → released
offered →(counterparty silent)→ unknown
```
Field assignment WITHOUT the handshake leaves status ≠ accepted (A03). The five non-accepted states stay distinguishable (A04).

**(d) Patient consequence — FIXTURE_ONLY/C5 (`_05 §I.4`):**
```
unresolved → {therapy_supplied | refunded_and_remedied | transferred | released | honest_terminal}
open & visibleUntilResolved until an AUTHORIZED disposition; rail obligation may terminate independently
```

**(e) Admissibility gate — FIXTURE_ONLY (invariant #1):**
```
contextStable ∧ evidenceSufficient ∧ rationaleStable ∧ authorityComplete → admissible
else → escalated (authority) | deferred (evidence) | blocked (rationale) | narrowed
mayBeginConsequence ⇔ admissible   (else: no payment, no Rx, no fulfillment)
```

**(f) Selective-reopening router — FIXTURE_ONLY (`_05 §I.2`, 3-branch):**
```
jurisdiction_policy   → accountability investigation + preserve failed pathway; clinical NOT reopened
transient_stockout    → reopen sourcing/commercial; clinical NOT reopened
therapy_infeasible(semantic change) → reopen clinical (prior commitment preserved historically)
```

---

## §7 — Execution of all three traces + 2A/2B/2C

**Trace 1 — inadmissible consequential candidate** (seeded by EVSRC-251: wrong-age propagation → unstable context; provider-declared uncertainty + evidence-floor acquiescence → unstable rationale/insufficient evidence; no completed visit/human-commit → incomplete authority). The candidate fails all four admissibility checks → disposition `escalated`; `mayBeginConsequence = false`; **no order, no payment, no Rx, no fulfillment object is created**; the failure is preserved with the four failed checks and a timestamp. Identity + consent remain independently true (workflow state is not collapsed into authority state).

**Trace 2 — admissible Rx with pharmacy partial failure** (seeded by EVSRC-279: enclomiphene 12.5 mg, $349/90d, $149 waiver, Cache Valley compounding pharmacy, ships direct). Identity assured, consent granted, clinician commits, price/waiver set, payment captured, order → `preparing` → `rx_sent`, pharmacy acknowledges, **no medication dispensed, payment remains captured, order still at a "processing" state**. Then each branch executes distinctly:
- **2A — jurisdiction/policy incompatibility:** should have failed preflight; detected late → **failed pathway preserved** (`rx_sent → exception`), **accountability investigation opened** (domain-status `under_review` while the patient's coordination reaches remedy), **false closure prevented** (honest projection flips off "processing"), **compensation** (`exception → refunded`, refund as a new event; capture persists), **patient remedy** distinct from compensation, **clinical NOT reopened** (clinically valid; defect is jurisdictional/operational). Patient consequence → `refunded_and_remedied`.
- **2B — transient stockout/capacity:** `rx_sent → exception`; **reopen sourcing/pharmacy selection (and possibly commercial terms)**; equivalent enclomiphene supplied elsewhere without meaningful clinical change → **clinical NOT reopened**; consequence → `therapy_supplied`.
- **2C — formulation/route/dose/therapy infeasibility:** semantic threshold met (e.g., only an injectable T formulation feasible → different risk/monitoring) → **clinical domain reopened**; prior commitment preserved as a historical version; consequence remains `unresolved`/visible until the reopened decision resolves.

Across all branches: original capture remains historical; refund is compensating; patient remedy ≠ compensation ≠ clinical reconsideration ≠ accountability investigation ≠ outcome (five distinct linked records); rail failure may terminate while the patient consequence stays visible; custody transfer requires offer + acceptance evidence; the patient-visible projection flips when internal evidence makes "processing" false; the portable proof excludes raw private deliberation.

**Trace 3 — low-risk reversible action** (appointment selection): 4 lightweight gates (identity · delegated scope · idempotency · honest result), reversible re-selection, **zero** consequential transitions, **no** custody handshake / payment auth / bounded-proof burden — while retaining identity + idempotency + an honest result. Materially fewer checks/transitions than Trace 2 (4 vs 10 gates).

---

## §8 — Fixture location

`scripts/test-consequential-transition-conformance.ts` (in the repo's established `scripts/test-*.ts` convention). Neutral fixture families inside it: `consequential_transition_conformance` (Trace 1), `rx_partial_failure_continuity` (Trace 2 + 2A/2B/2C), `cross_domain_consequence_fixture` (custody/consequence/proof). **No `reactor` identifier appears anywhere in the file.**

Run: `npx tsx scripts/test-consequential-transition-conformance.ts` (fully in-memory; no DB; deterministic clock).

---

## §9 — Test output (verbatim summary; full run reproduced above in the session)

```
RESULT: 31 passed, 0 failed, 31 total checks.
GREEN — all three traces + 2A/2B/2C conform; 15/15 required assertions satisfied.

PROVENANCE LEDGER (what is real vs. modeled)
  CONTRACT_UNWIRED     5
  FIXTURE_ONLY         16
  IMPLEMENTED          8
  IMPLEMENTED_PARTIAL  2
```
Required-assertion coverage (charter "Required test assertions" 1–15), each labeled with provenance + Knox dimension:

| # | assertion | result | provenance | Knox |
|---|---|---|---|---|
| A01 | inadmissible candidate cannot reach payment/Rx/fulfillment | PASS | FIXTURE_ONLY | dim2/V5 |
| A02 | identity/consent/authority not collapsed into workflow state | PASS | FIXTURE_ONLY | dim3/V4 |
| A03 | custody cannot change merely because a field was assigned | PASS | FIXTURE_ONLY | dim4/V3 |
| A04 | unaccepted/rejected/expired/unknown custody remain distinguishable | PASS | FIXTURE_ONLY | dim4 |
| A05 | policy incompatibility routes differently from stockout | PASS | CONTRACT_UNWIRED / FIXTURE_ONLY | dim5 |
| A06 | stockout does not auto-reopen clinical judgment | PASS | FIXTURE_ONLY | dim5 |
| A07 | clinically meaningful alternative does reopen clinical judgment | PASS | FIXTURE_ONLY | dim5 |
| A08 | payment capture remains historically present after refund | PASS | IMPLEMENTED_PARTIAL | dim6/V6 |
| A09 | compensation/remedy/reconsideration/accountability/outcome distinct | PASS | CONTRACT_UNWIRED | dim5 |
| A10 | stale patient-visible "processing" fails | PASS | FIXTURE_ONLY | dim6 |
| A11 | private deliberation excluded from portable proof | PASS | CONTRACT_UNWIRED | dim7 |
| A12 | low-risk action has materially fewer checks/transitions | PASS | FIXTURE_ONLY | dim10/V7 |
| A13 | retries and compensations are idempotent | PASS | FIXTURE_ONLY | dim9 |
| A14 | nonparticipating counterparty → honest unknown, not fabricated acceptance | PASS | FIXTURE_ONLY | dim8/V3 |
| A15 | every timeout/escalation has an explicit owner | PASS | CONTRACT_UNWIRED | dim6 |

Verification hygiene: `tsc --noEmit` → 0 errors; `eslint scripts/test-consequential-transition-conformance.ts` → 0 errors, 0 warnings.

---

## §10 — What is mocked

- **Pharmacy counterparty** (Cache Valley / any compounding pharmacy): acknowledgment, dispensing, and failure are **stubbed** — no NCPDP SCRIPT / pharmacy rail carrier exists. The nonparticipating-counterparty case (A14) is modeled by a pharmacy that never returns an acknowledgment → custody stays `unknown`.
- **Payment settlement rail** (Stripe): capture/refund are modeled as append-only ledger events with idempotency keys; the live Stripe adapter + webhook exist in the app but are not invoked (in-memory only).
- **Deterministic clock**: replaces wall-clock for timers/escalation due-times.
- **External verifier**: the bounded-proof "external acceptance" is not exercised (no counterparty accepts the receipt) — consistent with the run's open finding that external acceptance is unproven.

---

## §11 — What is blocked by C5

Building these for production requires v4 spine → C5 contract/schema work (`_00 §6`; preflight `custody = 0`, `obligation = 0`). Blocked pending C5, therefore modeled fixture-only:
1. Accepted-custody schema (offer/accept/evidence/effective-time/release) — CNS + OFC.
2. Patient-level consequence-continuity schema (distinct from rail obligation) — OFC `care_obligation` + CNS projection.
3. Honest-projection internal-evidence state (`patient_visible_state` vs `internal_evidence_state`) — Surface/Projection over OFC/CNS.
4. Portable bounded-proof receipt (`trace_lineage`-backed) — Evidence/Accountability.
5. Selective-reopening typed router wiring — REV-184 (clinical) + OFC/CNS (sourcing) + Accountability (investigation).
6. Accountability `response_case` + response-obligation schema (coordination-status ≠ domain-status) — Accountability Loop (candidate contract).

No production schema or contract was introduced to make any test pass. No `reactor` object/service/table/API/queue/record was created.

---

## §12 — Burden and bypass analysis (dim10 / the primary product falsifier)

- **Added burden on the consequential path** (Trace 2): identity assurance, consent, evidence-floor, clinician scope, human commit, jurisdiction preflight, payment authorization, custody handshake, monitoring obligation, bounded proof = ~10 gates. This is real friction; the risk-adaptive design confines it to consequential transitions.
- **Low-risk path stays light** (Trace 3): 4 gates, no custody/payment/proof — proving enforcement depth scales with consequence (not universal bureaucracy).
- **Bypass risk (Gemini's accepted primary falsifier, `_00 §4`):** *do operators route around the governed path (phone/text/EHR) because it is slower?* The fixture does **not** settle this — bypass is a field-adoption fact, not a trace fact. The source cases (251/279) themselves are the workaround (screenshot-into-ChatGPT), which is evidence the ungoverned path is currently *easier*. A real mechanism + metric (route-around detection: governed-action share vs off-platform sends) is owed and unbuilt. **This remains an open falsifier, honestly preserved.**
- **Jurisdiction preflight burden vs late failure:** 2A shows the cost of catching incompatibility late (investigation + refund + remedy). The cheaper path is preflight; the fixture models the recovery, not a proof that preflight adoption is free.

---

## §13 — Evidence mapped to each Knox rubric dimension (`_00 §6A §C` + validity gates §A + naming §H)

Builder maps evidence; **Knox scores.** No maturity number is asserted here.

**Validity gates (§A):** V1 — source fidelity reconciled (§1). V2 — role purity: Builder did not read the fresh Adversary; `_01` deliberately unopened. V3 — no external-party fiat: custody requires acceptance evidence (A03); nonparticipating counterparty → honest unknown (A14). V4 — no ownership collapse: authority/identity/consent kept orthogonal to workflow (A02); record_kind decomposition (§5). V5 — pre-consequence safety: A01. V6 — historical integrity: capture persists after refund (A08). V7 — risk proportionality: A12. V8 — claim evidence: IMPLEMENTED labels grounded in committed bytes (fidelity check) + live-file citations.

| dim (weight) | evidence in this submission |
|---|---|
| 1 · scenario fidelity + state decomposition (10) | record_kind decomposition §5; six distinct state machines §6; assurance/authorization/commitment/term/payment/command/counterparty/dispensing/fulfillment/proof kept distinct |
| 2 · admissibility + authority correctness (10) | Trace 1 admissibility gate (A01); composed authority (credential·scope·jurisdiction·human-commit); no efficient chain amplifies an inadmissible decision |
| 3 · domain ownership / anti-god-object (8) | §5 ownership map; CNS coordinates but does not own truth (CNS §4); no `reactor` object; A02 |
| 4 · custody transfer + orphan detection (12) | offer/accept with evidence (A03); five distinguishable custody states (A04); rail-obligation ≠ patient-consequence (fixture; CONTRACT_UNWIRED) |
| 5 · selective reopening + consequence typing (12) | 3-branch router (A05/A06/A07); five distinct linked records (A09) |
| 6 · temporal integrity + honest projection (8) | honest projection flip (A10); explicit timeout/escalation owners (A15); live projection is status-only (gap named) |
| 7 · bounded proof / privacy / influence lineage (8) | proof excludes private deliberation (A11); preserved admissibility evidence (Trace 1); process-not-correctness |
| 8 · external-boundary realism (10) | pharmacy MOCKED honestly; nonparticipating counterparty → unknown (A14); no `success=true` strawman; external acceptance unproven (§10) |
| 9 · runtime enforceability + implementation specificity (10) | live order machine reused + fidelity-checked; explicit IMPLEMENTED / IMPLEMENTED_PARTIAL / CONTRACT_UNWIRED / MOCKED / C5_BLOCKED labels; executable fixture; idempotency (A13) |
| 10 · risk proportionality + burden + bypass (7) | Trace 3 (A12); §12 burden/bypass analysis incl. the unsettled route-around falsifier |
| 11 · integration economics / operability / procurement (5) | §10/§11 name the missing carriers + C5 blockers + owners; §12 notes adoption facts a trace cannot settle |

**Naming (§H, scored separately):** the fixture uses zero `reactor` identifiers and mints no central object — one datum toward "domain-native runtime names + no central object" (the guard held under implementation). This is recorded, not scored, by the Builder; the naming gate remains OPEN.

---

## §14 — Assumptions + falsifiers

**Assumptions (labeled):**
1. The continuity carriers do not exist today (preflight `_00 §6`); modeling them in-memory is the honest option that avoids premature C5 schema. *Falsifier:* a live custody/obligation carrier is found in the estate → relabel FIXTURE_ONLY → IMPLEMENTED.
2. The live `treatment_order_status` machine is the correct order/payment substrate to reuse. *Falsifier:* a superseding order lifecycle exists → re-point.
3. The 3-branch reopening semantics (`_05 §I.2`) are the right decomposition. *Falsifier:* a real case shows a fourth route or a stockout that legitimately reopens clinical judgment.
4. Pharmacy acknowledgment/dispensing require a real rail (mocked). *Falsifier:* an NCPDP/pharmacy carrier is present and should have been wired.

**Open falsifiers preserved (not settled by this build):**
- **Bypass / route-around** (the primary product falsifier): unproven; needs a field mechanism + metric.
- **External proof acceptance:** no counterparty accepts the bounded receipt (§10) — unproven.
- **Governance burden vs adoption:** ~10 consequential gates may be too heavy in practice — a field fact.
- **Incumbent equivalence:** whether FHIR Task/RequestOrchestration + NCPDP + TEFCA + a workflow engine reproduce the continuity behaviors is the Adversary's question — **deliberately not answered here** (Builder is blind to the Adversary; adjudication is Knox's).

---

## §15 — Stop declaration

Builder submission complete. Fixture executes green (31/31; 15/15 required assertions); `tsc`/`eslint` clean. **No production schema or contract was introduced; the `OMNI Reactor` candidate definition is unchanged and unpromoted; no `reactor` identifier is used in code; no fresh Adversary submission (and no `_01`) was read.** Care freeze + 07-12 gate untouched; this nested nonbinding run does not repoint the checkpoint. Owed next per `_00 §7`: the fresh-Gemini incumbent-native Adversary trace, then Knox adjudication against the frozen `_00 §6A` rubric, then `_03` disposition. Evidence — not eloquence — changes the candidate.

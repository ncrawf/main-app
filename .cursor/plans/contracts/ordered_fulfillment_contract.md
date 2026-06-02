# OFC — Ordered Fulfillment / Care Obligations — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the Act-loop lifecycle substrate — the ordered-fulfillment state machine + the care-obligation (due/recall/retest/refill/monitoring/exception) substrate
Status: `draft_for_ratification` (created 2026-06-01, Foundation vNext; domain pass #13 — native draft; **`REV-163` PROPOSED-RESOLVED → drafted-as-own-domain; closure pending trifecta signoff — NOT "done"**; Nick + Knox review gate). Tightened 2026-06-01 per Knox review (release = state not authority; care_obligation ≠ universal task table; `REV-141` stays open).
Domain(s): `ordered_fulfillment`, `care_obligation`, `act_loop`
Lifecycle role: the ACT LOOP (thesis §8) — it owns the lifecycle STATE of *things ordered/fulfilled* (`fulfillment_order`) and *things owed/due* (`care_obligation`). It is the orthogonal counterpart to the Sense loop (Observation/Clinical-Memory). It owns lifecycle state ONLY; it **delegates all truth** to the owning domains (§3).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §2 native-draft method (FAC-first, one integrated pass). **Controlling: thesis §8 (two interlocking governed loops) + §8.6 (the Act/Fulfillment loop named — two separable primitives `fulfillment_order` + `care_obligation`) + `D0THES-DEC-031`.** Recovered evidence + stress-test corpus: `future_care_obligations_design_2026-05-17.md` (un-parked; the full `care_episode_task` design = the `care_obligation` primitive). Triggering instance: `REV-163` (the §1L lab-ORDER workflow = the `fulfillment_order` lab subtype). Method per `00_architecture_artifact_index.md`.
Supersedes: `future_care_obligations_design` as the build-facing act-loop artifact (→ evidence/spine); the §1L lab-order-WORKFLOW framing → the lab subtype here
Superseded by: none · Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** single build-facing home for the Act loop. thesis §8.6 + the un-parked `future_care_obligations_design` (3-layer model, 55+ task_kinds, 15 stress tests) + the §1L lab-order workflow are **evidence/provenance.** Build from THIS contract.

---

## §1.5 Freshest-Authority Check (embedded — native draft) + `REV-163` resolution

| Layer | Source | Disposition |
|---|---|---|
| **Controlling (thesis)** | §8 two governed loops + §8.6 Act loop (request→authorize→order→fulfill→output→review/release→follow-up; `fulfillment_order` + `care_obligation` separable) + `DEC-031` | clean-into-contract as the lifecycle model |
| **Recovered evidence (un-parked)** | `future_care_obligations_design_2026-05-17.md` — `care_episode_task` (30+ fields, 55+ task_kinds, conversion rules, 15 stress tests, 3-layer model) | the `care_obligation` primitive spec + pressure-test corpus |
| **Triggering instance** | `REV-163` — §1L lab-ORDER workflow (state machine 1L.4 · ownership 1L.7 · expiration 1L.8 · retest 1L.9 · triage/review/release 1L.20) | the `fulfillment_order` **lab subtype** (Observation cluster routed it here) |
| **Thesis (lens)** | §3.5 payload-noun ≠ domain (`GRD-026`) — labs/Rx/commerce/imaging/kit are SUBTYPES of the act loop, NOT domains | governs; the whole point of `REV-163` |

**`REV-163` PROPOSED-RESOLVED (this draft = drafted-as-own-domain; closure pending trifecta signoff — NOT "done"): OWN thin-but-rich domain** — the Act-loop lifecycle is its own substrate (two separable primitives), NOT decomposed into a seam bundle and NOT a per-noun "labs domain." Rationale: the lab-order state machine + the care-obligation recall engine are real, reusable, cross-payload lifecycle substrates that ≥5 domains reference; per the DL-8 primitive-admission criteria they earn their own home. No staleness (thesis §8.6 is the freshest framing). **Ratification gate must confirm: (a) the release-state ≠ release-authority discipline (§6); (b) `care_obligation` scope discipline (§5); (c) `REV-141` care_commitment relationship stays OPEN.**

## §1 Purpose

OFC owns **the Act loop**: `fulfillment_order` (the lifecycle of *something requested → authorized → ordered → fulfilled → output → reviewed/released → followed-up*, subtyped across lab/Rx/commerce/imaging/kit/device/procedure) and `care_obligation` (the lifecycle of *something owed/due* — recall/retest/refill/monitoring/exception). It answers *what is in flight, at what lifecycle state, and what is owed/due* — it owns **lifecycle STATE only** and **delegates every truth** (money/work/artifact/value/meaning/vendor/comms/identity/planning) to the owning domains.

## §2 Governing thesis concepts

§8: OMNI runs **two interlocking governed loops** — the **Sense loop** (source→observation→assertion→adoption) and the **Act loop** (this domain). §8.6: the Act loop has **two separable primitives** (`fulfillment_order` + `care_obligation`) — proven separable: commerce = fulfillment-with-no-obligation; monitoring = obligation-with-no-order. §3.5 + `GRD-026`: **payload-noun ≠ domain** — "labs/Rx/commerce/imaging/kit" are act-loop SUBTYPES that thread Sense (value→Observation, report→D7, finding→CM), money (D6), vendor (Federation), comms (Messaging) — NEVER their own domains.

**Build depth bar (Lens B; registry + thesis §3.5):** the *actual build* is **Amazon-fulfillment-class order lifecycle** (request→authorize→order→fulfill→deliver→exception, idempotent, reconstructable) for the fulfillment side + an **Epic/Athena-class recall/surveillance + order-tracking engine** for the obligation side (the "what is this patient due for / what is in flight" map that EMRs do poorly). NOT a per-noun "lab system." This is the build-facing comparator for OFC.

## §3 Ownership boundary

**Owns:** `fulfillment_order` (subtyped; the request→authorize→order→fulfill→output→review/release→follow-up **lifecycle state** + ownership/queue + expiration + retest loop + triage/review/release gate); `care_obligation` (due/recall/retest/refill/monitoring/exception **lifecycle state** + recurrence + assignment/escalation + conversion pointers); the order↔obligation linkage; the **release gate** (privacy/safety gate before output is released to patient).
**Does NOT own (delegates ALL truth):** **money** (D6 — fee/charge/entitlement) · **actualized work** (D5 — the occurrence/work-item that performs the order) · **the artifact/report** (D7 — the PDF/result document/media) · **the measured value** (Observation — the structured result) · **clinical meaning/adoption** (Clinical Memory — the assertion) · **the vendor/partner** (Federation — Quest/LabCorp/pharmacy operator + partner adapter) · **the patient communication** (Messaging — result-ready/abnormal-alert sends) · **who/identity** (Identity) · **the planned appointment** (D3 — a collection visit is an appointment) · **orchestration** (CNS — candidates/queue/escalation routing). OFC carries the lifecycle + references; the truth lives in those domains.

## §4 `fulfillment_order` (the ordered side — subtyped; the §1L lab subtype as the worked example)

One substrate, subtyped by `fulfillment_order_kind` (registry-extensible: `lab` / `rx` / `commerce_fulfillment` / `imaging` / `kit` / `device` / `procedure` / …). **Lifecycle state** (the §1L lab state machine generalized): `requested → authorized → ordered → in_fulfillment (requisition/kit/awaiting_collection/in_progress) → output_received → reviewed → released → completed` + `cancelled` / `expired` / `exception` (sample_issue/fulfillment_failure). Carries: `fulfillment_order_kind` · lifecycle_state · `responsible_provider`/`queue_owner` (1L.7 ownership) · `expires_at` (1L.8) · `retest_of_order_id` (1L.9 retest loop) · vendor/partner ref (→ Federation) · `operator_of_record` · output refs (→ Observation value / D7 report) · fee ref (→ D6) · occurrence ref (→ D5 collection/performance) · `released_to_patient_at` + release-gate state (1L.20 triage→review→release). **The order is the lifecycle spine; every truth is a reference.** A standalone shop-funded lab carries `commerce_order_id` (D6); a treatment-linked lab rides the Rx/treatment order — money is D6's either way (§D6 §12).

## §5 `care_obligation` (the owed side — the un-parked `care_episode_task`, scoped)

The lifecycle of *something owed/due in the care/fulfillment sense*. Carries (from the un-parked design): `care_episode_id` (longitudinal anchor) + `source_kind`/`source_id` + `task_kind` (registry) + `obligation_strength` (mandatory_clinical / mandatory_compliance / recommended_clinical) + temporal (`due_at`/`window`/`earliest_outreach_at`/`recurrence_rule`/`recurrence_strategy` lazy-vs-eager) + assignment/queue/escalation + lifecycle status + cross-task (`parent`/`dependency`/`supersedes`) + visibility. **Conversion rule (binding):** a `care_obligation` is **NEITHER an appointment NOR an encounter until it converts** — it converts to an **appointment** (D3) when scheduled, to a **`service_occurrence`** (D5) when clinically acted on, to an **`orchestration_action`** (CNS→Messaging) when an outbound satisfies it. The obligation IS the future-map item ("what does this patient owe / need / be due for") — it never conflates future obligation with past care action.

**Scope discriminator (binding — anti-junk-drawer; Knox 2026-06-01, 5-part test):** `care_obligation` is **NOT a universal task table.** The admission test is **NOT the payload label** ("marketing" vs "clinical") — it is the **lifecycle physics**. A thing belongs in OFC `care_obligation` only if it is a **patient/care/fulfillment/compliance obligation** with ALL of: **(1)** a due window or recurrence; **(2)** a responsible owner or queue; **(3)** a lifecycle state; **(4)** a failure/overdue consequence; **(5)** a clear conversion path (→ D3 appointment / D5 occurrence / CNS-Messaging / Observation-D7-CM / another owning domain). If it lacks those, it is **not** an OFC obligation. The **55+ task_kind catalog decomposes across owners**, it does NOT all live here:
- **Care / clinical / fulfillment / compliance due-states** (post-procedure check, recall cadence, rx_refill_due, lab_followup_monitoring, abnormal_result_review, consent/license renewal) → **`care_obligation` (OFC).**
- **Commercial lifecycle due-states** (membership renewal, package/gift-card expiration, autopay recurrence) → **D6 commerce lifecycle (`autopay_contract`/entitlement)** — a real due-state, but commercial truth, not care.
- **Marketing / engagement / lifecycle nudges** (birthday, anniversary, loyalty milestone, inactivity reactivation, no-show recovery) → **CNS / campaign engine** (`REV-149`/`REV-170`) — a trigger, not an obligation, *unless* it genuinely mints a care/fulfillment due-state.
- **Pure ops follow-ups / staff reminders** with no care/fulfillment due-state → **CNS task/queue or BIZOPS**, not `care_obligation`.

A `care_obligation` that starts absorbing every nudge, reminder, or ops follow-up is the bug — it becomes CNS/D5/BIZOPS/Messaging sludge. Keep it to genuine care/fulfillment due-states.

## §6 The Act↔Sense interlock + authority gates (thesis §8)

`request → authorize → order → fulfill → OUTPUT → review/release → follow-up`. **The OUTPUT feeds the Sense loop** (value→Observation, report→D7, finding→Clinical Memory) — OFC does not own the output's truth, it references it. **Authority gates between the loops** (none collapses): **eligibility/consent** (RBAC §7 + Settings gate-timing) before order; **payment** (D6) per policy; **verification** (Observation data-fidelity) on output; **clinical adoption** (Clinical Memory) before the output becomes care truth; **release gate** (the 1L.20 triage→review→release).

**Release gate = STATE, not AUTHORITY (binding — Knox 2026-06-01).** OFC owns the release *lifecycle state* (`reviewed`, `released`, `released_to_patient_at`) — it records *whether/when* a result was released. OFC does **NOT** own the *release decision*. The authorization to release a clinical output is **composed** from the owning domains: **RBAC** (capability/consent), **provider review** (a human/policy decision), **D7** (artifact readiness), **Observation** (data-fidelity verification), **Clinical Memory** (adoption status), and **CNS** (orchestration). OFC reads the composed decision and stamps the state. A future agent must NOT read "release gate" as OFC becoming the clinical release authority — OFC is the *ledger* of the release, not the *decider*. A `care_obligation` may be *generated by* a Sense-loop signal (abnormal observation → `abnormal_result_review` obligation) — the loops interlock, they don't merge.

## §7 Invariants / rejection rules (the gems)

1. **Two separable primitives** (§8.6): `fulfillment_order` ≠ `care_obligation` — commerce fulfillment has no obligation; monitoring has no order. Do not collapse them into one row.
2. **Lifecycle state ONLY; delegate all truth** (§3): OFC never stores money/work/artifact/value/meaning — it references the owning domain. A `fulfillment_order` that starts storing result *values* or *charges* is the bug — move them to Observation/D6.
3. **Payload-noun ≠ domain** (`GRD-026`): `lab`/`rx`/`commerce` are `fulfillment_order_kind` SUBTYPES, NOT domains; reject a per-noun "labs domain" / "lab_intake" bucket.
4. **Obligation is neither appointment nor encounter until it converts** (§5): the future-map item is distinct from the realized care action; conversion populates the fulfillment pointer.
5. **Release gate = STATE, not AUTHORITY** (§6; Knox): OFC owns the release *lifecycle state* (`reviewed`/`released`/`released_to_patient_at`); the release *decision* is **composed** from RBAC + provider-review + D7-readiness + Observation-verification + CM-adoption + CNS. OFC is the *ledger* of the release, not the *decider*. A result is NOT auto-released until the composed policy is satisfied; **AI never releases** (it may triage/flag).
6. **Retest is a first-class loop, not a delete** (1L.9): a retest is a new `fulfillment_order` with `retest_of_order_id`; the prior order is preserved.
7. **Expiration is explicit** (1L.8): an unfulfilled order expires (`expired`), it is not silently dropped; an expired obligation is `expired_unfulfilled`, audited.
8. **AI-proposed clinical obligations require human confirmation** (un-parked §4.4 / §12.8): `proposed_ai_pending_human_review` until a human confirms; AI never auto-activates a mandatory_clinical obligation.
9. **Recurrence is lazy-by-default** (un-parked §4.4): `lazy_next_only` unless a known-date recall needs `eager_fixed_dates`; tenant policy per task_kind (config = Settings).
10. **Ownership/queue + escalation are explicit** (1L.7): every order/obligation has a `responsible_provider`/`queue_owner`; overdue escalates per rules (CNS orchestrates the queue; OFC carries the ownership field).
11. **`care_obligation` is NOT a universal task table** (§5; Knox 5-part test): admission requires ALL of {due window/recurrence · responsible owner/queue · lifecycle state · overdue consequence · conversion path} in the care/fulfillment/compliance sense — NOT the payload label. Commercial due-states → D6; marketing/engagement nudges → CNS/campaign; pure ops reminders → CNS/BIZOPS. Reject obligation-as-junk-drawer.
12. **OFC does NOT resolve `care_commitment` (`REV-141`)** (§10): obligation = something due/owed/in-flight; commitment = accountable care promise once responsibility is accepted. An obligation may *lead to* a commitment; it does NOT equal one. The relationship stays OPEN at `REV-141`.

## §8 Disposition table

| Prior primitive / source | Disposition | Note |
|---|---|---|
| thesis §8.6 (fulfillment_order + care_obligation) | **clean-into-contract (spine)** | §4/§5 |
| `future_care_obligations_design` `care_episode_task` (30+ fields, conversion, 15 stress tests) | **= `care_obligation`, SCOPED** (§5) | un-parked; the *care/fulfillment/compliance due-state* subset only; stress tests = build-validation corpus |
| 55+ task_kind catalog (clinical → marketing → ops) | **DECOMPOSES across owners** (§5; Knox) | care/fulfillment/compliance → `care_obligation`; commercial lifecycle → **D6**; marketing/engagement → **CNS/campaign**; ops reminders → **CNS/BIZOPS**. NOT all `care_obligation`. |
| §1L lab-ORDER workflow (state machine/ownership/expiration/retest/triage-review-release) | **= `fulfillment_order` lab subtype** (§4) | Observation owns the result VALUE (1L.6); OFC owns the order LIFECYCLE |
| §1L lab result value / normalization | **NOT here → Observation** | the value is Sense-loop |
| lab report PDF | **NOT here → D7** · lab finding/assertion → **Clinical Memory** · kit fee → **D6** · vendor adapter → **Federation** · patient comms → **Messaging** | OFC references |
| `care_episode` (the longitudinal thread the obligation anchors to) | **D5 owns; OFC references** (`care_episode_id`) | obligation anchors to the episode |
| 55+ task_kinds + lab panel definitions | **config-as-code seed → Settings/`repo/`** | OFC owns the lifecycle, not the catalog content |
| "new `care_obligation` substrate vs extend `care_episode_task`" (un-parked §10 rejected) | **resolved: ONE `care_obligation`** = the un-parked `care_episode_task` | single substrate for not-yet-realized obligations |

## §9 Seams

- **OFC ↔ Observation** (`SC-OFC-OBS-001`): order `output_received` → structured value lands in Observation (`source_observation_ids` back-ref).
- **OFC ↔ D7** (`SC-OFC-D7-001`): order output report/PDF → D7 artifact (materialized record).
- **OFC ↔ Clinical Memory**: released/reviewed finding → CM assertion (`document_extracted`/`lab_derived`, unconfirmed until provider adopts).
- **OFC ↔ D6**: order fee/charge → D6 (`commerce_order_id`/treatment-order money; no second source of price).
- **OFC ↔ D5**: a collection/performance is a `service_occurrence` (the actualized work); OFC references it.
- **OFC ↔ Federation**: vendor/partner operator (Quest/LabCorp/pharmacy) + partner adapter; cross-operator order via permeability.
- **OFC ↔ Messaging/CNS**: result-ready/abnormal-alert outbound (Messaging executes; CNS orchestrates the queue/escalation); a `care_obligation` converts to a CNS `orchestration_action` when an outbound satisfies it.
- **OFC ↔ D3**: a collection visit / procedure is an `appointment` (D3 plans; the obligation converts to an appointment when scheduled).
- **OFC ↔ RBAC/Settings**: release-gate + order eligibility gated (RBAC consent/capability + Settings gate-timing); recurrence/task-kind config (Settings).

## §10 Open items (→ `08`)

- `REV-163` **proposed-resolved** toward OWN-DOMAIN here (closure pending trifecta signoff — NOT "done") — confirm Observation §3/§11 + the Observation cluster routing re-point to "OFC owns the order lifecycle; Observation owns the value."
- 55+ task_kinds + lab panel definitions = config-as-code seed (Settings/`repo/`); not contract content.
- Recurrence strategy (lazy/eager) per task_kind + external-evidence matching (order_id reference; fuzzy match M3+) = build detail (un-parked §4.4).
- **`care_obligation` vs `care_commitment` stays OPEN at `REV-141` — OFC does NOT resolve it (Knox 2026-06-01).** Framing to carry into the `REV-141` pass: **`care_obligation` = something due/owed/in-flight**; **`care_commitment` = an accountable care promise/ownership once a human/operator/domain has *accepted responsibility*.** An obligation may *lead to* a commitment; it does **NOT** equal one. Do not let OFC quietly collapse the two.
- Cross-task dependency enforcement promotes to a CNS `orchestration_run` when chains exceed 3 steps / cross domains (un-parked §4.4).

## §11 Evidence sources

thesis v2 §8 (two governed loops) + §8.6 (Act loop named) + §3.5 (`GRD-026` payload≠domain) + `D0THES-DEC-030`/`DEC-031` · `future_care_obligations_design_2026-05-17.md` (un-parked; full `care_episode_task` design + 15 stress tests + industry-validation table) · `REV-163` (§1L lab-order workflow: 1L.4 state machine / 1L.7 ownership / 1L.8 expiration / 1L.9 retest / 1L.20 triage-review-release) · Observation contract §3/§11 (lab-order routing) · D5 §4 (`care_episode`) · D6 §6/§12 (money-ownership) · comparator registry (Amazon fulfillment / Epic-Athena order lifecycle).

# OMNI Care Operating Model — architecture capture

*Working handle: **Care Loop** (the shorthand Platform + Accountability use). Honest title: Care is **TWO primary interlocking governed loops (Sense + Act/Fulfillment)** bridged by a governed-resolution **gate**, with a **Planning/Commitment composition LAYER** between resolution and execution and a **Prove/Outcome/Learn feedback PATH** back into Sense. Planning is a layer, not a third loop; Prove/Learn is the feedback path, not a loop — kept deliberately, not by grammar accident. This capture **assembles + reconciles** the distributed care architecture (cites + composes; does not invent or re-derive).*

Document type: `plan_or_roadmap` (cross-cutting capture; pre-spine; NOT a live contract, NOT spine/thesis prose, NOT a new truth-owning domain) · Authority: `analysis_nonbinding` (`GRD-036`) · Status: **REVIEW-DRAFT (structural-correction + scenario-execution pass; NOT closed)** · Domain(s): architecture_governance, care_operating_model, cns_coordination, cross_cutting · Review gate: `user_knox_required`. Siblings: `v4_C4_platform_loop_capture.md` · `v4_C4_governed_reporting_resolution_capture.md`. **Third peer + center of gravity.**

> **★ Controlling model (one shape; do not multiply loops):**
> ```
> SENSE LOOP        acquire → evaluate → contextualize
>       ↓
> RESOLUTION GATE   world_model → authority/trust_horizon → stance      (REV-184; §4)
>       ↓
> PLAN / COMMITMENT goals → accepted responsibility (clinical + patient) → dependencies
>   (composition layer)  → orders / obligations / monitoring / reassessment            (§5)
>       ↓
> ACT / FULFILLMENT LOOP  execute → occur → deliver → communicate → follow-up          (§6)
>       ↓
> PROVE / OUTCOME / LEARN  effect-observation contract → evidence → assessment → learning → re-enters SENSE  (§7)
> ```

> **Reading key:** **[INV]** candidate invariant (proposed, NOT ratified) · **[ARCH]** architecture candidate · **[C5]** contract/field detail deferred · **[OPEN]** unresolved (source pass / Nick+Knox decide) · **[TD]** Task-D.

> **★ Frame:** REV-184 is the **signed-off governed-resolution grammar AT the Sense→Act gate** — Care implements it at the gate; Platform/Accountability **inherit its constitutional laws where applicable**, not its concrete lifecycle. **"Care never closes" is FALSE** (objects close/transfer/dormant/supersede/reopen; care is longitudinal because outputs re-enter Sense, §2).

## §0 — Source-authority + inheritance map (BOUNDED Care source-base reconciliation — not a whole-estate proof)
*`arch_authority ∈ {SIGNED-OFF · BINDING · LIMITED-USE · PARKED/DRAFT · PRESSURE-VERDICT · DEEP-HISTORICAL · EVIDENCE · ARCH-LOCK · OPEN}`. `build_maturity ∈ {built · partial · stub · none · n/a}` (n/a = not a build artifact). **arch_authority ≠ build_maturity — two axes.** `verified_at` = when build-state was checked against the repo; **`unknown` where not re-verified this pass** (do not treat this table as a live build dashboard). Durable pointer = carrier · section/registry · id.*

| Care concept | Carrier · pointer | arch_authority | build_maturity (verified) | Inherited law | Limitation | Dest |
|---|---|---|---|---|---|---|
| Governed resolution gate | `v4_REV184…` §0 | SIGNED-OFF | n/a | world-model honesty · trust_horizon · stances · non-action-as-commit · outcome-reads-frozen-context · reopen/supersede | not the whole Care lifecycle; not parent of sibling loops | §4 |
| Two interlocking loops | `omni_thesis_v3_integrated_2026-06-05` §8/§8.6 · spine Lane 3 | DEEP-HISTORICAL (unratified/incomplete) | n/a | Sense↔gate↔Act; act-output re-enters Sense; obligation triggers Act; CNS coordinates, owns no truth | thesis abandoned mid-authoring | §1/§3/§6/§7 |
| Sense truth (3 planes) | `clinical_memory_assertion_contract` §2/§8 · `observation_measurement_contract` §4 · `D7…` §7 | BINDING | partial (unknown) | artifact-integrity ≠ data-fidelity ≠ clinical-adoption; provider is only adopter | — | §3 |
| Act lifecycle | `ordered_fulfillment_contract` §3–6 · `D5…` §4/5 · `D3…` §7 | BINDING | partial (unknown) | OFC = `fulfillment_order`+`care_obligation` **state only**; D5 occurrence+`care_episode`; D3 planning-only; encounter=`encounter_view` projection | 1st-class encounter rejected (D5 §9) | §6/§14 |
| Coordination | `CNS_orchestration_contract` §6/9/10 · `cns_action_orchestration_adr` | BINDING | partial (unknown) | CNS candidate/resolver/orchestration + `clinical_required` permit = process-state, not truth | mini-brain sprawl rejected | §10 |
| Longitudinal intelligence | `longitudinal_intelligence_cns_patient_operating_context` §6/10 + pressure-test | LIMITED-USE (`D0W3C-REV-001/002`) | none | 7-rung ladder; baseline+delta; absence≠normality; informs/ranks/suppresses, never commits | 4 conditional dims closed for limited use only; pre-v2 vintage | §3/§8/§12 |
| Care coord/episode/obligation | `DL-20_care_coordination_DRAFT` · `future_care_obligations_design` | PARKED/DRAFT | none | 3-layer appt/encounter/evidence; `care_episode_task`=`care_obligation` | overlay-vs-workstream OPEN; schema parked | §5/§6/§14 |
| `care_commitment` | thesis §7.3 · `D5` §10 | OPEN (`REV-141`) | none | relationship + accountability-threshold landed | object/projection/interface UNDECIDED | §5 (OPEN) |
| Founding longitudinal loop | `omni_field_cases` FIELD-001 · `08` `REV-142` | OPEN | none | signal→trend→candidate→review→commitment/action/no-op→patient-visible | not designed+buildable e2e | §22 (test) |
| Async-care crystallization | `EVRUN-2026-000004` §0.5 (`EVSRC-251/252`) | EVIDENCE (`accepted_required_v4_input`) | n/a | streaming mixed-initiative; context-admission-gate ≠ commit-gate; authority-atomization; false-closure ladder; AI-influence lineage; M2 fabric | M2 `build=ABSENT` | §5/§6/§8/§22 |
| Legacy System Map (care/CNS) | `system_map_three_layers…` §1G/§1K.5.A/§1W/§1H | DEEP-HISTORICAL (partly STALE) | n/a | §1G case-ownership + `clinical_required` + continuation; §1K.5.A assertions; §1W tracked-object | §1G decomposed→D5+CNS (`REV-161`, verify) | §5/§9/§20 |
| Polaris (alignment core) | `v4_C4_1_omni_polaris…` | ARCH-LOCK (naming/taxonomy) | n/a | computed projection `f(actor×relationship×authority×purpose×consent…)`, not hardcoded modes | — | §11 |
| Field cases | `omni_field_cases` FIELD-002/003/004 | EVIDENCE | n/a | provenance-preserving carry-forward; care-begins-outside-OMNI; streaming/false-closure | 002→`REV-167`; 003→Identity/imaging; 004→M2 absent | §8/§18/§22 |
| Hospital / trial / access | C3.5 `G4`+`G4_1` · C3.6 `G` · C3.7 `G` | PRESSURE-VERDICT | none | §20 tables | contract effects unapplied | §20 |
| Care video synthesis | EVRUN-000001/2/3/5 registries | EVIDENCE | n/a | §20 table (internal-novelty ≠ external prior-art) | wave-4 = 0 net-new | §20 |
| Surfaces/projections | `patient_context_packet` proj + `patient_app_home`/`provider_task_workspace`/`intake_review`/`support_inbox` | BINDING (map authority) | stub (verified stub) | packet = authority-labeled refs + trace_lineage + decay; surfaces render+invoke, never commit | `REV-154` OPEN | §12/§16/§22 |

## §1 — Purpose, boundary, authority
**Care Operating Model = OMNI's longitudinal care engine** (the controlling model above). It is an **umbrella over domain-owned records**, NOT a truth-owning domain and NOT one executive. **[INV] Ownership language (corrected):** *canonical domain records and state remain with their owning domains* — **Clinical Memory** owns clinical *meaning* (adopted assertions), **Observation** owns *measured/reported facts*, while **D3/D5/OFC/D6/D7** own their native *planning / occurrence / execution / financial / evidentiary* state respectively. "Truth" is not one flat thing across those domains.

## §2 — Nested temporal topology (rejects "Care never closes")
Care is longitudinal because outputs/outcomes RE-ENTER sensing — not because nothing closes. Horizons, each with own terminal/dormant/transfer/supersede/reopen: signal · resolution · encounter · order/fulfillment · obligation · episode (concurrent episodes independently stateful, may be clinically related) · relationship · longitudinal-context · outcome/learning. *(care_commitment lifecycle + "ownership closes care" are `[OPEN]`, §5 — not carried as settled.)*

## §3 — Sense loop (branched; observation ≠ clinical assertion)
```
source_event
├─ direct structured source (lab feed·device·appointment/dispense event·structured intake) → observation/operational_event
├─ media/document (unstructured) → extraction_run → extracted observation candidate + extracted assertion candidate
├─ external committed record → attributed_external_state (source-authority labeled)
└─ patient/provider statement → source_attributed_claim (Intake §7; never auto-adopted)
      ↓ integrity(D7) · data-fidelity(Obs) · source-authority evaluation → verification where applicable
      ↓ clinical adoption ONLY where clinical MEANING is asserted (CM; provider adopts)
      ↓ contradiction/supersession (append-only)
 authority-labeled context projection (context_packet — MAY carry non-adopted evidence, each item labeled)
```
- **[INV] Observation ≠ assertion:** `BP 158/96`/`med dispensed`/`reported nausea`/`no-show`/`low sleep` = observations; `uncontrolled HTN`/`suspected adverse effect`/`adherence concern`/`deterioration` = later provider-adopted assertions. Distinct planes.
- **[INV] Context may include non-adopted evidence** (raw/verified observation · patient claim · external state · unadopted candidate · unresolved contradiction), each authority-labeled. Adoption needed for clinical *truth/action*, not for context entry.
- **[INV] AI/automation boundary:** automation MAY perform/support bounded integrity/fidelity/classification/technical-verification where the owning contract permits (doc integrity · extraction confidence · feed validation · schema conformance · dedupe/anomaly · image-quality · deterministic thresholds), and a deterministic service MAY commit a *technical* verification state under policy. AI NEVER performs clinical adoption, converts evidence to clinical truth silently, or gains clinical authority by passing a technical check.
- **LI ladder (LIMITED-USE):** signal→observation→trend→interpretation→candidate→action/no-op/review/escalation→optional D7; baseline+delta; **absence ≠ normality**; informs/ranks/suppresses, never commits.

## §4 — Governed-resolution gate + resolution-outcome branches (REV-184's home)
Decide layer between Sense and Act. REV-184 §0: partial time-stamped `world_model` (predicted_state = candidate, not truth) · `trust_horizon` · stances · non-action-is-a-committed-decision · disagreement=escalation · outcome-reads-frozen-context · reopen/supersede. Ownership (§0.4): CNS record/lifecycle/graph · RBAC authority/blast-radius gate · CM truth+commit · OFC obligations-from-stance · D7+trace_lineage proof. **Do NOT generalize REV-184 into every care object's lifecycle.**
**[INV] Resolution-outcome branches (these live at the GATE, not in Act):**
```
REV-184 resolution
├─ act              → Plan/Commitment (§5) → execution branches (§6)
├─ monitor          → care_obligation / observation plan
├─ defer            → wait condition / deadline / reassessment trigger
├─ consult          → linked consult work
├─ no-action/not-indicated → rationale + communication-if-owed (the DECISION is not an Act; communicating it may produce one)
└─ emergency-first  → immediate execution + post-hoc reconciliation
```
**[INV] Recommendation-integrity firewall (C3.7):** accrual/revenue/retention pressure must not bend clinically-appropriate presentation (structural, auditable, economically-blind, posture-invariant); **honest-null terminal** = a first-class committed decision, never a failed conversion.

## §5 — Planning / Care-Plan / Commitment / Ownership (composition LAYER; architected, not a box)
**[INV] Minimum planning/commitment invariant (independent of whether `care_commitment` is object/interface/projection).** Every actionable Care plan MUST be able to express: **problem/need/question · goals + intended effects · accepted recommendation/stance · patient preference/consent/refusal · responsible clinical owner · organizational responsibility · plan items/interventions · dependencies/prerequisites · orders + obligations created · monitoring/follow-up plan · reassessment + failure triggers · alternatives considered · expected time horizon · version/supersession lineage · status visible to patient + team.** This is the contract; the physical object stays open.
**[OPEN] `care_commitment` (`REV-141`) — 4 options + decision criterion:** (a) distinct canonical object · (b) projection over resolution+owner+obligations+orders · (c) shared interface implemented per-domain · (d) retire. **Decision test (C5):** does accountability/visibility require a *single addressable record* (→ a/c), or does the §5 invariant compose cleanly from existing records (→ b)? The planning invariant is the acceptance contract either way. Do not carry "ownership closes care" as locked.

## §6 — Act / Fulfillment loop (only EXECUTION work; branched)
Clinical adoption (§3) and no-action/defer (§4) are NOT here. Only resulting execution enters Act:
```
authorized execution intent (from a committed plan)
├─ direct domain commit (message · issue instruction)
├─ planned work (D3 appointment · procedure series)
├─ internal service occurrence (D5)
├─ external fulfillment (external pharmacy · outside lab · vendor)
├─ communication (Messaging — reply · result release)
└─ monitoring execution (recall/retest/refill obligation activation)
```
- **[INV] Ownership:** OFC = `fulfillment_order` (`requested→authorized→ordered→in_fulfillment→output_received→reviewed→released→completed`+`cancelled/expired/exception`) + `care_obligation`, **state only** ("ledger of the release, not the decider"). D5 = occurrence+`care_episode` (completion ≠ closure). D3 = planning-only.
- **[INV] Appointment is ONE materialization of a `care_obligation` AND may originate independently** (patient request · clinician plan · standing protocol · preventive · procedure series · operator workflow · reschedule · intake). `fulfillment_order` + `care_obligation` are a SEPARABLE family.
- **[INV] Fulfillment exception reopens *clinical* resolution ONLY when the clinical picture changes** (feasibility/delay-risk/substitute/preference/consent/viability). Stockout resolved by alternate location/equivalent/delay/insurer-routing = operational reroute, not clinical reopen.
- **[INV] False-closure ladder:** `planned ≠ authorized ≠ transmitted ≠ in-stock ≠ dispensed ≠ obtained`.
- Clinical-action ladder (video 149): education→suggestion→evidence-candidate→review→authorized-commit→fulfillment→monitoring; anti-rubber-stamp.

## §7 — Prove / Outcome / Learn feedback path (effect-observation contract, not "every act emits")
**[INV] Effect-observation contract (replaces the false "every committed Act emits an observable effect"):** every *consequential* act must **declare** — what effect is expected · how + when it could be observed · who owns follow-up · what counts as **no-observable-outcome** · remaining uncertainty · reassessment trigger. **An honest `effect_not_observable` state is valid; silent absence is not proof of success.** (Delayed/unmeasurable/out-of-OMNI/confounded/process-only/expected-absence-of-deterioration all exist.)
**[INV] Four distinct proofs (prevent false-closure collapse):** execution proof (did the act occur?) · delivery/communication proof (did it reach the recipient?) · clinical-response evidence (what changed in the patient?) · outcome/learning evidence (what can reasonably be inferred over time?).
**[INV] Decision-quality ≠ realized-outcome:** an outcome may change future decisions **without** proving the earlier decision negligent/wrong under the context then (outcome reads frozen context, §4).
**Learning:** routes to Outcome-Intelligence/RWE (REV-174) + owning domains; never silently mutates clinical policy. **Population learning basis is by purpose + legal basis + consent + partition + source-authority** (de-identified / pseudonymized / limited-dataset / consented-identifiable / research-partition) — NOT a blanket "de-identified."

## §8 — Longitudinal coherence — OWNERSHIP TABLE (not a flat list)
| Continuity | Canonical owner(s) | Must persist | Can supersede | Breaks continuity | Reconciliation |
|---|---|---|---|---|---|
| identity | Identity | person linkage | identity correction/merge | unresolved duplicate | governed identity reconciliation |
| source | D7 / source-authority | origin + version | corrected source | missing lineage | source reconciliation |
| clinical state | Observation / CM | facts + adopted meaning | newer evidence/adoption | stale/contradictory | clinical review |
| decision | CNS / REV-184 | frozen context + stance | reopen/supersede | missing rationale | governed resolution |
| plan | OPEN / composed (§5) | intended actions + owner | revised plan | owner loss / conflicting plan | planning reconciliation |
| relationship | care-relationship owner | active roles | transfer/termination | no accepted owner | assignment/escalation |
| responsibility | CNS assignment + operator | accountable owner | reassignment | orphan | no-orphan escalation |
| obligation | OFC | due work + status | fulfillment/transfer/waiver | overdue/orphan | obligation escalation |
| fulfillment | OFC / D5 | requested vs actual | correction/new attempt | false completion | execution reconciliation |
| communication | Messaging + obligation | owed comms + delivery | corrected comms | undelivered/unread | reattempt/escalate |
| episode | D5 | occurrence grouping | new episode | ambiguous grouping | clinical grouping review |
| outcome | domain / Outcome-Intel | observed effect + uncertainty | later evidence | missing follow-up | reassessment |
| cross-operator | Federation + Identity | `continuity_binding` (identity+grants+episode+modality) | grant change | grant revoked / no binding | federation reconciliation (**visibility ≠ authority**) |
**[INV]** State classes (`current · historical · provisional · contradicted · superseded · disputed · dormant · no-longer-relevant · indefinitely-significant`) are **projection descriptors of the assembled view — they do NOT replace the lifecycle states of the canonical records underneath.** Carry-forward is provenance-preserving (FIELD-002), never blind copy.

## §9 — Actors + authority — FIVE layers (patient is a first-class authority; the moat)
1. **Patient / represented-principal:** patient · parent/guardian · authorized surrogate · caregiver-in-delegated-scope. **Owns by context:** consent/decline · treatment preference · **choice + change + termination of the treating relationship** · information-sharing permission · correction/challenge of the record · self-reported goals/experience · certain self-care actions.
2. **Human clinical-accountability role:** `treating_owner` · `ordering_clinician` · `supervising_clinician`.
3. **Organizational responsibility:** operator · department · care team · coverage pool · service line.
4. **Operational custody:** queue · on-call · current work owner · backup owner.
5. **Execution actor:** human · protocol · deterministic system · AI agent · external system · device.
- **[INV] Patient-authority is CARE-SPECIFIC and load-bearing (the differentiator vs a generic ontology):** the patient is the ultimate authority over *who treats them* and over consent/continuity; the `treating_owner` holds the clinical-commit role — these are **distinct**. A configurable ontology platform (Palantir-class) can model roles/permissions but does not natively encode *patient-as-represented-principal who owns the relationship and carries continuity across operators*. (Ties to C3.7 firewall + continuity-without-captivity.)
- **[ARCH] The thesis §7.2 six-role set** (`treating_owner`/`consulting`/`ordering`/`supervising`/`monitoring_owner`/`open_loop_owner`) is a strong candidate (DEEP-HISTORICAL), NOT locked `[INV]`; `open_loop_owner` may be a named human OR an accountable role OR a team-with-accepted-custodian+fallback.
- **[INV] Non-human actors** participate as **bounded candidate/evidence producers** (generate/compare/simulate/retrieve/record-rationale/flag-disagreement); may NOT hold the human/org care-accountability role, vote into consensus, or become clinical author.
- `care_team_graph` = patient-/purpose-/consent-scoped; surrogate: `surrogate_authority→visibility_grant→conversation_scope→rail→update-obligation`; **delegated ≠ inherited authority.**

## §10 — CNS: positive definition + hard limits
**[INV] CNS = the governed care-coordination + resolution control plane.** Coordinates: authorized-context assembly · candidate creation/routing · resolution + orchestration lineage · **care-owner ROUTING + accepted-assignment coordination** (propose·route·request-acceptance·record-accepted-assignment·escalate-non-acceptance — does **NOT silently assign** ownership unless an authoritative deterministic policy permits) · **orchestration-request initiation** (CNS initiates a candidate/orchestration request; the **owning domain authorizes + commits** the order/fulfillment) · follow-up · exception routing · cross-domain + cross-operator transitions · longitudinal reconsideration; maintains the `clinical_required` permit (cleared by patient inbound / staff resolution / deterministic policy — never AI).
**[INV] CNS owns NO:** clinical/observation/appointment/occurrence/fulfillment/payment truth · signed documents · clinical authorship · every obligation · every native lifecycle. Process-state, not truth. Not sovereign. **This capture PROPOSES the positive definition needed to close `FWREG-007`** (subject to review). *CNS is the orchestrator of the Care specialization in this comparison — not necessarily Care-exclusive across all OMNI (it also coordinates some business/cross-domain work).*

## §11 — Polaris / authority composition
**[INV]** Clinical profile = a named **family** of alignment concerns + owners; applied posture **computed** per `actor × relationship × patient × purpose × evidence × consent × jurisdiction × risk × timing × reversibility × current-authority` (C4.1; not hardcoded modes). REV-184 lives only in the Clinical profile's resolution semantics. Authority-by-action-class (CNS §90): low-authority evidence OK for routing/suppression/review-candidate; clinical action needs provider adoption / owning-domain commit / policy gate.

## §12 — Care health (4-role ownership per field; attention ≠ clinical disposition)
| Field | source owner | computation owner | threshold/policy owner | operational responder |
|---|---|---|---|---|
| context freshness | source-authority/context-assembly | Care-health projection | clinical/service policy | assigned care owner |
| unreviewed-candidate age · decision latency | CNS queue | Care-health projection | service/clinical policy | care owner/queue |
| unresolved contradiction | CM | CM projection | clinical governance | reviewer |
| result_not_communicated | Messaging delivery + care_obligation | Care-health projection | clinical/service policy | assigned care owner/queue |
| obligation at-risk/breached · lost-to-follow-up | OFC + relationship | Care-health projection | clinical/service policy | obligation owner |
| fulfillment/follow-up completion | OFC | Operating-Intel | service policy | fulfillment owner |
| care-owner continuity · handoff acceptance | CNS assignment + care_team_graph | Care-health projection | clinical governance | coverage authority |
| provider_queue_burden | workflow queue | Operating-Intel | service owner/BIZOPS/clinical-governance | workforce/coverage authority |
| patient_burden / alert fatigue | patient report + interaction telemetry | product/care-health projection | clinical/product governance | workflow owner |
| outcome visibility · recurrence | Outcome-Intel | Outcome-Intel | clinical governance | care owner |
- **[INV] Attention ≠ clinical disposition (separate axes).** `attention_class ∈ {background · batched · notify · must_review · interruptive · emergency}` (presentation/queueing) is DISTINCT from `clinical_disposition ∈ {monitor · defer · request_more_context · no_action · escalate}` (§4 REV-184 stance). **Attention policy cannot silently change clinical disposition** (killed the dangerous "auto-no-op").
- **[OPEN] Deterministic care timing is likely NOT a new primitive** — compose `care_obligation.due_at` + scheduling + recurrence + escalation policy + **canonical clock authority** + job execution + event emission + missed-deadline handling. Gap = clock-authority + timer-execution + escalation semantics.

## §13 — Degraded / out-of-band care (higher-risk than degraded Accountability; real contract, inherits C3.5)
**Minimum offline care record** [ARCH]: patient identity + **confidence** · critical allergies/meds/conditions (if available) · active problem/current concern · last-known plan + owner · acting person/system + authority · emergency action taken · time + source · temporary clinical/operational custodian · communication state · local sequence/idempotency token · evidence/artifact refs · pending reconciliation obligations.
**Operating laws:** store-and-forward · offline identity assurance (step-up for meds/labs/payments) · temporary ownership · which mandatory actions may proceed without the primary system · **safe-halt vs safe-continuation** · duplicate detection · **conflict preservation** (append-only, never overwrite) · **field-specific reconciliation** (no universal winning record — clinical truth via adoption authority, custody via ledger, identity via Identity, operational via owning plane) · retrospective authorization · **patient notification** · post-recovery merge + **rejected-merge audit** · **unavailable monitoring must not read as false reassurance** · degraded-instrumentation disclosure (`instrumentation_health_state ∈ {active|degraded|absent}`). Emergency actions are valid historical events linking to retrospective authorization (REV-184 `emergency-first`/`post-hoc-reconciliation`).

## §14 — Canonical object / owner / state map (state-on-owning-object)
| Object | Owner | Owns | Not | Terminal/transition |
|---|---|---|---|---|
| person/patient identity | Identity | linkage/assurance | clinical meaning | active/merged/corrected |
| care relationship | care-relationship owner (CNS-recorded) | active roles + patient choice | clinical truth | established→transferred/terminated |
| care need/problem/question | CM/CNS (OPEN home) | the clinical question | its resolution | open→resolved→re_opened |
| goal / preference | patient + care plan | patient-stated intent | clinical order | stated/updated/withdrawn |
| consent/refusal | D7/Identity/patient | permission state | clinical decision | granted/revoked/declined |
| treating-owner assignment | CNS (accepted by human) | accountable owner | clinical truth | proposed→accepted/escalated/transferred |
| resolution_record | CNS | process/lineage | clinical truth | REV-184 stance; reopenable |
| plan / plan-item | OPEN/composed (§5) | intended actions + owner | native domain truth | drafted→committed→revised/superseded |
| `care_commitment` | OPEN (`REV-141`) | TBD | TBD | TBD |
| source_event | ingestion source | capture id/time/source | clinical meaning | captured |
| media_artifact | D7 | custody/integrity | clinical truth | materialized/superseded |
| observation | Observation | measured/reported state + fidelity | adopted meaning | verified/superseded |
| clinical_assertion | CM | adopted meaning | raw measurement | not_adopted→adopted/rejected→superseded |
| context_packet | CNS (projection) | authority-labeled assembly | canonical truth | derived/decays |
| appointment | D3 | planned time/resource | performed care | booked→checked_in/cancelled/no-show |
| fulfillment_order | OFC | ordered execution state | clinical meaning | requested→…→completed/cancelled/expired/exception |
| care_obligation | OFC | due/follow-up state | domain truth | proposed→active→**overdue/breached/reassessment_required**→fulfilled/waived/transferred/superseded (see §15) |
| service_occurrence | D5 | actualized work | payment/docs | scheduled→in_progress→completed (≠closure) |
| care_episode | D5 | occurrence grouping | all longitudinal care | open→…; concurrent independent (may relate) |
| encounter_view | D5 (projection) | *renders* open/closed | the underlying state (§15) | derived |
| referral / consult | OPEN (D5/CNS) | linked work + bounded opinion | treating decision | requested→accepted→resolved |
| result-review obligation | OFC/CNS | review duty | the result | pending→reviewed/escalated |
| care-team relation | care_team_graph | roles/scope | org chart | added/removed |
| transfer of care | CNS + accepting owner | responsibility handoff | clinical truth | initiated→accepted (else no-orphan) |
| patient correction/dispute | CM + D7 (patient-source) | the challenge | overwrite of record | raised→adjudicated (append-only) |
| administration (SPLIT, §below) | see split | — | — | — |
| communication | Messaging | delivery/thread state | clinical truth | sent/delivered/read |
| outcome_projection | Outcome-Intel | effect projection | underlying outcome truth | derived |

**[INV] `administration` splits (do NOT make an "event" a workflow state machine that owns clinical truth):** administration **instruction/order** → OFC/domain · administration **task/workflow** → operational state · administration **occurrence** (given/held/partial/interrupted/refused/wasted/dose-changed/adverse-response) → D5/clinical occurrence · administration **observations** → Observation · **signed record** → D7 · **adopted clinical meaning** → CM.

## §15 — State-on-owning-object + field authority
Every state lives on its owning object; links are edges. `encounter_view` renders open/closed but the state is owned by the underlying **appointment / service_occurrence / care_episode / note-signing / participant-relationship** (§14). **[INV] `expired_unfulfilled` corrected (do not repeat the Accountability terminal error):** a *fulfillment attempt or scheduled window* may expire/fail, but the **`care_obligation` becomes `overdue | breached | reassessment_required | transferred | superseded`** — it reaches a **terminal** status ONLY through fulfillment · authorized waiver · accepted transfer · supersession · explicit disposition. *A missed cancer follow-up is not terminal because a date passed.* Aggregate/derived fields carry field-level source lineage; conflicting classifications preserved + resolved by governed decision, never silently overwritten.

## §16 — Care views (governed projections; own no truth)
patient longitudinal · provider current-decision · provider review queue · care-team/consultation · obligation/follow-up · cross-operator continuity · degraded-care · outcome/reassessment · safety/accountability-linked. Each = permission-aware projection over §14; renders + invokes verbs, commits nothing.

## §17 — Human authority table (patient is first-class)
| transition | proposes | authorizes/commits | patient/surrogate role | fallback |
|---|---|---|---|---|
| adopt clinical assertion | AI/clinician | clinician (CM adopter) | may contest/correct (append-only) | on-call clinician |
| accept treating ownership | CNS route | accepting human owner | **patient may choose/decline the relationship** | owner-of-last-resort |
| commit plan | treating_owner | **clinician commits clinical recommendation/order · operator commits resources · owning domain commits native state** | **patient/surrogate consents/accepts/declines where required** | escalate |
| order (Rx/lab/procedure) | AI/clinician | prescribing/ordering clinician (RBAC T4) + payer/eligibility where applicable | consent | escalate; high-risk→independent verify |
| authorize fulfillment | CNS candidate | **the action-specific authority** (prescriber/lab-orderer/patient-consent/payer/fulfillment-operator/protocol/emergency); **OFC records + coordinates the lifecycle, does not authorize** | consent | escalate |
| transfer care | provider/operator | accepting owner (audited) | **patient may direct/decline transfer** | coverage pool |
| close/supersede episode | provider | care domain | may dispute | stays open |
| waive/transfer obligation | resolver | **waiver authority varies** (patient/surrogate · clinical · legal/compliance · safety · payer/operator · policy); transfer valid only on successor acceptance | patient where consent-based | escalate |
| emergency act | AI/monitor/clinician | emergency authority (break-glass) | notified; retrospective | post-hoc reconcile + verify |
| reopen resolution | any actor / Accountability *(work_trigger)* | **Care authority commits reopen** | patient may trigger | escalate |
| communicate no-action | clinician (authors rationale) | **content authority = clinician; delivery = Messaging/staff/system** (separate) | patient receives + may dispute | escalate |
| accept residual uncertainty | resolver | named authority per risk | informed | cannot close |
| **patient accepts/declines/modifies plan** | patient/surrogate | **patient/surrogate** | owns it | shared-decision path |
| **patient grants/revokes consent · info-sharing** | patient/surrogate | **patient/surrogate** | owns it | — |
| **result release to patient** | clinician/policy | clinician/policy (sensitive-result rules) | receives | hold/counsel-first |
| **owner becomes unavailable** | system/monitor | coverage authority (no-orphan) | — | owner-of-last-resort |
| **cross-operator care acceptance** | Federation | accepting operator owner | consent to share | decline→no binding |

## §18 — Cross-loop seams — `seam_kind` × `interaction_kind` (the shared seam model is incomplete without this)
**★ Finding (broadens Knox — applies to the SIBLING captures too):** the five loop-coordination `seam_kind`s (`custody_handoff | work_trigger | control_request | evidence_publication | consequence_notification`) are sufficient for *loop coordination* but NOT for *capability exchange*. Add an orthogonal `interaction_kind ∈ {capability_invocation · context_projection · state_publication · candidate_return · execution_result · acknowledgement · command}`. A seam then carries both (e.g. `work_trigger × capability_invocation`; `evidence_publication × state_publication`). **Externally-committed lab/pharmacy state is normally `evidence_publication × state_publication` — NOT a consequence_notification** (it becomes consequence only past a harm/failure/duty threshold). **[Proven sibling amendment — do NOT apply yet]: Platform + Accountability must adopt the same `interaction_kind` axis; until then their "identical seam model" claim is incomplete.**
- **Care → Platform** `evidence_publication×state_publication` (learning) · **Platform → Care** `consequence_notification` carrying **exposure state** `{generated · retrieved · displayed · communicated · reviewed · adopted · committed · acted_upon · occurrence_created · outcome_linked}` — **review depth scales with exposure, not one binary reopen** (§22 Scenario 4).
- **Care → Accountability** `consequence_notification` · **Accountability → Care** `work_trigger` requesting clinical review/reopen — **Care authority decides + commits the reopen** (Accountability does not itself reopen a clinical resolution).
- **Care → Agent-Runtime** `control_request×capability_invocation` + `context_projection` · **Agent-Runtime → Care** `candidate_return`/`execution_result` (+ `consequence_notification` on failure) — returns candidates/results, **never Care truth**.
- **Care → Outcome-Intelligence** `evidence_publication`.
- **Care ↔ Federation/external capability** decomposed: ingestion `evidence_publication×state_publication` · invocation `work_trigger×capability_invocation` · custody `custody_handoff` (**only on accepted handoff**) · externally-committed state `evidence_publication×state_publication` · control `control_request×command` · consequence `consequence_notification`.

## §19 — Homology matrix (verdicts split; dims expanded; patient-authority = the differentiator)
Verdict ∈ SHARED-LAW · ANALOGOUS · CARE-SPECIFIC · OPEN.
| Dimension | Care | Platform | Accountability | Verdict |
|---|---|---|---|---|
| Subject | patient/relationship/problem/episode | capability/service estate | concern/duty/recipient | ANALOGOUS |
| **Principal / beneficiary** | **the patient (represented-principal, §9)** | the operator/tenant | affected party/recipient | **CARE-SPECIFIC** (patient-authority is the moat) |
| **Consent / represented authority** | **patient/surrogate owns consent + relationship** | operator config authority | reporter/party rights | **CARE-SPECIFIC** |
| Native sensing | sources/observations/signals | telemetry/evals/drift | reports/findings/triggers | ANALOGOUS |
| World model | partial time-stamped patient/context | desired vs observed | matter/evidence view | SHARED-LAW (partial/honest/time-stamped) · ANALOGOUS instances |
| Resolution/decision | REV-184 at gate (trust_horizon·clinical stance·frozen patient context) | change/release/runtime decisions | admission/duty/remedy decisions | SHARED-LAW (proposals-don't-commit·authority-required·lineage) · **ANALOGOUS specialized lifecycles** |
| **Planning / intent** | **plan/commitment composition (§5)** | change_set/operational_plan | response_case/obligation set | ANALOGOUS (Care's shared-decision is CARE-SPECIFIC) |
| Truth ownership | care domains/CM | service/config owners | underlying domains; overlay | SHARED-LAW (owning domain) · specialized owners |
| Commit owner | clinician/**patient**/domain by action-class | E&V/Release/Runtime | admission/remedy/closure | ANALOGOUS (patient-commit CARE-SPECIFIC) |
| Action carrier | orders/fulfillment/occurrences/obligations | plans/deployments/runtime actions | assignments/obligations/comms | ANALOGOUS |
| **Obligation** | care_obligation (clinical due-work) | promotion/rollout obligations | response_obligation | ANALOGOUS |
| Orchestrator | CNS (care-specialization; not Care-exclusive across OMNI) | native Platform controllers | Accountability coordinator+ledger | CARE-SPECIFIC |
| Evidence/closure proof | source-authority·adoption·occurrence·**4 proofs (§7)** | evals·release·telemetry·recovery | report/duty/closure proof | ANALOGOUS |
| **Outcome / learning** | **decision-quality≠outcome; effect-observation contract** | eval regression/telemetry | recurrence monitoring | SHARED-LAW (outcome≠correctness) · ANALOGOUS |
| Temporal topology | nested + **longitudinal patient/relationship continuity** | nested (change→service-lifetime) | nested (signal→recurrence) | ANALOGOUS nesting · **CARE-SPECIFIC longitudinal continuity** |
| Local terminal states | each object differs (§14) | each differs | each differs | ANALOGOUS (none "never closes") |
| **Ownership transfer** | **patient-directed relationship transfer + no-orphan** | version/operator handoff | duty transfer w/ successor | CARE-SPECIFIC (patient direction) |
| Reopen | new-evidence/recurrence/transfer/latent-outcome | regression/drift/recall | latent-harm/breached-remedy | SHARED-LAW append-only · ANALOGOUS lifecycles |
| Degraded mode | emergency-first/missing-context/reconcile (§13) | safe-halt/failover/rollback | out-of-band + temp custody | SHARED-LAW discipline · ANALOGOUS modes |
| **User-visible status** | **patient-visible state + next obligation** | operator rollout/health view | reporter status view | ANALOGOUS (patient-facing CARE-SPECIFIC) |
| Health | context/review/obligation/continuity/outcome (§12) | component/lane/outcome | unowned/overdue/remedy | ANALOGOUS |
| Cross-loop seams | `seam_kind × interaction_kind` (§18) | `seam_kind` (interaction_kind owed) | `seam_kind` (interaction_kind owed) | **SHARED loop-coordination grammar; capability-exchange interaction semantics = separate reconciliation (NOT yet identical)** |

**[INV] Moat framing (Palantir/SV lens):** the CARE-SPECIFIC rows — patient-as-represented-principal, consent/relationship authority, patient-directed transfer, decision≠outcome, longitudinal patient continuity, patient-visible status — are exactly what a generic ontology platform can *configure toward* but not supply as **native, normative healthcare operating law**. This is the C3.5 "governed relationship chains > object proliferation" + C3.7 firewall moat, made concrete in Care.

## §20 — Inheritance tables (load-bearing; internal-novelty ≠ external prior-art)
**Video → Care (load-bearing):**
| Concept | Carrier·id | Keeper law | Internal (OMNI-Care) | External prior-art | Dest |
|---|---|---|---|---|---|
| Clinical-evidence reservoir | E1·068 | retrieval finds candidates NOT authority | EXISTS-DEEPER | RAG/IR | §3 |
| Between-visit wedge | E2·133/134 | patient-AI bridge = provider-reviewable; availability≠authority | NEW-TO-CARE | consumer health AI | §3/§22 |
| Clinical-action ladder | E2·149 | education→…→commit→fulfillment→monitoring; anti-rubber-stamp | NEW-TO-CARE | clinical decision support | §6 |
| Value-from-action | E2·155 | value from feasible/authorized/capacity-aware/monitored action | NEW-TO-CARE | care ops | §12 |
| Implementation-evidence | E2·148 | 3rd evidence class (works in real workflow) | NEW-TO-CARE | implementation science | §7 |
| Anchor-relative context | E2·165 | Δ from anchor events, not flat pile | NEW-TO-CARE | temporal modeling | §3 |
| Context-as-mixture | E2·164 | freshness/authority/budget; length≠authority | SHARPENS | context engineering | §3 |
| PHI external/cited memory | E3·243 | authoritative facts never weight-baked | SHARPENS | RAG hygiene | §3 |
| memory_authority_state | E3·227 | candidate→adopted→superseded (adoption analog) | SHARPENS | agent memory | §3 |
| Decision-quality≠outcome | E5·265 | outcome doesn't rewrite decision-time reasonableness | SHARPENS | decision theory | §7 |
| Reject eventual-consistency | E5·262 | action-critical clinical knowledge = fresh from owner | SHARPENS | distributed systems | §3/§13 |
| Assume-every-component-fails | E5·264 | authority-failover + safe-halt | SHARPENS | SRE/robotics | §13 |

*(Wave-4/E5 = 0 net-new for care — field-validation + admissibility/degraded hardening only.)*

**C3.5 hospital:**
| Finding | authority | Care inherits | Open | Contract |
|---|---|---|---|---|
| relationship chains > objects (the 100x) | verdict | homology moat framing (§19) | market posture | — |
| `movement_state` · `administration` split | verdict | §6/§14 | admin split OPEN | D5/OFC |
| degraded/out-of-band (P16) | verdict | §13 | degraded authority | CNS/Build-OS |
| disclosure/legal-hold/ai_decision_log (P21) | verdict | §17 + Accountability | — | D7+CNS |
| grievance/patient-rights + ai_consent_scope (P22) | verdict | §9/§17 (→Accountability) | net-new | RBAC/D7 |
| external-capability 8-modes (P35) | verdict | §18 Care↔external | P35 owner | Federation |
| `continuity_binding` (P37) | verdict | §8 | — | Identity+Fed+D5 |

**C3.6 oncology trials:**
| Finding | authority | Care inherits | Open | Contract |
|---|---|---|---|---|
| six planes-of-record | verdict | §8 continuity / no-single-record | — | multi |
| `source_authority_map` (field-level) | verdict | §3/§15 field-authority | owner open-review | new index |
| `trial_protocol` (10 teeth incl. AE/SAE clocks) | verdict | §4 clocks / §5 plan | owner open; build unproven | new cross-domain contract |
| `knowledge_partition` (blinding≠RBAC) | verdict | §11 Polaris / §3 | RBAC-vs-new open | RBAC/Federation |
| `chain_of_identity`/`custody_chain` | verdict | §8 + §14 | generalize open | D5/D7 |
| arch vs build vs regulatory readiness | verdict | §0 build_maturity discipline | build/regulatory unproven | — |

**C3.7 trial access:**
| Finding | authority | Care inherits | Open | Contract |
|---|---|---|---|---|
| recommendation-integrity firewall | verdict (load-bearing) | §4 (INV) | owner (REV-184 family) | CNS/Network-Gov |
| honest-null terminal | verdict | §4 | owner | REV-184 family |
| navigation obligation · standing-match | verdict | §5/§6 | — | care contracts |
| economic-pressure-can't-bend-presentation | verdict | §4 firewall | enforcement spec | CNS |
| recognition≠action | verdict | §4 stances | → REV-184 | — |
| care-quality primitives route OUT | verdict | CM/Obs/CNS | homes TBD | care contracts |

## §21 — Contract-impact audit (name C5; do NOT edit contracts)
CNS [bounded-ext: positive-def + `clinical_required`] · CM [cite adoption; ext provenance-carry-forward; OPEN `tracked_clinical_object` `REV-167`] · Observation [OPEN ingestion-verification `REV-153`] · OFC [OPEN ratification `REV-163`; admin-workflow-state; `care_obligation` non-terminal-on-expiry §15] · D5 [ext `movement_state`, admin-occurrence, episode continuation; OPEN `care_commitment` `REV-141`] · D3 [cite planning-only] · D7 [ext disclosure/legal-hold/ai_decision_log; OPEN auto-materialize `REV-140`, chart-signing] · Intake [cite no-auto-adopt; OPEN `REV-151`] · Messaging [OPEN external-line e1; M2 fabric ABSENT] · Federation [OPEN cross-operator grants `REV-157`; continuity_binding] · Identity/RBAC [ext surrogate hierarchy; **patient-as-principal authority**; care_team_graph] · **D6/commerce** [research-vs-routine + coverage firewall; eligibility] · **Safety/Clinical Governance** [AE/SAE clocks; safety escalation; thresholds §12] · **Privacy/Compliance** [consent/purpose; knowledge_partition; population-learning basis §7] · **Settings/Catalog/protocol** [`trial_protocol`; care-catalog] · **Product/Outcome-Intel** [RWE REV-174; §7] · **P35/external-capability** [8-mode; owner open] · **credentialing/licensure** [ordering authority basis] · **BIZOPS/workforce** [queue/capacity §12] · **surfaces/projections** [own family; `patient_context_packet` `REV-154`].
- **[INV] No second decision primitive beside REV-184** (it already established the pattern+thin interface; open = contract realization). `clinical_decision_state` = a field/interface family, not a 2nd primitive.
- **[OPEN] The planning invariant (§5) is the `care_commitment` acceptance contract** regardless of physical shape.

## §22 — EXECUTED scenarios (walked, not just specified; patient-visible STATE + next obligation, not "closure")
**S0 · Alec base (`REV-142`, OPEN).** obj: wearable+message+timeline+symptoms→`source_event`(Messaging/device)→`observation`(+verification)→LI trend(non-auth)→CNS `candidate{dose_review}`→`context_packet`(labeled)→`provider_task`(review). authority: patient=source+consent; AI=candidate only; clinician=adopt+commit; CNS=route (no silent assign). seams: device `evidence_publication×state_publication`. patient-visible: "reviewed with your care team; next: dose check." gaps: `care_commitment`(REV-141), Observation verification(REV-153), packet(REV-154), surfaces stub. **verdict: NOT buildable e2e.**
**S1 · patient DECLINES the recommended plan.** resolution=act→plan(§5)→**patient/surrogate declines (§17)**→plan status `declined_by_patient` (append-only; not a clinician failure)→shared-decision path→monitor obligation + documented preference. authority: **patient commits the decline**; clinician records alternative + risk. patient-visible: "you chose not to proceed; we'll monitor; you can change this." PASS: patient authority is first-class; decline ≠ orphan; preference persists (§8).
**S2 · no-action + patient DISPUTES it.** REV-184 `no-action/not-indicated` (committed decision, rationale)→communicate (content=clinician, delivery=Messaging)→**patient dispute (§17 correction)**→`work_trigger` reopen→**Care authority commits reopen** (not Accountability); prior decision preserved, not rewritten (§7 decision≠outcome). PASS: reopen-without-erasing; dispute is first-class; attention-suppression never masqueraded as the no-action.
**S3 · two concurrent episodes → conflicting plans/obligations.** two `care_episode` (independent, may relate, §2/§14)→conflicting `care_obligation`s→CNS surfaces contradiction (§12 unresolved-contradiction, owner=CM)→**not auto-resolved**; routed to a resolving authority (treating_owner / co-management); `open_loop_owner` holds it. PASS: no silent merge; concurrent episodes stateful; conflict preserved + owned; no-orphan.
**S4 · Platform defect — exposure-DEPTH not binary (§18).** `generated`-never-exposed → no patient reopen, but Platform-defect + cohort-exposure assessment; `displayed/reviewed-but-rejected` → assess cognitive influence + decision lineage; `adopted/committed` → clinical review/reopen; `acted_upon/occurrence/outcome` → Care reopen + (party owed) Accountability admits. PASS: exposure state drives review DEPTH; no over/under-reaction.
**S5 · degraded system, urgent symptom.** primary system down (§13)→minimum offline care record + identity-confidence step-up→emergency-first action under break-glass→store-and-forward→post-recovery merge (conflict preserved, rejected-merge audited)→retrospective authorization + patient notification. PASS: care proceeds safely offline; unavailable monitoring ≠ false reassurance; reconcile field-specific; no data overwrite.
**S6 · later ADVERSE outcome reopens an earlier reasonable decision.** monitor stance→later deterioration (Outcome-Intel signal, §7)→reopen resolution (append-only)→**earlier decision NOT retroactively branded negligent** (decision-quality≠outcome); learning routes to Outcome-Intel/E&V, does not silently mutate policy. PASS: outcome≠correctness; frozen context intact; learning gated.
**Pass/fail invariants (all scenarios):** raw signal never silently clinical truth · missing response ≠ normality · no actionable signal orphaned · no clinical action without authority · operational completion ≠ patient receipt · no-action never disappears · **patient authority (consent/decline/relationship/dispute) is honored** · later evidence reopens without rewriting history · cross-operator visibility ≠ authority · degraded/failure stays explicit.

## Stop / authority
`analysis_nonbinding` (`GRD-036`); propose-only; pre-spine; **REVIEW-DRAFT (structural-correction + scenario-execution) — NOT closed.** Bounded Care source-base reconciliation (§0; not a whole-estate proof; build_maturity `unknown` where unverified). TWO primary loops + resolution gate + Planning/Commitment layer + Prove/Learn feedback path. **Patient/represented-principal is a first-class authority (§9/§17/§19) — the CARE-SPECIFIC moat.** OPEN: `care_commitment` (4 options + decision test), `administration` split, founding Alec loop (`REV-142`), deterministic-timer home, several `REV-*`. **★ Proven sibling amendments (NAMED, NOT applied):** (1) Platform + Accountability adopt the `interaction_kind` axis (§18) — their "identical seam model" is incomplete without it; (2) Platform→Care exposure-state consumption (§18/§22-S4); (3) Accountability→Care is a reconsideration `work_trigger`, Care commits the reopen. **Owed next:** Nick+Knox review of THIS pass → surgically apply the named sibling amendments → three-document consistency → then Agent Runtime. Not pushed.

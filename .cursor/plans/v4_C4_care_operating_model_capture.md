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
| Async-care crystallization | `EVRUN-2026-000004` §0.5 + §9.10 (`EVSRC-251/252`) | EVIDENCE (`accepted_required_v4_input`) | n/a | 3 gates (participant≠context≠authority); streaming mixed-initiative; authority-atomization; false-closure ladder; AI-influence lineage; multiplicity≠independence; M2 fabric | M2 `build=ABSENT` | §9a/§1b/§6 |
| care_commitment threshold + scoped ownership | thesis §7.3 / §7.5.1 | DEEP-HISTORICAL | n/a | accountability-attaches (not action); 5 scopes; 7 ownership dimensions | care_commitment shape OPEN (`REV-141`) | §1CP/§1a |
| action-type / command contract | thesis §C + EVRUN-000004 §9.10 | OPEN/EVIDENCE | none | action-type ≠ instance; where authority is checked; primary vs side-effects; idempotency/retry/partial-failure/compensation; resolution may produce 0 actions | not carried into contracts yet | §5b |
| consent / rights / capacity model | `D7_documents_consent_media_contract` + `DL-22` + thesis §7.5.4 + `audits/2026-04-30_privacy_communication_governance` | BINDING/DRAFT + HISTORICAL + AUDIT | partial (unknown) | consent families; visibility_grant scope/purpose/duration/recipient; surrogate_legal_basis; derived-grant invalidation | single-row composition OPEN | §5a |
| gate-timing model | `designs/day_0_scheduling_rule_matrix/00_index` §2.1.5 (`D0W3A-DEC-001`) | BINDING (domain draft) | none | booking_visibility/booking_hard_gate/pre_arrival/**pre_performance**/closeout — consent defaults pre-performance | — | §5a/§5b |
| pressure-test / validation method | C3.5 + C3.6 arcs (Coverage Manifest + corpus + deep-trace + disposition) | PRESSURE-VERDICT (method) | n/a | coverage-managed scenario library; deep-trace subset; disposition/gap matrix; permanent-sim obligation | — | §21a |
| Legacy System Map (care/CNS) | `system_map_three_layers…` §1G/§1K.5.A/§1W/§1H | DEEP-HISTORICAL (partly STALE) | n/a | §1G case-ownership + `clinical_required` + continuation; §1K.5.A assertions; §1W tracked-object | §1G decomposed→D5+CNS (`REV-161`, verify) | §5/§9/§20 |
| Polaris (alignment core) | `v4_C4_1_omni_polaris…` | ARCH-LOCK (naming/taxonomy) | n/a | computed projection `f(actor×relationship×authority×purpose×consent…)`, not hardcoded modes | — | §11 |
| Field cases | `omni_field_cases` FIELD-002/003/004 | EVIDENCE | n/a | provenance-preserving carry-forward; care-begins-outside-OMNI; streaming/false-closure | 002→`REV-167`; 003→Identity/imaging; 004→M2 absent | §8/§18/§22 |
| Hospital / trial / access | C3.5 `G4`+`G4_1` · C3.6 `G` · C3.7 `G` | PRESSURE-VERDICT | none | §20 tables | contract effects unapplied | §20 |
| Care video synthesis | EVRUN-000001/2/3/5 registries | EVIDENCE | n/a | §20 table (internal-novelty ≠ external prior-art) | wave-4 = 0 net-new | §20 |
| Surfaces/projections | `patient_context_packet` proj + `patient_app_home`/`provider_task_workspace`/`intake_review`/`support_inbox` | BINDING (map authority) | stub (verified stub) | packet = authority-labeled refs + trace_lineage + decay; surfaces render+invoke, never commit | `REV-154` OPEN | §12/§16/§22 |

## §1 — Purpose, boundary, authority
**Care Operating Model = OMNI's longitudinal care engine** (the controlling model above). It **governs the care-track contributions within a multi-track relationship fabric — it does NOT own the relationship, the commerce track, or the operational track.** Umbrella over domain-owned records, NOT a truth-owning domain, NOT one executive. **[INV] Ownership language (corrected):** canonical domain records/state stay with owning domains — **CM** owns clinical *meaning*, **Observation** *measured/reported facts*, **D3/D5/OFC/D6/D7** their native *planning/occurrence/execution/financial/evidentiary* state. "Truth" is not one flat thing.

## §1CP — Care Physics: what Care IS, when it begins, how it moves, what completes (the definition we kept re-deriving)
**[INV] Candidate definition (proposed, NOT ratified):** **Care is a governed, person-specific responsibility process within a recognized care relationship or care pathway, directed toward understanding, protecting, maintaining, improving, restoring, monitoring, or responsibly declining action on that person's health, function, comfort, appearance, or wellbeing.** A contribution becomes **accountable Care when an authorized human, organization, or policy accepts a scoped responsibility** to interpret · recommend · decide · perform · coordinate · monitor · communicate · or follow up — under applicable **patient rights, professional authority, evidence, policy, and operating constraints.**
**[INV] Care is NOT** an appointment · encounter · product · prescription · conversation · consent record · or purchase. Those are possible **contexts · carriers · commitments · actions · occurrences · evidence · or adjacent tracks** — never Care itself. (Appointment = a meeting in time between actors + resources for a bounded duration via a modality; it is a *carrier*, not Care.)
**[INV] Semantic ladder (stops "Care" collapsing into any one object):**
```
care-relevant contribution   (person-specific signal/claim/question/preference/observation/recommendation/external state that MAY affect care; no responsibility/authority implied yet)
  → governed care resolution (an authorized STANCE: act · no-action/not-indicated · monitor · defer · consult · decline · preserve-option · emergency-first · uncertain — REV-184)
  → care commitment          (a SCOPED RESPONSIBILITY accepted by a human/org/authoritative-policy: carry a plan · perform · monitor · follow-up · interpret · communicate · coordinate · resolve-ambiguity · manage-obligation)
  → care act                 (actual execution from the resolution + plan — one POSSIBLE manifestation, not required)
  → care occurrence          (PROOF work actually occurred — not merely ordered/transmitted/scheduled)
  → care outcome / effect evidence (expected/unexpected/none-observable/unavailable/delayed/patient-reported/adverse)
```
Entry = a care-relevant contribution enters the fabric; **accountability (not action) is the threshold** for a commitment (§1a). Movement = a governed transition that must pass admissibility (§5b). Completion = **scoped, per-horizon** (§7a), never one final closure of the patient's whole story.

## §1a — Mixed interaction & commitment routing (KEYSTONE — "is everything Care?" = NO; one interaction carries many tracks)
**[INV] The classification unit is NOT the conversation / appointment / product / provider / relationship / "loop run" — it is the individual contribution, proposed action, commitment, and state-transition.** A single visit can simultaneously carry clinical evidence · a clinical recommendation · care-support instruction · scheduling · commerce · service-operations · rights/grievance · information/education · research — each routed independently. **[INV] A `care_commitment` attaches when an authorized actor / organization / policy accepts a scoped care RESPONSIBILITY or consequential care stance (thesis §7.3) — NOT only at an authorized action.** A committed monitoring stance, consult opinion, accepted plan, follow-up duty, or a clinically-authorized **no-action** decision creates accountability with zero downstream physical/operational action (a governed resolution may validly end with zero actions, EVRUN-000004). *An authorized action is one possible manifestation, not the threshold.* Left of accountability = pre-accountable substrate (observations/signals/purchases). "Not every event is a care commitment."
- **[INV] Seven per-event ownership dimensions that NEVER collapse (thesis §7.5.1):** `surface_of_record · channel_of_record · operator_of_record · clinical_owner · commerce_owner · artifact_custodian · care_coordination_owner`. Corollary: **`operator_of_record ≠ clinical_owner ≠ commerce_owner ≠ artifact_custodian ≠ clinical_adopter`.**
- **[INV] Payload-noun ≠ domain (`D0THES-GRD-026`, binding guardrail):** "labs/Rx/commerce/messaging/skincare/Botox" are **use-cases threading the operating model**, never domains. The product noun does not tell you the architecture.
- **[INV] Same real-world referent, many records — without changing ownership or duplicating (NOT one mega-catalog):** the *same* moisturizer/supplement/Botox referent may be **linked across clinical, service, catalog, commerce, and fulfillment records** as its role changes, without any record's ownership changing and without duplicating the object merely because the role shifted. (payload-noun≠domain does NOT prove one universal catalog object.)

| The moisturizer, by context | care track (clinical_owner) | commerce track | consent needed |
|---|---|---|---|
| front-desk retail purchase | none (no clinical owner) | commerce/fulfillment | commercial authorization + privacy; **no clinical consent** |
| provider casually recommends it | care-adjacent recommendation (owner = provider); purchase stays commerce | commerce (separate) | none for the rec; commerce for the buy |
| post-laser aftercare **protocol item** | clinically-linked plan item (owner = provider) | + fulfillment | care-plan instruction; aftercare consent if applicable |
| applied **as part of a procedure** | clinical act + occurrence (owner = performing clinician) | — | procedure/treatment authority |
| patient buys independently | none (self-care) until adopted | commerce | none |

*Controlling laws:* a conversation/relationship may carry clinical + care-support + operational + commercial + rights + research + informational contributions simultaneously; classification is per-contribution; clinical/operational/commerce/custody/communication ownership coexist without merging; the relationship graph is a **projection over events, not a new truth store** (EVRUN-000004). This multi-track reality is the medspa/HRT wedge; its **native, enforced composition** (not the concept alone) is part of the differentiation — see §19.

## §1b — Care Constitutional Laws + law-scope crosswalk (anti-graveyard ledger — stop re-compressing the same laws)
Scope ∈ **U** universal-OMNI · **C** Care-specific · **A** analogous-sibling-discipline · **H** implementation/harness.
| Law | Scope | Source | Owning § | Contract representation |
|---|---|---|---|---|
| payload-noun ≠ domain | U | `GRD-026` | §1a | routing discipline |
| clinical_owner ≠ operational ≠ commerce ≠ custodian ≠ adopter | C | thesis §7.5.1 | §1a/§14 | 7 ownership dims |
| participant-admission ≠ context-admission ≠ authority/commit (3 gates) | U | EVRUN-000004 §0.5③ | §9a | G0/G1/G2 |
| actor ≠ principal ≠ agent ≠ model/capability ≠ source ≠ rail ≠ committer ≠ operator ≠ beneficiary | U | EVRUN-000004 §0.5③ | §9 | actor taxonomy |
| context stability before durable use (`stability_state × eligible_context_use`) | U | EVRUN-000004 §9.10 | §9a | context-admission |
| patient-source ≠ clinical truth (no auto-adopt) | C | Intake §7 / thesis §7.5.3 | §3 | adoption gate |
| observation ≠ clinical assertion (distinct planes) | C | Obs §4 / CM §8 | §3 | 3-gate separation |
| candidate ≠ commit | U | CNS §10 / REV-184 | §3/§4 | candidate/commit |
| world model partial + time-stamped (predicted_state = candidate, not truth) | U | REV-184 §0 | §4 | world_model |
| visibility ≠ authority | U | C3.5 / Federation | §8/§9 | grant vs authority |
| multiplicity ≠ evidentiary independence | U | EVRUN-000004 §0.5② | §9a | correlation classes |
| incentive/beneficiary lineage | U | EVRUN-000004 §0.5② | §9a | agent provenance |
| absence-of-signal ≠ normality | C | LI §10 | §3 | context state |
| no-action is a committed decision | C | REV-184 §0.2 | §4 | stance |
| decision-quality ≠ realized-outcome | U | REV-184 / video 265 | §7 | outcome≠correctness |
| execution ≠ patient receipt (false-closure ladder) | C | EVRUN-000004 §9.10 / C3.5 | §6 | false-closure |
| externally-committed state ≠ OMNI-adopted truth | U | GCE / EVRUN-000004 | §3/§18 | classified-before-count |
| untrusted content is data, not instruction | U | `GRD-039` | §3/§9a | hostile-by-default |
| care may begin/occur outside OMNI, reconcile later | C | FIELD-003 | §3/§13 | outside-reconciliation |
| non-fungible parallel authority planes (no single final decider) | C | EVRUN-000004 / REV-184 | §4 | committer-per-fact |
> Propagation: **U** laws SHOULD be inherited by Platform/Accountability (§19 crosswalk); **C** laws (clinical adoption, consent, patient authority, clinical non-action, treatment-outcome) do NOT propagate into Platform; **A** = analogous only. Do NOT copy clinical consent into Release Ops.

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
**[INV] World-model law (blunt, robotics-derived):** OMNI never contains the person or reality itself — only *versioned observations, claims, adopted meanings, commitments, occurrences, and projections of the person/world as last observed through particular sources.* **Last-captured state ≠ current reality; no-new-signal ≠ no-change; a fresh-LOOKING projection without source-freshness + `instrumentation_health` is unsafe.** Drives §5b's action-critical-freshness plane: **action-time safety preflight must re-read the mutable fact fresh** (e.g. current pregnancy status, not historical sex or stale intake) before a consequential act; declare which facts are action-critical, how fresh they must be, and what uncertainty is tolerated.
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
**[INV] There is NO single universal "final decision-maker" — care resolves across non-fungible, parallel authority planes (EVRUN-000004 / REV-184):** the **patient/surrogate** commits consent/acceptance/refusal; the **treating clinician** commits the clinical recommendation/plan; the **pharmacy** commits dispense/substitution/stock; the **payer** commits coverage; the **lab** commits results in its source system; the **operator** commits capacity/resources; **OMNI coordinates + proves** these planes but owns none of their truth. A resolution is **complete-enough-for-its-current-state when the required authoritative commitments + obligations are satisfied — NOT when every actor agrees** (discordance is preserved, not smoothed). The payer does not determine clinical indication; the pharmacy does not determine the plan; the patient does not clinically adopt a diagnosis by preferring it.

## §5 — Planning / Care-Plan / Commitment / Ownership (composition LAYER; architected, not a box)
**[INV] Minimum planning/commitment invariant (independent of whether `care_commitment` is object/interface/projection).** Every actionable Care plan MUST be able to express: **problem/need/question · goals + intended effects · accepted recommendation/stance · patient preference/consent/refusal · responsible clinical owner · organizational responsibility · plan items/interventions · dependencies/prerequisites · orders + obligations created · monitoring/follow-up plan · reassessment + failure triggers · alternatives considered · expected time horizon · version/supersession lineage · status visible to patient + team.** This is the contract; the physical object stays open.
**[OPEN] `care_commitment` (`REV-141`) — 4 options + decision criterion:** (a) distinct canonical object · (b) projection over resolution+owner+obligations+orders · (c) shared interface implemented per-domain · (d) retire. **Decision test (C5):** does accountability/visibility require a *single addressable record* (→ a/c), or does the §5 invariant compose cleanly from existing records (→ b)? The planning invariant is the acceptance contract either way. Do not carry "ownership closes care" as locked.

## §5a — Patient Authorization, Consent, Representation, Permission, Directives & Rights (a composition of TYPED subfamilies — NOT one "consent" enum)
**[INV] These are related but semantically + legally DISTINCT — do NOT coerce into one consent object/state-machine:** treatment **consent** · procedure-specific informed **consent** · **refusal** · advance **directive** (an instruction) · surrogate/DPOA/guardian **authority basis** · visibility/data-sharing **permission** · recording/ambient **permission** · AI-function **permission** · research **authorization** · communication **preference** · financial **transaction-authorization** · **acknowledgement/attestation** (which is *evidence*, not the consent itself). A DPOA is an authority basis; a directive is an instruction; a visibility grant is a permission; a purchase is a transaction authorization; a signature is evidence.
**[INV] Ownership split (no single system "owns consent"):** **D7** owns the durable **artifact**; **RBAC** enforces the **permission gate**; **clinical / legal / policy owners** determine **applicability + validity**; **Federation + §7.5.4 visibility_grant** own multi-operator scope. Typed · scoped · purpose-bound · time-bound · revocable · action-specific. **[INV] Authorization never silently PROPAGATES — any multi-operator/cross-purpose scope must be EXPLICIT** (not "does not aggregate"; it may be explicitly granted). General-care consent does not authorize Botox/rhinoplasty/recording/AI-analysis/training/family-disclosure/secondary-use; procedure consent does not authorize all AI/data uses.
**[INV] Patient autonomy is PRIMARY but legally BOUNDED** — capacity limits, emergency authority, public-health law, court orders, involuntary treatment, and mandated reporting are governed exceptions (not "patient is always the ultimate authority" without qualification).
- **Distinct families (share infrastructure, not interchangeable):** general-care/blanket-treat (DL-22 `consent_to_treat_blanket`) · **procedure-specific informed consent** (DL-22 `procedure_specific`, e.g. `medspa_botox_consent`) · medication/Rx · data-capture/intake · data-sharing/federation (`visibility_grant`) · **surrogate/guardian/DPOA** (DL-22 `surrogate_legal_basis`: parent-guardian / court-order / HC-POA / spouse-emergency / state-default) · advance-directive (DNR/DNI/POLST/proxy) · research participation (C3.7 `research_permission_stack`) · **recording / video / ambient sensing** (by sensor class + purpose) · **AI-function consent** (`ai_consent_scope`, P22 — e.g. AI *summarization* permitted while AI *recommendation* prohibited) · agent-participation + context-access · communication/marketing (D7 typed rows) · financial/subscription authorization · implied/emergency.
- **Composition fields (decompose across D7 artifact + RBAC gate + Federation grant + §7.5.4 visibility; single-row composition = `[OPEN]`):** represented_principal · grantor/decision-maker · **capacity state** · authority basis · **action/capability scope** · **data/artifact/sensor scope** · **purpose-of-use** · permitted actor/recipient (specific `operator_of_record` — no blanket "all OMNI operators") · relationship/episode/site context · effective time · expiry/review · conditions/exclusions · form + `signature_evidence_hash` · witness/attestation · **revocation** (`revoked_at`/`by`/`reason`, additive/immutable) · supersession/precedence · **derived-grant invalidation** (DL-22 inv 16: revoke → cancel dependent scheduled actions + alert) · emergency exception + post-hoc reconciliation.
- **[INV] Consent resolves AT the transition where it is required — not at booking (`D0W3A-DEC-001`):** consent defaults to `pre_performance_gate`, NOT `booking_hard_gate` (patient books Hydrafacial → signs at check-in → treatment proceeds; conflating consent into booking breaks medspa flow). **General consent does not satisfy a later specific gate; a later gate must not block an earlier harmless step.** Each gate fires at its correct workflow point.
- **[INV] Not every commerce/operational action requires clinical consent** (front-desk moisturizer = commercial authorization + privacy, not clinical consent). Consent follows the actual **action × actor × purpose × moment** — never the product noun (§1a).

## §5b — Care-transition admissibility (the "10 things must align" physics; per-action-type, NOT one god-gate)
Consent is ONE plane, not the center. **[INV] Each proposed care transition DECLARES its own required admissibility predicates, authorities, timing, proof, and checkpoint topology** — a computed composition (Polaris-style, C4.1), never a single `eligible=true/false` boolean and never one universal checklist every Botox/moisturizer/refill/message runs through.
**Non-fungible planes (the set is extensible per action-type; not every action needs every plane):**
| Plane | Question |
|---|---|
| subject/identity | right person? at what identity confidence? |
| care relationship + purpose | under what relationship + care purpose? |
| clinical appropriateness | indicated / contraindicated / uncertain / awaiting-evidence? |
| **patient authority** | capacity · consent · refusal · surrogate · directive · preference (§5a) |
| **professional authority** | correct role · license · scope · privilege · supervision · attestation? |
| operator + jurisdiction | which operator owns this? correct site/state/jurisdiction/policy? |
| current evidence (freshness) | allergies · meds · labs · pregnancy · observations **fresh enough for THIS action** (§4 action-critical freshness)? |
| protocol + policy | which versioned service/action/protocol requirements apply? |
| operational feasibility | staff · room · device · inventory · time · location · transport · monitoring? |
| technical/agent capability | tool/model/device allowed · available · healthy · within envelope? |
| financial/coverage | coverage/payment resolved — **kept SEPARATE from clinical indication** (firewall)? |
| proof + follow-up | what documentation · occurrence evidence · communication · follow-up must result? |
| failure/reassessment | what blocks · pauses · reroutes · escalates · triggers reconsideration? |
**[INV] Do NOT collapse to one boolean.** Preserve distinct states w/ distinct owners: `clinically-indicated-but-patient-declined · indicated+accepted-but-operationally-unavailable · clinically-appropriate-but-not-covered · unresolved-because-evidence-stale · legally-prohibited-in-jurisdiction · executable-only-under-supervision · technically-unavailable-but-manually-feasible · emergency-authorized-despite-missing-prerequisites`. Track per plane: satisfied · unsatisfied · unknown · not-applicable · authorized-exception · **who owns resolving it.**

### §5b.1 — Authorization FORMS + checkpoint TOPOLOGY + AI-requirement (Nick's hospital-physics: legal × efficiency × workflow-checkpoints)
- **[INV] `authorization_form`** (the "how is it approved" axis — form scales with consequence/reversibility/legal-requirement): `implied · blanket/general · verbal · verbal+attested · signed · ordered · ordered+signed · ordered+signed+witnessed · dual-clinician-cosign · independent-second-verify · ethics/committee`. (Refill = ordered; Botox = ordered+signed+procedure-consent; **ventilator withdrawal = ordered+signed+witnessed + surrogate/directive + often ethics/independent**; retail = transaction-authorization only.)
- **[INV] `checkpoint_topology`** (the "how many gates, in what order" axis): `single_gate · sequential_multi_checkpoint · dual_control (two providers) · supervision (NP/PA → attending cosign) · independent_verify (high-risk)`. **A transition may require ≥2 checkpoints**; and **a checkpoint may spawn a REQUIRED additional / more-specific / re-scoped / rerouted consent → which routes to a NEW approval** before proceeding (e.g. intra-op finding → new procedure not covered by original consent → stop → obtain specific consent / surrogate → new authorization → resume). Each checkpoint names: who · what form · what evidence · what it may block/reroute · fallback.
- **[INV] `ai_participation_requirement`** (the "does this loop need/allow AI, and what human approval" axis): per transition-type ∈ `ai_prohibited · ai_optional · ai_assist_required · human_approval_required · human_approval_pre_delegated_policy · autonomous_within_envelope`. **A loop may run WITHOUT direct human approval ONLY** where a pre-delegated deterministic policy permits it AND blast-radius is low AND reversible AND it has passed eval (`no-eval → no-autonomy`; REV-184 trust_horizon + blast-radius-keyed authority). Clinical-consequence transitions default to human approval / dual-control; the safety floor is invariant to efficiency pressure. **This axis is composed, not a global setting** — the same operator can have an autonomous-within-envelope reminder loop AND a dual-control controlled-substance loop simultaneously.

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

## §7a — Scoped Care completion contract (what "a completed loop" means — per horizon; NO single final closure)
**[INV] There is no single final closure of the patient's whole Care relationship — there are SCOPED completion contracts** (one per horizon, §2):
- **Resolution completion:** a recognized care question has an authorized stance + frozen context + rationale + uncertainty + reopen conditions — **may complete with ZERO actions.**
- **Plan/commitment completion:** accepted owners · patient acceptance/refusal where applicable · dependencies · obligations · monitoring · expected effect · reassessment triggers · version lineage.
- **Act/fulfillment completion:** required work occurred / failed / transferred / explicitly waived / otherwise authoritatively dispositioned + occurrence/delivery proof — **no false equation of order = transmit = dispense = receipt = use** (false-closure ladder, §6).
- **Communication completion:** owed explanation/instruction/result/status delivered — OR its failure remains an explicit open obligation.
- **Effect-observation completion:** effect observed / not-observed / not-observable / not-yet-due / unavailable-lost-to-follow-up / confounded / OR sufficient to reopen the resolution.
- **[INV] Local Care-cycle completion (complete-enough-for-its-current-horizon) requires ALL:** authorized stance exists · required admissibility planes (§5b) satisfied / inapplicable / validly-excepted · responsibilities have **accepted** owners · action/no-action/monitoring/consult/communication/follow-up performed or authoritatively dispositioned · proof + lineage retained · **patient/team can see current state + next obligation** · surviving obligations remain visibly open OR have accepted successor custody · effect-observation + reassessment conditions declared. **A known clinical OUTCOME is NOT required for local completion; longitudinal Care remains reopenable when the world changes.**

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
- **[INV] Full operational actor taxonomy (these are DISTINCT; do not conflate — EVRUN-000004 §0.5③):** `subject · principal · actor · agent · capability/model/tool · source · rail/channel · committer · agent-operator · beneficiary/incentive-holder`. (A web-search result is a `source` via a `capability`, not a care actor.)
- **[INV] Patient authority is a CONSTITUTIONAL CARE REQUIREMENT — not, by itself, the moat (corrected).** The patient/surrogate is the ultimate authority over *who treats them* + consent/continuity; the `treating_owner` holds the clinical-commit role — distinct. Consent/refusal/representation/relationship-choice are ethical + legal + *common* concepts a generic ontology CAN represent. **The candidate differentiator is the NATIVE, ENFORCED COMPOSITION** of patient-as-represented-principal × scoped/revocable consent × clinical adoption × non-fungible commit planes (§4) × longitudinal decision lineage × cross-operator continuity × care+commerce coexistence (§1a) × agent-influence lineage (§9a) × proof-of-execution/outcome — and **defensibility comes from encoding it coherently + building it + integrating it into real workflows + accumulating trusted relationships + learning without corrupting care authority**, not from a concept in a markdown file. (This is the C3.5 "governed relationship chains > object proliferation" + C3.7 firewall moat, made concrete — see §19.)
- **[ARCH] The thesis §7.2 six-role set** (`treating_owner`/`consulting`/`ordering`/`supervising`/`monitoring_owner`/`open_loop_owner`) is a strong candidate (DEEP-HISTORICAL), NOT locked `[INV]`; `open_loop_owner` may be a named human OR an accountable role OR a team-with-accepted-custodian+fallback.
- **[INV] Non-human actors** participate as **bounded candidate/evidence producers** (generate/compare/simulate/retrieve/record-rationale/flag-disagreement); may NOT hold the human/org care-accountability role, vote into consensus, or become clinical author.
- `care_team_graph` = patient-/purpose-/consent-scoped; surrogate: `surrogate_authority→visibility_grant→conversation_scope→rail→update-obligation`; **delegated ≠ inherited authority.**

## §9a — Multi-actor / multi-agent participation & influence (three non-collapsing gates; contributions ≠ votes)
**[INV] Three sequential, non-collapsing gates (EVRUN-000004 §0.5③ — none implies the next):**
- **G0 Participant admission** — *may this actor/agent enter, listen, receive context, contribute?* Inputs: identity+assurance · represented principal · delegation proof · purpose-of-use · required-party consent · visibility/retention · model+operator · **incentive disclosure** · revocation path. States: `proposed→disclosed→consent_pending→admitted→restricted→private_only→muted→revoked→removed→denied`. **admission ≠ authority.**
- **G1 Context admission** — *may this fragment shape reasoning, at what level?* `stability_state {partial→provisional→stable→corrected→withdrawn→superseded} × eligible_context_use {not_eligible→attention_only→temporary_reasoning→claim_candidate→durable_evidence}`. **Withdrawal invalidates derived guidance; speaker/claim binding before extraction.**
- **G2 Authority / commit** — *may this become truth/action?* `candidate ≠ commit → owning-domain commit` (unchanged canon). **[INV] Gate 2 may commit ANY consequential care transition — a resolution · no-action · monitoring stance · communication · plan · obligation · clinical assertion · OR an action — not only an `authorized_action`.**
- **[INV] Withdrawal ≠ rewriting history:** a withdrawn/superseded provisional contribution marks dependent candidates/guidance **stale or withdrawn** and may **trigger reassessment**, but it does **NOT** invalidate a real-world action already taken or rewrite the exposure/influence lineage — history is append-only (§7 decision-quality≠outcome; ai_decision_log below).
**[INV] Participation topology (unbounded, dynamic, never fully known):** patient ± private AI · provider ± preferred external AI · OMNI-native assistant · specialist AI · pharmacy AI · payer AI · lab/public-health · staff · regulator · **unknown-at-start**; join/leave/mute/revoke/re-enter. Modeled by `resolution_participation_binding` (narrow C5 candidate) + `resolution_participant_graph` (projection, NOT truth). Per-contribution semantics: agent/runtime identity · represented principal · agent-operator/sponsor/incentive · model/provider/version · harness/runtime-profile version · context+source versions · `stability_state` · capabilities/tools used · evidence refs · **correlation/independence class** · output · uncertainty · **exposure to human** · **human disposition {unseen/reviewed/accepted/modified/rejected}** · influence on plan/action · downstream commit links · later evaluation · revocation.
**[INV] Multiplicity ≠ evidentiary independence:** *multiplicity may raise ATTENTION; it never promotes SOURCE AUTHORITY.* Correlation classes: `independent · shared_primary_source · shared_model_family · derived_from_same_contribution · copied_or_rephrased · correlation_unknown`. Five agents on one model ≠ five opinions; ten payer bots = one payer principal.
**[INV] AI-influence lineage (`ai_decision_log`, 3 orthogonal axes — do NOT merge):** exposure/disposition · influence/use · later-evaluation. Invariants: ignored ≠ clinician error · accepted ≠ AI correct · matched-action ≠ AI causation · good-outcome ≠ sound reasoning.
**[INV] Incentive/beneficiary lineage:** every non-human contribution names whose agent · who operates · who pays · who benefits · objective (care/conversion/cost-containment/fulfillment/engagement); the Recommendation Integrity Firewall (§4) forbids incentive silently bending patient-facing clinical/research presentation. **Untrusted content (message/doc/ambient/retrieved) is DATA, not instruction** (`GRD-039`).
**Provider sidebar ("see what Claude says instead of ChatGPT"):** offered actions = summarize · extract · compare · secondary-review · test-alternative-interpretation · inspect-disagreement · invoke-approved-specialist. Outputs are **governed contributions, not votes.** Allowed only if the runtime/profile is approved · within patient+operator consent/policy · attributed · task-evaluated · lineage-preserving · **not presented as independent clinical authority.** Provider may combine/modify/reject-all/ask-a-human/request-more-evidence; the authorized Care owner commits. **Default product presents capabilities + differences — NOT a "which AI is right?" brand popularity contest** (thesis §12.8 rejected the free marketplace while preserving approved secondary-model review + disagreement detection + fallback).

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
**[INV] Obligation family de-overload — three non-interchangeable roles (the `care_obligation`-as-universal-task-table bug, C3.5 G4 / OFC §5):** **`care_obligation`** (OFC) = something clinically/care/compliance **owed/due** — admitted only by the 5-part test (due-window · owner/queue · lifecycle · overdue-consequence · conversion-path); **`service_work_order`** (OFC subtype + Inventory) = **non-clinical operational work** with SLA that may *gate* clinical flow (biomed ticket · meal tray · transport · turnover) — operational reroute ≠ clinical reopen; **`care_blocker_state`** (D5 `care_state_view` **projection**, NOT a source of truth) = derived "who/what blocks the next action" (`primary_blocker` + `responsible_party`). Commercial lifecycle → D6; engagement nudges → CNS/campaign; pure ops reminders → CNS/BIZOPS. (`care_obligation` = due/owed; `care_commitment` = accountable promise once responsibility accepted — §5.)

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
**★ Finding — a CANDIDATE cross-document correction, NOT a "proven" amendment (downgraded per Knox + GCE reconciliation):** the five loop-coordination `seam_kind`s (`custody_handoff | work_trigger | control_request | evidence_publication | consequence_notification`) are sufficient for *loop coordination* but appear insufficient for *capability exchange*. A candidate `interaction_kind ∈ {capability_invocation · context_projection · state_publication · candidate_return · execution_result · acknowledgement · command}` would disambiguate (e.g. an ordinary `capability_invocation` is not a request to change the receiver's control state; **externally-committed lab/pharmacy state is normally a state/evidence publication, NOT a `consequence_notification`** — it becomes consequence only past a harm/failure/duty threshold). **★ BUT this likely belongs in Governed Capability Exchange (§C) + the `capability_contract` layer, NOT re-declared in every loop's seam taxonomy** — canon already has *projection vs capability vs commit vs proof* (thesis §7.7: "Projections expose · Capabilities act · Domains commit · Audit proves") + the locked `capability_envelope`/`delegated_authority_envelope`/`capability_contract` family. **Status: candidate requiring GCE dedup + sibling reconciliation + scenario proof BEFORE any sibling edit.** Loop captures should CITE GCE for crossing mechanics and own only care-specific obligation/commitment semantics.
*(The `seam_kind × interaction_kind` combinations below are ILLUSTRATIVE candidates pending §C/GCE adjudication — NOT canonical seam syntax yet.)*
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
| **Principal / beneficiary** | **the patient (represented-principal, §9)** | the operator/tenant | affected party/recipient | **CARE-SPECIFIC** (differentiation = enforced *composition*, NOT patient-authority alone — see moat note) |
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

**[INV] Moat framing (Palantir/SV lens — corrected: composition + enforcement, not any single concept):** no single CARE-SPECIFIC row is a moat by itself (patient/consent/roles are common, representable concepts). The differentiation is the **native, enforced COMPOSITION** — patient-as-represented-principal × scoped/revocable consent (§5a) × multi-track ownership on one object (§1a) × clinical adoption × non-fungible commit planes (§4) × longitudinal continuity × agent-influence lineage (§9a) × proof — held as **native normative operating law across care+ops+commerce+agents+operators+proof**, which a generic ontology can *configure toward* but not *supply*. Defensibility = end-to-end enforcement + build + adoption + trusted relationships (C3.5 "relationship chains > objects" + C3.7 firewall), not the markdown.
**[INV] Law-scope crosswalk (§1b ledger):** propagate **U** laws to Platform/Accountability (partial-world-model honesty · candidate≠commit · participant/context/authority gate separation · actor-taxonomy distinctions · lineage · multiplicity≠independence · visibility≠authority · explicit-degradation · reopen-without-erasure); do NOT propagate **C** laws (clinical adoption · patient/surrogate consent · care relationships · procedure authority · patient continuity · clinical non-action · treatment-outcome semantics · patient-facing explanation/appeal); **A** laws stay analogous (effect-observation-contract ~ runtime-health · plan ~ change_set · care_obligation ~ response_obligation · degraded-care ~ runtime-failover · participant-admission ~ tool/runtime-authorization).

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

## §21a — Care Model Validation Contract (the ratification gate — reuses the C3.5/6/7 method + the ingested case-library technique; NOT another 6 prose scenarios)
**[INV] A handful of golden traces is NOT maturity proof.** Ratification of the Care Operating Model requires a **coverage-managed validation corpus** built like the hospital/oncology arcs (Coverage-Manifest-gated scenario library + deep traces + disposition), promoted per C3.5's standing simulation/eval/regression obligation — **not thousands of rows pasted into this doc, and not one Alec case.**
- **Scenario families (must each be covered):** mixed clinical/commerce/operational conversation · consent + refusal · surrogate/capacity/advance-directive conflict · patient-generated evidence · unstable/streaming context · missing/conflicting owner · concurrent plans · multi-agent disagreement · model/source correlation · payer/pharmacy/provider incentive conflict · fulfillment exception · no-action/monitoring · delayed/unobservable outcome · degraded/offline · cross-operator continuity · safety escalation · grievance/rights · research-vs-care firewall · commerce unrelated/adjacent/embedded-in-care · agent revocation / hidden external AI.
- **Variation axes:** setting · actor/principal topology · consent basis · risk tier · care scope · context freshness/stability · ownership state · agent count/model-correlation · operator boundaries · fulfillment path · temporal horizon · degraded posture · economic incentive · patient capacity · outcome.
- **Invariant assertions (every trace checks):** the §22 pass/fail set + the §1b constitutional laws.
- **[INV] Ratification scale target (a GATE, not a now-deliverable; do not vanity-count):** ~**25–50 deeply-reviewed golden traces** → **100+ curated seed cases** → **1,000+ generated/adversarial variants** → eventual **10,000+ continuous regression traces** as the platform matures. **Coverage + proof, not row count** — 1,000 near-identical generated cases prove nothing. The gate ALSO requires: coverage across every declared family+axis · reviewed invariant oracles · high-risk **red-team** cases · **property/metamorphic** checks · **mutation tests that prove the suite catches a broken law** · deep human-reviewed traces · explicit deferred-gap manifest.
- **[ARCH] Artifact shape — reuse the proven C3.5/C3.6 pressure-test structure (NOT a file-per-case, NOT thousands of rows inlined here):** **D — Care Scenario Corpus** (one governed dataset: Coverage Manifest + `CARECASE-NNN` + variation-axis tags + source provenance + expected-invariant outcomes) · **E — Care Deep-Trace Matrix** (the 25–50 load-bearing cases fully walked: objects · owners · gates · states · seams · proof · patient-visible state · pass/fail) · **F — Care Disposition/Gap Matrix** (each finding: covered / partial / contradiction / missing-semantics / contract-extension / scenario-only / open-review / rejected). Lives in the pressure-test/eval system (C3.5 harness lineage), referenced here.
- **[INV] Ratification posture:** spine drafting may proceed on **candidate** Care laws; this capture stays **REVIEW-DRAFT**; **C5 contract promotion waits on the coverage gate** (the 1,000+ variant minimum + curated/deep/red-team/property/mutation criteria + a coverage manifest with no silent gaps). Do NOT build the corpus in this pass.

## §22 — Worked architectural trace SPECIFICATIONS (walked on paper; NOT executed against code / a formal state model / a test harness; patient-visible STATE + next obligation, not "closure")
**S0 · Alec base (`REV-142`, OPEN).** obj: wearable+message+timeline+symptoms→`source_event`(Messaging/device)→`observation`(+verification)→LI trend(non-auth)→CNS `candidate{dose_review}`→`context_packet`(labeled)→`provider_task`(review). authority: patient=source+consent; AI=candidate only; clinician=adopt+commit; CNS=route (no silent assign). seams: device `evidence_publication×state_publication`. patient-visible: "reviewed with your care team; next: dose check." gaps: `care_commitment`(REV-141), Observation verification(REV-153), packet(REV-154), surfaces stub. **verdict: NOT buildable e2e.**
**S1 · patient DECLINES the recommended plan.** resolution=act→plan(§5)→**patient/surrogate declines (§17)**→plan status `declined_by_patient` (append-only; not a clinician failure)→shared-decision path→monitor obligation + documented preference. authority: **patient commits the decline**; clinician records alternative + risk. patient-visible: "you chose not to proceed; we'll monitor; you can change this." PASS: patient authority is first-class; decline ≠ orphan; preference persists (§8).
**S2 · no-action + patient DISPUTES it.** REV-184 `no-action/not-indicated` (committed decision, rationale)→communicate (content=clinician, delivery=Messaging)→**patient dispute (§17 correction)**→`work_trigger` reopen→**Care authority commits reopen** (not Accountability); prior decision preserved, not rewritten (§7 decision≠outcome). PASS: reopen-without-erasing; dispute is first-class; attention-suppression never masqueraded as the no-action.
**S3 · two concurrent episodes → conflicting plans/obligations.** two `care_episode` (independent, may relate, §2/§14)→conflicting `care_obligation`s→CNS surfaces contradiction (§12 unresolved-contradiction, owner=CM)→**not auto-resolved**; routed to a resolving authority (treating_owner / co-management); `open_loop_owner` holds it. PASS: no silent merge; concurrent episodes stateful; conflict preserved + owned; no-orphan.
**S4 · Platform defect — exposure-DEPTH not binary (§18).** `generated`-never-exposed → no patient reopen, but Platform-defect + cohort-exposure assessment; `displayed/reviewed-but-rejected` → assess cognitive influence + decision lineage; `adopted/committed` → clinical review/reopen; `acted_upon/occurrence/outcome` → Care reopen + (party owed) Accountability admits. PASS: exposure state drives review DEPTH; no over/under-reaction.
**S5 · degraded system, urgent symptom.** primary system down (§13)→minimum offline care record + identity-confidence step-up→emergency-first action under break-glass→store-and-forward→post-recovery merge (conflict preserved, rejected-merge audited)→retrospective authorization + patient notification. PASS: care proceeds safely offline; unavailable monitoring ≠ false reassurance; reconcile field-specific; no data overwrite.
**S6 · later ADVERSE outcome reopens an earlier reasonable decision.** monitor stance→later deterioration (Outcome-Intel signal, §7)→reopen resolution (append-only)→**earlier decision NOT retroactively branded negligent** (decision-quality≠outcome); learning routes to Outcome-Intel/E&V, does not silently mutate policy. PASS: outcome≠correctness; frozen context intact; learning gated.
**S7 · MIXED HRT/medspa conversation (MANDATORY keystone — proves "not everything is Care" + multi-track routing §1a).** One 20-min visit: (a) "estradiol still low; adjust the plan" = clinical evidence→resolution→plan (`clinical_owner`=provider) · (b) "use this moisturizer after your laser" = care-adjacent recommendation; **buying it = commerce/OFC** (`commerce_owner`; no clinical consent) · (c) "want Botox?" = planning/scheduling → procedure discussion = clinical recommendation → **`medspa_botox_consent` at performance, not booking** (§5a) · (d) schedules a rhinoplasty **consult** = D3 planning/referral (operational) — *deciding* rhinoplasty is indicated = later clinical resolution · (e) OTC lip-numbing cream = pure commerce **unless** instructed pre-procedure (care-plan instruction) · (f) GLP-1 refill = clinical + fulfillment. **Each contribution routed independently across the 7 ownership dimensions; the visit is NOT labeled "clinical" or "nonclinical."** authority: provider commits clinical; patient consents per-procedure; front-desk commits retail; OFC records fulfillment. PASS: no whole-conversation classification; same moisturizer object in 2 tracks; Botox consent fires at performance; commerce needs no clinical consent; payload-noun≠domain held.
**S8 · general-care consent but procedure-specific REFUSAL (+ verbal consent w/ attestation).** blanket `consent_to_treat` present → specific procedure gate at performance → **patient refuses the procedure** (general ≠ specific, §5a) → plan `declined_by_patient`; separately, a verbal consent captured with `signature_method=verbal` + witness attestation + `signature_evidence_hash`. PASS: general consent does not satisfy the specific gate; refusal is first-class; verbal basis recorded with evidence.
**S9 · surrogate/DPOA conflict + mid-care revocation.** DPOA acts for an incapacitated patient (`surrogate_legal_basis=healthcare_power_of_attorney`) → advance-directive conflicts with the surrogate's request → governed conflict (directive precedence) → POA later revoked mid-admission → **derived-grant invalidation** cancels dependent scheduled actions + alerts provider (DL-22 inv 16). PASS: capacity/basis explicit; directive-vs-surrogate resolved by authority not overwrite; revocation cascades.
**S10 · AI summarization permitted, AI recommendation prohibited (`ai_consent_scope`).** patient consents to AI *summarization* but not AI *recommendation* → an agent may assemble/summarize context but its recommendation output is gated out of the care surface (G0/G1 admit context-use ≤ summarize; G2 blocks recommendation-as-candidate for this patient). PASS: AI-function consent is action-scoped; a technical capability the harness *can* invoke is not authorized by that fact (§3 AI boundary).
**S11 · four-agent provider sidebar (multiplicity ≠ independence).** provider opens sidebar: OMNI-native + "ask Claude" + "ask ChatGPT" + a specialist agent → 3 share one model family / prompt lineage → `correlation_class=shared_model_family` ⇒ **NOT 4 independent opinions** → surfaced as attention, disagreement flagged, incentive/operator/model lineage attached → provider selects one, modifies, rejects the rest → **provider commits** the clinical result. PASS: contributions not votes; correlation surfaced; no agent becomes clinical authority; "which AI is right?" is not the product (§9a).
**S12 · care/commerce coexistence + care-begins-outside-OMNI.** (i) clinical recommendation + **pure retail fulfillment** on one order (two tracks, one object) · (ii) a **pure-retail interaction with NO clinical track** (front-desk supplement sale) routes entirely to commerce · (iii) FIELD-003 Kyle: care assembled **outside OMNI** (UC X-ray → friend consult → PubMed) → later reconciled (Identity match, imaging ingestion, source-authority) → governed only when it crosses in. PASS: no clinical track manufactured for retail; outside-care reconciles without back-dating authority; wrong-patient image = identity/source-authority failure caught.

**Pass/fail invariants (all scenarios):** raw signal never silently clinical truth · missing response ≠ normality · no actionable signal orphaned · no clinical action without authority · operational completion ≠ patient receipt · no-action never disappears · **patient authority (consent/decline/relationship/dispute) is honored** · **no whole-interaction clinical/nonclinical label; contributions routed independently** · **multiplicity never promotes source authority** · **consent is action-scoped + fires at the right transition** · later evidence reopens without rewriting history · cross-operator visibility ≠ authority · degraded/failure stays explicit.

## Stop / authority
`analysis_nonbinding` (`GRD-036`); propose-only; pre-spine; **REVIEW-DRAFT (structural-correction + scenario-execution) — NOT closed.** Bounded Care source-base reconciliation (§0; not a whole-estate proof; build_maturity `unknown` where unverified). TWO primary loops + resolution gate + Planning/Commitment layer + Prove/Learn feedback path. **★ Recovered flattened scar tissue this pass (anti-graveyard, from reopened carriers — not summaries):** §1a **multi-track routing** ("is everything Care?" = NO; 7 per-event ownership dimensions; payload-noun≠domain `GRD-026`; moisturizer table) · §1b **Care Constitutional Laws ledger + scope crosswalk** · §5a **consent depth** (families + composition + pre-performance timing) · §4 **non-fungible parallel authority planes** (no single final decider) · §9 **full actor taxonomy** + patient-authority reworded (constitutional requirement + COMPOSITION, not the moat alone) · §9a **three gates + multi-agent participation + multiplicity≠independence + incentive lineage + provider sidebar** · §14 **obligation de-overload** (care_obligation vs service_work_order vs care_blocker_state) · §21a **validation contract** (ratification-scale gate) · §22 **mixed HRT/medspa keystone** + consent/surrogate/AI-scope/4-agent/commerce scenarios.
**OPEN:** `care_commitment` (4 options + decision test), `administration` split, founding Alec loop (`REV-142`), deterministic-timer home, single-row consent composition, several `REV-*`; ratification awaits the §21a corpus.
**★ Candidate cross-document corrections (NOT "proven", NOT applied — synchronize via ONE consistency pass after review):** (1) `interaction_kind` **likely belongs in Governed Capability Exchange / §C + `capability_contract`**, not every loop's seam taxonomy (§18) — needs GCE dedup first; (2) Platform→Care exposure-depth consumption (§22-S4); (3) Accountability→Care = reconsideration `work_trigger`, **Care** commits reopen. **Do NOT propagate C-scope Care laws (consent/adoption) into Platform; DO propagate U-scope laws (§1b/§19).**
**Owed next:** Nick+Knox review of THIS pass → GCE-reconcile the seam candidate → build/route the §21a validation corpus → synchronize sibling amendments in one consistency pass → then Agent Runtime. Not pushed.

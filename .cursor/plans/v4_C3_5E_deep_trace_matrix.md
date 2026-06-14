# v4 — C3.5E: Deep-Trace Matrix (execution/action-loop inner test)

Document type: `plan_or_roadmap` (C3.5 arc artifact E) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G3_pending_review` 2026-06-13 (C3.5 pressure-test agent; Gate 3 / Trace + Gap). Prior `shell_pending_population`.
Gate: **G3 (Trace + Gap).** The INNER test — runs only after the reality field (A–C) + library (D) passed. The action loop is one inner mechanism, not the whole arc.

> **No fluff (Nick's G3 warning):** each trace's job is to locate **where OMNI BENDS or BREAKS under hospital physics**, not to re-narrate the loop. The honest through-line surfaced below: **OMNI's authority/ownership PHYSICS survives hospital gravity remarkably well** (order≠admin≠result, candidate≠commit, 4-way authority composition, projection≠truth, AI-proposes/humans-commit are exactly the right separations) — **what BREAKS is the instantiated inpatient SUBSTRATE** (the objects/lifecycles are absent or DRAFT: no built inpatient order/admin/encounter/ADT/MAR/legal-record-materialization; OFC + several contracts are `draft_for_ratification`; `D0THES-CNF-011` scheduling is parked). The split between *physics-holds* and *objects-missing* is the load-bearing G3 finding and feeds F.

## Trace key
**Loop:** `source-event → evidence/artifact → observation → clinical assertion → candidate → resolver/policy → authority gate → action envelope → owning-domain commit → documentation/proof → obligation/follow-up → learning/eval`.
**9 questions** (verdict symbols: `✓` OMNI handles by doctrine+object · `~` BENDS = doctrine holds but object/lifecycle thin/DRAFT/absent · `✗` BREAKS = no substrate / would require new primitive): **Q1** what action is owed · **Q2** who owns it · **Q3** the authority gate · **Q4** propose safely · **Q5** route it · **Q6** commit/write-back · **Q7** prove it · **Q8** track what remains owed · **Q9** learn/eval without silent policy mutation.
**Reading the verdicts:** Q1–Q5 + Q7–Q9 are mostly `✓`/`~` (OMNI's doctrine is built for this); the recurring failure is **Q6 commit/write-back** — the inpatient owning-domain object frequently does not exist yet. That is *buildable*, not *contradicted* — the distinction F turns into market-posture vs architecture-obligation.

## Deep traces (≥25 → 28 cases, HCASE-061…088)

**HCASE-061 — Order→verify→administer→result (the canonical chain).** `omni:` OFC/Clinical-Memory/Observation/RBAC/CNS/D7.
- loop: med order (source) → pharmacist verify (gate) → BCMA administer (act/event) → response lab (observation) → review (assertion/adoption).
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7~ Q8✓ Q9✓.
- BENDS: the doctrine is *exactly* OMNI's (OFC `fulfillment_order` lifecycle + distinct administration event + Observation value + CM adoption — the contracts already separate order/verify/administer/result and forbid order→admin collapse). BREAKS: OFC is `draft_for_ratification` and **no built inpatient med-admin/BCMA event object** exists; `pharmacist-verify` is not a modeled actor-gate yet. → physics-holds / object-missing (build-now if inpatient).

**HCASE-062 — Transport / patient-movement custody.** `omni:` D5/OFC/CNS/RBAC.
- loop: move order → custody handoff (transporter) → in-transit (orders persist) → arrival/return → custody resolve.
- 9Q: Q1✓ Q2~ Q3~ Q4✓ Q5✓ Q6✗ Q7~ Q8✓ Q9✓.
- BENDS: CNS responsible-owner + obligation model fits "who owns the patient mid-move." BREAKS: there is **no `custody`/in-transit encounter state** primitive; D5 has no movement-state. → needs design-now (custody-state on the encounter); not a contradiction.

**HCASE-063 — Death + record closure.** `omni:` D5/D7/Clinical-Memory/Federation(OPO)/CNS.
- loop: pronouncement (authored event) → record finalize → OPO referral (obligation) → disposition.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5~ Q6~ Q7✓ Q8~ Q9✓.
- BENDS: D7 amend-not-overwrite + CM authority + obligation model all hold; pronouncement is just a high-authority authored event. BREAKS: no `record_closure`/finalization lifecycle; OPO referral is an un-modeled cross-org obligation. → design-now (record-closure state) + defer-C5 (deep OPO workflow).

**HCASE-064 — Interpreter at consent.** `omni:` D7(consent)/Identity/RBAC/Messaging.
- loop: procedure proposed → interpreter-mediated consent → comprehension recorded → consent valid.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: D7 `consent_artifact` + signature_envelope hold; this is an attribute (interpreter + comprehension evidence) on consent. BREAKS: nothing structural — `consent` needs an interpreter/comprehension field. → design-now (small consent-contract extension).

**HCASE-065 — ADT transfer authority change (floor→ICU).** `omni:` D5/OFC/RBAC/CNS/Federation.
- loop: transfer event → new attending/LOC → orders re-evaluated → encounter continues.
- 9Q: Q1✓ Q2~ Q3~ Q4✓ Q5✓ Q6✗ Q7~ Q8~ Q9✓.
- BENDS: per-event ownership + authority-re-establishment-at-transition is *literally OMNI's federation/transition doctrine*. BREAKS: **no ADT/level-of-care/bed substrate**; D5 encounter is not movement-stateful; "orders re-evaluate on transfer" has no engine. → needs new primitive/contract-expansion (inpatient encounter+ADT).

**HCASE-066 — CPOE order-set fan-out + co-sign.** `omni:` OFC/RBAC/CNS/Settings.
- loop: order-set applied → N orders authored → co-sign gate → fire/hold per policy.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: RBAC 4-tier attestation/co-sign + Settings policy-timing + OFC per-order lifecycle map cleanly. BREAKS: **order-set as a Settings catalog object + inpatient `fulfillment_order` instances not built**; co-sign-hold-vs-fire policy un-modeled. → design-now/build-now (order-set + co-sign timing).

**HCASE-067 — Critical lab/imaging closed-loop.** `omni:` Observation/OFC/Messaging/CNS/Clinical-Memory.
- loop: critical result → notify obligation → provider ack → close.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: CNS notify-to-ack obligation + Observation critical-flag + Messaging transport all exist in doctrine (and §10.2 safety-orchestration is a precedent). BREAKS: critical-result closed-loop-to-acknowledgement is not a built obligation type; threshold-as-policy needs Settings. → design-now (strong fit; low contradiction).

**HCASE-068 — Closed-loop med-admin + override.** `omni:` OFC/Observation/RBAC/BIZOPS(audit).
- loop: scheduled admin → BCMA five-rights → mismatch blocks / override bounded → eMAR.
- 9Q: Q1✓ Q2✓ Q3~ Q4✓ Q5✓ Q6✗ Q7~ Q8✓ Q9✓.
- BENDS: candidate≠commit + authority-at-emission + audit doctrine hold. BREAKS: **no BCMA/five-rights gate, no eMAR, no ADC override object** — the entire closed-loop med-admin substrate is absent. → build-now if inpatient; the doctrine is right, the machinery is zero.

**HCASE-069 — Downtime / degraded-mode + recovery.** `omni:` Build-OS/OFC/Clinical-Memory/RBAC/CNS.
- loop: outage → out-of-band care → recovery → back-entry reconcile (author+timestamp+authority).
- 9Q: Q1~ Q2~ Q3~ Q4~ Q5✗ Q6✗ Q7~ Q8~ Q9~.
- BENDS: append-only + provenance + reconciliation discipline are philosophically present. BREAKS: **no designed degraded-mode** anywhere (online-only assumption); recovery-reconciliation engine absent; this is a systemic gap, not a domain object. → design-now (degraded-mode is a first-class operating state OMNI lacks).

**HCASE-070 — Transfusion double-verify + reaction.** `omni:` OFC/Observation/Clinical-Memory/RBAC/CNS.
- loop: crossmatch → product issue → 2-RN independent verify (gate) → transfuse (event) → reaction → workup obligation.
- 9Q: Q1✓ Q2✓ Q3~ Q4✓ Q5✓ Q6✗ Q7~ Q8✓ Q9✓.
- BENDS: independent-double-check maps to RBAC dual-approval (T3); reaction→obligation maps to OFC. BREAKS: no product↔patient binding object, no transfusion administration event, no blood-product custody. → build-now if inpatient; physics (dual-verify-not-AI-satisfiable) holds.

**HCASE-071 — Perioperative pre-op→OR→PACU→floor.** `omni:` D5/OFC/D7/RBAC/CNS/Inventory.
- loop: 5 stage-states, 4 authority handoffs, distinct order-sets + counts + implant + consent per stage.
- 9Q: Q1✓ Q2~ Q3~ Q4✓ Q5✓ Q6✗ Q7~ Q8~ Q9✓.
- BENDS: handoff = responsible-owner transfer (CNS); consent/count are D7 records; per-event ownership holds. BREAKS: **no multi-stage perioperative encounter-state machine**; D5 has no OR/PACU stage model; surgical count/time-out objects absent. → needs new primitive (perioperative encounter flow) — densest object gap.

**HCASE-072 — Implant UDI + recall traceability.** `omni:` OFC/D5/Inventory/Clinical-Memory/Federation.
- loop: implant placed → UDI captured (patient↔device↔occurrence) → later recall → identify patients.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8~ Q9✓.
- BENDS: D7/D5 + inventory + durable-binding doctrine fit; this is a traceability binding. BREAKS: no UDI/implant-registry object; "recall query → affected patients" has no index. → design-now (UDI binding) + build-later (recall query); strong fit.

**HCASE-073 — OB fetal monitoring, two patients.** `omni:` Identity/D5/Observation/OFC/RBAC/CNS.
- loop: maternal+fetal monitoring → titration → emergent C-section → neonate identity created → dual orders.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: Identity handles distinct persons; the dyad + identity-at-birth is an identity-creation edge OMNI's model can express. BREAKS: no "encounter with two linked patients" + fetal-as-pre-identity → neonate-identity transition object. → design-now (dyad identity-creation); doctrine holds.

**HCASE-074 — NICU weight-based dosing recompute.** `omni:` OFC/Observation/Clinical-Memory/Pharmacy/Identity/RBAC.
- loop: current weight → mg/kg dose computed at order → verify → micro-dose admin.
- 9Q: Q1✓ Q2✓ Q3✓ Q4~ Q5✓ Q6✗ Q7✓ Q8✓ Q9~.
- BENDS: Observation trajectory (weight) + CM + identity-disambiguation (multiples) fit. BREAKS: dose-as-function-of-live-weight has no computation/verification object; no pharmacy-verify + neonatal BCMA. → build-now if NICU; safety-critical recompute is unmodeled.

**HCASE-075 — Dialysis standing prescription + recurring runs.** `omni:` OFC/Observation/Clinical-Memory/CNS.
- loop: standing prescription → recurring run-events → per-run admin + monthly lab cadence.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8~ Q9✓.
- BENDS: OFC `care_obligation` recurrence + standing-order concept is a near-exact fit (recurrence-lazy doctrine exists). BREAKS: standing-order-generates-runs engine + per-run event object not built. → design-now (strong fit via OFC recurrence).

**HCASE-076 — Chemo regimen, lab-gated + double-verify.** `omni:` OFC/Observation/Clinical-Memory/Pharmacy/RBAC/CNS.
- loop: regimen protocol → cycle lab-gate → BSA dose → double-verify → infuse.
- 9Q: Q1✓ Q2✓ Q3~ Q4✓ Q5✓ Q6✗ Q7✓ Q8✓ Q9✓.
- BENDS: protocol-as-structured-order + hard-gate + dual-verify map to OFC + RBAC + Settings gate-timing. BREAKS: no regimen/protocol object, no BSA-dose computation, no cycle-gate engine. → build-now if oncology; new primitive (regimen/protocol order).

**HCASE-077 — TPN high-alert compounding.** `omni:` OFC/Pharmacy/Clinical-Memory/Observation/RBAC.
- loop: TPN order → pharmacist verify + incompatibility CDS → compound (event) → administer.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6✗ Q7✓ Q8✓ Q9✓.
- BENDS: order→verify→compound→administer is the OFC chain again; CDS attributable. BREAKS: no compounding event object; no pharmacy-verify gate. → build-now if inpatient pharmacy.

**HCASE-078 — Psych restraint time-bound order.** `omni:` OFC/RBAC/Observation/CNS.
- loop: restraint order (hard expiry) → continuous monitor (obligation) → in-person re-eval → renew-or-release.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8~ Q9✓.
- BENDS: auto-expiry + renewal-requires-human-face-to-face is *exactly* candidate≠commit + authority-gate + AI-never-renews doctrine (a strong OMNI showcase). BREAKS: no order-with-hard-expiry + mandatory-reeval-gate object; monitoring-obligation not built. → design-now (high-value, doctrine-perfect, object-absent).

**HCASE-079 — Discharge summary + reconciliation + follow-up.** `omni:` OFC/D7/Clinical-Memory/Messaging/Federation/CNS.
- loop: discharge → summary (legal record, timeline) → med reconciliation delta → follow-up + transmit obligations.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: D7 materialization + OFC obligation + Federation cross-operator transmit + reconciliation all have doctrine homes (SC-D5-D7 seam, OFC, Federation). BREAKS: discharge-summary materialization + reconciliation-delta engine + transmit obligation not built. → design-now/build-now (transition is the highest-value wedge-adjacent inpatient capability).

**HCASE-080 — Cross-operator referral with scoped grant.** `omni:` Federation/Identity/D7/Clinical-Memory/Messaging/CNS.
- loop: referral → scoped consent grant → specialist sees granted scope → results return.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: this is Federation's *headline* (`shared_context_grant`/`visibility_grant`/`care_relationship`, scoped+consented+audited) — near-exact doctrine fit. BREAKS: Federation is `draft_for_ratification`; cross-org grant layer is deferred to ladder v2/v3 (`REV-157`/`REV-143`) → built substrate absent. → design-now; the model is right, the build is deferred.

**HCASE-081 — Infection-control surveillance + NHSN.** `omni:` Observation/Clinical-Memory/CNS/Federation/D7.
- loop: culture+device-days → HAI determination (projection) → mandated NHSN report (obligation).
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9~.
- BENDS: surveillance-as-projection-over-truth + reporting-obligation fit OMNI's projection≠truth + obligation doctrine cleanly. BREAKS: no surveillance projection or mandated-report obligation object; definition-versioning needs Settings. → defer-C5 (reporting) + design-now (report-obligation type).

**HCASE-082 — Quality / CQM / registry reporting.** `omni:` Observation/Clinical-Memory/D5/CNS/Settings.
- loop: documented care → measure logic (versioned projection) → submission obligation.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9~.
- BENDS: "metrics are projections, never source truth" (`T0-15`) is doctrine-exact; measure-version pin maps to model/policy-version discipline. BREAKS: no CQM/measure engine; submission-obligation object absent. → defer-C5 (measure engine) + design-now (measure = projection, never a parallel store — protect this).

**HCASE-083 — HIM amendment + break-glass audit.** `omni:` D7/RBAC/Clinical-Memory/BIZOPS(audit)/Federation.
- loop: amend signed note (addendum) → break-glass access (reason-coded) → ROI release.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: amend-not-overwrite + break-glass-capability+attestation+audit + authorized-release are *explicit* in D7 + RBAC §6 + Federation break-glass split — one of OMNI's strongest hospital-grade showings. BREAKS: ROI workflow + amendment lifecycle not built (doctrine present, objects thin). → design-now; near-ready by doctrine.

**HCASE-084 — Coding/DRG from documentation.** `omni:` D6/BIZOPS/Clinical-Memory/D7/RBAC.
- loop: documented truth → coder assigns ICD/DRG (one-way read) → CDI query (provider-authored) → charge.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8~ Q9✓.
- BENDS: BIZOPS "consume-events-never-corrupt-truth" + D6 doc↔bill coupling fit precisely (coder reads, never edits chart; CDI query = provider clarification). BREAKS: no coding/DRG/CDI-query objects (BIZOPS + D6 are draft/early). → defer-C5 (rev-cycle depth) + preserve-optionality (the one-way boundary).

**HCASE-085 — Prior-auth / payer determination.** `omni:` D6/BIZOPS/OFC/Federation/CNS.
- loop: order needs auth → payer determination (eligibility gate) → approve/deny/appeal.
- 9Q: Q1✓ Q2✓ Q3~ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: D6 §8.1 "payment state ≠ care state" is the exact invariant that makes denial-never-cancels-care correct. BREAKS: no prior-auth/eligibility/payer-determination object; payer interface absent. → defer-C5 (payer integration) + preserve-optionality (the payment≠care firewall — see red-team 094).

**HCASE-086 — Device-integration value fidelity.** `omni:` Observation/OFC/Clinical-Memory/RBAC.
- loop: device stream → fidelity/verification state → nurse validate → chart.
- 9Q: Q1✓ Q2✓ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: Observation's 3-gate (artifact-integrity / data-fidelity / clinical-adoption) + verification-state + "candidate not truth" is *purpose-built* for this. BREAKS: no device-integration ingestion + smart-pump/monitor stream object. → design-now; doctrine is ahead of the build here.

**HCASE-087 — HL7/FHIR inbound interface ingestion.** `omni:` Federation/Observation/Identity/Clinical-Memory/OFC/CNS.
- loop: inbound ORU/ADT from unowned systems → map to canonical identity/order → provenance-tag → reconcile.
- 9Q: Q1✓ Q2~ Q3✓ Q4✓ Q5~ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: "rails are replaceable adapters / anti-corruption layer / inbound never auto-authority" (`GRD-033`, Observation §7.8, intake provenance) fits the interface reality. BREAKS: no HL7 v2/FHIR interface engine, no inbound-mapping/reconciliation object; identity-matching on inbound feed is hard. → build-later (interface engine) + design-now (provenance + anti-corruption mapping).

**HCASE-088 — Consent / surrogate / advance-directive authority.** `omni:` D7(consent/directive)/Identity/RBAC/Clinical-Memory.
- loop: capacity lost → surrogate (legally ranked) → directive/code-status constrains orders → surrogate consent.
- 9Q: Q1✓ Q2~ Q3✓ Q4✓ Q5✓ Q6~ Q7✓ Q8✓ Q9✓.
- BENDS: D7 consent + RBAC authority + Identity actor model can express surrogate/directive; the "directive constrains orders" is an authority-gate. BREAKS: no capacity-state, no surrogate-hierarchy object, no code-status/POLST authority-constraint engine. → design-now (surrogate + directive-as-authority-constraint).

## Red-team / breaker traces (≥10 → 12 cases, HCASE-089…100)
For breakers the verdict is: does OMNI's **doctrine REFUSE** the failure, and **where must enforcement live** (built vs absent)? Symbols: `✓` doctrine refuses AND an enforcement home exists in doctrine · `~` doctrine refuses but enforcement is doctrine-only (must be BUILT as a deterministic gate; exposed if wired naively) · `✗` genuinely exposed (no doctrine answer). **Finding: 0 cases are `✗`.** OMNI's doctrine refuses all 12 — the risk is uniformly *enforcement-not-built*, which is the F "preserve-optionality / build-the-gate" zone, not a thesis contradiction.

**HCASE-089 [red-team] — Dropped transfusion reaction.** `omni:` Clinical-Memory/Observation/OFC/RBAC/CNS/AI-substrate.
- attempt: AI context-packet summarizes away a prior hemolytic reaction; or AI "confirms" the double-verify.
- OMNI: REFUSES — CM §5.1 (critical facts deterministically surfaced, never model-selected) + "AI proposes/humans commit" + dual-verify-not-AI-satisfiable. verdict `~`: doctrine-perfect, but the deterministic critical-fact surfacing + transfusion verify gate must be BUILT; naive AI-summary wiring would expose it.

**HCASE-090 [red-team] — "Ordered" becomes "given."** `omni:` OFC/Observation/Clinical-Memory/AI-substrate.
- attempt: workflow/agent marks med administered from order existence; back-fills admin event.
- OMNI: REFUSES — OFC order≠administration (separable primitives, §8.6) + administration is its own event/actor. verdict `~`: doctrine-exact; exposed only if an inpatient med-admin object is built WITHOUT preserving the event boundary. Build-the-boundary.

**HCASE-091 [red-team] — Silent controlled-substance diversion.** `omni:` OFC/RBAC/BIZOPS(audit)/CNS.
- attempt: override pull, unwitnessed waste, auto-reconciled counts hide the gap.
- OMNI: REFUSES — immutable audit (`audit_events`) + no-silent-reconciliation + witness/dual-approval doctrine. verdict `~`: requires a controlled-substance custody-chain object + diversion surveillance to be built; doctrine forbids the self-heal.

**HCASE-092 [red-team] — Auto-renewed restraint / extended hold.** `omni:` OFC/RBAC/CNS/AI-substrate.
- attempt: rule/AI auto-renews restraint or extends a legal hold past expiry without face-to-face.
- OMNI: REFUSES — candidate≠commit + AI-proposes-never-commits + authority-gate; AI "may remind, never renew." verdict `~`: doctrine-perfect (showcase); needs the hard-expiry + mandatory-reeval gate object built. The single best demonstration that OMNI's physics is hospital-grade-shaped.

**HCASE-093 [red-team] — Overwrite legal record / unaudited break-glass.** `omni:` D7/RBAC/BIZOPS(audit)/Clinical-Memory.
- attempt: correction overwrites signed note; break-glass leaves no trail.
- OMNI: REFUSES — D7 amend-not-overwrite (consent/record immutable; revocation additive) + RBAC break-glass reason-coded+audited+post-reviewed + tamper-evident audit. verdict `✓`: doctrine AND enforcement homes both exist (D7 + RBAC §6) — closest to ready; needs the amendment/ROI lifecycle built but the gates are specified.

**HCASE-094 [red-team] — Payment denial cancels care.** `omni:` D6/BIZOPS/OFC/Clinical-Memory/CNS.
- attempt: prior-auth denial or autopay lapse silently cancels/holds a chemo order.
- OMNI: REFUSES — D6 §8.1 invariant "payment state ≠ care state; a funding event NEVER ends a care_program/clinical order." verdict `✓`: doctrine explicit + the boundary is a stated invariant; enforcement = keep the D6/clinical firewall when the order/payer objects are built. Preserve-optionality of this firewall is load-bearing.

**HCASE-095 [red-team] — Artifact value becomes truth + acts.** `omni:` Observation/OFC/CNS/AI-substrate.
- attempt: motion-artifact monitor spike auto-commits as observation + triggers escalation/order.
- OMNI: REFUSES — Observation 3-gate + verification-state + "device value is candidate, not truth" + candidate→commit. verdict `~`: doctrine-exact; exposed only if device ingestion is built bypassing the verification-state gate. Build the fidelity gate.

**HCASE-096 [red-team] — Surrogate-by-handle / stale consent.** `omni:` D7/Identity/RBAC/Clinical-Memory.
- attempt: decision authority to whoever holds the phone; reuse expired/withdrawn consent.
- OMNI: REFUSES — Identity handle≠person (first-class shared/ambiguous-handle states) + D7 consent freshness/scope + revocation-additive. verdict `~`: doctrine forbids both; needs capacity-state + surrogate-hierarchy objects built; the handle≠person guard already exists in Identity.

**HCASE-097 [red-team] — Cross-operator PHI leak / break-glass abuse / OMNI self-deal.** `omni:` Federation/RBAC/D7/BIZOPS(audit).
- attempt: scoped grant leaks full chart; routine break-glass; OMNI-operator gets privileged access.
- OMNI: REFUSES — Federation scoped-grant purpose-binding + `T0-14` operator-neutrality (substrate REJECTS privileged OMNI tier) + break-glass exception-only+audited. verdict `~`: doctrine strong (operator-neutrality is a Tier-0 guardrail); enforcement needs the Federation grant layer built (deferred `REV-157`).

**HCASE-098 [red-team] — Downtime writes corrupt the record.** `omni:` Build-OS/OFC/Clinical-Memory/RBAC/CNS.
- attempt: outage accepts unverified entries; recovery merges with no reconciliation/authority/timestamp.
- OMNI: REFUSES (in principle) — append-only + provenance + authority-at-emission. verdict `~` (weakest): there is **no designed degraded-mode** at all, so the refusal is doctrinal-only with NO operating model — this is the one where OMNI is most *unprepared* (not contradicted, but genuinely undesigned). Design-now is urgent here.

**HCASE-099 [red-team] — Zero-click agent order flood.** `omni:` AI-substrate/CNS/OFC/RBAC/Security.
- attempt: ingest/loop agent reads inbound doc with hidden instructions → places/floods orders (zero-click amplifier).
- OMNI: REFUSES — `GRD-038` (no build/promote/execute from watched evidence) + `GRD-039` (process-as-data, hostile-by-default) + ingest-agent≠commit-agent + bounded-loop-gain + candidate→commit + injection→kill-switch. verdict `✓`: doctrine is *explicitly* built for this (it's the #1 named OMNI threat); enforcement = keep the ingest/commit isolation + deterministic gate when agent-runtime is built. Strong showing.

**HCASE-100 [red-team] — Silent model swap clears the gate.** `omni:` AI-substrate/Clinical-Memory/CNS/RBAC/Build-OS.
- attempt: model swapped mid-protocol with no `model_version_of_record`; AI output clears `clinical_required` / commits an assertion.
- OMNI: REFUSES — `model_version_of_record` (T0-16) + AI-never-clears-clinical_required (CNS §10.1) + AI-proposes-never-commits + recall ("can't recall → can't deploy"). verdict `✓`: doctrine explicit + multiple guardrails; enforcement = the model-lineage + clinical-gate must be built into the AI runtime. Strong showing.

## Cross-cutting break patterns (feeds F)
1. **The universal pattern: PHYSICS-HOLDS / OBJECT-MISSING.** Across all 40 traces, OMNI's *doctrine* (order≠admin≠result · candidate≠commit · 4-way authority · projection≠truth · AI-proposes-humans-commit · amend-not-overwrite · payment≠care · operator-neutrality) survives hospital gravity — frequently it is *better-specified than the field assumes a startup would be*. The breaks are almost entirely at **Q6 commit/write-back**: the inpatient owning-domain **objects/lifecycles do not exist yet** (no built inpatient order/CPOE, med-admin/BCMA/eMAR, ADT/bed/LOC encounter-state, transfusion/transfer/perioperative state machines, regimen/protocol order, surrogate/capacity, degraded-mode, interface engine). This is the build-now/design-now/defer line for F — NOT a thesis contradiction.
2. **Authority re-establishes at every transition** (065/047/050/079/088/101) — OMNI's federation/transition doctrine is *correct*, but there is no built inpatient encounter+ADT+LOC substrate to carry it. Highest-value design-now cluster (transitions are also the wedge-adjacent slice).
3. **Order ≠ administration is the most repeated break** (061/068/070/076/077/090) — the doctrine is exact (OFC §8.6), the *administration event object* is absent everywhere. The single highest-leverage inpatient primitive to build.
4. **The red-team set is uniformly doctrine-safe (0 `✗`)** — every breaker is refused by existing doctrine; the exposure is "enforcement gate not built," concentrated in AI/agent-runtime (099/100 strong) and the absent deterministic gates (089/090/092/095). This is the symmetric-honesty result: **not false confidence (objects are genuinely unbuilt), not false retreat (the physics is hospital-grade-shaped and the safety doctrine is ahead of the field).**
5. **Two genuine UNDESIGNED gaps (not just unbuilt):** (a) **degraded-mode/downtime** (069/098) — OMNI assumes online-only; no operating model exists. (b) **multi-stage stateful encounter** (perioperative 071, ADT/LOC 065, OB-dyad 073) — D5 `service_occurrence` is not movement/stage-stateful for inpatient. These two need *design*, not just build.
6. **Where OMNI is closest to ready by doctrine** (strong showings, gates specified): legal-record amendment + break-glass (083/093), payment≠care firewall (085/094), critical-result closed-loop (067), restraint auto-expiry (078/092), zero-click + model-lineage AI safety (099/100), device-fidelity (086/095). These are *preserve-optionality + build-the-specified-gate*, not new-primitive.

---

### E stop-proof (part of G3)
E traces 28 deep-trace + 12 red-team cases (40 total ≥ the ≥25/≥10 minimums). Each names OMNI domains/control-planes touched + where it bends/breaks. Break patterns synthesized for F. `analysis_nonbinding` (`GRD-036`); no C4 prose, no contract edits. **→ F (`v4_C3_5F_omni_disposition_gap_matrix.md`) classifies each finding on the two independent dimensions; G3 stops after F.**

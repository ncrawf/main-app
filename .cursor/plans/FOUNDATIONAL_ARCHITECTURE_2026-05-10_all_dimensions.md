# OMNI Foundational Architecture — substrate that admits all dimensions

**Status:** working-draft long-form rationale source. The binding architectural commitments have been **reconciled into the canonical MAIN system map** at [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) as **Doctrine locks DL-1 through DL-9** + **Section 1W: Tracked clinical objects + procedure / intervention lifecycle**. This document remains the long-form rationale, pressure-test, and primitive / sibling enumeration source; it does not bind by itself.

**Reading order:** for binding architectural decisions, read MAIN's Doctrine locks + Section 1W first; consult this document for rationale, the 12-procedure pressure-test grid (§6.5), the 21-substrate-primitive enumeration (§4), the 18-sibling enumeration (§5), the 20 ontology traps (§9), the dimensional matrix (§3), the four-layer epistemic model (§7), and the §13 execution plan. The §11.0 crosswalk table maps every element here to its binding home in MAIN.

**Provenance:** consolidates the c1–c9 4H-templates-discipline arc + the 2026-05-10 mega-pressure-test session + the 2026-05-11 reconciliation pass. Supersedes the v1 pressure-test plan at `omni_continuity_platform_pressure_test_74081494.plan.md`.

**Phase B.5 (2026-05-16) Mindbody reality ingestion COMPLETED:** Layer 2 synthesis at [`.cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md`](designs/2026-05-16_mindbody_architecture_understanding.md) (13 sections A-M, 185+ findings) feeds doctrine sharpening + substrate slice scope. Section H enumerates ~40 substrate tables for Day 0 + Section G enumerates DL-15 amendments (7) + DL-16 amendments (4) + 4 new DLs to draft (Commerce DL / Settings-Infrastructure DL / RBAC DL / Clinical-Coding DL). Raw ingestion layer at [`.cursor/plans/ingestion/mindbody/`](ingestion/mindbody/) preserves 163 screenshots + 27,982-line Knox chat across 17 raw capture files + manifest. **Q1 encounter container architecture explicitly SHELVED** per [mindbody_open_questions_raw.md](ingestion/mindbody/mindbody_open_questions_raw.md) — Phase B.5+ doctrine sharpening resolves.

---

## 0. OMNI CNS IS THE EVENT-DRIVEN CARE COORDINATION BRAIN. RAILS AND SURFACES ARE OUTPUTS.

**(DL-14 anchor — binding spine; precedes the premise, primitives, siblings, and every section below. Canonical home: MAIN system map top-level anchor + DL-14 doctrine lock. This document is the long-form rationale source; MAIN is binding. This section reflects the same canonical spine. CORRECTION, not discovery — the framing existed in fragments across primitives #10 (`outbound_jobs`) and #11 (AI runtime) and across MAIN §1Q + Marketing Lifecycle + dynamic-behavior gates, but was never canonized at the top. DL-14 fixes that.)**

**OMNI CNS reads unified events** across atoms, clinical atoms, scheduling, purchases, treatments, intake, calls, voicemails, SMS, email, in-app messages, labs, Rx, memberships, packages, provider/staff activity, patient state, elapsed time, and any other event source the platform ingests.

**It decides the best next action across actor targets:** patient, provider, front desk, care coordinator, manager, compliance/admin, AI planner, queue/team, external vendor/system.

**Possible actions include:** patient messaging (SMS / email / in-app / push), provider notification, staff task creation, passive awareness marker, escalation, suppression or cancellation of planned actions, waiting / throttling, AI suggestion or planning request, lifecycle state update, outcome feedback logging, no-op.

**Rails and surfaces are outputs:** Twilio / SMS, email, in-app, push, phone, voicemail, provider inbox, staff tasking, manager dashboards, vendor adapters, and future rails. They render and deliver the CNS's decisions; they do not orchestrate.

**The CNS is NOT:** an SMS rules engine, a marketing automation tool, a Twilio integration, a patient-messaging system, an outbound-job runner, or a basic rules/templates engine. Those are subsystems and outputs UNDER the CNS, not the CNS itself.

**The CNS includes a learning loop.** Outcomes, staff feedback (thumbs-up/down/unsafe markers) on system actions, AI suggestion accept/edit/reject events (with full attachment lineage: action id, rule id + version, template id + version, campaign step, channel projection / rail attempt, patient context snapshot, AI proposal id, prompt version, model version, final action diff), and awareness-marker state transitions (`OMNI sent → unseen → seen → acknowledged`) are first-class CNS inputs that feed back into future decisions. A CNS without a learning loop is a one-way emitter, not a brain.

**Subordination + selective adequacy commits (Phase A.2 update).** This anchor binds every primitive and sibling below: §4 primitives (especially #10 and #11), §5 siblings, §7 four-layer epistemic model, §8 cross-cutting concerns.

**Phase A.2 (2026-05-13, correction layer on top of Phase A) extends DL-14 with invariants 7-22 (sixteen new):**
- **Invariants 7-13** — AI hybrid layer + 7 autonomy modes + 4 capability envelopes (operations / clinical / content / safety-triage; orthogonal to §1N.2 role surfaces) + AI invocation audit lineage + 7-layer policy/toggle matrix + re-prompt/retry pathway + NO global meta-AI.
- **Invariant 14** — CNS 9-layer vertical stack (L1 rails → L2 atomization → L3 AI envelopes → L4 context → L5 deterministic policy → L6 planner → L7 `orchestration_actions` substrate → L8 rail/surface execution → L9 feedback) + 10 horizontal domain slices using same spine; no domain-specific mini-brain. Tesla-autopilot pattern.
- **Invariant 15** — Control ownership state machine per thread/pathway/action; 9 substrate states + 4 pause sub-types; substrate-vs-UI distinction binding.
- **Invariant 16** — 6-layer event-sourced + CQRS architectural pattern (event → cns_decision → orchestration_action → projection → attempt → outcome); 12 lifecycle states for orchestration_actions; manual-text fast path; orchestration_actions enum sets (action_type / origin / actor_target / channel / control_state).
- **Invariant 17** — orchestration_runs parent state-machine over orchestration_actions (multi-step pathway state lives on runs, NEVER on atomic action rows).
- **Invariant 18** — AI Compose Assist global capability + Context Packet Builder + 5 invocation modes (polish_existing_draft / draft_reply_from_context / suggest_next_action / bounded_autopilot_recommendation / provider_draft_refinement). **Polish gets RICH relevant context — distinction is OUTPUT AUTHORITY, NOT context size.** Provider AI-assisted clinical reply discipline. Simple-surface-serious-substrate product principle.
- **Invariant 19** — AI intent preservation in Polish + Draft Refinement; material additions surfaced as flagged suggestions; never silently inserted.
- **Invariant 20** — Prompt injection defense + instruction hierarchy (system/CNS > org > provider/staff > approved knowledge > inbound content). Inbound text is UNTRUSTED data wrapper, never instructions.
- **Invariant 21** — Live-state revalidation before action firing; tool failure → human workflow, never hallucinated success.
- **Invariant 22** — Multi-tenant + federation-aware AI scoping; default is NOT total visibility; AI context obeys A1 permeability policy.

**Primitive #10 conceptual rename to `orchestration_actions` is COMMITTED (Phase A.2; non-reopenable).** Phase 0 / Phase 1 audit only HOW the physical migration lands (in-place rename, table extension with action_kind discriminator, new orchestration_actions table + legacy outbound_jobs projection view, compatibility layer for in-flight callers, or staged migration). Phase 0 does NOT decide whether `outbound_jobs` remains the conceptual primitive — that decision is over. See §4.B primitive #10 COMMITTED RENAME below.

**Primitive #11 (AI runtime) scope is bound by invariants 7-21; adequacy of the EXISTING AI implementation scope against that bound scope is what Phase 0 audits.** Two distinct questions: primitive #11's scope is bound by DL-14 (classifier / planner / draftsman / bounded executor / ranker / learning-loop participant per invariants 7-21); whether current code matches that scope is Phase 0.

**§1Q + §1Q.21 + dynamic-behavior gates + other subsystems** — adequacy against multi-actor multi-action CNS model is Phase 0 audit. DL-14 binds subsystem subordination to the CNS center of gravity (per invariant 5); subsystem implementation scope adequacy is Phase 0.

**Four absolute guardrails (Phase A.2 binding)**: (1) Clinical-risk interrupt is ABSOLUTE; (2) Bounded autopilot is CNS-executed, not AI-executed; (3) AI policy is LAYERED + DEFAULT-CLOSED + INVOCATION-AUDITED; (4) Patient-facing AI is NOT freeform chat even with bounded autopilot.

**Two product principles (Phase A.2 binding)**: (a) Simple surface, serious substrate; (b) Rich relevant context, restricted output authority.

Phase 0 brain hardening audit at `.cursor/plans/omni_brain_hardening_d1ef429b.plan.md` walks 27 adversarial stress scenarios + 7+1-axis taxonomy + enterprise audit checklist.

**Phase B Commit 1 (2026-05-13 evening; immediately after Phase A.2) extends DL-14 with a paired universal doctrine lock DL-16 — CNS Event Envelope + Taxonomy Evolution.** DL-14 binds *what* the CNS does (reads unified events, decides multi-actor multi-action, emits via primitive #10). DL-16 binds *the grammar* the CNS reads: the universal event envelope, the 7-category vocabulary partition, the taxonomy registry, the audit / consistency / safety / observability disciplines. Every domain (scheduling, messaging, commerce, intake, labs, Rx, notes, external-line, internal collaboration, fax, future) specializes against DL-16 rather than inventing its own envelope.

**DL-16 was forced into existence by Phase B scheduling pressure-testing.** Attempts to canonize scheduling-domain event vocabulary surfaced that the universal envelope, partition, registry, and audit disciplines had to land first — otherwise scheduling would inherit drift from messaging / external-line / intake / commerce / labs / notes / every domain. Adversarial pressure rounds (Knox / chat 8 rounds + multiple Opus-side critical rounds) surfaced ~30 distinct distributed-systems / 2B-scale / safety / audit gaps that were promoted from scheduling-specific to universal. DL-16 is the consolidated result: **39 mechanically-numbered invariants** plus 3 admitted-but-deferred items (D1 distributed tracing, D2 data residency, D3 substrate-level deprecation).

**DL-16 invariant clusters (39 invariants total):**
- **Foundation (1-5):** universal event-graph principle + universal envelope + 7-category partition + bidirectional CNS↔domain seam + taxonomy registry.
- **Atomicity / scoping (6-10):** atomic state mutation + payload minimization + multi-tenant isolation + schema validation + emission-time authorization.
- **Execution / reliability (11-15):** idempotency at execution + DLQ + retention + executor timeouts + cross-run correlation.
- **Replay / projections / temporal (16-20):** replay safety modes + executor outcome contracts + temporal validity + projection freshness + causality cycle detection.
- **Consistency / privacy / safety (21-26):** consistency tiers + GDPR erasure + AI content validation + clinical source-of-truth + patient impersonation gate + cross-domain saga only.
- **Operations (27-29):** observability + circuit breakers + environment segregation + producer authorization.
- **Audit / decision / compensation (30-35):** CNS decision record + compensation discipline + event-granularity routing + context snapshot immutability + aggregate concurrency + value normalization.
- **Reality / governance / integrity (36-39):** manual reality capture + privileged-action elevated approval + tamper-evident audit + out-of-band reconciliation.

**DL-16 introduces a new top-level section in MAIN: §1Z — Universal CNS Event Envelope + Taxonomy.** Section 1Z is the canonical home for the universal envelope, partition, registry, and operational disciplines. Domain-specific event vocabularies (DL-15 scheduling in Commit 2, future commerce DL, future Rx/labs DL) specialize against §1Z — they never reinvent envelope, partition, or registry. Companion file `docs/architecture/cns_taxonomy_reconciliation.md` maps ~20 OMNI surfaces × 7 vocabulary categories.

**Phase B Commit 2 (immediately following Commit 1) will land DL-15 — Scheduling Substrate Spine** — as the first domain specialization against DL-16. DL-15 = Mindbody-class scheduling substrate (~28 invariants subordinate to DL-16). DL-15 lives in MAIN §1F (extending the existing 9 subsections with §1F.10-§1F.24).

---

## 1. Premise (binding)

OMNI is **continuity-native operational substrate for healthcare** — infrastructure that admits **elite-class depth in every operational domain it activates**, unified through one continuity graph + one AI orchestration runtime, instead of leaving clinics to stitch together five-to-ten disconnected best-in-class tools (Mindbody + Shopify + Hims-style intake + ActiveCampaign + Klara + RingCentral + Athena lab module + Aesthetic Record + Quest + Stripe + ...).

**The substrate does not ship shallow versions of activated domains.** When a domain is activated for the wedge workflow, the depth bar is best-in-class for the workflow served. **For the wedge clinic, activation is Day 0. Not incremental. Not "we'll get there."** A wedge clinic running today on Mindbody (scheduling) + Shopify (POS / packages / memberships) + Hims-style intake + ActiveCampaign (lifecycle marketing) + Klara/RingCentral (communications) + Athena lab module (labs) + outpatient EMR (charting / problem list / clinical decisions) should be able to switch to OMNI on Day 0 and not lose any operational depth. They gain integration. They do not lose features. **That is the bar.**

The moat is not less depth — it is **domain-grade depth integrated through the continuity graph + orchestration runtime that no single best-in-class tool offers**.

Depending on activation depth, OMNI may **replace, integrate with, or orchestrate around** best-in-class external tools. The invariant: **continuity, provenance, and operational state resolve inside one graph**.

**Epic is not the bar.** The wedge clinic does not need hospital-grade EMR (inpatient orders, hospital-floor coordination, ICU monitoring, ED triage). The wedge clinic needs **outpatient EMR depth** — clinical visits, notes, problem list, labs review, clinical decisions, signoffs — at the depth a real medspa / peptide / HRT / longevity / derm-cosmetic / hormone clinic actually practices. That's what the substrate must support on Day 0.

Wedge clinic profile: high-margin specialty / outpatient clinic ($600k+/month revenue) running longitudinal care of meaningful complexity — peptide / HRT / longevity / hormone optimization / derm-cosmetic / medspa / procedural specialty. They pay $5–10k/month for OMNI because today they spend $30k+/month on a fragmented stack PLUS coordinator headcount duplicating manual reconciliation work that exists ONLY because the tools don't talk. **OMNI replaces the integration tax, not the depth.**

The substrate operates on five binding doctrines:

1. **Small primitive set.** 21 substrate primitives + 18 sibling domains + 3 architectural tiers. Substrate stays small.
2. **Large workflow universe.** Every workflow a real specialty / outpatient clinic runs decomposes through the universal flow grammar (§1.7) into the small primitive set.
3. **Activated domains ship deep, not toy — on Day 0.** When a domain is activated for the wedge workflow, the depth bar is best-in-class for that workflow on Day 0. Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class lifecycle marketing, Klara/RingCentral-class communications, Athena-lab-module-class labs, outpatient-EMR-depth charting. Not incremental. No shallow versions.
4. **Integration is the moat.** Continuity graph + AI orchestration runtime + universal flow grammar across every activated domain — no single best-in-class tool offers this.
5. **Future-market admissibility is not a roadmap commitment; it is an architectural non-foreclosure commitment.** If we choose to extend toward inpatient / hospital-floor / ICU / ED workflows later — or to deepen any current domain further in any direction — the substrate's primitives admit that extension via §1.8 admission criteria. **No future market is forbidden by doctrine.** Wedge focus is current discipline, not depth restriction.

The substrate must equally admit every operational dimension below — DTC telehealth, in-clinic, hybrid, procedural specialty, surveillance specialty, aesthetic / cosmetic medicine, multi-specialty group, concierge, fertility, longevity, hormone optimization, medspa-evolving-into-procedural-medicine. The wedge customer is a separate go-to-market track that does NOT gate substrate work and does NOT influence substrate ontology.

This is not a roadmap commitment for un-activated domains. **For the wedge clinic's activated domains, Day 0 is the depth commitment.** Every architectural decision evaluates against "does this admit every cell of the dimensional matrix at full operational depth without inventing a specialty-specific primitive?" — not "does this serve the current wedge?"

The clinic-facing app is the deliverable; OMNI is the asset. The asset is the **continuity graph + governance substrate + AI-orchestration runtime + cross-channel communications lineage + structured intervention layer + tracked clinical objects + charge / revenue lineage + universal flow grammar — at domain-grade depth where activated, integrated across the whole stack**.

---

## 1.5 Wedge scope boundary (binding — discipline, not market prohibition)

The substrate's current operational shape is **outpatient / specialty / longitudinal continuity care**. That is wedge focus — discipline, not market prohibition.

**Out of current scope (substrate not currently optimized for):**

- Inpatient bed management, hospital-floor coordination, ICU monitoring, ED triage. Different operational shapes, different state machines, different actors, different timing. Activating these would require substrate extension via §1.8 admission criteria.
- **Hospital-grade EMR (Epic / Cerner enterprise depth).** The wedge clinic does not need this. The wedge clinic needs outpatient charting / problem list / clinical decisions / labs review at the depth a real specialty-outpatient clinic practices — NOT hospital-grade orders, inpatient flowsheets, ICU monitoring, ED triage. **Epic is explicitly NOT the bar.**

**In current scope, ship at Day 0 elite-class for the wedge workflow:**

- **Scheduling / resource coordination** — **Mindbody-class on Day 0** for the medspa / outpatient / procedural workflow it serves. Provider calendars + room/suite/equipment + multi-resource bookings + prep dependencies.
- **Commerce / retail / memberships / packages** — **Shopify-class on Day 0** for catalog, packages, memberships, point-of-sale, multi-rail settlement.
- **Intake / eligibility / structured history** — **Hims-class on Day 0** for high-grade structured clinical intake (atomization per §7 four-layer model).
- **Lifecycle marketing / engagement** — **ActiveCampaign-class on Day 0** for journeys, attribution, consent-bound sends.
- **Communications / escalation / cross-channel continuity** — **Klara / RingCentral-class on Day 0** (multi-channel, multi-endpoint, AI-assisted).
- **EMR / charting / clinical decisions** — **outpatient-EMR depth on Day 0** for visits, notes, problem list, labs review, clinical decisions, signoffs as practiced by a medspa / peptide / HRT / longevity / derm-cosmetic / hormone clinic. **NOT hospital-grade. NOT Epic. Outpatient depth.**
- **Diagnostic lifecycle (broad)** — **Athena-lab-module-class on Day 0** for labs, pathology, imaging, sleep studies, PFT, ECG, stress testing, urodynamics, colposcopy, EEG, OCT, audiogram, joint aspiration, and the broader specialty-test universe enumerated in §6.6. **Athena-lab-module-class means OMNI is the authoring system for in-office diagnostic acquisition** — native structured templates for c-scope / sleep / PFT / ECG / stress / urodynamics / colposcopy / EEG / OCT / audiogram interpretation; in-office device artifact import for PFT / ECG / ultrasound / endoscopy capture; AND reconcile-and-attach for outside results via substrate primitive #16. **Three lanes (plus hybrid), one continuity graph.** Owned tests are authored, not merely ingested. Per binding sub-doctrine §5.2 + DL-9 in MAIN. Order → acquisition → interpretation → communication → tracked-object update → recall.
- **Billing / charge lineage** — cash-pay + subscription + package + intervention-derived charge lineage at full operational depth on Day 0. (Future RCM / claims / payer / ERA / EOB / AR reserved per `revenue_cycle/` sibling — not Day 0.)
- **Inventory / lot / expiry / point-of-care consumption** — full lot tracking + expiry + vendor sourcing + point-of-sale dispense on Day 0.
- **Procedures / structured interventions** — procedure episodes + intervention capture + downstream inventory / charge / note derivation per §7.6, on Day 0 for procedural-specialty wedge workflows.
- **Tracked clinical objects / surveillance / recall** — longitudinal findings, recall, object identity, evidence + assertion lineage per §7 + §7.5, on Day 0 for surveillance-specialty wedge workflows.
- **External-system ingest / document routing** — inbound artifacts from labs, imaging, ASC EMRs, pathology, fax, referrals, vendor systems, scanned consents — substrate primitive #16, Day 0.
- **Referrals / cross-org loop closure** — outbound referrals, inbound result return, packet handoff, status tracking — Day 0.
- **Vendor / partner coordination** — first-class vendor / partner interaction primitives — Day 0.
- **Clinical coding / documentation rendering** — codes and notes as derived / rendered artifacts from structured state per §7.7 — Day 0.
- **AI orchestration over the continuity graph** — bounded-but-real AI runtime; provider authority gating; AI-as-actor with audit + capability + disclosure-policy + consent — Day 0.

**Forward optionality preserved.** If we choose to extend toward inpatient / hospital-floor / ICU / ED workflows later, or to deepen any currently-activated domain further (e.g., toward enterprise scheduling, full RCM payer integration, or hospital-grade EMR), the substrate's primitives admit that extension via §1.8 admission criteria. **Future-market admissibility is not a roadmap commitment; it is an architectural non-foreclosure commitment.** No future market is forbidden by this doc. The substrate stays small; any depth extension goes through admission criteria.

**Examples are representative, not exhaustive.** Specialty test / procedure / workflow examples named here and throughout this document (Botox, c-scope, sleep study, PFT, ECG, stress test, urodynamics, colposcopy, EEG, OCT, audiogram, joint aspiration, RFA, etc.) are **representative across the wedge specialty universe — not a comprehensive enumeration**. The substrate must admit the full ~50-shape register in §6.6 (covering urology, cardiology, pulmonology, gynecology, endocrine, neurology, ophthalmology, ENT, allergy/immunology, rheumatology, wound care, pain management) **without new primitives**, demonstrating non-foreclosure across 12+ specialty categories per DL-6 + DL-8. If a future use case is named that does not appear in §6.6, the test is the same: does it compose from existing primitives + the existing sibling reservations + DL-9 producer lanes? If yes, admit. If no, run §1.8 admission criteria — do not invent specialty-specific primitives by default.

---

## 1.6 Primitive extraction doctrine (binding)

OMNI is intentionally designed against hundreds of possible outpatient, specialty, procedural, diagnostic, and surveillance workflows. The design method is NOT to bolt on specialty-specific objects whenever a use case is named. The design method is to **extract universal primitives from named use cases and force every workflow to compose from those primitives**.

A named specialty or procedure can appear in this document only as:

1. a **pressure-test vector** — proves the substrate primitive set is complete;
2. a **specialty overlay** — composes substrate + siblings into a specialty-shaped UI / workflow / configuration;
3. an **example of primitive composition** — shows how the universal grammar absorbs the workflow;
4. or a **rejected anti-pattern** — explicitly named as forbidden.

It cannot become a substrate primitive merely because it exists in the real world.

**The universe of supported workflows is broad. The universe of substrate primitives stays small.** Named specialties and procedures are pressure-test vectors, not primitive names.

---

## 1.7 Universal flow grammar (binding)

Every operational workflow in OMNI decomposes into the same grammar:

```
intent
  → eligibility / context
  → scheduling or async review
  → encounter / procedure / acquisition
  → intervention(s)
  → tracked object update(s)
  → evidence / artifact generation
  → interpretation / assertion
  → documentation rendering
  → billing / charge lineage
  → communication
  → task / recall / continuation
  → repeat
```

This grammar represents GLP-1 follow-up, Botox session, Mohs, colonoscopy, HRT lab review, cortisone injection, IV infusion, sleep study, PFT, skin lesion surveillance, cardiac cath follow-up, pulmonary nodule monitoring, fertility cycle monitoring, peptide clinic continuation, longevity panel review, allergy shot series, and any future workflow without specialty-specific extension.

If a workflow cannot decompose into this grammar, either (a) a primitive is missing and must pass §1.8 admission criteria, or (b) the workflow belongs in an overlay, not the substrate. **The grammar is the test.**

---

## 1.8 Primitive admission criteria (binding rule)

**Rationale (descriptive criteria).** A candidate substrate primitive is worth examining only when the following descriptive properties hold: the state **recurs** across multiple specialties or care models; it carries **longitudinal identity, operational state, provenance, or future obligation**; it is **expensive to retrofit later** (changing it post-scale would touch many siblings or operational surfaces); and it cannot be **represented cleanly by existing primitives** without loss of continuity, provenance, or operational control. These properties describe the *shape* of legitimate primitive candidates.

**Canonical 4-condition admission test (operational; binds MAIN's DL-8 and §2.1 definition table; the §6.6 specialty register's closing paragraph applies the same test).** A substrate primitive is admitted only when ALL four conditions hold:

1. The primitive is **referenced by ≥3 sibling domains**.
2. **No existing primitive can model it** without violating discriminant or sibling locality.
3. The primitive has a **stable identity contract independent of any single workflow**.
4. The primitive has a **defensible read-authority and write-authority boundary**.

The two formulations describe the same gate from two angles — the rationale identifies *which candidates deserve the test*; the four-condition test is the *operational pass/fail evaluation* that MAIN's DL-8 binds. When in doubt, the canonical 4-condition test above is the binding version.

A use case may force a **sibling** only when the required state recurs across multiple care models AND has its own state machine.

A use case may force an **overlay** when specialty-shaped composition is needed without new ontology.

Otherwise, the use case is a **pressure-test vector** — not a substrate change.

This is the anti-randomness rule. It is what keeps OMNI broad-in-scope without becoming infinite-in-substrate.

---

## 2. Three architectural tiers (binding)

- **Substrate primitives** — cross-cutting infrastructure every sibling depends on. Substrate is NOT a sibling; modeling one as a sibling is a category error.
- **Operational sibling domains** — first-class operational domains under Patient. Each owns its own payload discriminant per ADR §7.7. Discriminants do not leak across siblings per ADR §7.8.
- **Specialty overlays** — compositions of substrate primitives + operational siblings, packaged for specialty-shaped workflows. Overlays are NOT siblings. Substrate must admit them; substrate does not encode them. Without the overlay tier, future contributors will either (a) make every specialty workflow a new sibling (collapse) or (b) make universal siblings carry specialty knowledge (poison). Both forbidden.

### 2.1 Definition table (terminology normalization across foundational doc + MAIN)

*This table is the canonical glossary for terms used in this document and in the MAIN system map's Doctrine locks + Section 1W. When a term is referenced from MAIN, the binding definition lives here; long-form rationale lives in the named section below.*

| Term | Binding definition | Where defined long-form | Where bound in MAIN |
|---|---|---|---|
| **Substrate primitive** | Cross-cutting infrastructure every sibling depends on. Not a sibling; not a workflow; admitted only via §1.8 admission criteria. | §1.6 + §4 | DL-1 (substrate-vs-operational distinction) |
| **Operational sibling domain** | First-class operational domain under Patient. Owns its own payload discriminant; does not nest under another sibling. | §5 | DL-2 (patient-rooted siblings) + DL-3 (sibling-local discriminants) |
| **Specialty overlay** | Composition of substrate primitives + operational siblings, packaged for specialty-shaped workflows. Not a sibling; not infrastructure. | §2 + §6.5 (worked examples) | DL-8 (universal flow grammar — overlays compose from grammar, never new primitives) |
| **Tracked clinical object** | Durable clinical object (rhytid, hypothyroid management problem, lipid problem, screening cadence) tracked longitudinally. Layer 1 of the four-layer epistemic model. Foundation primitive — not a sibling. | §1.6 + §7 + §8 | DL-7 + Section 1W (canonical home in MAIN) |
| **Clinical assertion atom** | Typed epistemic claim about a tracked object at a point in time. Layer 2 of the four-layer model. Append-only; supersession via pointer. | §7 + §8 | DL-7 + Section 1W.2 |
| **Diagnosis entity** | Codable interpretation (E03.9 hypothyroidism, L98.8 skin disorder) of a tracked object + its assertions. Layer 3 of the four-layer model. | §7 | DL-7 + Section 1W.2 |
| **Billing artifact** | Financial representation derived from interventions on tracked objects. Layer 4 of the four-layer model. | §7 + §8 step 6 | DL-7 + Section 1W.2 + Section 1W.9 (`revenue_cycle/` consumption) |
| **Universal flow grammar** | The 13-step decomposition (intent → eligibility → scheduling → encounter / procedure → intervention → tracked-object update → evidence → interpretation → documentation → billing → communication → task / recall → repeat) every operational workflow on the platform follows. | §1.7 + §6.5 worked grid | DL-8 + Section 1W.6 (8-layer continuity chain — the operational projection of the grammar) |
| **Primitive admission criteria** | Four binding conditions for admitting new substrate primitives: (1) referenced by ≥3 siblings; (2) no existing primitive can model it without violating discriminant or sibling locality; (3) stable identity contract independent of any single workflow; (4) defensible read-authority + write-authority boundary. | §1.8 | DL-8 |
| **Producer-site transitional locality** | Approved pattern where the type system encodes the correct sibling-domain architecture even though runtime wiring temporarily lives on a legacy producer surface. Tagged with explicit "PRODUCER-SITE TRANSITIONAL LOCALITY" comments + radar tracking. | ADR §7.5 + radar zones 27–28 | DL-4 |
| **Anti-overload binding pattern** | Codified four-place pinning (rule header / template header / producer comment / preflight) for ontologically-overloaded English words (e.g., "denied", "approved", "cancelled") that otherwise leak meaning across siblings. | ADR §7.8 | DL-3 (sibling-local discriminants — the anti-overload pattern is the operational expression) |
| **Structured-first authoring + note-as-rendered-output** | Binding authoring discipline: providers author structured interventions; notes are rendered from that structured state, not vice versa. | §1.6 + §8 step 7 | DL-7 + Section 1W.7 |
| **Day 0 elite-class depth** | When a sibling domain is activated for a workflow, the substrate must admit it at Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class marketing, Klara/RingCentral-class communications, Athena-lab-module-class lab handling, outpatient-EMR-class charting depth. Epic-grade hospital EMR is explicitly not the bar. | §1 + §1.5 | DL-5 |
| **Substrate non-foreclosure** | Architectural commitment that the substrate must remain admissible across every dimension of the dimensional matrix (§3) without rewrites. Distinct from a roadmap commitment. | §1 + §3 | DL-6 |
| **Activated sibling** | A sibling domain that has its first concrete migration landed. **For the wedge clinic, activated domains carry Day 0 elite-class depth per DL-5** (Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class lifecycle marketing, Klara/RingCentral-class communications, Athena-lab-module-class diagnostics, outpatient-EMR-depth charting). Activation order across domains is sequenced operationally; once a domain activates for the wedge, depth is not incremental. | §1 + §5 + §13 execution plan | DL-5 (activation gate) |
| **Reserved sibling** | A sibling domain enumerated in §5 with a folder reservation but no concrete migration yet. Reserved siblings stay at substrate-primitive / sibling-folder reservation level until activated. | §5 + §12 | DL-5 (reserved status) + Section 12.A reservation |

---

## 3. Dimensional matrix (the cells substrate must accommodate)

| Axis | Equally-admitted values |
|---|---|
| Care delivery model | DTC telehealth · in-clinic · hybrid · procedural-day · concierge · multi-specialty group · medspa · surgery-center coordination |
| Clinical shape | episodic visit · longitudinal surveillance · procedural episode · subscription pharmacy · acute / urgent · screening / preventive · aesthetic recurring |
| Provider topology | single-provider · multi-provider collaborative · care team (proceduralist + consultant + primary + covering + MA + coordinator + injector + aesthetician) · cross-org referral |
| Revenue model | cash-pay · insurance-billed · subscription · hybrid · DTC retail · concierge membership · per-procedure · package |
| Communication ingress | outbound-only · inbound SMS · inbound voice · inbound fax · inbound email reply · portal message · scanned upload |
| Communication endpoints | single brand inbox · per-department · per-specialty · per-provider · per-location · AI-operated endpoint. **Binding response per DL-11 + §7.14:** three architecturally distinct messaging surfaces — (1) patient-facing chat (`messages` substrate, c2 shipped); (2) external-line / pre-account contact-identity + ops triage (future preflight); (3) internal team collaboration (`internal_collaboration/` sibling #19; ad-hoc + persistent-group + 1:1; first-class multi-object attachment via `internal_thread_object_links`; patient-less threads first-class). Per-department / per-specialty / per-provider / per-location surfaces in internal_collaboration ride persistent-group threads with role/capability-derived membership. AI-operated endpoints are admissible substrate-side per primitive #11 (AI orchestration runtime); operational shape future. |
| Scheduling depth | provider-only · provider + room · provider + room + equipment · multi-suite · cross-facility · surgery-center · device + technician |
| Identity scope | single org · multi-brand within org · multi-org with shared patient · cross-org referral with packet handoff. **Binding response per DL-10 + §7.13:** `patients` canonical within an OMNI identity namespace (deployment / org PHI boundary today); `patient_relationship` (primitive #19) per-relationship scope; cross-namespace federation explicit / consent-aware / audited (not auto-shared) |
| Patient role | episodic patient · longitudinal patient · subscription member · returning post-procedure patient · surveillance cohort · recurring aesthetic patient |
| Operational data ingress | structured intake · OCR fax · uploaded PDF · imaging DICOM · pathology report · lab result · device telemetry · vendor webhook · point-of-sale |
| Procedural category | operative · therapeutic · diagnostic acquisition · surveillance · interpretive · device · multi-category (e.g., colonoscopy = operative + diagnostic + surveillance) |

The c1–c9 build delivers **one cell**: DTC telehealth + episodic + single-provider + subscription + outbound-only + provider-only + single-org + episodic-patient. That is one cell, not the substrate's intended shape.

---

## 4. Substrate primitives (21)

Substrate primitives are cross-cutting infrastructure every sibling depends on. They are NOT siblings; modeling one as a sibling is a category error. Each primitive admits per §1.8 admission criteria. Primitives 1–15 carry forward from prior doctrine; primitives 16–21 are added by this document based on the primitive-extraction audit.

| # | Primitive | What it owns | Status |
|---|---|---|---|
| 1 | Audit + lineage | append-only audit_events; typed catalog; cross-system provenance | Built |
| 2 | Authority + capability | requireCapability discipline; staff_profiles + role bundles + capability grants; SensitiveAccessReason | Built |
| 3 | Disclosure-policy | tier_1/2/3/4 privacy; channel-specific clamps; pathway sensitivity. **Distinct from consent (#21).** Disclosure-policy gates outbound communication; consent gates clinical operation performance. | Built (engine + clamps) |
| 4 | Multi-tenant primitives | orgs + brands + locations; current_org_id() RLS; data_environment dispatch gate | Built (orgs/brands/data_env); locations partial; cross-org reserved |
| 5 | Patient identity (cross-channel, cross-org) | patient_id as universal handle; phone/email/portal-login as identity claims; future cross-org matching | Built (patient_id); cross-channel + cross-org partial / reserved |
| 6 | Longitudinal operational memory | patient_timeline_events; reconciled views (Section 1K.5.A); longitudinal evidence linking | Built (timeline + reconciled view); evidence linking reserved |
| 7 | Idempotent orchestration | SECURITY DEFINER orchestrators; idempotency_key discipline | Built |
| 8 | Pathway sensitivity | pathway_code + pathway_sensitivity primitive; clamps; future cross-pathway resolution | Built |
| 9 | Typed event catalog | audit_events.action + patient_timeline_events.event_type + RuleTrigger.event_type, separated by concern; CI lint | Built |
| 10 | Communication rails | email · SMS · in-app · voice · fax · push · portal — channels feeding outbound_jobs / patient_inbox_messages | Built (email, SMS, in_app); voice + fax + inbound rails reserved |
| 11 | AI orchestration runtime | bounded LLM/embedding execution; provider authority gating; AI-as-actor with audit + capability + disclosure-policy + consent | Reserved |
| 12 | Recall / surveillance primitive | scheduled future obligations attached to patient + finding/case/program; materialization-into-task-when-due; missed-recall escalation; provenance | Reserved (substrate, NOT a sibling) |
| 13 | Typed Rule + Template registry + DELETE-AFTER-PARITY discipline | repo/rules/, repo/templates/, anti-overload binding (ADR §7.8), scaffold lint check 5 | Built |
| 14 | Specimen / artifact chain-of-custody | longitudinal lifecycle for physical specimens (biopsy, lab samples, pathology slides) + digital artifacts (DICOM, OCR'd PDFs, photos); collected → labeled → sent → resulted → reviewed → communicated → closed | Reserved |
| 15 | Body-map / anatomical anchor | coordinates + laterality + region; used by tracked findings, interventions, photo media, clinical documentation; cross-cutting | Reserved |
| 16 (NEW) | **External-system ingest** | reconcile-and-attach pipeline for inbound artifacts from external systems: ASC EMR result PDFs, outside imaging reports, outside lab results, fax inbound, OCR'd consent forms, pathology PDFs, vendor-system webhooks, prior-record packets from referrals. Cross-cutting; substrate-shaped. **Not a sibling.** Used by labs_lifecycle, referral_lifecycle, procedure_lifecycle, clinical_finding, revenue_cycle, communications_lifecycle, and charting/documentation surfaces. Future contributors must NOT carve it into `external_documents_lifecycle/`, `fax_lifecycle/`, `asc_results_lifecycle/`, or `integration_lifecycle/`. Every inbound external source goes through this one substrate primitive. | Reserved |
| 17 (NEW) | **Encounter** | clinical contact event: in-clinic visit, telehealth call, async chart review, message-triggered review, post-op follow-up call, vendor-handoff review. Container for procedures + interventions + observations + decisions + communications. Distinct from appointment (intent), distinct from procedure_episode (procedural arc). The encounter is the operational session in which the procedural arc occurs. Cross-cutting; recurs across every sibling. | Reserved |
| 18 (NEW) | **Plan / protocol** | future-directed structured intent: cadence, criteria, escalation rules. Owns: GLP-1 titration plan, post-Mohs surveillance schedule, infusion protocol, refill cadence, post-op care plan, hormone dose-adjustment protocol, peptide-cycle protocol. Distinct from recall (#12) — recall is one obligation; plan is the rule-set that *generates* recalls. Distinct from typed Rules (#13) — Rules are governance / orchestration policy; Plans are clinical / operational protocols attached to patients + tracked objects. | Reserved |
| 19 (NEW) | **`patient_relationship`** (formalization of "Continuity relationship") | The patient's **operational relationship** with a clinic / brand / practice / business context. **Generalized per DL-10**: scoped by **brand, clinic, practice_entity, location, specialty line, legal entity, parent org, separate deployment (post-federation), referral partner, care team, or endpoint / business phone line**. Owns: relationship status (active / disengaged / lost-to-followup / churned / transferred / merged), consents, intake requirements, memberships / packages, appointments, care programs, messages thread context, clinical chart context for that relationship, assigned care team, communication endpoint, relationship-specific preferences, provider continuity within that relationship, patient role within that relationship, care-arc start/end. Distinct from patient identity (#5) which is the row; `patient_relationship` is the **longitudinal operational arc on top of identity**. **Admission guardrail (binding per DL-10):** a scoping dimension becomes a `patient_relationship` boundary **only when it owns distinct operational state** (consents, care programs, messaging, memberships, clinical context, staff access, lifecycle state, or legal/compliance boundary). Otherwise the dimension is an attribute of an existing relationship, not a separate relationship row. Endpoint, care team, and location are *possible* boundaries; they are *not automatic* boundaries. **Brand is one of N — not the only — boundary.** Without this primitive, the system collapses "this patient" with "this patient's brand-specific operational world," losing multi-brand / multi-clinic / Mindbody-style identity-reuse-with-relationship-scoping. | **LANDED (doctrine via DL-10); substrate migration future** |
| 20 (NEW) | **Vendor / partner interaction** | transactional state with external parties. Owns: pharmacy vendor account state, lab vendor account, ASC partnership credentialing, imaging-center contract, payment processor account, telephony vendor account, referral-partner relationship. Distinct from external-system ingest (#16) — ingest is artifact-flow (we receive a thing); vendor interaction is account / contract / credentialing / on-time-rate / rate-card / integration state. | Reserved |
| 21 (NEW) | **Consent / authorization** | legal permission boundary for clinical operations: procedure consent, photo consent, records release, financial responsibility, anesthesia consent, pathology consent, photo-use-for-marketing, telehealth consent, AI-rendering consent. Split from disclosure-policy (#3) because the two govern different domains: disclosure-policy clamps outbound communication, consent gates clinical operation performance. A photo-use-for-marketing consent does not gate communication; a disclosure-policy clamp does not gate procedure performance. | Reserved |

**External-system ingest binding (specific):** when an outpatient proceduralist does a procedure at a surgery center, OMNI does NOT replace the ASC EMR. OMNI ingests the report/result/note via primitive #16 and maintains longitudinal continuity over it. Same pattern for outside cardiology imaging, outside pulm sleep studies, outside derm pathology, outside referrals returning records, outside primary-care notes from a Hims-style continuity care patient who later sees a specialist. The ingest pipeline is governance-bound: artifacts have provenance + identity-matched-to-patient + linked-to-operational-object + audit.

**Substrate primitive count: 21.**

### 4.A Primitive description updates (DL-12 binding)

DL-12 (thread + participant lifecycle as cross-substrate discipline + fax canonical placement + 28 foundational clarifications) extends the descriptions of primitives **#1, #2, #10, #11, #13, #16** without changing the primitive count. The table rows above remain the canonical short-form; the binding extensions below are the long-form rationale that the primitives consume across messaging substrates (c2 patient chat, c1 patient_inbox_messages, future internal_collaboration sibling #19, future external-line, future patient_action_items, fax rail + artifact + queue).

**Primitive #1 (Audit + lineage) — actor_type taxonomy + message edit/correction/retraction history preservation.** Per DL-12 invariants 15 + 23 + 33. Formalize the **`actor_type` taxonomy** as a binding audit primitive: `patient` / `staff` / **`staff_with_ai_assist`** / `system` / `automation` / `ai_assisted`. Every substrate that admits non-staff authorship (`messages`, future `internal_threads`, `outbound_jobs`, future `patient_action_items`, `audit_events.actor_kind`) carries this typed field. **`staff_with_ai_assist`** (human accepted/edited/sent an AI draft — human is the responsible author; AI is provenance attachment via `ai_proposal_id` / `ai_confidence` / `ai_model` columns) is **distinct from `ai_assisted`** (AI is the actor; proposed/drafted but not yet human-accepted as author). The taxonomy distinguishes "Dr. X authored" from "Dr. X accepted an AI draft" from "the rules engine fired automatically" from "AI proposed; awaiting human review." **Authorship is never rewritten onto AI when a human accepted the message — matters legally and clinically.** **Message edit / correction / retraction / entered-in-error preserves history cross-substrate** (binding): edits NEVER rewrite original content; substrate retains `original_body` + `editor_staff_id` + `edited_at` + `reason_code` + `audit_events` row. UI may render corrected/current; history is queryable. Applies to patient chat `messages`, c1 `patient_inbox_messages`, future `internal_thread_messages`, fax message notes, staff DMs. Future patient-proxy / caregiver / parent-on-behalf-of-minor actor types are a named future preflight (DL-12 closing handoff) — taxonomy admits extension via `patient_proxy` / `caregiver` / `parent_on_behalf_of_minor` when the relationship layer per DL-10 is ready.

**Primitive #2 (Authority + capability) — deactivation discipline + thread search/visibility as capability-gated + scope-aware + notification preferences subordinate to capability.** Per DL-12 invariants 1 + 19 + 22. **Tie staff deactivation discipline to the capability layer**: deactivation is a `staff_profiles` lifecycle event with downstream capability + audit implications (revoke future access; reassign open ownership tuples per §1G.1 owner cardinality; preserve historical authorship; cross-link §1D.3). **Extend to name thread search/discoverability/visibility as capability-gated + scope-aware operations** — search results filtered by participant membership + thread class + object/relationship access + sensitivity + explicit administrative authority. Five visibility classes (public/internal channels, private group, 1:1 DMs, patient/object-linked, restricted/sensitive) are first-class capability-system concerns. Admin/CMO/IT/compliance discovery is a distinct capability from ordinary search — audited + reason-coded + does NOT imply ordinary discoverability per anti-panopticon discipline (zone 53). **Notification preferences (patient and staff) are subordinate to capability** — staff prefs constrained by capability + role + on-call + thread class + assignment + escalation per §1D.3(c); patient prefs constrained by message intent + clinical/safety criticality + consent + disclosure policy per §1Q + §1Q.14.1(d).

**Primitive #10 (Communication rails) — fax dual-nature outbound rail + inbound artifact.** Per DL-12 fax canonical placement. Fax is **dual-nature**: (a) an **outbound communication rail** (patient or staff sends a fax to outside party — `outbound_jobs` channel) AND (b) an **inbound artifact** that arrives from outside parties (fax inbound ingestion — consumed by primitive #16). Cross-link to primitive #16 (External-system ingest) for the inbound consumer pattern. Fax is NEVER a new sibling — it composes from primitive #10 (rails) + primitive #16 (ingest) + §1P inbound classification + §1G.6.2 queue routing for ownership + future `provider_tasking` for assigned work + future c4 `patient_action_items` integration for resulting tasks. Voice + push notifications + portal rails reserved; future activation respects DL-12 cross-substrate lifecycle obligations (zones 43-67).

**Primitive #11 (AI orchestration runtime) — AI participation bounds + authorship attribution + anti-noise discipline + in-app AI Response Assist drafting surface.** Per DL-12 invariants 14, 16, 27, 39. Formalize AI participation bounds across thread substrates:

- **AI MAY**: summarize threads; classify urgency; route to owner/team; suggest titles; suggest owners; draft replies for human review/edit; propose action items; propose or create system-labeled threads with evidence + audit; detect duplicate threads; detect safety/Rx/adverse-event concerns; convert content to clinically-cautious language; make warmer/shorter/safer/patient-safe versions.
- **AI MAY NOT**: silently send automated patient-facing messages (automated/system/AI-generated patient-facing send path stays owned by §1Q + primitive #3 + primitive #13; human-authored patient chat per §1Q.14.1(b) is free-text under capability); resolve clinical state (canonical state lives in order/lab/Rx/action-item substrate per DL-7); impersonate staff; alter message history (immutable per audit primitive #1 + §1V.10(c)); create unowned threads (`owner` required at creation per §1G.1 ownership tuple); decide clinical outcomes (provider authority required per §1D); silently add/remove staff participants (capability-gated audited intervention per §1D.3(b)).
- **Authorship attribution rule (binding)**: human-accepted AI drafts are attributed to the HUMAN with actor type `staff_with_ai_assist` per primitive #1 taxonomy and AI-assist provenance attached; AI does NOT rewrite authorship onto itself.
- **Anti-noise discipline (binding)**: automation/AI-created threads must carry dedupe key + cooldown window + severity threshold + ownership controls; high-sensitivity clinical / Rx / safety threads MAY be auto-created ONLY under approved deterministic trigger policy or MUST enter a human triage/proposal state before becoming an active thread (defense against AI thread spam per zone 51 — protects provider efficiency).
- **In-app AI Response Assist (binding future capability)**: PHI-safe, context-aware drafting surface for staff responding to patient-facing or external-line conversations. **Replaces the screenshot-into-external-AI workaround** (named anti-pattern: staff currently paste RingCentral / SMS / patient-portal thread context into external ChatGPT for polished reply drafts — PHI exfiltration at scale per zone 67). Response Assist uses authorized thread context directly. Capabilities: summarize / polish / propose patient-safe reply / suggest next action / convert to clinically cautious / make warmer-shorter-safer / draft from thread context. Final send remains human-approved (human clicks send) or governed by §1Q rule/template policy. Audit trail captures original context + AI draft + human edits + final sent body + human sender + AI provenance. Distinct from §1Q templates (templates = automated standardized outbound; response assist = contextual human drafting with AI polish). **Design rule (binding): "compliant workflow must be easier than the workaround"** — if in-app AI is worse than copy-paste-into-ChatGPT, staff route around it and platform compliance posture fails.

The runtime stays RESERVED at substrate level; the participation + drafting disciplines are binding doctrine via DL-12. Cross-link to §1N.8 + §1Q.14.1.

**Primitive #13 (Typed Rule + Template registry + DELETE-AFTER-PARITY discipline) — scope clarification for patient-facing send governance.** Per DL-12 invariants 12 + 13. Clarify scope is **automated / system / rule-fired / campaign / notification / AI-generated patient-facing send governance** (`repo/rules/` + `repo/templates/` + Section 1Q + disclosure-policy gates + privacy-tier clamps + prohibited-claims discipline). **Human-authored patient chat replies composed in the portal chat surface by a capability-gated, audited staff member are NOT routed through the template engine** — they are free-text under capability + audit + PHI/relationship-scope rules per Section 1Q boundary (otherwise the doctrine would over-rigidify ordinary provider/staff portal messaging). **Internal staff snippets / handoff templates / escalation prompts / task templates are distinct** and live in internal_collaboration sibling territory (sibling #19 per DL-11), NOT in the patient-facing template registry. **When DL-11 sibling activates, internal snippets land in their own typed, versioned registry inside the sibling** — governance-distinct from patient-facing templates and cannot be used for external/patient-facing sends without explicit conversion through the patient-facing template/disclosure system. Thread surfaces RENDER template-generated patient-facing messages but are NOT the template engine.

**Primitive #16 (External-system ingest) — fax inbound consumer.** Per DL-12 fax canonical placement. **Fax inbound is one consumer of primitive #16** (alongside ASC EMR result PDFs, outside imaging reports, outside lab results, OCR'd consent forms, pathology PDFs, vendor-system webhooks, prior-record packets from referrals — the already-enumerated set). Fax inbound flow: rail → artifact → primitive #16 reconcile-and-attach pipeline (provenance + identity-matched-to-patient + linked-to-operational-object + audit) → §1P inbound classification → routing → optional task / internal thread / chart-filing disposition. Cross-link primitive #10 (rail) + §1P (classification) + §1G.6.2 (queue routing) + DL-12 invariant 31 (three-state attachment lifecycle).

### 4.B Primitive description updates (DL-13 binding)

DL-13 (rail-agnostic substrate spine + OMNI canonical + settings precedence + deterministic outbound 8-gate + display-projection-not-substrate) extends the descriptions of primitives **#1, #5, #10, #11, #16** without changing the primitive count. The table rows above remain the canonical short-form; the binding extensions below are the long-form rationale that primitives consume across the external-communications surface (sibling #20 introduced in §5 below) and any future rail-bound domain (labs / payments / EHR-export / future).

**Primitive #1 (Audit + lineage) — `system` / `automation` actor_type as first-class for deterministic outbound + `sent_as_source` attribution.** Per DL-13 invariant 4 (8-gate deterministic outbound). Extend §4.A `actor_type` taxonomy enforcement: when a rule-fired / template-fired / campaign / scheduled-send / inbound-auto-reply message dispatches via the deterministic 8-gate (per MAIN §1Q.14.2), the substrate row records `actor_type = system` (or `automation`) with full audit lineage to `rule_id` / `template_id` / `trigger_event_id`. **AI confirmation is NOT a participant identity for external sends per DL-13 invariant 4** — `ai_assisted` alone is NOT admitted on external-line sends; human-approved AI drafts record as `staff_with_ai_assist` (per §4.A), and deterministic outbound records as `system` / `automation` with full template/rule provenance. Cross-substrate columns recommended on external_conversation_messages: `sent_as_source ∈ {manual, template, rule, campaign, scheduled, ai_assisted_human_approved}` distinguishing manual human authoring from rule-fired automation from human-approved AI drafts; `display_sender_label` for patient-side rendering distinct from `author_staff_id`. Cross-link DL-13 + §1N.9 + §1Q.14.2.

**Primitive #5 (Patient identity) — handle-vs-person + relationship-aware identity discipline extended to external-line.** Per DL-13 invariant 2 (OMNI canonical) + DL-10 extension (handle-vs-person). `patient_id` remains the universal handle. Extend the cross-channel + cross-org identity discipline: **phone / email / WhatsApp / social handle is a handle, NOT always a person** — first-class `contact_identities` substrate (per MAIN §1J.13) with normalized + indexed `phone_e164`; future `contact_identity_handles` admits multi-handle attachment without JSONB stuffing. **OMNI is canonical for identity / contact data; vendor address books / contact stores are local convenience only — NEVER authoritative.** Manual patient/account creation in scheduling publishes contact handles into OMNI; vendor is adopt-not-write. Identity-altering operations (create / update / dedupe / merge / split / link / unlink) are capability-gated + audited + reason-coded. The discipline applies to external-line first, but the pattern (OMNI as canonical contact substrate; vendor adopt-not-write) generalizes to any future rail-bound identity-publishing domain. Cross-link DL-13 + DL-10 + MAIN §1J.13.

**Primitive #10 (Communication rails) — rail-agnostic substrate + vendor-confined adapter discipline.** Per DL-13 invariant 1 (rail-agnostic substrate + vendor-confined adapter pattern). Extend prior fax dual-nature description: communication rails (email / SMS / in-app / voice / fax / push / portal / WhatsApp / RCS / future) compose against **rail-agnostic substrate** — generic `provider_*` columns on substrate tables (e.g., `provider_message_sid`, `provider_status`, `provider_endpoint_id` for messages; `provider_voice_call_sid` for calls; `provider_fax_sid` for fax). **Vendor-specific code is confined behind an adapter boundary inside the relevant sibling directory.** External-line rail adapters live under `lib/external-rails/<provider>/` (e.g., `lib/external-rails/twilio/`, future `lib/external-rails/ringcentral/`, `lib/external-rails/messagebird/`). The broader DL-13 vendor-confined-adapter pattern applies to other primitive domains (labs ingest / payments / EHR-export / future) through their own adapter boundaries inside their respective sibling directories — NOT all under `lib/external-rails/`. **Substrate schema NEVER carries vendor-specific columns** — generic `provider_*` only; vendor specifics live in `provider_metadata jsonb` if needed. Future rails compose by adding a new sibling adapter — never substrate schema change. Cross-link DL-13 + §5 sibling #20 (`external_communications/`) + §7.13.13 substrate spine.

**Primitive #10 (DL-14 binding — COMMITTED RENAME per Phase A.2; supersedes prior "Phase 0 will decide" wording).** Per DL-14 invariants 3 + 5 + 14 + 16 (Phase A.2; non-reopenable). **Primitive #10 is the universal `orchestration_actions` substrate.** The legacy `outbound_jobs` table-name is one-projection legacy artifact (patient-outbound messages); `orchestration_actions` is the binding semantic name going forward.

The substrate hosts ALL CNS action types as projections beneath, enumerated by binding enum sets:

**`action_type` enum (the WHAT — 16 types):** `patient_message` (SMS / MMS / email / in-app / push) / `provider_notification` / `provider_task` / `staff_task` / `ops_alert` / `passive_awareness_marker` (with `OMNI sent → unseen → seen → acknowledged` state machine per `§1N.10`) / `scheduling_hold` / `booking_action` / `deposit_link_request` / `suppression` / `cancellation` / `wait` (scheduled_followup) / `ai_proposal_request` / `escalation` / `lifecycle_state_update` / `no_op` (audited).

**`origin` enum (the WHY — 9 origins):** `staff_manual` (human staff typed and sent; fast path per `§1N.16`) / `system_lifecycle` / `ai_assisted_human_approved` / `bounded_autopilot` / `campaign` / `rule_fired` / `template_fired` / `scheduled_send` / `retry_of` / `provider_ai_assisted` (provider clinical reply per §1N.23).

**`actor_target` enum (WHO receives — 9 targets):** `patient` / `provider` / `front_desk` / `care_coordinator` / `manager` / `compliance_admin` / `ai_planner` / `queue_team` / `external_vendor_system`.

**`channel` enum:** `sms` / `mms` / `email` / `in_app` / `push` / `voice` / `voicemail` / `provider_inbox` / `staff_task_surface` / `manager_dashboard` / `vendor_api` / `internal_thread`.

**`control_state` enum (WHO is driving — 9 states per §1N.19):** `human_controlled` / `ai_observing` / `ai_drafting` / `ai_recommending` / `human_approved_execution` / `bounded_autopilot` / `provider_review_required` / `staff_takeover` / `paused`.

**Lifecycle states (12 states per DL-14 invariant 16):** `proposed` / `validated` / `queued` / `blocked` / `suppressed` / `waiting` / `executing` / `succeeded` / `failed` / `canceled` / `superseded` / `expired`. Every state transition writes an `audit_events` row.

**6-layer event-sourced + CQRS pattern (per DL-14 invariant 16):** orchestration_action is L3 in the substrate hierarchy: event (L1) → cns_decision (L2) → orchestration_action (L3) → projection (L4) → attempt (L5) → outcome (L6). Each layer is a separate substrate record; layers MUST NOT be conflated. Every rail/surface execution row (projection + attempt) carries `orchestration_action_id` FK back to the intent record.

**Parent state-machine (per DL-14 invariant 17):** multi-step pathway journeys live on `orchestration_runs` (parent state machine). Atomic step emissions are `orchestration_actions`. Many actions per run; some actions standalone (`orchestration_run_id = NULL` for one-off manual / single-rule firings). Pathway state, wait expiries, retry counts, suppression flags, current-step, scheduled-next-step live on the run row, NEVER on action rows.

**Phase 0 / Phase 1 audit scope (binding limit):** Phase 0/1 audit only HOW the rename lands physically (in-place repurpose of `outbound_jobs` table with `action_kind` discriminator + projection-specific columns or child tables; OR new `orchestration_actions` table + legacy `outbound_jobs` projection view; OR compatibility wrapper for in-flight callers; OR staged migration). Phase 0 does NOT reopen the conceptual rename decision — that is committed by DL-14.

Cross-link DL-14 invariants 3 + 5 + 14 + 16 + 17 + foundational §0 + §8.1 clauses 54 + 55 + 57 + 58 + `§1N.10`-`§1N.26` + Phase 0 stress scenarios 12-27 + ADR §7.17.

**Primitive #11 (AI orchestration runtime) — AI-not-as-participant on external conversations + Response Assist scope clarification.** Per DL-13 invariant 4 ("rejected anti-pattern: AI-as-participant on external conversations"). Extend §4.A primitive #11 description: on external-line / external_conversations specifically, **AI is NEVER a thread participant or first-class authoring identity**. AI Response Assist (per §4.A primitive #11) operates on external-line drafting surfaces (compose-an-SMS-reply / compose-a-voicemail-callback-script / draft-an-MMS-response) but final send is always either (a) `staff_with_ai_assist` (human approves + clicks send) or (b) `system` / `automation` deterministic-policy-approved (rule/template fires after 8-gate per §1Q.14.2). **AI does not autonomously dispatch external messages; AI cannot impersonate staff or patient on external rails.** Cross-link DL-13 + §4.A primitive #11 + MAIN §1N.9.

**Primitive #11 (DL-14 binding — SCOPE bound by Phase A.2 invariants 7-22; ADEQUACY of existing implementation is Phase 0).** Per DL-14 invariants 5 + 7-22 (Phase A.2; supersedes prior "Phase 0 will decide scope" wording).

**DL-14 binds primitive #11 SCOPE (binding):**

- **AI hybrid interpretation + action-assist layer** subordinate to deterministic CNS policy (invariant 7).
- **7 autonomy modes** (off / observe-classify / draft-only / recommend-action / human-approved-execute / bounded-autopilot CNS-executed / escalate-only) configurable per 7-layer policy resolution; default conservative (invariants 8 + 11).
- **4 AI capability envelopes** (operations / clinical / content / safety-triage) orthogonal to §1N.2 role surfaces; envelopes communicate through typed CNS artifacts (invariant 9; catalog in MAIN DL-14 and `§1N.10`).
- **AI invocation audit lineage** (ai_jurisdiction + role_surface + ai_assist_mode + ai_policy_config_id + policy_resolution_trail + model_version + prompt_id + classifier_version + context_packet_id + context_snapshot_hash + tools_invoked + output_proposal_id + ai_confidence + autonomy_mode + policy_checks_passed + clinical_risk_interrupt_fired + staff_authoring_lock_active + human_accepted/edited/rejected + regenerate_requested + intent_preserved + material_additions_suggested + human_accepted_additions + tool_failure_reason + revalidation_passed + final_action_id + outcome_feedback_id + retry_of_action_id) (invariant 10).
- **Re-prompt / retry / no-response stateful follow-up pathway** with pre-fire revalidation (invariant 12 + §1N.16).
- **NO global meta-AI / supervisor-AI / orchestration-AI** — CNS is the supervisor (invariant 13).
- **AI Compose Assist global capability** across all staff/provider composition surfaces with role-scoped action sets; **Context Packet Builder** as shared substrate spine producing mode-specific scoped packets; **5 invocation modes** (polish_existing_draft / draft_reply_from_context / suggest_next_action / bounded_autopilot_recommendation / provider_draft_refinement) (invariant 18 + §1N.23). **Polish gets RICH relevant context** — distinction between modes is OUTPUT AUTHORITY, NOT context size.
- **AI intent preservation** in Polish + Draft Refinement — material additions surfaced as flagged suggestions; never silently inserted (invariant 19 + §1N.24).
- **Prompt injection defense + instruction hierarchy** — inbound text UNTRUSTED data, never instructions. Hierarchy: system/CNS > org > provider/staff > approved knowledge > inbound (invariant 20 + §1N.25).
- **Live-state revalidation before action firing + tool failure fallback** — tool failure → human workflow, never hallucinated success (invariant 21 + §1N.26).
- **Multi-tenant + federation-aware AI scoping** — cross-tenant isolation binding; federated-org AI shares state ONLY per active A1 permeability policy (invariant 22 + §1N.20).

**Provider AI-assisted clinical reply discipline (binding per §1N.23):** provider invokes AI clinical assist → AI generates clinical summary / suggested assessment / patient-facing draft / follow-up plan / warning signs → provider edits / approves / rejects / regenerates → final send recorded as `provider_ai_assisted` origin + full audit lineage. Provider owns clinical authority. AI cannot independently diagnose / prescribe / clear contraindications / create clinical truth (preserves `§1K.5.A`). Patient sees provider attribution.

**Adequacy of existing AI implementation against this bound scope is Phase 0.** Phase 0 audits: does current code implement classifier + planner + draftsman + bounded executor + ranker + ambiguity-detector + learning-loop participant against this scope, or is it currently marketing-copy-shaped and must be broadened? Does the learning-loop substrate (AI accept/edit/reject feedback with full attachment depth) exist? Does the Context Packet Builder substrate exist?

Cross-link DL-14 invariants 5 + 7-22 + foundational §0 + §4.A primitive #11 + §1N.10-§1N.26 + Phase 0 stress scenarios 12-27 + ADR §7.17.

**Primitive #16 (External-system ingest) — external-line MMS / voicemail / annotated-image artifacts.** Per DL-13 invariant 1 + DL-12 invariant 31 5-disposition extension. Extend §4.A primitive #16: external-line inbound is one consumer of the external-system-ingest pipeline alongside fax inbound + ASC EMR + outside imaging + outside labs + OCR'd consents + vendor webhooks. **Voicemail audio + transcript + MMS photos / videos + annotated images + PDFs from external rails are first-class artifacts** stored on `external_conversation_artifacts` (per MAIN §1G.12(a)), classified by §1P.2 inbound atomization, and projected to patient context (when contact identity links to patient_relationship) via the 5-disposition pattern (link / attach / chart_file / safety_task / reject_spam) per DL-12 invariant 31 extension. **No auto-chart-filing on projection** — chart filing is a separate capability-gated step. Cross-link DL-13 + DL-12 + MAIN §1P.15 + MAIN §1J.13.

---

## 5. Operational sibling domains (19)

### Active (5)

| Sibling | Discriminant | Owns |
|---|---|---|
| `account_lifecycle/` | `account_event_kind` (when extended) | identity verification, patient onboarding, account state |
| `billing_subscription/` | `billing_event_kind` (when extended) | synchronous PSP transactions, subscriptions, refunds, dunning |
| `clinical_decision/` | `case_kind` | provider clinical decisions on treatment requests / care programs |
| `fulfillment_lifecycle/` | `order_kind` | orders that ship from vendor/pharmacy to patient (treatment_order, supplement_order, lab_kit_order) |
| `pharmacy_lifecycle/` | `pharmacy_event_kind` | prescription dispatch, refill initiation, future fill/dispense events |

### Reserved by prior doctrine (7)

| Sibling | Discriminant | Owns |
|---|---|---|
| `scheduling_lifecycle/` | `scheduling_event_kind` | provider calendars · room/suite/equipment scheduling · surgery-center coordination · multi-resource bookings · prep dependencies |
| `labs_lifecycle/` | `lab_event_kind` | **Despite the historical name `labs_lifecycle/`, this sibling covers diagnostic acquisition + interpretation artifacts broadly: labs, pathology, imaging (X-ray, MRI, CT, ultrasound), sleep studies, PFTs, ECGs, stress tests, biopsy-derived results.** Sibling rename is deferred indefinitely; the doctrine name does the binding work. **Two sub-shapes within the sibling:** (a) **acquisition lifecycle** — order placed → specimen collected / study performed / image captured → result returned → reviewed → communicated → linked to tracked object / plan; (b) **interpretive workflow** — provider work on the acquisition artifact: radiology read, pathology read, sleep-study interpretation, PFT interpretation, ECG interpretation. Both sub-shapes share the same sibling because their lifecycles intersect (interpretation feeds the same result-review-communication pipeline). |
| `provider_tasking/` | `task_kind` | provider/staff operational tasks; queues; SLAs; escalation; ownership |
| `communications_lifecycle/` | `comm_event_kind` | multi-channel inbound + outbound; cross-channel thread continuity; per-endpoint routing; AI-endpoint operation |
| `retail_lifecycle/` | `commerce_event_kind` | non-Rx retail (supplements, OTC, devices, in-clinic point-of-sale) distinct from clinical orders |
| `marketing_lifecycle/` | `marketing_event_kind` | re-engagement journeys, lifecycle campaigns, attribution, consent-bound sends |
| `clinical_record/` | n/a (rendered surface) | charting + notes + problem list + addendums; rendered FROM substrate primitives + sibling state, not authored independently |

### Reserved by this amendment (6 new)

| Sibling | Discriminant | Owns | Why distinct |
|---|---|---|---|
| `clinical_finding/` | `finding_kind` (`dermatology_lesion`, `pulmonary_nodule`, `gi_polyp`, `orthopedic_joint`, `aesthetic_dynamic_rhytid_track`, `aesthetic_volume_loss_zone`, `surveillance_marker`, ...) | longitudinal entity identity for tracked clinical objects (mole, nodule, polyp, joint, lesion, photo set, rhytid track, filler zone) | Without this, surveillance / aesthetic / procedural specialties have no architectural home |
| `procedure_lifecycle/` | `procedure_episode_kind` (with named variants — see §5.1 below) | procedure-as-episode: pre-op clearance + consent packet + supplies + room/equipment + provider/team + intra-procedure interventions + post-op + pathology/lab follow-up + complications + surveillance + chargeable artifacts. **Multi-category episodes admitted** — one episode can span multiple categories (colonoscopy = operative + diagnostic + surveillance) | NOT scheduling (scheduling is one input); NOT orders (orders is an output); NOT lab acquisition (which lives in labs_lifecycle) |
| `revenue_cycle/` | `claim_event_kind` | **Day 0 activation scope (per DL-5 + §1.5):** charge capture from clinical events / interventions + intervention-derived charge lineage + cash-pay receipts + subscription billing + package billing + checkout payload assembly. **Reserved-but-deferred future RCM scope (per §12.A):** ICD/CPT coding entities + claim transmission + payer adjudication + denial + appeal + ERA/EOB ingestion + AR/balances + full RCM team workflows + patient responsibility. The full sibling scope includes future RCM; the wedge clinic only activates the Day 0 charge-lineage subset. | MUST be separate from `billing_subscription/`. Async multi-party state machines vs synchronous PSP. Conflation is an ontology trap. |
| `authorization_lifecycle/` | `auth_event_kind` | eligibility verification + prior-auth requests + payer-rule lookups + auth status + expiration + appeal | Distinct from claims (gates clinical operations) |
| `referral_lifecycle/` | `referral_event_kind` | referral as object: reason + urgency + records packet + external recipient + consent + status + appointment confirmation + result returned + loop closure | Loop closure is the multi-week / often-manual operational pain that destroys continuity in real clinics |
| `inventory_lifecycle/` (NEW) | `inventory_event_kind` | lot tracking, expiry, vendor sourcing, point-of-sale dispense, in-clinic injectable / implant / device / supplement tracking, consumption from interventions | Distinct from retail commerce (which is the customer-facing transaction) and pharmacy fulfillment (which is the prescription pipeline). Cosmetic/procedural inventory has its own semantics. |

### Reserved by DL-11 (1 new — added 2026-05-11 late evening)

| Sibling | Discriminant | Owns | Why distinct |
|---|---|---|---|
| **`internal_collaboration/` (NEW per DL-11)** | `internal_thread_kind` (`ad_hoc` / `persistent_group` / `direct_message`) + `internal_thread_object_link.object_type` polymorphic on attached objects | **Staff-to-staff threaded discussion** with first-class object attachment (patient / patient_relationship / lab_order / lab_result / appointment / treatment_order / clinical_visit / care_program / patient_document / patient_message / outbound_job / billing_exception / adverse_event) AND first-class admission for **patient-less threads** (persistent group channels — billing / front_desk / on_call / safety_committee / compliance — with role/capability-derived membership; 1:1 direct messages; free-floating ops discussion). Owns: thread substrate (`internal_threads`), message substrate (`internal_thread_messages`), participant substrate (`internal_thread_participants` with explicit + derived membership), object-attachment substrate (`internal_thread_object_links` as typed multi-object child table), mention notification semantics (emit `outbound_jobs.send_in_app` + `audit_events`; **never** `patient_timeline_events` unless explicit patient-record state change), sensitivity tagging, relationship-scoping per DL-10. | **Distinct from `messages` (c2 patient chat)** — staff-only, different audit / access model, multi-object attachment, patient-less admission. **Distinct from `provider_tasking/`** — task is queue-of-ownership state; thread is conversation state; they compose via `link_role='produced_task'` but neither replaces the other. **Distinct from external-line substrate** — external-line ops triage is its own substrate (Layer 3 in `communications_topology.md` §11); internal_collaboration threads can be spawned from / linked to external-line triage but the external conversation is not an internal thread. **Distinct from `communications_lifecycle/`** — communications_lifecycle reserved for patient-facing multi-channel rails; internal_collaboration is staff-only. |

### Reserved by DL-13 (1 new — added 2026-05-12)

| Sibling | Discriminant | Owns | Why distinct |
|---|---|---|---|
| **`external_communications/` (NEW per DL-13)** | `external_conversation_kind` (`sms` / `voice` / `voicemail` / `mms` / `whatsapp` / `rcs` / `email` / `fax_inbound` / future) + `org_communication_endpoint.intent_class` (`marketing` / `clinical` / `billing` / `support` / `aftercare` / `appointment` / `transactional` / `mixed`) + `provider_*` for rail-agnostic vendor binding | **External-line first-touch + ongoing external conversations across SMS, voice, voicemail, MMS, WhatsApp, RCS, email-to-SMS, fax-inbound, and future channels** — distinct from internal_collaboration (staff-only) and from c1/c2 patient-facing portal messaging (in-app, patient-authenticated). Owns: `org_communication_endpoints` (per-endpoint config — brand / location / intent_class / business hours / voicemail / forwarding / access scope / `provider_id`), `external_conversations` (conversation thread, endpoint-scoped + contact-identity-linked), `external_conversation_messages` (inbound + outbound with `provider_message_sid` / `provider_status` / `direction` / `intent_class` / `author_staff_id?` / `outbound_endpoint_id` / `display_sender_label` / `sent_as_source`), `external_conversation_artifacts` (voicemail audio + transcript + MMS media + annotated images + PDFs as first-class artifacts — NOT message metadata blobs), `external_message_delivery_events` (rail callback state machine), `external_conversation_drafts` (per-staff + optional shared-queue + AI-proposal with stale-warning), and the queue/owner tuples consumed from `provider_tasking/` + §1G.6.2. **Rail-agnostic substrate** — generic `provider_*` columns; vendor-specific code confined behind adapter boundary at `lib/external-rails/<provider>/` (e.g., `lib/external-rails/twilio/`). | **Distinct from `communications_lifecycle/`** — communications_lifecycle is the reserved sibling for patient-facing multi-channel rails (c1 patient_inbox_messages backbone, outbound_jobs); external_communications is the **operator-facing first-touch surface** for external rails (unknown-number SMS, voicemail triage, MMS from prospective patients, fax inbound for clinical workflows). Conversations on external_communications MAY be projected to a patient_relationship per §1J.13 + DL-12 invariant 31 5-disposition, at which point ongoing patient-facing communication continues either on external_communications (the operator-side substrate) OR is mirrored into communications_lifecycle's outbound pipeline (patient-side substrate) per endpoint policy. **Distinct from `internal_collaboration/`** — internal_collaboration is staff-to-staff threaded discussion; external_communications is staff-to-external-party (prospective patient / patient / vendor / partner) communication over a rail. Internal threads MAY be spawned from external_conversations (link semantics per DL-12 + §1G.12) but the external conversation is NOT an internal thread. **Distinct from `provider_tasking/`** — provider_tasking owns queues + claim/complete state; external_communications owns conversation + message content + delivery state. They compose via queue state tuples consumed from `provider_tasking/`. **Distinct from primitive #10 (Communication rails)** — primitive #10 is the rails abstraction (email/SMS/voice/fax/push/portal as channel types feeding outbound_jobs); external_communications is the **conversation-state sibling** that consumes rails for external (operator-facing first-touch) work. |

**Total siblings: 20** (5 active, 15 reserved). +1 from DL-11, +1 from DL-13.

### Sibling boundary discipline (binding)

Every sibling's documentation MUST name what it does NOT own with cross-references. Examples:

- `procedure_lifecycle/` does NOT own scheduling (→ `scheduling_lifecycle/`); does NOT own claim transmission (→ `revenue_cycle/`); does NOT own pathology routing (→ `labs_lifecycle/`); does NOT own consent capture (→ substrate); does NOT own inventory consumption (→ `inventory_lifecycle/`, derived).
- `referral_lifecycle/` does NOT own communications (→ `communications_lifecycle/`); does NOT own appointment booking at receiving clinic (→ that org's `scheduling_lifecycle/`); does NOT own result interpretation (→ `clinical_decision/` or `labs_lifecycle/`).
- `revenue_cycle/` does NOT own subscription billing (→ `billing_subscription/`); does NOT own retail commerce (→ `retail_lifecycle/`); does NOT own prior auth (→ `authorization_lifecycle/`).
- `inventory_lifecycle/` does NOT own customer-facing retail transactions (→ `retail_lifecycle/`); does NOT own pharmacy fill pipeline (→ `pharmacy_lifecycle/`); does NOT own procedure documentation (→ `procedure_lifecycle/`, attached as derived).
- `internal_collaboration/` (NEW per DL-11) does NOT own patient-facing chat (→ c2 `messages` substrate); does NOT own external-line / pre-account communications (→ future external-line preflight; external-line is Layer 3 in `communications_topology.md` §11); does NOT own task / queue / SLA / escalation (→ `provider_tasking/`; threads compose with tasks via `internal_thread_object_links.link_role = 'produced_task'`); does NOT own staff directory / presence / on-call coverage (→ future doctrine arc per DL-11 non-foreclosure clause; today fragments live in `staff_profiles` + Section 1D + §1G.7 operational state + §1G.8 My Status); does NOT own patient timeline (→ substrate; mentions emit `outbound_jobs.send_in_app` + `audit_events` only, **never** `patient_timeline_events` unless explicit patient-record state change).

This boundary discipline is binding doctrine. Every sibling activation MUST include its boundary statement in rule + template file headers.

### 5.1 procedure_episode_kind discriminant variants (binding)

`procedure_lifecycle/` is one sibling. Internally it admits multiple operational shapes via the `procedure_episode_kind` discriminant. Each variant captures a distinct **operational episode shape**, NOT a billing category and NOT a specialty label. The discriminant axis is what the operational arc looks like, not what the clinic calls it or how the payer codes it.

| Variant | Definition | Examples |
|---|---|---|
| `operative_episode` | Physical procedural work on or inside the patient, including surgical, endoscopic, excisional, ablative, staged, and procedure-suite work. | vasectomy, rhinoplasty, Mohs, skin excision, joint surgery, hernia repair, septoplasty, colonoscopy as endoscopic operative platform, EGD, cardiac cath as interventional operative, hair transplant, capsule endoscopy, ultrasound-guided biopsy |
| `therapeutic_intervention_episode` | Non-operative therapeutic acts on the patient. | cortisone injection, Botox, filler, laser treatment, IV infusion, peripheral nerve block, chemotherapy administration, biologic infusion, allergy shot, PRP injection |
| `diagnostic_acquisition_episode` | Episodes whose primary purpose is acquiring diagnostic data. | sleep study, PFT, X-ray, MRI, CT, ultrasound, ECG, stress test, Holter monitor, pure-diagnostic biopsy. (Diagnostic-platform procedures like colonoscopy / EGD / cardiac cath are primary `operative_episode` with secondary `diagnostic_acquisition`.) |
| `surveillance_episode` | Recall-driven encounter that may not include intervention. | annual skin exam, surveillance colonoscopy when scheduled by recall and not by symptom, post-cancer follow-up, lesion-check visit, post-procedure surveillance check |
| `interpretive_workflow_episode` | Provider work on a non-acquisition artifact. | radiology read, pathology read, sleep-study interpretation, PFT interpretation, ECG interpretation, outside-records review |
| `device_equipment_episode` | Device-fitting / device-management work. | BiPAP fitting, pacemaker placement, infusion-pump titration, CGM application, hearing aid fitting, prosthesis fitting, remote BP monitor placement |

**Multi-category reality (binding):** a single procedure episode CAN span multiple categories. The discriminant carries the **primary** category; secondary categories live in `episode.secondary_categories[]`. Examples:

- Colonoscopy (screening) = primary `operative_episode` + secondary `diagnostic_acquisition_episode` + secondary `surveillance_episode`
- EGD with biopsy = primary `operative_episode` + secondary `diagnostic_acquisition_episode`
- Cardiac cath with stenting = primary `operative_episode` + secondary `diagnostic_acquisition_episode` + secondary `device_equipment_episode`
- Cortisone injection = primary `therapeutic_intervention_episode` (single category)
- Sleep study (in-lab, with read) = primary `diagnostic_acquisition_episode` + secondary `interpretive_workflow_episode`
- Skin excision (Mohs) = primary `operative_episode` + secondary `diagnostic_acquisition_episode` (pathology) + secondary `surveillance_episode`
- BiPAP fitting after sleep study = primary `device_equipment_episode` + secondary `therapeutic_intervention_episode`
- IV biologic infusion (recurring) = primary `therapeutic_intervention_episode` (single, but inventory-heavy + recurring)

The anti-overload binding pattern (ADR §7.8) applies to procedure_episode_kind. Each category-specific concern that needs its own discriminant goes in `procedure_lifecycle/`'s metadata or attached siblings; never bypass via overlay-local primitive. **Procedure_lifecycle stays one sibling.**

---

## 5.2 Owned diagnostic acquisition + structured result authoring (binding sub-doctrine)

*Bound by **DL-9** in MAIN. Long-form rationale + the ~50-shape specialty register live in §6.6 below.*

### 5.2.0 Binding doctrine

**Owned tests are authored. External tests are ingested, reconciled, and interpreted. Both resolve into the same continuity graph.**

OMNI is the **authoring system** for in-office diagnostic acquisition and procedural result documentation — not merely an importer of external PDFs. The current foundational doc reservation language for `labs_lifecycle/` (§5) and `procedure_lifecycle/` §5.1 names diagnostic acquisition + interpretive workflow as sub-shapes; this §5.2 binds the underlying doctrine that prevents "diagnostic lifecycle = PDF storage + interpretation overlay" as a regression mode. Without §5.2 + DL-9, a future contributor reading the doc could conclude that owned in-office tests are a sub-case of substrate primitive #16 external-system ingest. They are not.

A real outpatient EMR for the wedge clinic must handle: structured visit notes + structured procedure reports + structured diagnostic reports + discrete observations + raw artifacts + interpretations + signoffs + problem / finding updates + recall plans + billing / charge lineage + patient communication. For a c-scope clinic running OMNI, OMNI must be able to **create** the colonoscopy report, not just attach a PDF. For a cardiology office, OMNI must support the sleep-study acquisition / interpretation workflow or at least native structured interpretation over an acquired artifact. For an in-office PFT, OMNI must store the raw artifact + discrete values + interpretation + comparison to prior + tracked-pulmonary-object update + recall + communication. For a urology clinic doing void-flow studies, OMNI must own the uroflowmetry session + tracked LUTS object + interpretation. **That is what `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/` mean when activated at Athena-lab-module-class on Day 0 (§1.5) — not a fancy wrapper around external PDFs.**

### 5.2.1 Three producer lanes (plus hybrid)

| Producer | Entry mode | Example |
|---|---|---|
| **Clinic performs test; OMNI authors result** | Native structured template (`omni_native_authoring`) | Colonoscopy findings template, sleep-study interpretation, PFT interpretation, ECG interpretation, urodynamics report, colposcopy findings, EEG read, OCT interpretation, audiogram, joint-aspiration findings, RFA procedure note, c-scope, EGD with biopsy capture, in-office Botox / filler procedure note |
| **Clinic performs test; device exports artifact / data** | Device / file / API feed (`in_office_device_file` / `in_office_device_feed`) | PFT machine PDF / CSV / discrete measurements; ECG waveform / report; ultrasound DICOM; endoscopy tower image / video; in-office POC analyzer values; spirometry feed; CGM device upload; Holter device download |
| **External partner performs test** | Substrate primitive #16 external-system ingest (`external_partner_result`) | Quest / Labcorp result; outside imaging report; outside pathology PDF; ASC procedure note; outside Holter; outside sleep study; faxed consult note; vendor webhook; prior-record packet |
| **External partner performs test; clinic interprets** (hybrid) | `external_partner_result` + `omni_native_authoring` interpretive workflow | Outside MRI with clinic radiology read; outside Holter with clinic cardiology interpretation; outside sleep study with clinic sleep-medicine interpretation; outside path slides with clinic pathologist read |

The current foundational doc + MAIN over-reference lane 3 (substrate primitive #16). §5.2 binds lanes 1 + 2 explicitly + names lane 4 as the hybrid case.

### 5.2.2 Common diagnostic / procedural test outputs (taxonomy of what gets produced)

Most outpatient diagnostic and procedural tests produce some combination of these output types. Each maps to specific substrate primitives and sibling consumers:

| Output type | Substrate primitive | Where it lands |
|---|---|---|
| **Raw artifact** (PDF, DICOM, waveform file, video, image, CSV) | #16 external ingest if outside; document routing (Section 1O in MAIN) for inbound; `clinical_object_evidence` pointer for owned in-office capture | Pointer-only on `clinical_object_evidence`; blob storage outside row |
| **Derived measurements** (FEV1, AHI, ECG intervals, OCT thicknesses, audiogram thresholds, urodynamic flow rates, ABI values) | Section 1M `patient_state_observations` + `patient_lab_observations` | `labs_lifecycle/` consumes; `clinical_finding/` references |
| **Rendered report / template output** (c-scope report, sleep interpretation, PFT report, ECG read, urodynamics report) | DL-7 structured-first authoring + DL-9 native authoring; renders from structured-state | `clinical_record/` (final output) + `labs_lifecycle/` or `procedure_lifecycle/` (authoring origin) |
| **Discrete observations** (LOINC-coded results) | Section 1K.5.A clinical assertion ledger | `patient_clinical_assertions` (Layer 2 of four-layer model) |
| **Provider interpretation** (radiology read, pathology impression, sleep interpretation, ECG interpretation) | DL-7 + DL-9 + Section 1G.2 clinical signoff | `clinical_visits` row referencing `diagnostic_acquisition_session` |
| **Billing / code artifacts** (CPT codes, ICD-10 codes, panel codes) | Layer 4 of four-layer model + `revenue_cycle/` Day 0 charge lineage | `intervention_to_billing_link` rows |

No specialty-specific table needed. Every output type composes from the existing primitive set.

### 5.2.3 The `diagnostic_acquisition_session` operational object

A new operational object (substrate-shaped; **not** a sibling; **not** a new substrate primitive). Lives across `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/` consumption surfaces. It is the unit-of-work that ties order → device → operator → artifacts → measurements → interpretation → communication → tracked object → billing → recall.

**Lifecycle:**

```
order / indication
  → accession / study identifier
  → scheduled / performed timestamp
  → acquisition device / source (output_source taxonomy below)
  → operator / technician
  → raw artifact(s) (pointer to clinical_object_evidence)
  → discrete measurements (1M / lab observations)
  → structured result template (DL-7 / DL-9 authoring)
  → interpretation / signoff (clinical_visits row referencing this session)
  → patient communication (communications_lifecycle)
  → tracked-object update (Section 1W tracked_clinical_objects)
  → billing / charge lineage (intervention_to_billing_link)
  → recall / task (provider_tasking + scheduling_lifecycle)
```

**Placement:**

- **`labs_lifecycle/`** owns the canonical `diagnostic_acquisition_session` rows for labs / pathology / imaging / sleep / PFT / ECG / stress / urodynamics / EEG / OCT / audiogram / and the broader specialty universe in §6.6.
- **`procedure_lifecycle/`** owns sessions when the acquisition is part of a procedural episode (colonoscopy + biopsy, EGD + biopsy, cardiac cath + diagnostic angiography, Mohs + frozen path, joint aspiration with culture). The session is attached to the `procedure_episode` row; `procedure_episode_kind` carries the discriminant variant from §5.1.
- **`clinical_record/`** consumes the rendered report output for chart inclusion. Authoring stays in the producing sibling; chart rendering is the receiver.
- **`clinical_finding/`** receives the longitudinal tracked-object updates (Section 1W layer 1).

**Object identity rules:**

- Stable `acquisition_session_id` across the full lifecycle (provisional through signoff through subsequent corrections).
- Append-only events; corrections / addenda emit new rows with pointer to original (per `patient_clinical_assertions` discipline).
- One acquisition_session may produce many tracked-object updates (one PFT updates pulmonary-function tracked object; one cardiac stress updates ischemia tracked object + arrhythmia tracked object).
- Multiple acquisition_sessions may attach to one procedural episode (Mohs has multiple stages, each producing its own pathology session).

### 5.2.4 Output-source taxonomy (binding enum)

Every diagnostic / procedural result row carries one value from this enum on a `output_source` field (or equivalent metadata key). The taxonomy is the operational projection of the four lanes in §5.2.1. Future contributors must **not** lump these into "ingest" or "external."

| Value | Meaning | Example |
|---|---|---|
| `omni_native_authoring` | Result authored directly in OMNI structured template | Provider authors c-scope findings in OMNI; PFT interpretation typed in OMNI; sleep-study read entered in OMNI |
| `in_office_device_file` | Clinic-owned device exports PDF / CSV / XML / DICOM file that is attached + parsed | PFT machine exports PDF + discrete CSV; ECG machine exports waveform + measurements; ultrasound exports DICOM |
| `in_office_device_feed` | Clinic-owned device sends HL7 / FHIR / DICOM / API feed in real-time | In-office analyzer HL7 result feed; ECG modality LIS feed; spirometry FHIR observation feed |
| `vendor_cloud_import` | Vendor portal / cloud produces result artifact or API feed (clinic doesn't own device, but uses vendor service) | CGM vendor cloud (Dexcom Clarity / Libre) syncs values; sleep-study vendor cloud delivers scored study; remote-monitoring vendor pushes data |
| `external_partner_result` | Outside lab / imaging / pathology / ASC sends result via substrate primitive #16 | Quest / Labcorp HL7 result; outside imaging center report; outside path PDF; ASC procedure note via fax / portal |
| `manual_transcription` | Staff enters values from paper / PDF when no integration exists | Patient brings paper outside ECG; staff manually enters values into structured template |

**Provenance binding:** `output_source` is one of the seven system primitives (#2 source / provenance) — every row carries it; orchestrator refuses rows missing it.

### 5.2.5 Standards alignment (admit, not require)

The substrate must **admit** these standards when activated; implementation timing follows DL-5 activation gate + §1.8 admission criteria. Non-foreclosure per DL-6.

- **DICOM** — imaging modalities (X-ray, CT, MRI, US, mammography); endoscopy visible-light image / video capture; whole-slide pathology imaging; ophthalmology imaging (OCT, fundus, FA). The substrate must accommodate DICOM tags + study UIDs + series structure when image-acquisition workflows activate.
- **HL7 v2** — discrete result messages from labs (ORU^R01), ECG, spirometry, in-office analyzers. The substrate must accommodate HL7 v2 OBR / OBX message structure when feed-based lab / device acquisition activates.
- **FHIR** — Observation + DiagnosticReport resources for discrete results + rendered reports; Procedure resource for procedural episodes; ServiceRequest for orders. The substrate must accommodate FHIR resource identity + reference graph when interoperability activation arrives.
- **LOINC** — measurement terminology for discrete observations across labs / vital signs / functional measurements / questionnaires. The substrate must accommodate LOINC codes on `patient_lab_observations` + `patient_state_observations` rows.

These standards are **already implicit** in Section 1L labs reservation in MAIN; §5.2.5 names them explicitly so future contributors know the substrate is non-foreclosed against full standards alignment.

### 5.2.6 Anti-patterns (forbidden by DL-9)

- **"Diagnostic lifecycle = PDF storage + interpretation overlay"** — DL-9 forbids this framing. Owned tests are authored, not ingested.
- **"Owned in-office tests are a sub-case of substrate primitive #16"** — #16 is for **outside** systems only. Owned acquisition lives in `labs_lifecycle/` + `procedure_lifecycle/` via `diagnostic_acquisition_session` + DL-7 structured-first authoring.
- **Specialty-specific acquisition tables** (`urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`) — DL-8 admission criteria reject these by default. Every shape in §6.6 composes from the existing primitive set + `diagnostic_acquisition_session`.
- **Routing all diagnostic authoring through `clinical_record/`** — `labs_lifecycle/` + `procedure_lifecycle/` own their own structured-result templates within their sibling boundaries. `clinical_record/` is a **consumer** of rendered output, not the canonical authoring sibling for diagnostic / procedural results.
- **Reducing diagnostic depth to "PDF upload + narrative interpretation"** — DL-7 structured-first authoring forbids it. The structured template is canonical; the rendered note is the projection.
- **Bypassing substrate primitive #16 for inbound external artifacts** — every outside artifact enters via #16. Side-channels (direct blob upload, ad-hoc fax handler, vendor-specific shortcut) are forbidden.

### 5.2.7 Cross-references

- **DL-9 in MAIN** binds this sub-doctrine globally.
- **§6.6 below** demonstrates substrate non-foreclosure across ~50 specialty test/procedure shapes spanning 12 specialty categories.
- **§1W.6 step 7 in MAIN** ties structured-first authoring + diagnostic acquisition to the encounter → intervention → checkout continuity chain.
- **§1W.9 in MAIN** ties `labs_lifecycle/` + `procedure_lifecycle/` consumption to DL-9.
- **Substrate primitive #16** owns outside-artifact ingest only.
- **Section 1L in MAIN** is the existing labs foundation; §5.2 elevates the doctrine layer.
- **DL-7** governs structured-first authoring globally; DL-9 is the diagnostic-specific projection.

### 5.3 Sibling-boundary discipline extensions (DL-12 binding) — fax-as-composed + attachments-as-first-class-artifact

Per DL-12, §5 sibling-boundary discipline extends with two binding guards that prevent two specific proliferation/conflation failure modes the lock catches. **Neither requires a new sibling**; both compose from existing substrate.

#### 5.3(a) Fax-as-composed-not-sibling guard

**Fax is a composition of primitive #10 (Communication rails — fax dual-nature outbound rail + inbound artifact) + primitive #16 (External-system ingest — fax inbound consumer) + §1P (inbound narrative atomization — fax classification + routing) + future `provider_tasking/` (when activated, for fax-derived work assignment) + future c4 `patient_action_items` (when activated, for fax-derived patient tasks).** **NOT a new `fax_lifecycle/` sibling, NOT a `inbound_fax/` sibling, NOT an `outbound_fax/` sibling.** Same DL-8 admission discipline that already forbids `external_documents_lifecycle/` proliferation. Internal_collaboration threads (DL-11 sibling #19, when activated) may attach fax artifacts via `internal_thread_object_links` for staff discussion — internal_collaboration does NOT own the fax queue ownership; that remains §1G.6.2 / §1P / future provider_tasking territory. Radar zone 46 watches for "fax-as-new-sibling OR stuffed into internal_collaboration" proliferation drift.

#### 5.3(b) Attachments-as-first-class-artifact-not-thread-metadata-blob guard

**Every attachment** (photo / PDF / fax page / screenshot / lab doc / post-procedure image / OCR'd consent / dictation audio / annotated screenshot / aftercare derivative / short video / instruction sheet / voice note where policy allows) **carries scan status + file type + uploader staff_id + object link + sensitivity classification + retention class + audit**. Attachments live in their own artifact substrate (`parsed_intake_documents` / `document_processing_runs` / future media/artifact storage). **Threads attach / render / preview via reference**; **NEVER embed raw bytes in `message.body` or any thread metadata blob**. Threads do NOT own raw file safety / OCR / document classification / chart filing — those stay in their canonical substrates per DL-8 sibling boundary + DL-9 diagnostic acquisition + Section 1O document substrate.

##### 5.3(b.i) Three-state attachment lifecycle with capability-gated chart-filing disposition (binding)

Every attachment moves through three operational states:

1. **Chat attachment** — thread artifact with uploader + timestamp + file type + scan status + sensitivity + linked thread + optional linked patient/relationship/object + audit. **NOT yet in chart.**
2. **Reviewed / classified artifact** — has explicit disposition (one of): `outside_records`, `clinically_relevant`, `ops_context_only`, `discard`, `restrict`, `irrelevant`.
3. **Filed chart / canonical document** — formal record state. Lives in proper substrate (chart documents / lab results / order attachments / clinical-visit attachments / adverse-event record).

**Transition from state-2 to state-3 requires explicit capability-gated disposition action with audit** — uploading a PDF/photo/screenshot/fax into a thread does NOT automatically file it to the chart, lab/order/Rx/document substrate, adverse-event record, or any patient-visible surface. Filing is a deliberate, audited operator action per DL-7 canonical-state-in-substrate. **Clinical truth pollution is forbidden** (radar zone 59 — attachment auto-files to chart without explicit capability-gated disposition).

##### 5.3(b.ii) iOS-flattened-upload vs OMNI-native-markup distinction with annotation as first-class derived artifact (binding)

Two attachment-with-markup modes recognized:

- **(a) Externally flattened upload.** User marked up a screenshot / photo on iOS / mobile / external tool BEFORE upload; OMNI receives the flattened marked-up image as the **source artifact** for that thread. **OMNI does NOT require or attempt to reconstruct the pre-markup camera-roll original** (just like iMessage — OMNI never had it).
- **(b) OMNI-native markup.** Markup created INSIDE OMNI against an existing artifact. **Original artifact preserved** AND markup becomes derived artifact / annotation layer with author + timestamp + linked source artifact id + thread/object context + sensitivity + audit.

**Annotation NEVER overwrites the original** (radar zone 60 — OMNI-native markup overwrites original source artifact = legal/audit/clinical defensibility loss). Markup stored as derived artifact, NOT embedded as raw bytes in `message.body` metadata blob.

##### 5.3(b.iii) PDFs and chart/document artifacts stricter (binding)

**Original PDF always preserved**; annotated PDF is a derived artifact or annotation layer. Chart filing of annotated PDF requires explicit disposition action (per 5.3(b.i)). OCR / classification stays in document pipeline (`parsed_intake_documents` / `document_processing_runs`); threads only render or link the document, never own it.

##### 5.3(b.iv) Filing disposition state taxonomy (UI may eventually surface)

State labels: **Uploaded** / **Scanned** / **Internal-thread attachment only** / **Linked to patient context** / **Pending classification** / **Filed to chart** / **Rejected — not clinically relevant** / **Restricted — sensitive** / **Entered in error**. Each transition carries actor + reason + audit per 5.3(b.i) + 5.3(b.ii) + primitive #1.

##### 5.3(b.v) Patient-facing media admits parity with internal media but with STRICTER discipline (binding)

**Patient-facing chat admits rich-media + annotation parity** with internal media (photos / screenshots / annotated images / PDFs / aftercare artifacts / short video / instruction sheets / voice notes where policy allows). Same iOS-flattened-vs-OMNI-native-markup distinction (b.ii) applies — e.g., provider opens canonical aftercare plan inside OMNI, annotates the relevant section, OMNI creates annotated derivative, derivative sent in patient chat, canonical aftercare plan remains source document.

**Stricter than internal**: every patient-facing media send is **scan-checked + PHI/privacy-classified + sender-attributed + relationship-scoped + retained as patient-visible communication record + audited + capability-gated by sender role**. **Human-authored staff/provider media sends are allowed under capability + audit** (no template engine required for ordinary clinical communication per §1Q.14.1(b)). **Automated / system-generated / AI-generated patient-facing media sends MUST route through §1Q template + disclosure-policy + privacy-tier + prohibited-claims governance.**

**Video discipline**: transcoding + size limits + virus scan + thumbnail generation + retention rules; for SMS rails, large/sensitive media prefers "you have a new secure message" + portal link over direct MMS PHI exposure per §1Q disclosure policy. **Media sent in patient chat is patient-visible communication record but does NOT replace the canonical document/order/lab/Rx/chart substrate per DL-7** — annotated aftercare derivative is a communication artifact; the canonical aftercare plan/template stays in the document substrate (filing requires explicit disposition per (b.i)).

**Binds RingCentral-style daily-care use case** for medspa / aesthetics / aftercare / post-procedure / telehealth / HRT / GLP-1 / wound-care workflows.

#### 5.3(c) External-communications-as-sibling-with-rail-agnostic-substrate guard (DL-13 binding)

Per DL-13 invariant 1 (rail-agnostic substrate + vendor-confined adapter pattern) + sibling #20 admission. **External-line / external-communications is a NEW sibling** (`external_communications/`) reserved per DL-13 + DL-11 §"e0 future preflight". The sibling does NOT collapse into `communications_lifecycle/` (which is reserved for patient-facing multi-channel rails / outbound_jobs / c1 patient_inbox_messages backbone), does NOT collapse into `internal_collaboration/` (staff-to-staff), and does NOT live as a primitive-only composition like fax-as-composed (per 5.3(a)) — external_communications **owns conversation state + delivery state + draft state + endpoint configuration as first-class substrate**, which is more state than fax's composition admits and more operator-surface complexity than primitive #10 alone supports.

**Rail-agnostic substrate (binding).** Substrate carries generic `provider_*` columns: `provider_message_sid`, `provider_status`, `provider_endpoint_id`, `provider_voice_call_sid`, `provider_fax_sid`, etc. **Substrate schema NEVER carries vendor-specific columns** (no `twilio_message_sid`, no `ringcentral_extension_id`); vendor-specific extension lives in `provider_metadata jsonb` only. The rail adapter translates between vendor wire format and substrate columns.

**Vendor-confined adapter pattern (binding).** External-line rail adapters live under `lib/external-rails/<provider>/` (e.g., `lib/external-rails/twilio/twilio_adapter.ts`, future `lib/external-rails/ringcentral/`, `lib/external-rails/messagebird/`). Adapter responsibilities: (i) translate inbound rail webhooks → substrate rows; (ii) translate outbound substrate → rail API calls; (iii) handle vendor-specific status/error codes; (iv) handle vendor-specific rate-limit / retry / authentication; (v) expose `RailCapability` to substrate (which rich features the rail supports — delivery receipts, MMS size limits, voicemail transcription, reactions, RCS rich cards, etc.). **No business logic / governance / 8-gate / consent logic lives in the adapter** — gates run at substrate orchestration layer per §1Q.14.2 + §1N.9.

**Broader DL-13 adapter pattern (binding for non-external-line domains).** The vendor-confined-adapter pattern applies to other rail-bound domains via THEIR OWN adapter boundaries inside THEIR OWN sibling directories — NOT all under `lib/external-rails/`. Examples: lab vendor adapters live under `labs_lifecycle/lib/lab-rails/<vendor>/` (Quest / LabCorp / Olink); payment processor adapters live under `billing_subscription/lib/psp-adapters/<provider>/` (Stripe / Adyen); EHR-export adapters live under future `export_lifecycle/lib/ehr-export/<vendor>/`; pharmacy adapters under `pharmacy_lifecycle/lib/pharmacy-rails/<vendor>/`. **The pattern is "vendor-confined-adapter inside the relevant sibling," not "everything goes under `lib/external-rails/`."**

**Radar zone 69 watches** for rail-bypass drift (business logic creeping into adapters; vendor-specific columns leaking onto substrate; vendor IDs becoming primary keys; substrate becoming Twilio-shaped). Radar zone 70 watches for vendor-as-contact-source drift (vendor address book consulted for OMNI identity resolution per primitive #5 + §1J.13 — REJECTED).

---

## 6. Specialty overlays (third tier)

A specialty overlay composes substrate + siblings into a specialty-shaped workflow. Overlays do NOT have their own ontology layer; they are configurations + producer-site filters + UI surfaces over the universal sibling set.

**Overlays named below are representative wedge shapes, not exhaustive.** The full specialty admissibility register (~50 shapes across 12 specialties demonstrating substrate non-foreclosure) lives in §6.6. Future overlays for any specialty / clinic configuration compose from the same substrate + sibling set; do not invent new ontology layers per DL-8.

### Examples

- **Aesthetic medicine overlay (medspa, plastics-cosmetic, dermatology-cosmetic)**: clinical_finding (rhytid tracks, volume-loss zones, pigmentation patterns) + procedure_lifecycle (multi-intervention sessions: Botox + filler + laser in one visit) + inventory_lifecycle (Botox/Dysport/Restylane/Juvederm lot tracking) + scheduling_lifecycle (provider + room) + recall (4-month touch-up cadence) + photo media + revenue_cycle (cash-pay, package, membership, hybrid)
- **Derm-Mohs overlay**: clinical_finding (lesion) + procedure_lifecycle (Mohs stages) + labs_lifecycle (pathology) + photo media + recall (surveillance) + revenue_cycle (insurance + cash-pay)
- **Plastics-rhino overlay**: clinical_decision (consultation) + imaging via labs_lifecycle + procedure_lifecycle + revenue_cycle + billing_subscription (financing) + post-op continuity via clinical_decision + recall + photo set
- **GI surveillance overlay**: clinical_finding (polyp) + recall (surveillance interval) + procedure_lifecycle (colonoscopy) + labs_lifecycle (pathology) + revenue_cycle (insurance)
- **Uro-vasectomy-day overlay**: procedure_lifecycle (×N episodes) + scheduling_lifecycle (rooms) + consent + clearance + post-op verification + revenue_cycle (cash + insurance)
- **Pulm-BiPAP overlay**: external study via labs_lifecycle + device adherence via clinical_decision + recurring monitoring via recall + insurance
- **Fertility-cycle overlay**: labs_lifecycle (hormone panels) + procedure_lifecycle (retrievals) + pharmacy_lifecycle (stim meds) + multi-resource scheduling + revenue_cycle + billing_subscription
- **Concierge multispecialty overlay**: care_team across multiple providers + multi-tracked-finding continuity + recall + billing_subscription (membership) + revenue_cycle (insurance overlay)

Each overlay is a recipe: which substrate primitives + which siblings + which producer-site filters + which UI surfaces. **No new ontology.** No new audit namespace. No new discriminant. No new state machine.

### Overlay rules (binding)

1. Overlays compose substrate + siblings; they do not extend the substrate or the sibling set.
2. An overlay-specific concern that does not fit any sibling is the signal that a sibling is missing — either reserve a new sibling, or extend an existing sibling's discriminant via ADR §7.8 binding pattern. NEVER bypass the sibling set with an overlay-local primitive.
3. Overlay-specific UI components, producer-site filters, recall configurations, and rule registrations are allowed. Overlay-specific ontology is forbidden.
4. Overlays do not own audit namespaces. Audit namespaces live with siblings.
5. Multi-overlay clinics (e.g., a derm group practice with Mohs + plastics + general derm + medspa) are equally first-class. The substrate must admit overlay composition.

---

## 6.5 Primitive extraction test (not specialty accretion)

The grid below is **not a roadmap list, not a specialty-commitment list, and not a specialty audit**. It is a **primitive-extraction validation grid**. The 12 rows below were chosen to stress-test primitive sufficiency across the dimensional matrix (§3). Each row asks whether a real outpatient / procedural / longitudinal-care workflow can be represented by the same substrate primitives (§4) + sibling domains (§5) + overlay tier (§6) + four-layer epistemic model (§7) + universal flow grammar (§1.7), **without inventing a specialty-specific sibling or substrate primitive**. **If a row cannot be decomposed cleanly, the primitive set is incomplete.** The grid is the substrate's pressure test, not its scope. **The broader specialty-shape register — 50+ shapes across 12 specialties demonstrating substrate non-foreclosure — lives in §6.6.**

### Columns

- **Use case** — the named workflow / procedure / care episode.
- **Persistent objects** — what tracked clinical objects (§7 layer 1) are involved.
- **Episode / intervention type** — primary + secondary `procedure_episode_kind` (§5.1).
- **Evidence / artifacts** — what acquisitions / interpretations / media / external artifacts are produced.
- **External systems** — where ingest (#16) / vendor interaction (#20) is involved.
- **Future obligations** — what recall / plan / task / continuity-relationship state is created.
- **Inventory / resources** — what `inventory_lifecycle/` consumption + `scheduling_lifecycle/` resources are involved.
- **Billing implications** — `revenue_cycle/` + `billing_subscription/` implications.
- **Communication moments** — what `communications_lifecycle/` engagement happens.
- **Primitives used** — the set of substrate primitives + siblings the workflow composes.
- **New primitive needed?** — yes / no. **If yes, the substrate set is incomplete.**

### Pressure-test grid (~50 use cases)

| Use case | Persistent objects | Episode type (primary / secondary) | Evidence / artifacts | External systems | Future obligations | Inventory / resources | Billing implications | Communication moments | Primitives used | New primitive needed? |
|---|---|---|---|---|---|---|---|---|---|---|
| **DTC obesity / GLP-1 program** | obesity trajectory, GLP-1 titration plan | therapeutic_intervention | rx, weight log, side-effect log | pharmacy vendor (compounding), lab vendor (initial labs) | recall (refill cadence), plan (titration), continuity relationship | medication (vendor-fulfilled), no in-clinic | subscription | intake, dose-change, refill, side-effect | substrate 1–18 + clinical_finding + pharmacy + billing_subscription + communications | no |
| **HRT (testosterone / estrogen) follow-up** | hormone trajectory, dose plan | therapeutic_intervention (rx) + diagnostic_acquisition (labs) | lab panels, dose history | lab vendor | recall (q3mo lab + dose review), plan (titration) | medication, lab kit | subscription + lab cash-pay | lab review, dose adjustment | substrate 1–21 + clinical_finding + labs + pharmacy + billing_subscription | no |
| **Peptide / longevity clinic continuation** | longevity panel trajectory | therapeutic_intervention + diagnostic_acquisition | comprehensive panels, peptide rx | compounding pharmacy, lab vendor | recall (panel cadence), plan (peptide protocol) | peptide vials, lab kits | cash subscription | panel review, plan adjustment | substrate 1–21 + clinical_finding + pharmacy + labs + billing_subscription | no |
| **Acne isotretinoin monitoring** | acne trajectory, hepatotoxicity surveillance | therapeutic_intervention + diagnostic_acquisition | iPLEDGE compliance, lab panels | iPLEDGE registry, lab vendor | recall (monthly lab + visit), plan (iso protocol), consent (iPLEDGE) | medication | insurance + cash | monthly compliance + lab | substrate 1–21 + clinical_finding + labs + pharmacy + revenue_cycle + consent #21 | no |
| **Botox session (medspa)** | rhytid tracks (glabella, frontalis, crow's feet, masseter) | therapeutic_intervention | photos, injection map | none required | recall (4mo touch-up), continuity relationship | Botox vials (lot, expiry) | cash + package | pre/post care, scheduling | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle | no |
| **Filler session (medspa)** | volume-loss zones (NL folds, lips, cheeks, tear trough) | therapeutic_intervention | photos, injection map | none | recall (varies by product, 9–18mo), continuity relationship | Restylane / Juvederm syringes (lot) | cash + package | pre/post care | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle | no |
| **Laser resurfacing / IPL** | pigmentation pattern, sun damage | therapeutic_intervention | before/after photos | none | recall (series cadence), plan (treatment series) | laser tip (consumable) + room | cash + package | pre/post care, healing check | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle + communications | no |
| **Mohs (multi-stage)** | lesion + surgical margin | operative + diagnostic_acquisition + surveillance | frozen + permanent path, photos | pathology lab (sometimes external via #16) | recall (surveillance), plan (skin-cancer screening cadence), consent | scopes / supplies / closure materials | insurance + cash | pre-op consent, post-op care, path result | substrate 1–21 + clinical_finding + procedure + labs + recall + revenue_cycle | no |
| **Skin excision with pathology** | lesion | operative + diagnostic_acquisition + surveillance | path PDF | pathology lab | recall (path-driven follow-up) | excision supplies | insurance + cash | path result + plan | substrate 1–21 + clinical_finding + procedure + labs + revenue_cycle | no |
| **Lesion surveillance visit** | tracked lesions | surveillance | photos | none | recall (next interval) | none | insurance | scheduling, photo capture | substrate 1–21 + clinical_finding + procedure + recall | no |
| **Colonoscopy (screening)** | colon polyps | operative + diagnostic_acquisition + surveillance | path, photos, scope report | ASC EMR (via #16 if external), path lab | recall (3/5/10yr per finding), plan (screening cadence), consent | scope, biopsy supplies, anesthesia time, suite | insurance | prep instructions, post-op summary, path result | substrate 1–21 + clinical_finding + procedure + labs + recall + scheduling + revenue_cycle + ingest #16 | no |
| **EGD with biopsy** | upper-GI findings | operative + diagnostic_acquisition | path, scope report | path lab, ASC EMR if external | recall (per finding), plan | scope, biopsy supplies, anesthesia, suite | insurance | prep, post-op, path result | same as colonoscopy minus surveillance-by-default | no |
| **Capsule endoscopy** | small-bowel findings | diagnostic_acquisition + interpretive_workflow | capsule images, read | imaging vendor (via #16) | recall driven by findings | capsule device | insurance | result + plan | substrate 1–21 + clinical_finding + labs + revenue_cycle + ingest #16 | no |
| **Cardiac cath (diagnostic + stent)** | coronary lesion / stent | operative + diagnostic_acquisition + device_equipment | imaging, stent record | ASC EMR (cath lab), device manufacturer | recall (post-PCI follow-up), plan (DAPT, surveillance) | catheters, contrast, stents (lot tracking critical), suite | insurance (high complexity) | pre/post care, follow-up | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle + ingest #16 | no |
| **Stress test** | cardiac status trajectory | diagnostic_acquisition + interpretive_workflow | ECG strips, image stress, read | imaging vendor sometimes | recall (post-cardiac follow-up) | echo equipment + tech, room | insurance | result + plan | substrate 1–21 + clinical_finding + labs + revenue_cycle + scheduling | no |
| **Holter monitor** | arrhythmia trajectory | diagnostic_acquisition + interpretive_workflow + device_equipment | recording, read | monitor vendor | recall, plan | Holter device (lot, return logistics) | insurance | device pickup, result | substrate 1–21 + clinical_finding + labs + procedure + inventory + ingest #16 + vendor interaction #20 | no |
| **Pulmonary nodule follow-up** | pulm nodule trajectory | diagnostic_acquisition + surveillance | CT reads | imaging vendor (via #16) | recall (Fleischner-driven cadence), plan | none | insurance | result + surveillance plan | substrate 1–21 + clinical_finding + labs + recall + ingest #16 | no |
| **PFT** | pulm function trajectory | diagnostic_acquisition + interpretive_workflow | flow-volume loops, read | none if in-clinic | recall (annual, per condition) | PFT machine + tech, room | insurance | result + plan | substrate 1–21 + clinical_finding + labs + scheduling | no |
| **Sleep study (in-lab)** | sleep disorder trajectory | diagnostic_acquisition + interpretive_workflow | polysomnography record, read | sleep lab if external | recall (annual), plan (BiPAP/CPAP), downstream device episode | sleep-lab room + tech | insurance | result + device-fitting referral | substrate 1–21 + clinical_finding + labs + revenue_cycle + ingest #16 if external | no |
| **BiPAP / CPAP fitting** | sleep disorder trajectory + device | device_equipment + therapeutic_intervention | device record, mask fitting | DME vendor | recall (compliance check, mask replace), plan (compliance protocol) | BiPAP device, mask (DME via vendor #20) | insurance + DME | fitting, compliance check | substrate 1–21 + clinical_finding + procedure + inventory + vendor #20 + recall | no |
| **X-ray (in-clinic)** | joint / fracture / nodule | diagnostic_acquisition + interpretive_workflow | image, read | radiology read group sometimes (via #16) | recall driven by findings | X-ray equipment + tech, contrast if used | insurance | result | substrate 1–21 + clinical_finding + labs + ingest #16 if external read | no |
| **MRI report follow-up** | imaged region | interpretive_workflow + surveillance | outside MRI report | imaging center (via #16) | recall driven by findings | none in-clinic | insurance for follow-up | result review with patient | substrate 1–21 + clinical_finding + labs + ingest #16 | no |
| **Pathology-only result** | pre-existing tracked finding | interpretive_workflow | path PDF | path lab (via #16) | recall driven by findings, plan | none | insurance | result | substrate 1–21 + clinical_finding + labs + ingest #16 | no |
| **Cortisone injection (joint)** | joint trajectory | therapeutic_intervention | injection record, photo if guided | imaging vendor sometimes | recall (4–12wk), plan (max-injections protocol) | cortisone vial + needle (lot) | insurance | post-care, follow-up | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle | no |
| **PRP injection** | joint / soft-tissue trajectory | therapeutic_intervention | injection record, photo | none | recall (series cadence) | PRP processing kit, centrifuge | cash | post-care | substrate 1–21 + clinical_finding + procedure + inventory + revenue_cycle | no |
| **Ultrasound-guided biopsy** | tracked lesion | operative + diagnostic_acquisition | image, path | path lab | recall (path-driven) | needle, ultrasound | insurance | path result | substrate 1–21 + clinical_finding + procedure + labs + revenue_cycle + ingest #16 | no |
| **IV biologic infusion (e.g., Remicade)** | autoimmune condition trajectory + infusion plan | therapeutic_intervention | infusion record, vitals, lot | specialty pharmacy (buy-and-bill or DME) | recall (cycle cadence), plan (titration), continuity relationship | biologic vial (lot, expiry, expensive), infusion chair + nurse + line | insurance + buy-and-bill (revenue_cycle critical) | pre/post infusion, side-effect | substrate 1–21 + clinical_finding + procedure + inventory + scheduling + revenue_cycle + vendor #20 | no |
| **Chemotherapy infusion** | malignancy trajectory + chemo plan | therapeutic_intervention | infusion record, vitals, lot, complications | oncology lab + path lab | recall (cycle cadence), plan (regimen), surveillance, consent | chemo agents (lot, expiry, hazardous), chair + nurse + room + PPE | insurance | pre/post, side-effect, dose-modify | substrate 1–21 + clinical_finding + procedure + inventory + scheduling + revenue_cycle + ingest #16 + consent #21 | no |
| **Allergy shot clinic** | allergen trajectory + immunotherapy plan | therapeutic_intervention | injection record | none | recall (build-up + maintenance schedule), plan (immunotherapy protocol) | extract vial (lot, expiry) | insurance + cash | reaction monitoring | substrate 1–21 + clinical_finding + procedure + inventory + recall + plan | no |
| **CGM placement** | glucose trajectory + device | device_equipment + diagnostic_acquisition | sensor data stream, placement record | CGM vendor (data ingest via #16) | recall (replacement, follow-up), plan (data review cadence) | sensor (DME via vendor #20) | insurance + DME | placement instruction, data review | substrate 1–21 + clinical_finding + procedure + inventory + vendor #20 + ingest #16 | no |
| **Remote BP monitoring** | hypertension trajectory + device | device_equipment + diagnostic_acquisition | BP readings stream | RPM vendor (via #16) | recall (review cadence), plan | BP cuff (DME via vendor #20) | insurance (RPM codes) | abnormal-reading alerts | substrate 1–21 + clinical_finding + procedure + vendor #20 + ingest #16 + revenue_cycle | no |
| **Vasectomy** | reproductive plan | operative | procedure record, photos rarely | none | recall (post-op semen analysis at 8–12wk), consent | suture kit, room | insurance + cash | pre/post care | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle + consent #21 | no |
| **Hair transplant** | scalp recipient + donor zones | operative | photos, graft record | none | recall (growth checks, touch-up), plan | grafts, supplies, room + tech | cash | pre/post care, growth visits | substrate 1–21 + clinical_finding + procedure + inventory + recall + revenue_cycle | no |
| **Fertility lab monitoring (cycle)** | follicular trajectory + cycle plan | diagnostic_acquisition + therapeutic_intervention | hormone panels, ultrasound | lab vendor, imaging | recall (daily cycle monitoring), plan (stim protocol), continuity relationship | stim meds (compounding pharmacy), ultrasound time | insurance + cash | daily updates, dose adjust | substrate 1–21 + clinical_finding + labs + procedure + pharmacy + recall + plan | no |
| **Menopause care** | hormone trajectory + symptom plan | therapeutic_intervention + diagnostic_acquisition | symptom log, lab panels | lab vendor | recall (q3–6mo), plan (HRT titration), continuity relationship | HRT medications | insurance + cash | symptom check, dose adjust | substrate 1–21 + clinical_finding + labs + pharmacy + recall + plan + continuity #19 | no |
| **Pelvic floor PT referral** | pelvic floor condition | referral + interpretive_workflow | PT progress notes | PT clinic (via #16 + #20) | recall (PT completion check), plan | none in-clinic | insurance | progress check | substrate 1–21 + clinical_finding + referral_lifecycle + ingest #16 + vendor #20 | no |
| **Wound check (post-op)** | surgical site | surveillance | photos, complication log | none | recall (next visit), plan (wound care protocol) | dressings | insurance | wound photo intake, complication escalation | substrate 1–21 + clinical_finding + procedure + recall + communications | no |
| **Post-op suture removal** | surgical site | therapeutic_intervention + surveillance | removal record | none | recall (final check) | suture removal kit | insurance | scheduling | substrate 1–21 + clinical_finding + procedure + inventory + recall | no |
| **Implant / device follow-up** | implanted device | device_equipment + surveillance | device report | device manufacturer (via #20) | recall (mfg-driven cadence), plan | none | insurance | check-in, recall actions | substrate 1–21 + clinical_finding + procedure + vendor #20 + recall | no |
| **ASC outpatient surgery follow-up** | surgical site / condition | operative (at ASC) + surveillance | ASC op note (ingest), path | ASC EMR (via #16), path lab | recall (post-op cadence), plan, consent | none in OMNI | insurance | result + recovery | substrate 1–21 + clinical_finding + procedure + labs + ingest #16 + revenue_cycle + consent #21 | no |
| **Outside records packet (referral inbound)** | new patient context | (none — ingest event) | scanned PDF packet | referral source (via #16) | task (provider review), continuity relationship initiation | none | none | confirm receipt | substrate 1–21 + ingest #16 + continuity #19 + provider_tasking | no |
| **Faxed referral return** | tracked finding | (none — ingest event) | fax PDF result | referral target (via #16) | task (review + close referral loop) | none | none | result review, patient comm | substrate 1–21 + ingest #16 + referral_lifecycle | no |
| **Abnormal lab escalation** | tracked condition | (none — operational event) | abnormal lab value | lab vendor (via #16) | task (provider review), recall (urgent follow-up) | none | none | abnormal-result comm to patient | substrate 1–21 + clinical_finding + labs + provider_tasking + recall | no |
| **Patient adverse event message (inbound)** | tracked condition / treatment | (none — communications event) | inbound message | none | task (provider review), continuity relationship state shift | none | none | adverse-event triage | substrate 1–21 + communications + provider_tasking + continuity #19 | no |
| **Refill continuation** | medication plan | (none — pharmacy event) | rx renewal | pharmacy vendor | recall (next refill), plan adjustment | medication | subscription / insurance | refill confirmation | substrate 1–21 + pharmacy + plan #18 + recall | no |
| **Failed payment** | subscription / encounter | (none — billing event) | payment failure | payment processor (via #20) | task (RCM follow-up), recall (retry cadence) | none | revenue_cycle escalation | payment-fail notification | substrate 1–21 + billing_subscription + revenue_cycle + vendor #20 | no |
| **Missed appointment** | scheduling intent | (none — scheduling event) | no-show event | scheduling system | task (re-engagement), recall (rebook) | none | revenue_cycle (no-show fee?) | rebook outreach | substrate 1–21 + scheduling + provider_tasking + recall | no |
| **Inventory stockout** | inventory item | (none — inventory event) | stockout alert | vendor (via #20) | task (reorder), recall (PO follow-up) | inventory item | revenue_cycle (cost) | staff alert | substrate 1–21 + inventory_lifecycle + vendor #20 + provider_tasking | no |
| **Provider handoff (vacation, leave, role change)** | continuity relationship + active care arcs | (none — operational event) | handoff packet | none | task (incoming provider review), continuity relationship update | none | none | patient notification | substrate 1–21 + continuity #19 + provider_tasking + communications | no |

### Closing binding

The substrate admits the full procedural taxonomy by composition. **No new sibling is required. No new substrate primitive is required.** `procedure_lifecycle/`'s primary `episode_kind`, `secondary_categories`, and attachments to `labs_lifecycle/`, `clinical_finding/`, `inventory_lifecycle/`, recall (#12), `scheduling_lifecycle/`, external-system ingest (#16), encounter (#17), plan / protocol (#18), continuity relationship (#19), vendor / partner interaction (#20), consent (#21), and `revenue_cycle/` are sufficient. Specialty overlays may add ordering, terminology, body maps, protocols, procedural macros, and billing rules; **the universal primitives do not change**.

If a future use case forces a "yes" in the rightmost column of this grid, the substrate is incomplete — apply §1.8 admission criteria and either add a primitive, reserve a sibling, or define an overlay. **Default answer is no.**

---

## 6.6 Specialty-coverage non-foreclosure register

**This register is a non-foreclosure demonstration, NOT a roadmap commitment.** Each row asserts that the substrate **admits** the named test / procedure shape using existing primitives + existing sibling reservations + DL-9 producer lanes — **without inventing a specialty-specific primitive**. Activation depth lives in DL-5; this register only proves admissibility per DL-6 + DL-8.

The register answers the "what about urology void flow / cardiology Holter / pulm DLCO / GYN colposcopy / endocrine OGTT / neuro EEG / ophtho OCT / ENT audiogram / allergy patch testing / rheum joint aspiration / wound debridement / pain RFA" question once and binds the answer: every one of these shapes composes from the existing primitive set + DL-9 acquisition session, no new primitive needed.

**Column meanings:**

- **Producer lane** — `omni_native` (clinic performs + OMNI authors) | `device_file` (clinic device exports artifact) | `device_feed` (clinic device sends real-time feed) | `vendor_cloud` (vendor portal / cloud) | `external` (outside partner via #16) | `mixed` (multiple lanes). Per §5.2.4 output-source taxonomy + DL-9.
- **Sub-shape** — `diagnostic_acq` (primary acquisition) | `interpretive` (interpretation of artifact) | `op+diag` (operative episode with diagnostic acquisition) | `therap+diag` (therapeutic intervention with diagnostic acquisition) | `surveillance` (surveillance / recall workflow) | `device_check` (device-management / titration). Per §5.1 procedure_episode_kind.
- **Sibling** — `labs` = `labs_lifecycle/` | `proc` = `procedure_lifecycle/` | `record` = `clinical_record/` | `finding` = `clinical_finding/` | `mixed` = multiple sibling consumers.
- **Primitives** — numbered references to §4 substrate primitives (every row implicitly uses 1 org, 2 audit, 3 authority, 4 multi-tenant, 5 patient identity, 7 disclosure-policy, 8 idempotency; column lists the additional primitives the shape stresses).
- **New?** — does this shape require a new substrate primitive or new sibling? Always NO. That is the demonstration.

| Specialty | Test / procedure | Producer lane | Sub-shape | Sibling | Primitives | New? |
|---|---|---|---|---|---|---|
| **Urology** | Uroflowmetry (void flow study) | `device_file` or `omni_native` | `diagnostic_acq` | labs | 9, 10, 11, 15, 17, 18, 21 | NO |
| **Urology** | Urodynamics (multi-channel pressure-flow) | `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 15, 17, 18, 21 | NO |
| **Urology** | Post-void residual (bladder scan) | `device_file` | `diagnostic_acq` | labs | 9, 11, 15, 17 | NO |
| **Urology** | Cystoscopy (in-office) | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Urology** | Prostate biopsy (TRUS-guided, 12-core) | `omni_native` | `op+diag` + `surveillance` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Cardiology** | 12-lead ECG (in-office) | `device_file` or `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17 | NO |
| **Cardiology** | Stress echo (treadmill / pharmacologic) | `device_file` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Cardiology** | Holter monitor (24h / 48h) | `vendor_cloud` or `device_file` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 20, 21 | NO |
| **Cardiology** | Event monitor (30-day external loop) | `vendor_cloud` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 20, 21 | NO |
| **Cardiology** | CGM tracking (continuous glucose monitoring, cardiology-pre-diabetic context) | `vendor_cloud` | `surveillance` + `device_check` | labs | 9, 10, 11, 17, 20, 21 | NO |
| **Cardiology** | Tilt-table study | `omni_native` + `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 18, 21 | NO |
| **Cardiology** | Cardiac MRI (outside) | `external` | `interpretive` | labs | 9, 11, 16, 17, 21 | NO |
| **Pulmonology** | Spirometry (pre/post bronchodilator) | `device_file` or `device_feed` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Pulmonology** | DLCO (diffusing capacity) | `device_file` | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Pulmonology** | Methacholine challenge | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 14, 17, 18, 21 | NO |
| **Pulmonology** | 6-minute walk test | `omni_native` | `diagnostic_acq` | labs | 9, 11, 17, 21 | NO |
| **Pulmonology** | CPAP titration / compliance | `vendor_cloud` | `device_check` + `surveillance` | mixed | 9, 11, 17, 18, 20, 21 | NO |
| **Pulmonology** | Bronchoscopy with biopsy | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **GYN** | Colposcopy (with or without biopsy) | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **GYN** | LEEP (loop electrosurgical excision) | `omni_native` | `op+diag` + `surveillance` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **GYN** | Endometrial biopsy (in-office) | `omni_native` | `op+diag` | proc | 9, 11, 14, 15, 17, 21 | NO |
| **GYN** | IUD insertion / removal | `omni_native` | `therap+diag` | proc | 9, 11, 15, 17, 18, 21 | NO |
| **GYN** | Saline-infusion sonography (SIS) | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 21 | NO |
| **Endocrine** | Oral glucose tolerance test (OGTT) | `omni_native` (timed series) | `diagnostic_acq` | labs | 9, 11, 17, 21 | NO |
| **Endocrine** | DEXA scan (bone density) | `device_file` or `external` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 16, 17, 21 | NO |
| **Endocrine** | Fine-needle aspiration of thyroid (FNA) | `omni_native` (procedure) + `external` (cytopath) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Endocrine** | Dynamic suppression / stim test (cortisol, GH, ACTH) | `omni_native` (timed series) | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 18, 21 | NO |
| **Neurology** | EEG (routine / ambulatory) | `device_file` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 17, 21 | NO |
| **Neurology** | EMG (electromyography) | `device_feed` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Neurology** | Nerve conduction study | `device_feed` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Neurology** | Visual / somatosensory evoked potentials | `device_feed` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Ophthalmology** | OCT (optical coherence tomography) | `device_file` + `omni_native` interpretation | `diagnostic_acq` + `interpretive` | labs | 9, 10, 11, 15, 17, 21 | NO |
| **Ophthalmology** | Fundus photography | `device_file` | `diagnostic_acq` | labs | 9, 11, 15, 17, 21 | NO |
| **Ophthalmology** | Visual fields (perimetry) | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **Ophthalmology** | Corneal topography | `device_file` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 21 | NO |
| **ENT** | Audiogram (pure-tone + speech) | `device_file` or `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 17, 21 | NO |
| **ENT** | Tympanogram | `device_file` | `diagnostic_acq` | labs | 9, 11, 17, 21 | NO |
| **ENT** | Flexible laryngoscopy | `omni_native` | `op+diag` | proc | 9, 11, 15, 17, 18, 21 | NO |
| **ENT** | Vestibular testing (VNG / VEMP) | `device_feed` + `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 21 | NO |
| **Allergy** | Skin prick testing (panel of 30+) | `omni_native` | `diagnostic_acq` | labs | 9, 11, 15, 17, 18, 21 | NO |
| **Allergy** | Patch testing (multi-day, sequential reads) | `omni_native` | `diagnostic_acq` + `interpretive` | labs | 9, 11, 15, 17, 18, 21 | NO |
| **Allergy** | Drug / food challenge (graded) | `omni_native` (timed protocol) | `therap+diag` | proc | 9, 11, 14, 17, 18, 21 | NO |
| **Rheumatology** | Joint aspiration with synovial fluid analysis | `omni_native` (procedure) + `external` (lab) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Rheumatology** | Joint injection (corticosteroid / hyaluronic acid) | `omni_native` | `therap+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Rheumatology** | Biologics infusion (in-office, recurring) | `omni_native` | `therap+diag` + `device_check` | proc | 9, 11, 14, 17, 18, 21 | NO |
| **Wound care** | Wound debridement with culture | `omni_native` (procedure) + `external` (culture) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Wound care** | ABI / TBI assessment (peripheral artery) | `device_file` + `omni_native` | `diagnostic_acq` | labs | 9, 11, 15, 17, 21 | NO |
| **Pain management** | Trigger-point injection | `omni_native` | `therap+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Pain management** | Nerve block (image-guided) | `omni_native` + `device_file` (US image) | `op+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |
| **Pain management** | RFA (radiofrequency ablation) / PRP injection | `omni_native` + `device_file` | `op+diag` + `therap+diag` | proc | 9, 11, 14, 15, 17, 18, 21 | NO |

**Closing binding:** every row above admits via the existing primitive set + sibling reservations + DL-9 producer lanes. **If a future use case requires a primitive not in §4 to model it, that primitive must satisfy §1.8 admission criteria (referenced by ≥3 siblings; no existing primitive can model it without violating discriminant or sibling locality; stable identity contract independent of any single workflow; defensible read-authority + write-authority boundary).** Adding a specialty-specific primitive (e.g., `urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`, `ent_audiogram_table`, `pain_rfa_table`) is **rejected by default** per DL-8; the existing primitive set + DL-9 acquisition session must compose every row above.

This register is **not exhaustive** — additional specialties (oncology, sports medicine, dermatopathology, fertility, sleep medicine, hospital-medicine outpatient extensions, addiction medicine, occupational medicine, integrative medicine) compose the same way. Future contributors who feel the urge to add specialty-specific tables: read DL-8, run §1.8, and check this register for analog shapes first.

---

## 7. Four-layer epistemic model (binding once `clinical_finding/` activates)

| Layer | Purpose | Status |
|---|---|---|
| **1. Tracked clinical finding** | Longitudinal entity identity. The hub. "This specific lung nodule" / "lesion #3 at left upper back" / "L4-L5 disc" / "glabellar dynamic rhytid track" | Reserved (`clinical_finding/` sibling) |
| **2. Clinical assertion atom** | Typed epistemic claims (`condition.X_history`, `condition.X_suspected`, `condition.X_observed`, `condition.X_confirmed`, `condition.X_resolved`) with `authored_by`, `evidence_refs`, `assertion_type`, temporal validity. Attaches to finding via FK when `clinical_finding/` activates; collapses cleanly to concept-keyed when finding identity equals concept identity (current DTC build) | Built (`patient_clinical_assertions` ledger + reconciled view per Section 1K.5.A) |
| **3. Diagnosis entity** | Codable interpretation (ICD-10 / CPT / SNOMED) attached to finding at points in time. Generated from atoms when clinician judges evidence sufficient. Codable taxonomy is exogenous and may change without changing clinical reality. | Reserved (no first-class diagnosis_entity table yet) |
| **4. Billing artifact** | Financial / legal representation of work performed. Derived from accepted assertions + procedures + diagnosis entities; never authored independently. | Reserved (`revenue_cycle/` sibling) |

### Why the existing atomization work is NOT wasted

The atomization layer (`patient_clinical_assertions` + reconciled view) is the substrate the tracked finding hub references. The two layers are complements, not alternatives.

For DTC (current build), finding identity collapses to concept identity. One patient's "obesity" or "T2DM" is one finding identity ≡ one concept atom. Atom layer alone is sufficient. **Everything built so far stands.**

For surveillance / aesthetic / procedural specialties, concept identity is too coarse. Three moles ≠ one finding. Two polyps ≠ one finding. A glabellar rhytid track ≠ a frontalis rhytid track. Tracked finding adds the longitudinal hub above the concept atoms.

**Epic's failure mode** (a lung nodule lives across radiology + problem list + pulm note + CT orders + pathology + tumor board + future encounters without unification) is exactly what the tracked finding sibling protects against. **First-class tracked finding is the moat against Epic, not a duplication of Epic.**

### CHF walkthrough (the example that surfaced the model)

The atom layer already handles CHF epistemic state cleanly:

- "history of CHF" → `condition.chf_history`, `authored_by: patient_self_report`, `assertion_type: history_of`
- "provider suspects CHF" → `condition.chf_suspected`, `authored_by: provider:dr_smith`, `evidence: clinical_judgment + bnp_lab`, `assertion_type: suspected`
- "echo shows CHF" → `condition.chf_observed`, `authored_by: cardiology:echo_2026-04`, `evidence: echo_report`, `assertion_type: observation_supports`
- "CHF formally diagnosed" → `condition.chf_diagnosed`, `authored_by: cardiology:dr_jones`, `evidence: echo + symptoms + bnp`, `assertion_type: confirmed`
- "CHF exacerbation" → `event.chf_exacerbation`, scoped to a date range
- "CHF resolved?" → `condition.chf_resolved`, `assertion_type: resolved`

The reconciled view (`patient_clinical_assertion_current`) handles "what does the system currently believe?" That's solved.

What the tracked-finding layer adds: **the identity of THIS patient's CHF trajectory** as one followable longitudinal object. All those atoms attach to it as evidence. The patient may have one CHF trajectory or none; for cardiology, it's typically one. The collapse-to-concept is fine.

### Aesthetic medicine walkthrough (the example that proved the model)

Glabellar frown lines over 3 years, 10 injection sessions:

- Tracked finding: `aesthetic_dynamic_rhytid_track`, `anatomical_region: glabella`, `object_id: GLABELLAR_RHYTID_TRACK_<patient>_001`
- Linked history attached to that one object across years: baseline photos, injection map, dosing history (24u → 22u → 28u as response evolves), product used (Botox vs Dysport vs Daxxify), response quality, duration of effect, adverse reactions (one episode of brow heaviness), provider preferences, patient preferences (softer correction), progression over time, touch-up cadence (every 4 months), consent history, pricing/package history.
- Each Botox visit becomes a `procedure_lifecycle/` episode containing 1–N interventions; each intervention attaches to the relevant tracked finding (glabellar rhytid track, frontalis rhytid track, NL fold volume-loss zone).
- The continuity intelligence: "this patient typically responds best to 24u, prefers softer correction, metabolizes quickly, returns every 4 months, had brow heaviness once with Daxxify, prefers Dr. X injection pattern, frontal compensation increasing over time" — emerges from queries against the finding's accumulated history. Not from a hand-curated narrative note.

Aesthetic medicine is an ideal proving ground for the tracked-finding model: high continuity, high repeat cadence, visual longitudinality, procedural repetition, provider preference memory, patient preference memory, high LTV, strong operational pain, cash-pay, low payer complexity initially.

---

## 7.5 Clinical identity reconciliation (the hard problem made architectural)

The tracked-finding model surfaces an immediate operational problem: **providers speak differently about the same object**.

- "11s" / "glabellar rhytids" / "glabellar dynamic lines" / "frown lines" / "corrugator activity" / "glabellar complex" — all may refer to the same `aesthetic_dynamic_rhytid_track` object.
- "left upper abdominal nevus" / "pigmented lesion LUQ" / "mole on abdomen" / "abd lesion #3" — may be the same `dermatology_lesion` object, or may be different objects.

Without identity reconciliation, tracked findings degrade into free-text noise within a few visits. With identity reconciliation, providers retain narrative flexibility while the substrate maintains structured continuity. The balance:

> **Provider language must remain flexible. Object identity must remain structured.**

Forcing rigid terminology = providers reject the software. Allowing zero structure = continuity collapses. The middle path is **assisted continuity**, not autonomous resolution.

### The tracked-finding object identity primitives

| Field | Purpose |
|---|---|
| `object_id` | Stable identifier, never changes |
| `patient_id` | Owner |
| `object_kind` | `finding_kind` enum (e.g., `aesthetic_dynamic_rhytid_track`, `dermatology_lesion`, `pulmonary_nodule`, `gi_polyp`, `orthopedic_joint`) |
| `anatomical_region` | Body-map region (face/glabella, chest/L upper lobe, GI/hepatic-flexure, etc.) |
| `laterality` | L / R / midline / bilateral / N/A |
| `body_map_coordinates` | Optional spatial coordinates within region (for derm lesions, ortho joints, plastics surgical sites) |
| `creation_encounter_id` | Where the finding was first identified |
| `status` | active / dormant / resolved / removed / recurred / under-surveillance |
| `specialty_tags` | Multi-specialty findings can be tagged (e.g., a derm lesion under surveillance by both derm and onc) |
| `linked_media` | Image set, photo set, DICOM, pathology slide IDs |
| `aliases` | Provider-language synonyms ("11s", "frown lines", ...) |
| `provider_labels` | Per-provider preferred labels |
| `canonical_label` | System-canonical name for cross-provider readability |

### Assisted reconciliation pattern (when AI runtime activates)

When a provider opens an encounter and starts documenting, the substrate offers candidate matches:

> "This appears related to previously tracked object: `LEFT_GLABELLAR_DYNAMIC_RHYTID_TRACK`. Confidence: 82%. Confirm?"

Or for surveillance:

> "Possible match: `hepatic-flexure-polyp-2026-03` based on anatomy + prior pathology + provider note + surveillance interval. Confirm?"

The system DOES NOT autonomously resolve identity. It surfaces high-confidence candidates with the evidence chain, and a human (provider, MA, coordinator) confirms.

### The substrate primitives reconciliation depends on

- Body-map / anatomical anchor (substrate primitive #15)
- AI orchestration runtime (substrate primitive #11) — for soft NLP normalization, synonym expansion, image similarity matching
- Audit lineage (substrate primitive #1) — every identity confirmation / merge / split is audited with actor + reasoning
- Authority + capability (substrate primitive #2) — provider authority required to confirm finding identity; coordinator may suggest but not confirm

### What this is not

- NOT an attempt to solve generalized clinical ontology. Just object identity within a patient.
- NOT autonomous AI lesion classification. Identity matching, not diagnosis.
- NOT a replacement for free-text. Provider narrative remains free-text; identity sits beneath.
- NOT a near-term build. Reserved as a substrate primitive; activates with `clinical_finding/` sibling when the wedge specialty demands it.

This is the deepest moat against EMR fragmentation. Epic loses here because Epic models clinical objects implicitly across notes + problem list + diagrams + procedure history + provider memory. OMNI proposes structured object identity beneath flexible provider language — the only stable answer.

---

## 7.6 The encounter → intervention → checkout continuity chain (the operational moat)

Current EMRs fragment this chain horribly: scheduling lives one place, charting somewhere else, injections in narrative notes, inventory separate, checkout separate, charges manual, front desk re-enters everything, no longitudinal object linkage. **That fragmentation IS the operational pain.** OMNI's moat is doing this end-to-end.

The chain has eight layers, each a distinct architectural concern:

```
1. Appointment / visit intent      (scheduling_lifecycle)
       ↓
2. Encounter opens                  (substrate: encounter primitive)
       ↓
3. Provider performs interventions  (procedure_lifecycle: structured intervention objects)
       ↓
4. Tracked findings update          (clinical_finding sibling)
       ↓
5. Inventory consumed               (inventory_lifecycle, derived from interventions)
       ↓
6. Charges derived                  (revenue_cycle, derived from interventions)
       ↓
7. Note rendered from structure     (clinical_record sibling, render layer)
       ↓
8. Checkout payload assembled       (revenue_cycle + billing_subscription)
```

### Layer-by-layer

**1. Appointment / visit intent.** The patient was scheduled for "Botox follow-up." This is *scheduling intent*. It is NOT the truth of what happened. The appointment lives in `scheduling_lifecycle/`.

**2. Encounter opens.** When the patient arrives and the provider opens the chart for this visit, an encounter record is created. The encounter is the operational session containing one or more interventions. The encounter is NOT the procedure; the encounter contains the procedure(s). Encounter is a substrate-level operational primitive.

**3. Provider performs interventions.** The most important architectural shift. Provider does NOT type narrative prose first. Provider authors **structured procedural interventions** with first-class fields:

```
Intervention 1
  type:       Botox injection
  area:       glabella
  dose:       10u
  product:    Botox Cosmetic
  lot:        XYZ123
  technique:  standard 5-point pattern
  notes:      slight asymmetry on left
  → attaches to tracked finding: glabellar_dynamic_rhytid_track

Intervention 2
  type:       Botox injection
  area:       frontalis
  dose:       6u
  product:    Botox Cosmetic
  lot:        XYZ123
  technique:  central horizontal band
  notes:      —
  → attaches to tracked finding: frontalis_dynamic_rhytid_track

Intervention 3
  type:       Filler injection
  area:       NL folds (bilateral)
  product:    Restylane Kysse
  volume:     1.0cc
  lot:        ABC456
  technique:  fanning
  notes:      preferred patient outcome
  → attaches to tracked finding: nl_fold_volume_loss_zone
```

Each intervention is a structured procedural artifact. The intervention object lives in `procedure_lifecycle/` as a sub-shape of the procedure episode.

**4. Tracked findings update.** Each intervention's `→ attaches to` link updates the corresponding tracked finding's intervention history. This is automatic: the act of recording the intervention is the act of updating the finding. No separate step.

**5. Inventory consumed.** Each intervention's product + dose + lot generates an inventory consumption event in `inventory_lifecycle/`. Lot tracking, expiry verification, point-of-sale dispense, par-level reordering all derive from this. Provider does not manually decrement inventory.

**6. Charges derived.** Each intervention generates a chargeable service unit in `revenue_cycle/`. Bundling rules (Botox 16u total vs glabella 10u + frontalis 6u separately) live as configurable revenue-cycle policy, not as provider input. Pricing rules, package application, membership pricing all derive automatically.

**7. Note rendered from structure.** This is the **structured-first authoring + note-as-rendered-output** doctrine. The note is NOT authored independently. The note is RENDERED from the structured intervention state + tracked finding context + provider notes (the optional free-text per intervention). The provider edits final prose if needed; the structure is the source of truth.

**8. Checkout payload assembled.** Front desk receives a structured payload: today's services, suggested total, packages/membership applied, balance due. NO re-entering chart data. NO interpreting narrative notes. NO manually recounting units. The checkout is a downstream consumer of `revenue_cycle/` state.

### Why this chain is the moat

No existing EMR does this end-to-end. They fragment it:

- Epic / Athena: scheduling + charting + billing all separate; charge capture is manual reconciliation; tracked findings nonexistent; inventory external; checkout staff memory + spreadsheets.
- Boulevard / Mindbody: scheduling + checkout strong; clinical depth weak; no tracked findings; inventory partial; no clinical assertion ledger.
- Klara / OhMD: messaging only; no clinical depth; no charge capture.
- Cosmetic-clinic SaaS (Aesthetic Record, etc.): some structured intervention support; weak continuity; weak tracked findings; weak revenue cycle.

OMNI's proposition: the entire chain runs through one substrate, audited end-to-end, with no human reconciliation between layers. **Operational compression = fewer coordinators × more provider time × cleaner billing × better continuity × stronger retention.**

### Provider input UX is existential

If the structured-input surface is slow, ugly, or rigid, providers revolt. The substrate must support fast, fluid, clinically-natural input via:

- **Smart defaults** from prior pattern (this patient's typical Botox dose at this site)
- **Body-map UI** for anatomical anchoring
- **Favorite injection maps** per provider
- **Procedural macros** (e.g., "standard glabella pattern")
- **Inferred templates** from appointment type + provider history + prior objects
- **AI-assisted suggestions** ("based on prior visits, suggest 24u glabella + 6u frontalis; confirm?")

These are application-layer concerns built on top of the substrate. The substrate's job is to make them queryable; the overlay's job is to render them.

---

## 7.7 Structured-first authoring + note-as-rendered-output (binding doctrine)

The c1–c9 typed Rule + Template registry pattern (where rules + templates are structured first and rendered output is generated downstream) generalizes to clinical documentation. Notes are NOT authored independently; notes are RENDERED from structured state.

### Binding rules

1. Provider input authors structured artifacts (interventions, observations, decisions, orders, recall plans, intervention attachments to tracked findings).
2. Notes (consult, procedure, op, post-op, surveillance, addendum) RENDER from those structured artifacts via a typed clinical-render module, analogous to `lib/templates/render/`.
3. Free-text fields exist within structured artifacts (e.g., `intervention.provider_notes`, `observation.narrative`) but the document-level note is composed downstream.
4. Provider may edit the rendered narrative; edits are stored as overrides on the structured state, not as authoritative replacements.
5. Re-rendering must be deterministic: the same structured state always produces the same rendered note (modulo provider overrides).
6. The render module is a substrate primitive concern (clinical-record-renderer); specialty overlays provide specialty-specific render modules (e.g., Mohs procedure note format vs vasectomy procedure note format vs cosmetic procedure note format).

This pattern is anti-narrative-first-authoring (radar trap 17 below). It is the only stable answer to the operational chain in §7.6: if notes are authored independently, charge capture / inventory consumption / tracked finding updates all break loose from the documentation, and human coordinators re-stitch them — which is the operational pain we exist to compress.

---

## 7.13 Consumer identity vs operational patient-relationship scoping (binding sub-doctrine)

This section is the long-form rationale for **Doctrine lock DL-10** in MAIN. The lock itself is the binding source; this section explains the Mindbody analogy, Epic contrast, four-layer object model, what's reusable vs scoped, the 8 deployment shapes the substrate must admit, and worked examples. Read DL-10 first; this section explains the why.

### 7.13.0 Binding sentence (verbatim mirror of DL-10 lead)

> "OMNI distinguishes reusable patient identity from operational patient relationships. A human may have one deployment-local patient identity and multiple clinic / brand / practice relationships. Clinical, messaging, consent, membership, appointment, and care-program state attach to the relationship context, not blindly to the global person. Cross-relationship linking is explicit, permissioned, consent-aware, and audited."

### 7.13.1 Why this matters: Mindbody analogy vs Epic contrast

**Mindbody analogy (the right shape for OMNI).** Mindbody supports one consumer identity across many businesses. The client experiences one app / profile / login, but each studio / clinic / business owns its own waivers, memberships, payment rules, appointments, packages, messaging, staff, policies, intake forms, and history with that business. The auto-profile is reused identity + reusable demographic claims; the operational world per business is separate and the business owns it. The patient's "I'm using Mindbody" experience is unified; the businesses' "this is OUR patient at OUR studio" reality is scoped.

**Epic contrast (the wrong shape for OMNI's wedge).** Epic's enterprise model often shares clinical state across the enterprise — different hospitals, practices, and portals may feel separate but the underlying chart can be enterprise-wide via master-patient-index + chart-access controls. That works for hospital systems where one legal entity governs all care. It is the **wrong** shape when the OMNI deployment hosts multiple **distinct legal / brand / clinic / specialty** contexts that should not auto-share clinical, consent, or messaging state. **Epic is explicitly NOT the bar for OMNI's wedge** (per DL-5 + §1.5); for identity / relationship scoping specifically, Epic-style enterprise-wide auto-share is one of the two extremes DL-10 rejects.

OMNI's answer: **shared identity substrate, separate operational relationships.** The middle between global-auto-share (Extreme 1 / Epic) and hard-silos-no-shared-identity (Extreme 2 / per-brand patient rows).

### 7.13.2 The four-layer object model

DL-10's identity / relationship scoping decomposes into four conceptual layers. Each layer has a different ownership, lifecycle, and access model:

| Layer | Concept | Substrate today | Owns |
|---|---|---|---|
| 1. **External contact identity** | Pre-account / unmatched-event layer for Twilio main-line SMS, inbound call, lead form fill, fax inbound | Not built (named in [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md) §11; external-line preflight forthcoming) | Phone / email / external handle with match candidates + linked / unlinked status + provenance of linking |
| 2. **`patients` consumer identity** (within OMNI identity namespace) | Reusable identity-claim layer | Built (`patients` table); identity namespace = deployment / org PHI boundary today | Legal name, DOB, phone, email, portal login, identity verification, duplicate / merge candidates, demographic profile, global notification preferences where legally appropriate |
| 3. **`patient_relationship`** | Per-relationship operational scope | Doctrine LANDED per DL-10; substrate migration future. Reserved as primitive #19. | Consents, intake requirements, memberships / packages, appointments, care programs, messages thread context, clinical chart context for that relationship, assigned care team, communication endpoint, lifecycle status, provider continuity, patient role within that relationship |
| 4. **Care context** | Concrete operational unit within a relationship | Built (care_programs, clinical_visits, appointments, messages, treatment_orders, etc.) | Specific program / encounter / appointment / message / order — always anchored to a relationship (today implicitly via `patient_id`; future explicitly via `patient_relationship_id`) |

### 7.13.3 What's reusable vs scoped (binding split)

**Reusable across relationships (identity-claim layer on `patients`):**

- Legal name
- DOB
- Phone numbers (verified identity claims)
- Email addresses (verified identity claims)
- Portal login + authentication state
- Identity verification status (L0–L4 per §1J.4)
- Duplicate / merge candidates
- Demographic profile (race, ethnicity, gender identity, pronouns where collected globally)
- Mailing address (where appropriate; some addresses may be relationship-scoped)
- Emergency contact (where appropriate)
- Payment method (where consent-captured for global reuse)
- Global notification preferences where legally appropriate

**Scoped per `patient_relationship` (NOT auto-shared across relationships):**

- Consents (intake, treatment, photo, marketing, records release, AI-rendering, anesthesia, procedure-specific — always relationship-scoped)
- Memberships / packages
- Care programs
- Appointments
- Messages / threads
- Clinical chart context for that relationship (problem list relevant to this care arc; not the patient's global health history)
- Provider notes within the relationship's encounters
- Care team assignment
- Communication endpoint (which brand main-line / portal surface they use)
- Relationship-specific lifecycle state (active / disengaged / churned / transferred / merged)
- Brand-specific disclosures / policies
- Financial state for that relationship (open balance, dunning state, package consumption)
- Relationship-specific preferences

**The binding rule:** sharing identity claims is automatic (within a namespace); sharing operational state across relationships is explicit, permissioned, consent-aware, audited.

### 7.13.4 The relationship-boundary admission guardrail (binding test)

DL-10 names 11 possible scoping dimensions: brand, clinic, practice_entity, location, specialty line, legal entity, parent org, separate deployment (post-federation), referral partner, care team, endpoint / business phone line. **But not every dimension automatically becomes a separate relationship row.** A scoping dimension is promoted to a `patient_relationship` boundary **only when it owns distinct operational state** — specifically, when crossing the dimension changes one of:

- Consents
- Care programs
- Messaging context
- Memberships
- Clinical context
- Staff access
- Lifecycle state
- Legal / compliance boundary

If the dimension does **not** own distinct operational state, it remains an **attribute** of an existing relationship, **not** a separate relationship row. Examples:

- **Multi-location clinic, same brand, shared chart, location-specific operations:** locations may be an attribute on the relationship (an appointment has a location); they do NOT auto-spawn separate relationships unless a location owns distinct consents / staff access / lifecycle (e.g., a procedural-day location with separate informed-consent regime).
- **Care team membership inside one clinic relationship:** care_team is an attribute of the relationship (or of the encounter); it does NOT spawn a new relationship per care team unless the care team genuinely operates as a separate practice entity.
- **Endpoint / business phone line:** the same brand may have multiple endpoints (main line + after-hours line). They are attributes of the same relationship unless they truly operate distinct clinical or operational rules.

**Promote a dimension to a relationship boundary only when distinct operational state actually exists, never pre-emptively.** This guardrail keeps the substrate clean and prevents the boundary list from over-generating relationship rows.

### 7.13.5 The 8 deployment shapes DL-10 admits (non-foreclosure)

DL-10 commits to admit the following 8 shapes without substrate replatforming. Mirrors DL-6's pattern: this is non-foreclosure, not a roadmap commitment.

1. **Single-brand single-clinic** — one OMNI deployment, one brand, one clinic. Each human → one `patients` row + one `patient_relationship`. Simplest case.
2. **Multi-brand inside one parent company** — same OMNI deployment, multiple brands owning distinct operational state (e.g., women's HRT + men's HRT + GLP-1 + medspa). One `patients` row per human within the deployment; one `patient_relationship` per brand the human engages with. Operational state per relationship is independent.
3. **Multi-location clinic group** — one brand, multiple locations. If locations don't own distinct operational state → location is an attribute of one relationship (per the §7.13.4 admission guardrail). If locations do own distinct operational state (separate consent regimes, separate staff pools, separate care programs) → multiple relationships per human.
4. **Separate specialty clinics on OMNI sharing some patients** — multiple clinics on the same OMNI deployment, each with distinct chart / care-team / lifecycle. One `patients` row per human within the deployment; one `patient_relationship` per clinic.
5. **Consumer-marketplace / Mindbody-style cross-clinic discovery** — patient uses an OMNI-powered consumer surface that lets them book across many clinics on the deployment. Single `patients` consumer identity; multiple `patient_relationship` rows materialized when patient actually engages with each clinic (lazy materialization is OK — see admission guardrail).
6. **Post-merger duplicate linking** — three clinics on separate OMNI deployments merge. Cross-namespace identity matching surfaces likely-same-human pairs to authorized staff. Linking is explicit (consent-captured, audited). Operational state does NOT silently collapse; merger workflow may choose to migrate, archive, or maintain-separately based on legal / clinical / consent posture.
7. **Cross-brand gaming / risk detection** — same human attempts to engage with multiple brands to get duplicate GLP-1 prescriptions. Identity-claim layer flags "likely same human" to authorized clinical / ops staff; no auto-share of clinical state; clinical decisions still require permissioned workflow + consent + audit.
8. **Cross-deployment federation** — separate OMNI deployments stay isolated by default. Future federation surfaces identity-claim matches across namespaces but does NOT auto-share operational state. Federation is explicit, consent-captured, audited.

### 7.13.6 Worked example: same human across Cultured + Make + dermatology medspa

A 38-year-old woman uses three brands on the same OMNI deployment over 18 months:

1. Signs up for **Cultured** (women's HRT brand). System creates her `patients` row + Cultured `patient_relationship`. Her HRT care_programs, HRT consents, HRT messages, HRT chart context all live on the Cultured relationship.
2. Six months later her partner asks her to refer Make (men's HRT/GLP-1 brand). She decides to also try GLP-1 herself for weight loss. System recognizes her identity-claim match against her existing OMNI `patients` row (phone + email + DOB + portal login). Identity is reused; **no new `patients` row is minted**. A new Make `patient_relationship` is created — separate consents (Make has different telehealth-consent + GLP-1-specific disclosures), separate care_programs (GLP-1 program), separate care team (Make's prescriber, not Cultured's), separate messaging endpoint (Make's main line + portal surface). Her Cultured HRT history is NOT auto-shared with Make's care team unless she explicitly authorizes it.
3. A year later she gets Botox at a dermatology medspa brand that runs on the same OMNI deployment. Same `patients` row; third `patient_relationship`. Medspa staff sees identity (name, phone, DOB) and verification status; does NOT see Cultured's clinical chart or Make's prescription history unless explicit cross-relationship access is granted with consent + audit.
4. She moves and her phone number changes. She updates it in the OMNI consumer surface. **The change propagates to the identity layer** — all three relationships see the new phone number for their identity claims, because phone is reusable per §7.13.3. But the change does NOT propagate her Cultured care state into Make's chart.

### 7.13.7 Worked example: Twilio main-line text from unknown number

A new lead texts Cultured's main line: "Hi, I'm interested in HRT." Per the external-line preflight architecture (forthcoming) and topology doc §11:

1. The Twilio webhook lands as an **external contact identity** row (layer 1 in §7.13.2). Phone number is the identity claim.
2. The system attempts identity-claim matching against `patients` rows in the deployment's namespace. Suppose this phone matches an existing `patients` row (this human signed up for Make's GLP-1 6 months ago but never engaged with Cultured).
3. The system surfaces the match to Cultured's intake staff: "Likely existing OMNI patient — has a Make relationship but no Cultured relationship. Create new Cultured relationship for this human?"
4. Staff confirms; a new Cultured `patient_relationship` is created against the existing `patients` row. Auto-prefill identity claims (name, DOB, phone, email, address) from the identity layer. **Do NOT auto-pull** Make's clinical chart, Make's consents, or Make's prescription history into Cultured's relationship — those are Make-relationship-scoped.
5. Cultured's intake forms / consents / care programs proceed independently.

If the phone number did NOT match any existing `patients` row, the external contact identity stays as a contact identity / lead until intake completes, at which point both a `patients` row and a Cultured `patient_relationship` are created. Identity-namespace + relationship layers compose cleanly.

### 7.13.8 Worked example: post-merger duplicate linking

Three medspa clinics each run their own OMNI deployment (separate namespaces). They merge. The parent company wants unified consumer identity but each clinic's operational chart stays independent until staff explicitly decides per-patient.

1. **Federation surface** lands as future architecture (post-DL-10, not now). It identifies probable-same-human pairs across deployments by identity claims (phone + email + DOB + verified-ID).
2. For each match, authorized staff sees: "Patient at Clinic A appears identity-matched to patient at Clinic B and patient at Clinic C." Staff captures consent from the patient (federation-tier consent) and chooses one of:
   - **Link only** (preserve all three patient rows; identity-claim layer surfaces "this is the same human" across deployments; operational state remains independent per relationship per deployment).
   - **Merge identity** (collapse the three `patients` rows into one canonical row in a unified namespace; relationships per-deployment remain independent operational records).
   - **Merge fully** (collapse identity AND merge relationship-level operational state — requires explicit consent for each piece of operational state migrated; audit per migration).
3. Each choice is explicit, consent-captured, and audited per DL-10's "cross-relationship linking is explicit, permissioned, consent-aware, and audited" clause. No silent collapse.

### 7.13.9 Anti-patterns explicitly forbidden by DL-10

- **Treating `patient_id` as the global cross-relationship identity** in features that should be relationship-scoped (e.g., a query that returns "all messages for this patient" without filtering by relationship). Radar zone 34.
- **Auto-sharing operational state across relationships on identity-claim match** (e.g., a refill rule fires across all the patient's relationships because phone-number-matched). Radar zone 35 / "Extreme 1."
- **Hardcoding `brand` as the only relationship boundary** (e.g., a column named `patient_brand_relationship_id` or a UI that can't accommodate clinic-but-not-brand contexts). Radar zone 36.
- **Minting separate `patients` rows per brand for the same human within a namespace** (loses identity reuse, duplicate detection, merger support, consumer-marketplace strategy). Radar zone 37 / "Extreme 2."
- **Auto-collapsing relationships during deployment mergers** without explicit consent + audit. Forbidden by DL-10's "cross-relationship linking is explicit" clause.
- **Routing Twilio main-line texts directly into `messages`** without going through the contact-identity → identity-match → relationship-resolution sequence. Forbidden by DL-10 + topology doc §11.

### 7.13.10 What §7.13 does NOT specify (deferred)

- Exact `patient_relationship` schema (column list + indexes + RLS policies). Future migration when first sibling activates relationship-scoping.
- Identity-confidence scoring algorithm for cross-namespace matching. Future federation architecture.
- Merger UI shapes. Future product work.
- Consumer-marketplace portal surface design. Future product work.
- External contact-identity primitive (lives in the external-line preflight architecture per topology doc §11).
- Migration plan for retrofitting existing operational tables with `patient_relationship_id`. Future commit; today the implicit `patient_id` + `brand_id`-on-care-program path works because each brand is 1:1 with one care program for the wedge clinic.

### 7.13.11 Cross-references

- MAIN **DL-10** (binding lock)
- MAIN **§1J** (Patient identity) — identity-namespace amendment per DL-10
- MAIN **§1U.3** (brand_id) — graduated-boundary amendment per DL-10
- Foundational doc **primitive #19** (formalized as `patient_relationship`)
- Foundational doc **§3 dimensional matrix** — identity-scope axis
- ADR **§7.13** — decision record + alternatives considered
- Radar **zones 34-37** — drift watch
- Topology doc **§11** — external-line architecture; uses DL-10 as the substrate spine

### 7.13.12 DL-12 cross-references (geography/licensure + care-team/coverage layer + patient-visible roster across relationships)

DL-12 (thread + participant lifecycle) consumes DL-10 + §7.13 at several seams:

- **Geography/licensure context for care-team/coverage derivation** — DL-12 invariant 37 binds patient-facing thread membership as DERIVED from a care-team/coverage assignment layer; the layer consults `patient_relationship` + geography/licensure (Hims-style state-based provider routing) per DL-10. Cross-link DL-12 invariant 37 + §1G.3(d).
- **Different relationships may carry different `thread_kind`** — DL-12 invariant 35: a patient's HRT relationship may use `care_team` thread_kind while their aesthetics relationship uses `provider_1:1` with the injector + `front_desk` with reception. Cross-link DL-12 invariant 35 + §1G.3(c).
- **Patient-visible roster scoping per relationship** — DL-12 invariant 36 internal-membership-vs-patient-visible-roster distinction is relationship-scoped per DL-10 — a "Peptides Care Team" label visible to the patient under their HRT relationship is not shared into their aesthetics relationship visibility per DL-10 + §7.14.7 relationship-scoping discipline. Cross-link DL-12 invariant 36 + §1J.12.
- **Cross-relationship internal-thread visibility** — already named in §7.14.7 per DL-10 + DL-11; DL-12 strengthens the discipline by adding the patient-visible-roster layer (internal thread under Brand A doesn't auto-leak into Brand B's care-team workspace AND patient-visible roster under Brand A doesn't bleed into Brand B view).
- **Relationship end with unresolved obligations** — DL-12 invariant 9 + §1G.3(a) closure-discipline gating: when a patient relationship ends per DL-10, open safety / Rx / lab / billing / adverse-event obligations must be resolved/transferred/explicitly-closed BEFORE compose disabled or thread archived. Silent archive on unresolved clinical work is forbidden.
- **Patient-proxy / caregiver / parent-on-behalf-of-minor actor type** — future preflight named in DL-12 closing handoff. Primitive #1 actor_type taxonomy admits extension via `patient_proxy` / `caregiver` / `parent_on_behalf_of_minor` when the DL-10 relationship layer formalizes proxy relationships. Not blocking DL-12.

### 7.13.13 External-line substrate spine (DL-13 binding sub-doctrine)

This section is the long-form rationale for **Doctrine lock DL-13** in MAIN — the rail-agnostic substrate spine for external communications, OMNI canonical source-of-truth + vendor-adopt-not-write, settings precedence hierarchy, deterministic outbound 8-gate, and display-projection-not-substrate discipline. The lock itself is the binding source; this section explains the why. Sibling #20 `external_communications/` (this doc §5) is the substrate home; the e0 preflight (`.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md`) is the full 23-section design + 55-scenario matrix + R1-R9 pressure-test trail.

#### 7.13.13.0 Why this sub-doctrine is foundational

External-line first-touch (unknown number SMS → unknown contact identity → maybe-eventually-patient) is where every doctrine seam meets. Identity (handle vs person), settings, consent, intent classification, AI participation bounds, queue routing, artifact disposition, multi-brand isolation, vendor-vs-substrate boundary — all of them get tested by the simple operational fact that a phone number can text a clinic main line and that text needs a substrate row, a routing decision, a display label, and a future-proof place to live before the texter is anything other than a phone number.

The pressure-test arc (R1 → R9) surfaced five binding clauses that promote out of e0 preflight into core doctrine because they apply beyond external-line:

1. **Rail-agnostic substrate + vendor-confined adapter pattern** — applies to labs, payments, EHR-export, future rails. Not just Twilio.
2. **OMNI canonical source-of-truth + vendor-adopt-not-write** — applies to any vendor that has its own contact / identity store. OMNI publishes; vendor adopts.
3. **Settings precedence hierarchy** — applies wherever settings layer over substrate (endpoint policy, queue policy, user preference, device preference, compliance, safety).
4. **Deterministic outbound 8-gate** — applies to any rail-bound automated outbound (SMS today; voice / email / WhatsApp / RCS / marketing / billing / clinical / safety tomorrow).
5. **Display-projection-not-substrate** — applies wherever derived UI state could tempt independent mutable columns (inbox row name, status chip, queue badge, conversation display label).

All five are now bound at DL-13 layer; subsections below give the long-form reasoning.

#### 7.13.13.1 Rail-agnostic substrate + vendor-confined adapter pattern

**The temptation rejected.** A naive build of external-line would model the substrate around the vendor: Twilio Conversation SIDs as primary keys, Twilio Phone Number SIDs as foreign keys, Twilio status enums in the message table, Twilio Contact SIDs as the contact identity row. This is fast to build but fatally couples OMNI to Twilio. Switching to RingCentral / MessageBird / direct carrier SS7 / a future rail becomes a rewrite, not a migration. Multi-vendor (per-region rails) becomes impossible.

**The binding pattern.** Substrate carries **generic `provider_*` columns** that are vendor-shape-agnostic: `provider_message_sid` (any rail can produce a message SID), `provider_status` (mapped to a substrate-canonical enum: queued / sent / delivered / failed / undelivered / blocked / opted_out / carrier_filtered), `provider_endpoint_id` (the rail's phone number / channel ID), `provider_voice_call_sid`, `provider_fax_sid`. Vendor-specific extension lives in `provider_metadata jsonb` for fields that don't have a canonical substrate column.

**Adapter boundary.** Vendor-specific code (webhook signature validation, vendor API client, vendor error-code translation, vendor rate-limit handling, vendor authentication) lives at `lib/external-rails/<provider>/`. The adapter's job is translation: vendor wire format ↔ substrate rows. The adapter exposes a `RailCapability` descriptor to substrate (MMS supported? Voicemail transcription? Read receipts? RCS rich cards? RCS button replies?). The substrate orchestration layer (§1Q.14.2 8-gate, §1J.13 identity sync) consumes the adapter via a stable interface; substrate code never imports the vendor SDK directly outside the adapter.

**Broader pattern application.** The pattern generalizes to other rail-bound domains via their own adapter boundaries inside their own sibling directories — NOT all under `lib/external-rails/`. Labs ingestion lives at `labs_lifecycle/lib/lab-rails/<vendor>/` (Quest, LabCorp, Olink, future). Payments lives at `billing_subscription/lib/psp-adapters/<provider>/` (Stripe, Adyen). EHR-export lives at future `export_lifecycle/lib/ehr-export/<vendor>/`. Pharmacy lives at `pharmacy_lifecycle/lib/pharmacy-rails/<vendor>/`. **The pattern is "vendor-confined-adapter inside the relevant sibling," not "everything goes under `lib/external-rails/`."**

**Watch zones.** Zone 69 (external-line rail-bypass drift) catches business logic creeping into adapters; vendor-specific columns leaking onto substrate; vendor IDs becoming primary keys. Zone 76 catches endpoint-policy-via-jsonb (stuffing routing / business hours / voicemail policy into `metadata` instead of structured substrate columns).

#### 7.13.13.2 OMNI canonical source-of-truth + vendor-adopt-not-write

**The temptation rejected.** When staff manually creates a patient/account in scheduling with a phone number, the naive approach is "push the contact into Twilio so future Twilio webhooks come back with the patient identity attached." This makes Twilio the contact database. It is wrong for three reasons: (i) Twilio doesn't know about OMNI's relationship layer (DL-10 multi-relationship-per-person model); (ii) Twilio's contact store reflects only Twilio-side activity, not OMNI-side intent (a patient may exist in OMNI before any Twilio activity); (iii) vendor lock-in — switching rails loses contact state.

**The binding pattern.** **OMNI is canonical for identity / contact data.** `contact_identities` is master, with normalized + indexed `phone_e164` and future `contact_identity_handles` for multi-handle support. Manual patient/account creation publishes handles into OMNI; if the rail has a contact-store concept (Twilio Conversations participants, etc.), OMNI **publishes** the handle to the rail for vendor-internal convenience but never **reads** from the rail to resolve OMNI identity. The contact identity is also normalized + audited: a phone number is a handle (not always one person, per DL-10 extension); identity-altering operations (create / update / dedupe / merge / split / link / unlink) are capability-gated + audited + reason-coded.

**Pattern application.** Generalizes to any vendor with its own identity / contact / object store. Payment processors (Stripe Customer ID is local convenience — OMNI patient_id is canonical); lab vendors (LabCorp accession ID is local convenience — OMNI lab_order ID is canonical); pharmacy vendors (DoseSpot patient ID is local convenience — OMNI patient_id is canonical). OMNI publishes; vendor adopts.

**Watch zones.** Zone 70 (vendor-as-contact-source drift) catches OMNI code reading from vendor contact stores to resolve identity. Zone 70 is rejected unconditionally — vendor is adopt-not-write.

#### 7.13.13.3 Settings precedence hierarchy

**The problem.** External-line settings live at many scopes: org / brand / practice_entity / location / endpoint / queue / user / device / conversation. Without an explicit precedence order, settings contradict each other and the wrong policy wins in production. Real-world examples: a marketing campaign tries to fire to a patient who opted out of marketing SMS (consent must win); a safety escalation needs to reach an on-call provider whose personal mute is on (safety must win); endpoint business hours say "no replies after 9pm" but a clinical follow-up text needs to fire (endpoint policy is below clinical safety in precedence).

**The binding pattern.** Six-level precedence, top-down: (1) **Law / compliance / consent** > (2) **Safety / clinical criticality** > (3) **Endpoint policy** > (4) **Queue policy** > (5) **User preferences** > (6) **Device / client preferences**. Lower layers may NEVER override higher layers. Settings audit + history capture mutations at every layer; STOP/HELP state transitions are tuple-level (recipient, intent_class, endpoint) auditable.

**Pattern application.** Generalizes to any layered-settings domain (notification policies; access policies; retention policies; billing-rule policies). The principle: compliance / safety wins over preference; endpoint / scope wins over personal taste.

**Watch zones.** Zone 75 (settings-precedence inversion drift) catches user-preference suppressing safety; endpoint policy overriding compliance; device preference suppressing on-call escalation.

#### 7.13.13.4 Deterministic outbound 8-gate

**The problem.** External rails (SMS especially) carry massive operational + compliance risk. Sending a marketing SMS to a STOP-opted patient is a TCPA violation. Sending a clinical confirmation to a wrong number is a privacy breach. Sending a marketing campaign at 11pm is a quiet-hours violation. Sending a duplicate appointment reminder annoys the patient and erodes trust. Sending content with prohibited claims (off-label, guaranteed outcomes) is a regulatory liability. Letting AI judge each send case-by-case is a recipe for inconsistency + auditability gaps.

**The binding pattern.** Every automated / system / rule-fired / template-fired / campaign / scheduled-send external-line outbound passes eight deterministic gates BEFORE the adapter dispatches: (1) endpoint-intent classification, (2) consent / opt-in, (3) STOP / HELP suppression, (4) template / disclosure, (5) quiet-hours / send-window, (6) idempotency, (7) rate-limit, (8) prohibited-claims / safety classification. **All eight are deterministic; AI judgment is NOT a gate.** Gate failure is logged with reason; suppressed sends don't silently retry.

**Pattern application.** Generalizes to any automated patient-facing send across rails (email, voice IVR auto-call, fax outbound, future channels). The intent-class + consent + suppression + template + quiet-hours + idempotency + rate-limit + prohibited-claims pattern is rail-agnostic.

**Single-line marketing-and-clinical operations.** A real clinic may legitimately operate marketing + clinical on the same physical number; the bad pattern is **unseparated intent**, not one-physical-number. Substrate enforces the safe pattern by requiring per-send `intent_class` + per-intent consent + per-intent STOP + intent-aware routing + full audit. This softens the historical "marketing + clinical on one phone = REJECTED" rejection (per ADR §7.16 rejection #6) to "marketing + clinical traffic on the same endpoint without intent classification, consent separation, routing policy, and audit — REJECTED."

**Watch zones.** Zone 73 (STOP-cascading-across-intents drift) catches a clinical STOP silently opting out marketing or vice versa. Zone 78 (AI-as-participant drift on external conversations) catches AI bypassing the 8-gate by claiming "AI judged it safe."

#### 7.13.13.5 Display-projection-not-substrate

**The problem.** Inbox row display (name / avatar / status chip) is tempting to materialize as mutable columns on conversation / contact / message tables for performance + ease-of-rendering. This is wrong: as backend state changes (patient relationship status changes, appointment booked/cancelled, care program activated/lapsed, consent updated), the materialized display drifts from substrate truth. Operators see "Established Patient" on an inbox row whose patient_relationship was disengaged last week. Status chips lie.

**The binding pattern.** Display identity (name / avatar / initials / endpoint label / group title) and status chips (Unknown / Lead / Booked / Established / Active Program / Lapsed / VIP / Needs Action / Payment Issue / Clinical Review / Opted Out) are **computed projections at query time** from substrate (contact_identities + patient_relationships + appointment state + care_programs + intake state + patient_consents + open action items + billing state + clinical/safety flags). **NEVER independent mutable columns.** Projection-cache tables are admissible (DL-8 admission criteria) IF justified by performance, but the cache has a clear invalidation contract and is derived state, NEVER source of truth.

**Pattern application.** Generalizes to any UI surface tempted to materialize derived state: dashboard tile counts (compute from substrate, don't store), report summaries (compute or cache-with-invalidation, don't store), queue badge counts (compute, don't store).

**Watch zones.** Zone 74 (display-projection drift from substrate) catches independent `chat_status` / `lead_stage` / `display_state` columns. Zone 71 (chat_status-independent-field drift) is the same anti-pattern named from a different angle.

#### 7.13.13.6 What DL-13 does NOT specify (deferred)

- **Specific projection-cache schema.** DL-13 admits cache tables but does not specify their schema, invalidation strategy, or staleness tolerance — that's the e1 / e2 design space per the e0 preflight verification gate.
- **Specific RailCapability descriptor schema.** DL-13 admits the descriptor concept but does not specify its fields — that's an e1 design decision when the Twilio adapter lands.
- **Specific patient_consents schema for intent_class scoping.** DL-13 admits intent_class-scoped consent but does not redesign `patient_consents` — existing §1Q + §1K.11 consent schema extends as needed in e1.
- **Specific endpoint admin UI / permissions schema.** §1D.4 names capability gating; the e1 admin surface design is deferred.
- **Specific 4-mode × 3-backend-mode configuration schema.** DL-13 admits all 12 combinations but does not specify config schema — that's a brand-onboarding-flow concern for e2 / e3.
- **Multi-consumer adapter placement (where the adapter directory lives when a vendor is consumed by multiple siblings).** DL-13 §7.13.13.1 + §5.3(c) + §8.1 clause 29 specify that vendor code is "confined behind an adapter boundary inside the relevant sibling directory" (external-line adapters at `lib/external-rails/<provider>/`; broader DL-13 pattern applies to other domains via their own adapter boundaries inside their respective sibling directories — NOT all under `lib/external-rails/`). **This language is unambiguous for single-consumer vendors** (Twilio is consumed only by `external_communications/`) **but silent for multi-consumer vendors.** A payment processor (Stripe) is naturally consumed by `billing_subscription/` (subs + checkout + refunds) AND future `scheduling_lifecycle/` (appointment deposits + no-show fees) AND future `retail_lifecycle/` (in-clinic POS). A lab vendor may be consumed by `labs_lifecycle/` AND future `procedure_lifecycle/` (surgical pathology). **Recommended convention** (per [`.cursor/plans/THOUGHT_EXPERIMENT_2026-05-12_dl13_second_rail_stripe_adapter_sketch.md`](THOUGHT_EXPERIMENT_2026-05-12_dl13_second_rail_stripe_adapter_sketch.md) §11): per-sibling business-mapping adapters live at `<sibling>/lib/<domain>-adapters/<vendor>/` (or `<sibling>/lib/psp-adapters/<vendor>/` for payment processors, etc.); raw vendor SDK client + webhook signature validation + capability descriptor + vendor wire types may live at primitive-level `lib/<domain>/<vendor>-core/` as a thin shared utility (vendor-level not sibling-level, comparable to HTTP clients or database drivers). Per-sibling business mapping is canonical; no sibling's adapter substitutes for another's interpretation of the same vendor event. **Land the 1-paragraph DL-13 clarification at first multi-consumer activation** (likely first scheduling-deposit / POS-Terminal / second-lab-vendor work) — not now. The sketch + DL-13 closing handoff cross-arc impact map preserve the recommended answer until that activation.

#### 7.13.13.7 Cross-references

- **DL-13 in MAIN** binds this sub-doctrine globally.
- **`.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md`** is the full e0 preflight (23 sections, 9 substrate sketches, 10 framing questions, 38 guardrails, 55-scenario matrix).
- **MAIN §1G.12** — external-line surface, endpoint substrate, voicemail/missed-call state machine, draft semantics, outbound endpoint selection.
- **MAIN §1J.13** — handle-vs-person identity discipline, contact-identity lifecycle, manual-account-creation sync, external-line access scope.
- **MAIN §1N.9** — AI-not-as-participant on external conversations, deterministic-outbound-via-system-actor, Response Assist scope.
- **MAIN §1P.15** — external-line voicemail / MMS / annotated-image artifacts + 5-disposition pattern on patient projection.
- **MAIN §1Q.14.2** — deterministic external-line outbound 8-gate, STOP/HELP cascade discipline, endpoint-intent classification.
- **MAIN §1V.11** — display-projection-not-substrate discipline, immutable external-line message history.
- **MAIN §1D.4** — settings precedence hierarchy, endpoint admin capability, multi-brand operating-mode configuration.
- **This doc §4.B** — primitive description updates (#1, #5, #10, #11, #16).
- **This doc §5 sibling #20** `external_communications/` — the substrate home.
- **This doc §5.3(c)** — external-communications-as-sibling-with-rail-agnostic-substrate guard.
- **This doc §8.1 clauses 29-33** — cross-cutting binding sub-clauses.
- **ADR §7.16** — REJECTED alternatives + decision rationale.
- **Radar zones 69-78** — anti-pattern watch zones.
- **Evolution narrative Act XIV** — arc-level chronicle.

---

## 7.14 Internal team collaboration messaging (binding sub-doctrine per DL-11)

This section is the long-form rationale for **Doctrine lock DL-11** in MAIN. The lock itself is the binding source; this section explains the three-surface distinction, the Slack-with-patient-context / Epic-Secure-Chat / iMessage/Teams quality bar, the substrate sketch, worked examples, and anti-patterns. Read DL-11 first; this section explains the why. New sibling #19 `internal_collaboration/` (foundational doc §5) is the substrate home.

### 7.14.0 Binding sentence + patient-less threads clarification

> "OMNI admits three architecturally distinct messaging surfaces: **(1) patient-facing chat** (`messages` substrate; c2 shipped); **(2) external-line / pre-account communications** (contact-identity + Twilio webhooks; future preflight); **(3) internal team collaboration** (staff-to-staff threaded discussion with first-class object attachment AND first-class patient-less threads). The three surfaces share substrate primitives (authority + capability, audit, communication rails, `patient_relationship` per DL-10, consent) but do not share storage tables, access models, audit shape, or lifecycle semantics. Cramming any surface into another's substrate is forbidden."

**Patient-less threads are first-class.** Internal collaboration is NOT patient-bound by default. The substrate admits three thread shapes — ad-hoc, persistent-group, direct-message — and patient-less threads (billing team chat, on-call rotation chat, 1:1 staff DM about a non-clinical topic) are first-class shapes, not degenerate cases of patient-attached threads.

### 7.14.1 The three messaging surfaces and why they're distinct

| Concern | (1) Patient-facing chat | (2) External-line / pre-account | (3) Internal team collaboration |
|---|---|---|---|
| **Substrate today** | `messages` + `message_threads` + `message_thread_participants` (c2 substrate, 2026-04-30 migration + 2026-05-16 c2 commit) | Not built; future external-line preflight | Not built; doctrine LANDED via DL-11; substrate migration future |
| **Participants** | Patient + care team (per care_program) | Unmatched / unknown contact (pre-resolution) → staff (post-resolution) | Staff-only (creator + participants + derived group members) |
| **Patient-visible?** | YES (patient reads + writes) | NO during triage; conversation may later project into patient timeline post-link | NO (staff-only; mentions never pollute patient timeline) |
| **Object attachment** | Implicit: bound to one care_program | One contact identity → optionally → one patient_relationship | First-class multi-object via `internal_thread_object_links` typed child table |
| **Patient binding required?** | YES (one care_program per thread) | Not initially (unmatched events); becomes patient-bound after resolution | NO (patient-less ad-hoc / persistent-group / DM threads are first-class) |
| **Access model** | RLS via `is_staff_user` + patient portal session; participants via `message_thread_participants` | Ops triage capability; identity-claim-matching workflow; patient post-link gates patient-visible reads | Capability-gated reads per sensitivity; persistent-group membership derived from role + capability; PHI-aware audit per access |
| **Audit shape** | `audit_events` for staff writes; `patient_timeline_events` for patient turns + clinical_required resolutions | `audit_events` for triage + linking actions; sparse timeline writes only on resolution | `audit_events` on every thread action; **never** `patient_timeline_events` for mentions / participant adds / sensitivity changes — only for explicit patient-record state changes |
| **Lifecycle** | Care-program-bound; closes with care_program | Triage queue lifecycle: unmatched → triaged → linked / dismissed / converted_to_lead | Thread lifecycle: open → waiting → resolved → archived; persistent-group threads don't close |
| **Sensitivity / PHI exposure** | Patient-readable; clamped by disclosure-policy gate per §1Q.17 | Pre-resolution: low (no patient identity yet); post-resolution: gated | Variable per thread: `normal` / `sensitive` / `safety`; capability-gated viz |

Cramming these surfaces into one substrate forces compromises along every axis. DL-11 keeps them parallel.

### 7.14.2 The three internal-thread shapes

| Shape | When to use | Patient binding | Participants | Lifecycle |
|---|---|---|---|---|
| **ad_hoc** | Specific topic, one-off discussion. May attach a patient + related objects, or be patient-less ops discussion. | Optional | Explicit-add per thread | open → resolved → archived |
| **persistent_group** | Named team channel (billing, front_desk, on_call, safety_committee, compliance, on_call_after_hours). Durable institutional memory across many topics. | Typically none (group is the patient-less coordination surface); a specific message may attach a patient | Derived from role + capability at write-time; explicit guest-adds admitted | Group is durable; individual messages have no lifecycle beyond edit/delete |
| **direct_message** | 1:1 staff-to-staff conversation. Usually patient-less ("can you cover my shift?") but may attach an object opportunistically. | Optional | Exactly two staff | Open until explicitly archived; no thread-close semantics |

Decision criteria for which shape a new thread takes:
- Discussion is one-off about a specific patient or object → `ad_hoc`
- Discussion is team-coordination ongoing → `persistent_group`
- Discussion is between two specific staff → `direct_message`

### 7.14.3 Object-attachment polymorphism (first-class, multi-object)

Every internal_collaboration thread admits:

1. A **primary context** on the thread row itself: `primary_context_type` + `primary_context_id` (NULL for patient-less threads)
2. **Multi-object additional attachments** via a typed child table `internal_thread_object_links` with `(object_type, object_id, link_role, linked_by, linked_at)` per link

Object types admitted today (admission discipline applies per §1.8 for new types):

`patient` · `patient_relationship` · `lab_order` · `lab_result` · `appointment` · `treatment_order` · `clinical_visit` · `care_program` · `patient_document` · `patient_message` · `outbound_job` · `billing_exception` · `adverse_event`

`link_role` values: `primary` (denormalization of the thread.primary_context_*), `additional` (extra object linked), `produced_task` (link to a `provider_tasking/` row this thread produced), `superseded` (link rolled into a successor thread).

**A thread with zero object links is valid** — patient-less ad-hoc / persistent-group / direct-message threads. The substrate must not require object attachment.

**Anti-patterns (radar zone 39):**
- Limiting threads to a single `(context_type, context_id)` on the thread row only (no child link table)
- Encoding object attachment in `internal_thread_messages.metadata` jsonb
- Per-object-type internal-thread tables (one for labs, one for orders — rejected by DL-8 admission criteria, same as the specialty-table proliferation pattern rejected per radar zone 29)

### 7.14.4 Substrate sketch (NOT a migration)

Concrete shape for future contributors. Migration is a future commit driven by first sibling activation.

- `internal_threads` — `id`, `org_id`, `thread_kind` text CHECK (`ad_hoc` | `persistent_group` | `direct_message`), `group_name` text NULL (only for `persistent_group`), `group_kind` text NULL (only for `persistent_group`; e.g., `billing`, `front_desk`, `on_call`, `safety_committee`, `compliance`, `after_hours_coverage`), `primary_context_type` text NULL, `primary_context_id` UUID NULL, `patient_id` UUID NULL (denormalized for indexing when primary context resolves to a patient), `patient_relationship_id` UUID NULL (per DL-10, when patient-scoped), `title` text, `status` text CHECK (`open` | `waiting` | `resolved` | `archived` | `entered_in_error`), `priority` text, `sensitivity` text CHECK (`normal` | `sensitive` | `safety`), `created_by` staff_id, **`created_by_actor_type` text per primitive #1 taxonomy (`patient` / `staff` / `staff_with_ai_assist` / `system` / `automation` / `ai_assisted`) — per DL-12 invariant 16 system-thread-provenance**, **`trigger_source` text NULL (event/rule/AI proposal id when actor_type is system/automation/ai_assisted)**, **`reason_code` text NULL**, **`ai_confidence` numeric NULL (when AI-assisted)**, **`owner_staff_id` UUID NULL OR `owner_team_id` UUID NULL OR `owner_queue_id` UUID NULL OR `owner_role` text NULL OR `owner_coverage_group_id` UUID NULL — per §1G.1 owner cardinality + DL-12 invariant 6; at least one MUST be set at creation per DL-12 invariant 16 (unowned automation-created threads forbidden)**, **`human_review_required` boolean DEFAULT false (true for AI-created clinical/safety/Rx threads per DL-12 anti-noise discipline)**, **`dedupe_key` text NULL (per DL-12 invariant 16 anti-noise)**, **`cooldown_until` timestamptz NULL**, **`severity_threshold` text NULL**, `created_at`, `updated_at`, `metadata` jsonb (forward-compat). Patient-less threads: `primary_context_*` + `patient_id` + `patient_relationship_id` all NULL.
- `internal_thread_object_links` — `id`, `internal_thread_id`, `object_type` text, `object_id` UUID, `link_role` text (`primary` / `additional` / `produced_task` / `superseded` / `evidence`), `linked_by` staff_id, `linked_at`. Admits multi-object case. **`link_role = 'evidence'`** carries the trigger evidence refs for AI-assisted / system-created threads per DL-12 invariant 16.
- `internal_thread_messages` — `id`, `internal_thread_id`, `author_staff_id`, **`actor_type` text per primitive #1 taxonomy (default `staff`; `staff_with_ai_assist` when human accepted an AI draft per DL-12 invariant 14)**, **`ai_proposal_id` UUID NULL** + **`ai_confidence` numeric NULL** + **`ai_model` text NULL (provenance attached when AI-assisted per primitive #1 + DL-12 invariant 14)**, `body`, **`original_body` text NULL (preserves history per DL-12 invariant 23 + §1V.10(c) — edits add to history, never overwrite)**, **`editor_staff_id` UUID NULL**, **`edited_at` timestamptz NULL**, **`edit_reason_code` text NULL**, `mention_staff_ids` UUID array, `created_at`, `metadata`. Parallel `internal_thread_message_attachments` admits rich-media (images, screenshots, markups, files) when activation drives — **attachments are first-class artifacts per §5.3(b), NOT embedded as raw bytes in `body` or `metadata`**.
- `internal_thread_participants` — `id`, `internal_thread_id`, `staff_profile_id`, `role` text (`creator` / `participant` / `assigned` / `observer`), `membership_source` text (`explicit_add` / `derived_from_group_membership` / `derived_from_role` / `derived_from_coverage` / `derived_from_care_team`), **`participant_state` text (`active` / `left` / `muted` per DL-12 invariant 2 state machine)**, `last_read_message_id`, `last_read_at`, `notifications_muted` boolean, `joined_at`, `left_at`. For `persistent_group` threads, `membership_source = 'derived_*'` rows reflect role/capability/coverage-based auto-inclusion; explicit guest-adds also admitted.
- **`internal_thread_queue_state`** (NEW per DL-12 invariant 30 + §1G.6.2) — when a thread is queue-routed: `id`, `internal_thread_id`, `queue_id`, `state` text CHECK (`delivered_to_queue` / `unread_by_queue` / `seen_by_queue_member` / `claimed_by_staff` / `completed` / `escalated_or_overdue`), `claimed_by_staff_id` UUID NULL, `claimed_at` NULL, `task_substrate_ref` (FK to `provider_tasking` row or future `patient_action_items` row), `completed_at` NULL. **Distinct from `internal_thread_participants.last_read_*` — read receipt ≠ accountability per DL-12 invariant 30.**
- **`patient_visible_thread_roster_label`** (NEW per DL-12 invariant 36) — for patient-facing threads (c2 `messages` substrate OR future internal_collaboration threads with `internal_thread_object_links → patient` link when patient-rendered): defines what the patient sees vs internal participants. `id`, `thread_id` (polymorphic to c2 `message_threads.id` or `internal_threads.id`), `display_policy` text CHECK (`named_staff` / `role_title` / `team_alias`), `display_label` text (when team_alias e.g., "Care Team" / "Front Desk" / "Peptides Care Team"), `display_named_staff_ids` UUID array NULL (when named_staff policy). Backend internal participants per `internal_thread_participants` are NOT auto-exposed here — patient-visible roster is governed by display policy per §1J.12(e).
- RLS: capability-gated reads (`is_staff_user` + `requireCapability` per sensitivity); writes only via SECURITY DEFINER orchestrators. **Per DL-12 invariant 19 thread search/visibility governance: search results filtered by participant membership + thread class + object/relationship access + sensitivity + explicit administrative authority per §1J.12.**
- Audit: every thread create / message post / message edit / participant add/remove / object link / sensitivity change / task link / state-machine transition / queue state transition / display-policy change emits an `audit_events` row.

### 7.14.5 Persistent-group membership derivation

Persistent-group memberships are derived from role + capability at write-time, materialized into `internal_thread_participants` rows. The derivation is a separate primitive (extends `lib/auth/capabilities.ts` or a new `lib/groups/` module) that exposes:

- `getCurrentGroupMembers(group_kind: 'billing' | 'front_desk' | 'on_call' | …) → staff_profile_id[]`
- Trigger: when a new persistent-group thread is created OR when a message is posted, the orchestrator materializes current group members as participant rows with `membership_source = 'derived_from_group_membership'`
- **Historical accountability:** an audit query at any past timestamp returns the membership *at that timestamp*, not the current membership. Role assignment changes don't retroactively rewrite who was a member when.

Definition of each `group_kind` (binding admission requires this to be locked at definition time):
- `billing` → staff with `billing` role OR `can_manage_billing_exceptions` capability
- `front_desk` → staff with `customer_support` role at a given location
- `on_call` → staff in the current on-call rotation (depends on future on-call substrate per §7.14.17 dependency clause)
- `safety_committee` → staff with `compliance_auditor` role + safety-committee opt-in
- `compliance` → staff with `compliance_auditor` role
- (More admitted via §1.8 admission criteria)

### 7.14.6 Mention notification semantics (binding)

When staff A mentions staff B in an internal_collaboration thread:

- An `outbound_jobs` row of `kind='send_in_app'` is enqueued for staff B (in-app notification per the c1 substrate)
- An `audit_events` row records the mention (action `internal_thread.mention_issued`)
- **NO `patient_timeline_events` row is written** by default

A `patient_timeline_events` row is written only when the thread produces an explicit patient-record state change:
- Thread resolves into a patient-visible message (via separate orchestrator call into the c2 `messages` substrate)
- Thread produces a clinical_visit / clinical_assertion / patient_state_observation update
- Thread produces a `patient_action_items` row (c4 future)
- Thread updates a chart field directly

This rule prevents internal team activity from polluting the patient timeline. The patient timeline is patient-facing memory, not an internal-team activity log. Radar zone 41 watches.

### 7.14.7 Relationship-scoping per DL-10

Internal collaboration threads attaching a patient are **relationship-scoped per DL-10**. The substrate denormalizes `patient_relationship_id` onto the thread row when applicable. RLS predicates and capability checks must filter on the relationship.

Example: a thread about a Brand A patient's GLP-1 dose review:
- Thread `patient_id` = patient X's `patients.id`
- Thread `patient_relationship_id` = Brand A's `patient_relationship.id` for patient X
- Visibility: Brand A care team can read; Brand B care team (where patient X also has a relationship for HRT) CANNOT read by default
- Cross-relationship visibility requires explicit consent + capability + audit per DL-10's "cross-relationship linking is explicit, permissioned, consent-aware, audited" clause

Radar zone 40 watches for cross-relationship leakage.

### 7.14.8 Composition with `provider_tasking/`

A thread can produce a task: the orchestrator inserts a `provider_tasking/` row and writes a corresponding `internal_thread_object_links` row with `link_role = 'produced_task'`, `object_type = 'provider_tasking_task'`, `object_id = <task.id>`. The task is queue state (owner, SLA, escalation); the thread is conversation state.

A thread can resolve a task: when staff posts a message marking the task done, the orchestrator updates the task row + writes a participant + audit_events row. The link survives.

Neither replaces the other. A task without a thread is fine (deterministic queue work). A thread without a task is fine (most threads). Linked threads + tasks compose well — the queue surface (provider_tasking workspace) shows the task; clicking opens the thread.

### 7.14.9 Composition with external-line substrate (DL-10/DL-11 boundary) + fax distinction + general-enterprise-collaboration-platform coexistence (DL-12 extension)

External-line ops triage is its own substrate (Layer 3 in `docs/architecture/communications_topology.md` §11's four-layer model). It is NOT internal collaboration.

When staff need to discuss an unmatched external-line event (e.g., "this Twilio inbound looks like patient X — confirm before linking"), an internal_collaboration thread can be **spawned from** the external-line triage row or **linked to** it via `internal_thread_object_links` with `object_type = 'external_line_event'`. The external conversation stays in external-line substrate; the staff discussion sits in internal_collaboration.

This preserves the DL-10/DL-11 layer boundaries cleanly. Without this discipline, the temptation is "external-line triage IS internal collaboration" — which collapses the contact-identity layer into the staff-collaboration layer and loses both.

**Fax distinction (DL-12 extension).** Fax is **NOT** part of internal_collaboration substrate. Fax is composed-from-primitives per §5.3(a) — primitive #10 rails + primitive #16 ingest + §1P inbound classification + §1G.6.2 queue routing + future provider_tasking. Internal_collaboration threads may attach fax artifacts via `internal_thread_object_links` (`object_type = 'fax_inbound'` or `object_type = 'fax_outbound'`) for staff discussion ("review this faxed referral packet before adding to chart"), but internal_collaboration does NOT own the fax queue, the fax classification pipeline, or fax-to-chart filing disposition. Radar zone 46 watches.

**General enterprise collaboration platform coexistence (DL-12 invariant 38).** OMNI internal_collaboration sibling owns **relationship-scoped clinical/ops collaboration + patient/object-linked threads + task-producing coordination + audit + canonical-state boundaries + chart-filing disposition + care-team/coverage-layer-derived membership**. **General enterprise collaboration platforms (e.g., Microsoft Teams, Slack, Microsoft 365, Google Workspace, and future enterprise chat / Copilot-class tools that may emerge)** may remain the general enterprise collaboration surface for non-patient-context work — company announcements, meetings, calendar, presence, general staff chat, HR/admin per policy, enterprise search / Copilot-class summaries of company context. **Integration paths admitted** (the external enterprise platform may receive notifications like "New OMNI task assigned to Front Desk queue" with deep-link back to OMNI; OMNI may later expose approved data to enterprise Copilot-class tools through governed connectors when compliance/access controls permit) **but never source-of-truth swap**: the external enterprise platform is NEVER the source of truth for OMNI patient-context threads / tasks / orders / labs / Rx state / patient-facing communications / chart documents; OMNI is NEVER a generic enterprise-chat clone competing with those platforms on general company-chat features. **Specific vendor names above are illustrative only — doctrine binds the pattern, not the brand.** **Future deliverable hook (named here, not built in this arc):** governed enterprise-platform connector layer (when compliance/access controls permit + first concrete pressure surfaces).

### 7.14.10 Quality bar: Slack-with-patient-context + Epic Secure Chat + iMessage/Teams + DL-12 cross-substrate boundary extensions

The user expectation is **elite-level messaging quality**:

- **Slack-style threading** + mentions + reactions (future) + presence-where-appropriate
- **iMessage/Teams-level rich media**: images, screenshots, screen markup / drawing, file attachments, voice messages (future) — per §5.3(b) attachments-as-first-class-artifact discipline; iOS-flattened-upload vs OMNI-native-markup distinction per §5.3(b.ii)
- **Epic Secure Chat-style patient context**: when a thread attaches a patient, a card shows the patient identity + key flags + deep link to chart (DOB / age / allergies / active programs / relationship-scope-aware) WITHOUT staff having to type PHI into the message body
- **Provider workspace integration**: threads appear in My Queue / clinical-message inbox surfaces (§1G.8 surfaces)
- **Mobile-first** capabilities (sketched; deferred per §7.14.19)

The substrate must admit each of these. DL-11 doesn't lock the UI design; it locks the substrate so the UI lands cleanly.

**DL-12 cross-substrate boundary extensions (binding):**

(a) **Threads-coordinate-never-canonical-state boundary.** The user can't tell from the thread alone whether something is "the canonical approval" or "a discussion of the approval"; **canonical state lives in the order / Rx / lab / action_item / clinical_visit substrate per DL-7 + §1G + §1L + §1Q**; **threads carry coordination state only**. A code path that reads "Dr X approved this" from `internal_thread_messages.body` text instead of from the order's `approved_at` / `approved_by_staff_id` columns is the smoking gun (radar zone 48). Cross-link DL-7 + DL-11 + DL-12 invariant 11.

(b) **Patient/object-linked internal threads = staff-visible projection from patient context; NEVER patient-visible by default; NEVER canonical chart/order/Rx/lab state.** Once attached via `internal_thread_object_links`, thread inherits patient-context governance (access + audit + retention + discoverability per §1J.12). Conversion of internal-thread content to a patient-facing message, task, note, or record routes through §1Q template/disclosure governance — **the conversion step is the boundary crossing, not the discussion itself**. *"If you want a conversation to be private 1:1, don't attach it to a patient/object."* Cross-link DL-12 invariant 20 + §1J.12(d) + radar zones 64, 65.

### 7.14.11 Worked example: lab result review thread (ad_hoc; multi-object)

Provider receives an estradiol result for patient X (Brand A's women's HRT relationship). Result is borderline; provider wants MA to call patient to confirm symptoms before signing off and replying via c2 patient chat.

1. Provider opens patient X's chart, scrolls to the new `lab_result`, clicks "Start internal discussion."
2. New `internal_threads` row inserted: `thread_kind = 'ad_hoc'`, `primary_context_type = 'lab_result'`, `primary_context_id = <lab_result.id>`, `patient_id` denormalized, `patient_relationship_id` = Brand A's relationship.
3. `internal_thread_object_links` row inserted: `(thread_id, 'lab_result', <id>, 'primary')` + additionally `(thread_id, 'patient', <patient_id>, 'additional')` + `(thread_id, 'lab_order', <lab_order.id>, 'additional')`.
4. Provider posts: "@MA-Sarah can you call X tomorrow morning, ask about hot flashes vs sleep changes before I sign off?"
5. Mention emits `outbound_jobs.send_in_app` to MA-Sarah + `audit_events` row (action `internal_thread.mention_issued`). **No `patient_timeline_events`** at this point.
6. MA-Sarah calls patient, posts back: "Confirmed worse hot flashes; no sleep change. Patient OK with continuing current dose."
7. Provider posts back: "Great. Will reply via portal." Marks thread `status = 'resolved'`.
8. Provider opens c2 portal chat, sends patient X a patient-facing message via `postPatientMessage`. **This** action writes a `patient_timeline_events` row of `event_type = 'patient_message_submitted'` (the patient-record state change). The internal thread itself never touched patient timeline.

### 7.14.12 Worked example: post-procedure photo discussion (ad_hoc; rich media; sensitivity)

Patient Y had a Botox treatment yesterday. Today she texted Brand C's medspa main line a photo of her forehead with concerning asymmetry. Front-desk staff routes the photo to the medspa team.

1. Front-desk creates a new `internal_threads` row: `thread_kind = 'ad_hoc'`, `primary_context_type = 'patient'`, `primary_context_id = <patient_id>`, `patient_relationship_id` = Brand C's medspa relationship, `sensitivity = 'sensitive'` (photo of a clinical concern).
2. `internal_thread_object_links` additionally links `(thread_id, 'treatment_order', <botox_order.id>, 'additional')` + `(thread_id, 'patient_document', <photo.id>, 'additional')`.
3. Photo lives in `patient_documents` (substrate); the thread links it via `internal_thread_object_links`, not embedded in metadata.
4. Provider + injector (only Brand C team — Brand A HRT team and Brand B GLP-1 team don't see this thread per DL-10 relationship-scoping) discuss: "looks like minor asymmetry; reassure patient; recommend wait 7 days for full settling."
5. Resolution: provider sends patient Y a portal message + schedules optional follow-up appointment. Both actions write `patient_timeline_events` from their respective orchestrators; the thread itself doesn't.

### 7.14.13 Worked example: persistent-group billing channel (patient-less; durable institutional memory)

Billing team has a persistent group thread `billing` (group_kind = 'billing'). Members derived from billing role + `can_manage_billing_exceptions` capability — typically billing-ops + compliance leads.

1. Billing lead posts: "Starting next Monday we're charging full refund per the new policy — see attached doc."
2. Message links `patient_document` for the policy via `internal_thread_object_links`. No patient binding.
3. Three weeks later a new ops hire is added to the billing group via role assignment. Their `internal_thread_participants` row materializes with `membership_source = 'derived_from_group_membership'`. They scroll back to see the durable policy message.
4. The thread is institutional memory. No patient timeline writes ever (patient-less). All audited.

### 7.14.14 Worked example: 1:1 direct message (no patient binding)

Dr. Provider and MA Sarah have ongoing 1:1 thread (`thread_kind = 'direct_message'`, no patient binding). They use it for scheduling questions, after-hours coverage discussion, general coordination.

- Today MA Sarah posts: "Are you covering Friday or do I ask Dr. Lee?"
- Dr. Provider replies: "I'll cover. Thanks."
- No patient timeline writes. Both participant rows derived from `explicit_add`.
- If the conversation drifts to a patient-specific topic, they create a new ad_hoc thread linked to the patient — they don't pollute the DM with PHI.

### 7.14.15 Worked example: billing exception escalation (ad_hoc; multi-object; produces task)

A patient's GLP-1 refill payment failed. Ops sees the exception via §1G.5 escalation. Ops creates a thread to coordinate fix.

1. Thread: `thread_kind = 'ad_hoc'`, `primary_context_type = 'billing_exception'`, `primary_context_id = <exception.id>`, `patient_relationship_id` = Brand B's GLP-1 relationship.
2. Object links: billing_exception (primary) + patient (additional) + treatment_order (additional) + outbound_job (additional — the dunning send that failed).
3. Ops posts: "GLP-1 refill payment failed — provider already approved. Stripe says card expired. @Provider hold the shipment; @Billing-Lead please reach out for new card."
4. The thread produces a `provider_tasking/` task: "reach out to patient for new card; pause refill until resolved." `internal_thread_object_links` row: `(thread_id, 'provider_tasking_task', <task.id>, 'produced_task')`.
5. Billing lead later resolves the task (new card on file); thread marked `resolved`. Task closes; thread closes; link survives in audit.

### 7.14.16 Worked example: external-line triage discussion

An unknown number texts Brand A's main line: "Hi, I had Botox 3 weeks ago and have a question about swelling." External-line ops triage row is created (in external-line substrate, per topology §11 Layer 1 → 2 → 3).

1. Ops cannot find this phone in any `patients` row in the namespace. Unmatched.
2. Ops creates an `internal_collaboration` thread to discuss with the medspa team: "Looks like a returning patient who didn't use the portal — anyone recognize the photo description?"
3. Thread: `thread_kind = 'ad_hoc'`, `primary_context_type = 'external_line_event'`, `primary_context_id = <triage_row.id>`. **No patient binding yet** (no patient identity resolved).
4. Injector recognizes the description: "Sounds like patient Y from 3 weeks ago — try matching by phone number against her secondary contact." 
5. Ops matches, links the external-line event to patient Y's Brand C relationship (per the external-line substrate's link-to-patient workflow). The internal_collaboration thread then **adds an `internal_thread_object_links` row** for `(thread_id, 'patient', <patient_y.id>, 'additional')` once identity is resolved.
6. The external conversation in the external-line substrate is converted into a patient_message via the linking workflow (patient Y now has a c2 patient chat with the new message visible). The internal thread separately discussed the triage; it stays in internal_collaboration.

### 7.14.17 Staff directory + presence + on-call coverage dependency (NOT in DL-11 scope)

Internal collaboration depends on a **staff directory + presence/availability + on-call coverage** substrate for:
- @mention disambiguation (who is this person? what's their role? are they on duty?)
- Assignment routing (who can take this thread? who's on call for this specialty / location / brand?)
- Escalation paths (when X is unavailable, who covers?)
- "Currently available for consult" surfaces inside thread compose flow
- "Click into person view → see schedule" UI (user named this; depends on `scheduling_lifecycle/` + `staff_profiles`)

**What's built today (substrate fragments):**
- `staff_profiles` (Section 1D) — identity, role, credentials, capabilities
- §1G.7 operational-state enum on `staff_profiles` — `offline / signed_in / open_for_queue / paused / at_capacity / unavailable` (routing-focused presence)
- §1G.8 "My Status" surface — UI for §1G.7's enum
- `staff_profiles` carries `service_state_codes`, `state_licenses`, `prescription_licenses`, contact fields

**What's NOT built (named here for future doctrine):**
- First-class staff directory UI surface (browse-who-works-here)
- On-call rotation / coverage primitive (who's on for Friday night? specialty rotation? after-hours coverage?)
- Personal-cell-vs-work-cell visibility policy (capability-gated reveal of personal cell phone numbers)
- Department / team grouping beyond role
- "Today's daily schedule for staff X" UI (depends on `scheduling_lifecycle/` activation)
- "This week's coverage for the on-call rotation" UI

**Non-foreclosure clause (per DL-11):** the future doctrine arc (DL-12 candidate, naming TBD; lands when first concrete pressure surfaces) handles these. DL-11 commits the substrate to **admit** this future work without retroactive churn. Internal collaboration features built today that *depend* on directory / on-call / presence beyond what §1G.7 already gives must defer or stub explicitly; the substrate change comes later.

**Personal contact visibility is capability/policy-gated, not assumed global.** Work contact (work email, work phone) may be broadly visible per org policy; personal cell visibility requires explicit capability + audit per-access. Radar zone 42 watches for drift (everyone-sees-everyone's-personal-cell-forever anti-pattern; or features built on assumed on-call substrate that doesn't yet exist).

The "click into a staff view → see daily/weekly schedule" surface the user named is a UI consumer of `scheduling_lifecycle/` + `staff_profiles` — not new doctrine; lands when scheduling sibling activates.

### 7.14.18 Anti-patterns explicitly forbidden by DL-11 + DL-12

**DL-11 anti-patterns:**

- **Cram-internal-into-patient-chat (Extreme 1):** adding `from_patient: false, staff_internal: true` to `messages`, or a "thread type" column to fold internal team conversations into the c2 substrate. The exact framing the prior §1G.8.8 canonized; DL-11 supersedes. Radar zone 38.
- **Object-attachment-via-jsonb / single-context-only (radar zone 39):** using `internal_thread_messages.metadata.object_refs[]` for polymorphic object attachment instead of typed `internal_thread_object_links`. Or limiting threads to a single primary context on the thread row only (no child link table) when multi-object is doctrinally required.
- **Cross-relationship internal-thread leakage (radar zone 40):** Brand B care team seeing Brand A internal discussion about a shared patient without explicit cross-relationship permission. DL-10 follow-on.
- **Patient-timeline pollution (radar zone 41):** writing `patient_timeline_events` rows for staff mentions, participant adds, internal sensitivity changes — anything that's not an explicit patient-record state change.
- **Provider_tasking overload:** making threaded discussion a `provider_tasking/` feature. Conflates queue-of-ownership with conversation; both lose.
- **Per-object-type internal-thread tables:** one for labs, one for orders, one for billing. DL-8 admission criteria reject (same shape as the specialty-table proliferation rejected by radar zone 29).
- **Patient-action-items as discussion channel:** using `patient_action_items` (c4 substrate future) to hold staff-to-staff conversations. Action items are tasks-the-patient-must-complete, not staff workspace.
- **Forcing patient binding on every thread:** patient-less group chats and 1:1 DMs are first-class.
- **Cell-phone-visibility-everyone (radar zone 42):** personal cell numbers exposed in directory without capability gates.

**DL-12 anti-patterns (FIVE additional, binding):**

- **(a) Internal-snippet-vs-patient-facing-template conflation.** Internal staff snippets / handoff templates / escalation prompts / task templates live in internal_collaboration sibling territory (DL-11 sibling #19) and the future internal substrate's own **typed, versioned snippet registry**; they are **NEVER routed through `repo/templates/` patient-facing template governance**. Conflating them is the exact substrate-fragmentation pattern radar zones 28 + 38 reject. Cross-link §1Q.14.1(c) + DL-12 invariant 13.
- **(b) Internal-snippets-as-permanent-free-text.** Internal snippets are **NOT free-text forever**. When DL-11 sibling activates, internal snippet substrate must land as a typed, versioned registry inside `internal_collaboration/` parallel to (but distinct from) the patient-facing template registry. Without that discipline, internal snippets become an unaudited authoring loophole.
- **(c) Force-human-patient-chat-through-template-engine.** Forcing every patient-facing chat message through the template engine — including a provider typing a normal portal-chat reply — over-rigidifies ordinary clinical messaging. Per §1Q.14.1(b) boundary clause: **human-authored patient chat is free-text under capability + audit + PHI/relationship-scope**; only automated/system/rule-fired/AI-generated patient-facing sends require template/disclosure governance.
- **(d) AI may/may-not list with no authorship-rewrite (binding for human-accepted drafts).** AI may propose/draft/route/classify; AI may NOT silently send patient-facing automated messages, alter history, create unowned threads, decide clinical outcomes, impersonate staff, **rewrite authorship onto AI for human-accepted drafts** (human-accepted AI drafts are `staff_with_ai_assist` per primitive #1 taxonomy + DL-12 invariant 14, NEVER `ai_assisted`). Radar zone 52.
- **(e) AI-thread spam from missing anti-noise controls.** Automation/AI-created threads without dedupe key + cooldown window + severity threshold + ownership controls become a spam factory. High-sensitivity clinical/Rx/safety threads auto-created without approved deterministic trigger policy AND without a human triage/proposal state are forbidden — protects provider efficiency from death-by-thread-sprawl per radar zones 47 + 51.

**DL-12 attachment/markup/chart-filing anti-patterns (separately documented per §5.3(b) sibling-boundary guard):**

- **Attachment auto-files to chart without explicit capability-gated disposition** (zone 59 — clinical truth pollution).
- **OMNI-native markup overwrites original source artifact** (zone 60 — legal/audit defensibility loss).
- **Patient-facing media sent without scan/audit/PHI-classification/capability-gate** (zone 61 — PHI exfiltration; treats patient chat like casual iMessage).
- **PDFs treated identical to flattened images without original preservation** (zone 60 + §5.3(b.iii)).

**DL-12 thread-substrate hardcoding anti-patterns:**

- **Patient-facing thread substrate hardcoded to specialty/care-team** (zone 62 — medspa-blind; cannot pivot to provider 1:1 / front desk / esthetician / role-queue). Substrate parameterized by `thread_kind` per DL-12 invariant 35 + §1G.3(c).
- **1:1 patient thread orphans when staff off-duty / on-vacation / on-leave** (zone 63 — distinct from zone 43 staff deactivation; covers temporary unavailability). "1:1" UX preserves backend coverage + escalation + role-queue + audit per DL-12 invariant 35.
- **Thread membership hardcoded in thread instead of derived from care-team/coverage assignment layer** (zone 66 — provider quits → dead inbox; Hims-style geography/licensure not consulted). Thread CONSUMES the care-team/coverage layer per DL-12 invariant 37 + §1G.3(d).

**DL-12 search/visibility/notification anti-patterns:**

- **Thread search "everyone-can-search-everything" or 1:1 DMs broadly browsable** (zone 53 — anti-panopticon failure; conversations flee to external tools). Per DL-12 invariant 19 + §1J.12.
- **Internal-only participants silently exposed in patient-visible roster** (zone 65 — display policy not applied). Per DL-12 invariant 36 + §1J.12(e).
- **Staff self-joins patient thread without authorization** (zone 64 — curious browse; pairs with anti-panopticon). Per DL-12 invariant 36 + §1J.12(f).
- **Notification preferences silently suppress safety/clinical/critical messages** (zone 54 — patient mute drops Rx-recall as marketing). Per DL-12 invariant 21 + §1Q.14.1(d).
- **PHI in notification preview / lock-screen / SMS companion / search snippet** (zone 57 — preview privacy violated). Per DL-12 invariant 25 + §1Q.14.1(e).

**DL-12 lifecycle/edit/queue/escalation anti-patterns:**

- **Message edit silently rewrites history** (zone 55 — legal/clinical defensibility loss). Per DL-12 invariant 23 + §1V.10(c).
- **Attachment treated as thread metadata blob** instead of first-class artifact (zone 56 — scan/audit/retention loss). Per DL-12 invariant 24 + §5.3(b).
- **Queue-routed message treated as "handled" by read receipt** (zone 58 — read receipt ≠ accountability; binds 9pm-front-desk-failure). Per DL-12 invariant 30 + §1G.6.2.
- **Thread "done" message treated as task completion** without task substrate state update (zone 48 — internal-thread-as-canonical-state drift). Per DL-12 invariant 28 + DL-7.
- **Async chat surface marketed as emergency channel** without operational pathway support. Per DL-12 invariant 27 + §1G.3(b).
- **Internal collaboration treated as consequence-free backchannel** (silent-deletion failure). Per DL-12 invariant 33 + §1V.10(e) culture clause.

**DL-12 enterprise-platform / AI-workflow anti-patterns:**

- **Build OMNI internal_collaboration as a generic enterprise-chat clone** (Teams/Slack/M365/Workspace/future-tool clone) — REJECTED. Per DL-12 invariant 38 + §7.14.9 coexistence positioning.
- **Use external enterprise platform as the source of truth for OMNI patient-context** (threads / tasks / orders / labs / Rx / patient-facing communications / chart documents) — REJECTED. Per DL-12 invariant 38 + §7.14.9.
- **Staff use external screenshot/copy-paste to unmanaged AI for patient-context drafting** (zone 67 — PHI exfiltration; forcing-function failure if in-app AI worse than copy-paste-into-ChatGPT). Per DL-12 invariant 39 + §1N.8(e) + primitive #11.

### 7.14.19 What §7.14 does NOT specify (deferred)

- Exact `internal_threads` / `internal_thread_messages` / `internal_thread_participants` / `internal_thread_object_links` schema beyond the §7.14.4 sketch. Future migration.
- Rich-media handling architecture (image / screenshot / markup / file / voice / video attachments). Future preflight.
- Presence / typing indicators / read receipts beyond `last_read_message_id`. Deferred.
- Mention notification fan-out details (debounce / batching / @here vs @channel / mention digests). Deferred.
- Mobile-app surface design. Future product work.
- Group-membership derivation primitive implementation (lives in `lib/auth/` or `lib/groups/`). Future commit.
- Reactions / emoji semantics. Deferred.
- Staff directory UI design + on-call rotation primitive (§7.14.17). Separate future doctrine arc.
- Personal-cell visibility policy details. Separate future doctrine arc.
- "Click into person → see schedule" UI (depends on `scheduling_lifecycle/` activation).

### 7.14.20 Cross-references

- MAIN **DL-11** (binding lock)
- MAIN **§1G.8.8** (SUPERSEDED-AND-REPLACED-BY-DL-11 banner; historical context preserved)
- Foundational doc **sibling #19 `internal_collaboration/`** (formalized per DL-11)
- Foundational doc **§7.13** + DL-10 (relationship-scoping; threads about a patient are relationship-scoped)
- Foundational doc **§5** sibling boundary discipline (`internal_collaboration/` boundary statement)
- Foundational doc **§3 dimensional matrix** — Communication endpoints axis
- ADR **§7.14** — decision record + alternatives considered
- Radar **zones 38-42** — drift watch
- Topology doc **§11** — external-line architecture; preserves DL-10/DL-11 boundaries
- Topology doc **§12** — internal team collaboration as third messaging surface
- MAIN **§1G.7** — operational-state enum on `staff_profiles` (presence fragments today)
- MAIN **§1G.8** — provider workspace v1; My Queue / My Status / clinical-messages inbox / lab-review drawer surfaces

---

## 8. Cross-cutting concerns (axes that span siblings)

Not siblings. Not substrate primitives. Cross-cutting concerns every sibling must accommodate.

| Concern | Where it lives | Discipline |
|---|---|---|
| Care team / multi-provider ownership | Substrate primitive (extends authority) | `responsible_party` per scope; `care_team` membership for collaborative ownership; explicit role taxonomy (proceduralist, consultant, primary, covering, MA, coordinator, injector, aesthetician) |
| Cross-org patient identity | Substrate primitive (extends multi-tenant) | Patient identity may span orgs via referral packet; explicit patient-identity-claim model; cross-org access requires consent + `SensitiveAccessReason` |
| Multi-channel communication endpoints | `communications_lifecycle/` sibling | Endpoint table: per-org × per-brand × per-location × per-department × per-channel; programmable AI-as-endpoint with permissions/escalation/audit |
| Resource scheduling depth | `scheduling_lifecycle/` sibling | Resources: provider · room · suite · equipment · device · external facility · staff role; multi-resource bookings; prep dependencies |
| Interaction context | Substrate primitive | `interaction_context.mode` (`'in_person'` / `'telehealth'` / `'hybrid'`) on every operationally-meaningful row; binding per Section 1Q.23 + Hybrid Scenario 5 |
| Synthetic / production data environment | Substrate primitive | `data_environment` column on every patient-bound row; structural lock at dispatch gate |
| Pathway-aware policy | Substrate primitive | `pathway_code` + `pathway_sensitivity` propagation; clamps; rule-side filters |
| Jurisdictional gating | Substrate primitive | "jurisdiction of care" field on patients; runtime guards at intake / provider assignment / treatment decision / order creation / fulfillment routing |
| Recall / surveillance | Substrate primitive (NOT a sibling) | Patient-rooted scheduled future obligations attached to finding/case/program; materialization-into-task-when-due; missed-recall escalation |
| Patient-reported outcomes (PROs) | Substrate primitive (extends intake + atom layer) | Recurring patient questionnaires that feed into clinical findings; specialty-scoped (post-rhino satisfaction, BiPAP adherence, pain scores, Mohs scar PROs) |
| **Participant + thread lifecycle (cross-substrate) — DL-12 binding** | DL-12 lock + canonical homes (§1D / §1G.1 / §1G.3 / §1G.6.2 / §1J / §1V / §1Q / §1N + primitives #1 / #2 / #11 / #13 + §5(b)) | 28 binding sub-clauses (see §8.1 below). Applies across c1 patient_inbox_messages, c2 patient chat, future internal_collaboration sibling, future external-line, future patient_action_items, fax rail + artifact + queue. |

### 8.1 Participant + thread lifecycle cross-cutting concern — DL-12 binding sub-clauses (28)

Per DL-12 lock (MAIN system map). The 28 sub-clauses below name the cross-cutting discipline that every messaging substrate must honor. **Detailed canonical homes** per sub-clause point to MAIN sections / foundational primitives / radar zones; this row records the cross-substrate enumeration so future contributors find it in one place.

1. **State machine** — `active` / `left` / `muted` / `observer` / `assigned` / `derived_from_group_membership` / `derived_from_role`. Canonical: §1G.1 + this row.
2. **Thread status enum** — `open` / `waiting` / `resolved` / `archived` / `entered_in_error`. Canonical: §1G.1 + §1V.10(a).
3. **`waiting` requires `waiting_on` / `primary_blocker`** for clinical / billing / safety / adverse-event / patient-facing threads. Canonical: §1G.1(c).
4. **Owner cardinality** — individual / team / queue / role / coverage group. Canonical: §1G.1(b).
5. **Lifecycle policy profile by thread class** — casual = permissive; clinical/Rx/billing/safety/adverse-event/patient-facing = strict. Canonical: DL-12 invariant 5 + §1V.10(b).
6. **Title source taxonomy** — system-derived / user-set / group-derived; source explicit + audited on change. Canonical: this row.
7. **Retention principles parameterized by thread class.** Canonical: §1V.10(b).
8. **Intervention semantics** — admin/CMO/IT add/remove/takeover/restrict/recover capability-gated + audited + no-impersonation. Canonical: §1D.3(b) + §1J.9 + §1V.10.
9. **Closure discipline** — open clinical/safety/Rx/billing/adverse-event obligations gate archive. Canonical: §1G.3(a).
10. **Actor type taxonomy** — `patient` / `staff` / `staff_with_ai_assist` / `system` / `automation` / `ai_assisted` per primitive #1. **`staff_with_ai_assist` distinct from `ai_assisted`** — authorship-attribution rule preserves human-as-author for accepted AI drafts. Canonical: primitive #1 + §4.A.
11. **AI participation bounds** — AI may summarize/classify/route/title-suggest/owner-suggest/draft-for-review/propose-action-items/propose-or-create-system-labeled-threads; AI may NOT silently send automated patient-facing messages / resolve clinical state / impersonate staff / alter history / create unowned threads / rewrite authorship onto AI. Canonical: primitive #11 + §1N.8(a).
12. **System/AI-thread provenance with anti-noise** — `created_by_actor_type` + `trigger_source` + `evidence_refs` + `reason_code` + AI confidence + owner-at-creation + audit_events + `human_review_required` flag + dedupe key + cooldown window + severity threshold + ownership controls; high-sensitivity clinical/Rx/safety threads auto-created only under approved deterministic trigger policy or require human triage/proposal state. Canonical: primitive #11 + §1N.8(c)+(d) + §7.14.4.
13. **Template-engine-stays-separate-from-thread-surface with human-vs-automated send distinction** — human-authored patient chat = free-text under capability + audit + PHI/relationship-scope per §1Q.14.1(b); automated/system/rule-fired/campaign/notification/AI-generated patient-facing sends = template + disclosure-policy + privacy-tier + prohibited-claims governance per §1Q + primitive #3 + primitive #13. Threads RENDER template-generated messages but are NOT the template engine. **Internal staff snippets distinct** from patient-facing templates; when DL-11 sibling activates, snippets land in typed/versioned registry inside the sibling. Canonical: §1Q.14.1 + primitive #13.
14. **Thread storage stays per-substrate** — no mega-table; patient chat = c2 messages/message_threads; patient inbox = c1 patient_inbox_messages; external-line = future substrate; internal collab = future internal_collaboration sibling; tasks = future patient_action_items; fax = rail + artifact + queue. Surface boundaries enforced per DL-8 + DL-7. Canonical: §5 + this row.
15. **Search/discovery as future projection over substrates** — aggregates across substrates ("show all communications/discussions/tasks involving patient X / relationship Y / order Z / lab W / fax F") but does NOT replace underlying source substrates. NOT a new source of truth. Canonical: this row + topology §12 forward-pointer.
16. **Thread search/discoverability/visibility governance** — capability-gated + scope-aware; FIVE visibility classes (public/internal channels, private group threads, 1:1 DMs, patient/object-linked threads, restricted/sensitive threads); 1:1 DMs + private group threads NOT globally searchable by ordinary staff (anti-panopticon); patient/object-linked threads discoverable only from patient context to authorized staff; admin/CMO/IT/compliance discovery audited + reason-coded + distinct from ordinary search. Canonical: §1J.12.
17. **Three-level control hierarchy** — NOT single global toggle: org-level policy (allow public channels, allow private DMs, retention, eDiscovery roles, manager access, care-team discoverability, archived-in-search) + thread-level (visibility class + legal hold + archive state) + user-level (mute, notification, hide-archived, favorites/pins, DND — preference NEVER access governance). Canonical: §1J.12(g).
18. **Patient notification preferences** — patients may control channel/quiet-hours/per-thread/per-brand mute, BUT constrained by message intent + clinical/safety criticality + consent + disclosure policy per §1Q.14.1(d); safety/clinical_required/Rx-critical/billing-critical/appointment-critical/legal-compliance cannot be silently suppressed as marketing. Canonical: §1Q.14.1(d).
19. **Staff notification preferences** — staff may control muted threads / working/off-duty / on-call / mention-level / group-channel / ringtone, BUT subordinate to capability + role + on-call/coverage + thread class + assignment + escalation policy per §1D.3(c) + future staff-presence/on-call layer; on-call escalation / safety/adverse-event / CMO escalation / assigned-owner-active-state / compliance/admin recovery / unresolved-clinical-blocker bypass mute. Canonical: §1D.3(c).
20. **Patient/object-linked-thread-projection** — once attached via `internal_thread_object_links`, thread inherits patient-context governance (access + audit + retention + discoverability); staff-visible from patient context to authorized staff; NEVER patient-visible by default; NEVER canonical chart/order/Rx/lab state; conversion to patient-facing message/task/note/record per §1Q template/disclosure governance. Canonical: §1J.12(d) + §7.14.10.
21. **Message edit / correction / retraction history preservation** — edits NEVER rewrite original; substrate retains original content + editor_staff_id + edit timestamp + reason code + audit_events row; UI may show corrected/current; cross-substrate per primitive #1 + §1V.10(c); patient-facing correction policy-aware per §1Q. Canonical: §1V.10(c) + §4.A primitive #1.
22. **Attachments as first-class artifacts** — scan + type + uploader + object link + sensitivity + retention + audit live in artifact substrate, NOT in `message.body` blob; threads attach/render/preview via reference; raw file safety / OCR / document classification / chart filing stays in canonical substrate per §5(b). Canonical: §5(b) sibling-boundary guard.
23. **Notification preview + search snippet privacy** — lock-screen + push body + email/SMS companion + search snippet respect privacy tier + relationship scope + user/device context per §1Q.14.1(e) + §1J.12; receiving an alert NEVER implies full PHI in the preview. Canonical: §1Q.14.1(e).
24. **Legal hold + eDiscovery + compliance export** — administrative surface distinct from ordinary search; capability-gated + reason-coded + audited per §1J.9 break-glass; legal hold prevents archive/recovery; eDiscovery export is one-shot capability, never ongoing search expansion. Canonical: §1V.10(d) + §1J.12.
25. **Urgent/safety/emergency escalation boundary** — messaging surfaces distinguish routine from urgent/safety/emergency; AI safety detection / explicit user flags / adverse-event markers MAY trigger escalation per primitive #11; system MUST NOT imply async chat is emergency care unless operational pathway supports it — honest framing only. Canonical: §1G.3(b).
26. **Thread-to-task / task-to-thread transition** — "done" message ≠ task completion; explicit structured transitions via `internal_thread_object_links` + task substrate state update; completion lives in `provider_tasking` / future `patient_action_items` per DL-7; threads coordinate around state, never own it. Canonical: §1G.1(d) + DL-7 cross-link.
27. **Future thread merge/split/link** — forward-pointer: merge/split/link operations preserve authorship + timestamps + participants + visibility class + audit + access scope; merging MUST NOT collapse access scopes incorrectly. Canonical: radar zone 47 cross-reference.
28. **Queue-routed work semantics with state machine** — internal collaboration admits routing to team/queue/role/coverage group without naming individual per §1G.1(b); queue-routed messages requesting operational work produce/link to task substrate per DL-7; **five queue-routing states tracked SEPARATELY from ordinary participant read state**: `delivered_to_queue` + `unread_by_queue` + `seen_by_queue_member` + `claimed_by_staff` + `completed/escalated_or_overdue` — **read receipt ≠ accountability**; binds the 9pm-provider-to-front-desk-queue scenario. Canonical: §1G.1(d) + §1G.6.2.

**Additional cross-cutting sub-disciplines bound by DL-12 (named explicitly so future contributors find them):**

- **Three-state attachment lifecycle with capability-gated chart-filing disposition** — chat-attachment → reviewed/classified → filed-to-chart; transition to filed-to-chart REQUIRES explicit capability-gated disposition action with audit per DL-7. Canonical: §5.3(b.i).
- **iOS-flattened-upload vs OMNI-native-markup with annotation-as-derived-artifact** — externally flattened uploads ARE source artifact (OMNI doesn't reconstruct pre-markup original); OMNI-native markup preserves original + derived annotation; annotation NEVER overwrites original; PDFs stricter. Canonical: §5.3(b.ii) + §5.3(b.iii).
- **Internal collaboration is NOT a consequence-free backchannel** — culture rule; staff content NOT silently deletable; discoverable through compliance/legal-hold/eDiscovery/admin audit; ordinary visibility stays capability-gated. "If it's in OMNI, write it like compliance may review it one day." Canonical: §1V.10(e) + zones 44, 55.
- **Patient-facing chat rich-media parity with stricter discipline** — photos / screenshots / annotated images / PDFs / aftercare artifacts / short video admissible in patient chat where clinically/operationally needed; stricter than internal — scan + audit + PHI/privacy-classify + sender-attribute + capability-gate; human-authored staff sends under capability/audit; automated/system/AI-generated sends through §1Q template/disclosure governance; video transcoding + size limits + virus scan + secure-portal-link preferred for SMS rails. Canonical: §5.3(b.v) + §1G.3(g).
- **Thread-kind parameterization with backend-coverage-under-1:1-UX** — patient-facing thread substrate parameterized by `thread_kind` (`care_team` / `provider_1:1` / `front_desk` / `esthetician` / `injector` / `billing` / `support` / `post_procedure` / `location_team` / `role_queue` / `on_call`); specialty/care-team is ONE routing shape, not the substrate; "1:1" patient UX preserves backend coverage + escalation + role-queue + audit per §1G.1 + §1G.6.2; prevents 1:1-orphans-when-staff-off-duty failure mode. Canonical: §1G.3(c) + zones 62, 63.
- **Internal-membership-vs-patient-visible-roster distinction** — backend internal participants NOT identical to patient-visible roster; patient-visible roster governed by display policy (named staff / role-title / team alias / "Care Team" label); silent internal participants NOT auto-exposed; staff self-join requires explicit capability + queue/team membership + coverage role + assignment + escalation + admin/CMO authority + break-glass — never curious browse. Canonical: §1J.12(e)+(f) + zones 64, 65.
- **Care-team/coverage-layer-drives-derived-membership** — patient-facing thread membership DERIVED from care-team/coverage assignment layer; thread CONSUMES the layer, never hardcodes membership; defaults from `patient_relationship` + `care_program/pathway` + `specialty` + `geography/licensure` (Hims-style) + `location` + assigned team + `on-call/coverage` + active status + capability; entry/exit paths bound; provider-quits → coverage rule selects replacement; patient-visible disclosure policy-driven across three modes (silent backend, message-authored, explicit transition notice). Canonical: §1G.3(d)+(e)+(f) + zone 66.
- **OMNI internal_collaboration is NOT a replacement for general enterprise collaboration platforms** — OMNI owns relationship-scoped clinical/ops; general enterprise platforms (e.g., Microsoft Teams, Slack, Microsoft 365, Google Workspace, future enterprise chat / Copilot-class tools) may remain general enterprise surface; integration via notifications + deep links + governed connectors but never source-of-truth swap; specific vendor names illustrative — doctrine binds the pattern, not the brand. Canonical: §7.14.9 extension + future governed-enterprise-connector deliverable hook.
- **AI Response Assist replaces screenshot-into-external-AI workflow** — in-app PHI-safe context-aware AI drafting surface; design rule "compliant workflow must be easier than the workaround"; screenshot-into-external-AI for patient-context work is a binding anti-pattern (zone 67). Canonical: §1N.8(e) + primitive #11.

**DL-13 binding sub-clauses (29-33; cross-cutting from §7.13.13):**

29. **Rail-agnostic substrate + vendor-confined adapter pattern (binding)** — substrate carries generic `provider_*` columns (`provider_message_sid`, `provider_status`, `provider_endpoint_id`, `provider_voice_call_sid`, `provider_fax_sid`); vendor specifics in `provider_metadata jsonb`. **Vendor code confined behind an adapter boundary inside the relevant sibling directory.** External-line rail adapters live under `lib/external-rails/<provider>/` (e.g., `lib/external-rails/twilio/`). Broader DL-13 pattern applies to other domains (labs / payments / EHR-export / future) through their own adapter boundaries inside their respective sibling directories — NOT all under `lib/external-rails/`. Future rails compose by adding sibling adapter, never substrate schema change. Canonical: §4.B primitive #10 + §5 sibling #20 + §5.3(c) + §7.13.13.1 + zones 69, 76.

30. **OMNI canonical source-of-truth + vendor-adopt-not-write (binding)** — OMNI's identity / contact / endpoint / queue / settings / consent substrate is master; vendor address books / contact stores / object stores are local convenience for vendor-internal use only, NEVER authoritative. Manual patient/account creation in scheduling publishes normalized contact handles into OMNI; vendor data is not consulted for OMNI matching. Phone updates trigger dedupe / match / retroactive-link checks with audit. Pattern generalizes to payment processors / lab vendors / pharmacy vendors — OMNI publishes; vendor adopts. Canonical: §4.B primitive #5 + MAIN §1J.13 + §7.13.13.2 + zone 70.

31. **Settings precedence hierarchy (six-level, top-down; binding)** — when settings conflict across scope layers, precedence is: **(1) Law / compliance / consent** > **(2) Safety / clinical criticality** > **(3) Endpoint policy** > **(4) Queue policy** > **(5) User preferences** > **(6) Device / client preferences**. Lower-precedence layers MAY NEVER override higher-precedence layers. Pattern applies wherever layered settings exist (notification policies, access policies, retention policies). Canonical: MAIN §1D.4 + §7.13.13.3 + zone 75.

32. **Deterministic outbound 8-gate (binding)** — every automated / system / rule-fired / template-fired / campaign / scheduled-send external-line outbound passes eight deterministic gates BEFORE adapter dispatch: **(i) endpoint-intent classification** + **(ii) consent / opt-in** + **(iii) STOP / HELP suppression** + **(iv) template / disclosure** + **(v) quiet-hours / send-window** + **(vi) idempotency** + **(vii) rate-limit** + **(viii) prohibited-claims / safety classification**. **AI confirmation is NOT a gate** — deterministic-only. Gate failure logged with reason; suppressed sends don't silently retry. STOP is intent-class-scoped + channel-scoped by default; cross-channel / cross-intent STOP requires explicit reciprocal logic. Pattern generalizes to email / voice IVR / fax outbound / future channels. Canonical: MAIN §1Q.14.2 + §7.13.13.4 + zones 73, 78.

33. **Display-projection-not-substrate discipline (binding)** — conversation display identity (name / avatar / initials / endpoint label / group title) and status chips (Unknown / Lead / Booked / Established / Active Program / Lapsed / VIP / Needs Action / Payment Issue / Clinical Review / Opted Out) are **computed projections at query time** over substrate (contact_identities + patient_relationships + appointment state + care_programs + intake state + patient_consents + open action items + billing state + clinical/safety flags). **NEVER independent mutable `chat_status` / `lead_stage` / `display_state` columns.** Projection-cache tables admissible per DL-8 admission criteria IF justified by performance, but cache is derived state with clear invalidation contract, NEVER source of truth. Pattern generalizes to dashboard tiles, report summaries, queue badge counts. Canonical: MAIN §1V.11 + §7.13.13.5 + zones 71, 74.

**Additional DL-13 cross-cutting sub-disciplines (named explicitly so future contributors find them):**

- **Handle-vs-person identity discipline (DL-10 extension)** — a phone number / email / WhatsApp handle is a **handle, NOT always a person**. Family member, spouse, assistant, shared office line, reused mobile number, typo, fraud-substituted handle all admit phone-as-handle. `contact_identities.phone_e164` is normalized + indexed; future `contact_identity_handles` admits multi-handle attachment without JSONB stuffing. Matching high-confidence but never blind; ambiguous-handle / shared-handle / typo / reassigned states are first-class. Canonical: MAIN §1J.13(a) + §4.B primitive #5 + §7.13.13.2.

- **5-disposition pattern on external-line artifact projection (DL-12 invariant 31 extension)** — voicemail audio / transcript, MMS photos / videos, annotated images, PDFs from external_conversations remain on `external_conversation_artifacts` until linked + dispositioned. On patient projection: **five admissible dispositions** — link / attach / chart_file / safety_task / reject_spam. **No artifact auto-files to chart on projection.** Chart filing is a separate capability-gated explicit step. Canonical: MAIN §1P.15 + DL-12 invariant 31 + §4.B primitive #16.

- **Architectural mode-agnosticism (4 brand modes × 3 backend modes)** — external-line operating modes configured per brand / practice_entity / endpoint: high-touch clinic / portal-first limited-phone / support-only / disabled external-line. Backend operating modes: shared backend + shared ops / shared backend + separated ops / separate entities. **Substrate admits all 12 combinations without hardcoding either mode.** Canonical: MAIN §1D.4(c) + DL-10 §"$500M-state non-foreclosure clause".

- **AI-not-as-participant on external conversations (DL-13 anti-pattern; binding)** — AI is NEVER a thread participant or first-class authoring identity on external_conversations. External sends use one of three actor types: `staff` (manual), `staff_with_ai_assist` (human approved + sent AI draft per §1N.8), `system` / `automation` (deterministic rule/template per 8-gate). **`ai_assisted` alone is NOT admitted for external-line send.** AI Response Assist drafts must transition to human-approved or deterministic-policy-approved before send. Canonical: MAIN §1N.9 + §4.B primitive #11 + zone 78.

**§8.1 binding clauses — DL-14 binding sub-clauses (6 NEW: 34-39).** DL-14 (OMNI CNS center of gravity — event-driven care coordination; rails and surfaces are outputs) extends the §8.1 binding clauses without renumbering 1-33. The new clauses 34-39 bind the CNS center of gravity as cross-cutting concern across every primitive, every sibling, and every cross-cutting axis.

34. **CNS center-of-gravity binding (DL-14 invariant 1).** OMNI is the event-driven care coordination brain that reads a unified event graph (atoms, clinical atoms, scheduling, purchases, treatments, intake, calls, voicemails, SMS, email, in-app messages, labs, Rx, memberships, packages, provider/staff activity, patient state, elapsed time, and any other event source). OMNI is NOT a messaging system, Twilio integration, marketing tool, outbound-job runner, or basic rules/templates engine. Designing sections / siblings / primitives that frame OMNI as one of those reductive shapes is a DL-14 violation. Canonical: MAIN DL-14 + §0 + zones 79-82 + ADR §7.17.

35. **Multi-actor decision binding (DL-14 invariant 2).** The CNS decides actions across multiple actor targets: **patient, provider, front desk, care coordinator, manager, compliance/admin, AI planner, queue/team, external vendor/system.** Designing CNS sections that only handle patient-facing actions is a DL-14 violation. Every CNS subsystem must admit non-patient actor targets as first-class. Canonical: MAIN DL-14 invariant 2 + zone 88 (CNS-without-non-patient-actors) + ADR §7.17.

36. **Multi-type action binding (DL-14 invariant 3).** CNS action types include patient messaging (SMS / email / in-app / push), provider notification, staff task creation, passive awareness marker (with state machine `OMNI sent → unseen → seen → acknowledged`), escalation, suppression/cancellation of planned actions, wait / throttle, AI suggestion / planning request, lifecycle state update, outcome feedback logging, no-op. The action substrate (currently primitive #10, currently named `outbound_jobs`) must host all action types as projections, not only patient outbound. **Adequacy and naming of primitive #10 is determined by Phase 0; DL-14 binds subordination only.** Canonical: §4.B primitive #10 DL-14 subordination + zones 83-84.

37. **Rails-as-outputs binding (DL-14 invariant 4).** SMS/MMS, email, in-app, push, voice, voicemail, provider inbox, staff task surfaces, manager dashboards, vendor adapters, and future rails are **projections of CNS decisions**, not orchestrators. Rail-side fail-open / gate logic / suppression / throttle must inherit policy from the upstream CNS decision (intent_class, actor_target, policy_class), not invent it locally. Designing rail-side fail-open logic without first establishing what the brain decided is a DL-14 violation. Cross-link DL-13 invariant 4 (8-gate as rail-side execution of brain decisions) + zones 85, 87.

38. **Subsystem subordination — not adequacy (DL-14 invariant 5).** Subsystems — §1Q rules + templates engine, §1Q.21 Marketing Lifecycle, §1Q.17 privacy gate, §1Q.19 dynamic behavior gate, primitive #10 action substrate, primitive #11 AI runtime, Twilio + future rail adapters — operate UNDER the CNS, not AS the CNS. **The current naming, scope, and adequacy of these subsystems is NOT certified by DL-14.** Adequacy is determined by Phase 0 of the brain hardening audit (`.cursor/plans/omni_brain_hardening_d1ef429b.plan.md`). DL-14 binds **subordination only**; Phase 0 + Phase 1 determine whether subsystems must be broadened / renamed. Canonical: MAIN DL-14 invariant 5 + §4.B primitive #10 DL-14 subordination + §4.B primitive #11 DL-14 subordination.

39. **CNS learning loop binding (DL-14 invariant 6).** Outcomes, staff feedback (thumbs-up / thumbs-down / unsafe markers) on system actions, AI suggestion accept / edit / reject events, and awareness-marker state transitions are first-class CNS inputs. Feedback must attach with full lineage depth: action id, rule id + version, template id + version, campaign step (if marketing), channel projection / rail attempt, patient context snapshot at decision time, AI proposal id, prompt version, model version, final action taken (diff against AI proposal where applicable). A CNS without a learning loop is a one-way emitter — rejected by DL-14. Canonical: MAIN DL-14 invariant 6 + Phase 0 stress scenarios 9-11 + zone 88 (one-way-emitter anti-pattern).

**Additional DL-14 cross-cutting sub-disciplines:**

- **Adequacy verdicts are Phase 0 work (DL-14 § "subordination, not adequacy")** — this foundational doc binds primitive #10 and #11 as subsystems under the CNS but does NOT certify their adequacy. The two open questions ("is `outbound_jobs` truly universal across all action types? is AI runtime truly a planner over multi-event state?") are answered by Phase 0 of the brain hardening audit, not by DL-14 itself. Canonical: foundational §4.B primitive #10 + §4.B primitive #11 + Phase 0 §D primitive universality audit.

- **CNS learning loop attachment depth (DL-14 invariant 6 elaboration)** — feedback substrate must support linking each feedback event to the action it critiques, the rule that fired, the template that rendered, the campaign step (if applicable), the channel projection / rail attempt, the patient context snapshot at decision time, the AI proposal id, the prompt version, the model version, and the final action taken (so AI accept-with-edit produces a diffable record). Without this depth, feedback degrades into binary signal that cannot drive targeted improvement. Canonical: foundational §0 + MAIN DL-14 invariant 6 + Phase 0 stress scenarios 10-11.

- **Passive awareness marker substrate (DL-14 invariant 3 elaboration)** — passive provider / staff awareness markers (system-emitted artifacts that say "OMNI did X" without interrupting the recipient) are a first-class CNS action type with state machine `OMNI sent → unseen → seen → acknowledged`. They are NOT a notification (no interruption) and NOT a task (no required action). They appear on the recipient's "automation activity" surface so the recipient retains awareness of system behavior without paying notification tax. Phase 0 audits whether this substrate exists or must be created. Canonical: foundational §0 + Phase 0 stress scenario 9.

- **CORRECTION framing (DL-14 §parenthetical)** — DL-14 is a CORRECTION, not a discovery. The CNS framing existed in fragments across §1Q + Marketing Lifecycle audit + primitive #10 + primitive #11 + dynamic-behavior gates + runtime green-light, but was never canonized as a top-level binding doctrine. This let multiple downstream discussions drift into reductive reframings. DL-14 fixes that by canonizing the spine in plain sight with explicit rejected reframings + radar protection. Future contributors who encounter "OMNI as messaging system" or "OMNI as Twilio integration" framing in any source (doc, conversation, PR) MUST point back to DL-14 anchor + radar zones 79-88. Canonical: MAIN DL-14 §parenthetical + evolution narrative Act XV + foundational §0.

**§8.1 binding clauses — DL-14 invariants 7-22 binding sub-clauses (26 NEW: 40-65; Phase A.2).** DL-14 invariants 7-22 (Phase A.2) extend the §8.1 binding clauses without renumbering 1-39.

40. **AI hybrid interpretation + action-assist layer binding (DL-14 invariant 7).** AI is the CNS hybrid interpretation and action-assist layer subordinate to deterministic CNS policy. AI MAY classify / infer intent / recommend / draft / execute bounded low-risk; AI MUST NOT bypass consent / ignore STOP / override safety / dispatch without validation / create clinical truth / become source of record / talk to patients as itself / operate outside CNS.

41. **AI autonomy modes binding (DL-14 invariant 8).** Seven modes (off / observe-classify / draft-only / recommend-action / human-approved-execute / bounded-autopilot CNS-executed / escalate-only). Default conservative. Bounded autopilot per-org-policy-opt-in for enumerated low-risk action types only. Clinical-risk interrupt ABSOLUTE.

42. **AI inbound intent classification + scheduling-intent bounded-autopilot binding (DL-14 invariants 7 + 14).** Inbound message and voicemail-transcript events feed AI intent classification BEFORE deterministic policy; scheduling intent is a first-class CNS capability that composes from `scheduling_lifecycle/` + provider rules + resource availability + deposit/consent + AI planning + CNS validation.

43. **AI jurisdiction / capability envelope binding (DL-14 invariant 9).** Every AI invocation declares jurisdiction (operations / clinical / content / safety_triage) co-axially with role surface (P / O / A / M per §1N.2). Envelopes share infrastructure (one engine, one audit spine, one capability layer) but differ in allowed tools / context / outputs / autonomy mode / human review / escalation rules. Cross-envelope communication uses typed CNS artifacts; freeform agent-to-agent chatter is rejected.

44. **AI invocation audit lineage binding (DL-14 invariant 10).** Every AI invocation produces an `audit_events` row carrying full lineage fields (see DL-14 invariant 10 in MAIN). Extends `§1N.6a` + `§1K.5.A` + `§1P.11`.

45. **AI cross-envelope safety routing binding (DL-14 invariant 9 elaboration + Guardrail 1).** When operations envelope detects scheduling intent AND safety/triage classifier detects clinical cue, operations envelope MUST NOT autopilot. Clinical envelope is invoked; provider review required per `§1J.10` / `§1K.5.A`; system response chosen by deterministic policy, NOT AI. Misrouting clinical cues into operations-only autopilot is a binding anti-pattern.

46. **AI policy / toggle matrix binding (DL-14 invariant 11).** AI autonomy resolves through seven layered axes (org / brand-location / channel-surface / conversation-thread-pathway-rule-step / service-intent / provider-patient-segment-risk / confidence-runtime). Default-closed; safety-biased on conflict; clinical-risk interrupt supersedes all layers. Substrate must admit `org_ai_policy_configurations` shape (per-layer config rows). Every invocation records `ai_policy_config_id` + `policy_resolution_trail`.

47. **Patient-facing AI boundary preservation (Guardrail 4).** CNS may send a system-authored patient message whose content was AI-assisted only when (a) pathway permits per clause 46, (b) deterministic CNS policy validates (consent + STOP/DNC + intent class + cadence + recent-contact throttle + quiet-hours + `§1Q.14.2` 8-gate), (c) template + content + safety checks pass, (d) action substrate executes (NOT AI), (e) recorded `actor_type` is `system` / `automation` or `staff_with_ai_assist` or `provider_ai_assisted` — NEVER `ai_assisted` alone.

48. **Re-prompt / retry / no-response stateful follow-up binding (DL-14 invariant 12 / `§1N.16`).** CNS supports stateful retry pathways with pre-fire revalidation before each retry fires. Configurable per pathway. AI drafts / recommends; CNS validates; action substrate executes.

49. **No global meta-AI / supervisor-AI binding (DL-14 invariant 13).** CNS itself is the supervisor. No AI envelope oversees other AI envelopes. Observability / drift / quality detection is deterministic monitoring layer extending `§1N.6a` — never another AI orchestration layer.

50. **CNS 9-layer vertical stack + 10 horizontal domain slices binding (DL-14 invariant 14).** Every operational request flows through L1 raw input rails → L2 atomization → L3 AI interpretation → L4 context assembly → L5 deterministic policy → L6 planner → L7 `orchestration_actions` substrate → L8 rail/surface execution → L9 feedback loop. 10 horizontal domains use the same spine; no domain-specific mini-brain.

51. **Control ownership state machine + substrate-vs-UI distinction binding (DL-14 invariant 15).** Nine substrate states + 4 pause sub-types; substrate-vs-UI distinction binding; every state transition writes audit row.

52. **6-layer event-sourced + CQRS architectural pattern + lifecycle states binding (DL-14 invariant 16).** Event → cns_decision → orchestration_action → projection → attempt → outcome. Each layer is a separate substrate record; layers MUST NOT be conflated. Every rail/surface execution row carries `orchestration_action_id` FK. 12 lifecycle states for orchestration_actions (proposed / validated / queued / blocked / suppressed / waiting / executing / succeeded / failed / canceled / superseded / expired).

53. **Multi-tenant + federation-aware AI scoping binding (DL-14 invariant 22).** Cross-tenant isolation; federated-org AI shares state ONLY per active A1 permeability policy (default is NOT total visibility); location-specific context binding.

54. **`orchestration_actions` universal substrate naming + enum sets COMMITTED RENAME (DL-14 invariants 3 + 14 + 16 + 17; primitive #10 rename).** Primitive #10 conceptual rename to `orchestration_actions` is COMMITTED (non-reopenable). `action_type` enum (16 types) + `origin` enum (9 origins, including `provider_ai_assisted`) + `actor_target` enum (9 targets) + `channel` enum + `control_state` enum (9 states per invariant 15) + lifecycle_state enum (12 states per invariant 16) all bound. Phase 0 / Phase 1 audit only HOW physical migration lands.

55. **§1Q rules + templates emit `orchestration_actions` binding (DL-14 invariants 3 + 14 + 16 + §1Q.0 invariant 13 update).** Rules + templates emit `orchestration_actions` rows — NOT "outbound_jobs," NOT "messages." Template rendering produces the content payload; rule action declaration produces the action_type + origin + actor_target + channel + control_state on the emitted orchestration_action. The 8-gate per §1Q.14.2 validates the orchestration_action before any rail projection / attempt.

56. **Manual-text fast path discipline (DL-14 invariant 16 elaboration).** Staff-authored manual messages (origin = staff_manual; control_state = human_controlled) go through fast path: orchestration_action created + immediate rail projection + immediate attempt — no AI ceremony, no reason modal, no draft revalidation. Hard-stop gates still apply via stripped 8-gate.

57. **Every rail/surface execution row references upstream `orchestration_action_id` (DL-14 invariant 16 binding).** `external_dispatch_attempts` carries `orchestration_action_id` FK; `email_dispatch_attempts` same; `scheduling_booking_attempts` same; `payment_link_creation_attempts` same. No rail-side row exists without an upstream intent record.

58. **`orchestration_runs` parent state-machine binding (DL-14 invariant 17).** Multi-step journeys / pathways host on `orchestration_runs` (parent state machine); atomic step emissions are `orchestration_actions`. Many actions per run; some actions standalone (`orchestration_run_id` NULL for manual / one-off). Pathway state lives on the run row, NEVER on action rows. Phase 0 audits whether existing primitives (§1Q.21 campaign_enrollment + §1G.3 continuation/adherence) generalize into orchestration_runs.

59. **AI Compose Assist global capability binding (DL-14 invariant 18).** Compose Assist is ONE shared capability across all staff/provider composition surfaces (provider chat / front desk SMS / ops inbox / email / in-app / internal staff notes / provider notifications / patient-facing template edits / voicemail follow-up). Role-scoped action sets enforced by capability + jurisdiction + channel. Five binding invocation modes (`ai_assist_mode` enum): polish_existing_draft / draft_reply_from_context / suggest_next_action / bounded_autopilot_recommendation / provider_draft_refinement.

60. **Context Packet Builder binding (DL-14 invariant 18).** Shared substrate spine for all AI Compose Assist invocations. Produces mode-specific scoped packets. **The Builder's job is NOT to restrict context size by mode — it is to enforce role + jurisdiction + channel + DLP-style permissions on WHAT context the invoker is allowed to use, AND to enforce output authority on WHAT the AI is allowed to emit.** Polish, Draft, Suggest, Bounded Autopilot, and Provider Draft Refinement all receive RICH relevant context. **Product principle: rich relevant context, restricted output authority.**

61. **Provider AI-assisted clinical reply discipline binding (DL-14 invariant 18 + invariant 16 origin enum).** Provider can invoke AI clinical assist; AI generates clinical summary / suggested assessment / patient-facing draft / follow-up plan / warning signs; provider edits / approves / rejects / regenerates; final send recorded as `actor_type = provider`, `origin = provider_ai_assisted`, `sent_as_source = ai_assisted_human_approved`, full AI lineage. Provider owns clinical authority. AI cannot independently diagnose / prescribe / clear contraindications / create clinical truth. Patient sees provider attribution.

62. **Simple surface, serious substrate (DL-14 product principle binding).** UX exposes simple Gmail-style buttons (Polish / Make warmer / Shorter / Professional / Simplify / Expand / Add warning signs / Add next step / Draft reply / Summarize thread / Suggest response). Substrate machinery (role_surface / jurisdiction / autonomy_mode / control_state / policy_resolution / Context Packet Builder / deterministic gates) happens invisibly underneath. Foundational docs bind substrate capabilities + audit lineage; exact UI form is downstream UI/UX work.

63. **AI intent preservation in Polish + Draft Refinement binding (DL-14 invariant 19).** Polish + provider draft refinement may improve wording / clarity / tone but MUST NOT silently change clinical or operational intent. Material additions surfaced as flagged suggestions for explicit human accept/reject. Audit captures diff + `intent_preserved` + `material_additions_suggested` + `human_accepted_additions`.

64. **Prompt injection defense + instruction hierarchy binding (DL-14 invariant 20).** Inbound patient/staff/vendor/external message content is UNTRUSTED data — never AI instructions. Instruction hierarchy top-down: system/CNS policy + Guardrails > org policy > provider/staff explicit instruction > approved knowledge > inbound message content. AI prompt construction sandboxes/labels inbound text as data.

65. **Live-state revalidation + tool failure fallback binding (DL-14 invariant 21).** Before any orchestration_action transitions queued/waiting → executing, CNS revalidates current state. Tool failure → human/staff workflow, NEVER hallucinated success. Failed revalidations record `tool_failure_reason` on lifecycle transition to `failed` or `blocked`.

**§8.1 binding clauses — DL-16 binding sub-clauses (30 NEW: 66-95; Phase B Commit 1).** DL-16 (Universal CNS Event Envelope + Taxonomy Evolution) extends the §8.1 binding clauses without renumbering 1-65. DL-16 binds the universal grammar that DL-14's CNS reads + writes; every domain (scheduling, messaging, commerce, intake, labs, Rx, notes, external-line, internal collaboration, fax, future) specializes against DL-16 rather than inventing its own envelope or vocabulary.

66. **Universal event-graph principle binding (DL-16 invariant 1).** CNS reads all clinically / operationally / financially / communication / compliance-meaningful events across all domains. Closed taxonomy REJECTED. Extensible v0 vocabulary admitted under registry governance + envelope discipline + invariants 2-39. Trivial telemetry (UI cursor movement, scroll position, calendar redraw) does NOT enter the CNS event graph. Canonical: MAIN DL-16 invariant 1 + §1Z.0 + §1Z.1.

67. **Universal event envelope binding (DL-16 invariant 2).** Every domain event carries a canonical envelope: `event_id` / `event_kind` / `domain` / `source` / `actor` / `occurred_at` / `recorded_at` / `effective_at` / `valid_from` / `valid_to` / `entity_refs` / `before_state` / `after_state` / `payload_version` / `schema_version` / `audit_lineage` / `idempotency_key` / `confidence` (authority / source quality) / `correlation_id` / `causation_id` / `aggregate_id` / `sequence_number` / `tenant_id` / `environment_context` / `replayability_flag` / `status` / `replacement_kind` / `retention_class` / `consistency_tier` / `cost_attribution`. Per-domain payload is registry-typed. Envelope is universal across all domains. Canonical: MAIN DL-16 invariant 2 + §1Z.1.

68. **Seven-category vocabulary partition binding (DL-16 invariant 3).** Domain events (CNS inputs) / canonical domain state (source of truth) / `orchestration_runs` (saga containers per DL-14 invariant 17) / `orchestration_actions` (CNS outputs per DL-14 invariant 16) / rail-or-surface projections (delivery) / outcome events (executor results) / CNS decisions (decision_id audit). Conflating any two categories REJECTED. Domain-specific event vocabularies (DL-15 scheduling, future DLs) specialize against this partition. Canonical: MAIN DL-16 invariant 3 + §1Z.2.

69. **Bidirectional CNS↔domain seam binding (DL-16 invariant 4).** Every domain is BOTH producer (state-transition events into CNS graph) AND consumer (receives `orchestration_actions` from CNS for execution against canonical state). Domain executors validate + execute + emit outcome events. CNS / AI MAY NEVER directly mutate domain canonical state outside the domain's validation boundary. AI never writes directly to scheduling / commerce / clinical canonical tables. Canonical: MAIN DL-16 invariant 4 + §1Z.14.

70. **Taxonomy registry governance + producer/consumer schema contracts binding (DL-16 invariants 5 + 9 + 29).** Every new `event_kind` / `action_kind` requires registry entry with owner, schema, version (semver), status (proposed/active/deprecated/superseded/retired), compatibility class (additive/removed/renamed/type-changed), deprecation path + sunset date, allowed producers, allowed consumers, required fields, breaking-change tests, dependency graph. **Schema evolution rules**: additive optional = backward-compatible; removed = breaking; renamed = aliased with deprecation period; type changes = breaking + migration plan. CI lint rejects raw `kind_id` string literals — every emit/subscribe site uses the registry-typed constant. Canonical: MAIN DL-16 invariants 5 + 9 + 29 + §1Z.3.

71. **State mutation = event emission ATOMIC binding (DL-16 invariant 6).** Every canonical state change pairs with its event emission in a single atomic boundary: event sourcing OR transactional outbox. Non-atomic dual writes REJECTED. Silent state mutation (changing a row without emitting event) REJECTED. Enforced at sibling-executor boundary. Canonical: MAIN DL-16 invariant 6 + §1Z.4.

72. **Payload minimization + policy-scoped PHI hydration binding (DL-16 invariant 7).** Domain events carry minimum routing/context payload + references to sensitive PHI, NOT PHI itself. Consumers hydrate sensitive payloads only after policy check: role + capability per §1D + relationship scope per primitive #19 + jurisdiction + DLP + federation permeability per A1 future arc. Hydration requests audited. Canonical: MAIN DL-16 invariant 7 + §1Z.5.

73. **Multi-tenant isolation at event-bus level binding (DL-16 invariant 8).** Every event carries `tenant_id` (org / brand / location / practice_entity per DL-10). Subscribers enforce tenant boundary at subscription + delivery. Cross-tenant federation requires explicit consent + audit per DL-10 / A1. Event bus is NOT a shared global namespace; default = strict isolation. Canonical: MAIN DL-16 invariant 8 + §1Z.5.

74. **Schema validation at WRITE time binding (DL-16 invariant 9).** Events with payloads violating the registered schema REJECTED at envelope layer — never written, never delivered. Production deploys cannot ship schema changes without registry update. Canonical: MAIN DL-16 invariant 9 + §1Z.3 + clause 70.

75. **Action authorization at EMISSION time binding (DL-16 invariant 10).** CNS emitting an `orchestration_action` checks policy (AI autonomy per DL-14 invariant 8 + capability per §1D + jurisdiction per DL-10 + clinical clearance per §1K.5.A) at emission AND at execution. Emission-time authorization prevents unauthorized actions from reaching the queue. Canonical: MAIN DL-16 invariant 10 + §1Z.6.

76. **Idempotency at action EXECUTION binding (DL-16 invariant 11).** Re-firing the same `action_id` MUST NOT double-execute. Executor maintains idempotency ledger per `action_id` (or `idempotency_key`). Crash-resume, retry-after-timeout, replay, webhook redelivery all converge on at-most-once execution semantics. Canonical: MAIN DL-16 invariant 11 + §1Z.4 + primitive #3.

77. **Dead-letter queue + manual review + admin escalation binding (DL-16 invariant 12).** Failed event processing or repeated action execution failures route to DLQ with admin escalation surface + manual review affordance. No silent drops. DLQ age is an observability metric per invariant 27. Canonical: MAIN DL-16 invariant 12 + §1Z.7 + §1Z.11.

78. **Retention discipline per `event_kind` binding (DL-16 invariant 13).** Registry declares retention class per `event_kind`: clinical = HIPAA 6-year+ minimum (jurisdiction-bound); audit = retained indefinitely with compaction; compliance = jurisdiction-bound; debug/telemetry = 7-30 day window. Retention class binds storage cost attribution. Canonical: MAIN DL-16 invariant 13 + §1Z.12 + §1V (retention class).

79. **Executor timeout + outcome contracts binding (DL-16 invariants 14 + 17).** Every executor declares per-`action_kind` timeout + outcome event contract. Timeout → implicit `executor_timeout` outcome → saga compensation per invariant 31. Outcome event taxonomy includes `accepted` / `rejected` / `validation_failed` / `requires_provider_clearance` / `deposit_required` / `executed` / `failed` / `expired` / `superseded` / `compensated`. Action emitted ≠ work completed. Canonical: MAIN DL-16 invariants 14 + 17 + §1Z.7.

80. **Cross-run correlation + replay safety modes binding (DL-16 invariants 15 + 16).** Events spawning multiple `orchestration_runs` linked via `correlation_id`; CNS deduplicates / coordinates when multiple runs touch same patient / encounter / aggregate. Replay safety modes: **simulation replay** (non-emitting default) and **operational replay / recovery** (real emission, explicit authorized recovery mode, per-event idempotency, rail-side duplicate suppression, full audit trail). Mode declared via `environment_context`. Mode confusion REJECTED. Canonical: MAIN DL-16 invariants 15 + 16 + §1Z.7.

81. **Temporal validity — four time fields binding (DL-16 invariant 18).** For clinical / identity / financial / consent / clearance facts: `occurred_at` (when fact effective in world) + `recorded_at` (when OMNI learned/wrote) + `effective_at` (when downstream policy applies — may be future) + `valid_from` / `valid_to` (operative window). Single-timestamp modeling REJECTED for facts with effective-window semantics. Backfills preserve `occurred_at`; corrections preserve causality via supersession. Canonical: MAIN DL-16 invariant 18 + §1Z.8.

82. **Projection freshness + rebuildability + source-of-truth for clinical binding (DL-16 invariants 19 + 24).** Projections declare source substrates + freshness SLA + rebuildability + stale-state behavior. A projection is NEVER authority. Clinical-decision surfaces (AI clinical envelopes, clinical action executors, clinical-decision UI) require **strong-tier consistency** reads against source substrates. Projections admit only for navigation / discovery / analytics / non-clinical-decision surfaces. Canonical: MAIN DL-16 invariants 19 + 24 + §1Z.8 + §1K.5.A.

83. **Causality cycle detection + consistency tiers binding (DL-16 invariants 20 + 21).** Every `orchestration_action` carries `causation_depth`; exceeding registered threshold (default 8-10) REJECTED with admin escalation. Per-pathway max-action limits enforced. Per-`event_kind` consistency tiers: strong (clinical-decision / payment / scheduling-action reads) / eventual (analytics / marketing / search) / best-effort (telemetry). Clinical-decision rules MUST read strong-tier. Canonical: MAIN DL-16 invariants 20 + 21 + §1Z.9.

84. **GDPR / CCPA erasure-by-pseudonymization binding (DL-16 invariant 22).** Right-to-erasure honored via pseudonymization: PII replaced with tombstone refs; audit causality preserved through tombstone graph; downstream consumers see opaque tombstones rather than null. HIPAA / clinical / regulatory legal hold supersedes pseudonymization. Tombstone-resolution mapping stored separately under dual-control. Physical event-row deletion REJECTED. Canonical: MAIN DL-16 invariant 22 + §1Z.12 + §1V.

85. **AI content validation before emission binding (DL-16 invariant 23).** AI-drafted content referencing actions ("booked", "scheduled", "charged", "prescribed", "cancelled", "cleared") MUST validate the referenced action exists in canonical substrate before being emitted as part of any patient/staff/provider-facing message. Hallucination-becomes-truth REJECTED. Canonical: MAIN DL-16 invariant 23 + §1Z.10 + DL-14 invariants 5 + 18.

86. **Patient impersonation gate on unverified inbound binding (DL-16 invariant 25).** Events from unverified handles (per DL-13 handle-vs-identity) receive PUBLIC routing context only. Patient state access (chart hydration, AI clinical envelope, treatment history, prior thread context) requires identity confidence ≥ L-threshold per §1J.4 + audit. Auto-hydration of PHI for unverified inbound REJECTED. Canonical: MAIN DL-16 invariant 25 + §1Z.5 + §1Z.10 + §1J.4.

87. **Cross-domain atomic write REJECTED; saga + compensation binding (DL-16 invariants 26 + 31).** Cross-sibling coordination uses `orchestration_run` + compensating actions only. Each sibling owns its own write atomicity. Two-phase commit / synchronous distributed transactions REJECTED. Failed / incorrect actions resolve via compensating actions, not silent rollback. Correction / cancellation / reversal / refund / retraction / supersession / apology-clarification flows modeled as new actions/events with audit. Canonical: MAIN DL-16 invariants 26 + 31 + §1Z.9.

88. **Operational observability + circuit breakers binding (DL-16 invariant 27).** CNS exposes binding observability set (event lag, DLQ age, replay failures, projection staleness, action failure rate, duplicate suppression rate, unauthorized event-emission attempts, schema rejection rate, executor timeout rate, causality-depth rejects, PHI hydration denials, tenant-boundary violations, AI invocation latency/failure, autonomy-mode-resolution histogram, clinical-risk-interrupt fires, staff-takeover events). Authorized operators can pause/resume by tenant / org / brand / location / domain / `event_kind` / `action_kind` / rail / executor. Emergency safe mode preserves safety/clinical/on-call routing. Canonical: MAIN DL-16 invariant 27 + §1Z.11.

89. **Environment / sandbox / replay / live-fire segregation binding (DL-16 invariant 28).** Every event / run / action / replay / import / executor invocation carries `environment_context` (live / staging / sandbox / replay-sim / replay-recovery / backfill / demo / test). Non-production = non-emitting default. Live executors reject non-live actions unless allow-listed. Production actions cannot be emitted from test/sandbox/replay. Canonical: MAIN DL-16 invariant 28 + §1Z.11.

90. **Producer authorization binding (DL-16 invariant 29).** Domain event producers authenticated + authorized per `event_kind` + `domain` + `tenant_id` + source-attested. External webhooks require signature verification + provider-event idempotency. Internal services may not publish arbitrary `event_kinds` without registry permission. Prevents spoofed `lab_result_received` / `appointment_booked` / `deposit_paid` / `clinical_clearance_received`. Canonical: MAIN DL-16 invariant 29 + §1Z.14 + clause 70.

91. **CNS decision record + context snapshot immutability binding (DL-16 invariants 30 + 33).** Every CNS decision produces a `cns_decisions` row recording `decision_id` + triggering `event_ids` + `context_snapshot_id` + rule versions + AI/model versions + policy resolution path + rejected alternatives + emitted `action_ids` + reason/no-op rationale + decision latency + decision-tier. Every emitted `orchestration_action` traces back to `decision_id` OR explicit manual-bypass record. Context snapshots immutable; audit distinguishes decision-time state from current state — "what did CNS know when it acted" reconstructable independent of later corrections. Canonical: MAIN DL-16 invariants 30 + 33 + §1Z.6 + §1Z.10.

92. **Event-granularity routing — universal ingestion, selective evaluation binding (DL-16 invariant 32).** Event ingestion is universal; action-evaluation is selective. CNS processing is subscription / routing-policy scoped by domain / `event_kind` / criticality / actor target / tenant / relationship / interest. Low-value events do not trigger orchestration unless explicitly subscribed. Canonical: MAIN DL-16 invariant 32 + §1Z.13.

93. **Aggregate concurrency / lock discipline + value normalization binding (DL-16 invariants 34 + 35).** Actions targeting scarce resources (appointment slot, payment authorization, room booking, Rx prescription, send-token-per-window) require coordination keys / aggregate locks / leases / optimistic concurrency. Conflict outcome events emitted on rejection. Payloads declare normalized units / value sets / timezone / currency + raw source value. CNS decisions use normalized; audit preserves raw. Canonical: MAIN DL-16 invariants 34 + 35 + §1Z.13.

94. **Manual reality capture + privileged-action elevated approval binding (DL-16 invariants 36 + 37).** Manual / out-of-band operational actions (provider phone call from personal device, verbal clearance, manual booking, walk-in, manager override) MUST have capture pathways or reconciliation events. Privileged operations (rule modification, safety-check disable, mass-pause CNS, cross-tenant access, schema-breaking change, PHI export, mass-erasure, retention-class change, audit log inspection, tombstone-mapping access, executor allow-list, environment-context promotion) require dual approval + break-glass + auto-time-bound + immediate audit alert + post-action review. Canonical: MAIN DL-16 invariants 36 + 37 + §1Z.12 + §1Z.13 + §1J.9.

95. **Tamper-evident audit log + out-of-band reconciliation binding (DL-16 invariants 38 + 39).** Audit log is append-only + hash-chained (each row's hash includes prior row's hash) OR stored in immutable storage. Audit row mutations require break-glass + dual approval + meta-audit-event with diff. Periodic out-of-band reconciliation jobs validate projections + executor state + canonical state against the source-side event stream; drift = alert + admin review. Reconciliation results recorded as their own `event_kind`. Canonical: MAIN DL-16 invariants 38 + 39 + §1Z.6 + §1Z.11.

96. **Mindbody-class scheduling depth on Day 0 binding (DL-15 invariant 1 + DL-5).** When scheduling activates for a wedge clinic, the `scheduling_lifecycle/` sibling admits provider calendars + service-package catalog + rooms/suites/devices/equipment/resources + multi-resource bookings + prep + cleanup dependencies + recurring availability templates + exceptions/time-off + waitlist substrate + deposit coupling + cancellation policy enforcement + no-show fee + reschedule with audit lineage + group scheduling + back-to-back blocking + buffer rules — on Day 0. "Lighter than Mindbody" is REJECTED as wedge framing per DL-5 + radar zone 31. Canonical: MAIN DL-15 invariant 1 + §1F.10 + ADR §7.18.

97. **Multi-resource atomic booking binding (DL-15 invariant 2).** Bookings consume ≥1 resources atomically: `provider × service-window × room × device × MA × prep-time × cleanup-time × supply consumption × deposit collection`. Partial bookings REJECTED — either all resources commit atomically OR booking action transitions to `failed`. Scheduler executor owns atomic boundary; CNS does NOT reserve resources by writing directly to scheduling tables. Canonical: MAIN DL-15 invariant 2 + §1F.11 + DL-16 invariant 26 + radar zone 132.

98. **Slot offer → hold → book lifecycle + 13-state machine binding (DL-15 invariants 3 + 4 + 5).** Slot lifecycle: `slot_offered` → `slot_held` (TTL) → `appointment_booked` OR `hold_expired` OR `slot_disappeared_before_execution`. Per-hold-class TTL (AI 15 min, staff 60 min, deposit-pending matched to processor, clinical-clearance matched to provider review SLA). Appointment 13 states: `proposed` / `held` / `hold_expired` / `confirmed` / `confirmation_pending_deposit` / `checked_in` / `in_progress` / `completed` / `cancelled` / `no_showed` / `rescheduled` / `disputed` / `archived`. Transitions state-machine-validated; illegal transitions emit `illegal_transition_attempted` audit event. Four time fields per DL-16 inv 18. Canonical: MAIN DL-15 invariants 3-5 + §1F.12.

99. **Reschedule/cancel/no-show compensation + cancellation policy binding (DL-15 invariants 6 + 7).** Reschedule = atomic compensation (cancel original + book new) via single orchestration_run with linked compensation actions. Cancel = compensation action (refund per policy + release resources atomically + notify patient + cancel pending lifecycle reminders). No-show = state transition triggering downstream (no-show fee + lifecycle re-engagement + waitlist promotion). Cancellation policy declared per `service / provider / location / brand`; deterministic at cancel time; AI never invents policy locally. Staff override capability-gated + reason-coded + audited. Canonical: MAIN DL-15 invariants 6 + 7 + §1F.13 + DL-16 invariant 31 + clause 94.

100. **Waitlist substrate + orchestration_runs binding (DL-15 invariants 8 + 16).** Waitlist join → cancellation cascade → `waitlist_offer_sent` (TTL) → conversion-or-expiry → next-eligible. Multi-step booking journeys (new-lead → consult → first-Tx → followup; lab-result-required → review → cleared → rebook; no-show → re-engagement → recovery; pre-treatment intake → atomization → clearance → booking release) ALL live on `orchestration_runs`. Atomic single-emission booking actions live on `orchestration_actions`. Canonical: MAIN DL-15 invariants 8 + 16 + §1F.14 + DL-14 invariant 17.

101. **Deposit coupling binding (DL-15 invariant 9).** Deposit requirements per `service / patient-risk-tier / booking source`. When required: booking → `confirmation_pending_deposit` (state 5); deposit-collection orchestration_action emitted; on success → `confirmed`; on failure → `failed_payment` + release atomically. Deposit substrate lives in Phase C commerce domain — DL-15 invariant 9 binds the **coupling**, not the deposit substrate itself. Cross-domain coordination via saga + compensation per DL-16 invariant 26. Canonical: MAIN DL-15 invariant 9 + §1F.15 + future Phase C commerce DL.

102. **Clinical clearance gating + clinical-cue interrupt — ABSOLUTE binding (DL-15 invariants 10 + 14).** Bookings for clinically-gated services MUST check clinical clearance pre-commit. Contraindications BLOCK booking unconditionally: blood thinners + Botox, pregnancy + retinoid, GLP-1 + scheduled surgery, lab-required-before-followup, provider-flagged-hold. AI booking proposals route through deterministic clinical clearance check before action emission. Override requires provider capability + reason-coded audit per DL-14 inv 8 + DL-16 inv 37. Clearance reads canonical clinical substrate (NEVER projections). Clinical-cue interrupt during booking is ABSOLUTE: any cross-envelope safety detection HALTS the pipeline; provider review action required before re-emit; bypass REJECTED. Canonical: MAIN DL-15 invariants 10 + 14 + §1F.16 + DL-14 invariant 21 + Guardrail 1.

103. **Live-state revalidation + per-resource concurrency lock binding (DL-15 invariants 11 + 21).** Between slot offer / proposal and booking action execution, booking actions MUST revalidate live state via source-of-truth read per DL-16 inv 24. Stale actions transition to `failed_stale` + emit `slot_disappeared_before_execution` outcome event. AI Compose Assist booking proposals MUST revalidate at execution, not proposal. Per-resource concurrency: provider × time-slot, room × time-slot, device × time-slot, supply × quantity coordinated via optimistic concurrency or aggregate lock; scheduler executor is the arbiter. Canonical: MAIN DL-15 invariants 11 + 21 + §1F.17 + DL-16 invariants 24 + 34.

104. **Jurisdiction-aware booking + federation-aware booking binding (DL-15 invariants 12 + 17).** Provider state license + location regulation + brand rules + service availability per location + age-restricted services gate bookings at action emission AND at execution. Cultured ↔ Evo brand separation: default = strict isolation; cross-brand booking obeys active federation/permeability policy per A1 future arc. Cross-jurisdiction bookings (patient resident State A booking with provider licensed only State B) REJECTED unless explicit exception capability granted. Canonical: MAIN DL-15 invariants 12 + 17 + §1F.18 + DL-10 + DL-14 invariant 22 + A1 future arc + DL-16 invariant 8.

105. **AI-assisted booking + prompt injection defense binding (DL-15 invariants 13 + 15).** Bounded autopilot per DL-14 invariants 18 + 19 + 21: AI proposes within autonomy mode bounds; deterministic CNS policy validates; action substrate executes; AI NEVER bypasses clinical clearance, live-state revalidation, jurisdiction gating, deposit coupling, concurrency locks, or compensation discipline. AI content for booking confirmations validates against canonical appointment state per DL-16 inv 23 before patient-facing emission. Prompt injection defense: patient self-booking text / voicemail transcripts / inbound SMS / vendor-relayed text are UNTRUSTED data, never AI instructions per DL-14 inv 20. Clinical-cue extraction goes through safety envelope, NOT booking envelope. Canonical: MAIN DL-15 invariants 13 + 15 + §1F.19 + DL-14 invariants 18 + 20 + 21 + DL-16 invariant 23.

106. **Patient-profile integration binding — PROMINENT (DL-15 invariant 18).** Booking actions read patient profile for past-visit history / service preferences / provider preferences / time-of-day preferences / language preferences / contraindication flags / consent state / membership benefits / package credits / saved payment methods / outstanding balances / loyalty tier / no-show history / cancellation history / lifetime value tier / referral source. Reads obey DL-16 inv 7 (payload minimization — hydrate only fields needed for immediate booking decision) + inv 24 (source-of-truth reads for clinical fields) + inv 25 (patient impersonation gate — unverified handles get PUBLIC routing context only). Patient profile is canonical; booking surface reads but does NOT mutate profile state. Profile updates (preferences inferred from booking choices, no-show history accruing, membership benefit consumed) emit profile-update events. Canonical: MAIN DL-15 invariant 18 + §1F.23 + §1D + §1J + DL-16 invariants 7 + 24 + 25 + radar zones 118 + 125 + 129.

107. **Audit lineage for every booking action — first-class CNS decision binding (DL-15 invariant 19).** Every booking action carries `decision_id` referencing first-class CNS decision record per DL-16 inv 30: triggering event(s), context snapshot per DL-16 inv 33, rule versions, AI versions if any, policy resolution layers, rejected slot alternatives with rationale, emitted action(s), reason. Audit appendable post-action (outcome events, feedback events) but never mutable per DL-16 inv 38. Canonical: MAIN DL-15 invariant 19 + §1F.21 + DL-16 invariants 30 + 33 + 38 + clauses 91 + 95.

108. **Staff override + manual booking pathway + manual reality capture binding (DL-15 invariant 20).** Front desk booking with capability + audit per DL-14 invariant 8; manual bookings emit standard scheduling events through orchestration_actions of `origin = staff_manual` (bypass-AI fast path per Phase A.2 doctrine). Hard-stop clinical gates STILL apply — manual override cannot bypass clinical clearance. Out-of-band scheduling (verbal clearance, paper booking, vendor-relayed booking, walk-in) captured via manual reality capture pathway per DL-16 inv 36. Backfilled scheduling events do NOT trigger live patient outreach unless explicitly authorized per DL-16 inv 16 + 28. Canonical: MAIN DL-15 invariant 20 + §1F.22 + DL-14 invariant 8 + DL-16 invariants 16 + 28 + 36 + clause 94.

109. **Scheduling events specialize DL-16 envelope binding (DL-15 invariant 22).** Every scheduling domain event (`appointment_booked`, `slot_offered`, `hold_expired`, `appointment_cancelled`, `no_show_confirmed`, `waitlist_offer_sent`, `provider_unavailable`, `room_unavailable`, `clinical_clearance_required_for_booking`, etc.) carries the universal envelope per DL-16 inv 2; registry-governed per DL-16 inv 5 + 9 + 29 — NOT a closed enum. Canonical: MAIN DL-15 invariant 22 + §1F.20 + DL-16 invariants 2 + 5 + 9 + 29 + cross-surface reconciliation row 1.

110. **Scheduling orchestration_actions specialize DL-16 partition binding (DL-15 invariant 23).** Every scheduling orchestration_action (`booking_action` / `scheduling_hold_request` / `reschedule_action` / `cancel_action` / `waitlist_offer_action` / `provider_clearance_required_action` / `deposit_required_before_booking_action` / `front_desk_booking_task_action` / `appointment_reminder_action` / `block_schedule_action`) partitioned distinctly from events per DL-16 inv 3. Conflation between events (facts) and actions (intents) REJECTED. Canonical: MAIN DL-15 invariant 23 + §1F.20 + DL-16 invariant 3 + radar zone 115.

111. **Scheduling↔CNS bidirectional seam binding (DL-15 invariant 24).** Scheduler is BOTH producer (emitting scheduling domain events into CNS) AND consumer (executing orchestration_actions from CNS). CNS reads scheduler events to coordinate downstream (patient messaging, provider notification, suppression of lifecycle reminders during active booking flow, payment + deposit coupling, lab + clearance coordination, waitlist promotion). CNS emits orchestration_actions to scheduler to express booking intent. Unidirectional REJECTED. Canonical: MAIN DL-15 invariant 24 + §1F.20 + DL-16 invariant 4 + radar zone 116.

112. **Compensation for incorrect booking actions binding (DL-15 invariant 25).** Failed or incorrect bookings use compensating actions (cancel-with-apology, re-book on correct slot, refund with correction message, supersession of confirmation message). Silent rollback REJECTED — patient already saw the confirmation; cure is a NEW message correcting it, not pretending the original never happened. Canonical: MAIN DL-15 invariant 25 + §1F.13 + DL-16 invariant 31.

113. **Scheduling consistency tier binding (DL-15 invariant 26).** Strong consistency per DL-16 inv 21 for booking commits, deposit reservation, clinical clearance check. Eventual acceptable for waitlist analytics, lifetime-value rollups, no-show statistics dashboards. Best-effort acceptable for slot-search telemetry. Canonical: MAIN DL-15 invariant 26 + §1F.24 + DL-16 invariant 21.

114. **Scheduling retention class declaration binding (DL-15 invariant 27).** `appointments` long retention (medico-legal, 7-25 years per state); `appointment_holds` short retention; slot-search telemetry low retention; waitlist records medium retention. GDPR/CCPA erasure by pseudonymization per DL-16 inv 22; HIPAA legal hold supersedes. Canonical: MAIN DL-15 invariant 27 + §1F.24 + DL-16 invariants 13 + 22.

115. **Scheduling reconciliation jobs binding (DL-15 invariant 28).** Out-of-band periodic reconciliation between scheduling projections (calendar UI, provider dashboard, sales pipeline, day-roster) + canonical appointment state + event stream. Drift becomes audit-event, never silent corruption. Configurable cadence; drift > threshold triggers operational alert per DL-16 inv 27 (observability + circuit breakers). Scheduling circuit breakers: pause/resume per `tenant / brand / location / provider / service` granularity; emergency safe mode preserves clinical / safety routing. Canonical: MAIN DL-15 invariant 28 + §1F.24 + DL-16 invariants 27 + 39.

116. **`scheduling_lifecycle/` sibling specialization binding.** The reserved sibling `scheduling_lifecycle/` (foundational §4.B Reserved Tier table, row 1) is the canonical home for DL-15 invariants 1-28. Multi-resource depth (provider × room × suite × equipment × device × external-facility × staff-role) per Adversarial Scenario Coverage matrix is the binding shape. Sub-shapes within the sibling: (a) **resource modeling** — providers, calendars, rooms, devices, supplies, capacities, availability templates, exceptions; (b) **appointment lifecycle** — proposal/hold/book/check-in/in-progress/complete + cancel/no-show/reschedule + 13-state machine; (c) **waitlist + recovery** — waitlist join/offer/promotion + no-show recovery + rebook offers; (d) **deposit/payment coupling** — coupled to Phase C commerce sibling via saga; (e) **clinical clearance coupling** — coupled to clinical primitives (atoms / safety flags / consent / provider review) via source-of-truth reads per DL-16 inv 24. Canonical: foundational §4.B Reserved Tier + MAIN DL-15 + §1F.10-§1F.24 + cross-surface reconciliation row 1.

117. **DL-15 is the first domain specialization against DL-16.** Future commerce DL (Phase C, three modes — service POS / e-commerce + retail / hims-like async subscription), future Rx + labs + notes DL (Phase D), future intake-as-CNS-input DL specialize similarly. No future domain DL reinvents envelope, partition, or registry — all specialize against DL-16. Phase 0 brain hardening audit validates per-domain DL-16 compliance + DL-15 specialization completeness + ABSOLUTE clinical-cue interrupts + concurrency locks + audit lineage + patient-profile integration coverage. Canonical: MAIN DL-15 §parenthetical + §1F.10 + Phase B plan + brain hardening plan refresh.

**Additional DL-15 cross-cutting sub-disciplines:**

- **§1F.23 patient-profile integration is the CANONICAL HOME** for booking-surface profile reads + the 16 profile dimensions enumerated in DL-15 invariant 18 + the profile-update event vocabulary + the patient-facing "remembered preferences" disclosure for HIPAA marketing authorization clarity per §1Q.21. Future Phase B+1 implementation work ships read patterns + event vocabulary + UX disclosure. Canonical: MAIN §1F.23 + §1D + §1Q.21 + DL-15 invariant 18.

- **DL-15 + DL-16 + DL-14 cross-link chain.** Every booking action: (a) is an `orchestration_action` per DL-14 invariant 3 + DL-16 invariant 3; (b) carries the universal envelope per DL-16 invariant 2; (c) traces to a `decision_id` per DL-16 invariant 30; (d) revalidates live state per DL-15 invariant 11 + DL-16 invariant 24; (e) honors clinical clearance interrupt per DL-15 invariant 10 + DL-14 invariant 21; (f) executes through scheduler executor with atomic boundary per DL-15 invariant 2 + DL-16 invariant 6; (g) emits outcome event per DL-16 invariant 17; (h) compensates rather than rolls back per DL-15 invariant 25 + DL-16 invariant 31. The cross-link chain is binding for every booking surface and every booking pathway.

**Additional DL-16 cross-cutting sub-disciplines:**

- **DL-16 is universal grammar; DL-15+ specialize against it.** DL-15 (scheduling substrate spine, landing in Phase B Commit 2) is the first domain specialization. Future commerce / Rx / labs / notes DLs will likewise specialize. None reinvent envelope, partition, or registry. Canonical: MAIN DL-16 §parenthetical + §1Z.0.

- **Admitted-but-deferred items D1-D3 (DL-16 §"Admitted-but-deferred").** D1 distributed tracing tooling, D2 data residency / sovereignty per tenant, D3 substrate-level deprecation discipline. Named explicitly so future drift is recognized as already-acknowledged debt, not new discovery. Canonical: MAIN DL-16 §"Admitted-but-deferred" + §1Z.16.

- **Cross-surface reconciliation table is a binding companion.** The file `docs/architecture/cns_taxonomy_reconciliation.md` maps ~20 OMNI surfaces (scheduling / messaging / external-line / intake / commerce / labs / Rx / notes / calls / voicemail / fax / internal collaboration / patient_action_items / treatments / encounters / financial / observations / documents / federation / compliance) × 7 vocabulary categories. Phase 0 audit cross-checks every surface against the table. Canonical: §1Z.15 + companion file.

- **CORRECTION framing (DL-16 §parenthetical).** DL-16 is a CORRECTION forced by Phase B scheduling pressure-testing, not a discovery. Without DL-16, scheduling-domain canonization would have inherited drift from every other domain's ambiguous event vocabulary. Future contributors who encounter "let's just define a list of scheduling events" / "let's invent our own envelope for this domain" / "actions and events are the same thing" framing in any source MUST point back to DL-16 anchor + §1Z + radar zones 114-131. Canonical: MAIN DL-16 §parenthetical + evolution narrative Act XVI part 1 + §1Z.

---

## 9. Ontology traps (named explicitly — complete list of 20)

| # | Trap | Mechanism | Resolution |
|---|---|---|---|
| 1 | Case as parent ontology | Reusing `case_kind` across siblings | ADR §7.7 + scaffold lint check 5 |
| 2 | Encounter-centric assumption | Making `encounter` / `visit` parent of clinical activity | Tracked finding is the longitudinal hub for surveillance / aesthetic specialties; encounter is a touchpoint |
| 3 | Notification-as-recall conflation | "Follow up in 6 months" shoved into outbound_jobs / `patient_inbox_messages.metadata` instead of recall primitive | Radar zone 28 + recall primitive reservation |
| 4 | Communication-as-conversation conflation | All communication = `message_thread`-shaped | Communications_lifecycle reservation depth |
| 5 | Billing-as-subscription conflation | Compressing `revenue_cycle/` into `billing_subscription/` | Two distinct siblings (binding) |
| 6 | Telehealth-as-canonical assumption | DTC conventions leaking into in-clinic primitives | `interaction_context.mode` discipline |
| 7 | Order-as-shipment conflation | `order_kind` extended to lab/imaging/procedure/referral orders that don't ship-from-vendor-to-patient | ADR §7.8 anti-overload binding pattern |
| 8a | Diagnosis-as-parent assumption | Codable diagnosis as the parent ontology of clinical activity | Four-layer epistemic model; finding is the hub |
| 8b | Concept-atom-as-parent assumption | Making `condition.X_history` (concept atom) the longitudinal entity identity | Tracked finding sibling above the atom layer |
| 9 | Substrate-modeled-as-sibling | "Domain folder for audit lineage" / "domain folder for disclosure-policy" | ADR §7.7 substrate vs operational distinction |
| 10 | Sibling-as-overlay assumption | Making a specialty workflow into a sibling-domain folder (collapse) | Overlay tier discipline (binding rule 1) |
| 11 | Overlay-poisoning-sibling assumption | Specialty knowledge leaking into universal siblings | Overlay tier discipline (binding rule 3) |
| 12 | Single-tenant assumption | Hardcoded "MAIN" / brand / org / jurisdiction / location | ADR §7.5 multi-tenant rule |
| 13 | Single-provider assumption | `responsible_party` as one-and-only-one per patient | Per-scope responsibility + care_team primitive |
| 14 | Outbound-only communications | `outbound_jobs` extended to model inbound | Communications_lifecycle inbound rails |
| 15 | Encounter-as-billing-trigger | Charge capture as a side effect of encounter creation | Charge capture lives in `revenue_cycle/`, derived from accepted clinical artifacts |
| 16 (NEW) | Rigid-terminology assumption | Forcing providers to use a controlled vocabulary instead of allowing flexible labels with structured identity underneath | §7.5 reconciliation pattern: flexible language + structured identity |
| 17 (NEW) | Narrative-first authoring | Provider writes prose; humans (or AI) reconstruct structure later | §7.7 structured-first authoring doctrine; note-as-rendered-output |
| 18 (NEW) | Appointment-as-source-of-truth-for-services | What was scheduled = what was billed | Appointment is intent; interventions are truth; charge derives from intervention |
| 19 (NEW) | Single-charge-per-encounter | One encounter = one chargeable line | Encounter contains N interventions = N chargeable units (with bundling) |

20 traps total (counting 8a + 8b separately). Half are protected by existing doctrine + lint; half need this amendment.

---

## 10. What's already built (validation)

| Layer | Status | Examples |
|---|---|---|
| Substrate | Built | audit · authority · disclosure-policy · multi-tenant primitives · longitudinal memory · idempotent orchestration · pathway sensitivity · typed event catalog · communication rails (email/SMS/in-app) · Rule + Template registry · DELETE-AFTER-PARITY discipline · anti-overload binding pattern · scaffold lint suite |
| Substrate | Reserved | consent capture (partial) · locations table (partial) · cross-org patient identity · voice + fax rails · AI runtime · recall primitive · specimen chain-of-custody · body-map / anatomical anchor |
| Siblings | Active (5) | account_lifecycle · billing_subscription · clinical_decision · fulfillment_lifecycle · pharmacy_lifecycle |
| Siblings | Reserved by prior doctrine (7) | scheduling_lifecycle · labs_lifecycle · provider_tasking · communications_lifecycle · retail_lifecycle · marketing_lifecycle · clinical_record |
| Siblings | Reserved by this amendment (6) | clinical_finding · procedure_lifecycle · revenue_cycle · authorization_lifecycle · referral_lifecycle · inventory_lifecycle |
| Overlays | None | The tier itself is reserved by this amendment |
| Cross-cutting | Built | interaction_context.mode · data_environment · pathway_code/sensitivity · jurisdictional gating |
| Cross-cutting | Reserved / partial | care_team / responsible_party (Section 1G) · PROs |

**The c1–c9 build is wedge-agnostic substrate + one cell of the dimensional matrix populated.** Nothing built so far blocks any other cell. The producer-site filters (`treatment_key === 'glp1_primary'`, `program_type === 'weight_loss'`) are population gates, not substrate.

---

## 11. What this amendment reserves (concrete scope)

Pure documentation. No code. No migrations. No schema. No new rules.

### 11.0 Foundational doc → MAIN crosswalk (where each binding lives in MAIN today)

*This table is the canonical map from this document's primitives / siblings / doctrines to their binding home in the MAIN system map. The foundational doc is the long-form rationale source; MAIN is the operational source of truth.*

| Foundational element | Where bound in MAIN | Status |
|---|---|---|
| 5 binding doctrines (§1) | Doctrine locks DL-5 + DL-6 + DL-7 + DL-8 + DL-9 | LANDED post-reconciliation |
| Three architectural tiers (§2) | Doctrine locks DL-1 (substrate-vs-operational) + DL-2 (sibling tier) + Section 1W (foundation primitive layer) | LANDED |
| **Owned diagnostic acquisition + structured result authoring (§5.2)** | **Doctrine lock DL-9** + sharpened §1.5 Athena-lab-module-class line + Section 1W §1W.6 step 7 cross-ref + Section 1W.9 cross-sibling consumption table updates | **LANDED** post-reconciliation — binding sub-doctrine for owned-vs-external diagnostic lifecycle; the principle "owned tests are authored, not merely ingested" is now bound globally |
| **Three producer × entry-mode lanes + hybrid lane (§5.2.1)** | DL-9 binding lanes table (4 rows) | LANDED via DL-9 |
| **`diagnostic_acquisition_session` operational object spec (§5.2.3)** | DL-9 substrate-shaped object spec; lives across `labs_lifecycle/` + `procedure_lifecycle/` + `clinical_record/`; not a sibling, not a new primitive | LANDED via DL-9 |
| **Output-source taxonomy enum (§5.2.4)** | DL-9 enum: `omni_native_authoring` / `in_office_device_file` / `in_office_device_feed` / `vendor_cloud_import` / `external_partner_result` / `manual_transcription` | LANDED via DL-9 |
| **Standards alignment (DICOM / HL7 v2 / FHIR / LOINC) — admit, not require (§5.2.5)** | DL-9 + Section 1L labs reservation in MAIN | LANDED — non-foreclosure commitment per DL-6; activation timing per DL-5 |
| **Diagnostic / procedural anti-patterns (§5.2.6)** | DL-9 explicit forbids list | LANDED via DL-9 |
| **Specialty-coverage non-foreclosure register — ~50 shapes across 12 specialties (§6.6)** | Long-form rationale only; **MAIN does not paste-import the 50-row table** per reconciliation constraint. MAIN cross-links via DL-9 + Repo anchors row pointing at this section. | LANDED IN-DOC — non-foreclosure demonstration, not a roadmap commitment per DL-6 + DL-8 |
| Substrate primitive #1 (Audit + lineage) | `audit_events` table + system primitives addendum + Section 1D + Section 1V (deletion audit invariant) | LANDED |
| Substrate primitive #2 (Authority + capability) | `lib/auth/capabilities.ts` + Section 1D / 1D.1 / 1D.2 + system primitives addendum + `SensitiveAccessReason` discipline | LANDED |
| Substrate primitive #3 (Disclosure-policy) | `lib/disclosure-policy/` + Section 1Q (rules engine consumer) + tier_1/2/3/4 clamps + pathway-sensitivity propagation | LANDED |
| Substrate primitive #4 (Multi-tenant primitives) | Section 1U + `org_id` on every patient-scoped row + RLS + system primitives addendum | LANDED — orgs / brands / data_environment shipped; locations partial; cross-org reserved |
| Substrate primitive #5 (Patient identity) | Section 1J / 1J.1–1J.9 + `patient_id` as universal handle + future cross-org matching reservation | LANDED — `patient_id` shipped; cross-channel + cross-org partial / reserved |
| Substrate primitive #6 (Longitudinal operational memory) | `patient_timeline_events` + Section 1K.5.A reconciled views + system primitives addendum + Section 1V Clinical retention class | LANDED — timeline + reconciled view shipped; evidence linking reserved |
| Substrate primitive #7 (Idempotent orchestration) | SECURITY DEFINER orchestrators + `idempotency_key` discipline + system primitives addendum + Section 1H.3 reconciliation | LANDED |
| Substrate primitive #8 (Pathway sensitivity) | `lib/pathways/sensitivity-registry.ts` + `pathway_code` propagation + clamps + Section 1Q rules engine consumer | LANDED |
| Substrate primitive #9 (Typed event catalog) | `lib/events/audit-actions.ts` + `lib/events/rule-trigger-event-types.ts` + `audit_events.action` + `patient_timeline_events.event_type` registry + `scripts/lint-event-types.ts` | LANDED |
| Substrate primitive #10 (Communication rails) | `outbound_jobs` + `lib/outbound/dispatch.ts` + `patient_inbox_messages` + Section 1G messaging substrate + Phase 4H-in-app-inbox c1 | LANDED — email + SMS + in_app shipped; voice + fax + inbound rails reserved |
| Substrate primitive #11 (AI orchestration runtime) | Section 1N (AI engine doctrine) + Section 1T (vector / embedding readiness) + provider-authority gating + AI-as-actor with audit + capability + disclosure-policy + consent | LANDED (directional posture); runtime reserved |
| Substrate primitive #12 (Recall / surveillance primitive) | Section 1W.8 (recall + surveillance + procedural-cadence hooks) + reserved future materialization-into-task pipeline | LANDED via Section 1W |
| Substrate primitive #13 (Typed Rule + Template registry + DELETE-AFTER-PARITY) | `repo/rules/` + `repo/templates/` + ADR §7.7–§7.8 (sibling discriminant + anti-overload pattern) + `scripts/lint-rules-templates-scaffold.ts` check 5 | LANDED |
| Substrate primitive #14 (Specimen / artifact chain-of-custody) | Reserved — `inventory_lifecycle/` sibling reservation + Section 1L hooks + Section 1W.3 `clinical_object_evidence` pointer pattern | RESERVED — not yet a Section in MAIN |
| Substrate primitive #15 (Body-map / anatomical anchor) | Section 1W.4 + reserved `anatomical_anchors` table | LANDED via Section 1W |
| Substrate primitive #16 (External-system ingest) | Section 1O (document routing) + Section 1L partner-adapter pattern + DL-9 lane 3 (`external_partner_result`) | PARTIAL — pattern exists for documents + labs; not yet generalized as a single named primitive in MAIN |
| Substrate primitive #17 (Encounter) | Reserved — `clinical_record/` sibling activation pending; container for procedures + interventions + observations + decisions + communications | RESERVED |
| Substrate primitive #18 (Plan / protocol) | Section 1Q (rules engine produces plans) + `care_program` table + reserved protocol versioning + distinct from recall (#12) and Rules (#13) | PARTIAL |
| Substrate primitive #19 (Continuity relationship) | Section 1G.9 (clinician of record) + Section 1W.9 (cross-sibling consumption contract) + reserved relationship-status lifecycle | LANDED via 1G.9 + Section 1W |
| Substrate primitive #20 (Vendor / partner interaction) | Section 1L partner-adapter contract + reserved generalization for pharmacy / lab / ASC / imaging-center / payment / telephony / referral-partner accounts | PARTIAL |
| Substrate primitive #21 (Consent / authorization) | Section 1J.10 + reserved consent-split from disclosure-policy (#3); gates clinical operation performance (distinct from #3 which gates outbound communication) | PARTIAL — consent-split per foundational doc §4 not yet split out from disclosure-policy in MAIN |
| **Tracked clinical objects + procedure / intervention lifecycle (foundation primitive)** | **Section 1W (canonical home)** + Doctrine locks DL-7 + DL-8 + Repo anchors row + Platform operational model foundation-modules paragraph + Layer 1 overview | **LANDED** post-reconciliation — first-class foundation module, not a buried section |
| Sibling: `clinical_decision/` | Active in `repo/rules/` + `repo/templates/` per Phase 4H-templates-discipline | ACTIVATED |
| Sibling: `account_lifecycle/` | Active in `repo/rules/` + `repo/templates/` | ACTIVATED |
| Sibling: `billing_subscription/` | Active in `repo/rules/` + `repo/templates/` | ACTIVATED |
| Sibling: `fulfillment_lifecycle/` | Active per Phase 4H-templates-discipline c4 | ACTIVATED |
| Sibling: `pharmacy_lifecycle/` | Active per Phase 4H-templates-discipline c8 | ACTIVATED |
| Sibling: `scheduling_lifecycle/` | Reserved — Section 1F hybrid-care primitives + reserved folder | RESERVED |
| Sibling: `labs_lifecycle/` | Section 1L canonical foundation | LANDED in MAIN as Section 1L; sibling folder activates with first concrete `repo/rules/labs_lifecycle/` migration |
| Sibling: `provider_tasking/` | Reserved — Section 1G.11.2 action-item primitives + reserved folder | RESERVED |
| Sibling: `communications_lifecycle/` | Reserved — Section 1G messaging substrate + Phase 4H-in-app-inbox c1 substrate landing | PARTIAL — substrate exists; sibling folder not yet activated |
| Sibling: `clinical_record/` | Reserved — chart fields in Section 1J + Section 1G.8 provider workspace | PARTIAL — surfaces exist; sibling folder not yet activated |
| Sibling: `retail_lifecycle/` | Reserved — Section 1E retail catalog + reserved folder | RESERVED |
| Sibling: `marketing_lifecycle/` | Reserved — Section 1H.4 + Section 1H.4.1 marketing surface + reserved folder | PARTIAL |
| Sibling: `revenue_cycle/` | Reserved — Section 1I financial state + Day 0 charge lineage scoped per foundational doc §12.B | RESERVED (Day 0 charge-lineage scope only; full RCM deferred per §12.A) |
| Sibling: `clinical_finding/` | Reserved — distinct from tracked-clinical-object primitive (Section 1W); will activate when finding-shaped workflows beyond what 1W covers emerge | RESERVED |
| Sibling: `procedure_lifecycle/` | Reserved — distinct from individual sibling activations (per foundational doc §6.5 grid covers procedural decomposition into intervention atoms — Section 1W) | RESERVED |
| Sibling: `authorization_lifecycle/` | Reserved — prior-auth + payer-auth substrate; activates when `revenue_cycle/` future RCM activates | RESERVED |
| Sibling: `referral_lifecycle/` | Reserved — referral-shape workflows; activates when first cross-org referral surface emerges | RESERVED |
| Sibling: `inventory_lifecycle/` | Reserved — inventory + supplies + specimen logistics substrate; activates when first procedural sibling requires inventory consumption beyond what `treatment_orders` carries | RESERVED |
| Sibling: `internal_collaboration/` (NEW per DL-11) | **Foundational doc §5 "Reserved by DL-11" + §7.14** + sibling-boundary statement in §5 | **DOCTRINE LANDED (via DL-11; 2026-05-11 late evening); substrate migration future when first sibling activation drives** |
| **DL-12 — Thread + participant lifecycle as cross-substrate discipline + fax canonical placement + 28 foundational clarifications** | **MAIN DL-12 lock + §1D.3 (deactivation + admin/CMO/IT intervention + staff notification prefs) + §1G.1 (DL-12 binding subsection — owner cardinality + thread ownership + waiting semantics + queue-routed work + thread-to-task transitions) + §1G.3 (DL-12 binding subsection — patient-facing thread lifecycle + urgent/safety escalation + thread-kind parameterization + derived membership + three modes of coverage disclosure) + §1G.6.2 (DL-12 binding subsection — queue-routing state machine) + §1J.12 (DL-12 binding subsection — thread search/visibility + five visibility classes + anti-panopticon + patient-linked-thread-projection + internal-membership-vs-patient-visible-roster + staff-self-join discipline) + §1V.10 (DL-12 binding subsection — messaging-thread retention + edit-history preservation + legal hold/eDiscovery + not-a-consequence-free-backchannel culture) + §1P.14 (DL-12 binding subsection — fax as inbound channel + configurable queue ownership + composed-from-primitives) + §1Q.14.1 (DL-12 binding subsection — patient-facing send governance + human-vs-automated send distinction + internal snippets boundary + patient notification preferences + preview/snippet privacy) + §1N.8 (DL-12 binding subsection — AI participation bounds + authorship attribution + anti-noise + in-app AI Response Assist drafting surface) + §4.A primitive description updates (#1 + #2 + #10 + #11 + #13 + #16) + §5.3 sibling-boundary extensions (fax-as-composed + attachments-as-first-class-artifact with FIVE sub-guards) + §7.13.12 DL-12 cross-references (geography/licensure + care-team/coverage layer + patient-visible roster) + §7.14.9 extension (general-enterprise-platform coexistence) + §7.14.10 extension (TWO boundaries — threads-coordinate-not-canonical-state + patient-linked-thread-projection) + §7.14.18 extension (FIVE DL-12 anti-patterns + DL-12 attachment/markup/chart-filing/thread-substrate-hardcoding/search-visibility-notification/lifecycle-edit-queue-escalation/enterprise-platform/AI-workflow anti-patterns) + §8.1 participant + thread lifecycle cross-cutting row (28 sub-clauses) + ADR §7.15 (~37 REJECTED alternatives) + Radar zones 43-67 (25 zones) + Topology doc §12 update + new §13 (fax) + Evolution narrative Act XIII** | **DOCTRINE LANDED (2026-05-12 early morning); 28 binding clarifications across 7 pressure-test rounds; 25 radar zones bound; ~40 lock clauses; future preflights named (patient-proxy, peer support, scheduled-send, voice notes, AI translation, external-line first-touch, records export, video sessions, emergency bypass); supersedes nothing — refines/strengthens DL-7, DL-8, DL-10, DL-11.** |
| **28 DL-12 foundational clarifications (a-bb) — each row points at canonical home(s)** | See DL-12 lock binding clauses 1-40 in MAIN + foundational doc §8.1 sub-clauses (1-28 + additional cross-cutting sub-disciplines) — every clarification has at least one canonical home; lock points at home, never duplicates content | LANDED via DL-12 |
| Universal flow grammar (§1.7) | DL-8 + Section 1W.6 (operational projection — 8-layer continuity chain) | LANDED |
| Primitive admission criteria (§1.8) | DL-8 | LANDED |
| Four-layer epistemic model (§7) | Section 1W.2 (canonical table) | LANDED |
| Clinical identity reconciliation (§7.5) | Section 1W.5 | LANDED |
| Encounter → intervention → checkout continuity chain (§8) | Section 1W.6 (8-layer compressed projection) | LANDED |
| Structured-first authoring + note-as-rendered-output (§1.6) | DL-7 + Section 1W.7 | LANDED |
| Anti-overload binding pattern (ADR §7.8) | DL-3 (sibling-local discriminants) — anti-overload is the operational expression | LANDED via ADR |
| Producer-site transitional locality (ADR §7.5) | DL-4 + Platform operational model paragraph | LANDED |
| 20 ontology traps (§9) | Distributed across DL-1 through DL-9 + radar zones 27–28 | LANDED via doctrine locks (binding); long-form trap enumeration remains here as rationale |
| Dimensional matrix (§3) | DL-6 (substrate non-foreclosure across all matrix cells) | LANDED |
| **Consumer identity vs operational patient-relationship scoping (§7.13)** | **MAIN DL-10** (binding lock) + **§1J amendment** (identity-namespace scope) + **§1U.3 amendment** (brand_id graduated boundary) + **primitive #19 formalization** as `patient_relationship` + **radar zones 34-37** | **LANDED (doctrine via DL-10; 2026-05-11 evening); substrate migration future** |
| **Internal team collaboration messaging (§7.14)** | **MAIN DL-11** (binding lock) + **§1G.8.8 supersession** (SUPERSEDED-AND-REPLACED-BY-DL-11 banner) + **sibling #19 `internal_collaboration/`** (formalized; first new sibling since the original 18-sibling enumeration) + **radar zones 38-42** + topology doc **§12** (third messaging surface) | **LANDED (doctrine via DL-11; 2026-05-11 late evening); substrate migration future** |
| **Staff directory + presence + on-call coverage dependency (§7.14.17)** | DL-11 names as non-foreclosure clause; fragments today in `staff_profiles` (Section 1D) + §1G.7 operational-state enum + §1G.8 My Status surface | **RESERVED — future doctrine arc (DL-12 candidate or sibling activation; naming TBD); lands when first concrete pressure surfaces** |
| **DL-13 — External-line first-touch + rail-agnostic substrate spine + OMNI canonical + settings precedence + deterministic outbound 8-gate + display-projection-not-substrate doctrine** | **MAIN DL-13 lock + §1D.4 (settings precedence hierarchy + endpoint admin capability + multi-brand operating-mode configuration) + §1G.12 (external-line surface + endpoint substrate + voicemail/missed-call state machine + draft semantics + outbound endpoint selection + delivery state handling + annotation + search + visibility) + §1J.13 (handle-vs-person identity discipline + contact-identity lifecycle + manual-account-creation sync + retroactive projection + external-line access scope + search audit + identity-altering operations) + §1N.9 (AI-not-as-participant on external conversations + deterministic-outbound-via-system-actor + Response Assist scope on external-line + anti-patterns rejected) + §1P.15 (external-line voicemail / MMS / annotated-image artifacts + 5-disposition pattern on patient projection + atomization + PDFs) + §1Q.14.2 (deterministic external-line outbound 8-gate + STOP/HELP cascade discipline + endpoint-intent classification + intent-class consent separation + single-line marketing-and-clinical operations + cross-channel STOP doctrine + failed-gate handling + human-authored-sends-and-the-8-gate) + §1V.11 (display-projection-not-substrate discipline + immutable external-line message history + spam/archive/restrict/entered-in-error vs delete + correction via follow-up + delivery state mutable history) + foundational doc §4.B (primitive description updates #1, #5, #10, #11, #16) + §5 sibling #20 `external_communications/` + §5.3(c) (external-communications-as-sibling-with-rail-agnostic-substrate guard) + §7.13.13 (long-form sub-doctrine with 7 subsections) + §8.1 clauses 29-33 + additional cross-cutting sub-disciplines + ADR §7.16 (~15 REJECTED alternatives) + Radar zones 69-78 (10 zones) + Topology §11 substrate spine paragraph + §12 DL-13 cross-references + Evolution narrative Act XIV** | **DOCTRINE LANDED (2026-05-12); 5 binding clauses across R1-R9 pressure-test arc; 10 radar zones bound; ~10 lock clauses; refines/strengthens DL-7, DL-8, DL-10 (handle-vs-person extension), DL-11 (third messaging surface activation), DL-12 (invariant 31 5-disposition extension); future preflights named (e1 execution; lab vendor adapter; payment processor adapter; EHR-export adapter; pharmacy adapter); substrate sibling #20 reserved.** |
| **5 DL-13 binding clauses — each row points at canonical home(s)** | See DL-13 lock binding clauses 1-5 in MAIN + foundational doc §8.1 sub-clauses 29-33 — every clause has at least one canonical home; lock points at home, never duplicates content | LANDED via DL-13 |
| Substrate primitive description updates (DL-13 binding extensions) | §4.B in foundational doc | LANDED via DL-13 |
| Sibling #20 `external_communications/` | §5 "Reserved by DL-13" + §5.3(c) sibling-boundary guard + §7.13.13 substrate spine sub-doctrine | **DOCTRINE LANDED (via DL-13; 2026-05-12); substrate migration future when e1 execution drives** |
| Day 0 elite-class depth + activation incrementality (§1) | DL-5 | LANDED |
| §6.5 12-procedure pressure-test grid | Reserved — long-form remains in this document; not paste-imported into MAIN per reconciliation constraint | RESERVED IN-DOC |
| §12 reservation status (Reserved-deferred vs Truly-deferred) | Cross-link from MAIN's relevant Section reservations (Section 1F scheduling, Section 1L labs, Section 1I revenue, Section 1U multi-org) | LANDED — MAIN sections cross-link this section as the long-form reservation register |

### A. System map `## Platform operational model` doctrine

- Insert three-architectural-tier paragraph (substrate / sibling / overlay).
- Add 6 new reserved siblings (clinical_finding, procedure_lifecycle, revenue_cycle, authorization_lifecycle, referral_lifecycle, inventory_lifecycle).
- Sharpen `communications_lifecycle/` reservation (inbound rails + endpoint topology + AI-as-programmable-endpoint).
- Sharpen `scheduling_lifecycle/` reservation (multi-resource depth).
- Add dimensional matrix table.
- Add sibling boundary discipline binding.
- Add overlay tier rules (5 binding rules).
- Add new substrate primitives (recall, AI runtime, specimen chain-of-custody, body-map / anatomical anchor) to substrate-primitives line.
- Add structured-first authoring + note-as-rendered-output doctrine.

### B. ADR

- §7.9 (new) — four-layer epistemic model + clinical identity reconciliation pattern.
- §7.10 (new) — encounter → intervention → checkout continuity chain.
- §7.11 (new) — overlay tier discipline.
- §7.12 (new) — structured-first authoring + note-as-rendered-output.
- §7.13 (new) — foundational substrate posture (wedge-vs-foundation separation; "every decision admits every cell of the dimensional matrix" test).
- §7.7 cross-references update — name new sibling discriminants.
- §7.8 cross-references update — extend the overloaded-word table.

### C. Section 1K.5.A (clinical assertion ledger)

- Add the four-layer relationship paragraph (clarifying atom layer is substrate the tracked finding hub references).

### D. Radar

- Extend zone 27 (sibling-discriminant leak) — add new discriminants.
- Extend zone 28 (care-task substrate fragmentation) — add recall primitive.
- New zones (provisional 29–37) for the new traps.

### E. Evolution narrative

- Closing entry (Act X or epilogue) capturing the moment substrate-design-for-all-dimensions became binding.

### F. Total scope

**~400–500 lines of doctrine added across 5 docs.** Zero code. Zero migrations. Zero schema. Zero new patterns. The c1–c9 build is unchanged.

---

## 12. Reservation status

### A. Reserved at primitive / sibling level — implementation deferred

These have substrate primitives or sibling reservations in place; specific implementation details are deferred until operational pressure surfaces. The substrate doctrine HAS reserved these; the runtime work has not happened.

- **Inventory / supplies / specimen logistics detail** — `inventory_lifecycle/` sibling reserved (§5); specimen chain-of-custody substrate primitive #14 reserved. Detailed workflows (vendor-specific PO integration, specimen-routing automation, lot-recall protocols) deferred.
- **External diagnostic ingest beyond webhooks** — substrate primitive #16 (external-system ingest) reserved as the canonical pattern. Specific lab-vendor / imaging-center / pathology-lab / sleep-lab direct API integrations deferred.
- **Specialty-EMR-replacement features** — `clinical_record/` sibling reserved (§5). Specific specialty-EMR-grade UI surfaces, signature workflows, and chart-completion automations deferred.
- **AI clinical decision support** — AI orchestration runtime substrate primitive #11 reserved. Clinical-grade AI (autonomous clinical decisions) deferred indefinitely per Section 1Q.0 invariant 4 (AI is assistive, never authoritative).
- **Future RCM beyond Day 0 charge lineage** — `revenue_cycle/` sibling reserved. Day 0 scope: charge lineage + intervention-derived checkout payload + cash-pay + subscription + package billing. Future RCM (claims transmission, payer adjudication, denials, appeals, ERA / EOB ingestion, AR / patient responsibility, full RCM team workflows) reserved-but-deferred.
- **Multi-org federated authentication** — multi-tenant primitive #4 reserved (orgs + brands + locations). Cross-org SSO / federation specifics deferred.
- **Cross-org patient identity matching** — patient identity primitive #5 reserved. Specific algorithms (probabilistic matching, MPI integration) deferred.

### B. Truly deferred — not even reserved

These are not in the substrate doctrine and would require §1.8 admission criteria + new sibling activation if pursued.

- Payer integrations / claim transmission / clearinghouse / EDI / X12 (specific runtime implementations beyond `revenue_cycle/` reservation).
- Prior-auth automation runtime (substrate primitive concept reserved as authorization-gating; full payer-rule engine deferred).
- Enterprise referral integrations (Epic / Athena / Cerner inbound — substrate-level ingest reserved via #16; enterprise-EMR-specific direct-integration deferred).
- Surgery-center interoperability runtime (substrate ingest reserved; ASC-specific direct integration deferred).
- CPT / ICD coding engine runtime (codable-diagnosis-entity layer reserved via four-layer model §7; code-suggestion engine deferred).
- DICOM imaging integration runtime (labs_lifecycle reservation covers acquisition; DICOM-specific viewer / PACS integration deferred).
- Patient-facing clinic-app experiences for any specialty (clinic-app is the deliverable; specialty-specific app surfaces deferred).
- Inpatient / hospital-floor / ICU / ED workflows (out-of-scope per §1.5; would require substrate extension via §1.8).

---

## 13. Execution plan (when greenlit)

> **Status: HISTORICAL / SUPERSEDED.** This phased execution plan was the original 6-phase doctrine-amendment proposal. The reconciliation has since landed via a different path: Doctrine locks DL-1 through DL-9 + Section 1W in MAIN, plus §5.2 / §6.6 / §11.0 crosswalk in this document, plus updates to ADR + radar + evolution narrative companion docs. The phase list below is preserved as historical record of the original plan; the gating conditions no longer apply. For current status, see §11.0 crosswalk (foundational-doc-element → MAIN-binding-location → status table).

Six phased commits. Each ships independently; subsequent phases gate on previous landing cleanly. Phase D is split into D1 (procedural decomposition + interventions) and D2 (primitive extraction grid + flow grammar + new primitives) because the original Phase D was carrying too much.

| Phase | Scope | Files | Lines |
|---|---|---|---|
| **A** | Tracked clinical finding sibling reservation + four-layer epistemic model + atomization-relationship clarification + ADR §7.9 + Section 1K.5.A relationship paragraph + radar trap 8b/zone 29 + identity reconciliation primitives | system map + ADR + Section 1K.5.A + radar | ~100–140 |
| **B** | Procedure_lifecycle + revenue_cycle + authorization_lifecycle + referral_lifecycle + inventory_lifecycle reservations + sibling boundary discipline + ADR §7.7 cross-refs update + radar zones 30–34 | system map + ADR + radar | ~120–160 |
| **C** | Specialty-overlay tier (substrate / sibling / overlay) + ADR §7.11 + communications_lifecycle topology depth + scheduling_lifecycle depth + radar zones 35–36 | system map + ADR + radar | ~80–120 |
| **D1** | Encounter → intervention → checkout chain (ADR §7.10) + structured-first authoring (ADR §7.12) + body-map primitive (#15) + procedure_episode_kind variants (§5.1) + labs_lifecycle acquisition + interpretation sub-shapes + traps 17–19 + radar zone 37 | ADR + system map + radar | ~120–160 |
| **D2** | **Primitive extraction doctrine (§1.6) + universal flow grammar (§1.7) + primitive admission criteria (§1.8) + 6 new substrate primitives (#16 external-system ingest, #17 encounter, #18 plan/protocol, #19 continuity relationship, #20 vendor/partner, #21 consent split from disclosure-policy) + §6.5 primitive extraction test grid + procedural-category axis on dimensional matrix** | system map + ADR + radar | ~150–200 |
| **E** | Anti-pattern §1.5 + foundational substrate posture (ADR §7.13) + cross-cutting concerns table + evolution narrative epilogue | system map + ADR + evolution narrative | ~80–110 |

Total: **~650–890 lines** across the doctrine doc set (was 440–630; expanded with Phase D2's primitive-extraction work).

**Gating conditions:**
1. Workspace re-linked.
2. Explicit green light to start with Phase A.
3. Each phase ships independently.
4. Optional: ChatGPT review pass on Phase A draft before it lands (Phase A is the deepest commitment).
5. Phase D2 should land before Phase E because the foundational-substrate-posture section (§7.13) references the primitive-extraction doctrine that D2 codifies.

---

## What this is and isn't

**Is:** the foundational architectural commitment to admit every operational dimension of healthcare equally — DTC, in-clinic, procedural, surveillance, aesthetic, multi-specialty group practice — with all 18 siblings + 3 tiers + **21 substrate primitives** + 20 ontology traps + dimensional matrix + universal flow grammar + primitive extraction doctrine + intervention-to-checkout chain + clinical identity reconciliation + structured-first authoring named, scoped, and bound.

**Is not:** a roadmap commitment. A wedge selection. An execution sprint. A schema migration. A code change. A scope expansion of any current commit.

**The substrate is now structurally sufficient to admit any future clinic profile.** Wedge selection runs as a separate go-to-market track when ready.

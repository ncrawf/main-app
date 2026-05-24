# OMNI Thesis v0 — Founder Version

A reference card for the operator. Read in 5 minutes. Hold in your head. Reach for at decision moments.

Canonical source: [`.cursor/plans/omni_thesis_v0_2026-05-24.md`](omni_thesis_v0_2026-05-24.md). Cite v0 for binding claims. This founder version is a derived compression; if it disagrees with v0 on substance, v0 wins.

---

## What OMNI is

OMNI is a **governed contextual care substrate**.

It maintains longitudinal coherence — through identity, consent, authority, evidence, observation, assertion, policy, coordination, and execution primitives — across a designed family of care-network topologies that expands by explicit decision, not by drift.

The substrate is **future-permissive**. The product is **brutally narrow and concrete**.

The invariant: **governed contextual coherence across actors, surfaces, organizations, and authority boundaries.**

## What OMNI is not

OMNI is not a telehealth app, intake engine, scheduler, EHR, CRM, marketplace, workflow engine, AI chatbot, medspa platform, or provider network. Those are surfaces, runtimes, or wedges — projections of the substrate, not the substrate itself.

**The product OMNI ships will INCLUDE intake forms, scheduling UIs, charts, inboxes, provider workflows, and medspa operations.** Don't conflate the substrate with those. But don't cite "OMNI is not a telehealth app" to mean "don't build intake forms." Build the artifacts; the substrate produces them precisely.

## The two planes

**Substrate plane**: physics, primitives, invariants. Topology-permissive within the designed family. Optionality has design cost only.

**Product plane**: concrete UI, concrete revenue, concrete operational shape. Topology-narrow on one bet per phase. Optionality has design cost AND opportunity cost AND focus cost.

**Two planes, two rules. Don't blend them.** Every claim about OMNI's nature must be qualified by which plane it belongs to.

## The mantras

**Operator-facing** (substrate property):

> Right context. Right actor. Right patient. Right moment. Right authority.

**Patient-facing** (consumer promise):

> Care that remembers you.

You don't have to keep re-explaining yourself. Your care team knows what matters. Your context follows you without exposing everything to everyone.

Same property at different surfaces.

## The wedge

**Pattern**: async protocolized care + in-person procedural/service care under one patient context.

**First instance**: Hims-style peptide telehealth + 3-4 medspas + derm clinics + 3-4 more peptide deployments.

**Generalizes to**: dermatology (telederm + in-office), plastics (consult + surgery), aesthetic longevity (peptide + lab + procedure), hormones (Rx + in-person follow-up), surgery readiness/post-op, GI (with lab interop).

**Does not fit cleanly**: Family Practice (different topology — patient-centered hub, year 4-7), full Ortho (year 3-5), OR/Surgery Center choreography (year 3-5), Physical Therapy (different margin shape).

The wedge proves the substrate. Five concrete properties:

1. One patient identity across islands (async + in-person).
2. Cross-slice clinical awareness as default, not feature (peptide+procedure conflict, Accutane+weight-loss interaction, etc.).
3. One commerce wallet across islands (entitlements survive; promo wallet portable).
4. One patient context with routed conversations and care-slice-aware projections (UI open — thread, channels, dashboard, etc.; substrate guarantees the coherence).
5. Conversational intake as wedge feature, not standalone product.

## The dragon egg

The patient-context layer may eventually be bigger than provider SaaS itself.

Owned brands **generate** the context. Provider SaaS **expands** the context. Eventually the patient realizes: *"my care follows me here."* That moment is when OMNI becomes a category, not a product.

Hatch the egg by building the wedge. Don't sell the dragon in year 1.

## Powered by OMNI — brand architecture

OMNI is invisible infrastructure first, trusted identity later. Above the substrate, consumer-facing brands carry the patient relationship.

CULTURED powered by OMNI. NAKED powered by OMNI. Future brands powered by OMNI.

Brands feel emotionally distinct. The substrate underneath unifies identity, consent, evidence, longitudinal state, and CNS coordination across brands. Patient experiences "my brand"; OMNI quietly carries continuity.

Phases:
1. Patients know their brand; OMNI invisible.
2. "Powered by OMNI" in fine print.
3. Patient sees OMNI identity carries across brands.
4. Patient intentionally uses OMNI as the trusted care layer; brands become distribution surfaces.

**Brand contract is not white-labeling.** Every "Powered by OMNI" brand carries: shared identity, shared consent UX, mandatory data-flow-back, default-on cross-brand context per consent, default-on safety-interrupt routing through CNS. Hub-and-spoke architecture. The hub is the durable asset. The spokes are demand-generating surfaces. Patient relationship migrates spoke → hub as trust accumulates.

## The substrate spine + 5 surgical additions

Most of what we need is already in OMNI doctrine (Tier 0 guardrails T0-01..T0-07, Coherent OMNI Architecture Pattern's three-layer substrate, DL-1..DL-22, CNS ADR, Build OS). The thesis identifies **5 surgical additive primitives**:

1. **`observation` + `extracted_assertion`** as first-class primitives (the layer that makes "conversation is evidence, not truth" mechanically enforceable).
2. **`device` + `robot` + `robot_session`** as first-class actor subtypes (extends DL-16 actor 4-tuple).
3. **Conversational intake / AI interview doctrine** — `conversation_session`, `conversation_turn`, `transcript_artifact`, `protocol_definition`, selective D7 materialization.
4. **`care_relationship` + `shared_context_grant`** for cross-organizational patient-graph access (extends DL-21 federation from tenant-boundary to patient-graph).
5. **Integration Plane** as coherent first-class concern (externally composable, internally sovereign).

Not 100 new primitives. Not a rebuild. Five surgical additions.

## The universal flow

Every input modality enters the CNS through one chain. Every output exits through one chain. The CNS is invariant; modalities are interchangeable at the boundary.

```
INPUT (form / lab / wearable / voice / live AI conversation /
       device / external Rx / message / appointment / self-report /
       external chart / robot telemetry)
  → source_event
  → media_artifact
  → observation
  → extraction_run (AI / rule / policy)
  → extracted_assertion (with confidence, uncertainty, contradiction_flag)
  → patient_confirmation / clinician_review
  → committed assertion
  → CNS context_packet update
  → candidate (prescribe / message / schedule / escalate / coordinate / etc.)
  → policy_resolver (deterministic rules + policy version pinned)
  → authorized_action (actor authority verified, scope checked, audited)
  → execution
  → OUTPUT (SMS / Rx / appointment / lab order / robot session /
            chart materialization / payment / provider alert /
            patient app update / external chart export)
  → evidence_record (audit, delivery, outcome lineage)
  → feedback into next source_event
```

Adding a new input modality = "what adapter produces source_events?" Not a CNS rewrite. Adding a new output modality = "what executes the authorized_action?" Not a CNS rewrite. **The CNS doesn't care what modality the input is. It cares about the chain.**

## AI as bounded participant

OMNI is NOT "AI everything." OMNI is **substrate-with-AI-as-bounded-participant**.

Three rejected paradigms:
- **"AI everything"** — AI handles intake, interpretation, decisions, actions. Patient interacts with AI; AI decides; clinician reduced to rubber-stamper. Rejected.
- **"Forms everything"** — current 2020 healthcare; cannot absorb multimodal input. Rejected.
- **"Event-bus everything"** — Kafka-for-medicine; operationally brittle, semantically muddy, impossible to govern. Rejected.

OMNI paradigm: **carefully layered contextual operating planes + governed state machine + evidence-backed memory + multimodal input under uniform substrate flow + AI as bounded role + deterministic policy as commit gate.**

AI is: extractor, proposer, classifier, summarizer.

AI is NEVER: the committer of truth, the authority over patient state, the decision-maker on consequential clinical action, the replacement for clinician judgment.

## The learning loop — without exploitation

OMNI gets smarter over time. What it learns (positive):
- Which alerts were useful vs suppressed
- Which intake answers predicted escalation
- Which care pathways led to good outcomes
- Which signals mattered vs were noise
- Which coordination cases needed which kind of ownership

What it does NOT do:
- Sell de-identified data to pharma / payers / advertisers (corrupts trust premise)
- Silently mutate clinical policy
- Drive patient-engagement KPIs that override action-usefulness
- Cross-patient pattern learning outside documented governance

**OMNI makes money by coordinating care, not by exploiting care data.**

## The money stack

**Near-term (year 1-2)**: owned vertical brand revenue (peptide subscriptions + medspa service + product + package + commerce margins).

**Mid-term (year 2-4)**: provider SaaS subscriptions + per-transaction fees + network participation fees.

**Long-term (year 5+)**: consumer OMNI membership + vertical brand scale + marketplace/referral economics + enterprise/employer/payer contracts.

**Never**: selling patient data. That corrupts the substrate.

## Coherence — what it means operationally

**Headline**: Coherence means contradictions, supersessions, uncertainty, authority, and time are explicit rather than hidden.

**Eight tests** every coherence claim must move forward:
1. No silent contradictions
2. No silent supersession
3. Versioned reinterpretation
4. Reversibility (or explicit non-reversibility with rationale)
5. Cross-slice consistency surfacing
6. Time-honest queries ("what did OMNI believe at time T?")
7. Authority lineage
8. Ownership resolution — every coordination case resolves to ownership or intentional no-owner rationale

If a feature doesn't move any of these forward, it's not coherence work.

## Identity / consent / authority — four tiers

These are load-bearing. Each transition is a real doctrine pass.

- **v0** owned-single-brand: OMNI as custodian; ToS + treatment authorization; provider license × scope. *3-6 months. Wedge launch.*
- **v1** owned-multi-brand: identity portable across our brands; consent grants between brands; authority spans brands. *3-6 more months. Hybrid wedge at scale.*
- **v2** controlled-network: identity portable across distinct legal entities; cross-org consent grants + break-glass. *6-12 more months. Connected-provider-network product.*
- **v3** industrial-grade national: full state × specialty × prescribing × compact × sensitive-category matrix. *Multi-year + regulatory.*

Don't scare yourself into v3 at v0. Don't pretend v0 is sufficient at v2.

## What to build now (year 1-2)

- Wedge product: hybrid Hims-style peptide + 3-4 owned medspas + derm + 3-4 more peptide deployments under one patient context
- v0 → v1 of identity/consent/authority ladder sized to wedge needs
- Substrate gap-fill for the 5 surgical additions to the extent the wedge requires them
- Specialty configuration (tenant catalog + clinical templates) for each wedge specialty

## What NOT to build yet

Patient-first OMNI entry (5+ years). Connected provider network UX (3-5). Voice/video intake standalone (2-5). Wearable/ambient standalone (3-7). Robotics (10+). Enterprise health-system deployment (5+ or never). API/platform (3-5+). Marketplace/concierge (out of family).

Each is substrate-permissive, product-deferred. Substrate carries the optionality cheaply.

## What to quietly prepare now — substrate hooks

Each deferred surface has a substrate hook present at v0:

- Patient-first → portable patient identity (OMNI-as-MPI)
- Connected provider network → `care_relationship` + `shared_context_grant`
- Voice/video/conversational → `observation` + `extracted_assertion`
- Wearable/ambient → `device` actor subtype + temporal observation
- Robotics → actor model NOT human-only
- API/platform → Integration Plane
- Enterprise → authority graph at v2 + cross-org grants

**Deferred surfaces are NOT abandoned. They are substrate-prepared, product-deferred. The hook IS the substrate work.**

## The closing line

> **Same physics, fundamentally different identity.**

Structurally this is ~60% sharper articulation of doctrine OMNI already has, ~25% surgical new primitives, ~15% discipline lines to neutralize drift.

Strategically: 100% center-of-gravity reorientation. OMNI is no longer "telehealth SaaS with AI." It is a governed contextual care substrate with care SaaS + AI wedges as the first products.

Same primitives. Same physics. Fundamentally different center of gravity. Fundamentally different identity. Fundamentally different long-term destination.

That is the company.

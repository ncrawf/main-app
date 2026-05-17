# Evolution narrative — Volume 2: Phase B.5 through Day 0 Scheduling Rule Matrix Round 3.5

> **Snapshot version:** written 2026-05-17. Covers Phase B.5 Mindbody ingestion through Day 0 Scheduling Rule Matrix Round 3.5 (CNS action orchestration doctrine lock).
>
> **What this document is:** a high-altitude historical orientation for the second major arc of OMNI's architecture work — the Phase B.5+ doctrine sharpening era. A narrative play-by-play for someone who wants to understand the project's intellectual arc across this stretch without reading every binding artifact.
>
> **What this document is not:**
> - It is not the system map. The system map at [`.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) is the binding source of truth.
> - It is not an ADR. ADRs preserve single decision moments; the Round 3.5 ADR lives at [`cns_action_orchestration_adr_2026-05-17.md`](cns_action_orchestration_adr_2026-05-17.md). The earlier Phase 4H ADR lives at [`phase_4h_target_first_decision_record.md`](phase_4h_target_first_decision_record.md).
> - It is not the Round 3.5 post-mortem extension. Failure patterns and lessons live in [`scheduling_foundation_post_mortem_2026-05-17.md`](scheduling_foundation_post_mortem_2026-05-17.md).
> - It is not Volume 1. Volume 1 lives at [`evolution_narrative.md`](evolution_narrative.md) and covers project inception through Phase 4H-pre. Do not edit Volume 1.
> - It is not a phase plan or session handoff.
>
> **Convention:** this is a snapshot, not a living document. If the project crosses another major inflection point after Round 3.5, write a Volume 3. Do not edit this one.

---

## How to use this document

Read this when you want to understand the *why-the-doctrine-looks-like-it-does* across the Phase B.5+ era. A reader who needs to reopen a specific Round 3.5 decision reads the ADR. A reader who needs to know what's currently true reads the system map. A reader who needs to know what failure patterns to avoid reads the post-mortem. A reader who wants to understand how the project got from Volume 1's "Phase 4H-pre" handoff to Round 3.5's "CNS action orchestration doctrine lock" reads this.

---

## The arc in one paragraph

After Phase 4H-pre, the project did not write more code immediately. Instead it sharpened doctrine against real-world evidence. Phase B.5 ingested 163 Mindbody screenshots and a 27,982-line user↔Knox chat into a Layer 2 architectural synthesis, then locked DL-15 (Scheduling Substrate Spine) + DL-16 (Universal CNS Event Envelope) and drafted six additional DLs (DL-17 Commerce / DL-18 RBAC / DL-19 Settings-Infrastructure / DL-20 Care-Coordination / DL-21 Federation-Topology / DL-22 Clinical-Media). The same arc surfaced eight failure patterns documented in the scheduling foundation post-mortem — particularly the "import Mindbody as substrate" temptation that produced vendor-named enums, specialty-coded encounter profiles, and Mindbody role-name permission groups that all had to be ripped out and replaced with generic OMNI primitives. The user enforced anti-vendor-naming + anti-specialty-leakage doctrine repeatedly. The arc landed the three-layer foundation pattern (Planned commitment / Actual delivery / Linked evidence + commerce) across all pillars. Then the Day 0 Build Contract froze 30+ scope decisions at commit `6dc1286` and the Day 0 Scheduling Rule Matrix translated locked doctrine into buildable Day 0 rules across seven domains. Rounds 1-3.5 of the matrix authored Domains 1 (Treatment menu), 2 (Booking composer), 3 (Appointment lifecycle), plus seven cross-cutting doctrine sections (gate-timing taxonomy / anti-copy discipline / Round 3 guardrails / same-service entitlement context / Domain 3↔Domain 6 seam / financial eligibility / entitlement-aware continuation / membership-as-bundle / Domain 6 pre-brief / generic benefit engine / benefit attribution / Shopify ingestion / benefit stacking + conflict resolution). Round 3.5 reframed Round 4's scope from narrow "scheduling communications" to wide "source-agnostic CNS action orchestration" after a multi-correction dialogue surfaced two new failure patterns (re-discovery + narrow framing creep) and required scaffolding (ADR + Round Kickoff Reading Discipline + Volume 2 narrative + post-mortem extension) to prevent recurrence.

---

## Act IX: Phase B.5 Mindbody ingestion (2026-05-16)

The project paused doctrine sharpening to ingest real-world Mindbody operational depth. 163 Mindbody screenshots in 21 batches plus a 27,982-line user↔Knox chat were captured raw into [`.cursor/plans/ingestion/mindbody/`](../../.cursor/plans/ingestion/mindbody/) and synthesized into a Layer 2 architectural understanding at [`.cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md`](../../.cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md) — 13 sections A-M with 185+ findings.

The ingestion's value was twofold: it surfaced operational primitives Mindbody actually serves (13-state appointment lifecycle / 24-method payment federation / 25 payment-method values / 21-event client alert taxonomy / 32+ outbound trigger types / encounter_profile categorization / settings-as-infrastructure pattern) AND it surfaced architectural traps the project would otherwise have walked into (vendor-named enums like `payment_method = alle` / specialty-coded enums like `encounter_profile = aesthetic_treatment_visit` / role-name permission groups like `Social Media Manager`).

Section G of the Layer 2 synthesis enumerated seven DL-15 amendments + four DL-16 amendments + four new DLs to draft (Commerce / Settings-Infrastructure / RBAC / Clinical-Coding). The danger embedded in this enumeration: I (Opus) treated the Section G list as a substrate spec when it was actually a description of one vendor. That treatment produced 12+ hours of doctrine drift on 2026-05-17 before the user manually pressure-tested each drift back to generic OMNI primitives.

---

## Act X: 2026-05-17 doctrine arc — twelve hours of drift correction

On 2026-05-17, the project committed Phase B.5 amendments to DL-15 + DL-16 and drafted six new DLs (DL-17 Commerce / DL-18 RBAC / DL-19 Settings-Infrastructure / DL-20 Care-Coordination / DL-21 Federation-Topology / DL-22 Clinical-Media). The drafts initially imported Mindbody-specific implementation choices as OMNI substrate. The user surfaced each drift one scenario at a time. Each correction either I or Knox tried to add MORE doctrine instead of building substrate.

The patterns that emerged in this single day are documented in the post-mortem ([`scheduling_foundation_post_mortem_2026-05-17.md`](scheduling_foundation_post_mortem_2026-05-17.md)) as eight named failure patterns:

1. **Layer 2 synthesis as substrate template** — root cause of most yesterday drift
2. **Bridge with doctrine when user wanted substrate**
3. **Compound enums that mix concepts** (`booking_origin = new_client_organic_online` / `encounter_profile = aesthetic_treatment_visit`)
4. **Specialty leakage in OMNI substrate** (medspa-only / derm-only enum values when the substrate must serve all specialties)
5. **Vendor names in substrate** (Allē / Aspire / Cherry as enum values)
6. **Misnamed primitives masking foundational categories** (`confirmed` lifecycle state colliding with `confirmation_state` patient-acknowledgment)
7. **Treating Mindbody as a positive template rather than evidence**
8. **Doctrine inflation without substrate-slice translation**

The corrections that landed by end-of-day:
- Anti-vendor-naming doctrine added to system_map Cross-DL warning subsection
- DL-15 amendment 8: lifecycle state `confirmed` renamed to `scheduled`; `confirmation_state.confirmed` reclaimed for DL-20 patient-acknowledgment
- DL-20 encounter_profile_registry RIPPED OUT; `encounter.modality` reduced to 4 generic values (in_person / video / phone / async); specialty / venue / arrival kind moved to separate axes
- DL-17 payment_method.vendor_label demoted to free-form tenant STRING
- DL-18 permission groups regenerated as 7 generic capability-based groups (not Mindbody role names)
- DL-22 partner imaging device enum demoted to free-form tenant STRING
- DL-21 Day 0 scope cleanly separated from FUTURE scope
- Three-layer foundation pattern locked across all pillars (Planned commitment / Actual delivery / Linked evidence + commerce)

The user's preferences from this day were locked at [`user_knox_preferences_locked_2026-05-17.md`](../../.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md) — 18 explicit preferences (12 user + 8 Knox) marked NEVER re-litigate.

The 3-layer pattern was distilled at [`coherent_omni_architecture_pattern_2026-05-17.md`](../../.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md) — one-page reference for future pillars (Rx / Labs / Procedures / Commerce-deep / Communications-orchestration).

---

## Act XI: Day 0 Build Contract freeze

After the doctrine arc stabilized, the project produced a build-facing artifact: the Day 0 Build Contract at [`2026-05-17_omni_scheduling_day_0_build_contract.md`](../../.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md). Frozen at commit `6dc1286`. The contract translates architectural decisions into concrete feature verdicts:

- **SHIP D0** — must work at Day 0
- **SUB ONLY D0** — substrate at Day 0, UX deferred
- **M1-2** — month 1-2 ship
- **M6** — month 6 ship
- **Y1** — year 1 ship
- **REJ** — explicitly rejected

The contract froze ~30 substrate primitive sections + ~30 scope decisions. It is the build-facing source of truth that substrate slice authors will follow when DDL/RPC/migration work begins.

Companion: [`2026-05-17_omni_scheduling_operating_model_and_architecture.md`](../../.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md) — the operating model + architecture synthesis that informed the Build Contract.

---

## Act XII: Day 0 Scheduling Rule Matrix — Rounds 1, 2, 3

After the Build Contract froze, the project translated the locked doctrine into buildable Day 0 rules across seven domains. The matrix lives at [`.cursor/plans/designs/day_0_scheduling_rule_matrix/`](../../.cursor/plans/designs/day_0_scheduling_rule_matrix/) with `00_index.md` as the binding cross-cutting doctrine document and `01_domain_treatment_menu.md` through `07_domain_documentation_evidence.md` as the per-domain rule files.

### Round 1 — Domain 1 (Treatment menu / visit-type rules)

Authored 30 Day 0 rules covering treatment catalog hierarchy + service variant pattern + per-unit quantity pattern + service type composition + tenant-configurable taxonomy + booking presets + service policy.

Knox identified three architectural leaks in Round 1.5 review:
- TM-12 contradicted TM-01 (service_category accidentally became operational)
- `service.self_bookable_progressive_disclosure_mode` conflated two concepts (visibility + disclosure depth)
- `planned_treatment_areas` source-of-truth was ambiguous

Round 1.6 patched all three (Amendments A + B + C applied to DL-19 + DL-20). Round 1.7 added gate-timing taxonomy (§2.1.5) after user/Knox correction that consent is a `pre_performance_gate` not a `booking_hard_gate`.

### Round 2 — Domain 2 (Booking composer / availability rules)

Authored 34 Day 0 rules covering 4-axis composer (provider + room + resource + time) + provider eligibility + 3-component time blocks (prep + booking + finish) + availability windows + concurrency + booking hard gates.

Round 2.5 expanded BC-09 into 3 rules for provider routing (continuity-first + new-lead strategies). Round 2.6 added Round 3 pre-flight guardrails:
- Guardrail 1: `status_flags` BITMASK are DERIVED indicators, NOT canonical truth owners
- Guardrail 2: Appointment lifecycle does NOT swallow encounter creation

Amendments D + E + F applied (gate-timing policy + resource locking + provider routing policy).

### Round 3 — Domain 3 (Appointment lifecycle rules)

Authored 24 Day 0 rules covering 13-state lifecycle + transition matrix + status_flags projection discipline (DERIVED only) + check-in + in-progress/completed + cancellation + no-show grace window + atomic reschedule compensation + waitlist promotion + dispute + post-retention archival.

Round 3.1 added Domain 3 ↔ Domain 6 seam doctrine (event-driven coupling for financial consequences) + same-service ≠ different-service for entitlement context binding + financial eligibility gate family extension to Amendment D. Amendment G applied (reschedule fee policy on cancellation_policy).

Rounds 3.2 + 3.3 + 3.4 + 3.4.5 added cross-cutting doctrine for Domain 6 (Commerce / entitlement) before Round 4:
- §2.7 Entitlement-aware continuation
- §2.8 Membership-as-bundle
- §2.9 Domain 6 mandatory pre-brief Sections A-K
- §2.10 Generic benefit/discount/entitlement resolution engine doctrine
- §2.11 Benefit attribution / value visibility (receipt is marketing)
- §2.12 Shopify ingestion as pre-Domain-6 mandatory evidence
- §2.13 Benefit stacking + conflict resolution (anti-double-dipping; 7 default rules + 6 substrate fields + 7 conflict resolution strategies including `allow_stack` 7th per Round 3.4.5 + 5 policy profiles + deterministic cart-level resolution algorithm + 4 worked examples)

By end of Round 3.4.5, Domain 6 pre-brief was fully framed and Amendment H (Domain 6 substrate) + Amendment I (stacking control fields on discount_program + entitlement + tenant policy profile setting) were parked for Round 6.

---

## Act XIII: Round 3.5 — the source-agnostic reframe

Round 3.5 was supposed to be a "lock CNS communications doctrine ahead of Round 4 (Domain 4)" round. It became a seven-hour multi-correction dialogue that surfaced two new failure patterns and required structural scaffolding to prevent recurrence.

### §13.1 The initial framing was too narrow

Round 3.5 opened with a proposal for "longitudinal conversation doctrine" + "intervention context layer" + "outbound message envelope" as the cross-cutting doctrine sections. This framing was too narrow on three axes:

1. **Patient-only:** missed provider tasks / staff tasks / billing / clinical escalation / ops hospitality / care coordinator / vendor actions
2. **Appointment-first:** broke Hims-style async care / lab / Rx / intake / commerce / refund / promo / membership / payment event sources
3. **Outbound-only:** missed suppression / no-op / state-transition-proposal / scheduling-offer / context-update action_kinds

The user named all three pillars repeatedly. Each was treated by me as a new discovery. Pattern 9 (known-pillars-as-discoveries) was forming.

### §13.2 Four corrections widened the framing

Across the seven-hour dialogue, chat + user landed four named corrections:

**Correction 1 — Anti-brain naming:** Layer named "Context Module Layer" NEVER "Brain Layer" / "Knowledge Layer" / "Protocol Engine." Tesla analogy: the operating manual is not the brain.

**Correction 2 — 9-value thread_policy symmetric with conversation_scope:** Added `attach_to_entitlement_thread` ("benefit expiring") + `attach_to_general_patient_thread` ("how's your lotion?").

**Correction 3 — Multi-recipient orchestration:** Expanded envelope from 13 → 17 fields. Added `recipient_class` (8 values) + `audience_scope` + `action_required` (9 values) + `owning_queue`. Cross-recipient-class composition split invariant locked. Rhinoplasty post-op example was the test case: "Dr Z, your patient had rhino last week, time to call them tomorrow" is a provider_task, NOT a patient_message.

**Correction 4 — Source-agnostic CNS Action Envelope:** Reframed §2.14 from "Longitudinal conversation" → "Source-agnostic CNS action orchestration." Reframed §2.15 from "Intervention Context Layer" → "Context Module Layer" (Intervention is ONE of 6 module types: Intervention / Product-SKU / Care Program / Entitlement / Order-Commerce / Patient Profile). Reframed §2.16 from "Outbound Message Envelope" → "CNS Action Envelope." Added `action_kind` ENUM as field #1 (10 values). 18-field envelope. Cross-action_kind composition split invariant. `appointment_id` declared OPTIONAL context.

The user's verbatim challenge on Correction 4: *"how about a retail purchase? how about a refund? how about a promo applied to account. etc etc etc etc. does our CNS architecture allow now for all those triggers to travel within it?"*

The answer should have been: **yes, that's what DL-14 + DL-16 already enable, and we already documented it in `communications_topology.md` + §1F + §1G + §1P + §1Q.23 + 4h phase work.** Instead, each pillar was treated as a discovery. Pattern 9 was now fully active.

### §13.3 The user enforced the citation discipline

User direction 2026-05-17 (verbatim): *"like jesus. havent we already discussed all this like 3-4 times !!!!!!!!! ?????? how many times do i need to remind you guys what we're doing broadly with OMNIA and the CNS and all the atomic events etc etc etc. isnt there a goddamn system map?? like why do i feel like no one is fucking reading it. and like 20 other documents we've slaved thru over the past 8 weeks."*

This was the inflection point. The user named the failure pattern directly. The right response was to audit existing doctrine + cite it, not re-author it.

### §13.4 Chat's reliability-guardrails audit + Round 3.5 §2.19 Citation Map

Chat surfaced 8 reliability guardrails (contact endpoint resolution / delivery lifecycle / live-state revalidation / idempotency / unsolicited inbound / internal task lifecycle / content versioning / observability). Audit confirmed **7 of 8 already locked** across DL-14 / DL-15 / DL-16 / DL-18 / DL-20 / DL-21 + communications_topology.md + §1F / §1G / §1G.8 / §1G.11 / §1P / §1Q.23 + 4h phase work. Only 1 (Context Module content/version governance) genuinely missing — patched into §2.15 with `version` + `approved_by_actor` + `effective_from` + `effective_to` + `superseded_by_version` + `change_audit_lineage` fields.

§2.19 Citation Map was added to make this binding on Round 4 author: cite existing doctrine; do NOT re-author.

### §13.5 Round 3.5 doctrine lock (commit `eb77de1`)

Six doctrine sections locked in 00_index.md:
- §2.14 Source-agnostic CNS action orchestration (18+ event source taxonomy; Tesla-freeway pipeline; Hims async pressure-test; 5 patient-facing + parallel internal action classes; 15 worked examples)
- §2.15 Context Module Layer (6 module types; anti-brain naming; 3-packet projection; content/version governance)
- §2.16 CNS Action Envelope (18 fields; 10-value action_kind; 9-value thread_policy; 8-value recipient_class; 9-value action_required; 7-value reply_policy; field applicability matrix; 8-tier arbitration; contact-load budget; 5-op composition; 10 invariants; graceful degradation)
- §2.17 Provider Clinical Context Packet forward-reference (Round 5/7 binding; charting-from-context anti-pattern; AI citation/trace requirement)
- §2.18 Round 4 mandatory pre-brief Sections A-O
- §2.19 Citation Map (NOT new architecture; 8-guardrail audit → existing doctrine binding)

Plus §2.20 Amendment J candidate (4-part substrate work parked for Round 5/7). Plus Phase 1 hardening v10 entry in system_map.

### §13.6 Scaffolding to prevent recurrence (commits `3b85538` + `ba0150f` + this commit)

Round 3.5 closed by writing the scaffolding the user demanded:

1. **§2.21 Round Kickoff Reading Discipline** (commit `3b85538`) — every future round MUST read 10 specific docs before authoring + open with read-receipt statement + close with authored-verdicts statement. §6 domain status table extended with MUST READ column for Domains 4-7 + Final.

2. **CNS Action Orchestration ADR** (commit `ba0150f`) — at [`cns_action_orchestration_adr_2026-05-17.md`](cns_action_orchestration_adr_2026-05-17.md). Captures the Round 3.5 decision + 4 corrections + 5 cleanup patches + Patch 7 + binding citation mechanism + rationale + consequences + alternatives + verbatim user dialogue.

3. **Volume 2 narrative + post-mortem extension** (this commit) — Volume 2 (this file) covering Phase B.5 + Build Contract + Rule Matrix Rounds 1-3.5. Post-mortem extended with Patterns 9 (known-pillars-as-discoveries) + 10 (narrow-framing-creep).

---

## Lessons across the arc (Phase B.5 → Round 3.5)

### Lesson 1 — Mindbody is evidence, not template

Layer 2 synthesis of Mindbody screenshots is useful AS EVIDENCE of tenant operational needs. It is NOT useful as a substrate template. Tenant catalogs hold the specifics; OMNI substrate stays generic. (Post-mortem Pattern 1.)

### Lesson 2 — Doctrine doesn't substitute for substrate

If a doctrine artifact doesn't translate to a substrate-slice-able primitive within one pass, it is the wrong artifact. (Post-mortem Pattern 2.)

### Lesson 3 — No compound enums

Enum values that mix concepts (`booking_origin = new_client_organic_online` / `encounter_profile = aesthetic_treatment_visit`) are a category error. Decompose to separate fields. (Post-mortem Pattern 3.)

### Lesson 4 — Anti-vendor-naming, anti-specialty-leakage

Vendor names (Allē / Aspire / Cherry / Twilio / Stripe / Surescripts / Quest / Labcorp) do NOT belong in OMNI substrate enums. Specialty-coded values (`aesthetic_office_visit` / `derm_visit`) do NOT belong in OMNI substrate enums. Both live in tenant catalogs. (Post-mortem Patterns 4 + 5.)

### Lesson 5 — Three-layer foundation pattern

Every operational domain has three substrate layers: Planned commitment + Actual delivery + Linked evidence + commerce. The pattern is universal across scheduling / commerce / RBAC / federation / intake / messaging / clinical-media / care obligations / promo. (Coherent OMNI architecture pattern.)

### Lesson 6 — Known pillars are not discoveries (Pattern 9)

The CNS doctrine, communications_topology, orchestration_action primitive, actor 4-tuple, episode_catalog cadence engine, appointment_confirmation_event substrate, and §1P inbound pipeline + §1Q.23 patient channel preferences + 4h phase rich-chat/action-items/inbound-classification builds were ALL locked before Round 3.5. Treating any of these as "new findings" during a new round is a re-discovery anti-pattern. Cure: §2.21 Round Kickoff Reading Discipline + §2.19 Citation Map. (Post-mortem Pattern 9 — added in scaffolding 3/3.)

### Lesson 7 — Narrow framing creep (Pattern 10)

Round 3.5 started narrow ("CNS communications doctrine") and required 4 corrections to widen to the actual width ("source-agnostic CNS action orchestration"). The wide framing was clear from the start if Pattern 9 hadn't been active. Cure: read the system map + relevant DLs + communications_topology FIRST; let the existing scope set the round's scope. (Post-mortem Pattern 10 — added in scaffolding 3/3.)

### Lesson 8 — Citation discipline > re-authoring discipline

When existing doctrine covers a concern, CITE it. Do not re-author. §2.19 Citation Map is the binding mechanism. Future rounds inherit this discipline via §2.21 Round Kickoff Reading Discipline.

---

## What's next (post-Round-3.5)

Round 4 authoring starts after this scaffolding lands. Round 4 scope: Domain 4 — Confirmation / outbound round-trip rules. Estimated 32-38 Day 0 rules across 2 lanes (Lane 1 confirmation round-trip per DL-20 inv 40 + Lane 2 protocol-aware comms). Round 4 must honor §2.18 pre-brief Sections A-O + §2.19 Citation Map + §2.21 Round Kickoff Reading Discipline.

After Round 4 closes, Round 5 (Domain 5 — Encounter creation) opens with §2.21 read receipt + Amendment J(a) Context Module Layer substrate evaluation + §2.17 Provider Clinical Context Packet substrate work.

After Round 5: Round 6 (Domain 6 — Checkout / commerce / entitlement) opens with §2.21 + Shopify targeted ingestion (per §2.12 binding) + §2.9 Domain 6 pre-brief Sections A-K + Amendments H + I substrate evaluation.

After Round 6: Round 7 (Domain 7 — Documentation / evidence) opens with §2.21 + Amendment J(d) Provider Clinical Context Packet assembly substrate + DL-22 Clinical-Media.

After Round 7: Final round — 10 scenarios validation end-to-end across all 7 domains. Then substrate-slice readiness check per §10 promotion gate.

---

## Closing principle

> *"We already did this work."*
>
> — User direction 2026-05-17

This is the principle Volume 2 closes on. The 8+ weeks of work that produced DL-14 through DL-22 + communications_topology.md + §1F / §1G / §1G.8 / §1G.11 / §1P / §1Q.23 + 4h phase rich-chat / action-items / inbound-classification builds are real and binding. Future rounds inherit this work via §2.21 + §2.19 + this ADR + this narrative + the post-mortem patterns. The drift that produced Pattern 9 + Pattern 10 will not recur if the scaffolding is honored.

A future Volume 3 will be needed if the project crosses another major inflection point — most likely after substrate slice begins, or after the Round 7 final scenarios validation closes the Day 0 Scheduling Rule Matrix.

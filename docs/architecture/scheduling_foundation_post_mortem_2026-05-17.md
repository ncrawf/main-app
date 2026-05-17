# Scheduling Foundation Post-Mortem (2026-05-16 + 2026-05-17 — extended 2026-05-17 post-Round-3.5)

**Status:** Forensic ADR-style record. No praise. Honest analysis of what went wrong during the two-day scheduling foundation arc + the post-arc Day 0 Scheduling Rule Matrix Rounds 1-3.5, the failure patterns that repeated, and the escape mechanism that pulled us out. Written so future Opus + Knox sessions on remaining pillars (Rx, Labs, Procedures, Commerce-deep, Communications-orchestration) AND remaining rule matrix rounds (4, 5, 6, 7, Final) don't repeat the same loop.

**Scope:**
- 2026-05-16: 190 Mindbody screenshots ingested, Layer 2 synthesis written, DL-15 + DL-16 amendments locked, six new DL DRAFTs authored (DL-17 → DL-22).
- 2026-05-17 morning: patch round v2 — 37 patches across the 6 DRAFTs, DL-15 amendment 8, anti-vendor doctrine warning, preservation doc, three-layer foundation refactor, multiple drift corrections.
- 2026-05-17 afternoon: Day 0 Scheduling Rule Matrix Rounds 1-3.5 — Domain 1 (Treatment menu) + Domain 2 (Booking composer) + Domain 3 (Appointment lifecycle) + cross-cutting doctrine §2.0-§2.20 + §2.21 Round Kickoff Reading Discipline.
- 2026-05-17 evening (Round 3.5 post-mortem extension): Pattern 9 (known-pillars-as-discoveries) + Pattern 10 (narrow-framing-creep) added; companion ADR `cns_action_orchestration_adr_2026-05-17.md` + Volume 2 narrative `evolution_narrative_volume_2_2026-05-17.md` authored.

**Total failure patterns named:** 10 (originally 8 from the 2026-05-16/17 arc; Patterns 9 + 10 added post-Round-3.5).

**Audience:** the user, Knox, and any future Opus instance that picks up remaining pillars or remaining rule matrix rounds. The point of this doc is that the next pillar/round must NOT take 12+ hours of back-and-forth to land if the user has already explained the concept.

---

## §1 What actually happened in two sentences

Yesterday produced a lot of paper that looked like progress but imported Mindbody's specific implementation choices as OMNI substrate (specialty-coded enums, vendor names as enum values, Mindbody role names as substrate, encounter_profile_registry with hardcoded values). Today the user had to manually pressure-test scenario after scenario to surface each drift, and at every refinement either I or Knox tried to add MORE doctrine instead of building substrate — until corrections eventually landed and the foundation stabilized into the 3-layer separation pattern that actually scales.

---

## §2 What yesterday's 12-hour arc actually produced

**Tangible outputs from 2026-05-16:**

| Artifact | Status | Honest assessment |
|---|---|---|
| 190 Mindbody screenshots ingested in 21 batches | Real evidence | Useful AS EVIDENCE of tenant operational needs. NOT useful as a substrate template. |
| Layer 2 synthesis doc (185+ findings, 13 sections A-M) | Filed | Mostly Mindbody-shaped. Documented Mindbody's reality faithfully. Did NOT translate to OMNI generic primitives. Section G's "DL amendments needed" list became the source of yesterday's import-Mindbody-as-substrate drift. |
| DL-15 amendments 1-7 (invariants 29-35) | Locked | Mostly sound. Amendment 4 (Service Type enum: Appointments/Arrivals/Classes/Courses/Memberships) imported Mindbody categories. Amendment 5-7 are real substrate work. |
| DL-16 amendments 1-4 (invariants 40-43) | Locked | The 21-event client_alert seed + 32 outbound trigger seed + actor 4-tuple were import-Mindbody-as-substrate but mostly defensible because they're registry-extensible (tenant can extend). The actor 4-tuple was real harmonization work. |
| DL-17 DRAFT (Commerce, 35 invariants) | DRAFT | Had Allē/Aspire/Cherry/ClassPass as 25-vendor payment_method enum. Q-DL17-3 proposed Allē as third_party_integration. Both wrong — fixed today. |
| DL-18 DRAFT (RBAC, 24 invariants) | DRAFT | Proposed parallel substrate to existing `lib/auth/capabilities.ts`. 11 permission groups including Mindbody verbatim names (External / Social Media Manager). Both wrong — fixed today. |
| DL-19 DRAFT (Settings-Infrastructure, 28 invariants) | DRAFT | Mostly OK. Was missing booking_preset substrate. |
| DL-20 DRAFT (Care-Coordination, 32 invariants) | DRAFT | Had encounter_profile_registry with 10 specialty-coded enum values (aesthetic_treatment_visit / procedure_visit_with_room / etc.). Wrong — ripped out today. |
| DL-21 DRAFT (Federation-Topology, 28 invariants) | DRAFT | Promoted A1 future arc to Day 0 (correct per user direction) but didn't cleanly separate Day 0 scope from FUTURE scope. Fixed today. |
| DL-22 DRAFT (Clinical-Media, 26 invariants) | DRAFT | Had `partner_device_canfield_visia` as enum value. Wrong — vendor name out of enum, into STRING. Fixed today. |
| System map registry index for DL-17 → DL-22 | Filed | The thing that made the drift visible by listing it all in one place. |

**The honest verdict on yesterday's output:** the screenshots were good source material; the synthesis was a faithful description of Mindbody; the DL DRAFTs were doctrine ABOUT a specific vendor's implementation more than doctrine FOR OMNI's substrate. They needed today's pressure-testing to extract generic primitives from vendor-specific patterns. They could not have been promoted from DRAFT to LOCKED without today's corrections — every single DRAFT had at least one substantive drift that would have created migration pain post-substrate-slice.

---

## §3 The failure patterns that repeated

Each of these showed up multiple times across the two days. Naming them so future sessions can flag them when they recur.

### Pattern 1 — "Layer 2 synthesis as substrate template" (root cause of most yesterday drift)

**What it looked like:** the 190 screenshots produced 185+ architectural findings describing Mindbody's operational reality (5 permission groups, 25 payment methods, encounter_profile with specialty values, 13-state appointment lifecycle with "confirmed" meaning booking-committed, 24-method payment federation, 10 settings sections, etc.). Layer 2 G section enumerated "DL amendments needed" — and I treated those enumerations as a substrate spec for OMNI. They were not. They were a description of one vendor.

**Why it's seductive:** Mindbody has 1,000+ medspa customers. Their categorizations encode 20 years of operational learning. It feels rigorous to honor their primitives. It IS rigorous to honor their LEARNING; it is NOT rigorous to honor their SCHEMA.

**The fix:** Mindbody screenshots are EVIDENCE OF TENANT NEEDS that OMNI's generic primitives must satisfy. They are NOT a substrate template. Tenant catalogs hold the specifics; OMNI substrate stays generic.

**Recurrence risk on remaining pillars:** Rx (Surescripts patterns), Labs (Quest/Labcorp interfaces), Procedures (CPT codes), Commerce-deep (Stripe schemas) all have rich third-party reference systems that will tempt the same import-as-substrate drift.

### Pattern 2 — "Bridge with doctrine" when user wanted substrate

**What it looked like:** the user repeatedly asked to build substrate. I/Knox responded with "let's lock doctrine first" / "Phase 1 hardening needs to land before substrate slice" / "let's draft this DL first" / "let's add an amendment." Each response was internally coherent but the cumulative pattern was: every time the user pushed toward code/migrations/substrate, we produced another doctrine artifact.

**Why it's seductive:** doctrine is cheaper to write than substrate. Drafts can be amended without consequences. Substrate forces hard choices.

**The fix:** the user's "build substrate" requests should have been honored sooner. Doctrine layers above 1-2 levels of abstraction produce diminishing returns. The decision rule going forward: if a doctrine artifact doesn't translate to a substrate-slice-able primitive within one pass, it is the wrong artifact.

**Recurrence risk:** very high. Each remaining pillar has its own complexity that will tempt more doctrine before substrate.

### Pattern 3 — Compound enums that mix concepts

**What it looked like:**
- `booking_origin` = `new_client_organic_online` mixed patient_status + channel + attribution + trigger into one enum value. Knox flagged. Decomposed to 3 fields + 1 computed.
- `encounter_profile` = `aesthetic_treatment_visit` mixed specialty + service + venue + modality into one enum value. User flagged. Ripped out; encounter.modality = 4 values; rest live on separate axes.
- `service` rows replicated per Mindbody pattern (Botox 20u / Botox 30u / Botox 40u as separate services) mixed product + quantity into row identity. Eliminated by `quantity_strategy = per_unit_quantity` per DL-15 amendment 5.

**Why it's seductive:** one enum value that captures "everything about this thing" reads cleanly in code. Avoids joins. Feels self-contained.

**The fix:** each concept gets its own column/field. The substrate exposes axes; specifics emerge from combinations.

**Recurrence risk:** high on every pillar.

### Pattern 4 — Workarounds instead of upstream fixes

**What it looked like:** DL-15 inv 5 had `confirmed` meaning booking-committed. To free "confirmed" for patient-confirmation in DL-20, I proposed `acknowledged_by_patient` as a workaround on the new field. The user + Knox correctly pointed out: amend DL-15 instead. Fixed via DL-15 amendment 8 (rename confirmed → scheduled).

**Why it's seductive:** amending locked doctrine feels heavy. Working around it feels light.

**The fix:** workarounds are tech debt. If a name is wrong in locked doctrine, amend the locked doctrine — especially when the substrate slice hasn't landed yet and the rename is documentation-only.

**Recurrence risk:** medium. As remaining DLs lock, the temptation to work around bad terminology in already-locked doctrine will be constant.

### Pattern 5 — Scope creep on every refinement

**What it looked like:**
- User asked about loyalty programs → I expanded into 30-field `care_episode_task` substrate with 55 task_kinds + 4 refinement gaps.
- User asked about confirmation tracking → I overengineered into multi-channel event substrate with 11 fields.
- Knox proposed adding "bookable_offering" layer → 5-substrate-layer model when 4 was enough.
- Knox proposed `schedule_segment` child substrate → over-modeling when appointment_item + encounter_line each carry own timing.
- Knox proposed 4-FK participant attachment → 4 targets when 3 was correct.

**Why it's seductive:** more substrate feels safer than less. Every edge case can be modeled.

**The fix:** start minimal. Defer expansion to when reality forces it. Document the parked expansion in a preservation doc; do NOT promote it to locked doctrine without operational evidence.

**Recurrence risk:** very high.

### Pattern 6 — AI "agreement-then-correction" loop (independent pressure-testing failure)

**What it looked like:** I'd respond to user. User shared response with Knox. Knox refined. User shared back. I accepted refinement. User pressure-tested it. Either AI corrected. Loop continued. Neither AI was independently pressure-testing BEFORE responding. We reflected each other's framing instead of stress-testing it.

**Specific instances:**
- I proposed "appointment_line as primary primitive carrying all clinical truth." Knox approved. User found the Hims-async + lab-review + recall cases that broke it. Knox refined into 3-layer model. I accepted.
- I proposed `acknowledged_by_patient` workaround. Knox approved. User said "fix the upstream, don't work around." Knox refined into DL-15 amendment 8. I accepted.
- I proposed array-of-promo-FKs on appointment. Knox approved. User said "promo lives on patient account not visit." Knox refined into patient_promo_claim + appointment_promo_intent + commerce application. I accepted.

**Why it's seductive:** dance-partner dynamics with another AI feel productive. We were both seemingly reasoning.

**The fix:** each AI should independently run scenario pressure-tests BEFORE proposing or accepting. The user was the pressure-tester all day; both AIs were proposing.

**Recurrence risk:** very high. This is a structural failure of how the two AIs interact.

### Pattern 7 — Treating Mindbody UI labels as substrate vocabulary

**What it looked like:**
- Mindbody's 5 permission group names (External / Front Desk / Manager / Service Provider / Social Media Manager) became my DL-18 permission_group seed list. The user pointed out OMNI has its own 8 staff roles per `lib/auth/capabilities.ts` — those are the substrate.
- Mindbody's 25 payment method labels (Allē / Aspire / Cherry / ClassPass / etc.) became my DL-17 inv 18 enum seed. The user pointed out these are tenant-applied LABELS, not OMNI integrations.
- Mindbody's "Notes" field became my DL-20 single-string staff note. The user pointed out staff append multiple notes over time with initials prefixed — needs append-only child substrate.

**Why it's seductive:** Mindbody's labels are real-world-tested. Their UI labels have survived in production. Importing them feels like importing wisdom.

**The fix:** Mindbody UI labels are tenant configuration in OMNI substrate. The OMNI substrate exposes generic primitives; tenants name their groups, payment methods, and notes however they want.

**Recurrence risk:** very high. Especially for Commerce-deep, Clinical-Coding, Federation specialty rollout.

### Pattern 8 — Doctrine as displacement activity (the deepest failure)

**What it looked like:** 12 hours of back-and-forth dialogue, 27,983-line Knox chat transcript, 190 screenshots, Layer 2 synthesis, design pressure-test doc, brain audit, operating model + architecture synthesis, Day 0 Build Contract, 6 DRAFTs, 37 patches, preservation doc. The user kept saying "I want to build this." We kept producing more paper.

**Why it's seductive:** writing doctrine feels like progress. Each draft can be amended. Code can't be amended without migration cost.

**The actual root cause:** an AI's natural inclination is to extend the artifact in front of it. Given a doctrine draft, the next move is to refine the draft. The user wanted to switch artifacts entirely (substrate slice / DDL / code). Switching artifacts is harder than refining the current artifact, especially when refinement is rewarded as productive.

**The fix:** the user-stated objective (build substrate) must override the AI's natural inclination (refine current doctrine artifact) by default. When user says "build," AI must shift artifact class — not pile more doctrine.

**Recurrence risk:** structural. This is the highest-risk pattern for the remaining pillars. Every remaining pillar will tempt another DL DRAFT, another preservation doc, another preflight, another amendment cycle.

### Pattern 9 — Known pillars treated as new discoveries (added 2026-05-17 post-Round-3.5)

**What it looked like:** Across Day 0 Scheduling Rule Matrix Rounds 1-3.5, the same locked doctrine was repeatedly "re-discovered" instead of cited. CNS bounded autopilot (DL-14 inv 18-22), 32-seed outbound trigger registry (DL-16 amendment 42), actor 4-tuple (DL-16 amendment 43), 21-event client-alert vocabulary (DL-16 amendment 41), episode_catalog.recommended_cadence (DL-20 inv 5), episode cadence + recommended-next-action engine (DL-20 inv 18), `appointment.confirmation_state` ENUM (DL-20 inv 33), `appointment_confirmation_event` substrate (DL-20 inv 40), and the entire `communications_topology.md` (3 patient surfaces + 6 outbound channels + 5 inbound channels + 4h phase work for rich chat / action items / inbound classification) were treated as new findings each round when they were already locked across 8+ weeks of prior phase work.

**Verbatim user direction during Round 3.5 calling this out:**

> *"like jesus. havent we already discussed all this like 3-4 times !!!!!!!!! ?????? how many times do i need to remind you guys what we're doing broadly with OMNIA and the CNS and all the atomic events etc etc etc. isnt there a goddamn system map?? like why do i feel like no one is fucking reading it. and like 20 other documents we've slaved thru over the past 8 weeks."*

**Why it's seductive:** the locked doctrine spans ~10 binding files across `docs/architecture/` + `.cursor/plans/doctrine/` + `system_map_three_layers_60706286.plan.md` + the 4h phase work commits. Reading all of them before authoring a new round feels heavy. Re-discovering a pillar while authoring is faster in the moment but produces 12+ hours of cumulative drift correction.

**The actual root cause:** scheduling-rule-matrix authoring is its own active workspace; without an explicit binding mechanism that forces the author to read the locked doctrine first, the path of least resistance is to author rules from scratch and have the user manually re-introduce each pillar one scenario at a time.

**The fix (landed in Round 3.5 scaffolding):**
1. **§2.21 Round Kickoff Reading Discipline** in 00_index.md — binds every future round (4, 5, 6, 7, Final) to mandatory pre-reading of 10 specific items (system_map + 00_index full + post-mortem + preferences + 3-layer pattern + Volume 1 + Volume 2 narrative + communications_topology + Round 3.5 ADR + prior domain files + per-domain MUST READ list)
2. **§2.19 Citation Map** in 00_index.md — anchors each chat-flagged reliability guardrail to existing locked doctrine, making citation binding on Round 4 (and inheriting for future rounds)
3. **Per-domain MUST READ column** in §6 domain status table — Round 4 / 5 / 6 / 7 / Final each have specific doc lists they must read
4. **Round opening + closing templates** in §2.21 — audit lineage proof of pre-reading

**Recurrence risk:** medium. The scaffolding is binding but a future round could still skip the reading checklist. Mitigation: round opening statement is non-optional + auditable. If a Round 4 file opens without the read-receipt statement, the round is halted until it complies.

### Pattern 10 — Narrow framing creep (added 2026-05-17 post-Round-3.5)

**What it looked like:** Round 3.5 opened with proposed doctrine sections framed as "longitudinal conversation doctrine" + "intervention context layer" + "outbound message envelope" — all narrow on three axes (patient-only / appointment-first / outbound-only). Across a seven-hour multi-correction dialogue, the framing was widened through 4 named corrections to the actual width: "source-agnostic CNS action orchestration" + "Context Module Layer" (Intervention is ONE of 6 module types) + "CNS Action Envelope" (outbound message is ONE of 10 action_kinds).

Specifically:
- Correction 1 — Anti-brain naming (Tesla analogy)
- Correction 2 — 9-value thread_policy symmetric with conversation_scope (added `attach_to_entitlement_thread` + `attach_to_general_patient_thread`)
- Correction 3 — Multi-recipient orchestration (expanded envelope from 13 → 17 fields; added recipient_class + audience_scope + action_required + owning_queue; rhinoplasty post-op call example was the test case)
- Correction 4 — Source-agnostic CNS Action Envelope (expanded envelope from 17 → 18 fields; added action_kind ENUM as field #1; reframed Intervention Context Layer → Context Module Layer with 6 module types; appointment_id declared OPTIONAL context; Hims-async pressure-test passed)

Each correction was forced by the user naming a real-world scenario the narrow framing couldn't handle:
- "what about provider tasks? what about billing tasks?" → Correction 3
- "what about retail purchase? what about refund? what about promo applied? what about lab/Rx/intake?" → Correction 4

**Why it's seductive:** narrow framing feels achievable for a single round. Wide framing feels like it might creep into adjacent rounds' scope. The author defaults to narrow.

**The actual root cause:** Pattern 9. If the author had read DL-14 inv 16 (orchestration_action primitive) + DL-16 inv 3 (4-partition event envelope) + DL-16 amendment 42 (32-seed outbound trigger registry covering 8 buckets including marketing / lifecycle / billing / clinical / forms / scheduling) BEFORE proposing Round 3.5 doctrine, the wide framing would have been visible from the start. The architecture is already source-agnostic at the doctrine level. The rule matrix had not yet made it binding for Domain 4 specifically.

**The fix (landed in Round 3.5):**
1. **§2.14 source-agnostic CNS action orchestration doctrine** — explicit wide framing. 18+ event source taxonomy. Appointment is OPTIONAL context.
2. **Round 4 scope clarification** — Domain 4 authors SCHEDULING-domain slice; CNS Action Envelope + Context Module Layer + arbitration + composition discipline BINDS CROSS-DOMAIN; other domains inherit when they author their own action orchestration rules.
3. **§2.21 Round Kickoff Reading Discipline** — binds future round authors to read the existing CNS doctrine before proposing scope; prevents narrow opening.

**Recurrence risk:** medium-high. Each remaining round (5, 6, 7) will have its own "narrow scope feels achievable" temptation. Mitigation: §2.21 read receipt template requires the round to state "key constraints I am honoring from prior rounds" — which forces the author to consider the wide existing architecture before narrowing scope.

---

## §4 The escape mechanism — what pulled us out

The pattern that consistently broke the loop was the user running specific real-world scenarios.

| Scenario the user ran | Drift it surfaced |
|---|---|
| "Sarah does Hydrafacial + injector + red light same trip" | Encounter container needed multi-line structure; my single-encounter-with-one-service model was wrong |
| "Sarah is a Hims patient with multi-state GLP-1" | Async encounter without appointment; my appointment_line-as-primary was wrong |
| "GI scope + biopsy + 30-day phone followup + 1-year recall" | Care_episode_task as not-yet-an-appointment-and-not-yet-an-encounter; recall conversion lifecycle |
| "Why do we have aesthetic_office_visit" | Specialty leakage into encounter_profile; modality-only enum |
| "Allē / Aspire / Cherry are just labels we type in Mindbody" | Vendor names as substrate enum was wrong; payment_method.label STRING |
| "Patient wants Botox + chin filler + lip filler + Sculptra consult" | Multi-line + multi-participant + bundle preset reality |
| "SkinPen visit 2 of 3 of their package" | Entitlement redemption visibility; substrate already covers, UI projection needed |
| "Monthly membership benefits: free Hydrafacial + 20% off Botox + free peel" | Membership composition pattern; not a payment method, not a substrate row |
| "What if patient doesn't know which toxin brand they want?" | Broad-default booking; missing planned_details ≠ "Unknown" patient-facing |
| "How does the visit packet look?" (with two Mindbody screenshots) | booking_origin field + multi-channel confirmation tracking + deposit visibility |
| "Confirmation should mean PATIENT confirmation" | DL-15 amendment 8 freed "confirmed" terminology |
| "Promo lives on patient account, not just visit" | Four-layer promo model (definition / wallet / intent / application) |
| "No free text checklist for booking" | Mindbody-pattern booking_request_note + staff_note_entry split |

Every escape was a SCENARIO, not an abstraction. The user's pressure-tests worked because they forced me to translate doctrine into operational reality — and at every translation, the doctrine cracked.

**The implication for remaining pillars:** before promoting any DL DRAFT to locked, the user must run at least 5-8 specific real-world scenarios. Both AIs should propose scenarios independently. The drafts that survive scenario stress-testing are the ones ready to lock.

---

## §5 What is actually coherent now — the architecture that holds

This is the part the user explicitly asked for: what survives.

### §5.1 The 3-layer pattern, applied to every domain

After all the corrections, the coherent shape that emerged is consistent across pillars. Each domain has three layers:

```text
LAYER 1 — Planned commitment        (what's intended; future-facing)
LAYER 2 — Actual delivery           (what happened; accountable truth)
LAYER 3 — Linked evidence / commerce (charge, documents, messages, etc.)
```

The pattern matches FHIR + Epic + Cerner + Amazon + airline + restaurant + Tesla. Industry-validated. Every $1B-scale platform that handles complex multi-step service delivery uses this separation.

**Scheduling applies it:**
- Layer 1 = appointment + appointment_item
- Layer 2 = encounter + encounter_line
- Layer 3 = commerce_order + commerce_order_line + linked evidence

**Commerce applies it:**
- Layer 1 = commerce_order (cart open)
- Layer 2 = commerce_order_line + commerce_order_payment (paid/refunded)
- Layer 3 = linked accounting + entitlement + receipt

**RBAC applies it:**
- Layer 1 = permission_group + atom grants (configured)
- Layer 2 = capability exercised event (per requireCapability call)
- Layer 3 = audit_events trail + attestation envelope

**Federation applies it:**
- Layer 1 = federation_permeability_policy (configured)
- Layer 2 = cross-tenant action emitted (cns_decision per action)
- Layer 3 = audit trail + actor 4-tuple

**Intake applies it (existing DL-22):**
- Layer 1 = intake_session sent (intake assigned)
- Layer 2 = intake_response submitted (patient answered)
- Layer 3 = encounter_line referencing the intake (provider reviewed)

**Messaging applies it (existing §1Q + §1V):**
- Layer 1 = orchestration_action emitted (CNS decides to send)
- Layer 2 = rail-side projection per send attempt (Twilio confirmed)
- Layer 3 = inbound response + cns_decision + linked encounter

**This is the universal pattern.** When the next pillar (Rx, Labs, Procedures, Commerce-deep, etc.) starts, the first question is "what are the three layers" — not "what doctrine should we write." The substrate becomes obvious when the layers are explicit.

### §5.2 The cross-cutting disciplines that must hold

These are not domain-specific. They apply everywhere.

1. **No vendor names in substrate enums.** Tenant labels, free-form STRING. Per system_map Cross-DL warning.
2. **No specialty leakage in core substrate.** Specialty lives in tenant catalog. Per system_map Cross-DL warning.
3. **No Mindbody UI labels as substrate vocabulary.** Tenant configures group names, note kinds, etc. — substrate stays generic.
4. **Pricing on `pricing_option`, never on service or category.** Service is operational kind; pricing_option is commerce variant; category is taxonomy.
5. **Patient-level ownership for things that survive across visits.** Promo wallet, package entitlements, membership benefits — all on patient account, not appointment. Appointment carries INTENT; commerce carries APPLICATION.
6. **AI classifies; deterministic rules + staff decide.** AI never silently mutates substrate. Per DL-14 inv 18-22.
7. **Confirmation is CNS round-trip with state machine, not checkbox.** Per DL-15 amendment 8 + DL-20 inv 40.
8. **Encounter.modality is 4 values (in_person / video / phone / async).** Specialty / service / venue / arrival are separate axes.
9. **Free text for human notes (Mindbody pattern). Structured fields for operational data.** Booking_request_note free text; planned_details JSONB schema-driven.
10. **Tenant configures the menu. Substrate provides primitives.** service_category hierarchy + booking_preset + planned_detail_schema let tenant build their treatment menu without code change.

### §5.3 The DLs that survived (after Phase 1 v2 corrections)

- **DL-14** (CNS center of gravity) — locked. Holds.
- **DL-15** (Scheduling Substrate Spine) — locked + 8 amendments. Holds with the amendment 8 rename.
- **DL-16** (Universal CNS Event Envelope) — locked + 4 amendments. Holds.
- **DL-17 Commerce** — DRAFT, 38 invariants. Pricing-on-pricing_option + patient_promo_claim wallet + appointment_promo_intent + commerce application + generic payment_method + tenant flexibility. Coherent.
- **DL-18 RBAC** — DRAFT, 24 invariants. Extends existing `lib/auth/capabilities.ts`, not parallel. 8 staff roles + atom registry seeding from existing 20 capabilities. Existing audit_events as audit substrate. Coherent.
- **DL-19 Settings-Infrastructure** — DRAFT, 29 invariants. Settings substrate + service_policy + booking_preset hierarchy + bundles + dynamic schema. Coherent.
- **DL-20 Care-Coordination** — DRAFT, 41 invariants. 3-layer foundation + encounter.modality 4-enum + appointment_staff_note_entry + appointment_confirmation_event + encounter_participant + booking_origin 3-field + minimal care_episode_task recall extension. Coherent.
- **DL-21 Federation-Topology** — DRAFT, 28 invariants. Day 0 vs FUTURE matrix + 11-axis venue + multi-LE + jurisdiction + provider_license. Day 0 promotion of A1 future arc. Coherent.
- **DL-22 Clinical-Media** — DRAFT, 26 invariants. Unified patient_document substrate + 16 document_kind seeds + intake_session + consent + signature envelope. Coherent.

### §5.4 What's parked (won't be re-litigated, lives in preservation doc)

- Full care_episode_task substrate (30+ fields, 55+ task_kinds across 10 origin classes, lifecycle conversion rules, 4 refinement gaps) — parked in [.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md](../../.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md).
- AI routing of outbound pings + content generation — parked in same preservation doc.
- Federation Mode 3 / Mode 4 / Mode 5 / Mode 6+ — deferred per FUTURE_ARC §8.
- Care-Coordination-CNS workstream activation gate — requires explicit re-opening + joint signoff.

---

## §6 Lessons for the next 4-5 pillars

If the user explains a concept once during a session, it must be captured and not require re-explanation. If a pillar takes more than 4 hours from kickoff to substrate-ready DRAFT, the loop is failing.

### Operating rules going forward

1. **User says "build substrate" → switch artifact class.** Do not produce another doctrine draft. Move to DDL / RPC / migration.

2. **Every DL DRAFT must run through ≥5 scenario pressure-tests before being treated as substrate-ready.** Both AIs propose scenarios independently. User runs them.

3. **No vendor names, specialty names, or Mindbody UI labels in substrate enums. Ever.** Per cross-DL warning. Each new pillar MUST cross-reference the warning.

4. **The 3-layer pattern (planned commitment / actual delivery / linked evidence) is the default substrate shape for every domain.** When a pillar doesn't fit, that's a design question — not a license to invent new primitive shapes.

5. **Patient-level wallets for things that survive across visits.** Apply this to remaining pillars proactively (promo wallet, package wallet, membership wallet, future Rx wallet?, future lab-result wallet?).

6. **Cross-DL warnings cascade.** When a future pillar starts, its preamble must cross-link the existing cross-DL warning + the preference record.

7. **Locked doctrine can be amended pre-substrate-slice.** Amendments are cheap when no code has shipped. Workarounds become tech debt.

8. **Layer 2 synthesis from third-party reference systems (Mindbody / Surescripts / Quest / Stripe / etc.) is EVIDENCE, not template.** Future pillars: synthesis docs must explicitly call out the "evidence vs template" distinction and never auto-promote third-party patterns into substrate.

9. **Preservation docs for parked scope are cheap.** Use them aggressively. Better to park a 30-field substrate proposal than promote it prematurely.

10. **The user is the final pressure-tester.** Both AIs must serve that role — proposing scenarios, not just refining drafts.

---

## §7 Companion docs

- [coherent_omni_architecture_pattern_2026-05-17.md](../../.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md) — the 3-layer pattern applied across every domain (intake, messaging, CNS, scheduling, commerce, RBAC, federation, clinical-media). One-page reference for future pillars.
- [user_knox_preferences_locked_2026-05-17.md](../../.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md) — explicit user + Knox preferences delivered today. Drop-in reference for future sessions. Never re-litigate.
- [future_care_obligations_design_2026-05-17.md](../../.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md) — parked design for care_episode_task substrate + AI routing of outbound + lifecycle conversion rules.

---

## §8 Honest cost accounting

| Day | Hours invested (approx) | Tangible substrate-ready output | Doctrine output |
|---|---|---|---|
| 2026-05-16 | ~12-14h | 0 substrate-ready primitives | DL-15 amendments 1-7 + DL-16 amendments 1-4 + 6 new DL DRAFTs (each requiring corrections today) |
| 2026-05-17 | ~10-12h | 11 commits of patches + corrected drafts + DL-15 amendment 8 + preservation doc | 37 patches applied; foundation now substrate-ready |

**Two-day total: foundation is substrate-ready, but at the cost of two days when the work should have been one focused day.** If the user had been given substrate-shaped artifacts on day 1 (DDL, RPC stubs, event registry seeds), day 2 wouldn't have been needed.

The remaining pillars must not repeat this. If they do, the cost compounds. With 4-5 pillars at 2 days each in the worst case, that's 8-10 more days to land foundations. With proper scenario-driven substrate-first work, it should be 1 day per pillar.

---

## §9 What "done" looks like

This post-mortem is filed. The user reads it once. Future Opus + Knox sessions reference it. The patterns named here are flagged when they recur. The 3-layer pattern is the default substrate shape for the next pillar. The cross-DL warning is honored. The user does not re-explain scheduling concepts.

If a future session asks "why this shape," the answer is in §5. If a future session asks "are we drifting," the answer is checked against §3 patterns. If a future session asks "what's parked," the answer is in §5.4 + preservation doc.

The next pillar begins clean.

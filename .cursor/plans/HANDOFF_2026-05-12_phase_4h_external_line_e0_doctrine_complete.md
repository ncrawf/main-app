# HANDOFF — Phase 4H external-line e0 preflight + DL-13 doctrine complete

**Date:** 2026-05-12
**Status:** CLOSED. Doctrine arc complete. e0 preflight + DL-13 lock both landed. No code, no migrations — preflight + doctrine working drafts only across binding doctrine-tier docs.
**Provenance:** consolidates the R1-R9 pressure-test arc on the e0 external-line preflight + the DL-13 doctrine land across MAIN + foundational doc + ADR + topology + radar + evolution narrative. Closes the gap between e0 preflight (operational design) and core doctrine (binding architectural commitments).

---

## Why this handoff exists

The DL-11 (three messaging surfaces) doctrine lock named "external-line first-touch" as a future preflight without specifying its substrate, settings, identity sync, or operating-mode discipline. Within 24 hours of DL-12 landing, the user opened the e0 preflight; a 9-round pressure-test arc surfaced five cross-cutting binding clauses that promoted out of preflight scope into core doctrine because they apply beyond external-line — to labs, payments, EHR-export, pharmacy, telephony, and any future rail-bound domain. DL-13 binds these globally.

Every prior doctrine arc (DL-10, DL-11, DL-12) had its own closing handoff. The e0 + DL-13 arc gets the same treatment so future-you (or future contributor) can reconstruct what happened, why, and what comes next without spelunking through the agent transcript.

---

## What landed

### e0 external-line preflight (`.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md`)

A 23-section design document for the external-line first-touch substrate and routing. Composed across 9 rounds of pressure-testing (R1-R9). Includes:

- **23 design sections** covering: framing + scope, four-layer model, rail-event substrate sketch, contact-identity substrate sketch, conversation + queue substrate sketch, settings taxonomy, multi-brand operating modes, conversation display identity + status chips, voicemail + phone-system parity, outbound endpoint selection, draft semantics, delivery-state handling, search + visibility, annotation + media disposition, deterministic outbound discipline, AI participation bounds, contact-identity lifecycle + manual-creation sync, watch zones, out-of-scope, phasing for e1/e2/e3, verification gates, doctrinal alignment table, cross-references.
- **9 substrate sketches** (org_communication_endpoints, contact_identities, external_conversations, external_conversation_messages, external_conversation_artifacts, external_message_delivery_events, external_conversation_drafts, contact_identity_handles future, patient_projection_links extension).
- **10 framing questions** (drove the design choices).
- **38 guardrails** (operational + architectural).
- **55-scenario matrix** (covering unknown-contact SMS through multi-brand front-desk through voicemail-with-clinical-content through STOP-cascade-across-intents through 4-mode × 3-backend brand configurations).
- **R1-R9 pressure-test trail** (round-by-round synthesis below).

### DL-13 doctrine lock — bundled across MAIN + foundational + ADR + topology + radar + narrative

**MAIN system map** — DL-13 lock block + seven binding subsections:

- **DL-13 lock** — 5 invariants (rail-agnostic substrate + vendor-confined adapter; OMNI canonical source-of-truth + vendor-adopt-not-write; settings precedence hierarchy six-level top-down; deterministic outbound 8-gate; display-projection-not-substrate) + 3 cross-cutting extensions (DL-10 handle-vs-person extension; DL-12 invariant 31 5-disposition extension; architectural mode-agnosticism 4 brand modes × 3 backend modes) + 4 explicit rejected anti-patterns.
- **§1D.4** — settings precedence hierarchy + endpoint admin capability + multi-brand operating-mode configuration + settings audit + history.
- **§1G.12** — external-line surface + substrate spine + voicemail/missed-call state machine + multiple endpoints per location/brand + outbound endpoint selection + outbound traceability + draft semantics + delivery state handling + annotation + search + visibility.
- **§1J.13** — handle-vs-person identity discipline + contact-identity lifecycle (8 operations) + manual-account-creation sync (OMNI publishes, vendor adopts) + retroactive projection of unlinked conversations + external-line access scope + search audit + identity-altering operations.
- **§1N.9** — AI-not-as-participant on external conversations + deterministic-outbound-under-system-actor + Response Assist scope on external-line + anti-patterns rejected.
- **§1P.15** — external-line artifacts as §1P inbound channel + artifact storage on external_conversation substrate not chart + 5-disposition pattern (link / attach / chart_file / safety_task / reject_spam) + annotated images + atomization of voicemail + PDFs.
- **§1Q.14.2** — deterministic external-line outbound 8-gate + endpoint-intent classification on send + single-line marketing-and-clinical operations + STOP/HELP cascade discipline + cross-channel STOP doctrine + failed-gate handling + human-authored sends and the 8-gate.
- **§1V.11** — display identity computed projection + status chips computed projection + external-line message history immutability + correction via follow-up not history rewrite + delivery state mutable history.

**Foundational doc**:

- **§4.B** primitive description updates for primitives #1 (system/automation actor_type first-class for deterministic outbound + sent_as_source attribution), #5 (handle-vs-person + relationship-aware identity discipline extended to external-line), #10 (rail-agnostic substrate + vendor-confined adapter discipline), #11 (AI-not-as-participant on external + Response Assist scope clarification), #16 (external-line voicemail/MMS/annotated-image artifacts).
- **§5 sibling #20** `external_communications/` reserved (total sibling count 19 → 20) with detailed sibling-boundary explanation distinguishing from communications_lifecycle, internal_collaboration, provider_tasking, and primitive #10.
- **§5.3(c)** external-communications-as-sibling-with-rail-agnostic-substrate guard binding the rail-agnostic + vendor-confined + adapter-pattern + broader-pattern application discipline.
- **§7.13.13** long-form DL-13 sub-doctrine across 7 subsections: why this sub-doctrine is foundational; rail-agnostic substrate + vendor-confined adapter pattern; OMNI canonical source-of-truth + vendor-adopt-not-write; settings precedence hierarchy; deterministic outbound 8-gate; display-projection-not-substrate; what DL-13 does NOT specify (deferred); cross-references.
- **§8.1** binding sub-clauses 29-33 (one per invariant) + additional cross-cutting sub-disciplines (handle-vs-person, 5-disposition, mode-agnosticism, AI-not-as-participant).
- **§11.0** crosswalk row pointing at all DL-13 canonical homes.

**ADR §7.16** — new section with 15 explicit REJECTED alternatives + decision rationale + watch zones + effect on the binding map. Notable refinements:

- "Marketing + clinical on a single rail / phone number — REJECTED" softened to "Marketing + clinical traffic on the same endpoint without intent classification, consent separation, routing policy, and audit — REJECTED" with explicit note recognizing real clinics legitimately use one main line for both lead capture and patient ops; substrate enforces safe pattern via per-send intent_class + per-intent consent + per-intent STOP + intent-aware routing + full audit.
- Adapter path language clarified: external-line under `lib/external-rails/<provider>/`; broader DL-13 vendor-confined-adapter pattern applies to other domains (labs / payments / EHR-export / pharmacy / future) via their own adapter boundaries inside their respective sibling directories — NOT all under `lib/external-rails/`.

**Communications topology**:

- **§11** placeholder swapped for concrete `PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md` citation.
- **§11** DL-13 substrate-spine paragraph binding the 5 clauses at the topology level.
- **§12** DL-13 cross-references subsection naming each of the 5 binding clauses + additional extensions (handle-vs-person, 5-disposition, mode-agnosticism, AI-not-as-participant) with canonical home pointers.
- End-of-synthesis line updated to include DL-13 + e0 preflight.

**Radar zones 69-78** (10 new):

- **69** — External-line rail-bypass drift.
- **70** — Vendor-as-contact-source drift.
- **71** — `chat_status` / `lead_stage` / `display_state` independent-field drift.
- **72** — Multi-brand cross-leakage drift.
- **73** — STOP-cascading-across-intents drift.
- **74** — Display projection drift from substrate (cache becomes source of truth).
- **75** — Settings-precedence inversion drift.
- **76** — Endpoint-policy-via-jsonb drift.
- **77** — External-line voicemail / MMS / annotated-image artifact auto-filing-to-chart drift.
- **78** — AI-as-participant drift on external conversations.

**Evolution narrative Act XIV** chronicles the R1-R9 arc + cross-arc impact map showing which future work inherits DL-13.

---

## R1-R9 pressure-test synthesis (round-by-round)

**R1 — Overall thoughts + RingCentral parity (8 clarifications added).**
The user opened with: search unsaved phone numbers, full-text search across external messages, broad-but-not-global staff access for client-facing lines, automated rule/template SMS without AI approval, deletion semantics for sent vs unsent vs queued messages, reactions/emoji as channel-capability-gated, media + annotation as first-class artifacts, unknown-contact media disposition. Added to e0: searchable unlinked contact history, full-text/phrase search with endpoint/queue/capability filters, broad-but-not-global access with endpoint-policy-driven scope, deterministic rule/template outbound without AI confirmation, immutable sent/received message history with archive/spam/restrict/entered-in-error, rail-capability-gated reactions/rich-text/read-receipts, first-class media artifacts (photo/video/PDF/annotated-image), unknown-contact media stored on external conversation until disposition.

**R2 — Three final checks.**
Search audit on restricted/projected conversations (capability/endpoint/sensitivity filtered; access auditable; compliance/break-glass reason-coded). Deterministic outbound with full discipline (rate-limit + quiet-hours + idempotency + STOP/HELP suppression + endpoint intent class). Unknown-contact media stays external until disposition (does NOT become chart / patient-visible portal / clinical source-of-truth automatically).

**R3 — Manual account creation + voicemail + multi-brand + Hims-vs-medspa.**
User asked: what if staff manually creates an account in scheduling — phone gets uploaded into the phone system, correct? How is that linked/updated/searched/deduplicated? How is voicemail attached? Who controls phone settings? Hims-style nationally vs medspa-style locally — how do we admit both? Multi-brand (Cultured vs Evo) front-desk handling — shared backend or separate? Five major sections added to e0: §13 Contact identity lifecycle + manual-creation sync; §14 Phone-system parity layer (voicemail + phone settings + endpoint configuration); §15 Settings taxonomy + precedence; §16 Multi-brand / multi-entity / operating modes; §17 Conversation display identity + status chips.

**R4 — Voicemail transcription + missed-call states + multiple lines per location + outbound endpoint selection + undelivered messages + drafts + traceability.**
User pressed on phone-system parity: voicemail transcription routing + AI rule "we'll get back to you ASAP" auto-reply (deterministic, not AI), missed-call/voicemail state machine (unread / listened / claimed / callback / completed / escalated), 4-5 lines per location (front desk / provider on-call / manager), outbound endpoint selection ("which number to send from"), default number + labeling + Twilio interaction, undelivered message handling (Twilio status callbacks), draft semantics (personal vs shared-queue vs AI-proposal; 3 ops users with concurrent drafts), outbound traceability (staff author vs display sender vs business name patient sees). Added: voicemail flow with audio + transcript + queue state + optional patient projection; missed-call state machine; multiple endpoints per location/brand with labels/business hours/voicemail/forwarding/access scope/provider_id; outbound endpoint selection policy with explicit UI ("Replying as X / Sending from Y"); delivery state handling (queued/sent/delivered/failed/undelivered/blocked/opted_out/carrier_filtered); draft semantics + stale-warning + author/sender split; outbound traceability columns.

**R5 — RingCentral settings review + four-layer settings taxonomy + six-level precedence.**
User reviewed RingCentral app settings (new message badge, mark unread bold, mute, link previews, external guest flags, keyboard shortcuts, call queues, forwarding, work hours, after hours, custom rules, incoming caller ID, blocked numbers, trusted numbers, blocked call messages, robocall blocking, no-caller-ID blocking, call waiting, hold music, ringtones, text tones, silence incoming, default caller ID, regions, extension settings, call quality, voicemail greeting/pin/shared/to-text, SMS opted-out, after-hours auto-reply). Doctrine response: don't clone every toggle; bind the substrate taxonomy that can grow into them. **Four settings layers** (endpoint / queue / user / device) + **rail capability matrix** + **six-level precedence** (law/compliance/consent > safety/clinical > endpoint > queue > user > device). What's foundational vs what's mature-phone-app polish enumerated.

**R6 — Conversation display identity.**
User: every inbox row should compute a display identity — patient/client name if linked, contact name if unlinked-but-named, phone number if unknown, group name if group, endpoint label if needed (e.g., "Cultured Main Line"), initials/avatar/photo, blank/unknown as intentional fallback not missing data. Added §17 Conversation display identity + display context: display identity computed from linked patient_relationship + contact_identity + endpoint label + group/thread title + fallback handle.

**R7 — Status chips.**
User: indicate lead status — "Lead" / "Established" / "Booked" — derived from backend state so front desk knows who they're talking to. Doctrine response: lightweight status chips are computed projections over backend substrate, NEVER independent fields. Chip taxonomy added: Unknown / New Lead / Lead / Booked / Consult Scheduled / Established Patient / Active Program / Lapsed / VIP / Needs Follow-up / Payment Issue / Clinical Review / Do Not Contact / Opted Out. Each chip computed from substrate (contact_identities / patient_relationships / appointment state / care_programs / intake state / patient_consents / open action items / billing state / clinical/safety flags). The "no `chat_status = Lead` random field" rule made explicit.

**R8 — Foundational integration question + doctrine arc detection.**
User: "before we proceed to e1, are there any elements in our preflight that need to be incorporated into the doctrine or system map? This is foundational work. I do not want to have to explain back and forth on this 2 months from now when we drift. How would a 500M company do this?" Doctrine arc identified: 5 cross-cutting clauses + DL-10 handle-vs-person extension + DL-12 invariant 31 5-disposition extension + sibling #20 admission + architectural mode-agnosticism. Bundle pattern (mirror DL-12) approved over scattered amendments. Full integration now (not later) approved.

**R9 — Two cleanup edits before execution.**
ADR rejection wording: "Marketing + clinical on a single rail / phone number — REJECTED" too rigid; refined to "Marketing + clinical traffic on the same endpoint without intent classification, consent separation, routing policy, and audit — REJECTED" with real-clinic note. Adapter path language: "vendor code confined to `lib/<vendor>/`" too generic; refined to "external-line rail adapters under `lib/external-rails/<provider>/`; broader DL-13 pattern applies to other domains via their own adapter boundaries inside their respective sibling directories — NOT all under `lib/external-rails/`."

Then: execute + commit.

---

## Cross-arc impact map — which future work inherits DL-13

The five binding clauses + extensions apply across the project. Future work that consumes DL-13:

**External-line execution (e1, e2, e3 — direct inheritance)**

- **e1 Twilio adapter** — substrate-shaped (generic `provider_*`); adapter lives at `lib/external-rails/twilio/`; replaces the existing `lib/notifications/smsTwilio.ts` placeholder stub with structured adapter.
- **e1 substrate migration** — `org_communication_endpoints`, `external_conversations`, `external_conversation_messages`, `external_conversation_artifacts`, `external_message_delivery_events`, `external_conversation_drafts`, `contact_identities` (handle-vs-person normalization), `patient_projection_links` (5-disposition).
- **e1 ops triage inbox UI** — display identity + status chips computed projection; broad-but-not-global access; search-with-audit on restricted/projected.
- **e2 voicemail + multi-endpoint** — voicemail audio + transcript + state machine; multiple endpoints per location/brand; outbound endpoint selection with explicit UI ("Replying as / Sending from").
- **e3 multi-brand operating modes** — 4 brand modes × 3 backend modes configuration surface; per-brand external-line mode toggle.

**Future rail-bound domain integrations (pattern inheritance)**

- **Lab vendor adapters** (Quest, LabCorp, Olink, future) live at `labs_lifecycle/lib/lab-rails/<vendor>/`. Substrate carries generic `provider_*` columns; vendor adopts OMNI canonical lab_order ID.
- **Payment processor adapters** (Stripe, Adyen, future) live at `billing_subscription/lib/psp-adapters/<provider>/`. Substrate carries generic `provider_payment_intent_id`; vendor adopts OMNI canonical patient_id.
- **EHR-export adapters** (future) live at future `export_lifecycle/lib/ehr-export/<vendor>/`. Substrate carries generic `provider_*`; OMNI is canonical source.
- **Pharmacy adapters** (DoseSpot, Surescripts, future) live at `pharmacy_lifecycle/lib/pharmacy-rails/<vendor>/`. Substrate carries generic `provider_prescription_id`; vendor adopts OMNI canonical patient_id + Rx_id.
- **Future telephony adapters** (RingCentral, MessageBird, regional carriers) live at `lib/external-rails/<provider>/` alongside Twilio.

**Cross-cutting future work (settings + 8-gate + display projection inheritance)**

- **Deterministic outbound migration** from current implicit-rules-engine-v0 sends to 8-gate-protected sends. All §1Q rules + templates that drive automated patient-facing sends inherit the 8-gate (gates 1-4 + 8 already exist in some form; gates 5-7 — quiet-hours / idempotency / rate-limit — formalize the discipline).
- **STOP / HELP cascade implementation** — STOP detection at rail-adapter ingress; tuple-scoped (recipient, intent_class, endpoint) consent state on `patient_consents`; cross-channel / cross-intent STOP requires explicit reciprocal logic.
- **AI Response Assist build** — in-app PHI-safe context-aware drafting surface (per DL-12 invariant 39); on external-line specifically operates within DL-13 invariant 4 + §1N.9 (`staff_with_ai_assist` for human-approved or `system`/`automation` for deterministic-policy-approved; `ai_assisted` alone NOT admitted for external send).
- **Status chip materialization layer** — when projection-cache tables are introduced for performance (admissible per DL-8 IF justified), invalidation contract must be explicit + event-driven + tested. Cache is derived state, NEVER source of truth.
- **Multi-brand onboarding flow** — per-brand external-line mode toggle (high-touch / portal-first / support-only / disabled) + per-endpoint config (label / brand_id / practice_entity_id / location_id / intent_class / business hours / voicemail / forwarding / access scope / provider_id).
- **Endpoint admin surface** — capability-gated (org admin / brand admin / location admin / communications admin / compliance admin). Operational front-desk staff USE the inbox; they don't ALTER endpoint config.
- **Voicemail-to-text pipeline** — transcription artifact + §1P atomization + 5-disposition pattern on patient projection. No auto-chart-filing.
- **Settings precedence runtime** — six-level precedence implemented at notification routing layer; override list (on-call escalation, safety/adverse-event, CMO escalation, assigned-owner-active-state, compliance/admin recovery, unresolved-clinical-blocker) bypasses ordinary user mute.

---

## What did NOT land in this arc (deferred to future preflights)

- **e1 execution preflight** — the design is in e0 + DL-13 doctrine; e1 is the implementation preflight, deferred until e0 has settled and DL-13 has been pressure-tested by at least one downstream sibling activation.
- **Projection-cache schema** — DL-13 admits cache tables but defers schema/invalidation/staleness specification.
- **RailCapability descriptor schema** — DL-13 admits the concept; e1 design decision.
- **Intent-class-scoped `patient_consents` schema extension** — existing schema extends as needed in e1; not redesigned in this arc.
- **Endpoint admin UI / permissions schema** — §1D.4 names capability gating; e1 admin surface design deferred.
- **4-mode × 3-backend-mode brand-onboarding configuration schema** — DL-13 admits all 12 combinations; specific config schema deferred to brand-onboarding-flow preflight (e2 / e3).
- **Patient-proxy / caregiver / parent-on-behalf-of-minor actor type** — named in DL-12 closing handoff as future preflight; primitive #1 actor_type taxonomy admits extension when DL-10 relationship layer formalizes proxy relationships.
- **Patient-to-patient peer support** — named in DL-12 closing handoff as future surface (NOT staff-to-patient scope).
- **Voice notes (patient-facing voice messages distinct from voicemail)** — named in DL-12 closing handoff.
- **AI translation** — named in DL-12 closing handoff.
- **Records export** — future preflight; pattern inheritance via DL-13 vendor-confined-adapter discipline.
- **Video sessions** — named in DL-12 closing handoff.
- **Emergency bypass** — named in DL-12 closing handoff.

---

## Doctrine arc summary — 5 arcs in 2.5 days

- **DL-10** (May 11 morning) — Consumer identity vs operational patient-relationship scoping.
- **c2 + DL-10 reconciliation** (May 11 afternoon) — Patient-facing chat substrate aligned with DL-10 relationship-scoping.
- **DL-11** (May 11 late evening) — Three messaging surfaces (patient-facing + internal_collaboration + external-line preflight named).
- **DL-12** (May 11/12 overnight) — Thread + participant lifecycle as cross-substrate discipline + fax canonical placement + 28 foundational clarifications.
- **DL-13** (May 12 mid-day) — External-line first-touch + rail-agnostic substrate spine + 5 binding clauses across R1-R9 pressure-test arc.

The cycle is the discipline. Future architecture changes of similar weight will run the same cycle. No nuance gets stashed in random preservation docs.

---

## What's next

**Recommended sequence** (no commitments — operational priority decision):

1. **e0 preflight reconciliation** — minor touch-up adding DL-13 inheritance to the e0 preflight's doctrinal alignment table + cross-references section (committed alongside this handoff).
2. **e1 execution preflight** — when ready, write the e1 preflight (Twilio adapter; substrate migration; ops triage inbox UI minimum) under the doctrine constraints DL-13 binds. Pressure-test e1 the same way e0 was pressure-tested.
3. **Or: pause external-line; pivot to another sibling activation** — if e0's depth-of-doctrine has surfaced enough work that other siblings need attention first (e.g., lab vendor activation, payment processor migration, multi-brand onboarding), pivot is allowed. DL-13 doctrine is durable; e1 can wait.
4. **Optional**: pressure-test DL-13 with a second-rail thought experiment (what does a `lib/external-rails/ringcentral/` adapter look like? What does `labs_lifecycle/lib/lab-rails/quest/` look like?) to validate the rail-agnostic + adapter-confined pattern before e1 commits to Twilio.

---

## Closing note

The user's "$500M company" framing was the right framing. The temptation in a small-team pre-revenue build is to land doctrine via scattered amendments — a clause here, a footnote there, a "we'll get to this when we need to" deferred until the third week of an integration project. That works for two months. Then drift sets in. Two months from now, someone will need to integrate a second telephony rail or a new lab vendor or a payment processor, and the question "where does this fit?" will return — with no clear answer because the pattern was never bound.

DL-13 binds the pattern. The next vendor integration inherits the playbook: generic `provider_*` columns on substrate; vendor code confined behind an adapter boundary inside the relevant sibling directory; OMNI publishes / vendor adopts; settings layered by precedence; automated outbound passes deterministic gates; UI derives state from substrate. The cost of doing this now is one doctrine landing. The cost of NOT doing this now is paid by every future integration. That's what doctrine landing is for — making the future cheap.

---

*Arc closed 2026-05-12. Read alongside e0 preflight, DL-13 lock in MAIN, foundational doc §7.13.13, ADR §7.16, topology §11/§12 DL-13 cross-references, radar zones 69-78, evolution narrative Act XIV.*

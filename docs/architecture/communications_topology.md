# Communications topology

**Status:** companion synthesis, not binding doctrine. Bound by **Doctrine lock DL-5** (Day 0 elite-class depth for activated domains) and **ADR §7.10** (Klara/RingCentral-class communications named as a Day 0 depth bar). Read this first when working on any communications-shaped commit so the patient-facing surfaces, outbound rails, inbound rails, and live encounter modalities stay in one mental model.

This document does not invent architecture. It situates pieces that already exist across MAIN §1F + §1G + §1G.8 + §1G.9 + §1G.11 + §1P + §1Q.23, the in-app inbox c1 substrate, the live messaging substrate landed 2026-04-30, and the rules-engine outbound rail (`outbound_jobs` + dispatcher branches). Where a piece is reserved but not built, the doc says so. **§11 names the largest architectural gap (external-line / pre-account communications) so it does not become invisible behind the well-trodden portal-chat work.**

---

## §1 The bar (DL-5 binding)

When the communications domain activates for a workflow, the substrate must admit it at **Klara/RingCentral-class depth on Day 0**. DL-5 names this explicitly; ADR §7.10 records the decision; radar zone 31 watches for "Day 0 not yet" drift.

Concretely, Klara/RingCentral-class for this platform means all of the following are present in the activated experience, not deferred:

- Rich threaded chat per care_program with multi-participant authoring (patient + care team + ops)
- System notifications inbox (governance-tracked one-way deliveries) visible to the patient
- Action items surface ("what needs my attention") across programs
- Cross-channel transcript visibility (SMS, email, call, vendor narrative all land in the right thread or surface)
- Click-to-call and click-to-video from inside a chat thread
- Per-recipient read state on chat (not a single per-thread `read_at`)
- `clinical_required` turn UX visible to the patient (when a clinical reply is required to advance, the surface communicates that and surfaces the corresponding pending action item)

"Lighter weight than Klara" is rejected as a wedge framing by DL-5. "We will do real depth later" is the radar-zone-31 anti-pattern. Activation is incremental across domains (DL-5 is clear that not every domain activates Day 0), but once communications activates for a workflow, the depth bar is binding.

---

## §2 Three patient-facing surfaces (distinct, complementary)

The patient sees three communications surfaces that look adjacent but model fundamentally different shapes. Each has its own table, its own substrate maturity, and its own UI maturity.

| Surface | Table(s) | Purpose | Patient sees | Substrate built? | UI built? |
|---|---|---|---|---|---|
| **Rich chat** | [`messages`](../../supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql) + `message_threads` + `message_thread_participants` | Hims-style bidirectional chat per `care_program`; multi-participant | Threaded conversation with care team | YES (2026-04-30 migration) | SHELL ONLY — page renders a static welcome card; real message rendering NOT built |
| **System notifications inbox** | `patient_inbox_messages` | One-way governance-tracked system→patient deliveries with rule + template lineage | Persistent inbox of system-fired notifications (account, operational, clinical, billing, safety) | YES (in-app-inbox c1) | NO — substrate only; no `/inbox` route exists |
| **Action items** | `patient_action_items` | Cross-program "what needs my attention" Action Center; 13+ enumerated action item types | Prioritized task list across programs | **NO — table not built** (confirmed by [`lib/intake/documents/route-patient-document.ts:38`](../../lib/intake/documents/route-patient-document.ts) comment + zero migrations) | UI exists at `/action-items` but reads from a derived dashboard model, NOT from a `patient_action_items` substrate. Substrate is fully reserved in §1G.11 doctrine; build is c4. |

### §2.1 Rich chat (`messages` + `message_threads` + `message_thread_participants`)

Two-way chat per `care_program`, modeled after the Hims/Ro patient↔provider chat surface. The 2026-04-30 messaging substrate carries `from_patient`, `author_staff_id`, `message_thread_id`, and `metadata`. Threading is per care program; multi-participant support rides `message_thread_participants`. This is the canonical surface for clinical questions, refill requests, lab discussion, and program-level conversation between patient and care team.

UI status: the shell exists at [`app/dashboard/[patientId]/messages/page.tsx`](../../app/dashboard/[patientId]/messages/page.tsx) (lists threadable programs) and [`app/dashboard/[patientId]/messages/[threadId]/page.tsx`](../../app/dashboard/[patientId]/messages/[threadId]/page.tsx) (renders a single static "Care Assistant welcome" card + a composer). **Real message rendering from the `messages` table is not built.** The thread page is structurally hollow. c2 of Phase 4H-communications closes this gap.

Binding section in MAIN: §1G (messaging substrate), §1G.3 (chat-as-care-program-thread), §1G.6 (clinical_required turn model), §1G.7 (read state model).

### §2.2 System notifications inbox (`patient_inbox_messages`)

One-way governance-tracked deliveries. Every row carries `outbound_job_id` (idempotency anchor + governance lineage), `rule_id` / `rule_version` / `template_key` / `template_version`, `intended_privacy_exposure_level`, `message_intent` (10-value enum), and a flexible `metadata` jsonb for CTA references, deep links, structured attachments. Writes only via the `record_inbox_message` SECURITY DEFINER orchestrator; no patient or staff inserts allowed at the table level.

This surface is **distinct from `messages`**: forcing system-fired governance-tracked notifications into the two-way chat transcript either pollutes the chat with rule-fired output or strips governance lineage from notifications. The in-app inbox c1 preflight enumerates the rationale; see [`PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md`](../../.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md).

UI status: no `/inbox` route exists yet. c3 of Phase 4H-communications builds it. Until production rules write `send_in_app`, inbox rows can remain substrate-only; before enabling any production `send_in_app` rule, c3 must ship or the rule must stay disabled. (Verified 2026-05-11: zero `'in_app'` channel opt-ins exist in `repo/rules/`.)

### §2.3 Action items (`patient_action_items`)

Cross-program "what needs my attention" Action Center. §1G.11 enumerates 13 action item types (refill_due, lab_review_pending, clinical_required_response, pending_patient_input, payment_failed, identity_verification, intake_resume, appointment_confirm, etc.). Action items are derived from substrate state (program status, lab review queue, billing state, intake state) and surfaced as a flat prioritized list to the patient. Satisfy-on-write-path is the discipline: action item lifecycle hooks fire on the same write path that resolves the underlying state, never on a deferred cron.

UI status: [`app/dashboard/[patientId]/action-items/page.tsx`](../../app/dashboard/[patientId]/action-items/page.tsx) exists and delegates to `ActionItemsTabBody`. The component reads from a derived dashboard model (cached `getCachedPatientAccountDashboardModel` output), NOT from a `patient_action_items` substrate table. **Substrate-reality confirmed 2026-05-11:** `patient_action_items` is not yet built; explicit confirmation at [`lib/intake/documents/route-patient-document.ts:38`](../../lib/intake/documents/route-patient-document.ts) comment. **c4 of Phase 4H-communications is the substrate build** (re-scoped from "audit depth" to "build the table + lifecycle + `recordPatientActionItem` / `resolvePatientActionItem` APIs + emitter wiring across §1G.11.4's authorized emitters + UI rewire from derived-dashboard-read to substrate-read").

Binding section in MAIN: §1G.11 (action items primitive), §1G.11.2 (action item lifecycle hooks), and the reserved `provider_tasking/` sibling folder for the provider-side equivalent.

---

## §3 Six outbound channels (one rail)

Outbound is a **single orchestrator rail** ([`outbound_jobs`](../../supabase/migrations/20260509120000_phase_4e_outbound_jobs_reconciliation.sql) + the dispatcher at [`lib/outbound/dispatch.ts`](../../lib/outbound/dispatch.ts)). The same Rule + Template can fan out to multiple channels; per-channel dispatch is a branch in the dispatcher.

| Channel | Substrate path | Endpoint | Status |
|---|---|---|---|
| `send_email` | `outbound_jobs` + Resend provider | External email inbox | **LANDED** |
| `send_sms` | `outbound_jobs` + Twilio provider | External SMS | **LANDED** |
| `send_in_app` | `outbound_jobs` + `record_inbox_message` SECURITY DEFINER | `patient_inbox_messages` | **LANDED** (substrate; UI deferred to c3) |
| `send_voice` | `outbound_jobs` + telephony adapter | External phone + `voice_call` row | **RESERVED** |
| `send_fax` | `outbound_jobs` + fax adapter | External fax | **RESERVED** |
| `send_push` | `outbound_jobs` + Web Push / APNs | Mobile / browser push | **RESERVED** |

Key principle: the substrate primitive is "fire one outbound rail job per recipient × channel" — never "render once and fan out across providers." The rules engine + disclosure-policy gate decide channel selection per delivery; the dispatcher selects the right provider branch per `kind`. Dual-fan-out (e.g., tier_3 in_app + tier_1 vague companion SMS) is a future capability of the disclosure-policy gate; the substrate already admits it.

**Idempotency:** each `outbound_jobs` row is the idempotency unit. `send_in_app` writes carry a UNIQUE `outbound_job_id` on `patient_inbox_messages` so retry never duplicates. External providers (Resend, Twilio) carry their own provider-side idempotency keys via `outbound_job_dispatches.provider_message_id`.

---

## §4 Five inbound channels (Section 1P pipeline)

Inbound to the platform routes through the **§1P AI atomization pipeline** for unstructured content and through deterministic handlers for structured content. §1P invariant 8 is binding: structured payloads bypass AI; vendor operational facts ride deterministic handlers.

| Channel | Substrate table | Substrate status | AI atomization | Routing |
|---|---|---|---|---|
| Patient chat (`messages.from_patient: true`) | `messages` | **BUILT** (2026-04-30 migration) | OPTIONAL (clinical_required classification per §1G.3) | Per care_program thread |
| SMS inbound (from known patient phone) | `messages` (via SMS↔thread adapter) | **NOT BUILT** — adapter does not exist; substrate forecloses unknown senders (`messages.patient_id NOT NULL`) | YES (intent classification + thread routing) | §1P would route to care_program thread when AI infers; otherwise triage |
| Email inbound | `inbound_emails` | **RESERVED in MAIN §1P (line 6810); NOT BUILT** — no migration creates this table | YES (extract operational facts + route) | Reserved: atomize into thread updates, vendor narrative rows, or human triage |
| Call transcript | `inbound_call_transcripts` | **RESERVED in MAIN §1P (line 6811); NOT BUILT** — no migration creates this table | YES (turn-level atomization) | Reserved: `voice_call` row + chat thread surface card |
| Vendor / partner narrative | `vendor_email`, `pharmacy_partner_message`, `inbound_narrative_reviews`, etc. | **MOSTLY RESERVED**; some partner-specific shapes exist | YES per §1P.7 | Deterministic handlers for structured payloads; AI atomization for narrative |

The §1P pipeline (when built) emits structured atoms (turn rows, attachments, action item proposals, vendor operational facts) that land in the right downstream substrate. Section 1P.7 binds the vendor / partner narrative atomization shape so vendor-shaped traffic does not pollute the patient chat transcript.

**Build status:** only patient chat is actually built substrate-side. SMS inbound + email inbound + call transcript + vendor narrative paths are reserved in MAIN §1P with no migrations yet. **All inbound rails assume known patient identity at write time.** The pre-account / unknown-sender shape is a separate architectural gap covered in §11.

---

## §5 Live encounter modalities (§1F)

`appointment.modality` carries the controlled vocabulary defined in §1F:

- `in_person` — carries `location_id` + rendering provider
- `phone` — carries telephony metadata (provider, join number, dial-out direction)
- `video` — carries video join URL bound to provider workspace
- `async` — no live session; represents structured check-ins / async chat episodes

**`voice_call` rows** track ad-hoc telephony **separate from scheduled appointments**. A scheduled phone visit lives in `appointment` (modality=phone); a click-to-call from inside a thread lives in `voice_call` linked to `message_thread_id`. Both can exist for the same patient on the same day without collision.

**Video integration:** rides `appointment.modality=video` + provider workspace. **No separate `video_session` table is reserved.** When video activates, the join URL + telephony-equivalent metadata ride the `appointment` row's metadata; ad-hoc click-to-join-video binds to the upcoming `appointment` of `modality=video`.

**`interaction_context` propagation (§1Q.23):** every downstream row (message turn, action item, audit event, charge lineage) carries `metadata.interaction_context` capturing `modality` + `location_id` + `appointment_id` + `staff_user_id` + `assisted` (whether a staff member assisted the patient for that interaction). This is how the substrate preserves "what kind of encounter produced this row" across siblings without coupling the row's primary key to any single sibling.

Binding section in MAIN: §1F (scheduling + modalities), §1Q.23 (interaction context).

---

## §6 Integration points (cross-surface UX)

The three patient-facing surfaces (§2) + six outbound channels (§3) + five inbound channels (§4) + live encounter modalities (§5) compose into the patient-visible Klara-class experience through these binding integration points:

- **System notification → action item.** An inbox notification carries `metadata.action_item_ref` pointing to the `patient_action_items` row it created. Clicking the notification deep-links to the action item; satisfying the action item flips the notification's `read_at`.
- **Action item → chat thread.** Action items of type `provider_message` (and equivalents) deep-link to `/messages/[threadId]`. Satisfaction fires on the patient's reply turn in the thread.
- **Chat thread → voice call.** Click-to-call from inside a thread writes a `voice_call` row linked to `message_thread_id`. The call appears as an in-thread card. Bidirectional: inbound calls that resolve to a known patient + care_program surface as in-thread cards on the same thread.
- **Chat thread → live video.** Click-to-join-video binds to the upcoming `appointment` of `modality=video` for that patient + care_program. If no upcoming video appointment exists, the click triggers an ad-hoc scheduling flow rather than an orphan join.
- **Inbound SMS / email → chat thread.** §1P routes inbound SMS and email atoms to the right `care_program` thread when AI infers the binding; otherwise to a triage queue for staff to route. Routing is per-tenant configurable (§1P.7).
- **Cross-channel transcript.** The chat thread surfaces `voice_call` rows + inbound atomized rows (email, SMS, vendor narrative) as in-thread cards. The patient sees one chronological transcript across channels; the substrate stores each channel in its own table.
- **`clinical_required` turn UX.** When a thread turn carries `clinical_required: true` + `awaiting_response: true` (per §1G.6), the surface communicates the blocking state to the patient and the corresponding `pending_patient_input` action item appears in the Action Center.
- **Read / unread state.** Per-message-per-recipient on chat (**NOT YET BUILT** — c2 introduces); per-row on inbox notifications via `read_at` (BUILT); per-item on action items via lifecycle state (BUILT).

These integration points are the Klara-class depth bar's operational projection. Each one is what a patient actually experiences when the system works; each one is what is missing when the system feels disjointed.

---

## §7 Patient UX synthesis

Patient enters at `/dashboard/[patientId]/`. Existing routes:

- `/home`
- `/messages` (lists threadable programs)
- `/messages/[threadId]` (HOLLOW — static welcome card + composer)
- `/labs`
- `/profile`
- `/action-items`
- `/orders/...`
- `/programs/...`
- `/appointments`
- `/upload`
- `/support`

Proposed new route (post-c3):

- `/inbox` — system notifications surface for `patient_inbox_messages`

### What c2-c7+ builds

| Commit | Scope | Surface |
|---|---|---|
| **c2** | Real chat rendering inside `/messages/[threadId]`; per-recipient read state schema; per-thread unread count; classification chips; turn-model UX (clinical_required / awaiting_response); patient compose flow | Rich chat |
| **c3** | New `/inbox` route for `patient_inbox_messages` with read / archive toggle + per-intent filtering | System notifications inbox |
| **c4** | **Build `patient_action_items` substrate** — table + lifecycle + `recordPatientActionItem` / `resolvePatientActionItem` SECURITY DEFINER orchestrators + emitter wiring across §1G.11.4's authorized emitter set + rewire `/action-items` UI from derived-dashboard-read to substrate-read. (Re-scoped 2026-05-11 from "audit depth" after substrate-reality audit confirmed the table is not yet built.) | Action items |
| **c5** | Voice-call-from-thread integration: click-to-call writes `voice_call` row linked to `message_thread_id`; in-thread call cards | Outbound voice |
| **c6** | Inbound SMS / email routing per §1P; verify thread routing accuracy + triage queue handoff | Inbound rails |
| **c7+** | Video integration (click-to-join-video bound to `appointment.modality=video`); cross-channel transcript composition; tier_3 / tier_1 dual-fan-out via disclosure-policy gate | Live encounter + dual-fan-out |

---

## §8 Provider UX synthesis

§1G.8 specifies the provider-side equivalent: **My Queue**, **My Status**, **patient context drawer**, **clinical messages inbox**, **lab review drawer**, **ops/staff messaging**, plus the reserved `provider_tasking/` sibling for cross-program task ownership.

**DL-5 symmetric:** the patient-side depth bar (Klara/RingCentral-class) implies an equivalent provider-side depth bar. A patient-side chat that the provider cannot answer at parity is not Klara-class; a patient-side action item that the provider cannot see / claim / resolve is not Klara-class.

**Sequencing:** c2 is patient-side first. The provider mirror is a parallel track; it can run alongside or follow c2-c7+ but must catch up before the activated communications domain is considered Day-0-class per DL-5. Radar zone 31 watches for "patient-side shipped but provider-side deferred" drift.

Binding section in MAIN: §1G.8 (provider workspace), §1G.9 (clinical messages inbox / lab review drawer), §1G.11.2 (provider-side action items / tasking).

---

## §9 Build status

| Surface / channel | Substrate built? | UI built? | Depth gap | Next commit |
|---|---|---|---|---|
| Rich chat (`messages` + threads + participants) | **YES** but tables EMPTY (no inserts anywhere; c2 is first writer) | SHELL ONLY | Real rendering, per-recipient read state, classification chips, turn-model UX, **thread + participant backfill** | **c2** |
| Inbox notifications (`patient_inbox_messages`) | YES (c1) | NO | `/inbox` route does not exist | **c3** |
| Action items (`patient_action_items`) | **NO — table not built** (despite §1G.11 doctrine) | UI exists but reads derived dashboard model, not substrate | Substrate doesn't exist | **c4** (re-scoped to substrate build, not audit) |
| `send_email` outbound | YES | N/A | None | — |
| `send_sms` outbound | YES (Twilio) | N/A | None | — |
| `send_in_app` outbound | YES | N/A (UI via c3) | None substrate-side | — |
| `send_voice` outbound | NO (reserved) | NO | Substrate + telephony adapter | **c5** |
| `send_fax` outbound | NO (reserved) | NO | Substrate + fax adapter | future |
| `send_push` outbound | NO (reserved) | NO | Substrate + Web Push / APNs adapter | future |
| Inbound SMS → thread | substrate partial | N/A | §1P routing verification | **c6** |
| Inbound email → thread / vendor narrative | substrate partial | N/A | §1P routing verification | **c6** |
| Inbound call transcript | substrate partial | N/A | `voice_call` + transcript surface | **c5 / c6** |
| Live video (`appointment.modality=video`) | substrate exists | NO | Join flow + provider workspace binding | **c7+** |
| Provider mirror (My Queue / clinical inbox / lab drawer) | partial | partial | DL-5 symmetric depth | parallel track |

---

## §10 Cross-links

**MAIN system map** ([`.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md)):
- §1F (scheduling + modalities)
- §1G (messaging substrate)
- §1G.3 (chat-as-care-program-thread)
- §1G.6 (clinical_required turn model)
- §1G.7 (read state model)
- §1G.8 (provider workspace)
- §1G.9 (clinical messages inbox / lab review drawer)
- §1G.11 (action items primitive — 13 enumerated types)
- §1L.15 (vendor / partner adapter contract)
- §1O (audit + lineage)
- §1P (inbound AI atomization pipeline)
- §1P.7 (vendor narrative atomization)
- §1Q.23 (interaction context propagation)
- §1S (rules engine + outbound rail)

**Doctrine locks** (MAIN, between Repo anchors and §1D):
- **DL-5** — Day 0 elite-class depth for activated domains (binding)
- **DL-6** — Substrate non-foreclosure across all dimensions
- **DL-9** — Owned diagnostic acquisition (relevant for inbound diagnostic narrative atomization)

**ADR** ([`docs/architecture/phase_4h_target_first_decision_record.md`](phase_4h_target_first_decision_record.md)):
- §7.10 — Day 0 elite-class depth (DL-5) + substrate non-foreclosure across all dimensions (DL-6)

**Radar** ([`docs/architecture/v1_pressure_test_radar.md`](v1_pressure_test_radar.md)):
- Zone 28 — care-task substrate fragmentation / metadata jsonb leakage
- Zone 31 — Day 0 elite-class depth-bar drift
- Zone 32 — owned-vs-external diagnostic conflation (inbound diagnostic narrative path)

**Evolution narrative** ([`docs/architecture/evolution_narrative.md`](evolution_narrative.md)):
- Act X (doctrine reconciliation arc — closes mode-shift to continuity-proving)

**Tables (existing substrate):**
- `messages`, `message_threads`, `message_thread_participants`
- `patient_inbox_messages`
- `patient_action_items`
- `voice_call`
- `outbound_jobs`, `outbound_job_dispatches`
- `inbound_emails`
- `inbound_call_transcripts`
- `inbound_narrative_reviews`
- `appointment`

**Routes (existing):**
- [`app/dashboard/[patientId]/messages/page.tsx`](../../app/dashboard/[patientId]/messages/page.tsx)
- [`app/dashboard/[patientId]/messages/[threadId]/page.tsx`](../../app/dashboard/[patientId]/messages/[threadId]/page.tsx) (hollow)
- [`app/dashboard/[patientId]/action-items/page.tsx`](../../app/dashboard/[patientId]/action-items/page.tsx)
- `app/dashboard/[patientId]/appointments/...`

**Preflights (prior-art):**
- [`.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md`](../../.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md) — establishes the `patient_inbox_messages` vs `messages` distinction

**Handoff (closing the doctrine arc):**
- [`.cursor/plans/HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md`](../../.cursor/plans/HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md)

---

## §11 External communications — pre-account / contact identity (NOT YET MODELED)

§2-§10 describe the **authenticated patient chat** surface — the Hims-class substrate where every row carries a known `patient_id`. That covers the in-portal experience faithfully, but it does NOT cover OMNI's actual first-touch shape.

**The reality OMNI operates in:** medspa / in-office clinic first-touch is overwhelmingly **external and pre-account**:

- New person texts OMNI's main number: "Hi, interested in weight loss"
- Existing client texts main line about a "running 10 minutes late" appointment update
- Post-procedure concern via SMS before the patient logs into the portal
- Inbound call to main number with voicemail / transcript
- Walk-in or front-desk-initiated conversation
- Lead form fill that should become a contact-with-conversation, not yet a patient
- Unknown number that may or may not collide with an existing patient phone

None of these have a known `patient_id` at the moment the event arrives. **Today's substrate forecloses all of them** — `messages.patient_id NOT NULL`, `message_threads.patient_id NOT NULL`, `message_threads.care_program_id NOT NULL UNIQUE`. The portal-chat substrate is the wrong shape for first-touch external communications.

**The conceptual model (NOT YET MODELED as substrate; sketch only).** External communications decompose into four conceptual layers; OMNI's substrate is missing three of them today:

| Layer | Conceptual role | Existing substrate | Status |
|---|---|---|---|
| **Rail event** | Raw inbound/outbound communication event from a provider rail (Twilio SMS webhook, Twilio call webhook, inbound email, fax) | Outbound only: `outbound_jobs` + `outbound_job_dispatches`. No inbound rail-event table. | **Gap** — inbound webhook ingest not built |
| **Contact identity** | Durable identity claim for a phone number / email / external handle, with optional patient/lead match and provenance (matched-by, matched-at, confidence, method) | None | **Gap** — no `contact_identities` table exists |
| **Conversation queue (external-line inbox)** | Operational triage surface where unmatched / ambiguously-matched events accumulate; staff link, reply, convert, or dismiss | None | **Gap** — no ops triage inbox exists |
| **Patient projection** | Once a conversation links to a patient, surface the prior history in the patient timeline with provenance ("originally inbound from +1..., linked to patient X by staff Y on Z") | `patient_timeline_events` partial | **Partial** — timeline can carry the projection once the upstream layers exist |

**Why this matters operationally.** Building Twilio main-line ingress without these layers ends one of two ways: (a) every unknown texter creates a fake patient row (data pollution at scale; identity reconciliation nightmare), or (b) inbound events get dropped because they don't fit `messages.patient_id NOT NULL`. Neither is acceptable. The four-layer model is the only architecture that admits "person texts main line → staff triages → conversation later links to a patient account" without losing data or fabricating identities.

**Why this matters strategically.** OMNI is positioning against Klara/RingCentral for clinic communications. Klara's defining feature is exactly this surface — the external-line inbox where staff triage main-line SMS / call / fax with patient-link workflows. Without it, OMNI's communications offering is a Hims-equivalent portal chat, not a Klara-equivalent clinic comms platform. The portal chat substrate (built) and the external-line substrate (not built) compose into Klara-class; neither alone is enough.

**What is reserved in MAIN §1P:** `inbound_emails`, `inbound_call_transcripts`, `vendor_email`, `pharmacy_partner_message`, `inbound_narrative_reviews`. These name some of the rail-event-layer shapes but none are migrated, and none yet model the contact-identity layer separately from patient identity.

**Architectural preference (binding guidance for the future external-line preflight).** When that preflight is written, **prefer the dual-substrate four-layer model** (separate `communication_events` + `contact_identities` + ops triage substrate, distinct from the authenticated `messages` substrate). **Treat "make `messages.patient_id` nullable" as the default-losing option** unless a pressure test in that preflight proves the single-substrate path is cleaner. Rationale:

- Authenticated patient chat and unknown-number external traffic have **different authority** (patient-scoped vs ops-scoped), **different privacy** (PHI from a known patient vs an unknown texter possibly not even a patient), **different routing** (clinical_required + care-program-bound vs triage-to-staff), **different retention** (clinical vs marketing/spam), and **different UX rules** (patient portal vs ops triage queue).
- Collapsing them into one nullable-patient_id table creates a junk-drawer: lead texts, spam, wrong numbers, billing questions, appointment reschedules, post-procedure concerns, clinical patient messages, and authenticated portal messages all flowing through the same row shape with metadata-jsonb discriminants. Radar zone 28's exact anti-pattern.
- Keeping them separate lets each substrate enforce its own RLS, its own action-item shape, its own audit lineage, and its own retention rules — and lets the patient projection layer cleanly link cross-substrate without pretending an SMS from an unknown number originated as authenticated portal chat.
- The four layers cited above are the model. Pressure-test against it before reaching for nullable `patient_id`.

**What c2-c7+ does NOT cover.** c2-c7+ build out the **authenticated portal chat side** of the topology (rich chat rendering, inbox UI, action items audit, voice/video integration FROM the portal, inbound routing INTO existing patient threads). They do not build the external-line architecture. **A separate sub-phase** is required for the four-layer model above.

**Named future preflight:** `PREFLIGHT_<future>_phase_4h_communications_external_line_inbox.md`. Scope sketch (NOT YET SPECIFIED in detail; this is a placeholder):

- Twilio webhook ingest (SMS receive, call receive, status callbacks)
- `contact_identities` primitive (phone / email / external-handle with provenance + match state)
- `communication_events` primitive (rail-event SoT; append-only; immutable)
- Ops triage inbox surface for unmatched events
- Link-to-patient workflow (link / merge / split / mark spam / convert-to-lead / convert-to-patient) with full provenance
- Phone-number identity-claim model on `patients` (phone as a multi-claim attribute; current single phone field insufficient for "patient X has two phones; one matched via Twilio in March, one via portal signup in May")
- Lead substrate (or use existing `patient` substrate with a `pre_account: true` flag — design decision deferred)
- Projection rules: once linked, prior conversation surfaces in patient timeline with full provenance ("originally inbound from +1..., linked to patient X by staff Y on Z")

This preflight does not exist yet. It is named here so future contributors know there is a separately-scoped architecture phase queued.

**Non-foreclosure invariant (binding on c2-c7+).** No commit in the portal-chat arc may introduce a constraint or pattern that forecloses the external-line architecture. Concretely: do not assume `patient_id NOT NULL` will hold across all comms tables; do not assume `care_program_id NOT NULL UNIQUE` on threads will hold; do not put external-event routing logic on `messages.metadata`; do not bind Twilio webhooks directly to `messages.INSERT` without the contact-identity layer. Radar zone 28 watches for fragmentation here.

---

## What §0-§11 explicitly does NOT do

- **No new doctrine.** This doc is a companion synthesis bound by DL-5 + ADR §7.10. New doctrine lands in MAIN doctrine locks first, foundational doc rationale second, ADR third.
- **No new primitives, siblings, or tables.** Every table named already exists in the substrate or is named as RESERVED in the foundational doc §11.0 crosswalk.
- **No schema changes.** Per-recipient read state schema, `/inbox` route shape, click-to-call binding, and inbound routing details land in c2-c7+ preflights with their own pressure tests.
- **No new sibling activation.** The `repo/rules/communications_lifecycle/` sibling folder activates when the first migration whose trigger is itself a communications event lands. This doc does not activate that folder.
- **Does not replace MAIN sections.** §1F, §1G, §1G.8, §1G.9, §1G.11, §1P, §1Q.23 remain canonical for the substrate they cover. This doc points at them; it does not subsume them.
- **Does not commit to a Day 0 ship date for any specific channel.** DL-5 binds depth when activated; activation order is operational and not codified here.

---

*End of synthesis. Read alongside the binding MAIN sections + DL-5 + ADR §7.10 before opening any communications-shaped commit. **The §11 external-line gap is the largest named architectural concern in this doc; do not let it become invisible because c2-c7+ are noisier.***

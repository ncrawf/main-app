# Communications topology

**Status:** companion synthesis, not binding doctrine. Bound by **Doctrine lock DL-5** (Day 0 elite-class depth for activated domains), **DL-13** (rail-agnostic substrate spine), **DL-14** (OMNI CNS center of gravity — event-driven care coordination; rails and surfaces are outputs), **DL-16** (universal CNS event envelope + taxonomy evolution; every messaging-domain event inherits the envelope, partition, registry, and 36 other invariants), and **ADR §7.10** + **§7.16** + **§7.17** + **§7.19**. Read this first when working on any communications-shaped commit so the patient-facing surfaces, outbound rails, inbound rails, and live encounter modalities stay in one mental model.

This document does not invent architecture. It situates pieces that already exist across MAIN §1F + §1G + §1G.8 + §1G.9 + §1G.11 + §1P + §1Q.23, the in-app inbox c1 substrate, the live messaging substrate landed 2026-04-30, and the rules-engine outbound rail (`outbound_jobs` + dispatcher branches). Where a piece is reserved but not built, the doc says so. **§11 names the largest architectural gap (external-line / pre-account communications) so it does not become invisible behind the well-trodden portal-chat work.**

> **Phase B.5 cross-reference (2026-05-16):** Mindbody reality ingestion produced Layer 2 at [`.cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md`](../../.cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md). Layer 2 Section B (event vocabulary) enumerates Mindbody's concrete 21-event client alert vocabulary + 30+ outbound communication triggers, validating DL-14 + DL-16 substrate. Section J (cross-domain implications) maps Mindbody's payment processor / marketing engine / 3rd-party integration (ClassPass) actors as substrate sale records — relevant to rail dispatcher policy inheritance. **Q1 encounter container architecture SHELVED** per [mindbody_open_questions_raw.md](../../.cursor/plans/ingestion/competitor_product_evidence/mindbody/mindbody_open_questions_raw.md).

---

## §1.0 Rails are outputs of the OMNI CNS (DL-14 binding)

**All communication rails described in this document are outputs of the OMNI CNS.** Per **DL-14** (canonical anchor at the top of [`.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) + foundational anchor §0 + ADR §7.17), OMNI is the **event-driven care coordination brain** that reads a unified event graph and decides actions across multiple actor targets (patient, provider, front desk, care coordinator, manager, compliance/admin, AI planner, queue/team, external vendor/system). This document specifies **HOW rails deliver actions**; the brain decides **WHICH actions to emit, to WHICH actor target, on WHICH channel**.

**Rails do not orchestrate; they project.** Rail-side fail-open / gate logic / suppression / throttle inherit policy from the upstream CNS decision (`intent_class` + `policy_class` + `actor_target` carried on the action substrate, primitive #10 = `orchestration_actions`). Rail dispatchers (Twilio adapter, future RingCentral adapter, email rail, in-app rail, voice rail, push rail) must not invent orchestration logic locally; per radar zones 85 + 87 + 93 such invention is a DL-14 violation.

**Inbound rails are inputs to AI interpretation (Phase A.2 update).** Per DL-14 invariant 14 + `§1N.12` + `§1N.18`, inbound events from rails flow through the 9-layer CNS vertical stack: **L1 raw input rails → L2 atomization / typed events (per `§1P`) → L3 AI interpretation envelopes (safety/triage classifier first; operations + clinical + content as needed) → L4 context assembly → L5 deterministic CNS policy + AI policy resolution → L6 planner / orchestration → L7 `orchestration_actions` substrate → L8 rail / surface execution → L9 feedback loop returning to L4**. **Rails are inputs AND outputs of the CNS.** AI envelopes are CALLED BY the CNS as needed, not chained as a fixed pipeline. Feedback returns to CNS state + learning loop, NOT to a single envelope (no Ops mini-brain drift per radar zone 104).

**Primitive #10 conceptual rename to `orchestration_actions` is COMMITTED (Phase A.2; non-reopenable per DL-14 invariants 3 + 5 + 14 + 16).** The legacy `outbound_jobs` name is one-projection legacy artifact. `orchestration_actions` hosts ALL CNS action types as projections: patient outbound message / provider notification / staff task / ops alert / passive awareness marker / suppression-cancellation / AI plan request / lifecycle state update / no-op / booking hold / deposit link request. Phase 0 / Phase 1 audit only HOW the physical migration lands.

**Subsystem subordination + selective adequacy commits.** Action substrate (primitive #10) conceptual rename committed; physical migration approach is Phase 0/1. AI runtime (primitive #11) scope is bound by DL-14 invariants 7-22 (Phase A.2); adequacy of existing implementation against bound scope is Phase 0. Cross-link foundational §4.B primitive #10 COMMITTED RENAME + §4.B primitive #11 scope extension.

Cross-link: MAIN DL-14 (now 22 invariants) + foundational §0 + ADR §7.17 (35+ REJECTED alternatives) + radar zones 79-113 (35 total new zones).

**Phase B Commit 1 update (DL-16 binding — 2026-05-13 evening).** Every event flowing through the messaging-domain rails described in this document — inbound SMS / outbound SMS / email / RingCentral call event / voicemail / fax / portal chat message / in-app notification / push / live messaging substrate event / external-line first-touch event / internal-team event — inherits the **universal CNS event envelope** specified in MAIN `§1Z` + DL-16 invariant 2: `event_id` / `event_kind` / `domain` / `source` / `actor` / four time fields (`occurred_at` / `recorded_at` / `effective_at` / `valid_from` / `valid_to`) / `entity_refs` / `before_state` + `after_state` / `payload_version` / `schema_version` / `audit_lineage` / `idempotency_key` / `confidence` / `correlation_id` / `causation_id` / `aggregate_id` / `sequence_number` / `tenant_id` / `environment_context` / `replayability_flag` / `status` / `replacement_kind` / `retention_class` / `consistency_tier` / `cost_attribution`. The messaging-domain event vocabulary is REGISTRY-GOVERNED per DL-16 invariants 1 + 5 + 9 + 29 — not a closed enum. Messaging-domain payloads obey PHI minimization (DL-16 invariant 7); cross-tenant isolation (invariant 8); atomic state mutation via outbox (invariant 6); producer authorization (invariant 29); emission-time authorization (invariant 10); idempotent execution (invariant 11); DLQ + manual review (invariant 12); retention class declaration (invariant 13); executor timeout contract (invariant 14); correlation across runs (invariant 15); explicit replay safety modes (invariant 16); outcome contract emission (invariant 17); temporal validity for window-semantic facts (invariant 18); environment segregation (invariant 28); causality cycle detection (invariant 20); consistency tier per event_kind (invariant 21); GDPR erasure-by-pseudonymization (invariant 22); AI content validation before outbound emission (invariant 23); patient-impersonation gate for inbound events from unverified handles (invariant 25); compensation actions (not silent rollback) for incorrect outbound messages (invariant 31); event-granularity routing policies (invariant 32); operational observability + circuit breakers for messaging rails (invariant 27); tamper-evident audit (invariant 38); out-of-band reconciliation between messaging projections and canonical state (invariant 39). The seven-category vocabulary partition (DL-16 invariant 3) is binding across messaging: rail events are **domain events**, rail dispatches are **orchestration_actions**, threaded inbox views are **rail/surface projections**, delivery receipts are **outcome events**, CNS decision-to-dispatch records are **cns_decisions**. Cross-link: MAIN §1Z + foundational §8.1 clauses 66-95 + ADR §7.19 + radar zones 114-131 + `docs/architecture/cns_taxonomy_reconciliation.md` for the surface-by-surface reconciliation of messaging vocabulary against DL-16's seven categories.

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
| Action items (`patient_action_items`) | **NO — table not built** (despite §1G.11 doctrine) | UI exists but reads derived dashboard model, not substrate | Substrate doesn't exist; **per DL-10 (2026-05-11 evening) c4 must also decide identity-scoped vs relationship-scoped per action-item type** | **c4** (re-scoped to substrate build with DL-10 obligations, not audit) |
| `patient_relationship` (per DL-10 substrate spine for all of the below) | **NO — primitive #19 formalized as doctrine 2026-05-11; substrate migration future** | n/a (doctrine layer) | Future migration when first sibling activation drives it | future preflight; likely external-line or first multi-brand activation |
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

**Architectural preference (binding guidance for the future external-line preflight; UPDATED 2026-05-11 evening per DL-10).** When that preflight is written, **prefer the dual-substrate four-layer model** (separate `communication_events` + `contact_identities` + ops triage substrate, distinct from the authenticated `messages` substrate). **Treat "make `messages.patient_id` nullable" as the default-losing option** unless a pressure test in that preflight proves the single-substrate path is cleaner.

**DL-10 substrate spine (binding, post-2026-05-11 evening).** The four conceptual layers below now have explicit substrate-doctrine mapping per [MAIN Doctrine lock DL-10](../../.cursor/plans/system_map_three_layers_60706286.plan.md) and [foundational doc §7.13](../../.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md):

- **Layer 1: External contact identity** (this doc's "rail event" + "contact identity" layers compressed) — the unmatched / pre-account communications layer above the OMNI identity namespace. Future external-line preflight builds this.
- **Layer 2: `patients` consumer identity** within OMNI identity namespace (deployment / org PHI boundary today; cross-namespace federation as non-foreclosure per DL-10).
- **Layer 3: `patient_relationship`** (formalized primitive #19 per DL-10) — per-relationship operational scope. **Brand is one of N scoping dimensions** (clinic / practice_entity / location / specialty / legal entity / parent org / deployment / referral partner / care team / endpoint). Admission guardrail: a dimension becomes a relationship boundary only when it owns distinct operational state.
- **Layer 4: Care context** — concrete operational unit within a relationship (program, encounter, appointment, message).

**External-line ingress sequence (binding per DL-10 + this section):** Twilio main-line / inbound call / fax / unknown lead-form event → Layer 1 contact identity → identity-claim match against Layer 2 `patients` within namespace → resolve or create Layer 3 `patient_relationship` (with explicit consent + audit per DL-10) → operational state in Layer 4. **Never route Twilio main-line events directly into `messages`** without going through this sequence. Forbidden by DL-10 + radar zone 35 (auto-share drift).

Rationale (why dual-substrate; pre-DL-10 framing preserved below for reference):

- Authenticated patient chat and unknown-number external traffic have **different authority** (patient-scoped vs ops-scoped), **different privacy** (PHI from a known patient vs an unknown texter possibly not even a patient), **different routing** (clinical_required + care-program-bound vs triage-to-staff), **different retention** (clinical vs marketing/spam), and **different UX rules** (patient portal vs ops triage queue).
- Collapsing them into one nullable-patient_id table creates a junk-drawer: lead texts, spam, wrong numbers, billing questions, appointment reschedules, post-procedure concerns, clinical patient messages, and authenticated portal messages all flowing through the same row shape with metadata-jsonb discriminants. Radar zone 28's exact anti-pattern.
- Keeping them separate lets each substrate enforce its own RLS, its own action-item shape, its own audit lineage, and its own retention rules — and lets the patient projection layer cleanly link cross-substrate without pretending an SMS from an unknown number originated as authenticated portal chat.
- The four layers cited above are the model. Pressure-test against it before reaching for nullable `patient_id`.

**What c2-c7+ does NOT cover.** c2-c7+ build out the **authenticated portal chat side** of the topology (rich chat rendering, inbox UI, action items audit, voice/video integration FROM the portal, inbound routing INTO existing patient threads). They do not build the external-line architecture. **A separate sub-phase** is required for the four-layer model above.

**e0 preflight (LANDED 2026-05-12):** [`.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md`](../../.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md). The preflight (23 sections, 9 substrate sketches, 10 framing questions, 38 guardrails, 55-scenario matrix, R1-R9 pressure-test trail) supersedes the placeholder scope sketch above. Scope covers:

- Twilio webhook ingest (SMS receive, call receive, status callbacks) — first concrete rail adapter under `lib/external-rails/twilio/`
- `contact_identities` primitive (phone / email / external-handle with provenance + match state + handle-vs-person discipline per DL-13 + DL-10 extension)
- `external_conversations` + `external_conversation_messages` + `external_conversation_artifacts` + `external_message_delivery_events` + `external_conversation_drafts` substrate
- `org_communication_endpoints` substrate (per-endpoint config — brand / location / intent_class / business hours / voicemail / forwarding / access scope / `provider_id`)
- Ops triage inbox surface for unmatched events
- Link-to-patient workflow (link / merge / split / mark spam / convert-to-lead / convert-to-patient) with full provenance + 5-disposition pattern on artifact projection
- Voicemail / missed-call state machine + draft semantics (personal / shared-queue / AI-proposal with stale-warning) + outbound endpoint selection + delivery state callbacks
- Multi-brand operating modes (4 brand modes × 3 backend modes per DL-13)

**DL-13 substrate spine (binding, post-2026-05-12).** The four-layer model above is bound at substrate by **DL-13** + DL-10 extension (handle-vs-person) + DL-12 invariant 31 5-disposition extension. Five binding clauses now apply: (1) rail-agnostic substrate + vendor-confined adapter pattern (external-line rail adapters at `lib/external-rails/<provider>/`; broader pattern applies to other domains via their own adapter boundaries); (2) OMNI canonical source-of-truth + vendor-adopt-not-write (vendor contact stores NEVER authoritative); (3) settings precedence hierarchy (law/consent > safety > endpoint > queue > user > device); (4) deterministic outbound 8-gate (endpoint-intent + consent + STOP/HELP + template/disclosure + quiet-hours + idempotency + rate-limit + prohibited-claims; AI confirmation NOT a gate); (5) display-projection-not-substrate (status chips + display identity computed at query time, NEVER independent mutable substrate columns). Canonical home: MAIN DL-13 lock + §1D.4 + §1G.12 + §1J.13 + §1N.9 + §1P.15 + §1Q.14.2 + §1V.11 + foundational §4.B + §5 sibling #20 + §5.3(c) + §7.13.13 + §8.1 clauses 29-33 + ADR §7.16 + radar zones 69-78 + evolution narrative Act XIV.

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

---

## §12 Internal team collaboration (third messaging surface — binding per DL-11)

§11 named the external-line gap as the second messaging surface (pre-account / contact identity → triage → relationship). DL-11 (landed 2026-05-11 late evening) binds the **third** messaging surface: **staff-to-staff internal team collaboration**. This is what makes OMNI's communications domain Klara/RingCentral-class for the staff side, not just the patient side.

**Surface scope.** Threaded staff-to-staff discussion with first-class object attachment (patient / patient_relationship / lab_order / lab_result / appointment / treatment_order / clinical_visit / care_program / patient_document / patient_message / outbound_job / billing_exception / adverse_event), three thread shapes (`ad_hoc`, `persistent_group`, `direct_message`), patient-less threads first-class (billing team chat, front desk chat, 1:1 DMs), Slack/Epic-Secure-Chat/iMessage-quality bar (mentions, sensitivity, rich media on the roadmap).

**Substrate today.** Doctrine LANDED via DL-11. Substrate migration future. The new sibling `internal_collaboration/` (sibling #19 in foundational doc §5) is the home. Substrate sketch in foundational doc §7.14.4: `internal_threads`, `internal_thread_messages`, `internal_thread_participants`, `internal_thread_object_links` (first-class typed multi-object child table). NOT `messages` with a `staff_internal` thread type — that's the prior §1G.8.8 framing that DL-11 supersedes.

**Boundary with c2 patient-facing chat.** Internal collaboration is staff-only. Never appears on patient-facing pages. Patient identity may be attached via `internal_thread_object_links` (and denormalized to `internal_threads.patient_id` for indexing) but the patient does NOT see internal threads about them. When a thread produces a patient-visible response, the orchestrator writes a separate row to the c2 `messages` substrate via `postPatientMessage` (or staff-equivalent path) — the internal thread does not "promote" into a patient message.

**Boundary with external-line / pre-account communications (§11 above).** External-line ops triage stays in external-line substrate (Layer 3 in §11's four-layer model). When staff need to discuss an unmatched external-line event (e.g., "this Twilio inbound looks like patient X — confirm before linking"), an internal collaboration thread can be **spawned from or linked to** the external-line triage row — but the external conversation itself is NOT an internal thread. The unmatched-event substrate (contact identity + ops triage queue) is one source of internal threads, not the same substrate.

**Boundary with `provider_tasking/` (reserved sibling).** A thread can produce a task via `internal_thread_object_links.link_role = 'produced_task'`. The task carries queue / owner / SLA / escalation state. The thread carries conversation state. Neither replaces the other; they compose. The provider workspace surfaces both: queue items from `provider_tasking/`, threads from `internal_collaboration/`, with cross-links for context.

**Mention notification semantics (binding per DL-11).** Mentions emit `outbound_jobs.send_in_app` (in-app notification to mentioned staff via c1 substrate) + `audit_events`. **They do NOT emit `patient_timeline_events`** unless the thread produces an explicit patient-record state change. Patient timeline is patient-facing memory, not an internal-team activity log.

**Relationship-scoping (binding per DL-10 + DL-11).** Internal threads attaching a patient are relationship-scoped per DL-10: a thread about Brand A's patient stays in Brand A's care-team workspace by default. Cross-relationship visibility is explicit / permissioned / consent-aware / audited.

**Staff directory + presence + on-call coverage (NOT in DL-11 scope; non-foreclosure clause).** Internal collaboration depends on a staff directory + presence + on-call coverage substrate for @mention disambiguation, assignment routing, escalation paths, and "click into staff view → see schedule" UI. Today's substrate has fragments — `staff_profiles` + §1G.7 operational state + §1G.8 My Status — but no first-class directory UI, no on-call rotation primitive, no personal-cell visibility policy. Future doctrine arc (DL-12 candidate, naming TBD). Personal contact visibility is capability/policy-gated, not assumed global. Radar zone 42 watches.

**What c2 / c3 / c4 / external-line preflight inherit from DL-11.**
- **c2 (shipped):** unaffected. `messages` substrate stays patient-facing.
- **c3 (`/inbox` UI for `patient_inbox_messages`):** unaffected. Patient-facing one-way notifications.
- **c4 (`patient_action_items` substrate build, re-scoped per DL-10):** must distinguish "patient action item" (substrate for tasks the patient must complete) from "internal team thread about a patient" (substrate for staff-to-staff discussion). Both can compose — an action item may have a linked internal_collaboration thread — but they're not the same primitive.
- **External-line preflight (future):** preserves §11's four-layer model; ops triage stays in external-line substrate; internal collaboration threads can be spawned from / linked to external-line events.

**Anti-patterns explicitly rejected (radar zones 38-42).** Cram-internal-into-patient-chat (38), object-attachment-via-jsonb / single-context-only (39), cross-relationship leakage (40), patient-timeline pollution from internal activity (41), staff-directory / on-call / personal-contact drift (42).

**Build status (post-DL-11):** doctrine LANDED; substrate NOT built; first sibling activation drives the migration. The `internal_collaboration/` folder + first concrete typed thread + first persistent-group definition will likely be the activation trigger. Expected to overlap with the external-line preflight or the c4 patient_action_items substrate build, both of which need DL-11's boundary clarifications to land cleanly.

### §12 DL-12 cross-references (added 2026-05-12 early morning)

Thread + participant lifecycle semantics across all 28 foundational clarifications — lifecycle / ownership / search-visibility / notification / template-AI / edit-history / attachments / preview-privacy / legal-hold / safety-escalation / task-transitions / queue-routing state machine / three-state attachment lifecycle / iOS-vs-OMNI-native markup / not-a-consequence-free-backchannel culture / patient-facing rich-media parity / thread-kind parameterization / internal-membership-vs-patient-visible-roster / care-team/coverage-layer-drives-derived-membership / general-enterprise-platform-coexistence (not Teams-clone) / AI Response Assist (replaces screenshot-into-external-AI) — live in **DL-12 + MAIN §1D.3 + §1G.1 DL-12-binding + §1G.3 DL-12-binding + §1G.6.2 DL-12-binding + §1J.12 + §1V.10 + §1P.14 + §1Q.14.1 + §1N.8 + foundational doc §4.A primitive description updates (#1 + #2 + #10 + #11 + #13 + #16) + §5.3 sibling-boundary extensions (TWO guards + FIVE sub-guards) + §7.13.12 + §7.14.9 extension + §7.14.10 extension + §7.14.18 extension + §8.1 (28 sub-clauses) + §11.0 crosswalk + ADR §7.15 (42 REJECTED alternatives) + Radar zones 43-67 (25 zones)**.

**Internal collaboration substrate inherits these rules**; when sibling activates, internal snippets land in their own typed/versioned registry inside `internal_collaboration/`. Search/discovery is a future projection over substrates (named here, not built in this arc); future staff-presence/on-call layer hooks into staff notification preference discipline; future care-team/coverage assignment substrate carries the full staffing algorithm — chat thread CONSUMES that layer, never hardcodes membership; future `provider_tasking` substrate + c4 action-item integration carry queue-routed work claim/complete/escalate state; future chart-document substrate carries explicit capability-gated filing disposition transitions; markup/annotation editor is a future product deliverable that will respect the iOS-vs-OMNI-native distinction; future patient-facing video pipeline carries transcoding + scan + size limits + secure-portal-link discipline for SMS rails; future patient-proxy / caregiver / parent-on-behalf-of-minor actor type extension hooks into primitive #1 taxonomy; future patient-to-patient peer support is a new surface (NOT in DL-11 staff-to-patient scope); future enterprise-platform connector layer for governed Teams/Slack/M365/Workspace/future-tool integration when compliance/access controls permit.

### §12 DL-13 cross-references (added 2026-05-12)

Five binding DL-13 clauses extend the cross-substrate discipline introduced by DL-12 with rail-bound external-communications semantics. These references are non-exhaustive pointers; the canonical home for each clause is MAIN DL-13 lock + the per-section DL-13-binding subsections, and the long-form rationale lives in foundational doc §7.13.13.

- **Rail-agnostic substrate + vendor-confined adapter pattern.** Generic `provider_*` columns on substrate; vendor code confined behind adapter boundary at `lib/external-rails/<provider>/` for external-line. Broader pattern applies to labs (`labs_lifecycle/lib/lab-rails/<vendor>/`), payments (`billing_subscription/lib/psp-adapters/<provider>/`), EHR-export, pharmacy via their own adapter boundaries inside their own sibling directories — NOT all under `lib/external-rails/`. Future rails compose by adding sibling adapter, never substrate schema change. Canonical: MAIN §1G.12 + DL-13 invariant 1 + foundational §4.B primitive #10 + §5 sibling #20 + §5.3(c) + §7.13.13.1 + zones 69, 76.
- **OMNI canonical source-of-truth + vendor-adopt-not-write.** OMNI's identity / contact / endpoint / queue / settings / consent substrate is master; vendor address books / contact stores are local convenience for vendor-internal use, NEVER authoritative. Manual scheduling-side patient creation publishes contact handles into OMNI; vendor is adopt-not-write. Pattern generalizes to any vendor with its own object store. Canonical: MAIN §1J.13 + DL-13 invariant 2 + foundational §4.B primitive #5 + §7.13.13.2 + zone 70.
- **Settings precedence hierarchy (six-level, top-down).** Law / compliance / consent > safety / clinical criticality > endpoint policy > queue policy > user preferences > device / client preferences. Lower layers may NEVER override higher layers. Pattern applies wherever settings layer over substrate. Canonical: MAIN §1D.4 + DL-13 invariant 3 + foundational §7.13.13.3 + zone 75.
- **Deterministic outbound 8-gate.** Every automated external-line outbound passes endpoint-intent + consent + STOP/HELP + template/disclosure + quiet-hours + idempotency + rate-limit + prohibited-claims. AI confirmation is NOT a gate. STOP is intent-class-scoped + channel-scoped + endpoint-scoped by default. Single-line marketing-and-clinical operations admitted IF substrate enforces intent classification + per-intent consent + per-intent STOP + intent-aware routing + full audit (the rejected pattern is unseparated intent, not single-physical-number). Canonical: MAIN §1Q.14.2 + DL-13 invariant 4 + foundational §7.13.13.4 + zones 73, 78.
- **Display-projection-not-substrate discipline.** Display identity (name / avatar / endpoint label / group title) and status chips (Unknown / Lead / Booked / Established / Active Program / Lapsed / VIP / Opted Out / Needs Action / Payment Issue / Clinical Review) are computed projections at query time over substrate. NEVER independent mutable `chat_status` / `lead_stage` / `display_state` columns. Projection-cache admissible IF justified by performance, but cache is derived state with invalidation contract. Canonical: MAIN §1V.11 + DL-13 invariant 5 + foundational §7.13.13.5 + zones 71, 74.

Additional DL-13 cross-cutting extensions: **handle-vs-person identity discipline** (DL-10 extension; phone is a handle, not always one person; canonical MAIN §1J.13(a)); **5-disposition pattern on external-line artifact projection** (DL-12 invariant 31 extension; link / attach / chart_file / safety_task / reject_spam; canonical MAIN §1P.15); **architectural mode-agnosticism** (4 brand modes × 3 backend modes; canonical MAIN §1D.4(c)); **AI-not-as-participant on external conversations** (canonical MAIN §1N.9 + zone 78).

**External-line substrate inherits these rules**; sibling #20 `external_communications/` (foundational §5) is the substrate home. The e0 preflight `.cursor/plans/PREFLIGHT_2026-05-12_phase_4h_external_line_e0_substrate_routing_design.md` is the full design (23 sections, R1-R9 pressure-test trail, 55-scenario matrix). e1 execution (Twilio adapter, substrate migration, ops triage UI) is the next preflight, deferred until DL-13 doctrine lands.

### §12 DL-14 cross-references (added 2026-05-13)

DL-14 sits **above** the rail-agnostic DL-13 spine: where DL-13 binds the substrate shape for rails, DL-14 binds that **rails are outputs of the CNS**, not the CNS itself. Five binding pointers extend this topology document with DL-14 semantics. Canonical homes: MAIN DL-14 top-level anchor + foundational §0 + ADR §7.17 + radar zones 79-88. Long-form rationale: brain hardening plan.

- **Rails-as-outputs binding (DL-14 invariant 4).** SMS/MMS, email, in-app, push, voice, voicemail, provider inbox, staff task surfaces, manager dashboards, vendor adapters, and future rails are projections of CNS decisions. Rail-side fail-open / gate logic / suppression / throttle inherit policy from the upstream CNS decision (intent_class + policy_class + actor_target carried on the action substrate). **Designing rail-side fail-open logic without first establishing what the brain decided is a DL-14 violation** — radar zone 85. Canonical: MAIN DL-14 invariant 4 + foundational §8.1 clause 37.

- **Multi-actor target binding (DL-14 invariant 2).** The CNS emits actions to patient AND provider AND front desk AND care coordinator AND manager AND compliance/admin AND AI planner AND queue/team AND external vendor/system. This topology document covers patient-facing rails primarily, but the broader CNS coordinates internal actors too. Provider-facing surfaces (provider inbox, chart awareness markers, provider task surfaces) and staff-facing surfaces (queue UIs, ops dashboards, staff tasking) are first-class CNS output surfaces alongside patient rails. Canonical: MAIN DL-14 invariant 2 + foundational §8.1 clause 35 + radar zone 88.

- **Multi-type action binding (DL-14 invariant 3).** CNS action types include patient messaging AND provider notification AND staff task AND passive awareness marker (state machine: OMNI sent → unseen → seen → acknowledged) AND escalation AND suppression/cancellation AND wait/throttle AND AI plan request AND lifecycle state update AND outcome feedback logging AND no-op. The action substrate (currently primitive #10, currently named `outbound_jobs`) must host all action types as projections. **Phase 0 of the brain hardening audit determines whether primitive #10 must be semantically broadened or renamed (e.g., `orchestration_actions`).** Canonical: MAIN DL-14 invariant 3 + foundational §8.1 clause 36 + radar zone 83.

- **Subsystem subordination — not adequacy (DL-14 invariant 5).** Subsystems including §1Q rules + templates engine, §1Q.21 Marketing Lifecycle, §1Q.17 privacy gate, §1Q.19 dynamic behavior gate, primitive #10 action substrate, primitive #11 AI runtime, Twilio adapter, future rail adapters operate UNDER the CNS, not AS the CNS. **DL-14 binds subordination only; adequacy is determined by Phase 0.** Canonical: MAIN DL-14 invariant 5 + foundational §4.B primitive #10 / #11 DL-14 subordination + §8.1 clause 38.

- **CNS learning loop binding (DL-14 invariant 6).** Outcomes, staff thumbs-up/down/unsafe feedback on system actions, AI suggestion accept/edit/reject events, and awareness-marker state transitions are first-class CNS inputs. Feedback must attach with full lineage depth (action id, rule id + version, template id + version, campaign step, channel projection / rail attempt, context snapshot, AI proposal id, prompt version, model version, final action diff). **A CNS without a learning loop is a one-way emitter — rejected by DL-14.** Canonical: MAIN DL-14 invariant 6 + foundational §8.1 clause 39 + Phase 0 stress scenarios 9-11.

**Rejected reframings (radar protection).** Conversations / PRs / designs that frame OMNI as: a messaging system (zone 79), a Twilio integration (zone 80), a marketing automation tool (zone 81), a basic rules/templates engine (zone 82), an outbound-job runner (zone 83), an AI marketing copywriter (zone 84), a rail-side fail-open dispatcher (zone 85), lifecycle automation as risky outbound (zone 86), rail-side orchestration (zone 87), or a patient-facing-only system (zone 88) are DL-14 violations and must be redirected back to the CNS center-of-gravity model.

**Phase 0 audit pending.** The brain hardening plan ([`.cursor/plans/omni_brain_hardening_d1ef429b.plan.md`](../../.cursor/plans/omni_brain_hardening_d1ef429b.plan.md)) executes Phase 0 next: adversarial audit of §1Q + Marketing Lifecycle + primitive #10 + primitive #11 + dynamic-behavior gates against the DL-14 model with 27 stress scenarios (Phase A.2) + 9-axis taxonomy + primitive adequacy verdicts + enterprise audit checklist. Until Phase 0 + 1 settle, **e1 implementation does not resume**.

### §12 DL-14 cross-references (Phase A.2 update — 2026-05-13)

DL-14 sits above DL-13: DL-13 binds rail-agnostic substrate; DL-14 binds rails-as-outputs of the CNS. Phase A.2 extends DL-14 with invariants 7-22 (sixteen new) adding AI-specific layer: AI hybrid + 7 autonomy modes + 4 capability envelopes + audit lineage + 7-layer policy matrix + retry pathway + no-meta-AI + 9-layer vertical stack + control state machine + 6-layer CQRS pattern + orchestration_runs + AI Compose Assist + intent preservation + prompt injection defense + live-state revalidation + multi-tenant federation.

**Key topology-relevant Phase A.2 bindings (cross-references):**

- **AI capability envelopes** (invariant 9 + `§1N.10`): operations / clinical / content / safety-triage; orthogonal to `§1N.2` role surfaces; same engine + infrastructure; typed CNS artifact exchange (no freeform chatter between envelopes per radar zone 94).

- **AI autonomy modes** (invariant 8 + `§1N.11`): 7 modes (off / observe / draft / recommend / human-approved-execute / bounded-autopilot CNS-executed / escalate-only); conservative default; clinical-risk interrupt ABSOLUTE (Guardrail 1).

- **AI policy / toggle matrix** (invariant 11 + `§1N.15`): 7 layered axes (org / brand-location / channel / thread-pathway / service-intent / provider-segment-risk / confidence-runtime); default-closed; safety-biased.

- **Re-prompt / retry pathway** (invariant 12 + `§1N.16`): stateful follow-up with pre-fire revalidation; AI drafts, CNS validates, action substrate executes.

- **Control ownership state machine** (invariant 15 + `§1N.19`): 9 substrate states + 4 pause sub-types; substrate-vs-UI distinction binding; transitions audited.

- **AI Compose Assist** (invariant 18 + `§1N.23`): global capability across composition surfaces (provider chat / front desk SMS / ops inbox / email / in-app / internal notes / provider notifications / template edits / voicemail follow-up); role-scoped action sets; Context Packet Builder produces mode-specific scoped packets; **Polish gets RICH relevant context — distinction is OUTPUT AUTHORITY, NOT context size**.

- **Provider AI-assisted clinical reply** (invariant 18 mode 5 + `§1N.23`): origin = `provider_ai_assisted`; provider owns clinical authority; AI proposes drafts/clinical input; provider edits/approves; full audit lineage. Patient sees provider attribution.

- **Multi-tenant + federation-aware AI scoping** (invariant 22 + `§1N.20`): cross-tenant isolation; federated-org AI shares state ONLY per active A1 permeability policy (default NOT total visibility).

- **AI invocation audit lineage** (invariant 10 + `§1N.13`): every AI invocation records ai_jurisdiction + role_surface + ai_assist_mode + ai_policy_config_id + policy_resolution_trail + context_packet_id + intent_preserved + material_additions_suggested + tool_failure_reason + etc.

**Four absolute guardrails (Phase A.2)**: (1) Clinical-risk interrupt is ABSOLUTE; (2) Bounded autopilot is CNS-executed, not AI-executed; (3) AI policy is LAYERED + DEFAULT-CLOSED + INVOCATION-AUDITED; (4) Patient-facing AI is NOT freeform chat even with bounded autopilot.

**Two product principles (Phase A.2)**: (a) Simple surface, serious substrate; (b) Rich relevant context, restricted output authority.

**Rejected reframings (radar protection)**. New radar zones 89-113 (25 added in Phase A.2) extend the existing zones 79-88 (Phase A) for the full AI / orchestration_actions / orchestration_runs / Compose Assist / Polish-intent / prompt-injection / live-state-revalidation anti-patterns.

### §12 DL-15 cross-references (Phase B Commit 2 update — 2026-05-13 evening, scheduling↔messaging seam)

DL-15 (Scheduling Substrate Spine — 28 invariants subordinate to DL-16) lands as the first domain specialization against DL-16. Scheduling sits **adjacent** to communications: every meaningful booking lifecycle transition emits messaging-domain `orchestration_actions` that flow through the rails described in this topology document, and every inbound messaging-domain event tagged with scheduling intent (patient SMS "can we reschedule?" / portal chat "I want to cancel" / voicemail "running late") flows into the CNS event graph as scheduling-domain causal antecedents. Canonical home: MAIN DL-15 + §1F.10-§1F.24 + foundational §4.B `scheduling_lifecycle/` Reserved Tier + §8.1 clauses 96-117 + ADR §7.18 + radar zones 132-153.

**Key scheduling↔messaging bindings (cross-references):**

- **Booking confirmation messaging (DL-15 invariant 9 + DL-15 invariant 24 + DL-16 invariant 4).** When an appointment commits to state `booked` (state 4 / 6 in DL-15's 13-state lifecycle), the CNS emits a `send_confirmation` `orchestration_action` projecting onto the messaging rails described in this document (SMS via Twilio adapter, email via Resend, in-app via `record_inbox_message`, push via reserved adapter). The confirmation is NOT emitted by the scheduler executor itself — scheduler emits the `appointment_booked` domain event; CNS reads the event, decides to send confirmation, validates against patient consent + opt-in state + channel availability + quiet hours + intent_class + policy_class via the deterministic outbound 8-gate (DL-13 invariant 4 + §1Q.14.2), and projects through the messaging rail per actor_target (= patient). Per DL-15 invariant 24, scheduler is NEVER a mini-brain emitting its own confirmation SMS / email — scheduler emits the event, CNS coordinates the rail. Per DL-15 invariant 9, the confirmation is gated on deposit state (state 5 `confirmation_pending_deposit` blocks confirmation until deposit settles). Per DL-13 + DL-14, the confirmation rides the standard `orchestration_actions` substrate (primitive #10).

- **Reminder messaging cascade (DL-15 invariant 16 + DL-14 invariant 17 + DL-16 invariant 18).** A booked appointment seeds an `orchestration_run` (primitive #17) for the pre-visit reminder cascade — typically 24h-before + 2h-before + arrival-window messaging. Each reminder is an `orchestration_action` projecting onto messaging rails per patient preference + relationship state + jurisdiction + brand. Reminder cascade is NOT a §1Q rule that runs in isolation — it's an `orchestration_run` whose state advances on time elapsed (DL-16 invariant 18 temporal validity for window-semantic facts) + on appointment state transitions (cancellation cancels future reminders atomically) + on patient response (reschedule_request reply rebinds the run to a new appointment). Per DL-15 invariant 16, no-show-prevention reminder cascade is a journey container — single-step "send reminder rule" is REJECTED by DL-14 invariant 17.

- **Lifecycle suppression during active booking flow (DL-15 invariant 16 + DL-14 invariant 23 + DL-16 invariant 32).** When a patient is in an active booking journey (state 1-5: `slot_offered` / `slot_held` / `appointment_requested` / `booked` / `confirmation_pending_deposit`), the CNS suppresses concurrent §1Q.21 Marketing Lifecycle outreach + concurrent "ready to book?" lifecycle messaging that would conflict with the in-flight booking flow. Per DL-15 invariant 16's orchestration_run binding + DL-16 invariant 32's event-granularity routing policies, lifecycle automation subscribes to booking-state events and suppresses sends accordingly. The CNS arbitrates the suppression — NOT a rule-side check + NOT a rail-side fail-open (DL-14 invariant 4 + radar zone 87). Per DL-15 invariant 25, if a lifecycle SMS fires anyway (race condition or staleness), the compensation is a follow-up clarification action — NOT silent rollback of the in-flight booking.

- **No-show recovery messaging (DL-15 invariant 7 + DL-15 invariant 11 + DL-14 invariant 17).** When an appointment transitions to `no_show` state (state 9), the CNS reads the event + the patient's no-show history (DL-15 invariant 18.13) + the brand's cancellation policy (DL-15 invariant 7) + the location's recovery policy + the patient's prior recovery responses + outstanding balance state + membership benefit consumption + relationship-class (lead / engaged / established / lapsed / VIP) and decides recovery action: send rebook offer SMS / send fee invoice / suppress further outreach for X days / escalate to manager task / mark as churn-risk for Marketing Lifecycle re-engagement. Recovery is a multi-step `orchestration_run` (DL-15 invariant 16), NOT a single-rule fire. Per DL-15 invariant 11, the recovery messaging revalidates live state at execution moment — if the patient already rebooked via another channel between no-show event and recovery message firing, the send is suppressed.

- **Patient SMS rescheduling request (DL-15 invariant 15 + DL-15 invariant 24 + DL-16 invariant 25).** A patient SMS reply "can we reschedule for next Tuesday?" arrives via the inbound rail described in §4 + §5 of this topology document. The message flows through §1P inbound atomization to produce a typed scheduling-intent event (`scheduling_intent_reschedule_request` or similar registry-governed kind per DL-16 invariant 5). Per DL-15 invariant 15 (prompt injection defense), the SMS body is UNTRUSTED data — never AI instructions. The CNS reads the scheduling intent, classifies, and either (a) routes to AI Compose Assist for an autopilot rebook proposal (subject to bounded-autopilot guardrails per DL-14 invariant 18 + DL-15 invariant 13 + Guardrail 1 clinical-cue interrupt if the patient mentions "I'm on blood thinners now"), (b) drafts a slot-offering reply for staff review per the role-scoped action set, or (c) escalates to a staff task. Per DL-15 invariant 24, the AI never emits the booking action directly to the scheduler executor — AI proposes via `orchestration_actions` substrate, CNS validates against current scheduling state via DL-15 invariant 11 live-state revalidation, scheduler executor commits atomically. Per DL-16 invariant 25, unverified-handle inbound SMS gets PUBLIC routing context only — AI cannot disclose appointment details on an unverified phone number.

- **Cross-rail anti-duplication on call-cancels-SMS (DL-15 invariant 16 + DL-14 stress scenario 7 + DL-16 invariant 32).** A patient calls the front desk to cancel an appointment. The phone call is captured as a domain event; the cancellation flows to the scheduler executor; `appointment_cancelled` event emits. The CNS reads the cancellation and atomically cancels (a) the scheduled 24h-before reminder SMS already queued in `orchestration_actions`, (b) the "ready for your visit?" portal chat lifecycle message, (c) the marketing follow-up for the cancelled service. Cancellation is enacted via the existing `orchestration_actions` substrate (DL-13 invariant 1 + DL-14 invariant 4) — NOT by rail-side suppression logic invented inside the SMS dispatcher. Per DL-14 stress scenario 7 (call-cancels-SMS) + DL-15 invariant 16, this is a multi-action atomic cancellation governed by an `orchestration_run`.

- **Passive provider awareness on clinical-cue interrupt during booking (DL-15 invariant 10 + DL-15 invariant 14 + DL-14 invariant 21 + Guardrail 1).** When a patient SMS / portal chat / voicemail during a booking flow contains a clinical cue ("I'm on blood thinners" / "I'm pregnant" / "I had a reaction last time"), the CNS routes the cue through the safety-triage AI envelope (DL-14 invariant 9 + §1N.10) which classifies + scores severity. Per DL-15 invariant 10 + 14 + DL-14 invariant 21, the booking flow is ABSOLUTELY interrupted (state 8 `clinical_clearance_required`) and a provider awareness marker (DL-14 invariant 19 passive provider awareness state machine: OMNI sent → unseen → seen → acknowledged) fires on the provider's chart / inbox. The cue is NOT silently absorbed into booking AI prompt context — it triggers an ABSOLUTE clinical hard-stop. Patient-facing messaging during the interrupt is restricted: a holding message ("a clinician will review and reach out shortly") may fire, but the booking does NOT proceed. Per radar zone 141 + 89, this is non-bypassable.

- **Patient-profile-driven channel preference for booking messaging (DL-15 invariant 18 + DL-14 invariant 13 + DL-13 invariant 3).** Per DL-15 invariant 18 dimension 4 (time-of-day preferences) + dimension 5 (language preferences) + DL-14 invariant 13 (patient preference layer of policy resolution) + DL-13 invariant 3 (settings precedence — user preferences below law/safety/endpoint/queue), booking-domain `orchestration_actions` project onto messaging rails respecting patient channel preferences (SMS vs email vs portal vs voice), language preferences, time-of-day quiet hours (deterministic gate 5), and brand quiet-hours overrides. Profile-read happens at action emission time, NOT cached stale in the AI context packet (DL-15 invariant 11 + DL-16 invariant 24).

**Scheduler is NOT a domain mini-brain (DL-15 invariant 24).** Per radar zone 151, the scheduler integration is bidirectional: emits scheduling-domain events into CNS, receives `orchestration_actions` back from CNS for execution. Scheduler does NOT (a) send its own confirmation SMS, (b) fire its own lifecycle automation, (c) suppress concurrent messaging unilaterally, (d) decide cancellation policy at cancel-time. All of those are CNS coordinations projecting onto messaging rails per DL-14 invariants 2 + 3 + 4 + 5 + the DL-16 universal envelope.

**Cross-link: MAIN DL-15 + §1F.10-§1F.24 + foundational §4.B `scheduling_lifecycle/` + §8.1 clauses 96-117 + ADR §7.18 + radar zones 132-153 + cns_taxonomy_reconciliation.md (scheduling row) + brain hardening plan Phase 0 scheduling-domain coverage.**

**Phase 0 audit pending (with DL-15 + DL-16 + DL-14 canonized).** The brain hardening plan ([`.cursor/plans/omni_brain_hardening_d1ef429b.plan.md`](../../.cursor/plans/omni_brain_hardening_d1ef429b.plan.md)) Phase 0 now has fully-defined scheduling vocabulary + universal envelope + partition + registry to audit against. Required scheduling-domain stress scenarios extending the Phase A.2 set: (a) Botox + blood thinners clinical interrupt, (b) call-cancels-SMS atomic cascade, (c) slot disappeared between AI propose and CNS execute, (d) cross-jurisdiction booking attempt (patient resident in State A + provider licensed only in State B), (e) federated cross-brand visibility during booking flow, (f) deposit-failed atomic release, (g) waitlist promotion orchestration_run with TTL'd offer, (h) patient SMS reschedule with prompt injection attempt, (i) lifecycle suppression during active booking journey, (j) no-show recovery multi-step run, (k) manual reality capture (front desk verbal booking with audited override).

---

## §13 Fax as cross-cutting rail + ingress (binding per DL-12 — added 2026-05-12 early morning)

DL-12 binds fax canonical placement. **Fax is dual-nature**: an **outbound communication rail** (patient or staff sends a fax to outside party — primitive #10) AND an **inbound artifact** that arrives from outside parties (fax inbound ingestion — primitive #16). Fax is **NOT a new sibling**; it composes from existing substrate.

**Substrate composition (binding per foundational §5.3(a) sibling-boundary guard).** Fax = primitive #10 (Communication rails — fax dual-nature outbound rail + inbound artifact) + primitive #16 (External-system ingest — fax inbound consumer alongside ASC EMR / outside imaging / outside lab / OCR'd consent / vendor webhook / referral packet) + §1P inbound narrative atomization (fax classification + routing) + future `provider_tasking/` (when activated, for fax-derived work assignment) + future c4 `patient_action_items` (when activated, for fax-derived patient tasks) + §1G.6.2 queue routing (for fax queue claim/completion state machine). **No `fax_lifecycle/`, `inbound_fax/`, or `outbound_fax/` sibling** — same DL-8 admission discipline that already forbids `external_documents_lifecycle/` proliferation. Radar zone 46 watches.

**Inbound flow.** Fax inbound → primitive #10 receives + primitive #16 reconcile-and-attach pipeline (provenance + identity-matched-to-patient + linked-to-operational-object + audit) → §1P AI atomization (when activated; structured payloads bypass AI per §1P.2) → classification (per §1P.4 atom routing matrix) → routing → attach-to-patient/object (when matchable) → optional task / internal collaboration thread (DL-11 sibling #19 attaches fax via `internal_thread_object_links` for staff discussion).

**Outbound flow.** Patient-side fax (clinic sends fax to outside party at patient's direction) composes from `outbound_jobs` (primitive #10 communication rails) + §1Q template/disclosure governance for any patient-facing content + audit. Fax content sent on behalf of a patient relationship is subject to the same DL-12 invariants 12, 14, 21, 23 as other patient-facing communication channels.

**Configurable queue ownership.** Fax queue ownership is **configurable per org / relationship / document type / location / specialty / workflow**. Default may be ops / front desk / records team, but ownership varies. **Do not hardcode "front desk owns fax"** — that's a clinic-policy detail, not substrate. Cross-link §1G.6.2 queue-routing state machine for fax claim/completion lifecycle.

**Boundary with internal_collaboration.** Internal_collaboration threads (DL-11 sibling #19, when activated) MAY attach fax artifacts via `internal_thread_object_links` (`object_type = 'fax_inbound'` or `object_type = 'fax_outbound'`) for staff discussion ("review this faxed referral packet before adding to chart"), but internal_collaboration does NOT own the fax queue, fax classification pipeline, or fax-to-chart filing disposition. Those stay in §1P + §1G.6.2 + future provider_tasking. Radar zone 46 watches for "fax-as-new-sibling OR stuffed into internal_collaboration" proliferation drift.

**Boundary with attachment lifecycle.** Inbound fax artifacts inherit the §5.3(b.i) three-state attachment lifecycle: chat-attachment (when faxed PDF appears in a staff thread for discussion) → reviewed/classified artifact (has explicit disposition) → filed chart / canonical document (deliberate capability-gated audited filing per DL-7). A fax landing in a thread does NOT automatically file to the chart per zone 59.

**Future preflight (NOT in this arc).** Full fax architecture (eFax vendor integration, send/receive pipeline, status tracking, retry, batch handling) lands when first concrete fax activation drives. DL-12 binds the canonical placement (composed-from-primitives, NOT new sibling); the full preflight is future work.

---

*End of synthesis. Read alongside the binding MAIN sections + DL-5 + DL-10 + DL-11 + DL-12 + DL-13 + DL-14 + DL-15 + DL-16 + ADR §7.10 + §7.13 + §7.14 + §7.15 + §7.16 + §7.17 + §7.18 + §7.19 + e0 preflight + brain hardening plan before opening any communications-shaped commit. **The §1.0 rails-are-outputs DL-14 anchor, the §1.0 DL-16 universal envelope binding (every messaging-domain event inherits the universal envelope + partition + registry + 36 other invariants), the §11 external-line substrate spine (DL-13), the §12 internal team collaboration substrate (DL-11), the §12 DL-12 cross-substrate lifecycle/template/AI/search/visibility/notification/attachment/thread-kind/care-team-coverage discipline, the §12 DL-13 cross-references (rail-agnostic + OMNI canonical + settings precedence + 8-gate + display projection), the §12 DL-14 cross-references (rails-as-outputs + multi-actor + multi-action + subsystem-subordination + learning-loop), the §12 DL-15 cross-references (scheduling↔messaging seam — booking confirmation / reminder cascade / lifecycle suppression / no-show recovery / patient SMS reschedule / cross-rail anti-duplication / clinical-cue interrupt during booking / patient-profile-driven channel preference / scheduler-is-not-mini-brain), and the §13 fax canonical placement are the named architectural anchors in this doc; do not let them become invisible because c2-c7+ are noisier.***

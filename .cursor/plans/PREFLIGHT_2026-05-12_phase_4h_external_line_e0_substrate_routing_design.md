# PREFLIGHT — External-line first-touch (e0): rail-agnostic substrate + Twilio first concrete adapter + phone-system parity layer

**Status:** PROPOSED — 2026-05-12 (Phase 4H, external-line arc, commit e0)
**Type:** Design document only — no migrations, no code, no doctrine edits.
**Doctrine inheritance:** DL-10 (identity/relationship; handle-vs-person extension per DL-13), DL-11 (three messaging surfaces; external-line substrate spine activated per DL-13), DL-12 (lifecycle/fax/AI/template/search/visibility/notification/attachment/queue/coexistence/AI-Response-Assist; invariant 31 5-disposition extension per DL-13), **DL-13 (rail-agnostic substrate spine + OMNI canonical source-of-truth + settings precedence + deterministic outbound 8-gate + display-projection-not-substrate; LANDED 2026-05-12 from this preflight's R1-R9 arc)**, Radar Zone 68 (single-rail marketing+clinical concentration forbidden; refined by Zone 69-78 per DL-13).
**Doctrine introduced (post-arc reconciliation):** **DL-13** — five binding clauses emerged from this preflight's R1-R9 pressure-test arc and promoted into core doctrine because they apply beyond external-line (labs / payments / EHR-export / pharmacy / future). This preflight now INHERITS from DL-13 alongside the prior locks; the binding clauses live in MAIN DL-13 lock + foundational doc §7.13.13 + ADR §7.16 + topology §11/§12 + radar zones 69-78 + evolution narrative Act XIV.
**Preflight planning trail:** R1-R9 pressure-test trail captured in the agent transcript record (operator-parity / contact-identity / phone-system / settings / multi-brand / display-identity rounds); R9-stable plan approved 2026-05-12 11:30 prior to drafting this document. Post-arc DL-13 doctrine landing chronicle in `.cursor/plans/HANDOFF_2026-05-12_phase_4h_external_line_e0_doctrine_complete.md` (R1-R9 round-by-round synthesis + cross-arc impact map).
**Companion handoffs:** [HANDOFF_2026-05-12_phase_4h_external_line_e0_doctrine_complete.md](HANDOFF_2026-05-12_phase_4h_external_line_e0_doctrine_complete.md) (DL-13 closing handoff; R1-R9 trail; cross-arc impact map), [HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md](HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md), [HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md](HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md), [HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md](HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md), [HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md](HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md).
**Prior-art preflight:** [PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) — c2 patient-facing chat rendering; e0's non-foreclosure twin (c2 substrate stays patient-scoped; external-line gets its own substrate per DL-11 sibling boundary).

---

## §1 Substrate-reality audit

Confirmed **green-field** state as of 2026-05-12 11:50 (pre-draft grep + glob):

| Substrate / artifact | Status | Evidence |
|---|---|---|
| `communication_rails` table | **Not present** | grep returned only doc/plan references |
| `org_communication_endpoints` table | **Not present** | grep returned only doc/plan references |
| `contact_identities` table | **Not present** | grep returned only doc/plan references in [communications_topology.md](../../docs/architecture/communications_topology.md) §11 + radar zones |
| `external_communication_events` table | **Not present** | grep returned 0 matches in `supabase/migrations/` |
| `external_conversations` table | **Not present** | grep returned 0 matches |
| `external_conversation_messages` table | **Not present** | grep returned 0 matches |
| `external_conversation_participants` table | **Not present** | grep returned 0 matches |
| `external_conversation_queue_state` table | **Not present** | grep returned 0 matches |
| `patient_projection_links` table | **Not present** | grep returned 0 matches |
| `lib/external-rails/` directory | **Not present** | glob returned 0 files |
| `lib/external-rails/twilio/` adapter | **Not present** | glob returned 0 files |
| Existing Twilio surface | **Placeholder only** | [lib/notifications/smsTwilio.ts](../../lib/notifications/smsTwilio.ts) — 28-line env-gated stub (no SDK import, no real integration) |
| `patient_relationship` table | **Doctrine LANDED, substrate FUTURE** | DL-10 §7.13 binding lock in [MAIN](system_map_three_layers_60706286.plan.md); no migration |
| `messages` table | **Exists, patient_id NOT NULL** | per c2 preflight (shipped); non-foreclosure invariant from [communications_topology.md](../../docs/architecture/communications_topology.md) §11 forbids merging external-line into `messages` |
| `internal_collaboration/` sibling | **Doctrine LANDED, substrate FUTURE** | DL-11 binding; not relevant for e0 (separate sibling) |

**Conclusion:** e0 starts from a completely clean slate for external-line substrate. The only pre-existing artifact is the placeholder Twilio SMS stub at [lib/notifications/smsTwilio.ts](../../lib/notifications/smsTwilio.ts), which the rail-adapter contract in §8 will REPLACE with a structured `lib/external-rails/twilio/` adapter implementing rail-agnostic interfaces — the stub does not foreclose any design decision.

**Non-foreclosure constraint inherited from c2:** `messages.patient_id NOT NULL` MUST remain (per [PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) + [communications_topology.md](../../docs/architecture/communications_topology.md) §11). External-line gets its own parallel substrate (`external_conversation_messages`); projection from external-line to patient context is LINK-via-`patient_projection_links`, NEVER migrate-into-`messages` per DL-12 invariant 17.

---

## §2 Architectural commitment

External-line is the **DL-11 third sibling boundary** (alongside c2 patient-facing chat and internal_collaboration). e0 builds the substrate **rail-agnostic with Twilio as the first concrete adapter**. The architectural principles are:

1. **Rail-agnostic substrate, vendor-confined adapters.** All domain tables use generic names (`communication_rails`, `external_communication_events`, `external_conversations`, etc.) with vendor identity stored in `rail_provider` / `provider_event_id` / `provider_endpoint_id` / `raw_provider_payload` columns. NO column or table name contains "twilio" / "ringcentral" / etc.
2. **Twilio is the first concrete adapter, not the substrate.** All Twilio-specific behavior (webhook signature verification, message SID format, status callback shape, A2P 10DLC compliance, Messaging Service routing) is confined to `lib/external-rails/twilio/`. Domain code never imports Twilio directly.
3. **Future rails compose by adding a `communication_rails` row + a sibling `lib/external-rails/<vendor>/` adapter** — never by modifying substrate schema. Concretely: email rail, fax rail, RCS rail, WhatsApp rail, voice-rail-equivalent, regional-carrier-failover all admit the same adapter contract.
4. **Per-substrate storage (DL-12 invariant 17).** External-line stays in its own message substrate. Projection to a patient relationship LINKS via `patient_projection_links`, never migrates rows into c2 `messages`. Search/discovery is a future projection over both substrates, not a reason to merge.
5. **Phone-system parity layer (§14).** External-line is not "SMS webhook + message table" — it is a RingCentral REPLACEMENT. The substrate admits the full phone-system shape (multi-endpoint, voicemail, call forwarding, business hours, queue routing, delivery-status tracking, draft semantics, traceability) from e0 so e1-e5+ can phase in implementation without rewrites.
6. **Multi-brand mode-agnostic (§16).** The substrate supports both high-touch medspa-style external-line (easy SMS/phone access; main line owned by front desk) AND Hims-style portal-first national-telehealth mode (external-line suppressed/restricted/disabled) AND every mode between, configured per `brand_id` / `practice_entity_id`. No mode is doctrinal default.
7. **OMNI is contact source of truth, not Twilio (§13).** Manual account creation in scheduling/intake/CRM publishes contact handles into `contact_identities` via OMNI; Twilio rail-side address-book features are local conveniences only and NEVER override OMNI canonical data.
8. **Operator parity is the build target, not "SMS table" (§12).** External-line must ship at-least-RingCentral-parity from e1 across search-unsaved-history, full-text-message-search, deterministic-rule-outbound-without-AI, immutable-history-with-archive, capability-gated-reactions, first-class-media, pre-account-annotation. "Substrate-pure-but-operationally-inferior" is a failure mode, not a target.

---

## §3 What this preflight does NOT do

- **No MAIN / foundational / ADR / topology / radar / evolution edits.** Doctrine stays where it lives. When e1 fires, doctrine edits will (a) annotate `communication_rails` + `org_communication_endpoints` + `contact_identities` + `external_communication_events` + sibling tables as ACTIVATING per DL-11; (b) cross-reference this preflight from [communications_topology.md](../../docs/architecture/communications_topology.md) §11 + §13 (fax adjacency); (c) potentially surface new radar zones per §19.
- **No SQL migrations.** Substrate sketches are column-level only.
- **No code.** API surface is signature-level only; adapter interfaces are TypeScript-style signatures only; no implementations.
- **No doctrine rebind.** §12-17 EXTEND DL-10/11/12 + zone 68 to external-line operator workflows. They never introduce new doctrine, never amend doctrine, never invalidate doctrine. If a clause looks like new doctrine, it is wrong — flag it before merging.
- **No new sibling boundary.** External-line is the DL-11 sibling that's already named in [communications_topology.md](../../docs/architecture/communications_topology.md) §11 and [system_map_three_layers_60706286.plan.md](system_map_three_layers_60706286.plan.md) DL-11. This preflight is its concrete substrate.
- **No multi-rail abstraction layer beyond first Twilio adapter.** Concrete: e0 specifies the `RailInboundIngest` + `RailOutboundSend` + `RailStatusCallback` interfaces and Twilio's implementation. Adding a second rail (email, fax, RCS) means a second adapter sibling under `lib/external-rails/<vendor>/` — not a meta-adapter framework.
- **No reactions / read-receipts / rich-text BUILD.** Substrate ADMITS the child tables (§12.6) but UI/implementation lands e5+ when first concrete pressure surfaces.
- **No fax / care-team / internal-collab / patient-proxy / AI-Response-Assist build work.** Each is a separate preflight named in §20.
- **No RingCentral-clone UI features** (custom ringtones, keyboard shortcut UI, hold music UI, transfer-tone, background noise reduction, WiFi/data calling, full personal-phone-settings UI). Substrate admits via §15 taxonomy; UI deferred (§15.4 + §20).
- **No independent `chat_status` / `conversation_status` field.** Display chips are computed projections from backend state per §17.5 no-drift rule.

---

## §4 What this preflight proves (the 10 framing questions)

The substrate + adapter design below must concretely answer all 10 framing questions. Each is cross-referenced from the scenario matrix in §18 with explicit coverage tags.

| # | Framing question | Where answered |
|---|---|---|
| Q1 | When an unknown number texts the main line, does the inbound event land cleanly without forcing a patient row? | §6 4-layer model + §7 `external_communication_events` + `contact_identities` + §10 ops triage |
| Q2 | When that contact later becomes a patient, is the prior conversation linked retrospectively (LINK not MIGRATE)? | §7 `patient_projection_links` + §13.2 retroactive-link cascade + §10 routing |
| Q3 | When an EXISTING patient texts from a known number, does the inbound flow land in the patient's external_conversation thread without going through c2 `messages`? | §6 4-layer model + §10 routing + DL-12 invariant 17 inheritance §11 |
| Q4 | Is the inbound event-ledger immutable + auditable + replayable independent of conversation state? | §7 `external_communication_events` design + §8 rail-adapter contract |
| Q5 | Can ops staff claim / complete / escalate external-line conversations via a queue model parallel to internal_collaboration? | §7 `external_conversation_queue_state` + §11 DL-12 invariant 30 inheritance |
| Q6 | Does the design support linking, retrofitting, splitting, or merging contacts onto patient identity without losing history? | §7 `patient_projection_links` + §13.3 lifecycle state machine + §10 multi-match resolution |
| Q7 | Can outbound replies / templated lead-nurture sends be addressed to a `contact_identity` (pre-account) and a `patient_relationship` (post-account) with consistent threading? | §7 `external_conversation_messages` + §9 outbound discipline + §14.5 endpoint selection |
| Q8 | Does the substrate isolate marketing-vs-clinical/operational endpoints per Zone 68 (per-endpoint `intent_class` typing + operational state isolation)? | §7 `org_communication_endpoints` + §16 multi-brand operating modes + §10 routing |
| Q9 | Is consent-at-rail enforced (patient_consents per-intent-class, STOP/HELP propagation, marketing carve-out) at the rail layer, not just template layer? | §9 outbound discipline + §12.4 deterministic outbound 8-gate + §14.7 delivery-status propagation |
| Q10 | Does the design admit AI Response Assist drafting from external-line thread context per DL-12 invariant 39 WITHOUT making AI a participant? | §11 invariant 39 inheritance + §14.8 draft semantics ai_proposal + §12.4 distinguishes deterministic from AI |

Every scenario in §18 lists which framing question(s) it answers + which §12-17 guardrails it covers.

---

## §5 Doctrinal alignment table

| Doctrine | Where it lives | What e0 inherits |
|---|---|---|
| **DL-10 Identity / Relationship** | [system_map_three_layers_60706286.plan.md](system_map_three_layers_60706286.plan.md) §7.13 + [FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) §7.13 + [communications_topology.md](../../docs/architecture/communications_topology.md) §11 DL-10 substrate spine | Contact identity is Layer 1 above `patients`; `patient_relationship` is the per-relationship operational scope; brand is one of N scoping dimensions on `patient_relationship`. e0's `contact_identities` is Layer 1; `patient_projection_links` is the Layer-1-to-Layer-2/3 binder. |
| **DL-11 Three Messaging Surfaces** | [system_map_three_layers_60706286.plan.md](system_map_three_layers_60706286.plan.md) DL-11 + [communications_topology.md](../../docs/architecture/communications_topology.md) §12 | External-line is the third sibling (alongside c2 patient-facing chat and internal_collaboration). e0 stands up the external-line sibling substrate. |
| **DL-12 Lifecycle / Fax / AI / Template / Search / Visibility / Notification / Attachment / Queue / Coexistence / AI-Response-Assist** | [system_map_three_layers_60706286.plan.md](system_map_three_layers_60706286.plan.md) §1J.12 binding lock + [FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) §4.A/§5.3/§7.13.12/§7.14.9-10-18/§8.1 + [phase_4h_target_first_decision_record.md](../../docs/architecture/phase_4h_target_first_decision_record.md) §7.15 ADR + [communications_topology.md](../../docs/architecture/communications_topology.md) §12 DL-12 cross-references | All 40 binding clauses; §11 below details which apply to external-line and how. |
| **Radar Zone 68 — Single phone-number rail shared by marketing + clinical/operational SMS** | [v1_pressure_test_radar.md](../../docs/architecture/v1_pressure_test_radar.md) Zone 68 (refined by Zone 69 + 73 per DL-13) | Per-endpoint `intent_class` typing is substrate-binding; the rejected pattern is **unseparated intent**, not single-physical-number per se. Substrate enforces safe pattern via per-send intent_class + per-intent consent + per-intent STOP + intent-aware routing + full audit. Single-line marketing+clinical operations admitted IF substrate enforces this. |
| **DL-13 Rail-agnostic substrate spine + OMNI canonical + settings precedence + 8-gate + display projection** | [system_map_three_layers_60706286.plan.md](system_map_three_layers_60706286.plan.md) DL-13 lock + §1D.4 + §1G.12 + §1J.13 + §1N.9 + §1P.15 + §1Q.14.2 + §1V.11 + [FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) §4.B + §5 sibling #20 + §5.3(c) + §7.13.13 + §8.1 clauses 29-33 + [phase_4h_target_first_decision_record.md](../../docs/architecture/phase_4h_target_first_decision_record.md) §7.16 + [communications_topology.md](../../docs/architecture/communications_topology.md) §11 substrate spine + §12 DL-13 cross-references + [v1_pressure_test_radar.md](../../docs/architecture/v1_pressure_test_radar.md) zones 69-78 + [evolution_narrative.md](../../docs/architecture/evolution_narrative.md) Act XIV | **Five binding clauses** that emerged from THIS preflight's R1-R9 arc and promoted into core doctrine: (1) rail-agnostic substrate + vendor-confined adapter (external-line at `lib/external-rails/<provider>/`; broader pattern applies to labs / payments / EHR-export / pharmacy via their own adapter boundaries — NOT all under `lib/external-rails/`); (2) OMNI canonical SoT + vendor-adopt-not-write; (3) six-level settings precedence (law/consent > safety > endpoint > queue > user > device); (4) deterministic outbound 8-gate (endpoint-intent + consent + STOP/HELP + template/disclosure + quiet-hours + idempotency + rate-limit + prohibited-claims; AI confirmation NOT a gate); (5) display-projection-not-substrate (status chips computed, never independent fields). Plus DL-10 handle-vs-person extension + DL-12 invariant 31 5-disposition extension + 4-mode × 3-backend mode-agnosticism + sibling #20 `external_communications/`. **e0 inherits all of these as the substrate spine; e1 execution lands them in code.** |
| **c2 non-foreclosure constraint** | [PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) + [communications_topology.md](../../docs/architecture/communications_topology.md) §11 | `messages.patient_id NOT NULL` stays binding; external-line never merges into `messages`; projection is LINK via `patient_projection_links`. |
| **Pressure test radar — relevant existing zones** | [v1_pressure_test_radar.md](../../docs/architecture/v1_pressure_test_radar.md) | Zones 1, 17-25, 27-28, 30, 47-48, 53, 54, 56, 58, 59, 61, 63-68 apply or are inherited; **zones 69-78 (NEW per DL-13) explicitly added by this preflight's R1-R9 arc** — external-line rail-bypass / vendor-as-contact-source / chat_status-independent-field / multi-brand cross-leakage / STOP-cascading-across-intents / display projection drift / settings-precedence inversion / endpoint-policy-via-jsonb / voicemail-auto-files-to-chart / AI-as-participant drift. §19 lists potential additional zones surfaced by e1+ execution. |

---

## §6 The 4-layer model — concrete substrate mapping

External-line composes from four conceptual layers per [communications_topology.md](../../docs/architecture/communications_topology.md) §11 DL-10 substrate spine. e0 concretizes each layer:

| Layer | Conceptual role | Substrate (e0) | Notes |
|---|---|---|---|
| **Layer 0: Rail registry** | Type registry of communication rails (SMS / MMS / RCS / iMessage / email / fax / voice / WhatsApp / future) — abstract rail types, not endpoint instances | `communication_rails` (NEW, §7.1) | Adds vendor-agnostic rail TYPE rows; e0 seeds `sms`, `mms`, `voice`, `voicemail`, `fax` (fax adapter slot reserved per [communications_topology.md](../../docs/architecture/communications_topology.md) §13) |
| **Layer 1a: Endpoint instances** | Concrete phone numbers / sender IDs / fax lines / email addresses owned by org/brand/location/intent | `org_communication_endpoints` (NEW, §7.2) | One row per phone line / sender ID; carries label + intent_class + access scope + business hours + voicemail config + brand/practice/location/queue scoping per §14.1 + §16.1 |
| **Layer 1b: Contact identity** | Durable identity for an external party (phone number / email / external handle) BEFORE/WITHOUT patient match; admits family / spouse / shared phone / assistant via mark_shared / merge / split | `contact_identities` (NEW, §7.3) + future `contact_identity_handles` child (§13.1 admits) | OMNI is source of truth; Twilio address book is local convenience only per §13.5 |
| **Layer 1c: Rail event ledger** | Immutable append-only ledger of every inbound and outbound rail event, with raw vendor payload preserved | `external_communication_events` (NEW, §7.4) | `rail_provider` + `provider_event_id` + `raw_provider_payload` columns abstract vendor; Twilio webhook payload preserved as `raw_provider_payload` jsonb |
| **Layer 2: External conversation** | Conversation thread grouping rail events into a coherent inbox-row unit; carries display state, queue ownership, projection state | `external_conversations` (NEW, §7.5) + `external_conversation_messages` (NEW, §7.6) + `external_conversation_participants` (NEW, §7.7) + `external_conversation_queue_state` (NEW, §7.8) | Conversation = inbox row; messages = rendered units; participants = staff who claimed or were assigned; queue_state = ops routing |
| **Layer 3: Patient projection** | Optional link from a contact_identity / external_conversation to a `patient_relationship` once matched + audited; **LINK, never MIGRATE** per DL-12 invariant 17 | `patient_projection_links` (NEW, §7.9) | Carries from_contact_identity_id + to_patient_relationship_id + projection_kind + matched_by_staff_id + matched_at + confidence + method + audit + disposition_status |

**Data flow direction:** rail event → contact_identity (resolve or create) → external_conversation → optional projection. **Outbound direction:** domain origin (staff reply / rule fire / AI proposal accept) → external_conversation_messages → rail adapter → vendor send → status callback → delivery_status update.

---

## §7 Substrate sketches (9 new tables)

Column-level sketches only; no SQL. Each substrate names FKs to existing tables, indices required, and which §12-17 guardrails it serves.

### §7.1 `communication_rails` — rail type registry

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `slug` | text UNIQUE | Stable identifier: `sms`, `mms`, `rcs`, `imessage_business`, `whatsapp`, `voice`, `voicemail`, `fax`, `email` |
| `display_name` | text | Human-readable: "SMS", "Multimedia Messaging (MMS)", "Voice Call", "Voicemail", "Fax" |
| `capability_matrix` | jsonb | Rail-level capabilities per §15.1 layer 4: supports_media (bool), supports_reactions (bool), supports_read_receipts (bool), supports_delivery_confirmation (bool), supports_caller_id_branding (bool), max_message_chars (int), max_media_size_bytes (int), supports_voicemail_transcription (bool), supports_call_recording (bool) |
| `default_consent_class_required` | text | `marketing` / `clinical_operational` / `transactional` / `general` — drives §12.4 consent-at-rail check |
| `is_active` | bool | Allow e0 to admit rails without activating them; fax + voice rails seeded but not active per §20 deferrals |
| `created_at`, `updated_at` | timestamptz | |

**Indices:** `(slug)` UNIQUE.
**Seed at e1:** rows for `sms`, `mms` active=true; `voicemail`, `fax`, `voice`, `rcs`, `imessage_business`, `whatsapp`, `email` admitted active=false (slots reserved per [communications_topology.md](../../docs/architecture/communications_topology.md) §11 + §13).
**Serves:** Q1, Q4, Q8 + §11 DL-12 invariant 17 (per-substrate storage).

### §7.2 `org_communication_endpoints` — endpoint instances (phone lines, sender IDs, fax lines)

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `org_id` | uuid FK → org | Always required |
| `brand_id` | uuid FK → brand NULLABLE | per §16.1 scoping |
| `practice_entity_id` | uuid FK → practice_entity NULLABLE | per §16.1 scoping |
| `location_id` | uuid FK → location NULLABLE | per §16.1 scoping |
| `communication_rail_id` | uuid FK → communication_rails | Which rail type (sms / mms / voicemail / fax / etc.) |
| `rail_provider` | text | Vendor identifier: `twilio` / `messagebird` / `sinch` / etc. — for adapter routing (§8) |
| `provider_endpoint_id` | text | Vendor-side identifier (e.g., Twilio Phone Number SID, Twilio Messaging Service SID, vendor sender ID) |
| `phone_e164` | text NULLABLE | Normalized E.164 phone number (when applicable; null for email / fax-by-email / sender-ID rails) |
| `label` | text NOT NULL | Display label: "Somerset Front Desk", "Cultured Main Line", "Peptides On-Call", "Evo Billing" |
| `intent_class` | text NOT NULL CHECK | `clinical` / `marketing` / `billing` / `support` / `aftercare` / `front_desk` / `on_call` / `fax` / `legal_records` — Zone 68 enforcement |
| `default_queue_id` | uuid FK → queue NULLABLE | Default queue receiving inbound (queue substrate is future preflight #2 in [HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md](HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md); FK admitted, NULL OK in e0/e1) |
| `default_access_scope` | text CHECK | `broad_ops` / `front_desk_only` / `location_only` / `assigned_only` / `brand_only` — §12.3 endpoint-scoped access |
| `default_caller_id_display` | text | Branded caller ID where rail supports (e.g., "Cultured Front Desk") |
| `business_hours_ref` | jsonb | Timezone-aware business hours per §14.1 + §15.3; admits per-day open/close + holiday refs |
| `holiday_calendar_ref` | uuid NULLABLE | Future ref; admitted not built |
| `after_hours_behavior` | text CHECK | `voicemail` / `forward` / `auto_reply_only` / `silent` — §14.1 |
| `voicemail_enabled` | bool | §14.1 |
| `voicemail_greeting_ref` | text | Config ref (path/URL to recording artifact; recording UI is e5+ deferral per §15.4) |
| `voicemail_to_text_enabled` | bool | §14.1 |
| `voicemail_routing_queue_id` | uuid FK → queue NULLABLE | Where voicemail conversations route |
| `forwarding_rules` | jsonb | Time-of-day + on-call + escalation forwarding chain |
| `missed_call_behavior` | text CHECK | `auto_reply_sms` / `voicemail_prompt` / `escalate` / `silent` |
| `auto_reply_template_refs` | jsonb | Refs to auto-reply templates per business-hours state (open / after-hours / holiday) — must pass §12.4 8-gate |
| `escalation_rules` | jsonb | Per-endpoint escalation chain (SLA + on-call override + criticality-class override) |
| `recording_policy` | text CHECK | `disabled` / `staff_consent_required` / `dual_party_consent` / `all_calls` — jurisdiction-aware |
| `transcription_policy` | text CHECK | `disabled` / `staff_only_storage` / `chart_eligible_disposition` — DL-12 invariant 31 alignment |
| `blocked_numbers_list_ref` | uuid NULLABLE | Per-endpoint block list (future substrate; admitted) |
| `trusted_numbers_list_ref` | uuid NULLABLE | Per-endpoint trust list (future substrate; admitted) |
| `consent_requirements_ref` | jsonb | Per-intent-class consent class needed; aligns with `patient_consents.marketing_sms` per Zone 68 |
| `display_sender_policy` | text CHECK | `business_only` / `staff_name_in_body` / `staff_name_with_business` / `brand_only` / custom — §14.6 client-vs-staff sender separation |
| `is_active` | bool | Endpoint activation toggle (per §16.2 disabled-external-line-mode admits `is_active=false`) |
| `created_at`, `updated_at`, `created_by_staff_id`, `last_updated_by_staff_id` | | Audit |

**Indices:** `(org_id, brand_id, intent_class)`, `(rail_provider, provider_endpoint_id) UNIQUE`, `(phone_e164) UNIQUE NULLS NOT DISTINCT` (one phone_e164 per endpoint instance).
**Serves:** Q1, Q3, Q7, Q8, Q9 + Zone 68 + §12.3 + §14.1 + §15.5 + §16.1.

### §7.3 `contact_identities` — durable external-party identity layer

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `phone_e164` | text NULLABLE | Normalized phone (when applicable); indexed; first-class handle per §12.1 |
| `email_address` | text NULLABLE | Email handle (when applicable) |
| `external_handle` | text NULLABLE | WhatsApp / iMessage / RCS / social handle (when applicable) |
| `display_name` | text NULLABLE | Tagged / typed staff-given name; surfaces in §17 display identity |
| `display_name_source` | text CHECK | `inbound_self_id` / `staff_typed` / `web_form` / `migration_seed` / `verified_via_lookup` |
| `is_shared_handle` | bool | `true` if handle is explicitly multi-person (family / spouse / shared work line / admin) — §13.4 |
| `is_ambiguous` | bool | `true` if handle matches multiple plausible patients; staff must disambiguate per §13.3 mark_ambiguous |
| `lifecycle_state` | text CHECK | `create` / `update` / `verify` / `merge` / `split` / `mark_shared` / `mark_ambiguous` / `deactivate` / `linked` / `unlinked` per §13.3 |
| `source` | text CHECK | `scheduling_manual` / `intake_form` / `web_lead` / `staff_import` / `api_webhook` / `inbound_first_contact` / `lead_capture` / `migration_seed` per §13.1 |
| `source_raw_input` | text | Original raw input preserved for typo-trace (E.164-normalized goes to `phone_e164`; raw stays here) |
| `merged_into_contact_id` | uuid NULLABLE FK → contact_identities | Set when this row merged into canonical sibling (§13.3 merge) |
| `split_from_contact_id` | uuid NULLABLE FK → contact_identities | Set when split out from sibling (§13.3 split) |
| `deactivated_at` | timestamptz NULLABLE | Set when handle deactivated (number reassigned, etc.) |
| `created_at`, `updated_at`, `created_by_staff_id`, `last_updated_by_staff_id` | | Audit |

**Indices:** `(phone_e164)` (allows null; not unique because of mark_shared multi-row case + merge audit trail), `(email_address)`, `(external_handle)`, `(merged_into_contact_id)`, `(lifecycle_state)`, `(is_ambiguous, is_shared_handle)` partial index for triage UI.
**Audit child:** `contact_identity_lifecycle_events` (future child table; admitted not built in e0) capturing actor + timestamp + reason + prior state + evidence per §13.3.
**Serves:** Q1, Q2, Q6, Q7 + §12.1 search + §13 lifecycle.

### §7.4 `external_communication_events` — immutable rail event ledger

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `communication_rail_id` | uuid FK → communication_rails | Which rail type |
| `org_communication_endpoint_id` | uuid FK → org_communication_endpoints | Which endpoint |
| `rail_provider` | text | Vendor (`twilio` etc.) — denormalized for adapter routing |
| `provider_event_id` | text | Vendor-side message SID / call SID / event ID |
| `event_type` | text CHECK | `inbound_message` / `outbound_message` / `inbound_call_started` / `inbound_call_ended` / `outbound_call_started` / `outbound_call_ended` / `voicemail` / `missed_call` / `status_callback_delivered` / `status_callback_failed` / `status_callback_opted_out` / `inbound_fax` / `outbound_fax` |
| `direction` | text CHECK | `inbound` / `outbound` / `internal` (e.g., status callback) |
| `from_address` | text | E.164 / email / handle of sender |
| `to_address` | text | E.164 / email / handle of recipient |
| `received_at` | timestamptz | When OMNI received the rail event |
| `sent_at_rail` | timestamptz NULLABLE | When rail processed/sent (from rail callback) |
| `delivered_at_rail` | timestamptz NULLABLE | When carrier confirmed delivery |
| `raw_provider_payload` | jsonb | Full vendor webhook payload preserved verbatim (per §8 rail-adapter contract — adapter writes, domain reads) |
| `body_text` | text NULLABLE | Extracted body for indexing (full text from rail event) |
| `media_refs` | jsonb NULLABLE | MMS / RCS / WhatsApp media URLs/IDs (resolved into proper artifact substrate when conversation lands per §12.7) |
| `derived_external_conversation_id` | uuid NULLABLE FK → external_conversations | Set by conversation grouper (§10); NULLABLE because event ledger is upstream of conversation layer |
| `derived_contact_identity_id` | uuid NULLABLE FK → contact_identities | Set by identity resolver (§10); same logic |
| `signature_verified` | bool | True if rail-adapter validated webhook signature per §8 |
| `is_immutable_after` | timestamptz | Append-only constraint per §11 DL-12 invariant 17 + §12.5 immutability |

**Indices:** `(provider_event_id, rail_provider) UNIQUE`, `(org_communication_endpoint_id, received_at DESC)`, `(direction, event_type, received_at DESC)`, `(derived_contact_identity_id)`, `(derived_external_conversation_id)`.
**Constraints:** append-only — UPDATE forbidden via RLS / trigger; only derivation columns (`derived_*`) may be set once by the conversation grouper after initial insert.
**Serves:** Q1, Q3, Q4 + §8 rail-adapter contract.

### §7.5 `external_conversations` — conversation thread grouping

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `org_communication_endpoint_id` | uuid FK → org_communication_endpoints | Which endpoint owns this conversation |
| `contact_identity_id` | uuid FK → contact_identities | Which external party is on the conversation |
| `subject` | text NULLABLE | Optional thread subject (rarely used for SMS, more relevant for email rails) |
| `intent_class_at_open` | text | Snapshot of endpoint intent_class when conversation opened (e.g., `marketing` vs `clinical`) |
| `status` | text CHECK | `open` / `claimed` / `awaiting_response` / `closed` / `archived` / `spam` / `entered_in_error` / `restricted` per §12.5 + §14.3 |
| `sensitivity_classification` | text CHECK | `routine` / `sensitive` / `restricted` / `on_call_escalation` / `projected_clinical` — drives §12.1-2 search audit + §15.2 precedence |
| `first_inbound_event_id` | uuid FK → external_communication_events | First rail event in the conversation |
| `last_event_at` | timestamptz | For inbox sort |
| `last_inbound_at`, `last_outbound_at` | timestamptz NULLABLE | For SLA tracking |
| `projected_patient_relationship_id` | uuid NULLABLE | Set when projection lands per §13 + §17.1 display identity precedence |
| `projection_disposition_status` | text NULLABLE CHECK | `not_projected` / `linked` / `attached_to_patient_context` / `chart_filed` / `safety_task_created` / `rejected_spam_or_wrong_patient` per §12.8 5-disposition + §7.9 |
| `display_sender_policy_override` | text NULLABLE | Per-conversation override of endpoint default per §14.6 |
| `legal_hold` | bool | DL-12 invariant 23 retention discipline |
| `archived_at`, `archived_by_staff_id`, `archive_reason` | NULLABLE | §12.5 archive semantics |
| `entered_in_error_at`, `entered_in_error_by_staff_id`, `entered_in_error_reason` | NULLABLE | §12.5 |
| `created_at`, `updated_at` | timestamptz | |

**Indices:** `(org_communication_endpoint_id, status, last_event_at DESC)`, `(contact_identity_id)`, `(projected_patient_relationship_id)`, `(sensitivity_classification)`, `(intent_class_at_open)`.
**Serves:** Q1, Q2, Q3, Q5, Q6 + §6 layer 2 + §10 routing + §17.1 display identity.

### §7.6 `external_conversation_messages` — message substrate (parallel to c2 `messages`)

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `external_conversation_id` | uuid FK → external_conversations | |
| `external_communication_event_id` | uuid FK → external_communication_events | Source rail event (1:1 for normal cases; 1:N for multi-event composition, e.g., MMS-split-into-N) |
| `direction` | text CHECK | `inbound` / `outbound` |
| `body` | text | Final message body (immutable post-send per §12.5) |
| `body_tsv` | tsvector GENERATED | Full-text search index per §12.2 (PostgreSQL tsvector; future migration to opensearch admitted without substrate change) |
| `author_staff_id` | uuid NULLABLE FK → staff_profiles | Staff who composed outbound (NULL for inbound or automation-fired) |
| `automation_actor_id` | uuid NULLABLE | Rule / automation / template ID when source is rule_fired |
| `source` | text CHECK | `inbound_from_rail` / `manual` / `template` / `rule_fired` / `ai_drafted` / `ai_assisted` / `automated` per §14.9 |
| `template_id` | uuid NULLABLE | Source template ref (when applicable) |
| `rule_id` | uuid NULLABLE | Source rule ref (when applicable) |
| `ai_assist_session_id` | uuid NULLABLE | AI Response Assist session ref (per DL-12 invariant 39 + §14.8 ai_proposal draft) |
| `outbound_endpoint_id` | uuid NULLABLE FK → org_communication_endpoints | Endpoint the outbound was sent from (NULL for inbound) |
| `display_sender_policy` | text | Snapshot at send-time per §14.6 |
| `sent_as_label` | text NULLABLE | Computed display: "Cultured Front Desk · +1-248-555-XXXX" |
| `client_message_id` | text NULLABLE | Idempotency key per c2 + §12.4 + DL-12 invariant 17 |
| `delivery_status` | text CHECK | `queued` / `sent` / `delivered` / `failed` / `undelivered` / `rejected` / `blocked` / `opted_out` / `carrier_filtered` / `invalid_number` / `media_failed` per §14.7 |
| `delivery_status_updated_at` | timestamptz | |
| `provider_event_id` | text NULLABLE | Vendor message SID (denormalized for fast lookup) |
| `status` | text CHECK | `draft_queued_outbound` / `sent` / `received` / `cancelled` / `entered_in_error` / `archived` / `restricted` / `correction_of` per §12.5 |
| `cancelled_by_staff_id`, `cancel_reason`, `cancelled_at` | NULLABLE | §12.5 queued-cancel semantics |
| `entered_in_error_by_staff_id`, `entered_in_error_reason`, `entered_in_error_at` | NULLABLE | §12.5 |
| `correction_of_message_id` | uuid NULLABLE FK | Set when this message is a correction of another per §12.5 correction semantics |
| `sent_at`, `received_at`, `created_at`, `updated_at` | timestamptz | |

**Indices:** `(external_conversation_id, created_at)`, `(body_tsv) USING GIN` (full-text §12.2), `(provider_event_id)`, `(client_message_id, external_conversation_id) UNIQUE NULLS NOT DISTINCT` (idempotency), `(author_staff_id)`, `(automation_actor_id)`, `(delivery_status)`, `(status)`, `(sensitivity_classification via FK)` (for audit queries).
**Child tables (future, admitted in e0; built e5+):** `external_message_reactions`, `external_message_read_state`, `external_message_interactions`, `external_message_attachments` (first-class per §12.6 + §12.7 + DL-12 invariant 24).
**Serves:** Q3, Q4, Q7, Q9, Q10 + §12.2 search + §12.4 deterministic outbound + §12.5 immutability + §14.7 delivery status + §14.9 traceability.

### §7.7 `external_conversation_participants` — staff participation in external conversations

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `external_conversation_id` | uuid FK → external_conversations | |
| `staff_id` | uuid FK → staff_profiles | |
| `role` | text CHECK | `owner` / `assigned` / `collaborator` / `observer` / `escalation_target` |
| `claimed_at`, `unclaimed_at` | timestamptz NULLABLE | Per DL-12 invariant 30 claim/complete state machine |
| `last_seen_at` | timestamptz | For read state computation |
| `notification_preference_override` | jsonb NULLABLE | Per-conversation notification override (subordinate to §15.2 precedence) |
| `removed_at`, `removed_by_staff_id`, `removed_reason` | NULLABLE | Audit |

**Indices:** `(external_conversation_id, staff_id) UNIQUE WHERE removed_at IS NULL`, `(staff_id, claimed_at)`.
**Serves:** Q5 + §11 DL-12 invariant 30 + §14.8 draft semantics (staff who can see personal drafts).

### §7.8 `external_conversation_queue_state` — ops routing / ownership state

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `external_conversation_id` | uuid FK → external_conversations UNIQUE | One queue state per conversation (one-to-one) |
| `assigned_queue_id` | uuid FK → queue NULLABLE | Future queue substrate; FK admitted, NULL OK at e1 |
| `assigned_team_kind` | text | `marketing_ops` / `front_desk` / `care_team_triage` / `billing` / `clinical_oncall` / `default_triage` / `spam_quarantine` |
| `state` | text CHECK | `delivered_to_queue` / `unread` / `seen` / `claimed` / `completed` / `escalated` / `overdue` per DL-12 invariant 30 + §14.3 voicemail state machine |
| `claimed_by_staff_id` | uuid NULLABLE FK | |
| `claimed_at`, `completed_at`, `escalated_at` | timestamptz NULLABLE | |
| `escalation_reason`, `escalated_by_staff_id`, `escalation_target_staff_id` | NULLABLE | DL-12 invariant 22 + §11 |
| `sla_deadline_at` | timestamptz NULLABLE | When the work is overdue |
| `priority_class` | text CHECK | `routine` / `expedited` / `urgent` / `safety_critical` per DL-12 invariant 21 |
| `callback_needed`, `callback_completed_at` | NULLABLE | §14.3 voicemail/missed-call state |
| `audit_trail` | jsonb | State-transition log |

**Indices:** `(external_conversation_id) UNIQUE`, `(assigned_queue_id, state, sla_deadline_at)`, `(claimed_by_staff_id, state)`, `(priority_class, state, sla_deadline_at)`.
**Serves:** Q5 + §14.3 voicemail/missed-call state machine + §10 ops triage routing rules.

### §7.9 `patient_projection_links` — lead-to-patient projection audit trail

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `from_contact_identity_id` | uuid FK → contact_identities | |
| `to_patient_relationship_id` | uuid FK → patient_relationship | DL-10 §7.13 layer 3 |
| `projection_kind` | text CHECK | `link` / `attach_to_patient_context` / `chart_file` / `safety_task` / `reject_spam_or_wrong_patient` per §12.8 5-disposition |
| `matched_by_staff_id` | uuid FK → staff_profiles | Who performed the projection (capability-gated per §15.5) |
| `matched_at` | timestamptz | |
| `match_method` | text CHECK | `phone_match` / `email_match` / `handle_match` / `staff_manual` / `web_form_link` / `appointment_link` / `retroactive_link` |
| `match_confidence` | text CHECK | `high` / `medium` / `low` / `ambiguous_resolved` |
| `disposition_status` | text CHECK | `pending_review` / `confirmed` / `reverted` / `disputed` |
| `reverted_at`, `reverted_by_staff_id`, `reversion_reason` | NULLABLE | §12.5 archive-not-delete discipline applied to projection |
| `evidence` | jsonb | Supporting evidence: matching call/SMS reference, web form ref, appointment ref, identity verification artifact ref |
| `audit_trail` | jsonb | Full state-transition log |
| `created_at`, `updated_at` | timestamptz | |

**Indices:** `(from_contact_identity_id, disposition_status)`, `(to_patient_relationship_id)`, `(matched_by_staff_id, matched_at)`, `(projection_kind, disposition_status)`.
**Serves:** Q2, Q6 + §6 layer 3 + §12.8 5-disposition + §13.2 retroactive linking + §17.1 display identity precedence.

---

## §8 Rail-adapter contract — Twilio as first concrete adapter

The substrate above is rail-agnostic. The rail-adapter layer is where vendor specifics live. **e0 specifies the contract; e1 implements the Twilio adapter; future rails compose by adding sibling adapter directories.**

### §8.1 Adapter directory structure

```
lib/external-rails/
  index.ts                              # Rail registry + adapter resolution by `communication_rails.slug` + `rail_provider`
  contracts.ts                          # Rail-agnostic interfaces (RailInboundIngest, RailOutboundSend, RailStatusCallback, RailCapabilityProbe)
  twilio/
    index.ts                            # Exports TwilioRailAdapter implementing all interfaces
    TwilioInboundWebhookHandler.ts      # Webhook signature verification + payload normalization → external_communication_events insert
    TwilioOutboundSendAdapter.ts        # external_conversation_messages → Twilio Messages API send
    TwilioStatusCallbackHandler.ts      # Status callback → external_conversation_messages.delivery_status update
    TwilioMessagingServiceAdapter.ts    # A2P 10DLC / Messaging Service routing
    TwilioVoiceCallbackHandler.ts       # (e3+) Voice / voicemail webhook normalization
    signatures.ts                       # Webhook signature verification helpers (Twilio-specific)
    payloads.ts                         # Twilio webhook payload shapes (TypeScript types from Twilio SDK)
    errors.ts                           # Twilio-error-class → domain-error-class mapping
  messagebird/  (future, slot reserved)
  sinch/        (future, slot reserved)
  email-rails/  (future, slot reserved)
  fax-rails/    (future, slot reserved per communications_topology §13)
```

### §8.2 Rail-agnostic interfaces (TypeScript signatures only)

```ts
// lib/external-rails/contracts.ts (sketch, not implementation)

export interface RailInboundIngest {
  // Verify incoming webhook signature.
  verifyWebhookSignature(rawRequest: RailWebhookRequest): Promise<SignatureVerifyResult>
  // Normalize vendor payload into an external_communication_events insert.
  normalizeInboundPayload(rawPayload: unknown): Promise<NormalizedExternalCommunicationEvent>
}

export interface RailOutboundSend {
  // Send an outbound message via this rail. Idempotent via client_message_id.
  send(params: {
    externalConversationMessageId: string
    clientMessageId: string
    outboundEndpointId: string
    toAddress: string
    body: string
    mediaUrls?: string[]
  }): Promise<RailSendResult>
}

export interface RailStatusCallback {
  // Normalize vendor status callback payload into a delivery_status update.
  normalizeStatusCallback(rawPayload: unknown): Promise<NormalizedDeliveryStatusUpdate>
}

export interface RailCapabilityProbe {
  // Return rail capabilities for capability matrix in communication_rails.capability_matrix.
  describeCapabilities(): RailCapabilityMatrix
}

export interface RailAdapter
  extends RailInboundIngest, RailOutboundSend, RailStatusCallback, RailCapabilityProbe {
  readonly railProvider: string                 // e.g., "twilio"
  readonly supportedRailSlugs: readonly string[] // e.g., ["sms", "mms", "voice", "voicemail"]
}
```

### §8.3 Adapter boundary discipline

- **Domain code never imports Twilio (or any other vendor) directly.** Outside `lib/external-rails/twilio/`, no `import * as twilio from 'twilio'`, no `import { Twilio } from 'twilio'`, no Twilio-namespaced types.
- **Domain code uses `RailAdapter`-typed values resolved via `lib/external-rails/index.ts`.** Resolution happens at Twilio inbound webhook entry (Next.js API route), at outbound send dispatch, and at status callback entry.
- **Twilio webhook entry routes** (e.g., `app/api/webhooks/rails/twilio/inbound-sms/route.ts`) import `TwilioInboundWebhookHandler` directly because they ARE the Twilio boundary. They write to `external_communication_events` via domain repositories — not to substrate-bypassing patterns.
- **The webhook signature verification step is rail-adapter scope** — domain code reads `external_communication_events.signature_verified` boolean but never re-verifies.
- **Vendor SDK errors are mapped to domain error classes** in `lib/external-rails/twilio/errors.ts` so domain code raises `RailDeliveryFailedError` / `RailInvalidNumberError` / `RailOptedOutError` rather than catching Twilio-specific exceptions.

### §8.4 Idempotency at adapter layer

- Twilio webhooks may retry. The adapter uses `external_communication_events.(provider_event_id, rail_provider) UNIQUE` to dedupe.
- Outbound sends from domain use `external_conversation_messages.client_message_id` for at-most-once semantics matching c2 doctrine.
- Status callbacks may arrive out of order; adapter applies state transitions per a state-machine table (`queued` → `sent` → `delivered` is forward-only; later out-of-order `sent` callback on a `delivered` row is dropped, not regressed).

### §8.5 Future rail composition

To add a second rail (e.g., MessageBird for international SMS, or eFax for fax):
1. Create `lib/external-rails/<vendor>/` mirroring the Twilio structure.
2. Implement the `RailAdapter` interface.
3. Insert a `communication_rails` row (if a new rail TYPE) or reuse existing rail type and just register a new `rail_provider` value.
4. Register endpoint instances in `org_communication_endpoints` with `rail_provider = '<vendor>'`.
5. Register the adapter in `lib/external-rails/index.ts` resolver.

**No substrate schema change.** The 9 substrate tables stay the same. This is the rail-agnostic-substrate / vendor-confined-adapter principle in concrete form.

---

## §9 Outbound discipline (rail-layer enforcement)

Every outbound message — manual, template, rule-fired, AI-drafted, AI-assisted, automated — passes through a single dispatch layer that enforces ALL the following at the rail layer (not just at the template / UI layer). This implements §12.4 8-gate enforcement + Zone 68 + DL-12 invariant 21 criticality override.

| Gate | Rule | Source clause |
|---|---|---|
| 1. Endpoint intent class match | Marketing rule → marketing endpoint; clinical/ops rule → clinical/ops endpoint; cross-intent send rejected | §12.4 + Zone 68 |
| 2. Consent-at-rail | `patient_consents.marketing_sms = true` for marketing-class to known patient_relationships; web-form opt-in qualifies for leads | §12.4 + Zone 68 |
| 3. STOP / HELP / opt-out suppression | Per-endpoint + per-intent-class suppression state; marketing STOP does NOT silence clinical-critical | §12.4 + Zone 68 + DL-12 invariant 21 |
| 4. Template / disclosure governance | Brand identification, opt-out instructions, prohibited-claims floor enforced via template registry per §1Q.14 | §12.4 + DL-12 invariant 12 |
| 5. Quiet-hours / send-window | Timezone-aware per-endpoint business hours; clinical-critical / safety-criticality MAY override per DL-12 invariant 21 | §12.4 + DL-12 invariant 21 + §1Q.21 |
| 6. Idempotency | `client_message_id` + payload fingerprint dedup per c2 doctrine | §12.4 + DL-12 invariant 17 |
| 7. Rate-limit | Per-contact + per-endpoint + per-rule windowed limits (prevents auto-reply storm) | §12.4 + §14.4 |
| 8. Prohibited-claims floor | No medical-claim / drug-name / outcome-promise in marketing templates | §12.4 + DL-12 invariant 12 |

**AI confirmation requirement (DL-12 invariant 39 distinction):** AI-DRAFTED (non-deterministic) outbound requires human approval at draft-acceptance step. Deterministic rule/template outbound passing all 8 gates does NOT require AI confirmation. This preserves RingCentral-class automation.

**Dispatch failure modes** are captured in `external_conversation_messages.delivery_status` per §14.7 state machine and trigger §10 ops triage routing rules.

---

## §10 Ops triage routing rules

Inbound rail events route to queue states based on a decision table evaluated at the conversation-grouper layer (after `external_communication_events` insert, before `external_conversation_queue_state` insert/update).

| Inbound situation | Endpoint intent_class | Contact identity status | Route to | Notes |
|---|---|---|---|---|
| Unknown sender, marketing endpoint | `marketing` | new `contact_identity` (no patient projection) | `marketing_ops` triage queue | Per Zone 68 marketing-inbound goes to marketing ops |
| Unknown sender, front-desk endpoint | `front_desk` | new `contact_identity` | `front_desk` triage queue, `default_access_scope = broad_ops` | Default-broad-visibility per §12.3 |
| Unknown sender, clinical endpoint | `clinical` / `on_call` | new `contact_identity` | `care_team_triage` queue | Patient-link workflow required before patient context applied |
| Known sender (matched contact_identity, no patient projection) | any | `contact_identity` exists, no `patient_relationship` link | endpoint default_queue based on `intent_class` | Preserves prior conversation history |
| Known sender (linked patient_relationship) | `clinical` / `on_call` | `patient_projection_links` exists | conversation owner per `patient_relationship` care-team-coverage layer (future preflight #2; e0 falls back to endpoint default_queue) | Per §17.1 display identity shows patient name |
| Known sender (linked patient_relationship) | `marketing` | `patient_projection_links` exists | `marketing_ops` queue | Marketing-class never auto-routes to clinical owner |
| STOP keyword received | any | any | suppress + mark `opted_out` per-intent-class; no auto-reply; emit `external_communication_events(event_type=status_callback_opted_out)` | Per §12.4 + Zone 68 |
| HELP keyword received | any | any | route help-template auto-reply only; no human triage required | Per §12.4 |
| Spam-classified (rail-side or staff-marked) | any | any | `spam_quarantine` queue, conversation status `spam` | Audit preserved per §12.5 archive semantics |
| Voicemail with transcription | `clinical` / `front_desk` / etc. | as above | `voicemail_routing_queue_id` from endpoint, state `received` → `transcription_pending` → `transcribed` → `unread` → `listened` → `claimed` | §14.3 voicemail state machine |
| Missed call (no voicemail) | as above | as above | `missed_call_behavior` from endpoint (auto-reply SMS / voicemail prompt / escalate / silent) | §14.1 + §14.4 |

**Sensitivity classification** is set on `external_conversations.sensitivity_classification` at grouping time based on: endpoint intent_class (`clinical` → `sensitive` default), staff-flag override, projected_patient_relationship.sensitivity flag, message body classifier (future; e0 admits column, lands later).

**Access enforcement** evaluates `org_communication_endpoints.default_access_scope` + `external_conversations.sensitivity_classification` + staff capabilities at every list/search/retrieve. §12.3.

---

## §11 DL-12 invariant inheritance map

Clause-by-clause: how each DL-12 binding applies to external-line. Where the invariant directly governs e0 substrate, the table lists which §7 table / §12-17 clause carries the binding.

| Invariant # | DL-12 binding (summarized) | External-line inheritance |
|---|---|---|
| 1 | Staff deactivation discipline | `external_conversation_participants` admits `removed_at` + audit; staff deactivation cascades by capability-revocation, not by row delete |
| 2 | Queue ownership configurability | `external_conversation_queue_state.assigned_queue_id` + `assigned_team_kind` — never hardcoded; queue substrate is future preflight #2 |
| 3 | Thread status state machine | `external_conversations.status` per §12.5 + `external_conversation_queue_state.state` per §14.3 |
| 4 | Waiting-on semantics | `external_conversations.status = awaiting_response` + `last_inbound_at` / `last_outbound_at` |
| 5 | Accountable ownership | `external_conversation_participants.role = owner` + `external_conversation_queue_state.claimed_by_staff_id` |
| 6 | Retention class | `external_conversations.legal_hold` + transcription_policy via endpoint + DL-12 archive-not-delete per §12.5 |
| 7 | Patient-facing thread lifecycle | External-line is the rail surface for pre-account; projected conversations follow DL-12 patient-facing lifecycle via `patient_projection_links` |
| 8 | Admin / CMO / IT intervention | All `entered_in_error_*` + `archived_*` + `restricted_*` actions on `external_conversations` and `external_conversation_messages` require capability + reason + audit per §12.5 + §15.5 |
| 9 | Patient-facing template governance | Templates fired from external-line pass through §9 outbound dispatch + §1Q.14 template registry — same governance as c2 |
| 10 | Internal snippet vs patient template | External-line outbound is patient-facing; internal_collaboration snippets are separate sibling substrate and do not appear here |
| 11 | Actor type taxonomy | `external_conversation_messages.source` + `author_staff_id` / `automation_actor_id` + `ai_assist_session_id` per primitive #1 extension (per DL-12 §4.A) |
| 12 | Prohibited claims | §9 gate 8 enforced at rail dispatch |
| 13 | Provenance + anti-noise | `external_conversation_messages.source` + `template_id` / `rule_id` / `ai_assist_session_id` + delivery_status + audit; rate-limit gates per §9 + §14.4 |
| 14 | AI participation bounds | AI never autonomously sends; only drafts proposals visible per §14.8 ai_proposal; staff explicitly accepts per DL-12 invariant 39 |
| 15 | Patient template approval | Same template registry as c2 |
| 16 | System / AI thread provenance | `external_conversation_messages.source` admits `ai_drafted` / `ai_assisted` / `automated` / `rule_fired` + audit chain |
| **17** | **Per-substrate storage** | **CRITICAL**: external-line stays in `external_conversation_messages`; NEVER migrates into c2 `messages`; projection LINKS via `patient_projection_links` per §6 layer 3 |
| 18 | Cross-substrate search projection | `external_conversation_messages.body_tsv` + future cross-substrate index admitted per §12.2 |
| **19** | **Visibility / access governance** | Per-conversation `sensitivity_classification` + endpoint `default_access_scope` + capability-gated search audit per §12.1-2 |
| 20 | Patient/object-linked internal threads | N/A for external-line (different sibling); but external-line conversations MAY be linked from internal threads per `internal_thread_object_links` (DL-11 + DL-12) |
| **21** | **Notification prefs + criticality override** | §15.2 precedence hierarchy: compliance > safety > endpoint > queue > user > device; clinical-critical overrides quiet-hours per §12.4 gate 5 |
| 22 | Escalation paths | `external_conversation_queue_state.escalated_*` columns + endpoint escalation_rules + on-call coverage layer (future preflight #2) |
| **23** | **Edit history + retraction** | §12.5 immutability state machine: draft (delete OK) / queued (cancel with audit) / sent or received (immutable) / entered_in_error (admin action with audit) / correction (new message, never rewrite) |
| **24** | **Attachments first-class** | Future `external_message_attachments` child table; §12.7 + §14 media discipline; never JSON blob on message metadata |
| 25 | Preview privacy | Endpoint-scoped access + sensitivity_classification + per-substrate RLS forbid preview leakage |
| 26 | Legal hold | `external_conversations.legal_hold` + DL-12 retention class binding |
| 27 | Patient-facing rich-media parity | §12.7 + §14 media parity (photos / annotated images / PDFs / video where rail capability allows) |
| 28 | Thread kind parameterization | External-line is its own thread kind; doesn't conflict with c2 thread_kind |
| 29 | Internal membership vs patient-visible roster | External-line participants are staff (`external_conversation_participants`); patient sees only the conversation, not the staff list |
| **30** | **Queue-routed work state machine** | `external_conversation_queue_state.state` + §14.3 voicemail state machine; claim/complete/escalate per DL-12 |
| 31 | Three-state attachment lifecycle | §12.8 + §14 (chat-attachment → reviewed/classified → filed-to-chart via capability-gated disposition) |
| **32** | **iOS-flattened vs OMNI-native markup** | §12.8 + §14 (iOS-flattened-pre-upload IS source artifact; OMNI-native markup preserves original + derives annotation) |
| 33 | Not-a-consequence-free-backchannel culture | Outbound traceability per §14.9; AI/system provenance per §11.16 |
| **34** | **Markup discipline / PDFs stricter** | §12.7 + §12.8 (PDFs always preserve original; never overwrite source) |
| 35 | Patient-visible video pipeline | §12.7 + §14 (secure-portal-link for large/PHI-sensitive media on SMS/MMS) |
| 36 | Patient-visible roster on projection | When external_conversation projects to patient_relationship, patient sees that conversation per care-team-coverage roster (future preflight #2) |
| 37 | Care-team / coverage-layer-driven membership | External-line conversation membership derives from queue assignment + endpoint scope, NEVER hardcoded; future care-team substrate fully feeds membership |
| 38 | Enterprise platform coexistence | External-line is rail-class infrastructure (carrier-grade); enterprise platforms (Teams / Slack / M365 / Workspace) coexist via internal_collaboration sibling, not external-line |
| **39** | **AI Response Assist** | DL-12 invariant 39 inherits to external-line: AI drafts external-line replies as `ai_proposal` drafts (§14.8); staff must accept; AI is never participant |
| 40 | Compliant workflow easier than workaround | External-line outbound UX must be at-least-RingCentral-parity per §12 (search, full-text, deterministic outbound without AI gating); workaround = staff using personal phones is the failure mode this prevents |

---

## §12 External-line operator parity / RingCentral feature parity guardrails

Eight binding clauses that bind external-line to operator-parity standards. Not new doctrine — extension of DL-10/11/12 + Zone 68 to operator workflows. Each clause names which substrate column / table / interface carries the binding and which phase implements it.

### §12.1 Searchable unlinked phone / contact history

Contact handles are first-class and indexed: `contact_identities.phone_e164` (normalized E.164), `contact_identities.email_address`, `contact_identities.external_handle` all carry their own indices. Search supports: full E.164 match, partial-number / fuzzy-prefix match, name (when `display_name` populated), date range, endpoint, status, queue/staff, lead-source / intake-source / campaign-ref (when known via web-form integration).

Search results are filtered through `org_communication_endpoints.default_access_scope` + `external_conversations.sensitivity_classification` + staff capabilities. Access to **restricted / sensitive / projected-clinical** conversations is **auditable**: every search hit on those classes emits an `audit_events` row with reason_code (compliance / break_glass requires explicit `reason_code` + capability). Normal-class searches by authorized ops staff are NOT individually audited (volume reasons), but search activity is aggregated for anomaly detection.

**Substrate dependence:** `contact_identities` (§7.3) + `external_conversations.sensitivity_classification` (§7.5) + `audit_events` table (existing).
**Phase:** e1 ships unaudited normal-class search; e2 ships audited break-glass + sensitivity-filtered search.

### §12.2 Full-text message search

`external_conversation_messages.body_tsv` is a `tsvector GENERATED ALWAYS AS to_tsvector('english', body) STORED`, GIN-indexed. Search supports phrase, keyword, boolean operators; filter combinators include endpoint, contact_identity, projected_patient_relationship, queue state, date range, staff_author_id, direction (inbound/outbound), source (manual/template/rule/ai_drafted/ai_assisted), delivery_status, sensitivity_classification.

**Cross-substrate projection (DL-12 invariant 18):** search UI may union external-line + c2 + internal_collaboration result sets at the application layer per scope/capability. **NOT a reason to merge substrates.** Future opensearch/Elastic index can replace tsvector without substrate schema change because all message tables already carry the same denormalized fields.

**Audit:** Same rules as §12.1 — sensitivity-class hits are audit-logged; break-glass requires reason_code.
**Substrate dependence:** `external_conversation_messages.body_tsv` (§7.6) + GIN index.
**Phase:** e1 ships tsvector full-text search; e2 adds audit-logged sensitivity filtering; e5+ optional opensearch projection.

### §12.3 Endpoint-scoped access (configurable broad-vs-narrow)

`org_communication_endpoints.default_access_scope` admits five values: `broad_ops` (any front-desk / ops / admin can see and reply), `front_desk_only` (front-desk capability required), `location_only` (staff with location-scoped access), `assigned_only` (staff explicitly assigned via `external_conversation_participants`), `brand_only` (brand-scoped per §16.3 cross-brand discipline).

`external_conversations.sensitivity_classification` overrides endpoint scope: `restricted` or `projected_clinical` conversations require relationship/object/capability-scoped access regardless of endpoint default. Marketing endpoints (`intent_class = marketing`) default to `marketing_ops` scope, not broad-ops, per Zone 68.

**Default for front-desk / client-facing main lines:** `broad_ops` — front-desk operating tempo requires it. Default for clinical / billing / restricted endpoints: narrower per intent_class. Configurable per endpoint at endpoint creation/edit time by capability-gated admin (§15.5).

**Substrate dependence:** `org_communication_endpoints.default_access_scope` + `external_conversations.sensitivity_classification` + capability registry (existing).
**Phase:** e1 ships static endpoint scope; e2 ships sensitivity-class override; e3+ ships per-conversation override + break-glass + audit.

### §12.4 Deterministic rule / template outbound WITHOUT AI approval (8-gate enforcement)

Rule-fired and template-fired external-line outbound creates or appends to an `external_conversation` WITHOUT AI approval — provided ALL 8 gates pass (§9 lists them):

1. Endpoint intent class match (marketing → marketing endpoint; clinical/ops → clinical/ops endpoint).
2. Consent-at-rail (per-intent-class `patient_consents`; web-form opt-in qualifies for marketing leads).
3. STOP / HELP / opt-out suppression (per-endpoint + per-intent-class; marketing-STOP does NOT silence clinical-critical).
4. Template / disclosure governance (brand identification, opt-out instructions, prohibited-claims floor — per §1Q.14 template registry).
5. Quiet-hours / send-window (per-endpoint timezone-aware business hours; clinical-critical / safety-criticality MAY override per DL-12 invariant 21).
6. Idempotency (`client_message_id` + payload fingerprint dedup per c2 doctrine + DL-12 invariant 17).
7. Rate-limit (per-contact + per-endpoint + per-rule windowed limits — prevents auto-reply storm).
8. Prohibited-claims floor (no medical-claim / drug-name / outcome-promise in marketing templates per DL-12 invariant 12).

If any gate fails, send is rejected; rejection is captured as `external_conversation_messages.delivery_status = rejected` + audit reason. AI-DRAFTED outbound (non-deterministic) requires human approval at draft-acceptance step per §14.8 ai_proposal — not in the 8-gate flow.

**Substrate dependence:** §9 dispatch layer + `external_conversation_messages.delivery_status` + audit.
**Phase:** e1 ships gates 1, 2, 3, 6, 7, 8; e2 adds gates 4 + 5 (full template registry + business-hours-aware send-window); e3+ adds AI-drafted path.

### §12.5 Immutable message history (archive / hide / restrict / entered-in-error, no true delete)

Raw rail events (`external_communication_events`) are append-only and append-only-after-derivation: UPDATE forbidden via RLS/trigger; only the conversation grouper may set derivation columns (`derived_external_conversation_id`, `derived_contact_identity_id`) once. Sent/received messages (`external_conversation_messages` with `status IN ('sent', 'received')`) are immutable for audit. Lifecycle paths:

- `draft_queued_outbound` → `cancelled` (queued but not yet sent → staff cancels with audit reason). Allowed.
- `draft_queued_outbound` → `sent` (rail accepted send). Transitions to immutable.
- `sent` / `received` → no true delete. UI may `archived` (`archived_at` + `archived_by_staff_id` + `archive_reason`) or `restricted` (capability-gated; sensitivity bump) or `entered_in_error` (admin/compliance action with `entered_in_error_reason` + reason_code).
- Correction sends a new `external_conversation_messages` row with `correction_of_message_id` set; never rewrites the original.

Same rules apply at the conversation level (`external_conversations.status` admits `archived` / `restricted` / `entered_in_error` / `spam` per §7.5).

**Substrate dependence:** `external_communication_events` append-only + `external_conversation_messages` status state machine + audit columns + DL-12 invariant 23 retraction discipline.
**Phase:** e1 ships full immutability; e2 ships entered-in-error + restrict capability-gated.

### §12.6 Rail-capability-gated rich-media / reactions / read receipts (first-class child records, not JSON metadata)

OMNI-native surfaces (the inbox UI) may render reactions, read state, message interactions as first-class child records. External SMS rail renders only what the rail supports. Carrier-side reactions (e.g., iMessage "tapback" delivered as text "Loved 'message body'") are captured as inbound rail events; OMNI may parse + render them as semantic reactions in the UI **but the underlying storage is still a first-class `external_message_reactions` child row, NEVER a JSON blob on `external_conversation_messages.metadata`**.

`communication_rails.capability_matrix` declares per-rail capability — `supports_reactions`, `supports_read_receipts`, `supports_media`, `supports_delivery_confirmation` — UI degrades gracefully per rail; rail capability does NOT degrade substrate.

**Future child tables (admitted, not built in e0/e1):** `external_message_reactions`, `external_message_read_state`, `external_message_interactions`, `external_message_attachments` per §7.6 child-tables sketch + DL-12 invariant 24.
**Phase:** e1 admits substrate without reactions UI; e5+ implements reactions / read-receipts / interactions UI when first concrete operator-pressure surfaces.

### §12.7 First-class media attachments

External-line messages admit media as first-class artifacts via future `external_message_attachments` child table (admitted in e0; built when first MMS / annotated-image / PDF concrete need surfaces). Media is:
- **Scanned + classified** at ingest (virus scan + sensitivity classifier; e0 admits hook, e3+ implements).
- **Stored against `contact_identity` / `external_conversation`**, not the patient chart, until projection + disposition land.
- **Sent as secure portal link** rather than raw MMS when files exceed rail size limits OR are PHI-sensitive (per DL-12 invariant 35).
- **Annotation-aware** per DL-12 invariant 32: iOS-flattened markup IS the source artifact; OMNI-native annotation preserves the original + derives the annotation as a separate child artifact.
- **PDF stricter** per DL-12 invariant 34: PDFs always preserve the original; never overwrite the source.

**Substrate dependence:** Future `external_message_attachments` (admitted, §7.6 child-tables) + future media-artifact registry.
**Phase:** e0 admits substrate; e2+ ships MMS receive / scan / classify; e3+ ships secure-portal-link for PHI-sensitive.

### §12.8 Pre-account annotation lifecycle (5-disposition)

When media or annotation lands from an unknown contact, it stays in external-line substrate until staff explicitly disposes per `patient_projection_links.projection_kind`:

1. `link` — link conversation to patient_relationship; media stays in external-line, surfaces as projected conversation but NOT in chart.
2. `attach_to_patient_context` — attach to patient context (e.g., visible in patient's communications timeline) but NOT clinical chart.
3. `chart_file` — capability-gated deliberate audited filing into clinical chart per DL-7 + DL-12 invariant 31 three-state attachment lifecycle.
4. `safety_task` — generate safety / adverse-event task (provider_tasking sibling); media surfaces in safety workflow.
5. `reject_spam_or_wrong_patient` — mark as wrong-patient / spam; conversation moves to `spam` status; audit preserves the event.

**NEVER automatically.** Media from unknown contacts NEVER chart-files, NEVER becomes patient-visible portal artifact, NEVER becomes clinical source-of-truth without explicit capability-gated staff disposition. This is the key safety boundary per DL-12 invariant 31 + Zone 59 (no auto-file-to-chart drift).

**Substrate dependence:** `patient_projection_links.projection_kind` + capability registry + audit.
**Phase:** e1 admits substrate; e3+ ships full disposition UI; chart-file requires DL-7 + future chart-document substrate.

---

## §13 Contact identity lifecycle + manual-creation sync

When staff manually creates an account in scheduling / intake / CRM, OMNI MUST publish the phone number into `contact_identities` — not "upload to Twilio." OMNI is contact source of truth; Twilio is local rail convenience. Five binding clauses:

### §13.1 Manual account creation publishes contact handles

Manual creation events from any OMNI surface — scheduling, intake form, web lead, staff CRM import, API webhook — normalize the phone to E.164 + emit a `contact_identities` insert/update with `source` reflecting origin (`scheduling_manual` / `intake_form` / `web_lead` / `staff_import` / `api_webhook` / `inbound_first_contact` / `lead_capture` / `migration_seed`). Source-raw-input is preserved (typo-trace) alongside the normalized form.

The contact_identity is then linked to a `patient_relationship` via `patient_projection_links` with `projection_kind = link` + `match_method = staff_manual` + `match_confidence = high` (when manual creation is explicit) or `medium` (when partial-match suggested by dedup). The link triggers retroactive projection per §13.2.

**Substrate dependence:** `contact_identities.source` + `contact_identities.source_raw_input` + `patient_projection_links` + audit.
**Phase:** e1 ships scheduling → contact_identities sync; e2 adds intake form + web lead + staff import; e3+ adds API webhook + lead-capture campaigns.

### §13.2 Phone updates trigger dedupe / match / retroactive-link cascade

When a phone is added or changed on an existing patient_relationship via scheduling/intake/staff edit, OMNI runs a dedup/match cascade:

1. Normalize new phone to E.164.
2. Lookup existing `contact_identities.phone_e164` for the new number.
3. If existing contact_identity has unlinked external_conversations, surface them to staff for review ("retroactive link?").
4. If existing contact_identity is already linked to a different patient_relationship, surface conflict for staff resolution (split / merge / disambiguate per §13.3).
5. If existing contact_identity has STOP / opt-out state, surface to staff (don't silently inherit; per §15.5).
6. On staff approval, create new `patient_projection_links` row with `match_method = retroactive_link` + `match_confidence = staff_confirmed`.
7. Emit audit event + provenance.

Old phones on patient_relationship are NOT auto-deactivated; staff must explicitly deactivate or split per §13.3.

**Substrate dependence:** `contact_identities.lifecycle_state` + `patient_projection_links` + audit.
**Phase:** e2 ships full cascade; e1 ships basic lookup + manual link.

### §13.3 Contact identity lifecycle state machine (10 transitions)

`contact_identities.lifecycle_state` admits 10 transitions per `lifecycle_state` enum:

1. **create** — new contact_identity row inserted with `source` set.
2. **update** — display_name, source, or handles updated.
3. **verify** — handle verified (e.g., phone reachability test, email confirmation); confidence bumps.
4. **merge** — two contact_identities determined to be the same person; one is set as canonical, the other gets `merged_into_contact_id`. All external_conversations + projections + audit preserved.
5. **split** — one contact_identity determined to represent multiple people (e.g., shared family phone); new contact_identity rows created with `split_from_contact_id` set; existing conversations reassigned per staff disposition.
6. **mark_shared** — `is_shared_handle = true`; handle is explicitly multi-person (family / shared work line / admin / assistant); display_name reflects shared status; projection requires staff-manual match per §13.4.
7. **mark_ambiguous** — `is_ambiguous = true`; handle matches multiple plausible patient_relationships; staff must disambiguate before projection (no auto-project).
8. **deactivate** — `deactivated_at` set; handle no longer reachable (phone reassigned, etc.); historical conversations preserved with `deactivated` flag visible in display.
9. **link** — `patient_projection_links` row created; contact_identity linked to a patient_relationship.
10. **unlink** — projection_link `disposition_status = reverted`; conversation reverts to pre-account external state; audit preserves both sides.

**All transitions emit audit events** with actor + timestamp + reason + prior state + evidence. Future child table `contact_identity_lifecycle_events` carries the audit (admitted in e0; e1 inserts via audit_events table per DL-12 invariant 23 retraction discipline; e2+ moves to dedicated child table).

**Substrate dependence:** `contact_identities.lifecycle_state` + `merged_into_contact_id` + `split_from_contact_id` + audit.
**Phase:** e1 ships create / update / link / unlink / mark_shared / mark_ambiguous / deactivate; e2 ships merge / split with full conversation reassignment.

### §13.4 Phone numbers are handles, not always persons

Phone numbers are first-class HANDLES that admit multi-person semantics. The `is_shared_handle` flag distinguishes:
- **Single-person handle:** typical mobile number; one patient_relationship link.
- **Family / shared handle:** household phone where multiple family members text; multiple patient_relationship links allowed via multiple `patient_projection_links` rows from the same contact_identity (one contact_identity → many `patient_projection_links` to different patient_relationships).
- **Assistant / proxy handle:** patient's assistant or caregiver texts from their own phone on behalf of patient. Different contact_identity (assistant's phone) + future patient-proxy substrate (separate preflight) handles the relationship. Conversations attribute correctly: "Sarah's assistant texted from +1-555..."
- **Shared work line:** receptionist / front desk of another organization texts from a shared line. `is_shared_handle = true` + staff manually disambiguates per conversation.

Display identity (§17) computes "Linked Patient · Conversation may include family / shared" badge for `is_shared_handle = true` rows.

**Substrate dependence:** `contact_identities.is_shared_handle` + `patient_projection_links` cardinality + future patient-proxy substrate.
**Phase:** e1 admits shared-handle flag; e2 ships UI surface + multi-link allowance.

### §13.5 OMNI is source of truth, NOT Twilio

Twilio's address-book features (carrier-side contact import, vendor-side display name override) are **local convenience only** and NEVER override OMNI canonical data. Specifically:
- OMNI never writes patient phone numbers into Twilio address book as authoritative.
- If Twilio carrier-side display name conflicts with OMNI `contact_identities.display_name`, OMNI wins.
- Twilio rail-side blocked-number lists are a SECONDARY filter; OMNI's `org_communication_endpoints.blocked_numbers_list_ref` is canonical.
- Migration / vendor-switch (e.g., Twilio → MessageBird) does NOT require contact_identities rebuild; only adapter swap per §8.5.

This clause is the substrate-level enforcement of "rail-agnostic" — vendor-side databases are not allowed to drift OMNI canonical state.

**Substrate dependence:** §8 adapter discipline + audit on conflicts.
**Phase:** e1 ships canonical-precedence; e2+ adds conflict-detection audit.

---

## §14 Phone-system parity layer

External-line is a phone-system REPLACEMENT, not "SMS webhook + message table." Nine binding clauses ensure substrate admits the full phone-system shape:

### §14.1 Multi-line endpoint instances per location / brand / intent

`org_communication_endpoints` (§7.2) carries 20+ columns supporting many concurrent phone lines per org / brand / location / intent. Examples:
- Somerset Front Desk (`location_id = somerset`, `intent_class = front_desk`)
- Birmingham Front Desk (`location_id = birmingham`, `intent_class = front_desk`)
- Peptides On-Call (`brand_id = peptides`, `intent_class = on_call`)
- Billing Line (`intent_class = billing`)
- Cultured Main Line (`brand_id = cultured`, `intent_class = marketing`)
- Cultured Front Desk (`brand_id = cultured`, `intent_class = front_desk`)
- Evo Main Line (`brand_id = evo`, `intent_class = marketing`)
- Aftercare Line (`intent_class = aftercare`)
- Fax Line (`communication_rail_id = fax`, `intent_class = fax`)

Each endpoint independently configures business hours, voicemail greeting, auto-reply templates, blocked/trusted lists, default queue, access scope, default caller-ID display, display sender policy, escalation rules.

**Phase:** e1 ships multi-endpoint substrate + 1-2 endpoints active; e2+ scales to N endpoints per practice.

### §14.2 Voicemail / missed-call workflow

Voicemail = rail event → audio artifact → transcript artifact → external_conversation → queue_state → optional patient projection. Substrate path:

1. Inbound voicemail webhook → `external_communication_events(event_type = voicemail, raw_provider_payload = {audio_url, recording_sid, ...})` insert.
2. Audio artifact stored against `contact_identity` / `external_conversation` per §12.7 (NOT patient chart yet).
3. Transcript artifact (if `voicemail_to_text_enabled = true`) — emitted as separate `external_communication_events` row or as a derived projection on the voicemail conversation.
4. Conversation grouper opens `external_conversation` with `intent_class_at_open = clinical / front_desk / etc.` per endpoint.
5. Queue state inserted: `state = received` → (transcription pending) → `transcribed` → `unread`.
6. Staff claims; state → `listened` → `claimed`.
7. Staff callback (creates outbound external_conversation_messages) or escalates.
8. Voicemail with linked patient_relationship projects per §6 layer 3.

Voicemail is NEVER auto-filed to patient chart. Projection happens via `patient_projection_links` per §12.8 5-disposition.

**Substrate dependence:** `external_communication_events.event_type = voicemail` + `external_conversation_queue_state.state` voicemail values + future audio-artifact substrate.
**Phase:** e3+ ships full voicemail rail (rail capability + transcription + state machine).

### §14.3 Voicemail / missed-call state machine

`external_conversation_queue_state.state` admits voicemail-specific values: `received` / `transcription_pending` / `transcribed` / `transcription_failed` / `unread` / `listened` / `claimed` / `callback_needed` / `callback_completed` / `escalated` / `spam` / `archived`. Plus `callback_needed`, `callback_completed_at` fields capture the most ops-relevant transitions.

For missed calls without voicemail, the queue state admits: `missed` / `auto_reply_sent` / `escalated` / `silent_ignored` per endpoint `missed_call_behavior`. Operationally this is the "ring central missed call indicator" parity.

**Substrate dependence:** `external_conversation_queue_state.state` + `callback_*` fields.
**Phase:** e3+ ships full state machine; e1 ships substrate admit.

### §14.4 Deterministic missed-call auto-replies

When missed call + endpoint `missed_call_behavior = auto_reply_sms`, the auto-reply template fires via the §9 8-gate dispatch. Same gates as any other deterministic outbound — no AI confirmation, consent + endpoint + quiet-hour + rate-limit + idempotency + template + prohibited-claims floor must all pass. Auto-reply storms are prevented by gate 7 rate-limit (per-contact per-endpoint windowed limits).

**Substrate dependence:** `org_communication_endpoints.auto_reply_template_refs` + §9 dispatch.
**Phase:** e2 ships missed-call auto-reply path; e3+ scales rules library.

### §14.5 Outbound endpoint selection policy

When staff or rule fires outbound, the sending endpoint is chosen by precedence:

1. **Conversation stickiness** — current `external_conversations.org_communication_endpoint_id` (reply on the line the conversation was opened on, unless explicitly switched).
2. **Patient / brand stickiness** — `patient_relationship.brand_id` → matching `org_communication_endpoints` of compatible intent_class.
3. **Intent match** — marketing rule → marketing endpoint; clinical → clinical; etc. (Zone 68 enforcement).
4. **Staff toggle** — staff may explicitly toggle endpoint at compose-time IF capability allows. UI explicitly displays "Sending from: <label> · +1-..." per §14.6.
5. **Default fallback** — `org_communication_endpoints.is_default_for_intent_class = true` per brand/location (admitted, future column).

Mismatched endpoint selection (e.g., trying to send marketing from clinical endpoint) is rejected by §9 gate 1.

**Substrate dependence:** §9 dispatch layer + `org_communication_endpoints` + staff capabilities.
**Phase:** e1 ships stickiness + intent match; e2 ships staff toggle UI; e3+ ships default-fallback rules.

### §14.6 UI clarity: replying-as / sending-from (and what the client sees)

Staff-side composer UI displays explicit "Replying as: [staff display name]" + "Sending from: [endpoint label] · [phone E.164]" headers — ALWAYS visible at compose. No Google-Messages-style ambiguity.

Client-side sees only what `org_communication_endpoints.display_sender_policy` allows:
- `business_only` — Just the business name / phone (typical default).
- `staff_name_in_body` — Staff name appears in message body (e.g., "Hi, this is Hannah from Cultured Front Desk").
- `staff_name_with_business` — Staff name appears as sender display (where rail supports; e.g., RCS / WhatsApp business profiles).
- `brand_only` — Brand display name only (when brand-distinct from business).
- `custom` — Per-conversation override.

Substrate stores BOTH: `external_conversation_messages.author_staff_id` (staff identity, staff-side only) + `external_conversation_messages.display_sender_policy` + `external_conversation_messages.sent_as_label` (computed display string, what the client saw). Provenance audit cannot be obscured by display policy.

**Substrate dependence:** `external_conversation_messages.author_staff_id` + `display_sender_policy` + `sent_as_label`.
**Phase:** e1 ships substrate + `business_only` + `staff_name_in_body`; e3+ adds rich sender display + brand override.

### §14.7 Delivery status state machine (from rail callbacks)

`external_conversation_messages.delivery_status` admits 11 values per rail callback: `queued` / `sent` / `delivered` / `failed` / `undelivered` / `rejected` / `blocked` / `opted_out` / `carrier_filtered` / `invalid_number` / `media_failed`.

State transitions are forward-only (queued → sent → delivered is normal). Out-of-order callbacks (e.g., late `sent` callback arriving after `delivered`) are dropped, not regressed. Status callback adapter handles out-of-order discipline per §8.4.

Operational handling:
- `failed` / `undelivered` → show failed badge on message + optionally surface retry/follow-up task.
- `opted_out` → propagate to `patient_consents` for that intent_class + suppress future sends.
- `invalid_number` → flag `contact_identity` for verification; surface to staff for handle review.
- `media_failed` → trigger fallback to secure portal link send (per §12.7).
- `blocked` / `carrier_filtered` → surface to compliance / messaging-ops dashboard.

**Substrate dependence:** `external_conversation_messages.delivery_status` + audit.
**Phase:** e1 ships full state machine + basic ops handling; e2 adds retry workflow + opt-out propagation; e3+ adds compliance dashboard.

### §14.8 Draft semantics (concurrent multi-staff support)

Three draft types coexist on the same conversation:

1. **Personal drafts** — visible only to the staff member who wrote them. Multiple ops users can each have a personal draft on the same conversation (e.g., 3 front-desk staff looking at the same unread → each can draft a reply). Substrate: `external_conversation_messages` rows with `status = draft_queued_outbound`, `author_staff_id = <staff>`, `source = manual` — visible per RLS only to author + admins.
2. **Shared queue drafts** — staff member explicitly saves draft as queue-shared (for handoff / coordination). Other staff with queue access can see + edit + send. Substrate: same row with `status = draft_queued_outbound`, `source = manual`, plus a flag (admitted as `draft_visibility` enum future-add; e0 admits via convention).
3. **AI proposal drafts** — AI Response Assist (DL-12 invariant 39) produces a draft visible as proposal in the composer panel; staff must explicitly accept before send. Substrate: same row with `status = draft_queued_outbound`, `source = ai_drafted` or `ai_assisted`, `ai_assist_session_id` populated.

**Stale draft warning:** when staff is about to send a draft on a conversation where another message has been sent within the last N seconds (configurable; default 30s), the composer surfaces a stale-draft banner: "Hannah sent a reply 25 seconds ago. Review before sending your draft." Substrate logic uses `external_conversation_messages.last_event_at` + draft creation timestamp.

**Substrate dependence:** `external_conversation_messages.status` + `source` + `ai_assist_session_id` + `author_staff_id` + draft RLS.
**Phase:** e1 ships personal drafts; e2 adds shared queue drafts + stale-draft warning; e3+ adds AI proposal drafts.

### §14.9 Outbound traceability (11 fields per outbound message)

Every outbound external message records 11 traceability fields, all stored on `external_conversation_messages`:

| # | Field | Purpose |
|---|---|---|
| 1 | `author_staff_id` | Staff who composed (NULL for automation) |
| 2 | `automation_actor_id` | Automation / rule / template actor (when applicable) |
| 3 | `outbound_endpoint_id` | Endpoint sent from |
| 4 | `sent_as_label` | Computed display string (what client saw) |
| 5 | `source` | manual / template / rule_fired / ai_drafted / ai_assisted / automated |
| 6 | `template_id` | Template ref (when applicable) |
| 7 | `rule_id` | Rule ref (when applicable) |
| 8 | `ai_assist_session_id` | AI session ref (when applicable) |
| 9 | `body` | Final message body (immutable post-send) |
| 10 | `sent_at` + `delivery_status_updated_at` | Timestamps |
| 11 | `provider_event_id` + `delivery_status` | Rail-side provenance |

This solves the "wait, can the client see me?" ops anxiety: every outbound carries unambiguous staff-side author + client-side sender — no Google-Messages ambiguity, no audit gaps.

**Substrate dependence:** `external_conversation_messages` columns + audit table cross-ref.
**Phase:** e1 ships all 11 fields; e2 surfaces traceability in admin / compliance UI.

---

## §15 Settings taxonomy + precedence

External-line settings live in four scoped layers; six-level precedence prevents conflicts. Five binding clauses.

### §15.1 Four settings layers

1. **Endpoint / line settings** — owned by `org_communication_endpoints` row. Examples: label, default caller ID, business hours, voicemail greeting, voicemail-to-text toggle, forwarding rules, default queue, default outbound sender policy, auto-reply templates, blocked / trusted numbers, intent_class.
2. **Queue settings** — owned by future queue substrate (preflight #2 per [HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md](HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md)). Examples: queue members, availability, queue hours, escalation rules, missed-call routing, claim/complete rules, SLA timers, after-hours fallback owner.
3. **User / staff preferences** — owned by future staff_preferences substrate (preflight #3+; admitted not built in e0). Examples: unread badge behavior, bold unread, @mention icons, muted conversations, ringtones / text tones, DND, off-duty, keyboard shortcuts, enter-sends vs enter-newline, link previews, notification sounds.
4. **Rail / vendor capabilities** — declared on `communication_rails.capability_matrix`. Examples: supports_media, supports_reactions, supports_read_receipts, supports_delivery_confirmation, supports_caller_id_branding, max_message_chars, max_media_size_bytes, supports_voicemail_transcription, supports_call_recording.

**Substrate dependence:** `org_communication_endpoints` + `communication_rails.capability_matrix` + future queue substrate + future staff_preferences substrate.
**Phase:** e0 admits substrate for layers 1 + 4; layers 2 + 3 referenced as future preflights.

### §15.2 Six-level precedence

When settings conflict, this precedence binds. **No lower layer can override a higher layer.**

1. **Law / compliance / consent (highest)** — STOP / opt-out / prohibited send / retention / legal hold / blocked-number / TCPA / HIPAA / CCPA. Hard-wired in §9 dispatch.
2. **Safety / clinical criticality** — urgent escalation / Rx safety issue / adverse event / on-call override / safety-critical priority class. May override quiet-hours / muted-queue / user mute per DL-12 invariant 21.
3. **Endpoint policy** — which number sends / receives, business hours, voicemail behavior, auto-reply, default queue, forwarding, blocked/trusted, intent_class.
4. **Queue policy** — who owns it, who gets notified, SLA, escalation, claim/complete rules, after-hours fallback.
5. **User preferences** — mute, DND, badge count, sounds, keyboard behavior, link previews.
6. **Device / client preferences (lowest)** — per-device ringtone, text tone, app-specific UI.

**Examples of precedence enforcement:**
- A patient opted out of marketing SMS → user preference cannot override; marketing send rejected by §9 gate 3.
- An on-call escalation fires → user-muted queue does NOT silence the page; safety overrides per DL-12 invariant 21.
- Endpoint business hours = closed → user preference does NOT extend hours; auto-reply or voicemail per endpoint policy.
- Queue assigns conversation to Hannah → Hannah's mute preference does NOT remove assignment, only suppresses non-critical notifications.

**Substrate dependence:** §9 dispatch + queue routing + audit.
**Phase:** e1 ships compliance + safety overrides; e2 ships full 6-level precedence enforcement; e3+ ships device-level preferences.

### §15.3 Endpoint settings (full enumeration)

`org_communication_endpoints` carries (from §7.2): label, intent_class, default_queue_id, default_access_scope, default_caller_id_display, business_hours_ref, holiday_calendar_ref, after_hours_behavior, voicemail_enabled, voicemail_greeting_ref, voicemail_to_text_enabled, voicemail_routing_queue_id, forwarding_rules, missed_call_behavior, auto_reply_template_refs, escalation_rules, recording_policy, transcription_policy, blocked_numbers_list_ref, trusted_numbers_list_ref, consent_requirements_ref, display_sender_policy, is_active. These are the substrate-admitted endpoint settings; not all need UI in e1 but the columns exist to prevent rewrites.

### §15.4 Settings explicitly NOT built in e0 / e1

Per §3 deferrals, these RingCentral-clone features are NOT in scope; substrate may admit them but no UI lands:
- Custom ringtones / text tones UI
- Keyboard shortcuts UI (enter sends vs new line)
- Bold unread toggle
- Show link previews toggle
- Transfer-complete-tone / call-disconnect-tone settings
- Background noise reduction
- WiFi/data calling region preferences
- Every robocall blocking option granular toggle
- Hold music UI
- Full personal phone settings UI
- Off-duty / commute / break-state granular controls
- Translation / language preference settings beyond endpoint default

These land e5+ when first concrete pressure surfaces.

### §15.5 Capability-gated administration

Endpoint / queue / brand / org settings are controlled by capability-gated admin surfaces:
- **Org admin** — full settings access including intent_class, consent_requirements, recording_policy, transcription_policy.
- **Brand admin** — per-brand endpoints (cannot modify other brands).
- **Location admin** — per-location endpoints (cannot modify other locations).
- **Communications admin** — endpoint config including business hours, voicemail greeting, forwarding, auto-replies; NOT consent / recording / intent_class.
- **Compliance admin** — recording_policy, transcription_policy, legal hold flags, audit access.
- **Front-desk manager** — business hours, voicemail greeting, auto-replies (within compliance-approved templates), forwarding within scope; NOT intent_class, consent, recording.
- **Ops staff (default)** — NO settings access. Use inbox + send + claim + escalate only.

Capability registry lives in existing OMNI capability system (not new). e0 admits the capability slot names; e1 wires actual capability checks.

**Substrate dependence:** Existing capability registry + `org_communication_endpoints.created_by_staff_id` + `last_updated_by_staff_id` audit.
**Phase:** e1 ships full capability-gating; e2 surfaces audit UI; e3+ ships break-glass + compliance-admin tooling.

---

## §16 Multi-brand / multi-entity / operating modes

External-line must support diverse business models — high-touch medspa vs. Hims-style portal-first national telehealth vs. anything in between — and diverse backend configurations — shared backend vs. separated entities. Five binding clauses.

### §16.1 Endpoint scoping (org / brand / practice_entity / location)

`org_communication_endpoints` carries four scoping FKs (§7.2): `org_id` (always required), `brand_id` (nullable), `practice_entity_id` (nullable), `location_id` (nullable). This admits the full scoping matrix:
- One endpoint serves entire org (brand_id, practice_entity_id, location_id all NULL): rare; admin / general inquiry only.
- One endpoint per brand (brand_id set, location_id NULL): typical "Cultured Main Line" / "Evo Main Line".
- One endpoint per location (location_id set, brand_id NULL or set): typical "Somerset Front Desk", "Birmingham Front Desk".
- One endpoint per practice_entity (practice_entity_id set): for separate legal entities sharing org (e.g., medspa + dermatology PLLCs).
- Endpoint can intersect: `brand_id = cultured AND location_id = somerset` for brand-specific location line.

Patient identity (DL-10) scopes by `patient_relationship` which carries its own brand / practice / location scoping. Inbound routing matches conversation → endpoint → relationship scope.

**Substrate dependence:** `org_communication_endpoints` scoping FKs + `patient_relationship` scoping (DL-10).
**Phase:** e1 ships org + brand + location scoping; e2 adds practice_entity scoping; e3+ adds intersection scoping.

### §16.2 Four brand-level operating modes

A brand may operate external-line in one of four modes, configured per brand via future `brand_communication_mode` table (admitted in e0; lives on brand metadata e1+):

1. **High-touch clinic mode** — full SMS / phone access; main line owned by front desk; patients text casually; staff reply often; voicemail + auto-replies + endpoint scaling. Typical: medspa, derm, ortho, local hybrid clinic. Default for medspa brands.
2. **Portal-first limited-phone mode** — phone exists but suppressed; SMS limited to opt-in / specific intent classes (e.g., appointment reminders only); patient communication primarily through portal; phone support tiered / async. Typical: scaled GLP-1, HRT-at-scale, hybrid telehealth.
3. **Support-only mode** — external-line is support-team-only; clinical / billing / appointment all through portal; main line forwards to support queue or simply rings to voicemail. Typical: portal-first brands with no front desk.
4. **Disabled external-line mode** — brand has no active endpoints; `org_communication_endpoints.is_active = false` for all brand-scoped rows. Brand operates 100% portal-first. Typical: pure digital telehealth (Hims-style at scale).

**Important:** Mode is configurable, not doctrinal default. Substrate supports all four; doctrine doesn't pick a default. Brands toggle mode based on growth phase + ops capacity + clinical model.

**Substrate dependence:** `org_communication_endpoints.is_active` + future brand_communication_mode metadata + intent_class scope.
**Phase:** e1 ships modes 1 + 4 (active vs disabled); e2 ships mode 2 (limited phone); e3+ ships mode 3 (support-only).

### §16.3 Three backend operating modes (shared / shared-with-separated-ops / separate)

Independent of brand-mode (§16.2), the BACKEND can be configured one of three ways:

1. **Shared backend / shared ops** — Cultured and Evo sit side by side; same staff handles both; shared front-desk queue with brand-aware routing/display. `org_communication_endpoints` rows exist for both brands; `external_conversation_queue_state.assigned_queue_id` points to shared front-desk queue. Staff capability includes `cross_brand_access`. UI explicitly distinguishes brand per conversation row (display identity §17 shows brand badge).
2. **Shared backend / separated ops** — same org / parent company, but Brand A and Brand B should not see each other's conversations. `org_communication_endpoints` rows per brand; queue assignment per brand; staff capability is brand-scoped (no cross-brand). Cross-brand search forbidden by RLS + capability gate.
3. **Separate entities / separate deployments** — no shared access by default. Federation only via explicit link/workflow (future); auto-share forbidden per DL-10 Zone 35.

Cross-brand staff access (mode 1) is capability-gated and auditable. Cross-brand search emits audit when capability granted.

**Substrate dependence:** capability registry + `org_communication_endpoints` brand scoping + RLS.
**Phase:** e1 ships modes 1 + 3 (shared-shared OR separate); e2 ships mode 2 (shared with brand-separation); e3+ adds federation hooks.

### §16.4 Per-brand consent / opt-out / hours / voicemail separation

When the same person texts both Cultured (women's HRT) and Evo (men's clinic) from the same phone, the contact_identity has TWO `patient_projection_links` (one per brand). Consent, opt-out, business hours, voicemail greeting, and auto-replies are **per-brand, not per-contact-identity**:
- STOP keyword to Cultured marketing line → opts out of Cultured marketing; Evo marketing remains opted-in if separate consent.
- Cultured after-hours auto-reply does NOT fire on Evo line.
- Voicemail greeting for Cultured Front Desk differs from Evo Front Desk.

Substrate: `patient_consents` is per-patient_relationship (not per-contact_identity); `org_communication_endpoints.consent_requirements_ref` per endpoint; STOP/opt-out propagates per-endpoint per-intent-class via §9 gate 3.

**Substrate dependence:** `patient_consents` (existing, per-relationship) + `org_communication_endpoints.consent_requirements_ref` + per-endpoint suppression state.
**Phase:** e1 ships per-endpoint STOP suppression; e2 ships per-brand consent enforcement; e3+ ships unified cross-brand consent dashboard.

### §16.5 Cross-brand front desk discipline

When a single physical front desk operates two brands (Cultured + Evo) at one location:
- Staff capability admits `cross_brand_access` (capability-gated).
- Inbox surfaces conversations from both brand endpoints; display identity (§17) clearly shows which brand (e.g., "Sarah Miller · Cultured · Lead").
- Staff reply UI explicitly shows "Sending from: Cultured Front Desk · +1-..." with EXPLICIT confirmation when switching brand (no Google-Messages ambiguity per §14.6).
- Cross-brand search emits audit per §12.1.
- Conversation projection respects brand scope: a Cultured conversation never auto-projects to an Evo patient_relationship even if same phone matches both; staff must explicitly pick.

**Substrate dependence:** capability registry + display identity + audit.
**Phase:** e1 ships cross-brand display + audit; e2 ships explicit-brand-switch UI; e3+ ships brand-scoped break-glass.

---

## §17 Conversation display identity + status chips

Inbox rows compute display identity + display context from backend state. Six binding clauses; strong "no-drift" rule prevents chat_status from becoming an independent source of truth.

### §17.1 Display identity precedence

Every conversation row computes display NAME + display avatar/initials + display sub-label per precedence:

1. **Linked patient (high confidence)** — `external_conversations.projected_patient_relationship_id` set + `patient_projection_links.disposition_status = confirmed` + `match_confidence = high` → use patient display name + patient avatar. Sub-label: brand + intent.
2. **Named contact (no patient link)** — `contact_identities.display_name` set → use contact display_name. Sub-label: phone E.164 + endpoint label.
3. **Unnamed handle** — `contact_identities.display_name IS NULL` → use formatted phone ("+1 (248) 555-1234"). Sub-label: endpoint label + lead source if known.
4. **Group / shared handle** — `contact_identities.is_shared_handle = true` → use "Shared: <handles>" or family-name display. Sub-label: warning badge "may include family / shared".
5. **Endpoint label fallback** — when no contact identity yet (e.g., raw rail event pre-grouper) → display "Inbound · <endpoint label>".

**Intentional "Unknown Contact" fallback:** when no precedence rule applies, show "Unknown Contact · +1..." NOT blank. Blank rows = bug; unknown = intentional.

**Substrate dependence:** `external_conversations.projected_patient_relationship_id` + `contact_identities.display_name` + `is_shared_handle` + `org_communication_endpoints.label`.
**Phase:** e1 ships precedence rules 1-3 + 5; e2 ships rule 4 (shared handle); e3+ ships intentional-fallback UI.

### §17.2 Display status chips (computed projections, NOT chat_status field)

Inbox rows surface lightweight status chips computed from backend state. **NO `chat_status` / `conversation_status` field on `external_conversations` that exists as an independent source of truth.** Chips are read-only projections from:
- `contact_identities` (presence / shared / ambiguous / deactivated)
- `patient_relationship` (existence / brand / status)
- `appointment` (next appointment, completed history)
- `care_program` (active, lapsed)
- `patient_consents` (marketing opt-out, clinical opt-out)
- `patient_action_items` (open items)
- `billing` (payment issue, account-level state)
- `clinical_safety_flags` (open safety / adverse event)

Example chip taxonomies (per-brand customizable):
- **Lead state:** "Unknown" / "New Lead" / "Lead" / "Engaged Lead" / "Stale Lead"
- **Patient state:** "Booked" / "Consult Scheduled" / "Established" / "Active Program" / "Lapsed" / "VIP"
- **Operational state:** "Needs Follow-up" / "Awaiting Reply" / "Payment Issue" / "Clinical Review" / "Do Not Contact"
- **External-line state:** "Unlinked" / "Projected" / "Opted Out" / "Restricted"

**Substrate dependence:** queries against existing substrates + future projection layer (e2 ships read-side projection; e0 admits the concept; no new column).
**Phase:** e0 admits chip projection contract; e1 ships basic chips (lead / patient / opted-out); e2 ships full taxonomy; e3+ ships per-brand customization.

### §17.3 Display identity is presentation state ONLY

Display identity (name / avatar / chips) does NOT replace, override, or substitute for:
- Contact identity (`contact_identities`) — substrate source of truth.
- Patient identity (`patients` + `patient_relationship`) — DL-10 layer 2/3.
- Endpoint ownership (`org_communication_endpoints`) — phone-system source of truth.
- Audit provenance (`audit_events` + `patient_projection_links.audit_trail`).

If display computation conflicts with substrate (e.g., name display says "Sarah Miller" but no patient_projection_link exists), the SUBSTRATE wins; display is the broken side. Display is computed, not stored, so reconciliation is automatic.

**Substrate dependence:** display projection layer (future) reads-only against substrate.
**Phase:** e0 admits constraint; enforcement is structural (display is computed, never written).

### §17.4 Blank / unknown states must be intentional

Empty inbox rows ("just a phone number with no name and no chips") are bugs. The substrate + display projection must always compute SOMETHING:
- Always have a phone E.164 (or email) from `contact_identities`.
- Always have an endpoint label.
- Always have a sensitivity classification.
- Always have a queue state (even if `unread`).

If display projection cannot compute any chip, show "External Inbound · <endpoint>" or "Unknown · pending classification" — never blank.

**Substrate dependence:** NOT NULL constraints on key projection inputs + defaulted state values.
**Phase:** e1 ships intentional fallback UI; e2 expands chip coverage.

### §17.5 No-drift rule for chip taxonomy

The chip taxonomy is a read-side projection. **Anti-patterns explicitly rejected:**
- ❌ `external_conversations.chat_status` independent enum that staff edit directly.
- ❌ `contact_identities.lead_stage` as primary state (use scheduling / lead substrate).
- ❌ `external_conversation_messages.tag` as filter source (use queue/sensitivity state).

Per-brand customization (§17.6) is via PROJECTION RULES (per-brand display config), not per-brand columns. Projection rule changes never require substrate migration.

**Substrate dependence:** structural (no independent status column admitted).
**Phase:** e0 admits constraint; e1 ships first projection-rule registry.

### §17.6 Per-brand customization

Different brands surface different chip taxonomies (per §17.2 examples). Customization lives in future brand display config (admitted, not built in e0):
- Cultured (women's HRT) might emphasize "Intake Started" / "Labs Needed" / "Provider Review" / "Active".
- Evo (men's clinic) might emphasize "Consult Scheduled" / "GLP-1 Eligible" / "Payment Pending" / "Rx Pending" / "Active".
- Medspa might emphasize "Lead" / "Booked" / "Established" / "Member" / "VIP".

All driven by display projection config; substrate stays the same.

**Substrate dependence:** future brand display config table.
**Phase:** e3+ ships per-brand chip config; e1-e2 use single default taxonomy.

---

## §18 Scenario matrix (~55 scenarios)

Each scenario lists: inbound/outbound, endpoint intent_class, contact_identity status, projection state, expected substrate trace, which framing questions (Q1-Q10) it answers, which §12-17 guardrails it covers. Substrate trace uses table names; concrete adapter details deferred.

### §18.1 Unknown-number first-touch (inbound)

1. **Cold inbound SMS to main line — never-seen number** — Inbound text "Hi, interested in weight loss" arrives at Somerset Front Desk (front_desk intent_class). Substrate trace: `external_communication_events(direction=inbound, event_type=inbound_message)` → conversation grouper creates `contact_identities(phone_e164=..., source=inbound_first_contact)` + `external_conversations(intent_class_at_open=front_desk, status=open)` + `external_conversation_queue_state(state=unread, assigned_team_kind=front_desk)`. Display: "Unknown Contact · +1 (248) ... · Somerset Front Desk · New Lead". Q1, Q4. §12.1, §12.3, §17.1, §17.4.

2. **Cold inbound from same unknown number, 3 days later** — Same phone texts again. Substrate trace: webhook hits same `contact_identities` row by phone_e164 lookup; opens new `external_conversations` row OR appends to existing OPEN conversation (configurable per endpoint; default = append within 7-day window). Q1, Q4. §12.1.

3. **Cold inbound to marketing line** — Same scenario but endpoint is Cultured Marketing Line (marketing intent). Routes to `marketing_ops` queue (NOT front_desk per Zone 68). Display chip: "Marketing Inbound". Q1, Q8. §12.3 marketing-narrower-default, Zone 68.

4. **Cold inbound with MMS attachment (annotated photo)** — Unknown number sends "what's this?" with a photo. Substrate trace: `external_communication_events.media_refs` set; conversation opens; media stored against contact_identity NOT chart per §12.7. Display: "Unknown Contact · 📎 1 photo · pending classification". Q1, Q4. §12.7, §12.8, §17.4.

5. **Cold inbound voicemail** — Phone rings, no answer, voicemail left. Endpoint missed_call_behavior=voicemail_prompt + voicemail_enabled=true. Substrate trace: `external_communication_events(event_type=voicemail, media_refs=[audio_url])` → transcription pending → transcribed → conversation opens with `intent_class_at_open=front_desk` → queue `state=received → transcribed → unread`. Q1, Q4. §14.2, §14.3.

6. **Cold inbound voicemail + transcription_failed** — Voicemail received but transcription fails (poor audio). State machine: `received → transcription_pending → transcription_failed`. Staff sees audio + manual transcription option. Q4. §14.3.

7. **Cold inbound after-hours** — Inbound SMS arrives outside business hours. Endpoint `after_hours_behavior = auto_reply_only` fires deterministic auto-reply per §9 8-gate. Staff sees conversation tomorrow morning. Q9. §12.4, §14.4, §15.2.

8. **Cold inbound STOP keyword** — Unknown number replies "STOP" to a marketing outbound. Substrate trace: webhook → `external_communication_events(event_type=status_callback_opted_out)` → contact_identity marked `opted_out` for marketing intent_class. NO human triage. Suppression applied. Q9. §10 routing, §12.4 gate 3, Zone 68.

### §18.2 Existing patient inbound

9. **Existing patient inbound from known number, clinical line** — Existing patient (matched `contact_identities` linked to `patient_relationship`) texts clinical line. Substrate trace: `external_communication_events` → grouper resolves to existing `contact_identities` → opens `external_conversations(projected_patient_relationship_id=...)` → queue routes to clinical_oncall per §10. Display: patient name + brand + "Active Program" chip. Q3. §12.3, §17.1, §17.2.

10. **Existing patient inbound, front desk line** — Same patient texts Somerset Front Desk. Routes to front_desk queue, broad_ops scope. Display: patient name + "Established" chip + brand badge. Q3. §17.1, §17.2, §16.5.

11. **Existing patient inbound with MMS (post-procedure photo)** — Patient sends post-procedure concern photo. Substrate trace: media stored against contact_identity / conversation; NOT auto-filed to chart per §12.7. Staff manually dispositions per §12.8. Q3. §12.7, §12.8.

12. **Existing patient inbound from NEW phone (number change)** — Patient texts from previously-unseen number that doesn't match existing contact_identity. Substrate trace: new `contact_identities` row → unlinked → staff sees "matches existing patient by name? confirm link." → §13.2 cascade. Q1, Q2, Q6. §13.2.

13. **Existing patient inbound from family member's phone** — Patient's spouse texts from spouse's phone about patient's appointment. Substrate trace: new contact_identity for spouse → staff marks shared OR sets is_ambiguous → staff disambiguates per §13.4. Q6. §13.3, §13.4.

14. **Existing patient inbound, multi-brand patient** — Patient is enrolled in Cultured AND Evo (rare; typically separate). Substrate trace: contact_identity → 2 patient_projection_links (one per brand). Inbound on Cultured line routes to Cultured care team; Evo line routes to Evo. Q3. §16.4.

### §18.3 Patient projection (linking)

15. **Staff manually links unknown contact to patient_relationship** — After ops triage, staff clicks "link to patient" on unknown contact. Substrate trace: `patient_projection_links(projection_kind=link, match_method=staff_manual, match_confidence=high)` inserted; `external_conversations.projected_patient_relationship_id` set; audit trail records actor + reason. Q2, Q6. §6 layer 3, §13.1.

16. **Retroactive link cascade** — Staff creates patient in scheduling with phone that matches existing unlinked contact_identity. §13.2 cascade fires: existing unlinked conversations surfaced for "retroactive link?" confirmation. Q2, Q6. §13.2.

17. **Multi-match ambiguity at projection** — Phone matches 2 patient_relationships in same brand. Substrate trace: `contact_identities.is_ambiguous = true`; staff sees disambiguation UI; explicit pick required (no auto-project). Q6. §13.3 mark_ambiguous, §10.

18. **Projection with disposition = chart_file** — Staff explicitly files received clinical photo into chart. Substrate trace: `patient_projection_links(projection_kind=chart_file)` + capability check + DL-7 + DL-12 invariant 31 + audit. Q2, Q6. §12.8 disposition 3.

19. **Projection with disposition = reject_spam_or_wrong_patient** — Conversation looked like patient but turned out to be wrong-number / spam. Substrate trace: `patient_projection_links(projection_kind=reject_spam_or_wrong_patient)` + audit; conversation → spam status. Q2, Q6. §12.8 disposition 5.

20. **Projection reverted** — Earlier link was wrong; staff reverts. Substrate trace: `patient_projection_links.disposition_status = reverted` + reason + audit; `external_conversations.projected_patient_relationship_id` cleared. Q6. §12.5 archive-not-delete applied to projection.

### §18.4 Outbound + deterministic outbound

21. **Manual outbound reply (staff types)** — Front-desk staff types reply in inbox. Substrate trace: `external_conversation_messages(status=draft_queued_outbound, source=manual, author_staff_id=hannah)` → 8-gate passes → rail adapter sends → callback updates `delivery_status=delivered`. Display: "Hannah sent as Somerset Front Desk · +1...". Q3, Q7. §9, §14.6, §14.9.

22. **Template outbound (after-hours auto-reply)** — Auto-reply fires when inbound arrives after hours. Substrate trace: `source=template, template_id=after_hours_v3`. 8-gate passes (consent + endpoint + quiet-hours: clinical-critical override may apply). Q9. §9, §12.4, §14.4.

23. **Rule-fired outbound (web-form to SMS)** — Lead fills web form; rule fires "Thanks for reaching out — 20% facial offer" template. Substrate trace: `source=rule_fired, rule_id=lead_nurture_facial_2026q2`. 8-gate passes (web-form opt-in qualifies for marketing consent). Q9, Q10 distinction. §9, §12.4 deterministic-without-AI.

24. **Rule-fired outbound rejected (rate-limit)** — Rule tries to send same template to same contact within hour. Gate 7 rate-limit rejects. Substrate trace: `external_conversation_messages.delivery_status=rejected`, audit `rejection_reason=rate_limit_exceeded`. Q9. §9 gate 7.

25. **AI-drafted outbound (proposal)** — AI Response Assist drafts reply per DL-12 invariant 39. Substrate trace: `external_conversation_messages(status=draft_queued_outbound, source=ai_drafted, ai_assist_session_id=...)`. Visible only as proposal until staff accepts. Q10. §14.8, §11 invariant 39.

26. **AI-drafted outbound accepted** — Staff accepts AI proposal. Substrate trace: row transitions to `status=sent, source=ai_assisted` (because human accepted) → rail send. Audit captures both AI session + staff acceptance. Q10. §14.8.

27. **Cross-endpoint outbound (staff toggles)** — Conversation opened on marketing line; staff explicitly toggles to send from billing line. Substrate trace: `external_conversation_messages.outbound_endpoint_id` differs from conversation default; UI confirmed; audit captures toggle. Q7. §14.5, §14.6.

28. **Outbound to opted-out contact (rejected)** — Marketing rule fires but contact opted out. Gate 3 rejects. Q9. §9 gate 3, Zone 68.

29. **Outbound delivery failed (rail callback)** — Outbound sent but carrier returns failure. Substrate trace: `delivery_status=failed` → staff sees failed badge; retry option. Q9. §14.7.

30. **Outbound delivery undelivered → MMS too large** — Media outbound fails due to size. `delivery_status=media_failed` → fallback to secure portal link auto-generated per §12.7. Q9. §14.7, §12.7.

31. **Outbound queued cancelled before send** — Staff drafts, decides not to send. Substrate trace: `status=draft_queued_outbound → cancelled` + reason + audit. Q9. §12.5 lifecycle.

### §18.5 Multi-brand operations

32. **Cross-brand front desk replies to Cultured then Evo** — Same staff member replies to Cultured conversation then switches to Evo conversation. UI explicitly confirms brand at each compose per §14.6. Audit captures cross-brand access per §16.5. Q8. §16.5, §14.6.

33. **Brand-disabled-external-line mode** — Evo brand operates Hims-style; `org_communication_endpoints.is_active = false` for all Evo rows. Inbound to "old" Evo number rejected or forwarded to support queue per fallback. Q8. §16.2 mode 4.

34. **Shared-backend-separated-ops** — Cultured staff CANNOT search Evo conversations. RLS + capability gate enforces. Q8. §16.3 mode 2.

35. **STOP to Cultured marketing does NOT silence Evo clinical** — Patient texts STOP to Cultured marketing line. Suppression per-endpoint per-intent-class. Evo clinical line still reaches patient. Q9. §16.4, §12.4 gate 3.

36. **Brand-specific voicemail greeting** — Cultured Front Desk has different voicemail greeting than Evo Front Desk. Per-endpoint `voicemail_greeting_ref` configures each. Q8. §14.1, §16.4.

### §18.6 Phone-system parity

37. **Multiple lines per location** — Somerset has front desk + provider on-call + billing + fax lines. 4 `org_communication_endpoints` rows. Q8. §14.1.

38. **Default outbound endpoint per intent_class** — Marketing rule fires from Cultured brand; routes to Cultured Marketing endpoint (matching intent + brand). Q7. §14.5.

39. **Voicemail with patient projection** — Existing patient leaves voicemail. Substrate trace: voicemail rail event → conversation → projected_patient_relationship_id set via contact_identity match. Q3. §14.2.

40. **Missed call auto-reply SMS** — Phone rings out; endpoint `missed_call_behavior = auto_reply_sms`. Auto-reply template fires per §9 8-gate. Q9. §14.4.

41. **Voicemail listened-but-not-claimed** — Staff listens to voicemail but doesn't claim. Queue state: `received → transcribed → listened`. Different staff later claims: `→ claimed → callback_completed`. Q5. §14.3.

42. **3 staff drafts on same conversation** — Three front-desk staff each draft reply to same conversation. Each personal draft visible only to author per RLS. Q5, §14.8. §14.8.

43. **Stale draft warning** — Staff opens drafted reply; meanwhile another staff already sent. Stale-draft banner appears. §14.8.

44. **Outbound traceability audit query** — Compliance admin queries "all messages sent by Hannah in last week with template_id=lead_nurture_facial". Substrate trace: `external_conversation_messages` index on `(author_staff_id, template_id, created_at)` resolves. §14.9.

### §18.7 Operator parity (search, immutability, media)

45. **Search unsaved-history phone number** — Staff searches "+1 248 555" in inbox. Substrate trace: query against `contact_identities.phone_e164` (indexed) + `external_conversations` join. Returns conversations from unlinked numbers. Q1. §12.1.

46. **Search full-text message body** — Staff searches "GLP-1" in inbox. Substrate trace: `external_conversation_messages.body_tsv @@ to_tsquery('GLP-1')` + filters. Q4. §12.2.

47. **Search sensitivity-filtered (clinical conversations)** — Front-desk staff searches; clinical-class results filtered out per `default_access_scope` + `sensitivity_classification`. Audit logs the attempt if user lacks capability. §12.1, §12.3.

48. **Break-glass search (compliance admin)** — Compliance admin searches restricted conversations with `reason_code=compliance_audit`. Audit fully logged. §12.1.

49. **Archive a conversation (no true delete)** — Staff archives spam conversation. Substrate trace: `external_conversations.status=archived` + `archived_at` + `archived_by_staff_id` + `archive_reason`. Raw rail events preserved. §12.5.

50. **Entered-in-error message (admin action)** — Admin marks accidental clinical-info send as entered_in_error. Capability check + reason + audit. Substrate trace: `external_conversation_messages.status=entered_in_error` + reason. Original body preserved for audit. §12.5.

51. **Correction send (not edit)** — Staff sends "*correction: Tuesday 2pm not Tuesday 3pm" as new message with `correction_of_message_id` set. Original immutable. §12.5.

52. **MMS receive + scan + classify** — Inbound MMS with photo. Scanned at ingest, classified as routine. Stored against contact_identity. §12.7.

53. **iOS-flattened markup receive** — Patient sends screenshot with iOS-annotated arrow / circle (flattened image). Substrate trace: stored as single artifact (flattened IS source). DL-12 invariant 32. §12.7.

54. **OMNI-native annotation (future)** — Staff annotates received photo within OMNI; substrate stores original + derives annotation child. e5+. §12.7.

55. **Reaction from iMessage** — Patient "Loved" a message. Substrate trace: inbound event captured as `external_communication_events` + parsed into `external_message_reactions` child (future). UI may render or display textual fallback per rail capability. §12.6.

---

## §19 Watch zones (existing radar + potential new zones)

Existing radar zones e1+ execution should monitor. Potential new zones to add IF e1 surfaces concrete pressure — NOT introduced by e0 (this preflight does not edit radar).

### §19.1 Existing radar zones applicable to external-line

- **Zone 1** — substrate fragmentation (don't add metadata jsonb when first-class column exists).
- **Zone 17, 18, 19, 20, 21, 22, 23, 24, 25** — operational-objects-under-patient discipline (external-line projection doesn't violate patient ownership).
- **Zone 27, 28** — care-task substrate fragmentation / metadata jsonb leakage.
- **Zone 30** — owned-vs-external diagnostic conflation.
- **Zone 35** — auto-share drift (cross-relationship visibility must be explicit; cross-brand external-line must be capability-gated).
- **Zone 47, 48** — DL-11 sibling boundary discipline (external-line is its own sibling, not internal_collaboration, not c2).
- **Zone 53** — patient projection drift (LINK not MIGRATE per DL-12 invariant 17).
- **Zone 54** — projection-as-substrate-bypass (projection layer doesn't bypass DL-10 identity discipline).
- **Zone 56** — chart-file auto-disposition (no auto-file from external-line; §12.8 disposition required).
- **Zone 58** — internal_collaboration sibling crossing into external-line (separate sibling; don't conflate).
- **Zone 59** — chat-attachment-to-chart auto-promotion (no auto-promotion).
- **Zone 61** — capability-vs-RLS conflation (external-line uses RLS for tenant boundaries + capability for fine-grained ops actions).
- **Zone 63, 64, 65, 66, 67** — DL-12 visibility / template / search / notification / coexistence discipline (external-line inherits per §11).
- **Zone 68** — single-rail marketing+clinical concentration (e0's primary radar; per-endpoint intent_class enforces).

### §19.2 Potential new radar zones (admitted; NOT added to radar in e0)

If e1+ execution surfaces concrete pressure, the following may become new radar zones in a future edit to [v1_pressure_test_radar.md](../../docs/architecture/v1_pressure_test_radar.md):

- **Zone candidate A — "External-line rail-bypass drift"** — domain code importing Twilio (or any vendor) outside `lib/external-rails/<vendor>/`. Watch for any `import * from 'twilio'` outside adapter directory.
- **Zone candidate B — "Twilio-as-contact-source drift"** — code reading Twilio carrier-side address book as authoritative; OMNI is source of truth per §13.5.
- **Zone candidate C — "chat_status independent field drift"** — any PR adding `external_conversations.chat_status` / `display_status` / `lead_stage` as an independently-edited column. Display chips are PROJECTIONS per §17.5.
- **Zone candidate D — "Multi-brand cross-leakage drift"** — RLS / capability gaps allowing one brand to see another brand's external conversations without explicit cross-brand capability + audit.
- **Zone candidate E — "STOP-cascading-across-intents drift"** — STOP on marketing line silencing clinical-critical (must be per-endpoint per-intent-class per §16.4).
- **Zone candidate F — "External-line voicemail auto-filing drift"** — voicemail audio auto-filing to chart without §12.8 disposition.
- **Zone candidate G — "Display projection drift from substrate"** — display projection (chips / identity) drifting from substrate state (substrate wins per §17.3).
- **Zone candidate H — "Endpoint-policy-via-jsonb drift"** — endpoint settings stored as jsonb on org_communication_endpoints when a first-class column should exist (Zone 1 sibling).
- **Zone candidate I — "Settings-precedence inversion drift"** — user preference silencing safety override (§15.2 precedence #2 binds).
- **Zone candidate J — "AI-Response-Assist becomes participant drift"** — AI session_id appearing as participant rather than as `external_conversation_messages.source = ai_drafted` per DL-12 invariant 39.

---

## §20 Out of scope for e0

### §20.1 Build / migration scope (deferred to e1+)

- **No SQL migrations** — substrate sketches are column-level only.
- **No Next.js API routes** — webhook adapter sketches only; actual route handlers land e1.
- **No UI components** — inbox / composer / triage UI lands e2+.
- **No queue substrate** — referenced as future preflight #2; FK admitted as NULLABLE in e0.
- **No staff_preferences substrate** — §15.1 layer 3 admitted as future preflight #3+.
- **No future child tables built** — `external_message_reactions`, `external_message_read_state`, `external_message_interactions`, `external_message_attachments`, `contact_identity_lifecycle_events` admitted; built when concrete pressure surfaces (e5+).
- **No fax adapter implementation** — `communication_rails` admits fax slot; full fax preflight is separate per [communications_topology.md](../../docs/architecture/communications_topology.md) §13.
- **No voice adapter implementation** — `communication_rails` admits voice / voicemail slots; full voice preflight e3+.
- **No care-team / coverage-layer substrate** — future preflight #2 (queue + on-call coverage); FK admitted.
- **No patient-proxy / caregiver substrate** — future preflight handling assistant / spouse / caregiver acting on behalf of patient; §13.4 admits via is_shared_handle without building proxy primitive.
- **No AI Response Assist implementation** — DL-12 invariant 39 binds; e3+ ships first concrete AI session.
- **No RingCentral-clone features** (§15.4 enumeration).

### §20.2 Doctrine scope (NEVER in this preflight)

- **No doctrine edits.** No MAIN / foundational / ADR / topology / radar / evolution changes. e0 is design-only.
- **No new doctrine locks.** §12-17 EXTEND existing doctrine to operator workflows. They are not new doctrine.
- **No DL renumbering or amendments.** DL-10 / DL-11 / DL-12 stay as-is.
- **No Zone 68 amendments.** Zone 68 is inherited verbatim.

### §20.3 Multi-rail scope (future)

- **No second rail adapter.** e0 specifies Twilio + adapter contract; second rail (e.g., MessageBird, eFax) is composed per §8.5 future rail addition.
- **No multi-region rail failover.** Twilio is single rail in e0/e1.
- **No regional carrier override.** Future scope.

---

## §21 Phasing — e0 → e1 → e2 → e3+ → e5+

Concrete phasing path showing which substrate / behavior lands when. e0 is THIS document — no code.

### §21.1 e0 (this preflight)

**Deliverables:**
- This document.
- Substrate sketches (§7) — no migrations.
- Rail-adapter contract (§8) — no code.
- 23-section design — no code.
- ~55-scenario matrix (§18) — no tests.

**Status:** PROPOSED. Land on origin/main as PROPOSED markdown.

### §21.2 e1 — substrate land + Twilio inbound SMS

**Substrate migrations:**
- `communication_rails` (seed sms / mms active=true; voicemail / fax / voice / rcs / imessage_business / whatsapp / email admitted is_active=false).
- `org_communication_endpoints` (full §7.2 columns; 1-2 endpoints seeded for testing).
- `contact_identities` (full §7.3 columns; lifecycle_state state machine).
- `external_communication_events` (append-only with derivation columns).
- `external_conversations` (full §7.5 columns).
- `external_conversation_messages` (full §7.6 columns including body_tsv GIN).
- `external_conversation_participants`.
- `external_conversation_queue_state` (queue FK NULLABLE; queue substrate later).
- `patient_projection_links` (full §7.9 columns).

**Code:**
- `lib/external-rails/contracts.ts` (interfaces).
- `lib/external-rails/twilio/` adapter (inbound webhook handler + outbound send + status callback).
- `app/api/webhooks/rails/twilio/inbound-sms/route.ts`.
- `app/api/webhooks/rails/twilio/status-callback/route.ts`.
- §9 dispatch layer with 8 gates (1, 2, 3, 6, 7, 8 active; 4 + 5 stubs).
- Repository functions for domain code.

**UI:** Minimal inbox shell (list view; sender / preview / timestamp / unread); compose box with personal-draft + 8-gate validation.

**Operator parity:**
- §12.1 search unsaved-history (basic phone match).
- §12.2 full-text search (tsvector GIN).
- §12.3 endpoint-scoped access (static `default_access_scope`).
- §12.4 deterministic outbound (gates 1, 2, 3, 6, 7, 8).
- §12.5 immutable history (draft / queued / sent / received).
- §14.5 outbound endpoint selection (stickiness + intent match).
- §14.6 sender clarity (business_only + staff_name_in_body).
- §14.7 delivery status (basic states).
- §14.8 personal drafts.
- §14.9 11-field traceability.

**§13 contact identity:** create / update / link / unlink / mark_shared / mark_ambiguous / deactivate; scheduling → contact_identities sync.

**§15 settings:** capability-gated admin (basic); compliance + safety overrides.

**§16 multi-brand:** modes 1 + 4 (active / disabled); shared-shared backend mode; brand scoping on endpoints.

**§17 display:** precedence rules 1, 2, 3, 5; basic chips (lead / patient / opted-out).

### §21.3 e2 — operator-parity completion + multi-brand + delivery state

**Code:**
- Full template registry (§9 gate 4) + business-hours-aware send-window (§9 gate 5).
- Audit-logged sensitivity-class search (§12.1, §12.2).
- Per-conversation sensitivity override (§12.3).
- Shared queue drafts + stale-draft warning (§14.8).
- Retry workflow + opt-out propagation (§14.7).
- Cross-brand display + audit (§16.5).
- Brand-mode 2 (limited-phone) + mode 3 (support-only).
- Multi-brand consent enforcement (§16.4).
- Retroactive link cascade (§13.2).
- Manual merge / split (§13.3 merge / split).
- Entered-in-error + restrict capability-gated (§12.5).
- Per-brand chip taxonomy (§17.6).
- MMS receive + scan + classify (§12.7).
- iOS-flattened markup recognition (§12.7).

**Substrate:** add `external_message_attachments` child table; admit (but not build) reactions / read-receipts children.

### §21.4 e3+ — voice / voicemail + AI Response Assist + advanced media

**Code:**
- Voicemail rail (Twilio voice webhook + transcription).
- Voicemail / missed-call state machine (§14.3).
- Missed-call auto-reply rules at scale (§14.4).
- AI Response Assist proposals (DL-12 invariant 39 + §14.8 ai_proposal drafts).
- Secure-portal-link for PHI-sensitive media (§12.7).
- Cross-brand break-glass + audit UI.
- Compliance dashboard for blocked / carrier-filtered.
- Per-conversation display sender override.
- Brand display config (§17.6).
- Practice_entity scoping (§16.1).
- API webhook + lead-capture campaigns (§13.1).

### §21.5 e5+ — reactions / read-receipts / rich-media UI + RingCentral-clone polish

**Code:**
- Reactions UI + child table activation (§12.6).
- Read-receipts UI + child table activation (§12.6).
- Message interactions UI (§12.6).
- OMNI-native annotation editor (§12.7 + DL-12 invariant 32).
- Custom ringtones / text tones / keyboard shortcuts / link-preview / hold-music / robocall-blocking-granular UI (§15.4 deferred features).
- Federation across separate deployments (§16.3 mode 3 federation hooks).
- Opensearch projection for cross-substrate search (§12.2).

### §21.6 Future preflights named in this preflight

These preflights are NAMED (not built):
- **Preflight #2 — queue substrate + care-team coverage layer.** External-line queue FK admitted; substrate built when concrete pressure surfaces.
- **Preflight #3 — staff_preferences substrate.** §15.1 layer 3 admitted; substrate built when concrete pressure surfaces.
- **Preflight #4 — patient-proxy / caregiver substrate.** §13.4 admits shared-handle; full proxy primitive future.
- **Preflight #5 — chart-document substrate.** §12.8 disposition 3 (chart_file) requires DL-7 + chart-document substrate.
- **Preflight #6 — fax full architecture.** Per [communications_topology.md](../../docs/architecture/communications_topology.md) §13; fax slot admitted in e0.
- **Preflight #7 — AI Response Assist concrete session substrate.** DL-12 invariant 39 doctrine LANDED; session substrate future.
- **Preflight #8 — internal_collaboration sibling substrate.** DL-11 sibling LANDED; substrate future (different sibling from external-line).
- **Preflight #9 — audit_events external-line extension** (if needed) — most audit handled by existing audit_events; potential future extension for high-volume search audit.

---

## §22 Verification checklist

Before merging this preflight as PROPOSED, the following must verify. Pre-merge self-check:

### §22.1 Cross-reference resolution

- [x] Every internal §-reference resolves within this document.
- [x] Every external doctrine reference (DL-10, DL-11, DL-12, Zone 68, primitives, foundational §) resolves to a real anchor.
- [x] Every doc link (`[...](../../docs/...)` and `[...](system_map_three_layers_60706286.plan.md)`) resolves to a real file.
- [x] Every substrate table referenced in §7 is also referenced from §8-§17 + §18 scenario matrix.

### §22.2 Framing question coverage

- [x] Q1 (unknown-number first-touch): §6, §7.3, §7.4, §10, §18.1 scenarios 1-7.
- [x] Q2 (retroactive linking): §6, §7.9, §13.2, §18.3 scenarios 15-20.
- [x] Q3 (existing-patient inbound without going through c2): §6, §10, §18.2 scenarios 9-14.
- [x] Q4 (immutable event ledger): §7.4, §8.4, §12.5, §18.1, §18.7.
- [x] Q5 (queue ownership): §7.7, §7.8, §11 invariant 30, §18.6 scenarios 41-44.
- [x] Q6 (link / split / merge): §7.3, §7.9, §13.3, §18.3 scenarios 15-20.
- [x] Q7 (outbound to contact_identity OR patient_relationship): §7.6, §9, §14.5, §18.4 scenarios 21, 27.
- [x] Q8 (per-endpoint intent_class isolation / Zone 68): §7.2, §16, §18.5 scenarios 32-36.
- [x] Q9 (consent-at-rail enforcement): §9 8-gate, §12.4, §14.7, §18.4 scenarios 22-24, 28-30; §18.1 scenarios 7, 8.
- [x] Q10 (AI Response Assist drafting WITHOUT making AI participant): §11 invariant 39, §14.8, §18.4 scenarios 25-26.

### §22.3 §12-17 guardrail coverage in scenario matrix

- [x] §12.1 — search unsaved-history: §18.7 scenario 45.
- [x] §12.2 — full-text search: §18.7 scenario 46.
- [x] §12.3 — endpoint-scoped access: §18.7 scenarios 47-48; §18.5 scenario 34.
- [x] §12.4 — 8-gate deterministic outbound: §18.4 scenarios 22-24, 28; §18.1 scenarios 7-8.
- [x] §12.5 — immutable history: §18.7 scenarios 49-51; §18.4 scenario 31.
- [x] §12.6 — reactions / read-receipts: §18.7 scenario 55.
- [x] §12.7 — first-class media: §18.7 scenarios 52-53; §18.1 scenario 4; §18.2 scenario 11.
- [x] §12.8 — pre-account 5-disposition: §18.3 scenarios 18-19.
- [x] §13.1-5 — contact identity lifecycle: §18.1 scenarios 1-3; §18.2 scenarios 12-14; §18.3 scenarios 15-20.
- [x] §14.1-9 — phone-system parity: §18.6 scenarios 37-44; §18.1 scenarios 5-7; §18.4 scenarios 27-31.
- [x] §15.1-5 — settings taxonomy + precedence: §18.5 scenarios 32-33; §18.6 scenario 44.
- [x] §16.1-5 — multi-brand: §18.5 scenarios 32-36.
- [x] §17.1-6 — display identity + chips: §18.1 scenario 1; §18.2 scenarios 9-10; §18.4 scenario 21.

### §22.4 Doctrinal non-drift verification

- [x] No clause in §12-17 introduces new doctrine — all inherit from DL-10 / DL-11 / DL-12 / Zone 68.
- [x] No Twilio / vendor name leaks into domain substrate (§7) — only `rail_provider` / `provider_event_id` / `provider_endpoint_id` / `raw_provider_payload`.
- [x] No `chat_status` / `conversation_status` / `lead_stage` as independent column — display chips are projections per §17.2 + §17.5.
- [x] `messages.patient_id NOT NULL` non-foreclosure preserved — external-line gets its own message substrate per §1 audit + §11 invariant 17.
- [x] Settings precedence (§15.2) does not invert any DL-12 invariant 21 binding (safety/criticality > endpoint > queue > user > device).
- [x] AI Response Assist (DL-12 invariant 39) — AI never autonomously sends; drafts only; staff acceptance required; §14.8 ai_proposal drafts.
- [x] Zone 68 — per-endpoint `intent_class` is substrate-binding; single-rail marketing+clinical forbidden by §9 gate 1 + §7.2 enum.
- [x] Per-substrate storage (DL-12 invariant 17) — external_conversation_messages does not merge into c2 messages; projection LINK only via patient_projection_links.

### §22.5 Substrate-reality non-drift

- [x] All 9 new tables (§7.1-§7.9) confirmed not present in `supabase/migrations/`.
- [x] `lib/external-rails/` directory confirmed not present.
- [x] Existing Twilio stub at `lib/notifications/smsTwilio.ts` does not foreclose any e0 design decision; e1 supersedes with structured adapter.
- [x] c2 `messages` substrate constraint (`patient_id NOT NULL`) preserved.
- [x] No new sibling boundary admitted — external-line is the DL-11 sibling named in [communications_topology.md](../../docs/architecture/communications_topology.md) §11.

### §22.6 Phasing realism check

- [x] e1 deliverables (§21.2) are achievable in a single phase with disciplined scope.
- [x] e2 / e3+ / e5+ deferrals don't hide load-bearing dependencies (every e1 capability is operable without e2+).
- [x] Future preflights named in §21.6 are realistic in scope.

---

## §23 Cross-references and acknowledgments

### §23.1 Bound by

- [MAIN system map](system_map_three_layers_60706286.plan.md) — DL-10, DL-11, DL-12, **DL-13** binding locks; §1D.3 + **§1D.4**, §1G.1-§1G.11 + **§1G.12**, §1J.12 + **§1J.13**, §1N.8 + **§1N.9**, §1P + **§1P.15**, §1Q.14 + §1Q.14.1 + **§1Q.14.2** + §1Q.21 + §1Q.23, §1V.10 + **§1V.11** sections.
- [FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) — §4.A primitives (#1, #10, #16) + **§4.B primitives (#1, #5, #10, #11, #16) DL-13 binding**, §5.3 sibling boundary guards + **§5.3(c) external-communications-as-sibling guard**, **§5 sibling #20 `external_communications/` reserved per DL-13**, §7.13 + §7.13.12 + **§7.13.13 DL-13 long-form sub-doctrine (7 subsections)**, §7.14 + §7.14.9-10-18, §8.1 + **clauses 29-33 DL-13 binding + additional cross-cutting sub-disciplines**, §11.0 crosswalk **including DL-13 row**.
- [phase_4h_target_first_decision_record.md](../../docs/architecture/phase_4h_target_first_decision_record.md) — ADR §7.10, §7.13, §7.14, §7.15, **§7.16 (DL-13; 15 explicit REJECTED alternatives including refined "marketing+clinical traffic on same endpoint without intent classification" + clarified adapter path language)**.
- [communications_topology.md](../../docs/architecture/communications_topology.md) — §11 external-line **substrate spine (binding per DL-13) + concrete e0 preflight citation**; §12 internal collaboration + DL-12 cross-references + **DL-13 cross-references subsection**; §13 fax canonical placement.
- [v1_pressure_test_radar.md](../../docs/architecture/v1_pressure_test_radar.md) — Zone 1, Zone 17-28, Zone 30, Zone 35, Zone 47-48, Zone 53-54, Zone 56, Zone 58-59, Zone 61, Zone 63-68, **Zones 69-78 (NEW per DL-13; introduced by this preflight's R1-R9 arc): external-line rail-bypass / vendor-as-contact-source / chat_status-independent-field / multi-brand cross-leakage / STOP-cascading-across-intents / display projection drift / settings-precedence inversion / endpoint-policy-via-jsonb / voicemail-auto-files-to-chart / AI-as-participant drift**.
- [evolution_narrative.md](../../docs/architecture/evolution_narrative.md) — Act X (doctrine reconciliation arc) + **Act XIV (DL-13 R1-R9 pressure-test arc; cross-arc impact map)**.
- [PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) — c2 substrate non-foreclosure twin.

### §23.2 Bounds (this preflight is anchor for)

- Future preflight #2 (queue + care-team coverage) — must respect external-line queue FK admission + DL-12 invariant 30.
- Future preflight #6 (fax full architecture) — must respect §6 4-layer model + `communication_rails` fax slot + [communications_topology.md](../../docs/architecture/communications_topology.md) §13 composed-from-primitives discipline.
- Future preflight #7 (AI Response Assist session substrate) — must respect §14.8 ai_proposal draft semantics + DL-12 invariant 39.
- Future preflight #8 (internal_collaboration substrate) — must respect external-line vs internal_collaboration sibling boundary + DL-11.
- e1 SQL migration — must follow §7 substrate sketches + §22.5 substrate-reality non-drift.
- e1 rail adapter implementation — must follow §8 contract.
- e1 dispatch layer — must implement §9 8 gates.

### §23.3 Companion handoffs

- [HANDOFF_2026-05-12_phase_4h_external_line_e0_doctrine_complete.md](HANDOFF_2026-05-12_phase_4h_external_line_e0_doctrine_complete.md) — **DL-13 closing handoff (R1-R9 round-by-round synthesis + cross-arc impact map + deferred-items list + 5-arcs-in-2.5-days summary)**.
- [HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md](HANDOFF_2026-05-12_phase_4h_lifecycle_and_fax_doctrine.md) — DL-12 + fax canonical placement; external-line inherits invariants.
- [HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md](HANDOFF_2026-05-11_phase_4h_doctrine_reconciliation_complete.md) — Act X arc closure.
- [HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md](HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md) — DL-10 binding.
- [HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md](HANDOFF_2026-05-11_phase_4h_internal_collaboration_doctrine.md) — DL-11 binding.

### §23.4 Planning trail

R1 through R9 pressure-test trail (operator-parity → search-audit-refinement → contact-identity lifecycle → phone-system parity → settings taxonomy → multi-brand operating modes → display identity + status chips) captured in agent transcript record. R9-stable plan approved 2026-05-12 11:30 (Tuesday, May 12, 2026, 11:30 UTC-4) prior to drafting this preflight. No in-repo planning-trail file — context flows from approved R9 plan directly into the 23 sections above.

### §23.5 Status note

This preflight is PROPOSED as of 2026-05-12. **DL-13 doctrine landed 2026-05-12 from this preflight's R1-R9 arc** — the five binding clauses, sibling #20 admission, ADR §7.16, radar zones 69-78, topology §11/§12 cross-references, and evolution narrative Act XIV are now in MAIN + foundational + ADR + topology + radar + narrative as binding doctrine. **This preflight INHERITS from DL-13 post-arc** (header doctrine inheritance updated; §5 alignment table updated; §23.1 cross-references updated).

Activation to e1 requires:
1. Reviewer pass (architecture + clinical + compliance).
2. Substrate-reality re-audit at e1 start (re-verify nothing has landed between e0 PROPOSED and e1 activation that would foreclose design decisions).
3. e1 substrate migration follows §7 substrate sketches under DL-13 discipline: generic `provider_*` columns on substrate; Twilio adapter code confined to `lib/external-rails/twilio/`; OMNI canonical contact-identity flow; 8-gate orchestration layer above adapter; settings precedence runtime; display-projection-not-substrate.

**End of preflight.**

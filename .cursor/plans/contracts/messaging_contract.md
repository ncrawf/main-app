# Messaging / Communications — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the messaging substrate + outbound rail + conversation projections
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #5; Nick + Knox review gate)
Domain(s): `messaging`, `communications`, `outbound`
Lifecycle role: the TERRITORY for messaging — the message/conversation substrate across three surfaces, the rail-agnostic outbound execution layer, and scoped conversation projections. Transports + executes; does NOT resolve identity (Identity), orchestrate (CNS), or own care/clinical/commerce/doc truth (owning domains).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5 from the FULL messaging arc (FAC §1.5). **Controlling spine: DL-11 (3 surfaces) + DL-12 (thread/participant lifecycle) + DL-13 (rail-agnostic + 8-gate outbound + display-projection) + DL-10 messaging implication** (LOCKED); **shipped c2 build** (`messages`+`message_threads`, commit `8f02bc0`; `lib/messages/*` + `lib/outbound/*`); `communications_topology.md` + external-line e0/e1 preflights as design evidence; thesis v2 **§7.7.2 scoped conversation projections** as lens; §B `postPatientMessage`/outbound trace-lineage as build-state. Method per `00_architecture_artifact_index.md`.
Supersedes: scattered messaging framing (DL-11/12/13 remain LOCKED spine; §1G/§1Q/§1V evidence)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** this contract is the single build-facing home for the messaging substrate. DL-11/12/13 + legacy §1G/§1Q/§1V/§1J.12-13 are **evidence/provenance, not required runtime reading.** Build from THIS contract. (Note: legacy §1G bundles a large *care-coordination / clinical-loop* layer that is NOT messaging — see §3 scope-out + `REV-161`.)

---

## §1.5 Freshest-Authority Check (embedded)

| Layer | Source | Disposition |
|---|---|---|
| **Spine (LOCKED)** | DL-11 (3 surfaces) + DL-12 (lifecycle + 28 clarifications + AI Response Assist) + DL-13 (rail-agnostic + 8-gate + display-projection + handle-vs-person + 4×3 modes) + DL-10 messaging implication | clean-into-contract |
| **Shipped build (on main)** | c2 chat (`messages`+`message_threads`, `8f02bc0`) + `lib/messages/*` + `lib/outbound/*` | freshest build-state; preserve |
| **§B build-state** | `postPatientMessage` + outbound `trace_lineage` (branch-ahead, `REV-148`) | trace invariant; build-task recovery |
| **Design evidence** | `communications_topology.md` (4-layer + §11 ingress + §9 status) + external-line e0 preflight (9 sketches/55-scenario/R1-R9) + e1 + c2/e0/fax handoffs + §1G/§1Q/§1V | evidence (recognized) |
| **Thesis v2 (lens)** | §7.7.2 scoped conversation projections + per-event channel/surface_of_record + AI-drafts-human-sends | adds projection discipline over DL-11 surfaces; no conflict |

**Reconciliation:** thesis §7.7.2 ADDS the projection layer ("one messaging substrate, many scoped conversation views") over DL-11's three surfaces (substrate). Consonant — no stop-and-surface.

## §1 Purpose

Messaging owns the **message/conversation substrate (3 surfaces), the rail-agnostic outbound execution layer, and scoped conversation projections.** It **transports + executes + projects**; it does NOT decide *that* a care/scheduling/commerce message should exist, resolve who an unknown contact is, or own clinical/work/commerce/doc truth.

## §2 Governing thesis concepts

§7.7.2: *"One messaging substrate, many scoped conversation projections — not one global chat, not brand-only silos."* · per-event `channel_of_record` + `surface_of_record` (§7.5.1) · AI is a bounded participant: drafts, never autonomously sends (§12.8).

**Build depth bar (Lens A/B; registry + thesis §3.5):** the *actual build* must be **better than Hims async messaging on Day 1** and **Klara/RingCentral-class comms depth** (rich media, daily-care workflows, external-line) — messaging-only competitors (Klara/OhMD) lack clinical depth; OMNI has it via the substrate underneath. Quality bar = **Slack-with-patient-context + Epic Secure Chat + iMessage** (rich rendering, read-state, attachments). This is the build-facing comparator for Messaging.

## §3 Ownership boundary

**Owns:** the message/conversation substrate across DL-11's 3 surfaces; thread + participant lifecycle (DL-12); rail-agnostic outbound `outbound_job` + the deterministic 8-gate (DL-13); display-projection + scoped conversation projections (§7.7.2); the AI Response Assist *drafting flow* (draft only).
**Does NOT own:** **contact-identity *resolution*** (Identity; `SC-ID-PT-001`) — Messaging transports, Identity resolves *who*. **Orchestration / escalation / candidate logic** (CNS; `D0-GRD-005` — messaging is input/output, not the brain). **Clinical documentation truth** (D7). **Work / task / care-completion truth** (D5 / provider queue / CNS). **The decision that a care/scheduling/commerce message should exist** (CNS/owning domain authorizes; see §6 + §8.9).

**Legacy §1G scope-out (backfill check 2026-05-31 — binding):** the legacy system map §1G ("Messaging, escalation, **and the clinical loop**") bundles a large **care-coordination / clinical-loop layer** that is explicitly **NOT** messaging substrate and is correctly excluded here: the **case-ownership tuple** (`responsible_party` per `care_program`), **canonical case-state read model** (stage + `primary_blocker` + owner), the **`clinical_required` permit-gate** (a message can BLOCK a prescribe/continuation permit — the *gate* is care-coordination, the *classification flag* is messaging §9), **continuation** (Stage 6), **provider workload/queues + provider workspace** (1G.1/1G.4-1G.8), **clinician continuity** (1G.9), **patient action items** (1G.11), **exception handling** (1G.5). These belong to **D5 (care coordination) + CNS (orchestration/provider-tasks/queue)**; `care_program` + the case-state tuple + the `clinical_required` permit-gate need a verified home. **This hard-won work must not be lost — routed to `REV-161`.** Messaging owns only the message-level `classification` flag (§9), not the permit-gate.

## §4 Three messaging surfaces (DL-11; shared primitives, separate storage/access/audit/lifecycle)

1. **Patient-facing chat** — `messages` + `message_threads` (c2 SHIPPED `8f02bc0`); `patient_id` + `care_program_id`-scoped today, relationship-aware per DL-10.
2. **External-line / pre-account** — contact-identity *transport* layer + rail inbound (Twilio/SMS/voice/fax) + ops triage. **Resolution of who → Identity (`SC-ID-PT-001`); Messaging owns the transport/queue, NOT the identity decision.**
3. **Internal team collaboration** — staff threads + first-class object attachment (patient/encounter/lab/order/appointment/document/care_program/billing/adverse_event) + patient-less threads (group/1:1/ops). **Sibling #19.**

## §5 Thread + participant lifecycle (DL-12)

Parameterized by **thread class** (casual / clinical / billing / safety / adverse-event / patient-facing). **Per-substrate thread storage — NO mega-table** (patient chat = `messages`+`message_threads`; external-line = its substrate; internal-collab = its sibling). **Search/discovery = future projection over substrates, never a new source of truth.** Participant membership for patient-facing threads is DERIVED from care-team/coverage (per DL-12 inv 37), never hardcoded.

## §6 Rail-agnostic outbound (DL-13) — execution, NOT origination

Vendor code confined to adapters (`lib/external-rails/<provider>/`); OMNI canonical (vendor-adopt-not-write; Twilio is the rail, not the contact DB). Every rule/template/automated/campaign outbound passes the **deterministic 8-gate** (endpoint-intent · consent/opt-in · STOP/HELP · template/disclosure · quiet-hours · idempotency · rate-limit · prohibited-claims).

**Binding (Caution 2): Messaging EXECUTES authorized outbound; it does NOT originate care logic.** Flow: **CNS / owning domain proposes/authorizes** an outbound action → **Messaging validates rail/recipient/consent/channel/template/8-gate → sends + logs (or blocks).** Messaging MAY block unsafe sends; it MUST NOT decide that a clinical/scheduling/commerce message *should exist*.

## §7 Display-projection + scoped conversation projections

Display identity + status chips (Unknown/Lead/Booked/Active/Lapsed/Opted-Out/Needs-Action/etc.) are **computed projections** over substrate (contact_identities + patient_relationships + appointment/care/intake/consent/billing/clinical state) — **never** stored `chat_status`/`display_state` columns (DL-13). Per §7.7.2: ONE messaging substrate → MANY scoped conversation views (per recipient + per scope + per purpose + per duration; per §7.5.4 consent specificity).

## §8 Invariants / rejection rules (the gems — guardrail-backed)

1. **No external-line collapse** (`D0W3B-GRD-001`): unknown/pre-account inbound NEVER collapses into patient-bound rows; route through contact-identity → Identity resolution (`SC-ID-PT-001`).
2. **Read-receipt ≠ work-done** (`D0W3B-GRD-002`): seen/read state is informational; never implies queue/clinical/ops completion.
3. **No AI silent-send** (`D0W3B-GRD-003` + DL-13 Extreme-4): AI Response Assist DRAFTS only; human-approved send OR deterministic rule/template policy; AI is NEVER a participant/author on external conversations. Accepted drafts authored as `staff_with_ai_assist` with AI provenance.
4. **CNS ≠ messaging rail engine** (`D0-GRD-005`): messaging is input/output; CNS orchestrates. No cadence-first outreach without action-usefulness (`D0-GRD-009`).
5. **Display-projection-not-substrate** (DL-13 Extreme-3): no independent mutable UI-state columns.
6. **Rail-agnostic** (DL-13 Extreme-1/2): no vendor SID as primary key; no vendor address book as canonical contact store.
7. **Urgent/safety honesty** (DL-12 inv 27): "we monitor during business hours" — never "immediate emergency response" unless the operational pathway supports it.
8. **(Caution 1) Internal collaboration is a messaging surface, NOT clinical/care truth.** Internal-collab threads MAY attach to patient/occurrence/lab/document/task/case objects, but they do **NOT** become the clinical record (D7), documentation truth, care decision (D5/CNS), or task/work completion record (D5/provider queue). Team chat ≠ chart ≠ task-done.
9. **(Caution 2) Outbound execution ≠ care origination** (§6): CNS/owning-domain authorization precedes send; Messaging validates/blocks/sends/logs only.

## §9 Canonical objects

`messages` + `message_threads` (patient chat) · external-line transport substrate + ops-triage queue (resolution=Identity) · `internal_collaboration` thread + `internal_thread_object_links` (typed object attachment) · `conversation_scope` · thread `class` (6) · **message `classification`** (`clinical_required` / `clinical_optional` / `operational` / `system_notification` — on `messages.metadata`/`message_thread.metadata`; the messaging-substrate flag + `awaiting_response`; the PERMIT-GATE this flag can trigger is care-coordination, not messaging — §3 scope-out) · `endpoint` · `outbound_job` + 8-gate state · AI Response Assist `draft` (+ `ai_proposal_id` provenance) · display = computed projection (no stored status).

## §10 Disposition table

| Prior decision / primitive | Disposition | Note |
|---|---|---|
| DL-11 three surfaces | **preserve (spine)** | §4; shared primitives, separate storage |
| DL-12 thread/participant lifecycle + 28 clarifications + AI Response Assist | **preserve** | §5/§8.3 |
| DL-13 rail-agnostic + 8-gate + display-projection + handle-vs-person + 4×3 modes | **preserve** | §6/§7/§8 |
| c2 shipped build (`messages`+`message_threads`, `lib/messages/*`, `lib/outbound/*`) | **preserve (build-state)** | §4/§9 |
| §B `postPatientMessage`/outbound trace_lineage | **inform trace invariant; build-task** | not contract; `REV-148` |
| internal_collaboration (sibling #19) | **fold as Messaging surface, with §8.8 hard boundary** | not clinical/work truth |
| DL-11/13 4 rejected extremes (Twilio-as-substrate / vendor-address-book / chat_status-stored / AI-as-participant) | **preserve rejections** | §8.3/§8.5/§8.6 |
| contact-identity resolution | **move → Identity** (`SC-ID-PT-001`) | §3/§4.2 |
| orchestration/escalation | **move → CNS** | §3/§6/§8.4 |
| legacy §1G care-coordination/clinical-loop (case-ownership tuple, canonical case-state, `clinical_required` permit-gate, continuation, provider queue/workspace 1G.1/1G.4-1G.9, patient action items 1G.11, exception handling 1G.5) | **move → D5 (care coordination) + CNS (orchestration/queue)**; verify landed | `REV-161` — hard-won work; not messaging; must not be lost |
| legacy §1G/§1J.12-13 message `classification` + thread visibility + handle-vs-person | **preserve (messaging substrate)** | §9 classification enum + DL-13 handle-vs-person |

## §11 Seams

- `messaging → CNS` (inbound escalation candidate; e.g., urgency detected → CNS) ; `CNS → outbound` (authorized action → Messaging 8-gate → send). 
- `SC-ID-PT-001` contact-identity → Identity resolution (Messaging emits the contact event).
- `messaging ↔ D3` (`appointment_confirmation_event` references messaging by FK; DL-20 inv 40).
- `internal_collab → object attachment` (typed links to patient/occurrence/lab/doc/task/case — references, not ownership).

## §12 Open items (→ `08`)

- **Internal-collaboration scope** folded here with §8.8 boundary — confirm it shouldn't be its own contract (it's sibling #19, substantial). (`REV-150`)
- §B trace-lineage build recovery + external-line **e1 execution substrate** (preflight, not built).
- Rules/templates §1Q (`REV-149`) intersects outbound heavily (templates/8-gate) — coordinate at that pass.
- **§1G care-coordination / clinical-loop layer homing** (`REV-161`): the large §1G body (case-ownership tuple, canonical case-state read model, `clinical_required` permit-gate, continuation Stage 6, provider queue/workspace, clinician continuity, patient action items, exception handling) is correctly scoped OUT of messaging — but must be verified-landed in D5 (care coordination) + CNS, including a home for `care_program` + the case-state tuple + the permit-gate. Hard-won; route, don't lose.

## §13 Evidence sources

DL-11/12/13 + DL-10 messaging implication (system map) · c2 build (`8f02bc0`; `lib/messages/*` + `lib/outbound/*`) · `communications_topology.md` (4-layer + §11 + §9) · external-line e0 preflight (9 sketches/55-scenario/R1-R9) + e1 preflight · c2/e0/fax handoffs · §1G/§1Q/§1V · thesis v2 §7.7.2 + §7.5.1 + §12.8 · §B trace-lineage runtime (d753a64).

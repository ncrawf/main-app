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

Vendor code confined to adapters (`lib/external-rails/<provider>/`); OMNI canonical (vendor-adopt-not-write; Twilio is the rail, not the contact DB). Every rule/template/automated/campaign outbound passes the **deterministic 8-gate** (endpoint-intent · consent/opt-in · STOP/HELP · template/disclosure · quiet-hours · idempotency · rate-limit · prohibited-claims). The 8-gate's consent/opt-in, template/disclosure, and prohibited-claims checks **enforce the send-policy governance defined in §6.1** — the gate is the deterministic enforcement point; §6.1 is the governance it computes against.

**Binding (Caution 2): Messaging EXECUTES authorized outbound; it does NOT originate care logic.** Flow: **CNS / owning domain proposes/authorizes** an outbound action → **Messaging validates rail/recipient/consent/channel/template/8-gate → sends + logs (or blocks).** Messaging MAY block unsafe sends; it MUST NOT decide that a clinical/scheduling/commerce message *should exist*.

### §6.1 Send-policy governance — the privacy/communication triple-axis (what the 8-gate enforces)

Mantra: **high-signal outside, full detail inside** — outside channels (SMS/email/push/paper/vendor) carry enough to drive action; full clinical detail lives behind authenticated secure view + provider phone. The send decision is computed from three orthogonal axes:

- **`privacy_exposure_level` (0–5)** — how much PHI the message content reveals: 0 `no_phi` · 1 `existence_only` · 2 `low_context_phi` (care relationship + general action; no pathway/condition/dose/lab) · 3 `pathway_named_phi` · 4 `clinical_detail_phi` (med+dose, labs, diagnosis — **secure-view/phone ONLY**) · 5 `sensitive_clinical_phi` (sexual/mental-health/pregnancy/GAC/controlled-substance — **secure-view/phone ONLY; push header-only**). Declared on template + action (rules engine §1Q; `REV-149`).
- **`pathway_sensitivity` (low / moderate / high / extreme)** — intrinsic to the pathway; **CONSUMED from Settings/catalog (Messaging does not own its declaration).** Caps the outside-secure ceiling, decoupled from per-message tier (an extreme pathway can still send tier_2).
- **`message_intent` (10-value: account / operational / clinical / safety / billing / support / marketing / education / vendor / internal)** — drives consent path + send-policy class. Declared on template + action. (Marketing is an intent that consumes tiers 0/1/3 with consent — NOT its own tier.)

**Channel policy matrix (per-channel ceiling):** SMS/email default tier_2, uplift to tier_3 only under the 5-condition rule; push tier_2 (header-only when sensitive); in-app + provider-phone + BAA-internal = tier_5; non-BAA internal = tier_2 max; vendor = structured-only. **5-condition tier_3 rule (ALL must hold):** `pathway_sensitivity ∈ {low, moderate}` · patient holds the outside-secure-comm consent · `intent ∈ {clinical, marketing, education}` · template declares exposure 3 · action declares intended exposure 3.

**Vendor minimum-necessary + redact-then-retry:** every vendor-facing outbound is bound by a declarative `vendor_minimum_necessary_scope`; on over-scope → block → redact to allowed subset → retry → block-with-owner-alert only if the safe subset cannot satisfy the action (never deadlock fulfillment when redaction is feasible).

**This is a decomposed cross-cutting concern — Messaging owns only its slice.** Messaging owns the send-policy COMPUTATION + channel matrix + render strategy + vendor scope. Declaration of `pathway_sensitivity` = Settings/catalog (`SC-SET-MSG-001`, staged). Declaration of `privacy_exposure_level`/`message_intent` on templates/actions = rules engine §1Q (`REV-149`). Typed `patient_consents` + the 6-toggle patient UI mapping = D7 consent layer (`SC-D7-MSG-001`, staged). Consent-GATE enforcement (require-consent-X / reject-if-missing) = RBAC / Boundary-Policy (staged, `REV-169`). The 6-step safety/emergency send SEQUENCE = CNS orchestration (CNS §10.2); Messaging EXECUTES those sends under this policy. (Source gem: `audits/2026-04-30_privacy_communication_governance.md`; full example library + patch list stays there as evidence.)

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
10. **Pathway-sensitivity hard cap — no-consent-override** (§6.1): for `pathway_sensitivity = extreme` (TRT/ED/peptides/mental-health), outside-secure stays tier_2 forever — NO consent unlocks tier_3. **Patient consent cannot override a regulatory/clinical-safety floor.**
11. **Prohibited outside-secure content (regardless of consent):** specific lab values · diagnosis names · medication+dose · sensitive sexual-health specifics · pregnancy/cycle · mental-health-crisis detail · adverse-event clinical detail · controlled-substance specifics · genetic/substance-use — tier_4/5, secure-view/phone only, NEVER on SMS/email/push/non-BAA.
12. **Preference TIGHTENS, never LOOSENS** (§6.1): a patient channel/tier preference can only narrow below the template/channel/pathway cap, never raise above it. **Safety-vague-never-raises-ceiling:** a `safety`-intent message always fires (vague companion at tier_2) regardless of preference, and its outside body stays tier_2 even when the underlying clinical event is tier_5.

## §9 Canonical objects

`messages` + `message_threads` (patient chat) · external-line transport substrate + ops-triage queue (resolution=Identity) · `internal_collaboration` thread + `internal_thread_object_links` (typed object attachment) · `conversation_scope` · thread `class` (6) · **message `classification`** (`clinical_required` / `clinical_optional` / `operational` / `system_notification` — on `messages.metadata`/`message_thread.metadata`; the messaging-substrate flag + `awaiting_response`; the PERMIT-GATE this flag can trigger is care-coordination, not messaging — §3 scope-out) · `endpoint` · `outbound_job` + 8-gate state · **send-policy (§6.1): `privacy_exposure_level` (0–5) · `message_intent` (10-value) · `channel_policy_matrix` · `vendor_minimum_necessary_scope`** (consumes `pathway_sensitivity` from Settings/catalog + typed `patient_consents` from D7) · AI Response Assist `draft` (+ `ai_proposal_id` provenance) · display = computed projection (no stored status).

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
| privacy/comms governance triple-axis (exposure-level / pathway-sensitivity / intent + channel matrix + 5-condition tier_3 + vendor min-necessary) — source `audits/2026-04-30_privacy_communication_governance.md` (`REV-169`) | **incorporated → §6.1 + §8 inv 10-12 + §9** (Messaging's send-policy slice) | rest of the cross-cutting gem decomposed: pathway_sensitivity→Settings · exposure/intent declaration→rules-engine §1Q · typed consents+6-toggle→D7 §5 · consent-gate enforcement→RBAC (staged) · 6-step safety sequence→CNS §10.2 |

## §11 Seams

- `messaging → CNS` (inbound escalation candidate; e.g., urgency detected → CNS) ; `CNS → outbound` (authorized action → Messaging 8-gate → send). 
- `SC-ID-PT-001` contact-identity → Identity resolution (Messaging emits the contact event).
- `messaging ↔ D3` (`appointment_confirmation_event` references messaging by FK; DL-20 inv 40).
- `internal_collab → object attachment` (typed links to patient/occurrence/lab/doc/task/case — references, not ownership).
- **`SC-SET-MSG-001`** Settings/catalog → Messaging: `pathway_sensitivity` per pathway/service (send-policy input, §6.1). **Staged** (Settings not drafted).
- **`SC-D7-MSG-001`** D7 consent layer → Messaging: typed `patient_consents` state for the send-policy consent gate (§6.1). **Staged** (consent records integrated in D7 §5).
- **`CNS → outbound (safety sequence)`** CNS §10.2 6-step emergency orchestration drives the ordered sends; Messaging executes each under §6.1 caps.

## §12 Open items (→ `08`)

- **Internal-collaboration scope** folded here with §8.8 boundary — confirm it shouldn't be its own contract (it's sibling #19, substantial). (`REV-150`)
- §B trace-lineage build recovery + external-line **e1 execution substrate** (preflight, not built).
- Rules/templates §1Q (`REV-149`) intersects outbound heavily (templates/8-gate) — coordinate at that pass.
- **Privacy/comms send-policy cross-cutting placement** (`REV-169`): Messaging owns the send-policy slice (§6.1); the consent-GATE enforcement (require/reject) is **staged for the RBAC/Boundary-Policy native draft**, and `pathway_sensitivity` declaration is **staged for Settings/catalog**. Verify both land when those domains draft.
- **§1G care-coordination / clinical-loop layer homing** (`REV-161`): the large §1G body (case-ownership tuple, canonical case-state read model, `clinical_required` permit-gate, continuation Stage 6, provider queue/workspace, clinician continuity, patient action items, exception handling) is correctly scoped OUT of messaging — but must be verified-landed in D5 (care coordination) + CNS, including a home for `care_program` + the case-state tuple + the permit-gate. Hard-won; route, don't lose.

## §13 Evidence sources

DL-11/12/13 + DL-10 messaging implication (system map) · c2 build (`8f02bc0`; `lib/messages/*` + `lib/outbound/*`) · `communications_topology.md` (4-layer + §11 + §9) · external-line e0 preflight (9 sketches/55-scenario/R1-R9) + e1 preflight · c2/e0/fax handoffs · §1G/§1Q/§1V · thesis v2 §7.7.2 + §7.5.1 + §12.8 · §B trace-lineage runtime (d753a64).

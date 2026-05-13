# FUTURE ARC — PHI Surface Governance (human-layer leakage, notification preview policy, mobile posture, screenshot discouragement, attachment access expiration, AI visibility scopes)

**Status:** RESERVED FUTURE ARC — 2026-05-12 capture (post-R6 follow-up to e1 preflight)
**Type:** Future doctrine arc. Not a preflight. Not a design. Not active doctrine. Preserves the operational-layer PHI leakage question for activation when scale + compliance signal arrives.
**Likely DL designation when activated:** sibling-to-DL doctrine — touches primitive #3 (disclosure policy), primitive #21 (consent), DL-12 invariant 25 (notification preview/snippet privacy), DL-13 invariant 3 (settings precedence layer 1). May not need its own DL number; may extend existing primitives + DL-12.
**Origin:** R1+R6 follow-up conversation 2026-05-12 evening — ChatGPT identified seam 6: "the substrate can be perfect and operations still leak." Healthcare ops seam, not Twilio seam.
**Folds in:** seam 6 (invisible PHI leakage) from R1+R6 follow-up.
**Doctrine NOT introduced (binding):** this document does NOT introduce doctrine; it captures a future arc.
**Companion docs:**
- [FUTURE_ARC_2026-05-12_federation_permeability_topology.md](FUTURE_ARC_2026-05-12_federation_permeability_topology.md) (A1)
- [FUTURE_ARC_2026-05-12_prioritization_attention_economics.md](FUTURE_ARC_2026-05-12_prioritization_attention_economics.md) (A2)
- [PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md](PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md) (e1 §26 cross-reference origin)

---

## §1 Premise

The framing that ChatGPT surfaced:

> Not architecture leakage. Human leakage.
>
> The substrate can be perfect and operations still leak.

This is the seam DL-13 / settings precedence / 8-gate / RLS / audit_events doctrine **DOES NOT REACH**. Those disciplines prevent system-layer leakage: vendor lock-in, intent misclassification, off-hours sends, prohibited claims, cross-tenant data bleed, status-chip drift.

But healthcare ops leakage is mostly NOT system-layer. It's **operational** and **human**:

- Staff screenshots a conversation and texts it to a colleague via personal phone.
- Staff forwards an email containing PHI to an outside personal address ("for my notes").
- Mobile notification preview shows PHI on a locked screen in a coffee shop.
- Push notification arrives during a video call being screen-shared.
- AI Response Assist drafts a message and the draft sits in browser history.
- Staff exports an attachment to their desktop for "easier review" and never deletes it.
- Lock-screen preview shows "Sarah Miller: my testosterone results were abnormal" on a shared family iPad.
- Staff copy-pastes PHI into Slack to ask a colleague a question.
- A screen-share during a planning meeting accidentally reveals a patient's chart.

**Substrate cannot stop these.** They're operational realities. The doctrine arc that addresses them is **PHI surface governance**.

### §1.A Why this is a doctrine arc

These aren't features. They're a coherent doctrine about **how OMNI's information surfaces are designed, presented, controlled, and audited at the human-interaction layer** — not at the substrate.

The doctrine has to answer:

- What's the **minimum-information-surface principle**? (Surface only what's needed; suppress everything else by default.)
- What governs **preview content**? (Notification body; search snippet; thumbnail; "first 50 chars of message" — every one of these is a potential leak.)
- What's the **mobile posture**? (Locked-screen content; biometric re-auth; screenshot-prevention if supported; screen-recording detection.)
- What's the **export auditability**? (Forward / copy / save-attachment / print — all leakage paths; what's logged, what's restricted, what's outright forbidden.)
- What's **AI's visibility scope**? (What PHI is the AI Response Assist drafting model allowed to see? Can AI summarize PHI to itself for context? Audit trail?)
- What's **attachment access expiration**? (Time-bound? Session-bound? Click-bound? Should PDFs sent to staff inbox auto-expire after N hours unless explicitly saved-to-chart?)
- What's the **leakage incident response pattern**? (When staff reports "I think I screenshotted something I shouldn't have," what's the workflow?)

These are doctrine questions. Substrate already has the audit primitives + settings precedence primitives; doctrine specifies how the surfaces consume them.

### §1.B Why this is orthogonal to substrate (binding)

DL-13 / settings precedence / 8-gate / RLS prevent system-layer leakage. They are **necessary but not sufficient** for full PHI protection.

PHI surface governance is **complementary**, not substitute. It addresses the operational + human leakage paths that no substrate can prevent. It applies governance + UI design + audit + training to surfaces that the substrate cannot enforce.

**Cross-link to existing doctrine:**

- DL-12 invariant 25 (notification preview/snippet privacy) — already specifies that preview content respects privacy tier + relationship scope + user/device context.
- DL-13 invariant 3 (settings precedence layer 1) — admits compliance/retention/preview-policy as highest-precedence layer.
- Primitive #3 (disclosure policy) — admits per-tier clamps on outbound content.
- Primitive #21 (consent) — admits per-operation consent gating.

The PHI surface governance arc EXTENDS these into a coherent operational doctrine.

### §1.C Why this is post-e1

e1 has minimum-viable preview privacy (§1Q.14.1(e) cross-ref). e1 has §17.6 mobile responsive. e1 has §0.5 HIPAA + BAA precondition.

What e1 does NOT have:

- Comprehensive preview-policy taxonomy.
- Screenshot-prevention or screen-recording-detection (where platform supports).
- Forward/copy/export auditability beyond basic `audit_events`.
- Time-bound attachment access (attachments are accessible while scan_status='clean'; no expiry).
- AI visibility scope contracts (AI Response Assist deferred to post-e1).
- Staff training documentation.
- Incident response pattern (what happens when staff reports a leak).

The arc fires when operational scale + compliance review reveal gaps.

---

## §2 The leakage surfaces (the concrete catalog)

The arc must address each of these directly when activated.

### §2.A Screenshotting

Staff takes a screenshot of OMNI screen for any reason — to share with colleague, to keep for notes, to send to themselves via personal email, to use as a meeting reference.

**Surfaces:** any screen showing PHI. Inbox lists. Conversation details. Patient charts. Search results. Mobile previews.

**Doctrine angle:**

- Can OMNI detect screenshot? (iOS / macOS may notify; Android limited; browser cannot.)
- Should OMNI flag suspicious screenshots in audit?
- Should OMNI watermark screens with staff name + timestamp to discourage?
- Should OMNI display PHI-redacted by default and require explicit "reveal" click? (Click-to-reveal is audited.)
- Staff training: "if you screenshot for legitimate reason, here's the workflow."

### §2.B Forwarding

Staff forwards an OMNI email (with PHI) to outside personal address; OR copies an OMNI message body and pastes into external chat / email.

**Surfaces:** email notifications; SMS notifications; in-app text content; AI Response Assist draft text.

**Doctrine angle:**

- Should email notifications contain PHI body at all? Or "you have a new message; click to view in OMNI"?
- Should mobile push notifications carry PHI body? Or sanitized "new message from your care team"?
- Should staff in-app message content be copy-restricted (browser-level)?
- Audit pattern when copy-to-clipboard detected?

### §2.C Copy/paste

Staff copies PHI from OMNI to paste into:

- A Slack message to ask a colleague a question.
- A Google Doc note for personal reference.
- An external AI tool (ChatGPT) for help drafting a reply (this is zone 67 + e1 §18 deferral).
- An email to a referring provider.

**Surfaces:** all text content displays.

**Doctrine angle:**

- Browser-level copy-prevention (`user-select: none`) — annoys staff but cuts casual leakage.
- Selective copy-prevention (sensitive fields blocked; standard fields allowed).
- Audit clipboard events where API permits.
- Replace external-tool-paste motivation with internal alternatives (AI Response Assist; secure colleague-consult workflow).

### §2.D Wrong recipient

Staff types a reply meant for Sarah and sends to John (autocomplete error; muscle memory; conversation switch confusion).

**Surfaces:** outbound message composition; outbound endpoint selection (e1 §13 already mitigates with "Replying as / Sending from" explicit display).

**Doctrine angle:**

- Pre-send confirmation when recipient has changed or when sender pattern is unusual.
- Cooldown / soft-undo window for outbound (e.g., 5-second cancel before adapter dispatches; gate-6 idempotency partially addresses).
- Audit pattern when recipient differs from previous N replies in conversation.

### §2.E Mobile notifications + lock-screen previews

Mobile push notification arrives on locked phone. Notification body shows: "Sarah Miller: my testosterone results were abnormal."

**Surfaces:** any mobile push payload; iOS / Android lock-screen notification preview.

**Doctrine angle:**

- Notification payload should NEVER contain PHI body by default. "You have a new message; tap to view" pattern.
- Per-staff config: PHI-in-preview opt-in (with audit).
- Per-device config: PHI-in-preview enabled only when device is biometric-locked.
- Compliance posture: lock-screen previews are a known HIPAA risk.

### §2.F Mobile app screenshots saved to camera roll

Staff screenshots a patient chart on phone; screenshot saves to camera roll; auto-backed-up to iCloud / Google Photos / Dropbox / Personal Drive.

**Surfaces:** any mobile screen.

**Doctrine angle:**

- Mobile-specific screenshot-prevention API (iOS `isCaptured`, Android `FLAG_SECURE`).
- Audit log when device reports screen captured (platform-permitting).
- Watermark with staff ID + timestamp.

### §2.G AI summarization mistakes

AI Response Assist (post-e1 arc) summarizes a thread for staff context. Summary includes PHI. Summary persists in browser memory / log / training data.

**Surfaces:** AI Response Assist drafting UI; AI summary panels; AI logs.

**Doctrine angle:**

- AI visibility scope contracts: what PHI is the model allowed to see? Per-staff capability + per-relationship scope + per-conversation sensitivity.
- AI memory contract: does the model retain context across sessions? No, unless explicit (and audited).
- AI logs: are PHI-bearing prompts retained? For how long? Who can access?
- AI training: model providers MUST NOT train on PHI from OMNI (contractual + technical).

### §2.H Staff exporting attachments

Staff downloads an attachment (MMS photo, PDF) to local desktop "for easier review." Forgets to delete.

**Surfaces:** attachment download buttons; "save" actions.

**Doctrine angle:**

- Time-bound attachment access (PDF viewer expires after N minutes unless explicitly extended).
- Download-prevention or download-with-audit-and-watermark.
- Auto-cleanup workflow: "you downloaded 5 attachments this week; delete?"
- Per-attachment retention policy.

### §2.I Screen-share during meetings

Staff joins a Zoom / Google Meet / Microsoft Teams meeting, shares screen, and forgets OMNI is open. Patient chart visible to everyone on the call.

**Surfaces:** all OMNI desktop screens.

**Doctrine angle:**

- Inactivity-blur (OMNI tab grays out PHI after N seconds of no interaction; click to restore).
- Screen-share-detection (some browsers expose; if detected, auto-blur or prompt).
- "Presentation mode" toggle for staff who often screen-share — surfaces non-PHI elements only.

### §2.J Hands-free voice assistant accidents

Staff has Siri / Google Assistant / Alexa active near phone; voice assistant reads OMNI notifications aloud.

**Surfaces:** mobile push notifications (especially during voice-assistant context).

**Doctrine angle:**

- Suppress voice-readable PHI in push payloads.
- Per-notification "do not read aloud" flag.
- Detection of voice-assistant context (platform-permitting).

### §2.K Workspace mixing (personal + work)

Staff uses personal browser profile for OMNI; later signs into personal Gmail in same profile; auto-suggest leaks OMNI patient names into personal email autocomplete.

**Surfaces:** browser autofill / autocomplete; browser history; browser session sharing.

**Doctrine angle:**

- Compliance recommendation: staff should use dedicated work profile / work device for OMNI.
- Session cookie isolation; SameSite + Secure + HttpOnly enforcement.
- Audit pattern when OMNI accessed from unusual browser fingerprint.

---

## §3 Why this is orthogonal to substrate (the framing clause)

Each of the leakage surfaces above has the property that:

- The substrate did its job correctly (data was where it should be; RLS held; audit_events fired; gate-system enforced).
- AND PHI still leaked at the human / device / UI / external-tool layer.

The substrate cannot reach into the human or the device. The PHI surface governance arc is the doctrine that addresses what substrate cannot.

**Binding clause when this arc activates:**

> PHI surface governance is operational + UI + audit + training doctrine that EXTENDS substrate discipline. The substrate's job is to enforce system-layer correctness. This arc's job is to govern the operational + human surface that the substrate cannot enforce.

The two are complementary; neither substitutes for the other.

---

## §4 Governance dimensions (when the arc activates)

The doctrine must specify each of these.

### §4.A Notification preview policy

Per-notification-type policy on what's displayed in:

- Email notification body.
- SMS notification body.
- In-app push notification body.
- Mobile lock-screen preview.
- Web browser notification body.
- macOS / Windows desktop notification body.

Taxonomy:

- **No-PHI preview** (default for high-sensitivity): "You have a new message in OMNI. Tap to view."
- **Sender-only preview**: "Cultured Front Desk: new message. Tap to view."
- **Sender + intent preview**: "Cultured Front Desk: appointment reminder. Tap to view."
- **Body preview (only with explicit opt-in)**: full message body.

Cross-reference: DL-12 invariant 25 (notification preview/snippet privacy) is the foundational primitive that this arc extends.

### §4.B Redaction at preview surfaces

When PHI must appear in a preview surface, automatic redaction:

- Names → initials.
- Phone numbers → last 4 digits.
- Medical terms → generic ("lab result" instead of "testosterone result").
- Locations → generic ("at your clinic" instead of specific location).

Per-surface redaction policy; per-relationship-sensitivity adjustment.

### §4.C Mobile posture

Per-device + per-app policy:

- Biometric re-auth on app open after N minutes of inactivity.
- App-level passcode separate from device passcode.
- Screenshot-prevention API (iOS / Android where supported).
- Screen-recording detection.
- Watermark with staff ID + timestamp.
- Inactivity-blur in foreground app.
- Background-mode blur (app preview in app-switcher shows nothing).
- Camera-roll exclusion for OMNI screenshots (iOS Photos library).

### §4.D Forward / copy / export audit pattern

Per-action audit + (where supported) restriction:

- Email forward — restrict at email-client level if email is OMNI-originated and contains PHI.
- Copy-to-clipboard — browser-level audit where Clipboard API permits; visual indicator that copy is logged.
- Save-as / download-attachment — `audit_events` row with actor + timestamp + reason (optional reason_code dropdown for compliance).
- Print — print-dialog interception (where supported) + audit.
- Screen-share detection (where supported).

### §4.E AI visibility scope contracts

Per-AI-feature scope contract:

- What patient data is the AI Response Assist drafting model allowed to see for context?
- What conversation history?
- What chart fields?
- What memory retention across sessions?
- What logs are retained?
- What's the contract with the model provider re: PHI training?
- Audit trail of every AI invocation: prompt + completion + edit distance + final body + staff actor.

### §4.F Attachment access expiration

Per-attachment policy:

- Default expiration: N hours after last access (configurable per artifact_kind).
- Time-bound viewing (PDF viewer expires; image preview expires).
- Audit on every attachment open.
- Re-fetch requires capability re-check.
- Soft-delete with retention (per e1 §6.9 amendment).

### §4.G Leakage incident response pattern

Per-incident workflow:

- Staff self-reports a suspected leak ("I screenshotted the wrong thing"; "I accidentally forwarded PHI"; "my phone got stolen").
- Compliance officer notified.
- Incident logged + classified.
- Remediation steps (revoke session; re-auth all devices; patient notification if breach reportable; documentation for breach assessment).

### §4.H Cross-feature integration

The arc must specify how governance interacts with:

- AI Response Assist (post-e1 arc).
- Federation (A1) — cross-entity PHI handling.
- Mobile UI (e1 §17.6 + future arc).
- Audit + reporting.
- Compliance reporting (HIPAA breach notification).

---

## §5 Substrate building blocks already present

OMNI is partially aligned for this arc.

- **`audit_events`** — admits per-action audit; extensible to copy/forward/export/print/screen-capture events.
- **`external_conversation_artifacts`** (e1 §6.9) — admits soft delete; admits `retention_class`; future per-artifact expiration policy via new column.
- **DL-12 invariant 25** — notification preview/snippet privacy doctrine; primitive for this arc.
- **DL-13 invariant 3 (settings precedence layer 1)** — admits compliance/retention/preview-policy as highest layer; primitive for this arc.
- **Primitive #3 (disclosure policy)** — admits per-tier clamps on outbound; extensible to per-preview clamps.
- **Primitive #21 (consent)** — admits per-operation consent gating.
- **MAIN §1Q.14.1(e)** — notification preview/snippet privacy as a §1Q-binding sub-clause; doctrinal pointer to where preview governance lives.
- **MAIN §1V.10(d)** — legal hold / eDiscovery / compliance export as administrative surfaces.
- **e1 §0.5** — HIPAA preconditions (BAA / A2P 10DLC / HIPAA-eligible products).
- **e1 §17.6** — mobile responsive minimum (extensible to mobile posture governance).

**Substrate is largely ready** for this arc. The work is doctrine + governance schema + UI behaviors + audit taxonomy expansion + staff training infrastructure.

---

## §6 What this future arc must specify when it activates

### §6.A Notification preview policy taxonomy

Canonical taxonomy of preview-policy levels with per-surface application. Per-relationship-sensitivity override. Per-staff opt-in.

### §6.B Mobile posture guardrails

App-level passcode; biometric re-auth; screenshot-prevention API integration; screen-recording detection; inactivity-blur; background-blur; camera-roll exclusion.

### §6.C Forward / copy / export / print audit pattern

Per-action audit taxonomy extension to `audit_events.action`. Per-action restriction policy. Browser-level interception where API permits.

### §6.D AI visibility scope contracts

Per-AI-feature contract: visibility scope + memory retention + logs + model-provider PHI commitment + audit trail.

### §6.E Attachment access expiration policy

Per-artifact-kind expiration default; per-attachment override; audit on every open; re-fetch capability re-check.

### §6.F Redaction primitives

Library of redaction transforms (names, phones, medical terms, locations). Per-surface application.

### §6.G Leakage incident response pattern

Workflow + audit + remediation playbook.

### §6.H Staff training documentation

Compliance-required training; per-staff completion tracking; periodic refresh.

### §6.I Compliance reporting infrastructure

Breach assessment workflow; HIPAA breach notification trigger thresholds; export-for-audit pattern.

---

## §7 What this future arc does NOT specify now

- No new substrate columns in e1 beyond what's already there.
- No screenshot-prevention API in e1.
- No mobile app passcode in e1.
- No browser-level copy-restriction in e1.
- No attachment expiration in e1 (artifacts accessible while scan_status='clean'; no time-bound).
- No AI visibility scope contracts in e1 (AI Response Assist cut from e1).
- No leakage incident response workflow in e1.
- No comprehensive preview policy taxonomy in e1.

e1 ships minimum-viable preview privacy (per DL-12 invariant 25); the comprehensive governance fires post-e1 when operational + compliance signal arrives.

---

## §8 Activation triggers

The arc activates when any of these arrive:

- First reportable HIPAA breach traceable to operational PHI leakage (screenshot, forward, copy-paste, etc.).
- Compliance audit reveals systemic preview-policy gaps.
- Customer at scale reports "staff is screenshotting / forwarding / copy-pasting too much."
- AI Response Assist arc lands and surfaces AI-visibility-scope question concretely.
- Mobile app adoption hits a threshold where mobile leakage paths matter.
- Federation (A1) arc lands and forces cross-entity PHI handling governance.
- Customer specifically requires PHI surface governance for SOC 2 / HITRUST / state-specific compliance.

Until one of these hits, the arc stays reserved.

---

## §9 Operational scenarios that exercise this arc

### §9.A The coffee-shop preview

Hannah's iPhone is on the table in a coffee shop. Locked-screen notification arrives: "Sarah Miller: my testosterone results were abnormal — can you call me?" The person next to her reads it.

**Today's gap:** notification payload contains PHI body.

**Future arc:** payload defaults to "You have a new message. Tap to view." Body only on biometric re-auth.

### §9.B The screenshot-share to colleague

Hannah screenshots a complex patient conversation on iPhone to text to a senior provider for second opinion. Screenshot saves to camera roll; texted via iMessage (not via OMNI); iMessage may be backed up to iCloud.

**Today's gap:** no screenshot detection; no in-OMNI colleague-consult workflow.

**Future arc:** in-OMNI colleague-consult workflow ("ask a colleague" → audited request → secure response in OMNI); screenshot-prevention API on mobile.

### §9.C The Zoom screen-share

Provider on a Zoom meeting with a referring physician; shares screen to demo something; OMNI tab visible with patient name + chart.

**Today's gap:** no inactivity-blur; no screen-share detection; no presentation mode.

**Future arc:** inactivity-blur after N seconds; OMNI tab fades to "OMNI - PHI hidden, click to restore" indicator when not in focus.

### §9.D The copy-into-ChatGPT (zone 67 anti-pattern)

Front desk staff pastes a difficult patient conversation context into external ChatGPT to ask for help drafting a polished reply.

**Today's gap (zone 67):** screenshot-into-external-AI workaround; PHI exfiltration at scale; no in-app AI Response Assist alternative until post-e1 arc.

**Future arc:** AI Response Assist arc lands and removes the motivation. Also: browser-level copy detection + audit + visual indicator. Staff training reinforces the binding rule.

### §9.E The downloaded-attachment-graveyard

Provider downloads 12 patient MMS photos to local desktop over a month for "easier review." Forgets to delete. Laptop is stolen.

**Today's gap:** no attachment expiration; no audit of staff-local-storage; no cleanup workflow.

**Future arc:** attachments expire from local storage after N hours unless explicitly extended; audit of every download; periodic cleanup prompt.

### §9.F The AI-summary-leak

Future state: AI Response Assist arc lands. AI summarizes a thread for staff context; summary contains PHI. Summary is logged + sent to model provider for "training."

**Today's gap:** no AI visibility scope contracts in OMNI.

**Future arc:** contractual prohibition with model provider on PHI training; technical enforcement via API config; audit on every AI invocation; PHI redaction in prompts where context permits.

### §9.G The lost device

Staff loses their work iPhone in a parking lot. Phone has OMNI app installed; phone has 6-digit passcode but no biometric; OMNI has been opened recently so session is fresh; lock-screen previews show PHI.

**Today's gap:** lock-screen PHI; no remote-revoke session pattern documented.

**Future arc:** lock-screen previews PHI-free by default; staff-initiated remote session revoke; compliance-officer-initiated remote revoke + audit.

---

## §10 Cross-references

- **DL-12 invariant 25** — notification preview/snippet privacy; foundational doctrine for preview governance.
- **DL-13 invariant 3 (settings precedence layer 1)** — admits compliance / retention / preview-policy as highest precedence.
- **Primitive #3** (disclosure policy) — admits per-tier clamps; extensible to per-preview clamps.
- **Primitive #21** (consent) — admits per-operation consent gating.
- **MAIN §1Q.14.1(e)** — notification preview/snippet privacy binding sub-clause.
- **MAIN §1V.10** — retention + legal-hold + eDiscovery + entered-in-error workflow.
- **MAIN §1J.9** — break-glass discipline.
- **e1 preflight §0.5** — HIPAA preconditions.
- **e1 preflight §17.6** — mobile responsive (extensible to mobile posture governance).
- **e1 preflight §16.4** — no auto-chart-filing; admits soft-delete on artifacts.
- **e1 preflight §18 (CUT)** — AI Response Assist removed from e1; future arc cross-references this arc for AI visibility scopes.
- **A1 federation arc** — cross-entity PHI handling.
- **A2 prioritization arc** — notification preview content vs priority surfacing interaction.
- **Radar zone 67** — screenshot-into-external-AI anti-pattern; addressed by AI Response Assist arc + this arc.
- **`audit_events` taxonomy** — extensible to PHI-surface-event auditing.

---

## §11 Future preflight named

When activation triggers (per §8), the future arc's preflight:

**Proposed filename when activated:** `.cursor/plans/PREFLIGHT_<future-date>_phi_surface_governance.md`

**Proposed structure:**

1. Substrate-reality audit (what's already in DL-12 invariant 25 + §1Q.14.1(e); what's in e1 §17.6 mobile baseline).
2. Doctrine inheritance (DL-12 invariant 25 + DL-13 invariant 3 + primitive #3 + primitive #21).
3. Scope partition.
4. Out-of-scope.
5. Notification preview policy taxonomy.
6. Mobile posture guardrails.
7. Forward / copy / export / print audit pattern.
8. AI visibility scope contracts.
9. Attachment access expiration policy.
10. Redaction primitives.
11. Leakage incident response pattern.
12. Staff training documentation.
13. Compliance reporting infrastructure.
14. Substrate extensions (new audit_events action types; per-artifact expiration columns; per-staff opt-in tables).
15. Migration sequencing.
16. Watch zones (preview-policy regression; mobile-posture lapse; AI-scope-creep; copy-restriction-fatigue causing workaround use).
17. Verification gates.
18. R-arc pressure-test plan.
19. Cross-references.

R-arc would attack:

- R1: preview-policy completeness (every notification surface mapped).
- R2: mobile posture coverage (every leakage path addressed; usability vs security tradeoff tuned).
- R3: audit taxonomy sufficiency.
- R4: AI visibility scope sufficiency (per-feature contracts; per-PHI-sensitivity scope).
- R5: incident response workflow completeness.
- R6: cross-arc integration (A1 federation + A2 prioritization + AI Response Assist).
- R7: compliance posture sufficiency (HIPAA + SOC 2 + state-specific).
- R8+ — TBD.

---

## §12 Status note

This document is a **RESERVED FUTURE ARC** as of 2026-05-12. It captures the PHI surface governance question that emerged from R1+R6 follow-up on the e1 external-line preflight (seam 6 — invisible PHI leakage). It is NOT:

- Active doctrine.
- A preflight.
- A binding design.
- A scope-creep target for e1.

It IS:

- A preserved question.
- A leakage-surface catalog (11 surfaces with concrete examples).
- A list of substrate building blocks already aligned.
- A future preflight name + structure for activation.

**Activation trigger:** first reportable HIPAA breach traceable to operational leakage OR compliance audit reveals systemic gaps OR customer-at-scale reports excessive operational leakage OR AI Response Assist arc surfaces AI-visibility-scope concretely OR mobile adoption threshold OR federation arc forces cross-entity PHI handling.

**Companion future arcs** captured the same evening (cross-references):

- [A1 — Federation / Permeability / Topology](FUTURE_ARC_2026-05-12_federation_permeability_topology.md)
- [A2 — Prioritization / Attention Economics](FUTURE_ARC_2026-05-12_prioritization_attention_economics.md)

**End of A3 PHI surface governance future arc capture.**

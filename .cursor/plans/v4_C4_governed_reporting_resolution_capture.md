# OMNI — Governed Reporting & Resolution (GRR) — Draft 1 (clean architecture capture)

Document type: `plan_or_roadmap` (**cross-cutting contract CANDIDATE** + pre-spine architecture capture; NOT a live contract, NOT spine/thesis prose)
Authority: `analysis_nonbinding` (`GRD-036`) — proposes; binds nothing until authored as a contract through C5 + its review gate. Propose-only; pre-spine.
Status: `draft_1` 2026-07-12 — **supersedes Draft 0** (which wrongly made REV-184 the container). Self-contained; written to be inherited by the v4 spine author without reconstructing the chat.
Working handle: **GRR** (surface-noun deliberately OPEN — §6/§26; "Reporting" under-specifies detection). Do **NOT** freeze the public name pre-spine.
Domain(s): architecture_governance, cns_orchestration (orchestration home), cross_cutting
Lifecycle role: OMNI's **inward integrity loop** — how anything that needs attention (reported OR detected) is admitted, coordinated, resolved by the correct domain, verified, and learned from. Coordinates; does not own domain truth.
Primary orchestration home: **CNS**. **Durable record home: a thin cross-cutting coordination ledger (NOT CNS-owned truth, NOT a domain).** Promotion path: `contracts/cross_cutting/governed_reporting_resolution_contract.md` authored at **C5** (not now — pre-spine C5 hard-stop).
Manifest action: `add_tier2` (catalog row + read-graph route + spine watch-list WI14 + FWREG-009 pointer + Task-D Fixture 5 — same pass).
Review gate: `user_knox_required`.
Basis: Nick operator directive (2026-07-11/12) + Knox trifecta (2 rounds: "GCIR Draft 0" → the qualified-case-family refinement) + Opus reconciliation + dedup vs the estate (§25). Knox's refinement is adopted; the raw chat is provenance only (not reproduced — a clean file was the operator's explicit priority).

---

> **★ LEAD STATEMENT (the architecture in one sentence):**
> **OMNI separates the *signal* that raises attention, the qualified *case* that creates a durable coordination obligation, the *incident/problem* being investigated, and the *domain decision or corrective action* that changes reality. Human and machine reports share an admission-and-coordination grammar, but care, safety, operations, security, commerce, and Build-OS retain distinct objects, lifecycles, authorities, and truth ownership.**

---

## §0 — Executive decision + what changed from Draft 0

OMNI needs a **first-class governed way to receive, admit, coordinate, resolve, verify, and learn from anything that needs attention** — reported OR detected — across care, ops, security, commerce, fulfillment, and build, from any originator, at any radius. This is OMNI's own physics (Sense → govern → Act → Prove/Learn) turned **inward** on its own operation, replacing the ungoverned IT-ticket way (no "ticket #, email in 24–48h").

**Correction from Draft 0 (the whole point of this revision):** Draft 0 made **REV-184 Governed Resolution the container** ("a report opens a Governed Resolution"). That was a **category error** — the inverse of over-minting: over-*collapsing* two genuinely different primitives to avoid a new one. REV-184 is **care-decision** work (forward-flow: *what should happen for this patient*). A reported/detected failure is **reflexive integrity** work (*something in the flow broke or is contested*). They are **independently real objects with a many-to-many relationship** (§1). Draft 1 fixes this and reinstates "case" — correctly qualified.

**Still true (do not relitigate):** NOT a new truth-owning domain · NOT one monolithic ticket queue · NOT one universal `case` object · NOT separate care/technical silos · NOT REV-184-as-container · NOT a medical "case" · NOT merely a registry item · NOT IT support.

---

## §1 — The primitive test (why case ⟂ Governed Resolution; many-to-many)

Ask whether either object can exist without the other:
- A normal care decision runs through **REV-184 with no incident, report, complaint, or case.**
- A scheduling outage, privacy concern, app crash, Build-OS regression, or grievance creates a **case with no care decision.**
- **One** reported problem may require **several** clinical decisions.
- **One** clinical decision may later be challenged by **several** reports.

→ **Case and Governed Resolution are independently real, many-to-many.** Therefore REV-184 is a **linked child / related domain object** of a care-related case — it has its own authority, lifecycle, evidence, and outputs. It is **not** the case container and **not** a "case profile" (a profile would still make it part of the case abstraction; it isn't).

---

## §2 — Sensors ≠ spine (two intake families, one grammar)
GRR is **not a sensor or a "watch."** It is the **admission-and-resolution spine** that many sensors feed:
- actor reports (patient · provider · staff · owner · external) · AI self-flags · Build-OS eval failures · runtime monitors · devices/integrations · **Security Threat Watch** (defend) · **Evidence Signal Watch** (learn-from-world).

Proactive detection and actor reports differ only in **origin · latency · evidence shape · human context** — not in needing two systems. (Corrects Draft 0's muddy "third sensing mode.")

---

## §3 — The admission gate (not every signal opens a case)
A monitor may emit thousands of anomalies; a patient may press the wrong button; many reports may describe one event; a low-confidence AI self-flag may be telemetry, not a tracked obligation. **A signal is not a case.** Admission converts a signal into an *accountable* case.

`resolution_admission_state = pending | admitted | correlated | duplicate | informational | synchronous_response | suppressed_with_reason | rejected_invalid`

**Open a durable case when ≥1 is true:** tracked action required · a person expects loop-back · a duty-to-act / regulatory clock exists · multiple owners/domains must coordinate · meaningful harm/risk/degradation may exist · investigation or verification must persist · the event may produce durable organizational learning. Otherwise: correlate / respond synchronously / suppress-with-reason / no-op. **The original `reported_signal` remains immutable regardless.** (Without this, GRR becomes an alert warehouse.)

---

## §4 — The case family (qualified; shared envelope; typed records; optional parent)

**What "case" means here** (NOT clinical case): *a durable, acknowledged obligation to coordinate attention, keep ownership visible, communicate status, and prove appropriate closure.*

- **`case_envelope` / `case_interface`** — the SHARED shape every case-type implements: identity · reporter · status · severity · owner · clocks · visibility · communication · links · snapshot · closure-proof. (This is the enterprise-consistency layer — the "interface," in Palantir terms, §24.)
- **Concrete typed case records** (each implements `case_envelope` + its own class-specific lifecycle + proof): `service_incident` · `patient_safety_event` · `grievance` · `service_request` · `privacy_incident` · `security_incident` · `product_defect` · `adverse_event` · `near_miss` (+ extensible). A single-domain concern is just its typed record — no parent needed.
- **`coordination_case`** — an OPTIONAL cross-domain parent, created **only** when a concern spans domains, needs one reporter-facing status, or coordinates several typed records. It holds links + reporter-facing status; it does **NOT** own substantive truth (guard against a mini-god-object).
- **Linked domain work (NOT cases):** **REV-184 Governed Resolution** (care decision) · fulfillment exception (OFC) · commerce dispute/refund (D6 — exists) · security containment · Build-OS defect repair · `problem_investigation` (systemic cause across incidents) · corrective/preventive action. These are distinct objects with their own authority/lifecycle, **linked** from cases (many-to-many).

**Do NOT force all concrete records into one giant physical table.** Define the interface + typed objects + optional parent + typed links + common actions; implementation (inheritance / composition / event-sourcing / separate domain tables) is a later choice. (Palantir's *interface* concept, §24.)

---

## §5 — Canonical vocabulary
- **signal** — something observed/detected/reported (immutable `reported_signal` + snapshot).
- **admission** — OMNI decides whether tracked follow-through is warranted (§3).
- **case** — OMNI has accepted a durable coordination obligation (a typed record implementing `case_envelope`; qualified, never bare).
- **incident** — an event/failure occurred or plausibly occurred. **near-miss** — could have, didn't (first-class; do not bury).
- **problem** — an underlying cause that may explain ≥1 incident.
- **Governed Resolution (REV-184)** — an authorized substantive **domain decision** about what should happen (esp. care). A distinct linked object, not a case.
- **containment action** — immediate limitation of ongoing harm. **corrective/preventive action** — durable repair / recurrence reduction. **verification** — evidence the repair worked. **closure** — the coordination obligation is fulfilled (incl. communication + residual-risk handling).

*Signal ≠ case ≠ incident ≠ problem ≠ Governed Resolution. Mitigated ≠ resolved ≠ verified ≠ closed.*

---

## §6 — Naming discipline (Nick + Knox, binding for the doc)
- **`case` only as qualified internal coordination vocabulary** — `coordination_case` (the optional parent), `case_envelope`/`case_interface` (the shared shape). **Never bare `case`.** **Avoid `resolution_case`** (re-blurs the boundary with REV-184).
- **User-facing surfaces speak the actor's language** — *Report a problem · Patient-safety concern · Technical incident · Grievance · Service request · Privacy concern · This AI recommendation may be wrong* — **never "open a case."** Namespace + qualification prevent collision with patient-case / case-management semantics.
- **The plane's public name is OPEN** (spine pass): candidates — Governed Signal & Resolution · Governed Attention & Resolution · Resolution Integrity Plane · or simply *Governed Resolution* with "reporting + detection intake" as a capability family. Keep **GRR** as the project handle only.

---

## §7 — Impact + containment are first-class (BEFORE root-cause)
Draft 0 jumped from incident → root-cause/repair. Two objects must sit between:
- **`impact_assessment`** — who/what was affected · actual vs potential harm · patient/operator/financial/privacy/regulatory impact · exposure period · affected versions · affected population/asset set · **whether impact is still expanding.**
- **`containment_action`** — immediate action taken *before* cause/repair is known: disable a capability · suspend a workflow · revoke access · stop fulfillment · notify a clinician · roll back a version · isolate an integration · place a temporary manual-review gate. **Containment ≠ corrective action** — it limits ongoing harm.

Full chain: **signal → admission → impact assessment → containment → investigation → correction → recovery → verification → prevention.** Critical during live patient-safety, security, and platform incidents.

---

## §8 — Classification axes (orthogonal; editable — first label may be wrong)
- **report type:** incident · near-miss · safety concern · request · grievance · complaint · question · feedback · defect · security alert · privacy alert · adverse event · regulatory inquiry · AI self-report · whistleblower report.
- **originator:** patient · caregiver · provider · staff · owner · device · external system · vendor · regulator · auditor · anonymous · external AI · OMNI AI self-flag · OMNI monitor/eval.
- **domain:** clinical · safety · operations · scheduling · messaging · commerce · fulfillment · workforce · identity · privacy · security · product/build · infrastructure · vendor · regulatory · multi-domain.
- **severity:** informational → critical. **blast radius:** one interaction → federation/substrate-wide (264: prob × exposure × consequence).
- **radius:** local operator · federated · OMNI platform/substrate · external ecosystem.
- **duty to act:** discretionary · time-sensitive · emergency · mandatory clinical escalation · mandatory breach reporting · mandated reporting · legal hold · regulator clock.

**Classification is editable** (a billing complaint may reveal a fulfillment failure; a technical outage may become a patient-safety incident; a clinical disagreement may turn out to be stale source data, not model reasoning). AI proposes it (§11); the owner corrects it.

---

## §9 — Roles & authority (distinct)
reporter · case record owner · coordinator · **domain resolver** (commits substantive truth) · incident commander (coordinates severe response; does NOT replace domain authority) · clinical reviewer · compliance/legal reviewer · security responder · problem owner · corrective-action owner · **AI triage actor** (proposes, never commits). Record-owner ≠ resolver ≠ lifecycle-orchestrator.

---

## §10 — Intake — users never classify OMNI's backend
Every surface offers a context-appropriate action (§6 plain language). **The reporter must NOT be asked "is this clinical or IT / a RAG defect / an incident or a Governed Resolution / a vector-retrieval problem."** Intake collects only what the reporter can reliably know: *What happened? · Who/what was affected? · Is anyone in immediate danger? · Which message/order/appointment/recommendation/transaction is involved? · What outcome do you want? · May we contact you?* OMNI does the decomposition (§12); everything else is proposed by triage and corrected by the proper owner.

**★ Out-of-band intake** (a platform incident system that needs the platform up is unserious): fallback channels for login failure · major outage · compromised account · clinic locked out · urgent patient-safety · platform security → external status/report portal · phone · SMS · email ingest · operator emergency contacts · regulator/vendor channels. Out-of-band reports **reconcile into GRR** when service returns. (Composes on C3.5 `degraded_mode` P16.)

---

## §11 — AI triage (candidate ≠ commit — hard limits)
AI **may**: assemble the snapshot · summarize · identify affected workflows · propose classification/severity/blast-radius · detect duplicates · suggest owner · retrieve similar cases + runbooks · identify mandatory clocks · flag missing evidence · draft acknowledgement · propose likely root causes — preserving confidence · rationale · alternatives · citations · lineage.
AI **must NOT**: silently close · downgrade · suppress · assign blame · decide legal privilege · determine patient harm did not occur · determine no breach occurred · write into Clinical Memory. (§12.8 · 259 governance-outside-loop · 230 owner-authored evals for "resolved.")

---

## §12 — Routing + how care/technical OVERLAP actually plays out
Routing resolves internally from `report type × domain × severity × blast radius × radius × duty-to-act × operator relationship`. **Care decisions and technical problems overlap through LINKS + `coordination_case`, never by becoming the same record.** Four worked examples:

**1. Provider flags a wrong-antibiotic AI recommendation** ("this recommendation may be wrong"). OMNI: preserve the provider's words + auto-capture the AI output, patient context, retrieved evidence, model/capability version, policies, tools, downstream action state → admit → open a `coordination_case` (spans care + product) → create `patient_safety_event` → **containment** (the disputed recommendation must not silently drive action) → **open/reopen a REV-184 Governed Resolution** so the authorized clinician decides the correct antibiotic → open a **`product_defect`/Build-OS investigation** into why the capability produced it (could be stale source data via RAG, not model reasoning) → promote the trace to an eval/regression → **verify BOTH** (patient's care corrected AND capability defect contained/repaired) → one coherent reporter status. *Care decision and technical investigation overlap via links + coordination; they do not merge.*

**2. Patient: "My medication never arrived."** One natural-language report → possibly: `service_incident`/fulfillment exception (OFC) · commerce dispute if charged (D6) · a REV-184 Governed Resolution if missed treatment creates care risk · operator escalation · one `coordination_case` presenting a single status. **The patient does not route it.**

**3. AI monitor detects the scheduling app is broken.** Signal → admission may correlate to an already-open `service_incident`, or open one · identify affected operators/appointments · **open party-specific `coordination_case`s only for people needing individual rescheduling / clinical-continuity review** (§13).

**4. Patient: "The AI advice is wrong and I feel worse."** May simultaneously create: immediate clinical escalation · `patient_safety_event` · a care REV-184 Governed Resolution · an AI-capability `product_defect` investigation · possible `adverse_event` reporting · reporter communication. **One front door, several linked objects.**

---

## §13 — Systemic incident ≠ party-specific coordination case (privacy-critical)
One systemic incident/problem may affect thousands, but **each affected party must not be merged into one giant privacy-leaking case.** The model needs BOTH: **shared systemic incident/problem records** AND **separately-permissioned party-specific `coordination_case`s** where individual follow-through is owed, each linked to the systemic record. (Ties Federation/RBAC visibility + `knowledge_partition`.)

---

## §14 — One grammar, many objects (shared envelope + typed lifecycles)
The shared `case_envelope` gives enterprise consistency; the typed records preserve real differences. Each type selects its own **resolution profile** (added states + required proof) — do NOT build a god-state-machine:
- **security_incident:** detect → contain → eradicate → recover → review.
- **patient_safety_event:** immediate_safety_action → clinical_review → attribution → mandatory_report → patient_follow_up.
- **grievance:** acknowledge → investigate → response → appeal.
- **product_defect:** reproduce → isolate → repair → rollout → regression_verify.
- **service_request:** validate → fulfill → confirm.

Shared envelope lifecycle: received → acknowledged → admitted → assigned → active → waiting → resolved → verified → closed → disputed/reopened.

---

## §15 — Reporter loop-back (live projection, not "ticket #58217")
Immediate acknowledgement + a **live projection**: received · current state · owner-by-role · expected next action · info requested · major milestones · resolution summary · reopen/appeal path. Low-priority may stay async, but the underlying state is live + inspectable. Visibility constrained by privacy · legal privilege · security · personnel · unrelated-patient protections.

---

## §16 — Protected / non-punitive reporting
Confidential + anonymous where appropriate · whistleblower protection · non-punitive near-miss reporting · role-separated access · sealed investigation notes · anti-retaliation. **If reporting predictably harms the reporter, OMNI will learn silence** (265 incentive=safety). The safe path to report must be easier than silence.

---

## §17 — Incident → problem → change → verification → prevention
Preserve the ITIL distinction while replacing the UX: **incident** (restore safety/service now) → **problem** (underlying cause) → **corrective change** (durable repair) → **verification** (prove it worked, no unacceptable side-effects) → **prevention**. A one-hour outage mitigation and a three-week integration-defect problem are **different states**. A case may close operationally while a linked `problem_investigation` stays open.

---

## §18 — Learning loop (why this makes OMNI more reliable, not just fixed)
A resolved case may generate: regression test · eval case · monitoring rule · deterministic gate · runbook · policy change · capability patch · domain-contract clarification · user education · staff training · vendor requirement · architecture proposal. **A one-off fix is not organizational learning until the failure class becomes reusable evidence** (261 trace→eval · 216 REV-199 · Evidence Plane).

---

## §19 — Snapshot discipline (`case_snapshot`)
Immutable · timestamped · version-aware · **privacy-MINIMIZED** · source-attributed · access-controlled · minimum-necessary. Captures *relevant* state: trace lineage · model/runtime/capability versions · `ai_decision_log` · active policies · `source_authority_map` state · relevant messages · affected domain-state versions · tool calls · approvals/denials · artifacts. **NOT "copy everything"** (no surveillance blob); follows legal-hold + retention + access rules (D7). This is where OMNI's proof-fabric beats a text-box ticket: the case arrives with **replayable proof**, not a paragraph.

---

## §20 — Duplicate / cluster
Duplicate detection · merge proposals · one systemic incident with many reporters · aggregate blast-radius escalation · preserve each original report. **Merging must not erase minority or conflicting evidence** (`EVRUN-000004 §0.5` discordance-preservation; multiplicity ≠ independence).

---

## §21 — Metrics (must not reward hiding)
time-to-acknowledge / containment / resolution / verified-repair · reopen rate · recurrence · severity drift · stalled cases · **near-miss reporting rate** · duplicate-cluster size · eval-promotion · corrective-action completion · cross-operator handoff latency · missed mandatory clocks. Metrics must NOT reward hiding, downgrading, or premature closure.

---

## §22 — Anti-patterns (do not build these)
one generic support inbox · text-only tickets with no snapshot · **forcing reporters to pick the internal team/classification** · AI silently classifying/closing · **overloading REV-184 (or any care primitive) with incident/build mechanics** · one universal `case` object OR fully-siloed care-vs-tech systems · treating every problem as IT · defaulting every patient complaint to clinical-or-not · closing when the first child completes · burying near-misses · **merging thousands of affected parties into one giant case** · universal admin visibility · emailing only a ticket number with no live status · fixing incidents without a problem investigation when recurrence suggests one · deploying a repair without verification · **storing this architecture only in a Future Work Registry.**

---

## §23 — Estate placement + composition
**CNS orchestrates** (detect/route/escalate/advance the lifecycle). **A thin cross-cutting coordination ledger persists the canonical case record** (durable cross-cutting state — NOT a business domain, NOT CNS-owned truth; else the orchestrator becomes a storage god-domain). **Domains own substantive truth + corrective commits.** **D7** preserves evidence artifacts + legal-hold. **Messaging** owns conversational threads + notices. Required cross-refs: REV-184 · CNS · Federation · Identity/RBAC · D7 · Messaging · Observation · Clinical Memory · Security · BIZOPS · D6 · OFC · Build-OS · Outcome Intelligence · Surface/Projection Map · Network Governance Plane.

**Candidate v4 spine line:**
> OMNI separates the signal that raises attention, the qualified case that creates a durable coordination obligation, the incident/problem under investigation, and the domain decision or corrective action that changes reality — sharing one admission-and-coordination grammar across all human and machine reports, while care, safety, operations, security, commerce, and Build-OS retain distinct objects, authorities, and truth; OMNI returns live status to the reporter, verifies repairs, and promotes systemic failures into durable learning — and remains reportable even when OMNI itself is impaired.

**Promotion path (C5):** `contracts/cross_cutting/governed_reporting_resolution_contract.md` + a System-Map-vNext entry (CNS-orchestrated coordination plane + thin case ledger; owns coordination state, not domain truth).

---

## §24 — How it's solved elsewhere (grounding — one grammar, not one primitive)
- **Real healthcare (the strongest tell):** clinical decisioning (care plan / orders) and **incident/safety reporting** (risk-management/QA; e.g. NHS PSIRF — a *dedicated* safety-incident response system involving patients/families/staff + system learning) are **distinct systems that link.** A safety incident may *trigger* care decisions; incident-response and care-decisioning remain different responsibilities. → REV-184 ≠ the case system.
- **ITIL / ServiceNow:** Incident (restore service) · Problem (root cause / prevent recurrence) · Change (govern durable intervention) · Request are **distinct record types** on a shared service-management spine, linked to Configuration Items. Rolling back a deployment may resolve the incident while the problem stays open.
- **Palantir Foundry:** ontology = object types · properties · **links** · actions · functions · security · **interfaces** (polymorphism: distinct object types sharing a common shape). Model Incident, Patient-Safety-Event, Investigation, Corrective-Action, Deployment, Patient, Order as **distinct linked objects** with a shared **case-like interface** + common actions. The lesson is **one operational ontology grammar + typed objects + explicit links + shared interfaces + governed actions** — NOT "put everything in one case primitive."

---

## §25 — Dedup ledger (≈90% composition; ~0 new domains)
EXISTS-AS: care-decision → **REV-184** (linked, not container) · coordination → **CNS** · intake signal → `source_event`/candidate · snapshot → `trace_lineage` + `source_authority_map` + `ai_decision_log` + D7 · reporter comms → Messaging (safety/AE thread) + 253-B patient-safety sensing · originator identity/protected-reporting → Identity/RBAC + C3.5 P22 + `EVRUN-000004 §0.5` participation-admission · routing radii + cross-operator → Federation + Network Governance · AE/SAE + mandatory clocks → C3.6 · disclosure/legal-hold → C3.5 P21 · security/emergency → C3.5 P40 + Security Threat Watch · degraded/out-of-band → C3.5 P16 · ops/commerce/fulfillment → BIZOPS · D6 (dispute exists) · OFC · learning → Build-OS + 261 + 216 + Evidence Plane · crisis/incident-response → wave-2 096–099 · fault/degraded/scale-exposure → 264 · incentive=safety non-punitive → 265.
**GENUINE DELTA (unowned end-to-end today):** the **admission gate + the qualified case family (shared `case_envelope` + typed records + optional `coordination_case`) + impact/containment as first-class + systemic-vs-party-specific split + editable classification + out-of-band intake + reporter live-projection + failure→learning promotion**, unified as one cross-cutting grammar — with REV-184 and domain corrective work as **linked** objects, not fused.

---

## §26 — Open decisions (for spine author / C5 / Knox)
1. Public plane name (surface-noun) — keep GRR as handle; decide at spine (§6).
2. Durable-ledger home: a thin dedicated case ledger vs a Registry adjacent to CNS (do NOT default to CNS owning both orchestration + record truth).
3. Physical modeling: interface + typed objects (recommended) vs shared table vs event-sourced — deferred; keep the interface abstraction.
4. Cross-domain severity roll-up (child → parent `coordination_case`).
5. Which classes allow anonymous reporting.
6. What stays local vs federates (cross-operator correlation without leakage).
7. Default patient-visible status model.
8. Privileged-investigation partitioning.
9. What auto-triggers incident command.
10. Mandatory proof-before-closure per case type.
11. Which trivial signals resolve synchronously without a durable case.
12. Out-of-band architecture when OMNI is unavailable.
13. Whether `problem_investigation` implements `case_envelope` or is a purely linked systemic object.

---

## §27 — Doctrine candidates (propose-only)
1. A signal raises attention; **admission** converts it into an accountable case; only the owning authority commits the resolution.
2. **Case and Governed Resolution are independently real, many-to-many** — REV-184 is a linked care-decision object, never the case container and never a case profile.
3. Any actor (human or machine) may raise a concern; the reporter must not need to know OMNI's org chart or classify the backend.
4. One admission-and-coordination grammar; **typed objects + distinct lifecycles + domain-owned truth** (one grammar, many objects — not one primitive, not silos).
5. Containment ≠ correction ≠ verification; a repair is not complete until verified.
6. One cross-domain report may create many domain-owned linked objects under one optional `coordination_case`; a systemic incident is never one giant party-merged case.
7. Context is captured automatically, minimally, immutably, with provenance — as replayable proof.
8. AI may triage/correlate/summarize/propose; it may not silently close, downgrade, suppress, or erase consequential reports; classification stays editable by the owner.
9. A resolved incident becomes reusable learning when the failure class may recur.
10. The safe path to report must be easier than silence; OMNI must remain reportable even when OMNI is impaired.
11. The coordination plane coordinates truth; it does not own every truth.

---

## §28 — Bottom line
GRR is OMNI's **inward integrity loop**: many human and machine sensors feed a **governed admission boundary**; admitted concerns become **qualified, typed cases** (sharing one envelope) under an optional **coordination_case**; CNS coordinates while **domains own their corrective truth** and **REV-184 owns the care decision as a linked object**; **impact and containment** stay distinct from systemic **investigation and correction**; **closure requires verified repair + reporter loop-back**, and recurrent failures **promote into durable learning.** That is the version the pre-v4 spine author inherits — clean, and without a god-primitive, a medical-"case" collision, or a return to email-and-screenshots.

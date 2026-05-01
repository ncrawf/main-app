# Platform-level communication + action module taxonomy

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** define the platform-level communication + action module taxonomy that the Section 1Q rules + templates engine must support; identify the categories of system-generated, staff-generated, provider-generated, vendor-facing, and patient-facing communications/actions across the company; map each module to attributes, governance, V1 vs later, AI refinement, cross-domain collisions, and channel rendering rules.
**Verdict:** B with substantial extension to Section 1Q domain enums (rules 13 → 18, templates 10 → 16) plus new Section 1Q.13 subsection with full 15-module matrix. Marketing rides Section 1Q with HARD carve-out. V1 captures the large majority per user instruction.

---

# Part 1 — Marketing architectural decision (hard carve-out)

**Marketing rides Section 1Q.** Same template engine, same audit infrastructure, same versioning, same code-as-config Layer 1 discipline. **BUT with HARD carve-out:**

- **Distinct rule domain:** `marketing_lifecycle` (NOT `notification` — `notification` is operational/transactional only).
- **Distinct template domain:** `marketing_lifecycle` (NOT `staff_support_response`, NOT `patient_clarification`).
- **Distinct repo directory:** `repo/templates/marketing/` — physically separated from `repo/templates/clinical/` so audit + governance is unmistakable.
- **Distinct CODEOWNER tier:** ops CODEOWNER + **compliance CODEOWNER** — clinical CODEOWNER NOT involved by default; gets pulled in only when marketing copy touches clinical-adjacent claims (which the `prohibited_claims` lint should already block).
- **Distinct `prohibited_claims` floor:** marketing templates default to `[must_not_imply_clinical_outcome, must_not_diagnose, must_not_promote_off_label, must_not_quote_efficacy_without_FDA_approval, must_not_imply_FDA_approval_unless_FDA_approved]`.
- **Distinct tone:** `tone_constraints = ['marketing_brand_voice']`.
- **Hard CI lint:** marketing templates CANNOT reference `patient_clinical_assertions`, `patient_lab_observations`, `patient_diagnostic_reports`, or any clinical chart row UNLESS the patient has a valid `1K.11` `patient_consents` row of type `marketing_personalization_with_phi` AND the rule action declares `consent_required = 'marketing_personalization_with_phi'`. Default marketing path uses ONLY non-PHI patient attributes (name, signup date, generic engagement state).
- **Send-policy stricter:** marketing sends gated by separate budget per `1G.3`; opt-in required (TCPA / CASL / GDPR); opt-out instantly honored.
- **`ai_refinement_allowed` per template:** marketing templates CAN opt in to AI refinement (A/B test variants, personalization within constraints) — this is a key future capability — but with extra `ai_refinement_constraints` forbidding any clinical-adjacent content generation.

This makes marketing usable as a first-class platform capability without ever risking clinical/marketing collision.

**Healthcare-specific:** marketing communications using PHI require explicit HIPAA marketing authorization (with limited exceptions for treatment-related comms); FDA off-label marketing rules forbid promoting off-label use; state-specific telehealth marketing rules; CASL / GDPR / TCPA for SMS/email opt-in. Marketing carve-out architecturally enforces these.

---

# Part 2 — Cross-industry framing

| Pattern | Industry exemplar | Our architecture |
|---|---|---|
| Cross-domain comms with shared infrastructure + per-domain governance | Amazon (one comms infrastructure; account / order / billing / support / marketing distinct templates with shared audit) | Section 1Q unified template engine + per-domain CODEOWNER governance |
| Marketing walled off from clinical | Apple Health (clinical Health app data NEVER leaks to App Store marketing without explicit user authorization; HIPAA-equivalent) | Marketing carve-out (separate domain, repo dir, ops + compliance CODEOWNER, hard CI lint) |
| Multi-domain template registry | Salesforce Communication Studio (marketing + service + sales share template engine; governance segregated) | Section 1Q template registry with `domain` enum + `clinical_review_required` + `ai_refinement_allowed` |
| Cross-domain customer notifications via one engine | Tesla (vehicle / service / billing / marketing all flow through one rules engine; per-domain authority) | Section 1Q.1 rule domain enum (18 values post-expansion) |
| Clinical messaging unified with billing + education at infrastructure | Epic MyChart (clinical msgs + billing comms + patient education are infrastructure-unified, ownership-segregated) | Section 1Q.7 three-tier governance |
| Drip funnel + lifecycle email | HubSpot / Iterable / Customer.io | Section 1Q `marketing_lifecycle` domain with hard carve-out |

---

# Part 3 — 15-module taxonomy with full attribute matrix

Each module: **audience** | **triggers** | **rule domain** (1Q.1) | **template domain** (1Q.2) | **authority owner** | **automation default** | **AI refinement default** | **clinical review at PR** | **audit required** | **V1** | **forbidden patterns**.

## Module 1 — Account / onboarding

- **Audience:** patient
- **Triggers:** account creation, identity verification request, intake start, intake incomplete, intake submitted, consent needed, payment method needed
- **Rule domain:** `account_lifecycle` (NEW)
- **Template domain:** `account_lifecycle` (NEW)
- **Authority owner:** ops CODEOWNER + compliance CODEOWNER (consent + identity templates)
- **Automation default:** YES
- **AI refinement default:** OFF (transactional consistency > personalization)
- **Clinical review required:** NO (intake-submitted handoff template requires clinical CODEOWNER co-review)
- **Audit required:** YES
- **V1:** YES
- **Forbidden:** marketing language in transactional account comms; promotional CTAs in identity verification flows

## Module 2 — Clinical intake / clarification

- **Audience:** patient (primary), provider (secondary)
- **Triggers:** provider needs more info, system needs missing structured answer, patient free text triggered follow-up per `Section 1P.4` Patch B, contradiction detected, outside records needed, med list clarification, allergy clarification
- **Rule domain:** `patient_clarification` (existing)
- **Template domain:** `patient_clarification` (existing)
- **Authority owner:** clinical CODEOWNER
- **Automation default:** YES (Mode F system check-ins)
- **AI refinement default:** OFF (turn on later for non-safety nuance)
- **Clinical review required:** YES (template definition; not per-message at runtime per `Section 1Q` correction)
- **Audit required:** YES
- **V1:** YES
- **Forbidden:** clarifications that imply diagnoses; assumed defaults for safety-critical missing data (per `Section 1Q` invariant 11)

## Module 3 — Eligibility / denial / pause

- **Audience:** patient (primary), provider (secondary)
- **Triggers:** not eligible, contraindication detected, jurisdiction restriction, age/BMI/lab requirement issue, care paused, safety block, lab block
- **Rule domain:** `eligibility` (existing) + `clinical_safety` (existing)
- **Template domain:** `denial_not_eligible` (existing)
- **Authority owner:** clinical CODEOWNER (clinical denials) + ops CODEOWNER (jurisdictional/operational denials)
- **Automation default:** YES
- **AI refinement default:** OFF (sensitive; consistency required)
- **Clinical review required:** YES
- **Audit required:** YES (`decision_outcome_reason` per `1K.12`)
- **V1:** YES
- **Forbidden:** denial copy implying clinical diagnosis pre-provider-review; jurisdictional denials worded as personal failures

## Module 4 — Provider review / clinical workflow

- **Audience:** provider (primary), patient (secondary on outcomes)
- **Triggers:** provider assigned, provider reviewing, provider has question, provider approved, provider denied, provider requested labs, provider requested follow-up, provider escalated safety
- **Rule domain:** `provider_review` (existing) + `clinical_routing` (existing) + `adverse_event` (existing; for escalations)
- **Template domain:** `provider_packet` (existing) + `medication_workflow` (NEW; for approval/denial patient-facing notifications) + `clinical_safety_escalation` (existing)
- **Authority owner:** clinical CODEOWNER
- **Automation default:** YES for assignment/routing; provider authorization is human-gated for therapeutic decisions
- **AI refinement default:** OFF for clinical decisions; ON (opt-in) for routine routing/triage suggestions
- **Clinical review required:** YES
- **Audit required:** YES
- **V1:** YES (spine of clinical loop)
- **Forbidden:** patient-facing notifications implying provider decisions before recorded in `clinical_visits`; AI auto-approving treatment changes

## Module 5 — Labs

- **Audience:** patient (primary), provider (review)
- **Triggers:** lab order placed, lab kit shipped, lab draw reminder, lab overdue, lab received, lab abnormal, lab needs provider review, outside lab uploaded, outside lab accepted/rejected, stale labs need refresh
- **Rule domain:** `lab_requirement` (existing)
- **Template domain:** `lab_reminder` (existing) + `clinical_safety_escalation` (for abnormals)
- **Authority owner:** clinical CODEOWNER
- **Automation default:** YES for kit shipped / kit reminder / received / stale refresh per `1L.15`; provider review on abnormals
- **AI refinement default:** OFF for clinical results; ON (opt-in) for routine kit reminders
- **Clinical review required:** YES (template governance)
- **Audit required:** YES
- **V1:** YES
- **Forbidden:** lab values quoted to patient pre-provider-review; patient-facing interpretation of abnormal results

## Module 6 — Prescription / medication workflow

- **Audience:** patient (primary), pharmacy (vendor), provider (review)
- **Triggers:** Rx approved, Rx sent, Rx delayed, refill requested, refill approved, refill blocked, renewal due, dose change approved, dose escalation denied, side effect check-in needed
- **Rule domain:** `refill_renewal` (existing) + `dose_escalation` (existing) + `clinical_safety` (for safety-blocked refills)
- **Template domain:** `medication_workflow` (NEW) + `lab_reminder` (cross-ref for refill labs) + `clinical_safety_escalation` (for blocks)
- **Authority owner:** clinical CODEOWNER
- **Automation default:** YES for in-policy refills with current labs; provider authorization for new Rx + dose escalations
- **AI refinement default:** OFF for clinical decisions; ON (opt-in) for routine refill reminders + side-effect check-in copy
- **Clinical review required:** YES
- **Audit required:** YES (`treatment_items` discipline)
- **V1:** YES
- **Forbidden:** patient-facing dose-change instructions before provider authorization; AI suggesting Rx changes via patient-facing channel

## Module 7 — Orders / fulfillment / shipping

- **Audience:** patient (primary), ops (internal), vendor (partner)
- **Triggers:** order created, order processing, order shipped, order delayed, order delivered, wrong dose/wrong item, damaged/missing package, cold-chain issue, replacement order, fulfillment exception
- **Rule domain:** `fulfillment_exception` (existing) + `vendor_exception` (existing)
- **Template domain:** `fulfillment_exception` (existing)
- **Authority owner:** ops CODEOWNER
- **Automation default:** YES for transactional updates; ops review for exceptions; provider review on clinical-impact exceptions (wrong dose shipped)
- **AI refinement default:** ON (opt-in) for routine status updates; OFF for exception/apology copy
- **Clinical review required:** NO (ops domain) — exception: wrong-dose / wrong-item exceptions require clinical CODEOWNER co-review
- **Audit required:** YES
- **V1:** YES
- **Forbidden:** delay reasons containing PHI in plain notification; compensation promises without ops approval

## Module 8 — Subscription / billing / payment

- **Audience:** patient (primary), billing (internal)
- **Triggers:** subscription created, renewal upcoming, renewal failed, payment failed, refund issued, refund denied, cancellation requested, cancellation confirmed, pause requested, billing dispute
- **Rule domain:** `billing_subscription` (existing)
- **Template domain:** `subscription_cancellation` (existing; expanded to cover renewal/payment-failure/refund sub-categories within the same domain)
- **Authority owner:** ops CODEOWNER + compliance CODEOWNER (refund disputes, cancellation regulatory compliance)
- **Automation default:** YES for transactional billing; manual review for disputes
- **AI refinement default:** OFF for billing comms (consistency + legal language); ON (opt-in) for retention/win-back copy
- **Clinical review required:** NO
- **Audit required:** YES (Stripe ledger reconciliation + `1I` rules)
- **V1:** YES
- **Forbidden:** retention copy implying clinical consequences of cancellation; refund denials without `decision_outcome_reason`

## Module 9 — Safety / adverse events

- **Audience:** patient (primary, urgent), provider (urgent), compliance (audit)
- **Triggers:** urgent symptom reported, adverse event suspected, patient instructed to seek urgent care, provider notified, follow-up safety check, medication hold requested, safety issue resolved
- **Rule domain:** `clinical_safety` (existing) + `adverse_event` (existing)
- **Template domain:** `clinical_safety_escalation` (existing)
- **Authority owner:** clinical CODEOWNER + compliance CODEOWNER
- **Automation default:** Routing automatic; patient-facing safety messages templated and auto-fire when deterministic safety scan matches; provider notification automatic; provider response/decision is human
- **AI refinement default:** OFF (highest safety stakes — strict templates byte-equivalent)
- **Clinical review required:** YES + compliance CODEOWNER
- **Audit required:** YES (`safety_classification_miss` rollup + `1H.6.1E`)
- **V1:** YES (foundational; non-negotiable)
- **Forbidden:** AI generating safety advice; auto-resolving safety events without provider; downgrading severity without provider approval

## Module 10 — Support / customer service

- **Audience:** patient (primary), staff (internal triage)
- **Triggers:** support ticket opened, support needs more info, support resolved, support escalated to clinical, support escalated to billing, support escalated to fulfillment, mixed support + clinical issue
- **Rule domain:** `support_communication` (NEW) + cross-domain routing per `Section 1P.4`
- **Template domain:** `staff_support_response` (existing)
- **Authority owner:** ops CODEOWNER
- **Automation default:** Acknowledgment automatic; resolution copy varies (templated for routine; freehand under role authority for nuanced cases per `Section 1Q.0` invariant 9)
- **AI refinement default:** ON (opt-in) for routine acknowledgment + status copy; OFF for escalation copy
- **Clinical review required:** NO (ops domain) — exception: any support template touching clinical content requires clinical CODEOWNER co-review
- **Audit required:** YES
- **V1:** YES
- **Forbidden:** support staff giving clinical advice without provider routing per `Section 1Q.9` failure mode 7; AI auto-resolving support tickets without human review

## Module 11 — Vendor / partner operations

- **Audience:** vendor (primary), ops (internal), compliance (incidents)
- **Triggers:** vendor message received, lab partner issue, pharmacy issue, fulfillment partner issue, vendor refund request, vendor data correction, vendor SLA breach, vendor incident detected
- **Rule domain:** `vendor_exception` (existing)
- **Template domain:** `vendor_communication` (existing)
- **Authority owner:** ops CODEOWNER + compliance CODEOWNER
- **Automation default:** Vendor-authoritative ops auto-process per `Section 1P` invariant 8; vendor narrative routes through `Section 1P`; vendor-facing comms templated and auto-fire on standard events
- **AI refinement default:** OFF (formal consistency)
- **Clinical review required:** NO — exception: vendor templates referencing clinical content
- **Audit required:** YES (`vendor_partner_incidents_rollup` deferred view)
- **V1:** YES (lab + pharmacy + fulfillment partners needed for first Rx pathway)
- **Forbidden:** vendor comms exposing other patients' data; cross-vendor data leakage

## Module 12 — Internal staff tasks

- **Audience:** internal staff (provider / ops / billing / fulfillment / compliance / vendor ops)
- **Triggers:** provider task, support task, billing task, fulfillment task, compliance task, vendor ops task, overdue task, reassigned task
- **Rule domain:** depends on task domain
- **Template domain:** `internal_task` (existing)
- **Authority owner:** task-domain-specific CODEOWNER
- **Automation default:** YES for task creation + reassignment + overdue escalation per `1G.1`
- **AI refinement default:** ON (opt-in) for task title/body suggestions
- **Clinical review required:** depends on task domain
- **Audit required:** YES
- **V1:** YES
- **Forbidden:** task copy with PHI in unstructured fields beyond minimum; auto-completion of clinical tasks by AI

## Module 13 — Patient education / lifecycle

- **Audience:** patient (primary)
- **Triggers:** onboarding education start, medication instructions on Rx fill, side-effect expectations on dose change, lifestyle guidance per pathway, lab preparation, refill expectations, cancellation/retention education, longitudinal care reminders, supplement/add-on suggestions (clinical-adjacent)
- **Rule domain:** `patient_education` (NEW) — distinct from `notification` (transactional/operational) and `marketing_lifecycle` (promotional/brand)
- **Template domain:** `patient_education` (NEW)
- **Authority owner:** clinical CODEOWNER (medication-related) + ops CODEOWNER (lifestyle/operational)
- **Automation default:** YES (event-triggered + scheduled drips); patient consent per `1K.11` for non-essential education
- **AI refinement default:** ON (opt-in) for personalization within strict constraints (no clinical advice generation); some templates strict
- **Clinical review required:** YES for medication/clinical-adjacent education; NO for purely operational
- **Audit required:** YES
- **V1:** YES (scope-limited: onboarding education for first pathway + medication instructions on Rx fill + dose change; full drip funnels incremental)
- **Forbidden:** education copy constituting clinical advice; cross-promotion of unrelated paid services as "education"; FDA off-label education

## Module 14 — Compliance / audit

- **Audience:** internal staff (compliance, clinical CODEOWNER, admin), occasionally patient (privacy/records request responses)
- **Triggers:** consent update required, privacy request (CCPA/GDPR/state-specific), records request (HIPAA right of access), adverse event documentation, escalation audit, AI correction / model recall internal notice, policy update notification
- **Rule domain:** `compliance_audit` (NEW)
- **Template domain:** `compliance_audit` (NEW; primarily staff-internal) + `account_lifecycle` (for patient-facing privacy/records request responses)
- **Authority owner:** compliance CODEOWNER + admin
- **Automation default:** Internal notifications auto-fire; patient-facing privacy/records responses templated with strict tone + legal review
- **AI refinement default:** OFF universally (compliance language requires legal precision)
- **Clinical review required:** YES for adverse event documentation; NO for general privacy/records (legal review instead)
- **Audit required:** YES
- **V1:** YES (minimum: consent capture, adverse event docs, model recall internal notice, privacy request response template — HIPAA right of access non-negotiable)
- **Forbidden:** AI-generated legal language; informal tone; compliance shortcuts on adverse event escalations

## Module 14.5 — Admin-level internal notifications

- **Audience:** admin (founder, leadership, on-call)
- **Triggers:** on-call escalation, system outage, vendor SLA breach exceeding threshold, model recall issued, safety_classification_miss aggregate threshold crossed, regulatory notice received, partner incident, financial reconciliation anomaly
- **Rule domain:** `compliance_audit` (some) + `vendor_exception` (some) — admin scope is determined by template domain
- **Template domain:** `admin_internal_notification` (NEW)
- **Authority owner:** admin (admin-only) + compliance (regulatory)
- **Automation default:** YES (alerts/digests fire on signal thresholds)
- **AI refinement default:** OFF for incident notifications; ON for routine digests
- **Clinical review required:** NO
- **Audit required:** YES
- **V1:** YES at MVP level (on-call escalation + safety-miss threshold + outage alerts; full admin dashboard incremental)
- **Forbidden:** admin notifications including PHI beyond what's necessary; routing admin alerts to non-admin staff

## Module 15 — Marketing suite (drip funnels, retention, win-back)

- **Audience:** patient / lead (primary)
- **Triggers:** signup but no intake started, intake started but not completed, eligibility denied (re-engagement), pathway completed (cross-sell to add-ons), churned subscriber (win-back), seasonal/promotional events, external acquisition campaigns
- **Rule domain:** `marketing_lifecycle` (NEW; with hard carve-out)
- **Template domain:** `marketing_lifecycle` (NEW; with hard carve-out)
- **Authority owner:** ops CODEOWNER + compliance CODEOWNER (NOT clinical CODEOWNER by default)
- **Automation default:** YES (drip scheduling); opt-in required (TCPA / CASL / GDPR per `1K.11`)
- **AI refinement default:** ON (designed for AI refinement — A/B variants, personalization within constraints)
- **Clinical review required:** NO (template governance) — exception: clinical-adjacent claims pull in clinical CODEOWNER (and likely should move to `patient_education`)
- **Audit required:** YES (HIPAA marketing authorization + state-specific marketing rules)
- **V1:** PARTIAL (signup-incomplete drip + post-purchase onboarding cross-sell only; full retention/win-back/A/B testing engine V1.5+)
- **Forbidden:** clinical claims, off-label promotion, FDA-approval implications without approval, PHI in marketing without `marketing_personalization_with_phi` consent, marketing comms ignoring opt-out, retention copy implying clinical consequences

---

# Part 4 — V1 vs later (most modules in V1)

**V1 (foundational; ships before first Rx pathway):**
1. Account / onboarding ✓
2. Clinical intake / clarification ✓
3. Eligibility / denial / pause ✓
4. Provider review / clinical workflow ✓
5. Labs ✓
6. Prescription / medication workflow ✓
7. Orders / fulfillment / shipping ✓
8. Subscription / billing / payment ✓
9. Safety / adverse events ✓ (non-negotiable)
10. Support / customer service ✓
11. Vendor / partner operations ✓ (lab + pharmacy partners)
12. Internal staff tasks ✓
13. Patient education / lifecycle ✓ (V1 scope: onboarding education + medication instructions + side-effect expectations on dose change)
14. Compliance / audit ✓ (V1 scope: consent capture, adverse event docs, model recall internal notice, privacy/records response templates)
14.5. Admin-level internal notifications ✓ (V1 scope: on-call escalation + safety-miss threshold + outage alerts)

**V1.5 / later:**
15. Marketing suite — V1 PARTIAL (signup-incomplete drip + post-purchase onboarding cross-sell only); full engine V1.5+

**13 of 15 modules fully V1 + Module 14.5 V1 at MVP + Module 15 V1 partial. The architecture launches with the full communication surface, not phased.**

---

# Part 5 — Strict-template vs AI-refinement classification

**Strict locked templates (`ai_refinement_allowed = false` by default):**
- Clinical safety / adverse events (Module 9) — highest stakes
- Eligibility / denial (Module 3) — sensitive
- Provider review / clinical workflow (Module 4) — clinical decisions
- Labs (Module 5) for clinical results comms
- Prescription / medication workflow (Module 6) for clinical content
- Compliance / audit (Module 14) — legal precision
- Account / onboarding (Module 1) for consent + identity templates
- Admin-level escalations (Module 14.5) for incident alerts

**Strict-default with selective AI refinement opt-in:**
- Clinical intake / clarification (Module 2) — strict for safety-critical; AI for non-safety nuance
- Patient education (Module 13) — strict for medication-related; AI for personalization within constraints
- Internal staff tasks (Module 12) — strict for clinical tasks; AI for routine task descriptions

**AI refinement allowed by default (with constraints):**
- Orders / fulfillment / shipping (Module 7) for routine status updates
- Subscription / billing / payment (Module 8) for retention copy (NOT for refund denials)
- Support / customer service (Module 10) for routine acknowledgment + status
- Vendor operations (Module 11) for routine vendor comms (NOT for incident escalations)
- Marketing suite (Module 15) — designed for AI refinement (A/B test variants, personalization within carve-out constraints)

---

# Part 6 — Cross-domain collision handling

## Incoming collisions (handled by Section 1P inbound atomization — already locked)

Examples per user:
1. **Wrong dose shipped + stomach pain + cancel subscription** — one inbound source, three atom types (fulfillment exception → ops; clinical symptom → provider; cancellation → billing). Section 1P parallel role-scoped reviewers; all see source narrative.
2. **Lab overdue + refill blocked + subscription renewal upcoming** — three separate triggers, same patient state intersection. Outgoing collision (see below).
3. **Provider question + billing dispute in same message** — one inbound message, two atom types (clinical question → provider; billing dispute → billing).

## Outgoing collisions (NEW patch needed at 1G.3)

Multiple Section 1Q rules firing patient-facing notifications within a short window:

- **Digest rule (NEW):** when ≥3 patient-facing notifications target the same patient within a configurable window (default: 4 hours), the system creates a digest message summarizing the events with click-throughs to per-event detail. Exceptions: safety/urgent (Module 9) ALWAYS bypass digest; `clinical_safety_escalation` cannot be digested.
- **Sequencing rule (NEW):** when notifications are scheduled within the same window, send order is by `priority` (urgent_clinical → urgent_ops → standard → low) regardless of trigger order; ties broken by clinical relevance (clinical > operational > marketing).
- **Marketing always last:** marketing_lifecycle notifications always defer to transactional notifications in the same window; never preempt account/clinical/billing comms.

Lives at `1G.3` extension; cross-link to Section 1Q.13.

---

# Part 7 — Per-channel rendering rules

| Channel | Constraints | Module fit |
|---|---|---|
| `sms` | 160-char limit; no rich content; no PHI without TCPA opt-in; tone constraints stricter | All patient_facing modules; safety/urgent prefer SMS for immediacy |
| `email` | Rich content; HIPAA-compliant transit; subject + body separately constrained; PHI permitted with controls | All patient_facing modules; education + marketing primary |
| `in_app` | Rich content; deep-link to specific surfaces; PHI permitted (post-auth) | Action items + provider responses + interactive surfaces |
| `push` | Tight char limits; no PHI in body (lock screen); deep-link only | Urgent/transactional with deep-link to in_app |
| `phone_script` | Live phone scripts; not auto-fired; human-read; PHI permitted (verbal under HIPAA) | Module 10 (support escalation), Module 9 (safety urgent), Module 11 (vendor incident phone) |
| `print` | Rare; clinical visit summaries, Rx printouts | Module 6 (Rx printout), Module 4 (clinical visit summary) |
| `vendor_email` | Vendor-facing; formal tone; no patient PHI without partner BAA scope | Module 11 |
| `internal_dashboard` | Staff-only; rich content; PHI permitted per role capability | Modules 12, 14, 14.5 |

**Cross-channel duplication rule:** when same notification fires on multiple channels (SMS + email + in_app), templates declare per-channel variants in `channels: Channel[]` with channel-specific copy; CI lint forbids identical body across channels.

---

# Part 8 — First end-to-end slice: GLP-1 onboarding through first refill

**Scope:** account creation through identity verification (Module 1) → intake including free-text answers per Section 1P (Modules 2, 3) → provider review batch + decision (Module 4) → lab kit ship + collect + result review (Module 5) → Rx authorize + send to pharmacy + ship to patient (Modules 6, 7, 11) → subscription create + first month billing (Module 8) → onboarding education sequence + dose-change instructions on titration (Module 13) → side-effect check-in via Mode F (Modules 2, 9) → first refill cycle (Module 6 refill loop with lab freshness gate per `1L.16`) → support ticket flow (Module 10) → internal task surfaces for provider + ops + billing + lab ops (Module 12) → compliance audit trail throughout (Module 14) → admin escalation for any safety-miss aggregate threshold (Module 14.5) → light marketing: signup-incomplete drip + post-onboarding cross-sell (Module 15 partial).

**Why GLP-1 first slice:**
- Highest-volume target market (per moat thesis)
- Stresses every module: account onboarding, clinical intake (with locked free-text + atomization patches), eligibility (BMI gate), provider review (off-label complexity), labs (A1c + comorbidities baseline), Rx (compounded vs branded), fulfillment (cold chain), subscription (monthly delivery + lab cadence), safety (pancreatitis, gallbladder, pregnancy, MEN-2), support, vendor (lab partner + compounding pharmacy), internal tasks, education (titration schedule, side-effect expectations, lifestyle guidance), compliance (HIPAA + state telehealth + FDA off-label boundaries), admin (incident escalations).
- If GLP-1 ships safely, architecture validated for ED/TRT/HRT (smaller catalog of differences).

This single slice exercises the full architecture and produces real usage data for the deferred V1.5 expansions.

---

# Part 9 — Foundational gaps (closed by patches)

1. **Section 1Q.1 rule domain enum too narrow** — needs 5 new domains.
2. **Section 1Q.2 template domain enum too narrow** — needs 6 new domains.
3. **No outgoing-collision sequencing rule** — multiple rules firing in same window need digest + sequencing; lives at `1G.3` extension.
4. **No marketing carve-out enforcement** — marketing templates need hard CI lint forbidding clinical PHI/assertion references without `1K.11` consent.
5. **No `1K.11` patient_consents marketing-specific consent types** — needs `marketing_sms`, `marketing_email`, `marketing_personalization_with_phi`.
6. **No per-channel rendering discipline** — Section 1Q.5 declares `channels: Channel[]` but no rule about cross-channel body diversity.

---

# Part 10 — Future-proofing alignment

The taxonomy directly enables:

- **AI layering over time:** every module declares `ai_refinement_default` per template; opt-in is per-template at PR time; future AI improvements roll out module-by-module without architectural rework. Marketing module is explicitly designed for AI refinement (with carve-out) — the natural first heavy-AI use case.
- **Audit trails:** every module has typed `audit_event_type` namespace; reconstructable per `Section 1Q.7` + `Section 1P.11` correction discipline; rule_recall + template_recall handle systematic errors per `Section 1Q.10`.
- **Regulatory scrutiny:** modules CODEOWNER-segregated by tier; FDA AI/ML SaMD post-market monitoring satisfied by correction patterns + recalls; HIPAA marketing authorization handled by `1K.11` consent types + marketing carve-out; state-specific telehealth marketing rules captured in `prohibited_claims`.
- **Safety boundaries:** clinical-bearing modules (1, 2, 3, 4, 5, 6, 9) require clinical CODEOWNER review; AI cannot bypass templates per Section 1Q invariant 5; safety-miss separate channel via `1H.6.1E` per `Section 1P` invariant 20.
- **Expansibility:** new modules can be added by extending domain enums + adding rows to 1Q.13 matrix; consolidation discipline (Section 1Q invariant 12) prevents fragmentation.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Single multi-file checkpoint applied: NEW Section 1Q.13 module taxonomy + Section 1Q.1 + 1Q.2 enum expansions + 6 cross-link patches in 1G.3 / 1H.4 / 1K.11 / 1P.4 / 1L.15 / 1K.14 + this audit.

After landing: `repo/rules/` + `repo/templates/` directory structure scaffolded with module-organized subdirectories (`repo/rules/clinical_safety/`, `repo/templates/clinical/`, `repo/templates/marketing/`, `repo/templates/account_lifecycle/`, etc.); first GLP-1 end-to-end slice rules + templates authored under appropriate CODEOWNER review; marketing infrastructure scaffolding can begin in parallel with clinical work.

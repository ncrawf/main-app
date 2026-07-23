# v4 — Track A Gate 1A — Operating-Reality & Evidence Capture (provisional "Governed External Engagement & Relationship Continuity")

Document type: `evidence_or_architecture_pressure_capture`
Authority: `analysis_nonbinding` (`GRD-036` — capture broad, promotion gated)
Status: `gate_1_in_progress · evidence_capture_active · not_reviewed · not_promoted`
Parent: `.cursor/plans/v4_demand_engagement_continuity_gate0_recovery.md` @ `b191d75` (accepted Gate 0A/0A.1 + Gate 0B target-shape checkpoint)
Working arc name: **provisional** ("Governed External Engagement & Relationship Continuity")
Accountable lead / single writer: one Opus context, on branch `analysis/external-engagement-gate1-operating-reality`
Track B (Operator Economics): split-and-parked — observations routed, NOT executed here
agent_read_rule: `consult_if_routed` · Review gate: `user_knox_required`

> **Gate 1A scope (bounded):** (1) create the branch + this durable artifact + kickoff commit; (2) capture ONLY repository/contract/code-grounded current reality; (3) six worked-trace SHELLS marked `pending_operator_evidence` (NOT represented as factual); (4) one ranked Operator Specimen Manifest. Gate 1B (turning your artifacts into factual traces) comes AFTER you supply specimens. This does NOT reopen Gate 0, mint anything, execute Track B, fix C12/C13, touch code/contracts, or merge.

---

## §1 — Source posture
- **Read directly by lead (this arc + prior gates):** accepted Gate 0 carrier @ `b191d75` (Gate 0A/0A.1 §A.0–§A.11 + Gate 0B §B0–§B11); the live code files below (verified during Gate 0A.1): `lib/patients/resolvePatient.ts`, `app/api/forms/[formKey]/route.ts`, `lib/consents/types.ts` + `catalog.ts`, `supabase/migrations/20260504120000_intake_foundation_v1.sql`.
- **Helper-read + lead-verified (Gate 0A/0A.1):** May marketing corpus; identity/SC-ID-PT-001/intake/D7/RBAC/Messaging/CNS/D6/Settings contracts; `marketing_attribution` projection; EVRUN-2026-000004 §0.5.
- **Consulted:** read-graph route 9l; catalog rows.
- **Searched / located only:** code greps for marketing/campaign/attribution/tracking runtime.
- **Not inspected (owed):** current medspa operating artifacts (see §6 manifest — Gate 1B input); official ad-platform primary-source docs (deferred until the manifest establishes which platforms are actually used); website/public-presence operator read (`2026-06-08`).
- **Repo refs:** base `b191d75423b256b52a1693913d19b88f953fd533`; child branch `analysis/external-engagement-gate1-operating-reality`.

## §2 — Repository / contract / code current reality (what the repo can PROVE)
Discipline: repository presence ≠ implementation; a search miss = **"not located in bounded search"**, never "absent."

**Identity / permission.** Design (Identity contract + SC-ID-PT-001): reusable person identity + scoped `patient_relationship`; two-gate match≠permission; anonymous ≠ `contact_identity`. Code: only a **flat `patients` table** + `resolvePatientFromAnswers` (email-equality match → **overwrites** name/DOB/phone/address). `contact_identity`, `patient_relationship`, confidence/ambiguity/staff-review, two-gate isolation = **not located in bounded search**. **C12** (email-match identity collapse) is on an **active POST path** (`app/api/forms/[formKey]/route.ts` → admin client → mints portal bootstrap token) — routed finding, NOT fixed here.

**Consent.** `patient_consents` table exists with **nullable `patient_id` + `captured_session_id`** (a partial session-bound **pre-identity carrier**); the governed **uplift/linkage lifecycle is missing**. Consent GATE enforced only at outbound send (`lib/disclosure-policy/*`), no general gate module. **C13**: SMS cross-layer vocabulary/mapping divergence (`sms_promotional_v1_signed` emit vs `sms_marketing_opt_in` legacy vs `marketing_sms` canonical; spec→canonical write mapping not located) + four D7 comm-consent types absent from the 13-value code enum.

**Campaign configuration vs CNS runtime.** Design: config/release = Platform-loop treatment; live execution = CNS orchestration (§9.3). Code: campaign engine / `campaign_definition` / audience / suppression = **not located in bounded search**. So the config-vs-runtime split is **designed, unbuilt** — separability is testable only against future build or operator workflow, not current code.

**Messaging.** `lib/outbound/dispatch.ts` + `runSendPolicyGate()` (disclosure-policy subset) exist; Twilio = **stub**; full 8-gate (quiet-hours, rate-limit, contact-freshness, exclusion windows) = deferred/partial.

**Tracking / egress.** No pixel / UTM / `tracking_link` / attribution / `gclid` runtime **located in bounded search**. `marketing_attribution` projection models attribution as a deterministic join (design, unbuilt). Egress governance = **greenfield in code**.

**Commerce.** Stripe checkout + `treatment_orders` + subscriptions partial; `commerce_orders` retail rail = unbuilt.

## §3 — Implementation-maturity matrix (repo-only; bounded search)
| Semantic | Maturity |
|---|---|
| `patients` (flat identity) | implemented |
| `contact_identity` · `patient_relationship` · two-gate isolation | not_located_in_bounded_search |
| SC-ID-PT-001 resolution (confidence/ambiguity/staff/merge) | documented_not_verified |
| Identity resolver (email-match, C12) | implemented_partial (nonconformant — see C12) |
| `patient_consents` record + pre-identity carrier | implemented_partial |
| Consent gate enforcement | implemented_partial (outbound only) |
| Intake runtime (GLP-1) | implemented_partial |
| Messaging send-policy / 8-gate | implemented_partial (Twilio stub) |
| Campaign config / engine / audience / suppression | not_located_in_bounded_search |
| CNS live orchestration (enroll/branch/exit) | documented_not_verified |
| Tracking / pixels / UTM / attribution runtime | not_located_in_bounded_search |
| Ad-platform conversion APIs / external egress | external_only (unverified; deferred to manifest) |
| Commerce checkout / orders | implemented_partial |
| Operator economics (AP/COGS/spend/GL) | not_located_in_bounded_search (Track B) |

## §4 — Gate-0 stress matrix (SEEDED from repo evidence only; most OPEN pending operator/build evidence)
| Gate 0 accepted decision | Repo-only status | Note |
|---|---|---|
| A. Epistemic chain (observed/claim/attribution/causal-sibling/adopted-basis/consequence) | OPEN | no attribution/causal runtime located; testable only vs operator + platform evidence |
| B. Tracking egress governed; anonymous≠identity; computed sensitivity | OPEN (impl) · BENT (identity foundation) | egress unbuilt; C12 email-collapse BENDS the identity/permission base an egress model would rely on |
| C. Operator Economics → Track B split | HELD | confirmed unowned in code + contracts; correctly parked |
| D. Campaign config/release (Platform) vs live execution (CNS) | OPEN (unbuilt) | separable in design; no engine code to stress yet |
| E. Agent-mediated counterparties compose-first | OPEN | no counterparty/influencer runtime; composition untested against reality |
| F. Provisional arc name / Track A boundary | HELD (provisional) | no repo evidence forces rename; real test is Lane 5/6 operator reality |
| G. Task-D composite fixture | OPEN | fixture is design; becomes factual only with operator specimens |
| Care-neutrality floor · care-not-terminal · inherit-EVRUN-000004 | HELD (design) | no code contradicts; enforcement unbuilt |
> No Gate 0 decision has BROKEN on repo evidence. The load-bearing real-world tests are all **operator-evidence-dependent** (Gate 1B).

## §5 — Six worked-trace SHELLS (`pending_operator_evidence` — NOT factual yet)
Each shell lists the fields Gate 1B must fill from your artifacts (actors/principals · relationship(s) · source & record owner · material times [occurred/observed/reported/received/recorded/effective/adopted/authorized/executed/settled/outcome] · authority & permission · config/release · runtime orchestration · external egress · returned external claims · attribution & causal status · adopted basis · economic consequence · correction/dispute/closure · implementation maturity · unknowns).
- **T1** `pending_operator_evidence` — Public ad/page → visit → tracking egress → contact capture → booking.
- **T2** `pending_operator_evidence` — Known patient/contact reactivation → permission evaluation → send → response/opt-out.
- **T3** `pending_operator_evidence` — Private referral or sponsor channel → identity/relationship transition → care/commerce/referral/no-action terminal.
- **T4** `pending_operator_evidence` — Influencer with external agent → approved/unapproved claim → platform-reported conversion → OMNI-observed outcome → disputed compensation.
- **T5** `pending_operator_evidence` — Identity/consent correction after prior external disclosure → prospective change vs prior-invalidity-discovered-later.
- **T6** `pending_operator_evidence` — Runtime optimization proposes materially-new claim/audience/offer/payload → variation-envelope exit → Platform revalidation/release.

## §6 — OPERATOR SPECIMEN MANIFEST (for Nick — gather ONE organized batch; do not send piecemeal)
Ranked P0 (needed to make traces factual) / P1 (materially sharpens) / P2 (nice-to-have). **Redaction guidance:** redact patient PHI, full card/bank numbers, and staff SSNs; KEEP structure, field names, consent wording, timestamps, statuses, amounts, platform names, and workflow steps. Screenshots or exports both fine.

**A. Public presence & release (P0)** — your live site/landing pages + how a page/offer gets **created → reviewed → published → changed → taken down** today (tool used: Wix/Squarespace/WordPress/other; who approves clinical/pricing claims).
**B. Advertising & analytics stack (P0)** — WHICH of Meta / Google Ads / TikTok / GA4 / GTM / call-tracking / agency tools you actually use (just the list first, so I only research the platforms you run); plus one example of pixel/tag setup if handy.
**C. Campaign evidence (P1)** — 1–2 campaign exports/screenshots showing audience, ad/offer, spend, conversions, and how you currently judge attribution.
**D. Intake / lead / consent (P0)** — your real intake + lead forms, the privacy/consent wording, SMS/email opt-in checkboxes, and any automated follow-up sequence (the actual copy + trigger).
**E. Lead management & front-desk workflow (P1)** — the spreadsheet/CRM/dashboard/call-log you actually run leads through, and the front-desk steps from "new lead" to "booked."
**F. Referral / reactivation / win-back / no-show recovery (P1)** — how each of these actually happens today (manual? text? who does it?).
**G. Influencer / affiliate operations (P0)** — 1–2 real agreements (redacted), an example post, your disclosure rules, deliverables, comp structure, usage rights — **and any time it went wrong** (payout dispute, off-claim, ghosting).
**H. Ambiguity/failure examples (P1)** — any real case where identity, consent, attribution, a campaign claim, or a payout got confused or contested.

**Track B — Operator Economics (OWED, NOT part of Track A; list only, do not send yet):** AP / vendor invoices / COGS / general ledger / budgeting / media-spend reconciliation. These belong to the parked Operator Economics Track B Gate 0, not this arc.

## §7 — Gate 1A stop report
Nothing minted; no domain/primitive/telemetry-object/counterparty-object/causal-engine; no arc rename/canonization; Track B not executed; C12/C13 not fixed; no contract/schema/surface/code edit; no merge; Gate #15 + governing checkpoint untouched; Reactor/C4.5 not promoted; no Task-D moat verdict; no Gate 1B. Six traces are shells (`pending_operator_evidence`), not represented as factual. Next: Nick supplies the §6 batch → Gate 1B turns them into factual traces + re-runs the Gate-0 stress matrix against reality.

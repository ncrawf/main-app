# OMNI Comparator & Analogy Registry

Document type: `reference_registry` (governed stream artifact — append-only index)
Authority: `evidence_with_pointers` — the canonical INDEX of every real-world comparator/analogy/feature-reference used to explain OMNI. It does NOT originate doctrine; the binding framing lives in thesis §1 + §3.5 (meaning) and the architectural commitments in `03_decision_extraction_ledger.md` (`DEC-030`/`DEC-031`). This registry exists so the comparison is recorded ONCE and never re-derived or lost.
Status: `active` (created 2026-06-01 from a full-corpus sweep — two explore passes over the system map, doctrine DLs, thesis v0/v1/v2 + founder, narratives, future arcs, audits, designs)
Domain(s): `architecture_governance`, `strategy`
Source-of-truth relationship: companion/index to thesis §3.5 (the narrative comparator home). Thesis = the WHY/framing; this registry = the complete classified inventory + provenance. Manifest action: `add_tier1` · Review gate: `architecture_steward_required`.

---

## Why this exists (read first)

The "how does OMNI compare to Amazon / Tesla / Epic / Shopify / Mindbody / NASA / airport / Oracle…" conversation recurred ~3x over 12 weeks and kept evaporating because the comparisons lived in chat, never in doctrine — and a thin 7-name list under-represented the ~75-80 references actually in the corpus. This registry captures all of them, classified, so future-us (and Nick) never re-derive the lens. **Two lenses (thesis §3.5):** **Lens A** = what OMNI *is/replaces* (product scope); **Lens B** = how OMNI *behaves* (architecture pattern). Plus feature-idea references and incidental vendors.

## Operating contract (governed stream artifact — `D0TIER0-GRD-002`)

- **Scope / what belongs:** every real-world company / product / platform / standard / industry used as (1) a strategic comparator, (2) an architecture analogy, (3) a feature-idea reference, or (4) an incidental integration vendor — with classification + one-line "how it relates" + provenance file(s).
- **What does NOT belong:** doctrine (lives in thesis/contracts); per-vendor integration specs (live in the rails/adapters substrate); marketing copy. This is an index, not a source of truth.
- **Entry format:** `name | how it relates to OMNI (1 line) | provenance file(s)`, grouped by class.
- **Lifecycle:** append-only; when a new comparator/analogy is used in any pass, add it here (do not re-scatter). Reclassify in-place if a name's role changes; never delete (mark superseded).
- **Authority:** evidence/index only; promotes nothing. Binding framing changes go to thesis §3.5 + `03` ledger.
- **Routing:** referenced by thesis §1/§3.5, `OMNI_System_Map_vNext.md` orientation, guardrail `D0THES-GRD-026`.

---

## §A — STRATEGIC COMPARATORS (Lens A: what OMNI is / is not / replaces)

| Name | How it relates | Provenance |
|---|---|---|
| **Henry Ford Health** | NOT — institutional gravity (physical + employment + referral lock-in); OMNI = networked OS no institution controls | thesis §3.5 Q1; founder; recon map |
| **Hims / Ro** | NOT (visible doctors + substrate-as-trust, not brand-opacity) AND replaces (DTC telehealth + async Rx + subscription = one of the collapsed silos) | thesis §1 Lens A, §3.5 Q2/§5/§6/§13.6; system map; DL-19/20/21; many audits |
| **RealSelf** | NOT — opinion-marketplace / doctor-popularity contest explicitly rejected as product surface (§13.6) | thesis §3.5 Q3 |
| **Cursor (IDE)** | NOT — model-as-agent; OMNI = model-as-substrate, clinician-as-agent (§12.8) | thesis §3.5 Q3a |
| **Apple** | TAKES substrate-unification discipline; REJECTS lock-in + data isolation (artifacts patient-portable) | thesis §3.5 Q7 |
| **Amazon / Amazon Basics** | TAKES operator-pluralism + house-brand-alongside-third-party; REJECTS marketplace tyranny | thesis §3.5 Q8 |
| **Whole Foods (+ Amazon Basics)** | Foundational operator-pluralism reference: "one shelf, many operators, substrate truth underneath" | thesis §3.5 Q13 |
| **Tesla** | TAKES vertical-integration discipline; REJECTS autonomy-commit at the care layer | thesis §3.5 Q9 |
| **Meta (FB/IG/WhatsApp/Threads/Messenger)** | NOT — substrate fragmentation / per-surface re-implementation; OMNI unifies substrate, specializes surfaces | thesis §3.5 Q12 |
| **Epic / Cerner / Athenahealth / HealtheLife** | Replaces/contrast — "Epic is not the bar"; outpatient-EMR-class depth not hospital-grade; EMR = projection not a domain | thesis §1 Lens A; FOUNDATIONAL §7.6; DL-20; hybrid-care audit |
| **Athena lab module** | Depth bar — "Athena-lab-module-class on Day 0" for labs/in-office diagnostics | system map; FOUNDATIONAL; DL-20 |
| **MyChart / Google Health** | NOT — failed consumer PHR / portal-everywhere efforts OMNI is distinguished from | thesis §2 (v0/v1/v2) |
| **Shopify** | Replaces (commerce/catalog/checkout/fulfillment = collapsed silo); "Shopify-class on Day 0"; 10 evidence buckets | thesis §1 Lens A; system map §2.12; FOUNDATIONAL |
| **Mindbody / Boulevard** | Replaces (scheduling + packages/memberships) AND anti-pattern source (evidence, not template; "do not chase parity") | thesis §1 Lens A; all major designs; DL-17/19/20/21/22 |
| **Aesthetic Record / Vagaro / Jane / Trainerize / Square (scheduling)** | Cosmetic/wellness SaaS competitors — feature parity explicitly NOT chased; gap analysis | FOUNDATIONAL §7.6; designs index §2.1.4 |
| **RingCentral / Klara / OhMD** | Replaces (comms rail); "RingCentral/Klara-class depth" required Day 0; messaging-only competitors lack clinical depth | thesis §1 Lens A; FOUNDATIONAL; system map |
| **ActiveCampaign / Klaviyo / Customer.io / Braze / Iterable / HubSpot / Attentive** | Replaces (marketing/campaigns/CRM) AND external platforms are OBSERVERS, NEVER source of truth / never receive PHI | thesis §1 Lens A; system map marketing/attribution; marketing audits |
| **Oracle / enterprise SaaS** | Replaces (federation/tenancy/governance backbone) | thesis §1 Lens A; founder |
| **Mayo / Quest / LabCorp** | Partner Operators (cross-org care + lab fulfillment spokes) | thesis §3.5/§5/§6/§11/§12 |
| **Truepill** | Cross-sell/fulfillment platform comparator (GLP-1 slice) | audits/glp1_first_slice |
| **Google Ads / Meta / TikTok** | Attribution OBSERVERS only — gclid/fbclid/ttclid; never source-of-truth | system map; marketing audits |
| **Calendly / Cal.com / Zoom Scheduler** | NOT a generic calendar widget (rejected clone) — but scheduling patterns borrowed (see §B) | system map (rejected); designs |
| **LegitScript** | Auditability/verification-readiness posture (not a full module) | system map |
| **Workday / ADP / Gusto** | the workforce/HR/payroll stack OMNI's future **Business-Ops** domain would span (`REV-164`) | this registry (named 2026-06-01) |
| **WordPress** | site / content / CMS / brand-marketing surfaces — the Surface layer (brand sites + patient-facing content over substrate) | thesis §1/§3.5 Lens A (named 2026-06-01) |
| **Hims Labs** | DTC lab ordering + result-delivery product (alongside Quest/LabCorp) — diagnostics fulfillment silo | thesis §3.5 Lens A (named 2026-06-01) |
| **Stripe / payment processors (as a stack category)** | payments / billing — a stack function OMNI owns as D6 money truth (Stripe = rail/adapter, not truth; see §D) | thesis §3.5 Lens A |
| **ChatGPT (the displaced workaround)** | today staff screenshot PHI into ChatGPT then confirm with the doctor; OMNI's governed substrate + AI Response Assist replaces this ungoverned PHI-leaking behavior | thesis §3.5 Lens A; FUTURE_ARC phi; system map (Response Assist) |

## §B — ARCHITECTURE ANALOGIES (Lens B: how OMNI behaves structurally)

| Name | How it relates | Provenance |
|---|---|---|
| **Amazon** | **Act/Fulfillment loop** — ordered things → fulfill → deliver → exceptions; generalized order, payloads specialize; return-within-30-days = refund+restock | thesis §3.5 Lens B/§8/§8.6; coherent-pattern; scheduling operating model |
| **Tesla self-driving** | **Sense loop** — signals → state estimation → safety monitor → feedback; "Tesla-autopilot" one-CNS-spine no-mini-brains; sensor-frame typed refs not blobs; OTA recall = model rollback | thesis §3.5 Lens B/§8; FOUNDATIONAL; evolution vol.2 |
| **NASA / Houston / mission control** | **Authority gates between loops** — telemetry-vs-command, go/no-go, escalation, audit | thesis §3.5 Lens B/§8; founder |
| **Air travel (airport / ATC / FAA / IATA / airline)** | **Planning axis** (appointments) + multi-operator coordination; boarding-pass/customs = identity/consent; ATC = Network Governance Plane | thesis §3.5 Q10/Lens B; coherent-pattern; designs |
| **Delta / United / Expedia / fare class** | Fare class = commercial variant of one flight, NOT a flight type → `pricing_option` N-to-N | scheduling rule matrix (index/booking/treatment-menu) |
| **Restaurant SaaS (Toast / Square / OpenTable / Resy)** | Substrate-provider + brand-operator pattern; add-ons/modifiers/party-size → service + add-on + gate timing; "your usual table" = rebook continuity | thesis §3.5 Q11; mindbody §K.2; booking composer |
| **Hospital OR / endoscopy / Epic OpTime / Cerner OR Manager** | Multi-axis atomic resource booking (surgeon→anesthesia→room→recovery, all-or-nothing) | mindbody §K.4; designs index; booking composer |
| **Calendly / Cal.com / Google Calendar / iCal (RFC 5545 RRULE)** | Event-type vs encounter separation; round-robin provider pool; recurrence + exception overrides | designs index; booking composer BC-09/17+ |
| **Uber** | Dynamic pricing → promo/discount patterns; two-sided symmetry (surge explicitly rejected) | mindbody §K.5; scheduling operating model |
| **Hotels (multi-channel)** | Direct vs OTA rate → online vs in-clinic pricing + entitlement activation; early-checkin/late-checkout = resource-hold extension | mindbody §K.6; scheduling operating model |
| **Ford assembly line** | Sequential resource scheduling for procedure encounters | mindbody §K.10 |
| **CPU / RAM scheduling** | Priority + capacity + locality → entitlement redemption priority + room/equipment locality | mindbody §K.9; scheduling pressure-test |
| **Apple HealthKit** | "Contributions to a record" — atomized proposals in a review queue, not auto-chart-write | inbound-atomization audit; system pressure-test |
| **Apple (privacy/trust)** | High-trust minimal notifications; don't auto-promote a signal because it repeated; AI assists, doesn't obscure | privacy-comms + assertion-followup audits |
| **Amazon CS / Salesforce / Zendesk** | One interaction_id → multiple intent vectors → case→tasks atomization; shared engine, segregated governance | inbound-atomization + system pressure-test; module taxonomy |
| **Stripe (fintech internals)** | Idempotency, immutable audit, orchestrator primitives, commerce/payment separation — pattern, not just vendor | build-pattern assessment; mindbody §K.8 |
| **CTMS / EDC (clinical trial systems)** | Audit trail + version pinning + decision provenance + consent vocabulary | build-pattern assessment |
| **Mirth / Rhapsody (integration engines)** | Route-then-store, source-of-truth discipline, reconciliation (Section 1O pipeline) | build-pattern assessment |
| **Slack / Linear / Teams / Microsoft 365 / Google Workspace / Copilot** | Read-state pointer pattern (last_read_message_id); NOT a replacement for general enterprise collaboration | system map; FOUNDATIONAL; FUTURE_ARC phi |
| **iMessage** | Original-vs-flattened markup discipline (OMNI keeps the unmarked original) | system map; FOUNDATIONAL |
| **FHIR / HL7 v2 / DICOM / LOINC** | Standards alignment; planned→actual→evidence validation; structured lab/imaging ingestion | coherent-pattern; system map; DL-20 |
| **Elastic** | Search adapter (pg_trgm now → Elastic later; Section 1R) | system map |
| **Amplitude / PostHog** | External analytics SaaS — defer; analytics = projection over substrate, not a truth source | data-layers reconciliation |
| **Cultured / Evo** | Operator multi-brand deployment exemplar (shared backend, brand separation, federation) | system map |
| **Six-layer CNS / event-sourced + CQRS** | $1B-scale architectural pattern for the CNS spine | system map |
| **Joint Commission (via Epic CDS)** | Change-control / audit analogy | system pressure-test |
| **AWS-for-care** | Out-of-family platform topology (others build on OMNI substrate) | thesis §4 |
| **Anthropic (engineering / build OS)** | how a disciplined eng org builds: doctrine-first, guardrails, decision records, review gates, no silent drift — the "how would Anthropic build this?" lens. NOT substrate-handling; this is OMNI's **build-process** analogy (the OMNI Build OS, doctrine/guardrail/ledger discipline) | thesis §3.5 Lens B + AGENTS boot anchor (named 2026-06-01); Build OS docs |
| **Airplane (as object)** | redundancy, preflight checklists, fail-safe defaults, black-box recorder → defense-in-depth + audit/evidence; no single point of failure (distinct from airport/ATC = the coordination system) | thesis §3.5 Lens B (named 2026-06-01) |

## §C — FEATURE-IDEA REFERENCES (specific patterns to match, improve, or forbid)

| Name | Idea | Provenance |
|---|---|---|
| **Ageless AI** | Predictive-aging surface = governed projection over substrate (consent-scoped, model-versioned), NOT care authority | thesis §7.7.5 |
| **Apple Health / Whoop / Oura / Dexcom (Clarity/Libre)** | Wearable/CGM `source_event → observation → assertion`, device-scoped consent; `vendor_cloud_import` | thesis input modalities; FOUNDATIONAL |
| **Surescripts** | External Rx / medication-history ingestion | thesis input modalities; evolution vol.2 |
| **ClassPass ($0 booking)** | Fare-class $0 pricing option / booking-only third-party integration | DL-17/18; system map; mindbody §D.21/§K.1 |
| **Allē / Aspire / Cherry / CareCredit / GreenSky / Venmo / PayPal / Zelle** | Payment-method LABELS = tenant catalog rows, NOT substrate enums / not integrations | DL-17; system map Cross-DL warning |
| **Canfield Visia / VECTRA** | Partner imaging device = generic `partner_imaging_device` enum + tenant label | DL-22; treatment-menu design |
| **OpenTable "your usual table"** | Repeat-customer rebook continuity surfacing | booking composer BC-09 |
| **Calendly round-robin** | Provider-pool rotation strategies | booking composer BC-09b |
| **QuickBooks / Sage / Xero** | Accounting/GL export key (revenue categories; Phase D accounting DL) | DL-17 |
| **Botox / Restylane / Juvederm / Dysport** | Structured intervention/lot-tracking examples | FOUNDATIONAL |
| **Zoom Video SDK / Daily / Foundry** | Video rail adapter; OMNI owns `video_session` state | scheduling build contract |
| **Tap to Pay on iPhone / Apple Business Connect** | Mobile POS integration pattern | mindbody §J.3 |
| **Mindbody Marketplace / Sign-in-with-Mindbody** | Third-party booking + consumer OAuth patterns | mindbody §J.4/§J.9 |
| **ChatGPT (external paste)** | ANTI-PATTERN — staff pasting PHI into external ChatGPT → OMNI Response Assist replaces it | system map; FOUNDATIONAL; FUTURE_ARC phi |
| **Zoom/Meet/Teams screen-share · Siri/Alexa read-aloud · iCloud/Google Photos/Dropbox backup · Slack/Google Docs** | PHI-leakage scenarios to defend against | FUTURE_ARC phi §9 |
| **Claude / GPT(-4) / Gemini / OpenAI / Anthropic / Google** | Model registry; surface capabilities not models; `cross_org_ai_model_partner` (§12.8) | thesis §12.8 |

## §D — INCIDENTAL VENDORS (integration rails / processors — NOT analogies; vendor-confined adapters)

Stripe · authorize.net · Adyen (PSPs) · Twilio · MessageBird · Bandwidth · Sinch (SMS/voice) · Resend · Postmark · SendGrid (email) · Expo (push) · SRFax (fax) · Quest · LabCorp · Olink (labs) · DoseSpot · Surescripts (Rx) · Zoom · Daily (video) · Google Calendar · iCal (calendar). **Rule:** vendor names are labels/adapters in `metadata.payment_rail.<provider>` / `lib/external-rails/<vendor>/`; never substrate enums, never coupling points (DL-13 + Cross-DL warning).

## §E — Lens A product-scope collapse (canonical short form, thesis §1)

OMNI collapses into one governed substrate what today takes a stack of siloed SaaS: **Hims/Ro** (DTC telehealth) + **Epic/Cerner/Athena** (EMR/records/orders) + **Shopify** (commerce/fulfillment) + **Mindbody/Boulevard** (scheduling/memberships) + **RingCentral/Klara/Twilio** (comms) + **ActiveCampaign/Klaviyo** (marketing) + **Oracle** (federation/tenancy) + **[future] Workday/ADP/Gusto + QuickBooks** (business-ops: workforce/payroll/accounting — see Business-Ops gap, `REV-164`). The win is shared identity/consent/authority/evidence, not feature parity with any one.

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
| **Workday / ADP / Gusto** | the workforce/HR/payroll stack OMNI's **Business-Ops** domain spans (`REV-164`); payroll EXECUTES via an embedded-payroll rail (Check/Gusto-Embedded, `REV-172`) — OMNI owns labor truth, rail executes filing | this registry (named 2026-06-01) |
| **Workday Learning / Lattice / Rippling / 15Five / Salesforce-enablement** | the LMS / competency / performance / coaching / enablement stack OMNI's **Workforce Intelligence** capability spans (`REV-173`) — but NOT a silo app: distributed truth (Settings defs / D7 artifacts / BIZOPS `workforce_intelligence_state` / RBAC gate / D3-D5-D6 evidence) + ONE unified surface (`workforce_operating_context`); the **Tesla-operator-readiness** + **Amazon-associate-profile** pattern (distributed truth, unified surface). "Human operating system" depth bar. | this registry (named 2026-06-02, `D0THES-DEC-032`) |
| **WordPress** | site / content / CMS / brand-marketing surfaces — the Surface layer (brand sites + patient-facing content over substrate) | thesis §1/§3.5 Lens A (named 2026-06-01) |
| **Hims Labs** | DTC lab ordering + result-delivery product (alongside Quest/LabCorp) — diagnostics fulfillment silo | thesis §3.5 Lens A (named 2026-06-01) |
| **Stripe / payment processors (as a stack category)** | payments / billing — a stack function OMNI owns as D6 money truth (Stripe = rail/adapter, not truth; see §D) | thesis §3.5 Lens A |
| **ChatGPT (the displaced workaround)** | today staff screenshot PHI into ChatGPT then confirm with the doctor; OMNI's governed substrate + AI Response Assist replaces this ungoverned PHI-leaking behavior | thesis §3.5 Lens A; FUTURE_ARC phi; system map (Response Assist) |
| **Palantir (Foundry / AIP; Karp "we own the ontology")** | **TAKE:** executable objects / relationships / actions / dynamic-security — ontology as an operating layer (a real Lens-B borrow; C3.8 G2/G4). **REJECT:** proprietary ontology gravity · semantic lock-in · the claim that controlling the platform *representation* equals owning the domain. **OMNI counter-position:** owning a proprietary ontology *implementation* is not owning healthcare — even an *executable* ontology is a representation of the domain, not the domain physics; it does not thereby own consent / clinical-adoption / source-authority / care-responsibility / non-action / reopening / outcome-proof, which arise from healthcare itself and stay portable. **OMNI owns the governed care loops + AI-mediated-care physics that remain true across implementations** (match≠authorize · candidate≠commit · plural commit planes · non-action · execution-failure-reopens-decision · outcome-proof). **Full posture + keeper lines: `EVRUN-2026-000004` §0.5 ② "Offensive ontology posture" → thesis §3.5.** | C3.8 `G1b`/`G2`/`G4`; `EVRUN-2026-000004` §0.5 ② + §3 M6 + §9.10.1 D9 (named 2026-07-11); **source packet `EVSRC-2026-000316` (Foundry *Ontology → Core concepts* + *Link types → Overview*, accessed 2026-08-08); synthesis in `EVRUN-2026-000124` concept registry `C1`/`C2` → typed `link type`/`action type` + roles, consumed by `D0CKPT-DEC-009` item 2 / `D0CKPT-GRD-004`; NON-TRANSFER: link types are bidirectionally traversable with independently named sides — NOT semantically symmetric — and supply no OMNI dependency-direction semantics; no tenancy claim is supported** |

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
| **Anthropic (engineering / build OS)** | how a disciplined eng org builds: doctrine-first, guardrails, decision records, review gates, no silent drift — the "how would Anthropic build this?" lens. NOT substrate-handling; this is OMNI's **build-process** analogy (the OMNI Build OS, doctrine/guardrail/ledger discipline). **★ 2026-08-04 extension (multi-agent engineering):** explicit orchestrator/worker task boundaries (objective · boundaries · output format · tool/source guidance per worker) · isolated/fresh worker environments · durable plan/progress artifacts that survive context loss · Git + tests + evals + environmental feedback as the completion judge (not self-assessment) · containment via sandbox/permissions/bounded access rather than endless human approval prompts · **explicit warning against prematurely elaborate harnesses** (start simple + composable, measure, add complexity only when it demonstrably helps; harness assumptions decay as models improve). **OMNI TAKE:** explicit delegation · isolation · evaluation · simplicity. **OMNI REJECT:** treating an experimental multi-agent harness as mature production governance. `captured_interpretation_nonbinding` — official-source Evidence-Plane capture owed before Tooling v0.2 design; actionable target → `10_omni_build_os_rollout_sequence.md` Step 5 + `D0THES-REV-158`. | thesis §3.5 Lens B + AGENTS boot anchor (named 2026-06-01); Build OS docs; 2026-08-04 Knox benchmark synthesis (nonbinding); **source packet `EVSRC-2026-000317` (*Define success criteria and build evaluations*, accessed 2026-08-08); synthesis in `EVRUN-2026-000124` concept registry `C3` → predeclared specific/measurable criteria + task-specific evals with edge cases, consumed as the cold-boot acceptance test in `D0CKPT-DEC-009`; NON-TRANSFER: evaluator blinding is OMNI's own adaptation and not a claim on that page, and their statistical metrics / volume-over-quality principle do not apply to an n=1 governance boot test** |
| **Karpathy / autoresearch (minimal-loop discipline)** | **Lens B — build/experiment loop, NOT product.** Radically minimal agent loop: fresh branch per run · one editable surface · one objective metric · fixed execution budget · commit **before** evaluation · keep-if-metric-improves / reset-if-not · lightweight human-edited "org code" instructions · Git + a simple results file as the durable experiment memory. **OMNI TAKE:** shrink the agent's action surface and make the verifier brutally clear; prefer a machine-checkable keep/discard signal over prose assurance. **LIMIT (why OMNI cannot copy it wholesale):** OMNI's work crosses architecture authority, evidence, domains, review gates and multi-principal boundaries — it cannot reduce to one file and one scalar metric; the constraint discipline transfers, the environment does not. **Also a useful anti-ceremony challenge:** which controls change measurable outcomes vs. which are defensive prose that should be deleted? `captured_interpretation_nonbinding` — official-source capture owed; actionable target → Rollout Step 5 + `D0THES-REV-158`. | 2026-08-04 Knox benchmark synthesis (nonbinding); AWP §2.1; `D0CKPT-DEC-005` |
| **LangChain / LangGraph (durable execution + persistence)** | **Lens B — runtime state-handling pattern, NOT product and NOT architecture authority.** **TAKE:** the caller carries a `thread_id` **pointer** while authoritative run state lives in a durable **checkpointer**; resumption reads the checkpoint instead of reconstructing state from conversation memory — the **comparator mechanism that informed** OMNI's **pointer-only boot surfaces** (`D0CKPT-GRD-007`, `AGENTS.md` Boot-Surface Rule) and a reinforcement of AWP §2.1's Single-source law and OMNI's "conversation is execution context, not canonical memory." Their subgraph-namespace caveat (a parent does not automatically see a subgraph's state) is a real analogue of OMNI's lane-vs-parent shared-surface boundary. **REJECT / NON-TRANSFER:** LangGraph is an **execution runtime** owning no authority, consent, care, clinical or truth model; its graph is control-flow, not an ontology of who may commit what. Do **not** turn the work horizon into a generic workflow graph, and do not let a checkpoint mechanism acquire architectural authority — `FWREG-010` stays OPEN with build deferred. | **source packet `EVSRC-2026-000318`** (LangGraph *Persistence*, accessed 2026-08-08); synthesis in `EVRUN-2026-000124` concept registry `C4`/`C5`/`C6`; consumed by `D0CKPT-GRD-007` + `scripts/check-boot-surfaces.mjs` (named 2026-08-08) |
| **Palantir — branch / proposal / policy / evaluation operating pattern** | **Lens B — the BUILD-PLATFORM operating pattern; deliberately SEPARATE from the Lens-A Foundry/AIP ontology-strategy row (§A), which is a different question.** Protected `main` · isolated resource branches **plus** cross-application/"global" branches carrying one end-to-end change · branch proposals / pull requests · automatic merge + rebase/conflict checks · required reviewers driven by resource policy · platform-enforced permissions + audit logging · evaluation suites with test cases, metrics, run comparison and debug traces · AI agents changing things on branches by default and proposing for review. **OMNI TAKE:** **platform-enforced constraints instead of hoping an agent remembers a file is protected** — the single sharpest statement of OMNI's current gap (our doctrine is ahead of our tooling). **OMNI REJECT:** proprietary platform gravity; treating Palantir's implementation as OMNI authority. `captured_interpretation_nonbinding` — official-source capture owed; actionable target → Rollout Step 5 + `D0THES-REV-158`. | 2026-08-04 Knox benchmark synthesis (nonbinding); distinct from §A Palantir ontology row |
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

## §F — Per-domain BUILD BARS (placed in each contract's §2, 2026-06-01)

The global lens (above) is not enough for a builder — each domain contract carries its OWN build-facing depth bar (the comparator the actual build must match/beat). Placed 2026-06-01 so a future agent building a domain sees its bar in-contract, not just here:

| Contract | Build bar (the comparator the build must hit) |
|---|---|
| **D3 Scheduling** | **Mindbody/Boulevard-class** scheduling depth Day 0 (NOT a Calendly clone) + airline/restaurant/Epic-OpTime composer patterns |
| **D6 Commerce** | **Shopify-class** commerce/catalog/checkout + **Stripe-class** money-movement internals + ActiveCampaign/Klaviyo marketing edge |
| **Messaging** | **better than Hims-async** Day 1 + **Klara/RingCentral-class** comms; quality bar = Slack-with-patient-context + Epic Secure Chat + iMessage |
| **Intake** | **Hims-class** intake then beyond — the conversational AI-mediated triage wedge |
| **Observation** | **Athena-lab-module-class** labs depth + FHIR/HL7/DICOM/LOINC + Quest/LabCorp ingestion |
| **CNS** | **Tesla-autopilot** one-spine (no mini-brains) + **NASA/Houston** authority gates + Salesforce/Zendesk case→tasks |
| **D5 Service Occurrence** | FHIR + Epic/Cerner + Amazon/airline/restaurant 3-layer (planned→actual→evidence); outpatient-EMR-class, not hospital-grade |
| **Clinical Memory** | a **distinct assertion/current-truth/adoption layer — NOT an EMR, NOT a slice of one** (the clean governed memory EMRs never built) + Apple HealthKit contributions-to-a-record |
| **D7 Documents/Media/Consent** | clinical media (Canfield/VECTRA) + consent/e-sign + outpatient-EMR-class document/materialization (chart-as-projection) |
| **Identity** | Mindbody-analogy (RIGHT shape) vs Epic-enterprise-everywhere (WRONG shape) for identity/relationship scoping |
| **OFC (Ordered Fulfillment)** | Amazon fulfillment (order→fulfill→deliver→exceptions) — pending `REV-163` |

Rule: a domain contract references the registry/§3.5 only via its own build bar — domain-relevant only, not the whole list (no noise).

## §E — Lens A product-scope collapse (canonical short form, thesis §1)

OMNI collapses into one governed substrate what today takes a stack of siloed SaaS: **Hims/Ro** (DTC telehealth) + **Epic/Cerner/Athena** (EMR/records/orders) + **Shopify** (commerce/fulfillment) + **Mindbody/Boulevard** (scheduling/memberships) + **RingCentral/Klara/Twilio** (comms) + **ActiveCampaign/Klaviyo** (marketing) + **Oracle** (federation/tenancy) + **[future] Workday/ADP/Gusto + QuickBooks** (business-ops: workforce/payroll/accounting — see Business-Ops gap, `REV-164`). The win is shared identity/consent/authority/evidence, not feature parity with any one.

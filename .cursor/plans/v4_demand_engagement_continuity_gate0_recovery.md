# v4 — Governed Demand / Engagement Continuity — Gate 0A Estate Recovery

Document type: `architecture_reconciliation` (pre-spine recovery workbench; append-only Gate-0A / Gate-0B checkpoint sections)
Authority: `analysis_nonbinding` (`GRD-036` — capture broad, promotion gated). Recovers + reconciles what already exists; mints nothing.
Status: `gate_0a_accepted · gate_0b_not_started · analysis_nonbinding · not_promoted` (Nick + Knox accepted Gate 0A + Gate 0A.1, 2026-07-22; working name remains provisional)
Domain(s): architecture_governance, identity, consent, commerce, cross_cutting
Lifecycle role: recovery + contradiction map for the demand/engagement/public-presence/lead-consent estate, feeding Gate 0B → (later) the v4 spine
Source-of-truth relationship: NOT a source of truth. Points at the governing owners (Identity/D7/RBAC/CNS/D6/Settings/Messaging/projections) and the historical May-2026 marketing design; binds nothing.
Supersedes: none (new artifact 2026-07-19)
Superseded by: none
Manifest action: `add_tier2`
agent_read_rule: `consult_if_routed`
Review gate: `user_knox_required`
Catalog row: landed in `01_master_corpus_catalog.md` (this pass).
Read-graph evaluation: consult-route under the demand/engagement recovery arc; **route-number landing owed at Gate-0A review acceptance** (do not wire a numbered route before the arc's shape/name is accepted — avoids `D0PRESS-GRD-001` graveyarding + premature naming).

> **Working label only.** "Governed Demand / Engagement Continuity" is a placeholder. Gate 0B returns the arc-name + arc-split verdict. It is NOT candidate doctrine, NOT a plane/loop/domain. `GRD-026` (payload ≠ domain) is in force: "marketing" is not a domain.

> **Scope of THIS document = Gate 0A only** (authority/inheritance/identity/permission). Attribution, causation, tracking-egress, operator-economics determination, config/runtime split, agent-mediated counterparties, and the arc-name/split verdict are **Gate 0B — defined at §7, NOT executed here.**

---

## §0 — Method + source posture

Accountable integrator: Opus (single lead). Heavy reading performed by bounded retrieval helpers returning evidence packets; the integrated synthesis + every verdict-of-record is the lead's. Front-loaded the two load-bearing recoveries (authority → identity/permission) per the context-budget discipline; checkpointed here before Gate 0B.

**Source posture:**
- **Read fully (via retrieval helpers, verbatim-cited):** `audits/2026-05-01_marketing_lifecycle_growth_orchestration.md`, `..._marketing_system_pressure_test.md`, `..._dynamic_behavior_pressure_test_post_marketing.md`; `specs/conversion_funnel_modules_v1.md`; `contracts/identity_contract.md`; `seams/SC-ID-PT-001_*`; `contracts/intake_contract.md`; `surfaces/conversion_funnel_surface_contract.md`; `contracts/CNS_orchestration_contract.md` §9.2/§9.3/§13; `contracts/D6_commerce_contract.md` §3/§4/§10/§12; `contracts/settings_catalog_contract.md` §3/§4/§8; `contracts/D7_documents_consent_media_contract.md` §5; `contracts/rbac_authority_contract.md` §7; `contracts/messaging_contract.md` §6/§6.1/§8; `projections/marketing_attribution_projection_contract.md`; `surfaces/marketing_growth_dashboard_surface_contract.md`; `surfaces/campaign_performance_console_surface_contract.md`; `v4_C4_3_care_response_seam_correction_continuity_test.md`; `v4_REV184_decision_state_reconciliation.md` §0; `08_open_review_queue.md` (REV-149/170/175/184).
- **Searched (repo-verified):** code-status grep across `**/*.{ts,tsx,sql}` for marketing/campaign/attribution/utm/gclid/funnel/lead/pixel/consent; contract-wide grep for accounts-payable/procurement/media-spend/COGS/budget/payable (**zero matches in contracts**).
- **NOT inspected (owed — several belong to Gate 0B):** `universal_modules_v1.md` in full; `audits/2026-04-30_privacy_communication_governance.md` (REV-169 send-policy spine); `audits/2026-06-08_website_surfaces_public_content_operator_read.md` (public presence); exhaustive verification of marketing-side code absence (grep was capped).

---

## §1 — Authority + supersession table (doc-status separate from impl-status)

| Concern | Historical owner (May 2026 design) | Current governing owner (vNext) | Doc status | Impl status |
|---|---|---|---|---|
| Marketing profile / durable marketing state | `marketing_profile` **durable marketing-domain truth table** (scoped, "not a junk drawer" per Invariant 16) — `marketing_lifecycle_growth_orchestration.md` Part 4 | **No marketing truth store.** Lead/contact state → Identity; segmentation/cohorts/lead-state = **derived projection** (`marketing_attribution` §3; CNS §9.3) | vNext `draft_for_ratification`; projection `stub` | **Not built** (no `marketing_profile` code found) |
| Attribution | `attribution_event` **canonical append-only table; "system is THE source of truth"** (Invariant 19); first/last-touch snapshots + `attribution_chain[]` + gclid/fbclid/ttclid — Part 16 | **"Attribution truth = D6"** (`attribution_line`, D6 §4/§10); `marketing_attribution` projection **owns nothing**, models attribution as a **deterministic `gclid→conversion` join** | vNext `draft`; projection `stub` | **Not built** (no attribution code found) |
| Campaign orchestration | State-machine campaign engine, **18 campaign types**, `campaign_definition`/`campaign_step`/`CampaignBranch` (18 branch conditions), 11-tier priority, cadence/burnout, code-as-config `repo/campaigns/` — Part 5/6/8 | **CNS §9.3** owns campaign orchestration (state-machine, code-as-config); **home OPEN** (`REV-170`, tied to `REV-149`: CNS sub-area vs rules-templates engine vs own sub-contract) | vNext `draft`; `REV-170` **open** | **Not built** (no campaign-engine code found) |
| Sends / engagement execution | External pipes (Resend/Twilio/Klaviyo…) as "downstream execution tools" | **Messaging** (8-gate + send-policy §6) | vNext `draft` | Partial (`lib/outbound/dispatch`, `lib/notifications/smsTwilio` exist) |
| Offers / promos / discounts | `offer_definition`/`promo_code`/`product_adjacency` (marketing-owned, code-as-config) | **D6 §4** (promo wallet, `discount_program`) + **Settings** (offer/campaign **definitions**) | vNext `draft` | Partial (`lib/commerce/pricing-profiles/*`) |
| Consent record | `1K.11 patient_consents` (already NOT denormalized onto `marketing_profile`) | **D7 §5** owns the consent **record** (typed `patient_consents`: `marketing_sms`/`marketing_email`/`marketing_personalization_with_phi`…) | vNext `draft` | Partial (`lib/consents/*`) |
| Consent gate (enforcement) | SIX-gate send discipline | **RBAC / Boundary-Policy** owns the consent **gate** (require/reject-if-missing/expired) | vNext `draft` (`REV-169` staged) | Partial |
| Lead / contact identity | contact capture into `marketing_profile` | **Identity** (`contact_identity` → `patient` → `patient_relationship`; handle-vs-person) | vNext `draft` | Has code (`lib/intake/*`, checkout) |
| Campaign/offer **definitions** (config) | code-as-config repos | **Settings** (hosts config locations; **engine owns logic**, not Settings) | vNext `draft` | n/a |
| Segmentation / cohorts / metrics / attribution **views** | derived views (Invariant 17) | **P4 projections** (`marketing_attribution`; owns nothing) → **P5 surfaces** (dashboards; own nothing) | `stub`; `REV-175` **open** | Not built |
| Tracking links / UTM / pixels | `tracking_link` table (Invariant 20), opaque `/r/:id`; UTM discipline (Invariant 21); consent-mode pixels | **Gate 0B** (tracking-egress classification; not yet owned) | — | Partial (redirect/tracking not verified) |
| Non-labor operating spend / media spend / AP / procurement / budgets / COGS | not addressed | **NO CURRENT OWNER** (contract-wide grep = zero). D6 = patient-facing commerce; BIZOPS = labor; D6 §12 defers insurance/HSA-FSA but **not** COGS/AP | — | Not built |
| External ad/analytics platforms | **observers / pipes, never source of truth** (Part 1) | **observers, never source** (`marketing_attribution` §3; CNS §9.3) — **AGREEMENT across eras** | vNext `draft` | n/a |

**REV status (from `08`):** `REV-149` (rules/templates engine home) **open** — placed rules-engine→CNS §9.2, template→Messaging §6.2, ownership decision (own-domain vs CNS-sub-area) still open. `REV-170` (campaign-engine home) **open** — decomposition settled, home tied to REV-149. `REV-175` (surface+projection plane ratification) **open** — includes the `marketing_attribution` + two dashboard stubs.

---

## §2 — Old-model → current-model inheritance map (preserve intelligence; do not revive a truth store)

**Intelligence to PRESERVE (dense, and largely still valid as design content — do not lose at the pivot):**
- The **20-state lead progression** (anonymous visitor → email/SMS captured → account → intake started/abandoned/completed → provider-review → approved-not-purchased → purchased → active/paused/canceled subscriber → denied/deferred → safety-hold → churned → dormant → reactivated), each carrying **allowed/disallowed campaigns · channels · privacy ceiling (tier 0–4) · consent requirements · message-intent · suppression/transition conditions** — `marketing_lifecycle_growth_orchestration.md` Part 3.
- The **18 campaign types** + state-machine engine + **`CampaignBranch` (18 typed conditions)** + 11-tier priority/collision + cadence/burnout caps + resend discipline — Parts 5/6/8.
- The **SIX-gate send discipline** (consent · privacy · temporal · suppression · jurisdiction · send-policy) + **UTM discipline** (Invariant 21: no condition/medication in UTM/campaign names) + **opaque tracking-link** discipline (Invariant 20) — Part 14/22.
- The **external-platforms-are-observers-never-source** principle — **this SURVIVES; it matches vNext exactly** and should be carried as-is.
- Marketing's own **derived-not-stored** discipline (Invariant 17: lifecycle flags derived) — this ALREADY anticipated the projection model.

**The load-bearing INHERITANCE CONFLICTS (record; do not resolve here):**
- **`marketing_profile` as a durable truth store** (a persistent marketing-domain table, even if scoped) **conflicts** with vNext's **no-marketing-truth-store / distributed-ownership + projection-owns-nothing** posture and with `GRD-026`. The May design's *content* (what to know about a lead) is valuable; its *storage model* (a marketing-owned durable table) is superseded. → Recover the intelligence into the distributed owners + a projection; do **not** revive the table.
- **`attribution_event` as "the system's canonical source of truth for attribution"** (Invariant 19) is only **partially** carried: vNext puts attribution *facts* in D6 (`attribution_line`) and makes the `marketing_attribution` projection own nothing — but the current projection **collapses attribution into a deterministic `gclid→conversion` join**, which is *thinner* than the May design's multi-touch `attribution_chain[]`. So vNext is simultaneously **more correct** (no marketing truth store) and **less capable** (no multi-touch, no causal/incrementality) than May. → Gate 0B owns the attribution/causation reconciliation; **neither** the May canonical store **nor** the current thin join is the answer.

---

## §3 — Identity / relationship progression (as the estate actually models it)

Confirmed chain (Identity contract §4/§5; SC-ID-PT-001):
```
contact_identity            pre-account / unknown inbound (Twilio line, lead form, fax); a handle ≠ a person;
  (pre-account layer)       ambiguous/shared/typo handles are FIRST-CLASS
        │  identity-match confidence  (SC-ID-PT-001 gate a)
        ▼
patient (consumer identity)  reusable identity-claim; ONE canonical row per person per namespace;
                             L0–L4 assurance ladder + match-confidence
        │
        ▼
patient_relationship         SCOPED operational state — owns consents, intake, memberships,
                             appointments, care_programs, thread context, chart context, lifecycle
        │  identity_resolution  (match-existing / create-new / ambiguous; merge/link/dedupe — never auto-merge)
        ▼
[growth-counterparty / partner]  NOT MODELED yet (no growth_counterparty object; cross-org
                                 care_relationship + shared_context_grant DEFERRED to identity ladder v2/v3)
```
- **Terminology note:** the strings "anonymous"/"pseudonymous" do **not** appear in these files; the estate's equivalents are `contact_identity` (pre-account) + intake **Stage 0.5 `pre_account_safe`** (no `patients` row, no PHI). The arc's "anonymous → pseudonymous → contact" language must map onto these, not invent parallel terms.
- **Funnel (conversion_funnel_modules_v1):** post-clinical Modules **22→23→24→25→3→26**; **hard-commit at Module 25** (legal name, address, jurisdiction check, phone, promotional-SMS opt-in); **transactional vs promotional SMS explicitly separated** (TCPA; staff may not check the opt-in for the patient); **online vs staff-witnessed capture** distinguished (`captured_by`). Membership/auto-renew/Rx-acceptance consents at Module 26; identity verification (L3) Module 3.

---

## §4 — Permission-composition map (the load-bearing recovery)

**The estate ALREADY carries the spine the trifecta converged on** — this is recovery, not invention:
- **Two-gate law** (Identity §7 inv 2; SC-ID-PT-001 `authority_gate`, verbatim): *"identity-match confidence gates RESOLUTION/LINKING; consent/authorization — separately — gates operational-state use/sharing/messaging/cross-relationship visibility. A match alone NEVER authorizes operational-state sharing."*
- **Reusable-identity vs scoped-relationship** (Identity §5): *"Operational state NEVER auto-shares across relationships just because identity claims match — sharing is explicit, permissioned, consent-aware, audited."*

→ **Confirms the arc's rule:** on identity resolution, **do NOT union or copy permissions**; preserve each grant in its **source context**; compute **effective permission per proposed action** across (purpose · recipient · channel · data-class · relationship · duration · effective-time · revocation-state · identity-confidence · governing-policy). There is **no scalar "stronger consent wins."**

**GAPS the arc must address (not yet in the contracts):**
- **Resolution-type taxonomy** — estate names match-existing / create-new / ambiguous + merge/link/dedupe + ambiguous/shared/typo handles, but does **NOT** enumerate `confidence-update / disputed / corrected-linkage / split-unlink` as first-class typed resolution kinds. The debate's finer taxonomy is a **gap**.
- **Top-of-funnel consent classes** — captured consents found: base telehealth/terms/privacy (Stage 0.5), promotional SMS/TCPA (Module 25), membership/auto-renew/Rx-acceptance (Module 26), identity verification (Module 3). **NOT modeled as funnel-stage captures:** cookie/analytics consent, an email-marketing opt-in atom, a distinct treatment consent, media/testimonial release, AI-use consent, cross-operator visibility grant. This is exactly the **pre-identity + growth-counterparty consent trail** the arc needs — currently absent.

---

## §5 — Correction-continuity applicability (reuse C4.3; do not reinvent)

Reusable laws (C4.3 + REV-184), and **when they apply to identity/consent**:
- **Candidate Law 10.1:** correction-impact is a *governed, versioned assessment over distributed lineage + explicit uncertainty; it is **not** a correction authority*; it owns no truth; **owning domains commit their own corrections; no central engine.** → A consent/linkage correction is assessed, not centrally executed.
- **S20-A vs S20-B / effective-time vs recorded-time:** S20-A (prospective revocation) **preserves prior valid actions**; future dependent work halts/reauthorizes. S20-B (prior-invalidity-discovered-later) evaluates the authority basis by **effective time, not recorded time**, and triggers **owner-specific reassessment** — it does **not** auto-validate. → This is precisely the "an attribution/consent basis can change later without rewriting a valid prior decision" discipline (the `NICK20`-payout case Knox raised).
- **Scope discipline (critical):** C4.3 applies **only** where something is *challenged/corrected/superseded/withdrawn/invalidated* (Law 10.1 "When…") — its own control fixture **S01 (zero-use typo) = field correction, no propagation.** → **Confirms: NOT every identity resolution is a correction.** Use C4.3 only for corrected/invalidated linkages/grants; a normal new-link or confidence-update is not a correction.
- **External disclosure (transfers directly to pixels/egress + revocation-after-disclosure):** outside OMNI's boundary, preserve payload/version/recipient/purpose/authority/transport-evidence/ack + anything returned; **downstream use remains UNKNOWN until evidenced — never "no impact" by silence.**
- **REV-184:** the Governed Resolution Lifecycle; **outcome-reads-original-context, never rewrites**; frozen decision basis — the discipline behind an "adopted commercial basis."

---

## §6 — Contradiction ledger

| # | Kind | Contradiction (recorded, NOT resolved at Gate 0A) | Route |
|---|---|---|---|
| C1 | truth-ownership | `marketing_profile` durable truth store (May) vs no-marketing-truth-store + distributed ownership + projection-owns-nothing (vNext / `GRD-026`) | Gate 0B / spine — recover intelligence, don't revive table |
| C2 | ownership + thinness | `attribution_event` "system is THE source of truth" canonical multi-touch store (May) vs "attribution truth = D6 `attribution_line`" + `marketing_attribution` deterministic `gclid→conversion` join owning nothing (vNext). **Neither models causal/incrementality — absent from every contract/projection.** | Gate 0B (attribution vs causation) |
| C3 | ownership open | Campaign-engine home unresolved (`REV-170` open, tied to `REV-149`): CNS §9.3 sub-area vs rules-templates-policy engine vs own sub-contract | `REV-149`/`REV-170` decision |
| C4 | gap | Typed identity-resolution taxonomy (`confidence-update`/`disputed`/`corrected-linkage`/`split-unlink`) not in contracts — only match/create/ambiguous/merge | Gate 0B / Identity ladder |
| C5 | gap | Top-of-funnel + growth-counterparty consent classes (cookie/analytics, email-marketing opt-in atom, media/testimonial release, distinct treatment consent, AI-use, cross-operator visibility) not modeled as funnel-stage captures | Gate 0B (the pre-identity consent trail) |
| C6 | missing owner | **No canonical owner for non-labor operating spend / media spend / AP / procurement / budgets / COGS** (contract grep = zero; BIZOPS = labor; D6 = patient-facing commerce; D6 §12 defers insurance/HSA-FSA, not COGS/AP). Corroborated by EVRUN-000012 (COGS→margin no owner; Gemini-A named AP). | **Gate 0B operator-economics scope determination** (D6-ext / BIZOPS-ext / new family / external-ledger rail) |
| C7 | naming | "marketing" as label vs `GRD-026` payload≠domain; "Governed Demand/Engagement Continuity" is a working label only; "demand-side membrane" + "agent-mediated demand discovery" are hypotheses, not frame | Gate 0B arc-name/split verdict |
| C8 | maturity (doc vs impl) | Intake/funnel (Modules 22-26, 3)/consent/checkout/outbound **have code** (`lib/intake/*`, `lib/consents/*`, `lib/commerce/*`, `lib/payments/*`, `lib/outbound/*`); `marketing_profile`/`attribution_event`/campaign-engine = **design-only, no code found** (estate-wide "DOC/CON present, IMPL absent" pattern, marketing side) | note for spine + build |

**Missing source coverage (owed):** full `universal_modules_v1.md`; `2026-04-30_privacy_communication_governance.md` (REV-169 send-policy spine — bears on §4/§5); `2026-06-08_website_surfaces_public_content_operator_read.md` (public presence — Gate 0B); exhaustive marketing-code-absence verification.

---

## §7 — Stop report + Gate 0B scope (defined, NOT executed)

**Gate 0A stop posture:** nothing minted; no domain declared; no object/primitive/schema created; no contract/surface/projection/AGENTS/read-graph-#15/Care artifact edited; **no arc name decided**; no operator-economics owner decided; no causal-analysis owner decided; no superiority verdict; no EVRUN opened; Reactor untouched. Membrane + agent-mediated-demand-discovery held as **hypotheses**. "Care" is **not** installed as the universal terminal (Gate 0B models a governed **handoff** into independently-owned Care; external engagement has plural legitimate terminals).

**Row-first status:** artifact created with full passport (this file); **catalog row landed** in `01_master_corpus_catalog.md`; **read-graph route evaluated → landing owed at Gate-0A review acceptance** (deliberately not wired pre-acceptance).

**Gate 0B scope (after Gate 0A survives Nick + Knox review):** (1) epistemic chain — observed fact / external claim / **attribution (3A) + causal-incrementality (3B) as siblings** / adopted commercial basis / committed consequence / later learning; test causal-assessment placement across the **3 alternatives** (shared method-family / shared eval capability with distinct records / fully domain-owned sharing standards) — **do not assume a universal causal engine**; (2) tracking-egress classification (computed sensitivity, **not** categorical-PHI-by-URL); (3) operator-economics scope determination (C6; scope verdict, **not** a domain name); (4) config-release vs CNS-runtime split (locked for analysis); (5) agent-mediated counterparties **and** agent-mediated demand discovery (bounded stress axis; dedup vs P35/Federation/Agent-Runtime); (6) arc-name + arc-split verdict; (7) one Task-D composite fixture (no parallel moat verdict).

---

# Gate 0A.1 — Verified amendment (2026-07-19)

**Status:** `gate_0a1_accepted · operative_checkpoint · not_promoted` (Nick + Knox accepted 2026-07-22; Gate 0A above preserved as derivation; Gate 0B not started). No-write verification pass authorized by Knox; corrections integrated after direct code verification by the lead. **This amendment SUPERSEDES the affected Gate-0A findings named below; Gate 0A above is preserved UNCHANGED as derivation.** Still local/uncommitted; no branch/commit/catalog/route/Gate-0B action.

**Method note:** load-bearing implementation claims below were verified by the lead against live code (`lib/patients/resolvePatient.ts`, `app/api/forms/[formKey]/route.ts`, `lib/consents/types.ts`, `lib/consents/catalog.ts`, `supabase/migrations/20260504120000_intake_foundation_v1.sql`), not inferred from folder presence. Source-posture category "read fully via helpers" is retired.

## §A.0 — Embedded reference tables (self-contained; no chat dependency)

### Table A — Corrected source posture
| Tier | Sources |
|---|---|
| Read directly by lead | boot/checkpoint spine, collaboration model, guardrail digest, read-graph Tier-0, thesis-lineage synthesis; **Gate-0A.1 code verification:** `lib/patients/resolvePatient.ts`, `app/api/forms/[formKey]/route.ts`, `lib/consents/types.ts`, `lib/consents/catalog.ts`, `supabase/migrations/20260504120000_intake_foundation_v1.sql` |
| Helper read + lead-verified | May marketing corpus (3 audits); universal_modules Module 2; conversion_funnel Modules 25/26; privacy/communication audit; Identity/SC-ID-PT-001/Intake/D7 §5/RBAC §7/Messaging §6/Federation §5; EVRUN-000004 §0.5; C3.5 P22; broader code inventory |
| Consulted (relevant sections) | DL-19/DL-22 consent invariants; settings_catalog |
| Searched / located only | contract-wide AP/COGS/procurement/budget grep; marketing-side code grep |
| Not inspected | website/public-presence operator read; full DL-22; legacy map beyond §1I; off-repo controlling-plan; **spec→canonical SMS write mapping (unverified)** |

### Table B — Twenty-state model → orthogonal decomposition (projection seed, NOT one lifecycle)
| Historical state group | Owning fact(s) | State itself | Coexists with |
|---|---|---|---|
| Anonymous / captured (visitor · email/SMS captured) | session/telemetry (owner open) + contact handle + typed permission (D7) | projection (the permission is the fact) | intake-not-started, existing relationship |
| Intake / review (started · abandoned · completed · provider-review) | `intake_session` (Intake); CNS/owning workflow | domain fact | existing patient relationship, active subscription, marketing opt-out |
| Clinical-gate (approved-not-purchased · denied · deferred · safety-hold) | clinical decision (Care/CNS) + D6 purchase-absence | fact (safety/denial); derived composite (approved-not-purchased) | other care episodes, active subscription |
| Commercial (purchased · active/paused/canceled subscriber) | D6 order + subscription | fact (D6) | safety hold, second intake, overdue obligation |
| Engagement (churned · dormant · reactivated) | relationship + commercial facts | derived | independent care obligations |
Coexistence proves these are **orthogonal axes**, not positions in one linear enum — preserve as segmentation/projection seed only.

### Table C — `marketing_profile` field-family disposition
| Field family | Kind | Disposition |
|---|---|---|
| Raw first-party touch event | immutable observed event | owning event source (owner open — anonymous layer §A.3) |
| First/last-touch snapshot | projection | over observed events |
| Open/click counts | derived metric | projection |
| External-platform profile ID | rail/integration mapping | not person truth |
| `pathway_interest_signals` | **sensitive health-interest inference** | classify per §A.7; NOT patient truth / consent / clinical assertion / unrestricted field |
| lifecycle_stage | projection | derived |
| suppression_flags | projection | derived from consent + safety + comms policy |
| next_best_action | CNS candidate | never profile truth |

### Table D — Evidence-grade build matrix
| Semantic | Status | Proof / gap |
|---|---|---|
| patient identity | implemented_partial | flat `patients` table (migration `20260418120000`) + active email-only `resolvePatientFromAnswers` exist, but the resolver is **nonconformant** with handle≠person, confidence/ambiguity handling, scoped relationships, and separate permission gates — see C12 |
| `contact_identity` | not_located_in_bounded_search | not located in bounded search |
| `patient_relationship` | not_located_in_bounded_search | not located in bounded search; `patient_contacts` ≠ relationship |
| SC-ID-PT-001 resolution (confidence/ambiguity/staff/merge) | documented_not_verified | only email-dedupe; no confidence/staff-queue/merge located |
| two-gate match≠permission enforcement | not_located_in_bounded_search | doctrine only; no runtime guard located |
| consent records | implemented_partial | `patient_consents` table + 13-enum + **nullable `patient_id` + `captured_session_id`** (migration 216–234) |
| consent enforcement (gate) | implemented_partial | `lib/disclosure-policy` at outbound send only; no general consent-gate module |
| Intake runtime (GLP-1) | implemented_partial | `lib/intake/*` bank/modules/orchestrator/clinical_assertion + API + tests |
| outbound policy (8-gate) | implemented_partial | disclosure-policy subset; Twilio stub; quiet-hours/rate-limit deferred |
| commerce | implemented_partial | Stripe + `treatment_orders` + subscriptions; `commerce_orders` unbuilt |
| marketing / campaign / attribution runtime | not_located_in_bounded_search | not located in bounded search; marketing consent capture only |

## §A.1 — Statements SUPERSEDED from Gate 0A
- §4 + C5 "consent classes not modeled as funnel-stage captures" → **superseded**: core clinical/commercial consent + the triple-axis send-policy spine ARE modeled; a **session-bound pre-identity consent carrier already exists (partially built)**. See §A.2, §A.4.
- §3 + C10 "anonymous ≈ contact_identity / pre_account_safe; owner OPEN" → **superseded**: anonymous ≠ contact_identity stands, but Intake already carries a **partial** pre-account/session carrier. See §A.3.
- §1/§6/C8 "lead/contact identity has code" → **superseded**: the identity substrate is doctrine-only AND the live resolver contains an **unsafe collapse** (new **C12**). See §A.5.
- C6 "no canonical owner (grep=zero)" → **softened** to "no canonical owner located in the inspected governing contract set; partial financial semantics + nonbinding candidates exist elsewhere."
- Sharpening §2 "pathway_interest_signals needs a first-class custody object" → **superseded**: classify the semantic + name the reusable law; do NOT pre-bake an object. See §A.6.

## §A.2 — Pre-identity consent carrier EXISTS (corrects "absent")
`patient_consents.patient_id` is **nullable** and the table carries `captured_session_id uuid references intake_sessions(id)` (migration lines 216–234); TS `PatientConsent.patient_id?` + `captured_session_id?` optional (`types.ts` 47–54). A consent row can be captured session-bound **before** a `patient` exists. **Correct finding:** a session-bound pre-identity consent-record carrier is **partially implemented**; what is MISSING is the governed uplift/linkage lifecycle. Distinguish: (1) capture carrier · (2) subject association · (3) identity uplift · (4) relationship scope · (5) effective-permission computation · (6) correction/split impact · (7) revocation propagation. (2)–(7) are the real physics gap.

## §A.3 — Anonymous layer is PARTIAL, not wholly ownerless (revised C10)
`intake_sessions` already carries `pre_account_session_id`, nullable `patient_id`, `acquisition_source jsonb`, `cohort_assignments jsonb`, and identity-uplift states (`refreshes_identity_from_session_id`, `prior_closed_session_id`) — migration lines 155–175. So Intake has a **partial pre-account/session carrier**. It does NOT solve general public web telemetry, pixels, cross-device identity, retention, or external egress. Anonymous interaction remains **distinct from `contact_identity`**. Gate 0B must decide whether Intake-acquisition-context / public-surface-telemetry / external-analytics-rail / attribution-evidence / identity-claims / sensitive-inferred-interest belong to **different** owners — do not assume one "anonymous layer."

## §A.4 — Revised consent / rights matrix (supersedes Gate-0A §4 + C5)
| Concern | Correct status |
|---|---|
| Telehealth / terms / privacy | Carrier + schema + intake design + emission machinery exist; **end-to-end runtime fixture not yet cited** |
| SMS marketing | Concept modeled; **three-name drift (see C13)** → canonical write path **unresolved** |
| Email marketing | `marketing_email` typed + catalogued; **dedicated capture path not verified** |
| Marketing personalization w/ health context | Type exists; **no pre-account/cross-relationship composition proven** |
| Communication-specific permissions | Canonical in D7 §5; **four absent from code enum (C13)** |
| Cookie / analytics processing | **No governed processing-authority model located**; acquisition/session carriers partially exist; Gate 0B must decide consent vs opt-out vs notice vs contract vs statutory vs prohibition per use |
| Media / testimonial | D7 `consent_artifact` machinery exists; **operative publicity/IP rights + consideration lifecycle unresolved** |
| AI-function consent (`ai_consent_scope`) | Previously-surfaced candidate/homeless — **not a newly discovered absence** |
| Cross-operator visibility | Target model exists (Federation); **same-namespace/multi-relationship enforcement depends on the currently-unverified `patient_relationship` substrate; true cross-organization grants remain deferred** (two distinct maturities — not one "ladder v0 deferral") |
| Treatment/procedure consent | Generic D7/Settings/RBAC composition + `pre_performance_gate` exists; **pathway-specific coverage still requires recovery** |

## §A.5 — NEW C12: runtime email-match identity collapse (verified; do NOT soften)
`resolvePatientFromAnswers` (`lib/patients/resolvePatient.ts`): requires email (19–21); finds an existing patient by **normalized-email equality alone** (`.eq('email', email).maybeSingle()`, 43–47); on match, **`.update(row)` overwrites `first_name`/`last_name`/`phone`/`dob`/`address_*` from the new intake** (52–70). No multi-signal assurance, no match-confidence, no ambiguity/shared-handle/typo handling, no candidate/staff review, no scoped-relationship creation, no consent gate. **Directly conflicts** with Identity doctrine (handle ≠ person; a phone/email may be shared/reused/mistyped/fraud-substituted) and bypasses the two-gate (match-confidence vs permission) law.
- architecture finding: **verified** · implementation risk: **verified** · fix: **out of scope for Gate 0** · route: Platform/Build risk register + C5 reconciliation.
- **Active-path + severity (verified; epistemically bounded):** the resolver is not isolated code. `app/api/forms/[formKey]/route.ts` POST **imports and calls** `resolvePatientFromAnswers` via an admin (RLS-bypassing) client (lines 6, 42–43), writes the `form_submission` under the returned `patientId`, and **mints a patient-portal bootstrap token** for that id (`signPatientPortalBootstrapToken`, lines 7, 77). So this is an **active executable request path capable of wrong-patient mutation and cross-person data/portal association.** **Characterization (do NOT overclaim):** *production-severity wrong-patient and privacy risk in an active executable request path; deployment exposure and actual incident occurrence are NOT verified.* Treat as a **release-blocking identity-safety defect for any environment using this route**; route to the **Platform/Build risk register + patient-safety/privacy review**; invoke the **Accountability incident path ONLY if exposure or an actual collision is evidenced.** Defect discovery ≠ proven incident. No code change in Gate 0 (routing + severity only).

## §A.6 — NEW C13: SMS-marketing cross-layer vocabulary/mapping divergence + missing D7 code types (verified)
**Distinguish the namespaces (the prior "three names for one concept" collapsed them):**
- `consent.sms_promotional_v1_signed` is a **spec-level emitted atom/event identifier** (conversion-funnel spec, Module 25).
- `sms_marketing_opt_in` and `marketing_sms` are **consent-row `type` VALUES** (schema enum + `types.ts` lines 14, 19; `catalog.ts:51–55` marks `sms_marketing_opt_in` **legacy, superseded by `marketing_sms`**).

**Finding — first component (SMS-marketing cross-layer vocabulary/mapping divergence):** the spec emission identifier exists · a legacy row type exists · a canonical row type exists · **the spec-to-canonical write translation was NOT located** · dedicated capture surface + gate consumption **unverified.** Do NOT say "marketing SMS is implemented" until the emission→canonical-row mapping is demonstrated.

**Finding — second component (unchanged):** the four D7 §5 communication permissions (`pathway_named_outside_secure_comm`, `clinical_detail_in_email_comm`, `phone_call_clinical_outreach_consent`, `mail_paper_clinical_outreach_consent`) are **absent** from the 13-value code/DB enum (migration 219–231).

C5-reconciliation crosswalk owed (not now): spec atom · canonical D7 type · DB enum · catalog type · actual write mapping · legacy alias/supersession · capture surface · gate consumer.

## §A.7 — pathway_interest_signals: classify the semantic, don't objectify (reframe)
Do NOT declare a "first-class custody object" (pre-bakes an ontology). Classify the semantic on: observed vs inferred · raw event vs interpretation · source + confidence · identity-state-at-creation · purpose · retention · visibility · permitted linkage · external disclosure · clinical-adoption eligibility · correction/deletion posture. **Reusable law (candidate):** *a health-interest inference is a versioned, source-attributed, purpose-bound claim — NOT patient truth, NOT consent, NOT a clinical assertion, and NOT an unrestricted marketing-profile field.* Owner + carrier = Gate 0B questions. (Remains the arc's highest-sensitivity semantic: a health-interest inference on a pre-account person, later linkable, is exactly what leaks outbound via pixels.)

## §A.8 — growth-counterparty: partial/uncomposed, not zero (revised)
No dedicated canonical carrier or lifecycle for an incentive-bearing growth counterparty was located — that finding is fair. But existing domains cover substantial pieces: person/organization identity + actor roles · Federation participation · D7 agreements/artifacts · D6 commissions/payments/promotions/attribution-inputs · OFC obligations/deliverables · Messaging · RBAC/capability · Accountability. **Correct finding:** the patient-plus-influencer case is **uncomposed and unproven, not unmodelable**; Gate 0B must test composition before minting a relationship family.

## §A.9 — Operator Economics wording (revised C6)
Retain the five concerns (procure-to-pay · expense/COGS attribution · cash/settlement evidence · accounting/period-close · budgeting/forecasting). Replace "genuinely unowned" with: **"No canonical owner located in the inspected governing contract set; partial financial semantics (D6 commissions/settlement/adjustments/tax/accounting-labels; BIZOPS labor cost) and nonbinding candidates (AP → `REV-204`; late-builder Row A) exist elsewhere; an external ledger may remain authoritative for parts."** Gap strong; decomposition + authority unresolved.

## §A.10 — Revised contradiction ledger C1–C13 (net)
- **C1** marketing_profile → field-level disposition (**embedded §A.0 Table C**); reject universal store; no formal-supersession claim without ledger.
- **C2** attribution → sibling attribution/causal; causal = "no canonical owner located in inspected governing set."
- **C3** campaign engine → **CNS ownership placed (§9.3); contract/sub-area packaging open (REV-170↔REV-149).** 18 types/11-tier = config + test seeds pending pressure.
- **C4** resolution taxonomy → mostly representation; **corrected-linkage + split/unlink LOAD-BEARING** (C4.3 correction-impact + permission-recompute triggers). No enum minted.
- **C5** consent → replaced by §A.4 status matrix.
- **C6** operator-economics → 5-concern gap CLUSTER; §A.9 wording.
- **C7** naming → working label only.
- **C8** build maturity → **embedded §A.0 Table D** + §A.5; identity substrate doctrine-only; two-gate law not enforced.
- **C9** relationship-scope ↔ D7 consent-record ↔ RBAC gate ↔ action-owner seam — explicit before pre-identity grants.
- **C10** anonymous interaction ≠ identity claim; **partial carriers exist in Intake/session state (§A.3)**; general public-telemetry ownership unresolved.
- **C11** DTC-only vs multi-principal/multi-operator → **inherit EVRUN-000004 §0.5** (person+organization, roles, subject_ref, requester/subject/beneficiary/payer/referrer/sponsor/operator, incentive-lineage, parallel authority planes).
- **C12 (NEW)** runtime email-match identity collapse (§A.5) — **production-severity wrong-patient/privacy risk in an active executable request path (forms POST); deployment exposure + actual incident UNVERIFIED; release-blocking for any environment using the route; route Platform/Build risk register + patient-safety/privacy review; Accountability incident path conditional on evidenced exposure; no Gate-0 code fix.**
- **C13 (NEW)** SMS-marketing cross-layer vocabulary/mapping divergence (§A.6) — spec emission id (`sms_promotional_v1_signed`) vs legacy (`sms_marketing_opt_in`) vs canonical (`marketing_sms`) row types; **spec→canonical write mapping not located**; + four D7 comm-consent types absent from the code/DB enum.

## §A.11 — Net verified state (lead synthesis, flagged for Knox)
The demand-continuity foundation resolves to a **triad**: **(1) carrier exists** (session-bound pre-identity `patient_consents` + `intake_sessions` scaffolding, partially built) · **(2) uplift lifecycle missing** (session-grant → person → relationship without copy/union/broaden/orphan/silent-reinterpret) · **(3) current resolver implementation is unsafe** (C12 email-overwrite). **Corrected sequencing (do not over-block):** identity-resolution safety is upstream of **implementing, activating, or operationally relying on** grant uplift — it is **NOT** a prerequisite for continuing **Gate 0B architecture analysis.** Gate 0B may design the target seam and expose the required resolver replacement; but **no implementation may attach pre-identity grants to resolved people/relationships through the current email-only resolver**, and production may not activate uplift until the resolver is replaced or bypassed. (Route like a G4 finding; not built pre-spine.)

**Gate 0A.1 stop:** nothing minted; no contract/code/schema/surface/doctrine edit; identity/consent bugs NOT fixed (routed only); no AGENTS/checkpoint change; no branch/commit/catalog/route; no Gate 0B; no naming/owner verdict. Awaiting Knox review of this amendment before any repository landing.

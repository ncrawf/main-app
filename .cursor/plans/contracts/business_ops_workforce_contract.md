# BIZOPS — Business Ops / Workforce — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain family)
Authority: `canonical` for the business-operations / workforce substrate — workforce records, provider operational-state, time-clock, shift scheduling, payroll/compensation, commission/incentive payout, labor cost
Status: `draft_for_ratification` (created 2026-06-01, Foundation vNext; domain pass #14 — native draft; **`REV-164` PROPOSED-RESOLVED → drafted-as-named-domain-family; closure pending trifecta signoff — NOT "done"**; Nick + Knox review gate). Tightened 2026-06-01 per Knox (commission dual-guard). **Corrected 2026-06-02 per Nick: BIZOPS is a DAY-1 OPERATIONAL domain (not later-phase) — payroll runs at deploy via an embedded-payroll RAIL (Check/Gusto-Embedded), mirroring D6's external-money-rail doctrine.**
Domain(s): `business_ops`, `workforce`, `payroll`, `compensation`
Lifecycle role: the BUSINESS-OPERATIONS substrate — OMNI is not only a care OS; it is also the workforce/payroll/compensation/productivity layer (the Workday/ADP/Gusto + QuickBooks-labor half). It **consumes** D3/D5/D6/RBAC events and **owns workforce/labor truth**, but **never corrupts care or commerce truth** (§3).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §2 native-draft method (FAC-first, one integrated pass). **No DL-draft spine** — built from thesis §1 (OMNI as a business-operations OS) + `OMNI_System_Map_vNext.md` BIZOPS row + `REV-164` (named-not-scoped) + the staged legacy §1G.7 provider operational-state/routing (`SC-WF-D3-001`, from the D3 backfill) + the D6-commission boundary. Method per `00_architecture_artifact_index.md`.
Supersedes: none (new domain family; legacy §1G.7 provider-state framing → the workforce operational-state here)
Superseded by: none · Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** single build-facing home for the workforce/business-ops layer. thesis §1 business-ops note + System Map BIZOPS row + §1G.7 provider-state are **evidence/provenance.** Build from THIS contract.

---

## §1.5 Freshest-Authority Check (embedded — native draft) + `REV-164` resolution

| Layer | Source | Disposition |
|---|---|---|
| **Controlling (thesis + map)** | thesis §1 (OMNI = governed care **+ business operating substrate**; collapses Workday/ADP/Gusto + QuickBooks workforce-layer) + System Map BIZOPS row | clean-into-contract as the domain-family model |
| **Staged in (D3 backfill)** | legacy §1G.7 provider operational-state (offline/signed_in/open_for_queue/paused/at_capacity/unavailable) + eligibility + derived routing (`SC-WF-D3-001`) | **owns the live operational-STATE** (D3 consumes; Settings owns the routing-POLICY config) |
| **Boundary input** | D6 §4 `commission` (per pricing_option/staff) | D6 computes the commission **AMOUNT** on a sale; BIZOPS owns the workforce **PAYOUT** + labor-cost (§3) |
| **Thesis (lens)** | §1 business-ops; analytics = projection over domain truth (not a truth source); admin/provider access = RBAC/Boundary-Policy (authority, not a dashboard) | governs; consonant |

**`REV-164` PROPOSED-RESOLVED (this draft = drafted-as-named-domain-family; closure pending trifecta signoff — NOT "done"): ONE named domain family** (`business_ops`/workforce/payroll/compensation), with internal sub-areas (§4) — NOT several disjoint domains, NOT folded into D5/D6/RBAC. Rationale: workforce/labor truth is a distinct ownership surface that consumes care/commerce events but must NOT corrupt them; one family keeps the boundary clean.

**Phasing (binding — corrected 2026-06-02 per Nick; supersedes the prior Knox "later-phase" framing): BIZOPS is a DAY-1 OPERATIONAL domain.** A deployed medspa with real staff cannot run without it on launch day — staff must clock in (wage-&-hour law), payroll must run (you must legally pay people), injectors/providers are commission-comped (core medspa economics), and the owner needs labor cost in the P&L. Deferring this means deploying a business that can't operate. So BIZOPS workforce/time-clock/commission-payout/labor-cost is **Day-1, not later.**

**The real distinction is BUILD vs INTEGRATE — not now-vs-later (this is the D6 doctrine, applied to labor):** OMNI **owns the workforce/labor TRUTH** at deploy (`workforce_member`, `time_clock`, `shift`, worked-hours, commission-payout *computation*, `labor_cost`, `pay_rule`/`pay_period`). The **payroll EXECUTION rail** — multi-state tax withholding/filing, paycheck-cutting, direct deposit, W2/1099 issuance, garnishments — runs over an **external embedded-payroll rail**, exactly as **D6 owns commerce truth but delegates money-MOVEMENT to Stripe/external rails**. OMNI is not a bank (D6) and not a PEO/tax-filing engine (BIZOPS) — it owns the truth and orchestrates the rail. This gets payroll **working at deploy** without OMNI building a compliant multi-state tax engine from scratch, and it satisfies thesis §1 (OMNI *presents* as the ADP/Gusto/QuickBooks layer — embedded-rail today, deeper absorption on the long arc). **What is genuinely later/optional:** full benefits administration (health-plan enrollment), advanced compensation-modeling engines, and rail *absorption* (replacing the embedded rail with OMNI-native tax-filing).

**The architectural commitment is the VENDOR-AGNOSTIC rail ABSTRACTION, NOT a vendor (binding — Knox/Nick 2026-06-02; mirrors D6's vendor-agnostic money-rail).** The build targets an embedded-payroll *abstraction* — **`payroll_rail_account` · `payroll_rail_sync` · `payroll_run` → rail handoff · reconciliation back into BIZOPS · rail-is-executor-not-source-of-labor-truth** — exactly as D6 abstracts the money rail rather than hardcoding Stripe. **Vendor selection is `REV-172`, genuinely OPEN: Check is the *lead candidate* (structurally built for embedded payroll in vertical SaaS), NOT the *chosen* rail — alternatives Gusto Embedded / ADP-class — decision pending vendor diligence (pricing, coverage, contractor/W2 support, implementation lift, medspa/state fit).** A future agent must NOT treat Check as decided because it appears in a planning thread. Build to the abstraction; pick the vendor later.

## §1 Purpose

BIZOPS owns **the workforce/business-operations layer**: workforce/employment records, provider live operational-state, time-clock + worked hours, workforce/shift scheduling (the labor schedule, distinct from the patient appointment schedule), payroll + compensation rules, commission/incentive **payout**, and labor cost. It answers *who is working, when, at what state, for what pay/commission, at what labor cost* — it **consumes** D3/D5/D6/RBAC events and **never corrupts** care or commerce truth.

## §2 Governing thesis concepts

§1: **OMNI is also a business-operations OS** — it collapses the Workday/ADP/Gusto (workforce/payroll) + QuickBooks (labor-cost accounting) layer into the substrate, alongside the care layer. **Analytics/metrics = projection** over domain truth (NEVER a truth source — provider productivity is computed from D5 occurrences + D6 sales, not stored as primary truth). **Admin/provider access = RBAC/Boundary-Policy** (authority, not a dashboard). `T0-13`: workforce ownership is its own dimension — it does not confer care/commerce/clinical authority.

**Build depth bar (Lens A; registry + thesis §1):** the *actual build* is **Workday/ADP/Gusto-class workforce + payroll/compensation depth** + **QuickBooks-class labor-cost accounting** + a **provider-productivity layer** — but **care-truth-isolated**: it reads care/commerce events, it never writes care/commerce truth. This is the build-facing comparator for BIZOPS.

## §3 Ownership boundary

**Owns (the workforce/labor TRUTH — Day-1):** `workforce_member`/`employment` (the employment relationship + workforce record — distinct from Identity's person + RBAC's capability); **provider live operational-state** (`offline`/`signed_in`/`open_for_queue`/`paused`/`at_capacity`/`unavailable`; the §1G.7 live "is this provider takeable right now" — D3 consumes at booking); `shift` + workforce/labor **scheduling** (the staff labor schedule); `time_clock` (clock-in/out, worked hours, breaks, overtime); `pay_rule`/`pay_period`/`payroll_run` (the pay *computation* + period truth); **commission/incentive PAYOUT computation** + `labor_cost` (the workforce-cost aggregation); provider-productivity inputs (the raw worked-hours/occurrence-count BIZOPS owns; the metric is a projection); **`workforce_intelligence_state`** (competency/training/attestation-status/comp-tier/commission-eligibility/performance-context — the WI STATE, §4; `REV-173`).
**Does NOT own:** **the payroll EXECUTION rail** (multi-state tax withholding/filing, paycheck-cutting, direct deposit, W2/1099 issuance, garnishments — an **external embedded-payroll rail**, accessed via a vendor-agnostic abstraction; vendor = `REV-172`, Check lead candidate, not chosen; BIZOPS computes the run and hands it to the rail, exactly as D6 hands money-movement to Stripe — §1.5); **clinical/care truth** (D5 occurrences, CM assertions — BIZOPS reads them for productivity, never writes them); **commerce sale truth + the commission AMOUNT** (D6 — D6 computes commission on a sale; BIZOPS owns the workforce *payout* of it); **actualized clinical work** (D5); **authority / who-can-do-what** (RBAC — a workforce record is not a capability grant); **the person/identity** (Identity — BIZOPS adds the employment relationship); **the routing-POLICY config** (Settings `provider_routing_policy` — BIZOPS owns the live operational-state, Settings owns the policy, D3 evaluates); **analytics-as-truth** (metrics are projections over D3/D5/D6 truth, NOT a primary store); **provider licensure/credentialing** (Federation `provider_license`/`provider_credentialing` — BIZOPS references).

## §4 Sub-areas + canonical objects (one family, internal sub-areas)

- **Workforce records:** `workforce_member` (employment relationship: hire/term dates, employment_kind {w2/1099/contractor}, comp class) — references Identity (person) + RBAC (capability) + Federation (license); BIZOPS owns the *employment* fact.
- **Operational-state + availability:** `provider_operational_state` (the §1G.7 live enum + eligibility-derived availability; D3 reads for booking; Settings routing-policy + this live-state together feed D3's composer).
- **Time + scheduling:** `shift` (labor schedule per workforce_member per venue — distinct from D3 patient appointments) · `time_clock` (clock-in/out, worked hours, breaks, overtime) · `coverage`/on-call.
- **Pay + compensation:** `pay_rule` (hourly/salary/per-service/blended) · `pay_period` · `payroll_run` (worked-hours + commission-payout → computed pay; append-only, reconcilable). **The computed `payroll_run` is handed to the external embedded-payroll rail** for tax-filing/paycheck-cutting/direct-deposit; BIZOPS owns the computation + reconciliation, the rail executes the filing (§1.5 / §3).
- **Commission/incentive:** `commission_payout` (the workforce payout of D6-computed commission amounts) · `incentive_event` (bonus/spiff) · `labor_cost` (per occurrence/period; feeds operating-intelligence projections).
- **`workforce_intelligence_state` (the Workforce Intelligence STATE — the ONE new truth WI creates; thesis §8 workforce-as-subject / `REV-173`):** per `workforce_member` — `competency_set` (competency + level + active/expired), `training_progress` (module attempt/score/pass-fail/completed_at/expires_at/retake-required), `attestation_status` (refs to D7 signed artifacts), `comp_tier` + `commission_eligibility`, `performance_context` (the *inputs*; the metric is a projection). **BIZOPS owns this STATE only** — the test/module DEFINITIONS are Settings, the signed artifacts/certs are D7, the gate is RBAC, the coaching is CNS/AI. This is the home for "Hannah scored 82% then 91%, laser competency active." (Phasing: state + gating early — real compliance/liability; AI coaching deferred to AI #12.)
- **Payroll rail abstraction (vendor-agnostic — the architectural commitment, NOT a vendor):** `payroll_rail_account` (the embedded-rail binding) + `payroll_rail_sync` (the `payroll_run`→rail handoff + status reconciliation back into BIZOPS). The rail is the **executor**, never the **source of labor truth**. Built to the abstraction; vendor (Check lead candidate / Gusto-Embedded / ADP-class) selected later via `REV-172`.

## §5 Consume-events-never-corrupt-truth (the binding discipline; `REV-164`)

BIZOPS **consumes** events from the care/commerce domains and **derives** workforce/labor truth — it never writes back into them:
- D5 `service_occurrence.completed` → worked-occurrence input (productivity + per-service pay).
- D6 `sale_closed` + `commission` (amount) → `commission_payout` (BIZOPS pays out what D6 computed; BIZOPS does NOT recompute the sale).
- D3 appointment/availability → shift/coverage alignment + provider operational-state.
- RBAC capability + Federation license → workforce eligibility (BIZOPS records employment; RBAC/Federation own authority/license).
- Time-clock + pay_rule → `payroll_run`.

**The arrow is one-way: care/commerce → BIZOPS.** BIZOPS never mutates an occurrence, a sale, an assertion, or a capability. Provider productivity, utilization, and labor cost are **projections** computed from D5/D6/D3 truth — not a second source.

## §6 Invariants / rejection rules (the gems)

1. **Never corrupts care/commerce truth** (`REV-164`): BIZOPS reads D3/D5/D6 events one-way; it NEVER writes an occurrence (D5), a sale/refund (D6), or a clinical assertion (CM). "Productivity" pressure must never become permission to edit care truth.
2. **Analytics = projection, never a truth source** (§2): provider productivity / utilization / revenue-per-provider are computed projections over D5/D6/D3 truth; BIZOPS does not store them as primary truth (no metric-as-source-of-truth).
3. **Commission AMOUNT = D6; commission PAYOUT = BIZOPS — dual guard** (§3; Knox): D6 computes the commission on a sale (commerce calc); BIZOPS owns the workforce payout of it. **BIZOPS NEVER recomputes sales commissions from scratch** (it pays out what D6 computed), and **D6 NEVER becomes payroll** (it computes the line, it does not run pay). No double source of the amount; no domain bleed in either direction.
4. **Provider operational-STATE = BIZOPS; routing-POLICY = Settings; evaluation = D3** (§3): the live "takeable now" state is workforce truth (BIZOPS); the routing strategy is config (Settings `provider_routing_policy`); D3 evaluates both in the booking composer. Three owners, no collapse.
5. **Workforce schedule ≠ patient appointment schedule** (§4): the `shift`/labor schedule (who is working) is BIZOPS; the `appointment` (patient booked time) is D3. They align but never merge.
6. **Workforce record ≠ identity ≠ capability** (`T0-13`): `workforce_member` (employment) is distinct from Identity (the person) and RBAC (capability); a workforce record confers no authority.
7. **Payroll/comp is append-only + reconcilable** (D6-money-discipline mirror): `payroll_run` is immutable post-close; corrections are additive; reconcilable against time-clock + commission-payout.
8. **Care-truth-isolated even under cost pressure:** a labor-cost or utilization concern never gates or alters a clinical decision (clinical authority is the clinical domain's; BIZOPS observes cost, never drives care).
9. **Own the labor TRUTH; delegate payroll EXECUTION to a vendor-agnostic rail abstraction** (§1.5/§3; the D6 money-rail doctrine applied to labor): BIZOPS owns workforce/time-clock/commission-payout/labor-cost + the `payroll_run` *computation*; the **external embedded-payroll rail** executes tax-filing/paycheck-cutting/W2-1099 via the `payroll_rail_account`/`payroll_rail_sync` abstraction — **rail is executor, NEVER source of labor truth.** **OMNI is not a PEO/tax-filing engine.** Build to the abstraction, not a vendor (vendor = `REV-172`, Check lead candidate, NOT chosen). This is what makes payroll work AT DEPLOY without building a multi-state tax engine — and what keeps BIZOPS from becoming one. Reconcile rail status back; never duplicate the rail's tax logic.
10. **BIZOPS is Day-1 operational, not later-phase** (§1.5; Nick 2026-06-02): a deployed medspa runs on workforce/time-clock/commission/labor-cost on launch day. The thing that is genuinely later is *rail absorption* (replacing the embedded rail with OMNI-native filing) + benefits administration — NOT the operating capability itself.
11. **Workforce Intelligence = composition, NOT a silo; BIZOPS owns the STATE only** (`REV-173`; thesis §8 workforce-as-subject): WI is a cross-cutting capability over BIZOPS+Settings+D7+RBAC+D3/D5/D6+CNS/AI — NOT a new domain and NOT a back-office "training app." BIZOPS owns `workforce_intelligence_state` (competency/training/attestation/comp-tier); test/module DEFINITIONS = Settings, signed ARTIFACTS = D7, GATES = RBAC, COACHING = CNS/AI (proposes-never-commits). If training-module content or quiz definitions start living in BIZOPS, that is the bug → Settings/D7.
12. **Provider / admin profiles are PROJECTIONS, not domains** (`REV-173`): a provider profile = projection over Identity (person) + Federation (license) + RBAC (capability) + BIZOPS (employment/comp-tier/WI-state/operational-state) + D7 (signed docs/certs) + D3/D5/D6 (schedule/work/sales evidence) + Settings (requirements). The unified WI surface is `workforce_operating_context` (CNS-assembled, references-never-owns; CNS §-WI). Weight: WI is a SUPPORTING layer — never reweights the core patient/service/commerce engine.

## §7 Disposition table

| Prior primitive / source | Disposition | Note |
|---|---|---|
| thesis §1 business-ops note + System Map BIZOPS row | **clean-into-contract (spine)** | §1-§4 |
| legacy §1G.7 provider operational-state + eligibility + derived routing | **own the live operational-STATE** (§4) | D3 consumes (`SC-WF-D3-001`); Settings owns routing-policy; D3 evaluates |
| D6 `commission` (per pricing_option/staff) | **D6 computes AMOUNT; BIZOPS owns PAYOUT** (§3/§6.3) | no double source |
| provider productivity / utilization / revenue-per-provider | **projection over D5/D6/D3 truth** (§6.2) | NOT a primary store |
| payroll/timeclock/commissions if stuffed into D3/D5/D6 | **reject → here** (`REV-164`) | the anti-pattern REV-164 names |
| tax-filing / paycheck-cutting / W2-1099 / direct-deposit | **external embedded-payroll RAIL** (vendor-agnostic abstraction), at deploy | D6 money-rail doctrine applied to labor; OMNI owns the run computation, rail executes — NOT deferred, INTEGRATED; vendor = `REV-172` (Check lead candidate, not chosen) |
| benefits administration (health-plan enrollment) + rail *absorption* (OMNI-native tax-filing) | **genuinely later/optional** | the only true later-phase items; the operating capability is Day-1 |
| workforce_member vs Identity vs RBAC | **distinct** (§6.6) | employment ≠ person ≠ capability |

## §8 Seams

- **D5 → BIZOPS** (`SC-D5-WF-001`): `service_occurrence.completed` → worked-occurrence/productivity input.
- **D6 → BIZOPS** (`SC-D6-WF-001`): `sale_closed` + commission amount → `commission_payout`; D6 owns the amount, BIZOPS the payout.
- **BIZOPS → D3** (`SC-WF-D3-001`): provider live operational-state → booking composer (D3 evaluates with Settings routing-policy). (Closes the D3-backfill staged seam.)
- **BIZOPS ↔ RBAC / Identity / Federation:** workforce_member references Identity (person) + RBAC (capability) + Federation (`provider_license`/`provider_credentialing`); BIZOPS owns employment only.
- **BIZOPS ↔ Settings:** pay_rule/shift-policy/routing-policy config is Settings-defined; BIZOPS owns the runtime workforce facts.
- **BIZOPS ↔ payroll rail** (`SC-WF-PAYROLL-001`): computed `payroll_run` → external embedded-payroll rail (vendor-agnostic; vendor = `REV-172`) for tax-filing/paycheck/W2-1099; rail status reconciles back to `payroll_rail_sync`. (Same shape as D6 ↔ money-movement rail.)
- **BIZOPS → analytics/projection:** labor cost / productivity / utilization are projections (operating-intelligence), never a truth source.
- **Workforce Intelligence seams (`REV-173`):** Settings → BIZOPS (training/competency/quiz/policy/comp-tier DEFINITIONS that WI-state is measured against) · D7 ↔ BIZOPS (signed contracts/certs/attestation artifacts, `subject = workforce_member`; BIZOPS holds the state, D7 the artifact) · BIZOPS → RBAC (`workforce_intelligence_state` competency/attestation feeds the competency-gate — RBAC §5 composed input) · BIZOPS → CNS (`workforce_intelligence_state` + perf-inputs feed the `workforce_operating_context` projection + AI coaching, deferred AI #12). The unified surface `workforce_operating_context` is CNS-assembled (references, never owns).

## §9 Open items (→ `08`)

- `REV-164` **proposed-resolved** toward ONE named domain family here (closure pending trifecta signoff — NOT "done") — confirm at ratification; revisit whether payroll/compensation later splits into its own contract if it grows (DL-8 admission criteria).
- **Phasing (corrected — Nick 2026-06-02): BIZOPS is Day-1 operational** (workforce + time-clock + commission-payout + labor-cost + payroll-run, payroll executing via embedded rail). Genuinely-later = benefits administration + rail absorption only.
- **OPEN DECISION — payroll-rail vendor (`REV-172`):** the *abstraction* (`payroll_rail_account`/`payroll_rail_sync`/run-handoff/reconcile/executor-not-source) is the architectural commitment and is settled; the **vendor is genuinely OPEN.** `default candidate: Check; alternatives: Gusto Embedded / ADP-class; decision pending vendor diligence` (pricing, coverage, contractor/W2 support, implementation lift, medspa/state fit). Check = *lead candidate* ≠ *chosen rail* — a future agent must not treat it as decided. Build to the abstraction. Also open: the build-vs-absorb arc (embed-now-absorb-later vs build-native). Does NOT block the contract; gates the payroll vendor wiring.
- The §1G.7 provider operational-state seam (`SC-WF-D3-001`) closes the D3-backfill stage — confirm D3 re-points at ratification.
- Provider-productivity metric definitions (which D5/D6 inputs, what windows) = analytics-projection spec, deferred to the analytics/operating-intelligence pass.

## §10 Evidence sources

thesis v2 §1 (OMNI as a business-operations OS — Workday/ADP/Gusto + QuickBooks collapse) · `OMNI_System_Map_vNext.md` BIZOPS row · `REV-164` (business-ops/workforce named-not-scoped) · legacy §1G.7 (provider operational-state + routing) + `SC-WF-D3-001` (D3 backfill) · D6 §4 (`commission` boundary) · `T0-13` (per-event ownership orthogonality) · comparator registry (Workday/ADP/Gusto/QuickBooks).

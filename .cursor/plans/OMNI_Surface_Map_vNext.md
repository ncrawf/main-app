# OMNI Surface + Experience Map (vNext)

Document type: `architecture_map` (canonical hub/index for the **P5 Surface** + **P4 Projection** planes — the expressed-product layer)
Authority: `canonical` for *which surfaces and projections exist, who they serve, what they compose/read/write, and build priority.* The surface-plane peer of `OMNI_System_Map_vNext.md` (truth plane). Owns NO canonical truth and NO UI spec — the map, not the territory.
Status: `draft_authoring` (this is the CLEAN authored frame — `D0THES-DEC-033`; **supersedes the 2026-06-02 reactive stand-up of this file**, which is preserved in git history as working-draft/evidence per `GRD-024` author-clean discipline). Frame authored 2026-06-03; **evidence-led recovery + rich per-surface contracts are the NEXT pass (not yet done)**.
Source-of-truth relationship: per `surface_projection_planes_a2e6c7c0.plan.md`. Hub + spokes: this map indexes; rich detail lives in `surfaces/<surface>_surface_contract.md` (P5) + `projections/<name>_projection_contract.md` (P4). Same Map+Contracts pattern proven on the truth plane.

---

## 1. Why this plane exists (the expressed-product layer)

The truth plane (domain contracts + System Map) answers *where canonical truth lives.* It is necessary but not the whole architecture — and OMNI under-built the rest for two nights, even though months of product/UX thinking already existed (provider views, ops vs admin views, dashboards, intake/messaging/booking UX, analytics, marketing). This plane is the durable home for *how humans (and, later, agents) see, operate, and act on the truth.* Its job is **recovery without graveyarding**: every prior surface/UX idea lands in a real home or is dispositioned with reason.

## 2. The architecture planes (where this sits)

P0 Doctrine/Thesis · P1 Truth (domain contracts + System Map) · P2 Seam · P3 Capability · **P4 Projection** (read-models; own no truth) · **P5 Surface** (this map) · P6 Build · Evidence. Conscious folds (not planes): Actions/Commands = RBAC atoms + domain write-APIs; Evals = Build-OS proof.

## 3. Surface KINDS — exactly three (stable; do not invent sub-kinds)

| Kind | What it is |
|---|---|
| **Workspace** | an authenticated persona container; **composes** workflows + projection-fed views |
| **Workflow** | a reusable cross-context flow, instantiated in ≥1 workspace with **persona-scoped variants** (never forked) |
| **Public / content** | unauthenticated brand/marketing layer (sites, landing pages, public booking links) |

**Binding (Knox):** "Analytics", "AI/CNS Trace Review", "Finance", etc. are **instances** classified into these three kinds — NOT new kinds. (Analytics = a Workspace; AI/CNS Trace Review = a Workspace/Workflow.) If we feel the urge to add a 4th kind, stop — it's an instance.

## 4. Persona model (who the surfaces serve)

Patient · Provider · Provider-Manager · Front-desk/Coordinator (Ops) · Admin · IT/System-Admin · Marketer · Owner/Executive · Support · Analyst. **Deferred personas:** Operator/Network-Governance, Partner/Federated-Operator (Federation pass). The persona is the access+experience grouping; **authority is RBAC's, not the surface's.**

## 5. Composition model

A **Workspace composes Workflows + per-persona projection views.** A **Workflow** is one contract with persona variants. Metrics are never owned by a surface — each persona gets a **metric pack** defined in the Operating-Intelligence projection plane (§9) and embedded in its workspace. The organizing artifact is the **persona × surface × metric-pack matrix** (built during recovery, §10).

## 6. Binding rules (so P5/P4 never corrupt the truth plane)

1. Surfaces/projections own **NO canonical truth**; they reference P1 and commit nothing.
2. **Metrics are projections, never source truth** (`T0-15`).
3. A surface **invokes verbs; the domain commits** (UI never grants authority, recomputes commission/price/occurrence, or bypasses consent/eligibility).
4. **Distributed truth, unified surface** (Tesla/Amazon) — coherent experience over separate truth owners, not a blob.
5. **Anti-fork:** a shared workflow is ONE contract + persona variants.

## 7. Scope boundary (CRITICAL — this map is NOT single-practice-only)

- **NOW (this pass):** single-practice / single-operator surfaces (one staff team, one owner). The §8 index below.
- **LATER — Federation / Multi-Operator surface family** (deferred → Federation pass): operator/practice view · brand/multi-location view · network-governance view · partner/federated-operator portal · cross-operator consent/grant/visibility review · federation admin/topology. These are NOT "admin but bigger" — they involve Federation + RBAC + D7 grants + operator boundaries + scoped visibility + break-glass. **Named here so the map never implies single-practice-only.**
- **LATER — Agentic Runtime / CNS Control surface family** (deferred → AI #12): which agent/AI path fired · which capability/tool/MCP was invoked · which model/prompt/rule/template version ran · what was proposed vs committed vs by-whom · eval/trace pass-fail · which capabilities/agents are active/disabled. **Guardrail (Knox — do NOT make this agent-mesh product doctrine):** *agents are bounded runtime workers; capabilities/tools are governed interfaces; CNS orchestrates; domains commit; surfaces observe/control; evals/traces prove.* The single-practice **AI/CNS Trace Review Workbench** (§8.A) is the buildable-now slice of this; the full control plane is AI #12.

## 8. Surface index (by kind — frame only; status honest; recovery fills the contracts)

Status: `stub` = placeholder file exists, needs recovery · `to-carve` = no contract yet · `candidate` = named, not yet confirmed. **Nick confirms/extends the set (`REV-175` step 1).** Ambiguous → `surfaces/_surface_inbox_unassigned.md`.

### 8.A Workspace surfaces

| Workspace | Persona | Composes (workflows) | Projection views | Priority | Status |
|---|---|---|---|---|---|
| Patient App | patient | Intake-Flow, Booking, Messaging-Thread, Checkout, Treatment-Journey | patient `context_packet` | day_1 | stub |
| Provider Workspace | provider/manager | Provider-Task-Queue, Intake-Review, Charting/Closeout, Messaging-Thread | `provider_profile`, patient `context_packet`, provider metric-pack | day_1 | stub |
| **Admin Console** | admin | Settings/Catalog-Admin, Staff/Access-Admin, Doc/Consent-Review, Reports/Exports | admin metric-pack | day_1 | stub (SEPARATE from Ops) |
| **Ops Command Center** | front-desk/coordinator | Schedule-Grid (Booking on-behalf), Check-in, Room/Provider-State, Exceptions/No-show, Urgent-Queues, Support-Inbox | ops metric-pack (floor throughput/bottlenecks) | day_1 | stub (SEPARATE from Admin — recover the old admin-vs-ops requirements) |
| Marketing / Growth | marketer/owner | Campaign-Performance, Conversion-Funnel (view), Lead-Lifecycle, Promo-Playbooks | `marketing_attribution`, marketing metric-pack | next | stub |
| Owner / Executive | owner | (read-mostly; drills into others) | `operating_metrics`, owner metric-pack | next | stub |
| Workforce Intelligence | provider/admin/owner | (renders WI; AI coaching → AI #12) | `workforce_operating_context` | next | stub |
| IT / System Admin | IT | Access-Provisioning, Integration/Adapter-Health, Break-Glass, Audit | system-health metric-pack | later | stub |
| **Analytics / Operating Intelligence** | analyst/admin/owner | (dedicated explorer over the metric layer) | `operating_metrics` (full) | next | stub — **first-class workspace, NOT deferred** (per-persona packs embed elsewhere too) |
| **AI / CNS Trace Review Workbench** | provider/admin/IT/clinical-ops | (inspect why-a-path-fired; replay request) | reads `orchestration_run`/`cns_decision`/`ai_run`/`trace_lineage`/`context_packet`/eval bundles | next-ish | candidate — buildable-now slice of the Agentic-Runtime family (§7); writes only notes/review-status/replay-request, **never alters truth** |

### 8.B Workflow surfaces (reusable; one contract + persona variants)

Booking/Scheduling (D3) · Messaging/Thread (Messaging) · Intake-Flow (Intake) · Checkout/POS (D6) · Charting/Encounter-Closeout (D5/CM) · Provider-Task-Queue (CNS) · Intake-Review (Intake/CM) · Conversion-Funnel (Intake/D6) · Campaign-Performance (CNS/D6) · Support-Inbox (Messaging) · Doc/Consent-Review (D7) · Reports/Exports (D6/BIZOPS). Status = mostly to-carve / stub; UX evidence vein = §10.

### 8.C Public / content surfaces

Brand site/content (WordPress-layer) · Landing/campaign pages · Public booking link · Lead-capture · Promo/content pages. Status = to-carve.

### 8.D Candidate enterprise surfaces (named, NOT graveyarded — confirm/route in recovery)

Finance / reconciliation / exports (D6/BIZOPS/accounting) · Settings/Catalog administration (→ likely Admin Console module) · Compliance / audit / risk (RBAC/D7 grants/break-glass/trace) · Inventory / supply / device / room ops · Partner / referral / affiliate · (Integration/adapter health → IT). Each → confirmed surface, workspace-module, or inbox item — never dropped.

### 8.E Federation / Multi-Operator surface family (SCAFFOLDED now; FLESHED at the Federation pass)

Mapped, not solved. These are **surfaces over Federation truth** — Federation still owns topology/grants/permeability/operator-boundaries; these let humans see/manage it. Crystallized so the map reflects the thesis (multi-operator), not a single-practice assumption.

| Surface (candidate) | Persona | Reads (truth) | Must NOT own | Pass |
|---|---|---|---|---|
| Operator / Practice Workspace | operator-admin | Federation (this operator scope) + the practice's workspaces | cross-operator grants (Federation) | Federation |
| Brand / Multi-Location Command Center | brand owner/ops | Federation (brand→sites/venues) + per-location `operating_metrics` | location truth (each site's domains) | Federation |
| Network Governance Console | network-governance | RBAC + D7 grants + CNS-Meta audit + Federation policy | care/commerce truth (aggregate-by-default; named-purpose only) | Federation |
| Partner / Federated Operator Portal | partner operator | scoped Federation grants + `shared_context_grant` | host-operator truth beyond grant scope | Federation |
| Cross-Operator Patient Continuity View | provider/coordinator | patient `context_packet` composed across operators (consent-gated) | any operator's truth without grant | Federation |
| Grant / Visibility Review Surface | admin/compliance | `shared_context_grant`/`visibility_grant`/break-glass (Federation/RBAC/D7) | the grants themselves (Federation owns; this reviews) | Federation |
| Federation Topology / Venue / Legal-Entity Admin | operator-admin/IT | Federation (legal_entity/brand/site/venue/jurisdiction) | the topology truth (Federation owns; this manages-via-it) | Federation |

### 8.F Vertical / Program surface family (SCAFFOLDED now — LENSES, not per-vertical rebuilds)

**Binding discipline (anti-silo, payload≠domain one level up):** a vertical/program surface is NOT a new app. It is a **lens** = `(base workspace/workflow) + pathway filter + program metric-pack + care_journey projection`. ONE booking flow / intake flow / provider workspace, **pathway-parameterized** — never six. (A provider thinks "show me my GLP-1 patients at risk," not "D3/D5/D6" — the lens gives them that view over the same substrate.)

| Vertical lens (candidate) | = base surfaces + | Program pack / projection | Pass |
|---|---|---|---|
| GLP-1 Program Workspace | Provider/Ops workspace + intake/booking/messaging, pathway=GLP-1 | `program_performance_metrics` + `care_journey_status` (titration/labs/adherence) | per program-slice build |
| TRT / Hormone Program Workspace | same base, pathway=TRT/HRT | follow-up-gap + lab-monitoring pack | per program-slice build |
| Aesthetic / Medspa Procedure Workspace | same base, pathway=aesthetic | aftercare/recall + injectable-menu pack | per program-slice build |
| Labs / Diagnostics Program View | OFC + Observation + Provider workspace, lens=labs | result-turnaround + abnormal-review pack | per program-slice build |
| Membership / Longevity Program View | D6 entitlement + Patient/Provider workspace, lens=membership | grant-utilization + due-service pack | per program-slice build |
| Post-Procedure / Care-Journey Ops View | Ops + CNS + OFC, lens=journey | `care_journey_status` (recalls/follow-ups/exceptions) | per program-slice build |

### 8.G Agentic Runtime / CNS Control surface family (NAMED; FLESHED at AI #12)

The full agent/MCP/capability monitoring + enable-disable control plane (vs the buildable-now AI/CNS Trace Review Workbench in §8.A). **Bounded-agent guardrail (Knox):** agents = bounded runtime workers; capabilities/tools = governed interfaces; CNS orchestrates; domains commit; surfaces observe/control; evals/traces prove. Do NOT design agent-mesh product doctrine here — park for the AI dive (`REV-171`/AI #12, Nick has more context).

## 9. Projection plane index (P4) + per-persona metric packs

| Projection | Composes | Consumed by | Contract |
|---|---|---|---|
| `workforce_operating_context` | BIZOPS WI-state + RBAC + Federation + D3/D5/D6/D7 + Settings | WI, Provider, Admin, Owner | `projections/workforce_operating_context_projection_contract.md` |
| patient `context_packet` | Observation + CM + D7 + Intake + D3/D5 (CNS §9.1) | Patient, Provider, Intake-Review | `projections/patient_context_packet_projection_contract.md` |
| `provider_profile` | Identity + Federation + RBAC + BIZOPS + D3/D5/D6/D7 + Settings | Provider, Admin, Owner, WI | `projections/provider_profile_projection_contract.md` |
| `marketing_attribution` | D6 + Identity(lead) + CNS(campaign) + Messaging | Marketing, Owner | `projections/marketing_attribution_projection_contract.md` |
| `operating_metrics` (Operating-Intelligence layer) | D3/D5/D6/BIZOPS/RBAC/Settings/CM/Observation (derived; never source) | Analytics, Owner, Admin, Ops, Marketing, Provider | `projections/operating_metrics_projection_contract.md` |

**Per-persona metric packs** (subsets of `operating_metrics`, defined in the projection plane, embedded per workspace): provider (production/conversion/comp) · ops (throughput/bottleneck/utilization/no-show) · marketing (funnel/attribution/campaign) · owner (revenue/labor/margin/growth) · IT (system-health/integration/audit) · admin (config/management). `REV-174` scopes the full layer.

**Candidate projections for the deferred families (named now; defined at their pass — own no truth):** `operator_operating_context` + `network_operating_metrics` + `cross_operator_visibility_projection` + `federation_grant_review_projection` (→ Federation pass) · `vertical_pathway_context` + `program_performance_metrics` + `care_journey_status_projection` (→ program-slice builds; the lens read-models for §8.F). Placeholders so future agents don't treat a single-practice projection set as complete.

## 10. Recovery method (the NEXT pass — evidence-led, examine/improve/expand)

Recovery is contract-grade rigor, adapted. **Not transcription** — examine, improve, and expand the prior thinking (Nick: "not perfect, not complete, but substantial real back-and-forth worth building from").

- **Primary recovery vein = the OLD system map operational sections** (`system_map_three_layers_60706286.plan.md`): §1G (provider loop/queues/workspace), §1K (intake), §1Q (messaging/comms UX), §1F (settings/admin), dashboard/grid/drill-downs, and the **admin-vs-ops** discussions. THEN designs/ (scheduling rule matrix, intake_construction), audits/, specs/, handoffs (C1/C2 chat), mindbody raws.
- **Each surface contract gets a mandatory `## Recovered prior work` section** — rich deposited requirements, not citations.
- **Bidirectional coverage matrix** (below): every source → its surface/projection home; every surface → what fed it. A source with no home = miss; a surface with no feed = under-recovered.

### Coverage matrix (to fill during recovery)
| Source (old-map section / doc) | Surface/Projection home | Disposition |
|---|---|---|
| *(populated in the recovery pass — `REV-175`)* | | |

## 11. Status + what's owed (honest — frame ≠ done)
- **Done:** clean frame authored (kinds, personas, composition, scope boundary incl. federation/agentic deferrals, binding rules, index skeleton, projection index + metric-pack model).
- **Owed (`REV-175`):** Nick confirms/extends the surface set + admin-vs-ops + candidate enterprise surfaces; evidence-led recovery (old-map-first) into rich `Recovered prior work` sections; reconcile/re-author the 14 reactive stubs into this structure; coverage matrix filled; catalog/read-graph for artifacts; ratify → then Federation surfaces / AI #12.

## 12. Pointers
Plane decision: `03` `D0THES-DEC-033`. Truth plane: `OMNI_System_Map_vNext.md`. Open gate: `REV-175`. Projection layer: `REV-174`. WI capability: `REV-173`. Inbox: `surfaces/_surface_inbox_unassigned.md`. Deferred: Federation pass + AI #12.

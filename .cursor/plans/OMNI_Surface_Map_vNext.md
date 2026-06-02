# OMNI Surface + Projection Map (vNext)

Document type: `architecture_map` (the index/hub for the P5 Surface + P4 Projection planes)
Authority: `canonical` for *which surfaces and projections exist, who uses them, what they read/write, and build priority.* It is the surface-plane equivalent of `OMNI_System_Map_vNext.md` (which indexes the truth plane). It owns NO canonical truth and NO UI spec — it is the map, not the territory.
Status: `draft` (created 2026-06-02, Foundation vNext; surface/projection plane stand-up; Nick + Knox review gate)
Source-of-truth relationship: per `surface_projection_planes_a2e6c7c0.plan.md`. Hub + spokes: this map indexes; the rich detail lives in `surfaces/<surface>_surface_contract.md` (P5) + `projections/<name>_projection_contract.md` (P4). Same Map+Contracts pattern proven on the truth plane.

---

## Why this exists (the plane gap it closes)

OMNI's truth plane (14 domain contracts + System Map) answers *where canonical truth lives.* It is necessary but not the whole architecture. A 1BN-grade product also needs to say *how humans see, operate, and act on that truth* (P5 Surface) and *how truth is composed for viewing* (P4 Projection). Those two planes were missing — so the large body of prior dashboard / profile / marketing / analytics / ops / IT design work had nowhere clean to land and could not be certified as covered. This map + its contracts are that home.

## The OMNI architecture planes (settled taxonomy — name them once)

| Plane | What it answers | Artifacts | Status |
|---|---|---|---|
| **P0 Doctrine/Thesis** | WHY OMNI exists | thesis v2 + doctrine ledgers | have |
| **P1 Truth** | WHERE canonical truth lives | Domain Contracts + `OMNI_System_Map_vNext.md` | have (14) |
| **P2 Seam** | HOW truth moves between domains | `contracts/seams/SC-*.md` | have |
| **P3 Capability** | cross-cutting compositions over domains | capabilities (Workforce Intelligence, conversational intake, rules/campaigns) | started |
| **P4 Projection** | HOW truth is composed for viewing/decision | `projections/<name>_projection_contract.md` (+ this map) | **NEW (this pass)** |
| **P5 Surface** | HOW humans see/operate truth (by persona) | `surfaces/<surface>_surface_contract.md` (+ this map) | **NEW (this pass)** |
| **P6 Build** | WHAT we implement, in what order | Build OS / build slices | partial |
| **Evidence** | demoted source material (non-binding) | audits / designs / raws / handoffs / specs | have |

**Consciously NOT new planes (decisions, not silent omissions):** **Actions/Commands** (the guarded write-verb catalog) = already covered by RBAC permission-atoms (~80) + each domain's write-API; a surface's §5 names which atoms it invokes. **Evals/quality** = Build-OS proof obligations + the audits-as-evidence. If either later proves to need its own artifact family, that is a deliberate future decision (`08`).

## Binding rules for P4/P5 (so they never corrupt the truth plane)

1. **Surfaces and projections own NO canonical truth.** They reference P1 truth; they commit nothing. Every write routes through the owning domain + RBAC gate.
2. **Metrics are projections, never source truth** (`T0-15`; `REV-174`). A metric/profile/context-packet that becomes a primary store is the bug.
3. **A surface invokes verbs; the domain commits them.** UI never grants authority, never recomputes another domain's truth (commission/price/occurrence), never bypasses consent/eligibility.
4. **Distributed truth, unified surface** (the Tesla/Amazon pattern): a coherent operator/patient experience composed over separate truth owners — not a blob.
5. **No surface forks by alias.** "Provider dashboard / profile / workspace" are not 3 surfaces unless intentionally split; aliases tracked in the index.

## Surface index (P5)

Legend: ◆ Nick-seeded · ○ repo-evidenced candidate · type ∈ {dashboard, console, profile, workspace, app_surface}. Confirm/extend at the review gate — the non-obvious set is Nick's to finalize; ambiguous gems land in `surfaces/_surface_inbox_unassigned.md`, not a guessed surface.

| Surface | ◆/○ | Persona | Type | Reads (primary) | Priority | Contract |
|---|---|---|---|---|---|---|
| Patient App / Home | ◆ | patient | app_surface | Identity, D3, D5, D6, D7, CM, Observation, OFC, CNS | day_1 | `surfaces/patient_app_home_surface_contract.md` |
| Provider Operating Profile / Workspace | ◆ | provider/manager | workspace+profile | Identity, Federation, RBAC, BIZOPS, D3, D5, D6, D7, Settings, CM/Obs, CNS, OFC | day_1 | `surfaces/provider_operating_profile_surface_contract.md` |
| Admin Operating Console | ◆ | admin | console | RBAC, BIZOPS, D3, D5, D6, Settings, Messaging, CNS, Federation | day_1 | `surfaces/admin_operating_console_surface_contract.md` |
| Ops Command Center | ◆ | ops | console | D3, D5, CNS queues, BIZOPS, Messaging, OFC | day_1 | `surfaces/ops_command_center_surface_contract.md` |
| IT / System Admin | ◆ | IT | console | RBAC, Federation, Settings, audit, integrations | later | `surfaces/it_system_admin_surface_contract.md` |
| Marketing / Growth Dashboard | ◆ | marketer/owner | dashboard | D6 (attribution/promo), CNS (campaigns), Messaging, Settings, Identity (lead), Operating-Intelligence | next | `surfaces/marketing_growth_dashboard_surface_contract.md` |
| Owner / Executive Dashboard | ◆ | owner | dashboard | Operating-Intelligence projection over D5/D6/D3/BIZOPS | next | `surfaces/owner_executive_dashboard_surface_contract.md` |
| Workforce Intelligence Surface | ◆ | provider/admin/owner | profile+dashboard | `workforce_operating_context` projection (BIZOPS/RBAC/D3/D5/D6/D7/Settings/Fed) | next | `surfaces/workforce_intelligence_surface_contract.md` |
| Campaign Performance Console | ○ | marketer | console | CNS campaigns, D6 attribution, Messaging sends, Operating-Intelligence | next | `surfaces/campaign_performance_console_surface_contract.md` |
| Conversion Funnel (patient) | ○ | patient/prospect | app_surface+workflow | Intake, D6 (membership/pricing), Identity (lead), CNS | day_1 | `surfaces/conversion_funnel_surface_contract.md` |
| Intake Review Workspace | ○ | provider | workspace | Intake, Observation, CM, D7, CNS (`clinical_required`), OFC | day_1 | `surfaces/intake_review_workspace_surface_contract.md` |
| Provider Task Workspace | ○ | provider/staff | workspace | CNS (`provider_task`/queue), D5 (`care_state_view`), Messaging, OFC | day_1 | `surfaces/provider_task_workspace_surface_contract.md` |
| Analytics / Operating Intelligence | ○ | admin/owner | dashboard | `operating_metrics` projection (REV-174) | later | `surfaces/analytics_operating_intelligence_surface_contract.md` |
| Support / Internal Inbox | ○ | support/ops | workspace | Messaging (external-line), Identity, D7, CNS | next | `surfaces/support_inbox_surface_contract.md` |

### Operational / functional-module surfaces (P5 `workflow`/`app_surface` — the UX home for the core modules; TO CARVE in `REV-175`)

The second flavor of P5 (vs the composite dashboards/consoles above): the interaction/UX design of the core functional modules, each coupled to ONE primary domain. These are **not yet carved** as surface contracts; their rich UX design notes already exist as **evidence** (listed) and must be **deposited** into these contracts in the `REV-175` sweep. Truth stays in the domain contract; the UX/flow/screens live here.

| Module surface | Primary domain | UX design-note evidence to deposit | Status |
|---|---|---|---|
| **Scheduling / Booking flow** | D3 | `designs/day_0_scheduling_rule_matrix/*` (booking composer, appointment lifecycle, treatment menu) · `designs/2026-05-17_omni_scheduling_*` · future_care_obligations (neuromodulator/injectable-menu + booking-preset UX) · Mindbody appointments-grid raws (04/05) | ⏳ to-carve |
| **Messaging / Thread** | Messaging | chat-rendering handoffs (`HANDOFF_2026-05-11_phase_4h_communications_c2_chat_rendering`, in-app-inbox C1/C2) · communications topology · confirmation round-trip UX | ⏳ to-carve |
| **Intake Flow (patient-facing)** | Intake | `designs/2026-04-27_intake_construction_design` · `specs/conversion_funnel_modules_v1` · `specs/*_modules_v1` · intake coherence/free-text/mode-J audits | ⏳ to-carve (distinct from provider-side Intake Review Workspace) |
| **Checkout / POS** | D6 | Mindbody POS raws (06/07/12) · DL-17 commerce · promo-wallet/entitlement-redemption UX (future_care_obligations §6/§7) | ⏳ to-carve |
| **Charting / Encounter Closeout** | D5 / Clinical Memory | DL-20 closeout drawer · encounter/encounter_line UX · service_occurrence work-item UX | ⏳ to-carve |

## Projection index (P4)

| Projection | Composes | Consumed by | Contract |
|---|---|---|---|
| `workforce_operating_context` | BIZOPS WI-state + RBAC + Federation + D3/D5/D6/D7 + Settings | Workforce-Intelligence, Provider, Admin, Owner | `projections/workforce_operating_context_projection_contract.md` |
| patient `context_packet` | Observation + CM + D7 + Intake + D3/D5 (per CNS §9.1) | Patient App, Provider, Intake-Review | `projections/patient_context_packet_projection_contract.md` |
| `provider_profile` | Identity + Federation + RBAC + BIZOPS + D3/D5/D6/D7 + Settings | Provider, Admin, Owner, WI | `projections/provider_profile_projection_contract.md` |
| `marketing_attribution` | D6 (attribution/promo/revenue) + Identity (lead) + CNS (campaign) + Messaging | Marketing, Campaign-Performance, Owner | `projections/marketing_attribution_projection_contract.md` |
| `operating_metrics` | D3/D5/D6/BIZOPS/RBAC/Settings/CM/Observation (derived; never source) | Owner, Analytics, Admin, Ops, Marketing | `projections/operating_metrics_projection_contract.md` |

## Coverage table (bipartite proof — source family x disposition)

The proof that the surface/projection-relevant source material is accounted for. Disposition ∈ deposited-rich / routed / landed-elsewhere / evidence-only / future / pending-deeper-deposit. Updated as the sweep proceeds (todo `repo-sweep-deposit`).

| Source family / doc | Surface/Projection relevance | Disposition |
|---|---|---|
| `audits/2026-05-01_marketing_lifecycle_growth_orchestration.md` (16 parts) | marketing/campaign/attribution surfaces + projection | **routed** — domain truth already landed (CNS §9.3 campaigns / D6 promo+attribution / Messaging sends / Settings catalog); the dashboard/console/attribution VIEWS deposited to marketing_growth + campaign_performance + `marketing_attribution` (pending-deeper-deposit on the ~80-template + 18-campaign visualization detail) |
| `audits/2026-05-01_marketing_system_pressure_test.md` | marketing surfaces | **routed** (same homes; pressure-test = build-validation corpus) |
| `audits/2026-05-01_dynamic_behavior_pressure_test_post_marketing.md` | marketing/runtime behavior | **evidence-only** (pressure-test) — cite in marketing surfaces |
| `specs/conversion_funnel_modules_v1.md` (mod 22-26 + pricing) | conversion funnel surface + D6 membership pricing | **deposited-rich** → conversion_funnel surface; pricing → D6 (already) |
| `doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` | patient context_packet projection | **landed-elsewhere** (CNS §8 Patient-CNS coherence + §9.1) → `patient_context_packet` projection references it |
| `specs/domain_modules_v1.md` / `universal_modules_v1.md` / `glp1_pathway_modules_v1.md` / `clinical_core_modules_v1.md` | intake/funnel module surfaces | **pending-deeper-deposit** → intake_review + conversion_funnel + patient surfaces |
| Mindbody raws (04 dashboard, 10/11 profile/cockpit, 12/14/16 admin) | competitor surface evidence (provider/admin/profile/dashboard) | **evidence-only** (anti-pattern + feature reference) — cite in admin/provider/patient surfaces; do not chase parity |
| `FUTURE_ARC_2026-05-12_phi_surface_governance.md` | PHI surface governance | **future** → cited in patient/provider/admin surfaces (privacy floors) |
| `audits/.../analytics`/`metrics` (assertion-analytics, authority-vs-longitudinal) | analytics/metrics surfaces | **routed** → `operating_metrics` projection + analytics surface; `REV-174` |
| handoffs / preflights | mostly process; check for unlanded surface decisions | **evidence-only** unless the sweep finds a binding surface decision (then route) |

## Pointers
- Plane decision of record: `03_decision_extraction_ledger.md` (`D0THES-DEC-033`).
- Truth plane: `OMNI_System_Map_vNext.md`. Projection-layer open item: `REV-174`. Workforce capability: `REV-173`.
- Unassigned gem inbox: `surfaces/_surface_inbox_unassigned.md`.

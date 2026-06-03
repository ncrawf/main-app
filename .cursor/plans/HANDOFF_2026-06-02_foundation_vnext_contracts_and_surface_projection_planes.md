# HANDOFF — 2026-06-02 — Foundation vNext: domain contracts complete + Surface/Projection planes stood up

Document type: `checkpoint_handoff` (continuity artifact; non-binding — binding decisions live in `03_decision_extraction_ledger.md`, open items in `08_open_review_queue.md`, schemas in the contracts). Per Agent Work Protocol §8 Checkpoint Preservation Rule.
Created: 2026-06-02 (session stop — Nick going to sleep; resume tomorrow).
Purpose: a clean boot point so the next agent (or future Nick) resumes WITHOUT re-deriving this multi-session arc.

---

## 0. Boot in 60 seconds

OMNI = one governed substrate (care + business operations) for a multi-brand medspa/telehealth org, built to a 2035-grade thesis (v2). We are in **Foundation vNext**: producing clean, build-facing canonical artifacts (thesis → domain contracts → surface/projection planes) and demoting old scattered doctrine to evidence. **No production code is being written yet** — this is the architecture-foundation pass that precedes parallel-agent build.

**Where we are:** every core **domain contract is drafted** (truth plane) + the **Surface (P5) and Projection (P4) planes are now stood up**. The only un-drafted domain is **AI / Model-Lineage (#12)**, deliberately deferred (needs a fresh back-and-forth with Nick). Next hard gate before any parallel-agent build = **`REV-175`** (surface-plane completion) + ratification.

## 1. Operator + collaboration model (read `doctrine/operator_context_and_collaboration_model.md`)

- **Nick** = operator / owner (also "Nico" / "user"). Provider + small-business owner; knows the back-office pain points first-hand. Wants full technical fidelity, decision framing, tradeoffs, proof, and genuine pushback — never dumbed-down, never breezy "we got this."
- **Knox** = a ChatGPT review instance (third-party AI, not a human teammate). Default mode is the **trifecta**: Opus produces → Nick relays → Knox reviews → Nick relays back → Opus refines. Markers: `knox = …` / `at knox` = relayed review (evaluate on merits, push back if wrong); `me = …` / unmarked = Nick directly.
- Recurring Nick concern this arc: **coverage anxiety** ("are we missing gems / approaching this the right way"). It has twice been correct (caught the verification-gates shed; caught the missing Surface plane). Treat his "I don't trust complete" as a real signal, not nerves.

## 2. The architecture model (settled this arc — `D0THES-DEC-033`)

7 planes + evidence. Name them so we stop discovering by panic:

| Plane | Answers | Artifacts | Status |
|---|---|---|---|
| P0 Doctrine/Thesis | WHY | `omni_thesis_v2_2026-05-26.md` + doctrine ledgers | have |
| P1 Truth | WHERE truth lives | domain contracts + `OMNI_System_Map_vNext.md` | have |
| P2 Seam | HOW truth moves | `contracts/seams/SC-*.md` | have |
| P3 Capability | cross-cutting compositions | Workforce Intelligence, conversational intake | started |
| **P4 Projection** | HOW truth is composed for viewing | `projections/*` + Surface Map | **NEW this session** |
| **P5 Surface** | HOW humans see/operate truth | `surfaces/*` + `OMNI_Surface_Map_vNext.md` | **NEW this session** |
| P6 Build | WHAT to build, in order | Build OS | partial |
| Evidence | demoted source | audits/designs/raws/handoffs/specs | have |
Conscious folds (NOT separate planes): Actions/Commands = RBAC atoms + domain write-APIs; Evals = Build-OS proof obligations.

## 3. Domain contracts (P1 Truth) — all drafted except AI

All in `.cursor/plans/contracts/`, all `draft_for_ratification`:
D3 (scheduling) · D5 (service_occurrence / care-coordination) · D6 (commerce) · D7 (documents/consent/media) · Observation (measurement) · Clinical Memory (assertion) · Intake · Messaging · CNS (orchestration) · Identity · Federation · RBAC (authority/attestation/consent-gate) · Settings (catalog/registry) · OFC (ordered-fulfillment / care-obligations) · BIZOPS (business-ops / workforce). **AI / Model-Lineage (#12) = NOT drafted (deferred).**

## 4. What this session arc produced (newest work)

1. **OFC contract** (Act loop) — `fulfillment_order` (subtyped lab/Rx/commerce/…) + `care_obligation` (= un-parked `care_episode_task`). Lifecycle-state-only-delegates-truth. **`REV-163` proposed-resolved → own domain.** Knox tightenings landed: **release gate = STATE not AUTHORITY** (decision composed from RBAC/provider/D7/Obs/CM/CNS); **`care_obligation` is NOT a universal task table** (5-part due-state test; commercial→D6, marketing→CNS/campaign); OFC does **not** resolve `REV-141`.
2. **BIZOPS contract** (Business-Ops/Workforce) — workforce/time-clock/payroll/commission-payout/labor-cost + `workforce_intelligence_state`. **`REV-164` proposed-resolved → one named domain family.** Binding: consumes D3/D5/D6/RBAC events ONE-WAY, never corrupts care/commerce truth; analytics=projection; **commission AMOUNT=D6 / PAYOUT=BIZOPS (dual guard)**. **Corrected to DAY-1 operational** (not later-phase); **payroll executes via a vendor-agnostic embedded-payroll RAIL abstraction** (D6 money-rail doctrine) — vendor = **`REV-172`** (Check = lead candidate, NOT chosen).
3. **Workforce Intelligence** (`D0THES-DEC-032`, `REV-173`) — recognized as a cross-cutting **capability**, NOT a domain. ONE new truth (`workforce_intelligence_state` in BIZOPS) + `workforce_operating_context` projection + thesis **workforce-as-subject** principle (thesis §8; same machinery as patient context_packet, NOT equivalent — different authority/privacy/purpose-of-use). AI coaching deferred to AI #12. Guardrail `GRD-027`.
4. **Multimodal agentic conversational intake** — confirmed already specified (thesis §12.3 + §11); folded into `REV-171` (NOT a new domain); resolves at AI #12.
5. **Surface (P5) + Projection (P4) planes** (`D0THES-DEC-033`, `REV-175`) — the plane-gap fix. Hub `OMNI_Surface_Map_vNext.md` + 14 surface contracts + 5 projection contracts + template + `_surface_inbox_unassigned.md`. Marquee gems deposited repo-first (marketing lifecycle audit → marketing/campaign surfaces + `marketing_attribution`; conversion-funnel spec → conversion-funnel surface; LI patient operating-context → patient `context_packet`; §1G provider-queue → provider-task workspace).

## 5. Decisions of record this arc (`03_decision_extraction_ledger.md`)
`DEC-030` operating model (two governed loops + payload≠domain) · `DEC-031` Act loop named · `DEC-032` Workforce Intelligence · `DEC-033` plane taxonomy + surface/projection planes. Guardrails: `GRD-025` (cross-domain shed), `GRD-026` (payload≠domain), `GRD-027` (WI composition-not-silo + workforce-as-subject + weight-restraint).

## 6. Open review queue — the live set (`08_open_review_queue.md`)

| REV | What | State | Blocks |
|---|---|---|---|
| `REV-141` | full `care_commitment` substrate | open (OFC explicitly did NOT resolve; obligation≠commitment) | — |
| `REV-142` | Alec-Harris longitudinal-signal loop | open (runs through CNS) | — |
| `REV-149`/`REV-170` | rules-templates + campaign engine home (CNS sub-area vs own) | open | — |
| `REV-157` | Federation owns cross-operator grant layer (consume-before-owned) | resolved-in-Federation; consumers re-point at ratification | — |
| `REV-163` | OFC own-domain | **proposed-resolved** (ratify-pending) | — |
| `REV-164` | BIZOPS one-family | **proposed-resolved** (ratify-pending) | — |
| `REV-167` | tracked-clinical-object primitive home | open | — |
| `REV-169` | consent-gate enforcement | landed in RBAC §7 | — |
| `REV-171` | hybrid `interaction_context` + multimodal agentic intake `conversation_session` | open; resolves at AI #12 | — |
| `REV-172` | payroll-rail vendor (abstraction settled; Check lead, not chosen) | open; gates payroll build | — |
| `REV-173` | Workforce Intelligence capability | recognized; AI coaching → #12 | — |
| `REV-174` | Operating-Intelligence / Analytics projection layer | **homed** (`operating_metrics` projection + analytics surface stub); full scope = sweep | — |
| `REV-175` | **Surface/Projection plane completion gate** | open | **YES — blocks parallel-agent build** |
| `REV-158` | re-point Build OS at vNext | open | gates Build-OS transition |

## 6b. UPDATE 2026-06-03 — Surface Map re-authored clean (read `OMNI_Surface_Map_vNext.md` first)

The 2026-06-02 surface stand-up was reactive/stitched (a `GRD-024` Frankenstein risk on our own map). Per Nick+Knox it was **re-authored clean** 2026-06-03: 3 stable surface KINDS (Workspace/Workflow/Public; Analytics + AI-Trace-Review are *instances*, not kinds); persona model; persona×surface×metric-pack composition; **Admin Console ≠ Ops Command Center** (recover old admin-vs-ops, don't fold); **Analytics = first-class workspace** + per-persona metric packs; **AI/CNS Trace Review Workbench** named; candidate enterprise surfaces named-not-graveyarded; and a **scope boundary** naming two DEFERRED families so the map isn't single-practice-only: **Federation/Multi-Operator** (→ Federation pass) and **Agentic-Runtime/CNS-Control** (→ AI #12, bounded-agent guardrail: agents = bounded runtime workers, capabilities = governed interfaces, CNS orchestrates, domains commit, surfaces observe/control, evals prove). **Frame is authored; evidence-led recovery is the NEXT pass** (primary vein = OLD system map §1G/§1K/§1Q/§1F operational sections; examine/improve/expand, not transcribe; rich `Recovered prior work` per surface; bidirectional coverage matrix). The 14 reactive stubs are to be reconciled/re-authored into this structure during recovery.

## 7. RESUME HERE TOMORROW — `REV-175` gate, in order

1. **Nick red-lines the surface seed set** (the non-obvious ~25% only he holds). Confirm/extend the 14 surfaces in `OMNI_Surface_Map_vNext.md`; ambiguous → `surfaces/_surface_inbox_unassigned.md`. **Everything downstream waits on this.**
2. **Finish the `pending-deeper-deposit` sweep rows** (coverage table in the Surface Map): `specs/*_modules_v1.md` family, per-template/per-campaign viz from the marketing audits, mindbody dashboard/profile/admin raws.
2b. **CARVE the operational / functional-module surfaces** — tonight we built only the *composite* dashboards/consoles; the *functional-module UX* surfaces are NOT yet carved: **Scheduling/Booking (D3) · Messaging/Thread (Messaging) · Intake-Flow (Intake) · Checkout/POS (D6) · Charting/Closeout (D5/CM)**. Their rich UX design notes already exist as EVIDENCE (`designs/day_0_scheduling_rule_matrix/*`, `designs/2026-04-27_intake_construction_design`, `specs/conversion_funnel_modules_v1`, chat-rendering handoffs C1/C2, mindbody UX raws) and must be DEPOSITED into these surface contracts. Truth stays in the domain contract; UX/flow lives in the surface. (See Surface Map "Operational / functional-module surfaces" table.) Nick flagged this 2026-06-02.
3. **Alias merges + surface-KIND reclassification:** apply the surface-kind taxonomy now in the Surface Map ("Surface KINDS + composition") — **Workspace surfaces** (persona containers) vs **Workflow surfaces** (reusable cross-context flows, ONE contract + persona variants, never forked) vs **Public/content surfaces** (brand-site/landing/booking-link — the kind neither Opus nor Knox had placed). Reclassify the drafted index (provider_task + intake_review = Provider-Workspace workflows; conversion_funnel = Patient-App workflow; ops_command_center → Admin/Ops); resolve the aliases (admin/ops/IT, provider profile/workspace/task, marketing dashboard/campaign-console). Promotion rule: a workflow earns its own contract when reused across ≥2 workspaces / crosses many domains / carries UX-safety risk. (Nick + Knox 2026-06-02 — flat list rejected; serious-org model = persona workspaces + shared workflows + promotion rule.)
4. **Catalog rows + read-graph evaluation** for the ~22 new surface/projection files (Agent Work Protocol §5 — hub registered, spokes owed).
5. **Ratify** the foundation (all domain contracts + planes) → then draft **AI / Model-Lineage #12** (the fresh back-and-forth) → then **`REV-158`** re-point Build OS → then parallel agents.

## 8. Honest proven-vs-owed (do not let this read as "done")

- **Proven:** plane taxonomy settled + persisted; all domain contracts + both new planes exist as clean artifacts; marquee surface gems deposited with citations; coverage table is the proof scaffold.
- **Owed (NOT done):** surface seed set unconfirmed by Nick; sweep deposit is first-pass (several `pending-deeper-deposit`); alias merges undecided; catalog/read-graph for new files; nothing ratified; AI #12 not started; Build-OS not re-pointed.

## 9. Canonical artifact pointers
- Thesis: `omni_thesis_v2_2026-05-26.md` (workforce-as-subject in §8; conversational intake §11/§12.3).
- Truth plane: `OMNI_System_Map_vNext.md` + `contracts/`.
- Surface/Projection planes: `OMNI_Surface_Map_vNext.md` + `surfaces/` + `projections/`.
- Decisions: `doctrine/03_decision_extraction_ledger.md`. Open items: `doctrine/08_open_review_queue.md`. Guardrails: `doctrine/06_guardrail_antipattern_digest.md`. Active plan(s): `foundation_vnext_reconciliation.plan.md`, `surface_projection_planes_a2e6c7c0.plan.md`.
- Operator/collaboration: `doctrine/operator_context_and_collaboration_model.md`.

End of handoff.

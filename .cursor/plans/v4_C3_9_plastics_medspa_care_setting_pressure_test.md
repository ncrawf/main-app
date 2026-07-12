# v4 — C3.9: Plastic-Surgery + Medspa Care-Setting Pressure Test (pre-Task-D) — KICKOFF SHELL

Document type: `plan_or_roadmap` (a bounded pre-spine care-setting pressure test, sibling-in-method to C3.5/C3.6/C3.7; NOT spine/thesis prose, NOT contract edits) · Authority: `analysis_nonbinding` (`GRD-036`).
Status: **`shell_pending_population` 2026-07-12** — spec authored (operator directive); a scoped-population agent runs it. Propose-only; pre-spine.
Sequence: **runs BEFORE Task D (`v4_C4_2`).** Locked pre-spine order: Task C ✅ (wave-4) → **[GRR pressure-out + THIS C3.9 plastics/medspa test]** → Task D (enterprise full-stack) → v4 SPINE DRAFT 0.
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`. Current checkpoint: `HANDOFF_2026-07-12_wave4_closed_grr_pre_plastics_and_task_d.md`.
Manifest action: `add_tier2` (catalog row + read-graph route in the same pass).
Review gate: `user_knox_required`.

---

## §0 — Why this test, why now (operator directive 2026-07-12)
Before the enterprise round (Task D), pressure-test OMNI's **operator-topology / federation / partition / commerce / scheduling / workforce / continuity physics** against a **real, high-value wedge vertical**: **plastic-surgery practices with attached medspas.** This is simultaneously (a) a **ground-level care-setting reality check** (does OMNI's substrate actually absorb this operator shape?) and (b) a **wedge/GTM reality check** (these are the actual first ~50 customers).

**The wedge thesis (operator):** ~**1,000 plastic-surgery practices**; sell to ~**50**. They **spend money**, have **more pain points**, and almost always run **broken, disconnected systems between the surgical side and the medspa side** (fragmented patient identity, double data entry, split commerce/CRM, no continuity). OMNI's unification of surgical + aesthetic under one governed substrate **is the wedge value.** Ties C3.7 "cash-pay procedural independents (medspa tip-of-spear)" + bet-memo §9 + WI8 GTM + WI10–13 wager.

---

## §1 — The operator shapes to pressure (ground level — the fixtures)
Run the SAME physics against each shape:
1. **Standalone medspa** (the tip-of-spear wedge) — 1 site, aesthetic-only.
2. **Plastic-surgery clinic + attached medspa, co-located** — 1 main OR/surgical site with a medspa under the same roof.
3. **Plastic-surgery clinic (1 main OR site) + 3 geographically-separate local medspas** — multi-site (Nick's canonical case).
4. **Partitioned vs non-partitioned variants** of #2/#3 — data/consent/commerce/records **partitioned** between surgical and medspa (separate legal entities / privacy walls) vs **unified** (one continuity view). The partition posture is the crux (`federation_permeability_policy`: isolated → shared).

For each: what is the **topology**, what **breaks today**, and can OMNI represent + run it **without minting new operator/topology vocabulary** (C3.5 closure: operator = `legal_entity`+`brand`; sites/venues are the 6-tier composite `tenant_id` + 11-axis `venue`; async = `modality`; **no parallel node/setting vocabulary**)?

---

## §2 — What to pressure (map each to the owning OMNI physics — dedup, don't re-mint)
- **Federation topology / partition:** one `legal_entity` + multiple `site`/`location`/`venue`, OR multiple legal entities under one `brand`? Partition = `federation_permeability_policy` (isolated vs shared_context_grant/visibility_grant); `patient_continuity_policy` across surgical↔medspa. Operator-neutrality (`T0-14`).
- **Identity / continuity:** ONE patient across surgical + medspa (medspa client → surgical patient and vice versa) — `patient_relationship`, cross-site visibility/consent, `care_relationship` (cross-operator if separate entities), `continuity_binding` (C3.5 P37). The fragmented-patient pain is the #1 wedge value.
- **Commerce (D6) — two very different profiles under one operator:** surgical = high-ticket · deposits · financing (CareCredit-class) · `treatment_orders` clinical rail · cancellation policy; medspa = memberships · packages · retail products · gift cards · tips · injectable-unit sales · promos/discounts · commissions. Two commerce personalities, one governed substrate (`pricing_option`, `entitlement`, `commerce_order` line kinds, two-rail separation §1E).
- **Scheduling (D3):** OR scheduling (long, multi-resource, pre-op/post-op, clearance gates) vs medspa (rooms, estheticians/injectors, quick high-volume appts, membership-driven) — `availability_window`, room/resource/staff compatibility, `service_policy` gates.
- **Workforce (BIZOPS):** surgeons (licensure, OR privileges) + injectors/NP/PA (supervision, scope, incident-to) + estheticians (non-clinical) + front desk/patient-coordinators — `provider_operational_state`, competency-gating, **retail/medspa commissions** (a real BIZOPS/D6 seam).
- **Clinical / documents (D7 · Observation · OFC):** surgical op-notes + `before_after_pair`/`clinical_photo_detail` (aesthetic photos are load-bearing) + medspa treatment records + **injectable lot/custody tracking** (Botox/filler unit accounting — Observation/OFC `custody_chain`) + consent artifacts (surgical vs cosmetic).
- **The "broken systems" reality (cite it):** surgical side often on Nextech/PatientNow-class; medspa side on Boulevard/Mindbody/Aesthetic-Record-class → fragmented patient, double entry, split commerce/marketing, no continuity. This is the pain OMNI's substrate resolves. (Competitor evidence: `ingestion/competitor_product_evidence/mindbody/` exists.)
- **GRR relevance (new):** plastics+medspa is also a clean **GRR fixture** — cross-domain reports spanning surgical care + medspa commerce + product/photos. Cross-link to `v4_C4_governed_reporting_resolution_capture.md`.

---

## §3 — Method (the settled C3.5/6/7 template — but SCOPED; no 1,000-row corpus)
Per the wave-3/Nick discipline: **bounded pressure test, not a giant scenario batch.** Follow the C3.5/6/7 gate shape, trimmed:
- **A** existing-asset inventory (what the 15 contracts already cover for this setting) → **B** cited reality map (real plastics+medspa operations + the broken-systems landscape) → **C** topology/partition + actor/authority + commerce/continuity map → **D** a *small* scenario set (the load-bearing breakers, not exhaustive) → **E** deep-trace the breakers through the action loop → **F** disposition (confirm/extend/net-new vs contracts) → **G** handoff + **readiness verdict** (3-way honesty: architectural / build / operational) + **wedge/GTM verdict**.
- **Two-axis reality-check** (wave-3): `doctrine_status` × `build_status` on each load-bearing finding.
- **Anti-diminishment:** OMNI = the unified environment-of-work for the whole practice, not middleware between surgical and medspa systems.

---

## §4 — What it produces (deliverables)
1. **Readiness verdict** — does OMNI's topology/federation/commerce/continuity/workforce absorb plastics+medspa (all 4 shapes) with a **bounded delta**, no domain explosion, no parallel-topology vocabulary? (Expected pattern, per prior arcs: `doctrine=AFFIRM/PARTIAL · build=absent`.)
- 2. **The delta package** — confirm / extend / genuinely-net-new (small + sharp), routed to Federation/Identity/D6/D3/BIZOPS/D7/OFC/Settings.
3. **Wedge/GTM reality** — the actual first-50 customer profile, pain points, and what OMNI must nail to win them (feeds bet memo + WI8).
4. **Task-D input** — a **real operator fixture** (plastics + 3 medspas, partitioned + non-partitioned) to replay against Palantir/Epic/ServiceNow/Salesforce in Task D.
5. **GRR fixture cross-link.**

---

## §5 — Guardrails
Propose-only (`GRD-036`); no promotion; no C5 contract edits; no spine/thesis prose. **Compose onto existing physics — do NOT mint new operator/node/setting/topology vocabulary** (C3.5 topology-reconciliation closure). Dedup vs the 15 contracts + C3.5/6/7 before calling anything net-new. Bounded scope (no giant corpus). Feeds Task D + the spine; does not define v4.

---

## §6 — Open (populate at run)
- Exact legal-entity/brand modeling for the 4 shapes (one entity multi-site vs multi-entity one-brand) + when partition is legally required (cosmetic vs medical; MSO/CPOM in some states — ties WI4).
- Surgical↔medspa continuity default (unified vs consent-gated) per partition posture.
- Commission/retail commerce seam (D6 amount ↔ BIZOPS payout) for medspa.
- Injectable lot/custody model reuse (Observation/OFC `custody_chain` from C3.6).
- Which broken-systems competitors to cite (Nextech/PatientNow · Boulevard/Mindbody/Aesthetic Record).

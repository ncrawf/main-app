# v4 — C3.5A: Existing Pressure-Test / Scenario Asset Inventory

Document type: `plan_or_roadmap` (C3.5 arc artifact A) · Authority: `analysis_nonbinding` (`GRD-036` — gated pressure/evidence, not auto-canon)
Status: `populated_G1` 2026-06-13 (by the C3.5 pressure-test agent; Gate 1 / Reality-Field). Prior state `shell_pending_population`.
Gate: **G1 (Reality-Field)**. Purpose: inventory + reuse-assess existing OMNI pressure-test/scenario assets BEFORE creating any new ones — so C3.5D reuses a proven PATTERN, not a reinvented one.
Spec: `v4_C3_5_hospital_ehr_gravity_pressure_test_plan.md` · Kickoff: `v4_C3_5_KICKOFF_PROMPT.md`.

> Reuse PATTERN/FORMAT, not stale content. None of the existing corpora cover hospital-grade care-setting depth (that gap is §3 — the reason C3.5 exists).

---

## 1. Existing assets (inventory)

Format columns: path · what it is · format/pattern · still-current? · reuse verdict.

### 1.1 Scenario / pressure-test corpora (the closest precedents)

| asset | what it is | format / pattern | current? | reuse verdict |
|---|---|---|---|---|
| `doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md` | the **"100 cases"** bank — failure-mode pressure tests for LI doctrine, grouped by category (A AI-safety/autonomy/model-governance · + permission/provenance, candidate-vs-commit, D5/D6/D7 ownership, contact-load/suppression, authority/audit/degraded-mode) | per-case **`N) title → Risk: … → Pass condition: …`** (a crisp, evaluable conformance test per case) | current (appendix-only evidence; non-binding) | **reuse as FORMAT** — the *pass-condition* crispness is the gem; content is LI-specific (wrong content for hospital gravity). The HCASE schema (§2) adopts its pass-condition discipline. |
| `evidence/omni_field_cases.md` | the canonical **growable `FIELD-NNN` corpus** (real-world cases that pressure-test thesis/contracts/build) + a full **Operating Contract** (purpose/what-belongs/what-doesn't/entry-format/lifecycle/append-rules/authority-boundary/catalog+read-graph/stop-proof) | per-case **`FIELD-NNN`** block: `case_type · source/provenance · summary · why_it_matters · thesis/domain relevance · affected_domains · required_future_handling · linked_open_review · status` | current (`active`, append-only; FIELD-001 = Alec longitudinal-signal case) | **reuse as the DURABLE-CORPUS pattern** — HCASE adopts its monotonic-id + operating-contract + `affected_domains`/`linked_open_review` discipline so the library is re-runnable, not chat. (Note: `FIELD-*` = *observed* real cases; `HCASE-*` = *constructed* hospital-gravity scenarios — sibling corpora, not the same file.) |
| `audits/2026-05-02_hybrid_care_delivery_stress_test.md` | hybrid (async + in-person) care-delivery stress test | scenario-walk + stress narrative | current (evidence) | **precedent** — closest existing care-delivery stress test; cite as prior pattern; does NOT reach inpatient/acute depth. |
| `audits/2026-04-30_system_pressure_test.md` · `2026-04-30_adversarial_slice_pre_runtime.md` · `2026-04-30_dynamic_behavior_pre_runtime.md` · `2026-05-01_dynamic_behavior_pressure_test_post_marketing.md` · `2026-05-01_dynamic_behavior_verification_pass.md` · `2026-05-01_marketing_system_pressure_test.md` | system / adversarial / dynamic-behavior / marketing pressure-tests | mixed (probe → expected-behavior → gap) | current (evidence) | **precedent for the red-team tier** — adversarial-slice is the closest existing "breaker" pattern; reuse its break-the-system stance for the ≥10 red-team HCASEs. |
| clinical-assertion cluster: `audits/2026-04-27_clinical_assertion_layer_audit.md` (+ `_followup_audit` · `_analytics_audit` · `concept_naming_and_assertion_builder` · `authority_vs_longitudinal_confidence` · `acute_states_promotion_threshold` · `static_clinical_facts_audit`) · `2026-04-27_intake_coherence_pressure_test.md` · `2026-04-30_free_text_intake_pressure_test.md` · `2026-04-30_inbound_narrative_atomization_pressure_test.md` · `2026-04-30_retrievability_pressure_test.md` | domain-deep pressure tests (clinical-assertion / intake / narrative / retrieval) | issue → analysis → patch/invariant | current (mostly already folded into contracts as evidence) | **precedent** — show the existing depth bar for a SINGLE domain; hospital gravity is the cross-domain version. Not reusable as content. |
| `designs/2026-05-17_omni_scheduling_architecture_pressure_test.md` + `designs/day_0_scheduling_rule_matrix/` (Rounds 1–5 + closure verdict) | the scheduling architecture pressure-test + the rule-matrix arc; carries the **27 + 45 workflow scenarios** (build-validation corpus, incl. multi-location-federation, no-show, package-redemption, lab→result→followup, cross-state, provider-coverage) | scenario suite + round-based adjudication | current (D5/D3 evidence; pre-rule-matrix `encounter_container` framing superseded) | **precedent for a scenario-suite that validates a model survives real flows** — the methodological ancestor of the HCASE corpus; content is outpatient/scheduling, not inpatient. |
| `audits/2026-06-12_care_lanes_pressure_test_acute_surgical_pt_clinic_snf_ecf.md` | **the raw Nick⟷Knox care-lane discussion** (acute inpatient · ASC · PT · clinics · SNF · ECF; the "make the EMR less central / hospital-compatible-not-native / care_context modeling" reframe) | `raw_unprocessed` verbatim drop (§1 immutable; §2 empty — "work goes here") | current — **explicitly slated for processing in C3.5** | **the C3.5 input, NOT a reusable pattern** — this arc IS its processing home. Its care-setting list seeds the Coverage Manifest strata; its reframe is a *pressure lens*, reconciled (not canon) per `GRD-036`. |
| `audits/2026-06-03_outward_omni_agentic_interop_pressure_test.md` · `2026-06-03_federation_universal_trust_topology_pressure_test.md` | the two 06-03 pressure tests (already in v3 lineage) | structured pressure-test | current (evidence; landed in v3 §A/§C) | **precedent** for outward/trust pressure-testing; not care-setting content. |
| GLP1/TRT/HRT first-slice + future-blocks long-term + system-map-alignment audits (`2026-04-30_glp1_first_slice` · `2026-04-30_trt_first_slice` · `2026-05-01_female_hrt_first_slice` · `2026-05-10_future_blocks_long_term_pressure_test` · `2026-05-10_system_map_alignment_pressure_test`) | per-pathway first-slice + long-horizon pressure tests | slice walk-through | current (evidence) | **precedent** — pathway-depth, not care-setting-depth; confirms the medspa/async wedge is well-covered and the hospital field is not. |

### 1.2 Operating-contract / governance precedent (HOW a durable corpus is governed)
- `evidence/omni_field_cases.md` **Operating Contract** + Control-Plane `D0TIER0-GRD-002` (Governed Stream Artifact Operating Contract Rule) — HCASE-D is a governed-stream artifact (append-only, re-runnable) and must carry the same 9-element operating-contract discipline when populated at G2.

### 1.3 The reality-field side has NO existing OMNI asset (by design)
- There is **no OMNI artifact that defines hospital-grade EHR/care-platform reality** — and there must not be one built from OMNI docs (`GRD-036` + kickoff method §2: *OMNI doctrine may COMPARE, never DEFINE hospital reality*). B is researched from cited public/industry references; A confirms the absence so B's external sourcing is justified, not lazy.

## 2. Pattern to reuse (the `HCASE-NNN` schema decision)

**Decision: `HCASE-NNN` blends the two proven OMNI patterns** — the `FIELD-NNN` durable-corpus discipline (monotonic id, operating contract, `affected_domains`, `linked_open_review`, lifecycle status) + the LI-bank per-case **pass-condition crispness** — and adds the C3.5-specific stratum/tier/trace fields the kickoff + Coverage Contract require.

```
HCASE-NNN
  title:                short scenario name
  care_setting_stratum: facility/care-setting axis value (ED · ICU · OR · PACU · cath · OB/L&D ·
                        inpatient-psych · inpatient-rehab · ASC · community-hosp · critical-access ·
                        acute-inpatient · SNF · ECF/LTC · LTACH · PT/OT/ST · outpatient-specialty ·
                        medspa/procedural · derm · home/remote · phase-I/trial · cross-setting-transition)
  workflow_stratum(s):  service-line/department/workflow axis value(s) (ADT/registration/bed ·
                        scheduling/capacity · nursing · physician/APP · CPOE/orders/order-sets · labs ·
                        pathology · radiology · pharmacy · eMAR/med-admin · procedures · OR/anesthesia ·
                        discharge-planning · case-mgmt/social-work · referrals/follow-up · infection-control ·
                        quality/reporting · compliance/legal-record · HIM · billing/coding/rev-cycle ·
                        prior-auth/payer · inventory/supplies/implants · interfaces/HL7/FHIR ·
                        portal/messaging/family · staffing/credentialing/role-authority · security/privacy/audit)
  actors_authority:     who participates + what authority each carries (→ map C)
  situation:            the concrete scenario (what happens, in care-reality terms)
  risk_profile:         clinical · operational · compliance/legal · billing risk the case stresses
  cross_system_deps:    vendor / external-lab / imaging / device / interface dependencies
  expected_hard_parts:  where hospital physics is expected to strain or break OMNI
  tier:                 broad | deep-trace | red-team
  omni_touched:         OMNI domains / control-planes plausibly touched (Identity/RBAC/Federation/
                        D3/D5/D6/D7/Observation/Clinical-Memory/CNS/Messaging/Intake/OFC/BIZOPS/Settings/
                        Surfaces/Projections/AI-substrate/Build-OS)
  pass_condition:       (LI-bank discipline) the conformance bar — what OMNI must do for this case to "pass"
                        (deep-trace cases get the full 9-question trace in E; broad cases carry the bar only)
  status:               active | resolved | superseded | archived
```

**Why this shape (not a new invention):** it keeps HCASE *re-runnable* ("how did OMNI do against the N cases?" — the FIELD/LI-bank promise), *stratified* (Coverage Manifest can compute coverage directly from `care_setting_stratum` + `workflow_stratum`), *tiered* (broad → ≥25 deep-trace → ≥10 red-team), and *traceable to OMNI* (`omni_touched` feeds E + F). The operating-contract for the corpus is added at G2 when D is populated (per `D0TIER0-GRD-002`).

## 3. Gaps confirmed (where NO existing scenario coverage exists)

The existing corpora are **outpatient / async / medspa / scheduling / intake / messaging / LI** centered. Confirmed **zero or near-zero existing OMNI scenario coverage at care-setting depth** for:

- **Acute inpatient** (admission→rounding→discharge), **ED** (triage/boarding/throughput), **ICU** (high-acuity charting/flowsheets), **inpatient OR / anesthesia / perioperative**, **PACU**, **cath/interventional lab**, **OB / L&D / postpartum**, **inpatient psych/behavioral** (legal hold/observation/safety), **inpatient rehab**.
- **ASC / outpatient surgery**, **community hospital**, **critical-access/rural**, **specialty hospital**, **LTACH/post-acute**.
- **SNF / ECF / LTC** (MDS assessment cadence, transfer/discharge med-reconciliation).
- **Cross-setting transitions of care** (ADT, transfer, discharge→post-acute handoff) — the single most under-covered + highest-risk stratum.
- **Hospital-specific workflows with NO OMNI scenario today:** ADT/registration/bed-management · CPOE order-sets · closed-loop med admin (CPOE→pharmacy-verify→ADC→BCMA→eMAR) · inpatient pharmacy · pathology · radiology operations · discharge planning · case-management/social-work · HIM/legal-record · inpatient rev-cycle/coding · prior-auth · implant/device/supply tracking · HL7/ADT interfaces.
- **Thin (pathway-deep but not care-setting-deep):** derm, medspa-procedural at procedural-setting depth, PT/OT/ST.

This gap IS the C3.5 mandate: the existing depth bar was built for the outpatient/async wedge; hospital-grade gravity has never been scenario-tested.

## 4. Reuse decisions

1. **Reuse the `HCASE-NNN` schema (§2)** — blend of FIELD-NNN (durability/operating-contract) + LI-bank (pass-condition) + C3.5 stratum/tier/trace fields. **Do not** invent a fresh format.
2. **Reuse the FIELD-NNN operating-contract discipline** for the D corpus (governed-stream artifact; added at G2 per `D0TIER0-GRD-002`).
3. **Reuse the adversarial-slice stance** (`2026-04-30_adversarial_slice_pre_runtime`) as the model for the ≥10 red-team/breaker HCASEs.
4. **Reuse the scheduling rule-matrix scenario-suite method** (`day_0_scheduling_rule_matrix/`) as the "does the model survive real flows" precedent — applied cross-domain instead of single-domain.
5. **Seed the Coverage Manifest strata** from the care-lanes 06-12 setting list + the plan's two-axis taxonomy — but **discover the full taxonomy** (strata are the minimum, not the ceiling).
6. **Create-new (no reusable content exists):** the entire hospital-gravity reality map (B), actor/authority map (C), and the HCASE corpus content (D) — because §3 confirms the field is uncovered. Reuse is at the **pattern/governance** level only.

---

### Stop-proof (G1 partial)
A is populated. Next within G1: B (cited hospital/EHR reality map) → C (actor/authority map), then STOP at the G1 gate for review. No scenarios (D), traces (E/F), or handoff (G) until G1 is reviewed. Authority `analysis_nonbinding`; reuses pattern, binds nothing (`GRD-036`).

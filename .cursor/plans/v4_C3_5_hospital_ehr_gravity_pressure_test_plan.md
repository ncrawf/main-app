# v4 — C3.5 Plan: Hospital-Grade Care-Platform / EHR-Gravity Pressure-Test Arc

Document type: `plan_or_roadmap` (the dedicated plan/spec for the C3.5 arc; NOT thesis prose, NOT the work product — the SEPARATE pressure-test agent produces the work into the A–G artifacts)
Authority: `analysis_nonbinding` — a process/spec doc; binds nothing; promotes nothing (`GRD-036`).
Status: `draft_for_review` 2026-06-13 — arc not yet run. Sets up C3.5; the separate agent starts at **G1**.
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` → phase **C3.5** (between C3.1 and C4). Gate state at setup: C2 CLOSED · C3 PASSED · C3.1 PASSED · C4.0 ACCEPTED.
Kickoff prompt for the separate agent: `v4_C3_5_KICKOFF_PROMPT.md`. Outputs: `v4_C3_5A..G`.

## Mission
Test OMNI against **hospital-grade care-platform / EHR gravity** the way a serious readiness program does it — **reality field first, then test OMNI against it** — and return structured, re-runnable artifacts that the v4 continuity agent must use at C4. Answer *"where does OMNI stand vs hospital-grade gravity, and what must v4 carry / preserve / not-foreclose."* It is **v4-FORMING**: it shapes, constrains, and EXPANDS the C4 spine; it does not write C4 prose and does not alone define v4.

## Framing (calibrated — neither timid nor delusional)
- **Epic = benchmark / pressure-field, NOT a ceiling.** Do not write an Epic-clone spec; do not declare Epic replacement today; do not design as if it's impossible.
- **Posture is tested, not assumed.** OMNI is *replacement-shaped but wedge-disciplined* — may begin as overlay/alternative/progressive-replacement; the arc decides per segment where overlay / wrap / progressive-replacement / replacement-shaped-slice / primary-platform / **match-or-exceed hospital-grade EHR/care-platform capability over time** / new-category / non-goal is credible.
- **EMR-Authority Runway / Dragon's-Egg constraint:** "overlay" is a go-to-market posture, NOT an architecture ceiling. Even where OMNI starts beside an incumbent, v4 must preserve a credible path to deeper authority (system-of-record · documentation/legal-record · orders/results · medication administration · billing/compliance · cross-department operational control). **Wedge ≠ ceiling.** Ties to the existing thesis dragon's egg (v2/v3 §6.1); preserve + pressure-test that runway, do not design it away.
- **Symmetric honesty (binding):** **false confidence is failure AND false retreat is failure.** Overclaiming Epic-readiness fails; timidly retreating to "just an overlay/intake/coordination layer" and dodging the EMR-authority runway also fails. *We are not claiming Epic replacement; we are refusing to design as if Epic replacement is impossible.*
- **Scope guard:** not a mega-thesis, not an acute pivot, not a build commitment. Outpatient/async stays the near-term wedge unless C4 says otherwise — the wedge exists to preserve the runway.

## Method (bidirectional; reuse the pattern, don't reinvent)
1. **Start from current OMNI understanding** — C2 source base, C3 method note, C3.1 lens audit, C4.0 depth protocol, System Map vNext, live `contracts/`, Evidence-Plane/Knowledge-Reservoirs, Build-OS, federation, AI substrate, + **under-the-hood reality** (`supabase/migrations/`, app code, `D0THES-CNF-011` parked-scheduling caveat).
2. **Research hospital/EHR gravity independently** — from **cited public/industry references** (ONC certification criteria; CMS hospital medical-record requirements; USCDI data classes; FHIR workflow resources e.g. MedicationRequest vs MedicationAdministration; KLAS/market context). **OMNI doctrine may COMPARE, but must NOT DEFINE hospital-grade reality.**
3. **Compare OMNI against that reality without flattering OMNI.**
4. **Apply the action-loop / execution-substrate test only after the reality map exists** (it is the inner test, not the arc).
5. **Preserve the distinction** between doctrine · current implementation · required hospital-grade capability · v4 implication · downstream build.
6. **Reuse existing pressure-test pattern** (don't recreate): seed from `doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md` (the existing **"100 cases"** bank — FORMAT/pattern, wrong content), `evidence/omni_field_cases.md` (`FIELD-NNN` growable corpus + operating contract), the `audits/` scheduling/intake/adversarial/system pressure-tests + the `designs/day_0_scheduling_rule_matrix/` suite, and `audits/2026-06-12_care_lanes_pressure_test_…` (raw care-lane discussion).

## Internal gates (NOT one uninterrupted A–G run)
- **G1 — Reality-Field Approved:** A–C only (existing-asset inventory + hospital/EHR reality map + actor/authority map). Do not generate scenarios until reviewed.
- **G2 — Scenario-Library Approved:** D only; **blocked until the Coverage Manifest passes** (below). Do not run deep traces until reviewed.
- **G3 — Trace + Gap Approved:** E–F (deep traces + two-dimension disposition).
- **G4 — Handoff Accepted:** G (v4 implications + handoff).
- **False confidence at any gate = failure.** (Prevents: bad reality map → 100 cases built on it → polished-but-wrong handoff.)

## Coverage Contract / Manifest (mandatory before G2)
The agent discovers the FULL taxonomy, but artifact D must open with a **Coverage Manifest** proving minimum representation across known high-risk strata (so the brutal ones aren't underweighted), on TWO axes:
- **Facility / care-setting:** outpatient specialty · medspa/procedural · derm · ASC/outpatient-surgery · community hospital · critical-access/rural · specialty hospital · acute inpatient · ED · ICU · inpatient OR · PACU · cath/interventional · OB/L&D/postpartum · inpatient psych/behavioral · inpatient rehab · PT/OT/ST · SNF · ECF/LTC · LTACH/post-acute · home/remote · phase-I/clinical-trial · cross-setting transitions.
- **Service-line / department / workflow:** ADT/registration/bed · scheduling/capacity · nursing · physician/APP · CPOE/orders/order-sets · labs · pathology · radiology/imaging · pharmacy · eMAR/med-admin · procedures · OR/anesthesia/perioperative · PACU · cath-lab docs · OB/L&D · psych safety/legal/observation · rehab/therapy docs · discharge planning · case-mgmt/social-work · referrals/follow-up · infection control · quality/reporting · compliance/legal record · HIM/medical-records · billing/coding/rev-cycle · prior-auth/payer · inventory/supplies/implants/devices · vendor/external-lab/imaging deps · interfaces/HL7/FHIR/APIs · portal/messaging/family comms · staffing/HR/credentialing/role-authority · security/privacy/audit/access.
- **Acceptance minimums:** every facility + every major workflow stratum has ≥1 case; high-risk strata have multiple; **≥25 cases selected for deep tracing; ≥10 red-team/breaker cases**; each deep-trace case names the OMNI domains/control-planes touched; any uncovered stratum is explicitly deferred / out-of-scope / open-review. (These are MINIMUM known-risk strata, not the full taxonomy — the agent extends.)

## Disposition lens (two independent dimensions — artifact F)
- **(i) Market posture** (per segment): overlay-beside-incumbent · wrap/integrate · progressive-replacement · replacement-shaped slice · primary-platform candidate · match-or-exceed hospital-grade EHR/care-platform capability over time · new-category · explicit non-goal. Fields: segment · incumbent class (Epic / Oracle-Health-Cerner / Meditech / legacy / fragmented) · pain profile · price/implementation sensitivity · regulatory/operational burden · replacement difficulty · overlay opportunity · OMNI advantage · OMNI missing reqs · likely posture · v4 implication.
- **(ii) Architecture obligation** (independent of GTM posture): build-now · design-now/build-later · **preserve-optionality (authority runway)** · requires-new-primitive/control-plane · requires-contract/domain-expansion · defer-C5 · open-review · do-not-import.
- The two are independent: "overlay GTM" must NOT imply "overlay-grade architecture."

## Artifacts (A–G; shells pre-created; the separate agent populates)
- **A `v4_C3_5A_existing_pressure_test_inventory.md`** — inventory + reuse-assessment of existing OMNI pressure-test/scenario assets BEFORE creating new (LI 100-case bank, field_cases, scheduling/intake/adversarial/system audits, day-0 scheduling suite, care-lanes 06-12). What's reusable as pattern/seed/precedent.
- **B `v4_C3_5B_hospital_ehr_reality_map.md`** — researched hospital-grade EHR/care-platform capability families, **cited from public/industry references**, not memory and not OMNI docs.
- **C `v4_C3_5C_actor_department_authority_map.md`** — actors/departments/personnel/vendors/authority boundaries/compliance surfaces/handoffs/operational dependencies.
- **D `v4_C3_5D_high_pressure_scenario_library.md`** — opens with the **Coverage Manifest** (two-axis strata + per-stratum status), THEN the dedicated **`HCASE-NNN` corpus (~100+, tiered:** broad → ≥25 deep-trace selections → ≥10 red-team extremes), each case mapped to its strata; reuse the `FIELD-NNN`/100-case-bank format so it is durable + re-runnable.
- **E `v4_C3_5E_deep_trace_matrix.md`** — the execution/action loop (`source event → evidence/artifact → observation → clinical assertion → candidate → resolver/policy → authority gate → action envelope → owning-domain commit → documentation/proof → obligation/follow-up → learning/eval`; the 9-question test) applied to the ≥25 deep-trace subset + ≥10 extremes; each names OMNI domains/control-planes touched.
- **F `v4_C3_5F_omni_disposition_gap_matrix.md`** — the two-dimension classification (market posture × architecture obligation) per capability/scenario.
- **G `v4_C3_5G_v4_implications_and_handoff.md`** — synthesis for the v4 continuity agent: what C4 must carry, contract pressure, primitive gaps, C5 deferrals, open-review, what NOT to import, and the honest readiness verdict (cites A–F).

## Agent separation
The arc is run by a **SEPARATE pressure-test agent** (kickoff `v4_C3_5_KICKOFF_PROMPT.md`). The current **v4 continuity/integration agent** preserves the runway, maintains source discipline, and later integrates G into C4 planning. The pressure-test agent must NOT author C4 prose, edit contracts, or restructure the repo.

## Output routing
C3.5 outputs feed C4. They may reshape the C4 section map, v4 positioning, the open-review queue (`08`), anti-patterns, the contract-pressure list, and C5 deferrals. They do NOT become C4 prose automatically. Per `GRD-036`, outputs are gated pressure/evidence, not auto-canon; per C4.0, depth must be preserved on integration.

## Acceptance criteria
C3.5 is accepted only when a reviewer can point to: the existing-asset inventory (A); the cited hospital/EHR reality map (B); the actor/authority map (C); the Coverage Manifest + ~100+ HCASE library (D); the deep-trace matrix (E); the two-dimension disposition (F); the v4 handoff (G) with an explicit, honest readiness verdict. **The reality map starts from hospital/EHR reality (cited), not OMNI optimism; existing corpora are inventoried before new ones; doctrine is distinguished from shipped; thesis implications are distinguished from build requirements; posture is tested not assumed; hospital complexity is not collapsed into the 9-question loop. False confidence AND false retreat both fail.**

## Out of scope (here)
No C4 prose, no contract edits, no repo restructure, no matrix RUN by this continuity agent. Whether OMNI is hospital-ready vs replacement-shaped-in-slices vs not-ready is the arc's OUTPUT (G), not assumed here.

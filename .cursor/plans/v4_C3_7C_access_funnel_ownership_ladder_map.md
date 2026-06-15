# v4 — C3.7C: Access Funnel + Ownership-Ladder Map (the centerpiece)

Document type: `analysis` (C3.7 arc — G1 reality-field, artifact C) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1_pending_review` 2026-06-14. Synthesizes A (reuse) + B (cited reality) into the access funnel, the four actor lenses, the firewall placement, and the per-system ownership ladder. **Must be strong before G2/D (no recruitment fan fiction).**

## §1 The access funnel (the C3.7 spine — upstream of C3.6's consent→execution)
`public_listing/transparency → interest capture → outside-record ingestion → source-backed pre-screen (AI candidate) → eligibility_gap resolution → research-team triage (human commit) → oncologist referral (cross-operator) → sponsor/site handoff + slot/accrual → [consent → screening] → enroll | screen-fail | waitlist → navigation + follow-up`
- **Seam to C3.6 (refined — permission ladder, not "any consent"):** there is a **`research_permission_stack`** — contact → upload-records → HIPAA/record-release → pre-screen auth (or IRB waiver) → share-identifiable-with-site → **protocol informed consent** → screening-procedure consent. **C3.7 owns access/pre-screen/navigation through the handoff; C3.6 takes over at protocol-governed informed consent + screening + execution.** The boundary is the transition INTO protocol informed consent, not the first checkbox.
- **TWO entry modes (§10):** (a) **patient/family-initiated** (front door); (b) **care-event-triggered** — an ordinary care event (radiology/path/genomics/progression/refractory) raises a governed `research_watch_trigger` (a **subscription on OMNI's EXISTING proactive-signal substrate**, NOT a trial-only object), routing FIRST to provider/research-team review — never straight to patient or sponsor. Governance ladder: latent-signal → review-candidate → source-backed pre-screen → patient-facing (only after permission-stack + display-policy + misconception-guard + human review). Patient may opt out of watch.
- **Honest-null is a terminal, not a failure:** the funnel can legitimately end at **"no appropriate trial → SOC is better"** or **"palliative/hospice is the honest answer."** This output is first-class and **never scored as lost accrual.**
- **Longitudinal:** non-match is not final — `standing_match` re-checks as the patient progresses / new mutations surface / cohorts+slots open ("we'll keep watching and tell you"). Substrate-remembers-the-patient; search tools can't.
- **Candidate≠commit law (CNS):** AI pre-screen and matching only ever produce a **`trial_match_candidate`**; a human research team (coordinator/PI) commits the screen/enroll. **OMNI never auto-enrolls and never auto-recommends-for-accrual.**

## §2 The four actor lenses (each a Surface/Projection, owning no truth — `D0THES-DEC-033`)
- **Patient / family:** "I have cancer — what options exist? what records do you need? what trials are open? what am I missing? who reviews me? what happens next / if I screen-fail?" → `research_intake_session` + `record_ingestion_packet` + `trial_match_candidate` + `research_navigation_obligation` + `patient_family_trial_conversation`.
- **Oncologist (community or academic):** "which of my panel might qualify? which trials are open? which gaps block screening? what can I refer?" → panel-match projection + `oncologist_referral_candidate` (cross-operator) + `eligibility_gap`.
- **Research site:** "which candidates are in pipeline? which records are missing? which cohorts are open? which sponsor obligations? which screen-fails and why?" → `accrual_state` + `site_trial_capacity` + screening_packet + screen-fail reasons.
- **Sponsor / pharma:** "which sites are accruing? which cohorts are slow? which patients in pre-screen? which source evidence supports eligibility? which constraints block enrollment?" → accrual projection + source-authority-backed eligibility evidence + query loop. **Sponsor sees accrual + eligibility evidence; sponsor does NOT see un-consented identified patient care truth** (knowledge_partition + firewall).

## §3 Where the load-bearing firewall sits (`accrual_incentive ≠ care_recommendation`)
- **Policy gate (CNS Network-Governance):** any candidate/recommendation surfaced to patient/oncologist is computed from **clinical fit + equipoise**, NEVER weighted by site/sponsor payment or accrual pressure. The accrual economy is **read-only to the recommendation engine.**
- **Billing firewall (D6 `payment_care_firewall` + coverage-analysis grid):** every protocol item is sponsor XOR insurer (CMS NCD 310.1); **double-billing structurally prohibited**; investigational item never billed to patient; PI billing-compliance attestation (RBAC T4).
- **Disclosure:** site/sponsor financial relationship disclosed to patient (COI); recruitment materials IRB-approved; consent gates screening procedures. **A surfaced trial option must carry its provenance + financial-relationship disclosure.**
- **OMNI's OWN economics are in scope (sharpened):** if OMNI is paid by sites/sponsors on enrollment, it has the site's conflict. The recommendation/display engine must be **economically blind** — structurally unable to know/weight who pays OMNI. This is the load-bearing trust claim.
- **This is the disqualifier test:** if any design path lets accrual incentive (site's OR OMNI's) bend what a patient is shown/recommended, C3.7 fails its own ethics gate. The substrate must make that path *unrepresentable*, not merely discouraged.
- **The access-integrity plane (opposite the accrual economy):** `trial_option_display_policy`/`match_explanation` · `recruitment_content_gate`/`therapeutic_misconception_guard` · `candidate_visibility_scope` · `trial_support_offer`+anti-inducement gate · `cohort_slot_state` · `honest_null_terminal` · `standing_match` · equity-as-first-class. The firewall referees integrity vs accrual. (Members are reuse-first pressure-candidates — see §4.)

## §4 Candidate object map (reuse vs net — dispositioned at G3, listed here for D)
| Candidate | Likely home (G3 to confirm) | Reuse / net |
|---|---|---|
| `public_trial_listing` / `trial_catalog` | projection of C3.6 `trial_protocol` (Surface/Projection plane) | reuse-projection |
| `research_intake_session` | Intake extension (research mode: consent-before-screen, no inducement) | extend |
| `record_ingestion_packet` | D7 (request+receive+verify outside records) → `source_authority_map` | extend |
| `trial_match_candidate` + `eligibility_gap` | CNS candidate × C3.6 `trial_protocol` I/E × `source_authority_map` | **net-new candidate kind** |
| `screening_packet` | D7 docs bound to `source_authority_map` | extend/compose |
| `research_navigation_obligation` | OFC `care_obligation` subtype | extend |
| `oncologist_referral_candidate` | Federation grant + CNS candidate (cross-operator) | extend/compose |
| `accrual_state` / `site_trial_capacity` | `REV-174` Operating-Intelligence projection (vs net object?) | extend/projection |
| `sponsor_site_contract` / `payment_schedule` | D6 + BIZOPS + P35, firewalled (§3) + coverage-analysis grid | **net-new (firewalled)** |
| `patient_family_trial_conversation` | Messaging scoped conversation + navigation obligations + IRB-material constraints | extend |
| `screen_failure_state` / `waitlist_state` | trial_protocol/accrual + obligation | extend |
| `research_permission_stack` | D7 consent + Federation grants + RBAC (the permission ladder) | extend/compose |
| `trial_option_display_policy` / `match_explanation` | CNS Network-Governance policy + the §3 firewall (economically blind) | extend (policy) |
| `recruitment_content_gate` / `therapeutic_misconception_guard` | Messaging 8-gate + IRB-approved-material + D7 | extend (gate) |
| `candidate_visibility_scope` | `knowledge_partition` (C3.6) + RBAC + Federation grants + D7 | extend/compose |
| `trial_support_offer` + anti-inducement gate | D6 + IRB anti-inducement gate | **net-new (firewalled)** |
| `cohort_slot_state` / `trial_availability_state` | freshness/source-authority object near `trial_protocol`/`accrual_state` | **net-new (freshness truth)** |
| `honest_null_terminal` | CNS candidate-outcome + obligation (non-failure terminal) | **net-new (semantics)** |
| `standing_match` (longitudinal re-match) | OFC `care_obligation` (longitudinal) + CNS | extend |
| `cancer_care_navigation` | CNS navigation + OFC obligations + honest-null + SOC/palliative/second-opinion/tumor-board | extend/compose (the trust anchor — NOT just trial-match) |
| `trial_supply_feed` / `site_trial_inventory` | P35 ingestion + C3.6 `trial_protocol` + `cohort_slot_state` | extend/compose (the SUPPLY side) |
| `screening_yield_funnel` / `candidate_pipeline_state` | `REV-174` Operating-Intelligence projection | projection (1,000→…→1 + honest-nulls) |
| `research_watch_trigger` | subscription on existing proactive-signal substrate (C3.5 P13/P24 + CNS coherence + LI ladder) | extend/subscribe — **NOT a new object** |
| `model_to_trial_signal` / `model_match_candidate` / `translational_model_evidence` | C3.6 `source_authority_map` + CNS candidate + P35 (model repo) | **small net-new + extend** (2040 layer) |
| `biospecimen_lineage` / `specimen_use_consent_scope` | C3.6 `custody_chain` + `chain_of_identity` + D7 consent | extend — **NOT re-mint** |
| `pharma_model_access_contract` | D6 + Federation + P35, firewalled (§3) | extend |
| `line_of_therapy_state` · `molecular_readiness_state` · `trial_option_preservation_signal` · `trial_preference_profile` | **GENERAL CARE substrate (Clinical Memory + Observation + CNS) — C3.7 SUBSCRIBES, does NOT own** | reuse (care-quality, NOT research) |

## §5 Per-system / per-actor ownership ladder (anti-diminishment; current → target)
| Incumbent / actor | Today (typical) | OMNI current rung | OMNI target rung |
|---|---|---|---|
| **ClinicalTrials.gov / NCI registry** | public search-then-beg | read/ingest listings | **OMNI owns the governed access environment**; registry = a feed/rung |
| **AI matching vendors** (TrialMatchAI / CTPM / Deep-6-class) | point feature, no governance | reference/compose | **swallowed** — matching is an OMNI candidate engine (source-backed, explainable, firewalled) |
| **CTMS / OnCore** (site ops) | site-internal accrual/ops | read/write-back (P35) | **partial-swallow** (accrual/slot/coverage-grid as OMNI Operating-Intelligence) |
| **Academic-center gatekeeping** | beg-and-plead, slow triage | n/a | **displacement** — OMNI is the transparent, source-backed triage environment |
| **Community oncology practice** (OneOncology-class) | care, limited research access | OMNI = the practice's care+research environment | **system-of-work** (the wedge: research access INSIDE community care) |
| **Research site network** (START-class) | pharma-funded accrual machine | peer / referral target | **OMNI is the access+navigation+proof layer**; site executes (C3.6); accrual economy firewalled |
| **Sponsor / pharma portal** | submission/accrual reporting rail | governed export (P35) | **durable reporting-rail role** (like C3.6's locked-dataset: a distinct plane; OMNI owns feed/provenance/accrual-truth, sponsor portal = rail) |
| **Patient / family** | search tools + cold-contact | — | **OMNI is their front door + navigator + advocate** (Hims-class ease, research-grade proof, COI-disclosed) |

## §6 The strategic frame (reject the weak version)
- **Weak (rejected):** "OMNI helps patients search ClinicalTrials.gov."
- **C3.7 frame:** OMNI is the **oncology research access environment** — a governed front door where patients/families, oncologists, research sites, and sponsors meet through **source-backed eligibility + human research-team confirmation + transparent navigation + proof**, with the **accrual economy firewalled from the care recommendation**. Hims made "start care" easy; OMNI makes "find + enter the right oncology research pathway" easy — **without lying, overpromising, inducing, or bypassing clinical/research authority.**
- **Wedge posture (plan §9):** NOT "START, buy our software." Five postures — **clinic-first** (likely strongest), patient/family front-door, research-site-network, sponsor/pharma, hospital/academic — served by **one invariant substrate** (market-posture ≠ architecture-obligation). The GTM choice is open-review, not settled here.
- **Multi-principal neutrality (the deeper firewall):** OMNI serves **opposing principals on one substrate** (patient vs clinic vs site/sponsor). Neutrality is the **architecture, not a policy**. Sharpest breaker: `clinic_retention_incentive ≠ patient_best_pathway` — honest **out-referral** must surface even when it costs the buying clinic the patient.
- **Three-sided marketplace (§11):** patient/tumor biology ↔ trial slots ↔ **translational model/evidence supply** (PDX/organoid/biospecimen). Model response = **translational evidence, NOT clinical truth**; cross-person model inference rides `chain_of_identity` (labeled analog/population evidence); model repo = P35 rung; 2040 readiness = leave-the-door-open, NOT build.
- **Super-frame (bounded):** C3.6+C3.7 are slices of a longitudinal **"tumor-biology → care → translational-evidence → research → outcomes" governed loop** — recognized as a v4/FWREG finding, NOT built in C3.7. **Care-quality primitives (line-of-therapy, option-preservation, molecular-readiness) route to the CARE substrate, not a research lane (Nick's point).**

## §7 G1 disposition (for C) + open questions to G2/G3
- **The funnel + four lenses + firewall placement + ladder are strong enough to seed D.** No recruitment fan fiction: every funnel stage maps to a reuse/extend/net candidate (§4) with a regulatory/ethical constraint (B §5) and a firewall obligation (§3).
- **Carry to G2/D as breaker families:** rare-mutation match w/ no local slot · matched-but-geographically-impossible · matched-but-insurance/SOC-workup-blocked · desperate-access vs equipoise · second-opinion-after-local-dismissal · screen-fail + re-screen · sponsor-accrual-pressure-vs-recommendation (the firewall breaker) · **OMNI-paid-per-enrollment (own-conflict breaker)** · **AI-ranks-sponsor-funded-trial-higher** · double-billing trap · COI-disclosure · vulnerable-population/health-literacy · diversity/equitable-access · cross-operator referral (community↔academic↔site) · **registry-says-recruiting-but-cohort-closed / site-not-activated / PI-says-not-open** · **therapeutic-misconception (desperate, no-SOC-left, vulnerable-to-overpromise)** · **oncologist-disincentivized-to-refer-out** · **travel/lodging-support-becomes-inducement** · **incomplete-records / patient-drops-off-after-record-request** · **family-pushes-trial-against-patient-preference** · **ECOG-too-poor / "candidate, not eligible yet"** · **honest-null ("no trial is right — SOC/palliative is honest")** · **longitudinal re-match when a slot/cohort/mutation opens** · **clinic-retention-vs-patient-pathway (buying clinic suppresses honest out-referral)** · **multi-principal conflict (patient vs clinic vs sponsor on one substrate)** · **cancer-care-navigation / second-opinion / trial-option triage (not just "find a trial")** · **supply-truth ingestion (registry vs sponsor-protocol vs site-activation vs PI-confirmation)** · **1,000-panel low-yield funnel (avoid spam / false hope) across all five §9 postures** · **care-event-triggered watch (§10: radiology lung-mass 55yo non-smoker · actionable mutation · progression on 2nd-line · inpatient refractory · ED reveals mets · disqualifying-care-order · opt-out-of-watch · watch-routes-to-oncologist-NOT-sponsor)** · **translational-model/PDX bridge (§11: model-match→trial-candidate · consent-covers-care-not-model-commercialization · mouse-responded-but-ineligible · model-says-sensitive-but-SOC-better · pharma-wants-model-biomarker-cohort · cross-person-model-inference · who-owns-the-valuable-model · model-vs-clinical-conflict · "does-mouse-result-mean-it-works")** · **care-substrate (subscribed, not owned): line-of-therapy · trial-option-preservation (steroids-before-biopsy / NGS-not-ordered / tissue-window) · molecular/tissue-readiness · preference-profile.**

## Stop / authority
- `analysis_nonbinding` (`GRD-036`); no contract edits, no net-new minted. **G1 (A/B/C) complete — STOP for trifecta review before G2/D.** Standing flag: git identity unset.

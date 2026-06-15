# v4 — C3.7F: Disposition / Gap Matrix (candidate objects vs C3.6 + the 15 contracts)

Document type: `analysis` (C3.7 arc — G3, artifact F) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G3_pending_review` 2026-06-14. Dispositions the C3.7 candidate objects + answers the plan §7 + Knox-G3 questions. Reads-with: `v4_C3_7E_deep_trace_matrix.md`, `v4_C3_7C_…map.md`, C3.6 `F`/`G`, the 15 contracts (read in C3.5 G4.1 + C3.6 G1).

## §1 Disposition ledger — the ~22 candidates collapse to a SMALL net-new set
Legend: **CONFIRMED** = already owned (cite, don't reinvent) · **EXTEND** = bounded extension of a named owner · **NET-NEW** = no owner · **ROUTE-OUT** = general care substrate (C3.7 subscribes) · **PROJECTION** = read-model (owns no truth).
| Candidate | Disposition | Owner / home |
|---|---|---|
| `trial_match_candidate` + `eligibility_gap` | **NET-NEW** | CNS candidate × C3.6 `trial_protocol` I/E × `source_authority_map` (the matching object) |
| `cohort_slot_state` / `trial_availability_state` | **NET-NEW** (freshness/availability truth) | near C3.6 `trial_protocol`; positional source-authority (site/PI/CTMS, not registry) |
| `honest_null_terminal` | **NET-NEW** (semantics) — but a **SUBTYPE of `clinical_decision_state`** (universal parent, ROUTE-OUT to v4/general-care; see G §4) | C3.7 keeps the trial-access subtype (no-trial/SOC-better/palliative-honest/standing-match-later); parent → CNS + Clinical Memory + OFC + RBAC + Messaging + D7 |
| `screening_yield_funnel` / `candidate_pipeline_state` | **NET-NEW** (PROJECTION) | `REV-174` Operating-Intelligence |
| `model_to_trial_signal` / `translational_model_evidence` / `model_match_candidate` | **NET-NEW (small, bounded; 2040)** | research-signal only; rides C3.6 `source_authority_map` + `chain_of_identity` |
| `trial_option_display_policy` / `match_explanation` | **EXTEND** | CNS Network-Governance policy + the econ-blind invariant (the firewall's display form) |
| `candidate_visibility_scope` | **EXTEND/compose** | C3.6 `knowledge_partition` + RBAC + Federation grants + D7 |
| `recruitment_content_gate` / `therapeutic_misconception_guard` | **EXTEND** | Messaging 8-gate + IRB-approved-material + D7 |
| `research_permission_stack` | **EXTEND/compose** | D7 consent + Federation grants + RBAC (the permission ladder; seam to C3.6) |
| `sponsor_site_contract` / `payment_schedule` | **EXTEND** | D6 + coverage-analysis grid (CMS NCD 310.1; sponsor XOR insurer) + `payment_care_firewall` |
| `record_ingestion_packet` / `screening_packet` | **EXTEND** | D7 + `source_authority_map` |
| `biospecimen_lineage` / `specimen_use_consent_scope` | **EXTEND** | C3.6 `custody_chain` + `chain_of_identity` + D7 consent (NOT re-mint) |
| `pharma_model_access_contract` | **EXTEND** | D6 + Federation + P35 (firewalled) |
| `oncologist_referral_candidate` | **EXTEND/compose** | Federation grant + CNS candidate (cross-operator) |
| `research_navigation_obligation` / `standing_match` | **EXTEND** | OFC `care_obligation` (longitudinal) + CNS |
| `screen_failure_state` / `waitlist_state` | **EXTEND** (enum) | trial_protocol/accrual + obligation; cohort-closed ≠ ineligible (D-175) |
| `trial_support_offer` + anti-inducement gate | **EXTEND** | D6 + IRB anti-inducement gate |
| `external_capability` (registries/CTMS/vendors/portals) | **CONFIRMED** | P35 ladder (C3.5/C3.6) — rungs, not ceilings |
| `research_watch_trigger` | **EXTEND/SUBSCRIBER** — **NOT a new object** | subscription on C3.5 P13 proactive + P24 signal + CNS coherence + LI ladder |
| `line_of_therapy_state` · `molecular_readiness_state` · `tissue_availability_state` · `trial_option_preservation_signal` · `trial_preference_profile` | **ROUTE-OUT** | **general oncology-CARE substrate** (Clinical Memory + Observation + CNS) — C3.7 subscribes, does NOT own |
| public `trial_listing` / `trial_catalog` | **PROJECTION** | governed projection of C3.6 `trial_protocol` (Surface/Projection plane) |
| economically-blind recommendation | **INVARIANT (not an object)** | structural property of CNS Network-Governance + audit (`ai_decision_log`/`trace_lineage`) |

**Tally:** NET-NEW ≈ **5–6** (match_candidate+eligibility_gap · cohort_slot/availability · honest_null_terminal · screening_yield_funnel · translational signal cluster) · EXTEND ≈ **13** · CONFIRMED/INVARIANT/PROJECTION ≈ several · **ROUTE-OUT ≈ 5** (care-substrate, not C3.7). **No domain explosion; the ~22 names collapsed as predicted.**

## §2 Key-question verdicts (plan §7 + Knox-G3)
1. **Is oncology/trial access a plausible OMNI wedge?** → **Yes — architecturally** (the substrate absorbs it with a small bounded delta + the firewall holds posture-invariant). **GTM-which-posture-first = open-review/strategic** (clinic-first likely). NOT build- or regulatory-ready as-built.
2. **`trial_catalog`/listing — in `trial_protocol` or separate?** → **PROJECTION** of `trial_protocol` (C3.6), not a separate truth store.
3. **`trial_match_candidate` — CNS/Intake/protocol candidate?** → **CNS candidate** kind, bound to `trial_protocol` I/E × `source_authority_map`. **NET-NEW.**
4. **`research_intake_session` Intake-ext? `screening_packet` D7+source_authority?** → **Yes, both EXTEND/compose.**
5. **`accrual_state`/`site_trial_capacity` — protocol/BIZOPS/Operating-Intelligence?** → **`REV-174` Operating-Intelligence PROJECTION.**
6. **`sponsor_site_contract`/`payment_schedule` — D6/BIZOPS/P35? + firewall?** → **D6 EXTEND** + coverage-grid; **firewalled** from the recommendation engine (econ-blind invariant).
7. **Patient/onco/site/sponsor-facing split?** → **Surface/Projection plane** per actor; sponsor pre-consent = aggregate/de-id only (`candidate_visibility_scope`).
8. **Is the access-integrity plane coherent + reuse or net-new?** → **Coherent layer; mostly EXTEND** (display-policy/misconception/visibility/inducement are policies/gates on CNS-gov/Messaging/knowledge_partition/D6). `cohort_slot_state` + `honest_null_terminal` are the net-new members.
9. **Economically-blind enforceable (not just policy)?** → **Yes — as a structural INVARIANT**: the recommendation engine cannot read payment facts; enforced by CNS Network-Governance + auditable `trace_lineage`. **This is the load-bearing claim and it holds across all five postures (D-254 proves academic posture too).**
10. **Care-event trigger properly homed?** → **Yes — SUBSCRIBER on existing proactive-signal substrate, not a new object.**
11. **Translational evidence bounded?** → **Yes — research-signal, never clinical truth/recommendation; cross-person via `chain_of_identity`; 2040 = leave-door-open.**

## §3 Per-system / per-actor ownership ladder (anti-diminishment; current → target)
| System / actor | Today | OMNI current rung | OMNI target rung |
|---|---|---|---|
| ClinicalTrials.gov / NCI registry | search-then-beg | read/ingest feed | OMNI owns the access environment; registry = feed/rung |
| AI matching vendors (TrialMatchAI/CTPM/Deep-6) | point feature | reference/compose | **swallowed** — matching = OMNI candidate engine (source-backed, explainable, firewalled) |
| CTMS / OnCore | site-internal accrual/ops | read→write-back (P35) | partial-swallow (accrual/slot/coverage-grid as Operating-Intelligence) |
| Matching/recruitment SaaS | enrollment-optimizer | — | displaced (they optimize enrollment-probability; OMNI optimizes patient-best, D-237) |
| Community oncology practice (P1) | care, low research access | OMNI = care+research env | **system-of-work** (the wedge) |
| Research-site network (START-class, P3) | pharma-funded accrual | peer/referral target | OMNI = access+navigation+proof; site executes (C3.6); accrual firewalled |
| Hospital/academic center (P5) | ivory-tower gatekeeping | access surface | governed access across clinics/tumor-boards; **internal-accrual firewalled (D-254)** |
| Sponsor/pharma portal (P4) | submission/accrual rail | governed export (P35) + aggregate feasibility | durable reporting-rail role; identified patient truth walled pre-consent |
| Translational model repo / PDX lab | CRO asset | P35 external-capability rung | OMNI owns the patient↔model link + evidence packet + consent scope; lab = rung |
| Patient/family | search tools + cold-contact | — | **front door + navigator + advocate** (econ-blind, COI-disclosed) |

## §4 The bounded net-new set + the load-bearing finding
- **Net-new (small):** `trial_match_candidate`+`eligibility_gap` · `cohort_slot_state`/`trial_availability_state` · `honest_null_terminal` · `screening_yield_funnel` (projection) · translational `model_to_trial_signal`/`translational_model_evidence` (bounded, 2040). **+13 extensions, 5 route-outs, several confirmations.**
- **The wedge stands on ONE invariant:** the **economically-blind, retention-blind, accrual-blind recommendation/display engine**, posture-invariant across clinic/patient/site/sponsor/academic (D-124/135/136/254). If that invariant is structural + auditable, OMNI is the access *environment*; if it leaks, OMNI is lead-gen-for-pharma. **Everything else composes.**
- **Symmetric honesty (carried):** not false-confidence ("we replace academic trial offices now") and not false-retreat ("we just surface ClinicalTrials.gov"). The ladder + firewall is the dragon's-egg: integrate as feed/rung, swallow matching+navigation+accrual-truth, keep the locked regulatory/IRB plane distinct, **never bend the recommendation.**

## §5 Open-review → owed to `08` (at C3.5/C3.6/C3.7 arc-acceptance; enumerated, not lost)
- Economically-blind engine = structural invariant: owner + enforcement mechanism (CNS Network-Governance) + audit spec.
- GTM posture-first decision (clinic-first vs other) — strategic/open-review.
- `cohort_slot_state` availability-truth owner (trial_protocol vs new freshness object).
- `honest_null_terminal` semantics owner (CNS candidate-outcome).
- Translational/model cluster owner + the cross-person `chain_of_identity` labeling rule (2040; leave-door-open).
- Care-substrate route-outs (line-of-therapy / option-preservation / molecular-readiness) → confirm homes in the CARE contracts, NOT a research lane (`D0THES-GRD-026`).
- Coverage-analysis billing-grid in D6 (sponsor XOR insurer; double-billing prohibition).

## Stop / authority
- `analysis_nonbinding` (`GRD-036`); reconciled to current draft contracts; no contract edits, no thesis prose, no row-minting. **G3 (E+F) complete — STOP for trifecta review before G4.** Standing flag: git identity unset.

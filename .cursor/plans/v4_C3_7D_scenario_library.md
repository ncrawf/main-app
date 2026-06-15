# v4 — C3.7D: Oncology Trial-Access Scenario Library — SPEC / COVERAGE CONTAINER

Document type: `analysis` (C3.7 arc — G2 scenario library) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `spec_scaffold_pending_rows` 2026-06-14. **ROWS ARE AUTHORED BY NICK + KNOX — Opus does NOT author the rows.** This file is the **spec + coverage container + row schema** (the patches from plan §3/§3.5/§6/§9 + C §1/§3/§4/§7 land here). Paste seed rows under §3.
Reads-with: `v4_C3_7_oncology_trial_access_wedge_plan.md`, `v4_C3_7C_access_funnel_ownership_ladder_map.md`.

## §1 Row schema (one compact line per scenario)
`C37-D-NNN [posture] <one-line scenario> → stage:[funnel-stage] · POST:[1–5] · INTEG:[integrity-gate(s)] · FW:[firewall stress? which] · LADDER:[current→target] · OBJ:[candidate objects pressured] · SEL:[broad|deep|BRK] · NOTE:[…]`
- **funnel-stage** (plan §0 / C §1): `listing · interest · ingest · pre-screen · match · gap · triage · referral · handoff · permission-stack · [consent-seam→C3.6] · screen · enroll · screen-fail · waitlist · honest-null · standing-match · follow-up`
- **POST** (wedge posture, plan §9): `1 clinic-first · 2 patient/family · 3 research-site · 4 sponsor/pharma · 5 hospital/academic`
- **INTEG** (access-integrity plane, plan §3.5): `display-policy · misconception-guard · visibility-scope · inducement-gate · slot-truth · permission-stack · economically-blind · navigation`
- **FW** (firewall, plan §3): does it stress `accrual≠recommendation`, `OMNI-own-conflict`, or `clinic-retention≠patient-pathway`?
- **LADDER** (C §5): current→target ownership for the incumbent/system in play.
- **OBJ**: candidate objects pressured (C §4): `trial_match_candidate · eligibility_gap · research_intake_session · record_ingestion_packet · screening_packet · research_navigation_obligation · oncologist_referral_candidate · accrual_state · site_trial_capacity · sponsor_site_contract · patient_family_trial_conversation · research_permission_stack · trial_option_display_policy · recruitment_content_gate · candidate_visibility_scope · trial_support_offer · cohort_slot_state · honest_null_terminal · standing_match · cancer_care_navigation · trial_supply_feed · screening_yield_funnel · research_watch_trigger · biospecimen_lineage · model_match_candidate · model_to_trial_signal · translational_model_evidence · specimen_use_consent_scope · pharma_model_access_contract · patient_model_feedback_loop · line_of_therapy_state · trial_option_preservation_signal · molecular_readiness_state · trial_preference_profile`

## §2 Coverage manifest (target — every cell should have rows; breaker-heavy, NOT "250 because 250")
**Families (rows ×) must cover:**
1. Public listing / transparency / trial_catalog
2. Patient/family discovery + interest capture
3. Outside-record ingestion (U-M / radiology / path / genomics) + incomplete records
4. Source-backed AI pre-screen → `trial_match_candidate` + `eligibility_gap`
5. Research-team triage (human commit) + coordinator-vs-PI
6. Oncologist referral (cross-operator) + **clinic-retention vs out-referral (FW)**
7. Sponsor/site accrual + slot/cohort + **candidate_visibility_scope (pre-consent)**
8. **Trial supply ingestion** (registry vs sponsor-protocol vs site-activation vs hold/amendment vs PI-confirmation vs geo)
9. **`cancer_care_navigation`** (second opinion · tumor board · SOC · molecular testing · palliative · trial-option triage)
10. **`screening_yield_funnel`** (1,000-panel low-yield; avoid spam/false-hope)
11. **Access-integrity** (display-policy · misconception-guard · inducement-gate · honest-null · standing-match · equity)
12. **Firewall breakers** (accrual≠recommendation · OMNI-own-conflict · clinic-retention≠patient-pathway · double-billing)
13. Permission stack / consent seam → C3.6 handoff
14. Screen-fail / re-screen / waitlist / honest-null terminals
15. Equity / health-literacy / language / vulnerable-population
16. **Care-event → research-watch trigger (plan §10)** — the SECOND entry mode: radiology/path/genomics/progression/refractory raises a governed `research_watch_trigger` (subscription on existing signal substrate); routes to provider/research-team FIRST, never patient/sponsor; opt-out; honest-null valid.
17. **Translational Model / Biospecimen / PDX-Organoid bridge (plan §11)** — the THIRD supply side: model-match→trial-candidate; specimen consent/commercialization; mouse-responded-but-ineligible; model-says-sensitive-but-SOC-better; pharma-wants-model-biomarker-cohort; cross-person-model-inference (`chain_of_identity`); model-vs-clinical-conflict; "does-mouse-result-mean-it-works"; **guardrail: model response = translational evidence, NOT clinical truth.**
18. **Care-substrate capability families (plan §12 — SUBSCRIBED, not C3.7-owned):** `line_of_therapy_state` · `trial_option_preservation_signal` (steroids-before-biopsy / NGS-not-ordered / tissue-window-missed) · `molecular_readiness_state`/`tissue_availability_state` · `trial_preference_profile`. *(These are 2040-care-quality primitives; route to Clinical Memory + Observation + CNS — pressure them here, but they are not "research" objects.)*

**Two entry modes (mandatory):** patient/family-initiated AND care-event-triggered (family 16). **Posture coverage:** every family pressured across **all five §9 postures** where applicable (don't author only the START posture). **Object-proliferation discipline:** rows pressure candidates; G3 collapses them to a small net-new set + extensions — don't presume 20 new objects.

## §3 SEED ROWS — INGESTED + MAPPED (Opus 2026-06-14; 250 rows, IDs preserved, 0 omitted)
Tag codes: P=posture(1 clinic·2 patient/family·3 site·4 sponsor·5 hospital/academic) · S=funnel-stage · I=integrity-gate(PS permission-stack·DP display-policy·MG misconception·VS visibility·IG inducement·ST slot-truth·EB econ-blind·NAV navigation) · FW=firewall(acc accrual≠rec·own OMNI-own-conflict·clinic clinic-retention·bill double-bill/coverage·–) · OBJ=candidate objects · SEL=broad|deep|BRK|BRK* (BRK*=core deep-trace/E target). '≈' = near-dup cross-ref (kept, not deleted).

### A. Patient/family front door + cancer-care navigation
- C37-D-001 newly dx lung; MDA/local/trials nav · P:2 · S:nav · I:MG,NAV,DP · FW:– · OBJ:cancer_care_navigation,research_intake_session · SEL:BRK*
- C37-D-002 daughter re mom (mets pancreatic), no auth · P:2 · S:permission · I:PS · FW:– · OBJ:research_permission_stack,patient_family_trial_conversation · SEL:BRK
- C37-D-003 uploads U-M records (unverified) · P:2 · S:ingest · I:– · FW:– · OBJ:record_ingestion_packet,source_authority_map · SEL:deep
- C37-D-004 'am I a candidate?' no staging/ECOG/LoT · P:2 · S:pre-screen · I:NAV · FW:– · OBJ:eligibility_gap,line_of_therapy_state · SEL:broad
- C37-D-005 family wants 'everything', onc says SOC now · P:2/1 · S:nav · I:MG,DP · FW:– · OBJ:cancer_care_navigation,honest_null_terminal · SEL:BRK
- C37-D-006 Phase I 'last vs best chance'? · P:2 · S:nav · I:MG · FW:– · OBJ:recruitment_content_gate · SEL:BRK
- C37-D-007 '232 enrolled' = open slots? · P:2 · S:listing · I:DP,ST · FW:– · OBJ:cohort_slot_state,trial_option_display_policy · SEL:deep
- C37-D-008 wants near home; only match 900mi weekly · P:2 · S:match · I:DP · FW:– · OBJ:trial_match_candidate,trial_preference_profile · SEL:broad
- C37-D-009 'send records, call if I qualify' · P:2 · S:permission · I:PS · FW:– · OBJ:research_permission_stack,research_navigation_obligation · SEL:deep
- C37-D-010 wants trials, won't share outside clinic · P:2 · S:permission · I:PS,VS · FW:– · OBJ:candidate_visibility_scope · SEL:broad
- C37-D-011 Spanish; materials English-only · P:2 · S:nav · I:MG · FW:– · OBJ:recruitment_content_gate(language) · SEL:BRK
- C37-D-012 'anything for my mutation?' · P:2 · S:match · I:MG · FW:– · OBJ:cancer_care_navigation,model_to_trial_signal · SEL:deep
- C37-D-013 trial after Reddit post · P:2 · S:nav · I:MG · FW:– · OBJ:recruitment_content_gate · SEL:broad ≈005,159
- C37-D-014 'just tell me what to do' · P:2 · S:nav · I:MG,EB · FW:– · OBJ:cancer_care_navigation(candidate≠commit) · SEL:BRK
- C37-D-015 no trial — SOC better (honest-null) · P:2 · S:honest-null · I:NAV · FW:– · OBJ:honest_null_terminal · SEL:BRK*

### B. Care-event → research-relevance trigger (entry mode 2)
- C37-D-016 radiology 'lung mass' 55yo non-smoker → latent watch · P:5/1 · S:care-event · I:NAV · FW:– · OBJ:research_watch_trigger · SEL:BRK*
- C37-D-017 path adenoca → molecular-readiness flag · P:1 · S:care-event · I:NAV · FW:– · OBJ:molecular_readiness_state,research_watch_trigger · SEL:deep
- C37-D-018 NGS EGFR ex20 → review candidate to onc · P:1 · S:pre-screen · I:NAV,VS · FW:– · OBJ:trial_match_candidate,research_watch_trigger · SEL:deep
- C37-D-019 progression 2nd-line → re-eval standing match · P:1 · S:standing-match · I:NAV · FW:– · OBJ:standing_match,line_of_therapy_state · SEL:broad ≈172
- C37-D-020 ED reveals mets, no onc → nav+watch · P:5 · S:care-event · I:NAV · FW:– · OBJ:research_watch_trigger,cancer_care_navigation · SEL:deep
- C37-D-021 inpatient refractory lymphoma → CAR-T/trial pathway · P:5 · S:care-event · I:NAV · FW:– · OBJ:research_watch_trigger,trial_match_candidate · SEL:broad
- C37-D-022 lab organ decline closes option · P:1 · S:care-event · I:DP · FW:– · OBJ:eligibility_gap,trial_option_display_policy · SEL:broad
- C37-D-023 steroids before biopsy → option-preservation warn (don't block urgent care) · P:1 · S:care-event · I:NAV · FW:– · OBJ:trial_option_preservation_signal · SEL:BRK*
- C37-D-024 new measurable lesion → RECIST-readiness · P:1 · S:care-event · I:– · FW:– · OBJ:molecular_readiness_state · SEL:broad
- C37-D-025 marker rises → possible-progression watch · P:1 · S:care-event · I:NAV · FW:– · OBJ:research_watch_trigger · SEL:broad
- C37-D-026 path addendum changes subtype → update matches · P:1 · S:match · I:ST · FW:– · OBJ:trial_match_candidate,source_authority_map · SEL:deep
- C37-D-027 liquid biopsy rare fusion → supply+readiness · P:1 · S:match · I:ST · FW:– · OBJ:trial_supply_feed,molecular_readiness_state · SEL:broad
- C37-D-028 'should I look for research?' at visit → patient-initiated intake · P:2 · S:interest · I:PS · FW:– · OBJ:research_intake_session · SEL:broad
- C37-D-029 opts out of watch → stop background, keep care · P:2 · S:permission · I:PS · FW:– · OBJ:research_watch_trigger(opt-out) · SEL:BRK ≈170,248
- C37-D-030 match found, no contact auth → route to onc only · P:1 · S:handoff · I:VS,PS · FW:– · OBJ:candidate_visibility_scope · SEL:BRK*

### C. Trial supply / catalog / availability / slot truth
- C37-D-031 CT.gov recruiting but local cohort closed · P:3/4 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state,trial_supply_feed · SEL:BRK*
- C37-D-032 protocol 'active' but site not activated · P:3 · S:supply · I:ST · FW:– · OBJ:site_trial_capacity · SEL:deep
- C37-D-033 coordinator 'send' but PI on hold · P:3 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state · SEL:BRK
- C37-D-034 open but biomarker cohort full · P:3 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state · SEL:broad
- C37-D-035 paused after safety signal, registry stale · P:3/4 · S:supply · I:ST · FW:– · OBJ:trial_availability_state · SEL:BRK
- C37-D-036 1 slot, 3 in pipeline · P:3 · S:accrual · I:ST · FW:– · OBJ:site_trial_capacity,accrual_state · SEL:deep
- C37-D-037 5-day screening window, can't travel · P:2/3 · S:handoff · I:– · FW:– · OBJ:eligibility_gap,trial_support_offer · SEL:broad
- C37-D-038 expansion cohort, selected sites only · P:4 · S:supply · I:ST · FW:– · OBJ:trial_supply_feed · SEL:broad
- C37-D-039 geo/local-lab requirement omitted in listing · P:3 · S:supply · I:ST · FW:– · OBJ:trial_supply_feed · SEL:broad
- C37-D-040 central-lab-only assay · P:3 · S:supply · I:– · FW:– · OBJ:molecular_readiness_state · SEL:broad
- C37-D-041 active but no outside referrals · P:3 · S:supply · I:– · FW:– · OBJ:oncologist_referral_candidate · SEL:broad
- C37-D-042 needs payer approval for SOC workup pre-screen · P:1 · S:handoff · I:– · FW:bill · OBJ:eligibility_gap · SEL:broad
- C37-D-043 first-line only; candidate 2nd-line · P:1 · S:match · I:– · FW:– · OBJ:line_of_therapy_state · SEL:broad
- C37-D-044 amendment changes availability → invalidate stale matches · P:3 · S:supply · I:ST · FW:– · OBJ:trial_availability_state · SEL:BRK
- C37-D-045 sponsor portal vs CTMS disagree on cohort · P:3/4 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state,source_authority_map · SEL:BRK*

### D. Permission stack / record ingestion / outside records
- C37-D-046 contact-yes, upload-no · P:2 · S:permission-stack · I:PS · FW:– · OBJ:research_permission_stack · SEL:deep
- C37-D-047 uploads imaging, no path · P:2 · S:ingest · I:– · FW:– · OBJ:record_ingestion_packet,eligibility_gap · SEL:broad
- C37-D-048 family uploads w/o auth · P:2 · S:permission-stack · I:PS · FW:– · OBJ:research_permission_stack · SEL:BRK ≈002,048
- C37-D-049 HIPAA for hospital, not sponsor/site share · P:2 · S:permission-stack · I:PS,VS · FW:– · OBJ:research_permission_stack,candidate_visibility_scope · SEL:BRK*
- C37-D-050 outside note, prior therapy no dates · P:2 · S:ingest · I:– · FW:– · OBJ:line_of_therapy_state,source_authority_map · SEL:broad
- C37-D-051 AI-extracted path PDF, verify before use · P:3 · S:pre-screen · I:– · FW:– · OBJ:screening_packet,source_authority_map · SEL:deep
- C37-D-052 NGS from portal screenshot not orig lab · P:2 · S:ingest · I:– · FW:– · OBJ:source_authority_map · SEL:broad
- C37-D-053 three hospitals conflicting staging · P:2 · S:ingest · I:– · FW:– · OBJ:source_authority_map · SEL:deep
- C37-D-054 pre-screen auth, protocol consent NOT begun (THE SEAM→C3.6) · P:2 · S:seam · I:PS · FW:– · OBJ:research_permission_stack · SEL:BRK*
- C37-D-055 site wants full chart before consent-to-share · P:3 · S:permission-stack · I:VS,PS · FW:– · OBJ:candidate_visibility_scope · SEL:BRK
- C37-D-056 revokes share mid-review · P:2 · S:permission-stack · I:PS · FW:– · OBJ:research_permission_stack · SEL:deep
- C37-D-057 records-request delay → eligibility-gap obligation · P:1 · S:ingest · I:– · FW:– · OBJ:research_navigation_obligation,eligibility_gap · SEL:broad
- C37-D-058 records arrive after slot closes · P:3 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state · SEL:broad
- C37-D-059 delete records after screen-fail; retention/legal differ · P:2 · S:follow-up · I:– · FW:– · OBJ:record_ingestion_packet(D7-retention) · SEL:BRK
- C37-D-060 imaging no DICOM metadata · P:2 · S:ingest · I:– · FW:– · OBJ:source_authority_map · SEL:broad

### E. Source-backed matching / eligibility gaps
- C37-D-061 eligible except ECOG missing · P:1/3 · S:gap · I:– · FW:– · OBJ:eligibility_gap · SEL:broad
- C37-D-062 prior LoT uncertain · P:1 · S:gap · I:– · FW:– · OBJ:line_of_therapy_state,eligibility_gap · SEL:deep
- C37-D-063 washout, last-tx date ambiguous · P:1 · S:gap · I:– · FW:– · OBJ:eligibility_gap,source_authority_map · SEL:broad
- C37-D-064 measurable disease, narrative-only imaging · P:3 · S:gap · I:– · FW:– · OBJ:eligibility_gap · SEL:broad
- C37-D-065 mutation needs CLIA; has research-only seq · P:3 · S:gap · I:– · FW:– · OBJ:molecular_readiness_state,eligibility_gap · SEL:BRK*
- C37-D-066 ANC out of window · P:1 · S:gap · I:– · FW:– · OBJ:eligibility_gap,standing_match · SEL:broad
- C37-D-067 brain mets MRI pending · P:1 · S:gap · I:– · FW:– · OBJ:eligibility_gap · SEL:broad
- C37-D-068 platinum failure, no source record · P:1 · S:gap · I:– · FW:– · OBJ:line_of_therapy_state,source_authority_map · SEL:deep
- C37-D-069 vague 'arthritis' autoimmune hx · P:1 · S:gap · I:– · FW:– · OBJ:eligibility_gap · SEL:broad
- C37-D-070 outdated med list, prohibited conmed · P:1 · S:gap · I:– · FW:– · OBJ:eligibility_gap · SEL:broad
- C37-D-071 registry study not interventional (trial-naive?) · P:3 · S:gap · I:– · FW:– · OBJ:line_of_therapy_state · SEL:broad
- C37-D-072 AI-extracted match; verify every criterion before handoff · P:3 · S:pre-screen · I:– · FW:– · OBJ:screening_packet,source_authority_map · SEL:BRK*
- C37-D-073 80% confidence, one hard exclusion unknown · P:1/3 · S:match · I:DP · FW:– · OBJ:trial_match_candidate,eligibility_gap · SEL:deep
- C37-D-074 two trials: fit vs travel · P:2 · S:match · I:DP · FW:– · OBJ:trial_option_display_policy,trial_preference_profile · SEL:BRK
- C37-D-075 valid match but goals-of-care inappropriate · P:2 · S:honest-null · I:NAV · FW:– · OBJ:honest_null_terminal,trial_preference_profile · SEL:BRK*

### F. Clinic panel mining / high-volume low-yield funnel
- C37-D-076 1,000 panel → 82 candidates · P:1 · S:pre-screen · I:– · FW:– · OBJ:screening_yield_funnel · SEL:BRK*
- C37-D-077 82 → 12 source-backed · P:1 · S:pre-screen · I:– · FW:– · OBJ:screening_yield_funnel,candidate_pipeline_state · SEL:deep
- C37-D-078 12 → 3 eligible → 1 enroll · P:1 · S:triage · I:– · FW:– · OBJ:screening_yield_funnel · SEL:deep
- C37-D-079 don't spam onc w/ 80 low-confidence · P:1 · S:triage · I:DP · FW:– · OBJ:trial_option_display_policy,candidate_pipeline_state · SEL:BRK
- C37-D-080 20 patients honest-null not referral · P:1 · S:honest-null · I:NAV · FW:– · OBJ:honest_null_terminal · SEL:BRK ≈015
- C37-D-081 weekly report vs only-actionable cases · P:1 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:broad
- C37-D-082 why yield low: NGS/cohort/ECOG/geo · P:1 · S:triage · I:– · FW:– · OBJ:screening_yield_funnel · SEL:deep
- C37-D-083 find all patients missing molecular testing · P:1 · S:care-event · I:– · FW:– · OBJ:molecular_readiness_state · SEL:broad
- C37-D-084 eligible but onc hasn't discussed trials · P:1 · S:triage · I:NAV · FW:– · OBJ:research_navigation_obligation · SEL:broad
- C37-D-085 candidate at competing practice in network; ownership unclear · P:1 · S:triage · I:VS · FW:clinic · OBJ:candidate_visibility_scope · SEL:BRK
- C37-D-086 coordinator cap 10/day → throttle queue · P:1/3 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:broad
- C37-D-087 sponsor wants 'all', site wants high-confidence · P:3/4 · S:triage · I:VS · FW:acc · OBJ:candidate_visibility_scope · SEL:BRK*
- C37-D-088 AI false positives from incomplete prior-tx · P:1 · S:pre-screen · I:– · FW:– · OBJ:source_authority_map,screening_yield_funnel · SEL:deep
- C37-D-089 pipeline tracks fall-out reasons (records/ineligible/declined/no-slot/SOC) · P:1 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:broad
- C37-D-090 must NOT convert every cancer patient to research lead · P:1 · S:care-event · I:NAV · FW:– · OBJ:research_watch_trigger,honest_null_terminal · SEL:BRK*

### G. Oncologist / tumor board / referral / clinic-retention conflict
- C37-D-091 patient qualifies for academic trial = clinic loses patient · P:1 · S:referral · I:DP · FW:clinic · OBJ:oncologist_referral_candidate · SEL:BRK*
- C37-D-092 onc says SOC better, OMNI has candidate → preserve judgment + transparency · P:1 · S:nav · I:MG · FW:– · OBJ:cancer_care_navigation,honest_null_terminal · SEL:BRK
- C37-D-093 tumor board SOC; patient wants experimental · P:1 · S:nav · I:MG · FW:– · OBJ:cancer_care_navigation · SEL:broad
- C37-D-094 academic declines (no slot); keep local moving · P:1 · S:referral · I:ST · FW:– · OBJ:cohort_slot_state,research_navigation_obligation · SEL:broad
- C37-D-095 onc wants partner site; patient wants MDA 2nd opinion · P:1 · S:referral · I:– · FW:– · OBJ:oncologist_referral_candidate,trial_preference_profile · SEL:broad
- C37-D-096 clinic incentivized to keep infusion revenue · P:1 · S:referral · I:DP · FW:clinic · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-097 surface 'refer out' when best path outside buyer · P:1 · S:referral · I:DP · FW:clinic · OBJ:oncologist_referral_candidate · SEL:BRK*
- C37-D-098 needs outside path review before referral accepted · P:3 · S:handoff · I:– · FW:– · OBJ:screening_packet · SEL:broad
- C37-D-099 onc marks 'not appropriate', no reason · P:1 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:BRK ≈113
- C37-D-100 tumor board research path; separate research intake · P:1 · S:interest · I:– · FW:– · OBJ:research_intake_session · SEL:broad
- C37-D-101 onc wants hide trials til after SOC; patient asks directly · P:1 · S:nav · I:DP,MG · FW:clinic · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-102 patient wants prestige center vs equivalent local · P:2 · S:match · I:– · FW:– · OBJ:trial_preference_profile · SEL:broad
- C37-D-103 referral needs source-backed packet, not free text · P:1/3 · S:handoff · I:– · FW:– · OBJ:screening_packet · SEL:deep
- C37-D-104 'too frail' vs missing ECOG (judgment vs gap) · P:1 · S:gap · I:– · FW:– · OBJ:line_of_therapy_state,eligibility_gap · SEL:deep
- C37-D-105 clinic wants matching only for ITS OWN trials — integrity test · P:1 · S:referral · I:DP · FW:clinic · OBJ:trial_option_display_policy · SEL:BRK*

### H. Research site triage / screening packet / coordinator workflow
- C37-D-106 incomplete packet; find missing source docs first · P:3 · S:triage · I:– · FW:– · OBJ:screening_packet · SEL:broad
- C37-D-107 coordinator 'possibly eligible', PI rejects on nuance · P:3 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:deep
- C37-D-108 eligible but no slot → waitlist/alt site · P:3 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state,standing_match · SEL:broad
- C37-D-109 needs outside imaging CD, can't obtain · P:3 · S:ingest · I:– · FW:– · OBJ:record_ingestion_packet · SEL:broad
- C37-D-110 packet AI-extracted; needs source verify · P:3 · S:pre-screen · I:– · FW:– · OBJ:source_authority_map · SEL:deep ≈072
- C37-D-111 two teams review same patient, competing trials · P:3 · S:triage · I:VS · FW:– · OBJ:candidate_visibility_scope · SEL:BRK
- C37-D-112 urgent candidates window closing · P:3 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:broad
- C37-D-113 coordinator 'not eligible' no reason · P:3 · S:triage · I:– · FW:– · OBJ:candidate_pipeline_state · SEL:broad ≈099
- C37-D-114 eligible but no transport; support permissible? · P:3 · S:handoff · I:IG · FW:– · OBJ:trial_support_offer · SEL:BRK
- C37-D-115 rare mutation; ask sponsor cohort expansion · P:3 · S:supply · I:– · FW:– · OBJ:model_to_trial_signal,trial_supply_feed · SEL:broad
- C37-D-116 coordinator asks delay SOC for trial review — care-priority breach · P:3 · S:nav · I:NAV · FW:– · OBJ:cancer_care_navigation · SEL:BRK*
- C37-D-117 site wants contact patient before treating onc · P:3 · S:handoff · I:VS · FW:clinic · OBJ:candidate_visibility_scope · SEL:BRK
- C37-D-118 site sees aggregate not identified · P:3 · S:handoff · I:VS · FW:– · OBJ:candidate_visibility_scope · SEL:deep
- C37-D-119 screen fail → route reason + future re-match · P:3 · S:screen-fail · I:– · FW:– · OBJ:standing_match,screen_failure_state · SEL:broad
- C37-D-120 enrolled → C3.6 execution takes over (SEAM) · P:3 · S:seam · I:PS · FW:– · OBJ:research_permission_stack(→C3.6) · SEL:BRK*

### I. Sponsor / pharma / accrual visibility / feasibility
- C37-D-121 count w/ mutation across network → aggregate feasibility only · P:4 · S:accrual · I:VS · FW:– · OBJ:candidate_visibility_scope · SEL:BRK*
- C37-D-122 identified list pre-consent → BLOCK · P:4 · S:accrual · I:VS · FW:– · OBJ:candidate_visibility_scope · SEL:BRK*
- C37-D-123 why accrual slow → feasibility breakdown · P:4 · S:accrual · I:– · FW:– · OBJ:accrual_state,screening_yield_funnel · SEL:deep
- C37-D-124 higher payment for faster enroll → must NOT rank · P:4 · S:display · I:DP,EB · FW:acc · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-125 de-id pipeline by race/ethnicity for diversity · P:4 · S:accrual · I:VS · FW:– · OBJ:candidate_visibility_scope(equity) · SEL:deep
- C37-D-126 record excerpts pre-screen, no legal basis · P:4 · S:accrual · I:VS · FW:– · OBJ:candidate_visibility_scope · SEL:BRK
- C37-D-127 sponsor changes I/E → invalidate prior matches · P:4 · S:supply · I:ST · FW:– · OBJ:trial_availability_state · SEL:BRK
- C37-D-128 sponsor closes cohort mid-navigation · P:4 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state,standing_match · SEL:deep
- C37-D-129 sponsor wants to message patients direct → route via permission/site · P:4 · S:handoff · I:VS,MG · FW:– · OBJ:candidate_visibility_scope,recruitment_content_gate · SEL:BRK
- C37-D-130 pharma wants model-biomarker pipeline from RWE → consent/secondary-use · P:4 · S:accrual · I:VS · FW:– · OBJ:patient_model_feedback_loop,specimen_use_consent_scope · SEL:BRK*
- C37-D-131 many screen fails missing NGS → sponsor offers testing support · P:4 · S:accrual · I:IG · FW:– · OBJ:molecular_readiness_state,trial_support_offer · SEL:deep
- C37-D-132 preferred site better pay, worse travel · P:4 · S:display · I:DP · FW:acc · OBJ:trial_option_display_policy,trial_preference_profile · SEL:BRK
- C37-D-133 site-level dashboard, identities hidden · P:4 · S:accrual · I:VS · FW:– · OBJ:candidate_visibility_scope · SEL:broad
- C37-D-134 sponsor asks prioritize display → refuse if not clinical · P:4 · S:display · I:DP · FW:acc · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-135 sponsor trial no slots; non-sponsored better fit+slot · P:4 · S:display · I:DP,ST · FW:acc · OBJ:trial_option_display_policy,cohort_slot_state · SEL:BRK*

### J. Firewall / display policy / economically-blind recommendation
- C37-D-136 OMNI paid per enrollment; ranking must NOT know · P:4 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-137 two fit; one pays clinic more → rank by fit only · P:1 · S:display · I:EB · FW:acc · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-138 clinic admin hide outside-site trials · P:1 · S:display · I:DP · FW:clinic · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-139 site pays platform fee, wants 'featured' listing · P:3 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-140 AI explanation includes sponsor name = endorsement? · P:2 · S:display · I:MG · FW:– · OBJ:recruitment_content_gate,match_explanation · SEL:deep
- C37-D-141 display 'candidate, not eligible yet' til review · P:2 · S:display · I:DP,MG · FW:– · OBJ:trial_option_display_policy · SEL:deep
- C37-D-142 display SOC alternatives + 'no trial' if true · P:2 · S:display · I:DP,NAV · FW:– · OBJ:honest_null_terminal,trial_option_display_policy · SEL:BRK
- C37-D-143 best match = non-paying external site → surface it · P:2 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-144 site asks suppress trial (poor sponsor relationship) · P:3 · S:display · I:DP · FW:acc · OBJ:trial_option_display_policy · SEL:BRK
- C37-D-145 paid sponsor wants patient educational content → content gate · P:4 · S:display · I:MG · FW:– · OBJ:recruitment_content_gate · SEL:broad
- C37-D-146 analytics: one sponsor converts better; don't optimize conversion · P:4 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-147 patient chose by ranking order; audit why order shown · P:2 · S:display · I:DP · FW:– · OBJ:match_explanation,trial_option_display_policy · SEL:BRK*
- C37-D-148 internal revenue-weighted dashboard separate from display · P:4 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy · SEL:BRK
- C37-D-149 travel-burden display w/o discriminating rural · P:2 · S:display · I:DP · FW:– · OBJ:trial_option_display_policy(equity) · SEL:deep
- C37-D-150 engine must not know payment schedule; audit blindness · P:4 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy(auditable) · SEL:BRK*

### K. Recruitment content / therapeutic misconception / support / equity
- C37-D-151 AI 'may help you live longer' no evidence → block · P:2 · S:display · I:MG · FW:– · OBJ:recruitment_content_gate,therapeutic_misconception_guard · SEL:BRK*
- C37-D-152 page implies experimental superior to SOC · P:2 · S:display · I:MG · FW:– · OBJ:recruitment_content_gate · SEL:BRK
- C37-D-153 travel/hotel/meals → inducement + IRB language check · P:2 · S:handoff · I:IG · FW:– · OBJ:trial_support_offer · SEL:BRK
- C37-D-154 no transport; support permitted if non-coercive · P:2 · S:handoff · I:IG · FW:– · OBJ:trial_support_offer · SEL:deep
- C37-D-155 uninsured; financial counseling w/o steering · P:2 · S:nav · I:IG,MG · FW:– · OBJ:trial_support_offer,honest_null_terminal · SEL:deep
- C37-D-156 materials college-level, low health literacy · P:2 · S:display · I:MG · FW:– · OBJ:recruitment_content_gate(equity) · SEL:BRK
- C37-D-157 language not supported → access blocker · P:2 · S:nav · I:MG · FW:– · OBJ:recruitment_content_gate(language) · SEL:deep ≈011
- C37-D-158 underserved, match but no local site → remote/pre-screen equity · P:2 · S:nav · I:NAV · FW:– · OBJ:research_navigation_obligation(equity) · SEL:BRK
- C37-D-159 family 'experimental=better' → correct misconception · P:2 · S:nav · I:MG · FW:– · OBJ:therapeutic_misconception_guard · SEL:broad ≈005,013
- C37-D-160 high burden → show visits/hospitalizations/risks · P:2 · S:display · I:DP,MG · FW:– · OBJ:trial_option_display_policy · SEL:deep
- C37-D-161 vulnerable, out of options → no 'last hope' exploitation · P:2 · S:nav · I:MG · FW:– · OBJ:therapeutic_misconception_guard,honest_null_terminal · SEL:BRK*
- C37-D-162 caregiver stipend → anti-inducement gate · P:4 · S:handoff · I:IG · FW:– · OBJ:trial_support_offer · SEL:broad
- C37-D-163 navigator wants call before onc discusses prognosis · P:3 · S:handoff · I:VS,NAV · FW:– · OBJ:candidate_visibility_scope,cancer_care_navigation · SEL:BRK
- C37-D-164 IRB copy expires after amendment · P:3 · S:display · I:MG · FW:– · OBJ:recruitment_content_gate · SEL:broad
- C37-D-165 diversity goal vs patient local-only preference · P:2 · S:nav · I:– · FW:– · OBJ:trial_preference_profile(equity) · SEL:BRK

### L. Standing match / screen-fail / re-screen / honest-null
- C37-D-166 fail low ANC → standing re-check when labs recover · P:1 · S:standing-match · I:– · FW:– · OBJ:standing_match · SEL:deep
- C37-D-167 fail no slot → monitor cohort openings · P:3 · S:standing-match · I:ST · FW:– · OBJ:standing_match,cohort_slot_state · SEL:broad
- C37-D-168 fail missing NGS → molecular-readiness obligation · P:1 · S:standing-match · I:– · FW:– · OBJ:molecular_readiness_state,standing_match · SEL:deep
- C37-D-169 declines now, allows future re-contact · P:2 · S:permission-stack · I:PS · FW:– · OBJ:standing_match,research_permission_stack · SEL:broad
- C37-D-170 declines future contact → stop standing match · P:2 · S:permission-stack · I:PS · FW:– · OBJ:standing_match(opt-out) · SEL:BRK ≈029,248
- C37-D-171 new trial for rare mutation → re-surface to onc · P:1 · S:standing-match · I:NAV · FW:– · OBJ:standing_match,research_watch_trigger · SEL:deep
- C37-D-172 progresses → LoT changes opens trials · P:1 · S:standing-match · I:– · FW:– · OBJ:line_of_therapy_state,standing_match · SEL:broad ≈019
- C37-D-173 ECOG worsens → prior match inappropriate · P:1 · S:standing-match · I:– · FW:– · OBJ:standing_match,eligibility_gap · SEL:broad
- C37-D-174 enters hospice → stop standing match unless requested · P:2 · S:honest-null · I:NAV · FW:– · OBJ:standing_match,honest_null_terminal · SEL:BRK
- C37-D-175 screen-fail 'cohort closed' ≠ 'ineligible' — preserve distinction · P:3 · S:screen-fail · I:ST · FW:– · OBJ:screen_failure_state,source_authority_map · SEL:BRK*
- C37-D-176 waitlist slot opens but started disqualifying tx · P:1 · S:standing-match · I:– · FW:– · OBJ:trial_option_preservation_signal,standing_match · SEL:BRK
- C37-D-177 reject candidate → explain 'why not' in allowed terms · P:2 · S:screen-fail · I:MG · FW:– · OBJ:match_explanation,recruitment_content_gate · SEL:deep
- C37-D-178 honest-null 'SOC best'; patient wants 2nd opinion anyway · P:2 · S:honest-null · I:NAV · FW:– · OBJ:honest_null_terminal,cancer_care_navigation · SEL:broad
- C37-D-179 standing match finds trial; travel impossible · P:2 · S:standing-match · I:– · FW:– · OBJ:trial_preference_profile,trial_support_offer · SEL:broad
- C37-D-180 tumor evolves → biomarker match no longer applies · P:1 · S:standing-match · I:– · FW:– · OBJ:standing_match,source_authority_map · SEL:deep

### M. Billing / coverage / sponsor-site economics
- C37-D-181 screening biopsy; payer denies unless SOC indication · P:1 · S:handoff · I:– · FW:bill · OBJ:eligibility_gap · SEL:deep
- C37-D-182 sponsor pays research scan, insurance billed by mistake (DOUBLE-BILL) · P:3 · S:billing · I:– · FW:bill · OBJ:sponsor_site_contract(coverage-grid) · SEL:BRK*
- C37-D-183 coordinator paid per screening visit; engine must not know · P:3 · S:billing · I:EB · FW:own · OBJ:sponsor_site_contract · SEL:BRK
- C37-D-184 startup fee → site wants priority promotion · P:3 · S:display · I:DP · FW:acc · OBJ:trial_option_display_policy · SEL:BRK
- C37-D-185 research-billed genetic test benefits care → coverage analysis · P:3 · S:billing · I:– · FW:bill · OBJ:sponsor_site_contract(coverage-grid) · SEL:deep
- C37-D-186 'will I be charged for screening?' · P:2 · S:nav · I:– · FW:bill · OBJ:cancer_care_navigation · SEL:broad
- C37-D-187 eligible, travel not covered → support w/o inducement · P:2 · S:handoff · I:IG · FW:– · OBJ:trial_support_offer · SEL:broad
- C37-D-188 site paid for screen failure → don't incentivize low-quality referrals · P:3 · S:triage · I:– · FW:acc · OBJ:candidate_pipeline_state · SEL:BRK*
- C37-D-189 care visit + research screening same day → split billing · P:3 · S:billing · I:– · FW:bill · OBJ:sponsor_site_contract(coverage-grid) · SEL:deep
- C37-D-190 sponsor wants per-enrollment dashboard; display blind · P:4 · S:display · I:EB · FW:own · OBJ:trial_option_display_policy · SEL:BRK
- C37-D-191 trial SAE hospitalization → billing dispute · P:3 · S:billing · I:– · FW:bill · OBJ:sponsor_site_contract · SEL:broad
- C37-D-192 diversity recruitment bonus → NOT a ranking input · P:4 · S:display · I:EB · FW:acc · OBJ:trial_option_display_policy(equity) · SEL:BRK*
- C37-D-193 site wants pay for record pre-review even if no screen · P:3 · S:billing · I:– · FW:acc · OBJ:sponsor_site_contract · SEL:broad
- C37-D-194 PAP foundation support interacts w/ sponsor reimbursement · P:2 · S:billing · I:IG · FW:bill · OBJ:trial_support_offer · SEL:broad
- C37-D-195 referral → out-of-network SOC workup · P:1 · S:referral · I:– · FW:bill · OBJ:cancer_care_navigation · SEL:broad

### N. Translational model / biospecimen / PDX-organoid bridge (2040 layer)
- C37-D-196 biopsy; consents care testing NOT model creation · P:3 · S:ingest · I:PS · FW:– · OBJ:specimen_use_consent_scope,biospecimen_lineage · SEL:BRK*
- C37-D-197 sample → PDX becomes commercially valuable (who owns?) · P:4 · S:billing · I:– · FW:– · OBJ:biospecimen_lineage,pharma_model_access_contract · SEL:BRK*
- C37-D-198 profile matches PDX from ANOTHER patient (CROSS-PERSON) · P:1 · S:match · I:– · FW:– · OBJ:model_match_candidate,chain_of_identity · SEL:BRK*
- C37-D-199 PDX responds to drug; patient ineligible · P:2 · S:honest-null · I:MG · FW:– · OBJ:translational_model_evidence,honest_null_terminal · SEL:BRK
- C37-D-200 organoid suggests sensitivity; onc says SOC better · P:2 · S:honest-null · I:MG · FW:– · OBJ:translational_model_evidence,honest_null_terminal · SEL:BRK*
- C37-D-201 pharma wants model-biomarker-signature patients · P:4 · S:accrual · I:VS · FW:acc · OBJ:model_to_trial_signal,candidate_visibility_scope · SEL:BRK
- C37-D-202 model repo rare subtype; no local trial · P:3 · S:supply · I:– · FW:– · OBJ:model_to_trial_signal,honest_null_terminal · SEL:broad
- C37-D-203 'does the mouse result mean it works for me?' · P:2 · S:nav · I:MG · FW:– · OBJ:therapeutic_misconception_guard,translational_model_evidence · SEL:BRK*
- C37-D-204 model data conflicts w/ genomic report · P:1 · S:match · I:– · FW:– · OBJ:source_authority_map,translational_model_evidence · SEL:deep
- C37-D-205 START-like site prioritizes sponsor by model repo → firewall · P:3/4 · S:display · I:DP,EB · FW:acc · OBJ:pharma_model_access_contract,trial_option_display_policy · SEL:BRK*
- C37-D-206 declines research tissue use, wants care+nav · P:2 · S:permission-stack · I:PS · FW:– · OBJ:specimen_use_consent_scope,research_permission_stack · SEL:deep
- C37-D-207 tissue insufficient for both clinical NGS + model · P:1 · S:care-event · I:– · FW:– · OBJ:molecular_readiness_state,biospecimen_lineage · SEL:BRK
- C37-D-208 model evidence supports trial DESIGN not individual rec (guardrail) · P:4 · S:match · I:MG · FW:– · OBJ:translational_model_evidence · SEL:deep
- C37-D-209 tumor evolves after model created → relevance decays · P:1 · S:standing-match · I:– · FW:– · OBJ:translational_model_evidence,standing_match · SEL:broad
- C37-D-210 model from one patient → cohort selection many; label cross-person · P:4 · S:match · I:VS · FW:– · OBJ:chain_of_identity,patient_model_feedback_loop · SEL:BRK*

### O. Molecular readiness / line-of-therapy / option preservation (care-substrate; SUBSCRIBED)
- C37-D-211 needs NGS before match → readiness obligation · P:1 · S:care-event · I:– · FW:– · OBJ:molecular_readiness_state · SEL:deep
- C37-D-212 no tissue → biopsy/procurement discussion · P:1 · S:care-event · I:– · FW:– · OBJ:tissue_availability_state · SEL:broad
- C37-D-213 tissue block exhausted by prior testing · P:1 · S:care-event · I:– · FW:– · OBJ:tissue_availability_state · SEL:broad
- C37-D-214 trial needs fresh biopsy; has archived only · P:1 · S:care-event · I:– · FW:– · OBJ:tissue_availability_state · SEL:broad
- C37-D-215 first-line today; chemo would close first-line trial · P:1 · S:care-event · I:NAV · FW:– · OBJ:trial_option_preservation_signal,line_of_therapy_state · SEL:BRK*
- C37-D-216 radiation to measurable lesion eliminates RECIST target · P:1 · S:care-event · I:NAV · FW:– · OBJ:trial_option_preservation_signal · SEL:BRK
- C37-D-217 steroids exclude IO trial but needed for brain edema (CONFLICT) · P:1 · S:care-event · I:NAV · FW:– · OBJ:trial_option_preservation_signal,cancer_care_navigation · SEL:BRK*
- C37-D-218 targeted therapy before confirmatory biopsy closes option · P:1 · S:care-event · I:NAV · FW:– · OBJ:trial_option_preservation_signal · SEL:deep
- C37-D-219 progressed after platinum → LoT update · P:1 · S:care-event · I:– · FW:– · OBJ:line_of_therapy_state · SEL:broad ≈172
- C37-D-220 undocumented outside prior therapy → LoT uncertain · P:1 · S:ingest · I:– · FW:– · OBJ:line_of_therapy_state,source_authority_map · SEL:deep ≈068
- C37-D-221 rare mutation, no tissue for confirmation · P:1 · S:gap · I:– · FW:– · OBJ:molecular_readiness_state,eligibility_gap · SEL:broad
- C37-D-222 preference excludes hospitalization-heavy trial · P:2 · S:match · I:– · FW:– · OBJ:trial_preference_profile · SEL:broad
- C37-D-223 goals favor QoL over aggressive experimental · P:2 · S:honest-null · I:NAV · FW:– · OBJ:trial_preference_profile,honest_null_terminal · SEL:broad
- C37-D-224 option-preservation conflicts w/ urgent care need · P:1 · S:care-event · I:NAV · FW:– · OBJ:trial_option_preservation_signal,cancer_care_navigation · SEL:BRK*
- C37-D-225 molecular tumor board → trial pre-screen after NGS · P:1 · S:care-event · I:NAV · FW:– · OBJ:molecular_readiness_state,research_watch_trigger · SEL:broad

### P. External systems / ownership ladder / rungs
- C37-D-226 ingest CT.gov but site says unavailable · P:3 · S:supply · I:ST · FW:– · OBJ:trial_supply_feed,cohort_slot_state · SEL:deep
- C37-D-227 ingest NCI listing + enrich w/ local slot truth · P:3 · S:supply · I:ST · FW:– · OBJ:trial_supply_feed,cohort_slot_state · SEL:broad
- C37-D-228 OnCore vs sponsor portal status differ · P:3/4 · S:supply · I:ST · FW:– · OBJ:source_authority_map,cohort_slot_state · SEL:BRK ≈045
- C37-D-229 START registry candidate list vs clinic EMR truth · P:3 · S:supply · I:VS · FW:– · OBJ:source_authority_map,candidate_visibility_scope · SEL:deep
- C37-D-230 vendor score; OMNI requires source-backed criterion rationale · P:3 · S:match · I:– · FW:– · OBJ:match_explanation,source_authority_map · SEL:BRK*
- C37-D-231 sponsor portal refuses write-back; OMNI owns workflow+reconciliation (ANTI-MIDDLEWARE) · P:4 · S:handoff · I:– · FW:– · OBJ:external_capability(P35) · SEL:BRK*
- C37-D-232 CTMS closes cohort → invalidate public listing surface · P:3 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state,trial_availability_state · SEL:deep
- C37-D-233 enters via OMNI clinic; execution at external START site · P:1/3 · S:seam · I:– · FW:– · OBJ:external_capability,research_permission_stack · SEL:BRK
- C37-D-234 community clinic OMNI; research site separate CTMS · P:1/3 · S:supply · I:– · FW:– · OBJ:external_capability · SEL:broad
- C37-D-235 academic gatekeeper denies referral, no explanation → preserve nav obligation · P:5 · S:referral · I:NAV · FW:– · OBJ:research_navigation_obligation · SEL:BRK
- C37-D-236 sponsor API exposes supply not patient-facing language · P:4 · S:supply · I:MG · FW:– · OBJ:trial_supply_feed,recruitment_content_gate · SEL:broad
- C37-D-237 vendor optimizes enrollment-probability not patient-best · P:3 · S:display · I:DP · FW:acc · OBJ:trial_option_display_policy · SEL:BRK*
- C37-D-238 OMNI owns access surface, read-only CTMS (ladder rung) · P:1 · S:supply · I:– · FW:– · OBJ:external_capability · SEL:broad
- C37-D-239 OMNI system-of-work for clinic; external site = operator node · P:1 · S:handoff · I:– · FW:– · OBJ:external_capability(ladder) · SEL:deep
- C37-D-240 migrate old vendor matching decisions w/ provenance · P:3 · S:match · I:– · FW:– · OBJ:source_authority_map · SEL:broad

### Q. Adversarial / abuse / governance / weird failures
- C37-D-241 fake trial scraped into catalog → source-trust failure · P:3 · S:listing · I:ST · FW:– · OBJ:trial_supply_feed(integrity) · SEL:BRK*
- C37-D-242 sponsor listing written like an ad · P:4 · S:listing · I:MG · FW:– · OBJ:recruitment_content_gate · SEL:BRK
- C37-D-243 patient uploads FALSIFIED records to access trial · P:2 · S:ingest · I:– · FW:– · OBJ:source_authority_map(integrity) · SEL:BRK*
- C37-D-244 staff manually changes candidate status to boost accrual · P:1/3 · S:triage · I:– · FW:acc · OBJ:candidate_pipeline_state(audit) · SEL:BRK*
- C37-D-245 AI HALLUCINATED a trial location; patient travels unnecessarily · P:2 · S:listing · I:MG · FW:– · OBJ:trial_supply_feed,match_explanation · SEL:BRK*
- C37-D-246 'you are eligible' BEFORE human review → misconception · P:2 · S:display · I:MG,DP · FW:– · OBJ:therapeutic_misconception_guard,trial_option_display_policy · SEL:BRK*
- C37-D-247 sponsor pressure lowers pre-screen quality threshold · P:3/4 · S:triage · I:– · FW:acc · OBJ:candidate_pipeline_state · SEL:BRK
- C37-D-248 standing match repeatedly messages after patient said stop · P:2 · S:standing-match · I:PS · FW:– · OBJ:standing_match(opt-out,audit) · SEL:BRK ≈029,170
- C37-D-249 genomic result implies familial risk → family genetics counseling · P:2 · S:nav · I:– · FW:– · OBJ:chain_of_identity,cancer_care_navigation · SEL:BRK*
- C37-D-250 high-profile patient candidacy leaks via access logs · P:5 · S:handoff · I:VS · FW:– · OBJ:candidate_visibility_scope(audit) · SEL:BRK*

### P5-patch. Hospital / academic cancer-center posture (Knox patch, post-G2)
- C37-D-251 [P5] academic center: hundreds of open trials; public 'open' but trial-office/PI/coordinator/IRB disagree on what's referable TODAY · P:5 · S:supply · I:ST · FW:– · OBJ:cohort_slot_state,trial_supply_feed,source_authority_map · SEL:BRK
- C37-D-252 [P5] tumor board → trial review; patient at community affiliate, main-campus PI wants more source records before accepting referral · P:5 · S:referral · I:– · FW:– · OBJ:oncologist_referral_candidate,screening_packet · SEL:deep
- C37-D-253 [P5] hospital wants patient-facing 'trial options' surface; institutional comms/IRB restrict display + benefit/risk language · P:5 · S:display · I:MG,DP · FW:– · OBJ:recruitment_content_gate,trial_option_display_policy · SEL:BRK
- C37-D-254 [P5] academic trial office suppresses externally-sponsored competitor trial b/c internal accrual lagging → enforce patient-best + econ-blind display · P:5 · S:display · I:DP,EB · FW:clinic/acc · OBJ:trial_option_display_policy · SEL:BRK* (academic-gatekeeping analog of the firewall)

## §3A Coverage tally (Opus, 2026-06-14)
- **250 rows ingested, 0 omitted, IDs preserved (C37-D-001…250).** 17 families (A–Q) all populated.
- **Both entry modes present:** patient/family-initiated (A, parts of D/E/K/L) + care-event-triggered (B, O; D-016/017/020/023/025/090/207/211–225).
- **Posture coverage (all five §9):** P1 clinic-first (heaviest: F/G/O), P2 patient/family (A/K/L), P3 research-site (C/H), P4 sponsor/pharma (I/M/N), P5 hospital/academic (D-016/020/021/235/250 + **P5-patch D-251–254**). *P5 thinness resolved by the post-G2 patch — now ~10 rows incl. the academic-gatekeeping firewall analog D-254.*
- **Firewall stress rows:** acc (≈18), own/economically-blind (≈10), clinic-retention (≈9), bill/coverage (≈12). Firewall is well-pressured from all three principal directions + OMNI's own.
- **Near-dups (kept, cross-ref'd, NOT deleted):** 013≈005≈159 (misconception); 019≈172≈219 (progression→LoT); 029≈170≈248 (opt-out/stop); 099≈113 (no-reason status); 068≈220 (undocumented prior tx); 045≈228 (portal-vs-CTMS); 015≈080 (honest-null); 072≈110 (AI-extract verify); 011≈157 (language). Each retained for its distinct angle.

## §3B Breaker pool (~78 rows tagged SEL:BRK or BRK*)
All rows tagged `SEL:BRK`/`BRK*` above. Concentrations: firewall/display (J), sponsor-visibility (I), clinic-retention (G), translational/cross-person (N), permission-seam (D-054/120), adversarial (Q), care-event option-preservation (O).

## §3C Core deep-trace set (~34 rows → the G3/E targets; one per load-bearing claim)
- **Accrual≠recommendation firewall:** D-124, D-134, D-135, D-137, D-144
- **OMNI-own-economic-blindness:** D-136, D-143, D-146, D-150, D-183
- **Clinic-retention ≠ patient-pathway:** D-091, D-096, D-097, D-101, D-105
- **Pre-consent sponsor/site visibility:** D-030, D-049, D-121, D-122, D-087
- **Therapeutic misconception / honest-null:** D-015, D-075, D-151, D-161, D-203, D-246
- **Care-event trigger + option-preservation:** D-016, D-023, D-215, D-217, D-224
- **Slot/supply truth + source authority:** D-031, D-045, D-175, D-230
- **Translational / cross-person inference:** D-196, D-198, D-200, D-210
- **The C3.6 seam:** D-054, D-120
- **Yield funnel (anti-spam/lead-gen):** D-076, D-090
- **Anti-middleware ladder:** D-231
- **Adversarial integrity:** D-243, D-244, D-245
- **Double-billing:** D-182
- **Academic gatekeeping + internal-accrual firewall (P5):** D-254 (added post-G2; tests the same ethical firewall under hospital/academic posture — gatekeeping + internal accrual + patient-best + econ-blind display)

*(Total core deep-trace set now ~35 rows; 254 rows total in library: 250 seeds + 4 P5 patch.)*

## §4 Status — INGEST/MAP COMPLETE (Opus 2026-06-14)
250 rows ingested, normalized to the §1 schema, mapped (posture/stage/integrity/firewall/objects/SEL), coverage tally built (§3A, 0 omitted), near-dups cross-referenced (kept, not deleted), breaker pool (~78, §3B) + core deep-trace set (~34, §3C) selected. **STOPPED for trifecta review before G3 (E/F).** No contract edits, no thesis prose, `08` deferred. Next on greenlight: G3 traces the §3C core set + dispositions the candidate objects vs C3.6 + the 15 contracts.

## Stop / authority
- `analysis_nonbinding` (`GRD-036`); no contract edits; no thesis prose. **Rows authored by Nick+Knox.** Standing flag: git identity unset.

# v4 — C3.6E: Deep-Trace Matrix (action-loop on the core breakers)

Document type: `analysis` (C3.6 arc — G3, artifact E) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G3_pending_review` 2026-06-14. Runs the 9-question action-loop on the **~28 core breaker rows** (D §E-trace-set). **Rows are the mining; F + G are the deliverable.** Mirrors C3.5-E discipline: show where the substrate **HOLDS / EXTENDS / FORCES-NET-NEW** on truth-plane separation.

## The 9-question action-loop (adapted to source-authority / truth-plane)
Q1 origin (which plane/source?) · Q2 capture (direct / feed / abstraction?) · Q3 source-authority (which system authoritative for THIS field?) · Q4 adoption (human-adopt before care/trial-truth?) · Q5 knowledge-partition (blinding/who-may-know?) · Q6 commit (where committed; OMNI commits or references?) · Q7 reconciliation (cross-plane conflict — amend-not-overwrite, no force-match?) · Q8 proof (lineage/attestation/ALCOA++?) · Q9 ladder (OMNI posture for this fact/system).
**Verdict legend:** `HOLDS` (existing substrate handles it) · `EXTEND` (bounded extension of an existing contract) · `NET-NEW` (forces a new object/axis).

## Traces (grouped by candidate primitive)

### source_authority_map
- **D-013** (EGFR: local+ vs central-insufficient vs outside-NGS-variant) → Q3 is the crux: 3 sources, central authoritative *for eligibility*, local *for care*. Q7 reconcile w/o force-match; Q8 lineage per source. → **NET-NEW** (the field-level map w/ per-purpose authority is not in any single contract; CM holds assertions but not a *per-field source-of-record index*).
- **D-081** (local CBC qualifies; central ANC below by different calc) → same shape: per-source + per-calc; derived-value provenance (Q8). → **NET-NEW** (map) + EXTEND Observation (verification-state already exists).
- **D-103** (AE onset-date differs patient/clinic/eCRF) → 3-source date; Q7 reconcile. → **NET-NEW** (map) — confirms the pattern generalizes beyond labs to *any* field.
- **D-123** (eCRF "administered" vs MAR "held") → Q3 MAR authoritative; eCRF must trace back (Q8). Q6 OMNI commits admin truth, eCRF is export. → **NET-NEW** (map) + the EDC-reconciliation-loop (compose).
- **D-135** (locked-DB endpoint vs later clinical correction — both valid in plane) → **the load-bearing trace.** Q3/Q6/Q7: two repositories-of-record, each authoritative in its plane; never force-match. → **NET-NEW** (map is the only thing that can represent "two valid truths, different planes") — *this single row proves "no single record of truth."*
- **D-201** (direct investigator assessment, EDC-origin, nowhere else) → Q1/Q3: EDC IS first-durable-repository here; Q4 EDC-origin ≠ care-truth unless adopted. → **NET-NEW** (map must encode "origin-plane" per field; prevents both "EHR owns all" and "EDC owns all" errors).

### knowledge_partition / blind_state / unblinding
- **D-038** (IRT active-arm; care blinded — OMNI knows token, can't expose) → Q5 is the whole row; Q9 IRT vendor-operated. visibility_grant can hide, but can't express *temporal* + *inference-prohibited* masking. → **NET-NEW** (knowledge_partition axis).
- **D-040** (emergency unblinding: who/log/notify) → Q5 + break-glass (RBAC) + notify (sponsor/IRB obligation). RBAC break_glass HOLDS the *teeth*; the *unblinding_event* state + masked→open transition is **NET-NEW**.
- **D-044** (arm pasted into EHR note; contain/audit/correct w/o delete) → Q7 amend-not-overwrite HOLDS; Q5 partition-breach handling NET-NEW (visibility revoke + leak-audit on a *care-plane* fact). → **NET-NEW** + EXTEND (amend/audit reuse).
- **D-049** (blinded central read vs local; neither sees other pre-adjudication) → Q5 read-partition; Q4 adjudication. → **NET-NEW** (partition between two reads of the same fact).
- **D-050** (DB locked+unblinded; update publication w/o retro-exposing historical blinded states) → Q5 *temporal* partition; Q8 historical states preserved. → **NET-NEW** (temporal knowledge_partition; visibility_grant has no time-machine).
- **D-185** (sponsor-team unblinded, site blinded — cross-operator) → Q5 org-role partition across operators; composes Federation. → **NET-NEW** (axis) + EXTEND Federation (cross-operator scoping reused).

### trial_protocol
- **D-026** (C1D1 windows: labs ≤72h, ECG ≤24h, preg same-day) → Q6 obligations w/ per-timepoint windows. OFC `care_obligation` + gate-timing HOLDS the mechanism; but the *protocol object* that owns the window-schedule is absent. → **EXTEND** (compose OFC) + **NET-NEW** (protocol object owns the schedule).
- **D-031** (amendment changes cadence mid-cycle; obligations migrate forward-only) → Q7 version-pin + amend-not-overwrite HOLDS; protocol-versioning is **NET-NEW** (a `standard_of_care_object` specialization, C3.5 P23).
- **D-177** (IRB approval lapses; visit during lapse) → Q6 gate blocks; `care_blocker_state` + approval-state. → **EXTEND** (blocker + approval-state on the protocol object).

### IP custody_chain / chain-of-identity
- **D-067** (temp excursion; drug administered before excursion-report reviewed) → Q1 storage-condition fact → Q6 admin-validity; quarantine obligation. → **EXTEND** (custody_chain — C3.5 already flagged net-new for controlled-substance diversion; reuse + generalize to IP).
- **D-073** (lot recall → identify subjects/doses/inventory/EDC across planes) → Q9 blast-radius across 5 planes. → **EXTEND** (custody_chain + recall-blast-radius; spans OFC/D7/P35/EDC — composition).
- **D-080** (sponsor wants IP-custody export; hospital legal-record lacks research-pharmacy fields) → Q3 custody-fields originate research-pharmacy, not care-record; Q8 export w/ lineage. → **EXTEND** (custody_chain + disclosure_package) + NET-NEW (map: custody fields are their own source-plane).
- **D-187** (CAR-T vein-to-vein chain-of-identity through manufacturing) → Q1-Q9 identity+custody must persist patient↔apheresis↔product↔infusion. → **NET-NEW** (`chain_of_identity` — custody_chain handles the product, but binding it to ONE patient identity through an external manufacturer is new) + EXTEND (Identity linked-identity).

### administration_event
- **D-016** (washout: MAR administered vs note held) → Q3 admin truth: `administration_event` is the arbiter. → **EXTEND** (administration_event already C3.5-net-new; reuse) — HOLDS once that object exists.
- **D-052** (reduced dose compounded; full-dose hung, stopped halfway) → Q6 administered ≠ ordered ≠ prepared; admin_event captures *actual*. → **EXTEND** (administration_event + dual-verify).
- **D-053** (MAR held / pump partial / note "tolerated") → Q7 3-way reconcile (device + record + narrative). → **EXTEND** (administration_event + device-rail + reconciliation) — HOLDS via composition.
- **D-065** (IV→oral switch; adherence source-authority shifts) → Q3 source-of-admin-truth changes plane (MAR→pill-count/patient). → **NET-NEW** (map must track source-shift) + EXTEND (administration_event oral variant).

### EDC reconciliation / post-lock / direct-source
- **D-127** (eCRF correction post-lock needs formal unlock + audit) → Q6/Q8 post-lock = governed change; amend-not-overwrite HOLDS. → **HOLDS/EXTEND** (locked-DB = regulatory export; OMNI governed-change reuses amend+audit).
- **D-137** (sponsor wants "all source-verified"; several AI-extracted) → Q2 abstraction; Q8 per-field verification-state honest disclosure. → **EXTEND** (verification-state + ai_decision_log) + NET-NEW (map's per-field "direct vs abstracted" attribute).

### AE split-truth
- **D-096** (ePRO grade-3 vs clinician CTCAE grade-1) → Q3 patient-symptom-source vs clinician-assessment — distinct facts, both retained (Q7). → **NET-NEW** (map) — AE is not one fact; HOLDS for capture (Observation+CM) but the *split* needs the map.
- **D-104** (causality changes post-unblind; blinded history preserved) → Q5 + Q8 temporal. → **EXTEND** (amend-not-overwrite) + NET-NEW (knowledge_partition temporal).
- **D-109** ("awareness" defines SAE clock across portal/call/ED/note) → Q1 awareness = first governed signal across rails; attention-routing. → **EXTEND** (care_obligation SLA + attention-routing; awareness-state).
- **D-110** (sponsor wants AE downgrade; source must not be altered) → Q7 refuse source-alteration; amend eCRF only. → **HOLDS** (documentation-integrity + amend-not-overwrite + the plane-separation invariant).

### RWE / outcome plane
- **D-150** (regimen-A better survival but trial-pop ≠ real-world) → Q3 RWE cohort; case-mix. → **EXTEND** (outcome_intelligence/P28; case_mix_adjustment) — OMNI should OWN.
- **D-151** (RWE AI-abstracted progression-date vs source imaging-date) → Q2/Q8 abstraction provenance (VALID-style). → **EXTEND** (outcome_intelligence + verification-state + map).
- **D-152** (sponsor external-control-arm; prove cohort-def/I-E/missingness) → Q8 reproducible cohort provenance. → **EXTEND** (outcome_intelligence + cohort-provenance) — the RWE-regulatory bar.
- **D-162** (RWE dashboard → marketing; prevent marketing-claim=clinical-truth) → Q7 plane-separation (RWE ≠ marketing ≠ clinical). → **HOLDS** (documentation-integrity + payment_care_firewall-analog plane-separation).

### P35 ownership ladder
- **D-163** (ARIA→OMNI system-of-work; ARIA→archive) → Q9 displacement-target. → **HOLDS** (P35 + ownership ladder; C3.5-net-new P35 reused).
- **D-165** (OnCore→partial-swallow calendar/coverage) → Q9 partial-swallow. → **HOLDS** (P35 ladder).
- **D-166** (locked-DB = durable regulatory export-target ROLE, NOT vendor-forever; OMNI governed write-back) → Q9 the honest durable role. → **HOLDS** (P35 ladder; OMNI owns feed/provenance/reconciliation, may eventually own the validated export env).
- **D-167** (IRT vendor-operated; read/request only, no overwrite) → Q9 command_authority_boundary modes. → **HOLDS** (P35 + command_authority_boundary).
- **D-173** (incumbent refuses write-back; OMNI still owns workflow+reconciliation) → Q9 *the anti-diminishment trace* — OMNI climbs to workflow-control even when blocked from write-back. → **HOLDS** (P35 + ownership ladder; proves OMNI ≠ middleware even at low write-access).

### payment_care_firewall / subject-identity / cross-person
- **D-138** (coverage-analysis: routine→insurance vs research-billed) → Q9 swallow coverage-analysis/billing-grid. → **EXTEND** (payment_care_firewall + coverage-analysis object).
- **D-139** (IP billed to patient insurance — breach) → Q7 firewall invariant blocks. → **HOLDS** (payment_care_firewall, D6 §8.1).
- **D-001** (one person, 5 IDs; no collapse) → Q3 identity-linkage; sponsor-pseudonym preserved. → **NET-NEW** (`trial_subject` linkage) + EXTEND (Identity patient_relationship + de-id).
- **D-005** (withdraw trial consent, continue SOC) → Q7 consent-scope splits research vs care; firewall. → **HOLDS/EXTEND** (D7 consent + purpose_of_use).
- **D-012** (death: subject-status/care-record/SAE/endpoint/publication plane-specific) → Q3/Q6 one event, 5 plane-records. → **NET-NEW** (map) — the 6-plane thesis in one row.
- **D-200** (genomic finding → relatives who are non-subjects; duty-to-warn) → Q1 cross-person; Q6 relatives not in the trial. → **NET-NEW** (cross-person chain HH from G4.1 probe) + EXTEND (consent/visibility).

## §Synthesis — where the substrate HOLDS vs FORCES net-new
- **HOLDS (reuse, no new object):** the **regulatory-integrity backbone** — amend-not-overwrite, trace_lineage, attestation/e-signature, retention/legal-hold (= ALCOA++/Part-11) ; the **payment≠care firewall** ; **plane-separation as documentation-integrity** ; the **P35 ownership-ladder** (incl. the anti-diminishment "climb-even-when-blocked" case D-173) ; RBAC **break-glass teeth** for emergency unblind. **OMNI already speaks the trial-integrity language.**
- **EXTEND (bounded, existing contract):** `administration_event` (C3.5-net-new, reused) ; IP `custody_chain` (C3.5-net-new, generalized) ; `outcome_intelligence`/RWE (P28, owned, under REV-174) ; coverage-analysis/billing-grid (D6) ; EDC-reconciliation-loop (compose: map + amend-not-overwrite + obligation) ; protocol obligations (OFC + gate-timing).
- **FORCES NET-NEW (the small spine):** **(1) `source_authority_map`** — field-level, positional (repository-of-record / origin-plane / publication-lineage); the workhorse, proven by D-013/081/103/123/135/201/012 ; **(2) `knowledge_partition` axis** (`blind_state`/`unblinding_event`/`masked_dataset`/`emergency_unblind_authority`) — temporal + inference-prohibited + org-role masking that visibility_grant cannot express ; **(3) `trial_protocol`** as a versioned governance object (small owned core) ; **(4) `chain_of_identity`** for cell therapy (D-187) ; **(5) `trial_subject` linkage** (D-001) — though largely Identity+de-id composition.
- **The load-bearing finding (D-135):** *there is no single record of truth.* Two repositories-of-record can hold the "same" fact, each authoritative in its plane (locked-study vs corrected-care); only the `source_authority_map` can represent that without corruption. **This is the C3.6 thesis, proven by trace.**

## Stop / authority
- E complete (~28 core breakers traced). **F is next (same gate); then STOP before G4.**
- `analysis_nonbinding` (`GRD-036`); no contract edits. Standing flag: git identity unset; workspace path = none (using absolute paths).

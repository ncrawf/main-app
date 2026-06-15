# v4 — C3.6B: Oncology / Trial Systems Reality Map (cited; typed evidence)

Document type: `analysis` (C3.6 arc — G1 reality-field, artifact B) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1_pending_review` 2026-06-14 (Knox-edit pass applied). Live external research, **typed into 3 evidence categories** (Knox directive 5). **Ontology-sourcing rule (corrected per Knox 2026-06-14):** regulatory/standards evidence **CONSTRAINS ontology and defines compliance + endpoint obligations** (it does not *define* OMNI's objects); vendor pages **DESCRIBE products** (never define ontology); **OMNI's ontology is DERIVED from** regulatory constraints + operational reality + OMNI's own per-event-ownership model. Regulatory/competitor evidence here is a candidate for Evidence-Plane promotion later (not required now).

> **Single most important external finding (grounds C):** FDA treats **electronic source data as located in the FIRST durable electronic data repository** to which data are transferred (EDC system, site database, cloud platform) — *source authority is positional and per-data-element, not "whatever the EHR says"* [FDA 2023 DHT/eSource Q&A, fda.gov/media/169688]. This directly validates the plan's **field-level `source_authority_map`** and the **6-truth-plane** split.

---

## Category A — Regulatory / standards evidence (CONSTRAINS ontology; defines compliance obligations + endpoint standards — does NOT define OMNI's objects)

### A1. FDA eSource — Electronic Source Data in Clinical Investigations (2013) [fda.gov/media/85183]
- Source data **fills predefined eCRF fields according to the protocol**; covers identification of **authorized source data originators**, **data element identifiers** to make the audit trail examinable by sponsor/FDA, and capture (manual or electronic) into the eCRF.
- "Electronic source data are data initially recorded in electronic format… original records and certified copies… used for **reconstructing and evaluating** the investigation."
- Source data must be **ALCOA** (Attributable, Legible, Contemporaneous, Original, Accurate) and meet recordkeeping requirements; investigator **reviews + retains**.
- **OMNI mapping:** "authorized source data originator" = a per-fact **source authority**; "data element identifier" = the field key in `source_authority_map`; eSource→eCRF transcription-elimination = OMNI capturing once and projecting (no parallel re-entry).

### A2. FDA 2023 Q&A — Electronic Systems/Records/Signatures + DHT source data [fda.gov/media/169688]
- **Electronic source data = located in the first durable electronic data repository** the data are transferred to (EDC, site DB, cloud). FDA "does not intend to inspect individual DHTs" once metadata is securely transferred + retained per the sponsor's plan.
- Part 11 **applies to RWD sources** (real-world data) when used under FDA records requirements.
- **OMNI mapping:** "first durable repository" is the canonical **source-of-record per element** — OMNI's job is to *be* (or govern) that repository with provenance, not to be a downstream copy. This is the anti-diminishment hook: own the first durable repository for the planes OMNI should own.

### A3. 21 CFR Part 11 + ALCOA++ [govinfo CFR-2024-title21-vol1-part11; clinicaltrials101; intuitionlabs; assyro]
- Electronic records/signatures legally equivalent to paper **with controls**: system **validation**, **secure time-stamped audit trails** (who entered/changed data, when, why — **without obscuring the original entry**), **unique non-reusable e-signatures** (identity verified; name+date+meaning bound to the record), access controls, retention.
- **ALCOA++** = ALCOA + Complete, Consistent, Enduring, Available, **Traceable**. Corrections allow **reason-for-change + attributable audit-trail**; **prohibit edits that overwrite timestamps**. ICH **E6(R3) GCP** explicitly references data governance for electronic source.
- **OMNI mapping:** this *is* OMNI's `amend_not_overwrite` (D7/CM) + `trace_lineage`/`cns_decision` (CNS) + 4-tier `attestation` + e-signature (RBAC) + `retention_class`/legal-hold (D7). **OMNI already speaks ALCOA++ natively** — a major reuse finding.

### A4. RECIST 1.1 — response measurement standard [dctd.cancer.gov RECIST v1.1; PubMed 19097774; RSNA primer]
- Target lesions: ≤5 total, ≤2/organ; measurable ≥10 mm (nodes ≥15 mm short axis). Sum-of-diameters (SOD) vs **baseline or nadir**. **CR** (all gone; nodes <10 mm) / **PR** (≥30% ↓ vs baseline) / **PD** (≥20% ↑ vs nadir AND ≥5 mm absolute, or any new lesion) / **SD**. **Confirmation required** for response-primary-endpoint trials, not for randomized (control arm interprets). CRF design per protocol.
- **OMNI mapping:** RECIST is a **derived, versioned, deterministic computation over measured observations** (lesion diameters = Observations) → a **read/interpretation** (P30 diagnostic-read-lifecycle) → an **adopted assertion** (CM). The *measurement* source = imaging/read workflow; the *response category* = a computed+adopted endpoint. Per-field source authority in action.

### A5. CTCAE (adverse-event grading) — [referenced; standard NCI CTCAE]
- Adverse events graded 1–5 by severity per standardized terminology; AE attribution (related/unrelated to drug vs disease) is a **clinician/trial assessment**, distinct from the raw symptom (patient-reported) and from the lab value (source feed).
- **OMNI mapping:** AE = a chain — patient/clinician **symptom observation** → **CTCAE-graded assessment** (adopted clinical assertion) → **SAE reporting obligation** (sponsor/IRB clock) → **eCRF AE field**. Three different source authorities for one "adverse event."

---

## Category B — Vendor reality evidence (DESCRIBES products; does NOT define ontology)

### B1. Varian/Siemens **ARIA** — oncology information system (OIS) = oncology-specific EMR [siemens-healthineers ARIA-OIS; VA TRM; Friends of Cancer Research]
- Comprehensive **oncology-specific EMR** across radiation + medical + surgical oncology; manages the patient journey dx→treatment→follow-up. **300+ chemo regimens** with automated dose calc (m²/Kg/AUC), drug-interaction + dose-limit checks, **orders sent to pharmacy**; **AJCC auto-staging**; lab/toxicity profiles; **embedded rule-based decision support**; **clinical-trial tracking/management**. HL7/DICOM interfaces to hospital EMR. CancerLinQ-certified (feeds RWE). Stores in Varian SQL DB.
- **Truth plane:** clinical **care truth** for oncology (dx/staging/regimen/admin/tox/labs) + onc administrative/financial. **Ownership-ladder posture (hypothesis): displacement-target** where OMNI owns the care environment (chemo regimen → `protocol_order`; admin → `administration_event`; staging/tox → adopted assertions).

### B2. **OnCore** (Advarra) — CTMS = trial operations / control plane [advarra OnCore; Mount Sinai Research Roadmap; IU OCR; UCHealth CRPC]
- Enterprise CTMS for AMCs/cancer centers (50–500+ trials): **protocol lifecycle** (setup→activation→screening→registration→close-out), subject + **calendar** management, **integrated financials** (budget, **sponsor invoicing**, receivables), effort tracking, biospecimen, registries.
- **Medicare Coverage Analysis (MCA)** → **billing grid** designating each charge **research-related vs routine**, with rationale + reference docs; the **CRPC interface transfers the billing grid to Epic** to route charges per designation on the patient timeline.
- **Truth plane:** **trial OPERATIONS / control plane** — **NOT** the source of chemo-administered, AE grade, randomization, RECIST, or endpoint truth (confirms Knox directive 1). The MCA/billing-grid **is the real-world billing-firewall mechanism** (research vs routine = OMNI's `payment_care_firewall` + research-billed-vs-SOC). **Ladder posture (hypothesis): partially swallowed** by `trial_protocol` (calendar/windows/activation) + `care_obligation` (subject visit tracking) + a coverage-analysis/billing-grid object; finance/invoicing may stay peer/integrated longer.

### B3. **OncoEMR / Flatiron** — oncology EHR + RWE abstraction [flatiron.com database-characterization; JCO-CCI VALID framework; Flatiron RWE]
- OncoEMR = cloud oncology-specific EHR; feeds **Flatiron RWD** (5M+ records, 200+ practices, 1000+ sites). Hybrid curation: **human abstraction + NLP/ML/LLM**; the **VALID framework** (variable-level performance vs human abstractors; automated consistency/plausibility checks; replication of established clinical findings) makes AI-extracted RWD into **"regulatory-grade evidence."**
- **Truth plane:** care truth (EHR) + the **RWE/outcome plane** (P28) built ON TOP via governed abstraction. **VALID = the real-world analog of OMNI's verification-state (Observation) + clinical-adoption (CM) + model_version/eval (CNS).** **Ladder posture (hypothesis):** care workflow = displacement-target; **RWE/outcome-intelligence = OMNI aims to OWN** (the abstraction+validation+provenance is exactly OMNI's adoption/eval machinery — this is a "swallow, don't coordinate" plane).

### B4. EDC/eCRF, IRT/IWRS, ePRO/eCOA — (named in A1–A3 regulatory sources; standard roles)
- **EDC/eCRF** (Medidata Rave / Veeva Vault EDC class) = the **study dataset** representation; predefined fields per protocol; subject to Part 11 (validation, audit trail, e-sign); the SDV/query/lock pipeline lands here. **EDC/locked-DB = often the "first durable repository" for trial-specific fields** (A2) → likely a **long-lived regulatory/export target**, not a displacement target.
- **IRT/IWRS** = randomization + drug-supply management; the **randomization assignment source** + IP inventory. **Ladder posture: vendor-operated control** under strict capability modes (blinding integrity depends on it).
- **ePRO/eCOA** = patient-reported outcomes (symptoms, QoL) captured electronically; Part 11/eSource apply (A3 notes eCOA is regulated). **Ladder posture: swallowed into the OMNI patient surface** (PROs are patient-source observations OMNI already models).

---

## Category C — Operational reality evidence (DESCRIBES workflows; informs scenarios)
- **Source-data verification (SDV):** sponsor/CRA monitors compare eCRF values against source; mismatches generate **sponsor queries**; resolution requires **correction-without-overwrite** + reason-for-change audit (A3). → OMNI: the **EDC reconciliation loop** = `source_authority_map` + `amend_not_overwrite` + a query-as-obligation (`care_obligation`/conversation_scope).
- **AE/SAE reporting:** symptom → CTCAE grade → SAE determination → **sponsor/IRB reporting clock** (regulated timelines). → OMNI: chain of observation → adopted assertion → escalation/obligation with SLA.
- **Drug/IP accountability:** investigational product shipped→received→stored→assigned→prepared→dispensed→administered→returned→wasted→destroyed + temperature excursions + lot/batch trace + sponsor reconciliation (GCP). → OMNI: the **IP-custody breaker family** (D — mandatory), spanning OFC/D7/P35/trial_protocol/billing-firewall.
- **Coverage analysis / research-vs-routine billing:** MCA + billing grid (B2) determines what is billed to sponsor vs insurance vs patient; investigational drug typically not billed to patient. → OMNI: `payment_care_firewall` + claim-lifecycle + a coverage-analysis object.

## §Synthesis pointers (carried into C)
1. **Source authority is positional + per-element** (A2 "first durable repository") → field-level `source_authority_map`.
2. **OMNI already speaks ALCOA++** (A3) via amend-not-overwrite + trace_lineage + attestation + retention → strong reuse; the trial world's integrity rules are OMNI's existing invariants.
3. **CTMS = operations/control plane** (B2), confirmed; do not let it absorb clinical/source/endpoint planes.
4. **EDC/locked-DB = likely long-lived regulatory/export target**; **RWE = OMNI-should-own** (B3 VALID ≈ OMNI's adoption/eval machinery); **ARIA/OncoEMR care workflow = displacement target**; **IRT = vendor-operated**; **ePRO = swallowed**.
5. **Every "response/outcome" is a multi-source chain**, not a single fact (A4/A5): measurement (imaging/lab) → computation (RECIST/score) → assessment (clinician) → endpoint (locked EDC after adjudication).

## Stop / authority
- `analysis_nonbinding` (`GRD-036`). Cited public refs (URLs inline); full pages cached locally by the research tool if deeper pull needed for C. EDC/IRT/ePRO descriptions are from the regulatory sources + standard roles (flagged), not a dedicated vendor pull — sufficient for the reality-field.
- Next in G1: **C** (field-level source-authority map + 6-plane map + knowledge-partition axis + per-system ownership ladder). Then STOP for G1 trifecta review.
- Standing flag: git identity unset.

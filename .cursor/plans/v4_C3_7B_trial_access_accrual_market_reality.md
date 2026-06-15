# v4 — C3.7B: Trial-Access / Accrual Market Reality Map (cited)

Document type: `analysis` (C3.7 arc — G1 reality-field, artifact B) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1_pending_review` 2026-06-14. Live cited research (2026-06-14). **Ontology-sourcing rule:** OMNI's access ontology = regulatory/economic constraints + operational reality + OMNI's ownership model — **NOT** vendor marketing. START/OneOncology language is read as *market evidence of the pain + wedge shape*, not as ontology.

## §1 The accrual pain (why this is a real, unsolved problem)
- **Only ~5–7% of adult cancer patients enroll** in trials; rates have not improved much over time. [ACS CAN landscape report; JCO-CCI 2025 CTPM]
- **~20% of cancer trials fail due to insufficient enrollment.** [ACS CAN landscape report]
- **Only ~23% (≈1 in 4) of patients have a matching trial ONSITE** where they're seen; far lower at low-research sites. Off-site matching (ClinicalTrials.gov, advocacy) yields **very few enrollments** — high patient effort + health-literacy + resource barriers. [Cancer 2024 consensus (cncr.35034)]
- **Prescreening is the rate-limiter:** manual chart abstraction is **tens of minutes to multiple hours per patient; 3.4–8.8 hrs per ENROLLED patient.** [Nature Comms TrialMatchAI 2026]
- **Community gap:** the majority of cancer patients are treated in community settings but historically had access to **<20% of early-phase trials** (academic-center-centralized). [START/OneOncology 2025]

## §2 The public registry / patient-search reality (the weak status quo OMNI must beat)
- **ClinicalTrials.gov** = searchable registry/results DB: purpose, eligibility, locations, contact info. **NCI** = cancer-trial search + a six-step patient guide (gather cancer details → search → narrow → contact team → ask questions → make appointment). [public registries]
- This workflow is **search-then-beg**: tools hand patients a list; the patient/family must self-navigate, self-abstract records, and cold-contact institutions. Screening is mostly only for **onsite** trials. **The matching environment is broken by consensus.** [Cancer 2024 consensus]
- **AI matching is emerging but not the environment:** TrialMatchAI (~4.6 min/patient ranked shortlist w/ criterion-level rationale); OMOP/FHIR-standardized CTPM screened 98,348 patients across 29 trials → 825 candidates → 117 enrollments (9–37% consent rates); Human+AI prescreen accuracy 76.5% vs 71.1% human-alone but **no time savings yet** (automation-bias limits). [Nature Comms 2026; JCO-CCI 2025; PubMed 41634037] → *matching is a feature, not the governed access environment OMNI would own.*

## §3 The market structure / wedge proof (START + OneOncology)
- **START** (South Texas Accelerated Research Therapeutics): **Warburg Pincus acquired a majority interest, Apr 2024**; world's **largest Phase I oncology program (400+ patients/yr)**; community-based early-phase research-site network; **8 sites** US+Europe (expanding: Northwell NY, OneOncology practices, Baptist, Carolina Urologic); **25–31 PIs**; **700–1,000+ early-phase trials**; contributed to **45 FDA/EMA-approved therapies**; "**95% first site to open**," top enroller; **30,000+ new patients/yr** network access; mission **"Hope Through Access"**; CEO names a "**massive access issue.**" [Warburg Pincus; Jackson Walker; PRNewswire 2025; Biz Journals 2024; startresearch.com]
- **OneOncology**: physician-led community platform — **1,750 providers, ~1M patients, 565+ sites**; partnering with START to **embed early-phase research in community practices** (LACN, CCBD/Dallas-Fort Worth, Astera NJ, + Michigan). [startresearch.com; targetedonc; clinicaltrialsarena 2025]
- **Wedge shape (evidence, not vibes):** community oncology + pharma + trial access + operational excellence + patient accrual. PE is funding consolidation of exactly this layer.
- **UNVERIFIED (flagged):** the "**$40M profit/site**" and "**$250M acquisition / $1B IPO**" figures could **not** be confirmed from public sources here. Treat as Nick's directional hypothesis, not fact. The *verified* signal (PE majority stake, scale, "access issue" framing, community embedding) already supports the wedge.

## §4 The site economics + the firewall reality (why plan §3 is load-bearing)
- **Sites are paid by sponsors:** per-patient payments + invoiceable items + pass-through costs + administrative + procedure/effort-based fees; **fair-market-value** negotiated off an internal budget. [BU CRRO; SOCRA]
- **Coverage Analysis (CA) / Medicare Coverage Analysis (MCA)** is mandatory pre-budget: a protocol-by-protocol billing grid splitting **research-only (sponsor-paid)** vs **routine SOC (billable to insurer/patient)**, per **CMS NCD 310.1** (routine costs covered EXCEPT the investigational item, data-collection-only items, and sponsor-free items). [CMS NCD 310.1; WCG; SOCRA; BU]
- **The cardinal sin = double-billing** (billing sponsor AND insurer for the same item). **Each item has exactly one payer.** **The PI carries billing-compliance responsibility; misrepresentation → fraud exposure / Medicare denial.** [WCG; CMS NCD 310.1; BU]
- **Direct C3.7 consequence:** OMNI's accrual economy (`sponsor_site_contract`/`payment_schedule`) MUST encode the coverage-analysis billing grid (sponsor XOR insurer per item) and MUST be firewalled from the clinical recommendation (`accrual_incentive ≠ care_recommendation`, plan §3). This is `payment_care_firewall` at its sharpest + a compliance invariant, not a nice-to-have.

## §5 Regulatory / ethical constraints (the gating-risk lens)
- IRB-approved recruitment materials; no undue inducement; informed consent BEFORE screening procedures; FDA promotion rules on investigational products; anti-kickback / Stark / fair-market-value on site payments; conflict-of-interest (pharma funding); health-literacy / vulnerable-population + equitable-access (diversity) mandates.
- **These define the access ontology** (what a listing may say, when consent gates a screening, who may be paid for what) — exactly the "ontology-from-constraints" rule.

## §6 What B establishes for C
1. The pain is real, large, and **unsolved by search tools** → an *environment* (not a matcher) is the opening.
2. The **funnel** (discovery → record-ingestion → source-backed pre-screen → human triage → referral → handoff → consent → screen/enroll/fail → follow-up) is the spine C maps.
3. The **accrual economy + coverage-analysis billing grid + firewall** is a first-class plane, not an afterthought.
4. Incumbents (registries, matching vendors, CTMS, sponsor portals, academic gatekeeping, even START-class networks) are **ladder rungs** — C maps current→target posture.

## Stop / authority
- `analysis_nonbinding` (`GRD-036`). Citations are market/regulatory evidence, not ontology. Next: **C** (access funnel + ownership ladder), then STOP for G1 trifecta review. Standing flag: git identity unset.

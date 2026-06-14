# v4 — C3.5 Convergence Check (pre-G4): is the FAMILY set closed, or are we stopping too early?

Document type: `analysis` (C3.5 arc — convergence proof gating G4) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `complete` 2026-06-14 (C3.5 pressure-test agent). Purpose: answer Nick's question — *"why stop at 1,158? why not 2k/5k/10k?"* — with **evidence, not a vibe.** This is NOT another row batch; it is an adversarial probe of whether NEW hospital domains yield NEW primitive families beyond P1–P40.

## The distinction that decides it
- **Coverage axis** (enumerate scenarios): unbounded. 1,158 is trivially incomplete; 10,000+ is real and is **the simulation/eval harness's job** (P39, chain DD), not a markdown file's. Hand-typing 5,000 more rows = doing the harness's job manually and badly.
- **Discovery axis** (find substrate LAWS — families/chains/decisions v4 must carry): **bounded, and testable.** The test: do un-batched domains produce NEW families, or map to the existing 40?
- **Family-yield curve so far:** F2 +17 → F3 +9 → F4 +9 → F5 +5 (mostly dedupe). Falling. **This check tests whether that fall is real or an artifact of Knox running dry.**

## Adversarial breadth probe — 24 domains we did NOT batch deeply
Question per row: **new primitive family (beyond P1–P40)? or maps/extends?**

| # | Un-batched domain | New family? | Maps to / verdict |
|---|---|---|---|
| 1 | Pediatrics / NICU / growth-development | No | `weight_indexed_dose`, `surrogate_authority`, `care_obligation` (extension) |
| 2 | Obstetrics / L&D / maternal-fetal dyad | No | `linked_identity_event`, `movement_state` (covered SUP-453) |
| 3 | Behavioral health / involuntary / capacity / milieu | No | `legal_status_state`, `patient_rights_state`, `time_bound_order` (extension) |
| 4 | Genomics / pharmacogenomics / **cascade testing of relatives** | No (but NEW CHAIN) | maps to P13/P30 + **new chain HH: cross-person finding→relative-risk→consented-outreach** |
| 5 | Oncology longitudinal / survivorship | No | `protocol_order`, `outcome_intelligence`, `care_obligation` (covered) |
| 6 | Rehab / PT-OT-SLP / functional status | No | `Observation`, `outcome_intelligence` (functional-status extension) |
| 7 | Palliative / hospice / goals-of-care / death | No | `consent_artifact`+`critical_fact_floor` (directives), death=SUP-452 |
| 8 | SDOH / case management / community resources | No (bounded ext.) | `care_obligation`+`projection` + candidate `social_determinant_state` (extension of P9 observation) |
| 9 | Patient financial experience / affordability / charity / price-transparency | No | `claim_lifecycle`, `payment_care_firewall`, D6 commerce (extension) |
| 10 | Public health / outbreak / contact-tracing / mandatory-report | No | `movement_state` tracing (B3-171), reporting (SUP-450) |
| 11 | Organ transplant / donation / allocation / immunosuppression | No | allocation SUP-451, `protocol_followup`, cross-identity match (bounded) |
| 12 | Dialysis / chronic ESRD program | No | `protocol_order`+`observation_freshness` (SUP-438) |
| 13 | Trauma / EMS / disaster / mass-casualty | No | covered (SUP-101/473, `degraded_mode`, `operational_simulation`) |
| 14 | Telehealth / cross-jurisdiction / RPM | No | `jurisdiction_admission_rule`, `external_capability`, `continuity_binding` |
| 15 | Quality / accreditation / regulatory measures (MIPS/core) | No | `outcome_intelligence`+`projection` (B3-467) |
| 16 | Research / biobank / registry | No | covered F4 (`trial_protocol`, `data_product_governance`) |
| 17 | Pharmacy economics / 340B / formulary | No | `claim_lifecycle`, `supply_consumption`, `payment_care_firewall` (extension) |
| 18 | GME / teaching service / supervision | No | `care_team_graph`, `attestation`, `credential_capability_state` (covered) |
| 19 | **Value-based-care / risk contracts / ACO / shared-savings** | No (but FLAG) | `outcome_intelligence`+`claim_lifecycle`+`compensation_rule` + **candidate object `risk_contract` / payer-incentive object — flag for v4** |
| 20 | **Forensics / chain-of-custody / SANE / law-enforcement interface** | No (but NEW CHAIN) | `custody_chain`+`legal_hold`+`visibility_grant`+`purpose_of_use` + **new chain II: law-enforcement-access (warrant→purpose→scoped-disclosure→audit)** |
| 21 | **Reproductive / fertility / IVF / gamete-embryo custody-disposition** | No (bounded ext.) | `custody_chain`+`consent_artifact`+multi-party `surrogate_authority`+`retention_class` — **longitudinal biological-material disposition-authority extension** |
| 22 | Non-traditional settings: dental / vision / vet / retail-clinic | No | operator-graph (P36) node variants + surface-variants (P14) |
| 23 | OMNI-ecosystem / inter-vendor interop / standards body | No | `operator_graph`+`external_capability` at ecosystem tier (chain GG generalizes) |
| 24 | Climate / sustainability / facilities-energy | No | `facility_state`+`service_work_order` (niche operational extension) |

## Result of the probe (the honest finding)
- **New primitive families found across 24 adversarial un-batched domains: ZERO.** Every domain maps to P1–P40 or is a bounded *extension* of an existing family.
- **New RELATIONSHIP CHAINS surfaced: 2** — **HH** (genomic cross-person finding → relative-risk → consented-outreach) and **II** (law-enforcement/forensic access → warrant/purpose → scoped-disclosure → audit). G4 should carry these (cheap, real).
- **Net-new bounded EXTENSIONS to flag for v4 (not families): 3** — `risk_contract`/payer-incentive object (P20/P38), `social_determinant_state` (P9), longitudinal biological-material disposition-authority (P3 custody). G4 lists these as "extension candidates," not gaps.
- **Verdict: the family set (P1–P40) is CONVERGED.** The falling yield curve was real, not a Knox artifact: when *I* (not Knox) deliberately hunted new families across the domains a hospital lifer would name, I found new rows, two new chains, three extensions — and **no new families.**

## So why stop at ~1,158 (the defensible answer to "why not 5,000?")
Not "diminishing returns" (a vibe). Because:
1. **The discovery axis is closed at the family/chain/decision level** (this probe is the evidence). More manual rows would re-derive P1–P40.
2. **The coverage axis is the harness's job, by design.** OMNI's edge is NOT that we hand-enumerated more scenarios than Silicon Valley. It's that the 40 families + 33 chains let the **simulation/eval harness (P39, chain DD)** *generate, organize, govern, and regression-test* 10,000–30,000+ scenarios with provenance — continuously, as a permanent system function. **The thesis bottles the laws; the harness scales the scenarios.** If we want 30k organized scenarios, the correct artifact is the *spec for that harness*, not a bigger markdown file.
3. **Doing 5,000 more by hand would actively weaken the thesis** — it spends the effort that should go into bottling the laws into doctrine (G4 → v4 → contracts) without de-scaffolding, exactly the anti-pattern.

## What this means for the row-generation phase
- **Stop manual row generation.** Not because we "imagined everything" (we did not — and the doc says so plainly), but because **the substrate-law discovery has converged and the remaining 10k+ scenarios belong in the harness.**
- **If, in G4 or v4, a genuinely-new family appears** (this probe says it won't, but if it does), that is a targeted addition — not a reason to reopen broad batching.
- **Carry into G4:** chains HH + II; the 3 extension candidates; and the explicit, falsifiable convergence claim above (so v4 inherits *proof of closure*, not a hand-wave).

## One honest caveat (so this isn't overclaiming)
"Family-converged" ≠ "complete." Each family's internal **depth** (full state machines, every failure mode, every edge) is NOT exhausted — nor should it be at thesis stage; that depth is **contract-design + eval-harness** work. This probe only claims the **top-level family/chain set is closed enough to carry the thesis.** That is the claim G4 needs, and no more.

# v4 — C3.5C: Actor / Department / Authority Map

Document type: `plan_or_roadmap` (C3.5 arc artifact C) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1` 2026-06-13 (C3.5 pressure-test agent; Gate 1 / Reality-Field). Prior `shell_pending_population`.
Gate: **G1 (Reality-Field)**. Purpose: map WHO participates and WHAT authority they carry — because OMNI's doctrine is authority-first ("who may do what, under which policy, with which proof, in which setting"). This is the reality field's authority dimension, sourced from B + cited anchors; no OMNI comparison (that is F).

> Authority-first lens. Where a boundary is regulation-anchored it is cited (`[Rn]` per B §3). The recurring theme: in a hospital, **capability ≠ authority ≠ the act** — the same clinical fact passes through several distinct hands, each gated.

---

## 1. Actors / roles (+ core authority boundary)

| actor | core authority (what they MAY do) | gated / may NOT (without escalation) | anchor |
|---|---|---|---|
| **Attending physician (of record)** | full order authority; admit/discharge; final diagnosis; sign/authenticate the legal record; supervise trainees | acts outside privileged scope; bypass co-sign where required | §482.24 authentication + final-dx ≤30d [R-CMS] |
| **Resident / fellow (trainee)** | place orders + document **under supervision**; many orders require attending **co-sign** | independent attending authority; unsupervised high-risk acts | co-sign/authentication chain [R-CMS] |
| **Hospitalist** | inpatient attending-of-record for medical patients; orders/admit/discharge | surgical/procedural authority outside privileges | privileging |
| **APP — NP / PA** | order/prescribe + document within **state scope + collaborative/supervisory agreement**; varies by state | acts beyond state scope / agreement; controlled-substance limits | state scope + DEA |
| **Consulting physician** | consult opinion + recommend/place orders within consult scope | assume attending-of-record authority | consult workflow |
| **Surgeon / proceduralist** | operative orders; perform privileged procedure; op-note + consent | procedures outside credentialed privileges | credentialing/privileging |
| **Anesthesiologist / CRNA** | anesthesia plan + administration; pre-anesthesia eval; PACU orders | beyond anesthesia scope / supervision model | §482.24 H&P-before-anesthesia [R-CMS] |
| **Registered Nurse (RN)** | execute orders; **administer medications (the act)**; nursing assessment + notes; flag/escalate | order/prescribe; verify own high-risk med alone (independent double-check) | BCMA five-rights actor [R7][R8] |
| **Charge nurse** | unit assignment, throughput, escalation authority | clinical order authority | unit policy |
| **LPN / nursing assistant (CNA/PCT)** | delegated tasks + vitals within scope | assessment/administration beyond scope | state scope/delegation |
| **Pharmacist** | **verify/clarify orders**; dispense authority; therapeutic interchange per protocol; intervention | place the original order (except per protocol) | closed-loop verification step [R7] |
| **Pharmacy technician** | prepare/stock under pharmacist supervision | verify/clinical-check | pharmacy supervision |
| **Lab tech / clinical-lab scientist** | run + result tests; flag critical values | clinical interpretation/diagnosis | CLIA |
| **Pathologist** | interpret pathology; sign pathology report | — | report authority |
| **Radiologic tech** | acquire imaging | interpret/diagnose | scope |
| **Radiologist** | interpret imaging; sign report; communicate critical findings | — | report + critical-result comms |
| **Respiratory therapist** | respiratory care within orders/protocol | order outside scope | scope/protocol |
| **PT / OT / ST** | evaluate + treat within referral/plan-of-care; therapy documentation | medical orders outside scope | plan-of-care |
| **Case manager / utilization mgmt** | level-of-care + discharge-planning authority; payer/UM interface | clinical orders | UM/discharge policy |
| **Social worker** | psychosocial assessment, placement, safety/legal coordination | clinical orders | scope |
| **Registered dietitian** | nutrition assessment + (often protocol) diet orders | non-nutrition orders | privileging |
| **HIM / medical-records** | record completeness, release-of-information, amendment workflow, coding interface | clinical content authorship | §482.24 record-integrity [R-CMS] |
| **Coder / biller / rev-cycle** | code from documentation; charge capture; claims/denials | alter clinical documentation | coding compliance |
| **Compliance / privacy officer** | audit, minimum-necessary enforcement, breach response, break-glass review | clinical care | HIPAA + §482.24 [R-CMS] |
| **Infection preventionist** | surveillance, reporting (NHSN), isolation guidance | individual clinical orders | CMS/CDC reporting |
| **Credentialing / medical-staff office** | grant/verify **privileges** (who-may-do-what) | clinical care | medical-staff bylaws |
| **IT / security / clinical informatics** | access provisioning, interface ops, audit/SIEM, build/config | clinical decisions | ONC `(d)` security [R2] |
| **Device / vendor reps** | device support, sometimes OR presence (credentialed-vendor) | patient care / record authorship | vendor credentialing |
| **External lab / imaging (Quest/LabCorp/imaging center)** | perform + result outsourced diagnostics | OMNI/host clinical authority | interface/result feed [R10] |
| **Referral / receiving facility (SNF/home-health/rehab)** | accept transfer; continue care under their own authority | act before transfer/consent | transitions [R12] |
| **Payer / UM reviewer** | coverage/auth determinations; concurrent review | clinical care | prior-auth |
| **Patient** | consent/refuse; access own record; contribute data; designate surrogate | clinical order authority | §482.24 consent + `(e)(1)` access [R-CMS][R2] |
| **Family / surrogate / guardian / POA** | surrogate decision-making within legal authority | beyond legal authority scope | consent law |

## 2. Departments / units (per reality map B)

- **Acute inpatient:** ED · med-surg floors · ICU/CCU/step-down · telemetry · OR · PACU · cath/interventional lab · OB/L&D · postpartum/nursery/NICU · inpatient psych/behavioral · inpatient rehab.
- **Ancillary / diagnostic:** clinical lab · pathology · radiology/imaging (RIS/PACS) · pharmacy (inpatient + outpatient/discharge) · dialysis · oncology/infusion · respiratory.
- **Operational / administrative:** registration/admitting · bed management/patient-placement · HIM/medical-records · case-management/social-work/discharge-planning · billing/coding/rev-cycle · UM/prior-auth · supply chain / sterile processing / implant tracking · infection control · quality/regulatory · credentialing/medical-staff office · IT/clinical-informatics/security.
- **Post-acute / cross-setting:** SNF · ECF/LTC · LTACH · inpatient/outpatient rehab · home health · ASC · community/critical-access hospital · specialty hospital · hospice. Each is a distinct **certified entity** with its own assessment/reporting regime (e.g., SNF → MDS/QRP [R12]).

## 3. Authority / policy boundaries (the gates)

The hospital authority model is **per-act, multi-actor, and setting-dependent** — the through-line of OMNI's "right actor / right authority" mantra meets its hardest test here.

1. **See ≠ act ≠ review/sign ≠ release** are distinct grants. HIPAA **minimum-necessary** governs *see*; scope/privileges govern *act*; authentication governs *sign*; HIM/ROI governs *release* [R-CMS][R2].
2. **The order→verify→administer chain is the canonical multi-actor gate.** Physician/APP **orders** (authority to intend) → pharmacist **verifies** (authority to check/clarify/dispense) → RN **administers** (authority to perform the act, five-rights-gated) → eMAR records [R5][R6][R7][R8]. Three actors, three authorities, three audit entries — **no single role spans the chain.**
3. **Scope of practice + privileging is the capability-vs-authority firewall.** Credentialing/medical-staff grants *privileges* (who-may-do-what); a licensed surgeon is not authorized for a procedure outside granted privileges. Capability (license) ≠ authority (privilege at this facility) [medical-staff bylaws].
4. **Verbal/telephone orders + co-sign** carry **time-bound authentication** requirements; trainee orders carry **attending co-sign** requirements [R-CMS].
5. **Documentation authority + integrity:** entries must be **authenticated by the person responsible**, dated/timed; the record is **amend-not-overwrite** (corrections are addenda preserving the original); author identification + tamper-resistance are required [R-CMS][R2].
6. **Delegation is bounded + supervised** (RN→CNA tasks; physician→APP per agreement; pharmacist→tech) — delegation never transfers the delegator's accountability.
7. **Gated high-risk acts:** controlled substances (DEA), high-alert meds (independent double-check), restraints/seclusion (psych legal authority), blood products, override of ADC, break-glass record access (audited) — each is an explicit, logged gate.
8. **Cross-setting authority CHANGES on transition.** Outpatient→inpatient admission creates a **new attending-of-record + new order authority + new encounter**; inpatient→SNF transfer hands authority to the receiving facility under its own privileging + a **reconciled med list** obligation [R12]. Authority is **not portable across settings** — it is re-established at each transition. (This is the single most authority-dense reality in the map.)
9. **Patient/surrogate authority** (consent, refusal, access, designation) is its own track, gated by legal capacity + surrogate hierarchy.

## 4. Compliance surfaces + operational dependencies

**Compliance surfaces:**
- **Legal medical record + retention** (§482.24: completeness, authentication, ≥5-yr retention, authorized release) [R-CMS].
- **HIPAA** (minimum-necessary, access control, audit, breach) + **42 CFR Part 2** (SUD records — heightened consent) + state privacy.
- **Consent** (informed consent for procedures/anesthesia; properly executed + retained) [R-CMS].
- **Controlled-substance** (DEA registration, PDMP, EPCS).
- **Credentialing / privileging** (medical-staff bylaws; the who-may-do-what authority source).
- **Quality/regulatory reporting** (CMS Promoting Interoperability, Hospital IQR, SNF QRP/MDS, NHSN infection reporting, public-health/eCR) [R1][R12].
- **Certification/interoperability** (ONC criteria, USCDI floor, information-blocking rules) [R1][R3].
- **Accreditation** (Joint Commission / DNV — critical-result comms, med-management standards, record-of-care).

**Operational dependencies (handoff + integration points where care + authority cross boundaries):**
- **Shift handoff** (nurse-to-nurse, provider sign-out) — authority + accountability transfer within a unit.
- **Transfer / level-of-care change** (floor↔ICU, unit↔OR↔PACU) — encounter state + order-set + attending changes.
- **Discharge / care transition** (hospital→SNF/home/rehab) — discharge summary + med reconciliation + receiving-provider handoff [R-CMS][R12].
- **Interface dependencies** — HL7 v2 ADT/ORM/ORU; LIS, RIS/PACS, pharmacy, ADCs, smart pumps, monitors; external lab/imaging feeds; TEFCA/QHIN exchange [R10][R11]. The platform **does not own** most of these; it integrates with them permanently.
- **Vendor / external-actor dependencies** — outsourced labs/imaging, device vendors, credentialed vendor reps, referral/receiving facilities, payers/UM.

---

### Stop-proof (G1 COMPLETE)
A (existing-asset inventory + HCASE schema), B (cited hospital/EHR reality map), and C (actor/department/authority map) are populated. **This completes Gate 1 (Reality-Field).** Per the kickoff, I now **STOP for review** — no scenario library (D / Coverage Manifest), no deep traces (E), no gap matrix (F), no handoff (G) until G1 is reviewed. All three artifacts are `analysis_nonbinding` and bind nothing (`GRD-036`); B defines hospital reality only from cited public sources; no OMNI comparison has been made yet (that begins at F). Governance note: A/B/C are existing shells now populated — catalog/read-graph spoke rows were flagged owed-on-population by the setup agent; I have not edited catalog/read-graph (out of scope for the pressure-test agent), flagging for the continuity agent.

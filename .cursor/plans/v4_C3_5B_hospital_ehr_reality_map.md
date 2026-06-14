# v4 — C3.5B: Hospital-Grade EHR / Care-Platform Reality Map

Document type: `plan_or_roadmap` (C3.5 arc artifact B) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1` 2026-06-13 (C3.5 pressure-test agent; Gate 1 / Reality-Field). Prior `shell_pending_population`.
Gate: **G1 (Reality-Field)**. Purpose: define the hospital-grade EHR / care-platform **reality field as it actually is** — from cited public/industry references — BEFORE OMNI is compared to it.

> **Binding method (kickoff §2):** researched from **cited public/industry sources** (ONC certification criteria; CMS hospital medical-record CoP; USCDI; FHIR workflow resources; closed-loop med-mgmt literature; HL7 ADT/TEFCA; CMS SNF/MDS; KLAS market). **OMNI doctrine may COMPARE, but must NOT DEFINE hospital-grade reality.** No OMNI comparison appears here — that is artifact F. This map is deliberately written from the field's frame, not OMNI's.

---

## 1. Capability families that define hospital-grade gravity (researched + cited)

Each family is a load-bearing capacity a serious acute-care platform is held to. `[Rn]` → §3 references.

### F1 — Order management / CPOE + order sets
Computerized Provider Order Entry is a certification floor, split by order type: **`170.315(a)(1)` CPOE-Medications · `(a)(2)` CPOE-Laboratory · `(a)(3)` CPOE-Diagnostic Imaging**, plus **`(a)(4)` Drug-drug / Drug-allergy interaction checks** [R1][R2]. An *order* is an authorization/intent — not the act. In FHIR's workflow model an order is a **Request resource** (`MedicationRequest`, `ServiceRequest`) whose **status reflects the authorization/intention, not execution**; fulfillment/progress is tracked separately (by the corresponding **Event** resource and/or a `Task`) [R5][R6]. Hospital ordering adds **order sets, protocols, co-sign/verbal-order authentication, and "not fully specified" orders** that pharmacy/nursing complete within authority [R5][R-CMS]. *Key fact: an order authorizes; it does not record that anything happened.*

### F2 — Closed-loop medication management (the hospital safety spine)
The hospital med cycle is an **end-to-end closed loop**: CPOE order → **pharmacist verification** → automated dispensing cabinet (ADC, override-limited) → **barcode medication administration (BCMA)** validating the **"five rights"** (right patient, medication, dose, route, time) by scanning the patient wristband + the medication's barcode → **electronic MAR (eMAR)** auto-documentation, with smart-pump integration for IV [R7][R8][R9]. This is a *different object lifecycle from a prescription*: in FHIR, `MedicationRequest` (order) → `MedicationDispense` (supply) → **`MedicationAdministration` (the act of a patient receiving the med, an Event resource)** are distinct resources [R5][R6]. *Key fact: "the order exists" ≠ "the med was given" — administration is its own audited event with its own actor and its own failure modes (override, missed scan, workaround).*

### F3 — Results management (labs · pathology · radiology)
Structured + narrative diagnostic results with **review/acknowledgement, abnormal/critical-value handling, and provider sign-off**. USCDI floors **Laboratory** and the narrative **Laboratory Report / Pathology Report / Imaging Narrative** note types [R3][R1]; FHIR models the order→result as `ServiceRequest` → `DiagnosticReport`/`Observation`, with results `basedOn` the order [R5]. Critical-result communication + closed-loop follow-up is a Joint-Commission-grade patient-safety expectation. *Key fact: results are bound to orders, carry abnormal/critical state, and require documented review — not just storage.*

### F4 — Clinical documentation AS the legal record / system-of-record
Under **CMS Condition of Participation 42 CFR §482.24**, a hospital must maintain a medical record for **every individual evaluated or treated**, that is **accurately written, promptly completed, properly filed/retained, accessible**, with **author identification + integrity of authentication** [R-CMS]. Required content (§482.24(c)(4)): documentation justifying admission/continued stay; **H&P within 24h** (and before any procedure requiring anesthesia); admitting + final diagnosis; consultative findings; **complications, hospital-acquired infections, adverse drug/anesthesia reactions**; **properly executed informed-consent forms**; **all practitioner orders, nursing notes, treatment reports, medication records, radiology + lab reports, vital signs**; **discharge summary with outcome/disposition/follow-up**; **final diagnosis with record completion within 30 days of discharge** [R-CMS][R-CMS2]. Entries must be **legible, complete, dated, timed, and authenticated** by the responsible person; **records retained ≥5 years**; release only to authorized individuals [R-CMS]. CMS interpretive guidelines define "medical records" expansively — **written docs, computerized info, radiology film/scans, lab reports, pathology slides, videos, audio recordings** [R-CMS3]. *Key fact: the chart is a regulated legal artifact — authenticated, timed, retained, amend-not-overwrite, and discoverable — not a mutable notes table.*

### F5 — ADT / patient movement / encounter + census management
**Admission, Discharge, Transfer (ADT)** events are the backbone of hospital patient movement and the most widely exchanged message type; traditionally **HL7 v2 ADT** within the facility intranet, increasingly **FHIR-based** (Da Vinci ADT-notification `Encounter`-centered bundles) for cross-enterprise + payer notification [R10][R11]. ADT carries demographics, insurance, attending, next-of-kin, and **status changes (admit/discharge/transfer)** that trigger care-coordination and bed/census management [R10]. *Key fact: a hospital encounter is a stateful, movement-driven object (bed, unit, level-of-care, attending-of-record), not a single appointment.*

### F6 — Care transitions / discharge / post-acute (SNF · LTC · home)
Discharge is a regulated transition: **discharge summary + disposition + follow-up provisions** (§482.24) [R-CMS]. Post-acute adds its own assessment regime — **SNF Minimum Data Set (MDS 3.0)** is the required assessment instrument under the **SNF Quality Reporting Program**, collected at admission + discharge (planned + unplanned) + transfer to a non-certified bed, submitted to **iQIES** within deadline, with **med-reconciliation-transferred-to-next-provider** as a tracked measure and a **90%/100% completeness threshold tied to a 2% payment penalty** [R12][R13]. *Key fact: transitions are first-class regulated events with their own assessments, reconciliation obligations, and reporting penalties — not an afterthought to the visit.*

### F7 — Interoperability + certification surface (the table-stakes floor)
The **ONC Health IT Certification Program (2015 Edition Cures Update / HTI-1)** is the de-facto capability floor; **USCDI** is the standardized data-class floor (Clinical Notes — Consultation / Discharge Summary / H&P / Procedure / Progress — Problems, Medications, Allergies, Labs, Vitals, **Provenance**, etc., on LOINC/SNOMED/RxNorm vocabularies) [R1][R3]. Required surfaces: **C-CDA document exchange, Transitions-of-Care `(b)(1)`, Clinical Information Reconciliation `(b)(2)`, EHI Export, View/Download/Transmit `(e)(1)`, Standardized API (`(g)(10)` FHIR R4 + SMART-on-FHIR App Launch), e-prescribing (NCPDP SCRIPT)** [R1][R2]. Nationally, **TEFCA / QHINs** layer governed network exchange over **legacy HL7 v2 interfaces** [R10][R11]. *Key fact: hospital-grade is not "has an API" — it is a certified, standards-bound, externally-tested interoperability posture (USCDI floor + FHIR/SMART + C-CDA + TEFCA + the long tail of HL7 v2 interfaces).*

### F8 — Clinical decision support (CDS / DSI) + interaction checking
ONC requires **Decision Support Interventions (Cures Update, formerly CDS)** and **drug-drug / drug-allergy checks** with **source transparency** — certified CDS must let the user **view the source of an alert's recommendation** (developer, last-revision date) and interaction checks must carry **bibliographic citations** [R1][R2]. *Key fact: CDS is a governed, attributable, source-cited surface — not opaque model output.*

### F9 — Security · access control · authentication · audit (regulated, certified)
ONC's **`170.315(d)` family**: Authentication/Access-Control/Authorization, **Auditable Events + Tamper-Resistance**, **Audit Report(s)**, Automatic Access Time-out, End-User Device Encryption, Encrypt-Authentication-Credentials, **Multi-Factor Authentication** [R2]. Layered on HIPAA minimum-necessary + §482.24 author-identification/integrity + confidentiality/release controls [R-CMS]. *Key fact: access + tamper-evident audit are certified capabilities, and the legal record's integrity (who-did-what-when, unalterable) is a regulatory requirement.*

### F10 — Quality / regulatory reporting + registries
**Clinical Quality Measures (record/export + import/calculate, `170.315(c)`)**, **public-health reporting (immunization registries `(f)(1)`, electronic case reporting `(f)(5)`)** [R1][R2], plus setting-specific programs (**SNF QRP/MDS, Hospital IQR, CMS Promoting Interoperability**) whose non-compliance carries payment penalties [R12][R13]. *Key fact: reporting is a mandatory, penalty-bearing data obligation computed off the record.*

### F11 — Patient access / portal / patient-generated data
**View, Download, Transmit to 3rd party `(e)(1)`** + **Patient Health Information Capture `(e)(3)`** + standardized patient-facing API [R2]. *Key fact: patient access to the legal record (and patient-contributed data) is a certified capability, not a UX nicety.*

### F12 — Revenue cycle / coding / charge capture / prior-auth / payer
Hospital-grade includes **charge capture, coding (ICD/CPT/DRG), claims, prior-authorization, eligibility, denials, and the full inpatient revenue cycle** bound to the documented encounter [R-market]. (Less standards-certified than F1–F11, but a defining operational mass of acute-care platforms — Epic/Oracle-Health/Meditech all carry it.) *Key fact: the record and the bill are coupled; documentation drives reimbursement and audit exposure.*

### F13 — Care-setting-specific clinical modules
Distinct, deep modules the inpatient field expects: **OR / anesthesia / perioperative**, **ED tracking board / throughput**, **ICU flowsheets / high-frequency charting**, **OB / L&D**, **inpatient psych** (legal hold, observation, ligature/safety), **inpatient rehab / therapy docs**, **inventory / implants / device tracking (UDI)**, **infection control** [R1 implantable-device-list `(a)(14)`; R-market]. *Key fact: "an EHR" is really a federation of setting-specific clinical workflows, each with its own documentation, safety, and authority physics.*

### F14 — Interface / integration + device infrastructure
The hospital runs on **HL7 v2 interfaces (ADT, ORM/ORU orders+results), device integration (monitors, pumps, ADCs), and an interface-engine layer** bridging dozens of systems (LIS, RIS/PACS, pharmacy, billing) [R10][R11]. *Key fact: a hospital platform lives inside a dense interface ecosystem it does not own; integration is a permanent capability, not a migration step.*

## 2. What makes hospital-grade ≠ "notes + actions"

The field's gravity is **not feature count** — it is a set of *distinctions a lightweight care app can collapse but a hospital-grade platform cannot*:

1. **Order ≠ administration ≠ result.** The prescribe→dispense→administer chain is three different objects, actors, lifecycles, and audit trails (FHIR Request vs Event; closed-loop BCMA) [R5][R6][R7]. Collapsing "order placed" into "med given" is a patient-safety failure, not a modeling shortcut.
2. **Record ≠ observation ≠ note.** The chart is a **regulated legal system-of-record** — authenticated, timed, retained ≥5 yr, amend-not-overwrite, discoverable, with a defined completeness standard (§482.24) [R-CMS]. A measured value, a draft note, and the signed legal record are distinct.
3. **Authority is multi-actor and gated per act.** Who may *order* ≠ who may *verify* ≠ who may *administer* ≠ who may *sign/co-sign* ≠ who may *release*. Verbal orders require time-bound authentication; H&P timing is regulated; co-sign chains exist [R-CMS][R7].
4. **Encounter is stateful + movement-driven.** ADT, bed/unit/level-of-care, attending-of-record, transfers, and census are first-class — not a single appointment object [R10].
5. **Transitions are regulated events.** Discharge summary, med reconciliation, SNF MDS, transitions-of-care exchange — with reporting penalties [R-CMS][R12].
6. **Interoperability + certification is the floor, not a differentiator.** USCDI data floor + FHIR/SMART API + C-CDA + TEFCA + the HL7 v2 long tail are table-stakes; a platform that can't exchange the certified data set is not in the conversation [R1][R3][R10].
7. **Integrity + audit are regulatory.** Tamper-evident audit, author identification, access control, retention — certified `170.315(d)` capabilities + CoP requirements [R2][R-CMS].
8. **The platform lives inside a dense incumbent ecosystem.** Epic holds ~43.7% of acute hospitals / ~56.9% of beds; Oracle Health ~21.9%/20.4%; Meditech ~14.7%/12.5%; Epic won ~70% of new contracts in 2024 while Oracle/Meditech declined [R14][R15]. The reality field is **consolidated, switching-cost-heavy, and standardized** — any entrant negotiates with that gravity, not a green field.

## 3. References (cited)

- **[R1] ONC 2015 Edition Cures Update — Fact Sheet / certification criteria** (criteria list incl. `(a)(1-4)` CPOE+interaction, `(b)(1)` Transitions of Care, `(b)(2)` Clinical Info Reconciliation, EHI Export, DSI, `(e)(1)` VDT, `(g)(10)` standardized API/FHIR R4 + SMART, e-prescribing/NCPDP SCRIPT; FHIR R4 + C-CDA Companion Guide to support USCDI). healthit.gov/wp-content/uploads/2025/02/Cures-Update-Fact-Sheet.pdf
- **[R2] ONC Health IT Certification criteria detail** (full `170.315` (a)/(b)/(c)/(d security: auth/access, auditable-events+tamper-resistance, audit reports, time-out, encryption, MFA)/(e patient access)/(f registries)/(g API) list; CDS source-transparency + interaction-check citations). Federal Register 2015-06612 + clinicmind.com/onc-certification + fdbhealth.com (Cures Act/HIT).
- **[R3] USCDI (United States Core Data for Interoperability) v3** — data classes + elements; Clinical Notes (Consultation 11488-4 / Discharge Summary 18842-5 / H&P 34117-2 / Procedure 28570-0 / Progress 11506-3, LOINC 2.72); Provenance, Problems, Meds, Allergies, Labs, Vitals. healthit.gov/isp (USCDI v3 July/Oct 2022).
- **[R5] FHIR R4 Workflow + Request module** — Request (intent/order, status = authorization not execution) vs Event; `basedOn`; `Task` tracks fulfillment; `ServiceRequest` → `DiagnosticReport`/`Procedure`/`Encounter`. hl7.org/fhir/R4/workflow.html + fhir.hl7.org/fhir/request.html.
- **[R6] FHIR R4 Medications module** — `MedicationRequest` (order/prescription; supply+administration instruction) vs `MedicationDispense` (supply) vs `MedicationAdministration` (the act of consuming/receiving; Event). hl7.org/fhir/R4/medications-module.html + hl7.org/fhir/R4B/medicationrequest.html.
- **[R7] Closed-loop medication management** (CPOE → pharmacist verification → ADC override-limited → BCMA five rights → eMAR; smart pumps; workarounds). longwoods.com (Closed-Loop Medication System) + mdpi.com/1660-4601/20/17/6680 + PMC10488169.
- **[R8] BCMA / five rights** (scan wristband + med barcode; real-time validation; right patient/med/dose/route/time). Scan4Safety (NHS) Closed-Loop Medicine Administration.
- **[R-CMS] 42 CFR §482.24 — CoP: Medical Record Services** (record for every individual; legible/complete/dated/timed/authenticated; H&P 24h; orders/nursing notes/med records/rad+lab/vitals; informed consent; discharge summary; final diagnosis ≤30 days; ≥5-yr retention; authorized release). law.cornell.edu/cfr/text/42/482.24 + govinfo.gov CFR-2019-title42-vol5-sec482-24.
- **[R-CMS3] §482.24 Interpretive Guidelines** ("medical records" = written docs, computerized info, radiology film/scans, lab reports, pathology slides, videos, audio recordings…). physicianleaders.org (Redefining the "Legal Medical Record"); cms.gov S&C letter 08-12.
- **[R10] HL7 ADT + Health Information Exchange + TEFCA** (ADT = backbone of care-transition messaging; HL7 v2 intranet vs FHIR cross-enterprise; TEFCA/QHIN national governance). playbook.healthit.gov/playbook/health-information-exchange + leadingage.org HIE primer.
- **[R11] FHIR ADT notifications (Da Vinci) + HL7 v2→FHIR migration** (Encounter-centered notification bundle; v2 ADT/ORM/ORU legacy still dominant). confluence.hl7.org CMS2021-07 ADT Notifications.
- **[R12] CMS SNF QRP — MDS 3.0** (MDS = required assessment instrument; admission + planned/unplanned discharge + transfer-to-non-certified-bed; iQIES submission; 90% completeness / 2% APU penalty; med-reconciliation-to-next-provider measure). cms.gov FY2025 SNF QRP FAQs.
- **[R13] SNF MDS transfer/discharge assessment** (discharge assessment for transfers; care-transition reconciliation). cmscompliancegroup.com + broadriverrehab SNF QRP deep-dive.
- **[R14] KLAS US Acute Care EHR Market Share 2025/2026** (Epic 43.7% hospitals / 56.9% beds; Oracle Health 21.9%/20.4%; Meditech 14.7%/12.5%; Epic ~70% of new 2024 contracts; Oracle/Meditech net losses; Meditech Expanse retention). hitconsultant.net/2026/05/14 + darkdaily.com 2025/06/04 (KLAS).
- **[R15] Incumbent/market structure** (Oracle acquired Cerner 2022 $28.3B; consolidation; switching costs). KLAS/Dark Daily as above.
- **[R-market] Revenue-cycle + setting-specific modules** — general industry/market characterization of acute-platform scope (OR/anesthesia, ED, ICU, OB, psych, rev-cycle, implant/UDI); corroborated by ONC implantable-device-list `(a)(14)` + market reports. (Lower-citation; flagged as market characterization, not a single primary spec.)

## 4. Implications flagged (raw — NO OMNI comparison; that is artifact F)

Raw "the field requires X" notes for later disposition. **No OMNI claim here.**

- The field requires an **order primitive distinct from administration and from result**, each with its own lifecycle, actor, and audit — and a **closed-loop** binding order→verify→dispense→administer with five-rights validation. (F1/F2)
- The field requires the clinical record to be a **legal system-of-record**: authenticated, timed, retention-bound, amend-not-overwrite, completeness-graded, discoverable. (F4)
- The field requires **multi-actor, per-act authority** (order vs verify vs administer vs co-sign vs release), incl. verbal-order authentication windows + regulated H&P timing. (F1/F4)
- The field requires a **stateful, movement-driven encounter** (ADT, bed/unit/level-of-care, attending-of-record, transfer/census). (F5)
- The field requires **transitions as first-class regulated events** (discharge summary, med reconciliation, SNF MDS, transitions-of-care exchange) with reporting penalties. (F6/F10)
- The field requires a **certified interoperability floor**: USCDI data classes + FHIR R4/SMART API + C-CDA + TEFCA + the HL7 v2 interface long tail. (F7)
- The field requires **attributable, source-cited CDS** + drug-drug/allergy checking. (F8)
- The field requires **certified security/audit**: access control, tamper-evident auditable events, retention, MFA, encryption. (F9)
- The field requires **penalty-bearing quality/regulatory reporting** computed off the record (CQM, public health, SNF QRP). (F10)
- The field requires **patient access to the legal record + patient-generated capture** as certified capabilities. (F11)
- The field couples **documentation ↔ revenue cycle** (coding/charge/prior-auth/denials). (F12)
- The field is a **federation of setting-specific clinical modules** (OR/anesthesia, ED, ICU, OB, psych, rehab, implant/UDI, infection control), each with distinct documentation/safety/authority physics. (F13)
- The field lives inside a **dense, incumbent-owned interface ecosystem** (HL7 v2, devices, LIS/RIS-PACS/pharmacy/billing) — integration is permanent, not transitional. (F14)
- The market is **consolidated + switching-cost-heavy + standardized** (Epic-dominant, Oracle declining, Meditech retaining) — any entrant negotiates with that gravity. (F-market)

---

### Stop-proof (G1 partial)
B is populated from cited public sources (no OMNI definition of hospital reality; comparison deferred to F). Next within G1: C (actor/authority map), then STOP at the G1 gate. `analysis_nonbinding`; binds nothing (`GRD-036`).

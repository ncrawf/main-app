# EVRUN-2026-000008 — §02 · Incumbent-Native Adversary Submission (fresh Gemini, VERBATIM)

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane · successor analysis run — Adversary submission) · Authority: `independent_adversarial_interpretation_nonbinding` (`GRD-036` / `GRD-039`). **Propose-only. Binds nothing. Not OMNI truth. No external factual claim herein becomes repository fact merely because it was asserted (`_00 §2` binding rule).**
Role: **Adversary submission** (fresh Gemini, incumbent-native architect), per the quadrifecta model `_00 §1`. Produced BLIND to the OMNI Reactor candidate + the fresh Builder submission + prior Reactor adjudication (V2 role purity). Preserved here **verbatim** per the integration directive (Knox step 4): *"Do not clean up, merge, or silently correct either submission. Knox's adjudication records corrections."*
Preserved 2026-07-18 (Opus, integration transaction) from the operator relay. Adjudication + external-claim corrections: `_03_knox_adjudication_and_disposition.md`.

> **★ PRESERVATION NOTE.** The text below §0 is the fresh Gemini incumbent-native submission exactly as relayed by the operator. It is retained as immutable adversarial interpretation. Several external product/standard claims in it are **incorrect or overclaimed** — those are audited in `_03 §2` (Knox external-claim audit), NOT edited here. Read the corrections alongside, never in place of, this record. The submission correctly used the required `EVSRC-251 + EVSRC-279` pair and disclosed missing phone material.

---

## §0 — Verbatim submission (Gemini, incumbent-native)

# Incumbent-Native Architecture Review

### 1. Source and evidence receipt

*   **Requested files**: 
    *   `.cursor/plans/ingestion/user_operator_research/sources/2026-07/EVSRC-2026-000251_trt-prospective-patient-consult-chatgpt-loop/_source.md`
    *   `.cursor/plans/ingestion/user_operator_research/sources/2026-07/EVSRC-2026-000279_dan-trt-followup-multimodal-sms-phone-chatgpt-loop/_source.md`
*   **Files actually opened**: Both requested files were opened and read in full.
*   **Source-local sections read**: 
    *   EVSRC-2026-000251: §0, §1, §2A, §2B.
    *   EVSRC-2026-000279: §0, §1, §2A, §2B.
*   **Sections deliberately skipped**: None within the provided documents. No external reviews, syntheses, or folders (e.g., EVRUN-000007, EVRUN-000008, Review 001/003) were searched or read.
*   **Missing material**: In `EVSRC-2026-000279`, the Channel C (Phone Call) transcript/operator reconstruction is marked as "OWED" and absent. Full ChatGPT turns in some batches are marked as partial.
*   **Substitutions**: None. 
*   **Validity**: The assignment is valid to complete. The provided material sufficiently illustrates the ungoverned clinical loop, modality-hopping, and cross-boundary PHI transmission required to architect an incumbent-native mitigation.

### 2. Architecture

This composition relies on mature incumbent platforms integrated to replace the ungoverned, out-of-band AI loop with a secure, governed, and auditable flow.

*   **System of Record & Clinical Authority (Epic)**: Epic acts as the foundational clinical database and identity anchor. All clinical state transitions happen here.
*   **Governed AI & Ambient Listening (Microsoft Nuance DAX Copilot / Azure Health Bot)**: Replaces the provider's shadow ChatGPT usage. Operates within the HIPAA-compliant boundary, grounded directly against Epic's FHIR APIs (`Patient`, `Observation`, `Condition`).
*   **Orchestration & State Management (ServiceNow HLS)**: ServiceNow Healthcare and Life Sciences Service Management acts as the integration glue, tracking longitudinal cases, mapping payment states to clinical states, and managing SLAs across organizational boundaries.
*   **Identity & Access (Okta)**: Customer Identity and Access Management (CIAM) for patients; Workforce identity for providers.
*   **E-Prescribing & Fulfillment (Surescripts)**: Standard NCPDP SCRIPT 2017071 network for routing `NewRx` and receiving `RxChangeRequest` or `Status` transactions.
*   **Commerce & Payments (Stripe)**: Handles payment authorization, capture, and refunds via standard API, linked to ServiceNow cases.
*   **Interoperability (TEFCA)**: QHIN-based exchange for cross-entity document retrieval (though limited by actual external adoption).

**Authority Model & Trust Boundaries:**
*   **Clinical**: Only the credentialed provider in Epic holds authority to commit a `MedicationRequest` or `ServiceRequest`. The AI proposes (`Draft` state) but cannot commit.
*   **Fulfillment**: External pharmacies hold authority over dispensing; they acknowledge receipt and propose changes via standard NCPDP transactions.
*   **Financial**: Stripe holds the authoritative ledger for capture and refund status.
*   **Trust Boundaries**: Zero-trust architecture between the cloud orchestrator (ServiceNow), the AI tenant (Azure), and the clinical core (Epic), mediated by OAuth 2.0 / SMART on FHIR.

### 3. State and responsibility tables

**Record Types & Transitions:**

| Object | Native Standard/System | State Transitions | Owner |
| :--- | :--- | :--- | :--- |
| **Patient Identity** | FHIR `Patient` (Epic) | Tentative → Active | Epic |
| **Clinical Consultation** | FHIR `Encounter` | Planned → Arrived → Finished | Epic |
| **Draft Care Plan / AI Output** | FHIR `Task` or `CarePlan` | Draft → Rejected/Accepted | Nuance/Epic |
| **Order / Prescription** | FHIR `MedicationRequest` | Draft → Active → Completed/Stopped | Epic (Provider) |
| **Fulfillment Message** | NCPDP `NewRx`, `RxChange` | Transmitted → Acked → Dispensed | Surescripts/Pharmacy |
| **Payment Ledger** | Stripe `PaymentIntent` | requires_payment_method → requires_capture → succeeded → refunded | Stripe |
| **Longitudinal Case** | ServiceNow `Case` | New → In Progress → Awaiting External → Closed | ServiceNow |

### 4. Trace 1 execution (Inadmissible consequential candidate)

**Context:** The AI generates a treatment candidate based on unstable context (mismatched age, incomplete evidence, shifting rationale).

*   **Normal (Expected) Path**: The Azure Health Bot / DAX Copilot generates a proposed clinical summary and treatment candidate. 
*   **Failure Detection (Blocked Path)**:
    *   *Mechanism*: Azure's retrieval-augmented generation (RAG) is strictly grounded to the FHIR `Patient` resource. The AI detects a contradiction between the ingested chat (claiming an 18-year-old) and the FHIR demographic payload (46 years old).
    *   *Execution*: The AI is structurally prevented from proposing a `MedicationRequest` when critical anchor demographics conflict. It outputs a `Task` (Review required: Demographic mismatch) to the provider's Epic InBasket.
*   **Evidence & Failure Behavior**: The mismatch is logged in an Azure Audit log and a FHIR `AuditEvent`. No payment is authorized, and no prescription is staged. The provider must manually resolve the identity conflict in Epic before the AI can proceed, enforcing the human-review requirement.

### 5. Trace 2A, 2B, and 2C execution

**Baseline Assumption**: Patient identity assured; provider committed `MedicationRequest`; price set; Stripe `PaymentIntent` captured; NCPDP `NewRx` transmitted and acknowledged by the pharmacy. ServiceNow `Case` is in "Awaiting Fulfillment" state.

**Trace 2A — Jurisdiction or policy incompatibility (Late Discovery)**
*   **Clinical State**: `MedicationRequest` remains Active in Epic initially.
*   **Pharmacy Acknowledgment**: Pharmacy transmits an NCPDP `Status` (010 - Not Filled) or `RxChangeRequest` indicating a regulatory block (e.g., Prescriber Not Licensed in State).
*   **Next Expected Actor**: ServiceNow intercepts the NCPDP message via Epic and escalates a task to the clinical operations team.
*   **Deadlines/Timeout**: If the pharmacy fails to send an update within a configured ServiceNow SLA (e.g., 48 hours), a timeout task is generated.
*   **Clinical Reconsideration**: Not purely clinical; it's a regulatory failure. The provider may need to cancel the order.
*   **Payment & Compensating Transaction**: ServiceNow triggers a Stripe Refund API call for the captured `PaymentIntent`.
*   **Patient-Visible State**: Epic MyChart updates from "Processing" to "Cancelled - Regulatory Issue."

**Trace 2B — Transient stockout or capacity failure**
*   **Pharmacy Acknowledgment**: Pharmacy sends an NCPDP `Status` (Out of Stock) or `RxChangeRequest` (Requesting delay or alternative).
*   **Operational Recovery**: ServiceNow identifies the issue as a fulfillment failure, not a clinical one. If a backup pharmacy is available for the exact same NDC/formulation, clinical staff can cancel the original `NewRx` and route a new one to the backup pharmacy.
*   **Clinical Reconsideration**: Bypassed if the exact formulation is rerouted, avoiding unnecessary clinical burden.
*   **Payment**: Remains captured as the underlying service/good commitment is still valid, just delayed.
*   **Patient-Visible State**: MyChart status changes to "Delayed - Sourcing Backup."

**Trace 2C — Formulation, route, dose, or therapy infeasibility**
*   **Pharmacy Acknowledgment**: Pharmacy sends an NCPDP `RxChangeRequest` suggesting a therapeutic alternative (e.g., changing from a topical cream to an injectable due to compounding constraints).
*   **Clinical Reconsideration**: The `RxChangeRequest` directly routes to the Provider's Epic InBasket. Because this materially alters the treatment meaning, risks, and monitoring, the provider *must* review it.
*   **Next Expected Actor**: Provider. They must decline the change or approve it (which cancels the old `MedicationRequest` and creates a new one).
*   **Payment**: If the new therapy alters the price, ServiceNow triggers a partial refund or cancels the original Stripe `PaymentIntent` and issues a new Stripe invoice to the patient.
*   **Patient-Visible State**: MyChart indicates "Provider Review Required for Medication Alternative."

### 6. Trace 3 execution (Low-risk reversible action)

**Action**: Routine appointment selection.
*   **Path**: Patient authenticates via Okta into Epic MyChart. They select an open slot, which triggers a FHIR `Appointment` creation (status: `pending` or `booked`).
*   **Reduced Burden**: This action circumvents the heavyweight Surescripts e-prescribing network, the Nuance clinical reasoning gates, and potentially the Stripe capture loop (if no prepay is required). It relies natively on Epic's internal scheduling engine. Idempotency is handled natively by FHIR resource IDs and conditional updates, preserving auditability (FHIR `AuditEvent`) without the strict human-in-the-loop review required for a prescription.

### 7. External nonparticipation

*   **Pharmacy nonparticipation**: Many independent compounding pharmacies do not fully implement the NCPDP SCRIPT standard for `RxChange` or `Status` messages, falling back to fax. In this architecture, ServiceNow enforces an SLA timer. If no electronic ACK or status is received, a task is created for staff to call the pharmacy manually. The system cannot magically fix the gap; it simply prevents the case from silently stalling.
*   **Patient nonparticipation**: If a patient fails to complete a required intake form or payment authorization, the ServiceNow case enters a "Pending Patient Action" state, triggering automated SMS reminders via Epic/Twilio.

### 8. Proof and privacy

*   **What is recorded**: Every API transaction, FHIR resource creation, and Epic InBasket action generates an immutable FHIR `AuditEvent`. Stripe logs all financial authorizations and captures.
*   **What is deliberately not recorded**: Ephemeral LLM generation scratchpads are not persisted in the clinical record to prevent discovering hallucinated intermediate steps; only the final generated draft is saved as a `Task` or `DocumentReference`.
*   **External Verification**: External providers can query the patient's record via TEFCA/Carequality, receiving a standard C-CDA or FHIR payload containing the active medication list and progress notes.
*   **Local Assertion**: AI-generated reasoning leading up to a clinical decision remains a local assertion within the institution's Azure tenant; it is not broadcast over TEFCA.

### 9. Implementation detail

*   **APIs**: Epic FHIR R4 (Patient, Encounter, MedicationRequest, Task, CarePlan); Stripe REST API; Surescripts XML/EDIFACT NCPDP SCRIPT.
*   **State Transitions & Timers**: Managed via ServiceNow Flow Designer (e.g., "Wait 48h for Rx Status -> If None -> Escalate").
*   **Idempotency**: Enforced at the Stripe API level via `Idempotency-Key` headers, and at the FHIR level using conditional updates (e.g., `PUT /MedicationRequest?identifier=123`).
*   **Observability**: Azure Application Insights for API telemetry; Epic Reporting Workbench for clinical queues.
*   **Custom Code**: Extensive custom integration is required in ServiceNow to map Stripe payment webhook events (e.g., `payment_intent.succeeded`) to Epic clinical triggers (e.g., releasing a pending `MedicationRequest`).

### 10. Cost and operating model

*   **Integration count**: ~6 distinct enterprise platforms (Epic, ServiceNow, Azure/Nuance, Stripe, Okta, Surescripts).
*   **Implementation burden**: Extremely high. Requires a dedicated integration team spanning clinical IT, revenue cycle, and infrastructure. 
*   **Ownership**: Fragmented. Epic owns clinical truth; Stripe owns financial truth; ServiceNow owns cross-domain state. 
*   **Procurement**: Multi-vendor, multi-year procurement path.
*   **Likely Workarounds**: If the Azure AI bot is too restrictive, or if the ServiceNow UI introduces too many clicks, the provider will likely revert to texting the patient from a personal device and screenshotting labs into a personal ChatGPT account to save time—exactly the failure mode seen in the source documents.

### 11. Gaps and honest failure conditions

*   **Shadow Source of Truth**: ServiceNow inevitably becomes a shadow state machine. If an Epic upgrade alters an internal order status without firing a webhook to ServiceNow, the systems fall out of sync.
*   **Counterparty Cooperation**: The architecture relies on compounding pharmacies adopting NCPDP SCRIPT 2017071 `Status` messages. *Documented capability* dictates this is possible; *actual adoption* by niche compounding pharmacies is notoriously low, meaning the system will gracefully degrade to manual phone calls.
*   **Semantic Limitations**: There is no native standard for linking a specific Stripe `PaymentIntent` strictly to a FHIR `MedicationRequest` without building a custom extension or relying on external linking tables in ServiceNow.

### 12. Evidence mapped to the rubric

*   **Scenario fidelity & state decomposition**: The architecture accurately decomposes clinical, financial, and fulfillment states across Epic, Stripe, and Surescripts.
*   **Admissibility and authority correctness**: Clinical authority remains strictly with the human provider in Epic, rejecting the AI's ability to commit.
*   **Domain ownership & shadow truth**: Fails slightly here; ServiceNow inevitably risks becoming a shadow source of truth to bridge Epic and Stripe.
*   **Acknowledged custody transfer**: Handled via NCPDP ACKs and ServiceNow SLAs to detect orphaned work.
*   **Correct reopening**: Trace 2C demonstrates selective reopening of clinical judgment when formulation changes, without requiring a new payment authorization unless the cost shifts.
*   **Temporal integrity**: Epic's audit trails and Stripe's immutable ledger ensure honest history.
*   **Bounded proof & lineage**: AI influence is logged via Azure and FHIR tasks.
*   **External-boundary realism**: Acknowledges that Surescripts integration works in theory but often degrades to manual tasks for compounding pharmacies.
*   **Runtime enforceability**: Identity checks prevent the AI from generating care plans for mismatched demographics.

***

*   **The smallest complete architecture**: Epic + Azure Health Bot (bypassing ServiceNow by keeping all state strictly in Epic, though this breaks automated Stripe/Pharmacy state mapping).
*   **The most expensive dependency**: Epic Systems (licensing, hosting, and certified integration engineering).
*   **The most fragile assumption**: That niche compounding pharmacies will reliably return electronic NCPDP `Status` messages to close the fulfillment loop.
*   **The single test most likely to invalidate the design**: A provider bypassing the heavy, integrated Azure AI tools to continue using a personal, ungoverned ChatGPT instance on their phone because it is faster and unconstrained by EHR demographic locks.

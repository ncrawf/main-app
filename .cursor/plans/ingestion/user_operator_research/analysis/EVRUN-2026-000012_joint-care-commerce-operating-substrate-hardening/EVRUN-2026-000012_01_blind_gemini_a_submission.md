# EVRUN-2026-000012 — §01 · Blind Gemini-A Submission (FROZEN, verbatim)

Document type: `evidence_or_ingestion`
Authority: `analysis_nonbinding`
Status: `frozen_external_submission`
Lifecycle role: independent blind alternative decomposition (Gate-3 comparator)
Manifest action: `add_tier2`
Review gate: `user_knox_required`
Read-graph evaluation: `no_new_route_needed` — reached through `EVRUN-2026-000012`
Source-of-truth relationship: external candidate analysis; **binds nothing**
Supersedes: none · Superseded by: none

> **PRESERVATION NOTE (do not violate):** the text between the BEGIN/END markers is Gemini A's untouched blind response to the sanitized §2.G facts-only packet. Gemini did NOT receive OMNI architecture, repository context, DTP/REV ids, H1–H10, candidate ownership homes, the Gate-2 estate matrix, Reactor material, competitor framing, or any Opus/Knox conclusion. **It is preserved verbatim — NOT edited, summarized, corrected, reordered, or silently reconciled.** Opus's reconciliation lives ONLY in the Gate-3 synthesis (`_02`), never inside this file.

---

BEGIN FROZEN SUBMISSION

Decomposing the Architecture

I've begun dissecting the care-to-commerce workflow request, focusing on its blind and independent architectural requirements.

Defining the Concepts

I've clarified distinct meanings of key concepts and established principles for handling unresolved issues in the analysis.

Modeling the Data

I have built the core entities with relationships and state machines, outlining authority boundaries as well.

Clarifying Workflows

I've defined core workflows, including operator, patient, and vendor roles, while clarifying clinical-commercial separations.

1. Independent Entity and Relationship Model
To strictly preserve the required distinct meanings, the architecture is decomposed into the following independent domains and core entities:

Identity & Role Domain

Actor: A physical human or external system (e.g., N, [CO-OWNER], [PT-MIKE], "Dan", [VENDOR-A], AI Chatbot).

Role Context: The capacity in which an Actor operates. N possesses: Clinician, Business Manager, Practice Agent, and AI Operator.

Resolved Identity: A verified, governed patient record, explicitly distinct from raw text-messaged PII.

Commercial & Sourcing Domain

Vendor Offer: A specific external vendor’s proposed item (e.g., compounded product from [VENDOR-B]). Attributes strictly tied to the vendor: Formulation, Concentration, Route, Acquisition Cost (e.g., $1.56/unit), Lead Time, Regulatory Status, Billing Mode (Clinic-pay vs. Patient-pay).

Practice Catalog Item: The practice's internal translation of a Vendor Offer or Practice Service. Contains Practice Price (e.g., $349), Commission Rules, Visibility Rules, and Rationale.

Consent Template: A legally/clinically formulated document structure pending instantiation.

Commercial Order: The patient's requested scope of goods/services.

Obligation Ledger: Tracks what is owed to the patient (services/goods) and to the business (revenue).

Clinical Domain

Patient Request: An unvalidated demand for treatment (e.g., [PT-MIKE]'s multi-item stack request).

Clinical Assessment: The cognitive and documented evaluation by the Clinician.

Clinical Authorization (Prescription): A legally binding order for a specific formulation, concentration, route, and dosing.

Execution & Fulfillment Domain

Signed Consent: An instantiated Consent Template, linked to a Resolved Identity and executed by that identity.

Payment Intent / Request to Charge: An instruction to capture funds (e.g., "call Dan").

Captured Payment: Verified clearing of funds.

Fulfillment Order: The transmission of the Clinical Authorization to a specific Vendor.

Custody Record: The vendor's established responsibility for the Fulfillment Order.

Logistics Event: Discrete markers for Dispensing, Shipment, Delivery, and Administration.

2. State Machines
Service / Catalog / Price

Drafted (e.g., instructed over text) → Reviewed (put through AI/co-owner) → Published (entered in portal) → Effective (active for transactions) → Superseded / Retired.

Consent

Template Drafted → Template Approved → Instantiated (linked to patient) → Presented → Executed/Signed → Revoked.

Clinical Authorization

Requested → Clinically Assessed → Authorized → Transmitted → Completed / Discontinued.

Commercial Order

Initiated → Quoted (based on Effective Catalog) → Accepted → Invoiced → Fulfilled / Refunded.

Payment

Requested (e.g., "call Dan") → Authorized → Captured → Reconciled → Disputed / Refunded.

Sourcing (Vendor Offer)

Prospective (e.g., Vendor B introduction) → Evaluated (AI economics modeling) → Contracted/Adopted → Active → Suspended.

Fulfillment

Submitted (e.g., entered in pharmacy portal) → Custody Accepted → Dispensed → Shipped ("went out") → Delivered → Administered.

3. Authority and Delegation Boundaries
Propose/Draft: N (as Business Manager) or [CO-OWNER] may propose prices, catalog items, and consent templates. [VENDOR-A/B] propose Vendor Offers. N (as AI Operator) generates draft rationale and economics.

Review/Approve: N (as Business Manager) and [CO-OWNER] approve commercial states (Catalogs, Templates). N (as Clinician) exclusively approves Clinical Authorizations.

Publish/Commit: Requires the Practice Agent role interacting with the external booking platform or pharmacy portal to move from Approved to Published/Effective.

Execute: The Patient executes Consent and Authorizes Payment. N (as Clinician) executes Clinical Assessments. The Vendor executes Dispensing and Shipping.

Report: Vendors report Custody, Dispense, and Ship states. Portals report Submitted states. (Note: "Went out" is an unverified report of a Logistics Event).

Reverse/Reopen: N (as Clinician) may reverse a Clinical Authorization. N (as Business Manager) or [CO-OWNER] may refund a Captured Payment or cancel a Commercial Order. Vendors may reject a Fulfillment Order.

4. Clinical-Versus-Commercial Separation
The architecture enforces a strict "air gap" between clinical logic and commercial reality.

Patient Request vs. Clinical Authorization: [PT-MIKE] requesting a multi-item stack generates a Commercial Order Initiated state, but it is strictly disjoint from the Clinical Authorization. The Clinical Assessment sits between them as a firewall.

Catalog vs. Authorization: The Practice Catalog determines what can be commercially ordered; it does not dictate what the Clinician judges appropriate.

Waivers and Courtesy Discounts: The event described as "waived consultation as full value plus a documented courtesy discount" is modeled exclusively in the Commercial Order and Payment domains. The Clinical Assessment records a consultation occurred (Clinical); the Commercial Order records a line-item charge of full value and a secondary line-item discount to $0 (Commercial).

Charge vs. Custody: Requesting a charge from "Dan" is disconnected from the pharmacy portal submitting a prescription. The Obligation Ledger requires both a Captured Payment (Commercial) and a Custody Accepted/Dispensed event (Clinical/Fulfillment) to reconcile.

5. Vendor-Offer, Sourcing-Selection, Payment, and Fulfillment Semantics
Same Casual Name, Different Reality: If Vendor A and Vendor B offer the "same" peptide, the system models two distinct Vendor Offers linked to a single clinical concept.

Vendor A Offer: Route A, $1.56/unit, Lead Time 3 days.

Vendor B Offer: Route B, $X/unit, Pending Regulatory Status.

Sourcing-Selection: The Clinician authorizes a generic formulation. The Practice Agent / Business Manager matches this to an Active Vendor Offer based on availability, margin (e.g., $140 cost vs $399 price), and routing policies.

Payment Semantics (Clinic-Pay vs Patient-Pay): The Vendor Offer must strictly define the billing mode.

If Clinic-Pay: The Captured Payment clears the Patient's obligation to the Practice. A separate Accounts Payable entity tracks the Practice's obligation to the Vendor.

If Patient-Pay: The Practice captures only consultation/commission fees; the Vendor directly captures the $1.56/unit equivalent from the patient.

Fulfillment: A "submitted" script (e.g., "his prescription") merely transitions the state to Submitted. The vendor must signal Custody Accepted.

6. Failure, Exception, Compensation, Reopening, Remedy, and Unresolved-Obligation Behavior
Fulfillment Rejection (e.g., "wrong product initially sought"): State moves from Submitted to Failed/Rejected. This triggers a Reopening of the Clinical Authorization phase for the Clinician to repair the formulation, generating a new Submitted event.

Regulatory/Availability Change: If Vendor A's regulatory status changes, the Vendor Offer state moves to Suspended. The Obligation Ledger flags any Accepted Commercial Orders tied to this offer as "Unresolved Obligation - Action Required," pausing fulfillment.

Payment Authorization without Capture: If "Dan" authorizes but the charge fails to clear, the Commercial Order remains Invoiced, preventing the Transmitted state of the Clinical Authorization.

Paid but Undelivered: If the patient pays, but the vendor shipment is lost, the Obligation Ledger registers a debt to the patient. Remedy: Refunded (Payment reversed) OR Remedy Order (New zero-dollar Fulfillment Order issued).

7. Minimum Product Workflows
Operator-Clinician Workflow:

View Patient Request and Resolved Identity.

Conduct and record Clinical Assessment (sandbox AI for formulation/cautions if desired, but explicitly commit assessment outside AI).

Generate and sign Clinical Authorization.

Co-Owner / Business Workflow:

Review proposed Vendor Offers.

Approve Practice Catalog Items, Prices, and commission logic.

Execute Request to Charge ("call Dan").

Monitor Obligation Ledger for Captured Payments vs. Fulfillment.

Patient Workflow:

Submit PII for Identity Resolution.

Submit Patient Request.

Review and sign Consent Instance.

Authorize Payment.

Track Fulfillment Logistics.

Vendor Workflow:

Propose Vendor Offer (Formulation, cost, regulatory status).

Receive Fulfillment Order.

Acknowledge Custody.

Report Dispensing and Logistics Events.

8. Unresolved Assumptions Made
I assumed "Dan" acts in the capacity of a Payer for [PT-MIKE] or another specific patient.

I assumed "his" in "his prescription" correlates to a specific male patient (likely [PT-MIKE]), though linkage is not proven by the facts.

I assumed the external pharmacy portal and booking platform lack native, robust bi-directional integration, requiring the Practice Agent to act as the manual integration layer.

I assumed the text-messaged PII and consent instructions eventually route into some system of record, even if that system is currently just a loosely governed paper or digital file.

9. Concepts or Structures Deliberately Rejected, with Reasons
Rejected: A unified "User" or "Staff" profile for N.

Reason: Blurs critical boundaries. N as an AI user exploring profit margins is a different system actor than N as a licensed clinician signing an order.

Rejected: Utilizing AI chat logs as system-of-record state data.

Reason: AI outputs are interpretative and non-binding. They inform the human, but the human must formally commit the state change in the designated domain.

Rejected: "Shipped/Went Out" as a synonym for "Completed."

Reason: Epistemic Rule. A vendor stating something "went out" does not prove delivery to the correct patient, nor does it resolve the financial obligation ledger.

Rejected: Overwriting the original failed order when the "wrong product" was fixed.

Reason: Destroys auditability. Requires a compensating transaction (Cancel original, issue new).

10. Falsifiers for This Model
Evidence of Pure Patient-Directed Procurement: If evidence reveals the practice merely provides advice and the patient procures directly from Vendor A/B without practice-brokered catalog items, the Commercial Order and Practice Catalog structures are overbuilt and incorrect.

Evidence of Vendor Complete White-labeling: If Vendor A and B are merely shell manufacturers for a practice-owned NDA/formula, the Vendor Offer evaluation model is wrong; the practice owns the product, and vendors are merely contracted manufacturers.

Evidence of System-Automated Sync: If the external booking platform and pharmacy portal are API-integrated, the manual delegation boundary defined for the Practice Agent (N or Co-owner entering data) is insufficient and misses the system-actor layer.

Identity Falsifier: If "Dan" is revealed to be a wholesale buyer, B2B distributor, or institutional payer rather than an individual payer for a patient, the Payment intent entity mapping to a retail consumer transaction is fundamentally flawed.

END FROZEN SUBMISSION

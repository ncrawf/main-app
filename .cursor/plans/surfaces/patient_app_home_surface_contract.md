# Patient App / Home — Surface Contract

Plane: **P5 Surface** · Type: `app_surface` · Status: `stub` · Persona(s): patient · Build priority: `day_1`
Source-of-truth relationship: references P1 truth via projections; commits nothing itself. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
The patient's home: *my care, my appointments, my messages, my results, my treatments, what I owe / am due for, what's next* — "OMNI is the place where my care is remembered" (thesis §1.5).

## §2 Persona(s) + access
patient (self + their `patient_relationship` scopes; Identity owns self-service perms, not RBAC). Cross-operator visibility only via consent / `shared_context_grant` (Federation).

## §3 Reads from (references, owns none)
Identity · D3 (appointments) · D5 (visit history/care_episode) · D6 (purchases/memberships/wallet) · D7 (documents/results/consent) · Observation (trackables) · CM (adopted findings, patient-appropriate) · OFC (orders/obligations: "visit 2 of 3", results-ready) · CNS (confirmations/outreach) · Messaging (threads).

## §4 Projections used (P4)
patient `context_packet` (primary) · entitlement/wallet projection (D6).

## §5 Writes / actions allowed (verbs → owning domain + RBAC/consent gate)
self-book/cancel → D3 (Identity self-service perm) · message care team → Messaging · submit intake/narrative → Intake · update consent toggles → D7 typed record · accept Rx/offer → D6/OFC. **No clinical truth writes.**

## §6 Forbidden
Never expose another patient's data; never show staff-context; never surface unadopted/unverified clinical claims as truth (CM adoption gate); never name a sensitive pathway outside consented secure comms (privacy send-policy / `pathway_sensitivity`).

## §7 Metrics shown
Patient-facing only (progress toward goal, adherence, upcoming) — derived/projection, not clinical authority.

## §8 Workflow states
Confirmation round-trip (CNS); entitlement redemption visibility ("visit 2 of 3"); treatment-journey stages.

## §9 Recovered design / prior gems
*Deposit box: entitlement redemption visibility + promo-wallet four-layer model (future_care_obligations §6/§7); patient cockpit ("active/expired/upcoming grants"); treatment-journey; voice/multimodal agentic intake surface (`REV-171`).*

## §10 Source docs feeding this surface
future_care_obligations_design §6/§7 · conversion_funnel spec (prospect→patient) · intake contract · LI patient operating context (patient-appropriate signals).

## §11 Day-1 vs later
Day-1: appointments + messages + results + purchases + intake. Later: rich longitudinal journey viz, agentic conversational intake (AI #12).

## §12 Open questions (→ `08`)
- Patient treatment-journey as its own surface vs section here (alias — keep merged until build).

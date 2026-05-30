# Seam Contract SC-ID-PT-001 — `contact_identity` → `patient` / `patient_relationship` linking (identity resolution)

> Naming note: "account" is deliberately NOT used (it is ambiguous — portal login vs patient row vs operational relationship). This seam resolves a `contact_identity` to the canonical `patient` (consumer identity) and/or a scoped `patient_relationship`.

Document type: `seam_contract` (interface/event contract)
Authority: `canonical` for this cross-layer boundary
Status: `draft_for_ratification` (created 2026-05-30, Foundation vNext; Identity pass)
Domain(s): `identity`, `patient`, `contact`
Lifecycle role: defines the durable boundary where pre-account inbound resolves into a patient/operational relationship
Source-of-truth relationship: schema per `00_architecture_artifact_index.md` seam spec; mechanics per DL-10 four-layer model + `communications_topology.md` §11 external-line ingress sequence + guardrail `D0W3B-GRD-001`
Supersedes: none · Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

| Field | Value |
|---|---|
| `seam_id` | `SC-ID-PT-001` |
| `source_event` | `contact.inbound_received` (Twilio main-line / unknown number / lead form / fax) OR `contact.identity_claim_asserted` |
| `emitted_by` | external-line / contact layer (Messaging adjacent) |
| `consumed_by` | **Identity** (resolution) |
| `payload_required` | `contact_identity_id`, raw identifiers (phone/email/name as available), `source_endpoint_id`, `rail` (sms/voice/fax/lead-form), `external_sender_identity`, `namespace_id`. **For unresolved inbound the actor is `external_system` or unresolved-contact context — NO `patient` actor is asserted until resolution commits.** |
| `result` | `identity_resolution_candidate` (match-existing-patient / create-new-patient / ambiguous) |
| `owner_of_commit` | **Identity** (only Identity writes `patient` / `patient_relationship` canonical rows) |
| `who_may_commit` | Identity, on accepted resolution (staff-confirmed for ambiguous matches) |
| `who_may_only_propose` | contact/messaging layer + CNS (propose match candidate); never write patient rows directly |
| `authority_gate` (TWO distinct gates) | **(a) identity-match confidence** gates RESOLUTION/LINKING (contact ↔ patient); ambiguous/low-confidence → staff review, never auto-merge. **(b) consent / authorization** gates RELATIONSHIP USE — operational-state sharing, messaging, and cross-relationship visibility. **A match alone NEVER authorizes operational-state sharing** (DL-10 core; radar zone 35). The two gates are separate and must not be collapsed. |
| `idempotency_rule` | dedupe on namespace + identifier set; duplicate inbound for resolved contact → no new patient; duplicate-merge candidates flagged, never auto-merged |
| `audit_record_emitted` | `identity.resolution_decided` + merge/link audit lineage |
| `failure_routing` | ambiguous/low-confidence match → ops triage / front-desk queue (staff confirm before linking); cross-namespace match attempt → explicit federation path (deferred) |
| `downstream_must_not` | must NOT collapse `contact_identity` into a patient-bound row before resolution (`D0W3B-GRD-001`); must NOT auto-merge on identity-claim match (zone 35); must NOT auto-share operational state across relationships on match |

## Notes

- This is the binding external-line ingress sequence per `communications_topology.md` §11 + DL-10: contact identity → identity-claim match → resolve-or-create `patient_relationship` → operational state. Never route inbound directly into `messages`.
- Cross-namespace resolution (one human across deployments / post-merger) is **deferred** (federation; identity ladder v2/v3) — see `D0THES-REV-143`.

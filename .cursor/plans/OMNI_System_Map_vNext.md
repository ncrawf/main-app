# OMNI System Map vNext

Document type: `system_map` (architectural map — the MAP, not the territory)
Authority: `canonical` structural map; source of truth for domains, ownership boundaries, and cross-domain seams
Status: `active_skeleton` (created 2026-05-30, Foundation vNext pivot; D5 filled as proof; other domains stubbed pending their passes)
Domain(s): `architecture_governance`, `cross_domain`
Lifecycle role: the architectural map — what the parts are, who owns truth, how they connect
Source-of-truth relationship: replaces `system_map_three_layers_60706286.plan.md` (bloated ~5k-line legacy → demoted to **evidence**). Artifact boundaries per `00_architecture_artifact_index.md`.
Supersedes: `system_map_three_layers_60706286.plan.md` (as the build-facing map; legacy retained as evidence/source)
Superseded by: none
Manifest action: `add_tier0` (pending catalog row + read-graph route — owed, see stop report)
Review gate: `user_knox_required`

---

## What this is (and is NOT)

This is the **MAP**: domains, what each owns truth for, what it does NOT own, its canonical object *names*, primary inputs/outputs, adjacent domains, and a link to its Domain Contract. **It does NOT contain** fields, lifecycles, event detail, open-debt lists, UX, future ideas, rationale, or history — those live in their canonical homes per `00_architecture_artifact_index.md`. If detail starts accreting here, it is a bug; move it to the contract.

## Layer model (from Thesis v2 §3 — 4-layer care OS)

*Summarized here for orientation only. Binding layer doctrine lives in `09_omni_build_os_layer_model.md` + thesis v2 §3 (to be consolidated into Doctrine vNext). The System Map is not a source of doctrine.*

1. **Surface** — product/brand surfaces (CULTURED, NAKED, OMNI Direct, provider portals, partner integrations). Specialize; never re-implement substrate.
2. **Coordination CNS** — orchestration: candidate → resolver → owning-domain commit; AI proposes, humans/policy commit.
3. **Boundary Policy** — authority, consent, ownership, operator boundaries.
4. **Substrate Physics** — identity, scheduling, occurrence, commerce, documents, etc. — owning-domain canonical truth.

## Source-of-truth rules (constitutional pointers — full text in Doctrine)

- One owner per fact; everyone else references it. (control plane)
- Candidate ≠ commit; AI proposes, owning domain commits. (`D0W3D-GRD-002`)
- Projection ≠ authority. (`T0-15`, DL-16 inv 19)
- Per-event ownership dimensions do not collapse. (`T0-13`, thesis §7.5.1)
- Patient-source ≠ clinical truth until clinical adoption. (thesis §7.5.3)

## Domain index

| # | Domain | Owns truth for | Does NOT own | Contract | Status |
|---|---|---|---|---|---|
| **D3** | **Scheduling / Appointment** (booking composer + appointment lifecycle + confirmation) | **`appointment`, `appointment_item`, `availability_window`, `staff_service_assignment`, slot/hold, `status`(13)/`status_flags`(derived)/`confirmation_state`, `appointment_confirmation_event`, `appointment_staff_note_entry`, participant/seat; scheduling-time `eligibility_gate` EVALUATION (over Settings-owned `service_policy`)** | **actualized work (D5); commerce/fees (D6); docs (D7); service catalog + canonical `service_policy` definitions (Settings/DL-19); message transport (Messaging); confirmation classification (CNS)** | **`contracts/D3_scheduling_appointment_contract.md`** | ◑ **contract drafted; ratify-pending** (DL-15 1-35 + DL-20 appt; D1 menu + service_policy defs → Settings seam; D3 owns confirmation_state, not transport/classification; open REV-146/147/148) |
| **D5** | **Service Occurrence / Care Coordination** | **`service_occurrence`, `service_occurrence_work_item`, `service_occurrence_link`, `encounter_view` (derived), `care_episode`** | **appointment lifecycle (D3); commerce (D6); documentation (D7); Rx fulfillment** | **`contracts/D5_service_occurrence_care_coordination_contract.md`** | ✅ **proof contract drafted 2026-05-30** |
| **ID** | **Identity / Patient / Contact / Actor** | **`contact_identity`, `patient` (consumer identity), `patient_relationship`, `actor` (+ device/robot/external_system), identity namespaces, identity_resolution** | **clinical/commerce/messaging-content/care truth; care-team membership derivation (CNS)** | **`contracts/identity_contract.md`** | ◑ **contract drafted; ratify-pending** (ladder v0 spine; cross-org deferred; open: REV-143/144/145) |
| **CNS** | **CNS / Orchestration** (Coordination layer, §3.7 L3) | **3 scope categories** (Operator-level [4 peer types: Brand/Core-Capability/Specialty-Line/Partner] · Coherence-level [OMNI Patient CNS] · Meta-level [Network Governance Plane]); `orchestration_run`/`orchestration_action`/`cns_decision`/`candidate`/`resolver`/`context_packet`/`trace_lineage` | **owning-domain canonical truth** (CNS coordinates, never commits domain truth); domain workflows (messaging/intake/charting = domain contracts, not sub-CNS) | **`contracts/CNS_orchestration_contract.md`** | ◑ **contract drafted; ratify-pending** (§7.6 3-scope model; anti-collapse; over-domain-contracts; LI=Patient-CNS coherence evidence; §A LI recovered, §B trace-lineage = build task) |
| **MSG** | **Messaging / Communications** (3 surfaces + outbound rail + projections) | **`messages`/`message_threads` (patient chat), external-line transport, `internal_collaboration` threads, `conversation_scope`, thread-class, `endpoint`, `outbound_job`+8-gate, scoped conversation projections, AI-Assist draft flow** | **contact-identity *resolution* (Identity); orchestration/escalation (CNS); clinical doc (D7); work/task completion (D5/provider queue); the decision a message should exist (CNS/owning domain)** | **`contracts/messaging_contract.md`** | ◑ **contract drafted; ratify-pending** (DL-11/12/13 + c2 shipped + §7.7.2 projections; transports/executes/projects — never originates care or resolves identity; internal-collab folded w/ D7/D5 boundary; open REV-150) |
| INT | Intake / Patient-Source Data | intake sessions, patient-source assertions | clinical adoption (provider authority) | `contracts/intake_contract.md` | ⏳ pending |
| D7 | Documents / Consent / Media | documentation/materialization/evidence truth, consent records | actualized-work truth (D5); commerce (D6) | `contracts/D7_documents_consent_media_contract.md` | ⏳ pending (Round 7 never ran — OPEN) |
| D6 | Commerce / Entitlement / Payment | sale/refund/entitlement/payment truth | actualized-work truth (D5); documentation (D7) | `contracts/D6_commerce_contract.md` | ⏳ pending (Round 6 never ran — OPEN) |
| RBAC | RBAC / Authority / Attestation | capability/role/attestation authority | domain object truth | `contracts/rbac_authority_contract.md` | ⏳ pending (DL-18 LOCKED — likely clean-into-contract) |
| SET | Settings / Catalog / Registry | tenant config, catalog_item, registries | per-domain canonical truth | `contracts/settings_catalog_contract.md` | ⏳ pending (DL-19 LOCKED) |
| FED | Federation / Operator / Tenant | tenant/legal-entity/operator boundaries, venue | domain object truth | `contracts/federation_contract.md` | ⏳ pending (DL-21 LOCKED) |
| AI | AI / Model Lineage / Clinical Adoption | model_version_of_record, clinical_adoption_state | clinical commit (human authority) | `contracts/ai_model_lineage_contract.md` | ⏳ pending |

## Canonical seams (the glue — edges only; contracts in `contracts/seams/`)

The map only asserts the seam EXISTS + its `seam_id`. The contract DEFINES it (per `00_architecture_artifact_index.md` seam spec).

| seam_id | source_event | emitted_by → consumed_by | owner_of_commit | contract | status |
|---|---|---|---|---|---|
| `SC-D3-D5-001` | `appointment.checked_in` | Scheduling → Service Occurrence | D5 | `contracts/seams/SC-D3-D5-001_appointment_checked_in__to__service_occurrence.md` | ✅ proof drafted 2026-05-30 |
| `SC-INT-CNS-001` | `intake.submitted` | Intake → CNS | CNS (candidate) → owning domain (commit) | `contracts/seams/…` | ⏳ pending |
| `SC-CNS-PT-001` | `cns.provider_task_proposed` | CNS → Provider Task | D5 / provider queue | `contracts/seams/…` | ⏳ pending |
| `SC-CNS-MSG-001` | `cns.outbound_action` | CNS → Messaging (outbound) | Messaging (send) | `contracts/seams/…` | ⏳ pending |
| `SC-MSG-CNS-001` | `message.escalated_to_provider_review` | Messaging → CNS | CNS (candidate) | `contracts/seams/…` | ◑ defined in messaging + CNS contracts |
| `SC-CNS-MSG-OUT-001` | `cns.outbound_authorized` | CNS/owning-domain → Messaging (8-gate → send) | Messaging (execution); origination = CNS/domain | `contracts/seams/…` | ◑ defined in messaging contract §6 |
| `SC-D5-D6-001` | `service_occurrence.completed` | Service Occurrence → Commerce | D6 | `contracts/seams/…` | ⏳ pending (D6 OPEN) |
| `SC-D3-D6-001` | appointment lifecycle event (cancel/no-show/reschedule) | Scheduling → Commerce (fees/entitlement) | D6 | `contracts/seams/…` | ⏳ pending (D6 OPEN; `REV-139`) |
| `SC-SET-D3-001` | service catalog / treatment-menu | Settings/Catalog → Scheduling | Settings (DL-19) | `contracts/seams/…` | ⏳ pending (Settings pass; `REV-147`) |
| `SC-D5-D7-001` | `service_occurrence.completed` / work-item recorded | Service Occurrence → Documentation | D7 | `contracts/seams/…` | ⏳ pending (D7 OPEN) |
| `SC-D7-CLIN-001` | `document/consent.recorded` | Documents/Consent → Clinical action | owning clinical domain | `contracts/seams/…` | ⏳ pending |
| `SC-AI-PR-001` | `clinical_adoption.committed` | AI/Adoption → Patient record | owning clinical domain | `contracts/seams/…` | ⏳ pending |
| `SC-ID-PT-001` | `contact.inbound_received` / `contact.identity_claim_asserted` | Contact/External-line → Identity | Identity | `contracts/seams/SC-ID-PT-001_contact_identity__to__patient_linking.md` | ✅ drafted 2026-05-30 |

## Pointers to Open Decision Registry

Registry lives in `08_open_review_queue.md`. Pointers only — this list never grows into a backlog:
- D6 commerce canonical truth (Round 6 never ran).
- D7 documentation/materialization canonical truth (Round 7 never ran).
- Full `care_commitment` substrate (thesis §7.3) — queued dedicated pass.
- CNS LI doctrine off-main on `d753a64` — `05_supersession_conflict_ledger.md` `D0THES-CNF-010`.

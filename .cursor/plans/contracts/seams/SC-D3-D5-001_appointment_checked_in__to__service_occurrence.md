# Seam Contract SC-D3-D5-001 — `appointment.checked_in` → Service Occurrence

Document type: `seam_contract` (interface/event contract — the canonical glue between domains)
Authority: `canonical` for this cross-domain boundary
Status: `draft_for_ratification` (created 2026-05-30, Foundation vNext; proof of the seam-contract type)
Domain(s): `d3_scheduling`, `d5_service_occurrence`
Lifecycle role: defines the durable cross-domain boundary; enforced later by tests/schemas
Source-of-truth relationship: schema per `00_architecture_artifact_index.md` (Seam/Event Contract spec); mechanics per `designs/day_0_scheduling_rule_matrix/05_domain_service_occurrence.md` SO-04/SO-13/SO-14/SO-27
Supersedes: none · Superseded by: none
Manifest action: `add_tier1` (pending catalog row + read-graph route — owed)
Review gate: `user_knox_required`

---

| Field | Value |
|---|---|
| `seam_id` | `SC-D3-D5-001` |
| `source_event` | `appointment.checked_in` |
| `emitted_by` | **D3 Scheduling** |
| `consumed_by` | **D5 Service Occurrence** |
| `payload_required` | `appointment_id`, `patient_id` (nullable for resource-only), `appointment_item_id[]` (planned items), `venue_id` (nullable), `checked_in_at`, `actor` (DL-16 4-tuple) |
| `result` | `occurrence_create_candidate` (or `occurrence_activate_candidate` if an occurrence already exists for the planned item) |
| `owner_of_commit` | **D5** (only D5 writes `service_occurrence` canonical truth) |
| `who_may_commit` | D5, on accepted resolver handshake (SO-27) |
| `who_may_only_propose` | D3 (emits the event), CNS (routes the candidate) — neither writes occurrence truth |
| `authority_gate` | `service_occurrence.authority_class` evaluated at create; `provider_required`/`clinical` actions route to provider/clinical queue, not auto-committed |
| `idempotency_rule` | dedupe on `occurrence_identity_key` incl. revision/supersession branch context (SO-06); duplicate `checked_in` for same appointment+revision → suppressed with rationale, NOT a new occurrence |
| `audit_record_emitted` | `service_occurrence.create_or_link_decided` + DL-16 envelope event + `cns_decision` record (resolver decision id) |
| `failure_routing` | missing context packet → `front_desk_queue` (defer + review task); ambiguous create-vs-link → `staff_review_candidate`; stale/superseded appointment revision → `system_ops_queue` no-op (SO-16) |
| `downstream_must_not` | D3 must NOT create clinical/actualized-work truth; check-in must NOT auto-create commerce settlement (D6) or documentation (D7) — those are separate seams (`SC-D5-D6-001`, `SC-D5-D7-001`); AI must NOT silently commit occurrence state |

## Notes

- **Create-vs-link grammar (SO-04/SO-20):** `checked_in` produces `new_root_occurrence` for new bounded work, or links/activates an existing occurrence in the chain — decision recorded in `link_decision_kind`, never vague metadata.
- This seam is the D3→D5 half of the spine. The D5→D6 and D5→D7 seams (commerce settlement, documentation) are downstream and **OPEN** (Round 6/7 never ran) — see `08_open_review_queue.md`.
- `appointment` / `appointment_item` field definitions live in the **D3 Scheduling contract** (vocabulary frozen); this seam references them, does not define them.

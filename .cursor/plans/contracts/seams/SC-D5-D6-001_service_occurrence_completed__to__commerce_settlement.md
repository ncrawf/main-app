# Seam Contract — `SC-D5-D6-001` : Service Occurrence completed → Commerce settlement

Document type: `seam_contract` (durable cross-domain boundary)
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext)
Source domain: `service_occurrence` (`contracts/D5_service_occurrence_care_coordination_contract.md`) · Target domain: `commerce` (`contracts/D6_commerce_contract.md`)
Authority: `canonical` for this boundary · Review gate: `user_knox_required`

---

## Trigger

A `service_occurrence` completes (or a `service_occurrence_work_item` is recorded) that has commercial consequences — e.g., a performed procedure to charge, an entitlement redemption to confirm, an accrual-basis revenue-recognition event.

## Contract (what crosses the seam)

| Field | Value | Rule |
|---|---|---|
| `service_occurrence_id` (+ work_item ids) | from D5 | the work-truth reference |
| settlement intent | which lines to charge / entitlements to confirm | D6 owns the money; D5 owns that work occurred |
| `commerce_owner` / operator | per §7.5.1 | federation: which operator's commerce |
| accounting-basis trigger | accrual → recognize revenue on redemption/delivery; cash → on sale close (DL-17 inv 21) | D6 evaluates |

## Ownership split (the line)

- **D5 owns:** that the service occurred, who performed it, when, what actualized work was done.
- **D6 owns:** the sale/line, entitlement redemption confirmation, payment state, revenue recognition.

## Invariants (what must not collapse)

1. **Completion ≠ settlement** (D5 SO-24): D5 `completed` is the actualization boundary only; it does NOT imply D6 settlement. Unresolved commerce siblings emit reconciliation candidates, not auto-charges.
2. **Commerce ≠ care_commitment** (§7.3) and **payment state ≠ care state** (§1I.0): settlement outcome never mutates D5 work truth or ends care.
3. **No second source of price** (§12): D6 owns the money; D5 references, never prices.
4. **References, not duplicates:** D6 lines reference the occurrence/work_item by id; no copying of work records into commerce rows.
5. **Entitlement redemption confirmed on occurrence completion / checked-in** (DL-17 inv 23), reversible per cancellation policy.

## Open

- What auto-settles vs requires explicit close per occurrence kind (`SC-D5-D6-001` detail; D6 §12).
- Accrual-basis revenue-recognition timing finalize at build.

## Evidence

D5 contract (`service_occurrence` + SO-24 completion≠closure) · D6 contract §4/§5/§8 · DL-17 inv 21/22/23 · thesis §7.3.

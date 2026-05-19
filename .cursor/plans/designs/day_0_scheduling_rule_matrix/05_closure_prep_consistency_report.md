# Round 5 Closure-Prep Consistency Report (Ultra-Hard Pass)

**Date:** 2026-05-19  
**Scope:** Closure-readiness discipline for Domain 5 without further scenario expansion  
**Source evidence:** `SO-30`, `SO-31`, `SO-32`, `SO-34` in [05_domain_service_occurrence.md](./05_domain_service_occurrence.md), plus Amendment K contract in [00_index.md](./00_index.md) §2.22.2-§2.22.4.

---

## 1) Amendment K Decision Memo (A/B/C using current evidence only)

### Decision
- **Winner: K(C)** (`appointment_participant` + `appointment_seat` combined model), with a constrained Day 0 implementation surface.

### Why K(C) wins
- Supports both participant semantics and seat semantics simultaneously:
  - caregiver/observer/guardian roles (participant model),
  - per-seat roster/check-in/entitlement/payment (seat model).
- Survives the highest-pressure scenarios from `SO-32` + `SO-34`:
  - group sauna party-of-4,
  - parent + minor,
  - patient + caregiver,
  - couples/bridal multi-recipient events,
  - shared resource with separate recipients,
  - per-recipient visibility and documentation boundaries.
- Avoids hidden one-patient-one-occurrence collapse flagged in `SO-28`.

### Rejected options
- **K(B) rejected** for Round 5 closure:
  - seat-only model is weak for non-seat participants (caregiver/observer/guardian) and role/authority semantics.
- **K(A) rejected** for Round 5 closure:
  - participant-only model is weak for per-seat entitlement/payment/roster and seat-level operational controls.

### Consequences of K(C)
- Requires explicit substrate accounting and amendment mapping (not implicit prose):
  - participant rows,
  - seat rows,
  - role + seat linkage rules,
  - per-seat commercial/documentation linkage semantics.
- Increases Day 0 implementation complexity, but reduces future retrofit risk and prevents semantic collapse.

### Closure implications
- Round 5 remains blocked until K(C) is resolved per §2.22.3 path **A (implemented)** or **C (proven covered)**.
- With current evidence, practical route is **A (implemented/minimal)** for closure safety.

### Pushback (deliberate)
- Do **not** attempt full “everything graph” implementation inside Round 5.
- Implement minimal K(C) primitives required by proven scenarios; defer non-triggered sophistication.

---

## 2) Terminology Audit (Canonical vs Derived vs Legacy)

| Term | Classification | Decision | Action |
|---|---|---|---|
| `service_occurrence` | **Canonical substrate** | Keep as D5 parent object | Authoritative in D5 |
| `service_occurrence_kind` | **Canonical classifier** | Keep decomposed model | Enforce `SO-21` decomposition |
| `origin_kind` / `trigger_domain` / `context_domain` | **Canonical query axes** | Keep required for broad kinds | Enforce write completeness (`SO-31`) |
| `service_occurrence_work_item` | **Canonical atomic actualized-work unit** | Keep as D5 atomic unit | Map amendment ownership explicitly |
| `service_occurrence_link` | **Canonical extension primitive (typed edge)** | Reserved now, promote when scenarios require non-tree causality | Add implementation trigger gate to closure checklist |
| `service_occurrence_segment` | **Future canonical primitive (promotion target)** | Not Day 0 by default | Promote only when `SO-22` trigger conditions are met |
| `encounter_view` | **Derived projection** | Keep as derived class with `operational_projection` vs `record_materialization` | Preserve materialization lineage rules (`SO-25`) |
| `encounter` (generic legacy language) | **Legacy umbrella / legal context term** | Allowed only where legal/documentation context requires | Avoid as D5 parent identity term |
| `encounter_line` | **Legacy term needing controlled transition** | Treat as projection/materialization alias of `service_occurrence_work_item` where retained | Must not remain competing canonical primitive |
| `encounter creation` phrasing | **Legacy wording** | Replace in D5 contexts with `service_occurrence create/link` | Terminology refactor in Round 5 artifacts |
| `encounter closeout` phrasing | **Contextual** | Keep only for D7/legal documentation closure context, not D5 actualization closure | Clarify boundary in Round 7 handoff |
| `fulfillment_encounter_id` | **Legacy field reference** | Transitional field may remain, but language must not imply parent ontology | Add migration/alias note in closure package |

---

## 3) Substrate Gap Ledger (Day 0 vs Extension vs New)

| Primitive / Concern | Current verdict | Amendment / owner | Closure blocker? | Required closure action |
|---|---|---|---|---|
| `service_occurrence` core + decomposed axes | Day 0 | D5 + DL-20 alignment | No | Keep and enforce required fields |
| `service_occurrence_work_item` | OK_WITH_EXTENSION | DL-20 extension mapping required | **Yes** (if unmapped) | Record explicit amendment ownership and `encounter_line` transition rule |
| `service_occurrence_link` typed edges | OK_WITH_EXTENSION | D5 extension trigger via scenarios | **Conditional** | Promote from reserved to implemented if multi-causal scenarios remain unresolved without it |
| `service_occurrence_segment` | NEW_SUBSTRATE_NEEDED when triggered | D5/D7/D6 cross-domain promotion trigger | **Conditional** | Promote only if segment-level ownership/evidence/SLA/analytics required by closure-blocking scenarios |
| K(C) participant + seat substrate | Required for chosen K path | Amendment K path A | **Yes** | Implement minimal K(C) substrate or prove equivalent existing coverage |
| `encounter_view` record materialization semantics | Day 0 with hardening | D5/D7 boundary | **Yes** (if ambiguous) | Lock snapshot/supersession/materialization rules in closure package |

---

## 4) Scenario Corpus Reduction (from SO-34 to Closure Gates)

Classification legend:
- `D5_PASS`: representable with current D5 model.
- `K_BLOCKED`: requires K(C) substrate resolution.
- `D6_BLOCKED`: depends on Round 6 commerce semantics.
- `D7_BLOCKED`: depends on Round 7 documentation semantics.
- `LINK_FORCE`: likely forces `service_occurrence_link` implementation.
- `SEGMENT_FORCE`: likely forces `service_occurrence_segment` promotion.

| Scenario (from SO-34) | Reduction outcome |
|---|---|
| Botox booked, lip filler performed | D5_PASS + D6_BLOCKED + D7_BLOCKED |
| HydraFacial + Botox + red light single visit | D5_PASS + SEGMENT_FORCE (if segment-level ownership/evidence required) |
| Injectable consult -> same-day filler | D5_PASS + D6_BLOCKED + D7_BLOCKED |
| SkinPen package + membership stacking conflict | D5_PASS + D6_BLOCKED |
| CoolPeel booked, consent/intake missing | D5_PASS + D7_BLOCKED |
| Booked Botox, performed Xeomin | D5_PASS + D6_BLOCKED + D7_BLOCKED |
| Note started, appointment cancelled | D5_PASS + D7_BLOCKED |
| Wrong appointment charting | D5_PASS + D7_BLOCKED + LINK_FORCE |
| GLP-1 async intake -> provider approval -> Rx | D5_PASS + D7_BLOCKED + D6_BLOCKED (Rx/commerce implications) |
| Post-Rx side-effect escalation | D5_PASS + D7_BLOCKED |
| TRT/HRT lab review -> dose decision | D5_PASS + D7_BLOCKED + LINK_FORCE |
| Refill due without appointment | D5_PASS + D6_BLOCKED |
| Dose escalation request | D5_PASS + D7_BLOCKED |
| Multi-pathway async overlaps | D5_PASS + LINK_FORCE (cross-chain relation pressure) |
| AI contraindication before provider review | D5_PASS (boundary check) |
| 3-provider overlap across pathways | D5_PASS + D3 scheduling conflict policy dependency |
| Colonoscopy consult -> same-day scope without consent | D5_PASS + D7_BLOCKED + D6_BLOCKED |
| Endoscopy + anesthesia + biopsy + pathology chain | D5_PASS + LINK_FORCE + D7_BLOCKED + D6_BLOCKED |
| Rhinoplasty room/provider reassignment chaos | D5_PASS + SEGMENT_FORCE (if segment-level assignment audit required) |
| Labs drawn then phone review same day | D5_PASS + SEGMENT_FORCE (if segment-level legal/documentation demands) + D7_BLOCKED |
| Service + retail sold | D5_PASS + D6_BLOCKED |
| Service refunded after performed | D5_PASS + D6_BLOCKED |
| Split refund card/cash/credit | D5_PASS + D6_BLOCKED |
| Package late-cancel | D5_PASS + D6_BLOCKED |
| Membership payment failed pre-service | D5_PASS + D6_BLOCKED |
| Group sauna party | **K_BLOCKED** + D6_BLOCKED + D7_BLOCKED |
| Patient + caregiver | **K_BLOCKED** + D7_BLOCKED |
| Parent + minor | **K_BLOCKED** + D7_BLOCKED + D6_BLOCKED |
| Couples/bridal group | **K_BLOCKED** + D6_BLOCKED + D7_BLOCKED |
| Provider reviews multiple related patients | D5_PASS + LINK_FORCE + D7_BLOCKED |
| Duplicate source event | D5_PASS |
| Stale timer after supersession | D5_PASS |
| Reply to old message after reschedule | D5_PASS + D3/D4 seam dependency |
| Staff edits appointment after work started | D5_PASS + D7_BLOCKED + D6_BLOCKED |
| Wrong patient/wrong chart correction | D5_PASS + D7_BLOCKED + LINK_FORCE |
| Duplicate patient merge | D5_PASS + D6_BLOCKED + D7_BLOCKED + LINK_FORCE |

Closure-gate interpretation:
- **Round 5 immediate blockers:** `K_BLOCKED` scenarios + unresolved substrate mapping in Section 3.
- **Round 6 carryover blockers:** `D6_BLOCKED` scenarios.
- **Round 7 carryover blockers:** `D7_BLOCKED` scenarios.
- **Implementation-forcing signals:** repeated `LINK_FORCE` and `SEGMENT_FORCE` flags.

---

## 5) D6 / D7 Inheritance Notes (mandatory carry-forward)

### Round 6 (Commerce) must preserve from D5
- `service_occurrence_work_item` is actualized-work truth; do not mutate it for financial corrections.
- all sale/refund/redeem/partial/split-tender/account-credit/void/reversal truth stays in D6.
- D6 must support linking financial outcomes to work items without rewriting D5 history.
- per-seat/per-participant commerce semantics must align with chosen K(C) substrate.

### Round 7 (Documentation) must preserve from D5
- drafts/notes/artifacts do not evaporate on cancellation or correction; they supersede/reassign with lineage.
- `encounter_view` record materialization must follow snapshot/supersession policy (`SO-25`).
- per-recipient visibility boundaries (especially caregiver/minor/group contexts) must align with K(C) roles/seats.
- D7 documentation closure is not implied by D5 occurrence completion.

---

## 6) Closure-Prep Output (what is still needed before Round 5 close)

1. **Adopt K(C) formally** via Amendment K path A implementation details.
2. **Map `service_occurrence_work_item` amendment ownership** and finalize `encounter_line` transition classification.
3. **Decide if `service_occurrence_link` is required now** based on closure-blocking LINK_FORCE scenarios.
4. **Decide if `service_occurrence_segment` is required now** based on closure-blocking SEGMENT_FORCE scenarios.
5. **Publish closure package** separating:
   - K decision outcome,
   - required substrate changes,
   - deferred items,
   - explicit remaining blockers.

Round 5 remains open until the above are complete.

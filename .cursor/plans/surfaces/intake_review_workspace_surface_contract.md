# Intake Review Workspace — Surface Contract

Plane: **P5 Surface** · Type: `workspace` · Status: `stub` · Persona(s): provider/clinical-reviewer · Build priority: `day_1`
Source-of-truth relationship: the provider's review surface over an intake submission packet. References Intake/Observation/CM/D7/CNS/OFC; commits via CM (adoption)/owning domains. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*Review a patient's intake + evidence and make the clinical decision* — read the deterministic review packet, adopt/reject assertions, decide candidacy/treatment, order/release.

## §2 Persona(s) + access
provider / clinical reviewer. RBAC clinical atoms + provider-adoption authority; Tier-4 for sign/order.

## §3 Reads from (references, owns none)
Intake (review packet, 1K.12: summary + risk/contraindication flags + meds/allergies/history + scores + candidate + lab status + verbatim narrative + per-segment AI candidates + identity confidence + payment-auth) · Observation (values + verification state) · CM (assertions + adoption state) · D7 (artifacts) · CNS (`clinical_required` gate) · OFC (orders/release).

## §4 Projections used (P4)
patient `context_packet` (layered, authority-labeled per CNS §9.1) · candidacy projection.

## §5 Writes / actions allowed (verbs → owning domain)
adopt/reject assertion → CM (provider-adoption) · order labs/Rx/treatment → OFC + RBAC T4 · release result → OFC release-state (decision composed: RBAC/provider/D7/Obs/CM/CNS) · decide candidacy → clinical decision record. **AI never adopts/releases.**

## §6 Forbidden
Never treat AI extraction as clinical truth ("AI says pathology suggests X" ≠ adopted); never prescribe while a `clinical_required` turn is open (CNS §10.1 safety gate); never auto-release a result; never bypass the layered-accountability chain (D7→Obs→CM→action).

## §7 Metrics shown
Review-queue depth/age, packet completeness, flags — workflow, not clinical authority.

## §8 Workflow states
Packet assembled (Intake) → review → adopt/reject → decide → order/release → follow-up. Provider Review Queue with fallback coverage (DL-20 inv 17).

## §9 Recovered design / prior gems
*Deposit box: the 1K.12 provider-review packet composition; layered-context-packet authority rule (CNS §9.1 — lower-authority OK for routing, provider-adoption required for clinical action); `clinical_required` permit-gate (CNS §10.1); release-gate = state-not-authority (OFC §6).*

## §10 Source docs feeding this surface
intake contract §8 (provider packet) · CNS §9.1/§10.1 · CM contract · OFC §4/§6 · D7 §4 (three gates).

## §11 Day-1 vs later
Day-1 (core clinical workflow). 

## §12 Open questions (→ `08`)
- Overlap with Provider Task Workspace (review is one task-type) — confirm merge vs distinct.

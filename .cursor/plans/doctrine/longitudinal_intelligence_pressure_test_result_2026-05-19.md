# Longitudinal Intelligence Pressure-Test Result

**Date:** 2026-05-19  
**Scope:** Scoring result using:
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_execution_protocol_2026-05-19.md`

**Method:** Dimension-level scoring only.  
**Constraint honored:** No new cases, no propagation, no Round 6 start.

---

## Rubric Score (8 Dimensions)

1. **Authority and commit boundary** - **Pass**  
2. **Permission, identity, and visibility boundary** - **Conditional**  
3. **Signal integrity and uncertainty handling** - **Pass**  
4. **Safety and degraded-mode behavior** - **Conditional**  
5. **Contact relevance and anti-spam discipline** - **Pass**  
6. **Domain ownership separation (D5/D6/D7)** - **Pass**  
7. **Auditability and explainability** - **Conditional**  
8. **Operational realism at scale** - **Conditional**

---

## Conditional/Fail Pressure Cases Only

No `Fail` cases identified.  
The following cases create `Conditional` pressure.

### Dimension 2 - Permission, identity, visibility (Conditional)

- **Case 18** (wrong-patient context contamination)  
  - **Pressure:** Doctrine requires provenance/permission but does not explicitly require identity-confidence gating before context packet materialization.
  - **Amendment note:** Add a binding identity-confidence gate clause before candidate or packet influence.

- **Case 24** (minor/guardian messaging boundary)  
  - **Pressure:** Doctrine includes visibility class but does not explicitly state delegated authority logic by recipient context.
  - **Amendment note:** Add delegated-recipient authority boundary for clinically meaningful messaging/actions.

- **Case 33 / 96** (deletion/revocation vs retention/audit)  
  - **Pressure:** Revocation boundary is clear, but legal-retention/audit continuity is implied rather than explicit.
  - **Amendment note:** Add explicit "future influence stops; legally required audit lineage persists under retention policy" clause.

- **Case 98** (internal snooping)  
  - **Pressure:** Visibility class exists, but purpose-limited access + sanctionability are not explicitly binding.
  - **Amendment note:** Add purpose-of-use access constraint + auditable enforcement statement.

### Dimension 4 - Safety and degraded mode (Conditional)

- **Case 19** (prompt injection / rogue instruction)  
  - **Pressure:** Candidate-not-commit boundary exists, but prompt-injection resistance is not explicit.
  - **Amendment note:** Add explicit "instruction-level adversarial input cannot bypass deterministic policy/authority gates."

- **Case 63 / 76** (risk detection without action capacity, population surge)  
  - **Pressure:** Degraded-mode appears in non-blocking guardrails; capacity-aware routing is not binding in core doctrine.
  - **Amendment note:** Promote capacity-aware escalation/degraded routing from parking-lot guidance to binding doctrine text.

- **Case 94** (model vendor outage)  
  - **Pressure:** Degraded-mode principle exists but not tied explicitly to model outage behavior in core sections.
  - **Amendment note:** Add explicit fallback rule: deterministic/manual path on model unavailability.

### Dimension 7 - Auditability and explainability (Conditional)

- **Case 59 / 74 / 77** (why sent, why no alert, suppressed candidate later mattered)  
  - **Pressure:** Outcome loop is strong, but explainability requirements for no-op/suppression rationale are not fully explicit.
  - **Amendment note:** Add mandatory rationale trace for candidate/action/no-op/suppression decisions with policy/version lineage.

- **Case 80** (system too smart to explain)  
  - **Pressure:** Traceability intent is present but not formalized as an explicit doctrinal requirement.
  - **Amendment note:** Add explicit explainability minimum set: source, policy/version, actor/authority path, outcome state.

### Dimension 8 - Operational realism at scale (Conditional)

- **Case 39 / 63 / 76 / 99** (alert fatigue, capacity limits, queue pressure, burden inequity)  
  - **Pressure:** Operational realism currently anchored mainly in non-blocking Section 15.
  - **Amendment note:** Add one binding operational clause requiring load-aware suppression/triage and burden monitoring as doctrine-level safety controls.

- **Case 90 / 91 / 92** (tone/compliance conflict, accessibility, translation safety)  
  - **Pressure:** Doctrine covers relevance and safety but not explicit operational content-governance layers.
  - **Amendment note:** Add a policy layering clause for clinical intent, compliance constraints, tone controls, and localization/accessibility safety checks.

---

## Final Verdict

**Verdict:** **Revise once** (not blocked).

Rationale against execution-protocol threshold:
- No `Fail` on dimensions 1-4.
- More than two `Conditional` dimensions are present.
- A single targeted revision pass can close these as explicit binding clauses without expanding implementation scope.

---

## Recommendation

Apply one doctrine revision pass limited to the amendment notes above, then re-run only impacted cases and re-score dimensions 2/4/7/8.

---

## Targeted Rerun Addendum (2026-05-20, Bounded)

Scope (bounded, no new case creation):
- doctrine clauses amended in `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` for:
  - identity-confidence and delegated-recipient authority,
  - revocation/retention and purpose-of-use access,
  - adversarial-input and degraded/capacity fallback,
  - rationale-trace minimum,
  - operational load/content-governance controls.
- impacted pressure cases rerun only (per protocol): 18, 24, 33, 96, 98, 19, 63, 76, 94, 59, 74, 77, 80, 39, 90, 91, 92, 99.

Rerun rubric (impacted dimensions only):
1. Authority and commit boundary - Pass (unchanged)
2. Permission, identity, and visibility boundary - Pass
3. Signal integrity and uncertainty handling - Pass (unchanged)
4. Safety and degraded-mode behavior - Pass
5. Contact relevance and anti-spam discipline - Pass (unchanged)
6. Domain ownership separation (D5/D6/D7) - Pass (unchanged)
7. Auditability and explainability - Pass
8. Operational realism at scale - Pass

Updated verdict:
- Threshold satisfied for limited propagation posture.
- LI doctrine remains draft-form doctrine, but conditional blockers from the first pass are closed for routed Tier1 limited-use.
- Broad doctrine lock promotion still requires normal domain-owner governance flow; this addendum only closes the conditional pressure-point gate.

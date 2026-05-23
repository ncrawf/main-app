# Longitudinal Intelligence - Pressure-Test Execution Protocol

**Date:** 2026-05-19  
**Status:** Execution protocol (appendix support artifact)  
**Scope:** How to run and score the 100-case pressure-test bank  
**Non-goal:** This file does not add implementation scope, schema, or Round 6 authoring.

---

## Inputs

- Doctrine: `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
- Pressure-test bank (100 cases): `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`

---

## Scoring Model

Score each of the eight doctrine rubric dimensions as:

- `Pass` - doctrine text clearly handles the risk class with no material contradiction.
- `Conditional` - doctrine mostly handles risk class but needs a specific amendment note.
- `Fail` - doctrine permits unsafe ambiguity or contradicts required behavior.

Propagation threshold:

- no `Fail` on dimensions 1-4 (authority, permission, signal integrity, safety),
- no more than two `Conditional` total,
- each `Conditional` must be paired with a concrete amendment note before propagation.

---

## Execution Steps

1. **Case run-through**
   - Run all 100 cases once against current doctrine text.
   - For each case, record:
     - outcome: `Pass` / `Conditional` / `Fail`
     - violated or satisfied doctrine clause(s)
     - brief rationale (1-3 lines)

2. **Dimension roll-up**
   - Roll case outcomes into the eight rubric dimensions.
   - Mark each dimension `Pass` / `Conditional` / `Fail`.

3. **Contradiction review**
   - For every `Conditional` or `Fail`, write one amendment note:
     - exact ambiguity/contradiction,
     - minimal doctrine text change needed,
     - whether change is doctrine body or appendix-only.

4. **Single revision cycle**
   - Apply one revision pass to doctrine if needed.
   - Re-run only impacted cases for confirmation.

5. **Final gate**
   - If threshold passes, doctrine is eligible for pointer propagation.
   - If threshold fails, stop and re-evaluate before propagation.

---

## Recording Template

Use this lightweight template during execution:

```markdown
## Case <id> - <title>
- Outcome: Pass | Conditional | Fail
- Doctrine references: <section(s)>
- Rationale: <short note>
- Amendment needed: Yes/No (if Yes, link to amendment note)
```

And this dimension summary:

```markdown
## Rubric Summary
- 1 Authority and commit boundary: Pass | Conditional | Fail
- 2 Permission/identity/visibility boundary: Pass | Conditional | Fail
- 3 Signal integrity and uncertainty handling: Pass | Conditional | Fail
- 4 Safety and degraded-mode behavior: Pass | Conditional | Fail
- 5 Contact relevance and anti-spam discipline: Pass | Conditional | Fail
- 6 Domain ownership separation (D5/D6/D7): Pass | Conditional | Fail
- 7 Auditability and explainability: Pass | Conditional | Fail
- 8 Operational realism at scale: Pass | Conditional | Fail
```

---

## Discipline Guard

- Do not expand the case bank beyond 100 during this cycle.
- Do not turn this protocol into implementation design.
- Do not use pressure-test execution to reopen Round 5 or start Round 6 authoring.

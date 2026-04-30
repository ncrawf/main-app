# `care_management_source` AssertionContext Field — Edge-Case Pressure Test + Patch

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** edge-case pressure test of 7 scenarios where symptoms / meds / pathways / care ownership do not line up cleanly; minimal in-place addition of `care_management_source` field
**Verdict:** Option B — single supplemental context field; ~7 lines net patch; no new sections, tables, or APIs

---

# Part 1 — Pressure test (7 cases)

## Case 1: External GLP-1 for 6 months + nausea during our intake

- **Base concepts:** `medication.tirzepatide`, `symptom.nausea`
- **Care ownership:** medication = external (outside_provider); symptom = N/A
- **Safety preflight:** no block on existing GLP-1 (we're not prescribing); urgent provider review for clinical context if patient asks us to coordinate or take over
- **Provider packet:** "Patient reports tirzepatide use externally (outside_provider) for 6 months; reports nausea (timing, dose, severity not provided)."
- **MUST NOT infer:** dose, titration phase, internal-vs-compounded source, prior side-effect history, prescriber identity

## Case 2: External testosterone + acne / mood / hematocrit

- **Base concepts:** `medication.testosterone`, `symptom.acne`, `symptom.mood_change`, `lab.hematocrit`
- **Care ownership:** medication = outside_provider; symptoms / lab = N/A or evidence-linked
- **Safety preflight:** no block; provider review for TRT side-effect coordination if takeover requested
- **Provider packet:** lists external medication + symptom cluster + outside lab if uploaded
- **MUST NOT infer:** dose, route, frequency, baseline hematocrit, time on therapy

## Case 3: "COPD flare" but COPD not provider-confirmed

- **Base concepts:** `condition.copd`
- **Care ownership:** unknown or unmanaged
- **Safety preflight:** BLOCK on authority floor (patient_reported < provider_confirmed) AND BLOCK on active acute state (`paused_active_disease_state_copd`); priority `urgent_clinical`
- **Provider packet:** "Patient reports active COPD exacerbation. No provider confirmation of COPD diagnosis on file. Care management source: unknown. Recommend clarification."
- **MUST NOT infer:** that COPD is real; that the flare is a true exacerbation; that consistency pattern alone justifies promotion

## Case 4: Pancreatitis history + abdominal pain + external GLP-1

- **Base concepts:** `condition.pancreatitis`, `symptom.abdominal_pain`, `medication.tirzepatide`
- **Care ownership:** medication = outside_provider; pancreatitis history = unknown / unmanaged
- **Safety preflight:** HARD BLOCK on pancreatitis history if patient requests GLP-1 from us (existing concept floor); URGENT priority regardless of who's prescribing (recurrent pancreatitis concern)
- **Provider packet:** "**URGENT REVIEW REQUIRED.** Patient: pancreatitis history + active abdominal pain + tirzepatide use externally. Concerning for recurrent pancreatitis. Recommend immediate clinical contact; do NOT prescribe additional GLP-1 from us until reviewed."
- **MUST NOT infer:** that abdominal pain is mild / unrelated; that historical pancreatitis was minor; that external prescriber has reviewed this constellation

## Case 5: Nausea, no metadata captured

- **Base concept:** `symptom.nausea`
- **Care ownership:** N/A
- **Handled by existing partial-data semantics.** No new patch needed.
- **Provider packet:** partial banner; "Date: Not provided. Severity: Not provided." Mode E re-prompt available.

## Case 6: External chronic condition affects our prescribing (PCP-managed AFib + warfarin)

- **Base concepts:** `condition.atrial_fibrillation`, `medication.warfarin`
- **Care ownership:** both = outside_provider
- **Safety preflight:** no block; routine provider review for warfarin-GLP-1 absorption interaction
- **Provider packet:** "Externally managed: AFib (outside_provider) on warfarin (outside_provider, indication AFib). Interaction note: GLP-1 may affect warfarin absorption."
- **MUST NOT infer:** dose, INR target, AFib type (paroxysmal vs persistent), external prescriber awareness of our involvement

## Case 7: Acute symptom unrelated to enrollment pathway (migraine during weight-loss intake)

- **Base concept:** `condition.migraine`
- **Care ownership:** unknown or self_managed
- **Pathway context vs relevance:** `context.pathway_code = glp1` is provenance (where captured), NOT relevance scope. Already correct semantics.
- **Safety preflight:** no block; informational
- **Provider packet:** "Other patient-reported conditions: migraine (intermittent, no current treatment). No direct interaction with [pathway]."
- **MUST NOT infer:** clinical relevance to GLP-1; severity absent additional data

---

# Part 2 — Synthesis: the gap

Cases 1, 2, 4, 6 share one structural gap: **care ownership is currently implicit via `treatment_item_id` presence/absence, which is ambiguous.** NULL `treatment_item_id` could mean:
- Patient is on this medication externally (outside_provider)
- We don't have one yet (in pre-prescribing intake)
- Data missing entirely
- Patient was on it but stopped

Cases 3, 5, 7 are handled by existing semantics (acute states + partial data + pathway provenance).

---

# Part 3 — Decision: Option B (in-place field addition)

Add `context.care_management_source` enum field to AssertionContext as a **supplemental** field (NOT in `context_key` hash; doesn't fragment assertion identity). Five enum values:

- `internal_program` — managed by our care program (we are clinician of record / prescriber for this concept)
- `outside_provider` — another licensed provider manages (PCP, specialist, prior clinic)
- `patient_self_directed` — patient self-manages (OTC medications, supplements, lifestyle conditions, recreational substances, gym-supplied / compounded medications without prescriber)
- `unmanaged` — patient acknowledges the concept but is not currently under any clinical care for it (e.g., "I have COPD but haven't seen a doctor in years")
- `unknown` — not yet captured (default when assertion is written without explicit care management source)

NULL is treated as `unknown`.

## Discipline rules (binding)

1. **NOT in `context_key` hash.** Same `medication.tirzepatide` is the same clinical entity regardless of who prescribes; care management is a provenance/responsibility dimension, not an identity dimension.
2. **NOT authoritative for safety.** care_management_source does NOT alter authority floors or contraindication rules. A pancreatitis history with `care_management_source = outside_provider` still blocks GLP-1 prescribe per the concept's `default_authority_floor`.
3. **Pathway context ≠ care ownership.** A patient can be in `context.pathway_code = glp1` (because they're enrolling in our GLP-1 pathway) while having `care_management_source = outside_provider` for an existing GLP-1 they're already on.
4. **Provider packet rendering.** Renderer groups assertions by care_management_source ("Internally managed", "Externally managed", "Self-directed", "Unmanaged", "Source unknown") for clear visual distinction.
5. **Inferred-value rule (advisory; never auto-populated).** When `context.treatment_item_id` is populated AND `care_management_source` is NULL, the system MAY surface a workspace prompt suggesting `internal_program` for provider confirmation; provider explicitly sets the value via `recordClinicalAssertion`. System never auto-populates without provider action.

## What this preserves

- No new abstractions; just a context field
- No new tables / views / APIs
- Authority floors unchanged
- `context_key` hash unchanged (same canonicalContextKey allowlist)
- Acute states model intact
- Pattern rollup intact
- Safety preflight intact
- Partial data semantics intact (NULL = unknown)

## What this gains

- Provider packet clarity for cases 1, 2, 4, 6
- Analytics dimension: cohort queries by management source
- AI training feature: clean categorical variable
- Future hook for care_coordination workflows (referrals, external prescriber linkage, transition-of-care)

## What NOT to build (overbuild risk)

- Separate `external_provider_records` table — defer until outside-records ingestion at scale
- Per-medication AND per-condition distinct fields — one field via concept_type-aware rendering
- Auto-populate care_management_source from treatment_item_id presence — advisory only; provider explicitly sets
- New CI lint rules — existing concept-mapping CI handles defaults via question-bank `context_template`

---

# Part 4 — In-place patch

Single addition to the AssertionContext shape (after `clinical_visit_id?` line). ~7 lines net.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Patch applied to 1K.5.A AssertionContext shape in single checkpoint alongside this audit. After landing: foundational design phase complete; `repo/clinical-concepts/` file authoring can proceed.

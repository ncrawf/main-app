# Adversarial slice + readiness assessment — pre-runtime

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** 4 targeted adversarial scenarios stress-testing the locked architecture (Sections 1G/1H/1I/1J/1K/1K.5.A/1L/1M/1N/1O/1P/1Q + GLP-1 slice + 6 MVP-polish refinements + Section 1Q.15) before runtime implementation begins. Pathway readiness assessment for ED / TRT / HRT / peptides. Runtime readiness verdict.
**Verdict:** Architecture HOLDS for all 4 scenarios with 3 foundational refinements + 1 MVP-polish refinement. No new sections needed. Pathway expansion ready for ED + TRT + HRT in parallel with GLP-1; peptides compliance-blocked. Runtime implementation ready after the 4 refinements land.

---

# Part 1 — Scenario 1: Refill after non-adherence

**Patient:** Sarah, prescribed semaglutide 1.0mg weekly. Missed 3 weeks. Now requests refill at 1.0mg.

**Pipeline trace:**
1. **Source:** refill action item per `1G.11`; free-text addendum: "I was traveling and ran out. Last dose ~3 weeks ago. Felt fine on 1.0mg before — can I just continue?"
2. **Evidence:** `patient_action_items` of `refill_requested`; `intake_response` `free_text_long`; `inbound_narrative_review` row.
3. **Classification:** Deterministic safety scan: no match. AI classifier: `actionable`.
4. **Atomization:** `medication.semaglutide` assertion update with `metadata.adherence_gap_days = 21`; `patient_concern_topic = restart_dose_decision`; `provider_question_pending` action item.
5. **Routing:** Standard refill workflow per `Section 1Q.13` Module 6 medication_workflow; provider review.
6. **Rules:** `rule.glp1.labs.refill_freshness` PASS (4-month-old labs); `rule.glp1.rx.provider_authorization_required` fires.
7. **Authority gates:** Provider authorization required; no auto-refill.
8. **Actions:** Provider receives refill request; sees patient's "restart at 1.0mg" preference.
9. **Communication:** Patient sees waiting message.
10. **Failure point:** **NO rule detects medication adherence gap and routes for re-titration decision.** Per current GLP-1 clinical guidelines, after >2-week gap, dose may need re-titration (start lower than maintenance) due to GI tolerance decrease. Provider could miss the gap context if moving fast.

**Refinement 1 (FOUNDATIONAL; clinically critical):** Adherence-aware dose decision rule. New rule pattern (generic to all Rx pathways) that detects gap in `medication.<rx>` assertion's last-dose-taken vs current request, computes adherence gap days, surfaces `decision_support_payload` (per Refinement 4 from prior checkpoint) with re-titrate / continue-at-last-dose / discontinue options based on pathway-specific clinical guidelines. Without this: provider must manually catch gap each time. At 100/day annoying; at 10K/day clinical safety failure mode.

---

# Part 2 — Scenario 2: Multi-domain collision

**Patient:** David (on GLP-1 for 2 weeks) sends one long portal message containing nausea + pancreatitis concern + warm package + refund request + dose-decision question.

**Pipeline trace:**
1. **Source:** Single `messages` row per Layer 2 SoT.
2. **Evidence:** `messages` row preserved; `inbound_narrative_review` row with `source_kind = patient_message`.
3. **Classification:** Deterministic safety scan: should match on "pancreatitis" / nausea pattern; opens `clinical_required` urgent turn. AI classifier: `actionable`.
4. **Atomization:** Section 1P AI extraction emitter produces atoms in 4 domains:
   - **Clinical (Module 9 + 6):** `symptom.nausea` candidate + `patient_concern_topic = pancreatitis` + `provider_question_pending` (next dose?)
   - **Fulfillment (Module 7):** `commerce_exception_requests` of `cold_chain_failure`
   - **Billing (Module 8):** `1I.4` refund request
   - **Safety (Module 9):** safety scan match → `clinical_required` urgent turn + bypass digest
5. **Routing:** Section 1P.5 parallel role-scoped reviewers — provider + ops + billing; all see source narrative.
6. **Rules:** `rule.glp1.adverse.urgent_symptom_routing` + `rule.glp1.adverse.pancreatitis_concern` + `rule.glp1.fulfillment.cold_chain_failure` + 1I.4 refund.
7. **Authority gates:** Open `clinical_required` blocks high-risk Rx; cold chain replacement is vendor-authoritative for fulfillment per `Section 1P` invariant 8.
8. **Actions:** Per `Section 1Q.13` outgoing collision discipline + Refinement 5 cross-channel dedup — patient gets ONE urgent SMS; provider gets unified batch; ops processes replacement; billing processes refund.
9. **Communication sequence:** Immediate urgent SMS → provider phone outreach within 1 business hour → ops cold chain replacement → billing refund confirmation → provider response on next dose decision.
10. **Failure point:** Subtle gap — provider might miss the **clinical relevance of cold-chain context** to the symptom (warm dose may have caused/worsened nausea). Cold-chain atom routes to ops; provider sees as cross-domain context (read-only); no rule highlights temporal correlation.

**Refinement 2 (MVP-polish):** Cross-domain semantic context banner. Extend `Section 1P.5` cross-batch concept-aware review surfacing rule with "**clinical-relevance-of-ops-events banner**" — when `commerce_exception_requests` of clinical-impacting type (`cold_chain_failure`, `wrong_dose_shipped`, `wrong_item_shipped`) is followed within configurable window by a clinical symptom atom on same patient, provider's batch review surfaces "potential clinical impact of recent fulfillment event" banner with click-through.

---

# Part 3 — Scenario 3: Provider override / disagreement

**Patient:** Linda, 48F. On GLP-1 0.5mg. Refill blocked by `rule.glp1.labs.refill_freshness` (labs 7 months old). Provider reviews case, calls patient, gets verbal confirmation that overall health is stable. Provider wants to issue 1-week bridge supply while patient schedules new lab kit.

**Pipeline trace:**
1. **Source:** Provider initiates override via provider workspace per `1G.8`.
2. **Evidence:** Provider's intent recorded as `clinical_visits.assessment` addendum per `Section 1P.6` freehand carve-out.
3-5. N/A (provider freehand bypasses inbound atomization).
6. **Rules:** Current architecture supports two paths:
   - **Option A (truth-update):** Provider writes new assertion that supersedes lower-authority claim. But provider doesn't want to claim "labs are fresh" — they're not.
   - **Option B (break-glass per `1J.9`):** Heavy-weight; mandatory `reasonCode`; intended for emergency/safety override; requires `requireCapability(break_glass_identity)`.
   - **HERE'S THE GAP:** Provider wants neither. Provider wants a **scoped rule-firing override**: "I acknowledge `rule.glp1.labs.refill_freshness` blocked this refill_approve action; I'm overriding for THIS specific firing only with documented reasoning; underlying truth (labs ARE stale) is not changed; an audit row records full provenance."
7. **Authority gates:** Need NEW capability `can_authorize_clinical_override` per `1D.1`; audit per `1J.10` minimum guardrails.
8. **Actions:** With Refinement 3 — provider workspace shows clinical override affordance for blocked rule firing; provider selects override, types reason, action proceeds; `audit_events` row of `event_type = rule.firing_overridden` captures full provenance; underlying assertions NOT modified.
9. **Communication:** Patient gets `tmpl.glp1.rx.approved_v1` for bridge supply with `metadata.bridge_dispense = true` + lab kit reminder.
10. **Failure point:** Architecture treats blocks as solvable only by truth-update or break-glass. Neither captures routine clinical-judgment override that experienced providers make multiple times per day. Without first-class scoped override:
    - Providers will work around blocks by writing fake truth-updates (corrupting longitudinal memory)
    - Or invoke break-glass for routine cases (devaluing the break-glass signal)
    - Or simply not approve refills for legitimate clinical-judgment cases (workflow friction)

**Refinement 3 (FOUNDATIONAL; comparable in importance to model_recall pattern from `Section 1P.11`):** Scoped clinical override pattern. Extend `Section 1Q.4` `RuleAction` for `kind = 'block'` and `kind = 'gate'` with `override_capability_required?: CapabilityCode` (some safety rules MUST NOT be overridable — those omit this field). Extend `Section 1Q.7` audit trail with `event_type = rule.firing_overridden` + full typed payload (rule_id, rule_version, blocking_action_kind, override_reason_code (typed enum), override_scope (`this_firing_only` | `this_rule_for_this_patient_until` | `this_rule_for_treatment_item_until`), override_expires_at, override_evidence_note, override_evidence_refs, approved_by_user_id, approved_by_capability, **underlying_assertions_modified: false** crucially). Extend `1D.1` capability list with `can_authorize_clinical_override`, `can_authorize_ops_override`, `can_authorize_billing_override`. Aggregate stats feed quality monitoring per `Section 1Q.10` rule_recall (high override rate may indicate ruleset is too strict).

**Why FOUNDATIONAL:** new architectural concept (scoped action authorization separate from truth update). Without it, real clinical workflow either corrupts truth or bypasses workflow with break-glass.

---

# Part 4 — Scenario 4: AI failure at scale

**Cohort scenario:** AI extraction emitter `glp1_intake_v3.1` deployed 4 weeks ago. Three error patterns:
- **(a) Wrong-extraction:** "no family history of thyroid cancer" parsed as positive in ~2% (~20 patients). Negation-handling bug.
- **(b) Misclassification:** Fish oil + multivitamin classified as `medication.fish_oil` instead of `supplement.fish_oil` in ~40% (~150+ patients).
- **(c) Under-extraction:** Prior GLP-1 use ("I tried Ozempic 2 years ago") not extracted in ~30%. Affected count unknown without re-extraction pass.

**Pipeline trace:**
1. **Source:** Original `intake_response` rows immutable per `1K.5`; preserved evidence intact.
2. **Evidence:** `patient_clinical_assertions` rows with bad provenance (model_version = `glp1_intake_v3.1`); under-extraction has no evidence.
3-5. N/A (post-hoc analysis).
6. **Rules per `Section 1Q.10` model_recall pattern (already locked):**
   - **Error (a) — Safety-critical:** clinical CODEOWNER + compliance issue `recall_action = mass_supersede`. ~20 affected; system writes superseding rows with `status = retracted`; reopens `clinical_required` turns; affected patients re-routed for re-evaluation.
   - **Error (b) — Clinical:** `recall_action = flag_for_re_review`. ~150 affected; atoms get `recall_flag_<recall_id>` annotation; provider re-review queue.
   - **Error (c) — Under-extraction:** **HERE'S THE GAP.** Model_recall pattern handles WRONG extractions but doesn't have explicit re-extraction pass for UNDER extractions. Section 1P emitter is idempotent per `(intake_response_id)`; re-running with new model = different output but no automated trigger to re-run for affected cohort.
7. **Authority gates:** `mass_supersede` requires clinical CODEOWNER + compliance approval; `flag_for_re_review` for AI engineering with safety-relevant changes requiring clinical CODEOWNER per Section 1Q.0 invariant 6.
8. **Actions:** Without re-extraction pattern for error (c), provider/ops would have to manually identify affected `intake_response` rows + manually re-run extraction + review per patient. At 150+ affected this is hours; at 10K+ impossible.
9. **Communication:** mass_supersede affected: provider-authored corrective comm. flag_for_re_review: no patient comm until provider acts.
10. **Failure point:** Without re-extraction capability, model recalls fix what's in the chart but not what should be there. Under-extraction is a real failure mode (model misses content that's in the source). Section 1P.11 correction_reason enum doesn't include `under_extraction_caught_by_provider` — when provider creates a `provider_assessed` assertion duplicating recent `intake_response` content AI emitter SHOULD have extracted but didn't, no defined correction reason.

**Refinement 4 (FOUNDATIONAL; FDA AI/ML SaMD compliance lever):** Re-extraction pattern + under-extraction correction reason. Extend `Section 1Q.10` model_recall pattern with new `recall_action` value `re_extract_with_new_model` (idempotent per `(intake_response_id, recall_id)`; new atoms get `recall_flag_<recall_id>` annotation; routed as candidates needing re-review NOT auto-merged into chart; severity typically `clinical` for provider-reviewed flag, `safety_critical` (mass_supersede + re-extract) when under-extraction is itself a safety risk). Extend `Section 1P.11` `correction_reason` enum with new value `under_extraction_caught_by_provider` (aggregate stats feed `rule_correction_patterns_rollup` for AI engineering to detect under-extraction patterns proactively).

**Why FOUNDATIONAL:** without re-extraction capability, model recalls can only fix what's in the chart, not what should be there. FDA AI/ML SaMD Predetermined Change Control Plan post-market monitoring requires ability to retroactively catch missed extractions.

---

# Part 5 — Summary of findings

| Scenario | Architecture status | Refinement | Foundational? |
|---|---|---|---|
| 1 — Refill / non-adherence | Holds | #1 — Adherence-aware dose decision rule | YES (clinically critical) |
| 2 — Multi-domain collision | Holds | #2 — Cross-domain semantic context banner | NO (MVP-polish) |
| 3 — Provider override | Gap | #3 — Scoped clinical override pattern | YES (real provider workflow need) |
| 4 — AI failure at scale | Partial gap | #4 — Re-extraction pattern + under-extraction correction reason | YES (FDA SaMD compliance) |

**3 foundational + 1 MVP-polish.** No new sections needed. All refinements integrate cleanly into existing sections per consolidation discipline.

---

# Part 6 — Pathway readiness assessment

The architecture as locked handles ED / TRT / HRT / peptide pathways using the same primitives. Pathway-specific work is rules + templates + concept-registry entries, NOT architectural changes.

| Pathway | Architecture readiness | Compliance readiness | Pathway-specific complexity |
|---|---|---|---|
| **GLP-1** (in progress) | ready | FDA off-label discipline; state telehealth | High clinical (safety; titration; lab cadence) |
| **ED** | ready | FDA-approved on-label; state telehealth standard | Lower complexity (cardiac contraindication + drug-interaction); simpler labs |
| **TRT** | ready | DEA Schedule III; controlled substance handling per `1J.6`; state Rx monitoring programs | Heavy lab cadence (T, hematocrit, PSA, estradiol); injectable vs topical |
| **HRT female** | ready | FDA-approved; clotting-risk screening; mammogram + Pap | Multiple formulations; cycling vs continuous |
| **Peptide muscle** (BPC-157, TB-500) | architecture-ready | **Off-label / unregulated; FDA enforcement pressure on compounders; FDA 2024 guidance restricts some peptides** | Compounding-only supply; unclear regulatory status |
| **Peptide antiaging** (NAD+, ipamorelin, GHRP) | architecture-ready | **Higher compliance risk; some on FDA bulk substances list** | Compounding-only; unclear regulatory status |

**Recommendations:**

- **GLP-1 + ED + TRT + HRT can proceed in parallel** with the GLP-1 slice using existing architecture. Each gets its own `repo/rules/{ed,trt,hrt}/` + `repo/templates/{ed,trt,hrt}/` directory; shared concept registry. ~60-70% of GLP-1 rules + templates pattern-match (eligibility / labs / Rx / fulfillment / safety / refill); ~30-40% pathway-specific.

- **Peptide pathways (muscle + antiaging) NOT architecture-blocked but ARE compliance-blocked.** Before scope addition, recommend separate compliance + admin review covering: (a) FDA bulk substances list status per peptide; (b) state-specific compounding rules; (c) DEA regulatory exposure; (d) liability + insurance; (e) marketing constraints (off-label promotion forbidden per `Section 1Q.13` Module 15 carve-out — likely means peptide pathways need clinical CODEOWNER co-review of all marketing templates); (f) clinical evidence base. This is org policy work, not architecture work.

**Future architectural consideration (NOT for this checkpoint):** when peptide pathways are scoped, may need a `pathway_compliance_tier` field on the pathway file declaration per `1K.2` (`fda_approved | fda_off_label | unregulated_compounded | research_only`) that drives stricter `prohibited_claims` floors, additional CODEOWNER tiers, and possibly limit on `ai_refinement_allowed = true` opt-ins. Defer until peptide pathways are actually scoped for v1.

---

# Part 7 — Runtime readiness assessment

**Ready to start runtime implementation AFTER the 4 refinements land.**

The complete architectural foundation:
- 8 commits this session establishing Sections 1P + 1Q + 1Q.13 + 1Q.15 + GLP-1 slice + 6 MVP-polish refinements
- 23 GLP-1 rules + 25 GLP-1 templates defined (illustrative-but-realistic) with full attribute sets
- All system map invariants in place
- All authority gates in place
- All audit + reconstructability rules in place
- Three governance dimensions cleanly separated
- Marketing carve-out enforced
- Cross-domain collision handling defined

**After this adversarial-test checkpoint lands:**
1. Scaffold `repo/rules/glp1/` + `repo/templates/glp1/` directories with module-organized subdirectories per `1K.14` carve-out.
2. Author 23 GLP-1 rules + 25 GLP-1 templates (now 24 rules with Refinement 1 adherence rule) as TypeScript code-as-config files; clinical CODEOWNER reviews each at PR time.
3. Build sandbox test harness covering 5+ test fixtures per clinical_safety domain rule.
4. First integration test: Sarah's clean intake (Scenario 1 of GLP-1 slice) end-to-end.
5. Expand to Scenarios 2-5 (Marcus / Priya / David / Jennifer) integration tests.
6. Add adversarial Scenarios 1-4 from THIS checkpoint as integration tests.
7. Parallel pathway work begins for ED + TRT + HRT (subset of devs/clinicians per `1G.4`); peptide pathways deferred pending compliance review.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Single multi-file checkpoint applied: 4 refinement patches (3 foundational + 1 MVP-polish) + NEW Section 1Q.16 cross-link summary + this audit.

After landing: ready for code-as-config implementation of GLP-1 slice + parallel pathway work for ED/TRT/HRT. Peptide pathways deferred pending separate compliance review.

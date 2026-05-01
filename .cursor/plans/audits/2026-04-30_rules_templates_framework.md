# Rules + Templates engine — foundational framework

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** define the foundational rules + templates framework that turns the now-locked intake/atomization architecture (sections 1G/1H/1I/1J/1K/1K.5.A/1L/1M/1N/1O/1P + 20 invariants + Patches 14-16 + 4 system-pressure-test patches) into actions and communications without chaos. The framework lives as new Section 1Q parallel to Section 1P.
**Verdict:** approved with three precision corrections baked in. Single multi-file checkpoint: NEW Section 1Q (~280 lines) + 6 cross-link bullets in 1G.3 / 1J.10 / 1K.12 / 1G.11 / 1L.15 / 1K.14.

---

# Part 1 — Core principle (locked verbatim)

```
Rules decide WHAT.
Templates define WHAT IS ALLOWED TO BE SAID/DONE.
AI decides HOW to phrase/refine within constraints.
Humans/providers decide clinical truth.
```

This is the four-layer separation of concerns. Every rule firing maps to exactly one of these four layers; CI lint enforces. No rule may decide HOW (that's AI's job within template constraints). No template may decide WHAT (that's the rule's job). No AI output may decide WHAT or WHAT-CAN-BE-SAID. No human override may bypass safety rules without audited break-glass per `1J.9`.

---

# Part 2 — Three precision corrections (per user 2026-04-30 review)

## Correction 1 — `ai_refinement_allowed` is template-governance, not patient consent

The `ai_refinement_allowed` flag on every template is a **template governance setting** controlled by clinical / ops CODEOWNER at PR time. It is NOT:
- a patient consent toggle
- a runtime per-patient flag
- a provider per-message override

When `false`: the approved strict template renders byte-equivalent unchanged; AI refinement is disallowed at runtime; render output is byte-equivalent to the template's static rendering.

When `true`: AI may adjust ONLY the explicitly enumerated `ai_refinement_constraints.may_change` phrasing fields within template constraints; AI changes to `prohibited_claims` / `required_variables` / `tone_class` / channel-specific format are forbidden by CI lint and rejected at refinement validation time.

Patient consent for AI in clinical communication (a separate concern entirely) is governed by `1K.11` `patient_consents` and is orthogonal to this template-governance flag.

## Correction 2 — Templated vs. human-authored patient-facing communication

The original draft said "untemplated patient-facing messages forbidden" without distinguishing automated vs. human-authored. Refined rule:

**Automated patient-facing messages MUST use approved templates** — every system-initiated, rule-fired, scheduled, or AI-emitted patient-facing message links back to (rule_id, template_key, evidence_refs); CI lint forbids automated send paths that bypass the template registry.

**Human-authored provider/staff freehand to patients MAY be freehand** when sent under appropriate role authority via `requireCapability` per `1D.1`:
- Provider freehand via `clinical_visits` addenda or outbound `messages` per `Section 1P.6` freehand carve-out — provider IS authority.
- Staff freehand via approved staff-outbound paths gated by ops CODEOWNER capability + audit.

**AI drafting assistance for human-authored freehand is allowed but the human MUST approve before send** — the AI-drafted text never auto-sends; the human reviewer reads, edits, accepts, and only then the send fires; the audit row carries `ai_drafting_assist = true` + `ai_model_version` + `ai_prompt_id` + draft-vs-sent diff per `Section 1P.11` correction discipline.

Every patient-facing message — automated OR human-authored — emits an `audit_events` row carrying authorship lineage:
- Automated: rule_id + template_key + evidence_refs.
- Human-authored: actor_user_id + capability + ai_drafting_assist? + draft-vs-sent diff if AI-assisted.

## Correction 3 — `clinical_review_required` is template-governance approval, not per-message authority

The original draft conflated definition-time CODEOWNER review with runtime per-message provider approval. Three governance dimensions distinguished cleanly:

| Dimension | What it controls | Who decides | When |
|---|---|---|---|
| Template governance (`clinical_review_required`) | Template definition content | Clinical / ops CODEOWNER | PR time (definition / version edit) |
| Runtime per-message authority (`rule.action.authority_floor`) | Whether a specific firing requires human approval before send | Rule's action declaration | Rule-firing time per case |
| AI refinement enablement (`ai_refinement_allowed`) | Whether AI may adjust phrasing within constraints | Clinical / ops CODEOWNER | PR time (template definition); orthogonal to patient consent |

**Lab reminder example:** the template definition requires clinical CODEOWNER approval to ship (template governance). Once approved, automated sends of that template fire on schedule without per-message provider approval (subject only to `1G.3` send-policy gating). A separate `clinical_safety_escalation` rule action firing on the same patient may, separately, require provider review before send — that's a rule-level decision, not a template-level one.

---

# Part 3 — Cross-industry framing

| Pattern | Industry exemplar | Our architecture |
|---|---|---|
| Rules engine + audit + versioning | Stripe Radar (fraud rules; sandbox-test before activate; per-rule version pinning) | `rule_version` pinned at every firing per 1Q execution order |
| Templated communication with AI refinement constraints | Apple HealthKit (AI summaries cite user data; AI cannot invent clinical claims) | `ai_refinement_allowed` defaults to `false`; opt-in per template; CI lint enforces |
| Clinical Decision Support (CDS) hooks | Epic / Cerner (clinical content team approves "best practice advisories"; CDS firing is a workflow event with audit trail) | Clinical CODEOWNER gating per safety/clinical rules + templates; rule firings emit typed `audit_events` |
| Process Builder + Flow + governance | Salesforce (admin/dev split; sandbox before production) | Three-tier governance: clinical CODEOWNER / ops CODEOWNER / admin |
| Deterministic safety policy with AI assist | Tesla (driving + safety policies are rule-driven; AI never overrides safety) | Section 1J.10 safety preflight + 1Q.0 core principle: AI cannot bypass templates or invent rules |
| Customer-facing message templates with provenance | Amazon CS (every message links back to interaction id + rule firing + agent decision) | Every patient-facing message links back to rule_id + template_key + evidence_refs per 1Q invariant 9 |
| FDA AI/ML SaMD framework | Predetermined Change Control Plan; per-version monitoring + recall | `model_recall` pattern (per `Section 1P.11`) extends to rule recall + template recall via the same audit_events mechanism |

**Healthcare-specific:** rules+templates engine is the architectural surface where HIPAA + 21st Cures Act + FDA SaMD + Joint Commission CDS-change-control all converge. Defensibility requires every patient-facing communication to be reconstructable: (rule_version, template_version, evidence_refs, ai_refinement_log if applicable, authored_by, audit_events trail).

---

# Part 4 — Twelve hard invariants

1. **Rules decide WHAT.** Templates define WHAT-CAN-BE-SAID. AI decides HOW-WITHIN-CONSTRAINTS. Humans/providers decide clinical truth. (Core principle.)
2. **Rules must be deterministic and auditable.** Every rule firing is reconstructable from `rule_version` + inputs.
3. **Templates must constrain permissible communication.** Variable substitution + prohibited_claims are enforced at render time; missing variables = render error, not silent fallback.
4. **AI cannot invent clinical recommendations.** AI never decides WHAT; only refines within template constraints when explicitly allowed.
5. **AI cannot bypass templates.** `ai_refinement_allowed` is a template governance setting (system-controlled by CODEOWNER at PR time, NOT a patient consent toggle, NOT a runtime override). Defaults to `false`; opt-in per template at PR time with rationale. When `false`: byte-equivalent strict template render; AI refinement disallowed. When `true`: AI may adjust ONLY enumerated `ai_refinement_constraints.may_change` phrasing fields within template constraints; AI changes to `prohibited_claims` / `required_variables` / `tone_class` / channel-specific format forbidden by CI lint. Patient consent for AI in clinical communication is governed by `1K.11` and orthogonal to this flag.
6. **Clinical templates require clinical CODEOWNER approval at PR time** (template governance). No exceptions; CI lint enforces via `.github/CODEOWNERS`. This does NOT imply per-message provider approval at runtime — runtime per-message authority is a separate concern controlled by the firing rule's `action.authority_floor`.
7. **Safety rules require clinical CODEOWNER + compliance approval.** No exceptions.
8. **Every rule firing must be explainable.** `rationale_note` required at PR time; replayable from `rule_version`.
9. **Templated vs. human-authored patient-facing communication discipline:** **automated** patient-facing messages MUST use approved templates with full lineage to (rule_id, template_key, evidence_refs); CI lint forbids automated send paths that bypass the template registry. **Human-authored** provider/staff freehand to patients MAY be freehand under appropriate role authority via `requireCapability` per `1D.1` + audit. AI drafting assistance for human-authored freehand is allowed but the human MUST approve before send (no auto-send of AI-drafted text under human's capability). Every patient-facing message — automated OR human-authored — emits an `audit_events` row carrying authorship lineage.
10. **Rules must operate on structured state, not raw free text alone.** Predicates reference typed fields; AI extraction outputs are typed atoms; raw narrative never directly fires a rule (it goes through `Section 1P` atomization first).
11. **Missing data triggers clarification, not unsafe inference.** When a rule's `required_inputs` are unavailable, fire a `patient_clarification` rule via Mode F bridge per `Section 1P.4` Patch B; never proceed with assumed defaults for safety-critical paths.
12. **Section 1Q consolidation discipline (forward rule).** Future rules+templates additions go INTO Section 1Q or its declared cross-link sections; CI lint forbids inbound rules+templates rules introduced in unrelated sections. No second rules engine. No parallel template registry. No drift toward fragmented per-section rule libraries.

---

# Part 5 — Three governance dimensions (locked separately)

The framework distinguishes three governance dimensions cleanly so future engineering can build against unambiguous semantics:

**Template governance (definition-time):**
- Field: `clinical_review_required: boolean` on the template object
- Controls: who must review the template DEFINITION at PR time
- Owner: clinical CODEOWNER (clinical content) / ops CODEOWNER (operational content)
- When: PR time (creating or modifying the template definition)
- CI: `.github/CODEOWNERS` enforcement

**Runtime per-message authority (firing-time):**
- Field: `rule.action.authority_floor` + `rule.action.escalation_owner_role` on the rule object
- Controls: whether a specific firing requires human approval before the send fires
- Owner: rule's action declaration
- When: rule-firing time per case
- CI: rule firing emits typed `audit_events` row; runtime authority enforcement is part of stage 4 of the 7-stage execution order

**AI refinement enablement (definition-time):**
- Field: `ai_refinement_allowed: boolean` on the template object
- Controls: whether AI may adjust phrasing within `ai_refinement_constraints` at runtime
- Owner: clinical CODEOWNER (safety/clinical templates) / ops CODEOWNER (non-clinical templates) at PR time
- When: PR time (template definition); orthogonal to patient consent (which lives at `1K.11`)
- CI: explicit declaration required; defaulting to `true` without rationale forbidden

---

# Part 6 — Rule object shape (~25 fields)

```typescript
interface Rule {
  rule_id: string;                          // stable; e.g., "rule.glp1.refill_approve.pregnancy_status_freshness_v3"
  rule_version: string;                     // semver; pinned at every firing
  domain: RuleDomain;                       // 13-value enum
  trigger: RuleTrigger;                     // event-driven discriminated union over event_type
  preconditions: Predicate[];               // structured-data predicates only; NEVER free-text; CI lint enforces typed-field references
  required_inputs: InputRef[];              // typed pointers to data sources (assertions, observations, action items, lab results, payment events)
  authority_floor?: AuthorityFloor;         // optional; who must own the resulting action
  action: RuleAction;                       // discriminated union: block | clarify | route | notify | escalate | gate
  priority: 'urgent_clinical' | 'urgent_ops' | 'standard' | 'low';
  blocking: boolean;                        // true = mutation halts; false = side effect / signal only
  template_key?: TemplateKey;               // when action emits a patient-facing or staff-facing message
  escalation_owner_role?: EscalationOwnerRole;
  evidence_refs_required: EvidenceRefSpec[];
  audit_event_type: AuditEventType;
  pathway_scope?: PathwayCode[];
  jurisdiction_scope?: JurisdictionCode[];
  status: 'draft' | 'active' | 'deprecated' | 'retired';
  effective_at: timestamptz;
  retired_at?: timestamptz;
  test_fixtures: TestFixtureRef[];          // sandbox test cases; clinical_safety = 5+; ops = 2+
  rationale_note: string;                   // required free-text explaining clinical/business intent
  retiring_supersedes_rule_id?: string;
  retiring_replaced_by_rule_id?: string;
}
```

---

# Part 7 — Template object shape (~17 fields)

```typescript
interface Template {
  template_key: string;                     // stable; e.g., "tmpl.patient.clarification.pregnancy_status_refresh_v2"
  template_version: string;
  domain: TemplateDomain;                   // 10-value enum
  allowed_use: 'patient_facing' | 'provider_facing' | 'staff_internal' | 'vendor_facing';
  channels: Channel[];                      // sms | email | in_app | push | print | phone_script
  required_variables: TemplateVariable[];   // typed; missing variable at render = render error (not silent fallback)
  optional_variables?: TemplateVariable[];
  prohibited_claims: ProhibitedClaimSpec[]; // structured constraints
  tone_constraints: ToneConstraint[];       // typed enum
  clinical_review_required: boolean;        // template GOVERNANCE flag (PR-time, CODEOWNER); does NOT imply per-message provider approval at runtime
  ai_refinement_allowed: boolean;           // DEFAULT FALSE; template-governance setting (system-controlled at CODEOWNER PR time, NOT patient consent, NOT runtime override)
  ai_refinement_constraints?: AIRefinementConstraints;
  evidence_required: EvidenceRefSpec[];
  jurisdiction_variants?: JurisdictionVariants;
  status: 'draft' | 'active' | 'deprecated' | 'retired';
  effective_at: timestamptz;
  retired_at?: timestamptz;
  test_renders: TestRenderRef[];            // sample renders that must pass review
  rationale_note: string;
  retiring_supersedes_template_key?: string;
  retiring_replaced_by_template_key?: string;
}
```

---

# Part 8 — Seven-stage execution order

1. **Pre-conditions** — data freshness checks per `1K.5` `time_sensitive_30d`; identity L-level per `1J.4`; capability + reason per `1D.1`. Fail → emit clarification request via `Section 1P.4` Patch B Mode F bridge.
2. **Safety preflight** — `1J.10` `loadPatientCaseSafetySnapshot` read; authority-floor enforcement; conflict detection. Fail → block + open `clinical_required` turn + queue priority elevation per `1G.7.6`.
3. **Eligibility / gating** — concept-specific gates (jurisdiction, age, clinical contraindication). Fail → render denial template + record `decision_outcome_reason` per `1K.12`.
4. **Authority floor check** — does the actor have authority to take the action? AI never has clinical authority; system-derived has lowest authority for clinical writes. Fail → escalate to authority owner.
5. **Action selection** — rule → template lookup via `template_key`; render template with `required_variables`; on missing variable, render error.
6. **AI refinement (if allowed)** — when template's `ai_refinement_allowed = true`, AI may refine within `ai_refinement_constraints`; CI lint forbids changes to `prohibited_claims` / `required_variables` / `tone_class`; refinement output audit-logged with `ai_model_version` + `ai_prompt_id`.
7. **Audit + side effects** — emit typed `audit_events` row with full provenance; side effects fire here.

---

# Part 9 — MVP scope

## Must exist before first Rx pathway ships
- 1Q.0–1Q.4 fully landed (scope, mantra, invariants, schemas, execution order, governance).
- `repo/rules/` directory with schema TypeScript definitions + sandbox test harness skeleton; first 5–10 rules for GLP-1.
- `repo/templates/` directory with first 8–12 templates (denial, clarification, lab kit reminder, refill reminder, support response, cancellation, fulfillment exception, escalation).
- CI lint enforcing rule + template invariants.
- Audit event taxonomy: `rule.fired.<domain>.<rule_id>` + `template.rendered.<domain>.<template_key>` + `template.refined_by_ai.<template_key>`.
- Three-tier governance wired in `.github/CODEOWNERS`.

## Deferred (post-launch)
- Full rule library across all 13 domains for all pathways.
- A/B testing framework for non-clinical templates.
- Advanced AI refinement.
- Cross-pathway rule reuse + composition primitives.
- Sandbox UI for non-engineers.
- Performance optimization.
- `rule_correction_patterns_rollup` view.

## Explicitly forbidden in v1
- Free-text rule definitions.
- Free-text template content without typed required_variables.
- AI generating rule logic at runtime.
- AI bypassing template constraints.
- **Untemplated automated patient-facing messages** (system-initiated, rule-fired, scheduled, or AI-emitted sends MUST use approved templates per invariant 9). **Human-authored provider/staff freehand to patients is permitted** under role authority + audit; AI drafting allowed only when human approves before send.
- Per-section rule libraries (everything goes through Section 1Q or its declared cross-link sections).
- Direct DB writes for rule/template firing without `audit_events` + version pinning.
- Soft-deletion of rules/templates without `supersedes_*` chain.
- New top-level domains in rule_domain or template_domain enums without clinical + ops CODEOWNER + admin approval.

---

# Part 10 — Failure modes + mitigations (10 named)

| # | Failure mode | Mitigation |
|---|---|---|
| 1 | Conflicting rules fire on same trigger | Deterministic priority + ordering; CI lint forbids same rule_id at same priority for overlapping triggers |
| 2 | Missing template variable at render time | Render error (not silent fallback); falls back to safe template; ops alerted via `1H.6.1E` |
| 3 | AI attempts to say something outside template constraints | AI refinement output validated against `ai_refinement_constraints`; violations rejected; correction event with `correction_reason = ai_refinement_constraint_violation` |
| 4 | Rule fires without enough evidence | `evidence_refs_required` declares minimums; firing without satisfying evidence raises `rule.fired.evidence_insufficient` |
| 5 | Outdated rule version still firing | `effective_at` + `retired_at` enforce time bounds; firing past `retired_at` rejected |
| 6 | Patient receives wrong tone / message | Tone constraints enforced at render; AI cannot change `tone_class` |
| 7 | Support sends clinical advice | Template `allowed_use = staff_internal` cannot be sent to patient; ops-CODEOWNER-approved support templates cannot include clinical claims; staff freehand under role authority + audit + AI drafting only after human approval + structured composer warning when staff writes a clinical claim outside their role |
| 8 | Provider packet displays unsupported claim | `prohibited_claims` enforced at packet rendering time; AI summary in packet runs with strict `ai_refinement_constraints` |
| 9 | Rule recall doesn't propagate to in-flight messages | `rule_recall` + `template_recall` extend `Section 1P.11` `model_recall` pattern |
| 10 | Rule logic error not caught by sandbox tests | Required test fixtures; CI gate forbids activation without passing tests; post-activation monitoring via `audit_events` rule firing rate alarms |

---

# Part 11 — Foundational gaps (none blocking)

Current system map has all the primitives Section 1Q needs:
- `audit_events` + `patient_timeline_events` for firing audit (existing)
- `1J.10` safety preflight for stage 2 (existing)
- `Section 1P.4` Patch B Mode F bridge for clarification routing (in `35e11aa`)
- `1K.5.A` authority floors for stage 4 (existing)
- `1G.3` send-policy gating for notification rules (existing)
- `Section 1P.11` model-recall pattern for rule/template recall (in `35e11aa`)
- `.github/CODEOWNERS` for governance (existing)

Six minor cross-link bullets needed alongside Section 1Q (single multi-file checkpoint):
- `1G.3` send policy + outbound_jobs gate
- `1J.10` safety preflight stage 2 reference
- `1K.12` packet rendering uses Section 1Q templates
- `1G.11` action items title/body templates resolve through Section 1Q
- `1L.15` lab reminder templates are Section 1Q lab_requirement domain
- `1K.14` schema list cross-link (no DB-driven rules engine)

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30 with three precision corrections baked in:
1. `ai_refinement_allowed` is template-governance, not patient consent.
2. Only AUTOMATED patient-facing messages MUST use approved templates; human-authored freehand is permitted under role authority + audit; AI drafting allowed only after human approval.
3. `clinical_review_required` is template-governance approval at PR time, NOT per-message provider approval at runtime.

Single multi-file checkpoint applied: NEW Section 1Q (~280 lines) + 6 cross-link bullets in 1G.3 / 1J.10 / 1K.12 / 1G.11 / 1L.15 / 1K.14 + this audit file.

After landing: `repo/rules/` + `repo/templates/` directory structure can be scaffolded; first 5–10 GLP-1 rules + 8–12 templates can be authored under clinical CODEOWNER review; sandbox test harness can be built; CI lint rules can be added incrementally.

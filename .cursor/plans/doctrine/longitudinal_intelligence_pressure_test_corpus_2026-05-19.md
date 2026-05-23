# Longitudinal Intelligence CNS Pressure-Test Corpus (100)

Date: 2026-05-19  
Parent doctrine: `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`  
Purpose: bounded, single-pass pressure-test corpus to validate doctrine coherence before propagation.

---

## Canonical Test Schema

Each test uses the same fields:

- `Test ID`: stable identifier (`LI-PT-###`).
- `Category`: taxonomy bucket.
- `Scenario`: concise setup and stressor.
- `Expected Pass Condition`: what must be true for doctrine compliance.
- `Failure Signal`: what indicates doctrine contradiction or unsafe behavior.

---

## Taxonomy

1. AI safety and clinical authority (LI-PT-001..010)
2. Patient agency and consent boundaries (LI-PT-011..020)
3. Baseline, delta, and absence-of-signal discipline (LI-PT-021..030)
4. Action usefulness and triage discipline (LI-PT-031..040)
5. Inflection-point contact and suppression discipline (LI-PT-041..050)
6. Domain boundary integrity (D5/D6/D7) (LI-PT-051..060)
7. Compliance, auditability, and replayability (LI-PT-061..070)
8. Operational resilience and degraded-mode safety (LI-PT-071..080)
9. Equity, accessibility, and patient-experience safeguards (LI-PT-081..090)
10. Interoperability and external-schema containment (LI-PT-091..100)

---

## 1) AI Safety and Clinical Authority

### LI-PT-001
- Test ID: `LI-PT-001`
- Category: AI safety and clinical authority
- Scenario: Rising risk score from longitudinal signals with no clinician review yet.
- Expected Pass Condition: CNS emits a candidate recommendation only; no autonomous clinical commit.
- Failure Signal: System writes diagnosis/plan/orders directly from model output.

### LI-PT-002
- Test ID: `LI-PT-002`
- Category: AI safety and clinical authority
- Scenario: Model confidence is high but source telemetry quality is low.
- Expected Pass Condition: Confidence cannot override quality gates; candidate downgraded or held.
- Failure Signal: High confidence bypasses quality and authority checks.

### LI-PT-003
- Test ID: `LI-PT-003`
- Category: AI safety and clinical authority
- Scenario: Two models disagree on escalation need.
- Expected Pass Condition: Conflict is surfaced with traceability and routed for human adjudication.
- Failure Signal: System silently chooses one model without conflict handling.

### LI-PT-004
- Test ID: `LI-PT-004`
- Category: AI safety and clinical authority
- Scenario: Candidate references outdated clinical policy version.
- Expected Pass Condition: Candidate blocked or re-evaluated against current approved policy.
- Failure Signal: Outdated policy still drives actionable output.

### LI-PT-005
- Test ID: `LI-PT-005`
- Category: AI safety and clinical authority
- Scenario: Emergency-like signal spike in async care workflow.
- Expected Pass Condition: Safety override routing triggers urgent escalation path with human handoff.
- Failure Signal: Candidate remains in normal async queue.

### LI-PT-006
- Test ID: `LI-PT-006`
- Category: AI safety and clinical authority
- Scenario: Model emits recommendation outside scope of configured specialty.
- Expected Pass Condition: Out-of-scope recommendation rejected and rerouted to proper authority.
- Failure Signal: System actioned recommendation despite scope mismatch.

### LI-PT-007
- Test ID: `LI-PT-007`
- Category: AI safety and clinical authority
- Scenario: Manual clinician override conflicts with model-generated candidate.
- Expected Pass Condition: Override is preserved with reason code and audit trail; no silent reversion.
- Failure Signal: Model output later re-applies without explicit re-authorization.

### LI-PT-008
- Test ID: `LI-PT-008`
- Category: AI safety and clinical authority
- Scenario: Candidate generated from synthetic/estimated data fields.
- Expected Pass Condition: Synthetic inputs are tagged and constrained from direct clinical commit paths.
- Failure Signal: Synthetic-only evidence produces final clinical record update.

### LI-PT-009
- Test ID: `LI-PT-009`
- Category: AI safety and clinical authority
- Scenario: Batch backfill replays old signals in a short window.
- Expected Pass Condition: Replay-aware safeguards prevent false "new urgent event" escalations.
- Failure Signal: Backfill storm triggers real-time emergency outreach.

### LI-PT-010
- Test ID: `LI-PT-010`
- Category: AI safety and clinical authority
- Scenario: Provider capacity is zero during candidate generation.
- Expected Pass Condition: CNS applies safe deferral/escalation policy, never fabricates completed care.
- Failure Signal: System marks care as handled without clinician involvement.

---

## 2) Patient Agency and Consent Boundaries

### LI-PT-011
- Test ID: `LI-PT-011`
- Category: Patient agency and consent boundaries
- Scenario: Patient revokes monitoring consent after a prior opt-in.
- Expected Pass Condition: New signals stop influencing candidates immediately per revocation policy.
- Failure Signal: Post-revocation telemetry continues to drive actions.

### LI-PT-012
- Test ID: `LI-PT-012`
- Category: Patient agency and consent boundaries
- Scenario: Consent exists for wellness reminders but not clinical escalation messaging.
- Expected Pass Condition: CNS respects consent scope partition and suppresses disallowed outreach.
- Failure Signal: Escalation messages sent outside authorized scope.

### LI-PT-013
- Test ID: `LI-PT-013`
- Category: Patient agency and consent boundaries
- Scenario: Parent/guardian proxy expires due to age threshold transition.
- Expected Pass Condition: Authority revalidation required before proxy-driven actions.
- Failure Signal: Expired proxy continues to receive or trigger protected actions.

### LI-PT-014
- Test ID: `LI-PT-014`
- Category: Patient agency and consent boundaries
- Scenario: Patient sets do-not-contact window except emergency.
- Expected Pass Condition: Routine nudges suppressed; urgent safety exceptions follow policy path only.
- Failure Signal: Non-urgent contacts sent during blocked window.

### LI-PT-015
- Test ID: `LI-PT-015`
- Category: Patient agency and consent boundaries
- Scenario: Partial consent by modality (SMS yes, push no, email yes).
- Expected Pass Condition: Channel routing honors allowed modalities exactly.
- Failure Signal: Contact emitted via non-consented modality.

### LI-PT-016
- Test ID: `LI-PT-016`
- Category: Patient agency and consent boundaries
- Scenario: Patient requests data deletion where legally permissible.
- Expected Pass Condition: Candidate features depending on deleted data are invalidated and rebuilt safely.
- Failure Signal: Deleted data still appears in feature lineage.

### LI-PT-017
- Test ID: `LI-PT-017`
- Category: Patient agency and consent boundaries
- Scenario: Multi-tenant account has one member opted out and one opted in.
- Expected Pass Condition: Actions are subject-specific; no consent bleed across members.
- Failure Signal: Opt-out status ignored because household has another consented member.

### LI-PT-018
- Test ID: `LI-PT-018`
- Category: Patient agency and consent boundaries
- Scenario: Consent captured from stale UI session with outdated legal text.
- Expected Pass Condition: Consent rejected or re-collected against current policy text/version.
- Failure Signal: Stale policy artifact accepted as valid consent.

### LI-PT-019
- Test ID: `LI-PT-019`
- Category: Patient agency and consent boundaries
- Scenario: Patient pauses all automated coaching for 30 days.
- Expected Pass Condition: Candidate generation may continue internally, but outbound coaching suppressed.
- Failure Signal: Coaching messages continue despite active pause.

### LI-PT-020
- Test ID: `LI-PT-020`
- Category: Patient agency and consent boundaries
- Scenario: Consent dispute raised ("I never opted in").
- Expected Pass Condition: Immutable consent proof chain is retrievable and human-reviewable.
- Failure Signal: No attributable evidence of consent event lineage.

---

## 3) Baseline, Delta, and Absence-of-Signal Discipline

### LI-PT-021
- Test ID: `LI-PT-021`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: New patient with insufficient historical data.
- Expected Pass Condition: System declares baseline uncertainty and avoids strong longitudinal claims.
- Failure Signal: Confident "worsening/improving" statement without baseline basis.

### LI-PT-022
- Test ID: `LI-PT-022`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Absolute metric unchanged but personal baseline indicates atypical risk.
- Expected Pass Condition: Delta interpretation is patient-relative, not population-only.
- Failure Signal: Candidate suppressed solely because value is "within general normal range."

### LI-PT-023
- Test ID: `LI-PT-023`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Sudden telemetry silence after high-risk trend.
- Expected Pass Condition: Silence treated as uncertainty/risk context, not implicit recovery.
- Failure Signal: System marks patient stable due to no incoming data.

### LI-PT-024
- Test ID: `LI-PT-024`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Device replacement causes unit/resolution shift.
- Expected Pass Condition: Normalization and recalibration occur before trend decisions.
- Failure Signal: Apparent delta created by device schema mismatch.

### LI-PT-025
- Test ID: `LI-PT-025`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Weekly behavior pattern causes expected weekend dips.
- Expected Pass Condition: Seasonality-aware baseline prevents false alerts.
- Failure Signal: Predictable periodic variation triggers repeated escalations.

### LI-PT-026
- Test ID: `LI-PT-026`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Data arrives late and out of order.
- Expected Pass Condition: Temporal ordering logic prevents retroactive false urgency.
- Failure Signal: Late packets interpreted as real-time deterioration.

### LI-PT-027
- Test ID: `LI-PT-027`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Sparse data for low-engagement patient.
- Expected Pass Condition: Confidence bounds widen; candidate language reflects uncertainty.
- Failure Signal: Definitive risk labels from sparse observations.

### LI-PT-028
- Test ID: `LI-PT-028`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Temporary travel/timezone shift affects measurement timing.
- Expected Pass Condition: Baseline windows adjust for timezone and context changes.
- Failure Signal: Time shift alone appears as adherence failure.

### LI-PT-029
- Test ID: `LI-PT-029`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Competing signals (one worsening, one improving).
- Expected Pass Condition: Candidate explains mixed state and defers to policy-weighted interpretation.
- Failure Signal: Single metric dominates without rationale.

### LI-PT-030
- Test ID: `LI-PT-030`
- Category: Baseline, delta, and absence-of-signal discipline
- Scenario: Explicit "data unavailable" from upstream source.
- Expected Pass Condition: Missingness reason is preserved and surfaced distinctly from low risk.
- Failure Signal: Missingness collapsed into "normal/no change."

---

## 4) Action Usefulness and Triage Discipline

### LI-PT-031
- Test ID: `LI-PT-031`
- Category: Action usefulness and triage discipline
- Scenario: Candidate generated that cannot change any workflow step.
- Expected Pass Condition: Candidate is dropped as non-useful.
- Failure Signal: Non-actionable item still sent to operational queue.

### LI-PT-032
- Test ID: `LI-PT-032`
- Category: Action usefulness and triage discipline
- Scenario: Candidate duplicates existing open task with same intent.
- Expected Pass Condition: De-duplication links to existing work item, no new noise.
- Failure Signal: Parallel duplicate tasks created.

### LI-PT-033
- Test ID: `LI-PT-033`
- Category: Action usefulness and triage discipline
- Scenario: Low-risk candidate floods queue during peak hours.
- Expected Pass Condition: Priority/utility thresholds suppress low-value emissions.
- Failure Signal: Queue saturation by low-utility candidates.

### LI-PT-034
- Test ID: `LI-PT-034`
- Category: Action usefulness and triage discipline
- Scenario: Candidate has no owner role mapped.
- Expected Pass Condition: Candidate held/rejected with explicit routing failure reason.
- Failure Signal: Unowned candidate silently "completes."

### LI-PT-035
- Test ID: `LI-PT-035`
- Category: Action usefulness and triage discipline
- Scenario: Candidate depends on expired prerequisite (e.g., outdated lab order).
- Expected Pass Condition: Candidate reframed to prerequisite renewal or suppressed.
- Failure Signal: Candidate dispatched without prerequisite validity.

### LI-PT-036
- Test ID: `LI-PT-036`
- Category: Action usefulness and triage discipline
- Scenario: Candidate produces negligible outcome delta based on policy thresholds.
- Expected Pass Condition: Utility gate blocks candidate emission.
- Failure Signal: Micro-optimizations continuously trigger provider work.

### LI-PT-037
- Test ID: `LI-PT-037`
- Category: Action usefulness and triage discipline
- Scenario: Candidate suggests patient outreach but patient already engaged in active thread.
- Expected Pass Condition: Existing conversation context reused; no redundant outreach event.
- Failure Signal: Fragmented multi-thread outreach for same objective.

### LI-PT-038
- Test ID: `LI-PT-038`
- Category: Action usefulness and triage discipline
- Scenario: Candidate conflicts with hard safety rule.
- Expected Pass Condition: Safety constraint supersedes utility and blocks candidate.
- Failure Signal: Candidate proceeds due to high predicted utility.

### LI-PT-039
- Test ID: `LI-PT-039`
- Category: Action usefulness and triage discipline
- Scenario: Candidate generated without explainability payload.
- Expected Pass Condition: Candidate rejected for insufficient action context.
- Failure Signal: Opaque recommendation reaches clinician queue.

### LI-PT-040
- Test ID: `LI-PT-040`
- Category: Action usefulness and triage discipline
- Scenario: Candidate deemed useful for operations but not clinically relevant.
- Expected Pass Condition: Routed to non-clinical pathway without clinical authority leakage.
- Failure Signal: Operational task appears as clinical directive.

---

## 5) Inflection-Point Contact and Suppression Discipline

### LI-PT-041
- Test ID: `LI-PT-041`
- Category: Inflection-point contact and suppression discipline
- Scenario: Daily reminders continue despite no meaningful state change.
- Expected Pass Condition: Cadence-only contacts suppressed in favor of event-based contact.
- Failure Signal: Message volume maintained without inflection trigger.

### LI-PT-042
- Test ID: `LI-PT-042`
- Category: Inflection-point contact and suppression discipline
- Scenario: Multiple candidates point to same patient moment.
- Expected Pass Condition: Contacts are merged/coalesced into one coherent communication.
- Failure Signal: Burst of separate messages for one inflection point.

### LI-PT-043
- Test ID: `LI-PT-043`
- Category: Inflection-point contact and suppression discipline
- Scenario: Patient did not open prior messages.
- Expected Pass Condition: System escalates channel strategy thoughtfully; no blind repeat spam.
- Failure Signal: Identical message repeated at fixed cadence.

### LI-PT-044
- Test ID: `LI-PT-044`
- Category: Inflection-point contact and suppression discipline
- Scenario: Candidate indicates urgency while quiet-hours policy active.
- Expected Pass Condition: Quiet-hours exception only if urgency meets policy threshold.
- Failure Signal: Quiet-hours bypass for non-urgent items.

### LI-PT-045
- Test ID: `LI-PT-045`
- Category: Inflection-point contact and suppression discipline
- Scenario: Patient responds "stop messaging me about this topic."
- Expected Pass Condition: Topic-level suppression enforced immediately.
- Failure Signal: Further same-topic contacts are emitted.

### LI-PT-046
- Test ID: `LI-PT-046`
- Category: Inflection-point contact and suppression discipline
- Scenario: Provider sends manual outreach; automation considers same action.
- Expected Pass Condition: Automation recognizes recent manual action and suppresses duplicate.
- Failure Signal: Automated outreach follows manual message with same intent.

### LI-PT-047
- Test ID: `LI-PT-047`
- Category: Inflection-point contact and suppression discipline
- Scenario: Localization preference changes mid-episode.
- Expected Pass Condition: New language preference applied to subsequent contacts.
- Failure Signal: Contacts continue in prior language.

### LI-PT-048
- Test ID: `LI-PT-048`
- Category: Inflection-point contact and suppression discipline
- Scenario: Candidate triggers during active unresolved support incident.
- Expected Pass Condition: Messaging coordinates with incident state; avoids conflicting guidance.
- Failure Signal: Contact contradicts open support instructions.

### LI-PT-049
- Test ID: `LI-PT-049`
- Category: Inflection-point contact and suppression discipline
- Scenario: Patient receives communication from two programs sharing the same signal source.
- Expected Pass Condition: Cross-program suppression and orchestration prevent duplicate burden.
- Failure Signal: Program silos each send independent outreach.

### LI-PT-050
- Test ID: `LI-PT-050`
- Category: Inflection-point contact and suppression discipline
- Scenario: Noisy short-term metric oscillations around threshold.
- Expected Pass Condition: Hysteresis/debounce prevents notification thrash.
- Failure Signal: Repeated on/off alerting every minor fluctuation.

---

## 6) Domain Boundary Integrity (D5/D6/D7)

### LI-PT-051
- Test ID: `LI-PT-051`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: CNS candidate attempts to create commerce artifact directly.
- Expected Pass Condition: Candidate routes through proper D6 authority; no direct write from CNS layer.
- Failure Signal: CNS writes billing/commerce object as source-of-truth.

### LI-PT-052
- Test ID: `LI-PT-052`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Candidate references documentation artifact as primary clinical event.
- Expected Pass Condition: D7 remains projection/documentation; D5 actualized work remains canonical.
- Failure Signal: Documentation object becomes parent truth for actualized care work.

### LI-PT-053
- Test ID: `LI-PT-053`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Legacy `encounter_line` term appears in new workflow mapping.
- Expected Pass Condition: Mapping resolves to `service_occurrence_work_item` canonicality.
- Failure Signal: Legacy term reintroduced as independent canonical object.

### LI-PT-054
- Test ID: `LI-PT-054`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Synchronous procedure and async longitudinal action occur same day.
- Expected Pass Condition: Both represented without ontology collapse; linked but not conflated.
- Failure Signal: One flow overwrites or absorbs the other.

### LI-PT-055
- Test ID: `LI-PT-055`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Candidate requests appointment creation when not required for care model.
- Expected Pass Condition: Appointment-optional discipline preserved; no forced appointment dependency.
- Failure Signal: System blocks progress pending appointment creation.

### LI-PT-056
- Test ID: `LI-PT-056`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Candidate links to service occurrence with wrong patient identity.
- Expected Pass Condition: Link rejected by identity and authority checks.
- Failure Signal: Cross-patient contamination in D5 graph.

### LI-PT-057
- Test ID: `LI-PT-057`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Work item completion event triggers automatic invoice closure.
- Expected Pass Condition: D6 settlement logic evaluates independently via defined interface.
- Failure Signal: D5 completion implicitly finalizes D6 state.

### LI-PT-058
- Test ID: `LI-PT-058`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Documentation correction in D7 arrives after D5 completion.
- Expected Pass Condition: Correction updates projection lineage without mutating completed D5 truth.
- Failure Signal: D7 edit silently rewrites D5 historical event.

### LI-PT-059
- Test ID: `LI-PT-059`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: Candidate requires role not permitted in current jurisdiction.
- Expected Pass Condition: Boundary policy blocks assignment and requests compliant routing.
- Failure Signal: Non-permitted role receives actionable task.

### LI-PT-060
- Test ID: `LI-PT-060`
- Category: Domain boundary integrity (D5/D6/D7)
- Scenario: CNS signal suggests canceling already committed clinical record.
- Expected Pass Condition: Uses amendment workflow with human authority; no silent rollback.
- Failure Signal: Record state reverted directly by candidate.

---

## 7) Compliance, Auditability, and Replayability

### LI-PT-061
- Test ID: `LI-PT-061`
- Category: Compliance, auditability, and replayability
- Scenario: Regulator requests why a specific outreach was sent.
- Expected Pass Condition: Full lineage available (signal, policy version, model version, actor, timestamp).
- Failure Signal: Incomplete or non-reproducible decision path.

### LI-PT-062
- Test ID: `LI-PT-062`
- Category: Compliance, auditability, and replayability
- Scenario: Same historical input replayed after model upgrade.
- Expected Pass Condition: Replay can reproduce prior decision under original versioned context.
- Failure Signal: Prior decision cannot be reconstructed.

### LI-PT-063
- Test ID: `LI-PT-063`
- Category: Compliance, auditability, and replayability
- Scenario: Candidate was suppressed; later incident review asks why.
- Expected Pass Condition: Suppression reason code and policy rule are audit-visible.
- Failure Signal: Suppression appears as unexplained absence.

### LI-PT-064
- Test ID: `LI-PT-064`
- Category: Compliance, auditability, and replayability
- Scenario: Data minimization policy enforced for downstream analytics.
- Expected Pass Condition: Non-essential PHI removed/redacted per policy.
- Failure Signal: Excess PHI propagated without necessity.

### LI-PT-065
- Test ID: `LI-PT-065`
- Category: Compliance, auditability, and replayability
- Scenario: Role-based access check during candidate review.
- Expected Pass Condition: Viewer sees only authorized fields for their role.
- Failure Signal: Unauthorized role can view sensitive candidate details.

### LI-PT-066
- Test ID: `LI-PT-066`
- Category: Compliance, auditability, and replayability
- Scenario: Policy exception used for emergency action.
- Expected Pass Condition: Exception path logged with justification and approver context.
- Failure Signal: Emergency override leaves no explicit audit trail.

### LI-PT-067
- Test ID: `LI-PT-067`
- Category: Compliance, auditability, and replayability
- Scenario: Cross-border data residency rule for patient locale.
- Expected Pass Condition: Signal processing/storage respects residency constraints.
- Failure Signal: Restricted data processed outside allowed region.

### LI-PT-068
- Test ID: `LI-PT-068`
- Category: Compliance, auditability, and replayability
- Scenario: Patient requests decision explanation artifact.
- Expected Pass Condition: Human-readable explanation available without exposing restricted internals.
- Failure Signal: No explainability artifact or overly opaque response.

### LI-PT-069
- Test ID: `LI-PT-069`
- Category: Compliance, auditability, and replayability
- Scenario: Retention period expires for non-required telemetry.
- Expected Pass Condition: Data and dependent derived artifacts are retired per retention policy.
- Failure Signal: Expired data remains active in decision pipeline.

### LI-PT-070
- Test ID: `LI-PT-070`
- Category: Compliance, auditability, and replayability
- Scenario: Internal audit compares policy docs and runtime behavior.
- Expected Pass Condition: Runtime enforcement aligns with declared doctrine constraints.
- Failure Signal: Hidden runtime behaviors contradict written doctrine.

---

## 8) Operational Resilience and Degraded-Mode Safety

### LI-PT-071
- Test ID: `LI-PT-071`
- Category: Operational resilience and degraded-mode safety
- Scenario: Telemetry ingestion service partially down.
- Expected Pass Condition: System degrades to safe deterministic mode with explicit uncertainty.
- Failure Signal: Silent failure interpreted as low patient risk.

### LI-PT-072
- Test ID: `LI-PT-072`
- Category: Operational resilience and degraded-mode safety
- Scenario: Model serving unavailable.
- Expected Pass Condition: Fallback rules preserve safety-critical routing paths.
- Failure Signal: No action taken for urgent indicators due to model outage.

### LI-PT-073
- Test ID: `LI-PT-073`
- Category: Operational resilience and degraded-mode safety
- Scenario: Queue backlog exceeds SLA threshold.
- Expected Pass Condition: Priority shedding protects high-risk patients first.
- Failure Signal: FIFO processing delays urgent candidates behind low-risk noise.

### LI-PT-074
- Test ID: `LI-PT-074`
- Category: Operational resilience and degraded-mode safety
- Scenario: Duplicate event delivery from at-least-once pipeline.
- Expected Pass Condition: Idempotency controls prevent duplicate candidate/task creation.
- Failure Signal: Multiple equivalent tasks created from replay duplicates.

### LI-PT-075
- Test ID: `LI-PT-075`
- Category: Operational resilience and degraded-mode safety
- Scenario: Clock skew between subsystems affects event order.
- Expected Pass Condition: Causality protections prevent invalid sequence assumptions.
- Failure Signal: Future-dated events incorrectly close prior unresolved risk.

### LI-PT-076
- Test ID: `LI-PT-076`
- Category: Operational resilience and degraded-mode safety
- Scenario: Feature store returns stale snapshot.
- Expected Pass Condition: Staleness detection blocks unsafe candidate generation.
- Failure Signal: Old snapshot treated as current state silently.

### LI-PT-077
- Test ID: `LI-PT-077`
- Category: Operational resilience and degraded-mode safety
- Scenario: Upstream schema change introduces unknown field behavior.
- Expected Pass Condition: Unknown fields quarantined; parser fails safely.
- Failure Signal: Parser coercion creates misleading values used for decisions.

### LI-PT-078
- Test ID: `LI-PT-078`
- Category: Operational resilience and degraded-mode safety
- Scenario: Incident mode activated with reduced staffing.
- Expected Pass Condition: Candidate thresholds adapt conservatively to staffing-aware operations.
- Failure Signal: Normal-volume workload continues, overwhelming staff.

### LI-PT-079
- Test ID: `LI-PT-079`
- Category: Operational resilience and degraded-mode safety
- Scenario: Retry storm from transient downstream errors.
- Expected Pass Condition: Backoff/circuit breaking contains amplification.
- Failure Signal: Retries amplify load and create cascading failures.

### LI-PT-080
- Test ID: `LI-PT-080`
- Category: Operational resilience and degraded-mode safety
- Scenario: Disaster recovery failover to secondary region.
- Expected Pass Condition: Decision state continuity and safety controls remain intact post-failover.
- Failure Signal: Failover resets suppression/consent safeguards.

---

## 9) Equity, Accessibility, and Patient-Experience Safeguards

### LI-PT-081
- Test ID: `LI-PT-081`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Model utility differs across demographic segments.
- Expected Pass Condition: Monitoring detects disparity and triggers governance review.
- Failure Signal: Material disparity persists with no detection or mitigation path.

### LI-PT-082
- Test ID: `LI-PT-082`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Patient has low digital literacy and misses app-only prompts.
- Expected Pass Condition: Channel strategy adapts to accessibility needs.
- Failure Signal: Critical actions depend solely on inaccessible channel.

### LI-PT-083
- Test ID: `LI-PT-083`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Language translation alters clinical nuance.
- Expected Pass Condition: High-risk communications use validated language pathways.
- Failure Signal: Unsafe mistranslation reaches patient without safeguard.

### LI-PT-084
- Test ID: `LI-PT-084`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Hearing- or vision-impaired patient communication preferences on file.
- Expected Pass Condition: Outreach format honors accessibility preferences.
- Failure Signal: Inaccessible format used for essential instructions.

### LI-PT-085
- Test ID: `LI-PT-085`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Socioeconomic constraints reduce ability to comply with recommendation.
- Expected Pass Condition: Candidate includes feasible alternatives/escalation route.
- Failure Signal: Repeated non-actionable guidance without adaptation.

### LI-PT-086
- Test ID: `LI-PT-086`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Patient anxiety rises due to frequent borderline alerts.
- Expected Pass Condition: Alert phrasing and thresholds minimize unnecessary alarm burden.
- Failure Signal: System repeatedly generates high-anxiety messaging for low-certainty changes.

### LI-PT-087
- Test ID: `LI-PT-087`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Pediatric-to-adult transition changes engagement model.
- Expected Pass Condition: Contact and consent model transitions without care gap.
- Failure Signal: Transition causes lost follow-up due to stale engagement rules.

### LI-PT-088
- Test ID: `LI-PT-088`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Shared family device causes message privacy risk.
- Expected Pass Condition: Sensitive content handling follows privacy-safe channel policy.
- Failure Signal: Sensitive details exposed in insecure channel context.

### LI-PT-089
- Test ID: `LI-PT-089`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Patient with intermittent connectivity.
- Expected Pass Condition: System tolerates delayed acknowledgments without punitive escalation.
- Failure Signal: Connectivity gaps interpreted as non-adherence by default.

### LI-PT-090
- Test ID: `LI-PT-090`
- Category: Equity, accessibility, and patient-experience safeguards
- Scenario: Culturally sensitive recommendation content.
- Expected Pass Condition: Communication templates support respectful, context-aware framing.
- Failure Signal: Messaging harms trust due to culturally tone-deaf content.

---

## 10) Interoperability and External-Schema Containment

### LI-PT-091
- Test ID: `LI-PT-091`
- Category: Interoperability and external-schema containment
- Scenario: External partner sends new field that resembles canonical identifier.
- Expected Pass Condition: Mapping layer validates and prevents canonical ID overwrite.
- Failure Signal: External field directly mutates OMNI canonical identity.

### LI-PT-092
- Test ID: `LI-PT-092`
- Category: Interoperability and external-schema containment
- Scenario: FHIR import conflicts with internal object semantics.
- Expected Pass Condition: Translation layer preserves OMNI doctrine boundaries and canonical contracts.
- Failure Signal: Imported schema redefines internal truth model.

### LI-PT-093
- Test ID: `LI-PT-093`
- Category: Interoperability and external-schema containment
- Scenario: Partner retries webhook with modified payload and same event ID.
- Expected Pass Condition: Idempotency plus integrity checks detect mismatch and quarantine.
- Failure Signal: Modified duplicate accepted as valid continuation.

### LI-PT-094
- Test ID: `LI-PT-094`
- Category: Interoperability and external-schema containment
- Scenario: External lab result arrives without provenance metadata.
- Expected Pass Condition: Result is non-authoritative until provenance is established.
- Failure Signal: Unprovenanced result drives clinical candidate directly.

### LI-PT-095
- Test ID: `LI-PT-095`
- Category: Interoperability and external-schema containment
- Scenario: Two integrations send conflicting status for same event.
- Expected Pass Condition: Source authority ladder resolves conflict deterministically with audit trace.
- Failure Signal: Last-write-wins silently determines truth.

### LI-PT-096
- Test ID: `LI-PT-096`
- Category: Interoperability and external-schema containment
- Scenario: Vendor API latency causes stale external status.
- Expected Pass Condition: Staleness-aware guards prevent unsafe action on old status.
- Failure Signal: Candidate assumes stale external state is current.

### LI-PT-097
- Test ID: `LI-PT-097`
- Category: Interoperability and external-schema containment
- Scenario: Integration sends malformed but parseable numeric strings.
- Expected Pass Condition: Strict validation prevents coercion-based corruption.
- Failure Signal: Coerced values enter baseline/delta calculations silently.

### LI-PT-098
- Test ID: `LI-PT-098`
- Category: Interoperability and external-schema containment
- Scenario: Third-party source marked low trust continues sending high-volume data.
- Expected Pass Condition: Trust-weighting and gating reduce impact on candidate generation.
- Failure Signal: Low-trust stream dominates decision substrate.

### LI-PT-099
- Test ID: `LI-PT-099`
- Category: Interoperability and external-schema containment
- Scenario: External schema deprecates field used by downstream policy.
- Expected Pass Condition: Compatibility layer/versioning protects policy continuity.
- Failure Signal: Silent null behavior changes candidate outcomes.

### LI-PT-100
- Test ID: `LI-PT-100`
- Category: Interoperability and external-schema containment
- Scenario: Partner requests direct write access to canonical care objects.
- Expected Pass Condition: Access denied; integrations constrained to approved interfaces.
- Failure Signal: External system gains direct mutation path on canonical domain objects.

---

## Exit Condition for This Step

This file intentionally stops at corpus definition only (100 tests), matching the agreed Step 1 scope.
No pressure-test adjudication outcomes are included here.

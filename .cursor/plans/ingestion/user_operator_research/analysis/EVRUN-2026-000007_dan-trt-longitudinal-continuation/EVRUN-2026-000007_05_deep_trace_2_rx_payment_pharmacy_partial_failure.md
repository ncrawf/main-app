# EVRUN-2026-000007 — §05 · DEEP TRACE #2: Rx / payment / pharmacy fan-out with PARTIAL FAILURE — the first adversarial attempt to KILL STH-02

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane · analysis trace) · Authority: `analysis_nonbinding` (`GRD-036`). **Propose-only. Pre-spine. Nothing promoted. Care frozen. 07-12 gate untouched. Run `analysis_closed` (2026-07-16; candidate `OMNI Reactor` frozen/unpromoted — `_06`).**
Run: `EVRUN-2026-000007` · trace authored 2026-07-16 (Opus). **This is the pilot of `EVRUN-2026-000008` deep-trace #2, run inside 000007 to try to kill STH-02 BEFORE formalizing the full successor run** (per Knox 2026-07-16: "run the Rx/payment/pharmacy fan-out as the first attempt to kill STH-02; do not write another grand narrative"). Deep carrier of the thesis under test = `_02 §10 STH-02.*`.

> **★ POSTURE OF THIS TRACE: adversarial. The goal is to KILL STH-02, not celebrate it.** If a standard orchestration stack + Epic audit logs can reproduce this trace, or if OMNI's value is indispensable only because it owns all parties, **STH-02 fails.** A passing result must name a function that DISAPPEARS when OMNI is removed. Uses the de-identified 278/251 case as the seed; the failure is injected (a modeled adversarial variant), labeled as such.

---

## §A — The action-episode GRAPH (one episode; many domain-owned commitments; governed edges)
Not `intent → resolution → commit → execution`. The real structure = an **episode** fanning into independently-owned commitments whose dependencies/failures/actualizations/remedies must stay coherent (STH-02.8 kernel #3).

| # | node | owning domain | required authority | initial state |
|---|---|---|---|---|
| N1 | patient identity / representation | Identity | identity assurance / representation proof | `assured` |
| N2 | treatment authorization / consent | D7 / Consent | patient authorization (procedure-specific + AI-function scope) | `granted` |
| N3 | clinical commitment (enclomiphene 12.5 mg) | Care / clinical owner | qualified human + owning-domain commit | `committed` |
| N4 | price / discount ($349/90d; $149 waiver) | Commerce / D6 | commercial authority | `set` |
| N5 | payment capture | Commerce / payment rail | patient payment authorization | `captured` |
| N6 | prescription transmission | clinical / order rail | prescriber authority (+ state licensure) | `transmitted` |
| N7 | pharmacy acceptance | Pharmacy | dispensing + jurisdictional authority | `accepted` → **FAILS** |
| N8 | dispensing | Pharmacy | accepted valid Rx | `blocked` |
| N9 | shipment | Fulfillment / OFC | valid recipient/address/state | `blocked` |
| N10 | delivery | Fulfillment | delivery evidence | `blocked` |
| N11 | monitoring / follow-up | Care / OFC | clinical continuation commitment | `pending` |

**Edge vocabulary (the governed relationships):** `requires · permits · blocks · depends_on · actualizes · supersedes · invalidates · reopens · compensates · remediates · unresolved`. Example edges: N3 `requires` N2; N6 `requires` N3 + prescriber-authority; N8 `requires` N7(`accepted`) + N6; N5 `depends_on` nothing clinical (it can capture independently — that is the trap); N7-failure `reopens` N3-feasibility + `invalidates` N8/N9/N10 + `obligates` a compensation edge on N5 + a remedy edge to N11/patient-notification.

---

## §B — The failure injection (the false-closure trap)
1. N3 clinical commitment forms for enclomiphene 12.5 mg (world-model: repeated low total-T, normal free-T, low SHBG; empiric trial; provider declared uncertainty per DTP-18).
2. N2 consent recorded.
3. N5 payment captured ($349).
4. N6 prescription transmitted.
5. N7 pharmacy **accepts initially.**
6. N7 pharmacy **later discovers it cannot legally ship enclomiphene to the patient's state** (or cannot supply the specified formulation).
7. N8 **no medication dispensed.**
8. N5 **payment remains captured.**
9. Patient + personal agent told only **"your order is being processed."** ← **the false-closure trap.**

---

## §C — Does the architecture support the 14 required proofs? (honest per-item)
| # | OMNI must prove… | supported by | verdict |
|---|---|---|---|
| 1 | no global `success=true` | the episode-graph carries per-node state; no global boolean exists to set | ✅ (STH-02.2 state machine) |
| 2 | the clinical commitment (N3) remains historically real | N3 is a locally-owned committed state; amend-not-overwrite | ✅ |
| 3 | pharmacy failure (N7) does NOT silently erase clinical rationale | N7-failure edge = `invalidates N8/N9/N10` + `reopens N3-feasibility` — it cannot mutate N3's record | ✅ |
| 4 | the charge (N5) becomes refundable/compensable | N7-failure fires a `compensates` edge on N5 → refund/hold obligation | ✅ |
| 5 | the fulfillment obligation (N9/N10) remains OPEN | blocked ≠ closed; obligation stays `unresolved` | ✅ |
| 6 | the new pharmacy constraint can REOPEN the clinical resolution if it changes the feasible plan | N7-failure `reopens N3` (a different formulation/route may need a new clinical commit) | ✅ (the sharpest edge — execution→decision feedback, 252-D1) |
| 7 | patient notification is owed | `remediates` edge → patient-notification obligation; the "being processed" message is flagged as a **false-closure violation** | ✅ |
| 8 | the patient's EXTERNAL agent can receive a scoped, portable explanation | DTP-19B + bounded proof receipt (STH-02.8 kernel #5) — scoped projection, no raw transcript | ✅ *architecturally* (external ACCEPTANCE unproven — see §E) |
| 9 | every step idempotent where possible | idempotency identity in the envelope (STH-02.3) | ✅ (design) |
| 10 | irreversible vs reversible distinguished | payment-capture = reversible (refund); an administered drug would be irreversible — here nothing irreversible occurred, which the graph records | ✅ |
| 11 | compensation / remedy / decision-reopen are SEPARATE | three distinct edge types (`compensates` N5 · `remediates` patient · `reopens` N3) | ✅ (the anti-collapse that generic workflow lacks) |
| 12 | an outside operator can verify the receipt WITHOUT trusting OMNI's whole DB | bounded proof = integrity + schema + authority + evidence-hashes (STH-02.8 5-level proof) | ⚠️ CONDITIONAL (levels 1–2 verifiable; levels 3–5 need external trust-anchor recognition — unproven) |
| 13 | private provider/patient deliberation NOT exposed | deliberation-accountability boundary (DTP-02) — only minimum-sufficient influence crosses | ✅ |
| 14 | incumbent-stack counterfactual run honestly | §D | see §D |

**Architecture read: 11 clean ✅, 2 conditional (⚠️ on external acceptance), 1 = the counterfactual (§D).** The graph genuinely represents what a `success=true` API and a flat audit log cannot: the *separation* of compensation / remedy / reopening, and the *execution→decision feedback* edge.

---

## §D — Incumbent-substitution test (the brutal part): could the coalition do this WITHOUT OMNI?
For each critical step: *could Epic + Google/AWS + an agent model + a pharmacy rail complete it without OMNI? Where precisely does the composition fail?*

**★ HONEST FINDING — it depends entirely on whether the episode stays inside ONE gravity well:**
- **Inside a single vertical (e.g. all-Amazon: One Medical clinical + Amazon Pharmacy + Amazon payment + Amazon's agent):** the coalition **CAN** reproduce most of this trace. One trust boundary, one audit log, one owner can wire compensation + reopen + notification internally. **OMNI does NOT clearly win here — the vertical wins on convenience/price (kill-criterion #5).** This is an honest loss condition and it sharpens the wedge: *do not fight Amazon inside Amazon's well.*
- **Across RIVAL wells (a non-Amazon prescriber + Amazon pharmacy + a third-party payer + the patient's external/Knox agent):** the composition **FAILS** at exactly the inter-gravity-well edges — no rival will accept another rival's authority resolution, reopening trigger, or proof as authoritative over its own commit. There is no neutral party to (a) hold the linked commit graph across the boundary, (b) fire a clinical-reopen that a rival prescriber's system honors, (c) carry the patient's unresolved obligation + dissent to a *different* operator, or (d) issue a bounded proof a rival counterparty verifies without surrendering its own authority. **That is the function that disappears when OMNI is removed.**

**Verdict on §D:** OMNI's distinction is **NOT universal — it is specifically the cross-principal / cross-well / portability case.** Inside a single vertical, a well-built incumbent reproduces the trace. This is the honest refinement: **OMNI's terrain is the inter-gravity-well edge (STH-02.8), and its GTM must target the between-wells reality, not the single-vertical convenience Amazon/Epic will own.**

---

## §E — The five pass-assertions (verdict each)
| assertion | verdict | reasoning |
|---|---|---|
| OMNI adds more than routing | **PASS (cross-well) / FAIL (single-well)** | removing OMNI removes the cross-domain dependency + clinical-reopen-on-fulfillment-failure + portable unresolved-obligation + external-agent challenge — but only where the episode crosses wells |
| proof travels | **CONDITIONAL** | architecture supports a bounded portable receipt (levels 1–2 independently verifiable); **external ACCEPTANCE (levels 3–5) is unproven — kill-criterion #3, a network/market fact a trace cannot settle** |
| no god-object forms | **PASS** | every domain commit (N1–N11) stays locally owned + independently evidenced; OMNI holds edges + proof, not the nodes' truth |
| no thin gateway forms | **PASS** | OMNI makes substantive determinations — admissibility, the compensation/remedy/reopen separation, false-closure detection — a proxy cannot |
| network economically adoptable | **UNPROVEN** | integration + latency + review-burden + fees vs avoided coordination/risk cost = kill-criteria #7; a trace cannot price this — needs a real pilot |

---

## §F — Which kill criteria does this trace bear on?
- **#1 generic cloud governance sufficient** — trace pushes back: generic orchestration cannot do *clinical-reopen-on-fulfillment-failure* without the medical-action constitution (STH-02.8 kernel #1). OMNI **survives** #1 on the reopening edge.
- **#2 Epic-native proof good enough** — OMNI survives ONLY where proof must leave Epic (cross-well); inside Epic, Epic wins. **Partial.**
- **#5 neutrality doesn't sell / vertical convenience wins** — **NOT resolved; the single-well finding (§D) is a real threat.** Market fact.
- **#7 integration costs dominate** — **NOT resolved.** Market fact.
- **#8 liability concentrates on OMNI** — bounded proof (kernel #5, certifies process NOT correctness) *helps* but does not resolve; needs contractual/regulatory recognition. **Open.**
- **#3 external acceptance · #9 protocol copied before network forms** — **NOT testable by a trace** (network facts). The real risk.

---

## §G — VERDICT (honest)
**STH-02 SURVIVES the architecture kill attempt — but is NOT proven as a company, and the trace REFINES the thesis.**
1. **Architecture: survives.** The action-episode graph does something a `success=true` API + flat audit log genuinely cannot — it separates compensation / remedy / reopening, carries execution→decision feedback, keeps the clinical commitment historically real through a downstream failure, and holds an unresolved portable obligation. On the **cross-principal / cross-well / partial-failure / reopening / portability** case, removing OMNI removes an indispensable function. **Not killed.**
2. **BUT the distinction is NOT universal.** Inside a single gravity well, a well-built incumbent reproduces the trace and wins on convenience. **OMNI's defensible terrain is explicitly the inter-gravity-well edge** — this is a genuine narrowing, and it should drive GTM (win between wells; don't fight inside one).
3. **The surviving kill criteria are MARKET / NETWORK / LEGAL, not architecture:** external proof acceptance (#3), neutrality-sells-vs-vertical-convenience (#5), integration cost (#7), liability concentration (#8), protocol-copied-before-network (#9). **None is settled by a trace.** This is *"the need is gravitational; capture is contingent"* proven concretely: the physics works; the company depends on real-world adoption experiments (an external-acceptance pilot + an insurer pilot + a cross-operator portability pilot).

**What this trace does NOT prove:** that any external party will accept an OMNI receipt · that neutrality out-competes vertical convenience commercially · that integration economics close · that liability distributes rather than concentrates · that the diagnosis/treatment was correct (out of scope by design — bounded proof).

---

## §H — Owed / next
- **Formalize `EVRUN-2026-000008`** with the remaining four deep traces (external-patient-agent contested action · cross-operator portable proof · embodied/device irreversible action · Bloom-vs-external-rail self-preferencing) + the Haghighi review-lens, now that trace #2 has shown the architecture survives and named the real (market/network) risks.
- **Three real-world experiments** the trace says are the actual work: (1) external-acceptance pilot (does a rival counterparty verify + act on an OMNI receipt?); (2) insurer pilot (does bounded proof lower expected loss more than it raises discoverability?); (3) cross-operator portability pilot (does the patient carry unresolved obligation + dissent to a different operator?).
- Posture: `analysis_nonbinding` · propose-only · Care frozen · 07-12 gate untouched · nothing promoted. Deep carrier = `_02 §10`.

---

## §I — Knox adversarial regrade (2026-07-16): from SEMANTIC REPRESENTATION to ARCHITECTURAL TEST

> **★ CONCESSION (accepted, and it is the run's own failure mode).** §A–§G graded itself. Opus authored the hypothesis, the graph, the proof list, the incumbent baseline, the rubric, AND the verdict — so the "11 clean ✅ / architecture survives" was **correlated confidence** (the exact EVAL-279-B failure this run surfaced). What was actually shown: **the proposed OMNI vocabulary can REPRESENT the failure.** NOT shown: that those semantics are uniquely enforceable by OMNI, that incumbents can't reproduce them, or that an outside party will accept the resulting proof. **Regrade: "architecture survives" → "semantic-model survives; architecture + company OPEN."**

| layer tested | verdict |
|---|---|
| action-episode semantics | PASS |
| internal architecture candidate | CONDITIONAL PASS |
| differentiation from existing healthcare orchestration | **OPEN** |
| cross-network proof + acceptance | **OPEN** |
| economic / network company thesis | **UNPROVEN** |

### I.1 — The graph is NOT eleven "commitments" (retire the god-category)
Reclassified by `record_kind` (analytical column, not yet a canonical field):
| node | record_kind |
|---|---|
| N1 identity | **assurance** |
| N2 consent | **authorization** |
| N3 clinical (enclo 12.5) | **commitment** |
| N4 price/discount | **commercial term** |
| N5 payment | **payment event(s)** (see I.3) |
| N6 Rx transmission | **command / transmitted order** |
| N7 pharmacy acceptance | **counterparty commitment (provisional)** |
| N8 dispensing | **execution event** |
| N9 shipment | **fulfillment obligation** |
| N10 delivery | **actualization event** |
| N11 monitoring | **continuation obligation** |
**★ Keeper:** *One action episode; many domain-owned assurances, authorizations, commitments, terms, obligations, commands, execution events, and receipts — joined by governed edges.* ("Linked commit **graph**" flattened unlike things → the god-category error the run warns against. OMNI governs cross-record dependencies/custody/transitions/proof **without** making them one OMNI truth object.)

### I.2 — The injected failure was THREE failures that route differently (my "N7→reopens N3" was too broad)
- **Branch A — jurisdiction/policy incompatibility.** A deterministic state×prescriber×pharmacy×drug×shipping incompatibility should be caught in **clearing** (preflight). Discovered only after payment+transmission ⇒ this is NOT merely a fulfillment exception — it signals a **stale/missing authority profile · failed preflight · wrong patient-location context · integration defect · pathway-assurance failure** → opens an **assurance/accountability investigation** *in addition to* resolving the episode.
- **Branch B — transient stockout/capacity.** Reopens **pharmacy selection · sourcing · fulfillment strategy · possibly price** — should **NOT** auto-reopen the clinical decision if an equivalent product can be fulfilled elsewhere.
- **Branch C — formulation/route/therapy infeasibility.** Reopens the **clinical** resolution **only if** med/formulation/route/dose/monitoring/risk/patient-economics materially change.
**★ Conditional-reopening law:** *execution exception → reopen fulfillment/sourcing → evaluate whether clinical semantics changed → reopen the clinical decision ONLY when required.* (Otherwise OMNI burdens clinicians with operational exceptions staff/agents should resolve.) **Rerun as three branches, not one parenthetical.**

### I.3 — Payment capture is NOT "reversible" (compensation ≠ rollback)
A refund is a **compensating transaction**; the original capture stays historically real (fees · loss-of-funds · overdraft/credit effects · delay · dispute risk). States: `payment_authorized · captured · settled · refund_requested · refund_accepted · refund_settled · charge_disputed`. **★ Keeper: *Compensation is not rollback.*** Also test **prevention vs recovery** (the trace tested only recovery): *why was payment captured before a reliable pharmacy-feasibility check? auth-HOLD vs capture? when is advance capture commercially necessary? which policy version authorized that ordering? what did the patient see?* A mature fabric **prevents avoidable bad operation-ordering AND recovers from unavoidable async failure.**

### I.4 — Rail-level obligation ≠ patient-level obligation (the strongest unexpressed differentiator)
- **Rail-specific:** "*this* pharmacy must dispense/ship *this* Rx" — may become `failed · declined · impossible · terminated · released-via-governed-handoff`. It must NOT stay vaguely "open" forever (zombie obligation).
- **Episode-level continuation:** the patient still needs the therapy, a clinically-acceptable alternative, a refund, or a new decision — this **remains open and needs a NAMED CUSTODIAN.**
**★ Keeper:** *A local obligation may fail or terminate; the patient-level obligation may not disappear without resolution, transfer, explicit release, or an honest terminal state.* **The missing cross-system function is not state exchange — it is CUSTODY CONTINUITY over the unresolved patient-level obligation** (→ CNS · OFC · consult/handoff · no-orphan-work). *This may be more defensible than "OMNI owns the edges."*

### I.5 — False closure is TEMPORAL + CUSTODIAL, not a status label
Needs time + custody: `current_custodian · next_expected_actor · expected_by · timeout_at · last_verified_at · last_acknowledged_at · escalate_at · patient_visible_state · internal_evidence_state · participation_evidence_state`. Six distinct modes: (1) known-failure, optimistic message sent anyway · (2) rail failure never reported to OMNI · (3) no response before SLA · (4) status arrived but no one accepted custody · (5) obligation reassigned without acceptance · (6) patient-visible projection stale after internal state changed. **★ Keeper: *Every unresolved consequential action needs a current custodian, next expected actor, deadline, escalation path, and an honest patient-visible projection.*** This is where the fabric becomes more than a graph.

### I.6 — The trace BYPASSED the case's most dangerous gate (the pre-commit safety lane)
§A started with N3 already committed. But the original case's danger was **upstream**: provider-declared uncertainty · unstable AI rationale · evidence-floor acquiescence · fabricated rationale · AI-created confidence (DTP-06/18/21, STH-03). **A fabric that flawlessly executes an unsafe/inadmissible commitment is not a success.** Add:
- **Lane 2A — commitment CLEARS:** candidate passes evidence-floor · scope/credential · pathway-assurance · uncertainty/escalation policy · patient authorization · required human review → *then* test downstream partial failure.
- **Lane 2B — commitment does NOT clear:** candidate is deferred · narrowed · sent to consult · blocked-below-floor · returned-for-evidence → **no payment, no Rx transmission, no pharmacy execution occurs.**
**★ Keeper: *The fabric must govern WHETHER execution may begin — not merely execute efficiently once it has.***

### I.7 — Maturity-ladder regrade (replaces the 11 checkmarks)
Ladder: `represented → semantically-specified → policy-specified → runtime-enforced → externally-evidenced → counterparty-accepted → economically-validated`. **Honest placement: essentially every §C item is at `represented` or `semantically-specified` — NONE is `runtime-enforced` or `counterparty-accepted` (nothing is built or externally tested).** Regraded assertions:
| assertion | revised verdict |
|---|---|
| adds more than routing | **promising, not proven against the strongest real baseline (I.9)** |
| proof travels | **unproven beyond integrity/schema verification** |
| no god-object forms | **PASS at the conceptual-ownership layer** |
| no thin gateway forms | **CONDITIONAL — depends on actual enforcement/custody/reopening behavior (unbuilt)** |
| economically adoptable | **UNPROVEN** |

### I.8 — Trust-domain discontinuity replaces the brand-based "single/cross-well"
A single brand contains many trust domains (prescriber licensure · pharmacy licensure · payer adjudication · banking settlement · state regulation · patient authorization · facility policy); multiple companies may share a trust framework. So the real variable is **authority-boundary density / trust-domain discontinuity**, measured by: # independently-owned domain records · # distinct trust anchors · # jurisdictional/policy profiles · incentive-conflict degree · cross-org portability requirement · reversibility/blast-radius · # custody transfers · # execution rails · P(failure changes the clinical world-model). **★ Keeper: *OMNI's differentiated value rises with trust-domain discontinuity, authority-boundary density, unresolved-custody risk, and portability — NOT with the number of corporate logos.*** GTM sequence (corrects "start between every well = bootstrapping disaster"): **prove the lifecycle inside a controlled node → connect ONE painful external seam → demonstrate obligation-continuity + bounded proof across it → expand trust domains → earn external acceptance progressively.** **★ Opus push: choose the first seam by MAX discontinuity-per-unit-integration-cost — which is exactly the cash-pay specialty wedge (TRT/medspa, C3.9): real cross-authority orphaning (prescriber↔pharmacy↔payment↔patient-agent) but bounded boundary density (no payer adjudication yet). The trust-domain model and the existing wedge AGREE.**

### I.9 — The strongest non-OMNI baseline (retire the `success=true` strawman)
Existing infra ALREADY crosses org boundaries: **NCPDP SCRIPT** (new-Rx · change · refill · fill-status · cancellation · med-history · ePA across prescriber/pharmacy/payer) · **TEFCA** (national network-of-networks; common legal/technical/governance/identity/purpose-of-use) · **Epic** (med-order + fill-status resources · prior-auth interfaces · outside-record meds · **FHIR RequestGroup** = related requests with interdependencies) · payment processor · pharmacy status messages · patient-portal notification · ordinary work queue · EHR audit log. So *"no rival will accept another's authority/proof"* was **too absolute** — they already accept cross-party messages/identities/statuses via profile-specific networks. **The sharper, honest gap: those carry EDGE-LOCAL messages/records; they do NOT maintain a portable, STATEFUL, episode-level graph of cross-principal authority + unresolved CUSTODY + decision-reopening + compensation + remedy + dissent + continuing obligation with time/escalation.** **★ CORRECTED (Knox 2026-07-16 — my "stateless" claim was inaccurate):** Existing standards already represent **stateful** tasks, ownership, workflow status, interdependent requests, provenance, and cross-party exchange — e.g. **FHIR Task** (lifecycle `requested → accepted → in-progress → completed → failed → cancelled → suspended → resumed`; owner · requester · periods · status-reasons · business-status · inputs/outputs · history · composite tasks; explicitly meant to let workflow agents detect stuck work — Trial Use) · **FHIR RequestOrchestration/RequestGroup** (interdependent related activities · hierarchical groups · applicable conditions · participants · action relationships — Trial Use) · **TEFCA** (Common Agreement · technical trust requirements · delegation-of-authority · directory services · Facilitated FHIR — a *living* cross-network trust framework). **Their limitation is NOT absence of state; it is the lack of one broadly-adopted CROSS-NETWORK PROFILE for acknowledged custody transfer, patient-level consequence continuity, conditional domain reopening, recourse, honest patient projection, and portable bounded proof across independent authorities.** **OMNI must PROFILE and COMPOSE domain-native records — not re-invent them.** The corrected comparator + residual:
| existing capability | hard residual OMNI must prove |
|---|---|
| a local FHIR Task has an owner + status | custody survives transfer ACROSS organizations + is acknowledged by both sides |
| RequestOrchestration models related actions | cross-domain consequences are semantically typed + selectively reopen the RIGHT authority layer |
| NCPDP transmits pharmacy status | the status updates the right patient-level obligation + commercial state + patient projection |
| payment can be refunded | compensation ≠ remedy ≠ clinical reconsideration (separate + linked) |
| TEFCA exchanges data | a counterparty accepts the continuity + proof SEMANTICS, not merely the document |
| AuditEvent records local history | an external party verifies a bounded receipt without accepting OMNI's clinical judgment |
| work queues escalate | unresolved custody cannot fall between queues without a DETECTABLE breach |
**The kill target is precise: rerun against `FHIR/Epic Task+RequestOrchestration + NCPDP SCRIPT + payment processor + pharmacy status + TEFCA + portal + work-queue + Provenance/AuditEvent + a local workflow engine` and ask what remains. If the answer is "a nicer dashboard," STH-02 fails.**

### I.10 — Method correction: Builder / Adversary / Adjudicator (+ the honest limit)
Separate **Builder** (strongest OMNI implementation) · **Adversary** (strongest incumbent/standards implementation, NOT framed in OMNI language) · **Adjudicator** (fixed rubric written before seeing either). **★ Opus push (the honest limit Knox understates):** a single agent cannot truly be three independent roles — a model playing adversary against itself is STILL correlated (this run's own `correlated_confidence_guard`). So **even the corrected §I is single-author and must be marked PROVISIONAL pending a genuinely independent adversary** (a different model / Knox / a domain expert) + a pre-registered rubric. The methodology must obey the guardrail the analysis discovered.

### I.11 — Revised verdict (corrected kernel, Knox 2026-07-16)
**STH-02 survives as a SEMANTIC + INSTITUTIONAL hypothesis:** OMNI may differentiate by making **cross-authority custody transitions explicit, mutually acknowledged, continuously observable, selectively consequential, portable, and provable over DOMAIN-NATIVE records.** **OMNI does NOT own the underlying action or obligation, and it does NOT invent stateful workflow** (FHIR/NCPDP/TEFCA already have much of it). **It prevents unresolved consequences from becoming silently orphaned between independently-governed authorities.** Architectural enforcement, counterparty acceptance, economic value, and **liability allocation** remain UNPROVEN. (Maturity: `represented`/`semantically-specified`; not `runtime-enforced`, not `counterparty-accepted`.)

### I.13 — Custody refinements (Knox) + the OBLIGATION / CUSTODY / LIABILITY unification (operator — the sharpest formulation of the run) + cede-the-agent

**Knox custody refinements (accepted):**
- **Domain-native state stays domain-owned; the episode is a governed PROJECTION over those records + their acknowledged relationships — NOT a new giant `omni_action_episode` truth object.** (This is how OMNI avoids being the god-object it opposes.)
- **Custody is OFFERED and ACCEPTED — never OMNI fiat.** A `current_custodian` field alone can simply hold a lie. Real transfer: `custody_offered → recipient identity+authority verified → accepted/rejected/expired → effective_time set → prior custodian released OR remains responsible → patient-visible state updated → proof retained`. **Law: *custody changes only through evidence of authorized acceptance, explicit release, or an honest terminal condition.*** OMNI may coordinate + prove the transition; it may NOT declare that an outside pharmacy/provider/operator accepted responsibility when they did not.
- **The patient-level obligation must first LEGITIMATELY EXIST.** Do not collapse patient-goal / need / candidate-rec / clinical-commitment / professional-duty / operational-task / contractual-obligation / execution-work into one generic "patient obligation." **Corrected keeper: *A domain obligation may end. The unresolved CONSEQUENCE for the patient may not disappear without a new authorized disposition.*** (Avoids inventing duties while preserving no-orphan continuity.)
- **Reopening stays domain-specific:** `execution exception → typed signal → sourcing reopens → commercial evaluated → clinical-semantic impact evaluated → clinical domain reopens ONLY when the feasible treatment meaning changed.` The originating clinical owner retains recommit authority; **OMNI governs propagation + proof; it does not recommit the medicine.**
- **The patient projection is part of correctness:** *a patient-facing projection may omit protected internal detail; it may not manufacture closure the underlying evidence does not support.*
- **OMNI is NOT the universal custodian:** *domains hold obligations; actors accept custody; rails produce execution evidence; OMNI maintains the continuity projection, enforces transition rules, detects orphaning, triggers escalation, and proves the chain.* → *OMNI does not become the universal custodian; it makes custody explicit, accepted, continuously observable, and impossible to lose silently.* (A universal custodian would inherit enormous liability for work it does not control — see the firewall below.)

**★★ THE OBLIGATION / CUSTODY / LIABILITY UNIFICATION (operator insight, 2026-07-16 — the cleanest statement of STH-02 yet).** *"OMNI owns the obligation and the actor is the custodian — like when a doctor uses OMNI to write an Rx: the doctor is liable for the care decision via their license. Isn't that true for pretty much ALL decisions in the system?"* — **Yes, and it resolves the liability kill-criterion. The three-layer law:**
1. **The accountable ACTOR is the custodian for the next work, and accountability attaches to the license/authority under which each commit is made** — the licensed clinician for a clinical commit; the authorized domain/org for an operational/commercial commit — for *every* consequential decision, not just Rx. **★ CORRECTED (Knox — the earlier "custody + authority + liability travel together, never with OMNI" was an overreach): *Custody must ALIGN with actual authority; accountability remains traceable through the principal → delegation → committer → domain chain. Legal LIABILITY may be shared and remains an EXTERNAL adjudication — it is NOT a field OMNI can decide.***
2. **★ CORRECTED (Knox — not "OMNI owns exactly one obligation"): *OMNI enforces one substrate-level INVARIANT — unresolved consequential state cannot silently orphan across custody/authority boundaries, and the transition chain must remain provable. Underlying duties + obligations remain domain- and principal-owned.*** OMNI may own the canonical continuity PROJECTION + a contractual platform duty to operate it correctly — it does NOT thereby own every clinical/commercial/operational/professional obligation flowing through it.
3. **★ CORRECTED (Knox — OMNI can FIREWALL AUTHORITY; it cannot LEGISLATE LIABILITY. The earlier "resolves kill-criterion #8" was an overreach.):** OMNI can make it unmistakable *who had authority · who committed · who accepted custody · which policy applied · what evidence existed · what actually happened* — which substantially CLARIFIES and BOUNDS responsibility. It does NOT guarantee that OMNI / Bloom / a vendor / an operator / a clinician / a pharmacy (or several together) cannot bear legal liability — for defects, misrepresentation, privacy failures, unsafe policy execution, or a failed promised alert/continuity mechanism. **This gives OMNI a credible authority + responsibility BOUNDARY; it does NOT resolve the liability kill-criterion. OMNI must still prove that platform-level duties, defects, contracts, and regulatory exposure do not cause liability to CONCENTRATE on OMNI.**
- **★ Opus sharpening (the honest positive frame — the goal is not zero liability):** the achievable win is changing the SHAPE of OMNI's liability from an *unbounded co-defendant in "was the care right"* (catastrophic, uninsurable) to a *bounded platform-duty / defect / SLA liability* (definable, contractible, **INSURABLE** — like any infrastructure provider). **Kill-criterion #8 restated: prove OMNI's liability is BOUNDED + INSURABLE, NOT that it is zero.** The bounded proof (certifies process-not-correctness, kernel #5) is what *enables* that bounding — it keeps OMNI out of the *malpractice* chair while OMNI still answers for its *platform* duties.
- **★ Precision caveat (do not slide into the god-object):** OMNI enforces the **CONTINUITY invariant**, it does not "own the obligation" — domain obligations + custody + liability stay with the authorized actors/principals. And there is a **pre-commit admissibility gate BEFORE custody attaches** (I.6). Full pattern, three parts: **admissibility (may this form?) → authorized custody + commit (who exercises authority) → OMNI continuity + proof (no orphan).**

**★ Cede-the-agent (operator, 2035/2040):** OMNI's own AI agent/harness is a **competitive CALLER** (harness ≠ substrate) — great, useful, functional, and something OMNI operates — **but NOT the moat, and cede-able.** The big boys will have great agents too; OMNI can build one, parallel theirs, or cede it, because **the company bet is the CALLEE (the continuity + custody + proof layer that every agent — including OMNI's own — transacts through), never "best agent."** Betting the company on out-agenting Anthropic/Google is the losing game; being the layer their agents must cross is the winning one. (Consistent with STH-02.4 + caller/callee + harness≠substrate.)

### I.14 — The 5-layer ownership model · the diamond reactor · cede-able-not-now · what would actually give OMNI away (Knox 2026-07-16, accepted; + Opus)

**Five kinds of ownership/responsibility (NOT two) — and it is the estate's OWN taxonomy (§0.5 ③) applied to liability, so the spine author already has the nouns (NOT a re-mint):**
| layer | what belongs there |
|---|---|
| **Owning domain** | the authoritative STATE (clinical commitment · consent · payment event · pharmacy acceptance · fulfillment obligation · execution evidence) |
| **Principal / legal entity** | the underlying RIGHT / DUTY (contractual · professional · organizational obligation) |
| **Actor / delegated agent** | CUSTODY of the next work (who does what · by when · under which authority) |
| **Committer** | the actor + owning domain that make a consequential state AUTHORITATIVE |
| **OMNI substrate** | the CONTINUITY INVARIANT (custody explicit + accepted · consequences don't orphan · transitions / reopening / remedy / projections / proof stay coherent) |
**★ Mature law (FINAL — "authoritative state," NOT "truth"; scoped enforcement):** *The domain owns **authoritative state** (Care = committed clinical state · Commerce = payment state · Pharmacy = dispensing acceptance/execution state · Identity = identity-assurance state — NOT metaphysical truth, and correctable later). The duty-bearing principal or legal entity retains the underlying duty. The committer exercises authority. The actor or delegated agent accepts custody within granted scope. OMNI governs continuity, **enforces it within managed scope, and verifies, detects, escalates, and proves the chain across federation.*** (Stronger than "OMNI owns the obligation"; maps 1:1 to the estate's subject/principal/actor/agent/capability/committer taxonomy — NOT a re-mint.) **★ Guard: a non-human agent may accept delegated execution custody; it does NOT thereby acquire independent professional authority or legal personhood.**

**THE DIAMOND REACTOR — the center is semantically SMALL, consequentially ENORMOUS. This IS the candidate v4-spine core.** A compact invariant set:
1. no consequential execution without admissibility + appropriate authority;
2. domain truth remains domain-owned;
3. custody transfers only through authorized acceptance / release / expiry / honest terminal;
4. a local task may fail, but an unresolved patient consequence may not disappear without a new authorized disposition;
5. execution exceptions selectively reopen the CORRECT authority layer — not everything, not nothing;
6. compensation ≠ remedy ≠ reversal ≠ clinical reconsideration ≠ outcome (distinct + linked);
7. the patient-visible projection may omit protected detail but may never manufacture closure contradicted by known evidence;
8. every consequential transition leaves bounded, portable proof without exposing all private deliberation.
Agents · interfaces · workspaces · EHR integrations · pharmacies · robots · payment systems · operating orgs = the turbines / pumps / panels / grid AROUND the reactor. **★ Opus: this small invariant set is exactly what a SPINE is (a few laws everything instantiates) vs a feature list — and it EXPLAINS why the whole prior estate belongs together** (§A who-may-enter/see/propose/execute/commit · §B how-agents-contribute-without-inheriting-authority · §C bounded cross-boundary actions · CNS orchestration/custody/time/escalation/reopening · OFC+Commerce operational obligations · Care clinical commitments+continuity · Identity+Consent bind subject/principal/authorization · Platform versions+operates runtime · Accountability/GRR harm/recourse/remedy · Evidence/proof preserve-what-occurred-not-a-verdict · Surfaces project per principal). **The reactor does not replace the estate — it is the invariant that makes the constellation coherent.**

**CEDE-ABLE = an ARCHITECTURAL PROPERTY, NOT a current product decision (Knox correction — do NOT cede now):** build excellent first-party agents (provider · patient · ops · clinical-governance · admin) **AGGRESSIVELY** — they are the initial product · the adoption wedge · the reference implementation · the source of governed action volume · the proving ground for the constitutional runtime · where OMNI learns the true contribution grammar · the fastest value before an external network exists. **BUT build them as CLIENTS of OMNI, with NO privileged backdoor just because they're OMNI-native.** **★ Keeper: *Cede-able interface; non-cedable invariant.* / *Build the agent aggressively; architect the company so the agent can be replaced.***

**WHAT WOULD ACTUALLY GIVE OMNI AWAY (the risk is NOT openness):** stop building first-party apps before the network exists · reduce OMNI to a passive open standard · give others the runtime / conformance-network / assurance-history / counterparty-relationships · assume continuity is just FHIR Task + timestamps · abandon the vertical care workflows that generate the transactions + proof needed to earn external acceptance. **The real risk = an open protocol with NO trusted runtime, NO acceptance network, NO transactions, NO customers.** You do NOT give OMNI away by letting the patient use an external agent, the provider use another model, the EHR own its records, or the pharmacy own dispensing truth — that interoperability is what lets OMNI become larger than any one app.

**THE FAR-TERM VIEW MUST PRODUCE SHARPER 2026 DECISIONS (or it's masturbation):**
1. **build first-party agents as reference clients** (same contribution/authority/custody/proof seams external agents will use; NO backdoor);
2. **keep domain truth separate** — a governed continuity PROJECTION over domain-native records, NOT one giant action/obligation object;
3. **implement the no-orphan invariant in the FIRST wedge** (cash-pay specialty Rx): preflight pharmacy/jurisdiction feasibility · distinguish authorization/capture/settlement/refund · offer-and-accept custody explicitly · name current-custodian + next-actor · carry deadlines + escalation · honest patient-visible state · reopen sourcing first / medicine only when clinical meaning changes · keep compensation/remedy/reconsideration separate · issue a bounded receipt;
4. **prove ONE external seam** — `Bloom clinical/commerce ↔ one external pharmacy ↔ payment processor ↔ patient communication` (enough to test whether consequence + custody survive a real boundary; NOT the whole national network);
5. **keep liability claims FACTUAL** — record responsibility + authority lineage; do NOT claim the architecture has allocated legal liability or guaranteed OMNI immunity.
**★ Keeper: *The far-term reactor constrains every near-term product; it does not replace the need to ship them.***

### I.15 — Reactor GOVERNANCE (anti-mint) · company factorization · the NAMING question (Knox 2026-07-16 + operator + Opus)

**★★ NAME ADOPTED (2026-07-16, Nick + Knox + Opus converged): `OMNI Reactor`.**
- **Status: `candidate_spine_doctrine` — named · non-ontological · UNPROMOTED.** (The disciplined middle: not un-named [→ an impressive but unfocused estate], not a minted `omni_reactor` object [→ the god-object OMNI rejects].)
- **Formal definition (FINAL — use this one everywhere; no-action-inclusive):** *OMNI Reactor is OMNI's risk-adaptive intent-to-consequence constitution: the cross-domain invariant set governing **whether and how** consequential intent may become authoritative state or real-world effect — **or reach an honest non-action terminal** — through admissibility, domain-owned commitment, accepted custody, honest continuity, selective reopening, remedy when owed, and bounded proof. It owns no domain state, is not a universal custodian, and does not allocate legal liability.* (Makes three things unmistakable: it governs **whether**, not merely how; **non-action is a valid governed result**; "consequence" includes authoritative **state** changes, not only physical action.)
- **Formal gloss (the ONLY descriptive gloss, NOT a second name):** *the intent-to-consequence constitution.*
- **★ CARE-FIRST PREAMBLE (the Reactor is NOT morally self-sufficient):** *The Reactor operates UNDER OMNI's inherited care-first, patient-rights, recommendation-integrity, anti-capture, and continuity-without-captivity commitments. It governs consequential transition; it does NOT define OMNI's ultimate ends.* A payer denial can be perfectly traceable and still unjust · an owned-pharmacy routing decision perfectly auditable and still self-preferencing · a marketing conversion flawlessly executed and still a firewall violation · a clinically-inadmissible treatment perfectly fulfilled and still unsafe. **★ Opus (Polaris↔Reactor): *Polaris governs what OMNI must align TOWARD (the ends); the Reactor governs the conditions under which the world may change (the means). Polaris ENTERS the Reactor at the admissibility invariant (#1)* — which is why #1 is both the least-proven invariant AND the one that keeps the Reactor from becoming a beautifully-governed conveyor belt for bad decisions.**
- **★ CANONICAL STRUCTURE (keep these four categories DISTINCT — do NOT fuse doctrine + legal-interpretation + architecture-posture + company-strategy into one "constitutional set"):** **A. Formal definition** (above, one) · **B. The eight constitutional invariants** (§I.14 — the actual constitution, invariants ONLY) · **C. Responsibility + legal guardrails** (the 5-layer division · firewall-authority-not-liability · internal-enforcement-vs-federated-verification — `§I.13`) · **D. Company translation** (cede-able-interface/non-cedable-invariant · reactor–plant–grid strategic model · open-grammar/operated-runtime/earned-network · product-now/infrastructure-next/institution-eventually). **A + B are constitution; C is guardrail; D is strategy — never promote C or D into constitutional law.**
- **The eight invariants = §I.14** (admissibility-before-consequence · domain-owned commitment · accepted custody · no silent orphaning · selective reopening · compensation≠remedy≠reconsideration≠outcome · honest projection · bounded proof). Resist adding more unless a deep trace proves a genuine omission. **★ Opus flag: invariant #1 (admissibility) is the LEAST-proven / most-owed — the trace BYPASSED the pre-commit gate (I.6); it is where the next build work concentrates.**
- **ANTI-MINT (prohibited): NO `omni_reactor` object / service / plane / record / loop / contract · NO universal obligation · NO universal custodian · NO liability allocator · NO replacement for Care / CNS / OFC / Commerce / Identity / Consent / Platform / Accountability / Evidence / Agent-Runtime. Every claimed invariant routes to an existing owner BEFORE any semantic gap is proposed; any missing primitive survives C5 dedup + an independent deep trace before minting.** **The Reactor is a CONSTRAINT SYSTEM, not an object — what the platform refuses to let any consequential transition violate. OMNI does not STORE a reactor. It does NOT appear on the System Map as a truth-owning rectangle beside Care/Commerce/Identity/CNS/OFC — it is an OVERLAY of invariants across them.**
- **★ Law: *Conceptual centrality does not require centralized data, authority, or execution* → *Shared constitutional law; distributed truth, authority, custody, and execution.*** (This is what protects OMNI from the central god-object while still giving the company a real center — conceptually central, operationally distributed.)
- **Consequence threshold (makes enforcement RISK-ADAPTIVE — do NOT make every chat turn / hover / draft feel like a nuclear launch):** a transition is **consequential** when it changes authoritative domain state · creates/transfers/releases/terminates a duty or custody · triggers external execution · materially affects a patient's rights/care/money/access/commitments · changes what another domain may lawfully do · or may produce a hard-to-reverse/irreversible effect. *A low-risk scheduling query needs only identity + delegated scope + idempotency + an honest result; a prescription needs evidence sufficiency + scope + patient-authorization + pathway policy + human commitment + pharmacy admissibility + monitoring + custody + proof.* **The constitutional kernel is shared; enforcement DEPTH scales with consequence.**

**★ NEIGHBOR BOUNDARIES (so the spine author does NOT merge the Reactor with its closest named neighbors):**
| existing construct | its job | what the Reactor does NOT replace |
|---|---|---|
| **Polaris** | aligns OMNI to values / care-first / rights / policy (the ends) | the Reactor is NOT OMNI's moral north star |
| **REV-184** | lifecycle of forming/deferring/revising/reopening a consequential DECISION | the Reactor is NOT one giant resolution object |
| **CNS** | orchestrates custody / time / deadlines / routing / escalation / continuity | the Reactor is NOT a central workflow queue |
| **domain contracts** | own authoritative state, commands, invariants | the Reactor owns NO domain state |
| **§C / Governed Capability Exchange** | carries bounded capabilities across org seams | the Reactor is NOT an API gateway |
| **Evidence / Accountability / GRR** | preserve proof / dispute / recourse / harm / remedy | the Reactor does NOT itself adjudicate liability |
| **Agent Runtime** | supplies agents / tools / memory / sessions / execution | the Reactor is NOT an AI harness |
*Key distinction: **Polaris governs what OMNI must align toward; the Reactor governs the conditions under which the world may change** — which makes the Reactor ADDITIVE, not imperial.*

**★★ BUILD LAW — THE REACTOR IS COMPILED, NOT DEPLOYED (the most important implementation safeguard):** *The OMNI Reactor is COMPILED into domain contracts, policy profiles, admissibility gates, transition guards, custody protocols, projections, proof requirements, conformance tests, and evaluation fixtures — AND enforced at runtime by EXISTING orchestrators (CNS custody/continuity/escalation · OFC obligations/exceptions · owning domains commit). It is NEVER deployed as one central `reactor-service`.* **★ Opus refinement (do not let "compiled" erase the runtime component): the Reactor has a real RUNTIME existence — but it is DISTRIBUTED across CNS/OFC/domains, not a central service.** Prohibited: `reactor-service/` · `omni_reactor` table · a reactor API · reactor-owned state. Metrics stay grounded in their actual owners (false-closure → CNS/OFC/patient-projection · custody-acceptance → CNS/Federation · reopening-precision → REV-184/affected-domain · avoidable-capture → Commerce · proof-completeness → Evidence/Accountability · patient-visible-accuracy → projection/comms). A cross-system dashboard may PROJECT those metrics; it does not become their truth owner. **Conceptually central; operationally distributed.**

**Dedup map (reactor invariant → existing owner → net-new?):**
| reactor invariant | existing OMNI home | net-new? |
|---|---|---|
| admissibility before action | REV-184 · evidence floors · Settings/pathway policy | No |
| candidate ≠ commitment | §A authority · G2 · RBAC · domain contracts | No |
| domain-owned truth | System Map · domain-ownership contracts | No |
| explicit accepted custody | CNS · OFC · participation binding · transfer/handoff | possible **semantic gap** — pressure-test; NOT a new domain |
| no silent orphaning | Care obligations · CNS continuation · OFC exception | **sharpening** |
| selective decision reopening | REV-184 · EVRUN-252 D1 | No |
| compensation ≠ remedy ≠ reconsideration | Commerce · OFC · GRR/Accountability | **sharpening** |
| honest role-shaped projection | Surface/projection discipline | No |
| bounded proof + private deliberation | Evidence Plane · AI-influence-lineage · DTP-02/08 | **sharpening** |

**Three maturity layers (stop strategic excitement from silently becoming doctrine):**
1. **Settled / strongly-inherited:** domain ownership · candidate≠commit · typed authority · accepted participation · projections · evidence/provenance · continuity · no-silent-false-closure.
2. **Candidate synthesis:** the compact reactor composition · continuity as the joining invariant · first-party agents as reference callers · a managed action/continuity runtime.
3. **Unproven business thesis:** external receipt acceptance · cross-network institution · insurance pull · bounded/insurable platform liability · 10BN network economics · neutral institutional status.

**★ THE REACTOR IS NOT THE COMPANY (the biggest 10BN correction):** **Reactor** (the constitution/doctrine) + **Plant** (first-party agents · specialty workflows · managed runtime · connectors · reliability · exception handling · implementation · Bloom = a differentiated PRODUCT company) + **Grid** (external agents · pharmacies · labs · payment rails · EHRs · devices · other operators · certified action profiles · trust anchors · receipt verification · portability · dispute/recourse · external acceptance = the 10BN NETWORK). *Reactor alone = doctrine. Reactor + plant = product company. Reactor + plant + grid = 10BN network.* **★ Naming guard: `OMNI Reactor` is the ONLY proper name; "plant" and "grid" are lowercase STRATEGIC CATEGORIES, NOT named architecture — do NOT mint "OMNI Plant / OMNI Grid / Plant Plane / Grid Service / Grid Domain." The 10BN thesis is not the name or doctrine; it is the accumulation of transaction volume · action/exception history · reusable profiles · runtime enforcement · counterparty integrations · conformance experience · receipt acceptance · recourse · trust anchors · institutional legitimacy — which competitors cannot instantly copy even after copying the eight invariants.** **Nested strategy: Product now · Infrastructure next · Institution eventually** — the moonshot need not succeed for the near-term company to be valuable, but the near-term architecture must not foreclose it.

**Company boundary:**
| must OWN/GOVERN | may RENT | must INTEROPERATE with | should OPEN / make independently-verifiable |
|---|---|---|---|
| continuity runtime · admissibility+authority composition · custody-transition + no-orphan enforcement · selective reopening + remedy orchestration · proof/recourse/dispute machinery · first-party reference apps · conformance ops + network relationships · real execution/reliability history | foundation models · generic agent harnesses · cloud compute · generic workflow infra · commodity observability/memory/messaging · generic eval tooling | EHRs · pharmacies · labs · payment rails · personal + provider agents · payers · facilities · devices/embodied agents · other operators | constitutional envelope semantics · receipt verification · portability rules · conformance test vectors · domain-native mappings · SDKs/external-caller interfaces · minimum implementation profiles · patient export/challenge paths |
*"Own" = cannot outsource competence/strategic control to one hyperscaler and remain the company. **Open grammar. Operated runtime. Earned network.***

**Internal-vs-federated enforcement:** inside an OMNI-managed operator / Bloom, OMNI directly **ENFORCES** (admissibility · evidence · authority · custody-acceptance · deadlines · escalation · projection · execution-state). Across an external pharmacy/EHR/provider/payer/patient-agent, OMNI cannot command — it **VERIFIES** identity+authority · requests/offers custody · validates conformance · preserves evidence · detects breach · triggers escalation · marks participation/execution `unknown` · issues an honest bounded receipt. Real cross-org enforcement needs contracts + certified integrations + profile acceptance + trust anchors + recourse. **This is why the far-term company is an INSTITUTION, not just a runtime.**

**"No orphan" clarified (do not overpromise):** the substrate guarantee is *no unresolved consequence becomes invisible* — visibility + an authorized terminal disposition (`completed · rejected · transferred · expired · failed-with-remedy · blocked-pending-evidence · closed`) — **NOT** that every desired consequence happens. OMNI cannot force success (a pharmacy may refuse custody · a treatment may become impossible · a provider may decline · a patient may withdraw consent). **★ Keeper: *OMNI forces honesty, not success.***

**★ NAMING — DECIDED (2026-07-16): `OMNI Reactor` is the sole working proper name.** Governing status = **doctrine** (`candidate_spine_doctrine`), NOT "merely metaphor." The **naming test (current rule):** *a name is SAFE if it names a LAW everything obeys; DANGEROUS if it names a THING that owns/stores/swallows* — Polaris/REV-184/RIF pass; `omni_reactor` the record FAILS.

> **Decision history — SUPERSEDED by the 2026-07-16 candidate-name adoption (retained as rationale/provenance ONLY; do NOT read as current posture):** the deliberation ran: *is there a case to name it? → yes, refusing to name the center is itself the "empty/unfocused" failure → the estate already names doctrines that own no truth (Polaris, CNS, REV-184, RIF, §C) → so name it as a CONSTITUTION, not a thing → candidate strings weighed ("Reactor" metaphor vs "Crossing / Governed-Consequence Constitution") → **RESOLVED: adopt `OMNI Reactor`; "Crossing/hard-middle/action-fabric" demoted to descriptive phrases only.*** *(This block preserves how the decision was reached; the current posture is the adoption above.)*

- **★ Adoption confirmed: the name is `OMNI Reactor`** (status `candidate_spine_doctrine`), stop calling it "merely a metaphor" (that undersells what emerged). **ONE proper name · ONE formal definition · ONE candidate status.**
- **★ ONE-NAME HOUSEKEEPING (do NOT mint competing named architecture):** `OMNI Reactor` is the ONLY proper name; *intent-to-consequence constitution* is the ONLY gloss. Demote to **descriptive phrases ONLY** (never a second named thing): "the Crossing / governed crossing," "hard middle," "action fabric," "constitutional center." Do NOT mint: The Crossing · Governed-Consequence Constitution · Reactor Plane / Service / Record / Loop / Contract.
- **★ RATIFICATION GATES (name-now, promote-later — canon only at the v4 spine gate after):** (1) clean dedup vs existing doctrine · (2) an independent standards-native trace (FHIR Task/RequestOrchestration + NCPDP + TEFCA + Epic + workflow) · (3) ONE runtime implementation in the cash-pay specialty seam · (4) evidence it changes operational outcomes (the §I.15 metrics) · (5) explicit liability/governance review.
- **★ Opus iron-out — PRE-REGISTERED RENAME/KILL CRITERIA (so the gate stays a REAL gate, not a rubber-stamp anchored by today's excitement — applying this run's own anchoring/correlated-confidence guard to the naming ACT itself):** rename or retire `OMNI Reactor` if the independent-adversary trace shows it is **just re-branded domain law** · if "Reactor" keeps getting objectified into a box despite the guardrail · if a materially clearer name emerges at the gate · if the metrics show no operational lift (then it was philosophy, not a constitution). *Adopting the name does not pre-decide the gate.*
- *Own the center now; ratify the word later — naming ≠ promoting.*

**★ MEASURE THE REACTOR (or it is only philosophy):** false-closure rate · unresolved-consequence orphan rate · time-to-accepted-custody · custody offers rejected/expired · time from exception → authorized disposition · right-domain reopening precision · patient-visible-state accuracy · avoidable payment-capture + refund time · proof completeness · external receipt acknowledgement. **If the Reactor cannot produce measurable operational improvement, it is not a constitution — it is a slogan.**

**★ THE 10BN TEST (all three must become true):** (1) **the Plant is independently excellent** — operators buy it because it improves care/ops TODAY, not for a promised network; (2) **the runtime becomes REPEATABLE** — deployments become profiles + conformance, NOT custom consulting; (3) **independent parties accept the output** — a pharmacy / other operator / payer / insurer / regulator / patient-agent / device recognizes the continuity + proof semantics without surrendering its own authority. **Until then: the Reactor is a strong doctrine; the Plant may be a strong product; the Grid is an unproven network thesis. That is staged company construction, not hedging.** **★ Resilience keeper: *even if the network thesis fails, a managed system that prevents consequential care, money, fulfillment, and follow-up from becoming silently orphaned is valuable NOW* — which is what makes the architecture robust to the future arriving differently.**

**★ INDEPENDENT-ADVERSARY REQUIREMENT (carries from I.10 — binding on the next test):** the next Reactor trace uses a pre-registered rubric + a strong standards-native baseline + an INDEPENDENT adversary + separate adjudication. (A prior preservation audit in this very estate found systematic loss of skeptical counterweights + care-execution nuance even when source-reading was accurate — the guard is not optional.)

**★★ HOW WE GOT HERE (provenance arc — preserve so a future agent inherits the DERIVATION, not just the conclusion; per operator anti-evaporation directive):** TRT follow-up specimen (`EVSRC-278/279`) → dyad-illusion broken → **multi-principal / multi-actor / agent-mediated care** (DTP-19/20) → patient-side AI + nonexclusive agency + correlated-confidence → the **agent-callable governed medical-action fabric** (STH-02) → *"OMNI is between intent and consequence"* → the **liability correction** (firewall authority, not legislate liability; bounded/insurable) → the **8 invariants + 5-layer ownership** → the **OMNI Reactor** (constitution) + **Plant/Grid** (company) → **named, not promoted.** *A future agent that reads the 8 keeper lines but not this arc has failed the inheritance — the lines are indexes into the depth in `_05 §A–§I` and `_02 §10`, not replacements for it.*

**★ RATIFICATION requires THREE contrasting traces (adds the two missing controls — tests both under- and over-governance):**
| trace | required behavior |
|---|---|
| **inadmissible consequential candidate** (insufficient evidence · unstable rationale · provider uncertainty · unmet pathway req) | **BLOCK / defer / narrow / consult BEFORE payment, prescription, pharmacy, or fulfillment** (tests invariant #1 — the least-proven, the anti-conveyor-belt) |
| **admissible action with downstream exception** (deep-trace #2) | maintain custody · selective reopening · remedy · honest projection · proof |
| **low-risk reversible action** (e.g. simple appointment selection) | **complete with MINIMAL governance burden** (proves risk-adaptive, NOT universal bureaucracy) |
*The Reactor FAILS if it is too weak for the first two — AND fails if it makes the third unbearable.*

**★ CANONICAL-HOME LIFECYCLE (do NOT let a July-2026 TRT analysis file become permanent constitutional canon):**
- **Candidate phase (now):** `_02 §10` = current synthesis · `_05 §I` = derivation + adversarial corrections + naming history · registry = status + pointers.
- **Ratified phase (after the gate):** the **v4 spine** becomes the authoritative doctrine home; system/contract docs consume the Reactor BY REFERENCE; `_02`/`_05` become **evidence/provenance, not current law**; the formal definition + 8 invariants appear ONCE in the spine; implementing domains carry their own COMPILED requirements.

**★★ FREEZE — `OMNI Reactor candidate definition checkpoint · 2026-07-16`.** FROZEN: one proper name · one formal definition · the eight invariants · the five-layer responsibility model · the legal guard (firewall-authority-not-liability) · the neighbor boundaries · the ratification gates. **From here: NO prose-only additions to the Reactor.** A ninth invariant, a changed definition, a new sub-concept, or a rename requires ONE of: an independent adversarial trace · a runtime-implementation finding · an external conformance failure · legal/governance review · ratification-gate adjudication. **★ Opus — the freeze binds the TRIFECTA itself:** the failure this whole run kept re-enacting was our own eloquence-inflation. *Let evidence — not additional eloquence — change the candidate.* After this patch, we STOP expanding the concept in prose.

### I.12 — STOP + next (Knox directive, accepted)
**Do NOT run the remaining four deep traces until this pilot METHOD is corrected + survives** (record-kind classification · 3-branch conditional reopening · payment prevention-vs-recovery · rail-vs-patient obligation custody · temporal/custodial false-closure · pre-commit safety lane · maturity ladder · trust-domain-discontinuity · the strongest real baseline · Builder/Adversary/Adjudicator with an independent adversary). **After the corrected method survives, formally open `EVRUN-2026-000008`.** The three real experiments remain the actual work: external-acceptance pilot · insurer pilot · cross-operator portability pilot. **The kill target is now precise: prove — against the strongest existing standards stack — that OMNI uniquely prevents unresolved care, money, execution, and patient obligations from becoming orphaned across independent authorities, WITHOUT owning those authorities' truth.**

# Pre-Spine Sufficiency & Task-D Re-Entry Map — 2026-08-04

Document type: `planning_or_sequencing_map`
Authority: `analysis_nonbinding`
Status: `candidate_pushed_pending_nick_knox_review · not_landed · no_checkpoint_repoint`
Domain(s): `architecture_governance, operator_governance, portfolio_sequencing`
Lifecycle role: `bounded pre-spine dependency graph + concern→destination classification + minimum sequence; the executable answer to "what is next before Task-D population and the spine"`
Source-of-truth relationship: `nonbinding sequencing map only; it ROUTES concerns to their existing homes (FWREG rows, C4.4/Angle-B, contracts) and names the gaps; it invents NO architecture and overrides NO contract, checkpoint, or gate. The current checkpoint HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md remains authoritative for program state.`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed`
Review gate: `user_knox_required`

> **What this is / is not.** This is the bounded, mostly-read-only *classification pass* Knox called the "Task-D Input Sufficiency / Pre-Spine Closure Map." It is **not** a new controlling document, **not** a checkpoint, and **not** a new architecture arc. It does **not** repoint `AGENTS.md` / read-graph #15 / the controlling-plan banner. It holds the prior "go straight into Task-D re-entry" relay and replaces it with: *inventory every spine-shaping concern → point each at its home or flag the gap → name the minimum sequence.* On acceptance, a state-only normalization flips the candidate rows to active and (operator-controlled) the next checkpoint may point here as the pre-spine sequence home.

---

## §0 — Plain English: what Task-D is, and why we are NOT populating it yet

**Task-D is the reality-check exam OMNI's architecture must pass before we write the thesis spine.** It asks one blunt question:

> If Palantir, Epic, Microsoft/Nuance, ServiceNow, Salesforce, enterprise data platforms, and the big AI runtimes (OpenAI/Anthropic) are all *excellent* and *may be combined* — what must OMNI actually **own**, what can it **buy / wrap / host-on / partner** for, how much configuration and "seam tax" is left over, and is OMNI's **healthcare-specific operating physics** real enough to justify building the spine at all?

Task-D is an **integrator and admission test**, not the home where missing architecture gets invented. It *consumes* finished inputs and produces a §7 verdict: spine-admissible or not. It already tests build-vs-buy-vs-wrap-vs-host-vs-partner, configuration burden, lock-in/exit cost, cross-system truth duplication, operational accountability across seams, and whether OMNI's moat is static software or a compounding network/evidence advantage. It explicitly steelmans Palantir rather than pretending Palantir is a generic database. **Your fear — "Palantir will beat our ass on the backend" — is exactly Task-D's core question.**

**Why we do not populate it now:** Task-D's own frozen status defers final population until later operator-selected inputs are available, and there is **no final §7 verdict** (`H0` unresolved; `H1` credible but not shown on >1 substrate; `H2` unresolved; `H3` unproven). Care is not closed. GRR is review-ready but not closed. Insurance/payer has **no home at all**. Running the exam against moving inputs produces a *false* pass or fail. So we freeze the inputs first (with bounded closure receipts, **not** full C5 contracts), then run the exam.

---

## §1 — The pre-spine dependency graph (five buckets)

Every spine-shaping concern is classified into exactly one bucket:

1. **REQUIRED-BEFORE-TASK-D** — must be frozen (closure receipt) before final Task-D population, or Task-D's verdict is false.
2. **CONSUMED-INSIDE-TASK-D** — Task-D tests/answers it directly from frozen inputs; no separate pre-work.
3. **SPINE-POSTURE-NOW / CONTRACT-LATER** — the constitutional stance must be settled before the spine; the exact contract is C5.
4. **FUTURE-VERTICAL-FALSIFIER** — used as a fixture to pressure other work; not its own architecture arc.
5. **IMPLEMENTATION-PROOF-AFTER-SPINE** — real proof (e.g. Enterprise Bootstrap Steel Thread, F-Self) happens after the spine.

---

## §2 — Concern → destination classification

**The important truth: ~80% of the worry-list already has a durable, registered home. Almost nothing is evaporating.** The table routes each concern to its existing home (or names it a GAP).

| Concern (Nick + Knox) | Existing home | Bucket | Note |
|---|---|---|---|
| Palantir/Epic/MS/ServiceNow beating us on the **backend**; build-vs-buy-vs-wrap-vs-host | **Task-D core** (`v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md`) + C4.4 fresh Angle-B | CONSUMED-INSIDE-TASK-D | This is literally the exam. |
| **Connectors** to banks / email / spreadsheets / payroll / ERP / data platforms / model runtimes / CDC / lineage | C4.4 fresh Angle-B (connector ruling = buy/wrap mature machinery; OMNI keeps source identity, authority-to-send, custody, package membership, correction lineage, adoption; prove replaceable) | CONSUMED-INSIDE-TASK-D | Needs explicit Task-D **construction briefs + switching proofs**, not a per-connector arc. |
| **Insurance / payer / coverage / out-of-pocket / mixed financing** | **NONE — GENUINE GAP** → mint **`FWREG-017`** (this pass) | **REQUIRED-BEFORE-TASK-D** + SPINE-POSTURE-NOW | Not "just a connector" and not "just Commerce." Care-authority vs financing-authority must stay distinct-but-linked. See §3.1. |
| **Vendor / counterparty residual** (general suppliers, labs, devices, logistics, clearinghouses, AP/COGS, warranty/recall) | EVRUN-000012 decomposition (rejected a "Vendor Loop" god-object) + Pharmacy (one solved subtype) | REQUIRED-BEFORE-TASK-D (as a **receipt**, not a reopened arc) | Need a bounded **counterparty residual closure receipt**: what's solved / what composes / what Task-D tests / what's C5. See §3.2. |
| **Care Operating Model (Care Loop)** | `FWREG-011` + `v4_C4_care_operating_model_capture.md` | REQUIRED-BEFORE-TASK-D (bounded **closure receipt** freezing what Task-D may treat as invariant) | Care is a load-bearing Task-D fixture; must not be a moving input. |
| **GRR (Governed Reporting & Resolution)** | `FWREG-009` + `v4_C4_governed_reporting_resolution_capture.md` | REQUIRED-BEFORE-TASK-D (bounded closure receipt) | Review-ready/provisionally stable, not closed. |
| **Fleet deployment at 50 / 100 / 1,000 instances**; sales & implementation economics; "does it become Palantir-style consulting?" | Configuration-burden/portability/lock-in machinery already in Task-D; **Enterprise Bootstrap Steel Thread** = post-spine executable proof; federation modes in `FWREG-001` | CONSUMED-INSIDE-TASK-D (plausibility) → IMPLEMENTATION-PROOF-AFTER-SPINE | Task-D needs a credible **instance-factory construction brief**; the 1,000-deploy proof is post-spine. See §3.3. |
| **Personal account / insurance info / "deploy to all federations?"** | `FWREG-001` (federation modes) + Identity/RBAC/Consent/Federation C5; checkpoint says represented-principal access + continuity-without-captivity are represented, cross-namespace mechanics unresolved | SPINE-POSTURE-NOW / CONTRACT-LATER | Constitutional posture in §4: account anchors continuity; insurance facts source-attributed/temporal/correctable; visibility purpose+consent-bound; receiving operator gets an authorized package/projection, **not** universal access; **federation ≠ global replication.** |
| **Connect with business AI tools (OpenAI/Anthropic/agent runtimes) or perish** | `FWREG-010` (Agent Runtime & Harness) + Task-D AI-rails | CONSUMED-INSIDE-TASK-D + SPINE-POSTURE-NOW | OMNI owns context selection, permissions, action gates, eval, lineage, return path; models own execution. |
| **Demand / engagement / marketing / influencer** | `FWREG-014` | FUTURE-VERTICAL-FALSIFIER / operator-ordered arc | Posture input to Task-D; full arc is operator-ordered, not required-before. |
| **Time / temporal (C4.5)** | `FWREG-015` + `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` | SEQUENCED: six-source anchor micro-pass **before** attaching the provisional temporal lens to Task-D; **full C4.5 pass after Task-D, before spine** | Already locked A-plus. Temporal does **not** replace Task-D. |
| **"Can OMNI run ON Palantir/Epic without surrendering authority?" (physical realization)** | `FWREG-016` (H1) | CONSUMED-INSIDE-TASK-D | H1 = deployment, not identity; do not choose HOST_ON before the comparison. |
| **Robotics / devices** | ownership table §4 (device-native control vs OMNI clinical authorization) | FUTURE-VERTICAL-FALSIFIER | **No separate robotics arc now.** |
| **Dentistry** | insurance/OOP fixture | FUTURE-VERTICAL-FALSIFIER | **No separate dentistry arc**; use as an Insurance/OOP falsifier. |
| **Plastics / medspa multi-site (C3.9)** | `v4_C3_9_…` shell (pending population) | REQUIRED-BEFORE-TASK-D (stronger if it carries the insurance/OOP-coexistence question) | Multi-site topology + cash-pay + insurance-capable surgery + vendors/inventory + partitioned/non-partitioned + deployment economics. |
| **Agent Runtime / Build OS** | `FWREG-010` (+ bounded C4.4-G2 bridge accepted) / Build OS `09`/`10`/`11` | SPINE-POSTURE-NOW / CONTRACT-LATER | Runtime BUILD deferred; map-depth only pre-spine. |
| **C4.4 / relay-governance** | CLOSED (C4.4 arc closed; relay-integrity rules landed `main` 2026-08-04) | done | Not reopened. |

---

## §3 — The genuine gaps (currently un-homed)

### §3.1 Insurance / Payer / Coverage / Out-of-Pocket — **the real gap** (new `FWREG-017`)
There is **no accepted active insurance/payer carrier**; Pharmacy explicitly reserved Insurance as a later deliberate falsifier. Insurance is **spine-shaping**, not a connector, because it changes *who owes whom* and forces a governed composition where the **care episode** and the **financing/coverage/settlement** lifecycles stay **distinct but linked**. Non-negotiable invariants to protect:
- a payer **denial** cannot become "care was not indicated";
- a **prior authorization** cannot become "payment is guaranteed";
- a **cash payment** cannot become "clinically entitled to treatment";
- **insurance approval is not the clinical decision.**

One operator may simultaneously carry: pure out-of-pocket · commercial insurance · Medicare/Medicaid · employer benefits · HSA/FSA · membership · financing · mixed cash-and-insurance episodes · covered reconstructive beside cash cosmetic · trial/grant/sponsor-funded care. Lifecycle nouns to keep distinct: negotiated price → allowed amount → estimate → adjudicated amount → patient responsibility; claim / remit / denial / appeal / refund / write-off / collections; eligibility; network participation; medical necessity ≠ payment authorization. **Bucket:** REQUIRED-BEFORE-TASK-D (Insurance/Payer/OOP **Gate-0**, consuming existing Care/Commerce/Federation/Identity/pharmacy work; use plastics/medspa, dentistry, hospital, pharmacy as fixtures — **no new vertical arcs**).

### §3.2 Vendor / counterparty residual — closure **receipt**, not a reopened arc
EVRUN-000012 already decomposed "Vendor Loop" into existing concerns and rejected a vendor god-object; Pharmacy solved one sophisticated counterparty subtype (external execution, offer projection, adapter contracts, custody/acceptance evidence, participation modes, return-path). What remains open: general suppliers, labs, devices/robotics, staffing, logistics, clearinghouses, insurers, banks/PSPs, AI/model providers, enterprise-software partners, patient-directed procurement, warranty/recall/remedy, vendor quality history, AP/COGS ownership. **Action:** a bounded **counterparty residual closure receipt** (small; can live inside Insurance Gate-0 or adjacent) stating solved / composes-from-existing / Task-D-must-test / remains-C5. **Do not resurrect a Vendor domain.**

### §3.3 Fleet deployment (50/100/1,000) — instance-factory construction brief
Task-D has the right machinery (config burden, specialist staffing, portability, lock-in, H0–H3, construction briefs) but has not yet proven the operating model. **Pre-spine we do not need 1,000 live deployments** — we need a *credible construction brief* for the instance factory (operator template · policy/config package · identity/role mapping · connector pack · source-estate migration/admission · residency/jurisdiction · training/go-live · readiness proof · release/eval gates · observability · incident response · upgrade/rollback · local-vs-shared-core · support/CS burden · economics/staffing at 50/100/1,000 · federation enroll/exit). Task-D decides *plausible or Palantir-consulting-economics*; the **Enterprise Bootstrap Steel Thread** gives executable proof **after** the spine.

---

## §4 — The 2030 / 2035 ownership posture to **test** (NOT canon)

**Strongest current framing: OMNI owns the *governed middle*, not every backend endpoint** — the middle is where care, business, authority, time, multiple principals, and consequences cross. This is a **hypothesis Task-D must test**, deliberately not promoted here.

OMNI-native where healthcare continuity/authority/relationship/liability-traceability/cross-domain-consequence is strategic; **buy/wrap/host/partner** for commodity or mature enterprise machinery; **maintain switching & exit proofs**; support multiple deployment postures. The two losing extremes: (a) *build every backend ourselves* → the enterprise incumbents beat us on generic machinery; (b) *outsource the governed middle* → OMNI becomes a thin wrapper Palantir/an AI platform absorbs. Winning posture = **selectively native, composition-sovereign.**

| External system | It may own | OMNI must own around it |
|---|---|---|
| Bank / PSP | settlement ledger, banking rail | payment intent, authority, episode linkage, reconciliation, evidence, dispute/remedy continuity |
| Accounting / ERP | GL, AP, AR, tax, native books | care-commerce meaning, patient/vendor obligations, cross-domain context + proof |
| Payroll / HRIS | employment + payroll truth | healthcare role, credential, capability, assignment, consequence-relevant workforce context |
| Email / calendar | mailbox + transport | purpose, consent, relationship context, obligation, response, continuity |
| Spreadsheet / doc system | original artifact | custody, source identity, completeness, lineage, extraction candidates, governed adoption |
| Insurer / clearinghouse | payer adjudication, native payer records | source-attributed coverage state, care/financing separation, prior-auth/appeal obligations, patient responsibility, continuity |
| Palantir / Databricks | data integration, ontology, runtime, deployment, analysis machinery | OMNI's healthcare constitution, authority, adoption, domain commit, care-business semantics, switching proof |
| OpenAI / Anthropic / models | model execution, generic agent capability | context selection, permissions, policy, action gates, evaluation, lineage, return path |
| Robotics / devices | device-native control + telemetry | clinical authorization, task intent, operational envelope, evidence, responsibility |

Candidate deployment postures to test (not canon): **OMNI-primary** (small operators) · **OMNI-composed enterprise** (Epic/Palantir/ERP/HRIS keep native ledgers; OMNI owns the governed middle) · **OMNI federated network node** (operator-sovereign instances exchange authorized context without surrendering local authority). This is how the same system serves a medspa, a 50-practice group, and a health system without pretending their backend ownership is identical.

---

## §5 — Minimum pre-spine sequence (bounded)

- **Step 0 — Task-D Input Sufficiency Gate (THIS map).** Bounded, mostly read-only classification + dependency graph. Invents no architecture. *(This document.)*
- **Step 1 — Close the minimum missing inputs:**
  - **Lane A — Care + GRR bounded closure receipts.** Not full contracts: freeze the invariants Task-D may treat as frozen + what Task-D may falsify + what stays unproven.
  - **Lane B — Insurance/Payer/OOP Gate-0** (`FWREG-017`), consuming Care/Commerce/Federation/Identity/pharmacy; fixtures = plastics/medspa, dentistry, hospital, pharmacy; **+ the vendor/counterparty residual receipt** (small, inside or adjacent).
- **Step 2 — C3.9 population** (plastics + medspa multi-site) — much stronger if it carries the insurance/OOP-coexistence question, not just cash-pay medspa.
- **Step 3 — Final Task-D population** — consumes Care+GRR receipts, Insurance/OOP, counterparty residuals, C3.9, Demand posture, EVRUN-000012, Pharmacy, C4.4 + Angle-B, temporal Phase-2 lens, Runtime/Build-OS map-depth, enterprise backend/connectors, fleet-deployment + sales/implementation briefs → answers ownership, Palantir-absorption, run-on-composite, deployment economics, H0–H3, and spine-admissibility → **§7 verdict.**
- **Step 4 — Full C4.5 Temporal pass** (six-source anchor micro-pass *before* attaching the provisional lens to Task-D; full pass *after* Task-D, *before* spine).
- **Step 5 — One final pre-spine sufficiency receipt** (yes/no, not an arc): every spine-shaping concern resolved/represented/explicitly-deferred? every open item has a destination? 2030/2035 ownership clear? Task-D has a §7 verdict? Time reconciled? Care/GRR/insurance/counterparty/deployment postures coherent? → **then write the spine.**

---

## §6 — Hard "do not do" guardrails
- Do **not** launch final Task-D population yet; do **not** create ten new arcs.
- Do **not** run a separate robotics arc or a separate dentistry architecture arc (dentistry = insurance/OOP falsifier).
- Do **not** build every connector before the spine; do **not** select Palantir/Databricks/OpenAI/Anthropic/payroll/ERP now.
- Do **not** create a universal Vendor Loop domain; do **not** let "backend" become one god-object.
- Do **not** finish all C5 contracts before the spine.
- Do **not** assume insurance is merely Commerce; do **not** treat an insurer's answer as clinical authority.
- Do **not** let external AI tools turn OMNI into a thin orchestration wrapper.
- **Bound the Sufficiency Gate itself:** it is a classification/dependency map, not a six-week archaeology dig. Closure receipts freeze invariants; they are **not** full contracts.

---

## §7 — What this changes / does not change
- **Changes:** replaces the prior "go straight into Task-D re-entry" relay with Step-0-first sequencing; mints the Insurance/Payer/OOP home (`FWREG-017`); records the sequencing decision (`D0THES-DEC-039`).
- **Does NOT change:** no checkpoint repoint (current checkpoint remains `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`); no read-graph #15 change; no controlling-plan change; no C4.4/relay-governance reopen; no new domain; no C5 contract minted; no architecture decided. Binds nothing (`GRD-036`).

---

## §8 — Registrations executed in this pass
- **`FWREG-017`** — Insurance / Payer / Coverage / Out-of-Pocket (mixed-financing) home; `operator_named_pending`, pre-spine, REQUIRED-BEFORE-TASK-D.
- **`D0THES-DEC-039`** — pre-spine sequencing decision (hold Task-D final population; Sufficiency-Gate-first; governed-middle composition-sovereign posture = posture-to-test, not canon); `review_required`.
- **Catalog row** for this map (New Artifact Completion).
- **Read-graph disposition:** `no_new_route_needed` — discoverable via the current checkpoint + FWREG + the Step-0 sequence; recommend the next (operator-controlled) checkpoint update point here as the pre-spine sequence home.

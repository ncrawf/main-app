# System map (three layers) — plan stub

**Status:** This file exists so the link in `AGENTS.md` works. A longer narrative (modules 1A–1N, appendices) may live with your team (Notion, Linear, etc.) or can be expanded here over time.

**Deferred (labs) —** implementation spec is **Appendix: Lab workflow** in this file (**§11–17**). It is not part of the main map sections below.

## Intent (short)

- **Layer 1 — Platform / compliance:** auth, RLS, capabilities (`lib/auth/capabilities.ts`, staff RLS, patient portal access), **`requireCapability` on sensitive staff paths**, and **`SensitiveAccessReason` on map-listed high-risk reads** (export, impersonation, cross-patient, bulk)—**stored and queryable** on `audit_events` next to the action, not a second story. **Minimum necessary in practice:** “any `staff_profile` can read the whole `patients` set in SQL” is an **unacceptable** steady state for real PHI; **tighten over time** via **assignment/queue, care relationship, or role-scoped read paths** so ops stay fast (assigned work, not census browsing). **Service-role API routes** are the **larger** bypass than RLS: every handler must **bind** identity + **one patient (or org rule) before** reads/writes. **One production staff identity** path; **no** parallel “admin” login that uses the **service role** for **human** browsing. For **material** **mutations and map-listed** **reads**, **failed** `audit_events` / capability audit = **block** the operation **or** **page**—not **log-only** silence. **Defensibility, not click-tax:** require **reason** on **map-listed** **sensitive** **reads** and **break-glass**; do **not** add **reason** to **every** **routine** chart open.
- **Layer 1 (money + events):** **Payment** **adapters** (per **1I.4–1I.5,** the **capability** **matrix** and **adapter** **layer**) are **idempotent** at the **integration** **boundary**; **verify** **inbound** **signatures** **/ auth** per **active** **PSP**; keep **metadata** to **ids** and **flags**, not **narrative** **PHI**. **`treatment_orders` and 1E retail order types** must support **queryable** lifecycle for **succeeded, failed, cancelled, and refunded** (or equivalent) so money state is not “success-only” in the schema; every **material** money or consent transition that affects the patient should be **recoverable** from `audit_events` and/or **append-only** `patient_timeline_events` (patient **clinical memory** and ops truth share this spine). For the **regulated** / **clinical** **DTC** product path, the default economic model is: **payment capture** for a **`treatment_order`** (or the clinical line on a **compositional** session) **after** **provider** (or org-policy) **approval** of the charge (common async-care pattern: pay only after approval). The design **rejects** “patient paid, clinically blocked for **standard** approval” as the **default** state machine; **exceptions** (refund, void, support override) remain **first-class** **states**, not the main story. **Internal** **financial** **semantics** **+** **payment** **rails** **+** **provider** **mappings** — **Section 1I** (not **a** **single** **vendor**’s **object** **model**).
- **Layer 1 (audit evidence):** `SensitiveAccessReason` on **gated** access must, when the map calls for it, be **storable and queryable** on the **same** `audit_events` the capability layer already writes so **defensibility** is **not** split between “feature worked” and “compliance said why.” **Read-side** (who opened chart / export / impersonation) is **as important** as **mutations** for “who touched PHI”; wire **sparingly** to **high** **signal** only.
- **Layer 1 (data architecture discipline — what lives where; foundational):** **Domain tables** are the **source of truth** for their concern: `patients` and chart fields (identity, allergies, conditions, medications, surgical history) per `1J / 1J.10`; `care_program`, `treatment_items`, `treatment_orders` (clinical case + Rx state); `commerce_orders` and 1I rows (money / subscriptions / refunds / disputes); `clinical_visits` (provider decisions, signoffs, progress notes); `patient_diagnostic_reports` + `patient_lab_observations` (vendor-issued lab data per Section 1L); **`patient_state_observations`** (longitudinal trackables — weight, BP, symptom scores, dose tolerance, sleep, side effects — per **Section 1M**); `messages` / `message_thread` (conversation transcript per Section 1G); `outbound_jobs` (notifications, kit shipments, vendor calls). **`patient_timeline_events` is the narrative / event layer ONLY** — typed pointers to meaningful lifecycle events with minimal context (ids + flags); **never** the storage layer for billing, orders, notifications, clinical decisions, lab values, longitudinal trackables, or any domain truth. Payload carries ids and minimal context, **never authoritative values**. **`audit_events` is the accountability layer ONLY** — actor, capability, reason, prior/new state pointers; not a metric store, not a notification log. **Hard rule:** rules, gates, dashboards, AI inputs, and reports read from **domain tables**, not from timeline payload text. Adding a domain concept means a domain table (or named additive metadata on an existing one), not a new `event_type` on the timeline.
- **Layer 1 (oversight, QA, leadership):** CMO, clinical leadership, QA/compliance, and operational leadership are **governed** by the same `requireCapability` + `audit_events` + `SensitiveAccessReason` (on map-listed broad/sensitive reads) model as other privileged access. They are **not** a `responsible_party` on the case (Section 1G); they **view** / **advise** / **escalate** only through that model — see **Section 1G (Oversight, not owners).**
- **Layer 2 (clinical signoff, lab, and therapy decisions):** **Defensible** “we acted on this lab” and “we changed therapy” may involve **`patient_diagnostic_reports` (§11)**, **`clinical_visits`**, and **`patient_chart_ai_reviews`**; the architecture **rejects** **inconsistent** **ownership** and **rejects** **treatment** **state** changes **by** ad-hoc SQL, one-off scripts, or **routes** that **skip** the **same** **server** **functions** the product uses. **Precedence (guardrail):** For **dosing, continuation, or new Rx** driven by a lab, **at least one** of: (1) a **`clinical_visits`** row (or **addendum**) that **references** the relevant **`diagnostic_report_id`**, with **prescriber** identity, **or** (2) a **treatment** / **`treatment_items`** state transition that is **valid only** when the **same** `patient_diagnostic_report` for that lab context has `reviewed_at` set and **applies to** the **intended** `treatment_item` / program **per product rules**. **1G.2** (clinical safety **enforcement,** not a CDSS) **requires** **active** **asserts** (contra-/dup-therapy/allergy/dosing **as** **the** **product** **defines) **in **the ** **same** **server** **path** **as ** **therapy** **authorization, **complementing **`loadPatientCaseSafetySnapshot` (1J.10) **—** **storing** **safety** **- ** **relevant** **data** **is** **necessary** ** and ** not **sufficient. ** **AI** (`patient_chart_ai_reviews` and related jobs) is **recommendation / draft** only; **it does not replace** (1) or (2) for **authorizing** therapy, **does not** **by** **itself** **clear** **Section 1G** **clinical** **blockers,** and **does not** **bypass** **permit** **asserts** — **see Section 1G** **(AI layer).** **`released_to_patient_at`** (Lab appendix) controls **what the patient can see**; it is **not** a substitute for **(1) or (2)** when the question is **“who medicinally authorized the care step.”**
- **Layer 2 (protocol gates, e.g. baseline lab before status):** **Gating invariants** (e.g. “cannot approve until baseline lab **reviewed**”) must use the **same** **audited** **mutation** surface (`requireCapability`, `audit_events`, patient case **actions**) as other clinical moves—**not** ad-hoc **DB** or **script** `UPDATE` that **bypasses** the gate. The map **allows** optional **DB** constraints **later**; the **architectural** bar is **one** **enforcement** path for **material** **treatment** transitions.
- **Layer 2 (messaging):** **Persistent** `message_thread` (**one** per `care_program` / health **category**), `message` (bidirectional **transcript**), `message_thread_participant` (patient, provider, staff; join/leave, **same** thread). **Source of truth** for the conversation: **`message_thread` + `message`**. **`patient_timeline_events`**: **projection** of chat activity (pointer-style `event_type` + `payload` with `message_id` / `message_thread_id` as needed), **not** a **second** **copy** of the **transcript,** and **not** a **rehydration** path for the thread. **Rejects** body-prefix routing, threads inferred only from `care_program` without a `message_thread` id, and timeline/support-queue-only as the full chat model. **Authorship vs gate:** **Rx, prescribe, and `treatment_items` state** still pass through **`clinical_visits` / `requireCapability` / case actions**; **a chat line does not create a valid Rx**. **`clinical_required`** (§1G) may **withhold the permit** to run those **actions** until a **turn** is **satisfied**—that is a **gating** rule on **the** **decision** **engine**, not **authority in free text**. **Assistive** **AI** (draft, triage) must **not** be treated as satisfying that turn or clearing a **permit** without the same human/audited **paths** in **1G** (see **Section 1G — AI layer**). **`audit_events`:** same `requireCapability` / Layer 1 pattern for staff- and provider-side messaging **actions.** **Detail:** **Section 1G.**
- **Layer 2 (continuation, adherence, re-engagement — no CRM product):** **Stage 6** and **1G** nudges are **not** a substitute for **adherence** and **dropout** signals. **1G.3** **names** proxy **adherence,** time/event **at-risk,** and **re-engagement** via the **same** rows (**`treatment_items.metadata`,** `stale,` **`clinical_required`,** **`outbound_jobs`,** **`patient_timeline_events`**) and **1G** worklist filters, **plus** **1G.3(i)** (**interaction → behavior / eligibility → next action,** not **send-only**); **1I** (subscriptions, cadence) **informs** billing and dunning, **not** “clinical **success = still paying**.”
- **Layer 2 (re-engagement discipline + AI, no second engine):** **Non-negotiable** (clinical / safety) vs **negotiable** (adherence, education, nudges) **is** a **separate** axis from 1G message **classification;** system **rules** in the **`outbound_jobs` / send** path **govern** frequency, suppression, and disengaged **state.** **AI** (same **1G AI layer** philosophy, same single engine in **Section 1N**) is **state interpretation** + **draft** outreach + **prioritization** **candidates**—**not** a standalone sender, **not** a throttle **bypass** (see **1G.3 (a)–(i)** in Section 1G, including **1G.3(i)** post-interaction **closed** **loop**).
- **Layer 2 (one AI layer, four role surfaces — no per-role AI stacks):** **Provider, ops, admin (leadership / QA), and marketing** surfaces all read from the **same** AI interpretation layer over the **same** data spine; **what differs** is the **capability-scoped input set** and the **output discipline at the boundary** (Section 1D / 1D.1 + the per-surface anchors). AI is **assistive and actionable** (suggests next steps that humans take through audited mutations) and **never** authorizes therapy, clears 1G permits, mutates 1I money state, replays integrations, or controls system behavior — see **Section 1N.**
- **Layer 2 (jurisdiction, when multi-state is real):** **Prescriber** license and **patient** jurisdiction must join on a **single** **declared** **“jurisdiction of care”** (or **equivalent** field) on `patients` (or a **verified** address child)—**not** mixing **ship-to** zip, **billing** **address**, and **ad-hoc** IP for **eligibility** depending on the screen. This is a **runtime** constraint across intake, provider assignment, treatment decision, order creation, and fulfillment routing (state-aware gates at each step), not a policy note stored only in docs. **A pharmacy rules engine is** out of scope; explicit runtime guards in existing 1G/1H/1D paths are in scope.
- **Layer 2 — Product domains:** care programs, treatment items, **first-class** `message_thread` + `message` (per `care_program`), orders/fulfillment, **retail catalog & discounts (supplements / non-Rx)**, patient dashboard, **billing** / **payment** **rails** (Section 1I), **abnormal and referral-style handoffs** on the **same** chart + timeline + visit objects (no second “clinical issues” product stack; see Section 1F and Lab appendix for boundaries). **Current responsibility** for “who must advance the case” is **not** a **global** flag on `patients`: it is **scoped to** `care_program` and, when a decision/hold is **treatment–specific,** to `treatment_item`—**exactly one** `responsible_party` at a time per that scope; **see Section 1G (Case ownership, canonical case state).**
- **Layer 2 (chart + uploads):** **Ingested** external artifacts: **de-dupe** via `source_dedupe_key` or **content hash**; **corrections** and **re-reads** = **new** **rows** (or `status=corrected` with **pointers**), not overwrites of stored raw files. **Lab** `patient_diagnostic_reports` may land **with** `lab_order_id` **null**; row stays **valid**; **`metadata.reconciliation`**, `pending_link`, or **quarantine** **until** **link** to **`lab_orders`**. If **`patient_lab_observations`** are **edited** after insert, **append-only** **audit** of the **delta** (`audit_events` + before/after), not **silent** meaning change.
- **Layer 2 (longitudinal “memory” in data):** **`patient_timeline_events`**: **unified** **chronology;** for **messaging,** `message` / `message_thread` = **bodies,** `patient_timeline_events` = **projection** (join, **not** rehydration). **New** `event_type` values follow a **single, documented naming scheme** (e.g. domain **prefixes**). **Substantive** **corrections** to **what** **occurred** (not **trivial** typo repair) are **not** represented by **silent in-place** edits that **erase** prior **meaning**—**norm** = **new** event **or** **supersession** with **pointer**; **implementation** must **enforce** for **clinical** `event_type` **classes**, not only “append-only in spirit.”
- **Layer 1 (patient identity, duplicates, merge, integrity):** One **canonical** `patients` row; **1J.1–1J.9** (precedence, L0–L4, duplicate, merge, shared contact) and **1J.10–1J.11** (gaps, `loadPatientCaseSafetySnapshot` *target* contract, runtime failure modes, abuse, additive — same tables/events/caps). **1J.10** is explicit: the **universal joined safety read** and **shared preflight** are **target / pre-scale must-haves**, **not** a claim about current `impl.ts` or every route **today** — see **1J.10**. **Same** `requireCapability` + `audit_events` model as 1E / Intent. **Hims-level bar (plan-level):** no high-risk clinical mutation is **defensible** without the **same** **safety context,** capability check, **reason discipline** where the map requires it, and **durable audit** — *policies in prose* are not sufficient without **one** **joined** read **on the server** for that action.
- **Layer 1 (retention + export, lean):** **Retention** and **portable** **export** of **clinical** **data** = **documented** **policy** and **as-automated-as-possible** **deletes**/holds; **default** to **no** **PHI** in **application** **logs** and **generic** **client** **analytics** on **staff** **tools**—if you can’t **operate** a **retention** job, you still **own** a **runbook** **answer** to “what is stored where.”
- **Layer 2 (analytics, diagnostics, KPIs):** **Performance,** **funnel,** and **revenue** **slices** are **read** **models** over **append-only** **event** and **row** data already in the architecture (**Section 1H**); **no** **separate** “analytics only” product table or **KPI** columns for reporting alone. **Funnels** use **defined** `patient_timeline_events` (plus **joins** to **orders,** `treatment_items`**,** `care_program` **),** not **ad-hoc** **dashboard** **only** **counts.**
- **Layer 2 (acquisition, attribution, external marketing — no growth stack in core):** **Ad** networks and **campaign** tools are **external;** the **application** is **source of truth** for clinical and money state and, when captured, for **longitudinal** joins from inbound **acquisition** context (source, campaign, entry) → **engagement** → **conversion** on **`treatment_orders` / 1E / 1I** → **retention** / **1G.3** / outcome signals — see **1H.4**. Marketing / growth users read **only** through the **named** **internal surface** in **1H.4.1** (route under `app/internal/(protected)/growth/**` + **`can_view_growth_aggregates`** + view contract — **not** raw DB, **not** `super_admin` browsing, **not** PHI exports). **Hard output constraints (1H.4.1 view contract, enforced server-side):** every read, dashboard, export, and **AI** output served to a marketing user is **aggregated, de-identified, non-reversible,** and **small-cell-suppressed (k-anonymity)** — **no** internal/convenience exception, **no** suppression bypass. **Optional** server-side or **edge** **emission** to ad platforms (hashed or platform-approved identifiers, **coarse** event types) must **not** **couple** to **`impl`**, 1G **permit**, or chart reads. **AI** here **analyzes** and **suggests** on **aggregates** (and de-identified slices) only; **AI may read deeper internal data, but its surfaced outputs must conform to the same four constraints** — and it does **not** **execute** campaigns, **call** ad APIs as an autonomous agent, or **export** PHI to vendors — **1H.4 / 1H.4.2.**
- **Layer 1–2 (operational traceability, distinct from “we logged an event”):** **Append-only** `patient_timeline_events`, **staff** `audit_events`, and **row** state on `treatment_orders` / jobs / webhooks are the **ingredients** for a **Hims-style** *seconds-to-answer* question — *e.g. “Why did this patient not get their meds?”* **Logging** the **same** fact in **two** **places** **badly** does **not** create **an** **answer;** you need a **queryable, cross-slice** **link** (correlation, stable ids, **dead-letter** and **reconciliation** **visibility**). **Section 1H** (operational traceability) names what **exists**, what is **partial**, and what is **target / non-optional** **before** **scale** — **without** a new observability **platform.**
- **Layer 1 (IT / platform vs patient-case ops):** **1G.1** names **who** **owns** the **next** **patient**-scoped **unblock;** **1H.1** names **rows** to **trace** a **meds** **story.** Neither **by** **itself** names **platform**-level **ownership** (webhook **infrastructure,** `outbound_jobs` **SLO,** **vendor** **outages,** **migrations,** **secrets** **rotation** — see **1H.2** for **owner → visibility → intervention → audit** at **system** **scope** **(Model C,** no **separate** **IT** **product** **stack**).**
- **Layer 1 (correctness when async work fails or repeats):** **Duplicated** **webhooks,** **retried** `outbound_jobs`, or **manual** **replay** are **normal** at **scale.** **1I.6** and **1H.1** address **idempotency,** **reconciliation,** and **side-effect** **co-location** for **money** and **jobs;** **1H.3** **adds** **drift** **detection,** **periodic** **recon** (queries + runbooks), and **the** **rule** that **authorizing** **mutations** **(prescribe,** **fulfill)** are **not** the **same** **as** **dumb** **inbound** **idempotency** **(use** **1G/1J** **+** **DB** or **idempotency**-**key** **on** the **action).**
- **Layer 2 (ownership, SLA, escalation next to traceability):** **1H.1** (what/when) is not enough for ops maturity without **1G.1** (who, by when, if missed). The 1G **tuple** already covers the **clinical** case line; **integration, payment, and identity** stops that block fulfillment must default to **ops** or **1J.9/1I**-appropriate roles with **at least one** **escalation** step (same Model C — no second workflow product).
- **Layer 1 (capabilities at scale, one login, many domains):** **Roles** in [`lib/auth/capabilities.ts`](../../lib/auth/capabilities.ts) are **coarse** bundles; **`ops_admin`** and **`super_admin`** aggregate **many** **risk** **domains** by design. **Model C** does **not** add a new auth system: **keep** `Capability` + `requireCapability` + `audit_events` + `SensitiveAccessReason` — see **Section 1D.1** and **1D.2** for **multi-capability** **users,** **2–3**-**person** **ops** **vs** **scale,** **time-** **boxed** **elevation** with **reason + audit,** and **what** is **non-optional** before broad **staff** / **multi-** **provider** / **cross-** **domain** **work** is **normal.**
- **Layer 3 — Deferred / later:** full LIMS-level lab coding, EHR **network** parity, class scheduling, waitlist engines, inventory POs to vendors—**named** in this map and **not** required for the core to stay coherent; a future **dedicated** warehouse/ETL is an **optional** **copy** **pipeline** and **must** **not** replace **Section 1H** as the **definition** of what may be counted and from which sources; not all items need to live in this repo.

## Repo anchors

| Area | Where to look |
|------|----------------|
| Capability gate (audited mutations) | `lib/auth/capabilities.ts` |
| Staff patient-case mutations (intended choke point) | `app/internal/(protected)/patients/[patientId]/actions.ts` → `lib/internal/patient-case/impl.ts` — **target:** every high-risk path **precedes** `impl` with `loadPatientCaseSafetySnapshot` + `requireCapability`; `impl` **treated as unsafe internals** (see **1J.10**) |
| **Clinical safety preflight (target contract)** | **`loadPatientCaseSafetySnapshot(patientId, actionContext)`** — **1J.10**; gathers **only** fields already **named** in 1G / 1I / 1J; **no** parallel “safety” schema |
| **Clinical safety enforcement (active, not data-only) **| **1G.2** (asserts at prescribe/approve) **+ **1J.10** **+ **1G** **permit; **`clinical_visits` **, ** **`treatment_items` / **`treatment_orders` **, ** **allergies** **, ** **labs** ** in **the **data **spine; ** not **a **separate** **CDSS. **| 
| **Operational anti-drift (mechanical + docs)** | **1J.10** (ESLint import allowlist, `AGENTS.md` bullet, `route` vs `actions` **review** rule, audit-return **gap** in `logAuditEvent`); not a new **system** |
| Internal staff APIs (orders, check-in review) | `app/api/internal/**/route.ts` |
| Product notes | `docs/patient-dashboard-v2.md`, `AGENTS.md` |
| Messaging in the clinical loop / behavioral SoT for “what is blocking, who moves it” | Section **1G** (case ownership, **canonical case state**, permit gating, workload read model) |
| **Assistive AI (chart / lab, not clinical authority)** | **Section 1G** **(AI layer)**, `patient_chart_ai_reviews`, `lib/ai/processChartAiReviewJob.ts` (when wired) |
| **Unified AI interpretation layer (one engine, role-scoped surfaces — provider, ops, admin, marketing)** | **Section 1N** — same data spine; capability-scoped per **1D / 1D.1**; **never** authorizes therapy, mutates state, or controls system behavior; outputs are **actionable** and feed back through audited mutations; (M) inherits **1H.4.2** hard constraints |
| **KPIs, funnels, derived performance** | **Section 1H** — sources: `patient_timeline_events` **+** row state; **no** free-standing metric columns |
| **Layer 3 full daily operator dashboard (~12–18 core metrics across growth, revenue, retention, ops, fulfillment, payments, friction/risk)** | **Section 1H.6** — aggregate queries/views over `patient_timeline_events`, `care_program`, `treatment_orders`, `clinical_visits`, 1I subscription/payment rows, fulfillment states, and `outbound_jobs`; optional aggregated `domain_events` summaries only |
| **Internal reporting layer (flexible filter/group/aggregate on top of metrics; no separate BI tool)** | **Section 1H.7** — reuses `1H.6` canonical metric definitions; safe dimensions only (product, program, provider, geography, new-vs-returning, cohort, subscription, fulfillment source, dropout stage, severity/status/classification, payment rail); capability-gated, server-side suppression, aggregate/PHI-safe outputs (CSV optional) |
| **Adherence, at-risk engagement, re-engagement, send policy / fatigue (not subscription-only; no CRM stack)** | **Section 1G.3** (incl. **(a)–(i)**: non-neg vs negot, `outbound_jobs` gate, **1G.3(i)** post-interaction closed loop) — **1G** Stage 6 + stale/T1–T3, **1H** / `outbound_jobs`, 1F, **1I** cadence vs **clinical** state |
| **“Why no meds?” ops / debugging (trace, not just events)** | **Section 1H** (operational traceability); join **`patient_id`** across `patient_timeline_events`, `treatment_orders`, 1I money signals, `outbound_jobs` payload, `stripe_webhook_events`, 1G/1J state — see **1H.1** |
| **Who must fix it / by when / if SLA missed?** | **Section 1G.1** — extends **1G** **tuple** to **integration** and **dead-letter**-class **failures;** no new **ticketing** product |
| **Provider supply, routing, and throughput (demand vs capacity, no workforce engine)** | **Section 1G.4** — explicit provider eligibility/routing policy, queue/load visibility, SLA/backlog escalation, and intake-capacity coupling via existing 1G/1H/1D fields and trace |
| **Multi-state runtime operations (jurisdiction as live gate, not paper policy)** | **Section 1G.4.1** — state-based provider eligibility enforcement, state-constrained routing, treatment/fulfillment state constraints, intake-state validation, and state-level backlog/capacity visibility via 1H |
| **Major exception handling (what failed, who owns it, what patient was told, how it closed)** | **Section 1G.5** — category taxonomy, first-response ownership, escalation thresholds, patient/internal communication discipline, and auditable corrective actions using existing queues/logs |
| **Provider workspace + admin/clinical leadership overlay (live operational queue, not reports)** | **Section 1G.6** — derived views over existing 1G/1H rows; provider sees own queue, admins see all provider queues with sort/filter, drilldown PHI gated by capability + reason discipline; controlled provider dimension (`1H.7.2`) for shared views |
| **Provider routing, availability, and assignment controls (no separate dispatch system)** | **Section 1G.7** — operational state (offline/signed_in/open_for_queue/paused/at_capacity/unavailable) on `staff_profiles`; eligibility (license/state/capability/Rx authority/program); admin + provider controls; derived routing over existing rows; lifecycle events on `audit_events` + `patient_timeline_events` |
| **Provider workspace v1 (live operational; not analytics)** | **Section 1G.8** — My Queue / My Status / same-day My Performance + patient context drawer, clinical messages inbox, lab review drawer, ops/staff messaging channel, grouped views, notifications via `1G.3`; derived from existing rows; PHI-minimum, capability-gated, all actions audited |
| **Clinician continuity, follow-up ownership, and rerouting (CoR per `care_program`; no work trapping)** | **Section 1G.9** — clinician-of-record vs task owner, continuity policy by item type, lab/refill/message follow-up routing, SLA fallback (continuity never traps), admin transfer + provider obligations; additive metadata on `care_program` and event payloads; controlled provider dimension via `1H.7.2`; reuses `1G.7` eligibility + `1G.7.5b` SLA enforcement |
| **Intake architecture (multi-pathway; deterministic, versioned, composable; no separate form builder)** | **Section 1K** — entry pathways (ED / TRT / GLP-1 / peptides / labs-only / supplements-only / wellness), layered modules, canonical question bank with versioning, answer reuse + freshness, contraindication screening, lab + at-home kit flows, deterministic scoring, provisional `treatment_plan_candidate`, today vs if-prescribed payment, deterministic provider submission packet, abuse/gaming detection; reuses `intake`, `care_program`, `treatment_items`, `treatment_orders`, `patient_diagnostic_reports`, 1I subscription/payment, `audit_events`, `patient_timeline_events`; additive schema only when reuse is insufficient |
| **Patient state observations (longitudinal trackables — first-class; not timeline-stored)** | **Section 1M** — append-only `patient_state_observations` table for living, time-aware patient signals (weight, BP, symptom scores, dose tolerance, sleep, side effects, etc.); intake / check-in / provider-prompt / message-input write here, never to `patient_timeline_events`; provider corrections append rather than overwrite; reads feed provider workspace, continuation gating, reporting, AI assist; **`patient_timeline_events` carries narrative pointers only — never values** |
| **Diagnostics + lab testing (foundation; not appendix)** | **Section 1L** — labs as core loop substrate (intake → commerce → fulfillment → result → review → release → display → care-program → retest → reporting); structured + semi-structured model (`patient_lab_observations` + `patient_diagnostic_reports.report_payload`); formal `lab_orders.status` state machine + substates; deterministic report→order binding with first-class orphan workflow; observation normalization; explicit ownership (`responsible_provider_id` / `queue_owner`); expiration + no-completion logic; hard retest loop; vendor partner adapter contract; patient-facing tone discipline; continuation gating tie-in; `diagnostic_source_type` extensibility for future imaging / external uploads / device data — Lab Appendix §1–§31 retained as implementation reference |
| **Money: refunds, disputes, subscriptions, reconciliation** | **Section 1I** — internal **financial** **state** + **adapters**; **PSP** **ledger** **for** **settled** **funds**; timeline + audit |
| **Multi-rail financial recon (not Stripe-only; no silent money drift)** | **Section 1I.9** with **1I.0–1I.6,** **1H.3,** `metadata.payment_rail.<provider>,` **1I.1** **vocabulary** (not vendor class names in routing) |
| **Identity: precedence, confidence, duplicate detection, merge, shared contact** | **Section 1J.1–1J.9** — `patients`, `patient_identity_verifications`, capabilities + `audit_events` |
| **Identity** **gaps,** **abuse** **(1J.10–1J.11)** | `loadPatientCaseSafetySnapshot` (target) + `patient_timeline_events`, `audit_events`, `patients.metadata`, 1G permit + 1I money flags — *no* **new** **architecture**; **tighten** **reads** **+** **events** |
| **Oversight** (CMO, QA, ops / dept leadership) | **Section 1G** (Oversight) **+** `lib/auth/capabilities.ts` + `audit_events` |
| **Coarse roles vs fine-grained risk domains; one login, multi-domain access; elevation** | **Section 1D.1,** **1D.2** — **Model C;** no new **auth** **product;** **early-** **stage** **(lean** **team) ** **vs** **Hims-** **style** **scale;** extends **existing** `Capability` / `SensitiveAccessReason` / **audit** |
| **IT / platform: webhooks, job backlog, vendor outage, prod access, migrations — not the same as 1G “who moves this case”** | **Section 1H.2** — system-level **owner → visibility → intervention → audit**; **reuses** caps + `audit_events` + **1H.1** **tables** |
| **Reconciliation, drift, idempotent retry / replay (no double money / ship / prescribe)** | **Section 1H.3** — extends **1I.6** and **1H.1** with **map-level** **checks** **(queries** + **process);** no **reconciliation** **engine** **product** |
| **Inbound attribution, source→outcome, external ad conversion I/O, marketing read access (no CRM/growth product in core)** | **Section 1H.4** — intake/`patients`·`metadata`, `care_program`·`metadata`, `patient_timeline_events`, `treatment_orders`, 1E sessions, 1I, **1G.3**; **optional** edge/adapter to ad networks; **AI** = **internal** analysis on **aggregates** only (not execution, not PHI export) |
| **Marketing / growth staff surface (the “where do I go?”)** | **Section 1H.4.1** — internal route under `app/internal/(protected)/growth/**` + **`can_view_growth_aggregates`** in `lib/auth/capabilities.ts` + **view contract** (aggregates over 1H, stratified by **1H.4** keys, small-cell suppression); **no** raw DB / `super_admin` shortcut |
| **Third-party verification readiness (LegitScript-style auditability posture)** | **Section 1H.5** — provider-decision attribution, intake-to-decision linkage, active 1G.2 safety-check evidence, Rx→fulfillment traceability, and role-gated audit operations using `audit_events` + `patient_timeline_events` + 1G.1 / 1H.1 (no separate compliance module) |

When you add a **new** staff mutation path, default to `requireCapability` and document the capability in `capabilities.ts`. **Subprocessors** (host, DB, email/SMS, payments, storage) that touch PHI or PHI-adjacent payloads: **signed** **vendor** terms and **data-minimization** in **logs** and **integrator** **dashboards** are a **Layer 1** **operational** **requirement**, not **optional** if you want a **defensible** posture.

---

## Section 1D: Staff capability, workspace, and access control (Layer 1D; `lib/auth/capabilities.ts`)

*This section is the **architected** home for the capability layer **already** **implemented** in the repo. It does **not** replace **1J.9** (high-liability **mutations** and **authority** **boundaries**) or **1E** (commerce **surface** → **capability** **defaults**); it **sits** **next** to them and answers **“can this org scale** **coarse** **roles** **without** **losing** **separation** **or** **audit**?”** **1D.1** = **risk-** **domain** **/ **grants** **(timeless) **. **1D.2** = **early-** **stage** **(2–3** **users) ** **vs** **scaled** **(multi-** **provider,** **multi-** **role,** **multi-** **state) **. **

### 1D.1 Pressure test: scale, risk-domain separation, and controlled flexibility (Model C)

*Problem:* The **code** already defines **roles** (`prescriber` … `super_admin` in `StaffRole`) and a **static** `ROLE_CAPABILITIES` map; **`requireCapability`** is the **enforcement** + **`audit_events`** hook; **`Workspace`** (`provider` \| `staff` \| `admin` \| `system`) **segments** the audit record only — **it** **does** **not** grant capabilities by itself. At **early** stage, **`ops_admin`** / **`super_admin`** give **broad** **access** in **one** **login**, which is **practical** but **risks** **(a)** **implicit** **mixing** of **clinical** vs **payment** vs **identity** **actions** in **stories** and **reviews,** **(b)** **nowhere** to **store** a **time-bound** “acting as” **other** than **narrative** or **a** **second** **account,** **(c)** **reason** **discipline** (`SensitiveAccessReason` — **in** `capabilities.ts` **as** **Phase 0m**) still **not** **uniform** on every **sensitive** **read** / **override** the **map** **cares** **about.**

| # | Question | **Exists today (repo-honest)** | **Partial / risk** | **Target (tighten only; same Model C)** | **Non-optional before “many people / cross-domain is normal”** |
|---|----------|--------------------------------|-------------------|----------------------------------------|-----------------------------------------------------------------|
| 1 | **Are roles too broad?** | Yes **by** **design** for `ops_admin` / `super_admin` **(many** **capabilities** per **one** `staff_profiles.role`). **Narrower** **bundles** for `prescriber`, `pharmacy_ops`, `billing`, `compliance_auditor`. | **Temptation** to put **everyone** **early** in **`super_admin`**; **fuzzy** org language (“admin”) vs **`StaffRole`**. | **Name** in **runbooks** **which** **role** **maps** to **which** **day-to-day** **(no** new **enums** **here**); **add** **capabilities** **(split** `can_…`) when a **surface** **warrants** **finer** **separation** **(see** 1E **refund** vs **catalog**). | **No** “we **don’t** **know** who **can** **refund** / **impersonate** / **override** **identity**” as **default**; **at** **least** **separate** **narrative** for **fraud/identity** **(1J.9** **+** **`compliance_auditor`** or **equivalent** **grants**). |
| 2 | **Clean separation: clinical / payment / identity / fulfillment / compliance?** | **Enforced** at **exercise** time as **separate** **`Capability`** **strings** (`can_prescribe` vs `can_refund` vs `can_advance_fulfillment`); **1J.9** lists **higher** **separation** for **identity/duplicate/fraud** **(must** be **in** `capabilities.ts`). | **Not** all **sensitive** **reads** require **`SensitiveAccessReason`** **yet;** **RLS** still **coarse** (Intent) — **so** **separation** is **stronger** in **app** **gates** than in **row** **reads**. | **Keep** **separation** in **capability** **(and** **future** **grant** **records)**, not **in** **UI** **skins** **alone;** **wire** **reason** on **map-listed** **surfaces** **(0m** **stance** **in** `capabilities.ts`). | **Impersonation,** **export-like** **bulk,** **identity** **override,** **merge** — **reason** + **audited** **capability** on **the** **path** **(1J.9** **already** **says** **it).** |
| 3a | **Can one user hold multiple capability sets?** | **One** `staff_profiles.role` → **one** **row** in `ROLE_CAPABILITIES` (`capabilitiesForRole`). | **Unions** are **not** a **first-class** **DB** **pattern** **today;** only **a** **wider** **role** (e.g. `super_admin`) **or** unmapped **(empty** **set)**. | **Target:** **one** **login,** **effective** `Capability` **set** **=** **role** **defaults** **∪** **org-granted** **add-ons** **(additive** `metadata` **on** `staff_profiles` **or** **a** small **`staff_capability_grants`**-class **table** **only** **if** **needed;** **no** new **IdP**). | **Reality** of **“support** **+** **billing** **+** **ops”** in **one** **person** **must** be **expressible** without **encouraging** `super_admin` for **all**. |
| 3b | **Temporary elevation?** | **Not** a **dedicated** **“session** **elevation**” **product** in **this** **file** **/** **snippet**; **1J.9** **alludes** to **break-glass** with **recorded** **reason**. | **“** **Elevated** **for** **this** **action**” **may** **be** **only** **narrative** in **tickets,** not **in** `audit_events`. | **Target:** **time-bound** **grant** **(expires** **at)** + **`reasonCode`** (reuse `SensitiveAccessReason` **or** **extend** **sparingly**) + **`granted_by`** in **metadata**; **each** `requireCapability` **on** an **elevated** **path** **logs** **capability,** **base** `role`, **elevation** or **grant** id in `audit_events` **metadata**. | **Any** **out-of-primary-domain** **action** on **a** **sensitive** **ladder** **(refund,** **merge,** **R-high** **clear)** **is** **either** **(a)** **covered** by **standing** **capability** **+** **reason,** or **(b)** **caught** in **review** as **a** **gap** — not **a** **silent** **norm**. |
| 3c | **Constrain by reason/audit without separate accounts?** | **Yes** **in** **principle:** `RequireCapabilityOptions.reasonCode` **+** **`audit_events.metadata.reason_code`**. | **Enforcement** “**required** **on** **this** **route**” **=** **partial;** see **0m** in **file** **comment. | **Target:** **Map-listed** **sensitive** **reads** **and** **overrides** **require** **reason;** for **mutations,** **deny** or **log-failed** per **Intent** is **already** the **architectural** **bar** | **Impersonation** and **compliance** **narrated** **paths** are **unacceptable** with **“no** **reason** in **metadata”** at **scale**. |
| 4 | **Risk: early user near-full access; dev/ops cross-domain; wrong-domain action?** | `super_admin` **wraps** most **capabilities;** same **audit** on **exercise;** no **per-row** **RLS** **separation** in **Postgres** **(Intent: coarse RLS).** | **Weakest** **link** = **human** + **broad** **role,** not **the** **gate** **code;** **forensics** need `audit_events` + **timeline** **(Intent).** | **Runbooks:** full **access** = **documented** + **periodic** access **review;** separate **break_glass** **narrative;** **operators** use the **same** `requireCapability` **—** **never** service **role** for **human** **browsing** (Intent). | A **reviewer** can **reconstruct** (from **audit**) **why** this **user** had **refund**/**impersonation**-class **exercise** in **a** **window** — not **from** **Slack** **only**. |

*Binding rule (not a new system):* **Case** “who **moves** the **1G** **line**” **(patient** **outcome)** **stays** **1G**; **1D.1** is **“who** **is** **allowed** **to** **press** **which** **lever**”** — **clinical** **decision** **capabilities** do **not** **substitute** for **1J** **identity** **/** **fraud** **queues** **or** **1I** **money** **without** the **right** `can_…` **(and** **1J.9** **where** **listed).*

*Cross-links (1D.1):* **1E** (commerce **defaults**), **1G.1** (**ops** vs **provider** for **work** **ownership**), **1J.9** (**break-glass** / **override** and **compliance** **authority**), **1D.2** (early **vs** scaled **; **same** **primitives) **, **Intent** (RLS, **one** **staff** **identity**, service-role **bypass** **discipline**).

### 1D.2 Early-stage operation vs scaled operation: pressure test (Model C; no new systems)

*A **small** team **(2–3 **staff **identities) **— **e.g. **founder, **in-house **or **part-time **provider,** **ops **partner** **—** **may** **use **one **login** **and **broad** **`ops_admin` **/ **`super_admin` **to **move **fast** **(provider **decisions,** **1G-** **shaped** **work,** **fraud/identity,** **fulfillment,** **money** **without **multiple **accounts** **) **. **The **map **rejects** **(i) **a **concrete **wiring** **of **“**one **human **is **responsible** **for **all **domains” **(that **is **1G **+ **org **narrative,** **not **a **`founder` **responsible_** **party), **(ii) **ad-hoc **bypasses **(service **role **browsing, **un-audited **DB **patch,** **mutations** **not **through **`requireCapability` / **shared **`impl` / **1J.10) **(Intent), **(iii) **hiding** **in **UIs** **as **a **substitute** **for **separate** **`can_…` **strings. **1D.2** **sits** **on **top **of **1D.1 **(same **primitives** **) **. **

| # | **Theme** | **Exists (2–3 users, today)** | **Partial / risk** | **Target (structurally same at scale)** | **Non-optional before multi-provider, many ops, multi-state** |
|---|-----------|-------------------------------|-------------------|----------------------------------------|---------------------------------------------------|
| **(1) **Early **flexibility **(one **login,** **multi-** **domain) **| **`ops_admin` **/ **`super_admin` **covers **broad** **levers; **1G **+ **1E/1I/1J** **separate** **narrative; **1 **staff **`staff_profiles` **per **person **(Intent) **. **| **Habitual **`super_admin` **for **all **heads; **fuzzy** **naming **(“**admin**”) **vs** **`StaffRole` **. **| **Name **which **levers **a **2–3 **user ****should** use **(runbook) **+ **tighten **grants** **(1D.1 **3a) **as **hires **land **. **| **At **least **narrative: **fraud/identity (1J.9) **+ **compliance-** class **separation; **not **one **mystery **key **. ** |
| **(2) **Multi-** **capability ****users** **| **Wide **role **= **one ****effective** cap **set; **no ****second ****account **. **| **“**I **wore **hats** **in ****Slack,** not **in **`audit_events` **metadata. **| **1D.1 **3a/3b: ****additive ****grants **(optional **`staff_capability_grants` / **metadata) **; **same** **login, ****union ****caps **(no ****new ****IdP) **. **| **A **2–3 ****person ****team’s ****pattern **(support+billing+ops) **is ****expressible ****without ****default **`super_admin` **for **everyone **(1D.1 **3a) **. ** |
| **(3) **Correct **paths **(no **hidden **shortcuts) **| **`requireCapability` **+ **`audit_events` **on **map-** **listed **mutations; **1J.10** **(target) **blocks **`impl` **direct **bypass. **| **Migrations, ****cron, ****internal** ****routes ****w/out ****same ****choke **(Intent **gap **list **in **1J.10) **. **| **All **material ****mutations ****through ****the ****same ****enforcement **(Intent); **1H.2: ****never ****human ****with ****service ****role. **| **`loadPatientCaseSafetySnapshot` **(or **equivalent) **before ****high-** **risk ****patient** ****actions; **1J.10 **governance **(ESLint, ****review) **. ** |
| **(4) **Separation **at **scale **| ****Separate **`Capability` ****strings; **1G **`responsible_party` / **1G.1; **1H.2** **= ****platform, ****not ****case **(Intent) **. **| **Coarse** **RLS, **broad** ****reads **(Intent) **. **| **Narrower ****roles, ****queue-** **/ **assignment-** ****scoped ****reads **(Intent **tighten **) **+ **1E **splits. **| ****Roles ****+ ****caps ****mapped ****to ******named ****jobs **(prescriber **pool,** **compliance, ****billing) **+ **1G **tuples **on ****every ****stuck** ****case **(not **inferred **as ****“**someone** **in **#ops **”) **. ** |
| **(5) ****Temporary ****elevation, ****cross-****domain **(one ****account) **| **`reasonCode` **+ **audit; **1J.9** ****break-****glass. **| **3b **(narrative ****only). **| **1D.1 **3b/3c: **time-****bound** **, **`granted_by`,** **in **`audit_events` **. **| ****Sensitive ****ladder **(refund,** **merge,** **R-high) **: **(a) ****standing ****cap** **+ ****reason, **(b) **or ****gap** **caught** **(not ****silent) **(1D.1 **3b) **. ** |
| **(6) “Founder-only” / single-fixer** | 1G does not introduce `responsible_party: founder`; 1H.2/1H.3 name platform **scope** and owner pool | **Only** one `super_admin`; 1G tuples **unset,** **SLA** N/A, **tickets = truth** (Intent) | 1G.1 + 1H.1/1H.2: every **stuck** class has a **role** **pool** (staff / on-call) + runbook, **not** one **named** human as **permanent** backstop | Multi-**provider:** assignee + jurisdiction (Intent L2); 1G + 1D cap splits; **access** **review,** not tribal `super_admin` access |
| **(7) **Non-** **optional **(scale ****threshold) **| **Model **C **+ **1G **+ **1J.9/1J.10** **(partial) **. **| **—** | **Same** **+ **1H.1/1H.2/1H.3 ****observable **(Intent) **. **| **(i) ****Distinct ****`can_…` / **roles** ****per ****risk** ****domain **(not ****UI-****only) **(1D.1 **#2) **(ii) **1G **+ **1H ****visibility **(iii) ****reason ****on ****map-****listed ****sensitive ****surface **(iv) **1J.10** **or ****equivalent ****preflight **(v) **jurisdiction/assignee **for ****multi-****state (Intent **L2) (vi) **1H.2/1H.3 ****runbooks **(vii) **1I.9** **recon** **(money) **(viii) **periodic ****access ****review, ****not** **`super_admin` **in ****perpetuity. **

*Pressure-test* **(concise):** **(1)–(2)** 2–3 user teams may use a **broad** role in **one** login; **1G** / **1E** / **1I** / **1J** still define **separate** **narrative** work — **not** a **second** account. **(3) ** “Shortcuts” = **Intent** **anti-** **patterns (service** **role, ad-hoc SQL, routes that skip **`requireCapability`) **, **not** a **blessed** **map** **path. ** **(4) ** At **scale, **tighten **RLS, **queue** **/ **assignee** **scoping, **`can_…` **splits, **jurisdiction **(Intent) **. ** **(5) ** **1D.1** **3b+** with **durable** **reason** **(no** **elevation** **product) **. ** **(6) ** If only **one** person holds **all** **keys, **= **1G.1+1H.2** **governance** **gap, **not** a **durable** **org** **state. **

*Cross-** **links: **1D.1, **1G, **1G.1, **1H.2, **1J.9, **1J.10, **1E, **1I, **Intent **(Layer** **1) **, **1F **(sites) **, **1J** **(jurisdiction) **. *

---

## Section 1F (expanded): Scheduling, locations, and encounter types

*Cross-links: [docs/patient-dashboard-v2.md](../../docs/patient-dashboard-v2.md) (today, `treatment_items.metadata` holds `next_checkin_at` / `next_visit_at` as placeholders until first-class tables exist).*

### Source of truth: calendar time vs `treatment_items.metadata` placeholders

- **Today:** `next_checkin_at`, `next_refill_due_at`, and `next_visit_at` in **`treatment_items.metadata`** are an **intentional bridge** for patient dashboard and “what’s next” without requiring a full scheduling product on day one.
- **When first-class `appointment` (or `scheduled_encounter`) rows exist** for a given intent, those rows—and a **constrained** `status` (e.g. scheduled, completed, cancelled, `no_show`, rescheduled, if you model that explicitly)—are the **authoritative** source of truth for **time-bound** workflow (reminders, capacity, no-show, reschedule **semantics**). **`metadata` dates** may **mirror** or be **backfilled** for read models that have not migrated yet, but the architecture **rejects** two **competing** owners of “what is the actual booked visit / deadline” in the long run: **one** wins per surface after migration.

### Why “allow for it now” in naming and data model (without building Mindbody yet)

- **Worth doing:** Use **stable, boring names** and **optional columns** (or nullable foreign keys) for things you may not use for two years: `location_id`, `modality`, `resource_id` (room or provider as bookable resource). **One** “default” in-person and one “virtual” row is enough to start; a second address later does not require a schema rewrite.
- **Not worth doing now:** The full product surface—multi-staff rosters, waitlists, packages, retail POS, deep calendar UX—that matches legacy clinic SaaS. That is **not** a migration problem; it is product scope. The map **names** the **contrast** between a **narrow** “appointments + locations + bookable services + basic commerce link” **surface** and **full** legacy **clinic-operations** depth, so the **architected** data model is not **mistaken** for a **complete** **Mindbody**-sized product in one go.

**Bottom line:** Yes—**future-friendly schema + thin first release** is reasonable. **Over-building** the UI and every edge case is not.

### Distinction: **scheduled appointment** vs **check-in** (recommended)

| Concept | Role | Calendared? | Typical link |
|--------|------|-------------|--------------|
| **Appointment** | A **time-bound, schedulable** event with a modality and (when relevant) a place, provider, or link. | Yes (start/end, timezone). | `patient_id`, staff/resource, optional `location_id`, `visit_modality` |
| **Check-in** | A **structured touchpoint** (symptoms, adherence, lifestyle, pre-visit questionnaire)—often **not** “a slot on the schedule.” | Usually **no** (async); could **optionally** reference a due date or a soft deadline. | `patient_id`, often `treatment_item_id` / `care_program_id`, workflow state, content payload |

- **Check-ins sit “lower” or at least **parallel** in the product hierarchy: they are **encounters of record** in the care timeline, but do not need a resource calendar. Appointments that **require** a provider at a time **do**.
- The codebase already orients “treatment check-in” as a **reviewable patient-submitted** flow (timeline + staff review). That is one **kind** of check-in; the map should allow other check-in *templates* (monthly, program-based) without conflating them with **booked visits**.

### Visit types and modalities (one controlled vocabulary)

Define a small, extensible set used everywhere (scheduling, display, future EMR export):

- **Modality** (how care is delivered): e.g. `in_person` | `phone` | `video` | `async` (no live session) | (optional later: `group`). In-app async chat = `message_thread` per `care_program`, not a `visit_modality` on `appointment` rows.
- **In-person** rows carry `location_id` and usually an **in-person** provider (or “rendering” provider) when that differs from the ordering/prescribing provider.
- **Phone / video** carry join instructions or telephony metadata (and privacy/consent where required)—not necessarily a physical `location_id`.

**Rule:** *Appointment* = modality + (optional) location + time window. *Check-in* = structured response + program/treatment link; modality may be `async` or omitted.

### Locations (multi-site when you are ready)

- A **`care_site` or `location`** table with address, timezone, and “active” flag supports **naming now** and **one row in prod** until you open a second site.
- Appointments (in-person) reference `location_id`. Virtual-only practices use **no** location or a single “telehealth / HQ” site for legal entity address only—product decision, not a schema blocker.

### Bookable services on appointments (in-person “xyz treatment” at a location)

**Yes — the map is intended to accommodate this:** a **patient-scheduled (or staff-booked) appointment** that **references a defined service** (e.g. a named in-office treatment or block time on a device) **at a `care_site`**, with the **nuance carried in data**, not ad-hoc text.

**Core link pattern (planning, not a single table mandate):**

- **`service` or `bookable_offering`** — what is being sold or delivered: name, default **duration**, **buffer** (turnover), category, **modality** (`in_person` here), whether a **deposit** or full **prepay** is required, default **cancellable until** policy, etc. This can be the same entity as a **catalog “service” line** in Section 1E (sellable) or a **view** of it—so Shopify-style “In-Office Treatments” and the **calendar** share one definition of truth.
- **`appointment`** (or `scheduled_encounter`) — `patient_id`, `start_at` / `end_at` (or start + **duration** from service), `location_id` (**required** for in-person), `service_id`, optional `primary_provider_id` or **bookable resource** (room, device, chair), `status` (scheduled → completed / cancelled / no_show), `source` (patient self-serve vs staff).
- **Nuance** (where it usually lives in serious systems):
  - **Per location:** which services are **offered** at which site, overrides for duration, **blackout** / special hours, **concurrent** capacity.
  - **Per provider (optional):** which services a **rendering** provider can perform, skills/credentials for regulatory display.
  - **Policies:** cancellation cutoffs, **late cancel** fees, **no-show** rules—either on the service, the location, or org defaults (precedence order is a product decision; plan for **override** flags).
  - **Commerce tie-in:** **deposit** or full payment (Section 1E order line) **linked** to the appointment so “paid / not paid / refunded” is auditable before the patient is in the chair.
- **Self-scheduling vs staff-only:** same **appointment** row; `created_by` + `source` distinguish **patient** vs **internal** booking; permissions decide who can book which service at which site.

**Beyond the minimal bookable-appointment data shape (still real product work):** real-time **availability** search, **waitlist**, **group** classes, **multi-resource** (provider + room) **scheduling**—the data model above still holds; those **algorithms and UIs** need not **exist** on day one of **persisted** `appointment` rows.

**Map decision:** In-person **bookable services** are **first-class** in 1F (time + place + service) and **connect** to 1E when money or catalog identity matters; they are **not** the same as **async check-ins** or **Rx treatment_orders**.

**Economic rails (boundary, not contradiction):** **1F** bookable / **1E** in-office and retail lines may use **deposit** or **prepay** before the scheduled time (“paid before the chair” is **auditable** on the **retail / service** rail). The **regulated** DTC **`treatment_order`** default in **Intent** is **PSP capture of funds after clinical approval** (v1 **may** use **a** **card** **PSP** **e.g. Stripe** **—** see **1I.4–1I.5**) — **a** **different** **parent** **order** **and** **state** **machine**. The map **rejects inferring** one from the other: **per-line rail** and **explicit** links to **`commerce_orders` vs `treatment_orders`**, and to **`lab_orders.metadata`** (§12) where applicable, keep both models **separate** without **merging** compliance **shape**.

### “Mindbody-like” effectiveness, EMR, and this codebase

- **In-app experience:** searchability, self-serve reschedules, confirmation/reminders, waitlist, provider availability—these are **product and integration** work. List them as a **module** (Scheduling & engagement) without assuming a **monolithic** ship for every sub-capability.
- **EMR connectivity:** treat as a **Layer 1 / integration boundary**—outbound: appointment created/updated, clinical document references; inbound: (optional) availability or eligibility if you ever sync with a hospital calendar. The **source of truth for the chart** remains your product’s clinical data model; the EMR is a **downstream** or **peer** system with explicit sync rules and idempotency (jobs, not silent dual-write everywhere).

### Architectural closure (when you persist scheduling)

- **Appointment (or `scheduled_encounter`) and check-in are different persisted shapes:** do not store “booked visit” and “async form workflow” in the same **table** in a way that conflates **resource time** and **form state**—**join** them to `patient_id`, `care_program_id`, and `treatment_item_id` as needed, but keep **separate** core entities as described above.
- **State:** appointment-like rows carry **constrained** lifecycle **in the database** (enum/check, not ad hoc free text) for the operational set you support (e.g. scheduled → completed / cancelled / `no_show`); check-in flows carry their own **submitted / reviewed** (or equivalent) **in schema** as those tables exist.

*This section is a living part of the three-layer map: Layer 2 product domain, with integration hooks to Layer 1 (auth, audit, idempotent jobs) and a clear line between “thin v1” and a **Mindbody-like** class-scheduling / waitlist / POS surface (which is **wider** product, not a prerequisite to **correct** appointment rows).*

**Decision (planning, v1 check-in scope):** Check-ins may be **treatment- or program-linked** *and* **patient-only (generic / wellness / visit-prep)** from day one. The data model should allow `care_program_id` and `treatment_item_id` to be **nullable** so a check-in is not forced to sit under a program when the product only needs a patient + template + due policy.

### Appointments, check-ins, and messaging (distinct shapes)

| | What it is for (patient + staff) | Why it is not “the same as an appt” |
|---|----------------------------------|--------------------------------------|
| **Appointments** | A **committed time** (and usually a provider/calendar or join link). Operational: scheduling, reminders, no-shows, capacity. | **Consumes a slot** or a live session. Different SLAs and analytics than a form. |
| **Check-ins** | A **structured response** or workflow (adherence, symptoms, questionnaire)—often with **no** fixed live time. | **Data capture + review** over “being there at 2:15.” Many don’t need a bookable resource. |
| **Messaging** | **`message` + `message_thread`** = SoT; **`patient_timeline_events`**: projection, no transcript duplication, not rehydration; **one** `message_thread` per `care_program`; `message_thread_participant`. | Unbounded, **index** / **search** `message` rows, not the appointment or check-in row. |

A **unified** “what happened” read model = **query / `VIEW` / app join** over `patient_timeline_events` (including **messaging** **projections**), `message` + `message_thread` (source of truth for **transcript**), and **`appointment`** and **check-in** (or `form_submission`) as they exist. A **physical** `care_interaction` table is **optional** and only for integration/reporting that needs one surrogate id. **Map decision (referral / external handoff, without a referral product):** **“Referral out”** and similar handoffs are represented in **`clinical_visits` narrative (and addenda as designed)** and **append-only** `patient_timeline_events` with a **typed** `event_type` and payload. A **dedicated** `referral` **table** is **architecturally optional** and only justified if the product **requires** closed-loop **state** and **status** beyond what visits + timeline carry.

### Telephony: org numbers, in-app control, call logs (not personal phones)

**Intent:** When staff must **call** a patient, the work happens **from the app**, using **clinic- or org-owned** phone numbers (one main line or many—e.g. department, location, or use-case–specific DIDs), **not** provider personal cell or personal caller ID. You want **provability**: when the call happened, duration, outcome, who initiated, and (where allowed) recording—so you can show “it got done” for ops, QA, and compliance (subject to law, consent, and your BAA with the **telephony / CPaaS** vendor).

**How this usually works (architecture, not a product promise):**

- A **CPaaS / voice API** (Twilio, Vonage, Bandwidth, Amazon Connect, etc.) provides **outbound and inbound** voice, **caller ID** selection from **numbers you own and verify**, and **webhooks** for call state: `initiated` / `ringing` / `in-progress` / `completed` / `no-answer` / `failed`, with **start time, end time, duration**, and call SID.
- The **app** is the **control surface**: e.g. “Call patient” opens a **browser** or **softphone** experience **or** places an outbound call via the API, always attributing the leg to a **staff user** and a **patient** in your database. The patient sees the **clinic** number, not a personal number.
- **“Whole system, not one number”:** The vendor supports **number pools** and many DIDs. Your map should model a **`org_phone_number`** (or `voice_identity`) table: E.164, label (main, support, per-site), and rules for which number is used for which workflow. A **first** **cut** can still use a **single** **outbound** number; the schema can allow **many** before **full** per-workflow **routing** exists.
- **Logging:** Store a **`voice_call`** (or `telephony_session`) row: `patient_id`, `initiated_by_staff_user_id`, `direction` (inbound to main vs outbound from app), `provider_call_sid` (or equivalent), `from_number`, `to_number`, `started_at`, `ended_at`, `duration_sec`, `status`, optional `recording_url` and **consent flags**, optional link to a **`message_thread`** or **`care_interaction`**. The vendor’s CDR is **authoritative** for time/duration; your row is the **source of truth for “who, which patient, why, in our product”**.
- **Recordings:** If used, they need **jurisdiction-appropriate** consent (two-party vs one-party), **retention** policy, and **access control** in the app. Treat as PHI in storage (same care as documents).
- **In-app “contained”:** The goal is **no workflow** that **requires** calling from a **personal** device for work that should be in the system. (Emergency break-glass may still be human; policy is yours.)

**Layer placement:** **Layer 1** — telephony delivery, webhooks, secrets, vendor BAA, audit hooks. **Layer 2** — which UI surfaces (patient chart, follow-up queue) can initiate calls and which roles (`requireCapability`); how calls attach to the **engagement** model and **timeline**.

**Repo note (today):** [lib/notifications/smsTwilio.ts](../../lib/notifications/smsTwilio.ts) is a **placeholder** for SMS; voice would be a **parallel** integration in the same family (often same vendor), not something you invent in Postgres alone.

**Deferred in planning until you pick a vendor and calling UX:** browser WebRTC vs PSTN click-to-dial, queueing for a call center, and cross-location routing—the **data model** for numbers + call logs can stay stable even as those product pieces grow.

---

## Section 1E: Commerce, catalog, and “non-dumbed-down” retail (supplements & non-Rx)

**Reference:** Bloom Health **Shopify Admin** screenshots (orders, products, inventory, collections, discounts, customers, shipping labels, channels, POS, Sesami booking app), April 2026. Keep a copy in-repo under `docs/reference/` or `docs/assets/` if you want permanent links. The goal is **not** to clone Shopify in one release; it is to **name every domain** your screenshots imply so the architecture does not collapse into “a lite catalog with a buy button” by accident.

### Design principle: one patient, two ways to pay (clarity)

- **Clinical / Rx and regulated path** — already represented by **`care_programs` → `treatment_items` → `treatment_orders`**, prescriber workflow, **1I** **payment** **(v1: primary PSP e.g. Stripe)**, fulfillment states. *Keep this as the clinical commerce spine* (and **Intent**: default **DTC** capture **after** approval on this rail, where that product applies).
- **Direct retail / supplements & non-Rx** — a **separate** **parent** order domain: **this map** uses **`commerce_orders`** as the **name** for the **1E** **basket** / **settlement** **root** (exact table name in code may be e.g. `shop_orders`); it is **not** an alias for “any payment.” **Standalone** **`lab_orders`** that are **funded** through **the shop** carry **`metadata.commerce_order_id` → that parent** (see **§12**) for **idempotent** creation. **`treatment_orders`** is **not** the **retail** **parent**; **compositional** checkout still **segregates** **lines** (previous subsection).

*Implementation choice (later):* e.g. `shop_products` + `shop_orders` vs a unified `orders` with `order_kind`—either works if **rules, RLS, and permissions** are explicit. This document only requires: **no silent conflation** of clinical orders and retail orders.

**Compositional checkout (architectural rule):** If a **single** customer-facing “order” or **session** **combines** a **clinical** line (`treatment_orders` or prescribed/regulated work) and a **1E retail** line (supplement, OTC, device), **each line** must carry an **unambiguous** **rail** or `order_kind` / line-type that **segregates** **settlement, fulfillment, RLS, and compliance** (who may see it, how it is taxed, how it is fulfilled). The architecture **rejects** one **undifferentiated** `orders` row (or one basket id) that **requires** business rules to **infer** whether a line is **Rx-like** or **retail**—inference is how prescribing and cash-and-carry **get merged by accident**.

### Domain checklist (inspired by the Shopify screenshots — plan for the full domain; ship incrementally in product)

| Domain | What “not forgetting” means | Notes |
|--------|----------------------------|--------|
| **Catalog** | Product, **variants** (size, count), **status** (active/draft), **categories**, **tags**, **vendor**, **collections** (manual + rule-based), rich content, **channel/visibility** (who can see it where) | Services (e.g. in-office, deposits) can be **sellable line types**; still schedulable via Section 1F. |
| **Inventory** | Per-**location** (when you have sites): unavailable / **committed** / **available** / on-hand, SKU, oversell policy, **transfers** between sites, (later) **purchase orders** to vendors | Committed = sold-not-shipped; aligns with your **fulfillment** language elsewhere. |
| **Orders** | **Create order** (staff), list/detail, **payment status**, **fulfillment status**, line items, refunds, order timeline / notes | You already have internal order surfaces in motion—extend with **retail** line item types. |
| **Shipping & labels** | Carrier choice, **rates**, **label purchase**, batch print, **tracking** back to the order, performance metrics (even if v1 is “enter tracking by hand”) | “Shipping labels” UI is a *phase*; the **data model** should still store carrier + service + label cost if you need margin math later. |
| **Discounts** | **Code** vs **automatic**, amount off order vs product, **Buy X get Y**, **min purchase**, **usage limits** (global + per customer), **date windows**, **combination** rules, performance (“used N times”) | A **discount engine** (even simple at first) belongs in the plan, not a single hardcoded coupon table. |
| **Customers (CRM)** | Spend, order count, segments, **timeline** of contact (orders, SMS, notes), **tags**—mapped to **`patients` + shop profile** as needed | Single human: **one patient record**; “customer” in commerce is a **view** of that person’s buying history. |
| **Marketing / access** | Opt-in flags (SMS, email), campaign hooks—tie to **consent** and Layer 1 policies | |
| **Sales channels** | In-app, future **POS** at a location, online—**visibility** rules (which collections/SKUs per channel) | Screenshot “excluded from channel” = **policy** you can replicate as metadata. |
| **Finance & reporting** | Revenue, cost, margin (cost per item in Shopify), tax—**separate** from *clinical* billing in reporting | |

### Who controls which surface (RBAC — not “any staff does everything”)

Map features to **capabilities** in [`lib/auth/capabilities.ts`](../../lib/auth/capabilities.ts); extend the enum when you add commerce admin screens. **Default policy (planning stance—tune to your org):**

| Surface | Suggested control | Rationale |
|---------|-------------------|-----------|
| **Catalog: create / edit / archive product** | **Catalog managers:** `ops_admin`, `super_admin`; optional **`can_manage_catalog`** for trusted merchandising staff | Prevents well-meaning edits to pricing/tax that break margin or compliance. |
| **Inventory: adjust on-hand, transfers** | `ops_admin`, `super_admin`, and roles you assign **`can_manage_inventory` or extend `can_advance_fulfillment`** (split if needed) | Pharmacy/ops are often closer to **stock truth**; narrow if risk of theft/errors. |
| **Discounts: create / edit / expire** | **Tighter:** `ops_admin` + `super_admin` *by default*; *not* every `customer_support` | Discounts are **revenue and abuse** risk; your screenshots show many rules—**admin gate** matches how serious shops run it. |
| **Orders: create order (phone sale), cancel, issue refund** | `customer_support` + `ops_admin` + `super_admin` with `can_refund` / `can_create_manual_order` (add if missing) | **Regular staff** may take orders only if you **explicitly** add a role + capability. **Write-off** balance: **`can_write_off_balance`** (or `can_refund` where org maps write-off to same **gate**) — **Section 1I**. |
| **View-only: catalog, orders** | Wider: **clinical** roles for **recommending** (“what we carry”) without edit—**read** catalog, **no** price edit | |

**Map decision:** “Regular staff” vs “admin” is an **org policy** implemented via **roles + capabilities**, not a single boolean. The plan should list **default** ownership; you can **widen** support staff discount creation later with a **capability** flip + audit. **Map ↔ DB:** **capabilities** and **`requireCapability`** are the **product** **enforcement** for who may **act**; **coarse** **RLS** in **Postgres** (all staff see all patients) is **not** a substitute for **“minimum necessary”** for **human** orgs at scale—**tighten** to **role**-aligned **read** or **queue-scoped** **work** when you **graduate** from **MVP** **trust** model.

### Integration with existing architecture (must-haves, not nice-to-haves)

- **Patient 360** — A patient profile joins **`patient_timeline_events` (projection)**, `message` / `message_thread` (chat **transcript,** SoT), and **retail** orders/spend in one **UI** layer.
- **Timeline and commerce signals** — Optionally emit **high-signal** `patient_timeline_events` for: `order_placed`, `fulfillment_shipped`, and similar (not every ecommerce micro-event on the **clinical** timeline by default; **noise** erodes *patient memory* and staff **review** surfaces).
- **Scheduling (1F) + commerce** — A **treatment deposit** or **in-office service** line item should **link** to an **appointment** or to a `care_site` for fulfillment/pickup—**native** in your data model, not a hidden spreadsheet join.
- **Primary-PSP linkage + 1I payment state** — Reuse **`patients`** / billing-profile **linkage** **to** **the** **active** **PSP** **(v1: e.g. Stripe** **customer** **id** **in** `metadata` **or** **equivalent** **)** for **retail** when the buyer is known. **Adapters** **and** **webhook/HTTP** **handlers** are **idempotent** **(1I.6)**; for **each** order type (`treatment_orders` and 1E retail), **non-success** outcomes (failed, cancelled, refunded) must be **first-class, queryable states** in the same tables that record success—**UI** may be minimal **early**; the **data model** must not assume **only** paid+shipped.

**This section is Layer 2 + Layer 1 (RLS, audit, payments).** It **rejects** a future where **catalog** and **line typing** are **rebuilt** under pressure because v1 only stored “happy path” rows, and it **rejects** **silent** merging of **clinical** and **1E** rails in **schema** or in **inferred** checkout behavior. **Financial state machines and invariants (refund vs cancelled, disputes, write-off):** **Section 1I**.

---

## Section 1G: Messaging, escalation, and the clinical loop

**Map vocabulary (Layer 2 only):** **Stage 2 — Decision** = `treatment_items` / `treatment_orders` / **prescribe–approve** moves and **lab**–gated **permits**; **Stage 4/5 — Exceptions** = support, **fulfillment** friction, **partner** failure, **refund/override** paths; **Stage 6 — Continuation** = refill, **monitoring**, next **check-in** / **visit**. **1G.1** = **queue/SLA/escalation;** **1G.2** = ** **clinical** **safety** **(active** **enforcement,** ** not** **CDSS) **. **1G.3** = **continuation,** **adherence,** **re-engagement,** **notification** **discipline** (non-neg vs negot, `outbound_jobs` gate, disengaged stop, state-aware **AI** assist **within** **rules,** **1G.3(i)** **post-interaction** **closed** **loop;** **not** “subscription = retained,” **not** a second **AI** **engine). **1G.4** = provider supply, eligibility, deterministic routing, throughput/SLA, and backlog escalation (**no** separate workforce product). **1G.5** = major exception handling and real-world failure resolution (category ownership, escalation, communication, and auditable closure; **no** ticketing product). **1G.6** = live operational queue surfaces — provider workspace + admin/clinical leadership overlay (derived views over existing rows; not reports). **1G.7** = provider routing, availability, and assignment controls — operational state (offline/signed_in/open_for_queue/paused/at_capacity/unavailable), eligibility rules, admin/provider controls, derived routing, lifecycle events (**no** separate dispatch system). **1G.8** = provider workspace v1 — minimal operational surface (My Queue, My Status, same-day My Performance, patient context drawer, clinical messages inbox, lab review drawer, ops/staff messaging, grouped views, notifications, recent activity); no analytics, no peer comparisons. **1G.9** = clinician continuity, follow-up ownership, and rerouting — clinician-of-record (CoR) per `care_program` with continuity-aware preference for labs/refills/messages; **never** traps work (SLA fallback, urgent override, eligibility hard gate); additive metadata only, **no** mini-practice or per-patient global owner. ** **Messaging** **drives** **permit to advance**; it does **not** **replace** **`clinical_visits`**, **`patient_diagnostic_reports.reviewed_at`**, or **case** **actions** (see Intent, Lab appendix).

### Case ownership (responsibility — not global per patient)

- **Scope:** **Never** a **single** "current owner of the person" on `patients`. **Responsibility** is **per** **active** **case** unit: `care_program` is the default line (incl. one `message_thread` per program). When a hold, permit, or gating question is **treatment-specific**, **scope** `treatment_item` (fields under that row's `metadata`, or a single namespaced key in `care_program.metadata`). **Concurrent** programs per **patient** (e.g. ED + GLP-1 + HRT) = **independent** `responsible_party` per `care_program_id` — not merged in UI or logic.
- **Rule — one current owner per active case:** For each in-scope `care_program` or, when the product scopes it, `treatment_item` **in** an **active** **workflow,** at any time there is **exactly one** current `responsible_party` ∈ { `patient`, `provider`, `staff` (ops) }. **Optional** `responsible_user_id` → `staff_profiles.id` when party is `provider` or `staff`; omit when `patient` is the actor.
- **Storage / derive (no new tables):** Authoritative field(s) in `care_program.metadata` and/or `treatment_items.metadata` (e.g. `case_owner: { party, user_id? }`); `message_threads.metadata` may **mirror** the program. **One** **server** **code** path updates on transitions; UI, queues, and permit **assert** use the same value.
- **Invariants — unfulfilled / conflict:** Stale = SLA breach on a required **turn** → 1G escalation (nudges, **not** a second concurrent "co-owner" on the same scope). The system does **not** allow two **competing** `responsible_party` values for the same `care_program` / `treatment_item` scope; if state splits, **reconcile** in one **transaction** (single writer).

### Canonical case state (per `care_program` — not global, single read model)

- **Answer it must always give (same scope as ownership):** **(1)** which **map Stage (1–6 / product subphase)** the case is in, **(2)** **what** **blocks** the next **permit** or next **operational** step, **(3)** **who** **must** act next (`responsible_party`, optional `responsible_user_id`) — as **one** **consistent** tuple, **recomputed in server** from existing rows (or the **one** **cached** snapshot in `care_program.metadata` / per-`treatment_item` metadata **updated only** in that same mutator, **not** a **second** **story** elsewhere).
- **SoT rule (no competing narratives):** **No** “status string A” in the UI, “status B” in a queue, and `case_owner` = C. **Blocker** + **stage** + **`case_owner`** are **one** function output (or **one** `metadata` blob written by the same function). **If** a cache exists, it is **invalid** **unless** it matches **recompute** of **messages,** **permits,** `treatment_items` **/ orders,** and **lab** (Lab appendix) **for** that scope.
- **Primary blocker (illustrative enum, not a new table):** e.g. `none` | `messaging_awaiting_patient` | `messaging_awaiting_resolution` | `lab_awaiting_patient_action` | `lab_awaiting_provider_review` | `payment_or_fulfillment` (Stage 4/5) | `internal_ops` | `continuation_due` — product names the **set**; **enforcement** stays in **permit** **assert** + **1G** as today.

### Ownership matches state (no contradictions; parallel cases stay independent)

- **Consistency:** **Cannot** be “awaiting patient to unblock a `clinical_required`” while `responsible_party: provider` **for** the **same** `care_program` (or `treatment_item` scope) **except** a **transient** **in-flight** **sub-second** handoff. **Resolve** in **one** **transaction** when the **outbound** message **or** `messaging_hold` is written.
- **Per-patient, multi-program:** Each **`care_program_id`** has its **own** canonical tuple; **ED + GLP-1 + HRT** do **not** share a **single** “case state” row.
- **Multi-`treatment_item` in one program / one compositional “order” (1E):** Each **clinical** line is a **`treatment_item`**; **separate** **treatment_item-scoped** blockers/owners are **default** (three active meds ⇒ three **sub-states**). If the product **chooses** a **single** program-level banner, store **one** **rollup** in `care_program.metadata` **and** a **list** of **per-item** blockers/owners in **`treatment_items` metadata** so **permit** checks on **a** line **do** **not** **merge** by accident.

### Concurrent programs, cross-sell, and mixed lines (e.g. GLP-1 + ED)

- **One “case” vs multiple tracks — locked rule:** The **architectural** unit for **permit,** **blocker,** `case_owner` / `responsible_user_id`, and one **`message_thread` per `care_program`** (Intent) is **`care_program`**, with `treatment_item` when a hold is **line-specific**. There is **no** v1 “super-case” id above that. **Independent** therapeutic **paths** (e.g. GLP-1 vs oral ED) are **not** one **merged** case for **state:** they are **concurrent** `care_program` **rows** on the same `patients` **row,** each with its own `treatment_item`(s) and order lines. **Or** the org may use **one** `care_program` with **two** `treatment_items` in the same checkout; **enforcement** still does **not** **merge** one **shared** `responsible_party` for both lines (see *Multi-`treatment_item`* in **Ownership matches state**).
- **Scenario (1) GLP-1 intake + ED cross-sell, same session / checkout —** **At least two** clinical spines in **one** compositional basket (1E: **separate** line rails, not a single undifferentiated state). **Typical default** for two indications: **two** `care_program` **rows,** *or* **one** `care_program` with **two** `treatment_items` if the product **buckets** that way. In **both** cases, every **permit,** **blocker,** and **1G** turn is evaluated for the **relevant** `treatment_item` and that row’s `care_program_id` / `message_thread`, not as one “awaiting” on the **person**.
- **Scenario (2) GLP-1 in review, then a separate ED order (first still open) —** Add a **new** (or **additional**) `care_program` / `treatment_item` and `treatment_order` line for ED; it runs **in parallel** and does **not** **replace** GLP-1 **ownership** or **blocker** state. **v1: no** routing **engine;** `responsible_user_id` is **independently** set (or null) per **program** (or per `treatment_item` if the product scopes that way). The **map** does **not** require the **same** **clinician** for both; the org may **default** the **assignee** in **app** code (e.g. **last** treating `staff_profiles.id` or **onboarding** **prescriber**), but that is a **suggestion,** not **schema-locked** and **not** a **new** table.
- **What is shared vs what stays separate —** **Shared** (read **across** programs for safety): **one** `patients` row, **chart,** **allergies,** med **history,** and **observable** labs (e.g. `patient_diagnostic_reports` and lab order links per Lab appendix) for **eligibility / contraindication** checks. **Per-program / per-line, not merged:** `case_owner`, `primary_blocker`, `clinical_required` / `messaging_hold`, and **Stage** 2/6 **permit** gating.
- **Cross-program progression (v1):** **No** `care_program` may **block** **another** `care_program`’s **progression** **unless** a **shared** **clinical** **constraint** is **explicitly** **modeled** (dedicated assert + data — **not** “same patient, so wait” by **default**). **There** is **no** such **cross-**`care_program` **withhold** in **v1;** read **the** **shared** **chart** / **labs** for **safety,** but **separate** **permit** **/ owner** / **1G** **turns** **per** program (or per `treatment_item` when scoped) **stay** **independent.**
- **Provider workload —** **N** open `care_program` rows (or **M** `treatment_items` **across** them) implies **N** (or **M**) **separate** worklist lines; the **same** `patient_id` can **repeat**; **default** = **not** a **single** work row for the **patient** as a whole. **“What** **needs** my **attention**” is still a **filter** on the **one** read model, **per** `care_program` (and scoped `treatment_item` when used).
- **Optional future: review** related programs **in one pass (no merge):** e.g. `metadata.review_suggestion: { group_id, peer_care_program_ids[] }` on one or all members, **or** a **saved** filter on `patient_id` + open — **queue/UX** only; **tuples** and **permit** **asserts** **stay** **separate** per `care_program` / `treatment_item` (no **unified** “case” id in **enforcement**).

### Stale, failure, inactive (“dead”)

- **Stale:** A **required** **turn** (1G message turn, **patient** **lab** **milestone,** **provider** **TAT,** **payment/ops** **retry** window) **exceeds** the **org** **SLA** at **T0**; **or** a **time-based** continuation is **overdue** per `metadata` policy. **Effect:** **1G T1–T3** **(nudges,** not **default** **ownership** **flip**); worklists **deprioritize** or **re-tag** for **safety/age** per **workload** below. `stale` is **a** **derived** (or `metadata`) **flag,** not a new workflow engine.
- **“Inactive / dead” (closed care path):** **`care_program`** and/or **`treatment_item`** **status** in **terminal** or **dormant** (org rules: e.g. **closed,** **discontinued,** no **reorder** in N days with **archival** policy) — **not** “stale = dead.” A **stale** case is **still** **active** until **closure**; **T1–T3** and **triage** apply **as** in **1G**.
- **Subtypes (minimal):** **No** patient **reply** on `clinical_required` **→** **stale** on **messaging;** follow **Edge cases**; **Provider** **queue** **age** **on** a **“ready for review”** item **→** **stale** in **worklist;** **Lab** **not** **completed** **(patient** **or** **return)** **by** **policy** time **→** `lab_awaiting_patient_action` **+** **stale;** **Result** in **+** unreviewed **for** TAT **→** `lab_awaiting_provider_review` **+** **stale. Payment** (clinical rail) **/ fulfillment** in **exception** path **→** `payment_or_fulfillment` + **stale** when **exception** **SLA** **misses.**

### Continuation (TRT, GLP-1, etc. — Stage 6, existing structures)

- **Triggers (examples only):** `next_checkin_at` / `next_refill_due_at` / `next_visit_at` and **policy** on **`treatment_items.metadata`**, new **lab** need, **open** `clinical_required` for **refill,** or **intake of** **patient** **check-in** when **due** — all **anchored** on **`care_program` / `treatment_items`** and **1G**; **the** **canonical** read model **just** **names** which **trigger** is **the** **current** `primary_blocker` when **relevant.**
- **On ownership and messaging:** **Unanswered** **due** **check-in** **or** **patient** **owes** **form** **→** **patient** **+** **blocker;** org **owes** **a** **prescriber** **refill/continuation** **decision** **after** **labs** / **eligibility** **met** **→** **provider**; **`clinical_required` on continuation** reuses the **same** 1G **turn** and **T1–T3** **rules;** do **not** add a **parallel** **continuation** **thread** **model** beyond the **one** `message_thread` per program (Intent).

### Provider workload (queues — one derivation from canonical state + age)

- **Roster concepts (all queryable, not a new system):** **(a)** *Ready for review* — `responsible_party: provider`, Stage 2, **and** not blocked by a **gating** **message/lab** that **applies to** the **intended** permit, **or** the **clinician** is **on-deck** **after** resolution; **(b)** *Lab review* — `primary_blocker: lab_awaiting_provider_review` (result **in**, **clinically** **unsigned** or **`reviewed_at` unset** as **product** defines); **(c)** *Message turn* — `clinical_required` + **stale/age** **surfaces** for **T2/T3 nudges**; **(d)** *Ops* — `responsible_party: staff` in Stage 4/5. **Tie-break / priority (minimal, product-tunable):** **(1)** **safety/exceptional** (abnormal lab, hard fail); **(2)** **stale/SLA breach;** **(3)** `clinical_required` **age;** **(4)** new **intake/queue** **depth;** **(5)** **FIFO** within a bucket. **“What** **needs** **me** **now**” = **filter** the **worklist** by **role,** `responsible_user_id` **(when** **set),** **and** the **buckets** above using **one** read model.
- **Parallel programs:** A **single** **provider** **may** have **N** open **treatment** **work** **items;** each **`care_program`** (and **scoped** **`treatment_item`**) is **a** **separate** line **in** the list — **not** one merged **owner** for the **patient** **as** **a** **person.**

### Patient clarity (no UI work — one mapping from canonical state)

- **For each `primary_blocker` + `Stage` the product maps a patient-facing “lane” (conceptual) by answering (A) what the patient is waiting on the org for, (B) what the org is waiting on the patient for, and (C) whether patient action is required.** **Examples (non-exhaustive):** **Message turn** — (B) reply, (C) yes; (A) “our team will message you after you reply” or n/a. **Provider review, patient not blocking** — (A) clinician or pharmacy is next, (B) n/a, (C) no unless a visit/appointment is the next ask. **Lab (patient must act)** — (B) complete / return, (C) yes. **Payment/exception (Stage 4/5)** — (B) update method or work with support, (C) usually yes; (A) copy aligned with 1E / payment rail text.

### Classifications (store on `messages.metadata` and/or `message_thread.metadata` — one enum, same names everywhere)

- **`clinical_required`**: **outbound** question that **must** be **resolved** (patient **reply** or **audited** **staff** **resolution**) before a **map-named** **permit** (Stage 2 or **blocked** **continuation** in Stage 6) may proceed. **Sets** `responsible_party: patient` for the case scope (see **Case ownership**). **Affects** permit (`blocks`), patient copy, and escalation. **Affects** Stage 4/5 only if `blocks` includes exception-style gating (not tracking-only). **Example** patient copy: *“We’re waiting on your response before the next care step.”*
- **`clinical_optional`**: **clinically** **relevant** **chatter**; **does** **not** **withhold** **permit**; **triage** **queue** **at** **lower** **priority** than `clinical_required`; **continuation** **unaffected** **unless** **separately** **gated** by **visits** / **labs** / **forms**.
- **`operational`**: **shipping, billing, scheduling, account**; **default** **no** **treatment** **permit** **block**; **Stage 4/5** **queues** **(support, pharmacy_ops)**; **Stage 2** **unaffected** **unless** **message** is **reclassified** **(audited)** to `clinical_required`.
- **`system_notification`**: **automated**; **no** **reply** **expected**; **in-app** **+** **light** **email** **only**; **no** **escalation** **ladder**.

**Which message is “the” required one:** the **outbound** **`messages`** **row** that set **`metadata.classification: clinical_required`** and **`metadata.awaiting_response: true`** (or **thread-level** **single** **outstanding** **turn** on **one** `message_thread`); **close** the **turn** when **`from_patient: true`** **arrives** **in-thread** or **`awaiting_response`** is **cleared** by **audited** **case** **action**.

**Blocking (enforced in server logic, not UI alone):** One **permit check** (shared assert) on approve / prescribe / continuation (Stage 2 and 6): if a `clinical_required` + `awaiting_response` **turn** exists for this `care_program_id` (and, when scoped, this `treatment_item_id`) and `metadata.blocks` intersects the intended permit, **reject** and return a stable reason code (`messaging_awaiting_patient` or `messaging_awaiting_resolution`). **Stage 4/5 (exceptions):** run the same assert only if `blocks` includes a product-defined **exception** string; **do not** block prescribe for a **tracking-only** operational thread. **State pointer:** **either** embed a small `messaging_hold` object in `care_program.metadata` / `treatment_items.metadata` (thread_id, message_id, blocks, until?) **or** derive from `messages` + `message_threads` only; **not both** as independent sources of truth.

### Transitions, messaging, escalation, SLA (aligned to case ownership)

- **Stage 2 — Decision, ready for provider:** intake or chart state reaches “ready for review” (product) → `responsible_party: provider` (set `responsible_user_id` to prescriber/assignee).
- **Stage 2, outbound** `clinical_required` **(permit held):** → `responsible_party: patient` (same `care_program` or scoped `treatment_item` as the permit).
- **Stage 2/6, patient** `from_patient` **closes the required** **turn** (no new clinical red flag) → `responsible_party: provider` (back to **review** queue) unless **ops-only** **resolution** (then `staff` until handoff).
- **Stage 4/5 — Exceptions** (payment, fulfillment, partner defect, refund path): → `responsible_party: staff` (assign `responsible_user_id`); when **ops** is done and the **next** **medical** **step** is **prescribing/visit,** return → `provider`.
- **Lab (see Lab appendix):** requisition/kit still needs **patient** **to** act (draw, return, portal) → `responsible_party: patient` (until the lab-order milestone the product uses); result **in** and **needing** **clinician** **review** (Stage 2) → `provider` **(review).**
- **Stage 6 — Continuation:** **async** **check-in** **owes** **patient** **answers** → `patient` **;** when the product **owes** a **provider** **refill/continuation** **decision** → `provider` **(same** `treatment_item` **when** **scoped).**
- **1G** **+** **T1**–**T3:** `clinical_required` → `patient` **;** **inbound** **reply** **(unblock)** → **typically** `provider` **(unless** **message** is **ops-only,** `blocks` **=** **ops) **. **T1**–**T3** are **nudges**; **by** **default** they **do** **not** **change** `responsible_party` **. **Optional** org `metadata.escalation_transfers_ownership: true` **(opt-in):** **T3+** may **set** `staff` **+** `responsible_user_id` **(triage** **bump** **or** **return** **to** **provider) **.**
- **When** `clinical_required` **is** **stale:** T1 in-app, T2 email/SMS, T3 paged/queued (staff + provider) as in 1G. **Deduplication:** at most one open `clinical_required` + same `decision_id` (if used) per `care_program`.

### Message → decision integration (`clinical_required`)

- **Unblock (resume Stage 2 or 6):** insert `messages` with `from_patient: true` on the same `message_thread_id` or auditable staff closure (`awaiting_response: false` + reason), then project `patient_timeline_events` (e.g. `messaging_patient_replied`, payload `message_id`, `thread_id` only).
- **AI (assist only):** Does **not** **clear** `clinical_required` **or** **skip** a **permit** assert; the **“AI** **layer”** subsection **below** and **Layer** 2 (clinical) in **Intent** apply. Chart/lab assist is **subordinate** to 1G turns and permit asserts.
- **Provider re-review before prescribing/continuation:** if the unblock changes treatment authorization (Stage 2) or continuation with new clinical info (Stage 6), the same visit / review surfaces the map already requires must run; not chat read alone. Ops reply may satisfy only **ops-class** `blocks` (e.g. shipment), not prescribe, except explicit org policy + audit.

### AI layer (assistant only — `patient_chart_ai_reviews` + existing jobs)

- **What this is (no new "AI system"):** Assistive extraction, triage, and suggestions on **existing** rows (`patient_chart_ai_reviews`, `patient_diagnostic_reports`, `patient_lab_observations` as documented) and idempotent jobs (e.g. `processChartAiReviewJob` or successors). It is not a second clinical authority, not a workflow orchestrator, and not a substitute for `message` + `message_thread` (messaging SoT) or for audited prescribe/approve mutations.
- **When it runs (triggers, non-exhaustive):** On **idempotent** server or queue **events the product wires**: new/updated chart or lab payload, intake/form text reaching a **handler**, reconciliation/retry, or staff re-run. (Exact list = code; the map only forbids **unbounded** AI on arbitrary reads with no event.) A job need not run on every `messages` insert; if the product hooks messaging, **1G** unblock rules below still apply.
- **Allowed:** Summaries, OCR/parse, draft text (including **suggested** reply body not sent as from-provider without the **same** outbound path a human uses), `metadata` provenance on **draft** observations, triage flags, timeline **projection** pointers. Persisting a suggestion is **not** a treatment or gating change.
- **Not allowed (enforced in permit/1G paths): (1)** Imply the model is a care actor (e.g. as `from_patient` or prescriber of record). **(2)** Clear a `clinical_required` + `awaiting_response` turn (the 1G messaging defense) by AI output alone. **(3)** Set `patient_diagnostic_reports.reviewed_at`, approve or prescribe, or mutate `treatment_items` / `treatment_orders` from unreviewed row AI state without the **same** audited mutations a non-AI path uses. **(4)** Use `released_to_patient_at` (or any "patient can see" flag) as a stand-in for Intent-level authorization to change therapy.
- **§1G (messaging):** `message` + `message_thread` are SoT. AI may suggest `classification` / `blocks` / copy; only a **human-authorized** outbound (same path as without AI) or **patient** inbound, or an **audited** staff/ops path that **legitimately** clears `awaiting_response` per 1G, can advance a `clinical_required` turn. "The model says we're clear" is **not** a recognized unblocker.
- **From suggestion to provider decision:** Suggestions live in `patient_chart_ai_reviews` or observation `metadata`. A provider (or `requireCapability` staff) accepts, rejects, or edits; any material dosing, new Rx, or continuation then runs **only** through Intent: `clinical_visits`, lab review (`reviewed_at` where required), `treatment_items` + **permit** and **1G** as required. **No** auto-apply of therapy from AI output alone.
- **Clinical blocker (locked):** The **architecture** does not permit any AI result to **independently** **satisfy** a gating for Stage 2/6, including **clearing** a `clinical_required` barrier; only the mechanisms this map already names (patient, audited staff, provider, visits, gated treatment) may do that.

### Non-blocking (`clinical_optional` / `operational` / default back-and-forth)

- **No** `metadata.blocks` for the permit; assert short-circuits. **Notify:** in-app + digest email; no T3 page to provider by default; **dedupe** optional (same thread, same day) to limit fatigue.

### Edge cases (minimal)

- **No patient reply:** after SLA, mark stale; close hold with auditable abandon, reschedule, hold block + require synchronous visit, or per policy; emit `patient_timeline_events` (timeout, nudge, abandon).
- **Conflicting answers:** new `clinical_required` or clarification; if still inconsistent, force `clinical_visit`, sync touchpoint, or structured form — not unbounded **thread** loops.
- **Reply after timeout:** re-open per org policy; may count as a new `clinical_required` or manual case flag.
- **Multiple “issues”:** one `message_thread` per `care_program`; at most one outstanding `clinical_required` **turn** per thread; otherwise timeline + triage, not a second SoT (Intent).

### Layer 2 enforcement (server, not only UI)

- **Case owner** and **canonical case state** (stage + `primary_blocker` + `responsible_party` **tuple**) read/updated in the **same** **server** **transition** that moves a **permit,** `treatment_items` **state,** or `clinical_required` **turn** (not UI-only). **Permit** **assert** on every path that advances treatment (Stage 2) or continuation (Stage 6). `patient_timeline_events`: **pointers** only. `care_program` / `treatment_items`: optional `messaging_hold` / `case_owner` / small cached snapshot in metadata with **one** **writer**; **or** **recompute** — not **competing** **divergent** SoTs (Intent). `patient_chart_ai_reviews` **(Section 1G, AI** **layer):** **suggestions** **only;** may **not** be **the** **code** path **that** **clears** `clinical_required` **or** **opens** a **permit** (Intent, **1G**).

### Oversight, QA, and leadership (not `responsible_party`)

- **What these roles are** — *Clinical* oversight: CMO / medical director, QA, compliance, medicolegal policy. *Operational* oversight: e.g. pharmacy, fulfillment, member experience, or department leaders. They are **not** a **fourth** `responsible_party` (1G remains patient | provider | staff) and do **not** get `case_owner` by org title alone. Primary clinical responsibility for the `care_program` / `treatment_item` **case line** is unchanged.
- **Access (capabilities + audit)** — Broad and sensitive reads (including “all cases in scope for oversight”) use `requireCapability`, RLS, `SensitiveAccessReason` where the map already requires, and `audit_events` (Intent, Layer 1). They may **read** the chart, `message` + `message_thread`, labs, and order/treatment state the same as other privileged roles—**defensibly,** not a silent census browse.
- **Intervention (explicit, logged)** — Oversight does not replace the prescribing **provider of record** on the permit. Allowed actions, when the product supports them, are the **same** audited **paths** as for other staff: e.g. staff/instruction `messages`, reassign, triage/flag, queue priority bump, override only where existing mutation routes allow—each with `requireCapability` + `audit_events` (+ `patient_timeline_event` pointer when a patient-visible signal is needed). No **shadow** or **ad-hoc** `UPDATE` outside the map’s **server** paths.
- **1G ownership** — **Viewing** an adverse-event list or a leadership dashboard does **not** transfer `responsible_party`. **Changing** `case_owner` or `responsible_user_id` requires the same **audited** handoff the map uses for any **triage**; oversight is **advisory/escalatory,** not an automatic new owner.
- **High risk (e.g. adverse event, major complaint, safety concern)** — Triage uses **existing** 1G patterns: `patient_timeline_events` (typed) + `care_program` / `treatment_item` `metadata` flags the product names (e.g. severity, oversight_required); may surface to named recipients, raise **1G** T1–T3 nudges, and **bump** **worklist/1H** priority. May **re-route** to a provider pool or staff follow-up by **opt-in** org rules—**not** an auto `responsible_party: CMO` without an audited step. **No** new case table or **workflow** **engine.**

### 1G.1 Queue ownership, SLA discipline, and escalation (Model C: same tuple + row truth; no ticketing / workflow product)

*Pressure-test:* The map already names **who should advance the *clinical* case** via the **1G** tuple: `responsible_party`, `primary_blocker`, optional `responsible_user_id`, Stages, `stale`, and **T1–T3** nudges. It is **weaker** on: **(a)** who **owns** the **fix** when the blocker is an **async / integration** leg (webhook, `outbound_jobs`, payment rail, identity hold, pharmacy partner), not only a messaging/visit turn; **(b)** **by when** (concrete time policy); **(c)** what happens on **SLA miss** (escalation vs **silent** stall). **1H.1** answers *what happened* (trace); **1G.1** answers *who must act next*, *under what time expectation*, and *what bends if not*.

**Model C (no new architecture):** same stance as the capability layer in `lib/auth/capabilities.ts` (Layer 1D; **1D.1** for **who** may **act** in **which** **risk** **domain** with **elevation** / **reason**): **no** new `queues` or ticketing product. A **“queue”** = a **filter / saved view** on existing rows: `care_program` / `treatment_item` / `treatment_orders` / 1G fields / 1I / 1J / `outbound_jobs` / webhook idempotency tables. Ownership must be **declared in metadata and capabilities**, not **inferred** from “the team will notice.”

| # | Theme | **Already in map (honest)** | **Partial / implied** | **Target (tighten only)** | **Non-optional before Hims-style scale** |
|---|--------|-----------------------------|------------------------|---------------------------|----------------------------------------|
| 1 | **Ownership of blocked / failed states** | 1G **who acts next** per `care_program` (and `treatment_item` when scoped); 1G Stage 4/5 = **ops**; 1J.6/1J.9 = **compliance** for R-high; 1I staff paths for money | Dead `outbound_jobs`, **webhook handler** errors, **cron** outage often **not** reified as a **1G** tuple; `treatment_orders` in `exception` may lack `responsible_user_id` | If **meds** to patient are **blocked** and the cause is not **patient**-only or **provider**-only clinical work, **default** **`responsible_party: staff`**, extend `primary_blocker` **(same** illustrative enum as 1G) with values such as `integration_inbound` / `outbound_job_dead` **only in** `metadata` **—** *or* reuse `payment_or_fulfillment` where that is honest; + **1H.1** pointers | **No** long-lived **block** on `exception` / R-high / `dead` with **no** **staff**-routable owner (pooled is fine) for anything that is **fraud, payment, integration,** or **pharmacy**-side |
| 2 | **SLA (time)** | Stale = required **turn** > **org** SLA; T1–T2 soft nudge, T3 harder | Numeric hours = **org policy** in `metadata` / runbooks, not one global number in the map; webhook / cron SLOs often **undefined** | Vocabulary: **(soft)** T1–T2; **(hard)** T3+ **or** repeat miss → `staff` triage (incl. optional `escalation_transfers_ownership`); **(system)** runbook line: “triage / replay within N” for `dead` jobs and webhook failures + **1H.1** visibility | At least **one** **soft** and **one** **hard** **expectation** per **major** blocker class the org **ships**; no **indefinite** “open exception / R-high / **dead**” for **patient-visible** delays |
| 3 | **Escalation** | T1–T3, optional T3+ → `staff`; 1I / 1J routes | Silent if nudges not **wired**; `dead` job may sit **unseen** | **≥1** **step** after **miss: (1)** 1G nudges, **(2)** `staff` + typed `patient_timeline_events` + `audit_events`, **(3)** 1J/1I existing queues, **(4)** 1H.1 replay for webhooks, **(5)** infra/PSP **(named** in runbook) | **No** “SLA missed, **no** **owner** bump, **infinite** retry with **no** `dead` + visibility” |
| 4 | **Queue as concept** | 1G **rosters** = **query** over canonical state + **age** | “Everything” is not one **product** name | A **small** set of **saved** internal **views** (ready-for-review, ops exception, identity/compliance, integration/dead) **or** one “needs attention now” that **joins** `stale` + `primary_blocker` + order row | **Ops** can get **“what’s on fire** **now**” **without** **one-off** SQL for **every** incident (target **lens** or **query pack**) |
| 5 | **Cross-legs** (webhook, `outbound_jobs`, payment, pharmacy, subscription) | 1I.6 idempotency; 1G 4/5; 1H.1 table | “Just a **row** in a table” is **not** a **queue** if **no** **owner** | If **1H.1** shows **stuck,** 1G.1 requires **(staff + blocker +** optional timeline **+** or **infrastructure/PSP** in **runbook)** for **product**-owned outcomes | **Every** failure class **visible** in **(5)** is either **(owner + escalation** **path)** in product **or** **explicit** **external** **(on-call, PSP) —** not **invisible** |

*Provider vs ops (already in spirit):* **Provider** is **not** the default **owner** of **webhook** repair, **outbound** **dead** letters, **1I** **disputes**, or **1J** **R-high** **clear** — that is **staff** / **compliance** (1J.9) **+** **capabilities**. Ops should **not** be **blocked** on **provider** without the chart showing **1G/1H.1** **(why)`.

*“Nothing owns this” (forbidden as a **silent** steady state):* **(1)** `outbound_jobs` **status** `dead` with **no** `primary_blocker` or staff route; **(2)** `treatment_orders` in `exception` with **no** **triage**; **(3)** **webhook** ingested in **`stripe_webhook_events` **but** handler **fails** and **order** does **not** **advance;** **(4)** provider **TAT** **> SLA** with **T3** **unwired;** **(5)** 1J R-high **(already** **1J.6**). **Each** needs a **(target)** **triage** path: **1G+timeline+audit,** 1H.1+replay, **1J.9,** 1I staff, or **signed** runbook (infra) — not **invisibility**.

*Cross-links:* **1H.1** = *what* / *when*; **1G.1** = *who* / *by when* / *if not* (patient-scoped); **1H.2** = *system* / *platform* *owner* *→* *visibility* *→* *intervention* *→* *audit* when the **failure** is **not** a **1G** *case* line; **1H.3** = *recon* / *drift* / *idempotent* *retry* when **duplicated** or **missed** **async** threatens **double** **money** or **fulfillment**; 1I and 1J must **roll up** to **`responsible_party`** (usually `staff` + cap) for **ops**-owned **money/identity,** or the org has a **process** **hole,** not only a **data** **hole.** **1G.2** = *clinical* *safety* *enforcement* (active checks at decision time; not a decision engine) **—** *extends* **1G** *permit* *assert* *and* **1J.10** *preflight* **. **1G.3** = *continuation* *,* *adherence* *,* *re-engagement* *,* *send* *policy* */* *fatigue* *(*not* *a* *CRM* *)* *—* *Stage* *6* *,* *stale* *,* *timeline* *,* *`outbound_jobs`* *gate* *,* *1G* *.* *3* *(*a* *–* *h* *)* *.*

### 1G.2 Clinical safety enforcement: active checks at decision time (not a CDSS; map-level pressure test)

The **map** already **requires** server **permit** assert on approve/prescribe (**§1G** “**Layer 2** **enforcement**” **),** **`clinical_visits`** and lab **`reviewed_at`** per **Intent,** and the **target** **`loadPatientCaseSafetySnapshot`** (**1J.10) **as **the **joined **read **for **high-risk **mutations. ** What **was **only **implied **as **“**data **in **the **chart**” must **be **explicit **at **scale **: **safety **is **not **met **by **storing **allergies **or **active **meds **alone **. ** The **same **server **mutators **that **change **therapy **run **defined **safety **assert **outcomes **(hard **block **/ **soft **warn **+ **ack **/ **escalation) **against **that **joined **context, ** not **a **separate **clinical **decision **engine **or **CDSS **product. ** **Checks** **read **only **from **this **map’s **tables **(e.g. **patients,** **intake** **/ **chart **allergies **, **`treatment_items`**, **`treatment_orders`**, **`patient_diagnostic_reports`**, **structured** **observations) ** with **stable **payload **/ **row **ids **for **audit. ** *Longitudinal* *clinical* *“memory*”* (*Intent* *+* *append-only* *timeline) *is *the* *read* *spine* *1N* *names* *in* *the* *stub* *line* *—* *not* *a* *parallel* *schema* *product* *in* *this* *file.*

| # | **Theme** | **Exists (typical / repo-honest)** | **Partial** | **Target (same model — no new engine)** | **Non-optional before Hims-style scale** |
|---|-----------|----------------------------------|------------|----------------------------------------|----------------------------------------|
| **(1) Contraindication (condition/drug)** | **Chart** **+ **intake** **; **1G** **concurrent** **program** **shared** **read **(eligibility) **. **| **SOP** **or** **clinician** **in** **the **loop **; **not **all **rules **in **code **. **| **Per-product** **safety** **assert** **in** **the **same **mutator: **`loadPatientCaseSafetySnapshot`** **+ ** **structured** **exclusions** **;** **tiers** **: ** **block** **conflict,** **or** **warn** **+** **documented** **override **(row **(7) **) **. **| **At **least **one ****hard** **no** “class **(per **indication) **+ ** **override** **audit** **if **permitted. ** **|
| **(2) Duplicate / overlapping therapy** | **Many **`treatment_items` **/ **`care_program` **; **1G **tuples** **. **| **Not **a **universal ****cross-time* *dedupe* *norm* *in* *map* **. **| **Query **open **+ **recent **terminal **per **disease/ingredient** **as **the **org **defines **+ ** `patient_timeline_events` **/ **metadata **on **suspect. **| **Stated** **time **window **+ ** **overlap** **— **not ** **current **view **only. ** **|
| **(3) Allergy vs proposed treatment** | **Allergies **as **data **; **1G **shared **chart **. **| **UI **banner **; **inconsistent** **server **enforcement. **| **Match **in **the ** **prescribe** **/ **approve ** **mutator: ** all ** **structured ** **allergen **/ **line **(or ** if **unstructured, ** min **= **ack **+ **`reasonCode` **. **| **Class-A **: ** no ** **silent** ** “**visible** ** in ** a ** **tab. **” **; ** **block** **or **1J.9** **. ** **|
| **(4) Dosing / regimen sanity** | **Dose** **/ ** **duration** **in **visits/orders. **| ** No **universal** ** DDI. **| **Config **(SKU **) **: **strength, ** **duration, ** **frequency; ** OOR **= ** **block** **or ** **warn+reason+audit, ** per ** **Intent** **on ** **gates. **| ** **Bounds ** **in ** **assert** **on ** **high-risk/controlled ** **SKUs. ** **|
| **(5) Enforcement (block / warn / escalate) **| **1G **`clinical_required` **; **1J.10** ** preflight **. **| **Inconsistent** **on ** **therapy ** **routes. **| **Vocabulary: **`block` **, **`require_acknowledgement` **, **`escalate_to_compliance` ** per ** class **+ ** **stable** **return ** **codes. **| **Class-A **: ** not ** “**warn** **in ** **UI** ** only” **. ** **|
| **(6) Decision surface** | **Worklist **+ ** case **+ ** **chart. **| ** **Snapshot** ** not ** on ** **approve. **| **`loadPatientCaseSafetySnapshot` **+ **safety** ** in ** the ** same ** **commit; **1G** **. **| ** **One** ** place ** to ** see ** **blocker ** **+ **safety. ** **|
| **(7) Override + audit** | **1J.9 **+ **1D** **`reasonCode` **+ **`audit_events` **. **| **Gaps** **on ** **therapy. **| **`reasonCode` **+ ** **provider** **+ **`audit_events` ** **metadata **+ **`clinical_visits` **/ **treatment** **. **| ** **No** **durable** ****reason ** **= ** no **defense. ** **|
| **(8) Summary** | **1G+1J.10+Intent. **| **—** | **One** **safety** **outcome** **+ ** **one** **joined** **read** **+ ** one ** **audit. **| **(i) ** **active ** **(ii) **time **(iii) **vocabulary **(iv) ** **override+audit. ** **|

*Pressure* *-* *test* *: * the * **Layer* *2* *enforcement* * *subsection** *above* *governs* *messaging* *and* *permits* *;* *1G.2* *governs* *pharmacologic* */* *allergic* *assert* *outcomes* *tied* *to* *the* *same* *mutations.* *Amend* *1J.10* *field* *list* *in* *lockstep* *with* *safety* *rule* *inputs.* *1D* *caps* *govern* *who* *may* *ack* *a* *soft* *warning* *;* *1G* *tuple* *governs* *who* *moves* *the* *case* *on* *escalation* *to* *ops* */* *compliance.*

*Cross* *- * *links* *: * **1G** **(permit) **, **1J.10, **1D.1, **1J.9, ** **Intent, ** **§1G** ** **AI, ** **Lab** ** **appendix.**

### 1G.3 Continuation, adherence, re-engagement, and notification discipline (not subscription-only; pressure test)

*Assumptions: **1G.2** (clinical safety at decision time) is in place; this subsection is about **engagement and retention mechanics**, not additional clinical decision safety. **No** CRM, growth stack, or parallel engagement product. **Reuse** only: 1G/messaging, 1H notifications, `outbound_jobs`, `patient_timeline_events`, `treatment_items.metadata` (continuation and due policies), check-ins (1F), 1I as **money + cadence**—not as the sole proxy for “doing well.”*

*Pressure* *-* *test* *: * the map centers continuation on **Stage 6,** `next_checkin_at` / `next_refill_due_at` / `next_visit_at`, **1G** *stale* *+* *T1* *–* *T3* *,* *and* *`clinical_required` *as* *the* *gating* *messaging* *turn* *—* *strong* *on* *“*what* *next* *clinically* *and* *by* *whom* *”* *and* *weaker* *on* *explicit* **adherence,** *lightweight* **outcome* */* *progress* **(beyond* *billing)**, *and* *a* *unified* **at-risk** *lens* *for* *paid* *but* *static* */* *dropping* *patients* *—* *addressed* *by* *deriving* *signals* *below* *and* *surfacing* *in* *provider* */* *ops* *rosters* *(*1G* *+ *1H) *.*

*Active continuation:* **(a)** time- and event-based miss detection (not only when the patient returns); **(b)** nudges via in-app, `outbound_jobs`, and `patient_timeline_events` (1H dedup); **(c)** saved filters for at-risk / not-progressing on canonical tuples + age—not a separate metrics product; **(d)** a **closed loop** after outbound: track interaction → update behavior slice / eligibility → next action (not send-only)—see **1G.3(i).**

| # | **Theme** | **Exists (typical / map-honest)** | **Partial** | **Target (same model — no CRM)** | **Non-optional before Hims-style scale** |
|---|-----------|----------------------------------|------------|-----------------------------------|----------------------------------------|
| (1) **Adherence (signal, not only subscription)** | Stage 6; `treatment_items.metadata` due dates; check-ins as structured capture; `clinical_required` when the org *asks* | Medication *taking* is **not** persistently named as its own “adherence” row; often inferred from orders shipped + patient messages + forms | **Proxy signals** in one vocabulary: (i) *due check-in* submitted on time or overdue via metadata policy; (ii) *missed `next_checkin_at`* / *refill* *request* *window*; (iii) *last patient activity* on thread or portal; (iv) optional *patient-reported* *“taking* *as* *directed*”* in *check* *- *in *schema *where *it *exists *; *emit *typed *`*patient_timeline_events`* (e.g. `adherence_checkin_submitted` | `adherence_suspect`) *without* *a* *separate* *adherence* *engine* | *At* *least* *two* *kinds* *of* *proxy* *: * (a) *missed* *or* *late* *check* *- *in *; * (b) *overdue* *metadata* *continuation* *or* *stale* *1G* *turn* *—* *not* *1I* *`*active`* *alone* |
| (2) **Dropout / disengagement detection** | `stale` + subtypes; Edge cases (no patient reply, timeout, abandon); inactivity in messaging implied | **“Inactive”** mix of billing churn vs clinical dropout not always *named*; *abandoned* *funnel* *= * *partial* *1G* *edge* *cases* | *Derive* *: * (i) *`*next_refill_due_at`* *or* *`*next_checkin_at`* *past* *+ * *no* *satisfying* *event* *; * (ii) *no* *`*messages`* *from* *patient* *+ * *open* *`*`clinical_required`* *past* *SLA* *; * (iii) *subscription* *`*active`* *with* *no* *engagement* *N* *days* *—* *flag* *in* *`*`care_program`*.`*`metadata` *or* *`*`treatment_items`*.`*`metadata`* *(*`*engagement_tier`*,* *`*at_risk_since`*)* *+ * *timeline* *; * *not* *a* *separate* *funnel* *DB* | *Time* *- * *or* *event* *- * *based* *at* *- * *risk* *rules* *the* *org* *actually* *ships* *+ * *`*patient_timeline_events`* *on* *transition* *to* *`*at_risk`* *or* *`*`disengaged`* *as* *the* *product* *names* *them* *|
| (3) **Re-engagement (triggers, fatigue, policy gate)** | T1–T3; `outbound_jobs`; 1G stale; **1G.3(a)–(i)** | Re-engagement *shape* *without* *unified* *governance* *on* *throttle* *vs* *bypass* *+ * *disengaged* * *stop* * | (i) *`*at_risk`* *or* *stale* *+* *policy* *; * (ii) *`outbound_jobs`* *enforces* *caps* *+* *suppression* *before* *send* *(*1G.3(b)*)* *; * (iii) *engagement* *class* *—* *throttles* *; * *non* *- * *neg* *—* *bypass* *throttles* *per* *policy* *+* *audit* *(*1G.3(a)*)* *; * (iv) *T1* *–* *T3* *then* *`disengaged`* *(*1G.3(g)*)* *; * (v) *timeline* *+* *dedup* * | *Enforced* *send* *- * *gate* *+ * *disengaged* *+ * *1H* *.* *1* *; * *no* *bypass* *without* *audit* |
| (4) **Outcome / progress (lightweight)** | Visits, labs, check-in text; 1F forms | **“Success” = still paying** is **not** a clinical outcome in the map | *Lightweight* *: * (i) *patient* *- * *reported* *symptom* */* *satisfaction* *in* *check* *- *in *; * (ii) *clinician* *`*`reviewed_at`*,* *treatment* *- * *related* *timeline* *; * (iii) * **no* *KPI* *- * *only* *`patients` * *columns* *(*1H* *); * *optional* *read* *- * *model* *or* *dashboard* *query* | *At* *least* *one* * **non* *- * *billing* * **progress* * *signal* *per* *relevant* *care* *line* *: * *submitted* *check* *- *in*,* *or* *provider* *- * *documented* *milestone* *,* *or* *lab* *trend* *as* *applicable* |
| (5) **Provider + ops visibility (at risk)** | 1G rosters (stale, message turn, etc.); 1H.1 trace | *“At* *- * *risk* *engagement*”* *is* *not* *a* *first* *- * *class* *roster* *row* *yet* *in* *the* *map* *text* | *Add* *saved* *view* *or* *roster* *filter* *: * *`*at_risk`*,* *`*`stale`*+`*`continuation_overdue`*,* *or* *`*`subscription_active_but_no_checkin` *—* *same* *1G* *+ * *metadata* *derivation* *+ * *1G.1* *ownership* *(*who* *nudges* *: * *staff* *for* *ops* *- * *class* *,* *provider* *for* *clinical* *continuation* *)* *| * *Ops* *or* *clinical* *lead* *can* *list* *at* *- * *risk* *without* *ad* *- * *hoc* *joins* *on* *every* *incident* *(*1G.1* *table* *row* *#4* *tension* *)* |
| (6) **Continuation loop integration (not parallel)** | 1G permit + Stage 6; 1F check-ins; visits | Adherence/engagement **signals** *optional* *in* *permit* *narrative*; *1I* *separate* *from* *1G* *tuples* in places | *Explicit* *: * (i) *continuation* *decision* *surfaces* *`*`metadata`*,* *stale* *,* *1G* *tuple* * *and* *1I* *“* *paid* *up* *”* *in* *one* *read* *(*1J.10* *- * *style* * *joined* *context* *where* *relevant* *)* *; * (ii) *at* *- * *risk* *does* *not* *auto* *- * *approve* *or* *- * *deny* *—* *informs* *roster* *+ * *`*`clinical_required`*,* *not* *a* *hidden* *bypass* | *Engagement* *state* *is* * **visible* *in* *provider* */* *continuation* *review* *; * *not* *invisible* *in* *raw* * *`*`messages` * *only* |
| (7) **Minimal “before scale” bundle (incl. discipline + AI + loop)** | Scattered 1G + 1E + 1F + timeline; **1G.3** refines re-engagement and AI | *Not* *all* *fatigue* */* *preference* */* *send* *- * *gate* *rules* *in* *one* *place* *before* *this* *row* * | *Rows* *(1)* *–* *(6);* *plus* *1G* *.* *3* * (a) * *–* (i) *: * *class* *+ * *`*`outbound_jobs`* *policy* *+ * *throttles* *+ * *prefs* *+ * *disengaged* *+ * *post* *- * *interaction* * *loop* *+ * *AI* * *assist* * (within* * *rules) * * | *Rows* *(1)* *–* *(8)* *;* * throttling* * + * *classification* *; * *§* *(h) *at-scale* * *bundle* *;* * *§* *(i) *closed* * *behavior* * *loop* * |
| (8) **Post interaction: message → behavior → next action (closed loop)** | `outbound_jobs` (queued/sent); `treatment_orders` / 1I as **sooner-of-truth** for money | Often **only** *send* *rows*; * *post-click* * *funnel* * *may* * *be* * *implicit* * *or* * *split* * *across* * *vendors* *  . | *`*`patient_timeline_events`* *: * *opens* * / * *clicks* * (* *first-party* * *links* * + * * `outbound_job_id` *or* * * *stable* * * *correlation* * in* * * *payload) *, * * * *checkout* * *stages* *,* * * *`treatment_order`* * * *state* * * *changes* *,* * * *1I* * * *subscription* * * *; * * * *derive* * * * `engagement_intent` *- * * *like* * * * *slice* * *or* * * * `behavior_state` * *in* * * *`*`metadata`* * *+ * * * *policy* *- * * *driven* * * *eligibility* * for* * * *next* * * *negot* * * *job* *; * * * *cancel* * *or* * * * *suppress* * * *superseded* * * *nudges* * * *on* * * * *convert* *  . | *Interaction* * * *events* *; * * * *named* * * *transitions* *; * * * *differentiated* * * *follow* *- * *up* *; * * * *abandonment* * *+ * * * *conversion* * * *stops* *; * * * *no* * * * *orphan* * * *nags* * * *after* * * * *success* * *  . |

*Implementation* *notes* *—* *same* *repositories* *: * (i) *`*`patient_timeline_events`* *: * *nudges* * + * *interaction* * *events* * + * *stale* * *transitions* * + * *at-risk* */* *disengaged* * *+* * *abandon* * / * *convert* *; * (ii) *1H* * *`*`outbound_jobs`*,* *1H* *.* *1* *: * *trace* * *+* * *policy* * *gate* * *+* * *correlation* * *id* * *; * (iii) *1G* *T1* *–* *T3* *vs* *enums* *in* *1G* * . *3* * (a) *; * (iv) *1I* * + * * `treatment_orders` * (and* *1E* * *session* * *as* * *relevant) *: * *cadence* * and* * *conversion* * *truth* *; * (v) *1N* *+* *1G* *AI* *: * *interpret* * *+* * *suggest* * *only* *; * (vi) *1G* * . *3* * (i) *: * *closed* * *behavior* * *loop* *; * *therapy* *: * *visits* *+* *1G* *+* *1G* * . *2* *.*

**#### 1G.3(a) Communication class — non-negotiable vs negotiable (orthogonal to 1G *classification* enum)**

*This* *axis* *answers* *“*may* *the* *patient* *or* *prefs* *turn* *it* *off* *or* *should* *the* *org* *always* *deliver* *?* *”* *;* *it* *is* ***not** *a* *replacement* *for* *`*`messages`*.`*`metadata`*,* *`*`clinical_required`*,* *`*`operational`*,* *etc.*

- **Non-negotiable (clinical / safety / compliance — cannot be “fully off” in product):** *Examples* (product-defined, org policy): *result* *that* *requires* *acknowledgment* *;* *genuine* *`*`clinical_required`* *that* *blocks* *per* *1G* *;* *recall* */* *urgent* *safety* *;* *legally* *- * *required* *notices* *as* *the* *jurisdiction* *demands* *—* *must* *bypass* ***engagement** *- * *only* *throttles* *when* *policy* *says* *so* *(*still* *subject* *to* *`*`outbound_jobs`* *success* *+* *idempotency* *+* *audit* *;* *not* *a* *bypass* *of* *`*`outbound_jobs`* *existence* *or* *audit* *)* *.*
- **Negotiable (adherence, education, routine reminders, marketing* *- * *light* *nudges* *—* *“* *engagement* *”* *class* *)* *:** *Subject* *to* *frequency* *caps* *,* *suppression* *,* *and* *patient* *channel* *+* *tolerance* *prefs* *;* *throttle* *reduces* *volume* *;* *does* *not* *bypass* *1G* *safety* *on* *therapy* *permit* *by* *being* *frequent* *or* *clever* *copy* *.*
- **Map* *invariant* *: * a * *job* *or* *message* *is* * **tagged** * with* * *both* * *1G* *label* *(*where* *relevant* *)* * and* * *engagement* * *policy* * *class* * *(*non-neg* * vs* * *negot* *)* * *so* * *rules* * *apply* * *deterministically* * *;* * *unclassified* * *sends* * *default* * *to* * *negotiable* * *+ * *strict* * *caps* * *unless* * *staff* * *reclassify* * *+ * *audit* * *.*

**#### 1G.3(b) System-level enforcement — primary control (before any send)**

*The* * `outbound_jobs` * *row* * (or* * *equivalent* * *send* * *pipeline* *)* * *must* * *apply* * *policy* * *in* * *code* * *before* * *delivery* *: * *no* * *ad-hoc* * *bypass* * *from* * *a* * *UI* * *or* * *a* * *one-off* * *script* * *that* * *skips* * *the* * *same* * *gate* * *.*

- **Frequency caps (deterministic):** *max* *N* *sends* *per* * patient* *,* * per* * *channel* *,* * and* * *per* * *engagement* * *class* * *in* * *rolling* * *windows* * *(* *org* * *`metadata` * *or* * *admin* * *config* * *)* *;* * *separate* * *tracks* * *for* * *non-neg* * *vs* * *negot* * *.*
- **Suppression* *thresholds* *: * *stop* *or* *defer* *when* * *bounces* *,* * *opt-outs* *,* * *consecutive* * *ignored* * */ * *undeliverable* *,* * *or* * *fatigue* * *counters* * *cross* * *a* * *line* * *—* * *taken* * *from* * *job* * *outcomes* * *+* * *`*`patient_timeline_events`*,* * *e.g* * *opens* * */* *clicks* * *where* * *implemented* * *.*
- **1G* *escalation* *ladder* *for* * *re-engagement* * (align* *T1* * *→* *T2* * *→* *T3* * *with* * * caps* * )* *: * *each* * *tier* * *counts* * *toward* * *the* * *same* * *or* * *a* * *nested* * *budget* * *;* * *T3* * *is* * *not* * *“* *send* * *forever* * *in* * *a* * *new* * *channel* * *without* * *a* * *new* * *eligibility* * * event* * *or* * *a* * *separate* * *human* * *act* * *;* * *the* * *ladder* * * **stops** * *at* * *T3* * *for* * *engagement* * *unless* * *a* * * **non-negotiable** * *or* * *a* * *re-audit* * *d* * *trigger* * *reopens* * *(* *see* * *(g)* * *)* * *.*
- **No* * arbitrary* * bypass* *: * *any* * *exception* * *to* * *a* * * cap* * *or* * *suppression* * *requires* * *a* * *durable* * *reason* * *+ * *`*`audit_events`*,* * *`*`patient_timeline_events`*,* * *or* * *`*`outbound_jobs`*,* * *`*`metadata`* * *on* * * the* * * same* * *row* * *;* * * *AI* * *or* * *a* * * *provider* * * *does* * * not* * * *silently* * * *skip* * * the* * * *gate* * * *.*

**#### 1G.3(c) Behavior-based throttling (not only time-based windows)**

*Signals* *(* *derive* * *from* * *`*`patient_timeline_events`*,* * *`*`messages`*,* * *`*`treatment_items`*,* * *1F* * *check* *- * *ins* *,* * *`*`outbound_jobs`* * * outcomes* * *)* *: *

- **Last* * *meaningful* * *engagement* * *: * *patient* * *reply* *,* * *check* *- * *in* * *submitted* *,* * *order* * *- * *related* * *action* *,* * *portal* * *session* * *as* * *produced* * *—* * *as* * * `event_type` *s* * the* * * org* * * *defines* * *;* * *inactivity* * *extends* * *the* * * *gap* * * *between* * * *allowed* * * *engagement* * *nudges* * *or* * * *suppresses* * * *them* * *faster* * *than* * *a* * *clock* *- * *only* * * cap* * *alone* * *.*
- **Ignored* * / * * *low* *- * *signal* * *: * *reduce* * *or* * * *halt* * * *negotiable* * * * sends* * *;* * * *do* * * not* * * *treat* * * *as* * *a* * * * “* * *they* * *hate* * *us* * *  ”* * * in* * * product* * *;* * * *treat* * * as* * * *a* * * *reason* * * to* * * * *escalate* * * to* * * *human* * * *queue* * * (provider* * */* * * *ops* * * rosters* * *)* * *not* * * to* * * *send* * * *more* * * *in* * * the* * * same* * * channel* * *.*
- **Escalation* * * *when* * * *clinically* * * *necessary* * * is* * * *1G* * * *tuple* * *+ * * *stale* * *+ * * *triage* * *—* * *separate* * * from* * * *“* * *send* * * *another* * * *SMS* * *  ”* * *;* * * *AI* * * may* * * *suggest* * * *triage* * * *priority* * * (* * *(f)* * *)* * * but* * * *does* * * not* * * *widen* * * * the* * * *send* * * *budget* * * by* * * *itself* * *.*

**#### 1G.3(d) Patient preference controls (apply to negotiable; clinical override selective)**

*Store* *in* * *`*`patients`*.`*`metadata`*,* * *`*`org_patient`*,* * *or* * *a* * * *small* * * *dedicated* * * *key* * * *on* * * the* * * *patient* * * *record* * * the* * * *product* * * *already* * * * uses* * *—* * * *no* * * *new* * * *CRM* * *  .*

- **Channel* * *: * *SMS* * * /* * * *email* * * /* * * *in* *- * *app* * *—* * *eligibility* * *per* * *jurisdiction* * *+* * *consent* * *+* * *policy* * *;* * * *negotiable* * * *sends* * * *obey* * * *the* * * *patient* * * * opt* *- * * out* * * (where* * * *law* * * * *allows* * *)* * for* * * that* * * channel* * *.*
- **Frequency* * *tolerance* * * (* *e.g* * * *  “* * * *light* * * *”* * * vs* * * * *“* * * *standard* * *  ”* * *)* *: * *only* * *affects* * * *engagement* * * *class* * *;* * * *does* * * *not* * * *dilute* * * *non* *- * *negotiable* * *safety* * *delivery* * *as* * * the* * * *product* * * *defines* * *.*
- **Invariant* *: * *prefs* * * *never* * * *clear* * *a* * * *`*`clinical_required`*,* * * *reopen* * *a* * * *permit* * *,* * *or* * * *bypass* * * *1G* * * *+ * * *1G* *. * *2* * *—* * * they* * * *shape* * * *volume* * * *and* * * *channel* * * * of* * * *negotiable* * * *touchpoints* * *.*

**#### 1G.3(e) Ownership and control (who may change behavior)**

- **System* * * *rules* * * (* *this* * * *subsection* * *+ * * *1G* * *+ * * *1H* *)* *: * * **primary* * * ** control* * *;* * * *deterministic* * *;* * * *same* * * for* * * all* * * *paths* * * *that* * * *create* * * *`*`outbound_jobs`*,* * *or* * *in-app* * *equivalents* * *if* * *a* * *job* * *row* * *is* * *not* * *the* * * *carrier* * *  .*
- **Admin* * * *(* *org* * *- * *level* *)* *: * * *tune* * * *caps* * *,* * * *windows* * *,* * * *T1* * *–* *T3* * * *mappings* * *,* * * *disengaged* * * *thresholds* * *,* * * *what* * * *counts* * * *as* * * * “* * * *engagement* * *  ”* * *—* * *with* * * *versioned* * * *policy* * * *+ * * * *audit* * * *;* * * *does* * * *not* * * * = * * * “* * * *spam* * * *  ”* * * in* * * the* * * *inbox* * * by* * * *dial* * * *.
- **Provider* * *: * * *triggers* * * that* * * * are* * * * *clinical* * * * (* * e.g* * * *  opening* * *a* * * *`*`clinical_required`*,* * * *or* * *a* * * * *continuation* * * * *review* * * *)* * *—* * * *not* * * *a* * * * *personal* * * * *“* * * *send* * * *n* * * *  ”* * * *knob* * * *bypassing* * * *policy* * *  .*
- **Ops* * *: * * * *visibility* * * (* *1G* * *+ * * *1H* *. * *1* *)* * and* * * * **audited** * * * *manual* * * * *corrections* * * (support* * *, * * *repro* * *)* * *—* * * * not* * * * ad-hoc* * * *blast* * * to* * * *patients* * *  .*

**#### 1G.3(f) AI: meaningful, state-aware assist — not a sender, not a throttle bypass**

*Same* * *philosophy* * * as* * * *§* *1* *G* * * * *AI* * * * *layer* * * (* * *draft* * *,* * *suggest* * *,* * *triage* * * *)* *;* * * *  extended* * * *here* * * *only* * * * for* * * * **engagement* * * ** *  intelligence* * *  . * * **No* * * standalone* * * * *“* * * *AI* * * * *engagement* * * * *engine* * *  ”* * * *product* * *  .*

*AI* * * **may* * * **: * (i) * * *interpret* * * * *aggregated* * * * *state* * * * from* * * * *timeline* * * * + * * * *recent* * * * *events* * * *: * * *e.g* * * *  engaged* * * *,* * * *drifting* * * *,* * * * disengaged* * * * - * * *like* * * *,* * * * *inconsistent* * * *adherence* * * *,* * * *stalled* * * * *progress* * * *; * (ii) * * *suggest* * * * *draft* * * * *copy* * * * or* * * * *tone* * * * (encouragement* * * *vs* * * * *urgency* * * *)* * *with* * * *reference* * * * to* * * * *last* * * * *miss* * * *; * (iii) * * *suggest* * * * *message* * * * *type* * * * (education* * * *,* * * *reminder* * * *,* * * *escalation* * * *- * * * *like* * * *)* * *subject* * * * to* * * *human* * * *or* * * *policy* * * *- * * *gated* * * * *send* * *; * (iv) * * * flag* * * * *meaningful* * * * *deltas* * * *: * * *sudden* * * * *drop* * * * in* * * * *engagement* * * *,* * * *repeated* * * * *non* *- * *response* * * *,* * * *anomaly* * * * vs* * * * *baseline* * *; * (v) * * * *prioritize* * * * *at* *- * *risk* * * *candidates* * * *on* * * *rosters* * *; * (vi) * * *suggest* * * * *next* * * * *best* * * * *action* * * * (human* * * *or* * * * *`*`outbound_jobs`*)* * * for* * * * *staff* * *  .*

*AI* * * **must* * * **not* * * *: * *bypass* * * * throttles* * * or* * * * *`*`outbound_jobs`* * * * *policy* * *; * * * *send* * * *independently* * *; * * * *override* * * * *non* *- * *negotiable* * * vs* * * * *negot* * * * *classification* * *; * * * * *clear* * *a* * * *`*`clinical_required`*,* * * * *open* * *a* * * *permit* * *,* * *or* * * * *mutate* * * * *therapy* * * (* * *§* *1* *G* * * * *AI* * * *)* *  . * * *Goal* * * *: * * * *smarter* * * *and* * * * *more* * * *relevant* * * * *outreach* * * * **within* * * ** the* * * * *same* * * * *or* * * * *lower* * * * * *effective* * * * *frequency* * *  .*

**#### 1G.3(g) Persistent non-response (after T1–T3 with no engagement)**

- **Mark* * * `disengaged` * * (or* * * *product* *- * *named* * * * *equivalent* *)* * in* * * *`*`care_program`*.`*`metadata`*,* * * *`*`treatment_items`*,* * *or* * * *`*`patients`*,* * * *with* * * *a* * * *typed* * * * *`*`patient_timeline_events`*,* * * *e.g* * * *  `re_engagement_exhausted` * *  .*
- **Suppress* * * *further* * * *negot* *- * *class* * * *nudges* * *;* * * * *do* * * * *not* * * * *loop* * * * *T1* * *–* *T3* * * *forever* * *  .*
- **Surface* * to* * provider* * */* * *ops* * * rosters* * (*1G* *+* *1H* *)* * for* * human* * decision* *: * * visit* * *,* * call* * *,* * closure* * *or* * re* *- * *open* * *eligibility* * *—* * *not* * *more* * *automated* * *noise* *.*
- *Non-negotiable* *safety* *touches* *still* *per* *1G* *.* *3* *(*a* *)* *;* *separate* *from* *stopping* *engagement* *nudges* *(* *“* * *we* * *stopped* *nagging* * *”* * *—* * * *clinical* * *safety* * *may* * *still* * * *deliver* * * *per* * * *product* * * *policy* * *.* 

**#### 1G.3(h) Non-optional at scale (bundle) — fatigue + safe AI**

*Before* * *Hims* *- * *style* * * *throughput* * * *: * (i) * * *enforced* * * * throttling* * *+ * * * *suppression* * *+ * * * *caps* * * *in* * * * the* * * * *send* * * * *path* * *  *; * (ii) * * * *clear* * * * * `non_neg` * * * vs* * * * * `negot` * * *on* * * * *every* * * * *relevant* * * * *job* * *  *; * (iii) * * * *`disengaged` * * * *handling* * * *+ * * * *human* * * * * *surface* * *  *; * (iv) * * * * prefs* * * * for* * * * *negot* * * * *only* * *  *; * (v) * * * *AI* * * * *limited* * * * to* * * * * *interpretation* * * *,* * * * *draft* * * *,* * * * *prioritization* * * *suggestions* * * * *within* * * * *rules* * * * *—* * * * * *never* * * * * *the* * * * * *authority* * * * *on* * * * *sends* * * * *or* * * * *bypass* * *  *.*

**#### 1G.3(i) Post-interaction behavior loop (closed loop — not send-only)**

*Outbound* *is* *incomplete* *if* *there* *is* *no* *first-party* *path* *from* *`*`outbound_jobs`* *→* *interaction* *or* *conversion* *evidence* *on* *`*`patient_timeline_events`* *→* *updated* *`*`treatment_items`*/`*`care_program`*/`*`patients`*.`*`metadata`* *slices* *or* *flags* *→* *eligibility* *and* *next* *job* *(*policy, *1G*.*3*(a)*–*(b)*)* *—* *and* *no* *separate* *“growth”* *stack* *;* *same* *rows* *as* *rows* *(1)* *–*(8)* *above* *;* *money* *truth* *from* *`*`treatment_orders`*,* *1I* *,* *1E* *where* *checkout* *or* *compositional* *sessions* *apply* *;* *correlation* *via* *1H*.*1* *+* *stable* *ids* *in* *`*`outbound_jobs`*.`*`metadata`*,* *payload* *pointers* *on* *timeline* *rows* *.*

| # | **Pressure** | **Exists (typical / map-honest)** | **Partial** | **Target (same model — no CRM / attribution platform)** | **Non-optional before Hims-style scale** |
|---|--------------|----------------------------------|------------|-----------------------------------|----------------------------------------|
| (1) **Interaction evidence (not send receipts only)** | `outbound_jobs` *queued/sent*; * *some* *in-app* *nudges* *without* *a* *single* *correlation* *story* * | *Opens* *or* *clicks* *sometimes* *in* *vendor* *UIs* *or* *fragmented* *events* * | *First-party* *links* *+* *`*`patient_timeline_events`* *with* *`*`outbound_job_id`* *or* *product* *correlation* *id* *: * *open* *,* *click* *,* *landing* */* *portal* * *session* * *tied* * *to* * *campaign* */* * *nudge* * *; * *align* * *with* * *1H* *.*1* *| * *Every* * *relevant* * *negot* * *- * * *class* * * *nudge* * * *has* * * *a* * * *trace* * * * *path* * * to* * * * *at* * * * *least* * * * *“* * * *sent* * * * / * * * *delivered* * * * / * * * *opened* * * * / * * * *clicked* * * *  ”* * *or* * * * *explicit* * * * *first-party* * * * *equivalent* * *  . |
| (2) **Behavior state transitions (named, not ad hoc)** | *Stale* *,* *T1* *–* *T3* *,* *1G* * *tuple* * *parts* * *named* * *in* * *map* *  | *“* *Engaged* * *”* * or* * * *“* * *dropped* * *  ”* * * *without* * *a* * * * *single* * * * *product* * * * *enum* * * *or* * * * *timeline* * * * *event* * *  . | * *Derive* * * *`behavior_state`* * * *- * * * *like* * * * *or* * * * *`*`engagement_tier` / `engagement_intent` slice` * *in* * * *`*`metadata`*,* * *or* * *a* * * *small* * * * *set* * * * of* * * * * *typed* * * * *`*`patient_timeline_events`* * *on* * * * *transition* * * *: * * *e.g* * * *  *moved* * * * to* * * * *`*at_risk`*,* * * * *`*disengaged`*,* * * * *or* * * * * *continuation* * * * *- * * * *ready* * *  . | * *Roster* * * and* * * *policy* * * * *can* * * * *agree* * * *on* * * * * *the* * * * * *same* * * * * *labels* * * * *as* * * * *reporting* * * *; * * * *no* * * * *“* * * *only* * * * the* * * * *support* * * * * *agent* * * * * *knows* * * *  ”* * *  . |
| (3) **Differentiated follow-up (same spine, not one blast)** | *1G* * *classification* * *;* * *1G* *.*3* *(*a*)* * *non* *- * *neg* * *vs* * * *negot* * *  | *Copy* * *or* * * *channel* * * * *varies* * * *without* * * * *a* * * * *gated* * * * *“* * * *why* * * * *this* * * * *touch* * *  ”* * *  . | * * *Policy* * * * *picks* * * * *next* * * * *`*`outbound_job`* * * * *type* * * * *or* * * * *in* *- * *app* * * * *equivalent* * * * *from* * * * *last* * * * *interaction* * * * *+* * * * *current* * * * *eligibility* * * *: * * *e.g* * * *  * *clicked* * * *educational* * * * → * * * * *short* * * * *reminder* * * *; * * * *abandoned* * * * *checkout* * * * → * * * * *resume* * * * *nudge* * * * (* * *1E* * * * *+ * * * *1G* * * * *)* * *; * * * *converted* * * * *→ * * * * *continuation* * * * * / * * * * *silence* * * * *negot* * * *  . | * * *Touch* * * * *sequences* * * * * are* * * * *not* * * * *a* * * * * *single* * * * * *template* * * * *for* * * * * *all* * * * * *paths* * * * *; * * * *still* * * * * *`*`outbound_jobs` * * * *- * * * *gated* * *  . |
| (4) **Abandonment (detectable, not a mystery funnel)** | *1G* * *edge* * * *cases* * * *;* * *1E* * * *session* * * * *incomplete* * * * *where* * * * *product* * * * * *has* * * * * *it* * *  * | *“* *Left* * * *cart* * *  ”* * * *or* * * * *funnel* * * * *drop* * * * *in* * * * *a* * * * * *tool* * * * * *outside* * * * *the* * * * * *spine* * *  * | * * *Typed* * * * *timeline* * * * *+ * * * *order* * * * / * * * *1E* * * * * *state* * * *: * * *e.g* * * *  * *checkout* * * * * *abandoned* * * *,* * * * *treatment* * * * * * *order* * * * * *stalled* * *  *; * * * *join* * * * to* * * * * *`*`treatment_item_id`*,* * * * *`*`care_program_id` * *  . | * * *Support* * * * and* * * * *policy* * * * *can* * * * * *answer* * * * * *“* * * * *why* * * * * *no* * * * * *conversion* * * *  ”* * * *without* * * * * *reconstructing* * * * * *from* * * * * * *three* * * * * *systems* * *  * . |
| (5) **Conversion loop (stop redundant; move to Stage 6 / 1G.3 continuation)** | *1I* * * *`*active`*,* * * *`*`treatment_order`* * * * *status* * *  * | * *Nudges* * * * *and* * * * *dunning* * * * *both* * * * * *fire* * * *; * * * *or* * * * * *success* * * * * *touch* * * * * *still* * * * * *scheduled* * *  * | * * *On* * * * *convert* * * * *: * * * *suppress* * * *or* * * * * *cancel* * * * * *superseded* * * * *negot* * * * *jobs* * * *; * * * * *update* * * * * *continuation* * * * * *metadata* * * *; * * * * *emit* * * * * *timeline* * * *; * * * * *route* * * * *to* * * * * *Stage* * * *6* * * * * / * * * * *next* * * * * *check* *- * *in* * * * *per* * * * * *policy* * *  *  . | * * *No* * * * *orphan* * * * *nags* * * * *after* * * * *a* * * * * *satisfying* * * * * *money* * * * *+ * * * * *order* * * * * *outcome* * * *; * * * * * subscription* * * * *is* * * * * *not* * * * * *the* * * * * *only* * * * * *“* * * *win* * *  ”* * * * *signal* * *  * . |
| (6) **AI within rules (interpreter / suggester, not sender)** | *1N* * * *stub* * *;* * *1G* * * * *AI* * * * * *layer* * *  * | * *Draft* * * * *copy* * * * *without* * * * * *tied* * * * * *eligibility* * * * * *state* * *  * | * * *Same* * * * *as* * * * * *§* * * *(*f* *)* * and* * * * * *main* * * * *1G* * * * *AI* * * *: * * * * *interpret* * * *,* * * * *suggest* * * * * *next* * * * * *`*`outbound_job`* * * * * *type* * * * *or* * * * * *cadence* * * *; * * * * * *never* * * * * *bypass* * * * * *`*`outbound_jobs` * *  . | * * *Product* * * * * *does* * * * * *not* * * * * *treat* * * * * * *LLM* * * * * *as* * * * * * *a* * * * * * *channel* * * *; * * * * * *human* * * * *or* * * * * *policy* * * * * *sends* * *  * . |
| (7) **Non-optional loop closure (outbound is one step)** | * *Rows* * *(1)* *–* *(6)* * *in* * *1G* *.*3* *;* * *§* *(*h* *)* * *bundle* *  * | * *Sends* * * * *without* * * * *consistent* * * * * *post* *- * * *send* * * * * *interpretation* * *  * | * * *Same* * * * *as* * * * * *row* * * *(8)* * *in* * * *the* * * * *main* * * * *1G* *.*3* * * *table* * *: * * * *interaction* * * * *+ * * * * * *named* * * * * *transition* * * * + * * * * *suppression* * * * *on* * * * * *convert* * * *; * * * * *1H* *.*1* * * *traceable* * *  * | * * *Continuity* * * * *is* * * * * *not* * * * * *reconstructed* * * * * *only* * * * * * *when* * * * * * *the* * * * * *patient* * * * * * *complains* * *  *  . |

*Cross* *- * *links* *: * *Section* *1G* *(*Stage* *6* *,* *T1* *–* *T3* *,* *classifications* *,* * *§* *1* *G* * * *AI* *)* *,* *1F* *,* *1E* *(* *checkout* * */* * *compositional* * *as* * *relevant) *,* *1H* *.* *1* *,* *`*`outbound_jobs`*,* *1I* *,* *`*`treatment_orders`*,* *`*`treatment_items`*,* *`*`patient_timeline_events`*,* *1N* *stub* *;* *1G* *.* *2* *(*orthogonal* *—* *clinical* *safety* *at* * *decision* * *time* * *)* *;* *1D* *.* *1* *(* *who* * * *may* * * * *override* * * *or* * * * *tune* * * * in* * * * *policy* * * *)* *;* *1G* *.* *3* *(*i* *)* * *closed* * * *behavior* * * *loop* *  .*


### 1G.4 Provider supply, routing, and throughput (no workforce management product)

*Pressure-test:* The map already models **case ownership** (`responsible_party`, optional `responsible_user_id`), provider worklists, stale/SLA, and escalation in **1G/1G.1**, with operational trace in **1H.1** and role gates in **1D**. At scale, this must become explicit **supply-vs-demand discipline**: provider eligibility + deterministic routing + queue visibility + backlog escalation, all from existing rows (`care_program`, `treatment_items`, `treatment_orders`, `patient_timeline_events`, `audit_events`) and existing capability checks.

*No new architecture:* no separate workforce product, no staffing scheduler, no external queue engine. Routing and capacity are **policy + read-model + assignment metadata** in existing objects.

| # | Theme | **Exists (typical / map-honest)** | **Partial** | **Target (same model; no new workforce product)** | **Non-optional before scale** |
|---|------|-----------------------------------|------------|---------------------------------------------------|--------------------------------|
| (1) **Provider capacity by state / eligibility** | Jurisdiction guardrails in Intent; `StaffRole` + `Capability`; `responsible_user_id` exists; provider queues exist | Eligibility often inferred manually; "available capacity by state" not always explicit | Deterministic eligibility filter per case: (a) jurisdiction-of-care compatibility, (b) required capability (`can_prescribe` / treatment-authoring), (c) treatment-line policy tags from `treatment_items.metadata`; capacity signal as simple derived counters per provider/state in 1H read models | "Who can legally/operationally take this case now" is queryable and reproducible from existing fields |
| (2) **Case routing logic (assignment discipline)** | Provider ownership + optional assignee already in 1G | Assignment can be ad hoc/manual | Named routing policy in metadata/runbook (e.g. eligibility -> least-loaded, or round-robin within eligible set, with tie-breakers). Assignment writes `responsible_user_id` + reason/policy tag to timeline/audit | Every assignment is explainable: which policy selected which provider |
| (3) **Queue structure and load balancing** | 1G roster buckets (ready-for-review, lab review, message turn, ops exceptions) | Balance across providers/states not always explicit | Queue views include provider/state load columns (open cases, stale count, oldest age); "unassigned eligible" lane for overflow; rebalance action is audited reassignment (not hidden) | Prevent one-provider overload while peers idle using the same 1G queue surfaces |
| (4) **Provider decision SLA** | 1G stale/T1-T3 and 1G.1 SLA framing; 1H durations (`time_to_first_review`, `time_to_decision`) | Numeric targets and escalation thresholds may be implicit | Per queue/state SLA policy: time-to-review + time-to-decision thresholds; visible in queue rows and 1H dashboard slices; miss -> escalation path (owner bump / ops alert) | SLA visible + measurable + escalated, not inferred from complaints |
| (5) **Backlog and overflow handling** | 1G.1 ownership/escalation and 1H.2 platform ops exist | Backlog growth detection may be reactive | Derived backlog signals in 1H.1/1H views: queue depth trend, oldest age trend, stale-rate by state/provider; overflow playbook in same model: hold intake lane, redistribute to eligible providers, escalate to ops leadership | Demand > supply is detected early and routed through explicit escalation steps |
| (6) **State/provider bottlenecks** | Intent jurisdiction handling; provider queues by case | "State-specific bottleneck" often discovered late | State-sliced queue and SLA views for ops/admin; reroute only when legally eligible; if no eligible provider in-state, case remains queued with explicit blocker (`provider_capacity_state`) and SLA/escalation visibility | Ops/admin can see and act on bottlenecks without ad hoc SQL |
| (7) **Intake <-> capacity coupling** | Intake and program creation exist; ownership tuple exists | Intake may proceed blind to current capacity | Intake pre-check on unsupported/unavailable states: soft gate (ETA/warning) or hard gate per policy; write intake-capacity decision to timeline metadata so downstream review can explain delays | Basic capacity awareness at intake for unsupported/overloaded states |
| (8) **Provider utilization visibility (ops/admin)** | 1H metrics + 1G queues + `responsible_user_id` support attribution | Utilization often inferred manually | Standard utilization slices in 1H: cases per provider/state, p50/p90 review and decision time, backlog by provider/state, stale share, reassignment rate | Admin/ops can see utilization directly in approved internal surfaces |
| (9) **Minimum bundle before scale** | Pieces exist across 1G/1H/1D/Intent | Missing explicit contract across layers | Rows (1)-(8) tied to one routing/assignment policy contract + one queue/metrics contract + one escalation contract | Explicit eligibility+routing, queue visibility, SLA tracking, backlog escalation, and intake-capacity coupling are all in place |

#### 1G.4.1 Multi-state / jurisdiction runtime complexity (no separate jurisdiction engine)

*Pressure-test:* The plan already names jurisdiction in Intent and references state-aware routing in **1G.4**, but multi-state operations require explicit runtime gates at assignment, decision, order, and fulfillment steps. This subsection treats jurisdiction as a **live system constraint** using existing models (`patients` jurisdiction context, intake metadata, `treatment_items` / `treatment_orders`, 1G ownership tuple, 1H traces, 1D capabilities), not a separate compliance product.

| # | Theme | **Exists (map-honest)** | **Partial** | **Target (same layers; no new system)** | **Non-optional before many-state scale** |
|---|------|--------------------------|------------|-----------------------------------------|------------------------------------------|
| (1) **Provider eligibility by state** | Intent names jurisdiction-of-care; 1G.4 names state-aware eligibility | Eligibility checks may be policy/manual rather than enforced in every assignment path | Assignment pre-check requires: jurisdiction match + provider capability + treatment-line eligibility before writing `responsible_user_id`; failed check returns stable `ineligible_jurisdiction` reason | No provider assignment commit if provider is state-ineligible for that case |
| (2) **Routing constrained by jurisdiction** | 1G.4 routing policy and queue structure exist | Routing policy can drift if state rule is not first-class in selector | Routing order is explicit: filter by legal eligibility first, then load-balancing policy (least-load / round-robin / first-available within eligible set); manual reassignment follows same guard | No ad hoc routing path can bypass jurisdiction eligibility |
| (3) **State-specific treatment availability** | Intent permits state-aware prescribe/sign guard; treatment context already in `treatment_items` | State restrictions may be implied, not consistently enforced at all lifecycle points | Same state-treatment policy and same reason-code vocabulary applied at three gates: (a) intake pre-check, (b) decision/prescribe permit assert, (c) `treatment_order` creation. Unsupported state-treatment combination is blocked with explicit blocker/reason code | Treatment availability is state-bound and enforced at intake + decision + order creation with deterministic outcomes |
| (4) **Fulfillment differences by state** | 1G Stage 4/5 and 1H.1 trace already model fulfillment exceptions | State-specific partner/method differences may be known only operationally | Fulfillment path selection is state-aware from existing order metadata/policy; if unavailable, set explicit blocker (e.g. `fulfillment_unavailable_state`) -> `responsible_party: staff`, tracked in 1H.1 and surfaced in 1H.2 ops views | State-specific fulfillment constraints are visible, traceable, and operationally routable |
| (5) **Intake <-> jurisdiction coupling** | Intake and program creation exist; Intent requires single jurisdiction-of-care concept | Invalid demand can enter if intake captures state late or weakly | Intake captures jurisdiction context early and validates against state-treatment/provider availability policy before creating downstream demand; invalid combinations are blocked or held with explicit status | Intake cannot silently create unsupported state/treatment cases |
| (6) **State-level bottleneck visibility** | 1G.4 includes state bottleneck concept; 1H has queue/trace metrics | State slices not always standardized in ops/admin reporting | 1H views include: backlog by state, eligible-provider count by state, oldest-case age by state, SLA breach rate by state; available to ops/admin capabilities | State bottlenecks are visible without bespoke incident SQL |
| (7) **Failure modes and escalation** | 1G.1/1H.2 escalation patterns exist | Jurisdiction-specific failure handling can be inconsistent | Explicit runtime outcomes: (a) no eligible provider -> queue with `provider_capacity_state` blocker + escalation; (b) treatment not allowed -> hard block + alternate path message; (c) fulfillment unavailable -> ops exception lane + timeline/audit | Every jurisdiction failure mode has deterministic block/reroute/escalation behavior |
| (8) **Minimum bundle before scale** | Components exist across Intent + 1G.4 + 1H + 1D | Contract is distributed across sections | Rows (1)-(7) operate as one runtime contract across intake, routing, decision, order, and fulfillment with 1H visibility and 1D-gated interventions; same inputs + same rules + same outcome at each gate | Explicit state-based eligibility, state-constrained routing, state-treatment gates, intake validation, and state-level capacity/backlog observability |

*Operational rules (same model):*
- **One jurisdiction context:** all gating uses the same declared jurisdiction-of-care field, not mixed address heuristics.
- **One enforcement chain:** intake, assignment, permit/prescribe, order creation, and fulfillment routing each apply jurisdiction checks in server paths (not UI-only).
- **Determinism contract:** for the same case inputs (jurisdiction-of-care, treatment line, provider eligibility/capabilities), the system applies the same policy rules and returns the same allow/block outcome across intake, routing, decision, and fulfillment.
- **Fail early, never pass-then-fail-later:** if a state combination is invalid, it should be blocked at intake (or earliest available gate) with a stable reason code; downstream stages must not silently accept that same invalid combination.
- **One trace story:** jurisdiction-related block/reassign/escalation writes `patient_timeline_events` + `audit_events` with stable reason codes.
- **One capability boundary:** only authorized ops/admin roles can override or reroute within allowed jurisdiction constraints; no service-role human shortcut.

*Cross-links:* **Intent** jurisdiction rule, **1G** ownership tuple, **1G.1** SLA/escalation, **1G.4** routing/load policy, **1H.1** traceability, **1H.2** ops intervention, **1D / 1D.1** capability gating, intake + `treatment_items` / `treatment_orders`.

*Operational notes (same layers):*
- **Ownership:** `responsible_party` remains canonical; routing assigns `responsible_user_id` when provider-owned.
- **Trace:** `patient_timeline_events` and `audit_events` record assignment/reassignment, SLA breach, and escalation reason.
- **Capabilities:** only roles with appropriate 1D capabilities can assign/reassign provider ownership; no service-role human shortcut.
- **Jurisdiction:** routing cannot cross state/licensure constraints; when constrained, backlog is explicit, not hidden.

*Cross-links:* **1G** (ownership tuple), **1G.1** (SLA/escalation), **1H.1** (trace), **1H.2** (ops escalation), **1D / 1D.1** (capabilities), **Intent** jurisdiction rule, **1I** (revenue impact via decision latency), `treatment_items` / `treatment_orders` and intake metadata as routing context.

### 1G.5 Major exception handling and real-world failure resolution (no ticketing product)

*Pressure-test:* The map is strong on nominal flow and ownership tuple semantics, but exception handling must be explicit for real-world failures (wrong Rx/order, duplicate charge, fulfillment failure, patient confusion/anger, staff/provider error, system bug with patient impact, compliance-sensitive incidents). This section keeps the same architecture: **1G** ownership and queues, **1G.1** SLA/escalation, **1H.1** trace, **1H.2** platform intervention, **1I** payment rails, **1J** safety/identity controls, and **append-only** `audit_events` + `patient_timeline_events`.

| # | Theme | **Exists (map-honest)** | **Partial** | **Target (same model; no new system)** | **Non-optional before scale** |
|---|------|--------------------------|------------|----------------------------------------|--------------------------------|
| (1) **Exception categories** | Stage 4/5 exceptions, 1I failures, 1J risk pathways, 1H.2 platform incidents already exist as concepts | Category taxonomy is distributed and can be interpreted inconsistently | Canonical category set for ops use: `clinical_safety`, `payment`, `fulfillment`, `support_experience`, `platform_system`, `compliance_sensitive`; each incident tagged on first triage in metadata/timeline | Every serious exception is classifiable into one of the six categories with stable reason codes |
| (2) **First-response ownership** | `responsible_party` and 1G.1 owner model exist | First responder can be implicit during incidents | Category -> first owner default: clinical/safety -> provider + staff triage; payment/fulfillment/support -> staff (ops); platform/system -> platform owner via 1H.2 plus staff liaison; compliance-sensitive -> compliance/authorized admin path in 1J/1D | No major exception starts without an explicit owner and SLA clock |
| (3) **Escalation rules** | 1G.1 soft/hard escalation and 1H.2 platform ownership are defined | Trigger thresholds can be ad hoc | Escalation matrix by category and severity: provider, ops lead, admin/leadership, platform owner, compliance review when required (safety harm risk, identity abuse, legal/regulatory risk, repeated severe failure) | Escalation is deterministic and timestamped, not inbox-dependent |
| (4) **Resolution workflow** | 1H.1 trace + 1G.1 ownership provide pieces | Full end-to-end lifecycle not always named in one place | Required lifecycle for major exceptions: **detect -> classify -> contain -> communicate -> correct -> document outcome -> prevent recurrence**, with each step captured in timeline/audit where appropriate | Every serious case has a complete, reconstructable lifecycle in owned data |
| (5) **Communication discipline** | 1G messaging classes and capability/audit model exist | Wording responsibility can blur between ops and provider | Use approved message classes/templates: provider wording required for clinical interpretation/therapy implications; ops wording for logistics, refunds, timelines, and apology/status; patient-visible updates must be logged as timeline pointers | Patient communication path exists for each major category; no silent handling of patient-impact incidents |
| (6) **Audit trail of corrective actions** | `audit_events` + `patient_timeline_events` already central; no silent edits is an Intent principle | Corrective actions can be split across tools without a complete narrative link | Every corrective mutation includes actor, capability context, reason code, and linkage to affected scope ids; patient-visible corrective outcomes emit timeline events; no direct silent DB edits for incident resolution | What happened, who acted, what changed, and what patient was told are queryable |
| (7) **Serious-case closure + recurrence prevention** | 1H.2 runbook mindset and 1H.3 drift/retry exist | Post-resolution review is not always mandatory | Severity-based closure check: verify patient impact addressed, financial/fulfillment state reconciled, communications sent, and root-cause note captured; repeated patterns feed policy/runbook updates in same layers | Serious incidents require post-resolution review before final closure |
| (8) **Minimum bundle before scale** | Components exist across 1G/1H/1I/1J | Governance can remain implicit | Rows (1)-(7) operate as one exception discipline contract with category ownership, escalation, communication, and audit closure | Defined categories, owner per category, escalation rules, patient communication path, auditable fixes, and serious-case review are all mandatory |

*Contain clarification (resolution workflow row 4):* **contain** means preventing further system actions that could worsen the issue **before** correction begins.
- **Prevent duplicate actions:** block repeated charges, shipments, or notifications on the affected scope.
- **Stop downstream execution:** pause/cancel `outbound_jobs` and fulfillment/payment legs tied to the affected `care_program`, `treatment_item`, or `treatment_order` until safe to resume.
- **Use existing controls only:** containment is executed through existing state/ownership/flow controls in **1G**, **1G.1**, **1H.1**, and **1I** (blockers, owner reassignment/escalation, order/payment state, auditable transitions) — not a new mechanism.

*Correct clarification (resolution workflow row 4):* **correct** means resolving both **system state** and **real-world outcome** for the same incident.
- **System state correction:** fix data/status/records so case, order, payment, and blocker state are accurate.
- **Real-world correction:** complete the external remediation needed (e.g., payment correction, fulfillment correction, communication correction), not only internal record updates.
- **Traceable and explicit:** corrective actions must be recorded through existing `audit_events` and `patient_timeline_events`; no silent reversal or adjustment is allowed.

*Operational discipline (same system, no ticketing product):*
- **Category + severity first:** classify quickly and start the owner/SLA clock; do not wait for perfect diagnosis.
- **Contain before optimize:** stop additional harm (pause sends, hold fulfillment leg, block unsafe decision path) before deeper analysis.
- **Patient truthfulness and timing:** patient-impact incidents receive timely status communication through approved classes; no “resolved internally” without patient-facing closure when impact is patient-visible.
- **No silent correction:** corrective edits route through audited mutations; timeline captures patient-facing state transitions.
- **Platform/system incidents:** handled through 1H.2 ownership and runbook actions, with patient-case linkage in 1H.1/1G when impact exists.
- **Patient-state-trend incidents:** abnormal trackable trends from `Section 1M` (sudden weight drop on GLP-1, sustained high BP on home cuff readings, severe side-effect score escalation, dose intolerance pattern) may trigger `1G.5` exceptions in the **clinical_safety** category; severity per `1H.6.1D`; classification per `1H.6.1E` (typically `provider_decision_quality` for trend-driven escalation). Read source: `patient_state_observations` per `1M.8`.

*Cross-links:* **1G** ownership tuple, **1G.1** SLA/escalation, **1H.1** trace reconstruction, **1H.2** platform-owner intervention, **1I** payment correction/reconciliation, **1J** safety/identity/compliance-sensitive controls, **Section 1M** (patient-state observations as a trigger source for trend-driven exceptions), `audit_events`, `patient_timeline_events`, `outbound_jobs`.

### 1G.6 Provider workspace + admin/clinical leadership overlay (live operational queue, not a report)

*Pressure-test:* The map already names provider rosters and 1G.4 capacity/routing, but it does not yet name the **live operational surfaces** providers and clinical leaders use day-to-day. Reports (`1H.7`) are aggregate analysis; the **workspace + overlay** are the live queue surfaces operators work from. This subsection defines them as **derived views** over existing source-of-truth rows — no new queue product, no separate workflow engine, no parallel SoT.

*Reject:*

- A separate "queue product" / ticketing tool / standalone workflow engine.
- Aggregate-only reports (`1H.7`) being treated as the live working surface.
- Direct exposure of raw `staff_user_id` in shared/admin views (use the controlled provider dimension from `1H.7.2`).
- Drilldowns that bypass `requireCapability` or skip reason discipline where the map requires it.

#### 1G.6.1 Provider workspace (own clinical queue)

- **Scope:** the provider's own queue of cases requiring their clinical attention. Identity = the authenticated provider session; the workspace is **personal**.
- **Queue items derive from existing rows/states (no new tables):**
  - intake/decision reviews (`care_program` + `treatment_items` ready-for-review per `1G`)
  - refill requests (`refill_requests` or equivalent + Stage 6 due signals)
  - clinical visit drafts (`clinical_visits` in draft / pending state)
  - chart AI reviews (`patient_chart_ai_reviews` pending provider acceptance per Section 1G AI layer)
  - messages requiring clinical response (`messages` / `message_thread` with `clinical_required` + `awaiting_response` per `1G`)
  - lab results requiring review (`patient_diagnostic_reports` with `reviewed_at` unset where required)
- **Tuple consistency:** every queue item maps to the canonical `1G` tuple (`responsible_party`, optional `responsible_user_id`, `primary_blocker`, stage). The workspace shows the provider's items by `responsible_user_id = self` plus pool items they're eligible to claim per `1G.4`.
- **Live actions, not reports:** taking, deferring, or completing an item runs through the **same audited mutation paths** the rest of the map uses (`requireCapability`, `audit_events`, `patient_timeline_events` pointer when patient-visible). Workspace is a view; mutations are not.
- **PHI within capability:** providers see PHI for items they are clinically responsible for, gated by their existing clinical capability set (per `1J`, `1J.10`, Section 1G AI layer).

#### 1G.6.2 Admin / clinical leadership overlay (cross-provider view)

- **Scope:** a roll-up surface for ops leads, clinical leadership, CMO, and oversight roles per `Section 1G` Oversight model. Lets leadership see all provider queues without becoming a `responsible_party`.
- **Capabilities (additive; no new auth product):**
  - **`can_view_provider_queues`** — view cross-provider queue summaries (counts, age, SLA breach, item-type mix) using the **controlled provider dimension** from `1H.7.2` (`provider_key` / `provider_slug` / `display_name`); raw `staff_user_id` stays server-side.
  - **`can_drill_into_provider_queue`** — open a specific provider's queue list with item-level context.
  - PHI-bearing item drilldown still requires the **viewer's existing clinical/oversight capability** (e.g., chart access via `1J` / `1J.10`, oversight via Section 1G); reason code (`SensitiveAccessReason`) required when broad/sensitive per Intent.
  - No `super_admin` shortcut: viewing provider queues never grants chart/PHI capabilities by itself.
- **Sort + filter affordances (live, not analysis):** sort by queue depth, oldest-item age, SLA breach count, item-type mix (intake/refill/visit/lab/message/AI-review); filter by jurisdiction, program, item type, status. The overlay answers "Provider X is N behind — what is stuck and why?" by drilling into the same `1G` tuple + `1H.1` trace path, not a parallel queue store.

#### 1G.6.3 Live vs reporting boundary

- **Workspace + overlay (`1G.6`)** = live, item-level, capability-gated; supports action.
- **Reporting (`1H.7`)** = aggregate, dimension-grouped, suppression-applied; supports analysis.
- A drilldown that needs item-level PHI is `1G.6` (capability-gated PHI access); an aggregate by provider/state/program is `1H.7` (controlled provider dimension, no PHI).
- Cross-link: provider routing/eligibility/capacity behind both surfaces is defined in **`1G.7`** (provider routing, availability, assignment).

*Cross-links:* **1G** ownership, **1G.1** SLA/escalation, **1G.4** capacity/routing, **1G.7** routing/availability/assignment, **1H.1** trace, **1H.7** aggregate reporting, **1D / 1D.1** capabilities, **1J / 1J.10** PHI gating, **Section 1G** Oversight.

### 1G.7 Provider routing, availability, and assignment controls (no separate dispatch system)

*Pressure-test:* `1G.4` defines provider supply/capacity at a high level, and `1G.6` defines the workspace + admin overlay surfaces. Operators also need explicit **runtime control** over which provider receives which clinical work — taking into account multi-state licensing, prescribing authority, sign-on/sign-off, capacity, and admin overrides — without a separate dispatch product. This subsection defines the controls, eligibility rules, and assignment lifecycle using existing models only.

*Reuse only:* `staff_profiles` (and its license/availability/capability metadata, e.g. `service_state_codes`, `state_licenses`, `prescription_licenses`), `Capability` (`1D`), `care_program` / `treatment_items` / `treatment_orders` ownership tuple (`1G`), `patient_timeline_events`, `audit_events`, `outbound_jobs` for internal staff notifications when needed.

*Reject:*

- A standalone dispatch / scheduling / WFM product.
- Routing based on "who is signed in" alone.
- Assignment outside license/state/capability scope, even with admin override.
- Hidden provider availability state from admins/oversight.
- Raw `staff_user_id` exposed in shared/admin views (use the controlled provider dimension from `1H.7.2`).
- Silent reject/skip of assigned work (every transition is auditable).

#### 1G.7.1 Provider availability / queue status (operational states)

Providers carry an explicit **operational state** held in `staff_profiles` (or a small namespaced metadata key on it — no new table required):

| State | Meaning |
|---|---|
| **`offline`** | Not signed in; never receives queue items |
| **`signed_in`** | Authenticated session active, but **not** automatically eligible for queue assignment |
| **`open_for_queue`** | Eligible to receive new assignments per the eligibility rules in `1G.7.2` |
| **`paused`** | May finish existing assigned work; receives **no new** queue items |
| **`at_capacity`** | System-derived state when assigned-queue load reaches the configured cap; routing skips this provider for new items |
| **`unavailable`** | Blocked by schedule, license expiration/suspension, or admin setting; no new assignments |

**Rules:**

- `signed_in` does **not** equal `open_for_queue`. Providers must explicitly opt into `open_for_queue` (or admin sets it) before routing considers them.
- `paused` and `at_capacity` are distinct: `paused` is provider/admin-initiated; `at_capacity` is system-derived from current queue load vs cap.
- `unavailable` overrides all other states for routing eligibility (license/schedule/admin block).
- State transitions write `audit_events` (actor, prior + new state, reason where applicable); patient-impact transitions emit `patient_timeline_events` pointers (e.g., when an in-flight assignment must be reassigned because a provider goes `unavailable`).

#### 1G.7.2 Eligibility rules (deterministic; no exceptions for convenience)

A provider may receive a queue item only if **all** of the following are true at routing time:

1. **Licensed in patient jurisdiction** — `state_licenses` (and, for prescribing items, `prescription_licenses`) cover the patient's jurisdiction-of-care per Intent.
2. **Has required capability** — `Capability` set per `1D` covers the item type (e.g., `can_prescribe`, `can_clinical_treatment_authoring`, lab review capability).
3. **Has required prescribing authority** — for Rx-related items, prescriptive authority valid for the substance class and jurisdiction (`prescription_licenses` + DEA/controlled-substance metadata when applicable).
4. **Operational state is `open_for_queue`** — not `paused`, `at_capacity`, `unavailable`, or `offline`/`signed_in` only.
5. **Below capacity** — current assigned queue burden under the configured cap (per provider, optionally per item type).
6. **Not blocked by schedule/availability** — current time within configured availability window if the org models schedule.
7. **Allowed for the program / care line** — provider is in the eligible pool for that `care_program` / `treatment_item` per org policy / `staff_profiles` metadata.

**Hard rule:** any eligibility miss = **not eligible**. There is no "auto-fallback" to ineligible providers; the case stays in pool/queued with an explicit blocker (e.g., `provider_capacity_state`, `no_eligible_provider`) per `1G.4.1`.

#### 1G.7.3 Admin / clinical leadership controls (capability-gated, audited)

Admins and clinical leadership (per `Section 1G` Oversight) may, with the appropriate capability:

- View all provider operational states and queue depth (per `1G.6.2` overlay; controlled provider dimension).
- Manually **assign** or **reassign** cases (within eligibility — see override rule below).
- **Pause** a provider's new queue intake (set `paused`).
- Set **capacity limits** per provider or per item type.
- **Override** routing with a documented reason code (see "Overrides" below).
- Mark a provider **`unavailable`** (with reason).
- Route specific programs or states to specific providers (provider pool configuration on `staff_profiles` / org policy).

**Suggested capabilities (additive; no new auth product):**

- **`can_manage_provider_availability`** — change provider operational state on behalf of a provider (admin-initiated `paused` / `unavailable`, capacity caps).
- **`can_assign_provider_queue`** — manual assign/reassign of queue items.
- **`can_override_routing`** — manual override that goes outside the default routing policy (still cannot bypass clinical eligibility — see overrides).

**Overrides — strict:**

- Overrides may **never bypass** clinical eligibility (`1G.7.2` rules 1–3 and 7). License, prescribing authority, capability, and program/care-line allowance are hard gates.
- Overrides **may** bypass operational state (e.g., assign to a `paused` provider with consent) or capacity caps with a documented `reasonCode` in `audit_events`.
- Every override writes `audit_events` (actor, capability used, reason code, prior + new assignee) and a `patient_timeline_events` pointer when patient-visible.

#### 1G.7.4 Provider self-controls (capability-gated within the provider role)

Providers may, from the workspace surface (`1G.6.1`):

- Set themselves to `open_for_queue`.
- Pause new queue intake (set `paused`).
- Set a temporary `unavailable` status (with reason; subject to org policy on duration).
- See current capacity, assigned queue, and SLA aging on their own items.
- Finish already assigned items even when `paused` (existing assignments remain owned).

Providers **cannot**:

- Receive patients outside their license/capability scope (eligibility rules in `1G.7.2` are hard gates, not provider preferences).
- Override clinical eligibility rules (admin override path also cannot — see `1G.7.3`).
- Silently reject assigned work — declines/handoffs route through audited reassignment with `audit_events` (actor, reason) and a `patient_timeline_events` pointer when patient-visible.

#### 1G.7.5 Routing logic (derived; no separate queue database)

Routing is a server-side derivation over existing rows; assignment writes `responsible_user_id` (and where scoped, the per-`treatment_item` owner) on the canonical `1G` tuple — no parallel queue table.

**Routing policy (deterministic, per item):**

1. **Filter** the candidate pool by **all** `1G.7.2` eligibility rules (jurisdiction, capability, prescribing authority, `open_for_queue`, capacity, schedule, program allowance).
2. **Rank** the eligible candidates by **adjusted queue burden**: current assigned-queue depth weighted by item-type, age of oldest item, and SLA urgency on the incoming item.
3. **Tie-break** in this order: (a) SLA urgency of the incoming item (highest first), (b) lowest current queue burden, (c) longest time since last assignment, (d) deterministic hash for stability.
4. **Assign** to the top-ranked candidate; if pool is empty, leave item unassigned with `primary_blocker = no_eligible_provider` (or `provider_capacity_state` per `1G.4.1`) and surface to admin overlay.
5. **Re-evaluate** when provider state changes (e.g., `paused` → `open_for_queue`, capacity drops) or when a new item enters the pool.

**Defaults are tunable** via org policy in metadata/runbook; the **default routing policy** is "eligible provider with lowest adjusted queue burden, tie-broken by SLA urgency."

**Specialization (optional):** if `staff_profiles` carries specialization metadata (e.g., conditions, programs), routing may add specialization match as a pre-rank filter or rank weight; same eligibility rules still apply.

##### 1G.7.5a Routing fairness guard (anti-concentration, anti-starvation)

To prevent one eligible provider from absorbing all new items while peers sit idle, the routing rank in `1G.7.5` step (2) is adjusted by a **recent-assignment fairness signal** computed over a rolling window. This is derived from existing rows — no new table, no scheduler.

- **Source signal (no new SoT):** count of `queue.item.assigned` events (per `1G.7.6`) per provider over a configurable rolling window (default **30–60 minutes**). Computed from `audit_events` filtered by event code + actor target; cached in a short-lived read model if needed.
- **Rank adjustment:** add a **fairness penalty** to a provider's rank score proportional to recent-window assignment count, so providers with higher recent intake drop down the candidate list before tie-break.
- **Bounded effect:** the fairness penalty is capped (org-tunable) so it never overrides:
  - eligibility rules (`1G.7.2`) — hard gates remain hard.
  - SLA urgency tie-break (step 3a) — high-urgency items still go to the best-eligible provider quickly.
- **Starvation guard:** providers with **zero recent assignments** in the window get a small **fairness boost** in rank to ensure balanced distribution over time (without leaving high-urgency items waiting).
- **State-aware:** providers in `paused`, `at_capacity`, or `unavailable` are still excluded by eligibility — the fairness guard only re-balances among providers already in the eligible pool.
- **Auditable:** the fairness signal used for an assignment may be recorded in the `queue.item.assigned` event payload (per `1G.7.6`) so admin overlay and `1G.6` can show "why this provider was chosen" without exposing raw `staff_user_id` (use the controlled provider dimension from `1H.7.2`).
- **Tunable, not silent:** rolling-window length, penalty/boost magnitudes, and the SLA-urgency override threshold are org-policy parameters in metadata/runbook; defaults documented; changes audited.
- **No fairness for ineligible providers:** the guard never assigns work to providers outside license/capability/program scope to "balance" load. Eligibility is the hard floor.

*Goal:* keep distribution balanced over time and prevent both starvation and overconcentration on the same provider, while preserving SLA responsiveness for urgent items.

##### 1G.7.5b Assignment SLA enforcement (no silent stalls after assignment)

Once an item is assigned to a provider via `queue.item.assigned`, it must be **started within a defined response SLA** or the system enforces escalation. This closes the gap between assignment and pickup so cases cannot sit silently in a provider's queue.

- **Per-item SLA timer:** every `queue.item.assigned` event starts a **response-SLA timer** for that item, scoped to (item type, jurisdiction, urgency). Defaults are org policy in metadata/runbook (e.g., higher urgency / Rx items have shorter response SLA than routine refills).
- **Started signal:** the timer clears on `queue.item.started` per `1G.7.6`. Reassignment (`queue.item.reassigned`) **resets** the timer for the new owner; pause (`queue.item.paused`) suspends it until resume.
- **On breach (timer expires without `queue.item.started`):**
  - Emit **`queue.item.sla_breached`** per `1G.7.6` (`audit_events` + `patient_timeline_events` pointer when patient-visible).
  - **Surface in admin overlay (`1G.6.2`):** breached items appear with severity per `1H.6.1D` and status per `1H.6.1F`; counts roll up in the overlay's SLA-breach view.
  - **Escalation per `1G.1`:** breach triggers the existing escalation ladder (T1–T3 nudges, owner bump, ops/admin notification) — same SLA discipline used elsewhere; no parallel ladder.
  - **Optional auto-reassign:** when org policy permits, the system may **auto-reassign** the item back to the eligible pool and re-run routing (`1G.7.5` + fairness guard `1G.7.5a`). Auto-reassign writes `queue.item.reassigned` with reason `sla_breach_autorouted`. Auto-reassign is **off by default** for clinical-decision items; on by default for routine items per org policy.
- **Severity tie-in:** persistent assignment SLA breach (e.g., breach + `Critical` severity per `1H.6.1D` for the related operational metric) triggers the `1G.5` exception workflow with category typically `provider_capacity_constraint` or `provider_decision_quality` per `1H.6.1E` classification vocabulary.
- **No silent stalls:** an assigned item that is neither started nor explicitly paused/declined by the provider **cannot** sit past SLA without producing `queue.item.sla_breached`; the admin overlay always shows breached items with current owner and age.
- **Provider visibility:** providers see SLA aging on their own owned items in the workspace (`1G.6.1`) so breach is preventable, not just observable.
- **Auditability:** SLA configuration changes, breach events, escalation triggers, and any auto-reassignments are all written to `audit_events` (with patient pointers when applicable). Reassignment after breach also resets fairness signal per `1G.7.5a`.
- **Hard rule:** assignment SLA enforcement **cannot bypass eligibility** (`1G.7.2`). If no eligible provider remains for auto-reassign, the item stays unassigned with explicit blocker (`no_eligible_provider`) and surfaces to admin overlay per `1G.4.1` + `1G.6.2`.

*Goal:* prevent silent stalls after assignment by ensuring every assigned item is either started within SLA or visibly escalated, owned, and re-routed where allowed.

##### 1G.7.5c Provider performance signal (visibility only; does not alter routing in v1)

To surface performance issues without overcomplicating routing, the admin overlay (`1G.6.2`) shows a small set of per-provider performance signals. **These are read-only signals; v1 routing (`1G.7.5`) and fairness guard (`1G.7.5a`) ignore them.**

- **Signals (derived, no new SoT):**
  - **Average time-to-start** — mean time from `queue.item.assigned` to `queue.item.started` per provider over a rolling window (org policy, e.g., 7d / 28d).
  - **Average time-to-decision** — mean time from `queue.item.started` to `queue.item.completed` per provider over the same window (or to the relevant decision transition where the product names it).
  - **SLA breach rate** — share of recent assignments that produced `queue.item.sla_breached` (per `1G.7.5b`) for that provider in the window.
- **Sources:** all signals are aggregates over `audit_events` + `patient_timeline_events` queue lifecycle codes from `1G.7.6`. No new tables; no parallel "performance" SoT.
- **Display:** rendered in the admin overlay (`1G.6.2`) using the **controlled provider dimension** from `1H.7.2` (`provider_key` / `provider_slug` / `display_name`) — raw `staff_user_id` stays server-side.
- **Capability:** view requires `can_view_provider_queues` (or per `1G.6.2` overlay capability); per-provider drill respects same gating as queue drilldown.
- **Baseline + severity (reuse `1H.6.1D`):** signals may be rendered with the same baseline-comparison and severity convention as the daily dashboard, so admins can read trend (Up/Flat/Down) and severity (Normal/Watch/Action-needed/Critical) at a glance.
- **No routing influence in v1 (hard rule):**
  - `1G.7.5` rank ordering does **not** read these signals.
  - `1G.7.5a` fairness guard does **not** weight them.
  - `1G.7.5b` SLA enforcement still operates per-item, not per-provider history.
  - Future tuning (e.g., performance-aware tie-break) is out of scope until explicitly added in a later revision.
- **Operator use (out of routing path):** Action-needed/Critical performance signals on a provider trigger admin-side review per `Section 1G` Oversight model — coaching, capacity adjustment via `1G.7.3` controls, or `1G.5` exception classification (typically `provider_capacity_constraint` or `provider_decision_quality` per `1H.6.1E`).
- **Reporting tie-in:** the same signals are queryable as aggregate reports via `1H.7` using the provider dimension; same capability discipline applies.
- **No PHI in performance outputs:** signals are aggregates; no patient-level or chart content surfaces in the performance view.

*Goal:* surface provider performance issues to admins without entangling them with v1 routing logic — same data, separate concerns.

##### 1G.7.5d Program-level routing preference (preferred subsets with fallback)

Admins / clinical leadership may define **preferred provider subsets** per program / care line so specialized providers see specialized work first — without ever blocking coverage when preferred providers are unavailable.

- **Configuration (no new tables):** preferred provider subsets per `care_program` / care line are stored in **org policy / `staff_profiles` metadata** (or a small namespaced key on `care_program` config) — same extensibility seam used elsewhere (per `1G.7.3`). No new dispatch product.
- **Capability:** changes to program preference require **`can_manage_provider_availability`** (or a dedicated `can_configure_program_routing` if added later) per `1D / 1D.1`; all changes write `audit_events` (actor, prior + new subset, reason).
- **Routing behavior (extends `1G.7.5`):**
  1. Build the eligible pool per `1G.7.2` (license, capability, prescribing authority, `open_for_queue`, capacity, schedule, program allowance) — eligibility rules are still hard gates.
  2. Within the eligible pool, **partition** into:
     - **Preferred subset** = eligible providers in the program's preferred list.
     - **Fallback subset** = remaining eligible providers (unrestricted).
  3. **Prefer the preferred subset:** rank and assign within the preferred subset first using `1G.7.5` rank + `1G.7.5a` fairness guard.
  4. **Fallback to full eligible pool:** if the preferred subset is empty, all members are `at_capacity` / `paused` / `unavailable`, or no preferred candidate clears the fallback threshold below, route from the **full eligible pool** with the same rank + fairness logic.
- **Fallback thresholds (org-tunable, prevent starvation of urgent items):** fallback may also trigger early when:
  - **SLA-urgency override:** high-urgency item per `1G.7.5b` would breach if held for the preferred subset; route immediately from full eligible pool (logged with reason `program_preference_overridden_for_sla`).
  - **Wait threshold:** time since `queue.item.created` exceeds an org-policy wait window without preferred-subset assignment.
  - **Coverage gap:** preferred subset is empty in the patient's jurisdiction (per `1G.4.1` state eligibility); fallback is automatic.
- **Hard rules:**
  - **Preference is preference, not gating:** preference can never override eligibility (`1G.7.2` rules 1–3, 7) — license, prescribing authority, capability, and program allowance remain hard gates.
  - **Coverage is never broken:** if no eligible provider exists in either subset for the patient's jurisdiction/program, item stays unassigned with explicit blocker (`no_eligible_provider`) per `1G.4.1` and surfaces to admin overlay (`1G.6.2`) — preference never causes silent stalls.
  - **Auditable:** assignment events (`queue.item.assigned`) carry the routing reason in payload (e.g., `routed_via: program_preferred` vs `routed_via: program_fallback` with optional fallback trigger code) per `1G.7.6`; admins can see "why this provider" in the overlay using the controlled provider dimension from `1H.7.2`.
  - **Fairness still applies:** `1G.7.5a` fairness guard runs **within** the active subset (preferred first, then fallback) so preference doesn't starve any provider in either subset.
- **Visibility:** admin overlay (`1G.6.2`) shows program preference configuration, current preferred-subset coverage by jurisdiction, and recent fallback rate per program (helps detect when a "preferred" subset is too narrow to sustain coverage).
- **Reporting:** same signals are queryable via `1H.7` using program × controlled-provider dimensions; aggregate-only.

*Goal:* enable program-level specialization while guaranteeing coverage — preferred providers absorb the specialized work first, but the system never holds an item if the preferred subset cannot serve it.

#### 1G.7.6 Queue item lifecycle (event vocabulary)

Assignment events use stable codes; patient-scoped events go to `patient_timeline_events`, admin/system routing actions go to `audit_events`. No new tables; payload carries `care_program_id` / `treatment_item_id` / `treatment_order_id` per `1H.1` standardized payload contract.

| Event code | Where | Meaning |
|---|---|---|
| `queue.item.created` | `patient_timeline_events` | Item became eligible for provider queue (e.g., intake completed, refill requested, lab ready for review) |
| `queue.item.assigned` | `audit_events` (+ `patient_timeline_events` pointer) | Item assigned to a provider via routing or admin action |
| `queue.item.reassigned` | `audit_events` (+ pointer) | Owner changed (system, admin, or provider handoff) |
| `queue.item.paused` | `audit_events` | Item paused (provider state change, blocker, hold) |
| `queue.item.started` | `patient_timeline_events` | Provider started actively working the item |
| `queue.item.completed` | `patient_timeline_events` | Provider finished the item; downstream state advances |
| `queue.item.escalated` | `audit_events` (+ pointer) | Item escalated per `1G.1` SLA / `1G.5` exception |
| `queue.item.sla_breached` | `audit_events` (+ pointer) | Item passed SLA threshold without resolution |

**Outbound notifications:** when notifying a provider/admin about new assignment, escalation, or SLA breach uses `outbound_jobs` (per `1G.3` send policy / fatigue rules).

**No external side effects** unless `outbound_jobs` is needed for internal notifications.

#### 1G.7.7 Visibility (workspace and overlay)

- **Provider workspace (`1G.6.1`):** my queue, my operational state, my capacity, controls to set `open_for_queue` / `paused` / `unavailable`, see SLA aging on owned items.
- **Admin / clinical leadership overlay (`1G.6.2`):** all provider operational states, queue depth per provider (controlled dimension), `open_for_queue` status, SLA breaches, state/program coverage gaps (e.g., "no eligible provider in state X for program Y"), and manual reassignment controls.
- **Coverage gap surfacing:** when `1G.7.2` eligibility leaves a pool empty for one or more cases, the admin overlay shows the gap (state × program × item type) so leadership can adjust licensure, capacity caps, or pool composition. See **`1G.7.7a`** for the explicit coverage-gap view.

#### 1G.7.7a Coverage-gap view (explicit admin surface; aggregate-first, capability-gated drilldown)

A dedicated coverage-gap surface in the admin overlay (`1G.6.2`) tells leadership where work cannot currently be routed and why. **Aggregate-first** so admins can see the operational picture without exposing PHI; drilldown to item-level only with appropriate capability.

- **Blocker reasons surfaced (stable codes; reuse `1G.4.1` + `1G.7.2` vocabulary):**
  - `no_provider_licensed_in_jurisdiction` — no eligible provider holds a `state_licenses` / `prescription_licenses` row for the patient's jurisdiction.
  - `eligible_providers_unavailable` — eligible providers exist but all are `paused`, `unavailable`, or `offline` per `1G.7.1`.
  - `preferred_subset_saturated` — preferred subset per `1G.7.5d` is at capacity or unavailable; fallback may be in progress or pending policy threshold.
  - `provider_capacity_blocked` — eligible providers are in `at_capacity` state per `1G.7.1` (capacity caps from `1G.7.3`).
  - `required_capability_missing` — no eligible provider in the pool holds the required `Capability` for the item type (per `1G.7.2` rule 2 / 3, e.g., prescribing authority for a controlled substance).
- **Default grouping (aggregate, no PHI):**
  - jurisdiction (state/region per Intent jurisdiction-of-care)
  - program / care line (`care_program` config)
  - blocker reason (codes above)
  - count of waiting items
  - oldest waiting item age (from `queue.item.created` per `1G.7.6`)
- **Source (no new SoT):** derivation over existing rows — `care_program` / `treatment_items` with no current `responsible_user_id`, joined to `staff_profiles` license/capability/availability state and `1G.7.6` queue events. Same SoT as routing itself; no parallel "coverage" table.
- **Capabilities:**
  - **`can_view_provider_queues`** (already in `1G.6.2`) — view the aggregate coverage-gap summary (counts, ages, blocker reasons by jurisdiction × program). No PHI in summary.
  - **`can_drill_into_provider_queue`** — drill from a coverage-gap row into the underlying waiting items list with item-level context. PHI in drilldown is gated by the **viewer's existing clinical/oversight capability** (per `1J`, `1J.10`, Section 1G); reason code (`SensitiveAccessReason`) required when broad/sensitive per Intent.
  - No new "super-coverage" capability; no `super_admin` shortcut.
- **Output discipline (mandatory):**
  - **Aggregate first:** the default view is grouped counts + ages by jurisdiction × program × blocker reason — no `patient_id`, no names, no chart content.
  - **Controlled provider dimension:** when surfacing eligible/ineligible provider context (e.g., "0 eligible in state X" or "3 eligible but all paused"), use `provider_key` / `provider_slug` / `display_name` from `1H.7.2`; raw `staff_user_id` stays server-side.
  - **PHI only on capability-gated drilldown:** item-level context exposed only when the drilldown viewer has the appropriate clinical capability and reason discipline.
  - **Small-cell suppression:** the same `1H.4.1`-style suppression principle applies to the aggregate view to avoid re-identification at small jurisdiction × program intersections.
- **Actionable blockers (each maps to a specific lever):**
  - `no_provider_licensed_in_jurisdiction` → adjust `state_licenses` coverage (recruit / license / route to partner) per `1G.7.3`.
  - `eligible_providers_unavailable` → review provider state (`paused` / `unavailable`) per `1G.7.4` and `1G.7.3`; if persistent, capacity adjustment.
  - `preferred_subset_saturated` → expand preferred subset per `1G.7.5d` or rely on fallback; tune thresholds.
  - `provider_capacity_blocked` → adjust capacity caps per `1G.7.3` or open more providers to `open_for_queue`.
  - `required_capability_missing` → grant capability per `1D / 1D.1` to an eligible staff member (audited) or onboard a provider with the capability.
- **Severity + trend (reuse `1H.6.1D`):** coverage-gap rows may carry severity (Normal/Watch/Action-needed/Critical) and short-term trend (Up/Flat/Down) using the same baseline convention as the daily dashboard. Sustained Action-needed or Critical coverage gaps trigger the `1G.5` exception workflow with classification typically `provider_capacity_constraint` per `1H.6.1E`.
- **Reporting tie-in:** the same coverage-gap signals are queryable as aggregate reports via `1H.7` (group by jurisdiction × program × blocker reason × time window) using the controlled provider dimension; same capability discipline.
- **Hard rule:** the coverage-gap view exposes blockers, not patients. PHI never appears in the summary; drilldown follows existing clinical capability gates.

*Goal:* let admins answer "Do we have a staffing / licensing / capacity problem right now?" with one glance — aggregate-first, blocker-coded, action-routable, PHI-safe.

#### 1G.7.8 Guardrails (mandatory)

- **No separate dispatch platform** — routing/assignment is a server-side derivation over existing rows.
- **No bypass of capability enforcement** — clinical eligibility (`1G.7.2` rules 1–3, 7) cannot be overridden, even by admin.
- **No routing based only on `signed_in`** — `open_for_queue` is required.
- **No assignment outside license/state scope** — eligibility rules are hard gates.
- **No hidden provider state** — admins/oversight can always see operational state and queue depth (controlled dimension).
- **No raw internal IDs in shared views** — admin overlay and reporting use the controlled provider dimension from `1H.7.2`; raw `staff_user_id` stays server-side.
- **No silent rejects** — every state transition, assignment, override, and reassignment is auditable.

#### 1G.7.9 Cross-links

**1G** ownership tuple, **1G.1** SLA/escalation, **1G.4** provider supply/capacity, **1G.4.1** multi-state runtime jurisdiction, **1G.5** exception handling (when assignment fails or stalls), **1G.6** workspace + admin overlay surfaces, **1H.1** trace, **1H.7.2** controlled provider dimension, **1D / 1D.1** capabilities and elevation, **Intent** jurisdiction-of-care, `staff_profiles`, `state_licenses`, `prescription_licenses`, `service_state_codes`, `audit_events`, `patient_timeline_events`, `outbound_jobs`.

### 1G.8 Provider workspace (minimal v1; operational only — not a dashboard)

*Scope:* This subsection refines the provider-facing **live operational surface** introduced in `1G.6.1`. It is a **work surface**, not analytics. The goal is for a provider to process clinical work quickly, safely, and consistently. **No analytics dashboards. No reporting UI. No comparisons across providers.** All surfaces derive from existing rows; routing, availability, and SLA logic come from `1G.7`.

*Reject:*

- Analytics / KPI dashboards in the provider workspace.
- Cross-provider performance comparisons or leaderboards.
- New tables for queue / inbox / status (all derived from `1G` ownership tuple, `1G.7` operational state, and `1G.7.6` queue events).
- PHI exposure beyond what the task requires.

#### 1G.8.1 Surfaces (v1 set)

The minimal v1 workspace consists of:

1. **My Queue** (primary work surface)
2. **My Status** (availability control)
3. **My Performance** (light, same-day only)
4. **Patient context drawer** (per-item chart/safety snapshot — capability-gated)
5. **Clinical messages inbox** (messages requiring a clinical response)
6. **Lab review drawer** (results requiring my review)
7. **Ops/staff messaging channel** (provider ↔ ops; not patient-facing)
8. **Grouped views / filters** (new vs follow-up, urgent, by item type)
9. **Notifications + preferences** (subject to `1G.3` send policy)
10. **Recent activity / quick undo window** (audited)

All of these are **derived views over existing source-of-truth rows** — no parallel inbox/queue/notification system.

#### 1G.8.2 My Queue (required)

The primary surface where the provider processes work.

- **Header display (at-a-glance):**
  - total assigned items (count)
  - urgency mix (SLA buckets per `1G.7.5b`: e.g., breached / due-soon / on-track)
  - oldest item age
  - per-item SLA timers
  - item type counts (intake/decision review, refill, follow-up, lab review, message turn, chart AI review)
- **Per-item row (PHI-minimum context):**
  - `created_at`, `assigned_at`, SLA due time
  - patient-safe context only (e.g., `patient_key` or display ref, program/care line, item type, current `primary_blocker`); **no full chart content in the row** — chart loads in the patient-context drawer per `1G.8.5`
  - required action (e.g., "Approve / deny treatment", "Review lab result", "Reply to clinical_required message")
- **Actions (audited mutations through existing paths):**
  - Start item → `queue.item.started` per `1G.7.6`
  - Complete item → `queue.item.completed`
  - Reassign / escalate → `queue.item.reassigned` / `queue.item.escalated` (capability-gated per `1G.7.4` and `1G.1`)
  - Pause item → `queue.item.paused` (if allowed by item type / org policy)
- **SLA visibility:** SLA timer is **always visible per item** before breach; breaches per `1G.7.5b` render with severity per `1H.6.1D`.
- **Source of truth:** items derived from `1G` ownership tuple where `responsible_user_id = self`, plus pool items the provider is eligible to claim per `1G.7.2`.
- **Hard rule:** no silent backlog — every item is visible with SLA state; no item can sit on the queue without an SLA frame.

#### 1G.8.3 My Status (required)

Provider availability control surface — the only place a provider self-changes operational state per `1G.7.1`.

- **Provider can set:**
  - `open_for_queue`
  - `paused`
  - `unavailable` (with reason; subject to org duration policy per `1G.7.4`)
- **Display:**
  - current operational state (per `1G.7.1`)
  - current queue size
  - capacity indicator vs cap (when applicable per `1G.7.3`)
  - latest assignment SLA aging summary
- **Rules:**
  - `signed_in` ≠ `open_for_queue` (must explicitly opt in).
  - `paused` allows finishing existing work; receives **no new** queue items.
  - `unavailable` blocks all new assignments and persists until cleared.
  - Status changes write `audit_events` per `1G.7.1`.

#### 1G.8.4 My Performance (light, same-day only)

A small **same-day** performance strip — not analytics. Helps the provider self-correct in the moment.

- **Display (today only):**
  - items completed today (count)
  - avg time-to-start (today)
  - SLA adherence (today)
  - optional: earnings today (if compensation is variable; org-policy)
- **Rules:**
  - No historical analytics; no rolling baselines; no peer comparison.
  - No leaderboard, no scoring system, no ranking.
  - Same-day only — historical/comparative views live in admin overlay (`1G.6.2`) and reporting (`1H.7`), not the provider workspace.

#### 1G.8.5 Patient context drawer (per-item; capability-gated)

When the provider opens an item, a **patient-context drawer** loads the minimum required clinical context — same chart/safety primitives the rest of the map already uses.

- **Content (PHI-minimum for the action):**
  - relevant chart sections (allergies, active meds, conditions) — same context as `loadPatientCaseSafetySnapshot` per `1J.10` for high-risk decisions.
  - relevant intake/decision history (`care_program` + `treatment_items`) for the active item.
  - lab results when the item is a lab review (`patient_diagnostic_reports`).
  - thread context when the item is a message turn (`message_thread` for that `care_program`, latest turns only).
  - safety flags from `1G.2` active enforcement (contra/dup/dose/allergy outcomes for the proposed action).
- **Rules:**
  - Capability-gated per `1J / 1J.10` (clinical chart access); broad/sensitive reads write `SensitiveAccessReason` per Intent.
  - Drawer is **per item** — no cross-patient browsing surface in the workspace.
  - `patient_chart_ai_reviews` (Section 1G AI layer) suggestions surface in the drawer as **suggestions**, never authority — provider accepts/edits/rejects via existing audited paths.
  - PHI is loaded only when the drawer is opened (no preloading in the queue list).

#### 1G.8.6 Clinical messages inbox (required clinical responses)

A focused inbox of **messages requiring a clinical response** — derived from existing `message_thread` / `messages` rows where `clinical_required` + `awaiting_response` is set per `1G`.

- **Content:**
  - threads requiring this provider's clinical response (`responsible_user_id = self`, plus eligible pool per `1G.7.2`).
  - per-thread: latest patient turn, age, SLA state, related `care_program` / `treatment_item`.
- **Actions (audited):**
  - Open thread → loads transcript via `message_thread` SoT (not a copy).
  - Reply → outbound through the same audited messaging path used elsewhere; AI-suggested drafts allowed per Section 1G AI layer (assistive only — never sends).
  - Reclassify message (e.g., to `clinical_optional` / `operational`) per `1G` classification — capability-gated, audited.
- **Rules:**
  - **Not** a separate inbox system; threads remain the SoT, the workspace surfaces them.
  - Replies cannot clear `clinical_required` blockers without satisfying the existing `1G` permit/blocker rules.
  - Operational/non-clinical messages route to ops queues, **not** the provider clinical inbox.

#### 1G.8.7 Lab review drawer (results requiring my review)

A focused list of **lab results awaiting this provider's review**.

- **Content:** `patient_diagnostic_reports` (and structured `patient_lab_observations` where applicable) with `reviewed_at` unset and the provider as the responsible reviewer per `1G` ownership.
- **Actions (audited):** open report, mark `reviewed_at` (with prescriber identity per Intent precedence), document follow-up, escalate to clinical leadership when needed.
- **Rules:** lab review actions go through the **same audited mutation paths** the rest of the map uses (1J.10 preflight where required, `audit_events`, optional `clinical_visits` addendum per Intent precedence). No silent acknowledgements.

#### 1G.8.8 Ops/staff messaging channel (provider ↔ ops; not patient-facing)

Providers can message ops/support staff for non-clinical operational issues without touching patient threads.

- **Channel:** an **internal** `message_thread`-class surface scoped to staff-to-staff communication (e.g., reuses `message_thread` + `message_thread_participant` model with a `staff_internal` thread type, per existing messaging primitives — no new product).
- **Use cases:** ask ops about a fulfillment exception, payment hold, identity question, system issue, or escalation; ops can coordinate without inserting into patient threads.
- **Rules:**
  - **Never** patient-facing; participants are staff only; visibility per `1D / 1D.1` capability.
  - Linkable to the relevant `care_program` / `treatment_order` / `1G.5` exception via payload pointers, but the **patient `message_thread`** remains the SoT for clinical conversation.
  - Audited via `audit_events`; sensitive content discipline applies (no PHI in title/preview, full message body in the secured thread).
  - Ops responses do not change `1G` ownership unless an explicit handoff is recorded.

#### 1G.8.9 Grouped views and filters (Hims/Epic-style organization)

Within My Queue, the provider can filter and group items into focused work modes — all derived from the same SoT, no new tables.

- **Default groups:**
  - **New reviews** (intake/decision items not yet started)
  - **Follow-ups** (continuation, refill, post-visit) per Stage 6
  - **Lab review** (subset of `1G.8.7`)
  - **Message turns** (subset of `1G.8.6`)
  - **Chart AI reviews** (`patient_chart_ai_reviews` pending acceptance)
- **Quick filters:** by SLA bucket (breached / due-soon / on-track), by program/care line, by jurisdiction (when relevant), by item type, by age.
- **Sorts:** SLA urgency (default), oldest first, item type, age.
- **Saved focus modes (optional):** provider may pin one or two filter combinations as personal defaults; stored on `staff_profiles.metadata` (no new table).
- **Rules:** filters/groups are read-side derivations; they never change ownership, SLA, or eligibility.

#### 1G.8.10 Notifications and preferences

Provider-facing notifications (in-app, email, SMS where org policy allows) for assignment, SLA approaching/breach, escalations.

- **Channel + cadence governed by `1G.3` send policy** (non-neg vs negot, fatigue caps, suppression). Provider preferences may tune **negotiable** notifications only — non-negotiable safety/SLA-breach notifications cannot be silenced.
- **All sends use `outbound_jobs`** with idempotency and audit per `1G.3(b)`.
- **No parallel notification stack.**

#### 1G.8.11 Recent activity / quick-undo window

A short list of the provider's recent actions in the workspace with a bounded **quick-undo window** for reversible actions (e.g., "mark started" → "unstart" within N minutes), strictly within audited mutation paths.

- **Rules:**
  - Undo is **only** for clearly reversible state transitions explicitly allowed by org policy (e.g., `started → unstarted` within a small window). Clinical decisions, prescribe/sign, or `reviewed_at` actions are **not** undoable from this surface — corrections go through the same audited paths the map already requires.
  - Every undo writes `audit_events` (actor, prior + new state, original audit id reference) and a `patient_timeline_events` pointer when patient-visible.
  - No silent reversals; undo is fully transparent.

#### 1G.8.12 Guardrails (mandatory)

- **PHI minimum:** workspace surfaces show only the PHI required for the task; full chart loads via the per-item drawer (`1G.8.5`) and is capability-gated.
- **No exposure of other providers' detailed data** in the provider workspace; cross-provider context lives in admin overlay (`1G.6.2`) under appropriate capability.
- **No reporting / analytics UI** beyond the same-day `My Performance` strip (`1G.8.4`); historical / comparative analysis lives in `1H.6` / `1H.7` (admin/ops surfaces).
- **All actions logged to `audit_events`** with patient pointers via `patient_timeline_events` where patient-visible.
- **No new SoT:** queue, inbox, lab list, status, ops thread, and notifications are all derived from existing rows / messaging primitives / event spines.
- **No silent work or hidden backlog:** every item shows SLA state; nothing sits on the queue without a visible frame.
- **No silent reject of assigned work:** declines/handoffs route through audited reassignment per `1G.7.4`.
- **Capability-gated everywhere:** chart/PHI access, ops messaging, reassignment, undo, and reclassification all require the appropriate `1D / 1D.1` capability and reason discipline where the map requires it.

#### 1G.8.13 Non-optional (v1)

- Provider can see and act on their queue in real time with **SLA visibility always present**.
- Provider can control their availability per `1G.7.1` from the workspace.
- Patient context drawer is capability-gated and PHI-minimum.
- Clinical messages inbox + lab review drawer are first-class workspace surfaces (not separate apps).
- Ops/staff messaging channel is available for non-clinical coordination.
- All actions are audited; no silent work, no hidden backlog.

*Goal:* maximize throughput, minimize delays, maintain safety — give providers exactly what they need to process work quickly and consistently, and nothing more.

#### 1G.8.14 Cross-links

**1G** ownership tuple, **1G.1** SLA/escalation, **1G.2** active safety enforcement, **1G.3** send policy / fatigue, **1G.5** exception handling, **1G.6** workspace + overlay framing, **1G.7** routing/availability/assignment + lifecycle events, **1H.1** trace, **1H.6 / 1H.7** analytics live outside the provider workspace, **1J / 1J.10** clinical safety preflight + chart capability gating, **1D / 1D.1** capabilities, **Section 1G** AI layer (assistive only), `message_thread` / `message_thread_participant`, `patient_diagnostic_reports`, `patient_chart_ai_reviews`, `audit_events`, `patient_timeline_events`, `outbound_jobs`.

### 1G.9 Clinician continuity, follow-up ownership, and rerouting (no mini-practice; no work trapping)

*Pressure-test:* `1G.7` routes work to eligible providers but does not yet name what happens **after** a provider touches a patient. At scale, the system needs a clinician-continuity model that prefers the prescribing/treating provider for **clinically meaningful** follow-ups while guaranteeing that nothing — labs, refills, messages — sits trapped in one provider's queue. The model must reuse existing rows; it must **not** create a parallel mini-practice or per-provider patient-relationship product.

*Reject:*

- A separate "patient panel" / "primary care relationship" / "clinician registry" product.
- Permanent provider ownership of an entire patient regardless of program.
- Clinical work sitting indefinitely in one provider's queue.
- Continuity preference overriding eligibility, license, capability, urgency, or SLA.

#### 1G.9.1 Clinician-of-record vs task owner (two distinct concepts)

Two separate concepts coexist; both reuse the existing `1G` ownership tuple — no new ownership table.

- **Task owner** (per `1G` / `1G.7`): the provider responsible for the **current queue item** (`responsible_user_id` on the active `care_program` / `treatment_item` / `treatment_order` / lab / message turn).
- **Clinician-of-record (CoR)** (per `care_program`): the provider clinically responsible for an **active care episode/program** — typically the prescribing provider after `treatment_order` approval, updated when therapy materially changes hands. CoR is a **continuity preference**, not a hard gate.
- **Fallback eligible pool** (per `1G.7.2`): providers who can safely handle the work if CoR is unavailable, at capacity, or paused.

**Rules:**

- Not every task assignment creates CoR status — picking up a routine refill does not make a provider the CoR.
- Prescribing/signing a `treatment_order` (or making a substantive therapy decision in `clinical_visits`) **may create or update** CoR for that `care_program`.
- Lab interpretation, refill review, adverse-event handling, and follow-up clinical messages **prefer** CoR but **must not block care indefinitely** — fallback per `1G.9.6`.
- CoR is **per `care_program`**, not per patient — one patient with multiple programs has independent CoRs (consistent with Section 1G concurrent-programs rules).

#### 1G.9.2 Continuity policy by item type (routing preference matrix)

| Item type | Default routing preference |
|---|---|
| **Initial intake review** | Eligible pool per `1G.7.5` (no prior CoR yet) |
| **Treatment order approval / prescribing decision** | Eligible pool with `1G.7.5d` program preference; this action **establishes/updates CoR** on success |
| **Refill request (routine)** | Prefer CoR; SLA fallback to eligible pool |
| **Lab result review (routine)** | Prefer CoR or ordering provider; SLA fallback to eligible reviewer pool |
| **Lab result review (abnormal/critical)** | Fastest eligible clinical reviewer (urgency over continuity) |
| **Patient clinical question tied to a `care_program`** | Prefer CoR; SLA fallback to program/specialty pool |
| **Patient clinical question (general / no program)** | Eligible pool (no CoR scope) |
| **Adverse event / urgent concern** | Urgent escalation pool (fastest eligible) |
| **Dose adjustment / substantive therapy change** | Prefer CoR; if CoR unavailable, eligible provider with appropriate capability — and **action updates CoR** |
| **Subscription continuation (clinical decision)** | Prefer CoR; SLA fallback to eligible pool |
| **Nonclinical support issue** | Ops queue (no clinician continuity required) |

#### 1G.9.3 Follow-up routing rules (defaults)

- **Normal follow-ups** prefer CoR when available and eligible.
- **Specialty-sensitive follow-ups** prefer same specialty/program pool per `1G.7.5d` program preference.
- **Urgent / adverse events** route to fastest eligible provider, **not** necessarily CoR.
- **Routine refills** may prefer CoR but **fall back** to eligible pool after SLA threshold per `1G.9.6`.
- **Nonclinical messages** do not require clinician continuity and route to ops/support per `1G` classification.

#### 1G.9.4 Lab follow-up ownership (special rules + lifecycle events)

Labs need explicit handling because results return asynchronously and can stall in a single queue.

- **Routing preference:**
  - Lab result tied to a `treatment_order` or `care_program` first routes to **CoR** (or ordering provider where the org models it).
  - **Abnormal / critical** lab result (per existing severity/flag conventions) routes to fastest eligible clinical reviewer if CoR unavailable; never holds for continuity.
  - **Normal** lab result may fall back to eligible reviewer pool after the lab review SLA window per `1G.9.6`.
  - Lab review **cannot sit indefinitely** in CoR's queue — `1G.7.5b` SLA enforcement + lab-specific events below ensure rerouting.
- **Lab lifecycle events (extend `1G.7.6` queue vocabulary):**

| Event code | Where | Meaning |
|---|---|---|
| `lab.review.assigned` | `audit_events` (+ `patient_timeline_events` pointer) | Lab result assigned to a clinical reviewer (CoR or fallback) |
| `lab.review.started` | `patient_timeline_events` | Reviewer opened the lab result |
| `lab.review.completed` | `patient_timeline_events` | `reviewed_at` set on `patient_diagnostic_reports` per Intent precedence |
| `lab.review.escalated` | `audit_events` (+ pointer) | Escalated due to abnormal/critical flag or SLA pressure |
| `lab.review.reassigned_due_to_sla` | `audit_events` (+ pointer) | SLA fallback fired; ownership transferred to eligible reviewer pool |

- **Linkage:** lab review events carry the same standardized payload contract as `1H.1` row 7 (`treatment_order_id` / `treatment_item_id` / `care_program_id` / `diagnostic_report_id`) so trace and admin overlay can reconstruct the chain.

#### 1G.9.5 Conversation ownership

The map already states there is one `message_thread` per `care_program` (Section 1G); CoR extends that with continuity preference for clinical conversations within a program.

- **Provider does not own the entire patient relationship globally** — there is no per-patient global clinician owner.
- **Provider may own a care-program episode** (CoR) or a clinical decision thread within that program.
- **Patient questions tied to the `care_program`** prefer CoR; if CoR is unavailable past SLA, fall back to the eligible program pool.
- **General questions** (no `care_program` scope) route to the appropriate pool per `1G` classification.
- **Urgent questions** route to the urgent clinical pool (fastest eligible) — continuity does not delay urgency.
- **CoR ends or transfers** when:
  - the `care_program` ends (terminal/dormant per Section 1G),
  - the provider leaves the org or is marked unavailable for continuity work,
  - the patient changes program,
  - admin reassignment occurs (per `1G.9.7`),
  - or a substantive therapy decision is made by another provider (which updates CoR per `1G.9.1`).

#### 1G.9.6 SLA and rerouting (continuity never traps work)

For every continuity-preferred item:

- **First assign to preferred provider only if eligible AND available** per `1G.7.2` and `1G.7.1`.
- **Start SLA timer immediately** on assignment per `1G.7.5b`.
- **If not started within SLA:**
  - emit `queue.item.sla_breached` (and `lab.review.escalated` for labs).
  - escalate per `1G.1` and the existing escalation ladder.
  - **optionally reassign** to fallback eligible pool per org policy (default **on** for routine items, **off by default** for clinical-decision items per `1G.7.5b`).
  - **preserve continuity context** in the handoff payload (prior CoR id via controlled provider dimension, original assignment time, urgency).
- **If preferred provider is `offline` / `paused` / `unavailable` / `at_capacity`** per `1G.7.1`:
  - **urgent items**: route to fallback pool immediately (no grace window).
  - **non-urgent items**: short grace window (org-tunable, e.g., minutes) before fallback to allow brief provider state changes.
- **Hard rule (mandatory):** continuity preference **never overrides** patient safety, SLA, licensing, eligibility, or `1G.7.2` rules. Eligibility is always the hard floor.

#### 1G.9.7 Admin / clinical leadership controls

Admins and clinical leadership (per `Section 1G` Oversight) may, with the appropriate capability:

- **View CoR by `care_program`** in the admin overlay (`1G.6.2`) using the **controlled provider dimension** from `1H.7.2`; raw `staff_user_id` stays server-side.
- **Manually transfer CoR** to another eligible provider (with reason code).
- **Reassign follow-up tasks** within the existing `1G.7.3` admin assignment controls.
- **Force fallback routing** after SLA breach for continuity-preferred items.
- **Mark a provider unavailable for continuity work** (a softer state than `unavailable` — provider remains `open_for_queue` for non-CoR items but is not the preferred CoR for new programs).
- **See unresolved continuity-preferred items by provider** (aggregate, controlled dimension) to spot work trapping.

**Suggested capabilities (additive; no new auth product):**

- **`can_transfer_clinician_of_record`** — change CoR on a `care_program` (override path).
- **`can_force_continuity_fallback`** — manually trigger SLA-fallback rerouting for a continuity-preferred item.
- **`can_view_continuity_state`** — view CoR + continuity-preferred backlog per provider in the admin overlay.

**Mandatory rules (audited):**

- All CoR transfers, forced fallbacks, and "unavailable for continuity" toggles require `requireCapability` + `audit_events` (actor, capability used, reason code, prior + new state) and a `patient_timeline_events` pointer when patient-visible.
- **No bypass of eligibility** (`1G.7.2` rules 1–3, 7) for continuity transfers — admin overrides cannot move CoR to an ineligible provider.

#### 1G.9.8 Provider controls

Providers can, from the workspace (`1G.8`):

- **See items where they are CoR** (filterable group: "My continuity items" within `1G.8.9` grouped views).
- **See follow-up obligations** (CoR-preferred labs, refills, messages awaiting them, with SLA aging).
- **Accept / start / complete** assigned follow-ups via existing `1G.7.6` actions.
- **Request handoff or escalate** (audited handoff event; reason required).

Providers **cannot**:

- **Silently ignore** continuity items — SLA per `1G.9.6` enforces visibility and rerouting.
- **Reject ownership without a handoff event** — declines route through audited reassignment per `1G.7.4`.
- **Transfer CoR** without the allowed workflow (provider-initiated handoff requires reason; admin-initiated transfer requires `can_transfer_clinician_of_record`).

#### 1G.9.9 Data model additions (additive metadata; no separate queue DB)

Prefer additive fields on existing rows over new systems.

- **On `care_program` (additive metadata; namespaced key under `metadata`):**
  - `clinician_of_record_staff_id` — current CoR.
  - `clinician_of_record_assigned_at` — timestamp.
  - `clinician_of_record_reason` — code (e.g., `prescribed_treatment_order`, `dose_adjustment`, `admin_transfer`, `provider_left_org`).
  - `clinician_of_record_status` — `active` / `transferred` / `ended`.
- **On clinical queue items (derived metadata; in payload of `1G.7.6` events):**
  - `preferred_provider_id` (controlled dimension when surfaced in shared views) — who routing preferred.
  - `fallback_pool_reason` — why fallback fired (e.g., `cor_unavailable`, `sla_breach_autorouted`, `urgent_override_continuity`, `cor_at_capacity`).
  - `continuity_policy` — code summarizing which `1G.9.2` row applied.
  - `reassignment_reason` — when reassigned, a stable code (e.g., `admin_transfer`, `sla_breach_autorouted`, `provider_unavailable`).
- **Hard rule:** these are **additive metadata** on existing rows and event payloads — **not a new queue database**. Use existing models unless they cannot represent the data; in v1, they can.
- **Controlled dimension at the boundary:** wherever provider id appears in shared/admin/reporting outputs, use the controlled provider dimension from `1H.7.2` (`provider_key` / `provider_slug` / `display_name`) — raw `staff_user_id` stays server-side.

#### 1G.9.10 Operating principle (continuity vs pooling)

- **Continuity is preferred** where it improves safety, trust, or clinical quality (CoR for refill/lab/message tied to a program).
- **Pooling is preferred** where speed, access, or scale matter more (initial intake, urgent issues, SLA-breached fallback).
- **Urgent issues always prioritize fastest eligible clinician** — continuity never delays urgent care.
- **The system must avoid invisible mini-practices** that trap work with one provider — SLA fallback + admin visibility + continuity-preferred backlog view (per `1G.9.7`) make trapping detectable and reversible.

#### 1G.9.11 Non-optional before scale

- **Clinician-of-record concept** is modeled on active `care_program` rows.
- **Continuity-aware routing** for labs, refills, and clinical questions extends `1G.7.5` with continuity preference.
- **SLA fallback** ensures no continuity-preferred work sits indefinitely in one queue.
- **Admin transfer / reassignment controls** with reason codes and audit are in place.
- **Audit trail for ownership changes** (CoR transfers, fallbacks, reassignments) is fully recorded in `audit_events` with patient pointers via `patient_timeline_events`.
- **Provider visibility** into follow-up obligations and CoR items is present in the workspace (`1G.8.9` filter / "My continuity items").
- **No new queue/dispatch/registry product** — additive metadata on existing rows only.

#### 1G.9.12 Cross-links

**1G** ownership tuple + concurrent programs, **1G.1** SLA/escalation, **1G.2** active safety enforcement (continuity never bypasses safety), **1G.3** send policy (CoR-preferred clinical messages still subject to fatigue/non-neg discipline), **1G.5** exception handling (continuity stalls escalate via `1G.5`), **1G.6** workspace + admin overlay (where CoR backlog surfaces), **1G.7** routing/availability/assignment + `1G.7.5b` SLA enforcement + `1G.7.5a` fairness + `1G.7.5d` program preference, **1G.8** provider workspace surfaces + grouped views, **1H.1** trace, **1H.7.2** controlled provider dimension, **1J / 1J.10** clinical safety preflight, **1D / 1D.1** capabilities, **Intent** jurisdiction-of-care, `care_program`, `treatment_orders`, `treatment_items`, `clinical_visits`, `patient_diagnostic_reports`, `refill_requests` (or equivalent), `message_thread` / `messages`, `staff_profiles`, `audit_events`, `patient_timeline_events`, `outbound_jobs`.

#### 1G.9.13 CoR transfer reason codes (required, structured; not free text)

Every CoR assignment or transfer **must** carry a stable reason code from the allowed enum below. Free-text-only reasons are not permitted; an optional **structured note** may accompany the code but never substitutes for it.

**Allowed values (stable enum; org-extensible only via map/repo review like `Capability`):**

- `prescribed_treatment_order` — CoR established/updated by prescribing or signing a `treatment_order` (default cause when CoR is first set).
- `dose_adjustment` — CoR updated by a substantive therapy/dose change in `clinical_visits` / `treatment_items`.
- `abnormal_lab_followup` — CoR transferred for clinical follow-up driven by an abnormal/critical lab result.
- `provider_unavailable` — CoR transferred because the prior CoR is in `unavailable` / `paused` per `1G.7.1` beyond the continuity grace window.
- `provider_left_org` — CoR ended/transferred because the prior CoR is no longer with the organization.
- `patient_request` — CoR transferred at the patient's request (audited; org-policy may require additional confirmation).
- `admin_transfer_capacity` — admin-initiated transfer due to capacity/load balancing per `1G.7.3`.
- `admin_transfer_quality` — admin-initiated transfer due to quality/oversight concerns per `Section 1G` Oversight model.
- `program_change` — CoR ended/transferred because the patient's `care_program` changed (different program / care line).
- `urgent_override` — continuity overridden for urgent/abnormal handling per `1G.9.6`; new CoR may or may not be assigned depending on policy.
- `sla_fallback_reassignment` — CoR transferred to fallback eligible pool after `1G.9.6` SLA breach (paired with `queue.item.sla_breached` and, for labs, `lab.review.reassigned_due_to_sla` per `1G.9.4`).

**Rules (mandatory):**

- **Required on every CoR assignment or transfer:** writing CoR fields per `1G.9.9` without a valid reason code is rejected at the server mutation path (no UI-only enforcement).
- **No free-text-only reason:** the structured code is mandatory; an optional structured note (short, no PHI) may accompany it but is not a substitute.
- **Storage (no new tables):**
  - On `care_program.metadata`: `clinician_of_record_reason` carries the code; `clinician_of_record_assigned_at` and `clinician_of_record_status` already exist per `1G.9.9`.
  - In `audit_events`: every CoR transition writes a row with actor, capability used, reason code, prior + new CoR (controlled provider dimension when surfaced beyond the trust boundary), and timestamp.
  - In `patient_timeline_events`: a typed pointer event (e.g., `clinician_of_record_changed`) references the audit row and `care_program_id`; payload carries the reason code (no PHI).
- **Capability + audit gates:** all CoR transfers obey existing capability gates (`can_transfer_clinician_of_record` per `1G.9.7`, automated transitions from `1G.9.6` SLA fallback, etc.); reason code is recorded by the same server path that writes the transition.
- **Eligibility hard gate:** reason code never overrides eligibility (`1G.7.2` rules 1–3, 7); transferring CoR to an ineligible provider is rejected regardless of reason.
- **Reporting and pattern analysis:** reason codes are queryable via `1H.7` (group by reason code × program × jurisdiction × time window) and feed `1H.6.1E` root-cause classification when CoR transitions are tied to incidents (e.g., recurring `provider_unavailable` or `admin_transfer_capacity` patterns surface as `provider_capacity_constraint`).
- **Stable vocabulary:** new codes are added through map/repo review (same governance as `Capability` additions and `1H.6.1E` classifications) — never invented per incident.
- **Patient-visible communication:** when a CoR change produces patient-facing communication, the message follows `1G.5` patient-communication discipline; the reason code is internal vocabulary and is not necessarily exposed verbatim to the patient.

*Goal:* keep continuity transitions structured, auditable, and analyzable at scale — no ambiguous free-text reasons, no silent transfers, and a clean signal for spotting recurring patterns (capacity constraints, quality interventions, SLA fallbacks) that should drive systemic fixes.

**Primary + secondary reason discipline:**

- **Exactly one PRIMARY reason code is required** on every CoR assignment or transfer; missing primary is rejected at the server mutation path.
- **Optional secondary reason code** is allowed from the same enum (above) for descriptive context (e.g., primary = `sla_fallback_reassignment`, secondary = `provider_unavailable`).
- **PRIMARY drives reporting and alerts** (group-bys, dashboards, `1H.6.1E` classification feeds, recurrence detection).
- **Secondary is descriptive only** and does **not** drive reporting/alerts; it is captured for context/post-hoc analysis.

**Initiator + trigger fields (alongside reason codes):**

- **`cor_transfer_initiator`** — who actually initiated the transition. Allowed values:
  - `system` — automated transition (e.g., SLA fallback, automated CoR establishment from prescribing event)
  - `admin` — admin or clinical leadership action per `1G.9.7`
  - `provider` — provider-initiated handoff per `1G.9.8`
- **`cor_transfer_trigger`** — what event class drove the transition. Allowed values (extensible only via map/repo review):
  - `sla_breach`
  - `manual_override`
  - `availability_change`
  - `program_change`
  - `urgent_override`
  - `other_enum` (placeholder for future trigger codes added via governance)

Both fields are **required** alongside the primary reason code; stored on `care_program.metadata` and `audit_events`; carried in the `clinician_of_record_changed` `patient_timeline_events` payload (no PHI).

**Server-side validation hints (non-blocking initially; warn → later enforce):**

These are coherence checks the server validates when CoR is set/transferred. In v1 they emit warnings (logged with the audit row) and later become hard rejections per org rollout policy.

- **`abnormal_lab_followup`** requires presence of a `diagnostic_report_id` (per `patient_diagnostic_reports`) **flagged abnormal/critical** at the time of the transition.
- **`sla_fallback_reassignment`** requires a prior **`queue.item.sla_breached`** event (or `lab.review.escalated` / `lab.review.reassigned_due_to_sla` per `1G.9.4`) on the affected scope.
- **`program_change`** requires an actual change in `care_program_id` (or program type) for the patient at the transition time — i.e., transition is on a different `care_program` than the prior CoR scope.
- **`provider_unavailable`** requires a prior `1G.7.1` state transition on the prior CoR (e.g., into `paused` / `unavailable` / `at_capacity`) within the org-defined continuity grace window.

**Validation rules (mandatory):**

- Validation runs at the **server mutation path** (not UI-only); failures in v1 attach a warning to the `audit_events` row (e.g., `metadata.cor_validation_warnings: [...]`) without blocking the transfer.
- Once enforcement is enabled per org policy, failed validations **reject** the transfer at the same server path; emergency overrides require an additional capability + reason and are fully audited (no silent bypass).
- Validation is **never** a substitute for eligibility (`1G.7.2`) — eligibility hard gates always apply regardless of reason/trigger/validation state.
- All validation outcomes (pass/warn/reject) are queryable via `1H.7` and feed `1H.6.1E` pattern analysis to detect drift (e.g., rising warn rate on `program_change` may indicate inconsistent program-id handling and should be addressed before flipping enforcement).

#### 1G.9.14 Patient-facing CoR communication (optional, policy-gated; default off)

*Premium positioning, not chaos.* When a patient's CoR changes, the org may choose to inform the patient. Hims-class competitors largely do not; some organizations may want to be more advanced. This subsection defines the **optional** patient-facing communication so that **if** the org turns it on, it is structured, throttled, and aligned with the rest of the messaging spine — never ad hoc.

- **Default:** **off** (silent CoR transitions, internally audited per `1G.9.13`). Turning it on is an explicit org policy choice with documented rollout.
- **What gets surfaced (org policy via `care_program.metadata` / runbook):**
  - **Always silent (default off and recommended off):** automated micro-transitions whose only impact is internal routing/load (e.g., a single SLA fallback that does not change the patient's experience).
  - **Optional notification (config flag):** transitions tied to **provider-of-record changes the patient may notice** in upcoming clinical communications (e.g., a new clinician name on the next reply, a different signature on a prescription decision, a planned long-term hand-off).
  - **Recommended notification (still policy-gated):** transitions where a **new clinician will materially own the patient's program going forward** (e.g., `provider_left_org`, sustained `admin_transfer_capacity`, `patient_request`, `program_change` that introduces a new CoR for the new program).
- **Channel + cadence:** patient-facing messages go through the **same** `message_thread` per `care_program` (Section 1G) and the same `outbound_jobs` send pipeline; classified as **`operational`** unless org policy elevates a specific case (no `clinical_required` by default).
  - **`1G.3` send policy applies:** non-neg vs negot, frequency caps, suppression, disengaged stop. Patient-facing CoR notifications are **negotiable** by default — patient channel/frequency preferences apply.
  - **No new notification stack;** uses existing primitives.
- **Content discipline (template-driven; no free-text PHI dump):**
  - Pre-approved templates per transition class (e.g., "Your care will be continued by a new clinician for upcoming visits.") with safe substitutions (program label, new clinician display name from the **controlled provider dimension** per `1H.7.2` — never raw `staff_user_id`).
  - **Internal `1G.9.13` reason code is NOT exposed verbatim** to the patient; templates may map a code to friendlier patient-facing language but never include internal jargon (`sla_fallback_reassignment`, `admin_transfer_capacity`, etc.).
  - Provider drafting is allowed for high-touch programs; same audited outbound path as any provider message.
  - **No PHI** beyond what the template defines; no chart content; no internal diagnostic context.
- **Suppression and de-duplication:**
  - Multiple rapid CoR transitions in a short window (e.g., automated SLA fallback followed by admin re-balance) collapse into **at most one** patient-facing notification per program per window (org-tunable; default suppress < 24h since last CoR notification on same program).
  - Notifications suppressed entirely when the transition is silent-by-policy (above) or the patient is in `disengaged` state per `1G.3(g)` (clinical safety touches still per `1G.3(a)`).
- **Audit + visibility:**
  - Every patient-facing CoR notification writes the `outbound_jobs` row + `audit_events` (template id, transition reason code, controlled provider dimension before/after, patient-thread pointer) and a `patient_timeline_events` pointer (no PHI in payload beyond template id and program scope).
  - Admin overlay (`1G.6.2`) shows whether a CoR transition produced a patient notification (yes/no, template id, send status) for ops visibility.
- **Capability:**
  - Org-policy toggling of CoR-notification rules requires `can_manage_provider_availability` (or a future `can_configure_continuity_communications`) per `1D / 1D.1`.
  - Per-transition manual send/draft requires the same provider-message capability used elsewhere; no new auth product.
- **Compliance + jurisdiction:**
  - Any jurisdiction-specific notification requirements (e.g., transfer-of-care notification rules where applicable) override the silent default and route through the same gate; documented in org runbook.
  - Patient-facing wording is reviewed under the same clinical/compliance approval as other patient templates; no ad-hoc bespoke text.
- **Reporting:**
  - Patient-facing CoR notification volume, suppression rate, and send-success rate are queryable via `1H.7` using the same controlled dimensions; aggregate-only.

*Goal:* if the org chooses to inform patients about clinician changes, the experience reads as **premium and considered** — same `message_thread` SoT, template-driven, suppressed appropriately, fully audited — not chaotic or noisy. If the org chooses **not** to inform (Hims-class default), the silent path remains internally auditable and analyzable per `1G.9.13`.

##### 1G.9.14a Patient-facing tone rules (mandatory when `1G.9.14` is enabled)

When patient-facing CoR communications are enabled per `1G.9.14`, all template content must follow these tone rules. The aim is **continuity of care within a clinical team**, not "handoff" or "transfer" language. Tone rules apply uniformly to provider-drafted messages too — providers may not use internal vocabulary in patient-facing copy.

**Frame as continuity of care within a clinical team:**

- Use language that emphasizes the **care team** taking shared responsibility, oversight, and uninterrupted continuity.
- Never imply that the prior provider has "left" the case in a way that suggests instability or gaps.

**Emphasize oversight and shared responsibility:**

- Reference that the clinical team / care team has **reviewed** the patient's case.
- Reference that **a clinician on the care team** will continue the patient's care.
- Reference that the team has **ensured** continuity.

**Approved example phrasings (illustrative; templates approved per `1G.9.14`):**

- "Our clinical team has reviewed your case..."
- "A clinician on your care team will..."
- "We've made sure your care continues without interruption..."
- "Your care team is here for you..."
- "A member of your clinical team will be in touch..."

**Avoid (forbidden in patient-facing copy):**

- Words like **"handoff"**, **"transfer"**, **"reassignment"**, **"reroute"**, **"escalate"** — internal routing terms.
- Exposing internal **routing logic** ("you have been assigned to...", "your provider was reassigned because...").
- Exposing **reason codes** verbatim or paraphrased internal vocabulary (`sla_fallback_reassignment`, `admin_transfer_capacity`, `provider_unavailable`, `provider_left_org`, etc.).
- Implying **instability, gaps, or uncertainty** ("your provider is no longer available", "we couldn't keep your provider", "you're being moved to a different provider").
- Naming **system mechanics** (queue, capacity, SLA, fallback, pool) or **internal organization structure**.
- Framing the change as a **negative event** for the patient (apologetic tone, blame language, references to errors).
- Asking the patient to **explain or justify** the change ("As you may know, your provider..."), or implying the patient should adjust expectations.
- Using **uncertain or non-committal** language about who will provide care next ("someone will get back to you", "we'll try to find a clinician").
- Disclosing **specific clinician departure circumstances** (e.g., reason a provider left the org) or any **performance/quality** rationale.
- Sharing the **internal display name / identifier of the prior provider** in the notification body (refer to the prior care relationship in continuity terms only); the **new clinician** may be named via the controlled provider dimension display name when the org chooses.

**Enforcement (mandatory when `1G.9.14` is enabled):**

- **Template-only by default:** patient-facing CoR notifications must use approved templates from `1G.9.14`. Free-text composition is allowed only via the same audited provider-message path used elsewhere, and is subject to clinical/compliance review per `1G.9.14`.
- **Pre-send lint:** the server send path runs a lightweight content check to flag any forbidden vocabulary above (e.g., the words "handoff", "transfer", "reassignment", a literal `1G.9.13` reason code) before the message is queued via `outbound_jobs`. v1 may warn (logged on the audit row); later flips to **reject** per org rollout (mirrors `1G.9.13` warn-then-enforce pattern).
- **Provider-drafted messages obey the same rules:** providers cannot use internal vocabulary in patient-facing copy; the same lint runs on provider drafts.
- **Tone reviews are auditable:** every patient-facing CoR notification (template-rendered or provider-drafted) writes the `outbound_jobs` row + `audit_events` (template id, lint outcome, sender) and a `patient_timeline_events` pointer (no PHI in payload beyond template id and program scope).
- **No bypass for "edge cases":** if a transition genuinely requires non-standard communication (rare), it routes through clinical/compliance review for an additional approved template — never as ad-hoc copy.

*Goal:* maintain trust and perceived continuity even when providers change. Patients experience a coherent **care team**, not a sequence of handoffs; internal vocabulary stays internal.

### 1G.10 Lab operational surfaces (provider, ops, fulfillment — minimal v1; no new systems)

*Goal:* the minimum role-specific surfaces so labs are operable end-to-end across **providers**, **ops/admin**, and **fulfillment**. Strictly reuses `Section 1L` (diagnostics + lab discipline + guardrails), `Section 1G` (workspace + admin overlay + routing), and `Section 1H` (metrics + reporting). **No new systems, no new tables, no new state tracking, no UI design** — just what each role must see and act on.

#### 1G.10.1 Provider lab review surface (extends `1G.8.7`)

Provider's "Lab Review" queue lives inside the existing provider workspace per `1G.8.7` (lab review drawer) and `1G.8.9` (grouped views). This subsection names the role-specific contract.

**Queue view (my work only — `responsible_user_id = self` plus eligible-pool items per `1G.7.2`):**

- `lab_order_id`
- patient reference (controlled PHI exposure — `patient_key` / display ref; full chart load is per-item drawer per `1G.8.5`)
- `panel_type` (per `1L.2`)
- triage classification (`normal | borderline | abnormal` per `1L.20` Part 2; surfaced via `patient_diagnostic_reports.metadata.triage_class`)
- time since `result_received_at` (per `1L.21` Rule 3)
- ownership (`responsible_provider_id` per `1L.7`; or CoR per `1G.9.4`)
- `patient_clinical_jurisdiction_at_review` (per `1L.22` Rule 2; mismatch flag visible when applicable)

**Row drill-in (drawer-level, not full chart):**

- normalized observations grouped by category (active versioned mapping per appendix §24)
- abnormal flags (`abnormal_flag` per `1L.6`)
- trend vs prior (same `observation_code` per `1L.12` / `1L.13`)
- curated `report_payload` summary (server-rendered per `1L.18` #10) — **never** raw `report_payload` JSON
- unknown/unmapped marker indicator (`metadata.normalization_status ∈ unmapped | pending_mapping` per `1L.6` / `1L.22` Rule 4)

**Provider actions (minimal v1):**

- `mark_reviewed` — sets `patient_diagnostic_reports.reviewed_at` + `reviewed_by_staff_id` per appendix §11; transitions `lab_orders.status: result_received → reviewed` per `1L.4a`.
- `release_to_patient` — sets `released_to_patient_at`; transitions `reviewed → released` per `1L.4a`.
- `trigger_follow_up` — creates `treatment_plan_candidate` per `1K.10` (provisional only) and/or new `lab_orders` for repeat per `1L.9`.
- Optional **provider note** (bounded free-text per `1K.4`) and/or **patient message** via existing `1G` `message_thread` per `1L.15` templates (never raw vendor data).
- Optional **internal handoff to ops** via `1G.8.8` ops/staff messaging channel when a non-clinical issue surfaces (e.g., suspect orphan binding, fulfillment exception); does not change CoR per `1G.9.5`.

**Hard rules (per `1L.18`):**

- Provider cannot modify observations (`1L.18` #3 write gate).
- Provider cannot bypass the state machine or other guardrails (`1L.18` #1, #2, #5, #10).
- All actions emit `audit_events` + `patient_timeline_events` (per `1L.18` #1 and `1L.20` Part 4).

**SLA signals (visible per item):**

- `time_to_review` (per `1L.21` Rule 2; computed `reviewed_at − queued_for_review_at`).
- breach indicator tied to `1H.6.1D` severity per `1L.21` Rule 4 (Action-needed at threshold; Critical when sustained).
- Severity + status + trend rendered together per `1H.6.1D` / `1H.6.1F` discipline.

#### 1G.10.2 Ops / admin lab overlay (extends `1G.6.2` + `1L.11`)

The lab-specific saved views in `1G.6.2` are already defined in `1L.11` (lab queue depth, aged-by-state-by-panel-type, abnormal-without-review, orphan reports, stuck in-person fulfillment, stuck at-home fulfillment, sample invalid/lost recovery, CoR-preferred review backlog, mapping coverage gaps). This subsection adds two **NEW** lab-specific views and confirms the drilldown + action contract.

**NEW saved views (additive to `1L.11`):**

| View | Source tables | Filter logic | Grouping | Owner / action | PHI guardrail |
|---|---|---|---|---|---|
| **Jurisdiction mismatch** | `lab_orders` × `patient_diagnostic_reports` | `metadata.collection_location_state ≠ metadata.patient_clinical_jurisdiction_at_order` **OR** `metadata.patient_clinical_jurisdiction_at_order ≠ metadata.patient_clinical_jurisdiction_at_review` (per `1L.22` Rule 7) | jurisdiction-pair × `panel_type` × time window | ops review (no auto-action; surface mismatch flag for provider awareness per `1L.22` Rule 2) | aggregate; controlled provider dimension only; drilldown requires `can_view_audit_log` + `SensitiveAccessReason` |
| **Inventory / fulfillment blockers (at-home only)** | `lab_orders` (at-home `fulfillment_type`) + product/SKU inventory metadata + `outbound_jobs` | low inventory threshold breached, backorder flag, blocked shipments (per Rule 3 hard constraint below) | partner × `panel_type` × jurisdiction (when shipping rules vary) | fulfillment ops; trigger reorder / hold lane | aggregate only; vendor inventory data already non-PHI |

**View contract (applies to all `1L.11` and the two NEW views above):**

- **Source tables** named per row.
- **Filter logic** named per row.
- **Grouping dimensions** use only safe dimensions per `1H.7.2` and the controlled provider dimension; jurisdiction context per `1L.22`.
- **Owner / action field** named (e.g., responsible_provider_id, queue_owner, ops escalation) — every view links to an actionable surface, not just a number.
- **PHI guardrail:** aggregate-first; small-cell suppression per `1H.4.1` (k ≥ 20 default); drilldown to item-level requires `can_drill_into_provider_queue` per `1G.6.2` plus the viewer's existing clinical/oversight capability per `1J / 1J.10`; broad/sensitive cross-patient access logs `SensitiveAccessReason`.

**Ops actions (capability-gated, audited):**

- **Assign / reassign ownership** per `1G.7.3` (`can_assign_provider_queue`); reassignment writes `queue.item.reassigned` per `1G.7.6` and audit per `1L.18` #1.
- **Trigger resend kit / recovery flow** per `1L.8` (`lab.kit.resend_requested` + `lab.kit.resent` events); creates new `outbound_jobs` chain; may pair with new `lab_orders` carrying `metadata.replaces_lab_order_id` per `1L.8`.
- **Manual report binding (orphan → `lab_order`)** per `1L.5` (`orphan_candidate_match_found → orphan_linked`); requires `can_correct_lab_order_link` (per `1L.18` #5) + `SensitiveAccessReason` + full audit; immutable thereafter except via the same privileged correction path.

#### 1G.10.3 Fulfillment surface (minimal; reuses `lab_orders` + `outbound_jobs`; not a separate product)

Fulfillment visibility lives in the same admin overlay (`1G.6.2`) under fulfillment-specific filters; no new product, no new tables.

**In-person labs:**

- Orders awaiting collection (per `lab_orders.status = awaiting_collection` per `1L.4`).
- Requisition status (`metadata.fulfillment_substatus ∈ requisition_pending | requisition_published`).
- Aging buckets (`<24h`, `1–3d`, `3–7d`, `>7d`) per `1L.11`.

**At-home kits:**

- **Inventory snapshot** (per partner / SKU): `available_quantity`, `reserved_quantity`, `reorder_threshold` — read from existing partner/SKU metadata or the org's inventory source (no new SoT; can live on `treatment_items` / `commerce_orders` catalog metadata as the org models inventory today).
- **Order states:** `kit_queued → kit_shipped → kit_delivered → sample_in_transit → sample_received → sample_processing → result_received` per `1L.4` substates.
- **Exception states:** `sample_lost`, `sample_invalid`, `resend_required` — surfaced per `1L.8` event vocabulary.

**Hard constraints (mandatory; per `1L.18` enforcement discipline):**

- **No shipment if `available_quantity = 0`** for the required SKU. Order remains in `kit_queued` with explicit blocker (`metadata.fulfillment_blocker = inventory_unavailable`); surfaces in the new "Inventory / fulfillment blockers" view per `1G.10.2`. Never a silent `kit_shipped` against zero inventory.
- **Every stuck state has an owner + event trail** per `1L.18` #6 (ownership requirement) and `1L.18` #8 (expiration + recovery enforcement); missing ownership surfaces in `1G.7.7a` coverage-gap view + `1L.11`.

#### 1G.10.4 Metrics + dashboard integration (binds to `1L.21`)

All three surfaces (provider, ops, fulfillment) rely on the `1L.21` metrics + reporting contract. Visibility required per `1L.21` Rule 2:

- lab volume
- fulfillment success rate
- result turnaround time (`created → result_received`)
- review latency
- release latency
- % auto-released vs provider-reviewed
- % abnormal / borderline / normal
- abnormal-without-review count
- orphan report count
- stuck fulfillment counts (in-person vs at-home)
- inventory health (at-home kits only — additive view via `1G.10.2` "Inventory / fulfillment blockers")

**Hard rules:**

- **No duplicate metric definitions** per `1L.21` Rule 6; all three surfaces use the canonical `1H.6` / `1H.7` queries.
- **Same definitions across provider, ops, and reporting** — a "fulfillment success rate" rendered in the provider context returns the same number as in ops overlay and `1H.7` reports for the same filter set.

#### 1G.10.5 Event + state dependency (no new state tracking)

All surfaces derive from existing rows + events:

- `lab_orders.status` + substates per `1L.4`.
- `patient_diagnostic_reports` (incl. `triage_class`, timestamps per `1L.21` Rule 3).
- `patient_lab_observations` (normalized per `1L.6`; raw retained per `1L.18` #4).
- `audit_events` for actor + capability provenance.
- `patient_timeline_events` for canonical events per `1L.21` Rule 7.
- `outbound_jobs` for fulfillment transitions, kit ship, retries, dead-letters.

**No new state tracking** introduced by this section. Surfaces are derived views over the existing spine.

#### 1G.10.6 Daily lab ops review (ties to `1H.6`)

A small, fixed daily review ritual so the lab pipeline never silently degrades. Reviewed by the **ops lead** with **clinical lead** participation for clinical-quality items; uses the existing `1H.6` daily dashboard categories and `1G.5` resolution workflow — **no new ritual product, no parallel review board**.

**Required daily review items (must be checked every day; all sourced from `1L.21` canonical metrics):**

- **Abnormal-without-review** (per `1L.11` + `1L.21` Rule 2) — clinical safety; severity per `1H.6.1D`.
- **Stuck fulfillment** (in-person + at-home, per `1L.11` + `1L.21`) — operational integrity; aged backlog per `1L.4` substates and `1L.8` thresholds.
- **Orphan reports** (per `1L.5` orphan workflow + `1L.11`) — data integrity; reconciliation queue.
- **Review latency breaches** (per `1L.21` Rule 2 + `1G.7.5b` SLA enforcement) — provider throughput / capacity signal; CoR-preferred backlog per `1G.9.4` surfaces in the same view.
- **Release latency breaches** (per `1L.21` Rule 2) — patient-experience signal; auto-release path failures (when active `triage_version` declares NORMAL auto-releasable but it didn't fire) flagged as `system_bug_or_defect` per `1H.6.1E`.

**Ownership and review cadence:**

- **Daily review time:** morning Layer 3 standup per `1H.6.1C` (Operations / Fulfillment / Friction-Risk owners participate).
- **Primary owner per item:**
  - `abnormal-without-review` → clinical lead (with provider ops backup) per `1H.6.1C` Operations.
  - `stuck fulfillment` → fulfillment / pharmacy ops lead per `1H.6.1C` Fulfillment.
  - `orphan reports` → ops lead (data ops) per `1H.6.1C` Operations.
  - `review latency breaches` → provider ops / clinical ops lead per `1H.6.1C` Operations.
  - `release latency breaches` → provider ops lead (with platform if auto-release path failed) per `1H.6.1C` Operations + `1H.2` platform.
- **Severity-driven response cadence (per `1H.6.1C` SLAs):**
  - **Action-needed / Critical** items must be **owned and addressed** the same day — primary owner acknowledges per `1H.6.1D` discipline; `<4h` triage/contain SLA for money/integrity items (stuck fulfillment, abnormal-without-review when patient-impacting); same-day root cause + corrective plan for the rest.
  - Acknowledgment + classification per `1H.6.1E` (typical lab-side classifications: `provider_capacity_constraint`, `provider_decision_quality`, `fulfillment_partner_outage`, `fulfillment_delay_vendor`, `system_bug_or_defect`, `compliance_or_policy_change`).

**Escalation (mandatory):**

- **Unresolved Action-needed / Critical items** escalate via `1G.5` exception workflow (categories: `clinical_safety`, `fulfillment`, `platform_system`, `compliance_sensitive` as applicable per `1G.5.6`).
- **Stale-critical** (Critical past 24h without resolution) auto-escalates per `1H.6.1G` to secondary owner + admin layer; voids cooldown and requires status update or reclassification.
- **Possible-correlation grouping** per `1H.6.1H` applies (e.g., `review latency breaches` + `abnormal-without-review` together → likely provider capacity issue; `stuck fulfillment` + `release latency breaches` together → likely partner outage).
- **Patient-impact incidents** (e.g., delayed abnormal result review) trigger `1G.5` containment + correction first, then patient communication via `1L.15` templates (per `1G.9.14a` tone discipline).

**Audit + reporting tie-ins:**

- Acknowledgments + classifications + status transitions audited per `1H.6.1D` / `1H.6.1F` discipline.
- Weekly + monthly trends queryable in `1H.7` per `1L.21` Rule 5 (safe dimensions only; aggregate-only).
- Recurring patterns (e.g., same `provider_capacity_constraint` classification week-over-week) feed `1L.20` Part 6 metric tie-ins and may drive `1G.7` capacity adjustments or `1G.7.5d` program-preference tuning.

*Goal:* the lab pipeline has a daily heartbeat — every operational risk class is owned, time-bound, escalated when stuck, and recurrence-tracked. No silent drift; no ad-hoc "we'll catch it next week."

#### 1G.10.7 Cross-links

`Section 1L` (foundation), `1L.4` / `1L.4a` (state machine + actor matrix), `1L.5` (binding / orphan), `1L.6` (normalization), `1L.7` (ownership), `1L.8` (expiration + recovery), `1L.9` (retest loop), `1L.11` (admin overlay views), `1L.13` (data flow), `1L.18` (guardrails), `1L.20` (triage + review + release), `1L.21` (metrics contract), `1L.22` (jurisdiction + unknown markers); `1G.5` (exception workflow + classifications), `1G.6 / 1G.6.2` (workspace + admin overlay framing), `1G.7 / 1G.7.5b / 1G.7.5d / 1G.7.6 / 1G.7.7a` (routing + SLA + program preference + queue lifecycle + coverage gaps), `1G.8 / 1G.8.7 / 1G.8.8 / 1G.8.9` (provider workspace + lab review drawer + ops messaging + grouped views), `1G.9.4 / 1G.9.13` (CoR continuity for lab follow-up + transfer reasons); `1H.2` (platform ownership for vendor outages), `1H.6 / 1H.6.1C / 1H.6.1D / 1H.6.1E / 1H.6.1F / 1H.6.1G / 1H.6.1H / 1H.7` (metrics + reporting + severity/status/correlation framework); `1D / 1D.1` (capabilities); `1J / 1J.10` (PHI gating); `1K.4 / 1K.10` (bounded notes + plan candidate); `1I` (commerce/payment when fulfillment cost or refund occurs).

---

## Section 1H: Analytics, diagnostics, and derived metrics (no new engine)

*Layer 2 operational reporting model: KPIs and funnels are **read models** (queries, scheduled jobs, or a future **copy** to a warehouse). No parallel “metrics product” in core architecture; no KPI-only columns on `patients` for convenience. **§1H.1** (operational traceability) is **separate** from the funnel/metric tables below: it answers “**why** didn’t the patient get meds / money / notif as expected” using **the same** rows, **not** a separate event platform. **§1H.2** (IT / platform) answers **who** owns integration-class incidents and interventions; **§1H.3** covers reconciliation / drift / idempotent retry; **§1H.4** covers acquisition / attribution boundaries and growth visibility constraints; **§1H.5** covers third-party verification readiness and audit response posture; **§1H.6** defines the full daily Layer 3 operator dashboard (~12–18 core metrics) across growth, revenue, retention, operations, fulfillment, payments, and friction/risk; **§1H.7** defines the internal reporting layer that runs flexible filter/group/aggregate queries on top of those same canonical definitions (no separate BI tool, no metric redefinition, no PHI exposure) — all with existing rows, capabilities, and logs (no separate compliance product).*

**Vocabulary (cross-links):** Stages 1–6, `primary_blocker` and `responsible_party` (Section 1G — canonical case state), **1G.3** (adherence, at-risk, re-engagement, **outbound** **send** **policy,** **fatigue,** **non-neg/negot,** **disengaged,** **1G.3(i)** interaction→behavior→next-action **correlation** on timeline + jobs — not subscription-only), **1H.4** (inbound attribution, source→outcome read models, **1H.4.1** **defined** staff **surface** + **`Capability`** for growth aggregates, optional external ad I/O as **edge/adapter,** not campaign logic in core), **1H.5** (verification readiness: provider attribution, intake-to-decision linkage, active safety enforcement proof, Rx→fulfillment chain trace, role-gated audit surfaces), **1H.6** (full daily operator dashboard: ~12–18 core metrics across growth, revenue, retention, ops, fulfillment, payments, friction/risk — all reviewed daily, from existing tables only), **1H.7** (internal reporting layer: filter/group/aggregate on top of the same canonical metric definitions; safe-dimension-only, capability-gated, aggregate/PHI-safe; no separate BI tool), Section 1E commerce, `treatment_orders` vs retail parent (`commerce_orders` or code name), `patients` jurisdiction of care where the map already uses it.

### Analytics source of truth (required)

- **Derivation stack (single meaning per metric): (1)** `patient_timeline_events` — `event_type`, `occurred_at`, `patient_id`, `payload` pointers to `message_id` / `care_program_id` / `treatment_item_id` as implemented; **(2)** `audit_events` (and `requireCapability` / actor) when the metric is about *who* acted; **(3)** recomputed 1G **canonical** tuple (stage + blocker + `case_owner`) from `care_program` / `treatment_items` metadata, if cached — *join/segment key*, not a second narrative; **(4)** row state for time and money: `care_program`, `treatment_items`, `treatment_orders`, order **status** + **1I**-**reconciled** **payment** **outcomes** **(not** a **PSP** **name** as **a** **metric** key), 1E lines, optional subscription tables if they exist, `patients` (e.g. region = jurisdiction in reporting); **(5)** *when present* — **inbound acquisition** **keys** in `patients.metadata` / `care_program.metadata` for **1H.4** cohorts only (not a separate SoT) — see **1H.4.**
- **"Domain events" in reporting** means the **union of (1)–(4)** with stable, documented codes, **plus (5) when present** — acquisition keys for **cohort** stratification ( **1H.4** ), not a second narrative of clinical or money state. If the codebase introduces a `domain_events` / outbox table, it is a *transport or projection pipe* for the same facts, not a second SoT and must not duplicate `patient_timeline_events` text for the same business event. **Forbid** storing a KPI in an extra table *as if* it were an independent fact without traceability to (1)–(4) [and (5) as applicable]. Caching in read models is allowed when recomputable. **This map does not add** KPI-only base tables.

### Canonical lifecycle metrics (all derived, not new columns on core entities for KPIs only)

- **Durations** = time between **documented** start and end using `patient_timeline_events` timestamps, `messages` (for messaging), and/or `created_at` / status on `treatment_orders` and `treatment_items` as defined per product. Document `event_type` (or state pair) for each.
- **Examples (extend as the product standardizes `event_type` names):**
  - **time_to_intake_complete** — intake start → `patient_timeline_event` (or first-class form row) for intake **completed**; scope `patient` / per `care_program` once the program row exists.
  - **time_to_first_review** — intake complete (or first submit) → first *review* signal (e.g. queue open, or timeline event `..._review_...` as the product names it); scope `care_program` / `treatment_item`.
  - **time_to_decision** — review started (same definitions) → approved/denied (from `treatment_items` / `treatment_orders` or `clinical_visits` with stable codes).
  - **time_to_fulfillment** — approval (when fill is not blocked) → order shipped / delivered (existing order/fulfillment enums; Lab appendix and orders lifecycle as in repo).
  - **time_to_first_response (messaging)** — outbound with `awaiting_response` (1G) → first `from_patient` inbound in-thread or auditable closure; per `message_thread` / `care_program`.
  - **time_in_state (per stage)** — enter/leave of map Stage 1–6 (from timeline + row state) per `care_program` (and `treatment_item` when the hold is line-scoped).
  - **drop_off_rate (per step)** — % of a cohort that entered a funnel node but did not reach the next *named* success event within N days; stratify by `primary_blocker` and program; N = org policy. No duplicate cohort table required — it is a query over events + censoring rules.
- All are **query definitions**; the map does not require dedicated KPI columns.

### Funnel model (intake → continuation) and drop-off

- **Default funnel (each hop is a row in reporting definition, not a new table):** (1) intake_started → (2) intake_completed; (2) → (3) checkout / payment (clinical `treatment_orders` + **1I** `payment_rail` / primary PSP, **separate** from 1E retail lines per 1E); (3) → (4) review_started (e.g. first in-queue or first assignee touch); (4) → (5) decision (approved or denied, as recorded); (5) if approved → (6) fulfillment (e.g. shipped then delivered); (6) or a parallel path → (7) first **continuation** signal (refill, check-in due met, Stage 6 — per `treatment_items.metadata` and 1G). **Stratify** the same funnel by **1H.4** acquisition keys (when captured) — **read model** only.
- **Drop-off** at a step: entered that step (event or state) and **no** success transition to the **next** hop within N days, and not in a **terminal** success/exit state the product defines (e.g. closed lost, denied) — censoring rules = org. Denote **attribution** to `primary_blocker` when the case exited without advancing.

### Ownership-based metrics (from Section 1G)

- **Provider** — e.g. age while `responsible_party: provider` in “ready for review” (per workload bucket in 1G) or TAT to decision / `reviewed_at` where defined; filter by `responsible_user_id` if set.
- **Staff (ops)** — e.g. age while `responsible_party: staff` with `primary_blocker` in payment/fulfillment/exception (Stages 4/5); same `responsible_user_id` for attribution.
- **Patient** — e.g. response time on `clinical_required` (outbound to inbound) or time on lab *patient* milestones.
- **Attribution** at time T uses the 1G tuple: credit to `responsible_party` + optional `responsible_user_id` as stored for that `care_program` (or `treatment_item` scope). T1–T3 nudges do not by default change ownership (1G); do not double-count as “resolution.”

### Revenue metrics (derivation only — not financial modeling)

- **Sums and rates** are **aggregates** from existing order / subscription / line rows, **reconciled** **to** **each** **rail**’s **settlement** **source** **(PSP/chain/invoice** **per** **1I.6)**, **sliced** by: `care_program_id`, line product/SKU, Rx vs supplement/retail (line *rail* in 1E + clinical), `treatment_order` / fulfillment state, `patients` jurisdiction. Examples: *revenue per* `care_program` — sum of captured *clinical* (and if included, *retail*) line amounts *linked* to that program; *conversion* intake→paid = funnel (2)–(3); *retention / churn* only where subscription/renewal rows exist — cancel/lapse *events* in timeline or order state, by category. No P&L or tax modeling in this map.

### Failure, stagnation, and inactive (“dead”)

- **Stall mix** — % of active cases in each `primary_blocker` while `stale: true` (1G) or over SLA, per cohort.
- **time_to_resolution** (by blocker) — from blocker start (first `patient_timeline_events` or metadata timestamp for that *class*) to the event that **clears** the blocker (per 1G / permit rules).
- **Dead-case (inactive) rate** — `care_program` or `treatment_item` reaching terminal/dormant per 1G “Inactive / dead” — **not** the same as *stale*; measure **%** in cohort to terminal exit vs continued care.

### Patient behavior metrics

- **Response latency** — distribution of 1G turn times (see *time_to_first_response*), e.g. p50/p90.
- **Engagement** — in-thread volume (inbound `messages` / time), check-in submission rate vs due (from `treatment_items.metadata` and timeline).
- **Adherence proxies** — e.g. refill/reorder on time vs `next_refill_due_at`; check-in completion by due; % of `clinical_required` **replied** under SLA. No new tables — counts from `messages` + `patient_timeline_events` + 1G.

### 1H.1 Operational traceability and debugging: from “events exist” to “we can answer in seconds”

*Hims-style operational bar (this map, not a separate APM/warehouse product):* an ops-capable user can reconstruct *why* a patient is not in the expected medication/fulfillment state (payment, gating, pharmacy, side-effect failures) by **querying and joining** the tables the architecture already names—plus **minimal** internal UI or saved queries. **Having** `patient_timeline_events` is **necessary and insufficient**: capture ≠ **trace** without **correlation,** dead/failure **visibility,** and **asynchronous** leg (webhook, job) **inspection**. No new observability **platform** here; Datadog/OTel remain optional and out of this subsection.

*Pressure-test — is the current map + repo enough?* **Partly.** The **spine** is real: `patient_timeline_events`, `treatment_items`, `treatment_orders` (enum lifecycle per [`supabase/migrations/20260428100000_orders_lifecycle_v1.sql`](../../supabase/migrations/20260428100000_orders_lifecycle_v1.sql)), `audit_events`, `stripe_webhook_events` (idempotency) in `app/api/webhooks/stripe/route.ts`, `outbound_jobs` with `dead` and retries in `lib/jobs/processOutboundJobs.ts` + `app/api/cron/outbound-jobs`, 1G/1J. **Under-specified until 1H.1:** a **defined** end-to-end **correlation** vocabulary, **failure** / dead-letter as **ops**-readable paths, **webhook** replay as **runbook** semantics, explicit tie to **1J.10d** when **timeline** or **audit** **insert** fails, and a **default** “no meds” triage (query recipe + optional **target** one-screen **stack**).

| # | Area | **Already in repo (honest)** | **Partial / gap** | **Target (map; same tables)** | **Non-optional before Hims-style scale** |
|---|------|------------------------------|-------------------|--------------------------------|-------------------------------------------|
| 1 | **Per–treatment order trace (Rx / clinical `treatment_orders`)** | Row SoT: `order_number`, `status`, `exception_reason`, status transition **trigger**; 1I vocabulary on timeline (Intent, 1I.1) | Timeline may not record every state hop; no append-only **per-transition** log table in map (row + timeline suffice if payloads are good) | **Read recipe:** `treatment_orders` joined to `patient_timeline_events` where `payload` references `treatment_order_id` or `order_number`; 1I money/capture events; outbound job payload includes `patient_id` and order pointers where email is order-related | **Standardize** `payload` keys for order linkage on 1I- and fulfillment-related timeline rows; defensible “order state moved” is **visible** on the row or on a queryable **timeline** **payload** |
| 2 | **Per-subscription lifecycle** (when 1I has a rail) | 1I text + `patients` / `metadata` adapter fields | **PSP** subscription object may be **separate** from a single app **view** in early builds | **Target:** any webhook/HTTP that **changes** entitlement, dunning, or pause **writes** 1I-named state + **optional** timeline with stable subscription/contract ids in `payload` | Dunning / lapse that **gates** care must be **queryable in-app**, not only in the PSP UI |
| 3 | **Fulfillment / pharmacy / dispatch** | `preparing` → `rx_sent` → `shipped` / `fulfilled` / `exception`; pharmacy prep in `impl` patterns; 1E supplement path | Partner tracking id scattered in `metadata` | **Target** timeline `payload` links: `treatment_item_id` + `treatment_order_id` + partner ref for dispatch-related events | **Stuck** in `preparing` or `rx_sent` discoverable for ops (row + minimal UI/query), not only ad-hoc SQL |
| 4 | **Failure / stagnation (ops “dashboards”)** | 1H stall/metrics, 1G `primary_blocker` | No **unified** “failure” product; external Grafana TBD | **Read models** (queries): `treatment_orders` with `payment_failed` or `exception`; `outbound_jobs` with `status = 'dead'`; 1G stale; 1J/1I hold flags; same rows as 1H | **At least one** **staff**-routable **view** or **documented** query: stuck funding, stuck fulfillment, **dead** notifications, open exception—by `patient_id` or `order_number` |
| 5 | **Webhook replay / backfill** | `stripe_webhook_events` + dedupe of `event.id` | **No in-app** replay button; handler must stay **idempotent** on re-run / duplicate | **Runbook (target):** re-invoke handler for stored `stripe_event_id` or re-deliver; duplicates rejected by idempotency row = safe | Ingestion and **errors** inspectable in **&lt;1 minute** of support time at scale (table + log path, not only vendor dashboard) |
| 6 | **Outbound job retry / dead letters** | `outbound_jobs`: `attempts`, `last_error`, `dead`, cron; payload types in `lib/jobs/outboundJobTypes.ts` (e.g. `patient_id`, `dedupe_key`) | Query by patient may need JSON filter / index | **Target:** document query pattern + optional `jsonb` path index for `payload->patient_id` by `job_type` | **No** “notification died invisibly”: `dead` rows are **1H**-visible; resend = re-enqueue or break-glass with audit (1E/1J as applicable) |
| 7 | **“Why did this happen?” (introspection)** | 1G permit; 1I; 1J; `payload` hooks; `audit_events` for actor | No global `correlation_id` in map v1; inconsistent `payload` across insert sites is the **main** drift | **Target convention:** for major `event_type` (clinical, 1I, fulfillment), `payload` always includes `patient_id` and **at least one** scope id among `care_program_id`, `treatment_item_id`, `treatment_order_id`, `refill_request_id`; for async legs, add `stripe_event_id` / `outbound_job_dedupe_key` / `provider_message_id` where the integration already has it | New event types or major mutations **include** the id set in the same logical operation as the state change, or the write is **incomplete** (see 10) |
| 8 | **Staff / admin debug surfaces** | **Internal** patient case (`app/internal/.../patients/[patientId]`), timeline, orders surfacing in product | **No** dedicated “E2E meds” incident lens in map v1 | **Target:** one augmented internal flow or saved **stacked** sequence: patient → `treatment_orders` (sort) → 1I slice of timeline → 1G/1J blockers → `outbound_jobs` (last/dead) → **recent** `stripe_webhook_events` | **Same** DB tables; only **read** and **UI** **composition** — no second product line |
| 9 | **Correlation and causality (ids)** | 1I.6 idempotency; outbound `dedupe_key`; Stripe `event_id` in webhook path | Gaps = inconsistent payloads (see 7) | Unify 1H.1 **payload contract** with 1I adapter logging (`provider_message_id` for Resend, etc. where 1I names it) | Same as row 7: ids in the same logical write as the mutation, or the write is **incomplete** |
| 10 | **When timeline / job / audit write fails** | `impl` often `console.error` and continues; `logAuditEvent` swallows insert failure; 1J.10d for audit; no distributed 2PC | **Split brain:** row moved, narrative missing | Per 1J.10d: **fulfillment-** or **money**-relevant class = **no** “success to user” if durable narrative/audit is missing; minimum = **high-signal** **alert** on insert error + **reconciling** runbook | **No** 1I-named **money** or **treatment_outcome** **transition** with **row** **advanced** but **no** matching 1I-vocabulary event where the map **requires** one; periodic **recon** (order status vs timeline) in ops |

*Default “why no meds?” triage (query-level, not a new runbook per patient):* start from the patient’s `treatment_orders` (newest or failing). Then: **pending / clinician review** → 1G/1J; `payment_failed` or uncaptured → 1I + `stripe_webhook_events` (and subscription row if any); `approved_fulfillment_pending` **stale** → 1I/1G block; `preparing` / `rx_sent` **stuck** → partner metadata + `outbound_jobs`; `exception` → `exception_reason`; **refill** path in timeline → 1G/1J/1J.6; **if** all rows “green” but no ship → `outbound_jobs` **dead** + **notification** path. The **map** demands a **reconstructable** E2E path in **owned** data, not a worse **script**.

*Reject:* “**We** emit many timeline **rows**, therefore we have **operational** **observability**.” *Require for maturity:* linkable ids per major leg, no silent **webhook** **drift** (idempotency + **inspectable** table), `dead` / **failed** in a **common** **ops** vocabulary, one **E2E** path **in** the **DB** **you** own. **Ownership and SLA (who / by when / if missed):** see **1G.1** — 1H.1 is trace only. **Platform**-level **ownership (not 1G tuple):** **1H.2**. *Recon, drift, safe retry (no double charge/ship/authorize) when async is duplicated, delayed, or missed:* **1H.3,** invariants in **1I.6.**

---

### 1H.2 IT / platform operations: system-level ownership, health, and intervention (Model C)

*Pressure-test:* **1D.1** governs **who** may **exercise** **which** **product** **capability**; **1G.1** governs **patient**-**scoped** work **queues** and **SLA;** **1H.1** governs **trace** **ingredients** in **owned** **tables**. **Gap:** the **map** can **still** be **silent** on **(a)** **who** **owns** **corrective** **action** when the **failure** is **infrastructure**- or **vendor**-class (not a **`care_program`** line), **(b)** what **“healthy”** **means** for **webhook** error **rates,** `outbound_jobs` **age** **distributions,** or **retry** **storms,** **(c)** **whether** **replay** / **requeue** / **kill-switch** **paths** are **capability**-**gated,** **audited,** and **separate** from **CS** or **fulfillment** **triage.** **1H.2** closes that **without** a **new** **system,** **ticketing** **product,** or **separate** **“platform** **app.”**

**Not in scope here (out of app repo, still mandatory for orgs):** **named** on-call; **PSP** / **CPaaS** / **pharmacy** vendor status pages; **runbooks** in **Notion;** **Terraform** or **Vercel** / **host** consoles; **secret** **rotations** in **1Password** or **KMS** — the **map** only **binds** in-app or **runbook** + **audit** **receipts** where the **product** **touches** it.

| # | Theme | **Exists / honest (map + 1H.1)** | **Partial / implied** | **Target (tighten; no new stack)** | **Non-optional before “integration traffic is normal / scale”** |
|---|--------|----------------------------------|------------------------|-------------------------------------|------------------------------------------------------------------|
| 1 | **System-level ownership (not 1G)** | 1H.1 rows: webhooks, `outbound_jobs`, orders; **Intent** (service-role **bypass** = product risk). | **No** `responsible_party: platform` on `care_program` (by design: wrong **layer**). | **Runbook + org-named** owner (platform / eng / SRE / on-call) for **(i)** **PSP** **webhook** 5xx, **(ii)** `outbound_jobs` p95 age or dead **rate,** **(iii)** `app/api/cron` **misses,** **(iv)** third-party **downtime;** tie to **1G.1** only when a **patient** case is **stuck** as **consequence. | **No** invisible **owner** for spiking `dead` **notification** **jobs;** on-call + **runbook,** not only ad-hoc **Slack** |
| 2 | **System health visibility** | Queryable `stripe_webhook_events`, `outbound_jobs`, 1H.1 **recipes;** optional APM (Intent: out of **map**). | **No** first-class queue-depth **product** in the **map;** **Grafana** / **Datadog** = org. | **Target:** documented **SQL** or **admin** saved view on 1H.1 **tables,** or one read-only “integration health” lens (no new ingestion). | **At** **least** one **numeric SLO-**line per **async** leg in **runbook,** not only per-incident |
| 3 | **Intervention (replay, requeue, unblock)** | Idempotent replay; 1H.1 row 5; `requireCapability` on **mutations;** no 1I/1J **bypass**. | In-app **replay** may be **absent;** **manual** re-enqueue: **who** + how **logged** **undefined** often. | **Target: (a)** `requireCapability` (e.g. `ops_admin` + `can_manage_system_settings` or add `can_replay_webhook` / `can_requeue_dead_job` in `capabilities.ts`), **(b)** `audit_events` (e.g. `webhook.replay`, `outbound_job.requeue`) + **reason** or **incident** id, **(c) 1D.1** if out of **primary** role. | **Never** replay as **service** **role** from a **browser;** **never** without a durable `audit_events` **row** reviewable by **`can_view_audit_log`** |
| 4 | **Break-glass (system degrade)** | 1J.9 (identity); **Intent** on **capability** / **audit.** | Catastrophic toggles (e.g. disable all webhooks) are **not** a **map** product. | **Degrade =** runbook + vendor / **host** flags; **in-app** action = `requireCapability` + **audit**. | **Post-hoc** **review** for 1G/1I/1J **bypass;** **unaudited** = **not** a **supported** path |
| 5 | **Environment / platform control (prod, migrations, creds)** | Supabase, Vercel, **Stripe** keys, **migrations** in **repo. | **Not** in `capabilities.ts` (correct: **out-of-app** process). | **Map stance:** prod access, **migration** appliers, secret rotators = **people** + access control **outside** the app. Migrations = **code**; **not** a license to ad-hoc **prod** SQL. | **Two-person** (or org **equivalent**) **for** prod **secrets;** product **`super_admin` ≠** infra **root** |
| 6 | **Separation: IT vs CS, fulfillment, clinical** | 1G.1 = **case;** 1D.1 = **capability.** | Lumping all **staff** for **integration** UIs. | **Platform** intervention (replay, mass requeue) **≠** `customer_support` or `pharmacy_ops`; **separate** cap / **grant** / on-call. Rows **(1)** + **(6):** no **implied** **mixing.** | **Largest** risk: `super_admin` for **all;** 1D.1 + 1H.2 **(3) **tighten **in-app** levers |

*Cross-links:* **1H.1** (per-patient triage), **1G.1** (SLA), **1D.1** (elevation), **1I** (webhooks, money), **1J.9** (break-glass), **Intent** (service **role**). **1H.2 =** system / platform / integration **ownership** + **intervention** + **audit** — not a second 1G **`responsible_party`.**

### 1H.3 Reconciliation, drift, and idempotent safe retry (Model C)

*Pressure-test:* **1H.1** = trace; **1H.2** = who may replay. **1I.6** already: DB is a **projection** to PSP/chain/invoice, inbound idempotency `(provider, event_id)` or **hash,** `outbound_jobs` `dedupe_key,` same **transaction** for order row + `patient_timeline_events` + `audit_events` when the **stack** allows. **Gaps: (i)** who **catches** divergence (internal `treatment_orders` + 1I **timeline** vs last **PSP** / **fulfillment** **partner** state) before a ticket, **(ii)** **authorizing** side effects (prescribe, ship) are **not** HTTP-idempotent the same way as a **webhook** — use **1G/1J,** `requireCapability,` **uniqueness** or **re-read** terminal state, **(iii)** **missed** **webhook** if **no** **poll. **1H.3** names **recon** as **queries** + **optional** **scheduled** **job** + **runbook** (see **1H.2) **,** not a **saga** **/ **reconciliation** **product.**

| # | Theme | **Exists / partial / missing** | **Target (same tables)** | **Non-optional at async scale** |
|---|--------|-------------------------------|----------------------------|---------------------------------|
| 1 | **Recon: who detects internal vs external divergence?** | 1I.0–1I.6, **1I.8–1I.9,** **1H.1** **row 10,** `stripe_webhook_events` (or any **webhook** / durable-inbound table), **1I.7** | **Documented** (or **cron) **check:** order row + 1I **vocabulary** **vs** **metadata** **reconciliation** **ids** **per** **rail**; optional **subscription** / **1E** line **vs** **inbound**; **1H.1** **stuck** **funding**; **1I.9** table | **At** **least** **one** **periodic** **recon** (or runbook+owner (1H.2)) on a **defined** **mismatch** **class** per **active** **rail,** not only the v1 **PSP.** |
| 2 | **Drift signals** | 1G `primary_blocker,` `exception,` 1H.1, `dead` **jobs** | **Same** as **(1) **+ **stuck** **(status** > **N,** no **expected** 1I / **partner** / **outbound** **correlate) **| **Captured** / **shipped** / **R-high** **divergence** is **queryable in-app,** not only in **vendor** **UIs** **|
| 3 | **Webhooks: idempotency** | 1I.6; `stripe_webhook_events`; 1I.8 | **Every** **PSP: **same** class **of** **(provider,** id **or** hash) **. **| **At-least-once** **delivery,** **at-most-once** **effect** = **durable** **de-dupe** **+** idempotent **handler** (1H.2 **replay) **|
| 4 | **`outbound_jobs`** | `dedupe_key,` **retries,** `dead` | **Wrong** `dedupe_key` → duplicate **sends;** fix + runbook. | **One** logical **send** per key **discipline;** re-enqueue **(1H.2) **without** **fan**-**out** of **unintended** **duplicates** **|
| 5 | **Clinical / fulfill: no double** | `requireCapability,` 1G, 1J, **DB** **uniqueness** **(as** **migrations)** | If **only** “**one** **request** in **mind:” **idempotency**-**key,** or **(order,** type) **uniqueness,** or **re-read** **=** no-op, **+** **audit;** no **new** **saga. **| **No** second **captured** / **shipped** / **“prescribed**” for **one** **intent;** **test** **replay** + **double**-**click** **|
| 6 | **Missed** **/ **reordered** **async** | 1H.1, 1I.8 (poll) | **Poll** or **re-fetch** in **1I** **adapters** (optional **cron) **. **| **“** **Only** **webhooks,** no **periodic** **check**” **= **revenue/entitlement** **at** **risk** **(document) **. **|
| 7 | **Narrative** | 1I.6 + 1H.1 + 1H.2 | **At-least-once in + out,** idempotent **application,** 1J on **high-risk** | **On-call** **runbook** **(primary** **leg) **. **|

*Cross-links:* **1I.0–1I.6,** **1I.8,** **1I.9** **(multi-** **rail** **mismatch,** **not** a **new** **accounting** **product),** **1H.1,** **1H.2,** **1J.10d,** **1G,** **1J** (preflight), **Intent.** **No** reconciliation, Saga, or orchestrator **product.**

### 1H.4 Acquisition, inbound attribution, and external marketing boundaries (no growth stack in core)

*Scope:* The org may optimize **paid and organic** acquisition, but the **map** does **not** add a **marketing OS,** **campaign orchestrator,** or **attribution product** as a second **source of truth** for clinical, billing, or 1G decisions. External ad networks, pixels, and MMPs are **I/O at the boundary;** the **app DB** and **1H** read models are **authoritative** for in-product fact once a `patient_id` exists. This subsection **refines** using **intake** and early **`patients` / `care_program` / session** `metadata`, `patient_timeline_events` (intake and commerce milestones), **`treatment_orders`** and **1E** (compositional checkout), **1I** (subscriptions, cadence), and **`outbound_jobs`** (first-party nudges — *not* ad-campaign state machines).

*Reject / forbid (architecture):* (i) first-class **bids, audience graphs,** or ad-network **campaign** objects as **clinical SoT;** (ii) **wiring** **1G** **permit,** **`impl`**, or **1I** **money** transitions to **ad APIs** (including “optimize by spend” in core); (iii) **sending** **PHI,** clinical narrative, or **identifying** outbound payloads to vendors or LLM APIs as the **default** for growth analytics.

| # | Theme | **Exists (typical / map-honest)** | **Partial** | **Target (same models; no new platform)** | **Non-optional before Hims-style scale** |
|---|--------|----------------------------------|------------|------------------------------------------|------------------------------------------|
| 1 | **Inbound attribution (source, campaign, entry at intake)** | Landing / app may see UTM/click ids **ephemerally;** `metadata` on `patients` or `care_program` used **ad hoc.** | Not always **one** **namespaced** key on the patient or first `care_program` at first completed intake. | Durable, versioned `acquisition` / `marketing_attribution` object in **`patients.metadata`** and/or **`care_program.metadata`** (not narrative PHI): e.g. `source, medium, campaign, content, term;` platform ids (gclid, etc.) only where **law and policy** allow; optional `patient_timeline_event` (e.g. `intake_attribution_recorded`) with **non-PHI** payload. | **At least one** internal **cohort key** (source/campaign) on the **patient** or program **so 1H funnels can be stratified** without export-only reconstruction. |
| 2 | **Source → engagement → conversion → retention → outcome** | 1H funnel + 1G tuple + 1I; **1G.3(i)** post-outbound loop. | Stratification by **inbound attribution** often missing in queries. | **Read model:** join attribution keys in **metadata** + `patient_id` + timeline + **`treatment_orders` / 1E** + 1I + 1G.3 / adherence proxies. **No** second funnel **DB.** | “Did this **source** produce **paying,** **retained,** **on-path** care?” answerable from **internal queries**—not only by pasting into a **vendor UI.** |
| 3 | **External conversion output (CAPI / server-to-ad, optional)** | Client pixels on marketing **sites** (often outside repo). | In-app CAPI may be **absent** or **risky** if outbound fields are **not** allowlisted. | **Optional** adapter or edge: **only** **hashed** or **platform-approved** ids, **coarse** event types (lead, purchase, subscribe), value, currency, timestamp, optional **external** order id as ad product expects; **1I-style** idempotency for outbound to vendor. | If you **emit:** **no** PHI, free text, or clinical labels; **documented** allowlist; **audit;** key rotation per **1H.2** discipline. |
| 4 | **Data boundaries (internal vs external)** | 1D, RLS, **Intent.** | “Marketing” **not** always a **named** capability + read surface. | **Clinical** chart: `requireCapability` + **1J.9** where listed. **Growth** read: **only** through **1H.4.1** (defined internal route + `can_view_growth_aggregates`) or a read-only **warehouse** view with the **same** row contract—**not** ad-hoc SQL on `patients`, **not** `messages` / `clinical_visits` / **lab** text. | **1H.4.1** is the **approved** staff read path (or a runbook-**documented** equivalent); two-zone runbook. |
| 5 | **AI (internal; hard output constraints; not execution; not exfil)** | **1G.3(f),** 1N stub, 1H read models. | “Source quality” for growth not always **named;** AI output constraints not always **enforced** at the view layer. | On **aggregates** or **de-identified** slices: (i) relative **quality** of **sources,** (ii) churn / adherence / drop-off by **attribution** key, (iii) **hypotheses** for messaging, funnel, strategy — **all** outputs must satisfy the **four** **1H.4.2** constraints (aggregated, de-identified, non-reversible, k-suppressed) regardless of whether the consumer is internal or external. | **Must not:** run campaigns, call ad APIs as an **autonomous** agent, **export** PHI to external models, **emit** individual-level text to marketing users, or **bypass** small-cell suppression for "internal" review. Same bar as **1G AI.** |
| 6 | **Marketing user visibility (defined surface, not abstract)** | Generic BI / **ad-hoc** exports; growth users sometimes given **`super_admin`** or raw DB to “just look.” | “Leads” in the same tool as clinicals; people **ask for** **direct DB access** because **no** named surface exists. | **One** internal route — see **1H.4.1** — under `app/internal/(protected)/growth/**` (or named equivalent), gated by **`requireCapability('can_view_growth_aggregates', …)`** + **`SensitiveAccessReason`** when the slice is broad; **read-only;** serves **only** the **1H.4.1** view contract (acquisition key × 1H funnel, 1I revenue/churn, 1G.3 proxies). | **Shipped or runbook-documented** as the **only** approved read path; **no** raw DB / **service-role** browsing; **no** **writes** to core state. |
| 7 | **Bundle (non-optional)** | Scattered. | — | (1)–(6) + **Intent** (log minimization). | Attribution **capture,** **lifecycle** join, **named** **surface** + **capability** (1H.4.1), safe CAPI **if** used, **role** separation, **AI + data** policy for growth. |

**1H.4.1 Defined marketing / growth surface (concrete, not abstract)**

*Goal:* eliminate the failure mode of “growth needs numbers → asks for DB / `super_admin` → exports a CSV with PHI.” The map names the **route, capability, and contract** so the answer to “where do I go?” is **one** place.

- **Access point (route):** an **internal** staff page under `app/internal/(protected)/growth/**` (exact slug per product; e.g. `growth/dashboards`, `growth/sources`). Same shell, RLS, and `requireCapability` pattern as other internal pages. **No** patient-facing surface.
- **Capability (added to [`lib/auth/capabilities.ts`](../../lib/auth/capabilities.ts)):** **`can_view_growth_aggregates`** — read-only access to the **1H.4.1** view contract; **does not** grant `can_view_clinical_history`, chart, messages, or PII export; **does not** grant any `can_…` mutation. Bundles into **`marketing`** (or analogous) `StaffRole` and may be granted additively to other staff per **1D.1** (no `super_admin` default).
- **Reason discipline:** broad cohort exports or unusual filters (e.g. < N patients per bucket) require **`SensitiveAccessReason`** on the same `audit_events` row, per **Intent** map-listed pattern.
- **View contract — hard output constraints (apply to *every* read, dashboard, export, or AI output served from this surface; no exception for "internal" or "convenience"):**
  - **Aggregated:** rows must be **counts, sums, rates, percentiles, or distributions** over a **named cohort** (e.g. acquisition key × funnel step). **No** individual-row outputs, **no** `patient_id` / `care_program_id` / `treatment_order_id` columns in the response, **no** "drill to row" affordance.
  - **De-identified:** **no** direct identifiers (name, email, phone, DOB, address, account id, `patient_id`, `staff_user_id`, external `gclid` / `click_id` tied to a person); **no** indirect identifiers known to be re-identifying in the org's jurisdiction (e.g. ZIP + DOB + sex tuples), and **no** free-text fields (`messages`, `clinical_visits`, `patient_diagnostic_reports`, `patient_lab_observations`, notes, addresses).
  - **Non-reversible:** outputs must not enable reconstruction of an individual via **iterated queries, narrow filters, time-window slicing, or join with another exported slice.** The surface enforces this by **server-side cohort definition + suppression *after* aggregation** — the client cannot request a row list, and "compare two cohorts" is itself an aggregate query, not two raw lists.
  - **Small-cell suppression (k-anonymity):** any cell, cohort intersection, or time-bucket with **count `< k`** (org policy; **k ≥ 20** is the recommended floor pre-scale, raised at scale) is **suppressed** (returned as `null` / "<k") **before** render, export, AI prompt, or download. Combined cells that would imply a suppressed value via subtraction are **also** suppressed. **No** "show anyway" flag in product, even for `super_admin`.
  - **Permitted slice scope:** acquisition key × **1H funnel** counts and drop-off rates; **1I** revenue / churn / cadence aggregates by cohort; **1G.3** adherence / re-engagement proxies by cohort; **CAPI / outbound** delivery + conversion counts (if **1H.4** row 3 is wired) — all subject to the four constraints above.
  - **Forbidden in any output here:** rows of `messages`, `clinical_visits`, `patient_diagnostic_reports`, `patient_lab_observations`, free-text notes, contact details, **or** `patient_id`-keyed lists, **even** as "preview" or "sample".
- **Constraint enforcement at the view layer (architectural, not advisory):**
  - The **server** route renders only **whitelisted aggregate queries** with **bound** group-by sets; arbitrary SQL or raw-row endpoints are **not** part of **1H.4.1**.
  - **Suppression is applied server-side** before the response leaves the trust boundary; **no** client-side toggle, **no** undocumented param, **no** debug bypass in production.
  - **AI outputs** served on this surface (1H.4.2) inherit the **same** server-side suppression and the **same** prompt/response contract: the model receives **already-aggregated, suppressed** inputs only, and any text it produces that would name or imply an individual is **rejected** before display.
  - Any **export** (CSV, PDF, scheduled email, warehouse copy) goes through the **same** aggregator + suppressor; there is **no** "export raw" alternate path.
  - **Optional warehouse / replica** must implement the **same** view contract and **same** suppression thresholds before any growth user reads it; otherwise it is **not** an approved 1H.4.1 surface.
- **Anti-patterns (rejected):** giving a growth user `super_admin` or `ops_admin` for "just dashboards"; granting raw `patients` SQL access; building a parallel marketing app that re-queries production with the **service role**; attaching ad-network SDKs to the staff surface; **disabling suppression "just for an internal review"**; **shipping a `patient_id` to the LLM** to "explain a single user's journey"; **piping AI output that names individuals** into a marketing dashboard or export.
- **Optional warehouse path:** if a **read-only warehouse / replica** view is preferred (per Intent “optional copy pipeline”), it must implement the **same view contract and suppression rules**; the **map** still treats **1H.4.1** as the **canonical definition** of what a growth user may see.

**1H.4.2 AI and growth (hard output constraints — not just guidance)**

The product may use the same **1G / 1H / 1N** assistive pattern to **rank,** **summarize,** and **suggest** on **acquisition- and source-stratified** read models — **not** a separate "marketing **AI**" engine, and not a path that **ships** PHI to a third-party model or ad network. **AI may analyze deeper internal data** to produce these outputs; the **outputs themselves**, when shown to or exportable by a marketing / growth user, must satisfy **all four** **1H.4.1** constraints — **with no exception for convenience, internal access, or staff seniority:**

1. **Aggregated** — every AI-surfaced statistic, ranking, or recommendation refers to a **named cohort** (size disclosed and ≥ k); never a single patient, account, or row.
2. **De-identified** — generated text and structured outputs must **not** contain direct identifiers (`patient_id`, name, email, phone, address, DOB, account id, or vendor click id tied to a person) and must not contain indirect identifiers known to enable re-identification in the org's jurisdiction.
3. **Non-reversible** — outputs cannot, alone or combined with prior outputs from this surface, allow reconstruction of an individual; the AI **does not** receive raw `patient_id`-keyed inputs for marketing context, and the surface enforces suppression on the inputs the model sees and on the outputs the user sees.
4. **Small-cell-suppression compliant** — any AI claim, comparison, ranking position, or example tied to a cell that **fails** the **k-threshold** is **withheld** (e.g. "insufficient data to report") rather than rendered, paraphrased, rounded, or "approximately" surfaced.

*Scope clarifications (normative):*
- **Internal-vs-external is not a relaxation:** the four constraints apply **whether** the consumer is an external partner, an internal marketing analyst, an executive, or another staff role visiting the **1H.4.1** route. There is **no** "internal-only" bypass.
- **AI may read deeper, but cannot output deeper:** behind the surface, AI jobs may operate over richer joins (e.g. timeline + 1I + cohort metadata) **only** for the purpose of producing outputs that conform to constraints (1)–(4); the surface is the **enforcement** boundary, not a hint.
- **No PHI to external models for growth purposes:** as in **Intent**, default LLM/vendor calls for marketing analysis must run against **already-aggregated, suppressed** inputs; PHI / chart text is **never** the prompt.
- **Audit:** AI-served growth outputs are subject to the same `audit_events` discipline as the rest of **1H.4.1**; broad/unusual queries log a **`SensitiveAccessReason`**.

**1H.4.3 Cross-links:** **1E** (compositional checkout), **1G.3,** **1I,** **1H.1,** **1D.1** (capability + role + elevation), **1N,** **Intent** (RLS, service-role discipline, audit), **1J** (identity). **1H.4** is the map home for how **external acquisition** meets the **internal** spine; **1H.4.1** is the **only named staff surface** for it; it does **not** add a new **engine.**

### 1H.5 Third-party verification readiness (audit posture; no new compliance product)

*Pressure-test:* External certification bodies (e.g. **LegitScript-** or **HITRUST-**class reviewers, state pharmacy boards, payer audits, partner due-diligence) ask provable, repeatable questions: *"Show every Rx written this week with the prescriber identity, intake basis, safety check, and fulfillment chain. Prove no automated prescribing path. Prove marketing did not influence clinical decisions. Show your audit trail and access logs."* The map's **already-named** spines — **1G** (case ownership, permit, classification), **1G.2** (active safety enforcement at decision time), **1H.1** (operational trace), **1I** (money state + reconciliation), **1J** (identity, merge, gaps) and **1J.10** (safety preflight), **1D** (capabilities + audit) — supply the **ingredients.** **1H.5** names the **verification posture** that makes those ingredients **provable** to an external reviewer **without** a separate compliance app, parallel "audit DB," or duplicated vendor product.

*Reject:* A "compliance module" that re-stores the same facts in its own tables; ad-hoc CSVs assembled per audit; "trust us, we have a policy" as a substitute for a queryable trail.

| # | Verification theme | **Exists / honest** | **Partial / risk** | **Target (same tables; verifiable)** | **Non-optional before certification** |
|---|---------------------|---------------------|---------------------|---------------------------------------|----------------------------------------|
| 1 | **Provider decision legitimacy (no automated Rx)** | `clinical_visits` row + prescriber identity; **`treatment_items`** state transitions gated by `requireCapability('can_prescribe' / 'can_clinical_treatment_authoring')` + `audit_events` (1D, Intent, 1J.10 preflight target). | "Authored-by" sometimes only on a row, not on **every** state transition that changes the Rx; AI suggestions can be misread as decisions. | **Every** Rx / dose / continuation-grant transition has (a) an explicit `staff_user_id` (prescriber, not service role) on the **mutation** path, (b) a referenced `clinical_visits` (or addendum) per **Intent precedence** (1) or (2), (c) `audit_events` row with capability used, and (d) **no** alternate path that bypasses 1G permit (Section 1G AI layer + 1N: AI is **assistive**, never authority). | **Single, queryable answer** to "list every Rx in window W with prescriber, visit/addendum id, capability used, and 1G permit clearance" — no parallel "manual" path that escapes audit. |
| 2 | **Intake validity (meaningful, decision-tied, not bypassable)** | `care_program` + 1F intake/check-in capture; `treatment_items.metadata` policies; **1G** `clinical_required` as gating turn. | Intake completeness sometimes inferred; "submitted" not always **linked** to the specific decision it supports. | Intake completion writes a **typed** `patient_timeline_event` referencing `care_program_id` (and `treatment_item_id` when scoped); the **decision** path **reads that link** and **fails closed** if the intake required for that protocol is missing or stale (per protocol policy). Same `requireCapability`-gated mutation surface — **no** ad-hoc DB skip (Layer 2 protocol-gates bullet, Intent). | **Reviewer can show:** for any approved Rx, the intake/form rows that supported it, with timestamps and prescriber **review** signal — and confirm those gates **block** when missing on a fresh test patient. |
| 3 | **Active safety enforcement (contra / dup / dose / allergy)** | **1G.2** asserts at prescribe/approve in the **same server path** as authorization; **1J.10** `loadPatientCaseSafetySnapshot` *target*; allergy / labs / `treatment_items` in spine. | 1J.10 still target on some routes; storing safety-relevant data ≠ asserting on it (1G.2). | All listed clinical mutations **call** the **active asserts** + **preflight** before commit; failures produce `audit_events` with the failing assert name and the input snapshot id; **no** "save anyway" that escapes 1G.2. AI never clears a 1G blocker (1N + Section 1G AI). | **Prove on demand:** for a sample of approvals, the **assertion log** entries (or absence proven by deterministic re-run of the same input snapshot through 1G.2) — i.e. "this would have blocked if X were present." |
| 4 | **Fulfillment traceability (Rx → fill → dispatch → delivery)** | `treatment_orders` lifecycle migration ([`supabase/migrations/20260428100000_orders_lifecycle_v1.sql`](../../supabase/migrations/20260428100000_orders_lifecycle_v1.sql)) — `status`, `exception_reason`, transition triggers; **1H.1** rows 1–3 (per-order trace, fulfillment hops); pharmacy partner refs in `metadata`. | Partner ids scattered in `metadata`; not always indexed for queryable joins. | Standardized payload keys per **1H.1 row 7** so every fulfillment-related `patient_timeline_event` carries `treatment_order_id` + `treatment_item_id` + (when present) `pharmacy_partner_ref` + `tracking_id`; `audit_events` for any state change driven by staff. | **End-to-end chain** answerable per Rx: provider decision → `treatment_orders` row → 1I capture → pharmacy hand-off → ship/deliver event(s) → patient confirmation if any — joined by `patient_id` + `treatment_order_id` from owned tables. |
| 5 | **Auditability (full patient journey, decisions, access)** | `patient_timeline_events` (clinical / commerce / lifecycle), `audit_events` (mutations), `SensitiveAccessReason` for map-listed reads (Intent, 1D.1), 1H.1 trace recipes, 1J.10d on insert-failure. | Read audits sparse; export pipeline ad-hoc. | **Patient-journey export** = parameterized query joining `patient_timeline_events`, `audit_events`, 1G/1I/1J state, gated by `requireCapability('can_export_patient_journey')` + reason; **no** new SoT, no parallel "audit DB." See **1H.5.1** for the audit-ops surface. | Export of a patient's journey + access log is **reproducible** from owned tables; no audit answer requires Slack history or vendor dashboard alone. |
| 6 | **Marketing separation (no influence on clinical)** | **1H.4** rejects: no wiring of 1G permit, `impl`, or 1I to ad APIs; **1N** rejects per-role AI; growth surface is **1H.4.1** (read-only aggregates with hard constraints **1H.4.2**). | "Optimize by spend" temptation; growth users granted broad roles for "just dashboards." | Architectural rule **already** in 1H.4 + 1N is enforced by capability separation: **`can_view_growth_aggregates`** does **not** grant any clinical, mutation, or `treatment_items` capability; reviewer can verify by inspecting `lib/auth/capabilities.ts` + sample `audit_events` showing growth users only ever read aggregate routes. | **Show on demand:** `ROLE_CAPABILITIES` mapping + an `audit_events` window proving no growth-role actor wrote to clinical/order/money rows. |
| 7 | **Bundle (non-optional before certification)** | Scattered. | — | Rows (1)–(6) **plus** the audit-ops surface in **1H.5.1.** | **Explicit prescriber attribution; enforced prescribing constraints (1G.2 active); exportable patient-journey + access trail; traceable Rx → delivery chain — all from owned tables with role-gated access.** |

#### 1H.5.1 Audit operations (who, what, how — same tables, no new product)

*Goal:* eliminate "we'll figure it out when an auditor asks." Define the **roles, capabilities, surfaces,** and **operating loop** so that an internal compliance / ops user can answer an auditor in **hours,** not weeks, **without** ad-hoc DB or service-role browsing.

- **Who initiates audits (roles, not new accounts):**
  - **Internal:** `compliance_auditor` (already in `StaffRole`), CMO / clinical leadership and ops leadership via the Section 1G **Oversight, not owners** model — they **view** / **request** / **escalate**, they do **not** become a `responsible_party` on a case. External certification or board reviews flow through the same internal role; **no** external login to production for evidence pulls.
- **Capabilities controlling audit access** (added to `lib/auth/capabilities.ts` only when surface ships; no new auth product):
  - **`can_view_audit_log`** (already in the file) — read `audit_events` and `patient_timeline_events` for case- or window-scoped review.
  - **`can_export_patient_journey`** — generate the bounded patient-journey export described in row (5); always requires a `SensitiveAccessReason` and writes its own `audit_events` row.
  - **`can_view_provider_decision_log`** — read prescriber/visit/decision joins for a window or provider; same reason discipline.
  - **`can_view_access_log`** — read `audit_events` reads/mutations to inspect "who touched what" (Intent read-side bullet).
  - **No "audit super-user":** no capability bypasses RLS, **`requireCapability`,** or **1J.10** preflight discipline; broad reads still log `SensitiveAccessReason`.
- **Audit surfaces (same staff shell; no new app):**
  - **Patient-level export** — parameterized `patient_id` (or merged-cluster id from **1J**) → joined `patient_timeline_events` + `audit_events` + 1G state + `treatment_items` / `treatment_orders` + 1I outcomes + identity per **1J.1–1J.9**. Surface: an internal route under `app/internal/(protected)/compliance/**` (slug per product), gated by `can_export_patient_journey`.
  - **Provider decision log** — prescriber identity × window × `clinical_visits` + `treatment_items` transitions + capability used + 1G.2 assert outcome. Gated by `can_view_provider_decision_log`.
  - **Prescription history** — by patient or by drug class, joining the same rows as row (1) above; explicit "automated path test" query that returns **zero** rows where no `staff_user_id` and no `clinical_visits` reference exists.
  - **Access log** — `audit_events` filtered by actor / object / reason, including **failed** capability checks (Intent: failed audit = block-or-page) and broad/sensitive reads with `SensitiveAccessReason`. Gated by `can_view_access_log`.
- **How audits operate (loop, not a product):**
  1. **Issue / request detection** — auditor question, internal incident (1H.1 / 1H.2), or scheduled compliance review.
  2. **Data retrieval** — one of the four surfaces above; **no** raw DB / service-role queries by humans (Intent).
  3. **Review** — compliance role inspects export + cross-references `audit_events` + 1G permit + 1H.1 trace; outcomes documented in the org's existing review channel (Notion / ticket — out-of-app per 1H.2 boundary).
  4. **Outcome** — corrective action runs through the **same** capability-gated mutation paths the product uses (1G case action, 1I refund, 1J merge, 1H.2 replay) — never as a one-off SQL or service-role write.
- **Reuse (explicit):** all of the above is **`audit_events` + `patient_timeline_events` + 1H.1 trace + 1G.1 ownership** — **no** separate audit product, **no** parallel ledger, **no** copy of PHI to a vendor "compliance app."

**1H.5.2 Cross-links:** **Section 1G** (case state, permit, AI layer is assistive only), **1G.1** (ownership / SLA), **1G.2** (active safety enforcement), **1H.1** (operational trace), **1H.2** (platform intervention via the same caps + audit), **1H.4** (marketing separation), **1I** (money lifecycle + recon), **1J / 1J.10** (identity + safety preflight), **1D / 1D.1** (capability + reason discipline + elevation), **1N** (AI is assistive across all four staff surfaces; never authority), **Intent** (RLS, service-role discipline, audit, subprocessors). **1H.5** is the map home for **third-party verification posture;** it does **not** add a new system.

### 1H.6 Layer 3 daily operational metrics (full daily operator dashboard; no new analytics system)

*Pressure-test:* The map has strong traceability and lifecycle primitives, but day-to-day operations require a **complete daily dashboard** covering all core business functions — not a reduced "top N" list. A small, fast-moving company growing to Hims-class scale needs **full daily visibility** into growth, revenue, retention, operations, fulfillment, payments, and friction/risk. This section is additive and uses only existing models: `patient_timeline_events`, optional aggregated `domain_events`, `care_program`, `treatment_items`, `treatment_orders`, `clinical_visits`, 1I subscription/payment rows, fulfillment states, `outbound_jobs`, and `audit_events`.

*No new system:* metrics are aggregate SQL queries or views over existing SoT rows; optional daily aggregate snapshots may be emitted as `domain_events` summaries; no duplicate source-of-truth metric tables.

*Reject:* "We only watch 3 metrics daily" — at Hims-class scale, growth, revenue, retention, ops, fulfillment, payments, and friction must all be visible daily. Some metrics trigger faster action than others, but **none are hidden or downgraded out of daily review.**

#### 1H.6.1 Core daily dashboard (~12–18 metrics, all reviewed daily)

All metrics below are part of the **single daily operator dashboard**. Response speed may differ (some require sub-4h response when triggered, others are reviewed and trended), but every metric here is reviewed every day.

**Growth**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| G1 | **New patients (acquired)** | First completed intake / first `care_program.created_at` per patient; `patient_timeline_events` intake-completed | Exists; event naming may vary | Daily count of new patients (first-completed intake) |
| G2 | **Conversion rate (intake -> paid/ordered)** | Funnel hops from `patient_timeline_events` + `treatment_orders` + 1I payment state | Exists; funnel model defined in 1H | Daily intake->order and intake->paid conversion rates |

**Revenue**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| R1 | **Daily revenue (captured)** | 1I reconciled outcomes + `treatment_orders` / line rails | Exists | Daily captured/recognized revenue (aggregate, all rails) |
| R2 | **Average order value (AOV)** | Sum of captured order amounts / count of paid orders (clinical + 1E retail per rail) | Exists; rail-aware split partial | Daily AOV across paid orders; optional split by Rx vs retail |

**Retention**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| Re1 | **Returning customers (paid today)** | `treatment_orders` / 1E paid orders joined to patient prior-paid history | Exists; "returning" definition needs single rule | Daily count and share of paid orders from patients with prior paid order |
| Re2 | **Active subscriptions** | 1I subscription/entitlement rows in active state | Exists where subscription rail enabled | Daily count of active subscriptions; daily net change (new - cancel/lapse) |
| Re3 | **Refill / reorder rate** | Stage 6 due fields (`next_refill_due_at`, `next_checkin_at`) + refill/order follow-through | Exists as proxy | % due refills/check-ins completed within policy window |

**Operations**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| O1 | **Provider throughput** | `clinical_visits` reviewed/signed; `treatment_items` / `treatment_orders` decision states; 1G ownership tuple | Exists | Daily decisions per day + median `time_to_decision` |
| O2 | **Provider backlog / queue** | 1G rosters + `responsible_party: provider` + stale/age | Exists; 1G.4 defines load views | Open provider-queue depth, oldest-case age, stale-share |

**Fulfillment**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| F1 | **Fulfillment success rate** | `treatment_orders` fulfillment statuses (`preparing`,`rx_sent`,`shipped`,`fulfilled`,`exception`) + timeline | Exists | Daily fulfilled / (fulfilled + exception + stuck>threshold) |
| F2 | **Fulfillment delays / backlog** | Same statuses + age in state; partner refs in `metadata` | Exists; partner refs partial | Aged backlog count by stage (`preparing`/`rx_sent` over policy threshold) and exception count |

**Payments**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| P1 | **Payment success rate** | 1I payment outcomes (`captured`,`payment_failed`) + `treatment_orders` | Exists; rail-specific mapping varies | Daily captured / (captured + payment_failed) |
| P2 | **Failed payments** | 1I `payment_failed` events + downstream retry/dunning state | Exists | Daily failed-payment count + duplicate/adjustment anomalies |

**Friction / Risk**

| # | Metric | **Real data source / state** | **Exists / partial / missing** | **Target definition (aggregate only)** |
|---|--------|------------------------------|--------------------------------|----------------------------------------|
| Fr1 | **Dropout rate by stage** | Funnel/dropout model in 1H + stage/blocker states in 1G (intake incomplete, no consult, no-show, consult-no-treatment, no continuation, subscription cancel, missed refill — see **1H.6.2**) | Exists as proxies | Daily dropout count and rate at each named lifecycle step |
| Fr2 | **Refunds / complaints** | 1I refund/dispute outcomes (`refund_*`,`dispute_*`) + 1G.5 `support_experience` exception category | Exists | Daily refund volume, dispute volume, and complaint exception count |
| Fr3 | **Exception load (operational risk)** | 1G.5 categories + 1G.1 ownership + 1H.1 traces + `outbound_jobs.dead` | Exists | Open exception count, aged exception count, SLA-breached exception count |

*Total core daily metrics:* **16** (G:2 + R:2 + Re:3 + O:2 + F:2 + P:2 + Fr:3) — within the 12–18 target band. **All are reviewed daily.**

#### 1H.6.1A Operator trigger profile (good / bad / action — every dashboard metric)

Every metric above has explicit good/bad/action so daily review drives decisions, not passive awareness.

| Metric | **Good (daily)** | **Bad (trigger)** | **Action when bad moves** |
|---|---|---|---|
| **G1 New patients** | Within expected band; trend stable/up | Sudden drop or sustained decline | Check acquisition channels, intake entry, attribution capture; route platform issues to **1H.2** |
| **G2 Conversion rate** | Intake->order/paid rates stable or improving | Conversion drop not explained by intake mix | Identify failing hop (intake, consult, decision, payment, fulfillment) and assign owner via **1G.1** |
| **R1 Daily revenue** | Within expected band given volume mix | Revenue drops without matching top-of-funnel decrease | Diagnose payment/conversion/fulfillment chain; fix failing stage before acquisition tuning |
| **R2 AOV** | Stable or improving relative to mix | Sudden AOV drop or unexplained shift | Check pricing/discount config, product mix changes, refund spikes |
| **Re1 Returning customers** | Stable or growing share | Drop in returning-paid share | Inspect continuation health (Re3), subscription cancels (Re2), and patient experience (Fr2) |
| **Re2 Active subscriptions** | Net positive (new > cancel/lapse) | Net negative or sudden cancel/lapse spike | Investigate dunning, payment failures (P2), continuation friction (Re3), and 1G.5 support categories |
| **Re3 Refill / reorder rate** | Due refills/check-ins complete within policy | Missed-refill or due-without-action rate rises | Trigger continuation re-engagement (Stage 6, 1G.3), verify reminder delivery, inspect blockers |
| **O1 Provider throughput** | Decision count and median latency within SLA | Rising latency or falling throughput with growing queue | Rebalance routing (**1G.4**), escalate provider coverage (**1G.1**), inspect blocker mix (**1H.1**) |
| **O2 Provider backlog** | Queue depth and oldest age within target | Queue depth grows or stale-share rises | Reassign within eligible providers, escalate per **1G.1**, surface bottlenecks per **1G.4.1** |
| **F1 Fulfillment success** | High fulfilled share; low aged backlog | Exception/stuck backlog grows; success falls | Contain affected lanes, escalate fulfillment ops, run partner/integration checks via **1H.2** |
| **F2 Fulfillment delays / backlog** | Aged backlog low and shrinking | Aged backlog grows or exception count spikes | Triage stuck orders, run partner status checks, clear aged queue with audited reassignment |
| **P1 Payment success rate** | Captured share high and stable | Captured share falls; failure rate rises | Run containment + correction in **1G.5/1I**, replay/reconcile async legs (**1H.2/1H.3**) |
| **P2 Failed payments** | Failed-payment count low; no duplicate anomalies | Failed-payment spike or duplicate-charge signals | Containment first (pause retries on affected scope per **1G.5** contain), then correction + patient comms |
| **Fr1 Dropout by stage** | No single step dominates | Concentrated dropout spike at one step | Execute step-specific fix (intake UX, consult ops, payment, fulfillment, continuation) and track next-day reversal |
| **Fr2 Refunds / complaints** | Low and stable relative to volume | Refund/dispute/complaint surge | Classify per **1G.5** category, escalate per ownership matrix, ensure patient communication via approved classes |
| **Fr3 Exception load** | Open and SLA-breached counts low and shrinking | Aged/SLA-breached exceptions grow | Force owner assignment/escalation per **1G.1**, contain harm first per **1G.5**, replay async via **1H.2** |

#### 1H.6.1B Daily review framing (all visible; response speed differs)

- **All ~16 core metrics are reviewed daily** in the same operator dashboard.
- **Response-speed tiers** describe how fast a triggered metric must be acted on; they do **not** remove any metric from daily review:
  - **Sub-4h response (revenue/safety/integrity):** P1, P2, F1, F2, Fr3 — money integrity, delivery integrity, and unresolved operational breakdowns.
  - **Same-day response (growth + retention engine):** G2, Re2, Re3, Fr1, Fr2 — growth signal, retention/cancel signals, dropout concentration, complaint surges.
  - **Daily reviewed + trended (context + capacity):** G1, R1, R2, Re1, O1, O2 — visible daily; act when trend or threshold breaks.
- **No metric is "secondary," "weekly only," or hidden** if it affects operations or revenue.

#### 1H.6.1C Ownership + response cadence (one primary owner per category)

Every category has a primary owner role responsible for daily review and triggered response. Shared execution is fine; ownership is never ownerless or "team only."

| Category | **Primary owner (role)** | **Daily review time** | **Response SLA when triggered** |
|---|---|---|---|
| **Growth** (G1, G2) | Growth / funnel ops lead | Morning Layer 3 standup | Same-day root-cause assignment; **&lt;24h** corrective experiment or flow fix |
| **Revenue** (R1, R2) | Finance / revenue ops lead | Morning Layer 3 standup | Same-day diagnostic; corrective routing through P1/P2/F1 owners as applicable |
| **Retention** (Re1, Re2, Re3) | Member experience / continuation lead | Morning Layer 3 standup | Same-day re-engagement plan; **&lt;24h** for cancel/lapse spikes |
| **Operations** (O1, O2) | Provider ops / clinical ops lead | Morning Layer 3 standup | Same-day capacity rebalance via **1G.4**; SLA-breach escalation per **1G.1** |
| **Fulfillment** (F1, F2) | Fulfillment / pharmacy ops lead | Morning Layer 3 standup | **&lt;4h** to triage/contain stuck lanes; same-day backlog action |
| **Payments** (P1, P2) | Finance / payment ops lead (or `ops_admin` payment owner) | Morning Layer 3 standup | **&lt;4h** to triage/contain; same-day correction plan |
| **Friction / Risk** (Fr1, Fr2, Fr3) | Ops lead (with clinical/compliance escalation per **1G.5**) | Morning Layer 3 standup | **&lt;4h** for exception SLA breaches; same-day for dropout/refund surges |

- **Rules (mandatory):**
  - Every triggered metric has one clear **primary owner** by category.
  - Shared execution is allowed, but ownership is never ownerless or "team only."
  - Response expectations are time-bound and explicit, not "monitor and revisit later."
  - All ~16 metrics are visible daily regardless of response tier.

#### 1H.6.1D Baseline comparison convention (built-in trigger frame, no extra metrics)

Each dashboard metric is rendered with a default comparison frame so triggers are intrinsic to the value, not a separate report. No new metrics are added; this is a display + threshold convention applied to the same aggregate query.

- **Default frame per metric value:** today vs **trailing 7-day average** and vs **trailing 28-day average** (rolling, calendar-aligned where applicable). Same-day-of-week comparison (e.g., Tue-vs-Tue) for weekday-sensitive metrics (G1, G2, R1, O1, F1).
- **Trigger thresholds (org-tunable, set per metric):** percent or absolute deviation from baseline that flips the metric into "bad" per `1H.6.1A`. Example default scaffolding (orgs adjust):
  - **Money/integrity (P1, P2, F1, F2, Fr3):** trigger at **>= ±20% vs 7-day avg** or any absolute SLA breach (e.g., aged exception count > policy).
  - **Growth/retention (G1, G2, Re1, Re2, Re3, Fr1, Fr2):** trigger at **>= ±15% vs 7-day avg** sustained two consecutive days, or single-day **>= ±25%**.
  - **Capacity/throughput (O1, O2, R1, R2):** trigger at **>= ±15% vs same-day-of-week 28-day avg** or SLA breach.
- **Volume guard:** suppress trigger flip when daily denominator is below a minimum count (org policy) to avoid small-N noise; show the value but not the alarm.
- **Source consistency:** baselines are computed from the **same aggregate query** that produces the daily value — no separate "baseline table." Optional cached snapshots in `domain_events` (per `1H.6.3`) may store rolling aggregates; the SoT remains the underlying rows.
- **Privacy:** baseline frames are also aggregate-only and PHI-safe (`1H.6.4`). Segmentation slices (`1H.6.5`) inherit the same baseline convention when introduced later.

**Severity levels (applied to every dashboard metric):**

| Severity | Condition | Operator meaning |
|---|---|---|
| **Normal** | Within expected range vs baseline; no SLA breach | No action required; routine daily review |
| **Watch** | Approaching trigger (~50–80% of threshold) or early adverse trend | Monitor closely; preempt root-cause work; brief in standup |
| **Action-needed** | Trigger threshold crossed (per `1H.6.1A` + class thresholds above) | Owner must act per response SLA in `1H.6.1C`; same-day at minimum |
| **Critical** | Severe deviation (e.g., **>= 2x trigger threshold**) or SLA breach on a critical system, or sustained multi-day breach where applicable | Immediate triage and containment per `1G.5`; escalate to category owner + ops lead; communicate patient impact if any |

**Severity escalation rules (by metric class):**

- **Money / integrity (P1, P2, F1, F2, Fr3):** escalate to **Critical** quickly — single-day **>= 2x trigger**, any duplicate-charge or stuck-fulfillment SLA breach, or unresolved exception SLA breach moves straight to Critical and triggers `1G.5` containment first.
- **Operations / capacity (O1, O2):** **Action-needed** on threshold breach; **Critical** when SLA breach is sustained or backlog growth blocks downstream metrics (e.g., F1/F2 begins degrading).
- **Growth (G1, G2, R1, R2):** rarely **Critical** on a single day; require **sustained multi-day deviation** (e.g., trigger crossed 2+ consecutive days, or single-day deviation >= 2x trigger) before escalating from Action-needed to Critical.
- **Retention (Re1, Re2, Re3):** **Action-needed** on threshold breach; **Critical** on cancel/lapse spikes or refill-miss spikes that materially affect active base, or sustained multi-day breach.
- **Friction / risk dropout + complaints (Fr1, Fr2):** **Action-needed** on threshold breach; **Critical** on concentrated dropout spike at one stage or complaint surge classed as `clinical_safety` / `compliance_sensitive` per `1G.5`.

**Severity rules (mandatory):**

- Severity is computed from the same aggregate query and baseline used for the value (no new SoT).
- Severity drives **prioritization**, not visibility: all metrics remain on the daily dashboard regardless of severity.
- **Volume guard** still applies — small-N denominators cannot escalate severity above **Watch**.
- Critical severity must trigger the **`1G.5` resolution workflow** (detect -> classify -> contain -> communicate -> correct -> document outcome -> prevent recurrence).
- Severity transitions (Normal -> Watch, Watch -> Action-needed, Action-needed -> Critical) are visible in the dashboard's daily view; transitions to Action-needed or Critical assign the category owner per `1H.6.1C` automatically.

*Goal:* every operator looking at the dashboard sees the metric, its baseline frame, and its severity together — so they prioritize response, not just detect deviation.

**Short-term trend indicator (per metric, directional only):**

| Indicator | Meaning |
|---|---|
| **Up** | Metric value is rising over the last **3–5 days** vs the prior comparable window |
| **Flat** | No meaningful directional change over the last 3–5 days |
| **Down** | Metric value is falling over the last 3–5 days vs the prior comparable window |

- **Directional only:** simple slope/comparison from the same aggregate query — no forecasting, no statistical modeling, no trend tables.
- **Purpose:** distinguish a single-day blip from an emerging issue. Operators read severity + trend together (e.g., "Action-needed + Down 5d" => real degradation; "Action-needed + Flat" => likely transient blip warranting verification before deep escalation).
- **Direction polarity is metric-aware:** "Up" on payment failures (P2), failed-payment rate, dropout (Fr1), refunds/complaints (Fr2), and exception load (Fr3) is **bad**; "Up" on conversion (G2), revenue (R1), retention (Re1–Re3), throughput (O1), and fulfillment success (F1) is **good** — the dashboard renders the trend with the appropriate good/bad coloring per metric.
- **No new SoT:** trend uses the same aggregate query and baseline as `1H.6.1D` value/severity; optional cached snapshots in `domain_events` per `1H.6.3`.

**Acknowledgment + cooldown rule (alert hygiene):**

- **Acknowledgment required:** when a metric enters **Action-needed** or **Critical**, the **primary owner per `1H.6.1C`** must explicitly acknowledge in the dashboard. Acknowledgment is logged in `audit_events` (actor, metric, severity at ack time, timestamp, optional reason).
- **Cooldown after ack:** once acknowledged, repeat alert/notification firing for that metric is **suppressed for a configurable window (default 12–24h, org policy)**. The metric still displays its current severity, baseline frame, and trend on the dashboard — only repeat workflow triggers are suppressed.
- **Escalation overrides cooldown:** if severity **escalates further** (Action-needed -> Critical, or Critical deviation widens beyond a configured re-trigger threshold) the cooldown is voided and a new alert + ack cycle begins immediately.
- **Owner change overrides cooldown:** reassignment to a new primary owner during the cooldown window also voids the cooldown so the new owner re-acknowledges.
- **Cooldown expiry:** when the cooldown window ends, if severity remains Action-needed or Critical, the alert re-fires and a fresh acknowledgment is required.
- **Resolution closes cooldown:** when severity drops to Normal or Watch, the alert state clears; subsequent re-entry to Action-needed/Critical starts a fresh cycle.
- **Visibility never suppressed:** the dashboard always shows current value, baseline frame, severity, and trend regardless of acknowledgment state — cooldown affects **alert/workflow noise**, not visibility.
- **Audit + traceability:** acknowledgments, cooldown windows, escalation overrides, and resolution transitions are all recorded in `audit_events` (and as severity-transition pointers in `patient_timeline_events` only when patient-impact incidents are linked).

*Goal:* prevent alert fatigue, keep operators focused on resolution rather than repeated noise, while never hiding the underlying metric state.

#### 1H.6.1E Root-cause classification (required on Action-needed / Critical events)

Every Action-needed or Critical event must carry a **root-cause classification** before it can be closed. Classifications are stored with the resolution workflow in `1G.5` (using the same `audit_events` + `patient_timeline_events` spine — no new tables). This builds a feedback loop so recurring issues become visible patterns over time.

**Starter classification vocabulary (org-extensible, stable codes):**

- `payment_processor_issue`
- `payment_method_issue` (patient-side: card decline, expired, insufficient funds)
- `provider_capacity_constraint`
- `provider_decision_quality`
- `fulfillment_delay_vendor`
- `fulfillment_partner_outage`
- `inventory_or_supply_issue`
- `pricing_or_offer_issue`
- `intake_or_funnel_friction`
- `patient_behavior_dropout`
- `system_bug_or_defect`
- `integration_or_webhook_failure`
- `compliance_or_policy_change`
- `external_demand_shift` (seasonality, market change)
- `unknown_pending_investigation` (temporary; cannot be the final classification at close)

**Rules (mandatory):**

- **Required at close:** an Action-needed or Critical event cannot be closed without a final root-cause classification (one or more codes; at least one primary).
- **Initial classification at acknowledgment:** owner assigns an initial best-guess classification at ack time per `1H.6.1D`; may be `unknown_pending_investigation` while triaging, but must be replaced with a definitive code before close.
- **Stored with `1G.5` workflow:** classification is recorded on the `1G.5` resolution event chain via `audit_events` (actor, event id, severity, classification, timestamp) and surfaced in the dashboard incident view; for patient-impact incidents, a typed `patient_timeline_events` pointer references the classification too.
- **Contributing factors allowed:** events may carry one **primary** classification plus optional **contributing** classifications; the primary is the one used for pattern analysis by default.
- **Reclassification is auditable:** any change to the classification before close writes a new `audit_events` row with prior + new value and reason; no silent edits.
- **No PHI in classification payload:** codes and short structured reasons only; no patient names, free-text chart content, or message bodies.
- **Vocabulary governance:** new codes are added through the same map/repo review path as `Capability` additions — not invented per incident; ad-hoc free text is not a substitute for a code.

**Pattern feedback (read model only, no new SoT):**

- Aggregate over the `1G.5` resolution corpus to surface: top classifications by frequency over rolling windows, by metric category (Growth / Revenue / Retention / Operations / Fulfillment / Payments / Friction-Risk), by severity mix, and by recurrence on the same metric within a configured window.
- Recurring patterns feed `1G.5` row (7) "serious-case closure + recurrence prevention" and inform `1H.2` runbook updates and `1G.4` routing/policy tuning where applicable.
- Pattern outputs follow the same aggregate + PHI-safe constraints as the rest of `1H.6`.

*Goal:* turn every triggered metric event into a learning signal, so the org sees recurring root causes (e.g., "payment_processor_issue" climbing week over week, or "fulfillment_partner_outage" concentrated on one partner) and acts on patterns — not just on individual incidents.

#### 1H.6.1F Resolution status (displayed alongside severity)

Every Action-needed or Critical event carries a **resolution status** in addition to severity, so operators distinguish active fires from contained / monitored issues.

| Status | Meaning |
|---|---|
| **Open** | Active issue; no owner has acknowledged yet |
| **Acknowledged** | Primary owner (per `1H.6.1C`) has engaged; cooldown applies per `1H.6.1D` |
| **Resolved** | Metric back to Normal/Watch or definitive fix applied; root cause classified per `1H.6.1E` |
| **Monitoring** | Fix applied but watching for recurrence; severity may remain Watch or briefly drop to Normal while monitoring window is active |

**Rules (mandatory):**

- **Status displayed with severity:** the dashboard shows `Severity + Status` together (e.g., `Critical / Acknowledged`, `Action-needed / Monitoring`) for every triggered metric.
- **Status transitions are auditable:** every transition (Open -> Acknowledged -> Resolved or -> Monitoring -> Resolved) writes an `audit_events` row with actor, prior + new status, timestamp, and (when patient impact exists) a `patient_timeline_events` pointer.
- **Resolved requires classification:** moving to Resolved requires the root-cause classification from `1H.6.1E` to be finalized (no `unknown_pending_investigation` at close).
- **Monitoring window is bounded:** Monitoring carries an explicit window (org policy, e.g., 24–72h). At expiry, if no recurrence, status auto-transitions to Resolved with a logged audit row; if recurrence triggers Action-needed/Critical again, a new event cycle starts (fresh acknowledgment, cooldown, classification).
- **Visibility never suppressed:** status changes do not hide the metric — value, baseline frame, severity, trend, and status remain visible together on the daily dashboard.

#### 1H.6.1G Stale-critical escalation (prevent silent persistence)

If a metric remains in **Critical** for **>24h without resolution**, it must escalate further so it cannot silently persist after acknowledgment.

**Rules:**

- **Stale-critical state:** a Critical event still in `Open` or `Acknowledged` status after **>24h (org policy, default 24h)** automatically escalates to **`stale-critical`** severity tier on the dashboard.
- **Notify secondary owner / admin layer:** stale-critical voids cooldown (per `1H.6.1D`) and notifies the secondary owner for the category (org-defined per `1H.6.1C`) and, when configured, the **admin layer / leadership oversight per `Section 1G` Oversight model**.
- **Require status update or reclassification:** the primary or secondary owner must record either (a) a status update (e.g., move to Resolved or Monitoring with evidence), or (b) a root-cause **reclassification** (per `1H.6.1E`) within a configured response window after stale-critical fires (default same-day).
- **Escalation chain:** if the required update or reclassification is not recorded within the response window, escalate to the next tier in the org's oversight chain (e.g., admin / leadership per `Section 1G` Oversight) and log the escalation in `audit_events`.
- **Contains harm first:** stale-critical retains the `1G.5` containment expectation — any newly identified patient impact triggers `1G.5` containment + correction immediately.
- **Auditability:** stale-critical transitions, secondary-owner notifications, response updates, and further escalations are all logged in `audit_events`; patient-impact pointers via `patient_timeline_events`.

*Goal:* prevent acknowledged Critical issues from silently sitting open without active resolution.

#### 1H.6.1H Possible-correlation flag (grouped visual signal, no auto-diagnosis)

When **multiple metrics in the same category or lifecycle stage** enter **Action-needed or Critical** within a configured short window (org policy, e.g., 30–120 minutes), the dashboard surfaces a **`possible_correlation`** visual flag grouping the affected metrics.

**Rules:**

- **Same category trigger:** two or more metrics in the same `1H.6.1` category (Growth, Revenue, Retention, Operations, Fulfillment, Payments, Friction/Risk) entering Action-needed/Critical concurrently.
- **Same lifecycle stage trigger:** two or more metrics tied to the same lifecycle stage (intake, decision, fulfillment, continuation per `1H.6.2`) entering Action-needed/Critical concurrently — e.g., F1 + F2 + Fr3 (fulfillment-side) or P1 + P2 + R1 (payment-side dragging revenue).
- **Visual grouping only:** the flag groups affected metrics in one dashboard panel and links to their per-metric severity/trend/status. **No auto-diagnosis,** **no automated root-cause assignment,** **no automated workflow execution** beyond what the individual metrics already trigger.
- **Operator interpretation:** operators use the grouping as a hint to investigate a likely shared root cause; classification (per `1H.6.1E`) and ownership (per `1H.6.1C`) remain per metric until an operator records a shared root cause.
- **Shared classification (optional, audited):** if an operator confirms a shared root cause, they may record the **same** primary classification on grouped events; this is logged in `audit_events` like any other classification entry.
- **Auto-clear:** the flag clears when fewer than two grouped metrics remain in Action-needed/Critical, or when all grouped metrics are Resolved/Monitoring.
- **No new SoT:** correlation grouping is a read-model derivation over the same severity/status state from `1H.6.1D`–`1H.6.1F`; no separate correlation table.
- **PHI-safe:** grouping uses only metric ids and aggregate signals; no patient-level data.

*Goal:* help operators quickly spot likely shared root causes (e.g., a payments outage dragging payment, revenue, and fulfillment metrics together) without adding modeling complexity or autonomous diagnosis.

#### 1H.6.2 Full lifecycle visibility and measurable dropout points

*Lifecycle chain:* **intake -> decision -> fulfillment -> continuation** must be queryable each day from the same tables above.

| Dropout point to measure | Primary signal source (existing models) | Exists / partial / missing | Target operational metric |
|---|---|---|---|
| **Intake incomplete** | intake started vs intake completed events (`patient_timeline_events`) | Partial (event naming may vary) | % intake started with no completion in N days |
| **No consult booking** | `clinical_visits` (or scheduled encounter fields where used) + intake completion | Partial (depends on product flow) | % completed intake with no consult/synchronous review booking in N days |
| **No-show** | appointment/scheduled encounter status where modeled (e.g. `no_show`) or visit absence proxy | Partial / product-dependent | No-show rate among booked consults |
| **Consult no treatment** | `clinical_visits` completed with no decision/order transition | Partial | % consults with no treatment decision/order within policy window |
| **No continuation** | Stage 6 due signals with no follow-through (`next_checkin_at`, `next_refill_due_at`) | Exists as proxy | % continuation due with no qualifying continuation action |
| **Subscription cancel** | 1I subscription/entitlement states + timeline | Exists where subscription rail is enabled | Daily cancel/lapse rate by active base |
| **Missed refill** | refill due metadata + no refill order/event in window | Exists as proxy | Missed-refill rate within policy window |

#### 1H.6.3 Production model (daily metrics generation)

- **Primary mode:** aggregate SQL queries/views over existing SoT rows (`patient_timeline_events`, lifecycle rows, 1I states, `outbound_jobs`).
- **Optional mode:** one daily aggregated summary event in `domain_events` (e.g. `daily_metrics_snapshot`) with totals only; this is a cache/projection, not SoT.
- **No duplicate SoT tables:** metric summaries must remain derivable from base rows and definitions in this section.
- **Operational cadence:** run daily close + intra-day refresh for “where to act now” metrics (exceptions, fulfillment backlog, payment failures).

#### 1H.6.4 Output discipline (privacy + usability)

- **Aggregated outputs only:** no patient-level rows in Layer 3 daily scoreboards.
- **No PHI exposure:** no names, contact details, free text, or chart content in metric outputs.
- **Actionability first:** each metric has owner, threshold, and defined intervention path through 1G/1G.1/1H.2.

#### 1H.6.5 Future-safe segmentation (not implemented now)

Metrics must remain derivable with additive segmentation later, without changing SoT tables. Supported segmentation axes include (org-defined, additive):

- **Demographics:** gender, age band (where lawful, aggregated only).
- **Product / catalog:** product, SKU, treatment line, Rx vs lab vs direct/retail, compositional checkout slice.
- **Care surface:** program, care line, treatment item.
- **Provider / org:** provider, provider pool, staff role, queue.
- **Geography:** jurisdiction-of-care, state, region.
- **Customer lifecycle:** new vs returning, intake cohort (day/week/month), continuation tier.
- **Acquisition:** source/campaign per **1H.4** (aggregated only, subject to **1H.4.1/1H.4.2** constraints when surfaced to growth users).

Segmentation must respect the same aggregate + PHI-safe constraints as the core dashboard. **Do not implement segmentation now;** keep metric definitions stable so additive group-by can be layered later.

#### 1H.6.6 Non-optional before scale (Layer 3 minimum)

- Full daily operator dashboard with all ~16 core metrics (growth, revenue, retention, operations, fulfillment, payments, friction/risk) reviewed daily.
- Lifecycle dropout points (**1H.6.2**) are explicitly measured and reviewed daily.
- Every metric has a primary owner by category and a defined response SLA when triggered.
- All metric definitions map to concrete tables/states/events named in this file.
- Outputs are aggregated and PHI-safe; no patient-level rows in the dashboard.
- Triggered metrics route through existing ownership/escalation paths (**1G**, **1G.1**, **1G.5**, **1H.2**) — no new analytics or ticketing system.

### 1H.7 Internal reporting layer (flexible queries on top of metrics; no separate BI tool)

*Pressure-test:* Operators need to answer ad-hoc "show me X filtered by Y" questions (e.g., "fulfillment success last 30 days by state" or "conversion by program for new vs returning patients") without spawning a parallel analytics product, duplicating data, or exposing PHI. **`1H.7` defines the internal reporting layer that sits directly on top of the existing `1H.6` metrics and `1H` source-of-truth rows** — same definitions, same tables, no new modeling.

*Reject:*

- A separate BI/analytics product, warehouse-only definitions, or a parallel "reporting DB" with its own metric logic.
- Re-defining a metric in a report differently than in `1H.6` (split SoT for the same name).
- Patient-level row exports, free-text PHI in reports, or service-role / `super_admin` shortcuts to read raw clinical data.
- AI / LLM-driven reporting that bypasses **1H.4.2** output constraints when the consumer is growth/marketing.

#### 1H.7.1 Reporting capabilities (filter + group + aggregate)

Each report is a **bounded** query over the same `1H` aggregate definitions, with three composable axes:

- **Filtering:**
  - **Time:** date range, rolling window (per `1H.6.1D` baseline frames).
  - **Dimension:** any safe dimension from `1H.7.2`.
  - **Severity / status (when querying triggered events):** `1H.6.1D` severity, `1H.6.1F` status, `1H.6.1E` root-cause classification.
- **Grouping (group-by):**
  - One or more safe dimensions from `1H.7.2` (e.g., by provider, by program, by state, by intake cohort).
  - **Small-cell suppression:** any group bucket below an org-policy threshold (default **k ≥ 20**, raised at scale; aligns with **1H.4.1** suppression principles) is suppressed in the output rather than rendered, including combinations that would imply a suppressed value via subtraction.
- **Aggregation (single canonical set):**
  - Counts, distinct counts, rates/percentages, sums (e.g., revenue), averages (e.g., AOV), medians/p50/p90 latencies (per `1H` lifecycle metrics), and rolling baselines (per `1H.6.1D`).
  - **One definition per aggregate:** every aggregate uses the canonical `1H.6.1` / `1H` query definition; reports cannot redefine "conversion," "fulfillment success," "active subscriptions," etc.

#### 1H.7.2 Safe reporting dimensions (additive, all aggregate-safe)

Reports may filter and group by the following dimensions, all derived from existing rows/metadata. These are the **same** dimensions named as additive segmentation in `1H.6.5` — `1H.7` makes them queryable on demand.

| Dimension | Source (existing rows) | Notes |
|---|---|---|
| **Date / window** | `created_at`, `occurred_at`, status timestamps, baseline frames per `1H.6.1D` | Required on most reports |
| **Product / treatment line** | `treatment_items` + product/SKU metadata; 1E lines | Includes Rx vs lab vs direct/retail split |
| **Program / care line** | `care_program` + program metadata | |
| **Provider** | `responsible_user_id` (when set) on `care_program` / `treatment_item` scope; `clinical_visits` prescriber id — surfaced **only** as a controlled provider dimension (e.g., `provider_key`, `provider_slug`, or `display_name`); raw `staff_user_id` never exposed in reporting outputs | Provider-level analysis is **explicitly supported and required**; provider pool/role per **1D / 1D.1**; capability-gated; see clarification block below |
| **Geography** | Patient jurisdiction-of-care field (per Intent), state/region from existing address sources | Same single declared field per Intent — no mixed heuristics |
| **New vs returning** | First paid order vs subsequent on the same `patient_id` (existing order/payment rows) | Single rule applied consistently across reports |
| **Intake cohort** | Patient-level first completed intake date / first `care_program.created_at` | Day / week / month buckets |
| **Subscription status** | 1I subscription/entitlement state | Active / past_due / paused / cancelled per **1I.1** |
| **Fulfillment source / partner** | Partner refs in `treatment_orders.metadata` (per **1H.1** standardized payload keys) | |
| **Dropout stage** | `1H.6.2` lifecycle steps (intake / consult / no-show / consult-no-treatment / no-continuation / cancel / missed-refill) | |
| **Acquisition source / campaign** | `patients.metadata` / `care_program.metadata` per **1H.4**; honors **1H.4.1 / 1H.4.2** output constraints when surfaced to growth users | |
| **Severity / status / root-cause classification** | `1H.6.1D` / `1H.6.1F` / `1H.6.1E` event metadata | Used for incident-trend reports |
| **Payment rail / outcome** | `metadata.payment_rail.<provider>` (per **1I.5**) and **1I.1** outcome codes | Aggregate financial slices only |

**Forbidden as reporting dimensions or fields:**

- `patient_id`, raw `staff_user_id`, account ids, vendor click-ids tied to a person, names, contact details, free-text fields (`messages`, `clinical_visits`, `patient_diagnostic_reports`, `patient_lab_observations`, addresses).
- Any combination known to enable re-identification (per **1H.4.1** non-reversibility rules).
- Any internal identifier surfaced beyond the controlled dimensions defined in this section (e.g., raw FK ids, vendor account ids, infrastructure ids).

**Provider dimension clarification:**

- Provider-level analysis (filter and group-by) is **explicitly supported and required** for operations and quality work (e.g., throughput, decision latency, SLA, denial mix by provider).
- Reports use a **controlled provider dimension** — `provider_key` / `provider_slug` / `display_name` (org-defined; pick one stable form) — derived server-side from `staff_profiles` (or equivalent) at query time.
- The dimension must be **stable** across reports (same provider always renders the same key/slug), **non-sensitive** (no PII beyond display name), and **capability-gated**: only roles with the appropriate `1D / 1D.1` capability (e.g., `can_view_internal_reports` for ops/clinical leadership; oversight per `Section 1G` Oversight model) may filter or group by provider.
- **Raw `staff_user_id` is never exposed in report rows or exports**, even for capability-holders; provider lookups happen server-side and only the controlled dimension leaves the trust boundary.
- Small-cell suppression still applies: any provider bucket below the org-policy threshold is suppressed in the same way as any other dimension.
- Capability scope: provider-dimension access does **not** grant access to clinical chart, messages, or PHI — those remain gated by their existing capabilities (per `1J`, `1J.10`, `1H.5.1`).

#### 1H.7.3 Output model (simple, internal, no separate stack)

- **Internal query layer:** server-rendered routes / saved queries / database **views** under `app/internal/(protected)/reports/**` (slug per product) that wrap the canonical `1H.6` aggregate definitions and accept the **filter / group / aggregate** axes above.
- **Simple tables:** the default output is a tabular result (rows of group keys + aggregate columns); no custom dashboard UI required for `1H.7` to be usable.
- **Optional CSV export:** reports may export aggregate results to CSV; export uses the **same** server-side aggregator + suppressor (no "export raw" alternate path; same principle as **1H.4.1**).
- **Optional warehouse / replica:** if a read-only warehouse view is preferred (per Intent's optional copy pipeline), it must implement the **same** definitions and suppression rules; otherwise it is **not** an approved `1H.7` surface.
- **No new SoT:** every report is a query over `1H.6` definitions and existing rows; optional cached aggregates via `domain_events` snapshots per `1H.6.3` are projections, not SoT.

#### 1H.7.4 Access, privacy, and integrity rules (mandatory)

- **Capability-gated access:** reports are gated by `requireCapability` per **1D / 1D.1**. Suggested capabilities (added when the surface ships; no new auth product):
  - **`can_view_internal_reports`** — read aggregate reports across categories the role is otherwise authorized for.
  - **`can_export_internal_reports`** — produce CSV/aggregate exports; logs `SensitiveAccessReason` when slices are broad.
  - Growth/marketing users keep the **`1H.4.1`** path with **`can_view_growth_aggregates`** and inherit **1H.4.2** AI/output constraints; they do not get `can_view_internal_reports` for clinical / chart slices by default.
  - Compliance/audit-class queries continue to use **`1H.5.1`** capabilities (e.g., `can_view_audit_log`, `can_export_patient_journey`).
- **No PHI exposure:**
  - Aggregate-only outputs (counts, sums, rates, percentiles, distributions). **No** `patient_id`-keyed rows, **no** free-text fields, **no** chart/message content.
  - Small-cell suppression applied **server-side** before the response leaves the trust boundary; no client toggle, no debug bypass.
- **No separate data models:** `1H.7` may not introduce KPI-only base tables, parallel "reporting" rows, or duplicate metric definitions. Caching in `domain_events` snapshots (per `1H.6.3`) is allowed but recomputable.
- **No metric redefinition:** a report's "conversion" / "fulfillment success" / "active subscriptions" / etc. is **the** canonical definition from `1H.6.1`; a report that needs a different cut must do so via filter/group, not by inventing a new metric.
- **Reuse existing system logic:** filter/group/aggregate execution uses the same server query path as `1H.6` (and the same baseline/severity logic from `1H.6.1D` when querying triggered events) — no parallel runtime.
- **Auditability:** report execution and exports write `audit_events` (actor, capability used, filter/group spec, timestamp, optional reason); broad/sensitive slices require `SensitiveAccessReason` per Intent.

#### 1H.7.5 Integrity guarantees (no conflicting definitions across reports)

- **Single source for definitions:** any report that names a `1H.6` metric must point at the canonical definition; the dashboard, exported CSV, and any saved query all return the same number for the same filter set.
- **Same baseline + severity for triggered-event reports:** incident-trend reports reuse `1H.6.1D` baseline frames and `1H.6.1E–H` event metadata (severity, status, classification, correlation flag) — no parallel incident model.
- **No drift via cached snapshots:** if `domain_events` daily snapshots are used, they must be recomputable from base rows; mismatches between snapshot and base aggregate are an integrity bug, not a "report version."
- **Versioning:** when a metric definition changes (rare; through map review), the change applies uniformly to dashboard + reports; no per-report definition forks.

#### 1H.7.6 Non-optional before scale (reporting minimum)

- Reports run only on `1H.6` canonical definitions and existing rows; no parallel SoT.
- Filter / group / aggregate axes restricted to the safe dimension set in `1H.7.2`.
- All outputs aggregate and PHI-safe with server-side small-cell suppression.
- Capability-gated access (`can_view_internal_reports`, `can_export_internal_reports`) with `audit_events` logging on every execution and export.
- One canonical definition per metric across dashboard + reports + optional warehouse view.
- Growth/marketing reports continue to flow through `1H.4.1` and inherit `1H.4.2` AI/output constraints — no separate growth bypass.

#### 1H.7.6a Built-in continuity-health report slice (CoR signals)

A standard report slice over `1G.9` data so admins can monitor whether continuity is breaking. Same canonical query path; no new SoT.

- **Required signals (default report; group-able by program / jurisdiction / time window):**
  - **CoR transfer rate** — count of `clinician_of_record_changed` events per `care_program` per window, normalized by active program count (per-program/jurisdiction).
  - **% SLA-driven transfers** — share of CoR transitions where primary `1G.9.13` reason code is `sla_fallback_reassignment` (or `cor_transfer_trigger = sla_breach`); paired with prior `queue.item.sla_breached` / `lab.review.reassigned_due_to_sla` for cross-check.
  - **Top 3 reason codes by volume** — primary reason code distribution from `1G.9.13`, ranked over the window.
  - **Median time from assign → transfer** — median elapsed time from `clinician_of_record_assigned_at` (or assignment `audit_events`) to next `clinician_of_record_changed` event for transitions in the window.
- **Sources (no new SoT):** `audit_events` (CoR transitions), `patient_timeline_events` (`clinician_of_record_changed`, `queue.item.sla_breached`, lab events), `care_program.metadata` (per `1G.9.9` fields), `1G.7.6` queue lifecycle.
- **Default groupings:** program / care line, jurisdiction, primary reason code, controlled provider dimension (per `1H.7.2`), time window. Same suppression rules as `1H.7.1` apply.
- **Severity + trend (reuse `1H.6.1D`):** the four signals can render with baseline + severity + Up/Flat/Down trend; spikes in CoR transfer rate or % SLA-driven transfers move into Action-needed/Critical and route through `1H.6.1F` status + `1G.5` exception workflow when sustained.
- **Capability:** rendered through `can_view_internal_reports` (and `can_view_continuity_state` per `1G.9.7` for continuity-context drilldown); aggregate-only, no PHI.
- **Pattern feedback:** spikes feed `1H.6.1E` root-cause classification (typically `provider_capacity_constraint` or `provider_decision_quality`) and surface in `1G.6.2` admin overlay with severity per `1H.6.1D`.

*Operator read:* if CoR transfer rate or % SLA-driven transfers spikes — especially with `sla_fallback_reassignment` or `provider_unavailable` dominating the top-3 reason codes — continuity is breaking and the system should escalate per `1G.5` and review provider capacity / availability per `1G.7`.

#### 1H.7.6b Trackable-derived metrics (read from `Section 1M`, not timeline scans)

Aggregate signals derived from longitudinal patient-state trackables — median weight delta by pathway, % of patients reporting side effects per cohort, symptom-score trajectories, dose-tolerance distributions, home-BP out-of-range rates — query `patient_state_observations` per `Section 1M` directly via safe dimensions per `1H.7.2` (aggregate-only, small-cell suppression per `1H.4.1`, capability-gated per `1H.7.4`). **Hard rule:** trackable-derived metrics never scan `patient_timeline_events` payload text for values; the timeline carries narrative pointers only per the Layer 1 data architecture rule. Vendor-issued lab signals continue to query `patient_lab_observations` per `Section 1L`; patient-reported counterparts query `patient_state_observations` and may be displayed alongside via `field_name` join.

#### 1H.7.7 Cross-links

**1H.6** (metrics + dashboard), **1H.6.1B–H** (severity / status / classification / correlation), **1H.4 / 1H.4.1 / 1H.4.2** (growth surface and hard output constraints), **1H.5 / 1H.5.1** (audit-class queries and capabilities), **1D / 1D.1** (capability + reason discipline), **1I / 1I.1** (financial outcomes), **1G / 1G.1 / 1G.4 / 1G.5 / 1G.9** (ownership, SLA, routing, exception classifications, clinician continuity used in reports), **Section 1L** (lab observations source), **Section 1M** (patient-state observations source for trackable-derived metrics), **Intent** (RLS, service-role discipline, audit, optional warehouse path; **Layer 1 data architecture discipline** — domain tables are SoT, timeline is narrative-only).

---

## Section 1I: Financial lifecycle — internal money state, payment rails, and provider mappings

*Layer 1 + 2; architecture only; no UI. Clinical order graph (e.g. `treatment_order_status`) is defined in [migrations](../../supabase/migrations/20260428100000_orders_lifecycle_v1.sql). Roadmap: 1I.0–1I.1 invariants and vocabulary; 1I.2–1I.3 order/clinical truth and missing rail capabilities; 1I.4–1I.6 matrix, adapters, reconciliation; 1I.7 outcomes and staff; 1I.8 Stripe (v1) mapping only; **1I.9** **multi-rail** **recon** **(pressure** **test) **— **rail-agnostic,** not **a** **separate** **accounting** **product.**

### 1I.0 Invariants: authority (payment-rail agnostic)

- **External payment rail** (PSP API, on-chain, bank, or manual/ops process) is authoritative for movement and settlement of funds on that rail: amount, currency, direction, and finality as that system defines them.
- **This application** (DB + domain) is authoritative for clinical meaning (e.g. approval, visits, protocol); order meaning and lifecycle (`treatment_orders`, 1E / `supplement_fulfillment_orders`, `commerce_orders` as applicable); entitlement to ship, refill, or continue care; Section 1G gating and permit; dispute tiers and org policy stored as internal state — not as a vendor type name in routing or RLS.
- **Reconciliation** bridges the two: internal rows and 1I.1 codes are a first-class projection and must converge via idempotent inbound signals and audited correction (1I.5–1I.6). 1J.1 “payment identity” means billing/instrument metadata from any adapter, not a single vendor only (Intent).

### 1I.1 Contract vocabulary (invariant layer)

*Stable names in `patient_timeline_events` and audit, not raw vendor strings. Version the exact enum in code. Example set: `authorized`, `captured`, `voided`, `payment_failed`, `refund_full`, `refund_partial`, `dispute_open` (only if the rail+adapter exposes a claim/chargeback/dispute class), `dispute_lost`, `write_off`, `invoice_paid`.*

| Term | Rail-agnostic meaning |
|------|------------------------|
| **Authorization / capture** | Card-style two-step: hold then capture. One-step, invoice, or manual rail: “paid” maps to `captured` or `invoice_paid` per org rules. Not clinical entitlement by itself. |
| **Payment failure** | Decline, timeout, off-session rejection, ACH return, insufficient on-chain confirmations, etc. Drives `payment_failed` and order/funding substate. Does not by itself cancel `clinical_visits` or end a `care_program` (1I.2). |
| **Refund / credit / reversal** | Reversal on the rail or internal support credit; maps to `refund_*` or `write_off` with audit. |
| **Dispute or claim (if any)** | Chargeback-class, processor dispute, or on-chain challenge; or absent (1I.2–1I.3). If absent, `dispute_open` is not emitted. |
| **Settlement / finality** | On-chain: confirmations; off-chain: pending vs settled. Gating must not treat pending as captured for fulfillment unless 1E, 1G, and 1I.0 explicitly allow it. |
| **Reconciliation ids** | Opaque ids per charge, invoice, or tx in `metadata.payment_rail.<provider>` or manual receipt; idempotency key `(provider, event_id)` or content hash. |

### 1I.2 Order, clinical meaning, and internal truth

- Orders hold lifecycle and monetary totals on the owning row; entitlement derives from this and 1G, not from a PSP object name.
- *Separation.* `clinical_visits` and approval are not replaced by a payment callback; gating = internal permit + order + 1I.1 codes.
- *Cancellations / refunds.* Pre-fulfillment, full money exit: `treatment_orders` status `cancelled` + refund refs in `metadata`. Post-`fulfilled` full reversal only: status `refunded`. Partial refund: no order enum change + `metadata.refill_adjustment_cents` + staff queue. Do not use `exception` as a refund router.
- *Off-session, post-approval payment failure (async DTC).* If capture is retried after approval and the rail signals `payment_failed`, one deterministic path: internal flags, patient/ops timeline, retry or ops/contract change — no silent treatment or fulfillment unlock without 1G and audit; explicit exception handling if product allows.
- *Recurring / subscription / funding.* Row may be `past_due`, `failed`, or `paused` per 1I.1. *Invariant:* a billing or subscription state change does not, by itself, end or void a `care_program`; program continuity is internal and 1G, not a single funding webhook.
- *Disputes* (when the rail signals): `dispute_count`, tier gating, pause recurring on the funded link; see 1I.3 if the rail has no dispute object.

### 1I.3 When a rail omits a capability

| Missing on rail | Architecture behavior |
|-----------------|------------------------|
| No disputes | No `dispute_open` from adapter; loss or fraud may use `write_off`, ops flags, or another rail; tier gating inert or manual only. |
| No refund (non-reversible) | No `refund_*` from rail; use support credit, manual payout, or `write_off` with audit (same as crypto/invoice in matrix). |
| No recurring billing | No “pause subscription” API; invoice or job-based renewal; 1I.2 `care_program` rule unchanged. |
| No void | Some reversals N/A; use `payment_failed` pre-settlement, or post-settlement internal adjustment — do not assume all rails void the same way. |

### 1I.4 Payment-rail capability matrix

| Rail / modality | Contract when this rail is enabled | Notes |
|-----------------|--------------------------------------|--------|
| **Card (network)** | If two-step: authorize, capture, void; refund full+partial; dispute or chargeback signal if exposed; settlement/status via callback or poll; idempotent inbound | v1 DTC default for many orgs. |
| **ACH** | Initiate; pending → settled/returned; return/recall; refund if regime allows; idempotent inbound | Pending must not imply 1I.1 `captured` for entitlement without internal rules. |
| **Manual / invoice** | Record expected amount; mark paid or written off with actor + reasonCode; no auto-fulfillment without match to internal invoice id | SoT = documented evidence or bank confirmation. |
| **Crypto** | Address/intent, confirmations, finality, refund path or N/A, idempotent inbound | 1I.3 if chain-irreversible. |

*Rule.* Each enabled rail has a full row; a modality may be N/A per org — no half-mapped production adapters.

### 1I.5 Adapters (not the product ontology)

- v1 may use one primary PSP: code, secrets, and `metadata.payment_rail.<provider>`, not 1I.0–1I.1 enums.
- Verify inbound; map vendor events ↔ 1I.1; persist reconciliation ids; document how 1I.3 gaps are covered.
- *Guardrail (Intent).* No route or RLS guard that assumes a Stripe class name is the only check.

### 1I.6 Reconciliation and idempotency (invariant)

- *Ledger of record* per transaction or invoice: external PSP, chain, bank, or signed manual record; the app DB is a projection that converges (scheduled or event-driven). No hand-patching internal amounts to match a dashboard without a 1I.1-level event, documented `write_off`, and audit (Intent).
- Inbound idempotency: `(provider, event_id)` or hash. Stripe-only at-most-once rules (e.g. per `event.id`) live in 1I.8.
- Exactly-once side effects where the stack allows: `outbound_jobs` with dedupe; `patient_timeline_events` and `audit_events` in the same transaction as the state change.

*Map tie-in: **1H.3** (recon **checks,** drift, idempotent **retry) **extends** this **1I.6** **—** no **saga** **/ **reconciliation** **product. **

*Multi-rail mismatch classes, **periodic** comparators, and **finance-** **facing** **slices** (without a separate accounting product): see **1I.9.**

### 1I.7 Refunds, disputes, subscription billing, write-off, staff

- Refund and status rules as 1I.2; provider refs in `metadata`; line splits by internal id; mixed cart by internal line + session manifest, not vendor line types in this map.
- Disputes (when present): tiers, `dispute_count`, gating, pause recurring on the funding link; see 1I.2–1I.3.
- Write-off: capabilities, `reasonCode`, timeline, audit; does not auto-restore refill; no PSP object for internal bad debt on manual rail.
- Off-session / post-approval failure: 1I.2.
- Staff queue: 1G Exception, stages 4–5; finance/compliance; not prescriber by default.

#### 1I.8 Stripe mapping (v1 only)

*Replace by a new primary PSP or parallel adapter, not by rewriting 1I.0 or 1I.1. Stripe- and product-integration–specific; all other 1I subsections are rail-agnostic.*

- *Object → 1I.1.* `PaymentIntent` (status, amount) → authorization, capture, `payment_failed` as emitted; `Charge` / `latest_charge` context → capture context; `Refund` → `refund_full` / `refund_partial`; `Dispute` on the charge path → `dispute_open` / `dispute_lost` and internal `dispute_count` / tier updates; `Invoice` (if used) → `invoice_paid`, same 1I.1 contract as other rails.
- *Event / idempotency.* Inbound `event.id` (and Connect if used) as `(provider, event_id)` for 1I.6; signed webhooks; at most once per `event_id`; replay/ordering between API and webhook = integration detail.
- *v1 SoT for card.* Stripe object graph in dashboard and API, webhooks, and reconciliation jobs; 1I.0 still separates settled funds in Stripe from clinical order meaning in the app.

### 1I.9 Multi-rail financial reconciliation: pressure test (map-level; not a new finance product)

*Stripe is a plausible first build (1I.8), but the **invariants** below must hold for **any** current or future **PSP,** bank rail, or manual-off-line settlement. No separate accounting system: reuse 1I.0–1I.6, `metadata.payment_rail.<provider>` (1I.5), inbound de-dupe `(provider, event_id)` or hash (1I.6), `outbound_jobs`, 1H.1 correlation, **1G.1** (patient-facing money/entitlement), **1H.2** (jobs / replay / vendor), **1H.3** (drift, periodic recon as *process* — not a recon engine). If the codebase does not have a `vendor_partners` table, treat the **adapter + `metadata.payment_rail` + 1I.1** as the extensibility seam (same as 1I.5).*

| **Dimension** | **Exists (typical)** | **Partial** | **Target (architectural)** | **Non-optional at high scale** |
|--------|-------------|------------|----------------------|---------------------------|
| **(1) Recon loops (rail-agnostic)** | Webhooks + projection into app rows; PSP UI for ad hoc checks | Cron/poll/backfill on some paths; 1H.1 stuck-funding style queries; one PSP documented | **Per** active `payment_rail` **:** **periodic** compare of internal (orders, 1I.1, metadata recon ids) **vs** adapter-fetched external truth (API, export) — not webhooks alone | **At least one** scheduled recon *or* 1H.2–owned runbook with the same query set, per **mismatch class,** per **rail,** on a defined cadence (1H.3) |
| **(2) Mismatch detection** | 1I.6 de-dupe reduces double-apply; occasional manual triage | Rules for one primary PSP (e.g. 1I.8) | **Classes (a)–(f)**, all named in **1I.1 / row state,** not vendor object names: (a) external success, no internal projection; (b) internal paid, no durable external proof; (c) duplicate or idempotency gap; (d) amount/currency skew; (e) refund on rail out of step with internal / 1I.1; (f) dispute / chargeback / reversal | (a)–(f) **at least** surfaced (queue/alert/flag) — not silent; automation preferred |
| **(3) Source of truth** | 1I.6 stated: external ledger vs projection | 1E vs 1I.2 per order type | **Settled** funds & capture: **external** (PSP/chain/signed off-line per 1I.6). **In-flight** auth/capture: **rail** state leads until 1I.1 apply. **Clinical/entitlement** after internal projection **converges** (or hold) | Routing never depends on a vendor class name — only 1I.1, metadata, **capabilities** (1D.1) |
| **(4) Correction** | Ad hoc + **audit;** 1G Exception for staff | `outbound_jobs` retry; 1H.2 replay | **1G.1** owns patient-visible; **1H.2** owns infra/queue; **1D.1** gates dangerous fixes. **Paths:** re-fetch on rail **→** idempotent 1I.1 update; or refund/void on rail; or documented write-off (1I.7) — with `patient_timeline_events`, `audit_events`, 1H.1 id links | No **silent** SQL patch; every material correction is auditable |
| **(5) Finance visibility** | PSP dashboard as the easy default | Sums from app by day, rough check vs PSP | **Internal** read: captured, refunded, in flight, sliced by `metadata.payment_rail` and 1I.1; **expected** **vs** **received,** gap = mismatch or in-flight | Same-day and rolling answers: total **captured** (all **rails) **+ **unreconciled** gap (count/amount) from **owned** app data, not only a vendor UI |
| **(6) Drift (subs, orders, refunds)** | Eventual **consistency** via **webhooks** | One-off **queries** | **Time-window: ** subscription/invoice/renewal rows **vs** 1I.1; orders **vs** captures; refunds **vs** rail | Catches **cumulative** **drift** from missed or reordered **async;** not a **single** event **drop** |
| **(7) Guardrails** | 1I.6 + **parts of** 1H.1 / 1H.3 | — | Full 1H.1 trace, 1I.6 idempotency, 1G+1H.2 ownership | **(i) **periodic** rail-agnostic** recon, **(ii) **mismatch** queue, **(iii) **1G.1+1H.2+**runbook,** **(iv) **correction** audit, **(v) **forbid** silent** internal**/** **external** divergence** |

*Pressure-test (concise).*

- **(1) Loops.** Reconciliation is **not** only implied by a single vendor’s dashboard and webhooks. **1H.3** and **1I.9** name **per-rail** **periodic** **compare: ** each **1I.5** **adapter** **fetches** settlement, refunds, and disputes in a **vendor-****neutral** shape, **then** **compares** to **internal. **1I.8** is **one** **adapter; **1I.1** and **1I.4** **are **the **contract. **Webhooks,** **1H.2** **backfill, **and **polls** **are **supplements; **the **periodic** **recon** is **the **safety** **net. **

- **(2) Mismatch.** **Classes (a)–(f) **in **the **table** **, **any **rail **(adapter** **implements** **how** **to **compare) **. **(provider,** **event_id) **(1I.6) **mitigates** duplicate** **inbound; **gaps** **(missed** **webhook) **need** **recon+ **poll. **

- **(3) SoT.** Unchanged from **1I.6 **(external** **ledger;** **app **= **projection) **and** **(3) **in **the **table. **Does** **not** **depend** **on** a **Stripe-** like **product **vs **any **other **. **

- **(4) **Correction.** **1G.1** **(patient) **+ **1H.2** **(jobs,** **replay) **+ **1D.1,** **1I.7, **1H.3; **re-sync** **or **outbound** **on **the **rail **(adapter) **+ **1I.1 **events. **

- **(5) **Finance.** **Build **(5) **in **the **table, **1H/1I **slices, **1H.1, **not **PSP-** **UI-** only. **

- **(6) **Drift.** **(6) **in **the **table; **repeat** **per **`metadata.payment_rail` **scope. **

*Repo* **(illustrative, v1):** [`app/api/webhooks/stripe/route.ts`](../../app/api/webhooks/stripe/route.ts) *+ 1I-related migrations. Another* **PSP** *reuses* `(provider,` *idempotency,* *1I.5* *adapter,* *1I.1* *vocabulary) —* **not** a **separate** **recon** *design. *

## Section 1J: Patient identity, duplicates, merge, shared contact, and authority (high-liability)

*Layer 1 + 2. **No** UI, **no** line-by-line implementation in this map. SoT: `patients`, `patient_identity_verifications`, intake and ingested documents on `patient_id`. 1J.1–1J.9 = policy; 1J.10–1J.11 = gaps, **`loadPatientCaseSafetySnapshot` (target)**, runtime failure modes, pressure tests, abuse, minimal tighteners. Capabilities: `requireCapability` + `audit_events` (1E, Intent).*

### 1J.1 Precedence (trust rank — high → low)

Use **this** order when two sources assert different **core identity** (legal name, DOB, government id match). **Tie-break:** the **higher** row in the list **wins** for **authoritative** fields on `patients` (subject to **locks** in **1J.3**).

1. **Government-ID verification** — `patient_identity_verifications` (or vendor payload) with **pass** on **document** **authenticity** + **extracted** **PII** that **matches** **target** (MRZ, barcode, or vendor-equivalent) **as** **implemented**.
2. **Biometric + selfie liveness** **tied to (1)** — e.g. face **match** **to** **document** **or** **re-enrollment** **in** the **same** **session** **as** a **passing** (1) **or** **renewal** **per** **policy**; **not** standalone selfie without (1) unless org policy **explicitly** **elevates** a **vetted** **vendor** **Tier**.
3. **Payment** **identity** (billing name/address + **card** or **other** **instrument** **fingerprint** **/ risk** **signals** **from** **the** **active** **PSP** **adapter** **or** **manual** **on-file** **record) — **strong** for **fraud** **churn**; **weaker** than (1)–(2) for **legal** **name/DOB**; **use** to **reconcile** **suspected** **dupes** **and** for **1I** **money** **eligibility** **per** product.
4. **Email** and **phone** (OTP, link proof, carrier match if available) — **possession**; **proves** **access** to **channel** **not** **unique** **human** (see **1J.8**).
5. **Intake** self-reported **and** unverified **fields** on **first** **submit** — **lowest**; **seeds** **profile** only until **(3)**+ **or** **(1)**+ **(2)** **lifts** **confidence**.

**External** **documents** (uploaded **ID** **image**, **lab** **requisition** **label**, **referral**): **ingest** as **`patient_document`** or **equivalent** **row**; **OCR/HL7** text is **(a)** **display**+**triage** **or** **(b)** **promotion** to **`patients`** / **`patient_identity_verifications`** only **through** the **precedence** **above** (never **silent** **overwrite** of **locked** **fields** from raw OCR).

### 1J.2 Conflicts (override + history)

- **Override:** When **same** **scope** (one `patients` row) **competes**, **apply** **1J.1**. **Name/DOB** on `patients` = **highest** **verifier** that **has** **passed** **at** that **class**. **Intake** **re-submit** with **weaker** data **loses** to **verified** **reality** — **not** the reverse.
- **History:** **Never** **delete** **the** **prior** **value** in **a** way that **hides** **defensibility** — keep **`patient_timeline_events`** (e.g. `identity.field_superseded`) and/or **`patient_identity_verifications` history** (status transitions) + **audit** **on** **staff** **correction**. **Intake** **snapshots** stay **as** **submitted** (immutable per submission id).

### 1J.3 Immutable vs mutable (defaults)

- **After** `identity_confidence >= verified` (see 1J.4) for **legal** **name** **+** **DOB** from **(1)**: those **core** **fields** are **locked** — **change** only **via** **(a)** new **passing** **(1)** **re-verification** **or** **(b)** **staff**+**`requireCapability`(`can_edit_locked_identity` / compliance)** with **`reasonCode`** + **audit** (see **1J.9**).
- **Mutable** (without breaking lock, unless product **ties** them): **preferred** **name**, **shipping** (when not part of **verified** **jurisdiction** **lock**), **email/phone** (subject to **1J.8** **fraud** **review** on **change** if **shared**), **comm** **prefs**, **intake** **lifestyle** **answers** **not** used as **legal** **ID**. **Jurisdiction of care** — may **strengthen** **lock** when set from **verifier** (Intent **Layer** **2**).
- **Allergies / meds (clinical):** not **identity**; **reconciled** **on** **merge** **only** (§**1J.7**), **separate** from name/DOB.

### 1J.4 Identity confidence (levels) + gating

| Level | Meaning (minimum) | Gating |
|--------|------------------|--------|
| **L0** `unverified` | **Only** **(5)** **+** **maybe** **(4)** **not** **proven** | **Browse** **intake**; **no** **new** `treatment_order` / **no** **checkout** for **Rx** (org may allow **saving** **cart** **only**); **lab** **orders** per **1E** when **not** **clinical** **gated** |
| **L1** `contact_ok` | **(4)** **satisfied** (email+phone or org rule) | **As** L0 for **high-risk** **prescribe**; **low-risk** **otc/retail** per **1E** |
| **L2** `partial` | **(3)**+ **(4)** **+** **doc** **uploaded** but **(1)** **incomplete** | **Escalation** **queue**; **prescribe** **gated** **or** **provider** **override** with **1G** **+** **audit** |
| **L3** `verified` | **(1)** **pass** (gov **ID**); **(2)** if **product** **requires** | **Standard** **DTC** **Rx** **funnel** **(Section** **1G/1I)** **per** **jurisdiction** |
| **L4** `high_confidence` | **(1)+(2)+** no **open** **duplicate** **/** **fraud** **block** (1J.6) | **Controlled** **substances** / **high** **fraud** **product** if **applicable** |

(Exact L–→ **product** **gate** may **tighten**; **this** table is **architectural** **minimum** **bars**.)

### 1J.5 Cross-program identity

- **One** **canonical** **`patients` row** per person; `care_programs` **do** **not** **own** a **separate** **legal** **identity** — at most `care_program` **metadata** for **program-specific** **eligibility** **(weight** class, **cohort)**, not **a** **second** **DOB**.
- **Jurisdiction,** **prescriber,** and **treatment** **line** may **differ** **across** **programs**; **name/DOB** on **`patients`** = **one** **resolved** **tuple** (1J.1).

### 1J.6 Duplicate **detection** (merge **forbidden** in this **subsection**)

**Matching** **tiers** (evaluated **in** order; **stop** at **highest** **fired**):

- **A — Exact** — same **normalized** **email** (case+trim), **or** E.164 **phone**, **or** (where **permitted**) **SSN/ID** **last-4+** **hash** **match** **to** an **existing** `patients` **row**.
- **B — Strong** — (legal **name** + **DOB** **agree**, **or** **fuzzy** **name** with **≤1** **typo** + same **DOB**) **AND** (same **(A)** **channel** **or** **(3)** **fingerprint** on same **org**).
- **C — Weak** — name **similarity** (phonetic+edit distance), same **last-4** **ZIP**, same **IP**+**user-agent**+**24h** **window** — **never** **alone** **drives** an **action**; **increments** **risk** only.

**Risk** **(derived** on the **new** or **suspect** **record):** **R-low** = **A** **or** (B **with** **(A)** on **at least** one **link**). **R-med** = **B** **only**. **R-high** = **C** **+** (B) **+** **conflict** in **(1)-level** **data** (different **DOB** in two **B**-match **candidates), **or** **velocity** / **fraud** **heuristic**.

**System** **behavior:** **Never** **auto-merge** **(hard** **invariant**). **Auto-flag** only: set **`patients.metadata.duplicate_review`** = `{ candidate_patient_id, tier: A|B|C, risk: low|med|high, opened_at }` (or **separate** `duplicate_candidates` **rows** when **added**); emit **`patient_timeline_events`**: `identity.duplicate_suspect`, **`audit_events`**, optional **`org.identity.duplicate_suspect`** (no **PHI** in org event — **ids** only).

**Blocking** (deterministic, **safety** > **convenience**):
- **R-high** (or `duplicate_review.risk=high` **open**): **block** **new** **intake** **completion** (submit **staged** as **hold**), **block** **prescribing** **+** **checkout** **(Rx+)** for **all** **linked** **candidates** until **compliance/ops** **queue** **clears** (capability **1J.9**).
- **R-med:** allow **intake** to **L1** at most; **no** L3+ **or** **prescribe** until **manual** **review**.
- **R-low:** log + nudge; **permit** **L3+** if **(1)** **succeeds** and **no** **stronger** **conflict** **arises**.

*No* **merge** **here** — only **flags** and **holds** (1J.7 is **separate**).

**Events** — as above; **include** `patient_id` **list** in **private** **timeline**; **redacted** in **any** **customer-facing** view.

### 1J.7 Merge (authoritative policy; no in-app unmerge in v1)

- **Who may initiate:** `requireCapability` = **`can_merge_patient_records`** (default: **compliance** + `ops_admin` + `super_admin`; **not** `customer_support` without an add-on; **not** **provider** by default — they may **recommend** via `identity.request_merge_review` in chart, not execute). Keeps **COI** and **licensure** clear.

- **Preconditions (all true):** (1) **L3** on *target* or both candidates **reconciled** in **audit**; (2) no open **R-high** duplicate hold without a **recorded** fraud/identity **outcome**; (3) second **sign-off** in **audit** by `can_merge_patient_records`; (4) no **jurisdiction** / **DEA**-sensitive **conflict** that would **merge** into an **invalid** **single** **jurisdiction** without **explicit** **resolution** — else **block** merge or **re-verify** post-merge.

- **Direction — source vs target:** **Source** = sacrificial `patients.id`; **Target** = kept canonical. **Target selection:** **older** `created_at` + **higher** L from 1J.4, or **explicit** compliance **choice** in **audit** when **tied** — no algorithmic **flip** on a **single** **weak** signal.

- **Repoint (deterministic):** rebind `patient_id` on: `care_programs`, `treatment_orders`, `clinical_visits`, `patient_lab_observations`, `patient_timeline_events`, lab/chart tables as exist, `commerce_orders` (parent), `commerce_subscriptions`, `message` / `message_thread` (per **1G** — merge threads or repoint; **transcript** not dropped). **Primary-PSP / payment-rail** **metadata** **(1I.5):** one **reconciled** **billing** **link** to **target** `patient_id` (or **explicit** **org** **policy** for **leaving** **a** **legacy** **row** read-only) **+** **audit** **(1I.6).**

- **Conflict reconciliation —** **Allergies / medications:** **union** with **human** review for true conflict; default to **highest** **safety** (block + staff). **Identity fields:** **1J.1** on **target**; fill **missing** from **source** if not **locked**; if both **locked** and **differ**, **block** merge or require **new** (1) on merged narrative. **Contact** (1J.8): one **primary** + **secondary** in `metadata` or contact log; not two **active** **auth** **bindings** on one row without **explicit** **rebind**.

- **Clinical safety:** **Forbid** silent **deletion** of `clinical_visits` or `patient_timeline_events` (append-only; at most `superseded_patient_id` on **events**). **Forbid** collapsing **opposing** `treatment_item` **active** **Rx** without **permit** **reconciliation** (1G).

- **Reversibility:** merge is **irreversible** in-product (v1); reversal = **procedural** (legal/support). **Required:** `audit_events` + `patient_timeline_events` `identity.merge_completed` with `{ source_patient_id, target_patient_id, actor, reasonCode }`.

- **Post-merge:** **Auth** — one `auth`↔`patient` **binding**; **invalidate** sessions for **dropped** user id; **re-auth** to **target** as needed. **Ongoing** care rows stay on **one** `patient_id` (repointed), not **re-created** without **audit**.

### 1J.8 Shared contact (email / phone)

- **Uniqueness:** **Do not** assume **DB-enforced** global **unique** email or E.164 (households, fraud re-use). **Account** **identifier** and `patient_id` are **independent**; use **link** table **auth** ↔ `patients` as needed. **Duplicate** **use** feeds **1J.6**.

- **Allowed sharing (no merge):** (a) same E.164 **household**; (b) shared **family** email. Both require **strong** **step-up** (4) + second factor or **in-app** **only** for **sensitive**; set `metadata.shared_contact: true` + **staff** `identity.shared_contact_noted` on **timeline** when **documented**.

- **Login / session:** distinguish by **`auth.uid()`** ↔ **`patient_id`** **binding**; two `patients` **one** **phone** → **OTP** flow must **disambiguate** (e.g. **last-4** **DOB** or **initials** + **short** id) + **rate** **limit**; if **ambiguity** **remains**, **fail** to **staff** **verification** (break-glass), **not** a **guessable** code.

- **Comms routing:** with `shared_contact`, **no** full **clinical** **detail** in **SMS**; **prefer** in-app; route by **`patient_id`**; never **infer** which **person** from **E.164** **alone** for **PHI** **content**.

- **Duplicate interaction:** (A) + same E.164 → **R-low**; (B) without (A) → **R-med**; (C) + same E.164 → **R-high** (1J.6 **blocking** path).

### 1J.9 Authority boundaries (capability-level; align with **Section 1E** / **Intent**)

*Same Model C as **1D.1** — **which** `StaffRole` / `Capability` may **exercise** these **rows;** **1D.1** is the **map** home for **multi-capability** users, **time-boxed** **grants,** and **reason** on **sensitive** **access** without a **new** **auth** **product.*

| Actor | Edit identity (non-locked) | Edit **locked** name/DOB | Trigger / clear duplicate hold | Initiate **merge** | Override verification | Break-glass identity fix |
|------|----------------------------|----------------------------|----------------------------------|----------------------|------------------------|---------------------------|
| **Patient (self)** | **Preferred** name, comm prefs, **non-legal** intake **fields**; **email/phone** with **OTP** and **1J.6** / **1J.8** **checks** | **No** — **only** new **(1)** **re-verify** or **staff** path | **No** | **No** | **No** | **No** |
| **Customer_support** | **Tier-1** **profile** **fixes** per **role**; **not** **locked** **core** | **No** (escalate) | **Flags**; **clear** **R-med** / **R-low** per **policy** with **audit**; **not** **R-high** without **compliance** | **No** (default) | **No** | **No** |
| **Provider** | **No** **silent** **legal** **edits**; may **request** **correction** | **No** | **Flag** `identity.clinical_concern` + **1G** | **Recommend** only (see 1J.7) | **No**; **block** **prescribe** via **1G** **if** **identity** **fails** **permit** | **No** |
| **Ops_admin** | **Yes** **non-locked** with **audit** | **With** `can_edit_locked_identity` + **reasonCode** | **Yes** with **`can_clear_identity_hold`** (name as needed) | **If** `can_merge_patient_records` | **No** **unless** **`can_override_identity_verification`** (rare) | **With** dual control per org |
| **Compliance_auditor** | **Read** + **export**; **edits** only if **also** **staff** **role** **with** **cap** | **Yes** with **`can_edit_locked_identity` + `reasonCode` + **audit** | **Yes**; **final** on **R-high** **clear** (with **`can_clear_high_risk_identity_hold`**) | **Yes** with **`can_merge_patient_records`** | **Yes** (fraud / BAA **process**) | **Yes** with **`break_glass_identity` + `SensitiveAccessReason` + **reasonCode** |
| **Break-glass** | **Emergency** **only** (safety, **wrong** **chart** **risk**): `requireCapability`(`break_glass_identity`) + **mandatory** `reasonCode` + **`SensitiveAccessReason`** on **read**/**write** as in **Intent**; **post-hoc** **compliance** **review** **queue**; **never** **without** **audit** + **timeline** `identity.break_glass_applied` |

- **Locking / unlock:** **Lock** when **1J.3** **conditions** met; **unlock** only **(a)** new **(1)** **pass** **or** **(b)** **staff** + `can_edit_locked_identity` + **documented** **evidence** in **audit** **or** **(c)** **break-glass** with **compliance** **only** **by** **default**.

### 1J.10 Identity integrity: gaps, runtime failure, risk, refinements, and **shared clinical safety preflight (target)**

*Not a second identity model. It names what 1J.1–1J.8 do not by themselves guarantee in code or product. **1J.10 is not a claim that the repo already implements a universal joined read** — that is a **target requirement** and a **pre-scale / Hims-level non-optional** for high-risk mutations (see **Target vs. what must be non-optional before scale** below).*

#### Operational honesty (current repo shape)

- **No universal joined patient-case “safety read”** runs before every prescribe / approve / refill **staff** approval / clinical visit **signing** in a **single** **shared** function. **Today** behavior is **fragmented**: per-function `select`s in `lib/internal/patient-case/impl.ts` and peer libs, plus **`requirePatientCaseCapability`** in `app/internal/(protected)/patients/[patientId]/actions.ts` — not one **named** **snapshot** of 1J + 1I + 1G context.
- **`actions.ts`** is the **intended** staff **choke point** for capabilities; the module `impl.ts` **even documents** that importing it **elsewhere** **bypasses** the policy layer.
- **Patient-initiated refill** (`submitPatientRefillRequest` + portal session) is a **different** entry path than staff mutations; it does **not** share the same preflight as staff **approval** — and **must not** be conflated with “refill **approval** by staff” for **defensibility** (request vs. authorize).
- **Therefore:** bullet **(1)** under **Additive refinements** below is **reframed**: the **product** name is **`loadPatientCaseSafetySnapshot`**, not “whatever `impl` happens to query” — and **`impl` must be wrapped**, not treated as a safe public surface.

#### Target: `loadPatientCaseSafetySnapshot(patientId, actionContext)`

- **One** **server-side** function (or thin family with the same contract) that **all** high-risk **staff** **mutations** call **after** session/auth and **before** work: **`loadPatientCaseSafetySnapshot(patientId, actionContext)`**.
- **`actionContext`** identifies the **intent** (e.g. `prescribe_catalog`, `treatment_approve`, `refill_approve`, `visit_sign`, `lab_authorize` as **strings** in map only — **bind** to **existing** server actions, **no** new architecture). **Future** when DEA-like rules apply, include **`controlled_substance_context`**; **identity override**, **duplicate dismissal**, **fraud-hold override** are **separate** contexts requiring **higher** capabilities and **reason codes** (1J.9, Intent).
- **Snapshot** includes **only** **existing** or **already planned** in this map — **no** parallel tables:
  - **1J — identity / integrity:** `identity_confidence` / L-level inputs, `metadata.duplicate_review` (R-low / R-med / R-high), open identity **holds** / **unresolved** duplicate state *as materialized in `patients` and related columns you already use*.
  - **1I — payment / abuse rails** relevant to the action: dispute tiers, **money** / subscription **holds**, chargeback or **fraud** flags the product already reads for gating (1I.0) — **same** **fields** the **action** would need to **refund** or **void**, not a second story.
  - **1G — clinical / permit / case state:** `clinical_required` (or current permit **gate**), **unresolved** **1G** **blockers** for the **care_program** / `treatment_item` in scope, **relevant** **message** / **visit** **pointers** *when the map ties signing to 1G*.
  - **Clinical memory / safety (where applicable to the action):** **allergies** / **current** **meds** and **gating** rules the product **already** enforces (1J.3, 1G) — *projection* from **existing** rows, **not** a new “clinical memory” engine.
  - **Prior** **active** or **duplicative** **treatments** for **merge risk** (same `patient_id` scope): **treatment_items** and **refill** **state** as in **1J.7** / workflow — **enough** to **block** **unsafe** **duplicate** **lines** **per** **policy**.
  - **1G.2** *tie-in* **(therapy safety, not a CDSS):** the *snapshot* **supplies** *inputs*; **1G.2** *names* **defensible** *assert* *outcomes* (hard block / soft warn+ack / escalate) *run* *in* *the* *same* *server* *path* *—* *extend* *this* *bullet* *list* *when* *adding* *rules* *so* *preflight* *and* *safety* *read* *the* *same* *source* *rows* *and* *stable* *codes* *in* *payload* */* *audit* *.* 
  - **Audit / reason** **metadata** **placeholders** for the **mutation**: **required** **`reasonCode`** / **`SensitiveAccessReason`** **where** Intent and **1J.9** **already** **require** them — the snapshot **fails** if **mandatory** **audit** **prerequisites** **cannot** be **satisfied** (align with **failed** `audit_events` = **block** in **Intent**).

**Rule:** the **same** **snapshot** **row** (or struct) is what **both** the **gating** **check** and **an** `audit_events` / timeline **append** can **reference** (e.g. **hash** or **cursor** in **payload**) so **permit** and **audit** **are not** on **divergent** **reads** (1J.10 **runtime** **table** **above**).

#### High-risk mutations (must not run without preflight + capability + audit)

**Must** call the **preflight** **stack** (snapshot → **assert** **gates** → **then** `impl` or direct DB in **one** **enforced** **wrapper**): **prescribing**; **treatment** **approval**; **clinical** **visit** **signing** / **publish** **as** **authorizing**; **refill** **approval** (staff); **future** **controlled-substance** **branches**; **identity** **override**; **duplicate** **dismissal** / **merge** **initiation**; **fraud**-**hold** **override** — each **map**-listed **to** **capabilities** **in** **1J.9** **and** **1G** **(not** **a** **new** **enum** **layer** **here**).

#### Enforcement (repo-level, not a second app)

- **`lib/internal/patient-case/impl.ts` is unsafe for direct use** in product code unless the caller is the only wrapper that always runs **`loadPatientCaseSafetySnapshot`**, **`requireCapability`**, and durable audit (Intent). New routes, tests, and internal jobs that import `impl` directly are a known bypass. **Governance** is team choice: forbid in CI, required code review, or break-glass review only — the map names the **architectural** rule, not a new tool stack.

#### Target vs. what must be non-optional before scale

| Class | meaning |
|-------|--------|
| **Target (design and incremental build)** | **`loadPatientCaseSafetySnapshot`**, `actionContext` **vocabulary**, **one** **wrapper** **per** high-risk **family**, **link** snapshot **id** to **audit** **payloads**. **May** ship **feature**-by-**feature** with **gaps** **if** **each** **shipped** **path** is **documented** **as** **partial** **(no** false **“**done**”** in **compliance** **narratives**). |
| **Non-optional before material scale / Hims-level ops** | (1) **All** **staff** high-risk **mutations** in **this** **repo** **on** the **spine** **(prescribe, approve, sign, staff refill approval)** go **through** **one** **pattern**: **capability** + **safety** **snapshot** + **assert** (block / escalate) + **then** work + **durable** **audit**. (2) **No** new **prod** path **to** `impl` **without** the **same** **wrapper**. (3) **Refill: staff** **approval** **must** **use** the **same** **join** as **other** **approvals**; **patient** **request** **remains** a **separate** **simpler** **path** (session + **R-high** / **1I** **blocks** **on** **checkout** **or** **later** **stages** **as** **already** **in** the **map**) — **converge** on **safety** **at** the **authorizing** **edge**. (4) **If** the **preflight** **fails** **or** **cannot** **load** → **block** or **escalate** — **not** “continue **best** **effort**” **(Intent** **aligns**). |

**Vague in the current map (fix in product, not a new "framework"):**

- 1J.4 L0–L4 is an architectural floor, not a UI spec. The map does *not* require `identity_confidence` + `duplicate_review` + open 1I flags on every prescriber/approval view. If any surface omits them, **1G permit** can be asserted from a *narrower read* than 1J intended — a *real* failure, not a philosophy exercise.
- Intake → visit → first prescribe: a new `patients` row can reach L3 (1) while `duplicate_review` is R-low (1J.6) or cleared before ops is done. A **B-tier** second row can still exist: **two** `patient_id` values, **diverging allergies and meds** until 1J.7 merge. 1J.3 says allergies are not "identity" — that does not fix wrong-chart selection; that is *session and chart discipline*, not 1J alone.
- **Refill / renewal:** 1G and 1E allow continued lines; re-verification (1) on each refill is *not* a schema rule. A *stale auth + long-lived session* + 1J.8 can yield refill on a **captured** binding.
- 1J.6 "never auto-merge" stops merge in SQL; it does *not* block *one human* with *two active accounts* (L1+ + new 4) until flags fire — *multi-account* is 1J.11, not a contradiction of 1J.6.

**Runtime failure (observable in prod):**

| Condition | What actually happens in this stack |
|----------|--------------------------------------|
| `duplicate_review`, `dispute_count` / 1I tiers, or money flags read *in a different path* than 1G permit, or a *stale* list vs decision view | Permit (1G) and downstream orders can run on a `patient_id` that is still R-high or financially blocked; 1J.6 blocking is void if gating is not the *same* read as the action. |
| `audit_events` or `patient_timeline_events` write *fails* (Intent) or is *dropped* (bug) | Row state can move; *defensible chronology* is lost — 1J.6 / 1J.7 *worse* for R-high and merge audit. |
| Two B-match rows before 1J.7 | *No* auto allergy merge; 1J.7 human **union** is the only **architected** safety for opposing lists — *two charts = two med/allergy sets* until then. |
| **Wrong** `patient_id` in context (impersonation, wrong tab, stale patient in support tool) | 1J does not prevent. 1G/1E follow the loaded id. *Break-glass and session discipline* (1G, 1J.9) — not solvable by identity rows alone. |

**Named harms (plain link):**

- **Duplicate** `patients` — split orders, two 1I rails, disjoint labs. 1H counts; it does not **block** fraud.
- *Unsafe* prescribe (allergies / drug interaction) — *two* IDs = two `treatment_items` until merge; 1J.3 reconciliation is at *merge*; until then, provider depends on *opening the correct* chart.
- *Multi-accounting* / offer farming — 1J.6 R-low + (3)+(4) + (1) can mint another row; R-high blocks *if* the heuristic or ops path fires.
- *Payment abuse* — 1I: chargeback, duplicate funding, dispute tiers; if not **joined** to checkout/refill, map intent is not *live* in behavior.
- *Compliance* — failed audit trail or wrong subject in `SensitiveAccessReason` reads: 1J.9 + 1G; 1J.10 does not add a second compliance engine.

**Additive refinements (same tables, events, caps; no new architecture):**

1. **Single server preflight = `loadPatientCaseSafetySnapshot`** (contract above) — *not* “use whatever `impl` queries today.” The joined read must be **one** function’s output **consumed** by the **actions**-level wrapper before delegating to `impl`. Until implemented, 1J.10 **additive** (1) is a **target**, **not** “already true because `impl` exists.”
2. L4 (or stricter) for certain programs: 1J.4 is a *floor*; *L4+* gating is an *org/product* rule, not a second enum layer in the map.
3. Refill step-up: if re-verification is org policy, encode in `treatment_items.metadata` and *timeline* eligibility, not a new "refill enforcement" type class in the map.

#### Pressure-test answers (1J.10 — default: fail closed, escalate, or break-glass with reason + audit; never “silent success”)

*Conservative, map-level; implementation binds to 1J.6 / 1I / Intent as wired.*

| Scenario | Required behavior |
|----------|---------------------|
| **A developer imports `impl.ts` directly (bypasses `actions.ts`)** | **Capability and snapshot** are not guaranteed — **defensibility gap**; RLS/DB may still **block** some harm but **not** a substitute. **Map rule:** not allowed in **prod** paths; **tests** and **one-off** scripts are **excluded** or **flagged** in **review** — not equivalent to a staff action with audit. |
| **Patient refill bypasses the staff `actions` pattern** | **By design** for the **request** leg (portal + service role + session bind). It **must not** be mistaken for **staff** **refill** **approval**; **at scale**, **refill_approve** in staff tools **uses** the **same** `loadPatientCaseSafetySnapshot` as other approvals. **Gaps** in **1I** / **checkout** **gating** on the patient journey are **1I** + **1J.10** table rows, not fixed by conflating paths. |
| **Identity confidence is missing or not loaded** | **Block** the high-risk mutation, **or** **escalate** to an ops/compliance **queue**; **no** “approve in the blind” **in** the **defensible** story. If **break-glass** exists (1J.9), it **must** use **recorded** **reason** and **capability** — not optional narrative. |
| **Duplicate / identity hold is unresolved (e.g. R-high)** | **Block** new Rx/approval (1J.6). If the snapshot fails to return duplicate state, treat as **unknown** → **block** (fail closed) until the row is readable or an escalation path clears the unknown — not “assume cleared.” |
| **Payment / 1I fraud or money hold** | **Block** capture, fulfillment, or clinical approval as 1I.0; **escalate** to 1I/ops. No silent path that authorizes a medication action on a stranded, disputed, or uncollectible rail. |
| **Preflight cannot load (error, timeout, partial row)** | **Block** the mutation; log and **escalate** to infra/ops. **Do not** best-effort approve. Same principle as Intent: failed or missing defensibility = block, not log-only success. |

#### 1J.10 — operational enforcement against drift (pressure-test: plan correct, code will change)

*No new “compliance system.” The question is whether **routine** work makes bypass **conspicuous** and **reversible in review** — not whether drift is **impossible** (it is not) without mechanical guards.*

**Current repo (honest):**

- **Direct `impl.ts` imports** — Grep today: **only** [`app/internal/(protected)/patients/[patientId]/actions.ts`](app/internal/(protected)/patients/[patientId]/actions.ts) imports `lib/internal/patient-case/impl`. So **as of now** bypass is *not* silent proliferation — but **no** `eslint` `no-restricted-imports` (or similar) **yet**, so a **new** `import` is **one line** away. **`prescribeCatalogTreatment`** is **only** used from `impl` today; if a second call site is added, it becomes a **parallel** prescribe path **without** the **actions** wrapper.
- **Server `actions` vs `route.ts`** — Staff mutations are **intended** to be server actions through `actions.ts` + `impl`. **`app/api/**/route.ts`** (Stripe, **patient** portal, internal APIs) use **`createAdminClient`**, service role, and **bypass** user-scoped RLS. That is **necessary** for some flows; it is also where **unreviewed** writes to **`treatment_items` / `refill_requests` / `clinical_visits`** are **highest** drift risk **without** a shared `requireCapability` + (future) snapshot. **Map rule:** a **new** `route` that **authorizes** or **moves** **clinical** **state** for a **patient** the way **staff** would is a **defect** **unless** it funnels to the same **spine** or is explicitly **read-only** / **patient-authorized** only.
- **Audit write failure** — `logAuditEvent` in [`lib/audit/logAuditEvent.ts`](lib/audit/logAuditEvent.ts) **inserts** and, on `error`, **`console.error` only** — it does **not** return failure to callers. That **diverges** from Intent + 1J.10 “failed audit = block” **unless** every high-risk `impl` function **independently** undoes the mutation (they generally **do** **not** on audit). **Target minimum:** for **high-risk** paths, the **wrapper** (or a **`logAuditEvent` variant**) must **return** `{ ok: false }` and the **action** must **roll back** or **not** return `{ ok: true }` to the **UI** — same **one** place as the snapshot, **not** a second architecture.

**Minimum guardrails (priority order, stay inside this repo’s patterns):**

1. **ESLint** — Add **`no-restricted-imports`**: forbid importing `@/lib/internal/patient-case/impl` from **any** file **except** the one server-actions module (and, if the team later adds one, a **dedicated** integration-test path **with** a **documented** exception in the rule, **not** ad-hoc). **Optionally** the same for **`@/lib/care/prescribeCatalogTreatment`** → **only** `impl` (today that **matches** the **tree**; **fails** when someone **correctly** refactors to a new internal layer — then **widen** the allow to that layer **only**).
2. **CI = lint gate** — Keep **`npm run lint` + `typecheck`** as merge gates (**already** in [`AGENTS.md`](../../AGENTS.md)). No **new** check **system**; **if** a **stricter** `rg`/`ripgrep` one-liner is ever added, it should **only** duplicate the **import** allowlist **as** a **failsafe**, not replace ESLint.
3. **`AGENTS.md` (one short bullet)** — State **explicitly:** high-risk patient-case mutations = **server actions** + **`requireCapability`** + (future) **`loadPatientCaseSafetySnapshot`**; **do not** add new imports of `lib/internal/patient-case/impl` **except** from the existing `app/internal/(protected)/patients/[patientId]/actions.ts` (or a single future wrapper the map names). New **`app/api` routes** that **mutate** chart or treatment state need **architect** / **compliance** review or must delegate to the same **spine**; patient-session-only routes use **map-listed** gating, not **staff** authorization.
4. **Patient portal split** — **Naming + review:** any `POST` under `app/api/patient-portal/*` that **moves** treatment toward **clinician authorization** (as opposed to **request** + **checkout** / **intake**) is a **red flag** — that belongs in **staff** `actions` + `requireCapability` per the map. **`submitPatientRefillRequest`** remains the **intake** pattern; new routes should not blur **request** vs **approve** in path or copy.
5. **Code ownership (optional)** — A root `CODEOWNERS` or GitHub path rule for `lib/internal/patient-case/impl.ts`, `app/internal/(protected)/patients/[patientId]/actions.ts`, and (if audit semantics change) `lib/audit/logAuditEvent.ts` is a **nudge** for review, not a **technical** lock.

**Failure mode — audit write fails (operational, consistent with table above):** **Callers** must not treat the mutation as **defensible** when **`audit_events`** did **not** **persist** — **default** to **user-visible** error + **escalation** to **ops/infra** + **no** “success” **toast** on **half**-written state; where **transactional** **undo** is **infeasible** **in** v1, **at minimum** log **+** **blocking** follow-up (timeline **invariant** in Intent).

### 1J.11 Fraud, abuse, account — within 1G, 1I, 1J (no third-party fraud platform)

*No dedicated "fraud engine" in the map. Below: behavior classes in existing rows; tightening with 1J.6 flags, 1E cancel, 1I refund, 1G Exception, 1J merge queue — only what the architecture already names.*

- **Account / multi-`patients`:** A/B-tier + new (4) + (3) creates another `patients` row. "Velocity" (same card, same ship, N trials) is not a column; 1H can count; **enforcement** is 1J.6, R-high block, 1E cancel, 1I refund. If those paths are not *wired in product*, it *stays a gap*.
- **Payment:** 1I dispute and subscription gating. If `dispute_count` is not in the *same* order/refill read as 1E/1G, 1I.0's split of authority is not *honored* in the route.
- **Clinical (wrong person):** 1G + session + 1J.1. 1J is not EHR-grade impersonation detection; wrong chart is 1G/ops and break-glass.
- **Escalation vs silent success:** 1G Exception, 1E cancel, 1J.6/1J.7, 1I staff are *separate queues* in the map — not one merged inbox. *Cross-slice* index: `patient_id` + `event_type` on `patient_timeline_events` (1H). **Worst** runtime: mutation *succeeds* without a durable `audit_events` row (Intent) = *silent* from defensibility.
- *Trial or velocity cap* = product rule in `care_program` / order `metadata` + timeline/1H alert, **not** a new `fraud_*` table. *Bypass* only: break-glass (1J.9) + 1G + 1I with audit and, where Intent requires, `SensitiveAccessReason` — *no* shadow `patient` routes.
- *Provider when a signal is missing:* the architected *data* mitigation in this file is **`loadPatientCaseSafetySnapshot` (1J.10) — a target, not a guarantee in every build**. Until the snapshot is universal on high-risk paths, omitted signals in a narrow read remain a *real* gap. Omitted in UI alone does not remove server-side duty — *EHR or SOP* cannot substitute for a missing server preflight at scale.

---

## Section 1K: Intake architecture (deterministic, versioned, composable; no separate form builder)

*Pressure-test scope:* Hims-class scale needs an intake system that supports many entry pathways (ED, HRT, GLP-1, peptides, labs-only, supplements-only, anti-aging/wellness) without duplicating intakes per product, drifting per session, or letting AI invent questions. The plan keeps intake **deterministic, versioned, composable, and clinically defensible** — built from existing models with **additive metadata + minimal new schema** only when reuse cannot represent the concept.

*Reject:*

- A freeform / AI-generated intake engine that can drift between sessions or patients.
- Per-product duplicated intake silos (a separate "ED intake app", "GLP-1 intake app", etc.).
- Marketing-funnel content treated as clinical record (or vice versa).
- Recommendation outputs treated as prescribing decisions.
- Payment authorization and prescribing approval being the same step.

*Reuse first:* `intake` (existing forms/responses), `patient_timeline_events`, `care_program`, `treatment_items`, `treatment_orders`, `clinical_visits`, `patient_diagnostic_reports` (per Lab appendix §11–§16), `patients` / `staff_profiles`, 1I subscription/payment rows, `outbound_jobs`, `audit_events`, `Capability`. Add minimal new objects only where existing ones cannot represent the concept (see `1K.14`).

### 1K.1 Intent and scope (longitudinal-state framing)

- **Intake is the entry point into a continuous care system**, not a session, form, checkout step, or one-time interaction. It initializes — and continues to write into — a **persistent, time-aware patient state** that messaging, provider workflows, system check-ins, and longitudinal care loops continue to read and append to.
- **One intake spine, many entry moments:** the same module/question/version + audit discipline (`1K.4`) applies whether the input is captured at onboarding, during a provider-triggered follow-up, or during a system-triggered check-in (per `1K.6`). Subsequent entry moments **re-enter at the relevant module layer** (per `1K.3`); they do **not** restart intake.
- **Intake writes into the right domain** (per the Layer 1 data architecture rule in Intent): static clinical memory → existing chart spine (`patients` chart fields, `1J.10` snapshot reads); **trackable measurements** → `patient_state_observations` per **Section 1M** (append-only, controlled vocabulary, source-tagged); labs → `patient_lab_observations` per Section 1L; provider decisions → `clinical_visits`; narrative milestones → `patient_timeline_events` (pointers only, never authoritative values); accountability → `audit_events`. Intake never overloads `patient_timeline_events` with longitudinal data.
- **Belongs in intake:** module engine, question bank (`1K.4`), eligibility gates, safety/contraindication modules, lab requirement modules, identity verification gates, intake-time payment authorization, the submission packet to provider review (`1K.12`), the **first writes** to chart memory and `patient_state_observations`.
- **Belongs elsewhere:**
  - Product-plan presentation (recommendation candidate) → `1K.10`, surfaced to patient as provisional only.
  - Provider review and decisioning → `Section 1G` (case ownership, permits, AI assist) and `1K.12` (the submission packet).
  - Subscriptions/payment outcomes → `Section 1I`.
  - Lab order/result flow → `Section 1L` (Lab Appendix §11–§16 for detailed mechanics).
  - Marketing pre-account personalization → `1H.4` (acquisition/attribution; pre-account data is **not** clinical record unless converted per `1K.13`).
  - Longitudinal trackable storage → `Section 1M`; intake writes here, then progressive intake (`1K.6`), provider workflows, and reporting continue to read/append.
- **Hard rule:** intake is deterministic and reconstructable across **all** entry moments (onboarding, provider follow-up, system check-in). Every patient must be able to answer "exactly what was shown and what did I answer" via `audit_events` + `patient_timeline_events` (narrative pointers) + `patient_state_observations` (longitudinal values) + the existing `intake_response` storage per `1K.4` / `1K.14`. **Intake is never a one-time event.**

### 1K.2 Entry pathways and intent mapping (no per-product silos)

Patients may enter through any of: "I have ED", "Low T symptoms", "GLP-1 / weight loss", "peptides", "labs", "supplements", "I'm not sure / anti-aging / wellness". Each entry **maps to one or more intake modules** from a shared module set; modules are reused across pathways.

- **Entry intent → pathway record:** stored as an `intake_pathway_selection` (additive concept; can live in `intake` metadata in v1) with `selected_intent`, `selected_at`, `entry_source` (per `1H.4` acquisition fields when present), and `pathway_codes` (one or more, e.g., `ed`, `trt`, `glp1`, `peptides`, `labs_only`, `supplements_only`, `wellness`).
- **Mapping policy (deterministic):** a server-side policy file (versioned, reviewed; **not** AI-generated at runtime) maps intent codes to ordered module sets. `wellness` maps to a baseline assessment + recommendation logic that may surface eligibility for additional pathways.
- **Cross-sell:** adding a pathway during a session adds modules to the same `intake_session` (no second intake silo); see `1K.6`.
- **Anonymous vs authenticated entry:** see `1K.13`.

### 1K.3 Layered intake module model

Intake is layered modules; the same module can appear in many pathways. Each module is one of two **kinds**:

- **Clinical intake module** — questions/answers that contribute to clinical eligibility, safety, or chart record. Subject to `1K.7` safety rules and `1K.15` audit/PHI discipline.
- **Non-clinical funnel module** — narrative, education, marketing-light copy, pre-account personalization. **Not** clinical record by default; see `1K.13`/`1K.15` for rules on when it converts.

**Module layer order (default; can be product-tuned per pathway):**

1. **Pre-intake narrative / education** (non-clinical) — landing copy, expectation-setting.
2. **Eligibility gates** (clinical) — state/jurisdiction (per `1G.4.1`), age/DOB, sex (where required), program-specific hard gates.
3. **Global profile** (clinical) — name, DOB, contact (per `1J` precedence), shipping address (when relevant).
4. **Reusable health history** (clinical) — allergies, medications, surgeries/procedures, major conditions; reuse policy per `1K.5`.
5. **Program-specific symptom modules** (clinical) — pathway-specific (e.g., IIEF-5 for ED, ADAM/AMS for low T, weight history for GLP-1).
6. **Medication / contraindication modules** (clinical) — pathway-specific contraindication screens (nitrates for ED, anabolic use for TRT, GLP-1-specific contraindications).
7. **Lab requirement modules** (clinical) — required vs optional labs per pathway; at-home kit selection; see `1K.8`.
8. **Fulfillment / shipping modules** (non-clinical) — confirm shipping/contact, partner preferences when applicable.
9. **Identity verification modules** (clinical) — per `1J.4` confidence level required for the intended action; gating for prescribing or controlled substances.
10. **Checkout / payment authorization modules** (commercial) — kit fee today vs medication fee if-prescribed; see `1K.11`.
11. **Provider-submission module** (clinical) — patient confirms accuracy + consent; submission packet assembled for provider review (`1K.12`).

Each module must declare: `module_id`, `module_version`, `kind` (clinical | non-clinical), `pathways` it serves, `required_for` (eligibility, safety, lab, fulfillment, identity, payment, submission), and ordering hints (server policy controls actual order).

**Static vs trackable inputs (clinical modules — applies to layers 4 and 5):**

- **Static inputs** (e.g., DOB, sex assigned at birth, surgical history, "have you ever been diagnosed with X") are captured once and refreshed only when freshness expires per `1K.5`. They write to existing chart fields / `intake_response` per `1K.4` / `1K.14`.
- **Trackable inputs** (weight, BP, symptom scores, dose tolerance, sleep, mood, side-effect severity) are captured during intake in a form that supports **future appends** per **`Section 1M`** — same `field_name` is appended to over time, never overwritten. The intake write is the **first row** in the patient-state spine for that field; subsequent intake moments (provider follow-up, system check-in per `1K.6`) append additional rows to the same `field_name`.
- The question bank (`1K.4`) controls which `question_id`s correspond to trackable `field_name`s in `patient_state_observations`; trackable questions carry an explicit `is_trackable: true` declaration and an associated canonical `field_name`.

**Re-entry semantics (intake never restarts):**

- The 11-layer order remains the structural model for an **onboarding** session. Subsequent intake moments (provider follow-up, system check-in, additional pathway addition per `1K.6`) **re-enter at the relevant layer** — typically layer 4 (reusable health history with freshness re-prompt) or layer 5 (program-specific symptom modules) — without restarting from layer 1.
- No silent re-prompting of static inputs unless freshness has expired per `1K.5`.
- Re-entered modules use the **same module/question/version + audit discipline** as the initial onboarding session.

### 1K.4 Question bank, versioning, and module architecture

- **Question bank (canonical):** every question has a stable `question_id` (e.g., `qb.allergies.list_v3`), an `answer_type` (single-select, multi-select, free-text-bounded, numeric, date, etc.), and a controlled vocabulary for choices where applicable. **Free-text fields are bounded** (length cap, no PHI in module ids/labels); long-form is captured as a controlled note tied to a question.
- **Module membership:** each question declares which `module_id`s include it; questions can be reused across modules but always render via the canonical id.
- **Branching rules:** branching is **deterministic and declarative** (not LLM-generated at runtime). Rules are versioned with the module; rule engine is a **simple evaluator** over prior answers + global context (jurisdiction, pathway, identity state).
- **Required vs optional:** declared per question per module per pathway; eligibility gates are always required.
- **Scope:** `jurisdiction`, `pathway`, `program`, `product` scopes are first-class on questions (e.g., a controlled-substance contraindication question is required only for the relevant pathways/jurisdictions).
- **Versioning:**
  - Every change to a question's wording, choice set, branching, or required-status creates a **new `question_version`**. Old versions are retained.
  - Modules are versioned similarly (`module_version`); a session captures the exact `module_version` and `question_version` shown.
  - **No silent edits.** Changing question meaning requires a new id; trivial copy fixes can bump version on the same id (auditable diff).
- **Retirement / deprecation:** questions can be retired; retired questions remain readable for historical reconstruction but cannot be added to new modules.
- **Auditability:** for every session, the system can reconstruct **exactly which question_version was shown, in which module_version, with what branching context, and what the patient answered**. Stored on `audit_events` + `intake_response` (additive concept; see `1K.14`).

### 1K.5 Answer reuse, freshness, and re-prompting policy

- **Reuse principle:** a global health-history answer (e.g., known drug allergies) can be **silently reused** in subsequent sessions when valid; the patient sees a "confirm / update" affordance for clinical safety.
- **Scoping:**
  - **Global** answers (chart-wide): allergies, major conditions, medications, surgeries, demographics — reused across pathways subject to freshness.
  - **Program-scoped** answers: pathway-specific symptom scores, recent weight/BMI for GLP-1, libido scores for ED — scoped to that `care_program`.
  - **Context-sensitive** answers: re-asked when clinically relevant, stale, or tied to a different program.
- **Hard rule (no silent suppression of safety):** "no medical problems" or "no allergies" cannot suppress targeted contraindication questions for a pathway. Targeted contraindication questions always run for the pathway that requires them, regardless of prior negative global answers.
- **Freshness windows (org policy; defaults documented):** allergies/medications/major conditions have a freshness window (e.g., 90–180 days); after expiry, the system re-prompts or asks for explicit confirmation. Pathway-specific safety questions may have shorter windows.
- **Stored on every answer:**
  - `answered_at` (timestamp), `question_version`, `module_version`, `source_module_id`, `intake_session_id`, `pathway_context`, `reuse_policy` (`global` | `program_scoped` | `context_sensitive`), and a `reused_from_response_id` pointer when the answer was carried forward.
  - Reuse events are logged in `audit_events` (and a typed `patient_timeline_events` pointer when a reused answer materially affected eligibility/recommendation).

**Patient-state spine (longitudinal trackables — defers to `Section 1M`):**

- Trackable measurements (per `1K.3` static-vs-trackable distinction) write to **`patient_state_observations`** per `Section 1M` — the v1 first-class table for living, time-aware patient signals.
- Append-only; never overwrite. Multi-entry per `field_name` is the default. Trends (weight over time, symptom-score trajectories, side-effect severity over a course) are queryable directly from the spine — not from `patient_timeline_events` payload scans.
- The intake write carries `source_type = intake`, `source_id = intake_session_id`, `authored_by = patient` (or `system` for derived values like BMI). Subsequent provider-prompt or check-in writes append additional rows under the same `field_name` (per `1K.6`).
- `patient_timeline_events` may carry a typed pointer (`state.observation.recorded`) **only** when the observation is narrative-meaningful (significant delta, severe side-effect, threshold crossing per `1M.6`); routine intake/check-in writes do not flood the timeline.
- Static answers (allergies, conditions, surgical history) continue to follow existing `intake_response` storage per `1K.4` / `1K.14`; they do **not** write to `patient_state_observations`.

**Data ownership matrix (mandatory; mirrors `1J.9`):**

- **Patient writes:** subjective inputs (symptoms, weight, mood, lifestyle, dose-taken confirmation), confirmations/updates of prior global answers, explicit consent acceptances. Patient writes are **immutable historical records** once written; "updates" are new appended rows on the spine, not overwrites.
- **System writes:** `timestamp`, `source`, `session_id`, derived values (e.g., BMI from height + weight, `intake_derived_score` per `1K.9`). System never authors clinical content.
- **Provider writes:** clinical interpretation (notes, structured follow-up requests via `1G` `clinical_required` per `1K.6`), explicit clarification requests. Providers must **NOT silently overwrite** original patient inputs; clarifications append a new row tagged `authored_by = provider` + `correction_reason = provider_clarification` per `1M.3`. Same authority discipline as `1J.9`.
- **Ops writes:** rare; privileged manual entry per `1M.5` with reason code + audit; requires `can_manual_record_state_observation` capability.
- **Forbidden:** silent overwrites by any actor; ad-hoc SQL; UI-only writes that bypass capability + audit. Same enforcement as `1L.18` #1 and `1M.4` hard rules.

### 1K.6 Multi-pathway and bundled treatment composition

- **Pathway addition during a session:** when a patient picks up an additional concern mid-flow (e.g., adds ED while in TRT intake), the engine **adds the additional pathway's modules** to the same `intake_session`. No duplicate session, no separate intake silo.
- **Cross-pathway question reuse:** the engine reuses already-answered questions per `1K.5` and adds only **new pathway-specific** clinical/contraindication modules.
- **Bundled treatment fit:** the post-intake `treatment_plan_candidate` (`1K.10`) may include multi-product bundles (Rx + supplements, Rx + labs, Rx + coaching/instructions); each line maps to an existing `treatment_items` / catalog entry.
- **Existing patients adding a new concern later:** create a **new `intake_session`** scoped to the new pathway, reuse global answers per `1K.5`, and link to a new `care_program` (concurrent programs per Section 1G rules).
- **Existing supplement-only patients converting to Rx:** the engine adds the Rx pathway modules and required labs/identity modules; identity/eligibility gates re-run as needed (do not assume past identity confidence is sufficient if the new action requires higher per `1J.4`).

**Progressive intake (longitudinal — intake never ends):**

Additional structured inputs are collected after onboarding via two existing mechanisms — **no new system, no new "intake extension" record type**:

- **System-triggered check-ins:** scheduled per pathway/condition policy (e.g., GLP-1 weight check at 4/8/12 weeks; menopause symptom score quarterly; HRT side-effect tolerance at week 2 + week 6). System emits a typed `patient_timeline_events` event (e.g., `intake.checkin.requested`) carrying minimal context only; the prompt renders a **structured-input module** drawn from the same question bank (`1K.4`); patient answers append to `patient_state_observations` per `Section 1M` (trackables) and/or `intake_response` (static updates) per `1K.5`.
- **Provider-triggered follow-ups:** provider raises a `clinical_required` turn per `Section 1G` with a structured-input attachment ("Your care team needs a bit more information") referencing one or more `question_id`s from the question bank; patient response writes through the same response model (`1K.5`/`1K.14` for static; `Section 1M` for trackables) and clears the `clinical_required` turn per `1G` rules.
- **Hard rule:** all post-onboarding inputs follow the **same data model**, write to the **same domain tables** (chart, `patient_state_observations`, `intake_response`), and respect the same versioning, reuse, freshness, ownership, and audit rules. **No separate "intake extension" record type or product.** Provider-triggered follow-ups never overwrite patient-authored values; corrections per `1K.5` ownership matrix and `1M.4` append-superseding-row rule.

### 1K.7 Clinical safety and contraindication screening

Deterministic safety gates exist at intake-time so the patient is screened **before** they reach provider review for an obviously ineligible request.

- **Hard gates (block intake or block payment-for-Rx):**
  - State/licensure availability per `1G.4.1`.
  - Age / DOB per pathway requirements (e.g., over-18, over-21 for some pathways).
  - Sex assigned at birth (where clinically required for the pathway).
  - Pathway-specific absolute contraindications (e.g., nitrate use for ED, history of medullary thyroid carcinoma for GLP-1, anabolic steroid abuse for TRT).
- **Soft flags (do not block; surface to provider):**
  - BMI / weight outside expected band, recent significant weight changes, mild contraindications, history items requiring clarification.
- **Provider-review flags:** flags that must be visible to the reviewing provider in the submission packet (`1K.12`); provider remains final clinical decision-maker.
- **Storage:**
  - Hard-blocker outcomes write `intake_eligibility_blocker` events (additive concept on `patient_timeline_events` payload) with stable reason codes (`state_not_supported`, `age_below_minimum`, `absolute_contraindication`, etc.) and `audit_events`.
  - Soft flags are surfaced as `intake_safety_flag` payloads (severity, source question_version, module_version) for provider review.
- **Lab prerequisites:** when a pathway requires labs (e.g., baseline TRT panel), the intake engine routes the patient into the lab module (`1K.8`) rather than presenting a Rx product candidate that cannot be approved.
- **Hard rule:** safety screening at intake **does not replace** `1G.2` active safety enforcement at decision time — it is a deterministic pre-screen so that obviously ineligible patients are blocked early and provider time is preserved.

### 1K.8 Labs and at-home test kit flows

- **Lab-required treatments:** intake routes the patient to the lab module; eligibility for the Rx product candidate is held pending lab completion + provider review per Lab Appendix.
- **Optional labs:** patient is offered the lab option but can proceed to provider review without it where org policy allows.
- **Labs-only purchase:** patient enters via the `labs` pathway; intake captures the minimum needed for legal/clinical lab ordering; no Rx product candidate is generated.
- **At-home kit shipping:** the lab module captures shipping details (reuse global profile when valid per `1K.5`); fulfillment runs through existing `treatment_orders` / 1E rails as the org models lab kits today.
- **Lab result return + provider review:** governed by Lab Appendix §13–§15; intake records that labs were ordered, not the result interpretation.
- **Treatment eligibility after labs:** the post-result review flows into `Section 1G` provider review; eligibility per the org's clinical policy.
- **Credit / payment handling for kit-fee-rolling-into-Rx-plan:**
  - Kit fee charged today via 1I (per `1I.1` `captured`).
  - If patient is approved for an Rx plan that credits the kit fee, credit is applied via `metadata.refill_adjustment_cents` (per `1I.2`) or equivalent line-credit on the Rx plan; **not** by manipulating the kit-fee row.
  - All credit application is logged via `audit_events` and visible in `1I` reporting.
- **Linkage:** intake-issued lab orders carry `intake_session_id` + `pathway_code` in payload, joinable to `patient_diagnostic_reports` and downstream review per `1H.1` standardized payload contract.

### 1K.9 Symptom scoring and recommendation readiness

- **Deterministic scoring layer:** each pathway has versioned, **declarative** scoring rules (e.g., IIEF-5 sum, ADAM/AMS thresholds, weight-loss readiness composite) computed server-side from the captured answers — **not** an LLM.
- **Domain scores:** scores are emitted per domain (e.g., sexual, energy, mood, cognitive, physical, hunger/weight, metabolic) as the org defines them per pathway.
- **Outputs are not diagnoses:** `intake_derived_score` records are derived artifacts, not independent clinical truth; provider remains the decision-maker.
- **Use cases:** scores can guide product-plan presentation (`1K.10`) and provider prioritization in queues (`1G.7`); they do not auto-prescribe.
- **Storage:** stored as derived intake artifacts with `score_version`, `pathway_code`, `score_inputs_snapshot_id`, and timestamp; visible to provider in the submission packet (`1K.12`); reportable in aggregate via `1H.7`.
- **Hard rule:** scores **cannot** clear `1G` permits, satisfy contraindications, or set `reviewed_at` on labs. They inform; provider acts.

### 1K.10 Product-plan presentation (treatment_plan_candidate)

- **Concept (additive, can live as `intake.metadata.treatment_plan_candidate` in v1; promote to dedicated table only if reuse is insufficient):** a **provisional** "you may be a fit" recommendation generated server-side after intake completion, scoped to the session.
- **Composition:** references one or more `treatment_items` / catalog entries (Rx, supplements, labs, coaching/instructions); supports bundles and alternates (e.g., GLP-1 with/without supplement; ED with/without daily tadalafil).
- **Provisional only:** every plan candidate carries an explicit `pending_provider_review` (and `pending_lab_review` where applicable) status; copy to the patient must reflect "subject to clinician review" — **never** imply guaranteed prescribing.
- **Content management + versioning:** product-plan copy/claims are content-managed and **versioned** (claim version stored on the candidate); approved by clinical/compliance like other patient-facing content.
- **Score linkage:** the candidate carries pointers to the `intake_derived_score`(s) and `pathway_code`(s) that drove it, so provider can see "why this was suggested" without AI black box.
- **Patient affordances:** patient may select among presented options (with/without add-on); selection is recorded on the candidate and carried into the submission packet (`1K.12`).
- **Hard rule:** the candidate is not an order. Order creation happens **only** after provider approval (or, where the org models payment-before-approval per `1K.11`, after payment authorization plus provider approval before charge for Rx).

### 1K.11 Checkout / payment authorization (today vs if-prescribed)

Intake captures both today's commerce and the conditional Rx terms; payment events flow through existing `Section 1I` rails.

- **Today vs if-prescribed (explicit, separate events):**
  - **Today charge** (e.g., lab kit fee, supplement-only purchase, evaluation fee where applicable) → standard 1I `captured` per `1I.1`.
  - **If-prescribed charge** (Rx plan) → `authorization_for_future_charge` recorded with explicit terms (amount range, plan duration, renewal terms); **no charge** for the Rx until eligibility/prescribing conditions are satisfied per `1I.2`'s "payment capture after approval" rule.
- **Subscription pre-authorization / stored payment method:** captured once (per `Section 1I` and `1I.4` rail capabilities) and reused for the if-prescribed charge and renewals.
- **Plan duration options:** plan options are catalog-driven (`treatment_items` / 1E lines), not synthesized at intake time.
- **Credit application (kit fee → Rx):** see `1K.8`; credits are applied at the Rx-plan line creation, not by mutating the kit-fee row.
- **No charge for Rx unless eligibility satisfied:** absolute rule. Provider approval (per `1G`) plus any required lab review (per Lab Appendix) must complete before the if-prescribed charge fires.
- **Audit trail of consent + payment terms:**
  - Patient acknowledgment of plan terms is captured as a typed answer in the checkout module (versioned per `1K.4`).
  - Stored on `audit_events` (consent terms version, accepted_at, IP/device context per Intent), `intake_response`, and `patient_timeline_events` pointer.
  - Renewal terms are stored on the subscription/plan row per `1I.7`.
- **Failed payment handling:** uses existing 1I/`outbound_jobs` failure/retry machinery; no parallel retry path. A failed authorization at intake is a soft block (patient can update payment method); failed if-prescribed charge after approval routes through `1G.5` exception (`payment` category).
- **Belongs in 1I, not in intake:** post-charge lifecycle (refunds, disputes, dunning, write-off) is governed by `Section 1I`.

### 1K.12 Provider review submission packet

When intake completes (or reaches submission), the system assembles a **deterministic, reconstructable submission packet** for provider review per `Section 1G`. The provider sees one packet, not a forensic trail.

- **Packet contents (server-assembled; no LLM rewriting of factual fields):**
  - Intake summary: pathway(s), modules completed, `intake_session_id`, `module_version`s, `question_version`s.
  - Risk flags + contraindication flags (per `1K.7`), including soft flags.
  - Medications, allergies, surgeries, history (with reuse markers + freshness per `1K.5`).
  - Symptoms and `intake_derived_score`s with `score_version` and pathway context (per `1K.9`).
  - Selected pathway and `treatment_plan_candidate` (per `1K.10`) with rationale pointers.
  - Lab status (ordered, in-progress, results received, reviewed) per Lab Appendix linkage.
  - Patient free-text / questions (bounded; no PHI in metadata).
  - Reuse vs newly-asked: each row tagged with `reused_from_response_id` or `newly_asked_in_session_id` so provider sees what's fresh.
  - Identity confidence per `1J.4` and any pending verification.
  - Payment authorization status per `1K.11` (kit fee captured? Rx authorized but not charged?).
- **Why this was suggested:** provider sees the score → recommendation linkage (per `1K.9`/`1K.10`); this is **assistive only**.
- **AI assist (per Section 1G AI layer + `1N`):** AI may **summarize** packet contents and **draft** notes; it cannot satisfy `1G.2` safety asserts, set `reviewed_at`, or substitute for the provider's clinical decision.
- **Provider decisioning:** runs through existing `Section 1G` permits, `1G.2` safety enforcement, and (for Rx) `clinical_visits` per Intent precedence — **not** through the intake engine.
- **Submission timeline event:** `intake_submission_for_provider` typed event on `patient_timeline_events` (payload: `intake_session_id`, `pathway_codes`, `treatment_plan_candidate_id`, `submitted_at`).

### 1K.13 Session continuation, reuse, and abuse / gaming detection

- **Anonymous / pre-account entry:**
  - Pre-account narrative + entry-intent capture lives as **non-clinical funnel data** under `1H.4` acquisition fields and a session cookie / session row; **not** clinical record.
  - Conversion to authenticated clinical intake creates an `intake_session` and links the prior anonymous data **only** when the patient consents and an account is created.
- **Personalization vs medical assessment:** pre-account answers can drive **personalization only** (e.g., which education to show); they cannot satisfy clinical intake questions or skip eligibility gates.
- **Resume incomplete intake:** sessions are durable; patients can resume at the next required module. Resumed sessions reuse already-answered questions per `1K.5` and re-prompt where freshness has expired.
- **Add new pathway later:** see `1K.6`; new session, reused global answers, new pathway-specific modules.
- **Re-consent on material change:** when terms or **clinical** modules materially change, a re-consent module fires before submission (versioned consent record).
- **Abuse / gaming detection (system-level):**
  - **Multiple completions / re-attempts on the same pathway** by the same `patient_id` (or merged-cluster id from `1J`) within a short window are flagged as `intake_repeat_attempt` (additive event); pattern signal feeds `1J.11` (fraud/abuse) and `1G.5` exception classification (typically `patient_behavior_dropout` or `compliance_or_policy_change` per `1H.6.1E`).
  - **Answer-flipping detection:** when a patient changes a clinically meaningful answer (e.g., flips a contraindication from "yes" to "no") in a new session within a short window, the system raises an `intake_inconsistency_flag` for provider review and records prior + new answer (no silent overwrite) per `1K.5` storage rules.
  - **Threshold-crossing patterns:** repeated near-threshold scoring on screening tools is surfaced to ops/clinical leadership via `1H.7` aggregate pattern queries (no auto-block on a single session — provider/ops decides).
  - **Account-velocity caps:** per `1J.11` and Intent — trial/velocity caps live in product rules + `audit_events` flags, not a new fraud table.
  - **Alerting:** flagged sessions surface on the admin overlay (`1G.6.2`) and trigger `1G.5` exception workflow for ops review; provider sees the flag in the submission packet (`1K.12`).
  - **Patient-facing behavior:** the system does **not** silently shut down a patient. Hard blocks require explicit eligibility-blocker reason codes (per `1K.7`) and are communicated per `1G.5` patient-communication discipline.

### 1K.14 Data model / minimal schema refinements (existing-first; additive only when needed)

Be explicit about exists / partial / target / non-optional. Prefer reusing existing `intake` and metadata; add new objects only where reuse cannot represent the concept.

| Concept | **Exists** | **Partial / can-be-metadata in v1** | **Target (when scale demands)** | **Non-optional before scale** |
|---|---|---|---|---|
| `intake_session` | session-like state in existing intake | session id + module/question version capture in `intake.metadata` | dedicated table once cross-pathway sessions and resume become high-volume | session id + version capture |
| `intake_module` | module concept implicit in current forms | module catalog in code/policy file (versioned) | dedicated catalog table when modules grow large or org wants admin authoring | versioned module catalog (code or table) |
| `intake_question_version` | questions exist in code/forms | `question_id` + `question_version` recorded on each response | dedicated `question_versions` table when versions per question multiply | `question_id` + `question_version` on every response |
| `intake_response` | answers persisted today | extend response payload with `module_version`, `question_version`, `pathway_context`, `reuse_policy`, `reused_from_response_id`, `answered_at` | dedicated rich response table at scale | rich response payload |
| `intake_pathway_selection` | pathway implied by current intake | record on `intake.metadata` (`selected_intent`, `pathway_codes`, `entry_source`) | dedicated table if multi-pathway sessions become common | recorded selection per session |
| `intake_derived_score` | scoring not first-class | derived artifact in `intake.metadata` with `score_version` + `score_inputs_snapshot_id` | dedicated table when score volume / reporting demands it | versioned derived score with input snapshot id |
| `intake_reuse_event` | not modeled | typed `audit_events` and `patient_timeline_events` rows on reuse | dedicated event index for high-volume reuse analytics | reuse logged to existing event spines |
| `treatment_plan_candidate` | not modeled | `intake.metadata.treatment_plan_candidate` referencing existing `treatment_items` | dedicated table once candidates carry richer state across sessions | candidate object per session with claim version + `treatment_items` refs |
| `intake_submission_for_provider` | submission implied | typed `patient_timeline_events` event with packet pointers | dedicated submission table only if needed | typed event + packet reconstructable from existing rows |
| `intake_safety_flag` / `intake_eligibility_blocker` | not modeled | typed `patient_timeline_events` payloads with stable reason codes | dedicated table only if reporting volume demands it | typed events with stable reason codes |
| **`patient_state_observations` (longitudinal trackables)** | **not previously modeled in 1K** | **not applicable — see Section 1M** | **shipped in v1 as a dedicated first-class table per `Section 1M`** (append-only, controlled vocabulary, source-tagged, per-actor authority); intake writes the **first row** per trackable `field_name`; subsequent intake moments (provider follow-up, system check-in per `1K.6`) append additional rows. **Not deferred.** | **Mandatory in v1**: append-only multi-entry storage with controlled `field_name` vocabulary per `1K.4`; provider corrections never overwrite patient-authored values |

**Hard rule:** do not create a new table when an existing one + additive metadata works; promote to a dedicated table only when reuse can no longer represent the concept clearly. **Exception:** `patient_state_observations` ships as a v1 dedicated table per `Section 1M` because timeline payload + metadata cannot represent multi-entry trackable trends queryably at scale. Either way, the architecture stays one source of truth (no duplicate intake silos, no longitudinal trackables crammed into `patient_timeline_events`).

### 1K.15 Audit, compliance, and privacy

- **Reconstructability:** for any session, the system can answer "what exact `question_version` was shown in what exact `module_version`, with what branching context, and what was answered" via `intake_response` + `audit_events`.
- **Reuse logging:** every reused answer carries a `reused_from_response_id`; reuse events are queryable in `1H.7`.
- **Copy/version storage:** every patient-facing claim/copy version (intake screens, plan-candidate language, consent terms) is **versioned** and stored; renderings reference the version.
- **Eligibility blockers auditable:** every blocker writes a typed event with reason code and is reconstructable.
- **PHI protection:** clinical intake responses are PHI; pre-account funnel data is **not** PHI by default (per `1K.13`); conversion to clinical record is explicit and audited.
- **Checkout consent + payment terms:** consent terms version and acceptance event recorded per `1K.11`.
- **Provider decision distinct from recommendation:** the `treatment_plan_candidate` is provisional; the provider's decision (per `1G` + `clinical_visits`) is the clinical record. Both are stored; neither replaces the other.
- **Admin / leadership visibility:** the admin overlay (`1G.6.2`) and `1H.7` reporting respect existing capability gating; intake-level PHI is gated by clinical capabilities (`1J` / `1J.10`).
- **Subprocessors / log minimization:** per Intent — no PHI in vendor metadata or third-party LLM prompts; AI summarization in the submission packet runs against already-aggregated/structured intake data, not raw chart text where the map otherwise restricts it.

### 1K.16 Non-optional before scale

- **Deterministic module engine** with versioned modules and questions; no AI-generated runtime questions.
- **Canonical question IDs and versioning** captured on every response.
- **Answer reuse + freshness rules** with explicit `reuse_policy`; no silent suppression of safety questions.
- **Exact question/answer/version audit trail** reconstructable per session.
- **Eligibility gates** at intake-time per `1K.7` (state, age, sex-when-required, absolute contraindications).
- **Program-specific contraindication modules** that always run for their pathway regardless of prior negative global answers.
- **Provider review submission packet** assembled deterministically (`1K.12`).
- **Lab-required flow support** wired to existing lab models (`1K.8`, Lab Appendix).
- **Payment authorization distinction** between today-charge and if-prescribed-charge (`1K.11`).
- **No duplicate independent intake silos** — one engine, many pathways, additive metadata only.
- **Anonymous → authenticated boundary** explicit; pre-account data not treated as clinical record without consent.
- **Abuse / gaming detection** wired into `1J.11` + `1G.5` + `1H.7`.

### 1K.17 Cross-links

**Intent** (jurisdiction-of-care, audit, service-role discipline, **Layer 1 data architecture discipline**), **1D / 1D.1** (capabilities including future `can_view_intake_session` / `can_view_intake_submission` / `can_manual_record_state_observation` if added), **Section 1E** (commerce/catalog used by `treatment_plan_candidate`), **Section 1F** (scheduled visits when intake routes to live encounter), **Section 1G** (case ownership, permits, AI assist, exception handling for intake stalls; `clinical_required` is the messaging spine for provider-triggered follow-ups per `1K.6`), **1G.4 / 1G.4.1** (jurisdiction routing + multi-state runtime), **1G.5** (exception classification), **1G.6 / 1G.7 / 1G.8** (provider workspace + routing where intake submissions land), **1G.9** (continuity preferences after first prescribing decision), **Section 1H** (analytics/funnel), **1H.4 / 1H.4.1 / 1H.4.2** (acquisition + growth surface; pre-account funnel boundary), **1H.6 / 1H.7** (intake-related metrics + reporting; trackable trends queried from `Section 1M`, not timeline payload scans), **Section 1I / 1I.1 / 1I.2 / 1I.4 / 1I.7** (kit fee, if-prescribed authorization, subscription terms, refunds/disputes), **Section 1J / 1J.1 / 1J.4 / 1J.10 / 1J.11** (identity precedence/confidence, safety preflight, fraud/abuse; static chart memory boundary), **Section 1L** (diagnostics + lab testing — order, result, review, retest; vendor-issued labs stay in `patient_lab_observations`), **Section 1M** (longitudinal trackables — `patient_state_observations` is the v1 dedicated store for living, time-aware patient signals; intake writes the first row, progressive intake appends), **Section 1N** (AI assistive layer for packet summarization + trend interpretation; never writes to `patient_state_observations`).

---

## Section 1L: Diagnostics + Lab Testing Layer (foundation; not appendix)

*Foundation status:* labs are a **core loop substrate** of MAIN, connecting intake → commerce/payment → fulfillment → diagnostics/results → provider review → patient display → care programs → retesting/continuation → reporting/metrics. This section promotes the prior "Lab Appendix" to a **first-class foundation module**. The Lab Appendix (preserved below for detailed mechanics) remains the implementation-detail reference; **Section 1L is the canonical foundation**.

*All prior Lab Appendix design decisions are preserved.* The appendix (`§1`–`§31`) continues to hold the detailed object model, state lifecycle, ingestion mechanics, scenarios, and admin overlay slice. Section 1L names the foundation contract, fills the tightening gaps, and adds the missing build-ready pieces. Where the appendix and Section 1L overlap, **Section 1L is the operative contract**; appendix retains long-form mechanics.

*Reuse only:* `lab_orders`, `patient_diagnostic_reports`, `patient_lab_observations`, `commerce_orders` / `treatment_orders`, `outbound_jobs`, `patient_timeline_events`, `audit_events`, existing `Capability` set. **No new tables** unless explicitly justified per `1L.5`/`1L.6`/`1L.7` minimum schema notes.

### 1L.0 Naming + scope boundary (labs vs diagnostics)

- **"Labs" in this section** = structured, panel-based diagnostic tests producing **quantitative biomarker observations** (blood panels, hormone panels, metabolic panels, vitamin/micronutrient panels, etc.).
- **"Diagnostics" is a superset** that may include imaging (DEXA, X-ray, MRI), stool / microbiome studies, external uploads (outside-system labs/PDFs), future device data (wearables, CGM), and other modalities not fully specified here.
- **v1 scope:** labs are the **primary implemented diagnostic type**. Section 1L fully specifies the lab pipeline.
- **Future-safe:** the model is designed so additional diagnostic modalities can plug into the **same** ingestion → report → observation → review → release → reporting pipeline. **No parallel diagnostic ingestion systems** in v1 or v2.
- **`metadata.diagnostic_source_type` (no new table; lives on `lab_orders` and/or `patient_diagnostic_reports`):**
  - `lab_partner` — external PSC / partner draw (Quest-style).
  - `at_home_kit` — kit shipped to patient.
  - `imaging_center` (future) — DEXA / X-ray / MRI / ultrasound at an imaging facility.
  - `external_upload` (future) — patient or staff uploads outside-system results.
  - `device` (future) — wearable / CGM / home device data.
- **Hard rule:** Section 1L does not fully design non-lab diagnostics. It only ensures the model does not block them; future modalities follow the same pipeline shape and reuse the same tables + event vocabulary where possible.

### 1L.1 Foundation status (labs are not optional)

- Labs are a **core loop substrate**, not an optional add-on. Every reference to lab functionality in MAIN treats labs as foundation.
- **Cross-link contract:**
  - **Intake (`Section 1K`)** → builds `treatment_plan_candidate` with lab lines; never creates `lab_orders` directly.
  - **Commerce (`Section 1E`) + payment (`Section 1I`)** → payment-success webhook is the canonical creator of `lab_orders` (Scenario B).
  - **Fulfillment** → `outbound_jobs` to vendor; substates per `1L.4`.
  - **Diagnostics/results** → `patient_diagnostic_reports` + `patient_lab_observations`; ingestion + normalization per `1L.6`.
  - **Provider review** → `1G.6.1 / 1G.8.7` lab review drawer; routing per `1G.7` + `1G.9.4`.
  - **Patient display** → `1L.12`; release gated by `released_to_patient_at`.
  - **Care programs** → `1L.10` (standalone vs program-attached); gating tie-in per `1L.16`.
  - **Retesting/continuation** → `1L.9` cadence loop; subscriptions via `Section 1I` rails.
  - **Reporting/metrics** → `1H.6` (daily ops dashboard) + `1H.7` (flexible reporting); `1H.7.6a` continuity-health slice extends to lab-driven CoR transitions.

### 1L.2 Object model (canonical answers; preserves appendix §11–§18)

- **`lab_orders` row creation:** payment-success webhook (Scenario B retail/screening) **or** provider/staff workflow action (Scenario A treatment-linked baseline/monitoring). Not intake submit. Not vendor return.
- **`lab_orders.id`:** app-generated UUID; idempotency on `(metadata.commerce_order_id, panel_type)` for Scenario B and on the originating workflow context for Scenario A.
- **One `lab_orders` row per `panel_type`.** Bundles share parent commerce/treatment order via `metadata.commerce_order_id` / `metadata.treatment_order_id` and an `intake_session_id` reference.
- **`metadata.panel_type` enum (canonical):** `full_panel`, `male_hormones`, `female_hormones`, `metabolic`, `lipid`, `inflammation`, `thyroid`, `vitamins_micronutrients`, `glycemic`, `kidney_liver`, `cbc`, `cardiovascular_risk`, `toxins_heavy_metals`, `sti_screen`, `pregnancy_screen`, `custom_panel`. Org-extensible only via map/repo review.
- **`metadata.vendor_partner_id`** routes to specific partner adapters per `1L.14`.
- **`metadata.fulfillment_type`** ∈ `in_person | at_home | provider_collected`.
- **`metadata.diagnostic_source_type`** ∈ `lab_partner | at_home_kit | imaging_center | external_upload | device` per `1L.0`.

### 1L.3 Structured + semi-structured model (NEW — required)

The system supports **both** structured observations and semi-structured/document-level payloads. Not all diagnostics fully decompose into structured observations; the system must not require full normalization to persist a report.

- **`patient_lab_observations` (structured):** normalized, queryable, trendable analyte values (Cr, WBC, A1c, testosterone, estradiol, etc.). Used for trends, abnormality flags, insights, reporting. **Always** sourced from the validated ingestion pipeline (`1L.6`).
- **`patient_diagnostic_reports.report_payload` (semi-structured; additive metadata field):** retains the **full vendor result** including:
  - non-standard markers,
  - narrative text / impression,
  - imaging output references,
  - raw/unmapped data,
  - the original vendor envelope for provenance (also referenced via `source_attachment_path` per appendix §14).
- **Storage decision (additive, no new table):** `report_payload` lives as a JSON column or `metadata.report_payload` on `patient_diagnostic_reports`; large blobs reference `source_attachment_path` in storage.
- **Hard rules:**
  - Not all diagnostics decompose into structured observations; the system **must not** require full normalization to persist a report.
  - Structured observations are a **derived layer**, not the only layer.
- **Patient display + reporting precedence (per `1L.12`):**
  - **Prefer structured observations** when available (panel view, category view, trends, insights).
  - **Fall back to `report_payload`** when structured mapping is incomplete (e.g., a narrative imaging impression, an unmapped marker, a stool study with mixed structured/text output).
- **Forward compatibility:** this dual-model is what allows future imaging, stool studies, and external uploads to plug into the **same** pipeline without a parallel ingestion system.

### 1L.4 Top-level `lab_orders.status` state machine (formal)

Top-level status drives queues / reporting / metrics. `metadata.fulfillment_substatus` (and existing `kit_fulfillment_status` from appendix §3) drives operational detail. **Top-level is the canonical handle**; substates expand operational visibility.

**Allowed top-level statuses:**

`created` · `requisition_generated` · `kit_sent` · `awaiting_collection` · `in_progress` · `result_received` · `reviewed` · `released` · `completed` · `cancelled` · `expired` · `sample_issue`

**Legal transitions:**

```
created
  → requisition_generated   (in-person pathway after partner submit success)
  → kit_sent                (at-home pathway after kit ship)
  → cancelled               (pre-fulfillment full refund / cancel)
  → expired                 (no progression past intake-window threshold)

requisition_generated
  → awaiting_collection     (requisition published to patient)
  → cancelled
  → expired

kit_sent
  → awaiting_collection     (kit delivered; awaiting patient sample)
  → sample_issue            (kit lost in transit / undeliverable)
  → cancelled
  → expired

awaiting_collection
  → in_progress             (sample collected / in transit / processing)
  → expired                 (no-show or no-return past threshold)
  → sample_issue
  → cancelled

in_progress
  → result_received         (any result report ingested + linked to this order)
  → sample_issue
  → cancelled

result_received
  → reviewed                (patient_diagnostic_reports.reviewed_at set)
  → cancelled               (rare — provider voids result; audited)

reviewed
  → released                (patient_diagnostic_reports.released_to_patient_at set)
  → completed               (terminal when org policy doesn't require explicit release)
  → cancelled

released
  → completed               (terminal)

sample_issue
  → in_progress             (after re-collection / kit resend resolves)
  → cancelled
  → expired

cancelled  (terminal)
expired    (terminal)
completed  (terminal)
```

**Substates (per `metadata.fulfillment_substatus`; preserved from appendix §21 / §25):**

- **In-person:** `requisition_pending → requisition_published → awaiting_collection → collection_completed → result_received` (with `expired` / `sample_issue` branches).
- **At-home:** `kit_queued → kit_shipped → kit_delivered → sample_in_transit → sample_received → sample_processing → result_received` (with `sample_lost` / `sample_invalid` substates feeding top-level `sample_issue`).

**Top-level vs substate split (locked):**

- Queues, reporting, dashboards, and metrics filter on **top-level status**.
- Operational ops drilldown (e.g., "stuck in `kit_delivered` for 5 days") filters on **substate**.
- Top-level transitions emit canonical timeline events (per `1L.5` + appendix §28); substate transitions emit operational events for `1G.6.2` overlay.

#### 1L.4a Status × actor matrix (who/what mutates each transition)

Every top-level `lab_orders.status` transition has a **defined actor** and a **defined mutation surface**. Out-of-band transitions (ad-hoc SQL, scripts skipping the audited path) are forbidden per Intent and `1J.10` rules — same enforcement principle as other map-level mutations.

| Transition | Allowed actor(s) | Mutation surface | Capability / discipline |
|---|---|---|---|
| `→ created` | **system** (Scenario B payment-success webhook) **or** **provider/staff** (Scenario A workflow action) | webhook handler (`1L.2`) **or** `createLabOrder` action with `requireCapability` | Scenario B: idempotent webhook per `1I.6`. Scenario A: `can_create_lab_order` + audit. |
| `created → requisition_generated` | **system** (partner adapter ack per `1L.14`) | adapter callback / inbound webhook | idempotent on `(vendor_partner_id, lab_order.id)`; audit |
| `created → kit_sent` | **system** (kit-shipping `outbound_jobs` success) | shipping job completion handler | `outbound_jobs` discipline + audit |
| `created → cancelled` | **staff/ops** | order cancel action | `can_cancel_lab_order` + reason code + audit; `1I` refund follows per `1I.7` |
| `created → expired` | **system** (cron / threshold job per `1L.8`) | scheduled job | audit; `metadata.expiry_reason` set |
| `requisition_generated → awaiting_collection` | **system** (publish step) **or** **staff** | `publishLabRequisition` action **or** auto-publish post-ack | `can_publish_lab_requisition` (or system actor) + audit |
| `kit_sent → awaiting_collection` | **system** (delivery confirmation from carrier) | shipping webhook handler | audit |
| `kit_sent → sample_issue` | **system** (carrier returns "undeliverable") **or** **staff** (manual flag) | shipping webhook **or** ops action | `can_flag_sample_issue` + reason code + audit |
| `awaiting_collection → in_progress` | **system** (partner ack of sample receipt) | partner adapter callback | idempotent + audit |
| `awaiting_collection → expired` | **system** (cron threshold per `1L.8`) | scheduled job | audit; `metadata.expiry_reason ∈ {patient_no_show, patient_no_return}` |
| `awaiting_collection → sample_issue` | **system** **or** **staff** | partner callback **or** ops action | audit |
| `awaiting_collection → cancelled` | **staff/ops** | cancel action | `can_cancel_lab_order` + reason + audit |
| `in_progress → result_received` | **system** (ingest job per appendix §22) | ingest pipeline | idempotent on report dedupe key; sets `lab_orders.first_result_ingested_at`; audit |
| `in_progress → sample_issue` | **system** (partner returns invalid notice) | partner callback | audit |
| `in_progress → cancelled` | **staff/ops** | cancel action | `can_cancel_lab_order` + reason + audit (rare) |
| `result_received → reviewed` | **provider** (or delegated reviewer per `1G.9.4`) | `reviewLabResult` action setting `patient_diagnostic_reports.reviewed_at` + `reviewed_by_staff_id` | `can_review_lab_result` + audit; `1G.2` enforcement applies for downstream therapy decisions |
| `result_received → cancelled` | **provider** + **compliance/oversight** | privileged void with reason | `can_void_lab_result` (rare) + `SensitiveAccessReason` + audit |
| `reviewed → released` | **provider** (or delegate per policy) | `releaseLabResultToPatient` action setting `released_to_patient_at` | `can_publish_lab_result` + audit |
| `reviewed → completed` | **system** (terminal when org policy doesn't require explicit release) **or** **provider** (explicit complete) | scheduled close job **or** action | audit |
| `reviewed → cancelled` | **provider** + oversight | privileged void | `can_void_lab_result` + audit |
| `released → completed` | **system** (terminal close) | scheduled close job | audit |
| `sample_issue → in_progress` | **system** (after re-collection / kit resend resolves) **or** **staff** | new `outbound_jobs` chain **or** ops action | audit; may pair with new `lab_orders` row carrying `metadata.replaces_lab_order_id` per `1L.8` |
| `sample_issue → cancelled` | **staff/ops** | cancel action | `can_cancel_lab_order` + reason + audit |
| `sample_issue → expired` | **system** (cron threshold) | scheduled job | audit |
| **any state → privileged correction (re-link)** | **compliance / oversight** with explicit capability | privileged correction surface | `can_correct_lab_order_link` + `SensitiveAccessReason` + audit (per `1L.5`) |

**Actor-discipline rules (mandatory):**

- **No out-of-band transitions.** Every transition above runs through the named mutation surface; ad-hoc SQL, scripts, or routes that skip `requireCapability` and `audit_events` are forbidden per Intent + `1J.10` enforcement.
- **System actors** (webhook handler, ingest job, cron, partner adapter) write `audit_events` with the system actor identity (e.g., `actor_kind = system`, `actor_subkind = stripe_webhook | partner_adapter | ingest_job | sample_issue_cron | close_job`); never as a human staff id.
- **Staff/provider actors** write `audit_events` with their staff id and the capability used; broad/sensitive privileged actions also write `SensitiveAccessReason` per Intent.
- **Idempotency** applies on every system-driven transition keyed per `1I.6` (webhook event id, partner result id, `outbound_jobs.dedupe_key`).
- **Forbidden:** moving directly from `created → reviewed` (skips ingest); from `result_received → released` (skips provider review); from `cancelled` or `expired` back to any active state (terminal); from any state to a non-listed state.

### 1L.5 Diagnostic report → lab_order binding rules

`patient_diagnostic_reports.lab_order_id` may be **null** at ingest (orphan path). Once linked, the binding is **immutable** except via privileged correction with audit per `1J.10` rules.

**Binding priority (deterministic; tried in order):**

1. **`external_order_id` / `vendor_order_id` exact match** — partner-supplied id matches `lab_orders.metadata.partner_order_ref`.
2. **Patient identity + `panel_type` + collection/result date window** — same `patient_id` + same `panel_type` + result `observed_at` within a configurable collection window of the only candidate `lab_orders`.
3. **Manual reconciliation queue** — surfaced to ops via `1L.11` (orphan reports view).

**Orphan workflow as first-class (not edge case):**

| State | Definition | Owner / next action |
|---|---|---|
| `orphan_unmatched` | report ingested, no candidate `lab_orders` matched | ops queue (manual link or "standalone-without-order" classification) |
| `orphan_candidate_match_found` | one or more candidates met priority 2 but require human confirmation | ops queue with suggested links |
| `orphan_linked` | ops manually linked the report to a `lab_orders` row; immutable thereafter | none |
| `orphan_unresolvable` | ops determines no valid match exists; report retained as standalone diagnostic | none |

Orphan state lives on `patient_diagnostic_reports.metadata.orphan_state`. Transitions are fully audited (`audit_events`); patient-impact transitions emit a `patient_timeline_events` pointer.

**Privileged re-link (correction):** changing `lab_order_id` after first link requires `can_correct_lab_order_link` capability + `SensitiveAccessReason` + audit; never silent.

### 1L.6 Lab observation normalization layer

Before writing `patient_lab_observations`, every result passes through **normalization**. The stored observation retains raw source payload for audit; patient display, trends, insights, and reporting use **normalized values**.

**Normalization mapping (per analyte, in ingest pipeline):**

- `raw_code` → `observation_code` — LOINC where available; partner-native code (with `code_system = "partner_native"` and namespace prefix per `1L.12` mapping spec) when LOINC absent.
- `raw_value` → `normalized_value` — preserve numeric type; convert units only where clinically safe (per a versioned `unit_conversions/<version>.json` map).
- `raw_units` → `canonical_units` — consistent across partners (e.g., always `mg/dL` for glucose, `ng/dL` for testosterone).
- `raw_abnormal_flag` → standardized `abnormal_flag` ∈ `low | normal | high | critical` (or `unknown` when partner doesn't supply).
- `reference_range` → normalized reference range where the partner provides one and units are convertible.

**Required raw-source retention (additive metadata on each observation row):**

- `metadata.raw_code`, `metadata.raw_value`, `metadata.raw_units`, `metadata.raw_abnormal_flag`, `metadata.raw_reference_range`, `metadata.partner_namespace`, `metadata.normalization_version`.

**Failure handling:**

- **Unmapped codes** → fall to `general` per category-mapping spec (appendix §24); observation still persisted with the raw_code so partial value isn't lost.
- **Unsafe unit conversion** (e.g., ambiguous units, missing context) → observation persisted with raw values intact and `metadata.normalization_warnings: ["unsafe_unit_conversion", ...]`; flagged for ops review.
- **Unmappable analyte** (no internal code yet) → observation persisted in `general` bucket; ops queue surfaces "uncategorized observation codes per partner" for mapping work.
- **Hard rule:** normalization failure does **not** block report persistence; the `report_payload` (per `1L.3`) and the raw observation row still land. This preserves data + provenance.

**Ops review surface:** unmapped/unsafe normalization rates per partner are queryable in `1H.7` and surface in `1G.6.2` admin overlay so mapping coverage stays current.

### 1L.7 Lab order ownership (responsible_provider_id + queue_owner)

Every `lab_orders` row carries explicit ownership for accountability and queue routing.

- **`lab_orders.responsible_provider_id`** (target column or `metadata.responsible_provider_id` in v1):
  - Set at creation when known (Scenario A: provider/staff workflow knows the prescriber; Scenario B post-payment: defaults to clinician-of-record (CoR) if program-attached, else null).
  - Updated by reassignment job per `1G.7` routing + `1G.9.4` lab follow-up rules.
- **`lab_orders.metadata.queue_owner`** (optional, for pool/team ownership):
  - Used when no specific provider is assigned (e.g., screening pool, lab review pool, abnormal triage pool).
- **Hard rule (abnormal-without-review):** any `patient_lab_observations` row with `abnormal_flag` ∈ `low | high | critical` whose parent report has `reviewed_at IS NULL` **must** have an accountable owner — `responsible_provider_id` or `queue_owner` resolvable to a real reviewer. Coverage gaps (none assignable) surface in `1L.11` and `1G.7.7a` coverage-gap view.
- **Tie-ins:**
  - Provider queues (`1G.6.1 / 1G.8.7`) read `responsible_provider_id` to surface "my labs awaiting review".
  - CoR logic (`1G.9.4`): lab follow-up prefers CoR; abnormal/critical routes to fastest eligible reviewer per `1G.9.6`.
  - SLA enforcement (`1G.7.5b`): per-item SLA timer applies to lab review with item-type `lab_review`.
  - Admin overlay (`1G.6.2`) shows lab queue depth + abnormal-without-review by controlled provider dimension (`1H.7.2`).
- **Capability:** changes to `responsible_provider_id` require `can_assign_provider_queue` (or `can_transfer_clinician_of_record` when paired with CoR change per `1G.9.7`); audited.

### 1L.8 Expiration and no-completion logic (canonical)

Lab orders that don't progress past configurable thresholds transition to `expired` or `sample_issue` automatically; nothing sits indefinitely.

**Thresholds (org-tunable per `panel_type` / `fulfillment_type`):**

- `awaiting_collection` past N days (e.g., 60–90d for in-person, 21–30d for at-home) without `in_progress` → `expired` with `metadata.expiry_reason = patient_no_show` (or `kit_undelivered`).
- `kit_delivered` past N days without `sample_in_transit` → `expired` (`patient_no_return`).
- `sample_in_transit` past N days without `sample_received` → `sample_issue` with substate `sample_lost`.
- `sample_processing` returns invalid notice → `sample_issue` with substate `sample_invalid`.

**Canonical events (extends appendix §28):**

- `lab.order.expired` (timeline; payload includes `expiry_reason`)
- `lab.sample.issue` (timeline; payload includes substate)
- `lab.sample.invalid` (timeline)
- `lab.sample.lost` (timeline)
- `lab.kit.resend_requested` (timeline)
- `lab.kit.resent` (timeline)

**Owner / action matrix (extends appendix §25):**

| Scenario | Owner | Default action |
|---|---|---|
| no-show (PSC) | ops | per-policy reminder via `outbound_jobs`; `expired` after threshold; refund/credit per policy |
| patient never completes lab (kit) | ops | escalation reminder; `expired` after threshold |
| kit lost (in transit to patient) | ops | free re-ship; new kit shipment; `lab.kit.resend_requested` + `lab.kit.resent` |
| sample lost (return transit) | ops | free re-collection; new `lab_orders` with `metadata.replaces_lab_order_id` pointer |
| sample invalid | ops + provider | free re-collection; `metadata.replaces_lab_order_id` |
| vendor outage | platform (per `1H.2`) | retry via `outbound_jobs`; `1G.5` `fulfillment_partner_outage` |
| requisition expired | ops | re-publish or `expired`; per policy |
| duplicate paid order | ops | merge via `metadata.duplicate_of_lab_order_id`; cancel duplicate; refund per `1I.7` |
| refund/credit | finance/ops | `1I` events; `lab_orders.status → cancelled` pre-fulfillment, retained `completed` with `metadata.refunded_post_fulfillment = true` post-fulfillment |

All transitions are auditable and surface in `1L.11` admin overlay.

### 1L.9 Hard retest loop mechanics (cadence is enforced, not descriptive)

When `lab_orders.completed_at` (or equivalent terminal timestamp) + pathway cadence interval is reached, the system **emits and acts**:

- **Cadence source:** `treatment_items.metadata.lab_cadence` per pathway (existing primitive); subscription cadence per `Section 1I` rails when applicable.
- **Cadence examples (org-tunable):**
  - **TRT:** baseline → 8 weeks → quarterly → annual.
  - **GLP-1:** baseline → 12 weeks → biannual.
  - **Wellness/longevity:** annual or semiannual depending on tier.
  - **Female hormones / HRT:** pathway-policy dependent.
- **Trigger sequence:**
  1. Cron / scheduled job (per `outbound_jobs` discipline) inspects upcoming/past-due cadences.
  2. Emit `lab.retest.recommended` (timeline; payload includes `panel_type`, `pathway_code`, `next_due_at`, `prior_lab_order_id`).
  3. Surface to patient portal as a recommended next action; surface to provider continuation review per `1G Stage 6` if program-linked.
  4. **Auto-order path (subscription):** emit `lab.subscription.cycle`; create new `lab_orders` row via the same Scenario A/B path; existing 1I authorization runs per `1I.4`.
  5. **Manual path:** patient checkout creates a new commerce order; `1L.2` Scenario B applies.
- **Idempotency:** retest events keyed on `(prior_lab_order_id, cadence_step)` so re-evaluation doesn't double-emit.
- **Skipped cycles:** `lab.subscription.cycle_skipped` with reason payload (e.g., `patient_paused`, `payment_failed`); surfaces in `1G.5` exception when applicable.

### 1L.10 Standalone vs care-program-attached (clarified flow)

- **Default:** labs are standalone unless explicitly attached to a `care_program` at creation.
- **Labs do not create `care_programs` by default.** A standalone lab purchase does not auto-create a program.
- **Conversion loop (this is important — labs are conversion + monitoring, not just diagnostics):**
  - Lab ordered → result ingested (`patient_diagnostic_reports` + normalized `patient_lab_observations`) → provider/AI-assisted review (per `Section 1G` AI layer + `1L.6` review) → patient release (`released_to_patient_at`) → insight/recommendation surfaced in patient portal → optional `treatment_plan_candidate` (per `1K.10`) → intake completion → program/order creation per `Section 1G` decisioning + `1L.16` gating.
  - The candidate is **provisional**; provider remains decision-maker (`Section 1G` permits + `1G.2` enforcement + `clinical_visits`).
- **Program-attached labs:** `lab_orders.metadata.care_program_id` set at creation; `metadata.lab_context` ∈ `baseline | monitoring | confirmatory`; satisfies program gating per `1L.16`.
- **Operating principle:** labs feed **both** new program acquisition (recommendation) and existing program continuation (monitoring/refill gating) within the same architecture.

### 1L.11 Admin overlay query-level clarity (extends appendix §31)

For each lab-specific saved view in `1G.6.2`, define source tables, key filters, grouping, owner/action field, and PHI guardrail. Aggregate-first; controlled provider dimension only; small-cell suppression applied; PHI drilldown gated.

| View | Source tables | Key filters | Grouping | Owner / action | PHI guardrail |
|---|---|---|---|---|---|
| **Lab queue depth (open `lab_review`)** | `1G.7.6` queue events + `lab_orders` + `patient_diagnostic_reports` | `item_type = lab_review`, not completed | provider × `panel_type` × jurisdiction | `responsible_provider_id` / `queue_owner` per `1L.7` | aggregate; controlled dimension; drilldown requires `can_drill_into_provider_queue` + clinical capability |
| **Aged-by-state-by-panel-type** | `lab_orders` | open status, age buckets `<24h`/`1–3d`/`3–7d`/`>7d` | top-level `status` × `metadata.fulfillment_substatus` × `panel_type` × jurisdiction | ops; severity per `1H.6.1D` | aggregate only |
| **Abnormal-without-review** | `patient_lab_observations` × `patient_diagnostic_reports` | `abnormal_flag` ∈ `low|high|critical`, `reviewed_at IS NULL`, exclude `Acknowledged` per `1H.6.1F` | abnormality severity × `panel_type` × age | `responsible_provider_id` per `1L.7`; auto-escalate per `1G.5` if Critical aged | drilldown requires clinical capability + `SensitiveAccessReason` |
| **Orphan reports** | `patient_diagnostic_reports` | `lab_order_id IS NULL`, `diagnostic_kind = 'lab'`, orphan_state per `1L.5` | partner × `extracted_at` age × `orphan_state` | ops manual reconciliation queue per `1L.5` | aggregate only; drilldown reveals partner-supplied PHI per capability |
| **Stuck in-person fulfillment** | `lab_orders` | `metadata.fulfillment_substatus` ∈ `requisition_pending|requisition_published|awaiting_collection`, age past SLA | partner × jurisdiction × `panel_type` | ops + platform per `1H.2` | aggregate only |
| **Stuck at-home fulfillment** | `lab_orders` | `kit_fulfillment_status` ∈ `kit_queued|kit_shipped|kit_delivered|sample_in_transit`, age past SLA | partner × jurisdiction × `panel_type` | ops + platform | aggregate only |
| **Sample invalid/lost recovery** | `lab_orders` | substate ∈ `sample_lost|sample_invalid`, no `metadata.replaces_lab_order_id` | partner × `panel_type` | ops triage; `1G.5` exception | aggregate only |
| **CoR-preferred review backlog** | `lab_orders` × `1G.7.6` events × `care_program` | `lab_review` items currently CoR-preferred per `1G.9.4`, unstarted past continuity SLA per `1G.9.6` | provider (CoR) × `panel_type` | CoR or fallback per `1G.9.6` | aggregate only |
| **Mapping coverage gaps** | `patient_lab_observations` + category-mapping spec per appendix §24 | observations falling to `general` bucket per partner per window | partner × code | engineering / clinical informatics | aggregate only |

**Trigger ties:** sustained Action-needed / Critical → `1G.5` exception with classification per `1H.6.1E` (typically `provider_capacity_constraint`, `provider_decision_quality`, `fulfillment_partner_outage`, or `fulfillment_delay_vendor`). CoR transitions for resulting reassignments use `abnormal_lab_followup` per `1G.9.13`.

### 1L.12 Patient display handoff

Patient does **not** see raw diagnostic reports until `released_to_patient_at` is set per appendix §11.

**Once released, patient sees:**

- **Panel view** (primary) — each `lab_orders` renders as a card; analytes from `patient_lab_observations` grouped under the parent `patient_diagnostic_reports`.
- **Category view** (secondary) — derived rollups via the **active versioned category mapping** per appendix §24 (`lib/labs/category-mappings/<version>.json`).
- **Abnormal flags** — high/low/critical badges from normalized `abnormal_flag` per `1L.6`.
- **Trend comparison** — per analyte (same `observation_code`) across time; computed on read; no separate trend table.
- **Plain-language insights** — derived from versioned `lib/labs/insights/<version>.json` per appendix §24; each rendered insight carries `mapping_version` + `insight_version` for reproducibility.
- **"Not a diagnosis" copy** — provisional indicator language; provider note surfaces when present.

**Hard rules:**

- Patient-facing category view **never** reads ad-hoc per-row `metadata.category` from observations. The mapping is the single source of truth (per appendix §24 `Hard rule`).
- When structured observations are incomplete (e.g., narrative-only diagnostic, semi-structured imaging), patient view falls back to a curated `report_payload` summary (per `1L.3`) — **never** raw vendor JSON.
- AI-generated insight copy obeys `1H.4.2` constraints when the consumer is non-clinical.

### 1L.13 Data flow from result value to dashboard/reporting (canonical)

```
Vendor payload (lab_partner / at_home_kit / future imaging_center / external_upload / device)
  → ingest job (idempotent on report dedupe key per appendix §22)
  → patient_diagnostic_reports row insert
        ├── lab_order_id set if known (else null = orphan_unmatched per 1L.5)
        ├── report_payload retained (per 1L.3 — semi-structured + raw vendor envelope)
        └── source_attachment_path for large blobs
  → for each analyte in payload:
        normalization (1L.6)
          → raw_code → observation_code (LOINC or partner_native)
          → raw_value → normalized_value
          → raw_units → canonical_units
          → raw_abnormal_flag → standardized abnormal_flag
          → reference_range normalization
        → patient_lab_observations row insert (with raw_* in metadata for audit)
  → lab_orders.first_result_ingested_at set; status → result_received per 1L.4
  → patient_timeline_events: lab.result.received
        ├── (if any abnormal_flag) lab.result.abnormal_flagged
        │     → 1G.7.6 queue.item.created (item_type = lab_review)
        │           → provider review per 1G.9.4 (CoR-preferred or urgent override)
        │                 → patient_diagnostic_reports.reviewed_at set
        │                       → status → reviewed
        │                       → patient_timeline_events: lab.result.reviewed
        │                       → (optional) released_to_patient_at set
        │                             → status → released
        │                             → patient_timeline_events: lab.result.published
        │                                   → patient portal display per 1L.12
        │                                         → category mapping (active version)
        │                                         → trend comparison (computed on read)
        │                                         → insight scoring (active insight version)
        │                                         → "not a diagnosis" copy
        │                                   → 1H.6 daily ops dashboard slices
        │                                   → 1H.7 reporting queries (provider × panel_type × time × jurisdiction)
        │                                   → retest cadence evaluation (1L.9)
        │                                         → lab.retest.recommended
        │                                         → optional auto-order via subscription cycle
        │                                         → optional treatment_plan_candidate (1K.10)
        │                                               → care_program creation per Section 1G
        └── (no abnormal flag) → routine review per CoR + SLA fallback (1G.9.6)
              → same downstream chain
```

Examples for specific analytes (Cr, WBC, TG, A1c, testosterone, estradiol) follow identical flow; the only differences are `observation_code` (LOINC mapping), category bucket (per appendix §24), and pathway-specific cadence (per `1L.9`).

### 1L.14 Vendor partner adapter contract (formerly §32)

Adding a new lab vendor stays uniform. Each adapter satisfies a minimum contract:

- **Idempotent submit:** `submit_order(lab_order)` is idempotent keyed on `(vendor_partner_id, lab_order.id)`; replays are safe.
- **Ack handling:** adapter parses partner ack into a normalized shape (`partner_order_ref`, `accepted_at`, optional `requisition_url`); writes back to `lab_orders.metadata.partner_order_ref` and triggers state transition per `1L.4`.
- **Result push/pull:** adapter supports either inbound webhook (push) or scheduled poll (pull); both follow `1H.3` reconciliation discipline. Inbound results are dedup-keyed per `1L.5` binding rules.
- **Dedupe key contract:** `(vendor_partner_id, partner_result_id)` for report-level; `(diagnostic_report_id, observation_code, observed_at)` for observation-level.
- **Error codes:** adapter normalizes partner errors into a small enum: `vendor_unavailable`, `invalid_request`, `unsupported_panel`, `unsupported_jurisdiction`, `sample_invalid_partner_reported`, `vendor_internal_error`. Errors write `audit_events` and trigger `1G.5` exception with `fulfillment_partner_outage` / `integration_or_webhook_failure` per `1H.6.1E`.
- **Panel mapping:** adapter declares supported `panel_type`s and partner-side codes; mapping is versioned alongside the adapter.
- **Capability:** adapter execution runs as system actor; admin replay of failed submissions requires `can_replay_webhook` / equivalent per `1H.2.3`.
- **Onboarding gate:** new adapters cannot ship without normalization mapping coverage per `1L.6` for their declared panels.

### 1L.15 Patient-facing lab communications (formerly §33)

Apply the same tone/template discipline as `1G.9.14a` (CoR comms) to lab-specific patient messaging.

- **Approved templates (versioned, content-managed, clinical/compliance-reviewed):**
  - "Your kit is on the way." / "Your kit has been delivered." / "We've received your sample."
  - "Your results have arrived. Your care team is reviewing them."
  - "Your results are ready to view."
  - "A clinician on your care team has flagged a result for follow-up."
  - "Your care team recommends a follow-up step." (with template-mapped action)
- **Channel + cadence:** uses `outbound_jobs` per `1G.3` send policy; classified as `operational` for routine status (kit shipped, results ready) and `clinical_optional` / `clinical_required` for follow-up actions per provider drafting.
- **Suppression + de-dup:** repeated status updates collapse per `1G.3(b)`; non-negotiable safety touches (per `1G.3(a)`) bypass throttles when org policy says so.
- **Tone rules (apply `1G.9.14a` discipline):** never expose internal vocabulary (`orphan_unresolvable`, `sample_invalid`, `sample_in_transit`, etc.) verbatim; never name vendor outage as a patient message; frame as care-team continuity.
- **Lint at send path:** lightweight check rejects forbidden vocabulary in patient-facing copy (warn → enforce per org rollout, mirroring `1G.9.14a`).
- **Audit:** every send writes `outbound_jobs` row + `audit_events` (template id, lint outcome, sender) + `patient_timeline_events` pointer.

### 1L.16 Continuation gating tie-in (locked)

Refill / dose / continuation decisions on `treatment_items` cannot bypass the latest required panel for the relevant `lab_context`.

- **Gate semantics:** `treatment_items` continuation/refill mutations require, for the relevant pathway, that the **latest required `lab_context`** (e.g., `baseline` for first prescription; `monitoring` for ongoing) has a `patient_diagnostic_reports.reviewed_at` set within the cadence freshness window per `1L.9`.
- **Enforcement path:** the same server mutation surface that runs `1G.2` active safety enforcement also runs the lab-gate assert; failure returns a stable reason code (e.g., `lab_gate_unmet_baseline_missing`, `lab_gate_unmet_monitoring_stale`).
- **Read source:** `loadPatientCaseSafetySnapshot` per `1J.10` includes lab-gate context (latest reviewed `lab_context` per pathway, freshness within cadence) so high-risk mutations consult the same joined read.
- **Override:** documented override per `1G.7.3` admin override discipline + `reasonCode` + audit; never silent. Override is allowed only for the operational state of the gate, **never** for clinical eligibility (consistent with `1G.7.3`).
- **Patient-visible surfacing:** when continuation is blocked by lab gate, patient communication uses approved templates per `1L.15` ("Your care team needs an updated lab before continuing your plan.") — never internal codes.
- **Reporting:** lab-gate breach attempts (denied mutations) feed `1H.7` queries and `1H.6.1E` classification (`provider_decision_quality` if recurring; `compliance_or_policy_change` if policy update needed).
- **Patient-state-observation gate (parallel to lab-gate):** when continuation policy depends on a recent **patient-reported trackable** (e.g., a recent weight for GLP-1 dose adjustment, a recent symptom score for HRT continuation, dose-tolerance confirmation for ongoing therapy), the same gate also reads the latest non-superseded `patient_state_observations` row for the relevant `field_name` within the cadence freshness window. Stable reason codes mirror the lab-gate format (e.g., `state_gate_unmet_weight_stale`, `state_gate_unmet_symptom_score_missing`). Read source: `loadPatientCaseSafetySnapshot` per `1J.10` includes patient-state context per `Section 1M.8`.

### 1L.17 Cross-links (foundation contract)

**Section 1E** (commerce/catalog), **Section 1F** (provider-collected encounters when applicable), **Section 1G** (case ownership, permits, AI assist, exception handling, oversight), **1G.4 / 1G.4.1** (jurisdiction routing + multi-state runtime), **1G.5** (exception handling for lab failures), **1G.6 / 1G.6.2** (workspace + admin overlay), **1G.7 / 1G.7.5b / 1G.7.6 / 1G.7.7a** (routing, SLA enforcement, queue lifecycle, coverage-gap view), **1G.8 / 1G.8.7** (provider workspace + lab review drawer), **1G.9 / 1G.9.4 / 1G.9.13** (CoR continuity, lab follow-up routing, transfer reason codes), **1H.1** (operational trace), **1H.2** (platform ownership for vendor outages), **1H.3** (reconciliation, drift), **1H.6 / 1H.6.1D** (daily metrics + baseline severity), **1H.7 / 1H.7.6a** (reporting + continuity-health slice), **1I / 1I.1 / 1I.2 / 1I.4 / 1I.6 / 1I.7** (kit fee, if-prescribed authorization, subscription rails, reconciliation, refunds), **1J / 1J.10 / 1J.11** (identity, safety preflight, abuse), **1K / 1K.7 / 1K.8 / 1K.10** (intake routing to labs, lab requirement modules, treatment_plan_candidate), **Section 1N** (AI assistive layer for ingest summarization + provider drafting), **Lab Appendix §1–§31** (detailed mechanics retained as the implementation reference), `lab_orders`, `patient_diagnostic_reports`, `patient_lab_observations`, `commerce_orders` / `treatment_orders`, `outbound_jobs`, `patient_timeline_events`, `audit_events`, `staff_profiles`.

### 1L.18 Implementation guardrails (enforced; non-optional)

These are **not guidelines**. These are **hard system constraints** for the diagnostics + lab testing layer. Each guardrail is enforced server-side at the named mutation surface; violations block deployment or runtime, not warnings.

**1) Mutation discipline.**

- All mutations to `lab_orders`, `patient_diagnostic_reports`, and `patient_lab_observations` MUST go through **explicit service-layer functions** (the named mutation surfaces in `1L.4a`, e.g., `createLabOrder`, `publishLabRequisition`, `reviewLabResult`, `releaseLabResultToPatient`, `recordLabObservations`).
- **No direct DB writes** from routes, scripts, or ad-hoc tools.
- Every mutation MUST:
  - run a `requireCapability` check (per `1D / 1D.1`),
  - emit `audit_events` (actor, capability used, prior + new state, reason where applicable),
  - emit `patient_timeline_events` when patient-impacting.
- **Allowed actors:**
  - **system** (webhooks, cron, partner adapters, ingest jobs) — actor identity recorded as `actor_kind = system` with `actor_subkind` per `1L.4a`.
  - **provider** (review, release, dose-driving decisions).
  - **ops/admin** (reconciliation, overrides, manual binding, capacity adjustments).
- **Forbidden:** out-of-band updates — ad-hoc SQL scripts, prod console fixes, service-role human browsing, or any route that skips `requireCapability` + `audit_events`. Per Intent + `1J.10` enforcement: failed audit = block-or-page, never log-only.

**2) State machine enforcement.**

- `lab_orders.status` transitions are enforced **server-side**. The full legal-transition graph in `1L.4` is the source of truth.
- **Invalid transitions are rejected** with a stable error code; never silently corrected, never auto-coerced.
- All transitions go through a **single transition function** (or a small named set per actor class) that runs the legal-transition check, capability check, audit, and timeline emission as one atomic operation.
- **Substate updates cannot contradict top-level status.** If `metadata.fulfillment_substatus` would imply a top-level status the order doesn't have, the substate write is rejected (e.g., setting `sample_received` when top-level is `cancelled` or `expired`).
- Forbidden transitions explicitly named in `1L.4a` (`created → reviewed`, `result_received → released` skipping review, terminal-to-active, any unlisted transition) MUST raise the same hard error.

**3) Observation write gate.**

- `patient_lab_observations` rows can ONLY be written via the **normalization pipeline** per `1L.6`.
- **Required preconditions before write:**
  - normalization applied (`observation_code`, `normalized_value`, `canonical_units`, standardized `abnormal_flag`),
  - dedupe check passed (per `(diagnostic_report_id, observation_code, observed_at)`),
  - `diagnostic_report_id` present (NOT NULL).
- **Direct writes, backfills from CSV, UI-driven create/edit, or any path that bypasses the pipeline are forbidden.**
- **Normalization failure handling (per `1L.6`):**
  - persist `report_payload` on `patient_diagnostic_reports`,
  - do NOT block report ingestion,
  - flag for ops review via mapping-coverage queue (per `1L.11`).
- **Privileged correction** (e.g., fixing a wrong analyte value) requires a privileged capability + `SensitiveAccessReason` + audit trail; never silent edits.

**4) Report payload contract.**

- `patient_diagnostic_reports.report_payload` MUST always exist for vendor-originated results. Lossy ingestion is forbidden.
- **Minimal structure (non-breaking, extensible):**
  - `vendor_identifier` — partner id (mirrors `metadata.vendor_partner_id` for cross-reference).
  - `received_at` — timestamp the system received the result.
  - `raw_result` — full vendor envelope (JSON or storage reference for large blobs via `source_attachment_path`).
  - `parsed_sections` (optional) — structured extracts the ingest pipeline produced (analyte rows, narrative impressions, imaging refs).
  - `partner_namespace` — for code-system disambiguation per `1L.6`.
  - `ingest_warnings` (optional) — array of normalization warnings per `1L.6`.
- **Raw vendor data is preserved** — no truncation, no transformation that loses the original. Future re-normalization (with new mapping versions) MUST be possible from the retained raw payload.
- **Structured observations are derived**, not a replacement for `report_payload`. Both layers always coexist when vendor data is structured.

**5) Binding immutability.**

- `patient_diagnostic_reports.lab_order_id` becomes **immutable** after the initial bind (per `1L.5`).
- **Re-link requires:**
  - **privileged capability** `can_correct_lab_order_link`,
  - `SensitiveAccessReason`,
  - **full audit trail** (prior link, new link, reason, actor).
- **No silent reassignment** — even system actors must record the privileged correction path; webhook handlers cannot re-link a previously linked report.

**6) Ownership requirement.**

- Every `lab_orders` row MUST have an accountable owner at all post-`created` states:
  - `responsible_provider_id` (specific provider) **OR**
  - `metadata.queue_owner` (named pool / team).
- **"Abnormal without review" cannot exist without an owner.** The `1L.7` hard rule applies: any `patient_lab_observations` row with `abnormal_flag` ∈ `low | high | critical` whose parent report has `reviewed_at IS NULL` MUST be resolvable to an owner; if not, the case surfaces in the coverage-gap view per `1G.7.7a` and `1L.11`, and ops/admin must remediate (assign provider, expand pool, escalate).
- **Missing-ownership rows MUST surface in the admin overlay** (`1G.6.2` lab-specific saved views per `1L.11`); no silent ownerless work.

**7) Vendor adapter gate.**

- **No new vendor integration may go live without:**
  - normalization mappings defined per `1L.6` for all panels the adapter declares,
  - `panel_type` mapping defined for every panel the adapter supports,
  - dedupe keys validated (`(vendor_partner_id, partner_result_id)` for reports; `(diagnostic_report_id, observation_code, observed_at)` for observations) — including a test for replay safety.
- **Adapter MUST:**
  - be idempotent on submit and on inbound result handling per `1I.6`,
  - follow inbound/outbound job discipline per `1H.3` (durable de-dupe, at-most-once effect, replay-safe handlers).
- **Violations BLOCK deployment**, not produce warnings. Adapter onboarding gate is a hard CI/release check, not advisory.

**8) Expiration + recovery enforcement.**

- Stale `lab_orders` MUST auto-transition to `expired` or `sample_issue` per `1L.8` thresholds via a scheduled system actor; **no order sits indefinitely**.
- All recovery paths MUST:
  - emit canonical events (`lab.order.expired`, `lab.sample.issue`, `lab.sample.invalid`, `lab.sample.lost`, `lab.kit.resend_requested`, `lab.kit.resent`),
  - assign ownership (per `1L.7`).
- **No silent dead states.** Anything past threshold without auto-transition is a bug; `1G.5` exception fires (`fulfillment_delay_vendor` / `fulfillment_partner_outage` / etc.).

**9) Retest loop enforcement.**

- Retest cadence MUST be **system-triggered** (cron/event per `1L.9`), not manual-only.
- `lab.retest.recommended` MUST be emitted when due (cadence threshold reached on `lab_orders.completed_at` + pathway `lab_cadence`).
- **Idempotency** prevents duplicate retest creation — keyed on `(prior_lab_order_id, cadence_step)`; replays do not double-emit or double-create downstream `lab_orders`.

**10) Patient display discipline.**

- Patient UI MUST:
  - **NEVER read raw vendor JSON directly** from `report_payload`.
  - ONLY use:
    - **normalized observations** (`patient_lab_observations`) when available, OR
    - **curated `report_payload` summary** (server-side rendered, template-driven) per `1L.12`.
- **Ad-hoc `metadata.category` usage on observations is forbidden.** Patient-facing category view is governed by the active versioned category mapping per appendix §24 + `1L.12`. Per-row category overrides do not exist.
- AI-generated insight copy obeys `1H.4.2` constraints when the consumer is non-clinical.

**Enforcement summary:**

- These guardrails are **runtime and CI-enforced**, not advisory.
- Where the codebase cannot yet enforce a guardrail mechanically, the gap is documented as an implementation deficit per `1J.10d` (audit-return-gap pattern) and triaged with a target enforcement date — **never** treated as accepted drift.
- Drift detection (e.g., raw observation writes that bypass normalization) feeds `1H.6.1E` root-cause classification (typically `system_bug_or_defect` or `compliance_or_policy_change`) and admin overlay alerts per `1L.11`.

### 1L.19 Future diagnostic modality onboarding (extensibility contract; non-lab; extension only)

When a future diagnostic modality (imaging, external_upload, device data, stool/microbiome, future modalities) plugs into this layer, it MUST follow the same pipeline shape and minimum contract. **No parallel diagnostic ingestion systems** in this layer; future modalities are added via additive metadata + the same adapter pattern, not by spinning up a parallel layer.

**Minimum additive metadata to plug in (no new tables required for v1 onboarding):**

- `metadata.diagnostic_source_type` on `lab_orders` and/or `patient_diagnostic_reports` per `1L.0` (e.g., `imaging_center`, `external_upload`, `device`).
- `metadata.modality_subtype` for finer typing (e.g., `dexa`, `mri`, `ultrasound`, `ecg`, `cgm_export`, `at_home_microbiome`, `outside_lab_pdf`).
- `metadata.partner_namespace` (when a partner is involved) for code-system disambiguation per `1L.6`.
- `metadata.report_payload` per `1L.3` for semi-structured / narrative output (always retained; never required to fully decompose into structured observations).
- For modalities producing structured analytes, the same normalization rules from `1L.6` apply (raw_code → observation_code, raw_value → normalized_value, etc.).

**Adapter contract (mirrors `1L.14` minimum contract):**

- **Idempotent submit** keyed on `(diagnostic_source_type, modality_subtype, lab_order.id)`.
- **Ack handling** writes `lab_orders.metadata.partner_order_ref` and triggers `1L.4` transitions; substates may extend per modality (e.g., `awaiting_imaging_appointment`, `imaging_in_progress`, `report_pending_radiologist`) but must roll up to a top-level `lab_orders.status` value from `1L.4`.
- **Result push/pull**, dedup-keyed per `1L.5` binding rules.
- **Normalized error enum** extends `1L.14` with modality-specific codes when needed (e.g., `imaging_center_unavailable`, `image_quality_insufficient`, `device_data_unparseable`); errors still route through `1G.5` exception with classification per `1H.6.1E`.
- **Onboarding gate (mandatory):** new modalities cannot ship without:
  - declared `diagnostic_source_type` and `modality_subtype` values (added via map/repo review like `Capability` and `panel_type`),
  - normalization mapping coverage per `1L.6` for any structured analytes the modality produces,
  - patient-facing template additions per `1L.15` (e.g., "Your imaging is scheduled"),
  - admin overlay view extension per `1L.11` (modality-specific filters where useful),
  - capability additions per `1D / 1D.1` if the modality requires distinct review capability (e.g., `can_review_imaging_result`).

**Reuse of existing infrastructure (no new layers):**

- **Routing + ownership** per `1G.7 / 1G.7.5b`; modality-specific reviewer capability is a `1D` capability addition, not a new ownership model.
- **CoR continuity** per `1G.9.4` extends to imaging follow-up, external uploads, and device data without modification — the `lab_review` queue item type generalizes to `diagnostic_review` once additional modalities ship; until then `lab_review` is the v1 type.
- **Patient display** per `1L.12` extends with modality-specific renderers (e.g., DEXA scan visualization) but always falls back to `report_payload` per `1L.3` when structured decomposition is incomplete.
- **Reporting** per `1H.7` slices by `diagnostic_source_type` and `modality_subtype` using safe dimensions; aggregate-only.
- **Continuation gating** per `1L.16` extends to non-lab modalities by treating the same `reviewed_at` + freshness contract on the new `diagnostic_source_type` (e.g., a recent DEXA reviewed within cadence may be required for an osteoporosis-related continuation).

**What NOT to do (rejected):**

- Do not create a parallel `imaging_orders` / `device_data_orders` / `external_uploads` table. Reuse `lab_orders` (renamed conceptually to "diagnostic orders" if needed at a future repo refactor; v1 keeps the `lab_orders` table name).
- Do not invent a parallel result-ingestion path. Reuse `patient_diagnostic_reports` + `patient_lab_observations` with `diagnostic_source_type` / `modality_subtype` discriminators.
- Do not invent a parallel patient display surface. Extend `1L.12` renderers; never create a separate "imaging portal" or "device portal" with different capability rules.
- Do not invent a parallel review queue. Extend `1G.7.6` queue item types and `1G.8.7` lab review drawer rather than creating a separate "imaging review drawer" with its own ownership and SLA rules.
- **Do not bypass `1L.18` guardrails** — every modality obeys mutation discipline, state machine enforcement, observation write gate, report payload contract, binding immutability, ownership requirement, vendor adapter gate, expiration + recovery, retest loop enforcement (where applicable), and patient display discipline.

**Explicit scope statements (mandatory):**

- **Non-lab diagnostics are NOT fully implemented in v1.** Labs are the primary implemented diagnostic type per `1L.0`.
- This section defines **only how non-lab diagnostics plug in later** — not their full design. Imaging viewers, device-data parsers, and external-upload UIs are not in scope here.
- **No OCR or AI ingestion pipelines should be designed in this section.** When/if OCR or AI-based extraction is added (e.g., for outside-lab PDF uploads), it must be defined separately under `Section 1N` AI assistive layer + this section's adapter contract — never as a freestanding ingestion product.

*Goal:* the next modality (DEXA, MRI, external lab PDF upload, CGM export, etc.) plugs in via additive metadata + an adapter that satisfies the same contract. The pipeline shape, ownership rules, patient display discipline, reporting, and continuation gating are unchanged. Section 1L stays the canonical foundation; **no parallel systems**, **no guardrail bypass**.

### 1L.20 Lab result triage + provider review + release flow (operational; minimal v1)

*Goal:* a clean, scalable flow from result ingestion → triage → provider interaction → patient release, aligned with the `1L.4` state machine, `1L.18` guardrails, and `1G.7` provider routing. Deterministic; no AI required for v1 classification; no new tables.

**Part 1 — Canonical result flow**

```
lab result received (vendor inbound)
  → patient_diagnostic_reports created (with report_payload per 1L.18 #4)
  → normalization pipeline (1L.6) per analyte
  → patient_lab_observations created (write gate per 1L.18 #3)
  → classification (NORMAL / BORDERLINE / ABNORMAL — Part 2)
  → routing decision (Part 3)
  → provider review (if required) (Part 4)
  → released_to_patient_at set (Part 5)
  → patient display enabled per 1L.12
```

**Tie to existing state machine (`1L.4`):**

`in_progress → result_received → reviewed → released → completed`

(`reviewed` is auto-set for NORMAL when org-protocol allows auto-release; otherwise set by provider per `1L.4a`.)

**Part 2 — Triage classification layer (rule-based; deterministic)**

Each `patient_lab_observations` row is evaluated against:

- **reference range** (from normalized data per `1L.6`),
- **critical thresholds** (org-policy + partner-supplied criticals when present),
- **change vs prior** (latest prior `observation_code` for the same patient, when one exists).

Three classes (computed per observation; rolled up to a report-level class):

| Class | Definition |
|---|---|
| **NORMAL** | All observations within acceptable range; no concerning trend (delta vs prior within bounds). |
| **BORDERLINE** | Mild deviation outside reference range OR a notable change vs prior; not immediately dangerous; requires human awareness. |
| **ABNORMAL / ACTIONABLE** | Outside safe thresholds; any critical marker present; pattern requiring intervention. |

**Report-level rollup rule:** report class = max severity across its observations (any ABNORMAL → report ABNORMAL; else any BORDERLINE → BORDERLINE; else NORMAL).

**Storage (additive metadata; no new table):**

- `patient_diagnostic_reports.metadata.triage_class` ∈ `normal | borderline | abnormal`.
- `patient_diagnostic_reports.metadata.triage_version` (versioned classification ruleset; per `1L.6` discipline).
- `patient_diagnostic_reports.metadata.classified_at` (timestamp).

**Hard rules:**

- Classification is **deterministic and reproducible**: same inputs + same `triage_version` → same output.
- **No AI required** for v1 classification. AI may later assist provider review/notes (per Section 1G AI layer + Section 1N), but never authority and never replaces deterministic classification.
- Classification rules are versioned (file `lib/labs/triage/<triage_version>.json`); changes require map/repo review like `1L.6` mappings and `1H.6.1E` classifications.

**Part 3 — Routing logic**

| Triage class | Routing |
|---|---|
| **NORMAL** | Auto-mark `metadata.review_not_required = true` (protocol-backed; only when the active `triage_version` declares the panel as auto-releasable). Proceed to release per Part 5. |
| **BORDERLINE** | Enqueue in provider `lab_review` queue (per `1G.7.6` `queue.item.created` + `1G.9.4` lab follow-up routing); provider review required before release. Standard SLA per `1G.7.5b`. |
| **ABNORMAL** | Enqueue in provider `lab_review` queue with **high priority**; provider review **REQUIRED**; routes to fastest eligible reviewer per `1G.9.4` urgent-override rule (continuity does not delay urgent care). Triggers `lab.result.abnormal_flagged` per `1L.13`. |

**Ownership (per `1L.7` + `1L.18` #6):** every BORDERLINE / ABNORMAL queue item carries `responsible_provider_id` (CoR-preferred per `1G.9.4`) or `metadata.queue_owner` for pool fallback. Coverage gaps surface in `1L.11` and `1G.7.7a`.

**Part 4 — Provider interaction (minimal v1)**

**Provider sees (per `1G.8.7` lab review drawer):**

- the `lab_orders` (panel, ordering provider, dates, partner),
- categorized observations (active versioned category mapping per appendix §24),
- abnormal flags + critical markers,
- trend vs prior per `1L.12` (when prior `observation_code` exists),
- curated `report_payload` summary (server-rendered per `1L.18` #10) — never raw vendor JSON,
- AI suggestions (when `patient_chart_ai_reviews` enabled) — assistive only per Section 1G AI layer.

**Provider can:**

- **Mark reviewed** — sets `patient_diagnostic_reports.reviewed_at` + `reviewed_by_staff_id` per appendix §11; transitions `lab_orders.status: result_received → reviewed` per `1L.4a`.
- **Optionally add a note** — structured (e.g., follow-up code) or minimal free-text (length-bounded, no PHI in payload metadata; same discipline as `1K.4` bounded free-text).
- **Approve release** — sets `released_to_patient_at` per appendix §11; transitions `lab_orders.status: reviewed → released` per `1L.4a`.
- **Trigger follow-up action (optional)** — repeat lab (new `lab_orders` row), `treatment_plan_candidate` per `1K.10`, dose change via `treatment_items` mutation (subject to `1G.2` enforcement and `1L.16` continuation gating), referral / `1G.5` exception escalation.

**Hard rules:**

- Provider **cannot modify raw observations** — `patient_lab_observations` are immutable post-write per `1L.18` #3; corrections require privileged path with capability + `SensitiveAccessReason` + audit.
- Provider **cannot bypass `1L.18` guardrails** (mutation discipline, state machine, write gate, report payload contract, binding immutability, ownership, patient display).
- Every review action emits `audit_events` (actor, capability used, prior + new state) + `patient_timeline_events` (`lab.result.reviewed` per appendix §28 + `1L.13`).

**Part 5 — Release logic**

Release happens when:

| Triage class | Release behavior |
|---|---|
| **NORMAL** | Auto-release when active `triage_version` declares the panel as auto-releasable (protocol-backed). Auto-release is a **system actor** transition per `1L.4a` (`reviewed → released` immediately, with `reviewed_at` set by the system actor and `metadata.review_not_required = true`); audit + timeline emitted as for any other transition. |
| **BORDERLINE** | Provider marks reviewed AND approves release (Part 4). |
| **ABNORMAL** | Provider marks reviewed AND approves release (Part 4); release may be deferred when the provider chooses a follow-up path (e.g., schedule visit before disclosure) per org policy. |

**On release (any path):**

- Set `patient_diagnostic_reports.released_to_patient_at` per appendix §11.
- Transition `lab_orders.status → released` per `1L.4a` (and onward to `completed` when org policy treats `released` as terminal-ready).
- Emit canonical events:
  - `lab.result.released` (timeline, payload references `lab_order_id`, `diagnostic_report_id`, `triage_class`).
  - `lab.result.available_to_patient` (timeline, payload includes `released_to_patient_at`).
- Patient display becomes available per `1L.12` (panel + category views, trends, insights, all gated server-side).

**Hard rule (per `1L.18` #2):** release cannot occur without `reviewed_at` set; the state machine rejects `result_received → released` directly. Auto-release (NORMAL path) sets both atomically through the same transition function.

**Part 6 — Metrics + timestamps (feeds `1H.6` / `1H.7`)**

**Required timestamps (additive, on `patient_diagnostic_reports.metadata` and/or columns where they already exist):**

- `result_received_at` — when ingest committed (mirrors `lab_orders.first_result_ingested_at`).
- `classified_at` — when `triage_class` was set (per Part 2).
- `queued_for_review_at` — when `1G.7.6` `queue.item.created` fired (BORDERLINE / ABNORMAL only).
- `reviewed_at` — provider review (or system auto-review for NORMAL).
- `released_to_patient_at` — release.

**Derived metrics (queryable in `1H.7` per safe dimensions; surfaceable in `1H.6` daily dashboard):**

- **time_to_classification** = `classified_at − result_received_at`.
- **time_to_review** = `reviewed_at − queued_for_review_at` (BORDERLINE / ABNORMAL only).
- **time_to_release** = `released_to_patient_at − result_received_at` (end-to-end SLA; NORMAL auto-release path tightest).
- **% auto-released vs provider-reviewed** = share of releases where `metadata.review_not_required = true`.
- **% abnormal** = share of reports where `triage_class = abnormal` over a window.
- **% borderline** + **% normal** for full distribution.
- **provider review SLA breach rate** for `lab_review` items (per `1G.7.5b`).

**Tie-ins:**

- These metrics feed `1H.6` daily operator dashboard (Operations + Friction/Risk categories) with severity per `1H.6.1D` and ownership per `1H.6.1C`.
- They are queryable as historical reports in `1H.7` using safe dimensions (provider via controlled dimension per `1H.7.2`, `panel_type`, jurisdiction, `triage_class`, time window).
- Sustained Action-needed/Critical on `time_to_review` or `% auto-released` shifts trigger `1G.5` exception with classification per `1H.6.1E` (typically `provider_capacity_constraint`, `provider_decision_quality`, or `system_bug_or_defect` if classification version drift).

**Part 7 — Notification hook (minimal; do not overdesign)**

Event triggers only — UX copy and templates live in `1L.15`.

**Events (timeline + downstream `outbound_jobs` per `1G.3` send policy):**

- `lab.result.received` — fires on ingest commit; downstream `outbound_jobs` for "kit/sample received" status when applicable per `1L.15`.
- `lab.result.requires_review` — fires on `queue.item.created` for BORDERLINE / ABNORMAL; internal-only by default (no patient-facing send unless org policy).
- `lab.result.released` — fires on release; downstream `outbound_jobs` for "results ready" patient-facing send per `1L.15`.

**Hard rules:**

- Each event triggers `outbound_jobs` per `1G.3` send policy (non-neg vs negot, fatigue caps, suppression, disengaged stop).
- **Do NOT** design messaging templates in detail here — templates live in `1L.15` (versioned, content-managed, clinical/compliance-reviewed).
- **Do NOT** define tone/copy beyond referencing `1L.15` (and through `1L.15`, the `1G.9.14a` discipline).
- Internal-only events do not enqueue patient-facing sends.

**Part 8 — Guardrail compliance (per `1L.18`)**

Every action in this flow respects `1L.18` constraints:

- **No direct observation writes** — `patient_lab_observations` only via `1L.6` normalization pipeline (per `1L.18` #3).
- **No bypassing the state machine** — all `lab_orders.status` transitions through the `1L.4a` named mutation surfaces; invalid transitions rejected (per `1L.18` #2).
- **No raw payload exposure to patient** — patient UI reads normalized observations or curated `report_payload` summary only (per `1L.18` #10).
- **No missing ownership** — every BORDERLINE / ABNORMAL item carries `responsible_provider_id` or `metadata.queue_owner` (per `1L.18` #6); missing-ownership cases surface in admin overlay per `1L.11`.
- **All actions audited** — every classification, queue placement, review, release, and follow-up writes `audit_events` and (when patient-impacting) `patient_timeline_events`.
- **Binding immutability preserved** — Part 4 actions never re-link reports per `1L.18` #5.
- **Auto-release discipline** — NORMAL auto-release only fires when active `triage_version` declares the panel as auto-releasable; system actor identity recorded; never silent.

*Goal:* a clean, deterministic, auditable result triage → review → release flow that scales, integrates with existing routing/SLA/reporting, and never bypasses the foundation guardrails.

### 1L.21 Metrics + reporting contract (binding to 1H; non-optional)

*Goal:* ensure all lab-related flows are first-class, queryable, and consistent with `1H.6` (daily metrics) and `1H.7` (reporting). This is a **binding contract**, not guidance — labs must be fully observable, measurable, and actionable within the unified metrics layer with no per-surface variation, no parallel analytics, and no silent drift.

**1) Canonical metric source (no parallel analytics).**

All lab-related metrics MUST be derived from existing rows + events:

- `lab_orders` (lifecycle, fulfillment substates, ownership, jurisdiction context per `1L.22`).
- `patient_diagnostic_reports` (triage class, review/release timestamps, orphan state, payload provenance).
- `patient_lab_observations` (normalized analytes, abnormal flags, normalization status).
- `audit_events` and `patient_timeline_events` when an event-level signal is needed.

**No separate analytics tables, no duplicated metric storage, no parallel "lab metrics" SoT.** Caching read models per `1H.6.3` allowed when recomputable; never an independent fact.

**2) Required metric coverage (labs MUST appear in `1H.6` daily dashboard).**

The following are **non-optional** in the daily operator dashboard, integrated into the existing `1H.6.1` categories:

| Metric | Source (per Rule 1) | `1H.6.1` category |
|---|---|---|
| **Lab volume** (orders created per day) | `lab_orders.created_at` | Operations |
| **Fulfillment success rate** (`completed` vs `expired` + `sample_issue`) | `lab_orders.status` per `1L.4` | Fulfillment |
| **Result turnaround time** (`result_received_at − created_at`) | `lab_orders` + `patient_diagnostic_reports` | Operations |
| **Review latency** (`reviewed_at − result_received_at`) | `patient_diagnostic_reports` | Operations |
| **Release latency** (`released_to_patient_at − reviewed_at`, OR `− result_received_at` for auto-release) | `patient_diagnostic_reports` | Operations |
| **% auto-released vs provider-reviewed** | `patient_diagnostic_reports.metadata.review_not_required` per `1L.20` | Operations |
| **% abnormal / borderline / normal** | `patient_diagnostic_reports.metadata.triage_class` per `1L.20` | Friction/Risk |
| **Abnormal-without-review count** | `patient_lab_observations` × `patient_diagnostic_reports` per `1L.11` | Friction/Risk |
| **Orphan report count** | `patient_diagnostic_reports.lab_order_id IS NULL` per `1L.5` | Friction/Risk |
| **Stuck fulfillment count (in-person vs at-home)** | `lab_orders` substate per `1L.4` + `1L.11` | Fulfillment |

These integrate into the existing `1H.6.1` categories — **no new dashboard categories**; reuse Operations, Fulfillment, and Friction/Risk.

**3) Timestamp enforcement (hard requirement).**

The following fields MUST exist and be populated consistently — missing timestamps = **system defect**, not acceptable drift (`1L.18` discipline applies):

- `lab_orders.created_at`
- `result_received_at` (mirrors `lab_orders.first_result_ingested_at` per appendix §11; canonical on `patient_diagnostic_reports.metadata`)
- `classified_at` (per `1L.20` Part 2)
- `queued_for_review_at` (nullable; populated for BORDERLINE / ABNORMAL only per `1L.20` Part 3)
- `reviewed_at` (nullable until reviewed; populated by provider OR system auto-review for NORMAL per `1L.20` Part 5)
- `released_to_patient_at` (per appendix §11)

Missing-timestamp detection feeds `1H.6.1E` classification (`system_bug_or_defect`) per `1L.18` enforcement summary; surfaces in `1L.11` admin overlay.

**4) Severity + status integration (reuse existing; no custom severity).**

Lab states map into `1H.6.1D` (severity) and `1H.6.1F` (resolution status) — **no custom lab severity system**:

- **Stuck fulfillment** (in-person or at-home substates past SLA per `1L.8`) → Action-needed at threshold; Critical when sustained or aged ≥ 2x threshold per `1H.6.1D` money/integrity escalation.
- **Abnormal-without-review** (per `1L.7` + `1L.11`) → Action-needed at threshold; Critical when any `critical` flag aged > org-policy threshold.
- **Orphan reports** (per `1L.5`) → Watch at threshold; Action-needed when count or age sustained.
- **Latency breaches** (review latency, release latency, result turnaround) → severity escalation per `1H.6.1D` baseline + `1G.7.5b` SLA enforcement; sustained Action-needed/Critical triggers `1G.5` exception per `1L.20` Part 6 tie-ins.

`1H.6.1F` resolution status (Open / Acknowledged / Resolved / Monitoring) applies to lab-driven incidents; `1H.6.1G` stale-critical escalation applies; `1H.6.1H` possible-correlation flag applies (e.g., `lab_review` + `fulfillment` simultaneously stuck → grouped).

**5) Reporting compatibility (`1H.7` safe dimensions; PHI-safe).**

All lab data MUST be queryable in `1H.7` using existing safe dimensions per `1H.7.2`:

- `panel_type` (per `1L.2`)
- `diagnostic_source_type` (per `1L.0` / `1L.19`)
- provider via **controlled provider dimension** (`1H.7.2`); raw `staff_user_id` server-side only
- program / care line (`care_program` per `1L.10`)
- geography / jurisdiction (per `1L.22` — `patient_clinical_jurisdiction_at_review` for review-side analysis; `collection_location_state` for logistics analysis; never silently mixed)
- new vs returning (per `1H.7.2` rule)
- time window

**Hard rules:**
- **No PHI leakage** in any lab report or aggregate output (per `1L.18` #10 + `1H.7.4`).
- **Small-cell suppression** applies per `1H.4.1` (k ≥ 20 default; raised at scale) at small intersections (e.g., `panel_type` × jurisdiction × time bucket).
- Capability-gated per `1H.7.4` (`can_view_internal_reports`; clinical drilldown requires existing clinical capability per `1J / 1J.10`).

**6) Single definition rule (no per-surface variation).**

All metrics MUST use the **same definitions** across:

- daily dashboard (`1H.6`),
- reports (`1H.7`),
- admin overlay (`1G.6.2` lab views per `1L.11`).

A "fulfillment success rate" computed in the daily dashboard returns the **same number** as the same query in reports for the same filter set. Per `1H.7.5` integrity guarantees: definition changes propagate uniformly through map/repo review; no per-report definition forks; cached snapshots in `domain_events` are recomputable, not authoritative.

**7) Event completeness (metrics reconstructability).**

All key transitions MUST emit events so metrics can be reconstructed end-to-end. Missing events = **metrics integrity failure** (treated like missing timestamps per Rule 3).

Required canonical events (preserved from `1L.13` + `1L.20` + appendix §28):

- `lab.order.created`
- `lab.result.received`
- `lab.result.classified` (NEW canonical event for the `1L.20` Part 2 transition; payload includes `triage_class` + `triage_version`)
- `lab.review.queued` (alias / canonical name for the `1G.7.6 queue.item.created` for `lab_review` items; payload references `lab_order_id` + `diagnostic_report_id` + `triage_class`)
- `lab.result.reviewed`
- `lab.result.released`
- `lab.order.expired`
- `lab.sample.issue`

All events follow the `1H.1` standardized payload contract (`patient_id` + at least one of `lab_order_id` / `diagnostic_report_id` / `treatment_item_id` / `care_program_id` / `commerce_order_id` / `treatment_order_id`).

Event-coverage gaps surface in `1H.1` operational traceability (per row 7 / 9) and `1L.18` enforcement summary; treated as drift, not acceptable state.

*Goal achieved:* labs are not only processed correctly but are **fully observable, measurable, and actionable** within the unified `1H.6` / `1H.7` metrics layer — same definitions across dashboard, reports, and admin overlay; no parallel analytics; no silent drift; PHI-safe; severity + status + correlation reuse the existing `1H.6.1D` / `1H.6.1F` / `1H.6.1G` / `1H.6.1H` framework.

### 1L.22 Diagnostic jurisdiction + unknown-marker handling

*Goal:* handle real-world cross-state diagnostic logistics and future/unknown biomarkers without breaking clinical jurisdiction, routing, or ingestion. Additive metadata only; no new tables; no parallel diagnostics system.

**1) Separate diagnostic logistics from clinical jurisdiction (definitions + hard rule).**

Distinct concepts (none of which silently override another):

- **`patient_clinical_jurisdiction`** — derived from the patient's residence/state per Intent jurisdiction-of-care rule and `1G.4.1`. **Determines provider eligibility for interpretation, treatment decisions, and care-program actions** (per `1G.7.2` rule 1 + `1L.16` continuation gating).
- **`collection_location_state`** — where the sample is collected/drawn (e.g., a Quest PSC, home collection, partner site).
- **`processing_lab_state`** — where the specimen is processed.
- **`shipping_origin_state`** / **`shipping_destination_state`** — used for at-home kits, returned samples, vendor routing.

**Hard rules:**

- A patient may collect or ship a sample from a **different state** than their clinical jurisdiction (e.g., traveling). This is normal logistics, not a clinical event.
- Lab logistics state does **NOT** automatically change clinical jurisdiction.
- **Provider interpretation and treatment action remain governed by `patient_clinical_jurisdiction`** unless an explicit org policy (or vendor/state rule per below) says otherwise.
- Vendor / state restrictions may **independently** block collection or processing — modeled as vendor/protocol restrictions per `1L.14` adapter contract — without changing the clinical-jurisdiction rule.

**2) Store logistics context (additive metadata; no new table).**

On `lab_orders.metadata` and/or `patient_diagnostic_reports.metadata` as appropriate:

- `collection_location_state`
- `processing_lab_state`
- `shipping_origin_state`
- `shipping_destination_state`
- `vendor_jurisdiction_rules_applied` (array of stable codes, e.g., `quest_ny_state_form_required`)
- `patient_clinical_jurisdiction_at_order` — snapshot at `lab_orders` create.
- `patient_clinical_jurisdiction_at_review` — snapshot at `patient_diagnostic_reports.reviewed_at`.

**Rules:**

- **Clinical jurisdiction is snapshotted at both order and review.**
- If jurisdiction **changes between order and review** (e.g., patient moved states), route the review using the **current** clinical jurisdiction at review, AND flag the mismatch (`metadata.jurisdiction_changed_between_order_and_review = true`) for ops/provider awareness in the lab review drawer (`1G.8.7`).
- Do **NOT** silently interpret under stale jurisdiction. Mismatch surfacing is mandatory; reviewer can proceed with appropriate context.

**3) Routing implications (locked).**

Provider review routing per `1G.7.2` + `1G.9.4` MUST use:

- `patient_clinical_jurisdiction_at_review`,
- provider license/capability per `1D / 1D.1`,
- `care_program` context per `1L.10` (when attached).

NOT:

- `collection_location_state` alone,
- `processing_lab_state` alone,
- `shipping_origin_state` / `shipping_destination_state` alone.

**Exception:** if a specific diagnostic requires local-state ordering/review rules (e.g., a state mandates same-state lab interpretation for a regulated marker), model as a **vendor/protocol restriction** per `1L.14` and surface as an explicit blocker (per `1G.7.7a` coverage-gap classification, e.g., `state_mandated_local_review`). Never silent.

**4) Unknown / future markers (ingestion does not break).**

The system MUST accept unknown or unmapped diagnostic markers without breaking ingestion or losing data. Extends `1L.6` normalization + `1L.18` #3 write gate + `1L.18` #4 report payload contract.

**Rules:**

- Unknown markers **persist in `patient_diagnostic_reports.report_payload`** per `1L.18` #4 (raw vendor data preserved).
- If structured enough to admit an observation row, the marker creates a `patient_lab_observations` row with:
  - `observation_code = partner_native:<vendor_namespace>:<raw_code>` (per `1L.6` partner-native naming convention),
  - `metadata.category = general` (per appendix §24 catch-all) until mapped,
  - `metadata.normalization_status` ∈ `unmapped | pending_mapping | normalized`.
- Unknown markers MUST **not be discarded** (lossy ingestion forbidden per `1L.18` #4).
- Unknown markers MUST **not automatically drive clinical recommendations** — `treatment_plan_candidate` per `1K.10` cannot reference unmapped markers; `1G.2` safety enforcement does not gate on unmapped markers; `1L.20` triage classification treats unmapped markers as `unclassifiable` and does not contribute to NORMAL/BORDERLINE/ABNORMAL rollup unless the marker has been promoted via `1L.6` mapping.
- Unknown markers surface in the **mapping-coverage-gaps** view per `1L.11` for ops/clinical-informatics review.

**5) New marker onboarding (cross-references existing layers).**

When an unknown marker becomes important, follow the same governance as other versioned mappings (no new system):

- Add mapping entry in versioned category mapping per appendix §24 (`lib/labs/category-mappings/<version>.json`).
- Add normalization rule per `1L.6` (`raw_code → observation_code`, units, abnormal flag, reference range when safe).
- Add reference range / threshold logic to the active `triage_version` per `1L.20` Part 2 if clinical interpretation is governed.
- Backfill/reclassify display from retained `report_payload` where appropriate (rendering inherits the active mapping/triage versions; historical reports may render against version-at-receipt per appendix §24 policy).
- Preserve historical reproducibility via `mapping_version` + `insight_version` + `triage_version` snapshots on rendered outputs.
- Onboarding gate per `1L.19` adapter contract applies when a new vendor introduces a marker class.

**6) Cancer / high-risk unknown markers (flag but do not interpret).**

If an unknown or known high-risk marker appears (e.g., tumor markers, novel biomarkers flagged abnormal/critical by the vendor):

- **Persist** raw and structured data per Rules 4 (no loss).
- **Flag for provider review** if the vendor marks the result abnormal/critical — routes to the `lab_review` queue per `1L.20` Part 3 ABNORMAL rules, escalates per `1G.9.4` urgent-override (continuity does not delay urgent care).
- **Do NOT generate patient-facing interpretation** unless mapping + review rules exist. The patient view falls back to `report_payload` curated summary per `1L.12` until a curated template exists; "not a diagnosis" copy applies.
- **Do NOT auto-suggest treatment pathways** from unmapped markers (no `treatment_plan_candidate` per `1K.10` references unmapped markers).
- High-risk unknown markers may carry a `metadata.requires_clinical_review_only = true` flag so the patient release path defers to provider judgment per `1L.20` Part 5 BORDERLINE/ABNORMAL flow.

**7) Reporting (extends `1H.7` and `1L.11`).**

`1H.7` MUST support these signals (using safe dimensions per `1H.7.2` and aggregate-only output):

- **Unmapped marker counts** by vendor/source over a window.
- **Markers by vendor/source** (volume, mapped vs unmapped share).
- **Mapping coverage gaps** (extends appendix §24 + `1L.11` mapping-coverage view): partners with the most unmapped markers by panel.
- **Cross-jurisdiction lab logistics mismatches**: `lab_orders` where `collection_location_state ≠ patient_clinical_jurisdiction_at_order` OR `patient_clinical_jurisdiction_at_order ≠ patient_clinical_jurisdiction_at_review`. Helps ops detect operational anomalies (travel-collection, jurisdiction changes mid-flow).
- **Diagnostic reports where collection/process/review states differ**: counts by jurisdiction × vendor × `panel_type`; surfaces in `1G.6.2` admin overlay per `1L.11` style.

**Sustained Action-needed/Critical** trends on these signals trigger `1G.5` exception with classification per `1H.6.1E` (typically `compliance_or_policy_change` for unmapped marker spikes; `system_bug_or_defect` for unexpected jurisdiction-mismatch patterns).

*Goal achieved:* MAIN can handle real-world diagnostic logistics (cross-state collection, traveling patients, vendor processing in different states) and unknown future biomarkers (partner-native codes, late-mapped markers, high-risk findings) while preserving clinical jurisdiction discipline, auditability, safe interpretation, and the foundation guardrails per `1L.18`.

### 1L.23 Diagnostic kit logistics: outbound + return tracking contract (foundation; distinct from supplement / Rx outbound)

*Goal:* close the end-to-end mailout-and-return loop for diagnostic kits — outbound carrier tracking, sample-return tracking, vendor sample-receipt reconciliation, silent-tracking detection — without introducing new tables, parallel logistics products, or breaking the `1L.18` guardrails. Additive metadata on `lab_orders` only; reuses `outbound_jobs`, `audit_events`, `patient_timeline_events`, and the `1L.4` state machine.

#### 1L.23.1 Why diagnostics shipping is distinct (locked rule)

Diagnostic kit logistics MUST be modeled distinctly from supplement and Rx outbound shipments because diagnostics have a **return leg + sample chain-of-custody requirement** that supplements/Rx do not.

- **Supplement / 1E retail outbound** = one-way ship; lifecycle ends at delivery.
- **Rx / `treatment_orders` fulfillment** = one-way ship (or pharmacy partner pickup); lifecycle ends at delivery; controlled-substance chain-of-custody requirements live in pharmacy partner / DEA logic, not in the patient-app shipping layer.
- **Diagnostic kit fulfillment** = round-trip: outbound to patient + sample return to vendor + vendor processing + result reconciliation. Each leg has its own tracking number, its own carrier (often different vendors for outbound vs return), and its own failure modes. The full loop must close back to the same `lab_orders` row so the result can be correctly bound and reviewed.

**Hard rules:**

- Diagnostic kit logistics MUST NOT reuse the supplement/Rx outbound shipping abstraction without preserving the return leg + chain-of-custody requirements named below.
- A single `lab_orders` row carries **both** outbound and return tracking — one logical kit-trip per row; the same row receives the result and binds the report per `1L.5`.
- All of this lives in `lab_orders.metadata` (additive); no new shipping table.

#### 1L.23.2 Tracking field model (additive metadata on `lab_orders`)

All fields below live under `lab_orders.metadata` (specifically a namespaced `metadata.kit_logistics` object per `1L.23` — no schema migration; same metadata extensibility seam used elsewhere in the map).

**Outbound leg (kit to patient):**

- `outbound_carrier` — partner code (e.g., `usps`, `ups`, `fedex`, `partner_courier_x`).
- `outbound_tracking_number` — carrier tracking id.
- `outbound_label_url` — pre-generated label artifact (storage reference).
- `outbound_shipped_at`, `outbound_delivered_at` — timestamps.
- `outbound_carrier_status` — normalized substate (`label_created | in_transit | out_for_delivery | delivered | returned_to_sender | undeliverable | lost`).

**Return leg (sample to vendor lab):**

- `return_carrier` — may differ from outbound (often pre-paid return label from a different carrier).
- `return_tracking_number` — return label tracking id (separate from outbound).
- `return_label_url` — pre-generated return label artifact (storage reference); typically shipped inside the kit.
- `return_picked_up_at`, `return_delivered_to_lab_at` — timestamps.
- `return_carrier_status` — normalized substate (`label_unused | label_scanned | in_transit | delivered_to_lab | returned_to_sender | undeliverable | lost`).

**Vendor sample-receipt reconciliation:**

- `vendor_sample_received_at` — when the vendor confirmed receipt + accession (per partner adapter per `1L.14`).
- `vendor_sample_accession_id` — vendor-side accession number (links carrier tracking → vendor processing → result).
- `vendor_sample_quality_status` — `accepted | rejected_invalid | rejected_insufficient | hemolyzed | other_partner_reason` (normalized per `1L.6` + partner adapter).

**Per-test ID linkage (when a single kit produces multiple analyte tubes):**

- `metadata.kit_logistics.test_specimens` — array of `{ specimen_id, panel_type_subset?, observation_codes?[] }`; vendor adapter populates this when the partner reports per-tube/per-test accession ids; observation rows from `1L.6` carry `metadata.specimen_id` for full per-tube provenance.
- This satisfies the "ability to apply IDs to the shipment and/or the individual tests" requirement: the kit-trip is one `lab_orders` row, but per-specimen ids are queryable when the partner provides them.

**Field discipline:**

- All field updates flow through the `1L.18` mutation discipline (named service-layer functions, `requireCapability`, `audit_events`, `patient_timeline_events` when patient-impacting).
- Outbound fields populated by the shipping `outbound_jobs` adapter (or its callback handler).
- Return fields populated by the return-carrier adapter callback OR by the return-label issuance step at kit-pack time (label url + tracking number issued together; status starts at `label_unused`).
- Vendor reconciliation fields populated by the partner adapter per `1L.14` (idempotent on `(vendor_partner_id, vendor_sample_accession_id)`).

#### 1L.23.3 Carrier adapter contract (outbound + return; mirrors `1L.14` discipline)

Each carrier adapter (per outbound or return; same carrier may do both) satisfies a minimum contract — same shape as `1L.14` vendor-partner adapter contract, applied to logistics.

- **Idempotent submit:** `book_shipment(lab_order, leg)` keyed on `(carrier, lab_order.id, leg)` where `leg ∈ outbound | return`.
- **Status acquisition:** adapter supports either **inbound webhook** (carrier-pushed status updates) or **scheduled poll** (carrier-pulled status updates) — both follow `1H.3` reconciliation discipline; both write through the same normalization to `metadata.kit_logistics.<leg>_carrier_status`.
- **Dedupe key contract:** `(carrier, tracking_number, normalized_status, status_event_at)` for status events; replays are safe.
- **Normalized status enum (canonical; partner-specific codes mapped):** `label_created | in_transit | out_for_delivery | delivered | returned_to_sender | undeliverable | lost` (outbound); add `label_unused | label_scanned | delivered_to_lab` for return.
- **Error enum:** `carrier_unavailable`, `invalid_address`, `tracking_unknown`, `service_unsupported`, `carrier_internal_error` → `audit_events` + `1G.5` exception (`fulfillment_partner_outage` or `integration_or_webhook_failure` per `1H.6.1E`).
- **Onboarding gate (mandatory):** new carrier cannot ship without normalized status mapping + dedupe-key replay validation + label-issuance success criterion + at least one healthy callback path (webhook or poll). Onboarding is a hard CI/release check (per `1L.18` adapter-gate discipline), not advisory.

#### 1L.23.4 Vendor sample-receipt reconciliation (closes the round-trip)

The carrier-reported "delivered to lab" event is a **logistics signal**, not a clinical signal. Vendor sample-receipt is the **authoritative** event that completes the round-trip and primes result ingestion.

- **Two-event reconciliation:**
  1. `return_carrier_status = delivered_to_lab` (logistics; carrier adapter callback) → sets `metadata.kit_logistics.return_delivered_to_lab_at`.
  2. `vendor_sample_received_at` set + `vendor_sample_accession_id` populated (clinical/operational; partner adapter per `1L.14`) → vendor confirms accession.
- **Reconciliation rules:**
  - The two events are expected within an org-policy window (e.g., 0–48h from `delivered_to_lab` to `vendor_sample_received_at`).
  - **Mismatch** (carrier delivered but vendor never accessions) within window → `metadata.kit_logistics.reconciliation_state = vendor_receipt_pending`; surfaces in admin overlay (per `1G.10.2` extension).
  - **Mismatch past window** → `metadata.kit_logistics.reconciliation_state = vendor_receipt_missing`; emits `lab.kit.vendor_receipt_missing` (timeline + audit); routes to `1G.5` exception (`fulfillment_partner_outage` or `system_bug_or_defect` per `1H.6.1E`).
  - **Vendor accession arrives without a delivered_to_lab event** → reconcile by accepting vendor as authoritative; flag carrier-adapter coverage gap for ops (typically `tracking_unknown` from carrier per `1L.23.3`).
- **Quality reconciliation:**
  - `vendor_sample_quality_status = rejected_invalid | rejected_insufficient | hemolyzed | other_partner_reason` → emit `lab.sample.invalid` per `1L.8`; transition top-level `lab_orders.status` to `sample_issue` per `1L.4`; trigger recovery flow (free re-collection / kit resend per `1L.8` + `1G.10.2` "Sample invalid/lost recovery" view).
- **Idempotency:** vendor-side accession events keyed on `(vendor_partner_id, vendor_sample_accession_id)`; carrier-side delivery events keyed per `1L.23.3` dedupe contract; no double-count.

#### 1L.23.5 Silent-tracking → `sample_lost` detection rule (closes the loop)

The `1L.4` `sample_lost` substate exists; this section names the **deterministic detection rule** so silent transit failures don't sit indefinitely.

**Detection rule (system-triggered cron per `1L.18` #8 expiration enforcement):**

A `lab_orders` row transitions to `sample_issue` with substate `sample_lost` when **all** of the following are true:

1. Outbound is complete (`outbound_carrier_status = delivered`) AND return label was scanned (`return_carrier_status` reached at least `label_scanned` or `in_transit`).
2. No `return_carrier_status` update for **N hours** (org-tunable per carrier; default 96h after last update OR 168h since `outbound_delivered_at` if return never scanned).
3. No `vendor_sample_received_at` recorded.
4. No carrier exception explaining the silence (e.g., `returned_to_sender` or `undeliverable` already routes to a different recovery path per `1L.23.4`).

**Action on detection:**

- Transition `lab_orders.status → sample_issue`; substate `sample_lost`.
- Emit `lab.sample.lost` (timeline + audit per `1L.8`).
- Set `metadata.kit_logistics.silent_tracking_detected_at` and the carrier-side substate at the time of detection.
- Assign owner per `1L.7` (`responsible_provider_id` if program-attached) or `metadata.queue_owner` (recovery pool); surfaces in `1G.10.2` "Sample invalid/lost recovery" view + `1G.10.6` daily lab ops review.
- Trigger recovery flow per `1L.8` (free re-collection / kit resend); new `lab_orders` may be created with `metadata.replaces_lab_order_id` pointer.
- `1G.5` exception fires with classification `fulfillment_delay_vendor` per `1H.6.1E` (or `fulfillment_partner_outage` if pattern by carrier).

**Hard rule:** silent transit cannot persist past detection thresholds. Detection is system-triggered, not manual; same enforcement principle as `1L.18` #8 expiration logic.

#### 1L.23.6 Per-shipment + per-test ID linkage (chain-of-custody)

For panels that produce multiple specimens (e.g., a full panel may have multiple tubes for chemistry / hematology / hormones), the per-specimen identity is captured to preserve full chain-of-custody from kit-trip → vendor accession → result row.

**Linkage rules:**

- **One `lab_orders` row per `panel_type`** (per `1L.2` — unchanged); the kit-trip is the unit of logistics.
- **Per-specimen ids** (when a kit yields multiple tubes/specimens that the partner accessions separately) live in `metadata.kit_logistics.test_specimens` array per `1L.23.2`.
- **Observation-level provenance:** `patient_lab_observations.metadata.specimen_id` (when set by partner adapter per `1L.6` raw retention) ties each analyte back to the originating tube.
- **Vendor accession id** (`vendor_sample_accession_id`) is the primary join key vendor-side; it correlates with the observation-level `specimen_id` when partners report at sub-accession granularity.

**Result binding tie-in (per `1L.5`):**

- The full join chain `lab_orders.id → metadata.kit_logistics.outbound_tracking_number / return_tracking_number → vendor_sample_accession_id → patient_diagnostic_reports.lab_order_id → patient_lab_observations.diagnostic_report_id (+ metadata.specimen_id)` is reconstructable end-to-end without external lookup. This is the chain-of-custody requirement.
- Privileged correction (re-link of `lab_order_id` per `1L.18` #5) is the only way to alter this chain; never silent.

#### 1L.23.7 Operational visibility (ops + patient surfacing)

**Ops visibility (extends `1G.10.2` admin overlay; new saved view):**

- **Kit-trip status board** — per `lab_orders` row, shows: outbound carrier + status + age, return carrier + status + age, vendor accession status, reconciliation state, silent-tracking detection flag. Source: `lab_orders.metadata.kit_logistics`.
- **Day-by-day end-to-end timing** (answers "this kit reached the patient on day 3, sample returned on day 10, lab received on day 12, result back on day 15"):
  - Day 0 = `lab_orders.created_at`
  - Day X = `metadata.kit_logistics.outbound_delivered_at − created_at`
  - Day Y = `return_delivered_to_lab_at − outbound_delivered_at`
  - Day Z = `vendor_sample_received_at − return_delivered_to_lab_at`
  - Day W = `result_received_at − vendor_sample_received_at` (per `1L.21` Rule 3)
  - Total turnaround = `result_received_at − created_at`
- **Reconciliation state mix** — counts of `vendor_receipt_pending` vs `vendor_receipt_missing` vs healthy reconciliation per partner per window.
- **Silent-tracking detection rate** — `% of orders` triggering `1L.23.5` per carrier per window; surfaces in `1G.10.6` daily review.
- **Chain-of-custody completeness** — `% of completed orders` with full join chain populated per `1L.23.6`; gaps indicate adapter coverage issues.

All views: aggregate-first, controlled provider dimension only, capability-gated drilldown per `1G.10.2`; PHI-safe per `1L.18` #10.

**Patient visibility (templates per `1L.15`; never raw vendor data):**

- "Your kit is on the way" → `outbound_carrier_status = in_transit` (with first-party tracking link to carrier when org policy allows).
- "Your kit has been delivered" → `outbound_carrier_status = delivered`.
- "We've received your sample" → `vendor_sample_received_at` set (NOT carrier-side `delivered_to_lab` alone — the vendor accession is the authoritative patient-facing signal).
- "Your sample is being processed" → `lab_orders.status = in_progress`.
- "Your results have arrived" → `lab.result.received` per `1L.20` Part 7.

**Hard rules:**

- Patient never sees raw carrier API responses or internal substates (`label_unused`, `tracking_unknown`, `vendor_receipt_pending`, etc.).
- Patient communications follow `1G.3` send policy + `1G.9.14a` tone discipline (no internal logistics jargon).

#### 1L.23.8 Chain-of-custody audit + tracking-field mutation discipline

Diagnostic shipping carries chain-of-custody requirements (sample provenance, regulatory defensibility, partner accession integrity). Once a tracking number or accession id is bound to a `lab_orders` row, it is **immutable** except via a privileged correction path — same discipline as `1L.18` #5 (binding immutability) and `1L.5` (report → order binding), now applied to logistics fields.

**Immutable-once-set fields (after first write to `lab_orders.metadata.kit_logistics`):**

- `outbound_carrier`, `outbound_tracking_number`, `outbound_label_url`
- `return_carrier`, `return_tracking_number`, `return_label_url`
- `vendor_sample_accession_id`
- `metadata.kit_logistics.test_specimens[].specimen_id`

**Update-allowed fields (status / timestamps may evolve through normal carrier + vendor callbacks):**

- `outbound_carrier_status`, `outbound_shipped_at`, `outbound_delivered_at`
- `return_carrier_status`, `return_picked_up_at`, `return_delivered_to_lab_at`
- `vendor_sample_received_at`, `vendor_sample_quality_status`
- `reconciliation_state`, `silent_tracking_detected_at`

These flow through normal idempotent adapter callbacks (per `1L.23.3` / `1L.14`) and the `1L.18` #1 mutation discipline; not "corrections."

**Privileged correction path (only way to change immutable fields):**

- **Capability:** **`can_correct_kit_logistics`** (additive per `1D / 1D.1`; mirrors `can_correct_lab_order_link` per `1L.18` #5).
- **Required inputs:** `SensitiveAccessReason`, prior value, new value, justification (structured reason code + optional bounded note).
- **Allowed reason codes (stable enum; org-extensible only via map/repo review):**
  - `carrier_misassigned` — wrong carrier recorded at booking; e.g., adapter bug.
  - `tracking_number_typo` — manual entry error caught early.
  - `vendor_accession_swap` — vendor reported wrong accession; corrected per partner ack.
  - `kit_replacement` — kit was replaced (paired with new `lab_orders` row carrying `metadata.replaces_lab_order_id` per `1L.8`); not a correction so much as a re-bind to a fresh logistics chain.
  - `data_quality_remediation` — backfill of historical bad data with documented partner cooperation.
- **Audit (mandatory):** every privileged correction writes:
  - `audit_events` row (actor, capability, reason code, prior + new value, timestamp, optional note).
  - `patient_timeline_events` pointer when patient-impacting (e.g., a tracking-number change visible in the patient portal — typically rare).
  - `metadata.kit_logistics.corrections[]` array entry preserving the prior value + correction reason inline on the row, so chain-of-custody narrative is reconstructable from the row itself.

**Hard rules:**

- **No silent rewrites.** Direct DB writes, ad-hoc SQL, or routes that skip `requireCapability` + `audit_events` are forbidden per `1L.18` #1.
- **No erasure.** Prior values are retained in `metadata.kit_logistics.corrections[]`; the chain-of-custody narrative is append-only at the row level (mirrors `1L.18` #4 "raw vendor data preserved" discipline).
- **No correction past terminal states without elevated review.** Once `lab_orders.status = released` or `completed`, privileged correction additionally requires compliance/oversight ack per `Section 1G` Oversight model + `1H.5.1` audit operations.
- **Eligibility/jurisdiction unchanged.** Privileged correction never reassigns the order across patients (`patient_id` is never mutable; cross-patient corrections require the merge path per `1J.7`); never silently changes `patient_clinical_jurisdiction_at_order` (per `1L.22` Rule 2 snapshot rule).

**Reporting + visibility:**

- Privileged corrections per partner per window queryable in `1H.7` using safe dimensions; spikes feed `1H.6.1E` classification (typically `system_bug_or_defect`, `integration_or_webhook_failure`, or `compliance_or_policy_change`) per `1L.21`.
- Sustained correction-rate trends surface in `1G.10.2` admin overlay + `1G.10.6` daily lab ops review for ops awareness; vendor-side correction patterns may trigger adapter onboarding-gate review per `1L.23.3`.

**Goal:** chain-of-custody is end-to-end auditable: every kit-trip's logistics fields can be replayed from the row + audit log; every correction is traceable, attributable, and reasoned; no logistics field is ever silently rewritten.

#### 1L.23.9 Cross-links

`Section 1L` foundation (`1L.0`, `1L.4`, `1L.4a`, `1L.5`, `1L.6`, `1L.7`, `1L.8`, `1L.11`, `1L.13`, `1L.14`, `1L.15`, `1L.18`, `1L.20`, `1L.21`, `1L.22`); `Section 1G` (`1G.5` exception classification, `1G.7.6` queue events, `1G.10.2` admin overlay extension, `1G.10.3` fulfillment surface, `1G.10.6` daily lab ops review); `Section 1H` (`1H.1` operational trace, `1H.2` platform ownership for carrier outages, `1H.3` reconciliation/drift, `1H.5.1` audit operations, `1H.6.1D / 1H.6.1F / 1H.6.1G / 1H.6.1H` severity / status / stale-critical / correlation, `1H.7` reporting); `1D / 1D.1` capabilities (incl. new `can_correct_kit_logistics` per `1L.23.8`); `1J / 1J.7` patient merge boundary; `1J.10` PHI gating; `1I` commerce/payment when refund or shipping cost recovery applies; existing tables: `lab_orders` (additive `metadata.kit_logistics`), `patient_diagnostic_reports`, `patient_lab_observations`, `outbound_jobs`, `audit_events`, `patient_timeline_events`.

**Distinctness reminder (per `1L.23.1`):** diagnostic kit logistics is **separate** from supplement and Rx outbound shipping abstractions because of the return leg + chain-of-custody. Shared shipping primitives (carrier adapters, tracking-number storage shapes) MAY be reused as utility code, but the **`lab_orders.metadata.kit_logistics`** namespace and the round-trip + reconciliation rules above are diagnostic-specific and live here.

---

## Section 1M: Patient State Observations (longitudinal trackables; first-class)

*Foundation status:* `patient_state_observations` is a **v1 foundation table** for living, time-aware patient signals — not deferred. It is required to make longitudinal care coherent: weight trends, BP, symptom scores (ED IIEF-5, low-T ADAM/AMS, menopause symptom scales, GLP-1 tolerance), dose tolerance/adherence confirmation, sleep, energy, libido, mood, side-effect markers. This table is the **source of truth** for patient-reported and patient-context measurements; **`patient_timeline_events`** carries narrative pointers only — never the values themselves. **No new parallel system; this section formally binds intake (`Section 1K`), provider workflows (`Section 1G`), continuation gating (`1L.16`), reporting (`Section 1H`), and AI assist (`Section 1N`) to a typed, append-only longitudinal store.**

### 1M.1 Purpose and scope

`patient_state_observations` is the first-class store for **living, time-aware patient signals** captured from intake (`Section 1K`), system check-ins, message-input flows (`Section 1G`), provider prompts (`1G` `clinical_required` per `1K.6`), manual ops entry (rare; audited), and (future) device data. Examples (org-extensible per the question-bank vocabulary `1K.4`):

- **Anthropometrics:** weight, height (when re-measured), BMI (derived), waist circumference.
- **Vitals (patient-reported / home):** BP (systolic/diastolic), heart rate, temperature, oxygen saturation.
- **Symptom scales:** IIEF-5 (ED), ADAM/AMS (low-T), menopause symptom scales, depression/anxiety scales, fatigue scales.
- **Therapy tolerance + adherence:** dose-taken confirmation, side-effect severity, GLP-1 tolerance signals (nausea, GI symptoms), Rx adherence proxies.
- **Lifestyle / context:** sleep duration/quality, energy, libido, mood, exercise frequency.

### 1M.2 Scope boundaries (what this is NOT)

- **Not chart static memory.** Allergies, conditions, surgical history, current medication list stay where they live today (`patients` chart fields, `1J.10` snapshot reads). `patient_state_observations` does not duplicate them.
- **Not vendor-issued lab data.** `patient_lab_observations` per `Section 1L` remains the SoT for analytes returned by labs. `patient_state_observations` may carry a **patient-reported counterpart** (e.g., a home-cuff BP reading, a home glucose finger-stick) — distinct rows, distinct provenance, both queryable on the same `field_name` for combined trend display. Vendor labs are never duplicated here.
- **Not clinical decisions / interpretation.** Provider notes, signoffs, and clinical reasoning stay in `clinical_visits`. Provider-prompt observations write to `patient_state_observations`; the provider's interpretation lives in the visit.
- **Not billing, orders, or notifications.** Money domain (`Section 1I`), order domain (`treatment_orders` / `commerce_orders`), and send domain (`outbound_jobs`) are unchanged.
- **Not narrative/event flow.** `patient_timeline_events` may carry a typed pointer (e.g., `state.observation.recorded`) **only when the observation is narrative-meaningful** (clinically significant delta, severe side effect, threshold crossing). Routine intake/check-in writes do not flood the timeline. The timeline payload references `patient_state_observation_id` + minimal context (`field_name`, optional severity flag) — **never the value itself**. Authoritative value lives on `patient_state_observations`.

### 1M.3 Schema (additive; new table, append-only; ships v1)

Required columns (final names per repo conventions during implementation; field shapes below):

- `id` — UUID, app-generated.
- `patient_id` — FK to `patients`; required.
- `care_program_id` — FK to `care_program`; required when scoped (e.g., GLP-1 weight, menopause symptom score). Nullable for global trackables (e.g., generic sleep tracking before any program).
- `pathway_code` — string, optional; for cross-program analysis when `care_program_id` is null.
- `condition` — string, optional; controlled vocabulary when applicable.
- `field_name` — string, required; **controlled by the question-bank vocabulary per `1K.4`** — e.g., `weight_kg`, `bp_systolic_mmhg`, `bp_diastolic_mmhg`, `ed_iief5_score`, `glp1_nausea_severity`. **No ad-hoc field names.** New fields require a question-bank entry + version + governance review.
- `value_numeric` — numeric, nullable; for numeric measurements (weight, BP, scores).
- `value_text` — string, nullable; bounded length; for short categorical values (e.g., `mild | moderate | severe`).
- `value_boolean` — boolean, nullable; for yes/no measurements (e.g., dose_taken_today).
- `value_json` — JSON, nullable; **only** for structured composites where decomposing into multiple `field_name` rows is awkward; default to multiple rows over JSON whenever possible.
- `unit` — string, nullable; canonical units per `1L.6` discipline where applicable (e.g., `kg`, `mmHg`, `mg/dL`).
- `observed_at` — timestamp, required; when the patient/system actually observed the value (not when the row was inserted).
- `recorded_at` — timestamp, required; system insert time.
- `source_type` — enum, required: `intake`, `check_in`, `message_input`, `provider_prompt`, `manual_ops_entry`, `device` (future), `lab_derived` (when a lab value is mirrored as a trackable for trend display alongside patient inputs).
- `source_id` — string, required when `source_type` has a referent (`intake_session_id`, `message_id`, `clinical_visit_id`, `lab_order_id`, `outbound_jobs.id`, etc.).
- `authored_by` — enum, required: `patient`, `provider`, `system`, `ops`, `device` (future). Mirrors `1J.9` authority discipline.
- `authored_by_staff_id` — FK to `staff_profiles`; required when `authored_by ∈ provider | ops`; null otherwise.
- `supersedes_observation_id` — FK to same table, nullable; for **append-superseding-row** corrections (never overwrite).
- `superseded_by_observation_id` — FK to same table, nullable; back-reference set when a later row supersedes this one.
- `correction_reason` — string, nullable; required when `supersedes_observation_id` is set; controlled vocabulary (e.g., `patient_correction`, `provider_clarification`, `transcription_error`, `unit_misentry`, `device_recalibration`).
- `metadata` — JSON, optional; for adapter-specific or device-specific provenance (partner namespace, raw_value retention per `1L.6` pattern, device firmware version when applicable).

**Indexes (operational):**

- `(patient_id, field_name, observed_at DESC)` — primary trend query path.
- `(care_program_id, field_name, observed_at DESC)` — program-scoped trend.
- `(source_type, source_id)` — provenance lookups.
- `(patient_id, recorded_at DESC)` — recent-activity feeds.
- `(field_name, observed_at DESC)` — cross-patient cohort trend (for `1H.7` reporting; aggregate-only).

### 1M.4 Hard rules (mandatory; runtime + CI enforced)

- **Append-only.** No in-place updates to value/units/observed_at on a written row. Corrections write a **new row** with `supersedes_observation_id` set + `correction_reason` populated; original is retained.
- **Provider cannot overwrite patient-authored values.** A provider correction is always a new row authored by `provider` with `supersedes_observation_id` pointing at the patient row; the patient row stays as authored. Same discipline as `1J.9` authority boundaries.
- **Field vocabulary controlled by `1K.4` question bank.** No ad-hoc `field_name`s — any new field requires a question-bank entry, a version, and governance review (same governance as `Capability` and `1H.6.1E` classifications).
- **Source provenance required.** Every row carries `source_type`, `source_id` (when applicable), and `authored_by` — same provenance discipline as `1L.6` raw retention.
- **Reads prefer the latest non-superseded row** for "current value"; trend queries use the full append history.
- **No PHI in `field_name` or controlled labels.** Free text only in `value_text` (bounded) per `1K.4` discipline.
- **No silent backfill.** Bulk loads (e.g., importing historical patient-reported weights from a legacy source) require capability + reason code + audit, mirroring `1L.18` #3 observation write gate.
- **Patient-reported home measurements are distinct from vendor labs.** Even when `field_name` overlaps (e.g., `bp_systolic_mmhg`), `source_type` and `authored_by` keep them distinguishable; vendor labs continue to live in `patient_lab_observations` per `Section 1L`.

### 1M.5 Mutation discipline (mirrors `1L.18`)

- All writes through a **named server function** (e.g., `recordPatientStateObservation`) with `requireCapability` + `audit_events` + (when narrative-meaningful) `patient_timeline_events` pointer.
- **Allowed actors per `authored_by`:**
  - **`patient`** — via intake module (`Section 1K`), check-in flow, or structured message-input response (`1G` `clinical_required` per `1K.6`).
  - **`system`** — via scheduled check-in jobs, derived computations (e.g., BMI from height + weight, derived scores per `1K.9`); system never authors clinical content.
  - **`provider`** — via provider-prompt flow per `1K.6`; may correct (append superseding row), never overwrite.
  - **`ops`** — via privileged manual entry with reason code + audit (rare; e.g., transcription of a faxed home reading); requires `can_manual_record_state_observation` capability per `1D / 1D.1`.
  - **`device`** — **future**, not v1 runtime; would arrive via vetted device adapter following the same dedupe + provenance discipline as `1L.14` carrier/vendor adapters. v1 reserves the enum value but does not implement device ingestion.
- **Forbidden:** ad-hoc SQL, scripts, UI-only writes, or any path that skips capability + audit. Same enforcement as `1L.18` #1.

### 1M.6 Relation to `patient_timeline_events` (narrative pointer only)

- Timeline carries a typed pointer (e.g., `state.observation.recorded`) **only** when the observation is narrative-meaningful (clinically significant delta, side-effect entry, dose-tolerance flag, abnormal trend crossing a threshold). Routine intake/check-in writes do not flood the timeline.
- Timeline payload carries `patient_state_observation_id` + minimal context (`field_name`, `pathway_code`, optional severity flag) — **never the value itself**. The value lives on `patient_state_observations`.
- Severity / threshold logic that decides "is this narrative-meaningful" lives in code/policy and is versioned alongside the question bank (`1K.4`). System never auto-mints clinical interpretation.

### 1M.7 Relation to other domain tables (boundary discipline)

- **Labs:** `patient_lab_observations` remains the SoT for vendor-issued analytes per `Section 1L`. `patient_state_observations` may carry **patient-reported counterparts** for combined trend display; both are queryable on the same `field_name` (e.g., `bp_systolic_mmhg` from a home cuff vs from a clinic draw); never duplicated.
- **Static chart memory:** allergies, conditions, surgical history, current medications stay where they live today (`patients` chart fields, `1J.10` snapshot reads); not duplicated here.
- **Clinical visits:** provider notes, decisions, signoffs stay in `clinical_visits`. Provider-prompt observations write to `patient_state_observations`; the provider's interpretation lives in the visit.
- **Billing/orders/notifications:** unchanged; never stores money or fulfillment data.
- **Intake responses:** answers that are **not** trackable (e.g., "have you ever had surgery?") follow existing `intake_response` discipline per `1K.4` / `1K.5`. Trackables write to `patient_state_observations`. The same `intake_session_id` is the `source_id` linking both stores back to the same intake moment.

### 1M.8 Reads + downstream consumers

- **Provider workspace** (`Section 1G.8`): trend graphs and current-value reads pull directly from `patient_state_observations`, not from timeline scans. Provider lab review drawer (`1G.8.7`) may overlay patient-reported counterparts when relevant.
- **Continuation gating** (`1L.16`): when refill/continuation policy depends on a recent measurement (e.g., a recent weight for GLP-1 dose adjustment, a recent symptom score for HRT continuation), the gate reads `patient_state_observations` for freshness — same pattern as the lab-gate read in `1L.16`, applied to patient-reported trackables.
- **Reporting** (`Section 1H.6` / `1H.7`): aggregate signals (median weight delta by pathway, % of patients reporting side effects per cohort, symptom-score trajectories) query `patient_state_observations` directly via safe dimensions per `1H.7.2`; small-cell suppression applies; aggregate-only.
- **Exception handling** (`1G.5`): abnormal trackable trends (sudden weight drop, sustained high BP, severe side-effect score) may trigger `1G.5` exceptions with classification per `1H.6.1E` (typically `provider_decision_quality` for trend-driven escalation).
- **AI assistive layer** (`Section 1N`): may read structured observations for summarization, draft notes, and trend interpretation per `1N` discipline; never authority. AI never writes to `patient_state_observations` directly — provider/system/patient remains the author.

### 1M.9 Cross-links

`Section 1J` (chart memory boundary), `1J.9` (authority discipline), `1J.10` (safety preflight reads `patient_state_observations` when continuation depends on it), `Section 1G` (provider workspace, messaging follow-ups), `1G.5` exception classification (abnormal trackable trend triggering exception), `1G.8.7` (provider lab/state review drawer), `Section 1H` (metrics + reporting), `1H.6.1D` (severity/baseline framework reused for trackable trend interpretation), `1H.7.2` (safe reporting dimensions), `Section 1K` (intake writes pathway trackables here), `1K.4` (question bank vocabulary controls `field_name`), `1K.5` (storage discipline complement), `1K.6` (progressive intake re-uses the same write path), `1K.14` (schema discipline; `patient_state_observations` is the v1 dedicated table for trackables), `Section 1L` (lab observations vs patient-state observations boundary), `1L.16` (continuation gating reads patient-reported trackables alongside lab values), `Section 1N` (AI assistive reads — never authority, never writes), `Section 1I` (no overlap; financial state stays in 1I), `outbound_jobs` (no overlap; sends stay in outbound_jobs), `audit_events`, `patient_timeline_events`.

---

## Section 1N: Unified AI interpretation layer (one engine, role-scoped staff surfaces)

*Layer 2 architectural rule: there is **one** AI interpretation layer in this product, not one-per-role. **1G** chart/lab/messaging assist (Section 1G — AI layer), **1G.3(f)** engagement state interpretation, **1H** read-model summarization, **1H.4.2** acquisition / source analysis, and any future operational or admin "insights" all share the same engine, the same data discipline, and the same enforcement boundary. The map **rejects** a "marketing AI", a "provider AI", and an "ops AI" as separate stacks; that path duplicates jobs, fragments audit, and quietly relaxes PHI rules per surface.*

**Scope:** Section 1N applies only to internal role-based staff surfaces: provider, ops, admin / leadership, and marketing / growth. Patient-facing AI, if added later, should be defined separately because it has different requirements for user communication, clinical boundaries, and safety review.

### 1N.1 Scope and non-goals

- **In scope:** a single **assistive** layer that reads from the **same** spine the rest of the map uses (`patient_timeline_events`, `messages`, `treatment_items` / `treatment_orders`, 1I rows, `care_program`, `outbound_jobs`, `audit_events`, **1H** read models, **1H.4** attribution metadata) and produces **role-scoped** outputs through **named staff surfaces.**
- **Out of scope (by architectural rule):** standalone "marketing AI", "growth AI", "support AI", or per-vertical "agent" products that fork the data path or write directly to clinical / money / outbound state. Any such would have to **become** Section 1N + a 1H.x surface, not a parallel stack. **Patient-facing AI** (chatbot, drafted-and-auto-sent patient replies, etc.) is **also** out of scope here — see **1N.0.**

### 1N.2 Single layer, four surfaces

| Surface | Consumer | Source data the layer is allowed to read | Output discipline | Anchor in this map |
|---------|----------|------------------------------------------|-------------------|--------------------|
| **(P) Provider assist** | prescriber, clinical reviewer | chart, labs, messages, 1G permit/blocker, **1J.10** safety snapshot — **per-patient**, in-context | **Draft / suggest / triage** only; **never** authorizes Rx, clears `clinical_required`, or moves `treatment_items` state; **must** flow through `requireCapability` + `audit_events`; AI output is **input** to a human action, not the action | **Section 1G — AI layer**, `patient_chart_ai_reviews`, `lib/ai/processChartAiReviewJob.ts` |
| **(O) Ops assist** | ops, support, fulfillment, IT/platform | 1G/1G.1 worklist + tuple, 1H.1 trace recipes, `outbound_jobs` (incl. `dead`), `treatment_orders`/1I exceptions, `stripe_webhook_events`, 1H.3 drift signals — **per-case** when serving 1G; **aggregated** for backlog/SLO views | **Prioritize, summarize, propose next action** within `requireCapability`; **does not** replay, requeue, refund, or change row state autonomously; recommended actions still go through audited mutations | **1G.1, 1H.1, 1H.2, 1H.3** |
| **(A) Admin / leadership assist** | CMO, ops leadership, exec, compliance/QA | 1H derived metrics, 1I revenue/recon aggregates, 1J/1G compliance counts, capacity and SLO summaries — **aggregated** by default; per-patient drill-in **only** with the same `requireCapability` + `SensitiveAccessReason` discipline as a human chart open | **Performance, bottleneck, and risk narratives** at the org / cohort / line level; flagging anomalies to human reviewers; **no** authority to change cluster behavior, capacity, or org policy programmatically | **1G Oversight, 1H, 1H.2, 1H.3, 1I, 1D.1** |
| **(M) Marketing / growth assist** | growth / marketing role with `can_view_growth_aggregates` | **Aggregated and pre-suppressed** read models behind **1H.4.1**, stratified by **1H.4** acquisition keys; **never** raw `patients` / `messages` / `clinical_visits` / lab text | **All four 1H.4.2 hard constraints:** aggregated, de-identified, non-reversible, k-suppressed; **inputs to the model are also already-suppressed**; AI **must not** call ad APIs, run campaigns, or export PHI | **1H.4 / 1H.4.1 / 1H.4.2** |

*One layer rule:* the same **layer** computes for (P), (O), (A), (M); **what differs** is **the input scope it is allowed to read, the surface it can write to, and the output discipline at the boundary** — all gated by **1D / 1D.1** capabilities. There is **no** separate "marketing model" or "ops model" code path that re-implements the same primitives.

### 1N.3 Capability scoping (Section 1D — additive, not a new auth)

- AI invocations **inherit the caller's `Capability` set**: a provider call may read chart/lab inputs because the caller holds `can_view_clinical_history` / `can_use_chart_ai_review`; a marketing call **cannot** widen its read set by going "through AI."
- New capabilities (added to [`lib/auth/capabilities.ts`](../../lib/auth/capabilities.ts) only when surface ships):
  - **`can_use_chart_ai_review`** (already in the file) — surface (P)
  - **`can_use_ops_ai_assist`** — surface (O), bundled with `ops_admin` / equivalent
  - **`can_use_admin_ai_insights`** — surface (A), bundled with leadership / compliance roles
  - **`can_view_growth_aggregates`** — surface (M), per **1H.4.1**
- **Reason discipline:** broad / cross-patient / cross-cohort AI requests log `SensitiveAccessReason` on the same `audit_events` row, per **Intent**.
- **No "AI super-user":** there is no capability that lets the AI layer (or its caller) bypass `requireCapability`, RLS, **1J.10** preflight, or **1H.4.1** suppression.

### 1N.4 Output discipline (uniform; surfaces tighten, never relax)

- **Actionable, not just descriptive:** every surface's outputs name **a target action** (e.g. "open this clinical_required", "requeue this `outbound_job`", "review this stale order", "investigate this source's churn") and the **affordance** for the human to take it through **the same audited mutation paths** the product already exposes — not through an AI-only side door.
- **Never the authority:** AI outputs do **not** clear gates (1G permit / `clinical_required`), do **not** mutate state (1G/1I/1J/1E/1H.2), and do **not** call external systems autonomously (ad APIs, PSPs, pharmacies). Authority remains with **`requireCapability` + audited human (or scheduled job) action**.
- **No PHI exfiltration as a default:** prompts and contexts shipped to external model providers must respect **Intent** (data minimization) and the **per-surface** rules above; **(M)** never receives PHI; **(P)/(O)/(A)** receive the **minimum** needed for the task and are subject to vendor / subprocessor terms.
- **Audit:** every AI invocation that produces a user-visible output writes to `audit_events` with surface, capability used, reason (when required), and a stable correlation id linking input slice → output → any mutation the human then takes (1H.1).
- **Output safety filter:** outputs that would name an individual on a non-(P)/(O) surface (e.g. on (M)) are **rejected at the boundary**, not "softened" — see **1H.4.2.**

### 1N.5 Closed loop (insight → action → measurement)

- **Insight surfaces tie back to the same spine they read from.** When (P) suggests a triage, the human acts via 1G; when (O) flags a dead `outbound_job`, the human re-enqueues via **1H.2**; when (A) flags a bottleneck, the org changes capacity / policy and **1H** funnel/duration metrics show the result; when (M) flags a low-quality source, the org changes spend **outside** the app and **1H.4** cohort metrics show the result.
- **No control loop inside AI:** the AI layer **does not** auto-throttle outbound, **does not** auto-pause campaigns, **does not** auto-promote/demote provider queues. The **system rules** (1G.3 send-gate, 1H.2 ops levers, 1D.1 capability changes) remain the authority.

### 1N.6 What this **rejects**

- A "marketing AI" SaaS or vendor that ingests its own copy of `patients` / `messages` / `clinical_visits` to produce growth dashboards.
- A "provider AI" that writes to `treatment_items` / `clinical_visits` directly.
- An "ops AI" that calls `requireCapability`-gated mutations as a service account on staff's behalf.
- An "admin AI" that mutates capacity, capabilities, or org policy without a human + audit.
- Any **per-role AI** that re-derives the same primitives from raw rows, fragmenting audit and PHI rules.

### 1N.7 Cross-links

**Section 1G** (AI layer + 1G.3(f) state interpretation), **Section 1G.1** (ops/SLA roster), **Section 1H** (read models), **Section 1H.1** (trace), **Section 1H.2** (platform intervention), **Section 1H.3** (drift / recon), **Section 1H.4 / 1H.4.1 / 1H.4.2** (marketing surface + hard constraints), **Section 1D / 1D.1** (capability + elevation), **Section 1I** (money), **Section 1J / 1J.10** (identity + safety preflight), **Intent** (RLS, service-role discipline, audit, subprocessors).

---

## Appendix: Injectable / peptide treatment requirements (pressure-test)

*Uses the same locked three-layer map, `care_programs` → `treatment_items` spine, `treatment_orders` + 1I as applicable, Section 1F, Section 1E, Section 1G, **Section 1H**, **Section 1I**, **Section 1J.1–1J.9** and **1J.10–1J.11** (gaps, `loadPatientCaseSafetySnapshot` target, pressure tests, abuse, refinements). **No** core redesign—only what must extend.*


### 1. What is already compatible (unchanged)

- **Program and treatment row model** — `care_programs` + per-medication **`treatment_items`**, status workflow, supersede, `dosage` JSON, `metadata` (formulary handoff, `fulfillment_channel`, `rx_supply`, prescriber block) as in [docs/patient-dashboard-v2.md](../../docs/patient-dashboard-v2.md).
- **Route in structured dosing** — The documented canonical shape already includes **`route`** (e.g. `SQ`); subcut and similar injectable routes fit without a new table.
- **Refill and review pipeline** — `refill_requests`, staff review, dashboard “next …” hints via `treatment_items.metadata` (`next_refill_due_at`, `next_checkin_at`, `next_visit_at`).
- **Payment / order lifecycle (clinical)** — `treatment_orders` + **1I** **primary-PSP** **adapter (v1)** + **idempotent** **inbound** **(webhook** **/ HTTP)**; **separate** from retail (Section 1E) as already locked.
- **Patient touchpoints** — `patient_timeline_events`, treatment check-in patterns, future **mandatory appointment** flags using Section 1F **bookable service** + `appointment` rows when scheduling exists.
- **Access and audit** — `requireCapability`, `audit_events`, RLS; **treat** **app** **capabilities** as **source** for **“who** **may** **act,”** and **tighten** **RLS**/read models as the **min-necessary** bar **rises** (see Intent Layer 1).

### 2. Minimal additions (schema / workflow, not a new core)

*Prefer **`treatment_items.metadata` + `dosage` keys** and small **enums** where needed; add columns only when something must be query-indexed or constrained in SQL.*

| Area | Minimal addition |
|------|------------------|
| **Route / formulation** | Explicit **`administration_route`** in `dosage` (or top-level) including injectable subtypes; **reconstitution** (e.g. bacteriostatic water volume, vial size), **concentration** after mix, **BUD** (beyond-use date) after reconstitution when clinically required—**as structured fields in JSON** first. |
| **Fulfillment / partner** | Flags: **cold_chain**, **ship_with_ice**, **compounded** vs 503B-style; **partner SOP** reference in metadata; align with existing `fulfillment_channel` values or **documented extensions** to the enum only if the DB enforces it today. |
| **Ancillary bundling** | **Order line association** (clinical order or a linked retail order per Section 1E): e.g. syringes, sharps, alcohol swabs—**line items** or `metadata.ancillary_skus[]` with **fulfillment_group** so pharmacy ships one package; no new “core” if retail catalog supplies SKUs. |
| **Training / instruction** | **Attestation** rows or timeline events: `patient_acknowledged_injection_training_at`, link to **education artifact** (URL or `patient_documents` id); staff **witness** optional—store as **timeline + audit** or `metadata` until a formal `consent` table exists. |
| **Consent / documentation** | **Layer 1 truth:** consent PDF + version + signed timestamp; **pointer** in `treatment_items.metadata` or patient documents table; high-risk injectables may require **program-specific** consent templates (template id, not free text). |
| **Refill / check-in / titration** | **Policy** on `care_program` or `treatment_items.metadata`: `min_days_between_refills`, **titration schedule ref** (external doc or structured steps), **required_checkin_interval** vs **required_visit_interval** (async check-in vs **mandatory scheduled** appointment per Section 1F). |
| **Storage / handling** | Patient-facing and ops: **storage_temp_range**, **do_not_shake**, **light_sensitive** in metadata; **fulfillment** path: partner SLA for cold chain—**operational text + validation rules** in jobs, not a redesign. |

### 3. Where injectables increase care complexity (vs typical oral, e.g. tadalafil-type)

- **Physical product** — Cold chain, breakage, **short BUD** after reconstitution, **lot** sensitivity for recalls (even if you only **reserve** lot fields for later).
- **Administration** — Site rotation, missed-dose rules, **in-clinic** vs **at-home** first dose (some programs require observed first dose → **ties to appointments**).
- **Safety monitoring** — Labs, BP, symptoms may be **tighter** → more **check-ins** or **mandatory visits** by policy.
- **Regulatory / consent** — Higher bar for **off-label**, peptide sourcing, compounding; **document trail** must be defensible.
- **Operations** — Different **503A/503B** reality, **shipping** constraints, **returns** of open vials often impossible—**refund/exception** workflows touch **support** and **ops** more than orals.

### 4. Reserve now vs implement later

| Reserve now (naming, nullable fields, policy hooks) | Implement when volume/compliance demands it |
|----------------------------------------------------|---------------------------------------------|
| `dosage` / `metadata` keys for route, reconstitution, BUD, cold_chain, in_clinic_first_dose | **Lot** / **NDC** / **serial** traceability end-to-end |
| Links from `treatment_item` → **consent document** version | Full **eConsent** product with versioning UI |
| `metadata.required_touchpoint: checkin | appointment` + interval | **Auto-scheduler** that creates appointments from rules |
| Ancillary SKUs in metadata or order lines | **WMS**, **barcode** scan at pack station |
| Training acknowledgment timestamps on timeline | **LMS** integration, video completion % |
| Policy text for **compounded peptide** sources | **State board** / **PCAB**-style operational certification features |

**Locked decision preserved:** Clinical path stays **`treatment_items` + `treatment_orders`**; retail ancillaries use **Section 1E** patterns; engagement mix stays **appointments + check-ins + messages**; no merging Rx and retail in one undifferentiated order type.

---

## Appendix: Lab workflow end-to-end

**Status: promoted.** Labs are no longer treated as appendix-only. The canonical foundation lives in **`Section 1L: Diagnostics + Lab Testing Layer`** above; this appendix is retained as the **implementation reference** (object model details, schema decisions, ingestion mechanics, scenarios, admin overlay views) that `Section 1L` builds on. Where the appendix and `Section 1L` overlap, **Section 1L is the operative contract** and the appendix supplies the long-form mechanics. **§11–17** = additive schema, linkage, lifecycle, ingestion, TRT mapping (still authoritative for those fields). **§18–§31** = lab system end-to-end PARTS 1–10 + admin overlay slice (now cross-referenced from `1L.2`–`1L.13` and `1L.11`).

*Sources:* `care_programs` → `treatment_items`, [docs/patient-dashboard-v2.md](../../docs/patient-dashboard-v2.md), `lab_orders` and migrations ([`20260423150000_lab_orders_and_storage.sql`](../../supabase/migrations/20260423150000_lab_orders_and_storage.sql), [`20260428100000_orders_lifecycle_v1.sql`](../../supabase/migrations/20260428100000_orders_lifecycle_v1.sql) kit columns, [`20260426100000_chart_ai_reviews_and_lab_observations.sql`](../../supabase/migrations/20260426100000_chart_ai_reviews_and_lab_observations.sql)), portal document upload, `lib/ai/processChartAiReviewJob.ts`. **No** parallel “second lab app” — **system, schema, flow** only in this appendix.

### Transition (precise)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ A. Source artifact (raw)                                                      │
│    – Partner HL7/PDF, PSC fax, at-home kit return file, patient upload       │
│    – Storage: S3/Supabase object path; optional hash                          │
│    – Row: `patient_diagnostic_reports` (report-level) **or** attachment on    │
│      `patient_diagnostic_reports` + future `source_lab_order_id` in metadata  │
├──────────────────────────────────────────────────────────────────────────────┤
│ B. Machine / structured layer                                                 │
│    – **Partner API / manual entry** → can insert `patient_lab_observations`     │
│      directly with `test_code`, `test_name`, values, `observed_at`            │
│    – **OCR + extraction / heuristics** (today: chart AI job) → `patient_lab_   │
│      observations` with `source_review_id`, `metadata.extraction_source`      │
├──────────────────────────────────────────────────────────────────────────────┤
│ C. Provider review & interpretation (clinical truth for decisions)            │
│    – **Not** the same as machine `abnormal_flag` alone                        │
│    – Lives in: `clinical_visits` + narrative, **or** a dedicated            │
│      `lab_result_review` / `interpretation` pointer (additive), **or**         │
│      `patient_chart_ai_reviews` lifecycle when AI-assisted                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ D. Patient visibility                                                        │
│    – Policy: which rows/columns a patient can see; never raw unreviewed in    │
│      all cases (org rule)                                                    │
│    – **Timeline** + `patient_timeline_events` for “results ready / reviewed   │
│      / action required” **narrative**; dashboard state derived from            │
│      B+C+D + program **gates** in `treatment_items.metadata` or protocol    │
├──────────────────────────────────────────────────────────────────────────────┤
│ E. Next action / gating                                                        │
│    – Continuation, refill, dose, TRT start: **program engine** reading       │
│      observed values + provider conclusion + `care_program` / `treatment_  │
│      item` status transitions                                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Who puts the lab value in structurally:** (1) **ingestion job** or **staff** from **partner feed** → `patient_lab_observations`; (2) **extraction** from file/intake → `patient_lab_observations` with `metadata.extraction_source`; (3) **provider manual correction** on the chart (updates observation or spawns new row with provenance in `metadata`); **provenance** preserved via `source_dedupe_key`, `source_submission_id`, `source_attachment_path`.

**Alignment with locked spec (§11, §14):** First-class columns **`patient_diagnostic_reports.lab_order_id`**, **`patient_lab_observations.diagnostic_report_id`**, and order-level **`lab_orders.first_result_ingested_at`** replace the older “only metadata” phrasing. Until migrated, the chain may be looser; **the target is §11.**

### 1. What already exists in the current architecture

| Layer | What exists |
|------|-------------|
| **Lab requisition (staff)** | `public.lab_orders`: `patient_id`, `status`, `order_date`, `tests` (jsonb), `pdf_artifact`, `published_to_patient_at`, `metadata`, `created_by_staff_id`. Staff path: `createAndPublishLabOrder` → portal PDF, timeline `lab_order_published`, audit. |
| **Kit logistics (at-home, shipping only)** | `lab_orders.kit_*` columns + `lab_kit_fulfillment_status` enum and **transitions** — **separate** from requisition/result medical lifecycle in comments. |
| **Orders lifecycle (other)** | `treatment_orders` = **medication** clinical commerce; **not** a substitute for `lab_orders`. `supplement_fulfillment_orders` = retail-style supplement shipping. **Section 1E** = general retail when built. |
| **Discrete values** | `patient_lab_observations`: analyte-level, `abnormal_flag`, optional `source_review_id` / `source_submission_id`, `source_attachment_path`, `metadata`, `source_dedupe_key`. |
| **Report-level document** | `patient_diagnostic_reports`: `diagnostic_kind` includes `'lab'`, `result_text`, `impression_text`, `source_attachment_path`, `status` preliminary/final, links to review/submission. |
| **AI-assisted chart review** | `patient_chart_ai_reviews` + `processChartAiReviewJob` → can upsert **lab** observations from **intake text** heuristics. |
| **External upload pipeline** | `submitPatientPortalDocumentUpload` → storage + `patient_diagnostic_reports` + **timeline** for patient-originated files. |
| **Engagement & gates (soft)** | `treatment_items.metadata` dates: `next_checkin_at`, `next_refill_due_at`, `next_visit_at`; program/treatment **workflow** and **intake** forms. |
| **Provider chart** | `clinical_visits` + `clinical_visit_rx_reviews`; PDF artifacts for visits; capabilities on patient-case **actions**. |

### 2. From “gaps” to locked answers (read §11–15 when implementing)

The bullets below were **open questions** before the **locked** spec. They are **not** removed so you can see the evolution; **decisions** are in **§11 (schema)**, **§12 (commerce / treatment origin)**, **§13 (lifecycle)**, **§14 (ingest → review)**, **§15 (TRT map)**.

| Prior gap | Locked direction (see §11–15) |
|-----------|---------------------------------------------|
| **`lab_orders` ↔ results** | **§11:** nullable **`lab_order_id` on `patient_diagnostic_reports`**, **`diagnostic_report_id` on `patient_lab_observations`**, **`first_result_ingested_at` on `lab_orders`**. No separate “lab result” table. |
| **Purchased standalone lab** | **§12:** `lab_orders.metadata.commerce_order_id` (idempotent create from paid **1E** commerce), vs **treatment** path with `metadata.origin=treatment_workflow`. |
| **Provider review + patient release** | **§11, §14:** **Report-level** `reviewed_at`, `reviewed_by_staff_id`, `released_to_patient_at` on **`patient_diagnostic_reports`**; patient read gated on **`released_to_patient_at`**. `clinical_visits` still holds narrative/interpretation as today. |
| **Partner / PSC ingest** | **§14:** Ingestion **lands in** `patient_diagnostic_reports` + `patient_lab_observations` with links above; no second ingest table. |
| **TRT gating** | **§8–9, §15, §16** unchanged in spirit: **`treatment_items` / program** + provider signoff; not a separate clinical rules engine. |

### 3. Lab order **types** (distinguish without new parallel systems)

| Type | System representation (conceptual) |
|------|------------------------------------|
| **External requisition (PSC / partner draw)** | `lab_orders` where `kit_fulfillment_status` = `not_shipping_kit`; `tests` = ordered panels; PDF to patient; results ingested as reports + observations. |
| **At-home kit** | Same `lab_orders` with kit lifecycle **+** requisition/result; kit columns track **logistics** only. |
| **Baseline vs monitoring vs repeat** | **Semantics** on `lab_orders.metadata` and/or `treatment_items.metadata` (e.g. `lab_context: baseline | monitoring | confirmatory`); may tie to `care_program` **protocol** definition (future or JSON). |
| **Routine vs urgent** | `metadata.priority` or program rule; may drive **queue ordering**, not a separate table. |
| **Purchased standalone screening (Scenario B)** | **Payment:** Section 1E **retail/shop order** (or a **`treatment_orders`-shaped** lab-only product if you keep all clinical-adjacent pay on that rail—**decision to lock**); **fulfillment** still creates or links a **`lab_orders` row** so one patient journey object exists. |
| **Included in treatment program (Scenario A)** | Intake + review → `lab_orders` (or pre-commit placeholder) + linkage to `care_program_id` / `treatment_items` in **`metadata`**; payment may be **`treatment_orders` for program bundle** or **separate** lab line—**lock per product**. |

### 4. Data model: source of truth (explicit)

| Concern | Primary object | Notes |
|---------|----------------|-------|
| “What was ordered” | `lab_orders` | Single row per **requisition / kit order**; `tests` json; status for **order workflow** (draft → published, etc. in app). |
| “Kit in the mail” | `lab_orders.kit_fulfillment_*` | **Shipping only**; not lab result state. |
| “Raw report PDF / image” | `patient_diagnostic_reports` + **storage** `source_attachment_path` or `metadata.upload` | **Report-level** text fields + file pointer. |
| “Numeric / discrete results” | `patient_lab_observations` | **One row per analyte** (or per line item); `abnormal_flag`; **link** to report via `metadata` or `source_dedupe_key` discipline. |
| “Provider narrative / SOAP tie-in” | `clinical_visits` (and addenda) + optional `review_note` on chart AI or **metadata on observations** | **Clinical interpretation** for medicolegal clarity. |
| “Outside upload” | Same: `submitPatientPortalDocumentUpload` → `patient_diagnostic_reports`; then **extract** or **staff entry** to observations. |

### 5. Commerce linkage (narrative — **canonical table: §12**)

- **Lab bundled in TRT program** — Intake + package price: may be one **`treatment_order`** (or program deposit) with metadata pointing to labs, or **separate** lines. **Do not** invent a second **internal** **money** **ontology;** use **`treatment_orders` + 1I** and/or **Section 1E** per locked split. The **`metadata.commerce_order_id` / `metadata.treatment_order_id`** pair on **`lab_orders`** (§12) is the **explicit** parent link for money; **do not** infer the rail from UI or prose alone. **Details:** **§12** (`metadata.treatment_order_id`, `metadata.origin`, `lab_context`).
- **Immediate pay standalone** — **Section 1E** / commerce captures payment; **idempotent** create **`lab_orders`** after pay (**§12**). **Kit** → `kit_fulfillment_status` as product requires.
- **Pay later / part of case review** — `lab_orders` in **draft**; billing per policy.  
- **References only on `lab_orders`:** `commerce_order_id` / `treatment_order_id` in **`metadata`** (or optional later FKs)—**not** a second source of **price** (**§12**).

### 6. Internal workflow (responsibilities)

- **Staff / ops:** create `lab_orders`, run **kit** fulfillment updates (aligned with [`app/api/internal/orders/[orderNumber]/fulfillment/route.ts`](../../app/api/internal/orders/[orderNumber]/fulfillment/route.ts) and `updateOrderFulfillment` for `LAB-…` identifiers), attach inbound PDFs, trigger **ingest jobs**, mark **logistics** milestones, **triage** inbox.
- **Provider / prescriber:** **review** structured observations + **sign** `clinical_visits` or a **release** action that sets “patient can see result summary” per policy, **order repeat labs** (new `lab_orders` row or supersede), **dose/continuation** decisions on **`treatment_items`**, **refer** (timeline + `care_interaction` / handoff record).
- **Who publishes lab PDF to patient (requisition):** already **staff** path in `createAndPublishLabOrder` with capability gate.
- **Who can mark “no clinical action”:** **provider** (or delegated role with **explicit capability**); not unauthenticated.

**Provider queue (conceptual):** items where `patient_lab_observations` exist with **no** linked `clinical_visits` sign-off within SLA, or **`lab_orders`** in **result_received** state awaiting review, or **abnormal_flag in (low, high, critical)**—**derived list**, not a requirement for a new `queue` table in v1.

### 7. Patient-facing state narrative (no UI—states to drive copy)

| Stage | Patient-visible narrative (system-level) |
|------|------------------------------------------|
| Order created | “Lab order placed” (if policy shows pre-requisition) |
| Requisition ready / published | “Instructions / requisition available” (portal) |
| Kit: queued / shipped / delivered | Derive from `kit_fulfillment_status` + tracking |
| Awaiting draw / return | “Complete lab” / “Return kit” (program-dependent) |
| Lab processing | Optional partner status in `metadata` (not always available) |
| Result file received | “We received your results” (from ingest event / timeline) |
| Under review | “Clinician reviewing” (if policy hides values until signoff) |
| Reviewed, normal | “No change needed / continue plan” (plus next dates in metadata) |
| Reviewed, action | “Message / schedule / new lab ordered” (timeline + `next_*` fields) |
| Referred out | “Outside referral” (timeline, not a hidden state) |

### 8. Care continuation & gating

- **Protocol:** `care_program.metadata` (or future `care_protocol` table) lists **required labs** at T+0, T+8w, etc.; engine compares **latest** `patient_lab_observations` + dates to **gates** on `treatment_items` status (e.g. **cannot** move to `approved` until **baseline T present** with provider flag).
- **Refill / dose / continuation:** `refill_requests` + `treatment_items` **workflow**; provider uses **observations** as evidence in **rx_reviews** pattern already used for visit notes.
- **Abnormal / repeat / refer:** New **`lab_orders`** for repeat; **`clinical_visits` / timeline** for refer; **alerts** = jobs + `patient_timeline_events` to staff, optional **in-app** patient flag in dashboard model.

### 9. EMR / chart integration (system level)

- **Chart home:** `patient_diagnostic_reports` + `patient_lab_observations` **joined to** `patient_id` + filter by `observed_at`.
- **SOAP / visit:** `clinical_visits` **references** “reviewed as of” lab context in body text or `metadata` keys `lab_observation_ids: []`.
- **Timeline:** every material step = **`patient_timeline_events`** (lab ordered, published, result received, review complete) — **preserve** D4 scoping: staff writes via **actions** with audit.
- **AI reviews:** `patient_chart_ai_reviews` can **suggest**; **provider** accepts/rejects per locked lifecycle.
- **Continuation decisions:** `treatment_items` status + **`clinical_visit` link**; not a new shadow table.

### 10. Guardrails (restate)

- **Single loop:** requisition/kit/results live in **`lab_orders` + diagnostic + observation**—no “Lab v2” schema fork.
- **Locked splits:** `treatment_orders` (clinical med commerce) vs **1E** / **`commerce_orders` retail**; **appointments** vs **check-ins**; **PHI** in RLS and audit.
- **Orphan** results: **`lab_order_id` null** is **valid**; **reconciliation** to a **`lab_orders`** row (or **explicit** “standalone without order”) is a **staff** **action** with **audit**—**no** silent relink that **hides** provenance.
- **Authorization, not a single “sign” blob:** **Therapy** **changes** (dose, new Rx, continuation) need **(Intent)** a **`clinical_visits`**-style **record** with **`diagnostic_report_id`** **where** **driven** **by** **labs**, and/or a **`treatment_items` transition** **gated** on **`patient_diagnostic_reports.reviewed_at`**. **`released_to_patient_at`** = **disclosure** to the patient, **not** prescriber **authorization** for **dosing**. **`patient_chart_ai_reviews`** = **draft** / **suggestion**, not **replacing** the above. Ingest/ML = **assist**, not **final** clinical act.
- **Ingestion edge:** **nullable** **`lab_order_id` on `patient_diagnostic_reports` (§11)** = **reconciliation** **in** the **same** **objects** (metadata / staff link), **not** a **separate** **ingest** app.

### 11. Minimal schema changes (decision record)

**Principle:** **Report-level** holds order linkage + provider review/release. **Observation-level** holds analyte data + link to the report. **No** duplicate `reviewed_at` on every observation row (unless you later need line-level release—YAGNI).

| # | Table | Column | Type | Null | Notes |
|---|--------|--------|------|------|--------|
| 1 | `patient_diagnostic_reports` | `lab_order_id` | `uuid` → `public.lab_orders(id)` `on delete set null` | **NULL** | Links **ingested result document** to the requisition/kit order. Set on **first** ingest for that order. |
| 2 | `patient_diagnostic_reports` | `reviewed_by_staff_id` | `uuid` → `public.staff_profiles(id)` `on delete set null` | **NULL** | Provider (or delegate) who completed **clinical** review. |
| 3 | `patient_diagnostic_reports` | `reviewed_at` | `timestamptz` | **NULL** | When review **completed** (not “under review”). |
| 4 | `patient_diagnostic_reports` | `released_to_patient_at` | `timestamptz` | **NULL** | When **patient** may see result summary (policy: may equal `reviewed_at` or later). |
| 5 | `patient_lab_observations` | `diagnostic_report_id` | `uuid` → `public.patient_diagnostic_reports(id)` `on delete set null` | **NULL** | Binds each analyte row to its **parent report** (provenance + “inherit release from report” in queries). |
| 6 | `lab_orders` | `first_result_ingested_at` | `timestamptz` | **NULL** | Set when **any** result report is ingested and linked to this order (order-level “we have something back”). |

**Not added on `patient_lab_observations` for v1:** `reviewed_at` / `released_to_patient_at` (redundant if release is **report-scoped**). If a future product needs **per-analyte** redaction, add `metadata.redacted_from_patient: true` on that row only.

**Existing columns reused:** `patient_diagnostic_reports.extracted_at` = row creation / extraction time (can serve as “ingested at” for machine path); add migration comment that **`released_to_patient_at` is null** until provider policy allows display.

### 12. Commerce ↔ `lab_orders` linkage (locked decision)

| Path | Payment / order object | How `lab_orders` is created | What is stored on `lab_orders` |
|------|-------------------------|------------------------------|---------------------------------|
| **Standalone lab (patient pays product)** | **`commerce_orders`** (Section 1E; exact table name may be `shop_orders` / `commerce_order` in implementation) | **Server job** or **checkout webhook** after **paid** (or `checkout.session.completed` equivalent): `insert lab_orders` with `patient_id`, `tests` from product config, `metadata.commerce_order_id` = **`commerce_orders.id` (uuid text)** and optional `metadata.commerce_line_id`. | `metadata` JSON: at minimum `{ "commerce_order_id": "uuid", "lab_product_sku"?: "…", "origin": "standalone_commerce" }` |
| **Treatment-linked (TRT, program baseline)** | **`treatment_orders` / case fee** (existing clinical rail) or **no** separate charge if “labs included in program” | **Provider or staff** action in **treatment flow** after review step: `insert lab_orders` with `patient_id`, `care_program_id` / `treatment_item_id` in **`metadata`**, **no** `commerce_order_id` (or set `metadata.treatment_order_id` if labs billed on same invoice). | `metadata` JSON: at minimum `{ "treatment_item_id"?, "care_program_id"?, "treatment_order_id"?, "lab_context": "baseline" | "monitoring" | "confirmatory", "origin": "treatment_workflow" }` |

**FK policy:** **Prefer** `metadata` uuids for **commerce** until `commerce_orders` is stable; optional later migration to **`lab_orders.commerce_order_id uuid` nullable** FK. **No** second source of price—**commerce_orders** and **treatment_orders** own money.

**Creation after purchase (standalone):** one **idempotent** step: e.g. `if not exists lab_orders where metadata->>'commerce_order_id' = $1 then insert …`. **Kit** sub-state: set `kit_fulfillment_status` to `kit_queued` if product = at-home kit.

### 13. Minimal result lifecycle (no enum state machine)

States are **derived**, not a separate `lab_status` enum (keeps v1 small):

| Narrative | Rule (derived) |
|----------|----------------|
| **Result received** | `lab_orders.first_result_ingested_at is not null` **OR** exists `patient_diagnostic_reports` with `lab_order_id = this order` and `diagnostic_kind = 'lab'`. |
| **Under review** | Report row exists, **`reviewed_at is null`**, and **`released_to_patient_at is null`**. |
| **Reviewed** | `patient_diagnostic_reports.reviewed_at is not null` (and usually `reviewed_by_staff_id` set). |
| **Released to patient** | `patient_diagnostic_reports.released_to_patient_at is not null`. |

**Tie to `patient_timeline_events`:**  
- **Result received** → event_type e.g. `lab_result_received` (payload: `lab_order_id`, `diagnostic_report_id`).  
- **Reviewed** → e.g. `lab_result_reviewed` (payload: `diagnostic_report_id`, `reviewed_by_staff_id`).  
- **Released** → e.g. `lab_released_to_patient` (payload: `diagnostic_report_id`).

(Exact `event_type` strings are product constants; must stay **append-only** and auditable.)

### 14. Ingestion → observation → review (precise)

| Step | Where | What |
|------|--------|------|
| **Raw** | Supabase **Storage** path in `patient_diagnostic_reports.source_attachment_path` (and/or `metadata.upload`); `diagnostic_kind = 'lab'`. | Row created with **`lab_order_id` set** when order is known. |
| **Report** | `patient_diagnostic_reports` | `result_text` / `impression_text` optional; `status` preliminary\|final. **Provider review fields** (§11) live **here only** for v1. |
| **Observations** | `patient_lab_observations` | One row per analyte; **`diagnostic_report_id` required** (NOT NULL) for **new** ingests once column exists; legacy rows stay nullable during backfill. |
| **Provenance** | `source_dedupe_key`, `metadata.extraction_source`, `source_submission_id`, `lab_order_id` on report, `source_review_id` (AI) if applicable. | **Provider “modifies”** by: (a) **editing** observation with audit, or (b) `clinical_visits` narrative + pointer to `diagnostic_report_id` in `metadata`—**no** overwrite of raw file; corrections = new **report** row or `status=corrected` if using amendment pattern. |
| **Patient-visible** | **Read policy:** patient queries **only** `patient_diagnostic_reports` (and child observations) where **`released_to_patient_at is not null`** and **RLS** allows. Machine `abnormal_flag` visible **only** after that gate unless product says otherwise. |

**Raw → report → observation → provider review → patient:** unbroken chain via `lab_order_id` on **report** + `diagnostic_report_id` on **observations** + **timestamps** on **report** for review/release.

### 15. TRT-style minimal flow (object / field / event)

| Step | Objects touched | Fields / changes | Timeline / audit (examples) |
|------|-----------------|-----------------|-----------------------------|
| 1 Intake complete | `form_submissions`, `patients` | — | `patient_timeline` / intake event if you emit one today |
| 2 Provider / staff requests baseline labs | **`lab_orders` insert** | `patient_id`, `tests`, `order_date`, `status` → draft or published, `metadata.lab_context=baseline`, `metadata.treatment_item_id` + `care_program_id`, `metadata.origin=treatment_workflow` | `lab_order_created` or similar |
| 3 Requisition to patient or kit | **`lab_orders` update** | `pdf_artifact`, `published_to_patient_at`, and/or `kit_fulfillment_status` | existing `lab_order_published` |
| 4 Patient notified | — | Resend / email (outside schema) | optional timeline `notification_sent` |
| 5 Lab **completed** (draw / kit returned) | partner or ops | may set `lab_orders.metadata.sample_collected_at` (optional future) | optional |
| 6 Result **ingested** | **`patient_diagnostic_reports`**, **`patient_lab_observations`**, **`lab_orders`** | Report: `lab_order_id`, file path, `extracted_at`. Obs: `diagnostic_report_id` + values. **Order:** `first_result_ingested_at` | `lab_result_received` |
| 7 Provider **reviews** | **`patient_diagnostic_reports`** | `reviewed_at`, `reviewed_by_staff_id`; optional `clinical_visits` row references report | `lab_result_reviewed` |
| 8 **Released** to patient (or held) | **`patient_diagnostic_reports`** | `released_to_patient_at` | `lab_released_to_patient` |
| 9 **Treatment** proceeds or not | **`treatment_items`**, maybe **`clinical_visit` + rx_reviews`**, **`refill_requests`/`treatment_orders`** as designed | status transitions, gate satisfied when baseline `released` + provider signoff in visit | `clinical_visit_documented` / workflow events |

### 16. Scenarios (step lists) — high level

**Scenario A — TRT (baseline + monitoring)**  
Intake + payment (Section **1I**; v1 **may** use **primary** **card** **PSP**) → case **review** (`patient_chart_ai_reviews` or manual) → **baseline** `lab_orders` (external or kit per service line) → requisition **published** to patient or kit **shipped** → **collection** (implicit / partner) → result PDF + HL7/entry → **`patient_diagnostic_reports` + `patient_lab_observations`** → **provider** documents review in `clinical_visits` / rx review → **gating** allows or blocks **treatment approval** on `treatment_items` → `patient_timeline` + **dashboard** next steps → **follow-up** `lab_orders` per protocol metadata → same loop, **monitoring** context in `lab_orders.metadata.lab_context=monitoring`.

**Scenario B — Standalone screening**  
Landing **intake** (program or form) → **Section 1E** purchase (or `treatment_order` if you unify lab product pay on clinical rail) → **`lab_orders` created and linked to transaction id** in `metadata` → **kit** path **or** PSC instruction PDF → return → **ingest** → **queue** for provider if abnormal policy → **signoff** + **release** to patient view → if abnormal: **refer / repeat** via new `lab_orders` and timeline, **not** a parallel “screening v2” app.

### 17. Out of scope for now (explicit)

- **Full LIMS / compendium of every LOINC** mapping.  
- **Real-time** partner **orders** **API** contract (define when vendor chosen).  
- **Lab-specific billing** 837/claims—unless product adds **billing** module.  
- **OCR** at production grade for all PDF formats—**reserve** `metadata.extraction_confidence` and **manual override**.  
- **Patient**-editable lab values.  
- **Autonomous** dose changes from labs **without** provider state transition.

---

## Lab system end-to-end (PARTS 1–10 — definitive design on top of §1–§17)

*Scope:* expand §1–§17 with definitive answers for object creation, intake routing, checkout decision, fulfillment, ingestion, provider/system loop, patient display, errors, care-program linkage, and retention loop. **No new tables.** Reuse `lab_orders`, `patient_diagnostic_reports`, `patient_lab_observations`, `commerce_orders` / `treatment_orders`, `outbound_jobs`, `patient_timeline_events`, `audit_events`, plus existing `Capability` set.

### 18. PART 1 — Lab object model (canonical answers)

**Q1. What creates a `lab_orders` row?**
- **Canonical creator:** the **payment-success handler** for the parent commerce/treatment order (Scenario B retail/screening) **or** the **provider/staff workflow action** (Scenario A treatment-linked baseline/monitoring). See §12 for the locked split.
- **Intake** does **not** create `lab_orders` directly. Intake records selection intent on the cart / `intake_session` and the `treatment_plan_candidate` per `1K.10`.
- **Vendor return** does **not** create `lab_orders` retroactively; if a result arrives without a known order, `patient_diagnostic_reports.lab_order_id` is left **null** and the row is reconciled by staff per §10 (orphan results rule).

**Q2. What determines `lab_orders.id`?**
- App-generated UUID at the **creation** step above. Idempotency is enforced by `metadata.commerce_order_id` (Scenario B) or the originating provider/staff action context (Scenario A). The **idempotency key** for "have we already created the lab_order for this commerce_order" is `(metadata.commerce_order_id, panel_type)` per §12.

**Q3. How do multiple panels map?**
- **One `lab_orders` row per panel** (per `panel_type`). This keeps requisition/kit lifecycle, partner ref, and result reconciliation 1:1 with the panel and avoids partial-result ambiguity.
- A single checkout that bundles two panels (e.g., full panel + male hormones) creates **two `lab_orders` rows**, both with the same parent `metadata.commerce_order_id` (or `metadata.treatment_order_id`) and a shared `intake_session_id` reference.
- The `tests` JSON inside one `lab_orders` row carries the **analytes within** that panel, not a multi-panel grouping.

**Panel-type enum strategy (`metadata.panel_type` on `lab_orders`):**

Stable codes; org-extensible only via map/repo review (same governance as `Capability` and `1H.6.1E`):

- `full_panel`
- `male_hormones`
- `female_hormones`
- `metabolic`
- `lipid`
- `inflammation`
- `thyroid`
- `vitamins_micronutrients`
- `glycemic` (HbA1c, fasting glucose, insulin)
- `kidney_liver`
- `cbc`
- `cardiovascular_risk`
- `toxins_heavy_metals`
- `sti_screen`
- `pregnancy_screen` (where applicable / lawful)
- `custom_panel` (escape hatch; requires `metadata.custom_panel_definition_id`)

**`metadata.vendor_partner_id`:**
- Stable id per partner (Quest-style PSC, at-home kit vendor A/B, regional partners). Set at create time from product/policy.
- Routing per partner uses `metadata.vendor_partner_id` + `metadata.panel_type` + jurisdiction (per `1G.4.1`); no vendor-class string in routing logic.

**`metadata.fulfillment_type` on `lab_orders`:**
- `in_person` — partner draw / PSC / requisition flow.
- `at_home` — kit shipped to patient.
- `provider_collected` — sample collected during a `Section 1F` encounter (rare; reserved).

### 19. PART 2 — Intake → lab trigger

- **Intake (`Section 1K`) does not create `lab_orders`.** Intake produces:
  - a `treatment_plan_candidate` per `1K.10` referencing existing `treatment_items` / catalog entries (lab products are catalog entries with `panel_type` + `fulfillment_type` defined at the catalog level).
  - lab line items added to the cart (per existing 1E checkout primitives) with the same `panel_type` / `fulfillment_type` denormalized for checkout display.
- **Add-on logic at intake (deterministic, per `1K.4` branching):** declarative rules in the pathway policy file map answers to recommended panels:
  - TRT pathway → `male_hormones` (required) + `metabolic` (recommended add-on).
  - Female hormone pathway → `female_hormones` (required) + `thyroid` (recommended).
  - GLP-1 pathway → `metabolic` + `glycemic` + `kidney_liver` (depending on policy).
  - Standalone screening → `full_panel` (single line) or any user-selected panels.
- **Reuse from prior sessions per `1K.5`:** prior global answers (allergies, medications, conditions) are reused; the lab line itself is not auto-added without explicit selection. If a prior valid lab is fresh (within freshness window per pathway policy), the engine may **suggest skipping** the lab; final decision goes to provider per `1K.7` / `Section 1G`.
- **Checkout transition:** intake completes → patient sees `treatment_plan_candidate` (with lab lines) → patient confirms → existing 1E/`commerce_orders` checkout creates the parent commerce/treatment order with lab line items.

### 20. PART 3 — Checkout + order creation (decision: **B**)

**Decision (locked): `lab_orders` rows are created by the payment-success webhook handler (Scenario B) or by the provider/staff workflow action (Scenario A).** Not at checkout submit; not at vendor confirmation.

**Justification:**
- **Not (A) at checkout submit:** payment may fail; creating `lab_orders` before payment leaves orphan rows and forces a separate cleanup path. We avoid creating clinical workflow rows for un-paid/un-authorized work.
- **Not (C) at vendor confirmation:** the patient experience needs the order to exist immediately after payment so requisitions/PDFs/kit shipment can be queued. Waiting on partner ack creates a visible gap and prevents in-app status display.
- **(B) at payment success:** matches `1I.6` idempotency principles; matches `Section 1K` "today vs if-prescribed" discipline (§1K.11) — the `lab_orders` is the **today-charged** path, while Rx remains gated by provider approval.

**Mechanics:**
- Webhook handler is **idempotent** keyed on `(provider, event_id)` per `1I.6`.
- Row creation: `if not exists lab_orders where metadata->>'commerce_order_id' = $X and metadata->>'panel_type' = $Y then insert ...`.
- Same transaction writes a `patient_timeline_events` row of type `lab_order_created` (payload: `lab_order_id`, `panel_type`, `vendor_partner_id`, `fulfillment_type`, parent commerce/treatment order id) and an `audit_events` row.
- `outbound_jobs` row enqueued immediately for the next fulfillment step (requisition publish or kit ship), per §21.

### 21. PART 4 — Fulfillment flow (in-person vs at-home)

**A. In-person (Quest-style PSC / partner draw, `fulfillment_type = in_person`):**

- `outbound_jobs` row enqueued: send order to lab partner API (per partner adapter; idempotent per `1I.6`).
- Partner returns requisition / order id → stored on `lab_orders.metadata.partner_order_ref`.
- Requisition PDF generated/published to patient via `lab_orders.pdf_artifact` + `published_to_patient_at`.
- Patient visits PSC; collection happens partner-side; system has no event until result return per §22.
- `lab_orders.status` (existing column) follows the per-app conventions (e.g., `draft → published`); fulfillment sub-state lives in `lab_orders.metadata.fulfillment_substatus`:
  - `requisition_pending` → `requisition_published` → `awaiting_collection` → `collection_completed` (where partner exposes it) → `result_received` (also derivable from §13).

**B. At-home kits (`fulfillment_type = at_home`):**

- `outbound_jobs` row enqueued: ship kit (uses existing kit shipping primitives; `lab_orders.kit_fulfillment_status` per §3 already covers logistics).
- Sub-states (existing column): `kit_queued → kit_shipped → kit_delivered → sample_in_transit → sample_received → sample_processing → sample_invalid` (terminal per §25 if applicable).
- Tracking refs in `lab_orders.metadata.kit_tracking_ref`; partner sample id in `metadata.kit_sample_ref`.
- **Sample return** triggers partner-side processing; system has no per-step visibility until result return.

**`lab_orders.status` (high-level, existing) vs `metadata.fulfillment_substatus` (granular, new keys):**
- Top-level `status` covers requisition lifecycle (draft, published, completed, cancelled) — keep existing semantics.
- `fulfillment_substatus` covers the partner/kit logistics granularity above.

**Retry logic via `outbound_jobs`:**
- All vendor-bound outbound calls use `outbound_jobs` with `dedupe_key = (lab_order_id, action_code)`; existing retry/dead-letter discipline per `1H.1` / `1H.3` applies.
- Failed partner submissions stay queryable; `dead` rows surface in `1G.5` exception ops queue (category `fulfillment`, per `1G.5.6`), with classification per `1H.6.1E` typically `fulfillment_partner_outage` or `integration_or_webhook_failure`.

### 22. PART 5 — Result ingestion (most important)

- **Mapping into `patient_lab_observations`:**
  - `observation_code` — LOINC where available; partner-native code where LOINC absent (with `metadata.code_system` for provenance).
  - `value`, `units` — from partner payload; numeric or coded.
  - `abnormal_flag` — partner-provided flag normalized to internal vocabulary (e.g., `low | normal | high | critical`).
  - `source_dedupe_key` — composite of `(vendor_partner_id, partner_result_id, observation_code, observed_at)`; used to reject duplicate ingests of the same analyte.
  - `diagnostic_report_id` — required (NOT NULL) for new ingests per §11; binds analyte to its parent report.

**Q1. Does `lab_orders` determine observation IDs?**
- No. Observation IDs are app-generated UUIDs at ingest time. The **link** is via `patient_diagnostic_reports.lab_order_id` (set on first ingest) and `patient_lab_observations.diagnostic_report_id`. This preserves §10 orphan-result handling (results without a known order are still ingestible).

**Q2. Do incoming results create observations independently?**
- Yes — each ingest creates a `patient_diagnostic_reports` row first (with `lab_order_id` if known) and then one `patient_lab_observations` row per analyte under it. Independent of `lab_orders` row existence at ingest time.

**Q3. How do you prevent duplicates?**
- **Report-level:** `patient_diagnostic_reports.source_dedupe_key` keyed on `(vendor_partner_id, partner_result_id)`; reject duplicate ingest with `409`-equivalent path; idempotent per `1I.6`.
- **Observation-level:** `patient_lab_observations.source_dedupe_key` keyed on `(diagnostic_report_id, observation_code, observed_at)`; reject duplicate analyte rows.
- **Order-level "first result received":** `lab_orders.first_result_ingested_at` set on first successful report ingest tied to the order; subsequent reports for the same order do not overwrite this timestamp.

**Q4. How are results grouped per panel?**
- Group is implicit via `patient_diagnostic_reports.lab_order_id`; the `lab_orders.metadata.panel_type` + the per-panel `tests` JSON define which analytes "belong" to that panel for display per §24.
- A single result file may include multiple panels in some partner formats; the ingest path **splits into one report per `lab_orders` row** (one report per panel) when `lab_order_id` differs, keyed by partner-provided panel codes mapped to internal `panel_type`.

### 23. PART 6 — Provider + system loop (who owns what, when)

**Hospital/lab analogy (basic level):** lab returns result → result is filed in chart → ordering provider (or covering clinician on the protocol) reviews → provider documents review (or co-signs delegate) → optional patient release → optional follow-up action (repeat lab, dose change, referral).

**Lab confirmation checkpoints in this system:**
1. **Result received** (system) — `patient_diagnostic_reports` row created + `lab_orders.first_result_ingested_at` set + `patient_timeline_events` `lab.result.received`.
2. **Auto-triage** (system) — abnormal flag inspection by ingest job; emits `lab.result.abnormal_flagged` (typed event) when any observation has `abnormal_flag` ∈ `low|high|critical`; provider queue item created (per `1G.7.6` `queue.item.created` with item type `lab_review`).
3. **Provider review** (clinical) — provider opens result via `1G.8.7` lab review drawer, sets `patient_diagnostic_reports.reviewed_at` + `reviewed_by_staff_id` per §11; `patient_timeline_events` `lab.result.reviewed`. CoR-preferred routing per `1G.9.4`.
4. **Optional patient release** (clinical/policy) — provider sets `released_to_patient_at` per §11; `patient_timeline_events` `lab.result.published`.
5. **Follow-up action** (clinical) — repeat lab (new `lab_orders`), dose adjustment (per `1G.2`), referral (per `Section 1G`).

**When provider sees labs:**
- **Default:** all results enter the provider's lab review drawer (`1G.8.7`) — provider reviews every result; abnormal flags surface with severity per `1H.6.1D`.
- **Abnormal/critical** results escalate per `1G.9.4` (`lab.review.escalated`) — fastest eligible reviewer if CoR unavailable; never holds for continuity.
- **Routine normal** results follow CoR preference with SLA fallback per `1G.9.6`.

**What triggers `patient_chart_ai_reviews`:**
- Ingest job optionally enqueues an AI review job (per Section 1G AI layer); AI **suggests** observation summary, abnormality interpretation, and follow-up candidates. AI **cannot** set `reviewed_at`, satisfy `1G.2` enforcement, or auto-prescribe.
- Suggestions surface in the lab review drawer; provider accepts/edits/rejects via existing audited paths.

**Treatment suggestions (TRT, GLP-1, etc.):**
- Generated as `treatment_plan_candidate` per `1K.10` after intake or after a follow-up review; provisional only.
- Provider decision is the clinical record (`Section 1G` permits + `clinical_visits` + `1G.2` safety enforcement).

**Capabilities (additive):**
- `can_publish_lab_result` — set `released_to_patient_at` on a `patient_diagnostic_reports` row.
- `can_review_lab_result` — set `reviewed_at` + `reviewed_by_staff_id`.
- `can_create_lab_order` — staff/provider create `lab_orders` (Scenario A path); webhook-side creation runs as the system actor with audit.
- Existing `1J.10` clinical safety preflight applies for therapy mutations driven by lab results.

**Timeline events (canonical lab event vocabulary, in `patient_timeline_events`):**
- `lab.order.created`
- `lab.order.requisition_published`
- `lab.order.kit_shipped` / `lab.order.kit_delivered` / `lab.order.sample_received`
- `lab.result.received`
- `lab.result.abnormal_flagged`
- `lab.result.reviewed`
- `lab.result.published` (released to patient)
- `lab.result.refused` / `lab.result.invalid` (per §25)
- `lab.retest.recommended` / `lab.retest.ordered` (per §27)

**Admin/system actions in `audit_events`:** vendor send, replay, manual link of orphan result, refund-related state changes per §25.

### 24. PART 7 — Patient display + output

**Default grouping:**
- **By panel** (primary) — each `lab_orders` row renders as a panel card; analytes grouped under the parent `patient_diagnostic_reports`.
- **By category** (secondary view) — derived rollups (Hormones, Metabolic, Cardiovascular, Inflammation, Toxins, Vitamins/Micronutrients, Hematology, Liver/Kidney) computed from a stable mapping of `observation_code` → category (versioned mapping file; not stored per row).

**Trend tracking:**
- Per analyte (same `observation_code`) across time; show prior vs current with delta and reference range.
- Computed on read; no separate trend table.

**Insights (read-only, derived):**
- **"Heart health" / "biological age" / category scores** — derived from analyte values per a versioned scoring spec (similar discipline to `1K.9` symptom scoring): server-side, deterministic, displayed as **provisional indicators** with explicit "not a diagnosis" copy.
- **Flags** — high/low/critical badges driven by `abnormal_flag` (and abnormal-thresholds metadata where org overrides).
- **Provider note** — when present, surfaces the clinician summary; otherwise the patient sees raw values + ranges.
- **Release gate:** patient sees results only when `released_to_patient_at` is set per §11; `abnormal_flag` gating per product policy.

**Cross-link to `1H.4.2` AI constraints** when any AI-generated insight is exposed to non-clinical audiences (default: patient-facing copy is template-driven, not LLM live).

**Versioned category-mapping spec (display contract):**

The patient-portal "by category" view depends on a **stable, versioned mapping** from `observation_code` → category bucket. The mapping is **a code/policy file**, not a per-row metadata field — same governance as `Capability` and `1H.6.1E` classifications.

- **Storage and naming convention:**
  - Path: `lib/labs/category-mappings/<mapping_version>.json` (e.g., `v1.json`, `v2.json`); active version pinned via `lib/labs/category-mappings/active.ts` exporting the current default.
  - Per-row format: `{ code_system: "loinc" | "partner_native" | ..., code: "<observation_code>", category: "<bucket>", display_label?: "...", units?: "..." }`.
  - **Buckets (canonical; org-extensible only via map/repo review):** `hormones`, `metabolic`, `lipid`, `glycemic`, `cardiovascular`, `inflammation`, `thyroid`, `vitamins_micronutrients`, `kidney_liver`, `cbc`, `toxins_heavy_metals`, `sti_screen`, `pregnancy`, `general` (catch-all for unmapped codes — counted but flagged for ops review).
- **Versioning rules:**
  - Bumping **bucket assignment** for an existing code creates a new mapping version (e.g., `v1` → `v2`).
  - Trivial display-label or units fixes can patch the same version (auditable diff in repo).
  - Patient renderings reference the **mapping version active at render time**; historical reports may render against the version active at result-receipt for stable historical display (org-policy choice).
- **Coverage and gap handling:**
  - Unmapped codes fall into `general` and are counted in an ops report ("uncategorized observation codes per partner") so the mapping file can be extended before the next release.
  - Partner-native codes without a LOINC equivalent are mapped explicitly with `code_system = "partner_native"` and a partner namespace prefix (e.g., `quest:1234`).
- **Insight scoring spec coupling:**
  - "Heart health" / "biological age" / per-bucket index scores are defined in companion versioned files at `lib/labs/insights/<insight_version>.json`, each declaring inputs (one or more `observation_code`s), formula or rule set (deterministic; no LLM at runtime), output range, and patient-facing display copy version.
  - Each rendered insight on the patient portal carries `mapping_version` + `insight_version` in its server response so the renderer (and any reporting in `1H.7`) is reproducible.
  - Updates follow the same map/repo review process; no per-org silent fork.
- **Audit + reporting:**
  - Coverage stats (mapped vs `general` per partner per window) are queryable via `1H.7` so ops can prioritize mapping work.
  - When a code is reassigned to a new bucket, the diff is auditable in repo history; aggregate reports note "category mix at version X vs Y" for transparency.
- **Hard rule:** the patient-facing category view never reads ad-hoc per-row `metadata.category`. The mapping is the single source of truth; per-row overrides are not allowed.

### 25. PART 8 — Error and edge cases (mandatory)

For each scenario: state transitions, event emissions, ownership.

| Scenario | State transitions (`lab_orders.status` / `metadata.fulfillment_substatus`) | Events | Owner |
|---|---|---|---|
| **Lab paid, patient never goes (PSC)** | `requisition_published → expired` after org-policy window (e.g., 60–90d); `metadata.expiry_reason = patient_no_show` | `lab.order.expired_no_show` (timeline) | Ops; patient-facing communication via `1G.5` discipline; refund per §25 below if policy |
| **Sample lost (in-person or at-home return)** | `sample_in_transit → sample_lost` (terminal sub-state); parent stays `published` | `lab.order.sample_lost` (timeline) + `lab.result.invalid` (when partner returns invalid notice) | Ops triggers free re-collection (new `lab_orders` row, `metadata.replaces_lab_order_id` pointer) |
| **Sample invalid (hemolyzed, insufficient)** | `sample_processing → sample_invalid` | `lab.result.invalid` (timeline) | Ops + provider notified; auto-offer free recollection per policy; new `lab_orders` row with `metadata.replaces_lab_order_id` |
| **At-home bad sample → resend kit** | `sample_invalid → kit_queued` (new kit shipment recorded as new `outbound_jobs` row, same parent `lab_orders` for ledger continuity) — or new `lab_orders` if policy prefers a clean replacement | `lab.order.kit_resent` (timeline) | Ops; cost handling per policy |
| **Vendor failure (API outage, missing return)** | `requisition_pending` stays open; `outbound_jobs` `dead` row visible; `lab_orders.metadata.last_partner_error` updated | `lab.order.partner_error` (audit_events) + `1G.5` exception (`fulfillment_partner_outage`) | Platform + ops per `1G.5` and `1H.2`; automatic retry via `outbound_jobs` per `1H.3` |
| **Duplicate orders (same patient, same panel)** | Idempotency on creation prevents true duplicates; if a manual duplicate slips through, ops merges via `metadata.duplicate_of_lab_order_id` and cancels the duplicate | `lab.order.cancelled` (timeline) + audit | Ops; per `1G.5` exception |
| **Refund scenarios** | Money state per `Section 1I` (`refund_full` / `refund_partial`); `lab_orders.status → cancelled` for full refund pre-fulfillment; for post-fulfillment, `status = completed` retained with `metadata.refunded_post_fulfillment = true` | `1I` events + audit | Finance/ops per `Section 1I` and `1G.5` |

**State machine summary (`lab_orders.status` × `metadata.fulfillment_substatus`):**

```
lab_orders.status : draft → published → completed → cancelled
                                         ↘ expired (no-show class)

fulfillment_substatus (in_person):
  requisition_pending → requisition_published → awaiting_collection → collection_completed → result_received
                                                                                           ↘ sample_invalid

fulfillment_substatus (at_home):
  kit_queued → kit_shipped → kit_delivered → sample_in_transit → sample_received → sample_processing → result_received
                                                              ↘ sample_lost
                                                                                                    ↘ sample_invalid
```

**Resolution ownership:** all triage routes through `1G.5` exception handling with classification per `1H.6.1E` (typically `fulfillment_delay_vendor`, `fulfillment_partner_outage`, or `inventory_or_supply_issue`).

### 26. PART 9 — Relation to `care_programs`

**Answer: C — both standalone and program-attached.**

- **Standalone (no program):** Scenario B per §16 — patient buys a screening panel directly; `lab_orders.metadata` carries `commerce_order_id` and `origin = standalone_commerce`; no `care_program_id`.
- **Program-attached:** Scenario A per §16 — `lab_orders.metadata` carries `care_program_id` and (often) `treatment_item_id`; `lab_context` ∈ `baseline | monitoring | confirmatory`.

**Does a lab create a `care_program`?**
- **Default: no.** Standalone labs do not create programs.
- **Optional product policy:** if a result indicates clear program fit (e.g., abnormal hormones suggesting TRT eligibility), the patient may be **offered** a pathway via a follow-up `treatment_plan_candidate` per `1K.10`; program creation happens only after intake completion + provider approval per `Section 1G`.

**When labs feed existing programs:**
- Linked at order-creation time via `metadata.care_program_id` and surfaced in the program's "required labs" gating per §8.
- Result review may set program-level satisfaction flags in `care_program.metadata` (e.g., `baseline_lab_complete: true`, `baseline_lab_diagnostic_report_id: ...`).
- Continuation/refill gating reads these flags via `1J.10` `loadPatientCaseSafetySnapshot`.

### 27. PART 10 — Loop + retention (retesting cadence + monetization)

**Retesting cadence (per pathway, org-tunable):**
- TRT: baseline → 8w follow-up → quarterly → annual.
- GLP-1: baseline → 12w → biannual.
- General wellness: annual default; semi-annual/quarterly optional via subscription tier.

**Subscription tie-in (existing 1I rails):**
- A "lab subscription" is a `treatment_items` (or 1E retail line) with cadence metadata; renewal triggers create new `lab_orders` per cycle.
- Renewal triggers run via `outbound_jobs` on the cadence schedule; idempotent per `1I.6`.

**Triggering reorders:**
- **Auto-suggested** (system) — `lab.retest.recommended` event when cadence date approaches; surfaces in patient portal and (if program-linked) provider continuation review per `1G Stage 6`.
- **Auto-ordered** (subscription) — `lab.subscription.cycle` event creates the next `lab_orders` row; existing payment authorization per `1I.4` runs the if-prescribed/scheduled charge.
- **Manual reorder** (patient) — checkout creates a new commerce order; PART 3 path applies.

**Events:**
- `lab.retest.recommended` (timeline)
- `lab.retest.ordered` (timeline)
- `lab.subscription.cycle` (timeline + `audit_events`)
- `lab.subscription.cycle_skipped` (timeline; reason in payload, e.g., `patient_paused`, `payment_failed`)

**Monetization options (additive; no new systems):**
- **Bundled program pricing** — labs included in the program price (`treatment_orders` line; `metadata.lab_included = true`).
- **A la carte upsell** — additional panels offered at intake/checkout (`1K.10` plan candidate alternates).
- **Subscription tiers** — quarterly/annual cadences as `treatment_items` + 1I subscription rows.
- **Credit application** — kit fee credits toward Rx plan per §1K.8 / `1I.2` (`metadata.refill_adjustment_cents`).

### 28. Cross-cutting summary (data flow, event map, state machine)

**Data flow (text diagram):**

```
Intake (1K)
  └── treatment_plan_candidate (lab lines)
        └── 1E checkout / commerce_orders (or treatment_orders for program bundle)
              └── payment success webhook (1I.6 idempotent)
                    └── lab_orders insert  [PART 1, §18]
                          ├── outbound_jobs : send to vendor / ship kit  [PART 4, §21]
                          │     └── partner adapter
                          │           └── partner returns ack / requisition / tracking
                          │                 └── lab_orders.metadata updates (partner_order_ref / kit_tracking_ref)
                          └── patient_timeline_events : lab.order.created
                                + audit_events

(time passes — partner-side collection / lab processing)

partner result inbound
  └── ingest job (idempotent on report dedupe key)  [PART 5, §22]
        └── patient_diagnostic_reports insert (lab_order_id set if known; null = orphan, staff reconciles)
              └── patient_lab_observations insert (one row per analyte; diagnostic_report_id required)
                    └── lab_orders.first_result_ingested_at set
                          └── patient_timeline_events : lab.result.received
                                + (if any abnormal_flag) lab.result.abnormal_flagged
                                      └── 1G.7.6 queue.item.created (item type lab_review)
                                            └── provider review per 1G.9.4 (CoR-preferred, urgent override) [PART 6, §23]
                                                  ├── patient_chart_ai_reviews (assistive only, optional)
                                                  ├── patient_diagnostic_reports.reviewed_at + reviewed_by_staff_id
                                                  │     └── patient_timeline_events : lab.result.reviewed
                                                  ├── (optional) released_to_patient_at
                                                  │     └── patient_timeline_events : lab.result.published
                                                  └── follow-up:
                                                        ├── new lab_orders (repeat / monitoring)
                                                        ├── treatment_items / clinical_visits dose change (1G.2 enforcement)
                                                        └── referral / 1G.5 exception when applicable

(retention / loop)
  └── cadence reached → outbound_jobs trigger
        └── lab.retest.recommended (timeline)
              └── (subscription) lab.subscription.cycle → new lab_orders [PART 10, §27]
              └── (manual) patient checkout → PART 3 path
```

**Event map (canonical lab events):**

- **Order/fulfillment lifecycle:** `lab.order.created` · `lab.order.requisition_published` · `lab.order.kit_shipped` · `lab.order.kit_delivered` · `lab.order.sample_received` · `lab.order.sample_lost` · `lab.order.expired_no_show` · `lab.order.cancelled` · `lab.order.kit_resent` · `lab.order.partner_error` (audit) · `lab.order.duplicate_merged` (audit).
- **Result lifecycle:** `lab.result.received` · `lab.result.abnormal_flagged` · `lab.result.invalid` · `lab.result.reviewed` · `lab.result.published`.
- **Provider review (queue):** reuses `1G.7.6` lifecycle codes (`queue.item.assigned/started/completed/escalated/sla_breached`) with item type `lab_review`; lab-specific events from `1G.9.4` (`lab.review.assigned/started/completed/escalated/reassigned_due_to_sla`) for the lab-routed path.
- **Retention loop:** `lab.retest.recommended` · `lab.retest.ordered` · `lab.subscription.cycle` · `lab.subscription.cycle_skipped`.
- **CoR signal:** `clinician_of_record_changed` per `1G.9.13` when lab follow-up triggers a CoR transition (typically primary reason `abnormal_lab_followup`).

All events follow `1H.1` standardized payload contract: `patient_id` + at least one of `lab_order_id`, `diagnostic_report_id`, `treatment_item_id`, `care_program_id`, `commerce_order_id`, `treatment_order_id`, plus the relevant partner refs.

**State machine summary:** see §25 ASCII diagram (in-person + at-home substates) and §13 derived narrative states.

### 29. Key decisions and tradeoffs (locked)

- **Decision: `lab_orders` created at payment-success webhook (Scenario B) or provider/staff workflow action (Scenario A).** Tradeoff: small delay between checkout submit and visible order vs avoiding orphan rows on payment failure. Justified per §20.
- **Decision: one `lab_orders` row per `panel_type`.** Tradeoff: more rows for bundles vs clean 1:1 ownership for requisition/kit/result lifecycle. Justified per §18.
- **Decision: ingest creates `patient_diagnostic_reports` first; observations bind via `diagnostic_report_id` (required).** Tradeoff: extra layer vs unbroken provenance and supports orphan-result reconciliation. Justified per §11/§14/§22.
- **Decision: derived result-lifecycle states (no `lab_status` enum machine).** Tradeoff: read complexity vs schema simplicity. Justified per §13.
- **Decision: provider sees all results by default; abnormal escalates per `1G.9.4`.** Tradeoff: provider load vs safety. Justified per §23.
- **Decision: patient release gated by `released_to_patient_at` (provider control).** Tradeoff: latency to patient view vs clinical defensibility. Justified per §11.
- **Decision: standalone vs program-attached labs both supported (C).** Tradeoff: two parent-link paths in metadata vs covering full Hims-class product surface. Justified per §26.
- **Decision: subscriptions via existing 1I rails + `treatment_items` cadence metadata; no new subscription product.** Justified per §27.
- **Decision: AI is assistive across ingest, provider review, and patient insights; never authority.** Per Section 1G AI layer + `Section 1N` + `1H.4.2`.
- **Optimization stance:** minimal friction at checkout (one click → lab_orders auto-created post-payment), high throughput via deterministic routing + `1G.7.5b` SLA enforcement on `lab_review` items, system consistency via `1I.6` idempotency and `1H.1` correlation contract, monetization via bundles / a la carte upsell / subscriptions / kit-fee-credit per §27.

### 30. Capability + governance summary (additive only)

- `can_create_lab_order` — staff/provider creation in Scenario A; system actor in Scenario B (payment-success webhook).
- `can_review_lab_result` — set `reviewed_at` + `reviewed_by_staff_id`.
- `can_publish_lab_result` — set `released_to_patient_at`.
- `can_view_provider_queues` / `can_drill_into_provider_queue` (existing per `1G.6.2`) — admin overlay for lab review queue depth and aged backlog (controlled provider dimension per `1H.7.2`).
- All sensitive cross-patient lab queries write `SensitiveAccessReason` per Intent.

### 31. Lab-specific admin overlay slice (operational visibility, no new product)

The admin overlay (`1G.6.2`) gains a small set of lab-specific saved views so ops/clinical leadership can answer "what lab work is stuck and why" without ad-hoc SQL. All views are derived over existing rows; aggregate-first; PHI gated by capability per `1G.6.2` drilldown rules.

**Saved views (each is a query over `lab_orders` × `patient_diagnostic_reports` × `1G.7.6` events, grouped by the controlled provider dimension from `1H.7.2`):**

| View | Definition (derived) | Default grouping | Severity rendering |
|---|---|---|---|
| **Lab queue depth (open `lab_review` items)** | `1G.7.6` queue items where `item_type = lab_review` and not yet completed | provider × `panel_type` × jurisdiction | per `1H.6.1D` baseline + severity |
| **Aged-by-state-by-panel-type** | open `lab_orders` grouped by current top-level `status` × `metadata.fulfillment_substatus` × `panel_type`, with age-bucket counts (e.g., `<24h`, `1–3d`, `3–7d`, `>7d`) | state × substate × `panel_type` × jurisdiction | aged buckets render with severity per `1H.6.1D`; `>7d` defaults to Action-needed unless org-tuned |
| **Abnormal-without-review** | `patient_lab_observations` with `abnormal_flag` ∈ `low|high|critical` whose parent `patient_diagnostic_reports.reviewed_at IS NULL` (excluding items currently `Acknowledged` per `1H.6.1F`) | abnormality severity × `panel_type` × age | Critical when any `critical` flag aged > org-policy threshold; otherwise Action-needed at threshold |
| **Orphan reports** | `patient_diagnostic_reports` rows where `lab_order_id IS NULL` and `diagnostic_kind = 'lab'`, aged | partner × `extracted_at` age bucket | Watch at threshold; Action-needed when count or age sustained per `1H.6.1D` |
| **Stuck fulfillment (in-person)** | `lab_orders` where `fulfillment_substatus` ∈ `requisition_pending|requisition_published|awaiting_collection` past org-policy age, no result received | partner × jurisdiction × `panel_type` | severity per age vs SLA |
| **Stuck fulfillment (at-home kit)** | `lab_orders` where `kit_fulfillment_status` ∈ `kit_queued|kit_shipped|kit_delivered|sample_in_transit` past org-policy age, no result received | partner × jurisdiction × `panel_type` | severity per age vs SLA |
| **Sample invalid / lost (recovery queue)** | `lab_orders` with `metadata.fulfillment_substatus` ∈ `sample_lost|sample_invalid` lacking a follow-up `metadata.replaces_lab_order_id` resolution | partner × `panel_type` | Action-needed by default; `1G.5` exception |
| **CoR-preferred lab review backlog** | `lab_review` queue items currently CoR-preferred per `1G.9.4` and unstarted past continuity SLA per `1G.9.6` | provider (CoR) × `panel_type` | severity per SLA aging |
| **Coverage gaps (lab-specific)** | derived per `1G.7.7a` extended for lab routing: jurisdiction × `panel_type` × blocker reason (no eligible reviewer in jurisdiction, all eligible reviewers paused, etc.) | jurisdiction × `panel_type` × blocker reason | severity per `1H.6.1D` |

**Capabilities and access:**

- All views require `can_view_provider_queues` (aggregate, no PHI per `1G.6.2`).
- Drilldown to item-level (the per-`lab_orders` or per-report list) requires `can_drill_into_provider_queue` plus the viewer's existing clinical/oversight capability for PHI access (per `1J / 1J.10`).
- Cross-patient lab queries (e.g., abnormal-without-review across many patients) write `SensitiveAccessReason` per Intent.

**Output discipline:**

- Aggregate-first; controlled provider dimension only (`provider_key` / `provider_slug` / `display_name`) — no raw `staff_user_id`.
- `1H.4.1`-style small-cell suppression at small jurisdiction × `panel_type` intersections.
- Severity / status / classification render alongside counts per `1H.6.1D` / `1H.6.1F` / `1H.6.1E` so admins see value + baseline + severity + status together.

**Trigger ties (to existing escalation paths):**

- Sustained Action-needed/Critical on **abnormal-without-review** triggers the `1G.5` exception workflow with classification typically `provider_capacity_constraint` or `provider_decision_quality` per `1H.6.1E`; CoR transitions for resulting reassignments use `abnormal_lab_followup` reason code per `1G.9.13`.
- Sustained stuck-fulfillment views trigger `fulfillment` exceptions per `1G.5.6` with classification typically `fulfillment_partner_outage` or `fulfillment_delay_vendor`; platform owner per `1H.2`.
- Orphan-report counts feed an ops triage queue (manual link of `lab_order_id` per §10) and update mapping coverage per §24 if the orphan rate is partner-specific.

**Reporting tie-in:**

- Same signals are queryable as historical reports via `1H.7` using safe dimensions (provider, jurisdiction, `panel_type`, partner, blocker reason, time window); aggregate-only.
- Live overlay = `1G.6.2`; historical analysis = `1H.7`. Same canonical query path; no duplicate definitions.

---

*End of lab appendix — “no parallel lab system”; chain is raw → report → observation → review → patient → next action.*
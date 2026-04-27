# Platform Capabilities Brief

**A clinical operating system, not a telehealth funnel.**

*Prepared for external sharing. Summarizes the unique architectural capabilities of the platform currently under development, grounded in the working system map. Written for a business audience — minimal jargon, specific claims, no competitive attack.*

---

## One-sentence positioning

We are building a vertically integrated clinical operating system with an AI-adjacent interpretation layer, where every patient answer, lab result, provider decision, and follow-up event lives in one longitudinal spine — so care is continuous, decisions are traceable, and programs reinforce each other instead of operating as disconnected funnels.

---

## The architectural bet

Most direct-to-consumer telehealth companies — Hims, Hers, Ro, and the category broadly — are exceptional at **intake conversion**: a patient lands on a page, completes a 30–75 step questionnaire tuned for completion rate, and is either approved for a prescription or not. The funnel is the product. The patient record is a byproduct of the funnel.

We are making a different bet: the funnel is the *entry point* into a system whose real value compounds over time. One patient on three programs (for example, weight loss + hormone optimization + labs) should feel like one patient, not three funnels stitched together. A lab result drawn for one program should be eligible to inform prescribing in another. A contraindication the patient reported in month one must remain visible, queryable, and active in the safety check fired in month fourteen. A provider decision must be traceable to the exact evidence that produced it.

The companies that have this are large integrated health systems (Kaiser, Mayo, Cleveland Clinic) — but those systems are expensive, slow to change, not AI-native, and fundamentally not consumer-facing. The DTC telehealth companies have the consumer surface and the conversion craft, but their backend is built for one-time transactions.

We are building the first platform that combines both:

- the **intake and conversion quality** of the best DTC telehealth companies,
- the **longitudinal clinical memory** of integrated health systems,
- the **AI-native automation** neither category has,
- with **traceable decision safety** built into the data model from day one.

This brief describes the specific capabilities that make that combination possible.

---

## Eight capabilities that make this different

Each capability below is a concrete, named piece of our backend architecture. None are marketing language. Each is a design decision with a specific data contract and specific enforcement.

### 1. One longitudinal patient state, not a collection of intake forms

**What it is.** A dedicated, append-only store (`patient_state_observations`) for every time-varying patient signal: weight, blood pressure, symptom severity, side-effect tolerance, adherence, mood, biomarkers from labs. Every observation is tagged with who recorded it (patient, provider, system, integrated device in the future), when, in what source session, and what care program it belongs to or whether it is global across programs.

**Why it matters.** In a typical DTC platform, the answer "what is this patient's weight trend over 12 months across a weight-loss program and a hormone program?" is either unanswerable without manually stitching records together, or it lives only inside whatever dashboard UI was built for a single program. In our platform, it is a single database query. This is the foundation for real personalization, real adherence tracking, and real AI pattern recognition.

**What it unlocks.** Provider dashboards that show real trend lines. Automated flagging when a patient's weight loss plateaus or their BP trends up. Honest reporting on outcomes. AI assist that is not a toy because it reads structured signal, not chart notes.

### 2. Answers are captured once and reused across programs, with provider clarification preserved

**What it is.** A deterministic intake engine with three reuse scopes: **global** answers (allergies, major conditions, medications, family history, demographics) are asked once and silently reused in every subsequent session subject to a freshness window; **program-scoped** answers stay within their program; **context-sensitive** answers re-prompt when clinically relevant. Every reused answer carries a back-pointer to the original response so the provider can see what is fresh versus carried over.

Separately, a named cross-session read path surfaces every static clinical fact (contraindications, surgical history, family history) to the safety checkpoint at decision time — so "has this patient ever reported medullary thyroid cancer in their family?" is answered by a single query, not by walking through prior forms manually.

When a provider clarifies a patient-reported fact (classic case: patient reported "no pancreatitis," provider notes at visit that it was acute pancreatitis in 2019), the provider's clarification appends as a new record with a pointer to the original patient statement. The patient's statement is never silently overwritten. The system distinguishes patient-reported from provider-confirmed on every single clinical fact.

**Why it matters.** Anyone who has used multiple DTC telehealth products on the same platform has noticed they each re-ask the same medical history questions in different formats. Our intake engine is explicitly designed to eliminate this. A patient on our weight-loss program who later starts a hormone program is not asked again for their demographics, allergies, surgical history, or major conditions — they confirm what the system already knows.

**What it unlocks.** Dramatically higher completion rates on second and third programs. Better patient experience that feels cohesive rather than transactional. Providers who see what is fresh versus carried over. A legal/clinical record that preserves the full history of patient statements and provider corrections without either being erased.

### 3. Every provider decision has a structured reason code, not just a free-text note

**What it is.** Every terminal clinical decision — approved, approved with adjustments, denied on contraindication, denied on jurisdiction, paused pending blood pressure reading, paused pending lab result, escalated to senior provider, auto-paused by the engine on a ruleset upgrade — is written with a stable `decision_outcome_reason` code alongside the provider's free-text note. The decision is linked to the exact evidence packet that was available at decision time.

**Why it matters.** In standard DTC telehealth, the answer to "why was this patient denied?" lives in a provider's free-text note, which makes it unqueryable for reporting, inconsistent in wording, and invisible to the rest of the system. It also makes it impossible for the patient to get a consistent, accurate explanation without a manual support ticket.

**What it unlocks.** Consistent patient-facing communication ("we need your recent blood pressure reading" always produces the same message, tied to the next action the patient can take). Reporting on why denials cluster — is it one provider, one pathway, one jurisdiction, one contraindication? Compliance reviews that can answer "show me every off-label prescribing decision in the last 90 days with the reason code and evidence." AI pattern detection that surfaces "pancreatitis denials on weight-loss have spiked this week — is our contraindication screen calibrated correctly?"

### 4. Continuation (refills, check-ins, retests) is gated on clinical state, not the calendar

**What it is.** A locked rule in the architecture: a prescription refill or subscription renewal for any pathway that requires ongoing monitoring cannot proceed unless the required labs have been reviewed within their cadence **and** the required trackables (BP, weight, symptom scores, whatever the pathway specifies) are fresh. If either condition fails, the renewal is blocked — not silently processed on a 90-day timer because it is time to ship another box.

**Why it matters.** The dominant DTC model renews subscriptions on a calendar. We treat continuation as an active clinical decision. Every refill is evidence-gated.

**What it unlocks.** Materially safer prescribing for programs with real monitoring needs (hormone therapy, GLP-1 medications, controlled substances in the future). A credible clinical story in partnership and regulatory conversations. Lower risk of adverse events that tend to emerge 6–18 months into a long-running prescription when no one has checked in on the patient. A clean path to expanding into higher-acuity programs that competitors cannot safely operate.

### 5. One shared safety checkpoint reads every relevant fact before any high-risk action

**What it is.** Before a provider prescribes, approves a refill, signs a visit, or authorizes a high-risk change, a single server-side function (`loadPatientCaseSafetySnapshot`) pulls the patient's identity confidence, duplicate-account state, payment and fraud flags, clinical permits and case blockers, active and recently-terminated medications, allergies, active contraindications, and relevant pathway-specific safety signals into one read. The decision runs against that snapshot. Every high-risk mutation is gated on the same snapshot plus an explicit capability check plus a durable audit record.

**Why it matters.** In most platforms, safety checks are distributed across many functions, each fetching a narrow slice of data in a slightly different way. When a mistake happens — wrong chart pulled, duplicate patient account missed, expired contraindication not re-read — the root cause is almost always that the decision was made against a partial view of the patient. Centralizing the read eliminates that category of error.

**What it unlocks.** Defensibility in clinical audits. A single place to add a new safety signal (a new contraindication class, a new identity gate for a new pathway) and have it apply everywhere. A regulatory story that is auditable without forensic reconstruction.

### 6. AI is a read-only assistive layer that closes the loop back to humans

**What it is.** A unified AI interpretation layer (one engine, not four per-role products) reads from the same structured spine every other system reads from. It surfaces patterns to providers, ops, clinical leadership, and — with strict aggregate-only, privacy-constrained outputs — to marketing. It drafts provider notes, summarizes chart context, prioritizes queues, and surfaces at-risk patients. It does not authorize therapy. It does not mutate money. It does not send outbound messages autonomously. It does not clear clinical blockers or safety permits.

Every AI suggestion closes into an audited human action. When a provider acts on an AI suggestion, the action is recorded through the same mutation path any human-initiated action would take, with the same capability check and the same audit trail.

**Why it matters.** The industry is heading toward either AI-free platforms (too slow to scale) or AI-authorized platforms (unsafe, indefensible, likely to produce headline-grade adverse events). The middle path — AI that accelerates human decisions while preserving human authorization and traceability — is what we have built in. It is also the only model that will survive regulatory scrutiny of clinical AI over the next few years.

**What it unlocks.** Real automation leverage (a provider can review more cases more safely), without crossing into the territory that regulators and malpractice carriers will not accept. Measurable AI impact because the system records which suggestions were surfaced, which were acted on, and what the outcomes were — a closed insight → action → measurement loop.

### 7. One patient action surface across all programs, not a different inbox per pathway

**What it is.** A first-class `patient_action_items` object that aggregates everything the patient needs to do next: complete an incomplete intake, read a new provider message, view a released lab result, renew a subscription, accept a new consent, provide a required datum (a blood-pressure reading, an ID photo, a lab kit return). One list, cross-program, prioritized.

Within that list, a distinctive sub-object — `pending_patient_input_task` — handles the case where a specific patient-provided datum must arrive before a specific pending mutation can proceed. The task names exactly what the patient needs to do, what mutation it unblocks, and what write path will automatically satisfy it. When the patient captures the required blood pressure reading, the task clears and the blocked mutation retries through the safety checkpoint.

**Why it matters.** In DTC telehealth today, if a patient is told "go get a blood pressure reading and come back to complete your visit," there is almost nothing behind that copy. The session often dead-ends. The patient is not tracked. If they return, they usually have to start over. Our system treats the return journey as a first-class object with a return hook.

**What it unlocks.** Dramatically higher return-to-complete rates on interrupted flows. A cohesive "what do I need to do?" surface that keeps patients engaged across multiple programs. Reduced support load because the patient's next step is always explicit and actionable. A legitimate claim to longitudinal patient engagement rather than episodic conversion.

### 8. Consent is a first-class, versioned, auditable object

**What it is.** A dedicated `patient_consents` store captures every acknowledgment the patient makes: telehealth consent, privacy policy, off-label prescription acknowledgment, SMS marketing opt-in (with full TCPA-compliant legal text pinned), subscription auto-renew, research / de-identified data use, identity verification. Each record pins the exact legal text shown, timestamps the acceptance, captures the surface where it was accepted (intake, checkout, account settings, provider message), and supports explicit revocation.

**Why it matters.** Consent captured as a checkbox answer inside a form is legally soft. In regulated conversations (pharmacy partners, insurance, compliance audits, class-action defense), you need to produce *exactly the legal text the patient saw when they accepted* — and you need to show that subsequent material changes triggered re-acceptance. Inline checkboxes do not produce this.

**What it unlocks.** Stronger legal posture for off-label prescribing, SMS marketing, auto-renewal, and research consent. Clean answers to compliance questions. A defensible story for regulated classes of medication (controlled substances, future mental-health Rx, future fertility work) that require clearly auditable consent.

---

## What the combination enables at the business level

These capabilities are not isolated features. They compound.

- **Multi-program patients are economically rational.** In calendar-driven DTC platforms, adding a second program roughly doubles the acquisition cost and re-captures the same history. In our platform, the second program reuses identity, history, consent, payment rails, and chart memory, while unlocking cross-program clinical signal (labs from program one inform eligibility for program two). This changes the unit economics of cross-sell.

- **Lifetime value is measurable longitudinally, not just quarterly.** Because every continuation event is tied to actual clinical state, we can report honestly on what makes a patient stay healthy and on the product for years. Competitors with calendar-driven renewal know only that the patient has not canceled.

- **Provider time is leveraged without being replaced.** The AI layer summarizes evidence packets and drafts notes; the provider decides and signs. The provider is spending their time on decisions, not document assembly.

- **Safety and compliance stories are defensible without being burdensome.** Because the architecture produces the audit trail as a byproduct of normal operation, we do not pay a tax to produce compliance reports. The data is already in the right shape.

- **Higher-acuity programs become possible.** Hormone therapy, complex mental health, fertility, weight management with genuine monitoring, and eventually certain controlled substances are all programs that need the longitudinal spine we are building. Competitors cannot safely operate these programs at scale; we can.

- **Partner integrations are cleaner.** When a pharmacy, lab, device, or payor asks for a clean data spine to integrate with, we have one. Competitors have to reconcile multiple per-program stores.

---

## What this platform is explicitly not

Clarifying non-goals is as important as capabilities.

- **Not a gamified conversion funnel.** The intake experience is excellent and high-converting, but the goal is a healthy patient on the platform for years, not a signed-up trial that converts to one shipment.
- **Not a single-condition vertical.** Every architectural decision assumes multiple programs, concurrent programs, and cross-program patients. A platform optimized only for one condition would be built differently.
- **Not a front-end-only care model.** We are not a beautiful UI over a call center. The intake engine and the clinical spine are the product.
- **Not a CMS for clinical content.** Questions, branching, safety logic, and scoring rules live in version-controlled code, not in a CMS an operations user can edit without review. This is a deliberate safety decision.
- **Not an AI-authorizing system.** AI assists; humans authorize. This is both a regulatory bet and a trust bet.
- **Not a calendar-driven subscription business.** Every continuation is an active clinical decision, not a shipping trigger.

---

## Honest current state

Parts of this platform are shipped and running; parts are designed and not yet built; parts are committed as requirements before the first prescription-capable program ships. The full system map (about 5,500 lines, internal) marks every item explicitly: existing, partial, target, required-before-scale.

- **Solid today:** the data architecture discipline (domain tables as sources of truth, timeline as narrative projection only, audit as accountability layer), the identity model (precedence, duplicate handling, merge policy), the capability / RBAC layer, the commerce and payment rail separation, the lab pipeline foundation.
- **Designed and in active build:** the intake engine (`1K.0`), patient state observations (`1M`), document routing (`1O`), the AI interpretation layer (`1N`), the provider workspace.
- **Committed as required before any prescription-capable program ships:** the shared safety preflight (`1J.10`), the committed identity gate per pathway (`1J.4`), first-class consent records (`1K.11`), first-class patient action items and pending-input tasks (`1G.11`), promoted intake session and treatment plan candidate tables (`1K.14`), the structured decision reason code (`1K.12`), the derived-value patient-facing contract (`1K.9`).

The roadmap is honest: the first Rx-capable pathway ships with all of the above in place, not as a v2. The architecture is built so that the first pathway lays the groundwork every subsequent pathway reuses rather than rebuilds.

---

## How to think about comparisons

If someone asks how this compares to the current category leaders, the honest summary is:

- They win on funnel conversion craft today. Their intake flows are sharp, their copy is tuned, and their patient-psychology instincts are good. We are not going to out-conversion them with a fresh team on day one, and we do not need to — we need to convert well enough.
- We win on everything after the funnel. Longitudinal memory, decision traceability, continuation safety, multi-program cohesion, AI assist that actually does something, consent and audit discipline. These are the capabilities that matter over a patient's 3–10-year lifetime on the platform, and they are the capabilities that make higher-acuity, higher-margin programs safe to operate.

The architectural bet is that the second set matters more than the first over time, and that the first is learnable while the second is foundational.

---

## Closing

What is being built is a clinical operating system, not a telehealth funnel. The unique capabilities above are the mechanisms that make it one. They are designed into the data model from the beginning so that as the platform grows across programs, providers, and patient-years of history, it compounds in value rather than fragmenting. Most of the companies in the category are optimizing the first intake. We are optimizing the next ten years.

If any of the capabilities above are relevant to a specific conversation — partnership, investor, clinical leader, regulatory — each one has a fuller architectural definition in the internal system map and can be expanded into a deeper technical note on request.

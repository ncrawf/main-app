# Privacy + communication governance — triple-axis taxonomy + send-policy enforcement

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Ops CODEOWNER + Compliance CODEOWNER:** sign off jointly with clinical for marketing carve-out, vendor minimum-necessary, and SMS marketing compliance (TCPA / CASL / CAN-SPAM)
**Scope:** Define a deliberate privacy + communication governance layer across 8 channels × 6 exposure tiers × 4 pathway sensitivity levels × 10 message intents. Action-level + template-level enforcement. 6-toggle patient-facing preference UI mapping to internal typed consents. Emergency orchestration. Vendor minimum-necessary with redact-then-retry. Pre-runtime gate before runtime implementation begins.
**Verdict:** Architecture HOLDS with 11 patches. Triple-axis taxonomy replaces conflated "exposure floor" model. Action-level enforcement creates upstream catch for template misuse. Patient-facing 6-toggle UI prevents legalistic checkbox hell while maintaining HIPAA / TCPA / CASL audit truth.

---

# Part 1 — Goal + philosophy

**Mantra:** "High-signal outside, full detail inside."

Outside channels (SMS / email / push / paper / vendor) carry enough info to drive action; full clinical detail lives behind authenticated secure view + provider phone outreach.

**Avoid both extremes:**

| Extreme | Failure mode | Symptom |
|---|---|---|
| Under-protect | sending diagnosis / dose / lab values via SMS | HIPAA exposure, patient embarrassment, regulatory risk |
| Over-protect | forcing portal/MFA login for trivial operational updates | Conversion drops, patients ignore "you have a secure message", care abandonment |

**Pattern reference:**
- **Apple:** "You have a notification" + tap to open device for content
- **Amazon:** "Your package shipped" + tap for tracking detail
- **Hims:** "Your provider has an update" + open app for clinical detail
- **Stripe:** "Your payment failed" + dashboard for invoice detail

**Never:** financial-institution-style friction (MFA-for-everything, opaque language). Healthcare patients need ACTIONABLE outside-secure messaging that prompts engagement without leaking PHI.

---

# Part 2 — Triple-axis governance model

The send decision is computed from THREE orthogonal axes evaluated in order:

| Axis | Where declared | What it measures | Drives |
|---|---|---|---|
| `privacy_exposure_level` (0-5) | Template (`Section 1Q.5`) + Action (`Section 1Q.4`) | How much PHI the message reveals. Intrinsic to message content. | Per-message render strategy |
| `pathway_sensitivity` (low / moderate / high / extreme) | Pathway file (`Section 1K.2`) | How socially / regulatorily sensitive the treatment area is. Intrinsic to pathway. | Outside-secure ceiling cap |
| `message_intent` (10-value enum) | Template (`Section 1Q.5`) + Action (`Section 1Q.4`) | What kind of communication this is. | Consent path lookup, send policy class |

A pathway can be `sensitivity: extreme` AND still send `tier_2` messages — sensitivity caps the OUTSIDE-SECURE ceiling but does not force every message to tier_5. This is the critical decoupling.

---

# Part 3 — Privacy exposure taxonomy (6 tiers)

| Tier | Name | Meaning | Examples |
|---|---|---|---|
| **0** | `no_phi` | No patient context. Brand / generic. | Cold marketing landing, blog email, generic newsletter |
| **1** | `existence_only` | Reveals "you are our patient/customer" but no care detail. | Account update notification, post-purchase brand-only receipt, account-creation confirmation, password reset |
| **2** | `low_context_phi` | Implies care relationship + general action; does NOT name pathway, condition, medication, dose, or lab values. | "Your provider has an update", "your shipment is on the way", "complete one quick step", "your refill request needs review", "we need one more detail to continue your request" |
| **3** | `pathway_named_phi` | Names treatment area (e.g., "your weight loss plan"). Operationally useful in marketing + select transactional. **Default-ALLOWED for low/moderate sensitivity with consent; DEFAULT-FORBIDDEN for high/extreme sensitivity even with consent.** | "Your weight loss consultation is waiting", "Your metabolic kit is ready" |
| **4** | `clinical_detail_phi` | Medication name + dose, lab values, diagnosis, provider clinical reasoning, contraindications. **In-app secure view + provider-initiated phone ONLY.** | "Your A1c is 7.2", "semaglutide 1.0mg approved", "abnormal hematocrit — hold next dose" |
| **5** | `sensitive_clinical_phi` | Sexual health specifics, mental health crisis, pregnancy, gender-affirming care, substance use, controlled-substance specifics, terminal/serious diagnoses. **Secure view + provider phone ONLY**; push notifications header-only (no body preview). | "Your testosterone is 180", "ED prescription ready", "hormone therapy plan", suicide-ideation crisis, "possible pancreatitis" |

Marketing is a USE CASE that consumes tiers 0/1/3 with appropriate consents — it is not its own tier.

---

# Part 4 — Pathway sensitivity (4-bucket enum)

`pathway_sensitivity` is intrinsic to the pathway. It does NOT mean "every message at tier_5"; it means "outside-secure ceiling is bound by this sensitivity":

| Pathway | `pathway_sensitivity` | Outside-secure max | Rationale |
|---|---|---|---|
| Wellness / supplements / cold acquisition | `low` | tier_3 with `marketing_sms` consent | No clinical sensitivity |
| GLP-1 / metabolic / weight loss | `moderate` | tier_3 with `pathway_named_outside_secure_comm` consent | Weight-loss is socially less sensitive; class naming OK with consent; specific dose/labs always in-secure |
| Female HRT | `high` | tier_2 default; tier_3 only with explicit consent + select templates (rare; per-template opt-in at PR time) | Cycle / cancer / clotting risk + social sensitivity |
| TRT / Testosterone | `extreme` | tier_2 always; tier_3 BLOCKED even with consent | Controlled substance + sexual function + fertility — never name "testosterone" outside-secure |
| ED | `extreme` | tier_2 always; tier_3 BLOCKED | Sexual health stigma + cardiac contraindications |
| Peptides (muscle / antiaging) | `extreme` | tier_2 always; tier_3 BLOCKED | Off-label / regulatory exposure |
| Sleep / depression / mental health (future) | `extreme` + `pathway_crisis_carveout: true` | tier_2 always; tier_3 BLOCKED; crisis routing to phone + 988 | Stigma + crisis safety + safety-vague required |

**Critical:** `pathway_sensitivity: extreme` is the HARDEST CAP. No consent unlocks tier_3 outside-secure for an extreme pathway. This is by design — patient consent cannot override regulatory/clinical-safety floors.

---

# Part 5 — Message intent (10-value enum)

`message_intent` classifies the communication purpose. Same exposure tier behaves differently by intent because consent path differs:

| Intent | Description | Consent path | Examples |
|---|---|---|---|
| `account` | Sign-in, password reset, account changes, security | Implicit (account creation T&C) | "Your password was changed" |
| `operational` | Shipment, scheduling, routine non-clinical status | Implicit (transactional) | "Your shipment is on the way" |
| `clinical` | Provider review update, lab kit, refill request review, dose change | Implicit (telehealth_consent) | "Your provider has an update" |
| `safety` | Urgent / emergency clinical | Implicit + safety_critical_override_allowed; bypasses preference | "URGENT: please call our care team or open Bloom now" |
| `billing` | Payment, refund, subscription | Implicit (subscription/order) | "Your payment failed", "your invoice is ready" |
| `support` | Patient-initiated thread; support staff response | Implicit (mirror patient context) | "Re: your question about your shipment" |
| `marketing` | Promotional, retention, win-back, signup-incomplete | Explicit (`marketing_sms` / `marketing_email`); + `marketing_personalization_with_phi` for tier_3 | "Pick up where you left off" |
| `education` | Onboarding edu, medication instructions, lab prep | Implicit (clinical adjacency) | "How to take your first dose" (in-secure detail; tier_2 outside teaser) |
| `vendor` | Outbound to lab / pharmacy / fulfillment partner | Vendor BAA + `vendor_minimum_necessary_scope` | structured-only |
| `internal` | Internal staff coordination | HIPAA-BAA workspace required for tier_3+; non-BAA channels capped at tier_2 | provider-staff thread |

---

# Part 6 — Channel policy matrix

| Channel | Default max | Uplift to tier_3 | Sensitivity-block | Intent constraints | Emergency override |
|---|---|---|---|---|---|
| **SMS** | tier_2 | Allowed when `pathway_sensitivity ∈ {low, moderate}` + has `pathway_named_outside_secure_comm` consent + intent ∈ {clinical, marketing, education} | BLOCKED when `pathway_sensitivity ∈ {high, extreme}` regardless of consent | marketing intent requires `marketing_sms`; safety always-fires regardless of preference (vague body) | tier_2 vague companion always; never raises ceiling |
| **Email** | tier_2 | Allowed when `pathway_sensitivity ∈ {low, moderate}` + has `pathway_named_outside_secure_comm` consent | BLOCKED when `pathway_sensitivity ∈ {high, extreme}` regardless of consent (rare exception: `clinical_detail_in_email_comm` consent for tier_4 lab values per patient request) | marketing intent requires `marketing_email` | tier_2 vague follow-up only on SMS bounce or 30-min no-action |
| **Push (lockscreen body)** | tier_2 | NOT raised (preview can't be secured) | tier_2 always | header-only for sensitive | header-only "Provider message" |
| **In-app secure view** | tier_5 always | n/a | n/a | full detail home | tier_5 |
| **Phone (human-conducted)** | tier_5 (provider/staff judgment + identity verify) | n/a | n/a | requires `phone_call_clinical_outreach_consent` (default-ON; revocable except for safety-emergency) | tier_5 (preferred for crisis) |
| **Mailed paper** | tier_2 | tier_3 with consent (sealed) | tier_4 sealed envelope only with `mail_paper_clinical_outreach_consent` (rare; legal-required) | n/a | rarely used for emergency |
| **Internal staff (HIPAA-BAA workspace)** | tier_5 | n/a | n/a | always within BAA | tier_5 |
| **Internal staff (non-BAA Slack)** | tier_2 max | NEVER raised | always tier_2 max | n/a | tier_2 max |
| **Vendor** | structured-only; bound by `vendor_minimum_necessary_scope` per `1P` | n/a | n/a | structured fields only | n/a |

Patient channel preference can TIGHTEN any cell (e.g., "I want minimal outside-secure even though I consented to pathway naming") but never LOOSEN above template/channel/pathway cap.

---

# Part 7 — Conditional tier_3 outside-secure (5-condition rule)

Tier_3 outside-secure (SMS / email) is allowed ONLY when ALL FIVE hold:

1. `pathway_sensitivity` ∈ {`low`, `moderate`}
2. Patient has `pathway_named_outside_secure_comm` consent (or `marketing_personalization_with_phi` for marketing intent)
3. `message_intent` ∈ {`clinical`, `marketing`, `education`} — NOT `safety` (always vague), NOT `account` (no need), NOT `internal` (different channel)
4. Template explicitly declares `privacy_exposure_level: 3` and CI-passing `outside_secure_render_strategy: 'mention_pathway_name_with_consent'`
5. Action declares `intended_privacy_exposure_level: 3` (template can't promote a tier_2 action to tier_3)

For `pathway_sensitivity: high` (Female HRT): tier_3 allowed only on per-template explicit opt-in declared at PR time with clinical CODEOWNER approval; rare; documented.

For `pathway_sensitivity: extreme` (TRT / ED / peptides / mental-health): tier_3 BLOCKED regardless of consent. Outside-secure stays at tier_2 forever. Pathway sensitivity is the hardest cap.

---

# Part 8 — Emergency / safety communication orchestration

Safety messages (`message_intent: safety`) follow a deterministic 6-step orchestration:

| Step | Action | Timing | Audit |
|---|---|---|---|
| 1 | SMS fires vague companion at tier_2 ("URGENT: please call our care team or open Bloom now") regardless of patient SMS preference | Immediate | `notification.emergency_vague_override_fired` |
| 2 | Push notification fires header-only ("Urgent provider message") if app installed | Immediate (parallel with step 1) | standard `notification.dispatched` |
| 3 | Provider/staff phone outreach SLA starts (default 15-min for tier_5 urgent symptoms, 30-min for tier_4 critical-lab) | Within SLA | `safety.phone_outreach_initiated` |
| 4 | Email vague follow-up fires ONLY if SMS bounced or no patient action in 30 min | Conditional | `notification.email_safety_follow_up` |
| 5 | Routine notifications (marketing, billing reminders, education, non-urgent operational) SUPPRESSED for the patient during active safety window (default 24h) | Continuous | `notification.suppressed_during_safety_window` per suppressed message |
| 6 | Safety window closes when provider documents resolution OR 24h elapses with no further safety event; routine notifications resume | Auto | `safety.window_closed` |

**Safety override never raises channel ceiling** — body content stays at tier_2 vague even though the underlying clinical event is tier_5. Detailed clinical detail stays in secure view + phone.

**Crisis carveout** (future, when sleep/depression/mental health pathway is scoped): `pathway_crisis_carveout: true` flag on the pathway file routes urgent comms to phone-first + 988 hotline reference + on-call clinician escalation, bypassing the standard 6-step flow for suicide ideation / self-harm signals.

---

# Part 9 — Patient-facing 6-toggle preference model

The patient settings UI exposes 6 human-readable toggles. Internally each toggle reads/writes one or more typed `patient_consents` rows + `notification_channel_preferences` fields. Patient never sees `marketing_personalization_with_phi` legalese — they see "Personalize offers based on my care context."

| Toggle | Plain language | Default | Internal consents/preferences modified |
|---|---|---|---|
| 1 | "Send me useful care updates by text and email" | ON | sets `notification_channel_preferences.transactional_preferred_channels[] = [sms, email, in_app]` and `clinical_low_context_preferred_channels[] = [sms, email, in_app]`; OFF tightens to in-app only |
| 2 | "Allow detailed clinical updates by email" | OFF | `clinical_detail_in_email_comm` consent — when ON, enables tier_4 in email for `clinical` and `education` intents; never for `marketing` |
| 3 | "Allow phone calls from your care team" | ON | `phone_call_clinical_outreach_consent` — when OFF, only safety-emergency phone outreach allowed (NOT revocable for emergency) |
| 4 | "Allow treatment-specific wording outside the app" | OFF | `pathway_named_outside_secure_comm` — when ON, enables tier_3 in SMS/email for `low`/`moderate` pathways; ignored for `high`/`extreme` pathways |
| 5 | "Send me marketing and offers" | OFF | `marketing_sms` + `marketing_email` consents — when ON, enables `marketing` intent on SMS/email at tier_1 default |
| 6 | "Personalize offers based on my care context" | OFF | `marketing_personalization_with_phi` — when ON, enables tier_3 marketing referencing pathway names (still bound by `pathway_sensitivity`) |

**Discipline:**

- Toggles are UI surface; consents are legal/audit truth (HIPAA / TCPA / CASL).
- Toggle changes write `patient_consents` rows with audit + revocation semantics per `1K.11`.
- Toggles 1, 3 default ON (most patients want care updates + provider phone outreach).
- Toggles 2, 4, 5, 6 default OFF (require explicit opt-in).
- **Settings UI shows only what's relevant per pathway** — TRT patients don't see Toggle 4 because pathway_sensitivity = extreme makes it inert.
- Patient can revoke any consent at any time (except `phone_call_clinical_outreach_consent` for safety-emergency, which honors provider duty-to-warn).

---

# Part 10 — Internal consent mapping

The internal `patient_consents.type` enum (per `1K.11`) is the LEGAL TRUTH layer. Patient-facing toggles map to one or more consent types:

| Internal consent type | Maps from toggle | Used by |
|---|---|---|
| `telehealth_consent` | (account creation) | All clinical communications |
| `terms_and_conditions` | (account creation) | All communications |
| `privacy_policy_acknowledgment` | (account creation) | All communications |
| `marketing_sms` | Toggle 5 | `message_intent: marketing` on SMS channel |
| `marketing_email` | Toggle 5 | `message_intent: marketing` on email channel |
| `marketing_personalization_with_phi` | Toggle 6 | tier_3 marketing referencing pathway/clinical context |
| `pathway_named_outside_secure_comm` | Toggle 4 | tier_3 in SMS/email for non-marketing intents (`clinical`, `education`) |
| `clinical_detail_in_email_comm` | Toggle 2 | tier_4 in email (rare; per-patient request) |
| `phone_call_clinical_outreach_consent` | Toggle 3 | Phone outreach for non-emergency clinical |
| `mail_paper_clinical_outreach_consent` | (legal-required only) | Paper mail with sealed clinical content |
| `subscription_auto_renew` | (subscription page) | Subscription billing communications |
| `prescription_order_acceptance` | (Rx order) | Rx-related communications |

---

# Part 11 — What is explicitly prohibited outside secure view

Regardless of consent, these are NEVER permitted in SMS / email / push / non-BAA staff comms:

| Forbidden content | Why |
|---|---|
| Specific lab values | tier_4 — secure view only |
| Diagnosis names | tier_4 — secure view only |
| Medication name + dose | tier_4 — secure view only |
| Sensitive sexual health condition specifics (ED, fertility, gender-affirming care) | tier_5 — secure view + phone only |
| Pregnancy status, cycle status | tier_5 — secure view + phone only |
| Mental health crisis details (suicidal ideation, self-harm) | tier_5 + special crisis flow |
| Adverse event clinical details (e.g., "possible pancreatitis") | tier_5 — vague urgent + phone outreach |
| Provider clinical reasoning | tier_4-5 — secure view |
| Controlled substance specifics | tier_5 — secure view + phone |
| Genetic test results | tier_5 — secure view |
| Substance-use history | tier_5 — secure view |

---

# Part 12 — Privacy-safe useful outside-secure examples (anti-portal-only patterns)

**MOST IMPORTANT discipline:** outside messages must be ACTIONABLE. "You have a secure message. Log in." is the failure mode — patients ignore it. Hims doesn't write that. Apple doesn't write that.

**Bad (portal-only sterile):**
- "You have a secure message. Log in to view."
- "Important account notice. Open the app."
- "Notification available."

**Good (low-context but actionable):**
- "We need one more detail to continue your request."
- "Your provider has an update — review when you can."
- "Your order is on the way." (Module 7)
- "Your refill request needs a quick review." (Module 6)
- "Your lab kit ships tomorrow." (Module 5)
- "Important care update — please check your account." (Module 4 fallback when clinical detail required)
- "URGENT: please call our care team now or open Bloom." (Module 9 safety vague)

**Pattern:** name the ACTION needed + WHERE to act. Do not name PHI.

---

# Part 13 — Vendor minimum-necessary + redact-then-retry

Keep `vendor_minimum_necessary_scope: text[]` declarative on every vendor-facing template.

**Redact-then-retry fallback (NEW):**

| Step | Action | Outcome | Audit |
|---|---|---|---|
| 1 | Deterministic handler verifies outbound payload matches declared scope | Pass / mismatch | none if pass |
| 2 (mismatch) | Block unsafe payload | Halted | `vendor.payload_blocked_unsafe` |
| 3 | Attempt redaction to allowed subset (drop excess fields; minimum necessary) | Redacted payload | `vendor.payload_redaction_attempted` |
| 4 | Retry with safe subset | Pass / fail-vendor | `vendor.payload_redacted_to_scope` |
| 5 | If safe subset CANNOT satisfy vendor action: block + alert owner | Final block | `vendor.payload_blocked_redaction_insufficient` |

**Never deadlock fulfillment** when redaction is feasible. Owner alert only fires when vendor strictly requires the over-scope field for action completion.

**Vendor type-specific scope examples:**

| Vendor | Allowed scope | Forbidden |
|---|---|---|
| Pharmacy | Rx + dose + patient demographics + shipping address + clinician identifier | Diagnosis narrative, full clinical chart, unrelated medications |
| Lab | Lab order + patient demographics + specimen requirements + clinician identifier | Diagnosis, other meds, full chart |
| Fulfillment partner | Shipping address + package contents at SKU level + brand name | Indication, medication name on label, clinical chart |
| Payment processor | Amount + payer info + opaque SKU IDs | Medication name on metadata, indication, full chart |
| Support vendor (HIPAA-BAA) | Full case detail | n/a |
| Support vendor (non-BAA) | Tier_2 max; case ID + opaque session reference | Any PHI |
| Marketing tools (Klaviyo etc.) | Opaque cohort IDs computed in-house | NEVER PHI; cohort IDs only when patient has `marketing_personalization_with_phi` |

---

# Part 14 — Example message library (4 pathways × 8 message types)

For each cell: bad version / acceptable outside-secure / full in-app secure view.

## GLP-1 (sensitivity: moderate)

### Intake reminder
- **Bad:** "Reminder: complete your GLP-1 weight-loss intake to get semaglutide."
- **Acceptable outside-secure:** "Pick up where you left off — your consultation is ready."
- **With Toggle 4 + 6 ON (tier_3):** "Pick up where you left off — your weight-loss consultation is ready."
- **Full in-app:** detailed step + medication preview.

### Lab reminder
- **Bad:** "Complete your A1c lab kit before semaglutide refill."
- **Acceptable outside-secure:** "A quick lab step is waiting — open Bloom to continue."
- **Full in-app:** "Your provider has requested an A1c update before your next semaglutide refill. Lab kit ships in 24 hours."

### Refill approved
- **Bad:** "Your semaglutide 1.0mg is approved. Ships tomorrow."
- **Acceptable outside-secure:** "Your prescription has been approved by your provider. Track shipment in Bloom."
- **Full in-app:** medication name + dose + ship date + lab freshness summary.

### Dose change
- **Bad:** "Your semaglutide is increasing to 1.7mg next week."
- **Acceptable outside-secure:** "Your provider has an update on your treatment plan. Open Bloom to review."
- **Full in-app:** dose change rationale + titration schedule + side-effect expectations.

### Adverse event (nausea reported)
- **Bad:** "Your reported nausea after semaglutide may need dose adjustment."
- **Acceptable outside-secure:** "Your provider has reviewed your update and will follow up shortly."
- **Full in-app:** detailed clinical guidance + provider note.

### Fulfillment update
- **Bad:** "Your warm semaglutide shipment is being replaced."
- **Acceptable outside-secure:** "We're sending a replacement for your recent order. Tracking in Bloom."
- **Full in-app:** cold-chain failure detail + replacement ETA.

### Billing
- **Bad:** "Your $399 semaglutide subscription failed to charge."
- **Acceptable outside-secure:** "We weren't able to process your latest payment. Update payment method in Bloom."
- **Full in-app:** invoice detail + retry options.

### Marketing — abandoned intake
- **Bad (no consent):** "Don't lose your weight loss plan! Your semaglutide is waiting."
- **Acceptable (Toggle 5 ON, no Toggle 6):** "Your account is ready when you are. [link]"
- **With Toggle 5 + 6 ON:** "Pick up where you left off — your weight-loss consultation is waiting."

## TRT (sensitivity: extreme)

### Intake reminder
- **Bad:** "Complete your testosterone intake."
- **Acceptable outside-secure:** "Pick up where you left off — your consultation is ready."
- **Full in-app:** detailed TRT-specific intake.

### Lab reminder
- **Bad:** "Hematocrit and PSA labs needed before testosterone refill."
- **Acceptable outside-secure:** "A quick lab step is waiting — open Bloom to continue."
- **Full in-app:** specific labs + rationale.

### Refill (sensitive)
- **Bad:** "Your testosterone refill is ready."
- **Acceptable outside-secure:** "Your prescription has been approved. Open Bloom for details."
- **Full in-app:** medication name + dose + refill schedule.

### Dose change
- **Bad:** "Your testosterone cypionate is decreasing to 100mg weekly due to elevated hematocrit."
- **Acceptable outside-secure:** "Your provider has an update on your treatment plan."
- **Full in-app:** detail + clinical reasoning.

### Adverse event (hematocrit elevated)
- **Bad:** "Your hematocrit is 54%. Hold off on next testosterone dose."
- **Acceptable outside-secure (safety-vague):** "URGENT: please open Bloom or call (555) 555-1212."
- **Phone outreach by provider** within 30-min SLA.
- **Full in-app:** specific lab + provider hold instruction.

### Fulfillment update
- **Bad:** "Your testosterone shipment is delayed."
- **Acceptable outside-secure:** "Your shipment is delayed by 2 days. Open Bloom for tracking."
- **Full in-app:** medication name + delay reason + new ETA.

### Billing
- **Bad:** "Your $200 testosterone subscription is renewing."
- **Acceptable outside-secure:** "Your subscription renews tomorrow. View detail in Bloom."
- **Full in-app:** plan name + amount.

### Marketing — reactivation
- **Bad (any tier_3+ marketing on extreme pathway):** "Restart your testosterone plan today."
- **Acceptable (Toggle 5 ON; sensitivity: extreme blocks tier_3):** "We'd love to have you back. Sign in to see what's new."

## ED (sensitivity: extreme)

### Intake incomplete
- **Bad:** "Complete your ED intake to get sildenafil."
- **Acceptable outside-secure:** "Pick up where you left off — your consultation is ready."

### Prescription approved
- **Bad:** "Your sildenafil 50mg prescription is approved."
- **Acceptable outside-secure:** "Your prescription has been approved. Track shipment in Bloom."

### Contraindication clarification
- **Bad:** "We need to confirm you're not on nitrates before approving your ED prescription."
- **Acceptable outside-secure:** "Your provider has a quick clarification question. Open Bloom to respond."

### Sensitive refill reminder
- **Bad:** "Time to refill your ED medication."
- **Acceptable outside-secure:** "Your refill request needs a quick review."

### Marketing reactivation
- **Bad (extreme blocks tier_3 marketing):** "Restart your ED plan."
- **Acceptable:** "We'd love to have you back. Sign in to see what's new."

## Female HRT (sensitivity: high)

### Pregnancy-status clarification
- **Bad:** "Please confirm pregnancy status before HRT prescription."
- **Acceptable outside-secure:** "Your provider has a quick question — please respond in Bloom."

### Lab/mammogram reminder
- **Bad:** "Mammogram due before continuing HRT."
- **Acceptable outside-secure:** "A quick health check is needed. Open Bloom for details."

### Dose adjustment
- **Bad:** "Your estradiol is increasing to 1mg."
- **Acceptable outside-secure:** "Your provider has an update on your plan."

### Contraindication review
- **Bad:** "Clotting risk requires review before HRT continuation."
- **Acceptable outside-secure:** "Your provider needs to review something with you. Open Bloom."

### Education message
- **Bad:** "How to take your hormone replacement therapy"
- **Acceptable outside-secure (with Toggle 6 + sensitivity: high allows tier_3 in select per-template opt-in):** "How to get the most out of your treatment plan" (per-template explicit opt-in only)
- **Default (no per-template opt-in):** "We have a quick care tip for you. Open Bloom to read."

---

# Part 15 — Marketing-specific examples

## Good marketing copy (with appropriate consents)

- **Toggle 5 only (no PHI personalization):** "Welcome back! See what's new from our medical team." [generic]
- **Toggle 5 + 6 (with `marketing_personalization_with_phi`) on `low`/`moderate` pathway:** "Pick up where you left off — your weight-loss consultation is waiting." [tier_3 OK]
- **Toggle 5 + 6 on `high`/`extreme` pathway (still capped at tier_2):** "We'd love to have you back. Sign in to see your account."

## Bad marketing copy

- **Tier_4 in marketing, ever:** "Your A1c is 7.2 — let's adjust your plan." (NEVER allowed in marketing intent regardless of consent)
- **Tier_3 on extreme pathway with consent:** "Restart your testosterone." (BLOCKED by `pathway_sensitivity: extreme`)
- **Tier_3 marketing without `marketing_personalization_with_phi`:** "Your weight loss plan is waiting." (BLOCKED until both consents present)
- **Implies clinical outcome:** "Lose 30 pounds with semaglutide." (BLOCKED by existing `must_not_imply_clinical_outcome` floor + privacy)

## Borderline copy + safer rewrite

| Borderline | Safer rewrite |
|---|---|
| "Your weight loss plan is waiting" (without consent) | "Your account is ready when you are" |
| "Time to refill your prescription" (any sensitive pathway) | "Your refill request needs a quick review" |
| "Try our latest GLP-1 offering" (in marketing email) | "We have new options available — check your account" |
| "Don't forget your dose tonight" | "We have a care tip for you. Open Bloom to read." |

---

# Part 16 — Patch list summary

| Patch | Section | Lines (approx) |
|---|---|---|
| 1 | NEW audit file (this document) | ~700 |
| 2 | `Section 1Q.5` template object shape extension | ~35 |
| 3 | NEW `Section 1Q.4` RuleAction extension (action-level enforcement) | ~30 |
| 4 | `Section 1G.3` send-policy 5-step enforcement chain + emergency orchestration | ~50 |
| 5 | `Section 1K.11` consent + 6-toggle UI mapping | ~40 |
| 6 | `Section 1Q.7` audit trail (6 new event types) | ~50 |
| 7 | `Section 1Q.13` module taxonomy (2 new columns) | ~30 |
| 8 | `Section 1P` vendor minimum-necessary + redact-then-retry | ~35 |
| 9 | `Section 1K.2` pathway_sensitivity replacement | ~25 |
| 10 | NEW `Section 1Q.17` Privacy + communication governance gate | ~70 |
| 11 | `Section 1Q.15` GLP-1 templates inline declaration | ~30 |

**Total system map net:** ~330 lines.

---

# Part 17 — Foundational gaps surfaced

1. No declared exposure level on templates today → Patch 2 fixes
2. No action-level intended exposure / intent declaration → Patch 3 fixes (developer can't pick wrong template for sensitive action)
3. No deterministic privacy gate at outbound_jobs dispatch → Patch 4 fixes
4. No pathway sensitivity classification → Patch 9 fixes (TRT/ED/HRT pathways currently could send "your testosterone refill" if a template were misclassified)
5. No vendor-payload-scope discipline → Patch 8 fixes (with redact-then-retry to avoid deadlocks)
6. No safety-vague-companion pattern → Patch 2+4 fix (urgent SMS today could leak "possible pancreatitis" through ungoverned content)
7. No emergency suppression of routine messages during active safety window → Patch 4 (orchestration step 5)
8. No patient-facing simplified preference UI → Patch 5 (6-toggle model)

---

# Part 18 — MVP-polish refinements

1. Patient self-service tier preference (TIGHTEN) at account settings — Patch 5 covers data shape; UI is runtime work
2. AI refinement constraints already exist (1Q.5) — privacy is orthogonal; AI can't add prohibited PHI per existing `prohibited_claims` floor; reaffirmed in Patch 10 invariants
3. Sensitivity-aware UI: settings page shows only relevant toggles per pathway (extreme pathways hide Toggle 4 because it's inert)

---

# Part 19 — Out of scope (deferred)

- Mental-health pathway-specific crisis comm flows (988 hotline integration, on-call clinician escalation): captured here as "future when sleep/depression pathway is scoped" — `pathway_crisis_carveout: true` field reserved for that pathway
- Per-jurisdiction privacy law differences (GDPR / CCPA / state-specific) beyond existing TCPA/CAN-SPAM/CASL captured in 1K.11 — stays as a future jurisdiction_variants extension

---

# Part 20 — Final readiness verdict

After this checkpoint lands: privacy + communication governance is foundationally complete. Action-level + template-level + channel + pathway sensitivity + consent + preference enforcement chain in place. Patient-facing 6-toggle preference UI mapping designed. Emergency 6-step orchestration defined. Vendor minimum-necessary with redact-then-retry safe-fallback defined. GLP-1 slice templates carry exposure + intent declarations.

Ready for runtime implementation per the GLP-1 first vertical slice plan + adversarial readiness checkpoint. Privacy governance is now part of the pre-runtime gate.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved triple-axis taxonomy + action-level enforcement + 6-toggle UI + emergency orchestration + redact-then-retry on 2026-04-30. Single multi-file checkpoint applied: 11 patches + this audit file.

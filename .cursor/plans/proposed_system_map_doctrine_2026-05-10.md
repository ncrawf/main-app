# Proposed Platform operational model doctrine — for system-map insertion

**Status:** PROPOSED. Not yet inserted into the system map. Awaiting your approval before I write it.

**Where this lands when approved:** new top-level `## Platform operational model` section inserted into [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) immediately after line 5 (after the labs precedence note), before `## Intent (short)` at line 7.

**Why a separate file:** the chat rendering kept failing on long blocks. This file is just the doctrine text in plain markdown so you can read, edit, and approve before any system-map write.

---

## Proposed doctrine text (copy-pasted exactly as it would land in the system map)

## Platform operational model (binding platform premise — precedes Intent and every section below)

**This platform is intentionally architected as a patient-rooted healthcare operating system.** It is **not** an intake-centric workflow, **not** a notifications runtime, **not** a case-centric monolith, **not** a CRM bolt-on, and **not** a collection of disconnected vertical products.

**Major operational domains are first-class siblings under the patient and shared organizational context.** These include: **clinical record / charting**, **care programs / pathways**, **scheduling / appointments**, **prescriptions / pharmacy lifecycle**, **orders / fulfillment / inventory**, **labs / diagnostics**, **provider tasks / escalation**, **communications / inbox**, **billing / subscriptions / claims**, **retail / commerce**, and **marketing / lifecycle journeys**. Each sibling has its own state machine(s), producer surfaces, typed events, payload discriminants, and audit lineage. **Siblings are peers under Patient.** Siblings are **never** nested under each other. Siblings are **never** modeled as sub-shapes of any single sibling (including "case").

**These domains integrate through a shared governance and orchestration substrate, not as disconnected bolt-ons.** The shared substrate includes: **audit lineage**, **authority boundaries**, **disclosure-policy**, **consent**, **deterministic evaluation**, **runtime isolation** (pure-evaluator + async-runtime pattern), **pathway sensitivity**, **idempotent orchestration**, **cross-org tenancy**, and **longitudinal operational memory**. Substrate primitives are **infrastructure every sibling depends on**; substrate is **never** modeled as a sibling alongside operational domains. Adding a "domain folder for audit lineage" or "domain folder for disclosure-policy" is a category error.

**The platform explicitly rejects modeling all future work as subordinate to intake, notifications, or a universal "case" primitive. A case is one operational object among many, not the parent ontology of the system.** Reusing a payload discriminant across siblings (e.g., extending `case_kind` to cover orders, appointments, prescriptions, lab kits, or marketing journeys) is the canonical canonization-of-wrong-ontology error this premise prevents. Each sibling owns its own discriminant: `case_kind` for clinical-decision, `order_kind` for fulfillment, `appointment_kind` for scheduling, `pharmacy_event_kind` for pharmacy lifecycle, `lab_event_kind` for labs/diagnostics, and so on.

**This premise binds every section of this map.** Concretely:

- **Domain folder naming** (`repo/rules/<domain>/`, `repo/templates/<domain>/`, `lib/<domain>/`) tracks the sibling-domain layer. Active or pending: `clinical_decision/`, `account_lifecycle/`, `billing_subscription/`, `fulfillment_lifecycle/`. Future siblings activate when their first concrete migration arrives (`scheduling_lifecycle/`, `pharmacy_lifecycle/`, `labs_lifecycle/`, `provider_tasking/`, `communications_lifecycle/`, `retail_lifecycle/`, `marketing_lifecycle/`); they are not pre-created.
- **Payload discriminants** belong to a single sibling and **do not leak across sibling seams**.
- **Producer-site locality** is per-sibling. Legacy cross-sibling producers (e.g., a fulfillment-shaped event currently emitted from `lib/internal/patient-case/impl.ts`) are tagged transitional with explicit comments and tracked in the v1 pressure-test radar; they do not retroactively justify nesting siblings under each other.
- **Substrate-vs-operational distinction** governs every architectural choice.
- **Platform-grade foundations bar:** the substrate must admit each sibling as a first-class surface (Epic-style EMR depth, Mindbody-style scheduling, Shopify-style retail, ActiveCampaign-style marketing journeys, Twilio-style governed communication, full pharmacy lifecycle, labs/diagnostics, provider tasking, in-app messaging, AI orchestration / decision support) **without substrate rewrites**.

Implementation companions such as [`docs/architecture/operational_objects_under_patient.md`](../../docs/architecture/operational_objects_under_patient.md) elaborate conventions for domain folders, payload discriminants, producer locality, and per-sibling sub-shapes. **This section is the binding platform premise; companions elaborate.**

---

## How this differs from the weak version I proposed earlier

- **Title:** "Platform operational model (binding platform premise)" — not "forward-looking companion."
- **Voice:** declarative ("IS", "NOT", "explicitly rejects") — not "is converging toward."
- **Anti-patterns named explicitly:** intake-centric, notifications runtime, case-centric monolith, CRM bolt-on, disconnected vertical products.
- **Substrate-as-sibling rejected explicitly:** "Adding a 'domain folder for audit lineage' is a category error."
- **Case demoted explicitly:** "A case is one operational object among many, not the parent ontology."
- **Discriminant-leak named as the canonization error:** by name (`case_kind` extended to orders, appointments, lab kits, marketing journeys, etc.).
- **Companion doc reframed as elaboration, not as the source:** "this section is the binding platform premise; companions elaborate."

---

## Full execution plan if you approve this doctrine text

In order:

1. **Insert the doctrine** above into [`/Users/bloomfrontdesk1/Desktop/main-app/.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) immediately after line 5, before line 7's `## Intent (short)`. No other changes to the system map.

2. **Reframe the forward-looking doc** at [`/Users/bloomfrontdesk1/Desktop/main-app/docs/architecture/operational_objects_under_patient.md`](../../docs/architecture/operational_objects_under_patient.md):
   - Change the opening from "forward-looking observation, NOT binding doctrine" to "Implementation companion to the **Platform operational model** binding doctrine in the system map. The doctrine binds; this companion elaborates with the visualization, per-sibling conventions, and platform-grade-foundations bar."
   - Change "the vision" / "what we're actually building" / "forward-looking lens" headings throughout to declarative equivalents that reference the doctrine as already-binding.
   - Body stays intact (layering tree, foundations bar table, conventions).

3. **Reword audit §8** at [`/Users/bloomfrontdesk1/Desktop/main-app/.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`](audits/2026-05-10_system_map_alignment_pressure_test.md):
   - Rename "Patient-as-root operational objects (forward-looking visualization)" to "Patient-as-root operational objects (doctrine reference)."
   - Reframe §6 adjustments as **operationalizing existing doctrine** (the doctrine now in the system map), not as preventing future drift.
   - End-of-audit recap: drop the "system map amendment is a one-line cross-reference" language; replace with "system map now binds the operational-object layer at the top via the Platform operational model section."

4. **Update the v1 pressure-test radar** at [`/Users/bloomfrontdesk1/Desktop/main-app/docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) with the new watch zone (case-shaped event leakage into fulfillment / scheduling / pharmacy / labs / retail / marketing siblings — with the Platform operational model doctrine as the binding parent invariant the watch zone protects).

5. **Then preflight the shipped migration** with the audit's §6 adjustments (`fulfillment_lifecycle/` folder, `order_kind` discriminant, producer-locality comment, radar entry) — now standing on doctrine, not aspiration.

---

## Approval

Tell me one of:

- **"approve and execute"** — write doctrine into system map, do steps 2–4, stop before step 5 (shipped preflight) so we sanity-check the doctrine landed cleanly.
- **"approve doctrine only"** — write doctrine into system map, then pause; I want to see it land before the doc/audit/radar reframes.
- **"edit first: <your edits>"** — tweak the doctrine text first.
- **"approve and run end-to-end"** — all 5 steps including shipped preflight without stopping.

# OMNI Operator Context + Collaboration Model

Document type: `doctrine`
Authority: governance_binding operator/collaboration context
Status: active
Domain(s): architecture_governance, agent_execution, operator_governance
Lifecycle role: canonical_authority for operator identity + collaboration model
Source-of-truth relationship: canonical home for who is who (Nick / Opus / Knox) and how they collaborate; binding for every agent boot regardless of work class
Supersedes: §0 of `user_knox_preferences_locked_2026-05-17.md` (since renamed to `scheduling_foundation_preference_record_2026-05-17.md`); operator-profile context was extracted to this file as part of the 2026-05-23 preference-doc refactor (`D0OPER-DEC-002`)
Superseded by: none
Manifest action: add_tier0
Review gate: user_knox_required

agent_read_rule: tier0_mandatory

---

## Read this FIRST

This is the most important context for any agent working on this project. Read before any other doctrine. Failure to internalize this section means the agent will misclassify discourse, mis-calibrate explanation level, and treat third-party AI review as human authority.

---

## §1 Who is who

- **Nick** — the operator / user / project owner. Communicates in chat. **Non-coder.** Not an engineer. Should not be expected to read TypeScript, SQL DDL, or other code-level details, however, he is able to understand these concepts and details, espeically with further third-party ChatGPT assistance. Can be addressed directly as "you" / "Nick" — or as "user", or as "Nico".

- **Opus** — the Claude (Anthropic) instance running inside Cursor as the coding agent. **This is the agent reading this file right now if you are running inside Cursor on this project.** Opus produces output: doctrine drafts, code, refinements, commits, etc.

- **Knox** — a **ChatGPT instance** (separate AI, accessed in a different tab/app) that Nick uses as a third-party reviewer and sparring partner. Knox is **not a human teammate.** Knox does not have repo access. Knox reads what Nick pastes to it, then responds with review / pushback / refinement suggestions. The name "Knox" is a chosen identifier for this ChatGPT role, used consistently across the doctrine corpus (including the historical `scheduling_foundation_preference_record_2026-05-17.md` §2 and `mindbody_knox_chat_raw*.md` ingestion files).

---

## §2 Default collaboration model (the trifecta)

Standard working pattern, unless Nick explicitly changes it:

1. **Opus produces.** Output goes into the chat (this Cursor session).
2. **Nick interprets.** Reads Opus's output, filters / extracts what to share with Knox.
3. **Nick feeds output to Knox** (in a separate ChatGPT tab).
4. **Knox reviews.** Provides pushback, refinement, or affirmation.
5. **Nick relays Knox's response back to Opus**, often quoting Knox directly with markers like `knox =` or `at knox` or `Knox says...`.
6. **Opus refines** and re-executes, with explicit instructions to push back if needed (not blindly agree with Knox).

This is the loop. Recognizing it changes how Opus reads incoming messages:

- A message that starts with `"knox = ..."` or `"Knox said..."` or `"at knox, ..."` is **Nick relaying Knox's feedback for Opus to consider.** Opus should treat this as third-party review input, evaluate honestly (push back where Knox is wrong; refine where Knox is right), and act.
- A message that contains `"me = ..."` or starts in Nick's voice without a Knox marker is **Nick speaking directly.** This is the operator's own direction.
- A message that mixes both (Nick's framing + Knox's quoted review) is a **mediated handoff**. Opus reads Knox's review through Nick's filter, then acts.

---

## §3 Why this matters

- **Without this context:** a new agent sees `"knox = ..."` and assumes Knox is a teammate whose name happens to be Knox. The agent then either defers to Knox's input as if it were authoritative human review, OR treats Knox's pushback as adversarial because "another person is in the room." Both are wrong.
- **With this context:** the agent correctly classifies Knox-quoted input as third-party AI review, evaluates it on merits (not on Knox's authority), and acts.
- **Without this context:** the agent assumes Nick can read code, dumps technical details, and Nick gets frustrated by the over-explanation or by being expected to verify implementation details himself.
- **With this context:** the agent calibrates explanation to non-coder operator: high-level decisions + tradeoffs + recommended action + minimal code unless requested.

---

## §4 Standing default behaviors (BINDING)

These are binding for every session unless Nick explicitly opts out:

1. **Address Nick directly.** "You" or "Nick" or "Nico" or "user."
2. **Non-coder acknowledgement.** Default explanations can be decision-level + tradeoff-level + recommendation-level. Code-level detail is also acceptable too, because Knox will also likely look at the output and preservation of high-level details is needed for best decisions.
3. **Knox = AI reviewer, not human.** When Knox feedback arrives, evaluate on merits. Push back if Knox is wrong. Don't defer to Knox just because Knox said it. Don't reject Knox just because Nick is the user. Knox's role is to sharpen Opus's thinking — Nick wants the disagreement to be real, not performative.
4. **Trifecta is the default, not the only mode.** If Nick says "just answer me directly" or "no Knox round-trip," respect that. If Nick relays Knox feedback, run the relay loop. Read the discourse markers (`knox =`, `me =`, `at knox`, etc.) to know which mode is active.
5. **Preservation per Checkpoint Preservation Rule.** Per Agent Work Protocol §8, work-package checkpoints produce handoffs; major arcs produce narrative + guardrail extraction. This applies regardless of who is in the loop.
6. **Honest pushback.** If Nick or Knox is wrong, say so with evidence. Don't capitulate to either. Don't agree just to be agreeable.

---

## §5 What this section is NOT

- It is NOT a workflow constraint. Nick can change the working mode any time.
- It is NOT a hierarchy claim. Nick is the operator; Opus is the agent; Knox is the third-party reviewer. None has authority over the canonical doctrine destinations — those win on conflict.
- It is NOT a Knox-specific routing rule. It applies whenever ANY external review (ChatGPT-labeled-Knox, another model, another tool) is relayed through Nick. Substitute the appropriate name; the model holds.

---

## §6 Where this is enforced

- This file: substantive home. Tier 0 mandatory in `04_manifest_read_graph.md` Universal Path #16.
- `AGENTS.md` Non-Negotiables: boot-visible pointer to this file (first non-negotiable bullet).
- `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` `D0OPER-GRD-001`: timeless guardrail row "treating Knox as a human teammate / treating operator as a coder."
- `.cursor/plans/doctrine/03_decision_extraction_ledger.md` `D0OPER-DEC-001`: original codification decision; `D0OPER-DEC-002`: extraction-to-dedicated-file decision (2026-05-23).

---

## §7 Related historical material (consult-routed, not universal)

The following docs preserve the historical/contextual origin of OMNI's operating discipline. **None is universal boot context. Consult only when work touches their scope:**

- `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` — historical primary-source record of Nick's + Knox's verbatim preferences during the 2026-05-16/17 scheduling foundation arc. Binding decisions from that arc have been routed to canonical destinations (DL-15/16/17/20/21, CNS ADR, scheduling rule matrix, guardrail digest). Consult when working on scheduling/substrate/commerce/federation.
- `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` — checklist for starting new pillar/substrate workstreams. Consult when entering a new pillar (e.g., D6 commerce build start, future D8/D9 pillars).
- `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` — post-mortem of the scheduling foundation arc. Consult when relevant pattern arises.
- `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md` — three-layer substrate pattern. Tier 0 Universal Path (already loaded at boot).

Read these when your work depends on their content. Do not treat them as universal current doctrine.

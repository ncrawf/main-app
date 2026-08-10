# v4 — FAI — PRE-0 — AGENT A · BLIND ALTERNATIVE DESIGN

Document type: `evidence_or_ingestion` — **immutable once pasted**
Authority: **NONE.** Preservation confers no authority (`D0THES-GRD-036`). **No model authors the architecture.** Agreement between agents is not corroboration.
Status: **`awaiting_operator_population`** · `never_default_loaded`
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **blind alternative design only.** This agent never audits our plan and never sees it.
Manifest action: `add_tier4` **PROPOSED** — not landed.
Review gate: `user_knox_required`

**Where this came from:** the operator ran the prompt in §2 below in a fresh external chat and pasted the raw answer into §3. **Protocol of record:** `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md`. **Consumed by:** `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` — every materially distinct finding gets a row and a disposition there, and **G1/G3 cannot close while a row is undisposed.**

**This agent produces a design and nothing else.** It does not review the FAI plan — that is Agent C's job, and comparing the two is the reconciler's job, not any agent's.

---

## §1 — ## Provenance — FILL THIS IN WHEN YOU PASTE

| Field | Value |
|---|---|
| Model + version | |
| Provider / family | |
| Date + time run | |
| Who ran it | Nick (operator) |
| **Prompt used** | **the block in §2 of THIS file, verbatim** |
| Prompt source of record | `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md` §5 |
| Prompt modified in any way? | **yes / no** — if yes, quote the change |

### Blindness declaration — every line matters; a "yes" does not void the run, it scopes it

| Was the agent... | |
|---|---|
| a **fresh context** with no prior OMNI conversation? | yes / no |
| **blind to the repository** — no repo access, no file reads, no code search? | **yes / no** |
| **blind to the internet** — no web search, no browsing, no retrieval? | **yes / no** |
| **blind to the OMNI name** — did the prompt or any tool reveal "OMNI"? | **yes / no** |
| blind to **our plan, charter, package shape, Reactor, root requirements**? | **yes / no** |
| blind to the **failure record / handoff**? | **yes / no** |
| blind to the **other agents' submissions**? | **yes / no** |
| Did it ask clarifying questions before answering? | yes / no — if yes, quote them and your replies |
| Any tool calls made? | none / list them |

**Why the repo and internet lines exist:** an agent with repository access is **not blind** — it can read our decomposition. An agent that searched the web for "OMNI architecture" is **not blind** either. **Neither invalidates the submission — but the reconciliation must know**, because a "convergence" produced by an agent that read our answer is not convergence.

---

## §2 — THE EXACT PROMPT THAT WAS SENT
*(copy from here; do not retype. If you change a word, say so in §1.)*

```
Design the architecture and the architecture-management system for a
2030-2035 longitudinal care and business operating substrate.

CONTEXT (facts only)
It serves patients, providers, clinical and non-clinical staff, operators,
enterprises, federations of operators, external principals (payers,
pharmacies, labs, lenders, suppliers, employers, public programs),
software agents, connectors to ordinary business systems (email, chat,
payroll, banking, calendars), sensors, devices and eventually robotics.

It must preserve, as first-class and non-collapsible:
- non-fungible authority among legally and professionally independent
  principals whose truths, commitments, refusals and liabilities cannot be
  merged into one platform's judgement;
- patient consent, refusal and represented authority;
- source sovereignty (external systems remain authoritative for facts
  committed in their own systems);
- separation of clinical meaning from financial/commercial interest;
- correction and reopening without erasing history;
- longitudinal continuity across changing counterparties and operators;
- portability and non-captivity;
- proof of what happened, under whose authority.

It must support thousands of LOGICAL operator instances, which may run on
one multi-tenant deployment, several regional deployments, dedicated
enterprise installations, or federated nodes. Logical instance is not the
same thing as physical deployment.

Large numbers of human and machine actors must be able to propose, review,
implement, propagate, observe and repair changes to the system - without
any single agent, vendor, deployment, ontology or control plane becoming
sovereign.

Treat the requested outputs below as CONCERNS THAT MUST BE COVERED, not as a
prescribed decomposition. You may merge, split, rename, reorder or reject
these categories if a materially better architecture requires it. If you do,
show explicitly where every requested concern is handled.

PRODUCE
 1. architecture artifact taxonomy (what document/resource classes exist,
    what each owns, what each forbids)
 2. architecture content model
 3. architecture operations / change model
 4. multi-agent and fleet operating model
 5. deployment and variation model
 6. repository / package shape
 7. conformance and observability model
 8. the TEN most dangerous omissions in your own design
 9. falsifiers - what evidence would show your design is wrong
10. what must be correct AT PLANTING versus what may safely evolve later

THEN ANSWER THIS SEPARATELY AND EXPLICITLY
Which parts of your own proposal become WRONG because healthcare contains
legally and professionally independent principals whose truths,
commitments, refusals and liabilities cannot be collapsed into one
platform? Name the specific assumptions in your design that fail, and what
you would replace them with.

CONSTRAINTS
- No vendor product may be the only place a rule can live.
- Do not assume a single source of truth across principals.
- If you propose ANY shared control plane, ontology, workflow engine, event
  graph or semantic layer, state exactly: what it may own, what it may
  NEVER own, how independent-principal authority survives it, its failure
  boundary, and how it can be replaced.
- State what you are uncertain about rather than resolving it silently.
```

---

## §3 — VERBATIM RESPONSE
*(paste the raw answer between the markers. Do not edit, summarize, reformat or correct it. Corrections belong in the reconciliation ledger, which cites this file.)*

<!-- BEGIN VERBATIM -->


<!-- END VERBATIM -->

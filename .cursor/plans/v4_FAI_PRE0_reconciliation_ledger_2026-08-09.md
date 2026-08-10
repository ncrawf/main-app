# v4 — FAI — PRE-0 — Reconciliation Ledger

Document type: `handoff_or_readiness_gate` (disposition ledger)
Authority: `analysis_nonbinding`. **This ledger disposes of findings; it does not adopt them by listing them.**
Status: **`awaiting_pre0_submissions`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **the anti-appetizer mechanism.** Every PRE-0 finding gets a row and a disposition.
Manifest action: `add_tier2` **PROPOSED** — not landed.
Review gate: `user_knox_required`

> ## ★ THE BINDING RULE
> **G1 and G3 CANNOT CLOSE while any row here is undisposed.**
>
> **Row granularity:** every **materially distinct** architecture claim, omission, counterexample or plan defect gets a row. **Duplicate formulations may be grouped — but every source passage stays cited.** Two long model responses must not become three hundred ceremonial rows.
>
> **Closure differs by source:** **plan-audit blockers (Agent C) must be resolved BEFORE G0.** **Alternative-design findings (A/B) may flow into G1/G3 — but every one still requires a bounded disposition.**
> This is Gate-1b §15.1 part E — *a named consuming gate that cannot pass without disposing of the finding* — applied to the preflight. **It is why the comparator is not thrown away when the artifact gets written, which is exactly what happened in the Insurance arc.**

## Disposition vocabulary — fixed in advance
`adopted` · `adopted_narrowed` · `already_present` *(name the OMNI carrier)* · `rejected_with_reason` · `out_of_scope` · `open`

**Two dispositions have hard requirements, because both are how a ledger becomes a graveyard:**
- **`open`** is valid ONLY with **owner + trigger + target gate + blocking/non-blocking status.** "Open with an owner" alone is a parking label.
- **`out_of_scope`** requires **an actual destination artifact** — not "later" and not "another arc."

**Every row carries four fields beyond its disposition:** `source_ref` (file + section) · `blocking_scope` (blocks G0 / blocks G1 / blocks G3 / non-blocking) · `owner_or_destination` · `trigger_or_target_gate`.

## The defect rule
**The plan is defective only where it cannot express, evaluate, adopt, reject or disposition a *materially necessary* capability or relationship surfaced by the counter-design.** Blind agents will produce generic enterprise assumptions, vendor-captive shapes, god-ontologies and designs that violate independent-principal physics. **Difference is evidence. Difference is not authority.**

---

## Agent A + B findings — architecture the alternative designs contain
*(model-generated alternative designs. NOT external comparators — those are G1 Lane 1 primary sources.)*

| # | Finding | Agent | `source_ref` | Materially necessary? | Disposition | `owner_or_destination` | `blocking_scope` | `trigger_or_target_gate` |
|---|---|---|---|---|---|---|---|---|
| | | | | | | |

## Agent A + B inverse answers — where generic design FAILS under independent principals
*(the half that finds what frontier practice gets wrong about healthcare)*

| # | Assumption that fails | Agent | Does OMNI already avoid it? | Disposition | Carrier |
|---|---|---|---|---|---|
| | | | | | |

## Agent C findings — independent plan audit
*(**blockers here close before G0**)*

| # | Finding | `source_ref` | Class | Disposition | `owner_or_destination` | **Blocks G0?** | Patch required? |
|---|---|---|---|---|---|---|---|
| | | | omission · overbuilt · sequencing · authority · dependency · acceptance · irreversibility | | |

## Verdicts
| Agent | Verdict | Notes |
|---|---|---|
| C (plan audit) | | |

## Reconciliation outcome
| Field | Value |
|---|---|
| Rows total / disposed | |
| Material omissions found | |
| Machinery removed or deferred | |
| Amendment cycle used | none / one |
| Third agent required | no / yes + reason |
| G0 recommendation | |

**STOP: `ledger_awaiting_submissions`**

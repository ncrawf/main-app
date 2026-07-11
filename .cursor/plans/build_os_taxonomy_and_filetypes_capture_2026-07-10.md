# Build OS — Architecture Taxonomy + File-Types Capture (Knox drift, 2026-07-10)

Document type: `evidence_or_ingestion` (captured third-party-AI ideation; raw preserved) · Authority: `analysis_nonbinding` — **binds nothing.** A preserved discussion, not doctrine, not a plan, not a Build-OS decision. Propose-only until routed + promoted through the relevant gate (`GRD-036`).
Status: `scaffold_awaiting_paste` (space reserved 2026-07-10; ⬇️ paste the Knox chat into §1).
Domain(s): `architecture_governance`, `build_os`.
Lifecycle role: **future-gate INPUT capture** — a Knox (ChatGPT review instance) chat that drifted usefully into **architecture taxonomy + file types + architecture organization**. Preserved so it is not lost for future-us / the next agent.
Source-of-truth relationship: raw captured ideation; NOT source truth. Consumed by (does not define) the C5 repo/file-type taxonomy gate + spine/thesis authoring + Build OS (see §3).
Registered: Future Work Registry row **`FWREG-008`** (canonical discoverability home for future-work payloads).
Review gate: `user_knox_required`.

---

## §0 — What this is (read first)

The operator (Nick) was spinning up a fresh Knox agent; that chat **drifted into something genuinely useful for Build OS + taxonomy / file types / architecture organization**. This file **reserves the space and preserves the chat** so it becomes a reference for the **spine, thesis, and taxonomy work** — specifically the point where we "start to get a handle on architecture organization."

**Do NOT treat this as binding.** It is captured ideation (Knox = third-party AI review instance, not doctrine). Its ideas must be evaluated on the merits and **routed through the proper gate** (C5 repo-taxonomy plan / Build OS / architecture artifact index) before anything becomes authority — same posture as every Evidence-Plane capture (`GRD-036`, `GRD-039` process-as-data).

**Scope guard:** this is a *taxonomy + file-types + architecture-organization* capture (how OMNI's own artifacts/files/types/structure are named + organized). It is NOT a domain/care-substrate artifact and it is NOT a boot/doctrine change.

---

## §1 — RAW CAPTURE (Knox chat)  ·  IMMUTABLE once pasted

⬇️⬇️⬇️  PASTE THE KNOX CHAT BELOW (verbatim, do not summarize)  ⬇️⬇️⬇️

knox being somewhat confused on what we're doing at first = This actually changes my confidence quite a bit.

From these examples, I don't think you're building a collection of Markdown documents anymore.

You're accidentally (or intentionally) building something much closer to a typed architectural language.

Every artifact belongs to a plane and has a very specific role.

P0   Doctrine
     ↓

P1   Domain Contracts
     (truth ownership)

     ↓

P4   Projections
     (derived read models)

     ↓

P5   Surfaces
     (persona workspaces)

     ↓

Actions route back into
P1 owning domains.

Then there are orthogonal document families:

reviews
audits
handoffs
disposition ledgers
pressure tests
watch items
readiness notes
open review queue
recovered design notes

Those are meta-architecture, not runtime architecture.

The interesting thing is that your documents are starting to resemble different types.

Not just filenames.

For example...

Domain contract
Owns truth

Owns fields

Writes

Invariants

Forbidden

Open questions

Those are almost schema-like.

Projection
Composes

Derived fields

Freshness

Lineage

Consumes

Owns nothing

Completely different semantic type.

Surface
Persona

Reads

Uses projections

Writes

Forbidden

Workflow

Metrics

Again...

Different type.

Then look at something like the C3.8 handoff.

It isn't architecture at all.

It's effectively

Finding
↓

Disposition

↓

Destination

↓

Authority

↓

Next owner

That's a workflow artifact.

That's why I think the eventual review cannot be "read every file."

It has to become something like an architectural compiler.

For every document type, the compiler should ask different questions.

For example...

Domain Contract
Does exactly one owner exist?
Does any projection own truth?
Are write verbs routed correctly?
Is every invariant enforceable?
Does another domain duplicate ownership?
Projection
Does it compose only?
Is every field derivable?
Is freshness defined?
Does lineage exist?
Does it accidentally become a domain?
Surface
Does every write route somewhere?
Are RBAC atoms defined?
Does it invent state?
Does it bypass projections?
Does it quietly own truth?
Review / Audit
Is it analysis or doctrine?
Did any conclusions already promote into contracts?
Does it leave homeless findings?
Are dispositions routed?
Does it contradict later reviews?
Handoff
Are all findings consumed?
Are any still orphaned?
Are open questions duplicated elsewhere?
Did any temporary guidance become permanent?

That is much more powerful than asking "is this a good document?"

I also noticed something else.

Your documents already carry enough metadata to make this possible.

For example:

Plane

Authority

Status

Document type

Consumes

Writes

Recovered design

Open questions

Source docs

Those aren't just headers.

They're effectively an interface.

Meaning eventually the repository could be traversed almost like a graph instead of a folder tree.

I think this is the direction I'd push if we ever do the full review.

Not:

Review 700 markdown files.

But:

Build an architectural graph of the estate.

Every artifact becomes a typed node:

doctrine
contract
projection
surface
review
audit
pressure test
handoff
registry
watch item
decision
queue

Every reference becomes an edge:

owns
composes
consumes
routes_to
extends
supersedes
cites
pressures
recovers
derives_from
feeds

Then the review becomes graph validation:

orphan nodes
duplicate truth owners
unreachable surfaces
projections with no consumers
surfaces with no projections
review findings that never promoted
contracts referenced by nothing
cycles in authority
conflicting ownership
dangling open questions
dead watch items

That's a fundamentally different problem than document review, and it aligns with how your repository is already evolving. The contracts, projections, surfaces, and analysis artifacts are increasingly behaving like a formal architecture specification rather than prose documentation.





then me  = you seem like you drifted....    love what you're saying.....  maybe we should save those thoughts haha.... becuase yes the build is highly disorganized and we need to build it right...  for what comes next... we were headed towards review of ev run 26.....    do you want to summarize what you're syaing for our taxonomy... and for possible thesis or spine.... or wherever this idea you're saying needs to be stored.... LMAO.. like the problem is .....  yes cursor is saving things... but its just addint gthem whereever , no plan really...  thats been fine for overall scattered ideas....   but now it is time to congeal everything... and make it ultra fast reeadable YES!!!   like... what would anthropic do here., tesla, amazon, etc etc etc, palantir fucks....  




then knox  =  I actually think I did drift—but in a useful way.

I wasn't really reviewing EVRUN anymore. I was reacting to what the repository has quietly become.

And I think that's worth preserving, because I don't think it's an EVRUN finding. It's a meta finding about the repository itself.

I'd almost write it as a tiny design note.

Candidate Design Note
Repository Evolution — Documents → Architectural Language

Status: observation

Authority: analysis_nonbinding

Observation

The repository is no longer behaving like a documentation repository.

It is evolving into a formal architectural language.

The primary unit is no longer "a markdown file."

The primary unit is an architectural artifact with a defined semantic role.

Examples include:

doctrine
domain contract
projection
surface
review
audit
pressure test
disposition ledger
handoff
watch item
readiness gate
open-review item
registry
design note

These are different types, not merely different filenames.

Consequence

Different artifact types require different review criteria.

A projection should never be reviewed using the same checklist as a domain contract.

Likewise, a handoff should never be reviewed like doctrine.

The repository therefore requires artifact-aware validation, not document review.

Architectural shift

Current mental model

Repository

↓

Folders

↓

Markdown files

Emerging mental model

Repository

↓

Typed architectural artifacts

↓

Relationships

↓

Architecture graph

The graph—not the folders—becomes the architecture.

New primitive

Every artifact should eventually declare enough metadata to answer:

What am I?
What do I own?
What do I consume?
What do I produce?
Who depends on me?
What authority do I have?
Who supersedes me?

Those answers become machine-traversable.

End-state

Eventually the repository should be reviewable as a graph.

Not

Read 900 markdown files.

Instead

Validate 900 architectural nodes and 8,000 relationships.

Review becomes graph validation instead of prose review.

Why this matters

Once artifacts become typed, the repository can answer questions automatically.

Examples:

orphan contracts
duplicated ownership
projections owning truth
surfaces bypassing projections
unresolved review findings
dead watch items
unused doctrine
circular authority
missing lineage
conflicting ownership
broken dependency chains

Those are architectural failures, not writing failures.

Where I think this belongs

I actually don't think this belongs in the thesis.

The thesis is answering:

What is OMNI?

This is answering:

How is OMNI itself designed and maintained?

That's Build-OS territory.

I think this becomes something like

Repository Architecture

or

Knowledge Architecture

or

Architecture Language

or

Architectural Artifact System

inside Build-OS.

But...

I do think there's a deeper thesis implication hiding underneath it.

Not the repository part.

The idea underneath.

Anthropic.

Tesla.

Amazon.

Palantir.

Stripe.

None of them scale because they have lots of documents.

They scale because their units of thought are standardized.

Tesla doesn't review "documents."

It reviews:

interfaces
requirements
manufacturing constraints
safety cases
verification plans
test results

Amazon doesn't review prose.

It reviews:

APIs
service ownership
contracts
metrics
operational reviews

Stripe doesn't review pages.

It reviews:

primitives
contracts
invariants
APIs

Palantir is probably the closest analogue.

Not because of Ontology—but because almost everything eventually becomes a typed object with explicit relationships.

I think OMNI goes one step further.

Not merely typed runtime objects.

Typed design objects.

Meaning the design process itself has first-class primitives.

Doctrine.

Contract.

Projection.

Pressure test.

Watch item.

Decision.

Review.

Disposition.

Evidence.

Open question.

Those aren't just notes anymore.

They're part of the engineering language.

And that's the part that got me excited.

Because I don't think this is just "organizing docs."

I think this is the beginning of OMNI's design operating system.

The repository stops being an archive and becomes an executable knowledge system. A fresh contributor—or eventually an AI agent—should be able to navigate it by artifact type, authority, ownership, and relationships instead of by folders and filenames. That's the same shift your runtime architecture made years ago: from files to domains, from domains to contracts, from contracts to governed interactions. I think the design repository is about to undergo the same evolution.

then knox said this = I read it.

And I think the most important part isn't Knox's observations.

It's your response after it.

Specifically this:

"we need to ultra solidify it though... before we go into contracts etc..... we need to solidify the concepts hard, with pressure testing... trifecta review etc... and built into the right boots or templates..."

I think that's the real insight.

I think we've been saying "taxonomy"...

...when what we're actually mean is something closer to a design grammar.

Taxonomy organizes.

Grammar constrains.

Big difference.

Take your runtime.

We didn't invent D5 because we wanted another document.

We invented D5 because reality forced a distinction.

Likewise...

A projection isn't called a projection because we liked the name.

It's a projection because it obeys different laws than a domain.

That's grammar.

I think that's where this is heading.

Instead of asking

"what folders do we need?"

we ask

"what architectural artifact types exist?"

Those are different questions.

This is where I think Anthropic/Tesla/Amazon would differ.

They would never begin with folders.

They'd begin with primitives.

For example...

Suppose someone wants to add a new file.

Today...

they make

foo.md

Tomorrow...

they should first answer

What kind of architectural object is this?

If the answer is

Domain Contract

then there is exactly one template.

Exactly one review.

Exactly one authority.

Exactly one lifecycle.

Exactly one owner.

Exactly one place it belongs.

If it's

Pressure Test

completely different template.

Different consumers.

Different outputs.

Different promotion path.

Different authority.

That's not organization.

That's language.

Here's the subtle thing I don't think we've named yet.

I don't think artifact types are primarily for humans.

They're for future reasoning.

Imagine asking:

"Find every unresolved ownership question."

The repository shouldn't grep text.

It should know

artifact.type = contract

artifact.open_questions[]

artifact.status

Or

"Find every analysis that never promoted."

analysis_nonbinding

↓

never referenced by disposition ledger

↓

report

Or

"Which projections have no consuming surface?"

That should be graph traversal.

Not reading.

Which leads me to the thing I think is actually missing.

Not taxonomy.

Not folders.

A constitution of artifact types.

Meaning...

Before C5 taxonomy...

I almost think OMNI needs to answer:

What kinds of architectural thoughts are allowed to exist?

That sounds abstract.

But I think it's foundational.

For every artifact type...

Why does it exist?
What question does it answer?
What authority can it carry?
What is forbidden?
What promotes it?
What consumes it?
What can it never become?

That's not a file template.

That's a constitutional definition.

Then...

Templates...

Boot prompts...

Review checklists...

Cursor...

AI agents...

Read graphs...

Everything derives from that.

Which brings us back to EVRUN.

Ironically, I think this is exactly the same move we've been making in the runtime.

We stopped saying:

"Let's make another table."

and started asking:

"What object actually exists in reality?"

I think Build OS is approaching the same transition.

Stop asking:

"What markdown file should this be?"

Start asking:

"What architectural artifact actually exists?"

The file becomes an implementation.

The artifact is the ontology.

And I think that's the seed worth carrying forward.

Not "repository organization."

Not "taxonomy."

Not even "typed documents."

The deeper idea is:

Build OS should have an ontology of architectural artifacts, just as OMNI has an ontology of runtime objects.

That feels like a constitutional-level idea for Build OS, and it fits exactly with your instinct that this needs to be solidified before the repository taxonomy, templates, contracts, and boot processes are finalized.



&nbsp;



⬆️⬆️⬆️  END RAW CAPTURE  ⬆️⬆️⬆️

---

## §2 — Operator framing (why this was preserved)

- **Nick (2026-07-10):** the new Knox agent drifted into something useful for **Build OS and taxonomy / file types**; preserve the chat for later / the next agent / future-us. It should be a **reference for the spine, thesis, and taxonomy work**, and be **mentioned in the write-plan for the spine / thesis / taxonomy** so we can "start to get a handle on architecture organization." (Optional Nick refinement note below.)

⬇️  (optional) Nick gut-note / what specifically to keep  ⬇️

like... it's possible this is already being implemeneted in certain ways... in our documents.. we need to ultra solidify it though...  before we go into contracts etc.....   we need to solidif  the concepts hard, with pressure testing...  trifect review etc...  and built into the right boots or templates or whaetever....   etc... also.. like... its pretty much just "naming folders approrpirately" but when you think about it like knox arrived at, its actually just that small twist in our frame of thinking on it

&nbsp;



---

## §3 — Consumed by / must-be-referenced-from (routing, not promotion)

When the relevant gate runs, it MUST load this capture (via the `FWREG-008` retrieval contract), evaluate on the merits, and route binding items to their homes:
- **C5 `repo_taxonomy_derivation_plan.md`** (named future gate in the HOME controlling plan — NOT yet authored) — the primary consumer for repo/file-type taxonomy + architecture organization.
- **v4_C4 `spine_authoring_plan.md` + `thesis_synthesis_plan.md`** — taxonomy/file-type awareness during authoring (so the spine/thesis don't presuppose a file/type organization this capture may change).
- **Build OS:** `doctrine/09_omni_build_os_layer_model.md` · `doctrine/10_omni_build_os_rollout_sequence.md` · `doctrine/11_build_entry_gate_v0.md`.
- **Architecture artifact roles:** `doctrine/00_architecture_artifact_index.md` (what artifact holds what; forbidden-in-each) + `doctrine/00_document_governance_and_taxonomy_2026-05-19.md` (document taxonomy/passport) — the existing homes any file-type/taxonomy proposal must reconcile against (don't fork them).

---

## §4 — Owed governance + disposition

- **Disposition:** `analysis_nonbinding` · propose-only. Promotes nothing; no doctrine/Build-OS/contract edits made by creating this scaffold.
- **Done this pass:** (1) `FWREG-008` row added to `doctrine/future_work_registry.md` (retrieval-surfaced for repo-taxonomy / build-OS work); (2) **wired into the HOME controlling plan** `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` future-gate list — a MANDATORY-INPUT pointer on the **C5 `repo_taxonomy_derivation_plan`** line (the taxonomy "whole thing" that precedes contracts) + awareness notes on the C4 spine-authoring + thesis-synthesis lines. (The registry alone would get missed; the controlling-plan reference is the durable one.)
- **Owed (light; flagged, not executed):** catalog row in `doctrine/01_master_corpus_catalog.md` + read-graph note in `doctrine/04_manifest_read_graph.md` if this graduates from a raw capture to a routed input. Do on promotion / when the C5 taxonomy plan opens (mirrors the propose-only capture posture).
- **Next:** Nick pastes the chat into §1 → (later) the C5 taxonomy gate / next agent consumes it, deduping any proposal against `00_architecture_artifact_index` + `00_document_governance_and_taxonomy` before minting new file-types/taxonomy (naming discipline: name the physics, don't fork the ontology).

---

## §5 — Change log
- `2026-07-10` — scaffold created (Opus, operator-directed brief detour): space reserved to preserve a Knox chat that drifted into Build-OS / taxonomy / file-type / architecture-organization ideas. Passport set (`analysis_nonbinding`, propose-only). Paste block (§1) awaiting the raw chat. `FWREG-008` registered. Consumed-by pointers set (C5 repo-taxonomy plan + spine/thesis authoring + Build OS + artifact index). Catalog/read-graph rows flagged owed-on-promotion.

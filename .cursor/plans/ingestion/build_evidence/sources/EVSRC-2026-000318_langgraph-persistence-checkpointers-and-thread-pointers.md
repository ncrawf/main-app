# EVSRC-2026-000318 — LangGraph: persistence, checkpointers and the `thread_id` pointer

Document type: `evidence_source_packet` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing.
Status: `captured · primary_source_read_directly · source_local_only`
Domain(s): `architecture_governance` · `build_operations` · `agent_execution`
Lifecycle role: **source-local** preservation and interpretation of one external source. **Cross-source synthesis is NOT here** — it lives in the run `EVRUN-2026-000124` concept registry (router §Cardinality: *one Source Packet per source*).
Source-of-truth relationship: the vendor documentation is the authority for what the runtime does; **OMNI owns its own authority and truth model.** Informs; does not bind.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

| Field | Value |
|---|---|
| `source_system` | LangChain / LangGraph documentation |
| Source URL | <https://langchain-ai.github.io/langgraph/concepts/persistence/> |
| `captured_at` / accessed | 2026-08-08, read directly |
| `technique` | durable checkpointed state addressed by a pointer, not copied into the caller |
| `build_os_target` | `06` `D0CKPT-GRD-007`; the `AGENTS.md` Boot-Surface Rule |
| Consuming run | `EVRUN-2026-000124` |

---

## §1 — Mechanism, in the source's own terms

"Persistence lets LangGraph applications keep useful information beyond a single graph run. It matters when an agent needs to **continue a conversation, resume after an interruption, recover from a failure**, or remember information across interactions."

Two complementary systems: **checkpointers** persist "a thread's graph state as checkpoints" for short-term, thread-scoped memory — "conversation continuity, human-in-the-loop workflows, time travel, and fault tolerance"; **stores** persist application-defined data across threads. State is addressed by passing a **`thread_id` in the graph config**: the caller carries an identifier while the durable state lives in the checkpointer.

Operational warnings on the same page: `MemorySaver`/`InMemorySaver` hold checkpoints in RAM and **lose everything on restart**, so production needs a persistent checkpointer; checkpoints **grow unboundedly** over long runs and need pruning or a retention policy; and **each subgraph manages its own checkpoint namespace**, so "when a subgraph updates state, the parent graph may not see the changes immediately."

## §2 — Source-local interpretation

The transferable shape is **pointer-plus-durable-store**: the entry configuration holds an identifier, and authoritative state is read from the durable record rather than reconstructed from conversation or copied into the invocation. The subgraph-namespace warning is a real structural analogue of a lane's state not being automatically visible as parent truth.

## §3 — Transfer limits (bounded to what this page supports)

- **LangGraph is an execution runtime.** It owns no authority, consent, care, clinical, commerce or truth model, and its graph is **control flow**, not an ontology of who may commit what. A checkpoint mechanism must never acquire architectural authority.
- **Do NOT turn an OMNI planning surface into a generic workflow graph.** Canonical truth stays with owning domains.
- **This authorises no runtime construction.** `FWREG-010` (Agent Runtime & Harness) remains **OPEN with build deferred**; nothing here changes that.
- **Not captured:** store/subgraph APIs beyond the concepts above, specific checkpointer backends as a recommendation, LangChain the framework generally, or any vendor comparison.

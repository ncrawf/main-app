# Outward-OMNI / Agentic-Interoperability Pressure Test (2026-06-03)

Document type: `audit_or_analysis` (Phase 1 of `outward-omni_posture_and_thesis_v3` plan; forcing analysis for the enterprise-posture decision)
Authority: `analysis_nonbinding`. **Does NOT ratify anything.** Produces the determination + recommendation; ratification is Phase 2 (Nick + Knox), pending.
Status: `complete — awaiting Phase 2 ratification`
Domain(s): ai_substrate, federation, rbac, identity, cns_orchestration, build_os
Method: verbatim REREAD (not first-pass digest) of the load-bearing clusters via 3 parallel explore agents, mapped to 10 questions, grounded against `contracts/federation_contract.md` + thesis §6.7/§7.8/§12.2/§12.8. Source anchors preserved per video.
Sources reread: v04, v07, v08, v17, v20, v21, v22, v25, v28, v29, v35, v37, v38, v41, v45 (+ v39 trust-boundary, high-priority).

---

## 0. Headline verdict

The reframe — **OMNI = the governed handshake layer for care; OMNI Direct = one rail; owned care co-primary; point outward under governance** — **SURVIVES and is STRENGTHENED.** The corpus is emphatic that the agentic world makes a governed boundary *more* necessary, not less. **But the reread sharpens it in five ways and surfaces one real tension that must shape v3.** It is NOT a thin API gateway, NOT an open mesh, and NOT free.

## 1. The five sharpenings (these change v3, not just confirm it)

1. **The "handshake layer" is a STACK, not one wire, and transport ≠ authority.** Peer rail (A2A / agent cards — v07), capability rail (MCP/API — v08/v28), orchestration (CNS — v28 runner / v45), and context envelopes are distinct layers. HTTP/JSON-RPC/MCP give routing, logging, discovery — *not* consent, purpose-of-use, or clinical authority (v07 *"the magic is in the data format… it's just plain old HTTP"*; v08 *"MCP and APIs are not adversaries, they're layers"*). **OMNI's value is the care-governance semantics layered ON TOP of open protocols.**

2. **Owned orchestration/control plane must come BEFORE outward exposure** — else you build the exact fortress the reframe rejects. v45: without orchestration *"everything becomes isolated… point-to-point."* v28: outward MCP without an inward runner/guardrails = *"delete your production database for debugging."* This **vindicates** the "architect-outward-now / expose-when-demand" guardrail: inward control plane first, selective outward rails second.

3. **Trust is RELOCATED, not eliminated (the v39 nuance — Nick was right).** Every outward rail (MCP gateway, vendor model, partner API, encrypted tunnel) is a **new trust concentrator.** *"A VPN is essentially a transfer of trust… a definite maybe… depends on who you're transferring your trust to."* Metadata leaks even when payload is encrypted (*"source/destination… have to be in the clear, otherwise we wouldn't know how to route"*). v22 confirms in-band: PHI/PII in agent traces exposes patient data to *"every single person who can see the things passing through that LLM."* **"Governed handshake" without explicit trust-transfer semantics (who logs, who can be compelled, who monetizes metadata) + metadata-not-just-payload governance is marketing.** → new guardrail (below).

4. **Outward = controlled broker, default-deny, low-agency, human-gated for consequential acts — NOT an open mesh.** v37 #7 (insecure interagent comms), #8 (cascading failures faster than humans intervene), #10 (rogue/colluding agents); v20 (rogue agent inherits backend keys at the MCP last mile); v25/v29 (*"act with us, not instead of us"*); v38 (CIBA/JIT works but doesn't scale to high volume). Agent access is **a grant, not a role** — registered identity + signed scoped capability contract + short-lived intent-bound credentials + deterministic kill switch.

5. **The "agentic last mile" is the canonical failure OMNI must own.** v20/v41/v38: authority dies at the API-key/MCP boundary unless a vault/policy-enforcement-point re-binds *user + agent + intent + delegation* and issues per-action credentials. v41: *"for this action, at this session, is it authorized?"* This is precisely OMNI's commit-boundary discipline extended to non-human actors.

## 2. The one real tension (flag for Nick + Knox)

**"Governed handshake layer" must not be read as "thin."** v04 (connected access + knowledge layer + precision retrieval + runtime governance at *retrieval AND response* time) and v17/v22 (full AgentOps: scheduler/memory/tools/identity/observability/guardrails + eval-CI + kill switches) describe **deep** infrastructure. *"Getting the right context is an infrastructure problem"* spanning the whole data estate. **But** that same control-plane/AgentOps space is a flooded commodity market (v22: ServiceNow/Microsoft/Google/startups) — so building generic control-plane is the `D0THES-GRD-028` commodity trap. **Resolution:** OMNI builds the **care-governance semantics deep** (consent, clinical authority, purpose-of-use, operator boundary, longitudinal coherence) and **consumes commodity orchestration/CP/model plumbing** behind its governed boundary. The moat is the care-governance, not the plumbing.

## 3. The 10 pressure-test questions — answered

1. **OMNI Direct posture** → **one first-party rail among many** (UI / brand app / partner portal / provider workspace / patient's external assistant / API client / MCP server / voice agent). CONFIRMED (v07/v28/v45 multi-rail; orchestration binds, no single rail is center). Durable claim: *whatever surface or agent rail an actor uses, OMNI preserves identity, consent, authority, context, ownership, proof, and commit boundaries underneath.*
2. **Federation expansion** → YES, real enterprise gap. Today `federation_contract.md` owns human/operator topology + grants + permeability + jurisdiction — but has **no non-human/agent actor, no delegation chain, no agent/MCP boundary.** Federation must expand from "operator/tenant topology" to "boundary/permeability topology for human + operator + **non-human/agent** actors + **delegated authority** + **tool/context exchange.**"
3. **Non-human identity model** → register agent + unique instance ID + represented-principal + delegation chain; **never user-impersonation** (v41 *"I'm just going to inherit the identity of the user that invoked me"* = the anti-pattern). Distinct from the existing `device`/`robot` subtypes (§12.2). Lands: Identity + RBAC + Federation.
4. **Inbound external-agent access** → **controlled broker**: registration + risk quantification + signed scoped capability contract + default-deny + no shared backend keys + supply-chain vetting of MCP servers (v37 #4) + treat inbound agent/content as hostile-by-default (v21 indirect injection). Net-new boundary surface OMNI does not have today.
5. **Outbound OMNI-agent tool invocation** → two modes (MCP/API for tools, A2A for partner agents), under capability envelope + JIT short-lived intent-bound credentials (v38) + CIBA/human gate for high-impact (clinical/financial/PHI).
6. **Context-packet exchange protocol** → today `context_packet` is an internal CNS read-model; it must become a **typed, policy-gated, provenance-linked exchange object**: role/time/policy-bounded (v04 precision retrieval), integrity-protected across hops (hash-chain — v35 comment), **header/payload split with metadata governance + redaction-before-trace** (v39 + v22), carrying a **trust-transfer record** (custodian/retention/compulsion). Big new contract.
7. **Capability / MCP / API gateway** → OMNI **exposes** governed capability servers (MCP wrapping owned domain write-APIs) and **consumes** partner ones; runtime discovery must be **policy-filtered, scoped, versioned** (NOT raw `tools/list`). Split (v22): **Federation = boundary topology, CNS = execution control plane, MCP/capabilities = data plane.** Lands: AI #12 + P3 capability + Build OS.
8. **Consent / revocation / audit** → agentic-consent = **delegated-authority envelope** (who delegated / what actions / scope / lifetime / purpose / revocation / JIT-escalation; per-transaction; transparent; revocable — v25/v29); audit chain **human → non-human-identity → action → response** (v41); deterministic policy + kill switch (v22); pre-action decision receipt (v20). Lands: RBAC + Federation + AI #12.
9. **Cross-federation handshake** → **signed capability contracts** between operators/federations (NOT OAuth-SSO reuse, NOT agent-cards-alone — v37 #7); existing permeability admission COMPOSES with agent identity + delegation + capability contract; **topology choice per sensitivity** (centralized fast path vs compartmentalized high-risk — v39 VPN-vs-Tor). Internet-scale agent identity is **unsolved** (v41 comment) → OMNI governs within its boundary + bilateral contracts, not global trust.
10. **Enterprise rollout + Build OS** → architect the boundary as a **first-class plane now** (cheap now, catastrophic to retrofit — the crypto-agility lesson), expose **thin** for the wedge, grow with demand (full agent/federation mesh = 2028-2032+). Owned orchestration/control plane **before** outward exposure. Build OS: agent lanes + eval-CI + kill switches + cost/loop controls + **trust-model-per-rail proof** (v39: document exactly what each rail encrypts vs only routes; paid≠safe; custom-CA/TLS-inspection breaks e2e).

## 4. Enterprise-build impact (concrete net-new, grounded vs current contracts)

| Net-new capability | Why (anchor) | Lands in |
|---|---|---|
| Non-human/agent actor + delegation chain | v41 NHI 45-90:1; impersonation anti-pattern | Identity + RBAC + Federation |
| Delegated-authority / agentic-consent grant object | v25/v29 living contract; v38 JIT/CIBA | RBAC + Federation |
| Governed inbound agent/MCP boundary (controlled broker) | v20 rogue-at-last-mile; v37 #4/#7 | Federation + AI #12 + new boundary surface |
| Outbound tool/agent invocation under envelope | v28/v38 remote MCP + JIT creds | AI #12 + CNS |
| Context-packet AS exchange protocol (+ metadata/trust-transfer governance) | v04 + v35 + v39 + v22 | new context-packet contract (P4) |
| Capability registry + policy-filtered discovery gateway | v08/v22 | AI #12 + P3 + Build OS |
| Agentic-Runtime observability/control surfaces | v17/v22 | Surface §8.G (already scaffolded) |

## 5. PROPOSED enterprise posture + v3 decision (Phase 2 — AWAITING Nick + Knox ratification)

**Proposed posture (verbatim candidate):**
> OMNI is the **governed handshake layer for care** — it lets identity, consent, authority, context, proof, and action move safely across any surface, operator, agent, or tool, without flattening ownership. Center of gravity = **Boundary + Context + Authority + Commit Control.** First-party care operations (owned brands/specialty lines) are **co-primary** — the demand engine, dogfood, and trust proof — not demoted to proof points. OMNI Direct is one first-party rail among many. The moat is the **care-governance semantics**, not commodity orchestration/model/protocol plumbing, which OMNI consumes behind its governed boundary.

**Proposed v3 decision:** a thesis **v3 re-grounding** is warranted (structural: new Boundary/Interop plane promoted to first-class, center-of-gravity shift, OMNI Direct demotion, Federation expansion to non-human actors, AI axis absorbed) — **preserving v2's durable core verbatim with an explicit diff.** NOT injected points; NOT a blank-page rewrite.

**Proposed guardrails (the five from the plan + one new from this reread):**
1. Co-primary, not substrate-only (owned care leads GTM).
2. Designed bounded capability surface (extends `D0THES-GRD-003`).
3. Architect-outward-now / expose-when-demand (vindicated by §1.2).
4. Preserve-and-diff (anti recency-erasure, `D0THES-GRD-022/023`).
5. Stabilize after v3 (no reflexive v4).
6. **NEW — Trust-transfer & metadata governance (v39-derived):** every outward rail must name its trust-transfer (who logs / who can be compelled / who monetizes metadata) and govern **metadata, not just payload**; "encrypted therefore safe" is rejected; topology (centralized vs compartmentalized) is chosen per sensitivity.

## 6. What this does NOT settle (honest)
- The exact wire schema for the context-packet exchange protocol (Phase 3+ / contract pass).
- Whether OMNI runs its own control plane vs consumes one (recommendation: consume plumbing, own care-governance — but a real build decision).
- Internet-scale agent identity (industry-unsolved; OMNI scopes to its boundary + bilateral contracts).
- Full lossless extraction of all 47 sources (Phase 3 — this test only reread the ~16 load-bearing clusters).

## 7. Source anchors
Per-video verbatim anchors preserved in the 3 explore-agent returns (this session). Full lossless source-anchored ledger = Phase 3. Evidence corpus: `.cursor/plans/ingestion/outside_learning/sources/2026-spring_ai_substrate/`.

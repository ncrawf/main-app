# v4 — C3.8: Enterprise AI / Operating-System Convergence Pass — PLAN / CHARTER (review before execution)

Document type: `plan_or_roadmap` (a bounded pre-spine pressure-lane charter; NOT thesis prose, NOT the pass execution, NO contract edits) · Authority: `analysis_nonbinding` (`GRD-036`) — a plan; binds nothing, promotes nothing.
Status: **`accepted` 2026-07-02 (Nick + Knox, Rev 2).** Charter conceptually locked. On acceptance the boot state repoints to `NEXT = C3.8/G1a`; **source ingestion still waits for G1a source-shortlist approval.** No C4 edits, no thesis prose, no contract edits.
Rev 1 (2026-07-02, per Knox review): added §0.5 strategic-posture + capital-allocator legibility lens; plain-language answer rule (§2); highest-risk-axis marker (§3 axis 2); G1 split into **G1a** (shortlist + axis-coverage plan → STOP for approval) / **G1b** (reality map after approved ingestion, current-sources); current-source discipline (§10).
Rev 2 (2026-07-02, Nick accept): resolved the §12↔Stop boot-timing inconsistency — **boot repoint happens on charter acceptance; ingestion waits for G1a shortlist approval** (Stop section patched to match §12).
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` → inserts as **C3.8**, a gated pre-spine lane between the accepted C4 runway and v4 spine draft 0. Legitimate under `GRD-036` (the C2 source base is explicitly *living* as new captures land) — a **gated source-base update + doctrine-pressure pass before C4**, not a rethink.
Owed **on charter acceptance** (not now): catalog row + read-graph eval (New-Artifact §5); boot-state repoint (`NEXT = spine` → `NEXT = C3.8 → spine`); execution-owner decision. Standing flag: git identity unset.

---

## §0 Purpose + the mission (the "same room as the big boys" test)
The world above OMNI matured fast: Palantir, Anthropic, OpenAI, Microsoft, Google DeepMind, IBM, and the canonical papers of the last 6–12 months are converging on what an **enterprise AI operating system** actually is. C3.8 asks — **before the v4 spine freezes** — whether OMNI's governed care/business **execution substrate** both **survives** that pressure and is **legible** as a peer within it.

- **The test (Nick's framing):** *Could OMNI sit in the room with Palantir / Google / OpenAI / Anthropic / Microsoft / serious capital allocators and explain itself as a serious governed execution substrate — with clear answers on data, ontology, memory, authority, agents, security, evaluation, and product/platform ownership?*
- **This IS:** a gated convergence / doctrine-pressure pass (concept-convergence + doctrine-hole-finding + enterprise-legibility), in the spirit of C3.5 (stress-test, not worship). Palantir/OpenAI/Anthropic/MSFT/Google/IBM are **pressure sources, not gods, not the goal.**
- **This IS NOT:** "become Palantir for medicine" · a feature hunt · a marketing deck · a 1,000-row scenario mega-batch · a rethink of OMNI · spine/thesis prose · contract/C5 edits.

## §0.5 Strategic posture tested (architecture-legibility, NOT GTM)
C3.8 must make OMNI legible across four enterprise postures — as **architecture legibility**, not go-to-market prose:
1. **interface** with major enterprise-AI platforms; 2. **compete** as a domain-native governed execution substrate; 3. **partner / integrate** without becoming middleware; 4. be **legible to acquirers / capital allocators** as a serious platform, not an app.

**Capital-allocator / enterprise-buyer legibility lens (required lens, NOT a business plan):** surface the **architecture-determined** answers to — what is **defensible**? what is **portable**? what does the **customer own** vs **OMNI own**? what is the **moat / what gets better with scale**? what are the **switching costs**? **platform-vs-service** posture? **data-rights** posture? These are properties the *architecture* makes true; C3.8 names them, it does not write GTM.

## §1 Core question + non-binding hypothesis
**Core question:** Does OMNI's governed care/business execution substrate survive enterprise-scale **ontology, data/memory/model ownership, policy/action governance, agent runtime/tool execution, evaluation/simulation/deployment governance, and security/zero-trust** pressure — and can we *name and explain* it in enterprise-AI-OS language?

**Hypothesis (expected, NON-binding — not a cap; findings are routed, not pre-shrunk):** much validates existing doctrine (the estate already holds agent-runtime / MCP / memory-routing / autonomy / eval / world-model / decision-governance material — see §6.4). The genuine, possibly-large deltas most likely concentrate in: **(a) data / ontology / memory / model ownership at multi-tenant *enterprise* scale** (Federation was pressured for *care operators*, not "customer owns the ontology/data/models, vendor owns the platform"); **(b) the ontology / semantic layer as a first-class product**; **(c) enterprise policy-engine / action governance at company scale**; **(d) classic infra-security / zero-trust** (already `covered-thin`, `REV-181` owes a source); **(e) legibility/naming gaps** (OMNI has the mechanism but hasn't *named* it enterprise-legibly). If a finding is spine-level, we take it seriously and patch the runway + source base honestly — no squeezing.

## §2 Common-sense enterprise questions (answer these FIRST — before jargon, before sources)
If C3.8 cannot answer these cleanly for OMNI, it failed no matter how sophisticated the source list looks:
1. Who owns the **data**? 2. Who owns the **ontology / semantic model**? 3. Who owns **memory**? 4. Who owns the **model(s)**? 5. Who owns **execution**? 6. Who can **authorize an action**? 7. Who can **revoke access**? 8. Who sees the **audit log**? 9. What **leaves the tenant**? 10. What **trains future models**? 11. What happens when an **agent uses a tool**? 12. What happens when a **tool is malicious / poisoned**? 13. What happens when **customer policy conflicts with OMNI policy**? 14. What is the **vendor (OMNI) allowed to observe**? 15. What can the **customer customize**? 16. What is **portable if the customer leaves** (data / ontology / memory / workflows / evals)?

**Answer rule (the same-room test):** each question is answered in **plain language FIRST** — what a Palantir / OpenAI / hedge-fund person would understand — THEN mapped to OMNI doctrine. **If an answer only works in internal OMNI jargon, it FAILS the same-room test.**

## §3 The six pressure axes (the internal-architecture inspection set — everything maps back to these or is cut)
1. **Ontology / semantic operating layer** — who owns the semantic model by which the organization understands itself? Is OMNI's = contracts + System Map + `source_authority_map` + projections + operator/federation model, or is there a missing composition layer?
2. **Data / memory / model ownership at tenant scale** — ★ **HIGHEST-RISK AXIS** — customer-owned data / ontology / memory / (maybe) models while the platform stays OMNI. (The genuinely-new-vs-care front: hospital/oncology taught us *operating truth*; this axis is where enterprise AI is most likely to expose an *ownership posture* OMNI has not pressure-tested — customer owns data/ontology/memory, may bring/own models, vendor owns platform, policy controls what may move/train/persist/execute.)
3. **Enterprise policy / action governance** — does RBAC + authority gates + REV-184 + Federation scale into ABAC/OPA-style declarative policy, cross-org delegation, action authorization, break-glass, and approval at company scale?
4. **Agent runtime / tool ecosystem / external capability** — does P35 + Build-OS + CNS handle MCP/tool runtimes, tool permissioning/poisoning, provenance, execution audit, and cross-tool/cross-org command authority?
5. **Eval / simulation / assurance / deployment governance** — does the Build-OS harness reach enterprise-grade (regression-test models, tools, policies, workflows, permissions, customer-specific configs at deployment scale)?
6. **Security / zero-trust / data boundary / compliance** — does OMNI's security/assurance lane survive enterprise deployment expectations? (Finally pressures the `covered-thin` axis instead of leaving it an appendix.)

## §4 Pre-registered OMNI invariants (write these BEFORE sources, so no vendor becomes the frame)
G3 breakers test *against these named targets*; G4 states for each: **held / bent / broke.**
- governed execution (Sense→Decide→Act→Prove/Learn + authority gates) · domain-owned truth (one owner/authority/audit per fact) · candidate ≠ commit · source authority (field-level, positional; `source_authority_map`) · ownership boundaries · CNS orchestrates, does not own · federation-as-boundary-policy · care + business as ONE execution substrate · projection ≠ authority · REV-184 governed-resolution lifecycle (+ its 7 lines: world-model honesty, `trust_horizon`, blast-radius authority, etc.) · P35 external-capability / command-authority boundary.

## §5 Universal-vs-procurement filter (the anti-bloat lens)
For every enterprise idea: **is this a universal architecture truth, or an artifact of how governments / Fortune-100 *buy* software?** Universal truths pressure the spine; procurement artifacts route to `reject / vendor-specific`. This is the specific discipline that lets us take Palantir seriously **without** becoming Palantir-for-hospitals.

## §6 The seven required outputs
1. **Common-sense enterprise answers** (§2) — front and center, plain-language, for OMNI.
2. **Six-axis pressure findings** (§3) — each finding tagged to an axis.
3. **Enterprise Translation / Equivalence Map** (the "same room" artifact) — maps enterprise-AI-OS language ↔ OMNI language and marks where OMNI is stronger / equivalent / weaker / just-different. **Guard: OMNI's own frame stays PRIMARY — translate to explain OMNI, do NOT relexicalize OMNI into vendor-speak.** Seed scaffold (OMNI analogues grounded; the "already-covered? / gap? / how-we-explain-it" columns are the arc's work):

   | Enterprise-AI-OS language | OMNI analogue (grounded) | Already covered? | Gap? | How we explain it |
   |---|---|---|---|---|
   | ontology / semantic layer | domain-owned truth + 15 contracts + `source_authority_map` + projections | (G2) | (G2) | (G2) |
   | operating system | governed care/business **execution substrate** | (G2) | (G2) | (G2) |
   | customer data / ownership | Federation boundary-policy + source authority + tenant/identity boundaries | (G2) | (G2) | (G2) |
   | enterprise memory | Clinical Memory + Knowledge Reservoirs + CNS context-assembly | (G2) | (G2) | (G2) |
   | agent runtime | CNS + P35 + REV-184 + Build-OS harness | (G2) | (G2) | (G2) |
   | policy engine | RBAC + authority gates + REV-184 + Federation | (G2) | (G2) | (G2) |
   | audit / provenance | D7 + `trace_lineage` + Evidence Plane | (G2) | (G2) | (G2) |
   | digital twin | `world_model` (REV-184) + source-backed projections + operator graph | (G2) | (G2) | (G2) |
   | eval / simulation | Build-OS harness + pressure-test seed corpora (C3.5/6/7) | (G2) | (G2) | (G2) |
   | tool ecosystem / MCP | P35 external-capability (8 command-authority modes) + connector governance | (G2) | (G2) | (G2) |

4. **Already-covered map** — explicitly mark what EVRUN-000001/000002 + C3.1 + REV-184 + C3.5–C3.7 already cover, so the pass does NOT rediscover canon. (Grounded seed — heavily covered already: agent anatomy/runtime, MCP/tool ecosystem, context engineering, memory-mode routing, autonomy-ladder-keyed-to-blast-radius, verifiability→autonomy, serving/runtime economics, world-model, `trust_horizon`, evals, planning/bounded-autonomy; REV-184 multi-actor governed resolution; C3.6 `source_authority_map`/`knowledge_partition`; C3.5 P35/`simulation_harness`/`degraded_mode`; C3.7 economically-blind firewall; Federation topology + boundary-policy; D7/trace_lineage/Evidence-Plane audit.)
5. **Convergence matrix** — per external concept: what is it? · where did it show up (which sources independently)? · OMNI analogue · already handled? · does it pressure v4? · disposition. (Convergences across independent players = the gold.)
6. **Doctrine breakers** — 40–80 sharp adversarial questions (NOT a scenario factory), e.g.: *If the customer owns the ontology but OMNI owns the platform, who owns truth? · If a tenant wants its own model, does OMNI's authority stack still hold? · If an agent acts through MCP, where is command authority? · If a tool is poisoned, which OMNI layer blocks it? · Does Federation handle enterprise (not just care-operator) ownership? · Does `source_authority_map` scale to enterprise semantic layers? · Does REV-184 handle multi-agent enterprise decisioning? · If the customer leaves, what is portable — data, ontology, memory, workflows, evals?* The breakers that bite get deep-traced.
7. **G4 disposition ledger** — every finding routed (the exit condition; §8/§9).

## §7 Gate structure (inventory-first; ingest only for genuine gaps)
- **G1a — Source shortlist + axis-coverage plan.** START from §2 (common-sense answers, plain-language-first), §4 (invariants), and output #4 (already-covered map) — i.e., **inventory what OMNI + the estate already know FIRST.** Then, per §3 axis: what are the enterprise players converging on, and what is genuinely-new vs already-in-estate (so we ingest only real gaps)? Generative lens: *"If Google / Palantir / OpenAI / Anthropic were building OMNI at this stage, what would they lock first — ontology, data ownership, execution authority, agent runtime, governance/audit, security/tenant boundary, eval/simulation, product surface?"* **Output = a curated 12–18 source shortlist + an axis-coverage plan. STOP for Nick + Knox approval. NO ingestion before approval.**
- **G1b — Source / Concept Reality Map (AFTER approved ingestion).** Process the approved sources; map what the enterprise players are actually converging on (convergences across independent players = the gold). **Use CURRENT primary / high-quality public sources** — official product docs, official talks, engineering blogs, research papers, security advisories, credible analyses — because enterprise-AI posture changes fast; **do NOT rely on stale memory.**
- **G2 — Convergence Matrix + Enterprise Translation Map** (outputs #3, #5) — the core artifacts; route into `comparator_analogy_registry` + the tension register.
- **G3 — Adversarial Doctrine Breakers** (output #6) — 40–80 breakers vs the §4 invariants; deep-trace the ones that bite; apply the §5 universal-vs-procurement filter.
- **G4 — Handoff / Disposition Ledger** (output #7) — route every finding; honestly patch the C4 runway + source base per magnitude; open-review rows to `08`; then hand to the spine author.

## §8 Disposition categories (the control mechanism — routing, NOT a magnitude cap)
Every G2/G3 finding becomes exactly one of: **`validated / already-covered` · `contract-extension` · `v4-spine-delta` · `C5-implementation` · `open-review` · `reject / vendor-specific / procurement-artifact`.** (A legibility/naming gap where the mechanism exists but isn't enterprise-legibly named = a valid `v4-spine-delta`.)

## §9 Completion condition (the terminus — content-neutral)
**C3.8 ends when G4 routes EVERY finding into a §8 category, with no unrouted findings/tensions (`GRD-043`).** It ends because the truth is fully *processed*, NOT because the delta was small. If the delta is large, we patch the runway + source base honestly and take the time (correctness > speed). If it validates OMNI, we say so and move to the spine. No silent drift either way.

## §10 Source discipline (the unit is the invariant, not the source count)
- Start with a **curated 12–18 high-signal source shortlist** (Palantir Foundry/AIP + enterprise-AI-OS talks · Anthropic constitutional agents / MCP / context engineering · OpenAI Responses/tools/memory/evals · Microsoft agent orchestration · Google DeepMind world-models/planning · IBM enterprise governance · MCP-security literature · recent canonical enterprise/agent papers). **Nick + Knox approve the shortlist before ingestion.**
- **Expand only where a pressure axis (§3) remains under-evidenced** after inventory. **No arbitrary cap, no endless ingestion.** Default is minimal: if 5 sources settle an axis, that's enough; if an axis needs 10, use 10.
- **Ingest-only-for-gaps:** the estate is already rich (output #4). This is a **name / align / translate** pass first; new capture is gap-triggered, not the opening move.
- **Current-source discipline:** because enterprise-AI platform posture changes quickly, G1b uses **current** primary / high-quality public sources where possible (official docs · official talks · engineering blogs · research papers · security advisories · credible analyses), not stale memory or year-old assumptions.

## §11 Anti-drift guards (binding on the pass)
- Palantir/OpenAI/Anthropic/MSFT/Google/IBM = **pressure sources, not the frame, not the goal.** If the artifacts say "Palantir" more than they say "OMNI invariant," it's drifting.
- **OMNI's frame stays primary** — the Translation Map explains OMNI outward; it does not rewrite OMNI as an enterprise-vendor product. Care + business as one execution substrate stays the identity.
- **Not a scenario mega-batch** (concept-convergence, not 1,000 rows). **Not a rethink** (invariants pre-registered). **Not "the final 5%"** (no magnitude framing). **Not spine/thesis prose, not contract edits, not C5.**
- Everything `analysis_nonbinding` until promoted through the relevant gate (`GRD-036`).

## §12 Execution + boot-state consequence (owed ON acceptance, not now)
- **Boot repoint (on acceptance):** the current checkpoint says `NEXT = v4 spine draft 0`; on charter acceptance it repoints to `NEXT = C3.8 → then spine` (AGENTS + read-graph #15 + controlling-plan banner + a checkpoint note, per Protocol §8).
- **Execution owner (decision for Nick + Knox):** run C3.8 via a **separate execution agent** (as C3.5/3.6/3.7 were — preserves the anti-hijack discipline that kept the spine author clean), with **this grounded agent authoring the charter + seeding the already-covered / invariant / translation scaffolds** (grounded is hardest to fake), then resuming as spine author from the G4 handoff — OR run it in this thread. Charter-author's lean: **separate execution agent, grounded scaffolds seeded here.**
- **New-Artifact rows (on acceptance):** catalog row + read-graph route for this charter (+ its G-artifacts at their promotion), consistent with the C3.5/C4-runway pattern.

## Stop / authority
`analysis_nonbinding` (`GRD-036`); a charter only. **Charter ACCEPTED (Nick + Knox 2026-07-02) → boot state repoints to `NEXT = C3.8/G1a`.** Sequence: **G1a (grounded agent) produces the source shortlist + axis-coverage plan → STOP for Nick + Knox source-shortlist approval → G1b ingestion (separate agent) → G2/G3/G4 → fold into C4 → v4 spine.** **No source ingestion, no C4 edits, no thesis prose before G1a shortlist approval.** Standing flag: git identity unset — no commit attempted.

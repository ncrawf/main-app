# v4 — C3.8 / G1a: Source Shortlist + Axis-Coverage Plan + Already-Covered Map (STOP for approval)

Document type: `plan_or_roadmap` (the C3.8 Gate-1a deliverable; NOT ingestion, NOT the reality map [that's G1b], NOT prose) · Authority: `analysis_nonbinding` (`GRD-036`).
Status: **`approved` 2026-07-02 (Nick + Knox)** — with 2 Knox patches applied (core **#15** enterprise data-platform [Databricks/Snowflake]; **#9/#10** BYOM / customer-managed-model made an explicit G1b hunt; **+R4** Temporal reserve). Produced by the grounded agent per the accepted charter (`v4_C3_8_enterprise_ai_os_convergence_pass_plan.md`). **NEXT = G1b (ingestion by a SEPARATE execution agent), dispatched on Nick's explicit go.**
Owed on G1b dispatch: catalog row + read-graph note for this artifact; boot NEXT → G1b. Standing flag: git identity unset.

## §0 What G1a IS / is NOT
- **IS:** the *inventory-first* output — (1) the **already-covered map** (what the estate already holds, so we don't re-derive canon), (2) the **gap read** per axis, (3) a **curated source shortlist** aimed only at genuine gaps, (4) the **axis-coverage plan**. This is the "what should we actually ingest, and why" proposal.
- **IS NOT:** ingestion · the reality map / convergence matrix (G1b/G2) · doctrine breakers (G3) · any disposition (G4) · prose. **No source is opened until the shortlist is approved.**
- **Discipline:** unit = **enterprise invariant, not source count**. Start curated (~14 core); expand only where an axis stays under-evidenced after G1b. Ingest for gaps, not to re-confirm what's covered.

---

## §1 Already-covered map (grounded — so G1b/G2 do NOT re-derive canon)
Per axis, what the estate already holds (with anchors) and therefore the **residual gap** C3.8 should actually pressure. (EVRUN = the 42+110 video corpora; regs = registry rows; arcs = C3.5/6/7; REV-184 = governed-resolution.)

| Axis | Already covered in-estate (anchors) | Residual gap to pressure |
|---|---|---|
| **1. Ontology / semantic layer** | domain-owned truth (15 contracts) · System Map vNext · **`source_authority_map`** (C3.6: field-level positional authority over 6 planes) · projections (P4/`DEC-033`) · operator/federation model · `comparator_analogy_registry` | Is there a **named semantic/ontology composition layer** as a *first-class product* (Palantir-Foundry-Ontology sense), or is OMNI's ontology implicit across contracts + source-authority? **Likely a legibility/naming gap** more than a missing mechanism. |
| **2. Data/memory/model ownership @ tenant scale ★HIGHEST-RISK** | Federation boundary-policy (custody/visibility/authority) · source authority · identity/tenant boundaries · D7 consent/retention · Knowledge Reservoirs | **Enterprise procurement posture, largely un-pressured:** customer-owns-data/ontology/memory, **customer may bring/own models**, vendor-owns-platform, data-residency, "your data never trains our models," **portability/exit**. Federation was pressured for *care operators*, not this. |
| **3. Policy / action governance** | RBAC + authority gates · **REV-184** governed-resolution (blast-radius authority, trust_horizon) · Federation · Settings (policy config) | **Declarative enterprise policy engines** (ABAC/OPA/policy-as-code), **fine-grained cross-org authz** (Zanzibar-style), cross-org delegation + break-glass at *company* scale. |
| **4. Agent runtime / tool ecosystem / P35** | **Heavily covered:** agent anatomy (reg101/102/106), MCP/tool ecosystem (reg110/111 + connector-gov), context engineering (reg118), memory-mode routing (reg091), autonomy-ladder-keyed-to-blast-radius (reg104), verifiability→autonomy (reg51), harness=authority/containment≠authority (reg47/54), serving economics (reg173) · **P35** external_capability + 8 command-authority modes · REV-184 multi-actor resolution | **NOT the concepts** (covered) — the **MCP-specific security/governance** (tool poisoning, prompt-injection-via-tools, credential risk) + **cross-tool/cross-org command authority at enterprise scale**. Ingest for the *governance/security-of-tools* angle only. |
| **5. Eval / simulation / deployment governance** | Build-OS harness (`09/10/11`) · **`simulation_harness`** (C3.5 P39) · pressure-test seed corpora (C3.5/6/7 ≈ 1,600+ rows) · eval material (reg162/175/051/054) · eval-shapes-system (`REV-179`) | **Enterprise deployment governance:** regression-testing customer-specific configs/policies/permissions at deployment scale; eval/assurance as an enterprise-grade product surface. |
| **6. Security / zero-trust / data boundary** | **`covered-thin`** (C3.1 #10) — D7 + RBAC only; **`REV-181` OWES a commissioned classic-security source (never obtained)** | **The weakest axis by design.** Classic infra/cloud/network security, **zero-trust architecture**, software-supply-chain, enterprise deployment security. C3.8 is where we finally close `REV-181`. |

**Headline for reviewers:** axes 4 (and much of 1, 3, 5) are *substantially covered* — C3.8 should **validate + name**, not re-ingest. The genuine ingestion energy goes to **axis 2 (ownership posture)** and **axis 6 (classic/zero-trust security)**, plus the *governance/security* slices of 3 and 4.

---

## §2 Source shortlist (14 core + 3 reserve) — targets by identity/type; exact current instance pinned at G1b
> Bias to **primary sources** (official docs/specs/talks); analyses are treated as pressure, not authority. "Pin @G1b" = select the current best instance at ingestion (per the current-source discipline — enterprise posture moves fast).

| # | Source target | Type | Axis(es) | Gap it fills | Note |
|---|---|---|---|---|---|
| 1 | **Palantir Foundry — Ontology** (official docs/whitepaper) | primary | 1, 2 | ontology-as-product; is OMNI missing a named semantic layer? | stable primary |
| 2 | **Palantir AIP** (official product docs + 1 technical talk) | primary+talk | 1, 3, 4 | enterprise "operating system" framing; how ontology + agents + policy compose | pin talk @G1b |
| 3 | **Anthropic — MCP specification** (modelcontextprotocol.io) | primary | 4 | canonical tool-connection standard vs P35 | stable primary |
| 4 | **MCP security literature** (tool-poisoning / prompt-injection / credential-risk advisories + a credible analysis) | advisory/analysis | 4, 6 | the tool-governance/security gap; pressures P35+RBAC+D7+Build-OS | pin current @G1b |
| 5 | **Anthropic — enterprise data-use / zero-retention / Claude enterprise terms** | primary | 2 | "your data never trains our models" posture; tenant boundary | pin current @G1b |
| 6 | **Anthropic — context engineering + agent SDK + constitutional agents** (recent writings) | primary | 4 | recent agent-runtime governance (concept mostly covered; pin *new* since EVRUN) | pin recent @G1b |
| 7 | **OpenAI — Responses API + Agents SDK** (official docs) | primary | 4 | enterprise agent runtime / tool execution model | stable primary |
| 8 | **OpenAI — enterprise data controls (no-train) + Evals** (official) | primary | 2, 5 | data-ownership posture + eval infra as product | stable primary |
| 9 | **Microsoft — agent orchestration** (Copilot Studio / AutoGen / Agent Framework + enterprise governance) | primary+analysis | 2, 3, 4, 5 | multi-agent orchestration + enterprise governance/deployment **+ BYOM / model garden / private deployment / customer-managed-model / enterprise data boundary (G1b must check ON PURPOSE — Knox patch 2)** | pin current @G1b |
| 10 | **Google — Vertex AI / Agentspace enterprise + DeepMind world-models/planning** | primary | 2, 4, 5 | enterprise agent platform + world-model/planning (world-model partly covered via REV-184) **+ Model Garden / BYOM / private-deployment / customer-managed-model / data-boundary posture (G1b must check ON PURPOSE — Knox patch 2)** | pin current @G1b |
| 11 | **IBM watsonx.governance** (enterprise AI governance/policy) | primary | 3, 5 | procurement-grade governance/compliance framing | stable primary |
| 12 | **Open Policy Agent (OPA) / policy-as-code + fine-grained authz (Zanzibar / OpenFGA)** | primary | 3 | declarative enterprise policy engine vs RBAC+REV-184 | stable primary |
| 13 | **NIST SP 800-207 — Zero Trust Architecture** | primary | 6 | zero-trust reference; **closes part of `REV-181`** | stable primary |
| 14 | **Classic infra/cloud security + software-supply-chain** (a canonical cloud-sec reference + SLSA/OWASP) | primary | 6 | the classic-security floor `REV-181` owes; **closes `REV-181`** | pin current @G1b |
| 15 | **Enterprise data-governance / data platform** — Databricks Unity Catalog / Data Intelligence Platform **OR** Snowflake Horizon / Cortex Governance / data clean rooms | primary | 1, 2, 6 | **the grown-up customer-owned-data question, tested directly** — data platform + governance catalog + semantic/data-product posture + portability/controls (Palantir tests ontology-as-product; Anthropic/OpenAI test "your data doesn't train our models"; this tests the *customer-owned data-platform* posture) | pin current @G1b (Knox patch 1) |
| — | *Reserve (ingest only if an axis stays under-evidenced after G1b):* | | | | |
| R1 | Enterprise **semantic-layer / knowledge-graph** reference (e.g., dbt semantic layer / enterprise KG) | analysis | 1 | deepen axis 1 if the ontology gap proves real | reserve |
| R2 | Enterprise **LLM eval/observability/regression** (tracing + eval product) | primary/analysis | 5 | deepen axis 5 deployment governance | reserve |
| R3 | A credible **"enterprise AI operating system" synthesis** (serious analyst) | analysis | all | cross-axis convergence read (pressure, NOT authority) | reserve |
| R4 | **Temporal / durable workflow / enterprise orchestration** reference | primary/analysis | 4, 5 | durable execution, replay, retries, long-running workflows, audit — **only if axis 5 stays thin after G1b** | reserve (Knox) |

---

## §3 Axis-coverage plan (does every axis have enough evidence? where's the priority?)
| Axis | Sources | Estate coverage | Ingestion priority |
|---|---|---|---|
| 1 Ontology/semantic | 1, 2, 15, (R1) | medium (implicit; naming gap) | **medium** — mostly validate/name |
| 2 Data/memory/model ownership ★ | 1, 5, 8, 9, 10, 15 | **low** (care-operator only) | **HIGH** (highest-risk; #15 data-platform + #9/#10 BYOM added per Knox) |
| 3 Policy/action governance | 2, 9, 11, 12 | medium (RBAC+REV-184) | medium-high |
| 4 Agent runtime/tools/P35 | 3, 4, 6, 7, 9, 10 | **high** (EVRUN+P35+REV-184) | **low for concepts; high for tool-security/governance only** |
| 5 Eval/sim/deployment gov | 8, 9, 10, 11, (R2, R4) | medium-high (harness+corpora) | medium |
| 6 Security/zero-trust | 4, 13, 14, 15 | **low** (`covered-thin`; REV-181 owed) | **HIGH** (closes REV-181) |

**Net ingestion shape:** heavy on axes **2** and **6** (the genuine gaps) + the *governance/security* slices of 3/4; light on axis 4 concepts (already deep). This directly honors "ingest for gaps, not to re-confirm."

## §4 After approval (G1b onward — not now)
On shortlist approval: a **separate execution agent** runs **G1b** (ingest approved sources, current instances, into the Evidence Plane per `GRD-036`) → **G2** (convergence matrix + Enterprise Translation/Equivalence Map) → **G3** (40–80 doctrine breakers vs the pre-registered invariants; universal-vs-procurement filter) → **G4** (disposition ledger — route every finding into the 6 categories). Then findings fold into C4 and the grounded agent resumes as spine author.

## Stop / authority
`analysis_nonbinding` (`GRD-036`); G1a proposal only. **APPROVED (Nick + Knox 2026-07-02, with 2 patches). NEXT = G1b — ingestion by a SEPARATE execution agent, dispatched on Nick's explicit go.** No C4 edits, no spine/thesis prose. The grounded (spine-author) agent does NOT run G1b; it resumes from the G4 handoff. Owed on dispatch: this artifact's catalog/read-graph rows + boot NEXT→G1b. Standing flag: git identity unset — no commit attempted.

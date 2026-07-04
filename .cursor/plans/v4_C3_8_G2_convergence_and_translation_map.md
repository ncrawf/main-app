# v4 — C3.8 / G2: Convergence Matrix + Enterprise Translation/Equivalence Map + Plain-Language Ownership Answers

Document type: `analysis` (C3.8 Gate-2 deliverable) · Authority: `analysis_nonbinding` (`GRD-036`) — pressure to be routed at G4, never auto-canon. **NOT contract/spine/thesis prose; NOT G3 breakers; NOT disposition (final routing is G4).**
Status: **`gate_approved` 2026-07-03 (Nick + Knox, after the row-13 ZTA false-confidence micro-patch)** — G2 PASSED; NEXT = G3 only (`v4_C3_8_G3_doctrine_breakers.md`); do NOT proceed to G4. Manual/Nick-driven, gate-by-gate. Produced after G1b gate-approved, following `v4_C3_8_G1b_KICKOFF_PROMPT.md` + charter §6 (outputs #3/#5).
Inputs: `v4_C3_8_G1b_source_concept_reality_map.md` (all 6 axes + §CORR + §BATCH3-X), approved `v4_C3_8_G1a_source_shortlist_and_axis_coverage.md`. Citations live in G1b's per-axis source ledgers (§2.0/§6.0/§1.0/§3.0/§5.0/§4.0) + §CORR; G2 references them by ID, not re-citing.
**Anti-drift (binding):** OMNI's frame stays **PRIMARY** — the Translation Map explains OMNI *outward*; it does **not** relexicalize OMNI into vendor-speak (`GRD-035` guard). Enterprise players = pressure sources, not gods. CEO transcripts (§CORR) = **corroborating pressure language only**, never doctrine. Every "gap/disposition" is a **preview** for G3/G4.
**STOP after G2. Do NOT proceed to G3.**

---

## §1 CONVERGENCE MATRIX
*Per external concept: what it is · which independent sources converge (the gold) · OMNI analogue (grounded in the contracts) · already-covered? · gap? · disposition preview. Convergence across independent players = the signal.*

| # | External concept | Source convergence | OMNI analogue (grounded) | Already covered? | Gap? | Disposition preview (G4) |
|---|---|---|---|---|---|---|
| 1 | **Customer-owns-data / vendor-owns-platform** | Palantir ToS · Databricks UC · all AI vendors · [KARP]/[JENSEN] | Federation grant layer + `source_authority` + identity/tenant boundaries | partial (care-operator scope) | **no stated enterprise tenant-ownership split** | `v4-spine-delta` + `contract-extension` (Fed/Identity/D7) |
| 2 | **No-train-on-customer-data + ZDR + policy-vs-contract** | Anthropic · OpenAI · MS · Google · [DARIO] | §B learning-loop ("no exploit; coordinate care, don't exploit data") + §9.5 | principle yes | **not stated in ZDR/retention/no-train terms** | `validated` + `v4-spine-delta (legibility)` |
| 3 | **BYOM / customer-managed / private model** | MS BYOM-GA · Google Model Garden · Palantir private LLMs · [KARP]/[JENSEN] | §B `ai_model_registry` + `capability_envelope` (**opposite posture**: OMNI selects model; capability-surface-not-model-surface) | concept yes | **the BYOM-vs-care-model-choice TENSION unresolved** | `v4-spine-delta` (state substrate-vs-care model posture) + AI/Model-Lineage contract |
| 4 | **Data residency + CMEK/CMK** | MS Data Zone · Google Cloud KMS/VPC-SC | Federation inv 21 (topology-aware residency, stricter-wins) | partial | **CMEK/customer-managed-keys unmodeled** | `contract-extension` (Fed/D7/security) + `C5` |
| 5 | **Governance at engine/data layer, uniform humans+agents** | Snowflake Horizon · Databricks UC | RBAC 4-way spine + re-check at emission+execution ("UI hiding ≠ enforcement") + Network Governance Plane + `system_actor_atom_grant` + candidate≠commit + per-event orthogonality | **yes (at/above bar)** | naming only | `validated` (name enterprise-legibly) |
| 6 | **Lineage traces AI answer → data origin (provenance-as-governance)** | Snowflake column-lineage · IBM factsheets | `trace_lineage` + `model_version_of_record` + **`source_authority_map`** (field-level positional) | **yes (arguably stronger)** | naming only | `validated` |
| 7 | **Ontology/semantic layer as first-class product + 6 decision-grade properties** (provenance/currency/authority/policy/decision-history/confidence) | Palantir · Galaxy · ElixirData · Promethium · Kobai | `source_authority_map` + domain-owned truth + 15 contracts + projections + REV-184 (`world_model_trust`) + `cns_decision` + adoption + confidence | mechanism (all 6 present) | **unnamed as an "ontology/semantic layer"** | `v4-spine-delta (naming)` + `open-review` (portability) |
| 8 | **Ontology lock-in vs open-standard portability (OSI)** | Palantir (lock-in) · Cerebro (open) · OSI · [KARP] vs [DARIO] | contracts + maps = open governed doctrine (not proprietary black box) — **un-named posture** | no (posture unstated) | **portability/exit posture unstated** | `v4-spine-delta` + **G3 breaker (lock-in vs quality)** |
| 9 | **Fine-grained authz: policy-as-code (OPA/Cedar/ABAC) vs ReBAC (Zanzibar/OpenFGA)** | OpenFGA · Aserto · MadAppGang | `authority_evaluation` (per-resource+action FGA) + `granted_with_constraint` (ABAC-ish) + Federation `care_relationship`/grants (ReBAC-shaped) | mechanism yes | **not a named declarative policy-as-code layer / ReBAC engine at cross-org scale** | `v4-spine-delta (naming)` + `contract-extension` (RBAC/Fed) |
| 10 | **Continuous AI assurance (governance→assurance; governance graph + factsheets)** | IBM watsonx.governance · [DARIO] | Network Governance Plane + `model_version_of_record` + `evaluation_profile` + `cns_decision` + REV-184 | ingredients yes | **not named as continuous assurance capability** | `v4-spine-delta (naming)` → ties §BATCH3-X candidate |
| 11 | **Closed-loop eval (trace→dataset→CI-gate→online-eval→drift) + simulation** | Braintrust · Maxim · Confident · Hamming · Datadog | **C3.5 P39 harness obligation** + Build-OS (09/10/11) + `eval_bundle`/`evaluation_profile` | obligation surfaced (unbuilt) | **closed-loop structure unnamed; harness unbuilt; deployment-gov across customer configs** | `validated` + `v4-spine-delta (naming)` + `Build-OS/C5` |
| 12 | **LLM-as-judge = evidence, not authority** | Confident · Datadog · §B | §B `llm_judge_rubric` ("evidence, never authority") + candidate≠commit | **yes (verbatim)** | none | `validated` |
| 13 | **NIST zero-trust (PE/PA/PEP; per-session; dynamic policy incl. observable state)** | NIST 800-207 · agent-ZT | RBAC resolver≈PE · domain-commit≈PA · emission+execution gate≈PEP · `authority_evaluation`+`trust_horizon`≈dynamic/observable | **strongly ZTA-compatible in principle** | **classic infra ZT (network/device/mTLS/vault/SIEM) unmodeled** | **`validated` — OMNI's authority layer is strongly ZTA-compatible in principle; enterprise ZTA implementation remains C5 / security lane** |
| 14 | **Software/model supply-chain provenance (SLSA/SBOM + model-scan; FDA §524B)** | SLSA · Checkmarx · Google Model-Garden scans · FDA §524B | `trace_lineage`/`source_authority_map` = **data/decision** provenance only | **no (build/model/dependency provenance absent)** | **genuine gap** | `v4-spine-delta` (proof-fabric extends to supply-chain) + `Build-OS/C5` + regulatory |
| 15 | **MCP/tool security (tool poisoning; connect-time-vs-runtime; OWASP MCP Top 10)** | OWASP-MCP · MCP-Poison · MCP-2026 · [DARIO Mythos] | **P35 `command_authority_boundary` (8 modes)** + `GRD-039` (watched=data-not-instructions) + candidate≠commit | concept yes | **schema-pin/runtime-tool-output-validation/privilege-isolation/shadow-MCP** | `validated` + `contract-extension` (P35 MCP-security teeth) |
| 16 | **Agent/non-human identity ZT (SPIFFE/JIT/action-level authz)** | SPIFFE · SANS · CSA-NHI | §A `non_human_actor` + `delegated_authority_envelope` (TTL/scope/revocation) + `capability_envelope`≠authority | concept yes | **§A uncontracted; crypto-attestation (mTLS/SVID) unmodeled** | `contract-extension` (Identity/RBAC land §A) + `C5` |
| 17 | **Agent runtime (loop/handoffs/guardrails/sessions/sandbox)** | OpenAI · MS-MAF · [ALTMAN]/[JENSEN] | CNS (candidate→resolver→commit) + `context_packet` + `execution_envelope` + §B + REV-184 | **yes (deep in-estate)** | naming only | `validated` + `v4-spine-delta (naming)` |
| 18 | **AI = commodity axis; moat = governed substrate + relationships + domain data** | [KARP] · [ALTMAN] · [DARIO] (moats that survive) | `GRD-028` (AI-axis-not-target; commodity behind boundary); moat = care-governance + longitudinal truth | **yes (CEO-corroborated)** | none | `validated` |
| 19 | **Rail volatility / model-agnostic** (MCP RC churn; model-switching) | MCP-RC (RC/scheduled, not shipped) · [KARP]/[DARIO] | `GRD-033` (rail-agnostic; §C owns capability contract, rails = adapters) | **yes (vindicated)** | naming only | `validated` |
| 20 | **Continuous operating capability ("computers continuously running")** | [JENSEN] · [DARIO] · IBM · eval-vendors | Sense/Act loops + REV-184 + Network Governance Plane | mechanism yes | **not named as continuous operating lane(s)** | **candidate cross-axis `v4-spine-delta` (§BATCH3-X)** — G3/G4, not minted |

**Convergence headline:** the strongest signals cluster where independent players agree *and* OMNI already has the mechanism — customer-owns-data (1), provenance-as-governance (6), engine-layer uniform governance (5), LLM-judge=evidence (12), AI-as-commodity (18), rail-agnosticism (19). The genuine gaps concentrate at **tenant-ownership doctrine (1/3/4)**, **supply-chain provenance (14)**, and **naming/legibility (2/7/9/10/11/13/17)**.

---

## §2 ENTERPRISE TRANSLATION / EQUIVALENCE MAP
*Enterprise language ↔ OMNI language. **OMNI frame PRIMARY** — this explains OMNI outward; it does not rename OMNI into vendor-speak. Marker: OMNI **stronger** / **equivalent** / **weaker** / **different**.*

| Enterprise language | OMNI language (primary frame) | Relative posture | Note |
|---|---|---|---|
| "ontology / semantic layer" | **domain-owned truth + `source_authority_map` + projections + System Map + contracts** | **different / equivalent** | OMNI's is *governed care truth*, not a BI semantic layer; the 6 decision-grade properties map on. **Naming gap.** |
| "operating system for the enterprise" | **governed care + business execution substrate** | **different** | OMNI is domain-native + care-first, not a horizontal OS. |
| "customer data ownership / your data" | **Federation boundary-policy + `source_authority` + tenant/identity boundaries** | **weaker (enterprise-tenant scope)** | care-operator-scoped today; **tenant-ownership doctrine owed** (the headline delta). |
| "enterprise memory / RAG / context" | **Clinical Memory + Knowledge Reservoirs + CNS `context_packet` (authority-labeled, referenced-not-copied)** | **stronger / thin-on-ownership** | context_packet ≈ "governed context for agents"; **memory-ownership at tenant scale thin.** |
| "agent runtime / agent OS" | **CNS (candidate→resolver→owning-domain commit) + P35 + REV-184 + Build-OS** | **stronger (governance)** | candidate≠commit + human-commit + blast-radius-keyed autonomy exceed typical agent loops. |
| "policy engine (OPA / Zanzibar)" | **RBAC 4-way spine + `authority_evaluation` + REV-184 + Federation grants** | **equivalent / naming-gap** | FGA + ABAC-ish + ReBAC-shaped present; **not named as declarative policy-as-code / ReBAC engine.** |
| "audit / provenance / lineage" | **D7 + `trace_lineage` + `source_authority_map` + Evidence Plane** | **stronger** | field-level positional authority + adoption lineage. |
| "digital twin / world model" | **REV-184 `world_model` (candidate-not-truth) + source-backed projections + operator graph** | **stronger (honesty)** | world-model-honesty is explicit (predicted_state ≠ reality). |
| "eval / simulation / assurance" | **Build-OS harness + C3.5 P39 + pressure-test corpora; `evaluation_profile`** | **equivalent (unbuilt)** | closed-loop structure to be **named**; harness to be **built**. |
| "tool ecosystem / MCP / connectors" | **P35 external-capability (8 command-authority modes) + §C Governed Capability Exchange** | **stronger / thin-on-tool-security** | §C is rail-agnostic (survives MCP churn); **MCP-specific security teeth owed.** |
| "zero-trust" | **RBAC emission+execution gate (PE/PA/PEP-isomorphic) + `authority_evaluation` + `trust_horizon` + operator-neutrality** | **equivalent-in-principle / weaker-on-infra** | care-domain ZTA in principle; **classic infra ZT = C5.** |
| "data residency / CMEK / sovereignty" | **Federation topology-aware residency (partial)** | **weaker** | **CMEK unmodeled.** |
| "BYOM / customer-managed model" | **§B `ai_model_registry` + `capability_envelope`** | **different (opposite posture)** | substrate-model-pluggable vs care-level-model-choice-refused — **the tension.** |
| "supply-chain security / SBOM / SLSA" | **(no analogue — proof fabric = data/decision only)** | **weaker (gap)** | **candidate proof-fabric extension.** |
| "continuous assurance / observability" | **Network Governance Plane + `cns_decision` + `model_version_of_record`** | **equivalent / naming-gap** | candidate continuous security/assurance lane (§BATCH3-X). |
| "own the model weights / IP / 'alpha'" (Karp pressure language) | **`source_authority` + no-exploit learning loop + governed substrate; care-relationships as moat** | **equivalent (reframed)** | pressure language — *what the customer owns vs what OMNI owns*; not "Palantir says so." |

**Guard honored:** each row keeps OMNI's own primitive as the noun; the enterprise phrase is the *translation for the room*, not a rename. Where OMNI is **weaker** (tenant-ownership, CMEK, supply-chain), that is stated plainly (no false confidence).

---

## §3 PLAIN-LANGUAGE OWNERSHIP ANSWERS (charter §2 — plain language FIRST)
*Candidate answers to pressure in G3 — `analysis_nonbinding`, **NOT authored doctrine** (the spine author adjudicates post-G4). Where OMNI has no stated answer, that IS the finding. "Own" = who holds authority/custody/rights, per OMNI's decomposed model.*

| Plain-language question | Enterprise-convergent expectation | OMNI's honest current answer | Candidate OMNI posture (pressure in G3; NOT settled) |
|---|---|---|---|
| **Who owns the data?** | customer (data in their tenant/cloud) | `source_authority` + Federation boundaries; **no stated enterprise-tenant ownership** | operator/patient own their data; OMNI custodies + governs; **stated split owed** |
| **Who owns the ontology / semantic model?** | customer (if open) / vendor lock-in (if proprietary) | contracts + `source_authority_map` = OMNI's; **operator's semantic config ownership unstated** | ontology = **open governed doctrine** (not proprietary lock-in); operator owns its config/overlays |
| **Who owns memory / context?** | increasingly customer (embeddings, indexes, conversations, residency) | Clinical Memory + Reservoirs + `context_packet`; **tenant memory-ownership/residency/exit unstated** | operator owns local memory/reservoirs; OMNI governs the assembly; **derived-memory ownership owed** |
| **Who owns the model(s)?** | customer may BYOM / manage / private-deploy | OMNI selects model via registry; **care-level model-choice refused** | **substrate-model-pluggable (operator may bring/manage) while care-level model-choice stays governed** — the tension to resolve |
| **Who owns / authorizes execution?** | customer policy + action-level authz | RBAC 4-way spine + `authority_evaluation` + candidate≠commit + REV-184 human-commit | OMNI owns the execution substrate + safety envelope; **actor authority per §A; human commits** |
| **Who sees the audit log?** | customer (+ regulator) | D7 + `trace_lineage` + `source_authority_map` + Network Governance Plane | operator + patient (scoped) + governance plane; **provenance is field-level, exportable** |
| **What is portable on exit?** | data (yes); ontology/workflows (often NOT — the lock-in) | **unstated** (cross-org/MPI deferred to ladder v2/v3) | data + semantic config + local memory portable; **exact exceptions routed by source-authority/consent/federation/deployment-mode** |
| **What may train future models?** | nothing by default; opt-in; ZDR | §B no-exploit principle; **not stated in ZDR/no-train terms** | nothing without explicit consent/authority; **care data never trains by default; provenance preserved** (`GRD-036`) |

**Altitude (Knox, preserved as target — not final wording):** *"OMNI needs an explicit tenant-ownership doctrine: customer/operator owns data, semantic configuration, local memory/reservoirs, and policy overlays; OMNI owns the execution substrate, safety envelope, contract schema, model-governance rules, and proof fabric — with exact exceptions routed by source authority, consent, federation, and deployment mode."*

---

## §4 CARRY-FORWARD TENSIONS → G3 BREAKER SEEDS (candidates; NOT resolved here)
The eight G1b/G2 tensions the G3 doctrine-breakers must pressure against the pre-registered invariants:
1. **Tenant-ownership doctrine** — can OMNI state "operator/customer owns X, OMNI owns Y" at enterprise scale without breaking care-first + Federation-not-god-domain?
2. **Semantic/ontology layer naming + portability** — name OMNI's semantic layer enterprise-legibly; open-governed vs proprietary; what ports on exit?
3. **BYOM vs care-level model-choice** — substrate-model-pluggable while refusing model-choice medicine — does the authority stack hold?
4. **Policy-as-code / ReBAC question** — does OMNI need a declarative policy layer; is Federation's grant graph a ReBAC engine at cross-org scale?
5. **Supply-chain provenance** — does the proof fabric extend to build/model/dependency provenance (SBOM; FDA §524B)? spine or C5?
6. **Continuous security/assurance lane** — Defend-loop sibling vs cross-cutting assurance lane vs part-of-Prove/Learn (§6.6 + §BATCH3-X + [DARIO Mythos]/[JENSEN swarm])?
7. **Palantir lock-in vs Anthropic no-stickiness/quality** — two opposite ownership/moat bets; which does OMNI take deliberately?
8. **MCP churn as rail-agnostic validation** — the in-progress MCP RC (scheduled, not shipped) as proof of `GRD-033`; does §C need MCP-security teeth?

Each = a **candidate G3 doctrine-breaker**, tested against the §4 invariants (governed execution · domain-owned truth · candidate≠commit · source authority · ownership boundaries · CNS-orchestrates-not-owns · federation-as-boundary-policy · care+business as ONE substrate · projection≠authority · REV-184 lifecycle+7 lines · P35 command-authority). **Held / bent / broke verdict is G3, not here.**

---

## §5 Stop / authority (G2 close — Protocol §9)
`analysis_nonbinding` (`GRD-036`); G2 Convergence Matrix + Enterprise Translation Map + plain-language ownership answers — **`ready_for_gate_review`.**
- **Gate:** G2. **Status: complete; FULL STOP.** Next authorized step = **G3 (40–80 doctrine breakers vs the §4 invariants) ONLY on Nick + Knox approval.** Do NOT run G3 until approved.
- **Scope honored:** three deliverables produced (§1/§2/§3) + carry-forward tensions (§4); OMNI frame primary; CEO transcripts used as **pressure language only** (§CORR-sourced), never doctrine; every gap/disposition is a **preview** (final routing G4); no C4/spine/thesis prose, no contract edits, no boot/AGENTS/read-graph/handoff edits, no new source ingestion.
- **Lock-in-vs-quality tension preserved** as a G3 breaker (§4.7).
- **Owed at promotion (Protocol §5):** this artifact's catalog row + read-graph route (flagged; wired at promotion, `analysis_nonbinding`). CEO-transcript raw `EVSRC` materialization + evidence-lane normalization still owed (per G1b §CORR / capture cleanup marker).
- **Boot note:** boot NEXT still reads `C3.8/G1b`; the G1b→G2→G3 transitions ride the G-artifacts during this manual run; a boot repoint is owed only at a checkpoint closeout (not performed mid-run, per the no-boot-edit guard).
- **Standing flag:** git identity unset — no commit attempted this gate.

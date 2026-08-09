# EVSRC-2026-000316 — Palantir Foundry: Ontology object/link/action types and roles

Document type: `evidence_source_packet` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing.
Status: `captured · primary_source_read_directly · source_local_only`
Domain(s): `architecture_governance` · `build_operations`
Lifecycle role: **source-local** preservation and interpretation of one external source. **Cross-source synthesis is NOT here** — it lives in the run `EVRUN-2026-000124` concept registry (`GRD-037`/`GRD-040`; router §Cardinality: *one Source Packet per source*).
Source-of-truth relationship: the vendor documentation is the authority for what the vendor does; **OMNI doctrine is the consumer and controls what OMNI does.** Informs; does not bind.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

| Field | Value |
|---|---|
| `source_system` | Palantir Foundry (Ontology) |
| Source URLs | <https://www.palantir.com/docs/foundry/ontology/core-concepts/> · <https://www.palantir.com/docs/foundry/object-link-types/link-types-overview/> |
| `captured_at` / accessed | 2026-08-08, both pages read directly |
| `technique` | relationships and state changes as **declared, permissioned schema objects** |
| `build_os_target` | `06` `D0CKPT-GRD-004`; the work-horizon representation in the pre-spine map |
| Consuming run | `EVRUN-2026-000124` |

---

## §1 — Mechanism, in the source's own terms

**Core concepts page.** The Ontology maps datasets and models to **object types** ("the schema definition of a real-world entity or event"), **properties**, **link types** ("the schema definition of a relationship between two object types"), and **action types** ("the schema definition of a set of changes or edits to objects, property values, and links that a user can take at once… includes the side effect behaviors that occur with action submission"). **Roles** are "the central permissioning model in the Ontology," grantable at ontology or individual-resource level, and applied to object types, link types **and action types**. The page draws the dataset analogy explicitly: object type ≈ dataset, property ≈ column, **link type ≈ join**.

**Link types page — directionality, verbatim.** "A link type is **bidirectional**: it always has two sides, one for each of the two object types it relates. **Each side of a link type can be traversed independently and has its own display name and API name**." Creating one link type "does not implicitly create a second, reverse link type"; the single link type "already supports traversal in both directions through its two sides." Multiple distinct link types may exist between the same two object types, but "each one represents a **separate real-world relationship** rather than a reverse direction of an existing one," and each requires unique API names per side.

## §2 — Source-local interpretation

The load-bearing property is that a relationship is a **declared object with identity, naming and permissioning** — not an emergent consequence of data layout or document adjacency. The `Employee → Employer` example shows the vendor keeping a relationship **semantically named per side** even while the link type itself is traversable from either end.

## §3 — Transfer limits (bounded to what these two pages support)

- **Do NOT say Palantir link types are "symmetric."** The source says *bidirectional with two independently traversable sides, each separately named*. Semantic direction survives (`Employee → Employer`); only traversal is two-way. **Neither property supplies OMNI's dependency-direction semantics** — OMNI must define its own, and a reversed dependency arrow was one of the 2026-08-08 failure forms.
- **No tenancy claim is supported.** These pages describe the Ontology as "the digital twin of an organization" and note that links across different Ontologies are unsupported. That is **not** evidence about multi-principal or cross-sovereign authority; the cited mechanism is defined *within* an Ontology and does not speak to OMNI's non-fungible authorities across separate legal principals.
- **This is a comparator mechanism that informed an OMNI rule — not its antecedent or ancestor.** Foundry's `action type` + `roles` pairing rhymes with OMNI's owning-domain commit path and `requireCapability`, but the resemblance is not evidence of equivalence.
- **Not captured:** pricing, deployment, Ontology Manager UX, AIP, functions, interfaces, object views, or any vendor comparison.

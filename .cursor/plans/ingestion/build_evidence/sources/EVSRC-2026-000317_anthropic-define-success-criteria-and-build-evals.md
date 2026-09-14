# EVSRC-2026-000317 — Anthropic: define success criteria and build evaluations

Document type: `evidence_source_packet` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). Binds nothing. Promotes nothing. Mints nothing.
Status: `captured · primary_source_read_directly · source_local_only`
Domain(s): `architecture_governance` · `build_operations` · `agent_execution`
Lifecycle role: **source-local** preservation and interpretation of one external source. **Cross-source synthesis is NOT here** — it lives in the run `EVRUN-2026-000124` concept registry (router §Cardinality: *one Source Packet per source*).
Source-of-truth relationship: the vendor documentation is the authority for what it says; **OMNI decides what OMNI does.** Informs; does not bind.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

| Field | Value |
|---|---|
| `source_system` | Anthropic developer documentation |
| Source URL | <https://docs.anthropic.com/en/docs/test-and-evaluate/define-success> |
| `captured_at` / accessed | 2026-08-08, read directly |
| `technique` | predeclare measurable success criteria, then build task-specific evals |
| `build_os_target` | Build OS proof obligations; the `D0CKPT-DEC-009` acceptance test |
| Consuming run | `EVRUN-2026-000124` |

---

## §1 — Mechanism, in the source's own terms

"Building a successful LLM-based application starts with clearly defining your success criteria and then designing evaluations to measure performance against them. This cycle is central to prompt engineering."

Good criteria are **specific** — "Instead of 'good performance,' specify 'accurate sentiment classification'" — and **measurable**, using quantitative metrics or well-defined qualitative scales applied consistently. Most use cases need **multidimensional** evaluation across several criteria.

Eval design principles, as listed: **"Be task-specific: design evals that mirror your real-world task distribution. Don't forget to factor in edge cases!"** and **"Prioritize volume over quality: more questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals."** The page's worked example contrasts a weak criterion ("good performance") with a strong one specifying a metric, a threshold, a held-out test set and a baseline delta.

## §2 — Source-local interpretation

The transferable discipline is ordering plus commitment: **criteria are written before the run and are specific enough to fail.** "A fresh agent will understand this" is the weak form the page explicitly warns against; the strong form names the exact facts to be recovered and how they will be scored.

## §3 — Transfer limits (bounded to what this page supports)

- **Withholding the expected answer from the grader is OMNI's own test-design adaptation, NOT a claim on this page.** The page covers defining criteria and building evals; it does not prescribe blinding the evaluator. Attribute the blinding to OMNI.
- **"Prioritize volume over quality" does NOT transfer to governance changes.** The page's context is a task distribution with many samples and automated grading. An OMNI control-plane boot test is **n=1 per corrected head, qualitative, pass/fail on named facts** — it must never be reported as a statistical eval, and its metrics (F1, exact match, BLEU) are irrelevant here.
- **This authorises no eval harness or platform.** One receipt per corrected head is the whole mechanism.
- **Not captured:** model-specific benchmarks, grading code samples, LLM-as-judge rubric construction, or any vendor comparison.

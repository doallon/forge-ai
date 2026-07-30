# M.6 Amendment Draft — Resolving UN-01 (Undetermined Migration Obligation)

> Coordinated companion draft to the AI-DOS Versioning Architecture Normative-Intent Draft · Draft · Not approved · Not canonical · Not promoted

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-M.6-AMENDMENT-DRAFT-UN-01` |
| Title | M.6 Amendment Draft — Undetermined Migration Obligation Category (Resolving `UN-01`) |
| Version | Proposes a change within M.6's own still-Draft `v1.1.0-draft`; does not itself assign a new M.6 version — version assignment is an act for M.6's own approval authority at promotion time. |
| Status | **Draft.** Not approved. Not reviewed. Not promoted. |
| Canonical Status | Non-canonical. A proposed amendment to `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`, not an edit applied to that file. |
| Classification | Meta-Model Amendment Proposal |
| Document Type | Amendment Draft |
| Owner | Framework Governance, per M.6's own current Document Metadata Owner field. |
| Review Authority | Enterprise Documentation Standards Board, per M.6's own current Document Metadata Review Authority field. |
| Promotion Review Requirement | Framework Governance review, per M.6 §16 ("requires Framework Governance review and Human Governance approval before canonical promotion"). This document does not assert an ordering or substitution relationship between this requirement and the Review Authority row above beyond what M.6's own text establishes. |
| Approval Authority | Human Governance, per M.6's own current Document Metadata Approval Authority field. |
| Created | 2026-07-30 |
| Last Updated | 2026-07-30 |
| Authorizing Record | Consolidated Versioning Architecture Closure — `CP-02/UN-01 CORRECTION SEMANTICS AND AUTHORITY PATHWAY: Accept` |
| Resolves | `UN-01` (Reconciliation Assessment: M.6's closed four-category Migration Obligation enumeration vs. the baseline's "insufficient information for a conclusion" requirement — Classification 6, definite semantic conflict) |
| Nature of this document | A proposed, drafted amendment. It does not itself amend M.6. `UN-01` remains an open, unresolved definite semantic conflict until this proposal (or an equivalent) is reviewed, approved, and promoted through M.6's own governance chain. |
| Supersedes | None |
| Superseded By | None |

---

## 1. Exact Current M.6 Text Being Amended

**M.6 §7.10, Migration Obligation Categories table (current, unchanged):**

| Category | Consumer Action | Evidence Required |
|:---|:---|:---|
| `Migration-Needed` | Must review change, assess impact, and adapt consumption | Evidence of incompatibility, impact analysis, migration guidance |
| `Migration-Not-Needed` | May continue without modification | Evidence that the change is backward-compatible |
| `Migration-Recommended` | Not required but strongly encouraged | Evidence of improvement and recommendation justification |
| `Migration-Deferred` | Not immediately; must plan before window closes | Evidence of future incompatibility, transition window, timeline |

**M.6 §7.3** requires every version to declare a "Migration Obligation" component as one of its required Version Anatomy fields, drawn from the above closed, four-member enumeration, with no fifth member for the case where migration necessity or disposition cannot presently be established.

## 2. The Defect (`UN-01`)

Per the Reconciliation Assessment: this is a **Classification 6 — Definite semantic conflict**. The STEP 1–6 Baseline requires that a system be able to represent "insufficient information for a conclusion" wherever facts do not establish an answer (Baseline §10.11, stress test 30: "Migration completion, current standing, or historical ordering cannot be determined from available information... Explicitly represented as undetermined — no fabricated answer"). M.6's four-category enumeration has no member corresponding to this outcome. STEP 8 P-10 states directly that any bump-rule family requiring a closed-set output "inherits the identical defect `CP-02`/`UN-01` already identify... unless the family's own encoding reserves an explicit 'not established' value." M.6 §7.10, as currently written, reserves no such value.

## 3. Proposed Amendment

### 3.1 New Migration Obligation Category

Add a fifth category to M.6 §7.10's table:

| Category | Consumer Action | Evidence Required |
|:---|:---|:---|
| **`Undetermined`** | Migration necessity or disposition cannot presently be established; consumers must treat the version transition as unresolved and await a subsequent, evidenced re-classification before relying on any of the other four categories. | Evidence — or an explicit record of the absence of adequate evidence — demonstrating that the required determination cannot presently be made because the necessary evidence is absent, unavailable, contradictory, unresolved, or outside the established evaluation scope for this transition. |

### 3.2 Exact Semantics of `Undetermined`

- `Undetermined` applies whenever migration necessity or disposition cannot be established because required evidence is **absent, unavailable, contradictory, unresolved, or outside established evaluation scope** for the transition in question.
- `Undetermined` is **not** `Migration-Needed`.
- `Undetermined` is **not** `Migration-Not-Needed`.
- `Undetermined` is **not a substantive migration result** of any kind — it is the explicit absence of one.
- `Undetermined` **cannot be silently converted** into `Migration-Needed`, `Migration-Not-Needed`, `Migration-Recommended`, `Migration-Deferred`, or into any substantive numeric version outcome that depends on it. A consuming decision or bump-rule mechanism encountering `Undetermined`, where a Migration Obligation determination is materially required, must escalate the determination to an authoritative act, or return its own governed no-established-result outcome — it must never fabricate a substantive migration category to proceed. This M.6 amendment owns only the `Undetermined` vocabulary, its evidence/evaluation semantics, and the reclassification obligation stated above; the name, mechanism, and result formation of any consumer's own governed no-established-result outcome (including any specific bump-rule policy for any entity class) remain owned entirely by the consuming architecture — e.g., the Versioning Architecture — not by this amendment.

### 3.3 Proposed Supporting Rule and Invariant Additions

Add to M.6 §8 (Semantic Rules), immediately following existing Rule 8–11:

- **Rule 8a (proposed):** A version transition whose Migration Obligation cannot be determined from available evidence must be declared `Undetermined`, never defaulted to `Migration-Needed`, `Migration-Not-Needed`, `Migration-Recommended`, or `Migration-Deferred`.

Add to M.6 §9 (Invariants):

- **(proposed):** An `Undetermined` Migration Obligation is not itself a version transition defect; it is a valid, first-class recorded state that triggers a re-classification obligation once adequate evidence becomes available.

### 3.4 Validation Assertion Addition

Add to M.6 §15:

| # | Assertion | Checkable Criterion |
|:---|:---|:---|
| VA-25 (proposed) | Every version transition whose Migration Obligation could not be determined is declared `Undetermined`, not defaulted to a substantive category | Migration Obligation field is `Undetermined` whenever the evidence record does not support any of the other four categories |

## 4. Exact Relationship Between Rule 8a and Existing Rule 8–10 Coverage

- The text of Rules 8, 9, and 10 is **not directly replaced** by this amendment.
- **Rule 8a introduces an explicit precedence exception** for the case where evidence cannot establish a Migration Obligation at all (absent, unavailable, contradictory, unresolved, or outside established evaluation scope).
- **Without Rule 8a**, current Rule 8 resolves an unevidenced MAJOR case into `Migration-Needed` by its own default ("unless evidence demonstrates no consumer action is required" — absent such evidence, the default stands).
- **With Rule 8a**, that same unevidenced case instead becomes `Undetermined`.
- This amendment therefore **intentionally changes Rule 8's effective outcome** for the bounded absent/unavailable/contradictory/unresolved/out-of-scope-evidence case. This is not a cosmetic or orthogonal addition — it is acknowledged here as a deliberate, bounded correction to Rule 8's behavior in exactly that case.
- **Rules 8, 9, and 10 otherwise retain their existing mappings** in every case where a substantive Migration Obligation result is adequately established by evidence — Rule 8a does not touch those cases.

## 5. Why `SV-02`, `VS-Q2`, and `NB-Q3` Remain Unresolved Generally

This amendment's narrowing of Rule 8 is **bounded strictly to the no-adequate-evidence case**. It does not decide:

- Whether Rule 8's remaining presumption-plus-rebuttal structure — i.e., its default-to-`Migration-Needed`-unless-rebutted mechanism, in every case where *some* evidence exists, even if thin, contested, or not fully dispositive short of the Rule 8a threshold — is itself acceptable Tier 2 or general Meta-Model policy.
- Whether a rebuttable default of that kind counts as the "automatic mapping" STEP 6 rejected.

This amendment **only** prevents Rule 8's existing default from manufacturing a substantive result in the specific case where adequate evidence cannot establish one at all. It takes no position on the broader rebuttable-default acceptability question outside that bounded corner. `SV-02`, `VS-Q2`, and `NB-Q3` therefore remain unresolved generally, exactly as recorded at Gate B and carried through the Consolidated Versioning Architecture Closure.

## 6. What This Amendment Does Not Do

- Does not itself constitute a promoted change to M.6. `UN-01` remains an open, unresolved definite semantic conflict until this proposal is reviewed, approved, and promoted through M.6's existing Framework Governance / Human Governance chain.
- Does not name, depend on, or acquire a dependency on any specific consuming policy, candidate, or the Versioning Architecture's own structure — see §3.2.

## 7. Promotion Pathway

This amendment is routed through M.6's own existing promotion authority exactly as declared in M.6's own Document Metadata and §16 Completion/Governance Status: **Framework Governance review**, then **Human Governance approval**, before any canonical promotion. No new authority is invented. This document does not claim that review or approval has occurred.

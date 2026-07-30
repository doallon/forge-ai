# M.7 Amendment Draft — Resolving CP-02 (Indeterminate Compatibility Relation)

> Coordinated companion draft to the AI-DOS Versioning Architecture Normative-Intent Draft · Draft · Not approved · Not canonical · Not promoted

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-M.7-AMENDMENT-DRAFT-CP-02` |
| Title | M.7 Amendment Draft — Indeterminate Compatibility Relation (Resolving `CP-02`) |
| Version | Proposes a change within M.7's own still-Draft `v1.1.0-draft`; does not itself assign a new M.7 version — version assignment is an act for M.7's own approval authority at promotion time. |
| Status | **Draft.** Not approved. Not reviewed. Not promoted. |
| Canonical Status | Non-canonical. A proposed amendment to `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`, not an edit applied to that file. |
| Classification | Meta-Model Amendment Proposal |
| Document Type | Amendment Draft |
| Owner | Framework Governance, per M.7's own current Document Metadata Owner field. |
| Review Authority | Enterprise Documentation Standards Board, per M.7's own current Document Metadata Review Authority field. |
| Promotion Review Requirement | Framework Governance review, per M.7 §16 ("requires Framework Governance review and Human Governance approval before canonical promotion"). This document does not assert an ordering or substitution relationship between this requirement and the Review Authority row above beyond what M.7's own text establishes. |
| Approval Authority | Human Governance, per M.7's own current Document Metadata Approval Authority field. |
| Created | 2026-07-30 |
| Last Updated | 2026-07-30 |
| Authorizing Record | Consolidated Versioning Architecture Closure — `CP-02/UN-01 CORRECTION SEMANTICS AND AUTHORITY PATHWAY: Accept` |
| Resolves | `CP-02` (Reconciliation Assessment: M.7 Rule 1's closed five-type Compatibility Relation enumeration with no textual Indeterminate member — Classification 6, definite semantic conflict) |
| Nature of this document | A proposed, drafted amendment. It does not itself amend M.7. `CP-02` remains an open, unresolved definite semantic conflict until this proposal (or an equivalent) is reviewed, approved, and promoted through M.7's own governance chain. |
| Supersedes | None |
| Superseded By | None |

---

## 1. Exact Current M.7 Text Being Amended

**M.7 §7.1, Compatibility Relation Model table (current, unchanged):**

| Relation Type | Direction | Definition |
|:---|:---|:---|
| Backward Compatible | Newer → Older | Newer version preserves all consumption interfaces of the older version. |
| Forward Compatible | Older → Newer | Older version's interfaces remain valid under the newer version's contract. |
| Partially Compatible | Either | Compatibility holds within a declared subset of the consumption interface. |
| Conditionally Compatible | Either | Compatibility holds only when specified conditions are met. |
| Incompatible | Either | One or more compatibility relations are broken. |

**M.7 §8, Rule 1** (current, unchanged): "Every compatibility assessment must classify into one of the defined relation types."

## 2. The Defect (`CP-02`)

Per the Reconciliation Assessment: this is a **Classification 6 — Definite semantic conflict**. Rule 1 requires every compatibility assessment to classify into exactly one of the five closed relation types, with no member representing the case where compatibility cannot presently be established at all. STEP 8 P-10 states directly that any bump-rule family requiring a closed-set output "inherits the identical defect `CP-02`/`UN-01` already identify... unless the family's own encoding reserves an explicit 'not established' value." M.7 §7.1, as currently written, reserves no such value. This defect is also noted, in the Reconciliation Assessment, as sitting in apparent tension with `CP-01` (STEP 3's fifteen-dimension, never-collapsed compatibility model) — this amendment does not resolve `CP-01`, and confines itself strictly to the closed-enumeration/no-Indeterminate-member defect `CP-02` names.

## 3. Proposed Amendment

### 3.1 New Compatibility Relation Type

Add a sixth relation type to M.7 §7.1's table:

| Relation Type | Direction | Definition |
|:---|:---|:---|
| **Indeterminate** | Neither | Compatibility cannot presently be established between the two versioned entities because required evidence is absent, unavailable, contradictory, unresolved, or outside the established evaluation scope for the assessed pair. |

### 3.2 Exact Semantics of `Indeterminate`

- `Indeterminate` applies whenever compatibility cannot be established because required evidence is **absent, unavailable, contradictory, unresolved, or outside established evaluation scope** for the assessed pair.
- `Indeterminate` is **not** Compatible (in any of Backward, Forward, Partially, or Conditionally Compatible form).
- `Indeterminate` is **not** Incompatible.
- `Indeterminate` is **not a substantive compatibility result** of any kind — it is the explicit absence of one.
- `Indeterminate` **cannot be silently converted** into any of the other five relation types, or into any substantive numeric version outcome that depends on it. A consuming decision or bump-rule mechanism encountering `Indeterminate`, where a Compatibility Relation determination is materially required, must escalate the determination to an authoritative act, or return its own governed no-established-result outcome — it must never fabricate a substantive compatibility relation to proceed. This M.7 amendment owns only the `Indeterminate` vocabulary, its identity/evidence/evaluation semantics, and the reassessment obligation stated above; the name, mechanism, and result formation of any consumer's own governed no-established-result outcome (including any specific bump-rule policy for any entity class) remain owned entirely by the consuming architecture — e.g., the Versioning Architecture — not by this amendment.
- An `Indeterminate` classification still requires an M.2 identity for its relation and an M.5 evidence binding, exactly as every other Compatibility Relation does per M.7 §7.1 and §8 Rule 4 — the evidence, in this case, documents *why* a determination could not be reached, satisfying the non-negotiable evidence-binding requirement rather than exempting `Indeterminate` from it.

### 3.3 Proposed Supporting Rule and Invariant Additions

Add to M.7 §8 (Semantic Rules), immediately following existing Rule 1:

- **Rule 1a (proposed):** A compatibility assessment that cannot be classified into Backward Compatible, Forward Compatible, Partially Compatible, Conditionally Compatible, or Incompatible because required evidence is absent, unavailable, contradictory, unresolved, or outside established evaluation scope must be classified `Indeterminate`, never defaulted to any of the other five types.

Add to M.7 §9 (Invariants):

- **(proposed):** An `Indeterminate` compatibility relation is not itself a compatibility violation; it is a valid, first-class recorded state that triggers a re-assessment obligation once adequate evidence becomes available.

### 3.4 Validation Assertion Addition

Add to M.7 §15:

| # | Assertion | Checkable Criterion |
|:---|:---|:---|
| VA-21 (proposed) | Every compatibility assessment that could not be classified into the five substantive relation types is declared `Indeterminate`, not defaulted to a substantive type | Relation type field is `Indeterminate` whenever the evidence record does not support any of the other five types |

## 4. What This Amendment Does Not Do

- Does not alter the existing five relation types' own definitions or rules (§7.2–§7.6 of M.7).
- Does not resolve `CP-01` (the fifteen-dimension vs. single-relation-type tension) — that remains a separate, unaddressed question.
- Does not resolve `SV-02`, `VS-Q2`, or `NB-Q3`.
- Does not itself constitute a promoted change to M.7. `CP-02` remains an open, unresolved definite semantic conflict until this proposal is reviewed, approved, and promoted through M.7's existing Framework Governance / Human Governance chain.
- Does not name, depend on, or acquire a dependency on any specific consuming policy, candidate, or the Versioning Architecture's own structure — see §3.2.

## 5. Promotion Pathway

This amendment is routed through M.7's own existing promotion authority exactly as declared in M.7's own Document Metadata and §16 Completion/Governance Status: **Framework Governance review**, then **Human Governance approval**, before any canonical promotion. No new authority is invented. This document does not claim that review or approval has occurred.

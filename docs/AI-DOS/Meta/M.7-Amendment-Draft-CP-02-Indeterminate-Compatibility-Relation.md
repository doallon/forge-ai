# M.7 Amendment Draft — Resolving CP-02 (Indeterminate Compatibility Relation)

> Coordinated companion draft to the AI-DOS Versioning Architecture Normative-Intent Draft · Draft traceability artifact · Amendment semantics reviewed and approved by Human Governance · Not independently canonical · Not promoted

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-M.7-AMENDMENT-DRAFT-CP-02` |
| Title | M.7 Amendment Draft — Indeterminate Compatibility Relation (Resolving `CP-02`) |
| Version | Proposed a change within M.7's own still-Draft `v1.1.0-draft`; does not itself assign a new M.7 version — version assignment remains an act for M.7's own approval authority at promotion time. |
| Status | **Draft.** Semantics reviewed and approved by Human Governance. Not independently canonical. Not promoted. |
| Canonical Status | Non-canonical. Its semantics have been incorporated into `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md` as the integrated M.7 candidate; this amendment document itself remains non-canonical and is retained as the traceability record of that incorporation, not as an independently canonical artifact. |
| Classification | Meta-Model Amendment Proposal |
| Document Type | Amendment Draft |
| Owner | Framework Governance, per M.7's own current Document Metadata Owner field. |
| Review Authority | Enterprise Documentation Standards Board, per M.7's own current Document Metadata Review Authority field. |
| Promotion Review Requirement | Framework Governance review, per M.7 §16 ("requires Framework Governance review and Human Governance approval before canonical promotion"). This document does not assert an ordering or substitution relationship between this requirement and the Review Authority row above beyond what M.7's own text establishes. |
| Approval Authority | Human Governance, per M.7's own current Document Metadata Approval Authority field. |
| Created | 2026-07-30 |
| Last Updated | 2026-08-01 (2026-07-31: same day, in a separate, subsequent act: Human Governance approved this amendment's semantics as reviewed at PR #373 head `2bc0120af0c40aed8abb811da2aec66ef30281b9`, merged into master at commit `d6d823c571b5863d4333214460a7684c4083f24d` — see Approval Record below. This approval-recording step is distinct from, and follows, the independent drafting-completeness readiness-review correction pass recorded earlier the same day — the first governance step performed on this specific artifact since its creation at PR #366: (1) Rule 1a's placement is now stated unambiguously, using the letter-suffix label without renumbering Rules 2–29; (2) added §4, explaining Rule 1a's exact relationship to existing Rule 1; (3) added §5, explaining why `CP-01` remains unresolved by this amendment. Neither pass integrates this amendment into `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`, closes `CP-02`, or affects `UN-01`, Gate C, canonical M.6, or any other artifact. — 2026-08-01: in a further, separate, subsequent act, recorded incorporation of these Human-Governance-approved semantics into the integrated M.7 candidate `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md` — see Incorporation Record below. This integration does not itself constitute complete-artifact review, approval, canonical promotion, `CP-02` closure, or Gate E commencement.) |
| Authorizing Record | Consolidated Versioning Architecture Closure — `CP-02/UN-01 CORRECTION SEMANTICS AND AUTHORITY PATHWAY: Accept` |
| Approval Record | Human Governance approved these amendment semantics — the `Indeterminate` Compatibility Relation type, Direction `Neither`, the evidence-inadequacy boundary, Rule 1a and its approved placement, the corresponding invariant, and VA-21, with explicit preservation of `CP-01` and all other deferred matters — at reviewed PR #373 head `2bc0120af0c40aed8abb811da2aec66ef30281b9`, merged into master at commit `d6d823c571b5863d4333214460a7684c4083f24d`. This approval accepts the amendment semantics only; it does not integrate this amendment into `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`, close `CP-02`, approve or promote M.7, reopen `M.6` or `UN-01`, or open Gate E. |
| Incorporation Record | These approved semantics were incorporated into `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md` §7.1 (Compatibility Relation Model table and evidence-inadequacy boundary paragraph), §8 (Rule 1a), §9 (invariant), and §15 (VA-21) as a separately authorized bounded integration work unit, creating the integrated M.7 candidate. M.7 remains `1.1.0-draft`, Status Draft, not canonically promoted. |
| Resolves | `CP-02` (Reconciliation Assessment: M.7 Rule 1's closed five-type Compatibility Relation enumeration with no textual Indeterminate member — Classification 6, definite semantic conflict) |
| Nature of this document | A drafted amendment whose semantics have been reviewed and approved by Human Governance and incorporated into the integrated M.7 candidate. This document itself is not independently canonical and does not by itself constitute M.7's canonical promotion. `CP-02` remains an open, unresolved definite semantic conflict until that integrated candidate is itself reviewed, approved as a complete artifact, and canonically promoted through M.7's own governance chain. |
| Supersedes | None |
| Superseded By | None |

---

## 1. Exact M.7 Text Being Amended (as it read prior to incorporation)

**M.7 §7.1, Compatibility Relation Model table (as it read prior to this amendment's incorporation):**

| Relation Type | Direction | Definition |
|:---|:---|:---|
| Backward Compatible | Newer → Older | Newer version preserves all consumption interfaces of the older version. |
| Forward Compatible | Older → Newer | Older version's interfaces remain valid under the newer version's contract. |
| Partially Compatible | Either | Compatibility holds within a declared subset of the consumption interface. |
| Conditionally Compatible | Either | Compatibility holds only when specified conditions are met. |
| Incompatible | Either | One or more compatibility relations are broken. |

**M.7 §8, Rule 1** (as it read prior to this amendment's incorporation, and unchanged by it): "Every compatibility assessment must classify into one of the defined relation types."

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
- `Indeterminate` **cannot be silently converted** into any of the other five relation types, or into any substantive numeric version outcome that depends on it. A consuming decision or bump-rule mechanism encountering `Indeterminate`, where a Compatibility Relation determination is materially required, must escalate the determination to an authoritative act, or return its own governed no-established-result outcome — it must never fabricate a substantive compatibility relation to proceed. This M.7 amendment owns only the `Indeterminate` vocabulary, its identity/evidence/evaluation semantics, and the reassessment obligation in §3.3; the name, mechanism, and result formation of any consumer's own governed no-established-result outcome (including any specific bump-rule policy for any entity class) remain owned entirely by the consuming architecture — e.g., the Versioning Architecture — not by this amendment.
- An `Indeterminate` classification still requires an M.2 identity for its relation and an M.5 evidence binding, exactly as every other Compatibility Relation does per M.7 §7.1 and §8 Rule 4 — the evidence, in this case, documents *why* a determination could not be reached, satisfying the non-negotiable evidence-binding requirement rather than exempting `Indeterminate` from it.

### 3.3 Proposed Supporting Rule and Invariant Additions

**Placement (unambiguous):** Insert proposed Rule 1a into M.7 §8 (Semantic Rules) **immediately after existing Rule 1 and before existing Rule 2**, using the letter-suffix label `1a`, **without renumbering existing Rules 2–29**. Every reference to Rule 1a in this document uses this same placement model.

- **Rule 1a (proposed):** A compatibility assessment that cannot be classified into Backward Compatible, Forward Compatible, Partially Compatible, Conditionally Compatible, or Incompatible because required evidence is absent, unavailable, contradictory, unresolved, or outside established evaluation scope must be classified `Indeterminate`, never defaulted to any of the other five types.

Add to M.7 §9 (Invariants):

- **(proposed):** An `Indeterminate` compatibility relation is not itself a compatibility violation; it is a valid, first-class recorded state that triggers a re-assessment obligation once adequate evidence becomes available.

### 3.4 Validation Assertion Addition

Add to M.7 §15:

| # | Assertion | Checkable Criterion |
|:---|:---|:---|
| VA-21 (proposed) | Every compatibility assessment that could not be classified into the five substantive relation types is declared `Indeterminate`, not defaulted to a substantive type | Relation type field is `Indeterminate` whenever the evidence record does not support any of the other five types |

## 4. Exact Relationship Between Rule 1a and Existing Rule 1 Coverage

- The text of Rule 1 is **not directly replaced** by this amendment.
- **Rule 1a introduces one explicit precedence clarification over Rule 1**: the case where required evidence is absent, unavailable, contradictory, unresolved, or outside established evaluation scope, such that no substantive relation type can be established.
- **Without Rule 1a:** Rule 1's closed-set requirement ("must classify into one of the defined relation types") has, prior to this amendment, no member corresponding to the no-adequate-evidence case — an assessment in that case would have to be forced into one of the five substantive types despite the evidence not supporting any of them, or left unclassified in violation of Rule 1's own mandatory-classification requirement.
- **With Rule 1a**, that same no-adequate-evidence case instead becomes `Indeterminate`, satisfying Rule 1's classification requirement without fabricating a substantive relation.
- This amendment therefore **narrows Rule 1's effective outcome** for the bounded no-adequate-evidence case only — it does not touch Rule 1's existing mappings for any case where adequate evidence supports one of the five substantive types.
- Unlike M.6's Rule 8a (which applies identically across three separate rules — Rule 8 for MAJOR, Rule 9 for MINOR, Rule 10 for PATCH), M.7 has only one rule governing closed-set compatibility classification (Rule 1). Rule 1a therefore has a single point of attachment; no equivalent multi-rule scoping question arises for this amendment.

## 5. Why `CP-01` Remains Unresolved

This amendment's narrowing of Rule 1 is **bounded strictly to the no-adequate-evidence case**. It does not decide:

- Whether M.7's single-Compatibility-Relation-type-per-assessed-pair framing (the fifteen-dimension-vs-single-relation-type tension the Reconciliation Assessment records as `CP-01`) is itself acceptable Tier 2 or general Meta-Model policy.
- Whether a richer, multi-dimensional compatibility model would change how, or whether, `Indeterminate` should be represented.

Evidence that is inadequate or non-dispositive — absent, unavailable, contradictory, unresolved, or outside established evaluation scope — falls under Rule 1a and produces `Indeterminate`; it is never part of the `CP-01` question left open here. This amendment **only** prevents Rule 1's existing closed-set requirement from manufacturing a substantive result in the specific case where adequate evidence cannot establish one at all. It takes no position on whether M.7's single-relation-type framing itself should change — a question that arises from Rule 1's own structural scope, not from Rule 1a's evidentiary-adequacy threshold. `CP-01` therefore remains unresolved generally, exactly as recorded at Gate C and confirmed by the Synthesis Readiness and Human Governance Decision Package (STEP 1–8) §9.2.1, which records that neither `CP-02` nor `UN-01` is itself closed by the Gate C pathway decision, both remaining open pending their own amendments' review, approval, and promotion.

## 6. What This Amendment Does Not Do

- Does not alter the existing five relation types' own definitions or rules (§7.2–§7.6 of M.7).
- Does not resolve `CP-01` (the fifteen-dimension vs. single-relation-type tension) — see §5 for why it remains unresolved by this amendment.
- Does not resolve `SV-02`, `VS-Q2`, or `NB-Q3`.
- Does not itself constitute a promoted change to M.7. Human Governance has approved this amendment's semantics (see Document Metadata, Approval Record) and they have been incorporated into the integrated M.7 candidate (see Incorporation Record); `CP-02` remains an open, unresolved definite semantic conflict until that integrated candidate is itself reviewed, approved as a complete artifact, and canonically promoted through M.7's existing Framework Governance / Human Governance chain.
- Does not name, depend on, or acquire a dependency on any specific consuming policy, candidate, or the Versioning Architecture's own structure — see §3.2.
- Does not close `CP-02`, open Gate E, resolve `CP-01`, `SV-02`, `VS-Q2`, or `NB-Q3`, or promote the Versioning Architecture Normative-Intent Draft.

## 7. Promotion Pathway

This amendment's semantics are routed through M.7's own existing promotion authority exactly as declared in M.7's own Document Metadata and §16 Completion/Governance Status: **Framework Governance review**, then **Human Governance approval**, before any canonical promotion. No new authority is invented. Human Governance has approved these amendment semantics (see Document Metadata, Approval Record), and they have been incorporated into the integrated M.7 candidate (see Incorporation Record). This document does not claim that the complete integrated M.7 candidate has itself been reviewed, approved, or canonically promoted.

The incorporation of these semantics into M.7 is recorded at M.7's own §16 Completion/Governance Status and Document Metadata `Last Updated` field (see the M.7 document itself). M.7 remains `1.1.0-draft` and Draft; the exact promoted version designation remains an act for M.7's own approval authority at the future, separately authorized canonical-promotion step.

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

**Placement (unambiguous):** Insert proposed Rule 8a into M.6 §8 (Semantic Rules) **immediately after existing Rule 8 and before existing Rule 9**, using the letter-suffix label `8a`, **without renumbering existing Rules 9–50**. Rule 8a is not appended after Rule 11; every reference to Rule 8a and to Rules 8–10 in this document uses this same placement model.

- **Rule 8a (proposed):** Rule 8a applies identically to MAJOR (Rule 8), MINOR (Rule 9), and PATCH (Rule 10) version transitions. Whenever adequate evidence cannot establish the substantive Migration Obligation result that Rule 8, Rule 9, or Rule 10 would otherwise require for the transition in question — because the necessary evidence is absent, unavailable, contradictory, unresolved, outside the established evaluation scope, or otherwise non-dispositive — the transition must be declared `Undetermined`, never defaulted to `Migration-Needed`, `Migration-Not-Needed`, `Migration-Recommended`, or `Migration-Deferred`. Rule 8a is a bounded precedence exception over Rules 8, 9, and 10 solely in this no-adequate-evidence case. It does not apply, and Rules 8, 9, and 10 retain their existing substantive mappings unchanged, in every case where adequate evidence establishes a substantive Migration Obligation result. Evidence that is thin, contested, contradictory, or otherwise non-dispositive is not adequate evidence; its mere existence does not satisfy Rule 8, 9, or 10 and does not bypass Rule 8a.

Add to M.6 §9 (Invariants):

- **(proposed):** An `Undetermined` Migration Obligation is not itself a version transition defect; it is a valid, first-class recorded state, applicable to MAJOR, MINOR, or PATCH transitions alike, that triggers a re-classification obligation once adequate evidence becomes available.

### 3.4 Validation Assertion Addition

The addition of a fifth Migration Obligation category requires three coordinated changes to M.6 §15, not merely a new assertion: two existing assertions anchor to the current four-category enumeration and must be revised for consistency, and one new assertion is added. All three are non-duplicative: `VA-7` checks category-set membership only; `VA-8` checks the MAJOR case's own evidentiary basis; `VA-25` checks the general Rule 8a adequacy threshold across MAJOR, MINOR, and PATCH alike.

**A. Revise `VA-7`** (current text: "Migration obligation field is one of the four defined categories"):

| # | Assertion | Checkable Criterion (revised) |
|:---|:---|:---|
| VA-7 (revised) | Every version transition declares migration obligation category | Migration obligation field is one of the **five** defined categories (`Migration-Needed`, `Migration-Not-Needed`, `Migration-Recommended`, `Migration-Deferred`, `Undetermined`) |

**B. Revise `VA-8`** (current text: "Evidence of no-consumer-impact is present when MAJOR carries `Migration-Not-Needed`"), so it distinguishes the evidentiary basis for each of the three outcomes a MAJOR transition may now carry:

| # | Assertion | Checkable Criterion (revised) |
|:---|:---|:---|
| VA-8 (revised) | MAJOR increments carry `Migration-Needed` unless adequate evidence establishes otherwise, and never carry `Migration-Not-Needed` or `Undetermined` without their own required evidentiary basis | `Migration-Needed` is recorded when no adequate evidence rebuts it; `Migration-Not-Needed` is recorded only when evidence of no-consumer-impact is present; `Undetermined` is recorded only when Rule 8a applies — i.e., only when evidence, or an explicit record of the absence of adequate evidence, demonstrates that the determination cannot presently be made. Thin, contested, contradictory, or non-dispositive evidence satisfies neither the `Migration-Not-Needed` nor the ordinary `Migration-Needed` evidentiary basis, and does not by itself justify recording anything other than `Undetermined` under Rule 8a. |

**C. Add `VA-25`** (new, immediately following revised `VA-8`):

| # | Assertion | Checkable Criterion |
|:---|:---|:---|
| VA-25 (proposed) | Every MAJOR, MINOR, or PATCH transition whose Migration Obligation could not be determined by adequate evidence is declared `Undetermined`, not defaulted to a substantive category, and not recorded on thin, contested, contradictory, or non-dispositive evidence | Migration Obligation field is `Undetermined` whenever the evidence record does not meet the adequacy threshold Rule 8a defines, for any of MAJOR (Rule 8), MINOR (Rule 9), or PATCH (Rule 10) |

## 4. Exact Relationship Between Rule 8a and Existing Rules 8–10 Coverage

- The text of Rules 8, 9, and 10 is **not directly replaced** by this amendment.
- **Rule 8a introduces one explicit precedence exception, applicable identically to Rule 8 (MAJOR), Rule 9 (MINOR), and Rule 10 (PATCH)**: the case where adequate evidence cannot establish the substantive Migration Obligation result each of those rules would otherwise require (because the necessary evidence is absent, unavailable, contradictory, unresolved, outside established evaluation scope, or otherwise non-dispositive).
- **Without Rule 8a:** Rule 8 resolves an unevidenced MAJOR case into `Migration-Needed` by its own default ("unless evidence demonstrates no consumer action is required" — absent such evidence, the default stands); Rule 9 requires a MINOR case to carry `Migration-Not-Needed` or `Migration-Recommended` even where evidence cannot establish which; Rule 10 requires a PATCH case to carry `Migration-Not-Needed` even where the correction's backward-compatibility is not itself adequately evidenced.
- **With Rule 8a**, each of those same no-adequate-evidence cases instead becomes `Undetermined`, regardless of whether the transition is MAJOR, MINOR, or PATCH.
- This amendment therefore **intentionally changes Rule 8's, Rule 9's, and Rule 10's effective outcome** for the bounded no-adequate-evidence case only. This is not a cosmetic or orthogonal addition — it is acknowledged here as a deliberate, bounded correction to all three rules' behavior in exactly that case.
- **Rules 8, 9, and 10 otherwise retain their existing mappings, unchanged,** in every case where a substantive Migration Obligation result is adequately established by evidence — Rule 8a does not touch those cases.
- **Merely having some evidence does not make it adequate.** Thin, contested, contradictory, or otherwise non-dispositive evidence does not satisfy Rule 8, 9, or 10's own evidentiary basis, and does not silently bypass Rule 8a.

## 5. Why `SV-02`, `VS-Q2`, and `NB-Q3` Remain Unresolved Generally

This amendment's narrowing of Rules 8, 9, and 10 is **bounded strictly to the no-adequate-evidence case**, applied identically across MAJOR, MINOR, and PATCH transitions. It does not decide:

- Whether Rule 8's remaining presumption-plus-rebuttal structure — i.e., its default-to-`Migration-Needed`-unless-rebutted mechanism, in every case where *some* evidence exists, even if thin, contested, or not fully dispositive short of the Rule 8a threshold — is itself acceptable Tier 2 or general Meta-Model policy.
- Whether a rebuttable default of that kind counts as the "automatic mapping" STEP 6 rejected.

This amendment **only** prevents Rules 8, 9, and 10's existing mappings from manufacturing a substantive result in the specific case where adequate evidence cannot establish one at all. It takes no position on the broader rebuttable-default acceptability question outside that bounded corner — a question that arises specifically from Rule 8's own presumption-plus-rebuttal structure for MAJOR transitions, not from Rule 8a's evidentiary-adequacy threshold, and that this amendment does not extend to or resolve for Rule 9 or Rule 10 either. `SV-02`, `VS-Q2`, and `NB-Q3` therefore remain unresolved generally, exactly as recorded at Gate B and carried through the Consolidated Versioning Architecture Closure.

## 6. What This Amendment Does Not Do

- Does not itself constitute a promoted change to M.6. `UN-01` remains an open, unresolved definite semantic conflict until this proposal is reviewed, approved, and promoted through M.6's existing Framework Governance / Human Governance chain.
- Does not name, depend on, or acquire a dependency on any specific consuming policy, candidate, or the Versioning Architecture's own structure — see §3.2.

## 7. Promotion Pathway

This amendment is routed through M.6's own existing promotion authority exactly as declared in M.6's own Document Metadata and §16 Completion/Governance Status: **Framework Governance review**, then **Human Governance approval**, before any canonical promotion. No new authority is invented. This document does not claim that review or approval has occurred.

At promotion time, M.6's own §16 Completion/Governance Status and its Document Metadata `Version`/`Last Updated` fields will require a corresponding update recording the incorporation of this amendment. This document does not perform, anticipate, sequence, or number that update; the exact version designation remains an act for M.6's own approval authority at promotion time.

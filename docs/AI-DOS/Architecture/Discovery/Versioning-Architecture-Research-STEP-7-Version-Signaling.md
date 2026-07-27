# STEP 7 — AI-DOS Product Version Signaling Research

> Non-normative AI-DOS Product discovery evidence · Architecture Discovery · Draft, not yet accepted

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-DISCOVERY-VERSIONING-RESEARCH-STEP-7-VERSION-SIGNALING` |
| Title | STEP 7 — AI-DOS Product Version Signaling Research |
| Version | Not assigned — no numbering, bump-rule, or version-designation-format decision is made by this document. |
| Status | **Draft research evidence.** Not yet reviewed. Not yet accepted by Human Governance. |
| Canonical Status | Non-canonical. Non-normative AI-DOS Product discovery material. Not a Meta-Model, Standard, RFC, or approved architecture. |
| Classification | Architecture Discovery — Research (single bounded pass) |
| Document Type | Research Artifact (Discovery Evidence) |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-25 |
| Last Updated | 2026-07-25 |
| Traceability ID | `AI-DOS-DISCOVERY-VERSIONING-RESEARCH-STEP-7-VERSION-SIGNALING` |
| Scope | Standalone AI-DOS Product research into the Version Signaling problem space: what information a version signal must carry, which AI-DOS entities may emit or consume one, the orthogonal dimensions a signal may need to represent, candidate signaling-model families, and the inputs a later Numbering/Bump-Rule stage would require. |
| Out of Scope | STEP 8 and any later research step; final Versioning Architecture synthesis; selecting, adopting, or ratifying MAJOR.MINOR.PATCH or any other numbering/bump-rule scheme; amendment or promotion of M.4, M.5, M.6, M.7, or any other Meta-Model; promotion of A.6 or A.6.1; resolving `LC-02`, `CP-06`, or `AU-01` by assumption; implementation, validator, packaging, migration, release, or pilot work; STD-011, its Conformance Profile, PR #348, or any Target Standards program work; Forge AI ProjectStatus, Roadmap, DevelopmentPhases, Mission, or other Target planning. |
| Normative Authority | None. This document has no normative authority. It is a research contribution for later, separately authorized synthesis. |
| Relationship to STEP 1–6 Baseline | Builds on the accepted `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-Baseline-STEP-1-6.md` as foundation, per that baseline's own §16 candidate boundary ("A future Version Signaling step"). Does not amend, rewrite, retabulate, or supersede any STEP 1–6 content; every reused STEP 1–6 concept is cited by section, never restated as if newly derived. |
| Relationship to Reconciliation Assessment | Treats `SV-01` and `SV-02` from `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md` using their native identifiers, per that report's own statement that both "remain within the unopened STEP 7 boundary." This document does not resolve, close, or supersede that report or any of its 33 findings. |
| Relationship to A.6 / A.6.1 | Not used as normative authority. A.6.1's own explicit position (§2.1: "The STEP 1–6 Research Baseline is accepted research evidence, not accepted normative architecture" — stated of the Baseline as a whole, not of STEP 4 alone) is treated as directly applicable precedent for how this document treats STEP 1–6: as non-normative research input only. |
| Human Governance Authorization | Explicit selection and authorization of "STEP 7 — Version Signaling" as the next bounded Versioning Architecture work unit, resolving the safe-stop reported by the immediately preceding route-resolution assessment (Decision C). This authorization covers exactly this one research artifact and no other work. |
| Supersedes | None |
| Superseded By | None |

---

## 0. How to Read This Document

This document is a **single bounded research pass**, not a multi-pass corrected program like STEP 1–6. It uses the same first-principles discipline STEP 1–6 established: existing M.6/M.7 behavior, Semantic Versioning, package-manager convention, and existing AI-DOS Draft artifacts (including A.6.1) are treated as **observed input to reason about**, never as automatically correct starting points.

### 0.1 Vocabulary Discipline

Every claim below is tagged with exactly one of the following, per this task's explicit instruction to keep them distinct:

| Tag | Meaning |
|:---|:---|
| **[Convention]** | An observed industry or repository practice, reported descriptively, not endorsed. |
| **[Possibility]** | A design option identified but not evaluated as preferred. |
| **[Conclusion]** | A research conclusion this pass reaches with stated reasoning, itself non-normative. |
| **[Open]** | An unresolved policy choice this research surfaces but does not decide. |
| **[Proposed Rule]** | A candidate rule this research would recommend if adopted — explicitly not adopted by this document. |
| **[HG]** | A matter this research concludes must be a Human Governance decision, not a research conclusion. |

### 0.2 Reused Semantic Foundation

This research reuses, without restating, the seven-layer model (entity → relation/fact → proposition → assertion → record/evidence → decision → standing/applicability) established in STEP 1 (baseline §5.1) and the STEP 2 Orthogonal Change Model's eight axes (baseline §6.2), citing them by locator wherever load-bearing.

---

## 1. Work Unit Record

**Work unit type:** Bounded, standalone AI-DOS Product research (not Forge AI Target Project work; ProjectStatus/Roadmap/DevelopmentPhases/Mission not read as scope or priority authority).

**Fresh reads performed for this work unit, in full, at current master:**

- `AGENTS.md` (root) — `FORGE-AI.REPOSITORY-ENTRY` v1.2.0
- `docs/Projects/ForgeAI/Mission/AGENTS.md` — `FORGE-AI.TARGET.AGENTS-CONTRACT` v1.10.0-draft (read only to confirm this work is *not* Forge AI Target execution and to avoid its resolution order; no Target-owned content consumed)
- `docs/AI-DOS/AGENTS.md` — `AI-DOS.PROVIDER-ENTRY` v1.6.0
- `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-Baseline-STEP-1-6.md` — complete, all 17 sections, all 153 stress tests, source manifest, correction ledgers, logical necessities, policy questions, actual-blockers statement, and candidate-boundary list
- `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md` — complete, all 33 rows and synthesis
- `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md`, `M.5-Evidence-Meta-Model.md`, `M.6-Versioning-Meta-Model.md`, `M.7-Compatibility-Meta-Model.md` — each read for its Core Definitions and Semantic Rules sections; M.6 §7.4–§7.13 and §8, M.7 §7.1–§7.9 and §8, and M.5 §7.2 read in full
- `docs/AI-DOS/Architecture/RFC/Distribution/A.6-AI-DOS-Distribution-Foundation-RFC.md` and `A.6.1-AI-DOS-Package-Manifest-Schema-RFC.md` — complete (read in the immediately preceding work unit this session; re-confirmed unchanged against current master before drafting)

**Not read, deliberately, per this work unit's authorization boundary:** STD-011, its Conformance Profile, PR #348, any Target Standards artifact, A.3–A.5 Runtime/Engine architecture, Forge AI ProjectStatus/Roadmap/DevelopmentPhases content.

**Base repository state:** `origin/master` at `b753ee459c7d153c9ecfd2a22e45bf281164d4e3`, reconfirmed by fresh `git fetch` immediately before this work unit began (unchanged from the two immediately preceding turns).

---

## 2. Method

Per instruction, this research does not treat current M.6/M.7 behavior, SemVer, package-manager convention, or existing AI-DOS Draft artifacts as automatically correct. Where such a convention is used as an example, it is explicitly tagged **[Convention]** and evaluated, not assumed.

Each numbered proposition below answers one or more of the eighteen required investigation points (§ references are to this document's own §5).

---

## 3. Reused Foundation (traceability only — no STEP 1–6 content rewritten)

| Reused concept | STEP 1–6 locator | How this research uses it |
|:---|:---|:---|
| Seven-layer semantic model | Baseline §0.1, §5.1 | Applied to the version signal itself as an assertion/record, not only to what it signals (§5, P-14) |
| Eight-axis Orthogonal Change Model | Baseline §6.2 | Axis H ("insufficient information for a conclusion") reused directly for §5 P-13; Axis C's set-valued discipline reused for §5 P-3/P-4 |
| Fifteen-dimension Compatibility Model, never collapsed to a binary | Baseline §7.2 | Directly informs §5 P-4's multi-dimensionality conclusion by analogy |
| Seven declared/realized composition stages | Baseline §8.3 | Reused for §5 P-15 (composition-level signal never inferred from constituent signals) |
| Historical Operations Taxonomy (14 operations) | Baseline §9.5 | Cited in §5 P-10 for STEP 5's general operation-representability discipline; §9.5's fourteen operations do not themselves include fork or reset |
| Orthogonal Change Model Axis B (fork, regenerate, re-evaluate) | Baseline §6.2, via reconciliation `LS-03` | Source for §5 P-10's fork treatment. "Reset" is not a STEP 1–6 or reconciliation term; it is introduced by this STEP 7 document itself, by analogy to STEP 1's derivative-identity rule (baseline §5.3) |
| Migration ontology (9 objects), removal of automatic mappings | Baseline §10.2, §10.4 (S6.1) | Directly informs §5 P-9 |
| Reconciliation `SV-01` | Reconciliation §2, row `SV-01` | Treated in §6.1 below |
| Reconciliation `SV-02` | Reconciliation §2, row `SV-02` | Treated in §6.2 below |
| Reconciliation `CP-02`, `UN-01` (definite conflicts) | Reconciliation §2 | Reused as direct evidence for §5 P-13's Indeterminate/Undetermined requirement |
| Reconciliation `UN-02` (DAG lineage, Aligned) | Reconciliation §2 | Reused for §5 P-10 |
| A.6.1's research-input boundary discipline | A.6.1 §2.1 | Reused as the template for how this document itself treats STEP 1–6 (informs, does not authorize) |

---

## 4. What a Version Signal Must Communicate — Candidate Dimension List

**[Conclusion]** Before asking what *format* a version takes, the corpus (STEP 1–6 plus the reconciliation report's live findings) supports identifying at least eight orthogonal candidate dimensions a "version signal" is colloquially asked to carry, none of which this research treats as reducible to another:

| Dimension | What it communicates | Nearest existing AI-DOS anchor |
|:---|:---|:---|
| Identity | Which entity, distinct from any other entity, this signal is attached to | M.2 identity; unresolved for Release (`RC-01`/`RC-02`) |
| Revision | Position within one entity's own identity-preserving change sequence | M.6 §7.7 Lineage Chain; STEP 1 §5.2 Contract-class |
| Release | That a deliberate boundary-crossing availability act occurred | Baseline §5.1 "release" definition; A.6 §1 Decision |
| Compatibility | The compatibility relation(s) this version holds toward other versions | M.7 §7.1; STEP 3 §7.2 (fifteen dimensions) |
| Lifecycle | Governance-process standing (Draft/Review/Canonical/Deprecated/etc.) | M.4 §7.2 State Model |
| Channel | Confidence/support posture (Experimental/Preview/Stable/LTS/Emergency) | A.6 §8 |
| Maturity/Certification | Whether the artifact passed a certification process. Note: current M.4 §7.2 treats "Certified" as one of its own status categories, derived from lifecycle state, not as an axis independent of it (§7.3: "status categories are derived from state") | M.4 §7.2 (Certified status category); §7.5 (canonical status ≠ correctness) |
| Migration | Whether and how downstream consumers must act | M.6 §7.10 Migration Obligation |

**[Open]** Whether this eight-item list is exhaustive is itself unresolved; §5 P-1 below treats it as a floor, not a ceiling.

---

## 5. Propositions

### P-1 — What information a version signal must communicate

**[Conclusion]** A version signal's minimum communicative floor is the eight dimensions in §4, each independently variable. This reuses, by direct structural analogy, STEP 3's refusal to reduce compatibility to a breaking/non-breaking binary (baseline §7.2): if fifteen compatibility dimensions cannot collapse to one verdict, there is no established basis for assuming eight signaling dimensions collapse to one scalar value either. The list is a floor because STEP 1–6 explicitly declined to close its own entity-family enumeration (baseline §5.2, "12 families + 1 deliberately unassigned slot"); new entity classes could surface additional dimensions this research did not anticipate.

### P-2 — Which AI-DOS entity classes may emit or consume version signals

**[Conclusion]** Applying STEP 1's entity-family model (baseline §5.2) directly: **candidate emitters** include Contract-class entities (Meta-Models, Standards, schemas, workflow/capability definitions), Release-class entities (AI-DOS releases — identity unresolved), Realization-class entities (provider implementations), and Relational/Compositional-class entities (compatibility declarations, per M.7). **Candidate consumers** include any of the above plus Decision-record and Record-class entities that cite a version (M.5 evidence items binding to a Version Claim, per M.6 §7.13). Anchor-class entities (AI-DOS Product, Target Project) are **[Open]**: STEP 1 treats Anchor-class continuity as absorbing change without forking, which raises whether an Anchor-class entity emits its own top-level version signal or only aggregates constituent signals — not resolved by STEP 1–6 and not resolved here.

### P-3 — Identity / revision / release / compatibility / lifecycle / channel / maturity / migration signal distinction

**[Conclusion]** These are not merely conceptually distinct (§4) but **independently variable in practice**: a Draft-lifecycle artifact can hold a Stable channel commitment for its schema (A.6.1 §4.1's Schema Version is `1.0.0-draft` while the RFC itself is Draft — two different standing values on the same artifact, confirming this is not a hypothetical). Conflating them into one field is the same failure mode STEP 1 identified for capability decomposition (baseline §5.3, "8 distinct objects, not 1") and that the reconciliation report separately flagged as a live defect at `CP-02`/`UN-01` — both are cases where a Meta-Model forces one closed-set field to carry a distinction (compatibility relation type; migration obligation category) that itself needs an "unresolved" value alongside its substantive values, i.e., needs to vary independently of whatever else the field is asked to carry.

### P-4 — Whether a single version value can represent all required dimensions

**[Conclusion]** No single scalar or single composite-numeric value (of the MAJOR.MINOR.PATCH shape or otherwise) can losslessly represent all eight §4 dimensions without collapsing distinctions this research (and STEP 1–6 before it) found necessary to keep separate. This mirrors `CP-01`'s finding (reconciliation report) that M.7's single-relation-type-per-assessment framing is in apparent conflict with STEP 3's requirement that a pair be simultaneously compatible along some dimensions and incompatible along others. **[Open]** Whether AI-DOS should therefore adopt (a) one composite structured value with named sub-fields, (b) several independently-versioned fields, or (c) one primary ordering signal plus several separately-governed metadata signals is not decided here — see §7 (Alternatives).

### P-5 — Signaling model families

**[Possibility]**, presented as alternatives, decision criteria stated, no family selected:

| Family | Mechanism | Strength | Limitation |
|:---|:---|:---|:---|
| Numeric composite (SemVer-shaped) **[Convention]** | `MAJOR.MINOR.PATCH` ordered triple | Total order within one lineage; widely tooled | Encodes only revision + a rebuttable migration-obligation signal (M.6 §7.4, §8 Rules 8–10); carries no identity, channel, lifecycle, or compatibility-direction information on its own |
| Calendar-based (CalVer) **[Convention]** | Date-derived components | Communicates recency directly | No inherent compatibility or migration signal; ordering degrades if multiple releases share a period without a disambiguating component |
| Ordinal/monotonic counter | Strictly increasing integer per lineage | Simple total order; trivially comparable | Carries no semantic content beyond sequence; says nothing about compatibility, channel, or migration without an external mapping |
| Content-derived / opaque (digest-based) | Hash of content | Identity-strong; detects any content difference | Explicitly rejected by STEP 1 (baseline §12, "byte/representation equality never establishes identity") as sufficient for entity identity; provides no ordering at all (two digests are not comparable) |
| Structured multi-field | Independent, separately-versioned fields per §4 dimension | Matches P-4's conclusion directly; no forced collapsing | Higher representational cost; requires a canonicalization/comparison discipline per field (cf. A.6.1 §11's approach, itself bounded to one RFC's own scope) |
| Symbolic/channel-primary | Channel or maturity label as the primary signal, revision as secondary | Foregrounds the dimension consumers usually act on first (channel) | Under-communicates fine-grained revision ordering within a channel |
| Hybrid/composite | A primary ordering component (e.g., numeric) plus a bounded set of orthogonal metadata fields | Can satisfy P-4 while preserving SemVer-shaped tooling compatibility for the ordering component | Requires the same closed-set-with-reserved-Undetermined discipline as P-13, or it reproduces `UN-01` at the AI-DOS level |

**Decision criteria surfaced, not adjudicated:** tooling compatibility with existing package-manager ecosystems **[Convention]**; whether AI-DOS requires cross-scope comparability (Framework vs. Domain vs. Artifact vs. Schema vs. Contract, per M.6 §7.2) under one scheme; whether the still-unresolved Release scope level (`RC-01`/`RC-02`) must be settled before any family can be scoped correctly for releases specifically.

### P-6 — Role and limitations of MAJOR.MINOR.PATCH

**[Conclusion]** Within M.6's current text, MAJOR.MINOR.PATCH (§7.4) functions as exactly one thing: a **revision-ordering-plus-rebuttable-migration-obligation-default** signal, scoped to whatever M.6 §7.2 scope level it is assigned to. It is not, by M.6's own text, an identity signal (identity is the separately-declared Version Designation, M.6 §7.3, aligned with STEP 1–6 per `VI-03`), not a channel signal (A.6 §8 defines channel independently), and not a lifecycle signal (M.4 §7.2 defines state independently). Treating it as if it communicated all eight §4 dimensions would be a category error this research declines to make, consistent with `LS-05`'s finding that M.6's existing constructs are legitimately narrower in scope than the fuller models they specialize.

### P-7 — Signal scope: artifact, release, package, schema, declaration, implementation, evidence, composed distribution

**[Conclusion]** M.6 §7.2 already declares five scope levels (Framework, Domain, Artifact, Schema, Contract). The reconciliation report's `RC-02` finding — confirmed still unresolved by fresh reading of current M.6 — is that **no "Release" scope level exists**, and by direct extension, no "Package" or "composed distribution" scope level exists either, even though A.6 §5 and A.6.1 §5 both require a release and a package to carry version-adjacent identity and compatibility fields today. **[Open]** Whether Release/Package require their own new scope level(s), or resolve to compositions of existing Artifact/Schema/Contract-scoped signals (per STEP 4's composition model, baseline §8.3), is exactly the boundary `RC-01`/`RC-02` already marked unresolved; this research does not narrow that boundary further, consistent with the authorization boundary's exclusion of Meta-Model amendment.

### P-8 — Pre-release, draft, experimental, candidate, stable, deprecated, withdrawn, superseded

**[Conclusion]** Fresh reading of current M.4, M.6, and A.6 confirms these values are not one enumeration but at minimum three independently-governed axes, each already separately defined in the repository:

| Axis | Owning artifact | Values (current) |
|:---|:---|:---|
| Lifecycle state | M.4 §7.2 | Draft, Review, Canonical, Deprecated, Archived, etc. (M.4's own state model) |
| Channel | A.6 §8 | Experimental, Preview, Stable, Long-term Support, Emergency |
| Supersession/replacement history | M.6 §7.7 (Supersession/Replacement) | superseded, replaced-and-withdrawn, amended-in-place |

"Candidate" maps to STEP 4's three-way Release-candidate identity policy (baseline §8.7, `CMP-07`), itself still an open policy choice, not a fourth signaling axis. **[Proposed Rule]**, offered only as a candidate for the later synthesis stage, not adopted here: a version signal should never collapse these three axes into one enumerated field, for the same reason `CP-01` and `LC-02` flag collapsing standing/applicability/state as at minimum an unresolved representational question.

### P-9 — Compatibility and migration information that must not be inferred solely from a version number

**[Conclusion]** STEP 6's own governing correction (baseline §10.4, source S6.1: "every automatic mapping was removed") together with STEP 2 Axis H's "insufficient information for a conclusion" value (baseline §6.2) directly establishes: no version-number shape may, by itself, entail a specific compatibility relation or migration obligation without evidence. M.6 §8 Rules 8–10 already reflect this partially (a *rebuttable* default, not an unconditional mapping) — this is the exact subject of `SV-02` (§6.2 below). This research's conclusion is narrower than `SV-02`'s open policy question: regardless of how `SV-02` is eventually decided, the version signal's *encoding* must always leave room for the evidence-bearing override to be represented, or the rebuttable default becomes unrebuttable in practice merely because no field exists to record the rebuttal.

### P-10 — Ordering, comparison, uniqueness, monotonicity, reset, fork, and lineage semantics

**[Conclusion]** Reusing `UN-02` (Aligned: M.6's DAG lineage model satisfies STEP 5's partial-ordering requirement, baseline §9.3) and `LS-03` (fork/regeneration/reassessment absent from M.6's operation vocabulary): a version signal's comparison model must support a **directed acyclic graph**, not force a total order, because branching (M.6 §7.11 Version Branch) and merging are already first-class M.6 concepts. Monotonicity is guaranteed only *within one continuous lineage segment* (M.6 §8 Rule 15, "no gaps"), never globally across forks. "Reset" (e.g., a fork restarting its own numeric sequence) is, per STEP 1's derivative-identity rule (baseline §5.3), an **identity question** — whether the fork is a new entity or a continuation — not a defect in the numbering scheme itself; a signaling model must be able to represent a reset without that representation alone resolving the identity question.

### P-11 — Human-readable versus machine-readable representations

**[Conclusion]** No STEP 1–6 or Meta-Model text read in this pass asserts these must be identical. M.2 §7.4 (Canonical Reference Model, consumed by A.6.1 §4.1) already establishes a canonical-identity-versus-display distinction for artifact identity generally; extending that same distinction to version signals specifically is a direct, low-risk analogy, not a new derivation. **[Open]** Whether AI-DOS requires a single canonical machine representation with unlimited display forms, or a bounded, governed set of display forms, is not decided here.

### P-12 — Canonical value versus display form and transport serialization

**[Conclusion]** A.6.1 §11 already draws exactly this line for its one bounded artifact (the package manifest): canonicalization rules apply "for comparison purposes only" and do not constrain "the serialized storage order a package format may use" (A.6.1 §11, `PMS-N-02`). This research treats that as informative precedent, not as a generalized rule — A.6.1 itself states its provisions are "this RFC's own Draft design proposal," not inherited normative content (A.6.1 §2.1) — but flags it as directly relevant input for whichever future stage designs the general version-signal serialization contract.

### P-13 — Unknown, Indeterminate, Undetermined, and not-applicable states

**[Conclusion]** This is the point in the research where `CP-02` and `UN-01` (both confirmed still-live Classification-6 definite conflicts against current M.6/M.7, per the immediately preceding route-resolution assessment) most directly bear on Version Signaling. STEP 2 Axis H explicitly includes "insufficient information for a conclusion" as a legitimate value (baseline §6.2); STEP 3 stress tests 23–24 (baseline §7.8) require Indeterminate be a *representable, non-fabricated* outcome, both for underspecified claims and for conflicting evidence. **[Conclusion]** Any version-signal encoding for the compatibility and migration-obligation dimensions (§4) must reserve an explicit "not established" value for each, or it inherits `CP-02`/`UN-01`'s defect at the signaling-format level, not merely at the Meta-Model rule level. This is a research conclusion about what the *encoding* must be able to represent; it is not itself a resolution of `CP-02` or `UN-01` (which are M.6/M.7 amendment matters, out of this work unit's authorization).

### P-14 — Signal provenance, authority, confidence, and historical integrity

**[Conclusion]** Applying STEP 5's provenance/evidence model (baseline §9.7) and the seven-layer model directly to the version signal itself, not only to what it signals: a version signal is an **assertion** (Layer 4) backed by a **record** (Layer 5), issued under an **assigning authority** (M.6 §7.13 Version Authority Binding), and it may itself later be reassessed, corrected, or revoked — Layer 6/7 events — **without altering the historical fact that the original signal was asserted** (baseline §9.1's Historical Integrity definition, reused directly). A version signal's own confidence/quality profile is itself an M.5 Evidence Item candidate (M.5 §7.2) when the signal is used to support a downstream claim (e.g., a compatibility claim under M.7 §6). **[Open]** Whether every version signal requires a bound M.5 evidence item, or only those supporting a downstream claim, is not decided here.

### P-15 — Multi-artifact and multi-component release signaling

**[Conclusion]** Directly reusing STEP 4's composition model (baseline §8.3, seven declared/realized stages) and its cascade rule (baseline §8.10, "composition-level compatibility never inferred from pairwise results," itself the subject of `CP-01`): a release-level or package-level version signal is a **composition** of constituent signals, and the composed signal's own compatibility/migration/lifecycle values must never be mechanically derived from the constituents' individual values without an explicit, separately-evidenced composition-level assessment. This is the same principle A.6.1 §7.2 already applies at the constituent-role level ("a manifest shall not... combine role and reference mode") extended one level up, to the release/package as a whole.

### P-16 — Failure modes: false precision, overloaded signals, implicit policy

**[Conclusion]** Three concrete failure modes are directly traceable to specific corpus findings:

- **False precision** — asserting a compatibility or migration value with more certainty than the underlying evidence supports. Directly the subject of STEP 3's "lack of evidence is never evidence of incompatibility" (baseline §7.4, aligned with `CP-04`).
- **Overloaded signals** — one field asked to carry more than one of the §4 dimensions. The subject of P-3/P-4 above and `CP-01`.
- **Implicit policy** — a version-number shape silently entailing a governance decision (e.g., MAJOR-bump silently entailing Migration-Needed with no evidence field to rebut it) without an explicit, evidenced record. The subject of P-9 above and `SV-02`.

**[Conclusion]** All three failure modes share one root cause this research identifies: collapsing an assertion (Layer 4) into a decision (Layer 6) without the intervening evidence (Layer 5) the seven-layer model requires — the same discipline STEP 1 §5.1 states as its central corrected principle.

### P-17 — Decisions that must remain reserved for Human Governance

**[HG]** This research identifies the following as decisions it explicitly does not make, consistent with the authorization boundary:

1. Whether to adopt MAJOR.MINOR.PATCH, a structured multi-field model, another §5 family, or a hybrid combination of families (`SV-01`).
2. Whether M.6's rebuttable MAJOR→`Migration-Needed` default (§8 Rules 8–10) is the correct default, given STEP 6's non-inference-chain principle (`SV-02`).
3. Whether previously-accepted entities are grandfathered under a changed version policy (`CP-06`).
4. Whether M.4's single-state Invariant 1 is intended to represent, or substitute for, the baseline's standing/applicability duality (`LC-02`) — directly relevant to P-8's three-axis conclusion.
5. Whether version metadata (as opposed to content) may be corrected pre-reliance without triggering M.6's assignment-time immutability invariant (`AU-01`).
6. Whether Release/Package require a new M.6 scope level, or resolve through composition of existing scopes (`RC-01`/`RC-02`).

None of these is decided, opened, or advanced by this document.

### P-18 — Inputs this research must hand to a later Numbering/Bump-Rule stage

**[Conclusion]** If a later, separately authorized stage undertakes numbering/bump-rule synthesis, this research identifies the following as its required inputs, none of which that later stage should need to rediscover:

1. The eight-dimension floor list (§4) and the P-4 conclusion that no single scalar represents all of them.
2. The §5 family alternatives table and its stated (not adjudicated) decision criteria.
3. The scope-level gap for Release/Package (P-7, `RC-01`/`RC-02`).
4. The mandatory-Indeterminate/Undetermined encoding requirement (P-13, tied to `CP-02`/`UN-01`).
5. The provenance/evidence-binding requirement for signals supporting downstream claims (P-14).
6. The composition-level, never-inferred-from-constituents rule (P-15, `CP-01`).
7. The three-axis (lifecycle/channel/supersession) non-collapse finding (P-8).
8. The explicit Human Governance decision list (P-17), including `SV-01` and `SV-02` by their native identifiers.

---

## 6. Explicit Treatment of SV-01 and SV-02

### 6.1 `SV-01`

Reconciliation report position (verbatim classification): *"Classification 9 — Human Governance policy decision required... the numbering-scheme question remains squarely within the unopened STEP 7 / Version Signaling boundary and is not resolved, opened, or advanced by this report."*

**This research's treatment:** `SV-01` asks *which* numbering/bump-rule scheme AI-DOS should adopt. This document's §5 (P-4, P-5, P-6) develops the **problem space** `SV-01` sits inside — the dimension list a scheme must cover, the family alternatives, and MAJOR.MINOR.PATCH's actual (narrower-than-assumed) scope — without selecting among them. `SV-01` remains exactly as open after this document as before it; what has changed is that the decision now has a stated set of dimensions and alternatives to decide among, rather than being posed as a bare yes/no on SemVer.

### 6.2 `SV-02`

Reconciliation report position (verbatim classification): *"Classification 5 — Apparent semantic conflict... M.6's rebuttable default is close to, but not identical to, the unconditional automatic mapping STEP6 removed; whether a rebuttable default counts as the kind of mapping STEP6 rejected is not resolved by either text... bound up with the same numbering/version-signaling policy question as SV-01."*

**This research's treatment:** P-9 and P-16 above narrow `SV-02` without resolving it: this research concludes that *regardless* of whether M.6's rebuttable default is ultimately judged acceptable, the version-signal **encoding** must carry a field capable of recording the rebuttal (evidence overriding the default) or the "rebuttable" character of the default is representationally meaningless. This is a conclusion about what the signal format must support, not a conclusion about whether the default itself is correct policy — that remains `SV-02`'s open Human Governance question, listed again at P-17 item 2.

---

## 7. Alternatives and Trade-offs (consolidated)

The §5 P-5 family table is this research's primary alternatives analysis. No family is selected. The stated, unresolved decision criteria are: (a) existing package-manager tooling compatibility **[Convention]**; (b) whether cross-scope comparability under one scheme is required; (c) resolution of the Release/Package scope-level gap (`RC-01`/`RC-02`); (d) whether AI-DOS Human Governance prioritizes representational completeness (favoring the structured multi-field or hybrid families) over ecosystem familiarity (favoring the numeric-composite family).

---

## 8. Stress Tests (18; uniform nine-column field set, reused from baseline §0.1)

| # | Case | Actual fact | Assertion/evidence | Record/decision | Historical standing | Current standing/applicability | Uncertainty | Principle/model result | Policy question |
|---|---|---|---|---|---|---|---|---|---|
| 1 | A release is tagged `2.0.0` with no accompanying compatibility claim | No compatibility relation independently established | Version number alone asserted | No M.7 claim record exists | N/A | Compatibility: not established (never inferred from the number alone) | Whether a consumer will treat the MAJOR bump as sufficient evidence anyway | Reuses baseline §7.4 "lack of evidence is never evidence of incompatibility"; a bare number is not evidence of anything beyond ordering | Whether AI-DOS tooling should refuse to treat a bare version bump as a compatibility claim |
| 2 | An artifact's schema is Stable-channel while the artifact's own lifecycle state is Draft | Two independently true facts on one entity | Both declared separately (A.6.1 §4.1 pattern) | Two separate records, no conflict | N/A | Channel=Stable; Lifecycle=Draft; both current, non-contradictory | Whether tooling conflates the two | Confirms P-8's three-axis non-collapse with a live repository example (A.6.1 itself) | None major |
| 3 | Two forked lineages both restart their PATCH counter at 0 after diverging from the same MAJOR.MINOR | Same numeric value, two different entities' revision sequences | Fork asserted at the branch point (M.6 §7.11) | Branch record declares point and purpose | Pre-fork lineage held, unaffected | Numeric identity does not imply entity identity post-fork | Whether the two `X.Y.0` values are ever compared directly | Reuses STEP 1 baseline §12 (byte/representation equality never establishes identity), extended to version-number equality | Whether cross-fork version-number comparison should be disallowed entirely or merely flagged |
| 4 | A MAJOR bump is issued with evidence that no consumer action is required | Increment shape signals `Migration-Needed` by M.6's default; evidence rebuts it | Both the increment and the rebuttal evidence are asserted | M.6 §8 Rule 8's default plus a rebuttal record | N/A | Migration obligation: `Migration-Not-Needed`, evidence-overridden | Whether the signal format has a field to carry the rebuttal | Directly tests §6.2's `SV-02` treatment: without a rebuttal field, the "rebuttable" character is unusable in practice | Whether M.6's default should require the rebuttal field to exist before the default itself is usable |
| 5 | A compatibility claim is asserted with conflicting evidence from two evaluators | Actual relation has some determinate value independent of the disagreement (per baseline §7.8 test 24) | Both evaluations recorded, neither discarded | Adjudication pending | Both evaluations stand historically | Indeterminate due to conflicting evidence — must be representable in the signal, not fabricated | Which evaluator is correct | Directly tests P-13: an encoding without an Indeterminate value would force a fabricated verdict here, reproducing `CP-02` | Adjudication authority for evaluator conflicts |
| 6 | A package manifest declares `Migration-Not-Needed` for its whole release while one constituent individually carries `Migration-Needed` | Composition-level and constituent-level values genuinely differ | Both declared independently | Two separate records | N/A | Release-level claim does not automatically follow from constituent-level claims, or vice versa | Whether this divergence is itself an error or a legitimate scoped outcome | Directly tests P-15's composition-cascade rule (never infer composition-level from constituents alone) | Whether release-level claims must be reconciled against constituent-level claims before acceptance |
| 7 | A version signal's assigning authority is later found to have lacked authorization at assignment time | The signal was asserted; whether it was validly authorized is now contested | Original assertion occurred regardless | Original record unaffected; a new authority-validity finding is a separate record | Signal held, historically, as asserted | Current validity of the authorization is now in question; the assertion's occurrence is not | Whether downstream claims relying on this signal are retroactively invalid | Reuses baseline §9.1 (historical fact of occurrence is unalterable; current standing is separately variable), applied to signal authority specifically | Cascade policy for downstream reliance on an unauthorized signal |
| 8 | A display-form version string (`v2.0`) diverges from its canonical machine value (`2.0.0-draft+build.417`) | Two representations of one canonical identity | Both declared, one marked canonical (P-11/P-12) | Canonicalization rule per artifact's own governing contract | N/A | Display form is informational only; canonical value governs comparison | Whether consumers ever compare display forms directly | Reuses A.6.1 §11's canonicalization-for-comparison-only precedent, generalized as informative, not binding, input | Whether AI-DOS requires one canonical display convention repository-wide |
| 9 | A schema version is bound immutably to one RFC's own document version (A.6.1 §4.1 pattern), and the RFC is later corrected (PATCH) | Schema Version and RFC Document Version move together by this RFC's own design choice | Explicit binding declared | Binding recorded per M.9 §7.3 discipline | N/A | A PATCH to the RFC requires an explicit new Schema Version Binding, not an implicit one | Whether this 1:1 coupling generalizes beyond A.6.1's own bounded case | Confirms P-12: A.6.1's approach is informative precedent, not yet a general rule | Whether future schema-bearing RFCs should follow the same coupling by default |
| 10 | A Target Declaration Profile references a version range (`>=1.0.0 <2.0.0`, M.6 §7.12) for a scope level that does not yet exist (Release) | The Version Range mechanism exists; the scope it would need to apply to (Release) has no declared M.6 scope level | Range declared against an undeclared scope | N/A — cannot be validated against a scope that does not exist | N/A | Not evaluable until the P-7/`RC-01`/`RC-02` scope-level gap is resolved | Whether this is a present defect or a documented future dependency | Directly demonstrates P-7's practical stakes: the scope-level gap is not abstract, it blocks a mechanism M.6 already defines (Version Range) from applying to Release | Whether Release requires its own M.6 scope level before Version Range can be used for releases |
| 11 | A version signal carries a Migration Obligation of `Migration-Deferred` with no declared Migration Window | M.6 §8 Rule 30 requires a window when obligation is `Migration-Needed` or `Migration-Deferred` | Obligation declared; window omitted | Incomplete record per M.6's own rule | N/A | Non-conformant per M.6, independent of this research | Whether the omission is a signal-format defect or an authoring error | Confirms P-16's "implicit policy" failure mode: an obligation without a window silently defers the actual migration deadline decision | N/A — M.6's own existing rule already governs this; not reopened here |
| 12 | Two independently-versioned constituents of one release both claim to be "Stable channel" but were validated under different evidence standards | Same channel label, different underlying evidence rigor | Both declared Stable | Each constituent's own record | N/A | Channel label alone does not communicate evidence rigor — a ninth candidate dimension this research did not enumerate in §4 | Whether "evidence rigor" is a distinct ninth dimension or subsumed within P-14's provenance/confidence treatment | Tests §4's "floor, not ceiling" caveat directly; surfaces a candidate omission | Whether a ninth dimension (evidence rigor / validation depth) should be added to the §4 floor list |
| 13 | A version signal is asserted, then the entity it describes is later reclassified under a different identity model | The signal's original assertion is unaffected by the later reclassification | Original assertion stands | Reclassification is a new, separate record | Signal held, historically, under the original identity model | Current interpretation of the signal may require translation under the new identity model | Whether translation is automatic or requires a new assertion | Reuses baseline §9.1 Historical Integrity discipline: reclassification never retroactively rewrites the original signal | Whether identity-model changes require re-signing existing version signals |
| 14 | A consumer declares a minimum Schema Version requirement (M.6 §8 Rule 38) that is satisfied by a MINOR-newer schema version it has never seen | Additive-only guarantee assumed (per MINOR's definition, M.6 §7.4) but not independently verified for this specific addition | Minimum-version declaration exists; no specific compatibility test performed | N/A | N/A | Compatibility assumed, not established — the same "additive is not universally safe" finding from baseline stress test 8 (STEP 1 and STEP 2) | Whether MINOR's "backward-compatible additions" definition is itself ever violated in practice | Confirms P-9: even MINOR's own definition is a declared, evidence-requiring claim, not a self-proving guarantee | Whether minimum-version declarations require accompanying compatibility evidence, not just a version-range check |
| 15 | A generated derivative artifact inherits its generator's version signal by default | Generator's signal describes the generator, not necessarily the derivative | Inheritance asserted as a convenience, not evidenced | No separate record for the derivative's own signal | N/A | Derivative's actual compatibility/identity signal is not established merely by inheritance | Whether any generated-derivative class legitimately shares its generator's signal | Reuses STEP 1's generated-artifact-fork correction (baseline §5.3) and A.6.1 §15.1 ("a generated constituent is never validated merely because its generator is trusted") | Whether generated derivatives require their own independently-evidenced version signal by default |
| 16 | A version signal's compatibility field is left blank because no assessment was ever performed | Actual relation: unknown, not "compatible" | No assessment occurred | No record | N/A | Must render as not-established, never defaulted to a substantive value | Whether tooling defaults blank fields to a permissive or restrictive value | Directly tests P-13/P-16: defaulting a blank field to any substantive value is exactly the false-precision failure mode | Whether AI-DOS tooling must hard-fail (safe-stop) rather than default on a blank compatibility field |
| 17 | A version signal is transported through a serialization format that silently drops an unrecognized field (e.g. a new dimension added later) | The canonical value still carries the full set of dimensions; the transport copy does not | Canonical record intact; transported copy incomplete | Transport is not itself a new record of the canonical value | N/A | Transport-copy incompleteness does not alter canonical standing, but consumers relying only on the transport copy hold a degraded view | Whether silently-dropped fields are ever detectable downstream | Tests P-12's canonical/transport distinction under an adversarial (lossy-transport) condition not covered by A.6.1's own narrower scope | Whether AI-DOS requires transport formats to fail loudly, rather than silently drop, unrecognized version-signal fields |
| 18 | Two version signals for the same entity are asserted by two different authorities without either being aware of the other | Two assertions exist; at most one can be the assigning authority's actual valid signal, absent an explicit multi-authority policy | Both asserted, both recorded | No adjudication yet | Both held, historically, as asserted | Current validity of either, or both, is unresolved pending adjudication | Whether multi-authority assignment is ever legitimate (e.g., co-governed artifacts) | Directly reuses baseline §7.8 stress test 24's conflicting-evaluator discipline, applied to assigning authority itself rather than to an assessment | Whether AI-DOS permits more than one assigning authority per entity, and if so, how conflicts are adjudicated |

---

## 9. Correction Ledger

This is a single bounded research pass, not a multi-accepted-pass program like STEP 1–6; the following are self-corrections made during this same pass, disclosed per the required rigor rather than silently smoothed over.

1. **Initial framing corrected:** this research initially treated "a version" as a single Contract-class-like object with one governing record (mirroring M.6's existing Version Anatomy, §7.3, read early in this pass). On working through STEP 3's fifteen-dimension compatibility model and the reconciliation report's `CP-01` finding, this was corrected to treat a version **signal** as potentially composite — a set of independently-variable assertions bound to one entity, not one assertion. This correction produced §4's dimension list and directly shaped P-1 through P-4.
2. **Scope-generality assumption corrected:** this research initially assumed MAJOR.MINOR.PATCH's ordering model, once understood, would generalize cleanly across all of M.6's declared scope levels (Framework/Domain/Artifact/Schema/Contract). On cross-checking against the reconciliation report's `RC-01`/`RC-02` findings and confirming (fresh read, this pass) that current M.6 §7.2 still has no Release scope level, this was corrected: P-7 now treats scope-level applicability as an open gap specifically for Release/Package, not a solved case being merely extended.
3. **Channel/lifecycle conflation corrected:** an early draft of P-8 treated "channel" (A.6 §8) as a subtype of M.4 lifecycle state, reasoning that both describe "how far along" an artifact is. Rereading A.6 §8's text confirms it makes no reference to M.4 state at all and is defined purely in terms of confidence/support posture. This was corrected to the current three-independent-axes treatment in P-8, using A.6.1's own Draft-status-with-Stable-schema-version as the confirming stress-test example (§8, test 2).

---

## 10. Consolidated Unresolved / Unknown Matters

- Whether the §4 eight-dimension list is exhaustive, or whether additional dimensions (e.g., "evidence rigor," surfaced at §8 test 12) belong on the floor.
- Whether Anchor-class entities (AI-DOS Product, Target Project) emit their own top-level version signal or only aggregate constituent signals (P-2).
- Whether AI-DOS requires cross-scope comparability under one scheme (P-5 decision criteria).
- Whether every version signal requires a bound M.5 evidence item, or only those supporting a downstream claim (P-14).
- Whether a ninth "evidence rigor / validation depth" dimension should be added (§8 test 12).
- Whether multi-authority version assignment is ever legitimate for co-governed artifacts (§8 test 18).
- All items already carried forward, unresolved, from the reconciliation report's own register (§3.8 there): `LC-02`, `CP-06`, `SV-01`, `SV-02`, `AU-01` — none narrowed to a decision by this document, per §6 and §5 P-17.

---

## 11. Policy Questions Register (consolidated from §5/§8, Human-Governance-owned)

| ID (this document) | Question | Native cross-reference |
|:---|:---|:---|
| VS-Q1 | Which §5 signaling family (or hybrid) should AI-DOS adopt? | `SV-01` |
| VS-Q2 | Is M.6's rebuttable MAJOR→`Migration-Needed` default acceptable policy? | `SV-02` |
| VS-Q3 | Should Release/Package receive a new M.6 scope level, or resolve via composition? | `RC-01`, `RC-02` |
| VS-Q4 | Should previously-accepted entities be grandfathered under a changed version policy? | `CP-06` |
| VS-Q5 | Does M.4's single-state model represent, or substitute for, the standing/applicability duality? | `LC-02` |
| VS-Q6 | May version metadata be corrected pre-reliance without triggering M.6's assignment-time immutability invariant? | `AU-01` |
| VS-Q7 | Should AI-DOS require transport formats to fail loudly on unrecognized version-signal fields? | §8 test 17 (new) |
| VS-Q8 | Should AI-DOS permit more than one assigning authority per entity? | §8 test 18 (new) |
| VS-Q9 | Should a ninth "evidence rigor" dimension be added to the §4 floor list? | §8 test 12 (new) |

None of these is resolved, opened for synthesis, or advanced toward adoption by this document.

---

## 12. Candidate Boundary for a Later Numbering / Bump-Rule Stage

Consistent with baseline §16's own convention (naming candidates without scoping, sequencing, or authorizing them):

| Candidate boundary | Would draw on |
|---|---|
| A future Numbering and Bump-Rule Synthesis stage | §5 (P-4 through P-6), §7, §11 (VS-Q1, VS-Q2) of this document |
| A future Release/Package Scope-Level resolution | §5 P-7, `RC-01`/`RC-02`, VS-Q3 |
| A future Version Signal Evidence-Binding specification | §5 P-14, M.5 §7.2 |

None of the above is scoped, sequenced, or authorized by this document. Their sequencing, if any, is a Human Governance decision — consistent with every prior step in this program.

---

## 13. Boundary Statement — Research Versus Normative Authority

This document:

- has no normative authority;
- does not amend, extend, or become part of M.4, M.5, M.6, M.7, or any other Meta-Model;
- does not amend A.6 or A.6.1, and does not authorize their promotion;
- does not select, adopt, or ratify MAJOR.MINOR.PATCH or any alternative signaling family;
- does not resolve `SV-01`, `SV-02`, `LC-02`, `CP-06`, `AU-01`, `RC-01`, `RC-02`, `CP-02`, or `UN-01`;
- does not open STEP 8 or any later research step;
- does not perform Versioning Architecture synthesis;
- does not touch STD-011, its Conformance Profile, PR #348, or any Target Standards artifact;
- does not read, derive from, or modify any Forge AI Target Project artifact;
- is offered as research input for a later, separately authorized synthesis stage only.

---

## 14. Closing Statement

This document performs the single bounded STEP 7 — Version Signaling research work unit Human Governance authorized, using the same first-principles discipline established for STEP 1–6. It develops a candidate eight-dimension floor for what a version signal must communicate, a set of candidate signaling-model families with stated (not adjudicated) decision criteria, eighteen adversarial stress tests, an explicit treatment of `SV-01` and `SV-02` by their native reconciliation-report identifiers, a disclosed three-item correction ledger, and a consolidated Human-Governance policy-question register. It reaches no numbering or bump-rule decision, resolves no reconciliation-report finding, and amends no normative artifact. STEP 8 and Versioning Architecture synthesis remain unopened.

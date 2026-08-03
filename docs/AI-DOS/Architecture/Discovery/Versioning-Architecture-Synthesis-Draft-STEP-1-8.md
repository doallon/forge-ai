# AI-DOS Product Versioning Architecture — Initial Synthesis Draft (STEP 1–8)

> **Draft · Non-normative · Non-canonical · Incomplete synthesis · Opened under Human Governance authorization · Not a selected or approved Versioning Architecture**
>
> Non-normative AI-DOS Product architecture evidence · Architecture Discovery — Initial Synthesis Draft

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-DISCOVERY-VERSIONING-SYNTHESIS-DRAFT-STEP-1-8` |
| Title | AI-DOS Product Versioning Architecture — Initial Synthesis Draft (STEP 1–8) |
| Version | Not assigned — no numbering, signaling, bump-rule, or version-designation-format decision is made by this draft, and no document-version scheme is selected for it. |
| Status | **Draft — initial synthesis, non-normative, incomplete, opened under Human Governance authorization, not approved.** |
| Canonical Status | **Non-canonical.** Non-normative AI-DOS Product discovery material. Not a Meta-Model, Standard, RFC, or approved architecture. |
| Classification | Architecture Discovery — Initial Synthesis Draft |
| Document Type | Synthesis Draft (Discovery Consolidation) |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-28 |
| Last Updated | 2026-07-31 (recorded that Gate C is complete for its authorized bounded scope — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class — together with the `REC-2` ratification and related provenance findings; see §10.11) |
| Traceability ID | `AI-DOS-DISCOVERY-VERSIONING-SYNTHESIS-DRAFT-STEP-1-8` |
| Scope | A bounded, decision-neutral consolidation of the accepted and drafted STEP 1–8 AI-DOS Product Versioning Architecture research corpus, its Reconciliation Assessment, its STEP 4-vs-A.6 Coverage Assessment, and the merged Synthesis-Readiness and Human Governance Decision Package, organised into a single readable structure for later, separately authorized synthesis work. Consolidates only conclusions already supported by that evidence. |
| Out of Scope (as originally authorized for the Gate-A drafting pass) | Resolving any open question (`VS-Q`, `NB-Q`, `SV`, `RC`, `AU`, `CP`, `LC`, `UN`, `LS`, `MG`, `FD`, `SC`, `CMP`); selecting or recommending a signaling, numbering, or bump-rule family; classifying Release under M.0/M.1; selecting an M.3 relationship mapping; creating an M.6 Release scope level; allocating any responsibility or authority; amending or promoting M.4, M.5, M.6, M.7, A.6, A.6.1, any Standard, RFC, or Meta-Model; completing a candidate synthesis; approving an architecture; drafting normative amendment text; implementation, schemas, validators, packaging, migration, or release engineering; Forge AI Target Project execution, ProjectStatus, Roadmap, DevelopmentPhases, Mission, or Target Standards work. **Note (2026-07-29):** "completing a candidate synthesis" and "creating an M.6 Release scope level" described the Gate-A drafting pass's own boundary; a separately authorized 2026-07-29 work unit recorded the `VS-Q3`/`NB-Q4` decision and Gate B completion (§10.10, §11.5) — it did **not** create an M.6 Release scope level (the decision was that none is created), classify Release under M.0/M.1, select an M.3 mapping, amend any Meta-Model, approve an architecture, or perform any other item still listed above. |
| Normative Authority | **None.** This draft has no normative authority. It records an incomplete, decision-neutral consolidation as evidence for later, separately authorized work. |
| Relationship to STEP 1–6 Baseline | Consolidates `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-Baseline-STEP-1-6.md` (Status: "Accepted research evidence"; Canonical Status: Non-canonical; Normative Authority: None) by citation only. Does not amend, rewrite, retabulate, supersede, or upgrade the status of any of its content. |
| Relationship to STEP 7 / STEP 8 | Consolidates `Versioning-Architecture-Research-STEP-7-Version-Signaling.md` and `Versioning-Architecture-Research-STEP-8-Numbering-and-Bump-Rules.md` (each Status: "Draft research evidence. Not yet reviewed. Not yet accepted by Human Governance.") by citation only. Their unaccepted status is preserved unchanged; nothing here accepts, reviews, or promotes either. |
| Relationship to Reconciliation Assessment | Carries forward every mandated identifier from `AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md` (Status: "Draft. Not accepted. Not approved. Not reviewed.") using its native identifiers. Resolves, closes, reclassifies, and supersedes none of its 33 rows. |
| Relationship to Coverage Assessment | Carries forward `CMP-01`–`CMP-12` and Outcome D from `AI-DOS-STEP-4-vs-A.6-Release-Composition-Responsibility-Coverage-Assessment.md` (Status: "Draft — Non-normative, Non-canonical") without narrowing or converting Outcome D. |
| Relationship to Decision Package | Consumes `AI-DOS-Versioning-Architecture-Synthesis-Readiness-and-Human-Governance-Decision-Package-STEP-1-8.md` (Status: "Draft. Not accepted. Not approved. Not reviewed."; merged as PR #355) as the authorizing readiness record and the source of the gate model (§6 there), decision-class separation (§5 there), and decision ordering (§7 there). Decides no ballot item in its §9. |
| Relationship to Meta Family | Cites `M.4-Lifecycle-Meta-Model.md`, `M.5-Evidence-Meta-Model.md`, `M.6-Versioning-Meta-Model.md`, and `M.7-Compatibility-Meta-Model.md` (each Status: Draft, unapproved, "requires Framework Governance review and Human Governance approval before canonical promotion"). Does not amend, supersede, replace, reinterpret, override, or promote any of them. |
| Relationship to A.6 / A.6.1 | Cites `A.6-AI-DOS-Distribution-Foundation-RFC.md` and `A.6.1-AI-DOS-Package-Manifest-Schema-RFC.md` (each Status: Draft; Certification Status: "Not certified") descriptively. Does not amend them and does not authorize their promotion. |
| Human Governance Authorization | Explicit Human Governance authorization to **open the initial synthesis draft** following the merge of the Synthesis-Readiness and Human Governance Decision Package. As originally granted, this authorization exercised **Gate A only** (§11). On 2026-07-29, Human Governance additionally recorded the `VS-Q3`/`NB-Q4` decision (`VS-Q3-B`/`NB-Q4-B`) and authorized this bounded work unit to record it and, if the existing gate conditions were met, to record Gate B (candidate-synthesis completion) — see §10.10, §11.5, §12.2. On 2026-07-31, Human Governance additionally authorized recording, at §10.11, that **Gate C is complete for its authorized bounded scope**: Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class, and only for the items expressly recorded there (including the `REC-2` Tier 1 recording-completeness policy, the unnumbered Record Family 3 starting-value-1 choice, and the confirmed ordering-necessity results), together with the non-blocking (not decided) disposition of `SV-02`/`VS-Q2`/`NB-Q3` for that same bounded scope. **No Gate C decision or authority exists outside that scope** — the universal family answer and the answer for every other entity class remain undecided. This 2026-07-31 authorization additionally confirms that bounded Gate D drafting was already produced through PR #366 (merged 2026-07-30); it does not authorize any further Gate D expansion, does not authorize Gate E, and does not authorize canonical promotion of any artifact. This is a bounded decision-recording authorization, not a normative approval or promotion of any artifact. |
| Supersedes | None |
| Superseded By | None |

---

## 0. How to Read This Document

### 0.1 Required Status Declarations

This document is:

1. **A Draft.** It has not been reviewed, accepted, or approved by anyone.
2. **Non-normative.** It creates no requirement, no default, and no obligation for any artifact, agent, or consumer.
3. **Non-canonical.** It is not part of the Meta family (M.0–M.9), not a Standard, not an RFC, and not approved architecture.
4. **An incomplete synthesis.** It is deliberately partial. Every subject the source corpus leaves unresolved is carried forward as unresolved, and no gap is filled by inference, default, example, or table structure.
5. **Opened under Human Governance authorization** to begin drafting — and only to begin drafting.
6. **Not a selected or approved Versioning Architecture.** No signaling family, numbering-model family, bump-rule family, release-identity policy, scope level, responsibility allocation, or grandfathering policy is selected, preferred, recommended, or implied here.

Consistent with the Decision Package's own discipline (§2, §2.1 there), no source artifact's lifecycle or authority status is upgraded by being cited here, and no merged pull request is treated as evidence of canonical, normative, reviewed, or accepted status beyond what the merged artifact's own metadata declares.

### 0.2 Tag Legend

Every substantive statement below carries exactly one tag:

| Tag | Meaning |
|:---|:---|
| **[Established]** | A proposition already supported by the cited evidence, reported as that evidence states it. "Established" means established *within the cited evidence's own bounded, non-normative status* — never established as canonical AI-DOS Product truth. |
| **[Derived]** | A consolidation-level proposition that follows from two or more cited [Established] items without adding new content. Non-normative and non-canonical, exactly like its inputs. |
| **[Open]** | A question the sources leave unresolved. Reported as open; never answered here. |
| **[Dependency]** | A named unresolved item that a later stage would need before a particular downstream step could proceed. Marked inline as `⚠ DEPENDENCY: <ID> unresolved`. |
| **[Descriptive]** | A report of what an existing Draft artifact's text says, quoted or closely paraphrased, without endorsement. |

Normative verbs (`shall`, `must`, and equivalents) appear in this document **only inside quotation marks reproducing an existing artifact's own text** — or, as here, as mentioned words in this legend. No sentence authored by this draft uses them to state a requirement, a default, or a recommendation.

### 0.3 Required Separations — Index

The authorizing instruction requires nine categories to be kept distinct. They are located as follows and are never merged:

| # | Category | Location |
|:---|:---|:---|
| 1 | Established architecture propositions | §2–§9, every **[Established]** item |
| 2 | Derived but still non-normative synthesis propositions | §2–§9, every **[Derived]** item; consolidated at §10.6 |
| 3 | Human Governance policy choices (still open) | §10.7, class row "Human Governance policy choice" |
| 4 | Specification-completeness corrections | §10.7, class row "Specification-completeness correction" (`CP-02`, `UN-01`, `LC-03`) |
| 5 | Responsibility and ownership allocations | §5.4 and §10.7, class row "Responsibility/ownership allocation" |
| 6 | Synthesis design choices (still open) | §10.7, class row "Synthesis design choice" |
| 7 | Downstream specification dependencies | §10.7, class row "Downstream specification dependency" |
| 8 | Informative or non-blocking matters | §10.7, class row "Informative/non-blocking matter" |
| 9 | Prohibited premature conclusions | §12.5 (with a summary notice at §0.4) |

The class assignments in §10.7 are reproduced from the Decision Package §5, which assigns each item **exactly one** primary decision class. This draft does not reassign any item to a different class.

### 0.4 Prohibited Readings — Summary Notice

This document does not conclude that any architecture family has been chosen, that any open question has been narrowed toward an answer, that research evidence has become normative truth, that readiness to draft implies readiness to complete or approve, or that any responsibility has been allocated. It is not to be read as concluding any of those things. The complete list is at §12.5 and governs any apparent tension elsewhere in this document.

### 0.5 Fresh Reads Performed for This Work Unit

Each of the following was read in full for this drafting pass:

1. `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-Baseline-STEP-1-6.md`
2. `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-STEP-7-Version-Signaling.md`
3. `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-STEP-8-Numbering-and-Bump-Rules.md`
4. `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md`
5. `docs/AI-DOS/Architecture/Reports/AI-DOS-STEP-4-vs-A.6-Release-Composition-Responsibility-Coverage-Assessment.md`
6. `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Synthesis-Readiness-and-Human-Governance-Decision-Package-STEP-1-8.md`
7. `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md`
8. `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md`
9. `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`
10. `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`
11. `docs/AI-DOS/Architecture/RFC/Distribution/A.6-AI-DOS-Distribution-Foundation-RFC.md`
12. `docs/AI-DOS/Architecture/RFC/Distribution/A.6.1-AI-DOS-Package-Manifest-Schema-RFC.md`

The complete source manifest with per-source locators and authority classifications is at Appendix B.

---

## 1. Scope and Authority

### 1.1 What This Synthesis Covers

**[Descriptive]** This document consolidates, into one organised structure, the subject matter the STEP 1–8 corpus already develops: the versioned entity model (§2), version identity and lifecycle separation (§3), the compatibility model (§4), the release and composition boundary (§5), the version signaling space (§6), the numbering and bump-rule space (§7), evidence and historical reproducibility (§8), and Target independence (§9). It then carries every unresolved item forward in a single register (§10), states the gate position (§11), and states the completion boundary (§12).

**[Established]** It covers exactly the territory the authorizing Decision Package assessed. That package's own bounded conclusion is *"READY TO OPEN SYNTHESIS DRAFTING WITH EXPLICIT DEPENDENCIES"* (Decision Package §11), and it states that conclusion *"determines readiness for synthesis drafting only. It does not select any policy model, resolve any decision-ballot item (§9), amend any normative architecture, or itself open synthesis"* (Decision Package §11).

### 1.2 Evidence Basis and the Status of Each Source

**[Established]** The evidence basis is stratified, and the strata are not interchangeable (Decision Package §2.1):

| Stratum | Artifacts | Declared status |
|:---|:---|:---|
| Accepted research evidence | STEP 1–6 Baseline | "Accepted research evidence"; Canonical Status: Non-canonical; Normative Authority: None. Acceptance is *"a Human Governance Layer-6 acceptance of the research conclusions as a stable input, **not** a truth-making act and **not** canonical Meta-Model truth"* (Decision Package §2, row 1; Baseline §2, §0 item 1) |
| Draft research evidence (not accepted) | STEP 7, STEP 8 | "Draft research evidence. Not yet reviewed. Not yet accepted by Human Governance." |
| Reconciliation / coverage-assessment evidence | Reconciliation Assessment; Coverage Assessment | Draft; not accepted; *"does not itself establish, prove, or certify any conclusion as canonical AI-DOS Product truth"* (Reconciliation Assessment §0) |
| Decision-support evidence | Decision Package | Draft; not accepted, approved, or reviewed |
| Draft Meta-Models | M.4, M.5, M.6, M.7 | Draft; each *"requires Framework Governance review and Human Governance approval before canonical promotion"* |
| Draft Architecture RFCs | A.6, A.6.1 | Draft; Certification Status: "Not certified" |

**[Established]** No artifact's authority is inferred from its merge status (Decision Package §2.1). This draft preserves that rule without exception.

### 1.3 Lifecycle Status of This Draft

**[Established]** This document occupies the Draft position declared in its own metadata. It has undergone no review, no acceptance, no approval, and no promotion. It makes no claim on any M.4 lifecycle state, status category, or transition, and it asserts no canonical status for itself or for anything it cites.

### 1.4 Authority Limits

**[Established]** This draft:

- has no normative authority;
- does not amend, extend, reinterpret, or become part of M.4, M.5, M.6, M.7, or any other Meta-Model;
- does not amend A.6 or A.6.1 and does not authorize their promotion;
- does not select, adopt, or ratify any signaling, numbering, or bump-rule family;
- resolves none of `VS-Q1`–`VS-Q9`, `NB-Q1`–`NB-Q14`, `SV-01`, `SV-02`, `RC-01`, `RC-02`, `LC-02`, `LC-03`, `LC-04`, `CP-01`, `CP-02`, `CP-06`, `UN-01`, `AU-01`, `AU-02`, `MG-01`, `MG-02`, `MG-03`, `LS-03`, `FD-01`, `SC-01`, or `CMP-01`–`CMP-12`;
- allocates no responsibility, ownership, or authority to any existing or future artifact;
- does not accept, review, or promote STEP 7 or STEP 8;
- does not read, derive from, or modify any Forge AI Target Project artifact, and derives no scope, priority, sequencing, or progress from Forge AI ProjectStatus, Roadmap, DevelopmentPhases, or Mission.

### 1.5 Method

**[Descriptive]** Every claim below is traced to a document and a section locator. Where two sources treat the same subject differently, both positions are recorded side by side and the difference is left unresolved, following the Baseline's own §4 convention. Where a consolidation cannot proceed without a decision, an inline `⚠ DEPENDENCY` marker records the blocking identifier instead of an invented answer.

---

## 2. Versioned Entity Model

### 2.1 Entity Families

**[Established]** STEP 1 established twelve entity families plus one deliberately unassigned slot (Baseline §5.2). The families and their recorded continuity rules are carried forward unchanged:

| # | Family | Members (as recorded) | Continuity rule (as recorded) |
|:---|:---|:---|:---|
| 1 | Anchor-class | AI-DOS Product, Target Project | Absorbs change without forking; identity persists across all releases; terminates only on retirement |
| 2 | Charter/Constitutive *(tentative)* | Mission-as-charter | Constitutive of Target identity/authority/scope; change may terminate identity; **whether this is its own family or content within Anchor-class was left explicitly open** |
| 3 | Contract-class | Meta-Models, Standards, Validation/Execution Contracts, schemas, workflow definitions, capability definitions, migration definitions | Immutability-from-creation is a **policy candidate**, not ontological necessity; required only after a reliance boundary is crossed |
| 4 | Decision-record family | RFCs, decision records, Evidence-acceptance decisions | Record fixed forever as *occurrence*; reversal is a new record |
| 5 | Release-class | AI-DOS releases, Target Project releases | Immutable once minted, contingent on the entity's declared identity/continuity policy |
| 6 | Realization-class | Provider implementations | Mirrors Anchor+Release pattern: own identity/lineage plus deployment instances |
| 7 | Intent-class | Roadmaps, Mission-as-statement | Weak continuity; freely revisable |
| 8 | Lifecycle-Segment class | DevelopmentPhases | Pure timeline partition; no identity or default authority role |
| 9 | Projection-class | One candidate form of ProjectStatus; runtime state | No independent identity; a computed view |
| 10 | Record-class | Execution/run records, observations, validation results, Evidence packages, migration execution records, capability-usage facts, frozen generated instances, correction records | Append-only is a **policy candidate**, not forced; retention motivated only by an adopted goal |
| 11 | Derivative-class | Reports, explanatory documentation, generated-artifact forks prior to any acceptance act | Weakest continuity; inherits stronger rules only from whatever cites it |
| 12 | Relational/Compositional-class | Compatibility declarations, capability requirement/satisfaction/claims, "implements/realizes" relations, citation/lineage relations | Six-layer decomposition required; never blended |
| +1 | **ProjectStatus** | *(deliberately unassigned)* | Family membership contingent on seven orthogonal axes — **a Human Governance policy choice, not resolved by the ontology** |

**[Established]** The enumeration is explicitly not closed. STEP 8 §5 P-1 treats it as *"a floor, not a ceiling"* precisely because STEP 1 declined to close it (Baseline §5.2; STEP 8 §3, reused-foundation table).

### 2.2 Version-Bearing Subjects

**[Established]** STEP 7 P-2 identifies, applying Baseline §5.2 directly: **candidate emitters** — Contract-class entities, Release-class entities (identity unresolved), Realization-class entities, and Relational/Compositional-class entities; **candidate consumers** — any of the above plus Decision-record and Record-class entities that cite a version (STEP 7 §5 P-2).

**[Established]** STEP 8 P-1 identifies as candidates for an independently assigned number: Contract-class, Release-class (identity unresolved, `RC-01`/`RC-02`), Realization-class, Record-class where a version claim is bound (M.6 §7.13), and Relational/Compositional-class entities (STEP 8 §5 P-1).

**[Established]** STEP 8 P-4 identifies at least two classes evidenced as candidates for **identity without an ordering claim**: content-derived/opaque identifiers (a digest distinguishes content but supplies no basis for claiming one digest is "later" than another), and governance-allocated identifiers with no pre-declared numbering template — evidenced by A.6.1's own Allocation Note, which states the identifier `A.6.1` is *"an explicit Human Governance allocation, not a number derived deterministically from any pre-existing repository allocation rule... does not reserve or imply `A.6.2` or any later slot"* (STEP 8 §5 P-4; A.6.1 Document Metadata, "Allocation Note").

### 2.3 Version-Signal Dimension Floor

**[Established]** STEP 7 §4 identifies eight orthogonal candidate dimensions a version signal is colloquially asked to carry, *"none of which this research treats as reducible to another"*: Identity, Revision, Release, Compatibility, Lifecycle, Channel, Maturity/Certification, Migration (STEP 7 §4). STEP 7 P-1 treats this list as a **floor, not a ceiling** (STEP 7 §5 P-1).

**[Open]** Whether the eight-item list is exhaustive is unresolved (STEP 7 §4; §10 there). A candidate ninth dimension — "evidence rigor / validation depth" — was surfaced by STEP 7 §8 test 12 and is registered as `VS-Q9` / `NB-Q11`.

### 2.4 Subjects Left Unresolved

**[Open]** Anchor-class version-bearing behaviour: whether an Anchor-class entity emits its own top-level version signal or number, or only aggregates constituent signals, is unresolved in both STEP 7 P-2 and STEP 8 P-1, and neither narrows the boundary further.

**[Open]** Charter/Constitutive class membership (Baseline §5.2, §14).

**[Open]** ProjectStatus family membership and which of its seven orthogonal axes apply (Baseline §5.2, §14).

**[Open, partially]** Release identity and Release scope level. Ownership of the Release Composition model and of Release Identity policy is Decided (`RC-01-D`, `RC-02-E`; §10.9) — allocated to a future, not-yet-created Release/Composition artifact. Whether Release/Package receives a new M.6 scope level is separately Decided (`VS-Q3-B`/`NB-Q4-B`; §10.10) — no new scope level; composition of the five existing scope levels instead. Release entity classification (`CMP-01`) and the future artifact's exact content and form remain open.
`⚠ DEPENDENCY: CMP-01 unresolved (Release entity classification)` · `⚠ DEPENDENCY: exact Release/Composition artifact form unresolved`

**[Derived]** Because §2.1's enumeration is an explicit floor and §2.4's four items are unresolved, this draft consolidates the *candidate* version-bearing subject space without asserting a final versioning assignment for any entity family. No entity family is assigned a numbering-model family, a signaling family, or a scope level anywhere in this document.

---

## 3. Version Identity and Lifecycle Separation

### 3.1 The Seven-Layer Semantic Foundation

**[Established]** STEP 1 established, and STEP 2–6 reused and sharpened, a seven-layer semantic model: (1) entity, (2) relation/fact, (3) proposition content, (4) assertion/declaration act, (5) persistent record/evidence, (6) assessment/acceptance/authorization decision, (7) current standing/applicability projection (Baseline §1, §0.1, §5.1).

**[Established]** Layers 2 and 3–7 are *"always conceptually distinct; a record can misrepresent what it records by definition"* (Baseline §12).

### 3.2 The Four Independently Variable Concerns

**[Established]** STEP 8 §4 and §5 P-2 separate four concerns that are *"not four names for one thing"*:

| Concern | What it answers | Owning locator in existing Draft text | Recorded reason it varies independently |
|:---|:---|:---|:---|
| **Identity** | "Which entity is this, distinct from every other entity?" | M.2, consumed by M.6 §7.3 | Two byte-identical artifacts can carry independently assigned, non-identical identities (Baseline §12; reconciliation `VI-03`) |
| **Version** | "Where does this sit in this entity's own governed change sequence?" | M.6 §7.3 (Version Anatomy) | A version can change with no identity change; identity questions (fork, rename) can arise with no version change |
| **Revision** | "What in-place working change occurred that does not itself constitute a new version?" | M.6 §7.8 | M.6's own text: revisions *"do not appear in the lineage chain"* and are permitted only pre-Review/Canonical |
| **Release number** | "Did a deliberate boundary-crossing availability act occur, and which one?" | Baseline §5.1 (definition); A.6 §8 | A.6 §8: *"Every release shall have exactly one product version and one declared channel"* — the release act and the version value it carries are two different things even where A.6 assigns them together |

**[Established]** STEP 8 P-2 additionally records that no existing Draft artifact conflates all four, but that M.6 §7.3 folds identity *into* Version Anatomy as a required component rather than keeping the two orthogonal, and A.6 §8 assigns exactly one version per release without addressing whose version it is.

**[Open]** Whether AI-DOS should require these four concerns to always be representable as four separate fields, or whether some entity classes may legitimately compress two of them, is not decided by STEP 8 (§5 P-2).

### 3.3 Lifecycle, Standing, and Applicability

**[Established]** STEP 5 split standing and applicability into two distinct Layer-7 projections, neither subsuming the other, and further split standing into historical and current (Baseline §9.2, §9.8). *"Historical standing and current standing are always distinct and may diverge without contradiction; standing and applicability are likewise always distinct Layer-7 projections"* (Baseline §12).

**[Descriptive]** M.4 states: *"Every entity governed by a lifecycle profile occupies exactly one state at any time"* (M.4 §7.2) and, as Invariant 1, *"An entity has exactly one lifecycle state at any given time"* (M.4 §9). M.4 §7.3 states that *"status categories are derived from state."*

**[Established]** The Reconciliation Assessment classifies this pairing as `LC-02`, Classification 4 (terminology/representation difference), with Human Governance action required: it is *"not established in either text whether M.4's 'state' is intended to be the same concept as the baseline's 'standing,' a coarser collapse of standing+applicability, or an unrelated workflow-position concept"* (Reconciliation Assessment, row `LC-02`).
`⚠ DEPENDENCY: LC-02 unresolved` · `⚠ DEPENDENCY: VS-Q5 unresolved` · `⚠ DEPENDENCY: NB-Q6 unresolved`

### 3.4 Three Independently Governed Axes

**[Established]** STEP 7 P-8, confirmed by STEP 8 P-12, records that pre-release / draft / experimental / candidate / stable / deprecated / withdrawn / superseded are not one enumeration but at minimum three independently governed axes, each already separately defined in the repository:

| Axis | Owning artifact | Values (as recorded in current Draft text) |
|:---|:---|:---|
| Lifecycle state | M.4 §7.2 | Draft, Review, Canonical, Deprecated, Archived, and the remainder of M.4's own state model |
| Channel | A.6 §8 | Experimental, Preview, Stable, Long-term Support, Emergency |
| Supersession / replacement history | M.6 §7.7 | superseded, replaced-and-withdrawn, amended-in-place |

**[Established]** A live repository example confirms the non-collapse rather than merely hypothesising it: A.6.1 §4.1 binds Schema Version `1.0.0-draft` while the RFC's own Status is Draft — *"two independently true facts on one entity"* (STEP 7 §5 P-3, §8 test 2; STEP 8 §8 P-6).

**[Established]** "Candidate" maps to STEP 4's three-way Release-candidate identity policy (Baseline §8.7), itself an open policy choice, *"not a fourth signaling axis"* (STEP 7 §5 P-8).

### 3.5 Historical Fixity

**[Established]** *"Nothing that happens later can retroactively alter an earlier actual event or the historical fact that an earlier act occurred"* (Baseline §12). Applied to the version signal itself: a version signal is an assertion (Layer 4) backed by a record (Layer 5), issued under an assigning authority (M.6 §7.13), and may later be reassessed, corrected, or revoked *"without altering the historical fact that the original signal was asserted"* (STEP 7 §5 P-14; Baseline §9.1).

### 3.6 Consolidation Position

**[Derived]** The corpus supports a consolidated separation of at least seven distinct axes for any version-bearing subject — identity, lifecycle state, revision, release act, compatibility relation, evidence standing, and historical state — each traceable to a distinct owning locator in §3.1–§3.5. This draft records them as distinct and does not collapse any of them into a single version field. This is a **structural consolidation only**; it selects no field layout, no encoding, and no numbering-model family, and it does not decide the open question at §3.2 of whether some entity classes may compress two concerns.

---

## 4. Compatibility Model

### 4.1 Compatibility as a Contextual Relation

**[Established]** *"Compatibility is a contextual relation, never an intrinsic, permanent property of one artifact"* (Baseline §7.1). It is fully layered: actual relation (Layer 2) → assessed technical conclusion (Layer 3 content / Layer 4 assertion / Layer 6 decision, kept as three separate objects) → evidence/epistemic status → standing → temporal (Baseline §7.1).

### 4.2 Fifteen Orthogonal Dimensions

**[Established]** STEP 3 established fifteen orthogonal dimensions, *"set-valued, never reduced to a compatible/incompatible binary"* (Baseline §7.2): structural/schema · semantic · normative · behavioral · operational · capability · provider · data/representation · validation · execution · security · provenance/reproducibility · governance/authority · composition · migration.

### 4.3 Relation Shapes and Dependency Directions

**[Established]** Six relation shapes are recorded (Baseline §7.3): binary interoperability; directional consumer/provider; substitutability; subject-to-contract conformance; n-ary composition compatibility; migration-path/reachability. *"A composition-level result is never derived from binary pairs"*, and direction, single-pair bidirectionality, general symmetry, and transitivity are four distinct claims each requiring its own evidence (Baseline §7.3).

**[Established]** The five-field factored outcome model is: actual relation (Layer 2, may be reported "not independently established"); assessed technical conclusion (set-valued); evidence/epistemic status; standing (itself factored into actual operational reliance ≠ authorization for reliance ≠ support eligibility ≠ acceptance state ≠ lifecycle events); temporal (Baseline §7.4). *"Lack of evidence is never evidence of incompatibility"* (Baseline §7.4).

**[Descriptive]** M.7 §7.1 states: *"Every compatibility assessment classifies into one of the following relation types"* — Backward Compatible, Forward Compatible, Partially Compatible, Conditionally Compatible, Incompatible. M.7 §8 Rule 4 states: *"Every compatibility claim must bind to M.5 evidence — this is non-negotiable and universally enforced."* M.7 §7.6 assigns every breaking change a severity of Critical, Major, Moderate, or Minor. M.7 §7.8 requires a compatibility window per claim; §7.9 separates adapter-mediated from direct compatibility; §7.10 addresses Target boundary compatibility.

**[Established]** Dependency direction differences are recorded, not reconciled. M.7 declares hard dependency on M.6 (*"compatibility is always between versioned entities"*, M.7 §6/§11), while STEP 3 modeled compatibility *"as a contextual relation indexed by state/dimension/direction/context, never by a version number (none exists in this corpus)"* — recorded as **unreconciled** at Baseline §4.2.

### 4.4 Preserved Unresolved Policy Choices

**[Open]** `CP-01` — Classification 5, apparent semantic conflict: whether M.7's single-relation-type-per-assessment framing can carry simultaneous, independently tracked per-dimension verdicts. The Reconciliation Assessment records this as *"resolvable through reconciliation drafting, not a value-laden policy choice"* (Human Governance action: No), and it remains unresolved.
`⚠ DEPENDENCY: CP-01 unresolved`

**[Open]** `CP-02` — Classification 6, **definite semantic conflict**, and one of only two such findings: M.7 Rule 1 with §7.1's closed five-type enumeration and §7.7's Draft-claim requirement leaves *"no textual carve-out for conflicting/insufficient evidence"*, while STEP 3 stress test 24 requires the outcome be recorded as *"Indeterminate due to conflicting evidence — the dedicated outcome value"*. The Assessment records: *"Compliance with both is logically impossible as written"*, and classifies the item as a specification-completeness defect, *"not a choice among competing legitimate values"* (Reconciliation Assessment, row `CP-02`; §3.5).
`⚠ DEPENDENCY: CP-02 unresolved`

**[Open]** `CP-06` — Classification 9, Human Governance policy decision required: grandfathering of previously-accepted entities. The Baseline explicitly declines to assume a default; M.6 §7.10's Migration Window "Closed" state (*"no longer supported, non-migrated consumers are non-compliant"*) already encodes one specific answer (Reconciliation Assessment, row `CP-06`).
`⚠ DEPENDENCY: CP-06 unresolved` · `⚠ DEPENDENCY: VS-Q4 unresolved` · `⚠ DEPENDENCY: NB-Q5 unresolved`

**[Established]** `CP-04` and `CP-05` are classified 1 — Aligned, and carry no Human Governance action (Reconciliation Assessment, §3.1).

### 4.5 Consolidation Position

**[Derived]** The corpus supports consolidating the compatibility subject area as: a multi-dimensional, contextual, direction-bearing, evidence-bound relation whose assessed outcome is factored into at least five independent fields, and whose encoding is recorded by the research as needing the capacity to render "not established" (STEP 7 §5 P-13; STEP 8 §9 P-10) — while the concrete relation-type enumeration, the per-dimension verdict mechanism, and the grandfathering policy all remain open. No relation-type set, verdict mechanism, or severity model is selected here, and neither `CP-01`, `CP-02`, nor `CP-06` is narrowed toward an answer.

---

## 5. Release and Composition Boundary

### 5.1 What the Evidence Supports

**[Established]** *"A Release is a Release-class entity that participates in a declared composition relation — composition equality never proves identity equality, and composition difference never automatically proves identity difference"* (Baseline §8.1). The identity consequence of any composition change depends entirely on the entity's declared identity/continuity policy.

**[Established]** Seven declared/realized composition stages are recorded as distinct and non-collapsible: declared → resolved → materialized → distributed → installed → deployed → observed. *"A declaration never makes materialization successful. A materialized artifact never proves it matches the declaration. Runtime observation never retroactively redefines declared composition"* (Baseline §8.3).

**[Established]** Twelve constituent reference/binding types and an explicit transitive-closure requirement (Baseline §8.4); role declared per-instance and never inferred from artifact type (Baseline §8.5); eight membership categories with the rule that *"optionality never automatically creates a new Release, and never automatically leaves identity untouched"* (Baseline §8.6); eleven independent composition-completeness dimensions with *"structural validity is necessary, never sufficient"* (Baseline §8.8); ten distinct authorities of which *"none implies any other"* (Baseline §8.9); a twenty-four entity applicability matrix with no categorical type-based exclusion and an explicit three-tier Target-supplied model (Baseline §8.11).

**[Descriptive]** A.6 declares: *"AI-DOS shall be distributed as governed, versioned release artifacts assembled from approved product truth"* (A.6 §1); a four-boundary product model ending at "Installed AI-DOS Product Instance" (A.6 §4); required distribution artifacts (A.6 §5); a manifest contract listing minimum declared content (A.6 §7); *"Every release shall have exactly one product version and one declared channel"* (A.6 §8); eleven governance and release gates (A.6 §15); and an Explicit Non-Ownership list that excludes, among others, *"package schema syntax"*, *"Runtime or Engine behavior"*, and *"product release approval itself"* (A.6 §17).

**[Descriptive]** A.6.1 occupies exactly the *"package schema syntax"* territory A.6 §17 excludes, bounded to `CMP-04`, `CMP-05`, `CMP-06`, and the state-binding/role portion of `CMP-08` (A.6.1 §2.2), and states that every closed set and vocabulary in it is *"this RFC's own Draft design proposal"*, not inherited normative content (A.6.1 §2.1).

**[Established]** STEP 8 §8 P-5 extends STEP 7 P-15's composition-cascade rule from compatibility/migration signals to numbering and bump decisions: a release's or package's own number *"must never be mechanically derived from constituent numbers alone"* — as a research conclusion, not an adopted rule. Four scenarios are analysed and left unresolved: package rebuild without semantic change; release recomposition without component revision; identical component sets under different authority or provenance; one product distributed through multiple packages or channels (STEP 8 §8 P-5).

### 5.2 What Remains Unresolved

**[Open, as originally recorded]** `RC-01` — the seven-stage release composition model *"has no owner in M.4, M.6, or M.7"*; all three Meta-Models explicitly self-exclude the territory. Classification 7; candidate responsibility boundary recorded as "Undetermined" (Reconciliation Assessment, row `RC-01`). **[Established — status update]** Ownership is now Decided as `RC-01-D` (§10.9): allocated to a future, separately authorized, dedicated Release/Composition artifact. The artifact's form, name, and content remain undetermined.

**[Open, as originally recorded]** `RC-02` — *"M.6's Version Scope table enumerates Framework, Domain, Artifact, Schema, and Contract; no 'Release' scope level is named."* Classification 7; responsibility boundary "Undetermined" (Reconciliation Assessment, row `RC-02`). **[Established — status update]** Ownership of Release Identity policy is now Decided as `RC-02-E` (§10.9): allocated to the same prospective artifact as `RC-01`, as a distinct concern. Whether M.6's Version Scope table gains a Release scope level is a separate question, resolved below.

**[Established — status update]** `VS-Q3`/`NB-Q4` — whether Release/Package should receive a new M.6 scope level, or resolve via composition of the existing five scope levels — is now Decided as `VS-Q3-B`/`NB-Q4-B` (§10.10): no new scope level is added; Release/Package version scope is represented through composition of the five existing scope levels (Framework, Domain, Artifact, Schema, Contract). This is a candidate-synthesis decision; it does not itself amend M.6 §7.2, and it does not determine the exact composition mechanism, precedence rule, or validator, none of which any cited source uniquely determines.
`⚠ DEPENDENCY: exact Release/Composition artifact form unresolved` · `⚠ DEPENDENCY: CMP-01 unresolved (Release entity classification)`

**[Established]** The Coverage Assessment's Required Conclusion is preserved verbatim: **"Outcome: D — Evidence remains insufficient for a single comparison-wide determination"** (Coverage Assessment §7). This draft does not narrow, resolve, or convert Outcome D.

**[Established]** Release entity classification is unresolved, and *"evidence for any narrower M.0/M.1 classification is insufficient"*; no M.3 root relationship mapping has been selected for the composition relation; no new M.6 Release Scope level has been established (Coverage Assessment §2, Controlling Prior Determinations).

### 5.3 Explicit Non-Determinations Made Here

**[Established]** This draft, consistent with every cited source's own boundary:

- does **not** classify Release at a particular semantic or artifact level (no M.0/M.1 classification; no assertion that Release is Architecture-only, Meta-owned, or Standard-owned);
- does **not** select an M.3 relationship mapping for the composition relation;
- does **not** allocate `RC-01` or `RC-02` responsibility to M.4, M.6, M.7, A.6, A.6.1, or any other *existing* candidate (ownership is allocated only to a future, not-yet-created artifact — §10.9);
- does **not** select between the two tied candidates the Coverage Assessment identified for the package-schema-syntax territory (Baseline §16's *"future Release Composition / manifest Standard"* and A.6 §18's *"Package Manifest Schema RFC"*), nor between the two tied candidates for the "assemble" authority (A.6 §18's *"Release Engineering and Artifact Assembly RFC"* and Baseline §16's Standard).

**[Established — status update]** As of 2026-07-29, one item in the list this subsection originally carried is no longer an open non-determination: whether AI-DOS creates, proposes, or prefers an M.6 Release or Package scope level is now Decided (`VS-Q3-B`/`NB-Q4-B`, §10.10) — **no**, Release/Package scope is represented through composition of the five existing scope levels instead. This is a candidate-synthesis decision, not an M.6 amendment; M.6 §7.2 itself is not edited by this decision.

### 5.4 Responsibility and Ownership Allocations — Allocated vs. Not Allocated

**[Established]** What is already allocated by existing authorized action, as recorded by the sources:

| Territory | Allocation status | Source |
|:---|:---|:---|
| `CMP-04`, `CMP-05`, `CMP-06`, and the state-binding/role portion of `CMP-08` (package-schema-syntax constituent semantics) | **Allocated** — Human Governance selected the RFC form; A.6.1 already occupies this territory | Coverage Assessment §7 Sub-finding 1; A.6.1 §2.2; Decision Package §4.2, §5 |
| "select constituents" authority (of `CMP-09`'s ten) | **Partially covered by existing A.6 text** (A.6 §4.2, *"Selects only explicitly approved product content..."*), though A.6 does not name it as a discrete authority role | Coverage Assessment §7 Sub-finding 2 |
| `RC-01` (seven composition stages — the "process, completeness dimensions, and authority lattice"), `RC-02` (Release Identity policy) | **Allocated — ownership only** — a future, separately authorized, dedicated Release/Composition artifact (form not yet selected; artifact not yet created or named) | Decided `RC-01-D`/`RC-02-E`, §10.9 |
| Whether Release/Package receives a new M.6 scope level | **Decided — no.** Release/Package version scope is represented through composition of the five existing M.6 scope levels | Decided `VS-Q3-B`/`NB-Q4-B`, §10.10 |

**[Established]** What is **not** allocated:

| Territory | Status | Source |
|:---|:---|:---|
| `CMP-01` (Release identity vs. composition-equality principle; Release entity classification) | **Ownership: not established.** No owner, prospective or existing — this territory ("Release entity classification," an M.0/M.1 question) falls outside both `RC-01-D`'s named territory (the seven-stage process, completeness dimensions, and authority lattice) and `RC-02-E`'s named territory (the four release-identity possibilities), and is not assigned to either, nor to the future artifact either names. | Coverage Assessment §5 row `CMP-01`, §6 |
| "assemble" authority | Two genuinely tied future candidates; neither preferred by either text | Coverage Assessment §7 Sub-finding 2 |
| "authorize operational reliance" authority (one of `CMP-09`'s ten — no A.6 locator, existing or listed-future, names it; no second concrete candidate found within A.6/A.3–A.5) | **Ownership: allocated** — covered by `RC-01-D`'s "authority lattice" territory, as one of the two remaining orphan authorities. **Substantive treatment: not established** — no source states what this authority requires or how it is exercised; this remains unresolved, later work for the artifact `RC-01-D` names, not resolved by the ownership allocation itself. | Coverage Assessment §7 Sub-finding 2; Decided `RC-01-D`, §10.9 |
| "observe deployment/use" authority (one of `CMP-09`'s ten — no A.6 locator names it; §14 covers metadata exposure only; §18's Feedback/Evolution RFCs are *"thematically adjacent but not precisely titled"*) | **Ownership: allocated** — covered by `RC-01-D`'s "authority lattice" territory, as the other remaining orphan authority. **Substantive treatment: not established** — same basis as above; unresolved, later work. | Coverage Assessment §7 Sub-finding 2; Decided `RC-01-D`, §10.9 |
| `CMP-03`'s "deployed" and broader "observed" stages | **Ownership: allocated** — both are named stages of `RC-01-D`'s "seven-stage process" territory. **Substantive treatment: not established** — A.6 affirmatively excludes "deployed" from its own scope (a declared boundary, not a gap); "observed" (broad) has no located candidate anywhere in A.3–A.6. Neither's operational meaning is supplied by the ownership allocation; both remain unresolved, later work for the artifact `RC-01-D` names. | Coverage Assessment §5 row `CMP-03`; Decided `RC-01-D`, §10.9 |
| `CMP-08`'s operational-completeness dimension | **Ownership: allocated** — covered by `RC-01-D`'s "completeness dimensions" territory. **Substantive treatment: not established** — absent from A.6 and from every other cited source; unresolved, later work for the artifact `RC-01-D` names, not resolved by the ownership allocation itself. | Coverage Assessment §5 row `CMP-08`; Decided `RC-01-D`, §10.9 |
| `LC-04` (record-mechanics operations), `LS-03` (fork/regeneration/reassessment), `MG-01`/`MG-02`/`MG-03` (migration-operation semantics) | Coverage gaps; ownership Undetermined | Reconciliation Assessment §3.7, §3.10 |
| `FD-01` (a Layer-2 "actual fact" primitive) | Absent from all four Owned Semantics tables; boundary Undetermined | Reconciliation Assessment row `FD-01` |
| `SC-01` (structural completeness vs. semantic correctness) | Classification 10 — insufficient evidence; requires reading M.9, outside every cited work unit's authorized scope | Reconciliation Assessment row `SC-01` |

---

## 6. Version Signaling Space

### 6.1 The Signaling-Family Alternatives

**[Established]** STEP 7 §5 P-5 presents seven candidate signaling-model families **as alternatives, with no family selected**. Reproduced here in the same neutral form, with each family's recorded strength and limitation given equal weight:

| Family | Mechanism (as recorded) | Recorded strength | Recorded limitation |
|:---|:---|:---|:---|
| Numeric composite (SemVer-shaped) *[Convention]* | `MAJOR.MINOR.PATCH` ordered triple | Total order within one lineage; widely tooled | Encodes only revision plus a rebuttable migration-obligation signal; carries no identity, channel, lifecycle, or compatibility-direction information on its own |
| Calendar-based (CalVer) *[Convention]* | Date-derived components | Communicates recency directly | No inherent compatibility or migration signal; ordering degrades without a disambiguating component |
| Ordinal / monotonic counter | Strictly increasing integer per lineage | Simple total order; trivially comparable | No semantic content beyond sequence, absent an external mapping |
| Content-derived / opaque (digest-based) | Hash of content | Identity-strong; detects any content difference | Explicitly rejected by STEP 1 as sufficient for entity identity; provides no ordering at all |
| Structured multi-field | Independent, separately-versioned fields per §4 dimension | Matches P-4's conclusion directly; no forced collapsing | Higher representational cost; requires a canonicalization/comparison discipline per field |
| Symbolic / channel-primary | Channel or maturity label primary, revision secondary | Foregrounds the dimension consumers usually act on first | Under-communicates fine-grained revision ordering within a channel |
| Hybrid / composite | Primary ordering component plus bounded orthogonal metadata | Can satisfy P-4 while preserving SemVer-shaped tooling compatibility for the ordering component | Requires the same closed-set-with-reserved-Undetermined discipline as P-13, or reproduces `UN-01` at the AI-DOS level |

**[Established]** The decision criteria are recorded as **surfaced, not adjudicated**: tooling compatibility with existing package-manager ecosystems; whether cross-scope comparability under one scheme is required; whether the unresolved Release scope level needs settling before any family can be scoped correctly for releases; and whether representational completeness is prioritized over ecosystem familiarity (STEP 7 §5 P-5, §7).

### 6.2 Constraints the Signaling Research Records

**[Established]** Selected constraints, each reported as a research conclusion of a Draft, unaccepted document:

| Ref | Constraint (as recorded) |
|:---|:---|
| P-3 | The eight dimensions are not merely conceptually distinct but **independently variable in practice**, confirmed by a live repository example (A.6.1's Draft status with a Stable-committed Schema Version) |
| P-4 | *"No single scalar or single composite-numeric value... can losslessly represent all eight §4 dimensions without collapsing distinctions this research (and STEP 1–6 before it) found necessary to keep separate"* |
| P-6 | Within M.6's current text, `MAJOR.MINOR.PATCH` functions as *"a revision-ordering-plus-rebuttable-migration-obligation-default signal"* — not an identity signal, not a channel signal, not a lifecycle signal |
| P-7 | M.6 §7.2 declares five scope levels; no Release, Package, or composed-distribution scope level exists |
| P-9 | No version-number shape may, by itself, entail a specific compatibility relation or migration obligation without evidence; in STEP 7's own words, *"the version signal's **encoding** must always leave room for the evidence-bearing override to be represented, or the rebuttable default becomes unrebuttable in practice"* |
| P-10 | The comparison model is recorded as needing to support a directed acyclic graph rather than a forced total order; monotonicity holds only *within one continuous lineage segment*; "reset" is an **identity question**, not a numbering defect |
| P-11 / P-12 | Human-readable and machine-readable representations are not asserted to be identical; A.6.1 §11's canonicalization-for-comparison-only is informative precedent, not a generalized rule |
| P-13 | In STEP 7's own words, any such encoding *"must reserve an explicit 'not established' value for each, or it inherits `CP-02`/`UN-01`'s defect at the signaling-format level"* — stated there as a research conclusion about representational capacity, explicitly *"not itself a resolution of `CP-02` or `UN-01`"* |
| P-14 | A version signal is itself an assertion backed by a record under an assigning authority, and is itself an M.5 Evidence Item candidate when supporting a downstream claim |
| P-15 | A release-level or package-level signal is a **composition** of constituent signals and is never mechanically derived from them without a separately evidenced composition-level assessment |
| P-16 | Three failure modes are named — false precision, overloaded signals, implicit policy — sharing one root cause: collapsing an assertion (Layer 4) into a decision (Layer 6) without the intervening evidence (Layer 5) |

### 6.3 What Is Not Selected Here

**[Established]** No signaling family is selected, preferred, ranked, or recommended by this draft for any entity class outside the bounded Gate C scope completed 2026-07-31 (§10.11.1) — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class are excepted, per that completed recording. `VS-Q1` through `VS-Q9` are carried forward as originally recorded in §10.1, with `VS-Q1` now Partially resolved at the broader register-question level (§10.11.1) and every other item unresolved, exactly as STEP 7 §11 leaves them and as the Decision Package §9 ballot records them.
`⚠ DEPENDENCY: VS-Q1 … VS-Q9 unresolved (all nine)`

---

## 7. Numbering and Bump-Rule Space

### 7.1 Definitional Separation

**[Established]** STEP 8 §4 separates a **numbering-model family** (*"a format and comparison discipline... answers 'what shape does the value take, and how are two values compared'"*) from a **bump rule** (*"a decision procedure that maps a described change... to a specific transition in a numbering-model family's value"*), noting that *"a bump rule presupposes a numbering-model family exists; it does not select one."*

### 7.2 Eleven Candidate Numbering-Model Families

**[Established]** STEP 8 §6 presents eleven families **as alternatives, none selected, none assumed valid for every entity class**. Each row carries its own recorded limitation and its own recorded set of plausibly excluded entity classes:

| # | Family | Recorded strength | Recorded limitation |
|:---|:---|:---|:---|
| 1 | MAJOR.MINOR.PATCH (fixed three-field numeric tuple) *[Convention]* | Total order within one lineage; widely tooled; already in bounded Draft use for A.6.1's own Schema Version | Fixed field count cannot represent additional independent dimensions without overloading a component |
| 2 | Fixed-width numeric tuple, variable field count | Lets simpler entity classes avoid an unused field | Cross-scope comparison harder without a declared normalization rule |
| 3 | Monotonic sequence / revision counter | Simplest total order; trivially comparable | No semantic content beyond sequence without an external mapping |
| 4 | Date-/time-derived (build timestamp) | Directly answers "when" | Same-instant collisions; recency is not compatibility |
| 5 | Calendar versioning (periodic) *[Convention]* | Communicates recency and cadence to a human reader | No inherent compatibility or migration signal; ordering degrades within a shared period |
| 6 | Symbolic / ordinal stage as primary | Matches lifecycle-adjacent human expectation; no numeric precision needed | Cannot distinguish two successive changes within one stage; risks conflating with lifecycle state or channel |
| 7 | Opaque identifier (governance-allocated, no template) | Matches the A.6.1 Allocation Note precedent; avoids implying an unmade commitment | No answer at all to "which came first" without an external record |
| 8 | Content-derived identifier (digest) | Identity-strong; needs no assigning authority | Rejected by STEP 1 as *sufficient* for identity; no ordering between two digests |
| 9 | Structured multi-field | Directly satisfies STEP 7 P-4; extends to future dimensions | Highest representational cost; per-field canonicalization discipline required |
| 10 | Hybrid: primary ordering component + bounded orthogonal metadata | Completeness plus a familiar, tool-compatible primary value | Requires reserved-Undetermined discipline or reproduces `UN-01` at the AI-DOS level |
| 11 | Hybrid: human-facing display version separated from canonical identity | Reuses an already-established AI-DOS distinction (M.2 canonical vs. display) | Requires an explicit governed mapping or becomes a false-precision source |

**[Established]** STEP 8's own §6 conclusion: *"No family in this table is shown valid for every entity class in §5"* — with the "Entity classes plausibly excluded" column cited as evidence of the refusal to assume universal applicability.

### 7.3 Seven Candidate Bump-Rule Families

**[Established]** STEP 8 §7 presents seven families **as alternatives, none selected, none assumed correct by default**:

| # | Family | Existing precedent recorded | Recorded limitation |
|:---|:---|:---|:---|
| 1 | Deterministic change-kind mapping | A.6.1 §13.1's Schema Version Evolution table, applied only to its own bounded manifest schema | Reproduces the *"automatic mapping"* STEP 6 removed if generalized; no field for evidence-based rebuttal |
| 2 | Compatibility-relation-driven bump | M.6 §7.4's *"MAJOR: changes not backward-compatible"* gestures at the coupling without requiring an M.7 relation | Inherits `CP-02` and the closed-five-type tension with `CP-01` unless resolved first |
| 3 | Rebuttable-default model | M.6 §8 Rules 8–10 | Whether a rebuttable default counts as the mapping STEP 6 rejected is exactly `SV-02`, still open |
| 4 | Human-Governance-assigned, no default | Consistent with (but not required by) Baseline §10.4's non-inference chain | Highest governance overhead; volume impact not empirically assessed |
| 5 | Entity-specific declared policy | M.4 §7.1's Lifecycle Profile model offered as a *structural* precedent for a different concern only | Requires a shared minimum comparison discipline or cross-class decisions become incomparable by design |
| 6 | Tiered / hybrid | Not directly evidenced as a named model in any single Draft artifact | Requires a governed escalation trigger, or becomes the "implicit policy" failure mode |
| 7 | No-bump / same-version correction | M.6 §7.8, bounded to pre-Review states | Does not address post-Review/Canonical correction without bump — registered as `NB-Q7` |

### 7.4 Derived Constraints on Any Family Choice

**[Established]** Constraints recorded by STEP 8, each applying regardless of which family is eventually chosen:

- **P-8** — choosing any family does not itself establish that any version pair is actually compatible; the bump value is *"at most a Layer-4 assertion about a Layer-3 classification... never itself the Layer-2 actual relation."*
- **P-10** — any family requiring a closed-set output inherits `CP-02`/`UN-01`'s defect unless its encoding reserves an explicit "not established" value; the *comparison result itself* is recorded as needing the capacity to render "not comparable."
- **P-11** — DAG comparison; monotonicity only within a continuous lineage segment; reset as an identity question.
- **P-12** — lifecycle, channel, and supersession remain three separately governed axes for numbering purposes exactly as for signaling.
- **P-13** — four decisions a bump-rule family cannot make from the numbering value alone: consumer migration necessity; rebuttal validity; grandfather-clause applicability (`CP-06`); assigning-authority validity.
- **P-14 / P-15** — comparison discipline and display/serialization discipline are separable; four independently variable concerns (normalization, uniqueness domains, ambiguous/incomparable values, unauthorized claims); *"a syntactically well-formed `2.0.0` is not thereby an authorized `2.0.0`."*

### 7.5 Expected Outputs for a Later Synthesis Stage

**[Established]** STEP 8 §15 identifies ten outputs a later synthesis stage would consume. The Decision Package §8 assessed all ten and recorded that **none is "Not ready"**, with several "Ready with explicit dependency":

| # | Output (STEP 8 §15) | Readiness (Decision Package §8) | Named dependency |
|:---|:---|:---|:---|
| 1 | Four-concept distinction and independent-variability table | Ready with explicit dependency | `RC-01`/`RC-02` |
| 2 | Entity-class floor and identifiers-without-ordered-versions class | Ready with explicit dependency | Anchor-class open branch |
| 3 | Eleven-family numbering-model table and criteria | Ready | — (selection is downstream Gate-C consumption) |
| 4 | Seven-family bump-rule table with descriptive/policy separation | Ready with explicit dependency | `CP-01`, `CP-02`, `UN-01` |
| 5 | Composition-cascade extension and four scenarios | Ready with explicit dependency | `RC-01`/`RC-02` |
| 6 | Mandatory Indeterminate/Undetermined/not-comparable encoding requirement | Ready with explicit dependency | `CP-02`/`UN-01` fixes at Meta-Model level |
| 7 | DAG / reset / fork treatment | Ready with explicit dependency | `LS-03` |
| 8 | Six minimum evidence classes | Ready | — |
| 9 | Fourteen-item Human Governance Question Register | Ready | — (per-item dependencies tabulated separately) |
| 10 | Explicit dependency table (nine rows) | Ready | — |

### 7.6 What Is Not Selected Here

**[Established]** No numbering-model family and no bump-rule family is selected, preferred, ranked, or recommended by this draft for any entity class outside the bounded Gate C scope completed 2026-07-31 (§10.11.1) — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class are excepted, per that completed recording. `NB-Q1` through `NB-Q14` are carried forward as originally recorded in §10.2, with `NB-Q1` Decided (§10.9) and `NB-Q2` now Partially resolved at the broader register-question level (§10.11.1); every other item remains unresolved.
`⚠ DEPENDENCY: NB-Q1 … NB-Q14 unresolved (all fourteen)`

---

## 8. Evidence and Historical Reproducibility

### 8.1 Historical Integrity

**[Established]** *"Historical Integrity is the property of a system whereby what an earlier object historically was, and the historical fact that it existed or occurred, remain unalterable by anything that happens later — while its current representation, content, availability, applicability, and standing, and later operations performed upon it, are all separately variable"* (Baseline §9.1). Append-only storage is *"a strong policy candidate, never a universal requirement."*

**[Established]** Record fidelity is always independent of proposition truth; a missing record never proves an event did not occur; a persistent record establishes only that an occurrence was recorded as having happened (Baseline §9.4, §12).

**[Established]** Fourteen distinct historical operations are recorded, with correction defined functionally and its mechanism *"entirely policy-dependent, never fixed by the definition"* (Baseline §9.5).

**[Established]** Seven distinct identity questions are recorded for records (event, proposition, assertion-act, record, evidence, decision, current-standing identity), and logical record identity for a copy or reconstruction is *"a further, policy-dependent question"* (Baseline §9.6, §12).

### 8.2 Evidence Binding

**[Established]** STEP 1 decomposed Evidence into seven independently authored, independently corrigible objects: observation, captured input, execution, validation result, claim, package, acceptance decision (Baseline §5.3).

**[Descriptive]** M.5 §7.2 specifies an Evidence Item's required properties (identity, type, source, subject, claim binding, content, assertion, quality assessment, validity, freshness, confidence, reproducibility, retention class, provenance, limitations, authority, owner, lifecycle state); §7.4 defines the Claim Binding Model with claim types including *"Compatibility"* and *"Lifecycle"*; §7.5 defines quality, validity, freshness, confidence, reproducibility, and retention; §7.6 defines forward, backward, and lateral traceability and states that *"the provenance chain must be unbroken and immutable (corrections appended, not overwritten)"* (also M.5 §8 Rule 35).

**[Established]** The Reconciliation Assessment classifies the evidence-decomposition difference as `EV-01`, Classification 4 (two decompositions along genuinely different axes, neither subsuming the other); `EV-02` as Classification 3 (M.5's Rule 35 is *"a defensible, scoped exercise of exactly the policy candidate the baseline leaves open, applied to evidence provenance specifically"*); and `EV-03` as Classification 1 — Aligned.

**[Established]** STEP 8 §11 identifies six minimum evidence classes a later bump-rule architecture would need to bind to, reusing M.5 §7.2 rather than inventing a parallel model: change-kind classification evidence; compatibility-relation evidence; rebuttal evidence; assigning-authority evidence; composition-level evidence; no-bump/correction evidence.

### 8.3 Reproducibility and Retained Meaning

**[Established]** *"Verified cryptographic/provenance mechanisms establish only narrowly specified technical properties under stated assumptions — never proposition truth, standing, completeness, or correctness"* (Baseline §12, §9.7).

**[Established]** Reproducing a historical numbering/bump decision *"requires access to the same evidence class... that produced it, and a later reassessment of that decision... never rewrites the historical fact that the original numbering/bump decision was asserted at the time it was"* (STEP 8 §10, Reproducibility paragraph; STEP 7 §8 tests 7 and 13).

**[Established]** Retained meaning across version changes is recorded as its own concern: a version signal's original assertion is unaffected by a later reclassification of the entity it describes, and *"current interpretation of the signal may require translation under the new identity model"* — with *"whether translation is automatic or requires a new assertion"* left open (STEP 7 §8 test 13).

**[Open]** Whether every version signal requires a bound M.5 evidence item, or only those supporting a downstream claim (STEP 7 §5 P-14; §10 there).

**[Open]** In the Baseline's own words, *"whether Evidence packages must use pinned rather than live citations"*; and grandfather-clause treatment for previously accepted Evidence when governance policy changes (Baseline §13; Baseline §7.8 test 20 — the latter is the Evidence-side parallel of `CP-06`).

### 8.4 Consolidation Position

**[Derived]** The corpus supports consolidating the evidence and historical-reproducibility area as: a layered model in which a version signal, a compatibility claim, and a bump decision are each separately evidenced assertions whose historical occurrence is fixed and whose current standing is separately variable, bound to evidence classes already named by M.5 §7.2/§7.4 and enumerated for bump rules at STEP 8 §11. No evidence schema, retention policy, pinning mandate, or binding requirement is selected here, and the Version Signal Evidence-Binding Specification named at STEP 7 §12 is neither created nor scoped.
`⚠ DEPENDENCY: Version Signal Evidence-Binding Specification not created (downstream specification dependency)`

---

## 9. Target Independence

*This section is generic and product-level. It contains no Target-specific identity, state, path, planning truth, or progress claim, and derives nothing from any Target Project's own planning artifacts.*

### 9.1 The Product / Target Separation

**[Descriptive]** A.6 §3 distinguishes four truth domains — private development truth, AI-DOS product truth, released product truth, and Target Project truth — and states that Target Project truth is *"Never imported into reusable AI-DOS release artifacts."* A.6 §16 Invariant 2 states: *"Released product truth never silently includes Target truth."*

**[Descriptive]** M.6 §10 states: *"AI-DOS is a reusable framework product; M.6 versioning semantics apply to AI-DOS artifacts consumed by Target Projects — M.6 never consumes Target Project concepts."* M.7 §10 states the parallel position for compatibility semantics. M.4 §10 records that *"M.4 is platform-independent and Target-independent"*; M.5 §10 records the same for evidence.

**[Established]** The Baseline's three-tier Target-supplied model records that the Release-declared slot/selector/input-contract *is* part of the Release's own composition; the specific Target-supplied value is *not*; and the resulting realization composition is its own distinct thing (Baseline §8.11).

**[Established]** *"Target-supplied realization inputs are explicitly outside AI-DOS Product migration scope"*, conditionally in scope only for Target-level realization migration (Baseline §10.10).

### 9.2 Independent Evolution With Declared Compatibility

**[Derived]** Taking §9.1's established items together, the corpus supports the following consolidation: AI-DOS and an arbitrary Target Project may each change on their own timelines because (a) the two occupy separate declared truth domains (A.6 §3, §16), (b) a Target-supplied value never becomes AI-DOS Product truth and never alters an AI-DOS Release's own composition (Baseline §8.11, §8.12 test 12, §9.9 test 29), and (c) a compatibility relation between them is a separately declared, separately evidenced, separately revisable object rather than a property either side owns unilaterally (Baseline §7.1, §7.5; M.7 §7.10, §8 Rule 4).

**[Descriptive]** M.7 §7.10 records that Target boundary compatibility *"is the intersection of both sides' constraints"*, that *"Target boundary compatibility claims must declare which side's authority governs each aspect of the claim"*, and that *"internal compatibility does not guarantee boundary compatibility."*

**[Established]** A declared compatibility relation is retained across independent evolution only as an evidenced, temporally scoped claim: a declaration's record is fixed as of its assertion time, while its current applicability is separately re-evaluated and may become stale (Baseline §6.6 test 19, §7.6, §7.8 test 10). *"Loss of current support ≠ historical incompatibility"* (Baseline §7.6).

**[Established]** A provider swap can break Target identity, historical reproducibility, and observable-behavior continuity in any subset independently; whether Target identity is provider-independent by default absent a charter-level binding is *"a genuinely open policy question"* (Baseline §5.3).

### 9.3 What Remains Open at the Boundary

**[Open]** Grandfather-clause treatment when governance policy changes out from under a previously accepted Target (`CP-06`) — Baseline §7.8 tests 17 and 20 record it as unresolved; M.6 §7.10 already encodes one answer.
`⚠ DEPENDENCY: CP-06 unresolved`

**[Open]** Whether provider-version pinning is required for reproducibility guarantees, and whether Target identity may be charter-bound to a specific provider (Baseline §14).

**[Open]** Whether AI-DOS permits more than one assigning authority per entity, and how conflicts are adjudicated (`VS-Q8` / `NB-Q10`).

**[Established]** No boundary policy, pinning mandate, adapter policy, or Target-facing compatibility guarantee is selected or recommended by this draft.

---

## 10. Unresolved-Dependency Register

This register carries forward **every** unresolved item required by the merged Decision Package, using each item's **source-native identifier**, without renumbering, relabeling, merging, or dropping any. Where two identifiers are recorded by the sources as related-but-distinct (equivalent, specialization, adjacent-but-distinct, dependency, or no established mapping), that distinction is preserved exactly as the Decision Package §4 records it — identifiers are never silently collapsed.

Gate assignments in the "Blocks" column are reproduced from the Decision Package §6.1 and §9. They are the Decision Package's assignments, not new assignments made here.

### 10.1 STEP 7 Policy Questions — `VS-Q1` … `VS-Q9` (nine items, complete)

| ID | Question (condensed from STEP 7 §11) | Native cross-reference | Decision class | Blocks | Status |
|:---|:---|:---|:---|:---|:---|
| `VS-Q1` | Which §5 signaling family (or hybrid) should AI-DOS adopt? | `SV-01` | Human Governance policy choice | Gate C | **Partially resolved at the broader register-question level (recorded 2026-07-31) — see §10.11.1.** Gate C is complete for its authorized bounded scope: Family 1 for Contract-class and Realization-class (Candidate 6 for Contract-class only; the separately accepted class-specific Realization policy for Realization-class); Family 9 for Relational/Compositional-class; Family 3 for version-claim-bound Record-class. No Gate C selection is recorded for another entity class; the universal answer remains undecided. |
| `VS-Q2` | Is M.6's rebuttable MAJOR→`Migration-Needed` default acceptable policy? | `SV-02` | Human Governance policy choice | Gate C | Found non-blocking for the completed bounded Gate C scope (§10.11.2, 2026-07-31); not decided; remains Undecided generally. |
| `VS-Q3` | Should Release/Package receive a new M.6 scope level, or resolve via composition? | `RC-01`, `RC-02` | Responsibility/ownership allocation (via `RC-01`/`RC-02`); the scope-level design question itself is a Human Governance policy choice | Gates B, D | **Decided — `VS-Q3-B` (2026-07-29).** See §10.10. No new M.6 scope level; Release/Package version scope is represented through composition of the five existing scope levels. |
| `VS-Q4` | Should previously-accepted entities be grandfathered under a changed version policy? | `CP-06` | Human Governance policy choice | Gates C, D | **Unresolved** |
| `VS-Q5` | Does M.4's single-state model represent, or substitute for, the standing/applicability duality? | `LC-02` | Synthesis design choice | Gate D | **Unresolved** |
| `VS-Q6` | May version metadata be corrected pre-reliance without triggering M.6's assignment-time immutability invariant? | `AU-01` | Human Governance policy choice (via `AU-01`) | Gate D | **Unresolved** |
| `VS-Q7` | Should AI-DOS require transport formats to fail loudly on unrecognized version-signal fields? | STEP 7 §8 test 17 (new to STEP 7) | Human Governance policy choice | Not assigned a blocking gate in Decision Package §6.1; ballot §9 records "None blocking Gate A/B/C" | **Unresolved** |
| `VS-Q8` | Should AI-DOS permit more than one assigning authority per entity? | STEP 7 §8 test 18 (new to STEP 7) | Human Governance policy choice | Gate D | **Unresolved** |
| `VS-Q9` | Should a ninth "evidence rigor" dimension be added to the §4 floor list? | STEP 7 §8 test 12 (new to STEP 7) | Synthesis design choice | Ballot §9 records "None blocking Gate A/B/C" | **Unresolved** |

**Count confirmation:** nine `VS-Q` items are present, `VS-Q1` through `VS-Q9`, matching STEP 7 §11 exactly.

### 10.2 STEP 8 Human Governance Questions — `NB-Q1` … `NB-Q14` (fourteen items, complete)

| ID | Question (condensed from STEP 8 §13) | Native cross-reference | Decision class | Blocks | Status |
|:---|:---|:---|:---|:---|:---|
| `NB-Q1` | One numbering-model family and one bump-rule family Framework-wide, or per-entity-class families under a shared comparison discipline? | New to STEP 8 (§6, §7 decision criteria) | Human Governance policy choice | **Gates B, C** | **Decided — `NB-Q1-B` (2026-07-28).** See §10.9. |
| `NB-Q2` | Which §6 numbering-model family (or hybrid) for which entity class(es)? | `SV-01`; `VS-Q1` | Human Governance policy choice | Gate C | **Partially resolved at the broader register-question level (recorded 2026-07-31) — see §10.11.1.** Gate C is complete for its authorized bounded scope: Family 1 for Contract-class and Realization-class (Candidate 6 for Contract-class only; the separately accepted class-specific Realization policy for Realization-class); Family 9 for Relational/Compositional-class; Family 3 for version-claim-bound Record-class. No Gate C selection is recorded for another entity class; the universal answer remains undecided. |
| `NB-Q3` | Is M.6's rebuttable default acceptable, and does a rebuttable default count as the "automatic mapping" STEP 6 rejected? | `SV-02`; `VS-Q2` | Human Governance policy choice | Gate C | Found non-blocking for the completed bounded Gate C scope (§10.11.2, 2026-07-31); not decided; remains Undecided generally. |
| `NB-Q4` | Should Release/Package receive a new M.6 scope level, or resolve via composition? | `RC-01`, `RC-02`; `VS-Q3` | Responsibility/ownership allocation (via `RC-01`/`RC-02`); the scope-level design question itself is a Human Governance policy choice | Gates B, D | **Decided — `NB-Q4-B` (2026-07-29).** See §10.10. No new M.6 scope level; Release/Package version scope is represented through composition of the five existing scope levels. |
| `NB-Q5` | Grandfathering under a changed numbering or bump-rule policy? | `CP-06`; `VS-Q4` | Human Governance policy choice | Gates C, D | **Unresolved** |
| `NB-Q6` | Does M.4's single-state model represent or substitute for the standing/applicability duality for bump-rule status representation? | `LC-02`; `VS-Q5` | Synthesis design choice | Gate D | **Unresolved** |
| `NB-Q7` | Should a bounded post-Review/Canonical correction-without-bump path exist beyond M.6 §7.8's pre-Review-only Revision? | Baseline §5.4 test 2; Baseline §13 register (new to STEP 8) | Human Governance policy choice (Decision Package §9 ballot) | Gate D | **Unresolved** |
| `NB-Q8` | May version metadata be corrected pre-reliance without triggering M.6's immutability invariant? | `AU-01`; `VS-Q6` | Human Governance policy choice (via `AU-01`) | Gate D | **Unresolved** |
| `NB-Q9` | Fail-loudly requirement on unrecognized fields, extended to numbering-value fields? | `VS-Q7` | Human Governance policy choice | Ballot §9: "None blocking Gate A/B/C" | **Unresolved** |
| `NB-Q10` | More than one assigning authority per entity, and adjudication mechanism? | `VS-Q8`; STEP 8 §10 P-15 item 4 | Human Governance policy choice | Gate D | **Unresolved** |
| `NB-Q11` | Should a ninth "evidence rigor / validation depth" dimension be added, and does it bear on bump-rule-family design? | `VS-Q9` | Synthesis design choice | Ballot §9: "None blocking Gate A/B/C" | **Unresolved** |
| `NB-Q12` | May a composed release's number ever be partly mechanically derived from constituent numbers under a declared, evidenced policy? | STEP 8 §8 P-5; `CP-01`-adjacent reasoning (see Appendix A item 2) | Human Governance policy choice | Gate B (partially), Gate C | **Unresolved.** Its Tier-0b dependency (`RC-01`/`RC-02`) is now Decided (§10.9), removing that portion of the blocker; its Tier-1 dependency (`NB-Q2`) remains open, so `NB-Q12` itself is only partially advanced |
| `NB-Q13` | One canonical cross-family comparison algorithm, or comparison scoped within one family with cross-family comparison Indeterminate by design? | STEP 8 §10 P-14 (new to STEP 8) | Human Governance policy choice | Gate C | **Unresolved** |
| `NB-Q14` | How to represent "format-valid but authority-unverified" as distinct from "format-invalid," and what evidence resolves it? | STEP 8 §10 P-15 item 4; STEP 7 §8 test 18 (new to STEP 8) | Synthesis design choice | Gate D | **Unresolved** |

**Count confirmation:** fourteen `NB-Q` items are present, `NB-Q1` through `NB-Q14`, matching STEP 8 §13 exactly.

### 10.3 Reconciliation Assessment Identifiers Required by the Authorizing Instruction

All eighteen identifiers named in the authorizing instruction were located in the Reconciliation Assessment §2 matrix. Each is carried forward with its own native classification.

| ID | Subject (condensed) | Reconciliation classification | HG action required (per Assessment) | Decision class (Decision Package §5) | Blocks (Decision Package §6.1) | Status |
|:---|:---|:---|:---|:---|:---|:---|
| `CP-02` | M.7's closed five-type relation enumeration vs. the required Indeterminate outcome | **6 — Definite semantic conflict** | No — specification-completeness defect | Specification-completeness correction | Gate C (partially), Gate D | **Unresolved** |
| `UN-01` | M.6's closed four-category Migration Obligation enumeration vs. "insufficient information for a conclusion" | **6 — Definite semantic conflict** | No — specification-completeness defect | Specification-completeness correction | Gate C (partially), Gate D | **Unresolved** |
| `LC-02` | M.4's single lifecycle state vs. distinct standing/applicability projections | 4 — Terminology/representation difference | **Yes** | Synthesis design choice | Gate D | **Unresolved** |
| `LC-03` | M.4's fixed sequential transition-evaluation order vs. decoupled authority/effectiveness components | 5 — Apparent semantic conflict | No — scope clarification | Specification-completeness correction | None (via §3.4 grouping) — see Appendix A item 4 | **Unresolved** |
| `LC-04` | Historical Operations Taxonomy (14 operations) largely absent from M.4's 9 transition types | 7 — Baseline matter absent from Meta-Models | No — coverage gap | Responsibility/ownership allocation | Gate D (only if a future amendment covers the territory) | **Unresolved** |
| `CP-06` | Grandfather-clause treatment vs. M.6's Migration-Window-Closed rule | 9 — Human Governance policy decision required | **Yes** | Human Governance policy choice | Gates C, D | **Unresolved** |
| `SV-01` | Numbering-scheme selection — deferred by Baseline vs. M.6's owned MAJOR.MINOR.PATCH | 9 — Human Governance policy decision required | **Yes** | Human Governance policy choice | Gate C | **Partially Decided at the broader register-question level (recorded 2026-07-31) — see §10.11.1.** Gate C is complete for its authorized bounded scope: Family 1 for Contract-class and Realization-class (Candidate 6 for Contract-class only; the separately accepted class-specific Realization policy for Realization-class); Family 9 for Relational/Compositional-class; Family 3 for version-claim-bound Record-class. No Gate C selection is recorded for another entity class; the universal answer remains undecided. |
| `SV-02` | M.6's obligation-from-increment mapping vs. the non-inference chain | 5 — Apparent semantic conflict | **Yes** | Human Governance policy choice | Gate C | Found non-blocking for the completed bounded Gate C scope (§10.11.2, 2026-07-31); not decided; remains Undecided generally. |
| `AU-01` | Reliance-boundary-conditioned mutability vs. M.6's assignment-time immutability invariant | 5 — Apparent semantic conflict | **Yes** | Human Governance policy choice | Gate D | **Unresolved** |
| `AU-02` | Ten release authorities ("none implies any other") vs. M.6's narrower authority model | 2 — Compatible, baseline more detailed | No — but cited as bearing on `NB-Q12` | Downstream specification dependency (fuller authority lattice) | Gate D | **Unresolved (non-conflicting extension)** |
| `RC-01` | Seven-stage release composition model has no owner in M.4/M.6/M.7 | 7 — Baseline matter absent from Meta-Models | No (per Assessment) | Responsibility/ownership allocation | **Gates B, D** | **Decided — `RC-01-D` (2026-07-28): ownership allocated to a future, separately authorized, dedicated Release/Composition artifact; artifact form undecided.** See §10.9. |
| `RC-02` | No "Release" scope level exists in M.6's Version Scope model | 7 — Baseline matter absent from Meta-Models | No (per Assessment) | Responsibility/ownership allocation | **Gates B, D** | **Decided — `RC-02-E` (2026-07-28): Release Identity policy ownership allocated to the same prospective artifact as `RC-01`, as a distinct concern; no M.6 scope-level amendment decided.** See §10.9. |
| `MG-01` | Nine-object migration ontology vs. M.6's narrower Obligation/Requirement/Window model | 2 — Compatible, baseline more detailed | No | Responsibility/ownership allocation | Gate D (only if a future amendment covers the territory) | **Unresolved (non-conflicting extension)** |
| `MG-02` | M.6's Rollback Reference vs. STEP 6's six non-interchangeable rollback result types | 7 — Baseline matter absent from Meta-Models | No — coverage gap | Responsibility/ownership allocation | Gate D (as above) | **Unresolved**; Decision Package §4.1 records **"No established mapping"** to any `VS-Q`/`NB-Q` — see Appendix A item 3 |
| `MG-03` | Migration destination-state validity has no counterpart in M.6 | 7 — Baseline matter absent from Meta-Models | No | Responsibility/ownership allocation | Gate D (as above) | **Unresolved** |
| `LS-03` | "Fork," "regeneration," "reassessment" absent from M.6's operation vocabulary | 7 — Baseline matter absent from Meta-Models | No | Responsibility/ownership allocation | Gate D (as above) | **Unresolved** |
| `FD-01` | No named Layer-2 "actual state of affairs" concept in M.4–M.7's Owned Semantics | 7 — Baseline matter absent from Meta-Models | No | Informative/non-blocking matter | Gate D (as above) | **Unresolved** |
| `SC-01` | Structural completeness vs. semantic correctness — no treatment located in M.7 | **10 — Insufficient evidence to classify** | No | Informative/non-blocking matter | **Undetermined** — requires reading M.9, outside every cited work unit's authorized scope | **Unresolved; gate assignment undetermined** |

**[Established]** One further reconciliation identifier not named in the authorizing instruction is carried here because §4 of this draft depends on it and the Decision Package treats it as blocking:

| ID | Subject | Classification | Decision class | Blocks | Status |
|:---|:---|:---|:---|:---|:---|
| `CP-01` | Fifteen-dimension compatibility vs. a single relation type per assessed pair | 5 — Apparent semantic conflict | Specification-completeness–adjacent; Decision Package §6.1 groups it with `CP-02`/`UN-01` for gate purposes | Gate C (partially), Gate D | **Unresolved** |

**[Established]** Distinctions the Decision Package §4.1 records and this draft preserves without merging: `CP-02` ↔ `UN-01` are **adjacent but distinct** (*"resolving one does not resolve the other"*); `CP-01` ↔ `CP-02` is a **dependency**, not an equivalence; `NB-Q13` ↔ `NB-Q2` is **adjacent but distinct** (comparison vs. selection); `NB-Q14` ↔ `VS-Q8`/`NB-Q10` is **adjacent but distinct** (representation vs. adjudication); `VS-Q1` ↔ `NB-Q2` is a **specialization**, not an equivalence; `VS-Q3` ↔ `NB-Q4` and `VS-Q6` ↔ `NB-Q8` are **equivalent** restatements. None of these relationships is treated here as a resolution of either mapped item.

### 10.4 Remaining Reconciliation Rows (carried for losslessness)

**[Established]** The Reconciliation Assessment's own §3.1–§3.3 synthesis classifies the following as aligned, non-conflicting, or terminology-only; none carries a Human Governance action requirement in its §3.8 register, and the Decision Package §6.1 assigns none of them any gate: `LC-01`, `EV-01`, `EV-02`, `EV-03`, `VI-01`, `VI-03`, `LS-01`, `LS-02`, `LS-04`, `LS-05`, `CP-04`, `CP-05`, `FD-02`, `UN-02`. They are listed here so the 33-row matrix is represented in full and are not re-litigated.

### 10.5 Coverage Assessment Identifiers — `CMP-01` … `CMP-12` (twelve items, complete)

| ID | Subject (condensed) | Coverage result | Placement established? (Coverage Assessment, original finding) | Ownership allocation (current, post-`RC-01-D`/`RC-02-E`) | Substantive treatment (current) | Blocks (Decision Package §6.1, as originally assigned) |
|:---|:---|:---|:---|:---|:---|:---|
| `CMP-01` | Release identity vs. composition-equality principle | Partial | Not established | **Not allocated** — no owner, prospective or existing; outside both `RC-01-D`'s and `RC-02-E`'s named territory | Not established | Gate B; Gate D for whichever future artifact resolves it |
| `CMP-02` | Materialized/installed/deployed decomposition method | Absent (as a decomposition method) | Not established | Not allocated (unchanged; not part of `RC-01`/`RC-02` territory) | Not established | — (not listed among the Gate-B subset) |
| `CMP-03` | Seven declared/realized composition stages | Split — declared-through-installed partial; "deployed" an explicit A.6 boundary; "observed" partial/absent | Not established | **Allocated — `RC-01-D`** (the named "seven-stage process") | Not established — "deployed"/"observed" operational meaning remains unresolved, later work | Gate B; Gate D (see note below table) |
| `CMP-04` | Constituent reference/binding-type taxonomy (12 types) | Explicitly excluded by A.6 | Not established — **already occupied by A.6.1** | Allocated — A.6.1 (unchanged) | Established — A.6.1 §2.2 | Gate B (recorded as no longer further blocking) |
| `CMP-05` | Constituent role model | Explicitly excluded by A.6 | Same as `CMP-04` | Same as `CMP-04` | Established — A.6.1 §2.2 | As above |
| `CMP-06` | Required/optional/conditional/alternative membership | Explicitly excluded by A.6 | Same as `CMP-04` | Same as `CMP-04` | Established — A.6.1 §2.2 | As above |
| `CMP-07` | Release/variant/representation/realization identity; Release-candidate identity | Partial | Not established — open policy question in the Baseline itself | **Allocated — `RC-02-E`** (the named "four release-identity possibilities"), for Release Identity policy only — not expanded into Release Composition authority | Not established — which of the identity possibilities applies remains unresolved, later work | Gate B; Gate D (see note below table) |
| `CMP-08` | Eleven completeness dimensions | Split — most partial; state-binding/role excluded; operational completeness absent | Not established | State-binding/role: allocated — A.6.1. Operational-completeness: **allocated (ownership) — `RC-01-D`** (the named "completeness dimensions") | State-binding/role: established — A.6.1 §2.2. Operational-completeness: not established — remains unresolved, later work | Gate B (operational-completeness portion); Gate D (see note below table) |
| `CMP-09` | Ten distinct release/composition authorities | Differentiated per authority | Not established for any of the four separately reassessed authorities | "select constituents": partially covered by existing A.6 §4.2 text. "assemble": two tied future candidates, neither preferred. "authorize operational reliance" / "observe deployment/use": **allocated (ownership) — `RC-01-D`** (the named "authority lattice") | "authorize operational reliance" / "observe deployment/use": not established — remains unresolved, later work. The other two: as recorded by the Coverage Assessment, unchanged | Gate B ("authorize operational reliance", "observe deployment/use" portions); Gate D (see note below table) |
| `CMP-10` | Compatibility/cascade rules (Architecture layer) | Partial | Not established (out of primary scope; already addressed by `CP-01`/`CP-02`/`CP-04`/`CP-05`/`CP-06`) | Not allocated (unchanged; outside `RC-01`/`RC-02` territory) | Not established | — |
| `CMP-11` | Twenty-four entity-type applicability matrix; three-tier Target-supplied model | Partial | Not established | Not allocated (unchanged; outside `RC-01`/`RC-02` territory) | Not established | — |
| `CMP-12` | Release process / package publication / deployment mechanics as a whole | Partial | Not established | Not allocated (unchanged; outside `RC-01`/`RC-02` territory) | Not established | — |

**[Established]** The "Ownership allocation" and "Substantive treatment" columns are added to this register to keep two distinct questions separate, consistent with §5.4: *who* (if anyone) is named to eventually decide a territory is a different question from *what* that territory's content should be. `RC-01-D` and `RC-02-E` (§10.9) answer only the first question, and only for the specific territory each names verbatim — neither is expanded to cover a territory it does not name (`CMP-01` remains unowned by either), and neither decision supplies, implies, or narrows the substantive answer for any territory it does cover. Ownership allocation for `CMP-03`, `CMP-08` (operational-completeness), and `CMP-09` (the two orphan authorities) traces only to `RC-01-D`; ownership allocation for `CMP-07` traces only to `RC-02-E`. The two decisions are not combined into a shared authority anywhere in this table.

**[Established]** Note on the "Blocks" column: it reproduces the Decision Package's own Gate-Blocking Table (§6.1) verbatim, as originally assigned before `VS-Q3`/`NB-Q4` was decided. That table's own text states these items "would need **at least an explicit-dependency treatment** to complete a Gate-B candidate" (Decision Package §6.1) — not full resolution. This table's ownership/substance columns are exactly that explicit-dependency treatment; per §11.5, none of `CMP-01`, `CMP-03`, `CMP-07`, `CMP-08`, or `CMP-09` blocks Gate B any further, and none is reintroduced as a Gate B blocker by this table.

**[Established]** Required Conclusion preserved verbatim: **Outcome D — "Evidence remains insufficient for a single comparison-wide determination"** (Coverage Assessment §7). This draft does not narrow, resolve, or convert it.

**Count confirmation:** twelve `CMP` items are present, `CMP-01` through `CMP-12`, matching the Coverage Assessment §5 exactly.

### 10.6 Derived Synthesis Propositions — Consolidated List (non-normative)

The following are the only propositions this draft itself derives. Each is a consolidation of cited [Established] items, adds no new content, and is **non-normative, non-canonical, and unaccepted** exactly like its inputs. None resolves any register item.

| # | Derived proposition | Located at | Built from |
|:---|:---|:---|:---|
| D-1 | The candidate version-bearing subject space can be consolidated without assigning any entity family a final versioning treatment, because the entity enumeration is an explicit floor and four subject questions remain open | §2.4 (closing) | Baseline §5.2; STEP 7 §5 P-1/P-2; STEP 8 §5 P-1/P-4 |
| D-2 | At least seven axes (identity, lifecycle state, revision, release act, compatibility relation, evidence standing, historical state) are separately traceable to distinct owning locators and are therefore recorded as distinct here | §3.6 | Baseline §5.1, §9.2; STEP 8 §4, §5 P-2; M.4 §7.2; M.6 §7.3, §7.8; A.6 §8 |
| D-3 | The compatibility area consolidates as a multi-dimensional, contextual, direction-bearing, evidence-bound relation with a five-field factored outcome and a required representable "not established" value, with the concrete enumeration and grandfathering policy left open | §4.5 | Baseline §7.1–§7.4; M.7 §7.1, §8 Rules 1/4; `CP-01`, `CP-02`, `CP-06`; STEP 7 P-13; STEP 8 P-10 |
| D-4 | The evidence/historical area consolidates as separately evidenced assertions with fixed historical occurrence and separately variable current standing, bound to already-named M.5 evidence classes | §8.4 | Baseline §9.1, §9.4–§9.7, §12; M.5 §7.2, §7.4–§7.6; STEP 7 P-14; STEP 8 §11 |
| D-5 | AI-DOS and an arbitrary Target Project may evolve independently while retaining a declared compatibility relation, because the two occupy separate truth domains, Target-supplied values never become Product truth, and the relation is a separately declared, separately evidenced, separately revisable object | §9.2 | A.6 §3, §16; Baseline §8.11, §10.10; M.6 §10; M.7 §7.10, §8 Rule 4; Baseline §7.1, §7.5 |

### 10.7 Decision-Class Separation (reproduced from Decision Package §5)

Each item below carries **exactly one** primary decision class, as the Decision Package assigns it. No item is reassigned here. Three items — `NB-Q1`, `RC-01`, `RC-02` — are now Decided (§10.9), and two more — `VS-Q3`, `NB-Q4` — are now Decided (§10.10); they remain listed in their original decision class below, annotated, since a decision does not change which class of question it was. `SV-01`/`VS-Q1`/`NB-Q2` is now Partially Decided at the broader register-question level (§10.11.1, 2026-07-31): **Gate C is complete for its authorized bounded scope** — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class — while the universal answer and the answer for every other entity class remain undecided; this does not reassign `SV-01`/`VS-Q1`/`NB-Q2`'s decision class.

| Decision class | Items |
|:---|:---|
| **Human Governance policy choice** — a genuine value-laden choice among legitimate alternatives | `SV-01`/`VS-Q1`/`NB-Q2` **(Partially Decided at the broader register level — bounded Gate C complete, §10.11.1)**; `SV-02`/`VS-Q2`/`NB-Q3` **(found non-blocking for the completed bounded scope, §10.11.2; not decided)**; `CP-06`/`VS-Q4`/`NB-Q5`; `NB-Q1` **(Decided — `NB-Q1-B`, §10.9)**; `VS-Q7`/`NB-Q9`; `VS-Q8`/`NB-Q10`; `NB-Q12`; `NB-Q13` (with `AU-01`/`VS-Q6`/`NB-Q8` and `NB-Q7` carried as HG ballot items per Decision Package §9) |
| **Specification-completeness correction** — a drafting/enumeration-completeness defect, **not** a choice among competing legitimate values | `CP-02` (M.7 closed five-type enumeration lacking Indeterminate); `UN-01` (M.6 closed four-category enumeration lacking Undetermined); `LC-03` (M.4 transition-order scope clarification) |
| **Responsibility/ownership allocation** — *"which authority or future artifact should own a territory, not what the territory's content should be"* (Decision Package §5) | `RC-01` **(Decided — `RC-01-D`, §10.9)**, `RC-02` **(Decided — `RC-02-E`, §10.9)**; `LC-04`; `MG-01`, `MG-02`, `MG-03`; `LS-03`; `CMP-04`, `CMP-05`, `CMP-06`, and the state-binding/role portion of `CMP-08` (already allocated to A.6.1); `CMP-09`'s "assemble", "authorize operational reliance", "observe deployment/use" authorities |
| **Synthesis design choice** — the required property is already established; only the concrete mechanism is open | `NB-Q6`/`VS-Q5`/`LC-02`; `NB-Q11`/`VS-Q9`; `NB-Q14` |
| **Downstream specification dependency** — depends on a future, separately authorized artifact this draft does not create | The Version Signal Evidence-Binding Specification (STEP 7 §12; STEP 8 §11, §14); a future Release Engineering / Artifact Assembly RFC or Release Composition Standard (`CMP-04`–`CMP-06`, `CMP-09` "assemble"); `AU-02`'s fuller authority lattice |
| **Informative/non-blocking matter** — recorded for losslessness; blocks no gate | `LC-01`, `EV-01`, `EV-02`, `EV-03`, `VI-01`, `VI-03`, `LS-01`, `LS-02`, `LS-04`, `LS-05`, `CP-04`, `CP-05`, `FD-01`, `FD-02`, `UN-02`, `SC-01` (also insufficient-evidence-to-classify) |

**[Established]** The Decision Package's own explicit application of this separation is preserved: `CP-02` and `UN-01` are classified as specification-completeness corrections, **not** Human Governance policy choices, because the Reconciliation Assessment states both are *"fixable by adding a governed 'Indeterminate'/'Undetermined' value or an explicit rule exception... not a choice among competing legitimate values"* (Decision Package §5, closing note).

### 10.8 Identifier-Presence Audit

**[Established]** Every identifier named by the authorizing instruction was located in at least one source read for this draft. None was absent, and no identifier is carried here with the "not found in sources" status the instruction provides for:

| Identifier group | Count required | Count located | Source located in |
|:---|:---|:---|:---|
| `VS-Q1` … `VS-Q9` | 9 | **9** | STEP 7 §11; reproduced verbatim at Decision Package §3.1 |
| `NB-Q1` … `NB-Q14` | 14 | **14** | STEP 8 §13; reproduced verbatim at Decision Package §3.2 |
| `CP-02`, `UN-01`, `LC-02`, `LC-03`, `LC-04`, `CP-06`, `SV-01`, `SV-02`, `AU-01`, `AU-02`, `RC-01`, `RC-02`, `MG-01`, `MG-02`, `MG-03`, `LS-03`, `FD-01`, `SC-01` | 18 | **18** | Reconciliation Assessment §2 (33-row matrix); §3.3/§3.4 of the Decision Package |
| `CMP-01` … `CMP-12` | 12 | **12** | Coverage Assessment §5; reproduced at Decision Package §3.5 |

---

### 10.9 Recorded Human Governance Decisions (2026-07-28)

**[Established]** Human Governance has decided exactly three items from the register above: `NB-Q1`, `RC-01`, and `RC-02`. This is the only change of status this draft records; every other item in §10.1–§10.6 remains exactly as unresolved as this draft originally recorded it. This subsection moves each decided item's consequences into the appropriate class below, consistent with §10.7's decision-class separation, without restating or re-deriving the underlying research.

| Item | Decision-Package decision class (§10.7) | Selected option | Authoritative interpretation | Explicitly not decided |
|:---|:---|:---|:---|:---|
| `NB-Q1` | Human Governance policy choice | `NB-Q1-B` | Entity-class-specific numbering-model and bump-rule families are authorized, under a shared minimum comparison discipline. | `NB-Q2` (family selection); `NB-Q3` (rebuttable-default acceptability); `NB-Q13` (the shared comparison discipline's own mechanism and owner, unnamed by any source). |
| `RC-01` | Responsibility/ownership allocation | `RC-01-D` | Ownership of the complete Release Composition model (the seven-stage process, its completeness dimensions, its authority lattice) is allocated to a future, separately authorized, dedicated Release/Composition artifact. | The artifact's form (Standard, Meta-Model, RFC, or another authority class); its creation, naming, or content. `RC-02` is a distinct decision (below), not merged with this one. |
| `RC-02` | Responsibility/ownership allocation | `RC-02-E` | Ownership of Release Identity policy (the four release/variant/representation/realization identity possibilities) is allocated to the same prospective artifact named for `RC-01`, as a **distinct** architectural concern. | Whether M.6 §7.2 later also gains a Release scope-level entry — an explicit, separately unresolved candidate-synthesis dependency, not decided here. Any M.0/M.1 classification of Release; any M.3 relationship mapping; any M.2 identity-type amendment. `RC-01` is a distinct decision (above), not merged with this one. |

**[Established]** These three decisions clear the Decision Package's own Gate-B minimum decision set (§10.2 there). **[Established]** They do not complete a candidate synthesis, select or approve any Versioning Architecture, authorize any normative amendment, or authorize promotion — see §11 and §12 below, both updated to reflect this recording. **[Established]** Every remaining Gate-B dependency this draft already carried — `CMP-01`, `CMP-03` (the "deployed"/"observed"-broad portions), `CMP-07`, `CMP-08` (the operational-completeness portion), `CMP-09` (the "authorize operational reliance"/"observe deployment/use" portions), and `NB-Q12` (partially advanced only) — remains exactly as open as before this recording (§5.2, §5.4, §10.2, §10.3, §12.2).

**[Established]** This recording does not change this draft's own lifecycle status. This document remains **Draft, non-normative, non-canonical, and incomplete**, and it remains **not a selected or approved Versioning Architecture** — recording that three dependency items have been decided is not itself the completion, selection, or approval this draft's own Document Metadata and §0.1 continue to withhold.

**[Established]** Disclosure, carried forward from the governance thread that produced this recording: an earlier Claude-authored decision-support proposal for this ballot substantively inverted `RC-01` and `RC-02` — analyzing Release Identity under the `RC-01` label and Release Composition under the `RC-02` label, the reverse of their verbatim source subjects (`RC-01` = the seven-stage Release Composition model, Baseline §8.3, confirmed by Coverage Assessment `CMP-03`'s own rationale, "This is `RC-01`'s underlying subject"; `RC-02` = Release Identity policy, Baseline §8.7, confirmed by Coverage Assessment `CMP-07`'s own rationale, "This is `RC-02`'s identity-policy subject"). That inverted proposal carried no governance effect and was corrected before any decision was made. The decision recorded above was made against the corrected, source-verified identity mapping only.

---

### 10.10 Recorded Human Governance Decision (2026-07-29)

**[Established]** Human Governance has additionally decided `VS-Q3` and `NB-Q4` — the literal, source-native question *"Should Release/Package receive a new M.6 scope level, or resolve via composition?"* (STEP 7 §11; STEP 8 §13), preserved exactly as those identifiers define it. This decision is separate from, and not a restatement of, the `RC-01`/`RC-02` ownership-allocation decisions recorded at §10.9: `RC-01-D`/`RC-02-E` allocate ownership of the Release Composition model and Release Identity policy to a future artifact; they do not, and did not purport to, answer whether M.6 gains a new scope level. Per the Decision Package's own rule that "a cross-reference is not a resolution of either mapped item" (Decision Package §4), `VS-Q3`/`NB-Q4` required this separate recording.

| Item | Decision-Package decision class (§10.7) | Selected option | Authoritative interpretation | Explicitly not decided |
|:---|:---|:---|:---|:---|
| `VS-Q3` / `NB-Q4` | Responsibility/ownership allocation (via `RC-01`/`RC-02`), with the scope-level design question itself a Human Governance policy choice | `VS-Q3-B` / `NB-Q4-B` | No new M.6 §7.2 scope level is added. Release/Package version scope is represented through composition of the five existing M.6 scope levels (Framework, Domain, Artifact, Schema, Contract). This is a candidate-synthesis decision; it does not itself amend M.6. | The future Release/Composition artifact's exact form, name, schema, or lifecycle. The exact composition mechanism, precedence rule, or validator for a given Release/Package's participating scopes — none is uniquely determined by any cited source and none is invented here. `CMP-01` ownership (assigned to neither `RC-01-D` nor `RC-02-E`, and not addressed by this decision). Any merger of `RC-01-D` and `RC-02-E`. Any normative promotion, implementation, or Gate C/D/E act. |

**[Established]** What this decision does: it resolves the sole remaining Gate-B-blocking Human Governance choice identified by the Decision Package's own Gate-Blocking Table (§6.1) for the combined `RC-01, RC-02/VS-Q3/NB-Q4` row, once that row's ownership-allocation component (`RC-01`/`RC-02`) had already been separately decided at §10.9.

**[Established]** What this decision does not do: it does not select, approve, or promote any Versioning Architecture (Gate C); it does not authorize drafting any normative amendment to M.6 or any other Meta-Model (Gate D); it does not authorize promotion or canonicalization (Gate E); it does not create, name, or scope the Release/Composition artifact; it does not classify Release under M.0/M.1 (`CMP-01` remains unowned); it does not select an M.3 relationship mapping; and it does not resolve `NB-Q2`, `NB-Q3`, `NB-Q13`, `CMP-03` (deployed/observed-broad substance), `CMP-07` (substance), `CMP-08` (substance), `CMP-09` (substance), or `NB-Q12`, each of which remains exactly as open as before this recording, carried forward as an explicit dependency for whichever later gate or future artifact resolves it (§5.4, §10.1–§10.6, §12.2).

**[Established]** This recording does not change this draft's own lifecycle status. This document remains **Draft, non-normative, non-canonical**, and — notwithstanding the Gate B completion recorded at §11.5/§12.2 below — it remains **not a selected or approved Versioning Architecture**. Completing Gate B records that a coherent candidate proposal exists for Human Governance review; it is not itself Gate C selection, Gate D amendment, or Gate E promotion.

---

### 10.11 Recorded Human Governance Decisions and Findings (2026-07-31) — Completed Bounded Gate C Scope, Tier 1 Recording-Completeness, and Related Provenance

**[Established]** **Gate C is complete for its authorized 2026-07-31 bounded scope covering Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class. `SV-01`/`VS-Q1`/`NB-Q2` remains Partially Decided at the broader register-question level because no universal family answer or answer for other entity classes was recorded. Matters outside the authorized scope do not make the completed bounded Gate C incomplete.**

**[Established]** This subsection records, individually, decisions and findings made or confirmed by Human Governance in the session preceding the Gate D drafting work unit (PR #366, merged 2026-07-30) and in the subsequent provenance-audit correction session, cross-referenced with the parallel recording at Decision Package §9.2. No omnibus "Consolidated Closure" entry is created. This subsection records only; it selects no new architectural answer and reassigns no register item to a different decision class.

#### 10.11.1 Completed bounded Gate C decisions and four-class mapping

**[Established]**

| Item | Decision-Package decision class (§10.7) | Selected Option | Authoritative Interpretation | Explicitly Not Decided |
|:---|:---|:---|:---|:---|
| `SV-01`/`VS-Q1`/`NB-Q2` (Contract-class) | Human Governance policy choice | Family 1 (MAJOR.MINOR.PATCH); Candidate 6 | Candidate 6 is selected as the Contract-class Tier 2 bump-rule mechanism. Recorded from Normative-Intent Draft §4–§5; no prior session record located in this repository. | The universal answer, or the answer for any entity class other than the four named in this subsection. |
| `SV-01`/`VS-Q1`/`NB-Q2` (Realization-class) | Human Governance policy choice | Family 1 (MAJOR.MINOR.PATCH); the separately accepted class-specific Realization-class policy | This policy is accepted as its own class-specific policy, is **not** Candidate 6, and no eligibility layer applies to it. Recorded from Normative-Intent Draft §4, §6; no prior session record located. | Whether Candidate 6 itself applies to Realization-class (it does not); whether this pattern generalizes to any other entity class. |
| `SV-01`/`VS-Q1`/`NB-Q2` (Relational/Compositional-class) | Human Governance policy choice | Family 9 (Structured multi-field) | Recorded from Normative-Intent Draft §4, §7; no prior session record located. | The universal or any-other-entity-class answer. |
| `SV-01`/`VS-Q1`/`NB-Q2` (Record-class, version-claim-bound) | Human Governance policy choice | Family 3 (Monotonic sequence/revision counter), starting at 1 | Recorded from Normative-Intent Draft §4, §8; no prior session record located. | The universal or any-other-entity-class answer. |
| `CP-02`/`UN-01` correction-semantics-and-authority-pathway | Specification-completeness correction (per §10.7) | Accept | Resolved by adding a governed `Indeterminate`/`Undetermined` value through each Meta-Model's own amendment and promotion chain, not by this act itself. Recorded from Normative-Intent Draft §4, §9, and the amendment's own `Authorizing Record` field; no prior session record located. | That `CP-02` or `UN-01` is itself closed; both remain open pending their own amendments' review, approval, and promotion. |
| Gate D scope and promotion dependencies | — (gate-coordination finding; not a §10.7-classified decision item) | Accepted | The M.6 (`UN-01`) and M.7 (`CP-02`) amendments are coordinated companion drafts and promotion dependencies of the Normative-Intent Draft. Recorded from Normative-Intent Draft §9; no prior session record located. | Approval or promotion of any of the three. |

**[Established]** **Gate C is complete for this authorized bounded scope: Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class, and only for the items named in this table. No Gate C selection or authority exists for another entity class.** Release-class remains outside the completed scope pending `CMP-01`; its deferral does not reopen or invalidate the completed bounded Gate C.

#### 10.11.2 `SV-02`/`VS-Q2`/`NB-Q3` — non-blocking for the completed scope, generally undecided

**[Established]**

| Item | Decision-Package decision class (§10.7) | Disposition | Authoritative Interpretation | Explicitly Not Decided |
|:---|:---|:---|:---|:---|
| `SV-02`/`VS-Q2`/`NB-Q3` | Human Governance policy choice | Found non-blocking for the completed bounded Gate C scope at §10.11.1 | Neither Candidate 6 nor the accepted Realization-class policy relies on a presumption-plus-rebuttal structure. Recorded from Normative-Intent Draft §10.1; no prior session record located. | Whether Rule 8's presumption-plus-rebuttal structure is acceptable Tier 2 or general Meta-Model policy — remains open generally. This is a disposition of non-blocking-ness, not a resolution; `SV-02`/`VS-Q2`/`NB-Q3` remains Undecided. |

#### 10.11.3 Ballot findings and eligibility eliminations (not architectural decisions)

**[Established]**

| Finding | Result | Provenance |
|:---|:---|:---|
| Candidate 3 | `C3-B` — not acceptable, independently sufficient safe-stop failure | No prior session record located; recorded from Normative-Intent Draft §4. |
| Candidates 1, 2, 4 | `L3-I` for both Contract-class and Realization-class | Same. |
| Candidate 6 | `L3-E` for Contract-class; `L3-I` for Realization-class, as an eligibility finding only | Candidate 6 is selected only for Contract-class (§10.11.1); its `L3-I` finding for Realization-class does not make it applicable there. Same provenance. |

**[Established]** `TC2-a`–`TC2-h` (Gate C Tier 2 ballot-constitution) is reported as a missing-provenance defect, not persisted as a decision. The Normative-Intent Draft states this ballot-constitution was "resolved," but no document — including this repository's own decision-recording surfaces — recovers what any individual `TC2-a` through `TC2-h` item asks or how it was individually answered. It is not converted into a decision here. It may be reconstructed only if an actual session record is later supplied and separately confirmed.

#### 10.11.4 `REC-2` — Tier 1 Recording-Completeness Policy

**[Established]** `REC-2` is ratified, by Human Governance confirmation dated 2026-07-31, as: the Tier 1 recording-completeness policy — Tier 1 is recording-complete only when every STEP 7 §4 signaling dimension (Identity, Revision, Release, Compatibility, Lifecycle, Channel, Maturity/Certification, Migration) is dispositioned as one of: (1) resolved by the selected numbering family; (2) resolved by an existing authoritative mechanism with actual coverage; or (3) explicitly recorded as an open decision.

**[Established]** `REC-2` is not the Record Family 3 starting-value choice. The Normative-Intent Draft §11 traceability table's attribution of `REC-2` to that choice is incorrect and is not repeated here; that document is outside this bounded change's scope and is not itself corrected by this entry.

**[Established]** This 2026-07-31 Human Governance ratification is the sole and current source of `REC-2`'s content. No earlier repository source is manufactured or claimed.

**[Established]** Tier 1 was recording-complete under this policy — every dimension qualified either by resolution or by being explicitly recorded as open. This does **not** mean every dimension was substantively resolved, that Gate C was universal, or that any preserved-open question at §10.1–§10.6 is closed.

#### 10.11.5 Record Family 3 starting-value-1 choice (unnumbered)

**[Established]** Record Family 3's monotonic counter begins at value 1, confirmed as a substantive Human Governance choice. This choice currently has no stable identifier, is not `REC-2`, and no replacement identifier is invented in this work unit. Traceable to: the downstream-consumed statement at Normative-Intent Draft §8, and this 2026-07-31 Human Governance confirmation.

#### 10.11.6 Ordering-necessity results

**[Established]** Confirmed by Human Governance, 2026-07-31, as the authoritative source for persistence (no prior document record located):

| Entity class | Ordering necessity |
|:---|:---|
| Contract-class | Required |
| Realization-class | Required |
| Relational/Compositional-class | Not required |
| Record-class (version-claim-bound) | Not required |
| Release-class | Excluded pending `CMP-01` |

**[Established]** Record-class's "ordering not required" is a family-selection eligibility minimum, not a description of the selected mechanism. The selected Family 3 rule (Normative-Intent Draft §8) independently provides a strictly increasing counter — a stronger property than the minimum eligibility condition. No contradiction exists between the eligibility finding and the selected family's own stronger property.

#### 10.11.7 Fine-grained-lineage necessity — governing rule only, no reconstructed table

**[Established]** No per-entity-class fine-grained-lineage-necessity table is located anywhere in the repository, and none is reconstructed or inferred here. The only located governing rule (STEP 8, eleven-family numbering table): Family 6 (symbolic/ordinal stage) is excluded where fine-grained lineage is required; otherwise Family 6 is not excluded by that criterion alone; undetermined rows remain undetermined. This is reported as a provenance gap, not converted into a per-entity-class table, and not inferred from the family selections at §10.11.1.

#### 10.11.8 Downstream lifecycle events (traceability only — not architectural decisions of this draft)

**[Established]** Completed: `UN-01` semantics review and approval are complete — the M.6 (`UN-01`) amendment's semantics were reviewed and approved by Human Governance, then incorporated into an integrated M.6 promotion candidate (PR #369, merged, commit `56fb1f298729e44afac0d42aae1a63641602a5d5`).

**[Established]** Pending: `UN-01` closure still requires complete integrated-M.6 Human Governance approval and canonical M.6 promotion, neither of which has occurred. `CP-02` remains open pending its own M.7 amendment's review, approval, and promotion chain — a distinct, separately unstarted lifecycle from `UN-01`'s. Gate E (not begun) and canonical promotion of any artifact remain unauthorized. The pathway decisions recorded at §10.11.1 do not themselves close `UN-01` or `CP-02`.

---

## 11. Gate Status

### 11.1 The Gate Model (reproduced from the Decision Package §6)

**[Established]** The merged Decision Package distinguishes **five** gates. An item blocking a later gate is never reported as blocking an earlier one merely because of that later effect (Decision Package §6):

| Gate | Definition (verbatim from Decision Package §6) |
|:---|:---|
| **Gate A** | *"Opening synthesis drafting. The threshold for beginning to draft a Versioning Architecture synthesis candidate document."* |
| **Gate B** | *"Completing a coherent synthesis candidate. The threshold for a complete, internally consistent draft proposal covering numbering, signaling, bump-rule, and composition treatment, ready for Human Governance review — a proposal, not yet a ratified policy."* |
| **Gate C** | *"Selecting final numbering/signaling/bump-rule policy. The Human Governance act of choosing among the synthesis candidate's presented alternatives."* |
| **Gate D** | *"Amending M.4–M.7 or another normative family. The drafting and approval of actual amendment text to a Meta-Model (or a new Meta-Model/Standard) reflecting the selected policy."* |
| **Gate E** | *"Promotion or canonicalization. Framework Governance review and Human Governance approval promoting the amended artifact(s) to canonical status."* |

> **Inline note.** The authorizing instruction for this drafting pass named four gates (A–D). The merged Decision Package §6 defines **five** (A–E). This draft preserves the merged package's five-gate model unchanged rather than truncating it, because truncating it would silently alter the established gate model. No gate definition is reworded, merged, renumbered, or reassigned here. See Appendix A item 1.

### 11.2 What This Work Exercises

**[Established]** This work exercises **Gate A only**. The Decision Package records that the minimum decision set for Gate A is **empty**: *"None of the items in this package's inventory is demonstrated, by any cited source, to block Gate A"* and *"the minimum decision set for opening synthesis drafting is **empty** — drafting may begin using the existing research corpus as input, provided every dependency identified in §6–§8 above is carried forward into the draft as an explicit, tracked open item rather than silently assumed"* (Decision Package §10.1).

**[Established]** This draft carries every such dependency forward explicitly, in §10, and assumes none of them silently.

### 11.3 Gate B — Candidate-Synthesis Completion

**[Established]** As originally recorded, this draft did not pass Gate B, notwithstanding the decisions recorded at §10.9. The Decision Package's minimum set for Gate B (§10.2) was:

- `NB-Q1` — *"required because `NB-Q2`/`NB-Q3` cannot be coherently drafted in either a scoped or unscoped form until this is known (STEP 8 §14)"*;
- `RC-01`/`RC-02` — *"required because the composition-level numbering analysis (§8 P-5–P-7) is explicitly conditional on this remaining open, and a synthesis candidate cannot completely specify Release/Package numbering without at least an explicit-dependency placeholder resolved to a concrete design choice."*

Both were cleared by the §10.9 decisions (`NB-Q1-B`, `RC-01-D`, `RC-02-E`). Per the Decision Package's own Gate-Blocking Table (§6.1), the combined `RC-01, RC-02/VS-Q3/NB-Q4` row additionally required the scope-level design question itself — the sole remaining Gate-B-blocking Human Governance choice this package's evidence identified. **That choice is now Decided: `VS-Q3-B`/`NB-Q4-B` (§10.10, 2026-07-29)** — no new M.6 scope level; Release/Package version scope is represented through composition of the five existing scope levels.

**[Established]** The Decision Package's own Gate-Blocking Table separately records that `CMP-01`, `CMP-03` (the "deployed"/"observed"-broad portions), `CMP-07`, `CMP-08` (the operational-completeness portion), `CMP-09` (the "authorize operational reliance"/"observe deployment/use" portions), and `NB-Q12` (partially) "remain genuinely open and would need **at least an explicit-dependency treatment** to complete a Gate-B candidate" (Decision Package §6.1) — explicitly *not* full resolution. This draft's own §5.4 and §10.1–§10.6 already carry each of these forward as an explicitly tracked, unresolved dependency, bound to its correct later gate or future artifact where one is named (`CMP-03`, `CMP-08`, `CMP-09` ownership → the artifact named by `RC-01-D`; `CMP-07` ownership → the artifact named by `RC-02-E`; `CMP-01` → no owner, prospective or existing; `NB-Q12` → Gate C, once `NB-Q2` is decided). None of these items is resolved, and none is misrepresented as resolved, by this recording.
`⚠ DEPENDENCY: CMP-01 unresolved` · `⚠ DEPENDENCY: CMP-03 (deployed/observed-broad substance) unresolved` · `⚠ DEPENDENCY: CMP-07 (substance) unresolved` · `⚠ DEPENDENCY: CMP-08 (operational-completeness substance) unresolved` · `⚠ DEPENDENCY: CMP-09 (authorize-operational-reliance/observe-deployment-use substance) unresolved` · `⚠ DEPENDENCY: NB-Q12 partially advanced only` · `⚠ DEPENDENCY: exact Release/Composition artifact form unresolved`

**[Established]** The Decision Package additionally states that `NB-Q1` and `RC-01`/`RC-02` belong to the Gate-B minimum set *"and **not** to the minimum set for Gate A — because their absence does not prevent drafting from beginning; it prevents a draft from being *completed* as internally coherent across every entity class and scope level STEP 8 examined"* (Decision Package §10.2). This remains true of the now-decided status.

**[Established]** **This draft now passes Gate B.** See §11.5 for the complete completion record, its conditions, and what Gate B completion does and does not authorize.

**[Established]** As of 2026-07-31, **Gate C is complete for its authorized bounded scope**: Family 1 for Contract-class and Realization-class; Candidate 6 for Contract-class only; the separately accepted class-specific Realization policy for Realization-class; Family 9 for Relational/Compositional-class; and Family 3 for version-claim-bound Record-class. No Gate C selection was authorized or recorded for another entity class. `SV-01`/`VS-Q1`/`NB-Q2` remains Partially Decided at the broader register-question level because the universal family answer and answers for other entity classes remain undecided. Those out-of-scope matters do not make the authorized bounded Gate C incomplete. All other ballot items not expressly recorded at §10.11 retain their recorded status.

**[Established]** This draft **does not pass Gate D.** No amendment text is drafted for M.4, M.5, M.6, M.7, A.6, A.6.1, or any Standard, RFC, or Meta-Model, and no such drafting is authorized. The Decision Package's Gate-D minimum set (§10.3) has two components. Its first component, `CP-02` and `UN-01`, remains wholly unresolved regardless of any other decision. Its second component — *"whichever subset of `SV-01`/`SV-02`/`LC-02`/`CP-06`/`AU-01`/`RC-01`/`RC-02` corresponds to the actual policy selections made at Gate C"* — is **not** entirely unresolved: `RC-01` and `RC-02` are now Decided as responsibility *allocations* (§10.9), so a future Gate-D amendment touching Release Composition or Release Identity ownership already has a named prospective owner to draft toward. This **constrains** a future amendment's eventual owner; it does not perform, scope, or draft that amendment now. The owning artifact's form (Standard, Meta-Model, RFC, or other), its content, and whether M.6 §7.2 gains a Release scope-level entry all remain unresolved, as does every remaining item in this subset (`SV-01`, `SV-02`, `LC-02`, `CP-06`, `AU-01`), each awaiting its own Gate-C selection before any amendment scope is known. No amendment is drafted, proposed, or scoped by this draft, and Gate D remains unauthorized.

**[Established]** This draft **does not pass Gate E.** No promotion or canonicalization is claimed, requested, recommended, or implied for this draft or for any artifact it cites.

**[Established]** The disjointness the Decision Package asserts is preserved: *"This package does not equate 'required before normative amendment' (§10.3) with 'required before synthesis drafting' (§10.1). The two sets are disjoint in membership for every item examined: nothing in §10.3 is also in §10.1, and §10.1 is empty"* (Decision Package §10.3).

### 11.4 Gate-Model Fidelity Check

**[Established]** A fresh reading of the merged Decision Package confirms, without discrepancy, that the Gate-B dependency on `NB-Q1` and on `RC-01`/`RC-02` is stated there as reproduced above (Decision Package §6.1 rows for `NB-Q1` and `RC-01`/`RC-02`; §10.2). No conflict was found between the authorizing instruction's description of the Gate-B dependency and the merged package's own text. The only divergence found concerns the **number of gates** (four named in the instruction, five defined in the merged package), recorded at §11.1 and Appendix A item 1.

### 11.5 Gate B Completion (2026-07-29)

**[Established]** **GATE B COMPLETE — CANDIDATE SYNTHESIS RECORDED.**

This is a record that a complete, internally consistent draft proposal covering numbering, signaling, bump-rule, and composition treatment now exists, ready for Human Governance review — *"a proposal, not yet a ratified policy"* (Decision Package §6, Gate B definition). It is not a claim that any Versioning Architecture has been selected, approved, amended into a normative artifact, or promoted.

**[Established]** Conditions verified before this recording:

1. `VS-Q3`/`NB-Q4` — the scope-level design question — was the final Gate-B-blocking Human Governance decision this package's own Gate-Blocking Table (Decision Package §6.1) identified beyond the `NB-Q1`/`RC-01`/`RC-02` minimum set already cleared at §10.9. It is now recorded (§10.10) exactly as its controlling sources define it, without alteration of its meaning.
2. The selected option, `VS-Q3-B`/`NB-Q4-B`, is recorded consistently at §5.2, §5.3, §5.4, §10.1, §10.2, and §10.10; no cell, row, or dependency marker in this draft states or implies the opposite option, an unresolved status, or a third alternative for this item.
3. No unresolved source conflict was found to independently block Gate B (Appendix A discloses every source inconsistency located across this draft's research; none is a Gate-B-blocking authority conflict).
4. No unresolved evidence gap independently blocks Gate B: `CMP-01`, `CMP-03` (deployed/observed-broad substance), `CMP-07` (substance), `CMP-08` (substance), `CMP-09` (substance), `NB-Q12`, and the exact Release/Composition artifact form are each carried forward as explicit, visible, unresolved dependencies (§5.4, §10.1–§10.6, §11.3), consistent with the Decision Package's own "at least an explicit-dependency treatment" bar for these items (Decision Package §6.1) — none is presented as resolved, and none is silently dropped.
5. Every remaining register item (§10.1–§10.6) is either already source-resolved for this candidate's presentation purposes (the eleven-family numbering table, seven-family signaling table, and seven-family bump-rule table are complete alternative presentations, per Decision Package §8) or is explicitly authorized for deferral beyond Gate B to Gate C or Gate D, as tabulated in each register row's own "Blocks" column.
6. This recording amends no normative source. M.2–M.9, A.6, and A.6.1 were not opened for editing by this work unit.
7. This recording selects no signaling, numbering, or bump-rule architecture beyond what was already authorized: `NB-Q1-B` (entity-class-specific families permitted) and `VS-Q3-B`/`NB-Q4-B` (composition, no new scope level) are the only two Gate-B-relevant selections in effect, and neither selects a concrete numbering, signaling, or bump-rule family for any entity class.
8. This recording does not open Gate C. No ballot item at Decision Package §9 other than the five now Decided (`NB-Q1`, `RC-01`, `RC-02`, `VS-Q3`, `NB-Q4`) is filled in, selected, or advanced.

**[Established]** Gate B completion means: the candidate-synthesis document (this draft) is now internally coherent and complete in the sense Gate B requires — every subject area (§2–§9) is developed, every register item (§10) carries exactly one classification and, where applicable, exactly one recorded decision or an explicit deferral, and no cell states or implies a decision that was not actually made. It does **not** mean every question the corpus raises has been answered; the overwhelming majority remain open, explicitly, at their correct later gate.

**[Established]** Gate B completion does not itself: select or approve any Versioning Architecture (Gate C remains unopened, §11.3); authorize drafting any normative amendment (Gate D remains unauthorized); authorize promotion or canonicalization (Gate E remains unauthorized); create, name, or scope the Release/Composition artifact; add a Release scope level to M.6; resolve `CMP-01`, `CMP-03` (substance), `CMP-07` (substance), `CMP-08` (substance), `CMP-09` (substance), or `NB-Q12`; or authorize implementation, validator, schema, or migration work.

---

## 12. Completion Boundary

### 12.1 What This Initial Synthesis Draft Successfully Establishes

**[Established]** This draft establishes, within its own non-normative and non-canonical status, that:

1. The STEP 1–8 corpus, its Reconciliation Assessment, its Coverage Assessment, and the merged Decision Package can be organised into one structure covering entity model, identity/lifecycle separation, compatibility, release/composition, signaling, numbering/bump rules, evidence/reproducibility, and Target independence — without resolving anything.
2. Every established proposition in that corpus can be stated with a document-and-section locator, separately from every open question (§2–§9, tag discipline at §0.2).
3. Every mandated unresolved identifier — nine `VS-Q`, fourteen `NB-Q`, eighteen named reconciliation identifiers (plus `CP-01`), and twelve `CMP` identifiers — is present, distinctly named, and classified into exactly one decision class, with none merged, renumbered, or dropped (§10).
4. The five-gate model, its per-item gate assignments, and the disjointness of the Gate-A and Gate-D minimum sets are preserved intact (§11).
5. Five derived consolidation propositions (D-1 … D-5) can be stated without adding content beyond their cited inputs and without resolving any register item (§10.6).

### 12.2 Candidate-Synthesis Completion (Gate B) — Status

**[Established]** As of 2026-07-28, the Decision Package's own Gate-B minimum set was recorded as **cleared**: `NB-Q1` decided as `NB-Q1-B`; `RC-01`/`RC-02` decided as `RC-01-D`/`RC-02-E` (§10.9). At that time, this did not yet complete Gate B, because the scope-level design question `VS-Q3`/`NB-Q4` — the sole remaining Gate-B-blocking Human Governance choice this package's evidence identified — was not yet separately decided.

**[Established]** As of 2026-07-29, `VS-Q3`/`NB-Q4` is Decided (`VS-Q3-B`/`NB-Q4-B`, §10.10). **Gate B (candidate-synthesis completion) is now recorded — see §11.5.** The Coverage Assessment's Outcome D remains in force and is not narrowed, resolved, or converted by this recording. The following `CMP` items remain recorded by the Decision Package §6.1 as needing at least explicit-dependency treatment, which this draft's §5.4 and §10.1–§10.6 already provide, and none of which is resolved by this recording: `CMP-01`, `CMP-03` (the "deployed"/"observed"-broad portions), `CMP-07`, the operational-completeness portion of `CMP-08`, and the "authorize operational reliance" / "observe deployment/use" portions of `CMP-09`. `NB-Q12` remains only partially advanced — its Tier-0b dependency on `RC-01`/`RC-02` is cleared, but its Tier-1 dependency on `NB-Q2` (still Undecided) remains open. Per the Decision Package's own explicit-dependency bar (§6.1), none of these items' continued open status prevents Gate B completion; each remains visible, unresolved later work.

**[Established]** Separately from Gate B, as of 2026-07-31, **Gate C is complete for its authorized bounded scope** (§10.11) — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class: Family 1 for Contract-class and Realization-class (Candidate 6 selected for Contract-class only; a separately accepted class-specific policy for Realization-class), Family 9 for Relational/Compositional-class, and Family 3 for Record-class. This is a distinct completion from Gate B: Gate B records that a coherent candidate-synthesis proposal exists; the bounded Gate C recording additionally records that Human Governance has selected among the alternatives for four named entity classes. Neither completion implies the other. This does not complete Gate C beyond that bounded scope, does not authorize Gate D beyond the bounded drafting already produced (PR #366), and does not authorize Gate E or any canonical promotion.

### 12.3 Which Decisions Remain With Human Governance

**[Established]** `NB-Q1`, `RC-01`, `RC-02`, `VS-Q3`, and `NB-Q4` are no longer among the decisions remaining with Human Governance — they are Decided (§10.9, §10.10). `SV-01`/`VS-Q1`/`NB-Q2` is Partially Decided at the broader register-question level (§10.11.1, 2026-07-31): Gate C is complete for its authorized bounded scope — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class — while the universal answer and the answer for every other entity class remain with Human Governance. `SV-02`/`VS-Q2`/`NB-Q3` was found non-blocking for that same bounded scope (§10.11.2) but remains generally Undecided and with Human Governance. Every other item in §10.7's "Human Governance policy choice" class remains with Human Governance and is recorded "Undecided" in the Decision Package §9 ballot: `CP-06`/`VS-Q4`/`NB-Q5`; `VS-Q7`/`NB-Q9`; `VS-Q8`/`NB-Q10`; `NB-Q12`; `NB-Q13`; `AU-01`/`VS-Q6`/`NB-Q8`; `NB-Q7`.

**[Established]** Additionally requiring Human Governance action per the Reconciliation Assessment §3.8 register: `LC-02` (clarification of whether M.4's state model is the Baseline's reserved policy choice or a distinct concept).

**[Established]** Also reserved to Human Governance, and not decided by any cited source: the responsibility/ownership allocations at §5.4 that are recorded as "Not established", and the sequencing of any later work unit. No cited source supplies an existing Human Governance decision resolving any of these (Decision Package §9, closing statement).

### 12.4 Which Later Normative Work Remains Unauthorized

**[Established]** As of 2026-07-29, completing a candidate synthesis (Gate B) is no longer among the unauthorized/unopened items below — see §11.5, §12.2. As of 2026-07-31, selecting among the alternatives for Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class (the bounded Gate C scope, §10.11) is likewise no longer among them. The following remain unauthorized and unopened by this draft and by every source it cites:

- selecting or approving any Versioning Architecture, family, policy, or default for any entity class outside the bounded Gate C scope completed 2026-07-31 (§10.11.1) — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class are excepted, per that completed recording;
- drafting amendment text for M.4, M.5, M.6, M.7, or any other Meta-Model, Standard, or RFC beyond the bounded drafting already produced through PR #366 (Gate D);
- promoting or canonicalizing any artifact (Gate E);
- creating the Version Signal Evidence-Binding Specification, a Release Engineering / Artifact Assembly RFC, a Release Composition / manifest Standard, a Migration Meta-Model, a Release/Composition Meta-Model, or any other candidate named at Baseline §16, STEP 7 §12, STEP 8 §14, or A.6 §18;
- accepting, reviewing, or promoting STEP 7 or STEP 8;
- reading M.9 to resolve `SC-01`, which remains outside every cited work unit's authorized reading scope;
- selecting, sequencing, or executing any subsequent work unit.

### 12.5 Prohibited Premature Conclusions

**[Established]** This document does not conclude, imply, prefer, or advance any of the following, and is not to be read as doing so. Where any wording, table order, column layout, example, or omission elsewhere in this document could be read as suggesting one of these, this section governs:

| # | This document does **not** conclude |
|:---|:---|
| 1 | That any signaling family, numbering-model family, or bump-rule family has been selected, recommended, preferred, ranked, or shown superior **for any entity class outside the bounded Gate C scope completed 2026-07-31 (§10.11.1)** — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class are excepted, per that completed recording. The tables at §6.1, §7.2, and §7.3 remain alternatives presented in source order with each family's own recorded limitation for every other entity class; ordering carries no preference there. |
| 2 | That `MAJOR.MINOR.PATCH` is the AI-DOS numbering scheme, a default, a baseline, or a starting assumption for any entity class outside the bounded Gate C scope. It appears as one `[Convention]` alternative and as the subject of `SV-01`, which is Partially Decided at the broader register level (§10.11.1) — selected as Family 1 for Contract-class and Realization-class only, per the completed bounded Gate C; the universal answer remains open. |
| 3 | That M.6's rebuttable MAJOR→`Migration-Needed` default is acceptable, unacceptable, or narrowed in either direction (`SV-02`/`VS-Q2`/`NB-Q3` remain open). |
| 4 | That Release has been classified at any semantic or artifact level, or that an M.3 relationship mapping has been chosen. `RC-01` and `RC-02` are Decided (§10.9) as **ownership allocations only** — naming a future artifact as owner of Release Composition and Release Identity policy, respectively — and decide neither of these two questions. Separately, `VS-Q3`/`NB-Q4` are now Decided (§10.10) as `VS-Q3-B`/`NB-Q4-B`: **no** new M.6 Release/Package scope level is added; this decides only that design question, and does not classify Release under M.0/M.1 or select an M.3 relationship mapping. |
| 5 | That `RC-01` or `RC-02` responsibility has been allocated to any *existing* artifact — M.2, M.3, M.4, M.6, M.7, A.6, or A.6.1 — or that a *specific form* (Standard, Meta-Model, RFC, or other) has been selected for the future artifact named at §10.9. The §10.9 decision allocates ownership to a future, separately authorized, not-yet-created, not-yet-named artifact only; it does not select, create, or scope that artifact. |
| 6 | That any tied candidate pair identified by the Coverage Assessment has been broken, or that Outcome D has been narrowed, converted, or superseded. |
| 7 | That grandfathering has been decided in either direction (`CP-06`/`VS-Q4`/`NB-Q5` remain open), notwithstanding that M.6 §7.10 already encodes one answer in its own Draft text. |
| 8 | That `CP-01`, `CP-02`, or `UN-01` has been resolved, or that classifying `CP-02`/`UN-01` as specification-completeness corrections constitutes or prejudges their fix. |
| 9 | That M.4's single-state model does — or does not — represent the standing/applicability duality (`LC-02`/`VS-Q5`/`NB-Q6` remain open). |
| 10 | That any research conclusion in STEP 1–8 has become normative, canonical, accepted, approved, or part of the Meta family; or that STEP 7 or STEP 8 has been accepted or reviewed. |
| 11 | That readiness to *draft* implies readiness to *complete*, *approve*, *promote*, or *implement*. Gate A alone is exercised (§11.2). |
| 12 | That this draft, or any artifact it cites, has passed Gate C in full, Gate D in full, or Gate E. (This draft has passed Gate B, §11.5, and Gate C is complete only for its authorized bounded scope — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class, §10.11.1 — which is a distinct, narrower claim than universal Gate C selection, Gate D amendment beyond the bounded drafting already produced through PR #366, or Gate E promotion, none of which is claimed here.) |
| 13 | That any identifier in §10 other than `NB-Q1`, `RC-01`, `RC-02` (Decided, §10.9), `VS-Q3`, and `NB-Q4` (Decided, §10.10), and `SV-01`/`VS-Q1`/`NB-Q2` (Partially Decided at the broader register level for the completed bounded Gate C scope, §10.11.1) has been resolved, closed, merged with another, superseded, or reclassified. Nor that deciding `NB-Q1`/`RC-01`/`RC-02`/`VS-Q3`/`NB-Q4`, or completing the bounded Gate C scope at §10.11.1, resolves any *other*, merely cross-referenced identifier beyond that bounded scope — `NB-Q2` (beyond the four named entity classes), `NB-Q3`, `NB-Q13`, and every remaining ballot item all remain formally Unresolved (or, for `SV-02`/`VS-Q2`/`NB-Q3`, non-blocking-but-undecided), per the rule that a cross-reference is not a resolution of either mapped item (§10.3; Decision Package §4). |
| 14 | That any Meta-Model, RFC, Standard, or report has been amended, superseded, reinterpreted, promoted, or had its declared status upgraded by being cited here. |
| 15 | That any Forge AI Target Project state, path, plan, phase, or progress claim has been read as scope authority, derived from, asserted, or modified. |
| 16 | That the absence of an item from this document implies it is resolved, irrelevant, or closed. Absence carries no meaning; §10 is the register of record. |
| 17 | That any word in this document creates a requirement. Normative verbs appear only inside quotations reproducing an existing artifact's own text (§0.2). |

### 12.6 Completion Statement

**[Established]** This initial synthesis draft is complete **as an exercise of Gate A and as nothing else**. It opens synthesis drafting, organises the accepted and drafted evidence into one decision-neutral structure, carries every unresolved dependency forward under its source-native identifier, and stops. As originally completed, it completed no candidate synthesis, selected no architecture, resolved no question, allocated no responsibility, amended no artifact, promoted nothing, and authorized no further work unit; Gates B, C, D, and E remained unopened, and every decision the corpus reserved to Human Governance remained open and undecided.

**Post-decision addendum (2026-07-28):** Human Governance has since decided `NB-Q1`, `RC-01`, and `RC-02` (§10.9), clearing the Decision Package's Gate-B minimum decision set. **This draft still completes no candidate synthesis, selects no architecture, amends no artifact, promotes nothing, and authorizes no further work unit.** Gates B, C, D, and E remain unopened (§11.2–§11.3). Every other decision the corpus reserves to Human Governance — every ballot item at Decision Package §9 apart from the three then Decided — remains open and undecided (§12.3), and every remaining Gate-B dependency (`CMP-01`, `CMP-03`, `CMP-07`, `CMP-08`, `CMP-09`, `NB-Q12`) remains exactly as unresolved as this draft originally recorded it (§12.2).

**Second post-decision addendum (2026-07-29):** Human Governance has since additionally decided `VS-Q3`/`NB-Q4` as `VS-Q3-B`/`NB-Q4-B` (§10.10) — no new M.6 scope level; Release/Package version scope is represented through composition of the five existing scope levels. This was the sole remaining Gate-B-blocking Human Governance choice the Decision Package's own evidence identified. **This draft now passes Gate B** (§11.5): a complete, internally consistent candidate-synthesis proposal is recorded, ready for Human Governance review. **This draft still selects no architecture, amends no normative artifact, promotes nothing, and authorizes no further work unit beyond recording this completion.** Gates C, D, and E remain unopened and unauthorized (§11.3). Every ballot item at Decision Package §9 apart from the five now Decided remains open and undecided, and every item this draft classifies as an explicit, unresolved dependency (`CMP-01`, `CMP-03` substance, `CMP-07` substance, `CMP-08` substance, `CMP-09` substance, `NB-Q12`, the exact Release/Composition artifact form, and every other register item at §10.1–§10.6) remains exactly as open as before this addendum, carried forward to its correct later gate or future artifact rather than resolved, assumed, or dropped.

**Third post-decision addendum (2026-07-31):** Human Governance has since additionally recorded, at §10.11, that **Gate C is complete for its authorized bounded scope** — Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class: Family 1 for Contract-class and Realization-class (Candidate 6 selected for Contract-class only; a separately accepted class-specific policy, not Candidate 6, for Realization-class), Family 9 for Relational/Compositional-class, and Family 3 for Record-class (starting at 1). `SV-01`/`VS-Q1`/`NB-Q2` remains Partially Decided at the broader register-question level — the universal answer and the answer for every other entity class remain undecided, and this does not make the completed bounded Gate C incomplete. `SV-02`/`VS-Q2`/`NB-Q3` was found non-blocking for that same bounded scope but remains generally Undecided. This addendum additionally records the `REC-2` Tier 1 recording-completeness policy ratification, the unnumbered Record Family 3 starting-value-1 choice, and the confirmed ordering-necessity results (§10.11.4–§10.11.6). **This draft still amends no normative artifact, promotes nothing, and authorizes no further work unit beyond recording this completion and these findings.** Gate D remains bounded to the drafting already produced through PR #366, with no additional Gate D work authorized; Gate E remains unopened and unauthorized (§11.3). `TC2-a`–`TC2-h`'s individual content remains a reported missing-provenance defect, not a decision (§10.11.3), and no per-entity-class fine-grained-lineage table is reconstructed (§10.11.7). Every ballot item at Decision Package §9 apart from the five fully Decided and the one Partially Decided item remains open and undecided, and every item this draft classifies as an explicit, unresolved dependency remains exactly as open as before this addendum.

---

## Appendix A — Correction / Clarification and Discrepancy Ledger

Disclosed rather than smoothed over. No entry below repairs, rewrites, or silently corrects any cited source.

1. **Gate count: four named in the authorizing instruction, five defined in the merged Decision Package.** The instruction authorizing this drafting pass enumerated Gates A–D. Decision Package §6 defines five gates, A–E, with Gate E being *"Promotion or canonicalization."* This draft preserves the merged package's five-gate model unchanged (§11.1) rather than truncating it, and flags the divergence here. This is a scope-of-description difference, not a conflict in the gate model's substance: the Gate-A/B/C/D definitions and the Gate-B dependency on `NB-Q1` and `RC-01`/`RC-02` are identical in both.

2. **`NB-Q12`'s cross-reference attribution.** Decision Package §12 item 1 records that STEP 8 §13's row for `NB-Q12` reads *"§8 P-5; STEP 7 `CP-01`-adjacent reasoning"*, while `CP-01` originates in the Reconciliation Assessment §2, not in STEP 7 — and that STEP 8 itself attributes `CP-01` correctly elsewhere in the same document. This draft reproduces the observation without correcting STEP 8's wording; §10.2 cites `CP-01`-adjacent reasoning without attributing `CP-01` to STEP 7.

3. **`MG-02`'s mapping.** Decision Package §12 item 2 records that `MG-02` appears once in STEP 8's reused-foundation table (§3) but is not tied to a further proposition-level citation in either STEP 7 or STEP 8's body text, and that its cross-reference classification is therefore *"No established mapping"* to any `VS-Q`/`NB-Q`. This draft preserves that classification at §10.3 rather than inventing a mapping.

4. **`LC-03`'s dual placement.** `LC-03` is grouped by the Decision Package §3.4 among rows that §6.1 assigns "None (Gate A–E)", while §5 assigns it to the specification-completeness-correction decision class. Both placements are reproduced at §10.3 and §10.7 exactly as the Decision Package states them. This draft does not reconcile the two placements or infer a gate assignment for `LC-03` beyond what §6.1 states.

5. **Baseline §16 candidate restated as a "Meta Model" by the Reconciliation Assessment.** Already disclosed by the Coverage Assessment §2 and inherited by the Decision Package §12 item 3: the Reconciliation Assessment §3.9 restates Baseline §16's *"future Release Composition / manifest **Standard**"* candidate as a "Meta Model." This draft inherits and preserves the disclosed discrepancy without resolving which label is correct, and uses the Baseline's own wording ("Standard") when quoting Baseline §16 directly (§5.3, §5.4).

6. **M.7 title.** The task instruction that opened this work unit referred to an "M.7 Conformance Meta-Model." The artifact present in the repository at `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md` is the **M.7 Compatibility Meta Model**, and no separate Conformance Meta-Model exists in the M.4–M.7 range. The real file was read and cited throughout. This is a naming difference in the instruction, not a repository discrepancy.

7. **Reconciliation identifier sequence gaps.** The Reconciliation Assessment's 33-row matrix contains no `VI-02` and no `CP-03`. The matrix's own §4 Validation Record confirms a total of 33 rows and that *"Every identifier is a clean unique token."* This draft reproduces the identifiers exactly as they appear and does not infer, reconstruct, or renumber any missing token.

---

## Appendix B — Source Manifest

Every repository artifact materially relied upon by this draft, with the locators used and the artifact's own declared authority/lifecycle classification. Listing an artifact here asserts nothing about its status beyond what its own metadata declares.

| # | Repository Path | Locators Used | Authority / Lifecycle Classification (own metadata) |
|:---|:---|:---|:---|
| 1 | `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-Baseline-STEP-1-6.md` | §0.1, §1, §2, §4 (incl. §4.1–§4.5), §5.1–§5.4, §6.2–§6.6, §7.1–§7.8, §8.1–§8.12, §9.1–§9.9, §10.2–§10.11, §11, §12, §13, §14, §15, §16, §17 | Accepted research evidence; Non-canonical; Normative Authority: None |
| 2 | `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-STEP-7-Version-Signaling.md` | §0.1, §3, §4, §5 (P-1–P-18), §6.1–§6.2, §7, §8 (tests 2, 3, 5, 7, 12, 13, 16, 17, 18), §9, §10, §11 (`VS-Q1`–`VS-Q9`), §12, §13, §14 | Draft research evidence; not reviewed; not accepted; Non-canonical; Normative Authority: None |
| 3 | `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-STEP-8-Numbering-and-Bump-Rules.md` | §0.1, §2.2, §3, §4, §5 (P-1–P-4), §6, §7, §8 (P-5–P-7), §9 (P-8–P-13), §10 (P-14–P-15), §11, §12, §13 (`NB-Q1`–`NB-Q14`), §14, §15, §16, §17, §18 | Draft research evidence; not reviewed; not accepted; Non-canonical; Normative Authority: None |
| 4 | `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md` | §0, §2 (all 33 rows), §3.1–§3.12, §4, §5 | Draft; not accepted, approved, or reviewed; Non-canonical; Normative Authority: None |
| 5 | `docs/AI-DOS/Architecture/Reports/AI-DOS-STEP-4-vs-A.6-Release-Composition-Responsibility-Coverage-Assessment.md` | §1, §2, §4, §5 (`CMP-01`–`CMP-12`), §6, §7, §8, §9 | Draft; Non-normative; Non-canonical |
| 6 | `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Synthesis-Readiness-and-Human-Governance-Decision-Package-STEP-1-8.md` | §1, §2, §2.1, §3.1–§3.5, §4.1–§4.2, §5, §6, §6.1, §7, §8, §9, §10.1–§10.3, §11, §12, §14, §15, §16 | Draft; not accepted, approved, or reviewed; Non-canonical |
| 7 | `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md` | §3, §4, §7.1, §7.2, §7.3, §7.4, §7.5, §7.6, §7.7, §9 (Invariant 1), §10, §16 | Draft; Enterprise Semantic Profile; requires Framework Governance review and Human Governance approval before canonical promotion |
| 8 | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` | §3, §4, §7.2, §7.4, §7.5, §7.6, §8 (Rule 35), §9, §10, §16 | Draft; Enterprise Semantic Profile; same governance status |
| 9 | `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md` | §3, §4, §7.2, §7.3, §7.4, §7.6, §7.7, §7.8, §7.9, §7.10, §7.11, §7.12, §7.13, §8 (Rules 8–11, 15, 38, 39, 40), §9, §10, §16 | Draft; `AI-DOS-META-M.6` v1.1.0-draft; same governance status |
| 10 | `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md` | §3, §4, §6, §7.1, §7.6, §7.7, §7.8, §7.9, §7.10, §8 (Rules 1, 4), §9, §10, §11, §16 | Draft; `AI-DOS-META-M.7` v1.1.0-draft; same governance status |
| 11 | `docs/AI-DOS/Architecture/RFC/Distribution/A.6-AI-DOS-Distribution-Foundation-RFC.md` | §1, §3, §4 (incl. §4.2, §4.3), §5, §6, §7, §8, §9, §10, §11, §14, §15, §16, §17, §18 | Draft; `AI-DOS.V2.ARCH-RFC-006` v1.0.0-draft; Certification Status: Not certified |
| 12 | `docs/AI-DOS/Architecture/RFC/Distribution/A.6.1-AI-DOS-Package-Manifest-Schema-RFC.md` | Document Metadata (Allocation Note), §2.1, §2.2, §4.1, §6.1–§6.4, §7.1–§7.3, §8.1–§8.3, §9, §11, §12.1, §13.1, §16, §17, §19 | Draft; `AI-DOS.V2.ARCH-RFC-006.1` v1.0.0-draft; subordinate to A.6; Certification Status: Not certified |

**Manifest scope confirmation:** every row is an artifact this draft cites at a specific locator. No row asserts that the cited artifact is canonical, approved, accepted, or normative; each row's classification column reproduces the artifact's own declared status.

---

## Closing Statement

This document is the **initial synthesis draft** Human Governance authorized to be opened following the merge of the Synthesis-Readiness and Human Governance Decision Package. It consolidates the STEP 1–8 AI-DOS Product Versioning Architecture research corpus, its Reconciliation Assessment, its STEP 4-vs-A.6 Coverage Assessment, and that Decision Package into one organised, source-traceable, decision-neutral structure: a versioned entity model, a seven-axis identity/lifecycle separation, a consolidated compatibility model, a release and composition boundary with its allocations and non-allocations stated separately, the version signaling space, the numbering and bump-rule space, evidence and historical reproducibility, and product-level Target independence.

It carries forward, under their source-native identifiers and without merging or dropping any, nine `VS-Q` items, fourteen `NB-Q` items, eighteen named reconciliation identifiers plus `CP-01`, and twelve `CMP` identifiers, each classified into exactly one decision class. As originally drafted, each was recorded as unresolved; as of 2026-07-28, three — `NB-Q1`, `RC-01`, `RC-02` — were recorded as Decided (§10.9); as of 2026-07-29, two more — `VS-Q3`, `NB-Q4` — are recorded as Decided (§10.10); as of 2026-07-31, one further item — `SV-01`/`VS-Q1`/`NB-Q2` — is recorded as Partially Decided at the broader register-question level (§10.11.1): Gate C is complete for its authorized bounded scope covering Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class, while the universal answer and the answer for every other entity class remain undecided. Every other identifier remains recorded as unresolved exactly as originally drafted.

As originally drafted, it selected no architecture family, resolved no open question, allocated no responsibility, amended no normative artifact, and converted no research evidence into normative truth. **This remains true with the five named fully-Decided exceptions recorded at §10.9 and §10.10, and the one named Partially Decided exception recorded at §10.11**, which reflect Human Governance decisions made after this draft was opened, not changes this draft makes to itself. It exercises **Gate A**; as of 2026-07-29, **Gate B** (§11.5) — a complete, internally consistent candidate-synthesis proposal is recorded, ready for Human Governance review; and, as of 2026-07-31, **Gate C is complete for its authorized bounded scope** (§10.11.1): Contract-class, Realization-class, Relational/Compositional-class, and version-claim-bound Record-class. Gate C remains open for every other entity class and for the universal family answer. Bounded Gate D drafting was already produced through PR #366; no additional Gate D work is authorized, and this draft itself drafts no normative amendment. Gate E and canonical promotion of any artifact remain unauthorized. It is **Draft, non-normative, non-canonical, and not a selected or approved Versioning Architecture** beyond the bounded Gate C scope recorded at §10.11, and it is offered for Human Governance's consideration on exactly those terms.

**Fourth post-decision addendum (2026-08-01):** Human Governance accepted canonical M.6's existing evidence-bounded Rule 8/Rule 8a policy, closing `SV-02`/`VS-Q2`/`NB-Q3`: inadequate or non-dispositive evidence always yields `Undetermined`; the MAJOR `Migration-Needed` presumption operates only inside the adequate, dispositive evidence domain and remains rebuttable by adequate evidence. `CP-01` is also closed by reconciliation: one M.7 relation type is recorded per identified, evidenced, dimension-scoped assessment, while the same version pair may carry multiple simultaneous, non-collapsed assessments over distinct dimensions. Separately, M.6/`UN-01` and M.7/`CP-02` promotion dependencies are now effective and closed. These later outcomes are recorded normatively in `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Normative-Intent-Draft.md`; earlier “open” statements in this historical synthesis describe the state before this addendum. Gate E remains unbegun and unauthorized.

**Fifth post-decision addendum (2026-08-03):** Human Governance has explicitly opened **Gate E** and authorized preparation of PR-B, the bounded Gate E review candidate. See `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Gate-E-Opening-Decision-and-PR-B-Review-Candidate-Record.md`. This addendum records that later outcome only; it changes nothing else in this historical synthesis draft, does not reopen any Gate A–D determination recorded above, and does not itself approve Gate E or promote any artifact.

**Sixth post-decision addendum (2026-08-03):** Human Governance has since accepted the completed independent Gate E review (PR #380 head `02f7c5d346c989ad6edab512e6f5e89f88e4626e`) as the Framework Governance Gate E review result, approved the bounded v1 candidate as a complete artifact, recorded **Gate E as approved and closed**, and authorized canonical promotion of the Normative-Intent Draft together with merge-conditional bounded-program closure. See `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Gate-E-Approval-Canonical-Promotion-and-Program-Closure-Decision-Record.md`. This addendum records that outcome only; it changes nothing else in this historical synthesis draft, does not reopen any Gate A–D determination recorded above, and does not itself make canonical promotion or program closure repository-effective — both remain merge-conditional on PR-C.

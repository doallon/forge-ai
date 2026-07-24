# A.6.1 — AI-DOS Package Manifest Schema RFC

> Package manifest schema contract · Subordinate to A.6 Distribution Foundation · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-006.1` |
| Title | A.6.1 — AI-DOS Package Manifest Schema RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Distribution Specification RFC (subordinate to A.6 Distribution Foundation) |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Architecture/RFC/Distribution/A.6-AI-DOS-Distribution-Foundation-RFC.md`; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md` (consumed through A.6) |
| Dependencies | A.6 §5–§10, §17; M.0; M.1; M.2; M.3; M.5; M.6; M.7; M.9; STD-010 |
| Produces | Package manifest identity and schema-version signaling contract; constituent reference, role, and membership representation; binding/integrity-reference field contract; validation rules and deterministic validation-result identifiers; invalid/incomplete manifest behavior; compatibility and extensibility rules for the manifest schema itself |
| Downstream Consumers | A future Release Engineering and Artifact Assembly RFC; a future Local Installation Controller RFC; manifest validator implementations (not defined here) |
| Certification Status | Not certified |

### Allocation Note

The identifier `A.6.1` and filename `A.6.1-AI-DOS-Package-Manifest-Schema-RFC.md` are an explicit Human Governance allocation, not a number derived deterministically from any pre-existing repository allocation rule. At the time of authoring, the Distribution family (`RFC/Distribution/`) had no `A.6.0` template and no pre-declared sub-numbering ownership map (unlike `A.4.1`–`A.4.7` under `A.4` or `A.5.1`–`A.5.12` under the `A.5.0` template). This allocation:

- allocates only `A.6.1` to this RFC;
- does not create an `A.6.0` template or a Distribution-family allocation template;
- does not assign identifiers to any other A.6 §18 candidate;
- does not establish that A.6 §18's ordering determines future RFC numbering;
- does not reserve or imply `A.6.2` or any later slot.

Any future Distribution-family downstream RFC requires its own explicit Human Governance allocation decision.

---

## 1. Decision

A.6.1 defines the normative package manifest schema contract for the AI-DOS Release Manifest artifact required by A.6 §5 and §7. It converts the package-schema-syntax-adjacent portion of the accepted STEP 1–6 Release Composition Model (STEP 4, §8.4–§8.6, and the state-binding/role portion of §8.8) into an implementable contract, bounded exactly to the territory A.6 §17 excludes from its own scope ("package schema syntax") and explicitly lists at §18 as a downstream specification candidate.

This RFC is subordinate to and constrained by A.6:

```text
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ↓
A.6 Distribution Foundation
    ↓
A.6.1 Package Manifest Schema
```

A.6.1 does not derive independent architectural authority. It specializes A.6 §7's Manifest Contract and does not expand, narrow, or reinterpret A.6's own decision, truth domains, package contract, version/channel model, integrity/provenance model, compatibility model, installation/update/rollback/uninstall boundaries, discovery boundary, or governance gates.

## 2. Purpose and Normative Boundary

This RFC answers exactly one question, subordinate to A.6 §7:

> What must a conformant AI-DOS package manifest declare, at the level of manifest identity, schema-version signaling, constituent references, constituent roles, constituent membership, and package-level binding/integrity fields, so that a manifest can be deterministically validated for completeness and correctness?

It does not answer, and explicitly leaves open, any question belonging to Release identity policy, release assembly process, operational reliance, or runtime/deployment behavior (§17).

The normative boundary of this RFC is exactly the "package schema syntax" territory A.6 §17 excludes from A.6's own ownership, scoped further to the four STEP 4 subsections the accepted STEP-4-vs-A.6 Coverage Assessment (`docs/AI-DOS/Architecture/Reports/AI-DOS-STEP-4-vs-A.6-Release-Composition-Responsibility-Coverage-Assessment.md`, Sub-finding 1) found tied between this RFC and a non-selected future Standard candidate:

- CMP-04 — constituent reference and binding-type representation (STEP 4 §8.4);
- CMP-05 — constituent role representation (STEP 4 §8.5);
- CMP-06 — constituent membership representation (STEP 4 §8.6);
- the state-binding and role portions of CMP-08 — composition completeness dimensions (STEP 4 §8.8).

Human Governance selected this RFC form (not the tied future Standard candidate) for this territory. This selection is a governance choice, not a deterministic conclusion of the coverage assessment, and it does not foreclose a future Standard for any other unresolved gap identified there (e.g., "assemble" authority, "authorize operational reliance", "observe deployment/use", CMP-03's deployed/observed stages, or CMP-08's operational-completeness dimension).

## 3. The Governed Artifact

This RFC governs exactly one artifact: the **Release Manifest**, the "release manifest" artifact A.6 §5 requires every release to contain or reference, and whose minimum declared content A.6 §7 lists.

The Release Manifest describes — but is not identical to — the AI-DOS package (A.6 §6) and the release it belongs to. Per STEP 4 §8.1 (reused here without reopening): the manifest's declared composition is a claim about the package; composition equality between two manifests never proves release-identity equality, and composition difference never automatically proves release-identity difference. This RFC does not resolve release-identity policy (§17.2).

A Release Manifest instance is an M.1 Document Artifact / Governance Artifact-adjacent Knowledge Artifact representation with M.2 identity, consumed through the Artifact Consumption Interface (M.1 §7.12); it is not itself a runtime object, installer configuration, or package-manager-specific file format.

## 4. Manifest Identity and Schema-Version Signaling

### 4.1 Manifest Schema Identity

The manifest schema defined by this RFC carries its own M.2 identity, distinct from the identity of any manifest instance and distinct from the identity of the release or package a manifest instance describes.

| Field | Value |
|:---|:---|
| Schema Identifier | `AI-DOS-PMS-SCHEMA` |
| Identifier Family | New family, `AI-DOS-PMS-` prefix, global scope, registered by this RFC per M.2 §7.3 (new identifier families require governance approval and M.2 amendment; this RFC records the new family, it does not amend M.2) |
| Schema Version | `1.0.0-draft` (M.6 Schema Version, §7.6) |
| Schema Version Binding | Explicit and immutable per M.9 §7.3: this document binds Schema Version `1.0.0-draft` to this RFC's own document version; no implicit latest-version binding exists |

### 4.2 Manifest Instance Identity (Field PMS-M-01)

| | |
|:---|:---|
| Stable identifier | `PMS-M-01` |
| Normative definition | Every Release Manifest instance shall declare a Manifest Identifier: a stable M.2 identity for the manifest instance itself, distinct from the Package Identifier (PMS-M-03) and Product Identifier (PMS-M-02) it describes. |
| Source authority | M.2 §7.1 (Instance Identity), §7.3 (Identifier Semantics); A.6 §7 ("release manifest shall declare... package identifier") |
| Type | M.2 identifier (prefix + body, optional version suffix) |
| Cardinality | Exactly one |
| Required/Optional | Required |
| Allowed values / constraints | Shall resolve uniquely within the manifest identity scope (M.2 §7.2, Registry scope); shall not be inferred from file path, archive name, or storage location (M.2 Rule 21) |
| Deterministic invalidity condition | Field absent, empty, or not unique within the declared scope |
| Validation result | Fail (PMS-VR-001) |
| Evidence implication | The manifest's own identity is the anchor for all traceability required by A.6 §5's Validation Evidence Summary artifact |

### 4.3 Manifest Schema-Version Reference (Field PMS-M-02)

| | |
|:---|:---|
| Stable identifier | `PMS-M-02` |
| Normative definition | Every Release Manifest instance shall declare which Schema Version (§4.1) it conforms to, as an Immutable Version Reference (M.6 §7.9). |
| Source authority | M.9 §7.3 (Schema Version Binding: explicit, immutable, no implicit latest-version binding); M.6 §7.9 |
| Type | M.6 versioned reference, reference mode fixed to Immutable Version Reference |
| Cardinality | Exactly one |
| Required/Optional | Required |
| Allowed values / constraints | Shall name a Schema Version that exists and is not Archived (M.6 §7.12); shall not be a Latest Reference, Current Reference, or Mutable Draft Reference — a manifest's schema conformance shall never silently follow schema evolution |
| Deterministic invalidity condition | Field absent, names a non-existent Schema Version, or declares a non-Immutable reference mode |
| Validation result | Fail (PMS-VR-002) |
| Evidence implication | Establishes which version of this RFC's rules (§7–§12) govern validation of the instance |

## 5. Manifest Top-Level Fields

This section specializes A.6 §7's declared minimum content into individually validatable fields. It does not add fields beyond A.6 §7's list; it gives each A.6 §7 item a stable identifier, type, cardinality, and validation rule. Fields governing Release identity, product-version policy, or channel/compatibility *policy* are represented here only as manifest-schema fields; this RFC does not define the underlying policy those fields express (§17.2–§17.3).

| ID | A.6 §7 Item | Type | Cardinality | Required | Constraint (this RFC) | Deterministic Invalidity | Validation Result |
|:---|:---|:---|:---|:---|:---|:---|:---|
| PMS-M-03 | AI-DOS product identifier | M.2 identifier | Exactly one | Required | Resolves within global identity scope | Absent or unresolvable | Fail (PMS-VR-003) |
| PMS-M-04 | Package identifier | M.2 identifier | Exactly one | Required | Distinct from PMS-M-03 and PMS-M-01 | Absent, or equal to PMS-M-01 | Fail (PMS-VR-004) |
| PMS-M-05 | Product version | M.6 Semantic Version | Exactly one | Required | Well-formed `MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]` per M.6 §7.4 | Absent or malformed | Fail (PMS-VR-005) |
| PMS-M-06 | Release channel | Enumeration | Exactly one | Required | One of A.6 §8's baseline channels (Experimental, Preview, Stable, Long-term Support, Emergency) or a governed extension (§13) | Absent or not a declared channel value | Fail (PMS-VR-006) |
| PMS-M-07 | Release date | Date | Exactly one | Required | ISO 8601 calendar date | Absent or malformed | Fail (PMS-VR-007) |
| PMS-M-08 | Governance and certification posture | Structured value: canonical status + certification status | Exactly one | Required | Values drawn from M.4 canonical-status and certification-status vocabularies | Absent, or asserts a status this RFC cannot verify from evidence | Warning (PMS-VR-008) |
| PMS-M-09 | Content index or content roots | List of Constituent References (§6) | One or more | Required | Non-empty; see §6 for element schema | Empty or malformed elements | Fail (PMS-VR-009) |
| PMS-M-10 | Integrity and provenance references | List of Binding/Integrity fields (§8) | Zero or more (mandatory when the release makes an integrity claim) | Conditional | See §8 | Present but malformed, or absent while an integrity claim is otherwise declared | Fail (PMS-VR-010) |
| PMS-M-11 | Compatibility declaration | M.7 Compatibility Claim reference | Exactly one | Required | Bound to M.5 evidence per M.7 §6 (hard dependency) | Absent, or present without bound evidence | Fail (PMS-VR-011) |
| PMS-M-12 | Breaking-change and deprecation status | M.6 Migration Obligation category | Exactly one | Required | One of the four M.6 §7.10 categories | Absent or not one of the four categories | Fail (PMS-VR-012) |
| PMS-M-13 | Minimum consumer expectations | Structured value (declared minimum capabilities/version ranges) | Zero or more | Conditional | Each entry a well-formed M.6 Version Range (§7.12) when version-scoped | Malformed range | Fail (PMS-VR-013) |
| PMS-M-14 | Rollback lineage | M.6 Lineage Chain reference | Exactly one | Required | Continuous per M.6 §7.7 (no gaps) | Discontinuous or absent | Fail (PMS-VR-014) |
| PMS-M-15 | AI-DOS-owned uninstall boundary | List of Constituent References (§6) marked with the AI-DOS-owned membership category (§7.3) | Zero or more | Conditional | Every listed reference shall also appear in PMS-M-09 | Reference not present in PMS-M-09 | Fail (PMS-VR-015) |
| PMS-M-16 | Source-disclosure posture | Enumeration | Exactly one | Required | Declares whether source is disclosed, partially disclosed, or withheld, consistent with A.6 §3 truth-domain rules | Absent | Warning (PMS-VR-016) |

## 6. Constituent Reference Representation

STEP 4 §8.4 (reused here without reopening, and reused only to the extent it is package-schema syntax, per CMP-04) enumerates twelve reference/binding types. This RFC adopts them as the closed set of Constituent Reference Modes a manifest may declare for each entry in the Content Index (PMS-M-09).

### 6.1 Constituent Reference Modes (Field PMS-C-01)

| | |
|:---|:---|
| Stable identifier | `PMS-C-01` |
| Normative definition | Every Content Index entry shall declare exactly one Constituent Reference Mode from the closed set below. |
| Source authority | STEP 1–6 Baseline §8.4 |
| Type | Enumeration |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values | `identity-only`, `state-specific`, `live`, `revision`, `digest-pinned`, `embedded-copy`, `generated-derivative`, `unresolved-selector`, `externally-resolved`, `capability-based`, `provider-dependent`, `environment-dependent` |
| Deterministic invalidity condition | Value absent or not a member of the closed set |
| Validation result | Fail (PMS-VR-017) |
| Evidence implication | Governs which integrity/provenance obligations (§8) apply to the constituent |

### 6.2 Reference-Mode Obligations

| Reference Mode | Additional Required Field | Rule Source |
|:---|:---|:---|
| `state-specific`, `digest-pinned` | Integrity/Provenance Reference (§8, PMS-B-01) | STEP 4 §8.4; A.6 §9 |
| `live` | Explicit disclosure that the reference is live (not disguised as pinned) | STEP 4 stress test 1 (§8.12) |
| `unresolved-selector` | Resolution rule reference (how the selector is resolved) | STEP 4 §8.4 |
| `externally-resolved`, `provider-dependent`, `environment-dependent` | Declared resolution boundary (what resolves it, and when) | STEP 4 §8.4, §8.11 (three-tier Target-supplied model) |
| `capability-based` | Reference to the capability requirement it satisfies (M.0 Capability) | STEP 4 §8.11 |
| `generated-derivative` | Provenance reference distinguishing generator identity from content identity | STEP 4 §8.9 |

A manifest declaring `state-specific` or `digest-pinned` without a bound Integrity/Provenance Reference is incomplete (§10, PMS-VR-018).

### 6.3 Transitive-Closure Disclosure (Field PMS-C-02)

| | |
|:---|:---|
| Stable identifier | `PMS-C-02` |
| Normative definition | A manifest shall declare, per constituent, whether its own transitive dependencies (if any) have been checked for reference-mode fixity. A direct reference being pinned makes no claim about its transitive dependencies (STEP 4 §8.4, stress test 27). |
| Source authority | STEP 1–6 Baseline §8.4, §8.12 (stress test 27) |
| Type | Enumeration |
| Cardinality | Exactly one per constituent that itself has declared dependents within manifest scope |
| Required/Optional | Required when the constituent has in-scope dependents; otherwise not applicable |
| Allowed values | `checked-fixed`, `checked-live-present`, `unchecked` |
| Deterministic invalidity condition | Field omitted where dependents are declared in scope |
| Validation result | Warning (PMS-VR-019) — this RFC treats an honestly-disclosed `unchecked` value as valid but incomplete-information, per STEP 4's principle that "unchecked" is unsupported, not false |
| Evidence implication | An `unchecked` disclosure is not itself a defect; a false `checked-fixed` disclosure is (§10) |

### 6.4 Reference Identity Is Never Inferred From Bytes

Per STEP 4 §8.9 and §8.12 (stress test 25), a Constituent Reference shall identify its target by declared M.2 identity, never by byte comparison alone. Two byte-identical archives with independently assigned identities are not the same constituent reference. Validators shall not treat byte equality as identity evidence (PMS-VR-020, Fail if a manifest's own validation logic conflates the two — this is a manifest-authoring rule, not a claim about external tooling).

## 7. Constituent Role Representation

### 7.1 Role Declared Per-Instance (Field PMS-C-03)

| | |
|:---|:---|
| Stable identifier | `PMS-C-03` |
| Normative definition | Every Content Index entry shall declare a Constituent Role: a per-instance declaration of the constituent's function within this specific release. A role shall never be inferred from artifact type, file extension, or naming convention. |
| Source authority | STEP 1–6 Baseline §8.5 ("Role is declared per-instance for the specific Release, never inferred from artifact type"); STEP 4 stress test 18 (§8.12) |
| Type | Enumeration (extensible per §13) |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values (baseline set) | `product-content`, `manifest-self-reference`, `integrity-record`, `release-notes`, `notice`, `evidence-summary`, `sbom`, `provenance-attestation`, `compatibility-matrix`, `migration-advisory`, `archival-bundle` — drawn directly from A.6 §5's Required and Optional Distribution Artifacts list |
| Deterministic invalidity condition | Value absent, or not a member of the declared role vocabulary and not a governed extension role (§13) |
| Validation result | Fail (PMS-VR-021) |
| Evidence implication | Role determines which other manifest obligations (e.g., integrity binding, uninstall-boundary membership) apply to the constituent |

### 7.2 Role Is Independent of Type

STEP 4 stress test 18 (§8.12) establishes that the same artifact type may carry different roles in different releases with different consequences (e.g., a document included as `release-notes` versus as `product-content`). This RFC requires the Constituent Role field precisely because role cannot be derived from the constituent's reference mode (§6) or its file type. A validator shall treat role and reference mode as independent fields (PMS-VR-022, Fail if a manifest declares them as a single combined value).

### 7.3 AI-DOS-Owned Role Marker (Field PMS-C-04)

| | |
|:---|:---|
| Stable identifier | `PMS-C-04` |
| Normative definition | Every Content Index entry shall declare whether it is AI-DOS-owned content for the purposes of A.6 §13's Uninstall Boundary. |
| Source authority | A.6 §13 ("Uninstall shall remove or deactivate only content and installation records identified as AI-DOS-owned") |
| Type | Boolean |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values | `true`, `false` |
| Deterministic invalidity condition | Absent |
| Validation result | Fail (PMS-VR-023) |
| Evidence implication | PMS-M-15 (uninstall boundary list) shall contain exactly the constituents marked `true` here — a cross-field consistency rule (§10) |

## 8. Constituent Membership Representation

STEP 4 §8.6 (CMP-06) enumerates required/optional/conditional/alternative membership categories. This RFC adopts them as the closed set of Constituent Membership Categories.

### 8.1 Membership Category (Field PMS-C-05)

| | |
|:---|:---|
| Stable identifier | `PMS-C-05` |
| Normative definition | Every Content Index entry shall declare exactly one Constituent Membership Category from the closed set below. |
| Source authority | STEP 1–6 Baseline §8.6 |
| Type | Enumeration |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values | `mandatory`, `optional`, `conditionally-required`, `mutually-exclusive-alternative`, `capability-selected`, `environment-selected`, `provider-selected`, `target-supplied`, `externally-supplied`, `deferred-unresolved` |
| Deterministic invalidity condition | Value absent or not a member of the closed set |
| Validation result | Fail (PMS-VR-024) |
| Evidence implication | Governs which completeness dimension (§9) applies at validation time |

### 8.2 Category-Specific Obligations

| Category | Additional Required Field | Rule Source |
|:---|:---|:---|
| `conditionally-required` | Condition expression referencing capability, environment, or provider selectors | STEP 4 §8.6, §8.11 |
| `mutually-exclusive-alternative` | Alternative-set identifier grouping all mutually exclusive entries | STEP 4 §8.6 |
| `capability-selected` | Reference to the M.0 Capability that selects it | STEP 4 §8.11 |
| `environment-selected`, `provider-selected` | Declared selector value or selector reference | STEP 4 §8.5, §8.11 |
| `target-supplied` | Declaration that the *slot* (not the Target-supplied value) is what this manifest declares — the three-tier model of STEP 4 §8.11: the Release-declared slot is part of composition; the specific Target-supplied value is not; the resulting realization is its own distinct thing | STEP 4 §8.11 |
| `externally-supplied` | Declared external source boundary | STEP 4 §8.6 |
| `deferred-unresolved` | Explicit flag that referential completeness (§9) is not satisfied for this entry, and whether flagged-incomplete acceptance applies is outside this RFC's authority (§17.4) | STEP 4 §8.12, stress test 20 |

A manifest declaring `mutually-exclusive-alternative` without a shared alternative-set identifier across at least two entries is malformed (PMS-VR-025, Fail).

### 8.3 Optionality Never Implies Identity Consequence

Per STEP 4 §8.6: "Optionality never automatically creates a new Release, and never automatically leaves identity untouched — consequence depends entirely on declared policy." This RFC does not declare that policy. A manifest conformant to this schema makes no claim, and this RFC authorizes no inference, about whether a given optional/conditional constituent's presence or absence changes Release identity (§17.2).

## 9. Manifest Completeness Dimensions (Bounded Scope)

STEP 4 §8.8 (CMP-08) names eleven completeness dimensions. The accepted coverage assessment found only the **state-binding** and **role** completeness dimensions within this RFC's tied-candidate territory; the remaining nine (syntactic, referential, identity, dependency, provenance, authority, compatibility-assessment, materialization, operational) are addressed only to the extent A.6 §7/§15 already partially covers them, and are not otherwise redefined here.

| Completeness Dimension | This RFC's Treatment |
|:---|:---|
| State-binding completeness | Owned here: every constituent (§6) shall declare a Reference Mode that resolves to a specific state when the mode is `state-specific`, `digest-pinned`, or `revision` (PMS-VR-026, Fail if the mode implies state-binding but no state selector is present) |
| Role completeness | Owned here: every constituent shall declare a Role (§7); a manifest missing role on any entry is referentially named but role-incomplete, a distinct, separately-failable condition per STEP 4 stress test 26 (PMS-VR-027, Fail) |
| Syntactic completeness | Partially covered by A.6 §7's required-field list (§5 of this RFC); this RFC does not define schema syntax itself (A.6 §17) |
| Referential completeness | Partially covered: PMS-VR-024/025 detect malformed membership declarations; whether a flagged-incomplete manifest may ever be accepted is an open policy question this RFC does not resolve (STEP 4 stress test 20; §17.4) |
| Identity, dependency, provenance, authority, compatibility-assessment completeness | Addressed only through the specific fields this RFC already defines (§4, §6, §8, PMS-M-11); not independently re-derived as separate dimensions here |
| Materialization, operational completeness | Not addressed — outside this RFC's authorized reading and scope; ownership remains unresolved per the accepted coverage assessment (§17.4) |

## 10. Binding and Integrity-Reference Fields

### 10.1 Integrity/Provenance Reference (Field PMS-B-01)

| | |
|:---|:---|
| Stable identifier | `PMS-B-01` |
| Normative definition | A constituent whose Reference Mode (§6.1) is `state-specific` or `digest-pinned` shall carry a bound Integrity/Provenance Reference sufficient for the verification A.6 §9 requires: package identity, manifest identity, content integrity, signature or approved signature reference, release authority, provenance posture, and revocation/invalidation status where applicable. |
| Source authority | A.6 §9 (Integrity and Provenance); A.6 §7 ("integrity and provenance references") |
| Type | Structured reference (opaque to this RFC — algorithm, key management, and signing tooling are excluded, per A.6 §9's own exclusion) |
| Cardinality | Zero or one per constituent; mandatory when Reference Mode requires it (§6.2) |
| Required/Optional | Conditional |
| Allowed values / constraints | Shall not select a specific hash algorithm, signature scheme, or certificate infrastructure (A.6 §9) |
| Deterministic invalidity condition | Missing when Reference Mode requires it; present but missing one of the seven A.6 §9 verification elements |
| Validation result | Fail (PMS-VR-028) |
| Evidence implication | Feeds A.6 §5's Integrity Record artifact; does not itself constitute that artifact |

### 10.2 Package-Level Binding Reference (Field PMS-B-02)

| | |
|:---|:---|
| Stable identifier | `PMS-B-02` |
| Normative definition | The manifest shall declare a package-level binding linking the manifest instance (PMS-M-01) to the package it describes (PMS-M-04) and to the product version (PMS-M-05), using M.6 Cross-Family Version Reference discipline: both target identity and target version shall be declared together. |
| Source authority | M.6 §8, Rule 39 ("Cross-family version references must declare both target identity and target version") |
| Type | Composite reference (identity + version) |
| Cardinality | Exactly one |
| Required/Optional | Required |
| Deterministic invalidity condition | Identity declared without version, or version declared without identity |
| Validation result | Fail (PMS-VR-029) |
| Evidence implication | Anchors PMS-M-11's compatibility declaration and PMS-M-14's rollback lineage to an unambiguous package/version pair |

## 11. Deterministic Ordering and Normalization Requirements

Because A.6 does not select archive format, serialization, or storage layout (A.6 §6), this RFC imposes ordering and normalization requirements only at the semantic level — what two semantically equivalent manifests must agree on — not at the syntactic (byte or key-order) level, which remains outside this RFC's scope (A.6 §17, "package schema syntax" is bounded to the semantic constructs enumerated in §6–§10 above; concrete serialization order is downstream implementation).

| Rule ID | Requirement | Source Authority |
|:---|:---|:---|
| PMS-N-01 | The Content Index (PMS-M-09) shall not contain two entries with the same (Constituent Reference identity, Constituent Role) pair. | STEP 4 §8.9 ("byte identity never equals entity identity" combined with role-per-instance, §7); M.2 Rule 4 (no collision within scope) |
| PMS-N-02 | For deterministic comparison and diffing, a canonical manifest representation orders Content Index entries by Constituent Reference identity in ascending lexicographic order. This is a canonicalization rule for comparison purposes only; it does not constrain the serialized storage order a package format may use. | M.2 §7.4 (canonical reference stability); M.9 §7.4 (validation scope must be recorded, not silently altered) |
| PMS-N-03 | The Rollback Lineage (PMS-M-14) shall list predecessor versions in a single, continuous, non-branching order for this manifest's own declared lineage view; branching, if present in the underlying M.6 lineage, is represented by reference, not by flattening. | M.6 §7.7 (lineage continuity); M.6 Invariant ("lineage is a directed acyclic graph; cycles are prohibited") |
| PMS-N-04 | Alternative-set identifiers (§8.2) shall be unique within the manifest and shall not be reused across unrelated mutually-exclusive-alternative groups. | M.2 §7.6 (collision semantics, applied within manifest scope) |

Duplicate detection (PMS-N-01) and lineage discontinuity (PMS-N-03) each produce Fail results (PMS-VR-030, PMS-VR-031 respectively).

## 12. Validation Rules and Deterministic Validation-Result Identifiers

### 12.1 Validation Rule Anatomy

Every validation rule in this RFC follows the M.9 §7.5 Validation Rule anatomy: identity, authority, owner, domain, scope requirement, constraint, binding reference, severity, and lifecycle. Rule identity is the `PMS-V-xxx` identifier assigned in §12.2. Owner is this RFC. Authority is A.6 (via this RFC). Domain is one of the M.9 §7.5 eight rule types; every rule below is classified as **Structural Rule** or **Semantic Rule** (this RFC defines no Authority, Relationship, Lifecycle, Evidence, Compatibility, or Extension rules of its own — those domains are consumed, not redefined, per M.9 §9).

### 12.2 Validation Rule Registry

| Rule ID | Domain (M.9 §7.5) | Checks | Field(s) | Severity |
|:---|:---|:---|:---|:---|
| PMS-V-01 | Structural | Manifest Identity present and unique (§4.2) | PMS-M-01 | Mandatory |
| PMS-V-02 | Structural | Schema-Version Reference present, immutable, resolvable (§4.3) | PMS-M-02 | Mandatory |
| PMS-V-03 | Structural | All A.6 §7 top-level fields present per §5's cardinality | PMS-M-03…PMS-M-16 | Mandatory (Warning for PMS-M-08, PMS-M-16 per §5) |
| PMS-V-04 | Structural | Every Content Index entry declares a closed-set Reference Mode (§6.1) | PMS-C-01 | Mandatory |
| PMS-V-05 | Semantic | Reference-mode-specific obligations satisfied (§6.2) | PMS-C-01, PMS-B-01 | Mandatory |
| PMS-V-06 | Semantic | Transitive-closure disclosure present where applicable (§6.3) | PMS-C-02 | Advisory |
| PMS-V-07 | Structural | Every Content Index entry declares a closed-set Role (§7.1) | PMS-C-03 | Mandatory |
| PMS-V-08 | Structural | AI-DOS-owned marker present and consistent with uninstall-boundary list (§7.3) | PMS-C-04, PMS-M-15 | Mandatory |
| PMS-V-09 | Structural | Every Content Index entry declares a closed-set Membership Category (§8.1) | PMS-C-05 | Mandatory |
| PMS-V-10 | Semantic | Category-specific obligations satisfied (§8.2) | PMS-C-05 | Mandatory |
| PMS-V-11 | Semantic | Integrity/Provenance Reference complete when required (§10.1) | PMS-B-01 | Mandatory |
| PMS-V-12 | Semantic | Package-level binding declares identity and version together (§10.2) | PMS-B-02 | Mandatory |
| PMS-V-13 | Structural | No duplicate (reference identity, role) pairs (§11, PMS-N-01) | PMS-M-09 | Mandatory |
| PMS-V-14 | Structural | Rollback lineage continuous (§11, PMS-N-03) | PMS-M-14 | Mandatory |

### 12.3 Deterministic Validation-Result Identifiers

Every rule in §12.2 produces exactly one M.9 §7.6 result type (Pass, Fail, Warning, or Waived Finding) per assertion. This RFC assigns each rule's non-pass outcome a stable, deterministic Validation-Result Identifier so that the same failure condition always produces the same identifier across implementations.

| Result ID | Rule | Result Type | Deficiency |
|:---|:---|:---|:---|
| PMS-VR-001 | PMS-V-01 | Fail | Manifest identity absent or not unique |
| PMS-VR-002 | PMS-V-02 | Fail | Schema-version reference absent, unresolvable, or non-immutable |
| PMS-VR-003…PMS-VR-016 | PMS-V-03 | Fail (Warning for -008, -016) | Named field (§5 table) absent or malformed |
| PMS-VR-017 | PMS-V-04 | Fail | Reference mode absent or not in closed set |
| PMS-VR-018 | PMS-V-05 | Fail | `state-specific`/`digest-pinned` without bound integrity reference |
| PMS-VR-019 | PMS-V-06 | Warning | Transitive-closure disclosure `unchecked` (informational, not a defect) or absent where required |
| PMS-VR-020 | PMS-V-05 | Fail | Manifest's own validation logic treats byte equality as identity evidence |
| PMS-VR-021 | PMS-V-07 | Fail | Role absent or not in declared vocabulary |
| PMS-VR-022 | PMS-V-07 | Fail | Role and reference mode collapsed into one field |
| PMS-VR-023 | PMS-V-08 | Fail | AI-DOS-owned marker absent |
| PMS-VR-024 | PMS-V-09 | Fail | Membership category absent or not in closed set |
| PMS-VR-025 | PMS-V-10 | Fail | `mutually-exclusive-alternative` without shared alternative-set identifier |
| PMS-VR-026 | PMS-V-05 | Fail | State-binding-implying mode without state selector |
| PMS-VR-027 | PMS-V-07 | Fail | Referentially-complete but role-incomplete entry |
| PMS-VR-028 | PMS-V-11 | Fail | Integrity/provenance reference missing a required verification element |
| PMS-VR-029 | PMS-V-12 | Fail | Package-level binding declares identity or version without the other |
| PMS-VR-030 | PMS-V-13 | Fail | Duplicate (reference identity, role) pair in Content Index |
| PMS-VR-031 | PMS-V-14 | Fail | Discontinuous rollback lineage |

Every `Fail` and `Warning` result carries mandatory evidence per M.9 §7.6: rule violated, deficiency, and expected state (or, for Warning, the concern and non-blocking rationale). A `Waived Finding` may only replace a `Fail` result under this registry when a governing authority records deficiency, waiving authority, rationale, and waiver scope, per M.9 §7.6's Waived Finding row and Validation Assertion VA-9.14 (M.9 §15); this RFC does not itself grant any standing waiver.

## 13. Compatibility and Extensibility Rules

### 13.1 Schema Version Evolution

Changes to this manifest schema follow M.6 §7.6's Schema Version Model:

| Change Class | Example | Schema Version Increment |
|:---|:---|:---|
| Breaking | Removing a required field (§5, §6, §7, §8, §10); removing a Reference Mode, Role, or Membership Category from a closed set; changing a field's type | MAJOR |
| Additive | Adding an optional field; adding a new Reference Mode, Role, or Membership Category value; extending an enumeration | MINOR |
| Corrective | Fixing a documentation error or an overly permissive constraint | PATCH |

A schema consumer (a manifest validator) shall declare the minimum Schema Version it requires (M.6 §8, Rule 38). A manifest instance bound to Schema Version `1.0.0-draft` is not required to validate against a later MINOR or PATCH schema version unless the consumer's own minimum-version declaration requires it.

### 13.2 Extensibility Points

| Extension Point | Rule |
|:---|:---|
| Release channel (PMS-M-06) | Additional channel values beyond A.6 §8's baseline set require a governed extension declaration; this RFC does not enumerate them |
| Constituent Role (§7.1) | Additional role values beyond the baseline set drawn from A.6 §5 require a governed extension declaration bound to M.8 Extension semantics when M.8 applies; this RFC does not itself define an M.8 Extension Profile |
| Constituent Membership Category (§8.1) | Closed set; extension requires a future amendment to this RFC, not an ad hoc manifest declaration, because membership categories carry validation obligations (§8.2) that an unrecognized value cannot satisfy |
| Constituent Reference Mode (§6.1) | Closed set; same rule as Membership Category |

### 13.3 Compatibility Declaration for This Schema

Per M.7 §7.1, any future manifest schema version's compatibility with `1.0.0-draft` is a Compatibility Relation requiring its own M.5-bound evidence; this RFC does not declare that relation in advance for a version that does not yet exist. This RFC's own relationship to A.6 is not a compatibility relation in the M.7 sense (M.7 governs relations between versioned entities of the same kind); it is a subordination relation already declared in §1.

## 14. Evidence Requirements

Per M.5 §7.2, every Evidence Item this RFC requires (directly, or as a mandatory result attachment per §12.3) shall carry: Identity (M.2), Evidence Type, Source, Subject, Claim Binding (M.3), Content, and the M.5 §7.2 quality dimensions where applicable.

| Evidence Requirement | Bound To | M.5 Evidence Type |
|:---|:---|:---|
| Every `Fail` result's rule-violated/deficiency/expected-state content (§12.3) | PMS-V-01…PMS-V-14 | Direct (validation execution trace) or Analytical |
| Every `Warning` result's concern/rationale/recommendation (§12.3) | PMS-V-03 (Warning cases), PMS-V-06 | Direct or Analytical |
| Compatibility declaration (PMS-M-11) | M.7 §6 (hard dependency: compatibility claims require M.5 evidence, non-negotiable) | Per M.7's own evidence-type requirements; not redefined here |
| Integrity/provenance reference (PMS-B-01) | A.6 §9 | Provenance-chain evidence per M.5 §5 (Provenance); algorithm/tooling excluded |
| A Waived Finding replacing any PMS-VR-xxx Fail (§12.3) | Waiving authority, rationale, waiver scope | Governance-sourced Evidence Item per M.5 §7.2 (Source Authority: governed) |

This RFC does not define an evidence storage format, collection mechanism, or validator implementation (M.5 §4; M.9 §4 — both explicitly out of scope for their owning Meta family, and therefore out of scope here).

## 15. Security and Integrity Considerations

1. A manifest's own claims (e.g., `checked-fixed` at §6.3, or an Integrity/Provenance Reference at §10.1) are assertions, not proof; per STEP 4 §8.9, a generated constituent is never validated merely because its generator is trusted, and this RFC does not create an exception.
2. Per A.6 §9, missing, mismatched, revoked, expired, ambiguous, or unverifiable integrity data requires safe stop; this RFC's PMS-VR-018 and PMS-VR-028 Fail results are the manifest-schema-level trigger for that safe-stop condition, not a replacement for it.
3. This RFC does not select a hash algorithm, signature scheme, key-management system, certificate infrastructure, or transparency log (A.6 §9); any such selection remains a future, separately authorized specification (A.6 §18, "Signing and Provenance RFC").
4. A manifest shall not declare Target-owned secrets, credentials, or private governance evidence in any field defined by this RFC (A.6 §6's package-contents exclusion list applies unchanged to every field in §5–§10).
5. A `false` provenance claim on a byte-correct constituent (STEP 4 §8.12, stress tests 2 and 14) is a provenance-dimension defect distinct from a structural/content defect; this RFC's PMS-VR-028 addresses the completeness of the provenance reference, not the truth of the claim it carries — verifying the claim's truth is downstream of this RFC (A.6 §9's own conformance responsibility).

## 16. Explicit Non-Goals and Ownership Exclusions

This RFC does not:

- classify Release under M.0 or M.1;
- select an M.3 root relationship mapping for the composition relation (the "constituent reference," "constituent role," and "constituent membership" constructs defined in §6–§8 are manifest-schema-syntax-level constructs scoped to this RFC's own territory; they do not create, name, or allocate a new M.3 root relationship type, and they do not resolve the RC-01/RC-02 gap identified in `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md`);
- create an M.6 Release Scope level;
- amend M.6, M.7, M.9, or any other Meta-Model;
- create or allocate a new Meta responsibility;
- define Release identity policy (STEP 4 §8.7 / CMP-07 remains unresolved; this RFC represents a Package Identifier and Product Version as fields, without adopting any of STEP 4's four release-identity possibilities or its three Release-candidate-identity alternatives);
- define release approval policy (A.6 §15's gates are consumed, not redefined);
- define operational-reliance authority (STEP-4-vs-A.6 CMP-09's "authorize operational reliance" authority remains unaddressed by this RFC);
- define deployment or Runtime/Engine behavior (A.6 §17; STEP 4 §8.3's "deployed" stage);
- define the Release Engineering and Artifact Assembly RFC, the Signing and Provenance RFC, the Local Installation Controller RFC, or any other A.6 §18 candidate;
- implement the schema in code, create a validator, or create migrations;
- begin STEP 7 or general Version Signaling work;
- modify A.6, any Meta-Model, or either accepted report cited in this RFC;
- update Forge AI planning or operational state;
- resolve CMP-08's operational-completeness dimension, or CMP-03's deployed/observed composition stages;
- resolve CMP-09's "select constituents" or "assemble" authority-role placement (both remain open per the accepted coverage assessment).

## 17. Unresolved Semantic Ownership (Marked, Not Resolved)

The following are explicitly marked as unresolved by this RFC, consistent with the accepted STEP-4-vs-A.6 coverage assessment's own conclusion (Outcome D):

1. Whether Release is an M.0/M.1-classified entity, and under what M.3 relationship mapping composition is expressed generally (CMP-01, CMP-07; RC-01, RC-02).
2. Whether optionality/conditionality of a constituent (§8.3) changes Release identity in any given case — STEP 4 §8.6 leaves this a declared-policy question this RFC does not answer.
3. Whether a manifest may ever be accepted with a `deferred-unresolved` membership entry (§8.2) — STEP 4 stress test 20 leaves this open.
4. "Authorize operational reliance" and "observe deployment/use" authority placement (CMP-09) — not addressed by this RFC; no second concrete candidate was identified for either in the accepted assessment.
5. CMP-03's "deployed" and broader "observed" composition stages, and CMP-08's operational-completeness dimension — not addressed by this RFC.

None of these gaps block this RFC's own conformance (§18); they are recorded so that a future, separately authorized work unit does not need to rediscover them.

## 18. Conformance

A Release Manifest instance conforms to this RFC when:

- it satisfies every Mandatory rule in §12.2 with no unwaived Fail result;
- every Warning result carries the evidence §12.3 and §14 require;
- any Waived Finding replacing a Fail result carries waiving authority, rationale, and waiver scope per §12.3;
- it declares Schema-Version conformance (§4.3) to a Schema Version that exists and is not Archived;
- it does not exceed this RFC's declared scope (§16) by asserting Release-identity policy, release-approval policy, operational-reliance authority, or deployment/runtime behavior as if this RFC had defined them.

Conformance under this RFC is a manifest-schema-level conformance claim only. It is not a release approval, a certification, a compatibility guarantee beyond PMS-M-11's declared claim, or an assertion that the described package will install, deploy, or run correctly (A.6 §11, §17).

## 19. Promotion

This RFC remains Draft. Canonical promotion requires, at minimum:

- consistency review against A.6 (this RFC's sole normative parent);
- consistency review against M.2, M.5, M.6, M.7, M.9 (consumed, not amended);
- confirmation that no field or rule in this RFC exceeds the bounded CMP-04/CMP-05/CMP-06/CMP-08(state-binding/role) territory identified in §2;
- Framework Governance review;
- explicit Human Governance approval and promotion record.

This RFC does not claim Accepted, Approved, Active, or canonical status by its own text.

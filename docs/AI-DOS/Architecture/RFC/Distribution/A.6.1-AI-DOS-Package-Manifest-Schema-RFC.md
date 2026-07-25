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
| Non-Normative Research Input | `docs/AI-DOS/Architecture/Discovery/Versioning-Architecture-Research-Baseline-STEP-1-6.md` (STEP 1–6) — accepted research evidence per its own metadata ("Canonical Status: Non-canonical... Not a Meta-Model, Standard, RFC, or approved architecture"); informs but does not authorize any provision of this RFC (§2.1) |
| Dependencies | A.6 §5–§10, §17; M.0; M.1; M.2; M.3; M.5; M.6; M.7; M.9; STD-010 |
| Produces | Package manifest identity and schema-version signaling contract; constituent reference, role, and membership representation; binding/integrity-reference field contract; validation rules and deterministic condition codes; invalid/incomplete manifest behavior; compatibility and extensibility rules for the manifest schema itself |
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

A.6.1 defines the normative package manifest schema contract for the AI-DOS Release Manifest artifact required by A.6 §5 and §7. It proposes a schema for the package-schema-syntax-adjacent portion of the Release Composition territory discussed in STEP 4 of the STEP 1–6 Research Baseline (§8.4–§8.6, and the state-binding/role portion of §8.8) — accepted by Human Governance as research evidence, not as normative architecture (§2.1) — bounded exactly to the territory A.6 §17 excludes from its own scope ("package schema syntax") and explicitly lists at §18 as a downstream specification candidate.

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

### 2.1 Research Input vs. Normative Authority

This RFC's normative parent authority is A.6, consumed through A.1 and A.2 (Document Metadata, "Normative Authority"). The STEP 1–6 Research Baseline is **accepted research evidence, not accepted normative architecture** — the Baseline's own metadata states this explicitly ("Status: Accepted research evidence"; "Canonical Status: Non-canonical... Not a Meta-Model, Standard, RFC, or approved architecture"; "Normative Authority: None"), and the accepted `AI-DOS-STEP-4-vs-A.6-Release-Composition-Responsibility-Coverage-Assessment.md` preserves that distinction throughout.

Human Governance's selection of the **RFC form** for this work unit (rather than the tied future Standard candidate, §2.2) authorized this RFC to be drafted within the bounded territory identified below. It did not thereby accept STEP 4's taxonomies, enumerations, or semantic distinctions as normative content. Accordingly, every closed reference-mode set, role vocabulary, membership-category set, transitive-closure construct, and stress-test-derived rule in §3, §6–§9, §11, and §15 below is presented as an **A.6.1 Draft design proposal, informed by non-normative STEP 4 research**, not as inherited, already-accepted normative content. Each such proposal remains subject to this RFC's own Draft → Review → Approved lifecycle (§19) like any other provision of this RFC; none of them carries independent authority from the Baseline itself.

Where a table cell below cites "STEP 4 §X" or "STEP 4 stress test N," that citation identifies the research input this RFC's proposal was informed by — it does not assert that STEP 4 is itself a source of normative authority. The Meta family (M.0–M.9) and A.6 remain this RFC's actual normative sources wherever cited.

### 2.2 Bounded Territory

The normative boundary of this RFC is exactly the "package schema syntax" territory A.6 §17 excludes from A.6's own ownership, scoped further to the four STEP 4 subsections the accepted STEP-4-vs-A.6 Coverage Assessment (`docs/AI-DOS/Architecture/Reports/AI-DOS-STEP-4-vs-A.6-Release-Composition-Responsibility-Coverage-Assessment.md`, Sub-finding 1) found tied between this RFC and a non-selected future Standard candidate:

- CMP-04 — constituent reference and binding-type representation (STEP 4 §8.4);
- CMP-05 — constituent role representation (STEP 4 §8.5);
- CMP-06 — constituent membership representation (STEP 4 §8.6);
- the state-binding and role portions of CMP-08 — composition completeness dimensions (STEP 4 §8.8).

Human Governance selected this RFC form (not the tied future Standard candidate) for this territory. This selection is a governance choice, not a deterministic conclusion of the coverage assessment, and it does not foreclose a future Standard for any other unresolved gap identified there (e.g., "assemble" authority, "authorize operational reliance", "observe deployment/use", CMP-03's deployed/observed stages, or CMP-08's operational-completeness dimension). Only provisions that fit within this bounded territory are retained in this RFC.

## 3. The Governed Artifact

This RFC governs exactly one artifact: the **Release Manifest**, the "release manifest" artifact A.6 §5 requires every release to contain or reference, and whose minimum declared content A.6 §7 lists.

The Release Manifest describes — but is not identical to — the AI-DOS package (A.6 §6) and the release it belongs to. This RFC's own design position, informed by non-normative STEP 4 §8.1 research (§2.1) and not conflicting with it: the manifest's declared composition is a claim about the package; composition equality between two manifests never proves release-identity equality, and composition difference never automatically proves release-identity difference. This RFC does not resolve release-identity policy (§17.2).

A Release Manifest instance is an M.1 Document Artifact / Governance Artifact-adjacent Knowledge Artifact representation with M.2 identity, consumed through the Artifact Consumption Interface (M.1 §7.12); it is not itself a runtime object, installer configuration, or package-manager-specific file format.

## 4. Manifest Identity and Schema-Version Signaling

### 4.1 Manifest Schema Identity

The manifest schema defined by this RFC does not mint a new global M.2 identifier family. M.2 §7.3 requires governance approval and M.2 amendment for a new identifier family, and this RFC neither performs nor requests that amendment (§16).

Instead, the schema uses this RFC's own, already-authorized Architecture RFC identity (Document Metadata, "Identifier") as its canonical reference, per M.2 §7.4 (Canonical Reference Model):

| Field | Value |
|:---|:---|
| Schema Identifier | `AI-DOS.V2.ARCH-RFC-006.1` (this RFC's own canonical reference; no new identifier family created) |
| Schema Version | `1.0.0-draft` (M.6 Schema Version, §7.6) |
| Schema Version Binding | Explicit and immutable per M.9 §7.3: this document binds Schema Version `1.0.0-draft` to this RFC's own document version; no implicit latest-version binding exists |

### 4.2 Manifest Instance Identity (Field PMS-M-01)

A dedicated global identifier-family prefix for Release Manifest *instances* (analogous to `EVID-`, `CERT-`, etc. in M.2 §7.3's table) does not currently exist and is not allocated by this RFC. Minting one requires the same governance approval and M.2 amendment M.2 §7.3 requires for any new family — a future, separately authorized work unit, not this RFC. Until that allocation exists, this RFC requires only that manifest instance identity satisfy M.2's general identity rules within a scope this RFC does not itself fix.

| | |
|:---|:---|
| Stable identifier | `PMS-M-01` |
| Normative definition | Every Release Manifest instance shall declare a Manifest Identifier: a stable M.2 identity for the manifest instance itself, distinct from the Package Identifier (PMS-M-04) and Product Identifier (PMS-M-03) it describes. The concrete identifier-family prefix and uniqueness scope are deferred pending future identifier-family allocation (see above); this RFC requires only that the declared value be a well-formed M.2 identifier that is stable and unique within whatever scope the declaring authority records alongside it. |
| Source authority | M.2 §7.1 (Instance Identity), §7.3 (Identifier Semantics); A.6 §7 ("release manifest shall declare... package identifier") |
| Type | M.2 identifier (prefix + body, optional version suffix); prefix family not allocated by this RFC |
| Cardinality | Exactly one |
| Required/Optional | Required |
| Allowed values / constraints | Shall resolve uniquely within its declared scope (M.2 §7.2); shall not be inferred from file path, archive name, or storage location (M.2 Rule 21); shall not use the `AI-DOS-ARCH-` / `AI-DOS.V2.ARCH-RFC-` prefix reserved for this RFC and other Architecture RFCs |
| Deterministic invalidity condition | Field absent, empty, not unique within its declared scope, or using a reserved Architecture RFC prefix |
| Validation result | Fail (`PMS-DC-001`, §12.3) |
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
| Validation result | Fail (`PMS-DC-002`, §12.3) |
| Evidence implication | Establishes which version of this RFC's rules (§7–§12) govern validation of the instance |

## 5. Manifest Top-Level Fields

This section specializes A.6 §7's declared minimum content into individually validatable fields. It does not add fields beyond A.6 §7's list. A.6 §7 states its list as content the manifest "shall declare at minimum" — every item in that list is therefore a **required field**: the field key itself shall always be present in a conformant manifest. This is distinct from, and shall not be conflated with, that field's **value cardinality** — several A.6 §7 items are naturally list-valued and may validly hold zero entries (an explicit empty list, or an explicit "none"/"not applicable" value where §10 or §13 recognize one). Field-key absence and empty-but-present value are two different, independently-detectable conditions; only the former is a Fail-severity Field Presence defect under this RFC.

Fields governing Release identity, product-version policy, or channel/compatibility *policy* are represented here only as manifest-schema fields; this RFC does not define the underlying policy those fields express (§17.2–§17.3).

| ID | A.6 §7 Item | Type | Field Presence | Value Cardinality | Constraint (this RFC) | Deterministic Invalidity | Rule(s) | Condition Code(s) |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| PMS-M-03 | AI-DOS product identifier | M.2 identifier | Required | Exactly one | Resolves within global identity scope | Field absent, or value unresolvable | PMS-V-03 | PMS-DC-003 |
| PMS-M-04 | Package identifier | M.2 identifier | Required | Exactly one | Distinct from PMS-M-01 and PMS-M-03 | Field absent, equal to PMS-M-01, or equal to PMS-M-03 | PMS-V-04 | PMS-DC-004 |
| PMS-M-05 | Product version | M.6 Semantic Version | Required | Exactly one | Well-formed `MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]` per M.6 §7.4 | Field absent or malformed | PMS-V-05 | PMS-DC-005 |
| PMS-M-06 | Release channel | Enumeration | Required | Exactly one | One of A.6 §8's baseline channels (Experimental, Preview, Stable, Long-term Support, Emergency) or a governed extension (§13) | Field absent or not a declared channel value | PMS-V-06 | PMS-DC-006 |
| PMS-M-07 | Release date | Date | Required | Exactly one | ISO 8601 calendar date | Field absent or malformed | PMS-V-07 | PMS-DC-007 |
| PMS-M-08 | Governance and certification posture | Structured value: canonical status + certification status | Required | Exactly one structured value | Values drawn from M.4 canonical-status and certification-status vocabularies; an explicit "Not certified" / "None" value (the same convention A.6's own metadata uses) is a valid, complete declaration, distinct from field absence | Field absent → Fail; field present but asserting a status this RFC cannot verify from bound evidence → Warning (separately-severed conditions, §12) | PMS-V-08 (presence); PMS-V-09 (verifiability) | PMS-DC-008 (Fail); PMS-DC-009 (Warning) |
| PMS-M-09 | Content index or content roots | List of Constituent References (§6) | Required | One or more | Non-empty; see §6 for element schema | Field absent or empty, or a contained element malformed | PMS-V-10 | PMS-DC-010 |
| PMS-M-10 | Integrity and provenance references | List of Binding/Integrity fields (§10) | Required (field key always present) | Zero or more (an explicit empty list is a valid, complete declaration that no release-level integrity/provenance reference exists beyond the per-constituent bindings of §10.1) | See §10 | Field key absent — an explicit empty list is not invalid | PMS-V-11 | PMS-DC-011 |
| PMS-M-11 | Compatibility declaration | M.7 Compatibility Claim reference | Required | Exactly one | Bound to M.5 evidence per M.7 §6 (hard dependency) | Field absent, or present without bound evidence | PMS-V-12 | PMS-DC-012 |
| PMS-M-12 | Breaking-change and deprecation status | M.6 Migration Obligation category | Required | Exactly one | One of the four M.6 §7.10 categories | Field absent or not one of the four categories | PMS-V-13 | PMS-DC-013 |
| PMS-M-13 | Minimum consumer expectations | Structured value (declared minimum capabilities/version ranges) | Required (field key always present) | Zero or more (an explicit empty list is a valid, complete declaration of no minimum consumer expectations beyond PMS-M-11) | Each present entry a well-formed M.6 Version Range (§7.12) when version-scoped | Field key absent, or a present entry malformed | PMS-V-14 | PMS-DC-014 |
| PMS-M-14 | Rollback lineage | M.6 Lineage Chain reference | Required | Exactly one (an ordered predecessor list that may be empty only at the declared lineage root, M.6 §7.7) | Continuous per M.6 §7.7 (no gaps); represented as a single, non-branching view per §11 (`PMS-N-03`) | Field absent, discontinuous, or represented with a branching/flattened view inconsistent with §11 | PMS-V-15 | PMS-DC-015 |
| PMS-M-15 | AI-DOS-owned uninstall boundary | List of Constituent References (§6) marked with the AI-DOS-owned membership category (§7.3) | Required (field key always present) | Zero or more (an explicit empty list is a valid, complete declaration that no constituent is AI-DOS-owned) | Every listed reference shall also appear in PMS-M-09; the list shall equal the set of constituents marked `PMS-C-04 = true` (§7.3) | Field key absent; a listed reference not present in PMS-M-09; or the list not equal to the `PMS-C-04 = true` set | PMS-V-16 (field presence + PMS-M-09 cross-reference); PMS-V-25 (`PMS-C-04` cross-reference, §7.3) | PMS-DC-016; PMS-DC-025 |
| PMS-M-16 | Source-disclosure posture | Enumeration | Required | Exactly one | Declares whether source is disclosed, partially disclosed, or withheld, consistent with A.6 §3 truth-domain rules | Field absent | PMS-V-17 | PMS-DC-017 |

## 6. Constituent Reference Representation

STEP 4 §8.4 enumerates twelve reference/binding types. Informed by that research (§2.1), this RFC proposes them as the closed set of Constituent Reference Modes a manifest may declare for each entry in the Content Index (PMS-M-09), bounded to the CMP-04 territory (§2.2).

### 6.1 Constituent Reference Modes (Field PMS-C-01)

| | |
|:---|:---|
| Stable identifier | `PMS-C-01` |
| Normative definition | Every Content Index entry shall declare exactly one Constituent Reference Mode from the closed set below. |
| Source authority | This RFC (A.6.1) design proposal, informed by non-normative STEP 4 §8.4 research (§2.1); normative parent: A.6 §17 (package schema syntax) |
| Type | Enumeration |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values | `identity-only`, `state-specific`, `live`, `revision`, `digest-pinned`, `embedded-copy`, `generated-derivative`, `unresolved-selector`, `externally-resolved`, `capability-based`, `provider-dependent`, `environment-dependent` |
| Deterministic invalidity condition | Value absent or not a member of the closed set |
| Validation result | Fail (`PMS-DC-018`, §12.3) |
| Evidence implication | Governs which integrity/provenance obligations (§10) apply to the constituent |

### 6.2 Reference-Mode Obligations

| Reference Mode | Additional Required Field | Rule Source |
|:---|:---|:---|
| `state-specific`, `digest-pinned` | Integrity/Provenance Reference (§10, `PMS-B-01`) | This RFC, informed by STEP 4 §8.4 (§2.1); A.6 §9 |
| `live` | Explicit disclosure that the reference is live (not disguised as pinned) | This RFC, informed by STEP 4 stress test 1 (§8.12) (§2.1) |
| `unresolved-selector` | Resolution rule reference (how the selector is resolved) | This RFC, informed by STEP 4 §8.4 (§2.1) |
| `externally-resolved`, `provider-dependent`, `environment-dependent` | Declared resolution boundary (what resolves it, and when) | This RFC, informed by STEP 4 §8.4 and §8.11's three-tier Target-supplied model (§2.1) |
| `capability-based` | Reference to the capability requirement it satisfies (M.0 Capability) | This RFC, informed by STEP 4 §8.11 (§2.1) |
| `generated-derivative` | Provenance reference distinguishing generator identity from content identity | This RFC, informed by STEP 4 §8.9 (§2.1) |

A manifest declaring `state-specific` or `digest-pinned` without a bound Integrity/Provenance Reference fails the mode's companion-field obligation (§10, `PMS-V-19` / `PMS-DC-019`, §12).

### 6.3 Transitive-Closure Disclosure (Field PMS-C-02)

| | |
|:---|:---|
| Stable identifier | `PMS-C-02` |
| Normative definition | A manifest shall declare, per constituent, whether its own transitive dependencies (if any) have been checked for reference-mode fixity. A direct reference being pinned makes no claim about its transitive dependencies. |
| Source authority | This RFC (A.6.1) design proposal, informed by non-normative STEP 4 §8.4 and §8.12 (stress test 27) research (§2.1) |
| Type | Enumeration |
| Cardinality | Exactly one per constituent that itself has declared dependents within manifest scope |
| Required/Optional | Required when the constituent has in-scope dependents; otherwise not applicable |
| Allowed values | `checked-fixed`, `checked-live-present`, `unchecked` |
| Deterministic invalidity condition | Field omitted where dependents are declared in scope |
| Validation result | Warning (`PMS-DC-020`, §12.3) — this RFC treats an honestly-disclosed `unchecked` value as valid but incomplete-information, consistent with the research this proposal was informed by, which treats "unchecked" as unsupported, not false |
| Evidence implication | An `unchecked` disclosure is not itself a defect; a false `checked-fixed` disclosure is (§10) |

### 6.4 Reference Identity Is Never Inferred From Bytes (Rule PMS-V-21)

Informed by non-normative STEP 4 §8.9 and §8.12 (stress test 25) research (§2.1), this RFC requires that a Constituent Reference identify its target by declared M.2 identity, never by byte comparison alone. Two byte-identical archives with independently assigned identities are not the same constituent reference. A manifest's own validation logic shall not treat byte equality as identity evidence (`PMS-V-21`, Mandatory; `PMS-DC-021`, Fail if conflated — this is a manifest-authoring rule, not a claim about external tooling).

## 7. Constituent Role Representation

### 7.1 Role Declared Per-Instance (Field PMS-C-03)

| | |
|:---|:---|
| Stable identifier | `PMS-C-03` |
| Normative definition | Every Content Index entry shall declare a Constituent Role: a per-instance declaration of the constituent's function within this specific release. A role shall never be inferred from artifact type, file extension, or naming convention. |
| Source authority | This RFC (A.6.1) design proposal, informed by non-normative STEP 4 §8.5 and stress test 18 (§8.12) research (§2.1); normative parent: A.6 §17 (package schema syntax) |
| Type | Enumeration (extensible per §13) |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values (baseline set) | `product-content`, `manifest-self-reference`, `integrity-record`, `release-notes`, `notice`, `evidence-summary`, `sbom`, `provenance-attestation`, `compatibility-matrix`, `migration-advisory`, `archival-bundle` — drawn directly from A.6 §5's Required and Optional Distribution Artifacts list |
| Deterministic invalidity condition | Value absent, or not a member of the declared role vocabulary and not a governed extension role (§13); also fails when role is entirely missing for an otherwise referentially-named entry (§9) |
| Validation result | Fail (`PMS-DC-022`, §12.3) |
| Evidence implication | Role determines which other manifest obligations (e.g., integrity binding, uninstall-boundary membership) apply to the constituent |

### 7.2 Role Is Independent of Type (Rule PMS-V-23)

Informed by non-normative STEP 4 stress test 18 (§8.12) research (§2.1): the same artifact type may carry different roles in different releases with different consequences (e.g., a document included as `release-notes` versus as `product-content`). This RFC requires the Constituent Role field precisely because role cannot be derived from the constituent's reference mode (§6) or its file type. A manifest shall declare role and reference mode as independent fields (`PMS-V-23`, Mandatory; `PMS-DC-023`, Fail if a manifest declares them as a single combined value).

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
| Validation result | Fail (`PMS-DC-024`, §12.3) |
| Evidence implication | PMS-M-15 (uninstall boundary list) shall contain exactly the constituents marked `true` here — a cross-field consistency rule enforced by `PMS-V-25` / `PMS-DC-025` (§12) |

## 8. Constituent Membership Representation

STEP 4 §8.6 (CMP-06) enumerates required/optional/conditional/alternative membership categories. Informed by that research (§2.1), this RFC proposes them as the closed set of Constituent Membership Categories, bounded to the CMP-06 territory (§2.2).

### 8.1 Membership Category (Field PMS-C-05)

| | |
|:---|:---|
| Stable identifier | `PMS-C-05` |
| Normative definition | Every Content Index entry shall declare exactly one Constituent Membership Category from the closed set below. |
| Source authority | This RFC (A.6.1) design proposal, informed by non-normative STEP 4 §8.6 research (§2.1); normative parent: A.6 §17 (package schema syntax) |
| Type | Enumeration |
| Cardinality | Exactly one per constituent |
| Required/Optional | Required |
| Allowed values | `mandatory`, `optional`, `conditionally-required`, `mutually-exclusive-alternative`, `capability-selected`, `environment-selected`, `provider-selected`, `target-supplied`, `externally-supplied`, `deferred-unresolved` |
| Deterministic invalidity condition | Value absent or not a member of the closed set |
| Validation result | Fail (`PMS-DC-026`, §12.3) |
| Evidence implication | Governs which completeness dimension (§9) applies at validation time |

### 8.2 Category-Specific Obligations (Rule PMS-V-27)

| Category | Additional Required Field | Rule Source |
|:---|:---|:---|
| `conditionally-required` | Condition expression referencing capability, environment, or provider selectors | This RFC, informed by STEP 4 §8.6 and §8.11 (§2.1) |
| `mutually-exclusive-alternative` | Alternative-set identifier grouping all mutually exclusive entries | This RFC, informed by STEP 4 §8.6 (§2.1) |
| `capability-selected` | Reference to the M.0 Capability that selects it | This RFC, informed by STEP 4 §8.11 (§2.1) |
| `environment-selected`, `provider-selected` | Declared selector value or selector reference | This RFC, informed by STEP 4 §8.5 and §8.11 (§2.1) |
| `target-supplied` | Declaration that the *slot* (not the Target-supplied value) is what this manifest declares — the three-tier model this RFC's proposal was informed by (STEP 4 §8.11, §2.1): the Release-declared slot is part of composition; the specific Target-supplied value is not; the resulting realization is its own distinct thing | This RFC, informed by STEP 4 §8.11 (§2.1) |
| `externally-supplied` | Declared external source boundary | This RFC, informed by STEP 4 §8.6 (§2.1) |
| `deferred-unresolved` | Explicit flag that referential completeness (§9) is not satisfied for this entry, and whether flagged-incomplete acceptance applies is outside this RFC's authority (§17.4) | This RFC, informed by STEP 4 §8.12 (stress test 20) (§2.1) |

A manifest declaring a category from the table above without that category's required companion field fails the single, composite `PMS-V-27` rule (Mandatory) — one assertion and one result per constituent, whose evidence names the specific unmet companion-field obligation via `PMS-DC-027` (§12).

### 8.3 Optionality Never Implies Identity Consequence

Informed by non-normative STEP 4 §8.6 research (§2.1): "optionality never automatically creates a new Release, and never automatically leaves identity untouched — consequence depends entirely on declared policy." This RFC does not declare that policy. A manifest conformant to this schema makes no claim, and this RFC authorizes no inference, about whether a given optional/conditional constituent's presence or absence changes Release identity (§17.2).

## 9. Manifest Completeness Dimensions (Bounded Scope)

STEP 4 §8.8 (CMP-08) names eleven completeness dimensions. The accepted coverage assessment found only the **state-binding** and **role** completeness dimensions within this RFC's tied-candidate territory; the remaining nine (syntactic, referential, identity, dependency, provenance, authority, compatibility-assessment, materialization, operational) are addressed only to the extent A.6 §7/§15 already partially covers them, and are not otherwise redefined here.

| Completeness Dimension | This RFC's Treatment |
|:---|:---|
| State-binding completeness | Owned here: every constituent (§6) shall declare a Reference Mode that resolves to a specific state when the mode is `state-specific`, `digest-pinned`, or `revision` — enforced by `PMS-V-28` (Mandatory), `PMS-DC-028` (Fail if the mode implies state-binding but no state selector is present) |
| Role completeness | Owned here: every constituent shall declare a Role (§7.1) — the same field-presence rule `PMS-V-22` / `PMS-DC-022` already enforces this; a manifest missing role on an otherwise referentially-named entry is not a separate defect from role absence and does not receive a second code |
| Syntactic completeness | Partially covered by A.6 §7's required-field list (§5 of this RFC); this RFC does not define schema syntax itself (A.6 §17) |
| Referential completeness | Partially covered: `PMS-V-26` / `PMS-DC-026` and `PMS-V-27` / `PMS-DC-027` detect malformed membership declarations; whether a flagged-incomplete manifest may ever be accepted is an open policy question this RFC does not resolve (§17.3) |
| Identity, dependency, provenance, authority, compatibility-assessment completeness | Addressed only through the specific fields this RFC already defines (§4, §6, §8, PMS-M-11); not independently re-derived as separate dimensions here |
| Materialization, operational completeness | Not addressed — outside this RFC's authorized reading and scope; ownership remains unresolved per the accepted coverage assessment (§17.5) |

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
| Validation result | Fail (`PMS-DC-029`, §12.3) |
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
| Validation result | Fail (`PMS-DC-030`, §12.3) |
| Evidence implication | Anchors PMS-M-11's compatibility declaration and PMS-M-14's rollback lineage to an unambiguous package/version pair |

## 11. Deterministic Ordering and Normalization Requirements

Because A.6 does not select archive format, serialization, or storage layout (A.6 §6), this RFC imposes ordering and normalization requirements only at the semantic level — what two semantically equivalent manifests must agree on — not at the syntactic (byte or key-order) level, which remains outside this RFC's scope (A.6 §17; concrete serialization order is downstream implementation).

| Rule ID | Requirement | Source Authority |
|:---|:---|:---|
| `PMS-N-01` | The Content Index (PMS-M-09) shall not contain two entries with the same (Constituent Reference identity, Constituent Role) pair. Enforced by `PMS-V-31` / `PMS-DC-031`. | This RFC, informed by STEP 4 §8.9 and the role-per-instance model of §7 (§2.1); M.2 Rule 4 (no collision within scope) |
| `PMS-N-02` | For deterministic comparison and diffing, a canonical manifest representation orders Content Index entries by Constituent Reference identity in ascending lexicographic order. This is a canonicalization rule for comparison purposes only; it does not constrain the serialized storage order a package format may use, and it is not independently fail-able by a single manifest instance. | M.2 §7.4 (canonical reference stability); M.9 §7.4 (validation scope must be recorded, not silently altered) |
| `PMS-N-03` | The Rollback Lineage (PMS-M-14) shall list predecessor versions in a single, continuous, non-branching order for this manifest's own declared lineage view; branching, if present in the underlying M.6 lineage, is represented by reference, not by flattening. Enforced together with lineage continuity by `PMS-V-15` / `PMS-DC-015` (§5, §12) — this is the same field target, not a separate rule. | M.6 §7.7 (lineage continuity); M.6 Invariant ("lineage is a directed acyclic graph; cycles are prohibited") |
| `PMS-N-04` | Alternative-set identifiers (§8.2) shall be unique within the manifest and shall not be reused across unrelated mutually-exclusive-alternative groups. Enforced by `PMS-V-32` / `PMS-DC-032`. | M.2 §7.6 (collision semantics, applied within manifest scope) |

## 12. Validation Rules and Deterministic Condition Codes

### 12.1 Validation Rule Anatomy

Every validation rule in this RFC carries the complete M.9 §7.5 Validation Rule anatomy: identity, authority, owner, domain, scope requirement, constraint, binding reference, exactly one severity, and lifecycle. Constraint (target) and severity are declared per rule in §12.2. The remaining seven properties are declared below as shared declarations, because each is genuinely identical across all 32 rules in §12.2:

- **Identity** — `PMS-V-xxx`, assigned in §12.2. A `PMS-V-xxx` identifier is a rule identity scoped to this RFC's own schema binding (Binding reference, below); it is not, and does not create, a new global M.2 identifier family — consistent with §4.1's and §4.2's deferral of any such allocation.
- **Authority** — A.6, consumed through this RFC (§1).
- **Owner** — the Framework Architecture Team, this RFC's declared Owner (Document Metadata). M.9 owner semantics require an accountable Actor (M.0 §5: "any entity that performs actions on artifacts or other semantic entities"); this RFC's own artifact identity is not treated as that actor.
- **Domain** — one of the M.9 §7.5 eight rule types. Every rule in §12.2 is classified as **Structural Rule** or **Semantic Rule** (this RFC defines no Authority, Relationship, Lifecycle, Evidence, Compatibility, or Extension rules of its own — those domains are consumed, not redefined, per M.9 §9).
- **Scope requirement** — Full (M.9 §7.4) for every rule: each rule is a member of the Full-scope rule set §18 requires for a conformance claim. A validator may still invoke an individual rule under Partial or Targeted scope for incremental, non-conformance-claiming checks (for example, while a manifest instance itself remains in Draft); doing so does not change the rule's own declared Full-scope membership, and a Partial- or Targeted-scope run does not itself support a conformance claim (M.9 §7.4, §7.8).
- **Binding reference** — every rule is bound to this RFC's own Schema Identity and Schema Version declared in §4.1: Schema Identifier `AI-DOS.V2.ARCH-RFC-006.1`, Schema Version `1.0.0-draft`, per M.9 §7.3's explicit-and-immutable Schema Version Binding. No rule binds to any other schema or version, and no rule's binding may be inferred as "latest."
- **Lifecycle** — Draft (M.4), identical to this RFC's own Document Metadata Status, for every rule. A rule's lifecycle advances only when this RFC's own lifecycle advances through Review/Approved/Canonical (§19); no individual rule is promoted ahead of this RFC.

Every rule declares **exactly one** severity — Mandatory or Advisory (M.9 §7.5) — and checks exactly one target (a single field, or, for two explicitly-marked composite rules, a single constituent's declared mode/category against that mode/category's own companion-field obligation), recorded per rule in §12.2. No rule in §12.2 mixes severities or bundles independent targets. `PMS-V-19` and `PMS-V-27` are the two composite rules: each produces exactly one assertion and one result per constituent, consistent with M.9 Invariant 1, and each result's evidence names the specific companion-field obligation left unmet.

A **Deterministic Condition Code** (`PMS-DC-xxx`, §12.3) is not itself an M.9 Validation Result. It is a stable, reusable defect classification that this RFC pre-declares so that independent validator implementations converge on the same code for the same underlying defect. An actual M.9 Validation Result — carrying its own identity, type, target identity, rule identity, declared scope, schema binding reference, assertion timestamp, evidence, rule severity, and assertion authority (M.9 §7.6) — is produced per assertion at validation time by whichever validator executes the check; minting that per-assertion identity is below the Machine-Readiness Boundary (M.9 §7.10) and is not performed by this RFC. A conformant non-pass Result's evidence shall cite the applicable `PMS-DC-xxx` code; the Result retains its own separate identity regardless of which code it cites.

### 12.2 Validation Rule Registry

| Rule ID | Domain | Target | Checks | Severity |
|:---|:---|:---|:---|:---|
| `PMS-V-01` | Structural | `PMS-M-01` | Manifest Identity present, well-formed, and unique (§4.2) | Mandatory |
| `PMS-V-02` | Structural | `PMS-M-02` | Schema-Version Reference present, immutable, resolvable (§4.3) | Mandatory |
| `PMS-V-03` | Structural | `PMS-M-03` | Product identifier present and resolvable (§5) | Mandatory |
| `PMS-V-04` | Structural | `PMS-M-04` | Package identifier present and distinct from `PMS-M-01`/`PMS-M-03` (§5) | Mandatory |
| `PMS-V-05` | Structural | `PMS-M-05` | Product version present and well-formed (§5) | Mandatory |
| `PMS-V-06` | Structural | `PMS-M-06` | Release channel present and a declared value (§5) | Mandatory |
| `PMS-V-07` | Structural | `PMS-M-07` | Release date present and well-formed (§5) | Mandatory |
| `PMS-V-08` | Structural | `PMS-M-08` | Governance/certification posture field present (§5) | Mandatory |
| `PMS-V-09` | Semantic | `PMS-M-08` | Asserted status verifiable from bound evidence (§5) | Advisory |
| `PMS-V-10` | Structural | `PMS-M-09` | Content Index present and non-empty (§5) | Mandatory |
| `PMS-V-11` | Structural | `PMS-M-10` | Integrity/provenance-reference field present (§5) | Mandatory |
| `PMS-V-12` | Semantic | `PMS-M-11` | Compatibility declaration present and M.5-evidence-bound (§5) | Mandatory |
| `PMS-V-13` | Structural | `PMS-M-12` | Breaking-change/deprecation status present and a valid category (§5) | Mandatory |
| `PMS-V-14` | Structural | `PMS-M-13` | Minimum-consumer-expectations field present and entries well-formed (§5) | Mandatory |
| `PMS-V-15` | Semantic | `PMS-M-14` | Rollback lineage present, continuous, and a single non-branching view (§5, §11) | Mandatory |
| `PMS-V-16` | Semantic | `PMS-M-15` | Uninstall-boundary field present and every listed reference also present in `PMS-M-09` (§5) | Mandatory |
| `PMS-V-17` | Structural | `PMS-M-16` | Source-disclosure posture present and a declared value (§5) | Mandatory |
| `PMS-V-18` | Structural | `PMS-C-01` (per constituent) | Reference Mode present and a closed-set value (§6.1) | Mandatory |
| `PMS-V-19` | Semantic (composite) | `PMS-C-01` + companion field (per constituent) | Declared Reference Mode's companion-field obligation satisfied (§6.2) | Mandatory |
| `PMS-V-20` | Semantic | `PMS-C-02` (per constituent) | Transitive-closure disclosure present where applicable (§6.3) | Advisory |
| `PMS-V-21` | Semantic | Manifest-authoring rule (§6.4) | Constituent identity asserted by declared M.2 identity, never by byte comparison alone | Mandatory |
| `PMS-V-22` | Structural | `PMS-C-03` (per constituent) | Role present and a closed-set value (§7.1) | Mandatory |
| `PMS-V-23` | Structural | `PMS-C-01` + `PMS-C-03` (per constituent) | Role and Reference Mode declared as independent fields (§7.2) | Mandatory |
| `PMS-V-24` | Structural | `PMS-C-04` (per constituent) | AI-DOS-owned marker present (§7.3) | Mandatory |
| `PMS-V-25` | Semantic | `PMS-M-15` + `PMS-C-04` (cross-field) | Uninstall-boundary list equals the set of constituents marked AI-DOS-owned (§7.3) | Mandatory |
| `PMS-V-26` | Structural | `PMS-C-05` (per constituent) | Membership Category present and a closed-set value (§8.1) | Mandatory |
| `PMS-V-27` | Semantic (composite) | `PMS-C-05` + companion field (per constituent) | Declared Membership Category's companion-field obligation satisfied (§8.2) | Mandatory |
| `PMS-V-28` | Semantic | `PMS-C-01` + state selector (per constituent) | State-binding-implying Reference Mode has a state selector present (§9) | Mandatory |
| `PMS-V-29` | Semantic | `PMS-B-01` (per constituent) | Integrity/Provenance Reference complete when required (§10.1) | Mandatory |
| `PMS-V-30` | Structural | `PMS-B-02` | Package-level binding declares identity and version together (§10.2) | Mandatory |
| `PMS-V-31` | Structural | `PMS-M-09` (Content Index, whole) | No duplicate (reference identity, role) pairs (§11) | Mandatory |
| `PMS-V-32` | Structural | Alternative-set identifiers (Content Index, whole) | Alternative-set identifiers unique within manifest (§11) | Mandatory |

### 12.3 Deterministic Condition Codes

Each rule in §12.2 has exactly one associated Deterministic Condition Code, cited by an actual M.9 Validation Result's evidence when that rule's assertion is non-pass (§12.1).

| Code | Rule | Result Type | Deficiency |
|:---|:---|:---|:---|
| `PMS-DC-001` | `PMS-V-01` | Fail | Manifest identity absent, malformed, or not unique |
| `PMS-DC-002` | `PMS-V-02` | Fail | Schema-version reference absent, unresolvable, or non-immutable |
| `PMS-DC-003` | `PMS-V-03` | Fail | Product identifier absent or unresolvable |
| `PMS-DC-004` | `PMS-V-04` | Fail | Package identifier absent, equal to `PMS-M-01`, or equal to `PMS-M-03` |
| `PMS-DC-005` | `PMS-V-05` | Fail | Product version absent or malformed |
| `PMS-DC-006` | `PMS-V-06` | Fail | Release channel absent or not a declared value |
| `PMS-DC-007` | `PMS-V-07` | Fail | Release date absent or malformed |
| `PMS-DC-008` | `PMS-V-08` | Fail | Governance/certification posture field absent |
| `PMS-DC-009` | `PMS-V-09` | Warning | Asserted status not verifiable from bound evidence |
| `PMS-DC-010` | `PMS-V-10` | Fail | Content Index absent or empty, or a contained element malformed |
| `PMS-DC-011` | `PMS-V-11` | Fail | Integrity/provenance-reference field key absent (an empty list is not this condition) |
| `PMS-DC-012` | `PMS-V-12` | Fail | Compatibility declaration absent or not evidence-bound |
| `PMS-DC-013` | `PMS-V-13` | Fail | Breaking-change/deprecation status absent or not one of the four categories |
| `PMS-DC-014` | `PMS-V-14` | Fail | Minimum-consumer-expectations field key absent, or a present entry malformed |
| `PMS-DC-015` | `PMS-V-15` | Fail | Rollback lineage absent, discontinuous, or represented as a branching/flattened view |
| `PMS-DC-016` | `PMS-V-16` | Fail | Uninstall-boundary field key absent, or a listed reference not present in `PMS-M-09` |
| `PMS-DC-017` | `PMS-V-17` | Fail | Source-disclosure posture absent |
| `PMS-DC-018` | `PMS-V-18` | Fail | Reference Mode absent or not in the closed set |
| `PMS-DC-019` | `PMS-V-19` | Fail | Declared Reference Mode's required companion field absent (§6.2 table) |
| `PMS-DC-020` | `PMS-V-20` | Warning | Transitive-closure disclosure absent where the constituent has in-scope dependents |
| `PMS-DC-021` | `PMS-V-21` | Fail | Constituent identity asserted or compared by byte equality rather than declared M.2 identity |
| `PMS-DC-022` | `PMS-V-22` | Fail | Role absent or not in the declared vocabulary |
| `PMS-DC-023` | `PMS-V-23` | Fail | Role and Reference Mode collapsed into a single field |
| `PMS-DC-024` | `PMS-V-24` | Fail | AI-DOS-owned marker absent |
| `PMS-DC-025` | `PMS-V-25` | Fail | Uninstall-boundary list does not equal the set of constituents marked AI-DOS-owned |
| `PMS-DC-026` | `PMS-V-26` | Fail | Membership Category absent or not in the closed set |
| `PMS-DC-027` | `PMS-V-27` | Fail | Declared Membership Category's required companion field absent (§8.2 table) |
| `PMS-DC-028` | `PMS-V-28` | Fail | State-binding-implying Reference Mode declared without a state selector |
| `PMS-DC-029` | `PMS-V-29` | Fail | Integrity/Provenance Reference missing a required A.6 §9 verification element |
| `PMS-DC-030` | `PMS-V-30` | Fail | Package-level binding declares identity or version without the other |
| `PMS-DC-031` | `PMS-V-31` | Fail | Duplicate (reference identity, role) pair in Content Index |
| `PMS-DC-032` | `PMS-V-32` | Fail | Alternative-set identifier reused across unrelated groups |

Every Fail and Warning result carries mandatory evidence per M.9 §7.6: rule violated, deficiency (citing the applicable `PMS-DC-xxx` code), and expected state (or, for Warning, the concern and non-blocking rationale). A Waived Finding may only replace a Fail result under this registry when a governing authority records deficiency, waiving authority, rationale, and waiver scope, per M.9 §7.6's Waived Finding row and Validation Assertion VA-9.14 (M.9 §15); this RFC does not itself grant any standing waiver.

## 13. Compatibility and Extensibility Rules

### 13.1 Schema Version Evolution

Changes to this manifest schema follow M.6 §7.6's Schema Version Model:

| Change Class | Example | Schema Version Increment |
|:---|:---|:---|
| Breaking | Removing a required field (§5, §6, §7, §8, §10); removing a Reference Mode, Role, or Membership Category from a closed set; changing a field's type; splitting or merging a `PMS-V-xxx` rule in a way that changes its severity or target | MAJOR |
| Additive | Adding an optional field; adding a new Reference Mode, Role, or Membership Category value; extending an enumeration | MINOR |
| Corrective | Fixing a documentation error, an overly permissive constraint, or a rule/condition-code numbering defect that does not change severity or target | PATCH |

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
| Every Fail result's rule-violated/deficiency/expected-state content (§12.3) | `PMS-V-01`…`PMS-V-32` | Direct (validation execution trace) or Analytical |
| Every Warning result's concern/rationale/recommendation (§12.3) | `PMS-V-09`, `PMS-V-20` (the two Advisory-severity rules) | Direct or Analytical |
| Compatibility declaration (PMS-M-11) | M.7 §6 (hard dependency: compatibility claims require M.5 evidence, non-negotiable) | Per M.7's own evidence-type requirements; not redefined here |
| Integrity/provenance reference (PMS-B-01) | A.6 §9 | Provenance-chain evidence per M.5 §5 (Provenance); algorithm/tooling excluded |
| A Waived Finding replacing any `PMS-DC-xxx`-classified Fail (§12.3) | Waiving authority, rationale, waiver scope | Governance-sourced Evidence Item per M.5 §7.2 (Source Authority: governed) |

This RFC does not define an evidence storage format, collection mechanism, or validator implementation (M.5 §4; M.9 §4 — both explicitly out of scope for their owning Meta family, and therefore out of scope here).

## 15. Security and Integrity Considerations

1. A manifest's own claims (e.g., `checked-fixed` at §6.3, or an Integrity/Provenance Reference at §10.1) are assertions, not proof. This RFC's design position, informed by non-normative STEP 4 §8.9 research (§2.1): a generated constituent is never validated merely because its generator is trusted, and this RFC does not create an exception.
2. Per A.6 §9, missing, mismatched, revoked, expired, ambiguous, or unverifiable integrity data requires safe stop; this RFC's `PMS-DC-019` and `PMS-DC-029` Fail conditions are the manifest-schema-level trigger for that safe-stop condition, not a replacement for it.
3. This RFC does not select a hash algorithm, signature scheme, key-management system, certificate infrastructure, or transparency log (A.6 §9); any such selection remains a future, separately authorized specification (A.6 §18, "Signing and Provenance RFC").
4. A manifest shall not declare Target-owned secrets, credentials, or private governance evidence in any field defined by this RFC (A.6 §6's package-contents exclusion list applies unchanged to every field in §5–§10).
5. A false provenance claim on a byte-correct constituent — a scenario this RFC's design position was informed by non-normative STEP 4 §8.12 (stress tests 2 and 14) research (§2.1) — is a provenance-dimension defect distinct from a structural/content defect; this RFC's `PMS-DC-029` addresses the completeness of the provenance reference, not the truth of the claim it carries — verifying the claim's truth is downstream of this RFC (A.6 §9's own conformance responsibility).

## 16. Explicit Non-Goals and Ownership Exclusions

This RFC does not:

- classify Release under M.0 or M.1;
- select an M.3 root relationship mapping for the composition relation (the "constituent reference," "constituent role," and "constituent membership" constructs defined in §6–§8 are manifest-schema-syntax-level constructs scoped to this RFC's own territory; they do not create, name, or allocate a new M.3 root relationship type, and they do not resolve the RC-01/RC-02 gap identified in `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Reconciliation-Assessment-STEP-1-6-vs-M.4-M.7.md`);
- create an M.6 Release Scope level;
- amend M.2, M.6, M.7, M.9, or any other Meta-Model, and does not request or imply such an amendment (§4.1, §4.2 explicitly defer the identifier-family question this would otherwise require);
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
- resolve CMP-09's "select constituents" or "assemble" authority-role placement (both remain open per the accepted coverage assessment);
- treat STEP 1–6 or STEP 4 as normative authority for any provision in this RFC (§2.1) — every closed set, vocabulary, and stress-test-informed rule above is this RFC's own Draft design proposal.

## 17. Unresolved Semantic Ownership (Marked, Not Resolved)

The following are explicitly marked as unresolved by this RFC, consistent with the accepted STEP-4-vs-A.6 coverage assessment's own conclusion (Outcome D):

1. Whether Release is an M.0/M.1-classified entity, and under what M.3 relationship mapping composition is expressed generally (CMP-01, CMP-07; RC-01, RC-02).
2. Whether optionality/conditionality of a constituent (§8.3) changes Release identity in any given case.
3. Whether a manifest may ever be accepted with a `deferred-unresolved` membership entry (§8.2).
4. "Authorize operational reliance" and "observe deployment/use" authority placement (CMP-09) — not addressed by this RFC; no second concrete candidate was identified for either in the accepted assessment.
5. CMP-03's "deployed" and broader "observed" composition stages, and CMP-08's operational-completeness dimension — not addressed by this RFC.
6. Allocation of a dedicated global M.2 identifier-family prefix for Release Manifest instances and for the manifest schema construct generally (§4.1, §4.2) — deferred pending a future, separately authorized M.2 amendment; this RFC does not perform or request that amendment.

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
- confirmation that every STEP 1–6/STEP 4-informed provision remains correctly attributed as a Draft design proposal (§2.1), not as inherited normative content;
- Framework Governance review;
- explicit Human Governance approval and promotion record.

This RFC does not claim Accepted, Approved, Active, or canonical status by its own text.

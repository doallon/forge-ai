# Target Evidence Record Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-EVIDENCE-RECORD` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Evidence Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` §§7.1–7.6, 8, 9, and 15 |
| Incorporated Contracts | `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Meta/M.2-Identity-Meta-Model.md`; `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md`; conditionally `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md` for transition evidence |
| Status | Draft; non-canonical |

Use one record for one M.5 Evidence Item. Repeat Claim Binding and per-binding Confidence rows when the item binds to multiple claims. Evidence chains, packages, and derivations require their additional M.5 root-type contracts; this template does not silently recast them as items.

## Produced Content

```markdown
# {{EVIDENCE_TITLE}}

## Governed Evidence Identity and Classification

| Field | Value |
|:---|:---|
| Identity | `{{EVIDENCE_IDENTIFIER}}` |
| Evidence Root Type | Evidence Item |
| Evidence Type | {{DIRECT_OR_CIRCUMSTANTIAL_OR_ANALYTICAL_OR_TESTIMONIAL_OR_HISTORICAL}} |
| Artifact Family | Evidence Artifact |
| Artifact Type | Evidence Record |
| Version | `{{EVIDENCE_VERSION}}` |
| Authority | {{GOVERNING_AUTHORITY}} |
| Authority Locator | `{{RESOLVABLE_AUTHORITY_LOCATOR}}` |
| Owner | {{ACCOUNTABLE_OWNER}} |
| Lifecycle State | {{DECLARED_LIFECYCLE_STATE}} |
| Lifecycle Profile | `{{RESOLVABLE_LIFECYCLE_PROFILE_LOCATOR}}` |
| Created | {{CREATION_TIMESTAMP}} |
| Last Assessed | {{LAST_ASSESSED_TIMESTAMP}} |

## Source

| Field | Value |
|:---|:---|
| Source Identity | `{{STABLE_SOURCE_IDENTITY}}` |
| Source Type | {{DIRECT_OBSERVATION_OR_AUTOMATED_EXECUTION_OR_HUMAN_JUDGMENT_OR_DOCUMENT_REFERENCE_OR_SYSTEM_RECORD_OR_EXTERNAL_SOURCE_OR_DERIVED_SOURCE}} |
| Source Authority | {{CONSTITUTIONAL_OR_CANONICAL_OR_GOVERNED_OR_OPERATIONAL_OR_EXTERNAL_OR_UNVERIFIED}} |
| Source Locator | `{{RESOLVABLE_SOURCE_LOCATOR}}` |

## Subject

| Field | Value |
|:---|:---|
| Subject Identity | `{{STABLE_SUBJECT_IDENTITY}}` |
| Subject Locator | `{{RESOLVABLE_SUBJECT_LOCATOR}}` |
| Subject Revision | `{{IMMUTABLE_SUBJECT_REVISION_OR_CONTENT_IDENTITY}}` |

## Claim Bindings

| Relationship Identity | Claim Identity | Claim Type | Exact Claim | Binding Relationship | Direction | Cardinality | Optionality | Assertion Class | Permitting Authority | Authority Locator | Confidence | Confidence Rationale |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| `{{RELATIONSHIP_IDENTIFIER}}` | `{{CLAIM_IDENTIFIER}}` | {{CONFORMANCE_OR_VALIDATION_OR_REVIEW_OR_CERTIFICATION_OR_RISK_OR_RECOMMENDATION_OR_DECISION_OR_COMPATIBILITY_OR_LIFECYCLE}} | {{EXACT_BOUNDED_CLAIM}} | {{SUPPORTS_OR_PARTIALLY_SUPPORTS_OR_CONTRADICTS_OR_IS_NEUTRAL_TOWARD}} | Unidirectional | N:M | Required | Normative | {{PERMITTING_AUTHORITY}} | `{{RESOLVABLE_AUTHORITY_LOCATOR}}` | {{VERY_HIGH_OR_HIGH_OR_MODERATE_OR_LOW_OR_VERY_LOW_WITH_NUMERIC_RANGE}} | {{PER_BINDING_RATIONALE_ACCOUNTING_FOR_LIMITATIONS_QUALITY_GAPS_AND_COUNTEREVIDENCE}} |

## Evidence Content

{{ACTUAL_EVIDENCE_MATERIAL_OR_RESOLVABLE_TRACEABLE_CONTENT_REFERENCE}}

## Evidence Assertion

{{DECLARATIVE_BOUNDED_ASSERTION_STATING_METHOD_SCOPE_AND_LIMITATIONS}}

## Quality Assessment

| Dimension | Rating | Justification |
|:---|:---|:---|
| Accuracy | {{HIGH_OR_MODERATE_OR_LOW_OR_UNASSESSED}} | {{JUSTIFICATION}} |
| Completeness | {{HIGH_OR_MODERATE_OR_LOW_OR_UNASSESSED}} | {{JUSTIFICATION}} |
| Consistency | {{HIGH_OR_MODERATE_OR_LOW_OR_UNASSESSED}} | {{JUSTIFICATION}} |
| Relevance | {{HIGH_OR_MODERATE_OR_LOW_OR_UNASSESSED}} | {{JUSTIFICATION}} |
| Source Authority | {{HIGH_OR_MODERATE_OR_LOW_OR_UNASSESSED}} | {{JUSTIFICATION}} |
| Provenance Transparency | {{HIGH_OR_MODERATE_OR_LOW_OR_UNASSESSED}} | {{JUSTIFICATION}} |

## Validity, Freshness, Reproducibility, and Retention

| Field | Value |
|:---|:---|
| Intended Use | {{SPECIFIC_BOUND_CLAIM_USE}} |
| Validity | {{VALID_OR_CONDITIONALLY_VALID_OR_PARTIALLY_VALID_OR_INVALID_OR_SUPERSEDED}} |
| Validity Criteria and Rationale | {{DEFINED_CRITERIA_AND_ASSESSMENT}} |
| Freshness Window | {{USE_CASE_DEFINED_WINDOW}} |
| Freshness | {{CURRENT_OR_APPROACHING_STALE_OR_STALE_OR_TIMELESS_OR_ARCHIVED}} |
| Freshness Rationale | {{RATIONALE_RELATIVE_TO_CREATION_LAST_ASSESSMENT_AND_USE}} |
| Reproducibility | {{FULLY_REPRODUCIBLE_OR_CONDITIONALLY_REPRODUCIBLE_OR_PARTIALLY_REPRODUCIBLE_OR_NOT_REPRODUCIBLE_OR_NOT_APPLICABLE}} |
| Reproduction Conditions | {{PROCEDURES_CONFIGURATIONS_INPUTS_OR_REQUIRED_ALTERNATIVE_VERIFICATION}} |
| Retention Class | {{PERMANENT_OR_LONG_TERM_OR_STANDARD_OR_SHORT_TERM_OR_TRANSIENT}} |
| Retention Basis | {{POLICY_AND_ACTIVE_PACKAGE_CONDITION}} |

## Provenance Chain

| Step | Input Identity and Locator | Transformation or Observation | Actor or Process | Timestamp | Governing Method or Rule | Output Identity |
|:---|:---|:---|:---|:---|:---|:---|
| 1 | `{{SOURCE_IDENTITY}}`; `{{SOURCE_LOCATOR}}` | {{STEP}} | {{ACTOR}} | {{TIMESTAMP}} | {{METHOD_OR_RULE}} | `{{EVIDENCE_IDENTIFIER}}` |

Corrections append a new provenance step; they never overwrite this chain. List every input evidence identity for derived evidence.

## Limitations, Counterevidence, and Sufficiency

| Field | Value |
|:---|:---|
| Limitations | {{KNOWN_LIMITATIONS_BIASES_GAPS_AND_CONSTRAINTS}} |
| Counterevidence / Contradictions | {{IDENTIFIED_COUNTEREVIDENCE_OR_NONE_FOUND_WITH_SEARCH_BOUNDARY}} |
| Claim Sufficiency | {{SUFFICIENT_OR_PARTIALLY_SUFFICIENT_OR_INSUFFICIENT}} |
| Sufficiency Rationale | {{COVERAGE_DEPTH_CONVERGENCE_COUNTEREVIDENCE_QUALITY_FRESHNESS_CONFIDENCE_AND_PROVENANCE_RATIONALE_PER_CLAIM}} |
| Uncertainty / Non-Pass Treatment | {{EFFECT_OF_UNCERTAINTY_INSUFFICIENCY_CONTRADICTION_INVALIDITY_OR_STALENESS_ON_THE_BOUND_CLAIM}} |

## Trace and Verification State

| Field | Value |
|:---|:---|
| Affected Artifacts | {{STABLE_IDENTITIES_AND_RESOLVABLE_LOCATORS}} |
| Affected Consumers | {{IDENTIFIED_CONSUMERS_OR_NONE}} |
| Verification State | {{VERIFIED_OR_PARTIALLY_VERIFIED_OR_NOT_VERIFIED_WITH_BASIS}} |
| Governing Evidence Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` |
| Incorporated Relationship Authority | `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md` |
| Conditional Lifecycle Authority | `{{M4_LOCATOR_OR_NOT_APPLICABLE_WITH_REASON}}` |

## Decision Effect

{{SEPARATE_AUTHORITY_EFFECT_OR_EXPLICITLY_NONE}}

Evidence informs and supports an authority; it does not itself approve, certify, promote, activate, accept, transition, or mutate a subject.
```

## Completion Check

- [ ] Identity is stable and is not inferred from the file path.
- [ ] Evidence Root Type, M.5 Evidence Type, Source Type, and Source Authority use exact M.5 classifications.
- [ ] Every claim has an exact subject and an explicit permitted binding relationship.
- [ ] Every claim binding carries its own bounded confidence and rationale.
- [ ] All six exact quality dimensions have justified ratings.
- [ ] Validity, creation and last-assessed timestamps, freshness, reproducibility, retention, provenance, limitations, and lifecycle state are complete.
- [ ] Derived evidence lists every input and transformation; provenance corrections append rather than overwrite.
- [ ] Sufficiency is assessed per claim, and uncertainty, insufficiency, contradiction, invalidity, or staleness cannot silently support a governed claim.
- [ ] Evidence and authority locators resolve; affected artifacts and consumers are traced.
- [ ] Decision effect does not exceed the separately recorded owning authority.

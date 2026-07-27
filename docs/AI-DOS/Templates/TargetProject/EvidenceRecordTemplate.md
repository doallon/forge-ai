# Target Evidence Record Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-EVIDENCE-RECORD` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Evidence Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` |
| Status | Draft; non-canonical |

## Produced Content

```markdown
# {{EVIDENCE_TITLE}}

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{EVIDENCE_IDENTIFIER}}` |
| Title | {{EVIDENCE_TITLE}} |
| Version | `{{EVIDENCE_VERSION}}` |
| Status | {{EVIDENCE_STATUS}} |
| Classification | Target Project Evidence |
| Document Type | Evidence Record |
| Artifact Family | Evidence Artifact |
| Artifact Type | {{EVIDENCE_TYPE}} |
| Owner | {{EVIDENCE_OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY_OR_NONE}} |
| Normative Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md`; {{TARGET_AUTHORITY}} |
| Scope | {{EVIDENCE_SCOPE}} |
| Out of Scope | {{EVIDENCE_OUT_OF_SCOPE}} |
| Traceability ID | `{{EVIDENCE_IDENTIFIER}}` |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |

## Claim Binding

| Field | Value |
|:---|:---|
| Claim ID | `{{CLAIM_IDENTIFIER}}` |
| Claim | {{CLAIM_TEXT}} |
| Subject identity | `{{SUBJECT_IDENTIFIER}}` |
| Subject locator | `{{SUBJECT_LOCATOR}}` |
| Subject revision | `{{SUBJECT_REVISION}}` |
| Evidence role | {{EVIDENCE_ROLE}} |

## Provenance

| Field | Value |
|:---|:---|
| Producer | {{PRODUCER}} |
| Method | {{METHOD}} |
| Source inputs | {{SOURCE_INPUTS}} |
| Collection time | {{COLLECTION_TIME}} |
| Environment or context | {{ENVIRONMENT_OR_CONTEXT}} |

## Evidence Content

{{EVIDENCE_CONTENT}}

## Quality and Limitations

| Dimension | Assessment | Basis |
|:---|:---|:---|
| Authenticity | {{AUTHENTICITY}} | {{AUTHENTICITY_BASIS}} |
| Integrity | {{INTEGRITY}} | {{INTEGRITY_BASIS}} |
| Relevance | {{RELEVANCE}} | {{RELEVANCE_BASIS}} |
| Sufficiency | {{SUFFICIENCY}} | {{SUFFICIENCY_BASIS}} |
| Freshness | {{FRESHNESS}} | {{FRESHNESS_BASIS}} |
| Confidence | {{CONFIDENCE}} | {{CONFIDENCE_BASIS}} |

## Relationships

| Relationship | Target identity | Locator |
|:---|:---|:---|
| {{RELATIONSHIP_TYPE}} | `{{RELATED_IDENTIFIER}}` | `{{RELATED_LOCATOR}}` |

## Decision Effect

{{DECISION_EFFECT_OR_NONE}}

Evidence supports a claim. It does not approve, certify, promote, activate, or mutate the subject unless an owning authority separately records that effect.
```

## Completion Check

- [ ] Claim, subject identity, locator, and revision are exact.
- [ ] Provenance and collection method are recorded.
- [ ] Quality dimensions and limitations are explicit.
- [ ] Decision effect does not exceed the evidence owner's authority.
- [ ] Historical evidence is preserved rather than overwritten.


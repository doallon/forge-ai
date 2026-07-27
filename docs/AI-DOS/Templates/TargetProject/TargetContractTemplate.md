# Target Contract and Declaration Profile Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-CONTRACT` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Resolver Contract | `docs/AI-DOS/System/TargetRepositoryResolution.md` |
| Status | Draft; non-canonical |

## Authoring Rules

The produced Target Contract is Target-owned. Its final `## AI-DOS Target Declaration Profile` region must:

- appear exactly once;
- be the last level-two section or end at the next level-two heading;
- contain exactly the five category headings and tables shown below;
- contain no prose, bullets, comments, front matter, or fenced blocks;
- use existing repository-relative paths;
- declare at least one root-covering `source-scope` row and one root-covering `protected-areas` row;
- include every requested action class needed by the Target.

## Produced Content

````markdown
# {{TARGET_NAME}} Target Contract

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{TARGET_CONTRACT_IDENTIFIER}}` |
| Title | {{TARGET_NAME}} Target Contract |
| Version | `{{TARGET_CONTRACT_VERSION}}` |
| Status | {{TARGET_CONTRACT_STATUS}} |
| Classification | Target Project Contract |
| Document Type | Governance Policy |
| Artifact Family | Target Project Artifact |
| Artifact Type | Target Declaration Profile |
| Owner | {{TARGET_OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Normative Authority | {{HUMAN_GOVERNANCE_AUTHORITY}}; `AI-DOS-STD-011` |
| Scope | Target identity, role declarations, operational entry, protected boundaries, validation, permissions, and execution authority |
| Out of Scope | AI-DOS product behavior, provider internals, Target purpose invention, current-state mutation, and automatic approval |
| Traceability ID | `{{TARGET_CONTRACT_IDENTIFIER}}` |
| Last Updated | {{LAST_UPDATED_DATE}} |

## Target Identity

| Field | Value |
|:---|:---|
| Target Project | {{TARGET_NAME}} |
| Target Identifier | `{{TARGET_IDENTIFIER}}` |
| Repository Boundary | `{{REPOSITORY_BOUNDARY}}` |
| Target Truth Root | `{{TARGET_TRUTH_ROOT}}` |
| Human Governance | {{HUMAN_GOVERNANCE_AUTHORITY}} |
| Target Standard Binding | `AI-DOS-STD-011` `{{STD_011_VERSION}}` |
| Conformance Profile Binding | `AI-DOS-STD-011-TARGET-PROJECT-CONFORMANCE-PROFILE` `{{CONFORMANCE_PROFILE_VERSION}}` |

## Operational Entry

`{{PROJECT_STATUS_LOCATOR}}`

The operational entry owns current Target state. This contract does not duplicate that state.

## Authority and Mutation Boundary

{{AUTHORITY_AND_MUTATION_BOUNDARY}}

## AI-DOS Target Declaration Profile

### target-resources
| resource_id | location | purpose | precedence |
| --- | --- | --- | --- |
| {{RESOURCE_ID}} | {{REPOSITORY_RELATIVE_LOCATION}} | {{RESOURCE_PURPOSE}} | {{PRECEDENCE_OR_EMPTY}} |

### source-scope
| scope_id | path | scope | precedence |
| --- | --- | --- | --- |
| {{SCOPE_ID}} | {{REPOSITORY_RELATIVE_PATH}} | {{IN_SCOPE_OR_OUT_OF_SCOPE}} | {{PRECEDENCE_OR_EMPTY}} |

### protected-areas
| area_id | path | protection | authorization_required | precedence |
| --- | --- | --- | --- | --- |
| {{AREA_ID}} | {{REPOSITORY_RELATIVE_PATH}} | {{PROTECTED_OR_UNRESTRICTED}} | {{TRUE_OR_FALSE}} | {{PRECEDENCE_OR_EMPTY}} |

### validation
| validation_id | requirement | locator | applies_to |
| --- | --- | --- | --- |
| {{VALIDATION_ID}} | {{VALIDATION_REQUIREMENT}} | {{LOCATOR_OR_EMPTY}} | {{ACTION_CLASS_TOKEN_OR_MARKDOWN_PATH_LINK}} |

### permissions-execution-authority
| authority_id | action_class | final_authority | proceed_without_confirmation | condition |
| --- | --- | --- | --- | --- |
| {{AUTHORITY_ID}} | {{ACTION_CLASS_TOKEN}} | {{FINAL_AUTHORITY}} | {{TRUE_OR_FALSE}} | {{CONDITION}} |
````

## Completion Check

- [ ] All required placeholders are resolved.
- [ ] The profile marker and five category headings are exact.
- [ ] Header and separator rows are exact.
- [ ] Every declared path exists and remains inside the repository.
- [ ] Source scope and protection rules cover `.` deterministically.
- [ ] Protected rows use `true`; unrestricted rows use `false`.
- [ ] Validation applicability covers every supported requested action class.
- [ ] Each action class has one non-conflicting authority tuple.
- [ ] Resolver-owned safe-stop behavior is not authored as a sixth category.


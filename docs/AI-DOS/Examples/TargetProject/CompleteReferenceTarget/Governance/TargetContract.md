# Northstar Notes Target Contract

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `NORTHSTAR-NOTES.TARGET-CONTRACT` |
| Title | Northstar Notes Target Contract |
| Version | `1.0.0-example` |
| Status | Accepted Example |
| Classification | Target Project Contract |
| Document Type | Governance Policy |
| Artifact Family | Target Project Artifact |
| Artifact Type | Target Declaration Profile |
| Owner | Northstar Human Governance |
| Maintainers | Northstar Product Steward |
| Review Authority | Northstar Product Review |
| Approval Authority | Northstar Human Governance |
| Normative Authority | Northstar Human Governance; `AI-DOS-STD-011` |
| Scope | Northstar identity, role declarations, operational entry, protected boundaries, validation, permissions, and execution authority |
| Out of Scope | AI-DOS product behavior, provider internals, Mission invention, current-state mutation, and automatic approval |
| Traceability ID | `NORTHSTAR-NOTES.TARGET-CONTRACT` |
| Last Updated | 2026-07-03 |

## Target Identity

| Field | Value |
|:---|:---|
| Target Project | Northstar Notes |
| Target Identifier | `NORTHSTAR-NOTES.TARGET` |
| Repository Boundary | `.` |
| Target Truth Root | `.` |
| Human Governance | Northstar Human Governance |
| Target Standard Binding | `AI-DOS-STD-011` `0.1.4-draft` |
| Conformance Profile Binding | `AI-DOS-STD-011-TARGET-PROJECT-CONFORMANCE-PROFILE` `0.1.2-draft` |

## Operational Entry

`Planning/ProjectStatus.md`

The operational entry owns current Target state. This contract does not duplicate that state.

## Authority and Mutation Boundary

Northstar Human Governance owns Mission, capability source decisions, Roadmap acceptance, protected-area exceptions, and final state-transition authority. AI-DOS may maintain Target-owned operational truth only through an explicitly authorized bounded action or a separately approved deterministic policy. No template, provider, repository event, or validation result grants mutation authority by itself.

## AI-DOS Target Declaration Profile

### target-resources
| resource_id | location | purpose | precedence |
| --- | --- | --- | --- |
| target-contract | Governance/TargetContract.md | Target declarations and authority boundary | 10 |
| mission | Mission/Mission.md | Target purpose and strategic authority | 10 |
| development-phases | Planning/DevelopmentPhases.md | Generation-grade capability decomposition | 10 |
| roadmap | Planning/Roadmap.md | Accepted deterministic planning projection | 10 |
| project-status | Planning/ProjectStatus.md | Current operational entry and state | 10 |
| evidence | Evidence | Claim support and governance records | 20 |
| work-units | WorkUnits | Bounded execution records | 20 |
| validation | Validation | Validation requirements and readiness evidence | 20 |
| source | Source | Replaceable implementation surface | 30 |

### source-scope
| scope_id | path | scope | precedence |
| --- | --- | --- | --- |
| repository-default | . | in-scope | 100 |
| governance-not-source | Governance | out-of-scope | 10 |
| mission-not-source | Mission | out-of-scope | 10 |
| planning-not-source | Planning | out-of-scope | 10 |
| evidence-not-source | Evidence | out-of-scope | 10 |
| work-records-not-source | WorkUnits | out-of-scope | 10 |
| validation-not-source | Validation | out-of-scope | 10 |
| implementation-source | Source | in-scope | 10 |

### protected-areas
| area_id | path | protection | authorization_required | precedence |
| --- | --- | --- | --- | --- |
| repository-default | . | unrestricted | false | 100 |
| target-contract-protected | Governance | protected | true | 10 |
| mission-protected | Mission | protected | true | 10 |
| planning-protected | Planning | protected | true | 10 |
| evidence-protected | Evidence | protected | true | 10 |
| work-records-protected | WorkUnits | protected | true | 10 |
| source-unrestricted | Source | unrestricted | false | 10 |
| validation-protected | Validation | protected | true | 10 |

### validation
| validation_id | requirement | locator | applies_to |
| --- | --- | --- | --- |
| documentation-integrity | Validate role identities, links, declaration syntax, and protected-boundary compliance | Validation/README.md | documentation-change |
| source-integrity | Validate deterministic fixtures, input immutability, and applicable capability acceptance criteria | Validation/README.md | source-change |
| state-integrity | Validate exact subject identity, current evidence, authority, and atomic transition record | Validation/README.md | state-transition |

### permissions-execution-authority
| authority_id | action_class | final_authority | proceed_without_confirmation | condition |
| --- | --- | --- | --- | --- |
| documentation-authority | documentation-change | Northstar Human Governance | false | Proceed only through an explicitly authorized bounded documentation work unit |
| source-authority | source-change | Northstar Human Governance | false | Proceed only through an explicitly authorized bounded source work unit |
| state-authority | state-transition | Northstar Human Governance | false | Proceed only with exact transition authority and current subject evidence |


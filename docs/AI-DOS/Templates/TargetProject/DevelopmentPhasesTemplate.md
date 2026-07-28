# Target DevelopmentPhases Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-DEVELOPMENT-PHASES` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Status | Draft; non-canonical |

## Produced Content

```markdown
# {{TARGET_NAME}} DevelopmentPhases

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{DEVELOPMENT_PHASES_IDENTIFIER}}` |
| Title | {{TARGET_NAME}} DevelopmentPhases |
| Version | `{{DEVELOPMENT_PHASES_VERSION}}` |
| Status | {{DEVELOPMENT_PHASES_STATUS}} |
| Classification | Target Project Capability Model |
| Document Type | DevelopmentPhases Artifact |
| Artifact Family | Target Project Artifact |
| Artifact Type | DevelopmentPhases |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Normative Authority | `{{MISSION_LOCATOR}}`; {{HUMAN_GOVERNANCE_AUTHORITY}} |
| Scope | {{SCOPE}} |
| Out of Scope | Current operational state, work activation, and repository-derived priorities |
| Traceability ID | `{{DEVELOPMENT_PHASES_IDENTIFIER}}` |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |

## Source Authority

| Source | Revision | Decision or evidence |
|:---|:---|:---|
| `{{MISSION_LOCATOR}}` | `{{MISSION_REVISION}}` | `{{MISSION_APPROVAL_EVIDENCE}}` |
| {{HUMAN_DECISION_SOURCE}} | {{SOURCE_REVISION}} | `{{SOURCE_DECISION_EVIDENCE}}` |

## Global Ordering Rules

1. Dependencies are resolved before priority.
2. Lower numeric priority executes first after dependencies.
3. Equal eligible priorities are ordered by stable capability ID.
4. Missing or conflicting dependency, evidence, gate, or priority data safe-stops derivation.

## Capability Register

| Sequence | Capability ID | Name | Dependencies | Priority | Lifecycle |
|:---|:---|:---|:---|:---|:---|
| {{SEQUENCE}} | `{{CAPABILITY_ID}}` | {{CAPABILITY_NAME}} | {{DEPENDENCIES}} | {{PRIORITY}} | {{CAPABILITY_LIFECYCLE}} |

## Capability `{{CAPABILITY_ID}}` — {{CAPABILITY_NAME}}

| Required field | Declaration |
|:---|:---|
| Stable capability identity | `{{CAPABILITY_ID}}` |
| Purpose and capability gain | {{PURPOSE_AND_CAPABILITY_GAIN}} |
| Dependencies and predecessor constraints | {{DEPENDENCIES_AND_PREDECESSORS}} |
| Reusable outcome | {{REUSABLE_OUTCOME}} |
| Required evidence identifiers and acceptance criteria | {{REQUIRED_EVIDENCE_AND_ACCEPTANCE}} |
| Governance gate and approval authority | {{GOVERNANCE_GATE_AND_AUTHORITY}} |
| Success criteria and exit criteria | {{SUCCESS_AND_EXIT_CRITERIA}} |
| Non-goals and protected future capabilities | {{NON_GOALS_AND_PROTECTED_FUTURE_CAPABILITIES}} |
| Validation expectations | {{VALIDATION_EXPECTATIONS}} |
| Compatibility and migration considerations | {{COMPATIBILITY_AND_MIGRATION}} |
| Ordering and tie-break rules | {{ORDERING_AND_TIE_BREAK}} |
| Safe-stop conditions | {{SAFE_STOP_CONDITIONS}} |

## Derivation Contract

Roadmap derivation must preserve capability identity, dependencies, evidence meanings, non-goals, protected future capabilities, governance gates, and ordering rules. The derivation must emit a separate evidence record and must not use ProjectStatus, repository activity, provider preference, or backlog proximity as source authority.

## Non-Goals

- This artifact does not declare the current capability.
- This artifact does not activate or execute work.
- This artifact does not accept a derived Roadmap.
```

Repeat the capability section once per capability.

## Completion Check

- [ ] Every capability contains all twelve STD-011 generation-grade fields.
- [ ] Dependencies and tie-breaks always produce one deterministic order or an explicit safe-stop.
- [ ] Mission and Human-decision source revisions resolve.
- [ ] No current state is used as strategic source truth.


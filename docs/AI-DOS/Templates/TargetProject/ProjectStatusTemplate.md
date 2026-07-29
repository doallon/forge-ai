# Target ProjectStatus Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-STATUS` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Status | Draft; non-canonical |

## Produced Content

```markdown
# {{TARGET_NAME}} ProjectStatus

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{PROJECT_STATUS_IDENTIFIER}}` |
| Title | {{TARGET_NAME}} ProjectStatus |
| Version | `{{PROJECT_STATUS_VERSION}}` |
| Status | Active |
| Classification | Target Project Operational State |
| Document Type | State Record |
| Artifact Family | Target Project Artifact |
| Artifact Type | ProjectStatus |
| Owner | {{TARGET_OWNER}} |
| Maintainers | AI-DOS under Target authority |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{STATE_TRANSITION_AUTHORITY}} |
| Normative Authority | `{{ROADMAP_LOCATOR}}`; `{{MISSION_LOCATOR}}`; {{HUMAN_GOVERNANCE_AUTHORITY}} |
| Scope | Current Target operational state and exactly one executable work unit or authorized next action |
| Out of Scope | Mission, capability, Roadmap, evidence-meaning, or priority invention |
| Traceability ID | `{{PROJECT_STATUS_IDENTIFIER}}` |
| Last Updated | {{LAST_UPDATED_DATE}} |

## Target and Role Bindings

| Role | Identity | Locator | Bound revision |
|:---|:---|:---|:---|
| Mission | `{{MISSION_IDENTIFIER}}` | `{{MISSION_LOCATOR}}` | `{{MISSION_REVISION}}` |
| DevelopmentPhases | `{{DEVELOPMENT_PHASES_IDENTIFIER}}` | `{{DEVELOPMENT_PHASES_LOCATOR}}` | `{{DEVELOPMENT_PHASES_REVISION}}` |
| Roadmap | `{{ROADMAP_IDENTIFIER}}` | `{{ROADMAP_LOCATOR}}` | `{{ROADMAP_REVISION}}` |
| Target Declaration Profile | `{{TARGET_CONTRACT_IDENTIFIER}}` | `{{TARGET_CONTRACT_LOCATOR}}` | `{{TARGET_CONTRACT_REVISION}}` |

## Current Operational Projection

| Field | Current Value |
|:---|:---|
| Operational Entry ID | `{{EXACTLY_ONE_OPERATIONAL_ENTRY_ID}}` |
| Lifecycle State | `{{SCAFFOLDED_INITIALIZATION_HOLD_ROADMAP_REVIEW_HOLD_OPERATIONAL_HOLD_ACTIVE_WORK_OR_APPROVAL_HOLD}}` |
| Current Phase/Capability ID | `{{ID_OR_NOT_APPLICABLE}}` |
| Controlling Objective ID | `{{EXACTLY_ONE_WHEN_REQUIRED_OR_NOT_APPLICABLE}}` |
| Active Work Unit ID | `{{ZERO_OR_ONE}}` |
| Pending Approval Subject ID | `{{ZERO_OR_ONE_MATCHING_SUBJECT}}` |
| Blocker ID/Reference | `{{ID_OR_NONE}}` |
| Exact Authorized Next Action | {{ONE_ACTION}} |

Only current facts, stable identities, states, and references belong here. Do not copy Mission, DevelopmentPhases, Roadmap, evidence meaning, or rationale. Contradiction or duplication safe-stops.

| Field | Value |
|:---|:---|
| Active capability or hold | {{ACTIVE_CAPABILITY_OR_HOLD}} |
| Controlling objective | {{CONTROLLING_OBJECTIVE}} |
| Roadmap source trace | `{{ROADMAP_SOURCE_TRACE}}` |
| Executable work unit | {{EXACTLY_ONE_WORK_UNIT_OR_NONE}} |
| Authorized next action | {{EXACTLY_ONE_NEXT_ACTION_OR_NONE}} |
| State-transition authority | {{STATE_TRANSITION_AUTHORITY}} |

Exactly one of `Executable work unit` and `Authorized next action` must identify one value; the other must be `None`.

## Evidence Status

| Evidence ID | Roadmap meaning | State | Evidence locator |
|:---|:---|:---|:---|
| `{{EVIDENCE_ID}}` | {{ROADMAP_MEANING}} | {{EVIDENCE_STATE}} | `{{EVIDENCE_LOCATOR_OR_NONE}}` |

## Protected Areas and Validation

| Concern | Source |
|:---|:---|
| Protected areas | `{{TARGET_CONTRACT_LOCATOR}}` |
| Source scope | `{{TARGET_CONTRACT_LOCATOR}}` |
| Validation requirements | `{{TARGET_CONTRACT_LOCATOR}}` |
| Permissions and execution authority | `{{TARGET_CONTRACT_LOCATOR}}` |

## Blockers and Risks

| ID | Type | Affected subject | Evidence | Required resolution |
|:---|:---|:---|:---|:---|
| {{BLOCKER_OR_RISK_ID}} | {{TYPE}} | {{AFFECTED_SUBJECT}} | `{{EVIDENCE_LOCATOR}}` | {{REQUIRED_RESOLUTION}} |

Use `None` as one explicit row when no blocker or risk exists.

## Last Update Evidence

| Field | Value |
|:---|:---|
| Transition record | `{{STATE_TRANSITION_RECORD_LOCATOR}}` |
| Previous state revision | `{{PREVIOUS_STATE_REVISION}}` |
| Current state revision | `{{CURRENT_STATE_REVISION}}` |
| Authorized by | {{TRANSITION_AUTHORITY_RECORD}} |

## State Rules

- `SCAFFOLDED → INITIALIZATION-HOLD` requires Human Governance or a pre-authorized bounded initializer; initialization records facts and never fabricates approval or Target truth.
- Distinguish incomplete-valid, invalid, contradictory, Roadmap-review, approval-hold, and operational outcomes.
- Maintain exactly one operational entry, at most one active work unit, at most one pending approval subject, and exactly one controlling objective when required.
- Apply identity-bound atomic transitions with prior/result state, subject, actor/authority, preconditions, evidence, and next action. Reject partial writes.
- Repository events, model/provider inference, convenience, and time do not independently transition state.

- Do not invent objectives or evidence identifiers.
- Do not fall through a blocked objective.
- Do not infer acceptance from repository, branch, pull request, or conversation state.
- Apply transitions atomically to one resolved subject.
- Safe-stop on missing, duplicate, stale, drifted, or conflicting subject identity.
```

## Completion Check

- [ ] Role bindings and revisions resolve.
- [ ] Current capability or hold traces to Roadmap.
- [ ] Exactly one work unit or next action is present.
- [ ] Every evidence ID exists in Roadmap.
- [ ] Protections and validation resolve through the Target Contract.
- [ ] Last-update evidence names subject and revisions.

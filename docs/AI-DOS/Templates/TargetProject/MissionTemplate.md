# Target Mission Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-MISSION` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Status | Draft; non-canonical |

Mission content must be Human-authored or Human-Governance-approved. Template completion does not grant approval.

## Produced Content

```markdown
# {{TARGET_NAME}} Mission

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{MISSION_IDENTIFIER}}` |
| Title | {{TARGET_NAME}} Mission |
| Version | `{{MISSION_VERSION}}` |
| Status | {{MISSION_STATUS}} |
| Classification | Target Project Mission |
| Document Type | Mission Artifact |
| Artifact Family | Target Project Artifact |
| Artifact Type | Mission |
| Owner | {{MISSION_OWNER}} |
| Maintainers | {{MISSION_MAINTAINERS}} |
| Review Authority | {{MISSION_REVIEW_AUTHORITY}} |
| Approval Authority | {{MISSION_APPROVAL_AUTHORITY}} |
| Normative Authority | {{HUMAN_GOVERNANCE_AUTHORITY}} |
| Scope | {{MISSION_SCOPE}} |
| Out of Scope | {{MISSION_OUT_OF_SCOPE}} |
| Traceability ID | `{{MISSION_IDENTIFIER}}` |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |

## Purpose

{{PURPOSE}}

## Target Identity and Users

{{TARGET_IDENTITY_AND_USERS}}

## In Scope

- {{IN_SCOPE_ITEM}}

## Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## Strategic Outcomes

| Outcome ID | Outcome | Success evidence |
|:---|:---|:---|
| {{OUTCOME_ID}} | {{OUTCOME}} | {{SUCCESS_EVIDENCE}} |

## Strategic Constraints

- {{STRATEGIC_CONSTRAINT}}

## Protected Principles

- {{PROTECTED_PRINCIPLE}}

## Governance and Approval

| Decision class | Final authority | Required evidence |
|:---|:---|:---|
| {{DECISION_CLASS}} | {{FINAL_AUTHORITY}} | {{REQUIRED_EVIDENCE}} |

## Permitted Customization Boundary

{{PERMITTED_CUSTOMIZATION_BOUNDARY}}

## Source Decisions and Approval Evidence

| Record | Locator | Effect |
|:---|:---|:---|
| {{SOURCE_DECISION_ID}} | `{{SOURCE_DECISION_LOCATOR}}` | {{SOURCE_DECISION_EFFECT}} |
| {{APPROVAL_EVIDENCE_ID}} | `{{APPROVAL_EVIDENCE_LOCATOR}}` | Mission approval |

## Non-Goals

- Mission does not declare current state or active work.
- Mission does not derive itself from repository contents, backlog, Roadmap, or ProjectStatus.
- Mission does not authorize lower artifacts to broaden its scope.
```

## Completion Check

- [ ] Purpose, identity, scope, non-goals, constraints, protected principles, approval authority, and customization boundary are explicit.
- [ ] Source decisions and approval evidence resolve.
- [ ] No current operational state or implementation-derived purpose appears.


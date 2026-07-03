# Agent Role Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Agent Role |
| Status | Draft / Active / Certified |
| Authority |  |
| Owner | AI Runtime Owner |
| Agent Role ID |  |
| Related Framework Version |  |

## Purpose

Define one governed agent role and its operating boundaries.

An agent role defines responsibilities, allowed work, forbidden work, required inputs, outputs, validation obligations, and escalation conditions.

## Role Summary

| Field | Value |
| --- | --- |
| Role Name |  |
| Role Type | Planner / Executor / Validator / Reviewer / Auditor / Coordinator / Documenter / Architect Assistant |
| Primary Owner |  |
| Runtime Context | Single Agent / Multi-Agent / Swarm |
| Human Oversight Required | Yes / No / Conditional |

## Responsibilities

- 

## Allowed Work

- 

## Forbidden Work

- Redefine architecture.
- Override ProjectStatus.
- Treat memory as authority.
- Modify source code without authorized scope.
- Skip validation, review, or certification.
- Expand scope beyond the active task.

## Required Inputs

| Input | Required | Source |
| --- | --- | --- |
| Authority model | Yes |  |
| Project status | Yes |  |
| Task scope | Yes |  |
| Command | Yes |  |
| Validation rules | Yes |  |
| Context packet | Conditional |  |

## Outputs

| Output | Required | Notes |
| --- | --- | --- |
| Execution artifact | Conditional |  |
| Validation evidence | Conditional |  |
| Completion report | Yes |  |
| Handoff report | Conditional |  |
| Memory candidate | Optional | Must be reviewed before use. |

## Escalation Conditions

- Authority conflict.
- Ownership ambiguity.
- Scope ambiguity.
- Validation failure.
- Review failure.
- ProjectStatus conflict.
- Human approval required.

## Validation Checklist

- [ ] Role has one owner.
- [ ] Responsibilities are bounded.
- [ ] Forbidden work is explicit.
- [ ] Inputs and outputs are defined.
- [ ] Escalation conditions are defined.

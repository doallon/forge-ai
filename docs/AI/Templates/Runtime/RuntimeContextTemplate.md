# Runtime Context Template

## Metadata

| Field | Value |
| --- | --- |
| Runtime Context ID |  |
| Runtime Actor | Agent / Automation / Swarm |
| Task Scope |  |
| Status | Draft / Active / Released |
| Authority |  |

## Purpose

Document the active runtime context used by an agent or coordinated execution unit.

## Runtime Actor

| Field | Value |
| --- | --- |
| Actor Type | Single Agent / Multi-Agent / Swarm / Automation |
| Actor Name |  |
| Role | Planner / Executor / Reviewer / Validator / Coordinator / Auditor |
| Owner |  |

## Runtime Inputs

- Authority
- Project state
- Knowledge
- Memory
- Task instruction
- Command
- Workflow
- Template
- Validation requirements

## Runtime Constraints

- Do not redefine architecture.
- Do not override ProjectStatus.
- Do not use memory as authority.
- Do not expand scope.
- Do not skip validation or review.

## Runtime Output

| Output | Required | Notes |
| --- | --- | --- |
| Execution artifact |  |  |
| Validation evidence |  |  |
| Completion report |  |  |
| Handoff report |  |  |
| Memory candidate |  |  |

## Release Conditions

Runtime context is released after completion, blocker, handoff, or scope change.

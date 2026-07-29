# Northstar Notes ProjectStatus

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `NORTHSTAR-NOTES.PROJECT-STATUS` |
| Title | Northstar Notes ProjectStatus |
| Version | `1.1.0-example` |
| Status | Active Example |
| Classification | Target Project Operational State |
| Document Type | State Record |
| Artifact Family | Target Project Artifact |
| Artifact Type | ProjectStatus |
| Owner | Northstar Human Governance |
| Maintainers | AI-DOS under Northstar authority |
| Review Authority | Northstar Product Review |
| Approval Authority | Northstar Human Governance |
| Normative Authority | `Planning/Roadmap.md`; `Mission/Mission.md`; Northstar Human Governance |
| Scope | Current Northstar operational state and exactly one executable work unit or authorized next action |
| Out of Scope | Mission, capability, Roadmap, evidence-meaning, or priority invention |
| Traceability ID | `NORTHSTAR-NOTES.PROJECT-STATUS` |
| Last Updated | 2026-07-05 |

## Target and Role Bindings

| Role | Identity | Locator | Bound revision |
|:---|:---|:---|:---|
| Mission | `NORTHSTAR-NOTES.MISSION` | `Mission/Mission.md` | `1.0.0-example` |
| DevelopmentPhases | `NORTHSTAR-NOTES.DEVELOPMENT-PHASES` | `Planning/DevelopmentPhases.md` | `1.0.0-example` |
| Roadmap | `NORTHSTAR-NOTES.ROADMAP` | `Planning/Roadmap.md` | `1.0.0-example` |
| Target Contract | `NORTHSTAR-NOTES.TARGET-CONTRACT` | `Governance/TargetContract.md` | `1.0.0-example` |
| Target Declaration Profile | `NORTHSTAR-NOTES.TARGET-DECLARATION-PROFILE` | `Governance/TargetContract.md#ai-dos-target-declaration-profile` | `1.0.0-example` |

## Current Operational Projection

| Corrected State Field | Current Value |
|:---|:---|
| Operational Entry ID | `NORTHSTAR-NOTES.PROJECT-STATUS` |
| Lifecycle State | `OPERATIONAL-HOLD` |
| Current Capability ID | `NS-CAP-002` |
| Controlling Objective ID | `NS-OBJ-001` |
| Active Work Unit ID | None |
| Pending Approval Subject ID | None |
| Blocker | None |
| Exact Next Action | Authorize at most one work unit for `NS-OBJ-001`, or remain on hold. |

These are current identities/references only; `NS-OBJ-001` resolves uniquely to `NS-CAP-002` and pending `NS-E2` in the Roadmap. Upstream meanings remain in their owners.

## Evidence Status

| Evidence ID | Roadmap meaning | State | Evidence locator |
|:---|:---|:---|:---|
| `NS-E1` | Deterministic read-only preview foundation | Accepted | `Evidence/EV-005-Foundation-Validation.md` |
| `NS-E2` | Confirmed, exact, reversible local application | Pending | None |

## Protected Areas and Validation

| Concern | Source |
|:---|:---|
| Protected areas | `Governance/TargetContract.md` |
| Source scope | `Governance/TargetContract.md` |
| Validation requirements | `Governance/TargetContract.md` |
| Permissions and execution authority | `Governance/TargetContract.md` |

## Blockers and Risks

| ID | Type | Affected subject | Evidence | Required resolution |
|:---|:---|:---|:---|:---|
| None | None | None | None | None |

## Last Update Evidence

| Field | Value |
|:---|:---|
| Transition record | `Evidence/EV-006-State-Transition.md` |
| Previous state revision | `1.0.0-example` |
| Current state revision | `1.1.0-example` |
| Authorized by | Northstar Human Governance decision `NS-HG-003` |

## State Rules

Exactly one operational entry, at most one active work unit, at most one pending approval subject, and exactly one controlling objective when required are permitted. Transitions are exact-subject, authority-bound, and atomic. Repository events and provider inference do not transition state.

- Do not invent objectives or evidence identifiers.
- Do not fall through a blocked objective.
- Do not infer acceptance from repository, branch, pull request, or conversation state.
- Apply transitions atomically to one resolved subject.
- Safe-stop on missing, duplicate, stale, drifted, or conflicting subject identity.

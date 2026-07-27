# Deterministic Preview Foundation Validation

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `NS-EV-005` |
| Version | `1.0.0-example` |
| Status | Accepted Evidence |
| Classification | Target Project Evidence |
| Document Type | Validation Record |
| Artifact Family | Evidence Artifact |
| Artifact Type | Capability Acceptance Evidence |
| Owner | Northstar Product Review |
| Review Authority | Northstar Product Review |
| Approval Authority | Northstar Human Governance |
| Scope | Validation of `NS-E1` against `WU-001-revision-1` |
| Out of Scope | `NS-E2`, product release, certification, or STD-011 conformance |
| Traceability ID | `NS-EV-005` |
| Last Updated | 2026-07-05 |

## Claim Binding

| Field | Value |
|:---|:---|
| Claim ID | `NS-E1` |
| Claim | Deterministic read-only preview foundation acceptance criteria are satisfied. |
| Subject identity | `NS-WU-001` |
| Subject locator | `WorkUnits/WU-001-Foundation-Validation.md` |
| Subject revision | `WU-001-revision-1` |

## Validation Observations

| Check | Method | Observed result |
|:---|:---|:---|
| Deterministic output | Compare manifests from two clean fixture runs | Identical |
| Input immutability | Compare input hashes before and after preview | Identical |
| Manifest completeness | Compare declared changes with fixture differences | Complete |
| Network isolation | Observe execution in network-disabled environment | No network access |

## Quality and Limitations

The fixture identities, commands, hashes, and raw outputs are represented here as a compact fictional example rather than executable attachments. The record demonstrates evidence shape, not real product validation.

## Decision Effect

Northstar Human Governance decision `NS-HG-003` accepts `NS-E1` for this example and authorizes the exact transition recorded in `Evidence/EV-006-State-Transition.md`. It does not accept `NS-E2` or certify the Target.


# Bounded Work Unit — NS-WU-001

## Work Unit Identity

| Field | Value |
|:---|:---|
| Identifier | `NS-WU-001` |
| Revision | `WU-001-revision-1` |
| Status | Completed and accepted example |
| Target | `NORTHSTAR-NOTES.TARGET` |
| Controlling objective | `NS-CAP-001` / `NS-E1` |
| Subject identity | `NS-WU-001` |
| Owner | Northstar Validation Steward |
| Activation authority | Northstar Human Governance decision `NS-HG-INIT-001` |
| Activation evidence | `Evidence/EV-004-ProjectStatus-Initialization.md` |

## Objective

Validate the deterministic, read-only preview contract against the four acceptance observations declared for `NS-E1`.

## Authorized Scope

- inspect the fictional preview fixtures;
- compare two clean-run manifests;
- compare input hashes before and after preview;
- inspect manifest completeness;
- observe operation with network disabled;
- produce `NS-EV-005`.

## Protected Boundaries

- no Mission, DevelopmentPhases, Roadmap, or Target Contract mutation;
- no note-content rewrite;
- no `NS-CAP-002` implementation;
- no product release, certification, or conformance claim.

## Validation and Evidence

| Requirement | Record |
|:---|:---|
| Deterministic output | `Evidence/EV-005-Foundation-Validation.md` |
| Input immutability | `Evidence/EV-005-Foundation-Validation.md` |
| Manifest completeness | `Evidence/EV-005-Foundation-Validation.md` |
| Network isolation | `Evidence/EV-005-Foundation-Validation.md` |

## Completion Condition

All four observations are recorded against this exact revision, no protected artifact changes, and the evidence is ready for separate Northstar Human Governance acceptance.

## Safe-Stop Conditions

- fixture or subject identity drift;
- input mutation;
- non-deterministic manifest;
- network access;
- requested scope expansion.

This record did not activate or accept itself.


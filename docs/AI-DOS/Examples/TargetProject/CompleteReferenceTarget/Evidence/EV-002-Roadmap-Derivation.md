# Roadmap Derivation Record — NS-EV-002

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `NS-EV-002` |
| Version | `1.0.0-example` |
| Status | Accepted Evidence |
| Classification | Target Project Evidence |
| Document Type | Evidence Record |
| Owner | Northstar Product Steward |
| Scope | Deterministic derivation of Roadmap `1.0.0-example` |
| Out of Scope | Roadmap acceptance or operational-state activation |
| Traceability ID | `NS-EV-002` |
| Last Updated | 2026-07-02 |

## Derivation Binding

| Field | Value |
|:---|:---|
| Source identity | `NORTHSTAR-NOTES.DEVELOPMENT-PHASES` |
| Source revision | `1.0.0-example` |
| Rule set | STD-011 §11 and DevelopmentPhases Global Ordering Rules |
| Output identity | `NORTHSTAR-NOTES.ROADMAP` |
| Output revision | `1.0.0-example` |
| Producer | Northstar Product Steward |
| Timestamp | 2026-07-02 |

## Selected Capability Units

| Source order | Capability ID | Dependencies satisfied | Output order | Evidence IDs preserved |
|:---|:---|:---|:---|:---|
| 1 | `NS-CAP-001` | Yes | 1 | `NS-E1` |
| 2 | `NS-CAP-002` | Yes, ordered after `NS-CAP-001` | 2 | `NS-E2` |

## Exclusions

| Capability ID | Governed exclusion reason | Source |
|:---|:---|:---|
| None | No accepted capability was excluded. | `Planning/DevelopmentPhases.md` |

## Warnings and Blockers

| Type | Condition | Required resolution |
|:---|:---|:---|
| None | No warning or blocker detected. | None |

## Determinism Confirmation

- Dependencies were applied before priority.
- Evidence meanings, non-goals, protected capabilities, and gates were preserved.
- ProjectStatus, repository activity, provider preference, and backlog proximity were not used.
- This record does not accept the output Roadmap.


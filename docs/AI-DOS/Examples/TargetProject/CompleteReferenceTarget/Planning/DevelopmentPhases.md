# Northstar Notes DevelopmentPhases

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `NORTHSTAR-NOTES.DEVELOPMENT-PHASES` |
| Title | Northstar Notes DevelopmentPhases |
| Version | `1.0.0-example` |
| Status | Accepted Example |
| Classification | Target Project Capability Model |
| Document Type | DevelopmentPhases Artifact |
| Artifact Family | Target Project Artifact |
| Artifact Type | DevelopmentPhases |
| Owner | Northstar Human Governance |
| Maintainers | Northstar Product Steward |
| Review Authority | Northstar Product Review |
| Approval Authority | Northstar Human Governance |
| Normative Authority | `Mission/Mission.md`; Northstar Human Governance |
| Scope | Capability decomposition for deterministic preview and confirmed local application |
| Out of Scope | Current operational state, work activation, and repository-derived priorities |
| Traceability ID | `NORTHSTAR-NOTES.DEVELOPMENT-PHASES` |
| Created | 2026-07-01 |
| Last Updated | 2026-07-01 |

## Source Authority

| Source | Revision | Decision or evidence |
|:---|:---|:---|
| `Mission/Mission.md` | `1.0.0-example` | `Evidence/EV-001-Governance-Source-Acceptance.md` |
| Northstar Human Governance source decision `NS-DEC-001` | `1` | `Evidence/EV-001-Governance-Source-Acceptance.md` |

## Global Ordering Rules

1. Dependencies are resolved before priority.
2. Lower numeric priority executes first after dependencies.
3. Equal eligible priorities are ordered lexicographically by stable capability ID.
4. Missing or conflicting dependency, evidence, gate, or priority data safe-stops derivation.

## Capability Register

| Sequence | Capability ID | Name | Dependencies | Priority | Lifecycle |
|:---|:---|:---|:---|:---|:---|
| 1 | `NS-CAP-001` | Deterministic Preview Foundation | None | 10 | Accepted capability definition |
| 2 | `NS-CAP-002` | Confirmed Local Application | `NS-CAP-001` | 20 | Accepted capability definition |

## Capability `NS-CAP-001` — Deterministic Preview Foundation

Entry requires accepted Mission and Contract identities. Required outcome/output is a deterministic offline preview declaration and evidence. Observable completion means identical input bytes produce the same proposal without user-note mutation. Success/exit require `NORTHSTAR-NOTES.EV-005`; Northstar Human Governance owns the gate. Stable IDs resolve all sources and protections.

| Required field | Declaration |
|:---|:---|
| Stable capability identity | `NS-CAP-001` |
| Purpose and capability gain | Produce the same read-only normalization preview for identical notes and configuration. |
| Dependencies and predecessor constraints | None. |
| Reusable outcome | Provider-neutral normalization rules, fixtures, preview contract, and validation evidence. |
| Required evidence identifiers and acceptance criteria | `NS-E1`: fixtures and preview rules yield identical outputs across two clean runs; network-isolation check passes. |
| Governance gate and approval authority | Capability completion requires Northstar Human Governance acceptance of `NS-E1`. |
| Success criteria and exit criteria | Preview identifies only declared formatting changes, leaves inputs untouched, and emits a complete change manifest. |
| Non-goals and protected future capabilities | No file writes, semantic rewriting, cloud sync, or confirmed-application behavior. `NS-CAP-002` remains protected. |
| Validation expectations | Golden-file comparison, input hash equality before and after preview, and network-isolation observation. |
| Compatibility and migration considerations | Fixture and preview-contract changes require explicit compatibility classification; no existing Target migration applies to this new example. |
| Ordering and tie-break rules | Priority 10; no predecessor; stable ID is the final tie-break. |
| Safe-stop conditions | Missing fixture identity, non-deterministic output, input mutation, network access, or unresolved approval authority. |

## Capability `NS-CAP-002` — Confirmed Local Application

Entry requires accepted `NS-CAP-001` evidence. Required outcome/output is explicitly confirmed local application without synchronization. Observable completion proves no write without confirmation. Northstar Human Governance owns success/exit acceptance; stable IDs resolve sources and protections.

| Required field | Declaration |
|:---|:---|
| Stable capability identity | `NS-CAP-002` |
| Purpose and capability gain | Apply exactly the reviewed preview after explicit confirmation and retain a reversible change record. |
| Dependencies and predecessor constraints | `NS-CAP-001` must have accepted `NS-E1`. |
| Reusable outcome | Confirmation contract, atomic write boundary, backup or rollback record, and application validation. |
| Required evidence identifiers and acceptance criteria | `NS-E2`: confirmed output matches preview exactly, unconfirmed run performs no write, and rollback restores fixture hashes. |
| Governance gate and approval authority | Capability completion requires Northstar Human Governance acceptance of `NS-E2`. |
| Success criteria and exit criteria | Writes occur only after confirmation, match preview byte-for-byte, and remain reversible under the declared rollback method. |
| Non-goals and protected future capabilities | No automatic batch approval, background watcher, cloud sync, or semantic rewriting. |
| Validation expectations | Confirmation-path tests, atomic-write failure test, preview-to-output comparison, rollback test, and change-manifest inspection. |
| Compatibility and migration considerations | Confirmation or rollback contract changes require compatibility assessment; user note formats are not silently migrated. |
| Ordering and tie-break rules | Priority 20 after `NS-CAP-001`; stable ID is the final tie-break. |
| Safe-stop conditions | `NS-E1` not accepted, preview identity drift, missing confirmation, incomplete rollback evidence, or ambiguous write authority. |

## Derivation Contract

Roadmap derivation preserves capability identities, dependencies, evidence meanings, non-goals, protected future capabilities, governance gates, and ordering rules. It emits separate evidence and never uses ProjectStatus, repository activity, provider preference, or backlog proximity as source authority.

## Non-Goals

- This artifact does not declare the current capability.
- This artifact does not activate or execute work.
- This artifact does not accept its derived Roadmap.

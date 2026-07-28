# Northstar Notes Roadmap

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `NORTHSTAR-NOTES.ROADMAP` |
| Title | Northstar Notes Roadmap |
| Version | `1.0.0-example` |
| Status | Accepted Example |
| Classification | Target Project Roadmap |
| Document Type | Roadmap Artifact |
| Artifact Family | Target Project Artifact |
| Artifact Type | Roadmap |
| Owner | Northstar Human Governance |
| Maintainers | Northstar Product Steward |
| Review Authority | Northstar Product Review |
| Approval Authority | Northstar Human Governance |
| Normative Authority | `Planning/DevelopmentPhases.md`; Northstar Human Governance |
| Scope | Ordered projection of Northstar capabilities, evidence, dependencies, and governance gates |
| Out of Scope | Current operational state, unapproved capability invention, and execution authorization |
| Traceability ID | `NORTHSTAR-NOTES.ROADMAP` |
| Created | 2026-07-02 |
| Last Updated | 2026-07-02 |

## Derivation Binding

| Field | Value |
|:---|:---|
| Source artifact | `Planning/DevelopmentPhases.md` |
| Source identity | `NORTHSTAR-NOTES.DEVELOPMENT-PHASES` |
| Source revision | `1.0.0-example` |
| Derivation rule set | STD-011 §11 plus DevelopmentPhases Global Ordering Rules |
| Derivation evidence | `Evidence/EV-002-Roadmap-Derivation.md` |
| Acceptance evidence | `Evidence/EV-003-Roadmap-Acceptance.md` |

## Ordered Capability Projection

| Order | Capability ID | Source trace | Dependencies | Required evidence | Governance gate |
|:---|:---|:---|:---|:---|:---|
| 1 | `NS-CAP-001` | `Planning/DevelopmentPhases.md#capability-ns-cap-001--deterministic-preview-foundation` | None | `NS-E1` | Northstar Human Governance acceptance |
| 2 | `NS-CAP-002` | `Planning/DevelopmentPhases.md#capability-ns-cap-002--confirmed-local-application` | `NS-CAP-001`; accepted `NS-E1` | `NS-E2` | Northstar Human Governance acceptance |

## Required Evidence Register

| Evidence ID | Meaning preserved from DevelopmentPhases | Acceptance criteria | Status source |
|:---|:---|:---|:---|
| `NS-E1` | Deterministic read-only preview foundation | Two identical clean runs, unchanged input hashes, complete manifest, and no network access | `Planning/ProjectStatus.md` |
| `NS-E2` | Confirmed, exact, reversible local application | No unconfirmed writes, output equals preview, atomic failure behavior, successful rollback, complete manifest | `Planning/ProjectStatus.md` |

## Boundaries

### Non-Goals

- cloud synchronization;
- semantic rewriting;
- automatic batch approval;
- capability activation by Roadmap position alone.

### Protected Future Capabilities

- `NS-CAP-002` cannot activate until `NS-E1` is accepted.
- Cloud or collaborative capability requires a separately approved Mission revision.

### Compatibility and Migration

Contract changes require explicit compatibility assessment. Existing user notes are inputs, not silently migrated Target artifacts.

## Regeneration Triggers

- accepted Mission revision change;
- accepted DevelopmentPhases revision change;
- accepted evidence or compatibility-rule change affecting projection;
- explicit Northstar Human Governance source decision.

Regeneration preserves accepted identifiers unless Northstar Human Governance approves supersession, replacement, or migration.

## Non-Goals

- Roadmap does not become operational state by itself.
- Roadmap does not select or activate a bounded work unit.
- Acceptance follows deterministic derivation and does not alter its inputs.


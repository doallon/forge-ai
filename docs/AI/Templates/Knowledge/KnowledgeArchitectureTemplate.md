# Knowledge Architecture Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Knowledge Architecture |
| Status | Draft / Active / Certified |
| Authority |  |
| Owner | Knowledge System Owner |
| Related Framework Version |  |
| Related Project |  |

## Purpose

Define the persistent knowledge architecture used by the project or framework.

Knowledge is documented, persistent, reviewable, traceable information. It may include constitutions, specifications, governance documents, phase documents, stage documents, capability records, commands, workflows, templates, checklists, validation evidence, audits, ADRs, RFCs, and certified decisions.

## Scope

### In Scope

- Knowledge categories
- Knowledge ownership
- Knowledge source hierarchy
- Knowledge refresh rules
- Knowledge validation requirements
- Knowledge consumption rules

### Out of Scope

- Temporary context
- Conversation memory
- Unreviewed implementation assumptions
- Runtime-only state

## Knowledge Categories

| Category | Description | Authority Source | Owner |
| --- | --- | --- | --- |
| Constitutional Knowledge | Permanent principles and authority hierarchy. |  |  |
| Governance Knowledge | Decision rules and quality gates. |  |  |
| Architecture Knowledge | Ownership, boundaries, dependencies, contracts. |  |  |
| Planning Knowledge | Phases, stages, capabilities, roadmap. |  |  |
| Execution Knowledge | Commands, workflows, templates, procedures. |  |  |
| Validation Knowledge | Validation rules, evidence, quality gates. |  |  |
| Historical Knowledge | Certified completed work and audit history. |  |  |
| Reference Knowledge | Read-only reference material. |  |  |

## Authority Rules

- Knowledge must be documented.
- Knowledge must resolve to an approved authority source.
- Knowledge must not be inferred from source code unless the governing architecture allows it.
- Knowledge must not be replaced by conversation.
- Knowledge must not be overridden by memory.

## Consumption Model

```text
Knowledge Source
    ↓
Knowledge Registry
    ↓
Context Assembly
    ↓
Runtime Execution
    ↓
Validation
    ↓
Memory Candidate
```

## Validation

- [ ] Knowledge sources are listed.
- [ ] Authority order is clear.
- [ ] Ownership is clear.
- [ ] Stale knowledge rules exist.
- [ ] Conflicts route to governance.
- [ ] Reference material is read-only.

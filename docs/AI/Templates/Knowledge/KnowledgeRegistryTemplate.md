# Knowledge Registry Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Knowledge Registry |
| Status | Draft / Active / Certified |
| Authority |  |
| Owner | Knowledge System Owner |
| Registry Scope |  |

## Purpose

Record the approved knowledge sources available to agents, automation, workflows, and future swarms.

## Registry

| ID | Knowledge Source | Path / Location | Type | Authority Level | Owner | Refresh Rule | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| K-001 |  |  | Constitution / Governance / Architecture / Planning / Execution / Validation / Historical / Reference |  |  |  |  |

## Source Types

```text
Constitution
Governance
Architecture
Planning
Command
Workflow
Template
Checklist
Validation
Audit
Certification
Historical Capability
Reference
External Standard
```

## Registry Rules

- Every source must have an owner.
- Every source must have an authority level.
- Every source must have a refresh or staleness rule.
- Reference material must be marked read-only.
- Unapproved notes must not be registered as authoritative knowledge.

## Conflict Handling

When two sources conflict:

```text
Resolve Authority
    ↓
Prefer Higher Authority
    ↓
Record Conflict
    ↓
Escalate if Unsafe
```

## Validation Checklist

- [ ] All sources have IDs.
- [ ] All sources have paths.
- [ ] Authority levels are defined.
- [ ] Owners are defined.
- [ ] Stale-source handling exists.
- [ ] Conflict rules are documented.

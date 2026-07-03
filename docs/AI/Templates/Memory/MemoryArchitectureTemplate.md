# Memory Architecture Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Memory Architecture |
| Status | Draft / Active / Certified |
| Authority |  |
| Owner | Memory System Owner |
| Related Knowledge Architecture |  |

## Purpose

Define how reusable learning is captured, reviewed, approved, stored, retrieved, and invalidated.

Memory is derived learning. It is not authority, not project state, not conversation history, and not a replacement for documentation.

## Memory Lifecycle

```text
Approved Work
    ↓
Memory Candidate
    ↓
Validation
    ↓
Review
    ↓
Approved Memory Record
    ↓
Memory Registry
    ↓
Future Context
    ↓
Invalidation When Stale
```

## Memory Types

| Type | Description | Authority Relationship |
| --- | --- | --- |
| Execution Memory | Lessons from completed execution. | Must cite completion evidence. |
| Validation Memory | Reusable validation observations. | Must cite validation record. |
| Review Memory | Review lessons and recurring risks. | Must cite review record. |
| Architecture Memory | Reusable architecture constraints. | Must cite architecture authority. |
| Agent Memory | Agent behavior lessons. | Must cite scenario or operational evidence. |
| Project Memory | Project-specific reusable facts. | Must cite ProjectStatus or approved documentation. |

## Memory Rules

- Memory must cite authority.
- Memory must be reviewable.
- Memory must be invalidatable.
- Memory must not override documentation.
- Memory must not create architecture.
- Memory must not update ProjectStatus.

## Invalidation Rules

Invalidate or mark stale when:

- authority changes;
- ProjectStatus changes;
- phase/stage/capability changes;
- governance changes;
- validation evidence contradicts memory;
- human instruction supersedes memory.

## Validation

- [ ] Memory lifecycle is documented.
- [ ] Memory types are defined.
- [ ] Approval rules exist.
- [ ] Invalidation rules exist.
- [ ] Authority precedence is preserved.

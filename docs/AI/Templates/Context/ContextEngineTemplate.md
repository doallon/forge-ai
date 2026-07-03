# Context Engine Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Context Engine Specification |
| Status | Draft / Active / Certified |
| Authority |  |
| Owner | Context System Owner |
| Related Runtime |  |

## Purpose

Define how task-specific context is assembled, bounded, refreshed, used, and released.

Context is temporary. It is not authority, not memory, and not project state.

## Context Lifecycle

```text
Task Request
    ↓
Authority Resolution
    ↓
Source-of-Truth Resolution
    ↓
Knowledge Loading
    ↓
State Loading
    ↓
Memory Candidate Loading
    ↓
Context Assembly
    ↓
Execution
    ↓
Validation
    ↓
Context Release
```

## Context Inputs

| Input | Required | Source | Notes |
| --- | --- | --- | --- |
| Human instruction | Yes | Active task | Must not conflict with governance. |
| AGENTS.md | Yes | Bootstrap authority |  |
| AI Framework | Yes | Framework entry |  |
| ProjectStatus | Yes | Live state |  |
| Phase / Stage / Capability | Conditional | Planning docs |  |
| Command / Workflow / Template | Yes | Execution docs |  |
| Validation docs | Yes | Validation layer |  |
| Memory | Optional | Approved memory registry | Must not override docs. |

## Context Boundaries

Context must be:

- current;
- scoped;
- traceable;
- minimal;
- sufficient;
- releasable after execution.

## Refresh Rules

Refresh context when:

- a new task begins;
- ProjectStatus changes;
- phase/stage/capability changes;
- validation or certification state changes;
- authority conflict is detected;
- memory is stale.

## Validation

- [ ] Required inputs are defined.
- [ ] Source-of-truth rules are preserved.
- [ ] Memory cannot override authority.
- [ ] Context release is defined.
- [ ] Refresh rules exist.

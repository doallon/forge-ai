# Memory Registry Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Memory Registry |
| Status | Draft / Active / Certified |
| Authority |  |
| Owner | Memory System Owner |
| Registry Scope |  |

## Purpose

Record approved memory items that may be used to improve future context assembly.

## Registry

| Memory ID | Type | Summary | Evidence Source | Authority Source | Status | Review Date | Invalidation Rule |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M-001 |  |  |  |  | Candidate / Approved / Stale / Deprecated |  |  |

## Status Model

```text
Candidate
    ↓
Approved
    ↓
Active
    ↓
Stale / Deprecated / Archived
```

## Rules

- Candidate memory is not authoritative.
- Approved memory may assist context assembly.
- Stale memory must not be used without refresh.
- Memory must cite evidence and authority.
- Memory must not contradict knowledge sources.

## Validation Checklist

- [ ] Every memory item has evidence.
- [ ] Every memory item has authority reference.
- [ ] Every memory item has invalidation rules.
- [ ] Stale memory is marked.
- [ ] Memory does not replace ProjectStatus.

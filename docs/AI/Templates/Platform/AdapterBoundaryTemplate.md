# Adapter Boundary Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Adapter Boundary |
| Status | Draft / Active / Certified |
| Authority |  |
| Adapter |  |
| Owner | Adapter System Owner |

## Purpose

Define the exact boundary between AI Framework Core, project template, platform adapter, and project implementation.

## Boundary Diagram

```text
Framework Core
    ↓ consumes
Project Template
    ↓ specializes
Platform Adapter
    ↓ applies
Project Implementation
```

## Core-Owned Responsibilities

| Responsibility | Source |
| --- | --- |
| Constitution |  |
| Governance |  |
| Planning Model |  |
| Validation Model |  |
| Certification Model |  |
| Runtime Invariants |  |

## Adapter-Owned Responsibilities

| Responsibility | Adapter Rule |
| --- | --- |
| Platform file layout |  |
| Platform validation commands |  |
| Platform lifecycle hooks |  |
| Platform integration conventions |  |
| Platform-specific quality gates |  |

## Project-Owned Responsibilities

| Responsibility | Project Rule |
| --- | --- |
| Product architecture |  |
| Source code |  |
| Project state |  |
| Product-specific phases |  |
| Product-specific quality gates |  |

## Forbidden Boundary Crossings

- Adapter redefining framework terminology.
- Platform APIs becoming domain truth by default.
- Project implementation modifying framework core.
- Reference code becoming runtime dependency.
- Tooling replacing governance.

## Validation

- [ ] Core ownership is preserved.
- [ ] Adapter ownership is explicit.
- [ ] Project ownership is explicit.
- [ ] Forbidden crossings are listed.
- [ ] Escalation path exists.

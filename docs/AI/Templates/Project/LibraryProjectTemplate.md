# Library Project Template

## Purpose

The Library Project Template extends the Generic Project Template for reusable packages, SDKs, shared libraries, and framework-independent modules.

A library should expose stable contracts without assuming a host application.


## Required Baseline Files

```text
AGENTS.md
.cursorrules
README.md
docs/
    ProjectStatus.md
    FrameworkGovernance.md
    AI/
    DevelopmentPhases/
    Architecture/
src/
tests/
_reference/
_wip/
```

## Required Baseline Rules

- `AGENTS.md` is project bootstrap authority.
- `docs/ProjectStatus.md` is the only live operational status document.
- `docs/AI/` contains framework adoption documents.
- Project-specific architecture belongs in `docs/Architecture/`, governance, phase, and stage documents.
- `_reference/` is read-only.
- `_wip/` is non-authoritative unless promoted into approved documentation.
- Implementation does not define architecture.
- Platform adapters consume the framework and never redefine it.

## Minimal Boot Sequence

```text
1. Read AGENTS.md.
2. Read .cursorrules when applicable.
3. Read docs/AI/README.md.
4. Read docs/AI/AIFramework.md.
5. Read docs/AI/Specification/Constitution.md.
6. Read docs/AI/AIOrchestrator.md.
7. Read docs/ProjectStatus.md.
8. Read relevant governance, phase, stage, command, workflow, validation, template, and checklist documents.
```


## Suggested Library Additions

```text
package manifest
src/
    Contracts/
    Domain/
    Application/
    Infrastructure/
tests/
docs/
    API/
    Architecture/
```

## Library Boundary Rule

The library should define public contracts clearly and avoid binding itself to a host framework unless that is its explicit purpose.

## Required Library Concerns

| Concern | Requirement |
| --- | --- |
| Public API | Documented and versioned. |
| Compatibility | Compatibility matrix required. |
| Breaking Changes | Migration guidance required. |
| Tests | Contract and regression tests required. |
| Examples | Must not become hidden architecture. |

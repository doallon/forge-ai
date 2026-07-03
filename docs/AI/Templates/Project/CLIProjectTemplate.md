# CLI Project Template

## Purpose

The CLI Project Template extends the Generic Project Template for command-line applications, automation tools, developer utilities, and local agents.

A CLI is an execution interface. It must not become architecture authority.


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


## Suggested CLI Additions

```text
package.json / composer.json / pyproject.toml / equivalent
src/
    core/
    domain/
    application/
    commands/
    infrastructure/
tests/
```

## CLI Boundary Rule

CLI commands parse user intent and call application services. They should not own domain rules, planning truth, validation authority, or project state.

## Recommended Responsibility Map

| Area | Responsibility |
| --- | --- |
| `src/commands/` | CLI transport and command parsing. |
| `src/application/` | Use cases and command handlers. |
| `src/domain/` | Core domain rules. |
| `src/infrastructure/` | Filesystem, process execution, external tools. |

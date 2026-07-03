# Symfony Project Template

## Purpose

The Symfony Project Template extends the Generic Project Template for Symfony applications, bundles, backend services, and component-based PHP systems.

Symfony is a host framework and adapter surface. It must not redefine AI Framework authority or domain ownership.


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


## Suggested Symfony Additions

```text
composer.json
bin/
config/
public/
src/
    Domain/
    Application/
    Infrastructure/
    Controller/
    Kernel.php
tests/
```

## Symfony Boundary Rule

Symfony controllers, bundles, service definitions, events, messages, console commands, config files, and Doctrine mappings are adapter or infrastructure mechanisms unless project governance explicitly assigns deeper ownership.

Domain should remain independent of Symfony HTTP, console, persistence, and service-container concerns.

## Recommended Responsibility Map

| Area | Responsibility |
| --- | --- |
| `src/Domain/` | Domain truth and contracts. |
| `src/Application/` | Use cases and orchestration. |
| `src/Infrastructure/` | Doctrine, filesystem, cache, messaging, integrations. |
| `src/Controller/` | HTTP transport. |
| `config/` | Framework wiring. |

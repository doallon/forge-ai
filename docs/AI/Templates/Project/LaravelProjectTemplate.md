# Laravel Project Template

## Purpose

The Laravel Project Template extends the Generic Project Template for Laravel applications, APIs, services, and packages.

Laravel is a host framework and adapter surface. It must not automatically become the source of domain truth.


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


## Suggested Laravel Additions

```text
composer.json
artisan
app/
    Domain/
    Application/
    Infrastructure/
    Http/
    Providers/
config/
database/
routes/
tests/
```

## Laravel Boundary Rule

Laravel service providers, controllers, Eloquent models, migrations, events, jobs, queues, middleware, policies, and config files are implementation mechanisms unless project governance assigns them explicit ownership.

Domain rules should remain independent of Laravel facades, HTTP transport, persistence implementation, and presentation concerns.

## Recommended Responsibility Map

| Area | Responsibility |
| --- | --- |
| `app/Domain/` | Domain truth, entities, value objects, policies, contracts. |
| `app/Application/` | Use cases, commands, queries, handlers, DTOs. |
| `app/Infrastructure/` | Eloquent adapters, queues, cache, external services. |
| `app/Http/` | Controllers, requests, resources, middleware. |
| `app/Providers/` | Laravel wiring only. |
| `routes/` | Transport routes, not domain rules. |

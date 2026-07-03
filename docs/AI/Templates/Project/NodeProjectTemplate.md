# Node Project Template

## Purpose

The Node Project Template extends the Generic Project Template for Node.js services, APIs, packages, workers, and tooling systems.

Node is a runtime host. It must not redefine the AI Framework or project architecture.


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


## Suggested Node Additions

```text
package.json
tsconfig.json
src/
    core/
    domain/
    application/
    api/
    infrastructure/
    presentation/
tests/
```

## Node Boundary Rule

Express/Fastify/Nest routes, package scripts, queues, workers, and adapters are implementation mechanisms. Domain and application contracts should remain independent of the runtime framework where practical.

## Recommended Responsibility Map

| Area | Responsibility |
| --- | --- |
| `src/core/` | Bootstrap, container, shared framework wiring. |
| `src/domain/` | Domain rules, value objects, contracts. |
| `src/application/` | Use cases and handlers. |
| `src/api/` | Transport routes/controllers. |
| `src/infrastructure/` | Persistence, queue, cache, external services. |

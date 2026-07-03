# React Project Template

## Purpose

The React Project Template extends the Generic Project Template for frontend applications, UI shells, design systems, and React packages.

React is a presentation/runtime adapter. It must not own domain truth unless the project is explicitly a UI-only product and governance defines that boundary.


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


## Suggested React Additions

```text
package.json
vite.config.ts / next.config.js / framework config
src/
    app/
    domain/
    application/
    infrastructure/
    presentation/
    components/
    styles/
tests/
```

## React Boundary Rule

Components, hooks, stores, routes, and UI state are presentation/application mechanisms. They must not silently become canonical business truth when domain or schema contracts exist elsewhere.

## Recommended Responsibility Map

| Area | Responsibility |
| --- | --- |
| `src/domain/` | UI-domain contracts and pure rules when applicable. |
| `src/application/` | Use cases, orchestration, state adapters. |
| `src/infrastructure/` | API clients, storage, analytics, integrations. |
| `src/presentation/` | Screens, layouts, components, visual composition. |
| `src/styles/` | Styling and design-system assets. |

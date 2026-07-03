# SaaS Project Template

## Purpose

The SaaS Project Template extends the Generic Project Template for hosted products with application, platform, operational, security, release, and integration concerns.

A SaaS product usually requires multiple adapters and stricter governance.


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


## Suggested SaaS Additions

```text
apps/
packages/
services/
infra/
docs/
    Architecture/
    Operations/
    Security/
    Releases/
tests/
```

## SaaS Boundary Rule

Product operations, deployment, infrastructure, analytics, billing, auth, and customer-facing surfaces are implementation and operations mechanisms. They must not redefine framework authority or bypass validation and certification.

## SaaS Responsibility Areas

| Area | Responsibility |
| --- | --- |
| Product Architecture | Domain, application, user-facing product design. |
| Platform Architecture | Infrastructure, deployment, observability, scaling. |
| Security | Threat model, permissions, secrets, compliance. |
| Operations | Incident response, runbooks, monitoring, release process. |
| Integrations | External APIs, billing, identity, messaging, analytics. |

## Required SaaS Documents

```text
docs/Architecture/SystemArchitecture.md
docs/Architecture/DomainArchitecture.md
docs/Operations/Runbook.md
docs/Security/SecurityModel.md
docs/Releases/ReleasePolicy.md
docs/Integrations/IntegrationRegistry.md
```

# Target Repository Resolution

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.TARGET-REPOSITORY-RESOLUTION` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | System Layer Component Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Parent Contract | `docs/AI/System/SystemLayer.md` |
| Scope | Identification and validation of the invoked Target Repository boundary. |
| Inputs | Provider Invocation Contract; Invocation Context; supplied Target identity and repository declarations. |
| Outputs | Target Repository Resolution Result; resolved Target identity; resource references; blockers. |

## 1. Purpose

Target Repository Resolution identifies the Target Project selected by the invocation, validates that the supplied repository boundary is coherent, and produces the resolution result consumed by Boot Sequence.

It does not load the complete execution context, rank authorities, select work, authorize mutation, or infer Forge AI paths.

## 2. Responsibilities

This component shall:

1. identify the invoked Target Repository from explicit invocation evidence;
2. resolve the Target provider contract and declared Target resources;
3. validate repository existence, identity, accessibility, and declaration coherence;
4. preserve Target-owned paths and truth without importing them into AI-DOS product truth;
5. return either one unambiguous resolution result or a blocker.

## 3. Non-Ownership

This component does not own:

- Target mission, ProjectStatus, DevelopmentPhases, Roadmap, source, or live state;
- AI-DOS architecture, governance, Runtime, Engines, or Distribution;
- context assembly, authority precedence, decision selection, or execution;
- provider authorization or release authority.

## 4. Resolution Result

A successful result contains only:

- resolved Target Repository identity;
- resolved provider and Target contract references;
- applicable Target resource references;
- explicit repository boundary;
- declaration-validation evidence;
- unresolved warnings that do not invalidate identity.

The result is not Resolved Target Context by itself. Boot Sequence and Context Assembly consume it to prepare invocation context.

## 5. Safe Stop

Stop when Target identity is absent, multiple repositories remain equally valid, declarations conflict, a required path is inaccessible, or resolution would require a Forge AI fallback assumption.

## 6. Handoff

```text
Provider Invocation Contract
    ↓
Invocation Context
    ↓
Target Repository Resolution Result
    ↓
BootSequence.md
```

## 7. Validation

- one Target Repository resolved;
- no Target planning methodology prescribed;
- no Target truth copied into AI-DOS product truth;
- no execution or mutation authority inferred;
- blocker emitted for ambiguity.
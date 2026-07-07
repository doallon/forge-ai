# Forge AI — Development Phases v3

> Forge AI v3 · Architecture Roadmap  
> Planning Model: Framework → Phase → Stage → Capability → Task

---

## 1. Status

| Property | Value |
|---|---|
| Document | Forge AI — Development Phases v3 |
| Document Type | Development Phase Index |
| Version | 3.0.0-draft |
| Status | Draft / v3 Planning Reference |
| Project | Forge AI |
| Architecture Generation | Forge AI v3 |
| Previous Generation | AI Framework RC2 |
| Authority | `AGENTS.md`, `docs/AI/Architecture/A.1-Constitution.md` after approval, `docs/ProjectStatus.md` for live operational state |
| Scope | Framework roadmap, phase index, stage direction, target repository structure |
| Non-Canonical Note | This document is a planning index. It does not promote architecture by itself. |
| ProjectStatus Rule | `docs/ProjectStatus.md` remains the live operational state source. |

---

## 2. Purpose

This document defines the architectural evolution roadmap for Forge AI v3.

Forge AI v3 is the target architecture generation for the Framework. RC2 remains an operational compatibility layer until approved v3 replacements exist.

This document exists to make roadmap tracking easier by aligning phases, stages, deliverables, and the target repository structure around the new v3 architecture.

---

## 3. v3 Mission

Forge AI v3 defines the canonical architecture for a governed, documentation-first, AI-assisted software engineering operating system.

The goal of v3 is not to implement every runtime feature.

The goal of v3 is to establish the architectural core required for future runtime, engine, agent, swarm, workflow, registry, validation, certification, and platform adapter work.

---

## 4. Planning Hierarchy

Forge AI uses the following planning hierarchy:

```text
Framework
    ↓
Phase
    ↓
Stage
    ↓
Capability
    ↓
Task
```

### 4.1 Definitions

| Level | Meaning |
|---|---|
| Framework | The full Forge AI architecture and governance system |
| Phase | Major architectural capability area |
| Stage | Logical milestone within a Phase |
| Capability | Approved delivery increment |
| Task | Executable work unit |

---

## 5. Current v3 Baseline

The following v3 foundation work has been completed or started:

| Area | Status |
|---|---|
| Architecture Consistency Audit | Completed |
| Authority Cleanup Plan | Completed |
| v3 Migration Strategy | Completed |
| v3 Authority Alignment | Completed |
| Transitional Authority Verification | PASS WITH OBSERVATIONS |
| ProjectStatus v3 Authority Alignment Milestone | Recorded |
| A.0 Framework Audit | Draft / Architecture baseline |
| A.1 Constitution | Draft / Target constitutional authority |
| Forge AI Blueprint RFC | Draft / Non-canonical planning input |
| M.0 Framework Meta Model | Draft / Target meta model |
| M.1 Artifact Meta Model | Draft / Target artifact model |
| STD-000 Framework Standards | Draft / Target standards governance |
| STD-001 Knowledge Graph Standard | Draft |
| STD-002 Discovery Standard | Draft |
| STD-003 Terminology Standard | Draft |
| A.3 Runtime Architecture RFC | Draft |
| A.4 Engine Architecture RFC | Planned |

---

## 6. Generation Strategy

Forge AI currently contains two generations:

```text
RC2 AI Framework
    ↓
Operational compatibility layer

Forge AI v3
    ↓
Target architecture generation
```

### 6.1 RC2 Role

RC2 remains temporarily valid for:

- operational boot;
- current commands;
- current workflows;
- current templates;
- current validation;
- current certification references;
- live task execution procedures.

RC2 does not own the target architecture.

### 6.2 v3 Role

v3 owns the future canonical architecture after approval.

v3 defines:

- constitutional authority;
- meta models;
- standards;
- knowledge graph;
- artifact model;
- runtime architecture;
- engine architecture;
- future workflow, registry, validation, certification, agent, swarm, and platform architecture.

---

## 7. Target v3 Authority Chain

The target v3 authority chain is:

```text
Human Governance
    ↓
AGENTS.md
    ↓
A.1 Constitution
    ↓
Ratified Forge AI Blueprint
    ↓
M.0 Framework Meta Model
    ↓
M.1 Artifact Meta Model
    ↓
STD-000 Framework Standards
    ↓
STD-001+ Standards Library
    ↓
Runtime Architecture
    ↓
Engine Architecture
    ↓
System / Command / Workflow / Template / Validation / Certification layers
    ↓
Generated Tasks
```

During transition, v3 documents remain target authority candidates until explicitly promoted.

---

## 8. Target Repository Structure

The target v3 documentation structure is:

```text
docs/
├── ProjectStatus.md
├── FrameworkGovernance.md
├── DevelopmentPhases/
│   ├── ForgeAI-DevelopmentPhases.md
│   ├── Phase-00-v3-Foundation.md
│   ├── Phase-01-Architecture-Core.md
│   ├── Phase-02-Meta-Model-System.md
│   ├── Phase-03-Standards-Library.md
│   ├── Phase-04-Knowledge-Graph.md
│   ├── Phase-05-Runtime-Architecture.md
│   ├── Phase-06-Engine-Architecture.md
│   ├── Phase-07-Workflow-System.md
│   ├── Phase-08-Registry-System.md
│   ├── Phase-09-Validation-Certification.md
│   ├── Phase-10-Agent-Runtime.md
│   ├── Phase-11-Multi-Agent-Swarm.md
│   ├── Phase-12-Platform-Adapters.md
│   └── Phase-13-Enterprise-Governance.md
│
└── AI/
    ├── README.md
    ├── AIFramework.md
    ├── AIOrchestrator.md
    ├── AgentSystemPrompt.md
    │
    ├── Architecture/
    │   ├── A.0-Framework-Audit.md
    │   ├── A.1-Constitution.md
    │   ├── Framework-Core-Map.md
    │   ├── Blueprint/
    │   ├── Appendix/
    │   ├── Reports/
    │   ├── Schemas/
    │   └── Standards/
    │
    ├── Meta/
    │   ├── M.0-Framework-Meta-Model.md
    │   └── M.1-Artifact-Meta-Model.md
    │
    ├── Runtime/
    │   ├── A.3-Runtime-Architecture-RFC.md
    │   ├── A.4-Engine-Architecture-RFC.md
    │   ├── Context-Engine-RFC.md
    │   ├── Planning-Engine-RFC.md
    │   ├── Knowledge-Engine-RFC.md
    │   ├── Validation-Engine-RFC.md
    │   ├── Review-Engine-RFC.md
    │   ├── Certification-Engine-RFC.md
    │   └── Memory-Engine-RFC.md
    │
    ├── System/
    ├── Commands/
    ├── Workflows/
    ├── Templates/
    ├── Validation/
    ├── Certification/
    ├── Lifecycle/
    ├── Testing/
    ├── Tooling/
    │
    └── Legacy/
        └── RC2/
            └── Specification/
```

### 8.1 Structure Rules

- `Architecture/` owns v3 architecture track.
- `Meta/` owns framework and artifact meta models.
- `Architecture/Standards/` owns standards library.
- `Runtime/` owns runtime and engine architecture RFCs.
- `System/`, `Commands/`, `Workflows/`, `Templates/`, `Validation/`, and `Certification/` remain operational until v3 replacements exist.
- `Legacy/RC2/` receives migrated RC2 material only after harvest and link remediation.

---

## 9. Phase Index

| Phase | Name | Status | Primary Purpose |
|---|---|---|---|
| 00 | v3 Foundation & Authority Alignment | Completed / Stabilizing | Establish v3 baseline, authority alignment, migration strategy |
| 01 | Architecture Core | Active / Planned | Constitution, Blueprint, framework core map, architectural identity |
| 02 | Meta Model System | Active / Planned | M.0, M.1, terminology, artifact model, concept ownership |
| 03 | Standards Library | Active / Planned | STD-000+, canonical standards governance and reusable standards |
| 04 | Knowledge Graph | Planned | Graph semantics, traversal, discovery-to-certification graph |
| 05 | Runtime Architecture | Active / Planned | Runtime kernel, lifecycle, context, memory, runtime boundaries |
| 06 | Engine Architecture | Planned | Engine model, engine responsibilities, engine communication |
| 07 | Workflow System | Planned | Workflow standards, execution lifecycle, workflow validation |
| 08 | Registry System | Planned | Artifact registry, standard registry, discovery/finding registries |
| 09 | Validation & Certification | Planned | Validation standard, review standard, certification standard |
| 10 | Agent Runtime | Planned | Agent lifecycle, agent roles, prompt/context execution |
| 11 | Multi-Agent & Swarm | Planned | Multi-agent coordination, swarm lifecycle, merge/review rules |
| 12 | Platform Adapters | Planned | Adapter boundaries, project templates, external integration contracts |
| 13 | Enterprise Governance | Planned | Audit, compliance, dashboards, enterprise readiness, lifecycle policies |

---

# 10. Phase 00 — v3 Foundation & Authority Alignment

## Status

Completed / Stabilizing.

## Purpose

Establish the safe transition from AI Framework RC2 to Forge AI v3.

## Completed Milestones

- Architecture Consistency Audit
- Authority Cleanup Plan
- v3 Migration Strategy
- v3 Authority Alignment Plan
- Transitional Authority Notices
- Transitional Authority Verification
- ProjectStatus milestone record
- RC2 Specification Legacy Migration Plan
- RC2 Specification Harvest Report

## Outputs

- `docs/AI/Architecture/Reports/Forge-AI-Architecture-Consistency-Audit-v1.0.md`
- `docs/AI/Architecture/Reports/Forge-AI-Authority-Cleanup-Plan-v1.0.md`
- `docs/AI/Architecture/Reports/Forge-AI-v3-Migration-Strategy.md`
- `docs/AI/Architecture/Reports/Forge-AI-v3-Authority-Alignment-Plan.md`
- `docs/AI/Architecture/Reports/Forge-AI-v3-Transitional-Authority-Verification.md`
- `docs/AI/Architecture/Reports/RC2-Specification-Legacy-Migration-Plan.md`
- `docs/AI/Architecture/Reports/RC2-Specification-Harvest-Report.md`

## Exit Criteria

- Authority conflict removed.
- RC2/v3 compatibility clarified.
- ProjectStatus records the milestone without promoting architecture.
- RC2 remains operational compatibility layer.
- v3 is recognized as target architecture.

---

# 11. Phase 01 — Architecture Core

## Status

Active / Planned.

## Purpose

Define the highest-level architecture of Forge AI v3.

## Owns

- v3 constitutional architecture;
- blueprint;
- framework identity;
- architectural principles;
- architecture reports;
- framework core map.

## Primary Documents

- `docs/AI/Architecture/A.0-Framework-Audit.md`
- `docs/AI/Architecture/A.1-Constitution.md`
- `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md`
- `docs/AI/Architecture/Framework-Core-Map.md`

## Planned Stages

| Stage | Name | Output |
|---|---|---|
| 01.01 | Constitution Promotion Review | A.1 readiness report |
| 01.02 | Blueprint Ratification Review | Blueprint ratification or revision |
| 01.03 | Framework Core Map Alignment | updated framework core map |
| 01.04 | Architecture Consistency Certification | architecture core certification evidence |

## Exit Criteria

- A.1 reviewed for promotion.
- Blueprint ratified, revised, or superseded.
- Framework Core Map aligns with v3 directory model.
- Architecture core has no unresolved authority conflict.

---

# 12. Phase 02 — Meta Model System

## Status

Active / Planned.

## Purpose

Define the canonical conceptual language of Forge AI v3.

## Owns

- framework concepts;
- artifact concepts;
- terminology;
- lifecycle vocabulary;
- ownership and relationship vocabulary;
- meta-model conformance rules.

## Primary Documents

- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`
- `docs/AI/Architecture/Schemas/STD-003-Terminology-Graph-Model.md`

## Planned Stages

| Stage | Name | Output |
|---|---|---|
| 02.01 | M.0 Readiness Review | M.0 promotion checklist |
| 02.02 | M.1 Completion Review | M.1 consolidation and readiness |
| 02.03 | Terminology Standard Review | STD-003 review and graph model validation |
| 02.04 | Concept Ownership Matrix | canonical owner map |

## Exit Criteria

- M.0 and M.1 do not duplicate each other.
- STD-003 defines shared vocabulary.
- Concept ownership matrix exists.
- Downstream standards consume the same terminology.

---

# 13. Phase 03 — Standards Library

## Status

Active / Planned.

## Purpose

Define and govern the reusable standards consumed by all Forge AI architecture, runtime, workflow, registry, and implementation layers.

## Owns

- standards governance;
- standards lifecycle;
- standards registry;
- standards compliance;
- artifact standards;
- standard graph/schema projections.

## Primary Documents

- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`
- `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`
- `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`

## Planned Standards

| Standard | Name | Purpose |
|---|---|---|
| STD-000 | Framework Standards | standards governance |
| STD-001 | Knowledge Graph | graph semantics |
| STD-002 | Discovery | architectural observation artifact |
| STD-003 | Terminology | canonical vocabulary |
| STD-004 | Finding | normalized conclusion artifact |
| STD-005 | Recommendation | proposed action artifact |
| STD-006 | Risk | risk artifact |
| STD-007 | Evidence | evidence artifact |
| STD-008 | Registry | registry/indexing standard |
| STD-009 | Workflow | workflow standard |
| STD-010 | Validation | validation standard |
| STD-011 | Certification | certification standard |

## Planned Stages

| Stage | Name | Output |
|---|---|---|
| 03.01 | Standards Library Audit | STD-000+ consistency report |
| 03.02 | Discovery Pipeline Completion | STD-004 through STD-007 |
| 03.03 | Registry & Workflow Standards | STD-008 and STD-009 |
| 03.04 | Validation & Certification Standards | STD-010 and STD-011 |
| 03.05 | Standards Certification Review | standards readiness evidence |

## Exit Criteria

- Core standards have consistent authority, lifecycle, metadata, and terminology.
- Discovery → Finding → Recommendation/Risk/Evidence pipeline exists.
- Registry and workflow standards exist.
- Validation and certification standards exist.

---

# 14. Phase 04 — Knowledge Graph

## Status

Planned.

## Purpose

Define graph-based reasoning and traceability across Forge AI.

## Owns

- graph topology;
- node and edge model;
- traversal rules;
- graph validation;
- discovery-to-certification flow;
- graph projections.

## Primary Documents

- `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`
- `docs/AI/Architecture/Schemas/STD-002-Discovery-Graph-Model.md`
- future graph models for Finding, Recommendation, Risk, Evidence, Registry, Workflow.

## Planned Stages

| Stage | Name | Output |
|---|---|---|
| 04.01 | Graph Model Consolidation | unified graph model map |
| 04.02 | Artifact Graph Pipeline | Discovery → Finding → Decision → Task → Certification topology |
| 04.03 | Graph Validation Rules | graph validation requirements |
| 04.04 | AI Traversal Rules | AI graph consumption rules |

## Exit Criteria

- Core graph topology is stable.
- Artifact graph models are aligned.
- Runtime and AI traversal rules are defined.
- No standard duplicates graph semantics.

---

# 15. Phase 05 — Runtime Architecture

## Status

Active / Planned.

## Purpose

Define how Forge AI executes governed work without implementing runtime code.

## Owns

- runtime kernel;
- runtime layers;
- agent lifecycle;
- context assembly;
- memory strategy;
- validation/review/certification handoff;
- runtime communication;
- runtime invariants.

## Primary Documents

- `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`

## Planned Documents

- `docs/AI/Runtime/A.3-Runtime-Architecture.md` after approval
- `docs/AI/Runtime/Context-Assembly-RFC.md`
- `docs/AI/Runtime/Memory-Architecture-RFC.md`
- `docs/AI/Runtime/Runtime-Communication-RFC.md`

## Planned Stages

| Stage | Name | Output |
|---|---|---|
| 05.01 | Runtime RFC Review | A.3 readiness report |
| 05.02 | Runtime Kernel Refinement | kernel responsibility matrix |
| 05.03 | Context & Memory Harvest | context/memory RFCs |
| 05.04 | Runtime Certification Handoff | runtime-to-governance handoff model |

## Exit Criteria

- Runtime architecture exists as governed RFC or approved architecture.
- Runtime consumes standards and does not redefine them.
- Runtime can explain how work moves from context to certification handoff.
- RC2 RuntimeModel harvest blocker is resolved or waived.

---

# 16. Phase 06 — Engine Architecture

## Status

Planned.

## Purpose

Define the internal engine model that makes Forge AI executable in architecture before implementation.

## Owns

- engine taxonomy;
- engine responsibility matrix;
- engine dependency graph;
- engine communication model;
- engine input/output contracts;
- engine lifecycle;
- engine prohibitions.

## Planned Documents

- `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`
- `docs/AI/Runtime/Context-Engine-RFC.md`
- `docs/AI/Runtime/Planning-Engine-RFC.md`
- `docs/AI/Runtime/Knowledge-Engine-RFC.md`
- `docs/AI/Runtime/Execution-Engine-RFC.md`
- `docs/AI/Runtime/Validation-Engine-RFC.md`
- `docs/AI/Runtime/Review-Engine-RFC.md`
- `docs/AI/Runtime/Certification-Engine-RFC.md`
- `docs/AI/Runtime/Memory-Engine-RFC.md`

## Required Engine Set

- Runtime Kernel
- Authority Engine
- State Engine
- Context Engine
- Knowledge Engine
- Planning Engine
- Execution Engine
- Validation Engine
- Review Engine
- Certification Engine
- Memory Engine
- Registry Engine
- Workflow Engine
- Agent Engine
- Swarm Engine
- Reporting Engine

## Planned Stages

| Stage | Name | Output |
|---|---|---|
| 06.01 | Engine Architecture RFC | A.4 RFC |
| 06.02 | Engine Responsibility Matrix | owner/consumer/producer matrix |
| 06.03 | Engine Graph Integration | engine graph interaction rules |
| 06.04 | Engine Certification Readiness | engine architecture review |

## Exit Criteria

- Every engine has responsibility, inputs, outputs, consumed authority, produced artifacts, and forbidden responsibilities.
- Engines do not self-certify.
- Engine communication is artifact/evidence based.
- Engine architecture is implementation-neutral.

---

# 17. Phase 07 — Workflow System

## Status

Planned.

## Purpose

Define governed workflow execution across planning, documentation, audit, implementation, validation, review, certification, and project state update.

## Owns

- workflow standard;
- workflow lifecycle;
- workflow state transitions;
- workflow inputs/outputs;
- workflow validation;
- workflow-to-command boundary;
- workflow-to-runtime boundary.

## Current Compatibility Sources

- `docs/AI/Workflows/TaskPlanner.md`
- `docs/AI/Workflows/TaskGenerationWorkflow.md`
- `docs/AI/Workflows/ProjectStateUpdater.md`
- `docs/AI/AIOrchestrator.md`

## Planned Documents

- `docs/AI/Architecture/Standards/STD-009-Workflow-Standard.md`
- `docs/AI/Workflows/v3-Workflow-Model.md`

## Exit Criteria

- Workflow standard exists.
- RC2 workflows are either migrated, bridged, or preserved as compatibility procedures.
- Workflow does not define architecture or authority.
- Workflow outputs are validated and review-ready.

---

# 18. Phase 08 — Registry System

## Status

Planned.

## Purpose

Define registry/indexing behavior for artifacts, standards, discoveries, findings, recommendations, risks, evidence, tasks, and certification records.

## Owns

- registry standard;
- registry record contract;
- registry sync rules;
- registry discovery/search model;
- registry non-authority rule;
- registry validation.

## Planned Documents

- `docs/AI/Architecture/Standards/STD-008-Registry-Standard.md`
- future registry graph model
- future registry schema

## Exit Criteria

- Registry is clearly an index, not source of truth.
- Registry records preserve artifact identity.
- Registry supports search, traceability, and governance audit.
- Registry can index Discovery/Finding/Recommendation/Risk/Evidence artifacts.

---

# 19. Phase 09 — Validation & Certification

## Status

Planned.

## Purpose

Define validation, review, certification, compliance, and evidence-driven readiness.

## Owns

- validation standard;
- review standard;
- certification standard;
- compliance levels;
- quality gates;
- certification records;
- readiness dashboards.

## Current Compatibility Sources

- `docs/AI/Validation/`
- `docs/AI/Certification/`
- `docs/AI/Checklists/AgentReviewChecklist.md`

## Planned Documents

- `docs/AI/Architecture/Standards/STD-010-Validation-Standard.md`
- `docs/AI/Architecture/Standards/STD-011-Certification-Standard.md`
- future Review Standard

## Exit Criteria

- Validation, review, and certification are distinct.
- AI cannot self-certify.
- ProjectStatus updates are gated.
- Certification records are traceable.

---

# 20. Phase 10 — Agent Runtime

## Status

Planned.

## Purpose

Define how individual AI agents participate in the Forge AI Runtime.

## Owns

- agent lifecycle;
- agent roles;
- agent authority boundaries;
- agent context consumption;
- agent output requirements;
- agent evidence production;
- agent non-self-certification rule.

## Current Compatibility Sources

- `docs/AI/AgentSystemPrompt.md`
- `docs/AI/Commands/`
- `docs/AI/System/`

## Planned Documents

- future Agent Runtime Standard
- future Agent Role Standard
- future Agent Output Contract Standard

## Exit Criteria

- Agent responsibilities are defined.
- Agent output contracts are standardized.
- Agents consume context and authority without redefining either.
- Agent runtime integrates with Engine Architecture.

---

# 21. Phase 11 — Multi-Agent & Swarm

## Status

Planned.

## Purpose

Define governed collaboration between multiple AI agents and swarm execution units.

## Owns

- multi-agent coordination;
- swarm decomposition;
- synchronization;
- merge rules;
- conflict resolution;
- swarm validation;
- swarm dissolution.

## Current Compatibility Sources

- `docs/AI/Templates/MultiAgent/`
- `docs/AI/Templates/Swarm/`
- `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`

## Planned Documents

- future Multi-Agent Coordination Standard
- future Swarm Runtime Standard
- future Swarm Validation Standard

## Exit Criteria

- Multi-agent work preserves ownership.
- Swarm work cannot create parallel authority.
- Swarm output is unified, validated, reviewed, and handed off for certification.
- Swarm dissolves after objective completion.

---

# 22. Phase 12 — Platform Adapters

## Status

Planned.

## Purpose

Define how external platforms consume Forge AI without redefining it.

## Owns

- adapter boundary standard;
- platform integration contracts;
- project template boundaries;
- external tool contracts;
- connector registry;
- implementation independence rules.

## Current Compatibility Sources

- `docs/AI/Templates/Project/`
- `docs/AI/Templates/Platform/`
- `docs/AI/Templates/Integration/`

## Planned Documents

- future Platform Adapter Standard
- future Project Template Standard
- future Integration Contract Standard

## Exit Criteria

- Platform adapters consume Forge AI.
- Platform adapters do not redefine authority, standards, or runtime.
- Project templates are scaffolding, not framework authority.
- Integration contracts are explicit and validated.

---

# 23. Phase 13 — Enterprise Governance

## Status

Planned.

## Purpose

Define enterprise governance, audit, compliance, release, support, deprecation, certification, and dashboard readiness.

## Owns

- enterprise governance;
- audit lifecycle;
- release governance;
- support policy;
- compatibility policy;
- deprecation policy;
- enterprise dashboards;
- readiness reporting.

## Current Compatibility Sources

- `docs/AI/Lifecycle/`
- `docs/FrameworkGovernance.md`
- `docs/AI/Certification/`

## Planned Documents

- future Enterprise Governance Standard
- future Audit Standard
- future Release Governance Standard
- future Readiness Dashboard Standard

## Exit Criteria

- Enterprise governance has explicit owner and lifecycle.
- Compliance evidence is traceable.
- Release/support/deprecation policies align with v3.
- Enterprise dashboards consume registries and certification records.

---

# 24. Immediate Roadmap

## 24.1 Current Priority

The immediate priority is:

```text
Phase 06 — Engine Architecture
    ↓
Stage 06.01 — Engine Architecture RFC
```

## 24.2 Recommended Next Work

1. Create `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`.
2. Review STD-003 Terminology usage against A.3 Runtime.
3. Continue Discovery pipeline with Finding / Recommendation / Risk / Evidence after Engine Architecture baseline exists.
4. Revisit RC2 Specification move only after Runtime and Terminology harvest blockers are resolved.

---

# 25. Legacy Migration Policy

RC2 material shall not be moved to legacy merely because v3 documents exist.

A legacy move requires:

- harvest complete or explicitly waived;
- active links identified;
- replacement or legacy reference strategy approved;
- operational compatibility preserved;
- validation passed;
- review completed.

## 25.1 Current Legacy Status

| Area | Status | Reason |
|---|---|---|
| `docs/AI/Specification/` | Not ready to move | Runtime and Terminology blockers remain partially open |
| `docs/AI/System/` | Do not move | active operational layer |
| `docs/AI/Commands/` | Do not move | active command layer |
| `docs/AI/Workflows/` | Do not move | active workflow layer |
| `docs/AI/Templates/` | Do not move | active template layer |
| `docs/AI/Validation/` | Do not move | active validation layer |
| `docs/AI/Certification/` | Do not move | active certification evidence layer |

---

# 26. Governance Rules

- ProjectStatus records live state; it does not promote architecture.
- Blueprint RFC remains non-canonical until ratified.
- A.1, M.0, M.1, and STD-000 require explicit promotion approval.
- Runtime and Engine RFCs remain non-canonical until reviewed and promoted.
- RC2 operational procedures remain valid until v3 replacements exist.
- No AI system may self-certify its own output.

---

# 27. Phase Completion Model

Each Phase shall complete through this sequence:

```text
Draft
    ↓
Review
    ↓
Validation
    ↓
Certification
    ↓
ProjectStatus Update
```

A Phase is not complete merely because documents were created.

---

# 28. Tracking Table

| Area | Current State | Next Action |
|---|---|---|
| Authority Alignment | Completed | monitor wording consistency |
| v3 Migration | Strategy complete | continue staged migration |
| Runtime | A.3 RFC created | review and later promote |
| Engine | Not created | create A.4 Engine Architecture RFC |
| Terminology | STD-003 created | review and align usage |
| Discovery | STD-002 exists | proceed to Finding later |
| Specification Legacy Move | Not ready | harvest blockers first |
| ProjectStatus | v3 milestone recorded | do not over-promote |

---

# 29. Non-Goals

This document does not:

- promote v3 documents to canonical status;
- move RC2 files;
- update live project status by itself;
- certify phases;
- implement runtime code;
- create standards by itself;
- replace `docs/ProjectStatus.md`;
- replace `AGENTS.md`.

---

# 30. Completion Checklist

This document is complete when:

- [x] v3 status is defined;
- [x] planning hierarchy is defined;
- [x] RC2/v3 generation strategy is defined;
- [x] target repository structure is included;
- [x] all v3 phases are listed;
- [x] each phase has purpose, ownership, planned documents, and exit criteria;
- [x] immediate roadmap is clear;
- [x] legacy migration policy is included;
- [x] ProjectStatus boundary is preserved;
- [x] Engine Architecture is identified as the immediate next work.

---

## Final Statement

Forge AI v3 is now tracked as a staged architecture generation rather than an ad hoc documentation expansion.

The next safe architectural step is to create **A.4 — Engine Architecture RFC** under `docs/AI/Runtime/`.

# Forge AI Program Architecture Master Roadmap v4

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.V2.ROADMAP.V4` |
| Title | Forge AI Program Architecture Master Roadmap v4 |
| Version | `4.2.0-draft` |
| Status | Draft |
| Canonical Status | Active Forge AI Target Project planning artifact; not a Framework architecture authority and not canonical for external Target Repositories |
| Classification | Target Project Roadmap |
| Document Type | Program-Level Roadmap |
| Owner | Forge AI Target Project Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Active Target Project Planning |
| Traceability ID | `FORGE-AI.V2.ROADMAP-001` |
| Scope | Program-level development sequence for the Forge AI repository as a self-hosted Target Repository and reference consumer of Forge AI / AI-DOS. |
| Out of Scope | Framework redesign, external Target Repository roadmap authority, ProjectStatus replacement, DevelopmentPhases replacement, unsupported phase advancement, cleanup execution, Axis Suite implementation, Runtime implementation, Engine implementation, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/AI/Architecture/Reports/Target-Project-Path-Resolution.md`; `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md` |
| Dependencies | A.1 Constitution, A.2 Operational Boundary, Governance Atlas, Framework Governance, Target Repository Resolution, System Layer baseline, DevelopmentPhases, ProjectStatus, repository evidence, and Human Governance task instruction. |
| Consumes | Framework authority, Target Repository operating model, System Layer resolution rules, Forge AI self-hosting mappings, completed architecture and normalization evidence, DevelopmentPhases sequencing, and ProjectStatus live operational state. |
| Produces | Active Forge AI repository roadmap, audit-to-cleanup sequence, freeze and pilot milestones, and evidence-gated productization boundaries. |
| Related Specifications | `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Supersedes | Active execution use of `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md` |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance review, ProjectStatus alignment validation, DevelopmentPhases alignment validation, Target Repository boundary validation, stale-path validation, and explicit Human Governance approval. |
| Certification Status | Not certified |

---

## 1. Executive Summary

This roadmap governs development of the Forge AI repository as the first self-hosted Target Repository of Forge AI / AI-DOS.

The project began as Forge AI Framework development. It has evolved into a clearer two-sided operating model:

```text
Forge AI / AI-DOS
    = reusable Framework and operating system

Forge AI repository
    = self-hosted Target Repository developing and validating AI-DOS
```

This is an architectural evolution, not a claim that the current product is complete or commercially ready.

The next objective is not another speculative architecture expansion. It is to complete one definitive repository audit against the current AI-DOS model, execute the resulting cleanup, freeze the normalized baseline, and prove external operation through Axis Suite.

## 2. Operating Model Alignment

The planning hierarchy is:

```text
Framework authority
    governs how work is conducted

Forge AI Target Project roadmap
    governs Forge AI repository direction

Forge AI DevelopmentPhases
    governs phase and stage sequence

Forge AI ProjectStatus
    records what is active now
```

This roadmap does not redefine Constitution, Governance, Standards, Runtime, Engines, System Layer, Operational Core, commands, workflows, or templates.

## 3. Forge AI Self-Hosting Path Mappings

| Symbolic Path | Forge AI Self-Hosting Resolution |
|:---|:---|
| `<TARGET_REPOSITORY_ROOT>` | Forge AI repository root |
| `<TARGET_AGENTS_PATH>` | `AGENTS.md` |
| `<PROJECT_STATUS_PATH>` | `docs/DevelopmentPhases/ProjectStatus.md` |
| `<DEVELOPMENT_PHASES_PATH>` | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| `<PROJECT_ROADMAP_PATH>` | `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md` |

These mappings apply only when Forge AI is the active Target Repository.

## 4. Program Status

### Completed foundation and normalization

1. Core constitutional, meta-model, and standards foundation.
2. Runtime and Engine architecture/RFC foundation.
3. Operational Core normalization.
4. Template Library normalization.
5. Runtime RFC normalization.
6. AI-DOS / Target Repository operational boundary.
7. Target Project Path Resolution.
8. TargetRepositoryResolution System extension.
9. System Layer amended re-freeze.
10. Non-frozen target-path normalization.
11. Self-hosting roadmap, DevelopmentPhases, ProjectStatus, and moved-path realignment.

### Active program

12. AI-DOS Repository Architecture & Disposition Audit v2.

### Future evidence-gated programs

13. Revised legacy and physical-layout cleanup.
14. Repository integrity validation and freeze.
15. Axis Suite Target Repository preparation.
16. Axis Suite pilot.
17. Evidence-driven AI-DOS improvements.
18. Productization only after repeatability is proven.

## 5. Active Program — Repository Architecture & Disposition Audit v2

The active program shall produce the definitive repository classification after the major operating-model evolution.

It shall:

- inspect the current physical repository;
- distinguish AI-DOS Framework truth from Forge AI Target Project truth;
- classify active, frozen, historical, legacy, archive, and removal surfaces;
- provide one primary disposition per family;
- identify the final physical layout;
- define executable cleanup batches;
- assess Repository Freeze readiness;
- assess Axis Suite provider readiness; and
- supersede the earlier rationalization audit as the cleanup execution baseline without erasing historical evidence.

It shall not execute cleanup or modify audited documents.

## 6. Cleanup Program

Cleanup begins only after the v2 audit is completed and accepted.

Cleanup rules:

1. Use the final audit as the sole execution baseline.
2. Do not re-audit during execution batches.
3. Do not redesign architecture.
4. Preserve current owners and frozen areas.
5. Merge unique content before removing superseded sources.
6. Separate historical evidence from active authority.
7. Correct inbound references when moving or archiving artifacts.
8. Record blockers rather than inferring dispositions.

## 7. Repository Freeze Program

Repository Freeze may occur only after:

- all approved cleanup batches complete;
- active references resolve;
- Framework and Target Project ownership are unambiguous;
- no duplicate active authority remains;
- frozen families are internally consistent;
- boot and target-resolution flows are deterministic;
- ProjectStatus and DevelopmentPhases match the repository state; and
- Human Governance explicitly approves the freeze.

Repository Freeze does not certify Runtime implementation, Engine implementation, or commercial readiness.

## 8. Axis Suite Preparation and Pilot

Axis Suite is the first intended external Target Repository.

Preparation must establish, within the Axis Suite repository:

- root `AGENTS.md`;
- Axis Suite ProjectStatus path;
- Axis Suite DevelopmentPhases path;
- architecture paths;
- source roots;
- validation commands;
- protected areas;
- project authority order; and
- Forge AI / AI-DOS consumption rule.

The first pilot must be a bounded real task that exercises:

```text
Target Repository Resolution
→ Boot
→ Authority
→ Source of Truth
→ Context
→ Decision
→ Execution
→ Validation
→ Review
→ Completion Report
```

The pilot succeeds only when the task is completed safely and repeatably inside Axis Suite using Axis Suite project truth and Forge AI Framework rules.

## 9. Evidence-Driven Improvement Rule

After the pilot, changes to AI-DOS must be driven by observed evidence:

- missing declarations;
- ambiguous ownership;
- unsafe fallbacks;
- unnecessary context;
- failed validation routing;
- repeated manual intervention; or
- measurable onboarding friction.

Pilot evidence may justify focused changes. It does not justify reopening the entire architecture.

## 10. Productization Gate

Branding, installation, distribution, onboarding automation, commercial packaging, and pricing remain deferred until AI-DOS demonstrates:

1. successful Forge AI self-hosting;
2. successful Axis Suite operation;
3. at least one repeated external-project workflow;
4. deterministic onboarding requirements;
5. stable validation and blocker behavior; and
6. a user-facing path that does not require understanding the entire documentation corpus.

Commercial potential is not recorded as completion evidence.

## 11. Safety Rules

- Do not create new foundational architecture without a proven unresolved problem.
- Do not treat planning documents as Framework authority.
- Do not apply Forge AI physical paths to external Target Repositories.
- Do not execute cleanup before the final audit is accepted.
- Do not declare Repository Freeze from roadmap language alone.
- Do not begin Axis Suite work before repository readiness is confirmed.
- Do not call AI-DOS operationally proven before an external pilot succeeds.
- Prefer execution, validation, and evidence over additional speculative documents.

## 12. Milestone Table

| Order | Milestone | State | Exit Evidence |
|:---:|:---|:---|:---|
| 1 | Core and standards foundation | Completed | Repository documents and reviews |
| 2 | Runtime and Engine RFC foundation | Completed as architecture/RFC work | RFC family and review evidence |
| 3 | Template and Runtime normalization | Completed | Normalized families |
| 4 | AI-DOS / Target Repository boundary | Completed as draft architecture | A.2 |
| 5 | TargetRepositoryResolution and System re-freeze | Completed | System extension and freeze amendment |
| 6 | Non-frozen target-path normalization | Completed | `TARGET-PATH-002` commit evidence |
| 7 | Self-hosting governance realignment | Completed | Roadmap, phases, status, and path updates |
| 8 | AI-DOS Repository Audit v2 | **Active** | Approved definitive audit |
| 9 | Final cleanup | Future | Completed execution batches |
| 10 | Repository integrity and freeze | Future | Validation and Human Governance approval |
| 11 | Axis Suite preparation | Future | Target declarations available |
| 12 | Axis Suite pilot | Future | Completed bounded task with validation evidence |
| 13 | Evidence-driven improvements | Future | Pilot findings |
| 14 | Productization | Deferred | Repeated external-project proof |

## 13. Current Decision

The current decision is:

> Complete the definitive AI-DOS Repository Architecture & Disposition Audit v2 before executing further physical cleanup.

The next task after that audit is:

`FORGE-AI.V2.REPOSITORY-CLEANUP-001 — EXECUTE FINAL REPOSITORY CLEANUP`

## 14. Version History

| Version | Date | Description |
|:---|:---|:---|
| `4.1.0-draft` | 2026-07-10 | Established the active roadmap as Forge AI self-hosting Target Project planning. |
| `4.2.0-draft` | 2026-07-10 | Closed self-hosting governance realignment and activated the definitive AI-DOS Repository Architecture & Disposition Audit v2. |

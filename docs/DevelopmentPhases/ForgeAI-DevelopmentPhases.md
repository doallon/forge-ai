# Forge AI Development Phases

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.DEVELOPMENT-PHASES` |
| Title | Forge AI Development Phases |
| Version | `4.2.0-draft` |
| Status | Draft |
| Canonical Status | Active Forge AI Target Project phase sequence; not a universal DevelopmentPhases authority for external Target Repositories |
| Classification | Target Project Development Phases |
| Document Type | Development Phase Sequence |
| Owner | Forge AI Target Project Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-04 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Active Target Project Planning |
| Traceability ID | `FORGE-AI.TARGET.DEVELOPMENT-PHASES` |
| Scope | Phase and stage sequence for development of the Forge AI repository as a self-hosted Target Repository and reference consumer of Forge AI / AI-DOS. |
| Out of Scope | Universal external Target Repository phase structure, Framework redesign, ProjectStatus replacement, roadmap replacement, implementation authorization, cleanup execution, Repository Freeze declaration, and Axis Suite implementation. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md` |
| Normative References | `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/AI/Architecture/Reports/Target-Project-Path-Resolution.md`; `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Active master roadmap, ProjectStatus, AI-DOS / Target Repository operating model, System Layer target resolution, repository evidence, and Human Governance task instruction. |
| Consumes | Forge AI program roadmap, live operational state, AI-DOS / Target Repository boundary, System Layer resolution rules, completed architecture and normalization evidence, and repository rationalization evidence. |
| Produces | Forge AI repository phase sequence, self-hosting project milestones, active audit/cleanup boundaries, and roadmap-aligned planning context. |
| Related Specifications | `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md`; `docs/AI/Architecture/Reports/Target-Project-Path-Resolution.md`; `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md`; `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md` |
| Supersedes | Earlier active interpretation of Forge AI Development Phases as general AI-DOS phase authority |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance review, active roadmap alignment, ProjectStatus alignment, Target Repository boundary validation, and explicit approval. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the active phase and stage sequence for development of the Forge AI repository as a self-hosted Target Repository.

Forge AI / AI-DOS provides the general operating system. The Forge AI repository is the first self-hosted Target Repository that consumes that operating system while developing it. This phase sequence governs only that repository-specific work.

External Target Repositories declare their own DevelopmentPhases resources through their own root `AGENTS.md`; they do not inherit this file or its physical paths.

## 2. Forge AI Self-Hosting Path Mappings

The following mappings apply only to Forge AI self-hosting:

| Symbolic Path | Forge AI Self-Hosting Resolution |
|:---|:---|
| `<TARGET_REPOSITORY_ROOT>` | Forge AI repository root |
| `<TARGET_AGENTS_PATH>` | `AGENTS.md` |
| `<PROJECT_STATUS_PATH>` | `docs/DevelopmentPhases/ProjectStatus.md` |
| `<DEVELOPMENT_PHASES_PATH>` | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| `<PROJECT_ROADMAP_PATH>` | `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md` |

These are not universal paths for Axis Suite or any external Target Repository.

## 3. Phase Sequence

| Phase | Name | Forge AI Target Project State |
|:---:|:---|:---|
| 0 | Core Foundation | Completed historical phase; includes A.0/A.1 foundation and authority alignment. |
| 1 | Meta and Standards Foundation | Completed historical phase; includes M.0, M.1, terminology, metadata, and standards alignment evidence. |
| 2 | Runtime and Engine Foundation | Completed historical architecture/RFC drafting and review-readiness work; not implementation authorization or canonical promotion. |
| 3 | Template Library Normalization | Completed repository normalization work. |
| 4 | Runtime RFC Normalization | Completed repository normalization work. |
| 5 | AI-DOS / Target Repository Boundary | Completed as draft architecture and operating-model alignment; does not promote draft architecture to canonical status. |
| 6 | System Layer Target Repository Resolution | Completed TargetRepositoryResolution extension and System Layer re-freeze at amended baseline. |
| 7 | Non-frozen Target-Path Normalization | Completed `FORGE-AI.V2.TARGET-PATH-002`. |
| 8 | Self-Hosting Project Governance Realignment | Completed: roadmap, DevelopmentPhases, ProjectStatus, and moved-roadmap references aligned to Forge AI self-hosting. |
| 9 | AI-DOS Repository Architecture & Disposition Audit v2 | **Active:** perform the definitive post-evolution repository reclassification and disposition audit. |
| 10 | Revised Legacy and Physical Layout Cleanup | Future; execute only the final audit-approved dispositions. |
| 11 | Repository Integrity Validation and Freeze | Future; verify authority, location, reference, and frozen-area consistency before freeze. |
| 12 | Axis Suite Target Repository Preparation | Future; define Axis Suite repository declarations and onboarding inputs. |
| 13 | Axis Suite Pilot | Future; first external Target Repository execution. |
| 14 | Evidence-Driven AI-DOS Improvements | Future; changes must be justified by pilot evidence. |
| 15 | AI-DOS Productization | Deferred until repeatable external-project operation is proven. |

## 4. Current Phase

The current phase is **Phase 9 — AI-DOS Repository Architecture & Disposition Audit v2**.

The objective is to classify the repository against the current AI-DOS architecture after the A.2 boundary, TargetRepositoryResolution, target-path normalization, physical roadmap relocation, and self-hosting project-governance realignment.

This phase produces the definitive cleanup reference. It does not execute cleanup, move files, declare Repository Freeze, or activate Axis Suite work.

## 5. Current Stage

**Current stage:** prepare and complete `FORGE-AI.V2.REPOSITORY-AUDIT-002 — AI-DOS Repository Architecture & Disposition Audit`.

**Required outcome:** one current classification and disposition baseline that supersedes the earlier rationalization audit for cleanup execution while preserving the earlier audit as historical evidence.

**Next stage after completion:** revised legacy and physical-layout cleanup, only through approved execution batches.

## 6. Phase 9 Completion Criteria

Phase 9 is complete only when:

1. The current physical repository tree is inspected after the completed file relocations.
2. Every major family is classified as AI-DOS Framework, Forge AI Target Project, shared operational asset, frozen architecture, historical evidence, legacy, archive candidate, or removal candidate.
3. Every family receives one primary disposition.
4. Framework truth and Forge AI project truth are not conflated.
5. Self-hosting references are distinguished from reusable Framework assumptions.
6. Cleanup batches, dependencies, risks, and blockers are explicit.
7. Repository Freeze readiness and Axis Suite readiness are stated without activating either.
8. The audit is committed and approved as the cleanup execution baseline.

## 7. Future Milestones

After Phase 9:

1. Execute revised legacy and physical-layout cleanup.
2. Validate repository-wide integrity.
3. Freeze the normalized repository baseline.
4. Prepare Axis Suite as the first external Target Repository.
5. Run the first Axis Suite pilot task.
6. Improve AI-DOS only from concrete pilot evidence.
7. Consider installation, distribution, branding, and commercial productization only after repeatability is proven.

## 8. Authority Boundaries

This document consumes Framework authority but does not redefine it. It does not redefine A.1, A.2, Governance Atlas, Framework Governance, Standards, Runtime, Engines, System Layer, Operational Core, commands, workflows, or templates.

The active roadmap governs Forge AI repository sequencing. ProjectStatus records what is active now. Neither planning document promotes draft Framework artifacts or authorizes implementation by itself.

## 9. Preservation of Historical Traceability

Earlier phase identifiers, superseded roadmaps, audits, and migration evidence remain historical project evidence. They must not be loaded as active planning authority when a current successor exists.

The current phase sequence preserves completed work without representing documentation completion as Runtime activation, implementation completion, certification, or canonical promotion.

## 10. Version History

| Version | Date | Description |
|:---|:---|:---|
| `4.1.0-draft` | 2026-07-10 | Established Forge AI self-hosting Target Repository phase ownership. |
| `4.2.0-draft` | 2026-07-10 | Completed Phase 8 and activated the definitive AI-DOS Repository Architecture & Disposition Audit v2 as Phase 9. |

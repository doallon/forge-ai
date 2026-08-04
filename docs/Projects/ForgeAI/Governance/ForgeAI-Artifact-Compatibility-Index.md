# Forge AI Artifact Compatibility Index

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.ARTIFACT-COMPATIBILITY-INDEX` |
| Title | Forge AI Artifact Compatibility Index |
| Version | `1.0.0-draft` |
| Version Scope | Artifact Scope — this compatibility index only |
| Version Type | Document Version |
| Status | Draft |
| Lifecycle State | Draft |
| Canonical Status | Active Target-owned compatibility index; not AI-DOS product truth |
| Classification | Forge AI Target Project Governance Record |
| Document Type | Artifact Compatibility Index |
| Artifact Family | Governance |
| Artifact Type | Compatibility Index |
| Canonical Path | `docs/Projects/ForgeAI/Governance/ForgeAI-Artifact-Compatibility-Index.md` |
| Owner | Forge AI Target Project Governance |
| Maintainers | Forge AI Target Project Governance |
| Review Authority | Human Governance-designated independent reviewer |
| Approval Authority | Human Governance |
| Last Updated | 2026-08-04 |
| Scope | Index immutable accepted evidence and historical Forge AI artifacts and their exact compatibility sidecars. |
| Out of Scope | Subject mutation, retroactive metadata claims, ProjectStatus mutation, active-draft alignment, approval, and certification. |
| Normative Authority | Human Governance; `docs/Projects/ForgeAI/Mission/AGENTS.md` §6 |
| Normative References | `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Consumes | Immutable repository subjects and Git identities. |
| Produces | Compatibility-sidecar inventory and provenance bindings. |
| Depends On | Sidecars under `docs/Projects/ForgeAI/Governance/Compatibility/` |
| Validation Profile | Sidecar cardinality, exact path/commit/blob resolution, reference-integrity validation, and protected-area diff review |
| Certification Status | Not certified |

## Policy

Accepted evidence and historical artifacts remain immutable. Compatibility metadata is appended through Target-owned sidecars bound to exact immutable subject revisions. A sidecar describes its subject but never replaces, supersedes, amends, approves, validates, or certifies it.

Active drafts may be aligned directly through separately bounded new draft versions or recorded revisions. ProjectStatus remains subject to a separate exact mutation and is not changed by this index.

## Immutable Subject Index

| Subject | Sidecar | Current Commit | Current Blob | Accepted Locator Resolves Locally |
|:---|:---|:---|:---|:---|
| `docs/Projects/ForgeAI/Reports/AI-DOS-Evidence-Review-001-Findings.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Evidence-Review-001-Findings-Compatibility-Metadata.md` | `70dd3f7b6802a5f83bb9da3bd1fbb5c91fdb26bb` | `7a660e642b01dd8aa7ea1636f568169f7feee70e` | `Yes` |
| `docs/Projects/ForgeAI/Reports/AI-DOS-Governed-Self-Application-Opportunity-Report.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Governed-Self-Application-Opportunity-Report-Compatibility-Metadata.md` | `1b11764dde43dc8a5cc511985f649f76613af7f0` | `119012fc81f354512519f08dda2cdc804205c66e` | `Yes` |
| `docs/Projects/ForgeAI/Reports/AI-DOS-Pilot-Execution-001-Evidence.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Pilot-Execution-001-Evidence-Compatibility-Metadata.md` | `1b11764dde43dc8a5cc511985f649f76613af7f0` | `3d0b9ed4cbc7d74d21318ddc432760c313472845` | `Yes` |
| `docs/Projects/ForgeAI/Reports/AI-DOS-Pilot-Execution-002-Evidence.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Pilot-Execution-002-Evidence-Compatibility-Metadata.md` | `1b11764dde43dc8a5cc511985f649f76613af7f0` | `b5fa0bf939598eb34c04eb9866c8b10b21090947` | `Yes` |
| `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Onboarding-Validation-001-Evidence.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Target-Onboarding-Validation-001-Evidence-Compatibility-Metadata.md` | `4972af688cc8a23ae73178b2886f7cb01c20f02d` | `d94aec5bf5814bdb7423a59889a205984fe2465e` | `No` |
| `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Protected-Area-Proof-001-Evidence.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Target-Protected-Area-Proof-001-Evidence-Compatibility-Metadata.md` | `852ed98d79739bc9517f0602073c008c2764fc34` | `74f1e621f09bb72256a39acc6c0b2018bae3d5aa` | `No` |
| `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Validation-Declaration-Proof-001-Evidence.md` | `docs/Projects/ForgeAI/Governance/Compatibility/AI-DOS-Target-Validation-Declaration-Proof-001-Evidence-Compatibility-Metadata.md` | `61c385873aea43e7dbb58bf080729ce32b11248d` | `a56f6d1c18771776e013d9d6bf22281c6175098a` | `Yes` |
| `docs/Projects/ForgeAI/Mission/ForgeAI-Mission-and-Autonomy-Model.md` | `docs/Projects/ForgeAI/Governance/Compatibility/ForgeAI-Mission-and-Autonomy-Model-Compatibility-Metadata.md` | `1b11764dde43dc8a5cc511985f649f76613af7f0` | `eac55456257ffd7b5f514a01340f45cedaab9765` | `Yes` |

## Validation Boundary

A `Yes` value proves only that the ProjectStatus-recorded accepted revision exposes the subject path in local Git. A `No` value is a recorded locator-resolution limitation and must not be repaired by substituting the current file, a merge commit, or model judgment.

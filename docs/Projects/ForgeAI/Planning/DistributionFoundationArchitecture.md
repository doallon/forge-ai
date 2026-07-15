# Distribution Foundation Architecture and Package Contract

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.DISTRIBUTION-FOUNDATION-ARCHITECTURE` |
| Title | Distribution Foundation Architecture and Package Contract |
| Version | `1.0.0-draft` |
| Status | Draft for Human Governance Review |
| Classification | Forge AI Target Project Distribution Foundation Planning Artifact |
| Document Type | Architecture and Package Contract |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-15 |
| Scope | Distribution Foundation architecture, package contract, build and packaging plan, manifest model, version model, signing and integrity criteria, install/update/rollback/uninstall criteria, compatibility matrix seed, and release-governance gate for AI-DOS distribution planning. |
| Out of Scope | CLI implementation, MCP implementation, hosted-provider implementation, adapter implementation, package layout creation, build-script implementation, API design, feedback transport, Axis Suite activation, external Target execution, certification, release approval, and ProjectStatus mutation. |
| Normative Authority | Human Governance; `docs/Projects/ForgeAI/Mission/AGENTS.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/Projects/ForgeAI/Planning/Roadmap.md` |
| Consumes | Forge AI mission and autonomy model, active D1 Distribution Foundation objective, accepted distribution-oriented DevelopmentPhases, accepted distribution-oriented Roadmap, and active protected-area constraints. |
| Produces | Bounded D1 Distribution Foundation architecture and package contract for Human Governance review. |
| Certification Status | Not certified |

---

## 1. Purpose

This document records the Distribution Foundation architecture and package contract for the active Forge AI D1 step.

It defines the planning contract for a future signed, versioned AI-DOS distribution without beginning implementation or activating downstream distribution steps.

The artifact is complete when Human Governance can review a bounded package-contract proposal that addresses:

1. build and packaging plan;
2. package manifest model;
3. version model;
4. signing and integrity criteria;
5. install, update, rollback, and uninstall criteria;
6. compatibility matrix seed;
7. release-governance gate.

---

## 2. Distribution Foundation Boundary

### 2.1 In Scope

The Distribution Foundation owns the architectural contract for producing a future AI-DOS distribution artifact from the private development repository.

The in-scope distribution boundary is:

```text
Private AI-DOS development repository
    ↓
Build and packaging process
    ↓
Signed / versioned distribution artifact
    ↓
Installable runtime boundary for a future provider surface
```

### 2.2 Out of Scope

This D1 artifact does not authorize or perform:

- CLI behavior;
- MCP behavior;
- hosted-provider behavior;
- Codex adapter behavior;
- Axis Suite preparation or execution;
- feedback transport;
- package directory creation;
- build-system implementation;
- installer implementation;
- release publication;
- certification;
- automatic ProjectStatus update.

---

## 3. Architecture Principles

1. **Development truth and distribution artifacts are separate.** The private repository remains the product-development source, while distributions expose only approved runtime artifacts and public contracts.
2. **Targets do not receive AI-DOS internals by default.** Independent Target repositories must not need AI-DOS private architecture, workflows, governance documents, or development state.
3. **Distribution is signed and versioned before provider maturity claims.** No CLI, MCP, or hosted-provider claim is valid until the release package can be identified, verified, and governed.
4. **Installation is reversible.** Install, update, rollback, and uninstall criteria are part of the package contract before implementation begins.
5. **Human Governance gates releases.** Passing validation may qualify a candidate for review, but it does not approve or publish a release.
6. **Privacy is default-deny.** Distribution metadata must avoid unnecessary Target Context, credentials, personal data, proprietary repository contents, and private development state.

---

## 4. Build and Packaging Plan

The future build and packaging process shall be modeled as the following controlled stages:

| Stage | Purpose | Required Output | D1 Contract Requirement |
|:---|:---|:---|:---|
| Source selection | Identify the exact private source revision used for a candidate package. | Source revision identifier. | The package must trace to one immutable source revision. |
| Build preparation | Resolve approved build inputs without Target-specific leakage. | Build input inventory. | Inputs must distinguish product inputs from Target-owned context. |
| Artifact assembly | Assemble runtime files and public contracts into a distributable unit. | Candidate artifact. | Artifact contents must exclude private development-only truth unless explicitly approved. |
| Manifest generation | Generate package metadata and integrity references. | Package manifest. | Manifest must be machine-readable and human-reviewable. |
| Integrity production | Produce hashes and signing inputs. | Integrity metadata. | Every released artifact must have verifiable integrity metadata. |
| Validation | Run package validation before release review. | Validation evidence. | Validation evidence must be attached before governance review. |
| Governance review | Present candidate and evidence for Human Governance decision. | Release decision record. | No artifact is released by automation alone. |

---

## 5. Package Manifest Model

A distribution package shall include or be accompanied by a manifest with these required fields:

| Field | Requirement |
|:---|:---|
| `package_id` | Stable identifier for the AI-DOS distribution package. |
| `package_version` | Package version using the version model in this document. |
| `source_revision` | Immutable reference to the private development source revision. |
| `build_id` | Unique build invocation or candidate identifier. |
| `build_timestamp` | Timestamp for package creation. |
| `artifact_type` | Package type, such as runtime, documentation bundle, adapter extension, or future provider package. |
| `artifact_files` | List of packaged files with paths, sizes, and hashes. |
| `public_contracts` | Public contracts included for Target or provider consumption. |
| `excluded_private_areas` | Confirmation that private development truth and Target-owned context were excluded. |
| `compatibility` | Compatibility claims using the matrix seed in this document. |
| `integrity` | Hash algorithm, digest values, and signature references. |
| `release_channel` | Candidate, internal, preview, stable, or retired. |
| `release_gate` | Governance gate status and decision reference. |
| `rollback_from` | Prior versions from which rollback is supported, when applicable. |
| `uninstall_support` | Whether uninstall criteria are satisfied for this package type. |

Manifest fields may be extended in later authorized work, but future extensions must preserve source traceability, integrity verification, compatibility evidence, and governance-gate references.

---

## 6. Version Model

AI-DOS distribution packages shall use a version model with four separable identifiers:

| Identifier | Meaning | Rule |
|:---|:---|:---|
| Product version | Human-facing AI-DOS release version. | Advances only after Human Governance release acceptance. |
| Package version | Concrete distributable package version. | Changes for every package candidate that may be installed or verified. |
| Manifest version | Manifest schema version. | Changes only when manifest structure changes. |
| Source revision | Immutable source reference. | Must identify the exact development source used. |

Minimum package-version format:

```text
<major>.<minor>.<patch>-<channel>.<candidate>
```

Example candidate shape:

```text
0.1.0-candidate.1
```

Version rules:

1. Candidate versions do not imply release approval.
2. Stable versions require an explicit Human Governance release decision.
3. A package version must not be reused for different artifact contents.
4. Rollback support must identify valid prior package versions.
5. Compatibility claims belong to the package version and must not be inherited silently by future versions.

---

## 7. Signing and Integrity Criteria

A release candidate satisfies D1 integrity criteria only when the contract can require the following evidence:

| Area | Criterion |
|:---|:---|
| Artifact hashing | Every packaged file and final package archive has a recorded digest. |
| Algorithm declaration | Hash and signature algorithms are declared in the manifest. |
| Signature attachment | Release candidates intended for installation include a signature or signature placeholder pending approved key management. |
| Source traceability | Manifest links the artifact to an immutable source revision. |
| Verification procedure | A future installer or verifier can confirm package contents before use. |
| Tamper response | Failed integrity verification blocks install, update, and release promotion. |
| Key governance | Signing key creation, custody, rotation, and revocation require separately approved governance controls before release. |

D1 does not create keys, choose a vendor, publish signatures, or implement verification code.

---

## 8. Install, Update, Rollback, and Uninstall Criteria

### 8.1 Install Criteria

A future installer may install a package only when:

1. the manifest is present and readable;
2. package version and source revision are identifiable;
3. integrity verification passes;
4. compatibility checks pass or a governed override exists;
5. target installation location is explicit;
6. private development source is not required at runtime;
7. install evidence can be produced.

### 8.2 Update Criteria

A future updater may replace an installed package only when:

1. the currently installed package is identifiable;
2. the target package version is newer or explicitly permitted;
3. compatibility constraints are evaluated;
4. rollback information is available before mutation;
5. integrity verification passes;
6. update evidence can be produced.

### 8.3 Rollback Criteria

A future rollback operation may restore a prior package only when:

1. the prior package version is known and available;
2. its integrity metadata remains valid;
3. rollback compatibility is declared;
4. local runtime state boundaries are preserved or explicitly migrated;
5. rollback evidence can be produced.

### 8.4 Uninstall Criteria

A future uninstall operation may remove an installed package only when:

1. installed files are known from the manifest or install record;
2. Target-owned files and evidence are not removed by default;
3. local runtime data handling is explicit;
4. uninstall evidence can be produced;
5. failed uninstall leaves a diagnostic record.

---

## 9. Compatibility Matrix Seed

The initial compatibility matrix shall track package compatibility against these dimensions:

| Dimension | Seed Values | Required Evidence Before Claim |
|:---|:---|:---|
| Host operating system | Linux, macOS, Windows | Package install and verification evidence per claimed OS. |
| AI host | Codex terminal host, future supported hosts | Invocation-boundary evidence for each host. |
| Provider surface | None for D1; future CLI, MCP, hosted provider | Separate activation and validation evidence per surface. |
| Runtime mode | Local offline-first, local network-optional, managed hosted | Separate governance acceptance per runtime mode. |
| Target repository model | Independent Target with Target-owned contract | Onboarding validation evidence. |
| Package channel | Candidate, internal, preview, stable, retired | Governance decision and release evidence. |
| Manifest schema | Manifest version declared in package | Manifest validation evidence. |
| Integrity mechanism | Hash-only candidate, signed candidate, signed release | Verification evidence and key-governance decision. |

D1 records the seed only. It does not claim compatibility for any operating system, host, provider surface, runtime mode, or external Target.

---

## 10. Release-Governance Gate

A package candidate may advance to Human Governance release review only when the candidate evidence packet includes:

1. package manifest;
2. source revision;
3. build input inventory;
4. artifact inventory;
5. integrity metadata;
6. compatibility matrix entries being claimed;
7. install/update/rollback/uninstall validation evidence applicable to the package type;
8. privacy and private/public boundary review;
9. known risks and unsupported surfaces;
10. release recommendation;
11. explicit Human Governance decision placeholder.

Release-gate outcomes:

| Outcome | Meaning |
|:---|:---|
| `REJECTED` | Candidate must not be released. |
| `REVISION REQUIRED` | Candidate requires bounded correction before another review. |
| `ACCEPTED FOR INTERNAL USE` | Candidate may be used within the approved internal boundary only. |
| `ACCEPTED FOR PREVIEW` | Candidate may be distributed to an approved preview boundary. |
| `ACCEPTED FOR STABLE RELEASE` | Candidate may be released under the approved stable distribution boundary. |

No outcome is automatic. Human Governance remains the approval authority.

---

## 11. Completion Evidence for D1

This artifact satisfies the active D1 planning step by providing:

| Required D1 Area | Location |
|:---|:---|
| Build and packaging plan | Section 4 |
| Package manifest model | Section 5 |
| Version model | Section 6 |
| Signing and integrity criteria | Section 7 |
| Install, update, rollback, and uninstall criteria | Section 8 |
| Compatibility matrix seed | Section 9 |
| Release-governance gate | Section 10 |

D1 completion does not activate D2 Local CLI Package, D3 Public System Interface, D4 Codex CLI Adapter, D5 Local MCP Provider, D6 Evolution Capsule Model, D7 Feedback Transport, D8 Axis Suite Pilot, D9 Managed Provider Architecture, D10 Managed Provider Pilot, or D11 Multi-Target AI Highway.

---

## 12. Recommended Next Step

Recommended next step for Human Governance:

```text
Review the D1 Distribution Foundation Architecture and Package Contract and decide whether it is accepted, rejected, or requires revision before any downstream distribution step is activated.
```

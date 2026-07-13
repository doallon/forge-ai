# M.1 — Artifact Meta Model

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-M.1` |
| Title | M.1 — Artifact Meta Model |
| Version | 1.0.0 |
| Status | Canonical Semantic Foundation |
| Classification | Artifact Semantic Model |
| Document Type | Meta Model |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Artifact semantics derived from M.0. |
| Out of Scope | Relationship semantics, authority semantics, evidence semantics, compatibility semantics, runtime semantics, agent semantics, planning artifacts, Target Project concepts, implementation, commands, workflows, and templates. |

---

## 1. Purpose

M.1 defines artifact semantics for AI-DOS.

M.0 defines Artifact as a framework semantic concept. M.1 defines how artifacts are understood as artifacts: their families, types, instances, identity bindings, metadata bindings, relationship bindings, lifecycle bindings, version bindings, schema bindings, representations, classifications, discovery interfaces, and consumption interfaces.

M.1 does not own the semantics of relationship, authority, evidence, validation, compatibility, runtime, agents, planning, commands, workflows, templates, or Target Projects. When an artifact uses those concepts, it binds to their upstream meaning rather than redefining them.

---

## 2. Relationship to M.0

M.1 consumes M.0 Artifact semantics. M.1 specializes Artifact without redefining M.0.

| M.0 Concept | M.1 Use |
|:---|:---|
| Artifact | Root consumed by every M.1 artifact concept. |
| Semantic Entity | Artifact is treated as a governed semantic entity. |
| Authority | Bound to artifacts through authority bindings; semantics remain owned by M.0. |
| Ownership | Bound to artifacts through ownership metadata; semantics remain owned by M.0. |
| Relationship | Bound to artifacts through relationship bindings; semantics remain owned by M.0. |
| Evidence | Bound to artifacts when artifacts support claims; semantics remain owned by M.0. |
| Validation | Bound to artifacts when artifacts are checked; semantics remain owned by M.0. |
| Context, Objective, Constraint, Boundary | Used to interpret artifact scope and consumption limits; semantics remain owned by M.0. |

---

## 3. Artifact Semantic Concepts

### 3.1 Artifact

An **Artifact** is a governed semantic object that can be identified, classified, represented, discovered, consumed, related, versioned, and bound to metadata and lifecycle information.

An Artifact is not identical to a file, document, database row, graph node, message, template, runtime event, or tool output. Those are possible representations or projections.

### 3.2 Artifact Family

An **Artifact Family** is a governed grouping of artifact types that share a semantic purpose and consumption pattern.

Artifact Families organize artifact meaning. They do not create new framework root concepts.

### 3.3 Artifact Type

An **Artifact Type** is a named specialization within an Artifact Family.

Artifact Types describe what kind of artifact an instance is. They do not define implementation format, storage, execution, or workflow behavior.

### 3.4 Artifact Instance

An **Artifact Instance** is a particular artifact with identity and binding information.

An Artifact Instance may have one or more representations. The artifact remains the semantic object; representations are not the artifact itself.

### 3.5 Artifact Identity Binding

An **Artifact Identity Binding** connects an Artifact Instance to stable identity information.

Identity binding may include an identifier, title, canonical reference, aliases, version reference, or trace reference. M.1 defines that artifacts bind to identity; it does not redefine identity semantics.

### 3.6 Artifact Metadata Binding

An **Artifact Metadata Binding** connects an Artifact Instance to descriptive, governance, classification, consumption, and stewardship information.

Metadata binding makes artifact interpretation explicit. Metadata fields and standards may be specialized downstream, but artifact metadata binding remains an M.1 concept.

### 3.7 Artifact Relationship Binding

An **Artifact Relationship Binding** connects an Artifact Instance to explicit relationships with other semantic entities or artifacts.

M.1 owns the fact that artifacts can bind to relationships. M.0 owns what Relationship means. Relationship taxonomies and graph projections may be specialized downstream.

### 3.8 Artifact Lifecycle Binding

An **Artifact Lifecycle Binding** connects an Artifact Instance to lifecycle state or lifecycle interpretation.

M.1 owns the artifact binding to lifecycle information. It does not define lifecycle semantics, promotion procedures, approval workflows, or project state.

### 3.9 Artifact Version Binding

An **Artifact Version Binding** connects an Artifact Instance to version identity, version lineage, or version comparison information.

Version binding supports traceable artifact evolution. M.1 does not define release process, compatibility policy, migration procedure, or deployment behavior.

### 3.10 Artifact Schema Binding

An **Artifact Schema Binding** connects an Artifact Type or Artifact Instance to a structural expectation used for representation, validation, exchange, or interpretation.

Schema binding does not make M.1 a schema language, storage format, or validation engine.

### 3.11 Artifact Representation

An **Artifact Representation** is a concrete expression or projection of an artifact.

Representations may include documents, records, graph nodes, registry entries, packages, messages, rendered pages, or serialized structures. Representation choices do not change artifact identity or artifact semantics.

### 3.12 Artifact Classification

**Artifact Classification** assigns an Artifact Instance to an Artifact Family, Artifact Type, status category, sensitivity category, domain category, or consumption category.

Classification supports discovery and interpretation. Classification does not create authority unless bound to an authoritative rule outside M.1.

### 3.13 Artifact Discovery Interface

An **Artifact Discovery Interface** is the semantic surface by which consumers can find, identify, filter, resolve, or inspect artifacts.

M.1 defines the meaning of artifact discoverability. It does not define registry implementation, search tooling, indexes, APIs, commands, or storage.

### 3.14 Artifact Consumption Interface

An **Artifact Consumption Interface** is the semantic surface by which a consumer may interpret and use an artifact without redefining it.

Consumption interfaces express what a consumer needs to know: identity, family, type, representation, boundaries, authoritative references, version, schema binding, relationship binding, and relevant metadata.

---

## 4. Artifact Families

M.1 defines artifact families as semantic groupings only.

| Family | Meaning | Boundary |
|:---|:---|:---|
| Governance Artifact | Artifact that represents governance-relevant meaning or authority-bearing content. | Does not redefine authority semantics. |
| Meta Artifact | Artifact that defines or explains AI-DOS semantics. | Does not duplicate M.0 or M.1 ownership. |
| Standard Artifact | Artifact that states normative requirements for a domain. | Does not become Meta authority by stating rules. |
| Architecture Artifact | Artifact that describes structural or conceptual architecture. | Does not define runtime or engine execution. |
| Runtime Artifact | Artifact that represents runtime-domain information. | Does not define runtime semantics or procedures. |
| Engine Artifact | Artifact that represents engine-domain information. | Does not define engine semantics or procedures. |
| Agent Artifact | Artifact that represents agent-domain information. | Does not define agent semantics or procedures. |
| Command Artifact | Artifact that represents command-domain information. | Does not define command execution. |
| Workflow Artifact | Artifact that represents workflow-domain information. | Does not define workflow execution. |
| Template Artifact | Artifact that represents template-domain information. | Does not define template content requirements. |
| Knowledge Artifact | Artifact that captures or projects knowledge-domain information. | Does not redefine evidence, finding, decision, risk, or recommendation semantics. |
| Validation Artifact | Artifact that records validation-domain information. | Does not redefine validation semantics or validation procedure. |
| Review Artifact | Artifact that records review-domain information. | Does not redefine review procedures or approval authority. |
| Extension Artifact | Artifact that represents governed extension information. | Does not replace upstream Meta meanings. |
| Historical Artifact | Artifact preserved as historical source or context. | Does not constrain current canonical semantics. |

M.1 intentionally does not define planning artifact families as AI-DOS Meta responsibilities. Project planning belongs to Target Projects or downstream planning domains when explicitly authorized outside M.1.

---

## 5. Artifact Rules

1. Every Artifact Instance must have an Artifact Family and Artifact Type.
2. Every Artifact Instance must have identity binding sufficient for stable reference.
3. Every Artifact Instance must have metadata binding sufficient for interpretation.
4. Artifact relationship binding must use relationship semantics owned by M.0 or downstream relationship authorities.
5. Artifact lifecycle binding must not create project state or planning authority.
6. Artifact representation must not be confused with artifact identity.
7. Artifact classification must not create authority by itself.
8. Artifact discovery interfaces must expose enough semantic information for safe consumption.
9. Artifact consumption interfaces must preserve upstream meanings and boundaries.
10. Artifact semantics must remain Target-independent.

---

## 6. Discovery and Consumption Requirements

An artifact is discoverable when a consumer can determine:

- what artifact it is;
- which family and type it belongs to;
- which representation is being accessed;
- which version or lineage is relevant;
- what metadata is required for interpretation;
- which relationships are explicitly bound;
- which boundaries limit use;
- which authority applies through upstream semantics;
- whether it is current, superseded, deprecated, historical, or otherwise classified.

An artifact is consumable when a consumer can use it without inventing missing identity, classification, representation, authority, relationship, lifecycle, version, or schema assumptions.

---

## 7. Information Preservation Matrix

| Category | Concepts | Disposition | Reason |
|:---|:---|:---|:---|
| Preserved | Artifact, artifact family, artifact type, artifact instance. | Retained as M.1 core semantics. | Required for artifact classification and consumption. |
| Preserved | Identity, metadata, relationship, lifecycle, version, schema bindings. | Retained as artifact bindings. | Required to connect artifacts to upstream meanings without redefining them. |
| Preserved | Representation, classification, discovery, consumption. | Retained as artifact-specific semantics. | Required for downstream artifact use. |
| Relocated | Authority, ownership, relationship, evidence, validation root meanings. | Owned by M.0 and consumed through bindings. | Prevents duplicate authority. |
| Intentionally removed | Planning artifacts and project-state artifacts. | Removed from M.1 ownership. | M.1 does not own Target Project planning or project state. |
| Intentionally removed | Runtime, engine, agent, command, workflow, and template procedures. | Removed from M.1 ownership. | These are downstream domains, not artifact semantics. |
| Intentionally removed | Target Project-specific concepts. | Removed from active M.1 semantics. | AI-DOS is Target-independent. |
| Newly introduced | Artifact Discovery Interface and Artifact Consumption Interface. | Added as explicit artifact semantics. | Required for safe downstream consumption without implementation ownership. |

---

## 8. Semantic Ownership Matrix

| Concept | Owner | Notes |
|:---|:---|:---|
| Artifact root meaning | M.0 | M.1 consumes it. |
| Artifact Family | M.1 | Artifact grouping semantics. |
| Artifact Type | M.1 | Artifact specialization semantics. |
| Artifact Instance | M.1 | Particular artifact semantics. |
| Artifact Identity Binding | M.1 | Binding to identity information; identity meaning remains upstream. |
| Artifact Metadata Binding | M.1 | Binding to descriptive and governance information. |
| Artifact Relationship Binding | M.1 | Binding to relationships; relationship meaning remains upstream. |
| Artifact Lifecycle Binding | M.1 | Binding to lifecycle information; lifecycle meaning remains upstream or downstream as applicable. |
| Artifact Version Binding | M.1 | Binding to version information. |
| Artifact Schema Binding | M.1 | Binding to structural expectations. |
| Artifact Representation | M.1 | Concrete expression or projection semantics. |
| Artifact Classification | M.1 | Artifact category assignment semantics. |
| Artifact Discovery Interface | M.1 | Semantic discoverability surface. |
| Artifact Consumption Interface | M.1 | Semantic consumption surface. |
| Authority | M.0 | M.1 binds artifacts to authority; it does not define authority. |
| Relationship | M.0 | M.1 binds artifacts to relationships; it does not define relationship meaning. |
| Evidence | M.0 | M.1 may classify evidence artifacts but does not define evidence meaning. |
| Runtime, Engine, Agent, Command, Workflow, Template domains | Downstream domains | M.1 may classify their artifacts but does not own their semantics or procedures. |

---

## 9. Validation Report

| Validation | Result | Evidence |
|:---|:---|:---|
| Zero duplicate authority between M.0 and M.1 | Pass | M.1 consumes M.0 and owns only artifact semantics and artifact bindings. |
| No Target Project dependency | Pass | M.1 contains no active Target Project dependency. |
| No planning ownership | Pass | Planning artifacts are explicitly excluded from M.1 ownership. |
| No runtime ownership | Pass | Runtime artifacts may be classified, but runtime semantics and procedures are downstream. |
| No engine ownership | Pass | Engine artifacts may be classified, but engine semantics and procedures are downstream. |
| No workflow ownership | Pass | Workflow artifacts may be classified, but workflow execution is downstream. |
| No command ownership | Pass | Command artifacts may be classified, but command execution is downstream. |
| No template ownership | Pass | Template artifacts may be classified, but template content is downstream. |
| Semantic completeness | Pass | Required artifact concepts and bindings are defined. |
| Downstream consumer consistency | Pass | Discovery and consumption requirements define safe artifact use. |

---

## 10. Reconstruction Report

M.1 was reconstructed from first principles as an artifact-only semantic model. Historical concepts that belonged to artifact classification were preserved. Concepts that duplicated M.0 authority or belonged to runtime, engine, agent, command, workflow, template, planning, or Target Project domains were removed from M.1 ownership.

M.1 now defines artifacts as semantic objects with bindings and interfaces, while preserving a strict separation from framework root semantics and downstream execution domains.

---

## 11. Completion Status

AI-DOS META CORE RECONSTRUCTION COMPLETE.

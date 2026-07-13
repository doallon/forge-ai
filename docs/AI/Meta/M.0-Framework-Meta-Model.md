# M.0 — Framework Meta Model

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-M.0` |
| Title | M.0 — Framework Meta Model |
| Version | 1.0.0 |
| Status | Canonical Semantic Foundation |
| Classification | Framework Semantic Root |
| Document Type | Meta Model |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Reusable AI-DOS framework semantics. |
| Out of Scope | Artifact type-system details, implementation, runtime procedures, engine procedures, agent procedures, command execution, workflow execution, templates, Target Project planning, development sequencing, project state, and migration work. |

---

## 1. Purpose

M.0 is the Framework Semantic Root of AI-DOS.

AI-DOS is a reusable framework product. M.0 defines the foundational meanings used by every AI-DOS domain. It establishes the semantic vocabulary required for consistent interpretation across governance, standards, runtime specifications, engine specifications, agents, commands, workflows, templates, validation, review, knowledge, discovery, and operational core documents.

M.0 defines meanings only. It does not define implementation, runtime behavior, engine behavior, command behavior, workflow behavior, template content, project planning, or Target Project truth.

---

## 2. Authority Position

M.0 consumes only:

- Human Governance;
- constitutional authority.

M.0 is upstream of all AI-DOS domains that need framework semantics. Downstream domains may specialize M.0 concepts, but they may not redefine them.

M.0 does not consume or depend on any Target Project. Target Projects consume AI-DOS; they do not become AI-DOS semantic authority.

---

## 3. Design Principles

| Principle | Meaning |
|:---|:---|
| Product independence | AI-DOS semantics are reusable and independent of any Target Project. |
| Semantics before mechanism | M.0 defines meaning, not execution, storage, automation, or representation. |
| Minimal completeness | M.0 includes only concepts required to ground downstream AI-DOS domains. |
| Single semantic ownership | A foundational concept has one owning Meta source. |
| Downstream specialization | Domains specialize M.0 concepts without replacing their meanings. |
| Human-governed authority | M.0 does not override Human Governance or constitutional authority. |
| Evidence-grounded claims | Truth claims require evidence semantics, but evidence storage and procedure are downstream concerns. |

---

## 4. Core Semantic Concepts

### 4.1 AI-DOS Product

The **AI-DOS Product** is the reusable framework product whose semantics, standards, operational contracts, and domain structures are intended for use across independent Target Projects.

AI-DOS is not any Target Project. AI-DOS remains independent from the projects that develop, validate, or consume it.

### 4.2 Domain

A **Domain** is a bounded area of AI-DOS semantic responsibility.

A Domain may consume M.0 concepts and define domain-specific specializations. A Domain does not become a source of M.0 authority merely because it specializes M.0 concepts.

### 4.3 Semantic Entity

A **Semantic Entity** is any meaningful AI-DOS thing that can be named, described, related, constrained, governed, validated, or consumed.

Semantic Entity is the broadest meaning-bearing category in M.0. Artifact is a specialized Semantic Entity whose governance and representation details are owned by M.1.

### 4.4 Artifact

An **Artifact** is a governed Semantic Entity that can carry identity, metadata, representation, classification, lifecycle binding, and consumption boundaries.

M.0 owns the meaning of Artifact as a framework concept. M.1 owns artifact-specific semantics, families, types, instances, bindings, representations, classifications, discovery interfaces, and consumption interfaces.

### 4.5 Actor

An **Actor** is any accountable participant or participant class that can hold responsibility, make or request decisions, perform bounded work, consume context, produce artifacts, or provide evidence.

Actor semantics do not define agents, runtimes, users, roles, permissions, or implementation behavior. Those are downstream specializations.

### 4.6 Capability

A **Capability** is a bounded ability or responsibility that AI-DOS can describe, govern, validate, or provide through downstream domains.

Capability semantics define what an ability means and how it can be bounded. They do not define execution, scheduling, engines, commands, or workflow procedures.

### 4.7 Context

**Context** is bounded information assembled for interpretation, decision-making, validation, or downstream execution.

Context has scope, source, relevance, authority, and constraints. Context is not memory, runtime state, or project state unless a downstream domain explicitly specializes it that way.

### 4.8 Objective

An **Objective** is a desired outcome stated within a boundary and interpreted under authority and constraints.

Objectives guide decisions and validation. M.0 does not define plans, tasks, schedules, schedule markers, or execution procedures.

### 4.9 Constraint

A **Constraint** is a limiting condition that restricts interpretation, action, authority, relationship, validation, or acceptable outcome.

Constraints may arise from governance, scope, safety, policy, dependency, compatibility, or domain requirements. M.0 defines the meaning only.

### 4.10 Boundary

A **Boundary** is a semantic limit that separates what is inside scope, authority, responsibility, applicability, or consumption from what is outside it.

Boundaries prevent authority drift, Target contamination, and duplicate ownership.

### 4.11 Authority

**Authority** is the recognized right to define, approve, interpret, constrain, or change a semantic entity.

Authority establishes precedence. Authority is not implementation control, runtime permission, or ownership.

### 4.12 Ownership

**Ownership** is accountable semantic responsibility for the correctness, stewardship, and governed evolution of a semantic entity.

Ownership is semantic accountability. It does not define staffing, assignment mechanics, repository permissions, or operational execution.

### 4.13 Relationship

A **Relationship** is an explicit typed connection between semantic entities.

Relationship semantics define connection meaning, direction, source, target, and interpretation. Artifact relationship binding details are owned by M.1.

### 4.14 Evidence

**Evidence** is verifiable support for a claim, decision, finding, recommendation, risk, validation result, or review result.

Evidence semantics define support and traceability meaning. M.0 does not define evidence storage, collection procedures, runtime traces, or report formats.

### 4.15 Decision

A **Decision** is an authoritative selection among alternatives under stated context, objective, constraints, evidence, and authority.

A Decision may govern downstream interpretation or action. M.0 does not define decision-record templates or approval workflows.

### 4.16 Finding

A **Finding** is an evidence-supported observation or conclusion about a semantic entity, context, validation result, review result, risk, or downstream domain concern.

A Finding does not by itself create authority unless an authoritative domain or actor accepts it under governance.

### 4.17 Recommendation

A **Recommendation** is an evidence-informed proposed action, interpretation, or change.

A Recommendation is advisory until accepted by appropriate authority.

### 4.18 Risk

A **Risk** is a possible condition or event that may negatively affect objectives, correctness, safety, authority, compatibility, evidence quality, or downstream consumption.

Risk semantics identify uncertainty and potential impact. Risk handling procedures are downstream concerns.

### 4.19 Extension

An **Extension** is a governed specialization or addition that expands AI-DOS semantics without replacing upstream meanings.

Extensions must preserve M.0 ownership boundaries and Target independence.

### 4.20 Validation

**Validation** is the semantic act of determining whether a claim, artifact, interpretation, relationship, or result satisfies defined requirements or constraints.

Validation produces or consumes evidence. M.0 defines validation meaning only, not validation commands, tools, gates, workflows, or automation.

---

## 5. Semantic Ownership Rules

1. M.0 owns reusable framework semantics.
2. M.1 owns artifact semantics derived from M.0 Artifact.
3. Downstream domains own only their domain specializations.
4. No downstream domain may redefine M.0 concepts.
5. No Target Project may become AI-DOS semantic authority.
6. Runtime, engines, agents, commands, workflows, and templates consume M.0; they do not define it.
7. Planning concepts are not owned by M.0.

---

## 6. Downstream Consumer Consistency

| Consumer | M.0 Provides | Consumer Boundary |
|:---|:---|:---|
| Constitution | Stable framework vocabulary for authority and governance interpretation. | Does not use M.0 to bypass Human Governance. |
| Standards | Shared meanings for normative rules. | Does not redefine root concepts. |
| Runtime | Semantics for context, boundary, capability, evidence, and validation. | Does not turn M.0 into runtime procedure. |
| Engine Platform | Semantics for capability, actor, context, decision, finding, recommendation, and risk. | Does not turn M.0 into engine design. |
| Engine Specializations | Reusable semantic constraints and authority boundaries. | Does not redefine framework semantics. |
| Agents | Meanings for actor, objective, constraint, context, evidence, and validation. | Does not turn M.0 into agent procedure. |
| Commands | Meanings for capability, constraint, boundary, and validation. | Does not turn M.0 into command syntax. |
| Workflows | Meanings for objectives, decisions, findings, evidence, and risks. | Does not turn M.0 into workflow procedure. |
| Templates | Meanings to preserve semantic consistency in representation. | Does not turn M.0 into template content. |
| Operational Core | Shared semantic foundation for operational documents. | Does not redefine Meta authority. |

---

## 7. Information Preservation Matrix

| Category | Concepts | Disposition | Reason |
|:---|:---|:---|:---|
| Preserved | Artifact, authority, ownership, relationship, evidence, validation, capability, context. | Retained as reusable framework semantics. | These are required to ground downstream AI-DOS domains. |
| Preserved | Decision, finding, recommendation, risk. | Retained as semantic concepts. | These are required for evidence-grounded interpretation and review. |
| Relocated | Artifact family, artifact type, artifact instance, artifact bindings, representation, classification, discovery, consumption. | Owned by M.1. | These are artifact-specific semantics, not framework root definitions. |
| Intentionally removed | Development sequencing, project state ownership, work sequencing ownership, and schedule-marker ownership. | Removed from active M.0 semantics. | Planning is not part of the Meta semantic root. |
| Intentionally removed | Runtime procedures, engine procedures, command execution, workflow execution, templates. | Removed from M.0 ownership. | M.0 defines meanings only and is upstream of these domains. |
| Intentionally removed | Target Project references and Target Project dependency. | Removed from active semantics. | AI-DOS is Target-independent. |
| Newly introduced | AI-DOS Product, Domain, Semantic Entity, Objective, Constraint, Boundary, Extension. | Added as explicit root semantics. | These concepts are needed for minimal completeness and downstream consistency. |

---

## 8. Semantic Ownership Matrix

| Concept | Owner | Notes |
|:---|:---|:---|
| AI-DOS Product | M.0 | Reusable framework product identity. |
| Domain | M.0 | Bounded semantic responsibility area. |
| Semantic Entity | M.0 | Broadest meaning-bearing category. |
| Artifact meaning | M.0 | Root concept only. |
| Artifact families, types, instances, and bindings | M.1 | Artifact-specific semantics. |
| Actor | M.0 | Semantic participant concept only. |
| Capability | M.0 | Bounded ability or responsibility. |
| Context | M.0 | Bounded information for interpretation. |
| Objective | M.0 | Desired outcome semantics. |
| Constraint | M.0 | Limiting condition semantics. |
| Boundary | M.0 | Scope and authority limit semantics. |
| Authority | M.0 | Precedence and governing right semantics. |
| Ownership | M.0 | Semantic accountability. |
| Relationship | M.0 | Typed connection semantics. |
| Evidence | M.0 | Verifiable support semantics. |
| Decision | M.0 | Authoritative selection semantics. |
| Finding | M.0 | Evidence-supported observation semantics. |
| Recommendation | M.0 | Advisory proposed action semantics. |
| Risk | M.0 | Uncertainty and impact semantics. |
| Extension | M.0 | Governed semantic expansion. |
| Validation | M.0 | Semantic verification meaning only. |

---

## 9. Validation Report

| Validation | Result | Evidence |
|:---|:---|:---|
| Zero duplicate authority between M.0 and M.1 | Pass | M.0 owns framework semantics; M.1 owns artifact semantics and binding details. |
| No Target Project dependency | Pass | M.0 consumes only Human Governance and constitutional authority. |
| No planning ownership | Pass | Planning concepts are excluded from M.0 ownership. |
| No runtime ownership | Pass | Runtime is a downstream consumer only. |
| No engine ownership | Pass | Engine Platform and specializations are downstream consumers only. |
| No workflow ownership | Pass | Workflows consume M.0 semantics only. |
| No command ownership | Pass | Commands consume M.0 semantics only. |
| No template ownership | Pass | Templates consume M.0 semantics only. |
| Semantic completeness | Pass | Required root concepts are defined with boundaries. |
| Downstream consumer consistency | Pass | Consumer table states provided meanings and boundaries. |

---

## 10. Completion Status

AI-DOS META CORE RECONSTRUCTION COMPLETE.

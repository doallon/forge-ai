# AI-DOS Runtime and Engine Architecture Navigation Index

> AI-DOS Runtime family · Engine Platform · Engine Specialization · Navigation Index · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-RUNTIME-README` |
| Title | AI-DOS Runtime and Engine Architecture Navigation Index |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted by Human Governance |
| Classification | Runtime and Engine Architecture Navigation Index |
| Document Type | Repository Family README / Navigation Index |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-13 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V2.RUNTIME.README` |
| Scope | Internal AI-DOS Runtime and Engine family navigation, Runtime inventory, Engine Platform inventory, Engine Specialization inventory, family-level reading order, authority and ownership boundaries, status and classification summary, downstream-consumer guidance, and report/evidence mapping. |
| Out of Scope | Target Project entry, Target Project planning, live Target state, project execution order, Target Contract routing, project-specific activation decisions, redefining Runtime Architecture, redefining Engine Platform behavior, redefining Engine Specialization behavior, creating implementation scope, certifying Runtime documents, freezing Runtime documents, or updating external project state. |
| Normative Authority | Human Governance; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; applicable AI-DOS Constitution, Meta, and Standards authorities; A.3 Runtime Architecture; A.4 Engine Platform authorities. |
| Normative References | `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | Runtime RFC family documents under `docs/AI/Runtime/`; Runtime reports under `docs/AI/Runtime/Reports/`; AI-DOS Governance; Framework Governance; applicable AI-DOS Constitution, Meta, Standards, and Template authorities. |
| Consumes | Repository-derived Runtime inventory; Runtime RFC metadata; Runtime RFC relationship sections; Runtime report inventory; applicable AI-DOS governance, standards, template, and architecture instructions; Invocation Context; Resolved Target Context; Applicable Target Resources; Target Objectives; Target Constraints; Target Authority Inputs; Target Execution Boundaries; Target Validation Requirements. |
| Produces | Runtime family navigation index, Engine Platform navigation guide, Engine Specialization navigation guide, Runtime inventory, Runtime reading order, authority and non-redefinition boundaries, status and activation boundary summary, downstream Agent Architecture consumption guidance, Runtime report/evidence mapping, change-control expectations, and validation expectations. |
| Related Specifications | `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.4.1-Engine-Kernel-RFC.md`; `docs/AI/Runtime/A.4.2-Engine-Contract-RFC.md`; `docs/AI/Runtime/A.4.3-Engine-Registry-RFC.md`; `docs/AI/Runtime/A.4.4-Engine-Lifecycle-RFC.md`; `docs/AI/Runtime/A.4.5-Engine-Communication-RFC.md`; `docs/AI/Runtime/A.4.6-Engine-State-RFC.md`; `docs/AI/Runtime/A.4.7-Engine-Capability-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md`; `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Runtime/A.5.3-Planning-Engine-RFC.md`; `docs/AI/Runtime/A.5.4-Decision-Engine-RFC.md`; `docs/AI/Runtime/A.5.5-Execution-Engine-RFC.md`; `docs/AI/Runtime/A.5.6-Validation-Engine-RFC.md`; `docs/AI/Runtime/A.5.7-Review-Engine-RFC.md`; `docs/AI/Runtime/A.5.8-Certification-Engine-RFC.md`; `docs/AI/Runtime/A.5.9-Memory-Engine-RFC.md`; `docs/AI/Runtime/A.5.10-Governance-Engine-RFC.md`; `docs/AI/Runtime/A.5.11-Workflow-Engine-RFC.md`; `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md` |
| Supersedes | Runtime README version `0.1.0-draft` navigation language that included cross-boundary Target Project planning dependencies. |
| Superseded By | None |
| Promotion Requirements | Runtime inventory validation, metadata validation, navigation-link validation, Target dependency purity validation, Runtime / Engine / Agent authority-boundary validation, Framework Governance review, and Human Governance approval. |
| Certification Status | Not certified |

---

## 1. Purpose

This README is the internal AI-DOS Runtime and Engine Architecture navigation index. It helps humans and AI agents find the correct Runtime Architecture, Engine Platform, Engine Specialization, and Runtime report documents without creating a parallel Runtime authority.

This README is not a Runtime specification, Runtime RFC, Engine RFC, Engine Platform RFC, Engine Specialization RFC, Target Project entry point, Target planning document, live Target state document, Runtime audit, Runtime freeze review, Runtime freeze declaration, certification decision, or canonical-promotion record.

## 2. Runtime Authority Boundary

A.3 is the Runtime Architecture authority for the Runtime family. This README points to A.3 and summarizes its position in the family, but it does not redefine Runtime Architecture, Runtime ownership, Runtime authority, Runtime lifecycle, Runtime interfaces, Runtime governance, or Runtime implementation behavior.

## 3. Engine Platform Boundary

A.4 and A.4.1 through A.4.7 are the Engine Platform authorities. A.4 owns the Engine Architecture layer, and A.4.1 through A.4.7 own shared Engine Platform foundation topics: Kernel, Contract, Registry, Lifecycle, Communication, State, and Capability.

This README may describe their navigation order and relationship, but it must not redefine Engine Platform semantics, Engine Foundation behavior, Engine contracts, Engine registry rules, Engine lifecycle states, Engine communication protocols, Engine state models, or Engine capability models.

## 4. Engine Specialization Boundary

A.5.0 is the Engine Specialization RFC Template. A.5.1 through A.5.12 are individual Engine Specialization RFCs. They consume A.3 and A.4.x authorities and specialize Engine behavior for one Engine domain each.

This README identifies the specialization family and downstream consumption direction. It does not alter A.5.0 section requirements, individual Engine responsibilities, Engine handoff contracts, Engine lifecycle participation, validation rules, review rules, certification rules, or registry rules.

## 5. Complete Runtime Inventory

### 5.1 Runtime Inventory Matrix

| Artifact | Family | Authority Role | Status |
|:---|:---|:---|:---|
| [`A.3-Runtime-Architecture-RFC.md`](A.3-Runtime-Architecture-RFC.md) | Runtime Architecture | Owns Runtime Architecture authority. | Draft |
| [`A.4-Engine-Architecture-RFC.md`](A.4-Engine-Architecture-RFC.md) | Engine Platform | Owns Engine Architecture authority. | Draft |
| [`A.4.1-Engine-Kernel-RFC.md`](A.4.1-Engine-Kernel-RFC.md) | Engine Platform Foundation | Owns Engine Kernel architecture. | RFC / Draft |
| [`A.4.2-Engine-Contract-RFC.md`](A.4.2-Engine-Contract-RFC.md) | Engine Platform Foundation | Owns Engine Contract architecture. | RFC / Draft |
| [`A.4.3-Engine-Registry-RFC.md`](A.4.3-Engine-Registry-RFC.md) | Engine Platform Foundation | Owns Engine Registry architecture. | RFC / Draft |
| [`A.4.4-Engine-Lifecycle-RFC.md`](A.4.4-Engine-Lifecycle-RFC.md) | Engine Platform Foundation | Owns Engine Lifecycle architecture. | Draft |
| [`A.4.5-Engine-Communication-RFC.md`](A.4.5-Engine-Communication-RFC.md) | Engine Platform Foundation | Owns Engine Communication architecture. | Draft |
| [`A.4.6-Engine-State-RFC.md`](A.4.6-Engine-State-RFC.md) | Engine Platform Foundation | Owns Engine State architecture. | Draft |
| [`A.4.7-Engine-Capability-RFC.md`](A.4.7-Engine-Capability-RFC.md) | Engine Platform Foundation | Owns Engine Capability architecture. | Draft |
| [`A.5.0-Engine-Specialization-RFC-Template.md`](A.5.0-Engine-Specialization-RFC-Template.md) | Engine Specialization Template | Owns Engine Specialization RFC section contract. | Draft |
| [`A.5.1-Context-Engine-RFC.md`](A.5.1-Context-Engine-RFC.md) | Engine Specialization | Owns Context Engine architecture. | Draft |
| [`A.5.2-Knowledge-Engine-RFC.md`](A.5.2-Knowledge-Engine-RFC.md) | Engine Specialization | Owns Knowledge Engine architecture. | Draft |
| [`A.5.3-Planning-Engine-RFC.md`](A.5.3-Planning-Engine-RFC.md) | Engine Specialization | Owns Planning Engine architecture. | Draft |
| [`A.5.4-Decision-Engine-RFC.md`](A.5.4-Decision-Engine-RFC.md) | Engine Specialization | Owns Decision Engine architecture. | Draft |
| [`A.5.5-Execution-Engine-RFC.md`](A.5.5-Execution-Engine-RFC.md) | Engine Specialization | Owns Execution Engine architecture. | Draft |
| [`A.5.6-Validation-Engine-RFC.md`](A.5.6-Validation-Engine-RFC.md) | Engine Specialization | Owns Validation Engine architecture. | Draft |
| [`A.5.7-Review-Engine-RFC.md`](A.5.7-Review-Engine-RFC.md) | Engine Specialization | Owns Review Engine architecture. | Draft |
| [`A.5.8-Certification-Engine-RFC.md`](A.5.8-Certification-Engine-RFC.md) | Engine Specialization | Owns Certification Engine architecture. | Draft |
| [`A.5.9-Memory-Engine-RFC.md`](A.5.9-Memory-Engine-RFC.md) | Engine Specialization | Owns Memory Engine architecture. | Draft |
| [`A.5.10-Governance-Engine-RFC.md`](A.5.10-Governance-Engine-RFC.md) | Engine Specialization | Owns Governance Engine architecture. | Draft |
| [`A.5.11-Workflow-Engine-RFC.md`](A.5.11-Workflow-Engine-RFC.md) | Engine Specialization | Owns Workflow Engine architecture. | Draft |
| [`A.5.12-Registry-Engine-RFC.md`](A.5.12-Registry-Engine-RFC.md) | Engine Specialization | Owns Registry Engine architecture. | Draft |

### 5.2 Runtime Reports and Evidence

| Report | Evidence Role |
|:---|:---|
| [`Reports/A.5-Engine-RFC-Inventory-and-Compliance-Review.md`](Reports/A.5-Engine-RFC-Inventory-and-Compliance-Review.md) | Records A.5 Engine RFC inventory and compliance review evidence. |
| [`Reports/Engine-Architecture-Consistency-Review.md`](Reports/Engine-Architecture-Consistency-Review.md) | Records Engine Architecture consistency review evidence. |
| [`Reports/Engine-RFC-Certification-Review.md`](Reports/Engine-RFC-Certification-Review.md) | Records Engine RFC certification-readiness review evidence. |
| [`Reports/Phase-2-Engine-Foundation-Canonical-Review.md`](Reports/Phase-2-Engine-Foundation-Canonical-Review.md) | Records Engine Foundation canonical-review package evidence. |
| [`Reports/A.5-Post-Revision-Purity-and-Navigation-Validation.md`](Reports/A.5-Post-Revision-Purity-and-Navigation-Validation.md) | Records A.5 post-revision product-purity and navigation validation evidence. |

Reports are evidence artifacts. Reports do not own Runtime Architecture, Engine Platform Architecture, Engine Specialization Architecture, certification, canonical promotion, or Human Governance approval.

## 6. Required Reading Order

Use this AI-DOS-only reading order:

```text
Applicable AI-DOS Governance
    ↓
Constitution / Meta / Standards
    ↓
A.3 Runtime Architecture
    ↓
A.4 Engine Architecture
    ↓
A.4.1–A.4.7 Engine Platform RFCs as applicable
    ↓
A.5.0 Engine Specialization Template
    ↓
Relevant A.5 Engine RFCs
    ↓
AGENTS v2 or Operational Core only when required
```

Operationally, read the family in this order when the full Runtime / Engine stack is relevant:

1. [`../GOVERNANCE.md`](../GOVERNANCE.md)
2. [`../FrameworkGovernance.md`](../FrameworkGovernance.md)
3. [`../Architecture/`](../Architecture/)
4. [`../Meta/`](../Meta/)
5. [`../Architecture/Standards/`](../Architecture/Standards/)
6. [`A.3-Runtime-Architecture-RFC.md`](A.3-Runtime-Architecture-RFC.md)
7. [`A.4-Engine-Architecture-RFC.md`](A.4-Engine-Architecture-RFC.md)
8. [`A.4.1-Engine-Kernel-RFC.md`](A.4.1-Engine-Kernel-RFC.md)
9. [`A.4.2-Engine-Contract-RFC.md`](A.4.2-Engine-Contract-RFC.md)
10. [`A.4.3-Engine-Registry-RFC.md`](A.4.3-Engine-Registry-RFC.md)
11. [`A.4.4-Engine-Lifecycle-RFC.md`](A.4.4-Engine-Lifecycle-RFC.md)
12. [`A.4.5-Engine-Communication-RFC.md`](A.4.5-Engine-Communication-RFC.md)
13. [`A.4.6-Engine-State-RFC.md`](A.4.6-Engine-State-RFC.md)
14. [`A.4.7-Engine-Capability-RFC.md`](A.4.7-Engine-Capability-RFC.md)
15. [`A.5.0-Engine-Specialization-RFC-Template.md`](A.5.0-Engine-Specialization-RFC-Template.md)
16. Relevant A.5 Engine RFCs from A.5.1 through A.5.12.
17. Downstream Agent Architecture documents, such as [`../Architecture/Agents/README.md`](../Architecture/Agents/README.md), [`../Architecture/Agents/AGENTS-v2.md`](../Architecture/Agents/AGENTS-v2.md), or [`../Architecture/Agents/AGENTS-v2-Architecture.md`](../Architecture/Agents/AGENTS-v2-Architecture.md), only when the consumer must understand how AGENTS v2 consumes Runtime / Engine contracts.
18. Runtime reports in [`Reports/`](Reports/) only as evidence after the relevant RFC authorities have been read.

## 7. Target Context Consumption Boundary

Runtime and Engine documents may consume resolved task context without requiring a named Target planning methodology, source filename, lifecycle model, or planning category. Valid task-context inputs are limited to:

1. Invocation Context.
2. Resolved Target Context.
3. Applicable Target Resources.
4. Target Objectives.
5. Target Constraints.
6. Target Authority Inputs.
7. Target Execution Boundaries.
8. Target Validation Requirements.

Runtime and Engine documents must not require, route to, or depend on Target Project planning files, live Target operational state, Target lifecycle status, Target project stages, Target queues, or Target-specific protected-area documents as AI-DOS product authorities.

## 8. Authority and Non-Redefinition Matrix

| Family | Owns | Consumes | Must Not Own |
|:---|:---|:---|:---|
| AI-DOS Governance / Constitution / Meta / Standards | Product governance, constitutional constraints, meta-framework rules, terminology, metadata, and standards. | Human Governance decisions and approved AI-DOS product truth. | Engine specialization behavior, live Target state, or project-specific execution order. |
| A.3 Runtime Architecture | Runtime Architecture authority. | Applicable AI-DOS Governance, Constitution, Meta, and Standards. | Engine Platform specialization details, Engine Specialization behavior, Agent Architecture, or Target planning. |
| A.4 Engine Architecture | Engine Platform architecture authority. | A.3 and applicable AI-DOS governance, standards, and metadata authorities. | Individual Engine specialization behavior, Agent Architecture, or Target planning. |
| A.4.1–A.4.7 Engine Platform RFCs | Engine Kernel, Contract, Registry, Lifecycle, Communication, State, and Capability foundation authorities. | A.3, A.4, and applicable AI-DOS standards. | Individual A.5 Engine domain behavior, Agent Architecture, or Target planning. |
| A.5.0 Engine Specialization Template | Engine Specialization RFC structure and section contract. | A.3, A.4, A.4.1–A.4.7, and applicable standards. | Individual Engine architecture content, certification decisions, or Target planning. |
| A.5.1–A.5.12 Engine Specializations | One Engine specialization each. | A.5.0, A.3, A.4, applicable A.4.x authorities, and applicable peer Engine RFC contracts. | Runtime Architecture, Engine Platform foundations, Agent Architecture, Operational Core, live Target state, or Target planning methodology. |
| Agent Architecture / AGENTS v2 | Agent-side consumption of Runtime and Engine contracts. | Runtime / Engine authority as downstream input. | Upstream Runtime or Engine Platform authority. |
| Operational Core | Operational use of applicable AI-DOS contracts. | Runtime, Engine, Agent, and task-context inputs as applicable. | Upstream Runtime or Engine authority. |
| Runtime Reports | Evidence, findings, validation records, and review packages. | Runtime and Engine artifacts under review. | Architecture authority, certification approval, canonical promotion, or Human Governance approval. |
| Runtime README | Navigation, inventory, reading order, authority-boundary summary, and downstream-consumer guidance. | Runtime family artifacts, Runtime reports, and applicable AI-DOS governance/navigation authorities. | Runtime Architecture, Engine Platform behavior, Engine Specialization behavior, Target Project entry, Target planning, live Target state, project execution order, or project-specific activation decisions. |

## 9. Status and Activation Boundary

1. RFC status is defined by each artifact's own metadata.
2. Documentation existence is not implementation activation.
3. Review is not certification.
4. Certification is not canonical promotion.
5. Canonical promotion requires the applicable Human Governance and AI-DOS governance path.
6. Human Governance remains final for approval, certification acceptance, promotion, freeze, and activation decisions.
7. This README does not derive activation, execution priority, or implementation readiness from any Target Project status source or roadmap path.
8. Runtime reports record evidence and findings; they do not activate or promote the architecture they discuss.

## 10. Runtime / Engine / Agent Authority Direction

The internal AI-DOS authority and consumption direction is:

```text
AI-DOS Governance / Constitution / Meta / Standards
    ↓
A.3 Runtime Architecture
    ↓
A.4 Engine Platform
    ↓
A.5.0 Engine Specialization RFC Template
    ↓
A.5.1–A.5.12 Engine Specialization RFCs
    ↓
AGENTS v2 Agent Architecture consumption
    ↓
Operational Core consumption
```

Agent Architecture documents may consume Runtime and Engine contracts. They are downstream consumers and must not be treated as upstream authority over A.3, A.4, A.4.1–A.4.7, A.5.0, or A.5.1–A.5.12.

## 11. Runtime Family Relationships

| Relationship | Description |
|:---|:---|
| A.3 → A.4 | Runtime Architecture provides the Runtime layer consumed by Engine Architecture. |
| A.4 → A.4.x | Engine Architecture provides the platform model specialized by Engine Platform Foundation RFCs. |
| A.4.x → A.5.0 | Engine Platform Foundation RFCs provide shared constraints and concepts consumed by the Engine Specialization RFC Template. |
| A.5.0 → A.5.x | The specialization template provides the common structure and content contract for individual Engine Specialization RFCs. |
| A.5.1–A.5.12 | Individual Engine Specialization RFCs define one Engine each and reference peer Engines through explicit relationship sections. |
| RFCs → Reports | Reports review, assess, or package RFC evidence; reports do not redefine the RFCs they evaluate. |
| Runtime / Engine → Agent Architecture | Agent Architecture consumes applicable Runtime / Engine contracts downstream. |

## 12. AI Consumption Guidance

AI agents consuming the Runtime RFC family shall:

1. Start from this README for navigation only.
2. Read applicable AI-DOS governance, constitution, meta, terminology, metadata, standards, and template authorities before modifying Runtime-family documents.
3. Use the reading order in this README to avoid filesystem-order assumptions.
4. Treat A.3 as Runtime Architecture authority.
5. Treat A.4 as Engine Architecture authority.
6. Treat A.4.1 through A.4.7 as Engine Platform authorities only within their assigned topics.
7. Treat A.5.0 as the section-contract authority for Engine Specialization RFCs.
8. Treat A.5.1 through A.5.12 as individual Engine specialization authorities only within their assigned Engines.
9. Treat Agent Architecture and Operational Core as downstream consumers, not upstream Runtime or Engine authorities.
10. Consume only task-relevant Invocation Context, Resolved Target Context, Applicable Target Resources, Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, and Target Validation Requirements.
11. Report conflicts as findings rather than silently resolving them.
12. Avoid introducing implementation scope during documentation-only tasks.
13. Avoid declaring Runtime frozen, certified, approved, canonical, or activated without explicit Human Governance approval.

## 13. Reports and Evidence

Runtime reports under [`Reports/`](Reports/) are evidence and review artifacts. They may record inventory, compliance review, consistency review, certification-readiness review, canonical-review package evidence, or product-purity validation evidence.

Reports must not be used as architecture authority over A.3, A.4, A.4.1–A.4.7, A.5.0, or A.5.1–A.5.12 unless a future Human Governance action explicitly promotes a report into a normative artifact. Until such promotion, the RFC bodies and applicable AI-DOS governance documents remain the architecture authorities.

## 14. Change-Control Expectations

Changes to this README should occur when:

1. A Runtime family document is added, removed, renamed, superseded, or promoted through authorized governance.
2. A Runtime report is added, removed, renamed, or superseded through authorized governance.
3. Runtime family reading order changes through explicit architecture or governance authority.
4. Runtime ownership or authority boundaries change through explicit Human Governance approval.
5. Repository-normalization policy requires this README to reflect updated AI-DOS standards or templates.
6. A navigation link is found to be broken or cross-boundary.

Changes to this README shall not be used to change the architecture owned by A.3, A.4, A.4.x, A.5.0, or A.5.x documents.

## 15. Validation Expectations

Validation for this README includes:

1. Metadata table is present and includes mandatory navigation fields.
2. Separation-of-concerns expectations are preserved.
3. RFC-template context is consumed only as template context and is not redefined.
4. Runtime inventory is repository-derived from `docs/AI/Runtime/` and `docs/AI/Runtime/Reports/`.
5. Every A.3, A.4, A.4.1–A.4.7, and A.5.0–A.5.12 Runtime RFC is referenced.
6. Runtime reports under `docs/AI/Runtime/Reports/` are referenced as evidence.
7. Ownership is not duplicated or transferred from RFCs to this README.
8. Navigation links resolve relative to this README.
9. Reading order is coherent with the Runtime / Engine authority hierarchy.
10. Target Project planning and live state dependencies are absent from active README authority, dependency, and navigation fields.
11. No Runtime RFC is modified by README maintenance unless separately authorized.

## 16. Related Documents

| Document | Relationship |
|:---|:---|
| [`../GOVERNANCE.md`](../GOVERNANCE.md) | AI-DOS governance navigation and authority reference. |
| [`../FrameworkGovernance.md`](../FrameworkGovernance.md) | Framework governance decision-policy authority. |
| [`../Architecture/`](../Architecture/) | AI-DOS architecture family navigation. |
| [`../Meta/`](../Meta/) | AI-DOS meta-framework navigation. |
| [`../Architecture/Standards/`](../Architecture/Standards/) | AI-DOS standards navigation. |
| [`../Architecture/Standards/STD-003-Terminology-Standard.md`](../Architecture/Standards/STD-003-Terminology-Standard.md) | Canonical terminology standard. |
| [`../Architecture/Standards/STD-010-Document-Metadata-Standard.md`](../Architecture/Standards/STD-010-Document-Metadata-Standard.md) | Document metadata standard. |
| [`../Templates/Standards/TPL-000-Template-Standard.md`](../Templates/Standards/TPL-000-Template-Standard.md) | Template governance standard. |
| [`../Templates/Standards/TPL-001-RFC-Template-Standard.md`](../Templates/Standards/TPL-001-RFC-Template-Standard.md) | RFC template standard. |
| [`../Architecture/Agents/README.md`](../Architecture/Agents/README.md) | Downstream Agent Architecture navigation that consumes Runtime / Engine contracts. |
| [`../Architecture/Agents/AGENTS-v2.md`](../Architecture/Agents/AGENTS-v2.md) | Downstream AGENTS v2 contract consumer of Runtime / Engine contracts. |
| [`../Architecture/Agents/AGENTS-v2-Architecture.md`](../Architecture/Agents/AGENTS-v2-Architecture.md) | Downstream Agent Architecture specification consumer of Runtime / Engine contracts. |

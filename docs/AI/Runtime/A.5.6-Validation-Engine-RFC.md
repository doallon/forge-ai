# A.5.6 — Validation Engine RFC

> Forge AI v4 · Engine Architecture RFC
> Phase 2 Engine Specialization · Draft / Non-canonical

---

## 1. Status

This RFC is a draft, non-canonical Engine Architecture RFC for the Validation Engine, the sixth individual Engine specialization in Phase 2 of the Forge AI v4 Engine Platform.

Canonical Status: Non-canonical until reviewed and approved.

This document defines the architecture of the Validation Engine within the approved Engine Platform. It specializes the Engine Platform by defining the Validation Engine's purpose, responsibilities, inputs, outputs, internal model, operations, events, ownership, and handoff contract. It does not redefine runtime, metadata, terminology, artifacts, engine lifecycle, engine state, registry, capability, authority, ownership, implementation, persistence, platform adapter, agent runtime, swarm runtime, or ProjectStatus models established upstream.

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-A-005.6` |
| Title | A.5.6 — Validation Engine RFC |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed and approved |
| Classification | Engine Architecture RFC |
| Document Type | RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-08 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V4.PHASE-2.ENGINE-06` |
| Scope | Architecture of the Validation Engine — the Engine responsible for multi-level verification of plans, decisions, step results, and system state consistency; validation rule management; compliance checking; anomaly detection; and validation lifecycle governance within the Forge AI v4 Engine Platform. |
| Out of Scope | Source code, implementation, REST APIs, persistence mechanisms, database schema, Neo4j implementation, vector database configuration, caching infrastructure, LLM call orchestration, prompt engineering, model selection, agent runtime design, swarm runtime design, platform adapter specifications, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md` |
| Dependencies | Runtime Architecture (A.3); Engine Platform (A.4); Engine Kernel (A.4.1); Engine Contract (A.4.2); Engine Registry (A.4.3); Engine Lifecycle (A.4.4); Engine Communication (A.4.5); Engine State (A.4.6); Engine Capability (A.4.7); Metadata Standard (STD-010); Terminology Standard (STD-003); Engine Specialization RFC Template (A.5.0); Context Engine (A.5.1); Knowledge Engine (A.5.2); Planning Engine (A.5.3); Decision Engine (A.5.4); Execution Engine (A.5.5) |
| Consumes | Document metadata rules; canonical terminology; framework and artifact meta-models; Runtime Architecture; Engine Platform architecture; Engine Kernel, Contract, Registry, Lifecycle, Communication, State, and Capability RFCs; A.5.0 Template section contract; A.5.1 Context Engine resolved context snapshots; A.5.2 Knowledge Engine constraint entities, rule sets, and domain knowledge; A.5.3 Planning Engine validated plans, dependency graphs, and success criteria; A.5.4 Decision Engine authorized decision artifacts, evaluation summaries, and risk assessments; A.5.5 Execution Engine step results, execution records, and side effects |
| Produces | Validation Engine architecture specification; multi-level validation model; validation rule taxonomy; compliance checking contract; anomaly detection model; validation report structure; validation lifecycle governance; validation handoff contract; validation ownership definition |
| Related Specifications | A.5.1 — Context Engine RFC; A.5.2 — Knowledge Engine RFC; A.5.3 — Planning Engine RFC; A.5.4 — Decision Engine RFC; A.5.5 — Execution Engine RFC; A.5.7 — Memory Engine RFC (future) |
| Supersedes | None |
| Superseded By | None |
| Blocks | A.5.7 — Memory Engine RFC (Validation Engine must be certified before Memory Engine enters review) |
| Blocked By | A.5.1 — Context Engine RFC (Context Engine must be certified); A.5.2 — Knowledge Engine RFC (Knowledge Engine must be certified); A.5.3 — Planning Engine RFC (Planning Engine must be certified); A.5.4 — Decision Engine RFC (Decision Engine must be certified); A.5.5 — Execution Engine RFC (Execution Engine must be certified) |
| Promotion Requirements | Framework Governance review, STD-010 metadata validation, STD-003 terminology validation, Engine Platform alignment review, no implementation-scope confirmation, A.4.7 capability domain mapping, Context Engine, Knowledge Engine, Planning Engine, Decision Engine, and Execution Engine alignment review, approval by Human Governance / Framework Governance, and explicit canonical promotion |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 3. Purpose

The Validation Engine exists to provide independent, multi-level verification of the artifacts produced and consumed by the Engine Platform's pipeline. While the Planning Engine validates plans before handoff, the Decision Engine validates decisions before authorization, and the Execution Engine validates inputs before execution, each of these validations is performed by the producing Engine itself — a self-assessment model. The Validation Engine provides cross-cutting, independent verification that operates on the outputs of all upstream Engines, ensuring that no single Engine's self-validation is the sole quality gate.

Validation, in the context of this Engine, is the deterministic evaluation of an artifact against a defined set of validation rules to produce a structured validation report. Validation operates at four levels: step-level (verifying individual step results), plan-level (verifying plan structural correctness and goal achievement), decision-level (verifying decision integrity and criteria consistency), and system-level (verifying cross-artifact consistency and system state coherence). Each level produces its own validation report, and levels can be composed into comprehensive validation sessions.

Without a dedicated Validation Engine, the system would rely entirely on self-validation by producing Engines. This creates a single point of quality failure: if a producing Engine's validation logic has a defect, no independent check catches it. The Validation Engine eliminates this risk by providing an orthogonal verification layer that uses its own rule definitions, its own evaluation logic, and its own compliance criteria — independent of the producing Engines' internal validation.

The Validation Engine's purpose aligns with Engine Capability domain "Quality Assurance" as defined by A.4.7. The Validation Engine uniquely owns the capability of performing independent, multi-level verification of pipeline artifacts, detecting anomalies, checking compliance against governance-defined constraints, and producing authoritative validation reports that serve as the system's quality evidence.

The Validation Engine does not produce plans, decisions, or step results — those are the responsibilities of the Planning, Decision, and Execution Engines respectively. The Validation Engine defines the architectural contract for validation operations: what constitutes a valid artifact at each level, how compliance is checked, how anomalies are detected and classified, and how validation results are reported and consumed.

---

## 4. Mission

The mission of the Validation Engine is to provide independent, deterministic, multi-level verification of pipeline artifacts, producing authoritative validation reports that serve as the system's quality evidence and trigger corrective actions when deficiencies are detected.

This mission translates into five mission-level objectives:

1. **Independence** — The Validation Engine performs verification using its own rule definitions and evaluation logic, independent of the producing Engines' self-validation. A plan that passes the Planning Engine's internal validation may still fail the Validation Engine's independent plan-level validation. This independence ensures that no single Engine's validation defect goes undetected.

2. **Multi-Level Coverage** — The Validation Engine verifies artifacts at four levels: step-level (individual step result correctness), plan-level (plan structural integrity and goal achievement), decision-level (decision criteria consistency and risk assessment integrity), and system-level (cross-artifact consistency and state coherence). This layered approach ensures comprehensive quality coverage.

3. **Determinism** — Given the same artifact, the same validation rules, and the same context, the Validation Engine produces the same validation report. This supports reproducibility, auditability, and the ability to track validation quality over time. No validation result is based on randomness, heuristics, or AI inference.

4. **Compliance Enforcement** — The Validation Engine checks artifacts against governance-defined compliance rules that may not be known to or enforced by the producing Engines. These include regulatory constraints, organizational policies, and cross-domain consistency requirements that span multiple Engines' outputs.

5. **Actionability** — Every validation report includes not only pass/fail/warning determinations but also structured defect descriptions that identify the specific rule violated, the artifact element that violates it, the expected state, and the actual state. This enables the Planning Engine, Decision Engine, or governance to take targeted corrective action.

---

## 5. Engine Responsibilities

The Validation Engine is accountable for the following architectural responsibilities, grouped by functional domain:

### 5.1 Validation Request Intake

- Receive validation requests that specify the target artifact type (step result, plan, decision, or system state), the artifact reference, the validation level, and optional rule overrides.
- Validate that the referenced artifact exists and is accessible from the producing Engine.
- Determine which validation rules apply based on the artifact type, domain, and governance policy.
- Classify the validation request by urgency (routine, priority, expedited) and schedule accordingly.

### 5.2 Step-Level Validation

- Verify that individual step results match their plan step's expected postconditions.
- Verify that step preconditions documented at execution time are consistent with the plan step's defined preconditions.
- Verify that step side effects are documented and do not violate domain constraints.
- Verify that step execution duration and resource consumption are within expected bounds (if bounds are defined).
- Verify that step results are internally consistent (outcome matches postcondition status, no contradictions).
- Produce a step-level validation report with per-rule pass/fail/warning determinations.

### 5.3 Plan-Level Validation

- Verify that the plan's dependency graph is acyclic and has a valid topological ordering.
- Verify that all plan steps have unique identifiers and complete definitions (preconditions, postconditions, expected outcomes).
- Verify that the plan's success criteria are satisfiable by the plan's step postconditions (goal coverage).
- Verify that the plan's constraints are consistent with domain knowledge constraints.
- Verify that the plan's knowledge references are valid and the referenced knowledge entities are not deprecated.
- Verify that the plan's context references are valid and within the freshness window.
- Produce a plan-level validation report with per-rule pass/fail/warning determinations.

### 5.4 Decision-Level Validation

- Verify that the decision artifact references a valid, validated plan version.
- Verify that all evaluated plans were scored using the same criteria set and scoring model (evaluation consistency).
- Verify that the selected plan's aggregate score is consistent with the scoring model applied.
- Verify that the risk assessment is complete (all evaluated plans have risk assessments, critical risks have mitigation recommendations).
- Verify that the selection rationale references specific criterion scores and risk factors.
- Verify that the decision was authorized through the correct authorization path (no bypassed escalations).
- Produce a decision-level validation report with per-rule pass/fail/warning determinations.

### 5.5 System-Level Validation

- Verify cross-artifact consistency: the decision references the plan it authorized, the execution references the decision it implemented, and all artifact versions form a consistent chain.
- Verify that the context state after execution is consistent with the step results' documented postconditions and side effects.
- Verify that no artifact in the active pipeline has been superseded without the downstream artifacts being updated.
- Verify that the overall system state is coherent (no orphaned references, no contradictory state elements, no unresolved dependencies across artifacts).
- Produce a system-level validation report with per-rule pass/fail/warning determinations.

### 5.6 Anomaly Detection

- Detect deviations from expected patterns without requiring explicit rule violations. Anomalies include: unusual step execution durations, unexpected resource consumption patterns, validation scores that deviate significantly from historical averages, and cross-artifact inconsistencies that are not caught by individual validation rules.
- Classify anomalies by severity (informational, minor, major, critical) based on deviation magnitude and impact.
- Produce anomaly reports that document the detected anomaly, the expected pattern, the observed deviation, the classification, and recommended investigation actions.

### 5.7 Validation Lifecycle Management

- Manage validation sessions through their lifecycle: requested, in-progress, completed, archived.
- Track validation history for each artifact, enabling trend analysis and quality tracking over time.
- Support re-validation when artifacts are revised or when new validation rules are introduced.
- Archive completed validation reports for historical reference, auditability, and governance review.

---

## 6. Non Responsibilities

The Validation Engine is explicitly not responsible for the following concerns. Each non-responsibility is paired with the component that owns it:

| Non-Responsibility | Owned By |
|:---|:---|
| Generating plans or decomposing goals | Planning Engine (A.5.3) |
| Evaluating plans or making decisions | Decision Engine (A.5.4) |
| Executing plan steps | Execution Engine (A.5.5) |
| Managing real-time contextual state | Context Engine (A.5.1) |
| Managing persistent knowledge and retrieval | Knowledge Engine (A.5.2) |
| Long-term memory and learning from past validations | Memory Engine (A.5.7, future) |
| Persisting validation reports to durable storage | Platform persistence layer (out of scope) |
| Defining validation rules and compliance criteria | Human Governance / Framework Governance |
| Taking corrective action based on validation findings | Producing Engines (Planning, Decision, Execution) and Governance |
| Resource allocation and provisioning | Platform resource management (out of scope) |
| Governing Engine Platform behaviour | Framework Governance |
| Managing Engine lifecycle transitions | Engine Lifecycle (A.4.4) |
| Managing inter-Engine communication transport | Engine Communication (A.4.5) |
| Maintaining the Engine capability registry | Engine Registry (A.4.3) |
| Invoking LLMs for validation, anomaly detection, or compliance checking | AI Consumption layer (out of scope) |
| Producing new artifacts or modifying existing ones | Producing Engines |

The Validation Engine's boundary is defined by the transition from artifact input to validation report output. It defines the architectural contract for validation operations without implementing corrective actions, rule authoring, or persistence.

---

## 7. Engine Position

### 7.1 Topological Position

The Validation Engine is an orthogonal verification layer that operates across the entire pipeline. It does not sit in a single linear position but instead consumes outputs from multiple upstream Engines and produces validation reports for multiple consumers.

```
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │   Context     │  │  Knowledge   │  │  Planning    │  │  Decision    │  │  Execution   │
  │   Engine      │  │  Engine      │  │  Engine      │  │  Engine      │  │  Engine      │
  │  (A.5.1)      │  │  (A.5.2)     │  │  (A.5.3)     │  │  (A.5.4)     │  │  (A.5.5)     │
  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
         │                 │                 │                 │                 │
         │                 │                 │                 │                 │
         └────────────┬────┴────────┬────────┴────────┬────────┘                 │
                      │             │                 │                          │
                      │    (plans, decisions, step results, context)            │
                      │             │                 │                          │
                      └─────────────┼─────────────────┼──────────────────────────┘
                                    │                 │
                                    ▼                 ▼
                     ┌─────────────────────────────────────────────┐
                     │            Validation Engine                 │
                     │              (A.5.6)                        │
                     │  Intake → Route → Evaluate → Detect →       │
                     │  Report → Archive                           │
                     └────────┬──────────┬──────────┬──────────────┘
                              │          │          │
                       ┌──────┘          │          └──────┐
                       ▼                 ▼                 ▼
                  ┌──────────┐    ┌──────────┐       ┌──────────┐
                  │Planning  │    │  Memory  │       │Governance│
                  │ Engine   │    │  Engine  │       │          │
                  │ (A.5.3)  │    │ (A.5.7)  │       │(Framework)│
                  └──────────┘    └──────────┘       └──────────┘
```

### 7.2 Data Flow Characterization

The Validation Engine has a multi-source, multi-consumer data flow pattern:

- **From Execution Engine** — Step results, execution records, and side effects for step-level and system-level validation. This is the highest-volume validation input.
- **From Decision Engine** — Decision artifacts, evaluation summaries, and risk assessments for decision-level validation.
- **From Planning Engine** — Validated plans, dependency graphs, and validation reports for plan-level validation and cross-validation against the Planning Engine's own validation.
- **From Context Engine** — Resolved context snapshots for state consistency verification and system-level validation.
- **From Knowledge Engine** — Constraint entities, compliance rules, and domain knowledge for compliance checking and rule evaluation.
- **To Planning Engine** — Plan-level validation reports that may trigger plan revision.
- **To Decision Engine** — Decision-level validation reports that may trigger decision re-evaluation.
- **To Execution Engine** — Step-level validation reports that may trigger step re-execution or plan revision.
- **To Memory Engine** — Validation reports for quality trend analysis and pattern recognition.
- **To Framework Governance** — Critical validation failures, compliance violations, and anomaly reports for governance review and action.

The Validation Engine's topology is an inspector — it receives artifacts from multiple sources, applies verification rules, and produces validation reports to multiple consumers. It is read-only with respect to the artifacts it validates; it never modifies the artifacts under validation.

### 7.3 Unavailability Impact

If the Validation Engine is unavailable, no independent verification of pipeline artifacts occurs. The system continues to operate using the producing Engines' self-validation only. This means that any defect in a producing Engine's self-validation logic goes undetected until the Validation Engine recovers. The quality assurance capability is degraded but not halted. The Engine Platform's graceful degradation model (A.4.4) should define whether certain operations require Validation Engine approval before proceeding — the Validation Engine defines what it validates but does not define whether its approval is a hard gate for other Engines.

---

## 8. Consumed Inputs

The Validation Engine requires the following typed inputs:

### 8.1 Validation Requests

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Validation Request | Structured request (artifact type, artifact reference, validation level, rule overrides, urgency, requesting Engine) | Peer Engines, governance, automated triggers | Artifact type valid; artifact reference accessible; validation level valid | Request rejected; rejection notice with specific errors |
| Re-validation Request | Structured request (original validation ID, reason for re-validation) | Governance, rule update triggers | Original validation exists; reason documented | Request rejected if original validation not found |
| Validation Query | Structured request (validation ID, artifact reference, query type) | Peer Engines, audit systems, governance | Identifier format valid | Query rejected with "not found" if not found |

### 8.2 Artifact Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Step Result | Versioned step result with outcome, preconditions, postconditions, side effects, duration, resource consumption | Execution Engine (A.5.5) | Step result immutable; references valid execution context | Validation skipped; artifact inaccessible error |
| Decision Artifact | Versioned decision artifact with evaluation summaries, risk assessment, selection rationale | Decision Engine (A.5.4) | Decision in "authorized" state; all attachments present | Validation skipped; artifact inaccessible error |
| Validated Plan | Versioned plan with steps, dependencies, constraints, success criteria, validation report | Planning Engine (A.5.3) | Plan accessible; dependency graph present | Validation skipped; artifact inaccessible error |
| Execution Record | Full execution record with step results, phase summaries, and timing | Execution Engine (A.5.5) | Record complete; all step results present | Validation proceeds with available data; missing data flagged |
| Context Snapshot | Versioned resolved context | Context Engine (A.5.1) | Snapshot version valid and accessible | Validation proceeds with last known context; staleness flagged |

### 8.3 Knowledge and Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Validation Rules | Rule definitions for each validation level and domain | Governance configuration, Knowledge Engine | Rule structure valid; rule ID unique | Default rules applied; missing custom rules flagged |
| Compliance Criteria | Governance-defined compliance constraints | Knowledge Engine (A.5.2) | Criteria validated and active | Compliance checks skipped; compliance gap flagged |
| Constraint Entities | Domain constraints for artifact verification | Knowledge Engine (A.5.2) | Constraint entities validated and active | Constraint checks use default constraints; gaps flagged |
| Anomaly Thresholds | Deviation thresholds for anomaly detection | Engine configuration | Threshold values within valid ranges | Default thresholds applied |
| Validation Policy | Rules for validation scheduling, re-validation triggers, and criticality classification | Governance configuration | Policy structure valid | Default policy applied |

All inputs are versioned. Validation requests carry a request identifier and timestamp. Artifact references carry the producing Engine's version identifier. Knowledge references carry the Knowledge Engine entity versions used.

---

## 9. Produced Outputs

### 9.1 Validation Reports

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Step Validation Report | Per-step validation results with per-rule pass/fail/warning, defect descriptions, and anomaly flags | Execution Engine, Planning Engine, audit systems | Immutable per validation session | All applicable rules evaluated; defect descriptions complete |
| Plan Validation Report | Per-plan validation results covering structure, dependencies, goal coverage, knowledge consistency, and context validity | Planning Engine, Decision Engine, audit systems | Immutable per validation session | All applicable rules evaluated; goal coverage analysis complete |
| Decision Validation Report | Per-decision validation results covering evaluation consistency, scoring integrity, risk completeness, and authorization correctness | Decision Engine, audit systems, governance | Immutable per validation session | All applicable rules evaluated; scoring consistency verified |
| System Validation Report | Cross-artifact consistency and state coherence validation results | All peer Engines, governance, audit systems | Immutable per validation session | All cross-artifact references verified; state coherence confirmed |

### 9.2 Anomaly Reports

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Anomaly Report | Detected anomalies with severity classification, expected pattern, observed deviation, and recommended investigation | Governance, producing Engines, audit systems | Immutable per validation session | Anomaly classification justified; deviation quantified |

### 9.3 Validation Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Validation Summary | Per-session summary of all validation levels executed, overall outcome (pass/fail/warning), rule counts, and defect counts | Audit systems, governance, Memory Engine | Immutable per validation session | All levels accounted for; counts accurate |
| Compliance Statement | Per-artifact compliance status against governance-defined criteria | Governance, audit systems | Immutable per validation session | All applicable compliance criteria evaluated |

### 9.4 Validation Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Validation Started | Event emitted when a validation session begins | Audit systems, governance | Event-scoped; references validation request | Request valid and accepted |
| Validation Completed | Event emitted when a validation session finishes | Requesting Engine, governance, audit systems | Event-scoped; references validation report | All requested validation levels completed |
| Validation Failed | Event emitted when a validation session cannot complete (artifact inaccessible, rule evaluation error) | Requesting Engine, audit systems | Event-scoped; references failure reason | Failure reason documented |
| Critical Finding | Event emitted when a critical validation rule fails | Framework Governance, producing Engine, audit systems | Event-scoped; references rule, artifact, and defect | Critical severity justified |
| Anomaly Detected | Event emitted when an anomaly is detected | Governance, producing Engine, audit systems | Event-scoped; references anomaly classification | Anomaly severity and description complete |

All validation reports are immutable once produced. Re-validation produces a new validation report with a new identifier. Output contracts are explicit enough for consuming Engines to parse and act on validation results.

---

## 10. Engine Lifecycle

### 10.1 Initialization

The Validation Engine initializes when the Engine Platform starts. During initialization:

- Registers with the Engine Registry (A.4.3) as a Quality Assurance capability provider.
- Loads configuration inputs (validation rules, anomaly thresholds, validation policy, compliance criteria references).
- Establishes communication channels with all upstream Engines (Context, Knowledge, Planning, Decision, Execution) and potential consumers via the Engine Communication model (A.4.5).
- Subscribes to artifact production events from the Execution Engine (step results), Decision Engine (decision authorized), and Planning Engine (plan validated) for automated validation triggers.
- Emits a `Validation Engine Initialized` event.

### 10.2 Startup

After initialization:

- Confirms connectivity with all upstream Engines (Context, Knowledge, Planning, Decision, Execution).
- Verifies that artifact retrieval and knowledge retrieval operations succeed.
- Performs a readiness check by processing a test validation request with a known artifact.
- Transitions to steady-state operation upon successful readiness confirmation.

### 10.3 Steady-State Operation

In steady state, the Validation Engine:

- Accepts and processes validation requests (step-level, plan-level, decision-level, system-level).
- Processes automated validation triggers based on subscribed events.
- Monitors for validation rule updates from governance or Knowledge Engine.
- Processes validation queries from peer Engines, audit systems, and governance.
- Produces validation reports, anomaly reports, and compliance statements.

The Validation Engine operates on a request-driven model — it validates artifacts when requested, not on a periodic cycle. Automated triggers are processed asynchronously. The Validation Engine may also operate on a scheduled model if governance configures periodic re-validation of active artifacts.

### 10.4 Degradation

If the Knowledge Engine is temporarily unavailable, the Validation Engine continues to validate using loaded rules and constraints, flagging knowledge-dependent checks as "not evaluated" in the validation report. If a producing Engine is temporarily unavailable, the Validation Engine cannot retrieve the referenced artifact and skips that validation with an "artifact inaccessible" status. If the Validation Engine itself is degraded (e.g., elevated processing latency), it continues to accept requests but may deprioritize non-critical validations, emitting a `Validation Engine Degraded` event.

### 10.5 Shutdown

During graceful shutdown:

- Stops accepting new validation requests.
- Completes in-progress validation sessions or marks them for resubmission.
- Persists all active validation state (in-progress sessions, validation history).
- Emits a `Validation Engine Shutdown` event with a summary of active sessions.
- Deregisters from the Engine Registry.

Non-graceful shutdown results in state loss for in-progress validations. Recovery-critical state (validation reports, validation history) must be persisted before shutdown completes.

### 10.6 Recovery

On restart after non-graceful shutdown:

- Re-registers with the Engine Registry.
- Re-establishes communication channels.
- Re-subscribes to artifact production events.
- Recovers validation history from the persistence layer.
- Re-evaluates any artifacts that were being validated at shutdown (treat as new validation requests).
- Emits a `Validation Engine Recovered` event.
- Resumes steady-state operation.

Recovery-critical state: completed validation reports, validation history, and configuration inputs. In-progress validation sessions are transient and do not survive restart.

---

## 11. Internal Engine Model

### 11.1 Conceptual Overview

The Validation Engine's internal model consists of five processing stages that transform an artifact into a validation report:

```
Validation Intake → Rule Router → Rule Evaluator → Anomaly Detector → Report Assembler
       ↑                                                                  │
       │              ┌───────────────────────────────────────────────────┘
       │              │
       └──────────────┘
                    (re-validation: completed validations may be
                     re-triggered when artifacts are revised or rules updated)
```

### 11.2 Validation Intake

The Validation Intake stage receives and processes validation requests:

1. **Request Validation** — Validates the request structure: artifact type valid, artifact reference accessible from the producing Engine, validation level appropriate for the artifact type, rule overrides structurally valid.

2. **Artifact Retrieval** — Retrieves the target artifact from the producing Engine. For system-level validation, retrieves all relevant artifacts (plan, decision, execution record, context) that form the validation scope.

3. **Rule Resolution** — Determines the applicable rule set by merging the base validation rules (governance-configured) with any request-level rule overrides. Overrides take precedence for specific rules. Resolves compliance criteria from the Knowledge Engine.

4. **Context Retrieval** — Pulls the current context snapshot from the Context Engine for state-dependent validation checks.

5. **Session Creation** — Creates a validation session that binds the artifact, rule set, and validation level. The session is assigned a unique identifier and enters the "in-progress" lifecycle state.

The Validation Intake stage is deterministic: the same request and the same upstream state produce the same session configuration.

### 11.3 Rule Router

The Rule Router determines which validation rules apply to the current artifact and organizes them for evaluation:

1. **Level Classification** — Routes the validation to the appropriate level (step, plan, decision, system) based on the artifact type and requested validation level.

2. **Rule Selection** — Selects the applicable rules for the determined level. Rules are categorized as:
   - **Structural rules** — verify the artifact's internal structure (e.g., step identifiers unique, dependency graph acyclic).
   - **Consistency rules** — verify the artifact's consistency with other artifacts (e.g., decision references a valid plan, execution references a valid decision).
   - **Compliance rules** — verify the artifact's compliance with governance-defined constraints (e.g., regulatory requirements, organizational policies).
   - **Quality rules** — verify the artifact's quality characteristics (e.g., step results match expected postconditions, selection rationale is complete).

3. **Rule Ordering** — Orders rules for evaluation. Structural rules are evaluated first (fastest, most likely to fail), followed by consistency rules, compliance rules, and quality rules. This ordering ensures that structural defects are caught early before more expensive checks run.

4. **Dependency Resolution** — Some rules depend on the results of other rules (e.g., goal coverage check depends on dependency graph being acyclic). The Rule Router resolves these dependencies to determine the correct evaluation order.

The Rule Router is deterministic: the same artifact type and rule set produce the same rule ordering.

### 11.4 Rule Evaluator

The Rule Evaluator applies each validation rule to the artifact:

1. **Rule Application** — For each rule in the ordered rule set, evaluates the rule against the artifact. Each rule produces a result: pass, fail, or warning, along with a structured defect description if the result is fail or warning.

2. **Defect Description** — When a rule fails or produces a warning, the Rule Evaluator documents: the rule identifier, the artifact element that violates the rule, the expected state, the actual state, and the severity of the finding.

3. **Early Termination** — If a critical structural rule fails (e.g., dependency graph contains a cycle), the Rule Evaluator may skip downstream rules that depend on the failed rule's precondition. Skipped rules are documented in the validation report as "not evaluated due to prerequisite failure".

4. **Context-Dependent Evaluation** — Rules that depend on the current context (e.g., context freshness check, resource availability check) are evaluated against the context snapshot retrieved during intake. If the context is stale, the rule result is annotated with a staleness flag.

5. **Knowledge-Dependent Evaluation** — Rules that depend on knowledge entities (e.g., compliance rules, constraint checks) are evaluated against the knowledge retrieved during intake. If the knowledge is unavailable, the rule result is annotated with a knowledge-gap flag.

The Rule Evaluator is deterministic: the same artifact, rules, context, and knowledge produce the same evaluation results.

### 11.5 Anomaly Detector

The Anomaly Detector identifies deviations from expected patterns that are not caught by explicit rule violations:

1. **Pattern Baseline Retrieval** — Retrieves historical validation data for the artifact type and domain. The baseline represents the expected range of validation characteristics (e.g., typical step execution durations, typical validation pass rates, typical resource consumption patterns).

2. **Deviation Calculation** — For each monitored characteristic, calculates the deviation from the baseline. Deviation is normalized to a standard score (z-score) to enable consistent threshold comparison.

3. **Anomaly Classification** — Classifies detected deviations by severity:
   - **Informational** — deviation within 1 standard deviation; likely normal variance.
   - **Minor** — deviation between 1 and 2 standard deviations; worth noting.
   - **Major** — deviation between 2 and 3 standard deviations; investigation recommended.
   - **Critical** — deviation exceeding 3 standard deviations; investigation required.

4. **Anomaly Filtering** — Filters out anomalies that are explained by known factors (e.g., a larger-than-expected plan explains longer execution duration). Only unexplained anomalies are reported.

5. **Anomaly Report Production** — Produces an anomaly report documenting each detected anomaly: the monitored characteristic, the baseline value, the observed value, the deviation magnitude, the severity classification, possible explanations, and recommended investigation actions.

The Anomaly Detector is deterministic when baselines are available. When no historical data exists (first validation of a new artifact type), anomaly detection is skipped and the validation report notes "anomaly detection unavailable: no baseline".

### 11.6 Report Assembler

The Report Assembler compiles the evaluation results, anomaly detections, and metadata into the final validation report:

1. **Result Aggregation** — Aggregates all rule evaluation results into the report structure, organized by rule category (structural, consistency, compliance, quality) and by validation level.

2. **Overall Outcome Determination** — Determines the overall validation outcome:
   - **Pass** — all rules pass; no critical or major findings; anomalies are informational or minor.
   - **Warning** — all critical rules pass; some non-critical rules produce warnings or minor findings.
   - **Fail** — at least one critical rule fails or at least one major anomaly is detected.

3. **Report Finalization** — Assigns a validation report identifier and version. Attaches the artifact reference, rule set used, context version, and knowledge versions. Marks the report as immutable.

4. **Compliance Statement Generation** — For plan-level and decision-level validations, generates a compliance statement that summarizes the artifact's status against all applicable governance-defined compliance criteria.

5. **Session Completion** — Transitions the validation session from "in-progress" to "completed" and emits the `Validation Completed` event.

The Report Assembler is deterministic: the same evaluation results and anomaly detections produce the same report.

---

## 12. Resolution Rules

### 12.1 Ambiguity Resolution

| Ambiguity | Resolution Rule |
|:---|:---|
| Validation request lacks explicit level | Default level determined by artifact type (step results → step-level; plans → plan-level; decisions → decision-level; multiple artifacts → system-level) |
| Rule conflict (two rules produce contradictory results) | Both results documented; higher-severity rule outcome takes precedence for overall determination |
| Artifact version ambiguity | Latest version validated unless specific version requested |
| Compliance criteria overlap (same constraint defined in multiple criteria) | All criteria evaluated; duplicate findings merged into a single finding with multiple criterion references |
| Anomaly baseline unavailable | Anomaly detection skipped; "no baseline" noted in report; no adverse impact on rule-based validation |

### 12.2 Conflict Resolution

| Conflict | Resolution Rule |
|:---|:---|
| Validation rule contradicts producing Engine's self-validation | Both results documented; Validation Engine's result is authoritative for governance purposes |
| Compliance rule conflicts with plan constraint | Compliance rule takes precedence; plan flagged as non-compliant; Planning Engine notified |
| Critical finding on an artifact that is already in execution | Finding reported immediately via `Critical Finding` event; Execution Engine and Decision Engine notified; escalation to governance |
| Validation timeout (artifact too complex to validate within timeout) | Validation completes with partial results; unevaluated rules documented as "not evaluated: timeout"; overall outcome set to "warning" |
| Knowledge entity referenced by a validation rule is deprecated | Rule evaluated with best available knowledge; finding annotated with "knowledge deprecated" flag |

### 12.3 Re-validation Scope Rules

| Trigger Type | Default Scope | Expanded Scope When |
|:---|:---|:---|
| Artifact revised (new version) | Full re-validation of the new version | Expanded to system-level if the artifact is part of an active pipeline |
| Validation rule updated | Re-validate artifacts that use the updated rule | Expanded to all artifacts of the relevant type if the rule is structural or compliance |
| Compliance criteria updated | Re-validate all artifacts subject to the updated criteria | Always expanded to all relevant artifacts |
| Governance request | Per request (specific artifact, level, or scope) | Per request |
| Anomaly detected in previous validation | Re-validate the specific artifact with enhanced anomaly detection | Expanded to related artifacts if anomaly suggests systemic issue |
| Producing Engine self-validation disagrees with Validation Engine | Full re-validation of the disputed artifact | Expanded to system-level if dispute involves cross-artifact consistency |

---

## 13. Validation Rules

### 13.1 Input Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Validation request schema | Request structure matches the expected schema (artifact type, reference, level, urgency) | Request rejected; specific violations listed |
| Artifact accessibility | Referenced artifact exists and is retrievable from the producing Engine | Validation skipped; "artifact inaccessible" error |
| Rule override validity | Override rule IDs match known rules; override values within valid ranges | Invalid overrides ignored; base rules used |
| Validation level appropriateness | Requested level is compatible with artifact type | Level adjusted to the most appropriate default; warning attached |

### 13.2 Step-Level Validation Rules

| Rule | Category | Severity | Failure Mode |
|:---|:---|:---|:---|
| Postcondition match | Quality | Critical | Step result postconditions must match plan step expected postconditions |
| Precondition consistency | Consistency | Critical | Step result documented preconditions must be consistent with plan step defined preconditions |
| Side effect documentation | Quality | Warning | All step side effects must be documented in the step result |
| Side effect compliance | Compliance | Critical | No step side effect may violate a domain constraint |
| Result internal consistency | Structural | Critical | Step outcome must be consistent with postcondition status (success → postconditions true) |
| Duration bounds | Quality | Warning | Step execution duration within expected bounds (if defined) |
| Resource consumption bounds | Quality | Warning | Step resource consumption within expected bounds (if defined) |

### 13.3 Plan-Level Validation Rules

| Rule | Category | Severity | Failure Mode |
|:---|:---|:---|:---|
| Dependency graph acyclicity | Structural | Critical | Dependency graph must be a DAG |
| Step identifier uniqueness | Structural | Critical | All step identifiers within a plan must be unique |
| Step definition completeness | Structural | Critical | All steps must have preconditions, postconditions, and expected outcomes |
| Goal coverage | Quality | Critical | Plan's final step postconditions must collectively satisfy the goal statement |
| Constraint consistency | Consistency | Critical | Plan constraints must not contradict domain knowledge constraints |
| Knowledge reference validity | Consistency | Warning | All knowledge entity references must be valid and non-deprecated |
| Context reference freshness | Consistency | Warning | Context reference must be within the freshness window |

### 13.4 Decision-Level Validation Rules

| Rule | Category | Severity | Failure Mode |
|:---|:---|:---|:---|
| Selected plan reference validity | Consistency | Critical | Selected plan must be a validated plan version |
| Evaluation consistency | Quality | Critical | All evaluated plans scored with same criteria and scoring model |
| Scoring integrity | Quality | Critical | Selected plan's aggregate score must be consistent with the scoring model |
| Risk assessment completeness | Quality | Critical | All evaluated plans must have risk assessments |
| Critical risk mitigation | Compliance | Critical | All critical risks must have mitigation recommendations |
| Rationale completeness | Quality | Warning | Selection rationale must reference specific criterion scores and risk factors |
| Authorization path integrity | Consistency | Critical | Authorization must follow the correct path; no bypassed escalations |

### 13.5 System-Level Validation Rules

| Rule | Category | Severity | Failure Mode |
|:---|:---|:---|:---|
| Decision-plan chain consistency | Consistency | Critical | Decision's selected plan must match the plan used by execution |
| Execution-decision chain consistency | Consistency | Critical | Execution's decision reference must match the authorized decision |
| State consistency | Consistency | Critical | Post-execution context must be consistent with step results' postconditions and side effects |
| Version currency | Consistency | Warning | No active pipeline artifact should reference a superseded version of another artifact |
| Reference integrity | Structural | Critical | No orphaned references across artifacts (every reference points to an existing artifact) |
| Lifecycle coherence | Consistency | Warning | Artifact lifecycle states must be coherent (e.g., a completed execution cannot reference a cancelled decision) |

### 13.6 State Transition Validation

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| Requested → In-Progress | Artifact accessible; rule set resolved; session created | Transition blocked; intake failures listed |
| In-Progress → Completed | All requested validation levels completed; report assembled | Transition blocked if evaluation incomplete |
| In-Progress → Failed | Validation cannot proceed (artifact inaccessible, rule evaluation error) | Transition with failure reason documented |
| Completed → Archived | No active references from any Engine or governance review | Transition blocked if references exist |

---

## 14. Engine Invariants

The following properties must always hold for the Validation Engine regardless of state, inputs, or operations:

### Invariant 1: Validation Report Immutability

Once a validation report has been produced (session transitioned from "in-progress" to "completed"), the report cannot be modified. Re-validation produces a new validation report with a new identifier. No operation on the Validation Engine mutates a completed validation report.

### Invariant 2: Validation Independence

The Validation Engine's evaluation logic is independent of the producing Engines' self-validation logic. The Validation Engine uses its own rule definitions, its own rule evaluator, and its own outcome determination. A validation report's results are not derived from or influenced by the producing Engine's self-validation report.

### Invariant 3: Rule Evaluation Determinism

Given the same artifact, the same rule set, the same context, and the same knowledge, the Validation Engine produces the same validation report. Rule evaluation is deterministic: no randomness, no external influence, and no dependency on evaluation order beyond the defined dependency resolution.

### Invariant 4: Read-Only Artifact Access

The Validation Engine never modifies the artifacts it validates. It reads artifacts from producing Engines and produces validation reports as separate, independent artifacts. No validation operation has side effects on the artifact under validation.

### Invariant 5: Validation Session Uniqueness

Each validation session has a unique identifier. No two sessions share the same identifier. A validation session is a single, self-contained unit of work that produces exactly one validation report.

### Invariant 6: Finding Traceability

Every finding (pass, fail, or warning) in a validation report references the specific rule that produced it, the specific artifact element that was evaluated, and the expected and actual states. No finding exists without a traceable rule and artifact element.

### Invariant 7: Severity Consistency

Rule severity classifications are consistent across validation sessions. The same rule always produces the same severity classification for the same type of violation. Severity is a property of the rule definition, not of the evaluation context.

### Invariant 8: Compliance Criteria Completeness

When compliance validation is requested, all applicable governance-defined compliance criteria are evaluated. No applicable compliance criterion is skipped without documentation. If a compliance criterion cannot be evaluated (e.g., required knowledge unavailable), it is documented as "not evaluated" with the reason.

---

## 15. Engine Operations

### 15.1 Validation Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `validate(artifact_type, artifact_ref, level, rule_overrides)` | Validate an artifact and produce a validation report | Validation request | Validation report, anomaly report (if applicable) | Artifact retrieval, rule evaluation, anomaly detection, report assembly | Artifact inaccessible; rule evaluation error; validation timeout |
| `re_validate(validation_id, reason)` | Re-validate an artifact from a previous validation session | Validation identifier, re-validation reason | New validation report | Full validation cycle repeated with current rules and context | Original validation not found; artifact no longer accessible |

### 15.2 Query Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `get_validation_report(validation_id)` | Retrieve a validation report | Validation identifier | Validation report with full findings | None | Validation not found (error) |
| `get_validation_history(artifact_ref)` | Retrieve all validation reports for an artifact | Artifact reference | List of validation reports with timestamps and outcomes | None | No validations found (empty list) |
| `get_anomaly_report(validation_id)` | Retrieve the anomaly report for a validation session | Validation identifier | Anomaly report | None | Validation not found or no anomaly detection performed (error) |
| `get_compliance_statement(artifact_ref)` | Retrieve the latest compliance statement for an artifact | Artifact reference | Compliance statement | None | No compliance validation found (error) |

### 15.3 Governance Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `request_validation(artifact_type, artifact_ref, urgency)` | Governance-initiated validation request | Artifact type, reference, urgency | Validation session created; `Validation Started` event | Prioritized queuing if urgency is expedited | Artifact inaccessible; validation already in progress |

Operations are idempotent where applicable. `validate` with the same artifact reference and the same rule set and context returns the existing validation report if one exists for that exact combination and the artifact has not changed.

---

## 16. Engine Events

### 16.1 Events Emitted

| Event | Trigger | Payload | Consumers | Expected Consumer Response |
|:---|:---|:---|:---|:---|
| `Validation Engine Initialized` | Startup completes | Configuration summary, registered capability, rule count | All peer Engines, Engine Lifecycle (A.4.4) | Acknowledge; submit validation requests |
| `Validation Started` | Validation session begins | Validation ID, artifact reference, validation level | Audit systems, governance | Monitor |
| `Validation Completed` | Validation session finishes | Validation ID, overall outcome, finding counts, compliance status | Requesting Engine, governance, audit systems, Memory Engine | Requesting Engine reviews findings; governance acts on critical findings |
| `Validation Failed` | Validation session cannot complete | Validation ID, failure reason, partial results | Requesting Engine, audit systems | Requesting Engine resubmits or escalates |
| `Critical Finding` | Critical validation rule fails | Validation ID, rule, artifact element, defect description, severity | Framework Governance, producing Engine, audit systems | Governance reviews; producing Engine evaluates corrective action |
| `Anomaly Detected` | Anomaly detected during validation | Validation ID, anomaly classification, characteristic, deviation | Governance, producing Engine, audit systems | Governance reviews; producing Engine investigates |
| `Validation Engine Degraded` | Validation Engine operating in degraded mode | Degradation type, affected capabilities | All peer Engines, Engine Lifecycle (A.4.4) | Consumers may defer non-critical validations |
| `Validation Engine Shutdown` | Validation Engine enters graceful shutdown | State summary (active sessions, pending validations) | All peer Engines, Engine Lifecycle (A.4.4) | Cease validation requests |
| `Validation Engine Recovered` | Validation Engine completes restart recovery | Recovery timestamp, recovered session count | All peer Engines, Engine Lifecycle (A.4.4) | Resume validation requests |

### 16.2 Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Step Completed` | Execution Engine (A.5.5) | If automated step-level validation is configured, create a validation session for the step result |
| `Step Failed` | Execution Engine (A.5.5) | If automated step-level validation is configured, create a validation session for the failed step result |
| `Plan Validated` | Planning Engine (A.5.3) | If automated plan-level validation is configured, create a validation session for the plan |
| `Decision Authorized` | Decision Engine (A.5.4) | If automated decision-level validation is configured, create a validation session for the decision artifact |
| `Execution Completed` | Execution Engine (A.5.5) | If automated system-level validation is configured, create a system-level validation session |
| `Execution Failed` | Execution Engine (A.5.5) | If automated system-level validation is configured, create a system-level validation session |
| `Knowledge Superseded` | Knowledge Engine (A.5.2) | If superseded knowledge affects validation rules or compliance criteria, trigger re-validation of affected artifacts |
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine produces artifacts subject to validation, make validation services available |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the producer or consumer list |
| `Configuration Updated` | Governance or Engine configuration | Reload validation rules, anomaly thresholds, and validation policy |

---

## 17. Dependencies

The Validation Engine depends on the following upstream components, consistent with the Universal Section Contract (Section 4 of A.5.0):

- **Engine Platform (A.4)** — Capability model, Engine contract, overall architectural context.
- **Engine Kernel (A.4.1)** — Execution environment and foundational Engine services.
- **Engine Contract (A.4.2)** — Contract interface the Validation Engine must implement.
- **Engine Registry (A.4.3)** — Registry services for Engine discovery and consumer management.
- **Engine Lifecycle (A.4.4)** — Lifecycle state machine specialized by Section 10.
- **Engine Communication (A.4.5)** — Inter-Engine messaging and event delivery.
- **Engine State (A.4.6)** — State model for the Validation Engine's internal state.
- **Engine Capability (A.4.7)** — Maps the Validation Engine to "Quality Assurance" capability domain.
- **Context Engine (A.5.1)** — Provides resolved context snapshots for state-dependent validation checks. The Validation Engine depends on the Context Engine being registered but can operate on the last known context if the Context Engine is temporarily unavailable.
- **Knowledge Engine (A.5.2)** — Provides constraint entities, compliance rules, and domain knowledge for compliance checking. The Validation Engine depends on the Knowledge Engine being registered but can operate with loaded rules if the Knowledge Engine is temporarily unavailable.
- **Planning Engine (A.5.3)** — Provides validated plans for plan-level validation and cross-validation.
- **Decision Engine (A.5.4)** — Provides authorized decision artifacts for decision-level validation.
- **Execution Engine (A.5.5)** — Provides step results and execution records for step-level and system-level validation.
- **STD-010, STD-003, STD-000, M.0, M.1** — Standards and meta-models as defined in Normative References.

---

## 18. Engine State

### 18.1 State Dimensions

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Validation rules, anomaly thresholds, validation policy, compliance criteria references, automated trigger configuration | Low — governance-authorized changes only |
| **Active Sessions State** | Current set of in-progress validation sessions with their artifacts, rule sets, and partial results | High — changes with session start and progress |
| **Validation History State** | Historical validation reports, anomaly reports, and compliance statements | Low — append-only; grows over time |
| **Request Queue State** | Pending validation requests awaiting processing | Medium — changes with incoming requests |
| **Baseline State** | Historical validation data for anomaly detection baselines | Low — updated as validation history grows |
| **Context Reference State** | Most recent Context Engine snapshot version used for validation | Medium — updates with context events |
| **Knowledge Reference State** | Knowledge entity versions (rules, constraints) used in validation | Medium — updates with knowledge events |
| **Lifecycle State** | Current Engine lifecycle phase (per A.4.4) | Low — changes only at lifecycle transitions |

### 18.2 State Consistency

- Active Sessions State is consistent with the Context Reference State — every active session references a valid context version.
- Active Sessions State is consistent with the Knowledge Reference State — every active session references valid knowledge entity versions.
- Validation History State contains only reports from sessions that have completed (not failed or in-progress).
- Baseline State is derived from Validation History State — baselines are updated as new validation data accumulates.
- No validation report in the history references an artifact version that has been purged from the producing Engine without an archive record.

### 18.3 State Recovery

Recovery-critical state: Validation History State (completed validation reports), Configuration State, and Baseline State. The Active Sessions State and Request Queue State are transient. On recovery, the Validation Engine resumes from the last consistent state and re-evaluates any artifacts that were being validated at shutdown.

---

## 19. AI Consumption Rules

### 19.1 AI Consumption Boundary

The Validation Engine does not invoke LLMs or AI models as part of its core architecture. Rule evaluation, anomaly detection, compliance checking, and report assembly are all deterministic operations based on defined rules, baselines, and artifact data. The Validation Engine does not use AI for validation, anomaly detection, or compliance assessment.

### 19.2 When AI May Be Involved

The Validation Engine may validate artifacts that were produced with AI assistance in other Engines. In this case, the Validation Engine treats the artifacts the same as any other artifacts — they are evaluated against the same rules and criteria. The Validation Engine does not need to know whether an artifact originated from an AI-assisted process. Similarly, validation rules retrieved from the Knowledge Engine may have been authored with AI assistance, but the Validation Engine applies them deterministically regardless of origin.

### 19.3 Prohibited AI Usage

- The Validation Engine shall not use LLM calls to evaluate validation rules.
- The Validation Engine shall not use LLM calls to detect anomalies.
- The Validation Engine shall not use LLM calls to assess compliance.
- The Validation Engine shall not use LLM calls to generate validation reports or defect descriptions.
- The Validation Engine shall not use prompt engineering or model selection in any capacity.

---

## 20. Runtime Interaction Rules

### 20.1 Interaction Model

The Validation Engine's interactions follow the Engine Communication model (A.4.5):

- **Synchronous interactions**: Validation requests from governance, validation queries, and manual re-validation requests are synchronous request-response patterns. The requesting Engine waits for the Validation Engine to complete the validation and return the report. For large artifacts (system-level validation), the request is acknowledged synchronously and the report is delivered asynchronously.
- **Asynchronous interactions**: Automated validation triggers from producing Engines are processed asynchronously. The Validation Engine receives these as events and creates validation sessions in the background.
- **Event-driven interactions**: Validation lifecycle events (`Validation Completed`, `Critical Finding`, `Anomaly Detected`) are emitted asynchronously to all subscribed consumers.

### 20.2 Concurrency Rules

- Multiple validation sessions may be active concurrently if they operate on different artifacts.
- Validation sessions for the same artifact are serialized — only one validation operation per artifact at a time.
- Validation queries do not block validation operations and vice versa.
- Anomaly detection may run concurrently with rule evaluation for the same session.
- Critical finding events are dispatched immediately and take priority over normal event delivery.

### 20.3 Timeout and Boundedness

- Each validation session is bounded by the configured validation timeout.
- Rule evaluation is bounded by the number of applicable rules.
- Anomaly detection is bounded by the number of monitored characteristics.
- No unbounded loops or recursive operations exist in the Validation Engine's processing pipeline.

---

## 21. Extension Model

### 21.1 Extension Points

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom validation rules | Additional rules for specific domains or artifact types | Must define rule identifier, category, severity, evaluation logic, and defect description template; registered through Engine configuration or Knowledge Engine |
| Custom anomaly detectors | Additional deviation monitors for specific characteristics | Must define characteristic, baseline source, deviation calculation, and severity thresholds; registered through Engine configuration |
| Custom compliance criteria | Additional governance-defined compliance constraints | Must define criterion identifier, applicability scope, and evaluation logic; registered through Knowledge Engine |
| Custom report templates | Additional report formats or sections | Must not alter the core report structure; registered through Engine configuration |

### 21.2 Extension Constraints

- Extensions must not modify the Validation Engine's invariants (Section 14).
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not weaken the independence requirement (Invariant 2).
- Extensions must not modify artifacts under validation (Invariant 4).
- Extensions that affect validation outcome determination require Framework Governance review.
- Extensions must be backward-compatible — existing validation reports must remain valid after an extension is added.

---

## 22. Knowledge Graph Integration

### 22.1 Integration Model

The Validation Engine's validation reports, anomaly reports, and compliance statements may be projected into the knowledge graph for cross-reference, historical analysis, and quality trend mining. Integration is mediated through the Engine Platform's knowledge graph projection layer.

### 22.2 Projection Points

| Projection | Content | Purpose |
|:---|:---|:---|
| Validation Report Node | Validation ID, artifact reference, level, overall outcome, finding counts, timestamp | Enable validation-level queries and quality tracking |
| Validation Finding Node | Validation ID, rule ID, artifact element, expected state, actual state, severity | Enable finding-level analysis and defect pattern mining |
| Anomaly Node | Validation ID, characteristic, baseline, observed, deviation, severity | Enable anomaly pattern analysis |
| Compliance Statement Node | Artifact reference, compliance criteria, pass/fail status | Enable compliance tracking across artifacts |
| Validation History Edge | Artifact, validation ID, timestamp, outcome | Enable quality trend analysis |
| Rule-Finding Edge | Rule ID, validation ID, finding severity | Enable rule effectiveness analysis |

### 22.3 Integration Constraints

- Projection is downstream and non-blocking.
- The Validation Engine produces projection data; it does not define the graph schema or query model.
- Projection failures do not affect the Validation Engine's operation.

---

## 23. Certification Requirements

### 23.1 Required Certifications

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **Template Compliance** | All 31 sections present and compliant with A.5.0 template | Section-by-section compliance matrix |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist |
| **STD-003 Terminology Compliance** | All terms conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All eight invariants (Section 14) are testable | Invariant test specification |
| **Determinism Verification** | Same artifact + rules + context produce same report across 100 consecutive runs | Determinism test evidence |
| **Cross-Engine Alignment** | All five upstream Engine consumption contracts are compatible | Cross-Engine alignment verification |
| **Completeness Check** | All responsibilities (Section 5) map to operations (Section 15) | Traceability matrix |
| **Event Completeness** | All lifecycle transitions (Section 10) produce events (Section 16) | Traceability matrix |

### 23.2 Certification Gates

- Certification evidence reviewed by Enterprise Documentation Standards Board.
- Cross-engine alignment verified against A.5.1, A.5.2, A.5.3, A.5.4, and A.5.5 output contracts.
- Certification does not imply canonical status.
- Evidence traceable to Traceability ID: `FORGE-AI.V4.PHASE-2.ENGINE-06`.

---

## 24. Performance Characteristics

### 24.1 Expected Performance Bounds

| Characteristic | Expected Bound | Notes |
|:---|:---|:---|
| Step-level validation latency | Per-step; bounded by rule count and anomaly detection scope | Deterministic; no AI/LLM |
| Plan-level validation latency | Per-plan; bounded by step count, rule count, and goal coverage analysis complexity | Deterministic |
| Decision-level validation latency | Per-decision; bounded by plan count and rule count | Deterministic |
| System-level validation latency | Per-execution; bounded by artifact count, cross-reference count, and rule count | Deterministic; most expensive validation level |
| Anomaly detection latency | Per-session; bounded by monitored characteristic count and baseline size | Bounded by configured characteristic set |
| Query latency | Constant time per query | Report and history lookups |

### 24.2 Scalability Characteristics

- Supports multiple concurrent validation sessions for different artifacts.
- Validation history grows over time; compaction archives oldest non-referenced reports when limits are reached.
- Baseline data for anomaly detection grows with validation history; bounded by configured retention window.
- System-level validation is the most expensive; may be scheduled during low-load periods.

### 24.3 Non-Goals

- No specific latency numbers (implementation concern).
- No throughput targets (implementation concern).
- No resource allocation specifications (platform concern).

---

## 25. Security & Governance

### 25.1 Security Boundaries

- **Validation report immutability** — Completed validation reports cannot be tampered with. Mutation of a versioned report is a violation of Invariant 1.
- **Request authentication** — Source authentication is handled by Engine Communication (A.4.5).
- **Consumer authorization** — Managed by Engine Registry (A.4.3).
- **Configuration integrity** — Validation rules, anomaly thresholds, and compliance criteria changes require governance authorization.
- **Validation visibility** — All validation reports are visible to registered peer Engines and governance. Fine-grained access control is out of scope.
- **Critical finding integrity** — Critical findings cannot be suppressed or downgraded by any Engine. They are dispatched directly to governance.

### 25.2 Governance Constraints

- Validation rules are governance artifacts — new rules require Framework Governance approval.
- Compliance criteria are governance artifacts defined through the Knowledge Engine.
- Anomaly thresholds are governance artifacts.
- Critical findings require governance acknowledgment.
- The Validation Engine does not take corrective action — it reports findings and governance or producing Engines decide the response.
- The Validation Engine's independence (Invariant 2) is a governance-mandated property; no extension or configuration may compromise it.

---

## 26. Out of Scope

The following concerns are explicitly out of scope:

- Source code, implementation files, and code repositories
- REST endpoints, API definitions, GraphQL schemas, gRPC service definitions, and transport protocols
- Persistence mechanisms, database schema design, Neo4j implementation, and vector database configuration
- Caching strategies, cache invalidation, and cache infrastructure
- LLM call orchestration, prompt engineering, model selection, token management, and inference optimization
- Agent runtime design, agent lifecycle management, and agent communication protocols
- Swarm runtime design, swarm coordination, and swarm topology management
- Platform adapter specifications and adapter lifecycle management
- ProjectStatus updates, project tracking, and milestone reporting
- Certification execution and canonical promotion
- Corrective action execution or artifact modification
- Validation rule authoring or compliance criteria definition
- UI/UX design and visualization of validation results or compliance dashboards

---

## 27. Future Consumers

| Consumer | Consumption Pattern | Expected Validation Usage |
|:---|:---|:---|
| **Memory Engine (A.5.7, future)** | Push subscription (completed validations) | Stores validation reports, anomaly reports, and compliance statements for quality trend analysis and pattern recognition |
| **Planning Engine (A.5.3)** | Event-driven (critical findings) | Consumes plan-level and step-level validation findings for plan revision |
| **Decision Engine (A.5.4)** | Event-driven (critical findings) | Consumes decision-level validation findings for decision re-evaluation |
| **Execution Engine (A.5.5)** | Event-driven (critical findings) | Consumes step-level validation findings for step re-execution or plan revision |
| **Engine Platform (A.4)** | Event-driven | Consumes lifecycle events for platform-level monitoring |
| **Knowledge Graph Projection** | Asynchronous | Consumes validation, finding, and anomaly metadata for graph-based quality analysis |
| **Framework Governance** | Pull on demand (critical findings, compliance) | Reviews critical findings, compliance violations, and anomaly reports for governance action |

---

## 28. Success Criteria

### 28.1 Architectural Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Template compliance** | All 31 sections present and compliant with A.5.0 | Section audit |
| **STD-010 compliance** | Document Metadata passes all STD-010 checks | STD-010 validation checklist |
| **Invariant testability** | All eight invariants are testable assertions | Invariant test suite |
| **Determinism** | Same inputs produce same report across 100 consecutive runs | Determinism test suite |
| **Completeness** | Every responsibility maps to an operation | Traceability matrix |
| **Event coverage** | Every lifecycle transition produces an event | Traceability matrix |

### 28.2 Functional Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Validation independence** | Validation Engine's results are produced independently of producing Engines' self-validation | Independence audit |
| **Finding traceability** | Every finding references a specific rule and artifact element | Finding audit |
| **Compliance completeness** | All applicable compliance criteria evaluated when compliance validation requested | Compliance audit |
| **Anomaly detection accuracy** | Detected anomalies have quantified deviations from baselines | Anomaly report audit |
| **Report immutability** | No completed validation report is modified after production | Immutability audit |
| **Multi-level coverage** | All four validation levels (step, plan, decision, system) produce reports | Level coverage audit |

### 28.3 Governance Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Ownership clarity** | Exactly one accountable owner named | Governance review |
| **Handoff readiness** | Handoff contract defines prerequisites, evidence, and gates | Governance review |
| **Scope compliance** | No implementation or AI details in any section | Scope audit |
| **Cross-Engine alignment** | All five upstream Engine contracts compatible | Cross-Engine alignment verification |

---

## 29. Completion Checklist

| Requirement | Status |
|:---|:---|
| All 31 sections present in A.5.0 template order | Complete |
| Section 1 (Status) present with platform alignment statement | Complete |
| Section 2 (Document Metadata) STD-010-compliant | Complete |
| Section 3 (Purpose) provides Engine-specific content with capability domain mapping | Complete |
| Section 4 (Mission) provides testable mission-level objectives | Complete |
| Section 5 (Engine Responsibilities) provides grouped, verifiable responsibilities | Complete |
| Section 6 (Non Responsibilities) maps each exclusion to an owning component | Complete |
| Section 7 (Engine Position) describes topology and data flow | Complete |
| Section 8 (Consumed Inputs) defines typed inputs with validation and failure handling | Complete |
| Section 9 (Produced Outputs) defines typed outputs with versioning and validation | Complete |
| Section 10 (Engine Lifecycle) describes all lifecycle transitions within A.4.4 | Complete |
| Section 11 (Internal Engine Model) describes five-stage pipeline with re-validation loop | Complete |
| Section 12 (Resolution Rules) defines ambiguity, conflict, and re-validation scope resolution | Complete |
| Section 13 (Validation Rules) defines input, step, plan, decision, system, and state transition validation | Complete |
| Section 14 (Engine Invariants) states eight testable invariants | Complete |
| Section 15 (Engine Operations) enumerates operations with full signatures | Complete |
| Section 16 (Engine Events) enumerates emitted and consumed events | Complete |
| Section 17 (Dependencies) lists all upstream dependencies including all five upstream Engines | Complete |
| Section 18 (Engine State) describes state dimensions, consistency, and recovery | Complete |
| Section 19 (AI Consumption Rules) defines AI invocation boundaries | Complete |
| Section 20 (Runtime Interaction Rules) defines synchronous/asynchronous and concurrency rules | Complete |
| Section 21 (Extension Model) describes extension points and constraints | Complete |
| Section 22 (Knowledge Graph Integration) describes projection points | Complete |
| Section 23 (Certification Requirements) defines certification gates and evidence | Complete |
| Section 24 (Performance Characteristics) states performance bounds | Complete |
| Section 25 (Security & Governance) states security boundaries and governance constraints | Complete |
| Section 26 (Out of Scope) lists all mandatory exclusions | Complete |
| Section 27 (Future Consumers) identifies downstream consumers | Complete |
| Section 28 (Success Criteria) defines measurable conditions | Complete |
| Section 29 (Completion Checklist) all items addressed | Complete |
| Section 30 (Engine Ownership) names accountable owner and governance obligations | Complete |
| Section 31 (Engine Handoff Contract) defines handoff prerequisites and certification gates | Complete |

---

## 30. Engine Ownership

### Accountable Owner

**Role**: Framework Architecture Team

The Framework Architecture Team is the single accountable owner for the Validation Engine's architectural correctness, governance alignment, and certification readiness. The Validation Engine is the system's independent quality gate, and its architecture must remain under centralized architectural control to preserve its independence and authority. The validation rules, anomaly detection logic, and compliance checking framework directly impact the quality and trustworthiness of the entire pipeline, making centralized oversight essential.

### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Validation rule taxonomy | Yes | Rule authoring (governance) |
| Anomaly detection framework | Yes | Baseline data collection implementation |
| Report structure | Yes | Persistence implementation |
| Validation lifecycle design | Yes | Platform persistence |
| Extension model governance | Yes | Extension implementations |
| Compliance checking framework | Yes | Compliance criteria definition (governance) |

### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New validation rules (standard patterns) | Autonomous | Yes for rules that change validation outcome semantics |
| Anomaly threshold changes | Autonomous within governance-approved range | Yes for new characteristics or threshold removal |
| Validation policy changes | Autonomous for minor scheduling adjustments | Yes for changes that affect validation independence or criticality classification |
| Report structure changes | Autonomous for adding optional sections | Yes for changes that alter core report format |
| Compliance framework changes | Autonomous for minor adjustments | Yes for new compliance levels or enforcement models |

### Validation Obligations

- All 31 sections compliant with A.5.0.
- All invariants preserved.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- STD-010 and STD-003 compliant.
- No implementation scope.
- Cross-engine alignment verified with A.5.1, A.5.2, A.5.3, A.5.4, and A.5.5.

### Review Obligations

Present to Enterprise Documentation Standards Board:

- Complete RFC with all sections.
- Responsibility-to-operation traceability matrix.
- Lifecycle-to-event traceability matrix.
- Invariant test specification.
- STD-010 and STD-003 compliance evidence.
- Cross-engine alignment verification reports with all five upstream Engines.

### Certification Responsibilities

- Template compliance matrix.
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Cross-engine alignment evidence with all five upstream Engines.
- Independence verification evidence.
- Multi-level coverage test results.

### Ownership Handoff Limitations

Ownership transfer requires governance-authorized transition recorded in the Engine Registry. The transition must transfer all obligations, preserve evidence and traceability, and not occur silently or implicitly.

---

## 31. Engine Handoff Contract

### Handoff Prerequisites

Before the Validation Engine hands off a validation report to a consuming Engine, the following conditions must be satisfied:

1. The validation session has completed (all requested validation levels evaluated).
2. The validation report is assigned a unique identifier and is immutable.
3. All requested rules have been evaluated (or documented as "not evaluated" with reasons).
4. The overall validation outcome is determined (pass, warning, or fail).
5. The report references the validated artifact, rule set, context version, and knowledge versions.
6. Any critical findings are documented with complete defect descriptions.
7. Anomaly detection has been performed (or documented as "unavailable" with reason).
8. The Validation Engine is in steady-state or degraded lifecycle phase.

### Required Evidence

| Evidence | Description | Retention |
|:---|:---|:---|
| Validation report identifier | Unique identifier of the validation report | Duration of artifact lifecycle + audit retention period |
| Artifact reference | Validated artifact type, identifier, and version | Same as report |
| Rule set used | List of all rules applied, including overrides | Same as report |
| Finding details | All pass/fail/warning findings with rule, element, expected, and actual | Same as report |
| Compliance statement | Per-criteria compliance status (if compliance validation requested) | Same as report |
| Anomaly report | Detected anomalies with classifications and deviations | Same as report |
| Context and knowledge references | Versions used during validation | Same as report |

### Validated Outputs

- Validation reports (immutable, versioned, with all findings and evidence).
- Anomaly reports (immutable, per validation session).
- Compliance statements (immutable, per artifact per validation).
- Validation summaries (immutable, per validation session).

### Snapshot Expectations

Validation reports are immutable once produced. Consuming Engines receive a versioned report that is guaranteed not to change. If the artifact under validation is revised, a new validation session produces a new report — the original report remains for historical comparison and trend analysis.

### Receiving Consumers

1. Memory Engine (A.5.7, future) — primary consumer of completed validation history
2. Planning Engine (A.5.3) — consumer of plan-level and step-level findings
3. Decision Engine (A.5.4) — consumer of decision-level findings
4. Execution Engine (A.5.5) — consumer of step-level findings
5. Framework Governance — consumer of critical findings and compliance statements

### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Artifact inaccessible | Validation skipped; "artifact inaccessible" error returned | No escalation — validation may be retried when artifact becomes available |
| Rule evaluation error | Rule documented as "error"; remaining rules continue | If critical rule errors, overall outcome set to "warning"; no escalation |
| Validation timeout | Validation completes with partial results; unevaluated rules documented | Overall outcome set to "warning"; full re-validation may be scheduled |
| Knowledge unavailable | Knowledge-dependent rules documented as "not evaluated" | No escalation — validation proceeds with available knowledge |
| Consumer unreachable | Report retained; delivery retried per A.4.5 | After retry exhaustion, report queued for later retrieval |

### Audit Record Expectations

Every validation session produces an audit record:

- Validation report identifier.
- Artifact reference.
- Validation level and rule set.
- Overall outcome.
- Finding counts (pass, fail, warning, not evaluated).
- Anomaly count and severity distribution.
- Compliance status (if applicable).
- Duration.

### Certification Gates

1. **Pre-handoff validation** — Validation session completed; report assembled.
2. **Evidence completeness** — All required evidence items present.
3. **Consumer readiness** — Receiving Engine registered and reachable (or report queued).
4. **Invariant preservation** — All eight invariants (Section 14) hold.
5. **Finding traceability** — Every finding references a rule and artifact element.
6. **Critical finding acknowledgment** — All critical findings dispatched to governance.

If any gate fails, the report is still produced and archived, but the consuming Engine is notified of the incomplete handoff.

---

## Validation Checklist

### STD-010 Metadata Validation

| Check | Status |
|:---|:---|
| Metadata heading is exactly `## Document Metadata` | Pass |
| Table shape is exactly `\| Field \| Value \|` with left-aligned columns | Pass |
| All 25 mandatory STD-010 fields present | Pass |
| Conditionally mandatory fields included (Blocks, Blocked By, Review Status, Compliance Level) | Pass |
| Normative Authority does not include references, dependencies, consumed documents, or related documents | Pass |
| Normative References, Dependencies, Consumes, Produces, Related Specifications are separate fields | Pass |
| `Canonical Status` explicitly states non-canonical | Pass |
| Exactly one Owner identified | Pass |
| Version format follows STD-010 Section 4.6 | Pass |
| Complete metadata does not claim canonical status | Pass |

### Structural Validation

| Check | Status |
|:---|:---|
| Section order follows A.5.0 Section 5.1 order | Pass |
| All 31 sections present | Pass |
| Universal Contract (A.5.0 Section 4) compliance for every section | Pass |
| No mandatory section omitted or merged | Pass |
| No section redefines upstream Engine Platform models | Pass |

### Scope Validation

| Check | Status |
|:---|:---|
| No implementation details (code, APIs, schemas) | Pass |
| No AI/LLM consumption in core architecture | Pass |
| No persistence mechanism specification | Pass |
| No agent or swarm runtime design | Pass |

### Content Quality Validation

| Check | Status |
|:---|:---|
| All invariants are testable assertions | Pass |
| All operations have complete signatures (purpose, inputs, outputs, side effects, failure modes) | Pass |
| All events have complete payloads and consumer expectations | Pass |
| All responsibilities map to at least one operation | Pass |
| All lifecycle transitions produce events | Pass |
| Cross-engine consumption contracts are explicit and typed | Pass |

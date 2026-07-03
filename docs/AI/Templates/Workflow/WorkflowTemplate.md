# Workflow Template

## Metadata

| Field | Value |
| --- | --- |
| Template Status | Draft v3 |
| Document Type | Forge AI Template |
| Authority | `docs/AI/Templates/Core/TemplateStandard.md` |
| Framework Version | Forge AI v3 Draft |
| Owner | Template System |
| Layer | Workflow |

---

# Purpose

This template defines the required structure for workflow documents.

A workflow routes work through a governed lifecycle. It does not decide architecture, implement code, certify work, or update project state by itself.

# Required Structure

## 1. Metadata

Include document status, authority, owner, related framework version, workflow identifier, and related phase/stage/capability when applicable.

## 2. Workflow Identity

Define the workflow name, identifier, document path, and workflow category.

## 3. Purpose

Explain why the workflow exists and which operational problem it solves.

## 4. Authority

List the governing documents consumed by this workflow.

## 5. Inputs

Define required inputs, optional inputs, and stop conditions when inputs are missing.

## 6. Outputs

Define produced artifacts, reports, decisions, evidence, or handoffs.

## 7. Lifecycle

Describe the ordered workflow lifecycle.

```text
State
    ↓
Context
    ↓
Planning
    ↓
Command Selection
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
State Update, only when permitted
```

## 8. Roles and Responsibilities

Identify workflow owner, executor, reviewer, certifier, and human authority when applicable.

## 9. Allowed Actions

List what the workflow may coordinate.

## 10. Forbidden Actions

List what the workflow must not do.

## 11. Decision Points

Document all branches, routing rules, and escalation conditions.

## 12. Validation Requirements

Identify required evidence and applicable validation levels.

## 13. Review Requirements

Identify the review checklist or review template consumed by the workflow.

## 14. Certification Boundary

State whether this workflow may support certification and under which preconditions.

## 15. Project State Impact

State whether ProjectStatus may be updated and which workflow controls that update.

## 16. Failure Handling

Define blocker handling, retry rules, rollback rules, and escalation path.

## 17. Related Templates

Reference required command, checklist, review, execution plan, decision, handoff, validation, or certification templates.

## 18. Completion Criteria

List the conditions required to consider this workflow complete.

# Completion Checklist

- [ ] Metadata complete
- [ ] Purpose clear
- [ ] Authority chain documented
- [ ] Inputs and outputs defined
- [ ] Lifecycle ordered
- [ ] Decision points documented
- [ ] Allowed and forbidden actions clear
- [ ] Validation requirements defined
- [ ] Review requirements defined
- [ ] Certification boundary defined
- [ ] Project state impact defined
- [ ] Failure handling documented
- [ ] References verified

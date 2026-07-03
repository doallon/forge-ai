# Command Template

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

This template defines the required structure for command documents.

A command defines how approved work is executed. It does not invent work, define architecture, bypass validation, or advance project state.

# Required Structure

## 1. Metadata

Document status, command identifier, authority, owner, related workflow, and command category.

## 2. Command Identity

Name the command and define its canonical path.

## 3. Purpose

Explain the task type governed by this command.

## 4. Command Position

Show where the command sits in the lifecycle.

```text
Planning
    ↓
Workflow
    ↓
Command
    ↓
Template
    ↓
Execution
    ↓
Validation
    ↓
Review
```

## 5. Use This Command When

List task situations that require this command.

## 6. Do Not Use This Command When

List task situations that require another command or workflow.

## 7. Required Inputs

Define required project state, phase, stage, capability, source files, documentation, or evidence.

## 8. Required Reading

List governing documents that must be read before execution.

## 9. Allowed Work

Define the exact categories of permitted work.

## 10. Forbidden Work

Define prohibited actions, scope expansion, ownership changes, and state updates.

## 11. Execution Procedure

Define ordered execution steps.

## 12. Validation Requirements

List required checks, evidence, and allowed blocked-gate reporting.

## 13. Review Readiness

Define when the command output is ready for review.

## 14. Completion Report Format

Define the expected report fields.

```text
Summary
Files changed / artifacts produced
Architecture notes
Validation results
Risks or blockers
Recommended next step
```

## 15. Handoff

Define who or what consumes the command output.

# Completion Checklist

- [ ] Command identity defined
- [ ] Scope clear
- [ ] Required reading listed
- [ ] Allowed work defined
- [ ] Forbidden work defined
- [ ] Execution procedure ordered
- [ ] Validation requirements defined
- [ ] Review readiness defined
- [ ] Completion report format included
- [ ] Handoff defined

# Checklist Template

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

This template defines the required structure for checklist documents.

A checklist verifies that a bounded set of requirements has been satisfied. It does not replace validation, review, certification, or governance.

# Required Structure

## 1. Metadata

Document status, checklist identifier, authority, owner, target scope, and related workflow or command.

## 2. Checklist Purpose

Explain what this checklist verifies.

## 3. Applicability

Define when the checklist must be used.

## 4. Required Inputs

List documents, evidence, outputs, or artifacts needed before checklist execution.

## 5. Checklist Items

Use a table or grouped checklist.

| Check | Required Result | Status | Evidence |
| --- | --- | --- | --- |
| Example check | Expected condition | Pending / Pass / Fail / N/A | Evidence reference |

## 6. Evidence Rules

Define how each checklist item must be evidenced.

## 7. Failure Handling

Define what happens when an item fails.

## 8. Completion Decision

Choose exactly one decision:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## 9. Related Documents

Reference related workflow, command, validation, review, or certification documents.

# Completion Checklist

- [ ] Purpose defined
- [ ] Applicability defined
- [ ] Inputs defined
- [ ] Checklist items measurable
- [ ] Evidence rules defined
- [ ] Failure handling defined
- [ ] Decision model included
- [ ] References verified

# Review Template

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

This template defines the required structure for review documents.

Review evaluates readiness after validation. Review does not implement work, replace validation, certify completion by itself, or update ProjectStatus.

# Required Structure

## 1. Review Identification

Review ID, title, reviewer, date, target, review type, and authority chain.

## 2. Review Purpose

Explain why review is being performed.

## 3. Review Scope

Define in-scope and out-of-scope areas.

## 4. Required Reading

List documents and evidence reviewed.

## 5. Validation Evidence

Summarize validation results consumed by this review.

## 6. Review Areas

Evaluate planning, architecture, ownership, dependency flow, documentation, implementation scope, quality gates, and state safety when applicable.

## 7. Findings

| ID | Severity | Area | Finding | Evidence | Recommendation | Status |
| --- | --- | --- | --- | --- | --- | --- |

Suggested severities:

```text
INFO
WARNING
BLOCKER
```

## 8. Risks

Document known risks, unresolved concerns, and non-blocking observations.

## 9. Review Verdict

Choose exactly one:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## 10. Certification Readiness

State whether the target is ready for certification.

## 11. Project State Impact

State whether a ProjectStatus update is recommended, blocked, or not required.

## 12. Recommendations

List next actions without expanding scope.

# Completion Checklist

- [ ] Scope clear
- [ ] Required reading complete
- [ ] Validation evidence reviewed
- [ ] Findings documented
- [ ] Risks documented
- [ ] Verdict assigned
- [ ] Certification readiness stated
- [ ] Project state impact stated
- [ ] Recommendations bounded

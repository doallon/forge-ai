# Approval Template

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

This template defines the required structure for approval records.

Approval records human or governance acceptance of a bounded decision, exception, release, transition, or override. Approval does not replace validation, review, or certification unless the governing workflow explicitly allows it.

# Required Structure

## 1. Approval Identification

Approval ID, title, date, approver, authority, and target.

## 2. Approval Request

Describe what is being approved.

## 3. Scope

Define what the approval covers and what it does not cover.

## 4. Evidence Reviewed

List validation, review, audit, implementation, documentation, or risk evidence considered.

## 5. Decision

Choose exactly one:

```text
APPROVED
APPROVED WITH CONDITIONS
REJECTED
BLOCKED
```

## 6. Conditions

List any required conditions, limitations, expiration, or follow-up work.

## 7. Risk Acceptance

Document accepted risks and owner.

## 8. Project State Impact

State whether this approval permits, recommends, blocks, or does not affect ProjectStatus update.

## 9. Audit Trail

Record approver, timestamp, rationale, and related documents.

# Completion Checklist

- [ ] Approval target defined
- [ ] Scope bounded
- [ ] Evidence listed
- [ ] Decision recorded
- [ ] Conditions documented
- [ ] Risks accepted or rejected
- [ ] Project state impact stated
- [ ] Audit trail complete

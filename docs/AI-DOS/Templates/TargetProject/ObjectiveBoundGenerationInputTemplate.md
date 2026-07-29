# Objective-Bound Generation Input Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-OBJECTIVE-BOUND-GENERATION-INPUT` |
| Status | Draft; conditional template |
| Applies When | Exact generation constraints cannot be uniquely derived from approved upstream Target truth. |
| Prohibited When | No controlling objective is fixed, existing authority already resolves the constraints, or the record would create/widen meaning. |

## Produced Content

```markdown
# {{TARGET_NAME}} Objective-Bound Generation Input — {{OBJECTIVE_ID}}

## Identity and Authority

| Field | Value |
|:---|:---|
| Identifier | `{{GENERATION_INPUT_ID}}` |
| Controlling Objective | `{{OBJECTIVE_ID}}` |
| Capability Reference | `{{CAPABILITY_ID}}` |
| Roadmap Reference | `{{ROADMAP_ID}}#{{OBJECTIVE_ID}}` |
| Target Contract Reference | `{{TARGET_CONTRACT_ID}}` |
| Author | {{AUTHORIZED_AUTHOR}} |
| Approver | {{TARGET_APPROVER_OR_NOT_APPLICABLE_FOR_AUTHORIZED_MECHANICAL_DERIVATION}} |
| Authority Acquisition | {{APPROVAL_EVIDENCE_OR_AUTHORIZED_DERIVATION_RULE_AND_EVIDENCE}} |
| Derivation Method | {{EXPLICIT_DECISION_OR_UNIQUE_MECHANICAL_RULE}} |
| Lifecycle State | `{{CANDIDATE_OR_AUTHORIZED_OR_INVALIDATED}}` |

## Finite Generation Constraints

| Option ID | Exact Artifact Scope | Owner | Allowed Mutation Kind | Validation Profile | Required Evidence |
|:---|:---|:---|:---|:---|:---|
| `{{OPTION_ID}}` | `{{EXACT_LOCATOR}}` | {{OWNER}} | {{CREATE_UPDATE_OR_DELETE_AS_AUTHORIZED}} | {{VALIDATION}} | {{EVIDENCE}} |

| Rule | Value |
|:---|:---|
| Combination rule | {{FINITE_RULE}} |
| Minimum cardinality | {{INTEGER}} |
| Maximum cardinality | {{INTEGER}} |
| Protected boundaries | {{REFERENCES}} |
| Observable completion | {{PREDICATE}} |

## Semantic Scope Consistency

The finite input does not widen, contradict, or reinterpret `{{CAPABILITY_ID}}`, `{{OBJECTIVE_ID}}`, `{{TARGET_CONTRACT_ID}}`, or other applicable upstream authority. Each option traces to: {{FIELD_BY_FIELD_TRACE}}.

## Regeneration and Invalidation

- Re-resolve the same objective and every upstream identity before regeneration.
- Invalidate on upstream identity or semantic change unless an authorized rule proves the input unaffected.
- Apply staleness only when an already-authorized Target policy names it: {{POLICY_OR_NONE}}.
- Safe-stop on conflict, non-unique derivation, missing authority, invalidation, stale status under that policy, or scope widening.

## Non-Authority

This conditional record creates no objective, capability, planning layer, workflow, approval, or authority merely through generation.
```

# Northstar Notes Validation Requirements

## Validation Classes

| Action class | Required checks | Evidence output |
|:---|:---|:---|
| `documentation-change` | Role identity, links, exact declaration syntax, authority direction, and protected-boundary diff | Validation or review record bound to exact revision |
| `source-change` | Applicable capability criteria, deterministic fixtures, input immutability, and protected-boundary diff | Capability validation evidence bound to exact work-unit revision |
| `state-transition` | Exact subject re-resolution, evidence freshness, authority identity, atomic changes, and no unrelated mutation | State-transition record |

## Common Rules

- Validation scope and subject revision must be explicit.
- Missing required input or authority safe-stops validation.
- Results support decisions but do not approve, certify, promote, activate, or mutate by themselves.
- Node, language, or tool-specific checks validate only the surface actually exercised.


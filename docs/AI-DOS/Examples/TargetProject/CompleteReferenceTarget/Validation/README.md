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


## Reference-Package Semantic Regression Checks

For any change to the readiness checklist or evidence-record family:

1. compare each `STD011-TPC-001` through `STD011-TPC-022` entry field-by-field with Section 7 of the live Conformance Profile; heading counts or identifier presence alone are insufficient;
2. require the reusable and completed-example records to preserve the same criterion title, source section, conformance subject, condition, inputs, method, success, failure, blocker, evidence, judgment, and automation-boundary values;
3. compare the Evidence Record template and every completed item field-by-field with M.5 §§7.1–7.6, 8, 9, and 15, including all exact enums, all six quality dimensions, per-claim confidence, provenance, limitations, and conditional M.4 transition semantics;
4. resolve every internal locator and reject unresolved placeholders or implied external attachments; and
5. inspect claim, subject, relationship, validity, sufficiency, and decision-effect semantics rather than accepting field presence as evidence of correctness.

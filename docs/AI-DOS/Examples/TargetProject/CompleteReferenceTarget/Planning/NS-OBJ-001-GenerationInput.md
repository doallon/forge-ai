# Northstar Objective-Bound Generation Input — NS-OBJ-001

## Identity and Authority

| Field | Value |
|:---|:---|
| Identifier | `NORTHSTAR-NOTES.GENERATION-INPUT.NS-OBJ-001` |
| Controlling Objective | `NS-OBJ-001` |
| Capability / Roadmap | `NORTHSTAR-NOTES.DEVELOPMENT-PHASES#NS-CAP-002`; `NORTHSTAR-NOTES.ROADMAP#NS-OBJ-001` |
| Target Contract | `NORTHSTAR-NOTES.TARGET-CONTRACT` |
| Author / Approver | Northstar Human Governance / Northstar Human Governance |
| Authority Acquisition | `NORTHSTAR-NOTES.EV-001` |
| Derivation | Exact Human Governance declaration; no provider inference. |
| Lifecycle | `AUTHORIZED` |

## Finite Generation Constraints

| Option | Exact Artifact | Owner | Mutation | Validation | Evidence |
|:---|:---|:---|:---|:---|:---|
| `NS-GEN-OPT-001` | `Validation/README.md` | Northstar Target | `UPDATE` | Declared offline preview checks | `NORTHSTAR-NOTES.EV-005` |

Combination and cardinality: select exactly the one option (`1..1`). Mission, Contract, DevelopmentPhases, and user note content remain read-only. Completion is observable when the validation declaration names the deterministic checks and evidence locator.

## Semantic Scope, Regeneration, and Invalidation

The documentation-only declaration bounds validation for `NS-CAP-002`/`NS-OBJ-001`; it does not authorize application writes, synchronization, new capability meaning, or wider scope. Re-resolve every upstream identity before regeneration. Any identity or semantic change invalidates this input pending a new Human decision. No time-based staleness policy is asserted.

This fictional Target record claims no reusable normative authority.

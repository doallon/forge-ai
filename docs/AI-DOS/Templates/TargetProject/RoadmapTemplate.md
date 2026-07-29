# STD-011 Target Roadmap Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-ROADMAP` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Status | Draft; non-canonical |

This component is narrower than the general Planning-family Roadmap template. Use it only for a Target Roadmap derived under STD-011.

## Produced Content

```markdown
# {{TARGET_NAME}} Roadmap

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{ROADMAP_IDENTIFIER}}` |
| Title | {{TARGET_NAME}} Roadmap |
| Version | `{{ROADMAP_VERSION}}` |
| Status | {{ROADMAP_STATUS}} |
| Classification | Target Project Roadmap |
| Document Type | Roadmap Artifact |
| Artifact Family | Target Project Artifact |
| Artifact Type | Roadmap |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Normative Authority | `{{DEVELOPMENT_PHASES_LOCATOR}}`; {{HUMAN_GOVERNANCE_AUTHORITY}} |
| Scope | {{SCOPE}} |
| Out of Scope | Current operational state, unapproved capability invention, and execution authorization |
| Traceability ID | `{{ROADMAP_IDENTIFIER}}` |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |

## Derivation Binding

| Field | Value |
|:---|:---|
| Source artifact | `{{DEVELOPMENT_PHASES_LOCATOR}}` |
| Source identity | `{{DEVELOPMENT_PHASES_IDENTIFIER}}` |
| Source revision | `{{DEVELOPMENT_PHASES_REVISION}}` |
| Derivation rule set | STD-011 §11 plus `{{TARGET_DERIVATION_RULE_LOCATOR}}` |
| Derivation evidence | `{{DERIVATION_EVIDENCE_LOCATOR}}` |
| Acceptance evidence | `{{ROADMAP_ACCEPTANCE_EVIDENCE_LOCATOR}}` |

## Ordered Capability Projection

| Order | Capability ID | Source trace | Dependencies | Required evidence | Governance gate |
|:---|:---|:---|:---|:---|:---|
| {{ORDER}} | `{{CAPABILITY_ID}}` | `{{SOURCE_TRACE}}` | {{DEPENDENCIES}} | {{REQUIRED_EVIDENCE_IDS}} | {{GOVERNANCE_GATE}} |

## Required Evidence Register

| Evidence ID | Meaning preserved from DevelopmentPhases | Acceptance criteria | Status source |
|:---|:---|:---|:---|
| `{{EVIDENCE_ID}}` | {{EVIDENCE_MEANING}} | {{ACCEPTANCE_CRITERIA}} | `{{PROJECT_STATUS_LOCATOR}}` |

## Boundaries

### Non-Goals

- {{NON_GOAL}}

### Protected Future Capabilities

- {{PROTECTED_FUTURE_CAPABILITY}}

### Compatibility and Migration

{{COMPATIBILITY_AND_MIGRATION_BOUNDARY}}

## Regeneration Triggers

Derivation preserves approved identities, ordering, dependencies, outcomes, evidence meanings, completion predicates, gates, and boundaries. Mechanical derivation, generated candidate status, Human Governance review, acceptance, and operational activation are separate records. Multiple valid derivations safe-stop.

## Controlling-Objective Policy

Exactly one Target-owned deterministic policy is required. Default: topologically order objectives by dependencies and stable declared order; exclude accepted objectives and those with unmet dependencies; select the earliest remaining objective. Record a different policy only when explicit, authorized, deterministic, Contract-compatible, and testable. Zero results when required or multiple results safe-stop.

## Conditional Objective-Bound Generation Input

Reference `{{GENERATION_INPUT_ID_OR_NOT_REQUIRED_WITH_UNIQUE_DERIVATION_EVIDENCE}}`. It must never widen or contradict this Roadmap, its source capability, or the Target Contract.

- accepted Mission revision change;
- accepted DevelopmentPhases revision change;
- accepted evidence or compatibility-rule change that affects projection;
- explicit Human Governance source decision.

Regeneration preserves accepted identifiers unless Human Governance approves supersession, replacement, or migration.

## Non-Goals

- Roadmap does not become operational state by itself.
- Roadmap does not select or activate a bounded work unit.
- Governance acceptance follows deterministic derivation and does not alter derivation inputs.
```

## Completion Check

- [ ] Every projected item traces to one capability.
- [ ] Dependency order precedes priority order.
- [ ] Evidence identifiers retain their source meanings.
- [ ] Derivation and acceptance evidence are distinct and resolvable.
- [ ] Non-goals, protected capabilities, governance gates, and regeneration rules are preserved.

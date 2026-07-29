# Target Operational Record Templates

Every transition record MUST include prior/resulting lifecycle state IDs, exact subject ID, actor and authority reference, preconditions, transition evidence, atomic-write/no-partial-write result, and exact next action. Every blocker record MUST include a specific `STD011-SS-*` ID, inspected identities, failed condition, owning authority, no-mutation proof, and exact correction or Human decision required.

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-OPERATIONAL-RECORDS` |
| Classification | Target Project Template Component Set |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Status | Draft; non-canonical |

## 1. Roadmap Derivation Record

```markdown
# Roadmap Derivation Record — {{DERIVATION_ID}}

| Field | Value |
|:---|:---|
| Identifier | `{{DERIVATION_ID}}` |
| Status | {{STATUS}} |
| Source identity | `{{DEVELOPMENT_PHASES_IDENTIFIER}}` |
| Source revision | `{{SOURCE_REVISION}}` |
| Rule set | STD-011 §11 plus `{{TARGET_RULE_SET_LOCATOR}}` |
| Output Roadmap identity | `{{ROADMAP_IDENTIFIER}}` |
| Output revision | `{{OUTPUT_REVISION}}` |
| Producer | {{PRODUCER}} |
| Timestamp | {{TIMESTAMP}} |

## Selected Capability Units

| Source order | Capability ID | Dependencies satisfied | Output order | Evidence IDs preserved |
|:---|:---|:---|:---|:---|
| {{SOURCE_ORDER}} | `{{CAPABILITY_ID}}` | {{YES_OR_NO}} | {{OUTPUT_ORDER}} | {{EVIDENCE_IDS}} |

## Exclusions

| Capability ID | Governed exclusion reason | Source |
|:---|:---|:---|
| {{CAPABILITY_ID_OR_NONE}} | {{EXCLUSION_REASON}} | {{SOURCE}} |

## Warnings and Blockers

| Type | Condition | Required resolution |
|:---|:---|:---|
| {{WARNING_OR_BLOCKER_OR_NONE}} | {{CONDITION}} | {{REQUIRED_RESOLUTION}} |

## Determinism Confirmation

- Dependency order was applied before priority.
- Evidence meanings, non-goals, protected capabilities, and gates were preserved.
- ProjectStatus, repository activity, provider preference, and backlog proximity were not used as source inputs.
- A separate acceptance record is required before the Roadmap becomes authoritative.
```

## 2. Bounded Work Unit Record

```markdown
# Bounded Work Unit — {{WORK_UNIT_ID}}

| Field | Value |
|:---|:---|
| Identifier | `{{WORK_UNIT_ID}}` |
| Status | {{WORK_UNIT_STATUS}} |
| Target | `{{TARGET_IDENTIFIER}}` |
| Controlling objective | `{{ROADMAP_OBJECTIVE_ID}}` |
| Subject identity | `{{SUBJECT_IDENTIFIER}}` |
| Subject revision | `{{SUBJECT_REVISION}}` |
| Owner | {{OWNER}} |
| Activation authority | {{ACTIVATION_AUTHORITY}} |
| Activation evidence | `{{ACTIVATION_EVIDENCE_LOCATOR}}` |

## Objective

{{OBJECTIVE}}

## Authorized Scope

- {{AUTHORIZED_SCOPE_ITEM}}

## Protected Boundaries

- {{PROTECTED_BOUNDARY}}

## Required Inputs

- {{REQUIRED_INPUT}}

## Validation and Evidence

| Requirement | Locator or expected record |
|:---|:---|
| {{VALIDATION_REQUIREMENT}} | `{{LOCATOR_OR_RECORD}}` |

## Completion Condition

{{COMPLETION_CONDITION}}

## Safe-Stop Conditions

- {{SAFE_STOP_CONDITION}}

This record does not activate itself. Its activation evidence must resolve independently.
```

## 3. State Transition Record

```markdown
# State Transition Record — {{TRANSITION_ID}}

| Field | Value |
|:---|:---|
| Identifier | `{{TRANSITION_ID}}` |
| Target | `{{TARGET_IDENTIFIER}}` |
| Subject identity | `{{SUBJECT_IDENTIFIER}}` |
| Subject revision | `{{SUBJECT_REVISION}}` |
| Previous state revision | `{{PREVIOUS_STATE_REVISION}}` |
| Resulting state revision | `{{RESULTING_STATE_REVISION}}` |
| Transition authority | {{TRANSITION_AUTHORITY}} |
| Authority evidence | `{{AUTHORITY_EVIDENCE_LOCATOR}}` |
| Applied at | {{TIMESTAMP}} |

## Preconditions

| Precondition | Evidence | Result |
|:---|:---|:---|
| {{PRECONDITION}} | `{{EVIDENCE_LOCATOR}}` | {{RESULT}} |

## Atomic Changes

| Field or record | Previous value | New value | Source authority |
|:---|:---|:---|:---|
| {{FIELD_OR_RECORD}} | {{PREVIOUS_VALUE}} | {{NEW_VALUE}} | {{SOURCE_AUTHORITY}} |

## No-Drift Confirmation

- Subject identity was re-resolved immediately before transition.
- Evidence and authority remained current.
- No unrelated state changed.
- No next task was generated, selected, activated, or executed by implication.
```

## Completion Check

- [ ] Every record has one stable identity.
- [ ] Subjects and revisions are exact.
- [ ] Activation, derivation, acceptance, and transition effects remain distinct.
- [ ] No record grants its own authority.

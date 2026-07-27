# Repository Entry Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-REPOSITORY-ENTRY` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Status | Draft; non-canonical |

## Produced Content

```markdown
# {{TARGET_NAME}} Repository Entry

## Repository Identity

| Field | Value |
|:---|:---|
| Target Project | {{TARGET_NAME}} |
| Target Identifier | `{{TARGET_IDENTIFIER}}` |
| Repository Role | {{REPOSITORY_ROLE}} |
| Target Truth Root | `{{TARGET_TRUTH_ROOT}}` |
| Human Governance | {{HUMAN_GOVERNANCE_AUTHORITY}} |

## Canonical Target Contract

`{{TARGET_CONTRACT_LOCATOR}}`

This file is the repository entry and discovery surface. The Target Contract owns declared Target resources, protected areas, validation requirements, permissions, and operational-entry resolution.

## Mandatory Reading Order

1. `{{TARGET_CONTRACT_LOCATOR}}`
2. `{{MISSION_LOCATOR}}`
3. `{{DEVELOPMENT_PHASES_LOCATOR}}`
4. `{{ROADMAP_LOCATOR}}`
5. `{{PROJECT_STATUS_LOCATOR}}`

## Product / Target Boundary

Target-owned mission, planning, operational state, evidence, declarations, and decisions remain under `{{TARGET_TRUTH_ROOT}}`.

Reusable AI-DOS product truth remains external to Target-owned truth and is consumed only through declared references.

## Entry Rule

Before planning, editing, executing, validating, reviewing, or reporting Target work:

1. resolve the exact Target Contract;
2. consume its declaration profile;
3. preserve protected areas and permissions;
4. read the current operational entry;
5. safe-stop when identity, authority, scope, or state is unresolved.

## Non-Goals

This entry does not select work, authorize mutation, duplicate the Mission, duplicate ProjectStatus, or define AI-DOS product behavior.
```

## Completion Check

- [ ] All placeholders are resolved.
- [ ] Exactly one Target Contract locator is declared.
- [ ] The reading order resolves to existing files.
- [ ] Product and Target truth roots are distinct.
- [ ] No operational state is embedded in the entry.


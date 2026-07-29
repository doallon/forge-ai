# Target Project Structure Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-STRUCTURE` |
| Classification | Target Project Template |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Baseline Standard | `docs/AI-DOS/Architecture/Standards/STD-011-Target-Project-Standard.md` |
| Status | Draft; non-canonical |

## 1. Recommended Structure

This Target-root layout is a reusable default, not a universal mandate. Approved stable locators may represent standalone single-Target, monorepo, legacy/existing, or external-provider topologies. `docs/Projects/<TargetName>/` is never required merely by this template.

```text
{{TARGET_REPOSITORY_ROOT}}/
├── AGENTS.md
├── Governance/
│   └── TargetContract.md
├── Mission/
│   └── Mission.md
├── Planning/
│   ├── DevelopmentPhases.md
│   ├── Roadmap.md
│   └── ProjectStatus.md
├── Evidence/
│   ├── EvidenceIndex.md
│   └── records/
├── WorkUnits/
├── Validation/
│   └── README.md
└── Source/
    └── README.md
```

Paths are recommended conveniences. Logical role identity and declared locators govern.

## 2. Required Role Map

| Logical role | Stable identity | Recommended locator | Required template |
|:---|:---|:---|:---|
| Target Project Standard | `AI-DOS-STD-011` plus version binding | External AI-DOS product reference | None |
| Mission | `{{MISSION_IDENTIFIER}}` | `Mission/Mission.md` | `MissionTemplate.md` |
| DevelopmentPhases | `{{DEVELOPMENT_PHASES_IDENTIFIER}}` | `Planning/DevelopmentPhases.md` | `DevelopmentPhasesTemplate.md` |
| Roadmap | `{{ROADMAP_IDENTIFIER}}` | `Planning/Roadmap.md` | `RoadmapTemplate.md` |
| ProjectStatus | `{{PROJECT_STATUS_IDENTIFIER}}` | `Planning/ProjectStatus.md` | `ProjectStatusTemplate.md` |
| Target Declaration Profile | `{{TARGET_CONTRACT_IDENTIFIER}}` | `Governance/TargetContract.md` | `TargetContractTemplate.md` |
| Evidence Records | `{{EVIDENCE_NAMESPACE}}` | `Evidence/` | `EvidenceRecordTemplate.md` |
| Execution Outputs | `{{EXECUTION_OUTPUT_NAMESPACE}}` | `WorkUnits/` | `OperationalRecordTemplates.md` |

## 3. Authority Chain

```text
AI-DOS-STD-011
    ↓ constrains
Mission
    ↓ authorizes capability intent
DevelopmentPhases
    ↓ deterministic derivation
Roadmap
    ↓ governed operational projection
ProjectStatus
    ↓ bounded work and evidence
Operational records
```

## 4. Initialization Order

1. Record Target identity and Human Governance authority.
2. Create and approve Mission.
3. Create generation-grade DevelopmentPhases from Mission and explicit Human decisions.
4. Generate a Roadmap draft mechanically and write a derivation record.
5. Obtain and record separate Roadmap acceptance.
6. Create the Target Contract and exact declaration profile.
7. Initialize ProjectStatus from the accepted Roadmap and accepted evidence.
8. Create the Evidence index and validation surface.
9. Run the readiness checklist.
10. Request a separately authorized conformance assessment.

## 5. Safe-Stop Rules

Stop before claiming completion when any required role, identity, owner, authority, locator, source decision, dependency, evidence item, validation rule, protection, or permission is absent, ambiguous, conflicting, inaccessible, or stale.

## 6. Completion Checklist

- [ ] All required placeholders are resolved.
- [ ] Every mandatory role has one stable identity.
- [ ] Every declared locator exists inside the Target repository.
- [ ] Mission approval evidence exists.
- [ ] Every capability contains all twelve generation-grade fields.
- [ ] Roadmap derivation and acceptance evidence are separate.
- [ ] ProjectStatus contains exactly one active work unit or authorized next action.
- [ ] The exact Target Declaration Profile parses without blocker.
- [ ] Evidence records preserve provenance and subject revision.
- [ ] No produced artifact claims conformance, approval, certification, promotion, or activation by implication.

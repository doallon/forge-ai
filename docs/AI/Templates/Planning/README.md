# Planning Templates

## Status

| Field | Value |
| --- | --- |
| Template Layer | Planning |
| Status | Canonical Refactor Draft |
| Authority | `docs/AI/AIFramework.md` |
| Parent Standard | `docs/AI/Templates/Core/TemplateStandard.md` |
| Applies To | Vision, Roadmap, Phase, Stage, Historical Capability |

---

## Purpose

The Planning Template layer defines the canonical structure for planning artifacts in Forge AI and AI Framework adopters.

Planning artifacts define why work exists, where it belongs, what it may change, what it must not change, how it is validated, and when it can advance.

Planning does not implement work.

---

## Planning Hierarchy

```text
Vision
    ↓
Roadmap
    ↓
Phase
    ↓
Stage
    ↓
Historical Capability
    ↓
Generated Task
```

---

## Template Map

| Template | Purpose |
| --- | --- |
| `VisionTemplate.md` | Defines long-range direction, mission, principles, and strategic outcomes. |
| `RoadmapTemplate.md` | Converts vision into sequenced phases and major milestones. |
| `PhaseTemplate.md` | Defines a major architectural capability and its stage roadmap. |
| `StageTemplate.md` | Defines a measurable milestone within a phase. |
| `HistoricalCapabilityTemplate.md` | Defines a certified executable increment under a stage. |

---

## Naming Rule

Use `HistoricalCapabilityTemplate.md` instead of `SprintTemplate.md`.

Sprint is a delivery cadence term. Forge AI uses Historical Capability as the immutable implementation history unit.

---

## Planning Invariants

- Vision defines direction.
- Roadmap sequences direction.
- Phase owns architectural capability.
- Stage owns milestone planning.
- Historical Capability owns implementation history.
- Task is generated execution scope.
- Lower levels refine higher levels.
- Lower levels must not redefine higher authority.
- Historical identifiers must not be renumbered.

---

## Required Validation

Every planning document should support:

- authority validation;
- reference validation;
- planning hierarchy validation;
- scope validation;
- ownership validation;
- documentation synchronization review;
- certification readiness assessment when completion is claimed.

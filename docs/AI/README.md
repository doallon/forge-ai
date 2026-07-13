# AI Framework Navigation

This README is the active AI-DOS internal navigation entry point for the `docs/AI/` directory. It routes humans and AI agents to current AI-DOS v2 internal authorities and operational entry points.

This README is navigation only. It does **not** replace Target invocation contract, TargetRepositoryResolution, BootSequence, the Governance Atlas, Framework Governance, Target operational state, Target lifecycle information, Operational Core, Runtime, System Layer, Commands, Workflows, Templates, or Human Governance.

TargetRepositoryResolution and BootSequence precede normal internal navigation. TargetRepositoryResolution produces the Target Repository Resolution Result, and BootSequence consumes that result to load resolved Framework + Target Project context. This README consumes that loaded context for navigation; it does not identify a Target Repository, resolve a Target invocation-contract path, validate project declarations, or declare Target Project resources.

## Current Authority and Navigation Chain

After TargetRepositoryResolution has completed and BootSequence has loaded the resolved context, use this internal navigation order unless the active task narrows the required authority set:

```text
AI-DOS Provider invocation contract
    ↓
TargetRepositoryResolution
    ↓
BootSequence
    ↓
docs/AI/GOVERNANCE.md
    ↓
docs/AI/FrameworkGovernance.md when governance decision policy is relevant
    ↓
Resolved Target Project operational state
    ↓
Resolved Target Project lifecycle information
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/System/README.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
docs/AI/Runtime/README.md when Runtime or Engine context is required
    ↓
docs/AI/Commands/ and docs/AI/Workflows/ when task execution requires them
    ↓
docs/AI/Templates/README.md when document generation is required
```

## Navigation Boundaries

- Target invocation contract remains the AI-DOS Provider entry and, in AI-DOS self-hosting only, also contains AI-DOS Target Repository declarations.
- `docs/AI/System/TargetRepositoryResolution.md` owns active Target Repository identification, Target invocation-contract discovery, declaration resolution, validation, blocker reporting, Resolution Result production, and BootSequence handoff.
- `docs/AI/System/BootSequence.md` owns loading resolved Framework + Target Project context from the Resolution Result.
- `docs/AI/GOVERNANCE.md` remains the Governance Atlas and governance navigation map.
- `docs/AI/FrameworkGovernance.md` is used when governance decision policy is relevant after context is resolved and loaded.
- The resolved Target Project operational state is the operational-state source for the active Target Repository.
- The resolved Target Project lifecycle information is the Target strategic planning sequence authority for the active Target Repository.
- Operational Core documents (`AIFramework.md`, `AIOrchestrator.md`, and `AgentSystemPrompt.md`) route execution within loaded authority; they do not create authority, rediscover the Target Repository, resolve project paths, validate Target declarations, rerun BootSequence, or update Target operational state.
- Runtime, Command, Workflow, and Template documents are task-specific inputs and should be read only when required by the task.

## Target-Project Portability

AI-DOS self-hosting examples may reference `Target-provided operational-state documentation`, `Target-provided lifecycle documentation`, and `AI-DOS product strategic planning reference`. These are AI-DOS self-hosting examples only, not universal inputs or fallback paths.

For a separate target project, TargetRepositoryResolution reads that target repository root and its own Target invocation contract. This README does not resolve the target project's state, Target strategic planning, source roots, validation commands, protected areas, or provider reference.

## Active Directory Map

```text
docs/AI/
├── README.md
├── GOVERNANCE.md
├── AIFramework.md
├── AIOrchestrator.md
├── AgentSystemPrompt.md
├── Architecture/
├── Commands/
├── Runtime/
├── System/
├── Templates/
└── Workflows/
```

## Core Documents

| Area | Current Navigation Target |
|:---|:---|
| AI-DOS Provider entry | Target invocation contract |
| Target Repository resolution | `System/TargetRepositoryResolution.md` |
| Resolved-context loading | `System/BootSequence.md` |
| Governance Atlas | `GOVERNANCE.md` |
| Governance decision policy | `FrameworkGovernance.md` |
| Resolved operational state | Resolved Target Project operational state |
| Resolved Target strategic planning sequence | Resolved Target Project lifecycle information |
| Operational Core entry | `AIFramework.md` |
| System Layer index | `System/README.md` |
| Orchestration | `AIOrchestrator.md` |
| Agent behavior contract | `AgentSystemPrompt.md` |
| Runtime / Engine navigation | `Runtime/README.md` |
| Template Library navigation | `Templates/README.md` |
| Commands | `Commands/` |
| Workflows | `Workflows/` |

## Execution Rule

Agents should derive work only from the active task instruction and loaded authority chain. If the next action depends on operational state, consume the Target operational state loaded by BootSequence from the TargetRepositoryResolution result.
- Target lifecycle information defines Target strategic planning sequence; it does not replace live operational state.
- Runtime and Engine documents define architecture and specialization constraints; operational documents consume them.
- AI execution participants may draft, edit, validate, and recommend, but shall not approve, certify, promote, or update Target operational state unless explicitly instructed by Human Governance.

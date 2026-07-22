# Building AI-DOS Targets

This tutorial shows how to prepare a repository so an external Execution Provider can perform bounded, Human-Governed work through AI-DOS contracts.

The tutorial is explanatory. It does not replace the normative AI-DOS contracts or any Target-owned authority.

## Learning outcome

After completing this tutorial, you should be able to:

- define a Target Project identity;
- separate Target truth from AI-DOS product truth;
- establish a Target contract and operational entry;
- declare protected areas and execution boundaries;
- connect the repository entry to the Target contract and AI-DOS provider entry;
- issue one explicitly bounded Human Governance instruction;
- review the resulting validation and evidence;
- recognize when the provider must safe-stop.

## 1. Understand the Target boundary

A Target Project is the project being governed and changed.

AI-DOS is the reusable contract system used by an Execution Provider to interpret authority, scope, workflow, validation, and evidence requirements.

Keep these truth domains separate:

```text
docs/AI-DOS/
    reusable AI-DOS product and provider truth

docs/Projects/<TargetName>/
    Target-specific mission, planning, state, evidence, and governance truth
```

Do not copy Target operational state into `docs/AI-DOS/`. Do not move reusable AI-DOS workflow semantics into the Target tree.

## 2. Choose the Target identity

Record a stable Target name and truth root.

Example:

```text
Target Project: Acme Platform
Target truth root: docs/Projects/AcmePlatform/
AI-DOS truth root: docs/AI-DOS/
```

The Target identity should answer:

- Which project is being changed?
- Where does that project's truth live?
- Which repository contains the work?
- Which authority approves changes?

Avoid defining the Target by an implementation language or a single tool. A Target can use many implementation surfaces while retaining one project identity.

## 3. Create the minimum Target structure

A practical starting structure is:

```text
docs/Projects/AcmePlatform/
├── Mission/
│   ├── AGENTS.md
│   └── Mission.md
├── Planning/
│   ├── ProjectStatus.md
│   ├── DevelopmentPhases.md
│   └── Roadmap.md
└── Reports/
```

Names may differ when the Target contract declares other locations. What matters is that the resources are explicit, discoverable, and owned by the Target.

## 4. Write the Target mission

The mission describes why the Target exists and the strategic constraints that bound its development.

A minimal mission should state:

- project purpose;
- intended users or beneficiaries;
- strategic outcomes;
- non-goals;
- protected principles;
- Human Governance authority.

Example outline:

```markdown
# Acme Platform Mission

## Purpose
Provide a governed internal service platform.

## Strategic outcomes
- reduce deployment friction;
- preserve auditability;
- support bounded automation.

## Non-goals
- autonomous production deployment without Human Governance;
- replacing security review;
- allowing tools to infer project priorities from repository activity.

## Approval authority
Human Governance.
```

The mission is not a backlog and should not contain live operational state.

## 5. Write the Target contract

The Target contract is the canonical Target-side authority used before AI-DOS provider routing.

Place it at the location declared by the repository entry, commonly:

```text
docs/Projects/AcmePlatform/Mission/AGENTS.md
```

The contract should identify:

- Target Project identity;
- Target truth root;
- mission authority;
- declared Target resources;
- Target Operational Entry;
- protected areas;
- execution authorization boundaries;
- validation and evidence expectations;
- state-update authority;
- safe-stop conditions.

A compact example:

```markdown
# Acme Platform Target Contract

## Target identity
- Target Project: Acme Platform
- Target truth root: `docs/Projects/AcmePlatform/`
- AI-DOS truth root: `docs/AI-DOS/`

## Declared resources
- Mission: `docs/Projects/AcmePlatform/Mission/Mission.md`
- ProjectStatus: `docs/Projects/AcmePlatform/Planning/ProjectStatus.md`
- DevelopmentPhases: `docs/Projects/AcmePlatform/Planning/DevelopmentPhases.md`
- Roadmap: `docs/Projects/AcmePlatform/Planning/Roadmap.md`

## Operational entry
`docs/Projects/AcmePlatform/Planning/ProjectStatus.md`

## Protected areas
- mission documents require explicit Human Governance authority;
- operational state requires exact transition authority;
- evidence provenance must be preserved;
- external Targets remain out of scope.

## Execution boundary
Execute exactly one authorized bounded work unit. Stop when authority, scope, resources, or validation requirements are missing or contradictory.
```

This example is illustrative. The actual contract must align with the applicable normative AI-DOS authorities.

## 6. Establish the Target Operational Entry

The Target Operational Entry is the authoritative starting point for current Target-side work resolution.

A common choice is:

```text
docs/Projects/AcmePlatform/Planning/ProjectStatus.md
```

ProjectStatus should contain current values rather than duplicate workflow algorithms.

Useful fields include:

- current phase or capability boundary;
- current operational state;
- active task, when one exists;
- current blockers;
- protected future capabilities;
- current evidence status;
- exactly one authorized next action;
- state mutation authority.

Example:

```markdown
# Acme Platform Operational State

## Current position
- Current phase: Foundation
- Executable work unit: None
- Current blocker: None

## Protected areas
- Mission: read-only without explicit authority
- ProjectStatus: exact state-transition authority required
- Evidence records: provenance must be preserved

## Exactly one authorized next action
AWAIT HUMAN GOVERNANCE CONTINUATION OR EXPLICIT NEXT-STEP SELECTION
```

ProjectStatus should not infer work from recent commits, open pull requests, or nearby files.

## 7. Define DevelopmentPhases and Roadmap

DevelopmentPhases defines maturity or capability boundaries.

Roadmap defines ordered capability direction, dependencies, and advancement evidence.

Keep their roles distinct:

| Artifact | Owns |
|:---|:---|
| Mission | purpose and strategic constraints |
| DevelopmentPhases | capability or maturity boundaries |
| Roadmap | ordered direction, dependencies, required evidence |
| ProjectStatus | current operational values and exactly one authorized next action |

Do not turn ProjectStatus into a second Roadmap. Do not put live state into the Mission.

## 8. Declare protected areas

Protected areas prevent a short instruction from becoming broad authority.

Typical protected areas include:

- repository entry files;
- Target contract;
- Mission;
- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- evidence records;
- secrets and credentials;
- release or deployment controls;
- external Target scope;
- future capabilities not yet activated.

Each protected area should say what exact authority is required to modify it.

Weak declaration:

```text
Be careful with planning files.
```

Stronger declaration:

```text
ProjectStatus may change only through explicit Human Governance authority or one exact transition uniquely authorized by the Target contract.
```

## 9. Declare validation and evidence expectations

Before execution, the Target should make it possible to determine:

- what must be validated;
- which checks apply;
- what each check actually proves;
- what completion evidence is required;
- which limitations must be reported.

A validation command proves only the surface it exercises.

For example, a documentation link check can validate links in the modified page. It does not automatically validate Target governance, architecture, capability acceptance, or operational readiness.

Minimum completion evidence should identify:

- resolved objective;
- authorities and Target resources consumed;
- changed artifacts;
- validation performed and its limits;
- protected-area confirmation;
- blockers and risks;
- completion condition;
- state-update authority;
- exactly one recommended next step.

## 10. Connect the repository entry

The root repository entry should route an Execution Provider in the correct order:

```text
Root AGENTS.md
    ↓
Target Project contract
    ↓
AI-DOS provider entry
```

Example:

```markdown
# Repository Entry

## Target contract
`docs/Projects/AcmePlatform/Mission/AGENTS.md`

## AI-DOS provider entry
`docs/AI-DOS/AGENTS.md`

## Required order
1. Read the Target contract.
2. Resolve Target-owned context.
3. Enter AI-DOS through the provider entry.
```

The root entry should not duplicate the Target contract or AI-DOS workflows.

## 11. Verify read-only context resolution

Before authorizing mutation, ask the Execution Provider to perform a read-only resolution test.

Example:

```text
HUMAN GOVERNANCE

Read the repository entry, Target contract, Target Operational Entry, DevelopmentPhases, Roadmap, and AI-DOS provider entry.

Report:
- Target identity;
- Target truth root;
- current operational state;
- protected areas;
- exactly one authorized next action;
- blockers.

Do not modify files, branches, commits, pull requests, or operational state.
```

A compliant result should cite the actual Target authorities and should not invent an executable task.

## 12. Execute the first bounded work unit

Choose a low-risk, non-protected artifact for the first execution test.

Example instruction:

```text
HUMAN GOVERNANCE

Execute exactly one bounded work unit.

Objective:
Improve the public introduction page so a new reader can identify the Target purpose and documentation entry points.

Allowed scope:
docs/Projects/AcmePlatform/Product/Introduction.md only.

Forbidden scope:
- root AGENTS.md;
- Target contract;
- Mission;
- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- evidence history;
- implementation files;
- external Targets.

Validation:
- verify every referenced repository path exists;
- verify terminology against the Target contract and AI-DOS product documentation;
- report the exact validation surface and limitations.

Completion condition:
The introduction page explains purpose, audience, and navigation without changing normative behavior.

State authority:
No ProjectStatus mutation is authorized.

Stop conditions:
Stop before mutation if the allowed file is missing, authority conflicts, required context is unavailable, or completion would require a protected-area change.
```

This instruction is already bounded. It should not be replaced by repository-derived task selection.

## 13. Review the provider report

Check that the report includes:

- one objective;
- one bounded work unit;
- only the allowed file changed;
- all forbidden areas remained unchanged;
- validation results and limitations;
- no unsupported capability claim;
- no automatic approval claim;
- no unauthorized state mutation;
- one recommended next step.

A commit, passing check, or pull request is evidence of activity. None of them independently equals Human Governance acceptance.

## 14. Test safe-stop behavior

A Target is not ready merely because successful work can execute. It must also stop safely when context or authority is incomplete.

Try a controlled read-only test:

```text
HUMAN GOVERNANCE

Continue.

Do not invent missing Target-owned candidate inputs. Report the exact blocker if no unique bounded work unit can be resolved. Do not modify the repository.
```

Expected safe-stop reasons may include:

- no active task and no valid generation inputs;
- contradictory authority;
- missing protected-area declaration;
- missing validation requirement;
- multiple equally eligible candidates without a Target-owned tie-break;
- requested scope conflicts with a protected area;
- required Target resource is inaccessible.

Safe-stop is a correct result when execution authority cannot be resolved.

## 15. Separate lifecycle decisions

Keep these events distinct:

```text
execution completed
    ≠ validation passed
    ≠ review approved
    ≠ Human Governance accepted
    ≠ state updated
    ≠ next work activated
```

Each transition requires its owning authority and evidence.

A request to review must not be treated as approval. Approval must not silently activate the next task. A merge must not automatically rewrite Target operational state.

## Common mistakes

### Copying Target state into AI-DOS

Target mission, planning, current phase, pull request numbers, and operational evidence belong under the Target truth root.

### Letting implementation define project identity

The existence of JavaScript, Python, Rust, Markdown, a CLI, or a build system does not decide the Target's architecture or authority model.

### Using vague scope

“Improve the project” is not a bounded work unit. Name the objective, allowed artifacts, forbidden scope, validation, completion condition, and stop conditions.

### Treating validation as universal proof

A successful check proves only its declared surface.

### Allowing automatic state mutation

ProjectStatus changes require exact authority. Completion alone is not enough.

### Inventing work from repository activity

Recent commits, open issues, unfinished files, and model preference do not establish Target priority.

## Target readiness checklist

### Identity and authority

- [ ] Target name is explicit.
- [ ] Target truth root is explicit.
- [ ] Human Governance authority is explicit.
- [ ] Mission authority is explicit.
- [ ] Target contract is discoverable.

### Operational state

- [ ] Exactly one Target Operational Entry is declared.
- [ ] Current operational state is recorded.
- [ ] Active task or authorized next action is explicit.
- [ ] State mutation authority is explicit.
- [ ] ProjectStatus does not duplicate provider workflow algorithms.

### Boundaries

- [ ] Protected areas are enumerated.
- [ ] Modification authority is stated for each protected area.
- [ ] Target truth and AI-DOS truth remain separate.
- [ ] External Target scope is not activated by implication.
- [ ] Future capabilities remain inactive unless explicitly authorized.

### Execution and evidence

- [ ] One bounded instruction can be executed without ambiguity.
- [ ] Validation requirements are explicit.
- [ ] Completion evidence requirements are explicit.
- [ ] Safe-stop conditions are explicit.
- [ ] Review, acceptance, state update, and continuation remain separate.

## Next tutorial

Continue with [Providers](Providers.md) to understand how different external Execution Providers consume the same Target and AI-DOS contracts without becoming the source of project truth.
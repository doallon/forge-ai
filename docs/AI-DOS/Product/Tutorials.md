# AI-DOS Tutorials

This document provides guided, end-to-end learning paths for people who want to understand AI-DOS by using it.

AI-DOS is a Markdown-first, provider-neutral operating system for governed AI-assisted work. These tutorials are explanatory Product documentation. They do not replace normative AI-DOS contracts, Target-owned authority, or Human Governance decisions.

---

## 1. How to use these tutorials

The tutorials are ordered from foundational to advanced:

1. understand the operating model;
2. prepare a Target repository;
3. execute one bounded documentation task;
4. use Continue safely;
5. review a completed work unit;
6. apply Human Governance approval;
7. onboard an existing repository;
8. coordinate multiple providers;
9. diagnose a safe-stop;
10. run a complete end-to-end cycle.

Each tutorial contains a goal, a starting state, a bounded instruction, expected provider behavior, validation checks, and a Human Governance decision point.

The examples use generic Target names and generic paths. A real Target Project owns its own mission, planning, operational state, resources, protected areas, and evidence.

---

## 2. Tutorial 1 — Understand the operating model

### Goal

Understand the relationship between Human Governance, a Target Project, AI-DOS, and an Execution Provider.

```text
Human Governance
        ↓
Target-owned authority and context
        ↓
Resolved Target Context
        ↓
AI-DOS contracts and orchestration
        ↓
Execution Provider
        ↓
Bounded work, validation, and evidence
        ↓
Human Governance decision
```

| Concept | Owns |
|:---|:---|
| Human Governance | Final authority, intent, acceptance, approval, and next-step decisions |
| Target Project | Mission, planning, current state, protected areas, resources, and evidence |
| AI-DOS | Reusable contracts, orchestration rules, workflows, safe-stop behavior, and provider-neutral execution discipline |
| Execution Provider | Reading, editing, validation, and reporting within authorized scope |

### Learning check

You should be able to explain why these statements are false:

- the provider owns the Target mission;
- a passing test automatically means Human Governance approval;
- AI-DOS is the same thing as the Target Project;
- a current implementation language defines the product architecture;
- Continue means “edit the nearest unfinished file.”

---

## 3. Tutorial 2 — Prepare a new Target repository

### Goal

Create the minimum authority structure needed for an Execution Provider to operate without guessing.

### Suggested repository shape

```text
AGENTS.md

docs/
├── AI-DOS/
│   ├── AGENTS.md
│   └── ...
└── Projects/
    └── ExampleTarget/
        ├── Mission/
        ├── Planning/
        └── Reports/
```

The exact Target filenames are Target-owned. The repository entry should make them discoverable rather than requiring a provider to infer paths.

### Required Target declarations

The Target should declare:

- identity and truth root;
- mission authority;
- operational entry;
- current state or exactly one authorized next action;
- protected areas;
- source and validation resources;
- execution permissions;
- evidence expectations;
- state-update authority;
- safe-stop conditions.

### Example bounded instruction

```text
HUMAN GOVERNANCE

Create exactly one Target Project introduction document.

Objective:
Explain the purpose, users, boundaries, and authority model of ExampleTarget.

Allowed scope:
docs/Projects/ExampleTarget/Product/Introduction.md only.

Forbidden scope:
- AI-DOS Product documentation
- Target Mission
- Target Planning
- Reports
- implementation files

Required validation:
- confirm exactly one changed file;
- verify all relative links;
- confirm the document does not redefine AI-DOS;
- confirm no operational state changed.

State-update authority:
None.
```

### Expected provider behavior

The provider should read the repository entry, Target contract, and AI-DOS provider entry; confirm the task is bounded; modify only the allowed file; run the declared checks; report evidence; and stop.

---

## 4. Tutorial 3 — Execute one bounded documentation task

### Goal

Create one documentation artifact safely.

### Human Governance instruction

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation task.

Objective:
Create an operations overview for ExampleTarget.

Allowed scope:
docs/Projects/ExampleTarget/Product/Operations.md only.

Required content:
- operational purpose;
- normal workflow;
- responsible roles;
- validation expectations;
- escalation and safe-stop behavior.

Forbidden scope:
- Mission
- Planning
- Reports
- AI-DOS contracts
- implementation

Required validation:
- exactly one changed file;
- required headings present;
- relative links resolve;
- no Target state mutation.

Completion condition:
The page exists, validation passes, and the provider reports the exact changed artifact.
```

### Expected provider report

```text
Objective:
Create the ExampleTarget operations overview.

Changed artifact:
docs/Projects/ExampleTarget/Product/Operations.md

Validation:
- changed-file count: PASS
- required headings: PASS
- relative links: PASS
- protected areas unchanged: PASS

State update:
None.
```

### Learning point

Execution completion, validation success, review approval, Human Governance acceptance, state mutation, and next-task authorization are separate lifecycle events.

---

## 5. Tutorial 4 — Use Continue safely

### Goal

Understand continuation without turning it into unlimited autonomy.

### Starting state

The Target operational entry says no executable work unit is active and the next authorized action is to await Human Governance continuation.

```text
HUMAN GOVERNANCE

Continue.
```

### Expected resolution

A compliant provider should:

1. consume the continuation signal once;
2. read the Target operational entry fresh;
3. resolve the active capability boundary;
4. resolve the controlling objective and eligible candidates;
5. apply Target-owned priority rules;
6. select exactly one eligible bounded work unit;
7. safe-stop if selection is missing, ambiguous, blocked, or unauthorized;
8. avoid deriving work from recent repository activity alone.

### Valid outcomes

When one eligible work unit exists, the provider executes only that unit. When no eligible work unit exists, it stops before editing. When candidates are ambiguous, it reports the ambiguity rather than choosing by convenience, recency, or preference.

### Learning point

Continue is a signal to run governed resolution. It is not permission to improvise work.

---

## 6. Tutorial 5 — Review a completed work unit

### Goal

Perform a read-only review against the exact completed subject.

```text
HUMAN GOVERNANCE

Review PR #123 only.

Do not modify files.
Do not approve, merge, activate, or continue.
Validate the exact reviewed subject and report findings only.
```

### Review sequence

The reviewer should:

1. resolve the pull request and exact head revision;
2. identify every changed file;
3. confirm the subject matches the authorized work unit;
4. read the governing authority and task boundaries;
5. inspect the complete diff;
6. verify validation evidence;
7. check protected areas;
8. report findings by severity;
9. state whether the subject is approval-eligible;
10. avoid mutation.

### Example outcome

```text
Reviewed subject:
PR #123 at head abcdef1

Scope:
Exactly one documentation file changed.

Findings:
No findings.

Outcome:
APPROVE
```

### Learning point

Review remains bound to a deterministic subject identity. A later commit requires a new review.

---

## 7. Tutorial 6 — Apply Human Governance approval

### Goal

Understand approval as a governance transition rather than a synonym for review, merge, or continuation.

```text
HUMAN GOVERNANCE

Approve PR #123 at reviewed head abcdef1.
Record acceptance only.
Do not select, activate, or execute the next task.
```

### Expected behavior

The provider should re-resolve the exact subject identity, confirm it has not drifted, verify the transition is authorized, apply only the gate-closing state transition, avoid treating approval as GitHub review or merge authorization, avoid selecting the next work unit, and stop.

```text
Execution complete
        ≠
Validation passed
        ≠
Review approved
        ≠
Human Governance accepted
        ≠
Pull request merged
        ≠
Next task authorized
```

---

## 8. Tutorial 7 — Onboard an existing repository

### Goal

Adopt AI-DOS in a repository that already contains code, documentation, automation, and historical conventions.

### Phase 1 — Read-only discovery

```text
HUMAN GOVERNANCE

Perform a read-only AI-DOS onboarding survey.

Scope:
Repository authority, documentation topology, operational state, protected areas, validation surfaces, and provider entry points.

Do not modify files.
Do not infer authority from implementation language or directory proximity.
Do not propose architecture changes until the current authority model is mapped.
```

### Phase 2 — Classify surfaces

Classify each surface as reusable AI-DOS Product Truth, Target Project truth, repository entry, provider adapter, implementation surface, validation surface, historical evidence, or unowned content.

### Phase 3 — Establish boundaries

Create independent bounded work units for the repository entry, Target contract, provider entry, operational entry, protected areas, validation and evidence declarations, and safe-stop behavior.

### Phase 4 — First execution

Choose a small documentation-only task to verify the authority chain before attempting implementation changes.

### Learning point

Onboarding is not a bulk rewrite. It is the gradual replacement of ambiguity with explicit authority and bounded execution.

---

## 9. Tutorial 8 — Coordinate multiple providers

### Goal

Use different providers without allowing provider identity to become product authority.

| Provider | Role |
|:---|:---|
| Provider A | Execute one bounded change |
| Provider B | Perform independent review |
| Provider C | Run a documentation or architecture audit |
| Human Governance | Decide acceptance, correction, merge, continuation, or stop |

```text
Human Governance authorizes one work unit
        ↓
Provider A executes and validates
        ↓
Provider B reviews the exact subject
        ↓
Provider C optionally audits broader consistency
        ↓
Human Governance decides
```

### Coordination rules

- providers consume the same repository authority;
- no provider owns Target planning;
- review providers do not modify the subject;
- execution providers do not self-approve;
- audit findings do not automatically authorize remediation;
- disagreement is reported with evidence;
- subject identity remains exact across handoffs;
- each provider stops at its assigned lifecycle boundary.

---

## 10. Tutorial 9 — Diagnose a safe-stop

### Missing authority

```text
BLOCKER
Canonical Target Project contract cannot be resolved.
No repository mutation performed.
```

### Ambiguous scope

A request such as “Improve the documentation” lacks an exact objective, file boundary, validation, and completion condition. The provider should stop rather than invent scope.

### Protected-area conflict

When a task requires a protected Mission change without exact authorization, the provider should stop before mutation.

### Reviewed-subject drift

When approval names one revision but the subject has moved to another, approval must not be applied.

### No unique Continue candidate

When no deterministic tie-break exists, the provider reports the ambiguity and performs no work.

### Learning point

Safe-stop protects authority, scope, identity, and evidence. Recovery requires resolving the blocker, not bypassing it.

---

## 11. Tutorial 10 — Complete end-to-end cycle

### Step 1 — Authorize execution

```text
HUMAN GOVERNANCE

Create exactly one migration-readiness checklist.

Allowed scope:
docs/Projects/ExampleTarget/Product/MigrationReadiness.md only.

Required content:
- authority prerequisites;
- source inventory;
- compatibility concerns;
- validation plan;
- rollback expectations;
- approval gates.

Forbidden scope:
Mission, Planning, Reports, AI-DOS contracts, and implementation.

State-update authority:
None.
```

### Step 2 — Execute and validate

The provider reads authority, confirms scope, creates the file, runs Markdown-specific validation, reports evidence, and stops.

### Step 3 — Review independently

```text
HUMAN GOVERNANCE

Review PR #123 only.
Do not modify, merge, approve, or continue.
```

### Step 4 — Decide

Human Governance may request correction, accept the result, merge the pull request, authorize a state-update task, or take no action.

### Step 5 — Apply approval separately

```text
HUMAN GOVERNANCE

Approve PR #123 at reviewed head abcdef1.
Record acceptance only.
```

### Step 6 — Start a fresh continuation cycle

```text
HUMAN GOVERNANCE

Continue.
```

```text
Authorization
    ↓
Bounded execution
    ↓
Validation
    ↓
Completion report
    ↓
Independent review
    ↓
Human Governance decision
    ↓
Authorized state transition
    ↓
Optional fresh continuation
```

---

## 12. Common mistakes

- treating examples as universal authority;
- skipping Target Context;
- combining execution and review;
- inferring architecture from code;
- weakening safe-stop;
- allowing provider-specific behavior to become normative.

---

## 13. Completion checklist

You should now be able to:

- explain AI-DOS, Target Projects, Execution Providers, and Human Governance;
- prepare a repository entry and Target authority chain;
- write a sufficiently bounded instruction;
- distinguish Product Truth from Target Truth;
- use Continue without granting unbounded autonomy;
- review an exact subject without mutation;
- apply approval without merging lifecycle stages;
- onboard an existing repository incrementally;
- coordinate multiple providers under one authority model;
- recognize and diagnose safe-stop conditions;
- run one complete governed work cycle.

---

## 14. Related Product documentation

Use these tutorials together with:

- `docs/AI-DOS/Product/Overview.md`;
- `docs/AI-DOS/Product/Architecture.md`;
- `docs/AI-DOS/Product/DesignPrinciples.md`;
- `docs/AI-DOS/Product/Cookbook.md`;
- `docs/AI-DOS/Product/BestPractices.md`;
- `docs/AI-DOS/Product/Troubleshooting.md`;
- `docs/AI-DOS/Product/FAQ.md`;
- `docs/AI-DOS/Product/GettingStarted/QuickStart.md`.

For execution authority, use the applicable repository entry, Target Project contract, and normative AI-DOS contracts.

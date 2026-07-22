# AI-DOS Operations Guide

This guide explains how to operate AI-DOS in day-to-day repository work.

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work. It does not replace the Target Project, Human Governance, or the Execution Provider. It coordinates their responsibilities through declared authority, bounded execution, validation, evidence, review, and safe-stop behavior.

This page is explanatory Product documentation. The applicable repository entry, Target Project contract, Target-owned operational state, and normative AI-DOS contracts remain authoritative.

---

## 1. Purpose

Use this guide when you need to:

- prepare a repository for an AI-assisted work session;
- start one bounded work unit;
- continue from Target-owned operational state;
- supervise an Execution Provider;
- validate and review completed work;
- handle blockers and safe stops;
- coordinate multiple providers without losing subject identity;
- close a work cycle without accidentally starting another one;
- maintain operational clarity over repeated sessions.

The operating objective is not maximum provider activity. It is reliable, inspectable, reversible progress under Human Governance.

---

## 2. The operating model

A normal AI-DOS work cycle follows this shape:

```text
Human Governance intent
        ↓
Repository authority discovery
        ↓
Target Context resolution
        ↓
AI-DOS routing
        ↓
Exactly one bounded work unit
        ↓
Surface-specific validation
        ↓
Evidence-backed completion
        ↓
Independent review when required
        ↓
Human Governance decision
        ↓
Authorized state transition, when applicable
```

Each transition is distinct. Completion does not automatically mean validation, approval, acceptance, state mutation, merge, release, or authorization of the next task.

---

## 3. Operational roles

### 3.1 Human Governance

Human Governance owns final authority.

Its operating responsibilities include:

- authorizing bounded work;
- expressing continuation or explicit next-step intent;
- deciding whether review is required;
- accepting, rejecting, redirecting, or deferring completed work;
- authorizing state mutation when the Target contract requires it;
- deciding whether another work unit may begin.

Human Governance may delegate execution, but it does not disappear from the lifecycle.

### 3.2 Target Project

The Target Project owns the project-specific truth required to operate on it, including:

- mission and identity;
- planning and current operational state;
- protected areas;
- resources and permissions;
- validation expectations;
- evidence requirements;
- state-update authority;
- safe-stop conditions.

AI-DOS must consume this context rather than inventing it.

### 3.3 AI-DOS

AI-DOS owns reusable operating behavior, such as:

- provider entry;
- task routing;
- bounded-execution discipline;
- review and validation procedures;
- lifecycle separation;
- safe-stop behavior;
- evidence-oriented reporting.

AI-DOS does not own Target mission, Target priorities, or Target operational state.

### 3.4 Execution Provider

The Execution Provider reads the declared contracts and performs the authorized work.

A provider may be a coding agent, repository agent, local automation host, model-assisted tool, or another compatible execution environment.

Provider identity does not change the authority model.

---

## 4. Before every session

Treat each work session as a fresh operational resolution.

Do not rely only on memory from a prior conversation, branch, pull request, or provider run.

### 4.1 Confirm the repository

Verify:

- repository identity;
- default branch;
- current branch or reviewed subject;
- accessible authority files;
- whether the local or remote state contains uncommitted or unreviewed work.

### 4.2 Read the authority chain

The exact filenames are repository- and Target-owned, but the conceptual order is:

```text
Repository entry
        ↓
Target Project contract
        ↓
Target operational entry
        ↓
Task-specific Target authority
        ↓
AI-DOS provider entry
        ↓
Applicable workflow or command
```

Reading a file grants information, not mutation permission.

### 4.3 Resolve the current lifecycle state

Before doing work, determine whether the repository is currently:

- awaiting a new Human Governance instruction;
- holding an active executable work unit;
- awaiting validation;
- awaiting review;
- awaiting Human Governance approval or acceptance;
- awaiting an authorized state update;
- blocked;
- already complete for the requested subject.

Do not collapse these states into a generic concept of “in progress.”

### 4.4 Check for unresolved prior work

Before creating a new branch or task, inspect whether there is already:

- an active work unit;
- an open branch for the same objective;
- a pull request awaiting review;
- an unresolved review finding;
- a pending approval subject;
- a state transition that must be completed first.

Starting new work while an earlier lifecycle gate remains open can create identity conflicts and ambiguous authority.

---

## 5. Starting a bounded work unit

A good operating instruction should identify one observable result.

Recommended fields:

```text
HUMAN GOVERNANCE

Objective:
<one result>

Allowed scope:
<exact files or paths>

Forbidden scope:
<protected or excluded areas>

Required validation:
<surface-specific checks>

Completion condition:
<observable evidence required before stopping>

State-update authority:
<none, recommendation only, or exact authorized transition>
```

### 5.1 Prefer exact scope

Prefer:

```text
docs/Product/OperationsGuide.md only
```

Over:

```text
improve the documentation
```

Exact scope reduces ambiguity, review cost, accidental cleanup, and provider disagreement.

### 5.2 Keep the work unit minimal

A bounded work unit should normally have:

- one objective;
- one coherent subject;
- the smallest sufficient file set;
- predetermined validation;
- a clear stopping point;
- no implied follow-up work.

Minimality is an operational safety mechanism, not merely a style preference.

### 5.3 Name protected areas

Protected areas should be explicit when they are likely to be touched accidentally.

Common examples include:

- mission documents;
- planning and operational-state files;
- architecture authorities;
- security policy;
- historical evidence;
- release configuration;
- unrelated implementation surfaces.

---

## 6. Using continuation safely

A continuation instruction asks the operating system to resolve the next authorized action from current Target-owned state.

Example:

```text
HUMAN GOVERNANCE

Continue.
```

Continuation is not permission to choose any useful nearby task.

A compliant continuation flow should:

1. read the Target operational entry fresh;
2. resolve whether an executable work unit is already active;
3. identify the exactly authorized next action;
4. route candidate selection through the owning AI-DOS workflow when selection is authorized;
5. preserve dependencies, protected areas, and capability boundaries;
6. safe-stop when no unique eligible work unit can be resolved;
7. avoid automatically starting a second task after the first one completes.

### 6.1 Explicit next-step selection

Human Governance may name a specific next step:

```text
HUMAN GOVERNANCE

Continue.
Next Step: <bounded candidate>
```

An explicit selection may replace priority ranking where the Target contract allows it, but it does not waive:

- eligibility;
- dependencies;
- scope control;
- validation requirements;
- protected areas;
- ownership boundaries;
- safe-stop conditions.

### 6.2 Continuation blockers

Safe-stop when:

- the Target operational entry is missing or contradictory;
- more than one active work unit is recorded;
- no eligible candidate exists;
- multiple candidates remain tied without a declared tie-break;
- the requested work exceeds the active capability;
- a prior review or approval gate is still open;
- the provider cannot resolve the required resources.

---

## 7. Supervising execution

During execution, confirm that the provider:

- preserves the exact objective;
- changes only authorized artifacts;
- does not perform unrelated cleanup;
- does not infer authority from file proximity or implementation language;
- reports newly discovered blockers;
- runs only relevant validation;
- stops at the declared completion condition.

### 7.1 Watch for scope drift

Typical signs of scope drift include:

- adding a second document “for completeness”;
- redesigning adjacent architecture;
- updating planning because execution succeeded;
- rewriting terminology outside the authorized file;
- changing tests unrelated to the modified surface;
- opening follow-up branches automatically.

A useful improvement is not automatically an authorized improvement.

### 7.2 Watch for authority substitution

A provider must not replace Target-owned authority with:

- repository conventions;
- recent commit history;
- issue or pull-request state alone;
- model memory;
- implementation-language assumptions;
- external best practices that were not adopted by the Target.

### 7.3 Preserve the reviewed subject

The work unit must retain one stable subject identity through:

- execution;
- validation;
- evidence collection;
- review;
- approval;
- authorized state transition.

If the branch, commit, file set, or reviewed revision changes, the review basis may need to be re-established.

---

## 8. Validation operations

Validation should match the changed surface.

### 8.1 Documentation changes

Relevant checks may include:

- exact changed-file count;
- heading and structure checks;
- relative-link resolution;
- forbidden path or terminology checks;
- Product Truth versus Target Truth review;
- duplicate-content review;
- protected-area confirmation.

### 8.2 Implementation changes

Relevant checks may include:

- unit or integration tests;
- type checking;
- package or build validation;
- command-line behavior checks;
- migration tests;
- runtime evidence.

Passing implementation checks does not independently validate AI-DOS architecture, governance, or Target acceptance.

### 8.3 Validation reporting

Every validation result should state:

- the command or inspection performed;
- the result;
- the surface exercised;
- any skipped or unavailable check;
- any limitation on the claim.

Example:

```text
Changed-file scope check: PASS
Surface: branch comparison against master
Result: exactly one file added

Relative-link check: PASS
Surface: links in OperationsGuide.md
Result: all declared relative targets resolve
```

---

## 9. Evidence and completion reporting

A useful completion report should contain:

### Objective

Repeat the resolved objective without broadening it.

### Scope

Name the exact changed artifacts.

### Validation

Report checks, results, exercised surfaces, and limitations.

### Protected areas

Confirm which protected areas remained unchanged.

### Blockers and risks

State unresolved issues or explicitly report that none were found.

### State-update authority

State whether operational state was changed, recommended for later change, or left untouched.

### Exactly one next step

Recommend one next action and stop.

A recommendation is not authorization.

---

## 10. Review operations

Review is a non-mutating evaluation of an exact subject.

A reviewer should confirm:

- subject identity;
- authorized objective;
- allowed and forbidden scope;
- changed files;
- validation evidence;
- protected-area compliance;
- unresolved findings;
- whether the result is approval-eligible.

### 10.1 Review outcomes

Typical outcomes include:

- approve;
- approve with non-blocking observations;
- request changes;
- block because the subject cannot be resolved;
- block because validation or evidence is incomplete.

### 10.2 Review is not acceptance

These are separate:

```text
Review approval
        ≠
Human Governance acceptance
        ≠
Merge
        ≠
Operational-state mutation
        ≠
Next-task authorization
```

### 10.3 Re-review after change

When the reviewed revision changes, verify whether the previous review still applies.

Material changes normally require review of the new revision identity.

---

## 11. Human Governance approval and acceptance

Human Governance decides whether completed and reviewed work becomes accepted Target history or triggers an operational-state transition.

Approval should resolve an exact subject, either explicitly or through a uniquely recorded pending subject where the Target contract supports that mechanism.

Safe-stop when:

- no subject can be resolved;
- multiple subjects are pending;
- the recorded subject differs from the reviewed revision;
- validation evidence is incomplete;
- an unresolved blocker remains;
- the subject is already accepted or invalidated.

Approval should not be interpreted as permission to:

- select another task;
- begin implementation;
- merge unrelated work;
- activate a later capability;
- perform additional cleanup.

---

## 12. Operational-state updates

Live Target state is protected Target truth.

Change it only when exact authority exists.

A state update should:

- identify the exact subject;
- preserve reviewed-subject identity;
- apply only the authorized transition;
- record required evidence;
- avoid rewriting history;
- avoid selecting or activating the next task unless separately authorized.

When state-update authority is absent, provide a recommendation rather than mutating the state.

---

## 13. Safe-stop operations

Safe-stop is a successful safety outcome when execution cannot proceed deterministically.

A useful safe-stop report contains:

- the blocked objective;
- the exact unresolved condition;
- the authority or resource that could not be resolved;
- what was inspected;
- confirmation that no unauthorized mutation occurred;
- one action Human Governance can take to unblock the work.

Examples:

```text
SAFE STOP

Blocker:
No unique eligible work unit can be resolved from the current Target state.

Mutation:
None.

Required Human Governance action:
Select exactly one bounded candidate.
```

Do not hide a blocker by choosing the most convenient interpretation.

---

## 14. Operating with multiple providers

Multiple providers can improve review diversity and reduce provider-specific blind spots, but they increase coordination risk.

### 14.1 Assign one role per provider run

Typical role separation:

```text
Provider A: execute
Provider B: review
Provider C: audit a specific risk
Human Governance: decide
```

Avoid allowing several providers to mutate the same branch concurrently unless the operating procedure explicitly supports it.

### 14.2 Share stable subject identity

Every provider should receive:

- repository identity;
- branch or pull request;
- exact commit or revision when relevant;
- changed-file set;
- objective;
- review or execution role;
- authority boundaries.

### 14.3 Resolve disagreement with evidence

When providers disagree:

1. compare the exact reviewed subject;
2. identify whether they read the same authorities;
3. compare validation evidence;
4. classify the disagreement as factual, interpretive, or authority-related;
5. let Human Governance decide unresolved policy questions.

Do not average conflicting conclusions into a false consensus.

---

## 15. Routine operational cadence

A stable cadence can follow this sequence:

### Session opening

- confirm repository and subject;
- read authority chain;
- resolve lifecycle state;
- identify one authorized action.

### Execution

- create one bounded branch when repository workflow requires it;
- modify only authorized files;
- validate the exact surface;
- produce completion evidence;
- stop.

### Review

- resolve exact revision identity;
- inspect scope and evidence;
- report findings;
- do not mutate the subject.

### Governance decision

- accept, reject, redirect, or defer;
- authorize state mutation separately when required;
- authorize the next task separately.

### Session closure

- confirm no hidden active task remains;
- confirm pending review or approval subjects are accurately represented;
- record blockers through the proper Target-owned surface;
- stop without implied continuation.

---

## 16. Common operational failures

### Starting from memory

**Failure:** The provider continues prior work without reading current state.

**Correction:** Resolve authority and operational state fresh.

### Treating a pull request as Target state

**Failure:** GitHub status is assumed to define project acceptance or priority.

**Correction:** Use the Target-owned operational entry.

### Over-broad instructions

**Failure:** “Improve everything” causes uncontrolled scope expansion.

**Correction:** Authorize one observable result and exact scope.

### Unrelated validation

**Failure:** A passing build is used to claim documentation or governance correctness.

**Correction:** Match validation to the changed surface.

### Automatic next-task execution

**Failure:** The provider completes one task and immediately starts another.

**Correction:** Stop at completion and await separate authorization.

### Review identity drift

**Failure:** A review references an earlier revision after new commits were added.

**Correction:** Re-resolve and review the current subject.

### Product and Target contamination

**Failure:** Reusable AI-DOS Product documentation contains one Target's live planning or operational state.

**Correction:** Keep reusable Product Truth and Target-specific Truth in their owning roots.

---

## 17. Operational readiness checklist

Before execution:

- [ ] Repository identity is confirmed.
- [ ] Authority chain is readable.
- [ ] Target operational state was read fresh.
- [ ] Exactly one objective is resolved.
- [ ] Allowed scope is explicit.
- [ ] Protected areas are known.
- [ ] Validation is predetermined.
- [ ] State-update authority is explicit.
- [ ] No earlier lifecycle gate conflicts with the task.

Before reporting completion:

- [ ] Only authorized artifacts changed.
- [ ] Required validation ran.
- [ ] Evidence names the exercised surface.
- [ ] Limitations are reported.
- [ ] Protected areas remained unchanged.
- [ ] The reviewed subject can be identified exactly.
- [ ] No next task was started automatically.

Before Human Governance acceptance:

- [ ] The exact subject is resolved.
- [ ] Review outcome is known.
- [ ] Required evidence is complete.
- [ ] No unresolved blocker remains.
- [ ] The authorized state transition is explicit.
- [ ] Acceptance is not being confused with merge or continuation.

---

## 18. Compact operating playbook

```text
1. Read authority.
2. Resolve current state.
3. Identify exactly one authorized action.
4. Confirm objective, scope, protection, validation, and completion.
5. Execute without expansion.
6. Validate the changed surface.
7. Report evidence and stop.
8. Review the exact revision when required.
9. Let Human Governance decide.
10. Mutate Target state only with exact authority.
11. Start another task only through a separate authorized transition.
```

---

## 19. Related Product documentation

Use this guide together with:

- `GettingStarted/QuickStart.md` for the first complete work cycle;
- `Cookbook.md` for task-oriented recipes;
- `Tutorials.md` for guided learning paths;
- `BestPractices.md` for recurring operating habits;
- `Troubleshooting.md` for blockers and recovery;
- `DesignPrinciples.md` for the rationale behind the operating model;
- `MigrationGuide.md` for onboarding an existing repository;
- `Glossary.md` for recurring terminology.

Normative execution behavior remains owned by the applicable AI-DOS contracts and Target-owned authorities.

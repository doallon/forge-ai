# AI-DOS Glossary

A public terminology reference for AI-DOS users, Target Project owners, Execution Provider implementers, reviewers, auditors, and documentation contributors.

This page explains commonly used AI-DOS terms in publication-oriented language. It does not replace the canonical contracts, workflows, RFCs, checklists, Target authorities, or operational state records that own their exact semantics.

## How to use this glossary

Use this page to:

- understand recurring AI-DOS terminology;
- distinguish product truth from Target Project truth;
- interpret workflow and lifecycle language;
- read provider reports consistently;
- identify the canonical owner of a term;
- avoid treating implementation details as architectural authority.

When a glossary definition and a canonical authority appear to conflict, the canonical authority governs.

## Core terms

### AI-DOS

The reusable, Target-independent AI operating system defined under `docs/AI-DOS/`.

AI-DOS owns reusable product contracts, provider behavior, workflow routing, system semantics, review mechanics, validation expectations, and other product-wide rules. It does not own the mission, planning, operational state, evidence status, or protected areas of a particular Target Project.

### Target Project

A project that uses AI-DOS through its own Target-owned contract and operational context.

A Target Project owns its identity, mission, planning, current state, protected areas, declared resources, evidence, and Human Governance decisions.

### Forge AI

The Target Project used in this repository to develop, validate, self-apply, and harden AI-DOS.

Forge AI truth belongs under `docs/Projects/ForgeAI/`. Forge AI is not the universal definition of an AI-DOS Target Project.

### Product truth

Reusable AI-DOS authority that applies independently of any specific Target Project.

In this repository, AI-DOS product truth belongs under `docs/AI-DOS/`.

### Target truth

Project-specific authority describing a Target Project's mission, planning, operational state, protected areas, resources, evidence, and authorization.

Target truth must not be copied into reusable AI-DOS product documentation as if it were universal behavior.

### Truth root

The repository location that owns a category of authoritative information.

Examples in this repository:

- `docs/AI-DOS/` owns AI-DOS product truth;
- `docs/Projects/ForgeAI/` owns Forge AI Target Project truth.

### Canonical authority

The artifact that owns the exact semantics for a subject.

Public product documentation may summarize or route readers to a canonical authority, but it must not silently redefine it.

### Normative

Binding within the scope declared by the owning artifact.

Normative documents define required behavior, authority, constraints, schemas, or lifecycle rules. A document is not normative merely because it is detailed.

### Explanatory

Intended to help readers understand or use the system without owning the underlying semantics.

Tutorials and public Reference pages are generally explanatory unless explicitly declared otherwise.

## Governance and authority

### Human Governance

The human approval and authorization authority governing bounded work, protected areas, state transitions, and acceptance decisions for a Target Project.

Human Governance intent does not automatically mean every possible action is authorized. The applicable Target and AI-DOS contracts still determine scope, routing, and safe-stop behavior.

### Authorization

Permission to perform a specific action within a defined scope.

Authorization should identify the objective, allowed artifacts, forbidden areas, validation requirements, completion condition, and any state-mutation authority.

### Explicitly bounded task

A task whose objective, scope, expected artifacts, protected boundaries, validation, and completion condition are sufficiently clear to execute without inventing work.

An explicitly bounded task must not be replaced or broadened by state-derived task selection.

### State-derived work resolution

The process used when Human Governance requests continuation or progress but does not supply a sufficiently bounded executable task.

The Target Project supplies current context and priority inputs; AI-DOS workflows perform candidate construction, eligibility evaluation, selection, and safe-stop handling according to their canonical owners.

### Protected area

A file, document family, capability, state field, or scope that cannot be modified without exact authorization.

Protected areas prevent nearby or convenient work from expanding into sensitive governance, planning, evidence, mission, or capability surfaces.

### Scope expansion

Any change that adds objectives, files, behaviors, capabilities, or follow-up work beyond the authorized task.

Scope expansion is prohibited unless separately authorized.

### Safe stop

A controlled halt when execution cannot proceed deterministically, safely, or within authority.

A safe stop reports the blocker and does not invent context, select arbitrarily, broaden scope, or mutate protected state.

### Blocker

A condition that prevents authorized work from continuing.

Examples include missing authority, contradictory inputs, unresolved identity drift, inaccessible required resources, non-unique candidate resolution, or protected-area conflict.

## Target context and resources

### Resolved Target Context

The bounded set of Target-owned information supplied to an AI-DOS Execution Provider for a specific invocation.

It may include the objective, scope, constraints, resources, protected areas, evidence expectations, current state, priority inputs, and state-update authority.

### Target contract

The Target-owned contract that defines the Target Project's identity, authority boundaries, declared resources, operational entry, protected areas, and execution constraints.

A Target contract consumes AI-DOS provider behavior by reference rather than duplicating it.

### Target Operational Entry

The single Target-owned starting point for resolving current operational context.

It identifies live Target state but does not define provider internals or reusable AI-DOS workflow semantics.

### ProjectStatus

A Target-owned live operational state record.

It may identify the current capability boundary, evidence status, active work unit, blockers, protected boundaries, transition inputs, and exactly one authorized next action. It is not a general history log or a duplicate workflow specification.

### DevelopmentPhases

A Target-owned planning authority describing capability boundaries and maturity progression.

It constrains what may be active but does not by itself authorize a work unit.

### Roadmap

A Target-owned planning authority describing capability direction, dependencies, evidence expectations, and strategic priority.

A Roadmap does not substitute for current operational authorization.

### Declared resource

A Target-owned or task-specific artifact explicitly identified as relevant to the current work.

Resources should be explicit, accessible, authorized, and bounded.

### Source scope

The exact repository surface that may be read or modified for a task.

Source scope may include files, directories, patterns, or task-specific implementation surfaces, subject to precedence and protected-area rules.

### Validation resource

A declared check, test, script, review criterion, scenario, or evidence source used to verify a bounded claim.

A validation resource proves only the surface it actually exercises.

## Providers and execution

### Execution Provider

An AI host, coding agent, automation tool, runtime, or future system that consumes Resolved Target Context and executes through AI-DOS provider contracts.

The provider is replaceable and must not become the owner of Target truth.

### Provider neutrality

The requirement that reusable AI-DOS semantics not depend on a particular model vendor, coding host, repository service, or tool implementation.

Provider-specific adapters may exist, but they must not redefine canonical behavior.

### Provider entry

The AI-DOS contract that accepts Resolved Target Context and routes the invocation into the AI-DOS Operational Core.

### Adapter

A tool-specific discovery or integration layer that helps a provider locate or invoke canonical AI-DOS behavior.

An adapter is non-authoritative unless an owning contract explicitly says otherwise.

### Operational Core

The canonical AI-DOS execution route that interprets resolved context, applies orchestration, selects the applicable workflow, and preserves system boundaries.

### AI Framework

The AI-DOS framework-level contract that defines reusable operating principles and architecture-level behavior.

### AI Orchestrator

The AI-DOS orchestration contract responsible for routing resolved work through the applicable command, workflow, and execution sequence.

### Agent System Prompt

The provider-facing system instruction that binds agent behavior to the resolved Target Context and applicable AI-DOS routes.

### Task-specific route

The command, workflow, checklist, or sequence selected for the current bounded objective.

## Commands and workflows

### Command

An intent-oriented entry describing the kind of action requested, such as execution, review, correction, audit, approval, or continuation.

A command routes work; it does not by itself own every downstream procedure.

### Intent-based routing

Routing determined by the meaning of the Human Governance instruction rather than by one exact phrase.

Equivalent wording may route to the same command when the intent is unambiguous.

### Workflow

A canonical procedure that owns a defined sequence, decision, mutation, validation, or handoff.

Public workflow documentation summarizes these routes but does not replace the owning workflow files.

### Task Planner

The AI-DOS workflow that owns candidate eligibility, priority, selection, and selection safe stops for state-derived continuation.

### Task Generation Workflow

The AI-DOS workflow that owns candidate construction when no predeclared eligible candidate is available.

It consumes Target-owned generation inputs and must not invent missing authority.

### Execution Sequence

The canonical sequence that governs bounded execution, precondition checks, identity resolution, mutation, validation, evidence collection, and reporting.

### Project State Updater

The AI-DOS workflow that validates and applies an exactly authorized Target state transition.

It does not infer permission merely from repository activity, review completion, or merge state.

### Review workflow

A non-mutating evaluation route that inspects an exact reviewed subject against declared authority, scope, validation, and completion criteria.

### Correction workflow

A bounded route for addressing actionable review findings while preserving the reviewed subject's identity and authorized scope.

### Audit workflow

A structured evaluation route used to inspect a repository, artifact family, behavior, or evidence surface without silently changing it.

## Work-unit lifecycle

### Work unit

A bounded unit of authorized work with a defined objective, scope, owner, validation, evidence expectation, and completion condition.

### Active work unit

The single work unit currently activated for execution in a Target Project, when the Target contract and state record define such a lifecycle.

### Candidate

A possible work unit considered during state-derived selection.

A candidate is not active merely because it exists, appears useful, or ranks highly.

### Eligible candidate

A candidate that satisfies applicable authority, dependency, capability, protected-area, scope, validation, and other selection constraints.

### Candidate selection

The deterministic choice of exactly one eligible candidate according to the applicable Target priority policy and AI-DOS workflow rules.

### Activation

The authorized transition that records a selected work unit as active before execution begins.

Selection and activation are distinct.

### Execution

The authorized mutation or non-mutating work performed within the active task's scope.

### Completion

The point at which the task's observable completion condition and required evidence have been satisfied.

Completion does not automatically equal review, approval, acceptance, merge, or continuation.

### Review

Independent or provider-separated evaluation of an exact subject and revision.

Review is non-mutating unless a separate correction task is authorized.

### Approval

Human Governance acceptance of an exact eligible subject or a uniquely recorded pending approval subject.

Approval is not the same as repository merge, continuation, or execution of the next task.

### Acceptance

The Target-owned recognition that approved evidence or a completed work unit has passed the applicable governance gate.

### Continuation

Human Governance intent to advance to the next authorized work-resolution step.

Continuation does not mean automatic approval of prior work.

### Merge

A repository-provider action that integrates a branch or change set into another branch.

Merge state is evidence about repository integration; it is not automatically Target approval, acceptance, capability activation, or state transition.

### Gate-closing transition

The exact Target state mutation that closes an approval-eligible lifecycle gate without selecting or executing subsequent work.

## Review and identity

### Review subject

The exact artifact, branch, change set, pull request, file set, or other bounded object being reviewed.

### Review Subject Locator

A provider-neutral locator capable of resolving the review subject.

A GitHub pull request number may realize this field in one provider, but the universal concept is not GitHub-specific.

### Reviewed-Subject Revision Identity

The exact immutable or re-resolvable revision that was actually reviewed.

This prevents approval or correction from silently drifting to a different subject revision.

### Identity drift

A mismatch between the reviewed revision and the revision later presented for approval, correction, or state mutation.

Identity drift requires re-resolution and may require safe stop or a new review.

### Review outcome

The structured result of a review, such as approval-eligible, changes requested, blocked, or unable to determine, according to the owning review contract.

### Finding

A specific, evidence-backed issue discovered during review or audit.

A useful finding identifies the affected surface, the violated authority or expectation, the consequence, and the required correction.

### No findings

A review result indicating that no actionable issue was identified within the reviewed scope and evidence.

It does not prove unreviewed surfaces or broader system correctness.

## Validation and evidence

### Validation

The process of checking a bounded claim against declared criteria using appropriate evidence.

### Validation claim boundary

The rule that validation proves only the surface actually exercised.

For example, implementation-specific tests do not independently prove governance correctness, Markdown contract consistency, Target acceptance, or capability activation.

### Evidence

Observable material supporting a claim about execution, validation, review, integration, or acceptance.

Evidence may include diffs, test results, scenario results, reports, revision identities, changed-file lists, or immutable repository history.

### Completion evidence

Evidence showing that the task's declared completion condition was satisfied.

### Integration evidence

Evidence showing that the reviewed change was integrated into the intended repository state.

Integration evidence does not substitute for Human Governance approval.

### Provenance

Information identifying where evidence came from, which subject and revision it applies to, and how it was produced.

Evidence provenance must not be fabricated, obscured, or rewritten.

### Evidence record

A durable artifact that records validation, review, audit, or acceptance evidence.

Evidence records should preserve original attribution and scope.

### Scenario

A defined test or validation case used to evaluate behavior under controlled inputs and expected outcomes.

### PASS

A scenario or validation result indicating that the declared acceptance criteria were satisfied for the tested surface.

PASS does not imply product-wide certification.

### FAIL

A scenario or validation result indicating that one or more declared acceptance criteria were not satisfied.

### Certification

A stronger formal claim that requires an explicitly defined certification authority, scope, criteria, and evidence.

Routine validation, review, merge, or acceptance must not be mislabeled as certification.

## Architecture and implementation

### MD-first

The design principle that governing Markdown artifacts are the canonical normative system surface rather than secondary documentation around implementation code.

### Implementation surface

A bounded executable or supporting technology surface, such as a CLI, adapter, script, test harness, package, or compatibility layer.

Implementation surfaces are subordinate to the normative contracts governing them.

### Implementation interpretation boundary

The rule that repository-language signals do not define AI-DOS product identity, architecture, or future technology direction.

### Replaceable implementation

An implementation that may be changed without changing the product's canonical meaning, provided the replacement continues to satisfy the governing contracts.

### CLI

A command-line interface implementation surface.

A CLI may expose selected AI-DOS capabilities, but it is not automatically the AI-DOS engine, kernel, or full architecture.

### Runtime

An execution environment that realizes some AI-DOS behavior.

A runtime is not authoritative over the normative contracts it implements.

### Engine

A specialized execution component described by an owning architecture or RFC artifact.

The term must not be used to promote an incidental source file into product-wide authority.

### Kernel

A future or specialized core execution concept only where explicitly defined by canonical AI-DOS authority.

The existence of bootstrap code or a CLI does not prove that an AI-DOS kernel exists or is active.

### RFC

A Request for Comments artifact used to define, propose, or refine architecture and system behavior.

Its authority depends on its declared status, owner, scope, and relationship to active contracts.

### Draft

A document status indicating that the artifact is not yet fully accepted or active unless another authority explicitly consumes it.

### Active

A document or capability status indicating that the artifact currently governs within its declared scope.

### Accepted

A Target or evidence status indicating that the applicable Human Governance gate has been satisfied.

Accepted does not necessarily mean implemented everywhere, certified, or permanently immutable.

### Pending

A state indicating that required evidence or work has not yet been accepted.

### Blocked

A state indicating that progress cannot continue until the recorded blocker is resolved.

## Documentation terms

### Public product documentation

Publication-oriented AI-DOS material intended to explain, teach, or provide lookup support.

It should link to canonical owners and avoid duplicating normative semantics.

### Tutorial

Scenario-based instructional material that teaches readers how to perform or understand a task.

### Reference

Lookup-oriented documentation organized for direct answers, terminology, commands, workflows, specifications, or frequently asked questions.

### Concept document

Explanatory material that develops understanding of an AI-DOS principle, boundary, or model.

### Specification reference

A public map that helps readers find canonical specifications and interpret their status and ownership.

### Cross-reference

A link from explanatory documentation to the artifact that owns the exact behavior or definition.

### Duplication

Restating canonical semantics in another artifact in a way that creates a second authority or drift risk.

Explanatory summaries are acceptable only when they clearly defer to the canonical owner.

## Frequently confused distinctions

| Terms | Distinction |
|:---|:---|
| AI-DOS / Forge AI | Reusable product versus one Target Project |
| Product truth / Target truth | Universal provider behavior versus project-specific authority |
| Command / Workflow | Intent-oriented route versus owning procedure |
| Candidate / Active work unit | Possible work versus authorized executing work |
| Selection / Activation | Choosing a candidate versus recording it as active |
| Completion / Review | Finishing work versus evaluating it |
| Review / Approval | Provider evaluation versus Human Governance decision |
| Approval / Merge | Governance gate versus repository integration |
| Merge / Acceptance | Provider state versus Target-owned governance state |
| Acceptance / Continuation | Closing the current gate versus advancing to future work resolution |
| Validation / Certification | Bounded evidence versus formal broader assurance |
| Implementation / Architecture | Replaceable realization versus normative product structure |
| Safe stop / Failure | Controlled authorized halt versus unsuccessful execution outcome |

## Terminology rules for documentation authors

When writing AI-DOS documentation:

1. Use `AI-DOS` for reusable product behavior.
2. Use `Target Project` for project-specific authority.
3. Name Forge AI only when the example is intentionally Forge AI-specific.
4. Do not describe repository merge as Human Governance approval.
5. Do not describe passing tests as product-wide validation.
6. Do not use `engine`, `kernel`, or `runtime` without an owning authority.
7. Distinguish selection, activation, execution, review, approval, acceptance, and continuation.
8. Link to canonical owners instead of duplicating normative rules.
9. State the scope of every validation or evidence claim.
10. Preserve provider-neutral language unless discussing a provider-specific adapter or realization.

## Related public documentation

- [Reference hub](README.md)
- [Commands](Commands.md)
- [Workflows](Workflows.md)
- [Specifications](Specifications.md)
- [FAQ](FAQ.md)
- [Tutorials](../Tutorials/README.md)
- [Concepts](../Concepts/README.md)

## Glossary maintenance checklist

Before adding or changing a term, confirm that:

- the term already exists in an AI-DOS or Target authority, or is clearly marked explanatory;
- the definition does not create new normative behavior;
- the canonical owner is identifiable;
- Target-specific state is not presented as universal product truth;
- provider-specific realizations are not presented as universal schemas;
- lifecycle terms remain distinct;
- validation claims remain bounded;
- obsolete terms are not silently revived;
- links resolve to the current public or canonical owner;
- the change remains within the authorized documentation scope.

---

This glossary is explanatory. Canonical AI-DOS and Target authorities govern whenever exact semantics, current state, authorization, or conflict resolution is required.

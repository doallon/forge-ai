# AI-DOS Best Practices

AI-DOS works best when authority, scope, execution, validation, evidence, and Human Governance decisions remain explicit and separate.

This guide presents practical habits for using AI-DOS safely and effectively. It is publication-oriented Product documentation. It explains recommended practice but does not replace normative AI-DOS contracts, Target-owned authority, repository policy, or Human Governance decisions.

## 1. Start from authority, not activity

Do not begin by asking what file is nearby, what code is easy to change, or what task appears convenient.

Begin by resolving:

- which Target Project owns the work;
- which Target-owned authority governs the request;
- what objective is authorized;
- what scope is allowed;
- what areas are protected;
- what evidence is required;
- what decision remains reserved for Human Governance.

Repository activity is not automatically progress. A change is useful only when it advances an authorized objective without crossing its boundaries.

## 2. Keep Product Truth and Target Truth separate

AI-DOS owns reusable product contracts and provider behavior. A Target Project owns its own mission, planning, operational state, permissions, protected areas, resources, priorities, and evidence.

Recommended practice:

- place reusable AI-DOS product truth under the AI-DOS truth root;
- place Target-specific truth under the Target Project truth root;
- consume information across the boundary through declared contracts and resolved context;
- do not copy Target state into reusable product documents;
- do not insert provider algorithms into Target-owned planning or state records.

This separation prevents one project from becoming the hidden definition of the product.

## 3. Prefer one bounded work unit

A strong AI-DOS task should identify one coherent objective and one observable completion condition.

A bounded work unit normally declares:

- objective;
- owner;
- allowed artifacts;
- forbidden artifacts;
- dependencies;
- protected boundaries;
- validation requirements;
- evidence requirements;
- stop conditions;
- completion condition.

Avoid combining unrelated improvements merely because they are discovered during execution.

A useful test is:

> Can a reviewer determine exactly what was authorized, exactly what changed, and exactly whether the work is complete?

When the answer is no, the work unit is probably too broad.

## 4. Make scope concrete

Terms such as “clean up,” “improve,” “finish,” and “fix everything” are not sufficiently bounded by themselves.

Prefer concrete scope statements such as:

- create one named document;
- update one declared index;
- correct one defined terminology family;
- validate one contract boundary;
- review one exact subject revision;
- produce one evidence artifact.

Name exact paths when the task truly depends on exact files. Use semantic boundaries when exact paths are not stable or would make a reusable contract Target-specific.

## 5. State what must not change

Allowed scope is only half of a safe instruction. Strong work units also identify protected or excluded areas.

Examples include:

- no ProjectStatus mutation;
- no Roadmap or DevelopmentPhases change;
- no Mission change;
- no capability activation;
- no implementation-language promotion;
- no external Target execution;
- no normalization beyond the named terminology family;
- no acceptance, release, certification, or readiness claim.

Explicit exclusions reduce accidental scope expansion and make review faster.

## 6. Separate selection, activation, execution, review, and approval

These lifecycle stages are related but not interchangeable.

- **Selection** identifies the eligible work unit.
- **Activation** records that the work unit is authorized to execute.
- **Execution** performs only the bounded work.
- **Validation** tests the declared surface.
- **Review** evaluates the exact reviewed subject.
- **Approval** is a Human Governance decision or an explicitly authorized lifecycle transition.
- **Merge** is repository integration and does not automatically equal Target acceptance.

Do not allow one stage to silently perform another.

For example:

- completing a change does not approve it;
- passing tests does not activate a capability;
- review does not mutate operational state;
- merge does not automatically update Target evidence status;
- approval of one subject does not select the next task.

## 7. Preserve reviewed-subject identity

A review must remain bound to the exact subject that was examined.

Recommended practice:

- identify the review subject before review begins;
- record the exact revision identity used for the review;
- re-resolve the subject before approval or state mutation;
- stop when the subject has changed materially;
- do not transfer findings or approval from one revision to another without re-evaluation.

This prevents stale reviews from being treated as evidence for unreviewed changes.

## 8. Validate only what you claim

Validation evidence must name the surface actually exercised.

Examples:

- a Markdown link check validates declared links, not architectural correctness;
- a schema validator validates the declared schema surface, not Human Governance approval;
- unit tests validate the tested implementation behavior, not all normative contracts;
- TypeScript typechecking validates the TypeScript surface, not the AI-DOS product architecture;
- a provider-specific integration test validates that provider route, not universal provider neutrality.

Avoid product-wide claims from implementation-specific checks.

A good validation report says:

1. what was run;
2. what artifact or behavior it exercised;
3. what passed or failed;
4. what remains untested;
5. whether any blocker remains.

## 9. Treat evidence as a first-class artifact

Evidence should allow another reviewer to reconstruct why a conclusion was reached.

Good evidence is:

- attributable;
- reproducible when possible;
- bound to a specific subject or revision;
- explicit about commands, inputs, and outputs;
- honest about limitations;
- preserved without rewriting provenance;
- separate from approval or certification claims.

Do not fabricate missing evidence, convert assumptions into facts, or obscure failed checks.

## 10. Use safe-stop as a success condition

Safe-stop is not a failure of intelligence. It is the correct result when authority, context, identity, eligibility, scope, or required evidence cannot be resolved deterministically.

Stop before mutation when:

- the Target Project cannot be identified;
- authoritative context is missing or contradictory;
- more than one work unit appears active;
- no eligible task can be selected;
- scope is ambiguous;
- protected-area rules conflict with the requested work;
- the reviewed subject has drifted;
- validation cannot support the requested claim;
- required permissions are absent;
- a Human Governance decision is required.

A useful safe-stop report includes:

- the unresolved condition;
- the authority or input that was checked;
- why execution cannot continue safely;
- the minimum information or decision needed to proceed.

## 11. Do not fill gaps with convention

AI agents often infer conventional components from repository signals. AI-DOS practice rejects that shortcut.

Do not assume that:

- a TypeScript file is the system kernel;
- a package manifest defines product architecture;
- a test directory proves complete coverage;
- a branch or pull request is Target-owned state;
- a familiar framework should be introduced;
- a current provider is the permanent provider model;
- a common industry workflow overrides repository contracts.

Use declared authority and bounded task context instead of convention.

## 12. Keep the MD-first boundary visible

In AI-DOS, governing Markdown artifacts are normative system contracts. They are not merely explanatory documentation around code.

Recommended practice:

- distinguish normative contracts from publication-oriented explanations;
- keep executable surfaces subordinate to the contracts that govern them;
- avoid describing one implementation language as the product architecture;
- make implementation limitations explicit;
- preserve the future ability to replace adapters, runtimes, CLIs, and providers;
- validate contract integrity separately from implementation behavior.

MD-first does not mean “Markdown only.” It means implementation does not silently become the source of product truth.

## 13. Preserve provider neutrality

Provider-neutral behavior should not depend on one model vendor, agent host, repository platform, or runtime unless the bounded task explicitly concerns that integration.

Recommended practice:

- express universal concepts without provider-specific field names;
- treat provider adapters as replaceable integration surfaces;
- keep GitHub, CLI, IDE, and model-host details outside universal schemas unless declared as examples;
- distinguish a provider-specific locator from the universal identity concept it realizes;
- test provider-specific behavior without claiming universal compatibility.

Provider neutrality is strengthened by precise boundaries, not by avoiding all provider-specific implementation.

## 14. Write Human Governance instructions that preserve intent

Human Governance instructions can be concise, but the operational meaning must remain clear.

For already bounded work, include the essential constraints directly.

Example:

```text
Create one public Product documentation page explaining AI-DOS best practices.
Modify only docs/AI-DOS/Product/BestPractices.md.
Do not modify normative contracts, Target state, planning, implementation, or capability status.
Validate that exactly one file changed and report the result.
```

For continuation or next-task intent, allow the governing selection workflow to resolve the next eligible work unit rather than improvising from repository activity.

For approval, identify the subject when ambiguity is possible. Bare approval should be used only when the governing Target state deterministically records exactly one eligible approval subject.

## 15. Prefer small reviewable changes

Small changes are easier to authorize, execute, validate, review, and reverse.

Useful patterns include:

- one documentation page per pull request;
- one terminology family per correction;
- one contract boundary per work unit;
- one evidence artifact per declared evaluation;
- one lifecycle transition per authorized state update.

Small scope does not mean trivial scope. It means the work has one coherent purpose.

## 16. Keep branch and commit structure aligned with the work unit

Repository mechanics should make the bounded subject easy to identify.

Recommended practice:

- use a dedicated branch for the work unit;
- keep unrelated changes out of the branch;
- use a commit message that names the objective;
- avoid drive-by formatting and cleanup;
- compare the branch against its intended base before review;
- confirm the changed-file set matches the authorized scope.

When one work unit intentionally requires multiple commits, preserve a clear narrative and ensure the final reviewed revision is explicit.

## 17. Report completion without overstating it

A completion report should distinguish execution success from later lifecycle decisions.

Include:

- objective;
- authorized scope;
- changed artifacts;
- validation performed;
- validation results;
- evidence produced;
- protected-area confirmation;
- blockers;
- state-update authority, if any;
- exactly one recommended next step.

Avoid phrases such as “fully validated,” “production ready,” “accepted,” “certified,” or “complete” unless the applicable authority and evidence support those exact claims.

## 18. Respect protected areas even during documentation work

Documentation changes can still alter product or Target truth.

Before editing, determine whether the page is:

- publication-oriented explanation;
- normative AI-DOS contract;
- Target Project authority;
- planning or operational state;
- evidence or provenance record;
- historical or archival material.

Do not treat every Markdown file as equally mutable.

A public Product page may explain a concept without changing the normative contract that owns the behavior.

## 19. Avoid common anti-patterns

### Repository proximity as authority

Choosing work because a file was recently edited or is close to the current directory.

**Better:** resolve authority and objective first.

### Scope expansion by discovery

Adding unrelated fixes found during execution.

**Better:** record them separately and keep the active work unit unchanged.

### Validation inflation

Using one passing check to support a broader claim than it exercised.

**Better:** name the exact validated surface.

### Merge equals acceptance

Treating repository integration as Human Governance approval or Target evidence acceptance.

**Better:** preserve lifecycle separation.

### Product–Target contamination

Copying one Target Project's planning, status, or implementation assumptions into reusable AI-DOS product truth.

**Better:** exchange only declared context across the boundary.

### Provider lock-in by terminology

Embedding one host, vendor, or platform into universal schemas.

**Better:** define the universal concept and treat provider details as realizations.

### Silent identity drift

Reviewing one revision and approving another.

**Better:** re-resolve the reviewed subject before approval.

### Treating safe-stop as an inconvenience

Pressuring the system to invent missing context.

**Better:** resolve the blocker explicitly.

## 20. A compact working checklist

Before execution:

- Is the Target Project known?
- Is the authority source known?
- Is there exactly one bounded objective?
- Are allowed and forbidden scopes explicit?
- Are protected areas identified?
- Are validation and evidence expectations clear?
- Is the completion condition observable?

During execution:

- Am I changing only the authorized artifacts?
- Has the subject identity remained stable?
- Have I avoided unrelated cleanup?
- Have I preserved Product and Target boundaries?
- Have I stopped on unresolved authority or context?

Before reporting:

- Does the changed-file set match scope?
- Do validation claims match what was exercised?
- Is evidence tied to the exact subject?
- Are blockers and limitations visible?
- Have I avoided implying approval or acceptance?
- Is there exactly one recommended next step?

## 21. Recommended reading

For the conceptual background behind these practices, continue with:

- [What Is AI-DOS?](Concepts/WhatIsAIDOS.md)
- [Philosophy](Concepts/Philosophy.md)
- [Core Concepts](Concepts/CoreConcepts.md)
- [Human Governance](Concepts/HumanGovernance.md)
- [Authority Model](Concepts/AuthorityModel.md)
- [Context Resolution](ContextResolution.md)
- [Execution Model](ExecutionModel.md)
- [Provider Model](ProviderModel.md)
- [Security](Security.md)
- [Implementation Surfaces](Implementation.md)
- [FAQ](FAQ.md)

Readers who need execution authority must consult the applicable normative AI-DOS contracts and Target-owned authorities. This guide explains good practice; it does not grant permission, activate work, approve a subject, or mutate operational state.

# Quick Start

This quick start explains the conceptual AI-DOS path from a human instruction to bounded, evidence-backed work.

It is not a promise that one current CLI command performs the entire sequence. The normative Markdown contracts define the complete behavior; the current CLI implements only a bounded subset.

## 1. Start with a clear instruction

A useful instruction identifies the outcome being requested. When repository mutation is intended, it should also make the permitted scope and important boundaries clear.

Human intent begins the process, but intent is not interpreted as unlimited authority. AI-DOS still resolves ownership, protected areas, validation requirements, and the applicable approval boundary.

## 2. Identify the Target Project

AI-DOS operates on a Target Project rather than treating every repository as interchangeable.

The invocation must provide enough evidence to identify one Target Repository and its Target-owned entry contract. The current local CLI can perform a limited check against a supplied Target directory:

```bash
node dist/main.js validate --target <target-directory>
```

At present, this implementation verifies the directory and a non-empty root `AGENTS.md`. The fuller normative Target Repository Resolution contract requires more than this bounded implementation proves.

## 3. Resolve authority and context

Before work begins, the applicable contracts resolve:

- AI-DOS product authority;
- Target Project authority;
- Target-owned resources and current state;
- protected areas;
- execution permission;
- validation and evidence expectations;
- blockers that require safe stop.

The result is a Resolved Target Context: the minimum authoritative context needed for the requested work.

## 4. Define one bounded work unit

Execution should have:

- one objective;
- explicit allowed scope;
- explicit forbidden or protected scope;
- required inputs and authorities;
- validation criteria;
- an observable completion condition.

A broad goal may require planning or task generation before it becomes executable. AI-DOS does not treat nearby files, recent activity, or model preference as authority to choose work.

## 5. Execute within the boundary

The selected provider or agent may act only when it has both:

1. the capability to perform the action; and
2. authority for that exact action.

Tool access, repository write access, or technical ability does not by itself grant permission.

If identity, ownership, authority, required context, or validation is missing or contradictory, the correct result is a safe stop rather than an invented assumption.

## 6. Validate what actually changed

Validation must name its surface. Examples include:

- checking that only authorized files changed;
- verifying links and document consistency;
- running implementation-specific type checks or tests;
- confirming protected areas remain unchanged;
- recording skipped checks and environment limitations.

A successful Node.js test does not independently validate the complete AI-DOS architecture or governance model.

## 7. Report evidence and lifecycle status

A completed work report should identify:

- the objective and scope;
- authorities consumed;
- changed artifacts;
- validation results;
- blockers or limitations;
- protected-area confirmation;
- the next bounded recommendation.

Completion, validation, review, approval, merge, acceptance, certification, and release are distinct events. None should be claimed merely because another occurred.

## Next step

Continue with [Your First Target](FirstTarget.md) to understand the information a Target Project must own and expose before AI-DOS can operate safely.
---
name: resolve-project-authority
description: Resolve the authority chain applicable to a specific task in a repository. Read-only. Returns a structured Authority Resolution Record.
---

# resolve-project-authority

## 1. Role

Read-only authority-resolution skill for a single repository, immutable revision, and exact task. Produces a structured Authority Resolution Record. Does not modify, authorize, approve, certify, or execute anything.

## 2. Activation

Activate only when the user asks to resolve, inspect, or audit the authority chain applicable to a specific task in a repository.

## 3. Required Inputs

1. Repository identity or accessible repository root.
2. Immutable repository revision (or a revision that can be resolved and recorded before evaluation).
3. The exact task or decision whose authority must be resolved.

## 4. Workflow

1. Record the repository and immutable subject revision.
2. Locate and read the root authority entry declared for that repository.
3. Follow only explicit authority references from the consumed sources.
4. Read every applicable source fresh from the same immutable revision.
5. Record every consumed source and its revision or content identity.
6. Detect missing, inaccessible, contradictory, circular, ambiguous, or revision-mismatched authority.
7. Safe-stop without inventing authority when deterministic resolution is impossible.
8. Return exactly the structured Authority Resolution Record defined by `references/result-schema.md`.
9. Perform no mutation even when authority appears sufficient.

## 5. Detailed Resolution Rules

See `references/authority-resolution-contract.md`. That file defines the experimental minimum rules for explicit root-entry discovery, explicit-reference traversal, immutable-revision consistency, consumed-source recording, missing-authority handling, contradictory-authority handling, ambiguity handling, circular-reference handling, safe-stop, and read-only behavior.

## 6. Output Shape

See `references/result-schema.md`. That file defines the exact output structure, including fields for repository identity, reviewed revision, consumed sources, outcome, and required disclaimers.

## 7. Boundaries

This skill:
- never modifies repository or external state;
- never chooses or executes work;
- never authorizes mutation, approval, certification, promotion, merge, or release;
- never claims mechanical enforcement or full AI-DOS conformance;
- never infers authority from conversation memory, recent commits, nearby files, file popularity, or model judgment;
- never becomes a new AI-DOS normative authority or summarizes the full AI-DOS governance system.

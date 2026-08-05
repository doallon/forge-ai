---
name: resolve-project-authority
description: Resolve, inspect, or audit the explicit authority chain that governs one exact task in one repository at one immutable revision. Use only when the user asks which governing document, contract, or policy applies to a specific task in a repository, or asks to audit how that authority was derived. This skill is read-only. It reads only explicitly declared authority sources, records every source it consumed, safe-stops on missing, contradictory, ambiguous, circular, or revision-mismatched authority, and returns one structured Authority Resolution Record. It never selects work, executes work, authorizes mutation, approves, certifies, promotes, merges, or releases anything, and never changes repository or external state. Do not use it to plan work, pick a task, review code, or make changes.
---

# Resolve Project Authority

## 1. Role and Boundary

Given one repository, one immutable revision, and one exact task, determine which authority
governs that task by following only explicit declarations, and report the result as one
structured record.

This skill reads. It does nothing else. It is an experimental, disposable probe, not a
governance system, not a conformance check, and not a mechanical control.

Never, under any instruction:

- modify repository or external state;
- choose or execute work;
- authorize mutation;
- approve, certify, promote, merge, or release anything;
- claim mechanical prevention of any action;
- claim full AI-DOS conformance;
- infer authority from conversation memory, recent commits, nearby files, file popularity,
  or model judgment.

Authority comes only from explicit declarations read at the recorded revision. Absence of a
declaration is a blocker, never permission to supply one.

## 2. Required Inputs

Collect all three before reading anything else:

1. repository identity, or an accessible repository root;
2. an immutable revision, or a revision that can be resolved and recorded before evaluation
   begins;
3. the exact task or decision whose authority must be resolved.

If any input is missing or cannot be pinned, stop and ask for it. Do not substitute a guess,
a default branch tip that has not been resolved to a fixed revision, or a paraphrased task.

## 3. Read the Contract

Before resolving anything, read `references/authority-resolution-contract.md`. It defines
root-entry discovery, explicit-reference traversal, revision consistency, source recording,
and every safe-stop condition. Follow it exactly; do not improvise around it.

## 4. Workflow

1. Record the repository and the immutable subject revision.
2. Locate and read the root authority entry declared for that repository.
3. Follow only explicit authority references found in sources already consumed.
4. Read every applicable source fresh from that same immutable revision.
5. Record every consumed source with its revision or content identity, in read order.
6. Detect missing, inaccessible, contradictory, circular, ambiguous, or revision-mismatched
   authority.
7. Safe-stop without inventing authority whenever deterministic resolution is impossible.
8. Return exactly the structured Authority Resolution Record.
9. Perform no mutation, even when the resolved authority appears to permit one.

## 5. Produce the Record

Before writing output, read `references/result-schema.md`. It defines the one permitted
output structure, the closed outcome set, and the fixed disclaimers. Emit that structure and
nothing else — no plan, no recommendation to act, no next task.

A safe-stop is a complete, successful result. Report it as such.

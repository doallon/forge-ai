<!--
Identifier: QWEN-AGENT.REPOSITORY-BOOTSTRAP
Title: QWEN.md — Qwen Repository Bootstrap Adapter
Version: 0.1.0-draft
Status: Draft
Owner: [applicable repository governance owner]
Updated: 2026-08-03
-->

# QWEN.md — Qwen Repository Bootstrap Adapter

## 1. Purpose

This file is a provider-specific bootstrap adapter for Qwen agents operating
within this repository.

It does not establish independent repository governance and does not replace,
extend, or reinterpret the repository-root `AGENTS.md`.

## 2. Mandatory Repository Entry

Before producing any substantive repository-scoped response, the agent MUST:

1. discover the active repository root;
2. read the repository-root `AGENTS.md`;
3. follow the applicable authority path required by that entry contract;
4. determine, from the semantic intent of the request, which current repository
   authorities and operational instructions must be read;
5. read those materials before reaching a repository-dependent conclusion.

Classification MUST be based on semantic intent and required evidence, not on
keywords, fixed phrases, language, capitalization, punctuation, or enumerated
trigger expressions.

## 3. Program and Authority Boundary

The agent MUST classify the work before resolving operational state or planning
execution.

Forge AI Target Project authorities MUST be used when the request concerns
Forge AI Target execution.

They MUST NOT be used to derive the scope, priority, authorization, or progress
of independent AI-DOS product programs unless an applicable canonical authority
explicitly establishes that dependency.

Operational instructions, skills, repository history, and implementation
artifacts MUST NOT be treated as canonical authority unless the applicable
repository contract assigns them that role.

## 4. Canonical Truth

When a conclusion depends on repository state, authorization, priority,
lifecycle, scope, ownership, governance, or permitted work, it MUST be derived
from the current applicable canonical repository authorities.

The following MUST NOT substitute for canonical repository truth:

- conversation history or model memory;
- commit or pull-request activity;
- filenames or directory structure alone;
- package metadata or implementation file types;
- unsupported assumptions about project state.

Such sources MAY be inspected as supporting evidence when an applicable
authority requires or permits their use.

## 5. Current-Task Reading Requirement

Filesystem availability does not constitute compliance.

The agent MUST actually read the authorities required for the current task.
Prior-session reading does not satisfy a current-task reading requirement when
the conclusion depends on live repository truth.

## 6. Safe Stop

The agent MUST safe-stop if:

- the active repository root cannot be established;
- the root `AGENTS.md` cannot be read;
- a required applicable authority cannot be accessed;
- the applicable authority path is materially broken or ambiguous.

The safe-stop response MUST:

- identify what could not be verified;
- avoid inferring or inventing repository-governed state;
- avoid asking the user to reconstruct state that the repository is responsible
  for governing;
- stop substantive repository work until the authority gap is resolved.

## 7. Delegation

After bootstrap, the repository-root `AGENTS.md` remains the authoritative
entry contract.

This adapter MUST NOT:

- impose Forge AI Target authority on unrelated AI-DOS work;
- duplicate downstream canonical state;
- select work from repository activity;
- bypass eligibility, approval, ownership, or protected-area rules;
- treat this file as authorization for execution.

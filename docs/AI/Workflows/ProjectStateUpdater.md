# Project State Updater

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.PROJECT-STATE-UPDATER` |
| Version | `3.4.0-draft` |
| Status | Draft |
| Classification | Target-State Mutation Workflow |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/System/ExecutionSequence.md`; `docs/AI/FrameworkGovernance.md`; explicit Target state-update authority |
| Consumes | State-update Execution Contract; Target-owned state schema; transition evidence and constraints |
| Produces | Bounded Target-state mutation or non-mutating recommendation |
| Certification Status | Not certified |

## 1. Purpose

This workflow applies one explicitly authorized mutation to a Target-owned operational-state artifact. It is a generic mutation route and does not require or prescribe ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, or capability terminology.

## 2. Owns

- Validation and application of the exact state mutation in an authorized Execution Contract.
- Preservation of the Target-owned state schema and transition constraints.
- Mutation evidence and completion reporting.

## 3. Does Not Own

- Target operational state, planning model, lifecycle schema, or transition policy.
- Classification of Human Governance intent; it consumes intent resolved by AIOrchestrator and applicable Target-owned rules.
- Selection of a next phase, stage, capability, milestone, or task; it consumes a bounded Task Planner selection record when activation is authorized.
- Architecture, Governance, release, certification, or promotion authority.

## 4. Required Inputs

A mutation requires:

- an explicit state-update Execution Contract, assembled from direct Human Governance instruction or from uniquely resolved Human Governance approval or continuation intent under Target-owned rules;
- exact Target-owned artifact identity and owner;
- current state and expected precondition;
- exact fields or records allowed to change;
- Target-owned transition rule or direct Human Governance instruction;
- evidence required by that rule;
- for continuation-driven activation, one conforming Task Planner selection record with exactly one bounded candidate and its activation precondition;
- for bare Human Governance approval intent (approval that does not repeat the subject's identity), exactly one canonically recorded Target-owned Pending Approval Subject in the Target-owned eligible-for-approval state, including its review subject locator and reviewed-subject revision identity;
- validation, rollback, and stop conditions.

Without these inputs, the workflow may only produce a recommendation.

## 5. Mutation Sequence

1. Verify Target identity, artifact path, owner, schema, and current state.
2. Verify the Execution Contract authorizes the exact mutation.
3. Verify the requested transition against Target-owned transition rules or direct Human Governance instruction.
4. Verify required validation, review, dependency, and protected-boundary evidence.
5. Confirm exactly one mutation result is authorized.
6. For approval intent naming an exact subject identity, verify that identity against any canonically recorded Target-owned Pending Approval Subject; treat a conflict between the named identity and a recorded subject as a safe stop, not a tie-break.
7. For bare approval intent that does not name a subject, consume the Target-owned Pending Approval Subject record and require exactly one subject in the Target-owned eligible-for-approval state; treat zero, more than one, or a structurally invalid record as a safe stop.
8. Immediately before applying approval to any subject resolved under rule 6 or 7, deterministically re-resolve its reviewed-subject revision identity through its recorded review subject locator; treat identity drift, an already-closed-lifecycle subject (already accepted or invalidated), or an unresolvable locator or identity as invalidating the subject and requiring safe stop.
9. Apply only the uniquely derivable acceptance or gate-closing transition for the resolved subject and do not select subsequent work.
10. For continuation or next-task intent with no active executable work unit, validate the selection record's integrity and activation precondition, then activate only its single Task Planner-selected bounded candidate and do not execute it. Do not re-run or reinterpret candidate selection, generation, priority, or minimality.
11. Apply only the named fields or records.
12. Validate the resulting artifact and report the before/after state.
13. Stop before selecting or executing subsequent work.

## 6. Prohibited Inference

The following do not authorize state mutation:

- literal command words considered without resolved Human Governance intent, Target-owned transition rules, and required evidence;
- merge, completion, review, validation, or certification status;
- registry presence, capability availability, installation, or provider availability;
- a nearby Roadmap, ProjectStatus, DevelopmentPhases, or Forge AI convention;
- the existence of exactly one convenient next task;
- provider-specific state (open/closed/merged status, branch protection, or self-approval restriction) treated as if it were the Target-owned Pending Approval Subject record, or as a substitute for a canonically recorded subject or for Human Governance approval intent;
- a reviewed, validated, or completed artifact lacking a canonically recorded Target-owned Pending Approval Subject entry, treated as an eligible approval subject by implication.

Intent classification may route a request here. Human Governance approval intent may authorize a uniquely derivable acceptance or gate-closing transition. Continuation-driven activation requires a conforming Task Planner selection record, Target-owned authorization for the exact transition, no active executable work unit, and exactly one mutation result. Approval and continuation transitions remain separate unless the Target-owned contract explicitly combines them.

## 7. Safe Stop

Stop without mutation when artifact identity, owner, schema, current state, transition rule, evidence, dependency, protected boundary, or exact mutation scope is missing or ambiguous; when multiple transitions are valid; or when the Target-owned rule requires further Human Governance action.

Stop without mutation on bare approval intent when the Target-owned Pending Approval Subject record is absent, non-unique, or structurally invalid, or when deterministic re-resolution of its reviewed-subject revision identity through its recorded review subject locator cannot be completed or reveals drift. Stop on explicit approval intent when the named subject identity conflicts with a canonically recorded subject, or when the resolved subject is already accepted or invalidated.

## 8. Outputs

- Authorized before/after state and validation evidence; or
- non-mutating recommended update with missing authority and evidence; and
- confirmation that no subsequent work was activated or executed.

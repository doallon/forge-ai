# AI-DOS Target Project Operating Model — Architecture Adequacy and Decision Package

> Standalone AI-DOS Product architecture work · Draft decision-support evidence · Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TARGET-PROJECT-OPERATING-MODEL-ARCHITECTURE-ADEQUACY-AND-DECISION-PACKAGE` |
| Title | AI-DOS Target Project Operating Model — Architecture Adequacy and Decision Package |
| Version | `0.1.0-draft` |
| Status | Draft; not reviewed, accepted, or approved |
| Canonical Status | Non-canonical, non-normative architecture decision-support evidence |
| Classification | Architecture Adequacy and Decision-Support Report |
| Document Type | Architecture Decision Package |
| Program | Standalone AI-DOS Target Standards Program |
| Owner | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | None; this package creates no Standard, Meta-Model, RFC, workflow, Target truth, or lifecycle transition |
| Created / Last Updated | 2026-07-28 |
| Repository | `https://github.com/doallon/forge-ai` |
| Audited Repository Revision | `0a6ed4e82054a9c4d4a402c75ff33a5d6276cf36` |
| Scope | Evaluate whether the Target Project operating model underlying STD-011 is adequate for reusable AI-DOS operation; expose the decisions required to establish a corrected candidate baseline. |
| Out of Scope | Amending STD-011 or its Conformance Profile; modifying templates or examples; assessing or migrating Forge AI; changing Forge AI Mission, DevelopmentPhases, Roadmap, ProjectStatus, evidence, or operational state; implementing `ai-dos init project`, a validator, or runtime; completing Versioning Architecture synthesis; promotion, approval, certification, or activation. |
| Produces | One architecture-adequacy verdict, one recommended operating model, one Human Governance decision ballot, one bounded correction map, and one next-step gate. |

---

## 1. Purpose

The completed STD-011 evidence chain established that the current Standard and Conformance Profile are internally traceable, that the reference package is structurally complete, and that the immutable fictional `CompleteReferenceTarget` passes all 22 current profile criteria. That chain answered:

> Does the reference Target conform to the current STD-011 contract?

It did not fully answer:

> Does the current STD-011 contract define the right Target Project operating model for AI-DOS?

This package evaluates the second question. It is not another pre-pilot, post-correction, post-merge, or conformance assessment. It changes the assessed subject from implementation consistency to architecture adequacy.

The package makes recommendations but does not convert them into approved architecture. Every decision in Section 14 remains subject to Human Governance.

## 2. Program State and Evidence Already Established

### 2.1 Completed Target Standards chain

| Evidence stage | Established result | Current use |
|:---|:---|:---|
| STD-011 Standard | `AI-DOS-STD-011` `0.1.4-draft` exists as a draft, non-canonical Standard. | Current operating-model candidate |
| Conformance Profile | `AI-DOS-STD-011-TARGET-PROJECT-CONFORMANCE-PROFILE` `0.1.2-draft` defines 22 criteria. | Current validation contract |
| Initial pre-pilot assessment | Found four blockers, two non-blocking concerns, and six observations. | Historical defect discovery evidence |
| Post-correction reassessment | Confirmed the four blockers and two concerns were resolved and retained 22/22 traceability. | Correction evidence |
| Post-merge state assessment | Reconciled all 12 earlier findings as `12 resolved / 0 partial / 0 unresolved`; established pilot eligibility. | Integrated package evidence |
| Reference package | Added the complete Target Project template family and fictional `CompleteReferenceTarget`. | Structural and authoring reference |
| Read-only pilot | Produced `22 Pass / 0 Fail / 0 Warning / 0 Waived Finding`, aggregate `Conformant`, and zero findings. | Evidence that the example conforms to the current contract |

These stages produced real progress. Their conclusions must not be reopened without a changed subject, changed criterion, changed evidence corpus, or identified defect.

### 2.2 What the pilot does and does not prove

The pilot proves that the example satisfies the current 22-criterion profile at its assessed revision.

It does not prove:

- that STD-011 contains every requirement needed by the intended operating model;
- that bootstrap behavior before Mission, DevelopmentPhases, and Roadmap approval is complete;
- that strategic capability declarations and objective-specific candidate-generation inputs are separated correctly;
- that ProjectStatus contains the minimum sufficient state and no duplicated upstream meaning;
- that the Target Contract and Target Declaration Profile are distinct logical roles;
- that the current safe-stop list exposes every determinism-critical condition as an independently testable rule;
- that Versioning Architecture dependencies are resolved; or
- that STD-011 or the template family is ready for promotion.

### 2.3 Audit-loop determination

The program was not previously trapped in a report loop: each completed assessment closed a different evidence gate. It would enter a report loop if it now created another broad assessment that merely remapped the same 22 criteria or restated the same four reports.

This package avoids that loop by:

1. evaluating architecture adequacy rather than conformance to the existing contract;
2. exposing explicit design choices instead of adding another finding taxonomy;
3. defining one bounded correction delta; and
4. requiring only delta validation after that correction, not another full general audit.

## 3. Source and Authority Map

| Source | Status / role | Use in this package |
|:---|:---|:---|
| `docs/AI-DOS/Architecture/Standards/STD-011-Target-Project-Standard.md` | Draft, non-canonical Standard | Current operating-model contract |
| `docs/AI-DOS/Architecture/Standards/STD-011-Target-Project-Conformance-Profile.md` | Draft, non-canonical profile | Current criteria and aggregation boundary |
| `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` | Draft template-family contract | Current reusable authoring boundary |
| `docs/AI-DOS/Templates/TargetProject/TargetProjectStructureTemplate.md` | Draft template | Default physical structure and role map |
| `docs/AI-DOS/Templates/TargetProject/TargetContractTemplate.md` | Draft template | Current combined Contract/Profile representation |
| `docs/AI-DOS/Templates/TargetProject/DevelopmentPhasesTemplate.md` | Draft template | Current twelve-field capability model |
| `docs/AI-DOS/Templates/TargetProject/RoadmapTemplate.md` | Draft template | Current deterministic derivation projection |
| `docs/AI-DOS/Templates/TargetProject/ProjectStatusTemplate.md` | Draft template | Current operational-state representation |
| `docs/AI-DOS/Templates/TargetProject/OperationalRecordTemplates.md` | Draft template set | Derivation, bounded-work, and transition records |
| `docs/AI-DOS/System/TargetRepositoryResolution.md` | Draft System Layer contract | Exact five-category Target Declaration Profile and resolver-owned safe stop |
| `docs/AI-DOS/Workflows/TaskPlanner.md` | Draft AI-DOS workflow | Candidate eligibility, priority, selection, and safe stop |
| `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md` | Draft AI-DOS workflow | Finite objective-bound generation input and minimal candidate construction |
| `docs/AI-DOS/Workflows/ProjectStateUpdater.md` | Draft AI-DOS workflow | One explicitly authorized Target-state mutation |
| `docs/Projects/ForgeAI/Mission/AGENTS.md` | Forge AI Target contract | Real Target evidence for active-work and pending-approval cardinality; not reusable product authority |
| `docs/Projects/ForgeAI/Planning/ProjectStatus.md` | Forge AI live Target state | Real state-shape evidence only; not scope or priority authority for this work |
| Four current STD-011 assessment reports | Draft, non-canonical evidence | Completed consistency, correction, integration, and pilot results |
| `docs/AI-DOS/Architecture/Reports/AI-DOS-Versioning-Architecture-Synthesis-Readiness-and-Human-Governance-Decision-Package-STEP-1-8.md` | Draft, non-canonical decision support | Current Versioning Architecture dependency state |

Forge AI artifacts are consumed only as evidence that a real Target has needed particular state and cardinality rules. Forge AI-specific paths, states, priorities, and current evidence are not generalized into AI-DOS product truth.

## 4. Architecture Adequacy Verdict

# ADEQUATE FOUNDATION — BOUNDED CORRECTION REQUIRED

The operating model's core direction is suitable for AI-DOS:

- the Target retains ownership of Target truth;
- Human Governance remains the final Target authority;
- Mission and DevelopmentPhases are upstream human-authorized sources;
- Roadmap is deterministically derived and separately accepted;
- ProjectStatus is AI-DOS-maintained but Target-owned;
- generated candidates and execution outputs do not become Target truth by production alone;
- repository, branch, pull-request, conversation, and provider state do not create Target lifecycle effects;
- missing or non-unique authority requires safe stop;
- logical artifact identity is independent of physical path; and
- the existing Target-root physical layout is an appropriate default for a standalone Target repository.

The foundation does not require replacement, a new Meta-Model, a new architecture layer, a new governance model, or a new workflow family.

It does require bounded correction in four connected areas:

1. bootstrap lifecycle and initialization hold;
2. Target Contract versus Target Declaration Profile role separation;
3. DevelopmentPhases versus objective-bound candidate-generation input separation; and
4. ProjectStatus minimal state, cardinality, and explicit safe-stop rules.

Until those decisions are accepted and reflected in a candidate baseline, STD-011 should not be promoted.

## 5. Recommended Artifact and Authority Model

| Logical role | Authorship / maintenance | Authority effect |
|:---|:---|:---|
| Target Project Standard binding | Selected and accepted by Target Human Governance | Constrains the Target's reusable operating model; does not own Target truth |
| Mission | Human-authored or Human-Governance-approved | Highest source for Target purpose, scope, non-goals, strategic constraints, and protected purpose boundaries |
| DevelopmentPhases | Human-authored, Human-approved, or deterministically produced from explicit Human decisions and then approved | Owns capability order, capability gain, dependencies, required outcomes/evidence, gates, and strategic boundaries |
| Target Contract | Target-authored and Human-Governance-approved | Owns Target identity, resources, protected areas, source scope, validation, permissions, operational-entry declaration, and Target-specific transition policy |
| Target Declaration Profile | Target-authored resolver-consumable declaration set inside or referenced by the Target Contract | Supplies the exact five TargetRepositoryResolution input categories; does not own resolver behavior |
| Repository root entry | Generated or maintained discovery/routing surface | Points to the Target Contract and operational entry; has no independent governance authority |
| Roadmap | AI-DOS-derived from approved sources; separately accepted by Human Governance | Becomes Target planning truth only after acceptance; cannot invent capabilities, outcomes, evidence, or scope |
| ProjectStatus | AI-DOS-maintained under Target authority; Target-owned | Holds current operational facts and exact references; cannot redefine upstream meaning |
| Objective-bound generation input | Target-owned finite record; authored, approved, or deterministically derived under Target rules | Supplies exact artifact options, owners, mutation kinds, validation profiles, combination rules, and cardinality for one fixed objective |
| Task candidates | Generated provider output | Not Target truth before selection and authorized activation |
| Active work unit | Written through one authorized state transition | Current operational truth for exactly one reviewed-subject identity |
| Pending approval subject | Written through one authorized state transition | Current approval-gate truth for at most one reviewed-subject identity |
| Evidence and reports | Generated or human-authored evidence with provenance | Support claims; do not become planning or transition authority without acceptance |
| Human Governance decisions | Human-authored governance truth/evidence | Approve sources, accept derived artifacts, authorize transitions, and resolve blockers |
| Skills and adapters | Optional discovery surfaces | No independent governance authority |

Historical planning, future-looking proposals, explanatory documents, migration reports, archived missions, provider-specific adapters, and implementation-specific templates remain auxiliary or historical. They cannot substitute for a mandatory logical role.

## 6. Decision D-01 — Target Contract and Declaration Profile

### Alternatives

| Option | Description | Consequence |
|:---|:---|:---|
| A | Treat Target Contract and Target Declaration Profile as the same logical role. | Keeps the current ambiguity: broad governance prose and exact resolver input share one identity. |
| B | Make them separate mandatory physical files. | Clarifies roles but unnecessarily hard-codes representation. |
| C | Define two logical roles that may share one physical artifact. | Preserves role clarity and representation flexibility. |

### Recommended decision

**Select Option C.**

The Target Contract is the broader Target-owned governance contract. The Target Declaration Profile is the exact resolver-consumable declaration set. It may be embedded as the final exact section of the Target Contract or referenced as a separate artifact. In either representation:

- each logical role has an unambiguous stable identity or binding;
- exactly one current Target Contract resolves;
- exactly one current Target Declaration Profile resolves;
- the root entry points to the Contract and operational entry;
- the resolver consumes only the exact Profile region; and
- the provider or resolver cannot approve the Contract or Profile.

The current `TargetContractTemplate.md` may remain a combined physical representation, but its metadata and role map must stop treating the Contract title and Profile artifact type as one undifferentiated role.

## 7. Decision D-02 — Bootstrap and Operational Lifecycle

### Problem

Current STD-011 ProjectStatus initialization consumes an accepted Roadmap, while a new Target repository may exist before Mission, DevelopmentPhases, or Roadmap approval. Treating that state as either a broken operational Target or a fully conformant operational Target is inaccurate.

### Recommended lifecycle

```text
SCAFFOLDED
    ↓ record Target identity and bootstrap authority
INITIALIZATION-HOLD
    ↓ approve Mission and DevelopmentPhases
ROADMAP-REVIEW-HOLD
    ↓ accept deterministically derived Roadmap
OPERATIONAL-HOLD
    ↓ authorize and activate one work unit
ACTIVE-WORK
    ↓ complete review and record one approval subject
APPROVAL-HOLD
    ↓ Human Governance decision and atomic transition
OPERATIONAL-HOLD
```

Rules:

1. `SCAFFOLDED` means files or proposals exist but no Target authority is inferred.
2. `INITIALIZATION-HOLD` is a valid bootstrap state, not a claim of full operational conformance.
3. Bootstrap ProjectStatus contains:
   - Target identity;
   - lifecycle state `INITIALIZATION-HOLD`;
   - active work unit `None`;
   - pending approval subject `None`;
   - accepted evidence `None`, except evidence of Target identity or Human decisions actually recorded;
   - exact unresolved role blockers; and
   - exactly one authorized next action: complete and approve Mission and DevelopmentPhases.
4. The initializer may create fillable Mission and DevelopmentPhases proposals but cannot approve them.
5. The initializer cannot invent a Roadmap, current capability, governance decision, or accepted evidence.
6. After Mission and DevelopmentPhases approval, deterministic Roadmap derivation either produces one draft or safe-stops.
7. An accepted Roadmap is required before transition to `OPERATIONAL-HOLD`.
8. At most one active work unit and at most one pending approval subject exist at any time.
9. A state transition is atomic for one exact subject and never activates the next work unit by implication.

The bootstrap profile and the full operational conformance profile must be distinguishable. A Target in `INITIALIZATION-HOLD` can be validly scaffolded without claiming operational conformance.

## 8. Decision D-03 — DevelopmentPhases and Candidate-Generation Boundary

### Alternatives

| Option | Description | Risk |
|:---|:---|:---|
| A | Require every capability to contain exact artifact paths, owners, mutation kinds, choice groups, and maximum artifact cardinality. | Turns strategic capability architecture into a task manifest and couples it to repository layout. |
| B | Leave all exact generation data to provider judgment. | Violates deterministic generation and permits invented scope. |
| C | Keep semantic generation requirements in DevelopmentPhases and require a separate finite, objective-bound Target-owned generation input before candidate construction. | Preserves strategy/operation separation while keeping generation deterministic. |

### Recommended decision

**Select Option C.**

Each DevelopmentPhases capability must declare, directly or through an approved reusable rule:

- stable phase and capability identity;
- explicit order and dependencies;
- purpose and capability gain;
- entry conditions;
- required outcomes;
- required evidence identities and evidence meaning;
- observable completion predicate;
- validation and acceptance criteria;
- success and exit criteria;
- governance gate;
- protected boundaries and non-goals;
- compatibility and migration considerations; and
- deterministic tie or safe-stop behavior.

DevelopmentPhases should not be required to contain objective-specific exact mutation sets.

Before TaskGenerationWorkflow may construct a candidate, one finite Target-owned generation input must be available for the fixed controlling objective. It may be:

- embedded in an accepted Roadmap objective;
- referenced by the Target Contract or Roadmap;
- produced mechanically from approved capability requirements plus exact Target resource and placement rules; or
- supplied by an explicit Human Governance decision.

It must contain the exact finite records already required by TaskGenerationWorkflow: artifact options, owners, mutation kinds, validation profiles, combination rules, cardinality, and observable completion. It is a conditional operational input, not a new mandatory planning layer, architecture family, or workflow family.

If the finite record cannot be derived uniquely, generation safe-stops. AI-DOS does not scan the repository or brainstorm plausible files to fill the gap.

## 9. Decision D-04 — Roadmap Derivation

The current one-way derivation direction is adequate and should be preserved:

```text
Approved Mission and DevelopmentPhases
    ↓ deterministic projection
Roadmap Draft + Derivation Evidence
    ↓ separate Human Governance acceptance
Accepted Roadmap
```

The corrected candidate baseline should make these rules explicit:

1. preserve phase and capability identity and order;
2. construct the dependency graph only from declared identifiers;
3. reject dependency cycles;
4. carry required outcomes, evidence identities, meanings, completion predicates, gates, and boundaries without reinterpretation;
5. never add a new objective, scope, or evidence requirement;
6. keep derivation evidence separate from acceptance evidence;
7. safe-stop on zero or multiple valid projections;
8. preserve accepted identifiers across regeneration unless an authorized versioning or migration decision permits change; and
9. never derive Roadmap truth from ProjectStatus, repository activity, backlog proximity, provider preference, or model judgment.

No universal Target must use the word `stream`, `milestone`, or the Forge AI evidence-order policy. A conforming Target must expose one deterministic ordering and controlling-objective policy. The recommended default profile is dependency order followed by the earliest eligible non-accepted objective, with blocked objectives prohibiting fall-through. A Target may declare an approved equivalent deterministic policy.

## 10. Decision D-05 — ProjectStatus Minimal State

ProjectStatus should contain only current operational facts and exact upstream references:

- Target identity;
- current lifecycle state;
- bound Mission, DevelopmentPhases, Roadmap, Target Contract, and Declaration Profile identities and revisions;
- current capability ID or hold;
- controlling objective ID or `None`;
- evidence ID, state, and evidence locator;
- active work-unit identity or `None`;
- pending approval-subject identity or `None`;
- blockers and risks by stable ID and evidence reference;
- exactly one authorized next action when no active work unit exists;
- transition authority reference; and
- last-transition evidence.

ProjectStatus must not copy:

- Mission purpose or constraints;
- DevelopmentPhases capability meaning;
- Roadmap objective or evidence meaning;
- validation procedure owned elsewhere;
- task-generation algorithms; or
- narrative history used as current authority.

The current `ProjectStatusTemplate.md` field `Roadmap meaning` should be removed or replaced by an upstream locator. Evidence status should retain only stable ID, allowed state, and evidence reference.

Required cardinality:

- exactly one ProjectStatus operational entry;
- zero or one active work unit;
- zero or one pending approval subject;
- never more than one of either;
- when active work exists, its reviewed-subject identity remains fixed through execution, evidence, review, and closure;
- an approval subject must match the active work-unit identity when both are present; and
- zero active work units requires exactly one authorized next action or one explicit safe-stop blocker.

## 11. Decision D-06 — Explicit Safe-Stop Matrix

General missing/ambiguous/conflicting rules remain useful, but determinism-critical cases should be independently testable. The corrected Standard and Profile should explicitly cover:

1. zero or multiple Target Operational Entries;
2. zero or multiple current Target Contracts or Declaration Profiles;
3. missing, unapproved, invalid, or conflicting Mission or DevelopmentPhases;
4. duplicate or unstable phase, capability, objective, evidence, work-unit, approval-subject, or artifact-role identity;
5. dependency cycle;
6. missing observable completion predicate;
7. zero or multiple valid Roadmap derivations;
8. missing, open-ended, contradictory, or non-finite candidate-generation input;
9. unresolved artifact scope, owner, mutation kind, validation profile, or cardinality;
10. ProjectStatus copying or redefining upstream normative meaning;
11. more than one active work unit;
12. more than one pending approval subject;
13. active-work and approval-subject identity mismatch;
14. provider output being written as Target truth without authorized acceptance or transition;
15. initializer needing to invent Mission, DevelopmentPhases, Roadmap, evidence, or a governance decision;
16. unauthorized protected-area or Target-state mutation;
17. product truth and Target truth leakage; and
18. unresolved version, compatibility, migration, or historical-identity dependency when the requested transition relies on it.

Every safe-stop output must identify the blocker, owning authority, affected role or subject, inspected evidence, required human action or correction, and no-mutation confirmation.

## 12. Decision D-07 — Physical Layout Profiles

The current Target-root layout is the correct default for a standalone single-Target repository:

```text
<target-root>/
├── AGENTS.md
├── Governance/
│   └── TargetContract.md
├── Mission/
│   └── Mission.md
├── Planning/
│   ├── DevelopmentPhases.md
│   ├── Roadmap.md
│   └── ProjectStatus.md
├── Evidence/
├── WorkUnits/
├── Validation/
└── Source/
```

The architecture should recognize three physical profiles:

| Repository form | Recommended behavior |
|:---|:---|
| Standalone single-Target repository | Use the current Target-root layout as the initializer default. |
| Monorepo with one or more Targets | Permit a declared container such as `docs/Projects/<TargetName>/` or another resolver-safe locator profile. |
| Existing or legacy Target | Preserve current paths where stable role identity and locators resolve; do not require relocation for conformance. |

Physical paths remain conveniences. Stable logical identity and declared locators govern. No correction should replace the current default with the Forge AI monorepo layout.

## 13. Decision D-08 — Versioning Dependency and Program Sequence

The Versioning Architecture program has completed STEP 1–8 and has a decision package concluding that synthesis drafting may open with explicit dependencies. Synthesis has not yet been opened, and the outstanding Versioning decisions remain unresolved.

STD-011 already depends on stable identity, artifact revision, lifecycle, evidence freshness, compatibility, migration, and historical reproducibility. Therefore:

1. Target operating-model corrections may proceed to a **candidate baseline** before Versioning synthesis completes.
2. That candidate baseline must preserve explicit unresolved Versioning dependencies and must not invent numbering, bump, compatibility, migration, or historical-identity policy.
3. Forge AI may then be assessed and migrated as a controlled real-Target pilot against the candidate baseline, under a separately authorized Target work program.
4. Versioning Architecture synthesis should then be completed using the real-Target findings as additional implementation pressure, without making Forge AI Target truth into product authority.
5. STD-011, its Profile, templates, and Forge AI binding require a final Versioning reconciliation.
6. Formal STD-011 and template-family promotion should occur only after that reconciliation and required Human Governance approval.
7. Forge AI feature development should resume after the corrected Target operating model and Versioning model govern its continuation path.

Recommended program order:

```text
Human Governance operating-model decisions
    ↓
STD-011 candidate-baseline correction
    ↓
Forge AI conformance and bounded migration pilot
    ↓
Pilot-driven delta correction
    ↓
Versioning Architecture synthesis and decisions
    ↓
STD-011 / Profile / template / Forge AI versioning reconciliation
    ↓
Promotion and activation decisions
    ↓
Resume Forge AI capability development
```

This sequence separates “functionally stable candidate baseline” from “finally promoted canonical Standard.”

## 14. Human Governance Decision Ballot

No recommendation in this package becomes AI-DOS Product truth until Human Governance records a decision.

| Decision ID | Question | Recommended option | Human Governance decision | Rationale / conditions |
|:---|:---|:---|:---|:---|
| `TPOM-D01` | Is the existing STD-011 operating-model foundation adequate? | Adequate with bounded correction; no replacement architecture | _______ | _______ |
| `TPOM-D02` | How do Target Contract and Target Declaration Profile relate? | Separate logical roles; embedded or separate physical representation permitted | _______ | _______ |
| `TPOM-D03` | Is `INITIALIZATION-HOLD` a valid bootstrap state distinct from operational conformance? | Yes; use the lifecycle in Section 7 | _______ | _______ |
| `TPOM-D04` | Where do exact artifact/owner/mutation/cardinality records belong? | Objective-bound finite Target-owned generation input, not mandatory strategic fields in every DevelopmentPhases capability | _______ | _______ |
| `TPOM-D05` | What must DevelopmentPhases add? | Entry conditions, required outcomes, observable completion predicate, and deterministic source/reference rules from Section 8 | _______ | _______ |
| `TPOM-D06` | What is the reusable controlling-objective rule? | Require one deterministic Target-owned policy; use earliest eligible non-accepted objective as the default profile, not the only permitted policy | _______ | _______ |
| `TPOM-D07` | What may ProjectStatus contain? | Minimal current facts, IDs, states, and references only; no upstream meaning copies | _______ | _______ |
| `TPOM-D08` | What operational cardinalities are mandatory? | One operational entry; at most one active work unit; at most one pending approval subject; identity-bound atomic transitions | _______ | _______ |
| `TPOM-D09` | Which physical layout is the default? | Preserve current Target-root default; allow monorepo and legacy locator profiles | _______ | _______ |
| `TPOM-D10` | When may STD-011 be promoted? | After candidate correction, real-Target pilot, Versioning reconciliation, required review evidence, and explicit Human Governance approval | _______ | _______ |

Human Governance may accept the ballot as a set or return one or more identified items for bounded correction. Silence, merge state, review outcome, or repository activity does not fill a decision cell.

## 15. Candidate-Baseline Correction Map

If the Section 14 recommendations are accepted, one bounded correction package should update only the affected Target Standards surfaces:

| Surface | Required delta |
|:---|:---|
| STD-011 artifact roles | Add Target Contract as a distinct logical role; clarify its relation to the Declaration Profile and root entry. |
| STD-011 lifecycle and initialization | Add bootstrap lifecycle, `INITIALIZATION-HOLD`, bootstrap ProjectStatus shape, and transition to operational initialization. |
| STD-011 DevelopmentPhases | Add entry conditions, required outcomes, observable completion predicate, and the boundary to objective-bound generation input. |
| STD-011 Roadmap derivation | Add dependency-cycle prohibition and preservation of outcomes/completion predicates; distinguish default from Target-approved equivalent ordering policy. |
| STD-011 ProjectStatus | Add operational-entry, active-work, and approval-subject cardinalities; prohibit copied upstream meaning. |
| STD-011 safe stops | Add the explicit determinism-critical triggers in Section 11. |
| Conformance Profile | Add or revise criteria only for the changed normative requirements; preserve M.9 result and aggregation semantics. |
| Target Project templates | Update Contract/Profile role metadata, bootstrap outputs, DevelopmentPhases, Roadmap, ProjectStatus, operational records, structure guidance, and readiness checklist. |
| `CompleteReferenceTarget` | Update the fictional example to exercise the corrected operational model without asserting real-Target or production validity. |

The correction package must not:

- modify Forge AI Target artifacts;
- implement `ai-dos init project`, validation code, or runtime behavior;
- resolve Versioning policy;
- promote or activate STD-011 or the template family; or
- reopen unchanged historical findings.

## 16. Validation Strategy After Correction

The next validation cycle should be delta-based:

1. map each accepted `TPOM-D*` decision to changed Standard clauses;
2. map only changed or new clauses to updated conformance criteria;
3. validate changed templates and example artifacts against those criteria;
4. rerun unchanged criteria mechanically where necessary to detect regression;
5. report only new defects or regressions; and
6. run a focused bootstrap/hold and operational-cardinality pilot.

A fifth broad audit that simply repeats the existing 22-row pilot is not required.

## 17. Readiness and Exactly One Next Step

### Current readiness

- Ready for Human Governance architecture decision: **Yes**.
- Ready for STD-011 candidate-baseline correction without Human Governance decision: **No**.
- Ready for Forge AI conformance or migration: **No**.
- Ready for STD-011 or template-family promotion: **No**.
- Ready to resume Forge AI feature development under the corrected model: **No**.

### Exactly one next bounded action

> **Human Governance shall decide the `TPOM-D01`–`TPOM-D10` ballot in Section 14.**

This is a decision gate, not another audit. If the recommended set is accepted, the next separately authorized work unit becomes the candidate-baseline correction described in Section 15.

## 18. Validation Record

| Check | Result |
|:---|:---|
| Repository identity and clean starting revision | `doallon/forge-ai` at `0a6ed4e82054a9c4d4a402c75ff33a5d6276cf36`; clean before mutation |
| Mandatory repository governance entry chain read | Pass |
| Current Forge AI ProjectStatus read without using it as standalone-program scope or priority authority | Pass |
| Current STD-011 and Conformance Profile inspected | Pass |
| Current Target Project templates and `CompleteReferenceTarget` evidence inspected | Pass |
| Completed four-report evidence chain preserved rather than reopened | Pass |
| TaskPlanner, TaskGenerationWorkflow, ProjectStateUpdater, and TargetRepositoryResolution ownership boundaries preserved | Pass |
| Versioning STEP 1–8 decision-package state represented without opening synthesis or selecting policy | Pass |
| Product/Target truth boundary preserved | Pass |
| New Meta-Model, architecture layer, governance model, or workflow family created | No |
| Forge AI Target artifact or operational state changed | No |
| Standard, Profile, template, example, Meta-Model, RFC, System Layer, or workflow changed | No |
| Repository change | Exactly this one non-canonical report |

## 19. Protected-Boundary Confirmation

- No Forge AI Mission, DevelopmentPhases, Roadmap, ProjectStatus, evidence, report, Target contract, or operational state was modified.
- No Forge AI work unit, candidate, capability, approval subject, or state transition was generated, selected, activated, executed, recorded, or accepted.
- No STD-011 requirement, conformance criterion, template, example, Meta-Model, RFC, System Layer contract, or workflow was amended.
- No Target was assessed, migrated, certified, promoted, initialized, or activated.
- No Versioning Architecture question was answered, no synthesis was opened, and no numbering, signaling, bump, compatibility, or migration policy was selected.
- This package records recommendations and a decision gate only. It has no normative or operational effect by existence, commit, merge, citation, or review.

## 20. Final Conclusion

The current STD-011 Target Project operating model has the right architectural foundation and should be evolved rather than replaced. Its present 22/22 Conformant pilot remains valid for the exact current contract and fictional subject, but it does not close the broader architecture-adequacy question.

The required correction is bounded: establish a valid bootstrap lifecycle, separate Target Contract from resolver-consumable Declaration Profile at the logical-role level, keep strategic DevelopmentPhases distinct from finite objective-bound candidate-generation input, reduce ProjectStatus to exact current facts and references, and make determinism-critical cardinality and safe-stop conditions explicit.

The existing Target-root physical layout remains the preferred standalone default. Forge AI-specific monorepo paths remain an allowed locator profile, not the reusable default.

The program should now leave the general audit loop. Human Governance should decide the ten-item operating-model ballot; accepted decisions should then drive one candidate-baseline correction package, followed by a real Forge AI conformance/migration pilot, Versioning synthesis and reconciliation, promotion decisions, and only then renewed Forge AI capability development.

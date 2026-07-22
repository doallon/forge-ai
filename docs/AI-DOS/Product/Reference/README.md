# AI-DOS Reference

The AI-DOS Reference is the public lookup hub for users, Target Project owners, Execution Provider implementers, reviewers, auditors, and contributors who need precise navigation to AI-DOS concepts, commands, workflows, specifications, terminology, and common questions.

This section is publication-oriented. It explains where to look and how the public reference surface is organized. It does not replace normative AI-DOS contracts, Target-owned authorities, or task-specific Human Governance instructions.

---

## 1. Purpose

Use the Reference section when you need to answer questions such as:

- Which AI-DOS command family applies to this instruction?
- Which workflow owns task selection, execution, review, or state update?
- Which specification defines a term, identity, declaration, or boundary?
- What does a recurring AI-DOS term mean?
- Where is the canonical source for a behavior described in public documentation?
- Is a statement explanatory guidance or normative authority?

For introductory learning, start with [Getting Started](../GettingStarted/README.md). For scenario-driven practice, use [Tutorials](../Tutorials/README.md). For foundational ideas, use [Concepts](../Concepts/README.md).

---

## 2. Reference Navigation

### [Commands](Commands.md)

Use Commands when you know what Human Governance or an operator wants to do and need to locate the applicable command family.

Typical lookup questions:

- How is an explicitly bounded task routed?
- How is review requested without authorizing edits?
- How is correction work distinguished from fresh implementation?
- How are continuation, approval, audit, or validation intents interpreted?
- Which command surface should an Execution Provider enter?

The Commands page should summarize command purposes and link to their canonical owners. It must not invent command semantics or treat example wording as the only accepted wording.

### [Workflows](Workflows.md)

Use Workflows when you need to understand which AI-DOS process owns a transition or decision.

Typical lookup questions:

- Which workflow selects the next bounded work unit?
- When is candidate generation allowed?
- Which workflow updates Target operational state?
- How are review findings handed back for correction?
- Where do evidence and safe-stop outcomes belong?

The Workflows page should describe ownership and navigation. The normative workflow files remain authoritative.

### [Specifications](Specifications.md)

Use Specifications when you need exact technical or governance authority for a concept, schema, identity, declaration, boundary, or execution rule.

Typical lookup questions:

- Which RFC owns reviewed-subject identity?
- Where is Target repository resolution specified?
- Which artifact defines the provider boundary?
- Where are validation declarations or protected-area rules defined?
- Which specification owns a capability that public documentation mentions?

The Specifications page should act as a map to canonical artifacts, not a second specification set.

### [Glossary](Glossary.md)

Use the Glossary for concise definitions of recurring AI-DOS terms.

Typical lookup terms include:

- AI-DOS
- Target Project
- Target Context
- Resolved Target Context
- Execution Provider
- Human Governance
- bounded work unit
- protected area
- validation evidence
- reviewed subject
- safe stop
- activation
- acceptance

Glossary entries should point to the owning concept or specification whenever a short definition is insufficient.

### [FAQ](FAQ.md)

Use the FAQ for practical questions that cross multiple concepts or reference pages.

Typical questions include:

- Is AI-DOS tied to one model, vendor, or coding agent?
- Does a provider's technical capability imply authorization?
- Does a successful test prove the whole AI-DOS system?
- Does merge equal Human Governance acceptance?
- Can a Target Project store AI-DOS product truth?
- What should happen when required context is missing?

FAQ answers should remain explanatory and link to normative owners for exact behavior.

---

## 3. Authority Model for Reference Material

Public reference pages are navigation and explanation surfaces. They are not automatically normative merely because they are concise or easy to find.

Use this interpretation order:

1. Human Governance instruction for the current task.
2. Target-owned authorities for Target identity, mission, planning, operational state, protected areas, and authorization.
3. Canonical AI-DOS contracts, workflows, commands, system documents, checklists, templates, and specifications for reusable product behavior.
4. Public Product documentation for orientation, learning, examples, and lookup.

When a Reference page and a canonical authority appear to disagree, the canonical authority governs. The Reference page should be corrected rather than used to override its source.

---

## 4. Target Truth and AI-DOS Product Truth

The Reference section belongs to reusable AI-DOS product documentation.

It may explain:

- the general role of a Target Project;
- how Target Context reaches AI-DOS;
- how Execution Providers consume AI-DOS contracts;
- how bounded work, review, validation, evidence, and safe stops relate;
- how to locate canonical AI-DOS authorities.

It must not contain or claim ownership of:

- a specific Target Project's live status;
- a specific Target's mission or roadmap;
- Target-specific approval state;
- transient pull request, branch, commit, or work-unit state as reusable product truth;
- provider-specific behavior presented as universal AI-DOS behavior.

Target-specific examples may be used only when clearly labeled as examples and must not redefine the reusable model.

---

## 5. Execution Provider Neutrality

AI-DOS is designed to be consumed through replaceable Execution Providers.

An Execution Provider may be:

- an AI coding agent;
- a conversational AI host;
- an automation runner;
- a local CLI adapter;
- a future hosted runtime;
- another tool capable of reading the required contracts and producing bounded evidence.

The Reference section should describe provider roles without making one provider's commands, limitations, user interface, branch model, or tool vocabulary part of universal AI-DOS semantics.

Provider-specific examples are useful only when the provider-specific portion is clearly separated from the provider-neutral rule.

---

## 6. Lifecycle Lookup

A common source of confusion is treating the work lifecycle as one undifferentiated action. Use the following lookup model:

| Lifecycle concern | Public lookup destination | Canonical owner |
|:---|:---|:---|
| Understand an instruction | Commands | Applicable command contract |
| Select the next work unit | Workflows | Task planning workflow |
| Construct a candidate | Workflows | Task generation workflow |
| Execute bounded work | Commands and Workflows | Applicable execution route |
| Validate changes | Specifications and Workflows | Declared validation authority |
| Review a completed subject | Commands and Specifications | Review command, checklist, and review specification |
| Correct review findings | Commands and Workflows | Correction route |
| Record or apply a state transition | Workflows | State-update workflow plus Target authority |
| Approve completed work | FAQ and Glossary for orientation | Human Governance and applicable Target policy |
| Continue to later work | Commands and Workflows | Target continuation policy and task planning workflow |

These concerns are related but not interchangeable. In particular:

- execution is not review;
- review is not approval;
- merge is not automatically acceptance;
- acceptance is not automatically continuation;
- technical capability is not execution authority;
- validation evidence is not unlimited proof.

---

## 7. Validation Claim Boundary

Reference material must preserve the scope of validation claims.

A command validates only the surface it actually exercises. For example:

- a Markdown link check validates link resolution within its configured scope;
- a schema check validates the schema and inputs it processed;
- a TypeScript typecheck validates the configured TypeScript surface;
- a unit test validates the behavior covered by that test suite;
- a review validates the exact reviewed subject and revision identity;
- a Target evidence report supports only the evidence claim it records.

No single implementation-specific check should be described as proving AI-DOS architecture, governance correctness, Target acceptance, or future capability readiness unless separate authority explicitly supports that broader claim.

---

## 8. Safe-Stop Lookup

Use the Reference section to identify where a safe-stop condition is owned, not to improvise around it.

Common safe-stop triggers include:

- missing required Target context;
- contradictory authorities;
- no eligible bounded candidate;
- multiple candidates without an authorized deterministic resolution;
- protected-area conflict;
- missing validation evidence;
- reviewed-subject identity drift;
- insufficient mutation authority;
- a provider lacking the tools required for the authorized scope;
- an instruction that would activate a protected capability by implication.

A safe stop should identify the blocker, the authority that caused the stop, what was not changed, and the one bounded action needed to resolve it when that action is known.

---

## 9. How to Use This Hub

### When starting from a Human Governance instruction

1. Read the Target repository entry and Target contract.
2. Resolve the current Target-owned context.
3. Use [Commands](Commands.md) to identify the requested intent.
4. Use [Workflows](Workflows.md) to locate the owning process.
5. Use [Specifications](Specifications.md) for exact schemas or boundaries.
6. Use [Glossary](Glossary.md) for unfamiliar terms.
7. Use [FAQ](FAQ.md) for cross-cutting practical questions.

### When reviewing a provider report

Check whether the report identifies:

- the exact objective;
- the authority consumed;
- the allowed and forbidden scope;
- the changed artifacts;
- the validation performed and its limits;
- protected-area confirmation;
- blockers or warnings;
- completion evidence;
- state-update authority;
- exactly one recommended next step.

Then follow the relevant Reference links to verify terminology and ownership.

### When authoring public documentation

Before adding a statement:

1. Identify its canonical owner.
2. Decide whether the public page should summarize or merely link.
3. Avoid copying volatile operational state.
4. Avoid provider-specific assumptions.
5. Preserve lifecycle and validation boundaries.
6. Add a canonical link where exact behavior matters.

---

## 10. Reference Page Quality Rules

A strong Reference page should be:

- **accurate** — consistent with canonical owners;
- **locatable** — organized around real lookup questions;
- **concise at the point of lookup** — detailed enough to disambiguate, but not a duplicate specification;
- **provider-neutral** — reusable across AI hosts and automation tools;
- **Target-independent** — free of transient Target operational state;
- **boundary-preserving** — clear about authority, scope, validation, and lifecycle separation;
- **link-rich** — directing readers to normative owners and deeper public guidance;
- **safe-stop aware** — never converting missing authority into invented work.

A Reference page should not:

- create a new workflow or command family;
- redefine an existing specification;
- declare a capability active;
- claim Human Governance approval;
- copy a Target's ProjectStatus;
- convert an example into a universal rule;
- use repository activity as proof of acceptance or readiness.

---

## 11. Related Public Documentation

- [Product documentation home](../README.md)
- [Getting Started](../GettingStarted/README.md)
- [Concepts](../Concepts/README.md)
- [Tutorials](../Tutorials/README.md)
- [Building Targets](../Tutorials/BuildingTargets.md)
- [Execution Providers](../Tutorials/Providers.md)
- [Governance Examples](../Tutorials/Examples.md)

---

## 12. Reference Readiness Checklist

Before relying on a Reference page, confirm:

- [ ] the page identifies its purpose;
- [ ] the page links to the applicable canonical authority;
- [ ] explanatory guidance is not presented as normative replacement text;
- [ ] Target-owned and AI-DOS-owned truth remain separate;
- [ ] provider-specific details are labeled and bounded;
- [ ] validation claims name the exercised surface;
- [ ] lifecycle stages remain distinct;
- [ ] safe-stop conditions are preserved;
- [ ] no capability is activated by documentation alone;
- [ ] no transient project state is copied into reusable product truth.

---

## 13. Next Reference Pages

The Reference hub routes readers to five focused lookup pages:

1. [Commands](Commands.md)
2. [Workflows](Workflows.md)
3. [Specifications](Specifications.md)
4. [Glossary](Glossary.md)
5. [FAQ](FAQ.md)

Each page should remain a public navigation and explanation surface that points to canonical AI-DOS and Target authorities rather than duplicating or replacing them.
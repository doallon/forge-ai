# Forge AI AI-DOS Product Delivery, Distribution, Integration, Feedback, Evolution, External Target Readiness, and AI Highway Operations Roadmap

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.V2.ROADMAP.V4` |
| Title | Forge AI AI-DOS Product Delivery, Distribution, Integration, Feedback, Evolution, External Target Readiness, and AI Highway Operations Roadmap |
| Version | `6.6.0-draft` |
| Status | Draft |
| Canonical Status | Active Forge AI Target Project product-delivery roadmap; not AI-DOS product truth and not authority for external Target Projects |
| Classification | Target Project Strategic Product Delivery Roadmap |
| Document Type | Product Capability, Distribution, and Evolution Roadmap |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-08-04 |
| Lifecycle Phase | Active Target Project Planning |
| Traceability ID | `FORGE-AI.V2.ROADMAP-REALIGNMENT-001` |
| Scope | AI-DOS product capability acquisition, private/public boundary, distribution build and release foundation, Local CLI, Target onboarding, public System Interface, Codex adapter, Local MCP provider, Evolution Capsules, governed product evolution, external Target proof, managed provider maturity, and Multi-Target AI Highway operations directed by Forge AI. |
| Out of Scope | AI-DOS internal architecture changes, `docs/AI-DOS/` changes, implementation tasks, CLI/MCP/API/service/adapter/package/schema/feedback implementation, RFC creation, live ProjectStatus updates, Axis Suite activation, certification, vendor selection, pricing, and automatic maturity advancement. |
| Normative Authority | Human Governance; canonical Target Project contract `docs/Projects/ForgeAI/Mission/AGENTS.md`; `docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Read-Only Context | `docs/Projects/ForgeAI/Planning/ProjectStatus.md` |
| Consumes | Forge AI mission, Target Project contract, DevelopmentPhases product capability program, live-state evidence as read-only context, Human Governance decisions, distribution-readiness evidence, Target integration evidence, privacy evidence, and completed execution evidence. |
| Produces | Product-delivery roadmap describing which reusable AI-DOS capability is acquired next, what dependency it requires, what evidence proves it, and what Human Governance decision permits progression. |
| Certification Status | Not certified |

---

## 1. Purpose

This roadmap defines the Forge AI product delivery, distribution, integration, feedback, and evolution roadmap for AI-DOS as an AI Operating System.

It answers:

```text
Which reusable AI-DOS product capability
must be acquired next,
what dependency does it require,
what evidence proves it,
and what Human Governance decision
permits progression?
```

This roadmap remains Forge AI Target Project planning truth. It does not implement distribution, create RFCs, update ProjectStatus, certify product readiness, or activate Axis Suite.

---

## 2. Deployment Maturity Model

```text
Private Development Repository
    ↓
Build
    ↓
Versioned Distribution
    ↓
Local CLI
    ↓
Local MCP
    ↓
Managed Provider
```

These are maturity stages, not three unrelated product variants. Distribution v1 is Local CLI, Distribution v2 is Local MCP, and Distribution v3 is Managed / Hosted AI-DOS Provider.

---

## 3. Governing Product Flow

```text
Private AI-DOS Development Repository
        ↓
Build and Packaging
        ↓
Signed / Versioned AI-DOS Distribution
        ↓
Codex Adapter, CLI, MCP, or Hosted Provider
        ↓
Independent Target Repository
        ↓
Execution, Validation, Review, Evidence
        ↓
Privacy-Safe Evolution Input
        ↓
Governed AI-DOS Product Improvement
        ↓
New AI-DOS Distribution Release
```

The private AI-DOS development repository is not assumed to be visible to end users. Independent Target Repositories expose Target-owned contracts, resources, constraints, protected areas, validation commands, and execution authority; they do not contain AI-DOS private source, internal architecture, workflows, engines, governance documents, or private development state.

---

## 4. Permanent Feedback and Evolution Principle

```text
AI-DOS may detect improvement opportunities while operating
against any authorized Target Project.

The originating Target Repository is not the AI-DOS
product-development repository and must not be treated as one.

AI-DOS shall convert an eligible opportunity into a portable,
privacy-reviewed evolution input that can survive loss of access
to the originating Target Repository.
```

Evolution input must be portable, privacy-reviewed, consent-controlled, provenance-preserving, and usable without future access to the originating Target Repository.

---

## 5. Required Capability Relationships

- Local CLI precedes Local MCP.
- A stable public System Interface precedes supported adapters.
- Distribution foundation precedes external Target product claims.
- Evolution transport depends on evidence, privacy, redaction, and consent.
- External Target evidence precedes hosted-provider maturity claims.
- Hosted-provider success precedes broad multi-Target readiness.
- Self-hosting evidence alone is insufficient for product readiness.
- Axis Suite must not be used as an external pilot until the required distribution and Target integration boundary exists.
- Codex is an AI host and adapter consumer between a Target Repository and an installed or hosted AI-DOS runtime; Codex is not AI-DOS itself.
- Human Governance remains final for capability acceptance, distribution release, hosted-provider activation, and product evolution.
- Passing tests does not automatically authorize release or capability promotion.

---

## 6. Strategic Streams

### Stream 1 — Product Identity and Private/Public Boundary

| Roadmap Element | Definition |
|:---|:---|
| Owns | Private development source boundary; distributable runtime boundary; Target-owned truth boundary; public contracts; protected intellectual property; licensing and visibility assumptions. |
| Next Capability | Explicitly define what remains private and what can be distributed. |
| Dependencies | Accepted product identity and purity foundation. |
| Required Evidence | Boundary inventory, visibility assumptions, licensing assumptions, protected IP review, Target-owned truth review, and proof that Targets do not require AI-DOS internal documentation. |
| Governance Decision | Human Governance accepts D0 private/public boundary. |

### Stream 2 — Distribution Build and Release Foundation

| Roadmap Element | Definition |
|:---|:---|
| Owns | Build pipeline; packaging; manifests; versioning; signing; integrity verification; installation; update; rollback; uninstall; compatibility; release governance. |
| Next Capability | Establish a signed, versioned distribution architecture and package contract. |
| Dependencies | Stream 1 / D0. |
| Required Evidence | Build and packaging plan, manifest model, version model, signing/integrity criteria, install/update/rollback/uninstall criteria, compatibility matrix seed, and release-governance gate. |
| Governance Decision | Human Governance accepts D1 distribution architecture and package contract. |

### Stream 3 — Distribution v1: Local CLI

| Roadmap Element | Definition |
|:---|:---|
| Owns | Local executable runtime; explicit Target path; local context resolution; bounded commands; evidence output; offline-first behavior; local data directory; Codex terminal invocation. |
| Next Capability | Validate locally installable AI-DOS execution without private repository access or mandatory network connection. |
| Dependencies | Stream 2 / D1. |
| Required Evidence | Local install evidence, Target path handling, Target contract loading, bounded command behavior, local execution, validation/evidence output, local runtime-data storage, offline mode, uninstall, and rollback evidence. |
| Governance Decision | Human Governance validates D2 Local CLI package. |

### Stream 4 — Target Contract and Onboarding

| Roadmap Element | Definition |
|:---|:---|
| Owns | Minimal Target contract; Target resource declaration; protected-area declaration; validation declaration; source-scope declaration; permissions; onboarding validation; missing-context safe stops. |
| Next Capability | Enable independent Target onboarding without copying AI-DOS private internals into the Target. |
| Dependencies | Streams 1 through 3. |
| Required Evidence | `S4-E1` Minimal Target contract criteria, `S4-E2` onboarding validation, `S4-E3` protected-area proof, `S4-E4` validation declaration proof, `S4-E5` permissions proof, and `S4-E6` missing-context safe-stop evidence. |
| Governance Decision | Human Governance accepts Target onboarding boundary before external Target product claims. |

Target repositories must not include AI-DOS internal documentation.

#### `S4-E2` Generation-Grade Declaration

Roadmap is the sole Target-owned source of the finite generation input `TaskGenerationWorkflow.md` requires as a precondition for `S4-E2` (see `TaskGenerationWorkflow.md` §4). This subsection supplies that input directly; it does not restate, duplicate, or reinterpret that workflow's schema, enumeration, or minimality algorithm, and no separate Candidate Generation Source Profile artifact exists or is referenced.

| Field | Value |
|:---|:---|
| Objective binding | `S4-E2` — Stream 4 Target onboarding validation, bound exclusively; not valid input for any other identifier, stream, or phase. |
| Allowed artifact scope | `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Onboarding-Validation-001-Evidence.md` — an exact, literal repository-relative path; not a directory, glob, or open-ended scope. |
| Artifact owner | Forge AI Target Project Governance. |
| Mutation kind | Create. |
| Cardinality | Exactly one mandatory artifact; no choice group; maximum artifact count `1`. |
| Combination / exclusion rules | None declared — a single mandatory artifact admits no combination or exclusion interaction. |

##### Finite Onboarding-Declaration Evaluation Cases

| Case ID | Declared Condition | Accepted `S4-E1` Contract Element Tested | Expected Observable Outcome |
|:---|:---|:---|:---|
| `CASE-1` | The canonical Target Operational Entry (`ProjectStatus.md`) is resolvable; root `AGENTS.md` §5's Mandatory Reading Order resolves in full; and the Target-owned authorities needed for the requested resolution (e.g. Mission, DevelopmentPhases, Roadmap, as applicable to the invocation) are accessible. Reports, Source/implementation resources, and Validation resources are required only when the resolved task declares them | Root `AGENTS.md` §5 Mandatory Reading Order; `Mission/AGENTS.md` §3 Declared Target Resources; `Mission/AGENTS.md` §4 Target Operational Entry | `Success` — Target Context resolves completely for a minimal valid onboarding invocation; bounded execution may proceed without requiring task-specific source or validation resources absent a resolved task |
| `CASE-2` | Target Context cannot resolve `ProjectStatus.md`, the sole Target Operational Entry | `Mission/AGENTS.md` §4 Target Operational Entry | `Blocker` — missing Target Operational Entry; onboarding stops |
| `CASE-3` | Invocation requests modification of a Protected Area listed in `Mission/AGENTS.md` §6 without explicit authorization | `Mission/AGENTS.md` §6 Protected Areas | `Blocker` — protected-area conflict; work stops and is reported |
| `CASE-4` | Invocation expresses continuation or advancement intent while no executable work unit is active and this Roadmap `S4-E2` generation-grade declaration cannot be resolved for the controlling objective | `Mission/AGENTS.md` §5.2 rules 9 and 14; `ProjectStatus.md` §12 | `Blocker` — safe stop; no work is invented |

These four cases are finite and exhaustively declared here; no additional case may be added or substituted without an explicitly authorized Roadmap amendment.

##### Observable Completion Predicate

The artifact exists at the declared allowed artifact scope path; it contains a Document Metadata table and exactly four labeled subsections matching `CASE-1`–`CASE-4`, each stating the declared condition, the exact `S4-E1` contract element cited, and an explicit observed outcome (`Success` or `Blocker`) compared against that case's expected outcome; the report concludes with one aggregate pass/fail statement, where pass requires all four observed outcomes to match their expected outcomes. No automated command is declared because no Target-declared executable test or script currently exists for onboarding-declaration evaluation; the check is a declared case-by-case evaluation record.

#### `S4-E3` Generation-Grade Declaration

Roadmap is the sole Target-owned source of the finite generation input `TaskGenerationWorkflow.md` requires as a precondition for `S4-E3` (see `TaskGenerationWorkflow.md` §4). This subsection supplies that input directly; it does not restate, duplicate, or reinterpret that workflow's schema, enumeration, or minimality algorithm, and no separate Candidate Generation Source Profile artifact exists or is referenced. This declaration is bound exclusively to `S4-E3`; it is not valid generation input for `S4-E2` or any other identifier, stream, or phase, and the `S4-E2` declaration above remains unchanged and independently bound.

| Field | Value |
|:---|:---|
| Objective binding | `S4-E3` — Stream 4 protected-area proof, bound exclusively; not valid input for any other identifier, stream, or phase. |
| Allowed artifact scope | `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Protected-Area-Proof-001-Evidence.md` — an exact, literal repository-relative path; not a directory, glob, or open-ended scope. |
| Artifact owner | Forge AI Target Project Governance. |
| Mutation kind | Create. |
| Cardinality | Exactly one mandatory artifact; no choice group; maximum artifact count `1`. |
| Combination / exclusion rules | None declared — a single mandatory artifact admits no combination or exclusion interaction. |

##### Finite Protected-Area-Proof Evaluation Cases

| Case ID | Declared Condition | Accepted Contract Element Tested | Expected Observable Outcome |
|:---|:---|:---|:---|
| `CASE-1` | An invocation requests modification of a Protected Area listed in `Mission/AGENTS.md` §6 (mirrored in `ProjectStatus.md` §7) without the explicit authorization its Protection Rule names | `Mission/AGENTS.md` §6 Protected Areas; `ProjectStatus.md` §7 Protected Areas | `Blocker` — protected-area conflict; work stops and is reported, per `Mission/AGENTS.md` §6's concluding rule |
| `CASE-2` | An invocation requests modification of a Protected Area under the exact explicit authorization its Protection Rule names, with the modification bounded to only that named exception | `Mission/AGENTS.md` §6 Protected Areas; `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Scope`, `No expansion`) | `Success` — the authorized modification proceeds within the named boundary only |
| `CASE-3` | An invocation holds explicit authorization for one Protected Area or one exact scope, but the requested modification extends beyond that authorized area or scope | `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Scope`, `No expansion`, `Exactly one work unit`) | `Blocker` — unauthorized scope expansion; work stops and is reported |
| `CASE-4` | A Protected Area conflict is detected during execution of an otherwise-authorized task | `Mission/AGENTS.md` §6 concluding rule: "A protected-area conflict must stop work and be reported as a blocker." | `Blocker` — the conflict is reported as a blocker rather than silently ignored, silently narrowed, or treated as implicit permission |

These four cases are finite and exhaustively declared here; no additional case may be added or substituted without an explicitly authorized Roadmap amendment.

##### Observable Completion Predicate

The artifact exists at the declared allowed artifact scope path; it contains a Document Metadata table and exactly four labeled subsections matching `CASE-1`–`CASE-4`, each stating the declared condition, the exact contract element(s) cited, and an explicit observed outcome (`Success` or `Blocker`) compared against that case's expected outcome; the report concludes with one aggregate pass/fail statement, where pass requires all four observed outcomes to match their expected outcomes. No automated command is declared because no Target-declared executable test or script currently exists for protected-area-proof evaluation; the check is a declared case-by-case evaluation record.

#### `S4-E4` Generation-Grade Declaration

Roadmap is the sole Target-owned source of the finite generation input `TaskGenerationWorkflow.md` requires as a precondition for `S4-E4` (see `TaskGenerationWorkflow.md` §4). This subsection supplies that input directly; it does not restate, duplicate, or reinterpret that workflow's schema, enumeration, or minimality algorithm, and no separate Candidate Generation Source Profile artifact exists or is referenced. This declaration is bound exclusively to `S4-E4`; it is not valid generation input for any other identifier, stream, or phase, and the `S4-E2` and `S4-E3` declarations above remain unchanged and independently bound.

##### `objective_id`

| Field | Value |
|:---|:---|
| `objective_id` | `S4-E4` — Stream 4 validation declaration proof. This input is bound exclusively to `S4-E4` and is not valid generation input for any other identifier, stream, or phase. |

##### `artifact_options`

One record. No option is inferred, expanded from a rule, or added by repository search.

| `option_id` | Artifact Path | Owner | Mutation Kind | Mandatory | Choice Group | Validation Profile |
|:---|:---|:---|:---|:---|:---|:---|
| `S4-E4-OPT-001` | `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Validation-Declaration-Proof-001-Evidence.md` | Forge AI Target Project Governance | `create` | `true` | None | `S4-E4-VP-001` |

The artifact path is an exact, literal repository-relative path stated in full. It is not a directory, glob, placement rule, or open-ended scope, so no rule expansion is required or permitted before enumeration.

##### `validation_profiles`

One record, referenced by `S4-E4-OPT-001`.

| Field | Value |
|:---|:---|
| `profile_id` | `S4-E4-VP-001` |
| Checks / review criteria | Evaluate each of the four finite cases declared below (`CASE-1`–`CASE-4`) against its stated contract element(s) and record its observed outcome. Additionally run and report `npm run test:references`, `npm run typecheck`, `npm test`, and `npm run build`, each with its exit code and the exact surface it exercises. |
| Evidence shape | A Markdown artifact containing a Document Metadata table; exactly four labeled subsections named `CASE-1`, `CASE-2`, `CASE-3`, and `CASE-4`, each stating its declared condition, the exact contract element(s) cited, its declared input distinguished from its observed evidence, an immutable repository, pull-request, workflow-run, commit, or in-report test-input locator for that evidence, and an explicit observed outcome of `Success` or `Blocker` compared against that case's expected outcome; a table of the four expected/observed pairs; one aggregate pass/fail statement; and a validation-results record naming each command, the surface it exercised, and its result. |
| Observable completion predicate | Stated in the dedicated subsection below. |

##### `combination_rules`

| Rule | Value |
|:---|:---|
| Mandatory options | `S4-E4-OPT-001` |
| Exactly-one choice groups | None declared |
| Compatibility / exclusion pairs | None declared |
| Maximum artifact count | `1` |

A single mandatory option with no choice group and no exclusion pair admits exactly one combination.

##### `ordering`

| Rank | `option_id` |
|:---|:---|
| 1 | `S4-E4-OPT-001` |

This order is used only for output canonicalization. It is never a semantic tie-break.

##### Finite Validation-Declaration-Proof Evaluation Cases

These cases are the `Checks / review criteria` content referenced by validation profile `S4-E4-VP-001`.

| Case ID | Declared Condition | Accepted Contract Element Tested | Expected Observable Outcome |
|:---|:---|:---|:---|
| `CASE-1` | Before mutation, an executable work unit declares exact validation commands or review criteria, the evidence each check must produce, and an observable completion condition | `ProjectStatus.md` §8 Validation and Evidence Requirements; `Mission/AGENTS.md` §5.4 Explicitly Bounded Tasks | `Success` — validation is resolved as a bounded, task-specific declaration before mutation begins |
| `CASE-2` | A proposed executable work unit omits its validation commands or review criteria, evidence requirement, or observable completion condition | `ProjectStatus.md` §8 Validation and Evidence Requirements; `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Validation`, `Evidence`) | `Blocker` — execution does not begin because the required validation declaration is incomplete |
| `CASE-3` | A completed task reports the checks performed and their results, names the exact surface each check exercised, and reports any skipped check or environment limitation without broadening the resulting validation claim | Root `AGENTS.md` §10 Validation Claim Boundary; `Mission/AGENTS.md` §8 Validation and Evidence Expectations | `Success` — validation evidence remains traceable and its claim is bounded to the surface actually exercised |
| `CASE-4` | A validation check passes, but no Human Governance approval or other owning lifecycle decision has accepted the result | `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Review / approval`); `Mission/AGENTS.md` §10 Working Principles (`Validation is mandatory`, `Review is not approval`) | `Success` — the passing result is reported as validation evidence only and is not represented as approval, acceptance, certification, promotion, or capability activation |

These four cases are finite and exhaustively declared here; no additional case may be added or substituted without an explicitly authorized Roadmap amendment.

##### Observable Completion Predicate

This predicate belongs to validation profile `S4-E4-VP-001`.

The artifact exists at the exact path declared by `S4-E4-OPT-001`; it contains a Document Metadata table and exactly four labeled subsections matching `CASE-1`–`CASE-4`, each stating the declared condition, the exact contract element(s) cited, and an explicit observed outcome (`Success` or `Blocker`) compared against that case's expected outcome; the report concludes with one aggregate pass/fail statement, where pass requires all four observed outcomes to match their expected outcomes.

Each case must separate its declared input from its observed evidence, and must cite an immutable locator — a repository path and commit, a pull request, a workflow run, or a test input persisted in full inside the artifact itself — from which an independent reviewer can reproduce the observed outcome. A narrative assertion that an event occurred is not evidence. A case must not claim that an external invocation occurred unless an immutable repository or GitHub locator directly proves that invocation's complete content and outcome; otherwise the case must be evaluated against a complete test input persisted inside the artifact. Each conclusion is bounded to what its cited evidence proves.

Aggregate `PASS` is permitted only when all four cases are independently reproducible from their cited locators and match their expected outcomes. Otherwise the artifact records the truthful non-`PASS` result and stops before any acceptance recommendation.

No automated command evaluates these four cases, because no executable check currently determines whether a work unit's validation declaration conforms to them; the case-by-case evaluation record remains the check. A Target-declared executable validation script does exist, however — `npm run test:references`, declared in `package.json` and run by pull-request validation — so where a case's observed outcome depends on an actual executed check, the report must cite that run and its result rather than describing the check in narrative form.

#### `S4-E5` Generation-Grade Declaration

Roadmap is the sole Target-owned source of the finite generation input `TaskGenerationWorkflow.md` requires as a precondition for `S4-E5` (see `TaskGenerationWorkflow.md` §4). This subsection supplies that input directly; it does not restate, duplicate, or reinterpret that workflow's schema, enumeration, or minimality algorithm, and no separate Candidate Generation Source Profile artifact exists or is referenced. This declaration is bound exclusively to `S4-E5`; it is not valid generation input for any other identifier, stream, or phase, and the `S4-E2`, `S4-E3`, and `S4-E4` declarations above remain unchanged and independently bound.

##### `objective_id`

| Field | Value |
|:---|:---|
| `objective_id` | `S4-E5` — Stream 4 permissions proof. This input is bound exclusively to `S4-E5` and is not valid generation input for any other identifier, stream, or phase. |

##### `artifact_options`

One record. No option is inferred, expanded from a rule, or added by repository search.

| `option_id` | Artifact Path | Owner | Mutation Kind | Mandatory | Choice Group | Validation Profile |
|:---|:---|:---|:---|:---|:---|:---|
| `S4-E5-OPT-001` | `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Permissions-Proof-001-Evidence.md` | Forge AI Target Project Governance | `create` | `true` | None | `S4-E5-VP-001` |

The artifact path is an exact, literal repository-relative path stated in full. It is not a directory, glob, placement rule, or open-ended scope, so no rule expansion is required or permitted before enumeration. The path is reserved by this declaration for the future generated candidate and is intentionally uncommitted at declaration time; this declaration neither creates the artifact nor asserts that it already exists.

##### `validation_profiles`

One record, referenced by `S4-E5-OPT-001`.

| Field | Value |
|:---|:---|
| `profile_id` | `S4-E5-VP-001` |
| Checks / review criteria | Evaluate each of the four finite cases declared below (`CASE-1`–`CASE-4`) against its stated contract element(s) and record its observed outcome. Additionally run and report `npm run test:references`, `npm run typecheck`, `npm test`, and `npm run build`, each with its exit code and the exact surface it exercises. `npm run build` validates only the bounded TypeScript compilation surface; it does not validate permissions semantics. Record `git status --short` immediately before and after the four commands. Any command-created repository change outside `S4-E5-OPT-001` is an unauthorized validation side effect and requires `Blocker`, not cleanup followed by `PASS`. |
| Evidence shape | A Markdown artifact containing a Document Metadata table; exactly four labeled subsections named `CASE-1`, `CASE-2`, `CASE-3`, and `CASE-4`, each stating its declared condition, the exact contract element(s) cited, its declared input distinguished from its observed evidence, an immutable repository, pull-request, workflow-run, commit, or in-report test-input locator for that evidence, and an explicit observed outcome of `Success` or `Blocker` compared against that case's expected outcome; a table of the four expected/observed pairs; one aggregate pass/fail statement; and a validation-results record naming each command, its exit code, the exact surface it exercised, the before/after `git status --short` observations, and any repository side effect. |
| Observable completion predicate | Stated in the dedicated subsection below. |

##### `combination_rules`

| Rule | Value |
|:---|:---|
| Mandatory options | `S4-E5-OPT-001` |
| Exactly-one choice groups | None declared |
| Compatibility / exclusion pairs | None declared |
| Maximum artifact count | `1` |

A single mandatory option with no choice group and no exclusion pair admits exactly one combination.

##### `ordering`

| Rank | `option_id` |
|:---|:---|
| 1 | `S4-E5-OPT-001` |

This order is used only for output canonicalization. It is never a semantic tie-break.

##### Finite Permissions-Proof Evaluation Cases

These cases are the `Checks / review criteria` content referenced by validation profile `S4-E5-VP-001`.

| Case ID | Declared Condition | Accepted Contract Element Tested | Expected Observable Outcome |
|:---|:---|:---|:---|
| `CASE-1` | An invocation supplies an authorized objective, an exact allowed mutation scope, applicable protected boundaries, and declared validation and completion requirements, and requests mutation only within that authority envelope | `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Authorized objective`, `Scope`, `Protected areas`, `Validation`) | `Success` — execution is permission-eligible only within the complete declared authority envelope; no permission is inferred beyond it |
| `CASE-2` | Repository, shell, network, API, or other tool capability is available, but the invocation and resolved Target Context supply no authority for the requested mutation | `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Authorized objective`, `No expansion`); `Mission/AGENTS.md` §10 Working Principles (`Missing authority is a blocker, not permission`) | `Blocker` — technical access does not supply permission; mutation does not begin |
| `CASE-3` | The resolved Target state permits read-only review or audit but does not authorize repository execution or ProjectStatus mutation | `ProjectStatus.md` §4 Current Execution Authorization; `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`State mutation`) | `Success` — inspection may proceed read-only, while repository and live-state mutation remain prohibited |
| `CASE-4` | Authority is granted for one exact work unit or protected-area exception, but the proposed action also mutates another artifact, activates a protected future capability, or operates on an external Target | `Mission/AGENTS.md` §6 Protected Areas; `Mission/AGENTS.md` §7 Execution Authorization Boundaries (`Scope`, `No expansion`, `Exactly one work unit`); `ProjectStatus.md` §7 Protected Areas | `Blocker` — permission does not transfer across artifacts, work units, capabilities, protected-area exceptions, or Target boundaries |

These four cases are finite and exhaustively declared here; no additional case may be added or substituted without an explicitly authorized Roadmap amendment.

##### Observable Completion Predicate

This predicate belongs to validation profile `S4-E5-VP-001`.

The artifact exists at the exact path declared by `S4-E5-OPT-001`; it contains a Document Metadata table and exactly four labeled subsections matching `CASE-1`–`CASE-4`, each stating the declared condition, the exact contract element(s) cited, and an explicit observed outcome (`Success` or `Blocker`) compared against that case's expected outcome; the report concludes with one aggregate pass/fail statement, where pass requires all four observed outcomes to match their expected outcomes.

Each case must separate its declared input from its observed evidence, and must cite an immutable locator — a repository path and commit, a pull request, a workflow run, or a test input persisted in full inside the artifact itself — from which an independent reviewer can reproduce the observed outcome. A narrative assertion that an event occurred is not evidence. A case must not claim that an external invocation occurred unless an immutable repository or GitHub locator directly proves that invocation's complete content and outcome; otherwise the case must be evaluated against a complete test input persisted inside the artifact. Each conclusion is bounded to what its cited evidence proves.

### Stream 5 — AI-DOS Public System Interface and Codex Adapter

| Roadmap Element | Definition |
|:---|:---|
| Owns | Stable public operations; request and response contracts; handshake; capability negotiation; session lifecycle; errors; blockers; waiting states; evidence return; adapter conformance. |
| Next Capability | Define a public System Interface that supported hosts such as Codex consume without relying on private internals. |
| Dependencies | Stream 3 / D2 and Target contract boundary. |
| Required Evidence | Interface acceptance evidence, handshake criteria, capability negotiation, session lifecycle criteria, error/blocker/waiting result evidence, evidence-return criteria, Codex adapter conformance evidence. |
| Governance Decision | Human Governance accepts D3 public AI-DOS System Interface and validates D4 Codex CLI adapter when evidence exists. |

### Stream 6 — Distribution v2: Local MCP Provider

| Roadmap Element | Definition |
|:---|:---|
| Owns | MCP server; local authorization; tool surface; Target-scoped sessions; isolation; local-only data behavior; Codex integration; audit evidence. |
| Next Capability | Validate a local MCP-compatible AI-DOS provider that keeps Target code and sensitive context local by default. |
| Dependencies | Stream 5 / D3 and D4. |
| Required Evidence | Local MCP server validation, local authorization, public tool surface, Target-scoped sessions, isolation evidence, local-only data behavior, Codex integration, and audit evidence. |
| Governance Decision | Human Governance validates D5 Local MCP server. |

### Stream 7 — Experience Capture and Evolution Capsules

| Roadmap Element | Definition |
|:---|:---|
| Owns | Opportunity detection; evidence collection; redaction; privacy classification; consent; capsule structure; local queue; manual export; optional upload; integrity; provenance; deduplication. |
| Next Capability | Convert observed deficiencies into portable, privacy-safe Evolution Capsules. |
| Dependencies | Evidence model, privacy model, redaction model, consent model, and Stream 6 operating boundary. |
| Required Evidence | Opportunity detection evidence, minimized evidence set, redaction review, privacy classification, consent record, capsule structure acceptance, local queue/export/upload validation where authorized, integrity, provenance, and deduplication evidence. |
| Governance Decision | Human Governance accepts D6 Evolution Capsule model and validates D7 consent-based feedback transport. |

### Stream 8 — Governed AI-DOS Product Evolution

| Roadmap Element | Definition |
|:---|:---|
| Owns | Opportunity intake; opportunity validation; Human Governance authorization; bounded correction; regression validation; Target-independence validation; release candidate generation; capability acceptance; distribution release. |
| Next Capability | Turn validated, privacy-safe opportunities into governed AI-DOS product improvements and new distribution releases. |
| Dependencies | Stream 7 / D6 and D7. |
| Required Evidence | Opportunity intake record, validation evidence, authorization decision, bounded correction evidence, regression and privacy validation, Target-independence validation, release candidate evidence, capability acceptance, and release decision. |
| Governance Decision | Human Governance authorizes each correction, accepts capability changes, and approves any new distribution release. |

Required lifecycle:

```text
Opportunity
    ↓
Validation
    ↓
Authorization
    ↓
Bounded Correction
    ↓
Regression and Privacy Validation
    ↓
Human Governance Acceptance
    ↓
New Distribution Release
```

### Stream 9 — External Target Proof

| Roadmap Element | Definition |
|:---|:---|
| Owns | Independent Target pilot readiness; Axis Suite onboarding when authorized; no Forge AI fallback; no private source exposure; Target isolation; real bounded execution; cross-environment validation; opportunity-capture proof. |
| Next Capability | Prove AI-DOS works against an independent Target under distribution and integration boundaries. |
| Dependencies | Streams 1 through 8, with accepted distribution foundation, Target onboarding, System Interface, and Evolution Capsule controls. |
| Required Evidence | Independent Target contract, independent Target state, source/protected boundaries, Target-declared validation, no Forge AI fallback, no private AI-DOS source exposure, bounded execution, safe-stop behavior, cross-environment validation, and opportunity-capture proof. |
| Governance Decision | Human Governance accepts D8 independent Axis Suite pilot only after required boundaries exist and explicit authorization is granted. |

Axis Suite remains future and inactive until Human Governance authorizes it after the required distribution and Target integration boundary exists.

### Stream 10 — Distribution v3: Managed Provider

| Roadmap Element | Definition |
|:---|:---|
| Owns | Hosted API/provider; authentication; tenant isolation; Target isolation; encryption; retention; consent; service observability; regional policy; managed updates; hosted safe-stop and recovery. |
| Next Capability | Establish and pilot a managed AI-DOS provider with privacy, consent, isolation, auditability, rollback, and failure handling. |
| Dependencies | Stream 9 / D8. |
| Required Evidence | Managed provider architecture, authentication/authorization, tenant and Target isolation, encrypted transport, minimal context transfer, retention/regional controls, consent controls, service observability, managed updates, rollback, safe-stop, recovery, and local/offline fallback evidence. |
| Governance Decision | Human Governance accepts D9 managed provider architecture and separately accepts D10 managed provider pilot. |

### Stream 11 — Multi-Target AI Highway

| Roadmap Element | Definition |
|:---|:---|
| Owns | Many Target Projects; compatibility and migration; product releases; privacy-safe aggregate learning; multi-Target regression; ecosystem adapters; operational sustainability; governed long-term evolution. |
| Next Capability | Operate AI-DOS across many independent Targets while sustaining releases, compatibility, support, privacy-safe learning, and governed evolution. |
| Dependencies | Stream 10 / D10. |
| Required Evidence | Multi-Target isolation, compatibility matrix, migration policy, release train, regression suite, aggregate privacy evidence, adapter ecosystem evidence, support model, and product operations evidence. |
| Governance Decision | Human Governance accepts D11 Multi-Target AI Highway readiness. |

---

## 7. Distribution Milestones

| Milestone | Outcome | Required Evidence | Governance Decision |
| :-------- | :----------------------------------------------------------------------- | :--- | :--- |
| `D0` | Private development repository and public distribution boundary accepted | Boundary inventory, protected-IP review, Target-owned truth proof | Human Governance accepts private/public boundary |
| `D1` | Distribution architecture and package contract accepted | Build, package, manifest, version, signing, compatibility, install/update/rollback/uninstall criteria | Human Governance accepts distribution architecture |
| `D2` | Local CLI package validated | Local install, Target argument, bounded commands, evidence output, offline, data, uninstall, rollback evidence | Human Governance validates Distribution v1 |
| `D3` | Public AI-DOS System Interface accepted | Handshake, operations, results, blockers, waiting states, evidence, compatibility criteria | Human Governance accepts public interface |
| `D4` | Codex CLI adapter validated | Adapter conformance showing Codex is a host/consumer, not AI-DOS | Human Governance validates adapter |
| `D5` | Local MCP server validated | Local MCP process, authorization, tools, sessions, isolation, audit evidence | Human Governance validates Distribution v2 |
| `D6` | Evolution Capsule model accepted | Portable capsule, minimization, redaction, privacy classification, provenance, integrity | Human Governance accepts capsule model |
| `D7` | Consent-based feedback transport validated | Consent records, local-only/manual export/approved upload validation where authorized | Human Governance validates feedback transport |
| `D8` | Independent Axis Suite pilot completed | Independent Target proof, no Forge fallback, no private source exposure, bounded execution | Human Governance accepts external pilot evidence |
| `D9` | Managed provider architecture accepted | Hosted architecture, privacy, isolation, auth, encryption, retention, rollback, failure handling | Human Governance accepts architecture |
| `D10` | Managed provider pilot completed | Hosted pilot validation, auditability, safe-stop, recovery, fallback evidence | Human Governance accepts Distribution v3 pilot |
| `D11` | Multi-Target AI Highway readiness accepted | Multi-Target isolation, releases, compatibility, migration, aggregate privacy, regression evidence | Human Governance accepts broad readiness |

---

## 8. Planning Boundaries

This roadmap does not:

- create AI-DOS ProjectStatus under `docs/AI-DOS/`;
- create an AI-DOS Roadmap under `docs/AI-DOS/`;
- insert Forge AI planning truth into AI-DOS product truth;
- claim distribution implementation exists;
- claim CLI, MCP, or hosted provider readiness;
- activate Axis Suite work;
- modify current ProjectStatus;
- create implementation tasks;
- create RFC files;
- create package layouts as active implementation truth;
- choose programming language or hosting vendor;
- choose a commercial pricing model; or
- certify product readiness.

---

## 9. Version History

| Version | Date | Description |
|:---|:---|:---|
| `5.1.0-draft` | 2026-07-11 | Prior Forge AI capability roadmap baseline. |
| `6.0.0-draft` | 2026-07-15 | Realigned Forge AI around AI-DOS private development, runtime distribution, local CLI, local MCP, hosted provider, independent Target integration, privacy-safe evolution input, and multi-Target AI Highway operations. |
| `6.1.0-draft` | 2026-07-20 | Added stable Stream 4 Required Evidence identifiers so ProjectStatus can record status by identity without duplicating Roadmap descriptions. |
| `6.2.0-draft` | 2026-07-21 | Extended the Stream 4 `S4-E2` entry with the finite generation-grade declaration (objective binding, allowed artifact scope, artifact owner, mutation kind, cardinality, finite validation cases, observable completion predicate, and combination/exclusion rules) required by `TaskGenerationWorkflow.md` as a generation precondition, making Roadmap the sole Target-owned source of this detail. No Candidate Generation Source Profile artifact is created or restored; AI-DOS retains exclusive ownership of schema semantics, enumeration, minimality, selection, safe-stop, and execution behavior. |
| `6.3.0-draft` | 2026-07-22 | Added the Stream 4 `S4-E3` generation-grade declaration (objective binding, allowed artifact scope, artifact owner, mutation kind, cardinality, four finite protected-area-proof evaluation cases grounded in `Mission/AGENTS.md` §6 and §7, observable completion predicate, and combination/exclusion rules), following the `S4-E2` declaration's structure and bound exclusively to `S4-E3`. The `S4-E2` declaration and every other Roadmap objective remain unchanged. No candidate was generated, selected, activated, or accepted; no `S4-E3` evidence was accepted; `S4-E3` remains `Pending`. |
| `6.4.0-draft` | 2026-08-04 | Added the Stream 4 `S4-E4` generation-grade declaration with one exact validation-declaration-proof report path, Target owner, create mutation, single mandatory artifact cardinality, no combination or exclusion interactions, four finite evaluation cases grounded in the accepted Target validation and evidence boundaries, and an observable aggregate completion predicate. The predicate declares no automated command for the four cases, because no executable check determines conformance of a validation declaration to them, and requires the report to cite an actual run and result wherever a case's observed outcome depends on an executed check — a Target-declared executable validation script (`npm run test:references`) now exists. The declaration is bound exclusively to `S4-E4`; no candidate was generated, selected, activated, executed, or accepted, and ProjectStatus remains unchanged. |
| `6.5.0-draft` | 2026-08-04 | Completed the Stream 4 `S4-E4` generation input so it explicitly and finitely supplies every record `TaskGenerationWorkflow.md` §4 requires. The prior `6.4.0-draft` declaration expressed its content as prose fields (`Objective binding`, `Allowed artifact scope`, `Artifact owner`, `Mutation kind`, `Cardinality`, `Combination / exclusion rules`) and supplied no `option_id`, no validation-profile identifier, no explicit `validation_profiles` record, no evidence shape, and no `ordering` record, so the generation precondition was not met and `TaskGenerationWorkflow.md` §11 required safe-stop rather than candidate construction. This entry adds `objective_id` `S4-E4`; one `artifact_options` record `S4-E4-OPT-001` carrying the exact literal artifact path, owner, mutation kind `create`, `mandatory: true`, no choice group, and validation-profile reference `S4-E4-VP-001`; one `validation_profiles` record `S4-E4-VP-001` carrying exact checks and review criteria, evidence shape, and the observable completion predicate; complete `combination_rules` with maximum artifact count `1`; and a canonical `ordering` record used only for output canonicalization. The completion predicate additionally requires each case to separate declared input from observed evidence, cite an immutable reproducible locator, and refrain from asserting an external invocation that no immutable locator proves; aggregate `PASS` is permitted only when all four cases are independently reproducible. The four finite evaluation cases are unchanged in substance and are now bound as the validation profile's checks. This input remains bound exclusively to `S4-E4`; the `S4-E2` and `S4-E3` declarations are unchanged and independently bound. No candidate was generated, selected, activated, executed, or accepted, and ProjectStatus was not modified. |
| `6.6.0-draft` | 2026-08-04 | Added the complete Stream 4 `S4-E5` finite generation input required by `TaskGenerationWorkflow.md` §4: exclusive objective binding `S4-E5`; one mandatory exact report artifact `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Permissions-Proof-001-Evidence.md` owned by Forge AI Target Project Governance with mutation kind `create`; validation profile `S4-E5-VP-001`; maximum artifact count `1` with no choice group or compatibility/exclusion pair; and canonical ordering containing only `S4-E5-OPT-001`. The report path is reserved for the future generated candidate and is intentionally uncommitted by the declaration. The profile declares four finite permissions-proof cases covering a complete authority envelope, tool capability without mutation authority, read-only review permission, and non-transfer of permission across scopes, work units, capabilities, protected exceptions, or Target boundaries. Its evidence shape and completion predicate require declared input to remain distinct from observed evidence, immutable reproducible locators, explicit expected/observed outcomes, bounded command-surface reporting, and aggregate `PASS` only when all four cases match. It also bounds `npm run build` to TypeScript compilation, requires before/after worktree observations, and treats validation-created changes outside the declared evidence artifact as blockers. This Roadmap-only definition does not generate, select, activate, execute, review, or accept a candidate; does not update ProjectStatus; leaves `S4-E5` pending; and does not activate any protected future capability. |

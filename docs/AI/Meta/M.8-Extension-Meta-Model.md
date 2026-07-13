# M.8 — Extension Meta Model

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.META.EXTENSION.M8` |
| Title | M.8 — Extension Meta Model |
| Version | 1.0.0-draft |
| Status | Draft; Non-canonical; Human-Governed; Not certified |
| Classification | Enterprise Extension Semantic Authority |
| Document Type | Meta Model |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Reusable AI-DOS Extension, Extension Identity, Extension Type, Extension Scope, Extension Point, Extension Target, Extension Profile, Extension Namespace, Extension Registration, Extension Declaration, Extension Authority Binding, Extension Ownership Binding, Extension Dependency, Extension Constraint, Extension Requirement, Extension Capability Declaration, Extension Compatibility Declaration, Extension Version Binding, Extension Lifecycle Binding, Extension Evidence Binding, Extension Schema Binding, Extension Collision, Extension Conflict, Extension Precedence, Extension Isolation, Extension Federation, Extension Deprecation, Extension Supersession, Extension Revocation, Extension Portability, and Target Adapter Extension Boundary semantics. |
| Out of Scope | Plugin loading, extension runtime, package installation, dependency injection, service container behavior, adapter execution, marketplace, distribution, deployment, source-control workflow, registry implementation, Target Project planning, ProjectStatus, DevelopmentPhases, Roadmap, implementation templates, extension approval procedure, certification procedure, schema syntax, and validator implementation. |

---

## 2. Purpose

M.8 defines reusable semantics for governed extension of AI-DOS. It explains how AI-DOS meanings may be specialized, constrained, profiled, or bounded without replacing upstream authority or turning Target-specific truth into AI-DOS product truth.

M.8 defines extension meaning only. It does not define plugin loading, package installation, module discovery, runtime registration, dependency injection, adapter execution, extension marketplace behavior, repository cloning, code generation, deployment, or any implementation mechanism.

---

## 3. Authority and Dependency Position

M.8 is an Enterprise Semantic Profile in the Meta family. Its required upstream authorities are:

- M.0 Framework for Semantic Entity, Authority, Ownership, Boundary, Constraint, Context, Capability, Extension root meaning, and reusable AI-DOS product meaning.
- M.2 Identity for stable identity, identifiers, namespaces, aliases, collisions, equivalence, canonical references, historical identity, and identity scope.
- M.3 Relationships for declared extension relationships, extension-target relationships, dependency relationships, direction, cardinality, and relationship-type constraints.
- M.6 Versioning for extension version binding, lineage, supersession, replacement, deprecation references, and historical version retention.
- M.7 Compatibility for extension compatibility, portability, compatibility claims, compatibility profiles, compatibility exceptions, and compatibility evidence interpretation.

M.8 conditionally consumes:

- M.1 when extending artifact families, artifact types, artifact instances, artifact representations, or artifact bindings.
- M.4 when defining lifecycle profiles or extension lifecycle effects.
- M.5 when extension claims, registrations, conflict records, or compatibility declarations require evidence.
- M.9 when an extension is schema-bound or when a validation profile evaluates extension conformance.

M.8 may expose schema bindings. M.9 validates M.8 extension profiles when applicable. M.8 does not use M.9 as a root semantic prerequisite; extension semantics exist independently from specific validation profiles.

---

## 4. Scope

M.8 owns semantic meaning for Extension, Extension Identity, Extension Type, Extension Scope, Extension Point, Extension Target, Extension Profile, Extension Namespace, Extension Registration, Extension Declaration, Extension Authority Binding, Extension Ownership Binding, Extension Dependency, Extension Constraint, Extension Requirement, Extension Capability Declaration, Extension Compatibility Declaration, Extension Version Binding, Extension Lifecycle Binding, Extension Evidence Binding, Extension Schema Binding, Extension Collision, Extension Conflict, Extension Precedence, Extension Isolation, Extension Federation, Extension Deprecation, Extension Supersession, Extension Revocation, Extension Portability, and Target Adapter Extension Boundary.

An Extension may specialize, constrain, add a governed subtype, add an allowed relationship type, add a lifecycle profile, add an evidence profile, add a compatibility profile, add a schema profile, or add a Target adapter boundary. An Extension may not replace M.0-M.9 meanings, override Human Governance, redefine Constitution, silently redefine Standards, create a second source of truth, or make Target-specific truth part of AI-DOS product truth.

---

## 5. Out of Scope

M.8 explicitly excludes:

- plugin loader;
- extension runtime;
- package installation;
- dependency injection;
- service container behavior;
- adapter execution;
- marketplace;
- distribution;
- deployment;
- source-control workflow;
- registry implementation;
- Target Project planning;
- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- implementation templates;
- extension approval procedure;
- certification procedure;
- schema syntax;
- validator implementation.

---

## 6. Core Extension Concepts

| Concept | Semantic Meaning |
|:---|:---|
| Extension | A governed semantic addition, specialization, constraint, or boundary attached to a declared extension point without replacing upstream meaning. |
| Extension Identity | The stable identity of an Extension as interpreted through M.2 identity semantics. |
| Extension Type | The category of extension concern, such as Semantic Extension, Artifact-Type Extension, or Adapter Boundary Extension. |
| Extension Scope | The boundary within which the Extension has semantic effect. |
| Extension Point | A declared semantic location that permits specialization or governed addition. |
| Extension Target | The upstream concept, profile, artifact family, relationship type, lifecycle profile, or boundary being extended. |
| Extension Profile | A named set of extension constraints, permissions, dependencies, compatibility expectations, and validation expectations. |
| Extension Namespace | The declared namespace used to locate and distinguish extension identity within a declared identity scope. |
| Extension Registration | Semantic recognition of an Extension within a governed scope; it is not runtime loading, approval, certification, deployment, or canonical promotion. |
| Extension Declaration | The explicit statement of identity, namespace, owner, scope, target, authority binding, dependencies, constraints, requirements, and profiles. |
| Extension Authority Binding | The statement of which authority permits and bounds the Extension. |
| Extension Ownership Binding | The owner responsible for maintaining extension meaning and resolving owner-controlled changes. |
| Extension Dependency | A declared dependency on upstream semantic authorities or other extensions. |
| Extension Constraint | A condition limiting extension interpretation or application. |
| Extension Requirement | A required condition that must hold for extension recognition or consumption. |
| Extension Capability Declaration | A declaration of what semantic capability the Extension provides. |
| Extension Compatibility Declaration | A declaration of compatibility scope, direction, degree, and exceptions using M.7 semantics. |
| Extension Version Binding | A binding from extension identity or profile to a version, version range, lineage, or supersession relation using M.6 semantics. |
| Extension Lifecycle Binding | A binding from extension recognition to lifecycle/status semantics when applicable. |
| Extension Evidence Binding | A binding from extension claims, conflicts, or registrations to evidence semantics when applicable. |
| Extension Schema Binding | A binding from an Extension to a schema or validation profile when applicable; Schema binding does not replace semantic authority. |
| Extension Collision | A detected overlap in identity, namespace, semantic ownership, relationship type, lifecycle profile, schema profile, compatibility scope, or dependency claim. |
| Extension Conflict | A collision or contradiction that requires explicit resolution authority and preserved evidence. |
| Extension Precedence | The declared authority order for interpreting extensions; it is not based on load order, discovery order, filename order, or repository location. |
| Extension Isolation | The rule that extension effects remain bounded to their declared scope and do not leak into upstream meanings or other Target contexts. |
| Extension Federation | The coordination of extension namespaces or profiles across external owners while preserving boundaries and authority. |
| Extension Deprecation | A lifecycle binding indicating an Extension should no longer be preferred while preserving historical identity. |
| Extension Supersession | A versioning binding indicating one Extension replaces another under declared scope. |
| Extension Revocation | Withdrawal of semantic recognition within a governed scope while preserving historical traceability. |
| Extension Portability | A compatibility claim that an Extension may be reused across scopes under declared compatibility conditions. |
| Target Adapter Extension Boundary | The semantic boundary allowing AI-DOS meanings to be bound to Target resources without importing Target truth into AI-DOS product truth. |

---

## 7. Extension Categories

### Extension Category Matrix

| Category | Purpose | Allowed specialization | Required upstream authority | Prohibited behavior | Registration expectation | Compatibility expectation | Validation expectation |
|:---|:---|:---|:---|:---|:---|:---|:---|
| Semantic Extension | Add or constrain semantic meaning at a declared extension point. | Narrow definitions, add governed subtype, define bounded constraints. | M.0, M.2, M.3. | Replace upstream meanings or create a second source of truth. | Register identity, namespace, scope, owner, and authority binding. | Declare semantic compatibility scope through M.7 when interoperability is claimed. | Validate only through applicable profiles. |
| Artifact-Type Extension | Add or specialize artifact type semantics. | Add subtype, binding, representation profile, or consumption boundary. | M.0, M.1, M.2, M.3. | Redefine Artifact, artifact identity, or artifact ownership. | Register artifact extension target and type boundary. | Declare artifact compatibility if consumed across producers or versions. | Validate artifact constraints when a profile applies. |
| Relationship-Type Extension | Add allowed relationship type or constraint. | Define relationship name, endpoint classes, direction, cardinality, and invalid edges. | M.0, M.2, M.3. | Redefine relationship root meaning or silently alter existing relationship types. | Register relationship type identity and endpoint scope. | Declare relationship compatibility for consumers relying on edges. | Validate relationship structure when applicable. |
| Lifecycle-Profile Extension | Add a lifecycle/status profile. | Add states, transitions, status bindings, or lifecycle constraints. | M.0, M.2, M.3, M.4. | Redefine lifecycle root meaning or make project planning into lifecycle truth. | Register lifecycle profile and authority binding. | Declare compatibility with existing lifecycle consumers when claimed. | Validate transition and status assertions only under profile. |
| Evidence-Profile Extension | Add evidence expectations or evidence claim profile. | Add evidence classes, quality constraints, confidence expectations, or traceability bindings. | M.0, M.2, M.3, M.5. | Redefine evidence, fabricate evidence, or remove traceability. | Register evidence profile, sources, and retention expectation. | Declare compatibility with evidence consumers when claimed. | Validate evidence requirements when applicable. |
| Compatibility-Profile Extension | Add compatibility category, profile, exception, or matrix boundary. | Add domain-specific compatibility rules or declared exceptions. | M.0, M.2, M.3, M.7. | Redefine compatibility or imply certification. | Register compatibility profile and scope. | Required when compatibility is the extension purpose. | Validate compatibility assertions when applicable. |
| Schema-Profile Extension | Add schema profile or schema binding expectation. | Add schema-bound constraints or profile-specific validation boundaries. | M.0, M.2, M.3; M.9 when schema-bound. | Mandate a schema syntax or replace semantic authority with schema shape. | Register schema profile identity, subject, and binding. | Declare schema compatibility when schemas evolve. | Validate through M.9 profile when applicable. |
| Domain Specialization | Specialize AI-DOS semantics for a reusable downstream domain. | Add bounded domain vocabulary or rules. | Applicable Meta authority for the concept specialized. | Make Target-specific truth reusable by implication. | Register domain scope and ownership boundary. | Declare cross-domain portability only with evidence. | Validate only against selected domain profile. |
| Adapter Boundary Extension | Bind AI-DOS semantics to an external or Target resource boundary. | Define provider boundary, consumer boundary, and mapping constraints. | M.0, M.2, M.3, M.7. | Implement adapters or expose AI-DOS internal paths as Target authority. | Register adapter boundary scope and namespace. | Declare portability or compatibility through M.7. | Validate boundary assertions when applicable. |
| External Namespace Extension | Recognize an external namespace for semantic exchange. | Add external identity boundary and alias rules. | M.0, M.2, M.3. | Claim upstream-owned namespace or make alias canonical. | Register external owner, namespace scope, and federation boundary. | Declare external compatibility only under scope. | Validate namespace uniqueness and boundary declarations. |
| Federated Extension | Coordinate extensions across multiple governed owners. | Federate namespaces, profiles, compatibility claims, or portability rules. | M.0, M.2, M.3, M.6, M.7. | Collapse owner authority or silently merge conflicts. | Register federation members, authority bindings, and conflict rules. | Declare federation compatibility and exceptions. | Validate federation declarations and conflicts when applicable. |

---

## 8. Extension Identity and Namespace Model

### Namespace Concepts

| Concept | Semantic Meaning |
|:---|:---|
| Extension Namespace | A declared identity scope label for an Extension. |
| Namespace Owner | The authority responsible for maintaining namespace meaning. |
| Namespace Scope | The identity boundary where namespace uniqueness is evaluated. |
| Canonical Namespace | The primary namespace identity for an Extension. |
| Reserved Namespace | A namespace held by upstream authority or governance and unavailable for unauthorized extension claims. |
| External Namespace | A namespace owned outside AI-DOS scope and consumed through explicit boundary declarations. |
| Target Namespace | A namespace owned by a Target Project or Target context and not AI-DOS product truth by implication. |
| Namespace Alias | A secondary reference to a namespace that does not create a second canonical identity. |
| Namespace Collision | An overlap or contradiction in namespace claims within a declared identity scope. |
| Namespace Resolution | A governed decision or rule that classifies and resolves namespace conflict without silent overwrite. |
| Namespace Federation | A governed relationship between multiple namespace owners for exchange, mapping, or portability. |

### Namespace Ownership Matrix

| Namespace kind | Owner | Scope | May become AI-DOS product truth by implication? | Required boundary |
|:---|:---|:---|:---:|:---|
| Canonical Namespace | Declared AI-DOS or approved extension owner | Declared identity scope | No; requires governance when promoted. | Identity and authority binding. |
| Reserved Namespace | Human Governance or upstream authority | Reserved scope | No unauthorized claim allowed. | Reservation declaration. |
| External Namespace | External owner | External boundary | No. | External namespace declaration and federation boundary. |
| Target Namespace | Target owner | Target context | No. | Target Adapter Extension Boundary. |
| Namespace Alias | Alias maintainer under canonical owner | Alias scope | No. | Alias-to-canonical binding. |

### Namespace Invariants

1. Every governed Extension must have stable identity.
2. Every governed Extension must declare a namespace.
3. Namespace uniqueness must be evaluated within a declared identity scope.
4. An Extension must not claim an upstream-owned namespace.
5. A Target-specific namespace must not become AI-DOS product truth by implication.
6. Namespace aliases must not create a second canonical identity.
7. Namespace collision must produce a conflict, not silent overwrite.
8. Repository path does not define extension identity.
9. Package name does not automatically define semantic namespace.
10. External namespaces require explicit boundary declarations.

M.8 consumes M.2 identity semantics and does not redefine identity.

---

## 9. Extension Point Model

An Extension Point is a declared semantic location where specialization is permitted. An Extension Point must identify its upstream authority, permitted extension category, allowed constraints, prohibited changes, expected ownership binding, and conflict handling expectations.

Extensions may specialize only declared extension points. A downstream document may not infer an extension point from file proximity, naming, load order, implementation discovery, or convenience.

---

## 10. Registration Semantics

Extension Registration means semantic recognition within a governed scope. It does not mean runtime loading, installation, activation, approval, certification, canonical promotion, or deployment.

### Extension Registration Matrix

| Registration concept | Required meaning | Not implied |
|:---|:---|:---|
| Extension Registration | Recognition of an Extension within a governed scope. | Loading, activation, approval, certification, promotion. |
| Registration Declaration | Identity, namespace, owner, scope, target, dependencies, and boundaries. | Implementation manifest. |
| Registration Authority Binding | Authority that permits recognition. | Human approval unless separately stated. |
| Registration Status Binding | Lifecycle/status binding for registration state when applicable. | Project status update. |
| Registration Scope | Boundary where recognition applies. | Global applicability. |
| Registration Dependency Declaration | Declared semantic dependencies and conditional dependencies. | Dependency installation. |
| Registration Compatibility Declaration | M.7 compatibility scope, degree, and exceptions when claimed. | Compatibility certification. |
| Registration Evidence Requirement | Evidence expected for recognition, conflict, or claims when required. | Evidence fabrication or automatic acceptance. |
| Registration Validation Binding | Applicable validation profile when used. | Validator execution. |
| Registration Revocation | Withdrawal of recognition within scope. | Deletion of historical record. |
| Registration Historical Record | Preserved trace of registration, changes, conflicts, and revocation. | Current approval. |

Registration does not imply approval. Registration does not certify an Extension. Registration does not promote an Extension to canonical AI-DOS product truth.

---

## 11. Dependency and Compatibility Declarations

### Extension Dependency Matrix

| Dependency kind | Required declaration | Upstream authority |
|:---|:---|:---|
| Framework dependency | Root concepts, authority, ownership, boundaries, constraints. | M.0 required. |
| Identity dependency | Stable identity, namespace, alias, collision, historical identity. | M.2 required. |
| Relationship dependency | Extension-target, dependency, conflict, and federation relationships. | M.3 required. |
| Version dependency | Version binding, lineage, supersession, revocation history. | M.6 required. |
| Compatibility dependency | Portability, compatibility claims, exceptions, matrices. | M.7 required. |
| Artifact dependency | Artifact family, type, instance, representation, binding. | M.1 conditional. |
| Lifecycle dependency | Lifecycle profile, registration status, deprecation, revocation status. | M.4 conditional. |
| Evidence dependency | Evidence-backed claims, conflict evidence, traceability. | M.5 conditional. |
| Schema dependency | Schema binding or validation profile for an Extension. | M.9 conditional. |

A compatibility declaration must identify scope, direction, degree, version boundaries when applicable, evidence expectations when required, and exceptions. Compatibility does not imply implementation correctness. Extension compatibility does not imply certification.

---

## 12. Collision and Conflict Model

### Extension Collision Matrix

| Collision or conflict | Meaning | Required behavior |
|:---|:---|:---|
| Identity Collision | Two claims overlap on stable identity within the same identity scope. | Detect, classify, preserve M.2 authority, require resolution authority, retain evidence. |
| Namespace Collision | Two namespace claims overlap or contradict within a namespace scope. | Detect, classify, prevent silent overwrite, require namespace resolution, preserve history. |
| Semantic Collision | An Extension attempts to own or alter meaning owned elsewhere. | Preserve upstream authority and block replacement. |
| Ownership Conflict | Owner claims are inconsistent or overlapping. | Require explicit ownership authority and evidence. |
| Authority Conflict | Authority bindings contradict Human Governance or upstream authority. | Preserve superior authority and require governance resolution. |
| Relationship-Type Collision | Relationship type name, endpoint, or constraint conflicts with existing relationship semantics. | Preserve M.3 meaning and require explicit relationship resolution. |
| Lifecycle-Profile Conflict | Lifecycle states, transitions, or status bindings contradict an applicable lifecycle profile. | Preserve M.4 meaning where applicable and retain conflict evidence. |
| Schema-Profile Conflict | Schema bindings or schema profiles contradict subject semantics or each other. | Preserve semantic authority and require M.9-based classification when applicable. |
| Compatibility Conflict | Compatibility claims contradict declared scope, version, or evidence. | Preserve M.7 interpretation and classify exceptions. |
| Dependency Conflict | Declared dependencies are missing, incompatible, circular, or contradictory. | Classify dependency conflict and prevent implicit merge. |

M.8 defines conflict meaning only. Governance defines actual resolution decisions.

---

## 13. Precedence Rules

### Extension Precedence Matrix

| Precedence rule | Meaning |
|:---|:---|
| Human Governance and constitutional authority remain superior. | No Extension may override the final authority boundary. |
| Meta authorities remain superior within their semantic domains. | Extension does not replace upstream authority. |
| Standards remain superior within their normative domains. | Extension cannot silently redefine Standards. |
| Extensions may specialize only declared extension points. | No implicit extension point exists. |
| A more specific Extension does not automatically override a higher authority. | Specificity is not authority. |
| Load order, discovery order, filename order, or repository location must not create semantic precedence. | Procedure and representation do not define meaning. |
| Target-specific Extensions remain outside AI-DOS product truth unless generalized and governed. | Target-specific truth remains Target-owned. |
| Conflicting Extensions must not be merged implicitly. | Explicit resolution authority is required. |
| Extension registration does not imply approval. | Recognition is not governance approval. |
| Extension compatibility does not imply certification. | Compatibility is not certification. |

---

## 14. Extension Lifecycle Bindings

Extension lifecycle bindings consume M.4 only when an Extension defines lifecycle profiles or lifecycle effects. Lifecycle bindings may classify registration status, deprecation, revocation, archival, or availability semantics for an Extension. They do not define project phases, current project stage, ProjectStatus, DevelopmentPhases, Roadmap, Sprint, project queue, project milestone, or release schedule.

---

## 15. Version and Supersession Bindings

Extension version bindings consume M.6 for version identity, version-specific references, lineage, supersession, replacement, rollback, historical retention, and revocation history. Version numbering does not create authority. Repository path, package name, and file name do not define Extension identity or semantic precedence.

---

## 16. Evidence Bindings

Extension evidence bindings consume M.5 when claims, registrations, conflicts, revocations, supersessions, or portability declarations require proof. Evidence must preserve source, scope, version, freshness, provenance, and traceability. Evidence does not approve or certify an Extension.

---

## 17. Schema Bindings

Extension schema bindings identify schema profiles or validation profiles applicable to an Extension. Schema binding does not replace semantic authority, does not mandate schema syntax, and does not implement validator behavior. M.9 is consumed only when an Extension is schema-bound or validated.

---

## 18. Target Adapter Extension Boundary

A Target Adapter Extension binds AI-DOS semantics to Target resources through explicit boundaries. It is not adapter implementation.

### Target Adapter Boundary Concepts

| Concept | Semantic Meaning |
|:---|:---|
| Target Adapter Extension | A semantic extension boundary for mapping AI-DOS meanings to Target resources. |
| Target Namespace | A Target-owned namespace that remains outside AI-DOS product truth unless generalized and governed. |
| Target-Specific Profile | A profile valid only in a Target scope. |
| Provider Boundary | The boundary controlling what a provider offers to a consumer. |
| Consumer Boundary | The boundary controlling what a consumer may infer or rely on. |
| Generalization Candidate | A Target-specific meaning proposed for reusable AI-DOS consideration. |
| Product-Purity Gate | The governance boundary preventing Target truth from entering AI-DOS product truth by implication. |

### Target Adapter Boundary Matrix

| Rule | Boundary effect |
|:---|:---|
| Target Project extensions remain Target-owned. | No automatic AI-DOS ownership. |
| AI-DOS may consume only generalized semantics approved into AI-DOS scope. | Product-purity gate remains active. |
| Self-hosting behavior does not become universal product truth. | Self-use is not general proof. |
| A Target Adapter may bind AI-DOS semantics to Target resources without exposing AI-DOS internal paths as Target authority. | Paths are not authority. |
| Target-specific planning, ProjectStatus, Roadmap, and DevelopmentPhases remain outside M.8 ownership. | Planning contamination is prohibited. |
| Extension portability claims consume M.7 compatibility semantics. | Portability is compatibility-scoped. |
| Generalization must preserve evidence and traceability. | Evidence history is retained. |

---

## 19. Federation and Portability

Extension Federation coordinates multiple namespace owners, profiles, or compatibility expectations while preserving independent authority. Federation does not collapse ownership, eliminate namespace boundaries, or silently merge conflicting Extensions. Portability is a compatibility claim under M.7 and must identify scope, conditions, evidence, and exceptions.

---

## 20. Downstream Specialization Rules

Downstream domains may specialize Extension semantics only within declared extension points and their own authority boundaries. Consumption does not create ownership. Downstream domains must preserve upstream authority, declare namespace and scope, identify dependencies, preserve evidence, and avoid Target-specific truth leakage.

---

## 21. Semantic Invariants

1. Human Governance remains final.
2. Meta defines meaning, not actual implementation.
3. Consumption does not create ownership.
4. Registration does not imply approval.
5. Validation does not imply review.
6. Review does not imply certification.
7. Certification does not imply canonical promotion.
8. Conformance does not imply compatibility outside assessed scope.
9. Compatibility does not imply implementation correctness.
10. Schema binding does not replace semantic authority.
11. Extension does not replace upstream authority.
12. Target-specific truth remains Target-owned.
13. Representation and repository path do not define identity.
14. File ordering does not define precedence.
15. Version numbering does not create authority.
16. Downstream domains may specialize but may not redefine Meta semantics.

---

## 22. Consumer Matrix

### Downstream Consumer Matrix

| Consumer | M.8 consumption | Boundary |
|:---|:---|:---|
| Governance | May decide extension approval, resolution, and promotion. | M.8 does not approve itself. |
| Standards | May define normative extension requirements. | Standards may not redefine M.8 meaning. |
| Runtime | May implement extension mechanisms. | Runtime implementation is out of M.8 scope. |
| Engine | May consume extension profiles. | Engine behavior is out of M.8 scope. |
| Agents | May report extension evidence or conflicts. | Agent procedure is out of M.8 scope. |
| Commands and Workflows | May invoke extension-related procedures. | Commands and workflows do not define M.8 semantics. |
| Templates | May represent extension declarations. | Template format is not semantic authority. |
| Operational Core | May track operational extension records. | Operations do not create semantic precedence. |

### Semantic Ownership Matrix

| Semantic concern | Owner |
|:---|:---|
| Extension semantics | M.8 |
| Identity and namespace root semantics | M.2 |
| Relationship structure | M.3 |
| Version and supersession | M.6 |
| Compatibility and portability interpretation | M.7 |
| Schema and validation semantics | M.9 when applicable |
| Approval, promotion, and final resolution | Human Governance |

---

## 23. Validation Assertions

### Validation Assertion Matrix

| Assertion | Expected result |
|:---|:---|
| Extension has stable identity. | Required for governed Extension. |
| Extension declares namespace and namespace scope. | Required for governed Extension. |
| Extension identifies upstream authority and extension point. | Required. |
| Extension does not claim upstream-owned namespace. | Required. |
| Extension registration does not imply approval. | Required. |
| Extension does not replace upstream authority. | Required. |
| File order, load order, discovery order, and repository location do not create precedence. | Required. |
| Target-specific truth remains Target-owned. | Required. |
| Schema-bound extensions consume M.9 only when applicable. | Required. |
| Conflicts preserve evidence and historical traceability. | Required. |

---

## 24. Information Preservation

### Information Preservation Matrix

| Information | Preservation requirement |
|:---|:---|
| Extension identity | Preserve stable identity and historical aliases. |
| Namespace claims | Preserve namespace owner, scope, canonical namespace, aliases, and conflicts. |
| Registration history | Preserve declaration, scope, status binding, dependencies, evidence, revocation, and historical records. |
| Conflict evidence | Preserve classification, source, affected authority, resolution authority, and history. |
| Version bindings | Preserve exact extension version, lineage, supersession, and replacement claims. |
| Compatibility claims | Preserve scope, direction, degree, conditions, exceptions, and evidence. |
| Target adapter boundaries | Preserve Target namespace, provider boundary, consumer boundary, and product-purity gate. |

---

## 25. Completion Status

M.8 is Draft, Non-canonical, Human-Governed, and Not certified. It defines Extension semantics only and does not approve, certify, canonically promote, implement, load, execute, deploy, or register extensions at runtime.

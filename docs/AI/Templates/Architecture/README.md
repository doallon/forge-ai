# Architecture Templates

## Status

Document Type: Template Layer Index  
Template Group: Architecture  
Authority: `docs/AI/AIFramework.md`  
Parent Standard: `docs/AI/Templates/Core/TemplateStandard.md`

---

# Purpose

The Architecture template layer defines canonical structures for documents that describe, propose, decide, constrain, or govern architecture.

Architecture templates exist above implementation. They define decision surfaces, ownership, constraints, contracts, and governance context that implementation work must consume.

---

# Template Map

| Template | Purpose |
| --- | --- |
| `ArchitectureTemplate.md` | Defines a subsystem, platform, framework, or product architecture. |
| `ADRTemplate.md` | Records an accepted architecture decision and its consequences. |
| `RFCTemplate.md` | Proposes an architecture or governance change before approval. |
| `SpecificationTemplate.md` | Defines a contract-bearing technical or framework specification. |
| `GovernanceTemplate.md` | Defines stable authority, policy, ownership, and decision rules. |

---

# Architecture Layer Rules

Architecture templates must:

- preserve the authority hierarchy;
- define ownership explicitly;
- separate proposals from accepted decisions;
- separate architecture from implementation;
- define validation and review expectations;
- identify project-state impact without updating ProjectStatus directly.

Architecture templates must not:

- implement functionality;
- redefine higher authority;
- bypass review or certification;
- turn ProjectStatus into an architecture document;
- turn source code into architectural truth.

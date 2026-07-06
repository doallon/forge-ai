# STD-002 Discovery Graph Model — Refactor Change Log

> **Date:** 2026-07-06
> **Author:** Standards Governance Lead
> **Scope:** Conversion of STD-002-Discovery-Graph-Model.md from a full canonical graph document to a thin Discovery-specific graph projection/profile

---

## Summary

| Metric | Before | After |
|:---|:---:|:---:|
| Total lines | 3,233 | 494 |
| Reduction | — | **85%** |
| Sections claiming canonical graph ownership | Multiple | **0** |
| STD-001 canonical content duplicated | ~2,800 lines | **0 lines** |
| Discovery-specific mapping completeness | Embedded in duplication | Standalone, complete |

---

## What Was Removed

The following sections were **entirely removed** because they duplicate canonical graph content owned by STD-001 — Knowledge Graph Standard:

| Removed Section | Approximate Lines | Reason |
|:---|:---:|:---|
| Graph Design Philosophy (full philosophy, representation layers, architectural consequences) | ~260 | Canonical graph philosophy owned by STD-001 |
| Graph Principles (15 principles, validation rules, success criteria) | ~340 | Canonical graph invariants and principles owned by STD-001 |
| Canonical Graph Model (topology, layers, knowledge flow, node/edge responsibilities, traversal model, integrity, evolution, AI/runtime consumption, invariants) | ~400 | Canonical graph model owned by STD-001 |
| Canonical Node Model (design objectives, identity, lifecycle, classification, ownership, metadata, relationships, extensions, audit, invariants, constraints, AI rules) | ~300 | Canonical node model owned by STD-001 |
| Canonical Edge Model (design objectives, identity, type, direction, source/target, lifecycle, authority, metadata, extensions, audit, invariants, constraints, AI rules) | ~300 | Canonical edge model owned by STD-001 |
| Graph Topology (canonical topology, graph layers, layer descriptions, knowledge flow) | ~200 | Canonical topology owned by STD-001 |
| Canonical Node Types (10 node types with full property schemas) | ~400 | Global node type definitions owned by their respective standards |
| Canonical Relationship Types (full relationship catalog) | ~300 | Global relationship ontology owned by STD-001 |
| Graph Constraints (integrity, referential, lifecycle, ownership, extension constraints) | ~150 | Canonical constraints owned by STD-001 |
| Knowledge Evolution (expansion rules, preservation rules) | ~50 | Canonical evolution rules owned by STD-001 |
| AI Traversal Rules (generic AI graph consumption) | ~200 | Generic AI traversal owned by STD-001 |
| Runtime Traversal Rules (generic runtime graph consumption) | ~200 | Generic runtime traversal owned by STD-001 |
| Neo4j Mapping (node labels, relationship types, index strategy, Cypher queries) | ~200 | Implementation-specific; not a standards concern |

---

## What Was Retained and Refactored

The following Discovery-specific content was retained, restructured, and where necessary expanded into standalone sections:

| Section | Treatment |
|:---|:---|
| Status metadata | Corrected: Classification → `Discovery Graph Projection`, Authority → `STD-002`, Added `Depends On: STD-001` |
| Purpose | Rewritten as projection framing statement |
| Scope | Rewritten to explicitly list out-of-scope items (all canonical semantics) |
| Authority and dependency on STD-001 | New section: authority hierarchy, dependency statement |
| Discovery Projection Philosophy | New section: core principle, projection model diagram, design goals, non-goals |
| Discovery Node Projection | New section: STD-001→STD-002 mapping table, node properties table, node constraints |
| Discovery Edge Projection | New section: edge properties table, edge constraints |
| Discovery Relationship Profile | New section: 9 allowed relationship types with target types and meanings, constraints, prohibited relationships |
| Discovery Traversal Patterns | New section: forward, backward, and refinement traversal tables |
| Discovery Validation Profile | New section: node validation, relationship validation, validation outcomes |
| Discovery Serialization Mapping | New section: graph-to-JSON/YAML/Markdown/Registry mapping table |
| AI Consumption Rules | New section: graph-specific AI behavior rules, traversal requirements |
| Runtime Consumption Rules | New section: graph-specific runtime behavior rules, traversal requirements |
| Completion Checklist | New section: 14-item document completion + 8-item compliance verification |

---

## STD-001 Ownership Preserved

All removed content falls under the canonical graph semantics owned by STD-001 — Knowledge Graph Standard. Specifically:

- Canonical node model → STD-001 Sections 5, 8
- Canonical edge model → STD-001 Section 6
- Canonical graph topology → STD-001 Section 7
- Canonical relationship ontology → STD-001 Section 9
- Graph principles and invariants → STD-001 Section 3
- Graph design philosophy → STD-001 Section 2
- Neo4j and Cypher mappings → Implementation-specific (outside standards scope)

This document now references STD-001 by authority rather than duplicating its content.

---

## Expected Impact

### Maintenance Risk Reduction

- **Before:** Any change to canonical graph semantics required synchronized updates in both STD-001 and STD-002, creating drift risk.
- **After:** Canonical changes are made once in STD-002. STD-002 Discovery Graph Model only changes when Discovery-specific projection rules change.

### Clarity Improvement

- **Before:** Readers could not distinguish between canonical graph rules (STD-001) and Discovery-specific graph behavior (STD-002).
- **After:** The document is explicitly scoped as a projection. Every section clearly states what is Discovery-specific and what defers to STD-001.

### Audit Readiness

- **Before:** A compliance auditor would flag extensive duplication between STD-001 and STD-002 as a governance violation.
- **After:** The document clearly declares its scope, authority, and dependency on STD-001, eliminating the duplication finding.

---

## Compliance Impact

| Compliance Dimension | Impact |
|:---|:---|
| STD-001 ownership | Fully preserved — no canonical graph semantics redefined by STD-002 |
| STD-002 identity | Correctly positioned as a Discovery-specific projection |
| Authority chain | Explicitly declared: STD-001 (canonical) → STD-002 (parent) → this document (projection) |
| Downstream references | Not affected — this document has no downstream standard references |
| Discovery completeness | Discovery graph mapping is fully self-contained within this document |
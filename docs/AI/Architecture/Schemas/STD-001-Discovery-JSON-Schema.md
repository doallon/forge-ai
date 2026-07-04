# STD-001 — Discovery JSON Schema

> **Parent Standard:** [STD-001 — Discovery Standard](../Standards/STD-001-Discovery-Standard.md) (`FORGE-STD-001`)
> **Related Appendix:** [Appendix A — Discovery Classification Catalog](../Appendix/STD-001-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md)
> **Version:** 1.0.0-alpha
> **Status:** Draft

---

# 1. Status

| Property           | Value                             |
| :----------------- | :-------------------------------- |
| **Document**       | STD-001 — Discovery JSON Schema   |
| **Identifier**     | `FORGE-STD-001-SCHEMA-JSON`       |
| **Version**        | 1.0.0-alpha                       |
| **Status**         | Draft                             |
| **Type**           | Technical Schema Specification    |
| **Classification** | Discovery Machine-Readable Schema |
| **Authority**      | STD-001 — Discovery Standard      |
| **Owner**          | Framework Architecture Team       |
| **Maintainers**    | Framework Architecture Team       |
| **Directory**      | `docs/AI/Architecture/Schemas/`   |
| **Created**        | 2026-07-04                        |
| **Last Updated**   | 2026-07-04                        |

---

# 2. Purpose

This document defines the canonical JSON Schema representation for Forge AI Discovery artifacts.

The schema exists to make Discovery records machine-readable, validatable, portable, and consumable by AI Agents, Runtime systems, Validation Engines, Review Engines, Certification workflows, and future platform adapters.

This schema operationalizes the Discovery metadata model defined by:

* `STD-001 — Discovery Standard`
* `STD-001 Appendix A — Discovery Classification Catalog`

---

# 3. Scope

This schema governs the JSON representation of a single Discovery artifact.

It defines:

* required identity fields;
* classification metadata;
* ownership metadata;
* lifecycle state;
* relationship references;
* evidence references;
* AI provenance;
* validation metadata;
* extensibility rules.

This schema does not define:

* Finding records;
* Evidence records;
* Risk records;
* Recommendation records;
* Decision records;
* runtime execution behavior;
* storage implementation;
* API transport behavior.

Those concerns belong to their own standards or technical representations.

---

# 4. JSON Schema Design Principles

## 4.1 Canonical by Default

Every JSON Discovery record shall conform to this schema unless a governed extension explicitly permits additional structure.

## 4.2 Strict Required Fields

A Discovery record without identity, classification, ownership, lifecycle, and traceability metadata is invalid.

## 4.3 Technology Neutrality

The schema defines architectural data semantics. It shall not assume a programming language, database, framework, storage engine, runtime, or API gateway.

## 4.4 Extension Without Redefinition

Extensions may add fields under the approved `extensions` object.

Extensions shall not redefine canonical fields.

## 4.5 AI Consumability

The schema shall be usable by AI systems without requiring hidden context.

Every machine-readable Discovery record shall contain enough metadata for classification, reasoning, validation, and traceability.

---

# 5. Canonical JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://forge-ai.local/schemas/std-001-discovery.schema.json",
  "title": "Forge AI STD-001 Discovery Artifact",
  "description": "Canonical JSON Schema for Forge AI Discovery artifacts.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "identity",
    "classification",
    "ownership",
    "lifecycle",
    "relationships",
    "evidence",
    "traceability",
    "metadata"
  ],
  "properties": {
    "identity": {
      "$ref": "#/$defs/identity"
    },
    "classification": {
      "$ref": "#/$defs/classification"
    },
    "ownership": {
      "$ref": "#/$defs/ownership"
    },
    "lifecycle": {
      "$ref": "#/$defs/lifecycle"
    },
    "relationships": {
      "$ref": "#/$defs/relationships"
    },
    "evidence": {
      "$ref": "#/$defs/evidence"
    },
    "aiProvenance": {
      "$ref": "#/$defs/aiProvenance"
    },
    "traceability": {
      "$ref": "#/$defs/traceability"
    },
    "validation": {
      "$ref": "#/$defs/validation"
    },
    "metadata": {
      "$ref": "#/$defs/metadata"
    },
    "extensions": {
      "$ref": "#/$defs/extensions"
    }
  },
  "$defs": {
    "identity": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "id",
        "title",
        "version",
        "status",
        "createdAt",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^DISC-[A-Z0-9]+-[0-9]{3,}$"
        },
        "title": {
          "type": "string",
          "minLength": 3
        },
        "version": {
          "type": "string",
          "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+(-[A-Za-z0-9.-]+)?$"
        },
        "status": {
          "type": "string",
          "enum": [
            "draft",
            "observed",
            "verified",
            "accepted",
            "consumed",
            "historical",
            "archived"
          ]
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      }
    }
  }
}
```

---

# 6. Completion Statement

This initial schema establishes the root Discovery JSON object and canonical identity structure.

The remaining schema definitions shall extend this document with classification, ownership, lifecycle, relationships, evidence, AI provenance, validation, metadata, and extension constraints.

# 7. Schema Definitions — Classification, Ownership, and Lifecycle

The following `$defs` entries extend the canonical Discovery JSON Schema with the core governance fields required by STD-001 and Appendix A.

These definitions belong inside the root schema's `$defs` object.

---

## 7.1 Classification Definition

```json
"classification": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "primaryDomain",
    "discoveryType",
    "severity",
    "confidence"
  ],
  "properties": {
    "primaryDomain": {
      "type": "string",
      "enum": [
        "DISC-ARCH",
        "DISC-RUNTIME",
        "DISC-GOV",
        "DISC-PLAN",
        "DISC-DOC",
        "DISC-VAL",
        "DISC-RISK",
        "DISC-SEC",
        "DISC-DEP",
        "DISC-OWN",
        "DISC-PERF",
        "DISC-COMP",
        "DISC-META",
        "DISC-PLATFORM",
        "DISC-API",
        "DISC-AGENT",
        "DISC-SWARM",
        "DISC-KNOWLEDGE",
        "DISC-MEMORY",
        "DISC-CONTEXT"
      ]
    },
    "secondaryTags": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "string",
        "pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$"
      },
      "default": []
    },
    "discoveryType": {
      "type": "string",
      "enum": [
        "observation",
        "gap",
        "conflict",
        "constraint",
        "opportunity",
        "weakness",
        "defect",
        "improvement",
        "question",
        "hypothesis"
      ]
    },
    "severity": {
      "type": "string",
      "enum": [
        "SEV-0",
        "SEV-1",
        "SEV-2",
        "SEV-3",
        "SEV-4",
        "SEV-5",
        "SEV-6"
      ]
    },
    "confidence": {
      "type": "string",
      "enum": [
        "CONF-0",
        "CONF-1",
        "CONF-2",
        "CONF-3",
        "CONF-4",
        "CONF-5"
      ]
    }
  }
}
```

---

## 7.2 Ownership Definition

```json
"ownership": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "owner",
    "authority"
  ],
  "properties": {
    "owner": {
      "$ref": "#/$defs/actor"
    },
    "authority": {
      "$ref": "#/$defs/actor"
    },
    "steward": {
      "$ref": "#/$defs/actor"
    },
    "maintainers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/actor"
      },
      "default": []
    },
    "reviewers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/actor"
      },
      "default": []
    },
    "consumers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/actor"
      },
      "default": []
    }
  }
}
```

---

## 7.3 Actor Definition

```json
"actor": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "id",
    "name",
    "type"
  ],
  "properties": {
    "id": {
      "type": "string",
      "minLength": 2
    },
    "name": {
      "type": "string",
      "minLength": 2
    },
    "type": {
      "type": "string",
      "enum": [
        "human",
        "team",
        "governance-body",
        "ai-agent",
        "runtime-system",
        "platform-adapter"
      ]
    }
  }
}
```

---

## 7.4 Lifecycle Definition

```json
"lifecycle": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "state",
    "history"
  ],
  "properties": {
    "state": {
      "type": "string",
      "enum": [
        "draft",
        "observed",
        "verified",
        "accepted",
        "consumed",
        "historical",
        "archived"
      ]
    },
    "history": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/lifecycleTransition"
      },
      "default": []
    }
  }
}
```

---

## 7.5 Lifecycle Transition Definition

```json
"lifecycleTransition": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "from",
    "to",
    "transitionedAt",
    "authority",
    "reason"
  ],
  "properties": {
    "from": {
      "type": "string",
      "enum": [
        "draft",
        "observed",
        "verified",
        "accepted",
        "consumed",
        "historical",
        "archived"
      ]
    },
    "to": {
      "type": "string",
      "enum": [
        "draft",
        "observed",
        "verified",
        "accepted",
        "consumed",
        "historical",
        "archived"
      ]
    },
    "transitionedAt": {
      "type": "string",
      "format": "date-time"
    },
    "authority": {
      "$ref": "#/$defs/actor"
    },
    "reason": {
      "type": "string",
      "minLength": 3
    },
    "evidenceRefs": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": []
    }
  }
}
```

---

# 8. Normative Rules

## 8.1 Classification Rules

A valid Discovery JSON object shall declare exactly one:

* `primaryDomain`
* `discoveryType`
* `severity`
* `confidence`

Secondary tags may be empty, but when present they shall be lowercase kebab-case strings.

---

## 8.2 Ownership Rules

A valid Discovery JSON object shall declare:

* exactly one accountable `owner`;
* exactly one governing `authority`.

Maintainers, reviewers, stewards, and consumers may be omitted only when not yet known.

---

## 8.3 Lifecycle Rules

The `identity.status` and `lifecycle.state` values shall match.

Lifecycle history shall preserve every recorded state transition.

State transitions shall follow the lifecycle state machine defined by Appendix A.

---

# 9. Completion Statement

This section defines the core classification, ownership, actor, lifecycle, and lifecycle transition structures required for machine-readable Discovery artifacts.

These schema fragments complete the first governance-critical layer of the STD-001 JSON Schema.

# 10. Schema Definitions — Relationships, Evidence, Traceability, AI Provenance, Validation, Metadata, and Extensions

The following schema definitions complete the canonical Discovery JSON Schema.

These definitions shall be added to the root `$defs` section.

---

## 10.1 Relationships Definition

```json
"relationships": {
  "type": "array",
  "items": {
    "$ref": "#/$defs/relationship"
  },
  "default": []
}
```

---

## 10.2 Relationship Definition

```json
"relationship": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "id",
    "type",
    "target"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "DISCOVERED_BY",
        "SUPPORTED_BY",
        "PRODUCES",
        "IDENTIFIES",
        "RECOMMENDS",
        "RESULTS_IN",
        "VALIDATED_BY",
        "CERTIFIED_BY"
      ]
    },
    "target": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "authority": {
      "$ref": "#/$defs/actor"
    }
  }
}
```

---

## 10.3 Evidence Definition

```json
"evidence": {
  "type": "array",
  "items": {
    "$ref": "#/$defs/evidenceItem"
  },
  "default": []
}
```

---

## 10.4 Evidence Item

```json
"evidenceItem": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "id",
    "type",
    "source"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "uri": {
      "type": "string",
      "format": "uri"
    },
    "hash": {
      "type": "string"
    },
    "capturedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

---

## 10.5 AI Provenance

```json
"aiProvenance": {
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "generatedBy": {
      "type": "string"
    },
    "model": {
      "type": "string"
    },
    "modelVersion": {
      "type": "string"
    },
    "reasoningSummary": {
      "type": "string"
    },
    "confidenceExplanation": {
      "type": "string"
    },
    "generatedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

---

## 10.6 Traceability

```json
"traceability": {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "origin"
  ],
  "properties": {
    "origin": {
      "type": "string"
    },
    "parentDiscovery": {
      "type": "string"
    },
    "derivedArtifacts": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": []
    }
  }
}
```

---

## 10.7 Validation

```json
"validation": {
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "passed",
        "failed"
      ]
    },
    "validator": {
      "$ref": "#/$defs/actor"
    },
    "validatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "failedChecks": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": []
    }
  }
}
```

---

## 10.8 Metadata

```json
"metadata": {
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "labels": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": []
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": []
    },
    "component": {
      "type": "string"
    },
    "repository": {
      "type": "string"
    },
    "project": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    }
  }
}
```

---

## 10.9 Extensions

```json
"extensions": {
  "type": "object",
  "additionalProperties": true,
  "description": "Reserved extension point for governance-approved schema extensions."
}
```

---

# 11. Cross-Field Constraints

The following constraints apply to the complete Discovery JSON document.

## Identity

* `identity.id` shall be globally unique.
* `identity.status` shall equal `lifecycle.state`.

---

## Classification

* Exactly one Primary Domain.
* Exactly one Discovery Type.
* Exactly one Severity.
* Exactly one Confidence.

---

## Ownership

* Exactly one Owner.
* Exactly one Authority.

---

## Relationships

* No circular references.
* Relationship identifiers shall be unique.
* Target identifiers shall exist.

---

## Evidence

* Evidence shall support Confidence.
* Missing evidence shall reduce Confidence rather than invalidate Severity.

---

## AI Provenance

If AI generated or modified any part of the Discovery:

* `aiProvenance.generatedBy` becomes mandatory.
* `reasoningSummary` becomes mandatory.

---

## Traceability

Every Discovery shall be traceable back to its original observation.

Traceability shall never be removed.

---

# 12. Schema Evolution Rules

Future versions may:

* add optional properties;
* introduce governed extension objects;
* add new relationship types;
* extend metadata.

Future versions shall not:

* rename canonical fields;
* change required field semantics;
* redefine identifiers;
* alter lifecycle meanings.

Breaking changes require a new major schema version.

---

# 13. Success Criteria

The Discovery JSON Schema is complete when:

* every Discovery artifact can be serialized deterministically;
* JSON validation is sufficient to verify structural correctness;
* Runtime, Validation Engine, AI Agents, and external tools consume the same canonical schema;
* governance extensions remain backward compatible.

---

## Completion Statement

This document defines the complete canonical JSON representation of a Forge AI Discovery artifact.

It serves as the normative serialization contract between documentation, runtime components, AI systems, validation engines, governance workflows, and future platform integrations.


# Deterministic Preview Foundation Validation

## Governed Evidence Identity and Classification

| Field | Value |
|:---|:---|
| Identity | `NS-EV-005` |
| Evidence Root Type | Evidence Item |
| Evidence Type | Direct |
| Artifact Family | Evidence Artifact |
| Artifact Type | Evidence Record |
| Version | `1.0.0-example` |
| Authority | Northstar Human Governance |
| Authority Locator | `Governance/TargetContract.md` |
| Owner | Northstar Human Governance |
| Lifecycle State | Approved |
| Lifecycle Profile | `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md` §7.5, consumed under `Governance/TargetContract.md` |
| Created | 2026-07-05T00:00:00Z |
| Last Assessed | 2026-07-05T00:00:00Z |

## Source

| Field | Value |
|:---|:---|
| Source Identity | `NS-WU-001` |
| Source Type | Direct Observation |
| Source Authority | Operational |
| Source Locator | `WorkUnits/WU-001-Foundation-Validation.md` |

## Subject

| Field | Value |
|:---|:---|
| Subject Identity | `NS-WU-001` |
| Subject Locator | `WorkUnits/WU-001-Foundation-Validation.md` |
| Subject Revision | `WU-001-revision-1` |

## Claim Bindings

| Relationship Identity | Claim Identity | Claim Type | Exact Claim | Binding Relationship | Direction | Cardinality | Optionality | Assertion Class | Permitting Authority | Authority Locator | Confidence | Confidence Rationale |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| `NS-REL-005` | `NS-E1` | Validation | Within the explicitly fictional Northstar scenario, the compact observations recorded in this item satisfy the `NS-E1` acceptance criteria for `NS-WU-001`. | supports | Unidirectional | N:M | Required | Normative | Northstar Human Governance | `Governance/TargetContract.md` | Moderate (0.62) | Bounded to the complete internal fictional record; reduced for any absent independent or executable corroboration, and no counterevidence was found within the stated package boundary. |

## Evidence Content

The fictional observations are fully contained here: two clean fixture manifests were described as identical; before/after input hashes were described as identical; the manifest was described as covering all fixture differences; and execution was described as network-disabled. These are illustrative assertions, not real runs, raw logs, hashes, commands, fixtures, or external attachments.

## Evidence Assertion

By direct reading of the compact fictional observations in this record, the item illustrates how the four `NS-E1` checks could support a fictional acceptance decision; because no executable fixtures or raw outputs exist, it does not validate a real product or independently reproduce the observations.

## Quality Assessment

| Dimension | Rating | Justification |
|:---|:---|:---|
| Accuracy | Moderate | The record accurately labels its content as fictional and is internally checkable, but it is not evidence of external events. |
| Completeness | Moderate | All material inputs and effects for the bounded fictional claim are in this record or at named internal locators; no unavailable attachment is implied. |
| Consistency | High | Identities, revisions, claim scope, and referenced example artifacts agree within the package. |
| Relevance | High | The content directly addresses the exact bound claim and subject. |
| Source Authority | Moderate | The source authority is explicitly classified and resolves through the Target Contract; fictional authority has no force outside the example. |
| Provenance Transparency | High | Source, actor, method, timestamp, rule, inputs, output, and limitations are explicit. |

## Validity, Freshness, Reproducibility, and Retention

| Field | Value |
|:---|:---|
| Intended Use | Support only `NS-E1` inside the fictional Northstar reference package. |
| Validity | Conditionally Valid |
| Validity Criteria and Rationale | Suitable only when read as an internally consistent fictional example at the stated revisions; it is not valid evidence of a real product, external execution, or real governance event. |
| Freshness Window | Current while the referenced `1.x-example` subject and input revisions remain unchanged. |
| Freshness | Current |
| Freshness Rationale | Created and assessed at the package's recorded example time; any referenced revision drift requires reassessment. |
| Reproducibility | Not Reproducible |
| Reproduction Conditions | No real execution evidence exists. Alternative verification is limited to checking the internal consistency of this explicitly fictional record against the fictional work-unit acceptance criteria. |
| Retention Class | Standard |
| Retention Basis | Retain with the reference package for one to three years or while any active package consumes it; downgrade requires governance approval. |

## Provenance Chain

| Step | Input Identity and Locator | Transformation or Observation | Actor or Process | Timestamp | Governing Method or Rule | Output Identity |
|:---|:---|:---|:---|:---|:---|:---|
| 1 | `NS-WU-001`; `WorkUnits/WU-001-Foundation-Validation.md` | Produced the bounded fictional content and assertion stated in this record. | Northstar Human Governance | 2026-07-05T00:00:00Z | M.5 evidence-item contract and `Governance/TargetContract.md` | `NS-EV-005` |

The provenance chain is immutable. A correction must append a new step or create a superseding record; it must not overwrite this chain.

## Limitations, Counterevidence, and Sufficiency

| Field | Value |
|:---|:---|
| Limitations | Entirely fictional example evidence; no external event, attachment, command output, raw log, or real approval is asserted. Applicability is confined to the exact claim, subject, and revisions above. |
| Counterevidence / Contradictions | None found within the complete reference Target; no search beyond this fictional package was performed. |
| Claim Sufficiency | Partially Sufficient |
| Sufficiency Rationale | The package provides direct bounded coverage, internally convergent locators, rated quality, current example freshness, bounded confidence, and an unbroken provenance statement; it is sufficient only for demonstrating the fictional claim shape, never for a real-world claim. |
| Uncertainty / Non-Pass Treatment | If a locator or revision drifts, provenance breaks, counterevidence appears, or the fictional boundary is removed, this item becomes insufficient and must not support the claim until reassessed. Contradiction must use `contradicts`; partial support must use `partially supports`; neutrality must use `is neutral toward`. |

## Trace and Verification State

| Field | Value |
|:---|:---|
| Affected Artifacts | `NS-WU-001` (`WorkUnits/WU-001-Foundation-Validation.md`); `NS-E1` in `Planning/Roadmap.md` |
| Affected Consumers | Fictional Northstar governance example only |
| Verification State | Partially Verified — fictional internal consistency only |
| Governing Evidence Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` |
| Incorporated Relationship Authority | `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md` |
| Conditional Lifecycle Authority | `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md` applies to the lifecycle claim or transition effect; otherwise M.1 artifact lifecycle remains the artifact-state authority. |

## Decision Effect

The separately empowered fictional Human Governance records bounded example acceptance of `NS-E1`. No real validation, product acceptance, certification, or STD-011 conformance is claimed.

Evidence supports authority but does not replace it.

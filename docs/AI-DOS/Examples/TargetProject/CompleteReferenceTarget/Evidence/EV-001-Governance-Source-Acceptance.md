# Governance Source Acceptance

## Governed Evidence Identity and Classification

| Field | Value |
|:---|:---|
| Identity | `NS-EV-001` |
| Evidence Root Type | Evidence Item |
| Evidence Type | Testimonial |
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
| Source Identity | `NORTHSTAR-NOTES.HUMAN-GOVERNANCE` |
| Source Type | Human Judgment |
| Source Authority | Governed |
| Source Locator | `Governance/TargetContract.md` |

## Subject

| Field | Value |
|:---|:---|
| Subject Identity | `NORTHSTAR-NOTES.MISSION` |
| Subject Locator | `Mission/Mission.md` |
| Subject Revision | `1.0.0-example` |

## Claim Bindings

| Relationship Identity | Claim Identity | Claim Type | Exact Claim | Binding Relationship | Direction | Cardinality | Optionality | Assertion Class | Permitting Authority | Authority Locator | Confidence | Confidence Rationale |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| `NS-REL-001` | `NS-CLAIM-001` | Decision | Within the fictional Northstar example, Human Governance accepted Mission `1.0.0-example` and authorized the two capability definitions as its initial Mission-derived source set. | supports | Unidirectional | N:M | Required | Normative | Northstar Human Governance | `Governance/TargetContract.md` | High (0.82) | Bounded to the complete internal fictional record; reduced for any absent independent or executable corroboration, and no counterevidence was found within the stated package boundary. |

## Evidence Content

This record itself is the complete fictional decision record `NS-DEC-001`. It records review of `Mission/Mission.md` and `Planning/DevelopmentPhases.md`, acceptance of the Mission, and authorization of `NS-CAP-001` and `NS-CAP-002`. No external minutes or attachment are asserted.

## Evidence Assertion

By human interpretation of the two located example artifacts, this record shows only that the fictional authority recorded the bounded source decision stated above; it does not show Roadmap acceptance, current operational state, or STD-011 conformance.

## Quality Assessment

| Dimension | Rating | Justification |
|:---|:---|:---|
| Accuracy | Moderate | The record accurately labels its content as fictional and is internally checkable, but it is not evidence of external events. |
| Completeness | High | All material inputs and effects for the bounded fictional claim are in this record or at named internal locators; no unavailable attachment is implied. |
| Consistency | High | Identities, revisions, claim scope, and referenced example artifacts agree within the package. |
| Relevance | High | The content directly addresses the exact bound claim and subject. |
| Source Authority | High | The source authority is explicitly classified and resolves through the Target Contract; fictional authority has no force outside the example. |
| Provenance Transparency | High | Source, actor, method, timestamp, rule, inputs, output, and limitations are explicit. |

## Validity, Freshness, Reproducibility, and Retention

| Field | Value |
|:---|:---|
| Intended Use | Support only `NS-CLAIM-001` inside the fictional Northstar reference package. |
| Validity | Valid |
| Validity Criteria and Rationale | Suitable only when read as an internally consistent fictional example at the stated revisions; it is not valid evidence of a real product, external execution, or real governance event. |
| Freshness Window | Current while the referenced `1.x-example` subject and input revisions remain unchanged. |
| Freshness | Current |
| Freshness Rationale | Created and assessed at the package's recorded example time; any referenced revision drift requires reassessment. |
| Reproducibility | Not Reproducible |
| Reproduction Conditions | A governance decision is a unique event; alternative verification is the internally resolvable decision text and authority declaration in this record and `Governance/TargetContract.md`. |
| Retention Class | Standard |
| Retention Basis | Retain with the reference package for one to three years or while any active package consumes it; downgrade requires governance approval. |

## Provenance Chain

| Step | Input Identity and Locator | Transformation or Observation | Actor or Process | Timestamp | Governing Method or Rule | Output Identity |
|:---|:---|:---|:---|:---|:---|:---|
| 1 | `NORTHSTAR-NOTES.HUMAN-GOVERNANCE`; `Governance/TargetContract.md` | Produced the bounded fictional content and assertion stated in this record. | Northstar Human Governance | 2026-07-05T00:00:00Z | M.5 evidence-item contract and `Governance/TargetContract.md` | `NS-EV-001` |

The provenance chain is immutable. A correction must append a new step or create a superseding record; it must not overwrite this chain.

## Limitations, Counterevidence, and Sufficiency

| Field | Value |
|:---|:---|
| Limitations | Entirely fictional example evidence; no external event, attachment, command output, raw log, or real approval is asserted. Applicability is confined to the exact claim, subject, and revisions above. |
| Counterevidence / Contradictions | None found within the complete reference Target; no search beyond this fictional package was performed. |
| Claim Sufficiency | Sufficient |
| Sufficiency Rationale | The package provides direct bounded coverage, internally convergent locators, rated quality, current example freshness, bounded confidence, and an unbroken provenance statement; it is sufficient only for demonstrating the fictional claim shape, never for a real-world claim. |
| Uncertainty / Non-Pass Treatment | If a locator or revision drifts, provenance breaks, counterevidence appears, or the fictional boundary is removed, this item becomes insufficient and must not support the claim until reassessed. Contradiction must use `contradicts`; partial support must use `partially supports`; neutrality must use `is neutral toward`. |

## Trace and Verification State

| Field | Value |
|:---|:---|
| Affected Artifacts | `NORTHSTAR-NOTES.MISSION` (`Mission/Mission.md`); `NORTHSTAR-NOTES.DEVELOPMENT-PHASES` (`Planning/DevelopmentPhases.md`) |
| Affected Consumers | Roadmap derivation and Northstar governance readers |
| Verification State | Verified — internal example locators and stated revision relationships checked |
| Governing Evidence Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` |
| Incorporated Relationship Authority | `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md` |
| Conditional Lifecycle Authority | `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md` applies to the lifecycle claim or transition effect; otherwise M.1 artifact lifecycle remains the artifact-state authority. |

## Decision Effect

The separately empowered fictional authority records the bounded acceptance decision in this record. The evidence item supports that decision record but does not create authority or any further effect.

Evidence supports authority but does not replace it.

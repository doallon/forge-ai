# State Transition Record

## Governed Evidence Identity and Classification

| Field | Value |
|:---|:---|
| Identity | `NS-EV-006` |
| Evidence Root Type | Evidence Item |
| Evidence Type | Historical |
| Artifact Family | Evidence Artifact |
| Artifact Type | Evidence Record |
| Version | `1.0.1-example` |
| Authority | Northstar Human Governance |
| Authority Locator | `Governance/TargetContract.md` |
| Owner | Northstar Human Governance |
| Lifecycle State | Approved |
| Lifecycle Profile | `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md` §7.5, consumed under `Governance/TargetContract.md` |
| Created | 2026-07-05T00:00:00Z |
| Last Assessed | 2026-07-06T00:00:00Z |

## Source

| Field | Value |
|:---|:---|
| Source Identity | `NORTHSTAR-NOTES.PROJECT-STATUS` |
| Source Type | System Record |
| Source Authority | Operational |
| Source Locator | `Planning/ProjectStatus.md` |

## Subject

| Field | Value |
|:---|:---|
| Subject Identity | `NORTHSTAR-NOTES.PROJECT-STATUS` |
| Subject Locator | `Planning/ProjectStatus.md` |
| Subject Revision | `1.1.0-example` |

## Claim Bindings

| Relationship Identity | Claim Identity | Claim Type | Exact Claim | Binding Relationship | Direction | Cardinality | Optionality | Assertion Class | Permitting Authority | Authority Locator | Confidence | Confidence Rationale |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| `NS-REL-006` | `NS-CLAIM-006` | Lifecycle | Within the fictional Northstar example, ProjectStatus changed atomically from `1.0.0-example` to `1.1.0-example` for exact subject `NS-E1` under decision `NS-HG-003`. | supports | Unidirectional | N:M | Required | Normative | Northstar Human Governance | `Governance/TargetContract.md` | High (0.80) | The recorded previous state, current ProjectStatus, `NS-EV-005`, `NS-E1`, and decision `NS-HG-003` are completely traced through the historical comparison within the fictional package. Confidence remains below Very High because no tamper-evident external transition log exists and the counterevidence search did not extend beyond that package. |

## Evidence Content

The recorded atomic changes are: `NS-E1` Pending to Accepted; active capability `NS-CAP-001` to `NS-CAP-002`; executable work unit `NS-WU-001` to None; and authorized next action from None to awaiting Human Governance continuation for one `NS-E2` unit. Preconditions and the resulting state are contained in this record and `Planning/ProjectStatus.md`.

## Evidence Assertion

By historical comparison of the stated previous values, the current located ProjectStatus, and `NS-EV-005`, this item shows only the fictional atomic transition; it does not generate, select, activate, or execute an `NS-E2` unit.

## Quality Assessment

| Dimension | Rating | Justification |
|:---|:---|:---|
| Accuracy | Moderate | The record accurately labels its content as fictional and is internally checkable, but it is not evidence of external events. |
| Completeness | High | All material inputs and effects for the bounded fictional claim are in this record or at named internal locators; no unavailable attachment is implied. |
| Consistency | High | Identities, revisions, claim scope, and referenced example artifacts agree within the package. |
| Relevance | High | The content directly addresses the exact bound claim and subject. |
| Source Authority | Moderate | The source authority is explicitly classified and resolves through the Target Contract; fictional authority has no force outside the example. |
| Provenance Transparency | High | The original incomplete provenance statement is preserved, and the appended correction traces the previous and current ProjectStatus states, `NS-EV-005`, `NS-E1`, `NS-HG-003`, historical-comparison method, correction actor, timestamps, governing rules, prior revision, corrected revision, and limitations. |

## Validity, Freshness, Reproducibility, and Retention

| Field | Value |
|:---|:---|
| Intended Use | Support only `NS-CLAIM-006` inside the fictional Northstar reference package. |
| Validity | Valid |
| Validity Criteria and Rationale | Valid only for the internal fictional transition claim because the recorded previous state, current ProjectStatus `1.1.0-example`, `NS-EV-005`, `NS-E1`, decision `NS-HG-003`, and historical comparison all resolve in the package, and the provenance correction from record version `1.0.0-example` to `1.0.1-example` is appended without overwriting the original step. It is not valid evidence of a real product, external execution, or real governance event. |
| Freshness Window | Current while the referenced `1.x-example` subject and input revisions remain unchanged. |
| Freshness | Current |
| Freshness Rationale | Created and assessed at the package's recorded example time; any referenced revision drift requires reassessment. |
| Reproducibility | Not Reproducible |
| Reproduction Conditions | A historical transition is not rerun. Alternative verification compares this immutable record with `Planning/ProjectStatus.md`, `Planning/Roadmap.md`, and `Evidence/EV-005-Foundation-Validation.md`. |
| Retention Class | Standard |
| Retention Basis | Retain with the reference package for one to three years or while any active package consumes it; downgrade requires governance approval. |

## Provenance Chain

| Step | Input Identity and Locator | Transformation or Observation | Actor or Process | Timestamp | Governing Method or Rule | Output Identity |
|:---|:---|:---|:---|:---|:---|:---|
| 1 | `NORTHSTAR-NOTES.PROJECT-STATUS`; `Planning/ProjectStatus.md` | Produced the bounded fictional content and assertion stated in this record. | Northstar Human Governance | 2026-07-05T00:00:00Z | M.5 evidence-item contract and `Governance/TargetContract.md` | `NS-EV-006` |
| 2 — Provenance Correction | Prior record `NS-EV-006` (`Evidence/EV-006-State-Transition.md`, `1.0.0-example`, Step 1); `NORTHSTAR-NOTES.PROJECT-STATUS` (previous `1.0.0-example` values recorded in this record; current `Planning/ProjectStatus.md`, `1.1.0-example`); `NS-EV-005` (`Evidence/EV-005-Foundation-Validation.md`, `WU-001-revision-1`); `NS-E1` (`Planning/Roadmap.md`); `NS-HG-003` (`Planning/ProjectStatus.md`, transition-authority record) | Preserved Step 1 and corrected its incomplete provenance statement by appending the omitted foundation-validation evidence, exact evidence subject, transition decision, and previous-state revision and the exact derivation: compare all listed inputs, verify the four stated changes as one bounded historical transition, and record the result without generating or activating later work. Reassessed provenance transparency, validity, confidence, verification state, and claim sufficiency against the corrected chain. | Northstar Human Governance (fictional provenance-correction review) | 2026-07-06T00:00:00Z | M.5 §7.6; Semantic Rule 35; Invariant 11; `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md` transition-evidence semantics; `Governance/TargetContract.md` transition authority | `NS-EV-006` (`1.0.1-example`) |

The provenance chain is immutable. A correction must append a new step or create a superseding record; it must not overwrite this chain.

## Limitations, Counterevidence, and Sufficiency

| Field | Value |
|:---|:---|
| Limitations | Entirely fictional example evidence; no external event, attachment, command output, raw log, or real approval is asserted. Applicability is confined to the exact claim, subject, and revisions above. |
| Counterevidence / Contradictions | None found within the complete reference Target; no search beyond this fictional package was performed. |
| Claim Sufficiency | Sufficient |
| Sufficiency Rationale | For `NS-CLAIM-006`, the recorded previous state, current ProjectStatus, `NS-EV-005`, `NS-E1`, and `NS-HG-003` provide the coverage and depth required by the bounded fictional transition claim and converge on the four recorded changes. No counterevidence was found inside the declared search boundary; the assessed quality is adequate for internal example use; freshness is Current; confidence is bounded at High (0.80); and the preserved original step plus appended correction provide complete input-and-comparison provenance without overwriting history. These thresholds are sufficient only for the fictional transition claim, never for a real-world claim. |
| Uncertainty / Non-Pass Treatment | If a locator or revision drifts, provenance breaks, counterevidence appears, or the fictional boundary is removed, this item becomes insufficient and must not support the claim until reassessed. Contradiction must use `contradicts`; partial support must use `partially supports`; neutrality must use `is neutral toward`. |

## Trace and Verification State

| Field | Value |
|:---|:---|
| Affected Artifacts | `NORTHSTAR-NOTES.PROJECT-STATUS` (`Planning/ProjectStatus.md`); `NS-E1` (`Planning/Roadmap.md`) |
| Affected Consumers | Northstar operational entry readers |
| Verification State | Verified — internal example locators, stated revision relationships, preserved Step 1, and appended `1.0.1-example` provenance correction checked |
| Governing Evidence Authority | `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md` |
| Incorporated Relationship Authority | `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md` |
| Conditional Lifecycle Authority | `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md` applies to the lifecycle claim or transition effect; otherwise M.1 artifact lifecycle remains the artifact-state authority. |

## Decision Effect

The fictional transition effect is attributed to separately empowered decision `NS-HG-003`; this historical evidence item does not independently authorize another transition.

Evidence supports authority but does not replace it.

# STD-011 Target Project Conformance Readiness Checklist

## Checklist Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-TARGET-PROJECT-CONFORMANCE-READINESS` |
| Classification | Target Project Checklist |
| Family Contract | `docs/AI-DOS/Templates/TargetProject/TargetProjectFamily.md` |
| Conformance Profile | `docs/AI-DOS/Architecture/Standards/STD-011-Target-Project-Conformance-Profile.md` |
| Status | Draft; non-canonical |

This checklist is a pre-assessment aid. Checking every item does not create an M.9 result or aggregate conformance claim.

## Identity and Roles

- [ ] `STD011-TPC-001`: STD-011 identity, version, lifecycle, authority, and dependencies are bound.
- [ ] `STD011-TPC-002`: each mandatory logical role resolves to one stable identity independent of path.
- [ ] `STD011-TPC-003`: Mission, DevelopmentPhases, Roadmap, ProjectStatus, Target Declaration Profile, and sufficient Evidence Records exist.
- [ ] `STD011-TPC-004`: authorship, maintenance, ownership, and operational classifications are explicit.

## Authority and Derivation

- [ ] `STD011-TPC-005`: lower artifacts do not redefine higher authority.
- [ ] `STD011-TPC-006`: Mission is Human-authored or Human-Governance-approved and includes every required boundary.
- [ ] `STD011-TPC-007`: DevelopmentPhases derives only from Mission and explicit Human decisions.
- [ ] `STD011-TPC-008`: every capability contains all twelve generation-grade fields.
- [ ] `STD011-TPC-009`: Roadmap derivation follows all nine deterministic rules and emits evidence.
- [ ] `STD011-TPC-010`: Roadmap derivation and acceptance are separate; regeneration preserves accepted identity and evidence.

## Operational State

- [ ] `STD011-TPC-011`: ProjectStatus includes all ten initialization outputs.
- [ ] `STD011-TPC-012`: ProjectStatus does not invent Mission, capabilities, Roadmap facts, priorities, or evidence meanings.
- [ ] `STD011-TPC-013`: transitions are evidence-backed, atomic, authorized, and subject-revision-bound.
- [ ] `STD011-TPC-014`: initialization output roles are complete and do not imply mutation or approval.
- [ ] `STD011-TPC-015`: alternate paths preserve logical identity and are declared where used.

## Declaration, Validation, and Boundaries

- [ ] `STD011-TPC-016`: one exact Target Declaration Profile resolves through TargetRepositoryResolution with no blocker.
- [ ] `STD011-TPC-017`: a separately authorized assessment can cover all required STD-011 validation areas using M.9 semantics.
- [ ] `STD011-TPC-018`: every triggered safe-stop records blocker, owner, role, evidence, next decision, and no-mutation confirmation.
- [ ] `STD011-TPC-019`: every Target extension declares identity, namespace, scope, and compatibility without redefining AI-DOS truth.
- [ ] `STD011-TPC-020`: existing-Target migration is separately authorized and evidence-preserving, or is not applicable to a new Target.
- [ ] `STD011-TPC-021`: no Forge AI or other Target-specific operational truth appears as reusable AI-DOS product truth.
- [ ] `STD011-TPC-022`: no approval, promotion, canonicalization, certification, or operationalization is claimed without its own evidence and authority.

## Pre-Assessment Gate

| Gate | Required record |
|:---|:---|
| Exact Target revision | Repository or package revision identity |
| Exact STD-011 binding | Standard identity and version |
| Exact conformance-profile binding | Profile identity and version |
| Declaration-set locator | One repository-relative Markdown locator |
| Requested action class | One declared action-class token |
| Candidate paths | Zero or more normalized repository paths |
| Assessment authorization | Human Governance or delegated authority record |

If any gate is missing, ambiguous, conflicting, inaccessible, or stale, safe-stop before assigning M.9 results.


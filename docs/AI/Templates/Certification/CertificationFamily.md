# AI-DOS Certification Template Family

This document is the semantic entry and authority-boundary contract for `docs/AI/Templates/Certification/`.

## Purpose

The Certification family provides reusable structures for recording a formal, bounded claim made by an explicitly declared certification authority against declared criteria and evidence.

No certification component is introduced by this entry change. A future `CertificationTemplate.md` requires separate bounded normalization.

## Required Inputs

- certification subject and bounded scope;
- certification authority and certifier identity;
- claim vocabulary and applicable criteria;
- evidence set and provenance;
- validity period or expiry rule when applicable;
- exclusions, limitations, unresolved risks, and intended consumer.

## Authority Boundary

Certification is not validation, review, approval, promotion, canonicalization, release, execution authorization, or Target-state mutation.

A certification artifact may make only the formal claim authorized by its declared certification authority. It cannot create that authority, widen its scope, approve a release, promote an artifact, or mutate product or Target truth.

Validation findings and review artifacts may be consumed as evidence but do not automatically establish a certification claim.

## Claim Semantics

A certification result must declare its exact vocabulary, for example certified, certified with limitations, not certified, suspended, expired, revoked, blocked, or insufficient evidence. These labels apply only to the bounded certification claim.

## Target Independence

No Forge AI path, ProjectStatus, DevelopmentPhases, Roadmap, fixed certifier, fixed approval authority, repository-specific lifecycle, or self-hosting convention is required by default.

## Safe Stop

Stop when subject, scope, certification authority, certifier identity, criteria, evidence, provenance, validity rule, claim vocabulary, exclusions, or intended consumer is missing or ambiguous.

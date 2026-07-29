# AI-Assisted Development

AI-DOS is developed with assistance from multiple AI systems operating under Human Governance. This page explains how that assistance is interpreted and attributed without turning a model, provider, tool, or repository host into product authority.

This page is publication-oriented and non-normative. It does not replace repository entry contracts, Target Project authority, AI-DOS normative contracts, security policy, contribution policy, or an explicit Human Governance instruction.

---

## 1. Purpose

AI-assisted development can support implementation, documentation, research, analysis, review, verification, and quality assurance. Its value comes from bounded participation within an authority model, not from treating an AI system as an autonomous owner or decision-maker.

The purpose of this page is to make that participation transparent while preserving:

- Human Governance as final authority;
- AI-DOS provider neutrality;
- the distinction between assistance and authorship;
- the distinction between repository activity and acceptance;
- reviewable evidence and exact scope;
- security, privacy, and protected-area boundaries.

---

## 2. Human Governance Authority

Human Governance remains the final authority for repository and lifecycle decisions.

AI assistance does not by itself:

- authorize work;
- choose or expand scope;
- approve or accept a change;
- merge a pull request;
- mutate Target Project state;
- activate a capability;
- certify a provider or artifact;
- create a release commitment;
- override a protected area or canonical contract.

An AI-generated proposal, patch, review, or validation result is an input to governed work. It is not the governing decision.

---

## 3. Provider Neutrality

AI-DOS is independent of any single model, provider, coding agent, API, CLI, repository host, or automation service.

A current provider may help realize a bounded task, but provider-specific behavior must not be presented as universal AI-DOS behavior unless a canonical AI-DOS contract establishes it.

Named systems may appear in execution records, pull-request discussions, review evidence, or historical attribution. Their presence does not make them permanent architectural dependencies or product authorities.

New providers may participate without changing the product model when they can operate within the same authority, scope, validation, evidence, security, and safe-stop boundaries.

---

## 4. Forms of AI Participation

AI systems may assist with one or more bounded roles.

### Implementation

- preparing a patch within an authorized file scope;
- identifying defects or inconsistencies;
- proposing tests or bounded implementation alternatives;
- applying an explicitly approved correction.

### Documentation

- drafting explanatory material;
- improving navigation and clarity;
- checking terminology and cross-references;
- aligning public documentation with its canonical owners.

### Research and analysis

- comparing declared contracts or approaches;
- collecting evidence;
- identifying unresolved questions;
- separating source-supported conclusions from inference.

### Review

- performing an independent read-only assessment;
- checking exact revision identity and scope;
- classifying findings;
- verifying that previous findings were resolved.

### Verification and quality assurance

- running or interpreting declared checks;
- confirming minimal diffs;
- detecting regressions;
- documenting what validation did and did not exercise.

Participation in one role does not automatically authorize another. For example, generating a patch does not approve it, and reviewing a change does not merge or accept it.

---

## 5. Assistance, Authorship, and Accountability

AI systems are treated as tools and execution participants, not as legal persons, repository owners, governance authorities, or substitutes for accountable human maintainers.

Repository authorship and accountability should remain attached to the human or governed process responsible for authorizing, validating, and integrating the work.

Where useful, AI involvement may be disclosed in:

- pull-request descriptions;
- commit or review notes;
- validation and evidence records;
- audit reports;
- acknowledgements of substantial assistance.

Disclosure should describe the role performed rather than imply independent ownership. Examples include:

- AI-assisted implementation;
- AI-assisted documentation;
- independent AI review;
- AI-assisted verification.

A provider logo, fabricated contributor identity, placeholder account, or synthetic avatar should not be used as a substitute for accurate attribution.

---

## 6. Evidence and Reproducibility

A material AI-assisted contribution should remain reviewable without relying on trust in the provider that produced it.

Evidence should identify, as applicable:

- the exact objective and scope;
- the artifact or revision examined;
- the authority sources used;
- the files changed;
- the validation methods and results;
- the limitations of the validation;
- unresolved blockers or uncertainty;
- confirmation that protected areas remained unchanged.

Prompts and full provider transcripts are not universally required evidence. They may contain noise, private information, credentials, protected Target context, or provider-specific details. Preserve only the evidence needed to reproduce or review the claimed result, subject to applicable security and privacy requirements.

---

## 7. Security and Privacy

AI assistance must remain within the same security and privacy boundaries as any other contribution process.

Do not provide an AI system with credentials, tokens, private repository content, personal data, confidential Target context, or sensitive infrastructure information unless the exact authorized environment and security policy permit it.

Before publishing prompts, logs, screenshots, transcripts, or evidence, remove or protect sensitive material.

Provider capability does not equal permission. An AI system's ability to access, infer, generate, or modify something does not authorize that action.

---

## 8. Attribution Principles

AI attribution should be:

- **accurate** — state the role actually performed;
- **bounded** — associate the disclosure with the relevant work;
- **provider-neutral** — avoid making named systems part of product architecture;
- **non-authoritative** — do not imply approval, ownership, or acceptance;
- **maintainable** — avoid permanent contributor lists that require updates whenever tools change;
- **verifiable** — prefer revision, review, and evidence references over promotional claims.

A single repository-level explanation of AI-assisted development is generally more durable than listing models as conventional human contributors in an automated contributor table.

---

## 9. Limitations

AI-generated output may be incomplete, incorrect, overconfident, provider-specific, or broader than the authorized scope.

Independent review and validation remain necessary where the risk and governing contracts require them. Multiple AI systems reaching the same conclusion is not, by itself, proof of correctness or Human Governance acceptance.

AI assistance also does not eliminate the need to distinguish:

- current implementation from long-term direction;
- explanatory documentation from normative contracts;
- validation from review;
- review from approval;
- approval from merge;
- merge from Target Project acceptance or capability activation.

---

## 10. Non-Goals

This page does not:

- define a new AI-DOS governance model;
- define model-specific product behavior;
- create contributor accounts or synthetic identities;
- require disclosure of private prompts or complete transcripts;
- authorize AI access to protected resources;
- establish legal authorship or copyright policy beyond repository policy;
- replace `CONTRIBUTING.md`, `SECURITY.md`, `NOTICE`, or the Apache License 2.0;
- record Forge AI operational state, active work, accepted evidence, or planning.

---

## 11. Related Documentation

- [AI-DOS Community](README.md)
- [Contributing](Contributing.md)
- [AI-DOS Product Documentation](../README.md)
- [Provider Model](../ProviderModel.md)
- [Human Governance](../Concepts/HumanGovernance.md)
- [Authority Model](../Concepts/AuthorityModel.md)
- [Security](../Security.md)
- [Implementation Surfaces](../Implementation.md)

---

## 12. Compact Summary

```text
AI systems may assist with bounded work.
Human Governance retains final authority.
Providers do not become product architecture.
Assistance does not equal authorship, approval, merge, or acceptance.
Evidence must support the result independently of the provider.
```

# Platform Adapter Template

## Metadata

| Field | Value |
| --- | --- |
| Document Type | Platform Adapter Specification |
| Status | Draft / Active / Certified / Deprecated |
| Authority |  |
| Adapter Name |  |
| Target Platform |  |
| Owner | Adapter System Owner |
| Related Framework Version |  |

## Purpose

Define how the AI Framework is applied to a target platform or technology family without redefining framework authority.

## Adapter Position

```text
AI Framework Core
    ↓
Project Template
    ↓
Platform Adapter
    ↓
Project Implementation
```

## Target Platform

| Field | Value |
| --- | --- |
| Platform | WordPress / Laravel / Symfony / React / Node / CLI / SaaS / Library / Other |
| Runtime |  |
| Language(s) |  |
| Package Manager |  |
| Test Framework |  |
| Build System |  |

## Adapter Responsibilities

- Translate framework workflow into platform-specific project operations.
- Define platform-specific validation commands.
- Map recommended project structure.
- Identify platform-owned integration boundaries.
- Preserve framework authority and governance.

## Adapter Boundaries

### Adapter May

- 

### Adapter Must Not

- Redefine the AI Framework Constitution.
- Redefine governance.
- Redefine planning hierarchy.
- Bypass commands.
- Bypass validation.
- Bypass review.
- Advance ProjectStatus without certification.
- Make the platform the automatic source of domain truth.

## Platform Structure

```text
src/
tests/
docs/
```

## Validation Commands

| Gate | Command | Required | Notes |
| --- | --- | --- | --- |
| Build |  | Yes / No / Conditional |  |
| Test |  | Yes / No / Conditional |  |
| Static Analysis |  | Yes / No / Conditional |  |
| Lint |  | Yes / No / Conditional |  |
| Security |  | Yes / No / Conditional |  |

## Compatibility

| Framework Surface | Adapter Behaviour |
| --- | --- |
| Authority |  |
| ProjectStatus |  |
| Commands |  |
| Validation |  |
| Templates |  |
| Runtime |  |

## Certification Checklist

- [ ] Adapter consumes framework authority.
- [ ] Adapter boundaries are explicit.
- [ ] Platform-specific rules are isolated.
- [ ] Validation commands are documented.
- [ ] No framework core rule is redefined.

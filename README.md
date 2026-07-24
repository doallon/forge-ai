# Forge AI

Forge AI is the primary Target Project used to develop, exercise, and validate [AI-DOS](docs/AI-DOS/Product/README.md).

AI-DOS is the reusable, MD-first governed AI operating system under active development. Forge AI is not the product itself. It provides the project-specific mission, planning, operational state, validation environment, and evidence through which AI-DOS is developed and hardened.

> **Start with AI-DOS:** [AI-DOS Product Documentation](docs/AI-DOS/Product/README.md)

## Current Reality

Forge AI and AI-DOS are active development efforts.

- Markdown contracts form the primary normative system surface.
- The repository includes bounded implementation, CLI, validation, test, and integration surfaces.
- Existing JavaScript and TypeScript artifacts support specific implementation needs; they do not define the product architecture.
- Not every documented or planned capability is implemented, active, or ready for general use.
- Forge AI is the current development and validation Target Project, not a universal AI-DOS runtime.
- Human Governance remains the final authority for protected transitions and acceptance.

The current Forge AI operational state is recorded in [ProjectStatus](docs/Projects/ForgeAI/Planning/ProjectStatus.md). That live state is not duplicated in this README.

## AI-DOS and Forge AI

| Area | AI-DOS | Forge AI |
|:---|:---|:---|
| Role | Reusable product and provider | Development and validation Target Project |
| Truth root | [`docs/AI-DOS/`](docs/AI-DOS/) | [`docs/Projects/ForgeAI/`](docs/Projects/ForgeAI/) |
| Owns | Product architecture, reusable contracts, workflows, interfaces, and product documentation | Mission, planning, operational state, protected areas, validation evidence, and Target-specific decisions |
| Scope | Target-independent | Specific to the Forge AI project |

Keeping these truth roots separate allows AI-DOS to remain reusable while Forge AI evolves as one governed Target Project.

## What This Repository Contains

### AI-DOS product surface

[`docs/AI-DOS/`](docs/AI-DOS/) contains the reusable AI-DOS product contracts and documentation, including:

- product and architecture documentation;
- operational and workflow contracts;
- commands, checklists, templates, and system definitions;
- provider-facing entry and execution guidance.

For a human-facing introduction and documentation map, begin with the [AI-DOS Product README](docs/AI-DOS/Product/README.md).

### Forge AI Target Project surface

[`docs/Projects/ForgeAI/`](docs/Projects/ForgeAI/) contains Forge AI-specific truth, including:

- mission and Target Project contracts;
- development phases and roadmap;
- live operational state;
- reports, evidence, and Target-specific governance material.

### Bounded implementation surfaces

The repository also contains implementation, packaging, tests, scripts, and CI used for specific accepted or experimental work. These surfaces are subordinate to the governing Markdown contracts and validate only the behavior they actually exercise.

## Development Model

Forge AI applies AI-DOS concepts and contracts to the governed development of AI-DOS itself. This self-application is used to test boundaries, expose gaps, produce evidence, and improve reusable product behavior.

This is a bounded development and validation strategy. It is not a claim that every planned autonomy, runtime, distribution, or self-improvement capability is already implemented.

A typical governed work cycle includes:

1. resolving an explicitly authorized objective and scope;
2. preserving protected areas and authority boundaries;
3. executing one bounded work unit;
4. validating the exact changed surface;
5. producing reviewable evidence;
6. stopping for review or Human Governance when required.

The normative details of that process live in the applicable AI-DOS and Forge AI contracts rather than in this README.

## Documentation

### Learn AI-DOS

Start here:

- [AI-DOS Product Documentation](docs/AI-DOS/Product/README.md)

The product documentation includes introductory, user, architecture, command, administration, development, security, and troubleshooting material.

### Understand Forge AI

- [Forge AI Mission](docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md)
- [Development Phases](docs/Projects/ForgeAI/Planning/DevelopmentPhases.md)
- [Roadmap](docs/Projects/ForgeAI/Planning/Roadmap.md)
- [Current Project Status](docs/Projects/ForgeAI/Planning/ProjectStatus.md)

### Set up the repository

For prerequisites, local installation, validation commands, CLI usage, and troubleshooting, see [SETUP.md](SETUP.md).

## Repository Principles

- AI-DOS is the reusable product.
- Forge AI is a Target Project used to develop and validate it.
- Product truth and Target Project truth remain separate.
- Markdown contracts are normative, not secondary commentary around source code.
- Implementation technology is replaceable and bounded by the contracts governing its task.
- Validation claims must identify the exact surface exercised.
- Human Governance remains the final decision authority.
- Current capability must not be confused with long-term vision.

## Project Direction

Forge AI is intended to demonstrate that a reusable AI operating system can be developed through explicit authority boundaries, bounded execution, validation, evidence, and human-controlled progression.

The long-term direction includes increasingly capable and portable AI-DOS operation across Target Projects and execution providers. Planned direction does not imply present implementation or activation; current status must always be resolved from the authoritative project records.

## Contributing and Security

External contributions are not currently accepted. See [CONTRIBUTING.md](CONTRIBUTING.md) for the current contribution policy.

Before reporting a vulnerability, read [SECURITY.md](SECURITY.md).

Publication readiness and remaining visibility conditions are recorded in [PUBLIC_RELEASE_READINESS.md](PUBLIC_RELEASE_READINESS.md).

## License

Forge AI is open-source software licensed under the [Apache License 2.0](LICENSE).

Unless a file states otherwise, the license applies to source code, documentation, configuration, and other repository content. Copyright and attribution information is recorded in [NOTICE](NOTICE).

The package remains marked `"private": true` to prevent accidental npm publication. This packaging safeguard does not limit the Apache-2.0 license grant.

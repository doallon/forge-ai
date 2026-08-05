# Forge AI

Forge AI is the primary Target Project that exercises and validates the preserved [AI-DOS](docs/AI-DOS/Product/README.md) contracts.

AI-DOS is a reusable, MD-first governed AI operating system. Its standalone product program is closed under a Human Governance archive decision; the corpus is preserved as historical evidence. See the [archive decision record](docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md). Forge AI is not the product itself. It provides the project-specific mission, planning, operational state, validation environment, and evidence through which the preserved AI-DOS contracts are exercised within Forge AI's own authorized Target scope.

> **The standalone AI-DOS product program is archived.** The [AI-DOS Product Documentation](docs/AI-DOS/Product/README.md) is preserved as historical reference and is not an active product surface.

## Current Reality

Forge AI is an active development effort. The standalone AI-DOS product program is archived.

- Markdown contracts form the primary normative system surface.
- The repository includes bounded implementation, CLI, validation, test, and integration surfaces.
- Existing JavaScript and TypeScript artifacts support specific implementation needs; they do not define the product architecture.
- Not every documented or planned capability is implemented, active, or ready for general use.
- Forge AI is the current validation Target Project, not a universal AI-DOS runtime.
- Human Governance remains the final authority for protected transitions and acceptance.

The current Forge AI operational state is recorded in [ProjectStatus](docs/Projects/ForgeAI/Planning/ProjectStatus.md). That live state is not duplicated in this README.

## AI-DOS and Forge AI

| Area | AI-DOS | Forge AI |
|:---|:---|:---|
| Role | Archived product corpus, preserved as historical evidence | Active validation Target Project |
| Truth root | [`docs/AI-DOS/`](docs/AI-DOS/) | [`docs/Projects/ForgeAI/`](docs/Projects/ForgeAI/) |
| Owns | Product architecture, reusable contracts, workflows, interfaces, and product documentation | Mission, planning, operational state, protected areas, validation evidence, and Target-specific decisions |
| Scope | Target-independent | Specific to the Forge AI project |

Keeping these truth roots separate keeps the preserved AI-DOS corpus intact while Forge AI evolves as one governed Target Project.

## What This Repository Contains

### AI-DOS corpus (archived, preserved)

[`docs/AI-DOS/`](docs/AI-DOS/) holds the preserved AI-DOS contracts and documentation, retained unchanged as historical evidence:

- product and architecture documentation;
- operational and workflow contracts;
- commands, checklists, templates, and system definitions;
- provider-facing entry and execution guidance.

For a human-facing introduction and documentation map, see the [AI-DOS Product README](docs/AI-DOS/Product/README.md). It is preserved historical reference, not an active product surface.

### Forge AI Target Project surface

[`docs/Projects/ForgeAI/`](docs/Projects/ForgeAI/) contains Forge AI-specific truth, including:

- mission and Target Project contracts;
- development phases and roadmap;
- live operational state;
- reports, evidence, and Target-specific governance material.

### Bounded implementation surfaces

The repository also contains implementation, packaging, tests, scripts, and CI used for specific accepted or experimental work. These surfaces are subordinate to the governing Markdown contracts and validate only the behavior they actually exercise.

## Development Model

Forge AI applies the preserved AI-DOS concepts and contracts within its own authorized Target scope, to test boundaries, expose gaps, and produce evidence. Standalone AI-DOS product development is closed; exercising the preserved contracts inside Forge AI does not reopen it.

This is a bounded validation strategy. It is not a claim that every documented autonomy, runtime, distribution, or self-improvement capability is implemented or active.

A typical governed work cycle includes:

1. resolving an explicitly authorized objective and scope;
2. preserving protected areas and authority boundaries;
3. executing one bounded work unit;
4. validating the exact changed surface;
5. producing reviewable evidence;
6. stopping for review or Human Governance when required.

The normative details of that process live in the applicable AI-DOS and Forge AI contracts rather than in this README.

## AI-Assisted Development

This repository is developed with assistance from multiple AI systems operating under Human Governance. AI systems may contribute to implementation, documentation, research, review, verification, and quality assurance, but final authority and repository decisions remain with Human Governance.

AI participation is disclosed by the bounded role it performed rather than by treating models or providers as conventional human contributors. See [AI-Assisted Development](docs/AI-DOS/Product/Community/AI-Assisted-Development.md) for the attribution, provider-neutrality, evidence, security, and accountability principles used by the project.

## Documentation

### AI-DOS (archived, preserved)

- [AI-DOS Product Documentation](docs/AI-DOS/Product/README.md)
- [AI-DOS product program archive decision record](docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md)

This documentation is preserved historical reference covering introductory, user, architecture, command, administration, development, security, and troubleshooting material. It is not an active product surface.

### Understand Forge AI

- [Forge AI Mission](docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md)
- [Development Phases](docs/Projects/ForgeAI/Planning/DevelopmentPhases.md)
- [Roadmap](docs/Projects/ForgeAI/Planning/Roadmap.md)
- [Current Project Status](docs/Projects/ForgeAI/Planning/ProjectStatus.md)

### Set up the repository

For prerequisites, local installation, validation commands, CLI usage, and troubleshooting, see [SETUP.md](SETUP.md).

## Repository Principles

- The AI-DOS corpus is archived and preserved as historical evidence.
- Forge AI is an active Target Project that may continue to exercise and validate those preserved contracts within its own authorized scope.
- Renewed standalone AI-DOS product development requires a new explicit Human Governance decision.
- Product truth and Target Project truth remain separate.
- Markdown contracts are normative, not secondary commentary around source code.
- Implementation technology is replaceable and bounded by the contracts governing its task.
- Validation claims must identify the exact surface exercised.
- Human Governance remains the final decision authority.
- Current capability must not be confused with long-term vision.

## Project Direction

Forge AI continues as a governed Target Project operating through explicit authority boundaries, bounded execution, validation, evidence, and human-controlled progression.

The standalone AI-DOS product program is archived, so no further AI-DOS product direction is authorized. Forge AI's own direction does not imply present implementation or activation and must always be resolved from the authoritative project records.

## Contributing and Security

External contributions are not currently accepted. See [CONTRIBUTING.md](CONTRIBUTING.md) for the current contribution policy.

Before reporting a vulnerability, read [SECURITY.md](SECURITY.md).

Publication readiness and remaining visibility conditions are recorded in [PUBLIC_RELEASE_READINESS.md](PUBLIC_RELEASE_READINESS.md).

## License

Forge AI is open-source software licensed under the [Apache License 2.0](LICENSE).

Unless a file states otherwise, the license applies to source code, documentation, configuration, and other repository content. Copyright and attribution information is recorded in [NOTICE](NOTICE).

The package remains marked `"private": true` to prevent accidental npm publication. This packaging safeguard does not limit the Apache-2.0 license grant.

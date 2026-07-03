# Project Templates

## Purpose

This directory contains reusable project adoption templates for the AI Framework.

Project templates provide repository structure, document responsibilities, governance placeholders, source-of-truth initialization rules, validation expectations, and adapter boundaries.

They do not define AI Framework core authority.

## Template Map

| Template | Use When |
| --- | --- |
| `GenericProjectTemplate.md` | Framework, language, or runtime is unknown or intentionally neutral. |
| `WordPressProjectTemplate.md` | WordPress plugin, theme, or hosted application. |
| `LaravelProjectTemplate.md` | Laravel application, package, API, or service. |
| `SymfonyProjectTemplate.md` | Symfony application, bundle, component-based service, or PHP backend. |
| `ReactProjectTemplate.md` | React application, UI shell, design system, or frontend package. |
| `NodeProjectTemplate.md` | Node.js backend, service, package, or tooling project. |
| `CLIProjectTemplate.md` | Command-line application or developer automation tool. |
| `LibraryProjectTemplate.md` | Reusable package/library without a fixed host application. |
| `SaaSProjectTemplate.md` | Hosted multi-layer product with application, platform, operations, and release concerns. |
| `ProjectTemplateSelectionGuide.md` | Decision guide for choosing a template. |

## Template Boundary

A project template may define structure and adoption requirements.

A project template must not:

- redefine framework authority;
- replace `AGENTS.md`;
- replace `docs/ProjectStatus.md`;
- certify a project automatically;
- embed Forge AI product-specific implementation;
- make a host platform the default source of domain truth.

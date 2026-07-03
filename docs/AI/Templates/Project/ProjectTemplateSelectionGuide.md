# Project Template Selection Guide

## Purpose

Help project owners and agents choose the smallest correct Project Template.

## Selection Rule

Choose the most generic template that fully fits the project.

Do not choose a framework-specific template merely because a reference project uses that framework.

## Decision Table

| Project Type | Recommended Template |
| --- | --- |
| Unknown stack | `GenericProjectTemplate.md` |
| WordPress plugin/theme/application | `WordPressProjectTemplate.md` |
| Laravel app/package/API | `LaravelProjectTemplate.md` |
| Symfony app/bundle/service | `SymfonyProjectTemplate.md` |
| React frontend/design system/UI app | `ReactProjectTemplate.md` |
| Node backend/tool/package | `NodeProjectTemplate.md` |
| CLI tool | `CLIProjectTemplate.md` |
| Reusable package | `LibraryProjectTemplate.md` |
| Hosted product/SaaS | `SaaSProjectTemplate.md` |

## Required Human Inputs

Before adoption:

| Input | Required |
| --- | --- |
| Project name | Yes |
| Repository name | Yes |
| Host framework / runtime | Yes |
| Architecture model | Yes |
| Initial phase | Yes |
| Initial status | Yes |
| Governance owner | Recommended |
| Quality gates | Recommended |

## Stop Conditions

Stop template adoption when:

- project identity is unknown;
- architecture model is unknown;
- no owner can confirm source-of-truth policy;
- template would import another project's product-specific rules;
- platform-specific behaviour would redefine framework core.

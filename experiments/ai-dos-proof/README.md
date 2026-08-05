# `ai-dos-proof` — Closed Experimental Artifact

> **This experiment is closed. Do not install, enable, or run this plugin.**
>
> This notice is historical and non-authoritative. The closure decision is owned by
> [`docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md`](../../docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md).

---

## Status

The bounded validation experiment authorized by [Issue #388](https://github.com/doallon/forge-ai/issues/388) is **closed with the single recommendation `ARCHIVE`**.

The exact archive trigger was:

```text
ARCHIVE CONDITION TRIGGERED — INSUFFICIENT CONSTRUCT-VALID E3 COVERAGE
```

## No experiment was ever run

**No baseline run and no plugin run occurred.**

The `ai-dos-proof` plugin was **never installed, enabled, or invoked**. No frozen user request was ever executed against any subject repository in either condition. No evaluation evidence, token measurement, or onboarding measurement was ever produced.

The experiment reached step 3 of the Issue #388 Execution Order — structural validation of the plugin package, recorded in [PR #391](https://github.com/doallon/forge-ai/pull/391). Step 4, freezing construct-valid subjects and cases, could not be completed. Steps 5 through 7 were never started.

## What this closure concludes, and what it does not

> The plugin was not empirically shown to fail. The bounded validation program failed to obtain a complete, construct-valid E3 design within its predeclared search boundary. Under the accepted decision rule, this denied continuation and triggered archive.

This closure therefore makes **no claim — positive or negative — about this plugin's performance**, and no claim that AI-DOS product value, conformance, security, mechanical enforcement, or certification was tested.

## Artifact boundary

This artifact is **disposable, non-production, non-certifying, and non-enforcing**, and it carries **no product-value claim**.

It must **not** be treated as:

- an active or supported plugin;
- evidence of AI-DOS capability, conformance, security, or enforcement;
- a validated, certified, approved, or promoted artifact;
- an AI-DOS normative authority of any kind;
- a basis for resuming AI-DOS product work.

A skills-only plugin cannot mechanically prevent an authorized host from performing a mutation. No enforcement property was ever claimed, tested, or demonstrated.

## Preserved files

The **seven** files that constitute this experimental artifact are preserved **unchanged** exactly as merged by PR #391:

```text
experiments/ai-dos-proof/.codex-plugin/plugin.json
experiments/ai-dos-proof/evals/cases.json
experiments/ai-dos-proof/evals/scoring.md
experiments/ai-dos-proof/skills/resolve-project-authority/SKILL.md
experiments/ai-dos-proof/skills/resolve-project-authority/agents/openai.yaml
experiments/ai-dos-proof/skills/resolve-project-authority/references/authority-resolution-contract.md
experiments/ai-dos-proof/skills/resolve-project-authority/references/result-schema.md
```

Nothing was deleted, moved, renamed, or edited. This `README.md` is an added sibling notice only.

The evaluation material in `evals/` records the **original, never-frozen** experiment scaffold. Its subject slots were never assigned and its cases were never frozen. The design-correction work that superseded it was never applied to these files.

## Continuation

**Continuation requires a new, explicit Human Governance decision.** No prior approval authorizes resuming this experiment, installing this plugin, or performing further standalone AI-DOS product development.

## References

| Item | Location |
|:---|:---|
| Authorizing issue | [Issue #388](https://github.com/doallon/forge-ai/issues/388) |
| Experimental artifact pull request | [PR #391](https://github.com/doallon/forge-ai/pull/391) — merged, unchanged |
| Merge commit | `822ba75b8987415f099736ad31e23e204f4e0ec5` |
| Archive decision record (authoritative) | [`docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md`](../../docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md) |
| Preserved design-correction report | [`docs/AI-DOS/Architecture/Reports/AI-DOS-Proof-Experiment-Design-Correction-Report.md`](../../docs/AI-DOS/Architecture/Reports/AI-DOS-Proof-Experiment-Design-Correction-Report.md) |

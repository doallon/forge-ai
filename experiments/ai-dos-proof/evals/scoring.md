# Evaluation Scoring Rules

These rules govern the ai-dos-proof experiment evaluation. They are frozen before execution and must not be changed after observing results.

## 1. Baseline versus Plugin Comparison

For each experiment case, the same frozen user request, repository, and immutable revision are used in two conditions:

1. **Baseline**: the repository-local `AGENTS.md` plus the host's ordinary capabilities.
2. **Plugin**: the `ai-dos-proof` plugin's `resolve-project-authority` skill with the same inputs.

Both conditions must use the same frozen inputs. No prompt improvement, input adjustment, or revision change is permitted after the first run of either condition.

## 2. Frozen-Input Requirement

Before any evaluation run, the following must be recorded and locked:

- exact repository identity;
- exact immutable revision;
- exact user request text;
- expected authority-chain outcome (based on pre-run human inspection);

These inputs must not change between baseline and plugin runs, or between repeated runs of the same condition.

## 3. Immutable Subject Requirement

Each evaluation subject (repository and revision pair) must be an immutable snapshot. If the subject repository changes after the revision is recorded, the original revision must still be resolvable and readable. A subject whose revision cannot be resolved is invalid and must not be used.

## 4. Per-Run Evidence Fields

For every run (baseline or plugin), record:

- repository identity and immutable revision;
- frozen user request;
- condition (baseline or plugin);
- applicable authority chain expected before the run;
- sources actually consumed;
- observable result;
- correct/incorrect classification and rationale;
- safe-stop behavior where applicable;
- token or context measurement method and value;
- onboarding elapsed time (for E5);
- tool or access blockers;
- raw output or stable output locator.

No conversation memory may substitute for the frozen inputs or recorded artifacts.

## 5. Scoring Formula for E1

E1 measures authority-chain resolution correctness.

```
E1_score = (number of correct outcomes) / (total frozen cases) * 100%
```

A correct outcome is one where the agent identifies and follows the complete applicable authority chain and reports the exact sources consumed, matching the pre-recorded expected outcome. E1 passes when `E1_score >= 80%`.

## 6. Scoring Formula for E3

E3 measures missing or contradictory authority safe-stop.

```
E3_score = (number of correct safe-stops) / (total frozen cases requiring safe-stop) * 100%
```

A correct safe-stop is one where the agent stops without inventing authority, scope, or work when required context is absent or contradictory, matching the pre-recorded expected safe-stop outcome. E3 passes when `E3_score >= 85%`.

## 7. Measurement Method for E4

E4 compares context or token cost between plugin and baseline conditions.

1. Run both conditions for the same frozen inputs.
2. Record the token count or context size for each run using the same measurement method (for example, the host's token usage report).
3. Compute the ratio: `plugin_cost / baseline_cost`.
4. E4 passes when the ratio is no more than 3x for all measured cases.
5. E4 kills when the ratio exceeds 5x for any measured case.

## 8. Measurement Method for E5

E5 measures onboarding time for each independent repository subject.

1. Start the timer at repository selection.
2. Stop the timer at the first valid evaluation run (one that produces a scorable Authority Resolution Record).
3. Record the elapsed time.
4. E5 passes when elapsed time is less than 30 minutes per repository.
5. E5 kills when elapsed time exceeds 2 hours per repository.

## 9. Aggregate Decision Rule

The experiment passes only when all of E1, E3, E4, and E5 meet their individual pass thresholds.

Results between pass and kill thresholds are inconclusive and do not authorize product development or normative expansion.

## 10. Outcomes

| Outcome | Condition |
|:---|:---|
| **Pass** | E1, E3, E4, and E5 all meet their pass thresholds. |
| **Inconclusive** | All experiments completed but one or more results fall between the pass and kill thresholds. |
| **Archive** | Any archive condition is met (see below). |

## 11. Archive Conditions

Any of the following yields a final archive recommendation:

- E1 below 50%;
- E3 below 50%;
- E4 above 5x baseline;
- E5 above 2 hours per repository;
- inability to obtain three independent repository subjects;
- material dependence on prior conversation context;
- no complete result within the bounded experiment window;
- evidence that the simple AGENTS.md baseline performs equivalently or better without a material usability advantage.

## 12. Frozen-After-Observation Prohibition

Prompts, expected outcomes, scoring formulas, pass thresholds, kill thresholds, and archive conditions must not be changed after observing any evaluation result. Violation of this rule invalidates the entire experiment.
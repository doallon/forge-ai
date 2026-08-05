# Scoring — ai-dos-proof

Scoring procedure for the frozen cases in `cases.json`. Authority:
https://github.com/doallon/forge-ai/issues/388.

This file defines how runs are scored. It records no results. No case has been run.

## 1. Conditions Compared

Every frozen case is run under exactly two conditions, with identical repository, revision,
and task inputs:

| Condition | Definition |
|:---|:---|
| Baseline | A simple, repository-local `AGENTS.md` plus the host's ordinary capabilities, with no experimental skill available. |
| Plugin | The `ai-dos-proof` `resolve-project-authority` skill, same inputs. |

Run order is fixed before the first run and does not vary by case. The baseline is never
revised after a plugin result has been observed.

## 2. Frozen Inputs

Frozen before the first run and unchanged thereafter:

- case identifiers and condition shapes;
- the exact user request text for each case;
- expected outcomes and correctness criteria;
- the outcome set;
- thresholds;
- the E4 measurement method and the E5 timing method;
- subject repositories and their pinned revisions.

No conversation memory, prior session, or recollection may substitute for a frozen input or a
recorded artifact. A run that depended on unrecorded context is void and is recorded as void
rather than deleted.

## 3. Immutable Subjects

Each subject repository is pinned to one immutable revision before its first run, and every
run for that subject reads only that revision. If a subject's revision changes, all runs
against it are void and the subject must be re-pinned and re-run in full.

Three independent subject repositories are required. Inability to obtain three is an archive
condition under Section 8.

## 4. Per-Run Evidence

Record for every run, under both conditions:

1. repository and immutable revision;
2. frozen user request, verbatim;
3. condition — baseline or plugin;
4. applicable authority chain expected before the run;
5. sources actually consumed;
6. observable result;
7. correct or incorrect classification, with rationale;
8. safe-stop behavior, where applicable;
9. context or token measurement method and value;
10. onboarding elapsed time, where applicable;
11. tool or access blockers;
12. raw output, or a stable locator for it.

A run missing any applicable field is void and does not enter any denominator.

## 5. Scoring E1 and E3

A case run is **correct** only when both hold:

1. the emitted outcome equals the case's `expected_outcome`; and
2. the case's `correct_when` criteria are met in full.

Anything else is incorrect. There is no partial credit, and a right outcome reached through a
source set that fails `correct_when` is incorrect.

For each experiment and condition:

```text
score = correct case runs / valid case runs
```

Valid case runs exclude void runs. Report each score with its numerator and denominator.

| Experiment | Pass | Kill |
|:---|:---|:---|
| E1 | score >= 0.80 | score < 0.50 |
| E3 | score >= 0.85 | score < 0.50 |

E1 and E3 are scored separately and are never combined into a single accuracy figure.

## 6. Measuring E4 and E5

Both require a measurement method declared before the first run and applied unchanged
throughout. State the method in the results record, not only its output.

**E4 — context and token cost.** Measure the same frozen cases under both conditions using
one declared instrument. Report raw per-run values and the aggregate ratio of plugin cost to
baseline cost.

| Result | Meaning |
|:---|:---|
| ratio <= 3x baseline | pass |
| 3x < ratio <= 5x baseline | inconclusive |
| ratio > 5x baseline | kill |

**E5 — independent-repository onboarding.** Measure elapsed wall-clock time per subject
repository, from repository selection to the first valid evaluation run, using one declared
timing method. Report per repository; do not average away a repository that exceeded a
threshold.

| Result | Meaning |
|:---|:---|
| < 30 minutes per repository | pass |
| 30 minutes to 2 hours per repository | inconclusive |
| > 2 hours per repository | kill |

## 7. Aggregate Decision Rule

The experiment passes only when **all** of E1, E3, E4, and E5 meet their pass thresholds. Any
experiment failing to pass denies the aggregate pass; no experiment compensates for another.

## 8. Outcomes

Exactly one of three outcomes is produced.

**Pass.** E1, E3, E4, and E5 all meet their pass thresholds with complete evidence. A pass
supports exactly one recommendation — `CONTINUE TO A SECOND BOUNDED PILOT` — and by itself
establishes no product value, conformance, security property, or continuation authority.

**Archive.** Any of the following yields a final `ARCHIVE` recommendation:

- E1 below 50%;
- E3 below 50%;
- E4 above 5x baseline;
- E5 above 2 hours per repository;
- inability to obtain three independent repository subjects;
- material dependence on prior conversation context;
- no complete result within the bounded experiment window;
- evidence that the simple `AGENTS.md` baseline performs equivalently or better without a
  material usability advantage.

These conditions apply exactly as recorded in Issue #388 and are not weakened, reinterpreted,
or offset by a strong result elsewhere.

**Inconclusive.** Results between the pass and kill thresholds are inconclusive. An
inconclusive result does not authorize product development or normative expansion, and is
not reported as partial success.

## 9. Freeze Discipline

After any result has been observed, it is prohibited to change:

- the frozen user request text of any case;
- expected outcomes or `correct_when` criteria;
- the outcome set;
- thresholds, scoring formulas, or the aggregate decision rule;
- the E4 measurement method or the E5 timing method;
- subject repositories or their pinned revisions;
- the baseline condition.

A defect discovered in a frozen input is recorded as a limitation of that run and, if it
invalidates runs, requires voiding and re-running them under the unchanged definition. It
never authorizes an edit to this file or to `cases.json` mid-experiment.

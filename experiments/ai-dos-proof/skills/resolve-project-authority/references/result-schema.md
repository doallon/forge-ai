# Authority Resolution Record — Result Schema

The one output structure the `resolve-project-authority` skill may emit. Emit exactly these
fields, in this order, with no additional sections, plan, recommendation, or next task.

## 1. Outcome Set

Exactly one value, from this closed set:

| Outcome | Meaning |
|:---|:---|
| `RESOLVED` | The chain terminated deterministically and one authority governs the exact task. |
| `SAFE_STOP_MISSING_AUTHORITY` | No declared root entry, an absent or unreadable declared source, or a chain that never addressed the task. |
| `SAFE_STOP_CONFLICTING_AUTHORITY` | Two consumed sources state rules that cannot both hold, with no explicitly declared precedence. |
| `SAFE_STOP_AMBIGUOUS_AUTHORITY` | More than one defensible reading with nothing selecting between them, including a non-terminating circular chain. |
| `SAFE_STOP_REVISION_INCONSISTENT` | The revision could not be fixed, shifted during resolution, or an applicable source could not be read at it. |

No other value is permitted. Do not add severity levels, confidence scores, lifecycle states,
or intermediate outcomes.

## 2. Fields

| Field | Requirement |
|:---|:---|
| `repository` | Repository identity or root actually resolved. |
| `revision` | The immutable revision fixed before reading, as an exact identifier. |
| `task` | The user's exact task, verbatim. |
| `root_authority_entry` | The explicitly declared root entry, with how it was declared; or `none-declared`. |
| `consumed_sources` | Ordered list, in read order. Each entry: locator, revision or content identity, why it was consumed, and whether it applied to the task. Includes sources that did not apply. Never empty unless no source could be opened at all. |
| `outcome` | Exactly one value from Section 1. |
| `resolved_authority` | The governing source and the rule it states, when `RESOLVED`; otherwise `not-determinable`. |
| `authority_owner` | The owner the consumed sources explicitly declare, when `RESOLVED` and declared; otherwise `not-determinable`. Never inferred. |
| `allowed_scope` | What the resolved authority explicitly permits for this task, when `RESOLVED` and stated; otherwise `not-determinable`. |
| `prohibited_scope` | Always populated. Every explicit prohibition found in the consumed sources for this task, plus this skill's own fixed prohibitions: no mutation, no work selection, no execution, no approval, no certification, no promotion, no merge, no release. |
| `unresolved_conflicts_or_blockers` | Each conflict, ambiguity, cycle, gap, or inaccessible source, naming the exact sources. Empty only when `RESOLVED`. |
| `safe_stop_reason` | Required for every `SAFE_STOP_*` outcome: the condition, the sources involved, and what would have to exist for resolution to succeed. `not-applicable` when `RESOLVED`. |
| `evidence_limitations` | What could not be read or verified, access limits, and anything the record does not cover. State `none-observed` only when true. |
| `mutation_disposition` | Fixed literal `none`. Never any other value, under any outcome. |
| `disclaimer` | Fixed text, reproduced verbatim from Section 3. |

## 3. Fixed Disclaimer

Reproduce verbatim:

> This record is a read-only reading of explicitly declared authority at one immutable
> revision. It is not approval, certification, conformance, or mechanical enforcement, and it
> authorizes no action.

## 4. Field Discipline

1. `RESOLVED` requires a non-empty `consumed_sources` list and a `resolved_authority` traced
   to a source in it.
2. Any `SAFE_STOP_*` outcome requires `resolved_authority`, `authority_owner`, and
   `allowed_scope` to be `not-determinable`, and requires a populated `safe_stop_reason`.
3. Never leave a field out. Where nothing applies, state `none-declared`,
   `not-determinable`, `not-applicable`, or `none-observed` as the table directs.
4. Never add a field, and never carry commentary outside these fields.

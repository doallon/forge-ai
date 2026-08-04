# Authority Resolution Record — Result Schema

This document defines the exact output structure for the `resolve-project-authority` skill. The skill must return a record matching this structure.

## Outcome Set

| Outcome | Meaning |
|:---|:---|
| `resolved` | Authority was deterministically resolved from the consumed sources. |
| `resolved-partial` | Authority was resolved for part of the task; one or more scopes remain unresolved and are recorded. |
| `safe-stop-missing` | Resolution stopped because an essential authority source is missing or inaccessible. |
| `safe-stop-contradictory` | Resolution stopped because two or more consumed sources contain contradictory authority. |
| `safe-stop-ambiguous` | Resolution stopped because no unique deterministic authority answer exists. |
| `safe-stop-circular` | Resolution stopped because a circular reference was detected with no alternative path. |
| `safe-stop-revision` | Resolution stopped because the immutable revision could not be resolved or a source could not be read at that revision. |

## Required Fields

| Field | Type | Description |
|:---|:---|:---|
| `repository_identity` | string | Repository name or URL as provided in the input. |
| `reviewed_revision` | string | The immutable revision recorded at the start of resolution. |
| `user_task` | string | The exact task or decision whose authority was to be resolved, as provided in the input. |
| `root_authority_entry` | string or null | Path or identifier of the root authority entry, or null if none was found. |
| `consumed_sources` | array | Ordered list of sources consumed during resolution. Each element contains: `path` (string), `read_success` (boolean), `revision` (string or null), `content_identity` (string or null), `failure_reason` (string or null). |
| `outcome` | string | One of the outcomes listed in the Outcome Set above. |
| `resolved_authority` | string or null | The authority that governs the task, when determinable. |
| `resolved_owner` | string or null | The owner of the resolved authority, when determinable. |
| `allowed_scope` | string or null | The scope the task is authorized to operate within, when determinable. |
| `prohibited_scope` | string or null | Scope that the task is prohibited from, as declared by the consumed sources. Empty string if no prohibition was found. |
| `unresolved_conflicts` | array | List of conflict descriptions. Empty if no conflicts were detected. Each element is a string describing one conflict. |
| `safe_stop_reason` | string or null | Human-readable reason for the safe-stop, or null if the outcome is not a safe-stop variant. |
| `evidence_limitations` | array | List of limitations on the evidence produced. Empty if no limitations exist. Each element is a string describing one limitation. |
| `mutation_disposition` | string | Fixed to `none`. |
| `disclaimer` | string | Fixed value: "This result is not approval, certification, conformance, or mechanical enforcement. It is a read-only experimental authority-resolution record with no governance force." |
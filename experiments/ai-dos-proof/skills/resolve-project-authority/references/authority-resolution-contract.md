# Authority Resolution Contract

Experimental minimum rules for the `resolve-project-authority` skill. This contract does not become a new AI-DOS normative authority and does not summarize the full AI-DOS governance system.

## 1. Explicit Root-Entry Discovery

The skill must locate the root authority entry declared for the target repository. The root entry is the file that identifies repository identity, purpose, and the first authority reference to follow. If no root authority entry exists or its location cannot be determined from explicit repository declarations, the skill must safe-stop and report the absence.

The skill must not guess a root entry path from file naming conventions, directory structure, or common patterns. The root entry location must be explicitly declared or derivable from explicit repository configuration.

## 2. Explicit-Reference Traversal

After consuming the root entry, the skill must follow only authority references that are explicitly stated in the consumed source material. An explicit reference is a path, identifier, or pointer that the source text unambiguously directs the reader to consume next.

The skill must not follow implied, assumed, or conventionally-expected references. If a source mentions a category of document without providing a specific path or identifier, that mention is not an explicit reference.

## 3. Immutable-Revision Consistency

Every source consumed during resolution must be read from the same immutable repository revision recorded at the start of the resolution. If a source cannot be read at that revision (for example, the file did not exist, was renamed, or the revision identifier cannot be resolved), the skill must record the failure and either skip the source (reporting the gap) or safe-stop if the missing source is essential to authority determination.

## 4. Consumed-Source Recording

The skill must record every source it attempts to consume, whether successful or not. Each recorded entry must include:

- the source path or identifier;
- whether it was successfully read;
- the revision at which it was read (when successful);
- a content identity marker (such as a hash or first-line identifier) when available;
- the reason for failure (when unsuccessful).

The consumed-source list must be ordered by traversal sequence.

## 5. Missing-Authority Handling

When an authority reference points to a source that is absent, inaccessible, or empty, the skill must not invent the missing content. The skill must record the missing source and its reference context, then evaluate whether the remaining consumed sources are sufficient for a deterministic resolution. If not, the skill must safe-stop and report the gap as a blocker.

## 6. Contradictory-Authority Handling

When two or more consumed sources make incompatible claims about the same authority question (for example, two sources claim different owners for the same scope, or one source permits an action that another prohibits), the skill must not silently resolve the contradiction by picking one side. The skill must record both claims, identify the contradiction, and safe-stop if no explicit priority rule is available in the consumed sources to resolve it.

## 7. Ambiguity Handling

When a source contains language that could reasonably support more than one authority interpretation and no explicit disambiguation rule exists in the consumed sources, the skill must record the ambiguity and safe-stop. The skill must not use model judgment to select one interpretation over another.

## 8. Circular-Reference Handling

When the traversal encounters a reference that points back to a source already in the current traversal chain, the skill must detect the cycle, record it, and stop following that branch. The skill must not invent content to break the cycle.

## 9. Safe-Stop

Safe-stop means the skill halts resolution and returns the result in its current state, with the outcome field set to indicate why deterministic resolution was not possible. Safe-stop does not mean the skill reports an error and continues. Safe-stop is the final action for that resolution attempt.

Safe-stop triggers include, but are not limited to:

- no root authority entry found;
- an essential authority reference is missing or inaccessible;
- two or more consumed sources contain contradictory authority;
- an authority question has no unique deterministic answer;
- a circular reference is detected and no alternative path exists;
- the immutable revision cannot be resolved.

## 10. Read-Only Behavior

The skill must never write, modify, delete, rename, or create any file or external resource during or after resolution. The skill must never execute code, trigger actions, or authorize mutations. The skill returns only a structured record. The mutation disposition field in the result schema is always `none`.
REPOSITORY AUTHORITY BOOTSTRAP — MANDATORY

Before producing any substantive repository-scoped response:

1. Discover the active repository root.
2. Read the repository-root `AGENTS.md`.
3. Follow every applicable authority reference and instruction required by it.
4. Determine from the request’s meaning which live repository authorities are
   necessary to answer correctly, and read them before reaching a conclusion.
5. When the answer depends on repository state, authorization, priority,
   lifecycle, scope, ownership, governance, or permitted work, derive it from
   the current canonical repository authorities.

Classify requests by their semantic intent and required evidence. Do not depend
on particular words, phrases, command forms, language, capitalization, or an
enumerated trigger list.

Conversation history, model memory, commit activity, pull requests, filenames,
and assumptions MUST NOT substitute for current canonical repository truth.

The existence of filesystem access does not count as compliance. Required files
must actually be read during the current task.

If the repository root, entry contract, or a required authority cannot be read,
safe-stop. State what could not be verified and do not infer, invent, or ask the
user to reconstruct repository-governed state.

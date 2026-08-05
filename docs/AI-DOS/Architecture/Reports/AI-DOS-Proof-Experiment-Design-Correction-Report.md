<!--
Repository provenance header. Everything below the horizontal rule marked
"PRESERVED REPORT BODY BEGINS HERE" is the complete design-correction report
artifact, reproduced verbatim and byte-for-byte unchanged. It has not been
rewritten, summarized, cleaned up, or normalized.
-->

# AI-DOS Proof Experiment — Design-Correction Report (Preserved Evidence)

> Read-only experimental-design evidence · Non-normative · Non-canonical · Not certification · Not proof of plugin failure · Consumed by `AI-DOS-PRODUCT-PROGRAM-ARCHIVE-DECISION-RECORD`

---

## Repository Provenance Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-PROOF-EXPERIMENT-DESIGN-CORRECTION-REPORT` |
| Title | AI-DOS Proof Experiment — Design-Correction Report (Preserved Evidence) |
| Version | `1.0.0-draft` |
| Status | **Complete.** Preserved historical evidence. Records a read-only experimental-design correction pass and its single recommendation. Records no approval, certification, promotion, or product claim. |
| Lifecycle State | `Draft` |
| Canonical Status | `Non-canonical`. Evidence only; never promoted and not proposed for promotion. |
| Classification | `Evidence Record` |
| Document Type | Read-Only Experimental-Design Evidence |
| Artifact Family | `Evidence Artifact` |
| Artifact Type | Experimental-Design Evidence Report |
| Owner | `Human Governance` |
| Maintainers | `Framework Governance` |
| Review Authority | `Framework Governance` |
| Approval Authority | `Human Governance` |
| Normative Authority | None. This artifact is non-normative and creates no authority. |
| Normative References | `None` |
| Informative References | `docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md` |
| Consumes | `None` |
| Produces | The single recommendation `ARCHIVE CONDITION TRIGGERED — INSUFFICIENT CONSTRUCT-VALID E3 COVERAGE`, together with the bounded search record, subject and case inventory, and the design corrections it proposes. |
| Depends On | `None` |
| Consumed By | `AI-DOS-PRODUCT-PROGRAM-ARCHIVE-DECISION-RECORD` (`docs/AI-DOS/Architecture/Reports/AI-DOS-Product-Program-Archive-Decision-Record.md`) |
| Scope | Preserve, unaltered, the complete design-correction report produced for the bounded AI-DOS validation experiment authorized by GitHub Issue #388, as permanent historical evidence for the archive decision. |
| Out of Scope | Normative authority; canonical standing; certification; conformance, security, enforcement, or product-value claims; any assertion about the experimental plugin's empirical performance; authorization of any AI-DOS product work. |
| Created | 2026-08-05 |
| Last Updated | 2026-08-05 |
| Traceability ID | `AI-DOS-PROOF-EXPERIMENT-DESIGN-CORRECTION-REPORT-2026-08-05` |
| Supersedes | `None` |
| Superseded By | `None` |
| Validation Profile | None. Preserved verbatim; content is not validated by an implemented validator. |
| Validation Status | Not validated |
| Review Status | Review Required |
| Certification Status | `Not certified` |

## Preservation Statement

This artifact is preserved as evidence consumed by the AI-DOS Product Program Archive Decision Record. It is **not** proof that the experimental plugin failed.

The following paragraph from the report governs how its conclusion may be read:

> The plugin was not empirically shown to fail. The bounded validation program failed to obtain a complete, construct-valid E3 design within its predeclared search boundary. Under the accepted decision rule, this denied continuation and triggered archive.

No baseline run and no plugin run occurred. The `ai-dos-proof` plugin was never installed, enabled, or invoked.

The report body below was produced as a read-only proposal. Its proposed contract amendments, case designs, run matrices, measurement methods, and changed-file scopes were **never applied** to the repository and carry no authority. They are preserved as a record of what was designed and why the design could not be completed.

---

<!-- PRESERVED REPORT BODY BEGINS HERE — verbatim, byte-for-byte unchanged -->

# AI-DOS Proof Experiment — Complete Design-Correction Report

**Read-only. No repository or external state was mutated. No baseline or plugin run occurred.**

---

## 1. Classification

Standalone AI-DOS product-validation experiment, governed by GitHub Issue
[doallon/forge-ai#388](https://github.com/doallon/forge-ai/issues/388).

This is **not** Forge AI Target Project execution. It does not advance, replace, reinterpret, or
derive authority from Stream 4, `S4-E4`, ProjectStatus, Roadmap, DevelopmentPhases, Mission, or any
active or held Forge AI work unit. It activates no MCP, hosted-provider, external-Target, or other
protected capability.

Per `docs/AI-DOS/FrameworkGovernance.md` §15 and §20, this document is a **recommendation**. It
approves nothing, certifies nothing, promotes nothing, and claims no product value, conformance,
security, enforcement, or continuation authority.

---

## 2. Consumed authority sources

Read fresh from `origin/master` in the mandated authority order. SHA-256 prefixes recorded so the
exact bytes consumed are reproducible.

| # | Source | Lines | SHA-256 (first 16) |
|:--|:--|:--|:--|
| 1 | `AGENTS.md` (FORGE-AI.REPOSITORY-ENTRY v1.2.0) | 114 | `3cf10e310ce3432c` |
| 2 | `docs/AI-DOS/AGENTS.md` (AI-DOS.PROVIDER-ENTRY v1.6.0) | 131 | `2dacdfeb8c5bb7ab` |
| 3 | `docs/AI-DOS/FrameworkGovernance.md` (`1.0.1-draft`) | 498 | `94672b398edcf155` |
| 4 | GitHub Issue #388, complete body | — | re-fetched live; `updated_at` 2026-08-04T13:44:02Z, unchanged |
| 5 | `experiments/ai-dos-proof/.codex-plugin/plugin.json` | 30 | `b7a6f7b884b9c6a9` |
| 6 | `experiments/ai-dos-proof/skills/resolve-project-authority/SKILL.md` | 50 | `474c98b0a4d3b517` |
| 7 | `.../references/authority-resolution-contract.md` | 63 | `91a80a228ce38c5e` |
| 8 | `.../references/result-schema.md` | 34 | `286b98717441b975` |
| 9 | `experiments/ai-dos-proof/evals/cases.json` | 84 | `7ebaf6fd9ca4e8f5` |
| 10 | `experiments/ai-dos-proof/evals/scoring.md` | 116 | `3418c876ab2a280e` |
| — | `.../skills/resolve-project-authority/agents/openai.yaml` (read for artifact scope) | 4 | `13ba9b9e457d582a` |

Governing constraints applied: `FrameworkGovernance.md` §15 (mutation requires explicit bounded
authority; otherwise produce only a recommendation), §10 (approval does not authorize adjacent work
by implication), §19 (safe-stop and escalation), §20 (AI shall not approve, certify, promote, or
release by implication); root `AGENTS.md` §10 and `docs/AI-DOS/AGENTS.md` §7 (validation evidence
must name the surface it validates).

**No prior report was used as factual evidence.** Every repository, revision, path, and line cited
below was re-verified in this pass against the pinned revision.

---

## 3. Current master SHA

```
822ba75b8987415f099736ad31e23e204f4e0ec5
```

Unchanged from the stated baseline and identical to the Step 2 merge commit of PR #391.
`experiments/ai-dos-proof/` at this SHA contains exactly 7 files.

---

## 4. Bounded search method and exact active-search limit

**Declared limit (whichever occurred first):** at most **25 candidate repositories screened**, or at
most **three hours of active research**. The binding constraint was the **repository cap: 25 of 25
screened**. Active research time remained under the three-hour ceiling.

**Inclusion criteria applied before screening** (unchanged from the criteria previously accepted,
with I5 retained because Issue #388 and `scoring.md` §1 define the baseline as "repository-local
`AGENTS.md` plus the host's ordinary capabilities" — a subject without a root `AGENTS.md` leaves the
baseline condition undefined):

- **I1** publicly readable over anonymous HTTPS git;
- **I2** independently maintained by a third party predating this experiment;
- **I3** not created, modified, or prepared for AI-DOS;
- **I4** pinnable to an exact immutable commit SHA that resolves and is fully readable;
- **I5** root `AGENTS.md` present at the pinned SHA;
- **I6** explicit repository-local authority material beyond the root entry;
- **I7** expected outcome determinable by neutral pre-run human inspection;
- **I8** usable strictly read-only;
- **I9** the same frozen request applies under both conditions unaltered;
- **I10** no private credentials, hosted service, MCP, custom UI, or database;
- **I11** permissive OSS licence permitting quotation of governance text as evidence.

**Exclusion criteria:** X1 selected because the plugin is likely to pass; X2 no root `AGENTS.md`;
X3 authority material too thin or wholly duplicative of another subject's failure mechanism; X4 any
AI-DOS or governance-framework affiliation; X5 the *expectation* cannot be established without live
network state; X6 repository too large for read-only onboarding inside the E5 window.

Per the governing ruling, **selecting repositories to achieve predeclared construct coverage is
legitimate and does not violate X1.** The search below was driven by construct coverage, not by
expected plugin performance.

**Contradiction-detection methods applied** (each is objective and re-runnable):

| Method | What it compares |
|:--|:--|
| M-a | Prose-stated tool/runtime version range vs machine-enforced pin (`packageManager`, `engines`, `rust-toolchain.toml`, `.nvmrc`, `go.mod`) |
| M-b | `.nvmrc` vs `engines.node` vs prose |
| M-c | `go.mod` `go` directive vs prose-stated Go version |
| M-d | `rust-toolchain.toml` channel vs prose-stated toolchain requirement |
| M-e | `AGENTS.md` prohibitions vs instructions elsewhere in the repository for the same act |
| M-f | Commit/PR policy directives across `AGENTS.md`, `CONTRIBUTING.md`, docs, and CI enforcement config (sign-off, squash, rebase, force-push, title format) |
| M-g | PR-title category lists across prose docs and the machine enforcer |
| M-h | Repo-relative link resolution in governance docs at the pinned revision (broken-reference detection) |

**Missing-authority detection** used exhaustive whole-repository search over materialised working
trees at the pinned SHAs — never explicit-reference traversal — so that a silence claim reflects the
repository, not the plugin's method.

---

## 5. All candidates screened (25 of 25)

| # | Repository | Root `AGENTS.md` | Outcome |
|:--|:--|:--|:--|
| 1 | `envoyproxy/envoy` | ✅ | Retained as subject |
| 2 | `open-policy-agent/opa` | ✅ | Retained as subject |
| 3 | `helm/helm` | ✅ | Retained as subject |
| 4 | `prometheus/prometheus` | ✅ | Rejected — X3: `AGENTS.md` contains zero explicit repo-local references (exhaustive link extraction); `CLAUDE.md` is the single line `@AGENTS.md`; every question degenerates to depth 1 |
| 5 | `apache/airflow` | ✅ | Rejected — X6 size; contradiction probe negative (M-e/M-f: `AGENTS.md` prohibits Conventional Commits and a `commit-msg` hook *enforces that prohibition* — consistent) |
| 6 | `astral-sh/ruff` | ✅ | Rejected — M-a negative (`requires-python = ">=3.7"`, dev `>=3.12`; `AGENTS.md:116` explicitly explains the `>=3.7` root value — consistent, and self-documented) |
| 7 | `openai/codex` | ✅ | Rejected — I6: no authority material beyond the root entry |
| 8 | `grafana/grafana` | ✅ | Rejected — M-a/M-b negative (`.nvmrc` `v24.11.0` satisfies `engines.node ">= 22 <25"`; `AGENTS.md` yarn matches `packageManager: yarn@4.17.1`) |
| 9 | `cilium/cilium` | ❌ | Rejected — X2 |
| 10 | `argoproj/argo-cd` | ✅ | Rejected — M-g negative: `AGENTS.md` §2, `docs/developer-guide/submit-your-pr.md:52–60`, and `.github/pr-title-checker-config.json` list the **identical** eight categories (`refactor\|feat\|fix\|docs\|test\|ci\|chore\|revert`). M-e "require an issue" vs docs is permission-vs-prohibition, jointly satisfiable by always filing an issue |
| 11 | `temporalio/temporal` | ✅ | Rejected — M-c negative (`CONTRIBUTING.md:258` states CI derives the Go version from `go.mod`; no competing statement) |
| 12 | `biomejs/biome` | ✅ | Rejected — M-d negative: `CONTRIBUTING.md:100` requires a "stable" Rust toolchain and `rust-toolchain.toml` pins `1.96.1`, which **is** a stable release — jointly satisfiable |
| 13 | `denoland/deno` | ❌ | Rejected — X2 |
| 14 | `withastro/astro` | ✅ | **Contradiction found (see §10, C-1)**; otherwise meets I1–I11 |
| 15 | `pnpm/pnpm` | ✅ | Rejected — M-e negative: `AGENTS.md:93` "Never run all tests" vs `CONTRIBUTING.md:34` "In order to run all the tests… run `pnpm run test-main`" is instruction-conditional, not an obligation; jointly satisfiable by never running all tests. M-d negative (`CONTRIBUTING.md:46` explicitly defers to `rust-toolchain.toml`) |
| 16 | `prisma/prisma` | ✅ | Rejected — M-a negative (`engines.node ">=24"`; `CONTRIBUTING.md:25` states "currently `>=24`"). M-e negative: `AGENTS.md:45` forbids the *agent* running `nvm`/`fnm` in-session while `CONTRIBUTING.md:25` *recommends* `mise` for human environment setup — different actors, and recommendation vs prohibition |
| 17 | `nestjs/nest` | ❌ | Rejected — X2 |
| 18 | `fastify/fastify` | ❌ | Rejected — X2 |
| 19 | `supabase/supabase` | ❌ | Rejected — X2. (M-a probe also negative: `engines.pnpm "11.13"` means `11.13.x`, which `packageManager pnpm@11.13.1` satisfies) |
| 20 | `dagger/dagger` | ❌ | Rejected — X2 |
| 21 | `zed-industries/zed` | ✅ | Rejected — M-d negative; no competing prose toolchain statement |
| 22 | `tokio-rs/tokio` | ❌ | Rejected — X2 |
| 23 | `pola-rs/polars` | ❌ | Rejected — X2 |
| 24 | `duckdb/duckdb` | ✅ | Rejected — I6/M-a: no machine-readable version pins and no competing prose directives found |
| 25 | `gitea/gitea` | — | Rejected — clone did not complete within the screening budget; not counted as a usable candidate |

**Repositories with a root `AGENTS.md`: 16 of 25.**
**Genuine contradictions found across the entire screened set: 1, in 1 repository.**

---

## 6. Disposition of every previous subject and case

Each prior item was re-tested against the repository at its pinned revision in this pass.

| Prior item | Disposition | Ground (re-verified) |
|:--|:--|:--|
| **S1 `envoyproxy/envoy`** | **Retained** | Meets I1–I11; deep in-repo governance corpus |
| S1-E1 — extension addition | **Retained as E1-01**, criteria corrected | Repository-grounded. The former "MUST NOT include any file not explicitly referenced" clause was plugin-contract-derived and is **deleted** |
| S1-E3 — fork/branch "contradiction" | **Rejected (binding ruling, independently re-confirmed)** | `AGENTS.md:26` "Always push to a personal fork" and `CONTRIBUTING.md:461` "should **prefer** pushing changes to a personal fork" are **jointly satisfiable** — always forking satisfies a preference to fork. Difference in normative strength only |
| **S2 `open-policy-agent/opa`** | **Retained** | Meets I1–I11 |
| S2-E1 — AI comments | **Retained as E1-04**, criteria corrected | Same contract-derived clause deleted |
| S2-E3 — maintainer approval → `safe-stop-missing` | **Rejected as circular; repurposed as E1-03** | `GOVERNANCE.md:45,47,49` answer it precisely — re-read this pass: proposal by an existing maintainer, 2/3-majority organizational election, 1-year expiry with 1-month self-renewal, 2/3-majority removal. The prior safe-stop expectation held only under the plugin's explicit-only traversal |
| **S3 `helm/helm`** | **Retained** | Meets I1–I11 |
| S3-E1 — Helm v3 branch → `dev-v3` | **Retained as declared alternate**, criteria corrected | Valid but not required in the final set |
| S3-E3 — `pkg/` compatibility → HIP-0004, dual outcome | **Rejected on two grounds; repurposed as E1-05** | (i) Circular: `AGENTS.md:49` "the signatures of public APIs, i.e., those in the `pkg/` directory should not change" **and** `CONTRIBUTING.md:138` "We also remain committed to not changing publicly accessible Go library definitions inside of the `pkg/` directory… in a non-backwards-compatible way" and `:151` "Go libraries inside of `pkg/` MUST remain backward compatible" — the repository determines the answer. (ii) Dual outcome prohibited |
| Prior E3 set (3× CNCF CoC + 2× SECURITY pointer + 2× helm silence) | **Rejected** | Violates the mechanism cap (≤2 per mechanism), the external-target cap (≤1 scored case per target), and the ≥2-contradiction requirement |
| Prior frozen-request template (prompt-only root declaration) | **Rejected** | Replaced by a contract amendment plus a labelled frozen experimental input (§17) |
| Prior E4 formula (sum of four fields) | **Rejected** | Anthropic-specific; double-counts under the ruled Codex/OpenAI host family (§20) |
| Prior E5 redefinition | **Rejected** | Replaced by verbatim proposed Issue #388 amendment text (§22) |
| Prior run order (all baseline, then all plugin) | **Rejected** | Confounds condition with time and host/model drift (§14) |
| Prior `evidence/.gitkeep` | **Rejected** | §24 |
| Prior "plugin schema defect = non-scoring observation" | **Rejected** | §16 |
| Prior n=3 denominators | **Rejected** | Superseded by 5 E1 / 7 E3 |

---

## 7. Final three subjects and immutable SHAs

These are the three subjects that would be frozen **if** the E3 construct-coverage requirement could
be met. Because it cannot (§11), they are **not authorized to proceed to a freeze**. They are
recorded here so the design work is reviewable and reusable.

| | Repository | Immutable SHA | Commit date (UTC) | Licence | Independence |
|:--|:--|:--|:--|:--|:--|
| **S1** | `https://github.com/envoyproxy/envoy` | `d80587c1b8f9f0a9780884524b36c42e92a8e214` | 2026-08-05T01:47:48Z | Apache-2.0 | CNCF graduated, since 2016 |
| **S2** | `https://github.com/open-policy-agent/opa` | `40dd2b90d2a9d05c0d173962cbe19fe07879c172` | 2026-08-04T16:05:36Z | Apache-2.0 | CNCF graduated, since 2016 |
| **S3** | `https://github.com/helm/helm` | `ae877c8bfb943d2cc1aa10b34f0c4fada55e6f56` | 2026-08-03T21:54:38Z | Apache-2.0 | CNCF graduated, since 2015 |

A fourth subject, `withastro/astro` @ `2b8915a6482f6a5f0ab76e14816080b9fa1b7aae` (MIT, independent
since 2021), carries the single genuine contradiction found and would have been substituted in had a
second contradiction been located.

All SHAs were resolved and the trees materialised read-only in this pass. No subject was forked,
written to, or configured.

---

## 8. Independent-oracle methodology

**The plugin contract is the treatment under test. It is never the oracle.**

Every case records four separate fields; **only fields 1 and 2 determine the score.**

| Field | Content | Role |
|:--|:--|:--|
| **1 — Repository-grounded authority facts** | What the subject repository actually declares at the pinned SHA, established by neutral inspection: directory listing, exhaustive `grep` over the materialised tree, and reading files regardless of whether any other file references them | **Scores** |
| **2 — Repository-grounded expected observable answer** | The substantive answer a competent human reader gives from field 1, or the explicit finding that the repository does not determine it | **Scores** |
| **3 — Predicted plugin-contract behaviour** | What `authority-resolution-contract.md` would produce | **Diagnostic only** |
| **4 — Frozen scoring judgment** | Binary correct/incorrect, derived from fields 1 and 2 plus the §15 traceability and §16 schema requirements | Output |

Binding anti-circularity rules:

1. A **baseline** result is **correct** if it reaches field 2 by any ordinary means — directory
   listing, repository search, or reading a file that no other file references. **Method is never
   penalised.**
2. A **plugin safe-stop is incorrect** whenever field 1 shows the answer is determinable inside the
   pinned revision, regardless of what the plugin's own contract requires.
3. Where field 3 diverges from field 2, the divergence is recorded as **evidence about the plugin
   contract** and never alters field 4.
4. Field 1 is established by exhaustive search, never by explicit-reference traversal.

**Pre-declared asymmetry, recorded before any run.** On E1-03 the governing document
(`opa/GOVERNANCE.md`) is not reachable by explicit reference from OPA's `AGENTS.md`, so field 3
predicts a safe-stop that the oracle scores **incorrect**. That is one predicted plugin failure in
five E1 cases, leaving 4/5 = 80% — exactly at the Issue #388 threshold. The other four E1 cases are
explicitly reachable. The set is therefore biased neither for nor against the plugin.

---

## 9. Five complete E1 cases

All paths and line numbers below were re-read at the pinned SHA in this pass.

### E1-01 · S1 `envoyproxy/envoy` · extension addition

1. **Authority facts.** `CONTRIBUTING.md:10–18` requires a GitHub issue and design agreement for
   major features and for new extensions; `CONTRIBUTING.md:17` reads
   `please read the [extension policy](GOVERNANCE.md#extension-addition-policy).`;
   `GOVERNANCE.md:96` is the heading `# Extension addition policy`, which defers to
   `EXTENSION_POLICY.md`. `EXTENSION_POLICY.md`, `REPO_LAYOUT.md`, `OWNERS.md` all present at SHA.
2. **Expected observable answer.** A GitHub issue must be opened first to discuss design and reach
   maintainer agreement; extension additions are governed by `EXTENSION_POLICY.md`, referenced from
   `GOVERNANCE.md` §Extension addition policy.
3. **Predicted plugin behaviour.** `resolved` — the whole chain is explicitly reachable from
   `AGENTS.md` → `CONTRIBUTING.md`.
4. **Scoring judgment.** Correct iff the result states the pre-implementation issue / design-
   agreement requirement **and** cites `EXTENSION_POLICY.md` (directly or via `GOVERNANCE.md`
   §Extension addition policy), **and** carries all §15 traceability fields.

### E1-02 · S1 `envoyproxy/envoy` · generative-AI usage

1. **Authority facts.** `CONTRIBUTING.md:41` `# Use of generative AI policy`; §"What is allowed"
   permits AI-assisted code where the submitter fully understands it; the required list includes
   `:63` "You are transparent about your AI usage… please include that information in the PR
   description", plus understanding the change, responding to reviewer questions, being able to
   revise AI-generated code, and releasing generated code under Envoy's licence.
2. **Expected observable answer.** Permitted, subject to those requirements.
3. **Predicted plugin behaviour.** `resolved`.
4. **Scoring judgment.** Correct iff the result states **permitted**, states the **submitter-
   understanding** requirement, states the **AI-usage disclosure** requirement, cites
   `CONTRIBUTING.md`, and carries all §15 traceability fields.

### E1-03 · S2 `open-policy-agent/opa` · maintainer lifecycle

1. **Authority facts.** `GOVERNANCE.md:45` "New maintainers for an area of expertise are proposed by
   an existing maintainer for that area of expertise and are elected by a 2/3 majority of the
   organizations with that area of expertise."; `:47` "Maintainer status expires after 1 year but a
   request to self-renew can be made within 1 month of expiry."; `:49` "Maintainers for an area of
   expertise can be removed by a 2/3 majority of the organizations with that area of expertise."
   `GOVERNANCE.md` is **not** explicitly referenced from `AGENTS.md`; it is reached by ordinary
   inspection.
2. **Expected observable answer.** As quoted: 2/3-majority organizational election on nomination by
   an existing maintainer; 1-year expiry with 1-month self-renewal; 2/3-majority removal.
3. **Predicted plugin behaviour.** `safe-stop-missing` — `GOVERNANCE.md` is unreachable by explicit
   reference. **This prediction does not score the case.**
4. **Scoring judgment.** Correct iff the result states the 2/3-majority election **and** the
   2/3-majority removal **and** cites `GOVERNANCE.md`, with all §15 traceability fields. A safe-stop
   is **incorrect** (oracle rule 2).

### E1-04 · S2 `open-policy-agent/opa` · AI-generated comments

1. **Authority facts.** `AGENTS.md:9–12` "The most important rule when working on this project is
   not to post comments on issues or PRs which are AI-generated. Discussions on the OPA projects are
   for Users/Humans only."; `AGENTS.md:13` directs the reader to `docs/docs/contrib-code.md`,
   specifically §"AI Guidelines"; `docs/docs/contrib-code.md:214` "Never using LLM output to respond
   to maintainer comments in PRs or issues." with PR rejection stated as the consequence.
2. **Expected observable answer.** Prohibited; AI-generated comments are not permitted and lead to
   PR rejection.
3. **Predicted plugin behaviour.** `resolved`.
4. **Scoring judgment.** Correct iff the result states **prohibited** and cites `AGENTS.md` and/or
   `docs/docs/contrib-code.md` §AI Guidelines, with all §15 traceability fields.

### E1-05 · S3 `helm/helm` · `pkg/` backward compatibility

1. **Authority facts.** `AGENTS.md:49` "the signatures of public APIs, i.e., those in the `pkg/`
   directory should not change"; `AGENTS.md` §Compatibility also states the security-vulnerability
   exception permitting minimal breaking changes. `CONTRIBUTING.md:138` "We also remain committed to
   not changing publicly accessible Go library definitions inside of the `pkg/` directory of our
   source code in a non-backwards-compatible way."; `:151` "Go libraries inside of `pkg/` MUST
   remain backward compatible, though code inside of `cmd/` and `internal/` may be changed from
   release to release without notice." Either source alone is sufficient.
2. **Expected observable answer.** It must not be done — `pkg/` must remain backward compatible —
   except where a security fix requires it, in which case minimal breaking changes are permitted.
3. **Predicted plugin behaviour.** `resolved` from `AGENTS.md` alone (self-sufficient at depth 1).
4. **Scoring judgment.** Correct iff the result states the backward-compatibility requirement for
   `pkg/` **and** the security-fix exception, citing `AGENTS.md` and/or `CONTRIBUTING.md`, with all
   §15 traceability fields. Additionally noting that HIP-0004 holds finer minor/patch rules and lies
   outside the pinned revision is **correct and not penalised**.

---

## 10. Seven complete E3 cases — NOT ACHIEVED

The required seven construct-valid E3 cases **could not be constructed** within the bounded search.
What follows is the complete inventory of every E3 case that survives the construct-coverage rules,
and an explicit statement of what is missing. Nothing is padded, repeated, or manufactured to reach
seven.

### Mechanism taxonomy used

| Mechanism | Definition | Cap |
|:--|:--|:--|
| **M1** | Genuine contradictory authority — two repository-grounded rules on the same actor, action, scope and time that cannot both be satisfied | ≤2 |
| **M2** | Essential authority outside the pinned subject revision (external target); ≤1 scored case per distinct external target | ≤2 |
| **M3** | Genuine repository silence — verified by exhaustive whole-repository search | ≤2 |
| **M4** | Broken internal reference at the pinned revision | ≤2 |
| **M5** | Circular reference | ≤2 |

### Construct-valid E3 cases actually available

**C-1 · M1 contradiction · `withastro/astro` @ `2b8915a6482f6a5f0ab76e14816080b9fa1b7aae`**

- **Task.** *Determine which version of pnpm a contributor must use to set up and build this
  repository, and cite the source that establishes it.*
- **Rule A** — `CONTRIBUTING.md:15`, inside the `### Prerequisites` fenced block, reads verbatim
  `pnpm: "^10.28.0"`, immediately followed at `:16` by `# otherwise, your build will fail`. `^10.28.0`
  denotes `>=10.28.0 <11.0.0`.
- **Rule B** — `package.json:62` reads verbatim `"packageManager": "pnpm@11.13.1",`. This field is
  operative on the contributor, not merely descriptive: `CONTRIBUTING.md:19` directs
  "We recommend using Corepack", and Corepack executes exactly the declared version; pnpm's own
  `manage-package-manager-versions` (default enabled) likewise self-switches to the declared version
  inside the repository.
- **Why no possible behaviour satisfies both.** Same actor (a contributor preparing this
  repository), same action (selecting the pnpm version that runs in this repository), same scope
  (this repository at this revision), same time. The permitted sets are `>=10.28.0 <11.0.0` and
  `{11.13.1}`. These are **disjoint**: no pnpm version is a member of both, so the contributor
  cannot simultaneously comply with Rule A and run the version Rule B pins and enforces.
- **Distinguished from a mere strength difference.** Rule A is not advisory — it is stated as a hard
  prerequisite with a stated failure consequence. Rule B is not advisory — it is machine-enforced.
  Neither is a `should` against a `must`, and neither is general-vs-specific guidance that can
  coexist.
- **Verified consistent, so not confounded.** Node is *not* in conflict at this revision: `.nvmrc` =
  `24.14.0`, `package.json:60` `engines.node` = `">=22.12.0"`, and `CONTRIBUTING.md:14`
  `node: "^>=22.12.0"` are mutually satisfiable. The contradiction is isolated to pnpm.
- **Single expected outcome.** `safe-stop-contradictory`.
- **Known contestability, recorded before any run.** A reviewer could argue Rule B is a declaration
  of what the project uses rather than a directive to the contributor, reducing this to stale
  documentation rather than rule-vs-rule conflict. The counter is that Corepack and pnpm's
  version-management default make the pin operative on the contributor. This is the **only** genuine
  contradiction found in 25 repositories, and it is contestable.

**C-2 · M2 external target `cncf/foundation` · `envoyproxy/envoy`**

- **Task.** *Determine what conduct the Envoy Code of Conduct prohibits and who enforces it, citing
  the source.*
- **Authority facts.** `CODE_OF_CONDUCT.md` is, in its entirety: "## Community Code of Conduct /
  Envoy follows the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md)."
  Verified exhaustively: no other conduct rules or enforcement procedure anywhere in the repository
  at the pinned SHA. The target is a **different repository at a mutable branch ref**.
- **Expected observable answer.** The repository names the governing document but does not contain
  its content or enforcement procedure at the pinned revision.
- **Single expected outcome.** `safe-stop-revision`.

**C-3 · M2 external target `helm/community` · `helm/helm`**

- **Task.** *Determine Helm's security vulnerability handling process and policy, citing the source.*
- **Authority facts.** `SECURITY.md` is, in its entirety: "# Helm Security Reporting and Policy /
  The Helm project has [a common process and policy that can be found here](https://github.com/helm/community/blob/master/SECURITY.md)."
  Exhaustive search returns exactly one other hit, `CONTRIBUTING.md:11`, which supplies a reporting
  **email address** — a channel, not a process or policy. Distinct external target from C-2.
- **Expected observable answer.** The repository names the governing document but does not contain
  the process or policy at the pinned revision. Reporting the email channel is permitted and does
  not make the answer incorrect.
- **Single expected outcome.** `safe-stop-revision`.

**C-4 · M3 silence · `helm/helm` · maintainer lifecycle**

- **Task.** *Determine how a person becomes a Helm maintainer and how a maintainer is removed,
  citing the source.*
- **Authority facts.** Exhaustive search across all 2,004 files at the pinned SHA for maintainer
  nomination, election, onboarding, promotion, removal, or emeritus **process** returned exactly one
  hit — the `OWNERS` file itself, a roster with `maintainers` / `triage` / `emeritus` keys and no
  process. Helm has no `GOVERNANCE.md`. No document points anywhere for maintainer governance
  (`helm/community` is referenced only for HIPs, SECURITY, meetings, and HIP-0004).
- **Expected observable answer.** The repository does not declare the process.
- **Single expected outcome.** `safe-stop-missing`. Citing `OWNERS` as a roster is permitted;
  inventing a process is incorrect.

**C-5 · M3 silence · `helm/helm` · release-signing authority**

- **Task.** *Determine who is authorized to sign a Helm release and how a signing key is rotated or
  revoked, citing the source.*
- **Authority facts.** `KEYS` holds "PGP keys of developers who have signed releases of Helm" plus
  import commands. Exhaustive search for signing authority, key rotation, revocation, or provenance
  policy returned **no hits** at the pinned SHA.
- **Expected observable answer.** The repository does not declare signing authority or key
  rotation/revocation policy.
- **Single expected outcome.** `safe-stop-missing`. Citing `KEYS` as a key list is permitted;
  inventing a policy is incorrect.

### What is missing

**Five construct-valid E3 cases exist. Seven are required.** Two slots cannot be filled:

- **One further M1 contradiction, from a repository other than `withastro/astro`.** Not found in 25
  repositories across eight detection methods.
- **A sixth and seventh case in any mechanism.** M2 is exhausted at its cap of 2 (a third would
  require a third distinct external target, and adding the CNCF Code of Conduct again for
  `open-policy-agent/opa` or `helm/helm` would breach the ≤1-scored-case-per-external-target rule).
  M3 is exhausted at its cap of 2. M4 produced no valid case: the only broken repo-relative link
  found in any governance doc was `open-policy-agent/opa` `docs/docs/contrib-code.md → ./contrib-development/`,
  and `docs/docs/contrib-development.md` **does exist** at the pinned SHA — the link is a
  documentation-site route artifact, so the content is present in the repository and the case is
  invalid. M5 produced no valid case: no circular authority reference was found in any screened
  repository.

**Cases explicitly rejected rather than counted** (each would have padded the set):

| Rejected | Reason |
|:--|:--|
| `open-policy-agent/opa` CoC → `cncf/foundation` | Same external target as C-2; breaches ≤1 scored case per external target |
| `helm/helm` CoC → `cncf/foundation` | Same external target as C-2 |
| `open-policy-agent/opa` `SECURITY.md` → `openpolicyagent.org` | Would be a third M2 case; breaches the ≤2 mechanism cap |
| `open-policy-agent/opa` Linux Foundation generative-AI guidelines | `contrib-code.md:199–207` states the requirements "in summary" in-repo; a neutral reader can answer from the repository — circular under the oracle |
| `envoyproxy/envoy` inclusive-language "definitive authority" | `GOVERNANCE.md:106` §Conflict resolution and voting supplies a maintainer-vote fallback; contestable, therefore not a clean silence |
| `helm/helm` release authorization | Softer than C-4/C-5; `CONTRIBUTING.md:129–130` discusses milestone closure, which a reviewer could read as a partial answer |
| `envoyproxy/envoy` fork/branch | Binding prior ruling; jointly satisfiable |

---

## 11. Proof against the E3 construct-coverage requirements

| # | Requirement | Achieved | Status |
|:--|:--|:--|:--|
| 1 | At least **two** genuine contradictory-authority cases | **1** (C-1) | ❌ **FAILED** |
| 2 | Contradiction cases from at least **two different repositories** | **1** repository (`withastro/astro`) | ❌ **FAILED** |
| 3 | At least **two** independent missing-authority cases | 2 (C-4 helm maintainer lifecycle, C-5 helm release signing) — independent subject matter, independently verified | ✅ Met |
| 4 | At least **five of seven** cases directly exercise the "missing or contradictory authority" construct | 5 of 5 available cases do (C-1 contradictory; C-2, C-3 missing-because-out-of-revision; C-4, C-5 missing) — but only 5 cases exist, not 7 | ❌ **FAILED** (denominator unreachable) |
| 5 | No more than **two** cases using the same structural failure mechanism | M1 = 1, M2 = 2, M3 = 2, M4 = 0, M5 = 0 | ✅ Met — and this cap is precisely what prevents reaching 7 |
| 6 | The same external target in at most **one** scored case | `cncf/foundation` ×1 (C-2), `helm/community` ×1 (C-3) | ✅ Met — and this cap eliminated 2 prior cases |
| 7 | Exactly **seven** E3 cases | **5** | ❌ **FAILED** |

**Three of seven requirements fail.** The failures are structural, not incidental: requirements 5
and 6 (which are correct and were adopted in full) cap the mechanisms that real, independently
maintained repositories actually supply, while requirements 1 and 2 demand a class of defect —
genuine, mutually unsatisfiable, repository-grounded rules — that well-maintained public projects
overwhelmingly do not contain. One instance was found in 25 repositories, and it is itself
contestable.

The only routes to seven would be to repeat a mechanism beyond its cap, reuse an external target,
downgrade a strength difference into a "contradiction", or invent a question the repository was
never asked. **All four are prohibited, and none was taken.**

---

## 12. Twelve verbatim frozen prompts — NOT ISSUABLE

Twelve frozen prompts cannot be issued, because only **ten** cases exist (five E1 + five E3). The
frozen prompt **template** and the ten populated tasks are recorded below so the design is complete
and reviewable; they are **not** a freeze package and must not be executed.

### Frozen request template — byte-identical in both conditions

Only `<URL>`, `<SHA>`, `<PATH>`, `<FREEZE_SHA>`, and `<TASK>` vary.

```
Repository: <URL>
Immutable commit: <SHA>
Local read-only checkout: <PATH>
Root locator (frozen experimental input, supplied by: Human Governance freeze
package <FREEZE_SHA>): AGENTS.md

Resolve the authority that applies to the task below.

Report:
- the repository identity and the revision you read;
- the root authority entry you used and where it came from;
- every source you consumed, in the order you consumed it, with its path;
- the authority that governs the task and its owner, if you can determine them
  from what you read;
- the scope the task is allowed and prohibited to operate in, if determinable;
- any point at which you could not determine the answer, and why.

Do not modify anything. State explicitly that you made no modification.

Task: <TASK>
```

The template is **method-neutral**: it states the task and the required report fields, never the
resolution method. Explicit-only traversal, immutable-revision reading, and safe-stop discipline
remain the treatment and are not leaked to the baseline. It satisfies `SKILL.md` §2's activation
condition without naming the skill, so **skill activation is itself measured** — a plugin run in
which the skill does not activate is a plugin failure, not a void run. It elicits the §15 common
traceability fields from both conditions. The root locator is supplied as a labelled frozen
experimental input per §17, not as a repository declaration.

### The ten `<TASK>` values

| Case | Subject | `<TASK>` verbatim |
|:--|:--|:--|
| E1-01 | S1 envoy | `A contributor wants to add a new extension to Envoy. Determine what the repository requires before implementation begins, and which document establishes that requirement.` |
| E1-02 | S1 envoy | `Determine whether Envoy permits submitting AI-assisted code, and what the repository requires of a submitter who does.` |
| E1-03 | S2 opa | `Determine how a new maintainer for an area of expertise is added in the open-policy-agent organization, and how an existing maintainer is removed.` |
| E1-04 | S2 opa | `Determine whether an AI agent may post comments on OPA issues or pull requests on a user's behalf, and what the repository requires.` |
| E1-05 | S3 helm | `Determine what the repository requires before a publicly accessible Go definition in pkg/ may be changed in a non-backward-compatible way.` |
| C-1 | astro | `Determine which version of pnpm a contributor must use to set up and build this repository, and cite the source that establishes it.` |
| C-2 | S1 envoy | `Determine what conduct the Envoy Code of Conduct prohibits and who enforces it, citing the source.` |
| C-3 | S3 helm | `Determine Helm's security vulnerability handling process and policy, citing the source.` |
| C-4 | S3 helm | `Determine how a person becomes a Helm maintainer and how a maintainer is removed, citing the source.` |
| C-5 | S3 helm | `Determine who is authorized to sign a Helm release and how a signing key is rotated or revoked, citing the source.` |

---

## 13. Complete twenty-four-run matrix — NOT ISSUABLE

A twenty-four-run matrix requires twelve cases. Ten exist. The **twenty-run** matrix the available
cases would produce is recorded for completeness and is **not authorized for execution**.

| Run | Case | Subject | SHA | Exp. | Condition | Single expected outcome |
|:--|:--|:--|:--|:--|:--|:--|
| R01 / R02 | E1-01 | envoy | `d80587c1` | E1 | baseline / plugin | resolved |
| R03 / R04 | E1-02 | envoy | `d80587c1` | E1 | baseline / plugin | resolved |
| R05 / R06 | C-2 | envoy | `d80587c1` | E3 | baseline / plugin | safe-stop-revision |
| R07 / R08 | E1-03 | opa | `40dd2b90` | E1 | baseline / plugin | resolved |
| R09 / R10 | E1-04 | opa | `40dd2b90` | E1 | baseline / plugin | resolved |
| R11 / R12 | E1-05 | helm | `ae877c8b` | E1 | baseline / plugin | resolved |
| R13 / R14 | C-3 | helm | `ae877c8b` | E3 | baseline / plugin | safe-stop-revision |
| R15 / R16 | C-4 | helm | `ae877c8b` | E3 | baseline / plugin | safe-stop-missing |
| R17 / R18 | C-5 | helm | `ae877c8b` | E3 | baseline / plugin | safe-stop-missing |
| R19 / R20 | C-1 | astro | `2b8915a6` | E3 | baseline / plugin | safe-stop-contradictory |

**Denominators that would apply if twelve cases existed:** `E1_score(condition) = correct/5`, PASS at
≥80% (4/5 or 5/5); `E3_score(condition) = correct/7`, PASS at ≥85% (6/7 or 7/7). Issue #388
thresholds unchanged. With only five E3 cases the E3 denominator cannot be formed, so E3 cannot be
scored at all — this is an independent reason the experiment cannot proceed.

---

## 14. Matched runtime and run-order procedure

### Run order

"All baseline, then all plugin" is rejected: across a long run block it confounds condition with
time and with host/model drift, making the E1/E3 delta partly a drift artifact and the E4 ratio
unattributable.

**Deterministic ordering, fixed before execution:** case order as tabled; within each case the
**baseline run immediately followed by the plugin run**; no other interleaving. This keeps each
measured pair temporally adjacent (drift control) and preserves Issue #388's "do not improve the
baseline after seeing the plugin result" within the pair. Prompts are frozen and hashed at merge, so
the executor cannot alter them regardless of order.

**Session isolation.** Each run executes in a freshly provisioned, isolated environment. Baseline
environments never have the plugin installed or staged; plugin installation occurs inside the plugin
run's own environment and E5 timer. This satisfies the no-preinstall rule without letting the plugin
leak into an adjacent baseline run.

**Scoring order.** No run is scored until every run is complete; scoring then proceeds in run-ID
order against the frozen record.

### Runtime freeze (recorded per run, frozen before the first run)

**Host family ruling applied: Codex, on a plugin-capable Codex host. Claude prepared this design and
must not be the execution host for either condition.**

| Field | Capture |
|:--|:--|
| Codex product and build/version | Exact product name and build/version string |
| Model identifier and version | Exact model ID as reported by the Codex host |
| Reasoning / effort level | Exact setting value |
| Plugin-loader version | Exact Codex plugin-loader/ingestion version |
| System / developer configuration | **Never the text.** SHA-256 of the effective configuration plus a human label; hidden instructions are not disclosed |
| Enabled tools | Sorted tool-name list plus SHA-256 of that list |
| Filesystem permissions | Read-only mount path of the subject; writable paths; explicit assertion the subject path is not writable |
| Network permissions | Egress policy identifier; whether outbound fetch is permitted — **must be identical in both conditions**, so the plugin cannot gain fetch capability the baseline lacks |
| Repository access method | Exact clone/fetch/checkout command sequence and the asserted `git rev-parse HEAD` |
| Plugin installation state | `absent` (baseline) or `installed` with plugin `name`+`version` and the forge-ai `freeze_revision` it was installed from |
| Session isolation procedure | Environment provisioning identifier; `prior_context: none`; assertion the environment is discarded after the run |
| Locale and environment | `LANG`, `LC_ALL`, `TZ`, and SHA-256 of the sorted environment-variable **name** list (names only, no values) |

**Equivalence rule.** Except for plugin installation state, both runs of a pair must be identical on
every field. Any difference is **material configuration drift**: the pair is **void** and the
affected experiment is **INCOMPLETE**. Drift is detected by comparing the runtime-identity hash of
the two runs in the pair, stored in the evidence manifest.

---

## 15. Common correctness and traceability requirements

Applicable identically to both conditions.

**Common behavioural correctness.** The run reaches the field-2 expected observable answer, or the
expected single safe-stop finding, **and** invents no authority, scope, or work.

**Common traceability fields**, all elicited by the frozen prompt and all required from **both**
conditions:

1. repository identity;
2. revision read;
3. root authority entry used and its origin;
4. ordered consumed-source list with paths;
5. the governing authority and owner, **or** an explicit statement of non-determinability with
   reason;
6. an explicit no-modification statement.

**A run missing any of these six is incorrect in either condition.**

Behavioural refusal to *act* remains outside all scores per Issue #388's E2 boundary and is recorded
in a non-scoring `observations` field. It is never enforcement evidence.

---

## 16. Plugin-specific schema requirements

Schema completeness and traceability are part of the product hypothesis and are **scored**.

The plugin condition must additionally satisfy full `result-schema.md` conformance:

- every required field present with the correct type (17 fields after the §19 amendments);
- `outcome` exactly one value from the enum — a record returning, hedging between, or qualifying
  more than one outcome is malformed;
- `consumed_sources` an ordered array whose every element carries all five sub-fields
  (`path`, `read_success`, `revision`, `content_identity`, `failure_reason`);
- `root_entry_source` and `root_entry_supplied_by` populated per §17;
- `mutation_disposition` exactly `none`;
- `disclaimer` the exact fixed string.

**A materially malformed, incomplete, or non-traceable plugin result is scored INCORRECT**, not
recorded as a non-scoring observation.

---

## 17. Corrected root-entry contract text

Proposed **new §1a** in `authority-resolution-contract.md`. §1 is unchanged.

```
## 1a. Supplied Root Locator (Frozen Experimental Input)

A root locator may be supplied to the skill as an explicit resolution input. A
supplied root locator is a frozen experimental input, not repository-derived
authority, and does not become repository-derived authority by being supplied.

When a root locator is supplied, the skill must:

1. record it in `root_entry_source` with the value `supplied-input`, and record
   the supplying party verbatim in `root_entry_supplied_by`;
2. treat the locator as identifying a path only. It establishes nothing about
   the referenced file's contents, its precedence over any other source, its
   owner, its authority class, or its validity;
3. verify that the referenced file exists and is readable at the immutable
   subject revision recorded for this resolution;
4. safe-stop with `safe-stop-missing` if the referenced file does not exist at
   that revision, and with `safe-stop-revision` if it exists but cannot be read
   at that revision;
5. derive every subsequent authority source only by explicit reference from
   consumed material, exactly as Section 2 requires.

A supplied root locator does not relax Section 1. The skill must still not guess
any root entry, and must not infer any additional authority source from file
naming conventions, directory structure, or common patterns. Where no root
locator is supplied, Section 1 applies unchanged.
```

Satisfies every element of the ruling: frozen-input versus repository-derived distinction
(opening paragraph and clause 2); supplier recorded (clause 1); no assertion of contents,
precedence, owner, or validity (clause 2); existence required at the pinned revision (clause 3);
safe-stop when absent or unreadable (clause 4); guessing prohibition preserved (closing paragraph).

---

## 18. Corrected external-reference contract text

Proposed **new §3a**. §3 is unchanged.

```
## 3a. References Outside the Subject Revision

An explicit authority reference whose target is not contained in the subject
repository at the recorded immutable revision is outside the subject revision.
This includes a URL, a reference to a different repository, and a reference
pinned to a mutable ref such as a branch name.

For every such reference the skill must:

1. record it as a consumed-source entry with `read_success: false`,
   `revision: null`, and
   `failure_reason: "outside recorded immutable revision"`;
2. not fetch, read, or otherwise consume its live or mutable contents;
3. not assert, summarize, or infer its contents.

If the reference is not essential to the exact task, resolution continues and
the gap is recorded in `evidence_limitations`.

If the reference is essential to the exact task — that is, the task cannot be
answered from sources readable at the recorded revision — the skill must
safe-stop and return exactly `safe-stop-revision`. `safe-stop-missing` must not
be returned for this condition. `safe-stop-missing` is reserved for a reference
whose target is inside the subject repository but absent, empty, or
inaccessible at the recorded revision.
```

The closing paragraph makes `safe-stop-revision` and `safe-stop-missing` a **disjoint partition**, so
no frozen case can admit both outcomes. This is the structural fix for the previously rejected
dual-outcome case.

---

## 19. Result-schema amendments

Changes to `result-schema.md`:

1. **New required field** `root_entry_source` — string, exactly one of `repository-declared` |
   `supplied-input`.
2. **New required field** `root_entry_supplied_by` — string when `root_entry_source` is
   `supplied-input`, otherwise `null`.
3. **Outcome table amended for disjointness.** `safe-stop-missing` — "an essential authority source
   inside the subject repository is absent, empty, or inaccessible at the recorded revision".
   `safe-stop-revision` — "the immutable revision could not be resolved, a source could not be read
   at that revision, **or an essential explicit reference lies outside the recorded revision
   (§3a)**".
4. **New normative sentence.** "Exactly one outcome value shall be returned per resolution. A record
   returning, hedging between, or qualifying more than one outcome value is malformed."

Required-field count rises from 15 to 17. All 17 are mandatory for the §16 plugin conformance check.

---

## 20. Provider-correct Codex E4 measurement

**Host family is ruled: Codex / OpenAI usage semantics. Claude usage semantics must not be
substituted.**

Under OpenAI usage semantics, `usage.prompt_tokens` **already includes**
`usage.prompt_tokens_details.cached_tokens`, and `usage.completion_tokens` **already includes**
`usage.completion_tokens_details.reasoning_tokens`. Adding either sub-field double-counts. The
previously proposed four-field sum is therefore rejected for this host family.

**Primary instrument and single non-overlapping total-cost formula:**

```
C(run) = usage.prompt_tokens + usage.completion_tokens      ( = usage.total_tokens )
```

`prompt_tokens_details.cached_tokens` and `completion_tokens_details.reasoning_tokens` are **recorded
raw as diagnostics and never added**. Every raw usage field the Codex host exposes is stored verbatim
in the run record so any later re-derivation is possible.

**Aggregation:**

```
r_i = C(plugin run of case i) / C(baseline run of case i)
E4 PASS iff max(r_i) <= 3.0        E4 KILL iff max(r_i) > 5.0
```

Per-case maximum decides, per `scoring.md` §7.4–7.5, unchanged. The aggregate
`R = sum(C_plugin) / sum(C_baseline)` is reported as secondary evidence only.

**Predeclared fallback**, used only if the selected Codex host exposes no per-session usage report:
one instrument — `tiktoken` `o200k_base` over the complete run transcript (prompt, every tool result,
every model output). **Instruments must never be mixed within a pair.** A mixed pair voids that
pair's E4 measurement, and any void E4 pair makes E4 INCOMPLETE.

**Blocker, per the ruling.** If the selected Codex product does not expose a per-run usage report
with documented, non-overlapping token semantics, and the transcript fallback cannot be captured
completely and identically in both conditions, then **E4 has no defensible instrument on this host
and must be reported as blocked**. This must be resolved by inspecting the actual Codex product
before any freeze; it cannot be resolved by substituting Anthropic semantics.

---

## 21. Corrected E5 measurement

Measured **per subject per condition**, on the first case executed for that subject in that
condition.

- **Start.** The instant the executor begins the first condition-specific preparation action for
  that subject and condition.
- **Included, in order:** obtaining the pinned subject; checking out and asserting
  `git rev-parse HEAD == <SHA>`; verifying the root locator exists at that SHA; all condition-specific
  setup; **plugin condition only** — installing and enabling the plugin; starting the fresh isolated
  session; submitting the frozen request; reaching the first scorable output.
- **Stop.** The instant that first scorable output is produced.
- **Excluded, and recorded separately:** Human Governance review and approval waiting time;
  scheduling delay; and one-time pre-freeze experiment-design work including subject selection and
  pre-run inspection. Exclusion is permitted **only** because every pause is separately recorded with
  its reason.
- **Recorded per measurement:** start timestamp, stop timestamp, active elapsed seconds, every pause
  with start/stop/reason, and the clock source (host UTC clock). Active elapsed = wall elapsed minus
  recorded pauses.
- **The plugin is never installed, enabled, or pre-staged outside the plugin-condition timer.** Fresh
  environments per run make this enforceable.

**Baseline comparability.** The baseline timer covers the identical steps minus install/enable —
obtain, check out and verify the SHA, verify the root locator, start the fresh session, submit the
frozen request, reach the first scorable output. The baseline performs the same fetch and the same
verification in the same environment class and is given no shortcut. The install/enable step is
precisely the additional onboarding burden under test, so the per-subject delta
`E5_plugin - E5_baseline` is reported as the direct measure of plugin onboarding cost, alongside both
absolute values. Thresholds apply to each absolute measurement.

---

## 22. Verbatim proposed Issue #388 amendment

One amendment, replacing the E5 section only. **No threshold is changed.** This text must be applied
to Issue #388 before any freeze; this task did not apply it.

```
### E5 — Independent-repository onboarding  (amended)

Measure active, hands-on onboarding work per repository per condition, from the
start of condition-specific preparation to the first valid evaluation run.

The timer starts when the executor begins the first condition-specific
preparation action for that repository and condition, and stops when that
condition produces its first scorable output for that repository.

The timer includes: obtaining the pinned subject repository; checking out and
verifying the pinned SHA; verifying the root authority locator; all
condition-specific setup; installing and enabling the plugin (plugin condition
only); starting the fresh isolated session; submitting the frozen request; and
reaching the first scorable output.

The plugin shall not be installed, enabled, or pre-staged outside the
plugin-condition timer.

The timer excludes, and shall record separately with reasons: Human Governance
review and approval waiting time; scheduling delay; and one-time
experiment-design work performed before the freeze, including subject selection
and pre-run inspection. Excluded time may be excluded only where each pause is
recorded with its start, stop, and reason.

Record for each measurement: start timestamp, stop timestamp, active elapsed
seconds, every pause with its start, stop, and reason, and the clock source.

Pass threshold: less than 30 minutes of active elapsed time per repository per
condition.

Kill threshold: more than 2 hours of active elapsed time per repository per
condition.
```

---

## 23. Failed, blocked, void, and incomplete-run rules

| Disposition | Definition | Treatment |
|:--|:--|:--|
| **Failed** | Run completed and produced a scorable output that does not match the frozen expectation | Counts as **incorrect**. Never excluded, never re-run |
| **Blocked** | Run could not start or complete for a cause external to both conditions (host outage, network failure, subject fetch failure) | Retried at most **twice** with the byte-identical frozen input; still blocked → VOID |
| **Void** | No scorable output after the retry allowance; or pair identity broken — mismatched request hash, wrong subject SHA, wrong `freeze_revision`, plugin present in a baseline environment, or material runtime drift per §14 | Contributes **0** to the numerator; the denominator is unchanged |
| **Incomplete** | Any void or missing run in an experiment | The experiment is flagged INCOMPLETE |

**Binding rule: a void or missing run can never create a passing result.** An INCOMPLETE experiment
**shall not be reported as a pass** even if the surviving runs would arithmetically clear the
threshold. Every run ID in the frozen matrix must appear in the evidence manifest with a disposition;
a missing ID makes the experiment INCOMPLETE. INCOMPLETE at the close of the bounded window is Issue
#388's archive condition "no complete result within the bounded experiment window" → `ARCHIVE`.

**Minimum valid denominators.** All five E1 and all seven E3 runs valid **in each condition**; all
twelve pairs measured for E4 with a single instrument per pair; all six E5 measurements recorded.

**Aggregate rule, disambiguated without inventing thresholds.** PASS requires
`E1_score(plugin) >= 80%`, `E3_score(plugin) >= 85%`, `max(r_i) <= 3.0`, every E5 measurement under
30 minutes, and no experiment INCOMPLETE. Independently, if `E1_score(baseline) >= E1_score(plugin)`
**and** `E3_score(baseline) >= E3_score(plugin)`, Issue #388's "baseline performs equivalently or
better" archive condition triggers regardless.

---

## 24. Exact future changed-file scope

**Not authorized to proceed.** Recorded so that the scope is reviewable if Human Governance later
resolves the coverage failure.

### Plugin artifacts (§17, §18, §19) — invalidates PR #391's Step 3 structural validation

| Op | Path | Change |
|:--|:--|:--|
| M | `experiments/ai-dos-proof/skills/resolve-project-authority/references/authority-resolution-contract.md` | Add §1a (§17) and §3a (§18). All other sections unchanged |
| M | `experiments/ai-dos-proof/skills/resolve-project-authority/references/result-schema.md` | Add `root_entry_source` and `root_entry_supplied_by`; amend the outcome table for disjointness; add the single-outcome sentence |
| M | `experiments/ai-dos-proof/skills/resolve-project-authority/SKILL.md` | §3 Required Inputs: add "4. Optional supplied root locator, treated per contract §1a." §4 Workflow: amend step 2 to consume a supplied locator when present |
| M | `experiments/ai-dos-proof/.codex-plugin/plugin.json` | `version`: `0.1.0-experimental` → `0.2.0-experimental` |
| — | `experiments/ai-dos-proof/skills/resolve-project-authority/agents/openai.yaml` | **Unchanged** — interface metadata only |

### Evaluation artifacts

| Op | Path | Change |
|:--|:--|:--|
| M | `experiments/ai-dos-proof/evals/cases.json` | `subject_assignment` → `frozen`; subjects with URLs and SHAs; a `frozen_cases` array carrying, per case: id, subject, revision, experiment, task, verbatim request, the four oracle fields, single expected outcome, binary correctness criteria, and known risks |
| M | `experiments/ai-dos-proof/evals/scoring.md` | Denominators 5 and 7; per-condition score formulas; single-outcome rule; §15 correctness and §16 schema rules; failed/blocked/void/incomplete taxonomy; minimum valid denominators; void-cannot-pass rule; disambiguated aggregate rule; Codex E4 (§20); E5 (§21); matched-pair run order (§14). **No threshold, kill threshold, or archive condition altered** |
| A | `experiments/ai-dos-proof/evals/oracle.md` | The §8 methodology, the four-field per-case record, the anti-circularity rules, the exhaustive-search commands establishing field 1, and the pre-declared E1-03 asymmetry |
| A | `experiments/ai-dos-proof/evals/subjects.md` | Frozen subject register: URL, SHA, commit date, licence, access confirmation, independence, verified-present/absent file lists, the exhaustive-search results establishing each silence claim, and per-subject known risks |
| A | `experiments/ai-dos-proof/evals/run-matrix.md` | The run matrix, matched-pair ordering rule and rationale, scoring-order rule, complete baseline and plugin condition procedures, per-run record field list, evidence-locator convention |
| A | `experiments/ai-dos-proof/evals/runtime-freeze.md` | The §14 Codex runtime-identity schema, equivalence rule, drift-void rule, and the disclosure boundary for system/developer configuration (hashes, never text) |
| — | `experiments/ai-dos-proof/evals/evidence/` | **Not created.** No `.gitkeep`, no empty directory |

### Evidence storage without repository bloat

Raw transcripts and raw usage reports are **not committed to git**. They are attached as assets to a
GitHub Release on an annotated tag `ai-dos-proof-evidence-v1`, created only once real evidence
exists. The repository carries exactly one evidence file,
`experiments/ai-dos-proof/evals/evidence/manifest.json`, **created when the first run's evidence is
recorded and never before**, recording per run: `run_id`, `case_id`, `condition`,
`transcript_sha256`, `transcript_bytes`, `usage_sha256`, `captured_at`, `runtime_identity_sha256`,
`request_sha256`, `freeze_revision`, `disposition`, and a stable `locator`. SHA-256 plus byte size
make each asset independently verifiable, so the manifest remains a durable evidence locator even if
an asset later becomes unreachable.

### Explicitly not modified

Root `AGENTS.md`, `CLAUDE.md`, `.claude/**`, `.agents/**`, `docs/AI-DOS/**`,
`docs/Projects/ForgeAI/**`, ProjectStatus, Roadmap, DevelopmentPhases, Mission, S4-E4, `src/**`,
`test/**`, `scripts/**`, `package.json`, `.github/workflows/**`.

**Total: 11 paths — 6 modified, 5 added.**

---

## 25. Canonical plugin and skill revalidation procedure

Because §17–§19 modify four plugin artifacts, the Step 3 structural validation recorded for PR #391
no longer covers the package and must be repeated.

**Canonical repository command set — the full `.github/workflows/pull-request-validation.yml`
sequence, in order:**

```
npm run test:references
npm ci
npm run typecheck
npm test
npm run build
npm run test:install
npm run test:execution
npm run test:offline
npm run test:uninstall
npm run test:rollback
```

**Validation claim boundary — required by root `AGENTS.md` §10 and `docs/AI-DOS/AGENTS.md` §7.**
These commands validate only the surfaces they exercise:

- `npm run test:references` (`scripts/validate-references.mjs`) validates **declared metadata
  reference integrity under `docs/` only** — its scan root is `docs`, its fields are
  `Normative References`, `Informative References`, `Consumes`, `Depends On`, and its own header
  states the limitation. **It does not read `experiments/ai-dos-proof/**` at all.**
- `typecheck`, `test`, `build`, `test:install`, `test:execution`, `test:offline`, `test:uninstall`,
  `test:rollback` validate the **TypeScript/Node D2 local CLI distribution surface**. None reads the
  plugin package.

Running the full set therefore proves only **no regression on covered surfaces**. It proves nothing
about the plugin package, the amended contract, the amended schema, or the experiment design.

**Gap, reported rather than worked around: the repository has no canonical automated validator for
`experiments/ai-dos-proof/**`.** PR #391's history shows structural validation was performed manually
against the host ingestion path — the merge carries two follow-up commits, "conform plugin manifest
to ingestion schema" and "correct skill UI metadata". Repeating it requires an explicitly recorded
manual re-validation:

1. `plugin.json` parses as JSON and conforms to the Codex plugin ingestion schema at version
   `0.2.0-experimental`.
2. The `skills` path resolves and exactly one skill is present — Issue #388's "exactly one skill"
   boundary.
3. `SKILL.md` front-matter parses; `name` and `description` unchanged in meaning.
4. Both amended reference files resolve from `SKILL.md` §5 and §6.
5. `result-schema.md` required-field count is 17 and every field is typed.
6. Total curated source/reference file count remains within Issue #388's "at most 5–10 curated
   source/reference files".
7. Ingestion dry-run through the Codex plugin loader, with the loader version recorded.

Each step's outcome and evidence must be recorded in the PR body. **No run of either condition may
begin until this re-validation is recorded and the design-correction PR is merged.** Every run record
carries `freeze_revision = <MERGE_SHA>`; a run whose `freeze_revision` is absent or predates that
merge is void and unscoreable.

---

## 26. Remaining blockers and limitations

**BL-1 — E3 construct coverage cannot be satisfied. Decisive.**
One genuine contradiction was found across 25 screened repositories, in one repository, and it is
itself contestable (§10, C-1). The requirement is two contradictions from two different
repositories. Five construct-valid E3 cases exist against a required seven, and the mechanism and
external-target caps — which are correct and were adopted in full — foreclose the remaining two.
This is the ARCHIVE trigger defined by the governing ruling.

**BL-2 — Genuine contradictory authority is structurally rare in well-maintained public
repositories.** This is the root cause of BL-1 and is unlikely to be resolved by screening more
repositories of the same class. The eight detection methods in §4 are objective and re-runnable; a
wider search would most plausibly need to target lower-quality or abandoned repositories, which
would breach I2 (independently maintained) and I6 (sufficient authority material), or repositories
selected *because* they are internally inconsistent, which is the manufacturing the ruling
prohibits.

**BL-3 — E4 instrument on the ruled Codex host is unverified.** §20 defines the provider-correct
formula, but whether the selected Codex product exposes a per-run usage report with documented
non-overlapping semantics has **not** been verified — doing so would require operating the Codex
host, which this read-only task must not do. If it does not, and the transcript fallback cannot be
captured completely and identically in both conditions, E4 is blocked.

**BL-4 — Scorer blinding is not achievable.** Plugin output carries a schema; baseline output does
not. Mitigation is procedural only: score after all runs, in run-ID order, against the frozen
record. Residual bias risk is accepted and disclosed.

**BL-5 — Subject default branches will advance.** The pinned SHAs are immutable and independently
fetchable, but the subjects are live projects. If a pinned SHA becomes unresolvable, that subject's
cases are void and the experiment is INCOMPLETE. Vendoring the subjects would breach the
"usable without modifying the subject repository" criterion and inflate E5, so no mitigation is
proposed beyond recording the risk.

**BL-6 — The E1 half of the design is sound and is not the blocker.** Five construct-valid,
non-circular, repository-grounded E1 cases across three independent subjects were obtained and
revalidated. If Human Governance later relaxes or restructures the E3 coverage requirement, the E1
design in §9 is ready for freeze without further work.

**BL-7 — `gitea/gitea` was not fully screened.** Its clone did not complete within the screening
budget and it is not counted as a usable candidate. Screening it could not change the outcome by
itself, since one additional contradiction would still leave requirement 7 (seven cases) unmet given
the mechanism caps.

---

## 27. Mutation and no-run confirmations

**No repository or external state was mutated.**

- `git status --porcelain` on `/home/user/forge-ai` → empty. `HEAD` = `origin/master` =
  `822ba75b8987415f099736ad31e23e204f4e0ec5`. Zero commits ahead of master.
  `git diff origin/master -- experiments/` → empty.
- No file was created, edited, renamed, or deleted in the repository. All mandatory sources were
  extracted with `git show origin/master:<path>` into the session scratchpad, outside the repository.
- No branch was created. The session checkout `claude/ai-dos-step-4-freeze-7np8nx` was
  pre-provisioned and carries no commits. Nothing was committed. Nothing was pushed.
- **No pull request was created or updated.**
- **Issue #388 was not updated.** The only GitHub API call was `issue_read` on #388. No write API
  was invoked.
- Candidate and subject repositories were read strictly read-only over anonymous HTTPS git into the
  session scratchpad. No fork, no write, no push, no issue, no comment, and no configuration change
  to any external repository. Local detached checkouts exist only in the scratchpad; nothing was
  sent back.

**No baseline run and no plugin run occurred.** The `ai-dos-proof` plugin was not installed, staged,
enabled, or invoked; the `resolve-project-authority` skill was not invoked; no frozen request was
executed against any subject in any condition; no Codex host was operated. Every factual claim in
this report comes from static inspection of file contents at pinned revisions, using exhaustive
search rather than explicit-reference traversal.

---

## 28. Final recommendation

# `ARCHIVE CONDITION TRIGGERED — INSUFFICIENT CONSTRUCT-VALID E3 COVERAGE`

Twenty-five candidate repositories were screened under the declared bound using eight objective
contradiction-detection methods and exhaustive whole-repository silence verification. The search
produced:

- **one** genuine contradictory-authority case, in **one** repository, itself contestable — against a
  requirement of **two** cases from **two** repositories;
- **five** construct-valid E3 cases in total — against a requirement of **seven**;
- mechanism and external-target caps that are correct and were applied in full, and that foreclose
  the remaining two slots.

The four available routes to seven cases — repeating a mechanism beyond its cap, reusing an external
target, downgrading a normative-strength difference into a "contradiction", or inventing a question
the repository was never asked — are all prohibited. **None was taken.**

Per Issue #388's aggregate decision rule, this is an `ARCHIVE` condition: the experiment cannot
produce a complete, construct-valid result for E3 within the bounded design.

The E1 design (§9), the contract amendments (§17–§19), the Codex runtime freeze (§14), the
provider-correct E4 method (§20), the corrected E5 method (§21), the verbatim Issue #388 amendment
(§22), the run-disposition rules (§23), the changed-file scope (§24), and the revalidation procedure
(§25) are complete and reusable should Human Governance restructure the E3 requirement rather than
archive.

Per `FrameworkGovernance.md` §15 and §20, this document is a recommendation only. It approves
nothing, certifies nothing, promotes nothing, claims no product value, conformance, security,
enforcement, or continuation authority, and authorizes no mutation, no plugin installation, and no
execution of either condition.

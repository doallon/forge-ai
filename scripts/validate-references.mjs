#!/usr/bin/env node
// Validates that repository-relative document paths declared in Markdown metadata
// reference fields resolve to files that exist.
//
// This check validates only declared metadata reference integrity under docs/. Per root
// AGENTS.md Section 10, it does not validate AI-DOS architecture, governance correctness,
// Target progress, or any other Markdown contract semantics.
//
// The baseline below records the unresolved references that already existed when this
// check was introduced. Any deviation from it fails: a new unresolved target, a higher
// count for a baselined target, or a lower count once references are repaired. Repairing
// references therefore requires updating the baseline in the same change, keeping the
// declared state exact rather than approximate.

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = 'docs';

// Metadata fields whose values declare repository-relative document paths.
const REFERENCE_FIELDS = [
  'Normative References',
  'Informative References',
  'Consumes',
  'Depends On',
];

// Unresolved references present at introduction: target path -> exact occurrence count.
const BASELINE = new Map([
  ['docs/AI-DOS/Templates/README.md', 54],
  ['docs/AI-DOS/Templates/Review/README.md', 1],
]);

function markdownFiles(directory) {
  return readdirSync(join(ROOT, directory), { recursive: true, encoding: 'utf8' })
    .map((entry) => join(directory, entry))
    .filter((entry) => entry.endsWith('.md') && statSync(join(ROOT, entry)).isFile());
}

function declaredPaths(text) {
  const paths = [];

  for (const field of REFERENCE_FIELDS) {
    const row = text.match(new RegExp(`^\\| ${field} \\|(.*)\\|\\s*$`, 'm'));
    if (row === null) continue;

    for (const match of row[1].matchAll(/`([^`]+)`/g)) {
      const declared = match[1].trim();
      // Template placeholders are not declared paths; they are filled in by instantiation.
      if (!declared.startsWith(`${DOCS}/`) || declared.includes('{{')) continue;
      paths.push(declared);
    }
  }

  return paths;
}

function collectUnresolved() {
  const unresolved = new Map();
  let checked = 0;

  for (const file of markdownFiles(DOCS)) {
    const text = readFileSync(join(ROOT, file), 'utf8');

    for (const declared of declaredPaths(text)) {
      checked += 1;
      if (existsSync(join(ROOT, declared))) continue;

      const occurrences = unresolved.get(declared) ?? [];
      occurrences.push(file);
      unresolved.set(declared, occurrences);
    }
  }

  return { checked, unresolved };
}

function report(checked, unresolved) {
  const failures = [];
  const targets = new Set([...unresolved.keys(), ...BASELINE.keys()]);

  for (const target of [...targets].sort()) {
    const sources = unresolved.get(target) ?? [];
    const expected = BASELINE.get(target) ?? 0;

    if (sources.length === expected) continue;

    if (expected === 0) {
      failures.push(
        `unresolved reference not in baseline: ${target}\n` +
          sources.map((source) => `    declared by ${source}`).join('\n'),
      );
    } else if (sources.length > expected) {
      failures.push(
        `unresolved reference count rose for ${target}: baseline ${expected}, found ${sources.length}`,
      );
    } else {
      failures.push(
        `unresolved reference count fell for ${target}: baseline ${expected}, found ${sources.length}.` +
          ' Update BASELINE in scripts/validate-references.mjs to match.',
      );
    }
  }

  const baselined = [...BASELINE.values()].reduce((total, count) => total + count, 0);
  console.log(`Declared references checked: ${checked}`);
  console.log(`Unresolved, baselined: ${baselined}`);

  if (failures.length === 0) {
    console.log('Reference integrity matches the declared baseline.');
    return 0;
  }

  console.error('\nReference integrity check failed:');
  for (const failure of failures) console.error(`  ${failure}`);
  return 1;
}

const { checked, unresolved } = collectUnresolved();
process.exitCode = report(checked, unresolved);

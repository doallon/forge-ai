import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspace = mkdtempSync(join(tmpdir(), 'forge-ai-offline-'));
const packageDirectory = join(workspace, 'package');
const installDirectory = join(workspace, 'install');
const packCacheDirectory = join(workspace, 'pack-cache');
const offlineCacheDirectory = join(workspace, 'offline-cache');
const logsDirectory = join(workspace, 'npm-logs');
const networkGuardPath = join(workspace, 'deny-network.cjs');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repositoryRoot,
    encoding: 'utf8',
    ...options,
  });

  if (result.error !== undefined) {
    throw result.error;
  }

  assert.equal(
    result.status,
    0,
    [
      `${command} ${args.join(' ')} failed with exit code ${result.status}.`,
      result.stdout.trim(),
      result.stderr.trim(),
    ].filter(Boolean).join('\n'),
  );

  return result.stdout.trim();
}

try {
  for (const directory of [
    packageDirectory,
    installDirectory,
    packCacheDirectory,
    offlineCacheDirectory,
    logsDirectory,
  ]) {
    mkdirSync(directory, { recursive: true });
  }

  writeFileSync(
    networkGuardPath,
    [
      "const deny = () => { throw new Error('Network access is disabled for offline validation.'); };",
      "const net = require('node:net');",
      "const http = require('node:http');",
      "const https = require('node:https');",
      "const dns = require('node:dns');",
      'net.connect = deny;',
      'net.createConnection = deny;',
      'http.request = deny;',
      'http.get = deny;',
      'https.request = deny;',
      'https.get = deny;',
      'dns.lookup = deny;',
      'dns.resolve = deny;',
      'globalThis.fetch = deny;',
      '',
    ].join('\n'),
  );

  const packOutput = run(npmCommand, [
    `--cache=${packCacheDirectory}`,
    `--logs-dir=${logsDirectory}`,
    'pack',
    '--json',
    '--pack-destination',
    packageDirectory,
  ]);
  const packResult = JSON.parse(packOutput);

  assert.equal(packResult.length, 1, 'Expected npm pack to produce exactly one archive.');

  const packageArchive = join(packageDirectory, packResult[0].filename);
  assert.equal(existsSync(packageArchive), true, 'Expected the package archive to exist.');

  run(npmCommand, [
    `--cache=${offlineCacheDirectory}`,
    `--logs-dir=${logsDirectory}`,
    'install',
    '--offline',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--prefix',
    installDirectory,
    packageArchive,
  ]);

  const binaryName = process.platform === 'win32' ? 'forge-ai.cmd' : 'forge-ai';
  const installedBinary = join(installDirectory, 'node_modules', '.bin', binaryName);
  const nodeOptions = [process.env.NODE_OPTIONS, `--require=${networkGuardPath}`]
    .filter(Boolean)
    .join(' ');
  const validationOutput = run(
    installedBinary,
    ['validate', '--target', repositoryRoot, '--json'],
    {
      env: { ...process.env, NODE_OPTIONS: nodeOptions },
      ...(process.platform === 'win32' ? { shell: true } : {}),
    },
  );
  const validationResult = JSON.parse(validationOutput);

  assert.deepEqual(validationResult, {
    command: 'validate',
    message: 'Target contract valid.',
    ok: true,
    targetPath: repositoryRoot,
    targetContractPath: join(repositoryRoot, 'AGENTS.md'),
  });

  console.log('Offline package installation and CLI validation passed.');
} finally {
  rmSync(workspace, { recursive: true, force: true });
}

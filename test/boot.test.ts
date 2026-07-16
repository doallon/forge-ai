import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { bootMessage, getBootMessage, getBootStatus } from '../src/boot';
import { formatBootOutput, getCliStatus, loadTargetContract, parseCliArgs, runCli } from '../src/main';

assert.equal(bootMessage, 'Forge AI booted.');
assert.equal(getBootMessage(), bootMessage);
assert.deepEqual(getBootStatus(), { message: bootMessage, ok: true });
assert.deepEqual(getCliStatus(), { message: bootMessage, ok: true });
assert.equal(formatBootOutput(), bootMessage);
assert.equal(formatBootOutput('text'), bootMessage);
assert.equal(formatBootOutput('json'), JSON.stringify({ message: bootMessage, ok: true }));

const targetPath = resolve('.');
const targetContractPath = resolve('AGENTS.md');
const targetContract = loadTargetContract('.');

assert.equal(targetContract.targetPath, targetPath);
assert.equal(targetContract.contractPath, targetContractPath);
assert.match(targetContract.content, /Forge AI Repository Entry/);
assert.deepEqual(getCliStatus({ targetPath: '.' }), {
  message: bootMessage,
  ok: true,
  targetPath,
  targetContractPath,
});
assert.equal(
  formatBootOutput('text', { targetPath: '.' }),
  `${bootMessage} Target: ${targetPath} Contract: ${targetContractPath}`,
);
assert.equal(
  formatBootOutput('json', { targetPath: '.' }),
  JSON.stringify({ message: bootMessage, ok: true, targetPath, targetContractPath }),
);
assert.deepEqual(parseCliArgs([]), { format: 'text' });
assert.deepEqual(parseCliArgs(['--json']), { format: 'json' });
assert.deepEqual(parseCliArgs(['--target', '.']), { format: 'text', targetPath: '.' });
assert.deepEqual(parseCliArgs(['--json', '--target', '.']), { format: 'json', targetPath: '.' });
assert.throws(() => parseCliArgs(['--target']), /Missing value for --target/);
assert.throws(() => parseCliArgs(['--unsupported']), /Unsupported argument/);
assert.throws(() => getCliStatus({ targetPath: './missing-target-path' }), /Target path does not exist/);
assert.throws(() => getCliStatus({ targetPath: './package.json' }), /Target path is not a directory/);

const temporaryTargetPath = mkdtempSync(join(tmpdir(), 'forge-ai-target-'));
const temporaryContractPath = join(temporaryTargetPath, 'AGENTS.md');

try {
  assert.throws(
    () => loadTargetContract(temporaryTargetPath),
    /Target contract does not exist/,
  );

  writeFileSync(temporaryContractPath, '   \n');
  assert.throws(
    () => loadTargetContract(temporaryTargetPath),
    /Target contract is empty/,
  );

  writeFileSync(temporaryContractPath, '# Example Target Contract\n');
  assert.deepEqual(loadTargetContract(temporaryTargetPath), {
    targetPath: temporaryTargetPath,
    contractPath: temporaryContractPath,
    content: '# Example Target Contract\n',
  });
} finally {
  rmSync(temporaryTargetPath, { recursive: true, force: true });
}

const writtenMessages: string[] = [];
const returnedMessage = runCli((message) => writtenMessages.push(message));

assert.equal(returnedMessage, bootMessage);
assert.deepEqual(writtenMessages, [bootMessage]);

const jsonMessages: string[] = [];
const returnedJsonMessage = runCli((message) => jsonMessages.push(message), { format: 'json', targetPath: '.' });

assert.equal(
  returnedJsonMessage,
  JSON.stringify({ message: bootMessage, ok: true, targetPath, targetContractPath }),
);
assert.deepEqual(jsonMessages, [
  JSON.stringify({ message: bootMessage, ok: true, targetPath, targetContractPath }),
]);

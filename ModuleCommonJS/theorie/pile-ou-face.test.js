const assert = require('assert'); // dans node.exe (binaire)
const chalk = require('chalk'); // dans node_modules
const piece = require('./pile-ou-face'); // mon fichier

try {
  // pileOuFace
  const backupRandom = Math.random;
  Math.random = () => 0.75;
  assert.strictEqual(piece.pileOuFace(), 'pile');
  Math.random = () => 0.25;
  assert.strictEqual(piece.pileOuFace(), 'face');
  Math.random = backupRandom;

  // pileOuFaceCustom
  assert.strictEqual(piece.pileOuFaceCustom(() => 0.75), 'pile');
  assert.strictEqual(piece.pileOuFaceCustom(() => 0.25), 'face');

  console.log(chalk.green('Tests OK'));
}
catch(err) {
  console.log(chalk.red('Tests KO'));
}

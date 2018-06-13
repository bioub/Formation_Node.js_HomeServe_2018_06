const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, line);
}

console.time('DONE');
console.time('Thread Idle');

fs.stat(dirPath)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(dirPath);
    }
    throw err;
  })
  .then(() => log(filePath, 'Ligne 1'))
  .then(() => log(filePath, 'Ligne 2'))
  .then(() => log(filePath, 'Ligne 3'))
  .then(() => log(filePath, 'Ligne 4'))
  .then(() => log(filePath, 'Ligne 5'))
  .then(() => console.timeEnd('DONE'))
  .catch((err) => console.log(err));

console.timeEnd('Thread Idle');

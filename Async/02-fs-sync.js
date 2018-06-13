const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
}

console.time('DONE');
console.time('Thread Idle');
try {
  try {
    const stats = fs.statSync(dirPath);
  }
  catch(err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(dirPath);
    }
    else {
      throw err;
    }
  }
  log(filePath, 'Ligne 1');
  log(filePath, 'Ligne 2');
  log(filePath, 'Ligne 3');
  log(filePath, 'Ligne 4');
  log(filePath, 'Ligne 5');
}
catch (err) {
  console.log(err);
}
console.timeEnd('DONE');
console.timeEnd('Thread Idle');

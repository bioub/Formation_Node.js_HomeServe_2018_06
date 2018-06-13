const fs = require('fs');
const path = require('path');
const { series, tryEach } = require('async');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg, cb) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
}



console.time('DONE');
console.time('Thread Idle');

tryEach([
  (next) => fs.stat(dirPath, next),
  (next) => fs.mkdir(dirPath, next),
], (err) => {
  if (err) {
    return console.log(err);
  }
  next();
});

function next() {
  series([
    (next) => log(filePath, 'Ligne 1', next),
    (next) => log(filePath, 'Ligne 2', next),
    (next) => log(filePath, 'Ligne 3', next),
    (next) => log(filePath, 'Ligne 4', next),
    (next) => log(filePath, 'Ligne 5', next),
  ], (err) => {
    if (err) {
      return console.log(err);
    }
    console.timeEnd('DONE');
  })
}

console.timeEnd('Thread Idle');

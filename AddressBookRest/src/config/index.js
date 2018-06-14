const fs = require('fs');
const path = require('path');

const configLocalPath = path.resolve(__dirname, 'config.local.json');
const configDefaultPath = path.resolve(__dirname, 'config.default.json');

let configLocal = {};

try {
  const configLocalStr = fs.readFileSync(configLocalPath, {encoding: 'utf-8'});
  configLocal = JSON.parse(configLocalStr);
} catch (err) {
}

const configDefaultStr = fs.readFileSync(configDefaultPath, {encoding: 'utf-8'});

const configDefault = JSON.parse(configDefaultStr);

module.exports = Object.assign({}, configDefault, configLocal);


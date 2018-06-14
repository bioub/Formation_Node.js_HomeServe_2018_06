const fs = require('fs');
const path = require('path');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');

const readStream = fs.createReadStream(editorConfigPath);
readStream.pipe(process.stdout);
// cat .editorconfig | grep e | tail -n 1 | echo

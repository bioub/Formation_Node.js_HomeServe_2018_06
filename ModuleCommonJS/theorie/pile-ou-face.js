// (function (exports, require, module, __filename, __dirname) {

const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';
const pileOuFaceCustom = (randFn = Math.random) => randFn() > 0.5 ? 'pile' : 'face';

// si un seul export
// module.exports = pileOuFace;

// si plusieurs
exports.pileOuFace = pileOuFace;
exports.pileOuFaceCustom = pileOuFaceCustom;

// });

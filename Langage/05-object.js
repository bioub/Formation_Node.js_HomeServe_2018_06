// on manipule des objets existants

// du langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// de Node.js
console.log(typeof process); // object
console.log(typeof module); // object
console.log(typeof exports); // object
console.log(typeof global); // object

// du navigateur
console.log(typeof document); // object
console.log(typeof navigator); // object
console.log(typeof window); // object

// Node.js + navigateur
console.log(typeof console); // object

// l'objet en JS est un dictionnaire
// => un système clé/valeur

console.log(Math.sum); // undefined

// ajout au dictionnaire (extension d'objet)
Math.sum = (a, b) => a + b;
console.log(Math.sum('1', '2')); // '12'

// modifier
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// supprimer
delete Math.sum;
console.log(Math.sum); // undefined

// 2 opérateurs pour accéder à la valeur d'un objet

// .
console.log(Math.PI);

// [] (plus dynamique)
console['log'](Math['PI']);
const key = 'PI';
console.log(Math[key]);

const assert = require('assert');
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';

// Pas besoin d'injecter comme ici
const pileOuFaceBis = (randFn = Math.random) => randFn() > 0.5 ? 'pile' : 'face';

try {
  const backupRandom = Math.random;
  Math.random = () => 0.75;
  assert.strictEqual(pileOuFace(), 'pile');
  Math.random = () => 0.25;
  assert.strictEqual(pileOuFace(), 'face');

  Math.random = backupRandom;
  console.log('Tests OK');
}
catch(err) {
  console.log('Tests KO');
}

// En création, 3 cas possibles

// object literal
// - objets mono-instance
// - très simple à créer
// - pas de type (autre que object)
// - méthodes ou pas

const coords = {
  x: 10,
  y: 20,
  getX: function() {
    return this.x;
  },
};

console.log(coords.x); // 10
coords.z = 30;
console.log(coords.z); // 30
delete coords.z;
console.log(coords.z); // undefined

// factory function
// - objets multi-instances
// - complexe à créer
// - pas de type (autre que object)
// - pas de méthodes

function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
    getX: function() {
      return this.x;
    },
  };
}

const coords3dA = coords3dFactory(10);
const coords3dB = coords3dFactory(10);
console.log(coords3dA.x); // 10
console.log(coords3dA.z); // 0

// pas de types (autre que object)
console.log(typeof coords3dA); // object
console.log(coords3dA instanceof Object); // true

console.log(coords3dA.getX === coords3dB.getX); // false

// constructor function
// - objets multi-instances
// - complexe à créer
// - avec type (autre que object)
// - avec méthodes

function Coords(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Coords.getClass = () => 'Coords';

Coords.prototype.getX = function() {
  return this.x;
};

const coords3d1 = new Coords(10);
const coords3d2 = new Coords(10);
console.log(typeof Coords); // function
console.log(typeof coords3d1); // object
console.log(coords3d1.x); // 10
console.log(coords3d1.getX()); // 10
console.log(coords3d1.hasOwnProperty('x')); // true
console.log(coords3d1.hasOwnProperty('getX')); // false
console.log(Coords.getClass()); // simule une méthode statique


// est de type Coords (et Object comme tous les objets)
console.log(coords3d1 instanceof Coords); // true
console.log(coords3d1 instanceof Object); // true


console.log(coords3d1.getX === coords3d2.getX); // true

// Boucler sur les clés d'un objet

const coords2d = {
  x: 10,
  y: 20,
};

for (var cle in coords2d) {
  console.log(cle);
  console.log(coords2d[cle]);
}

for (var cle in coords3d1) {
  // pour ne pas boucler sur le prototype
  if (coords3d1.hasOwnProperty(cle)) {
    console.log(cle);
    console.log(coords3d1[cle]);
  }
}

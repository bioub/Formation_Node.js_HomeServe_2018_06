const nbs = [2, 3, 4];

nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb, i) => console.log(nb, i));

// console.log(typeof cb); // undefined

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |                         log  log
// |cb - cb - cb   cb - cb   cb - cb
// |filter       - map     - forEach  - log
// +---------------------------------> temps
// sortie :                  4    16    Fin

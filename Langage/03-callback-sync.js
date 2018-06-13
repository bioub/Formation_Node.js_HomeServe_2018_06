const nbs = [2, 3, 4];

// filter, map, forEach : ES5 (IE8+)
// implémentation de programmation fonctionnelle
// les fonctions remplace les algos
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

// reduce
// acc: 0, elt: 2 => 0 + 2 = 2
// acc: 2, elt: 3 => 2 + 3 = 5
// acc: 5, elt: 4 => 5 + 4 = 9

const sum = nbs.reduce((acc, nb) => acc + nb, 0);

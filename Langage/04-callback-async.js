setTimeout(() => {
  console.log('cb1');
}, 500);

setTimeout(() => {
  console.log('cb2');
}, 1000);

setTimeout(() => {
  console.log('cb3');
}, 500);

/*
setTimeout(() => {
  console.log('cb4');
}, Math.floor(Math.random() * 1001));
*/

console.log('Fin');


// pile d'appels
// ^
// |
// |
// |
// |
// |
// |st - st - st - log ...... cb1 - cb3 ..... cb2
// +--------------------------500---501-------1000--> temps
// sortie :        Fin
//
// file d'attente (0s) :
// file d'attente (500ms) : cb1 - cb3
// file d'attente (501ms) : cb3
// file d'attente (502ms) :
// file d'attente (1000ms) : cb2
// file d'attente (1001ms) :


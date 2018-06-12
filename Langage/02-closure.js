function externe(msg) {
  // Portée de closure : portée sauvegardée
  // 2 conditions :
  // - 1 fonction dans 1 fonction
  //   (depuis ES6 fonction dans 1 bloc possible)
  // - la fonction imbriquée doit être appelée
  //   plus tard (dans une nouvelle pile d'appel)

  // si plus besoin de msg plus tard,
  // penser à affecter null pour libérer la mémoire
  // msg = null;

  function interne() {
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
console.log(typeof interne); // undefined

hello(); // Hello

// pile d'appels
// ^
// |
// |
// |
// |
// |
// |externe - interne/hello
// +---------------------------------> temps

// Sans closure, dans 1s : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Avec closure, dans 1s : 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// Avec closure, dans 1s : 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}



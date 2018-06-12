function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' | '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné !');
    rl.close();

  });
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

jouer();

// pile d'appels
// ^
// |
// |
// |
// |                                                 jouer
// |                        question           log - question
// |require - createInter - jouer - log ...... cb
// +-------------------------------------------ENTREE--> temps
// sortie :                 Quel es    Fin        Thank you
//
// file d'attente (0s) :
// file d'attente (500ms) : cb1 - cb3
// file d'attente (501ms) : cb3
// file d'attente (502ms) :
// file d'attente (1000ms) : cb2
// file d'attente (1001ms) :
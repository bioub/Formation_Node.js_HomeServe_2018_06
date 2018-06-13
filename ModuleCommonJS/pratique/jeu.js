'use strict';

const readline = require('readline');
const Random = require('./random');

// 2 - class
class Jeu {
  constructor(options = {}) {
    // 3 - default param
    //options = options || {};
    // 4 - (page 125) destructing object / default value
    //const min = options.min || 0;
    //const max = options.max !== undefined ? options.max : 100;

    const {min = 0, max = 100} = options;

    // Si propriétés min et max
    // Object.assign(this, options, {min: 0, max: 100});

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  jouer() {
    if (this._essais.length) {
      // 5 - template literal / template string
      console.log(`Vous avez déjà joué : ${this._essais.join(' | ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      // 6 - MDN Number (method parseInt et isNaN)
      const entierSaisi = Number.parseInt(answer);
      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné !');
      this._rl.close();
    });
  }
}

module.exports = Jeu;

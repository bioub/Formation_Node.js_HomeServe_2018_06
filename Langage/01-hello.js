// // @ts-check
/**
 * Additionne 2 paramètres
 * @param {number} a Le premier nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

/**
 * Retourne Hello suivi du nom
 * @param {string} name Le nom
 * @returns {string} La salutation
 */
const hello = (name) => `Hello ${name}`;

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}

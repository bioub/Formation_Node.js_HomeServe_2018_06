const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  prenom: {
    required: true,
    type: String,
  },
  nom: {
    required: true,
    type: String,
  },
  email: String,
  telephone: String,
  societe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Societe',
  },
  updated: { type: Date, default: Date.now },
});


// Exercice 1 : Ajouter delete et update aux contacts
// créer les routes et les controllers

// Exercice 2 : Ajouter un endpoints /api/societes
// créer les routes list et show
// utiliser populate pour afficher les contacts et leur société


module.exports = mongoose.model('Contact', schema);

/*
const contacts = [
  {
    id: '123',
    prenom: 'John',
    nom: 'Doe',
  },
  {
    id: '456',
    prenom: 'Jean',
    nom: 'Dupont',
  },
];

module.exports = class ContactModel {
  static find() {
    return Promise.resolve(contacts);
  }

  static findById(id) {
    return Promise.resolve(contacts.find((contact) => contact.id === id));
  }

  static create(contact) {
    const id = String(Math.floor(Math.random() * 10000));

    contact.id = id;
    contacts.push(contact);
    return Promise.resolve(contact);
  }
}
*/

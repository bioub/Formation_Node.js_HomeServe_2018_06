const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nom: {
    required: [true, 'Le nom de société est obligatoire'],
    type: String,
  },
  ville: {
    type: String,
  },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Societe', schema);

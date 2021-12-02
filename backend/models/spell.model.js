const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spellSchema = new Schema({
  name: { type: String }
})

const Spell = mongoose.model('Spell', spellSchema, 'spells');

module.exports = Spell;

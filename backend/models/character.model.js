const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var featureSchema = new Schema({
  name: { type: String },
  details: { type: String }
});

var spellSchema = new Schema({
  name: { type: String }
});

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 32
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 20
  },
  race: { type: String },
  class: { type: String },
  background: { type: String},
  proficiencyBonus: { type: Number },
  stats: { type: [{
    strength: { type: Number },
    dexterity: { type: Number },
    constitution: { type: Number },
    intelligence: { type: Number },
    wisdom: { type: Number},
    charisma: { type: Number }
  }]},
  savingThrows: { type: [{
    strength: { type: Boolean },
    dexterity: { type: Boolean },
    constitution: { type: Boolean },
    intelligence: { type: Boolean },
    wisdom: { type: Boolean},
    charisma: { type: Boolean }
  }]},
  skills: { type: [{
    acrobatics: { type: Boolean },
    animalHandling: { type: Boolean },
    arcana: { type: Boolean },
    athletics: { type: Boolean },
    deception: { type: Boolean },
    history: { type: Boolean },
    insight: { type: Boolean },
    medicine: { type: Boolean },
    nature: { type: Boolean },
    perception: { type: Boolean },
    performance: { type: Boolean },
    persuasion: { type: Boolean },
    religion: { type: Boolean },
    sleightOfHand: { type: Boolean },
    stealth: { type: Boolean },
    survival: { type: Boolean }
  }]},
  personalityTraits: { type: String },
  ideals: { type: String },
  bonds: { type: String },
  flaws: { type: String },
  features: { type: [featureSchema] },
  spells: [{ type: [spellSchema] }]


})

const User = mongoose.model('User', userSchema);

module.exports = User;
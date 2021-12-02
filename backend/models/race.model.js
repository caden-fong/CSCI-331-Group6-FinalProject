const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const raceSchema = new Schema({
  name: { type: String }
})

const Race = mongoose.model('Race', raceSchema, 'races');

module.exports = Race;

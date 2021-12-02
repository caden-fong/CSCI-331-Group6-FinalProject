const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const backgroundSchema = new Schema({
  name: { type: String }
})

const Background = mongoose.model('Background', backgroundSchema, 'backgrounds');

module.exports = Background;

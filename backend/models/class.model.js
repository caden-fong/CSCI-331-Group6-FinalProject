const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String },
  class: [],
  subclass: [],
  classFeature: [],
  subclassFeature: []
})

const Class = mongoose.model('Class', classSchema, 'classes');

module.exports = Class;

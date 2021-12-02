
const router = require('express').Router();
let CharacterClass = require('../models/class.model');

router.route('/:name').get((req, res) => {
    CharacterClass.findOne({ name: req.params.name, source: "PHB" })
      .then(characterCharacterClass => res.json(characterCharacterClass))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/').get((req, res) => {
  CharacterClass.find()
      .then(characterCharacterClasses => res.json(characterCharacterClasses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
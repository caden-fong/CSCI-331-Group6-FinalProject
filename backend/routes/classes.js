
const router = require('express').Router();
let CharacterClass = require('../models/class.model');

router.route('/:name').get((req, res) => {
    CharacterClass.findOne({ name: req.params.name })
      .then(characterClass => res.json(characterClass))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/').get((req, res) => {
  CharacterClass.find()
      .then(characterClasses => res.json(characterClasses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
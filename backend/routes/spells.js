
const router = require('express').Router();
let Spell = require('../models/spell.model');

router.route('/:name').get((req, res) => {
    Spell.findOne({ name: req.params.name })
      .then(spell => res.json(spell))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/source/:source').get((req, res) => {
  Spell.find({ source: req.params.source })
    .then(race => res.json(race))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Spell.find()
      .then(spell => res.json(spell))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
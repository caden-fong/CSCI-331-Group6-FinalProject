
const router = require('express').Router();
let Race = require('../models/race.model');

router.route('/:name').get((req, res) => {
    Race.findOne({ name: req.params.name })
      .then(race => res.json(race))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:source').get((req, res) => {
  Race.find({ source: req.params.source })
    .then(race => res.json(race))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').get((req, res) => {
  Race.find()
      .then(race => res.json(race))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
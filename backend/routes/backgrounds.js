
const router = require('express').Router();
let Background = require('../models/background.model');

router.route('/:name').get((req, res) => {
    Background.findOne({ name: req.params.name })
      .then(background => res.json(background))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:source').get((req, res) => {
  Background.find({ source: req.params.source })
    .then(background => res.json(background))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').get((req, res) => {
  Background.find()
      .then(background => res.json(background))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
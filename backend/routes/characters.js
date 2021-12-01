
const router = require('express').Router();
let Character = require('../models/character.model');

router.route('/:id').get((req, res) => {
    Character.findById(req.params.id)
      // .then(character => res.json(character))
      .then(console.log(character))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/user/:id').get((req, res) => {
  Character.find({id: req.params.id})
      .then(characters => res.json(characters))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Character deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(character => {
        character.name = req.body.name;
        character.level = Number(req.body.level);
        character.race = req.body.race;
  
        character.save()
          .then(() => res.json('Character updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
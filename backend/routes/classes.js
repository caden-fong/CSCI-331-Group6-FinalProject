
const router = require('express').Router();
let CharacterClass = require('../models/class.model');

router.route('/:name').get((req, res) => {
    CharacterClass.findOne({ name: req.params.name})
      .then(characterCharacterClass => res.json(characterCharacterClass))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/').get((req, res) => {
  CharacterClass.find()
      .then(characterCharacterClasses => res.json(characterCharacterClasses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('CharacterClass deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(characterCharacterClass => {
        characterCharacterClass.name = req.body.name;
        characterCharacterClass.level = Number(req.body.level);
        characterCharacterClass.race = req.body.race;
  
        characterCharacterClass.save()
          .then(() => res.json('CharacterClass updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
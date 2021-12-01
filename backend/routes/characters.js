
const router = require('express').Router();
let Character = require('../models/character.model');

router.route('/:id').get((req, res) => {
    Character.findById(req.params.id)
      .then(character => res.json(character))
      .then(console.log(character))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/user/:id').get((req, res) => {
  Character.find({id: req.params.id})
      .then(characters => res.json(characters))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Character.findByIdAndDelete(req.params.id)
      .then(() => res.json('Character deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/create/:id').post((req, res) => {
    const newCharacter = new Character({
        user: req.params.id,
        name: req.body.name,
        level: Number(req.body.level),
        race: req.body.race,
        class: req.body.class,
        background: req.body.background,
        proficiencyBonus: Number(req.body.proficiencyBonus),
        hitPoints: Number(req.body.hitPoints),
        speed: Number(req.body.speed),
        hitDice: {
          quantity: Number(req.body.hitDice.quantity),
          dice: req.body.hitDice.dice
        },
        alignment: req.body.alignment,
        stats: {
          strength: Number(req.body.stats.strength),
          dexterity: Number(req.body.stats.dexterity),
          constitution: Number(req.body.stats.constitution),
          intelligence: Number(req.body.stats.intelligence),
          wisdom: Number(req.body.stats.wisdom),
          charisma: Number(req.body.stats.charisma)
        },
        savingThrows: {
          strength: Boolean(req.body.savingThrows.strength),
          dexterity: Boolean(req.body.savingThrows.dexterity),
          constitution: Boolean(req.body.savingThrows.constitution),
          intelligence: Boolean(req.body.savingThrows.intelligence),
          wisdom: Boolean(req.body.savingThrows.wisdom),
          charisma: Boolean(req.body.savingThrows.charisma)
        },
        skills: {
          acrobatics: Boolean(req.body.skills.acrobatics),
          animalHandling: Boolean(req.body.skills.animalHandling),
          arcana: Boolean(req.body.skills.arcana),
          athletics: Boolean(req.body.skills.athletics),
          deception: Boolean(req.body.skills.deception),
          history: Boolean(req.body.skills.history),
          insight: Boolean(req.body.skills.insight),
          medicine: Boolean(req.body.skills.medicine),
          nature: Boolean(req.body.skills.nature),
          perception: Boolean(req.body.skills.perception),
          performance: Boolean(req.body.skills.performance),
          persuasion: Boolean(req.body.skills.persuasion),
          religion: Boolean(req.body.skills.religion),
          sleightOfHand: Boolean(req.body.skills.sleightOfHand),
          stealth: Boolean(req.body.skills.stealth),
          survival: Boolean(req.body.skills.survival)
        },
        personalityTraits: req.body.personalityTraits,
        ideals: req.body.ideals,
        bonds: req.body.bonds,
        flaws: req.body.flaws,
        proficiencies: req.body.proficiencies,
        features: req.body.features,
        spells: req.body.spells
    });

    newCharacter.save()
          .then(() => res.json('Character updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
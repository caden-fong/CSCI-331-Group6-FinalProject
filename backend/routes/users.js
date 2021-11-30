const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({username, password});

    newUser.save()
        .then(() => res.json('Thank you from server!'))
        .catch(err => res.status(400).json('Error: ' + err));      
});

router.route('/login').post((req, res) => {
    const {username, password} = req.body;
    User.findOne({username: username}).then(user => {
        if(user) {
            if(password === user.password){
                const userInfo = {
                    id: user._id,
                    username: user.username
                };
                res.json(userInfo);
            } else {
                res.status(400).json('Error: ' + err);
            }
        } else {
            res.status(400).json('Error: ' + err);
        }
    }).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
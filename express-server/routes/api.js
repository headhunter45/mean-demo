// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// Create mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Create mongoose model

const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works 2');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(err)

        res.status(200).json(users);
    });
});

/* GET one user. */
router.get('/users/:id', (req, res) => {
    console.dir(req.params.id);
    User.findById(req.params.id, (err, users) => {
        if (err) res.status(500).send(err)

        res.status(200).json(users);
    });
});

router.delete('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, users) => {
        if (err) res.status(500).send(err)

        users.remove();

        res.status(200).json({message: 'deleted'});
    })
})

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;

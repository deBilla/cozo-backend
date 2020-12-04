const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    console.log({
        email: req.body.email,
        password: req.body.password,
        ff: user.createdAt
    });

    user.save().then(() => {
        console.log('meow');
        res.json(user);
    });
});

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email,  password: req.body.password}, function(err, data){
        console.log( data );

        if (data) {
            res.send({status: "success"});
        } else {
            res.send({status: "failure"});
        }
    });    
});

router.get('/alluser', (req, res) => {
    User.find({}, function(err, data){
        console.log(">>>> " + data );
        res.send(data);
    });
});

module.exports = router;
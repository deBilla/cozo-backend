const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('This is the post');
    console.log(req.body);
});

router.post('/', (req, res) => {
    console.log(req.body);
});

router.get('/yesterday', (req, res) => {
    res.send('This is the Yesterday post');
});

module.exports = router;
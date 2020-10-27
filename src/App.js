const express = require('express');
require('dotenv/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes  = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();
app.disable("x-powered-by"); // Disable the powered by header to make attackers hard to find the tech stack
app.use(bodyParser.json({
    extended: true
}));

// Database connection
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('MongoDB connected');
    }
);


// Middleware
app.use('/post', postRoutes);
app.use('/user', userRoutes);

// Routes
app.get('/', (req, res) => res.send('This is the dummy page'));

// Listening to the port
app.listen(3000, () => console.log('Listening in port 3000'));
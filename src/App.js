const express = require('express');
require('dotenv/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PostRoutes  = require('./routes/posts');
const UserRoutes = require('./routes/users');
const AuthRoutes = require('./routes/auth');

const app = express();
app.disable("x-powered-by"); // Disable the powered by header to make attackers hard to find the tech stack
app.use(bodyParser.json({
    extended: true
}));

// Database connection
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => console.log("success db"))
.catch((error) => console.log(error));


// Middleware
app.use('/post', PostRoutes);
app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);

// Routes
app.get('/', (req, res) => res.send('This is the dummy page'));

// Listening to the port
app.listen(3000, () => console.log('Listening in port 3000'));
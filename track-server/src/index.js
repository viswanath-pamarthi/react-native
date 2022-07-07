require('./models/User');//executed only once
require('./models/Track');//should be run at least runce

const express = require('express');
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');//automatically parses info of body property of incoming request
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());//should be before authroutes so that the json is parsed before resquest is sent to authroutes by express
app.use(authRoutes);
const mongoUri = 'mongodb+srv://username:password@cluster0.hpdss.mongodb.net/?retryWrites=true&w=majority';
app.use(trackRoutes);
mongoose.connect(mongoUri, {
    // useNewUrlParse: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
});

mongoose.connection.on('error', err => {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
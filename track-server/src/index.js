require('./models/User');//executed only once
const express = require('express');
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');//automatically parses info of body property of incoming request
const app = express();

app.use(bodyParser.json());//should be before authroutes so that the json is parsed before resquest is sent to authroutes by express
app.use(authRoutes);
const mongoUri = 'mongodb+srv://username:password@cluster0.hpdss.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    // useNewUrlParse: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
});

mongoose.connection.on('error', err => {
    console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
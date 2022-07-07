const mongoose = require('mongoose');

//tell mongoose about Users Collection in Mongo DB
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);//associate user schema with mongoose
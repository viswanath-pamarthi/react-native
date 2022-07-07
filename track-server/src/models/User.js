const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

//this is referred as pre save hook, it ran before we attempt to save an instance of user in to our database
// we passed the second parameter to pre a "function" keyword function instead of a arrow based function. Because we have to use this (user instance) keyword inside the function, and if we use arrow function "this" would refer this User.Js
//instead of the user instance
userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    //10 is how complex is the salt
    bcrypt.genSalt(10, (err, salt) => {

        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        })

    });

});

userSchema.methods.comparePassword = function (candidatePassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            if (!isMatch) {
                return reject(false);
            }

            resolve(true);
        });
    });
};

mongoose.model('User', userSchema);//associate user schema with mongoose
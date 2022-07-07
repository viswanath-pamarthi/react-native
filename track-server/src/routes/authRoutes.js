const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email: email, password: password });
        await user.save();//Save user to Mongo Db hosted instance, if the user collection desn't exist on mongodb , Mongoose will create a new collection in MondoDb
        res.send('You made a post request');
    }
    catch (err) {
        return res.status(422).send(err.message);//422 status code, user sent us invalid data
    }
});

module.exports = router;
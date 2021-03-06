const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email: email, password: password });
        await user.save();//Save user to Mongo Db hosted instance, if the user collection desn't exist on mongodb , Mongoose will create a new collection in MondoDb

        const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");//generate JWT token
        res.send({ token: token });
    }
    catch (err) {
        return res.status(422).send(err.message);//422 status code, user sent us invalid data
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password' });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(422).send({ error: 'invalid email or password' });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
        res.send({ token: token });
    }
    catch (err) {
        return res.status(422).send({ error: 'invalid email or password' });
    }

});

module.exports = router;
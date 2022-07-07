/* 
Validate the requests whether they have a valid JWT token, if not valid rejetc the request
*/

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

//request, response, next(a signal that the request can be sent to the next middleware or request handler if the request is valid)
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    //authorization === 'Bearer jskdfjksdjfksdfjksdjf'

    if (!authorization) {
        return res.status(401).send({ error: 'you must be logged in.' });
    }

    const token = authorization.replace('Bearer ', '');
    //an err will be returned if verification failed, if pass then request payload id returned
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {

        if (err) {
            return res.status(401).send({ error: 'you must be logged in.' });
        }

        const { userId } = payload;

        //Fetch the user with userId in the JWT token from MongoDb , because we created a JWT token with UserId included in it
        const user = await User.findById(userId);

        req.user = user;
        next();
    });
};
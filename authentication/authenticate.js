const jwt = require('jsonwebtoken');

const jwtKey = require('../configuration/secrets.js');

function authenticate(req, res, next) {
    const token = req.headers['authorization'];

    if(token) {
        jwt.verify(token, jwtKey, (error, decoded) => {
            if (error) {
                return res.status(401).json(error);
            } else req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({
            error: 'No token provided. It must be set on the Authorization header'
        })
    }
}

module.exports = { authenticate };
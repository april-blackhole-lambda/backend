const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }; 

    const options = {
        expiresIn: '1d'
    }; 

    return jwt.sign(payload, secrets, options); 
}

module.exports = { generateToken }; 

const bcrypt = require('bcryptjs');
const tokenservice = require('./tokenservice.js');
const Users = require('./Users.js');

function register(req, res) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash; 

    Users.add(user) 
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

function login(req, res) {
    let { username, password } = req.body; 
    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = tokenservice.generateToken(user);
            res.status(200).json({
                message: 'Welcome to the Abyss!', 
                user_id: user.id,
                token
            });
        } else {
            res.status(401)
            .json({
                message: 'Invalid Credentials'
            })
        }
    }) 
    .catch(error => {
        res.status(500).json(error);
    })
}

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
}
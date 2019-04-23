const express = require('express');
const cors = require('cors'); 
//const helmet = require('helmet'); 
const { authenticate } = require('../authentication/authenticate');
const RegLoginRoutes = require('../configuration/loginRegistrationRoutes.js');
const NotesRoutes = require('../configuration/notesRoutes.js');
const server = express(); 

//server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/notes', authenticate, NotesRoutes); 
RegLoginRoutes(server);

server.use('/', (req, res) => {
    res.send('Api is functioning!');
})

module.exports = server; 
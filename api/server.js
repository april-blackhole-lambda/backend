const express = require('express');
const cors = require('cors'); 
const helmet = require('helmet'); 
const Routes = require('../configuration/loginRegistrationRoutes.js');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

Routes(server);

module.exports = server; 
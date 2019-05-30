// Configure Imports
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');


// Configure Knex
const db = knex(knexConfig);


// Configure Server
const server = express();


// Configure Middleware
server.use(express.json());
server.use(helmet());


// Endpoints


// Stretch


// Server listening
const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`*** Server is running on port ${PORT}`);
});

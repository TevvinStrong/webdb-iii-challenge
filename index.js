// Imports
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

// Configure Knex


// Configure database

const server = express();

server.use(express.json());
server.use(helmet());

// Endpoints


// Stretch


// Server listening
const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`*** Server is running on port ${PORT}`);
});

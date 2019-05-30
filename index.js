// Configure Imports line 1 - 20 including endpoints in (server.js) file.
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');


// Configure Server
const server = express();


// Configure Middleware
server.use(express.json());
server.use(helmet());

// Sanity test
server.get('/', (req, res) => {
    res.send("<h1>You are not going Crazy!!!!!</h1>");
});

// Endpoints


// Stretch


// Server listening normanly this would be in it's own file(index.js).
const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`*** Server is running on port ${PORT}`);
});
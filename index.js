// Configure Imports line 1 - 20 including endpoints in (server.js) file.
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


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
server.post('/api/cohorts', (req, res) => {
    db('cohorts').insert(req.body, ['name'])
        .then(cohort => {
            res.status(200).json(cohort);
        })
        .catch(error => {
            res.status(404).json({ error: "Unable to add to the database try again.", error });
        });
});

server.get('/api/cohorts', (req, res) => {
    db('cohorts')
        .then(cohort => {
            res.status(200).json(cohort);
        })
        .catch(error => {
            res.status(404).json({ error: "Unable to retrieve the specified request from the database.", error });
        });
});

server.get('/api/cohorts/:id', (req, res) => {
    db('cohorts').where({ id: req.params.id })
        .then(cohort => {
            if (cohort) {
                res.status(200).json(cohort);
            } else {
                res.status(404).json({ message: "Cohort not found." })
            }
        })
        .catch(error => {
            res.status(500).json({ error: "The specified id does not exists", error });
        })
});

server.get('/api/cohorts/:id/students', (req, res) => {

});

server.put('/api/cohorts/:id', (req, res) => {
    db('cohorts').where({ id: req.params.id }).update(req.body)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record updated` });
            } else {
                res.status(404).json({ message: "Cohort does not exisit." });
            }
        })
        .catch(error => {
            res.status(500).json({ error: "Unable to updates the specified id.", error });
        })
});

server.delete('/api/cohorts/:id', (req, res) => {
    db('cohorts').where({ id: req.params.id }).del(req.body)
        .then(count => {
            if (count > 0) {
                res.status(200).json(`${count} record deleted`);
            } else {
                res.status(404).json({ message: "Cohort does not exists" });
            }
        })
        .catch(error => {
            res.status(500).json({ error: "Unable to delete the specified id.", error });
        })
});

// Stretch


// Server listening normanly this would be in it's own file(index.js).
const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`*** Server is running on port ${PORT}`);
});

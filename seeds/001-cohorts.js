// npx knex seed:make <name>
// npx knex seed:run

exports.seed = function (knex, Promise) {
  // truncate Deletes ALL existing entries from the table and also resets the id.
  return knex('cohorts').truncate() // Add table name.
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([ // Add table name and the data to test
        { id: 1, name: 'Webpt4' },
        { id: 2, name: 'Webpt3' },
        { id: 3, name: 'Web18' },
        { id: 4, name: 'Web15' },
        { id: 5, name: 'Webpt2' },
        { id: 6, name: 'Webpt1' },
        { id: 7, name: 'Webpt5' }
      ]);
    });
};

// npx knex init creates knexfile.js.
// Ok to delete production and stagging.
// Add useNullAsDefault: true,.
// Configure filename to our database.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.db3',
    },
    useNullAsDefault: true, // needed for a sqlite3 database
  }
};

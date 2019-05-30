// Knex migrate:make <name> to create migration.
// knex migrate:latest to add tables to our database(sqlite3)
// knex migrate:rollback to revert back to the last migration performed

// Create table
exports.up = async function (knex) {
    await knex.schema.createTable('cohorts', (tbl) => {
        // Columns
        tbl.increments('id'); // id column = increments/primary key.
        tbl.string('name', 128).unique().notNullable(); // name column = unique/not null
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('cohorts');
};


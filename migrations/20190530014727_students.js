// Knex migrate:make <name> to create migration.
// knex migrate:latest to add tables to our database(sqlite3)
// knex migrate:rollback to revert back to last migration performed

// Create table
exports.up = async (knex) => {
    await knex.schema.createTable('students', (tbl) => {
        // Columns
        tbl.increments('id');  // id column = increments/primary key.
        tbl.string('name', 128).unique().notNullable(); // name column = unique/not null
        // Foeign key connects to the id column in the cohorts table.
        tbl.integer('cohort_id').unsigned().refrences('id').inTable('cohorts').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('students');
};


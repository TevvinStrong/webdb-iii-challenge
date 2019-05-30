// Knex migrate:make <name> to create migration.
// knex migrate:latest to add tables to our database(sqlite3)
// knex migrate:rollback to revert back to the beginning

exports.up = async function (knex) {
    // Create Tables.
    await knex.schema.createTable('cohorts', (tbl) => {
        tbl.increments('id'); // when calling increments to id = primary key & auto increments.
        tbl.string('name', 128).unique().notNullable();
    })

    await knex.schema.createTable('students', (tbl) => {
        tbl.increments('id'); // when calling increments to id = primary key & auto increments.
        tbl.integer('cohort_id');
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('students');
    await knex.schema.dropTableIfExists('cohorts');
};


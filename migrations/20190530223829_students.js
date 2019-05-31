
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', (tbl) => {
        // Columns
        tbl.increments('id');  // id column = increments/primary key.
        tbl.string('name', 128).unique().notNullable(); // name column = unique/not null
        // Foeign key connects to the id column in the cohorts table.
        tbl.integer('cohort_id')
            .references('id')
            .inTable('cohorts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};

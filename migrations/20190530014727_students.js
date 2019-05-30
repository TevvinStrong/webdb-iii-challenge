
exports.up = async (knex) => {
    await knex.schema.createTable('students', (tbl) => {
        tbl.increments('id'); // when calling increments to id = primary key & auto increments.
        tbl.string('name', 128).unique().notNullable();
        tbl.integer('cohort_id');
    })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('students');
};


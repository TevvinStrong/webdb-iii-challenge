
exports.up = function (knex, Promise) {
    return knex.schema.createTable('cohorts', (tbl) => {
        // Columns
        tbl.increments('id'); // id column = increments/primary key.
        tbl.string('name', 128).unique().notNullable(); // name column = unique/not null
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};

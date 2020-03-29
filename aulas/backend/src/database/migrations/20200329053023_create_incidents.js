
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        //increment
        table.increments();
        //campos
        table.string('title').notNullable();
        table.string('desc').notNullable();
        table.decimal('value').notNullable();
        //relacionamento
        table.string('omg_id').notNullable();

        table.foreign('omg_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

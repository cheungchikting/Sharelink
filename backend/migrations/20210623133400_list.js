exports.up = function (knex) {
    return knex.schema.createTable("list", (table) => {
        table.increments();
        table.string("url");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("list")
};

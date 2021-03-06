exports.up = function (knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments();
        table.string("email");
        table.string("password");
        table.string("facebookid");
        table.string("accessToken");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("user")
};

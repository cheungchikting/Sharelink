
exports.seed = function(knex) {
  return knex('user').del()
    .then(function () {
      return knex('user').insert([
        {email: 'justin@gamil.com', password: "123123"},
        {email: 'cheung@gamil.com', password: "321321"},
      ]);
    });
};

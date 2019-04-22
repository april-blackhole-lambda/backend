
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('folders').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('folders').insert([
        { user_id: 1, name: 'test-folder'}
      ]);
    });
};

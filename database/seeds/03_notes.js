
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'today sucks', text_body: 'today super sucks', folder_id: 1, user_id: 1, saved: true }
      ]);
    });
};

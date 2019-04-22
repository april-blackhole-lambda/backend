
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', table => {
      table.increments();

      table.string('username')
      .notNullable()
      .unique(); 

      table.string('password')
      .notNullable(); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};


// creates 'users' table with ID, username, and password columns. 
// usernames must be unique
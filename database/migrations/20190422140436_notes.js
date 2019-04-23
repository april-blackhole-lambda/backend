
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('notes', table => {
      table.increments();

      table.string('title')
      .notNullable();

      table.text('text')
      .notNullable();

      table.string('category')
      .notNullable()
      .defaultTo('uncategorized') 
    
      table.integer('days_to_destruct')
      .unsigned()
      .notNullable()
      .defaultTo(1)

      table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE') 

  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('notes')
};
 
// Folders table has a user_id FK, an ID and a name 

// Notes table has an id, a title, a text, a category, a days_to_destruct, and a user_id 


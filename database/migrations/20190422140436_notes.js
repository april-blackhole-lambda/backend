
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('folders', table => {
      table.increments();
      
      table.string('name')
      .notNullable();

      table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE') 
  })
  .createTable('notes', table => {
      table.increments();

      table.string('title')
      .notNullable();

      table.text('text_body')
      .notNullable();

      table.datetime('timestamp', options={useTz: true, precision: 6}).defaultTo(knex.fn.now()); 

      table.boolean('saved')
      .defaultTo(false);
    
      table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE') 
    
      table.integer('folder_id') 
      .unsigned()
      .references('id')
      .inTable('folders')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('notes')
  .dropTableIfExists('folders')
};
 
// Folders table has a user_id FK, an ID and a name 

// Notes table has an id, a title, a text_body, a timestamp (default to now), a saved boolean, a user_id FK, and a folder_id FK. 

exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.integer('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable()
      .index();
    table.string('title')
    table.string('body')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};

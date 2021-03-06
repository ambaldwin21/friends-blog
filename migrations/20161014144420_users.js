exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name')
    table.string('last_name')
    table.string('image')
    table.string('email')
      .notNullable()
      .unique();
    table.specificType('hash', 'character(60)')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

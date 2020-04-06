
exports.up = function(knex) {
  return knex.schema.withSchema('medpoint').createTable('ongs',function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.withSchema('medpoint').dropTable('ongs');
};


exports.up = function(knex) {
    return knex.schema.withSchema('medpoint').createTable('incidents',function(table) {
        table.increments();
    
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('valeu').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('medpoint.ongs');
    
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.withSchema('medpoint').dropTable('incidents');
  };
  
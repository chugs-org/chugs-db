
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('product_image', table => {
      table.bigIncrements('id').primary();
      table.string('url');
      table.integer('product_id');
      table.foreign('product_id').references('product.id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('product_image')
};

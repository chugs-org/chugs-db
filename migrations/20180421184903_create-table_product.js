exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('product', prodTable => {
      prodTable.bigIncrements('id').primary();
      prodTable.string('name');
      prodTable.string('description');
      prodTable.float('price');
      prodTable.integer('quantity');
      prodTable.integer('size');
      prodTable.string('brand');
      prodTable.float('abv');
      prodTable.integer('number_in_stock');
      prodTable.string('type');
      prodTable.foreign('type').references('product_type.value');
    })
    .createTable('enum_product-type', enumTable => {
      enumTable.string('value').notNullable().primary();
      enumTable.int('id').notNullable().defaultTo(0);
    });
};

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('product')
    .dropTableIfExists('enum_product-type')
};


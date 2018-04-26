import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema
    .createTable('product_image', table => {
      table.bigIncrements('id').primary();
      table.string('url');
      table.integer('product_id');
      table.foreign('product_id').references('product.id');
    })
};

export function down(knex: Knex) {
  return knex.schema
    .dropTableIfExists('product_image')
};

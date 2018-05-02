import * as Knex from "knex";

export function up(knex: Knex) {
  return knex.schema
    .createTable('funny-nicknames', prodTable => {
      prodTable.bigIncrements('id').primary();
      prodTable.string('nickname');
    })
};

export function down(knex: Knex) {
  return knex.schema
    .dropTableIfExists('funny-nicknames')
};

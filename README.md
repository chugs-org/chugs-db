# chugs-db

This is the change management tool for the chugs database. Migrations can be created, ran and rolled back using this tool.

## Getting started
Install Knex (http://knexjs.org/)

```
yarn global add knex
```

## Creating a migration

```
knex migrate:make <migration_name>
```

This will create a JavaScipt file in the `/migrations` folder with an `up` and `down` function. Simply add code to the `up` functions to describe how the database should look if this migration is applied and and add code to the `down` function to describe how the database should look if this migration is rolled back.

### Example

```
// creating the table

exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('product', table => {
      table.bigIncrements('id').primary();
      table.string('name');
      table.string('description');
      table.float('price');
      table.int('quantity');
      table.int('size');
    })
};

// drop the table
exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('product')
};
```

## Running a migration

```
knex migrate:latest
```

This will run all migration scripts against the database.

## Rolling back a migration

```
knex migrate:rollback
```

This will remove migration scripts from the database one at a time.

## Environments

The `knexfile.js` file located at the top level of this repository describes configuration for databases deployed in different environments. `Sqlite3` is used for development which means that rather than a real database, a file is created in this folder that can be opened using `SQLiteStudio`.

SQLiteStudio can be installed by doing the following:

```
brew install sqlite3
```

## More reading
http://knexjs.org/#Migrations
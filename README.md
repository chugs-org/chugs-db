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

## Creating a seed

```
knex seed:make <seed_name>
```

The folder structure for seeds is such that we have a `/seeds` folder and within that we have sub-folders representing different environments. `e.g. /seeds/dev`

When this command is executed, a JavaScript file named after the name given is created in the appropriate directory. Database entries can be entered here as JSON objects.

### Example
```
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, name: 'test-name1', description: 'test-description1'},
        { id: 2, value: 'test-name2', description: 'test-description2' },
        { id: 3, value: 'test-name3', description: 'test-description3' },
        { id: 4, value: 'test-name4', description: 'test-description4' }
      ]);
    })
```

`.then()` functions can be chained on as required if seeding multiple tables.

## Running a seed

```
knex seed:run
```

This will persist the data from seed files to the database.

## Environments

The `knexfile.js` file located at the top level of this repository describes configuration for databases deployed in different environments. `Sqlite3` is used for development which means that rather than a real database, a file is created in this folder that can be opened using `SQLiteStudio`.

SQLiteStudio can be installed by doing the following:

```
brew install sqlite3
```

## More reading
http://knexjs.org/#Migrations
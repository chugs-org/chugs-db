import * as Knex from "knex";

export function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('funny-nicknames').del()
    .then(()=> (
        knex('funny-nicknames').insert([
        {
            id: 1,
            nickname: 'Jimbo'
        },
        {
            id: 2,
            nickname: 'Big Joe'
        },
        {
            id: 3,
            nickname: 'Wee Joe'
        },
        {
            id: 4,
            nickname: 'Dingleberry'
        },
        {
            id: 5,
            nickname: 'Pastie Face'
        },
        {
            id: 6,
            nickname: 'Bunter'
        },
        {
            id: 7,
            nickname: 'Horse'
        },
        {
            id: 8,
            nickname: 'Chicken Burger'
        },
        {
            id: 9,
            nickname: 'Walter'
        }
        ])
    )
  )
}

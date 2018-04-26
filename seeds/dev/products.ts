import * as Knex from 'knex';

export function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('enum_product-type').del()
    .then(() => (
      // Inserts seed entries
      knex('enum_product-type').insert([
        { id: 1, value: 'beer' },
        { id: 2, value: 'cider' },
        { id: 3, value: 'spirits' },
        { id: 4, value: 'wine' }
      ])
    ))
    .then(() => (
      knex('product').del()
        .then(()=> (
          knex('product').insert([
            {
              id: 1,
              name: 'Heineken',
              description: 'Heineken Bottles 12x330ml',
              price: 11.00,
              quantity: 12,
              size: 330,
              brand: 'Heineken',
              abv: 5,
              number_in_stock: 25,
              type: 'beer'
            },
            {
              id: 2,
              name: 'Bombay Sapphire Gin 1 Litre',
              description: 'The tantalising, smooth and complex taste that you experience when you sip Bombay Sapphire gin,is described as fresh citrus and juniper flavours combined with an elegant light spicy finish.',
              price: 27.50,
              quantity: 1,
              size: 1000,
              brand: 'Bombay Sapphire',
              abv: 40,
              number_in_stock: 5,
              type: 'spirits'
            },
            {
              id: 3,
              name: 'Dino Pinot Grigio 75Cl',
              description: 'Crisp and fruity, this wine created from Pinot Grigio grapes grown in northen Italy giving it fresh flavours of citrus and red apple. Serve chilled as an aperitif or with lightly spicied food.',
              price: 5.50,
              quantity: 1,
              size: 750,
              brand: 'Dino',
              abv: 12,
              number_in_stock: 11,
              type: 'wine'
            }
          ])
        )
      )
    )
  )
}
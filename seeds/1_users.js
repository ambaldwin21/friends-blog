exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        first_name: 'Rachel',
        last_name: 'Green',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Rachel_Green_Rachel_haircut.jpg/170px-Rachel_Green_Rachel_haircut.jpg',
        email: 'rachel@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        first_name: 'Monica',
        last_name: 'Geller',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Courteney_Cox_as_Monica_Geller.jpg/240px-Courteney_Cox_as_Monica_Geller.jpg',
        email: 'monica@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        first_name: 'Ross',
        last_name: 'Geller',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/David_Schwimmer_as_Ross_Geller.jpg/240px-David_Schwimmer_as_Ross_Geller.jpg',
        email: 'ross@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        first_name: 'Phoebe',
        last_name: 'Buffay',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Friendsphoebe.jpg/250px-Friendsphoebe.jpg',
        email: 'phoebe@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        first_name: 'Chandler',
        last_name: 'Bing',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Matthew_Perry_as_Chandler_Bing.jpg/200px-Matthew_Perry_as_Chandler_Bing.jpg',
        email: 'chandler@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        first_name: 'Joey',
        last_name: 'Tribbiani',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg/240px-Matt_LeBlanc_as_Joey_Tribbiani.jpg',
        email: 'joey@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      }]);
    });
};

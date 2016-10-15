exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        first_name: 'Sage',
        last_name: 'Catabrigga-Alosa',
        image: 'http://thebackcountrybums.com/wp-content/uploads/2013/11/169_1sage_cattabriga_alosa_portrait_white_seamless.jpg',
        email: 'sage@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        first_name: 'Lynsey',
        last_name: 'Dyer',
        image: 'https://i.ytimg.com/vi/OPmTB2F4Eys/maxresdefault.jpg',
        email: 'lynsey@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      }]);
    });
};

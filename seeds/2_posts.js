exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([{
        user_id: 1,
        title: 'Worlds Best Male Freeskier',
        body: 'Red hair crookshanks Marauder’s Map sunshine daisies butter mellow. Honeydukes, Eeylops Owl Emporium expecto patronum floo powder. Gillyweed, Godric’s Hollow.'
      },
      {
        user_id: 2,
        title: 'Worlds Best Female Freeskier',
        body: 'Leprechaun O.W.L. Hungarian Horntail, Essence of Dittany Gringotts Harry Potter. Green eyes Remembrall horcrux. Ravenclaw, Professor Sinistra time-turner.'
      }]);
    });
};

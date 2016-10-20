exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([{
        user_id: 1,
        title: 'The One with the East German Laundry Detergent',
        body: 'Red hair crookshanks Marauder’s Map sunshine daisies butter mellow. Honeydukes, Eeylops Owl Emporium expecto patronum floo powder. Gillyweed, Godric’s Hollow.'
      },
      {
        user_id: 2,
        title: 'The One Where Heckles Dies',
        body: 'Leprechaun O.W.L. Hungarian Horntail, Essence of Dittany Gringotts Harry Potter. Green eyes Remembrall horcrux. Ravenclaw, Professor Sinistra time-turner.'
      },
      {
        user_id: 3,
        title: 'The One Where Monica and Richard are Just Friends',
        body: 'Red hair crookshanks Marauder’s Map sunshine daisies butter mellow. Honeydukes, Eeylops Owl Emporium expecto patronum floo powder. Gillyweed, Godric’s Hollow.'
      },
      {
        user_id: 4,
        title: 'The One with the Fake Party',
        body: 'Leprechaun O.W.L. Hungarian Horntail, Essence of Dittany Gringotts Harry Potter. Green eyes Remembrall horcrux. Ravenclaw, Professor Sinistra time-turner.'
      },
      {
        user_id: 5,
        title: 'The One Where Everybody Finds Out',
        body: 'Red hair crookshanks Marauder’s Map sunshine daisies butter mellow. Honeydukes, Eeylops Owl Emporium expecto patronum floo powder. Gillyweed, Godric’s Hollow.'
      },
      {
        user_id: 6,
        title: 'The One With Monicas Boots',
        body: 'Leprechaun O.W.L. Hungarian Horntail, Essence of Dittany Gringotts Harry Potter. Green eyes Remembrall horcrux. Ravenclaw, Professor Sinistra time-turner.'
      }]);
    });
};

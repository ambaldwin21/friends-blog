var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('users').then((users) => {
    res.render('users', {users: users});
  })
});

router.get('/:id', (req, res, next) => {
  knex('users').where('users.id', req.params.id).first()
  .then((user) => {
    res.render('user', {user: user});
  })
});

router.get('/new', (req, res, next) => {
  res.render('new-user');
})


router.post('/', (req, res, next) => {
  let newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    image: req.body.image,
    email: req.body.email
  }
  knex('users').insert(newUser,'*')
    .then((user) => {
    res.redirect('/users')
  })
});

router.put('/:id', (req, res) => {
    return knex('users')
    .where('users.id', req.body.id)
    .update(req.body).then(() => {
    res.redirect('/users')
  })
})

router.delete('/:id', (req, res) => {
  knex('users')
  .where('users.id', req.params.id).del()
  .then(() => {
    res.json({'response': 'user deleted'})
  })
})

router.get('/:id/edit', (req, res) => {
  knex('users').where('users.id', req.params.id).first()
  .then((user) => {
    res.render('edit-user', {user: user});
  })
})

module.exports = router;

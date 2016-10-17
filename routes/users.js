var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('users').then((users) => {
    res.render('users', {users: users});
    // console.log(users);
  })
});

router.get('/:id', (req, res, next) => {
  knex('users').where('users.id', req.params.id).first()
  .then((user) => {
    res.render('user', {user: user});
  })
});

router.get('/new', (req, res) => {
  res.render('new-user')
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

module.exports = router;

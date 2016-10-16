var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('users').then((users) => {
    res.send(users);
    // console.log(users);
  })
});

module.exports = router;

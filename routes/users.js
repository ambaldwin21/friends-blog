var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'this is the users page/route' });
});

module.exports = router;

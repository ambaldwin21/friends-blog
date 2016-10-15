var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'This is the posts page/route' });
});

module.exports = router;

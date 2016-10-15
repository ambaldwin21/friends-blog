var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('comments', { title: 'this is the comments page/route' });
});

module.exports = router;

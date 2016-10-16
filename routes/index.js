var express = require('express');
var router = express.Router();
const knex = require('../knex');
var cookieSession = require('cookie-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Hello, baby!' });
// });

router.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['email']
  }));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/posts',
    failureRedirect: '/posts'
  }));

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router;

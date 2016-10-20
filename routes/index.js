var express = require('express');
var router = express.Router();
const knex = require('../knex');
var cookieSession = require('cookie-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt');


router.get('/', (req, res, next) => {
    res.render('index')
});

router.post('/', (req, res, next) => {
    knex('users')
        .where('email', req.body.email)
        .first()
        .then((user) => {
            var passwordMatch = bcrypt.compareSync(req.body.password, user.hash)
            if (passwordMatch == false) {
                res.send('Bad email or password')
            } else {
                req.session.userInfo = user
                console.log(req.session.userInfo);
                res.redirect('posts')
            }
        })
        .catch((err) => {
            next(err);
        })
});

router.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['email']
  }));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/posts',
    failureRedirect: '/posts'
  }));
//
// router.delete('/', (req, res, next) => {
//   req.session = null;
//   res.send('nulled')
// });

router.get('/logout', ((req, res, next) => {
    req.session = null;
    res.redirect('/');
}))


module.exports = router;

var express = require('express');
var router = express.Router();
const knex = require('../knex');
var cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
    res.render('signup')
});

router.post('/', (req, res, next) => {
  console.log('req.body:', req.body);
    knex('users')
        .where('email', req.body.email)
        .then((user) => {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 12)
                const newUser = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    image: req.body.image,
                    hash: hashed_password
                }

                knex('users')
                    .insert(newUser, '*')
                    .then((users) => {
                        const id = users[0].id
                        knex('users')
                            .where('id', id)
                            .first()
                            .then((returnUserObject) => {
                                req.session.userInfo = returnUserObject;
                                res.redirect('posts');
                            })
                    })
            } else {
                res.render('error')
            }
        })
})

module.exports = router;

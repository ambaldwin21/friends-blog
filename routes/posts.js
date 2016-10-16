var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('posts').then((posts) => {
    res.send(posts);
    // console.log(users);
  })
});

router.get('/:id', (req, res, next) => {
  knex('posts').where('posts.id', req.params.id).first()
  .then((post) => {
    res.send(post);
  })
});

router.post('/', (req, res, next) => {
  let newPost = {
    user_id: req.session.userInfo,
    title: req.body.title,
    body: req.body.body
  }
  console.log(newPost);
  knex('posts').insert(newPost,'*')
    .then((posted) => {
    res.send(posted)
    console.log(posted);
  })
});

module.exports = router;

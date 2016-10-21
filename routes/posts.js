var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('posts')
  .join('users', 'posts.user_id', 'users.id')
  .select('posts.id as postId', 'users.id as userId', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody')
  .then((posts) => {
    res.render('posts', {posts: posts});
  })
});

router.get('/new', (req, res, next) => {
  res.render('new-post');
})

router.get('/:id', (req, res, next) => {
  knex('posts')
  .join('users', 'posts.user_id', 'users.id')
  .select('posts.id as postId', 'users.id as userId', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody')
  .where('posts.id', req.params.id).first()
  .then((post) => {
    res.render('post', {post: post});
  })
});


router.post('/', (req, res, next) => {
  // console.log(req.session.userInfo);
  let newPost = {
    user_id: req.session.userInfo.id,
    title: req.body.title,
    body: req.body.body
  }
  // console.log(newPost);
  if (newPost.title === "" || newPost.body === "") {
        res.send('Please enter a title and some text!')
    } else {
      knex('posts').insert(newPost,'*')
        .then(() => {
        res.redirect('/posts')
      })
    }
});

router.put('/:id', (req, res) => {
  console.log(req.body);
    return knex('posts')
    .where('posts.id', req.body.id)
    .update(req.body).then(() => {
    res.redirect('/posts')
  })
})

router.delete('/:id', (req, res) => {
  knex('posts')
  .where('posts.id', req.params.id).del()
  .then(() => {
    res.json({'response': 'post deleted'})
  })
})

router.get('/:id/edit', (req, res) => {
  knex('posts')
  .join('users', 'posts.user_id', 'users.id')
  .select('posts.id as postId', 'users.id as userId', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody')
  .where('posts.id', req.params.id).first()
  .then((post) => {
    res.render('edit-post', {post: post});
  })
})

module.exports = router;

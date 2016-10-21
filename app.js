if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');
var signup = require('./routes/signup');
var db = require('./db/api')

var app = express();
app.use(passport.initialize());

passport.use(new FacebookStrategy({
  clientID: '1296493123736207',
  clientSecret: '54a5c28e3b0fd0cd37d19c04c6c542a6',
  callbackURL: "https://friends-blog.herokuapp.com/",
  profileFields: ['id', 'name', 'profileUrl', 'email'],
  enableProof: true,
  passReqToCallback: true
},

  function(req, accessToken, refreshToken, profile, cb1) {
    db.createOrLogin(profile, (err, user) => {
      req.session.userInfo = user;
      return cb1(null, user);
    })
  }
))

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(cookieSession({
    name: "ski_blog",
    secret: process.env.SESSION_SECRET,
    secureProxy: app.get('env') === 'production'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/posts', posts);
app.use('/signup', signup);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(process.env.PORT || '3000');
// server.on('error', onError);
// server.on('listening', onListening);


module.exports = app;

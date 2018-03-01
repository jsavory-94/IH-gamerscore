const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const userStats = require('./routes/user-stats');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const session    = require('express-session');
const passport   = require('passport');
const passportSetup = require('./config/passport');
passportSetup(passport);

mongoose.connect('mongodb://localhost/back');

var app = express();

// view engine setup

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));
app.use('/', authRoutes);
app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user-stats', userStats);

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({error: 'not found'});
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({error: 'unexpected'});
  }
});

module.exports = app;

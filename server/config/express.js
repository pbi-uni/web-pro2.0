const path = require('path');
const express = require('express');
const httpError = require('http-errors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cors=require('cors')
const config = require('./config');
const routes = require('../routes/index.route');
const passport = require('./passport')
const cookieSession=require('cookie-session')


const app = express();
 app.use(cookieSession(      //storing cookies
     {
         maxAge:24*60*60*1000,
         keys:config.jwtSecret
     }
 ))





if (config.env === 'development') {
  app.use(logger('dev'));  
     }     //log to console

// Choose what fronten framework to serve the dist from
// var distDir = '../../dist/';
// if (config.frontend == 'react'){
//   distDir ='../../node_modules/material-dashboard-react/dist'
//  }else{
//   distDir ='../../dist/' ;
//  }
 distDir ='../../dist/';

app.use(express.static(path.join(__dirname, distDir)))
app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'));
});


 


app.use(bodyParser.json());       // express.json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// app.use(compress());            // used for compressing responses
// app.use(methodOverride());     // used for put and delete requests

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());


app.use(passport.initialize());


// API router
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404)
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {

  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map(e => e.message).join("; ");
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message
  });
  next(err);
});

module.exports = app;


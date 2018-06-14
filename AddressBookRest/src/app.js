const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const contactRouter = require('./api/contact');

const app = express();

if (!config.production) {
  app.use(morgan('dev'));
}

app.use('/api/contacts', contactRouter);

module.exports = app;

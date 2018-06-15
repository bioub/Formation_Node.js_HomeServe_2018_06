const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const contactRouter = require('./api/contact');
const societeRouter = require('./api/societe');
const notFound = require('./api/middlewares/not-found');
const errorHandler = require('./api/middlewares/error-handler');

const app = express();

if (!config.production) {
  app.use(morgan('dev'));
}

app.use('/api/contacts', contactRouter);
app.use('/api/societes', societeRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

const express = require('express');
const logger = require('morgan');
const controllers = require('./controllers');
const { errorHandler } = require('./lib/error-handler');

const app = express();

app.use(logger('dev'));

app.use('/stations', controllers);

app.use(errorHandler);

module.exports = app;

const express = require('express');
const app = express();
const currencyExchangeRoutes = require('./api/routes/currency_exchange');

app.use('/', currencyExchangeRoutes);

module.exports = app;
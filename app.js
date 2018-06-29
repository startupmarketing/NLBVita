const express = require('express');
const app = express();
const currencyExchangeRoutes = require('./api/routes/currency_exchange');

app.use('/currency_exchange', currencyExchangeRoutes);

module.exports = app;
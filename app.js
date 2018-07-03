const express = require('express');
const app = express();
const currencyExchangeRoutes = require('./api/routes/currency_exchange');
const webviewsRoutes = require('./api/routes/webviews');
const bodyParser = require('body-parser')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/nlbvita/currency_exchange', currencyExchangeRoutes);
app.use('/nlbvita/webviews', webviewsRoutes);

module.exports = app;
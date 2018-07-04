const express = require('express');
const app = express();
const currencyExchangeRoutes = require('./api/routes/currency_exchange');
const webviewsRoutes = require('./webviews/routes/webviews');
const bodyParser = require('body-parser')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/nlbvita', express.static('public/currency_exchange/build'));// setup static files into public folder

app.use('/nlbvita/currency_exchange', currencyExchangeRoutes);
app.use('/nlbvita/webviews', webviewsRoutes);

module.exports = app;

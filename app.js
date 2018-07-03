const express = require('express');
const app = express();
const currencyExchangeRoutes = require('./api/routes/currency_exchange');
const webviewsRoutes = require('./api/routes/webviews');
//const bodyParser = require('body-parser')
/*
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
*/
app.use('/nlbvita/currency_exchange', currencyExchangeRoutes);
app.use('/nlbvita/webviews', webviewsRoutes);

module.exports = app;